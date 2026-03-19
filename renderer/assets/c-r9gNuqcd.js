import {
    e as l,
    p as xe,
    g as U,
    u as ae,
    h as He,
    f as w,
    x as Ee,
    P as I,
    X as ce,
    K as mo,
    G as Z,
    a3 as ye,
    H as We,
    L as _e,
    m as we,
    J as po,
    B as Go,
    q as Vo,
    j as go,
    M as vo,
    ao as Uo,
    ap as Xo,
    l as Ko,
    Q as qo,
    W as Qo,
    z as he,
    C as Yo,
    a0 as De,
    aq as Jo,
    k as Zo,
    ar as ko,
    as as et,
    at as ot,
    au as tt,
    av as nt,
    aw as rt,
    a6 as lt,
    U as at,
    I as bo
} from "./e-Kf-uhv6n.js";
import {
    p as it,
    q as st,
    t as ct,
    u as dt,
    v as ut,
    x as ft,
    y as mt,
    z as pt,
    A as Co,
    e as gt,
    w as je,
    m as vt,
    g as bt,
    i as ue,
    o as yo,
    P as Ct,
    f as yt,
    j as ht,
    B as St
} from "./c-BYFbIAm8.js";
import {
    r as q,
    d as H,
    m as A,
    b as u,
    I as de,
    o as fe,
    a as te,
    X as Te,
    s as B,
    q as ho,
    w as oe,
    A as Ne,
    D as $t,
    t as So,
    z as xt,
    T as wt,
    O as $o,
    P as xo,
    F as wo,
    u as Tt,
    U as Bt
} from "./c-B57oo86K.js";
let Ge = {};

function Pt(e, o) {}

function It(e, o, t) {
    !o && !Ge[t] && (Ge[t] = !0)
}

function Et(e, o) {
    It(Pt, e, o)
}
const To = ((e, o, t) => {
        Et(e, `[ant-design-vue: ${o}] ${t}`)
    }),
    Ve = {
        BACKSPACE: 8,
        TAB: 9,
        ENTER: 13,
        SHIFT: 16,
        CTRL: 17,
        ALT: 18,
        CAPS_LOCK: 20,
        ESC: 27,
        SPACE: 32,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        N: 78,
        P: 80,
        META: 91,
        WIN_KEY_RIGHT: 92,
        CONTEXT_MENU: 93,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        SEMICOLON: 186,
        EQUALS: 187,
        WIN_KEY: 224
    },
    Ot = `accept acceptcharset accesskey action allowfullscreen allowtransparency
alt async autocomplete autofocus autoplay capture cellpadding cellspacing challenge
charset checked classid classname colspan cols content contenteditable contextmenu
controls coords crossorigin data datetime default defer dir disabled download draggable
enctype form formaction formenctype formmethod formnovalidate formtarget frameborder
headers height hidden high href hreflang htmlfor for httpequiv icon id inputmode integrity
is keyparams keytype kind label lang list loop low manifest marginheight marginwidth max maxlength media
mediagroup method min minlength multiple muted name novalidate nonce open
optimum pattern placeholder poster preload radiogroup readonly rel required
reversed role rowspan rows sandbox scope scoped scrolling seamless selected
shape size sizes span spellcheck src srcdoc srclang srcset start step style
summary tabindex target title type usemap value width wmode wrap`,
    zt = `onCopy onCut onPaste onCompositionend onCompositionstart onCompositionupdate onKeydown
    onKeypress onKeyup onFocus onBlur onChange onInput onSubmit onClick onContextmenu onDoubleclick onDblclick
    onDrag onDragend onDragenter onDragexit onDragleave onDragover onDragstart onDrop onMousedown
    onMouseenter onMouseleave onMousemove onMouseout onMouseover onMouseup onSelect onTouchcancel
    onTouchend onTouchmove onTouchstart onTouchstartPassive onTouchmovePassive onScroll onWheel onAbort onCanplay onCanplaythrough
    onDurationchange onEmptied onEncrypted onEnded onError onLoadeddata onLoadedmetadata
    onLoadstart onPause onPlay onPlaying onProgress onRatechange onSeeked onSeeking onStalled onSuspend onTimeupdate onVolumechange onWaiting onLoad onError`,
    Ue = `${Ot} ${zt}`.split(/[\s\n]+/),
    At = "aria-",
    Ft = "data-";

function Xe(e, o) {
    return e.indexOf(o) === 0
}

function Ht(e) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
        t;
    o === !1 ? t = {
        aria: !0,
        data: !0,
        attr: !0
    } : o === !0 ? t = {
        aria: !0
    } : t = l({}, o);
    const n = {};
    return Object.keys(e).forEach(r => {
        (t.aria && (r === "role" || Xe(r, At)) || t.data && Xe(r, Ft) || t.attr && (Ue.includes(r) || Ue.includes(r.toLowerCase()))) && (n[r] = e[r])
    }), n
}

function J(e) {
    const o = typeof e == "function" ? e() : e,
        t = q(o);

    function n(r) {
        t.value = r
    }
    return [t, n]
}
const Dt = e => {
        const {
            componentCls: o
        } = e;
        return {
            [o]: {
                display: "inline-flex",
                "&-block": {
                    display: "flex",
                    width: "100%"
                },
                "&-vertical": {
                    flexDirection: "column"
                }
            }
        }
    },
    Nt = e => {
        const {
            componentCls: o
        } = e;
        return {
            [o]: {
                display: "inline-flex",
                "&-rtl": {
                    direction: "rtl"
                },
                "&-vertical": {
                    flexDirection: "column"
                },
                "&-align": {
                    flexDirection: "column",
                    "&-center": {
                        alignItems: "center"
                    },
                    "&-start": {
                        alignItems: "flex-start"
                    },
                    "&-end": {
                        alignItems: "flex-end"
                    },
                    "&-baseline": {
                        alignItems: "baseline"
                    }
                },
                [`${o}-item`]: {
                    "&:empty": {
                        display: "none"
                    }
                }
            }
        }
    },
    Bo = xe("Space", e => [Nt(e), Dt(e)]);
var Rt = "[object Map]",
    Lt = "[object Set]",
    Mt = Object.prototype,
    Wt = Mt.hasOwnProperty;

function Po(e) {
    if (e == null) return !0;
    if (it(e) && (st(e) || typeof e == "string" || typeof e.splice == "function" || ct(e) || dt(e) || ut(e))) return !e.length;
    var o = ft(e);
    if (o == Rt || o == Lt) return !e.size;
    if (mt(e)) return !pt(e).length;
    for (var t in e)
        if (Wt.call(e, t)) return !1;
    return !0
}
const _t = () => ({
        compactSize: String,
        compactDirection: I.oneOf(ce("horizontal", "vertical")).def("horizontal"),
        isFirstItem: Ee(),
        isLastItem: Ee()
    }),
    Be = Co(null),
    jt = (e, o) => {
        const t = Be.useInject(),
            n = A(() => {
                if (!t || Po(t)) return "";
                const {
                    compactDirection: r,
                    isFirstItem: i,
                    isLastItem: d
                } = t, p = r === "vertical" ? "-vertical-" : "-";
                return U({
                    [`${e.value}-compact${p}item`]: !0,
                    [`${e.value}-compact${p}first-item`]: i,
                    [`${e.value}-compact${p}last-item`]: d,
                    [`${e.value}-compact${p}item-rtl`]: o.value === "rtl"
                })
            });
        return {
            compactSize: A(() => t == null ? void 0 : t.compactSize),
            compactDirection: A(() => t == null ? void 0 : t.compactDirection),
            compactItemClassnames: n
        }
    },
    ar = H({
        name: "NoCompactStyle",
        setup(e, o) {
            let {
                slots: t
            } = o;
            return Be.useProvide(null), () => {
                var n;
                return (n = t.default) === null || n === void 0 ? void 0 : n.call(t)
            }
        }
    }),
    Gt = () => ({
        prefixCls: String,
        size: {
            type: String
        },
        direction: I.oneOf(ce("horizontal", "vertical")).def("horizontal"),
        align: I.oneOf(ce("start", "end", "center", "baseline")),
        block: {
            type: Boolean,
            default: void 0
        }
    }),
    Vt = H({
        name: "CompactItem",
        props: _t(),
        setup(e, o) {
            let {
                slots: t
            } = o;
            return Be.useProvide(e), () => {
                var n;
                return (n = t.default) === null || n === void 0 ? void 0 : n.call(t)
            }
        }
    }),
    Oe = H({
        name: "ASpaceCompact",
        inheritAttrs: !1,
        props: Gt(),
        setup(e, o) {
            let {
                attrs: t,
                slots: n
            } = o;
            const {
                prefixCls: r,
                direction: i
            } = ae("space-compact", e), d = Be.useInject(), [p, b] = Bo(r), g = A(() => U(r.value, b.value, {
                [`${r.value}-rtl`]: i.value === "rtl",
                [`${r.value}-block`]: e.block,
                [`${r.value}-vertical`]: e.direction === "vertical"
            }));
            return () => {
                var s;
                const c = He(((s = n.default) === null || s === void 0 ? void 0 : s.call(n)) || []);
                return c.length === 0 ? null : p(u("div", w(w({}, t), {}, {
                    class: [g.value, t.class]
                }), [c.map((a, f) => {
                    var C;
                    const S = a && a.key || `${r.value}-item-${f}`,
                        $ = !d || Po(d);
                    return u(Vt, {
                        key: S,
                        compactSize: (C = e.size) !== null && C !== void 0 ? C : "middle",
                        compactDirection: e.direction,
                        isFirstItem: f === 0 && ($ || (d == null ? void 0 : d.isFirstItem)),
                        isLastItem: f === c.length - 1 && ($ || (d == null ? void 0 : d.isLastItem))
                    }, {
                        default: () => [a]
                    })
                })]))
            }
        }
    }),
    Ut = new mo("antFadeIn", {
        "0%": {
            opacity: 0
        },
        "100%": {
            opacity: 1
        }
    }),
    Xt = new mo("antFadeOut", {
        "0%": {
            opacity: 1
        },
        "100%": {
            opacity: 0
        }
    }),
    Kt = function(e) {
        let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        const {
            antCls: t
        } = e, n = `${t}-fade`, r = o ? "&" : "";
        return [gt(n, Ut, Xt, e.motionDurationMid, o), {
            [`
        ${r}${n}-enter,
        ${r}${n}-appear
      `]: {
                opacity: 0,
                animationTimingFunction: "linear"
            },
            [`${r}${n}-leave`]: {
                animationTimingFunction: "linear"
            }
        }]
    },
    qt = e => {
        const {
            componentCls: o,
            colorPrimary: t
        } = e;
        return {
            [o]: {
                position: "absolute",
                background: "transparent",
                pointerEvents: "none",
                boxSizing: "border-box",
                color: `var(--wave-color, ${t})`,
                boxShadow: "0 0 0 0 currentcolor",
                opacity: .2,
                "&.wave-motion-appear": {
                    transition: [`box-shadow 0.4s ${e.motionEaseOutCirc}`, `opacity 2s ${e.motionEaseOutCirc}`].join(","),
                    "&-active": {
                        boxShadow: "0 0 0 6px currentcolor",
                        opacity: 0
                    }
                }
            }
        }
    },
    Qt = xe("Wave", e => [qt(e)]);

