import {
    e as c,
    U as Pe,
    W as xe,
    j as I,
    aE as Ce,
    aF as Z,
    P as Ae,
    aG as ze,
    x as Be,
    K as u
} from "./e-Kf-uhv6n.js";
import {
    S as fe,
    l as Me,
    C as Fe,
    F as Re,
    I as Ue,
    t as le,
    m as me,
    d as De,
    z as Ke,
    o as Le,
    w as Ne,
    A as Ve,
    a as _e,
    b as We,
    s as S,
    n as Ze,
    D as ke,
    p as qe
} from "./c-B57oo86K.js";
const Mn = (e, t) => {
    const r = c({}, e);
    return Object.keys(t).forEach(n => {
        const o = r[n];
        if (o) o.type || o.default ? o.default = t[n] : o.def ? o.def(t[n]) : r[n] = {
            type: o,
            default: t[n]
        };
        else throw new Error(`not have ${n} prop`)
    }), r
};
let de = e => setTimeout(e, 16),
    pe = e => clearTimeout(e);
typeof window < "u" && "requestAnimationFrame" in window && (de = e => window.requestAnimationFrame(e), pe = e => window.cancelAnimationFrame(e));
let k = 0;
const N = new Map;

function ge(e) {
    N.delete(e)
}

function F(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
    k += 1;
    const r = k;

    function n(o) {
        if (o === 0) ge(r), e();
        else {
            const a = de(() => {
                n(o - 1)
            });
            N.set(r, a)
        }
    }
    return n(t), r
}
F.cancel = e => {
    const t = N.get(e);
    return ge(t), pe(t)
};
let ye = !1;
try {
    const e = Object.defineProperty({}, "passive", {
        get() {
            ye = !0
        }
    });
    window.addEventListener("testPassive", null, e), window.removeEventListener("testPassive", null, e)
} catch {}

function Fn(e, t, r, n) {
    if (e && e.addEventListener) {
        let o = n;
        o === void 0 && ye && (t === "touchstart" || t === "touchmove" || t === "wheel") && (o = {
            passive: !1
        }), e.addEventListener(t, r, o)
    }
    return {
        remove: () => {
            e && e.removeEventListener && e.removeEventListener(t, r)
        }
    }
}

function Rn(e, t) {
    const r = c({}, e);
    for (let n = 0; n < t.length; n += 1) {
        const o = t[n];
        delete r[o]
    }
    return r
}

function Un(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
        n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1,
        o = e;
    if (Array.isArray(e) && (o = Pe(e)[0]), !o) return null;
    const a = fe(o, t, n);
    return a.props = r ? c(c({}, a.props), t) : a.props, xe(typeof a.props.class != "object"), a
}

function Dn(e, t, r) {
    Ue(fe(e, c({}, t)), r)
}
const ve = e => (e || []).some(t => Me(t) ? !(t.type === Fe || t.type === Re && !ve(t.children)) : !0) ? e : null;

function Kn(e, t, r, n) {
    var o;
    const a = (o = e[t]) === null || o === void 0 ? void 0 : o.call(e, r);
    return ve(a) ? a : n == null ? void 0 : n()
}
const Ln = (e => {
    if (!e) return !1;
    if (e.offsetParent) return !0;
    if (e.getBBox) {
        const t = e.getBBox();
        if (t.width || t.height) return !0
    }
    if (e.getBoundingClientRect) {
        const t = e.getBoundingClientRect();
        if (t.width || t.height) return !0
    }
    return !1
});
var be = typeof global == "object" && global && global.Object === Object && global,
    Ge = typeof self == "object" && self && self.Object === Object && self,
    l = be || Ge || Function("return this")(),
    P = l.Symbol,
    he = Object.prototype,
    He = he.hasOwnProperty,
    Je = he.toString,
    h = P ? P.toStringTag : void 0;

function Qe(e) {
    var t = He.call(e, h),
        r = e[h];
    try {
        e[h] = void 0;
        var n = !0
    } catch {}
    var o = Je.call(e);
    return n && (t ? e[h] = r : delete e[h]), o
}
var Xe = Object.prototype,
    Ye = Xe.toString;

function et(e) {
    return Ye.call(e)
}
var tt = "[object Null]",
    nt = "[object Undefined]",
    q = P ? P.toStringTag : void 0;

function $(e) {
    return e == null ? e === void 0 ? nt : tt : q && q in Object(e) ? Qe(e) : et(e)
}

