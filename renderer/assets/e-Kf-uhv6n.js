const __vite__mapDeps = (
    i,
    m = __vite__mapDeps,
    d = m.f ||
    (m.f = [
        "./c-Be3tAusk.js",
        "./c-B57oo86K.js",
        "./a-DwpcwrzL.css",
        "./c-DOO5YwRQ.js",
        "./c-r9gNuqcd.js",
        "./c-BYFbIAm8.js",
        "./c-DikSrXhV.js",
        "./c-DRQrsXw0.js",
        "./a-BES5z7EC.css",
        "./a-D7DqtxvX.css",
        "./c-DX3Ewe2z.js",
        "./c-Gmkq65k9.js",
        "./a-ChxxDMYc.css",
        "./c-iqhvNIZd.js",
        "./a-CNjlFs2C.css",
        "./c-BQfygBuG.js",
        "./a-D8wUcZ0p.css",
    ]),
) => i.map((i) => d[i]);
var Ep = Object.defineProperty;
var Cp = (e, t, n) =>
    t in e ?
    Ep(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) :
    (e[t] = n);
var Nt = (e, t, n) => Cp(e, typeof t != "symbol" ? t + "" : t, n);
import {
    d as Ge,
    o as gi,
    a as ll,
    c as Tp,
    b as D,
    e as Ip,
    u as dr,
    f as Pp,
    g as Ap,
    r as Ke,
    h as Rp,
    i as jc,
    j as $p,
    k as Np,
    F as Er,
    l as vo,
    C as zp,
    T as Lp,
    m as V,
    n as Kt,
    p as En,
    s as jt,
    q as dl,
    w as Yt,
    t as vi,
    v as jp,
    x as io,
    y as Mp,
    z as Dp,
    A as fl,
    B as pl,
    D as fr,
    E as Fp,
    G as hl,
    H as Hp,
    I as Mc,
    J as Qn,
    K as Bp,
} from "./c-B57oo86K.js";
(function() {
    const e = document.createElement("link").relList;
    if (!(e && e.supports && e.supports("modulepreload"))) {
        for (const n of document.querySelectorAll('link[rel="modulepreload"]'))
            t(n);
        new MutationObserver((n) => {
            for (const r of n)
                if (r.type === "childList")
                    for (const o of r.addedNodes)
                        o.tagName === "LINK" && o.rel === "modulepreload" && t(o);
        }).observe(document, {
            childList: !0,
            subtree: !0
        });
    }

    function t(n) {
        if (n.ep) return;
        n.ep = !0;
        const r = (function(o) {
            const s = {};
            return (
                o.integrity && (s.integrity = o.integrity),
                o.referrerPolicy && (s.referrerPolicy = o.referrerPolicy),
                o.crossOrigin === "use-credentials" ?
                (s.credentials = "include") :
                o.crossOrigin === "anonymous" ?
                (s.credentials = "omit") :
                (s.credentials = "same-origin"),
                s
            );
        })(n);
        fetch(n.href, r);
    }
})();
const Up = "modulepreload",
    qp = function(e, t) {
        return new URL(e, t).href;
    },
    Dc = {},
    yo = function(e, t, n) {
        let r = Promise.resolve();
        if (t && t.length > 0) {
            let s = function(p) {
                return Promise.all(
                    p.map((g) =>
                        Promise.resolve(g).then(
                            (v) => ({
                                status: "fulfilled",
                                value: v
                            }),
                            (v) => ({
                                status: "rejected",
                                reason: v
                            }),
                        ),
                    ),
                );
            };
            const u = document.getElementsByTagName("link"),
                d = document.querySelector("meta[property=csp-nonce]"),
                h =
                (d == null ? void 0 : d.nonce) ||
                (d == null ? void 0 : d.getAttribute("nonce"));
            r = s(
                t.map((p) => {
                    if ((p = qp(p, n)) in Dc) return;
                    Dc[p] = !0;
                    const g = p.endsWith(".css"),
                        v = g ? '[rel="stylesheet"]' : "";
                    if (n)
                        for (let C = u.length - 1; C >= 0; C--) {
                            const k = u[C];
                            if (k.href === p && (!g || k.rel === "stylesheet")) return;
                        }
                    else if (document.querySelector(`link[href="${p}"]${v}`)) return;
                    const w = document.createElement("link");
                    return (
                        (w.rel = g ? "stylesheet" : Up),
                        g || (w.as = "script"),
                        (w.crossOrigin = ""),
                        (w.href = p),
                        h && w.setAttribute("nonce", h),
                        document.head.appendChild(w),
                        g ?
                        new Promise((C, k) => {
                            (w.addEventListener("load", C),
                                w.addEventListener("error", () =>
                                    k(new Error(`Unable to preload CSS for ${p}`)),
                                ));
                        }) :
                        void 0
                    );
                }),
            );
        }

        function o(s) {
            const u = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (((u.payload = s), window.dispatchEvent(u), !u.defaultPrevented))
                throw s;
        }
        return r.then((s) => {
            for (const u of s || []) u.status === "rejected" && o(u.reason);
            return e().catch(o);
        });
    },
    Wp = {
        id: "app-root"
    },
    Gp = Ge({
        __name: "App",
        setup(e) {
            const t = Ap(() =>
                    yo(
                        () => import("./c-Be3tAusk.js"),
                        __vite__mapDeps([0, 1, 2]),
                        import.meta.url,
                    ),
                ),
                n = Ke(!1);
            let r = null;
            const o = (s) => {
                (s.preventDefault(), s.stopPropagation());
            };
            return (
                gi(() => {
                    var s, u;
                    ((r =
                            ((u = (s = window.electronAPI) == null ? void 0 : s.debug) == null ?
                                void 0 :
                                u.onTogglePanel(() => {
                                    n.value = !n.value;
                                })) ?? null),
                        document.addEventListener("dragover", o),
                        document.addEventListener("drop", o));
                }),
                ll(() => {
                    (r == null || r(),
                        document.removeEventListener("dragover", o),
                        document.removeEventListener("drop", o));
                }),
                (s, u) => {
                    const d = Rp("router-view");
                    return (
                        jc(),
                        Tp("div", Wp, [
                            D(d),
                            n.value ? (jc(), Ip(dr(t), {
                                key: 0
                            })) : Pp("", !0),
                        ])
                    );
                }
            );
        },
    }),
    Zp = (e, t) => {
        const n = e.__vccOpts || e;
        for (const [r, o] of t) n[r] = o;
        return n;
    },
    Xp = Zp(Gp, [
        ["__scopeId", "data-v-f0d3f818"]
    ]),
    Vp = () =>
    yo(
        () => import("./c-DOO5YwRQ.js"),
        __vite__mapDeps([3, 1, 4, 5, 6, 7, 8, 9]),
        import.meta.url,
    ),
    Jp = () =>
    yo(
        () => import("./c-DX3Ewe2z.js"),
        __vite__mapDeps([10, 1, 4, 5, 11, 7, 12, 6, 8, 13, 14]),
        import.meta.url,
    ),
    Kp = () =>
    yo(
        () => import("./c-BQfygBuG.js"),
        __vite__mapDeps([15, 4, 5, 1, 13, 16]),
        import.meta.url,
    ),
    Yp = () =>
    yo(
        () => import("./c-Gmkq65k9.js").then((e) => e.n),
        __vite__mapDeps([11, 1, 5, 7, 12]),
        import.meta.url,
    ),
    Qp = [{
            path: "/",
            redirect: "/init-loading"
        },
        {
            path: "/wx-login",
            name: "WXLogin",
            component: Vp,
            meta: {
                title: "微信登录 - QClaw"
            },
        },
        {
            path: "/init-loading",
            name: "InitLoading",
            component: Kp,
            meta: {
                title: "初始化中 - QClaw"
            },
        },
        {
            path: "/chat",
            name: "Chat",
            component: Jp,
            meta: {
                title: "AI 助手 - QClaw"
            },
        },
        {
            path: "/office",
            name: "Office",
            component: Yp,
            meta: {
                title: "像素办公室 - QClaw"
            },
        },
    ],
    Fc = $p({
        history: Np(),
        routes: Qp
    }),
    bo = "PC_Qclaw",
    Lt = {
        CLICK_NEW: "click_new",
        EXPO: "expo",
        SUBMIT: "submit",
        RESOURCE_MONITOR: "resource_monitor",
        CRASH_EVENT: "crash_event",
        INTERACTION_EVENT: "interaction_event",
        JANK_EVENT: "jank_event",
    };
class eh {
    constructor(t) {
        Nt(this, "appkey");
        Nt(this, "guid");
        Nt(this, "onReportSuccess");
        Nt(this, "onReportFail");
        Nt(this, "baseUrl");
        if (!t.baseUrl)
            throw new Error("[ClientAction] baseUrl 为必填项，请从上层传入上报地址");
        ((this.baseUrl = t.baseUrl),
            (this.appkey = t.appkey ?? bo),
            (this.guid = t.guid ?? ""),
            (this.onReportSuccess = t.onReportSuccess ?? (() => {})),
            (this.onReportFail = t.onReportFail ?? (() => {})));
    }
    buildPayload(t, n, r) {
        const o = {};
        for (const u in n) {
            const d = n[u];
            o[u] = d != null ? String(d) : "";
        }
        o.tdbank_imp_date = String(Date.now());
        const s = {
            app_key: this.appkey,
            version: "1.0.0",
            guid: this.guid,
            event_code: t,
            params: o,
        };
        if (r)
            for (const u in r) s[u] = r[u];
        return s;
    }
    reportDirect(t, n, r) {
        const o = this.buildPayload(t, n, r);
        fetch(this.baseUrl, {
                headers: {
                    "Content-Type": "application/json"
                },
                method: "POST",
                body: JSON.stringify(o),
                mode: "cors",
            })
            .then((s) => s.json())
            .then((s) => {
                const u = s;
                u.retCode === 0 ? this.onReportSuccess() : this.onReportFail(u.retCode);
            })
            .catch(() => this.onReportFail());
    }
    async reportAsync(t, n, r) {
        const o = this.buildPayload(t, n, r);
        try {
            const s = await fetch(this.baseUrl, {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    method: "POST",
                    body: JSON.stringify(o),
                    mode: "cors",
                }),
                u = await s.json();
            return u.retCode === 0 ?
                (this.onReportSuccess(), !0) :
                (this.onReportFail(u.retCode), !1);
        } catch {
            return (this.onReportFail(), !1);
        }
    }
    reportConservation(t, n, r) {
        const o = this.buildPayload(t, n, r);
        navigator.sendBeacon(this.baseUrl, JSON.stringify(o));
    }
}
class th {
    constructor(t) {
        Nt(this, "appkey");
        Nt(this, "guid");
        Nt(this, "onReportSuccess");
        Nt(this, "onReportFail");
        Nt(this, "baseUrl");
        if (!t.baseUrl)
            throw new Error("[ClientAction] baseUrl 为必填项，请从上层传入上报地址");
        ((this.baseUrl = t.baseUrl),
            (this.appkey = t.appkey ?? bo),
            (this.guid = t.guid ?? ""),
            (this.onReportSuccess = t.onReportSuccess ?? (() => {})),
            (this.onReportFail = t.onReportFail ?? (() => {})));
    }
    buildPayload(t, n, r) {
        const o = {};
        for (const u in n) {
            const d = n[u];
            o[u] = d != null ? String(d) : "";
        }
        o.tdbank_imp_date = String(Date.now());
        const s = {
            app_key: this.appkey,
            version: "1.0.0",
            guid: this.guid,
            event_code: t,
            params: o,
        };
        if (r)
            for (const u in r) s[u] = r[u];
        return JSON.stringify(s);
    }
    reportDirect(t, n, r) {
        const o = this.buildPayload(t, n, r);
        fetch(this.baseUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: o,
            })
            .then((s) => s.json())
            .then((s) => {
                const u = s;
                u.retCode === 0 ? this.onReportSuccess() : this.onReportFail(u.retCode);
            })
            .catch(() => this.onReportFail());
    }
    async reportAsync(t, n, r) {
        const o = this.buildPayload(t, n, r);
        try {
            const s = await fetch(this.baseUrl, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: o,
                }),
                u = await s.json();
            return u.retCode === 0 ?
                (this.onReportSuccess(), !0) :
                (this.onReportFail(u.retCode), !1);
        } catch {
            return (this.onReportFail(), !1);
        }
    }
}

function nh() {
    return (
        typeof globalThis < "u" &&
        "window" in globalThis &&
        "navigator" in globalThis
    );
}

function rh(e = {}) {
    return nh() ? new eh(e) : new th(e);
}
let Jo = null,
    ml = {};

function oh(e) {
    ((ml = e), (Jo = null));
}

function ih() {
    return (Jo || (Jo = rh(ml)), Jo);
}

function ah(e, t = {}, n) {
    if (e)
        try {
            let r;
            if (t instanceof Map) {
                r = {};
                for (const [o, s] of t) r[o] = s;
            } else r = {
                ...t
            };
            ih().reportDirect(e, r, n);
        } catch {}
}

function N(e, t, n) {
    function r(d, h) {
        if (
            (d._zod ||
                Object.defineProperty(d, "_zod", {
                    value: {
                        def: h,
                        constr: u,
                        traits: new Set()
                    },
                    enumerable: !1,
                }),
                d._zod.traits.has(e))
        )
            return;
        (d._zod.traits.add(e), t(d, h));
        const p = u.prototype,
            g = Object.keys(p);
        for (let v = 0; v < g.length; v++) {
            const w = g[v];
            w in d || (d[w] = p[w].bind(d));
        }
    }
    const o = (n == null ? void 0 : n.Parent) ?? Object;
    class s extends o {}

    function u(d) {
        var h;
        const p = n != null && n.Parent ? new s() : this;
        (r(p, d), (h = p._zod).deferred ?? (h.deferred = []));
        for (const g of p._zod.deferred) g();
        return p;
    }
    return (
        Object.defineProperty(s, "name", {
            value: e
        }),
        Object.defineProperty(u, "init", {
            value: r
        }),
        Object.defineProperty(u, Symbol.hasInstance, {
            value: (d) => {
                var h, p;
                return (
                    !!(n != null && n.Parent && d instanceof n.Parent) ||
                    ((p =
                            (h = d == null ? void 0 : d._zod) == null ? void 0 : h.traits) ==
                        null ?
                        void 0 :
                        p.has(e))
                );
            },
        }),
        Object.defineProperty(u, "name", {
            value: e
        }),
        u
    );
}
class ar extends Error {
    constructor() {
        super(
            "Encountered Promise during synchronous parse. Use .parseAsync() instead.",
        );
    }
}
class gl extends Error {
    constructor(t) {
        (super(`Encountered unidirectional transform during encode: ${t}`),
            (this.name = "ZodEncodeError"));
    }
}
const vl = {};

function _n(e) {
    return vl;
}

function yl(e) {
    const t = Object.values(e).filter((r) => typeof r == "number");
    return Object.entries(e)
        .filter(([r, o]) => t.indexOf(+r) === -1)
        .map(([r, o]) => o);
}

function Ea(e, t) {
    return typeof t == "bigint" ? t.toString() : t;
}

function is(e) {
    return {
        get value() {
            {
                const t = e();
                return (Object.defineProperty(this, "value", {
                    value: t
                }), t);
            }
        },
    };
}

function as(e) {
    return e == null;
}

function ss(e) {
    const t = e.startsWith("^") ? 1 : 0,
        n = e.endsWith("$") ? e.length - 1 : e.length;
    return e.slice(t, n);
}

function sh(e, t) {
    const n = (e.toString().split(".")[1] || "").length,
        r = t.toString();
    let o = (r.split(".")[1] || "").length;
    if (o === 0 && /\d?e-\d?/.test(r)) {
        const u = r.match(/\d?e-(\d?)/);
        u != null && u[1] && (o = Number.parseInt(u[1]));
    }
    const s = n > o ? n : o;
    return (
        (Number.parseInt(e.toFixed(s).replace(".", "")) %
            Number.parseInt(t.toFixed(s).replace(".", ""))) /
        10 ** s
    );
}
const Hc = Symbol("evaluating");

function ke(e, t, n) {
    let r;
    Object.defineProperty(e, t, {
        get() {
            if (r !== Hc) return (r === void 0 && ((r = Hc), (r = n())), r);
        },
        set(o) {
            Object.defineProperty(e, t, {
                value: o
            });
        },
        configurable: !0,
    });
}

function qn(e, t, n) {
    Object.defineProperty(e, t, {
        value: n,
        writable: !0,
        enumerable: !0,
        configurable: !0,
    });
}

function Cn(...e) {
    const t = {};
    for (const n of e) {
        const r = Object.getOwnPropertyDescriptors(n);
        Object.assign(t, r);
    }
    return Object.defineProperties({}, t);
}

function Bc(e) {
    return JSON.stringify(e);
}

function ch(e) {
    return e
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/[\s_-]+/g, "-")
        .replace(/^-+|-+$/g, "");
}
const bl =
    "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {};

function si(e) {
    return typeof e == "object" && e !== null && !Array.isArray(e);
}
const uh = is(() => {
    var e;
    if (
        typeof navigator < "u" &&
        (e = navigator == null ? void 0 : navigator.userAgent) != null &&
        e.includes("Cloudflare")
    )
        return !1;
    try {
        return (new Function(""), !0);
    } catch {
        return !1;
    }
});

function pr(e) {
    if (si(e) === !1) return !1;
    const t = e.constructor;
    if (t === void 0 || typeof t != "function") return !0;
    const n = t.prototype;
    return (
        si(n) !== !1 &&
        Object.prototype.hasOwnProperty.call(n, "isPrototypeOf") !== !1
    );
}

function wl(e) {
    return pr(e) ? {
        ...e
    } : Array.isArray(e) ? [...e] : e;
}
const lh = new Set(["string", "number", "symbol"]);

function yi(e) {
    return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function Tn(e, t, n) {
    const r = new e._zod.constr(t ?? e._zod.def);
    return ((t && !(n != null && n.parent)) || (r._zod.parent = e), r);
}

function ue(e) {
    const t = e;
    if (!t) return {};
    if (typeof t == "string") return {
        error: () => t
    };
    if ((t == null ? void 0 : t.message) !== void 0) {
        if ((t == null ? void 0 : t.error) !== void 0)
            throw new Error("Cannot specify both `message` and `error` params");
        t.error = t.message;
    }
    return (
        delete t.message,
        typeof t.error == "string" ? {
            ...t,
            error: () => t.error
        } : t
    );
}

function dh(e) {
    return Object.keys(e).filter(
        (t) => e[t]._zod.optin === "optional" && e[t]._zod.optout === "optional",
    );
}
const fh = {
    safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
    int32: [-2147483648, 2147483647],
    uint32: [0, 4294967295],
    float32: [-34028234663852886e22, 34028234663852886e22],
    float64: [-Number.MAX_VALUE, Number.MAX_VALUE],
};

function ph(e, t) {
    const n = e._zod.def,
        r = n.checks;
    if (r && r.length > 0)
        throw new Error(
            ".pick() cannot be used on object schemas containing refinements",
        );
    const o = Cn(e._zod.def, {
        get shape() {
            const s = {};
            for (const u in t) {
                if (!(u in n.shape)) throw new Error(`Unrecognized key: "${u}"`);
                t[u] && (s[u] = n.shape[u]);
            }
            return (qn(this, "shape", s), s);
        },
        checks: [],
    });
    return Tn(e, o);
}

function hh(e, t) {
    const n = e._zod.def,
        r = n.checks;
    if (r && r.length > 0)
        throw new Error(
            ".omit() cannot be used on object schemas containing refinements",
        );
    const o = Cn(e._zod.def, {
        get shape() {
            const s = {
                ...e._zod.def.shape
            };
            for (const u in t) {
                if (!(u in n.shape)) throw new Error(`Unrecognized key: "${u}"`);
                t[u] && delete s[u];
            }
            return (qn(this, "shape", s), s);
        },
        checks: [],
    });
    return Tn(e, o);
}

function mh(e, t) {
    if (!pr(t))
        throw new Error("Invalid input to extend: expected a plain object");
    const n = e._zod.def.checks;
    if (n && n.length > 0) {
        const o = e._zod.def.shape;
        for (const s in t)
            if (Object.getOwnPropertyDescriptor(o, s) !== void 0)
                throw new Error(
                    "Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.",
                );
    }
    const r = Cn(e._zod.def, {
        get shape() {
            const o = {
                ...e._zod.def.shape,
                ...t
            };
            return (qn(this, "shape", o), o);
        },
    });
    return Tn(e, r);
}

function gh(e, t) {
    if (!pr(t))
        throw new Error("Invalid input to safeExtend: expected a plain object");
    const n = Cn(e._zod.def, {
        get shape() {
            const r = {
                ...e._zod.def.shape,
                ...t
            };
            return (qn(this, "shape", r), r);
        },
    });
    return Tn(e, n);
}

function vh(e, t) {
    const n = Cn(e._zod.def, {
        get shape() {
            const r = {
                ...e._zod.def.shape,
                ...t._zod.def.shape
            };
            return (qn(this, "shape", r), r);
        },
        get catchall() {
            return t._zod.def.catchall;
        },
        checks: [],
    });
    return Tn(e, n);
}

function yh(e, t, n) {
    const r = t._zod.def.checks;
    if (r && r.length > 0)
        throw new Error(
            ".partial() cannot be used on object schemas containing refinements",
        );
    const o = Cn(t._zod.def, {
        get shape() {
            const s = t._zod.def.shape,
                u = {
                    ...s
                };
            if (n)
                for (const d in n) {
                    if (!(d in s)) throw new Error(`Unrecognized key: "${d}"`);
                    n[d] &&
                        (u[d] = e ? new e({
                            type: "optional",
                            innerType: s[d]
                        }) : s[d]);
                }
            else
                for (const d in s)
                    u[d] = e ? new e({
                        type: "optional",
                        innerType: s[d]
                    }) : s[d];
            return (qn(this, "shape", u), u);
        },
        checks: [],
    });
    return Tn(t, o);
}

function bh(e, t, n) {
    const r = Cn(t._zod.def, {
        get shape() {
            const o = t._zod.def.shape,
                s = {
                    ...o
                };
            if (n)
                for (const u in n) {
                    if (!(u in s)) throw new Error(`Unrecognized key: "${u}"`);
                    n[u] && (s[u] = new e({
                        type: "nonoptional",
                        innerType: o[u]
                    }));
                }
            else
                for (const u in o)
                    s[u] = new e({
                        type: "nonoptional",
                        innerType: o[u]
                    });
            return (qn(this, "shape", s), s);
        },
    });
    return Tn(t, r);
}

function nr(e, t = 0) {
    var n;
    if (e.aborted === !0) return !0;
    for (let r = t; r < e.issues.length; r++)
        if (((n = e.issues[r]) == null ? void 0 : n.continue) !== !0) return !0;
    return !1;
}

function rr(e, t) {
    return t.map((n) => {
        var r;
        return ((r = n).path ?? (r.path = []), n.path.unshift(e), n);
    });
}

function jo(e) {
    return typeof e == "string" ? e : e == null ? void 0 : e.message;
}

function xn(e, t, n) {
    var o, s, u, d, h, p;
    const r = {
        ...e,
        path: e.path ?? []
    };
    if (!e.message) {
        const g =
            jo(
                (u =
                    (s = (o = e.inst) == null ? void 0 : o._zod.def) == null ?
                    void 0 :
                    s.error) == null ?
                void 0 :
                u.call(s, e),
            ) ??
            jo((d = t == null ? void 0 : t.error) == null ? void 0 : d.call(t, e)) ??
            jo((h = n.customError) == null ? void 0 : h.call(n, e)) ??
            jo((p = n.localeError) == null ? void 0 : p.call(n, e)) ??
            "Invalid input";
        r.message = g;
    }
    return (
        delete r.inst,
        delete r.continue,
        (t != null && t.reportInput) || delete r.input,
        r
    );
}

function cs(e) {
    return Array.isArray(e) ?
        "array" :
        typeof e == "string" ?
        "string" :
        "unknown";
}

function ao(...e) {
    const [t, n, r] = e;
    return typeof t == "string" ?
        {
            message: t,
            code: "custom",
            input: n,
            inst: r
        } :
        {
            ...t
        };
}
const Sl = (e, t) => {
        ((e.name = "$ZodError"),
            Object.defineProperty(e, "_zod", {
                value: e._zod,
                enumerable: !1
            }),
            Object.defineProperty(e, "issues", {
                value: t,
                enumerable: !1
            }),
            (e.message = JSON.stringify(t, Ea, 2)),
            Object.defineProperty(e, "toString", {
                value: () => e.message,
                enumerable: !1,
            }));
    },
    _l = N("$ZodError", Sl),
    xl = N("$ZodError", Sl, {
        Parent: Error
    });

function wh(e, t = (n) => n.message) {
    const n = {},
        r = [];
    for (const o of e.issues)
        o.path.length > 0 ?
        ((n[o.path[0]] = n[o.path[0]] || []), n[o.path[0]].push(t(o))) :
        r.push(t(o));
    return {
        formErrors: r,
        fieldErrors: n
    };
}

function Sh(e, t = (n) => n.message) {
    const n = {
            _errors: []
        },
        r = (o) => {
            for (const s of o.issues)
                if (s.code === "invalid_union" && s.errors.length)
                    s.errors.map((u) => r({
                        issues: u
                    }));
                else if (s.code === "invalid_key") r({
                issues: s.issues
            });
            else if (s.code === "invalid_element") r({
                issues: s.issues
            });
            else if (s.path.length === 0) n._errors.push(t(s));
            else {
                let u = n,
                    d = 0;
                for (; d < s.path.length;) {
                    const h = s.path[d];
                    (d === s.path.length - 1 ?
                        ((u[h] = u[h] || {
                            _errors: []
                        }), u[h]._errors.push(t(s))) :
                        (u[h] = u[h] || {
                            _errors: []
                        }),
                        (u = u[h]),
                        d++);
                }
            }
        };
    return (r(e), n);
}
const us = (e) => (t, n, r, o) => {
        const s = r ? Object.assign(r, {
                async: !1
            }) : {
                async: !1
            },
            u = t._zod.run({
                value: n,
                issues: []
            }, s);
        if (u instanceof Promise) throw new ar();
        if (u.issues.length) {
            const d = new((o == null ? void 0 : o.Err) ?? e)(
                u.issues.map((h) => xn(h, s, _n())),
            );
            throw (bl(d, o == null ? void 0 : o.callee), d);
        }
        return u.value;
    },
    ls = (e) => async (t, n, r, o) => {
            const s = r ? Object.assign(r, {
                async: !0
            }) : {
                async: !0
            };
            let u = t._zod.run({
                value: n,
                issues: []
            }, s);
            if ((u instanceof Promise && (u = await u), u.issues.length)) {
                const d = new((o == null ? void 0 : o.Err) ?? e)(
                    u.issues.map((h) => xn(h, s, _n())),
                );
                throw (bl(d, o == null ? void 0 : o.callee), d);
            }
            return u.value;
        },
        bi = (e) => (t, n, r) => {
            const o = r ? {
                    ...r,
                    async: !1
                } : {
                    async: !1
                },
                s = t._zod.run({
                    value: n,
                    issues: []
                }, o);
            if (s instanceof Promise) throw new ar();
            return s.issues.length ?
                {
                    success: !1,
                    error: new(e ?? _l)(s.issues.map((u) => xn(u, o, _n()))),
                } :
                {
                    success: !0,
                    data: s.value
                };
        },
        _h = bi(xl),
        wi = (e) => async (t, n, r) => {
                const o = r ? Object.assign(r, {
                    async: !0
                }) : {
                    async: !0
                };
                let s = t._zod.run({
                    value: n,
                    issues: []
                }, o);
                return (
                    s instanceof Promise && (s = await s),
                    s.issues.length ?
                    {
                        success: !1,
                        error: new e(s.issues.map((u) => xn(u, o, _n())))
                    } :
                    {
                        success: !0,
                        data: s.value
                    }
                );
            },
            xh = wi(xl),
            Oh = (e) => (t, n, r) => {
                const o = r ?
                    Object.assign(r, {
                        direction: "backward"
                    }) :
                    {
                        direction: "backward"
                    };
                return us(e)(t, n, o);
            },
            kh = (e) => (t, n, r) => us(e)(t, n, r),
            Eh = (e) => async (t, n, r) => {
                    const o = r ?
                        Object.assign(r, {
                            direction: "backward"
                        }) :
                        {
                            direction: "backward"
                        };
                    return ls(e)(t, n, o);
                },
                Ch = (e) => async (t, n, r) => ls(e)(t, n, r),
                    Th = (e) => (t, n, r) => {
                        const o = r ?
                            Object.assign(r, {
                                direction: "backward"
                            }) :
                            {
                                direction: "backward"
                            };
                        return bi(e)(t, n, o);
                    },
                    Ih = (e) => (t, n, r) => bi(e)(t, n, r),
                    Ph = (e) => async (t, n, r) => {
                            const o = r ?
                                Object.assign(r, {
                                    direction: "backward"
                                }) :
                                {
                                    direction: "backward"
                                };
                            return wi(e)(t, n, o);
                        },
                        Ah = (e) => async (t, n, r) => wi(e)(t, n, r),
                            Rh = /^[cC][^\s-]{8,}$/,
                            $h = /^[0-9a-z]+$/,
                            Nh = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,
                            zh = /^[0-9a-vA-V]{20}$/,
                            Lh = /^[A-Za-z0-9]{27}$/,
                            jh = /^[a-zA-Z0-9_-]{21}$/,
                            Mh =
                            /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,
                            Dh =
                            /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,
                            Uc = (e) =>
                            e ?
                            new RegExp(
                                `^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`,
                            ) :
                            /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
                            Fh =
                            /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,
                            Hh = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";

function Bh() {
    return new RegExp(Hh, "u");
}
const Uh =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
    qh =
    /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/,
    Wh =
    /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,
    Gh =
    /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
    Zh =
    /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,
    Ol = /^[A-Za-z0-9_-]*$/,
    Xh = /^\+[1-9]\d{6,14}$/,
    kl =
    "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",
    Vh = new RegExp(`^${kl}$`);

function El(e) {
    const t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
    return typeof e.precision == "number" ?
        e.precision === -1 ?
        `${t}` :
        e.precision === 0 ?
        `${t}:[0-5]\\d` :
        `${t}:[0-5]\\d\\.\\d{${e.precision}}` :
        `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}

function Jh(e) {
    return new RegExp(`^${El(e)}$`);
}

function Kh(e) {
    const t = El({
            precision: e.precision
        }),
        n = ["Z"];
    (e.local && n.push(""),
        e.offset && n.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)"));
    const r = `${t}(?:${n.join("|")})`;
    return new RegExp(`^${kl}T(?:${r})$`);
}
const Yh = (e) =>
    new RegExp(
        `^${e ? `[\\s\\S]{${(e == null ? void 0 : e.minimum) ?? 0},${(e == null ? void 0 : e.maximum) ?? ""}}` : "[\\s\\S]*"}$`,
    ),
    Qh = /^-?\d+$/,
    Cl = /^-?\d+(?:\.\d+)?$/,
    em = /^(?:true|false)$/i,
    tm = /^[^A-Z]*$/,
    nm = /^[^a-z]*$/,
    ut = N("$ZodCheck", (e, t) => {
        var n;
        (e._zod ?? (e._zod = {}),
            (e._zod.def = t),
            (n = e._zod).onattach ?? (n.onattach = []));
    }),
    Tl = {
        number: "number",
        bigint: "bigint",
        object: "date"
    },
    Il = N("$ZodCheckLessThan", (e, t) => {
        ut.init(e, t);
        const n = Tl[typeof t.value];
        (e._zod.onattach.push((r) => {
                const o = r._zod.bag,
                    s =
                    (t.inclusive ? o.maximum : o.exclusiveMaximum) ??
                    Number.POSITIVE_INFINITY;
                t.value < s &&
                    (t.inclusive ? (o.maximum = t.value) : (o.exclusiveMaximum = t.value));
            }),
            (e._zod.check = (r) => {
                (t.inclusive ? r.value <= t.value : r.value < t.value) ||
                r.issues.push({
                    origin: n,
                    code: "too_big",
                    maximum: typeof t.value == "object" ? t.value.getTime() : t.value,
                    input: r.value,
                    inclusive: t.inclusive,
                    inst: e,
                    continue: !t.abort,
                });
            }));
    }),
    Pl = N("$ZodCheckGreaterThan", (e, t) => {
        ut.init(e, t);
        const n = Tl[typeof t.value];
        (e._zod.onattach.push((r) => {
                const o = r._zod.bag,
                    s =
                    (t.inclusive ? o.minimum : o.exclusiveMinimum) ??
                    Number.NEGATIVE_INFINITY;
                t.value > s &&
                    (t.inclusive ? (o.minimum = t.value) : (o.exclusiveMinimum = t.value));
            }),
            (e._zod.check = (r) => {
                (t.inclusive ? r.value >= t.value : r.value > t.value) ||
                r.issues.push({
                    origin: n,
                    code: "too_small",
                    minimum: typeof t.value == "object" ? t.value.getTime() : t.value,
                    input: r.value,
                    inclusive: t.inclusive,
                    inst: e,
                    continue: !t.abort,
                });
            }));
    }),
    rm = N("$ZodCheckMultipleOf", (e, t) => {
        (ut.init(e, t),
            e._zod.onattach.push((n) => {
                var r;
                (r = n._zod.bag).multipleOf ?? (r.multipleOf = t.value);
            }),
            (e._zod.check = (n) => {
                if (typeof n.value != typeof t.value)
                    throw new Error("Cannot mix number and bigint in multiple_of check.");
                (typeof n.value == "bigint" ?
                    n.value % t.value === BigInt(0) :
                    sh(n.value, t.value) === 0) ||
                n.issues.push({
                    origin: typeof n.value,
                    code: "not_multiple_of",
                    divisor: t.value,
                    input: n.value,
                    inst: e,
                    continue: !t.abort,
                });
            }));
    }),
    om = N("$ZodCheckNumberFormat", (e, t) => {
        var u;
        (ut.init(e, t), (t.format = t.format || "float64"));
        const n = (u = t.format) == null ? void 0 : u.includes("int"),
            r = n ? "int" : "number",
            [o, s] = fh[t.format];
        (e._zod.onattach.push((d) => {
                const h = d._zod.bag;
                ((h.format = t.format),
                    (h.minimum = o),
                    (h.maximum = s),
                    n && (h.pattern = Qh));
            }),
            (e._zod.check = (d) => {
                const h = d.value;
                if (n) {
                    if (!Number.isInteger(h))
                        return void d.issues.push({
                            expected: r,
                            format: t.format,
                            code: "invalid_type",
                            continue: !1,
                            input: h,
                            inst: e,
                        });
                    if (!Number.isSafeInteger(h))
                        return void(h > 0 ?
                            d.issues.push({
                                input: h,
                                code: "too_big",
                                maximum: Number.MAX_SAFE_INTEGER,
                                note: "Integers must be within the safe integer range.",
                                inst: e,
                                origin: r,
                                inclusive: !0,
                                continue: !t.abort,
                            }) :
                            d.issues.push({
                                input: h,
                                code: "too_small",
                                minimum: Number.MIN_SAFE_INTEGER,
                                note: "Integers must be within the safe integer range.",
                                inst: e,
                                origin: r,
                                inclusive: !0,
                                continue: !t.abort,
                            }));
                }
                (h < o &&
                    d.issues.push({
                        origin: "number",
                        input: h,
                        code: "too_small",
                        minimum: o,
                        inclusive: !0,
                        inst: e,
                        continue: !t.abort,
                    }),
                    h > s &&
                    d.issues.push({
                        origin: "number",
                        input: h,
                        code: "too_big",
                        maximum: s,
                        inclusive: !0,
                        inst: e,
                        continue: !t.abort,
                    }));
            }));
    }),
    im = N("$ZodCheckMaxLength", (e, t) => {
        var n;
        (ut.init(e, t),
            (n = e._zod.def).when ??
            (n.when = (r) => {
                const o = r.value;
                return !as(o) && o.length !== void 0;
            }),
            e._zod.onattach.push((r) => {
                const o = r._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
                t.maximum < o && (r._zod.bag.maximum = t.maximum);
            }),
            (e._zod.check = (r) => {
                const o = r.value;
                if (o.length <= t.maximum) return;
                const s = cs(o);
                r.issues.push({
                    origin: s,
                    code: "too_big",
                    maximum: t.maximum,
                    inclusive: !0,
                    input: o,
                    inst: e,
                    continue: !t.abort,
                });
            }));
    }),
    am = N("$ZodCheckMinLength", (e, t) => {
        var n;
        (ut.init(e, t),
            (n = e._zod.def).when ??
            (n.when = (r) => {
                const o = r.value;
                return !as(o) && o.length !== void 0;
            }),
            e._zod.onattach.push((r) => {
                const o = r._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
                t.minimum > o && (r._zod.bag.minimum = t.minimum);
            }),
            (e._zod.check = (r) => {
                const o = r.value;
                if (o.length >= t.minimum) return;
                const s = cs(o);
                r.issues.push({
                    origin: s,
                    code: "too_small",
                    minimum: t.minimum,
                    inclusive: !0,
                    input: o,
                    inst: e,
                    continue: !t.abort,
                });
            }));
    }),
    sm = N("$ZodCheckLengthEquals", (e, t) => {
        var n;
        (ut.init(e, t),
            (n = e._zod.def).when ??
            (n.when = (r) => {
                const o = r.value;
                return !as(o) && o.length !== void 0;
            }),
            e._zod.onattach.push((r) => {
                const o = r._zod.bag;
                ((o.minimum = t.length), (o.maximum = t.length), (o.length = t.length));
            }),
            (e._zod.check = (r) => {
                const o = r.value,
                    s = o.length;
                if (s === t.length) return;
                const u = cs(o),
                    d = s > t.length;
                r.issues.push({
                    origin: u,
                    ...(d ?
                        {
                            code: "too_big",
                            maximum: t.length
                        } :
                        {
                            code: "too_small",
                            minimum: t.length
                        }),
                    inclusive: !0,
                    exact: !0,
                    input: r.value,
                    inst: e,
                    continue: !t.abort,
                });
            }));
    }),
    Si = N("$ZodCheckStringFormat", (e, t) => {
        var n, r;
        (ut.init(e, t),
            e._zod.onattach.push((o) => {
                const s = o._zod.bag;
                ((s.format = t.format),
                    t.pattern &&
                    (s.patterns ?? (s.patterns = new Set()),
                        s.patterns.add(t.pattern)));
            }),
            t.pattern ?
            ((n = e._zod).check ??
                (n.check = (o) => {
                    ((t.pattern.lastIndex = 0),
                        t.pattern.test(o.value) ||
                        o.issues.push({
                            origin: "string",
                            code: "invalid_format",
                            format: t.format,
                            input: o.value,
                            ...(t.pattern ? {
                                pattern: t.pattern.toString()
                            } : {}),
                            inst: e,
                            continue: !t.abort,
                        }));
                })) :
            ((r = e._zod).check ?? (r.check = () => {})));
    }),
    cm = N("$ZodCheckRegex", (e, t) => {
        (Si.init(e, t),
            (e._zod.check = (n) => {
                ((t.pattern.lastIndex = 0),
                    t.pattern.test(n.value) ||
                    n.issues.push({
                        origin: "string",
                        code: "invalid_format",
                        format: "regex",
                        input: n.value,
                        pattern: t.pattern.toString(),
                        inst: e,
                        continue: !t.abort,
                    }));
            }));
    }),
    um = N("$ZodCheckLowerCase", (e, t) => {
        (t.pattern ?? (t.pattern = tm), Si.init(e, t));
    }),
    lm = N("$ZodCheckUpperCase", (e, t) => {
        (t.pattern ?? (t.pattern = nm), Si.init(e, t));
    }),
    dm = N("$ZodCheckIncludes", (e, t) => {
        ut.init(e, t);
        const n = yi(t.includes),
            r = new RegExp(
                typeof t.position == "number" ? `^.{${t.position}}${n}` : n,
            );
        ((t.pattern = r),
            e._zod.onattach.push((o) => {
                const s = o._zod.bag;
                (s.patterns ?? (s.patterns = new Set()), s.patterns.add(r));
            }),
            (e._zod.check = (o) => {
                o.value.includes(t.includes, t.position) ||
                    o.issues.push({
                        origin: "string",
                        code: "invalid_format",
                        format: "includes",
                        includes: t.includes,
                        input: o.value,
                        inst: e,
                        continue: !t.abort,
                    });
            }));
    }),
    fm = N("$ZodCheckStartsWith", (e, t) => {
        ut.init(e, t);
        const n = new RegExp(`^${yi(t.prefix)}.*`);
        (t.pattern ?? (t.pattern = n),
            e._zod.onattach.push((r) => {
                const o = r._zod.bag;
                (o.patterns ?? (o.patterns = new Set()), o.patterns.add(n));
            }),
            (e._zod.check = (r) => {
                r.value.startsWith(t.prefix) ||
                    r.issues.push({
                        origin: "string",
                        code: "invalid_format",
                        format: "starts_with",
                        prefix: t.prefix,
                        input: r.value,
                        inst: e,
                        continue: !t.abort,
                    });
            }));
    }),
    pm = N("$ZodCheckEndsWith", (e, t) => {
        ut.init(e, t);
        const n = new RegExp(`.*${yi(t.suffix)}$`);
        (t.pattern ?? (t.pattern = n),
            e._zod.onattach.push((r) => {
                const o = r._zod.bag;
                (o.patterns ?? (o.patterns = new Set()), o.patterns.add(n));
            }),
            (e._zod.check = (r) => {
                r.value.endsWith(t.suffix) ||
                    r.issues.push({
                        origin: "string",
                        code: "invalid_format",
                        format: "ends_with",
                        suffix: t.suffix,
                        input: r.value,
                        inst: e,
                        continue: !t.abort,
                    });
            }));
    }),
    hm = N("$ZodCheckOverwrite", (e, t) => {
        (ut.init(e, t),
            (e._zod.check = (n) => {
                n.value = t.tx(n.value);
            }));
    });
class mm {
    constructor(t = []) {
        ((this.content = []), (this.indent = 0), this && (this.args = t));
    }
    indented(t) {
        ((this.indent += 1), t(this), (this.indent -= 1));
    }
    write(t) {
        if (typeof t == "function")
            return (
                t(this, {
                    execution: "sync"
                }),
                void t(this, {
                    execution: "async"
                })
            );
        const n = t
            .split(
                `
`,
            )
            .filter((s) => s),
            r = Math.min(...n.map((s) => s.length - s.trimStart().length)),
            o = n.map((s) => s.slice(r)).map((s) => " ".repeat(2 * this.indent) + s);
        for (const s of o) this.content.push(s);
    }
    compile() {
        const t = Function,
            n = this == null ? void 0 : this.args,
            r = [
                ...((this == null ? void 0 : this.content) ?? [""]).map(
                    (o) => `  ${o}`,
                ),
            ];
        return new t(
            ...n,
            r.join(`
`),
        );
    }
}
const gm = {
        major: 4,
        minor: 3,
        patch: 6
    },
    Me = N("$ZodType", (e, t) => {
        var o;
        var n;
        (e ?? (e = {}),
            (e._zod.def = t),
            (e._zod.bag = e._zod.bag || {}),
            (e._zod.version = gm));
        const r = [...(e._zod.def.checks ?? [])];
        e._zod.traits.has("$ZodCheck") && r.unshift(e);
        for (const s of r)
            for (const u of s._zod.onattach) u(e);
        if (r.length === 0)
            ((n = e._zod).deferred ?? (n.deferred = []),
                (o = e._zod.deferred) == null ||
                o.push(() => {
                    e._zod.run = e._zod.parse;
                }));
        else {
            const s = (d, h, p) => {
                    let g,
                        v = nr(d);
                    for (const w of h) {
                        if (w._zod.def.when) {
                            if (!w._zod.def.when(d)) continue;
                        } else if (v) continue;
                        const C = d.issues.length,
                            k = w._zod.check(d);
                        if (k instanceof Promise && (p == null ? void 0 : p.async) === !1)
                            throw new ar();
                        if (g || k instanceof Promise)
                            g = (g ?? Promise.resolve()).then(async () => {
                                (await k, d.issues.length !== C && (v || (v = nr(d, C))));
                            });
                        else {
                            if (d.issues.length === C) continue;
                            v || (v = nr(d, C));
                        }
                    }
                    return g ? g.then(() => d) : d;
                },
                u = (d, h, p) => {
                    if (nr(d)) return ((d.aborted = !0), d);
                    const g = s(h, r, p);
                    if (g instanceof Promise) {
                        if (p.async === !1) throw new ar();
                        return g.then((v) => e._zod.parse(v, p));
                    }
                    return e._zod.parse(g, p);
                };
            e._zod.run = (d, h) => {
                if (h.skipChecks) return e._zod.parse(d, h);
                if (h.direction === "backward") {
                    const g = e._zod.parse({
                        value: d.value,
                        issues: []
                    }, {
                        ...h,
                        skipChecks: !0
                    }, );
                    return g instanceof Promise ? g.then((v) => u(v, d, h)) : u(g, d, h);
                }
                const p = e._zod.parse(d, h);
                if (p instanceof Promise) {
                    if (h.async === !1) throw new ar();
                    return p.then((g) => s(g, r, h));
                }
                return s(p, r, h);
            };
        }
        ke(e, "~standard", () => ({
            validate: (s) => {
                var u;
                try {
                    const d = _h(e, s);
                    return d.success ?
                        {
                            value: d.data
                        } :
                        {
                            issues: (u = d.error) == null ? void 0 : u.issues
                        };
                } catch {
                    return xh(e, s).then((h) => {
                        var p;
                        return h.success ?
                            {
                                value: h.data
                            } :
                            {
                                issues: (p = h.error) == null ? void 0 : p.issues
                            };
                    });
                }
            },
            vendor: "zod",
            version: 1,
        }));
    }),
    ds = N("$ZodString", (e, t) => {
        var n;
        (Me.init(e, t),
            (e._zod.pattern = [
                ...(((n = e == null ? void 0 : e._zod.bag) == null ?
                    void 0 :
                    n.patterns) ?? []),
            ].pop() ?? Yh(e._zod.bag)),
            (e._zod.parse = (r, o) => {
                if (t.coerce)
                    try {
                        r.value = String(r.value);
                    } catch {}
                return (
                    typeof r.value == "string" ||
                    r.issues.push({
                        expected: "string",
                        code: "invalid_type",
                        input: r.value,
                        inst: e,
                    }),
                    r
                );
            }));
    }),
    Le = N("$ZodStringFormat", (e, t) => {
        (Si.init(e, t), ds.init(e, t));
    }),
    vm = N("$ZodGUID", (e, t) => {
        (t.pattern ?? (t.pattern = Dh), Le.init(e, t));
    }),
    ym = N("$ZodUUID", (e, t) => {
        if (t.version) {
            const n = {
                v1: 1,
                v2: 2,
                v3: 3,
                v4: 4,
                v5: 5,
                v6: 6,
                v7: 7,
                v8: 8
            } [
                t.version
            ];
            if (n === void 0) throw new Error(`Invalid UUID version: "${t.version}"`);
            t.pattern ?? (t.pattern = Uc(n));
        } else t.pattern ?? (t.pattern = Uc());
        Le.init(e, t);
    }),
    bm = N("$ZodEmail", (e, t) => {
        (t.pattern ?? (t.pattern = Fh), Le.init(e, t));
    }),
    wm = N("$ZodURL", (e, t) => {
        (Le.init(e, t),
            (e._zod.check = (n) => {
                try {
                    const r = n.value.trim(),
                        o = new URL(r);
                    return (
                        t.hostname &&
                        ((t.hostname.lastIndex = 0),
                            t.hostname.test(o.hostname) ||
                            n.issues.push({
                                code: "invalid_format",
                                format: "url",
                                note: "Invalid hostname",
                                pattern: t.hostname.source,
                                input: n.value,
                                inst: e,
                                continue: !t.abort,
                            })),
                        t.protocol &&
                        ((t.protocol.lastIndex = 0),
                            t.protocol.test(
                                o.protocol.endsWith(":") ? o.protocol.slice(0, -1) : o.protocol,
                            ) ||
                            n.issues.push({
                                code: "invalid_format",
                                format: "url",
                                note: "Invalid protocol",
                                pattern: t.protocol.source,
                                input: n.value,
                                inst: e,
                                continue: !t.abort,
                            })),
                        void(t.normalize ? (n.value = o.href) : (n.value = r))
                    );
                } catch {
                    n.issues.push({
                        code: "invalid_format",
                        format: "url",
                        input: n.value,
                        inst: e,
                        continue: !t.abort,
                    });
                }
            }));
    }),
    Sm = N("$ZodEmoji", (e, t) => {
        (t.pattern ?? (t.pattern = Bh()), Le.init(e, t));
    }),
    _m = N("$ZodNanoID", (e, t) => {
        (t.pattern ?? (t.pattern = jh), Le.init(e, t));
    }),
    xm = N("$ZodCUID", (e, t) => {
        (t.pattern ?? (t.pattern = Rh), Le.init(e, t));
    }),
    Om = N("$ZodCUID2", (e, t) => {
        (t.pattern ?? (t.pattern = $h), Le.init(e, t));
    }),
    km = N("$ZodULID", (e, t) => {
        (t.pattern ?? (t.pattern = Nh), Le.init(e, t));
    }),
    Em = N("$ZodXID", (e, t) => {
        (t.pattern ?? (t.pattern = zh), Le.init(e, t));
    }),
    Cm = N("$ZodKSUID", (e, t) => {
        (t.pattern ?? (t.pattern = Lh), Le.init(e, t));
    }),
    Tm = N("$ZodISODateTime", (e, t) => {
        (t.pattern ?? (t.pattern = Kh(t)), Le.init(e, t));
    }),
    Im = N("$ZodISODate", (e, t) => {
        (t.pattern ?? (t.pattern = Vh), Le.init(e, t));
    }),
    Pm = N("$ZodISOTime", (e, t) => {
        (t.pattern ?? (t.pattern = Jh(t)), Le.init(e, t));
    }),
    Am = N("$ZodISODuration", (e, t) => {
        (t.pattern ?? (t.pattern = Mh), Le.init(e, t));
    }),
    Rm = N("$ZodIPv4", (e, t) => {
        (t.pattern ?? (t.pattern = Uh),
            Le.init(e, t),
            (e._zod.bag.format = "ipv4"));
    }),
    $m = N("$ZodIPv6", (e, t) => {
        (t.pattern ?? (t.pattern = qh),
            Le.init(e, t),
            (e._zod.bag.format = "ipv6"),
            (e._zod.check = (n) => {
                try {
                    new URL(`http://[${n.value}]`);
                } catch {
                    n.issues.push({
                        code: "invalid_format",
                        format: "ipv6",
                        input: n.value,
                        inst: e,
                        continue: !t.abort,
                    });
                }
            }));
    }),
    Nm = N("$ZodCIDRv4", (e, t) => {
        (t.pattern ?? (t.pattern = Wh), Le.init(e, t));
    }),
    zm = N("$ZodCIDRv6", (e, t) => {
        (t.pattern ?? (t.pattern = Gh),
            Le.init(e, t),
            (e._zod.check = (n) => {
                const r = n.value.split("/");
                try {
                    if (r.length !== 2) throw new Error();
                    const [o, s] = r;
                    if (!s) throw new Error();
                    const u = Number(s);
                    if (`${u}` !== s) throw new Error();
                    if (u < 0 || u > 128) throw new Error();
                    new URL(`http://[${o}]`);
                } catch {
                    n.issues.push({
                        code: "invalid_format",
                        format: "cidrv6",
                        input: n.value,
                        inst: e,
                        continue: !t.abort,
                    });
                }
            }));
    });

function Al(e) {
    if (e === "") return !0;
    if (e.length % 4 != 0) return !1;
    try {
        return (atob(e), !0);
    } catch {
        return !1;
    }
}
const Lm = N("$ZodBase64", (e, t) => {
    (t.pattern ?? (t.pattern = Zh),
        Le.init(e, t),
        (e._zod.bag.contentEncoding = "base64"),
        (e._zod.check = (n) => {
            Al(n.value) ||
                n.issues.push({
                    code: "invalid_format",
                    format: "base64",
                    input: n.value,
                    inst: e,
                    continue: !t.abort,
                });
        }));
});

function jm(e) {
    if (!Ol.test(e)) return !1;
    const t = e.replace(/[-_]/g, (n) => (n === "-" ? "+" : "/"));
    return Al(t.padEnd(4 * Math.ceil(t.length / 4), "="));
}
const Mm = N("$ZodBase64URL", (e, t) => {
        (t.pattern ?? (t.pattern = Ol),
            Le.init(e, t),
            (e._zod.bag.contentEncoding = "base64url"),
            (e._zod.check = (n) => {
                jm(n.value) ||
                    n.issues.push({
                        code: "invalid_format",
                        format: "base64url",
                        input: n.value,
                        inst: e,
                        continue: !t.abort,
                    });
            }));
    }),
    Dm = N("$ZodE164", (e, t) => {
        (t.pattern ?? (t.pattern = Xh), Le.init(e, t));
    });

function Fm(e, t = null) {
    try {
        const n = e.split(".");
        if (n.length !== 3) return !1;
        const [r] = n;
        if (!r) return !1;
        const o = JSON.parse(atob(r));
        return !(
            ("typ" in o && (o == null ? void 0 : o.typ) !== "JWT") ||
            !o.alg ||
            (t && (!("alg" in o) || o.alg !== t))
        );
    } catch {
        return !1;
    }
}
const Hm = N("$ZodJWT", (e, t) => {
        (Le.init(e, t),
            (e._zod.check = (n) => {
                Fm(n.value, t.alg) ||
                    n.issues.push({
                        code: "invalid_format",
                        format: "jwt",
                        input: n.value,
                        inst: e,
                        continue: !t.abort,
                    });
            }));
    }),
    Rl = N("$ZodNumber", (e, t) => {
        (Me.init(e, t),
            (e._zod.pattern = e._zod.bag.pattern ?? Cl),
            (e._zod.parse = (n, r) => {
                if (t.coerce)
                    try {
                        n.value = Number(n.value);
                    } catch {}
                const o = n.value;
                if (typeof o == "number" && !Number.isNaN(o) && Number.isFinite(o))
                    return n;
                const s =
                    typeof o == "number" ?
                    Number.isNaN(o) ?
                    "NaN" :
                    Number.isFinite(o) ?
                    void 0 :
                    "Infinity" :
                    void 0;
                return (
                    n.issues.push({
                        expected: "number",
                        code: "invalid_type",
                        input: o,
                        inst: e,
                        ...(s ? {
                            received: s
                        } : {}),
                    }),
                    n
                );
            }));
    }),
    Bm = N("$ZodNumberFormat", (e, t) => {
        (om.init(e, t), Rl.init(e, t));
    }),
    Um = N("$ZodBoolean", (e, t) => {
        (Me.init(e, t),
            (e._zod.pattern = em),
            (e._zod.parse = (n, r) => {
                if (t.coerce)
                    try {
                        n.value = !!n.value;
                    } catch {}
                const o = n.value;
                return (
                    typeof o == "boolean" ||
                    n.issues.push({
                        expected: "boolean",
                        code: "invalid_type",
                        input: o,
                        inst: e,
                    }),
                    n
                );
            }));
    }),
    qm = N("$ZodUnknown", (e, t) => {
        (Me.init(e, t), (e._zod.parse = (n) => n));
    }),
    Wm = N("$ZodNever", (e, t) => {
        (Me.init(e, t),
            (e._zod.parse = (n, r) => (
                n.issues.push({
                    expected: "never",
                    code: "invalid_type",
                    input: n.value,
                    inst: e,
                }),
                n
            )));
    });

function qc(e, t, n) {
    (e.issues.length && t.issues.push(...rr(n, e.issues)),
        (t.value[n] = e.value));
}
const Gm = N("$ZodArray", (e, t) => {
    (Me.init(e, t),
        (e._zod.parse = (n, r) => {
            const o = n.value;
            if (!Array.isArray(o))
                return (
                    n.issues.push({
                        expected: "array",
                        code: "invalid_type",
                        input: o,
                        inst: e,
                    }),
                    n
                );
            n.value = Array(o.length);
            const s = [];
            for (let u = 0; u < o.length; u++) {
                const d = o[u],
                    h = t.element._zod.run({
                        value: d,
                        issues: []
                    }, r);
                h instanceof Promise ? s.push(h.then((p) => qc(p, n, u))) : qc(h, n, u);
            }
            return s.length ? Promise.all(s).then(() => n) : n;
        }));
});

function ci(e, t, n, r, o) {
    if (e.issues.length) {
        if (o && !(n in r)) return;
        t.issues.push(...rr(n, e.issues));
    }
    e.value === void 0 ? n in r && (t.value[n] = void 0) : (t.value[n] = e.value);
}

function $l(e) {
    var r, o, s, u;
    const t = Object.keys(e.shape);
    for (const d of t)
        if (
            !(
                (u =
                    (s =
                        (o = (r = e.shape) == null ? void 0 : r[d]) == null ?
                        void 0 :
                        o._zod) == null ?
                    void 0 :
                    s.traits) != null && u.has("$ZodType")
            )
        )
            throw new Error(`Invalid element at key "${d}": expected a Zod schema`);
    const n = dh(e.shape);
    return {
        ...e,
        keys: t,
        keySet: new Set(t),
        numKeys: t.length,
        optionalKeys: new Set(n),
    };
}

function Nl(e, t, n, r, o, s) {
    const u = [],
        d = o.keySet,
        h = o.catchall._zod,
        p = h.def.type,
        g = h.optout === "optional";
    for (const v in t) {
        if (d.has(v)) continue;
        if (p === "never") {
            u.push(v);
            continue;
        }
        const w = h.run({
            value: t[v],
            issues: []
        }, r);
        w instanceof Promise
            ?
            e.push(w.then((C) => ci(C, n, v, t, g))) :
            ci(w, n, v, t, g);
    }
    return (
        u.length &&
        n.issues.push({
            code: "unrecognized_keys",
            keys: u,
            input: t,
            inst: s
        }),
        e.length ? Promise.all(e).then(() => n) : n
    );
}
const Zm = N("$ZodObject", (e, t) => {
        Me.init(e, t);
        const n = Object.getOwnPropertyDescriptor(t, "shape");
        if (!(n != null && n.get)) {
            const d = t.shape;
            Object.defineProperty(t, "shape", {
                get: () => {
                    const h = {
                        ...d
                    };
                    return (Object.defineProperty(t, "shape", {
                        value: h
                    }), h);
                },
            });
        }
        const r = is(() => $l(t));
        ke(e._zod, "propValues", () => {
            const d = t.shape,
                h = {};
            for (const p in d) {
                const g = d[p]._zod;
                if (g.values) {
                    h[p] ?? (h[p] = new Set());
                    for (const v of g.values) h[p].add(v);
                }
            }
            return h;
        });
        const o = si,
            s = t.catchall;
        let u;
        e._zod.parse = (d, h) => {
            u ?? (u = r.value);
            const p = d.value;
            if (!o(p))
                return (
                    d.issues.push({
                        expected: "object",
                        code: "invalid_type",
                        input: p,
                        inst: e,
                    }),
                    d
                );
            d.value = {};
            const g = [],
                v = u.shape;
            for (const w of u.keys) {
                const C = v[w],
                    k = C._zod.optout === "optional",
                    P = C._zod.run({
                        value: p[w],
                        issues: []
                    }, h);
                P instanceof Promise
                    ?
                    g.push(P.then((B) => ci(B, d, w, p, k))) :
                    ci(P, d, w, p, k);
            }
            return s ?
                Nl(g, p, d, h, r.value, e) :
                g.length ?
                Promise.all(g).then(() => d) :
                d;
        };
    }),
    Xm = N("$ZodObjectJIT", (e, t) => {
        Zm.init(e, t);
        const n = e._zod.parse,
            r = is(() => $l(t));
        let o;
        const s = si,
            u = !vl.jitless,
            d = u && uh.value,
            h = t.catchall;
        let p;
        e._zod.parse = (g, v) => {
            p ?? (p = r.value);
            const w = g.value;
            return s(w) ?
                u && d && (v == null ? void 0 : v.async) === !1 && v.jitless !== !0 ?
                (o ||
                    (o = ((C) => {
                        var Y;
                        const k = new mm(["shape", "payload", "ctx"]),
                            P = r.value,
                            B = (W) => {
                                const I = Bc(W);
                                return `shape[${I}]._zod.run({ value: input[${I}], issues: [] }, ctx)`;
                            };
                        k.write("const input = payload.value;");
                        const U = Object.create(null);
                        let R = 0;
                        for (const W of P.keys) U[W] = "key_" + R++;
                        k.write("const newResult = {};");
                        for (const W of P.keys) {
                            const I = U[W],
                                O = Bc(W),
                                ee = C[W],
                                me =
                                ((Y = ee == null ? void 0 : ee._zod) == null ?
                                    void 0 :
                                    Y.optout) === "optional";
                            (k.write(`const ${I} = ${B(W)};`),
                                me ?
                                k.write(`
        if (${I}.issues.length) {
          if (${O} in input) {
            payload.issues = payload.issues.concat(${I}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${O}, ...iss.path] : [${O}]
            })));
          }
        }
        
        if (${I}.value === undefined) {
          if (${O} in input) {
            newResult[${O}] = undefined;
          }
        } else {
          newResult[${O}] = ${I}.value;
        }
        
      `) :
                                k.write(`
        if (${I}.issues.length) {
          payload.issues = payload.issues.concat(${I}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${O}, ...iss.path] : [${O}]
          })));
        }
        
        if (${I}.value === undefined) {
          if (${O} in input) {
            newResult[${O}] = undefined;
          }
        } else {
          newResult[${O}] = ${I}.value;
        }
        
      `));
                        }
                        (k.write("payload.value = newResult;"),
                            k.write("return payload;"));
                        const K = k.compile();
                        return (W, I) => K(C, W, I);
                    })(t.shape)),
                    (g = o(g, v)),
                    h ? Nl([], w, g, v, p, e) : g) :
                n(g, v) :
                (g.issues.push({
                        expected: "object",
                        code: "invalid_type",
                        input: w,
                        inst: e,
                    }),
                    g);
        };
    });

function Wc(e, t, n, r) {
    for (const s of e)
        if (s.issues.length === 0) return ((t.value = s.value), t);
    const o = e.filter((s) => !nr(s));
    return o.length === 1 ?
        ((t.value = o[0].value), o[0]) :
        (t.issues.push({
                code: "invalid_union",
                input: t.value,
                inst: n,
                errors: e.map((s) => s.issues.map((u) => xn(u, r, _n()))),
            }),
            t);
}
const Vm = N("$ZodUnion", (e, t) => {
        (Me.init(e, t),
            ke(e._zod, "optin", () =>
                t.options.some((o) => o._zod.optin === "optional") ?
                "optional" :
                void 0,
            ),
            ke(e._zod, "optout", () =>
                t.options.some((o) => o._zod.optout === "optional") ?
                "optional" :
                void 0,
            ),
            ke(e._zod, "values", () => {
                if (t.options.every((o) => o._zod.values))
                    return new Set(t.options.flatMap((o) => Array.from(o._zod.values)));
            }),
            ke(e._zod, "pattern", () => {
                if (t.options.every((o) => o._zod.pattern)) {
                    const o = t.options.map((s) => s._zod.pattern);
                    return new RegExp(`^(${o.map((s) => ss(s.source)).join("|")})$`);
                }
            }));
        const n = t.options.length === 1,
            r = t.options[0]._zod.run;
        e._zod.parse = (o, s) => {
            if (n) return r(o, s);
            let u = !1;
            const d = [];
            for (const h of t.options) {
                const p = h._zod.run({
                    value: o.value,
                    issues: []
                }, s);
                if (p instanceof Promise)(d.push(p), (u = !0));
                else {
                    if (p.issues.length === 0) return p;
                    d.push(p);
                }
            }
            return u ? Promise.all(d).then((h) => Wc(h, o, e, s)) : Wc(d, o, e, s);
        };
    }),
    Jm = N("$ZodIntersection", (e, t) => {
        (Me.init(e, t),
            (e._zod.parse = (n, r) => {
                const o = n.value,
                    s = t.left._zod.run({
                        value: o,
                        issues: []
                    }, r),
                    u = t.right._zod.run({
                        value: o,
                        issues: []
                    }, r);
                return s instanceof Promise || u instanceof Promise ?
                    Promise.all([s, u]).then(([d, h]) => Gc(n, d, h)) :
                    Gc(n, s, u);
            }));
    });

function Ca(e, t) {
    if (e === t) return {
        valid: !0,
        data: e
    };
    if (e instanceof Date && t instanceof Date && +e == +t)
        return {
            valid: !0,
            data: e
        };
    if (pr(e) && pr(t)) {
        const n = Object.keys(t),
            r = Object.keys(e).filter((s) => n.indexOf(s) !== -1),
            o = {
                ...e,
                ...t
            };
        for (const s of r) {
            const u = Ca(e[s], t[s]);
            if (!u.valid)
                return {
                    valid: !1,
                    mergeErrorPath: [s, ...u.mergeErrorPath]
                };
            o[s] = u.data;
        }
        return {
            valid: !0,
            data: o
        };
    }
    if (Array.isArray(e) && Array.isArray(t)) {
        if (e.length !== t.length) return {
            valid: !1,
            mergeErrorPath: []
        };
        const n = [];
        for (let r = 0; r < e.length; r++) {
            const o = Ca(e[r], t[r]);
            if (!o.valid)
                return {
                    valid: !1,
                    mergeErrorPath: [r, ...o.mergeErrorPath]
                };
            n.push(o.data);
        }
        return {
            valid: !0,
            data: n
        };
    }
    return {
        valid: !1,
        mergeErrorPath: []
    };
}

function Gc(e, t, n) {
    const r = new Map();
    let o;
    for (const d of t.issues)
        if (d.code === "unrecognized_keys") {
            o ?? (o = d);
            for (const h of d.keys)(r.has(h) || r.set(h, {}), (r.get(h).l = !0));
        } else e.issues.push(d);
    for (const d of n.issues)
        if (d.code === "unrecognized_keys")
            for (const h of d.keys)(r.has(h) || r.set(h, {}), (r.get(h).r = !0));
        else e.issues.push(d);
    const s = [...r].filter(([, d]) => d.l && d.r).map(([d]) => d);
    if ((s.length && o && e.issues.push({
            ...o,
            keys: s
        }), nr(e))) return e;
    const u = Ca(t.value, n.value);
    if (!u.valid)
        throw new Error(
            `Unmergable intersection. Error path: ${JSON.stringify(u.mergeErrorPath)}`,
        );
    return ((e.value = u.data), e);
}
const Km = N("$ZodRecord", (e, t) => {
        (Me.init(e, t),
            (e._zod.parse = (n, r) => {
                const o = n.value;
                if (!pr(o))
                    return (
                        n.issues.push({
                            expected: "record",
                            code: "invalid_type",
                            input: o,
                            inst: e,
                        }),
                        n
                    );
                const s = [],
                    u = t.keyType._zod.values;
                if (u) {
                    n.value = {};
                    const d = new Set();
                    for (const p of u)
                        if (
                            typeof p == "string" ||
                            typeof p == "number" ||
                            typeof p == "symbol"
                        ) {
                            d.add(typeof p == "number" ? p.toString() : p);
                            const g = t.valueType._zod.run({
                                value: o[p],
                                issues: []
                            }, r);
                            g instanceof Promise
                                ?
                                s.push(
                                    g.then((v) => {
                                        (v.issues.length && n.issues.push(...rr(p, v.issues)),
                                            (n.value[p] = v.value));
                                    }),
                                ) :
                                (g.issues.length && n.issues.push(...rr(p, g.issues)),
                                    (n.value[p] = g.value));
                        }
                    let h;
                    for (const p in o) d.has(p) || ((h = h ?? []), h.push(p));
                    h &&
                        h.length > 0 &&
                        n.issues.push({
                            code: "unrecognized_keys",
                            input: o,
                            inst: e,
                            keys: h,
                        });
                } else {
                    n.value = {};
                    for (const d of Reflect.ownKeys(o)) {
                        if (d === "__proto__") continue;
                        let h = t.keyType._zod.run({
                            value: d,
                            issues: []
                        }, r);
                        if (h instanceof Promise)
                            throw new Error(
                                "Async schemas not supported in object keys currently",
                            );
                        if (typeof d == "string" && Cl.test(d) && h.issues.length) {
                            const g = t.keyType._zod.run({
                                value: Number(d),
                                issues: []
                            }, r);
                            if (g instanceof Promise)
                                throw new Error(
                                    "Async schemas not supported in object keys currently",
                                );
                            g.issues.length === 0 && (h = g);
                        }
                        if (h.issues.length) {
                            t.mode === "loose" ?
                                (n.value[d] = o[d]) :
                                n.issues.push({
                                    code: "invalid_key",
                                    origin: "record",
                                    issues: h.issues.map((g) => xn(g, r, _n())),
                                    input: d,
                                    path: [d],
                                    inst: e,
                                });
                            continue;
                        }
                        const p = t.valueType._zod.run({
                            value: o[d],
                            issues: []
                        }, r);
                        p instanceof Promise
                            ?
                            s.push(
                                p.then((g) => {
                                    (g.issues.length && n.issues.push(...rr(d, g.issues)),
                                        (n.value[h.value] = g.value));
                                }),
                            ) :
                            (p.issues.length && n.issues.push(...rr(d, p.issues)),
                                (n.value[h.value] = p.value));
                    }
                }
                return s.length ? Promise.all(s).then(() => n) : n;
            }));
    }),
    Ym = N("$ZodEnum", (e, t) => {
        Me.init(e, t);
        const n = yl(t.entries),
            r = new Set(n);
        ((e._zod.values = r),
            (e._zod.pattern = new RegExp(
                `^(${n
          .filter((o) => lh.has(typeof o))
          .map((o) => (typeof o == "string" ? yi(o) : o.toString()))
          .join("|")})$`,
            )),
            (e._zod.parse = (o, s) => {
                const u = o.value;
                return (
                    r.has(u) ||
                    o.issues.push({
                        code: "invalid_value",
                        values: n,
                        input: u,
                        inst: e,
                    }),
                    o
                );
            }));
    }),
    Qm = N("$ZodTransform", (e, t) => {
        (Me.init(e, t),
            (e._zod.parse = (n, r) => {
                if (r.direction === "backward") throw new gl(e.constructor.name);
                const o = t.transform(n.value, n);
                if (r.async)
                    return (o instanceof Promise ? o : Promise.resolve(o)).then(
                        (s) => ((n.value = s), n),
                    );
                if (o instanceof Promise) throw new ar();
                return ((n.value = o), n);
            }));
    });

function Zc(e, t) {
    return e.issues.length && t === void 0 ? {
        issues: [],
        value: void 0
    } : e;
}
const zl = N("$ZodOptional", (e, t) => {
        (Me.init(e, t),
            (e._zod.optin = "optional"),
            (e._zod.optout = "optional"),
            ke(e._zod, "values", () =>
                t.innerType._zod.values ?
                new Set([...t.innerType._zod.values, void 0]) :
                void 0,
            ),
            ke(e._zod, "pattern", () => {
                const n = t.innerType._zod.pattern;
                return n ? new RegExp(`^(${ss(n.source)})?$`) : void 0;
            }),
            (e._zod.parse = (n, r) => {
                if (t.innerType._zod.optin === "optional") {
                    const o = t.innerType._zod.run(n, r);
                    return o instanceof Promise ?
                        o.then((s) => Zc(s, n.value)) :
                        Zc(o, n.value);
                }
                return n.value === void 0 ? n : t.innerType._zod.run(n, r);
            }));
    }),
    eg = N("$ZodExactOptional", (e, t) => {
        (zl.init(e, t),
            ke(e._zod, "values", () => t.innerType._zod.values),
            ke(e._zod, "pattern", () => t.innerType._zod.pattern),
            (e._zod.parse = (n, r) => t.innerType._zod.run(n, r)));
    }),
    tg = N("$ZodNullable", (e, t) => {
        (Me.init(e, t),
            ke(e._zod, "optin", () => t.innerType._zod.optin),
            ke(e._zod, "optout", () => t.innerType._zod.optout),
            ke(e._zod, "pattern", () => {
                const n = t.innerType._zod.pattern;
                return n ? new RegExp(`^(${ss(n.source)}|null)$`) : void 0;
            }),
            ke(e._zod, "values", () =>
                t.innerType._zod.values ?
                new Set([...t.innerType._zod.values, null]) :
                void 0,
            ),
            (e._zod.parse = (n, r) =>
                n.value === null ? n : t.innerType._zod.run(n, r)));
    }),
    ng = N("$ZodDefault", (e, t) => {
        (Me.init(e, t),
            (e._zod.optin = "optional"),
            ke(e._zod, "values", () => t.innerType._zod.values),
            (e._zod.parse = (n, r) => {
                if (r.direction === "backward") return t.innerType._zod.run(n, r);
                if (n.value === void 0) return ((n.value = t.defaultValue), n);
                const o = t.innerType._zod.run(n, r);
                return o instanceof Promise ? o.then((s) => Xc(s, t)) : Xc(o, t);
            }));
    });

function Xc(e, t) {
    return (e.value === void 0 && (e.value = t.defaultValue), e);
}
const rg = N("$ZodPrefault", (e, t) => {
        (Me.init(e, t),
            (e._zod.optin = "optional"),
            ke(e._zod, "values", () => t.innerType._zod.values),
            (e._zod.parse = (n, r) => (
                r.direction === "backward" ||
                (n.value === void 0 && (n.value = t.defaultValue)),
                t.innerType._zod.run(n, r)
            )));
    }),
    og = N("$ZodNonOptional", (e, t) => {
        (Me.init(e, t),
            ke(e._zod, "values", () => {
                const n = t.innerType._zod.values;
                return n ? new Set([...n].filter((r) => r !== void 0)) : void 0;
            }),
            (e._zod.parse = (n, r) => {
                const o = t.innerType._zod.run(n, r);
                return o instanceof Promise ? o.then((s) => Vc(s, e)) : Vc(o, e);
            }));
    });

function Vc(e, t) {
    return (
        e.issues.length ||
        e.value !== void 0 ||
        e.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: e.value,
            inst: t,
        }),
        e
    );
}
const ig = N("$ZodCatch", (e, t) => {
        (Me.init(e, t),
            ke(e._zod, "optin", () => t.innerType._zod.optin),
            ke(e._zod, "optout", () => t.innerType._zod.optout),
            ke(e._zod, "values", () => t.innerType._zod.values),
            (e._zod.parse = (n, r) => {
                if (r.direction === "backward") return t.innerType._zod.run(n, r);
                const o = t.innerType._zod.run(n, r);
                return o instanceof Promise ?
                    o.then(
                        (s) => (
                            (n.value = s.value),
                            s.issues.length &&
                            ((n.value = t.catchValue({
                                    ...n,
                                    error: {
                                        issues: s.issues.map((u) => xn(u, r, _n()))
                                    },
                                    input: n.value,
                                })),
                                (n.issues = [])),
                            n
                        ),
                    ) :
                    ((n.value = o.value),
                        o.issues.length &&
                        ((n.value = t.catchValue({
                                ...n,
                                error: {
                                    issues: o.issues.map((s) => xn(s, r, _n()))
                                },
                                input: n.value,
                            })),
                            (n.issues = [])),
                        n);
            }));
    }),
    ag = N("$ZodPipe", (e, t) => {
        (Me.init(e, t),
            ke(e._zod, "values", () => t.in._zod.values),
            ke(e._zod, "optin", () => t.in._zod.optin),
            ke(e._zod, "optout", () => t.out._zod.optout),
            ke(e._zod, "propValues", () => t.in._zod.propValues),
            (e._zod.parse = (n, r) => {
                if (r.direction === "backward") {
                    const s = t.out._zod.run(n, r);
                    return s instanceof Promise ?
                        s.then((u) => Mo(u, t.in, r)) :
                        Mo(s, t.in, r);
                }
                const o = t.in._zod.run(n, r);
                return o instanceof Promise ?
                    o.then((s) => Mo(s, t.out, r)) :
                    Mo(o, t.out, r);
            }));
    });

function Mo(e, t, n) {
    return e.issues.length ?
        ((e.aborted = !0), e) :
        t._zod.run({
            value: e.value,
            issues: e.issues
        }, n);
}
const sg = N("$ZodReadonly", (e, t) => {
    (Me.init(e, t),
        ke(e._zod, "propValues", () => t.innerType._zod.propValues),
        ke(e._zod, "values", () => t.innerType._zod.values),
        ke(e._zod, "optin", () => {
            var n, r;
            return (r = (n = t.innerType) == null ? void 0 : n._zod) == null ?
                void 0 :
                r.optin;
        }),
        ke(e._zod, "optout", () => {
            var n, r;
            return (r = (n = t.innerType) == null ? void 0 : n._zod) == null ?
                void 0 :
                r.optout;
        }),
        (e._zod.parse = (n, r) => {
            if (r.direction === "backward") return t.innerType._zod.run(n, r);
            const o = t.innerType._zod.run(n, r);
            return o instanceof Promise ? o.then(Jc) : Jc(o);
        }));
});

function Jc(e) {
    return ((e.value = Object.freeze(e.value)), e);
}
const cg = N("$ZodCustom", (e, t) => {
    (ut.init(e, t),
        Me.init(e, t),
        (e._zod.parse = (n, r) => n),
        (e._zod.check = (n) => {
            const r = n.value,
                o = t.fn(r);
            if (o instanceof Promise) return o.then((s) => Kc(s, n, r, e));
            Kc(o, n, r, e);
        }));
});

function Kc(e, t, n, r) {
    if (!e) {
        const o = {
            code: "custom",
            input: n,
            inst: r,
            path: [...(r._zod.def.path ?? [])],
            continue: !r._zod.def.abort,
        };
        (r._zod.def.params && (o.params = r._zod.def.params), t.issues.push(ao(o)));
    }
}
var Yc;
class ug {
    constructor() {
        ((this._map = new WeakMap()), (this._idmap = new Map()));
    }
    add(t, ...n) {
        const r = n[0];
        return (
            this._map.set(t, r),
            r && typeof r == "object" && "id" in r && this._idmap.set(r.id, t),
            this
        );
    }
    clear() {
        return ((this._map = new WeakMap()), (this._idmap = new Map()), this);
    }
    remove(t) {
        const n = this._map.get(t);
        return (
            n && typeof n == "object" && "id" in n && this._idmap.delete(n.id),
            this._map.delete(t),
            this
        );
    }
    get(t) {
        const n = t._zod.parent;
        if (n) {
            const r = {
                ...(this.get(n) ?? {})
            };
            delete r.id;
            const o = {
                ...r,
                ...this._map.get(t)
            };
            return Object.keys(o).length ? o : void 0;
        }
        return this._map.get(t);
    }
    has(t) {
        return this._map.has(t);
    }
}

function lg() {
    return new ug();
}
(Yc = globalThis).__zod_globalRegistry ?? (Yc.__zod_globalRegistry = lg());
const Jr = globalThis.__zod_globalRegistry;

function dg(e, t) {
    return new e({
        type: "string",
        ...ue(t)
    });
}

function fg(e, t) {
    return new e({
        type: "string",
        format: "email",
        check: "string_format",
        abort: !1,
        ...ue(t),
    });
}

function Qc(e, t) {
    return new e({
        type: "string",
        format: "guid",
        check: "string_format",
        abort: !1,
        ...ue(t),
    });
}

function pg(e, t) {
    return new e({
        type: "string",
        format: "uuid",
        check: "string_format",
        abort: !1,
        ...ue(t),
    });
}

function hg(e, t) {
    return new e({
        type: "string",
        format: "uuid",
        check: "string_format",
        abort: !1,
        version: "v4",
        ...ue(t),
    });
}

function mg(e, t) {
    return new e({
        type: "string",
        format: "uuid",
        check: "string_format",
        abort: !1,
        version: "v6",
        ...ue(t),
    });
}

function gg(e, t) {
    return new e({
        type: "string",
        format: "uuid",
        check: "string_format",
        abort: !1,
        version: "v7",
        ...ue(t),
    });
}

function vg(e, t) {
    return new e({
        type: "string",
        format: "url",
        check: "string_format",
        abort: !1,
        ...ue(t),
    });
}

function yg(e, t) {
    return new e({
        type: "string",
        format: "emoji",
        check: "string_format",
        abort: !1,
        ...ue(t),
    });
}

function bg(e, t) {
    return new e({
        type: "string",
        format: "nanoid",
        check: "string_format",
        abort: !1,
        ...ue(t),
    });
}

function wg(e, t) {
    return new e({
        type: "string",
        format: "cuid",
        check: "string_format",
        abort: !1,
        ...ue(t),
    });
}

function Sg(e, t) {
    return new e({
        type: "string",
        format: "cuid2",
        check: "string_format",
        abort: !1,
        ...ue(t),
    });
}

function _g(e, t) {
    return new e({
        type: "string",
        format: "ulid",
        check: "string_format",
        abort: !1,
        ...ue(t),
    });
}

function xg(e, t) {
    return new e({
        type: "string",
        format: "xid",
        check: "string_format",
        abort: !1,
        ...ue(t),
    });
}

function Og(e, t) {
    return new e({
        type: "string",
        format: "ksuid",
        check: "string_format",
        abort: !1,
        ...ue(t),
    });
}

function kg(e, t) {
    return new e({
        type: "string",
        format: "ipv4",
        check: "string_format",
        abort: !1,
        ...ue(t),
    });
}

function Eg(e, t) {
    return new e({
        type: "string",
        format: "ipv6",
        check: "string_format",
        abort: !1,
        ...ue(t),
    });
}

function Cg(e, t) {
    return new e({
        type: "string",
        format: "cidrv4",
        check: "string_format",
        abort: !1,
        ...ue(t),
    });
}

function Tg(e, t) {
    return new e({
        type: "string",
        format: "cidrv6",
        check: "string_format",
        abort: !1,
        ...ue(t),
    });
}

function Ig(e, t) {
    return new e({
        type: "string",
        format: "base64",
        check: "string_format",
        abort: !1,
        ...ue(t),
    });
}

function Pg(e, t) {
    return new e({
        type: "string",
        format: "base64url",
        check: "string_format",
        abort: !1,
        ...ue(t),
    });
}

function Ag(e, t) {
    return new e({
        type: "string",
        format: "e164",
        check: "string_format",
        abort: !1,
        ...ue(t),
    });
}

function Rg(e, t) {
    return new e({
        type: "string",
        format: "jwt",
        check: "string_format",
        abort: !1,
        ...ue(t),
    });
}

function $g(e, t) {
    return new e({
        type: "string",
        format: "datetime",
        check: "string_format",
        offset: !1,
        local: !1,
        precision: null,
        ...ue(t),
    });
}

function Ng(e, t) {
    return new e({
        type: "string",
        format: "date",
        check: "string_format",
        ...ue(t),
    });
}

function zg(e, t) {
    return new e({
        type: "string",
        format: "time",
        check: "string_format",
        precision: null,
        ...ue(t),
    });
}

function Lg(e, t) {
    return new e({
        type: "string",
        format: "duration",
        check: "string_format",
        ...ue(t),
    });
}

function jg(e, t) {
    return new e({
        type: "number",
        checks: [],
        ...ue(t)
    });
}

function Mg(e, t) {
    return new e({
        type: "number",
        check: "number_format",
        abort: !1,
        format: "safeint",
        ...ue(t),
    });
}

function Dg(e, t) {
    return new e({
        type: "boolean",
        ...ue(t)
    });
}

function Fg(e) {
    return new e({
        type: "unknown"
    });
}

function Hg(e, t) {
    return new e({
        type: "never",
        ...ue(t)
    });
}

function eu(e, t) {
    return new Il({
        check: "less_than",
        ...ue(t),
        value: e,
        inclusive: !1
    });
}

function da(e, t) {
    return new Il({
        check: "less_than",
        ...ue(t),
        value: e,
        inclusive: !0
    });
}

function tu(e, t) {
    return new Pl({
        check: "greater_than",
        ...ue(t),
        value: e,
        inclusive: !1
    });
}

function fa(e, t) {
    return new Pl({
        check: "greater_than",
        ...ue(t),
        value: e,
        inclusive: !0
    });
}

function nu(e, t) {
    return new rm({
        check: "multiple_of",
        ...ue(t),
        value: e
    });
}

function Ll(e, t) {
    return new im({
        check: "max_length",
        ...ue(t),
        maximum: e
    });
}

function ui(e, t) {
    return new am({
        check: "min_length",
        ...ue(t),
        minimum: e
    });
}

function jl(e, t) {
    return new sm({
        check: "length_equals",
        ...ue(t),
        length: e
    });
}

function Bg(e, t) {
    return new cm({
        check: "string_format",
        format: "regex",
        ...ue(t),
        pattern: e,
    });
}

function Ug(e) {
    return new um({
        check: "string_format",
        format: "lowercase",
        ...ue(e)
    });
}

function qg(e) {
    return new lm({
        check: "string_format",
        format: "uppercase",
        ...ue(e)
    });
}

function Wg(e, t) {
    return new dm({
        check: "string_format",
        format: "includes",
        ...ue(t),
        includes: e,
    });
}

function Gg(e, t) {
    return new fm({
        check: "string_format",
        format: "starts_with",
        ...ue(t),
        prefix: e,
    });
}

function Zg(e, t) {
    return new pm({
        check: "string_format",
        format: "ends_with",
        ...ue(t),
        suffix: e,
    });
}

function Cr(e) {
    return new hm({
        check: "overwrite",
        tx: e
    });
}

function Xg(e) {
    return Cr((t) => t.normalize(e));
}

function Vg() {
    return Cr((e) => e.trim());
}

function Jg() {
    return Cr((e) => e.toLowerCase());
}

function Kg() {
    return Cr((e) => e.toUpperCase());
}

function Yg() {
    return Cr((e) => ch(e));
}

function Qg(e, t, n) {
    return new e({
        type: "array",
        element: t,
        ...ue(n)
    });
}

function e0(e, t, n) {
    return new e({
        type: "custom",
        check: "custom",
        fn: t,
        ...ue(n)
    });
}

function t0(e) {
    const t = n0(
        (n) => (
            (n.addIssue = (r) => {
                if (typeof r == "string") n.issues.push(ao(r, n.value, t._zod.def));
                else {
                    const o = r;
                    (o.fatal && (o.continue = !1),
                        o.code ?? (o.code = "custom"),
                        o.input ?? (o.input = n.value),
                        o.inst ?? (o.inst = t),
                        o.continue ?? (o.continue = !t._zod.def.abort),
                        n.issues.push(ao(o)));
                }
            }),
            e(n.value, n)
        ),
    );
    return t;
}

function n0(e, t) {
    const n = new ut({
        check: "custom",
        ...ue(t)
    });
    return ((n._zod.check = e), n);
}

function Ml(e) {
    let t = (e == null ? void 0 : e.target) ?? "draft-2020-12";
    return (
        t === "draft-4" && (t = "draft-04"),
        t === "draft-7" && (t = "draft-07"), {
            processors: e.processors ?? {},
            metadataRegistry: (e == null ? void 0 : e.metadata) ?? Jr,
            target: t,
            unrepresentable: (e == null ? void 0 : e.unrepresentable) ?? "throw",
            override: (e == null ? void 0 : e.override) ?? (() => {}),
            io: (e == null ? void 0 : e.io) ?? "output",
            counter: 0,
            seen: new Map(),
            cycles: (e == null ? void 0 : e.cycles) ?? "ref",
            reused: (e == null ? void 0 : e.reused) ?? "inline",
            external: (e == null ? void 0 : e.external) ?? void 0,
        }
    );
}

function qe(e, t, n = {
    path: [],
    schemaPath: []
}) {
    var p, g;
    var r;
    const o = e._zod.def,
        s = t.seen.get(e);
    if (s)
        return (
            s.count++,
            n.schemaPath.includes(e) && (s.cycle = n.path),
            s.schema
        );
    const u = {
        schema: {},
        count: 1,
        cycle: void 0,
        path: n.path
    };
    t.seen.set(e, u);
    const d = (g = (p = e._zod).toJSONSchema) == null ? void 0 : g.call(p);
    if (d) u.schema = d;
    else {
        const v = {
            ...n,
            schemaPath: [...n.schemaPath, e],
            path: n.path
        };
        if (e._zod.processJSONSchema) e._zod.processJSONSchema(t, u.schema, v);
        else {
            const C = u.schema,
                k = t.processors[o.type];
            if (!k)
                throw new Error(
                    `[toJSONSchema]: Non-representable type encountered: ${o.type}`,
                );
            k(e, t, C, v);
        }
        const w = e._zod.parent;
        w && (u.ref || (u.ref = w), qe(w, t, v), (t.seen.get(w).isParent = !0));
    }
    const h = t.metadataRegistry.get(e);
    return (
        h && Object.assign(u.schema, h),
        t.io === "input" &&
        ot(e) &&
        (delete u.schema.examples, delete u.schema.default),
        t.io === "input" &&
        u.schema._prefault &&
        ((r = u.schema).default ?? (r.default = u.schema._prefault)),
        delete u.schema._prefault,
        t.seen.get(e).schema
    );
}

function Dl(e, t) {
    var s, u, d, h;
    const n = e.seen.get(t);
    if (!n) throw new Error("Unprocessed schema. This is a bug in Zod.");
    const r = new Map();
    for (const p of e.seen.entries()) {
        const g = (s = e.metadataRegistry.get(p[0])) == null ? void 0 : s.id;
        if (g) {
            const v = r.get(g);
            if (v && v !== p[0])
                throw new Error(
                    `Duplicate schema id "${g}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`,
                );
            r.set(g, p[0]);
        }
    }
    const o = (p) => {
        if (p[1].schema.$ref) return;
        const g = p[1],
            {
                ref: v,
                defId: w
            } = ((k) => {
                var R;
                const P = e.target === "draft-2020-12" ? "$defs" : "definitions";
                if (e.external) {
                    const K = (R = e.external.registry.get(k[0])) == null ? void 0 : R.id,
                        Y = e.external.uri ?? ((I) => I);
                    if (K) return {
                        ref: Y(K)
                    };
                    const W = k[1].defId ?? k[1].schema.id ?? "schema" + e.counter++;
                    return (
                        (k[1].defId = W), {
                            defId: W,
                            ref: `${Y("__shared")}#/${P}/${W}`
                        }
                    );
                }
                if (k[1] === n) return {
                    ref: "#"
                };
                const B = `#/${P}/`,
                    U = k[1].schema.id ?? "__schema" + e.counter++;
                return {
                    defId: U,
                    ref: B + U
                };
            })(p);
        ((g.def = {
            ...g.schema
        }), w && (g.defId = w));
        const C = g.schema;
        for (const k in C) delete C[k];
        C.$ref = v;
    };
    if (e.cycles === "throw")
        for (const p of e.seen.entries()) {
            const g = p[1];
            if (g.cycle)
                throw new Error(`Cycle detected: #/${(u = g.cycle) == null ? void 0 : u.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
        }
    for (const p of e.seen.entries()) {
        const g = p[1];
        if (t === p[0]) {
            o(p);
            continue;
        }
        if (e.external) {
            const w = (d = e.external.registry.get(p[0])) == null ? void 0 : d.id;
            if (t !== p[0] && w) {
                o(p);
                continue;
            }
        }
        (((h = e.metadataRegistry.get(p[0])) == null ? void 0 : h.id) ||
            g.cycle ||
            (g.count > 1 && e.reused === "ref")) &&
        o(p);
    }
}

function Fl(e, t) {
    var u, d, h;
    const n = e.seen.get(t);
    if (!n) throw new Error("Unprocessed schema. This is a bug in Zod.");
    const r = (p) => {
        const g = e.seen.get(p);
        if (g.ref === null) return;
        const v = g.def ?? g.schema,
            w = {
                ...v
            },
            C = g.ref;
        if (((g.ref = null), C)) {
            r(C);
            const P = e.seen.get(C),
                B = P.schema;
            if (
                (!B.$ref ||
                    (e.target !== "draft-07" &&
                        e.target !== "draft-04" &&
                        e.target !== "openapi-3.0") ?
                    Object.assign(v, B) :
                    ((v.allOf = v.allOf ?? []), v.allOf.push(B)),
                    Object.assign(v, w),
                    p._zod.parent === C)
            )
                for (const U in v)
                    U !== "$ref" && U !== "allOf" && (U in w || delete v[U]);
            if (B.$ref && P.def)
                for (const U in v)
                    U !== "$ref" &&
                    U !== "allOf" &&
                    U in P.def &&
                    JSON.stringify(v[U]) === JSON.stringify(P.def[U]) &&
                    delete v[U];
        }
        const k = p._zod.parent;
        if (k && k !== C) {
            r(k);
            const P = e.seen.get(k);
            if (P != null && P.schema.$ref && ((v.$ref = P.schema.$ref), P.def))
                for (const B in v)
                    B !== "$ref" &&
                    B !== "allOf" &&
                    B in P.def &&
                    JSON.stringify(v[B]) === JSON.stringify(P.def[B]) &&
                    delete v[B];
        }
        e.override({
            zodSchema: p,
            jsonSchema: v,
            path: g.path ?? []
        });
    };
    for (const p of [...e.seen.entries()].reverse()) r(p[0]);
    const o = {};
    if (
        (e.target === "draft-2020-12" ?
            (o.$schema = "https://json-schema.org/draft/2020-12/schema") :
            e.target === "draft-07" ?
            (o.$schema = "http://json-schema.org/draft-07/schema#") :
            e.target === "draft-04" ?
            (o.$schema = "http://json-schema.org/draft-04/schema#") :
            e.target,
            (u = e.external) == null ? void 0 : u.uri)
    ) {
        const p = (d = e.external.registry.get(t)) == null ? void 0 : d.id;
        if (!p) throw new Error("Schema is missing an `id` property");
        o.$id = e.external.uri(p);
    }
    Object.assign(o, n.def ?? n.schema);
    const s = ((h = e.external) == null ? void 0 : h.defs) ?? {};
    for (const p of e.seen.entries()) {
        const g = p[1];
        g.def && g.defId && (s[g.defId] = g.def);
    }
    e.external ||
        (Object.keys(s).length > 0 &&
            (e.target === "draft-2020-12" ? (o.$defs = s) : (o.definitions = s)));
    try {
        const p = JSON.parse(JSON.stringify(o));
        return (
            Object.defineProperty(p, "~standard", {
                value: {
                    ...t["~standard"],
                    jsonSchema: {
                        input: li(t, "input", e.processors),
                        output: li(t, "output", e.processors),
                    },
                },
                enumerable: !1,
                writable: !1,
            }),
            p
        );
    } catch {
        throw new Error("Error converting schema to JSON.");
    }
}

function ot(e, t) {
    const n = t ?? {
        seen: new Set()
    };
    if (n.seen.has(e)) return !1;
    n.seen.add(e);
    const r = e._zod.def;
    if (r.type === "transform") return !0;
    if (r.type === "array") return ot(r.element, n);
    if (r.type === "set") return ot(r.valueType, n);
    if (r.type === "lazy") return ot(r.getter(), n);
    if (
        r.type === "promise" ||
        r.type === "optional" ||
        r.type === "nonoptional" ||
        r.type === "nullable" ||
        r.type === "readonly" ||
        r.type === "default" ||
        r.type === "prefault"
    )
        return ot(r.innerType, n);
    if (r.type === "intersection") return ot(r.left, n) || ot(r.right, n);
    if (r.type === "record" || r.type === "map")
        return ot(r.keyType, n) || ot(r.valueType, n);
    if (r.type === "pipe") return ot(r.in, n) || ot(r.out, n);
    if (r.type === "object") {
        for (const o in r.shape)
            if (ot(r.shape[o], n)) return !0;
        return !1;
    }
    if (r.type === "union") {
        for (const o of r.options)
            if (ot(o, n)) return !0;
        return !1;
    }
    if (r.type === "tuple") {
        for (const o of r.items)
            if (ot(o, n)) return !0;
        return !(!r.rest || !ot(r.rest, n));
    }
    return !1;
}
const r0 =
    (e, t = {}) =>
    (n) => {
        const r = Ml({
            ...n,
            processors: t
        });
        return (qe(e, r), Dl(r, e), Fl(r, e));
    },
    li =
    (e, t, n = {}) =>
    (r) => {
        const {
            libraryOptions: o,
            target: s
        } = r ?? {},
            u = Ml({
                ...(o ?? {}),
                target: s,
                io: t,
                processors: n
            });
        return (qe(e, u), Dl(u, e), Fl(u, e));
    },
    o0 = {
        guid: "uuid",
        url: "uri",
        datetime: "date-time",
        json_string: "json-string",
        regex: "",
    },
    i0 = (e, t, n, r) => {
        const o = n;
        o.type = "string";
        const {
            minimum: s,
            maximum: u,
            format: d,
            patterns: h,
            contentEncoding: p,
        } = e._zod.bag;
        if (
            (typeof s == "number" && (o.minLength = s),
                typeof u == "number" && (o.maxLength = u),
                d &&
                ((o.format = o0[d] ?? d),
                    o.format === "" && delete o.format,
                    d === "time" && delete o.format),
                p && (o.contentEncoding = p),
                h && h.size > 0)
        ) {
            const g = [...h];
            g.length === 1 ?
                (o.pattern = g[0].source) :
                g.length > 1 &&
                (o.allOf = [
                    ...g.map((v) => ({
                        ...(t.target === "draft-07" ||
                            t.target === "draft-04" ||
                            t.target === "openapi-3.0" ?
                            {
                                type: "string"
                            } :
                            {}),
                        pattern: v.source,
                    })),
                ]);
        }
    },
    a0 = (e, t, n, r) => {
        const o = n,
            {
                minimum: s,
                maximum: u,
                format: d,
                multipleOf: h,
                exclusiveMaximum: p,
                exclusiveMinimum: g,
            } = e._zod.bag;
        (typeof d == "string" && d.includes("int") ?
            (o.type = "integer") :
            (o.type = "number"),
            typeof g == "number" &&
            (t.target === "draft-04" || t.target === "openapi-3.0" ?
                ((o.minimum = g), (o.exclusiveMinimum = !0)) :
                (o.exclusiveMinimum = g)),
            typeof s == "number" &&
            ((o.minimum = s),
                typeof g == "number" &&
                t.target !== "draft-04" &&
                (g >= s ? delete o.minimum : delete o.exclusiveMinimum)),
            typeof p == "number" &&
            (t.target === "draft-04" || t.target === "openapi-3.0" ?
                ((o.maximum = p), (o.exclusiveMaximum = !0)) :
                (o.exclusiveMaximum = p)),
            typeof u == "number" &&
            ((o.maximum = u),
                typeof p == "number" &&
                t.target !== "draft-04" &&
                (p <= u ? delete o.maximum : delete o.exclusiveMaximum)),
            typeof h == "number" && (o.multipleOf = h));
    },
    s0 = (e, t, n, r) => {
        n.type = "boolean";
    },
    c0 = (e, t, n, r) => {
        n.not = {};
    },
    u0 = (e, t, n, r) => {},
    l0 = (e, t, n, r) => {
        const o = yl(e._zod.def.entries);
        (o.every((s) => typeof s == "number") && (n.type = "number"),
            o.every((s) => typeof s == "string") && (n.type = "string"),
            (n.enum = o));
    },
    d0 = (e, t, n, r) => {
        if (t.unrepresentable === "throw")
            throw new Error("Custom types cannot be represented in JSON Schema");
    },
    f0 = (e, t, n, r) => {
        if (t.unrepresentable === "throw")
            throw new Error("Transforms cannot be represented in JSON Schema");
    },
    p0 = (e, t, n, r) => {
        const o = n,
            s = e._zod.def,
            {
                minimum: u,
                maximum: d
            } = e._zod.bag;
        (typeof u == "number" && (o.minItems = u),
            typeof d == "number" && (o.maxItems = d),
            (o.type = "array"),
            (o.items = qe(s.element, t, {
                ...r,
                path: [...r.path, "items"]
            })));
    },
    h0 = (e, t, n, r) => {
        var p;
        const o = n,
            s = e._zod.def;
        ((o.type = "object"), (o.properties = {}));
        const u = s.shape;
        for (const g in u)
            o.properties[g] = qe(u[g], t, {
                ...r,
                path: [...r.path, "properties", g],
            });
        const d = new Set(Object.keys(u)),
            h = new Set(
                [...d].filter((g) => {
                    const v = s.shape[g]._zod;
                    return t.io === "input" ? v.optin === void 0 : v.optout === void 0;
                }),
            );
        (h.size > 0 && (o.required = Array.from(h)),
            ((p = s.catchall) == null ? void 0 : p._zod.def.type) === "never" ?
            (o.additionalProperties = !1) :
            s.catchall ?
            s.catchall &&
            (o.additionalProperties = qe(s.catchall, t, {
                ...r,
                path: [...r.path, "additionalProperties"],
            })) :
            t.io === "output" && (o.additionalProperties = !1));
    },
    m0 = (e, t, n, r) => {
        const o = e._zod.def,
            s = o.inclusive === !1,
            u = o.options.map((d, h) =>
                qe(d, t, {
                    ...r,
                    path: [...r.path, s ? "oneOf" : "anyOf", h]
                }),
            );
        s ? (n.oneOf = u) : (n.anyOf = u);
    },
    g0 = (e, t, n, r) => {
        const o = e._zod.def,
            s = qe(o.left, t, {
                ...r,
                path: [...r.path, "allOf", 0]
            }),
            u = qe(o.right, t, {
                ...r,
                path: [...r.path, "allOf", 1]
            }),
            d = (p) => "allOf" in p && Object.keys(p).length === 1,
            h = [...(d(s) ? s.allOf : [s]), ...(d(u) ? u.allOf : [u])];
        n.allOf = h;
    },
    v0 = (e, t, n, r) => {
        const o = n,
            s = e._zod.def;
        o.type = "object";
        const u = s.keyType,
            d = u._zod.bag,
            h = d == null ? void 0 : d.patterns;
        if (s.mode === "loose" && h && h.size > 0) {
            const g = qe(s.valueType, t, {
                ...r,
                path: [...r.path, "patternProperties", "*"],
            });
            o.patternProperties = {};
            for (const v of h) o.patternProperties[v.source] = g;
        } else
            ((t.target !== "draft-07" && t.target !== "draft-2020-12") ||
                (o.propertyNames = qe(s.keyType, t, {
                    ...r,
                    path: [...r.path, "propertyNames"],
                })),
                (o.additionalProperties = qe(s.valueType, t, {
                    ...r,
                    path: [...r.path, "additionalProperties"],
                })));
        const p = u._zod.values;
        if (p) {
            const g = [...p].filter(
                (v) => typeof v == "string" || typeof v == "number",
            );
            g.length > 0 && (o.required = g);
        }
    },
    y0 = (e, t, n, r) => {
        const o = e._zod.def,
            s = qe(o.innerType, t, r),
            u = t.seen.get(e);
        t.target === "openapi-3.0" ?
            ((u.ref = o.innerType), (n.nullable = !0)) :
            (n.anyOf = [s, {
                type: "null"
            }]);
    },
    b0 = (e, t, n, r) => {
        const o = e._zod.def;
        (qe(o.innerType, t, r), (t.seen.get(e).ref = o.innerType));
    },
    w0 = (e, t, n, r) => {
        const o = e._zod.def;
        (qe(o.innerType, t, r),
            (t.seen.get(e).ref = o.innerType),
            (n.default = JSON.parse(JSON.stringify(o.defaultValue))));
    },
    S0 = (e, t, n, r) => {
        const o = e._zod.def;
        (qe(o.innerType, t, r),
            (t.seen.get(e).ref = o.innerType),
            t.io === "input" &&
            (n._prefault = JSON.parse(JSON.stringify(o.defaultValue))));
    },
    _0 = (e, t, n, r) => {
        const o = e._zod.def;
        let s;
        (qe(o.innerType, t, r), (t.seen.get(e).ref = o.innerType));
        try {
            s = o.catchValue(void 0);
        } catch {
            throw new Error("Dynamic catch values are not supported in JSON Schema");
        }
        n.default = s;
    },
    x0 = (e, t, n, r) => {
        const o = e._zod.def,
            s =
            t.io === "input" ?
            o.in._zod.def.type === "transform" ?
            o.out :
            o.in :
            o.out;
        (qe(s, t, r), (t.seen.get(e).ref = s));
    },
    O0 = (e, t, n, r) => {
        const o = e._zod.def;
        (qe(o.innerType, t, r),
            (t.seen.get(e).ref = o.innerType),
            (n.readOnly = !0));
    },
    Hl = (e, t, n, r) => {
        const o = e._zod.def;
        (qe(o.innerType, t, r), (t.seen.get(e).ref = o.innerType));
    },
    k0 = N("ZodISODateTime", (e, t) => {
        (Tm.init(e, t), je.init(e, t));
    });

function E0(e) {
    return $g(k0, e);
}
const C0 = N("ZodISODate", (e, t) => {
    (Im.init(e, t), je.init(e, t));
});

function T0(e) {
    return Ng(C0, e);
}
const I0 = N("ZodISOTime", (e, t) => {
    (Pm.init(e, t), je.init(e, t));
});

function P0(e) {
    return zg(I0, e);
}
const A0 = N("ZodISODuration", (e, t) => {
    (Am.init(e, t), je.init(e, t));
});

function R0(e) {
    return Lg(A0, e);
}
const $0 = (e, t) => {
        (_l.init(e, t),
            (e.name = "ZodError"),
            Object.defineProperties(e, {
                format: {
                    value: (n) => Sh(e, n)
                },
                flatten: {
                    value: (n) => wh(e, n)
                },
                addIssue: {
                    value: (n) => {
                        (e.issues.push(n), (e.message = JSON.stringify(e.issues, Ea, 2)));
                    },
                },
                addIssues: {
                    value: (n) => {
                        (e.issues.push(...n),
                            (e.message = JSON.stringify(e.issues, Ea, 2)));
                    },
                },
                isEmpty: {
                    get: () => e.issues.length === 0
                },
            }));
    },
    Tt = N("ZodError", $0, {
        Parent: Error
    }),
    N0 = us(Tt),
    z0 = ls(Tt),
    L0 = bi(Tt),
    j0 = wi(Tt),
    M0 = Oh(Tt),
    D0 = kh(Tt),
    F0 = Eh(Tt),
    H0 = Ch(Tt),
    B0 = Th(Tt),
    U0 = Ih(Tt),
    q0 = Ph(Tt),
    W0 = Ah(Tt),
    De = N(
        "ZodType",
        (e, t) => (
            Me.init(e, t),
            Object.assign(e["~standard"], {
                jsonSchema: {
                    input: li(e, "input"),
                    output: li(e, "output")
                },
            }),
            (e.toJSONSchema = r0(e, {})),
            (e.def = t),
            (e.type = t.type),
            Object.defineProperty(e, "_def", {
                value: t
            }),
            (e.check = (...n) =>
                e.clone(
                    Cn(t, {
                        checks: [
                            ...(t.checks ?? []),
                            ...n.map((r) =>
                                typeof r == "function" ?
                                {
                                    _zod: {
                                        check: r,
                                        def: {
                                            check: "custom"
                                        },
                                        onattach: [],
                                    },
                                } :
                                r,
                            ),
                        ],
                    }), {
                        parent: !0
                    },
                )),
            (e.with = e.check),
            (e.clone = (n, r) => Tn(e, n, r)),
            (e.brand = () => e),
            (e.register = (n, r) => (n.add(e, r), e)),
            (e.parse = (n, r) => N0(e, n, r, {
                callee: e.parse
            })),
            (e.safeParse = (n, r) => L0(e, n, r)),
            (e.parseAsync = async (n, r) => z0(e, n, r, {
                callee: e.parseAsync
            })),
            (e.safeParseAsync = async (n, r) => j0(e, n, r)),
            (e.spa = e.safeParseAsync),
            (e.encode = (n, r) => M0(e, n, r)),
            (e.decode = (n, r) => D0(e, n, r)),
            (e.encodeAsync = async (n, r) => F0(e, n, r)),
            (e.decodeAsync = async (n, r) => H0(e, n, r)),
            (e.safeEncode = (n, r) => B0(e, n, r)),
            (e.safeDecode = (n, r) => U0(e, n, r)),
            (e.safeEncodeAsync = async (n, r) => q0(e, n, r)),
            (e.safeDecodeAsync = async (n, r) => W0(e, n, r)),
            (e.refine = (n, r) => e.check(Fv(n, r))),
            (e.superRefine = (n) => e.check(Hv(n))),
            (e.overwrite = (n) => e.check(Cr(n))),
            (e.optional = () => au(e)),
            (e.exactOptional = () => Cv(e)),
            (e.nullable = () => su(e)),
            (e.nullish = () => au(su(e))),
            (e.nonoptional = (n) => $v(e, n)),
            (e.array = () => Ta(e)),
            (e.or = (n) => bv([e, n])),
            (e.and = (n) => Sv(e, n)),
            (e.transform = (n) => cu(e, kv(n))),
            (e.default = (n) => Pv(e, n)),
            (e.prefault = (n) => Rv(e, n)),
            (e.catch = (n) => zv(e, n)),
            (e.pipe = (n) => cu(e, n)),
            (e.readonly = () => Mv(e)),
            (e.describe = (n) => {
                const r = e.clone();
                return (Jr.add(r, {
                    description: n
                }), r);
            }),
            Object.defineProperty(e, "description", {
                get: () => {
                    var n;
                    return (n = Jr.get(e)) == null ? void 0 : n.description;
                },
                configurable: !0,
            }),
            (e.meta = (...n) => {
                if (n.length === 0) return Jr.get(e);
                const r = e.clone();
                return (Jr.add(r, n[0]), r);
            }),
            (e.isOptional = () => e.safeParse(void 0).success),
            (e.isNullable = () => e.safeParse(null).success),
            (e.apply = (n) => n(e)),
            e
        ),
    ),
    Bl = N("_ZodString", (e, t) => {
        (ds.init(e, t),
            De.init(e, t),
            (e._zod.processJSONSchema = (r, o, s) => i0(e, r, o)));
        const n = e._zod.bag;
        ((e.format = n.format ?? null),
            (e.minLength = n.minimum ?? null),
            (e.maxLength = n.maximum ?? null),
            (e.regex = (...r) => e.check(Bg(...r))),
            (e.includes = (...r) => e.check(Wg(...r))),
            (e.startsWith = (...r) => e.check(Gg(...r))),
            (e.endsWith = (...r) => e.check(Zg(...r))),
            (e.min = (...r) => e.check(ui(...r))),
            (e.max = (...r) => e.check(Ll(...r))),
            (e.length = (...r) => e.check(jl(...r))),
            (e.nonempty = (...r) => e.check(ui(1, ...r))),
            (e.lowercase = (r) => e.check(Ug(r))),
            (e.uppercase = (r) => e.check(qg(r))),
            (e.trim = () => e.check(Vg())),
            (e.normalize = (...r) => e.check(Xg(...r))),
            (e.toLowerCase = () => e.check(Jg())),
            (e.toUpperCase = () => e.check(Kg())),
            (e.slugify = () => e.check(Yg())));
    }),
    G0 = N("ZodString", (e, t) => {
        (ds.init(e, t),
            Bl.init(e, t),
            (e.email = (n) => e.check(fg(Z0, n))),
            (e.url = (n) => e.check(vg(X0, n))),
            (e.jwt = (n) => e.check(Rg(uv, n))),
            (e.emoji = (n) => e.check(yg(V0, n))),
            (e.guid = (n) => e.check(Qc(ru, n))),
            (e.uuid = (n) => e.check(pg(Do, n))),
            (e.uuidv4 = (n) => e.check(hg(Do, n))),
            (e.uuidv6 = (n) => e.check(mg(Do, n))),
            (e.uuidv7 = (n) => e.check(gg(Do, n))),
            (e.nanoid = (n) => e.check(bg(J0, n))),
            (e.guid = (n) => e.check(Qc(ru, n))),
            (e.cuid = (n) => e.check(wg(K0, n))),
            (e.cuid2 = (n) => e.check(Sg(Y0, n))),
            (e.ulid = (n) => e.check(_g(Q0, n))),
            (e.base64 = (n) => e.check(Ig(av, n))),
            (e.base64url = (n) => e.check(Pg(sv, n))),
            (e.xid = (n) => e.check(xg(ev, n))),
            (e.ksuid = (n) => e.check(Og(tv, n))),
            (e.ipv4 = (n) => e.check(kg(nv, n))),
            (e.ipv6 = (n) => e.check(Eg(rv, n))),
            (e.cidrv4 = (n) => e.check(Cg(ov, n))),
            (e.cidrv6 = (n) => e.check(Tg(iv, n))),
            (e.e164 = (n) => e.check(Ag(cv, n))),
            (e.datetime = (n) => e.check(E0(n))),
            (e.date = (n) => e.check(T0(n))),
            (e.time = (n) => e.check(P0(n))),
            (e.duration = (n) => e.check(R0(n))));
    });

function an(e) {
    return dg(G0, e);
}
const je = N("ZodStringFormat", (e, t) => {
        (Le.init(e, t), Bl.init(e, t));
    }),
    Z0 = N("ZodEmail", (e, t) => {
        (bm.init(e, t), je.init(e, t));
    }),
    ru = N("ZodGUID", (e, t) => {
        (vm.init(e, t), je.init(e, t));
    }),
    Do = N("ZodUUID", (e, t) => {
        (ym.init(e, t), je.init(e, t));
    }),
    X0 = N("ZodURL", (e, t) => {
        (wm.init(e, t), je.init(e, t));
    }),
    V0 = N("ZodEmoji", (e, t) => {
        (Sm.init(e, t), je.init(e, t));
    }),
    J0 = N("ZodNanoID", (e, t) => {
        (_m.init(e, t), je.init(e, t));
    }),
    K0 = N("ZodCUID", (e, t) => {
        (xm.init(e, t), je.init(e, t));
    }),
    Y0 = N("ZodCUID2", (e, t) => {
        (Om.init(e, t), je.init(e, t));
    }),
    Q0 = N("ZodULID", (e, t) => {
        (km.init(e, t), je.init(e, t));
    }),
    ev = N("ZodXID", (e, t) => {
        (Em.init(e, t), je.init(e, t));
    }),
    tv = N("ZodKSUID", (e, t) => {
        (Cm.init(e, t), je.init(e, t));
    }),
    nv = N("ZodIPv4", (e, t) => {
        (Rm.init(e, t), je.init(e, t));
    }),
    rv = N("ZodIPv6", (e, t) => {
        ($m.init(e, t), je.init(e, t));
    }),
    ov = N("ZodCIDRv4", (e, t) => {
        (Nm.init(e, t), je.init(e, t));
    }),
    iv = N("ZodCIDRv6", (e, t) => {
        (zm.init(e, t), je.init(e, t));
    }),
    av = N("ZodBase64", (e, t) => {
        (Lm.init(e, t), je.init(e, t));
    }),
    sv = N("ZodBase64URL", (e, t) => {
        (Mm.init(e, t), je.init(e, t));
    }),
    cv = N("ZodE164", (e, t) => {
        (Dm.init(e, t), je.init(e, t));
    }),
    uv = N("ZodJWT", (e, t) => {
        (Hm.init(e, t), je.init(e, t));
    }),
    Ul = N("ZodNumber", (e, t) => {
        (Rl.init(e, t),
            De.init(e, t),
            (e._zod.processJSONSchema = (r, o, s) => a0(e, r, o)),
            (e.gt = (r, o) => e.check(tu(r, o))),
            (e.gte = (r, o) => e.check(fa(r, o))),
            (e.min = (r, o) => e.check(fa(r, o))),
            (e.lt = (r, o) => e.check(eu(r, o))),
            (e.lte = (r, o) => e.check(da(r, o))),
            (e.max = (r, o) => e.check(da(r, o))),
            (e.int = (r) => e.check(ou(r))),
            (e.safe = (r) => e.check(ou(r))),
            (e.positive = (r) => e.check(tu(0, r))),
            (e.nonnegative = (r) => e.check(fa(0, r))),
            (e.negative = (r) => e.check(eu(0, r))),
            (e.nonpositive = (r) => e.check(da(0, r))),
            (e.multipleOf = (r, o) => e.check(nu(r, o))),
            (e.step = (r, o) => e.check(nu(r, o))),
            (e.finite = () => e));
        const n = e._zod.bag;
        ((e.minValue =
                Math.max(
                    n.minimum ?? Number.NEGATIVE_INFINITY,
                    n.exclusiveMinimum ?? Number.NEGATIVE_INFINITY,
                ) ?? null),
            (e.maxValue =
                Math.min(
                    n.maximum ?? Number.POSITIVE_INFINITY,
                    n.exclusiveMaximum ?? Number.POSITIVE_INFINITY,
                ) ?? null),
            (e.isInt =
                (n.format ?? "").includes("int") ||
                Number.isSafeInteger(n.multipleOf ?? 0.5)),
            (e.isFinite = !0),
            (e.format = n.format ?? null));
    });

function Zr(e) {
    return jg(Ul, e);
}
const lv = N("ZodNumberFormat", (e, t) => {
    (Bm.init(e, t), Ul.init(e, t));
});

function ou(e) {
    return Mg(lv, e);
}
const dv = N("ZodBoolean", (e, t) => {
    (Um.init(e, t),
        De.init(e, t),
        (e._zod.processJSONSchema = (n, r, o) => s0(0, 0, r)));
});

function fv(e) {
    return Dg(dv, e);
}
const pv = N("ZodUnknown", (e, t) => {
    (qm.init(e, t),
        De.init(e, t),
        (e._zod.processJSONSchema = (n, r, o) => u0()));
});

function iu() {
    return Fg(pv);
}
const hv = N("ZodNever", (e, t) => {
    (Wm.init(e, t),
        De.init(e, t),
        (e._zod.processJSONSchema = (n, r, o) => c0(0, 0, r)));
});

function mv(e) {
    return Hg(hv, e);
}
const gv = N("ZodArray", (e, t) => {
    (Gm.init(e, t),
        De.init(e, t),
        (e._zod.processJSONSchema = (n, r, o) => p0(e, n, r, o)),
        (e.element = t.element),
        (e.min = (n, r) => e.check(ui(n, r))),
        (e.nonempty = (n) => e.check(ui(1, n))),
        (e.max = (n, r) => e.check(Ll(n, r))),
        (e.length = (n, r) => e.check(jl(n, r))),
        (e.unwrap = () => e.element));
});

function Ta(e, t) {
    return Qg(gv, e, t);
}
const vv = N("ZodObject", (e, t) => {
    (Xm.init(e, t),
        De.init(e, t),
        (e._zod.processJSONSchema = (n, r, o) => h0(e, n, r, o)),
        ke(e, "shape", () => t.shape),
        (e.keyof = () => Ko(Object.keys(e._zod.def.shape))),
        (e.catchall = (n) => e.clone({
            ...e._zod.def,
            catchall: n
        })),
        (e.passthrough = () => e.clone({
            ...e._zod.def,
            catchall: iu()
        })),
        (e.loose = () => e.clone({
            ...e._zod.def,
            catchall: iu()
        })),
        (e.strict = () => e.clone({
            ...e._zod.def,
            catchall: mv()
        })),
        (e.strip = () => e.clone({
            ...e._zod.def,
            catchall: void 0
        })),
        (e.extend = (n) => mh(e, n)),
        (e.safeExtend = (n) => gh(e, n)),
        (e.merge = (n) => vh(e, n)),
        (e.pick = (n) => ph(e, n)),
        (e.omit = (n) => hh(e, n)),
        (e.partial = (...n) => yh(ql, e, n[0])),
        (e.required = (...n) => bh(Wl, e, n[0])));
});

function Wt(e, t) {
    const n = {
        type: "object",
        shape: e ?? {},
        ...ue(t)
    };
    return new vv(n);
}
const yv = N("ZodUnion", (e, t) => {
    (Vm.init(e, t),
        De.init(e, t),
        (e._zod.processJSONSchema = (n, r, o) => m0(e, n, r, o)),
        (e.options = t.options));
});

function bv(e, t) {
    return new yv({
        type: "union",
        options: e,
        ...ue(t)
    });
}
const wv = N("ZodIntersection", (e, t) => {
    (Jm.init(e, t),
        De.init(e, t),
        (e._zod.processJSONSchema = (n, r, o) => g0(e, n, r, o)));
});

function Sv(e, t) {
    return new wv({
        type: "intersection",
        left: e,
        right: t
    });
}
const _v = N("ZodRecord", (e, t) => {
    (Km.init(e, t),
        De.init(e, t),
        (e._zod.processJSONSchema = (n, r, o) => v0(e, n, r, o)),
        (e.keyType = t.keyType),
        (e.valueType = t.valueType));
});

function xv(e, t, n) {
    return new _v({
        type: "record",
        keyType: e,
        valueType: t,
        ...ue(n)
    });
}
const Ia = N("ZodEnum", (e, t) => {
    (Ym.init(e, t),
        De.init(e, t),
        (e._zod.processJSONSchema = (r, o, s) => l0(e, 0, o)),
        (e.enum = t.entries),
        (e.options = Object.values(t.entries)));
    const n = new Set(Object.keys(t.entries));
    ((e.extract = (r, o) => {
            const s = {};
            for (const u of r) {
                if (!n.has(u)) throw new Error(`Key ${u} not found in enum`);
                s[u] = t.entries[u];
            }
            return new Ia({
                ...t,
                checks: [],
                ...ue(o),
                entries: s
            });
        }),
        (e.exclude = (r, o) => {
            const s = {
                ...t.entries
            };
            for (const u of r) {
                if (!n.has(u)) throw new Error(`Key ${u} not found in enum`);
                delete s[u];
            }
            return new Ia({
                ...t,
                checks: [],
                ...ue(o),
                entries: s
            });
        }));
});

function Ko(e, t) {
    const n = Array.isArray(e) ? Object.fromEntries(e.map((r) => [r, r])) : e;
    return new Ia({
        type: "enum",
        entries: n,
        ...ue(t)
    });
}
const Ov = N("ZodTransform", (e, t) => {
    (Qm.init(e, t),
        De.init(e, t),
        (e._zod.processJSONSchema = (n, r, o) => f0(0, n)),
        (e._zod.parse = (n, r) => {
            if (r.direction === "backward") throw new gl(e.constructor.name);
            n.addIssue = (s) => {
                if (typeof s == "string") n.issues.push(ao(s, n.value, t));
                else {
                    const u = s;
                    (u.fatal && (u.continue = !1),
                        u.code ?? (u.code = "custom"),
                        u.input ?? (u.input = n.value),
                        u.inst ?? (u.inst = e),
                        n.issues.push(ao(u)));
                }
            };
            const o = t.transform(n.value, n);
            return o instanceof Promise ?
                o.then((s) => ((n.value = s), n)) :
                ((n.value = o), n);
        }));
});

function kv(e) {
    return new Ov({
        type: "transform",
        transform: e
    });
}
const ql = N("ZodOptional", (e, t) => {
    (zl.init(e, t),
        De.init(e, t),
        (e._zod.processJSONSchema = (n, r, o) => Hl(e, n, 0, o)),
        (e.unwrap = () => e._zod.def.innerType));
});

function au(e) {
    return new ql({
        type: "optional",
        innerType: e
    });
}
const Ev = N("ZodExactOptional", (e, t) => {
    (eg.init(e, t),
        De.init(e, t),
        (e._zod.processJSONSchema = (n, r, o) => Hl(e, n, 0, o)),
        (e.unwrap = () => e._zod.def.innerType));
});

function Cv(e) {
    return new Ev({
        type: "optional",
        innerType: e
    });
}
const Tv = N("ZodNullable", (e, t) => {
    (tg.init(e, t),
        De.init(e, t),
        (e._zod.processJSONSchema = (n, r, o) => y0(e, n, r, o)),
        (e.unwrap = () => e._zod.def.innerType));
});

function su(e) {
    return new Tv({
        type: "nullable",
        innerType: e
    });
}
const Iv = N("ZodDefault", (e, t) => {
    (ng.init(e, t),
        De.init(e, t),
        (e._zod.processJSONSchema = (n, r, o) => w0(e, n, r, o)),
        (e.unwrap = () => e._zod.def.innerType),
        (e.removeDefault = e.unwrap));
});

function Pv(e, t) {
    return new Iv({
        type: "default",
        innerType: e,
        get defaultValue() {
            return typeof t == "function" ? t() : wl(t);
        },
    });
}
const Av = N("ZodPrefault", (e, t) => {
    (rg.init(e, t),
        De.init(e, t),
        (e._zod.processJSONSchema = (n, r, o) => S0(e, n, r, o)),
        (e.unwrap = () => e._zod.def.innerType));
});

function Rv(e, t) {
    return new Av({
        type: "prefault",
        innerType: e,
        get defaultValue() {
            return typeof t == "function" ? t() : wl(t);
        },
    });
}
const Wl = N("ZodNonOptional", (e, t) => {
    (og.init(e, t),
        De.init(e, t),
        (e._zod.processJSONSchema = (n, r, o) => b0(e, n, 0, o)),
        (e.unwrap = () => e._zod.def.innerType));
});

function $v(e, t) {
    return new Wl({
        type: "nonoptional",
        innerType: e,
        ...ue(t)
    });
}
const Nv = N("ZodCatch", (e, t) => {
    (ig.init(e, t),
        De.init(e, t),
        (e._zod.processJSONSchema = (n, r, o) => _0(e, n, r, o)),
        (e.unwrap = () => e._zod.def.innerType),
        (e.removeCatch = e.unwrap));
});

function zv(e, t) {
    return new Nv({
        type: "catch",
        innerType: e,
        catchValue: typeof t == "function" ? t : () => t,
    });
}
const Lv = N("ZodPipe", (e, t) => {
    (ag.init(e, t),
        De.init(e, t),
        (e._zod.processJSONSchema = (n, r, o) => x0(e, n, 0, o)),
        (e.in = t.in),
        (e.out = t.out));
});

function cu(e, t) {
    return new Lv({
        type: "pipe",
        in: e,
        out: t
    });
}
const jv = N("ZodReadonly", (e, t) => {
    (sg.init(e, t),
        De.init(e, t),
        (e._zod.processJSONSchema = (n, r, o) => O0(e, n, r, o)),
        (e.unwrap = () => e._zod.def.innerType));
});

function Mv(e) {
    return new jv({
        type: "readonly",
        innerType: e
    });
}
const Dv = N("ZodCustom", (e, t) => {
    (cg.init(e, t),
        De.init(e, t),
        (e._zod.processJSONSchema = (n, r, o) => d0(0, n)));
});

function Fv(e, t = {}) {
    return e0(Dv, e, t);
}

function Hv(e) {
    return t0(e);
}
Wt({
    gateway: Wt({
        port: Zr().default(18789),
        bind: Ko(["loopback", "all"]).default("loopback"),
        auth: Wt({
            mode: Ko(["token", "password", "none"]).default("none"),
            token: an().optional(),
        }).default({
            mode: "none"
        }),
    }).default({
        port: 18789,
        bind: "loopback",
        auth: {
            mode: "none"
        }
    }),
    agents: Wt({
        defaults: Wt({
            model: Wt({
                primary: an()
            })
        })
    }).optional(),
    models: Wt({
        mode: Ko(["merge", "replace"]).optional(),
        providers: xv(
            an(),
            Wt({
                baseUrl: an().optional(),
                apiKey: an().optional(),
                api: an().optional(),
                models: Ta(
                    Wt({
                        id: an(),
                        name: an().optional(),
                        reasoning: fv().optional(),
                        input: Ta(an()).optional(),
                        cost: Wt({
                            input: Zr(),
                            output: Zr()
                        }).optional(),
                        contextWindow: Zr().optional(),
                        maxTokens: Zr().optional(),
                    }),
                ).optional(),
            }),
        ).optional(),
    }).optional(),
});
const Bv = {
    test: {
        jprxInternalGateway: "http://jprx.beta.wsd.com/",
        jprxGateway: "https://jprx.sparta.html5.qq.com/",
        wxLoginRedirectUri: "https://security-test.guanjia.qq.com/login",
        beaconUrl: "https://pcmgrmonitor.3g.qq.com/test/datareport",
        qclawBaseUrl: "https://jprx.sparta.html5.qq.com/aizone/v1",
        wechatWsUrl: "wss://jprx.sparta.html5.qq.com/agentwss",
    },
    production: {
        jprxInternalGateway: "https://jprx.woa.com/",
        jprxGateway: "https://jprx.m.qq.com/",
        wxLoginRedirectUri: "https://security.guanjia.qq.com/login",
        beaconUrl: "https://pcmgrmonitor.3g.qq.com/datareport",
        qclawBaseUrl: "https://mmgrcalltoken.3g.qq.com/aizone/v1",
        wechatWsUrl: "wss://mmgrcalltoken.3g.qq.com/agentwss",
    },
};

function Uv(e) {
    return Bv[e];
}

function fs() {
    return "production";
}

function qv() {
    return !1;
}

function ps() {
    return Uv(fs());
}
const Qr = "secure_";

function Fo(e) {
    try {
        return JSON.parse(e);
    } catch {
        return e;
    }
}
async function Gl() {
    var e;
    try {
        return (
            (await ((e = window.electronAPI) == null ?
                void 0 :
                e.safeStorage.isAvailable())) ?? !1
        );
    } catch {
        return !1;
    }
}
async function hr(e, t) {
    var n;
    try {
        if ((await Gl()) && (n = window.electronAPI) != null && n.safeStorage) {
            const r = await window.electronAPI.safeStorage.encrypt(t);
            localStorage.setItem(Qr + e, r);
        } else localStorage.setItem(Qr + e, t);
    } catch {
        localStorage.setItem(Qr + e, t);
    }
}
async function Xt(e) {
    var t;
    try {
        const n = localStorage.getItem(Qr + e);
        if (n === null) {
            const r = localStorage.getItem(e);
            return r !== null ? Fo(r) : null;
        }
        if ((await Gl()) && (t = window.electronAPI) != null && t.safeStorage)
            try {
                return Fo(await window.electronAPI.safeStorage.decrypt(n));
            } catch {
                return Fo(n);
            }
        return Fo(n);
    } catch {
        return null;
    }
}

function vt(e) {
    try {
        (localStorage.removeItem(Qr + e), localStorage.removeItem(e));
    } catch {}
}

function C2(e, t) {
    try {
        const n = typeof t == "string" ? t : JSON.stringify(t);
        localStorage.setItem(e, n);
    } catch {}
}

function T2(e) {
    try {
        const t = localStorage.getItem(e);
        if (t === null) return null;
        try {
            return JSON.parse(t);
        } catch {
            return t;
        }
    } catch {
        return null;
    }
}

function Wv(e) {
    try {
        localStorage.removeItem(e);
    } catch {}
}
const Gv = async () => {
        const e = await Xt("userInfo");
        if (!e) return "";
        try {
            return (e == null ? void 0 : e.loginKey) || "";
        } catch {
            return "";
        }
    },
    Zv = async () => (await Xt("jwt_token")) || null,
        Zl = "1.4.0";

function Xv(e) {
    const t = fs() === "production" ? e : e,
        {
            jprxGateway: n
        } = ps();
    return `${n}${t}`;
}

function Vv(e) {
    const t = fs() === "production" ? e : e,
        {
            jprxInternalGateway: n
        } = ps();
    return `${n}${t}`;
}

function Xl() {
    return "release";
}
async function Vl() {
    const e = await Xt("userInfo"),
        t = {
            "Content-Type": "application/json",
            "X-Version": "1",
            "X-Token": (await Gv()) || "",
            "X-Guid": (e == null ? void 0 : e.guid) || "1",
            "X-Account": (e == null ? void 0 : e.userId) || "1",
            "X-Session": "",
        };
    let n = await Zv();
    return (n && ((t["X-OpenClaw-Token"] = n), (n = "")), t);
}

function Jv() {
    var n, r;
    const e = (n = window.electronAPI) == null ? void 0 : n.platform,
        t = (r = window.electronAPI) == null ? void 0 : r.arch;
    return e === "darwin" ? (t === "arm64" ? "macarm" : "mac") : "win";
}
async function Be(e, t = {}) {
    var v,
        w,
        C,
        k,
        P,
        B,
        U,
        R,
        K,
        Y,
        W,
        I,
        O,
        ee,
        me,
        _e,
        Ie,
        F,
        he,
        Te,
        ve,
        lt,
        Qt,
        ln,
        It,
        Pr;
    const n = Xv(e),
        r = await Vl(),
        o = {
            ...t,
            web_version: Zl,
            web_env: Xl()
        };
    let s;
    try {
        s = await fetch(n, {
            method: "POST",
            headers: r,
            body: JSON.stringify(o),
            credentials: "same-origin",
            mode: "cors",
            cache: "default",
            redirect: "follow",
            referrerPolicy: "no-referrer-when-downgrade",
        });
    } catch {
        return {
            success: !1,
            code: void 0,
            message: "网络请求失败",
            data: null
        };
    }
    let u = s.headers.get("X-New-Token");
    u && (await hr("jwt_token", u), (u = ""));
    let d = null;
    try {
        const We = await s.text();
        d = We ? JSON.parse(We) : null;
    } catch {}
    if (
        (((C =
                    (w = (v = d == null ? void 0 : d.data) == null ? void 0 : v.resp) == null ?
                    void 0 :
                    w.common) == null ?
                void 0 :
                C.code) ??
            ((P = (k = d == null ? void 0 : d.data) == null ? void 0 : k.common) ==
                null ?
                void 0 :
                P.code) ??
            ((U = (B = d == null ? void 0 : d.resp) == null ? void 0 : B.common) ==
                null ?
                void 0 :
                U.code) ??
            ((R = d == null ? void 0 : d.common) == null ? void 0 : R.code)) === 21004
    )
        return (
            vt("jwt_token"),
            vt("openclaw_channel_token"),
            vt("userInfo"),
            vt("wx_login_code"),
            vt("openclaw_connected_user"),
            vt("openclaw_connection_guid"),
            Wv("openclaw_remote_control_enabled"),
            window.dispatchEvent(new CustomEvent("openclaw:session-expired")), {
                success: !1,
                code: 21004,
                message: "登录已过期，请重新登录",
                data: null,
            }
        );
    if (!s.ok)
        return {
            success: !1,
            code: s.status,
            message: (d == null ? void 0 : d.message) || s.statusText || `HTTP ${s.status}`,
            data: d,
        };
    const h = d == null ? void 0 : d.ret,
        p =
        ((Y = (K = d == null ? void 0 : d.data) == null ? void 0 : K.common) ==
            null ?
            void 0 :
            Y.code) ??
        ((I = (W = d == null ? void 0 : d.resp) == null ? void 0 : W.common) ==
            null ?
            void 0 :
            I.code) ??
        ((O = d == null ? void 0 : d.common) == null ? void 0 : O.code),
        g =
        (_e =
            (me = (ee = d == null ? void 0 : d.data) == null ? void 0 : ee.resp) ==
            null ?
            void 0 :
            me.common) == null ?
        void 0 :
        _e.code;
    if (h === 0 && g != null && g !== 0) {
        const We =
            (he =
                (F = (Ie = d == null ? void 0 : d.data) == null ? void 0 : Ie.resp) ==
                null ?
                void 0 :
                F.common) == null ?
            void 0 :
            he.message;
        return {
            success: !1,
            code: g,
            message: We || "业务请求失败",
            data: (d == null ? void 0 : d.data) ?? (d == null ? void 0 : d.resp) ?? d,
        };
    }
    return h === 0 || p === 0 ?
        ((Te = d == null ? void 0 : d.common) == null ? void 0 : Te.code) === 0 &&
        d != null &&
        d.data &&
        !((ve = d == null ? void 0 : d.data) != null && ve.common) ?
        {
            success: !0,
            code: 0,
            data: d.data
        } :
        {
            success: !0,
            code: 0,
            data: d.data ?? d.resp
        } :
        {
            success: !1,
            code: h ?? p,
            message: (((Qt =
                            (lt = d == null ? void 0 : d.data) == null ? void 0 : lt.common) ==
                        null ?
                        void 0 :
                        Qt.message) ??
                    ((It =
                            (ln = d == null ? void 0 : d.resp) == null ?
                            void 0 :
                            ln.common) == null ?
                        void 0 :
                        It.message) ??
                    ((Pr = d == null ? void 0 : d.common) == null ?
                        void 0 :
                        Pr.message)) ||
                "业务请求失败",
            data: (d == null ? void 0 : d.data) ?? (d == null ? void 0 : d.resp) ?? d,
        };
}
async function Kv(e, t = {}, n) {
    var C, k, P, B, U, R, K, Y, W, I, O, ee, me, _e, Ie, F, he, Te;
    const r = Vv(e),
        o = await Vl(),
        s = {
            ...t,
            web_version: Zl,
            web_env: Xl()
        },
        u = new AbortController(),
        d = u ? setTimeout(() => u.abort(), n.timeout) : void 0;
    let h;
    try {
        h = await fetch(r, {
            method: "POST",
            headers: o,
            body: JSON.stringify(s),
            credentials: "same-origin",
            mode: "cors",
            cache: "default",
            redirect: "follow",
            referrerPolicy: "no-referrer-when-downgrade",
            ...(u ? {
                signal: u.signal
            } : {}),
        });
    } catch (ve) {
        return (
            d && clearTimeout(d), {
                success: !1,
                code: void 0,
                message: ve instanceof DOMException && ve.name === "AbortError" ?
                    "请求超时" :
                    "网络请求失败",
                data: null,
            }
        );
    }
    d && clearTimeout(d);
    let p = null;
    try {
        const ve = await h.text();
        p = ve ? JSON.parse(ve) : null;
    } catch {}
    if (!h.ok)
        return {
            success: !1,
            code: h.status,
            message: (p == null ? void 0 : p.message) || h.statusText || `HTTP ${h.status}`,
            data: p,
        };
    const g = p == null ? void 0 : p.ret,
        v =
        ((k = (C = p == null ? void 0 : p.data) == null ? void 0 : C.common) ==
            null ?
            void 0 :
            k.code) ??
        ((B = (P = p == null ? void 0 : p.resp) == null ? void 0 : P.common) ==
            null ?
            void 0 :
            B.code) ??
        ((U = p == null ? void 0 : p.common) == null ? void 0 : U.code),
        w =
        (Y =
            (K = (R = p == null ? void 0 : p.data) == null ? void 0 : R.resp) ==
            null ?
            void 0 :
            K.common) == null ?
        void 0 :
        Y.code;
    if (g === 0 && w != null && w !== 0) {
        const ve =
            (O =
                (I = (W = p == null ? void 0 : p.data) == null ? void 0 : W.resp) ==
                null ?
                void 0 :
                I.common) == null ?
            void 0 :
            O.message;
        return {
            success: !1,
            code: w,
            message: ve || "业务请求失败",
            data: (p == null ? void 0 : p.data) ?? (p == null ? void 0 : p.resp) ?? p,
        };
    }
    return g === 0 || v === 0 ?
        ((ee = p == null ? void 0 : p.common) == null ? void 0 : ee.code) === 0 &&
        p != null &&
        p.data &&
        !((me = p == null ? void 0 : p.data) != null && me.common) ?
        {
            success: !0,
            code: 0,
            data: p.data
        } :
        {
            success: !0,
            code: 0,
            data: p.data ?? p.resp
        } :
        {
            success: !1,
            code: g ?? v,
            message: (((Ie =
                            (_e = p == null ? void 0 : p.data) == null ? void 0 : _e.common) ==
                        null ?
                        void 0 :
                        Ie.message) ??
                    ((he =
                            (F = p == null ? void 0 : p.resp) == null ? void 0 : F.common) ==
                        null ?
                        void 0 :
                        he.message) ??
                    ((Te = p == null ? void 0 : p.common) == null ?
                        void 0 :
                        Te.message)) ||
                "业务请求失败",
            data: (p == null ? void 0 : p.data) ?? (p == null ? void 0 : p.resp) ?? p,
        };
}
class Vt {
    static async generateContactLink(t) {
        try {
            return await Be("data/4018/forward", t);
        } catch (n) {
            return {
                success: !1,
                code: void 0,
                message: String(n),
                data: null
            };
        }
    }
    static async queryDeviceByGuid(t) {
        try {
            return await Be("data/4019/forward", t);
        } catch (n) {
            return {
                success: !1,
                code: void 0,
                message: String(n),
                data: null
            };
        }
    }
    static async disconnectDevice(t) {
        try {
            return await Be("data/4020/forward", t);
        } catch (n) {
            return {
                success: !1,
                code: void 0,
                message: String(n),
                data: null
            };
        }
    }
    static async wxLogin(t) {
        try {
            return await Be("data/4026/forward", t);
        } catch (n) {
            return {
                success: !1,
                code: void 0,
                message: String(n),
                data: null
            };
        }
    }
    static async getUserInfo(t) {
        try {
            return await Be("data/4027/forward", t);
        } catch (n) {
            return {
                success: !1,
                code: void 0,
                message: String(n),
                data: null
            };
        }
    }
    static async wxLogout(t) {
        try {
            return await Be("data/4028/forward", t);
        } catch (n) {
            return {
                success: !1,
                code: void 0,
                message: String(n),
                data: null
            };
        }
    }
    static async getWxLoginState(t) {
        try {
            return await Be("data/4050/forward", t);
        } catch (n) {
            return {
                success: !1,
                code: void 0,
                message: String(n),
                data: null
            };
        }
    }
    static async createApiKey() {
        try {
            return await Be("data/4055/forward", {});
        } catch (t) {
            return {
                success: !1,
                code: void 0,
                message: String(t),
                data: null
            };
        }
    }
    static async checkInviteCode(t) {
        try {
            return await Be("data/4056/forward", t);
        } catch (n) {
            return {
                success: !1,
                code: void 0,
                message: String(n),
                data: null
            };
        }
    }
    static async submitInviteCode(t) {
        try {
            return await Be("data/4057/forward", t);
        } catch (n) {
            return {
                success: !1,
                code: void 0,
                message: String(n),
                data: null
            };
        }
    }
    static async refreshChannelToken() {
        var t, n, r;
        try {
            const o = await Be("data/4058/forward", {});
            if (!o.success) return;
            const s =
                ((n = (t = o.data) == null ? void 0 : t.resp) == null ?
                    void 0 :
                    n.data) ||
                ((r = o.data) == null ? void 0 : r.data) ||
                o.data;
            let u = s == null ? void 0 : s.openclaw_channel_token;
            if (!u) return;
            u !== (await Xt("openclaw_channel_token")) &&
                (await hr("openclaw_channel_token", u));
            const d = u;
            return ((u = ""), d);
        } catch {
            return;
        }
    }
    static async checkUpdate(t = "") {
        var n, r, o;
        try {
            const s = {
                    last_update_time: 0,
                    current_version: t,
                    system_type: Jv()
                },
                u = await Be("data/4066/forward", s);
            if (!u.success) return u;
            const d =
                ((r = (n = u.data) == null ? void 0 : n.resp) == null ?
                    void 0 :
                    r.data) ??
                ((o = u.data) == null ? void 0 : o.data) ??
                u.data,
                h = d == null ? void 0 : d.update_strategy,
                p = {
                    0: "ignore",
                    1: "recommend",
                    2: "force"
                } [h] ?? "ignore";
            return {
                success: !0,
                code: 0,
                data: {
                    latestVersion: (d == null ? void 0 : d.version_code) || "",
                    downloadUrl: (d == null ? void 0 : d.download_url) || "",
                    updateStrategy: p,
                    releaseNotes: (d == null ? void 0 : d.update_content) || "",
                },
            };
        } catch (s) {
            return {
                success: !1,
                code: void 0,
                message: String(s),
                data: null
            };
        }
    }
    static async getTodayRemainingTokens() {
        try {
            return await Be("data/4075/forward", {});
        } catch (t) {
            return {
                success: !1,
                code: void 0,
                message: String(t),
                data: null
            };
        }
    }
    static async downloadUpdate(t, n) {
        var r, o;
        try {
            const s =
                (r = window.electronAPI) == null ?
                void 0 :
                r.app.onDownloadProgress((h) => {
                    n == null || n(h);
                }),
                u = new URL(t).pathname.split("/").pop() || "update.dmg",
                d = await ((o = window.electronAPI) == null ?
                    void 0 :
                    o.app.downloadFile(t, u));
            return (
                s == null || s(),
                d ?
                {
                    success: !0,
                    code: 0,
                    data: {
                        filePath: d
                    }
                } :
                {
                    success: !1,
                    code: -1,
                    message: "下载失败：未获取到文件路径",
                    data: null,
                }
            );
        } catch (s) {
            return {
                success: !1,
                code: -1,
                message: String(s),
                data: null
            };
        }
    }
    static async getInspirationList(t = {
        page: 1,
        page_size: 100
    }) {
        var n, r, o;
        try {
            const s = await this.getGuid(),
                u = await this.getUserId(),
                d = await Be("data/4111/forward", {
                    guid: s,
                    user_id: u,
                    contact_type: "open_kfid",
                    ...t,
                });
            return {
                success: d.success,
                data: ((r = (n = d.data) == null ? void 0 : n.resp) == null ?
                        void 0 :
                        r.data) ??
                    ((o = d.data) == null ? void 0 : o.data) ??
                    d.data,
            };
        } catch (s) {
            return {
                success: !1,
                code: void 0,
                message: String(s),
                data: null
            };
        }
    }
    static async sessionLike(t) {
        try {
            return await Be("data/4093/forward", t);
        } catch (n) {
            return {
                success: !1,
                code: void 0,
                message: String(n),
                data: null
            };
        }
    }
    static async sessionComment(t) {
        try {
            return await Be("data/4094/forward", t);
        } catch (n) {
            return {
                success: !1,
                code: void 0,
                message: String(n),
                data: null
            };
        }
    }
    static async getSessionStatus(t) {
        try {
            return await Be("data/4095/forward", t);
        } catch (n) {
            return {
                success: !1,
                code: void 0,
                message: String(n),
                data: null
            };
        }
    }
    static async getFeatureConfig() {
        try {
            return await Be("data/4120/forward", {});
        } catch (t) {
            return {
                success: !1,
                code: void 0,
                message: String(t),
                data: null
            };
        }
    }
    static async getGuid() {
        try {
            const n = (await window.electronAPI.app.getMachineId()) || "123123";
            if (n) return n;
        } catch {}
        const t = await Xt("userInfo");
        return (t == null ? void 0 : t.guid) || "";
    }
    static async getUserId() {
        const t = await Xt("userInfo");
        return (t == null ? void 0 : t.userId) || 1;
    }
    static async getUserNetworkArea() {
        try {
            return await Kv("data/4076/forward", {}, {
                timeout: 500
            });
        } catch (t) {
            return {
                success: !1,
                code: void 0,
                message: String(t),
                data: null
            };
        }
    }
    static async createIOAState(t) {
        try {
            const n = await Vt.getGuid();
            return await Be("data/4072/forward", {
                guid: n,
                ...t,
                req_type: t.reqType,
            });
        } catch (n) {
            return {
                success: !1,
                code: void 0,
                message: String(n),
                data: null
            };
        }
    }
    static async checkIOAState(t) {
        try {
            const n = await Vt.getGuid();
            return await Be("data/4073/forward", {
                guid: n,
                ...t,
                req_type: t.reqType,
            });
        } catch (n) {
            return {
                success: !1,
                code: void 0,
                message: String(n),
                data: null
            };
        }
    }
}

function so(e) {
    return (
        (so =
            typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ?
            function(t) {
                return typeof t;
            } :
            function(t) {
                return t &&
                    typeof Symbol == "function" &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype ?
                    "symbol" :
                    typeof t;
            }),
        so(e)
    );
}

function Yv(e, t) {
    if (so(e) != "object" || !e) return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
        var r = n.call(e, t);
        if (so(r) != "object") return r;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (t === "string" ? String : Number)(e);
}

function Qv(e) {
    var t = Yv(e, "string");
    return so(t) == "symbol" ? t : t + "";
}

function ey(e, t, n) {
    return (
        (t = Qv(t)) in e ?
        Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
        }) :
        (e[t] = n),
        e
    );
}

function uu(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function(o) {
                return Object.getOwnPropertyDescriptor(e, o).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}

function Ve(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2 ?
            uu(Object(n), !0).forEach(function(r) {
                ey(e, r, n[r]);
            }) :
            Object.getOwnPropertyDescriptors ?
            Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) :
            uu(Object(n)).forEach(function(r) {
                Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
            });
    }
    return e;
}

function z() {
    return (
        (z = Object.assign ?
            Object.assign.bind() :
            function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
            }),
        z.apply(null, arguments)
    );
}
const ty = (e) => typeof e == "function",
    ny = Array.isArray,
    ry = (e) => typeof e == "string",
    oy = (e) => e !== null && typeof e == "object",
    iy = /^on[^a-z]/,
    ay = (e) => iy.test(e),
    Jl = (e) => {
        const t = Object.create(null);
        return (n) => t[n] || (t[n] = e(n));
    },
    sy = /-(\w)/g,
    Kl = Jl((e) => e.replace(sy, (t, n) => (n ? n.toUpperCase() : ""))),
    cy = /\B([A-Z])/g,
    uy = Jl((e) => e.replace(cy, "-$1").toLowerCase()),
    ly = Object.prototype.hasOwnProperty,
    lu = (e, t) => ly.call(e, t);

function dy(e, t, n, r) {
    const o = e[n];
    if (o != null) {
        const s = lu(o, "default");
        if (s && r === void 0) {
            const u = o.default;
            r = o.type !== Function && ty(u) ? u() : u;
        }
        o.type === Boolean && (lu(t, n) || s ? r === "" && (r = !0) : (r = !1));
    }
    return r;
}

function I2(e) {
    return typeof e == "number" ? `${e}px` : e;
}

function or(e) {
    let t = arguments.length > 2 ? arguments[2] : void 0;
    return typeof e == "function" ?
        e(arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}) :
        (e ?? t);
}

function fy(e) {
    let t;
    const n = new Promise((o) => {
            t = e(() => {
                o(!0);
            });
        }),
        r = () => {
            t == null || t();
        };
    return ((r.then = (o, s) => n.then(o, s)), (r.promise = n), r);
}

function St() {
    const e = [];
    for (let t = 0; t < arguments.length; t++) {
        const n = t < 0 || arguments.length <= t ? void 0 : arguments[t];
        if (n) {
            if (ry(n)) e.push(n);
            else if (ny(n))
                for (let r = 0; r < n.length; r++) {
                    const o = St(n[r]);
                    o && e.push(o);
                }
            else if (oy(n))
                for (const r in n) n[r] && e.push(r);
        }
    }
    return e.join(" ");
}
const py = (e) => e != null && e !== "",
    hy = (e) => {
        const t = Object.keys(e),
            n = {},
            r = {},
            o = {};
        for (let s = 0, u = t.length; s < u; s++) {
            const d = t[s];
            ay(d) ?
                ((n[d[2].toLowerCase() + d.slice(3)] = e[d]), (r[d] = e[d])) :
                (o[d] = e[d]);
        }
        return {
            onEvents: r,
            events: n,
            extraAttrs: o
        };
    },
    my = function() {
        let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "",
            t = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
        const n = {},
            r = /:(.+)/;
        return typeof e == "object" ?
            e :
            (e.split(/;(?![^(]*\))/g).forEach(function(o) {
                    if (o) {
                        const s = o.split(r);
                        if (s.length > 1) {
                            const u = t ? Kl(s[0].trim()) : s[0].trim();
                            n[u] = s[1].trim();
                        }
                    }
                }),
                n);
    },
    P2 = (e, t) => e[t] !== void 0,
    gy = Symbol("skipFlatten"),
    sr = function() {
        let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
            t = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1];
        const n = Array.isArray(e) ? e : [e],
            r = [];
        return (
            n.forEach((o) => {
                Array.isArray(o) ?
                    r.push(...sr(o, t)) :
                    o && o.type === Er ?
                    o.key === gy ?
                    r.push(o) :
                    r.push(...sr(o.children, t)) :
                    o && vo(o) ?
                    t && !Yl(o) ?
                    r.push(o) :
                    t || r.push(o) :
                    py(o) && r.push(o);
            }),
            r
        );
    },
    A2 = function(e) {
        let t =
            arguments.length > 1 && arguments[1] !== void 0 ?
            arguments[1] :
            "default",
            n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        if (vo(e))
            return e.type === Er ?
                t === "default" ?
                sr(e.children) :
                [] :
                e.children && e.children[t] ?
                sr(e.children[t](n)) :
                [];
        {
            const r = e.$slots[t] && e.$slots[t](n);
            return sr(r);
        }
    },
    R2 = (e) => {
        var t;
        let n =
            ((t = e == null ? void 0 : e.vnode) === null || t === void 0 ?
                void 0 :
                t.el) ||
            (e && (e.$el || e));
        for (; n && !n.tagName;) n = n.nextSibling;
        return n;
    },
    $2 = (e) => {
        const t = {};
        if (e.$ && e.$.vnode) {
            const n = e.$.vnode.props || {};
            Object.keys(e.$props).forEach((r) => {
                const o = e.$props[r],
                    s = uy(r);
                (o !== void 0 || s in n) && (t[r] = o);
            });
        } else if (vo(e) && typeof e.type == "object") {
            const n = e.props || {},
                r = {};
            Object.keys(n).forEach((s) => {
                r[Kl(s)] = n[s];
            });
            const o = e.type.props || {};
            Object.keys(o).forEach((s) => {
                const u = dy(o, r, s, r[s]);
                (u !== void 0 || s in r) && (t[s] = u);
            });
        }
        return t;
    },
    N2 = function(e) {
        let t,
            n =
            arguments.length > 1 && arguments[1] !== void 0 ?
            arguments[1] :
            "default",
            r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e,
            o = !(arguments.length > 3 && arguments[3] !== void 0) || arguments[3];
        if (e.$) {
            const s = e[n];
            if (s !== void 0) return typeof s == "function" && o ? s(r) : s;
            ((t = e.$slots[n]), (t = o && t ? t(r) : t));
        } else if (vo(e)) {
            const s = e.props && e.props[n];
            if (s !== void 0 && e.props !== null)
                return typeof s == "function" && o ? s(r) : s;
            e.type === Er ?
                (t = e.children) :
                e.children &&
                e.children[n] &&
                ((t = e.children[n]), (t = o && t ? t(r) : t));
        }
        return (
            Array.isArray(t) &&
            ((t = sr(t)),
                (t = t.length === 1 ? t[0] : t),
                (t = t.length === 0 ? void 0 : t)),
            t
        );
    };

function z2() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        t = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1],
        n = {};
    return (
        (n = e.$ ? z(z({}, n), e.$attrs) : z(z({}, n), e.props)),
        hy(n)[t ? "onEvents" : "events"]
    );
}

function L2(e, t) {
    let n = ((vo(e) ? e.props : e.$attrs) || {}).style || {};
    return (typeof n == "string" && (n = my(n, t)), n);
}

function j2(e) {
    return e.length === 1 && e[0].type === Er;
}

function Yl(e) {
    return (
        e &&
        (e.type === zp ||
            (e.type === Er && e.children.length === 0) ||
            (e.type === Lp && e.children.trim() === ""))
    );
}

function Ql() {
    const e = [];
    return (
        (arguments.length > 0 && arguments[0] !== void 0 ?
            arguments[0] :
            []
        ).forEach((t) => {
            Array.isArray(t) ?
                e.push(...t) :
                (t == null ? void 0 : t.type) === Er ?
                e.push(...Ql(t.children)) :
                e.push(t);
        }),
        e.filter((t) => !Yl(t))
    );
}

function M2(e) {
    return (
        Array.isArray(e) && e.length === 1 && (e = e[0]),
        e && e.__v_isVNode && typeof e.type != "symbol"
    );
}

function D2(e, t) {
    let n =
        arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "default";
    var r, o;
    return (r = t[n]) !== null && r !== void 0 ?
        r :
        (o = e[n]) === null || o === void 0 ?
        void 0 :
        o.call(e);
}
const vy = function() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
        return t;
    },
    F2 = function() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
        return t;
    },
    hs = (e) => {
        const t = e;
        return (
            (t.install = function(n) {
                n.component(t.displayName || t.name, e);
            }),
            e
        );
    };

function H2() {
    return {
        type: [Function, Array]
    };
}

function gt(e) {
    return {
        type: Object,
        default: e
    };
}

function pa(e) {
    return {
        type: Boolean,
        default: e
    };
}

function B2(e) {
    return {
        type: Function,
        default: e
    };
}

function Pa(e, t) {
    return {
        validator: () => !0,
        default: e
    };
}

function du(e) {
    return {
        type: Array,
        default: e
    };
}

function fu(e) {
    return {
        type: String,
        default: e
    };
}

function yy(e, t) {
    return e ? {
        type: e,
        default: t
    } : Pa(t);
}
const ms = "anticon",
    by = Symbol("GlobalFormContextKey"),
    wy = (e) => {
        En(by, e);
    },
    Sy = () => ({
        iconPrefixCls: String,
        getTargetContainer: {
            type: Function
        },
        getPopupContainer: {
            type: Function
        },
        prefixCls: String,
        getPrefixCls: {
            type: Function
        },
        renderEmpty: {
            type: Function
        },
        transformCellText: {
            type: Function
        },
        csp: gt(),
        input: gt(),
        autoInsertSpaceInButton: {
            type: Boolean,
            default: void 0
        },
        locale: gt(),
        pageHeader: gt(),
        componentSize: {
            type: String
        },
        componentDisabled: {
            type: Boolean,
            default: void 0
        },
        direction: {
            type: String,
            default: "ltr"
        },
        space: gt(),
        virtual: {
            type: Boolean,
            default: void 0
        },
        dropdownMatchSelectWidth: {
            type: [Number, Boolean],
            default: !0
        },
        form: gt(),
        pagination: gt(),
        theme: gt(),
        select: gt(),
        wave: gt(),
    }),
    gs = Symbol("configProvider"),
    ed = {
        getPrefixCls: (e, t) => t || (e ? `ant-${e}` : "ant"),
        iconPrefixCls: V(() => ms),
        getPopupContainer: V(() => () => document.body),
        direction: V(() => "ltr"),
    },
    td = () => Kt(gs, ed),
    _y = (e) => En(gs, e),
    nd = Symbol("DisabledContextKey"),
    rd = () => Kt(nd, Ke(void 0)),
    xy = (e) => {
        const t = rd();
        return (
            En(
                nd,
                V(() => {
                    var n;
                    return (n = e.value) !== null && n !== void 0 ? n : t.value;
                }),
            ),
            e
        );
    },
    Oy = {
        items_per_page: "/ page",
        jump_to: "Go to",
        jump_to_confirm: "confirm",
        page: "",
        prev_page: "Previous Page",
        next_page: "Next Page",
        prev_5: "Previous 5 Pages",
        next_5: "Next 5 Pages",
        prev_3: "Previous 3 Pages",
        next_3: "Next 3 Pages",
    },
    ky = {
        locale: "en_US",
        today: "Today",
        now: "Now",
        backToToday: "Back to today",
        ok: "Ok",
        clear: "Clear",
        month: "Month",
        year: "Year",
        timeSelect: "select time",
        dateSelect: "select date",
        weekSelect: "Choose a week",
        monthSelect: "Choose a month",
        yearSelect: "Choose a year",
        decadeSelect: "Choose a decade",
        yearFormat: "YYYY",
        dateFormat: "M/D/YYYY",
        dayFormat: "D",
        dateTimeFormat: "M/D/YYYY HH:mm:ss",
        monthBeforeYear: !0,
        previousMonth: "Previous month (PageUp)",
        nextMonth: "Next month (PageDown)",
        previousYear: "Last year (Control + left)",
        nextYear: "Next year (Control + right)",
        previousDecade: "Last decade",
        nextDecade: "Next decade",
        previousCentury: "Last century",
        nextCentury: "Next century",
    },
    od = {
        placeholder: "Select time",
        rangePlaceholder: ["Start time", "End time"],
    },
    pu = {
        lang: z({
                placeholder: "Select date",
                yearPlaceholder: "Select year",
                quarterPlaceholder: "Select quarter",
                monthPlaceholder: "Select month",
                weekPlaceholder: "Select week",
                rangePlaceholder: ["Start date", "End date"],
                rangeYearPlaceholder: ["Start year", "End year"],
                rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
                rangeMonthPlaceholder: ["Start month", "End month"],
                rangeWeekPlaceholder: ["Start week", "End week"],
            },
            ky,
        ),
        timePickerLocale: z({}, od),
    },
    ht = "${label} is not a valid ${type}",
    mr = {
        locale: "en",
        Pagination: Oy,
        DatePicker: pu,
        TimePicker: od,
        Calendar: pu,
        global: {
            placeholder: "Please select"
        },
        Table: {
            filterTitle: "Filter menu",
            filterConfirm: "OK",
            filterReset: "Reset",
            filterEmptyText: "No filters",
            filterCheckall: "Select all items",
            filterSearchPlaceholder: "Search in filters",
            emptyText: "No data",
            selectAll: "Select current page",
            selectInvert: "Invert current page",
            selectNone: "Clear all data",
            selectionAll: "Select all data",
            sortTitle: "Sort",
            expand: "Expand row",
            collapse: "Collapse row",
            triggerDesc: "Click to sort descending",
            triggerAsc: "Click to sort ascending",
            cancelSort: "Click to cancel sorting",
        },
        Tour: {
            Next: "Next",
            Previous: "Previous",
            Finish: "Finish"
        },
        Modal: {
            okText: "OK",
            cancelText: "Cancel",
            justOkText: "OK"
        },
        Popconfirm: {
            okText: "OK",
            cancelText: "Cancel"
        },
        Transfer: {
            titles: ["", ""],
            searchPlaceholder: "Search here",
            itemUnit: "item",
            itemsUnit: "items",
            remove: "Remove",
            selectCurrent: "Select current page",
            removeCurrent: "Remove current page",
            selectAll: "Select all data",
            removeAll: "Remove all data",
            selectInvert: "Invert current page",
        },
        Upload: {
            uploading: "Uploading...",
            removeFile: "Remove file",
            uploadError: "Upload error",
            previewFile: "Preview file",
            downloadFile: "Download file",
        },
        Empty: {
            description: "No data"
        },
        Icon: {
            icon: "icon"
        },
        Text: {
            edit: "Edit",
            copy: "Copy",
            copied: "Copied",
            expand: "Expand"
        },
        PageHeader: {
            back: "Back"
        },
        Form: {
            optional: "(optional)",
            defaultValidateMessages: {
                default: "Field validation error for ${label}",
                required: "Please enter ${label}",
                enum: "${label} must be one of [${enum}]",
                whitespace: "${label} cannot be a blank character",
                date: {
                    format: "${label} date format is invalid",
                    parse: "${label} cannot be converted to a date",
                    invalid: "${label} is an invalid date",
                },
                types: {
                    string: ht,
                    method: ht,
                    array: ht,
                    object: ht,
                    number: ht,
                    date: ht,
                    boolean: ht,
                    integer: ht,
                    float: ht,
                    regexp: ht,
                    email: ht,
                    url: ht,
                    hex: ht,
                },
                string: {
                    len: "${label} must be ${len} characters",
                    min: "${label} must be at least ${min} characters",
                    max: "${label} must be up to ${max} characters",
                    range: "${label} must be between ${min}-${max} characters",
                },
                number: {
                    len: "${label} must be equal to ${len}",
                    min: "${label} must be minimum ${min}",
                    max: "${label} must be maximum ${max}",
                    range: "${label} must be between ${min}-${max}",
                },
                array: {
                    len: "Must be ${len} ${label}",
                    min: "At least ${min} ${label}",
                    max: "At most ${max} ${label}",
                    range: "The amount of ${label} must be between ${min}-${max}",
                },
                pattern: {
                    mismatch: "${label} does not match the pattern ${pattern}"
                },
            },
        },
        Image: {
            preview: "Preview"
        },
        QRCode: {
            expired: "QR code expired",
            refresh: "Refresh",
            scanned: "Scanned",
        },
    },
    id = Ge({
        compatConfig: {
            MODE: 3
        },
        name: "LocaleReceiver",
        props: {
            componentName: String,
            defaultLocale: {
                type: [Object, Function]
            },
            children: {
                type: Function
            },
        },
        setup(e, t) {
            let {
                slots: n
            } = t;
            const r = Kt("localeData", {}),
                o = V(() => {
                    const {
                        componentName: u = "global",
                        defaultLocale: d
                    } = e,
                    h = d || mr[u || "global"], {
                            antLocale: p
                        } = r,
                        g = u && p ? p[u] : {};
                    return z(z({}, typeof h == "function" ? h() : h), g || {});
                }),
                s = V(() => {
                    const {
                        antLocale: u
                    } = r,
                    d = u && u.locale;
                    return u && u.exist && !d ? mr.locale : d;
                });
            return () => {
                const u = e.children || n.default,
                    {
                        antLocale: d
                    } = r;
                return u == null ? void 0 : u(o.value, s.value, d);
            };
        },
    });

function U2(e, t, n) {
    const r = Kt("localeData", {});
    return [
        V(() => {
            const {
                antLocale: s
            } = r,
            u = dr(t) || mr[e || "global"],
                d = e && s ? s[e] : {};
            return z(
                z(z({}, typeof u == "function" ? u() : u), d || {}),
                dr(n) || {},
            );
        }),
    ];
}

function vs(e) {
    for (var t, n = 0, r = 0, o = e.length; o >= 4; ++r, o -= 4)
        ((t =
                1540483477 *
                (65535 &
                    (t =
                        (255 & e.charCodeAt(r)) |
                        ((255 & e.charCodeAt(++r)) << 8) |
                        ((255 & e.charCodeAt(++r)) << 16) |
                        ((255 & e.charCodeAt(++r)) << 24))) +
                ((59797 * (t >>> 16)) << 16)),
            (n =
                (1540483477 * (65535 & (t ^= t >>> 24)) +
                    ((59797 * (t >>> 16)) << 16)) ^
                (1540483477 * (65535 & n) + ((59797 * (n >>> 16)) << 16))));
    switch (o) {
        case 3:
            n ^= (255 & e.charCodeAt(r + 2)) << 16;
        case 2:
            n ^= (255 & e.charCodeAt(r + 1)) << 8;
        case 1:
            n =
                1540483477 * (65535 & (n ^= 255 & e.charCodeAt(r))) +
                ((59797 * (n >>> 16)) << 16);
    }
    return (
        ((n =
                1540483477 * (65535 & (n ^= n >>> 13)) + ((59797 * (n >>> 16)) << 16)) ^
            (n >>> 15)) >>>
        0
    ).toString(36);
}
const hu = "%";
class Ey {
    constructor(t) {
        ((this.cache = new Map()), (this.instanceId = t));
    }
    get(t) {
        return this.cache.get(Array.isArray(t) ? t.join(hu) : t) || null;
    }
    update(t, n) {
        const r = Array.isArray(t) ? t.join(hu) : t,
            o = n(this.cache.get(r));
        o === null ? this.cache.delete(r) : this.cache.set(r, o);
    }
}
const ad = "data-token-hash",
    Mn = "data-css-hash",
    ir = "__cssinjs_instance__";

function co() {
    const e = Math.random().toString(12).slice(2);
    if (typeof document < "u" && document.head && document.body) {
        const t = document.body.querySelectorAll(`style[${Mn}]`) || [],
            {
                firstChild: n
            } = document.head;
        Array.from(t).forEach((o) => {
            ((o[ir] = o[ir] || e), o[ir] === e && document.head.insertBefore(o, n));
        });
        const r = {};
        Array.from(document.querySelectorAll(`style[${Mn}]`)).forEach((o) => {
            var s;
            const u = o.getAttribute(Mn);
            r[u] ?
                o[ir] === e &&
                ((s = o.parentNode) === null || s === void 0 || s.removeChild(o)) :
                (r[u] = !0);
        });
    }
    return new Ey(e);
}
const sd = Symbol("StyleContextKey"),
    Cy = () => {
        var e, t, n;
        const r = dl();
        let o;
        if (r && r.appContext) {
            const s =
                (n =
                    (t =
                        (e = r.appContext) === null || e === void 0 ? void 0 : e.config) ===
                    null || t === void 0 ?
                    void 0 :
                    t.globalProperties) === null || n === void 0 ?
                void 0 :
                n.__ANTDV_CSSINJS_CACHE__;
            s
                ?
                (o = s) :
                ((o = co()),
                    r.appContext.config.globalProperties &&
                    (r.appContext.config.globalProperties.__ANTDV_CSSINJS_CACHE__ = o));
        } else o = co();
        return o;
    },
    cd = {
        cache: co(),
        defaultCache: !0,
        hashPriority: "low"
    },
    _i = () => {
        const e = Cy();
        return Kt(sd, jt(z(z({}, cd), {
            cache: e
        })));
    },
    Ty = (e) => {
        const t = _i(),
            n = jt(z(z({}, cd), {
                cache: co()
            }));
        return (
            Yt(
                [() => dr(e), t],
                () => {
                    const r = z({}, t.value),
                        o = dr(e);
                    Object.keys(o).forEach((u) => {
                        const d = o[u];
                        o[u] !== void 0 && (r[u] = d);
                    });
                    const {
                        cache: s
                    } = o;
                    ((r.cache = r.cache || co()),
                        (r.defaultCache = !s && t.value.defaultCache),
                        (n.value = r));
                }, {
                    immediate: !0
                },
            ),
            En(sd, n),
            n
        );
    },
    Iy = () => ({
        autoClear: pa(),
        mock: fu(),
        cache: gt(),
        defaultCache: pa(),
        hashPriority: fu(),
        container: yy(),
        ssrInline: pa(),
        transformers: du(),
        linters: du(),
    });

function ud(e, t, n, r) {
    const o = _i(),
        s = jt(""),
        u = jt();
    vi(() => {
        s.value = [e, ...t.value].join("%");
    });
    const d = (h) => {
        o.value.cache.update(h, (p) => {
            const [g = 0, v] = p || [];
            return g - 1 == 0 ? (r == null || r(v, !1), null) : [g - 1, v];
        });
    };
    return (
        Yt(
            s,
            (h, p) => {
                (p && d(p),
                    o.value.cache.update(h, (g) => {
                        const [v = 0, w] = g || [];
                        return [v + 1, w || n()];
                    }),
                    (u.value = o.value.cache.get(s.value)[1]));
            }, {
                immediate: !0
            },
        ),
        ll(() => {
            d(s.value);
        }),
        u
    );
}

function Tr() {
    return !(
        typeof window > "u" ||
        !window.document ||
        !window.document.createElement
    );
}

function Py(e, t) {
    return !!e && !!e.contains && e.contains(t);
}
hs(
    Ge({
        name: "AStyleProvider",
        inheritAttrs: !1,
        props: Iy(),
        setup(e, t) {
            let {
                slots: n
            } = t;
            return (
                Ty(e),
                () => {
                    var r;
                    return (r = n.default) === null || r === void 0 ? void 0 : r.call(n);
                }
            );
        },
    }),
);
const mu = "data-vc-order",
    Ay = "vc-util-key",
    Aa = new Map();

function ld() {
    let {
        mark: e
    } =
    arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return e ? (e.startsWith("data-") ? e : `data-${e}`) : Ay;
}

function xi(e) {
    return e.attachTo ?
        e.attachTo :
        document.querySelector("head") || document.body;
}

function Ry(e) {
    return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}

function dd(e) {
    return Array.from((Aa.get(e) || e).children).filter(
        (t) => t.tagName === "STYLE",
    );
}

function fd(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!Tr()) return null;
    const {
        csp: n,
        prepend: r
    } = t,
    o = document.createElement("style");
    (o.setAttribute(mu, Ry(r)),
        n != null && n.nonce && (o.nonce = n == null ? void 0 : n.nonce),
        (o.innerHTML = e));
    const s = xi(t),
        {
            firstChild: u
        } = s;
    if (r) {
        if (r === "queue") {
            const d = dd(s).filter((h) => ["prepend", "prependQueue"].includes(h.getAttribute(mu)), );
            if (d.length) return (s.insertBefore(o, d[d.length - 1].nextSibling), o);
        }
        s.insertBefore(o, u);
    } else s.appendChild(o);
    return o;
}

function pd(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return dd(xi(t)).find((n) => n.getAttribute(ld(t)) === e);
}

function hd(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const n = pd(e, t);
    n && xi(t).removeChild(n);
}

function $y(e, t) {
    const n = Aa.get(e);
    if (!n || !Py(document, n)) {
        const r = fd("", t),
            {
                parentNode: o
            } = r;
        (Aa.set(e, o), e.removeChild(r));
    }
}

function di(e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var r, o, s;
    $y(xi(n), n);
    const u = pd(t, n);
    if (u)
        return (
            !((r = n.csp) === null || r === void 0) &&
            r.nonce &&
            u.nonce !== ((o = n.csp) === null || o === void 0 ? void 0 : o.nonce) &&
            (u.nonce = (s = n.csp) === null || s === void 0 ? void 0 : s.nonce),
            u.innerHTML !== e && (u.innerHTML = e),
            u
        );
    const d = fd(e, n);
    return (d.setAttribute(ld(n), t), d);
}

function Ny(e, t) {
    if (e.length !== t.length) return !1;
    for (let n = 0; n < e.length; n++)
        if (e[n] !== t[n]) return !1;
    return !0;
}
class gr {
    constructor() {
        ((this.cache = new Map()), (this.keys = []), (this.cacheCallTimes = 0));
    }
    size() {
        return this.keys.length;
    }
    internalGet(t) {
        let n = arguments.length > 1 && arguments[1] !== void 0 && arguments[1],
            r = {
                map: this.cache
            };
        return (
            t.forEach((o) => {
                var s;
                r = r ?
                    (s = r == null ? void 0 : r.map) === null || s === void 0 ?
                    void 0 :
                    s.get(o) :
                    void 0;
            }),
            r != null && r.value && n && (r.value[1] = this.cacheCallTimes++),
            r == null ? void 0 : r.value
        );
    }
    get(t) {
        var n;
        return (n = this.internalGet(t, !0)) === null || n === void 0 ?
            void 0 :
            n[0];
    }
    has(t) {
        return !!this.internalGet(t);
    }
    set(t, n) {
        if (!this.has(t)) {
            if (this.size() + 1 > gr.MAX_CACHE_SIZE + gr.MAX_CACHE_OFFSET) {
                const [o] = this.keys.reduce(
                    (s, u) => {
                        const [, d] = s;
                        return this.internalGet(u)[1] < d ? [u, this.internalGet(u)[1]] : s;
                    },
                    [this.keys[0], this.cacheCallTimes],
                );
                this.delete(o);
            }
            this.keys.push(t);
        }
        let r = this.cache;
        t.forEach((o, s) => {
            if (s === t.length - 1) r.set(o, {
                value: [n, this.cacheCallTimes++]
            });
            else {
                const u = r.get(o);
                (u ? u.map || (u.map = new Map()) : r.set(o, {
                        map: new Map()
                    }),
                    (r = r.get(o).map));
            }
        });
    }
    deleteByPath(t, n) {
        var r;
        const o = t.get(n[0]);
        if (n.length === 1)
            return (
                o.map ? t.set(n[0], {
                    map: o.map
                }) : t.delete(n[0]),
                (r = o.value) === null || r === void 0 ? void 0 : r[0]
            );
        const s = this.deleteByPath(o.map, n.slice(1));
        return ((o.map && o.map.size !== 0) || o.value || t.delete(n[0]), s);
    }
    delete(t) {
        if (this.has(t))
            return (
                (this.keys = this.keys.filter((n) => !Ny(n, t))),
                this.deleteByPath(this.cache, t)
            );
    }
}

function zy() {}
((gr.MAX_CACHE_SIZE = 20), (gr.MAX_CACHE_OFFSET = 5));
let md = zy,
    gu = 0;
class gd {
    constructor(t) {
        ((this.derivatives = Array.isArray(t) ? t : [t]),
            (this.id = gu),
            t.length === 0 && md(t.length > 0),
            (gu += 1));
    }
    getDerivativeToken(t) {
        return this.derivatives.reduce((n, r) => r(t, n), void 0);
    }
}
const ha = new gr();

function vd(e) {
    const t = Array.isArray(e) ? e : [e];
    return (ha.has(t) || ha.set(t, new gd(t)), ha.get(t));
}
const vu = new WeakMap();

function fi(e) {
    let t = vu.get(e) || "";
    return (
        t ||
        (Object.keys(e).forEach((n) => {
                const r = e[n];
                ((t += n),
                    (t +=
                        r instanceof gd ? r.id : r && typeof r == "object" ? fi(r) : r));
            }),
            vu.set(e, t)),
        t
    );
}

function Ly(e, t) {
    return vs(`${t}_${fi(e)}`);
}
const eo = `random-${Date.now()}-${Math.random()}`.replace(/\./g, ""),
    yd = "_bAmBoO_";

function jy(e, t, n) {
    var r, o;
    if (Tr()) {
        di(e, eo);
        const s = document.createElement("div");
        ((s.style.position = "fixed"),
            (s.style.left = "0"),
            (s.style.top = "0"),
            t == null || t(s),
            document.body.appendChild(s));
        const u = n ?
            n(s) :
            (r = getComputedStyle(s).content) === null || r === void 0 ?
            void 0 :
            r.includes(yd);
        return (
            (o = s.parentNode) === null || o === void 0 || o.removeChild(s),
            hd(eo),
            u
        );
    }
    return !1;
}
let ma;

function My() {
    return (
        ma === void 0 &&
        (ma = jy(
            `@layer ${eo} { .${eo} { content: "${yd}"!important; } }`,
            (e) => {
                e.className = eo;
            },
        )),
        ma
    );
}
const yu = {},
    Dy = "css",
    zn = new Map();

function Fy(e) {
    zn.set(e, (zn.get(e) || 0) + 1);
}

function Hy(e, t) {
    typeof document < "u" &&
        document.querySelectorAll(`style[${ad}="${e}"]`).forEach((n) => {
            var r;
            n[ir] === t &&
                ((r = n.parentNode) === null || r === void 0 || r.removeChild(n));
        });
}

function By(e, t) {
    zn.set(e, (zn.get(e) || 0) - 1);
    const n = Array.from(zn.keys()),
        r = n.filter((o) => (zn.get(o) || 0) <= 0);
    n.length - r.length > 0 &&
        r.forEach((o) => {
            (Hy(o, t), zn.delete(o));
        });
}
const Uy = (e, t, n, r) => {
    let o = z(z({}, n.getDerivativeToken(e)), t);
    return (r && (o = r(o)), o);
};

function qy(e, t) {
    let n =
        arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ke({});
    const r = _i(),
        o = V(() => z({}, ...t.value)),
        s = V(() => fi(o.value)),
        u = V(() => fi(n.value.override || yu));
    return ud(
        "token",
        V(() => [n.value.salt || "", e.value.id, s.value, u.value]),
        () => {
            const {
                salt: h = "",
                override: p = yu,
                formatToken: g,
                getComputedToken: v,
            } = n.value,
                w = v ? v(o.value, p, e.value) : Uy(o.value, p, e.value, g),
                C = Ly(w, h);
            ((w._tokenKey = C), Fy(C));
            const k = `${Dy}-${vs(C)}`;
            return ((w._hashId = k), [w, k]);
        },
        (h) => {
            var p;
            By(
                h[0]._tokenKey,
                (p = r.value) === null || p === void 0 ? void 0 : p.cache.instanceId,
            );
        },
    );
}
var Wy = {
        animationIterationCount: 1,
        aspectRatio: 1,
        borderImageOutset: 1,
        borderImageSlice: 1,
        borderImageWidth: 1,
        boxFlex: 1,
        boxFlexGroup: 1,
        boxOrdinalGroup: 1,
        columnCount: 1,
        columns: 1,
        flex: 1,
        flexGrow: 1,
        flexPositive: 1,
        flexShrink: 1,
        flexNegative: 1,
        flexOrder: 1,
        gridRow: 1,
        gridRowEnd: 1,
        gridRowSpan: 1,
        gridRowStart: 1,
        gridColumn: 1,
        gridColumnEnd: 1,
        gridColumnSpan: 1,
        gridColumnStart: 1,
        msGridRow: 1,
        msGridRowSpan: 1,
        msGridColumn: 1,
        msGridColumnSpan: 1,
        fontWeight: 1,
        lineHeight: 1,
        opacity: 1,
        order: 1,
        orphans: 1,
        tabSize: 1,
        widows: 1,
        zIndex: 1,
        zoom: 1,
        WebkitLineClamp: 1,
        fillOpacity: 1,
        floodOpacity: 1,
        stopOpacity: 1,
        strokeDasharray: 1,
        strokeDashoffset: 1,
        strokeMiterlimit: 1,
        strokeOpacity: 1,
        strokeWidth: 1,
    },
    bd = "comm",
    wd = "rule",
    Sd = "decl",
    Gy = "@import",
    Zy = "@namespace",
    Xy = "@keyframes",
    Vy = "@layer",
    _d = Math.abs,
    ys = String.fromCharCode;

function xd(e) {
    return e.trim();
}

function Yo(e, t, n) {
    return e.replace(t, n);
}

function Jy(e, t, n) {
    return e.indexOf(t, n);
}

function cr(e, t) {
    return 0 | e.charCodeAt(t);
}

function vr(e, t, n) {
    return e.slice(t, n);
}

function Zt(e) {
    return e.length;
}

function Ky(e) {
    return e.length;
}

function Ho(e, t) {
    return (t.push(e), e);
}
var Oi = 1,
    yr = 1,
    Od = 0,
    Ct = 0,
    Ue = 0,
    Ir = "";

function bs(e, t, n, r, o, s, u, d) {
    return {
        value: e,
        root: t,
        parent: n,
        type: r,
        props: o,
        children: s,
        line: Oi,
        column: yr,
        length: u,
        return: "",
        siblings: d,
    };
}

function Yy() {
    return Ue;
}

function Qy() {
    return (
        (Ue = Ct > 0 ? cr(Ir, --Ct) : 0),
        yr--,
        Ue === 10 && ((yr = 1), Oi--),
        Ue
    );
}

function Mt() {
    return (
        (Ue = Ct < Od ? cr(Ir, Ct++) : 0),
        yr++,
        Ue === 10 && ((yr = 1), Oi++),
        Ue
    );
}

function bn() {
    return cr(Ir, Ct);
}

function Qo() {
    return Ct;
}

function ki(e, t) {
    return vr(Ir, e, t);
}

function uo(e) {
    switch (e) {
        case 0:
        case 9:
        case 10:
        case 13:
        case 32:
            return 5;
        case 33:
        case 43:
        case 44:
        case 47:
        case 62:
        case 64:
        case 126:
        case 59:
        case 123:
        case 125:
            return 4;
        case 58:
            return 3;
        case 34:
        case 39:
        case 40:
        case 91:
            return 2;
        case 41:
        case 93:
            return 1;
    }
    return 0;
}

function eb(e) {
    return ((Oi = yr = 1), (Od = Zt((Ir = e))), (Ct = 0), []);
}

function tb(e) {
    return ((Ir = ""), e);
}

function ga(e) {
    return xd(ki(Ct - 1, Ra(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}

function nb(e) {
    for (;
        (Ue = bn()) && Ue < 33;) Mt();
    return uo(e) > 2 || uo(Ue) > 3 ? "" : " ";
}

function rb(e, t) {
    for (;
        --t &&
        Mt() &&
        !(Ue < 48 || Ue > 102 || (Ue > 57 && Ue < 65) || (Ue > 70 && Ue < 97));
    );
    return ki(e, Qo() + (t < 6 && bn() == 32 && Mt() == 32));
}

function Ra(e) {
    for (; Mt();)
        switch (Ue) {
            case e:
                return Ct;
            case 34:
            case 39:
                e !== 34 && e !== 39 && Ra(Ue);
                break;
            case 40:
                e === 41 && Ra(e);
                break;
            case 92:
                Mt();
        }
    return Ct;
}

function ob(e, t) {
    for (; Mt() && e + Ue !== 57 && (e + Ue !== 84 || bn() !== 47););
    return "/*" + ki(t, Ct - 1) + "*" + ys(e === 47 ? e : Mt());
}

function ib(e) {
    for (; !uo(bn());) Mt();
    return ki(e, Ct);
}

function ab(e) {
    return tb(ei("", null, null, null, [""], (e = eb(e)), 0, [0], e));
}

function ei(e, t, n, r, o, s, u, d, h) {
    for (
        var p = 0,
            g = 0,
            v = u,
            w = 0,
            C = 0,
            k = 0,
            P = 1,
            B = 1,
            U = 1,
            R = 0,
            K = "",
            Y = o,
            W = s,
            I = r,
            O = K; B;
    )
        switch (((k = R), (R = Mt()))) {
            case 40:
                if (k != 108 && cr(O, v - 1) == 58) {
                    Jy((O += Yo(ga(R), "&", "&\f")), "&\f", _d(p ? d[p - 1] : 0)) != -1 &&
                        (U = -1);
                    break;
                }
            case 34:
            case 39:
            case 91:
                O += ga(R);
                break;
            case 9:
            case 10:
            case 13:
            case 32:
                O += nb(k);
                break;
            case 92:
                O += rb(Qo() - 1, 7);
                continue;
            case 47:
                switch (bn()) {
                    case 42:
                    case 47:
                        (Ho(sb(ob(Mt(), Qo()), t, n, h), h),
                            (uo(k || 1) != 5 && uo(bn() || 1) != 5) ||
                            !Zt(O) ||
                            vr(O, -1, void 0) === " " ||
                            (O += " "));
                        break;
                    default:
                        O += "/";
                }
                break;
            case 123 * P:
                d[p++] = Zt(O) * U;
            case 125 * P:
            case 59:
            case 0:
                switch (R) {
                    case 0:
                    case 125:
                        B = 0;
                    case 59 + g:
                        (U == -1 && (O = Yo(O, /\f/g, "")),
                            C > 0 &&
                            (Zt(O) - v || (P === 0 && k === 47)) &&
                            Ho(
                                C > 32 ?
                                wu(O + ";", r, n, v - 1, h) :
                                wu(Yo(O, " ", "") + ";", r, n, v - 2, h),
                                h,
                            ));
                        break;
                    case 59:
                        O += ";";
                    default:
                        if (
                            (Ho(
                                    (I = bu(O, t, n, p, g, o, d, K, (Y = []), (W = []), v, s)),
                                    s,
                                ),
                                R === 123)
                        )
                            if (g === 0) ei(O, t, I, I, Y, s, v, d, W);
                            else {
                                switch (w) {
                                    case 99:
                                        if (cr(O, 3) === 110) break;
                                    case 108:
                                        if (cr(O, 2) === 97) break;
                                    default:
                                        g = 0;
                                    case 100:
                                    case 109:
                                    case 115:
                                }
                                g
                                    ?
                                    ei(
                                        e,
                                        I,
                                        I,
                                        r && Ho(bu(e, I, I, 0, 0, o, d, K, o, (Y = []), v, W), W),
                                        o,
                                        W,
                                        v,
                                        d,
                                        r ? Y : W,
                                    ) :
                                    ei(O, I, I, I, [""], W, 0, d, W);
                            }
                }
                ((p = g = C = 0), (P = U = 1), (K = O = ""), (v = u));
                break;
            case 58:
                ((v = 1 + Zt(O)), (C = k));
            default:
                if (P < 1) {
                    if (R == 123) --P;
                    else if (R == 125 && P++ == 0 && Qy() == 125) continue;
                }
                switch (((O += ys(R)), R * P)) {
                    case 38:
                        U = g > 0 ? 1 : ((O += "\f"), -1);
                        break;
                    case 44:
                        ((d[p++] = (Zt(O) - 1) * U), (U = 1));
                        break;
                    case 64:
                        (bn() === 45 && (O += ga(Mt())),
                            (w = bn()),
                            (g = v = Zt((K = O += ib(Qo())))),
                            R++);
                        break;
                    case 45:
                        k === 45 && Zt(O) == 2 && (P = 0);
                }
        }
    return s;
}

function bu(e, t, n, r, o, s, u, d, h, p, g, v) {
    for (
        var w = o - 1, C = o === 0 ? s : [""], k = Ky(C), P = 0, B = 0, U = 0; P < r;
        ++P
    )
        for (var R = 0, K = vr(e, w + 1, (w = _d((B = u[P])))), Y = e; R < k; ++R)
            (Y = xd(B > 0 ? C[R] + " " + K : Yo(K, /&\f/g, C[R]))) && (h[U++] = Y);
    return bs(e, t, n, o === 0 ? wd : d, h, p, g, v);
}

function sb(e, t, n, r) {
    return bs(e, t, n, bd, ys(Yy()), vr(e, 2, -2), 0, r);
}

function wu(e, t, n, r, o) {
    return bs(e, t, n, Sd, vr(e, 0, r), vr(e, r + 1, -1), r, o);
}

function $a(e, t) {
    for (var n = "", r = 0; r < e.length; r++) n += t(e[r], r, e, t) || "";
    return n;
}

function cb(e, t, n, r) {
    switch (e.type) {
        case Vy:
            if (e.children.length) break;
        case Gy:
        case Zy:
        case Sd:
            return (e.return = e.return || e.value);
        case bd:
            return "";
        case Xy:
            return (e.return = e.value + "{" + $a(e.children, r) + "}");
        case wd:
            if (!Zt((e.value = e.props.join(",")))) return "";
    }
    return Zt((n = $a(e.children, r))) ?
        (e.return = e.value + "{" + n + "}") :
        "";
}
const Su = "data-ant-cssinjs-cache-path",
    ub = "_FILE_STYLE__";
let Dn,
    kd = !0;

function lb() {
    var e;
    if (!Dn && ((Dn = {}), Tr())) {
        const t = document.createElement("div");
        ((t.className = Su),
            (t.style.position = "fixed"),
            (t.style.visibility = "hidden"),
            (t.style.top = "-9999px"),
            document.body.appendChild(t));
        let n = getComputedStyle(t).content || "";
        ((n = n.replace(/^"/, "").replace(/"$/, "")),
            n.split(";").forEach((o) => {
                const [s, u] = o.split(":");
                Dn[s] = u;
            }));
        const r = document.querySelector(`style[${Su}]`);
        (r &&
            ((kd = !1),
                (e = r.parentNode) === null || e === void 0 || e.removeChild(r)),
            document.body.removeChild(t));
    }
}

function db(e) {
    return (lb(), !!Dn[e]);
}

function fb(e) {
    const t = Dn[e];
    let n = null;
    if (t && Tr())
        if (kd) n = ub;
        else {
            const r = document.querySelector(`style[${Mn}="${Dn[e]}"]`);
            r ? (n = r.innerHTML) : delete Dn[e];
        }
    return [n, t];
}
const _u = Tr(),
    pb = "_skip_check_",
    Ed = "_multi_value_";

function xu(e) {
    return $a(ab(e), cb).replace(/\{%%%\:[^;];}/g, ";");
}

function hb(e) {
    return typeof e == "object" && e && (pb in e || Ed in e);
}

function mb(e, t, n) {
    if (!t) return e;
    const r = `.${t}`,
        o = n === "low" ? `:where(${r})` : r;
    return e
        .split(",")
        .map((u) => {
            var d;
            const h = u.trim().split(/\s+/);
            let p = h[0] || "";
            const g =
                ((d = p.match(/^\w+/)) === null || d === void 0 ? void 0 : d[0]) || "";
            return (
                (p = `${g}${o}${p.slice(g.length)}`),
                [p, ...h.slice(1)].join(" ")
            );
        })
        .join(",");
}
const Ou = new Set(),
    Na = function(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
            {
                root: n,
                injectHash: r,
                parentSelectors: o,
            } = arguments.length > 2 && arguments[2] !== void 0 ?
            arguments[2] :
            {
                root: !0,
                parentSelectors: []
            };
        const {
            hashId: s,
            layer: u,
            path: d,
            hashPriority: h,
            transformers: p = [],
            linters: g = [],
        } = t;
        let v = "",
            w = {};

        function C(P) {
            const B = P.getName(s);
            if (!w[B]) {
                const [U] = Na(P.style, t, {
                    root: !1,
                    parentSelectors: o
                });
                w[B] = `@keyframes ${P.getName(s)}${U}`;
            }
        }
        if (
            ((function P(B) {
                    let U =
                        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
                    return (
                        B.forEach((R) => {
                            Array.isArray(R) ? P(R, U) : R && U.push(R);
                        }),
                        U
                    );
                })(Array.isArray(e) ? e : [e]).forEach((P) => {
                    const B = typeof P != "string" || n ? P : {};
                    if (typeof B == "string")
                        v += `${B}
`;
                    else if (B._keyframe) C(B);
                    else {
                        const U = p.reduce((R, K) => {
                            var Y;
                            return (
                                ((Y = K == null ? void 0 : K.visit) === null || Y === void 0 ?
                                    void 0 :
                                    Y.call(K, R)) || R
                            );
                        }, B);
                        Object.keys(U).forEach((R) => {
                            var K;
                            const Y = U[R];
                            if (
                                typeof Y != "object" ||
                                !Y ||
                                (R === "animationName" && Y._keyframe) ||
                                hb(Y)
                            ) {
                                let W = function(O, ee) {
                                    const me = O.replace(/[A-Z]/g, (Ie) => `-${Ie.toLowerCase()}`);
                                    let _e = ee;
                                    (Wy[O] || typeof _e != "number" || _e === 0 || (_e = `${_e}px`),
                                        O === "animationName" &&
                                        ee != null &&
                                        ee._keyframe &&
                                        (C(ee), (_e = ee.getName(s))),
                                        (v += `${me}:${_e};`));
                                };
                                const I =
                                    (K = Y == null ? void 0 : Y.value) !== null && K !== void 0 ?
                                    K :
                                    Y;
                                typeof Y == "object" && Y != null && Y[Ed] && Array.isArray(I) ?
                                    I.forEach((O) => {
                                        W(R, O);
                                    }) :
                                    W(R, I);
                            } else {
                                let W = !1,
                                    I = R.trim(),
                                    O = !1;
                                (n || r) && s
                                    ?
                                    I.startsWith("@") ?
                                    (W = !0) :
                                    (I = mb(R, s, h)) :
                                    !n || s || (I !== "&" && I !== "") || ((I = ""), (O = !0));
                                const [ee, me] = Na(Y, t, {
                                    root: O,
                                    injectHash: W,
                                    parentSelectors: [...o, I],
                                });
                                ((w = z(z({}, w), me)), (v += `${I}${ee}`));
                            }
                        });
                    }
                }),
                n)
        ) {
            if (u && My()) {
                const P = u.split(",");
                ((v = `@layer ${P[P.length - 1].trim()} {${v}}`),
                    P.length > 1 && (v = `@layer ${u}{%%%:%}${v}`));
            }
        } else v = `{${v}}`;
        return [v, w];
    };

function gb(e, t) {
    return vs(`${e.join("%")}${t}`);
}

function za(e, t) {
    const n = _i(),
        r = V(() => e.value.token._tokenKey),
        o = V(() => [r.value, ...e.value.path]);
    let s = _u;
    return (
        ud(
            "style",
            o,
            () => {
                const {
                    path: u,
                    hashId: d,
                    layer: h,
                    nonce: p,
                    clientOnly: g,
                    order: v = 0,
                } = e.value,
                    w = o.value.join("|");
                if (db(w)) {
                    const [O, ee] = fb(w);
                    if (O) return [O, r.value, ee, {}, g, v];
                }
                const C = t(),
                    {
                        hashPriority: k,
                        container: P,
                        transformers: B,
                        linters: U,
                        cache: R,
                    } = n.value,
                    [K, Y] = Na(C, {
                        hashId: d,
                        hashPriority: k,
                        layer: h,
                        path: u.join("-"),
                        transformers: B,
                        linters: U,
                    }),
                    W = xu(K),
                    I = gb(o.value, W);
                if (s) {
                    const O = {
                            mark: Mn,
                            prepend: "queue",
                            attachTo: P,
                            priority: v
                        },
                        ee = typeof p == "function" ? p() : p;
                    ee && (O.csp = {
                        nonce: ee
                    });
                    const me = di(W, I, O);
                    ((me[ir] = R.instanceId),
                        me.setAttribute(ad, r.value),
                        Object.keys(Y).forEach((_e) => {
                            Ou.has(_e) ||
                                (Ou.add(_e),
                                    di(xu(Y[_e]), `_effect-${_e}`, {
                                        mark: Mn,
                                        prepend: "queue",
                                        attachTo: P,
                                    }));
                        }));
                }
                return [W, r.value, I, Y, g, v];
            },
            (u, d) => {
                let [, , h] = u;
                (d || n.value.autoClear) && _u && hd(h, {
                    mark: Mn
                });
            },
        ),
        (u) => u
    );
}
class Fn {
    constructor(t, n) {
        ((this._keyframe = !0), (this.name = t), (this.style = n));
    }
    getName() {
        let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
        return t ? `${t}-${this.name}` : this.name;
    }
}
const vb = "4.2.6";

function Ye(e, t) {
    yb(e) && (e = "100%");
    var n = bb(e);
    return (
        (e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e)))),
        n && (e = parseInt(String(e * t), 10) / 100),
        Math.abs(e - t) < 1e-6 ?
        1 :
        (e =
            t === 360 ?
            (e < 0 ? (e % t) + t : e % t) / parseFloat(String(t)) :
            (e % t) / parseFloat(String(t)))
    );
}

function Bo(e) {
    return Math.min(1, Math.max(0, e));
}

function yb(e) {
    return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}

function bb(e) {
    return typeof e == "string" && e.indexOf("%") !== -1;
}

function Cd(e) {
    return ((e = parseFloat(e)), (isNaN(e) || e < 0 || e > 1) && (e = 1), e);
}

function Uo(e) {
    return e <= 1 ? "".concat(100 * Number(e), "%") : e;
}

function jn(e) {
    return e.length === 1 ? "0" + e : String(e);
}

function wb(e, t, n) {
    return {
        r: 255 * Ye(e, 255),
        g: 255 * Ye(t, 255),
        b: 255 * Ye(n, 255)
    };
}

function ku(e, t, n) {
    ((e = Ye(e, 255)), (t = Ye(t, 255)), (n = Ye(n, 255)));
    var r = Math.max(e, t, n),
        o = Math.min(e, t, n),
        s = 0,
        u = 0,
        d = (r + o) / 2;
    if (r === o)((u = 0), (s = 0));
    else {
        var h = r - o;
        switch (((u = d > 0.5 ? h / (2 - r - o) : h / (r + o)), r)) {
            case e:
                s = (t - n) / h + (t < n ? 6 : 0);
                break;
            case t:
                s = (n - e) / h + 2;
                break;
            case n:
                s = (e - t) / h + 4;
        }
        s /= 6;
    }
    return {
        h: s,
        s: u,
        l: d
    };
}

function va(e, t, n) {
    return (
        n < 0 && (n += 1),
        n > 1 && (n -= 1),
        n < 1 / 6 ?
        e + 6 * n * (t - e) :
        n < 0.5 ?
        t :
        n < 2 / 3 ?
        e + (t - e) * (2 / 3 - n) * 6 :
        e
    );
}

function Sb(e, t, n) {
    var r, o, s;
    if (((e = Ye(e, 360)), (t = Ye(t, 100)), (n = Ye(n, 100)), t === 0))
        ((o = n), (s = n), (r = n));
    else {
        var u = n < 0.5 ? n * (1 + t) : n + t - n * t,
            d = 2 * n - u;
        ((r = va(d, u, e + 1 / 3)), (o = va(d, u, e)), (s = va(d, u, e - 1 / 3)));
    }
    return {
        r: 255 * r,
        g: 255 * o,
        b: 255 * s
    };
}

function La(e, t, n) {
    ((e = Ye(e, 255)), (t = Ye(t, 255)), (n = Ye(n, 255)));
    var r = Math.max(e, t, n),
        o = Math.min(e, t, n),
        s = 0,
        u = r,
        d = r - o,
        h = r === 0 ? 0 : d / r;
    if (r === o) s = 0;
    else {
        switch (r) {
            case e:
                s = (t - n) / d + (t < n ? 6 : 0);
                break;
            case t:
                s = (n - e) / d + 2;
                break;
            case n:
                s = (e - t) / d + 4;
        }
        s /= 6;
    }
    return {
        h: s,
        s: h,
        v: u
    };
}

function _b(e, t, n) {
    ((e = 6 * Ye(e, 360)), (t = Ye(t, 100)), (n = Ye(n, 100)));
    var r = Math.floor(e),
        o = e - r,
        s = n * (1 - t),
        u = n * (1 - o * t),
        d = n * (1 - (1 - o) * t),
        h = r % 6;
    return {
        r: 255 * [n, u, s, s, d, n][h],
        g: 255 * [d, n, n, u, s, s][h],
        b: 255 * [s, s, d, n, n, u][h],
    };
}

function ja(e, t, n, r) {
    var o = [
        jn(Math.round(e).toString(16)),
        jn(Math.round(t).toString(16)),
        jn(Math.round(n).toString(16)),
    ];
    return r &&
        o[0].startsWith(o[0].charAt(1)) &&
        o[1].startsWith(o[1].charAt(1)) &&
        o[2].startsWith(o[2].charAt(1)) ?
        o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) :
        o.join("");
}

function xb(e, t, n, r, o) {
    var s = [
        jn(Math.round(e).toString(16)),
        jn(Math.round(t).toString(16)),
        jn(Math.round(n).toString(16)),
        jn(Ob(r)),
    ];
    return o &&
        s[0].startsWith(s[0].charAt(1)) &&
        s[1].startsWith(s[1].charAt(1)) &&
        s[2].startsWith(s[2].charAt(1)) &&
        s[3].startsWith(s[3].charAt(1)) ?
        s[0].charAt(0) + s[1].charAt(0) + s[2].charAt(0) + s[3].charAt(0) :
        s.join("");
}

function Ob(e) {
    return Math.round(255 * parseFloat(e)).toString(16);
}

function Eu(e) {
    return mt(e) / 255;
}

function mt(e) {
    return parseInt(e, 16);
}

function kb(e) {
    return {
        r: e >> 16,
        g: (65280 & e) >> 8,
        b: 255 & e
    };
}
var Ma = {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyan: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkgrey: "#a9a9a9",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkslategrey: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    goldenrod: "#daa520",
    gold: "#ffd700",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    grey: "#808080",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavenderblush: "#fff0f5",
    lavender: "#e6e6fa",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370db",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#db7093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    rebeccapurple: "#663399",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    slategrey: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    steelblue: "#4682b4",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    tomato: "#ff6347",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32",
};

function er(e) {
    var t = {
            r: 0,
            g: 0,
            b: 0
        },
        n = 1,
        r = null,
        o = null,
        s = null,
        u = !1,
        d = !1;
    return (
        typeof e == "string" && (e = Tb(e)),
        typeof e == "object" &&
        (sn(e.r) && sn(e.g) && sn(e.b) ?
            ((t = wb(e.r, e.g, e.b)),
                (u = !0),
                (d = String(e.r).substr(-1) === "%" ? "prgb" : "rgb")) :
            sn(e.h) && sn(e.s) && sn(e.v) ?
            ((r = Uo(e.s)),
                (o = Uo(e.v)),
                (t = _b(e.h, r, o)),
                (u = !0),
                (d = "hsv")) :
            sn(e.h) &&
            sn(e.s) &&
            sn(e.l) &&
            ((r = Uo(e.s)),
                (s = Uo(e.l)),
                (t = Sb(e.h, r, s)),
                (u = !0),
                (d = "hsl")),
            Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)),
        (n = Cd(n)), {
            ok: u,
            format: e.format || d,
            r: Math.min(255, Math.max(t.r, 0)),
            g: Math.min(255, Math.max(t.g, 0)),
            b: Math.min(255, Math.max(t.b, 0)),
            a: n,
        }
    );
}
var Eb = "[-\\+]?\\d+%?",
    Cb = "[-\\+]?\\d*\\.\\d+%?",
    wn = "(?:".concat(Cb, ")|(?:").concat(Eb, ")"),
    ya = "[\\s|\\(]+("
    .concat(wn, ")[,|\\s]+(")
    .concat(wn, ")[,|\\s]+(")
    .concat(wn, ")\\s*\\)?"),
    ba = "[\\s|\\(]+("
    .concat(wn, ")[,|\\s]+(")
    .concat(wn, ")[,|\\s]+(")
    .concat(wn, ")[,|\\s]+(")
    .concat(wn, ")\\s*\\)?"),
    zt = {
        CSS_UNIT: new RegExp(wn),
        rgb: new RegExp("rgb" + ya),
        rgba: new RegExp("rgba" + ba),
        hsl: new RegExp("hsl" + ya),
        hsla: new RegExp("hsla" + ba),
        hsv: new RegExp("hsv" + ya),
        hsva: new RegExp("hsva" + ba),
        hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    };

function Tb(e) {
    if ((e = e.trim().toLowerCase()).length === 0) return !1;
    var t = !1;
    if (Ma[e])((e = Ma[e]), (t = !0));
    else if (e === "transparent")
        return {
            r: 0,
            g: 0,
            b: 0,
            a: 0,
            format: "name"
        };
    var n = zt.rgb.exec(e);
    return n ?
        {
            r: n[1],
            g: n[2],
            b: n[3]
        } :
        (n = zt.rgba.exec(e)) ?
        {
            r: n[1],
            g: n[2],
            b: n[3],
            a: n[4]
        } :
        (n = zt.hsl.exec(e)) ?
        {
            h: n[1],
            s: n[2],
            l: n[3]
        } :
        (n = zt.hsla.exec(e)) ?
        {
            h: n[1],
            s: n[2],
            l: n[3],
            a: n[4]
        } :
        (n = zt.hsv.exec(e)) ?
        {
            h: n[1],
            s: n[2],
            v: n[3]
        } :
        (n = zt.hsva.exec(e)) ?
        {
            h: n[1],
            s: n[2],
            v: n[3],
            a: n[4]
        } :
        (n = zt.hex8.exec(e)) ?
        {
            r: mt(n[1]),
            g: mt(n[2]),
            b: mt(n[3]),
            a: Eu(n[4]),
            format: t ? "name" : "hex8",
        } :
        (n = zt.hex6.exec(e)) ?
        {
            r: mt(n[1]),
            g: mt(n[2]),
            b: mt(n[3]),
            format: t ? "name" : "hex",
        } :
        (n = zt.hex4.exec(e)) ?
        {
            r: mt(n[1] + n[1]),
            g: mt(n[2] + n[2]),
            b: mt(n[3] + n[3]),
            a: Eu(n[4] + n[4]),
            format: t ? "name" : "hex8",
        } :
        !!(n = zt.hex3.exec(e)) && {
            r: mt(n[1] + n[1]),
            g: mt(n[2] + n[2]),
            b: mt(n[3] + n[3]),
            format: t ? "name" : "hex",
        };
}

function sn(e) {
    return !!zt.CSS_UNIT.exec(String(e));
}
var Je = (function() {
        function e(t, n) {
            var r;
            if ((t === void 0 && (t = ""), n === void 0 && (n = {}), t instanceof e))
                return t;
            (typeof t == "number" && (t = kb(t)), (this.originalInput = t));
            var o = er(t);
            ((this.originalInput = t),
                (this.r = o.r),
                (this.g = o.g),
                (this.b = o.b),
                (this.a = o.a),
                (this.roundA = Math.round(100 * this.a) / 100),
                (this.format = (r = n.format) !== null && r !== void 0 ? r : o.format),
                (this.gradientType = n.gradientType),
                this.r < 1 && (this.r = Math.round(this.r)),
                this.g < 1 && (this.g = Math.round(this.g)),
                this.b < 1 && (this.b = Math.round(this.b)),
                (this.isValid = o.ok));
        }
        return (
            (e.prototype.isDark = function() {
                return this.getBrightness() < 128;
            }),
            (e.prototype.isLight = function() {
                return !this.isDark();
            }),
            (e.prototype.getBrightness = function() {
                var t = this.toRgb();
                return (299 * t.r + 587 * t.g + 114 * t.b) / 1e3;
            }),
            (e.prototype.getLuminance = function() {
                var t = this.toRgb(),
                    n = t.r / 255,
                    r = t.g / 255,
                    o = t.b / 255;
                return (
                    0.2126 *
                    (n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4)) +
                    0.7152 *
                    (r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4)) +
                    0.0722 *
                    (o <= 0.03928 ? o / 12.92 : Math.pow((o + 0.055) / 1.055, 2.4))
                );
            }),
            (e.prototype.getAlpha = function() {
                return this.a;
            }),
            (e.prototype.setAlpha = function(t) {
                return (
                    (this.a = Cd(t)),
                    (this.roundA = Math.round(100 * this.a) / 100),
                    this
                );
            }),
            (e.prototype.isMonochrome = function() {
                return this.toHsl().s === 0;
            }),
            (e.prototype.toHsv = function() {
                var t = La(this.r, this.g, this.b);
                return {
                    h: 360 * t.h,
                    s: t.s,
                    v: t.v,
                    a: this.a
                };
            }),
            (e.prototype.toHsvString = function() {
                var t = La(this.r, this.g, this.b),
                    n = Math.round(360 * t.h),
                    r = Math.round(100 * t.s),
                    o = Math.round(100 * t.v);
                return this.a === 1 ?
                    "hsv(".concat(n, ", ").concat(r, "%, ").concat(o, "%)") :
                    "hsva("
                    .concat(n, ", ")
                    .concat(r, "%, ")
                    .concat(o, "%, ")
                    .concat(this.roundA, ")");
            }),
            (e.prototype.toHsl = function() {
                var t = ku(this.r, this.g, this.b);
                return {
                    h: 360 * t.h,
                    s: t.s,
                    l: t.l,
                    a: this.a
                };
            }),
            (e.prototype.toHslString = function() {
                var t = ku(this.r, this.g, this.b),
                    n = Math.round(360 * t.h),
                    r = Math.round(100 * t.s),
                    o = Math.round(100 * t.l);
                return this.a === 1 ?
                    "hsl(".concat(n, ", ").concat(r, "%, ").concat(o, "%)") :
                    "hsla("
                    .concat(n, ", ")
                    .concat(r, "%, ")
                    .concat(o, "%, ")
                    .concat(this.roundA, ")");
            }),
            (e.prototype.toHex = function(t) {
                return (t === void 0 && (t = !1), ja(this.r, this.g, this.b, t));
            }),
            (e.prototype.toHexString = function(t) {
                return (t === void 0 && (t = !1), "#" + this.toHex(t));
            }),
            (e.prototype.toHex8 = function(t) {
                return (
                    t === void 0 && (t = !1),
                    xb(this.r, this.g, this.b, this.a, t)
                );
            }),
            (e.prototype.toHex8String = function(t) {
                return (t === void 0 && (t = !1), "#" + this.toHex8(t));
            }),
            (e.prototype.toHexShortString = function(t) {
                return (
                    t === void 0 && (t = !1),
                    this.a === 1 ? this.toHexString(t) : this.toHex8String(t)
                );
            }),
            (e.prototype.toRgb = function() {
                return {
                    r: Math.round(this.r),
                    g: Math.round(this.g),
                    b: Math.round(this.b),
                    a: this.a,
                };
            }),
            (e.prototype.toRgbString = function() {
                var t = Math.round(this.r),
                    n = Math.round(this.g),
                    r = Math.round(this.b);
                return this.a === 1 ?
                    "rgb(".concat(t, ", ").concat(n, ", ").concat(r, ")") :
                    "rgba("
                    .concat(t, ", ")
                    .concat(n, ", ")
                    .concat(r, ", ")
                    .concat(this.roundA, ")");
            }),
            (e.prototype.toPercentageRgb = function() {
                var t = function(n) {
                    return "".concat(Math.round(100 * Ye(n, 255)), "%");
                };
                return {
                    r: t(this.r),
                    g: t(this.g),
                    b: t(this.b),
                    a: this.a
                };
            }),
            (e.prototype.toPercentageRgbString = function() {
                var t = function(n) {
                    return Math.round(100 * Ye(n, 255));
                };
                return this.a === 1 ?
                    "rgb("
                    .concat(t(this.r), "%, ")
                    .concat(t(this.g), "%, ")
                    .concat(t(this.b), "%)") :
                    "rgba("
                    .concat(t(this.r), "%, ")
                    .concat(t(this.g), "%, ")
                    .concat(t(this.b), "%, ")
                    .concat(this.roundA, ")");
            }),
            (e.prototype.toName = function() {
                if (this.a === 0) return "transparent";
                if (this.a < 1) return !1;
                for (
                    var t = "#" + ja(this.r, this.g, this.b, !1),
                        n = 0,
                        r = Object.entries(Ma); n < r.length; n++
                ) {
                    var o = r[n],
                        s = o[0];
                    if (t === o[1]) return s;
                }
                return !1;
            }),
            (e.prototype.toString = function(t) {
                var n = !!t;
                t = t ?? this.format;
                var r = !1,
                    o = this.a < 1 && this.a >= 0;
                return n || !o || (!t.startsWith("hex") && t !== "name") ?
                    (t === "rgb" && (r = this.toRgbString()),
                        t === "prgb" && (r = this.toPercentageRgbString()),
                        (t !== "hex" && t !== "hex6") || (r = this.toHexString()),
                        t === "hex3" && (r = this.toHexString(!0)),
                        t === "hex4" && (r = this.toHex8String(!0)),
                        t === "hex8" && (r = this.toHex8String()),
                        t === "name" && (r = this.toName()),
                        t === "hsl" && (r = this.toHslString()),
                        t === "hsv" && (r = this.toHsvString()),
                        r || this.toHexString()) :
                    t === "name" && this.a === 0 ?
                    this.toName() :
                    this.toRgbString();
            }),
            (e.prototype.toNumber = function() {
                return (
                    (Math.round(this.r) << 16) +
                    (Math.round(this.g) << 8) +
                    Math.round(this.b)
                );
            }),
            (e.prototype.clone = function() {
                return new e(this.toString());
            }),
            (e.prototype.lighten = function(t) {
                t === void 0 && (t = 10);
                var n = this.toHsl();
                return ((n.l += t / 100), (n.l = Bo(n.l)), new e(n));
            }),
            (e.prototype.brighten = function(t) {
                t === void 0 && (t = 10);
                var n = this.toRgb();
                return (
                    (n.r = Math.max(
                        0,
                        Math.min(255, n.r - Math.round((-t / 100) * 255)),
                    )),
                    (n.g = Math.max(
                        0,
                        Math.min(255, n.g - Math.round((-t / 100) * 255)),
                    )),
                    (n.b = Math.max(
                        0,
                        Math.min(255, n.b - Math.round((-t / 100) * 255)),
                    )),
                    new e(n)
                );
            }),
            (e.prototype.darken = function(t) {
                t === void 0 && (t = 10);
                var n = this.toHsl();
                return ((n.l -= t / 100), (n.l = Bo(n.l)), new e(n));
            }),
            (e.prototype.tint = function(t) {
                return (t === void 0 && (t = 10), this.mix("white", t));
            }),
            (e.prototype.shade = function(t) {
                return (t === void 0 && (t = 10), this.mix("black", t));
            }),
            (e.prototype.desaturate = function(t) {
                t === void 0 && (t = 10);
                var n = this.toHsl();
                return ((n.s -= t / 100), (n.s = Bo(n.s)), new e(n));
            }),
            (e.prototype.saturate = function(t) {
                t === void 0 && (t = 10);
                var n = this.toHsl();
                return ((n.s += t / 100), (n.s = Bo(n.s)), new e(n));
            }),
            (e.prototype.greyscale = function() {
                return this.desaturate(100);
            }),
            (e.prototype.spin = function(t) {
                var n = this.toHsl(),
                    r = (n.h + t) % 360;
                return ((n.h = r < 0 ? 360 + r : r), new e(n));
            }),
            (e.prototype.mix = function(t, n) {
                n === void 0 && (n = 50);
                var r = this.toRgb(),
                    o = new e(t).toRgb(),
                    s = n / 100;
                return new e({
                    r: (o.r - r.r) * s + r.r,
                    g: (o.g - r.g) * s + r.g,
                    b: (o.b - r.b) * s + r.b,
                    a: (o.a - r.a) * s + r.a,
                });
            }),
            (e.prototype.analogous = function(t, n) {
                (t === void 0 && (t = 6), n === void 0 && (n = 30));
                var r = this.toHsl(),
                    o = 360 / n,
                    s = [this];
                for (r.h = (r.h - ((o * t) >> 1) + 720) % 360; --t;)
                    ((r.h = (r.h + o) % 360), s.push(new e(r)));
                return s;
            }),
            (e.prototype.complement = function() {
                var t = this.toHsl();
                return ((t.h = (t.h + 180) % 360), new e(t));
            }),
            (e.prototype.monochromatic = function(t) {
                t === void 0 && (t = 6);
                for (
                    var n = this.toHsv(), r = n.h, o = n.s, s = n.v, u = [], d = 1 / t; t--;
                )
                    (u.push(new e({
                        h: r,
                        s: o,
                        v: s
                    })), (s = (s + d) % 1));
                return u;
            }),
            (e.prototype.splitcomplement = function() {
                var t = this.toHsl(),
                    n = t.h;
                return [
                    this,
                    new e({
                        h: (n + 72) % 360,
                        s: t.s,
                        l: t.l
                    }),
                    new e({
                        h: (n + 216) % 360,
                        s: t.s,
                        l: t.l
                    }),
                ];
            }),
            (e.prototype.onBackground = function(t) {
                var n = this.toRgb(),
                    r = new e(t).toRgb(),
                    o = n.a + r.a * (1 - n.a);
                return new e({
                    r: (n.r * n.a + r.r * r.a * (1 - n.a)) / o,
                    g: (n.g * n.a + r.g * r.a * (1 - n.a)) / o,
                    b: (n.b * n.a + r.b * r.a * (1 - n.a)) / o,
                    a: o,
                });
            }),
            (e.prototype.triad = function() {
                return this.polyad(3);
            }),
            (e.prototype.tetrad = function() {
                return this.polyad(4);
            }),
            (e.prototype.polyad = function(t) {
                for (
                    var n = this.toHsl(), r = n.h, o = [this], s = 360 / t, u = 1; u < t; u++
                )
                    o.push(new e({
                        h: (r + u * s) % 360,
                        s: n.s,
                        l: n.l
                    }));
                return o;
            }),
            (e.prototype.equals = function(t) {
                return this.toRgbString() === new e(t).toRgbString();
            }),
            e
        );
    })(),
    qo = 2,
    Cu = 0.16,
    Ib = 0.05,
    Pb = 0.05,
    Ab = 0.15,
    Td = 5,
    Id = 4,
    Rb = [{
            index: 7,
            opacity: 0.15
        },
        {
            index: 6,
            opacity: 0.25
        },
        {
            index: 5,
            opacity: 0.3
        },
        {
            index: 5,
            opacity: 0.45
        },
        {
            index: 5,
            opacity: 0.65
        },
        {
            index: 5,
            opacity: 0.85
        },
        {
            index: 4,
            opacity: 0.9
        },
        {
            index: 3,
            opacity: 0.95
        },
        {
            index: 2,
            opacity: 0.97
        },
        {
            index: 1,
            opacity: 0.98
        },
    ];

function Tu(e) {
    var t = La(e.r, e.g, e.b);
    return {
        h: 360 * t.h,
        s: t.s,
        v: t.v
    };
}

function Wo(e) {
    var t = e.r,
        n = e.g,
        r = e.b;
    return "#".concat(ja(t, n, r, !1));
}

function $b(e, t, n) {
    var r = n / 100;
    return {
        r: (t.r - e.r) * r + e.r,
        g: (t.g - e.g) * r + e.g,
        b: (t.b - e.b) * r + e.b,
    };
}

function Iu(e, t, n) {
    var r;
    return (
        (r =
            Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ?
            n ?
            Math.round(e.h) - qo * t :
            Math.round(e.h) + qo * t :
            n ?
            Math.round(e.h) + qo * t :
            Math.round(e.h) - qo * t) < 0 ?
        (r += 360) :
        r >= 360 && (r -= 360),
        r
    );
}

function Pu(e, t, n) {
    return e.h === 0 && e.s === 0 ?
        e.s :
        ((r = n ? e.s - Cu * t : t === Id ? e.s + Cu : e.s + Ib * t) > 1 &&
            (r = 1),
            n && t === Td && r > 0.1 && (r = 0.1),
            r < 0.06 && (r = 0.06),
            Number(r.toFixed(2)));
    var r;
}

function Au(e, t, n) {
    var r;
    return (
        (r = n ? e.v + Pb * t : e.v - Ab * t) > 1 && (r = 1),
        Number(r.toFixed(2))
    );
}

function Hn(e) {
    for (
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
            n = [],
            r = er(e),
            o = Td; o > 0; o -= 1
    ) {
        var s = Tu(r),
            u = Wo(er({
                h: Iu(s, o, !0),
                s: Pu(s, o, !0),
                v: Au(s, o, !0)
            }));
        n.push(u);
    }
    n.push(Wo(r));
    for (var d = 1; d <= Id; d += 1) {
        var h = Tu(r),
            p = Wo(er({
                h: Iu(h, d),
                s: Pu(h, d),
                v: Au(h, d)
            }));
        n.push(p);
    }
    return t.theme === "dark" ?
        Rb.map(function(g) {
            var v = g.index,
                w = g.opacity;
            return Wo($b(er(t.backgroundColor || "#141414"), er(n[v]), 100 * w));
        }) :
        n;
}
var wa = {
        red: "#F5222D",
        volcano: "#FA541C",
        orange: "#FA8C16",
        gold: "#FAAD14",
        yellow: "#FADB14",
        lime: "#A0D911",
        green: "#52C41A",
        cyan: "#13C2C2",
        blue: "#1890FF",
        geekblue: "#2F54EB",
        purple: "#722ED1",
        magenta: "#EB2F96",
        grey: "#666666",
    },
    to = {},
    Sa = {};
Object.keys(wa).forEach(function(e) {
    ((to[e] = Hn(wa[e])),
        (to[e].primary = to[e][5]),
        (Sa[e] = Hn(wa[e], {
            theme: "dark",
            backgroundColor: "#141414"
        })),
        (Sa[e].primary = Sa[e][5]));
});
var q2 = to.gold,
    Nb = to.blue;
const zb = (e) => {
    const {
        controlHeight: t
    } = e;
    return {
        controlHeightSM: 0.75 * t,
        controlHeightXS: 0.5 * t,
        controlHeightLG: 1.25 * t,
    };
};

function Lb(e) {
    const {
        sizeUnit: t,
        sizeStep: n
    } = e;
    return {
        sizeXXL: t * (n + 8),
        sizeXL: t * (n + 4),
        sizeLG: t * (n + 2),
        sizeMD: t * (n + 1),
        sizeMS: t * n,
        size: t * n,
        sizeSM: t * (n - 1),
        sizeXS: t * (n - 2),
        sizeXXS: t * (n - 3),
    };
}
const Pd = {
        blue: "#1677ff",
        purple: "#722ED1",
        cyan: "#13C2C2",
        green: "#52C41A",
        magenta: "#EB2F96",
        pink: "#eb2f96",
        red: "#F5222D",
        orange: "#FA8C16",
        yellow: "#FADB14",
        volcano: "#FA541C",
        geekblue: "#2F54EB",
        gold: "#FAAD14",
        lime: "#A0D911",
    },
    Ei = z(z({}, Pd), {
        colorPrimary: "#1677ff",
        colorSuccess: "#52c41a",
        colorWarning: "#faad14",
        colorError: "#ff4d4f",
        colorInfo: "#1677ff",
        colorTextBase: "",
        colorBgBase: "",
        fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
        fontSize: 14,
        lineWidth: 1,
        lineType: "solid",
        motionUnit: 0.1,
        motionBase: 0,
        motionEaseOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
        motionEaseInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
        motionEaseOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
        motionEaseInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
        motionEaseOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
        motionEaseInBack: "cubic-bezier(0.71, -0.46, 0.88, 0.6)",
        motionEaseInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
        motionEaseOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
        borderRadius: 6,
        sizeUnit: 4,
        sizeStep: 4,
        sizePopupArrow: 16,
        controlHeight: 32,
        zIndexBase: 0,
        zIndexPopupBase: 1e3,
        opacityImage: 1,
        wireframe: !1,
    });

function jb(e, t) {
    let {
        generateColorPalettes: n,
        generateNeutralColorPalettes: r
    } = t;
    const {
        colorSuccess: o,
        colorWarning: s,
        colorError: u,
        colorInfo: d,
        colorPrimary: h,
        colorBgBase: p,
        colorTextBase: g,
    } = e,
    v = n(h),
        w = n(o),
        C = n(s),
        k = n(u),
        P = n(d);
    return z(z({}, r(p, g)), {
        colorPrimaryBg: v[1],
        colorPrimaryBgHover: v[2],
        colorPrimaryBorder: v[3],
        colorPrimaryBorderHover: v[4],
        colorPrimaryHover: v[5],
        colorPrimary: v[6],
        colorPrimaryActive: v[7],
        colorPrimaryTextHover: v[8],
        colorPrimaryText: v[9],
        colorPrimaryTextActive: v[10],
        colorSuccessBg: w[1],
        colorSuccessBgHover: w[2],
        colorSuccessBorder: w[3],
        colorSuccessBorderHover: w[4],
        colorSuccessHover: w[4],
        colorSuccess: w[6],
        colorSuccessActive: w[7],
        colorSuccessTextHover: w[8],
        colorSuccessText: w[9],
        colorSuccessTextActive: w[10],
        colorErrorBg: k[1],
        colorErrorBgHover: k[2],
        colorErrorBorder: k[3],
        colorErrorBorderHover: k[4],
        colorErrorHover: k[5],
        colorError: k[6],
        colorErrorActive: k[7],
        colorErrorTextHover: k[8],
        colorErrorText: k[9],
        colorErrorTextActive: k[10],
        colorWarningBg: C[1],
        colorWarningBgHover: C[2],
        colorWarningBorder: C[3],
        colorWarningBorderHover: C[4],
        colorWarningHover: C[4],
        colorWarning: C[6],
        colorWarningActive: C[7],
        colorWarningTextHover: C[8],
        colorWarningText: C[9],
        colorWarningTextActive: C[10],
        colorInfoBg: P[1],
        colorInfoBgHover: P[2],
        colorInfoBorder: P[3],
        colorInfoBorderHover: P[4],
        colorInfoHover: P[4],
        colorInfo: P[6],
        colorInfoActive: P[7],
        colorInfoTextHover: P[8],
        colorInfoText: P[9],
        colorInfoTextActive: P[10],
        colorBgMask: new Je("#000").setAlpha(0.45).toRgbString(),
        colorWhite: "#fff",
    });
}
const Mb = (e) => {
    let t = e,
        n = e,
        r = e,
        o = e;
    return (
        e < 6 && e >= 5 ?
        (t = e + 1) :
        e < 16 && e >= 6 ?
        (t = e + 2) :
        e >= 16 && (t = 16),
        e < 7 && e >= 5 ?
        (n = 4) :
        e < 8 && e >= 7 ?
        (n = 5) :
        e < 14 && e >= 8 ?
        (n = 6) :
        e < 16 && e >= 14 ?
        (n = 7) :
        e >= 16 && (n = 8),
        e < 6 && e >= 2 ? (r = 1) : e >= 6 && (r = 2),
        e > 4 && e < 8 ? (o = 4) : e >= 8 && (o = 6), {
            borderRadius: e > 16 ? 16 : e,
            borderRadiusXS: r,
            borderRadiusSM: n,
            borderRadiusLG: t,
            borderRadiusOuter: o,
        }
    );
};

function Db(e) {
    const {
        motionUnit: t,
        motionBase: n,
        borderRadius: r,
        lineWidth: o
    } = e;
    return z({
            motionDurationFast: `${(n + t).toFixed(1)}s`,
            motionDurationMid: `${(n + 2 * t).toFixed(1)}s`,
            motionDurationSlow: `${(n + 3 * t).toFixed(1)}s`,
            lineWidthBold: o + 1,
        },
        Mb(r),
    );
}
const cn = (e, t) => new Je(e).setAlpha(t).toRgbString(),
    Xr = (e, t) => new Je(e).darken(t).toHexString(),
    Fb = (e) => {
        const t = Hn(e);
        return {
            1: t[0],
            2: t[1],
            3: t[2],
            4: t[3],
            5: t[4],
            6: t[5],
            7: t[6],
            8: t[4],
            9: t[5],
            10: t[6],
        };
    },
    Hb = (e, t) => {
        const n = e || "#fff",
            r = t || "#000";
        return {
            colorBgBase: n,
            colorTextBase: r,
            colorText: cn(r, 0.88),
            colorTextSecondary: cn(r, 0.65),
            colorTextTertiary: cn(r, 0.45),
            colorTextQuaternary: cn(r, 0.25),
            colorFill: cn(r, 0.15),
            colorFillSecondary: cn(r, 0.06),
            colorFillTertiary: cn(r, 0.04),
            colorFillQuaternary: cn(r, 0.02),
            colorBgLayout: Xr(n, 4),
            colorBgContainer: Xr(n, 0),
            colorBgElevated: Xr(n, 0),
            colorBgSpotlight: cn(r, 0.85),
            colorBorder: Xr(n, 15),
            colorBorderSecondary: Xr(n, 6),
        };
    };

function Bb(e) {
    const t = new Array(10).fill(null).map((n, r) => {
        const o = r - 1,
            s = e * Math.pow(2.71828, o / 5),
            u = r > 1 ? Math.floor(s) : Math.ceil(s);
        return 2 * Math.floor(u / 2);
    });
    return ((t[1] = e), t.map((n) => ({
        size: n,
        lineHeight: (n + 8) / n
    })));
}
const Ub = (e) => {
    const t = Bb(e),
        n = t.map((o) => o.size),
        r = t.map((o) => o.lineHeight);
    return {
        fontSizeSM: n[0],
        fontSize: n[1],
        fontSizeLG: n[2],
        fontSizeXL: n[3],
        fontSizeHeading1: n[6],
        fontSizeHeading2: n[5],
        fontSizeHeading3: n[4],
        fontSizeHeading4: n[3],
        fontSizeHeading5: n[2],
        lineHeight: r[1],
        lineHeightLG: r[2],
        lineHeightSM: r[0],
        lineHeightHeading1: r[6],
        lineHeightHeading2: r[5],
        lineHeightHeading3: r[4],
        lineHeightHeading4: r[3],
        lineHeightHeading5: r[2],
    };
};

function qb(e) {
    const t = Object.keys(Pd)
        .map((n) => {
            const r = Hn(e[n]);
            return new Array(10)
                .fill(1)
                .reduce((o, s, u) => ((o[`${n}-${u + 1}`] = r[u]), o), {});
        })
        .reduce((n, r) => z(z({}, n), r), {});
    return z(
        z(
            z(
                z(
                    z(
                        z(z({}, e), t),
                        jb(e, {
                            generateColorPalettes: Fb,
                            generateNeutralColorPalettes: Hb,
                        }),
                    ),
                    Ub(e.fontSize),
                ),
                Lb(e),
            ),
            zb(e),
        ),
        Db(e),
    );
}

function _a(e) {
    return e >= 0 && e <= 255;
}

function Go(e, t) {
    const {
        r: n,
        g: r,
        b: o,
        a: s
    } = new Je(e).toRgb();
    if (s < 1) return e;
    const {
        r: u,
        g: d,
        b: h
    } = new Je(t).toRgb();
    for (let p = 0.01; p <= 1; p += 0.01) {
        const g = Math.round((n - u * (1 - p)) / p),
            v = Math.round((r - d * (1 - p)) / p),
            w = Math.round((o - h * (1 - p)) / p);
        if (_a(g) && _a(v) && _a(w))
            return new Je({
                r: g,
                g: v,
                b: w,
                a: Math.round(100 * p) / 100,
            }).toRgbString();
    }
    return new Je({
        r: n,
        g: r,
        b: o,
        a: 1
    }).toRgbString();
}
var Wb = function(e, t) {
    var n = {};
    for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function") {
        var o = 0;
        for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
            t.indexOf(r[o]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
            (n[r[o]] = e[r[o]]);
    }
    return n;
};

function Gb(e) {
    const {
        override: t
    } = e,
    n = Wb(e, ["override"]),
        r = z({}, t);
    Object.keys(Ei).forEach((s) => {
        delete r[s];
    });
    const o = z(z({}, n), r);
    return z(
        z(z({}, o), {
            colorLink: o.colorInfoText,
            colorLinkHover: o.colorInfoHover,
            colorLinkActive: o.colorInfoActive,
            colorFillContent: o.colorFillSecondary,
            colorFillContentHover: o.colorFill,
            colorFillAlter: o.colorFillQuaternary,
            colorBgContainerDisabled: o.colorFillTertiary,
            colorBorderBg: o.colorBgContainer,
            colorSplit: Go(o.colorBorderSecondary, o.colorBgContainer),
            colorTextPlaceholder: o.colorTextQuaternary,
            colorTextDisabled: o.colorTextQuaternary,
            colorTextHeading: o.colorText,
            colorTextLabel: o.colorTextSecondary,
            colorTextDescription: o.colorTextTertiary,
            colorTextLightSolid: o.colorWhite,
            colorHighlight: o.colorError,
            colorBgTextHover: o.colorFillSecondary,
            colorBgTextActive: o.colorFill,
            colorIcon: o.colorTextTertiary,
            colorIconHover: o.colorText,
            colorErrorOutline: Go(o.colorErrorBg, o.colorBgContainer),
            colorWarningOutline: Go(o.colorWarningBg, o.colorBgContainer),
            fontSizeIcon: o.fontSizeSM,
            lineWidth: o.lineWidth,
            controlOutlineWidth: 2 * o.lineWidth,
            controlInteractiveSize: o.controlHeight / 2,
            controlItemBgHover: o.colorFillTertiary,
            controlItemBgActive: o.colorPrimaryBg,
            controlItemBgActiveHover: o.colorPrimaryBgHover,
            controlItemBgActiveDisabled: o.colorFill,
            controlTmpOutline: o.colorFillQuaternary,
            controlOutline: Go(o.colorPrimaryBg, o.colorBgContainer),
            lineType: o.lineType,
            borderRadius: o.borderRadius,
            borderRadiusXS: o.borderRadiusXS,
            borderRadiusSM: o.borderRadiusSM,
            borderRadiusLG: o.borderRadiusLG,
            fontWeightStrong: 600,
            opacityLoading: 0.65,
            linkDecoration: "none",
            linkHoverDecoration: "none",
            linkFocusDecoration: "none",
            controlPaddingHorizontal: 12,
            controlPaddingHorizontalSM: 8,
            paddingXXS: o.sizeXXS,
            paddingXS: o.sizeXS,
            paddingSM: o.sizeSM,
            padding: o.size,
            paddingMD: o.sizeMD,
            paddingLG: o.sizeLG,
            paddingXL: o.sizeXL,
            paddingContentHorizontalLG: o.sizeLG,
            paddingContentVerticalLG: o.sizeMS,
            paddingContentHorizontal: o.sizeMS,
            paddingContentVertical: o.sizeSM,
            paddingContentHorizontalSM: o.size,
            paddingContentVerticalSM: o.sizeXS,
            marginXXS: o.sizeXXS,
            marginXS: o.sizeXS,
            marginSM: o.sizeSM,
            margin: o.size,
            marginMD: o.sizeMD,
            marginLG: o.sizeLG,
            marginXL: o.sizeXL,
            marginXXL: o.sizeXXL,
            boxShadow: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
            boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
            boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
            screenXS: 480,
            screenXSMin: 480,
            screenXSMax: 575,
            screenSM: 576,
            screenSMMin: 576,
            screenSMMax: 767,
            screenMD: 768,
            screenMDMin: 768,
            screenMDMax: 991,
            screenLG: 992,
            screenLGMin: 992,
            screenLGMax: 1199,
            screenXL: 1200,
            screenXLMin: 1200,
            screenXLMax: 1599,
            screenXXL: 1600,
            screenXXLMin: 1600,
            screenXXLMax: 1999,
            screenXXXL: 2e3,
            screenXXXLMin: 2e3,
            boxShadowPopoverArrow: "3px 3px 7px rgba(0, 0, 0, 0.1)",
            boxShadowCard: `
      0 1px 2px -2px ${new Je("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new Je("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new Je("rgba(0, 0, 0, 0.09)").toRgbString()}
    `,
            boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
            boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
            boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
            boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
            boxShadowTabsOverflowLeft: "inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",
            boxShadowTabsOverflowRight: "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",
            boxShadowTabsOverflowTop: "inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",
            boxShadowTabsOverflowBottom: "inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)",
        }),
        r,
    );
}
const W2 = {
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
    },
    Ad = (e) => ({
        boxSizing: "border-box",
        margin: 0,
        padding: 0,
        color: e.colorText,
        fontSize: e.fontSize,
        lineHeight: e.lineHeight,
        listStyle: "none",
        fontFamily: e.fontFamily,
    }),
    Zb = () => ({
        display: "inline-flex",
        alignItems: "center",
        color: "inherit",
        fontStyle: "normal",
        lineHeight: 0,
        textAlign: "center",
        textTransform: "none",
        verticalAlign: "-0.125em",
        textRendering: "optimizeLegibility",
        "-webkit-font-smoothing": "antialiased",
        "-moz-osx-font-smoothing": "grayscale",
        "> *": {
            lineHeight: 1
        },
        svg: {
            display: "inline-block"
        },
    }),
    G2 = () => ({
        "&::before": {
            display: "table",
            content: '""'
        },
        "&::after": {
            display: "table",
            clear: "both",
            content: '""'
        },
    }),
    Xb = (e) => ({
        a: {
            color: e.colorLink,
            textDecoration: e.linkDecoration,
            backgroundColor: "transparent",
            outline: "none",
            cursor: "pointer",
            transition: `color ${e.motionDurationSlow}`,
            "-webkit-text-decoration-skip": "objects",
            "&:hover": {
                color: e.colorLinkHover
            },
            "&:active": {
                color: e.colorLinkActive
            },
            "&:active,\n  &:hover": {
                textDecoration: e.linkHoverDecoration,
                outline: 0,
            },
            "&:focus": {
                textDecoration: e.linkFocusDecoration,
                outline: 0
            },
            "&[disabled]": {
                color: e.colorTextDisabled,
                cursor: "not-allowed"
            },
        },
    }),
    Vb = (e, t) => {
        const {
            fontFamily: n,
            fontSize: r
        } = e,
        o = `[class^="${t}"], [class*=" ${t}"]`;
        return {
            [o]: {
                fontFamily: n,
                fontSize: r,
                boxSizing: "border-box",
                "&::before, &::after": {
                    boxSizing: "border-box"
                },
                [o]: {
                    boxSizing: "border-box",
                    "&::before, &::after": {
                        boxSizing: "border-box"
                    },
                },
            },
        };
    },
    Jb = (e) => ({
        outline: `${e.lineWidthBold}px solid ${e.colorPrimaryBorder}`,
        outlineOffset: 1,
        transition: "outline-offset 0s, outline 0s",
    }),
    Z2 = (e) => ({
        "&:focus-visible": z({}, Jb(e))
    });

function ws(e, t, n) {
    return (r) => {
        const o = V(() => (r == null ? void 0 : r.value)),
            [s, u, d] = Ti(),
            {
                getPrefixCls: h,
                iconPrefixCls: p
            } = td(),
            g = V(() => h());
        return (
            za(
                V(() => ({
                    theme: s.value,
                    token: u.value,
                    hashId: d.value,
                    path: ["Shared", g.value],
                })),
                () => [{
                    "&": Xb(u.value)
                }],
            ),
            [
                za(
                    V(() => ({
                        theme: s.value,
                        token: u.value,
                        hashId: d.value,
                        path: [e, o.value, p.value],
                    })),
                    () => {
                        const {
                            token: v,
                            flush: w
                        } = Yb(u.value),
                            C = z(z({}, typeof n == "function" ? n(v) : n), u.value[e]),
                            k = Ci(
                                v, {
                                    componentCls: `.${o.value}`,
                                    prefixCls: o.value,
                                    iconCls: `.${p.value}`,
                                    antCls: `.${g.value}`,
                                },
                                C,
                            ),
                            P = t(k, {
                                hashId: d.value,
                                prefixCls: o.value,
                                rootPrefixCls: g.value,
                                iconPrefixCls: p.value,
                                overrideComponentToken: u.value[e],
                            });
                        return (w(e, C), [Vb(u.value, o.value), P]);
                    },
                ),
                d,
            ]
        );
    };
}
const Rd = typeof CSSINJS_STATISTIC < "u";
let Da = !0;

function Ci() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
    if (!Rd) return z({}, ...t);
    Da = !1;
    const r = {};
    return (
        t.forEach((o) => {
            Object.keys(o).forEach((s) => {
                Object.defineProperty(r, s, {
                    configurable: !0,
                    enumerable: !0,
                    get: () => o[s],
                });
            });
        }),
        (Da = !0),
        r
    );
}

function Kb() {}

function Yb(e) {
    let t,
        n = e,
        r = Kb;
    return (
        Rd &&
        ((t = new Set()),
            (n = new Proxy(e, {
                get: (o, s) => (Da && t.add(s), o[s])
            })),
            (r = (o, s) => {
                Array.from(t);
            })), {
            token: n,
            keys: t,
            flush: r
        }
    );
}
const Qb = vd(qb),
    $d = {
        token: Ei,
        hashed: !0
    },
    Nd = Symbol("DesignTokenContext"),
    Fa = jt(),
    e1 = (e) => {
        (En(Nd, e),
            Yt(
                e,
                () => {
                    ((Fa.value = dr(e)), jp(Fa));
                }, {
                    immediate: !0,
                    deep: !0
                },
            ));
    },
    t1 = Ge({
        props: {
            value: gt()
        },
        setup(e, t) {
            let {
                slots: n
            } = t;
            return (
                e1(V(() => e.value)),
                () => {
                    var r;
                    return (r = n.default) === null || r === void 0 ? void 0 : r.call(n);
                }
            );
        },
    });

function Ti() {
    const e = Kt(
            Nd,
            V(() => Fa.value || $d),
        ),
        t = V(() => `${vb}-${e.value.hashed || ""}`),
        n = V(() => e.value.theme || Qb),
        r = qy(
            n,
            V(() => [Ei, e.value.token]),
            V(() => ({
                salt: t.value,
                override: z({
                    override: e.value.token
                }, e.value.components),
                formatToken: Gb,
            })),
        );
    return [n, V(() => r.value[0]), V(() => (e.value.hashed ? r.value[1] : ""))];
}
const Ss = Ge({
    compatConfig: {
        MODE: 3
    },
    setup() {
        const [, e] = Ti(),
            t = V(() =>
                new Je(e.value.colorBgBase).toHsl().l < 0.5 ? {
                    opacity: 0.65
                } : {},
            );
        return () =>
            D(
                "svg", {
                    style: t.value,
                    width: "184",
                    height: "152",
                    viewBox: "0 0 184 152",
                    xmlns: "http://www.w3.org/2000/svg",
                },
                [
                    D("g", {
                        fill: "none",
                        "fill-rule": "evenodd"
                    }, [
                        D("g", {
                            transform: "translate(24 31.67)"
                        }, [
                            D(
                                "ellipse", {
                                    "fill-opacity": ".8",
                                    fill: "#F5F5F7",
                                    cx: "67.797",
                                    cy: "106.89",
                                    rx: "67.797",
                                    ry: "12.668",
                                },
                                null,
                            ),
                            D(
                                "path", {
                                    d: "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z",
                                    fill: "#AEB8C2",
                                },
                                null,
                            ),
                            D(
                                "path", {
                                    d: "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",
                                    fill: "url(#linearGradient-1)",
                                    transform: "translate(13.56)",
                                },
                                null,
                            ),
                            D(
                                "path", {
                                    d: "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z",
                                    fill: "#F5F5F7",
                                },
                                null,
                            ),
                            D(
                                "path", {
                                    d: "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z",
                                    fill: "#DCE0E6",
                                },
                                null,
                            ),
                        ]),
                        D(
                            "path", {
                                d: "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z",
                                fill: "#DCE0E6",
                            },
                            null,
                        ),
                        D("g", {
                            transform: "translate(149.65 15.383)",
                            fill: "#FFF"
                        }, [
                            D(
                                "ellipse", {
                                    cx: "20.654",
                                    cy: "3.167",
                                    rx: "2.849",
                                    ry: "2.815"
                                },
                                null,
                            ),
                            D(
                                "path", {
                                    d: "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"
                                },
                                null,
                            ),
                        ]),
                    ]),
                ],
            );
    },
});
Ss.PRESENTED_IMAGE_DEFAULT = !0;
const zd = Ge({
    compatConfig: {
        MODE: 3
    },
    setup() {
        const [, e] = Ti(),
            t = V(() => {
                const {
                    colorFill: n,
                    colorFillTertiary: r,
                    colorFillQuaternary: o,
                    colorBgContainer: s,
                } = e.value;
                return {
                    borderColor: new Je(n).onBackground(s).toHexString(),
                    shadowColor: new Je(r).onBackground(s).toHexString(),
                    contentColor: new Je(o).onBackground(s).toHexString(),
                };
            });
        return () =>
            D(
                "svg", {
                    width: "64",
                    height: "41",
                    viewBox: "0 0 64 41",
                    xmlns: "http://www.w3.org/2000/svg",
                },
                [
                    D(
                        "g", {
                            transform: "translate(0 1)",
                            fill: "none",
                            "fill-rule": "evenodd",
                        },
                        [
                            D(
                                "ellipse", {
                                    fill: t.value.shadowColor,
                                    cx: "32",
                                    cy: "33",
                                    rx: "32",
                                    ry: "7",
                                },
                                null,
                            ),
                            D("g", {
                                "fill-rule": "nonzero",
                                stroke: t.value.borderColor
                            }, [
                                D(
                                    "path", {
                                        d: "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z",
                                    },
                                    null,
                                ),
                                D(
                                    "path", {
                                        d: "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
                                        fill: t.value.contentColor,
                                    },
                                    null,
                                ),
                            ]),
                        ],
                    ),
                ],
            );
    },
});
zd.PRESENTED_IMAGE_SIMPLE = !0;
const n1 = (e) => {
        const {
            componentCls: t,
            margin: n,
            marginXS: r,
            marginXL: o,
            fontSize: s,
            lineHeight: u,
        } = e;
        return {
            [t]: {
                marginInline: r,
                fontSize: s,
                lineHeight: u,
                textAlign: "center",
                [`${t}-image`]: {
                    height: e.emptyImgHeight,
                    marginBottom: r,
                    opacity: e.opacityImage,
                    img: {
                        height: "100%"
                    },
                    svg: {
                        height: "100%",
                        margin: "auto"
                    },
                },
                [`${t}-footer`]: {
                    marginTop: n
                },
                "&-normal": {
                    marginBlock: o,
                    color: e.colorTextDisabled,
                    [`${t}-image`]: {
                        height: e.emptyImgHeightMD
                    },
                },
                "&-small": {
                    marginBlock: r,
                    color: e.colorTextDisabled,
                    [`${t}-image`]: {
                        height: e.emptyImgHeightSM
                    },
                },
            },
        };
    },
    r1 = ws("Empty", (e) => {
        const {
            componentCls: t,
            controlHeightLG: n
        } = e,
        r = Ci(e, {
            emptyImgCls: `${t}-img`,
            emptyImgHeight: 2.5 * n,
            emptyImgHeightMD: n,
            emptyImgHeightSM: 0.875 * n,
        });
        return [n1(r)];
    });
var o1 = function(e, t) {
    var n = {};
    for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function") {
        var o = 0;
        for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
            t.indexOf(r[o]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
            (n[r[o]] = e[r[o]]);
    }
    return n;
};
const i1 = () => ({
        prefixCls: String,
        imageStyle: gt(),
        image: Pa(),
        description: Pa(),
    }),
    Ha = Ge({
        name: "AEmpty",
        compatConfig: {
            MODE: 3
        },
        inheritAttrs: !1,
        props: i1(),
        setup(e, t) {
            let {
                slots: n = {},
                attrs: r
            } = t;
            const {
                direction: o,
                prefixCls: s
            } = Ii("empty", e),
                [u, d] = r1(s);
            return () => {
                var h, p;
                const g = s.value,
                    v = z(z({}, e), r),
                    {
                        image: w = ((h = n.image) === null || h === void 0 ?
                            void 0 :
                            h.call(n)) || io(Ss),
                        description: C = ((p = n.description) === null || p === void 0 ?
                            void 0 :
                            p.call(n)) || void 0,
                        imageStyle: k,
                        class: P = "",
                    } = v,
                    B = o1(v, ["image", "description", "imageStyle", "class"]),
                    U = typeof w == "function" ? w() : w,
                    R =
                    typeof U == "object" &&
                    "type" in U &&
                    U.type.PRESENTED_IMAGE_SIMPLE;
                return u(
                    D(
                        id, {
                            componentName: "Empty",
                            children: (K) => {
                                const Y = C !== void 0 ? C : K.description;
                                let W = null;
                                return (
                                    (W =
                                        typeof U == "string" ?
                                        D(
                                            "img", {
                                                alt: typeof Y == "string" ? Y : "empty",
                                                src: U
                                            },
                                            null,
                                        ) :
                                        U),
                                    D(
                                        "div",
                                        Ve({
                                                class: St(g, P, d.value, {
                                                    [`${g}-normal`]: R,
                                                    [`${g}-rtl`]: o.value === "rtl",
                                                }),
                                            },
                                            B,
                                        ),
                                        [
                                            D("div", {
                                                class: `${g}-image`,
                                                style: k
                                            }, [W]),
                                            Y && D("p", {
                                                class: `${g}-description`
                                            }, [Y]),
                                            n.default &&
                                            D("div", {
                                                class: `${g}-footer`
                                            }, [Ql(n.default())]),
                                        ],
                                    )
                                );
                            },
                        },
                        null,
                    ),
                );
            };
        },
    });
((Ha.PRESENTED_IMAGE_DEFAULT = () => io(Ss)),
    (Ha.PRESENTED_IMAGE_SIMPLE = () => io(zd)));
const Vr = hs(Ha),
    Ld = (e) => {
        const {
            prefixCls: t
        } = Ii("empty", e);
        return ((n) => {
            switch (n) {
                case "Table":
                case "List":
                    return D(Vr, {
                        image: Vr.PRESENTED_IMAGE_SIMPLE
                    }, null);
                case "Select":
                case "TreeSelect":
                case "Cascader":
                case "Transfer":
                case "Mentions":
                    return D(
                        Vr, {
                            image: Vr.PRESENTED_IMAGE_SIMPLE,
                            class: `${t.value}-small`
                        },
                        null,
                    );
                default:
                    return D(Vr, null, null);
            }
        })(e.componentName);
    };

function a1(e) {
    return D(Ld, {
        componentName: e
    }, null);
}
const jd = Symbol("SizeContextKey"),
    Md = () => Kt(jd, Ke(void 0)),
    s1 = (e) => {
        const t = Md();
        return (
            En(
                jd,
                V(() => e.value || t.value),
            ),
            e
        );
    },
    Ii = (e, t) => {
        const n = Md(),
            r = rd(),
            o = Kt(
                gs,
                z(z({}, ed), {
                    renderEmpty: (O) => io(Ld, {
                        componentName: O
                    })
                }),
            ),
            s = V(() => o.getPrefixCls(e, t.prefixCls)),
            u = V(() => {
                var O, ee;
                return (O = t.direction) !== null && O !== void 0 ?
                    O :
                    (ee = o.direction) === null || ee === void 0 ?
                    void 0 :
                    ee.value;
            }),
            d = V(() => {
                var O;
                return (O = t.iconPrefixCls) !== null && O !== void 0 ?
                    O :
                    o.iconPrefixCls.value;
            }),
            h = V(() => o.getPrefixCls()),
            p = V(() => {
                var O;
                return (O = o.autoInsertSpaceInButton) === null || O === void 0 ?
                    void 0 :
                    O.value;
            }),
            g = o.renderEmpty,
            v = o.space,
            w = o.pageHeader,
            C = o.form,
            k = V(() => {
                var O, ee;
                return (O = t.getTargetContainer) !== null && O !== void 0 ?
                    O :
                    (ee = o.getTargetContainer) === null || ee === void 0 ?
                    void 0 :
                    ee.value;
            }),
            P = V(() => {
                var O, ee, me;
                return (ee =
                        (O = t.getContainer) !== null && O !== void 0 ?
                        O :
                        t.getPopupContainer) !== null && ee !== void 0 ?
                    ee :
                    (me = o.getPopupContainer) === null || me === void 0 ?
                    void 0 :
                    me.value;
            }),
            B = V(() => {
                var O, ee;
                return (O = t.dropdownMatchSelectWidth) !== null && O !== void 0 ?
                    O :
                    (ee = o.dropdownMatchSelectWidth) === null || ee === void 0 ?
                    void 0 :
                    ee.value;
            }),
            U = V(() => {
                var O;
                return (
                    (t.virtual === void 0 ?
                        ((O = o.virtual) === null || O === void 0 ? void 0 : O.value) !==
                        !1 :
                        t.virtual !== !1) && B.value !== !1
                );
            }),
            R = V(() => t.size || n.value),
            K = V(() => {
                var O, ee, me;
                return (O = t.autocomplete) !== null && O !== void 0 ?
                    O :
                    (me =
                        (ee = o.input) === null || ee === void 0 ?
                        void 0 :
                        ee.value) === null || me === void 0 ?
                    void 0 :
                    me.autocomplete;
            }),
            Y = V(() => {
                var O;
                return (O = t.disabled) !== null && O !== void 0 ? O : r.value;
            }),
            W = V(() => {
                var O;
                return (O = t.csp) !== null && O !== void 0 ? O : o.csp;
            }),
            I = V(() => {
                var O, ee;
                return (O = t.wave) !== null && O !== void 0 ?
                    O :
                    (ee = o.wave) === null || ee === void 0 ?
                    void 0 :
                    ee.value;
            });
        return {
            configProvider: o,
            prefixCls: s,
            direction: u,
            size: R,
            getTargetContainer: k,
            getPopupContainer: P,
            space: v,
            pageHeader: w,
            form: C,
            autoInsertSpaceInButton: p,
            renderEmpty: g,
            virtual: U,
            dropdownMatchSelectWidth: B,
            rootPrefixCls: h,
            getPrefixCls: o.getPrefixCls,
            autocomplete: K,
            csp: W,
            iconPrefixCls: d,
            disabled: Y,
            select: o.select,
            wave: I,
        };
    };

function c1(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r));
    }
}

function Dd(e, t, n) {
    return (n && c1(e, n), e);
}

function ti() {
    return (ti =
        Object.assign ||
        function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }).apply(this, arguments);
}

function Fd(e, t) {
    ((e.prototype = Object.create(t.prototype)),
        (e.prototype.constructor = e),
        (e.__proto__ = t));
}

function Hd(e, t) {
    if (e == null) return {};
    var n,
        r,
        o = {},
        s = Object.keys(e);
    for (r = 0; r < s.length; r++) t.indexOf((n = s[r])) >= 0 || (o[n] = e[n]);
    return o;
}

function Ru(e) {
    return (
        ((t = e) != null && typeof t == "object" && Array.isArray(t) === !1) == 1 &&
        Object.prototype.toString.call(e) === "[object Object]"
    );
    var t;
}
var Bd = Object.prototype,
    Ud = Bd.toString,
    u1 = Bd.hasOwnProperty,
    qd = /^\s*function (\w+)/;

function $u(e) {
    var t,
        n = (t = e == null ? void 0 : e.type) !== null && t !== void 0 ? t : e;
    if (n) {
        var r = n.toString().match(qd);
        return r ? r[1] : "";
    }
    return "";
}
var Bn = function(e) {
        var t, n;
        return (
            Ru(e) !== !1 &&
            typeof(t = e.constructor) == "function" &&
            Ru((n = t.prototype)) !== !1 &&
            n.hasOwnProperty("isPrototypeOf") !== !1
        );
    },
    l1 = function(e) {
        return e;
    },
    bt = l1,
    lo = function(e, t) {
        return u1.call(e, t);
    },
    d1 =
    Number.isInteger ||
    function(e) {
        return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
    },
    br =
    Array.isArray ||
    function(e) {
        return Ud.call(e) === "[object Array]";
    },
    wr = function(e) {
        return Ud.call(e) === "[object Function]";
    },
    pi = function(e) {
        return Bn(e) && lo(e, "_vueTypes_name");
    },
    Wd = function(e) {
        return (
            Bn(e) &&
            (lo(e, "type") || ["_vueTypes_name", "validator", "default", "required"].some(
                function(t) {
                    return lo(e, t);
                },
            ))
        );
    };

function _s(e, t) {
    return Object.defineProperty(e.bind(t), "__original", {
        value: e
    });
}

function Wn(e, t, n) {
    var r,
        o = !0,
        s = "";
    r = Bn(e) ? e : {
        type: e
    };
    var u = pi(r) ? r._vueTypes_name + " - " : "";
    if (Wd(r) && r.type !== null) {
        if (r.type === void 0 || r.type === !0 || (!r.required && t === void 0))
            return o;
        br(r.type) ?
            ((o = r.type.some(function(g) {
                    return Wn(g, t) === !0;
                })),
                (s = r.type
                    .map(function(g) {
                        return $u(g);
                    })
                    .join(" or "))) :
            (o =
                (s = $u(r)) === "Array" ?
                br(t) :
                s === "Object" ?
                Bn(t) :
                s === "String" ||
                s === "Number" ||
                s === "Boolean" ||
                s === "Function" ?
                (function(g) {
                    if (g == null) return "";
                    var v = g.constructor.toString().match(qd);
                    return v ? v[1] : "";
                })(t) === s :
                t instanceof r.type);
    }
    if (!o) return u + 'value "' + t + '" should be of type "' + s + '"';
    if (lo(r, "validator") && wr(r.validator)) {
        var d = bt,
            h = [];
        if (
            ((bt = function(g) {
                    h.push(g);
                }),
                (o = r.validator(t)),
                (bt = d),
                !o)
        ) {
            var p =
                (h.length > 1 ? "* " : "") +
                h.join(`
* `);
            return ((h.length = 0), p);
        }
    }
    return o;
}

function wt(e, t) {
    var n = Object.defineProperties(t, {
            _vueTypes_name: {
                value: e,
                writable: !0
            },
            isRequired: {
                get: function() {
                    return ((this.required = !0), this);
                },
            },
            def: {
                value: function(o) {
                    return o !== void 0 || this.default ?
                        wr(o) || Wn(this, o) === !0 ?
                        ((this.default = br(o) ?
                                function() {
                                    return [].concat(o);
                                } :
                                Bn(o) ?
                                function() {
                                    return Object.assign({}, o);
                                } :
                                o),
                            this) :
                        (bt(
                                this._vueTypes_name + ' - invalid default value: "' + o + '"',
                            ),
                            this) :
                        this;
                },
            },
        }),
        r = n.validator;
    return (wr(r) && (n.validator = _s(r, n)), n);
}

function Jt(e, t) {
    var n = wt(e, t);
    return Object.defineProperty(n, "validate", {
        value: function(r) {
            return (
                wr(this.validator) &&
                bt(
                    this._vueTypes_name +
                    ` - calling .validate() will overwrite the current custom validator function. Validator info:
` +
                    JSON.stringify(this),
                ),
                (this.validator = _s(r, this)),
                this
            );
        },
    });
}

function Nu(e, t, n) {
    var r,
        o,
        s =
        ((r = t),
            (o = {}),
            Object.getOwnPropertyNames(r).forEach(function(v) {
                o[v] = Object.getOwnPropertyDescriptor(r, v);
            }),
            Object.defineProperties({}, o));
    if (((s._vueTypes_name = e), !Bn(n))) return s;
    var u,
        d,
        h = n.validator,
        p = Hd(n, ["validator"]);
    if (wr(h)) {
        var g = s.validator;
        (g && (g = (d = (u = g).__original) !== null && d !== void 0 ? d : u),
            (s.validator = _s(
                g ?
                function(v) {
                    return g.call(this, v) && h.call(this, v);
                } :
                h,
                s,
            )));
    }
    return Object.assign(s, p);
}

function Pi(e) {
    return e.replace(/^(?!\s*$)/gm, "  ");
}
var f1 = function() {
        return Jt("any", {});
    },
    p1 = function() {
        return Jt("function", {
            type: Function
        });
    },
    h1 = function() {
        return Jt("boolean", {
            type: Boolean
        });
    },
    m1 = function() {
        return Jt("string", {
            type: String
        });
    },
    g1 = function() {
        return Jt("number", {
            type: Number
        });
    },
    v1 = function() {
        return Jt("array", {
            type: Array
        });
    },
    y1 = function() {
        return Jt("object", {
            type: Object
        });
    },
    b1 = function() {
        return wt("integer", {
            type: Number,
            validator: function(e) {
                return d1(e);
            },
        });
    },
    w1 = function() {
        return wt("symbol", {
            validator: function(e) {
                return typeof e == "symbol";
            },
        });
    };

function S1(e, t) {
    if (
        (t === void 0 && (t = "custom validation failed"), typeof e != "function")
    )
        throw new TypeError(
            "[VueTypes error]: You must provide a function as argument",
        );
    return wt(e.name || "<<anonymous function>>", {
        validator: function(n) {
            var r = e(n);
            return (r || bt(this._vueTypes_name + " - " + t), r);
        },
    });
}

function _1(e) {
    if (!br(e))
        throw new TypeError(
            "[VueTypes error]: You must provide an array as argument.",
        );
    var t = 'oneOf - value should be one of "' + e.join('", "') + '".',
        n = e.reduce(function(r, o) {
            if (o != null) {
                var s = o.constructor;
                r.indexOf(s) === -1 && r.push(s);
            }
            return r;
        }, []);
    return wt("oneOf", {
        type: n.length > 0 ? n : void 0,
        validator: function(r) {
            var o = e.indexOf(r) !== -1;
            return (o || bt(t), o);
        },
    });
}

function x1(e) {
    if (!br(e))
        throw new TypeError(
            "[VueTypes error]: You must provide an array as argument",
        );
    for (var t = !1, n = [], r = 0; r < e.length; r += 1) {
        var o = e[r];
        if (Wd(o)) {
            if (pi(o) && o._vueTypes_name === "oneOf") {
                n = n.concat(o.type);
                continue;
            }
            if ((wr(o.validator) && (t = !0), o.type !== !0 && o.type)) {
                n = n.concat(o.type);
                continue;
            }
        }
        n.push(o);
    }
    return (
        (n = n.filter(function(s, u) {
            return n.indexOf(s) === u;
        })),
        wt(
            "oneOfType",
            t ?
            {
                type: n,
                validator: function(s) {
                    var u = [],
                        d = e.some(function(h) {
                            var p = Wn(
                                pi(h) && h._vueTypes_name === "oneOf" ? h.type || null : h,
                                s,
                            );
                            return (typeof p == "string" && u.push(p), p === !0);
                        });
                    return (
                        d ||
                        bt(
                            "oneOfType - provided value does not match any of the " +
                            u.length +
                            ` passed-in validators:
` +
                            Pi(
                                u.join(`
`),
                            ),
                        ),
                        d
                    );
                },
            } :
            {
                type: n
            },
        )
    );
}

function O1(e) {
    return wt("arrayOf", {
        type: Array,
        validator: function(t) {
            var n,
                r = t.every(function(o) {
                    return (n = Wn(e, o)) === !0;
                });
            return (
                r ||
                bt(
                    `arrayOf - value validation error:
` + Pi(n),
                ),
                r
            );
        },
    });
}

function k1(e) {
    return wt("instanceOf", {
        type: e
    });
}

function E1(e) {
    return wt("objectOf", {
        type: Object,
        validator: function(t) {
            var n,
                r = Object.keys(t).every(function(o) {
                    return (n = Wn(e, t[o])) === !0;
                });
            return (
                r ||
                bt(
                    `objectOf - value validation error:
` + Pi(n),
                ),
                r
            );
        },
    });
}

function C1(e) {
    var t = Object.keys(e),
        n = t.filter(function(o) {
            var s;
            return !!(!((s = e[o]) === null || s === void 0) && s.required);
        }),
        r = wt("shape", {
            type: Object,
            validator: function(o) {
                var s = this;
                if (!Bn(o)) return !1;
                var u = Object.keys(o);
                if (
                    n.length > 0 &&
                    n.some(function(h) {
                        return u.indexOf(h) === -1;
                    })
                ) {
                    var d = n.filter(function(h) {
                        return u.indexOf(h) === -1;
                    });
                    return (
                        bt(
                            d.length === 1 ?
                            'shape - required property "' + d[0] + '" is not defined.' :
                            'shape - required properties "' +
                            d.join('", "') +
                            '" are not defined.',
                        ),
                        !1
                    );
                }
                return u.every(function(h) {
                    if (t.indexOf(h) === -1)
                        return (
                            s._vueTypes_isLoose === !0 ||
                            (bt(
                                    'shape - shape definition does not include a "' +
                                    h +
                                    '" property. Allowed keys: "' +
                                    t.join('", "') +
                                    '".',
                                ),
                                !1)
                        );
                    var p = Wn(e[h], o[h]);
                    return (
                        typeof p == "string" &&
                        bt(
                            'shape - "' +
                            h +
                            `" property validation error:
 ` +
                            Pi(p),
                        ),
                        p === !0
                    );
                });
            },
        });
    return (
        Object.defineProperty(r, "_vueTypes_isLoose", {
            writable: !0,
            value: !1
        }),
        Object.defineProperty(r, "loose", {
            get: function() {
                return ((this._vueTypes_isLoose = !0), this);
            },
        }),
        r
    );
}
var Gt = (function() {
    function e() {}
    return (
        (e.extend = function(t) {
            var n = this;
            if (br(t))
                return (
                    t.forEach(function(v) {
                        return n.extend(v);
                    }),
                    this
                );
            var r = t.name,
                o = t.validate,
                s = o !== void 0 && o,
                u = t.getter,
                d = u !== void 0 && u,
                h = Hd(t, ["name", "validate", "getter"]);
            if (lo(this, r))
                throw new TypeError(
                    '[VueTypes error]: Type "' + r + '" already defined',
                );
            var p,
                g = h.type;
            return pi(g) ?
                (delete h.type,
                    Object.defineProperty(
                        this,
                        r,
                        d ?
                        {
                            get: function() {
                                return Nu(r, g, h);
                            },
                        } :
                        {
                            value: function() {
                                var v,
                                    w = Nu(r, g, h);
                                return (
                                    w.validator &&
                                    (w.validator = (v = w.validator).bind.apply(
                                        v,
                                        [w].concat([].slice.call(arguments)),
                                    )),
                                    w
                                );
                            },
                        },
                    )) :
                ((p = d ?
                        {
                            get: function() {
                                var v = Object.assign({}, h);
                                return s ? Jt(r, v) : wt(r, v);
                            },
                            enumerable: !0,
                        } :
                        {
                            value: function() {
                                var v,
                                    w,
                                    C = Object.assign({}, h);
                                return (
                                    (v = s ? Jt(r, C) : wt(r, C)),
                                    C.validator &&
                                    (v.validator = (w = C.validator).bind.apply(
                                        w,
                                        [v].concat([].slice.call(arguments)),
                                    )),
                                    v
                                );
                            },
                            enumerable: !0,
                        }),
                    Object.defineProperty(this, r, p));
        }),
        Dd(e, null, [{
                key: "any",
                get: function() {
                    return f1();
                },
            },
            {
                key: "func",
                get: function() {
                    return p1().def(this.defaults.func);
                },
            },
            {
                key: "bool",
                get: function() {
                    return h1().def(this.defaults.bool);
                },
            },
            {
                key: "string",
                get: function() {
                    return m1().def(this.defaults.string);
                },
            },
            {
                key: "number",
                get: function() {
                    return g1().def(this.defaults.number);
                },
            },
            {
                key: "array",
                get: function() {
                    return v1().def(this.defaults.array);
                },
            },
            {
                key: "object",
                get: function() {
                    return y1().def(this.defaults.object);
                },
            },
            {
                key: "integer",
                get: function() {
                    return b1().def(this.defaults.integer);
                },
            },
            {
                key: "symbol",
                get: function() {
                    return w1();
                },
            },
        ]),
        e
    );
})();

function Gd(e) {
    var t;
    return (
        e === void 0 &&
        (e = {
            func: function() {},
            bool: !0,
            string: "",
            number: 0,
            array: function() {
                return [];
            },
            object: function() {
                return {};
            },
            integer: 0,
        }),
        ((t = (function(n) {
            function r() {
                return n.apply(this, arguments) || this;
            }
            return (
                Fd(r, n),
                Dd(r, null, [{
                    key: "sensibleDefaults",
                    get: function() {
                        return ti({}, this.defaults);
                    },
                    set: function(o) {
                        this.defaults = o !== !1 ? ti({}, o !== !0 ? o : e) : {};
                    },
                }, ]),
                r
            );
        })(Gt)).defaults = ti({}, e)),
        t
    );
}
((Gt.defaults = {}),
    (Gt.custom = S1),
    (Gt.oneOf = _1),
    (Gt.instanceOf = k1),
    (Gt.oneOfType = x1),
    (Gt.arrayOf = O1),
    (Gt.objectOf = E1),
    (Gt.shape = C1),
    (Gt.utils = {
        validate: function(e, t) {
            return Wn(t, e) === !0;
        },
        toType: function(e, t, n) {
            return (n === void 0 && (n = !1), n ? Jt(e, t) : wt(e, t));
        },
    }),
    (function(e) {
        Fd(function() {
            return e.apply(this, arguments) || this;
        }, e);
    })(Gd()));
const Zd = Gd({
    func: void 0,
    bool: void 0,
    string: void 0,
    number: void 0,
    array: void 0,
    object: void 0,
    integer: void 0,
});

function T1(e) {
    let {
        prefixCls: t,
        animation: n,
        transitionName: r
    } = e;
    return n ? {
        name: `${t}-${n}`
    } : r ? {
        name: r
    } : {};
}
(Zd.extend([{
            name: "looseBool",
            getter: !0,
            type: Boolean,
            default: void 0
        },
        {
            name: "style",
            getter: !0,
            type: [String, Object],
            default: void 0
        },
        {
            name: "VueNode",
            getter: !0,
            type: null
        },
    ]),
    vy("bottomLeft", "bottomRight", "topLeft", "topRight"));
const X2 = (e) =>
    e === void 0 || (e !== "topLeft" && e !== "topRight") ?
    "slide-up" :
    "slide-down",
    V2 = function(e) {
        return z(
            e ?
            {
                name: e,
                appear: !0,
                enterFromClass: `${e}-enter ${e}-enter-prepare ${e}-enter-start`,
                enterActiveClass: `${e}-enter ${e}-enter-prepare`,
                enterToClass: `${e}-enter ${e}-enter-active`,
                leaveFromClass: ` ${e}-leave`,
                leaveActiveClass: `${e}-leave ${e}-leave-active`,
                leaveToClass: `${e}-leave ${e}-leave-active`,
            } :
            {
                css: !1
            },
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        );
    },
    Xd = function(e) {
        return z(
            e ?
            {
                name: e,
                appear: !0,
                appearActiveClass: `${e}`,
                appearToClass: `${e}-appear ${e}-appear-active`,
                enterFromClass: `${e}-appear ${e}-enter ${e}-appear-prepare ${e}-enter-prepare`,
                enterActiveClass: `${e}`,
                enterToClass: `${e}-enter ${e}-appear ${e}-appear-active ${e}-enter-active`,
                leaveActiveClass: `${e} ${e}-leave`,
                leaveToClass: `${e}-leave-active`,
            } :
            {
                css: !1
            },
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        );
    },
    J2 = (e, t, n) => (n !== void 0 ? n : `${e}-${t}`),
    Vd = Symbol("PortalContextKey"),
    I1 = function(e) {
        En(Vd, {
            inTriggerContext: (arguments.length > 1 && arguments[1] !== void 0 ?
                arguments[1] :
                {
                    inTriggerContext: !0
                }
            ).inTriggerContext,
            shouldRender: V(() => {
                const {
                    sPopupVisible: t,
                    popupRef: n,
                    forceRender: r,
                    autoDestroy: o,
                } = e || {};
                let s = !1;
                return ((t || n || r) && (s = !0), !t && o && (s = !1), s);
            }),
        });
    },
    P1 = () => {
        I1({}, {
            inTriggerContext: !1
        });
        const e = Kt(Vd, {
            shouldRender: V(() => !1),
            inTriggerContext: !1
        });
        return {
            shouldRender: V(() => e.shouldRender.value || e.inTriggerContext === !1),
        };
    },
    A1 = Ge({
        compatConfig: {
            MODE: 3
        },
        name: "Portal",
        inheritAttrs: !1,
        props: {
            getContainer: Zd.func.isRequired,
            didUpdate: Function
        },
        setup(e, t) {
            let n, {
                    slots: r
                } = t,
                o = !0;
            const {
                shouldRender: s
            } = P1();

            function u() {
                s.value && (n = e.getContainer());
            }
            (Mp(() => {
                    ((o = !1), u());
                }),
                gi(() => {
                    n || u();
                }));
            const d = Yt(s, () => {
                (s.value && !n && (n = e.getContainer()), n && d());
            });
            return (
                Dp(() => {
                    fl(() => {
                        var h;
                        s.value &&
                            ((h = e.didUpdate) === null || h === void 0 || h.call(e, e));
                    });
                }),
                () => {
                    var h;
                    return s.value ?
                        o ?
                        (h = r.default) === null || h === void 0 ?
                        void 0 :
                        h.call(r) :
                        n ?
                        D(pl, {
                            to: n
                        }, r) :
                        null :
                        null;
                }
            );
        },
    });
var R1 = Symbol("iconContext"),
    Jd = function() {
        return Kt(R1, {
            prefixCls: Ke("anticon"),
            rootClassName: Ke(""),
            csp: Ke(),
        });
    };

function xs() {
    return !(
        typeof window > "u" ||
        !window.document ||
        !window.document.createElement
    );
}

function $1(e, t) {
    return !!e && !!e.contains && e.contains(t);
}
var zu = "data-vc-order",
    N1 = "vc-icon-key",
    Ba = new Map();

function Kd() {
    var e = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {})
        .mark;
    return e ? (e.startsWith("data-") ? e : "data-".concat(e)) : N1;
}

function Os(e) {
    return e.attachTo ?
        e.attachTo :
        document.querySelector("head") || document.body;
}

function z1(e) {
    return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}

function Yd(e) {
    return Array.from((Ba.get(e) || e).children).filter(function(t) {
        return t.tagName === "STYLE";
    });
}

function Qd(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!xs()) return null;
    var n = t.csp,
        r = t.prepend,
        o = document.createElement("style");
    (o.setAttribute(zu, z1(r)),
        n && n.nonce && (o.nonce = n.nonce),
        (o.innerHTML = e));
    var s = Os(t),
        u = s.firstChild;
    if (r) {
        if (r === "queue") {
            var d = Yd(s).filter(function(h) {
                return ["prepend", "prependQueue"].includes(h.getAttribute(zu));
            });
            if (d.length) return (s.insertBefore(o, d[d.length - 1].nextSibling), o);
        }
        s.insertBefore(o, u);
    } else s.appendChild(o);
    return o;
}

function L1(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return Yd(Os(t)).find(function(n) {
        return n.getAttribute(Kd(t)) === e;
    });
}

function j1(e, t) {
    var n = Ba.get(e);
    if (!n || !$1(document, n)) {
        var r = Qd("", t),
            o = r.parentNode;
        (Ba.set(e, o), e.removeChild(r));
    }
}

function M1(e, t) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    j1(Os(n), n);
    var r = L1(t, n);
    if (r)
        return (
            n.csp &&
            n.csp.nonce &&
            r.nonce !== n.csp.nonce &&
            (r.nonce = n.csp.nonce),
            r.innerHTML !== e && (r.innerHTML = e),
            r
        );
    var o = Qd(e, n);
    return (o.setAttribute(Kd(n), t), o);
}

function Lu(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? Object(arguments[t]) : {},
            r = Object.keys(n);
        (typeof Object.getOwnPropertySymbols == "function" &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function(o) {
                    return Object.getOwnPropertyDescriptor(n, o).enumerable;
                }),
            )),
            r.forEach(function(o) {
                D1(e, o, n[o]);
            }));
    }
    return e;
}

function D1(e, t, n) {
    return (
        t in e ?
        Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
        }) :
        (e[t] = n),
        e
    );
}

function ju(e) {
    return (
        typeof e == "object" &&
        typeof e.name == "string" &&
        typeof e.theme == "string" &&
        (typeof e.icon == "object" || typeof e.icon == "function")
    );
}

function ef(e, t, n) {
    return io(
        e.tag,
        n ? Lu({
            key: t
        }, n, e.attrs) : Lu({
            key: t
        }, e.attrs),
        (e.children || []).map(function(r, o) {
            return ef(r, "".concat(t, "-").concat(e.tag, "-").concat(o));
        }),
    );
}

function tf(e) {
    return Hn(e)[0];
}

function nf(e) {
    return e ? (Array.isArray(e) ? e : [e]) : [];
}
var F1 = `
.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`;

function rf(e) {
    return e && e.getRootNode && e.getRootNode();
}

function H1(e) {
    return !!xs() && rf(e) instanceof ShadowRoot;
}

function B1(e) {
    return H1(e) ? rf(e) : null;
}
var U1 = function() {
        var e = Jd(),
            t = e.prefixCls,
            n = e.csp,
            r = dl(),
            o = F1;
        (t && (o = o.replace(/anticon/g, t.value)),
            fl(function() {
                if (xs()) {
                    var s = B1(r.vnode.el);
                    M1(o, "@ant-design-vue-icons", {
                        prepend: !0,
                        csp: n.value,
                        attachTo: s,
                    });
                }
            }));
    },
    q1 = ["icon", "primaryColor", "secondaryColor"];

function W1(e, t) {
    if (e == null) return {};
    var n,
        r,
        o = G1(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for (r = 0; r < s.length; r++)
            ((n = s[r]),
                t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])));
    }
    return o;
}

function G1(e, t) {
    if (e == null) return {};
    var n,
        r,
        o = {},
        s = Object.keys(e);
    for (r = 0; r < s.length; r++)
        ((n = s[r]), t.indexOf(n) >= 0 || (o[n] = e[n]));
    return o;
}

function ni(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? Object(arguments[t]) : {},
            r = Object.keys(n);
        (typeof Object.getOwnPropertySymbols == "function" &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function(o) {
                    return Object.getOwnPropertyDescriptor(n, o).enumerable;
                }),
            )),
            r.forEach(function(o) {
                Z1(e, o, n[o]);
            }));
    }
    return e;
}

function Z1(e, t, n) {
    return (
        t in e ?
        Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
        }) :
        (e[t] = n),
        e
    );
}
var no = fr({
    primaryColor: "#333",
    secondaryColor: "#E6E6E6",
    calculated: !1,
});

function X1(e) {
    var t = e.primaryColor,
        n = e.secondaryColor;
    ((no.primaryColor = t),
        (no.secondaryColor = n || tf(t)),
        (no.calculated = !!n));
}

function V1() {
    return ni({}, no);
}
var yn = function(e, t) {
    var n = ni({}, e, t.attrs),
        r = n.icon,
        o = n.primaryColor,
        s = n.secondaryColor,
        u = W1(n, q1),
        d = no;
    if (
        (o && (d = {
            primaryColor: o,
            secondaryColor: s || tf(o)
        }), ju(r), !ju(r))
    )
        return null;
    var h = r;
    return (
        h &&
        typeof h.icon == "function" &&
        (h = ni({}, h, {
            icon: h.icon(d.primaryColor, d.secondaryColor)
        })),
        ef(
            h.icon,
            "svg-".concat(h.name),
            ni({}, u, {
                "data-icon": h.name,
                width: "1em",
                height: "1em",
                fill: "currentColor",
                "aria-hidden": "true",
            }),
        )
    );
};

function J1(e, t) {
    return ew(e) || Q1(e, t) || Y1(e, t) || K1();
}

function K1() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}

function Y1(e, t) {
    if (e) {
        if (typeof e == "string") return Mu(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return (
            n === "Object" && e.constructor && (n = e.constructor.name),
            n === "Map" || n === "Set" ?
            Array.from(e) :
            n === "Arguments" ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ?
            Mu(e, t) :
            void 0
        );
    }
}

function Mu(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
}

function Q1(e, t) {
    var n =
        e == null ?
        null :
        (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
    if (n != null) {
        var r,
            o,
            s = [],
            u = !0,
            d = !1;
        try {
            for (
                n = n.call(e); !(u = (r = n.next()).done) && (s.push(r.value), !t || s.length !== t); u = !0
            );
        } catch (h) {
            ((d = !0), (o = h));
        } finally {
            try {
                u || n.return == null || n.return();
            } finally {
                if (d) throw o;
            }
        }
        return s;
    }
}

function ew(e) {
    if (Array.isArray(e)) return e;
}

function of(e) {
    var t = J1(nf(e), 2),
        n = t[0],
        r = t[1];
    return yn.setTwoToneColors({
        primaryColor: n,
        secondaryColor: r
    });
}

function tw() {
    var e = yn.getTwoToneColors();
    return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
((yn.props = {
        icon: Object,
        primaryColor: String,
        secondaryColor: String,
        focusable: String,
    }),
    (yn.inheritAttrs = !1),
    (yn.displayName = "IconBase"),
    (yn.getTwoToneColors = V1),
    (yn.setTwoToneColors = X1));
var nw = Ge({
        name: "InsertStyles",
        setup: function() {
            return (
                U1(),
                function() {
                    return null;
                }
            );
        },
    }),
    rw = [
        "class",
        "icon",
        "spin",
        "rotate",
        "tabindex",
        "twoToneColor",
        "onClick",
    ];

function ow(e, t) {
    return cw(e) || sw(e, t) || aw(e, t) || iw();
}

function iw() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}

function aw(e, t) {
    if (e) {
        if (typeof e == "string") return Du(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return (
            n === "Object" && e.constructor && (n = e.constructor.name),
            n === "Map" || n === "Set" ?
            Array.from(e) :
            n === "Arguments" ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ?
            Du(e, t) :
            void 0
        );
    }
}

function Du(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
}

function sw(e, t) {
    var n =
        e == null ?
        null :
        (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
    if (n != null) {
        var r,
            o,
            s = [],
            u = !0,
            d = !1;
        try {
            for (
                n = n.call(e); !(u = (r = n.next()).done) && (s.push(r.value), !t || s.length !== t); u = !0
            );
        } catch (h) {
            ((d = !0), (o = h));
        } finally {
            try {
                u || n.return == null || n.return();
            } finally {
                if (d) throw o;
            }
        }
        return s;
    }
}

function cw(e) {
    if (Array.isArray(e)) return e;
}

function Fu(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? Object(arguments[t]) : {},
            r = Object.keys(n);
        (typeof Object.getOwnPropertySymbols == "function" &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function(o) {
                    return Object.getOwnPropertyDescriptor(n, o).enumerable;
                }),
            )),
            r.forEach(function(o) {
                Kr(e, o, n[o]);
            }));
    }
    return e;
}

function Kr(e, t, n) {
    return (
        t in e ?
        Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
        }) :
        (e[t] = n),
        e
    );
}

function uw(e, t) {
    if (e == null) return {};
    var n,
        r,
        o = lw(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for (r = 0; r < s.length; r++)
            ((n = s[r]),
                t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])));
    }
    return o;
}

function lw(e, t) {
    if (e == null) return {};
    var n,
        r,
        o = {},
        s = Object.keys(e);
    for (r = 0; r < s.length; r++)
        ((n = s[r]), t.indexOf(n) >= 0 || (o[n] = e[n]));
    return o;
}
of(Nb.primary);
var it = function(e, t) {
    var n,
        r = Fu({}, e, t.attrs),
        o = r.class,
        s = r.icon,
        u = r.spin,
        d = r.rotate,
        h = r.tabindex,
        p = r.twoToneColor,
        g = r.onClick,
        v = uw(r, rw),
        w = Jd(),
        C = w.prefixCls,
        k = w.rootClassName,
        P =
        (Kr((n = {}), k.value, !!k.value),
            Kr(n, C.value, !0),
            Kr(n, "".concat(C.value, "-").concat(s.name), !!s.name),
            Kr(n, "".concat(C.value, "-spin"), !!u || s.name === "loading"),
            n),
        B = h;
    B === void 0 && g && (B = -1);
    var U = d ?
        {
            msTransform: "rotate(".concat(d, "deg)"),
            transform: "rotate(".concat(d, "deg)"),
        } :
        void 0,
        R = ow(nf(p), 2),
        K = R[0],
        Y = R[1];
    return D(
        "span",
        Fu({
            role: "img",
            "aria-label": s.name
        }, v, {
            onClick: g,
            class: [P, o],
            tabindex: B,
        }),
        [
            D(yn, {
                icon: s,
                primaryColor: K,
                secondaryColor: Y,
                style: U
            }, null),
            D(nw, null, null),
        ],
    );
};
((it.props = {
        spin: Boolean,
        rotate: Number,
        icon: Object,
        twoToneColor: [String, Array],
    }),
    (it.displayName = "AntdIcon"),
    (it.inheritAttrs = !1),
    (it.getTwoToneColor = tw),
    (it.setTwoToneColor = of));
var dw = {
    icon: {
        tag: "svg",
        attrs: {
            viewBox: "0 0 1024 1024",
            focusable: "false"
        },
        children: [{
            tag: "path",
            attrs: {
                d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z",
            },
        }, ],
    },
    name: "loading",
    theme: "outlined",
};

function Hu(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? Object(arguments[t]) : {},
            r = Object.keys(n);
        (typeof Object.getOwnPropertySymbols == "function" &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function(o) {
                    return Object.getOwnPropertyDescriptor(n, o).enumerable;
                }),
            )),
            r.forEach(function(o) {
                fw(e, o, n[o]);
            }));
    }
    return e;
}

function fw(e, t, n) {
    return (
        t in e ?
        Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
        }) :
        (e[t] = n),
        e
    );
}
var fo = function(e, t) {
    var n = Hu({}, e, t.attrs);
    return D(it, Hu({}, n, {
        icon: dw
    }), null);
};
((fo.displayName = "LoadingOutlined"), (fo.inheritAttrs = !1));
var pw = {
    icon: {
        tag: "svg",
        attrs: {
            "fill-rule": "evenodd",
            viewBox: "64 64 896 896",
            focusable: "false",
        },
        children: [{
            tag: "path",
            attrs: {
                d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z",
            },
        }, ],
    },
    name: "close",
    theme: "outlined",
};

function Bu(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? Object(arguments[t]) : {},
            r = Object.keys(n);
        (typeof Object.getOwnPropertySymbols == "function" &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function(o) {
                    return Object.getOwnPropertyDescriptor(n, o).enumerable;
                }),
            )),
            r.forEach(function(o) {
                hw(e, o, n[o]);
            }));
    }
    return e;
}

function hw(e, t, n) {
    return (
        t in e ?
        Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
        }) :
        (e[t] = n),
        e
    );
}
var po = function(e, t) {
    var n = Bu({}, e, t.attrs);
    return D(it, Bu({}, n, {
        icon: pw
    }), null);
};
((po.displayName = "CloseOutlined"), (po.inheritAttrs = !1));
var mw = {
    icon: {
        tag: "svg",
        attrs: {
            "fill-rule": "evenodd",
            viewBox: "64 64 896 896",
            focusable: "false",
        },
        children: [{
            tag: "path",
            attrs: {
                d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z",
            },
        }, ],
    },
    name: "close-circle",
    theme: "filled",
};

function Uu(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? Object(arguments[t]) : {},
            r = Object.keys(n);
        (typeof Object.getOwnPropertySymbols == "function" &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function(o) {
                    return Object.getOwnPropertyDescriptor(n, o).enumerable;
                }),
            )),
            r.forEach(function(o) {
                gw(e, o, n[o]);
            }));
    }
    return e;
}

function gw(e, t, n) {
    return (
        t in e ?
        Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
        }) :
        (e[t] = n),
        e
    );
}
var Sr = function(e, t) {
    var n = Uu({}, e, t.attrs);
    return D(it, Uu({}, n, {
        icon: mw
    }), null);
};
((Sr.displayName = "CloseCircleFilled"), (Sr.inheritAttrs = !1));
var vw = {
    icon: {
        tag: "svg",
        attrs: {
            viewBox: "64 64 896 896",
            focusable: "false"
        },
        children: [{
                tag: "path",
                attrs: {
                    d: "M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z",
                },
            },
            {
                tag: "path",
                attrs: {
                    d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z",
                },
            },
        ],
    },
    name: "check-circle",
    theme: "outlined",
};

function qu(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? Object(arguments[t]) : {},
            r = Object.keys(n);
        (typeof Object.getOwnPropertySymbols == "function" &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function(o) {
                    return Object.getOwnPropertyDescriptor(n, o).enumerable;
                }),
            )),
            r.forEach(function(o) {
                yw(e, o, n[o]);
            }));
    }
    return e;
}

function yw(e, t, n) {
    return (
        t in e ?
        Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
        }) :
        (e[t] = n),
        e
    );
}
var Ua = function(e, t) {
    var n = qu({}, e, t.attrs);
    return D(it, qu({}, n, {
        icon: vw
    }), null);
};
((Ua.displayName = "CheckCircleOutlined"), (Ua.inheritAttrs = !1));
var bw = {
    icon: {
        tag: "svg",
        attrs: {
            viewBox: "64 64 896 896",
            focusable: "false"
        },
        children: [{
                tag: "path",
                attrs: {
                    d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z",
                },
            },
            {
                tag: "path",
                attrs: {
                    d: "M464 688a48 48 0 1096 0 48 48 0 10-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z",
                },
            },
        ],
    },
    name: "exclamation-circle",
    theme: "outlined",
};

function Wu(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? Object(arguments[t]) : {},
            r = Object.keys(n);
        (typeof Object.getOwnPropertySymbols == "function" &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function(o) {
                    return Object.getOwnPropertyDescriptor(n, o).enumerable;
                }),
            )),
            r.forEach(function(o) {
                ww(e, o, n[o]);
            }));
    }
    return e;
}

function ww(e, t, n) {
    return (
        t in e ?
        Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
        }) :
        (e[t] = n),
        e
    );
}
var qa = function(e, t) {
    var n = Wu({}, e, t.attrs);
    return D(it, Wu({}, n, {
        icon: bw
    }), null);
};
((qa.displayName = "ExclamationCircleOutlined"), (qa.inheritAttrs = !1));
var Sw = {
    icon: {
        tag: "svg",
        attrs: {
            viewBox: "64 64 896 896",
            focusable: "false"
        },
        children: [{
                tag: "path",
                attrs: {
                    d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z",
                },
            },
            {
                tag: "path",
                attrs: {
                    d: "M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z",
                },
            },
        ],
    },
    name: "info-circle",
    theme: "outlined",
};

function Gu(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? Object(arguments[t]) : {},
            r = Object.keys(n);
        (typeof Object.getOwnPropertySymbols == "function" &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function(o) {
                    return Object.getOwnPropertyDescriptor(n, o).enumerable;
                }),
            )),
            r.forEach(function(o) {
                _w(e, o, n[o]);
            }));
    }
    return e;
}

function _w(e, t, n) {
    return (
        t in e ?
        Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
        }) :
        (e[t] = n),
        e
    );
}
var Wa = function(e, t) {
    var n = Gu({}, e, t.attrs);
    return D(it, Gu({}, n, {
        icon: Sw
    }), null);
};
((Wa.displayName = "InfoCircleOutlined"), (Wa.inheritAttrs = !1));
var xw = {
    icon: {
        tag: "svg",
        attrs: {
            "fill-rule": "evenodd",
            viewBox: "64 64 896 896",
            focusable: "false",
        },
        children: [{
            tag: "path",
            attrs: {
                d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm0 76c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm128.01 198.83c.03 0 .05.01.09.06l45.02 45.01a.2.2 0 01.05.09.12.12 0 010 .07c0 .02-.01.04-.05.08L557.25 512l127.87 127.86a.27.27 0 01.05.06v.02a.12.12 0 010 .07c0 .03-.01.05-.05.09l-45.02 45.02a.2.2 0 01-.09.05.12.12 0 01-.07 0c-.02 0-.04-.01-.08-.05L512 557.25 384.14 685.12c-.04.04-.06.05-.08.05a.12.12 0 01-.07 0c-.03 0-.05-.01-.09-.05l-45.02-45.02a.2.2 0 01-.05-.09.12.12 0 010-.07c0-.02.01-.04.06-.08L466.75 512 338.88 384.14a.27.27 0 01-.05-.06l-.01-.02a.12.12 0 010-.07c0-.03.01-.05.05-.09l45.02-45.02a.2.2 0 01.09-.05.12.12 0 01.07 0c.02 0 .04.01.08.06L512 466.75l127.86-127.86c.04-.05.06-.06.08-.06a.12.12 0 01.07 0z",
            },
        }, ],
    },
    name: "close-circle",
    theme: "outlined",
};

function Zu(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? Object(arguments[t]) : {},
            r = Object.keys(n);
        (typeof Object.getOwnPropertySymbols == "function" &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function(o) {
                    return Object.getOwnPropertyDescriptor(n, o).enumerable;
                }),
            )),
            r.forEach(function(o) {
                Ow(e, o, n[o]);
            }));
    }
    return e;
}

function Ow(e, t, n) {
    return (
        t in e ?
        Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
        }) :
        (e[t] = n),
        e
    );
}
var Ga = function(e, t) {
    var n = Zu({}, e, t.attrs);
    return D(it, Zu({}, n, {
        icon: xw
    }), null);
};
((Ga.displayName = "CloseCircleOutlined"), (Ga.inheritAttrs = !1));
var kw = {
    icon: {
        tag: "svg",
        attrs: {
            viewBox: "64 64 896 896",
            focusable: "false"
        },
        children: [{
            tag: "path",
            attrs: {
                d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z",
            },
        }, ],
    },
    name: "check-circle",
    theme: "filled",
};

function Xu(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? Object(arguments[t]) : {},
            r = Object.keys(n);
        (typeof Object.getOwnPropertySymbols == "function" &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function(o) {
                    return Object.getOwnPropertyDescriptor(n, o).enumerable;
                }),
            )),
            r.forEach(function(o) {
                Ew(e, o, n[o]);
            }));
    }
    return e;
}

function Ew(e, t, n) {
    return (
        t in e ?
        Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
        }) :
        (e[t] = n),
        e
    );
}
var _r = function(e, t) {
    var n = Xu({}, e, t.attrs);
    return D(it, Xu({}, n, {
        icon: kw
    }), null);
};
((_r.displayName = "CheckCircleFilled"), (_r.inheritAttrs = !1));
var Cw = {
    icon: {
        tag: "svg",
        attrs: {
            viewBox: "64 64 896 896",
            focusable: "false"
        },
        children: [{
            tag: "path",
            attrs: {
                d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z",
            },
        }, ],
    },
    name: "exclamation-circle",
    theme: "filled",
};

function Vu(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? Object(arguments[t]) : {},
            r = Object.keys(n);
        (typeof Object.getOwnPropertySymbols == "function" &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function(o) {
                    return Object.getOwnPropertyDescriptor(n, o).enumerable;
                }),
            )),
            r.forEach(function(o) {
                Tw(e, o, n[o]);
            }));
    }
    return e;
}

function Tw(e, t, n) {
    return (
        t in e ?
        Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
        }) :
        (e[t] = n),
        e
    );
}
var xr = function(e, t) {
    var n = Vu({}, e, t.attrs);
    return D(it, Vu({}, n, {
        icon: Cw
    }), null);
};
((xr.displayName = "ExclamationCircleFilled"), (xr.inheritAttrs = !1));
var Iw = {
    icon: {
        tag: "svg",
        attrs: {
            viewBox: "64 64 896 896",
            focusable: "false"
        },
        children: [{
            tag: "path",
            attrs: {
                d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z",
            },
        }, ],
    },
    name: "info-circle",
    theme: "filled",
};

function Ju(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? Object(arguments[t]) : {},
            r = Object.keys(n);
        (typeof Object.getOwnPropertySymbols == "function" &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function(o) {
                    return Object.getOwnPropertyDescriptor(n, o).enumerable;
                }),
            )),
            r.forEach(function(o) {
                Pw(e, o, n[o]);
            }));
    }
    return e;
}

function Pw(e, t, n) {
    return (
        t in e ?
        Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
        }) :
        (e[t] = n),
        e
    );
}
var Or = function(e, t) {
    var n = Ju({}, e, t.attrs);
    return D(it, Ju({}, n, {
        icon: Iw
    }), null);
};

function Aw(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ?
        e.default :
        e;
}
((Or.displayName = "InfoCircleFilled"), (Or.inheritAttrs = !1));
let Za = z({}, mr.Modal);

function Rw(e) {
    Za = e ? z(z({}, Za), e) : z({}, mr.Modal);
}

function K2() {
    return Za;
}
const Xa = "internalMark",
    ri = Ge({
        compatConfig: {
            MODE: 3
        },
        name: "ALocaleProvider",
        props: {
            locale: {
                type: Object
            },
            ANT_MARK__: String
        },
        setup(e, t) {
            let {
                slots: n
            } = t;
            md(e.ANT_MARK__ === Xa);
            const r = fr({
                antLocale: z(z({}, e.locale), {
                    exist: !0
                }),
                ANT_MARK__: Xa,
            });
            return (
                En("localeData", r),
                Yt(
                    () => e.locale,
                    (o) => {
                        (Rw(o && o.Modal), (r.antLocale = z(z({}, o), {
                            exist: !0
                        })));
                    }, {
                        immediate: !0
                    },
                ),
                () => {
                    var o;
                    return (o = n.default) === null || o === void 0 ? void 0 : o.call(n);
                }
            );
        },
    });
ri.install = function(e) {
    return (e.component(ri.name, ri), e);
};
const $w = hs(ri),
    af = Ge({
        name: "Notice",
        inheritAttrs: !1,
        props: [
            "prefixCls",
            "duration",
            "updateMark",
            "noticeKey",
            "closeIcon",
            "closable",
            "props",
            "onClick",
            "onClose",
            "holder",
            "visible",
        ],
        setup(e, t) {
            let n, {
                    attrs: r,
                    slots: o
                } = t,
                s = !1;
            const u = V(() => (e.duration === void 0 ? 4.5 : e.duration)),
                d = () => {
                    u.value &&
                        !s &&
                        (n = setTimeout(() => {
                            p();
                        }, 1e3 * u.value));
                },
                h = () => {
                    n && (clearTimeout(n), (n = null));
                },
                p = (g) => {
                    (g && g.stopPropagation(), h());
                    const {
                        onClose: v,
                        noticeKey: w
                    } = e;
                    v && v(w);
                };
            return (
                gi(() => {
                    d();
                }),
                Fp(() => {
                    ((s = !0), h());
                }),
                Yt(
                    [u, () => e.updateMark, () => e.visible],
                    (g, v) => {
                        let [w, C, k] = g,
                        [P, B, U] = v;
                        (w !== P || C !== B || (k !== U && U)) && (h(), d());
                    }, {
                        flush: "post"
                    },
                ),
                () => {
                    var g, v;
                    const {
                        prefixCls: w,
                        closable: C,
                        closeIcon: k = (g = o.closeIcon) === null || g === void 0 ?
                            void 0 :
                            g.call(o),
                        onClick: P,
                        holder: B,
                    } = e, {
                        class: U,
                        style: R
                    } = r,
                    K = `${w}-notice`,
                        Y = Object.keys(r).reduce(
                            (I, O) => (
                                (O.startsWith("data-") ||
                                    O.startsWith("aria-") ||
                                    O === "role") &&
                                (I[O] = r[O]),
                                I
                            ), {},
                        ),
                        W = D(
                            "div",
                            Ve({
                                    class: St(K, U, {
                                        [`${K}-closable`]: C
                                    }),
                                    style: R,
                                    onMouseenter: h,
                                    onMouseleave: d,
                                    onClick: P,
                                },
                                Y,
                            ),
                            [
                                D("div", {
                                    class: `${K}-content`
                                }, [
                                    (v = o.default) === null || v === void 0 ? void 0 : v.call(o),
                                ]),
                                C ?
                                D("a", {
                                    tabindex: 0,
                                    onClick: p,
                                    class: `${K}-close`
                                }, [
                                    k || D("span", {
                                        class: `${K}-close-x`
                                    }, null),
                                ]) :
                                null,
                            ],
                        );
                    return B ? D(pl, {
                        to: B
                    }, {
                        default: () => W
                    }) : W;
                }
            );
        },
    });
var Nw = function(e, t) {
    var n = {};
    for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function") {
        var o = 0;
        for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
            t.indexOf(r[o]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
            (n[r[o]] = e[r[o]]);
    }
    return n;
};
let Ku = 0;
const zw = Date.now();

function Yu() {
    const e = Ku;
    return ((Ku += 1), `rcNotification_${zw}_${e}`);
}
const hi = Ge({
    name: "Notification",
    inheritAttrs: !1,
    props: [
        "prefixCls",
        "transitionName",
        "animation",
        "maxCount",
        "closeIcon",
        "hashId",
    ],
    setup(e, t) {
        let {
            attrs: n,
            expose: r,
            slots: o
        } = t;
        const s = new Map(),
            u = Ke([]),
            d = V(() => {
                const {
                    prefixCls: p,
                    animation: g = "fade"
                } = e;
                let v = e.transitionName;
                return (!v && g && (v = `${p}-${g}`), Xd(v));
            }),
            h = (p) => {
                u.value = Hp(u.value).filter((g) => {
                    let {
                        notice: {
                            key: v,
                            userPassKey: w
                        },
                    } = g;
                    return (w || v) !== p;
                });
            };
        return (
            r({
                add: (p, g) => {
                    const v = p.key || Yu(),
                        w = z(z({}, p), {
                            key: v
                        }),
                        {
                            maxCount: C
                        } = e,
                        k = u.value.map((B) => B.notice.key).indexOf(v),
                        P = u.value.concat();
                    (k !== -1 ?
                        P.splice(k, 1, {
                            notice: w,
                            holderCallback: g
                        }) :
                        (C &&
                            u.value.length >= C &&
                            ((w.key = P[0].notice.key),
                                (w.updateMark = Yu()),
                                (w.userPassKey = v),
                                P.shift()),
                            P.push({
                                notice: w,
                                holderCallback: g
                            })),
                        (u.value = P));
                },
                remove: h,
                notices: u,
            }),
            () => {
                var p;
                const {
                    prefixCls: g,
                    closeIcon: v = (p = o.closeIcon) === null || p === void 0 ?
                        void 0 :
                        p.call(o, {
                            prefixCls: g
                        }),
                } = e,
                w = u.value.map((k, P) => {
                        let {
                            notice: B,
                            holderCallback: U
                        } = k;
                        const R = P === u.value.length - 1 ? B.updateMark : void 0,
                            {
                                key: K,
                                userPassKey: Y
                            } = B,
                            {
                                content: W
                            } = B,
                            I = z(
                                z(
                                    z({
                                            prefixCls: g,
                                            closeIcon: typeof v == "function" ? v({
                                                prefixCls: g
                                            }) : v,
                                        },
                                        B,
                                    ),
                                    B.props,
                                ), {
                                    key: K,
                                    noticeKey: Y || K,
                                    updateMark: R,
                                    onClose: (O) => {
                                        var ee;
                                        (h(O),
                                            (ee = B.onClose) === null || ee === void 0 || ee.call(B));
                                    },
                                    onClick: B.onClick,
                                },
                            );
                        return U ?
                            D(
                                "div", {
                                    key: K,
                                    class: `${g}-hook-holder`,
                                    ref: (O) => {
                                        K !== void 0 &&
                                            (O ? (s.set(K, O), U(O, I)) : s.delete(K));
                                    },
                                },
                                null,
                            ) :
                            D(af, Ve(Ve({}, I), {}, {
                                class: St(I.class, e.hashId)
                            }), {
                                default: () => [
                                    typeof W == "function" ? W({
                                        prefixCls: g
                                    }) : W,
                                ],
                            });
                    }),
                    C = {
                        [g]: 1,
                        [n.class]: !!n.class,
                        [e.hashId]: !0
                    };
                return D(
                    "div", {
                        class: C,
                        style: n.style || {
                            top: "65px",
                            left: "50%"
                        }
                    },
                    [D(hl, Ve({
                        tag: "div"
                    }, d.value), {
                        default: () => [w]
                    })],
                );
            }
        );
    },
});
hi.newInstance = function(e, t) {
    const n = e || {},
        {
            name: r = "notification",
            getContainer: o,
            appContext: s,
            prefixCls: u,
            rootPrefixCls: d,
            transitionName: h,
            hasTransitionName: p,
            useStyle: g,
        } = n,
        v = Nw(n, [
            "name",
            "getContainer",
            "appContext",
            "prefixCls",
            "rootPrefixCls",
            "transitionName",
            "hasTransitionName",
            "useStyle",
        ]),
        w = document.createElement("div");
    o ? o().appendChild(w) : document.body.appendChild(w);
    const C = Ge({
            compatConfig: {
                MODE: 3
            },
            name: "NotificationWrapper",
            setup(P, B) {
                let {
                    attrs: U
                } = B;
                const R = jt(),
                    K = V(() => rt.getPrefixCls(r, u)),
                    [, Y] = g(K);
                return (
                    gi(() => {
                        t({
                            notice(W) {
                                var I;
                                (I = R.value) === null || I === void 0 || I.add(W);
                            },
                            removeNotice(W) {
                                var I;
                                (I = R.value) === null || I === void 0 || I.remove(W);
                            },
                            destroy() {
                                (Mc(null, w), w.parentNode && w.parentNode.removeChild(w));
                            },
                            component: R,
                        });
                    }),
                    () => {
                        const W = rt,
                            I = W.getRootPrefixCls(d, K.value),
                            O = p ? h : `${K.value}-${h}`;
                        return D(Yr, Ve(Ve({}, W), {}, {
                            prefixCls: I
                        }), {
                            default: () => [
                                D(
                                    hi,
                                    Ve(
                                        Ve({
                                            ref: R
                                        }, U), {}, {
                                            prefixCls: K.value,
                                            transitionName: O,
                                            hashId: Y.value
                                        },
                                    ),
                                    null,
                                ),
                            ],
                        });
                    }
                );
            },
        }),
        k = D(C, v);
    ((k.appContext = s || k.appContext), Mc(k, w));
};
let Qu = 0;
const Lw = Date.now();

function el() {
    const e = Qu;
    return ((Qu += 1), `rcNotification_${Lw}_${e}`);
}
const jw = Ge({
    name: "HookNotification",
    inheritAttrs: !1,
    props: [
        "prefixCls",
        "transitionName",
        "animation",
        "maxCount",
        "closeIcon",
        "hashId",
        "remove",
        "notices",
        "getStyles",
        "getClassName",
        "onAllRemoved",
        "getContainer",
    ],
    setup(e, t) {
        let {
            attrs: n,
            slots: r
        } = t;
        const o = new Map(),
            s = V(() => e.notices),
            u = V(() => {
                let p = e.transitionName;
                if (!p && e.animation)
                    switch (typeof e.animation) {
                        case "string":
                            p = e.animation;
                            break;
                        case "function":
                            p = e.animation().name;
                            break;
                        case "object":
                            p = e.animation.name;
                            break;
                        default:
                            p = `${e.prefixCls}-fade`;
                    }
                return Xd(p);
            }),
            d = Ke({});
        Yt(s, () => {
            const p = {};
            (Object.keys(d.value).forEach((g) => {
                    p[g] = [];
                }),
                e.notices.forEach((g) => {
                    const {
                        placement: v = "topRight"
                    } = g.notice;
                    v && ((p[v] = p[v] || []), p[v].push(g));
                }),
                (d.value = p));
        });
        const h = V(() => Object.keys(d.value));
        return () => {
            var p;
            const {
                prefixCls: g,
                closeIcon: v = (p = r.closeIcon) === null || p === void 0 ?
                    void 0 :
                    p.call(r, {
                        prefixCls: g
                    }),
            } = e,
            w = h.value.map((C) => {
                var k, P;
                const B = d.value[C],
                    U =
                    (k = e.getClassName) === null || k === void 0 ?
                    void 0 :
                    k.call(e, C),
                    R =
                    (P = e.getStyles) === null || P === void 0 ?
                    void 0 :
                    P.call(e, C),
                    K = B.map((W, I) => {
                        let {
                            notice: O,
                            holderCallback: ee
                        } = W;
                        const me = I === s.value.length - 1 ? O.updateMark : void 0,
                            {
                                key: _e,
                                userPassKey: Ie
                            } = O,
                            {
                                content: F
                            } = O,
                            he = z(
                                z(
                                    z({
                                            prefixCls: g,
                                            closeIcon: typeof v == "function" ? v({
                                                prefixCls: g
                                            }) : v,
                                        },
                                        O,
                                    ),
                                    O.props,
                                ), {
                                    key: _e,
                                    noticeKey: Ie || _e,
                                    updateMark: me,
                                    onClose: (Te) => {
                                        var ve;
                                        (((lt) => {
                                                e.remove(lt);
                                            })(Te),
                                            (ve = O.onClose) === null ||
                                            ve === void 0 ||
                                            ve.call(O));
                                    },
                                    onClick: O.onClick,
                                },
                            );
                        return ee ?
                            D(
                                "div", {
                                    key: _e,
                                    class: `${g}-hook-holder`,
                                    ref: (Te) => {
                                        _e !== void 0 &&
                                            (Te ? (o.set(_e, Te), ee(Te, he)) : o.delete(_e));
                                    },
                                },
                                null,
                            ) :
                            D(af, Ve(Ve({}, he), {}, {
                                class: St(he.class, e.hashId)
                            }), {
                                default: () => [
                                    typeof F == "function" ? F({
                                        prefixCls: g
                                    }) : F,
                                ],
                            });
                    }),
                    Y = {
                        [g]: 1,
                        [`${g}-${C}`]: 1,
                        [n.class]: !!n.class,
                        [e.hashId]: !0,
                        [U]: !!U,
                    };
                return D(
                    "div", {
                        key: C,
                        class: Y,
                        style: n.style || R || {
                            top: "65px",
                            left: "50%"
                        },
                    },
                    [
                        D(
                            hl,
                            Ve(
                                Ve({
                                    tag: "div"
                                }, u.value), {}, {
                                    onAfterLeave: function() {
                                        var W;
                                        B.length > 0 ||
                                            (Reflect.deleteProperty(d.value, C),
                                                (W = e.onAllRemoved) === null ||
                                                W === void 0 ||
                                                W.call(e));
                                    },
                                },
                            ), {
                                default: () => [K]
                            },
                        ),
                    ],
                );
            });
            return D(A1, {
                getContainer: e.getContainer
            }, {
                default: () => [w]
            });
        };
    },
});
var Mw = function(e, t) {
    var n = {};
    for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function") {
        var o = 0;
        for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
            t.indexOf(r[o]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
            (n[r[o]] = e[r[o]]);
    }
    return n;
};
const Dw = () => document.body;
let tl = 0;

function Fw() {
    const e = {};
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
        n[r] = arguments[r];
    return (
        n.forEach((o) => {
            o &&
                Object.keys(o).forEach((s) => {
                    const u = o[s];
                    u !== void 0 && (e[s] = u);
                });
        }),
        e
    );
}

function sf() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
        getContainer: t = Dw,
        motion: n,
        prefixCls: r,
        maxCount: o,
        getClassName: s,
        getStyles: u,
        onAllRemoved: d,
    } = e,
    h = Mw(e, [
            "getContainer",
            "motion",
            "prefixCls",
            "maxCount",
            "getClassName",
            "getStyles",
            "onAllRemoved",
        ]),
        p = jt([]),
        g = jt(),
        v = (k) => {
            p.value = p.value.filter((P) => {
                let {
                    notice: {
                        key: B,
                        userPassKey: U
                    },
                } = P;
                return (U || B) !== k;
            });
        },
        w = jt([]),
        C = {
            open: (k) => {
                const P = Fw(h, k);
                ((P.key !== null && P.key !== void 0) ||
                    ((P.key = `vc-notification-${tl}`), (tl += 1)),
                    (w.value = [...w.value, {
                        type: "open",
                        config: P
                    }]));
            },
            close: (k) => {
                w.value = [...w.value, {
                    type: "close",
                    key: k
                }];
            },
            destroy: () => {
                w.value = [...w.value, {
                    type: "destroy"
                }];
            },
        };
    return (
        Yt(w, () => {
            w.value.length &&
                (w.value.forEach((k) => {
                        switch (k.type) {
                            case "open":
                                ((P, B) => {
                                    const U = P.key || el(),
                                        R = z(z({}, P), {
                                            key: U
                                        }),
                                        K = p.value.map((W) => W.notice.key).indexOf(U),
                                        Y = p.value.concat();
                                    (K !== -1 ?
                                        Y.splice(K, 1, {
                                            notice: R,
                                            holderCallback: B
                                        }) :
                                        (o &&
                                            p.value.length >= o &&
                                            ((R.key = Y[0].notice.key),
                                                (R.updateMark = el()),
                                                (R.userPassKey = U),
                                                Y.shift()),
                                            Y.push({
                                                notice: R,
                                                holderCallback: B
                                            })),
                                        (p.value = Y));
                                })(k.config);
                                break;
                            case "close":
                                v(k.key);
                                break;
                            case "destroy":
                                p.value = [];
                        }
                    }),
                    (w.value = []));
        }),
        [
            C,
            () =>
            D(
                jw, {
                    ref: g,
                    prefixCls: r,
                    maxCount: o,
                    notices: p.value,
                    remove: v,
                    getClassName: s,
                    getStyles: u,
                    animation: n,
                    hashId: e.hashId,
                    onAllRemoved: d,
                    getContainer: t,
                },
                null,
            ),
        ]
    );
}
const Hw = (e) => {
        const {
            componentCls: t,
            iconCls: n,
            boxShadowSecondary: r,
            colorBgElevated: o,
            colorSuccess: s,
            colorError: u,
            colorWarning: d,
            colorInfo: h,
            fontSizeLG: p,
            motionEaseInOutCirc: g,
            motionDurationSlow: v,
            marginXS: w,
            paddingXS: C,
            borderRadiusLG: k,
            zIndexPopup: P,
            messageNoticeContentPadding: B,
        } = e,
        U = new Fn("MessageMoveIn", {
                "0%": {
                    padding: 0,
                    transform: "translateY(-100%)",
                    opacity: 0
                },
                "100%": {
                    padding: C,
                    transform: "translateY(0)",
                    opacity: 1
                },
            }),
            R = new Fn("MessageMoveOut", {
                "0%": {
                    maxHeight: e.height,
                    padding: C,
                    opacity: 1
                },
                "100%": {
                    maxHeight: 0,
                    padding: 0,
                    opacity: 0
                },
            });
        return [{
                [t]: z(z({}, Ad(e)), {
                    position: "fixed",
                    top: w,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "100%",
                    pointerEvents: "none",
                    zIndex: P,
                    [`${t}-move-up`]: {
                        animationFillMode: "forwards"
                    },
                    [`
        ${t}-move-up-appear,
        ${t}-move-up-enter
      `]: {
                        animationName: U,
                        animationDuration: v,
                        animationPlayState: "paused",
                        animationTimingFunction: g,
                    },
                    [`
        ${t}-move-up-appear${t}-move-up-appear-active,
        ${t}-move-up-enter${t}-move-up-enter-active
      `]: {
                        animationPlayState: "running"
                    },
                    [`${t}-move-up-leave`]: {
                        animationName: R,
                        animationDuration: v,
                        animationPlayState: "paused",
                        animationTimingFunction: g,
                    },
                    [`${t}-move-up-leave${t}-move-up-leave-active`]: {
                        animationPlayState: "running",
                    },
                    "&-rtl": {
                        direction: "rtl",
                        span: {
                            direction: "rtl"
                        }
                    },
                }),
            },
            {
                [`${t}-notice`]: {
                    padding: C,
                    textAlign: "center",
                    [n]: {
                        verticalAlign: "text-bottom",
                        marginInlineEnd: w,
                        fontSize: p,
                    },
                    [`${t}-notice-content`]: {
                        display: "inline-block",
                        padding: B,
                        background: o,
                        borderRadius: k,
                        boxShadow: r,
                        pointerEvents: "all",
                    },
                    [`${t}-success ${n}`]: {
                        color: s
                    },
                    [`${t}-error ${n}`]: {
                        color: u
                    },
                    [`${t}-warning ${n}`]: {
                        color: d
                    },
                    [`
        ${t}-info ${n},
        ${t}-loading ${n}`]: {
                        color: h
                    },
                },
            },
            {
                [`${t}-notice-pure-panel`]: {
                    padding: 0,
                    textAlign: "start"
                }
            },
        ];
    },
    cf = ws(
        "Message",
        (e) => {
            const t = Ci(e, {
                messageNoticeContentPadding: `${(e.controlHeightLG - e.fontSize * e.lineHeight) / 2}px ${e.paddingSM}px`,
            });
            return [Hw(t)];
        },
        (e) => ({
            height: 150,
            zIndexPopup: e.zIndexPopupBase + 10
        }),
    ),
    Bw = {
        info: D(Or, null, null),
        success: D(_r, null, null),
        error: D(Sr, null, null),
        warning: D(xr, null, null),
        loading: D(fo, null, null),
    },
    Uw = Ge({
        name: "PureContent",
        inheritAttrs: !1,
        props: ["prefixCls", "type", "icon"],
        setup(e, t) {
            let {
                slots: n
            } = t;
            return () => {
                var r;
                return D(
                    "div", {
                        class: St(
                            `${e.prefixCls}-custom-content`,
                            `${e.prefixCls}-${e.type}`,
                        ),
                    },
                    [
                        e.icon || Bw[e.type],
                        D("span", null, [
                            (r = n.default) === null || r === void 0 ? void 0 : r.call(n),
                        ]),
                    ],
                );
            };
        },
    });
var qw = function(e, t) {
    var n = {};
    for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function") {
        var o = 0;
        for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
            t.indexOf(r[o]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
            (n[r[o]] = e[r[o]]);
    }
    return n;
};
const Ww = Ge({
    name: "Holder",
    inheritAttrs: !1,
    props: [
        "top",
        "prefixCls",
        "getContainer",
        "maxCount",
        "duration",
        "rtl",
        "transitionName",
        "onAllRemoved",
        "animation",
        "staticGetContainer",
    ],
    setup(e, t) {
        let {
            expose: n
        } = t;
        var r, o;
        const {
            getPrefixCls: s,
            getPopupContainer: u
        } = Ii("message", e),
            d = V(() => s("message", e.prefixCls)),
            [, h] = cf(d),
            p = D("span", {
                class: `${d.value}-close-x`
            }, [
                D(po, {
                    class: `${d.value}-close-icon`
                }, null),
            ]),
            [g, v] = sf({
                getStyles: () => {
                    var w;
                    const C = (w = e.top) !== null && w !== void 0 ? w : 8;
                    return {
                        left: "50%",
                        transform: "translateX(-50%)",
                        top: typeof C == "number" ? `${C}px` : C,
                    };
                },
                prefixCls: d.value,
                getClassName: () => St(h.value, e.rtl ? `${d.value}-rtl` : ""),
                motion: () => {
                    var w;
                    return T1({
                        prefixCls: d.value,
                        animation: (w = e.animation) !== null && w !== void 0 ? w : "move-up",
                        transitionName: e.transitionName,
                    });
                },
                closable: !1,
                closeIcon: p,
                duration: (r = e.duration) !== null && r !== void 0 ? r : 3,
                getContainer: (o = e.staticGetContainer) !== null && o !== void 0 ? o : u.value,
                maxCount: e.maxCount,
                onAllRemoved: e.onAllRemoved,
            });
        return (n(z(z({}, g), {
            prefixCls: d,
            hashId: h
        })), v);
    },
});
let nl = 0;

function Gw(e) {
    const t = jt(null),
        n = Symbol("messageHolderKey"),
        r = (u) => {
            var d;
            (d = t.value) === null || d === void 0 || d.close(u);
        },
        o = (u) => {
            if (!t.value) {
                const K = () => {};
                return ((K.then = () => {}), K);
            }
            const {
                open: d,
                prefixCls: h,
                hashId: p
            } = t.value,
                g = `${h}-notice`, {
                    content: v,
                    icon: w,
                    type: C,
                    key: k,
                    class: P,
                    onClose: B
                } = u,
                U = qw(u, ["content", "icon", "type", "key", "class", "onClose"]);
            let R = k;
            return (
                R == null && ((nl += 1), (R = `antd-message-${nl}`)),
                fy(
                    (K) => (
                        d(
                            z(z({}, U), {
                                key: R,
                                content: () =>
                                    D(
                                        Uw, {
                                            prefixCls: h,
                                            type: C,
                                            icon: typeof w == "function" ? w() : w,
                                        }, {
                                            default: () => [typeof v == "function" ? v() : v]
                                        },
                                    ),
                                placement: "top",
                                class: St(C && `${g}-${C}`, p, P),
                                onClose: () => {
                                    (B == null || B(), K());
                                },
                            }),
                        ),
                        () => {
                            r(R);
                        }
                    ),
                )
            );
        },
        s = {
            open: o,
            destroy: (u) => {
                var d;
                u !== void 0 ?
                    r(u) :
                    (d = t.value) === null || d === void 0 || d.destroy();
            },
        };
    return (
        ["info", "success", "warning", "error", "loading"].forEach((u) => {
            s[u] = (d, h, p) => {
                let g, v, w;
                ((g = d && typeof d == "object" && "content" in d ? d : {
                        content: d
                    }),
                    typeof h == "function" ? (w = h) : ((v = h), (w = p)));
                const C = z(z({
                    onClose: w,
                    duration: v
                }, g), {
                    type: u
                });
                return o(C);
            };
        }),
        [s, () => D(Ww, Ve(Ve({
            key: n
        }, e), {}, {
            ref: t
        }), null)]
    );
}

function Zw(e) {
    return Gw(e);
}
let uf,
    at,
    lf,
    df = 3,
    Xw = 1,
    ff = "",
    pf = "move-up",
    hf = !1,
    mf = () => document.body,
    gf = !1;

function Vw() {
    return Xw++;
}

function Jw(e) {
    (e.top !== void 0 && ((uf = e.top), (at = null)),
        e.duration !== void 0 && (df = e.duration),
        e.prefixCls !== void 0 && (ff = e.prefixCls),
        e.getContainer !== void 0 && ((mf = e.getContainer), (at = null)),
        e.transitionName !== void 0 &&
        ((pf = e.transitionName), (at = null), (hf = !0)),
        e.maxCount !== void 0 && ((lf = e.maxCount), (at = null)),
        e.rtl !== void 0 && (gf = e.rtl));
}

function Kw(e, t) {
    at
        ?
        t(at) :
        hi.newInstance({
                appContext: e.appContext,
                prefixCls: e.prefixCls || ff,
                rootPrefixCls: e.rootPrefixCls,
                transitionName: pf,
                hasTransitionName: hf,
                style: {
                    top: uf
                },
                getContainer: mf || e.getPopupContainer,
                maxCount: lf,
                name: "message",
                useStyle: cf,
            },
            (n) => {
                at ? t(at) : ((at = n), t(n));
            },
        );
}
const vf = {
        info: Or,
        success: _r,
        error: Sr,
        warning: xr,
        loading: fo
    },
    Yw = Object.keys(vf);

function Qw(e) {
    const t = e.duration !== void 0 ? e.duration : df,
        n = e.key || Vw(),
        r = new Promise((s) => {
            const u = () => (typeof e.onClose == "function" && e.onClose(), s(!0));
            Kw(e, (d) => {
                d.notice({
                    key: n,
                    duration: t,
                    style: e.style || {},
                    class: e.class,
                    content: (h) => {
                        let {
                            prefixCls: p
                        } = h;
                        const g = vf[e.type],
                            v = g ? D(g, null, null) : "",
                            w = St(`${p}-custom-content`, {
                                [`${p}-${e.type}`]: e.type,
                                [`${p}-rtl`]: gf === !0,
                            });
                        return D("div", {
                            class: w
                        }, [
                            typeof e.icon == "function" ? e.icon() : e.icon || v,
                            D("span", null, [
                                typeof e.content == "function" ? e.content() : e.content,
                            ]),
                        ]);
                    },
                    onClose: u,
                    onClick: e.onClick,
                });
            });
        }),
        o = () => {
            at && at.removeNotice(n);
        };
    return ((o.then = (s, u) => r.then(s, u)), (o.promise = r), o);
}

function eS(e) {
    return Object.prototype.toString.call(e) === "[object Object]" && !!e.content;
}
const un = {
    open: Qw,
    config: Jw,
    destroy(e) {
        if (at)
            if (e) {
                const {
                    removeNotice: t
                } = at;
                t(e);
            } else {
                const {
                    destroy: t
                } = at;
                (t(), (at = null));
            }
    },
};

function tS(e, t) {
    e[t] = (n, r, o) =>
        eS(n) ?
        e.open(z(z({}, n), {
            type: t
        })) :
        (typeof r == "function" && ((o = r), (r = void 0)),
            e.open({
                content: n,
                duration: r,
                type: t,
                onClose: o
            }));
}
(Yw.forEach((e) => tS(un, e)), (un.warn = un.warning), (un.useMessage = Zw));
const nS = (e) => {
        const {
            componentCls: t,
            width: n,
            notificationMarginEdge: r
        } = e,
        o = new Fn("antNotificationTopFadeIn", {
                "0%": {
                    marginTop: "-100%",
                    opacity: 0
                },
                "100%": {
                    marginTop: 0,
                    opacity: 1
                },
            }),
            s = new Fn("antNotificationBottomFadeIn", {
                "0%": {
                    marginBottom: "-100%",
                    opacity: 0
                },
                "100%": {
                    marginBottom: 0,
                    opacity: 1
                },
            }),
            u = new Fn("antNotificationLeftFadeIn", {
                "0%": {
                    right: {
                        _skip_check_: !0,
                        value: n
                    },
                    opacity: 0
                },
                "100%": {
                    right: {
                        _skip_check_: !0,
                        value: 0
                    },
                    opacity: 1
                },
            });
        return {
            [`&${t}-top, &${t}-bottom`]: {
                marginInline: 0
            },
            [`&${t}-top`]: {
                [`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]: {
                    animationName: o
                },
            },
            [`&${t}-bottom`]: {
                [`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]: {
                    animationName: s
                },
            },
            [`&${t}-topLeft, &${t}-bottomLeft`]: {
                marginInlineEnd: 0,
                marginInlineStart: r,
                [`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]: {
                    animationName: u
                },
            },
        };
    },
    rS = (e) => {
        const {
            iconCls: t,
            componentCls: n,
            boxShadowSecondary: r,
            fontSizeLG: o,
            notificationMarginBottom: s,
            borderRadiusLG: u,
            colorSuccess: d,
            colorInfo: h,
            colorWarning: p,
            colorError: g,
            colorTextHeading: v,
            notificationBg: w,
            notificationPadding: C,
            notificationMarginEdge: k,
            motionDurationMid: P,
            motionEaseInOut: B,
            fontSize: U,
            lineHeight: R,
            width: K,
            notificationIconSize: Y,
        } = e,
        W = `${n}-notice`,
            I = new Fn("antNotificationFadeIn", {
                "0%": {
                    left: {
                        _skip_check_: !0,
                        value: K
                    },
                    opacity: 0
                },
                "100%": {
                    left: {
                        _skip_check_: !0,
                        value: 0
                    },
                    opacity: 1
                },
            }),
            O = new Fn("antNotificationFadeOut", {
                "0%": {
                    maxHeight: e.animationMaxHeight,
                    marginBottom: s,
                    opacity: 1
                },
                "100%": {
                    maxHeight: 0,
                    marginBottom: 0,
                    paddingTop: 0,
                    paddingBottom: 0,
                    opacity: 0,
                },
            });
        return [{
                [n]: z(
                    z(
                        z(z({}, Ad(e)), {
                            position: "fixed",
                            zIndex: e.zIndexPopup,
                            marginInlineEnd: k,
                            [`${n}-hook-holder`]: {
                                position: "relative"
                            },
                            [`&${n}-top, &${n}-bottom`]: {
                                [`${n}-notice`]: {
                                    marginInline: "auto auto"
                                },
                            },
                            [`&${n}-topLeft, &${n}-bottomLeft`]: {
                                [`${n}-notice`]: {
                                    marginInlineEnd: "auto",
                                    marginInlineStart: 0,
                                },
                            },
                            [`${n}-fade-enter, ${n}-fade-appear`]: {
                                animationDuration: e.motionDurationMid,
                                animationTimingFunction: B,
                                animationFillMode: "both",
                                opacity: 0,
                                animationPlayState: "paused",
                            },
                            [`${n}-fade-leave`]: {
                                animationTimingFunction: B,
                                animationFillMode: "both",
                                animationDuration: P,
                                animationPlayState: "paused",
                            },
                            [`${n}-fade-enter${n}-fade-enter-active, ${n}-fade-appear${n}-fade-appear-active`]: {
                                animationName: I,
                                animationPlayState: "running"
                            },
                            [`${n}-fade-leave${n}-fade-leave-active`]: {
                                animationName: O,
                                animationPlayState: "running",
                            },
                        }),
                        nS(e),
                    ), {
                        "&-rtl": {
                            direction: "rtl",
                            [`${n}-notice-btn`]: {
                                float: "left"
                            },
                        },
                    },
                ),
            },
            {
                [W]: {
                    position: "relative",
                    width: K,
                    maxWidth: `calc(100vw - ${2 * k}px)`,
                    marginBottom: s,
                    marginInlineStart: "auto",
                    padding: C,
                    overflow: "hidden",
                    lineHeight: R,
                    wordWrap: "break-word",
                    background: w,
                    borderRadius: u,
                    boxShadow: r,
                    [`${n}-close-icon`]: {
                        fontSize: U,
                        cursor: "pointer"
                    },
                    [`${W}-message`]: {
                        marginBottom: e.marginXS,
                        color: v,
                        fontSize: o,
                        lineHeight: e.lineHeightLG,
                    },
                    [`${W}-description`]: {
                        fontSize: U
                    },
                    [`&${W}-closable ${W}-message`]: {
                        paddingInlineEnd: e.paddingLG
                    },
                    [`${W}-with-icon ${W}-message`]: {
                        marginBottom: e.marginXS,
                        marginInlineStart: e.marginSM + Y,
                        fontSize: o,
                    },
                    [`${W}-with-icon ${W}-description`]: {
                        marginInlineStart: e.marginSM + Y,
                        fontSize: U,
                    },
                    [`${W}-icon`]: {
                        position: "absolute",
                        fontSize: Y,
                        lineHeight: 0,
                        [`&-success${t}`]: {
                            color: d
                        },
                        [`&-info${t}`]: {
                            color: h
                        },
                        [`&-warning${t}`]: {
                            color: p
                        },
                        [`&-error${t}`]: {
                            color: g
                        },
                    },
                    [`${W}-close`]: {
                        position: "absolute",
                        top: e.notificationPaddingVertical,
                        insetInlineEnd: e.notificationPaddingHorizontal,
                        color: e.colorIcon,
                        outline: "none",
                        width: e.notificationCloseButtonSize,
                        height: e.notificationCloseButtonSize,
                        borderRadius: e.borderRadiusSM,
                        transition: `background-color ${e.motionDurationMid}, color ${e.motionDurationMid}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        "&:hover": {
                            color: e.colorIconHover,
                            backgroundColor: e.wireframe ? "transparent" : e.colorFillContent,
                        },
                    },
                    [`${W}-btn`]: {
                        float: "right",
                        marginTop: e.marginSM
                    },
                },
            },
            {
                [`${W}-pure-panel`]: {
                    margin: 0
                }
            },
        ];
    },
    yf = ws(
        "Notification",
        (e) => {
            const t = e.paddingMD,
                n = e.paddingLG,
                r = Ci(e, {
                    notificationBg: e.colorBgElevated,
                    notificationPaddingVertical: t,
                    notificationPaddingHorizontal: n,
                    notificationPadding: `${e.paddingMD}px ${e.paddingContentHorizontalLG}px`,
                    notificationMarginBottom: e.margin,
                    notificationMarginEdge: e.marginLG,
                    animationMaxHeight: 150,
                    notificationIconSize: e.fontSizeLG * e.lineHeightLG,
                    notificationCloseButtonSize: 0.55 * e.controlHeightLG,
                });
            return [rS(r)];
        },
        (e) => ({
            zIndexPopup: e.zIndexPopupBase + 50,
            width: 384
        }),
    );

function oS(e, t) {
    return (
        t ||
        D("span", {
            class: `${e}-close-x`
        }, [
            D(po, {
                class: `${e}-close-icon`
            }, null),
        ])
    );
}
(D(Or, null, null),
    D(_r, null, null),
    D(Sr, null, null),
    D(xr, null, null),
    D(fo, null, null));
const iS = {
    success: _r,
    info: Or,
    error: Sr,
    warning: xr
};

function aS(e) {
    let {
        prefixCls: t,
        icon: n,
        type: r,
        message: o,
        description: s,
        btn: u,
    } = e,
    d = null;
    return (
        n ?
        (d = D("span", {
            class: `${t}-icon`
        }, [or(n)])) :
        r && (d = D(iS[r], {
            class: `${t}-icon ${t}-icon-${r}`
        }, null)),
        D("div", {
            class: St({
                [`${t}-with-icon`]: d
            }),
            role: "alert"
        }, [
            d,
            D("div", {
                class: `${t}-message`
            }, [o]),
            D("div", {
                class: `${t}-description`
            }, [s]),
            u && D("div", {
                class: `${t}-btn`
            }, [u]),
        ])
    );
}

function bf(e, t, n) {
    let r;
    switch (
        ((t = typeof t == "number" ? `${t}px` : t),
            (n = typeof n == "number" ? `${n}px` : n),
            e)
    ) {
        case "top":
            r = {
                left: "50%",
                transform: "translateX(-50%)",
                right: "auto",
                top: t,
                bottom: "auto",
            };
            break;
        case "topLeft":
            r = {
                left: 0,
                top: t,
                bottom: "auto"
            };
            break;
        case "topRight":
            r = {
                right: 0,
                top: t,
                bottom: "auto"
            };
            break;
        case "bottom":
            r = {
                left: "50%",
                transform: "translateX(-50%)",
                right: "auto",
                top: "auto",
                bottom: n,
            };
            break;
        case "bottomLeft":
            r = {
                left: 0,
                top: "auto",
                bottom: n
            };
            break;
        default:
            r = {
                right: 0,
                top: "auto",
                bottom: n
            };
    }
    return r;
}

function sS(e) {
    return {
        name: `${e}-fade`
    };
}
var cS = function(e, t) {
    var n = {};
    for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function") {
        var o = 0;
        for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
            t.indexOf(r[o]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
            (n[r[o]] = e[r[o]]);
    }
    return n;
};
const rl = 24,
    uS = 4.5,
    lS = Ge({
        name: "Holder",
        inheritAttrs: !1,
        props: ["prefixCls", "class", "type", "icon", "content", "onAllRemoved"],
        setup(e, t) {
            let {
                expose: n
            } = t;
            const {
                getPrefixCls: r,
                getPopupContainer: o
            } = Ii("notification", e),
                s = V(() => e.prefixCls || r("notification")),
                [, u] = yf(s),
                [d, h] = sf({
                    prefixCls: s.value,
                    getStyles: (p) => {
                        var g, v;
                        return bf(
                            p,
                            (g = e.top) !== null && g !== void 0 ? g : rl,
                            (v = e.bottom) !== null && v !== void 0 ? v : rl,
                        );
                    },
                    getClassName: () => St(u.value, {
                        [`${s.value}-rtl`]: e.rtl
                    }),
                    motion: () => sS(s.value),
                    closable: !0,
                    closeIcon: oS(s.value),
                    duration: uS,
                    getContainer: () => {
                        var p, g;
                        return (
                            ((p = e.getPopupContainer) === null || p === void 0 ?
                                void 0 :
                                p.call(e)) ||
                            ((g = o.value) === null || g === void 0 ? void 0 : g.call(o)) ||
                            document.body
                        );
                    },
                    maxCount: e.maxCount,
                    hashId: u.value,
                    onAllRemoved: e.onAllRemoved,
                });
            return (n(z(z({}, d), {
                prefixCls: s.value,
                hashId: u
            })), h);
        },
    });

function dS(e) {
    const t = jt(null),
        n = Symbol("notificationHolderKey"),
        r = (s) => {
            if (!t.value) return;
            const {
                open: u,
                prefixCls: d,
                hashId: h
            } = t.value,
                p = `${d}-notice`, {
                    message: g,
                    description: v,
                    icon: w,
                    type: C,
                    btn: k,
                    class: P
                } = s;
            return u(
                z(
                    z({
                            placement: "topRight"
                        },
                        cS(s, ["message", "description", "icon", "type", "btn", "class"]),
                    ), {
                        content: () =>
                            D(
                                aS, {
                                    prefixCls: p,
                                    icon: typeof w == "function" ? w() : w,
                                    type: C,
                                    message: typeof g == "function" ? g() : g,
                                    description: typeof v == "function" ? v() : v,
                                    btn: typeof k == "function" ? k() : k,
                                },
                                null,
                            ),
                        class: St(C && `${p}-${C}`, h, P),
                    },
                ),
            );
        },
        o = {
            open: r,
            destroy: (s) => {
                var u, d;
                s !== void 0 ?
                    (u = t.value) === null || u === void 0 || u.close(s) :
                    (d = t.value) === null || d === void 0 || d.destroy();
            },
        };
    return (
        ["success", "info", "warning", "error"].forEach((s) => {
            o[s] = (u) => r(z(z({}, u), {
                type: s
            }));
        }),
        [o, () => D(lS, Ve(Ve({
            key: n
        }, e), {}, {
            ref: t
        }), null)]
    );
}

function fS(e) {
    return dS(e);
}
const Ln = {};
let wf,
    Sf = 4.5,
    _f = "24px",
    xf = "24px",
    Va = "",
    Of = "topRight",
    kf = () => document.body,
    Ef = null,
    Ja = !1;

function pS(e) {
    const {
        duration: t,
        placement: n,
        bottom: r,
        top: o,
        getContainer: s,
        closeIcon: u,
        prefixCls: d,
    } = e;
    (d !== void 0 && (Va = d),
        t !== void 0 && (Sf = t),
        n !== void 0 && (Of = n),
        r !== void 0 && (xf = typeof r == "number" ? `${r}px` : r),
        o !== void 0 && (_f = typeof o == "number" ? `${o}px` : o),
        s !== void 0 && (kf = s),
        u !== void 0 && (Ef = u),
        e.rtl !== void 0 && (Ja = e.rtl),
        e.maxCount !== void 0 && (wf = e.maxCount));
}

function hS(e, t) {
    let {
        prefixCls: n,
        placement: r = Of,
        getContainer: o = kf,
        top: s,
        bottom: u,
        closeIcon: d = Ef,
        appContext: h,
    } = e;
    const {
        getPrefixCls: p
    } = ES(),
        g = p("notification", n || Va),
        v = `${g}-${r}-${Ja}`,
        w = Ln[v];
    if (w)
        return void Promise.resolve(w).then((k) => {
            t(k);
        });
    const C = St(`${g}-${r}`, {
        [`${g}-rtl`]: Ja === !0
    });
    hi.newInstance({
            name: "notification",
            prefixCls: n || Va,
            useStyle: yf,
            class: C,
            style: bf(r, s ?? _f, u ?? xf),
            appContext: h,
            getContainer: o,
            closeIcon: (k) => {
                let {
                    prefixCls: P
                } = k;
                return D("span", {
                    class: `${P}-close-x`
                }, [
                    or(d, {}, D(po, {
                        class: `${P}-close-icon`
                    }, null)),
                ]);
            },
            maxCount: wf,
            hasTransitionName: !0,
        },
        (k) => {
            ((Ln[v] = k), t(k));
        },
    );
}
const mS = {
    success: Ua,
    info: Wa,
    error: Ga,
    warning: qa
};

function gS(e) {
    const {
        icon: t,
        type: n,
        description: r,
        message: o,
        btn: s
    } = e,
    u = e.duration === void 0 ? Sf : e.duration;
    hS(e, (d) => {
        d.notice({
            content: (h) => {
                let {
                    prefixCls: p
                } = h;
                const g = `${p}-notice`;
                let v = null;
                if (t) v = () => D("span", {
                    class: `${g}-icon`
                }, [or(t)]);
                else if (n) {
                    const w = mS[n];
                    v = () => D(w, {
                        class: `${g}-icon ${g}-icon-${n}`
                    }, null);
                }
                return D("div", {
                    class: v ? `${g}-with-icon` : ""
                }, [
                    v && v(),
                    D("div", {
                        class: `${g}-message`
                    }, [
                        !r && v ?
                        D(
                            "span", {
                                class: `${g}-message-single-line-auto-margin`
                            },
                            null,
                        ) :
                        null,
                        or(o),
                    ]),
                    D("div", {
                        class: `${g}-description`
                    }, [or(r)]),
                    s ? D("span", {
                        class: `${g}-btn`
                    }, [or(s)]) : null,
                ]);
            },
            duration: u,
            closable: !0,
            onClose: e.onClose,
            onClick: e.onClick,
            key: e.key,
            style: e.style || {},
            class: e.class,
        });
    });
}
const tr = {
        open: gS,
        close(e) {
            Object.keys(Ln).forEach((t) =>
                Promise.resolve(Ln[t]).then((n) => {
                    n.removeNotice(e);
                }),
            );
        },
        config: pS,
        destroy() {
            Object.keys(Ln).forEach((e) => {
                (Promise.resolve(Ln[e]).then((t) => {
                        t.destroy();
                    }),
                    delete Ln[e]);
            });
        },
    },
    vS = ["success", "info", "warning", "error"];
(vS.forEach((e) => {
        tr[e] = (t) => tr.open(z(z({}, t), {
            type: e
        }));
    }),
    (tr.warn = tr.warning),
    (tr.useNotification = fS));
const yS = `-ant-${Date.now()}-${Math.random()}`;

function bS(e, t) {
    const n = {},
        r = (u, d) => {
            let h = u.clone();
            return ((h = (d == null ? void 0 : d(h)) || h), h.toRgbString());
        },
        o = (u, d) => {
            const h = new Je(u),
                p = Hn(h.toRgbString());
            ((n[`${d}-color`] = r(h)),
                (n[`${d}-color-disabled`] = p[1]),
                (n[`${d}-color-hover`] = p[4]),
                (n[`${d}-color-active`] = p[6]),
                (n[`${d}-color-outline`] = h.clone().setAlpha(0.2).toRgbString()),
                (n[`${d}-color-deprecated-bg`] = p[0]),
                (n[`${d}-color-deprecated-border`] = p[2]));
        };
    if (t.primaryColor) {
        o(t.primaryColor, "primary");
        const u = new Je(t.primaryColor),
            d = Hn(u.toRgbString());
        (d.forEach((p, g) => {
                n[`primary-${g + 1}`] = p;
            }),
            (n["primary-color-deprecated-l-35"] = r(u, (p) => p.lighten(35))),
            (n["primary-color-deprecated-l-20"] = r(u, (p) => p.lighten(20))),
            (n["primary-color-deprecated-t-20"] = r(u, (p) => p.tint(20))),
            (n["primary-color-deprecated-t-50"] = r(u, (p) => p.tint(50))),
            (n["primary-color-deprecated-f-12"] = r(u, (p) =>
                p.setAlpha(0.12 * p.getAlpha()),
            )));
        const h = new Je(d[0]);
        ((n["primary-color-active-deprecated-f-30"] = r(h, (p) =>
                p.setAlpha(0.3 * p.getAlpha()),
            )),
            (n["primary-color-active-deprecated-d-02"] = r(h, (p) => p.darken(2))));
    }
    return (
        t.successColor && o(t.successColor, "success"),
        t.warningColor && o(t.warningColor, "warning"),
        t.errorColor && o(t.errorColor, "error"),
        t.infoColor && o(t.infoColor, "info"),
        `
  :root {
    ${Object.keys(n).map((u) => `--${e}-${u}: ${n[u]};`).join(`
`)}
  }
  `.trim()
    );
}

function wS(e, t) {
    const n = bS(e, t);
    Tr() && di(n, `${yS}-dynamic-theme`);
}
const SS = (e) => {
    const [t, n] = Ti();
    return za(
        V(() => ({
            theme: t.value,
            token: n.value,
            hashId: "",
            path: ["ant-design-icons", e.value],
        })),
        () => [{
            [`.${e.value}`]: z(z({}, Zb()), {
                [`.${e.value} .${e.value}-icon`]: {
                    display: "block"
                },
            }),
        }, ],
    );
};

function _S(e, t) {
    const n = V(() => (e == null ? void 0 : e.value) || {}),
        r = V(() =>
            n.value.inherit !== !1 && t != null && t.value ? t.value : $d,
        );
    return V(() => {
        if (!(e != null && e.value)) return t == null ? void 0 : t.value;
        const o = z({}, r.value.components);
        return (
            Object.keys(e.value.components || {}).forEach((s) => {
                o[s] = z(z({}, o[s]), e.value.components[s]);
            }),
            z(z(z({}, r.value), n.value), {
                token: z(z({}, r.value.token), n.value.token),
                components: o,
            })
        );
    });
}
var xS = function(e, t) {
    var n = {};
    for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function") {
        var o = 0;
        for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
            t.indexOf(r[o]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
            (n[r[o]] = e[r[o]]);
    }
    return n;
};
const OS = "ant";

function ur() {
    return rt.prefixCls || OS;
}

function Cf() {
    return rt.iconPrefixCls || ms;
}
const ks = fr({}),
    rt = fr({});
let xa;
vi(() => {
    (z(rt, ks),
        (rt.prefixCls = ur()),
        (rt.iconPrefixCls = Cf()),
        (rt.getPrefixCls = (e, t) =>
            t || (e ? `${rt.prefixCls}-${e}` : rt.prefixCls)),
        (rt.getRootPrefixCls = () => (rt.prefixCls ? rt.prefixCls : ur())));
});
const kS = (e) => {
        (xa && xa(),
            (xa = vi(() => {
                (z(ks, fr(e)), z(rt, fr(e)));
            })),
            e.theme && wS(ur(), e.theme));
    },
    ES = () => ({
        getPrefixCls: (e, t) => t || (e ? `${ur()}-${e}` : ur()),
        getIconPrefixCls: Cf,
        getRootPrefixCls: () => (rt.prefixCls ? rt.prefixCls : ur()),
    }),
    Yr = Ge({
        compatConfig: {
            MODE: 3
        },
        name: "AConfigProvider",
        inheritAttrs: !1,
        props: Sy(),
        setup(e, t) {
            let {
                slots: n
            } = t;
            const r = td(),
                o = V(() => e.iconPrefixCls || r.iconPrefixCls.value || ms),
                s = V(() => o.value !== r.iconPrefixCls.value),
                u = V(() => {
                    var F;
                    return (
                        e.csp || ((F = r.csp) === null || F === void 0 ? void 0 : F.value)
                    );
                }),
                d = SS(o),
                h = _S(
                    V(() => e.theme),
                    V(() => {
                        var F;
                        return (F = r.theme) === null || F === void 0 ? void 0 : F.value;
                    }),
                ),
                p = V(() => {
                    var F, he;
                    return (F = e.autoInsertSpaceInButton) !== null && F !== void 0 ?
                        F :
                        (he = r.autoInsertSpaceInButton) === null || he === void 0 ?
                        void 0 :
                        he.value;
                }),
                g = V(() => {
                    var F;
                    return (
                        e.locale ||
                        ((F = r.locale) === null || F === void 0 ? void 0 : F.value)
                    );
                });
            Yt(
                g,
                () => {
                    ks.locale = g.value;
                }, {
                    immediate: !0
                },
            );
            const v = V(() => {
                    var F;
                    return (
                        e.direction ||
                        ((F = r.direction) === null || F === void 0 ? void 0 : F.value)
                    );
                }),
                w = V(() => {
                    var F, he;
                    return (F = e.space) !== null && F !== void 0 ?
                        F :
                        (he = r.space) === null || he === void 0 ?
                        void 0 :
                        he.value;
                }),
                C = V(() => {
                    var F, he;
                    return (F = e.virtual) !== null && F !== void 0 ?
                        F :
                        (he = r.virtual) === null || he === void 0 ?
                        void 0 :
                        he.value;
                }),
                k = V(() => {
                    var F, he;
                    return (F = e.dropdownMatchSelectWidth) !== null && F !== void 0 ?
                        F :
                        (he = r.dropdownMatchSelectWidth) === null || he === void 0 ?
                        void 0 :
                        he.value;
                }),
                P = V(() => {
                    var F;
                    return e.getTargetContainer !== void 0 ?
                        e.getTargetContainer :
                        (F = r.getTargetContainer) === null || F === void 0 ?
                        void 0 :
                        F.value;
                }),
                B = V(() => {
                    var F;
                    return e.getPopupContainer !== void 0 ?
                        e.getPopupContainer :
                        (F = r.getPopupContainer) === null || F === void 0 ?
                        void 0 :
                        F.value;
                }),
                U = V(() => {
                    var F;
                    return e.pageHeader !== void 0 ?
                        e.pageHeader :
                        (F = r.pageHeader) === null || F === void 0 ?
                        void 0 :
                        F.value;
                }),
                R = V(() => {
                    var F;
                    return e.input !== void 0 ?
                        e.input :
                        (F = r.input) === null || F === void 0 ?
                        void 0 :
                        F.value;
                }),
                K = V(() => {
                    var F;
                    return e.pagination !== void 0 ?
                        e.pagination :
                        (F = r.pagination) === null || F === void 0 ?
                        void 0 :
                        F.value;
                }),
                Y = V(() => {
                    var F;
                    return e.form !== void 0 ?
                        e.form :
                        (F = r.form) === null || F === void 0 ?
                        void 0 :
                        F.value;
                }),
                W = V(() => {
                    var F;
                    return e.select !== void 0 ?
                        e.select :
                        (F = r.select) === null || F === void 0 ?
                        void 0 :
                        F.value;
                }),
                I = V(() => e.componentSize),
                O = V(() => e.componentDisabled),
                ee = V(() => {
                    var F, he;
                    return (F = e.wave) !== null && F !== void 0 ?
                        F :
                        (he = r.wave) === null || he === void 0 ?
                        void 0 :
                        he.value;
                }),
                me = {
                    csp: u,
                    autoInsertSpaceInButton: p,
                    locale: g,
                    direction: v,
                    space: w,
                    virtual: C,
                    dropdownMatchSelectWidth: k,
                    getPrefixCls: (F, he) => {
                        const {
                            prefixCls: Te = "ant"
                        } = e;
                        if (he) return he;
                        const ve = Te || r.getPrefixCls("");
                        return F ? `${ve}-${F}` : ve;
                    },
                    iconPrefixCls: o,
                    theme: V(() => {
                        var F, he;
                        return (F = h.value) !== null && F !== void 0 ?
                            F :
                            (he = r.theme) === null || he === void 0 ?
                            void 0 :
                            he.value;
                    }),
                    renderEmpty: (F) =>
                        (e.renderEmpty || n.renderEmpty || r.renderEmpty || a1)(F),
                    getTargetContainer: P,
                    getPopupContainer: B,
                    pageHeader: U,
                    input: R,
                    pagination: K,
                    form: Y,
                    select: W,
                    componentSize: I,
                    componentDisabled: O,
                    transformCellText: V(() => e.transformCellText),
                    wave: ee,
                },
                _e = V(() => {
                    const F = h.value || {},
                        {
                            algorithm: he,
                            token: Te
                        } = F,
                        ve = xS(F, ["algorithm", "token"]),
                        lt = he && (!Array.isArray(he) || he.length > 0) ? vd(he) : void 0;
                    return z(z({}, ve), {
                        theme: lt,
                        token: z(z({}, Ei), Te)
                    });
                }),
                Ie = V(() => {
                    var F, he;
                    let Te = {};
                    return (
                        g.value &&
                        (Te =
                            ((F = g.value.Form) === null || F === void 0 ?
                                void 0 :
                                F.defaultValidateMessages) ||
                            ((he = mr.Form) === null || he === void 0 ?
                                void 0 :
                                he.defaultValidateMessages) || {}),
                        e.form &&
                        e.form.validateMessages &&
                        (Te = z(z({}, Te), e.form.validateMessages)),
                        Te
                    );
                });
            return (
                _y(me),
                wy({
                    validateMessages: Ie
                }),
                s1(I),
                xy(O),
                vi(() => {
                    v.value &&
                        (un.config({
                                rtl: v.value === "rtl"
                            }),
                            tr.config({
                                rtl: v.value === "rtl"
                            }));
                }),
                () =>
                D(
                    id, {
                        children: (F, he, Te) =>
                            ((ve) => {
                                var lt, Qt;
                                let ln = s.value ?
                                    d(
                                        (lt = n.default) === null || lt === void 0 ?
                                        void 0 :
                                        lt.call(n),
                                    ) :
                                    (Qt = n.default) === null || Qt === void 0 ?
                                    void 0 :
                                    Qt.call(n);
                                if (e.theme) {
                                    const It = ln;
                                    ln = D(t1, {
                                        value: _e.value
                                    }, {
                                        default: () => [It]
                                    });
                                }
                                return D(
                                    $w, {
                                        locale: g.value || ve,
                                        ANT_MARK__: Xa
                                    }, {
                                        default: () => [ln]
                                    },
                                );
                            })(Te),
                    },
                    null,
                )
            );
        },
    });
((Yr.config = kS),
    (Yr.install = function(e) {
        e.component(Yr.name, Yr);
    }));
var ol,
    Ka = {
        exports: {}
    },
    Y2 = Ka.exports;

function CS() {
    return (
        ol ||
        ((ol = 1),
            (Ka.exports = (function() {
                var e, t, n, r, o, s;

                function u(i) {
                    ((this.name = "__st"
                            .concat((1e9 * Math.random()) >>> 0)
                            .concat(e, "__")),
                        i != null && i.forEach(this.add, this),
                        (e += 1));
                }

                function d(i) {
                    if (!(this instanceof d))
                        throw new TypeError("Constructor WeakMap requires 'new'");
                    this.uniqueIdx = ""
                        .concat("_WeakMap", "_")
                        .concat(s(), ".")
                        .concat(s());
                }
                (Array.prototype.find ||
                    Object.defineProperty(Array.prototype, "find", {
                        configurable: !0,
                        writable: !0,
                        value: function(i) {
                            if (this === null)
                                throw new TypeError('"this" is null or not defined');
                            var a = Object(this),
                                c = a.length >>> 0;
                            if (typeof i != "function")
                                throw new TypeError("predicate must be a function");
                            for (var l = arguments[1], f = 0; f < c;) {
                                var m = a[f];
                                if (i.call(l, m, f, a)) return m;
                                f += 1;
                            }
                        },
                    }),
                    Array.prototype.at ||
                    Object.defineProperty(Array.prototype, "at", {
                        configurable: !0,
                        writable: !0,
                        value: function(i) {
                            if (this == null)
                                throw new TypeError('"this" is null or not defined');

                            function a(m) {
                                return (m = +m) != m || m == 0 ? 0 : l(m);
                            }
                            var c = Object(this),
                                l =
                                Math.trunc ||
                                function(m) {
                                    return (0 < (m = +m) ? Math.floor : Math.ceil)(m);
                                },
                                f = (function(m) {
                                    return 0 < (m = a(m)) ? Math.min(m, 9007199254740991) : 0;
                                })(c.length);
                            return (i = 0 <= (i = a(i)) ? i : f + i) < 0 || f <= i ?
                                void 0 :
                                c[i];
                        },
                    }),
                    typeof window > "u" ||
                    window.WeakSet ||
                    ((e = Date.now() % 1e9),
                        (u.prototype.add = function(i) {
                            var a = this.name;
                            return (
                                i[a] ||
                                Object.defineProperty(i, a, {
                                    value: !0,
                                    writable: !0
                                }),
                                this
                            );
                        }),
                        (u.prototype.delete = function(i) {
                            return !!i[this.name] && !(i[this.name] = void 0);
                        }),
                        (u.prototype.has = function(i) {
                            return !!i[this.name];
                        }),
                        (t = u),
                        Object.defineProperty(window, "WeakSet", {
                            value: function(i) {
                                return new t(i);
                            },
                        })),
                    typeof window > "u" ||
                    window.WeakMap ||
                    ((n =
                            Object.defineProperty &&
                            (function() {
                                try {
                                    return Object.defineProperty({}, "x", {
                                        value: 1
                                    }).x === 1;
                                } catch {}
                            })()),
                        (r = function(i, a, c) {
                            n
                                ?
                                Object.defineProperty(i, a, {
                                    configurable: !0,
                                    writable: !0,
                                    value: c,
                                }) :
                                (i[a] = c);
                        }),
                        (o = function(i) {
                            return Object(i) === i;
                        }),
                        (s = function() {
                            return Math.random().toString().substring(2);
                        }),
                        (d.prototype.delete = function(i) {
                            var a;
                            return (
                                this.checkInstance("delete"),
                                !!o(i) &&
                                !(
                                    !(a = i[this.uniqueIdx]) ||
                                    a[0] !== i ||
                                    (delete i[this.uniqueIdx], 0)
                                )
                            );
                        }),
                        (d.prototype.has = function(i) {
                            var a;
                            return (
                                this.checkInstance("has"),
                                !!o(i) && !(!(a = i[this.uniqueIdx]) || a[0] !== i)
                            );
                        }),
                        (d.prototype.get = function(i) {
                            var a;
                            return (
                                this.checkInstance("get"),
                                o(i) && (a = i[this.uniqueIdx]) && a[0] === i ? a[1] : void 0
                            );
                        }),
                        (d.prototype.set = function(i, a) {
                            var c;
                            if ((this.checkInstance("set"), o(i)))
                                return (
                                    (c = i[this.uniqueIdx]) && c[0] === i ?
                                    (c[1] = a) :
                                    r(i, this.uniqueIdx, [i, a]),
                                    this
                                );
                            throw new TypeError("Invalid value used as weak map key");
                        }),
                        (d.prototype.checkInstance = function(i) {
                            if (
                                !o(this) ||
                                !Object.prototype.hasOwnProperty.call(this, "uniqueIdx")
                            )
                                throw new TypeError(
                                    ""
                                    .concat(i, " method called on incompatible receiver ")
                                    .concat(typeof this),
                                );
                        }),
                        r(window, "WeakMap", d)));
                var h = function(i, a) {
                        return (h =
                            Object.setPrototypeOf ||
                            ({
                                    __proto__: []
                                }
                                instanceof Array ?
                                function(c, l) {
                                    c.__proto__ = l;
                                } :
                                function(c, l) {
                                    for (var f in l)
                                        Object.prototype.hasOwnProperty.call(l, f) &&
                                        (c[f] = l[f]);
                                }))(i, a);
                    },
                    p = function() {
                        return (p =
                            Object.assign ||
                            function(i) {
                                for (var a, c = 1, l = arguments.length; c < l; c++)
                                    for (var f in (a = arguments[c]))
                                        Object.prototype.hasOwnProperty.call(a, f) && (i[f] = a[f]);
                                return i;
                            }).apply(this, arguments);
                    };

                function g(i, a) {
                    var c = {};
                    for (f in i)
                        Object.prototype.hasOwnProperty.call(i, f) &&
                        a.indexOf(f) < 0 &&
                        (c[f] = i[f]);
                    if (i != null && typeof Object.getOwnPropertySymbols == "function")
                        for (
                            var l = 0, f = Object.getOwnPropertySymbols(i); l < f.length; l++
                        )
                            a.indexOf(f[l]) < 0 &&
                            Object.prototype.propertyIsEnumerable.call(i, f[l]) &&
                            (c[f[l]] = i[f[l]]);
                    return c;
                }

                function v(i, a, c, l) {
                    return new(c = c || Promise)(function(f, m) {
                        function y(_) {
                            try {
                                x(l.next(_));
                            } catch (S) {
                                m(S);
                            }
                        }

                        function b(_) {
                            try {
                                x(l.throw(_));
                            } catch (S) {
                                m(S);
                            }
                        }

                        function x(_) {
                            var S;
                            _.done ?
                                f(_.value) :
                                ((S = _.value) instanceof c ?
                                    S :
                                    new c(function(T) {
                                        T(S);
                                    })
                                ).then(y, b);
                        }
                        x((l = l.apply(i, a || [])).next());
                    });
                }

                function w(i, a) {
                    var c,
                        l,
                        f,
                        m = {
                            label: 0,
                            sent: function() {
                                if (1 & f[0]) throw f[1];
                                return f[1];
                            },
                            trys: [],
                            ops: [],
                        },
                        y = Object.create(
                            (typeof Iterator == "function" ? Iterator : Object).prototype,
                        );
                    return (
                        (y.next = b(0)),
                        (y.throw = b(1)),
                        (y.return = b(2)),
                        typeof Symbol == "function" &&
                        (y[Symbol.iterator] = function() {
                            return this;
                        }),
                        y
                    );

                    function b(x) {
                        return function(_) {
                            var S = [x, _];
                            if (c) throw new TypeError("Generator is already executing.");
                            for (;
                                (m = y && S[(y = 0)] ? 0 : m);)
                                try {
                                    if (
                                        ((c = 1),
                                            l &&
                                            (f =
                                                2 & S[0] ?
                                                l.return :
                                                S[0] ?
                                                l.throw || ((f = l.return) && f.call(l), 0) :
                                                l.next) &&
                                            !(f = f.call(l, S[1])).done)
                                    )
                                        return f;
                                    switch (((l = 0), (S = f ? [2 & S[0], f.value] : S)[0])) {
                                        case 0:
                                        case 1:
                                            f = S;
                                            break;
                                        case 4:
                                            return (m.label++, {
                                                value: S[1],
                                                done: !1
                                            });
                                        case 5:
                                            (m.label++, (l = S[1]), (S = [0]));
                                            continue;
                                        case 7:
                                            ((S = m.ops.pop()), m.trys.pop());
                                            continue;
                                        default:
                                            if (
                                                !(
                                                    (f = 0 < (f = m.trys).length && f[f.length - 1]) ||
                                                    (S[0] !== 6 && S[0] !== 2)
                                                )
                                            ) {
                                                m = 0;
                                                continue;
                                            }
                                            if (S[0] === 3 && (!f || (S[1] > f[0] && S[1] < f[3])))
                                                m.label = S[1];
                                            else if (S[0] === 6 && m.label < f[1])
                                                ((m.label = f[1]), (f = S));
                                            else {
                                                if (!(f && m.label < f[2])) {
                                                    (f[2] && m.ops.pop(), m.trys.pop());
                                                    continue;
                                                }
                                                ((m.label = f[2]), m.ops.push(S));
                                            }
                                    }
                                    S = a.call(i, m);
                                } catch (T) {
                                    ((S = [6, T]), (l = 0));
                                } finally {
                                    c = f = 0;
                                }
                            if (5 & S[0]) throw S[1];
                            return {
                                value: S[0] ? S[1] : void 0,
                                done: !0
                            };
                        };
                    }
                }

                function C(i, a, c) {
                    if (c || arguments.length === 2)
                        for (var l, f = 0, m = a.length; f < m; f++)
                            (!l && f in a) ||
                            ((l = l || Array.prototype.slice.call(a, 0, f))[f] = a[f]);
                    return i.concat(l || Array.prototype.slice.call(a));
                }
                Object.assign ||
                    Object.defineProperty(Object, "assign", {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function(i) {
                            if (i == null)
                                throw new TypeError("Cannot convert first argument to object");
                            for (var a = Object(i), c = 1; c < arguments.length; c++)
                                if ((l = arguments[c]) != null)
                                    for (
                                        var l = Object(l),
                                            f = Object.keys(Object(l)),
                                            m = 0,
                                            y = f.length; m < y; m++
                                    ) {
                                        var b = f[m],
                                            x = Object.getOwnPropertyDescriptor(l, b);
                                        x != null && x.enumerable && (a[b] = l[b]);
                                    }
                            return a;
                        },
                    });
                var k,
                    P = 102400,
                    B = {
                        snapshootInfo: void 0,
                        type: void 0,
                        level: void 0,
                        plugin: void 0,
                        originEvent: void 0,
                    },
                    U = "AEGIS_ID",
                    R = {
                        PV: "pv",
                        AID: "aid",
                        F_ID: "fId",
                        ERROR: "error",
                        DEVICE: "device",
                        CLOSE: "close",
                        PAGE_PERFORMANCE: "pagePerformance",
                        WEB_VITALS: "webVitals",
                        IE: "ie",
                        SPA: "spa",
                        API: "api",
                        ASSET_SPEED: "assetSpeed",
                        CUSTOM: "custom",
                        SESSION: "session",
                        BRIDGE_SPEED: "bridgeSpeed",
                        LOAD_PACKAGE: "loadPackageSpeed",
                        BLANK_SCREEN: "blankScreen",
                        WEBSOCKET: "websocket",
                        LONGTASK: "longtask",
                        PROCESS_PERFORMANCE: "processPerformance",
                        CRASH: "crash",
                        NETWORK: "network",
                    },
                    K = [
                        "aegis.qq.com",
                        "tamaegis.com",
                        "/aegis-sdk",
                        "rumt-",
                        "/flog.core.min.js",
                        "pingfore.qq.com",
                        "pingfore.tencent.com",
                        "zhiyan.tencent-cloud.net",
                        "h.trace.qq.com",
                        "btrace.qq.com",
                        "beacon.qq.com",
                        "dmplog.qq.com",
                        "qq.com/report",
                        "svibeacon.onezapp.com",
                        "cube.weixinbridge.com",
                        "doubleclick.net",
                        "pcmgrmonitor.3g.qq.com",
                        "tdm.qq.com",
                        "report.qqweb.qq.com",
                        "tpstelemetry.tencent.com",
                        "galileotelemetry.tencent.com",
                        "insight.cloud.tencent.com",
                        "facebook.com",
                        "facebook.net",
                        "google",
                        "yahoo.com",
                        "twitter.com",
                        "ga-audiences",
                        "report.idqqimg.com",
                        "arms-retcode.aliyuncs.com",
                        "px.effirst.com",
                        "sentry",
                        "baidu.com",
                        "hot-update.json",
                        "u.c.b.r.o.w.s.e.r",
                        "report.url.cn",
                        "sockjs-node",
                        "m3u8",
                        "flv",
                    ],
                    Y = [
                        "ResizeObserver loop limit exceeded",
                        "ResizeObserver loop completed with undelivered notifications",
                        "Failed to execute 'transaction'",
                        "window.indexedDB.deleteDatabase is not a function",
                    ],
                    W = {
                        data: "",
                        event: "",
                        id: "",
                        retry: void 0
                    };
                (((q = k = k || {}).data = "data"),
                    (q.event = "event"),
                    (q.id = "id"),
                    (q.retry = "retry"));
                var I,
                    O,
                    ee,
                    me,
                    _e,
                    Ie = ["level", "trace", "tag", "seq", "code"],
                    F = "SDK-88b1f242f91b60885f0c";

                function he(i, a) {
                    return typeof a == "string" ? i === a : !!i.match(a);
                }

                function Te() {
                    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
                        /[xy]/g,
                        function(i) {
                            var a = (16 * Math.random()) | 0;
                            return (i === "x" ? a : (3 & a) | 8).toString(16);
                        },
                    );
                }
                (((q = I = I || {}).INFO = "info"),
                    (q.ERROR = "error"),
                    (q.SDK_ERROR = "sdk_error"),
                    (q.PROMISE_ERROR = "promise_error"),
                    (q.AJAX_ERROR = "ajax_error"),
                    (q.SCRIPT_ERROR = "script_error"),
                    (q.WEBSOCKET_ERROR = "websocket_error"),
                    (q.IMAGE_ERROR = "image_error"),
                    (q.CSS_ERROR = "css_error"),
                    (q.MEDIA_ERROR = "media_error"),
                    (q.REPORT = "report"),
                    (q.RET_ERROR = "ret_error"),
                    (q.BRIDGE_ERROR = "brige_error"),
                    (q.BLANK_SCREEN = "blank_screen"),
                    (q.CUSTOM_ERROR = "custom_error"),
                    (q.PAGE_NOT_FOUND_ERROR = "page_not_found_error"),
                    (q.LAZY_LOAD_ERROR = "lazy_load_error"),
                    (q.MEMORY_WARNING = "memory_warning"),
                    (q.LOW_FPS = "low_fps"),
                    (q.LONGTASK = "longtask"),
                    ((q = O = O || {}).NORMAL = "normal"),
                    (q.PV = "pv"),
                    (q.API = "api"),
                    (q.CUSTOM_TIME = "custom_time"),
                    (q.CUSTOM_EVENT = "custom_event"),
                    (q.ASSETS_SPEED = "assets_speed"),
                    (q.PAGE_PERFORMANCE = "page_performance"),
                    (q.WEB_VITALS = "web_vitals"),
                    (q.SDK_ERROR = "sdk_error"),
                    (q.SESSION = "session"),
                    (q.BRIDGE = "bridge"),
                    (q.WEBSOCKET = "websocket"),
                    (q.SSE = "sse"),
                    (q.PROCESS_PERFORMANCE = "process_performance"),
                    (q.CRASH = "crash"),
                    ((q = ee = ee || {}).android = "android"),
                    (q.ios = "iOS"),
                    (q.windows = "windows"),
                    (q.macos = "macOS"),
                    (q.linux = "linux"),
                    (q.devtools = "devtools"),
                    (q.other = "other"),
                    ((q = me = me || {}).unknown = "unknown"),
                    (q.wifi = "wifi"),
                    (q.wired = "wired"),
                    (q.net2g = "2G"),
                    (q.net3g = "3G"),
                    (q.net4g = "4G"),
                    (q.net5g = "5G"),
                    (q.net6g = "6G"),
                    ((q = _e = _e || {}).PROD = "production"),
                    (q.DEV = "development"),
                    (q.GRAY = "gray"),
                    (q.PRE = "pre"),
                    (q.DAILY = "daily"),
                    (q.LOCAL = "local"),
                    (q.TEST = "test"),
                    (q.OTHER = "others"));
                var ve,
                    lt = function(i, a) {
                        if (Array.isArray(a) && a.length !== 0) {
                            for (var c = 0, l = a; c < l.length; c++)
                                if (he(i, l[c])) return !0;
                        }
                        return !1;
                    },
                    Qt = function(i, a) {
                        if (!a) return !0;
                        if (Array.isArray(a)) {
                            if (a.length === 0) return !1;
                            for (var c = 0, l = a; c < l.length; c++)
                                if (he(i, l[c])) return !0;
                        }
                        return !1;
                    },
                    ln =
                    (((q = ve = ve || {}).init = "init"),
                        (q.sampleChange = "sampleChange"),
                        (q.destroy = "destroy"),
                        (q.configChange = "configChange"),
                        (q.errorOccurred = "errorOccurred"),
                        (It.prototype.indexOf = function(i, a) {
                            for (var c = 0; c < i.length; c++)
                                if (i[c].callback === a) return c;
                            return -1;
                        }),
                        (It.prototype.on = function(i, a, c) {
                            var l;
                            if ((c === void 0 && (c = 0), this))
                                return (
                                    (l = this.eventsList[i]) ||
                                    ((this.eventsList[i] = []), (l = this.eventsList[i])),
                                    this.indexOf(l, a) === -1 &&
                                    l.push({
                                        name: i,
                                        type: c || 0,
                                        callback: a
                                    }),
                                    this
                                );
                        }),
                        (It.prototype.one = function(i, a) {
                            this.on(i, a, 1);
                        }),
                        (It.prototype.remove = function(i, a) {
                            if (this) {
                                var c = this.eventsList[i];
                                if (c) {
                                    if (a)
                                        return (
                                            c.length && ((a = this.indexOf(c, a)), c.splice(a, 1)),
                                            this
                                        );
                                    try {
                                        delete this.eventsList[i];
                                    } catch {}
                                }
                                return null;
                            }
                        }),
                        (It.prototype.clear = function() {
                            this.eventsList = {};
                        }),
                        It);

                function It() {
                    var i = this;
                    ((this.emit = function(a, c) {
                            if (i) {
                                var l;
                                if ((f = i.eventsList[a]) != null && f.length)
                                    for (var f = f.slice(), m = 0; m < f.length; m++) {
                                        l = f[m];
                                        try {
                                            var y = l.callback.apply(i, [c]);
                                            if ((l.type === 1 && i.remove(a, l.callback), y === !1))
                                                break;
                                        } catch (b) {
                                            throw b;
                                        }
                                    }
                                return i;
                            }
                        }),
                        (this.eventsList = {}));
                }

                function Pr() {
                    return ("10000000100040008000" + 1e11).replace(
                        /[018]/g,
                        function(i) {
                            return (i ^ (((16 * Math.random()) & 15) >> (i / 4))).toString(
                                16,
                            );
                        },
                    );
                }
                var We = {
                        generateTraceId: Is(16),
                        generateSpanId: Is(8)
                    },
                    wo = Array(32);

                function Is(i) {
                    return function() {
                        for (var a = 0; a < 2 * i; a++)
                            ((wo[a] = Math.floor(16 * Math.random()) + 48),
                                58 <= wo[a] && (wo[a] += 39));
                        return String.fromCharCode.apply(null, wo.slice(0, 2 * i));
                    };
                }

                function Ri(i) {
                    var a;
                    return typeof i == "object" &&
                        ((a = (i = (function(c) {
                                for (var l = 0, f = Object.keys(Ps); l < f.length; l++) {
                                    var m = f[l],
                                        y = c[m] || (typeof c.get == "function" && c.get(m));
                                    if (y) return [m, y];
                                }
                                return ["", ""];
                            })(i))[0]),
                            (i = i[1]),
                            a) ?
                        Ps[a](i) :
                        ["", ""];
                }
                var Qe,
                    Ps = {
                        sw8: function(i) {
                            var a = (i = i.split("-"))[1];
                            return ((i = i[2]), a ? [atob(a), atob(i)] : ["", ""]);
                        },
                        traceparent: function(i) {
                            return [(i = i.split("-"))[1], i[2]];
                        },
                        b3: function(i) {
                            return [(i = i.split("-"))[0], i[1]];
                        },
                        "sentry-trace": function(i) {
                            return [(i = i.split("-"))[0], i[1]];
                        },
                    },
                    Df =
                    ((Gn.prototype.generate = function(i, a) {
                            if (
                                (a === void 0 && (a = {}),
                                    (this.url = i),
                                    !lt(this.url, this.ignoreUrls) &&
                                    Qt(this.url, this.urls) &&
                                    this.traceType)
                            ) {
                                switch (this.traceType) {
                                    case "traceparent":
                                        this.traceId = this.createTraceparent();
                                        break;
                                    case "b3":
                                        this.traceId = this.createB3();
                                        break;
                                    case "sw8":
                                        this.traceId = this.createSw8();
                                        break;
                                    case "sentry-trace":
                                        this.traceId = this.createSentryTrace();
                                        break;
                                    default:
                                        return void(this.traceId = "");
                                }
                                return (
                                    a[this.traceType] && (this.traceId = a[this.traceType]), {
                                        name: this.traceType,
                                        value: this.traceId
                                    }
                                );
                            }
                        }),
                        (Gn.prototype.createTraceparent = function() {
                            var i = We.generateSpanId(),
                                a = We.generateTraceId();
                            return "00-".concat(a, "-").concat(i, "-0").concat("1");
                        }),
                        (Gn.prototype.createB3 = function() {
                            var i = We.generateSpanId(),
                                a = We.generateTraceId();
                            return "".concat(a, "-").concat(i, "-").concat(1);
                        }),
                        (Gn.prototype.createSw8 = function() {
                            var i = new URL(location.href),
                                a = Te(),
                                c = Te(),
                                l =
                                ((c = String(btoa(c))),
                                    (a = String(btoa(a))),
                                    String(btoa("aegis"))),
                                f = String(btoa("2.6.6")),
                                m = String(btoa(encodeURI(location.pathname)));
                            return (
                                (i = String(btoa(i.host))),
                                ""
                                .concat(1, "-")
                                .concat(c, "-")
                                .concat(a, "-")
                                .concat(1, "-")
                                .concat(l, "-")
                                .concat(f, "-")
                                .concat(m, "-")
                                .concat(i)
                            );
                        }),
                        (Gn.prototype.createSentryTrace = function() {
                            var i = Pr().substring(16),
                                a = Pr();
                            return "".concat(a, "-").concat(i).concat("-1");
                        }),
                        Gn);

                function Gn(i, a, c) {
                    (c === void 0 && (c = null),
                        (this.traceType = i),
                        (this.ignoreUrls = a),
                        (this.urls = c));
                }

                function Dt(i, a) {
                    return typeof i == "string" ? i.split("?")[a ? 1 : 0] || "" : i;
                }

                function $i(i, a) {
                    return (
                        a === void 0 && (a = 2048),
                        (i = String(i).split("?")[0]) == null ? void 0 : i.slice(0, a)
                    );
                }

                function So(i) {
                    return typeof i == "string" && /^\//.test(i) ?
                        (location == null ? void 0 : location.protocol) === "https:" :
                        /^https/.test(i);
                }

                function Ni(i, a, c) {
                    var l;
                    return (
                        a === void 0 && (a = ""),
                        (c = typeof c == "function" ? c(i) : ""),
                        ["api", "static"].indexOf(c) === -1 &&
                        ((l = a === void 0 ? "" : a),
                            (a = (i === void 0 ? "" : i).split("?")[0]),
                            (a = Ms.test(a)),
                            (Ms.lastIndex = 0),
                            (c =
                                a ||
                                Ff.some(function(f) {
                                    return String(l).indexOf(f) !== -1;
                                }) ?
                                "static" :
                                "api")),
                        c
                    );
                }

                function As(i, a, c) {
                    return v(void 0, void 0, void 0, function() {
                        var l, f, m, y;
                        return w(this, function(b) {
                            switch (b.label) {
                                case 0:
                                    return (
                                        b.trys.push([0, 3, , 4]),
                                        typeof(a == null ? void 0 : a.retCodeHandlerAsync) ==
                                        "function" ?
                                        [
                                            2,
                                            new Promise(function(x) {
                                                a.retCodeHandlerAsync(
                                                    i,
                                                    c == null ? void 0 : c.url,
                                                    c == null ? void 0 : c.ctx,
                                                    function(_) {
                                                        var S = _.code;
                                                        ((_ = _.isErr),
                                                            x({
                                                                code: S === void 0 ? "unknown" : S,
                                                                isErr: _,
                                                            }));
                                                    },
                                                );
                                            }),
                                        ] :
                                        typeof(a == null ? void 0 : a.retCodeHandler) !=
                                        "function" ?
                                        [3, 2] :
                                        [
                                            4,
                                            a.retCodeHandler(
                                                i,
                                                c == null ? void 0 : c.url,
                                                c == null ? void 0 : c.ctx,
                                                c == null ? void 0 : c.payload,
                                            ),
                                        ]
                                    );
                                case 1:
                                    return (
                                        (m = b.sent() || {}),
                                        (f = m.code),
                                        (m = m.isErr),
                                        [2, {
                                            code: f === void 0 ? "unknown" : f,
                                            isErr: m
                                        }]
                                    );
                                case 2:
                                    return (i = typeof i == "string" ? JSON.parse(i) : i) &&
                                        ((y =
                                                typeof((m = a == null ? void 0 : a.ret) == null ?
                                                    void 0 :
                                                    m.join) == "function"),
                                            (l = y ?
                                                (y = a == null ? void 0 : a.ret) == null ?
                                                void 0 :
                                                y.map(function(x) {
                                                    return x.toLowerCase();
                                                }) :
                                                Hf),
                                            (y = (y = Object.getOwnPropertyNames(i)).filter(
                                                function(x) {
                                                    return l.indexOf(x.toLowerCase()) !== -1;
                                                },
                                            )).length) ?
                                        (((f = i[y[0]]) !== "未知" && f !== "") ||
                                            (f = "unknown"),
                                            [
                                                2,
                                                {
                                                    code: "".concat(f),
                                                    isErr: f !== 0 && f !== "0" && f !== "unknown",
                                                },
                                            ]) :
                                        [2, Ds];
                                case 3:
                                    return (b.sent(), [2, Ds]);
                                case 4:
                                    return [2];
                            }
                        });
                    });
                }

                function Ar(i, a, c) {
                    try {
                        var l =
                            typeof a == "function" ?
                            a(i, c == null ? void 0 : c.url) || "" :
                            i;
                        return ji(l).slice(0, P);
                    } catch {
                        return "";
                    }
                }

                function _t(i) {
                    if (typeof i == "string") return i;
                    try {
                        return i instanceof Error ?
                            (JSON.stringify(i, Li()) || "undefined").replace(/"/gim, "") :
                            JSON.stringify(i, Li()) || "undefined";
                    } catch (a) {
                        return `error happen when aegis stringify: 
 `
                            .concat(
                                a.message,
                                ` 
 `,
                            )
                            .concat(a.stack);
                    }
                }

                function dn(i) {
                    if (typeof i == "string") return i;
                    try {
                        return JSON.stringify(i, Li()) || "undefined";
                    } catch (a) {
                        return `error happen when aegis stringify: 
 `
                            .concat(
                                a.message,
                                ` 
 `,
                            )
                            .concat(a.stack);
                    }
                }

                function Zn(i, a) {
                    var c;
                    return (
                        typeof i != "string" ||
                        !i ||
                        ((c = !1),
                            (c = a ?
                                typeof a == "string" ?
                                -1 < i.indexOf(a) :
                                Object.keys(a).some(function(l) {
                                    return -1 < i.indexOf(a[l]);
                                }) :
                                c)) ||
                        qf.test(i) ||
                        K.some(function(l) {
                            return -1 < i.indexOf(l);
                        })
                    );
                }

                function et(i, a, c) {
                    return v(void 0, void 0, void 0, function() {
                        return w(this, function(l) {
                            switch (l.label) {
                                case 0:
                                    if (typeof i != "function") return [3, 4];
                                    l.label = 1;
                                case 1:
                                    return (l.trys.push([1, 3, , 4]), [4, i.call(a, c, a)]);
                                case 2:
                                    return [2, l.sent() || []];
                                case 3:
                                    return (l.sent(), [2, c || []]);
                                case 4:
                                    return [2, c || []];
                            }
                        });
                    });
                }

                function Pt(i, a) {
                    if (typeof a == "string") {
                        var c = (a = a.split(".")).pop();
                        if (c)
                            return typeof(a = a.reduce(function(l, f) {
                                    return l == null ? void 0 : l[f];
                                }, i)) == "object" ?
                                a[c] :
                                a;
                    }
                }

                function Rs(i) {
                    var a = i.url,
                        c = i.status;
                    return (
                        (i = i.code),
                        "url: "
                        .concat(
                            a,
                            ` 
status: `,
                        )
                        .concat(
                            c,
                            ` 
retcode: `,
                        )
                        .concat(i)
                    );
                }

                function zi(i) {
                    return [
                        I.ERROR,
                        I.PROMISE_ERROR,
                        I.AJAX_ERROR,
                        I.SCRIPT_ERROR,
                        I.IMAGE_ERROR,
                        I.CSS_ERROR,
                        I.MEDIA_ERROR,
                        I.WEBSOCKET_ERROR,
                        I.BRIDGE_ERROR,
                        I.SDK_ERROR,
                        I.BLANK_SCREEN,
                        I.RET_ERROR,
                        I.PAGE_NOT_FOUND_ERROR,
                        I.LAZY_LOAD_ERROR,
                        I.CUSTOM_ERROR,
                    ].includes(i.level);
                }

                function $s(i) {
                    var a, c;
                    return i.length === 0 ?
                        {
                            isStuck: !1,
                            fluency: 0
                        } :
                        ((a = i.some(function(l) {
                                return 6e4 < l;
                            })),
                            (c = i.reduce(function(l, f) {
                                var m = Wf.find(function(y) {
                                    return f < y.max;
                                });
                                return l + ((m == null ? void 0 : m.score) || 0);
                            }, 0)), {
                                isStuck: a,
                                fluency: parseFloat((c / i.length).toFixed(4))
                            });
                }

                function Ns(i) {
                    var a = p({}, W);
                    try {
                        var c = (i || "").indexOf(`

`);
                        i.slice(0, c)
                            .split(
                                `
`,
                            )
                            .forEach(function(l) {
                                var f = (l = l.split(/:\s+/, 2))[0],
                                    m = l[1];
                                switch (f.toLowerCase()) {
                                    case k.data:
                                        a.data = a.data ?
                                            ""
                                            .concat(
                                                a.data,
                                                `
`,
                                            )
                                            .concat(m) :
                                            m;
                                        break;
                                    case k.event:
                                        a.event = m;
                                        break;
                                    case k.id:
                                        a.id = m;
                                        break;
                                    case k.retry:
                                        var y = parseInt(m, 10);
                                        isNaN(y) || (a.retry = y);
                                }
                            });
                    } catch {}
                    return a;
                }

                function zs(i, a) {
                    var c = a.reportUrls;
                    return ((a = a.ignoreUrls), !(lt(i, a) || !Qt(i, c)));
                }

                function Ls(i) {
                    var a = i.isWhiteList,
                        c = i.requestUrl,
                        l = i.config,
                        f = i.isErrorApi;
                    return (
                        (i = i.reportWhenError),
                        !Zn(c, Pt(l, "hostUrl")) &&
                        (!!a ||
                            !(!f || !i) ||
                            ((f =
                                    (a = Xn == null ? void 0 : Xn.test) == null ?
                                    void 0 :
                                    a.call(Xn, c)),
                                (l = (a =
                                        (i = l == null ? void 0 : l.plugin) == null ? void 0 : i.api)
                                    .reportUrls),
                                (a = zs(c, {
                                    reportUrls: l,
                                    ignoreUrls: (i = a.ignoreUrls)
                                })),
                                !f && a))
                    );
                }

                function js(i) {
                    var a,
                        c = i.isErrorApi,
                        l = i.reportWhenError;
                    return (
                        !!i.isWhiteList ||
                        !(!c || !l) ||
                        ((c = i.requestUrl),
                            (l = i.apiConfig),
                            (i = i.apiDetail),
                            (a = l.apiDetailIgnoreUrls),
                            zs(c, {
                                reportUrls: (l = l.apiDetailReportUrls),
                                ignoreUrls: a
                            }) &&
                            i)
                    );
                }
                (((q = Qe = Qe || {})[(q.number = -1)] = "number"), (q.string = ""));
                var Ft,
                    Rr,
                    Ff = [
                        "application/xhtml+xml",
                        "application/xml",
                        "application/pdf",
                        "application/pkcs12",
                        "application/javascript",
                        "application/x-javascript",
                        "application/ecmascript",
                        "application/vnd.mspowerpoint",
                        "application/vnd.apple.mpegurl",
                        "application/ogg",
                        "text/css",
                        "text/javascript",
                        "image",
                        "audio",
                        "video",
                        "video/mp2t",
                    ],
                    Ms =
                    /\.(json|js|css|jpg|jpeg|png|svg|apng|webp|gif|bmp|mp4|mp3|ts|mpeg|wav|webm|ogg|flv|m3u8|ttf|woff2|otf|eot|woff|html|htm|shtml|shtm|wasm|atlas|pag|)$/gi,
                    Hf = ["ret", "retcode", "code", "errcode"],
                    Ds = {
                        code: "unknown",
                        isErr: !1
                    },
                    Li = function() {
                        var i = new WeakSet();
                        return function(a, c) {
                            if (c instanceof Error)
                                return "Error.message: "
                                    .concat(
                                        c.message,
                                        ` 
  Error.stack: `,
                                    )
                                    .concat(c.stack);
                            if (typeof c == "object" && c !== null) {
                                if (i.has(c)) return "[Circular ".concat(a || "root", "]");
                                i.add(c);
                            }
                            return c;
                        };
                    },
                    ji = function(i, a) {
                        a === void 0 && (a = 3);
                        var c,
                            l,
                            f,
                            m = "";
                        return (
                            Array.isArray(i) ?
                            ((m += "["),
                                (c = i.length),
                                i.forEach(function(y, b) {
                                    m =
                                        (m +=
                                            typeof y == "object" && 1 < a ? ji(y, a - 1) : Uf(y)) +
                                        "".concat(b === c - 1 ? "" : ",");
                                }),
                                (m += "]")) :
                            i instanceof Object ?
                            ((m = "{"),
                                (l = Object.keys(i)),
                                (f = l.length),
                                l.forEach(function(y, b) {
                                    (typeof i[y] == "object" && 1 < a ?
                                        (m += '"'.concat(y, '":').concat(ji(i[y], a - 1))) :
                                        (m += Bf(y, i[y])),
                                        (m += "".concat(
                                            b === f - 1 || (b < f - 1 && i[l[b + 1]] === void 0) ?
                                            "" :
                                            ",",
                                        )));
                                }),
                                (m += "}")) :
                            (m += i),
                            m
                        );
                    },
                    Bf = function(i, a) {
                        var c = typeof a,
                            l = "";
                        return (
                            c == "string" || c == "object" ?
                            (l += '"'.concat(i, '":"').concat(a, '"')) :
                            typeof a == "function" ?
                            (l += '"'.concat(i, '":"function ').concat(a.name, '"')) :
                            typeof a == "symbol" ?
                            (l += '"'.concat(i, '":"symbol"')) :
                            (typeof a != "number" && c != "boolean") ||
                            (l += '"'.concat(i, '": ').concat(a)),
                            l
                        );
                    },
                    Uf = function(i) {
                        var a = typeof i;
                        return (
                            "" +
                            (a == "undefined" || a == "symbol" || a == "function" ?
                                "null" :
                                a == "string" || a == "object" ?
                                '"'.concat(i, '"') :
                                i)
                        );
                    },
                    qf = /data:(image|text|application|font)\/.*;base64/,
                    xt = function(i) {
                        for (var a = [], c = 1; c < arguments.length; c++)
                            a[c - 1] = arguments[c];
                        if (!a.length) return i;
                        var l,
                            f = a.shift();
                        for (l in f)
                            typeof f[l] == "object" &&
                            f[l] !== null &&
                            i.hasOwnProperty(l) &&
                            typeof i[l] == "object" &&
                            i[l] !== null ?
                            xt(i[l], f[l]) :
                            (i[l] = f[l]);
                        return xt.apply(void 0, C([i], a, !1));
                    },
                    Wf = [{
                            max: 500,
                            score: 1
                        },
                        {
                            max: 1e3,
                            score: 0.5
                        },
                        {
                            max: 3e3,
                            score: 0.25
                        },
                        {
                            max: 1e4,
                            score: 0.125
                        },
                        {
                            max: 6e4,
                            score: 0.0625
                        },
                    ],
                    Xn = /\.flv(\?|$)/i,
                    Gf =
                    ((Ht.prototype.patch = function(i) {
                            try {
                                this.canUse(i) &&
                                    this.exist(i) &&
                                    (this.triggerInit(i),
                                        this.triggerOnNewAegis(i),
                                        this.plugins.push(i));
                            } catch (a) {
                                this.aegis.logger.error(
                                    "Failed to patch plugin ".concat(i.name, ": ").concat(a),
                                );
                            }
                        }),
                        (Ht.prototype.unPatch = function(i) {
                            var a = this.plugins.indexOf(i);
                            a !== -1 &&
                                (this.plugins.splice(a, 1), this.plugins.length === 0) &&
                                this.uninstall(i);
                        }),
                        (Ht.prototype.uninstall = function(i) {
                            var a;
                            (a = (a = i.option) == null ? void 0 : a.destroy) != null &&
                                a.call(i.option, this.aegis, this.getConfig(i));
                        }),
                        (Ht.prototype.walk = function(i) {
                            var a = this;
                            this.plugins.forEach(function(c) {
                                a.canUse(c) && i(c, a.getConfig(c));
                            });
                        }),
                        (Ht.prototype.canUse = function(i) {
                            return (
                                !i || !(!(i = this.getConfig(i)) || typeof i != "object") || !!i
                            );
                        }),
                        (Ht.prototype.getConfig = function(i) {
                            var a;
                            return (a = (a = this.config) == null ? void 0 : a[i.name]) !=
                                null ?
                                a :
                                (a = this.aegis.config) == null ?
                                void 0 :
                                a[i.name];
                        }),
                        (Ht.prototype.exist = function(i) {
                            return this.plugins.indexOf(i) === -1;
                        }),
                        (Ht.prototype.triggerInit = function(i) {
                            var a;
                            this.initializedPlugin[i.name] ||
                                ((i.option.aegis = this.aegis),
                                    (i.aegis = this.aegis),
                                    (this.initializedPlugin[i.name] = !0),
                                    (a = (a = i.option) == null ? void 0 : a.init) == null) ||
                                a.call(i.option, this.aegis, this.getConfig(i));
                        }),
                        (Ht.prototype.triggerOnNewAegis = function(i) {
                            var a;
                            (et(this.aegis.config.onBeforeCollect, this.aegis),
                                (a = (a = i.option) == null ? void 0 : a.onNewAegis) != null &&
                                a.call(i.option, this.aegis, this.getConfig(i)));
                        }),
                        Ht);

                function Ht(i, a) {
                    ((this.plugins = []),
                        (this.initializedPlugin = {}),
                        (this.aegis = i),
                        (this.config = a));
                }

                function Fs(i) {
                    return i.filter(function(a, c) {
                        return (
                            (a == null ? void 0 : a.requestType) !== "static" ||
                            !i.find(function(l, f) {
                                return (
                                    (a == null ? void 0 : a.url) === l.url &&
                                    (a == null ? void 0 : a.status) === 200 &&
                                    c < f
                                );
                            })
                        );
                    });
                }

                function Zf(i) {
                    return new Promise(function(a) {
                        return Array.isArray(i) ?
                            a(
                                i.map(function(c) {
                                    return (
                                        (l = p(p({}, c), {
                                            msg: typeof c.msg == "string" ?
                                                c.msg :
                                                [].concat(c.msg).map(_t).join(" "),
                                        })),
                                        Ie.forEach(function(f) {
                                            l[f] || delete l[f];
                                        }),
                                        l
                                    );
                                    var l;
                                }),
                            ) :
                            a([
                                p(p({}, i), {
                                    msg: typeof i.msg == "string" ? i.msg : _t(i.msg),
                                }),
                            ]);
                    });
                }

                function Mi(i) {
                    if (Array.isArray(i) && i.length !== 0)
                        return function(a) {
                            return new Promise(function(c) {
                                var l = function(f, m) {
                                    return v(void 0, void 0, void 0, function() {
                                        var y;
                                        return w(this, function(b) {
                                            switch (b.label) {
                                                case 0:
                                                    if (!(f < i.length)) return [3, 5];
                                                    ((y = void 0), (b.label = 1));
                                                case 1:
                                                    return (b.trys.push([1, 3, , 4]), [4, i[f](m)]);
                                                case 2:
                                                    return ((y = b.sent()), [3, 4]);
                                                case 3:
                                                    return (b.sent(), (y = m), [3, 4]);
                                                case 4:
                                                    return (
                                                        y != null && y.length ?
                                                        l(f + 1, y) :
                                                        c != null && c([]),
                                                        [3, 6]
                                                    );
                                                case 5:
                                                    (c != null && c(m), (b.label = 6));
                                                case 6:
                                                    return [2];
                                            }
                                        });
                                    });
                                };
                                l(0, a);
                            });
                        };
                    throw new TypeError(
                        "createPipeline needs at least one function param",
                    );
                }

                function Di(i, a) {
                    Object.getOwnPropertyNames(i).forEach(function(c) {
                        typeof i[c] == "function" &&
                            c !== "constructor" &&
                            (a ?
                                (a[c] =
                                    c === "sendPipeline" ?
                                    function() {
                                        return function() {};
                                    } :
                                    function() {}) :
                                (i[c] = function() {}));
                    });
                }

                function Hs(i) {
                    return Promise.resolve(i);
                }
                (((q = Ft = Ft || {})[(q.hasNotFetched = 0)] = "hasNotFetched"),
                    (q[(q.fetching = 1)] = "fetching"),
                    (q[(q.alreadyFetched = 2)] = "alreadyFetched"),
                    ((q = Rr = Rr || {}).normalEnd = "normalEnd"),
                    (q.errorEnd = "errorEnd"));
                var en,
                    Bs = {
                        name: "sample",
                        create: function(i) {
                            function a(_, S, T) {
                                ((i.fetchSampleStatus = Ft.alreadyFetched),
                                    Math.floor(1e3 * Math.random()) < 1 &&
                                    x.push({
                                        msg: "sampleConfig",
                                        level: I.INFO,
                                        type: O.NORMAL,
                                        sampleConfig: i.sampleMap,
                                        endType: _,
                                        errorMsg: T,
                                        remoteSample: S,
                                    }),
                                    i.send(x.splice(0, x.length)));
                            }

                            function c() {
                                return (
                                    (i.fetchSampleStatus = Ft.fetching),
                                    new Promise(function(_) {
                                        var S = Date.now();
                                        i.request({
                                                url: ""
                                                    .concat(Pt(i.config, "hostUrl.whiteListUrl"), "?uid=")
                                                    .concat(b, "&topic=")
                                                    .concat(i.config.id),
                                                payload: JSON.stringify({}),
                                                headers: i.config.addXTopicKey ?
                                                    {
                                                        "X-Topic-Key": i.bean.id
                                                    } :
                                                    {},
                                                method: "GET",
                                            },
                                            function(T) {
                                                try {
                                                    var E,
                                                        A,
                                                        G,
                                                        M,
                                                        Z = T.data || JSON.parse(T),
                                                        j = Z.is_in_white_list,
                                                        L = Z.sample_map,
                                                        H = L === void 0 ? {} : L,
                                                        $ = Z.server_time,
                                                        re = Z.start_server_time;
                                                    (Z.code !== 0 ?
                                                        ((i.sampleMap = y), i.event.emit(ve.sampleChange)) :
                                                        ((i.isWhiteList = !!j),
                                                            j && i.config.whiteList ?
                                                            Object.keys(R).forEach(function(ae) {
                                                                y[R[ae]] = 1;
                                                            }) :
                                                            ((E = {}),
                                                                Object.keys(H).forEach(function(ae) {
                                                                    E[
                                                                        ae.replace(/(_\w)/g, function(Q) {
                                                                            return Q[1].toUpperCase();
                                                                        })
                                                                    ] = H[ae] / 100;
                                                                }),
                                                                xt(y, E)),
                                                            (i.sampleMap = y),
                                                            i.event.emit(ve.sampleChange),
                                                            (G =
                                                                ((A = Date.now()) -
                                                                    S -
                                                                    (Number($) - Number(re))) /
                                                                2),
                                                            (M = Number($) + G),
                                                            (i.serverTimeGap = Math.floor(M - A))),
                                                        a(Rr.normalEnd, H),
                                                        _());
                                                } catch (ae) {
                                                    ((i.sampleMap = y),
                                                        i.event.emit(ve.sampleChange),
                                                        a(
                                                            Rr.errorEnd, {},
                                                            ae == null ? void 0 : ae.message,
                                                        ),
                                                        _());
                                                }
                                            },
                                            function(T) {
                                                ((i.sampleMap = y),
                                                    i.event.emit(ve.sampleChange),
                                                    a(Rr.errorEnd, {}, T == null ? void 0 : T.message),
                                                    _());
                                            },
                                        );
                                    })
                                );
                            }
                            ((f = i),
                                (m = {}),
                                Object.keys(R).forEach(function(_) {
                                    _ = R[_];
                                    var S = Pt(f.config, "sample.".concat(_));
                                    m[_] = S;
                                }));
                            var l,
                                f,
                                m,
                                y = m,
                                b = (l = i.config) == null ? void 0 : l.uid,
                                x = [];
                            return (
                                i.event.on(ve.configChange, function(_) {
                                    (_.uid === b && Ft.alreadyFetched === i.fetchSampleStatus) ||
                                    ((b = _.uid), setTimeout(c, _.uid ? 50 : 500));
                                }),
                                function(_) {
                                    return new Promise(function(S) {
                                        return v(void 0, void 0, void 0, function() {
                                            var T, E, A;
                                            return w(this, function(G) {
                                                switch (G.label) {
                                                    case 0:
                                                        return Ft.alreadyFetched === i.fetchSampleStatus ?
                                                            ((T = i.sampleMap),
                                                                (E = i.config.forceReportErrorLog),
                                                                (A = _.filter(function(M) {
                                                                    return (
                                                                        !M.plugin ||
                                                                        !(
                                                                            (!i.isWhiteList &&
                                                                                M != null &&
                                                                                M.isWhiteListDyeLog) ||
                                                                            ((!E || !zi(M)) &&
                                                                                ((M =
                                                                                        M.plugin === R.SPA ? R.PV : M.plugin),
                                                                                    (M = T[M]) !== void 0) &&
                                                                                Math.random() > M)
                                                                        )
                                                                    );
                                                                })),
                                                                [2, S(A)]) :
                                                            ((x = x.concat(_)),
                                                                Ft.hasNotFetched !== i.fetchSampleStatus ?
                                                                [3, 2] :
                                                                [4, c()]);
                                                    case 1:
                                                        return (G.sent(), [2, S([])]);
                                                    case 2:
                                                        return Ft.fetching === i.fetchSampleStatus ?
                                                            [2, S([])] :
                                                            [2];
                                                }
                                            });
                                        });
                                    });
                                }
                            );
                        },
                    },
                    Us = {
                        name: "throttle",
                        create: function(i, a) {
                            var c,
                                l = [],
                                f = i.config;
                            return (
                                i.event.on(ve.destroy, function() {
                                    l.length = 0;
                                }),
                                function(m) {
                                    return new Promise(function(y) {
                                        if (
                                            ((l = l.concat(m)),
                                                (a && l.length >= a) || (i.sendNow && 0 < l.length))
                                        )
                                            return (
                                                (l = Fs(l)),
                                                c && clearTimeout(c),
                                                y(l.splice(0, (!i.sendNow && a) || l.length))
                                            );
                                        (c && clearTimeout(c),
                                            (c = setTimeout(function() {
                                                ((c = null), (l = Fs(l)), y(l.splice(0, l.length)));
                                            }, f.delay)));
                                    });
                                }
                            );
                        },
                    },
                    Xf = {
                        name: "format",
                        create: function() {
                            return Zf;
                        },
                    },
                    Vf = {
                        name: "lengthLimit",
                        create: function(i) {
                            return function(a) {
                                return v(void 0, void 0, void 0, function() {
                                    var c;
                                    return w(this, function(l) {
                                        return (
                                            (c = i.config),
                                            (a = a.map(function(f) {
                                                var m,
                                                    y = c.maxLength || P;
                                                try {
                                                    if (!f.msg || f.msg.length <= y) return f;
                                                    f.msg =
                                                        (m = f.msg) == null ? void 0 : m.substring(0, y);
                                                } catch {
                                                    f.msg =
                                                        (y = _t(f.msg)) == null ?
                                                        void 0 :
                                                        y.substring(0, c.maxLength);
                                                }
                                                return f;
                                            })),
                                            [2, Promise.resolve(a)]
                                        );
                                    });
                                });
                            };
                        },
                    },
                    _o = {},
                    Fi = {},
                    Jf = {
                        name: "repeatLimit",
                        create: function(i) {
                            return (
                                (a = i.config),
                                function(c) {
                                    return new Promise(function(l) {
                                        var f = typeof a.repeat == "number" ? a.repeat : 60;
                                        if (!Pt(a, "sample.speed") || f <= 0) return l(c);
                                        var m = (a == null ? void 0 : a.id) || "0",
                                            y = Fi[m] || {};
                                        l(
                                            c.filter(function(b) {
                                                var x,
                                                    _ = !y[b.url] || y[b.url] < f;
                                                return (
                                                    _ ?
                                                    ((y[b.url] = 1 + ~~y[b.url]), (Fi[m] = y)) :
                                                    _o[m] ||
                                                    _o[(x = m)] ||
                                                    (_o[x] = setTimeout(function() {
                                                        ((Fi[x] = {}), (_o[x] = null));
                                                    }, 6e4)),
                                                    _
                                                );
                                            }),
                                        );
                                    });
                                }
                            );
                            var a;
                        },
                    },
                    fn = {},
                    xo = {},
                    qs = {
                        name: "errorLogCollectLimit",
                        create: function(i) {
                            var a,
                                c =
                                typeof(a = (a = i.config) === void 0 ? {} : a).repeat ==
                                "number" ?
                                a.repeat :
                                60,
                                l = "".concat(
                                    (a = a == null ? void 0 : a.id) != null ? a : 0,
                                    "_error",
                                ),
                                f = xo[l] || {};
                            return (
                                (xo[l] = f),
                                i.event.on(ve.destroy, function() {
                                    (delete xo[l], fn[l] && (clearTimeout(fn[l]), delete fn[l]));
                                }),
                                function(m) {
                                    return new Promise(function(y) {
                                        if (c <= 0) return y(m);
                                        y(
                                            m.filter(function(b) {
                                                var x,
                                                    _ = b.level,
                                                    S = b.msg;
                                                return (
                                                    !(_ && S && zi(b) && typeof S == "string") ||
                                                    ((b = ""
                                                            .concat(_, "_")
                                                            .concat(
                                                                (_ =
                                                                    (b = S == null ? void 0 : S.slice) == null ?
                                                                    void 0 :
                                                                    b.call(S, 0, 200)) == null ?
                                                                void 0 :
                                                                _.replace(/[\r\n]+/g, ""),
                                                            )),
                                                        (S = (_ = (S = f[b]) != null ? S : 0) < c) ?
                                                        (f[b] = _ + 1) :
                                                        fn[l] ||
                                                        (fn[(x = l)] ||
                                                            (fn[x] = setTimeout(function() {
                                                                ((xo[x] = {}), (fn[x] = null));
                                                            }, 6e4)),
                                                            fn[x]),
                                                        S)
                                                );
                                            }),
                                        );
                                    });
                                }
                            );
                        },
                    },
                    Kf =
                    (((q = en = en || {})[(q.ERROR = 0)] = "ERROR"),
                        (q[(q.WARN = 1)] = "WARN"),
                        (q[(q.INFO = 2)] = "INFO"),
                        (q[(q.DEBUG = 3)] = "DEBUG"),
                        (In.prototype.debug = function(i) {
                            this.log(en.DEBUG, i);
                        }),
                        (In.prototype.info = function(i) {
                            this.log(en.INFO, i);
                        }),
                        (In.prototype.warn = function(i) {
                            this.log(en.WARN, i);
                        }),
                        (In.prototype.error = function(i) {
                            this.log(en.ERROR, i);
                        }),
                        (In.prototype.log = function(i, a) {
                            this.instance.fetchSampleStatus === Ft.alreadyFetched ?
                                this.instance.isWhiteList && this.consoleLog(i, a) :
                                this.queue.push({
                                    level: i,
                                    message: a
                                });
                        }),
                        (In.prototype.consoleLog = function(i, a) {
                            i <= this.logLevel || this.instance.isWhiteList;
                        }),
                        In),
                    q =
                    ((pe.prototype.init = function() {
                            var i = this,
                                a = this.config.env === _e.PROD ? en.ERROR : en.DEBUG;
                            ((this.logger = new Kf(a, this)),
                                (this.pluginController = new Gf(this, this.config.plugin)),
                                pe.installedPlugins.forEach(function(c) {
                                    i.pluginController.patch(c);
                                }),
                                this.event.emit(ve.init));
                        }),
                        (pe.prototype.setConfig = function(i) {
                            var a;
                            return (
                                xt(this.config, i),
                                this.tempContext.isInTempContext ?
                                ((a = p({}, this.tempContext.originBean)),
                                    (i = this.getNewBean(i, a)),
                                    (this.tempContext.originBean = i)) :
                                this.extendBean(this.config),
                                this.event.emit(ve.configChange, this.config),
                                et(this.config.onConfigChange, this),
                                this.config
                            );
                        }),
                        (pe.prototype.setTempConfig = function(i, a) {
                            return v(this, void 0, void 0, function() {
                                return w(this, function(c) {
                                    switch (c.label) {
                                        case 0:
                                            ((this.sendNow = !0),
                                                (this.tempContext.isInTempContext = !0),
                                                (this.tempContext.originBean = p({}, this.bean)),
                                                this.extendBean(i),
                                                (c.label = 1));
                                        case 1:
                                            return (c.trys.push([1, 3, , 4]), [4, a()]);
                                        case 2:
                                        case 3:
                                            return (c.sent(), [3, 4]);
                                        case 4:
                                            return (
                                                (this.tempContext.isInTempContext = !1),
                                                (this.sendNow = !1),
                                                this.extendBean(this.tempContext.originBean),
                                                this.send(
                                                    this.tempContext.catchLogs.splice(
                                                        0,
                                                        this.tempContext.catchLogs.length,
                                                    ),
                                                ),
                                                [2]
                                            );
                                    }
                                });
                            });
                        }),
                        (pe.use = function(i) {
                            pe.installedPlugins.indexOf(i) === -1 &&
                                pe.installedPlugins.push(i);
                        }),
                        (pe.unuse = function(i) {
                            (i = pe.installedPlugins.indexOf(i)) !== -1 &&
                                pe.installedPlugins.splice(i, 1);
                        }),
                        (pe.prototype.sendCustomLogs = function(i) {
                            return v(this, arguments, void 0, function(a, c, l, f) {
                                var m,
                                    y,
                                    b,
                                    x,
                                    _ = this;
                                return (
                                    c === void 0 && (c = I.INFO),
                                    l === void 0 && (l = O.NORMAL),
                                    f === void 0 &&
                                    (f = {
                                        canCustom: !1,
                                        isWhiteListDyeLog: !1
                                    }),
                                    w(this, function(S) {
                                        switch (S.label) {
                                            case 0:
                                                return this.canUseCustomPlugin() ?
                                                    ((m = f.canCustom),
                                                        (y = f.isWhiteListDyeLog),
                                                        [4, et(this.config.onBeforeCollect, this)]) :
                                                    [2];
                                            case 1:
                                                return (
                                                    S.sent(),
                                                    (T = {
                                                        logLevel: c,
                                                        logType: l,
                                                        canCustom: m
                                                    }),
                                                    (b = a
                                                        .map(function(E) {
                                                            var A = T.canCustom,
                                                                G = T.logLevel,
                                                                M = T.logType,
                                                                Z = typeof E == "object" ? E : {
                                                                    msg: E
                                                                },
                                                                j = Z.msg || "",
                                                                L = void 0;
                                                            return (
                                                                G === I.CUSTOM_ERROR && (L = j),
                                                                Z instanceof Error ?
                                                                ((j = _t(Z)), (L = Z.message)) :
                                                                j instanceof Error &&
                                                                ((L = j.message), (j = _t(j))),
                                                                p(p({
                                                                    errorMsg: L
                                                                }, Z), {
                                                                    msg: j,
                                                                    level: (L = A ? E.level : null) != null ? L : G,
                                                                    type: (Z = A ? E.type : null) != null ? Z : M,
                                                                    plugin: R.CUSTOM,
                                                                })
                                                            );
                                                        })
                                                        .map(function(E) {
                                                            var A;
                                                            return p(p({
                                                                timestamp: Date.now()
                                                            }, E), {
                                                                aegisv2_goto: We.generateSpanId(),
                                                                isWhiteListDyeLog: y || void 0,
                                                                type: (A = E.type) != null ? A : O.NORMAL,
                                                                level: (A = E.level) != null ? A : I.INFO,
                                                                plugin: R.CUSTOM,
                                                                snapshootInfo: JSON.stringify(_.snapshootInfo),
                                                            });
                                                        })),
                                                    [4, et(this.config.onCollected, this, b)]
                                                );
                                            case 2:
                                                return 0 < (b = S.sent()).length ?
                                                    this.tempContext.isInTempContext ?
                                                    [4, this.immediatelySend(b)] :
                                                    [3, 4] :
                                                    [3, 7];
                                            case 3:
                                                return ((x = S.sent()), [3, 6]);
                                            case 4:
                                                return [4, this.send(b)];
                                            case 5:
                                                ((x = S.sent()), (S.label = 6));
                                            case 6:
                                                return [2, x];
                                            case 7:
                                                return [2];
                                        }
                                        var T;
                                    })
                                );
                            });
                        }),
                        (pe.prototype.info = function() {
                            for (var i = [], a = 0; a < arguments.length; a++)
                                i[a] = arguments[a];
                            return v(this, void 0, void 0, function() {
                                return w(this, function(c) {
                                    switch (c.label) {
                                        case 0:
                                            return [4, this.sendCustomLogs(i, I.INFO)];
                                        case 1:
                                            return (c.sent(), [2]);
                                    }
                                });
                            });
                        }),
                        (pe.prototype.whiteListInfo = function() {
                            for (var i = [], a = 0; a < arguments.length; a++)
                                i[a] = arguments[a];
                            return v(this, void 0, void 0, function() {
                                return w(this, function(c) {
                                    switch (c.label) {
                                        case 0:
                                            return [
                                                4,
                                                this.sendCustomLogs(i, I.INFO, O.NORMAL, {
                                                    canCustom: !0,
                                                    isWhiteListDyeLog: !0,
                                                }),
                                            ];
                                        case 1:
                                            return (c.sent(), [2]);
                                    }
                                });
                            });
                        }),
                        (pe.prototype.report = function() {
                            for (var i = [], a = 0; a < arguments.length; a++)
                                i[a] = arguments[a];
                            return v(this, void 0, void 0, function() {
                                return w(this, function(c) {
                                    switch (c.label) {
                                        case 0:
                                            return [
                                                4,
                                                this.sendCustomLogs(i, I.REPORT, O.NORMAL, {
                                                    canCustom: !0,
                                                    isWhiteListDyeLog: !1,
                                                }),
                                            ];
                                        case 1:
                                            return (c.sent(), [2]);
                                    }
                                });
                            });
                        }),
                        (pe.prototype.error = function() {
                            for (var i = [], a = 0; a < arguments.length; a++)
                                i[a] = arguments[a];
                            return v(this, void 0, void 0, function() {
                                return w(this, function(c) {
                                    switch (c.label) {
                                        case 0:
                                            return [4, this.sendCustomLogs(i, I.CUSTOM_ERROR)];
                                        case 1:
                                            return (c.sent(), [2]);
                                    }
                                });
                            });
                        }),
                        (pe.prototype.clearPluginCache = function() {
                            this.pluginController.plugins.forEach(function(i) {
                                var a;
                                (a = (a = i.option) == null ? void 0 : a.clear) != null &&
                                    a.call(i.option, i);
                            });
                        }),
                        (pe.prototype.clearThrottleCache = function() {
                            ((this.sendNow = !0), this.send([]), (this.sendNow = !1));
                        }),
                        (pe.prototype.reportEvent = function(i) {
                            return v(this, void 0, void 0, function() {
                                var a;
                                return w(this, function(c) {
                                    switch (c.label) {
                                        case 0:
                                            return i ?
                                                (a =
                                                    typeof i == "string" ?
                                                    {
                                                        name: i,
                                                        msg: "report_event",
                                                        level: I.INFO,
                                                        plugin: R.CUSTOM,
                                                    } :
                                                    i).name ?
                                                (typeof a.name != "string" &&
                                                    (this.logger.warn(
                                                            "reportEvent params name must be string",
                                                        ),
                                                        (a.name = String(a.name))),
                                                    [
                                                        4,
                                                        this.sendCustomLogs([a], I.INFO, O.CUSTOM_EVENT),
                                                    ]) :
                                                (this.logger.warn("reportEvent params error"), [2]) :
                                                [2];
                                        case 1:
                                            return (c.sent(), [2]);
                                    }
                                });
                            });
                        }),
                        (pe.prototype.canUseCustomPlugin = function() {
                            var i;
                            return (
                                ((i = this.config.plugin) == null ? void 0 : i[R.CUSTOM]) !== !1
                            );
                        }),
                        (pe.prototype.reportTime = function(i, a) {
                            return v(this, void 0, void 0, function() {
                                return w(this, function(c) {
                                    switch (c.label) {
                                        case 0:
                                            return typeof i != "object" ?
                                                [3, 2] :
                                                [4, this.reportT(i)];
                                        case 1:
                                            return [2, c.sent()];
                                        case 2:
                                            return typeof i != "string" ?
                                                (this.logger.warn(
                                                        "reportTime: first param must be a string",
                                                    ),
                                                    [2]) :
                                                typeof a != "number" ?
                                                (this.logger.warn(
                                                        "reportTime: second param must be number",
                                                    ),
                                                    [2]) :
                                                a < 0 || 6e4 < a ?
                                                (this.logger.warn(
                                                        "reportTime: duration must between 0 and 60000",
                                                    ),
                                                    [2]) :
                                                [4, this.submitCustomTime(i, a)];
                                        case 3:
                                            return (c.sent(), [2]);
                                    }
                                });
                            });
                        }),
                        (pe.prototype.reportT = function(i) {
                            return v(this, void 0, void 0, function() {
                                var a, c, l;
                                return w(this, function(f) {
                                    switch (f.label) {
                                        case 0:
                                            return (
                                                (a = i.name),
                                                (c = i.duration),
                                                (l = g(i, ["name", "duration"])),
                                                typeof a != "string" || typeof c != "number" ?
                                                (this.logger.warn("reportTime: params error"), [2]) :
                                                c < 0 || 6e4 < c ?
                                                (this.logger.warn(
                                                        "reportTime: duration must between 0 and 60000",
                                                    ),
                                                    [2]) :
                                                [4, this.submitCustomTime(a, c, l)]
                                            );
                                        case 1:
                                            return [2, f.sent()];
                                    }
                                });
                            });
                        }),
                        (pe.prototype.time = function(i, a) {
                            typeof i == "string" ?
                                this.timeMap[i] ?
                                this.logger.warn("Timer ".concat(i, " already exists")) :
                                (this.timeMap[i] = {
                                    startTime: Date.now(),
                                    customParams: a,
                                }) :
                                this.logger.warn("time: first param must be a string");
                        }),
                        (pe.prototype.timeEnd = function(i, a) {
                            return v(this, void 0, void 0, function() {
                                var c, l;
                                return w(this, function(f) {
                                    switch (f.label) {
                                        case 0:
                                            return typeof i != "string" ?
                                                (this.logger.warn(
                                                        "timeEnd: first param must be a string",
                                                    ),
                                                    [2]) :
                                                this.timeMap[i] ?
                                                ((l = this.timeMap[i]),
                                                    (c = l.startTime),
                                                    (l = l.customParams),
                                                    delete this.timeMap[i],
                                                    [
                                                        4,
                                                        this.submitCustomTime(
                                                            i,
                                                            Date.now() - c,
                                                            p(p({}, l), a),
                                                        ),
                                                    ]) :
                                                [3, 2];
                                        case 1:
                                            return (f.sent(), [3, 3]);
                                        case 2:
                                            (this.logger.warn("Timer ".concat(i, " does not exist")),
                                                (f.label = 3));
                                        case 3:
                                            return [2];
                                    }
                                });
                            });
                        }),
                        (pe.prototype.submitCustomTime = function(i, a, c) {
                            return v(this, void 0, void 0, function() {
                                return w(this, function(l) {
                                    switch (l.label) {
                                        case 0:
                                            return [
                                                4,
                                                this.sendCustomLogs(
                                                    [
                                                        p({
                                                                name: i,
                                                                duration: a,
                                                                msg: "custom_time",
                                                                plugin: R.CUSTOM,
                                                            },
                                                            c,
                                                        ),
                                                    ],
                                                    I.INFO,
                                                    O.CUSTOM_TIME,
                                                ),
                                            ];
                                        case 1:
                                            return (l.sent(), [2]);
                                    }
                                });
                            });
                        }),
                        (pe.prototype.updateSnapshootInfo = function(i) {
                            xt(this.snapshootInfo, i);
                        }),
                        (pe.prototype.extendBean = function(i) {
                            ((i = this.getNewBean(i, this.bean)), xt(this.bean, i));
                        }),
                        (pe.prototype.generateRequestOptionsByLogs = function(i) {
                            var a,
                                c = this,
                                l =
                                ((i = i.map(function(f) {
                                        var m = f.snapshootInfo || dn(c.snapshootInfo || {}),
                                            y = {};
                                        try {
                                            xt(y, JSON.parse(m));
                                        } catch {}
                                        return (
                                            f.aegisv2_goto || (f.aegisv2_goto = We.generateSpanId()),
                                            f.timestamp || (f.timestamp = Date.now()), {
                                                message: dn(
                                                    p(p(p({}, f), B), {
                                                        timestamp: f.timestamp + c.serverTimeGap,
                                                    }),
                                                ),
                                                fields: dn(
                                                    p(p({}, y), {
                                                        type: (m = f.type) != null ? m : O.NORMAL,
                                                        level: (y = f.level) != null ? y : I.INFO,
                                                        plugin: f.plugin,
                                                    }),
                                                ),
                                            }
                                        );
                                    })),
                                    dn({
                                        topic: this.bean.id || "",
                                        bean: p(p({}, this.bean), {
                                            id: void 0
                                        }),
                                        ext: dn(
                                            ((l = this.config) == null ? void 0 : l.extField) || {},
                                        ),
                                        scheme: "v2",
                                        d2: ((a = {}),
                                            i.forEach(function(f) {
                                                var m = f.fields;
                                                (a[m] || (a[m] = {
                                                        fields: f.fields,
                                                        message: []
                                                    }),
                                                    a[m].message.push(f.message));
                                            }),
                                            Object.keys(a).map(function(f) {
                                                return a[f];
                                            })),
                                        v: "2.6.6",
                                    }));
                            return (
                                (i = {
                                    payload: l,
                                    isCompressed: !1
                                }),
                                this.config.compress &&
                                (i = this.sendNow ? i : this.compressLogs(l)),
                                p(p({}, i), {
                                    headers: p(
                                        p({
                                                "Content-Type": "text/plain;charset=UTF-8"
                                            },
                                            i.isCompressed ? {
                                                "Content-Encoding": "gzip"
                                            } : {},
                                        ),
                                        this.config.addXTopicKey ?
                                        {
                                            "X-Topic-Key": this.bean.id
                                        } :
                                        {},
                                    ),
                                    url: Pt(this.config, "hostUrl.url"),
                                    method: "POST",
                                })
                            );
                        }),
                        (pe.prototype.send = function(i, a, c) {
                            var l,
                                f,
                                m,
                                y,
                                b = this;
                            if (!this.tempContext.isInTempContext)
                                return (
                                    this.sendPipeline ||
                                    (this.sendPipeline = Mi([
                                        ((m = []),
                                            (f = this).event.on(ve.destroy, function() {
                                                m.length = 0;
                                            }),
                                            (y = !0),
                                            function(x) {
                                                return new Promise(function(_) {
                                                    var S;
                                                    !y ||
                                                        ((S = f == null ? void 0 : f.canProceedLogs) !=
                                                            null &&
                                                            S.call(f)) ?
                                                        (0 < m.length &&
                                                            (x.push.apply(x, m), (m.length = 0)),
                                                            (y = !1),
                                                            _(x)) :
                                                        ((m = m.concat(x)), _([]));
                                                });
                                            }),
                                        Us.create(this, this.config.maxBatchReportLength),
                                        Bs.create(this),
                                        qs.create(this),
                                        function(x) {
                                            return v(b, void 0, void 0, function() {
                                                var _, S;
                                                return w(this, function(T) {
                                                    switch (T.label) {
                                                        case 0:
                                                            return (
                                                                (S = (_ = Promise).resolve),
                                                                [4, et(this.config.onBeforeSend, this, x)]
                                                            );
                                                        case 1:
                                                            return [2, S.apply(_, [T.sent()])];
                                                    }
                                                });
                                            });
                                        },
                                        function(x) {
                                            return new Promise(function(_) {
                                                if (x.length === 0) return _([]);
                                                b.sendLogs(
                                                    x,
                                                    function() {
                                                        for (var S = [], T = 0; T < arguments.length; T++)
                                                            S[T] = arguments[T];
                                                        ((b.failRequestCount = 0),
                                                            _(
                                                                C(
                                                                    C([], x, !0),
                                                                    [{
                                                                        isErr: !1,
                                                                        result: S
                                                                    }],
                                                                    !1,
                                                                ),
                                                            ),
                                                            a != null && a.apply(void 0, S));
                                                    },
                                                    function() {
                                                        for (var S = [], T = 0; T < arguments.length; T++)
                                                            S[T] = arguments[T];
                                                        (60 <= ++b.failRequestCount && b.destroy(),
                                                            _(
                                                                C(
                                                                    C([], x, !0),
                                                                    [{
                                                                        isErr: !0,
                                                                        result: S
                                                                    }],
                                                                    !1,
                                                                ),
                                                            ),
                                                            c != null && c.apply(void 0, S));
                                                    },
                                                );
                                            });
                                        },
                                        function(x) {
                                            return v(b, void 0, void 0, function() {
                                                var _, S;
                                                return w(this, function(T) {
                                                    switch (T.label) {
                                                        case 0:
                                                            return (
                                                                (S = (_ = Promise).resolve),
                                                                [4, et(this.config.onSended, this, x)]
                                                            );
                                                        case 1:
                                                            return [2, S.apply(_, [T.sent()])];
                                                    }
                                                });
                                            });
                                        },
                                    ])),
                                    this.sendPipeline(i)
                                );
                            (l = this.tempContext.catchLogs).push.apply(l, i);
                        }),
                        (pe.prototype.sendLogsImmediately = function(i, a) {
                            return v(this, void 0, void 0, function() {
                                var c,
                                    l,
                                    f,
                                    m = this;
                                return w(this, function(y) {
                                    switch (y.label) {
                                        case 0:
                                            return [4, et(this.config.onBeforeCollect, this)];
                                        case 1:
                                            return (
                                                y.sent(),
                                                (f = (f = (l = a || {}).addSnapshot) === void 0 || f),
                                                (c = l.success),
                                                (l = l.fail),
                                                (f = f ?
                                                    i.map(function(b) {
                                                        return (
                                                            b.snapshootInfo ||
                                                            (b.snapshootInfo = dn(m.snapshootInfo || {})),
                                                            b
                                                        );
                                                    }) :
                                                    i),
                                                [4, et(this.config.onCollected, this, f)]
                                            );
                                        case 2:
                                            return (
                                                (f = y.sent()),
                                                [2, this.immediatelySend(f, c, l)]
                                            );
                                    }
                                });
                            });
                        }),
                        (pe.prototype.performRequest = function(i, a, c) {
                            throw new Error('You need to override "performRequest" method');
                        }),
                        (pe.prototype.compressLogs = function(i) {
                            return {
                                payload: i,
                                isCompressed: !1
                            };
                        }),
                        (pe.prototype.ready = function() {
                            var i = this;
                            ((function a() {
                                    var c, l, f, m, y;
                                    i.reportRequestQueue.length &&
                                        ((l = (c = i.reportRequestQueue.shift()).logs),
                                            (f = c.success),
                                            (m = c.fail),
                                            (y = i.generateRequestOptionsByLogs(l)),
                                            i.request(
                                                y,
                                                function() {
                                                    for (var b = [], x = 0; x < arguments.length; x++)
                                                        b[x] = arguments[x];
                                                    try {
                                                        return f == null ? void 0 : f.apply(y, b);
                                                    } finally {
                                                        a();
                                                    }
                                                },
                                                function() {
                                                    for (var b = [], x = 0; x < arguments.length; x++)
                                                        b[x] = arguments[x];
                                                    try {
                                                        return m == null ? void 0 : m.apply(y, b);
                                                    } finally {
                                                        a();
                                                    }
                                                },
                                                l,
                                            ));
                                })(),
                                (this.isReportReady = !0));
                        }),
                        (pe.prototype.request = function(i, a, c, l) {
                            var f,
                                m = this;
                            return i && this.bean.id ?
                                i.url ?
                                void(f = function(y) {
                                    (y === void 0 && (y = 0),
                                        m.performRequest(i, a, function(b) {
                                            var x =
                                                (x = (_ = m.config).maxRetryCount) === void 0 ?
                                                3 :
                                                x,
                                                _ = _.enableRetry;
                                            y < x && _ !== void 0 && _ ?
                                                (m.logger.warn(
                                                        "Request failed, retrying ("
                                                        .concat(y, "/")
                                                        .concat(x, ")..."),
                                                    ),
                                                    f(y + 1)) :
                                                (l &&
                                                    (x = (_ = m.config).onSendFail) != null &&
                                                    x.call(_, l, b),
                                                    c != null && c(b));
                                        }));
                                })() :
                                this.logger.error("request url is empty") :
                                this.logger.error(
                                    "Invalid parameters or missing project ID, request forbidden",
                                );
                        }),
                        (pe.prototype.sendSDKError = function(i) {
                            return v(this, void 0, void 0, function() {
                                var a = this;
                                return w(this, function(c) {
                                    switch (c.label) {
                                        case 0:
                                            return [
                                                4,
                                                this.setTempConfig({
                                                    id: F
                                                }, function() {
                                                    return a.sendCustomLogs(
                                                        [
                                                            p(p({}, i), {
                                                                errorToken: a.config.id,
                                                                aegisSDKVersion: "2.6.6",
                                                                errorConfig: dn(a.config),
                                                            }),
                                                        ],
                                                        I.SDK_ERROR,
                                                        O.SDK_ERROR,
                                                    );
                                                }),
                                            ];
                                        case 1:
                                            return (c.sent(), [2]);
                                    }
                                });
                            });
                        }),
                        (pe.prototype.destroy = function() {
                            return v(this, arguments, void 0, function(i) {
                                var a, c, l;
                                return (
                                    i === void 0 && (i = !1),
                                    w(this, function(f) {
                                        switch (f.label) {
                                            case 0:
                                                return [4, et(this.config.onBeforeDestroy, this)];
                                            case 1:
                                                (f.sent(),
                                                    (a = pe.instances.indexOf(this)) !== -1 &&
                                                    pe.instances.splice(a, 1),
                                                    (a = pe.installedPlugins.length - 1),
                                                    (f.label = 2));
                                            case 2:
                                                if (!(0 <= a)) return [3, 7];
                                                f.label = 3;
                                            case 3:
                                                return (
                                                    f.trys.push([3, 4, , 6]),
                                                    (c = pe.installedPlugins[a]),
                                                    this.pluginController.unPatch(c),
                                                    [3, 6]
                                                );
                                            case 4:
                                                return (
                                                    (c = f.sent()),
                                                    [4, this.sendSDKError({
                                                        msg: _t(c)
                                                    })]
                                                );
                                            case 5:
                                                return (f.sent(), [3, 6]);
                                            case 6:
                                                return (a--, [3, 2]);
                                            case 7:
                                                if ((this.event.emit("destroy"), this.event.clear(), i))
                                                    ((m = this),
                                                        (y = Object.getOwnPropertyDescriptors(m)),
                                                        Object.keys(y).forEach(function(b) {
                                                            y[b].writable && (m[b] = null);
                                                        }),
                                                        Object.setPrototypeOf(this, null));
                                                else {
                                                    for (
                                                        l = this; l.constructor !== Object && Di(l, this),
                                                        (l = Object.getPrototypeOf(l));
                                                    );
                                                    pe.instances.length === 0 &&
                                                        (Di(Object.getPrototypeOf(this).constructor),
                                                            Di(pe));
                                                }
                                                return (et(this.config.onDestroyed, this), [2]);
                                        }
                                        var m, y;
                                    })
                                );
                            });
                        }),
                        (pe.prototype.canProceedLogs = function() {
                            return !0;
                        }),
                        (pe.prototype.immediatelySend = function(i, a, c) {
                            var l = this;
                            return Mi([
                                function(f) {
                                    return v(l, void 0, void 0, function() {
                                        var m, y;
                                        return w(this, function(b) {
                                            switch (b.label) {
                                                case 0:
                                                    return (
                                                        (y = (m = Promise).resolve),
                                                        [4, et(this.config.onBeforeSend, this, f)]
                                                    );
                                                case 1:
                                                    return [2, y.apply(m, [b.sent()])];
                                            }
                                        });
                                    });
                                },
                                function(f) {
                                    return new Promise(function(m) {
                                        if (f.length === 0) return m([]);
                                        l.sendLogs(
                                            f,
                                            function() {
                                                for (var y = [], b = 0; b < arguments.length; b++)
                                                    y[b] = arguments[b];
                                                ((l.failRequestCount = 0),
                                                    m(C(C([], f, !0), [{
                                                        isErr: !1,
                                                        result: y
                                                    }], !1)),
                                                    a != null && a.apply(void 0, y));
                                            },
                                            function() {
                                                for (var y = [], b = 0; b < arguments.length; b++)
                                                    y[b] = arguments[b];
                                                (60 <= ++l.failRequestCount && l.destroy(),
                                                    m(C(C([], f, !0), [{
                                                        isErr: !0,
                                                        result: y
                                                    }], !1)),
                                                    c != null && c.apply(void 0, y));
                                            },
                                        );
                                    });
                                },
                                function(f) {
                                    return v(l, void 0, void 0, function() {
                                        var m, y;
                                        return w(this, function(b) {
                                            switch (b.label) {
                                                case 0:
                                                    return (
                                                        (y = (m = Promise).resolve),
                                                        [4, et(this.config.onSended, this, f)]
                                                    );
                                                case 1:
                                                    return [2, y.apply(m, [b.sent()])];
                                            }
                                        });
                                    });
                                },
                            ])(i);
                        }),
                        (pe.prototype.sendLogs = function(i, a, c) {
                            this.config.reportImmediately || this.isReportReady ?
                                this.request(this.generateRequestOptionsByLogs(i), a, c, i) :
                                this.reportRequestQueue.push({
                                    logs: i,
                                    success: a,
                                    fail: c,
                                });
                        }),
                        (pe.version = "2.6.6"),
                        (pe.instances = []),
                        (pe.logLevel = I),
                        (pe.environment = _e),
                        (pe.installedPlugins = []),
                        pe),
                    Pe =
                    ((Oo.prototype.getConfig = function() {
                            var i;
                            return (i =
                                    (i = this.aegis.config) == null ? void 0 : i[this.name]) != null ?
                                i :
                                (i = this.aegis.config) == null ?
                                void 0 :
                                i[this.name];
                        }),
                        (Oo.prototype.publish = function(i, a) {
                            return v(this, void 0, void 0, function() {
                                var c,
                                    l,
                                    f,
                                    m,
                                    y = this;
                                return w(this, function(b) {
                                    switch (b.label) {
                                        case 0:
                                            return (
                                                (c = a || this.aegis),
                                                (l = Date.now()),
                                                c.pluginController.canUse(this) ?
                                                ((f = (Array.isArray(i) ? i : [i]).map(
                                                        function(x) {
                                                            var _ =
                                                                y.name === R.API ||
                                                                y.name === R.ASSET_SPEED,
                                                                S = (c == null ? void 0 : c.snapshootInfo)
                                                                .action,
                                                                T = p({}, c.snapshootInfo);
                                                            return (
                                                                _ &&
                                                                S &&
                                                                ((_ =
                                                                        l -
                                                                        ((_ = x == null ? void 0 : x.duration) !=
                                                                            null ?
                                                                            _ :
                                                                            0)),
                                                                    (S == null ? void 0 : S.timestamp) > _) &&
                                                                delete T.action,
                                                                (S = {
                                                                    type: (S = x.type) != null ? S : O.NORMAL,
                                                                    level: (_ = x.level) != null ? _ : I.INFO,
                                                                    plugin: y.name,
                                                                }),
                                                                p(
                                                                    p(
                                                                        p({
                                                                                aegisv2_goto: We.generateSpanId(),
                                                                                timestamp: l,
                                                                            },
                                                                            x,
                                                                        ),
                                                                        S,
                                                                    ), {
                                                                        snapshootInfo: JSON.stringify(T)
                                                                    },
                                                                )
                                                            );
                                                        },
                                                    )),
                                                    [4, et(c.config.onCollected, c, f)]) :
                                                [2, !1]
                                            );
                                        case 1:
                                            return (f = b.sent()).length === 0 ?
                                                [2, !1] :
                                                ((m = f.filter(zi)) != null &&
                                                    m.length &&
                                                    c.event.emit(ve.errorOccurred, m),
                                                    (m = this.option.pipes) != null && m.length ?
                                                    this.generatePipeline(this.option.pipes, c)(f) :
                                                    c.send(f),
                                                    [2, !0]);
                                    }
                                });
                            });
                        }),
                        (Oo.prototype.wrapPipe = function(i, a) {
                            var c, l, f, m;
                            return typeof i == "string" ?
                                (f =
                                    (f = a.pipes.find(function(y) {
                                        return y.name === i;
                                    })) == null ?
                                    void 0 :
                                    f.create(a)) != null ?
                                f :
                                Hs :
                                ((f = (f = i) != null ? f : {}),
                                    (c = f.name),
                                    (l = f.option),
                                    (f = f.create),
                                    typeof c != "string" ?
                                    i :
                                    ((m = a.pipes.find(function(y) {
                                            return y.name === c;
                                        })),
                                        (f =
                                            (f = f == null ? void 0 : f(a, l)) != null ?
                                            f :
                                            m == null ?
                                            void 0 :
                                            m.create(a, l)) != null ?
                                        f :
                                        Hs));
                        }),
                        Oo);

                function Oo(i) {
                    var a,
                        c = this;
                    ((this.generatePipeline = function(l, f) {
                            return (
                                (l = l.map(function(m) {
                                    return c.wrapPipe(m, f);
                                })).unshift(function(m) {
                                    return v(c, void 0, void 0, function() {
                                        var y, b;
                                        return w(this, function(x) {
                                            switch (x.label) {
                                                case 0:
                                                    return (
                                                        (b = (y = Promise).resolve),
                                                        [4, et(f.config.onBeforeProcess, f, m)]
                                                    );
                                                case 1:
                                                    return [2, b.apply(y, [x.sent()])];
                                            }
                                        });
                                    });
                                }),
                                l.push(function(m) {
                                    return v(c, void 0, void 0, function() {
                                        var y, b;
                                        return w(this, function(x) {
                                            switch (x.label) {
                                                case 0:
                                                    return (
                                                        (b = (y = Promise).resolve),
                                                        [4, et(f.config.onProcessed, f, m)]
                                                    );
                                                case 1:
                                                    return [2, b.apply(y, [x.sent()])];
                                            }
                                        });
                                    });
                                }),
                                l.push(function(m) {
                                    return new Promise(function(y) {
                                        (f.send(m), y(m));
                                    });
                                }),
                                Mi(l)
                            );
                        }),
                        (this.option = i),
                        (this.name = i.name),
                        (this.init = (a = i.init) == null ? void 0 : a.bind(this)),
                        (this.onNewAegis =
                            (a = i.onNewAegis) == null ? void 0 : a.bind(this)),
                        (this.destroy = (a = i.destroy) == null ? void 0 : a.bind(this)),
                        (this.option.$getConfig = this.getConfig.bind(this)),
                        (this.option.publish = this.publish.bind(this)));
                }

                function pe(i) {
                    var a;
                    ((this.pipes = [Bs, Us, Xf, Vf, Jf, qs]),
                        (this.fetchSampleStatus = Ft.hasNotFetched),
                        (this.config = {
                            id: "",
                            uid: "",
                            delay: 1e3,
                            repeat: 60,
                            sample: 1,
                            env: "production",
                            maxLength: 102400,
                            maxBatchReportLength: 400,
                            whiteList: !0,
                            hostUrl: {
                                url: "https://galileotelemetry.tencent.com/collect",
                                whiteListUrl: "https://galileotelemetry.tencent.com/aegiscontrol/whitelist",
                            },
                            plugin: {
                                pv: !0,
                                aid: !0,
                                error: !0,
                                device: !0,
                                close: !0,
                                pagePerformance: !0,
                                webVitals: !0,
                                custom: !0,
                                fId: !1,
                                ie: !1,
                                spa: !1,
                                api: !1,
                                assetSpeed: !1,
                                session: !1,
                                websocket: !1,
                                blankScreen: !1,
                            },
                            reportImmediately: !0,
                            forceReportErrorLog: !1,
                            compress: !1,
                            sendPvImmediately: !1,
                            maxRetryCount: 3,
                            enableRetry: !1,
                            addXTopicKey: !1,
                        }),
                        (this.event = new ln()),
                        (this.bean = {}),
                        (this.snapshootInfo = {}),
                        (this.serverTimeGap = 0),
                        (this.sampleMap = {}),
                        (this.isWhiteList = !1),
                        (this.tempContext = {
                            isInTempContext: !1,
                            catchLogs: [],
                            originBean: {},
                        }),
                        (this.isReportReady = !1),
                        (this.reportRequestQueue = []),
                        (this.timeMap = {}),
                        (this.failRequestCount = 0),
                        (this.getNewBean = function(c, l) {
                            var f;
                            return {
                                id: (f = c.id) != null ? f : l.id,
                                uid: (f = c.uid) != null ? f : l.uid,
                                version: c.version || l.version,
                                aid: (f = c.aid) != null ? f : l.aid,
                                env: (f = c.env) != null ? f : l.env,
                                platform: (f = c.platform) != null ? f : l.platform,
                                netType: (f = c.netType) != null ? f : l.netType,
                                vp: (f = c.vp) != null ? f : l.vp,
                                sr: (f = c.sr) != null ? f : l.sr,
                                sessionId: (f = c.sessionId) != null ? f : l.sessionId,
                                from: (f = c.from) != null ? f : l.from,
                                referer: (f = c.referer) != null ? f : l.referer,
                            };
                        }),
                        (i.hostUrl =
                            (a = i.hostUrl) === void 0 ?
                            {} :
                            typeof a == "string" ?
                            {
                                url: a
                            } :
                            a),
                        (i.uid = "".concat(i.uid)),
                        this.setConfig(i),
                        pe.instances.push(this),
                        et(this.config.onNewAegis, this));
                }

                function In(i, a) {
                    i === void 0 && (i = en.INFO);
                    var c = this;
                    ((this.queue = []),
                        (this.logLevel = i),
                        (this.instance = a),
                        this.instance.event.on(ve.sampleChange, function() {
                            (c.instance.isWhiteList &&
                                c.queue.forEach(function(l) {
                                    var f = l.level;
                                    return ((l = l.message), c.consoleLog(f, l));
                                }),
                                (c.queue.length = 0));
                        }));
                }

                function ko(i) {
                    for (var a = 1; a < arguments.length; a++) {
                        var c,
                            l = arguments[a];
                        for (c in l) i[c] = l[c];
                    }
                    return i;
                }

                function Ws(i, a) {
                    function c(l) {
                        (l.type !== "pagehide" && document.visibilityState !== "hidden") ||
                        (i(l),
                            removeEventListener("visibilitychange", c, !0),
                            removeEventListener("pagehide", c, !0));
                    }
                    (addEventListener("visibilitychange", c, !0),
                        addEventListener("pagehide", c, !0));
                }

                function Gs(i) {
                    var a = (i = i || {}).name,
                        c = i.initiatorType;
                    if (Qf.test(a)) return "js";
                    if (ep.test(a)) return "css";
                    switch (c) {
                        case "script":
                            return "js";
                        case "link":
                            return "css";
                        default:
                            return c;
                    }
                }

                function Zs(i) {
                    var a = i.domainLookupStart,
                        c = i.domainLookupEnd,
                        l = i.fetchStart,
                        f = i.connectEnd,
                        m = i.connectStart,
                        y = i.secureConnectionStart,
                        b = i.responseStart,
                        x = i.responseEnd,
                        _ = ((i = i.duration), 0);
                    return {
                        preHandleTime: (_ = a !== 0 ? Number((a - l).toFixed(2)) : _),
                        duration: Number(i.toFixed(2)),
                        domainLookup: Number((c - a).toFixed(2)),
                        connectTime: Number((f - m).toFixed(2)),
                        tlsTime: Number((f - y).toFixed(2)),
                        tcpAndRequestGap: 0,
                        requestTime: Number((b - f).toFixed(2)),
                        responseTime: Number((b ? x - b : i).toFixed(2)),
                    };
                }

                function Xs(i) {
                    window.WebSocket = np;
                    var a = Ot.findIndex(function(c) {
                        return c.key === i.key;
                    });
                    a !== -1 && Ot.splice(a, 1);
                }

                function Vs(i) {
                    var a, c, l;
                    window.Proxy &&
                        window.WebSocket &&
                        ((a = window.WebSocket),
                            window &&
                            !a.isHack &&
                            ((c = new Proxy(WebSocket, rp)),
                                (a.isHack = !0),
                                (window.WebSocket = c)),
                            (l = i),
                            Ot.find(function(f) {
                                return f.key === l.key;
                            }) ||
                            (l && Ot.push(l)));
                }

                function Bt(i, a, c, l) {
                    return (
                        c === void 0 && (c = Lr),
                        l === void 0 && (l = 0),
                        (a = a === void 0 ? 0 : a) <= i && i <= c ? i : l
                    );
                }

                function pn(i, a, c, l) {
                    var f, m;
                    return function(y) {
                        0 <= a.value &&
                            (y || l) &&
                            ((m = a.value - (f ?? 0)) || f === void 0) &&
                            ((f = a.value),
                                (a.delta = m),
                                (a.rating =
                                    (y = a.value) > c[1] ?
                                    "poor" :
                                    y > c[0] ?
                                    "needs-improvement" :
                                    "good"),
                                i(a));
                    };
                }

                function Hi(i) {
                    requestAnimationFrame(function() {
                        return requestAnimationFrame(function() {
                            return i();
                        });
                    });
                }

                function hn(i, a) {
                    a === void 0 && (a = -1);
                    var c = Qs(),
                        l = "navigate";
                    return (
                        0 <= Ys ?
                        (l = "back-forward-cache") :
                        c &&
                        (document.prerendering || 0 < Eo() ?
                            (l = "prerender") :
                            document.wasDiscarded ?
                            (l = "restore") :
                            c.type && (l = c.type.replace(/_/g, "-"))), {
                            name: i,
                            value: a,
                            rating: "good",
                            delta: 0,
                            entries: [],
                            id: "v5-"
                                .concat(Date.now(), "-")
                                .concat(Math.floor(8999999999999 * Math.random()) + 1e12),
                            navigationType: l,
                        }
                    );
                }
                var $r,
                    Vn,
                    mn = (function i(a, c) {
                        function l(f, m, y) {
                            if (typeof document < "u") {
                                (typeof(y = ko({}, c, y)).expires == "number" &&
                                    (y.expires = new Date(Date.now() + 864e5 * y.expires)),
                                    y.expires && (y.expires = y.expires.toUTCString()),
                                    (f = encodeURIComponent(f)
                                        .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
                                        .replace(/[()]/g, escape)));
                                var b,
                                    x = "";
                                for (b in y)
                                    y[b] &&
                                    ((x += "; " + b), y[b] !== !0) &&
                                    (x += "=" + y[b].split(";")[0]);
                                return (document.cookie = f + "=" + a.write(m, f) + x);
                            }
                        }
                        return Object.create({
                            set: l,
                            get: function(f) {
                                if (typeof document < "u" && (!arguments.length || f)) {
                                    for (
                                        var m = document.cookie ?
                                            document.cookie.split("; ") :
                                            [],
                                            y = {},
                                            b = 0; b < m.length; b++
                                    ) {
                                        var x = m[b].split("="),
                                            _ = x.slice(1).join("=");
                                        try {
                                            var S = decodeURIComponent(x[0]);
                                            if (((y[S] = a.read(_, S)), f === S)) break;
                                        } catch {}
                                    }
                                    return f ? y[f] : y;
                                }
                            },
                            remove: function(f, m) {
                                l(f, "", ko({}, m, {
                                    expires: -1
                                }));
                            },
                            withAttributes: function(f) {
                                return i(this.converter, ko({}, this.attributes, f));
                            },
                            withConverter: function(f) {
                                return i(ko({}, this.converter, f), this.attributes);
                            },
                        }, {
                            attributes: {
                                value: Object.freeze(c)
                            },
                            converter: {
                                value: Object.freeze(a)
                            },
                        }, );
                    })({
                        read: function(i) {
                            return (i = i[0] === '"' ? i.slice(1, -1) : i).replace(
                                /(%[\dA-F]{2})+/gi,
                                decodeURIComponent,
                            );
                        },
                        write: function(i) {
                            return encodeURIComponent(i).replace(
                                /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
                                decodeURIComponent,
                            );
                        },
                    }, {
                        path: "/"
                    }, ),
                    Yf = new Pe({
                        name: R.AID,
                        aid: "",
                        init: function(i) {
                            return v(this, void 0, void 0, function() {
                                var a;
                                return w(this, function(c) {
                                    switch (c.label) {
                                        case 0:
                                            return (
                                                c.trys.push([0, 1, , 3]),
                                                (a =
                                                    typeof(a =
                                                        (a = i.config.plugin) == null ? void 0 : a.aid) ==
                                                    "string" ?
                                                    a :
                                                    window.localStorage ?
                                                    window.localStorage.getItem(U) :
                                                    mn.get(U)) ||
                                                ((l = a = Te()),
                                                    window.localStorage ?
                                                    window.localStorage.setItem(U, l) :
                                                    mn.set(U, l)),
                                                (this.aid = a),
                                                [3, 3]
                                            );
                                        case 1:
                                            return (
                                                (a = c.sent()),
                                                [4, i.sendSDKError({
                                                    msg: _t(a)
                                                })]
                                            );
                                        case 2:
                                            return (c.sent(), [3, 3]);
                                        case 3:
                                            return [2];
                                    }
                                    var l;
                                });
                            });
                        },
                        onNewAegis: function(i) {
                            ((i.bean.aid = this.aid), (i.config.aid = this.aid));
                        },
                    }),
                    Qf = /\.js(\?|$)/i,
                    ep = /\.css(\?|$)/i,
                    Nr = function() {
                        return (
                            window.performance !== void 0 &&
                            typeof performance.getEntriesByType == "function" &&
                            typeof performance.now == "function"
                        );
                    },
                    tp =
                    (new Pe({
                            name: R.ASSET_SPEED
                        }),
                        new Pe({
                            name: R.ASSET_SPEED,
                            pipes: ["repeatLimit", "networkRefresh"],
                            collectCur: 0,
                            collectEntryType: "resource",
                            ASSETS_INITIATOR_TYPE: [
                                "img",
                                "css",
                                "script",
                                "link",
                                "audio",
                                "video",
                            ],
                            observer: null,
                            onNewAegis: function(i) {
                                var a = this;
                                Nr() &&
                                    (this.collectSuccessLog(i),
                                        this.collectFailLog(i),
                                        (performance.onresourcetimingbufferfull = function() {
                                            typeof performance.clearResourceTimings == "function" &&
                                                ((a.collectCur = 0), performance.clearResourceTimings());
                                        }));
                            },
                            publishMany: function(i, a) {
                                for (var c = a.config, l = 0, f = i.length; l < f; l++) {
                                    var m = i[l];
                                    this.ASSETS_INITIATOR_TYPE.indexOf(m.initiatorType) === -1 ||
                                        Zn(m.name, Pt(c, "hostUrl")) ||
                                        this.publish(this.generateLog(m, c), a);
                                }
                            },
                            collectSuccessLog: function(i) {
                                var a,
                                    c = this;
                                typeof(window == null ? void 0 : window.PerformanceObserver) ==
                                "function" ?
                                (this.publishMany(
                                        performance.getEntriesByType(this.collectEntryType),
                                        i,
                                    ),
                                    (this.observer = new window.PerformanceObserver(function(
                                        l,
                                    ) {
                                        c.publishMany(l.getEntries(), i);
                                    })),
                                    this.observer.observe({
                                        entryTypes: [this.collectEntryType],
                                    }),
                                    i.event.on(ve.destroy, function() {
                                        var l;
                                        (l = c.observer) != null && l.disconnect();
                                    })) :
                                ((a = setInterval(function() {
                                        var l = performance.getEntriesByType(c.collectEntryType),
                                            f = l.slice(c.collectCur);
                                        ((c.collectCur = l.length), c.publishMany(f, i));
                                    }, 3e3)),
                                    i.event.on(ve.destroy, function() {
                                        clearInterval(a);
                                    }));
                            },
                            collectFailLog: function(i) {
                                function a(f) {
                                    var m, y, b;
                                    f &&
                                        ((f = f.target || f.srcElement),
                                            !(m =
                                                (f == null ? void 0 : f.src) ||
                                                (f == null ? void 0 : f.href)) ||
                                            typeof m != "string" ||
                                            -1 < window.location.href.indexOf(m) ||
                                            ((f = performance
                                                    .getEntriesByType(c.collectEntryType)
                                                    .find(function(x) {
                                                        return x.name === m;
                                                    })),
                                                (y =
                                                    typeof(y = ((y = l.plugin) == null ? void 0 : y.api)
                                                        .resourceTypeHandler) == "function" ?
                                                    y(m) :
                                                    Gs(f)),
                                                Zn(m, Pt(l, "hostUrl"))) ||
                                            ((b =
                                                    typeof(b = (
                                                        (b = l.plugin) == null ? void 0 : b.assetSpeed
                                                    ).urlHandler) == "function" ?
                                                    b(m) :
                                                    m),
                                                (b = {
                                                    msg: "static_fail",
                                                    errorMsg: "load ".concat($i(m), " fail"),
                                                    url: $i(b),
                                                    status: 400,
                                                    duration: Number(
                                                        ((f == null ? void 0 : f.duration) || 0).toFixed(2),
                                                    ),
                                                    method: "get",
                                                    assetType: y || "static",
                                                    isHttps: So(m),
                                                    urlQuery: Dt(m, !0),
                                                    nextHopProtocol: "",
                                                    domainLookup: Qe.number,
                                                    connectTime: Qe.number,
                                                    tlsTime: Qe.number,
                                                    requestTime: Qe.number,
                                                    responseTime: Qe.number,
                                                    preHandleTime: Qe.number,
                                                    tcpAndRequestGap: Qe.number,
                                                    level: I.ERROR,
                                                    type: O.ASSETS_SPEED,
                                                }),
                                                c.publish(b, i)));
                                }
                                var c = this,
                                    l = i.config;
                                (window.document.addEventListener("error", a, !0),
                                    i.event.on(ve.destroy, function() {
                                        window.document.removeEventListener("error", a, !0);
                                    }));
                            },
                            generateLog: function(i, a) {
                                var c = ((c = a.plugin) == null ? void 0 : c.api)
                                    .resourceTypeHandler;
                                return (
                                    (a =
                                        typeof(a = ((a = a.plugin) == null ? void 0 : a.assetSpeed)
                                            .urlHandler) == "function" ?
                                        a(i.name) :
                                        i.name),
                                    (c = typeof c == "function" ? c(i.name) : Gs(i)),
                                    p({
                                            msg: "asset_speed",
                                            url: $i(a),
                                            status: 200,
                                            assetType: c || "static",
                                            isHttps: So(i.name),
                                            nextHopProtocol: i.nextHopProtocol || "",
                                            urlQuery: Dt(i.name, !0),
                                            transferSize: 0 < i.transferSize ? i.transferSize : -1,
                                            method: "get",
                                            type: O.ASSETS_SPEED,
                                        },
                                        Zs(i),
                                    )
                                );
                            },
                            collectNotReportedLog: function(i) {
                                var a, c;
                                Nr() &&
                                    ((a = (c = performance.getEntriesByType(
                                            this.collectEntryType,
                                        )).length),
                                        typeof window.PerformanceObserver != "function") &&
                                    this.collectCur !== a &&
                                    ((c = c.slice(this.collectCur)),
                                        (this.collectCur = a),
                                        this.publishMany(c, i));
                            },
                            destroy: function() {
                                var i;
                                ((this.publish = function() {}),
                                    (i = this.observer) != null && i.disconnect());
                            },
                        })),
                    zr =
                    (((zr = $r = $r || {}).unknown = "unknown"),
                        (zr.normal = "normal"),
                        (zr.weak = "weak"),
                        (zr.disconnected = "disconnected"),
                        new Pe({
                            name: R.DEVICE,
                            onNewAegis: function(i) {
                                (i.extendBean({
                                        platform: this.getPlatform(),
                                        netType: me.unknown,
                                    }),
                                    this.getDpi(i),
                                    this.getWechatVersion(i),
                                    this.refreshNetworkTypeToBean(i),
                                    this.refreshNetworkStatusToBean(i));
                            },
                            getDpi: function(i) {
                                (i.extendBean({
                                        vp: ""
                                            .concat(Math.round(window.innerWidth), " * ")
                                            .concat(Math.round(window.innerHeight)),
                                    }),
                                    window.screen &&
                                    i.extendBean({
                                        sr: ""
                                            .concat(Math.round(window.screen.width), " * ")
                                            .concat(Math.round(window.screen.height)),
                                    }));
                            },
                            getPlatform: function() {
                                var i = {
                                        android: /\bAndroid\s*([^;]+)/,
                                        ios: /\b(iPad|iPhone|iPod)\b.*? OS ([\d_]+)/,
                                        windows: /\b(Windows NT|Windows)/,
                                        macos: /\b(Mac OS|OSX)/,
                                        linux: /\b(Linux)/i,
                                    },
                                    a = Object.keys(i).find(function(c) {
                                        return i[c].test(navigator.userAgent);
                                    });
                                return a ? ee[a] : ee.other;
                            },
                            getWechatVersion: function(i) {
                                var a = navigator.userAgent;
                                ((a = /Micromessenger/i.test(a) ?
                                        ((a = a.match(/MicroMessenger\/([\d.]+)/i)) == null ?
                                            void 0 :
                                            a[1]) || "" :
                                        void 0),
                                    i.setConfig({
                                        extField: {
                                            wechatVersion: a
                                        }
                                    }));
                            },
                            refreshNetworkTypeToBean: function(i) {
                                var a = this,
                                    c = i.config;
                                c &&
                                    (typeof c.getNetworkType == "function" ?
                                        c.getNetworkType :
                                        Js)(function(l) {
                                        (Object.keys(me).some(function(f) {
                                                return me[f] === l;
                                            }) || (l = me.unknown),
                                            i.extendBean({
                                                netType: l
                                            }),
                                            (a.NetworkRefreshTimer = setTimeout(function() {
                                                (a.refreshNetworkTypeToBean(i),
                                                    clearTimeout(a.NetworkRefreshTimer));
                                            }, 1e4)));
                                    });
                            },
                            refreshNetworkStatusToBean: function(i) {
                                var a,
                                    c = this,
                                    l = i.config;
                                l &&
                                    (a =
                                        typeof l.getNetworkStatus == "function" ?
                                        l.getNetworkStatus :
                                        a) != null &&
                                    a(function(f) {
                                        (Object.keys($r).some(function(m) {
                                                return $r[m] === f;
                                            }) || (f = $r.unknown),
                                            i.extendBean({
                                                netStatus: f
                                            }),
                                            (c.NetworkStatusRefreshTimer = setTimeout(function() {
                                                (c.refreshNetworkStatusToBean(i),
                                                    clearTimeout(c.NetworkStatusRefreshTimer));
                                            }, 1e4)));
                                    });
                            },
                        })),
                    Js = function(i) {
                        var a = "",
                            c = navigator.userAgent.match(/NetType\/(\w+)/);
                        (c ?
                            (a = c[1]) :
                            navigator.connection &&
                            (a =
                                navigator.connection.effectiveType ||
                                navigator.connection.type),
                            i(
                                ((c = a = a || "unknown"),
                                    0 <= (c = String(c).toLowerCase()).indexOf("4g") ?
                                    me.net4g :
                                    0 <= c.indexOf("wifi") ?
                                    me.wifi :
                                    0 <= c.indexOf("5g") ?
                                    me.net5g :
                                    0 <= c.indexOf("6g") ?
                                    me.net6g :
                                    0 <= c.indexOf("3g") ?
                                    me.net3g :
                                    0 <= c.indexOf("2g") ?
                                    me.net2g :
                                    me.unknown),
                            ));
                    },
                    np = typeof window < "u" ? window.WebSocket : void 0,
                    Ot = [],
                    dt = {},
                    rp = {
                        construct: function(i, a) {
                            var c = a[0],
                                l = new i(c, a[1]),
                                f = ((l.originSend = l.send), Date.now()),
                                m = !1;
                            return (
                                l.addEventListener("open", function() {
                                    var y,
                                        b = Date.now();
                                    ((dt[c] = (y = dt[c]) != null ? y : {}),
                                        Ot.forEach(function(x) {
                                            var _,
                                                S = x.sendConnectInfo;
                                            ((x = x.key),
                                                (dt[c][x] = (_ = dt[c][x]) != null && _),
                                                S != null &&
                                                S({
                                                    msg: "WebSocket connection succeeded",
                                                    url: c,
                                                    successFlag: !0,
                                                    duration: b - f,
                                                    retryFlag: dt[c][x],
                                                }),
                                                (dt[c][x] = !1));
                                        }),
                                        (m = !0));
                                }),
                                l.addEventListener("error", function(y) {
                                    var b = ((y == null ? void 0 : y.currentTarget) || {})
                                        .readyState;
                                    Ot != null &&
                                        Ot.forEach(function(x) {
                                            (x = x.onErr) != null &&
                                                x({
                                                    msg: "Unable to retrieve specific error information, please check the browser console!",
                                                    readyState: b,
                                                    connectUrl: c,
                                                });
                                        });
                                }),
                                l.addEventListener("close", function(y) {
                                    var b;
                                    ((dt[c] = (b = dt[c]) != null ? b : {}),
                                        m || y.code === 1e3 ?
                                        ((m = !1),
                                            Ot.forEach(function(x) {
                                                ((x = x.key), (dt[c][x] = !1));
                                            })) :
                                        (Ot.forEach(function(x) {
                                                var _,
                                                    S = x.sendConnectInfo;
                                                ((x = x.key),
                                                    (dt[c][x] = (_ = dt[c][x]) != null && _),
                                                    S != null &&
                                                    S(
                                                        p(p({}, y), {
                                                            msg: "WebSocket connection failed",
                                                            url: c,
                                                            successFlag: !1,
                                                            retryFlag: dt[c][x],
                                                        }),
                                                    ),
                                                    (dt[c][x] = !0));
                                            }),
                                            (m = !1)));
                                }),
                                Object.defineProperty(l, "send", {
                                    get: function() {
                                        return function(y) {
                                            (b = l.originSend) != null && b.call(l, y);
                                            var b = l.readyState,
                                                x = ((y = WebSocket.OPEN), WebSocket.CLOSED),
                                                _ = WebSocket.CONNECTING,
                                                S = WebSocket.CLOSING;
                                            if (b !== y) {
                                                var T = {
                                                    readyState: b,
                                                    connectUrl: l.url
                                                };
                                                switch (b) {
                                                    case x:
                                                        Ot.forEach(function(E) {
                                                            (E = E.sendErr) != null &&
                                                                E(
                                                                    p({
                                                                            msg: "Message sending failed, the connection is closed!",
                                                                        },
                                                                        T,
                                                                    ),
                                                                );
                                                        });
                                                        break;
                                                    case _:
                                                        Ot.forEach(function(E) {
                                                            (0, E.sendErr)(
                                                                p({
                                                                        msg: "Message sending failed, connecting...",
                                                                    },
                                                                    T,
                                                                ),
                                                            );
                                                        });
                                                        break;
                                                    case S:
                                                        Ot.forEach(function(E) {
                                                            (0, E.sendErr)(
                                                                p({
                                                                        msg: "Message sending failed, connection is closing!",
                                                                    },
                                                                    T,
                                                                ),
                                                            );
                                                        });
                                                }
                                            }
                                        };
                                    },
                                }),
                                l
                            );
                        },
                    },
                    op =
                    (new Pe({
                            name: R.ERROR
                        }),
                        new Pe({
                            name: R.ERROR,
                            onNewAegis: function(i) {
                                this.startListen(i);
                            },
                            startListen: function(i) {
                                function a(y) {
                                    var b,
                                        x = y && _t(y.reason);
                                    x &&
                                        f.publishErrorLog({
                                                msg: "PROMISE_ERROR: ".concat(x),
                                                errorMsg: (x =
                                                        (b =
                                                            ((b = y.reason) == null ? void 0 : b.message) ||
                                                            ((b = y.reason) == null ? void 0 : b.errMsg) ||
                                                            x) == null ?
                                                        void 0 :
                                                        b.slice) == null ?
                                                    void 0 :
                                                    x.call(b, 0, 150),
                                                level: I.PROMISE_ERROR,
                                                type: O.NORMAL,
                                                originEvent: y,
                                            },
                                            i,
                                        );
                                }

                                function c(y) {
                                    var b;
                                    if (
                                        (_ =
                                            (y == null ? void 0 : y.target) ||
                                            (y == null ? void 0 : y.srcElement))
                                    ) {
                                        var x = _.src || _.href || "",
                                            _ = (_ = _.tagName) === void 0 ? "script" : _;
                                        if (
                                            !(
                                                Zn((b = x), Pt(i.config, "hostUrl")) ||
                                                -1 < window.location.href.indexOf(b)
                                            )
                                        ) {
                                            var S = {
                                                msg: "".concat(_, " load fail: ").concat(x),
                                                level: I.INFO,
                                                type: O.NORMAL,
                                                originEvent: y,
                                            };
                                            if (/\.js$/.test(x)) S.level = I.SCRIPT_ERROR;
                                            else if (/\.css$/.test(x)) S.level = I.CSS_ERROR;
                                            else
                                                switch (_.toLowerCase()) {
                                                    case "script":
                                                        S.level = I.SCRIPT_ERROR;
                                                        break;
                                                    case "link":
                                                        S.level = I.CSS_ERROR;
                                                        break;
                                                    case "img":
                                                        S.level = I.IMAGE_ERROR;
                                                        break;
                                                    case "audio":
                                                    case "video":
                                                        S.level = I.MEDIA_ERROR;
                                                        break;
                                                    default:
                                                        return;
                                                }
                                            f.publishErrorLog(S, i);
                                        }
                                    }
                                }
                                var l,
                                    f = this,
                                    m = window.onerror;
                                ((window.onerror = function() {
                                        for (var y = [], b = 0; b < arguments.length; b++)
                                            y[b] = arguments[b];
                                        var x,
                                            _ = _t(y[0]);
                                        (typeof(x = _) != "string" ||
                                            !x ||
                                            Y.some(function(S) {
                                                return -1 < x.indexOf(S);
                                            }) ||
                                            K.some(function(S) {
                                                return -1 < x.indexOf(S);
                                            }) ||
                                            f.publishErrorLog({
                                                    msg: ""
                                                        .concat(_ || "", " @ (")
                                                        .concat(_t(y[1]) || "", ":")
                                                        .concat(y[2] || 0, ":")
                                                        .concat(
                                                            y[3] || 0,
                                                            `)
          
`,
                                                        )
                                                        .concat(_t(y[4] || "")),
                                                    errorMsg: _,
                                                    level: I.ERROR,
                                                    type: O.NORMAL,
                                                    originEvent: y[4],
                                                },
                                                i,
                                            ),
                                            m != null && m.call.apply(m, C([window], y, !1)));
                                    }),
                                    window.addEventListener("unhandledrejection", a),
                                    window.document.addEventListener("error", c, !0),
                                    i.event.on(ve.destroy, function() {
                                        (window.document.removeEventListener(
                                                "unhandledrejection",
                                                a,
                                            ),
                                            window.document.removeEventListener("error", c, !0));
                                    }),
                                    i.config.websocketHack &&
                                    ((l = {
                                            key: "".concat(i.config.id, "-").concat(this.name),
                                            onErr: function(y) {
                                                var b;
                                                (b = f.publishWsErrorLog) != null && b.call(f, y, i);
                                            },
                                            sendErr: function(y) {
                                                var b;
                                                (b = f.publishWsErrorLog) != null && b.call(f, y, i);
                                            },
                                        }),
                                        (this.hackWebsocketConfig = l),
                                        Vs(this.hackWebsocketConfig)));
                            },
                            publishErrorLog: function(i, a) {
                                var c = i.type,
                                    l = i.level;
                                ((i = g(i, ["type", "level"])),
                                    this.publish(
                                        p({
                                            level: l || I.ERROR,
                                            type: c || O.NORMAL
                                        }, i),
                                        a,
                                    ));
                            },
                            publishWsErrorLog: function(i, a) {
                                var c = i.connectUrl,
                                    l = i.msg;
                                ((i = i.readyState),
                                    this.publishErrorLog({
                                            msg: `WEBSOCKET_ERROR: 
              connect: `
                                                .concat(
                                                    c,
                                                    `
              readyState: `,
                                                )
                                                .concat(
                                                    i,
                                                    `
              msg: `,
                                                )
                                                .concat(l),
                                            level: I.WEBSOCKET_ERROR,
                                            type: O.NORMAL,
                                        },
                                        a,
                                    ));
                            },
                            destroy: function() {
                                ((this.publishErrorLog = function() {}),
                                    this.hackWebsocketConfig && Xs(this.hackWebsocketConfig));
                            },
                        })),
                    Lr = (new Pe({
                        name: R.PAGE_PERFORMANCE
                    }), 15e3),
                    Ks = 3,
                    ip = new Pe({
                        name: R.PAGE_PERFORMANCE,
                        performanceMap: {},
                        longTaskObserver: null,
                        onNewAegis: function(i) {
                            Nr() &&
                                (Vn ? this.publish(Vn, i) : this.startCalcPerformance(i),
                                    this.getPerfConf(i).longtask) &&
                                this.startLongtaskObserver(i);
                        },
                        getPerfConf: function(i) {
                            var a = !1;
                            return {
                                longtask: (a =
                                    typeof(i = (
                                        ((i = i.config) == null ? void 0 : i.plugin) || {}
                                    ).pagePerformance) == "object" &&
                                    i !== null &&
                                    "longtask" in i ?
                                    !!i.longtask :
                                    a),
                            };
                        },
                        startLongtaskObserver: function(i) {
                            var a = this;
                            window.PerformanceObserver &&
                                ((this.longTaskObserver = new PerformanceObserver(function(c) {
                                        c.getEntries().forEach(function(l) {
                                            var f = l.duration,
                                                m = l.name;
                                            ((l = l.startTime),
                                                (l = Math.floor(
                                                    performance != null && performance.timeOrigin ?
                                                    performance.timeOrigin + l :
                                                    Date.now() - f,
                                                )),
                                                a.publish({
                                                        duration: f,
                                                        msg: "longtask",
                                                        name: m,
                                                        timestamp: l,
                                                        type: O.PAGE_PERFORMANCE,
                                                        level: I.LONGTASK,
                                                    },
                                                    i,
                                                ));
                                        });
                                    })),
                                    this.longTaskObserver.observe({
                                        entryTypes: ["longtask"]
                                    }));
                        },
                        startCalcPerformance: function(i) {
                            var a = this;
                            try {
                                this.getFirstScreenTiming(i, function(c) {
                                    var l = performance.timing;
                                    l &&
                                        ((Vn = {
                                                msg: "page_performance",
                                                type: O.PAGE_PERFORMANCE,
                                                dnsLookup: Bt(l.domainLookupEnd - l.domainLookupStart),
                                                tcp: Bt(l.connectEnd - l.connectStart),
                                                ssl: Bt(
                                                    l.secureConnectionStart === 0 ?
                                                    0 :
                                                    l.requestStart - l.secureConnectionStart,
                                                ),
                                                ttfb: Bt(l.responseStart - l.requestStart),
                                                contentDownload: Bt(l.responseEnd - l.responseStart),
                                                domParse: Bt(
                                                    l.domInteractive - l.domLoading,
                                                    0,
                                                    Lr,
                                                    1070,
                                                ),
                                                resourceDownload: Bt(
                                                    l.loadEventStart - l.domInteractive,
                                                    0,
                                                    Lr,
                                                    1070,
                                                ),
                                                firstScreenTiming: Bt(Math.floor(c), 0, Lr, Lr),
                                            }),
                                            (l = i.config).extraPerformanceData &&
                                            JSON.stringify(l.extraPerformanceData) !== "{}" &&
                                            ((l = (c = l.extraPerformanceData).engineInit),
                                                (c = c.bundleLoad),
                                                (Vn = p(p({}, Vn), {
                                                    engineInit: Bt(l, 0, 1e4),
                                                    bundleLoad: Bt(c, 0, 1e4),
                                                }))),
                                            a.publish(Vn, i));
                                });
                            } catch {}
                        },
                        getFirstScreenTiming: function(i, a) {
                            var c = this;
                            i.event.on(ve.destroy, function() {
                                T && clearTimeout(T);
                            });
                            var l,
                                f,
                                m = this,
                                y = ["script", "style", "link", "br"],
                                b = [],
                                x = {},
                                _ =
                                (-1 <
                                    ((f =
                                            (f = window.PerformanceObserver) == null ?
                                            void 0 :
                                            f.supportedEntryTypes) == null ?
                                        void 0 :
                                        f.indexOf("paint")) &&
                                    (l = new PerformanceObserver(function(E) {
                                        E.getEntries().forEach(function(A) {
                                            var G;
                                            A.entryType === "paint" &&
                                                A.name === "first-contentful-paint" &&
                                                0 <
                                                (G = document.querySelectorAll(
                                                    "[AEGIS-FIRST-SCREEN-TIMING]",
                                                )).length &&
                                                i.config.id &&
                                                !c.performanceMap[i.config.id] &&
                                                (c.setFirstScreenInfo(i, A.startTime, G[0], G),
                                                    a != null && a(A.startTime),
                                                    _.disconnect(),
                                                    l.disconnect(),
                                                    T) &&
                                                clearTimeout(T);
                                        });
                                    })).observe({
                                        entryTypes: ["paint"]
                                    }),
                                    new MutationObserver(function(E) {
                                        var A = {
                                            roots: [],
                                            ignores: [],
                                            rootsDomNum: [],
                                            time: performance.now(),
                                        };
                                        (E.forEach(function(G) {
                                                G != null &&
                                                    G.addedNodes &&
                                                    Array.prototype.slice
                                                    .call(G.addedNodes)
                                                    .forEach(function(M) {
                                                        var Z;
                                                        m.isEleInArray(M, A.ignores) ?
                                                            A.ignores.push(M) :
                                                            M.nodeType === 1 &&
                                                            M.hasAttribute("AEGIS-FIRST-SCREEN-TIMING") ?
                                                            (Object.prototype.hasOwnProperty.apply(x, [
                                                                    A.time,
                                                                ]) || (x[A.time] = []),
                                                                x[A.time].push(M)) :
                                                            M.nodeType === 1 &&
                                                            (m.hasAncestorOrSelfWithAttribute(
                                                                    M,
                                                                    "AEGIS-IGNORE-FIRST-SCREEN-TIMING",
                                                                ) ?
                                                                A.ignores.push(M) :
                                                                y.indexOf(
                                                                    (Z = M == null ? void 0 : M.nodeName) ==
                                                                    null ?
                                                                    void 0 :
                                                                    Z.toLocaleLowerCase(),
                                                                ) !== -1 ||
                                                                m.isEleInArray(M, A.roots) ||
                                                                (A.roots.push(M),
                                                                    A.rootsDomNum.push(
                                                                        m.walkAndCount(M) || 0,
                                                                    )));
                                                    });
                                            }),
                                            A.roots.length && b.push(A));
                                    })),
                                S =
                                (_.observe(document, {
                                        childList: !0,
                                        subtree: !0
                                    }),
                                    function(E) {
                                        (E = E === void 0 ? 0 : E) ||
                                        ((A = 0),
                                            (M = Object.keys(x)).length ?
                                            ((E = Math.max.apply(null, M)),
                                                c.setFirstScreenInfo(
                                                    i,
                                                    E,
                                                    (M = x[E]) == null ? void 0 : M[0],
                                                    x,
                                                )) :
                                            b.forEach(function(H) {
                                                for (var $ = 0; $ < H.roots.length; $++)
                                                    H.rootsDomNum[$] > A &&
                                                    m.isInFirstScreen(H.roots[$]) &&
                                                    ((A = H.rootsDomNum[$]),
                                                        (E = H.time),
                                                        c.setFirstScreenInfo(i, E, H.roots[$]));
                                            }),
                                            (b.length = 0),
                                            Object.keys(x).forEach(function(H) {
                                                x[H] = x[H].map(function($) {
                                                    var re = {
                                                            tagName: $.tagName
                                                        },
                                                        ae = $.attributes;
                                                    if (!ae) return $;
                                                    for (var Q = 0; Q < ae.length; Q++) {
                                                        var se = ae[Q];
                                                        se.name && (re[se.name] = $.getAttribute(se.name));
                                                    }
                                                    return re;
                                                });
                                            }));
                                        var A,
                                            G =
                                            (M = performance.timing).domInteractive - M.domLoading,
                                            M = M.loadEventStart - M.domInteractive,
                                            Z = E;
                                        T = null;
                                        for (var j = 0, L = [G, M, Z]; j < L.length; j++)
                                            if (L[j] <= 0 && 0 < Ks) {
                                                T = setTimeout(function() {
                                                    return S(Z);
                                                }, 3e3);
                                                break;
                                            }
                                        T
                                            ?
                                            --Ks :
                                            (_.disconnect(),
                                                l != null && l.disconnect(),
                                                a != null && a(E));
                                    }),
                                T = setTimeout(function() {
                                    return S();
                                }, 3e3);
                        },
                        setFirstScreenInfo: function(i, a, c, l) {
                            var f;
                            (i.config.id && this.performanceMap[i.config.id]) ||
                            (i.config.id && (this.performanceMap[i.config.id] = !0),
                                (typeof((f = i.config) == null ? void 0 : f.pagePerformance) !=
                                    "object" ||
                                    ((f = i.config.pagePerformance) != null &&
                                        f.firstScreenInfo)) &&
                                (i.firstScreenInfo = {
                                    element: c,
                                    timing: a,
                                    markDoms: l
                                }));
                        },
                        isEleInArray: function(i, a) {
                            if (!i || i === document.documentElement) return !1;
                            if (a.indexOf(i) !== -1) return !0;
                            try {
                                return this.isEleInArray(i.parentElement, a);
                            } catch {
                                return !1;
                            }
                        },
                        isInFirstScreen: function(i) {
                            var a, c;
                            return (
                                !(!i || typeof i.getBoundingClientRect != "function") &&
                                ((i = i.getBoundingClientRect()),
                                    (a = window.innerHeight),
                                    (c = window.innerWidth),
                                    0 <= i.left) &&
                                i.left < c &&
                                0 <= i.top &&
                                i.top < a &&
                                0 < i.width &&
                                0 < i.height
                            );
                        },
                        walkAndCount: function(i) {
                            var a = 0;
                            if (i && i.nodeType === 1) {
                                a += 1;
                                var c = i.children;
                                if (c != null && c.length)
                                    for (var l = 0; l < c.length; l++)
                                        (c[l].nodeType === 1 &&
                                            c[l].hasAttribute("AEGIS-IGNORE-FIRST-SCREEN-TIMING")) ||
                                        (a += this.walkAndCount(c[l]));
                            }
                            return a;
                        },
                        hasAncestorOrSelfWithAttribute: function(i, a) {
                            try {
                                for (var c = i; c && c !== document.body;) {
                                    if (c.hasAttribute(a)) return !0;
                                    c = c.parentElement;
                                }
                                return !1;
                            } catch {
                                return !1;
                            }
                        },
                        destroy: function() {
                            var i, a;
                            (this.longTaskObserver &&
                                ((a = (i = this.longTaskObserver).disconnect) != null &&
                                    a.call(i),
                                    (this.longTaskObserver = null)),
                                (this.performanceMap = {}));
                        },
                    }),
                    Ys = -1,
                    jr = function(i) {
                        addEventListener(
                            "pageshow",
                            function(a) {
                                a.persisted && ((Ys = a.timeStamp), i(a));
                            },
                            !0,
                        );
                    },
                    Qs = function() {
                        var i = performance.getEntriesByType("navigation")[0];
                        if (i && 0 < i.responseStart && i.responseStart < performance.now())
                            return i;
                    },
                    Eo = function() {
                        var i = Qs();
                        return (i = i == null ? void 0 : i.activationStart) != null ? i : 0;
                    },
                    Bi = new WeakMap();

                function Ui(i, a) {
                    return (Bi.get(i) || Bi.set(i, new a()), Bi.get(i));
                }

                function Mr(i, a, c) {
                    c === void 0 && (c = {});
                    try {
                        var l;
                        if (PerformanceObserver.supportedEntryTypes.includes(i))
                            return (
                                (l = new PerformanceObserver(function(f) {
                                    Promise.resolve().then(function() {
                                        a(f.getEntries());
                                    });
                                })).observe(p({
                                    type: i,
                                    buffered: !0
                                }, c)),
                                l
                            );
                    } catch {}
                }

                function qi(i) {
                    var a = !1;
                    return function() {
                        a || (i(), (a = !0));
                    };
                }

                function ec() {
                    var i, a;
                    return (
                        Jn < 0 &&
                        ((i = Eo()),
                            (a =
                                document.prerendering ||
                                (a = globalThis.performance
                                    .getEntriesByType("visibility-state")
                                    .filter(function(c) {
                                        return c.name === "hidden" && c.startTime > i;
                                    })[0]) == null ?
                                void 0 :
                                a.startTime),
                            (Jn = a ?? oc()),
                            ic(),
                            jr(function() {
                                setTimeout(function() {
                                    ((Jn = oc()), ic());
                                });
                            })), {
                            get firstHiddenTime() {
                                return Jn;
                            },
                        }
                    );
                }

                function Wi(i) {
                    document.prerendering ?
                        addEventListener(
                            "prerenderingchange",
                            function() {
                                return i();
                            },
                            !0,
                        ) :
                        i();
                }

                function tc(i, a) {
                    (a === void 0 && (a = {}),
                        Wi(function() {
                            var c,
                                l = ec(),
                                f = hn("FCP"),
                                m = Mr("paint", function(y) {
                                    for (var b = 0, x = y; b < x.length; b++) {
                                        var _ = x[b];
                                        _.name === "first-contentful-paint" &&
                                            (m.disconnect(), _.startTime < l.firstHiddenTime) &&
                                            ((f.value = Math.max(_.startTime - Eo(), 0)),
                                                f.entries.push(_),
                                                c(!0));
                                    }
                                });
                            m &&
                                ((c = pn(i, f, ac, a.reportAllChanges)),
                                    jr(function(y) {
                                        ((f = hn("FCP")),
                                            (c = pn(i, f, ac, a.reportAllChanges)),
                                            Hi(function() {
                                                ((f.value = performance.now() - y.timeStamp), c(!0));
                                            }));
                                    }));
                        }));
                }

                function ap(i) {
                    for (var a = 0, c = i; a < c.length; a++) {
                        var l = c[a];
                        l.interactionId &&
                            ((Zi = Math.min(Zi, l.interactionId)),
                                (Io = Math.max(Io, l.interactionId)),
                                (cc = Io ? (Io - Zi) / 7 + 1 : 0));
                    }
                }

                function nc() {
                    var i;
                    return Gi ? cc : (i = performance.interactionCount) != null ? i : 0;
                }

                function rc(i) {
                    var a = globalThis.requestIdleCallback || setTimeout;
                    document.visibilityState === "hidden" ?
                        i() :
                        ((i = qi(i)),
                            document.addEventListener("visibilitychange", i, {
                                once: !0
                            }),
                            a(function() {
                                (i(), document.removeEventListener("visibilitychange", i));
                            }));
                }

                function Co(i) {
                    var a = i.name;
                    0 < (i = i.value) && i < Number.MAX_SAFE_INTEGER && (fc[a] = i);
                }
                hc.prototype.h = function(i) {
                    var a, c;
                    i.hadRecentInput ||
                        ((a = this.o[0]),
                            (c = this.o.at(-1)),
                            this.i &&
                            a &&
                            c &&
                            i.startTime - c.startTime < 1e3 &&
                            i.startTime - a.startTime < 5e3 ?
                            ((this.i += i.value), this.o.push(i)) :
                            ((this.i = i.value), (this.o = [i])),
                            (c = this.t) != null && c.call(this, i));
                };
                var Gi,
                    sp = hc,
                    Jn = -1,
                    oc = function() {
                        return document.visibilityState !== "hidden" ||
                            document.prerendering ?
                            1 / 0 :
                            0;
                    },
                    To = function(i) {
                        document.visibilityState === "hidden" &&
                            -1 < Jn &&
                            ((Jn = i.type === "visibilitychange" ? i.timeStamp : 0),
                                removeEventListener("visibilitychange", To, !0),
                                removeEventListener("prerenderingchange", To, !0));
                    },
                    ic = function() {
                        (addEventListener("visibilitychange", To, !0),
                            addEventListener("prerenderingchange", To, !0));
                    },
                    ac = [1800, 3e3],
                    sc = [0.1, 0.25],
                    cc = 0,
                    Zi = 1 / 0,
                    Io = 0,
                    uc = 0,
                    cp =
                    ((Po.prototype.p = function() {
                            ((uc = nc()), (this.u.length = 0), this.l.clear());
                        }),
                        (Po.prototype.P = function() {
                            var i = Math.min(this.u.length - 1, Math.floor((nc() - uc) / 50));
                            return this.u[i];
                        }),
                        (Po.prototype.h = function(i) {
                            if (
                                ((a = this.m) != null && a.call(this, i),
                                    i.interactionId || i.entryType === "first-input")
                            ) {
                                var a = this.u.at(-1),
                                    c = this.l.get(i.interactionId);
                                if (c || this.u.length < 10 || i.duration > a.T) {
                                    if (
                                        (c ?
                                            i.duration > c.T ?
                                            ((c.entries = [i]), (c.T = i.duration)) :
                                            i.duration === c.T &&
                                            i.startTime === c.entries[0].startTime &&
                                            c.entries.push(i) :
                                            ((c = {
                                                    id: i.interactionId,
                                                    entries: [i],
                                                    T: i.duration,
                                                }),
                                                this.l.set(c.id, c),
                                                this.u.push(c)),
                                            this.u.sort(function(y, b) {
                                                return b.T - y.T;
                                            }),
                                            10 < this.u.length)
                                    )
                                        for (var l = 0, f = this.u.splice(10); l < f.length; l++) {
                                            var m = f[l];
                                            this.l.delete(m.id);
                                        }
                                        (a = this.v) != null && a.call(this, c);
                                }
                            }
                        }),
                        Po),
                    lc = [200, 500],
                    up =
                    ((pc.prototype.h = function(i) {
                            var a;
                            (a = this.m) != null && a.call(this, i);
                        }),
                        pc),
                    dc = [2500, 4e3],
                    fc =
                    (new Pe({
                        name: R.WEB_VITALS
                    }), {
                        FCP: -1,
                        LCP: -1,
                        CLS: -1,
                        INP: -1
                    });

                function pc() {}

                function Po() {
                    ((this.u = []), (this.l = new Map()));
                }

                function hc() {
                    ((this.i = 0), (this.o = []));
                }

                function mc(i, a) {
                    for (var c = new ft(31), l = 0; l < 31; ++l)
                        c[l] = a += 1 << i[l - 1];
                    var f = new Xi(c[30]);
                    for (l = 1; l < 30; ++l)
                        for (var m = c[l]; m < c[l + 1]; ++m) f[m] = ((m - c[l]) << 5) | l;
                    return {
                        b: c,
                        r: f
                    };
                }
                var lp = new Pe({
                        name: R.WEB_VITALS,
                        onNewAegis: function(i) {
                            if (
                                Nr() &&
                                typeof window.PerformanceObserver == "function" &&
                                typeof performance.getEntriesByName == "function"
                            )
                                try {
                                    (tc(Co),
                                        (l = Co),
                                        f === void 0 && (f = {}),
                                        Wi(function() {
                                            function m(G) {
                                                for (
                                                    var M = 0,
                                                        Z = (G = f.reportAllChanges ? G : G.slice(-1)); M < Z.length; M++
                                                ) {
                                                    var j = Z[M];
                                                    (x.h(j),
                                                        j.startTime < y.firstHiddenTime &&
                                                        ((b.value = Math.max(j.startTime - Eo(), 0)),
                                                            (b.entries = [j]),
                                                            S()));
                                                }
                                            }
                                            var y = ec(),
                                                b = hn("LCP"),
                                                x = Ui(f, up),
                                                _ = Mr("largest-contentful-paint", m);
                                            if (_) {
                                                for (
                                                    var S = pn(l, b, dc, f.reportAllChanges),
                                                        T = qi(function() {
                                                            (m(_.takeRecords()), _.disconnect(), S(!0));
                                                        }),
                                                        E = 0,
                                                        A = ["keydown", "click", "visibilitychange"]; E < A.length; E++
                                                )
                                                    addEventListener(
                                                        A[E],
                                                        function() {
                                                            return rc(T);
                                                        }, {
                                                            capture: !0,
                                                            once: !0
                                                        },
                                                    );
                                                jr(function(G) {
                                                    ((b = hn("LCP")),
                                                        (S = pn(l, b, dc, f.reportAllChanges)),
                                                        Hi(function() {
                                                            ((b.value = performance.now() - G.timeStamp),
                                                                S(!0));
                                                        }));
                                                });
                                            }
                                        }),
                                        (a = Co),
                                        c === void 0 && (c = {}),
                                        tc(
                                            qi(function() {
                                                function m(S) {
                                                    for (var T = 0, E = S; T < E.length; T++) {
                                                        var A = E[T];
                                                        x.h(A);
                                                    }
                                                    x.i > b.value &&
                                                        ((b.value = x.i), (b.entries = x.o), y());
                                                }
                                                var y,
                                                    b = hn("CLS", 0),
                                                    x = Ui(c, sp),
                                                    _ = Mr("layout-shift", m);
                                                _ &&
                                                    ((y = pn(a, b, sc, c.reportAllChanges)),
                                                        document.addEventListener(
                                                            "visibilitychange",
                                                            function() {
                                                                document.visibilityState === "hidden" &&
                                                                    (m(_.takeRecords()), y(!0));
                                                            },
                                                        ),
                                                        jr(function() {
                                                            ((x.i = 0),
                                                                (b = hn("CLS", 0)),
                                                                (y = pn(a, b, sc, c.reportAllChanges)),
                                                                Hi(function() {
                                                                    return y();
                                                                }));
                                                        }),
                                                        setTimeout(y));
                                            }),
                                        ),
                                        (function(m, y) {
                                            (y === void 0 && (y = {}),
                                                globalThis.PerformanceEventTiming &&
                                                "interactionId" in PerformanceEventTiming.prototype &&
                                                Wi(function() {
                                                    var b;

                                                    function x(A) {
                                                        rc(function() {
                                                            for (var G = 0, M = A; G < M.length; G++) {
                                                                var Z = M[G];
                                                                S.h(Z);
                                                            }
                                                            var j = S.P();
                                                            j &&
                                                                j.T !== _.value &&
                                                                ((_.value = j.T),
                                                                    (_.entries = j.entries),
                                                                    E());
                                                        });
                                                    }
                                                    "interactionCount" in performance ||
                                                        (Gi =
                                                            Gi ||
                                                            Mr("event", ap, {
                                                                type: "event",
                                                                buffered: !0,
                                                                durationThreshold: 0,
                                                            }));
                                                    var _ = hn("INP"),
                                                        S = Ui(y, cp),
                                                        T = Mr("event", x, {
                                                            durationThreshold: (b = y.durationThreshold) != null ? b : 40,
                                                        }),
                                                        E = pn(m, _, lc, y.reportAllChanges);
                                                    T &&
                                                        (T.observe({
                                                                type: "first-input",
                                                                buffered: !0
                                                            }),
                                                            document.addEventListener(
                                                                "visibilitychange",
                                                                function() {
                                                                    document.visibilityState === "hidden" &&
                                                                        (x(T.takeRecords()), E(!0));
                                                                },
                                                            ),
                                                            jr(function() {
                                                                (S.p(),
                                                                    (_ = hn("INP")),
                                                                    (E = pn(m, _, lc, y.reportAllChanges)));
                                                            }));
                                                }));
                                        })(Co),
                                        Ws(this.publishVitals.bind(this, i)));
                                } catch {}
                            var a, c, l, f;
                        },
                        publishVitals: function(i) {
                            var a = this;
                            setTimeout(function() {
                                a.publish(p({
                                    type: O.WEB_VITALS,
                                    msg: "web_vitals"
                                }, fc), i);
                            }, 10);
                        },
                        destroy: function() {
                            this.publish = function() {};
                        },
                    }),
                    dp =
                    (new Pe({
                            name: R.SPA
                        }),
                        new Pe({
                            name: R.SPA,
                            originFireUrl: "",
                            onNewAegis: function(i) {
                                var a,
                                    c,
                                    l,
                                    f = this;
                                ((this.sendPv = this.sendPv.bind(this)),
                                    (a = (a = i.config) == null ? void 0 : a.plugin) != null &&
                                    a.spa &&
                                    this.sendPv(i));
                                try {
                                    ((c = Object.getOwnPropertyDescriptor(
                                            History.prototype,
                                            "pushState",
                                        )) != null &&
                                        c.writable &&
                                        (history.pushState =
                                            this.wr("pushState") || history.pushState),
                                        (l = Object.getOwnPropertyDescriptor(
                                            History.prototype,
                                            "replaceState",
                                        )) != null &&
                                        l.writable &&
                                        (history.replaceState =
                                            this.wr("replaceState") || history.replaceState));
                                } catch {}
                                ["replaceState", "pushState", "hashchange", "popstate"].forEach(
                                    function(m) {
                                        return window.addEventListener(m, function() {
                                            return f.sendPv.call(f, i);
                                        });
                                    },
                                );
                            },
                            wr: function(i) {
                                var a = history[i],
                                    c = "__".concat(i).concat("__hasWrittenByTamSpa");
                                return (
                                    typeof a == "function" &&
                                    !history[c] &&
                                    (Object.defineProperty(history, c, {
                                            value: !0,
                                            enumerable: !1,
                                        }),
                                        function() {
                                            var l = a.apply(this, arguments),
                                                f = null;
                                            return (
                                                typeof Event == "function" ?
                                                (f = new Event(i)) :
                                                (f = document.createEvent("HTMLEvents")).initEvent(
                                                    i,
                                                    !1,
                                                    !0,
                                                ),
                                                f && window.dispatchEvent(f),
                                                l
                                            );
                                        })
                                );
                            },
                            sendPv: function(i) {
                                var a = this;
                                setTimeout(function() {
                                    var c,
                                        l,
                                        f = location.pathname + location.hash + i.config.id;
                                    f &&
                                        f !== i.originFireUrl &&
                                        ((l = (
                                                (l = (l = i.config) == null ? void 0 : l.plugin) == null ?
                                                void 0 :
                                                l.spa
                                            ).onRouterChange),
                                            i.updateSnapshootInfo(
                                                p({
                                                        from: i.getCurrentPageUrl()
                                                    },
                                                    l == null ? void 0 : l(),
                                                ),
                                            ),
                                            (i.timeOrigin = Date.now()),
                                            (l = {
                                                msg: "spa",
                                                type: O.PV,
                                                plugin: a.name
                                            }),
                                            (c = i.config) != null && c.sendPvImmediately ?
                                            i.sendLogsImmediately([l]) :
                                            a.publish(l, i),
                                            (i.originFireUrl = f));
                                }, 0);
                            },
                            destroy: function() {
                                this.sendPv = function() {};
                            },
                        })),
                    fp = {
                        name: "networkRefresh",
                        create: function(i) {
                            return function(a) {
                                return new Promise(function(c) {
                                    Js(function(l) {
                                        (i.extendBean({
                                            netType: l
                                        }), c(a));
                                    });
                                });
                            };
                        },
                    },
                    At = Uint8Array,
                    ft = Uint16Array,
                    Xi = Int32Array,
                    Vi = new At([
                        0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4,
                        4, 5, 5, 5, 5, 0, 0, 0, 0,
                    ]),
                    Ji = new At([
                        0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9,
                        10, 10, 11, 11, 12, 12, 13, 13, 0, 0,
                    ]),
                    gc = new At([
                        16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
                    ]),
                    tt = (Br = mc(Vi, 2)).b,
                    Ki = Br.r;
                ((tt[28] = 258), (Ki[258] = 28));
                for (
                    var vc = mc(Ji, 0).r, Yi = new ft(32768), Ae = 0; Ae < 32768;
                    ++Ae
                ) {
                    var Kn =
                        ((61680 &
                                (Kn =
                                    ((52428 & (Kn = ((43690 & Ae) >> 1) | ((21845 & Ae) << 1))) >>
                                        2) |
                                    ((13107 & Kn) << 2))) >>
                            4) |
                        ((3855 & Kn) << 4);
                    Yi[Ae] = (((65280 & Kn) >> 8) | ((255 & Kn) << 8)) >> 1;
                }
                var Dr = function(i, a, c) {
                        for (var l = i.length, f = 0, m = new ft(a); f < l; ++f)
                            i[f] && ++m[i[f] - 1];
                        var y = new ft(a);
                        for (f = 1; f < a; ++f) y[f] = (y[f - 1] + m[f - 1]) << 1;
                        if (c) {
                            var b = new ft(1 << a),
                                x = 15 - a;
                            for (f = 0; f < l; ++f)
                                if (i[f])
                                    for (
                                        var _ = (f << 4) | i[f],
                                            S = a - i[f],
                                            T = y[i[f] - 1]++ << S,
                                            E = T | ((1 << S) - 1); T <= E;
                                        ++T
                                    )
                                        b[Yi[T] >> x] = _;
                        } else
                            for (b = new ft(l), f = 0; f < l; ++f)
                                i[f] && (b[f] = Yi[y[i[f] - 1]++] >> (15 - i[f]));
                        return b;
                    },
                    Pn = new At(288);
                for (Ae = 0; Ae < 144; ++Ae) Pn[Ae] = 8;
                for (Ae = 144; Ae < 256; ++Ae) Pn[Ae] = 9;
                for (Ae = 256; Ae < 280; ++Ae) Pn[Ae] = 7;
                for (Ae = 280; Ae < 288; ++Ae) Pn[Ae] = 8;
                var Ao = new At(32);
                for (Ae = 0; Ae < 32; ++Ae) Ao[Ae] = 5;

                function tn(i, a, c) {
                    var l = (a / 8) | 0;
                    ((i[l] |= c <<= 7 & a), (i[1 + l] |= c >> 8));
                }

                function Fr(i, a, c) {
                    var l = (a / 8) | 0;
                    ((i[l] |= c <<= 7 & a), (i[1 + l] |= c >> 8), (i[2 + l] |= c >> 16));
                }

                function Qi(i, a) {
                    for (var c = [], l = 0; l < i.length; ++l)
                        i[l] && c.push({
                            s: l,
                            f: i[l]
                        });
                    var f = c.length,
                        m = c.slice();
                    if (!f) return {
                        t: _c,
                        l: 0
                    };
                    if (f == 1)
                        return (((M = new At(c[0].s + 1))[c[0].s] = 1), {
                            t: M,
                            l: 1
                        });
                    (c.sort(function($, re) {
                            return $.f - re.f;
                        }),
                        c.push({
                            s: -1,
                            f: 25001
                        }));
                    var y = c[0],
                        b = c[1],
                        x = 0,
                        _ = 1,
                        S = 2;
                    for (c[0] = {
                            s: -1,
                            f: y.f + b.f,
                            l: y,
                            r: b
                        }; _ != f - 1;)
                        ((y = c[c[x].f < c[S].f ? x++ : S++]),
                            (b = c[x != _ && c[x].f < c[S].f ? x++ : S++]),
                            (c[_++] = {
                                s: -1,
                                f: y.f + b.f,
                                l: y,
                                r: b
                            }));
                    var T = m[0].s;
                    for (l = 1; l < f; ++l) m[l].s > T && (T = m[l].s);
                    var E = new ft(T + 1),
                        A = ta(c[_ - 1], E, 0);
                    if (a < A) {
                        l = 0;
                        var G = 0,
                            M = A - a,
                            Z = 1 << M;
                        for (
                            m.sort(function($, re) {
                                return E[re.s] - E[$.s] || $.f - re.f;
                            }); l < f;
                            ++l
                        ) {
                            var j = m[l].s;
                            if (!(E[j] > a)) break;
                            ((G += Z - (1 << (A - E[j]))), (E[j] = a));
                        }
                        for (G >>= M; 0 < G;) {
                            var L = m[l].s;
                            E[L] < a ? (G -= 1 << (a - E[L]++ - 1)) : ++l;
                        }
                        for (; 0 <= l && G; --l) {
                            var H = m[l].s;
                            E[H] == a && (--E[H], ++G);
                        }
                        A = a;
                    }
                    return {
                        t: new At(E),
                        l: A
                    };
                }

                function yc(i) {
                    for (var a = i.length; a && !i[--a];);
                    for (
                        var c = new ft(++a),
                            l = 0,
                            f = i[0],
                            m = 1,
                            y = function(x) {
                                c[l++] = x;
                            },
                            b = 1; b <= a;
                        ++b
                    )
                        if (i[b] == f && b != a) ++m;
                        else {
                            if (!f && 2 < m) {
                                for (; 138 < m; m -= 138) y(32754);
                                2 < m &&
                                    (y(10 < m ? ((m - 11) << 5) | 28690 : ((m - 3) << 5) | 12305),
                                        (m = 0));
                            } else if (3 < m) {
                                for (y(f), --m; 6 < m; m -= 6) y(8304);
                                2 < m && (y(((m - 3) << 5) | 8208), (m = 0));
                            }
                            for (; m--;) y(f);
                            ((m = 1), (f = i[b]));
                        }
                    return {
                        c: c.subarray(0, l),
                        n: a
                    };
                }

                function Hr(i, a) {
                    for (var c = 0, l = 0; l < a.length; ++l) c += i[l] * a[l];
                    return c;
                }

                function ea(i, a, c) {
                    for (; c; ++a)((i[a] = c), (c >>>= 8));
                }
                var pp = Dr(Pn, 9, 0),
                    hp = Dr(Ao, 5, 0),
                    bc = function(i) {
                        return ((i + 7) / 8) | 0;
                    },
                    ta = function(i, a, c) {
                        return i.s == -1 ?
                            Math.max(ta(i.l, a, c + 1), ta(i.r, a, c + 1)) :
                            (a[i.s] = c);
                    },
                    wc = function(i, a, c) {
                        var l = c.length,
                            f = bc(a + 2);
                        ((i[f] = 255 & l),
                            (i[f + 1] = l >> 8),
                            (i[f + 2] = 255 ^ i[f]),
                            (i[f + 3] = 255 ^ i[f + 1]));
                        for (var m = 0; m < l; ++m) i[f + m + 4] = c[m];
                        return 8 * (f + 4 + l);
                    },
                    Sc = function(i, a, c, l, f, m, y, b, x, _, S) {
                        (tn(a, S++, c), ++f[256]);
                        for (
                            var T = (c = Qi(f, 15)).t,
                                E = ((c = c.l), (A = Qi(m, 15)).t),
                                A = A.l,
                                G = (M = yc(T)).c,
                                M = M.n,
                                Z = (j = yc(E)).c,
                                j = j.n,
                                L = new ft(19),
                                H = 0; H < G.length;
                            ++H
                        )
                            ++L[31 & G[H]];
                        for (H = 0; H < Z.length; ++H) ++L[31 & Z[H]];
                        for (
                            var $ = (re = Qi(L, 7)).t, re = re.l, ae = 19; 4 < ae && !$[gc[ae - 1]];
                            --ae
                        );
                        var Q = (_ + 5) << 3,
                            se = Hr(f, Pn) + Hr(m, Ao) + y;
                        if (
                            ((f =
                                    Hr(f, T) +
                                    Hr(m, E) +
                                    y +
                                    14 +
                                    3 * ae +
                                    Hr(L, $) +
                                    2 * L[16] +
                                    3 * L[17] +
                                    7 * L[18]),
                                0 <= x && Q <= se && Q <= f)
                        )
                            return wc(a, S, i.subarray(x, x + _));
                        if ((tn(a, S, 1 + (f < se)), (S += 2), f < se)) {
                            var fe = Dr(T, c, 0),
                                J = T,
                                we = Dr(E, A, 0),
                                ye = E,
                                ne = Dr($, re, 0);
                            for (
                                tn(a, S, M - 257),
                                tn(a, S + 5, j - 1),
                                tn(a, S + 10, ae - 4),
                                S += 14,
                                H = 0; H < ae;
                                ++H
                            )
                                tn(a, S + 3 * H, $[gc[H]]);
                            S += 3 * ae;
                            for (var te = [G, Z], ce = 0; ce < 2; ++ce) {
                                var ie = te[ce];
                                for (H = 0; H < ie.length; ++H) {
                                    var be = 31 & ie[H];
                                    (tn(a, S, ne[be]),
                                        (S += $[be]),
                                        15 < be &&
                                        (tn(a, S, (ie[H] >> 5) & 127), (S += ie[H] >> 12)));
                                }
                            }
                        } else((fe = pp), (J = Pn), (we = hp), (ye = Ao));
                        for (H = 0; H < b; ++H) {
                            var X,
                                ge = l[H];
                            255 < ge ?
                                (Fr(a, S, fe[257 + (be = (ge >> 18) & 31)]),
                                    (S += J[be + 257]),
                                    7 < be && (tn(a, S, (ge >> 23) & 31), (S += Vi[be])),
                                    Fr(a, S, we[(X = 31 & ge)]),
                                    (S += ye[X]),
                                    3 < X && (Fr(a, S, (ge >> 5) & 8191), (S += Ji[X]))) :
                                (Fr(a, S, fe[ge]), (S += J[ge]));
                        }
                        return (Fr(a, S, fe[256]), S + J[256]);
                    },
                    mp = new Xi([
                        65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560,
                        2117632,
                    ]),
                    _c = new At(0),
                    gp = (function() {
                        for (var i = new Int32Array(256), a = 0; a < 256; ++a) {
                            for (var c = a, l = 9; --l;)
                                c = (1 & c && -306674912) ^ (c >>> 1);
                            i[a] = c;
                        }
                        return i;
                    })();

                function vp(i, a) {
                    ((a = a || {}), (c = -1));
                    var c,
                        l = function(S) {
                            for (var T = c, E = 0; E < S.length; ++E)
                                T = gp[(255 & T) ^ S[E]] ^ (T >>> 8);
                            c = T;
                        },
                        f = function() {
                            return ~c;
                        },
                        m = i.length,
                        y =
                        (l(i),
                            (i = (function(S, T, E, A) {
                                !A &&
                                    ((A = {
                                        l: 1
                                    }), T.dictionary) &&
                                    ((Z = T.dictionary.subarray(-32768)),
                                        (M = new At(Z.length + S.length)).set(Z),
                                        M.set(S, Z.length),
                                        (S = M),
                                        (A.w = Z.length));
                                var G = S,
                                    M = T.level == null ? 6 : T.level,
                                    Z =
                                    T.mem == null ?
                                    A.l ?
                                    Math.ceil(
                                        1.5 * Math.max(8, Math.min(13, Math.log(S.length))),
                                    ) :
                                    20 :
                                    12 + T.mem,
                                    j = ((S = E), (T = 8), (E = A).z || G.length),
                                    L = (A = new At(
                                        S + j + 5 * (1 + Math.ceil(j / 7e3)) + T,
                                    )).subarray(S, A.length - T),
                                    H = E.l,
                                    $ = 7 & (E.r || 0);
                                if (M) {
                                    $ && (L[0] = E.r >> 3);
                                    for (
                                        var re = (M = mp[M - 1]) >> 13,
                                            ae = 8191 & M,
                                            Q = (1 << Z) - 1,
                                            se = E.p || new ft(32768),
                                            fe = E.h || new ft(1 + Q),
                                            J = Math.ceil(Z / 3),
                                            we = 2 * J,
                                            ye = function(He) {
                                                return (
                                                    (G[He] ^ (G[He + 1] << J) ^ (G[He + 2] << we)) & Q
                                                );
                                            },
                                            ne = new Xi(25e3),
                                            te = new ft(288),
                                            ce = new ft(32),
                                            ie = 0,
                                            be = 0,
                                            X = E.i || 0,
                                            ge = 0,
                                            Re = E.w || 0,
                                            oe = 0; X + 2 < j;
                                        ++X
                                    ) {
                                        var de = ye(X),
                                            xe = 32767 & X,
                                            Se = fe[de];
                                        if (((se[xe] = Se), (fe[de] = xe), Re <= X)) {
                                            var Oe = j - X;
                                            if ((7e3 < ie || 24576 < ge) && (423 < Oe || !H)) {
                                                (($ = Sc(G, L, 0, ne, te, ce, be, ge, oe, X - oe, $)),
                                                    (ge = ie = be = 0),
                                                    (oe = X));
                                                for (var $e = 0; $e < 286; ++$e) te[$e] = 0;
                                                for ($e = 0; $e < 30; ++$e) ce[$e] = 0;
                                            }
                                            var Ce = 2,
                                                Ne = 0,
                                                st = ae,
                                                Ze = (xe - Se) & 32767;
                                            if (2 < Oe && de == ye(X - Ze))
                                                for (
                                                    var ze = Math.min(re, Oe) - 1,
                                                        Rt = Math.min(32767, X),
                                                        Ut = Math.min(258, Oe); Ze <= Rt && --st && xe != Se;
                                                ) {
                                                    if (G[X + Ce] == G[X + Ce - Ze]) {
                                                        for (
                                                            var ct = 0; ct < Ut && G[X + ct] == G[X + ct - Ze];
                                                            ++ct
                                                        );
                                                        if (Ce < ct) {
                                                            if (((Ne = Ze), ze < (Ce = ct))) break;
                                                            var qt = Math.min(Ze, ct - 2),
                                                                nt = 0;
                                                            for ($e = 0; $e < qt; ++$e) {
                                                                var on = (X - Ze + $e) & 32767,
                                                                    Xe = (on - se[on]) & 32767;
                                                                nt < Xe && ((nt = Xe), (Se = on));
                                                            }
                                                        }
                                                    }
                                                    Ze += ((xe = Se) - (Se = se[xe])) & 32767;
                                                }
                                            Ne
                                                ?
                                                ((ne[ge++] = 268435456 | (Ki[Ce] << 18) | vc[Ne]),
                                                    (de = 31 & Ki[Ce]),
                                                    (Oe = 31 & vc[Ne]),
                                                    (be += Vi[de] + Ji[Oe]),
                                                    ++te[257 + de],
                                                    ++ce[Oe],
                                                    (Re = X + Ce),
                                                    ++ie) :
                                                ((ne[ge++] = G[X]), ++te[G[X]]);
                                        }
                                    }
                                    for (X = Math.max(X, Re); X < j; ++X)
                                        ((ne[ge++] = G[X]), ++te[G[X]]);
                                    (($ = Sc(G, L, H, ne, te, ce, be, ge, oe, X - oe, $)),
                                        H ||
                                        ((E.r = (7 & $) | (L[($ / 8) | 0] << 3)),
                                            ($ -= 7),
                                            (E.h = fe),
                                            (E.p = se),
                                            (E.i = X),
                                            (E.w = Re)));
                                } else {
                                    for (X = E.w || 0; X < j + H; X += 65535) {
                                        var $t = X + 65535;
                                        (j <= $t && ((L[($ / 8) | 0] = H), ($t = j)),
                                            ($ = wc(L, $ + 1, G.subarray(X, $t))));
                                    }
                                    E.i = j;
                                }
                                return (
                                    (M = A),
                                    (Z = 0),
                                    ((E = S + bc($) + T) == null || E > M.length) &&
                                    (E = M.length),
                                    new At(M.subarray((Z = Z == null || Z < 0 ? 0 : Z), E))
                                );
                            })(i, a, 10 + ((i = a).filename ? i.filename.length + 1 : 0))),
                            i.length),
                        b = i,
                        x = a.filename;
                    if (
                        ((b[0] = 31),
                            (b[1] = 139),
                            (b[2] = 8),
                            (b[8] = a.level < 2 ? 4 : a.level == 9 ? 2 : 0),
                            (b[9] = 3),
                            a.mtime != 0 &&
                            ea(b, 4, Math.floor(new Date(a.mtime || Date.now()) / 1e3)),
                            x)
                    ) {
                        b[3] = 8;
                        for (var _ = 0; _ <= x.length; ++_) b[_ + 10] = x.charCodeAt(_);
                    }
                    return (ea(i, y - 8, f()), ea(i, y - 4, m), i);
                }
                Br = typeof TextDecoder < "u" && new TextDecoder();
                try {
                    Br.decode(_c, {
                        stream: !0
                    });
                } catch {}

                function Fe(i) {
                    return navigator.userAgent.toLowerCase().indexOf(i) !== -1;
                }
                tt = (function(i) {
                    function a(m) {
                        var y = this;
                        ((m = p({}, m)).sendPvImmediately === void 0 &&
                            (m.sendPvImmediately = !0),
                            ((y = i.call(this, m) || this).sendNow = !1),
                            (y.originFireUrl = ""),
                            (y.timeOrigin =
                                (m =
                                    typeof performance < "u" &&
                                    (performance == null ? void 0 : performance.timeOrigin)) !=
                                null ?
                                m :
                                Date.now()),
                            y.pipes.push(fp));
                        try {
                            (y.updateSnapshootInfo({
                                    from: y.getCurrentPageUrl()
                                }),
                                typeof document < "u" &&
                                y.extendBean({
                                    referer: document.referrer || ""
                                }),
                                y.init());
                        } catch (b) {
                            (y.logger.warn(b), y.sendSDKError({
                                msg: _t(b)
                            }));
                        }
                        return y;
                    }
                    var c = a,
                        l = i;
                    if (typeof l != "function" && l !== null)
                        throw new TypeError(
                            "Class extends value " +
                            String(l) +
                            " is not a constructor or null",
                        );

                    function f() {
                        this.constructor = c;
                    }
                    return (
                        h(c, l),
                        (c.prototype =
                            l === null ?
                            Object.create(l) :
                            ((f.prototype = l.prototype), new f())),
                        (a.prototype.getCurrentPageUrl = function() {
                            var m = this.config.pageUrl || location.href || "";
                            return (m =
                                typeof this.config.urlHandler == "function" ?
                                this.config.urlHandler() :
                                m).slice(0, 2048);
                        }),
                        (a.prototype.compressLogs = function(m) {
                            var y = m;
                            m = {
                                payload: y,
                                isCompressed: !1
                            };
                            try {
                                return TextEncoder && typeof TextEncoder < "u" ?
                                    {
                                        payload: vp(new TextEncoder().encode(y), {
                                            level: 1
                                        }),
                                        isCompressed: !0,
                                    } :
                                    m;
                            } catch {
                                return m;
                            }
                        }),
                        (a.prototype.performRequest = function(m, y, b) {
                            var x = m.method,
                                _ = m.url,
                                S = m.payload;
                            if (
                                ((m = (m = m.headers) === void 0 ? {} : m),
                                    this.sendNow &&
                                    _ === Pt(this.config, "hostUrl.url") &&
                                    typeof(navigator == null ? void 0 : navigator.sendBeacon) ==
                                    "function")
                            )
                                return (E = navigator.sendBeacon(_, dn(S))) ?
                                    y == null ?
                                    void 0 :
                                    y(E) :
                                    b == null ?
                                    void 0 :
                                    b(E);
                            var T = {
                                    url: _,
                                    payload: S,
                                    method: x,
                                    headers: m,
                                    success: y,
                                    fail: b,
                                },
                                E = T.url,
                                A = ((_ = T.method), (S = T.payload), T.headers),
                                G = T.fail,
                                M = T.success;
                            try {
                                var Z = new XMLHttpRequest();
                                ((Z.sendByAegis = !0),
                                    Z.addEventListener("readystatechange", function() {
                                        Z.readyState === 4 &&
                                            (400 <= Z.status || Z.status === 0 ?
                                                G != null && G(Z.response) :
                                                M != null && M(Z.response));
                                    }),
                                    Z.open(_ || "post", E),
                                    Object.keys(A).forEach(function(j) {
                                        Z.setRequestHeader(j, A[j]);
                                    }),
                                    Z.send(S));
                            } catch {
                                G != null && G({});
                            }
                        }),
                        (a.sessionID = "session-".concat(Date.now())),
                        a
                    );
                })(q);
                var le = (new Pe({
                        name: R.IE
                    }), {}),
                    Br =
                    ((le.macos = function() {
                            return Fe("mac");
                        }),
                        (le.ios = function() {
                            return le.iphone() || le.ipod() || le.ipad();
                        }),
                        (le.iphone = function() {
                            return !le.windows() && Fe("iphone");
                        }),
                        (le.ipod = function() {
                            return Fe("ipod");
                        }),
                        (le.ipad = function() {
                            var i =
                                navigator.platform === "MacIntel" &&
                                1 < navigator.maxTouchPoints;
                            return Fe("ipad") || i;
                        }),
                        (le.android = function() {
                            return !le.windows() && Fe("android");
                        }),
                        (le.androidPhone = function() {
                            return le.android() && Fe("mobile");
                        }),
                        (le.androidTablet = function() {
                            return le.android() && !Fe("mobile");
                        }),
                        (le.blackberry = function() {
                            return Fe("blackberry") || Fe("bb10");
                        }),
                        (le.blackberryPhone = function() {
                            return le.blackberry() && !Fe("tablet");
                        }),
                        (le.blackberryTablet = function() {
                            return le.blackberry() && Fe("tablet");
                        }),
                        (le.windows = function() {
                            return Fe("windows");
                        }),
                        (le.windowsPhone = function() {
                            return le.windows() && Fe("phone");
                        }),
                        (le.windowsTablet = function() {
                            return le.windows() && Fe("touch") && !le.windowsPhone();
                        }),
                        (le.fxos = function() {
                            return (Fe("(mobile") || Fe("(tablet")) && Fe(" rv:");
                        }),
                        (le.fxosPhone = function() {
                            return le.fxos() && Fe("mobile");
                        }),
                        (le.fxosTablet = function() {
                            return le.fxos() && Fe("tablet");
                        }),
                        (le.meego = function() {
                            return Fe("meego");
                        }),
                        (le.cordova = function() {
                            return window.cordova && window.location.protocol === "file:";
                        }),
                        (le.nodeWebkit = function() {
                            return typeof window.process == "object";
                        }),
                        (le.mobile = function() {
                            return (
                                le.androidPhone() ||
                                le.iphone() ||
                                le.ipod() ||
                                le.windowsPhone() ||
                                le.blackberryPhone() ||
                                le.fxosPhone() ||
                                le.meego()
                            );
                        }),
                        (le.tablet = function() {
                            return (
                                le.ipad() ||
                                le.androidTablet() ||
                                le.blackberryTablet() ||
                                le.windowsTablet() ||
                                le.fxosTablet()
                            );
                        }),
                        (le.desktop = function() {
                            return !le.tablet() && !le.mobile();
                        }),
                        (le.isIE = function() {
                            return "ActiveXObject" in window;
                        }),
                        new Pe({
                            name: R.CLOSE
                        }),
                        new Pe({
                            name: R.CLOSE,
                            onNewAegis: function(i) {
                                var a,
                                    c = this;
                                le.desktop() ?
                                    ((a = window.onunload),
                                        (window.onunload = function() {
                                            for (var l = [], f = 0; f < arguments.length; f++)
                                                l[f] = arguments[f];
                                            (c.publishNotReportedLog(i),
                                                a != null && a.call.apply(a, C([window], l, !1)));
                                        })) :
                                    Ws(this.publishNotReportedLog.bind(this, i));
                            },
                            publishNotReportedLog: function(i) {
                                (i.clearPluginCache(), i.clearThrottleCache());
                            },
                            publishThrottlePipeLogs: function() {},
                        }));

                function Ur(i, a, c) {
                    return a != null && a.length && typeof i == "object" ?
                        a.reduce(function(l, f) {
                            var m = i instanceof Headers ? i.get(f) : i[f];
                            return m ?
                                l +
                                ""
                                .concat(
                                    l === "" ?
                                    `
` :
                                    `

`,
                                )
                                .concat(c, " header ")
                                .concat(f, ": ")
                                .concat(m) :
                                l;
                        }, "") :
                        "";
                }

                function yp(i, a, c) {
                    return v(void 0, void 0, void 0, function() {
                        var l, f, m, y, b, x, _, S, T, E, A, G, M;
                        return w(this, function(Z) {
                            switch (Z.label) {
                                case 0:
                                    ((l = Date.now()),
                                        (f = l),
                                        (m = new Uint8Array(0)),
                                        (y = 0),
                                        (b = a),
                                        (x = []),
                                        (_ = new TextDecoder()),
                                        (S = !1),
                                        (Z.label = 1));
                                case 1:
                                    return [4, i.read()];
                                case 2:
                                    return !(A = Z.sent()).done && A.value ?
                                        ((E = Date.now() - f),
                                            !S &&
                                            ((T = Ns(_.decode(A.value))),
                                                typeof c == "function" ? c(T) : m.length === 0) &&
                                            ((b += E), (S = !0)),
                                            x.push(E),
                                            (f = Date.now()),
                                            (y += 1),
                                            (j = m),
                                            (L = A.value),
                                            (H = new Uint8Array(j.length + L.length)).set(j),
                                            H.set(L, j.length),
                                            (m = H),
                                            [3, 1]) :
                                        [3, 3];
                                case 3:
                                    return (
                                        (T = Date.now() - l),
                                        (E = T + a),
                                        (A = $s(x)),
                                        (G = A.fluency),
                                        (M = A.isStuck),
                                        [
                                            2,
                                            {
                                                dataDuration: T,
                                                dataChunkCount: y,
                                                firstChunkTime: b,
                                                totalDuration: E,
                                                totalDataSize: m.length,
                                                connectTime: a,
                                                fluency: G,
                                                isStuck: M,
                                                data: _.decode(m),
                                            },
                                        ]
                                    );
                            }
                            var j, L, H;
                        });
                    });
                }

                function na(i) {
                    var a = i.isAjaxError,
                        c = ((i = i.isRetcodeError), I.INFO);
                    return (
                        a ? (c = I.AJAX_ERROR) : i && (c = I.ERROR), {
                            level: c,
                            type: O.API
                        }
                    );
                }
                (new Pe({
                        name: R.F_ID
                    }),
                    (q = new Pe({
                        name: R.PV,
                        init: function(i) {
                            var a, c;
                            ((c = (c = i.config) == null ? void 0 : c.plugin) != null &&
                                c.spa) ||
                            ((c = {
                                    msg: "pv",
                                    type: O.PV,
                                    plugin: this.name
                                }),
                                (a = i.config) != null && a.sendPvImmediately ?
                                i.sendLogsImmediately([c]) :
                                this.publish(c, i));
                        },
                    })));
                var xc,
                    Oc,
                    kc,
                    ra,
                    qr,
                    Ro = "abort",
                    oa = "error",
                    ia = "timeout",
                    Ec = "text/event-stream",
                    bp = {
                        isSSE: void 0,
                        dataChunkCount: 0,
                        sseConnectTime: 0,
                        firstChunkTime: 0,
                        totalDataSize: 0,
                        tokenIntervalArr: [],
                        preTokenStartTime: 0,
                        chunkPosition: 0,
                        firstChunkFlag: !1,
                    },
                    Cc = "content-type",
                    Tc = !1,
                    gn = [],
                    Ic = /^\/[^/]/,
                    Pc = !1,
                    vn = [],
                    wp =
                    (new Pe({
                            name: R.API
                        }),
                        new Pe({
                            name: R.API,
                            pipes: ["repeatLimit", "networkRefresh"],
                            override: !1,
                            onNewAegis: function(i) {
                                var a,
                                    c = (
                                        ((c = i == null ? void 0 : i.config) == null ?
                                            void 0 :
                                            c.plugin) || {}
                                    ).api;
                                (c != null && c.injectTraceHeader ?
                                    (this.traceRequestHeader = new Df(
                                        c.injectTraceHeader,
                                        (a = c == null ? void 0 : c.injectTraceIgnoreUrls) != null ?
                                        a :
                                        [],
                                        c == null ? void 0 : c.injectTraceUrls,
                                    )) :
                                    (this.traceRequestHeader = null),
                                    this.overrideFetch(i.config, i),
                                    this.overrideXhr(i.config, i));
                            },
                            overrideFetch: function(i, a) {
                                var c = this,
                                    l =
                                    (G = ((i == null ? void 0 : i.plugin) || {}).api) === void 0 ?
                                    {} :
                                    G,
                                    f = l.resourceTypeHandler,
                                    m = (G = l.reqHeaders) === void 0 ? [] : G,
                                    y = (G = l.resHeaders) === void 0 ? [] : G,
                                    b = l.apiDetail,
                                    x = l.reqParamHandler,
                                    _ = l.resBodyHandler,
                                    S = (G = l.reportWhenError) === void 0 || G,
                                    T = l.isSSE,
                                    E = l.urlHandler,
                                    A = l.urlRewrite,
                                    G = {
                                        name: i.id,
                                        config: i,
                                        traceRequestHeader: this.traceRequestHeader,
                                        urlRewrite: A ?
                                            function(M) {
                                                return A(M, i);
                                            } :
                                            void 0,
                                        then: function(M, Z, j, L) {
                                            return v(c, void 0, void 0, function() {
                                                var H,
                                                    $,
                                                    re,
                                                    ae,
                                                    Q,
                                                    se,
                                                    fe,
                                                    J,
                                                    we,
                                                    ye,
                                                    ne,
                                                    te,
                                                    ce,
                                                    ie = this;
                                                return w(this, function(be) {
                                                    switch (be.label) {
                                                        case 0:
                                                            switch (
                                                                ((H = (te = L || {}).headers),
                                                                    ($ = te.body),
                                                                    (re = te.method),
                                                                    (ae = (te = M || {}).headers),
                                                                    (Q = te.status),
                                                                    (te =
                                                                        (te = ae == null ? void 0 : ae.get(Cc)) !=
                                                                        null ?
                                                                        te :
                                                                        ""),
                                                                    (se = Ni(j, te, f)))
                                                            ) {
                                                                case "api":
                                                                    return [3, 1];
                                                                case "static":
                                                                    return [3, 6];
                                                            }
                                                            return [3, 7];
                                                        case 1:
                                                            return (
                                                                (fe = {}),
                                                                (J = ""),
                                                                (we =
                                                                    (te == null ? void 0 : te.includes(Ec)) ||
                                                                    (T == null ? void 0 : T(j))) ?
                                                                [
                                                                    4,
                                                                    yp(
                                                                        (ce =
                                                                            (ce = M.clone()) == null ?
                                                                            void 0 :
                                                                            ce.body) == null ?
                                                                        void 0 :
                                                                        ce.getReader(),
                                                                        Z,
                                                                        l.isFirstSSEChunk,
                                                                    ),
                                                                ] :
                                                                [3, 3]
                                                            );
                                                        case 2:
                                                            return (
                                                                (ce = be.sent()),
                                                                (ye = ce.data),
                                                                (ne = g(ce, ["data"])),
                                                                (fe = ne),
                                                                (J = ye),
                                                                [3, 5]
                                                            );
                                                        case 3:
                                                            return [4, M.clone().text()];
                                                        case 4:
                                                            ((J = be.sent()), (be.label = 5));
                                                        case 5:
                                                            return (
                                                                setTimeout(function() {
                                                                    return v(ie, void 0, void 0, function() {
                                                                        var X,
                                                                            ge,
                                                                            Re,
                                                                            oe,
                                                                            de,
                                                                            xe,
                                                                            Se,
                                                                            Oe,
                                                                            $e,
                                                                            Ce,
                                                                            Ne,
                                                                            st,
                                                                            Ze,
                                                                            ze,
                                                                            Rt;
                                                                        return w(this, function(Ut) {
                                                                            switch (Ut.label) {
                                                                                case 0:
                                                                                    return (
                                                                                        (ge = this.getPerformanceEntryByUrl({
                                                                                            url: j,
                                                                                            duration: Z
                                                                                        }, )),
                                                                                        (X = ge.performanceTiming),
                                                                                        (ge = g(ge, ["performanceTiming"])),
                                                                                        [
                                                                                            4,
                                                                                            As(J, l, {
                                                                                                url: j,
                                                                                                ctx: M,
                                                                                                payload: $,
                                                                                            }),
                                                                                        ]
                                                                                    );
                                                                                case 1:
                                                                                    return (
                                                                                        (oe = Ut.sent()),
                                                                                        (Re = oe.code),
                                                                                        (oe = oe.isErr),
                                                                                        (Ce =
                                                                                            (de = Q <= 0 || 400 <= Q) || oe),
                                                                                        Ls({
                                                                                            isWhiteList: a.isWhiteList,
                                                                                            requestUrl: j,
                                                                                            config: a.config,
                                                                                            isErrorApi: Ce,
                                                                                            reportWhenError: S,
                                                                                        }) &&
                                                                                        ((Se = js({
                                                                                                isWhiteList: a.isWhiteList,
                                                                                                requestUrl: j,
                                                                                                apiConfig: l,
                                                                                                apiDetail: b,
                                                                                                isErrorApi: Ce,
                                                                                                reportWhenError: S,
                                                                                            })),
                                                                                            (xe = Se ?
                                                                                                Ar($, x, {
                                                                                                    url: j
                                                                                                }) :
                                                                                                ""),
                                                                                            (Se = Se ?
                                                                                                Ar(J, _, {
                                                                                                    url: j,
                                                                                                    ctx: M
                                                                                                }) :
                                                                                                ""),
                                                                                            (Oe = Dt(
                                                                                                typeof E == "function" ?
                                                                                                E(j, $) :
                                                                                                j,
                                                                                            )),
                                                                                            ($e = "".concat(
                                                                                                de ?
                                                                                                "FETCH_ERROR" :
                                                                                                Rs({
                                                                                                    url: Oe,
                                                                                                    bodyTxt: Se,
                                                                                                    status: Q,
                                                                                                    code: Re,
                                                                                                }),
                                                                                            )),
                                                                                            (Ce = Ce ?
                                                                                                "".concat(j, ",").concat(Re) :
                                                                                                void 0),
                                                                                            (Ne = Ur(H, m, "req")),
                                                                                            (st = Ur(ae, y, "res")),
                                                                                            (ze = Ri(H)),
                                                                                            (Ze = ze[0]),
                                                                                            (ze = ze[1]),
                                                                                            (Rt = function() {
                                                                                                return p({
                                                                                                        isSSE: we
                                                                                                    },
                                                                                                    we ?
                                                                                                    p(p({}, fe), {
                                                                                                        totalDuration: X.duration,
                                                                                                    }) :
                                                                                                    {},
                                                                                                );
                                                                                            }),
                                                                                            this.publish(
                                                                                                p(
                                                                                                    p(
                                                                                                        p(
                                                                                                            p({
                                                                                                                    msg: $e,
                                                                                                                    errorMsg: Ce,
                                                                                                                    url: Oe,
                                                                                                                    status: Q || 0,
                                                                                                                    method: re || "get",
                                                                                                                    ret: Re,
                                                                                                                    isErr: oe,
                                                                                                                    param: xe,
                                                                                                                    data: Se,
                                                                                                                    reqHeaders: Ne,
                                                                                                                    resHeaders: st,
                                                                                                                    trace: Ze,
                                                                                                                    span: ze,
                                                                                                                    requestType: se,
                                                                                                                    requestBy: "fetch",
                                                                                                                },
                                                                                                                ge,
                                                                                                            ),
                                                                                                            X,
                                                                                                        ),
                                                                                                        na({
                                                                                                            isAjaxError: de,
                                                                                                            isRetcodeError: oe,
                                                                                                        }),
                                                                                                    ),
                                                                                                    Rt(),
                                                                                                ),
                                                                                                a,
                                                                                            )),
                                                                                        [2]
                                                                                    );
                                                                            }
                                                                        });
                                                                    });
                                                                }, 0),
                                                                [3, 7]
                                                            );
                                                        case 6:
                                                            return (
                                                                setTimeout(function() {
                                                                    var X = (ge = ie.getPerformanceEntryByUrl({
                                                                            url: j,
                                                                            duration: Z,
                                                                        })).performanceTiming,
                                                                        ge = g(ge, ["performanceTiming"]);
                                                                    ie.publish(
                                                                        p(
                                                                            p({
                                                                                    status: Q,
                                                                                    url: Dt(j),
                                                                                    type: O.ASSETS_SPEED,
                                                                                },
                                                                                ge,
                                                                            ),
                                                                            X,
                                                                        ),
                                                                        a,
                                                                    );
                                                                }, 0),
                                                                [3, 7]
                                                            );
                                                        case 7:
                                                            return [2];
                                                    }
                                                });
                                            });
                                        },
                                        catch: function(M, Z, j, L) {
                                            var H,
                                                $ = (L = L || {}).headers,
                                                re = L.body,
                                                ae = L.method;
                                            throw (
                                                !Zn(j, Pt(i, "hostUrl")) &&
                                                S &&
                                                ((H = Ni(j, "", f)),
                                                    setTimeout(function() {
                                                        var Q = c.getPerformanceEntryByUrl({
                                                                url: j,
                                                                duration: Z,
                                                            }),
                                                            se = Q.performanceTiming,
                                                            fe = g(Q, ["performanceTiming"]);
                                                        switch (H) {
                                                            case "api":
                                                                var J = "FETCH_ERROR: "
                                                                    .concat(
                                                                        M,
                                                                        ` 
url: `,
                                                                    )
                                                                    .concat(
                                                                        j,
                                                                        `
resdata: 
status: 0
retcode: unknown
 `,
                                                                    ),
                                                                    we = typeof E == "function" ? E(j, re) : j,
                                                                    ye = (ne = Ri($))[0],
                                                                    ne = ne[1],
                                                                    te = Ur($, m, "req"),
                                                                    ce = Ar(re, x, {
                                                                        url: j
                                                                    });
                                                                c.publish(
                                                                    p(
                                                                        p(
                                                                            p({
                                                                                    msg: J,
                                                                                    errorMsg: "".concat(j, ",0"),
                                                                                    url: Dt(we),
                                                                                    status: 0,
                                                                                    method: ae || "get",
                                                                                    param: ce,
                                                                                    reqHeaders: te,
                                                                                    ret: "unknown",
                                                                                    trace: ye,
                                                                                    span: ne,
                                                                                    isSSE: T == null ? void 0 : T(),
                                                                                    requestType: H,
                                                                                    requestBy: "fetch",
                                                                                },
                                                                                fe,
                                                                            ),
                                                                            se,
                                                                        ),
                                                                        na({
                                                                            isAjaxError: !0,
                                                                            isRetcodeError: !1
                                                                        }),
                                                                    ),
                                                                    a,
                                                                );
                                                                break;
                                                            case "static":
                                                                c.publish(
                                                                    p(
                                                                        p({
                                                                                url: Dt(j),
                                                                                status: 400,
                                                                                type: O.ASSETS_SPEED,
                                                                            },
                                                                            fe,
                                                                        ),
                                                                        se,
                                                                    ),
                                                                    a,
                                                                );
                                                        }
                                                    }, 0)),
                                                M
                                            );
                                        },
                                    };
                                ((this.hackFetchOptions = G),
                                    (function(M) {
                                        vn.find(function(Z) {
                                                return Z.name === M.name;
                                            }) ||
                                            (vn.push(M),
                                                !Pc &&
                                                window.fetch &&
                                                ((Pc = !0),
                                                    (ra = window.fetch),
                                                    (window.fetch = function(Z, j) {
                                                        j === void 0 && (j = {});
                                                        var L =
                                                            typeof(H = Z) == "string" ?
                                                            H :
                                                            H instanceof Request ?
                                                            H.url :
                                                            H instanceof URL ?
                                                            H.href :
                                                            "",
                                                            H =
                                                            (Ic.test(L) &&
                                                                (L = "".concat(location.origin).concat(L)),
                                                                Z);
                                                        if (
                                                            (re = Xn == null ? void 0 : Xn.test) != null &&
                                                            re.call(Xn, L)
                                                        )
                                                            return ra(L, j);
                                                        M.urlRewrite &&
                                                            (re = M.urlRewrite(L)) &&
                                                            re !== L &&
                                                            (H = (function(Q, se) {
                                                                if (typeof Q == "string") return se;
                                                                if (Q instanceof URL) return new URL(se);
                                                                if (Q instanceof Request)
                                                                    try {
                                                                        var fe = Q.method,
                                                                            J = Q.headers,
                                                                            we = Q.mode,
                                                                            ye = Q.credentials,
                                                                            ne = Q.cache,
                                                                            te = Q.redirect,
                                                                            ce = Q.referrer,
                                                                            ie = Q.referrerPolicy,
                                                                            be = Q.integrity,
                                                                            X = Q.body,
                                                                            ge = {
                                                                                method: fe,
                                                                                headers: J,
                                                                                mode: we,
                                                                                credentials: ye,
                                                                                cache: ne,
                                                                                redirect: te,
                                                                                referrer: ce,
                                                                                referrerPolicy: ie,
                                                                                integrity: be,
                                                                            };
                                                                        return (
                                                                            fe !== "GET" &&
                                                                            fe !== "HEAD" &&
                                                                            (ge.body = X) instanceof ReadableStream &&
                                                                            (ge.duplex = "half"),
                                                                            new Request(se, ge)
                                                                        );
                                                                    } catch {}
                                                                return Q;
                                                            })(Z, (L = re)));
                                                        var $,
                                                            re = (M || {}).traceRequestHeader,
                                                            ae =
                                                            (re &&
                                                                ((Z = (function(Q, se) {
                                                                        try {
                                                                            var fe = {};
                                                                            return (
                                                                                se.headers ?
                                                                                new Headers(se.headers).forEach(
                                                                                    function(J, we) {
                                                                                        fe[we] = J;
                                                                                    },
                                                                                ) :
                                                                                Q instanceof Request &&
                                                                                Q.headers.forEach(function(J, we) {
                                                                                    fe[we] = J;
                                                                                }),
                                                                                fe
                                                                            );
                                                                        } catch {
                                                                            return {};
                                                                        }
                                                                    })(Z, j)),
                                                                    ($ = (re = re.generate(L, Z) || {}).name),
                                                                    (re = re.value)) &&
                                                                $ &&
                                                                (j.headers = Object.assign(
                                                                    Z,
                                                                    (((Z = {})[$] = re), Z),
                                                                )),
                                                                Date.now());
                                                        return ra(H, j)
                                                            .then(function(Q) {
                                                                for (
                                                                    var se = Q.clone(), fe = 0; fe < vn.length; fe++
                                                                ) {
                                                                    var J = vn[fe];
                                                                    try {
                                                                        typeof J.then == "function" &&
                                                                            J.then(se, Date.now() - ae, L, j);
                                                                    } catch {}
                                                                }
                                                                return se;
                                                            })
                                                            .catch(function(Q) {
                                                                for (var se = 0; se < vn.length; se++) {
                                                                    var fe = vn[se];
                                                                    try {
                                                                        typeof fe.catch == "function" &&
                                                                            fe.catch(Q, Date.now() - ae, L, j);
                                                                    } catch {}
                                                                }
                                                                throw Q;
                                                            });
                                                    })));
                                    })(this.hackFetchOptions));
                            },
                            overrideXhr: function(i, a) {
                                var c,
                                    l = this,
                                    f = ((i == null ? void 0 : i.plugin) || {}).api,
                                    m = f.resourceTypeHandler,
                                    y = f.isFirstSSEChunk,
                                    b = f.isSSE,
                                    x = f.reportAbort,
                                    _ = (j = f.reqHeaders) === void 0 ? [] : j,
                                    S = (j = f.resHeaders) === void 0 ? [] : j,
                                    T = f.resBodyHandler,
                                    E = f.reqParamHandler,
                                    A = f.apiDetail,
                                    G = (j = f.reportWhenError) === void 0 || j,
                                    M = f.urlHandler,
                                    Z = f.urlRewrite,
                                    j = {
                                        traceRequestHeader: this.traceRequestHeader,
                                        name: i.id,
                                        config: i,
                                        urlRewrite: Z ?
                                            function(L) {
                                                return Z(L, i);
                                            } :
                                            void 0,
                                        send: function(L, H) {
                                            function $() {
                                                return (L.failType = Ro);
                                            }

                                            function re() {
                                                return (L.failType = oa);
                                            }

                                            function ae() {
                                                return (L.failType = ia);
                                            }
                                            var Q,
                                                se,
                                                fe = Date.now();
                                            (l.traceRequestHeader &&
                                                ((Q = (se =
                                                            l.traceRequestHeader.generate(L.aegisUrl) || {})
                                                        .name),
                                                    (se = se.value),
                                                    Q) &&
                                                se &&
                                                L.setRequestHeader(Q, se),
                                                (L.sseConfig = p({}, bp)),
                                                L.addEventListener("readystatechange", function() {
                                                    var J = L,
                                                        we = fe,
                                                        ye = y,
                                                        ne = b;
                                                    switch (J.readyState) {
                                                        case XMLHttpRequest.HEADERS_RECEIVED:
                                                            var te =
                                                                ((te = J.sseConfig).sseConnectTime,
                                                                    te.preTokenStartTime);
                                                            (X = !!(
                                                                (X = J.getResponseHeader("content-type")) !=
                                                                null && X.includes(Ec)
                                                            ) || (ne == null ? void 0 : ne(J.aegisUrl))) &&
                                                            ((ce = Date.now() - we),
                                                                (te = Date.now()),
                                                                xt(J.sseConfig, {
                                                                    isSSE: X,
                                                                    sseConnectTime: ce,
                                                                    preTokenStartTime: te,
                                                                }));
                                                            break;
                                                        case XMLHttpRequest.LOADING:
                                                            if (!J.sseConfig.isSSE) return;
                                                            var ce = (X = J.sseConfig).dataChunkCount,
                                                                ie = X.firstChunkTime,
                                                                be = X.totalDataSize,
                                                                X =
                                                                ((te = X.preTokenStartTime),
                                                                    J.sseConfig.firstChunkFlag),
                                                                ge = J.sseConfig.tokenIntervalArr,
                                                                Re = ((ce += 1), Date.now() - te);
                                                            (!X &&
                                                                ((X = Ns((J.responseText || "").slice(be))),
                                                                    typeof ye == "function" ? ye(X) : ce === 0) &&
                                                                ((ie = Date.now() - we),
                                                                    xt(J.sseConfig, {
                                                                        firstChunkFlag: !0
                                                                    })),
                                                                (te = Date.now()),
                                                                ge.push(Re),
                                                                (be =
                                                                    ((X = J.responseText) == null ?
                                                                        void 0 :
                                                                        X.length) || 0),
                                                                xt(J.sseConfig, {
                                                                    dataChunkCount: ce,
                                                                    firstChunkTime: ie,
                                                                    totalDataSize: be,
                                                                    tokenIntervalArr: ge,
                                                                    preTokenStartTime: te,
                                                                }));
                                                    }
                                                }),
                                                L.addEventListener("loadend", function() {
                                                    setTimeout(function() {
                                                        return v(l, void 0, void 0, function() {
                                                            var J,
                                                                we,
                                                                ye,
                                                                ne,
                                                                te,
                                                                ce,
                                                                ie,
                                                                be,
                                                                X,
                                                                ge,
                                                                Re,
                                                                oe,
                                                                de,
                                                                xe,
                                                                Se,
                                                                Oe,
                                                                $e,
                                                                Ce,
                                                                Ne;
                                                            return w(this, function(st) {
                                                                switch (st.label) {
                                                                    case 0:
                                                                        switch (
                                                                            ((J = L.aegisUrl || ""),
                                                                                (ye = Date.now() - fe),
                                                                                (Ne =
                                                                                    (Ne = L.getResponseHeader(Cc)) != null ?
                                                                                    Ne :
                                                                                    ""),
                                                                                (Ne = Ni(J, Ne, m)),
                                                                                (ye = this.getPerformanceEntryByUrl({
                                                                                    url: J,
                                                                                    duration: ye,
                                                                                })),
                                                                                (we = ye.performanceTiming),
                                                                                (ye = g(ye, ["performanceTiming"])),
                                                                                (ne = L.status),
                                                                                Ne)
                                                                        ) {
                                                                            case "api":
                                                                                return [3, 1];
                                                                            case "static":
                                                                                return [3, 5];
                                                                        }
                                                                        return [3, 6];
                                                                    case 1:
                                                                        return (
                                                                            st.trys.push([1, 3, , 4]),
                                                                            [
                                                                                4,
                                                                                As(L.response, f, {
                                                                                    url: J,
                                                                                    ctx: L,
                                                                                    payload: H,
                                                                                }),
                                                                            ]
                                                                        );
                                                                    case 2:
                                                                        return (
                                                                            (ce = st.sent()),
                                                                            (te = ce.code),
                                                                            (ce = ce.isErr),
                                                                            (ie = ""),
                                                                            (L.failType ||
                                                                                !L.status ||
                                                                                400 <= L.status) &&
                                                                            (ie = L.failType || "failed"),
                                                                            (oe = !!ie || ce),
                                                                            (X = !x && L.failType === Ro),
                                                                            !Ls({
                                                                                isWhiteList: a.isWhiteList,
                                                                                requestUrl: J,
                                                                                config: a.config,
                                                                                isErrorApi: oe,
                                                                                reportWhenError: G,
                                                                            }) || X ?
                                                                            [2] :
                                                                            ((X = js({
                                                                                    isWhiteList: a.isWhiteList,
                                                                                    requestUrl: J,
                                                                                    apiConfig: f,
                                                                                    apiDetail: A,
                                                                                    isErrorApi: oe,
                                                                                    reportWhenError: G,
                                                                                })),
                                                                                (be = X ? Ar(H, E, {
                                                                                    url: J
                                                                                }) : ""),
                                                                                (X = X ?
                                                                                    Ar(L.response, T, {
                                                                                        url: J
                                                                                    }) :
                                                                                    ""),
                                                                                (ge = Dt(
                                                                                    typeof M == "function" ?
                                                                                    M(J, H) :
                                                                                    J,
                                                                                )),
                                                                                (Re = ie ?
                                                                                    "AJAX_ERROR: request ".concat(ie) :
                                                                                    Rs({
                                                                                        url: J,
                                                                                        bodyTxt: X,
                                                                                        status: ne,
                                                                                        code: te,
                                                                                    })),
                                                                                (oe = oe ?
                                                                                    "".concat(J, ",").concat(te) :
                                                                                    void 0),
                                                                                (de = Ur(
                                                                                    L.aegisXhrReqHeaderV2,
                                                                                    _,
                                                                                    "req",
                                                                                )),
                                                                                (Xe = L.getAllResponseHeaders()),
                                                                                (xe = Xe.split(
                                                                                    `\r
`,
                                                                                ).reduce(function($t, He) {
                                                                                    return (
                                                                                        (He = He.split(": "))[0] &&
                                                                                        He[1] &&
                                                                                        ($t[He[0]] = He[1]),
                                                                                        $t
                                                                                    );
                                                                                }, {})),
                                                                                (xe = Ur(xe, S, "res")),
                                                                                (Oe = Ri(L.aegisXhrReqHeaderV2)),
                                                                                (Se = Oe[0]),
                                                                                (Oe = Oe[1]),
                                                                                ($e = L.sseConfig.isSSE),
                                                                                (Ce = $e ?
                                                                                    p(
                                                                                        p({},
                                                                                            ((Xe = fe),
                                                                                                (Rt = (ze = (Ze = L)
                                                                                                    .sseConfig).dataChunkCount),
                                                                                                (Ut = ze.firstChunkTime),
                                                                                                (ct = ze.sseConnectTime),
                                                                                                (qt = ze.totalDataSize),
                                                                                                (ze = ze.tokenIntervalArr),
                                                                                                (on =
                                                                                                    (nt = Date.now()) -
                                                                                                    (Xe + ct)),
                                                                                                (nt -= Xe),
                                                                                                (ze = (Xe = $s(ze)).fluency),
                                                                                                (Xe = Xe.isStuck), {
                                                                                                    totalDuration: nt,
                                                                                                    dataDuration: on,
                                                                                                    connectTime: ct,
                                                                                                    firstChunkTime: Ut,
                                                                                                    dataChunkCount: Rt,
                                                                                                    totalDataSize: ((nt = Ze.responseText) ==
                                                                                                        null ?
                                                                                                        void 0 :
                                                                                                        nt.length) || qt,
                                                                                                    fluency: ze,
                                                                                                    isStuck: Xe,
                                                                                                }),
                                                                                        ), {
                                                                                            totalDuration: we.duration
                                                                                        },
                                                                                    ) :
                                                                                    {}),
                                                                                this.publish(
                                                                                    p(
                                                                                        p(
                                                                                            p(
                                                                                                p({
                                                                                                        msg: Re,
                                                                                                        errorMsg: oe,
                                                                                                        url: ge,
                                                                                                        status: ne,
                                                                                                        method: L.aegisMethod || "get",
                                                                                                        param: be,
                                                                                                        data: X,
                                                                                                        reqHeaders: de,
                                                                                                        resHeaders: xe,
                                                                                                        ret: te,
                                                                                                        isErr: ce,
                                                                                                        trace: Se,
                                                                                                        span: Oe,
                                                                                                        requestType: Ne,
                                                                                                        requestBy: "xhr",
                                                                                                        isSSE: $e,
                                                                                                    },
                                                                                                    ye,
                                                                                                ),
                                                                                                we,
                                                                                            ),
                                                                                            na({
                                                                                                isAjaxError: !!ie,
                                                                                                isRetcodeError: ce,
                                                                                            }),
                                                                                        ),
                                                                                        Ce,
                                                                                    ),
                                                                                    a,
                                                                                ),
                                                                                [3, 4])
                                                                        );
                                                                    case 3:
                                                                        return (st.sent(), [3, 4]);
                                                                    case 4:
                                                                        return [3, 6];
                                                                    case 5:
                                                                        return (
                                                                            this.publish(
                                                                                p(
                                                                                    p({
                                                                                            status: ne,
                                                                                            url: Dt(J),
                                                                                            type: O.ASSETS_SPEED,
                                                                                        },
                                                                                        ye,
                                                                                    ),
                                                                                    we,
                                                                                ),
                                                                                a,
                                                                            ),
                                                                            [3, 6]
                                                                        );
                                                                    case 6:
                                                                        return (
                                                                            L.removeEventListener(Ro, $),
                                                                            L.removeEventListener(oa, re),
                                                                            L.removeEventListener(ia, ae),
                                                                            [2]
                                                                        );
                                                                }
                                                                var Ze, ze, Rt, Ut, ct, qt, nt, on, Xe;
                                                            });
                                                        });
                                                    }, 0);
                                                }),
                                                L.addEventListener(Ro, $),
                                                L.addEventListener(oa, re),
                                                L.addEventListener(ia, ae));
                                        },
                                    };
                                ((this.hackXHROptions = j),
                                    (c = this.hackXHROptions),
                                    (j = Object.getOwnPropertyDescriptor(
                                        XMLHttpRequest.prototype,
                                        "open",
                                    )) != null &&
                                    j.writable &&
                                    !gn.find(function(L) {
                                        return L.name === c.name;
                                    }) &&
                                    (gn.push(c), !Tc) &&
                                    window.XMLHttpRequest &&
                                    ((xc = window.XMLHttpRequest.prototype.send),
                                        (Oc = window.XMLHttpRequest.prototype.open),
                                        (kc = window.XMLHttpRequest.prototype.setRequestHeader),
                                        (Tc = !0),
                                        (window.XMLHttpRequest.prototype.open = function() {
                                            this.aegisMethod = arguments[0];
                                            var L,
                                                H = arguments[1];
                                            if (
                                                (Ic.test(H) &&
                                                    (H = "".concat(location.origin).concat(H)),
                                                    c != null &&
                                                    c.urlRewrite &&
                                                    (Zn(
                                                            (H =
                                                                ((L = c == null ? void 0 : c.urlRewrite) == null ?
                                                                    void 0 :
                                                                    L.call(c, H)) || H),
                                                            Pt(c.config, "hostUrl"),
                                                        ) ||
                                                        (arguments[1] = H)),
                                                    (this.aegisUrl = H),
                                                    (this.aegisXhrStartTime = Date.now()),
                                                    this.sendByAegis)
                                            )
                                                le.isIE() || (this.timeout = 5e3);
                                            else
                                                for (var $ = 0; $ < gn.length; $++) {
                                                    var re = gn[$];
                                                    try {
                                                        typeof re.open == "function" && re.open(this);
                                                    } catch {}
                                                }
                                            return Oc.apply(this, arguments);
                                        }),
                                        (window.XMLHttpRequest.prototype.setRequestHeader =
                                            function() {
                                                var L,
                                                    H = arguments[0],
                                                    $ = arguments[1];
                                                if (
                                                    ((this.aegisXhrReqHeaderV2 =
                                                            (L = this.aegisXhrReqHeaderV2) != null ? L : {}),
                                                        !(
                                                            c != null &&
                                                            c.traceRequestHeader &&
                                                            -1 < [
                                                                "traceparent",
                                                                "b3",
                                                                "sw8",
                                                                "sentry-trace",
                                                            ].indexOf(H) &&
                                                            (this.aegisXhrReqHeaderV2[H] || (arguments[1] = $),
                                                                this.aegisXhrReqHeaderV2[H])
                                                        ))
                                                )
                                                    return (
                                                        (this.aegisXhrReqHeaderV2[H] = arguments[1]),
                                                        kc.apply(this, arguments)
                                                    );
                                            }),
                                        (window.XMLHttpRequest.prototype.send = function() {
                                            if (!this.sendByAegis)
                                                for (var L = 0; L < gn.length; L++) {
                                                    var H = gn[L];
                                                    try {
                                                        typeof H.send == "function" &&
                                                            H.send(this, arguments[0]);
                                                    } catch {}
                                                }
                                            return xc.apply(this, arguments);
                                        })));
                            },
                            getPerformanceEntryByUrl: function(i) {
                                var a = i.url;
                                if (
                                    ((i = i.duration),
                                        typeof a == "string" &&
                                        typeof performance.getEntriesByName == "function")
                                ) {
                                    var c =
                                        (c = performance.getEntriesByName(a)) == null ?
                                        void 0 :
                                        c.pop();
                                    if (c)
                                        return {
                                            isHttps: So(a),
                                            nextHopProtocol: c.nextHopProtocol || "",
                                            urlQuery: Dt(a, !0),
                                            transferSize: 0 < c.transferSize ? c.transferSize : -1,
                                            performanceTiming: Zs(c),
                                        };
                                }
                                return {
                                    isHttps: So(a),
                                    nextHopProtocol: "",
                                    urlQuery: Dt(a, !0),
                                    performanceTiming: {
                                        preHandleTime: Qe.number,
                                        duration: Number(i.toFixed(2)),
                                        domainLookup: Qe.number,
                                        connectTime: Qe.number,
                                        tlsTime: Qe.number,
                                        tcpAndRequestGap: Qe.number,
                                        requestTime: Qe.number,
                                        responseTime: Qe.number,
                                    },
                                };
                            },
                            destroy: function() {
                                var i, a, c;
                                ((this.publish = function() {}),
                                    this.hackXHROptions &&
                                    ((i = this.hackXHROptions),
                                        (c = gn.findIndex(function(l) {
                                            return l.name === i.name;
                                        })) !== -1) &&
                                    gn.splice(c, 1),
                                    this.hackFetchOptions &&
                                    ((a = this.hackFetchOptions),
                                        (c = vn.findIndex(function(l) {
                                            return l.name === a.name;
                                        })) !== -1) &&
                                    vn.splice(c, 1),
                                    (this.override = !1));
                            },
                        }));
                (((rn = qr = qr || {}).INITIAL_LOAD = "initial_load"),
                    (rn.ROUTE_CHANGE = "route_change"));
                var nn,
                    Wr = "aegis_session_id",
                    Ac = "link_session_id",
                    Rc = "link_span_id",
                    $o =
                    (((rn = nn = nn || {}).SELF_GENETATE = "self_generate"),
                        (rn.SELF_INJECT = "self_inject"),
                        (rn.SERVER_INJECT = "server_inject"),
                        (rn.URL_QUERY = "url_query"),
                        (rn.LOCAL_STORAGE = "local_storage"),
                        (rn.COOKIES = "cookies"),
                        function() {});

                function Gr(i, a, c) {
                    var l,
                        f,
                        m,
                        y,
                        b,
                        x = c.before,
                        _ = c.after;
                    return (
                        (y = (l = i)[(f = a)]),
                        (m = y),
                        (b = function() {
                            for (var T, E = [], A = 0; A < arguments.length; A++)
                                E[A] = arguments[A];
                            return (
                                x && x.apply(this, E),
                                typeof m == "function" && (T = m.apply(this, E)),
                                _ && _.apply(this, [T]),
                                T
                            );
                        }),
                        (l[f] = S), {
                            stop: function() {
                                l[f] === S ? (l[f] = y) : (b = y);
                            },
                        }
                    );

                    function S() {
                        for (var T = [], E = 0; E < arguments.length; E++)
                            T[E] = arguments[E];
                        if (typeof b == "function") return b.apply(this, T);
                    }
                }

                function Sp(i) {
                    return (function(a) {
                        for (var c = [], l = 1; l < arguments.length; l++)
                            c[l - 1] = arguments[l];
                        return (
                            c.forEach(function(f) {
                                for (var m in f)
                                    Object.prototype.hasOwnProperty.call(f, m) && (a[m] = f[m]);
                            }),
                            a
                        );
                    })({}, i);
                }

                function _p(i) {
                    return [
                        "ancestorOrigins",
                        "href",
                        "origin",
                        "protocol",
                        "host",
                        "hostname",
                        "port",
                        "pathname",
                        "search",
                        "hash",
                        "assign",
                        "reload",
                        "replace",
                        "toString",
                    ].reduce(function(a, c) {
                        return ((a[c] = i[c]), a);
                    }, {});
                }

                function An() {
                    return new Date().getTime();
                }

                function $c(i) {
                    var a;
                    return i ?
                        (a = i == null ? void 0 : i.indexOf("?")) < 0 ?
                        i :
                        i == null ?
                        void 0 :
                        i.slice(0, a) :
                        "";
                }

                function xp(i, a) {
                    function c(_, S) {
                        for (
                            var T = _, E = 0; E <= 10 &&
                            T &&
                            !["BODY", "HTML", "HEAD"].includes(
                                T == null ? void 0 : T.nodeName,
                            );
                        ) {
                            for (var A = 0, G = S; A < G.length; A++) {
                                var M = (0, G[A])(T);
                                if (typeof M == "string" && M.trim())
                                    return l(M.trim().replace(/\s+/g, " "));
                            }
                            if ((T == null ? void 0 : T.nodeName) === "FORM") break;
                            ((T = T.parentElement), (E += 1));
                        }
                        return "";
                    }

                    function l(_) {
                        return 100 < _.length ?
                            "".concat(
                                (T === void 0 && (T = ""),
                                    (E =
                                        55296 <= (E = (S = _).charCodeAt(99)) && E <= 56319 ?
                                        101 :
                                        100),
                                    S.length <= E ?
                                    S :
                                    "".concat(S == null ? void 0 : S.slice(0, E)).concat(T)),
                                " [...]",
                            ) :
                            _;
                        var S, T, E;
                    }
                    var f,
                        m = [
                            function(_) {
                                var S;
                                if (x()) {
                                    if ("labels" in _ && _.labels && 0 < _.labels.length)
                                        return b(_.labels[0]);
                                } else if (_.id)
                                    return (
                                        (S =
                                            _.ownerDocument &&
                                            (function(T) {
                                                for (var E = 0; E < T.length; E += 1) {
                                                    var A = T[E];
                                                    if (A.htmlFor === _.id) return A;
                                                }
                                            })(_.ownerDocument.querySelectorAll("label"))) && b(S)
                                    );
                                return "";
                            },
                            function(_) {
                                if ((_ == null ? void 0 : _.nodeName) === "INPUT") {
                                    var S = _.getAttribute("type");
                                    if (["button", "submit", "reset"].includes(S || ""))
                                        return _.value;
                                }
                                return "";
                            },
                            function(_) {
                                return ["BUTTON", "LABEL"].includes(
                                        _ == null ? void 0 : _.nodeName,
                                    ) || _.getAttribute("role") === "button" ?
                                    b(_) :
                                    "";
                            },
                            function(_) {
                                return _.getAttribute("alt");
                            },
                            function(_) {
                                return _.getAttribute("name");
                            },
                            function(_) {
                                return _.getAttribute("title");
                            },
                            function(_) {
                                return _.getAttribute("placeholder");
                            },
                            function(_) {
                                var S;
                                return "options" in _ &&
                                    0 <
                                    ((S = _ == null ? void 0 : _.options) == null ?
                                        void 0 :
                                        S.length) ?
                                    b(_.options[0]) :
                                    "";
                            },
                        ],
                        y = [
                            function(_) {
                                return b(_);
                            },
                        ],
                        b = function(_) {
                            if (!_.isContentEditable)
                                return "innerText" in _ ? _.innerText : _.textContent;
                        },
                        x = function() {
                            return (f =
                                f === void 0 ? "labels" in HTMLInputElement.prototype : f);
                        };
                    return (
                        (function(_, S) {
                            var T;
                            if ("closest" in HTMLElement.prototype)
                                T = _.closest("[".concat(S, "]"));
                            else
                                for (var E = _; E;) {
                                    if (E.hasAttribute(S)) {
                                        T = E;
                                        break;
                                    }
                                    E = (function(A) {
                                        if (A.parentElement) return A.parentElement;
                                        for (; A.parentNode;) {
                                            if (A.parentNode.nodeType === Node.ELEMENT_NODE)
                                                return A.parentNode;
                                            A = A.parentNode;
                                        }
                                        return null;
                                    })(E);
                                }
                            if (T)
                                return l((_ = T.getAttribute(S)).trim().replace(/\s+/g, " "));
                        })(i, a || "data-aegis-action-name") ||
                        c(i, m) ||
                        c(i, y) ||
                        ""
                    );
                }

                function Nc() {
                    return {
                        sessionId: We.generateTraceId(),
                        sessionFrom: nn.SELF_GENETATE,
                    };
                }
                ((sa.prototype.subscribe = function(i) {
                        var a = this;
                        return (
                            !this.observers.length &&
                            this.onFirstSubscribe &&
                            (this.onLastUnsubscribe = this.onFirstSubscribe(this) || void 0),
                            this.observers.push(i), {
                                unsubscribe: function() {
                                    ((a.observers = a.observers.filter(function(c) {
                                            return i !== c;
                                        })),
                                        !a.observers.length &&
                                        a.onLastUnsubscribe &&
                                        a.onLastUnsubscribe());
                                },
                            }
                        );
                    }),
                    (sa.prototype.notify = function(i) {
                        this.observers.forEach(function(a) {
                            return a(i);
                        });
                    }));
                var Yn,
                    No = sa,
                    rn = new Pe({
                        name: R.SESSION,
                        onNewAegis: function(i) {
                            function a($, re) {
                                x.publishSessionDataWithAegis({
                                        session_type: $,
                                        is_active: re,
                                        session_from: G,
                                        link_session_id: c == null ? void 0 : c.linkSessionId,
                                        link_span_id: c == null ? void 0 : c.linkSpanId,
                                    },
                                    i,
                                );
                            }
                            var c,
                                l,
                                f,
                                m,
                                y,
                                b,
                                x = this,
                                _ = (((_ = i.config.plugin) == null ? void 0 : _.session) || {})
                                .actionTypes,
                                S = (A =
                                    ((A = i.config.plugin) == null ? void 0 : A.session) || {})
                                .customActionNameAttribute,
                                T = A.onSessionRebuild,
                                E = A.sessionGenerator,
                                A = A.sessionExpiration,
                                G = nn.SELF_GENETATE,
                                M = (function($, re) {
                                    function ae(ie) {
                                        (ie === void 0 && (ie = !1),
                                            (ne = An()),
                                            (te = An() + $),
                                            we(ie),
                                            (fe = setInterval(se, 1e3)));
                                    }

                                    function Q() {
                                        ce() ? (te = An() + $) : ae(!0);
                                    }

                                    function se() {
                                        ce() || (ye(), clearInterval(fe));
                                    }
                                    $ === void 0 && ($ = 9e5);
                                    var fe,
                                        J,
                                        we = re.onCreateOrRebuild,
                                        ye = re.onExpire,
                                        ne = An(),
                                        te = An() + $,
                                        ce = function() {
                                            return An() - Number(ne) < 144e5 && An() < Number(te);
                                        };
                                    return (
                                        ae(),
                                        (J = ["click", "touchstart", "keydown", "scroll"]).forEach(
                                            function(ie) {
                                                return window.addEventListener.call(window, ie, Q, !0);
                                            },
                                        ),
                                        function() {
                                            (clearInterval(fe),
                                                J.forEach(function(ie) {
                                                    return window.removeEventListener.call(window, ie, Q);
                                                }));
                                        }
                                    );
                                })(A === void 0 ? 9e5 : A, {
                                    onCreateOrRebuild: function($) {
                                        var re,
                                            ae,
                                            Q = (function(J, we, ye, ne) {
                                                var te, ce;
                                                if (J) return ((te = Nc()), ye(JSON.stringify(te)), te);
                                                if (ne)
                                                    return p(
                                                        p({},
                                                            typeof(te = ne()) == "string" ?
                                                            {
                                                                sessionId: te
                                                            } :
                                                            {
                                                                sessionId: te == null ? void 0 : te.aegis_session_id,
                                                                linkSessionId: te == null ? void 0 : te.link_session_id,
                                                                linkSpanId: te == null ? void 0 : te.link_span_id,
                                                            },
                                                        ), {
                                                            sessionFrom: nn.SELF_INJECT
                                                        },
                                                    );
                                                if (
                                                    ((ne = (
                                                            (ne =
                                                                (ne = window.location) == null ?
                                                                void 0 :
                                                                ne.search) == null ?
                                                            void 0 :
                                                            ne.substring(1)
                                                        ).split("&")),
                                                        (ce = ""),
                                                        ne.some(function(de) {
                                                            return (
                                                                (de = de.split("="))[0] === "aegis_session_id" &&
                                                                ((ce = decodeURIComponent(de[1])), !0)
                                                            );
                                                        }),
                                                        ce)
                                                )
                                                    return (
                                                        (ne = {
                                                            sessionId: ce,
                                                            sessionFrom: nn.URL_QUERY
                                                        }),
                                                        ye(JSON.stringify(ne)),
                                                        ne
                                                    );
                                                var ie = (ne = {
                                                        sessionId: mn.get(Wr),
                                                        linkSessionId: mn.get(Ac),
                                                        linkSpanId: mn.get(Rc),
                                                    }).sessionId,
                                                    be = ne.linkSessionId;
                                                if (
                                                    ((ne = ne.linkSpanId),
                                                        ye(
                                                            "[cookie] ".concat(
                                                                JSON.stringify({
                                                                    sessionId: ie,
                                                                    linkSessionId: be,
                                                                    linkSpanId: ne,
                                                                }),
                                                            ),
                                                        ),
                                                        ie)
                                                )
                                                    return (
                                                        (ie = {
                                                            sessionId: ie,
                                                            sessionFrom: nn.COOKIES,
                                                            linkSessionId: be,
                                                            linkSpanId: ne,
                                                        }),
                                                        ye(JSON.stringify(ie)),
                                                        mn.remove(Wr),
                                                        mn.remove(Ac),
                                                        mn.remove(Rc),
                                                        ie
                                                    );
                                                try {
                                                    var X = localStorage.getItem(Wr);
                                                    if (X !== null) {
                                                        var ge,
                                                            Re = JSON.parse(X),
                                                            oe = Re.sessionId;
                                                        if (we !== Re.id)
                                                            return (
                                                                (ge = {
                                                                    sessionId: oe,
                                                                    sessionFrom: nn.LOCAL_STORAGE,
                                                                }),
                                                                ye(JSON.stringify(ge)),
                                                                ge
                                                            );
                                                    }
                                                } catch {}
                                                return (
                                                    (be = (function() {
                                                        for (
                                                            var de = document.getElementsByTagName("meta"),
                                                                xe = 0; xe < de.length; xe++
                                                        ) {
                                                            var Se = de[xe];
                                                            if (Se.getAttribute("name") === "traceparent")
                                                                return Se;
                                                        }
                                                        return null;
                                                    })()),
                                                    (ne = (be == null ? void 0 : be.content) || "") ?
                                                    ((ie = {
                                                            sessionId: ne.split("-")[1],
                                                            sessionFrom: nn.SERVER_INJECT,
                                                        }),
                                                        ye(JSON.stringify(ie)),
                                                        ie) :
                                                    ((X = Nc()), ye(JSON.stringify(X)), X)
                                                );
                                            })(
                                                $,
                                                i.config.id,
                                                function(J) {
                                                    i.logger.info("session from: ".concat(J));
                                                },
                                                E,
                                            ),
                                            se = Q.sessionId,
                                            fe = Q.sessionFrom;
                                        ((Q = g(Q, ["sessionId", "sessionFrom"])),
                                            $ && T != null && T(se),
                                            $ &&
                                            (ae =
                                                (re = i == null ? void 0 : i.event) == null ?
                                                void 0 :
                                                re.emit) != null &&
                                            ae.call(re, "sessionRebuild", se),
                                            (G = fe),
                                            (c = Q));
                                        try {
                                            localStorage.setItem(
                                                Wr,
                                                JSON.stringify({
                                                    id: i.config.id,
                                                    sessionId: se
                                                }),
                                            );
                                        } catch {}
                                        (i.updateSnapshootInfo({
                                                session: {
                                                    id: se
                                                }
                                            }),
                                            a("session", !0),
                                            $ &&
                                            (i.updateSnapshootInfo({
                                                    view: {
                                                        id: We.generateSpanId(),
                                                        loading_type: qr.INITIAL_LOAD,
                                                        view_name: document.title,
                                                        view_url: window.location.href,
                                                        referrer: "",
                                                    },
                                                }),
                                                a("view", !0)));
                                    },
                                    onExpire: function() {
                                        try {
                                            localStorage.removeItem(Wr);
                                        } catch {}
                                        (H(),
                                            i.updateSnapshootInfo({
                                                session: void 0,
                                                view: void 0,
                                                action: void 0,
                                            }));
                                    },
                                }),
                                Z = (function($) {
                                    var re = $.onStart,
                                        ae = $.onChange,
                                        Q = ($ = window.external) != null && $.assetsGC ? _p : Sp;

                                    function se() {
                                        var ne, te, ce, ie;
                                        J.href !== window.location.href &&
                                            ((ce = ne = Q(window.location)),
                                                ((te = J).pathname === ce.pathname &&
                                                    ((ie = ce.hash),
                                                        document.getElementById(
                                                            ie == null ? void 0 : ie.substring(1),
                                                        ) || $c(ce.hash) === $c(te.hash))) ||
                                                (ae(J, ne), (J = Q(ne))));
                                    }
                                    re();
                                    var fe,
                                        J = Q(window.location),
                                        we =
                                        ((fe = se),
                                            window.addEventListener("hashchange", fe),
                                            function() {
                                                window.removeEventListener("hashchange", fe);
                                            }),
                                        ye = (function(ne) {
                                            var te,
                                                ce,
                                                ie = $o,
                                                be = $o;
                                            try {
                                                ((te = Object.getOwnPropertyDescriptor(
                                                        History.prototype,
                                                        "pushState",
                                                    )) != null &&
                                                    te.writable &&
                                                    (ie = Gr(history, "pushState", {
                                                        after: ne
                                                    }).stop),
                                                    (ce = Object.getOwnPropertyDescriptor(
                                                        History.prototype,
                                                        "replaceState",
                                                    )) != null &&
                                                    ce.writable &&
                                                    (be = Gr(history, "replaceState", {
                                                        after: ne,
                                                    }).stop));
                                            } catch {}
                                            return {
                                                stop: function() {
                                                    (ie(),
                                                        be(),
                                                        window.removeEventListener("popstate", ne));
                                                },
                                            };
                                        })(se).stop;
                                    return function() {
                                        (we(), ye());
                                    };
                                })({
                                    onStart: function() {
                                        (i.updateSnapshootInfo({
                                                view: {
                                                    id: We.generateSpanId(),
                                                    loading_type: qr.INITIAL_LOAD,
                                                    view_name: document.title,
                                                    view_url: window.location.href,
                                                    referrer: "",
                                                },
                                            }),
                                            a("view", !0));
                                    },
                                    onChange: function($, re) {
                                        var ae;
                                        ((ae = i.snapshootInfo) != null &&
                                            ae.action &&
                                            (a("action", !1),
                                                i.updateSnapshootInfo({
                                                    action: void 0
                                                })),
                                            a("view", !1),
                                            (ae = i == null ? void 0 : i.updateSnapshootInfo) !=
                                            null &&
                                            ae.call(i, {
                                                view: {
                                                    id: We.generateSpanId(),
                                                    loading_type: qr.ROUTE_CHANGE,
                                                    view_name: document.title,
                                                    view_url: re.href,
                                                    referer: $.href,
                                                },
                                            }),
                                            a("view", !0));
                                    },
                                }),
                                j = function() {};

                            function L($) {
                                var re, ae, Q, se, fe, J;

                                function we() {
                                    Q ||
                                        ((Q = !0),
                                            re(),
                                            clearTimeout(fe),
                                            clearTimeout(J),
                                            se == null) ||
                                        se();
                                }
                                m() &&
                                    (($ = {
                                            action_type: $.type,
                                            action_name: xp($.target, f),
                                            action_target_name: ($ = ($ = $.target) == null ? void 0 : $.nodeName) == null ?
                                                void 0 :
                                                $.toLowerCase(),
                                        }),
                                        y($),
                                        (re = b),
                                        (Q = !1),
                                        (se = (function(ye) {
                                            function ne() {
                                                ye({
                                                    isBusy: 0 < ie
                                                });
                                            }
                                            var te,
                                                ce,
                                                ie = 0,
                                                be = new No(function(oe) {
                                                    var de;
                                                    if (MutationObserver)
                                                        return (
                                                            (de = new MutationObserver(function() {
                                                                return oe.notify();
                                                            })).observe(document, {
                                                                attributes: !0,
                                                                characterData: !0,
                                                                childList: !0,
                                                                subtree: !0,
                                                            }),
                                                            function() {
                                                                return de.disconnect();
                                                            }
                                                        );
                                                }),
                                                X = new No(function(oe) {
                                                    var de, xe, Se;
                                                    return typeof(window == null ?
                                                            void 0 :
                                                            window.PerformanceObserver) == "function" ?
                                                        ((de = new window.PerformanceObserver(function() {
                                                                oe.notify();
                                                            })).observe({
                                                                entryTypes: ["resource"]
                                                            }),
                                                            function() {
                                                                de.disconnect();
                                                            }) :
                                                        Nr() ?
                                                        ((xe =
                                                                performance.getEntriesByType(
                                                                    "resource",
                                                                ).length),
                                                            (Se = setInterval(function() {
                                                                var Oe =
                                                                    performance.getEntriesByType("resource");
                                                                (xe <= Oe.length && oe.notify(),
                                                                    (xe = Oe.length));
                                                            }, 100)),
                                                            function() {
                                                                (clearInterval(Se), (xe = 0));
                                                            }) :
                                                        $o;
                                                }),
                                                ge = [
                                                    be.subscribe(ne),
                                                    X.subscribe(ne),
                                                    (function(oe) {
                                                        var de = 1,
                                                            xe = new No(function(Oe) {
                                                                var $e = Gr(XMLHttpRequest.prototype, "send", {
                                                                    before: function() {
                                                                        ((de += 1),
                                                                            (this.requestIndex = de),
                                                                            Oe.notify({
                                                                                state: "start",
                                                                                requestIndex: de,
                                                                            }));
                                                                    },
                                                                    after: function() {
                                                                        var Ce = this,
                                                                            Ne = function() {
                                                                                (Ce.removeEventListener("loadend", Ne),
                                                                                    Oe.notify({
                                                                                        state: "end",
                                                                                        requestIndex: Ce.requestIndex,
                                                                                    }));
                                                                            };
                                                                        this.addEventListener("loadend", Ne);
                                                                    },
                                                                }).stop;
                                                                return function() {
                                                                    return $e();
                                                                };
                                                            }).subscribe(oe),
                                                            Se = new No(function(Oe) {
                                                                var $e = Gr(window, "fetch", {
                                                                    before: function() {
                                                                        ((de += 1),
                                                                            Oe.notify({
                                                                                state: "start",
                                                                                requestIndex: de,
                                                                            }));
                                                                    },
                                                                    after: function(Ce) {
                                                                        Ce.finally(function() {
                                                                            Oe.notify({
                                                                                state: "end",
                                                                                requestIndex: de,
                                                                            });
                                                                        });
                                                                    },
                                                                }).stop;
                                                                return function() {
                                                                    return $e();
                                                                };
                                                            }).subscribe(oe);
                                                        return {
                                                            unsubscribe: function() {
                                                                (xe.unsubscribe(), Se.unsubscribe());
                                                            },
                                                        };
                                                    })(function(oe) {
                                                        var de = oe.state;
                                                        ((oe = oe.requestIndex),
                                                            de === "start" ?
                                                            (ce === void 0 && (ce = oe), (ie += 1), ne()) :
                                                            de !== "end" ||
                                                            ce === void 0 ||
                                                            oe < ce ||
                                                            (--ie, ne()));
                                                    }),
                                                ],
                                                Re = $o;
                                            try {
                                                (te = Object.getOwnPropertyDescriptor(window, "open")) !=
                                                null &&
                                                    te.writable &&
                                                    (Re = Gr(window, "open", {
                                                        before: ne
                                                    }).stop);
                                            } catch {}
                                            return {
                                                stop: function() {
                                                    (Re(),
                                                        ge.forEach(function(oe) {
                                                            return oe.unsubscribe();
                                                        }));
                                                },
                                            };
                                        })(function(ye) {
                                            (clearTimeout(fe),
                                                clearTimeout(ae),
                                                ye.isBusy ||
                                                (ae = setTimeout(function() {
                                                    Q ||
                                                        ((Q = !0),
                                                            re(),
                                                            clearTimeout(fe),
                                                            clearTimeout(J),
                                                            se == null) ||
                                                        se();
                                                }, 100)));
                                        }).stop),
                                        (fe = setTimeout(we, 100)),
                                        (J = setTimeout(we, 1e4)));
                            }
                            (_ = _ === void 0 ? ["click"] : _) !== !1 &&
                                _.length !== 0 &&
                                ((l = (A = {
                                            actionTypes: _,
                                            customActionNameAttribute: S
                                        })
                                        .actionTypes),
                                    (f = A.customActionNameAttribute),
                                    (m = (_ = {
                                        onBeforeStart: function() {
                                            var $;
                                            return !(
                                                !i.isWhiteList &&
                                                (Math.random() >
                                                    (($ = i.sampleMap[R.SESSION]) != null ? $ : 0) ||
                                                    (($ = i.snapshootInfo) != null && $.action))
                                            );
                                        },
                                        onStart: function($) {
                                            (i.updateSnapshootInfo({
                                                    action: p({
                                                            id: We.generateSpanId(),
                                                            timestamp: Date.now()
                                                        },
                                                        $,
                                                    ),
                                                }),
                                                a("action", !0));
                                        },
                                        onEnd: function() {
                                            var $;
                                            ($ = i.snapshootInfo) != null &&
                                                $.action &&
                                                (a("action", !1),
                                                    i.updateSnapshootInfo({
                                                        action: void 0
                                                    }));
                                        },
                                    }).onBeforeStart),
                                    (y = _.onStart),
                                    (b = _.onEnd),
                                    l.forEach(function($) {
                                        window.addEventListener.call(window, $, L, !0);
                                    }),
                                    (j = function() {
                                        l.forEach(function($) {
                                            window.removeEventListener.call(window, $, L);
                                        });
                                    }));
                            var H = function() {
                                var $ = i.snapshootInfo,
                                    re = $.session,
                                    ae = $.view;
                                ($.action && a("action", !1),
                                    ae && a("view", !1),
                                    re && a("session", !1));
                            };
                            (window.addEventListener.call(
                                    window,
                                    "beforeunload",
                                    function() {
                                        ((i.sendNow = !0), H());
                                    },
                                    !0,
                                ),
                                (this.stopSessionPlugin = function() {
                                    var $;
                                    (($ = i == null ? void 0 : i.updateSnapshootInfo) != null &&
                                        $.call(i, {
                                            session: void 0,
                                            view: void 0,
                                            action: void 0,
                                        }),
                                        M(),
                                        Z(),
                                        j());
                                }));
                        },
                        publishSessionDataWithAegis: function(i, a) {
                            this.publish(
                                p(p({}, i), {
                                    msg: i.session_type,
                                    type: O.SESSION
                                }),
                                a,
                            );
                        },
                        destroy: function() {
                            var i;
                            (i = this.stopSessionPlugin) != null && i.call(this);
                        },
                    }),
                    aa = {
                        containers: ["body", "html", "#app", "#root"],
                        ignoreContainers: [],
                        detectStartPosition: {
                            x: 0,
                            y: 0
                        },
                        emptyElementsPercent: 70,
                        sameElementsPercent: 70,
                        debounceDuration: 1500,
                        everySideSampleNumber: 9,
                        disableSameElementsCheck: !1,
                        ignoreElesWhenDomChange: [],
                        reDetectInterval: 1500,
                        samePointDepth: 5,
                    },
                    Op = ["canvas", "img", "svg", "iframe"];

                function sa(i) {
                    ((this.onFirstSubscribe = i), (this.observers = []));
                }

                function zc(i) {
                    try {
                        var a = i.config.plugin.blankScreen;
                        return a === !0 ? aa : xt(aa, a);
                    } catch {
                        return aa;
                    }
                }

                function zo(i, a) {
                    return (function c(l) {
                        var f = l[0];
                        if (f && f.shadowRoot !== null) {
                            var m =
                                ((m = f == null ? void 0 : f.shadowRoot) == null ?
                                    void 0 :
                                    m.elementsFromPoint(i, a)) || [];
                            if (m.length > l.length) return c(m);
                        }
                        return f;
                    })(document.elementsFromPoint(i, a));
                }
                (((Rn = Yn = Yn || {})[(Rn.UNKNOWN = 0)] = "UNKNOWN"),
                    (Rn[(Rn.ERROR = 1)] = "ERROR"),
                    (Rn[(Rn.DOM_CHANGE = 2)] = "DOM_CHANGE"));
                var ca = function(i) {
                        var a;
                        return i ?
                            ((a = (a = i.nodeName) == null ? void 0 : a.toLowerCase()),
                                i.id ?
                                "".concat(a, "#").concat(i.id) :
                                i.className && typeof i.className == "string" ?
                                "".concat(a, ".").concat(
                                    i.className
                                    .split(" ")
                                    .filter(function(c) {
                                        return !!c;
                                    })
                                    .join("."),
                                ) :
                                a) :
                            "";
                    },
                    Rn = new Pe({
                        name: R.BLANK_SCREEN,
                        onNewAegis: function(i) {
                            var a,
                                c,
                                l,
                                f,
                                m,
                                y,
                                b,
                                x,
                                _,
                                S,
                                T,
                                E,
                                A,
                                G,
                                M,
                                Z,
                                j,
                                L,
                                H,
                                $,
                                re,
                                ae,
                                Q,
                                se,
                                fe,
                                J,
                                we,
                                ye,
                                ne,
                                te,
                                ce,
                                ie,
                                be,
                                X,
                                ge,
                                Re = this;
                            document != null &&
                                document.elementFromPoint &&
                                ((A = zc(i)),
                                    (l = A.everySideSampleNumber),
                                    (f = A.sameElementsPercent),
                                    (m = A.emptyElementsPercent),
                                    (y = A.containers),
                                    (b = A.ignoreContainers),
                                    (x = A.debounceDuration),
                                    (_ = A.detectStartPosition),
                                    (S = A.ignoreElesWhenDomChange),
                                    (T = A.reDetectInterval),
                                    (E = A.disableSameElementsCheck),
                                    (A = 4 * l - 3),
                                    (G = Math.floor((A * m) / 100)),
                                    (M = Math.floor((A * f) / 100)),
                                    (Z = Yn.UNKNOWN),
                                    (j = !1),
                                    (H = ""),
                                    ($ = !(L = {})),
                                    (re = null),
                                    (ae = function() {
                                        return v(Re, void 0, void 0, function() {
                                            var oe,
                                                de,
                                                xe,
                                                Se,
                                                Oe,
                                                $e,
                                                Ce,
                                                Ne,
                                                st,
                                                Ze,
                                                ze,
                                                Rt,
                                                Ut,
                                                ct,
                                                qt,
                                                nt,
                                                on,
                                                Xe,
                                                $t,
                                                He,
                                                Lc,
                                                kp = this;
                                            return w(this, function(ua) {
                                                switch (ua.label) {
                                                    case 0:
                                                        if (
                                                            ((oe = window.innerHeight),
                                                                (de = window.innerWidth),
                                                                (xe = _.x),
                                                                (Se = _.y),
                                                                de <= xe || oe <= Se)
                                                        )
                                                            return [2];
                                                        for (
                                                            Oe = xe + (de - xe) / 2,
                                                            $e = Se + (oe - Se) / 2,
                                                            Ce = [],
                                                            Ne = l + 1,
                                                            st = 0,
                                                            Ze = Date.now(),
                                                            ze = 1; ze < Ne; ze++
                                                        )
                                                            ((nt = Se + ((oe - Se) * ze) / Ne),
                                                                (Rt = zo((qt = xe + ((de - xe) * ze) / Ne), $e)),
                                                                (Ut = zo(Oe, nt)),
                                                                (ct = zo(qt, nt)),
                                                                (qt = zo(qt, oe - nt)),
                                                                (nt = (
                                                                    ze === Ne / 2 ? [Rt] : [Rt, Ut, ct, qt]
                                                                ).filter(function(Ee) {
                                                                    return Ee !== null;
                                                                })),
                                                                Ce.push.apply(Ce, nt),
                                                                (st += nt.reduce(function(Ee, pt) {
                                                                    return (
                                                                        Ee +
                                                                        Number(
                                                                            ((Ee = y),
                                                                                (kt = b),
                                                                                ($n = ca(pt)),
                                                                                (pt = Ee.some(function(Nn) {
                                                                                    return $n.includes(Nn);
                                                                                })),
                                                                                (Ee = !kt.some(function(Nn) {
                                                                                    return $n.includes(Nn);
                                                                                })),
                                                                                pt && Ee),
                                                                        )
                                                                    );
                                                                    var kt, $n;
                                                                }, 0)));
                                                        return (
                                                            (on = G <= st),
                                                            (Xe = !1),
                                                            E ||
                                                            ((He = Ce.filter(function(Ee) {
                                                                    return !Op.includes(ca(Ee));
                                                                })),
                                                                (la = He[0] || null),
                                                                (Lo = 0),
                                                                He.reduce(function(Ee, pt) {
                                                                    var kt = (Ee.get(pt) || 0) + 1;
                                                                    return (
                                                                        Ee.set(pt, kt),
                                                                        Lo < kt && ((la = pt), (Lo = kt)),
                                                                        Ee
                                                                    );
                                                                }, new Map()),
                                                                ($t = (He = {
                                                                    point: la,
                                                                    count: Lo
                                                                }).point),
                                                                (Xe = M <= (He = He.count)),
                                                                !j &&
                                                                Xe &&
                                                                (((Lc = {})[
                                                                        (function(Ee) {
                                                                            if (Ee === null) return "[Invalid Element]";
                                                                            for (
                                                                                var pt = []; Ee && Ee.nodeType === Node.ELEMENT_NODE;
                                                                            ) {
                                                                                var kt = Ee.tagName.toLowerCase();
                                                                                if (kt === "html") break;
                                                                                if (
                                                                                    Ee.id &&
                                                                                    /^[a-zA-Z_][a-zA-Z0-9_-]*$/.test(Ee.id)
                                                                                ) {
                                                                                    ((kt = "#".concat(Ee.id)),
                                                                                        pt.unshift(kt));
                                                                                    break;
                                                                                }
                                                                                for (
                                                                                    var $n = Ee, Nn = 1; $n.previousElementSibling;
                                                                                )
                                                                                    ($n =
                                                                                        $n.previousElementSibling).tagName.toLowerCase() ===
                                                                                    Ee.tagName.toLowerCase() && (Nn += 1);
                                                                                (1 < Nn &&
                                                                                    (kt += ":nth-of-type(".concat(Nn, ")")),
                                                                                    pt.unshift(kt),
                                                                                    (Ee = Ee.parentElement));
                                                                            }
                                                                            return (
                                                                                pt.length === 0 && pt.push("html"),
                                                                                pt.join(" > ")
                                                                            );
                                                                        })($t)
                                                                    ] = He),
                                                                    (re = Lc))),
                                                            on || Xe ?
                                                            [3, 1] :
                                                            ((j = !1), (L = {}), (re = null), [3, 4])
                                                        );
                                                    case 1:
                                                        return j ?
                                                            (H !== i.snapshootInfo.from &&
                                                                L &&
                                                                (this.publish({
                                                                        level: I.BLANK_SCREEN,
                                                                        type: O.PV,
                                                                    }),
                                                                    (H = i.snapshootInfo.from)),
                                                                ($t = xt(
                                                                    L,
                                                                    E || re === null ?
                                                                    {} :
                                                                    {
                                                                        maximumSamePointer: re
                                                                    },
                                                                    a ?
                                                                    {
                                                                        linkLogId: a == null ? void 0 : a.aegisv2_goto,
                                                                        linkLogType: a == null ? void 0 : a.type,
                                                                        linkLogLevel: a == null ? void 0 : a.level,
                                                                        linkErrorMsg: a == null ? void 0 : a.errorMsg,
                                                                    } :
                                                                    {},
                                                                )),
                                                                this.publish($t, i),
                                                                [
                                                                    4,
                                                                    i.setTempConfig({
                                                                        id: F
                                                                    }, function() {
                                                                        return i.reportTime(
                                                                            "白屏检测总耗时",
                                                                            Date.now() - Ze,
                                                                        );
                                                                    }),
                                                                ]) :
                                                            [3, 3];
                                                    case 2:
                                                        return (ua.sent(), (j = !1), (L = {}), [3, 4]);
                                                    case 3:
                                                        ((He = Date.now() - i.timeOrigin - x),
                                                            (L = p({
                                                                    msg: "blank_screen",
                                                                    level: I.BLANK_SCREEN,
                                                                    type: O.NORMAL,
                                                                    triggerTime: He < 0 ? 0 : He,
                                                                    whitePointCount: st,
                                                                },
                                                                a ?
                                                                {
                                                                    linkLogId: a == null ? void 0 : a.aegisv2_goto,
                                                                    linkLogType: a == null ? void 0 : a.type,
                                                                    linkLogLevel: a == null ? void 0 : a.level,
                                                                    linkErrorMsg: a == null ? void 0 : a.errorMsg,
                                                                } :
                                                                {},
                                                            )),
                                                            (j = !0),
                                                            (c = setTimeout(function() {
                                                                return v(kp, void 0, void 0, function() {
                                                                    return w(this, function(Ee) {
                                                                        switch (Ee.label) {
                                                                            case 0:
                                                                                return [4, Q()];
                                                                            case 1:
                                                                                return (Ee.sent(), [2]);
                                                                        }
                                                                    });
                                                                });
                                                            }, T)),
                                                            (ua.label = 4));
                                                    case 4:
                                                        return [2];
                                                }
                                                var la, Lo;
                                            });
                                        });
                                    }),
                                    (Q = function() {
                                        return v(Re, void 0, void 0, function() {
                                            var oe = this;
                                            return w(this, function(de) {
                                                switch (de.label) {
                                                    case 0:
                                                        return "requestIdleCallback" in window ?
                                                            (window.requestIdleCallback(function(xe) {
                                                                    return v(oe, void 0, void 0, function() {
                                                                        return w(this, function(Se) {
                                                                            switch (Se.label) {
                                                                                case 0:
                                                                                    return 0 < xe.timeRemaining() ?
                                                                                        [4, ae()] :
                                                                                        [3, 2];
                                                                                case 1:
                                                                                    (Se.sent(), (Se.label = 2));
                                                                                case 2:
                                                                                    return [2];
                                                                            }
                                                                        });
                                                                    });
                                                                }),
                                                                [3, 3]) :
                                                            [3, 1];
                                                    case 1:
                                                        return [4, ae()];
                                                    case 2:
                                                        (de.sent(), (de.label = 3));
                                                    case 3:
                                                        return [2];
                                                }
                                            });
                                        });
                                    }),
                                    (se = function() {
                                        var oe;
                                        j ||
                                            (Z === Yn.ERROR && !a) ||
                                            ((Z = a ? Yn.ERROR : Yn.DOM_CHANGE),
                                                clearTimeout(c),
                                                (oe = zc(i).debounceDuration),
                                                (c = setTimeout(function() {
                                                    return v(Re, void 0, void 0, function() {
                                                        return w(this, function(de) {
                                                            switch (de.label) {
                                                                case 0:
                                                                    return (clearTimeout(c), [4, Q()]);
                                                                case 1:
                                                                    return (de.sent(), [2]);
                                                            }
                                                        });
                                                    });
                                                }, oe)));
                                    }),
                                    i.event.on(
                                        ve.errorOccurred,
                                        (fe = function(oe) {
                                            0 <
                                                (oe = oe.filter(function(de) {
                                                    return de.level !== I.BLANK_SCREEN;
                                                })).length && ((a = oe[oe.length - 1]), se());
                                        }),
                                    ),
                                    (J = null),
                                    window.MutationObserver &&
                                    ((ie = be = null),
                                        (we =
                                            window.cancelAnimationFrame ||
                                            function(oe) {
                                                clearTimeout(oe);
                                            }),
                                        (ye =
                                            window.requestAnimationFrame ||
                                            function(oe) {
                                                return setTimeout(oe, 1e3 / 60);
                                            }),
                                        (ne = function() {
                                            (J = new MutationObserver(function(oe) {
                                                var de = S.includes(ca(oe[0].target));
                                                (oe.length === 1 && de) || se();
                                            })).observe(document.body, {
                                                childList: !0,
                                                subtree: !0
                                            });
                                        }),
                                        (te = function() {
                                            (be && (clearTimeout(be), (be = null)),
                                                ie && (we(ie), (ie = null)));
                                        }),
                                        document.body ?
                                        ne() :
                                        ((ie = ye(
                                                (ce = function() {
                                                    document.body ? (te(), ne()) : (ie = ye(ce));
                                                }),
                                            )),
                                            (be = setTimeout(function() {
                                                te();
                                            }, 1e4)))),
                                    (X = function() {
                                        $ && (($ = !0), j) && (clearTimeout(c), ae());
                                    }),
                                    (ge = function() {
                                        (document.visibilityState === "visible" && ($ = !1),
                                            document.visibilityState === "hidden" && X());
                                    }),
                                    window.addEventListener("pagehide", X),
                                    window.addEventListener("beforeunload", X),
                                    window.addEventListener("visibilitychange", ge),
                                    (this.destroyBlanckScreenDetect = function() {
                                        (window.removeEventListener("pagehide", X),
                                            window.removeEventListener("beforeunload", X),
                                            window.removeEventListener("visibilitychange", ge),
                                            i.event.remove(ve.errorOccurred, fe),
                                            J != null && J.disconnect());
                                    }));
                        },
                        destroy: function() {
                            this.destroyBlanckScreenDetect();
                        },
                    });
                return (
                    new Pe({
                        name: R.WEBSOCKET
                    }),
                    (Pe = new Pe({
                        name: R.WEBSOCKET,
                        init: function(i) {
                            var a = this;
                            Vs({
                                key: "".concat(i.config.id, "-").concat(this.name),
                                onErr: function(c) {
                                    i.config.websocketHack || a.publishWsErrorLog(c, i);
                                },
                                sendErr: function(c) {
                                    i.config.websocketHack || a.publishWsErrorLog(c, i);
                                },
                                sendConnectInfo: function(c) {
                                    a.publish(
                                        p(p({}, c), {
                                            level: I.INFO,
                                            type: O.WEBSOCKET
                                        }),
                                        i,
                                    );
                                },
                            });
                        },
                        publishWsErrorLog: function(i, a) {
                            var c = i.connectUrl,
                                l = i.msg;
                            ((i = i.readyState),
                                this.publish({
                                        msg: `WEBSOCKET_ERROR: 
              connect: `
                                            .concat(
                                                c,
                                                `
              readyState: `,
                                            )
                                            .concat(
                                                i,
                                                `
              msg: `,
                                            )
                                            .concat(l),
                                        level: I.WEBSOCKET_ERROR,
                                        type: O.WEBSOCKET,
                                    },
                                    a,
                                ));
                        },
                        destroy: function() {
                            ((this.publishErrorLog = function() {}),
                                this.hackWebsocketConfig && Xs(this.hackWebsocketConfig));
                        },
                    })),
                    tt.use(rn),
                    tt.use(Yf),
                    tt.use(q),
                    tt.use(op),
                    tt.use(wp),
                    tt.use(tp),
                    tt.use(ip),
                    tt.use(lp),
                    tt.use(zr),
                    tt.use(dp),
                    tt.use(Br),
                    tt.use(Rn),
                    tt.use(Pe),
                    tt
                );
            })())),
        Ka.exports
    );
}
var TS = CS();
const IS = Aw(TS);

function PS(e) {
    const t = {};
    for (let n of Object.keys(e)) t[`${bo}_${n}`] = e[n];
    return t;
}

function AS({
    platform: e,
    arch: t
}) {
    return e === "win32" ?
        "Qclaw_Win" :
        e === "darwin" ?
        t === "arm64" ?
        "Qclaw_MAC_ARM" :
        "Qclaw_MAC_INTEL" :
        `Qclaw_${e}_${t}`;
}
const RS = "https://galileotelemetry.tencent.com/collect",
    $S = "SDK-034b2f6d3e5cabfdd8eb";
let kr = null,
    Ya = {};

function NS() {
    return crypto.randomUUID();
}
let Qa = NS(),
    oi = null;

function zS(e) {
    ((oi = e), e(Qa));
}
const LS = () => (
        (kr = new IS({
            id: $S,
            hostUrl: {
                url: RS
            },
            plugin: {
                device: !0,
                close: !0,
                aid: !0,
                fId: !1,
                ie: !1,
                pv: !0,
                spa: !0,
                error: !0,
                assetSpeed: !1,
                pagePerformance: !0,
                webVitals: !0,
                session: {
                    sessionGenerator: () => Qa,
                    onSessionRebuild: (e) => {
                        ((Qa = e), oi == null || oi(e));
                    },
                },
                api: !1,
                trace: !1,
            },
        })),
        kr
    ),
    Un = ({
        name: e,
        options: t
    }) => {
        if (kr) {
            const n = {
                ...Ya,
                ...t,
                name: e
            };
            kr.reportEvent({
                ...PS(n),
                ...jS(n),
                name: e
            });
        }
    },
    il = (e) => {
        (kr && kr.setConfig({
            uid: e.guid
        }), (Ya = {
            ...Ya,
            ...e
        }));
    };

function jS(e) {
    return {
        app_name: bo,
        guid: e.guid,
        app_version: e.app_version,
        event_code: e.name,
        user_id: e.user_id,
        is_login: e.is_login,
        event_value: JSON.stringify(e),
        source_terminal: "client",
        qclaw_version: e.app_version,
    };
}
const MS = "Login_Page";

function ho(e) {
    if (e == null) return String(e);
    if (e instanceof Error)
        try {
            return JSON.stringify(e, Object.getOwnPropertyNames(e));
        } catch {
            return `${e.name}: ${e.message}`;
        }
    if (typeof e == "object")
        try {
            return JSON.stringify(e);
        } catch {
            return String(e);
        }
    return String(e);
}

function Et(e, t, n) {
    try {
        Un({
            name: "login_event",
            options: {
                page_id: MS,
                component_id: e,
                adv: t,
                ...n
            },
        });
    } catch {}
}
const On = Ke(!1),
    kn = Ke(null),
    Ai = Ke(!1),
    Es = Ke(!1),
    Cs = Ke(""),
    Tf = Ke("IOA 登录"),
    Ts = Ke(!1);
let mo = null;
async function DS() {
    const e = await Xt("userInfo");
    if (e && e.nickname) return ((kn.value = e), void(On.value = !0));
    ((kn.value = null), (On.value = !1));
}
async function FS() {
    var e, t, n, r, o, s, u, d, h, p;
    try {
        const g = await Vt.getGuid(),
            v = await Vt.getUserInfo({
                guid: g
            }),
            w = await Xt("jwt_token"),
            C =
            ((n =
                    (t = (e = v == null ? void 0 : v.data) == null ? void 0 : e.resp) ==
                    null ?
                    void 0 :
                    t.common) == null ?
                void 0 :
                n.code) ??
            ((o = (r = v == null ? void 0 : v.data) == null ? void 0 : r.common) ==
                null ?
                void 0 :
                o.code);
        if (v && v.success && v.data && C === 0) {
            const k =
                ((u = (s = v.data) == null ? void 0 : s.resp) == null ?
                    void 0 :
                    u.data) ||
                ((d = v.data) == null ? void 0 : d.data) ||
                v.data,
                P = {
                    nickname: k.nickname && k.nickname !== "undefined" ?
                        k.nickname :
                        k.nick_name || "",
                    avatar: k.avatar || k.head_img_url || k.head_img || "",
                    guid: k.guid || g,
                    userId: k.userId || k.user_id,
                    ...k,
                };
            return (
                (kn.value = P),
                (On.value = !0),
                await hr("userInfo", JSON.stringify(P)),
                await ((h = window.electronAPI) == null ?
                    void 0 :
                    h.safeStorage.setUserInfo(P || {})),
                await ((p = window.electronAPI) == null ?
                    void 0 :
                    p.safeStorage.setJwtToken(w)),
                Et("Login_Check", "success", {
                    source: "init"
                }),
                !0
            );
        }
        Et("Login_Check", "fail", {
            source: "init",
            error_code: C ?? -1,
            error_msg: ho(v),
        });
    } catch (g) {
        Et("Login_Check", "fail", {
            source: "init",
            error_msg: ho(g)
        });
    }
    return ((kn.value = null), (On.value = !1), !1);
}
const ro = Ke(!1);
let ii = null;
const HS = 3e5,
    BS = 3e3;

function mi() {
    (ii && (clearTimeout(ii), (ii = null)), (ro.value = !1));
}

function oo() {
    ((Es.value = !1), (Cs.value = ""), (Ts.value = !1), mi());
}
async function US(e, t) {
    var n, r, o;
    mo = t ?? null;
    try {
        const s = await Vt.createIOAState({
                reqType: e
            }),
            u =
            ((r = (n = s.data) == null ? void 0 : n.resp) == null ?
                void 0 :
                r.data) ??
            ((o = s.data) == null ? void 0 : o.data) ??
            s.data,
            d = u == null ? void 0 : u.state,
            h = u == null ? void 0 : u.login_url;
        if (!s.success || !d || !h)
            return (
                Et("IOA_CreateState", "fail", {
                    login_type: "ioa",
                    req_type: e,
                    error_code: s.code ?? -1,
                    error_msg: ho(s),
                }),
                !1
            );
        (Et("IOA_CreateState", "success", {
                login_type: "ioa",
                req_type: e
            }),
            (Cs.value = h),
            (Tf.value = e === 2 ? "IOA 绑定" : "IOA 登录"),
            (Ts.value = e === 2),
            (Es.value = !0),
            mi(),
            (ro.value = !0));
        const p = Date.now();
        let g = 0;
        const v = async () => {
                var C, k, P, B, U, R, K, Y, W, I;
                if (ro.value) {
                    if (Date.now() - p > HS)
                        return (
                            Et("IOA_CheckState", "timeout", {
                                login_type: "ioa",
                                req_type: e,
                                poll_count: g,
                                duration_ms: Date.now() - p,
                            }),
                            oo(),
                            void un.error("登录超时，请重试")
                        );
                    g++;
                    try {
                        const O = await Vt.checkIOAState({
                                state: d,
                                reqType: e
                            }),
                            ee =
                            ((k = (C = O.data) == null ? void 0 : C.resp) == null ?
                                void 0 :
                                k.data) ??
                            ((P = O.data) == null ? void 0 : P.data) ??
                            O.data,
                            me = ee == null ? void 0 : ee.status;
                        if (me === "done") {
                            if (
                                (Et("IOA_CheckState", "success", {
                                        login_type: "ioa",
                                        req_type: e,
                                        poll_count: g,
                                        duration_ms: Date.now() - p,
                                    }),
                                    oo(),
                                    e === 2)
                            )
                                ((B = window.electronAPI) == null ||
                                    B.reporter.report({
                                        name: "bind_success_ioa"
                                    }),
                                    un.success("绑定认证成功"));
                            else {
                                const Ie = ee == null ? void 0 : ee.login_data;
                                if (Ie) {
                                    (Ie.token && (await hr("jwt_token", Ie.token)),
                                        Ie.openclaw_channel_token &&
                                        (await hr(
                                            "openclaw_channel_token",
                                            Ie.openclaw_channel_token,
                                        )));
                                    const F = {
                                        nickname: ((U = Ie.user_info) == null ? void 0 : U.nickname) || "",
                                        avatar: ((R = Ie.user_info) == null ? void 0 : R.avatar_url) ||
                                            ((K = Ie.user_info) == null ? void 0 : K.avatar) ||
                                            "",
                                        userId: (Y = Ie.user_info) == null ? void 0 : Y.user_id,
                                        guid: ((W = Ie.user_info) == null ? void 0 : W.guid) ||
                                            (await Vt.getGuid()),
                                        ...Ie.user_info,
                                    };
                                    (await If(F),
                                        (I = window.electronAPI) == null ||
                                        I.reporter.report({
                                            name: "login_success_ioa"
                                        }),
                                        un.success("登录成功"));
                                }
                            }
                            const _e = Pf();
                            _e && (await _e());
                        } else
                            me === "expired" ?
                            (Et("IOA_CheckState", "fail", {
                                    login_type: "ioa",
                                    req_type: e,
                                    poll_count: g,
                                    duration_ms: Date.now() - p,
                                    error_msg: "expired",
                                }),
                                oo(),
                                un.error("登录会话已过期，请重试")) :
                            me === "pending" ?
                            w() :
                            (Et("IOA_CheckState", "fail", {
                                    login_type: "ioa",
                                    req_type: e,
                                    poll_count: g,
                                    duration_ms: Date.now() - p,
                                    error_msg: `unknown_status:${me}`,
                                }),
                                mi());
                    } catch {
                        w();
                    }
                }
            },
            w = () => {
                ro.value && (ii = setTimeout(v, BS));
            };
        return (w(), !0);
    } catch (s) {
        return (
            Et("IOA_CreateState", "fail", {
                login_type: "ioa",
                req_type: e,
                error_msg: ho(s),
            }),
            !1
        );
    }
}

function qS(e) {
    return !!On.value || ((mo = e ?? null), (Ai.value = !0), !1);
}
async function If(e) {
    var n, r;
    ((kn.value = e),
        (On.value = !0),
        await hr("userInfo", JSON.stringify(e)),
        await ((n = window.electronAPI) == null ?
            void 0 :
            n.safeStorage.setUserInfo(e || {})));
    const t = await Xt("jwt_token");
    (t &&
        (await ((r = window.electronAPI) == null ?
            void 0 :
            r.safeStorage.setJwtToken(t))),
        (Ai.value = !1));
}

function WS() {
    ((Ai.value = !1), (mo = null));
}
async function GS() {
    var t, n, r, o, s;
    oo();
    const e = (t = kn.value) == null ? void 0 : t.userId;
    try {
        const u = await Vt.getGuid();
        (await Vt.wxLogout({
            guid: u
        }), Et("Logout", "success"));
    } catch (u) {
        Et("Logout", "fail", {
            error_msg: ho(u)
        });
    }
    (vt("userInfo"),
        vt("wx_login_code"),
        vt("jwt_token"),
        vt("openclaw_channel_token"),
        vt("openclaw.device.auth.v1"),
        vt("openclaw.device.identity.v1"),
        vt("openclaw_model_setting"),
        (n = window.electronAPI) == null ||
        n.safeStorage.clearJwtToken().catch((u) => {}),
        (r = window.electronAPI) == null ||
        r.safeStorage.clearUserInfo().catch((u) => {}),
        e != null &&
        ((s =
                (o = window.electronAPI) == null ?
                void 0 :
                o.security.clearInviteStatus(String(e))) == null ||
            s.catch(() => {})),
        (kn.value = null),
        (On.value = !1));
}

function Pf() {
    const e = mo;
    return ((mo = null), e);
}

function Af() {
    return {
        isLoggedIn: Qn(On),
        loginUser: kn,
        showWxLoginModal: Ai,
        showIOALoginModal: Qn(Es),
        ioaLoginUrl: Qn(Cs),
        ioaLoginTitle: Qn(Tf),
        ioaLoginIncognito: Qn(Ts),
        ioaLoginPolling: Qn(ro),
        initAuthState: DS,
        checkLoginStatus: FS,
        requireLogin: qS,
        startIOALogin: US,
        stopIOAPolling: mi,
        closeIOALoginModal: oo,
        onLoginSuccess: If,
        closeLoginModal: WS,
        consumePendingAction: Pf,
        logout: GS,
    };
}
let al = !1,
    Zo = null,
    es = null;
async function ZS(e) {
    if (!al)
        return (
            Zo ||
            ((Zo = (async () => {
                    try {
                        let t = "";
                        if (
                            (e instanceof Map ?
                                (t = e.get("uid") || "") :
                                e && (t = e.uid || ""),
                                !t)
                        )
                            try {
                                const r = await window.electronAPI.app.getMachineId();
                                r && (t = r);
                            } catch {}
                        if (!t) {
                            const r = await Xt("userInfo");
                            t = (r == null ? void 0 : r.guid) || "";
                        }
                        const n = qv() ? "/beacon/test/datareport" : ps().beaconUrl;
                        (oh({
                            appkey: bo,
                            guid: t,
                            baseUrl: n
                        }), (al = !0), VS());
                    } finally {
                        Zo = null;
                    }
                })()),
                Zo)
        );
}

function XS() {
    var n, r;
    const e = (n = window.electronAPI) == null ? void 0 : n.platform,
        t = (r = window.electronAPI) == null ? void 0 : r.arch;
    return e === "win32" ?
        "Qclaw_Win" :
        e === "darwin" ?
        t === "arm64" ?
        "Qclaw_MAC_ARM" :
        "Qclaw_MAC_INTEL" :
        `Qclaw_${e}_${t}`;
}
async function VS() {
    var t, n;
    if (es) return;
    const e = {
        event_params: XS()
    };
    try {
        const r = await ((t = window.electronAPI) == null ?
            void 0 :
            t.app.getVersion());
        r && (e.app_version = r);
    } catch {}
    try {
        const r = await ((n = window.electronAPI) == null ?
            void 0 :
            n.app.getChannel());
        r && (e.channel = r);
    } catch {}
    es = e;
}
const go = async (e, t = {}) => {
    var n;
    if (e)
        try {
            await ZS(t);
            const {
                isLoggedIn: r,
                loginUser: o
            } = Af(),
                s = {
                    action_status: r.value ? 1 : 0,
                    ...(es || {})
                },
                u = ((n = o.value) == null ? void 0 : n.userId) || "1";
            if (((s.uid = u), t instanceof Map))
                for (const [d, h] of Object.entries(s)) t.has(d) || t.set(d, h);
            else
                for (const [d, h] of Object.entries(s)) d in t || (t[d] = h);
            ah(e, t);
        } catch {}
};
async function Q2(e) {
    try {
        return btoa(unescape(encodeURIComponent(e)));
    } catch {
        return e;
    }
}

function JS() {
    const e = new Date(),
        t = (n) => (n < 10 ? "0" + n : n.toString());
    return `${e.getFullYear()}${t(e.getMonth() + 1)}${t(e.getDate())}${t(e.getHours())}${t(e.getMinutes())}${t(e.getSeconds())}${e.getMilliseconds().toString().padStart(3, "0")}`;
}

function KS(e) {
    if (typeof crypto < "u" && crypto.getRandomValues) {
        const n = new Uint8Array(Math.ceil(e / 2));
        return (
            crypto.getRandomValues(n),
            Array.from(n, (r) => r.toString(16).padStart(2, "0"))
            .join("")
            .slice(0, e)
        );
    }
    let t = "";
    for (let n = 0; n < e; n++) t += ((16 * Math.random()) | 0).toString(16);
    return t;
}

function e_() {
    return typeof crypto < "u" && crypto.randomUUID ?
        crypto.randomUUID() :
        "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
            const t = (16 * Math.random()) | 0;
            return (e === "x" ? t : (3 & t) | 8).toString(16);
        });
}

function t_() {
    return `${KS(13)}af${JS()}`;
}
const Sn = Symbol("__track_bindingkey__");

function Rf(e) {
    return typeof e.value == "object" ? {
        ...e.value
    } : {};
}

function YS(e, t) {
    const n = (r) => {
        const o = Rf(t);
        (go(Lt.CLICK_NEW, o), Un({
            name: Lt.CLICK_NEW,
            options: o
        }));
    };
    (e.addEventListener("click", n, !0),
        (e[Sn] = e[Sn] || {}),
        (e[Sn].clickHandler = n));
}

function QS(e, t) {
    const n = new IntersectionObserver(
        (r) => {
            for (const o of r)
                if (o.isIntersecting) {
                    const s = Rf(t);
                    (go(Lt.EXPO, s), Un({
                        name: Lt.EXPO,
                        options: s
                    }), n.unobserve(e));
                }
        }, {
            threshold: 0.5
        },
    );
    (n.observe(e), (e[Sn] = e[Sn] || {}), (e[Sn].observer = n));
}
const e2 = {
        mounted(e, t) {
            const n = t.arg || "",
                r = t.modifiers,
                o = n === "click" || r.click,
                s = n === "expo" || r.expo;
            (o && YS(e, t), s && QS(e, t));
        },
        unmounted(e) {
            const t = e[Sn];
            (t != null &&
                t.clickHandler &&
                e.removeEventListener("click", t.clickHandler, !0),
                t != null && t.observer && t.observer.disconnect(),
                delete e[Sn]);
        },
    },
    sl = {
        "/": "Initial_Page"
    };
let $f = {};
const t2 = new Set();
let Oa = 0;

function n2(e) {
    const t = {};
    for (const n of e.getRoutes()) {
        const r = n.path,
            o = n.name;
        o && typeof o != "symbol" && (t[o] = sl[r] ? sl[r] : "Home_Page");
    }
    return t;
}

function ts(e) {
    return e && typeof e != "symbol" ? $f[e] || "Home_Page" : "Unknown_Page";
}

function r2(e) {
    (($f = n2(e)),
        e.afterEach((t, n) => {
            const r = Date.now();
            if (n.name && Oa > 0) {
                const s = ts(n.name),
                    u = r - Oa;
                (go(Lt.CLICK_NEW, {
                        page_id: s,
                        component_id: "PageLeave",
                        duration: u,
                    }),
                    Un({
                        name: Lt.CLICK_NEW,
                        options: {
                            page_id: s,
                            component_id: "PageLeave",
                            duration: u
                        },
                    }));
            }
            const o = ts(t.name);
            (t2.add(o),
                go(Lt.EXPO, {
                    page_id: o,
                    action_type: "PageView"
                }),
                Un({
                    name: Lt.EXPO,
                    options: {
                        page_id: o,
                        action_type: "PageView"
                    }
                }),
                (Oa = r));
        }));
}

function o2(e) {
    var r;
    let t = e,
        n = 0;
    for (; t && n < 10;) {
        if ((r = t.dataset) != null && r.trackClick) return t;
        ((t = t.parentElement), n++);
    }
    return null;
}

function i2(e) {
    try {
        return JSON.parse(e);
    } catch {
        return {
            component_id: e
        };
    }
}

function a2() {
    let e = null,
        t = 0;
    document.addEventListener(
        "click",
        (n) => {
            const r = o2(n.target);
            if (!r) return;
            const o = Date.now();
            if (r === e && o - t < 50) return;
            ((e = r), (t = o));
            const s = i2(r.dataset.trackClick);
            (go(Lt.CLICK_NEW, s), Un({
                name: Lt.CLICK_NEW,
                options: s
            }));
        }, {
            capture: !1,
            passive: !0
        },
    );
}
const Nf = 1e3 / 60,
    zf = 50,
    s2 = 200,
    c2 = 500,
    u2 = 1e3,
    l2 = 3e4,
    d2 = 3e4;
let ns = !1,
    ai = 0,
    lr = 0;
const yt = [],
    f2 = performance.now();
let rs = !1,
    Xo = null,
    cl = null,
    os = null;

function Lf() {
    return performance.now() - f2 < d2;
}

function p2(e) {
    return e >= c2 ? "severe" : e >= s2 ? "moderate" : "mild";
}

function jf() {
    return Lf() ? "startup" : rs ? "scroll" : "ui";
}

function h2() {
    return os ? ts(os) : "Unknown_Page";
}

function Mf(e) {
    if (ns) {
        if (ai > 0) {
            const t = e - ai;
            if (t < u2 && (lr++, t > zf)) {
                const n = Math.floor(t / Nf) - 1;
                yt.push({
                    type: jf(),
                    duration: Math.round(t),
                    frameDropCount: Math.max(0, n),
                    renderTime: Math.round(t),
                    timestamp: e,
                });
            }
        } else lr++;
        ((ai = e), requestAnimationFrame(Mf));
    }
}

function m2() {
    if (typeof PerformanceObserver < "u")
        try {
            ((cl = new PerformanceObserver((e) => {
                    for (const t of e.getEntries()) {
                        const n = t.duration;
                        n > zf &&
                            yt.push({
                                type: jf(),
                                duration: Math.round(n),
                                frameDropCount: Math.floor(n / Nf) - 1,
                                renderTime: Math.round(n),
                                timestamp: performance.now(),
                            });
                    }
                })),
                cl.observe({
                    type: "longtask",
                    buffered: !1
                }));
        } catch {}
}

function g2() {
    ((rs = !0),
        Xo && clearTimeout(Xo),
        (Xo = setTimeout(() => {
            ((rs = !1), (Xo = null));
        }, 150)));
}

function v2() {
    if (yt.length === 0) return void(lr = 0);
    const e = new Map();
    for (const t of yt) {
        const n = e.get(t.type) || [];
        (n.push(t), e.set(t.type, n));
    }
    for (const [t, n] of e) {
        let r = 0,
            o = 0,
            s = 0;
        for (const u of n)
            (u.duration > r && (r = u.duration),
                (o += u.frameDropCount),
                u.renderTime > s && (s = u.renderTime));
        Un({
            name: Lt.JANK_EVENT,
            options: {
                jank_type: t,
                jank_level: p2(r),
                jank_duration: String(r),
                frame_drop_count: String(o),
                scene_name: h2(),
                render_time: String(s),
                total_frames: String(lr),
                is_startup_phase: Lf() ? "1" : "0",
                jank_count: String(n.length),
            },
        });
    }
    ((yt.length = 0), (lr = 0));
}

function y2() {
    if (yt.length < 2) return;
    yt.sort((t, n) => t.timestamp - n.timestamp);
    let e = 0;
    for (; e < yt.length - 1;) {
        const t = yt[e],
            n = yt[e + 1];
        n.timestamp - t.timestamp < 100 ?
            t.duration >= n.duration ?
            yt.splice(e + 1, 1) :
            yt.splice(e, 1) :
            e++;
    }
}

function b2() {
    ns ||
        ((ns = !0),
            (ai = 0),
            (lr = 0),
            (yt.length = 0),
            requestAnimationFrame(Mf),
            m2(),
            window.addEventListener("scroll", g2, {
                passive: !0,
                capture: !0
            }),
            setInterval(() => {
                (y2(), v2());
            }, l2));
}

function w2(e) {
    os = e;
}
const S2 = {
        install(e, t) {
            (e.directive("track", e2),
                t.router &&
                (r2(t.router),
                    t.router.afterEach((n) => {
                        w2(n.name);
                    })),
                a2(),
                b2());
        },
    },
    _2 = () => {
        try {
            LS();
        } catch {
            return;
        }
        try {
            x2();
        } catch {}
        O2().catch((e) => {});
    };

function x2() {
    zS((e) => {
        var t;
        (t = window.electronAPI) == null || t.galileo.syncSessionId(e);
    });
}
async function O2() {
    var n, r, o, s, u;
    const e = await Promise.allSettled([
        (n = window.electronAPI) == null ? void 0 : n.app.getMachineId(),
        (r = window.electronAPI) == null ? void 0 : r.app.getVersion(),
        (o = window.electronAPI) == null ? void 0 : o.app.getChannel(),
        AS({
            platform: (s = window.electronAPI) == null ? void 0 : s.platform,
            arch: (u = window.electronAPI) == null ? void 0 : u.arch,
        }),
    ]);
    il({
        guid: e[0].status === "fulfilled" ? e[0].value : "",
        app_version: e[1].status === "fulfilled" ? e[1].value : "",
        app_channel: e[2].status === "fulfilled" ? e[2].value : "",
        platform: e[3].status === "fulfilled" ? e[3].value : "",
    });
    const {
        loginUser: t
    } = Af();
    Yt(
        () => t.value,
        (d) => {
            var p;
            const h = {
                is_login: !!(d != null && d.nickname),
                user_id: d == null ? void 0 : d.userId,
            };
            (il(h),
                (p = window.electronAPI) == null || p.galileo.syncCommonParams(h));
        },
    );
}
var ul;
const ka = (ul = window.electronAPI) == null ? void 0 : ul.platform;
ka === "darwin" ?
    document.body.classList.add("platform-mac") :
    ka === "win32" ?
    document.body.classList.add("platform-win") :
    ka === "linux" && document.body.classList.add("platform-linux");
const Vo = Bp(Xp);
(_2(),
    Vo.use(Fc),
    Vo.use(S2, {
        router: Fc
    }),
    (Vo.config.errorHandler = (e, t, n) => {
        var s, u, d;
        const r = e,
            o =
            ((s = t == null ? void 0 : t.$options) == null ? void 0 : s.name) ??
            ((u = t == null ? void 0 : t.$options) == null ? void 0 : u.__name) ??
            "unknown";
        (d = window.electronAPI) == null ||
            d.reporter.report({
                name: "renderer_vue_error",
                ext1: `[${o}][${n}] ${r.message ?? String(e)}`.slice(0, 256),
                ext2: (r.stack ?? "").slice(0, 1024),
            });
    }),
    (window.onerror = (e, t, n, r, o) => {
        var s;
        (s = window.electronAPI) == null ||
            s.reporter.report({
                name: "renderer_js_error",
                ext1: ((o == null ? void 0 : o.message) ?? String(e)).slice(0, 256),
                ext2: (
                    (o == null ? void 0 : o.stack) ?? `${t ?? ""}:${n ?? 0}:${r ?? 0}`
                ).slice(0, 1024),
            });
    }),
    (window.onunhandledrejection = (e) => {
        var n;
        const t = e.reason;
        (n = window.electronAPI) == null ||
            n.reporter.report({
                name: "renderer_unhandled_rejection",
                ext1: ((t == null ? void 0 : t.message) ?? String(e.reason)).slice(
                    0,
                    256,
                ),
                ext2: ((t == null ? void 0 : t.stack) ?? "").slice(0, 1024),
            });
    }),
    Vo.mount("#app"));
export {
    N2 as $,
    X2 as A,
    Ti as B,
    po as C,
    Ld as D,
    D2 as E,
    gy as F,
    gt as G,
    H2 as H,
    it as I,
    Z2 as J,
    Fn as K,
    fo as L,
    V2 as M,
    py as N,
    Jb as O,
    Zd as P,
    G2 as Q,
    Aw as R,
    du as S,
    Je as T,
    Ql as U,
    Kl as V,
    md as W,
    vy as X,
    hy as Y,
    P2 as Z,
    Zp as _,
    Xt as a,
    U2 as a0,
    Oy as a1,
    hs as a2,
    R2 as a3,
    I2 as a4,
    Vr as a5,
    mr as a6,
    q2 as a7,
    id as a8,
    F2 as a9,
    z2 as aA,
    j2 as aB,
    L2 as aC,
    Pa as aD,
    di as aE,
    hd as aF,
    A1 as aG,
    qa as aa,
    go as ab,
    Lt as ac,
    Wv as ad,
    T2 as ae,
    C2 as af,
    Af as ag,
    Ua as ah,
    Un as ai,
    Q2 as aj,
    t2 as ak,
    e_ as al,
    t_ as am,
    fs as an,
    Py as ao,
    I1 as ap,
    xr as aq,
    _r as ar,
    Or as as,
    rt as at,
    Yr as au,
    K2 as av,
    td as aw,
    T1 as ax,
    $2 as ay,
    A2 as az,
    ho as b,
    un as c,
    vt as d,
    z as e,
    Ve as f,
    St as g,
    sr as h,
    M2 as i,
    Tr as j,
    Sr as k,
    Ad as l,
    Ci as m,
    Zb as n,
    Vt as o,
    ws as p,
    rd as q,
    Et as r,
    hr as s,
    W2 as t,
    Ii as u,
    B2 as v,
    fu as w,
    pa as x,
    yy as y,
    J2 as z,
};