function Yt(e) {
    const o = (e || "").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);
    return o && o[1] && o[2] && o[3] ? !(o[1] === o[2] && o[2] === o[3]) : !0
}

function Pe(e) {
    return e && e !== "#fff" && e !== "#ffffff" && e !== "rgb(255, 255, 255)" && e !== "rgba(255, 255, 255, 1)" && Yt(e) && !/rgba\((?:\d*, ){3}0\)/.test(e) && e !== "transparent"
}

function Jt(e) {
    const {
        borderTopColor: o,
        borderColor: t,
        backgroundColor: n
    } = getComputedStyle(e);
    return Pe(o) ? o : Pe(t) ? t : Pe(n) ? n : null
}

function Ie(e) {
    return Number.isNaN(e) ? 0 : e
}
const Zt = H({
    props: {
        target: Z(),
        className: String
    },
    setup(e) {
        const o = B(null),
            [t, n] = J(null),
            [r, i] = J([]),
            [d, p] = J(0),
            [b, g] = J(0),
            [s, c] = J(0),
            [a, f] = J(0),
            [C, S] = J(!1);

        function $() {
            const {
                target: x
            } = e, T = getComputedStyle(x);
            n(Jt(x));
            const D = T.position === "static",
                {
                    borderLeftWidth: M,
                    borderTopWidth: W
                } = T;
            p(D ? x.offsetLeft : Ie(-parseFloat(M))), g(D ? x.offsetTop : Ie(-parseFloat(W))), c(x.offsetWidth), f(x.offsetHeight);
            const {
                borderTopLeftRadius: _,
                borderTopRightRadius: j,
                borderBottomLeftRadius: L,
                borderBottomRightRadius: v
            } = T;
            i([_, j, v, L].map(z => Ie(parseFloat(z))))
        }
        let m, y, h;
        const P = () => {
                clearTimeout(h), je.cancel(y), m == null || m.disconnect()
            },
            E = () => {
                var x;
                const T = (x = o.value) === null || x === void 0 ? void 0 : x.parentElement;
                T && (de(null, T), T.parentElement && T.parentElement.removeChild(T))
            };
        fe(() => {
            P(), h = setTimeout(() => {
                E()
            }, 5e3);
            const {
                target: x
            } = e;
            x && (y = je(() => {
                $(), S(!0)
            }), typeof ResizeObserver < "u" && (m = new ResizeObserver($), m.observe(x)))
        }), te(() => {
            P()
        });
        const F = x => {
            x.propertyName === "opacity" && E()
        };
        return () => {
            if (!C.value) return null;
            const x = {
                left: `${d.value}px`,
                top: `${b.value}px`,
                width: `${s.value}px`,
                height: `${a.value}px`,
                borderRadius: r.value.map(T => `${T}px`).join(" ")
            };
            return t && (x["--wave-color"] = t.value), u(Te, {
                appear: !0,
                name: "wave-motion",
                appearFromClass: "wave-motion-appear",
                appearActiveClass: "wave-motion-appear",
                appearToClass: "wave-motion-appear wave-motion-appear-active"
            }, {
                default: () => [u("div", {
                    ref: o,
                    class: e.className,
                    style: x,
                    onTransitionend: F
                }, null)]
            })
        }
    }
});

function kt(e, o) {
    const t = document.createElement("div");
    return t.style.position = "absolute", t.style.left = "0px", t.style.top = "0px", e == null || e.insertBefore(t, e == null ? void 0 : e.firstChild), de(u(Zt, {
        target: e,
        className: o
    }, null), t), () => {
        de(null, t), t.parentElement && t.parentElement.removeChild(t)
    }
}

function en(e, o) {
    const t = ho();
    let n;

    function r() {
        var i;
        const d = ye(t);
        n == null || n(), !(!((i = o == null ? void 0 : o.value) === null || i === void 0) && i.disabled || !d) && (n = kt(d, e.value))
    }
    return te(() => {
        n == null || n()
    }), r
}
const on = H({
    compatConfig: {
        MODE: 3
    },
    name: "Wave",
    props: {
        disabled: Boolean
    },
    setup(e, o) {
        let {
            slots: t
        } = o;
        const n = ho(),
            {
                prefixCls: r,
                wave: i
            } = ae("wave", e),
            [, d] = Qt(r),
            p = en(A(() => U(r.value, d.value)), i);
        let b;
        const g = () => {
            ye(n).removeEventListener("click", b, !0)
        };
        return fe(() => {
            oe(() => e.disabled, () => {
                g(), Ne(() => {
                    const s = ye(n);
                    s == null || s.removeEventListener("click", b, !0), !(!s || s.nodeType !== 1 || e.disabled) && (b = c => {
                        c.target.tagName === "INPUT" || !vt(c.target) || !s.getAttribute || s.getAttribute("disabled") || s.disabled || s.className.includes("disabled") || s.className.includes("-leave") || p()
                    }, s.addEventListener("click", b, !0))
                })
            }, {
                immediate: !0,
                flush: "post"
            })
        }), te(() => {
            g()
        }), () => {
            var s;
            return (s = t.default) === null || s === void 0 ? void 0 : s.call(t)[0]
        }
    }
});

function Io(e) {
    return e === "danger" ? {
        danger: !0
    } : {
        type: e
    }
}
const tn = () => ({
        prefixCls: String,
        type: String,
        htmlType: {
            type: String,
            default: "button"
        },
        shape: {
            type: String
        },
        size: {
            type: String
        },
        loading: {
            type: [Boolean, Object],
            default: () => !1
        },
        disabled: {
            type: Boolean,
            default: void 0
        },
        ghost: {
            type: Boolean,
            default: void 0
        },
        block: {
            type: Boolean,
            default: void 0
        },
        danger: {
            type: Boolean,
            default: void 0
        },
        icon: I.any,
        href: String,
        target: String,
        title: String,
        onClick: We(),
        onMousedown: We()
    }),
    Ke = e => {
        e && (e.style.width = "0px", e.style.opacity = "0", e.style.transform = "scale(0)")
    },
    qe = e => {
        Ne(() => {
            e && (e.style.width = `${e.scrollWidth}px`, e.style.opacity = "1", e.style.transform = "scale(1)")
        })
    },
    Qe = e => {
        e && e.style && (e.style.width = null, e.style.opacity = null, e.style.transform = null)
    },
    nn = H({
        compatConfig: {
            MODE: 3
        },
        name: "LoadingIcon",
        props: {
            prefixCls: String,
            loading: [Boolean, Object],
            existIcon: Boolean
        },
        setup(e) {
            return () => {
                const {
                    existIcon: o,
                    prefixCls: t,
                    loading: n
                } = e;
                if (o) return u("span", {
                    class: `${t}-loading-icon`
                }, [u(_e, null, null)]);
                const r = !!n;
                return u(Te, {
                    name: `${t}-loading-icon-motion`,
                    onBeforeEnter: Ke,
                    onEnter: qe,
                    onAfterEnter: Qe,
                    onBeforeLeave: qe,
                    onLeave: i => {
                        setTimeout(() => {
                            Ke(i)
                        })
                    },
                    onAfterLeave: Qe
                }, {
                    default: () => [r ? u("span", {
                        class: `${t}-loading-icon`
                    }, [u(_e, null, null)]) : null]
                })
            }
        }
    }),
    Ye = (e, o) => ({
        [`> span, > ${e}`]: {
            "&:not(:last-child)": {
                [`&, & > ${e}`]: {
                    "&:not(:disabled)": {
                        borderInlineEndColor: o
                    }
                }
            },
            "&:not(:first-child)": {
                [`&, & > ${e}`]: {
                    "&:not(:disabled)": {
                        borderInlineStartColor: o
                    }
                }
            }
        }
    }),
    rn = e => {
        const {
            componentCls: o,
            fontSize: t,
            lineWidth: n,
            colorPrimaryHover: r,
            colorErrorHover: i
        } = e;
        return {
            [`${o}-group`]: [{
                position: "relative",
                display: "inline-flex",
                [`> span, > ${o}`]: {
                    "&:not(:last-child)": {
                        [`&, & > ${o}`]: {
                            borderStartEndRadius: 0,
                            borderEndEndRadius: 0
                        }
                    },
                    "&:not(:first-child)": {
                        marginInlineStart: -n,
                        [`&, & > ${o}`]: {
                            borderStartStartRadius: 0,
                            borderEndStartRadius: 0
                        }
                    }
                },
                [o]: {
                    position: "relative",
                    zIndex: 1,
                    "&:hover,\n          &:focus,\n          &:active": {
                        zIndex: 2
                    },
                    "&[disabled]": {
                        zIndex: 0
                    }
                },
                [`${o}-icon-only`]: {
                    fontSize: t
                }
            }, Ye(`${o}-primary`, r), Ye(`${o}-danger`, i)]
        }
    };

function ln(e, o) {
    return {
        [`&-item:not(${o}-last-item)`]: {
            marginBottom: -e.lineWidth
        },
        "&-item": {
            "&:hover,&:focus,&:active": {
                zIndex: 2
            },
            "&[disabled]": {
                zIndex: 0
            }
        }
    }
}

function an(e, o) {
    return {
        [`&-item:not(${o}-first-item):not(${o}-last-item)`]: {
            borderRadius: 0
        },
        [`&-item${o}-first-item:not(${o}-last-item)`]: {
            [`&, &${e}-sm, &${e}-lg`]: {
                borderEndEndRadius: 0,
                borderEndStartRadius: 0
            }
        },
        [`&-item${o}-last-item:not(${o}-first-item)`]: {
            [`&, &${e}-sm, &${e}-lg`]: {
                borderStartStartRadius: 0,
                borderStartEndRadius: 0
            }
        }
    }
}

