/**
 * QClaw .cjsc 字节码字符串提取器
 * 从 V8 字节码缓存二进制文件中提取所有可读字符串
 */
const fs = require('fs');
const path = require('path');

const CJSC_FILES = [
  '/tmp/qclaw_extracted/out/main/index.cjsc',
  '/tmp/qclaw_extracted/out/preload/index.cjsc',
];

function extractStrings(buffer, minLen = 4) {
  const results = {
    ascii: [],
    utf16: [],
  };
  
  // Extract ASCII strings (printable characters sequences)
  let current = '';
  for (let i = 0; i < buffer.length; i++) {
    const byte = buffer[i];
    if (byte >= 0x20 && byte <= 0x7E) {
      current += String.fromCharCode(byte);
    } else {
      if (current.length >= minLen) {
        results.ascii.push({ offset: i - current.length, value: current });
      }
      current = '';
    }
  }
  if (current.length >= minLen) {
    results.ascii.push({ offset: buffer.length - current.length, value: current });
  }

  // Extract UTF-16LE strings (common in V8 internals)
  current = '';
  for (let i = 0; i < buffer.length - 1; i += 2) {
    const code = buffer[i] | (buffer[i + 1] << 8);
    if (code >= 0x20 && code <= 0x7E) {
      current += String.fromCharCode(code);
    } else if (code >= 0x4E00 && code <= 0x9FFF) {
      // CJK characters
      current += String.fromCharCode(code);
    } else {
      if (current.length >= minLen) {
        results.utf16.push({ offset: i - current.length * 2, value: current });
      }
      current = '';
    }
  }

  return results;
}

function categorizeStrings(strings) {
  const categories = {
    ipc_channels: [],
    api_urls: [],
    require_modules: [],
    function_names: [],
    property_names: [],
    error_messages: [],
    config_keys: [],
    event_names: [],
    file_paths: [],
    crypto_related: [],
    chinese_text: [],
    other: [],
  };

  const seen = new Set();
  for (const { value } of strings) {
    if (seen.has(value)) continue;
    seen.add(value);

    if (/^(app|config|session|qclaw|security|updater|debug|safeStorage|logger|reporter|perf|galileo|instance|window|process):/.test(value)) {
      categories.ipc_channels.push(value);
    } else if (/^https?:\/\//.test(value) || /\/api\/|\/cgi-bin\/|\/jprx\//.test(value)) {
      categories.api_urls.push(value);
    } else if (/^(require|import)\(|^node:|^@tencent|^electron/.test(value)) {
      categories.require_modules.push(value);
    } else if (/Error|error|ERR_|ENOENT|EPERM|failed|invalid/i.test(value) && value.length > 8) {
      categories.error_messages.push(value);
    } else if (/^on[A-Z]|^handle[A-Z]|^get[A-Z]|^set[A-Z]|^create[A-Z]|^delete[A-Z]|^update[A-Z]|^check[A-Z]|^read[A-Z]|^write[A-Z]|^download[A-Z]|^upload[A-Z]/.test(value)) {
      categories.function_names.push(value);
    } else if (/Token|token|cookie|Cookie|auth|Auth|key|Key|secret|Secret|encrypt|decrypt|hash|hmac|aes|rsa|md5|sha/i.test(value) && value.length > 3) {
      categories.crypto_related.push(value);
    } else if (/\.(js|ts|json|html|css|vue|cjsc|node|dll|dylib|so)$/.test(value) || value.includes('/') && value.includes('.')) {
      categories.file_paths.push(value);
    } else if (/[\u4e00-\u9fff]/.test(value)) {
      categories.chinese_text.push(value);
    } else if (/^[A-Z_]{3,}$/.test(value)) {
      categories.config_keys.push(value);
    } else if (/^(click|mouse|key|drag|drop|focus|blur|resize|scroll|load|unload|change|input|submit|close|open|ready|error|message|data|connect|disconnect|timeout|abort|progress)/.test(value)) {
      categories.event_names.push(value);
    } else if (value.length >= 4 && value.length <= 60 && /^[a-zA-Z]/.test(value)) {
      categories.property_names.push(value);
    } else if (value.length >= 6) {
      categories.other.push(value);
    }
  }

  return categories;
}

// Main
for (const file of CJSC_FILES) {
  const basename = path.basename(path.dirname(file));
  console.log(`\n${'='.repeat(60)}`);
  console.log(`分析: ${basename}/index.cjsc`);
  console.log(`${'='.repeat(60)}`);

  const buffer = fs.readFileSync(file);
  console.log(`文件大小: ${buffer.length} bytes`);

  const strings = extractStrings(buffer, 4);
  console.log(`ASCII 字符串: ${strings.ascii.length}`);
  console.log(`UTF-16 字符串: ${strings.utf16.length}`);

  // Merge and deduplicate
  const allStrings = [...strings.ascii, ...strings.utf16];
  const categories = categorizeStrings(allStrings);

  const outputFile = `/tmp/qclaw_${basename}_strings.json`;
  fs.writeFileSync(outputFile, JSON.stringify(categories, null, 2));
  console.log(`\n✅ 已保存到: ${outputFile}`);

  // Print summary
  for (const [cat, items] of Object.entries(categories)) {
    if (items.length > 0) {
      console.log(`\n--- ${cat} (${items.length}) ---`);
      const preview = items.slice(0, 20);
      for (const item of preview) {
        console.log(`  ${item.length > 120 ? item.substring(0, 120) + '...' : item}`);
      }
      if (items.length > 20) {
        console.log(`  ... 还有 ${items.length - 20} 个`);
      }
    }
  }
}
