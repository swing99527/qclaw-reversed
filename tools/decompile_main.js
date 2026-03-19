// QClaw 字节码反编译脚本 - 使用与 bytecode-loader.cjs 完全相同的逻辑
// 用法: /tmp/node_modules/.bin/electron --no-sandbox /tmp/decompile_main.js

"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const v8 = require("v8");
const Module = require("module");

// 关键: 必须设置这两个 V8 flag，和 bytecode-loader.cjs 一致
v8.setFlagsFromString("--no-lazy");
v8.setFlagsFromString("--no-flush-bytecode");

const FLAG_HASH_OFFSET = 12;
const SOURCE_HASH_OFFSET = 8;

let dummyBytecode;

// 和 bytecode-loader.cjs 完全一样的函数
function setFlagHashHeader(bytecodeBuffer) {
  if (!dummyBytecode) {
    const script = new vm.Script("", { produceCachedData: true });
    dummyBytecode = script.createCachedData();
  }
  dummyBytecode.slice(FLAG_HASH_OFFSET, FLAG_HASH_OFFSET + 4).copy(bytecodeBuffer, FLAG_HASH_OFFSET);
}

function getSourceHashHeader(bytecodeBuffer) {
  return bytecodeBuffer.slice(SOURCE_HASH_OFFSET, SOURCE_HASH_OFFSET + 4);
}

function buffer2Number(buffer) {
  let ret = 0;
  ret |= buffer[3] << 24;
  ret |= buffer[2] << 16;
  ret |= buffer[1] << 8;
  ret |= buffer[0];
  return ret;
}

// ============================================================
// 反编译主逻辑
// ============================================================

const files = [
  { name: "main", path: "/tmp/qclaw_extracted/out/main/index.cjsc" },
  { name: "preload", path: "/tmp/qclaw_extracted/out/preload/index.cjsc" },
];

console.log("========== 环境信息 ==========");
console.log("Node.js:", process.version);
console.log("V8:", process.versions.v8);
console.log("Electron:", process.versions.electron);
console.log("Chrome:", process.versions.chrome);
console.log("");

for (const file of files) {
  console.log(`\n${"=".repeat(60)}`);
  console.log(`反编译: ${file.name} (${file.path})`);
  console.log("=".repeat(60));

  try {
    const bytecodeBuffer = fs.readFileSync(file.path);
    console.log(`文件大小: ${bytecodeBuffer.length} bytes`);

    // 1. 修复 flag hash (和 loader 一样)
    setFlagHashHeader(bytecodeBuffer);

    // 2. 读取源码长度 (和 loader 一样)
    const length = buffer2Number(getSourceHashHeader(bytecodeBuffer));
    console.log(`源码长度: ${length}`);

    // 3. 构建 dummyCode (和 loader 完全一样!)
    //    关键: 用双引号包裹 zero-width space，形成合法的 JS 字符串字面量
    let dummyCode = "";
    if (length > 1) {
      dummyCode = '"' + "\u200b".repeat(length - 2) + '"';
    }
    console.log(`dummyCode 长度: ${dummyCode.length}`);

    // 4. 创建 Script
    const script = new vm.Script(dummyCode, {
      filename: file.path,
      lineOffset: 0,
      displayErrors: true,
      cachedData: bytecodeBuffer,
    });

    console.log(`cachedDataRejected: ${script.cachedDataRejected}`);

    if (script.cachedDataRejected) {
      console.log("❌ 字节码被拒绝 - V8 版本不匹配");
      continue;
    }

    // 5. 执行得到 wrapper 函数
    const compiledWrapper = script.runInThisContext({
      filename: file.path,
      lineOffset: 0,
      columnOffset: 0,
      displayErrors: true,
    });

    console.log(`wrapper 类型: ${typeof compiledWrapper}`);
    console.log(`wrapper.toString() 长度: ${compiledWrapper.toString().length}`);

    // 6. 保存 wrapper 的 toString
    const wrapperStr = compiledWrapper.toString();
    const wrapperFile = `/tmp/qclaw_${file.name}_wrapper.js`;
    fs.writeFileSync(wrapperFile, wrapperStr, "utf8");
    console.log(`✅ wrapper 已保存到: ${wrapperFile}`);

    // 7. 尝试执行 wrapper (模拟 Node.js 模块环境)
    if (typeof compiledWrapper === "function") {
      const fakeModule = { exports: {}, id: file.name, filename: file.path, loaded: false };
      const fakeExports = fakeModule.exports;
      
      const requiredModules = [];
      const fakeRequire = function(id) {
        requiredModules.push(id);
        console.log(`  require("${id}")`);
        try { return require(id); } catch(e) { return {}; }
      };
      fakeRequire.resolve = function(request) { return request; };
      fakeRequire.main = process.mainModule;
      fakeRequire.extensions = Module._extensions;
      fakeRequire.cache = Module._cache;

      const dirname = path.dirname(file.path);

      try {
        // 和 loader 一样的参数: exports, require, module, filename, dirname, process, global
        compiledWrapper.apply(fakeExports, [fakeExports, fakeRequire, fakeModule, file.path, dirname, process, global]);

        const exportKeys = Object.keys(fakeModule.exports);
        console.log(`\n导出的 keys (${exportKeys.length}):`, exportKeys.slice(0, 30));
        console.log(`require 的模块:`, requiredModules);

        // 保存所有导出函数的源码
        const output = [];
        output.push(`// === ${file.name} 模块反编译结果 ===`);
        output.push(`// require 的模块: ${JSON.stringify(requiredModules)}`);
        output.push(`// 导出 keys: ${JSON.stringify(exportKeys)}`);
        output.push("");

        for (const key of exportKeys) {
          const val = fakeModule.exports[key];
          output.push(`\n// ========== exports.${key} (${typeof val}) ==========`);
          if (typeof val === "function") {
            output.push(val.toString());
          } else if (typeof val === "object" && val !== null) {
            try {
              const objStr = JSON.stringify(val, (k, v) => {
                if (typeof v === "function") return `[Function: ${v.name || "anonymous"}]`;
                return v;
              }, 2);
              output.push(objStr.substring(0, 10000));
            } catch(e) {
              output.push(`// [序列化错误: ${e.message}]`);
            }
          } else {
            output.push(`// value = ${JSON.stringify(val)}`);
          }
        }

        const exportFile = `/tmp/qclaw_${file.name}_exports.js`;
        fs.writeFileSync(exportFile, output.join("\n"), "utf8");
        console.log(`✅ 导出详情已保存到: ${exportFile}`);

      } catch(execErr) {
        console.log(`\n⚠️  执行出错 (缺少依赖/环境，这是正常的): ${execErr.message}`);
        // 即使执行失败，wrapper.toString() 的内容也很有价值
      }
    }

    console.log(`\n✅ ${file.name} 反编译完成！`);

  } catch(e) {
    console.log(`❌ 错误: ${e.message}`);
    console.log(e.stack);
  }
}

console.log("\n\n========== 全部完成 ==========");
console.log("查看输出文件:");
console.log("  /tmp/qclaw_main_wrapper.js");
console.log("  /tmp/qclaw_main_exports.js");
console.log("  /tmp/qclaw_preload_wrapper.js");
console.log("  /tmp/qclaw_preload_exports.js");
process.exit(0);