function sn(e) {
    const o = `${e.componentCls}-compact-vertical`;
    return {
        [o]: l(l({}, ln(e, o)), an(e.componentCls, o))
    }
}
const cn = e => {
        const {
            componentCls: o,
            iconCls: t
        } = e;
        return {
            [o]: {
                outline: "none",
                position: "relative",
                display: "inline-block",
                fontWeight: 400,
                whiteSpace: "nowrap",
                textAlign: "center",
                backgroundImage: "none",
                backgroundColor: "transparent",
                border: `${e.lineWidth}px ${e.lineType} transparent`,
                cursor: "pointer",
                transition: `all ${e.motionDurationMid} ${e.motionEaseInOut}`,
                userSelect: "none",
                touchAction: "manipulation",
                lineHeight: e.lineHeight,
                color: e.colorText,
                "> span": {
                    display: "inline-block"
                },
                [`> ${t} + span, > span + ${t}`]: {
                    marginInlineStart: e.marginXS
                },
                "> a": {
                    color: "currentColor"
                },
                "&:not(:disabled)": l({}, po(e)),
                [`&-icon-only${o}-compact-item`]: {
                    flex: "none"
                },
                [`&-compact-item${o}-primary`]: {
                    [`&:not([disabled]) + ${o}-compact-item${o}-primary:not([disabled])`]: {
                        position: "relative",
                        "&:before": {
                            position: "absolute",
                            top: -e.lineWidth,
                            insetInlineStart: -e.lineWidth,
                            display: "inline-block",
                            width: e.lineWidth,
                            height: `calc(100% + ${e.lineWidth*2}px)`,
                            backgroundColor: e.colorPrimaryHover,
                            content: '""'
                        }
                    }
                },
                "&-compact-vertical-item": {
                    [`&${o}-primary`]: {
                        [`&:not([disabled]) + ${o}-compact-vertical-item${o}-primary:not([disabled])`]: {
                            position: "relative",
                            "&:before": {
                                position: "absolute",
                                top: -e.lineWidth,
                                insetInlineStart: -e.lineWidth,
                                display: "inline-block",
                                width: `calc(100% + ${e.lineWidth*2}px)`,
                                height: e.lineWidth,
                                backgroundColor: e.colorPrimaryHover,
                                content: '""'
                            }
                        }
                    }
                }
            }
        }
    },
    X = (e, o) => ({
        "&:not(:disabled)": {
            "&:hover": e,
            "&:active": o
        }
    }),
    dn = e => ({
        minWidth: e.controlHeight,
        paddingInlineStart: 0,
        paddingInlineEnd: 0,
        borderRadius: "50%"
    }),
    un = e => ({
        borderRadius: e.controlHeight,
        paddingInlineStart: e.controlHeight / 2,
        paddingInlineEnd: e.controlHeight / 2
    }),
    ze = e => ({
        cursor: "not-allowed",
        borderColor: e.colorBorder,
        color: e.colorTextDisabled,
        backgroundColor: e.colorBgContainerDisabled,
        boxShadow: "none"
    }),
    Se = (e, o, t, n, r, i, d) => ({
        [`&${e}-background-ghost`]: l(l({
            color: o || void 0,
            backgroundColor: "transparent",
            borderColor: t || void 0,
            boxShadow: "none"
        }, X(l({
            backgroundColor: "transparent"
        }, i), l({
            backgroundColor: "transparent"
        }, d))), {
            "&:disabled": {
                cursor: "not-allowed",
                color: n || void 0,
                borderColor: r || void 0
            }
        })
    }),
    Re = e => ({
        "&:disabled": l({}, ze(e))
    }),
    Eo = e => l({}, Re(e)),
    $e = e => ({
        "&:disabled": {
            cursor: "not-allowed",
            color: e.colorTextDisabled
        }
    }),
    Oo = e => l(l(l(l(l({}, Eo(e)), {
        backgroundColor: e.colorBgContainer,
        borderColor: e.colorBorder,
        boxShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlTmpOutline}`
    }), X({
        color: e.colorPrimaryHover,
        borderColor: e.colorPrimaryHover
    }, {
        color: e.colorPrimaryActive,
        borderColor: e.colorPrimaryActive
    })), Se(e.componentCls, e.colorBgContainer, e.colorBgContainer, e.colorTextDisabled, e.colorBorder)), {
        [`&${e.componentCls}-dangerous`]: l(l(l({
            color: e.colorError,
            borderColor: e.colorError
        }, X({
            color: e.colorErrorHover,
            borderColor: e.colorErrorBorderHover
        }, {
            color: e.colorErrorActive,
            borderColor: e.colorErrorActive
        })), Se(e.componentCls, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder)), Re(e))
    }),
    fn = e => l(l(l(l(l({}, Eo(e)), {
        color: e.colorTextLightSolid,
        backgroundColor: e.colorPrimary,
        boxShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlOutline}`
    }), X({
        color: e.colorTextLightSolid,
        backgroundColor: e.colorPrimaryHover
    }, {
        color: e.colorTextLightSolid,
        backgroundColor: e.colorPrimaryActive
    })), Se(e.componentCls, e.colorPrimary, e.colorPrimary, e.colorTextDisabled, e.colorBorder, {
        color: e.colorPrimaryHover,
        borderColor: e.colorPrimaryHover
    }, {
        color: e.colorPrimaryActive,
        borderColor: e.colorPrimaryActive
    })), {
        [`&${e.componentCls}-dangerous`]: l(l(l({
            backgroundColor: e.colorError,
            boxShadow: `0 ${e.controlOutlineWidth}px 0 ${e.colorErrorOutline}`
        }, X({
            backgroundColor: e.colorErrorHover
        }, {
            backgroundColor: e.colorErrorActive
        })), Se(e.componentCls, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder, {
            color: e.colorErrorHover,
            borderColor: e.colorErrorHover
        }, {
            color: e.colorErrorActive,
            borderColor: e.colorErrorActive
        })), Re(e))
    }),
    mn = e => l(l({}, Oo(e)), {
        borderStyle: "dashed"
    }),
    pn = e => l(l(l({
        color: e.colorLink
    }, X({
        color: e.colorLinkHover
    }, {
        color: e.colorLinkActive
    })), $e(e)), {
        [`&${e.componentCls}-dangerous`]: l(l({
            color: e.colorError
        }, X({
            color: e.colorErrorHover
        }, {
            color: e.colorErrorActive
        })), $e(e))
    }),
    gn = e => l(l(l({}, X({
        color: e.colorText,
        backgroundColor: e.colorBgTextHover
    }, {
        color: e.colorText,
        backgroundColor: e.colorBgTextActive
    })), $e(e)), {
        [`&${e.componentCls}-dangerous`]: l(l({
            color: e.colorError
        }, $e(e)), X({
            color: e.colorErrorHover,
            backgroundColor: e.colorErrorBg
        }, {
            color: e.colorErrorHover,
            backgroundColor: e.colorErrorBg
        }))
    }),
    vn = e => l(l({}, ze(e)), {
        [`&${e.componentCls}:hover`]: l({}, ze(e))
    }),
    bn = e => {
        const {
            componentCls: o
        } = e;
        return {
            [`${o}-default`]: Oo(e),
            [`${o}-primary`]: fn(e),
            [`${o}-dashed`]: mn(e),
            [`${o}-link`]: pn(e),
            [`${o}-text`]: gn(e),
            [`${o}-disabled`]: vn(e)
        }
    },
    Le = function(e) {
        let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
        const {
            componentCls: t,
            iconCls: n,
            controlHeight: r,
            fontSize: i,
            lineHeight: d,
            lineWidth: p,
            borderRadius: b,
            buttonPaddingHorizontal: g
        } = e, s = Math.max(0, (r - i * d) / 2 - p), c = g - p, a = `${t}-icon-only`;
        return [{
            [`${t}${o}`]: {
                fontSize: i,
                height: r,
                padding: `${s}px ${c}px`,
                borderRadius: b,
                [`&${a}`]: {
                    width: r,
                    paddingInlineStart: 0,
                    paddingInlineEnd: 0,
                    [`&${t}-round`]: {
                        width: "auto"
                    },
                    "> span": {
                        transform: "scale(1.143)"
                    }
                },
                [`&${t}-loading`]: {
                    opacity: e.opacityLoading,
                    cursor: "default"
                },
                [`${t}-loading-icon`]: {
                    transition: `width ${e.motionDurationSlow} ${e.motionEaseInOut}, opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`
                },
                [`&:not(${a}) ${t}-loading-icon > ${n}`]: {
                    marginInlineEnd: e.marginXS
                }
            }
        }, {
            [`${t}${t}-circle${o}`]: dn(e)
        }, {
            [`${t}${t}-round${o}`]: un(e)
        }]
    },
    Cn = e => Le(e),
    yn = e => {
        const o = we(e, {
            controlHeight: e.controlHeightSM,
            padding: e.paddingXS,
            buttonPaddingHorizontal: 8,
            borderRadius: e.borderRadiusSM
        });
        return Le(o, `${e.componentCls}-sm`)
    },
    hn = e => {
        const o = we(e, {
            controlHeight: e.controlHeightLG,
            fontSize: e.fontSizeLG,
            borderRadius: e.borderRadiusLG
        });
        return Le(o, `${e.componentCls}-lg`)
    },
    Sn = e => {
        const {
            componentCls: o
        } = e;
        return {
            [o]: {
                [`&${o}-block`]: {
                    width: "100%"
                }
            }
        }
    },
    $n = xe("Button", e => {
        const {
            controlTmpOutline: o,
            paddingContentHorizontal: t
        } = e, n = we(e, {
            colorOutlineDefault: o,
            buttonPaddingHorizontal: t
        });
        return [cn(n), yn(n), Cn(n), hn(n), Sn(n), bn(n), rn(n), bt(e, {
            focus: !1
        }), sn(e)]
    }),
    xn = () => ({
        prefixCls: String,
        size: {
            type: String
        }
    }),
    zo = Co(),
    Ae = H({
        compatConfig: {
            MODE: 3
        },
        name: "AButtonGroup",
        props: xn(),
        setup(e, o) {
            let {
                slots: t
            } = o;
            const {
                prefixCls: n,
                direction: r
            } = ae("btn-group", e), [, , i] = Go();
            zo.useProvide($t({
                size: A(() => e.size)
            }));
            const d = A(() => {
                const {
                    size: p
                } = e;
                let b = "";
                switch (p) {
                    case "large":
                        b = "lg";
                        break;
                    case "small":
                        b = "sm";
                        break;
                    case "middle":
                    case void 0:
                        break;
                    default:
                        To(!p, "Button.Group", "Invalid prop `size`.")
                }
                return {
                    [`${n.value}`]: !0,
                    [`${n.value}-${b}`]: b,
                    [`${n.value}-rtl`]: r.value === "rtl",
                    [i.value]: !0
                }
            });
            return () => {
                var p;
                return u("div", {
                    class: d.value
                }, [He((p = t.default) === null || p === void 0 ? void 0 : p.call(t))])
            }
        }
    }),
    Je = /^[\u4e00-\u9fa5]{2}$/,
    Ze = Je.test.bind(Je);