function we(e) {
    var t = typeof e;
    return e != null && (t == "object" || t == "function")
}
var rt = "[object AsyncFunction]",
    ot = "[object Function]",
    at = "[object GeneratorFunction]",
    it = "[object Proxy]";

function $e(e) {
    if (!we(e)) return !1;
    var t = $(e);
    return t == ot || t == at || t == rt || t == it
}
var z = l["__core-js_shared__"],
    G = (function() {
        var e = /[^.]+$/.exec(z && z.keys && z.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : ""
    })();

function st(e) {
    return !!G && G in e
}
var ct = Function.prototype,
    ut = ct.toString;

function g(e) {
    if (e != null) {
        try {
            return ut.call(e)
        } catch {}
        try {
            return e + ""
        } catch {}
    }
    return ""
}
var ft = /[\\^$.*+?()[\]{}|]/g,
    lt = /^\[object .+?Constructor\]$/,
    mt = Function.prototype,
    dt = Object.prototype,
    pt = mt.toString,
    gt = dt.hasOwnProperty,
    yt = RegExp("^" + pt.call(gt).replace(ft, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

function vt(e) {
    if (!we(e) || st(e)) return !1;
    var t = $e(e) ? yt : lt;
    return t.test(g(e))
}

function bt(e, t) {
    return e == null ? void 0 : e[t]
}

function j(e, t) {
    var r = bt(e, t);
    return vt(r) ? r : void 0
}
var R = j(l, "Map"),
    Nn = Array.isArray;

function V(e) {
    return e != null && typeof e == "object"
}
var ht = "[object Arguments]";

function H(e) {
    return V(e) && $(e) == ht
}
var je = Object.prototype,
    wt = je.hasOwnProperty,
    $t = je.propertyIsEnumerable,
    Vn = H((function() {
        return arguments
    })()) ? H : function(e) {
        return V(e) && wt.call(e, "callee") && !$t.call(e, "callee")
    };

function jt() {
    return !1
}
var Oe = typeof exports == "object" && exports && !exports.nodeType && exports,
    J = Oe && typeof module == "object" && module && !module.nodeType && module,
    Ot = J && J.exports === Oe,
    Q = Ot ? l.Buffer : void 0,
    Tt = Q ? Q.isBuffer : void 0,
    _n = Tt || jt,
    St = 9007199254740991;

function Te(e) {
    return typeof e == "number" && e > -1 && e % 1 == 0 && e <= St
}
var Et = "[object Arguments]",
    It = "[object Array]",
    Pt = "[object Boolean]",
    xt = "[object Date]",
    Ct = "[object Error]",
    At = "[object Function]",
    zt = "[object Map]",
    Bt = "[object Number]",
    Mt = "[object Object]",
    Ft = "[object RegExp]",
    Rt = "[object Set]",
    Ut = "[object String]",
    Dt = "[object WeakMap]",
    Kt = "[object ArrayBuffer]",
    Lt = "[object DataView]",
    Nt = "[object Float32Array]",
    Vt = "[object Float64Array]",
    _t = "[object Int8Array]",
    Wt = "[object Int16Array]",
    Zt = "[object Int32Array]",
    kt = "[object Uint8Array]",
    qt = "[object Uint8ClampedArray]",
    Gt = "[object Uint16Array]",
    Ht = "[object Uint32Array]",
    i = {};
i[Nt] = i[Vt] = i[_t] = i[Wt] = i[Zt] = i[kt] = i[qt] = i[Gt] = i[Ht] = !0;
i[Et] = i[It] = i[Kt] = i[Pt] = i[Lt] = i[xt] = i[Ct] = i[At] = i[zt] = i[Bt] = i[Mt] = i[Ft] = i[Rt] = i[Ut] = i[Dt] = !1;

function Jt(e) {
    return V(e) && Te(e.length) && !!i[$(e)]
}

function Qt(e) {
    return function(t) {
        return e(t)
    }
}
var Se = typeof exports == "object" && exports && !exports.nodeType && exports,
    w = Se && typeof module == "object" && module && !module.nodeType && module,
    Xt = w && w.exports === Se,
    B = Xt && be.process,
    X = (function() {
        try {
            var e = w && w.require && w.require("util").types;
            return e || B && B.binding && B.binding("util")
        } catch {}
    })(),
    Y = X && X.isTypedArray,
    Wn = Y ? Qt(Y) : Jt,
    Yt = Object.prototype;

function en(e) {
    var t = e && e.constructor,
        r = typeof t == "function" && t.prototype || Yt;
    return e === r
}

function tn(e, t) {
    return function(r) {
        return e(t(r))
    }
}
var nn = tn(Object.keys, Object),
    rn = Object.prototype,
    on = rn.hasOwnProperty;

function Zn(e) {
    if (!en(e)) return nn(e);
    var t = [];
    for (var r in Object(e)) on.call(e, r) && r != "constructor" && t.push(r);
    return t
}

function kn(e) {
    return e != null && Te(e.length) && !$e(e)
}
var U = j(l, "DataView"),
    D = j(l, "Promise"),
    K = j(l, "Set"),
    L = j(l, "WeakMap"),
    ee = "[object Map]",
    an = "[object Object]",
    te = "[object Promise]",
    ne = "[object Set]",
    re = "[object WeakMap]",
    oe = "[object DataView]",
    sn = g(U),
    cn = g(R),
    un = g(D),
    fn = g(K),
    ln = g(L),
    v = $;
(U && v(new U(new ArrayBuffer(1))) != oe || R && v(new R) != ee || D && v(D.resolve()) != te || K && v(new K) != ne || L && v(new L) != re) && (v = function(e) {
    var t = $(e),
        r = t == an ? e.constructor : void 0,
        n = r ? g(r) : "";
    if (n) switch (n) {
        case sn:
            return oe;
        case cn:
            return ee;
        case un:
            return te;
        case fn:
            return ne;
        case ln:
            return re
    }
    return t
});
let M;

function Ee(e) {
    if (typeof document > "u") return 0;
    if (M === void 0) {
        const t = document.createElement("div");
        t.style.width = "100%", t.style.height = "200px";
        const r = document.createElement("div"),
            n = r.style;
        n.position = "absolute", n.top = "0", n.left = "0", n.pointerEvents = "none", n.visibility = "hidden", n.width = "200px", n.height = "150px", n.overflow = "hidden", r.appendChild(t), document.body.appendChild(r);
        const o = t.offsetWidth;
        r.style.overflow = "scroll";
        let a = t.offsetWidth;
        o === a && (a = r.clientWidth), document.body.removeChild(r), M = o - a
    }
    return M
}

function ae(e) {
    const t = e.match(/^(.*)px$/),
        r = Number(t == null ? void 0 : t[1]);
    return Number.isNaN(r) ? Ee() : r
}

function qn(e) {
    if (typeof document > "u" || !e || !(e instanceof Element)) return {
        width: 0,
        height: 0
    };
    const {
        width: t,
        height: r
    } = getComputedStyle(e, "::-webkit-scrollbar");
    return {
        width: ae(t),
        height: ae(r)
    }
}
const mn = `vc-util-locker-${Date.now()}`;
let ie = 0;

function dn() {
    return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth
}

function pn(e) {
    const t = me(() => !!e && !!e.value);
    ie += 1;
    const r = `${mn}_${ie}`;
    le(n => {
        if (I()) {
            if (t.value) {
                const o = Ee(),
                    a = dn();
                Ce(`
html body {
  overflow-y: hidden;
  ${a?`width: calc(100% - ${o}px);`:""}
}`, r)
            } else Z(r);
            n(() => {
                Z(r)
            })
        }
    }, {
        flush: "post"
    })
}
let p = 0;
const E = I(),
    se = e => {
        if (!E) return null;
        if (e) {
            if (typeof e == "string") return document.querySelectorAll(e)[0];
            if (typeof e == "function") return e();
            if (typeof e == "object" && e instanceof window.HTMLElement) return e
        }
        return document.body
    },
    Gn = De({
        compatConfig: {
            MODE: 3
        },
        name: "PortalWrapper",
        inheritAttrs: !1,
        props: {
            wrapperClassName: String,
            forceRender: {
                type: Boolean,
                default: void 0
            },
            getContainer: Ae.any,
            visible: {
                type: Boolean,
                default: void 0
            },
            autoLock: Be(),
            didUpdate: Function
        },
        setup(e, t) {
            let {
                slots: r
            } = t;
            const n = S(),
                o = S(),
                a = S(),
                f = S(1),
                b = I() && document.createElement("div"),
                O = () => {
                    var s, m;
                    n.value === b && ((m = (s = n.value) === null || s === void 0 ? void 0 : s.parentNode) === null || m === void 0 || m.removeChild(n.value)), n.value = null
                };
            let y = null;
            const x = function() {
                    return (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1) || n.value && !n.value.parentNode ? (y = se(e.getContainer), y ? (y.appendChild(n.value), !0) : !1) : !0
                },
                _ = () => E ? (n.value || (n.value = b, x(!0)), W(), n.value) : null,
                W = () => {
                    const {
                        wrapperClassName: s
                    } = e;
                    n.value && s && s !== n.value.className && (n.value.className = s)
                };
            return Ke(() => {
                W(), x()
            }), pn(me(() => e.autoLock && e.visible && I() && (n.value === document.body || n.value === b))), Le(() => {
                let s = !1;
                Ne([() => e.visible, () => e.getContainer], (m, T) => {
                    let [C, d] = m, [Ie, A] = T;
                    E && (y = se(e.getContainer), y === document.body && (C && !Ie ? p += 1 : s && (p -= 1))), s && (typeof d == "function" && typeof A == "function" ? d.toString() !== A.toString() : d !== A) && O(), s = !0
                }, {
                    immediate: !0,
                    flush: "post"
                }), Ve(() => {
                    x() || (a.value = F(() => {
                        f.value += 1
                    }))
                })
            }), _e(() => {
                const {
                    visible: s
                } = e;
                E && y === document.body && (p = s && p ? p - 1 : p), O(), F.cancel(a.value)
            }), () => {
                const {
                    forceRender: s,
                    visible: m
                } = e;
                let T = null;
                const C = {
                    getOpenCount: () => p,
                    getContainer: _
                };
                return f.value && (s || m || o.value) && (T = We(ze, {
                    getContainer: _,
                    ref: o,
                    didUpdate: e.didUpdate
                }, {
                    default: () => {
                        var d;
                        return (d = r.default) === null || d === void 0 ? void 0 : d.call(r, C)
                    }
                })), T
            }
        }
    });

function Hn(e) {
    const t = Symbol("contextKey");
    return {
        useProvide: (o, a) => {
            const f = ke({});
            return qe(t, f), le(() => {
                c(f, o, a || {})
            }), f
        },
        useInject: () => Ze(t, e) || {}
    }
}
const gn = e => ({
        animationDuration: e,
        animationFillMode: "both"
    }),
    yn = e => ({
        animationDuration: e,
        animationFillMode: "both"
    }),
    vn = function(e, t, r, n) {
        const a = (arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1) ? "&" : "";
        return {
            [`
      ${a}${e}-enter,
      ${a}${e}-appear
    `]: c(c({}, gn(n)), {
                animationPlayState: "paused"
            }),
            [`${a}${e}-leave`]: c(c({}, yn(n)), {
                animationPlayState: "paused"
            }),
            [`
      ${a}${e}-enter${e}-enter-active,
      ${a}${e}-appear${e}-appear-active
    `]: {
                animationName: t,
                animationPlayState: "running"
            },
            [`${a}${e}-leave${e}-leave-active`]: {
                animationName: r,
                animationPlayState: "running",
                pointerEvents: "none"
            }
        }
    },
    bn = new u("antZoomIn", {
        "0%": {
            transform: "scale(0.2)",
            opacity: 0
        },
        "100%": {
            transform: "scale(1)",
            opacity: 1
        }
    }),
    hn = new u("antZoomOut", {
        "0%": {
            transform: "scale(1)"
        },
        "100%": {
            transform: "scale(0.2)",
            opacity: 0
        }
    }),
    ce = new u("antZoomBigIn", {
        "0%": {
            transform: "scale(0.8)",
            opacity: 0
        },
        "100%": {
            transform: "scale(1)",
            opacity: 1
        }
    }),
    ue = new u("antZoomBigOut", {
        "0%": {
            transform: "scale(1)"
        },
        "100%": {
            transform: "scale(0.8)",
            opacity: 0
        }
    }),
    wn = new u("antZoomUpIn", {
        "0%": {
            transform: "scale(0.8)",
            transformOrigin: "50% 0%",
            opacity: 0
        },
        "100%": {
            transform: "scale(1)",
            transformOrigin: "50% 0%"
        }
    }),
    $n = new u("antZoomUpOut", {
        "0%": {
            transform: "scale(1)",
            transformOrigin: "50% 0%"
        },
        "100%": {
            transform: "scale(0.8)",
            transformOrigin: "50% 0%",
            opacity: 0
        }
    }),
    jn = new u("antZoomLeftIn", {
        "0%": {
            transform: "scale(0.8)",
            transformOrigin: "0% 50%",
            opacity: 0
        },
        "100%": {
            transform: "scale(1)",
            transformOrigin: "0% 50%"
        }
    }),
    On = new u("antZoomLeftOut", {
        "0%": {
            transform: "scale(1)",
            transformOrigin: "0% 50%"
        },
        "100%": {
            transform: "scale(0.8)",
            transformOrigin: "0% 50%",
            opacity: 0
        }
    }),
    Tn = new u("antZoomRightIn", {
        "0%": {
            transform: "scale(0.8)",
            transformOrigin: "100% 50%",
            opacity: 0
        },
        "100%": {
            transform: "scale(1)",
            transformOrigin: "100% 50%"
        }
    }),
    Sn = new u("antZoomRightOut", {
        "0%": {
            transform: "scale(1)",
            transformOrigin: "100% 50%"
        },
        "100%": {
            transform: "scale(0.8)",
            transformOrigin: "100% 50%",
            opacity: 0
        }
    }),
    En = new u("antZoomDownIn", {
        "0%": {
            transform: "scale(0.8)",
            transformOrigin: "50% 100%",
            opacity: 0
        },
        "100%": {
            transform: "scale(1)",
            transformOrigin: "50% 100%"
        }
    }),
    In = new u("antZoomDownOut", {
        "0%": {
            transform: "scale(1)",
            transformOrigin: "50% 100%"
        },
        "100%": {
            transform: "scale(0.8)",
            transformOrigin: "50% 100%",
            opacity: 0
        }
    }),
    Pn = {
        zoom: {
            inKeyframes: bn,
            outKeyframes: hn
        },
        "zoom-big": {
            inKeyframes: ce,
            outKeyframes: ue
        },
        "zoom-big-fast": {
            inKeyframes: ce,
            outKeyframes: ue
        },
        "zoom-left": {
            inKeyframes: jn,
            outKeyframes: On
        },
        "zoom-right": {
            inKeyframes: Tn,
            outKeyframes: Sn
        },
        "zoom-up": {
            inKeyframes: wn,
            outKeyframes: $n
        },
        "zoom-down": {
            inKeyframes: En,
            outKeyframes: In
        }
    },
    Jn = (e, t) => {
        const {
            antCls: r
        } = e, n = `${r}-${t}`, {
            inKeyframes: o,
            outKeyframes: a
        } = Pn[t];
        return [vn(n, o, a, t === "zoom-big-fast" ? e.motionDurationFast : e.motionDurationMid), {
            [`
        ${n}-enter,
        ${n}-appear
      `]: {
                transform: "scale(0)",
                opacity: 0,
                animationTimingFunction: e.motionEaseOutCirc,
                "&-prepare": {
                    transform: "none"
                }
            },
            [`${n}-leave`]: {
                animationTimingFunction: e.motionEaseInOutCirc
            }
        }]
    };

function xn(e, t, r) {
    const {
        focusElCls: n,
        focus: o,
        borderElCls: a
    } = r, f = a ? "> *" : "", b = ["hover", o ? "focus" : null, "active"].filter(Boolean).map(O => `&:${O} ${f}`).join(",");
    return {
        [`&-item:not(${t}-last-item)`]: {
            marginInlineEnd: -e.lineWidth
        },
        "&-item": c(c({
            [b]: {
                zIndex: 2
            }
        }, n ? {
            [`&${n}`]: {
                zIndex: 2
            }
        } : {}), {
            [`&[disabled] ${f}`]: {
                zIndex: 0
            }
        })
    }
}

function Cn(e, t, r) {
    const {
        borderElCls: n
    } = r, o = n ? `> ${n}` : "";
    return {
        [`&-item:not(${t}-first-item):not(${t}-last-item) ${o}`]: {
            borderRadius: 0
        },
        [`&-item:not(${t}-last-item)${t}-first-item`]: {
            [`& ${o}, &${e}-sm ${o}, &${e}-lg ${o}`]: {
                borderStartEndRadius: 0,
                borderEndEndRadius: 0
            }
        },
        [`&-item:not(${t}-first-item)${t}-last-item`]: {
            [`& ${o}, &${e}-sm ${o}, &${e}-lg ${o}`]: {
                borderStartStartRadius: 0,
                borderEndStartRadius: 0
            }
        }
    }
}

function Qn(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        focus: !0
    };
    const {
        componentCls: r
    } = e, n = `${r}-compact`;
    return {
        [n]: c(c({}, xn(e, n, t)), Cn(r, n, t))
    }
}
export {
    Hn as A, Dn as B, j as C, P as D, R as M, Gn as P, K as S, V as a, $ as b, Un as c, we as d, vn as e, Jn as f, Qn as g, Kn as h, Mn as i, Fn as j, Ee as k, qn as l, Ln as m, tn as n, Rn as o, kn as p, Nn as q, l as r, ye as s, _n as t, Wn as u, Vn as v, F as w, v as x, en as y, Zn as z
};