function ve(e) {
    return e === "text" || e === "link"
}
const ee = H({
    compatConfig: {
        MODE: 3
    },
    name: "AButton",
    inheritAttrs: !1,
    __ANT_BUTTON: !0,
    props: ue(tn(), {
        type: "default"
    }),
    slots: Object,
    setup(e, o) {
        let {
            slots: t,
            attrs: n,
            emit: r,
            expose: i
        } = o;
        const {
            prefixCls: d,
            autoInsertSpaceInButton: p,
            direction: b,
            size: g
        } = ae("btn", e), [s, c] = $n(d), a = zo.useInject(), f = Vo(), C = A(() => {
            var v;
            return (v = e.disabled) !== null && v !== void 0 ? v : f.value
        }), S = B(null), $ = B(void 0);
        let m = !1;
        const y = B(!1),
            h = B(!1),
            P = A(() => p.value !== !1),
            {
                compactSize: E,
                compactItemClassnames: F
            } = jt(d, b),
            x = A(() => typeof e.loading == "object" && e.loading.delay ? e.loading.delay || !0 : !!e.loading);
        oe(x, v => {
            clearTimeout($.value), typeof x.value == "number" ? $.value = setTimeout(() => {
                y.value = v
            }, x.value) : y.value = v
        }, {
            immediate: !0
        });
        const T = A(() => {
                const {
                    type: v,
                    shape: z = "default",
                    ghost: N,
                    block: O,
                    danger: Q
                } = e, R = d.value, V = {
                    large: "lg",
                    small: "sm",
                    middle: void 0
                }, ne = E.value || (a == null ? void 0 : a.size) || g.value, Y = ne && V[ne] || "";
                return [F.value, {
                    [c.value]: !0,
                    [`${R}`]: !0,
                    [`${R}-${z}`]: z !== "default" && z,
                    [`${R}-${v}`]: v,
                    [`${R}-${Y}`]: Y,
                    [`${R}-loading`]: y.value,
                    [`${R}-background-ghost`]: N && !ve(v),
                    [`${R}-two-chinese-chars`]: h.value && P.value,
                    [`${R}-block`]: O,
                    [`${R}-dangerous`]: !!Q,
                    [`${R}-rtl`]: b.value === "rtl"
                }]
            }),
            D = () => {
                const v = S.value;
                if (!v || p.value === !1) return;
                const z = v.textContent;
                m && Ze(z) ? h.value || (h.value = !0) : h.value && (h.value = !1)
            },
            M = v => {
                if (y.value || C.value) {
                    v.preventDefault();
                    return
                }
                r("click", v)
            },
            W = v => {
                r("mousedown", v)
            },
            _ = (v, z) => {
                const N = z ? " " : "";
                if (v.type === wt) {
                    let O = v.children.trim();
                    return Ze(O) && (O = O.split("").join(N)), u("span", null, [O])
                }
                return v
            };
        return So(() => {
            To(!(e.ghost && ve(e.type)), "Button", "`link` or `text` button can't be a `ghost` button.")
        }), fe(D), xt(D), te(() => {
            $.value && clearTimeout($.value)
        }), i({
            focus: () => {
                var v;
                (v = S.value) === null || v === void 0 || v.focus()
            },
            blur: () => {
                var v;
                (v = S.value) === null || v === void 0 || v.blur()
            }
        }), () => {
            var v, z;
            const {
                icon: N = (v = t.icon) === null || v === void 0 ? void 0 : v.call(t)
            } = e, O = He((z = t.default) === null || z === void 0 ? void 0 : z.call(t));
            m = O.length === 1 && !N && !ve(e.type);
            const {
                type: Q,
                htmlType: R,
                href: V,
                title: ne,
                target: Y
            } = e, pe = y.value ? "loading" : N, K = l(l({}, n), {
                title: ne,
                disabled: C.value,
                class: [T.value, n.class, {
                    [`${d.value}-icon-only`]: O.length === 0 && !!pe
                }],
                onClick: M,
                onMousedown: W
            });
            C.value || delete K.disabled;
            const ge = N && !y.value ? N : u(nn, {
                    existIcon: !!N,
                    prefixCls: d.value,
                    loading: !!y.value
                }, null),
                re = O.map(se => _(se, m && P.value));
            if (V !== void 0) return s(u("a", w(w({}, K), {}, {
                href: V,
                target: Y,
                ref: S
            }), [ge, re]));
            let ie = u("button", w(w({}, K), {}, {
                ref: S,
                type: R
            }), [ge, re]);
            if (!ve(Q)) {
                const se = (function() {
                    return ie
                })();
                ie = u(on, {
                    ref: "wave",
                    disabled: !!y.value
                }, {
                    default: () => [se]
                })
            }
            return s(ie)
        }
    }
});
ee.Group = Ae;
ee.install = function(e) {
    return e.component(ee.name, ee), e.component(Ae.name, Ae), e
};
const Ao = () => go() && window.document.documentElement,
    Fo = e => {
        if (go() && window.document.documentElement) {
            const o = Array.isArray(e) ? e : [e],
                {
                    documentElement: t
                } = window.document;
            return o.some(n => n in t.style)
        }
        return !1
    },
    wn = (e, o) => {
        if (!Fo(e)) return !1;
        const t = document.createElement("div"),
            n = t.style[e];
        return t.style[e] = o, t.style[e] !== n
    };

function ir(e, o) {
    return !Array.isArray(e) && o !== void 0 ? wn(e, o) : Fo(e)
}
let be;
const Tn = () => {
        if (!Ao()) return !1;
        if (be !== void 0) return be;
        const e = document.createElement("div");
        return e.style.display = "flex", e.style.flexDirection = "column", e.style.rowGap = "1px", e.appendChild(document.createElement("div")), e.appendChild(document.createElement("div")), document.body.appendChild(e), be = e.scrollHeight === 1, document.body.removeChild(e), be
    },
    Bn = (() => {
        const e = B(!1);
        return fe(() => {
            e.value = Tn()
        }), e
    });

function Me() {
    return {
        keyboard: {
            type: Boolean,
            default: void 0
        },
        mask: {
            type: Boolean,
            default: void 0
        },
        afterClose: Function,
        closable: {
            type: Boolean,
            default: void 0
        },
        maskClosable: {
            type: Boolean,
            default: void 0
        },
        visible: {
            type: Boolean,
            default: void 0
        },
        destroyOnClose: {
            type: Boolean,
            default: void 0
        },
        mousePosition: I.shape({
            x: Number,
            y: Number
        }).loose,
        title: I.any,
        footer: I.any,
        transitionName: String,
        maskTransitionName: String,
        animation: I.any,
        maskAnimation: I.any,
        wrapStyle: {
            type: Object,
            default: void 0
        },
        bodyStyle: {
            type: Object,
            default: void 0
        },
        maskStyle: {
            type: Object,
            default: void 0
        },
        prefixCls: String,
        wrapClassName: String,
        rootClassName: String,
        width: [String, Number],
        height: [String, Number],
        zIndex: Number,
        bodyProps: I.any,
        maskProps: I.any,
        wrapProps: I.any,
        getContainer: I.any,
        dialogStyle: {
            type: Object,
            default: void 0
        },
        dialogClass: String,
        closeIcon: I.any,
        forceRender: {
            type: Boolean,
            default: void 0
        },
        getOpenCount: Function,
        focusTriggerAfterClose: {
            type: Boolean,
            default: void 0
        },
        onClose: Function,
        modalRender: Function
    }
}

function ke(e, o, t) {
    let n = o;
    return !n && t && (n = `${e}-${t}`), n
}
let eo = -1;

function Pn() {
    return eo += 1, eo
}

function oo(e, o) {
    let t = e[`page${o?"Y":"X"}Offset`];
    const n = `scroll${o?"Top":"Left"}`;
    if (typeof t != "number") {
        const r = e.document;
        t = r.documentElement[n], typeof t != "number" && (t = r.body[n])
    }
    return t
}

function In(e) {
    const o = e.getBoundingClientRect(),
        t = {
            left: o.left,
            top: o.top
        },
        n = e.ownerDocument,
        r = n.defaultView || n.parentWindow;
    return t.left += oo(r), t.top += oo(r, !0), t
}
const En = {
        width: 0,
        height: 0,
        overflow: "hidden",
        outline: "none"
    },
    On = {
        outline: "none"
    },
    zn = H({
        compatConfig: {
            MODE: 3
        },
        name: "DialogContent",
        inheritAttrs: !1,
        props: l(l({}, Me()), {
            motionName: String,
            ariaId: String,
            onVisibleChanged: Function,
            onMousedown: Function,
            onMouseup: Function
        }),
        setup(e, o) {
            let {
                expose: t,
                slots: n,
                attrs: r
            } = o;
            const i = q(),
                d = q(),
                p = q();
            t({
                focus: () => {
                    var a;
                    (a = i.value) === null || a === void 0 || a.focus({
                        preventScroll: !0
                    })
                },
                changeActive: a => {
                    const {
                        activeElement: f
                    } = document;
                    a && f === d.value ? i.value.focus({
                        preventScroll: !0
                    }) : !a && f === i.value && d.value.focus({
                        preventScroll: !0
                    })
                }
            });
            const b = q(),
                g = A(() => {
                    const {
                        width: a,
                        height: f
                    } = e, C = {};
                    return a !== void 0 && (C.width = typeof a == "number" ? `${a}px` : a), f !== void 0 && (C.height = typeof f == "number" ? `${f}px` : f), b.value && (C.transformOrigin = b.value), C
                }),
                s = () => {
                    Ne(() => {
                        if (p.value) {
                            const a = In(p.value);
                            b.value = e.mousePosition ? `${e.mousePosition.x-a.left}px ${e.mousePosition.y-a.top}px` : ""
                        }
                    })
                },
                c = a => {
                    e.onVisibleChanged(a)
                };
            return () => {
                var a, f, C, S;
                const {
                    prefixCls: $,
                    footer: m = (a = n.footer) === null || a === void 0 ? void 0 : a.call(n),
                    title: y = (f = n.title) === null || f === void 0 ? void 0 : f.call(n),
                    ariaId: h,
                    closable: P,
                    closeIcon: E = (C = n.closeIcon) === null || C === void 0 ? void 0 : C.call(n),
                    onClose: F,
                    bodyStyle: x,
                    bodyProps: T,
                    onMousedown: D,
                    onMouseup: M,
                    visible: W,
                    modalRender: _ = n.modalRender,
                    destroyOnClose: j,
                    motionName: L
                } = e;
                let v;
                m && (v = u("div", {
                    class: `${$}-footer`
                }, [m]));
                let z;
                y && (z = u("div", {
                    class: `${$}-header`
                }, [u("div", {
                    class: `${$}-title`,
                    id: h
                }, [y])]));
                let N;
                P && (N = u("button", {
                    type: "button",
                    onClick: F,
                    "aria-label": "Close",
                    class: `${$}-close`
                }, [E || u("span", {
                    class: `${$}-close-x`
                }, null)]));
                const O = u("div", {
                        class: `${$}-content`
                    }, [N, z, u("div", w({
                        class: `${$}-body`,
                        style: x
                    }, T), [(S = n.default) === null || S === void 0 ? void 0 : S.call(n)]), v]),
                    Q = vo(L);
                return u(Te, w(w({}, Q), {}, {
                    onBeforeEnter: s,
                    onAfterEnter: () => c(!0),
                    onAfterLeave: () => c(!1)
                }), {
                    default: () => [W || !j ? $o(u("div", w(w({}, r), {}, {
                        ref: p,
                        key: "dialog-element",
                        role: "document",
                        style: [g.value, r.style],
                        class: [$, r.class],
                        onMousedown: D,
                        onMouseup: M
                    }), [u("div", {
                        tabindex: 0,
                        ref: i,
                        style: On
                    }, [_ ? _({
                        originVNode: O
                    }) : O]), u("div", {
                        tabindex: 0,
                        ref: d,
                        style: En
                    }, null)]), [
                        [xo, W]
                    ]) : null]
                })
            }
        }
    }),
    An = H({
        compatConfig: {
            MODE: 3
        },
        name: "DialogMask",
        props: {
            prefixCls: String,
            visible: Boolean,
            motionName: String,
            maskProps: Object
        },
        setup(e, o) {
            return () => {
                const {
                    prefixCls: t,
                    visible: n,
                    maskProps: r,
                    motionName: i
                } = e, d = vo(i);
                return u(Te, d, {
                    default: () => [$o(u("div", w({
                        class: `${t}-mask`
                    }, r), null), [
                        [xo, n]
                    ])]
                })
            }
        }
    }),
    to = H({
        compatConfig: {
            MODE: 3
        },
        name: "VcDialog",
        inheritAttrs: !1,
        props: ue(l(l({}, Me()), {
            getOpenCount: Function,
            scrollLocker: Object
        }), {
            mask: !0,
            visible: !1,
            keyboard: !0,
            closable: !0,
            maskClosable: !0,
            destroyOnClose: !1,
            prefixCls: "rc-dialog",
            getOpenCount: () => null,
            focusTriggerAfterClose: !0
        }),
        setup(e, o) {
            let {
                attrs: t,
                slots: n
            } = o;
            const r = B(),
                i = B(),
                d = B(),
                p = B(e.visible),
                b = B(`vcDialogTitle${Pn()}`),
                g = m => {
                    var y, h;
                    if (m) Uo(i.value, document.activeElement) || (r.value = document.activeElement, (y = d.value) === null || y === void 0 || y.focus());
                    else {
                        const P = p.value;
                        if (p.value = !1, e.mask && r.value && e.focusTriggerAfterClose) {
                            try {
                                r.value.focus({
                                    preventScroll: !0
                                })
                            } catch {}
                            r.value = null
                        }
                        P && ((h = e.afterClose) === null || h === void 0 || h.call(e))
                    }
                },
                s = m => {
                    var y;
                    (y = e.onClose) === null || y === void 0 || y.call(e, m)
                },
                c = B(!1),
                a = B(),
                f = () => {
                    clearTimeout(a.value), c.value = !0
                },
                C = () => {
                    a.value = setTimeout(() => {
                        c.value = !1
                    })
                },
                S = m => {
                    if (!e.maskClosable) return null;
                    c.value ? c.value = !1 : i.value === m.target && s(m)
                },
                $ = m => {
                    if (e.keyboard && m.keyCode === Ve.ESC) {
                        m.stopPropagation(), s(m);
                        return
                    }
                    e.visible && m.keyCode === Ve.TAB && d.value.changeActive(!m.shiftKey)
                };
            return oe(() => e.visible, () => {
                e.visible && (p.value = !0)
            }, {
                flush: "post"
            }), te(() => {
                var m;
                clearTimeout(a.value), (m = e.scrollLocker) === null || m === void 0 || m.unLock()
            }), So(() => {
                var m, y;
                (m = e.scrollLocker) === null || m === void 0 || m.unLock(), p.value && ((y = e.scrollLocker) === null || y === void 0 || y.lock())
            }), () => {
                const {
                    prefixCls: m,
                    mask: y,
                    visible: h,
                    maskTransitionName: P,
                    maskAnimation: E,
                    zIndex: F,
                    wrapClassName: x,
                    rootClassName: T,
                    wrapStyle: D,
                    closable: M,
                    maskProps: W,
                    maskStyle: _,
                    transitionName: j,
                    animation: L,
                    wrapProps: v,
                    title: z = n.title
                } = e, {
                    style: N,
                    class: O
                } = t;
                return u("div", w({
                    class: [`${m}-root`, T]
                }, Ht(e, {
                    data: !0
                })), [u(An, {
                    prefixCls: m,
                    visible: y && h,
                    motionName: ke(m, P, E),
                    style: l({
                        zIndex: F
                    }, _),
                    maskProps: W
                }, null), u("div", w({
                    tabIndex: -1,
                    onKeydown: $,
                    class: U(`${m}-wrap`, x),
                    ref: i,
                    onClick: S,
                    role: "dialog",
                    "aria-labelledby": z ? b.value : null,
                    style: l(l({
                        zIndex: F
                    }, D), {
                        display: p.value ? null : "none"
                    })
                }, v), [u(zn, w(w({}, yo(e, ["scrollLocker"])), {}, {
                    style: N,
                    class: O,
                    onMousedown: f,
                    onMouseup: C,
                    ref: d,
                    closable: M,
                    ariaId: b.value,
                    prefixCls: m,
                    visible: h,
                    onClose: s,
                    onVisibleChanged: g,
                    motionName: ke(m, j, L)
                }), n)])])
            }
        }
    }),
    Fn = Me(),
    Hn = H({
        compatConfig: {
            MODE: 3
        },
        name: "DialogWrap",
        inheritAttrs: !1,
        props: ue(Fn, {
            visible: !1
        }),
        setup(e, o) {
            let {
                attrs: t,
                slots: n
            } = o;
            const r = q(e.visible);
            return Xo({}, {
                inTriggerContext: !1
            }), oe(() => e.visible, () => {
                e.visible && (r.value = !0)
            }, {
                flush: "post"
            }), () => {
                const {
                    visible: i,
                    getContainer: d,
                    forceRender: p,
                    destroyOnClose: b = !1,
                    afterClose: g
                } = e;
                let s = l(l(l({}, e), t), {
                    ref: "_component",
                    key: "dialog"
                });
                return d === !1 ? u(to, w(w({}, s), {}, {
                    getOpenCount: () => 2
                }), n) : !p && b && !r.value ? null : u(Ct, {
                    autoLock: !0,
                    visible: i,
                    forceRender: p,
                    getContainer: d
                }, {
                    default: c => (s = l(l(l({}, s), c), {
                        afterClose: () => {
                            g == null || g(), r.value = !1
                        }
                    }), u(to, s, n))
                })
            }
        }
    });

function no(e) {
    return {
        position: e,
        top: 0,
        insetInlineEnd: 0,
        bottom: 0,
        insetInlineStart: 0
    }
}
const Dn = e => {
        const {
            componentCls: o
        } = e;
        return [{
            [`${o}-root`]: {
                [`${o}${e.antCls}-zoom-enter, ${o}${e.antCls}-zoom-appear`]: {
                    transform: "none",
                    opacity: 0,
                    animationDuration: e.motionDurationSlow,
                    userSelect: "none"
                },
                [`${o}${e.antCls}-zoom-leave ${o}-content`]: {
                    pointerEvents: "none"
                },
                [`${o}-mask`]: l(l({}, no("fixed")), {
                    zIndex: e.zIndexPopupBase,
                    height: "100%",
                    backgroundColor: e.colorBgMask,
                    [`${o}-hidden`]: {
                        display: "none"
                    }
                }),
                [`${o}-wrap`]: l(l({}, no("fixed")), {
                    overflow: "auto",
                    outline: 0,
                    WebkitOverflowScrolling: "touch"
                })
            }
        }, {
            [`${o}-root`]: Kt(e)
        }]
    },
    Nn = e => {
        const {
            componentCls: o
        } = e;
        return [{
            [`${o}-root`]: {
                [`${o}-wrap`]: {
                    zIndex: e.zIndexPopupBase,
                    position: "fixed",
                    inset: 0,
                    overflow: "auto",
                    outline: 0,
                    WebkitOverflowScrolling: "touch"
                },
                [`${o}-wrap-rtl`]: {
                    direction: "rtl"
                },
                [`${o}-centered`]: {
                    textAlign: "center",
                    "&::before": {
                        display: "inline-block",
                        width: 0,
                        height: "100%",
                        verticalAlign: "middle",
                        content: '""'
                    },
                    [o]: {
                        top: 0,
                        display: "inline-block",
                        paddingBottom: 0,
                        textAlign: "start",
                        verticalAlign: "middle"
                    }
                },
                [`@media (max-width: ${e.screenSMMax})`]: {
                    [o]: {
                        maxWidth: "calc(100vw - 16px)",
                        margin: `${e.marginXS} auto`
                    },
                    [`${o}-centered`]: {
                        [o]: {
                            flex: 1
                        }
                    }
                }
            }
        }, {
            [o]: l(l({}, Ko(e)), {
                pointerEvents: "none",
                position: "relative",
                top: 100,
                width: "auto",
                maxWidth: `calc(100vw - ${e.margin*2}px)`,
                margin: "0 auto",
                paddingBottom: e.paddingLG,
                [`${o}-title`]: {
                    margin: 0,
                    color: e.modalHeadingColor,
                    fontWeight: e.fontWeightStrong,
                    fontSize: e.modalHeaderTitleFontSize,
                    lineHeight: e.modalHeaderTitleLineHeight,
                    wordWrap: "break-word"
                },
                [`${o}-content`]: {
                    position: "relative",
                    backgroundColor: e.modalContentBg,
                    backgroundClip: "padding-box",
                    border: 0,
                    borderRadius: e.borderRadiusLG,
                    boxShadow: e.boxShadowSecondary,
                    pointerEvents: "auto",
                    padding: `${e.paddingMD}px ${e.paddingContentHorizontalLG}px`
                },
                [`${o}-close`]: l({
                    position: "absolute",
                    top: (e.modalHeaderCloseSize - e.modalCloseBtnSize) / 2,
                    insetInlineEnd: (e.modalHeaderCloseSize - e.modalCloseBtnSize) / 2,
                    zIndex: e.zIndexPopupBase + 10,
                    padding: 0,
                    color: e.modalCloseColor,
                    fontWeight: e.fontWeightStrong,
                    lineHeight: 1,
                    textDecoration: "none",
                    background: "transparent",
                    borderRadius: e.borderRadiusSM,
                    width: e.modalConfirmIconSize,
                    height: e.modalConfirmIconSize,
                    border: 0,
                    outline: 0,
                    cursor: "pointer",
                    transition: `color ${e.motionDurationMid}, background-color ${e.motionDurationMid}`,
                    "&-x": {
                        display: "block",
                        fontSize: e.fontSizeLG,
                        fontStyle: "normal",
                        lineHeight: `${e.modalCloseBtnSize}px`,
                        textAlign: "center",
                        textTransform: "none",
                        textRendering: "auto"
                    },
                    "&:hover": {
                        color: e.modalIconHoverColor,
                        backgroundColor: e.wireframe ? "transparent" : e.colorFillContent,
                        textDecoration: "none"
                    },
                    "&:active": {
                        backgroundColor: e.wireframe ? "transparent" : e.colorFillContentHover
                    }
                }, po(e)),
                [`${o}-header`]: {
                    color: e.colorText,
                    background: e.modalHeaderBg,
                    borderRadius: `${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`,
                    marginBottom: e.marginXS
                },
                [`${o}-body`]: {
                    fontSize: e.fontSize,
                    lineHeight: e.lineHeight,
                    wordWrap: "break-word"
                },
                [`${o}-footer`]: {
                    textAlign: "end",
                    background: e.modalFooterBg,
                    marginTop: e.marginSM,
                    [`${e.antCls}-btn + ${e.antCls}-btn:not(${e.antCls}-dropdown-trigger)`]: {
                        marginBottom: 0,
                        marginInlineStart: e.marginXS
                    }
                },
                [`${o}-open`]: {
                    overflow: "hidden"
                }
            })
        }, {
            [`${o}-pure-panel`]: {
                top: "auto",
                padding: 0,
                display: "flex",
                flexDirection: "column",
                [`${o}-content,
          ${o}-body,
          ${o}-confirm-body-wrapper`]: {
                    display: "flex",
                    flexDirection: "column",
                    flex: "auto"
                },
                [`${o}-confirm-body`]: {
                    marginBottom: "auto"
                }
            }
        }]
    },
    Rn = e => {
        const {
            componentCls: o
        } = e, t = `${o}-confirm`;
        return {
            [t]: {
                "&-rtl": {
                    direction: "rtl"
                },
                [`${e.antCls}-modal-header`]: {
                    display: "none"
                },
                [`${t}-body-wrapper`]: l({}, qo()),
                [`${t}-body`]: {
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    [`${t}-title`]: {
                        flex: "0 0 100%",
                        display: "block",
                        overflow: "hidden",
                        color: e.colorTextHeading,
                        fontWeight: e.fontWeightStrong,
                        fontSize: e.modalHeaderTitleFontSize,
                        lineHeight: e.modalHeaderTitleLineHeight,
                        [`+ ${t}-content`]: {
                            marginBlockStart: e.marginXS,
                            flexBasis: "100%",
                            maxWidth: `calc(100% - ${e.modalConfirmIconSize+e.marginSM}px)`
                        }
                    },
                    [`${t}-content`]: {
                        color: e.colorText,
                        fontSize: e.fontSize
                    },
                    [`> ${e.iconCls}`]: {
                        flex: "none",
                        marginInlineEnd: e.marginSM,
                        fontSize: e.modalConfirmIconSize,
                        [`+ ${t}-title`]: {
                            flex: 1
                        },
                        [`+ ${t}-title + ${t}-content`]: {
                            marginInlineStart: e.modalConfirmIconSize + e.marginSM
                        }
                    }
                },
                [`${t}-btns`]: {
                    textAlign: "end",
                    marginTop: e.marginSM,
                    [`${e.antCls}-btn + ${e.antCls}-btn`]: {
                        marginBottom: 0,
                        marginInlineStart: e.marginXS
                    }
                }
            },
            [`${t}-error ${t}-body > ${e.iconCls}`]: {
                color: e.colorError
            },
            [`${t}-warning ${t}-body > ${e.iconCls},
        ${t}-confirm ${t}-body > ${e.iconCls}`]: {
                color: e.colorWarning
            },
            [`${t}-info ${t}-body > ${e.iconCls}`]: {
                color: e.colorInfo
            },
            [`${t}-success ${t}-body > ${e.iconCls}`]: {
                color: e.colorSuccess
            },
            [`${o}-zoom-leave ${o}-btns`]: {
                pointerEvents: "none"
            }
        }
    },
    Ln = e => {
        const {
            componentCls: o
        } = e;
        return {
            [`${o}-root`]: {
                [`${o}-wrap-rtl`]: {
                    direction: "rtl",
                    [`${o}-confirm-body`]: {
                        direction: "rtl"
                    }
                }
            }
        }
    },
    Mn = e => {
        const {
            componentCls: o,
            antCls: t
        } = e, n = `${o}-confirm`;
        return {
            [o]: {
                [`${o}-content`]: {
                    padding: 0
                },
                [`${o}-header`]: {
                    padding: e.modalHeaderPadding,
                    borderBottom: `${e.modalHeaderBorderWidth}px ${e.modalHeaderBorderStyle} ${e.modalHeaderBorderColorSplit}`,
                    marginBottom: 0
                },
                [`${o}-body`]: {
                    padding: e.modalBodyPadding
                },
                [`${o}-footer`]: {
                    padding: `${e.modalFooterPaddingVertical}px ${e.modalFooterPaddingHorizontal}px`,
                    borderTop: `${e.modalFooterBorderWidth}px ${e.modalFooterBorderStyle} ${e.modalFooterBorderColorSplit}`,
                    borderRadius: `0 0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px`,
                    marginTop: 0
                }
            },
            [n]: {
                [`${t}-modal-body`]: {
                    padding: `${e.padding*2}px ${e.padding*2}px ${e.paddingLG}px`
                },
                [`${n}-body`]: {
                    [`> ${e.iconCls}`]: {
                        marginInlineEnd: e.margin,
                        [`+ ${n}-title + ${n}-content`]: {
                            marginInlineStart: e.modalConfirmIconSize + e.margin
                        }
                    }
                },
                [`${n}-btns`]: {
                    marginTop: e.marginLG
                }
            }
        }
    },
    Wn = xe("Modal", e => {
        const o = e.padding,
            t = e.fontSizeHeading5,
            n = e.lineHeightHeading5,
            r = we(e, {
                modalBodyPadding: e.paddingLG,
                modalHeaderBg: e.colorBgElevated,
                modalHeaderPadding: `${o}px ${e.paddingLG}px`,
                modalHeaderBorderWidth: e.lineWidth,
                modalHeaderBorderStyle: e.lineType,
                modalHeaderTitleLineHeight: n,
                modalHeaderTitleFontSize: t,
                modalHeaderBorderColorSplit: e.colorSplit,
                modalHeaderCloseSize: n * t + o * 2,
                modalContentBg: e.colorBgElevated,
                modalHeadingColor: e.colorTextHeading,
                modalCloseColor: e.colorTextDescription,
                modalFooterBg: "transparent",
                modalFooterBorderColorSplit: e.colorSplit,
                modalFooterBorderStyle: e.lineType,
                modalFooterPaddingVertical: e.paddingXS,
                modalFooterPaddingHorizontal: e.padding,
                modalFooterBorderWidth: e.lineWidth,
                modalConfirmTitleFontSize: e.fontSizeLG,
                modalIconHoverColor: e.colorIconHover,
                modalConfirmIconSize: e.fontSize * e.lineHeight,
                modalCloseBtnSize: e.controlHeightLG * .55
            });
        return [Nn(r), Rn(r), Ln(r), Dn(r), e.wireframe && Mn(r), yt(r, "zoom")]
    });
var _n = function(e, o) {
    var t = {};
    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && o.indexOf(n) < 0 && (t[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++) o.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (t[n[r]] = e[n[r]]);
    return t
};
let Fe;
const jn = e => {
    Fe = {
        x: e.pageX,
        y: e.pageY
    }, setTimeout(() => Fe = null, 100)
};
Ao() && ht(document.documentElement, "click", jn, !0);
const Gn = () => ({
        prefixCls: String,
        visible: {
            type: Boolean,
            default: void 0
        },
        open: {
            type: Boolean,
            default: void 0
        },
        confirmLoading: {
            type: Boolean,
            default: void 0
        },
        title: I.any,
        closable: {
            type: Boolean,
            default: void 0
        },
        closeIcon: I.any,
        onOk: Function,
        onCancel: Function,
        "onUpdate:visible": Function,
        "onUpdate:open": Function,
        onChange: Function,
        afterClose: Function,
        centered: {
            type: Boolean,
            default: void 0
        },
        width: [String, Number],
        footer: I.any,
        okText: I.any,
        okType: String,
        cancelText: I.any,
        icon: I.any,
        maskClosable: {
            type: Boolean,
            default: void 0
        },
        forceRender: {
            type: Boolean,
            default: void 0
        },
        okButtonProps: Z(),
        cancelButtonProps: Z(),
        destroyOnClose: {
            type: Boolean,
            default: void 0
        },
        wrapClassName: String,
        maskTransitionName: String,
        transitionName: String,
        getContainer: {
            type: [String, Function, Boolean, Object],
            default: void 0
        },
        zIndex: Number,
        bodyStyle: Z(),
        maskStyle: Z(),
        mask: {
            type: Boolean,
            default: void 0
        },
        keyboard: {
            type: Boolean,
            default: void 0
        },
        wrapProps: Object,
        focusTriggerAfterClose: {
            type: Boolean,
            default: void 0
        },
        modalRender: Function,
        mousePosition: Z()
    }),
    G = H({
        compatConfig: {
            MODE: 3
        },
        name: "AModal",
        inheritAttrs: !1,
        props: ue(Gn(), {
            width: 520,
            confirmLoading: !1,
            okType: "primary"
        }),
        setup(e, o) {
            let {
                emit: t,
                slots: n,
                attrs: r
            } = o;
            const [i] = De("Modal"), {
                prefixCls: d,
                rootPrefixCls: p,
                direction: b,
                getPopupContainer: g
            } = ae("modal", e), [s, c] = Wn(d);
            Qo(e.visible === void 0);
            const a = S => {
                    t("update:visible", !1), t("update:open", !1), t("cancel", S), t("change", !1)
                },
                f = S => {
                    t("ok", S)
                },
                C = () => {
                    var S, $;
                    const {
                        okText: m = (S = n.okText) === null || S === void 0 ? void 0 : S.call(n),
                        okType: y,
                        cancelText: h = ($ = n.cancelText) === null || $ === void 0 ? void 0 : $.call(n),
                        confirmLoading: P
                    } = e;
                    return u(wo, null, [u(ee, w({
                        onClick: a
                    }, e.cancelButtonProps), {
                        default: () => [h || i.value.cancelText]
                    }), u(ee, w(w({}, Io(y)), {}, {
                        loading: P,
                        onClick: f
                    }, e.okButtonProps), {
                        default: () => [m || i.value.okText]
                    })])
                };
            return () => {
                var S, $;
                const {
                    prefixCls: m,
                    visible: y,
                    open: h,
                    wrapClassName: P,
                    centered: E,
                    getContainer: F,
                    closeIcon: x = (S = n.closeIcon) === null || S === void 0 ? void 0 : S.call(n),
                    focusTriggerAfterClose: T = !0
                } = e, D = _n(e, ["prefixCls", "visible", "open", "wrapClassName", "centered", "getContainer", "closeIcon", "focusTriggerAfterClose"]), M = U(P, {
                    [`${d.value}-centered`]: !!E,
                    [`${d.value}-wrap-rtl`]: b.value === "rtl"
                });
                return s(u(Hn, w(w(w({}, D), r), {}, {
                    rootClassName: c.value,
                    class: U(c.value, r.class),
                    getContainer: F || (g == null ? void 0 : g.value),
                    prefixCls: d.value,
                    wrapClassName: M,
                    visible: h ?? y,
                    onClose: a,
                    focusTriggerAfterClose: T,
                    transitionName: he(p.value, "zoom", e.transitionName),
                    maskTransitionName: he(p.value, "fade", e.maskTransitionName),
                    mousePosition: ($ = D.mousePosition) !== null && $ !== void 0 ? $ : Fe
                }), l(l({}, n), {
                    footer: n.footer || C,
                    closeIcon: () => u("span", {
                        class: `${d.value}-close-x`
                    }, [x || u(Yo, {
                        class: `${d.value}-close-icon`
                    }, null)])
                })))
            }
        }
    }),
    Vn = () => {
        const e = B(!1);
        return te(() => {
            e.value = !0
        }), e
    },
    Un = {
        type: {
            type: String
        },
        actionFn: Function,
        close: Function,
        autofocus: Boolean,
        prefixCls: String,
        buttonProps: Z(),
        emitEvent: Boolean,
        quitOnNullishReturnValue: Boolean
    };

function ro(e) {
    return !!(e && e.then)
}
const lo = H({
    compatConfig: {
        MODE: 3
    },
    name: "ActionButton",
    props: Un,
    setup(e, o) {
        let {
            slots: t
        } = o;
        const n = B(!1),
            r = B(),
            i = B(!1);
        let d;
        const p = Vn();
        fe(() => {
            e.autofocus && (d = setTimeout(() => {
                var c, a;
                return (a = (c = ye(r.value)) === null || c === void 0 ? void 0 : c.focus) === null || a === void 0 ? void 0 : a.call(c)
            }))
        }), te(() => {
            clearTimeout(d)
        });
        const b = function() {
                for (var c, a = arguments.length, f = new Array(a), C = 0; C < a; C++) f[C] = arguments[C];
                (c = e.close) === null || c === void 0 || c.call(e, ...f)
            },
            g = c => {
                ro(c) && (i.value = !0, c.then(function() {
                    p.value || (i.value = !1), b(...arguments), n.value = !1
                }, a => (p.value || (i.value = !1), n.value = !1, Promise.reject(a))))
            },
            s = c => {
                const {
                    actionFn: a
                } = e;
                if (n.value) return;
                if (n.value = !0, !a) {
                    b();
                    return
                }
                let f;
                if (e.emitEvent) {
                    if (f = a(c), e.quitOnNullishReturnValue && !ro(f)) {
                        n.value = !1, b(c);
                        return
                    }
                } else if (a.length) f = a(e.close), n.value = !1;
                else if (f = a(), !f) {
                    b();
                    return
                }
                g(f)
            };
        return () => {
            const {
                type: c,
                prefixCls: a,
                buttonProps: f
            } = e;
            return u(ee, w(w(w({}, Io(c)), {}, {
                onClick: s,
                loading: i.value,
                prefixCls: a
            }, f), {}, {
                ref: r
            }), t)
        }
    }
});

function le(e) {
    return typeof e == "function" ? e() : e
}
const Ho = H({
        name: "ConfirmDialog",
        inheritAttrs: !1,
        props: ["icon", "onCancel", "onOk", "close", "closable", "zIndex", "afterClose", "visible", "open", "keyboard", "centered", "getContainer", "maskStyle", "okButtonProps", "cancelButtonProps", "okType", "prefixCls", "okCancel", "width", "mask", "maskClosable", "okText", "cancelText", "autoFocusButton", "transitionName", "maskTransitionName", "type", "title", "content", "direction", "rootPrefixCls", "bodyStyle", "closeIcon", "modalRender", "focusTriggerAfterClose", "wrapClassName", "confirmPrefixCls", "footer"],
        setup(e, o) {
            let {
                attrs: t
            } = o;
            const [n] = De("Modal");
            return () => {
                const {
                    icon: r,
                    onCancel: i,
                    onOk: d,
                    close: p,
                    okText: b,
                    closable: g = !1,
                    zIndex: s,
                    afterClose: c,
                    keyboard: a,
                    centered: f,
                    getContainer: C,
                    maskStyle: S,
                    okButtonProps: $,
                    cancelButtonProps: m,
                    okCancel: y,
                    width: h = 416,
                    mask: P = !0,
                    maskClosable: E = !1,
                    type: F,
                    open: x,
                    title: T,
                    content: D,
                    direction: M,
                    closeIcon: W,
                    modalRender: _,
                    focusTriggerAfterClose: j,
                    rootPrefixCls: L,
                    bodyStyle: v,
                    wrapClassName: z,
                    footer: N
                } = e;
                let O = r;
                if (!r && r !== null) switch (F) {
                    case "info":
                        O = u(et, null, null);
                        break;
                    case "success":
                        O = u(ko, null, null);
                        break;
                    case "error":
                        O = u(Zo, null, null);
                        break;
                    default:
                        O = u(Jo, null, null)
                }
                const Q = e.okType || "primary",
                    R = e.prefixCls || "ant-modal",
                    V = `${R}-confirm`,
                    ne = t.style || {},
                    Y = y ?? F === "confirm",
                    pe = e.autoFocusButton === null ? !1 : e.autoFocusButton || "ok",
                    K = `${R}-confirm`,
                    ge = U(K, `${K}-${e.type}`, {
                        [`${K}-rtl`]: M === "rtl"
                    }, t.class),
                    re = n.value,
                    ie = Y && u(lo, {
                        actionFn: i,
                        close: p,
                        autofocus: pe === "cancel",
                        buttonProps: m,
                        prefixCls: `${L}-btn`
                    }, {
                        default: () => [le(e.cancelText) || re.cancelText]
                    });
                return u(G, {
                    prefixCls: R,
                    class: ge,
                    wrapClassName: U({
                        [`${K}-centered`]: !!f
                    }, z),
                    onCancel: se => p == null ? void 0 : p({
                        triggerCancel: !0
                    }, se),
                    open: x,
                    title: "",
                    footer: "",
                    transitionName: he(L, "zoom", e.transitionName),
                    maskTransitionName: he(L, "fade", e.maskTransitionName),
                    mask: P,
                    maskClosable: E,
                    maskStyle: S,
                    style: ne,
                    bodyStyle: v,
                    width: h,
                    zIndex: s,
                    afterClose: c,
                    keyboard: a,
                    centered: f,
                    getContainer: C,
                    closable: g,
                    closeIcon: W,
                    modalRender: _,
                    focusTriggerAfterClose: j
                }, {
                    default: () => [u("div", {
                        class: `${V}-body-wrapper`
                    }, [u("div", {
                        class: `${V}-body`
                    }, [le(O), T === void 0 ? null : u("span", {
                        class: `${V}-title`
                    }, [le(T)]), u("div", {
                        class: `${V}-content`
                    }, [le(D)])]), N !== void 0 ? le(N) : u("div", {
                        class: `${V}-btns`
                    }, [ie, u(lo, {
                        type: Q,
                        actionFn: d,
                        close: p,
                        autofocus: pe === "ok",
                        buttonProps: $,
                        prefixCls: `${L}-btn`
                    }, {
                        default: () => [le(b) || (Y ? re.okText : re.justOkText)]
                    })])])]
                })
            }
        }
    }),
    k = [],
    me = e => {
        const o = document.createDocumentFragment();
        let t = l(l({}, yo(e, ["parentContext", "appContext"])), {
                close: i,
                open: !0
            }),
            n = null;

        function r() {
            n && (de(null, o), n = null);
            for (var g = arguments.length, s = new Array(g), c = 0; c < g; c++) s[c] = arguments[c];
            const a = s.some(f => f && f.triggerCancel);
            e.onCancel && a && e.onCancel(() => {}, ...s.slice(1));
            for (let f = 0; f < k.length; f++)
                if (k[f] === i) {
                    k.splice(f, 1);
                    break
                }
        }

        function i() {
            for (var g = arguments.length, s = new Array(g), c = 0; c < g; c++) s[c] = arguments[c];
            t = l(l({}, t), {
                open: !1,
                afterClose: () => {
                    typeof e.afterClose == "function" && e.afterClose(), r.apply(this, s)
                }
            }), t.visible && delete t.visible, d(t)
        }

        function d(g) {
            typeof g == "function" ? t = g(t) : t = l(l({}, t), g), n && St(n, t, o)
        }
        const p = g => {
            const s = ot,
                c = s.prefixCls,
                a = g.prefixCls || `${c}-modal`,
                f = s.iconPrefixCls,
                C = nt();
            return u(tt, w(w({}, s), {}, {
                prefixCls: c
            }), {
                default: () => [u(Ho, w(w({}, g), {}, {
                    rootPrefixCls: c,
                    prefixCls: a,
                    iconPrefixCls: f,
                    locale: C,
                    cancelText: g.cancelText || C.cancelText
                }), null)]
            })
        };

        function b(g) {
            const s = u(p, l({}, g));
            return s.appContext = e.parentContext || e.appContext || s.appContext, de(s, o), s
        }
        return n = b(t), k.push(i), {
            destroy: i,
            update: d
        }
    };

function Do(e) {
    return l(l({}, e), {
        type: "warning"
    })
}

function No(e) {
    return l(l({}, e), {
        type: "info"
    })
}

function Ro(e) {
    return l(l({}, e), {
        type: "success"
    })
}

function Lo(e) {
    return l(l({}, e), {
        type: "error"
    })
}

function Mo(e) {
    return l(l({}, e), {
        type: "confirm"
    })
}
const Xn = () => ({
        config: Object,
        afterClose: Function,
        destroyAction: Function,
        open: Boolean
    }),
    Kn = H({
        name: "HookModal",
        inheritAttrs: !1,
        props: ue(Xn(), {
            config: {
                width: 520,
                okType: "primary"
            }
        }),
        setup(e, o) {
            let {
                expose: t
            } = o;
            var n;
            const r = A(() => e.open),
                i = A(() => e.config),
                {
                    direction: d,
                    getPrefixCls: p
                } = rt(),
                b = p("modal"),
                g = p(),
                s = () => {
                    var C, S;
                    e == null || e.afterClose(), (S = (C = i.value).afterClose) === null || S === void 0 || S.call(C)
                },
                c = function() {
                    e.destroyAction(...arguments)
                };
            t({
                destroy: c
            });
            const a = (n = i.value.okCancel) !== null && n !== void 0 ? n : i.value.type === "confirm",
                [f] = De("Modal", lt.Modal);
            return () => u(Ho, w(w({
                prefixCls: b,
                rootPrefixCls: g
            }, i.value), {}, {
                close: c,
                open: r.value,
                afterClose: s,
                okText: i.value.okText || (a ? f == null ? void 0 : f.value.okText : f == null ? void 0 : f.value.justOkText),
                direction: i.value.direction || d.value,
                cancelText: i.value.cancelText || (f == null ? void 0 : f.value.cancelText)
            }), null)
        }
    });
let ao = 0;
const qn = H({
    name: "ElementsHolder",
    inheritAttrs: !1,
    setup(e, o) {
        let {
            expose: t
        } = o;
        const n = B([]);
        return t({
            addModal: i => (n.value.push(i), n.value = n.value.slice(), () => {
                n.value = n.value.filter(d => d !== i)
            })
        }), () => n.value.map(i => i())
    }
});

function Qn() {
    const e = B(null),
        o = B([]);
    oe(o, () => {
        o.value.length && ([...o.value].forEach(d => {
            d()
        }), o.value = [])
    }, {
        immediate: !0
    });
    const t = i => function(p) {
            var b;
            ao += 1;
            const g = B(!0),
                s = B(null),
                c = B(Tt(p)),
                a = B({});
            oe(() => p, h => {
                $(l(l({}, Bt(h) ? h.value : h), a.value))
            });
            const f = function() {
                g.value = !1;
                for (var h = arguments.length, P = new Array(h), E = 0; E < h; E++) P[E] = arguments[E];
                const F = P.some(x => x && x.triggerCancel);
                c.value.onCancel && F && c.value.onCancel(() => {}, ...P.slice(1))
            };
            let C;
            const S = () => u(Kn, {
                key: `modal-${ao}`,
                config: i(c.value),
                ref: s,
                open: g.value,
                destroyAction: f,
                afterClose: () => {
                    C == null || C()
                }
            }, null);
            C = (b = e.value) === null || b === void 0 ? void 0 : b.addModal(S), C && k.push(C);
            const $ = h => {
                c.value = l(l({}, c.value), h)
            };
            return {
                destroy: () => {
                    s.value ? f() : o.value = [...o.value, f]
                },
                update: h => {
                    a.value = h, s.value ? $(h) : o.value = [...o.value, () => $(h)]
                }
            }
        },
        n = A(() => ({
            info: t(No),
            success: t(Ro),
            error: t(Lo),
            warning: t(Do),
            confirm: t(Mo)
        })),
        r = Symbol("modalHolderKey");
    return [n.value, () => u(qn, {
        key: r,
        ref: e
    }, null)]
}

function Wo(e) {
    return me(Do(e))
}
G.useModal = Qn;
G.info = function(o) {
    return me(No(o))
};
G.success = function(o) {
    return me(Ro(o))
};
G.error = function(o) {
    return me(Lo(o))
};
G.warning = Wo;
G.warn = Wo;
G.confirm = function(o) {
    return me(Mo(o))
};
G.destroyAll = function() {
    for (; k.length;) {
        const o = k.pop();
        o && o()
    }
};
G.install = function(e) {
    return e.component(G.name, G), e
};
const Yn = {
        small: 8,
        middle: 16,
        large: 24
    },
    Jn = () => ({
        prefixCls: String,
        size: {
            type: [String, Number, Array]
        },
        direction: I.oneOf(ce("horizontal", "vertical")).def("horizontal"),
        align: I.oneOf(ce("start", "end", "center", "baseline")),
        wrap: Ee()
    });

function Zn(e) {
    return typeof e == "string" ? Yn[e] : e || 0
}
const Ce = H({
    compatConfig: {
        MODE: 3
    },
    name: "ASpace",
    inheritAttrs: !1,
    props: Jn(),
    slots: Object,
    setup(e, o) {
        let {
            slots: t,
            attrs: n
        } = o;
        const {
            prefixCls: r,
            space: i,
            direction: d
        } = ae("space", e), [p, b] = Bo(r), g = Bn(), s = A(() => {
            var m, y, h;
            return (h = (m = e.size) !== null && m !== void 0 ? m : (y = i == null ? void 0 : i.value) === null || y === void 0 ? void 0 : y.size) !== null && h !== void 0 ? h : "small"
        }), c = q(), a = q();
        oe(s, () => {
            [c.value, a.value] = (Array.isArray(s.value) ? s.value : [s.value, s.value]).map(m => Zn(m))
        }, {
            immediate: !0
        });
        const f = A(() => e.align === void 0 && e.direction === "horizontal" ? "center" : e.align),
            C = A(() => U(r.value, b.value, `${r.value}-${e.direction}`, {
                [`${r.value}-rtl`]: d.value === "rtl",
                [`${r.value}-align-${f.value}`]: f.value
            })),
            S = A(() => d.value === "rtl" ? "marginLeft" : "marginRight"),
            $ = A(() => {
                const m = {};
                return g.value && (m.columnGap = `${c.value}px`, m.rowGap = `${a.value}px`), l(l({}, m), e.wrap && {
                    flexWrap: "wrap",
                    marginBottom: `${-a.value}px`
                })
            });
        return () => {
            var m, y;
            const {
                wrap: h,
                direction: P = "horizontal"
            } = e, E = (m = t.default) === null || m === void 0 ? void 0 : m.call(t), F = at(E), x = F.length;
            if (x === 0) return null;
            const T = (y = t.split) === null || y === void 0 ? void 0 : y.call(t),
                D = `${r.value}-item`,
                M = c.value,
                W = x - 1;
            return u("div", w(w({}, n), {}, {
                class: [C.value, n.class],
                style: [$.value, n.style]
            }), [F.map((_, j) => {
                let L = E.indexOf(_);
                L === -1 && (L = `$$space-${j}`);
                let v = {};
                return g.value || (P === "vertical" ? j < W && (v = {
                    marginBottom: `${M/(T?2:1)}px`
                }) : v = l(l({}, j < W && {
                    [S.value]: `${M/(T?2:1)}px`
                }), h && {
                    paddingBottom: `${a.value}px`
                })), p(u(wo, {
                    key: L
                }, [u("div", {
                    class: D,
                    style: v
                }, [_]), j < W && T && u("span", {
                    class: `${D}-split`,
                    style: v
                }, [T])]))
            })])
        }
    }
});
Ce.Compact = Oe;
Ce.install = function(e) {
    return e.component(Ce.name, Ce), e.component(Oe.name, Oe), e
};
var kn = {
    icon: {
        tag: "svg",
        attrs: {
            viewBox: "64 64 896 896",
            focusable: "false"
        },
        children: [{
            tag: "path",
            attrs: {
                d: "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"
            }
        }]
    },
    name: "border",
    theme: "outlined"
};

function io(e) {
    for (var o = 1; o < arguments.length; o++) {
        var t = arguments[o] != null ? Object(arguments[o]) : {},
            n = Object.keys(t);
        typeof Object.getOwnPropertySymbols == "function" && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(r) {
            return Object.getOwnPropertyDescriptor(t, r).enumerable
        }))), n.forEach(function(r) {
            er(e, r, t[r])
        })
    }
    return e
}

function er(e, o, t) {
    return o in e ? Object.defineProperty(e, o, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[o] = t, e
}
var _o = function(o, t) {
    var n = io({}, o, t.attrs);
    return u(bo, io({}, n, {
        icon: kn
    }), null)
};
_o.displayName = "BorderOutlined";
_o.inheritAttrs = !1;
var or = {
    icon: {
        tag: "svg",
        attrs: {
            viewBox: "64 64 896 896",
            focusable: "false"
        },
        children: [{
            tag: "path",
            attrs: {
                d: "M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"
            }
        }]
    },
    name: "minus",
    theme: "outlined"
};

function so(e) {
    for (var o = 1; o < arguments.length; o++) {
        var t = arguments[o] != null ? Object(arguments[o]) : {},
            n = Object.keys(t);
        typeof Object.getOwnPropertySymbols == "function" && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(r) {
            return Object.getOwnPropertyDescriptor(t, r).enumerable
        }))), n.forEach(function(r) {
            tr(e, r, t[r])
        })
    }
    return e
}

function tr(e, o, t) {
    return o in e ? Object.defineProperty(e, o, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[o] = t, e
}
var jo = function(o, t) {
    var n = so({}, o, t.attrs);
    return u(bo, so({}, n, {
        icon: or
    }), null)
};
jo.displayName = "MinusOutlined";
jo.inheritAttrs = !1;
const sr = "" + new URL("a-BYNw6m4R.png", import.meta.url).href;
var co;
const cr = ((co = window.electronAPI) == null ? void 0 : co.platform) === "darwin";
var uo;
const dr = ((uo = window.electronAPI) == null ? void 0 : uo.platform) === "win32";
var fo;
(fo = window.electronAPI) == null || fo.platform;
export {
    ee as B, Ve as K, jo as M, ar as N, Ce as S, on as W, sr as _, _o as a, jt as b, tn as c, To as d, ir as e, Et as f, G as g, dr as h, cr as i, Ht as p, J as u, Pt as w
};