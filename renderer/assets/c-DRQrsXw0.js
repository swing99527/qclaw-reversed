import {
    a3 as Ze,
    e as c,
    P as S,
    f as O,
    g as K,
    p as Qe,
    m as Z,
    l as ze,
    Q as Je,
    U as Ie,
    w as ke,
    H as ve,
    aD as D,
    X as et,
    k as tt,
    W as nt,
    u as rt,
    q as ot
} from "./e-Kf-uhv6n.js";
import {
    A as it,
    g as at,
    o as k,
    c as be,
    w as Y
} from "./c-BYFbIAm8.js";
import {
    d as V,
    o as lt,
    z as st,
    E as dt,
    w as X,
    q as ee,
    D as ut,
    b as H,
    s as M,
    m as W,
    r as P,
    a as de,
    n as me,
    p as ye,
    t as Oe,
    A as Se
} from "./c-B57oo86K.js";
var Ae = (function() {
        if (typeof Map < "u") return Map;

        function e(t, n) {
            var r = -1;
            return t.some(function(o, i) {
                return o[0] === n ? (r = i, !0) : !1
            }), r
        }
        return (function() {
            function t() {
                this.__entries__ = []
            }
            return Object.defineProperty(t.prototype, "size", {
                get: function() {
                    return this.__entries__.length
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.get = function(n) {
                var r = e(this.__entries__, n),
                    o = this.__entries__[r];
                return o && o[1]
            }, t.prototype.set = function(n, r) {
                var o = e(this.__entries__, n);
                ~o ? this.__entries__[o][1] = r : this.__entries__.push([n, r])
            }, t.prototype.delete = function(n) {
                var r = this.__entries__,
                    o = e(r, n);
                ~o && r.splice(o, 1)
            }, t.prototype.has = function(n) {
                return !!~e(this.__entries__, n)
            }, t.prototype.clear = function() {
                this.__entries__.splice(0)
            }, t.prototype.forEach = function(n, r) {
                r === void 0 && (r = null);
                for (var o = 0, i = this.__entries__; o < i.length; o++) {
                    var f = i[o];
                    n.call(r, f[1], f[0])
                }
            }, t
        })()
    })(),
    ue = typeof window < "u" && typeof document < "u" && window.document === document,
    Q = (function() {
        return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")()
    })(),
    ct = (function() {
        return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(Q) : function(e) {
            return setTimeout(function() {
                return e(Date.now())
            }, 1e3 / 60)
        }
    })(),
    ft = 2;

function ht(e, t) {
    var n = !1,
        r = !1,
        o = 0;

    function i() {
        n && (n = !1, e()), r && a()
    }

    function f() {
        ct(i)
    }

    function a() {
        var l = Date.now();
        if (n) {
            if (l - o < ft) return;
            r = !0
        } else n = !0, r = !1, setTimeout(f, t);
        o = l
    }
    return a
}
var pt = 20,
    gt = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
    vt = typeof MutationObserver < "u",
    bt = (function() {
        function e() {
            this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = ht(this.refresh.bind(this), pt)
        }
        return e.prototype.addObserver = function(t) {
            ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_()
        }, e.prototype.removeObserver = function(t) {
            var n = this.observers_,
                r = n.indexOf(t);
            ~r && n.splice(r, 1), !n.length && this.connected_ && this.disconnect_()
        }, e.prototype.refresh = function() {
            var t = this.updateObservers_();
            t && this.refresh()
        }, e.prototype.updateObservers_ = function() {
            var t = this.observers_.filter(function(n) {
                return n.gatherActive(), n.hasActive()
            });
            return t.forEach(function(n) {
                return n.broadcastActive()
            }), t.length > 0
        }, e.prototype.connect_ = function() {
            !ue || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), vt ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
                attributes: !0,
                childList: !0,
                characterData: !0,
                subtree: !0
            })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
        }, e.prototype.disconnect_ = function() {
            !ue || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
        }, e.prototype.onTransitionEnd_ = function(t) {
            var n = t.propertyName,
                r = n === void 0 ? "" : n,
                o = gt.some(function(i) {
                    return !!~r.indexOf(i)
                });
            o && this.refresh()
        }, e.getInstance = function() {
            return this.instance_ || (this.instance_ = new e), this.instance_
        }, e.instance_ = null, e
    })(),
    He = (function(e, t) {
        for (var n = 0, r = Object.keys(t); n < r.length; n++) {
            var o = r[n];
            Object.defineProperty(e, o, {
                value: t[o],
                enumerable: !1,
                writable: !1,
                configurable: !0
            })
        }
        return e
    }),
    G = (function(e) {
        var t = e && e.ownerDocument && e.ownerDocument.defaultView;
        return t || Q
    }),
    Te = te(0, 0, 0, 0);

function J(e) {
    return parseFloat(e) || 0
}

function xe(e) {
    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
    return t.reduce(function(r, o) {
        var i = e["border-" + o + "-width"];
        return r + J(i)
    }, 0)
}

function mt(e) {
    for (var t = ["top", "right", "bottom", "left"], n = {}, r = 0, o = t; r < o.length; r++) {
        var i = o[r],
            f = e["padding-" + i];
        n[i] = J(f)
    }
    return n
}

function yt(e) {
    var t = e.getBBox();
    return te(0, 0, t.width, t.height)
}

function St(e) {
    var t = e.clientWidth,
        n = e.clientHeight;
    if (!t && !n) return Te;
    var r = G(e).getComputedStyle(e),
        o = mt(r),
        i = o.left + o.right,
        f = o.top + o.bottom,
        a = J(r.width),
        l = J(r.height);
    if (r.boxSizing === "border-box" && (Math.round(a + i) !== t && (a -= xe(r, "left", "right") + i), Math.round(l + f) !== n && (l -= xe(r, "top", "bottom") + f)), !$t(e)) {
        var u = Math.round(a + i) - t,
            p = Math.round(l + f) - n;
        Math.abs(u) !== 1 && (a -= u), Math.abs(p) !== 1 && (l -= p)
    }
    return te(o.left, o.top, a, l)
}
var xt = (function() {
    return typeof SVGGraphicsElement < "u" ? function(e) {
        return e instanceof G(e).SVGGraphicsElement
    } : function(e) {
        return e instanceof G(e).SVGElement && typeof e.getBBox == "function"
    }
})();

function $t(e) {
    return e === G(e).document.documentElement
}

function wt(e) {
    return ue ? xt(e) ? yt(e) : St(e) : Te
}

function Et(e) {
    var t = e.x,
        n = e.y,
        r = e.width,
        o = e.height,
        i = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object,
        f = Object.create(i.prototype);
    return He(f, {
        x: t,
        y: n,
        width: r,
        height: o,
        top: n,
        right: t + r,
        bottom: o + n,
        left: t
    }), f
}

function te(e, t, n, r) {
    return {
        x: e,
        y: t,
        width: n,
        height: r
    }
}
var Ct = (function() {
        function e(t) {
            this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = te(0, 0, 0, 0), this.target = t
        }
        return e.prototype.isActive = function() {
            var t = wt(this.target);
            return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight
        }, e.prototype.broadcastRect = function() {
            var t = this.contentRect_;
            return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t
        }, e
    })(),
    Rt = (function() {
        function e(t, n) {
            var r = Et(n);
            He(this, {
                target: t,
                contentRect: r
            })
        }
        return e
    })(),
    _t = (function() {
        function e(t, n, r) {
            if (this.activeObservations_ = [], this.observations_ = new Ae, typeof t != "function") throw new TypeError("The callback provided as parameter 1 is not a function.");
            this.callback_ = t, this.controller_ = n, this.callbackCtx_ = r
        }
        return e.prototype.observe = function(t) {
            if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
            if (!(typeof Element > "u" || !(Element instanceof Object))) {
                if (!(t instanceof G(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                var n = this.observations_;
                n.has(t) || (n.set(t, new Ct(t)), this.controller_.addObserver(this), this.controller_.refresh())
            }
        }, e.prototype.unobserve = function(t) {
            if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
            if (!(typeof Element > "u" || !(Element instanceof Object))) {
                if (!(t instanceof G(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                var n = this.observations_;
                n.has(t) && (n.delete(t), n.size || this.controller_.removeObserver(this))
            }
        }, e.prototype.disconnect = function() {
            this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
        }, e.prototype.gatherActive = function() {
            var t = this;
            this.clearActive(), this.observations_.forEach(function(n) {
                n.isActive() && t.activeObservations_.push(n)
            })
        }, e.prototype.broadcastActive = function() {
            if (this.hasActive()) {
                var t = this.callbackCtx_,
                    n = this.activeObservations_.map(function(r) {
                        return new Rt(r.target, r.broadcastRect())
                    });
                this.callback_.call(t, n, t), this.clearActive()
            }
        }, e.prototype.clearActive = function() {
            this.activeObservations_.splice(0)
        }, e.prototype.hasActive = function() {
            return this.activeObservations_.length > 0
        }, e
    })(),
    Pe = typeof WeakMap < "u" ? new WeakMap : new Ae,
    Fe = (function() {
        function e(t) {
            if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function.");
            if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
            var n = bt.getInstance(),
                r = new _t(t, n, this);
            Pe.set(this, r)
        }
        return e
    })();
["observe", "unobserve", "disconnect"].forEach(function(e) {
    Fe.prototype[e] = function() {
        var t;
        return (t = Pe.get(this))[e].apply(t, arguments)
    }
});
var zt = (function() {
    return typeof Q.ResizeObserver < "u" ? Q.ResizeObserver : Fe
})();
const It = V({
    compatConfig: {
        MODE: 3
    },
    name: "ResizeObserver",
    props: {
        disabled: Boolean,
        onResize: Function
    },
    emits: ["resize"],
    setup(e, t) {
        let {
            slots: n
        } = t;
        const r = ut({
            width: 0,
            height: 0,
            offsetHeight: 0,
            offsetWidth: 0
        });
        let o = null,
            i = null;
        const f = () => {
                i && (i.disconnect(), i = null)
            },
            a = p => {
                const {
                    onResize: h
                } = e, g = p[0].target, {
                    width: m,
                    height: x
                } = g.getBoundingClientRect(), {
                    offsetWidth: w,
                    offsetHeight: E
                } = g, R = Math.floor(m), $ = Math.floor(x);
                if (r.width !== R || r.height !== $ || r.offsetWidth !== w || r.offsetHeight !== E) {
                    const C = {
                        width: R,
                        height: $,
                        offsetWidth: w,
                        offsetHeight: E
                    };
                    c(r, C), h && Promise.resolve().then(() => {
                        h(c(c({}, C), {
                            offsetWidth: w,
                            offsetHeight: E
                        }), g)
                    })
                }
            },
            l = ee(),
            u = () => {
                const {
                    disabled: p
                } = e;
                if (p) {
                    f();
                    return
                }
                const h = Ze(l);
                h !== o && (f(), o = h), !i && h && (i = new zt(a), i.observe(h))
            };
        return lt(() => {
            u()
        }), st(() => {
            u()
        }), dt(() => {
            f()
        }), X(() => e.disabled, () => {
            u()
        }, {
            flush: "post"
        }), () => {
            var p;
            return (p = n.default) === null || p === void 0 ? void 0 : p.call(n)[0]
        }
    }
});
var Ot = function(e, t) {
    var n = {};
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
    return n
};
const At = V({
    compatConfig: {
        MODE: 3
    },
    props: {
        disabled: S.looseBool,
        type: S.string,
        value: S.any,
        tag: {
            type: String,
            default: "input"
        },
        size: S.string,
        onChange: Function,
        onInput: Function,
        onBlur: Function,
        onFocus: Function,
        onKeydown: Function,
        onCompositionstart: Function,
        onCompositionend: Function,
        onKeyup: Function,
        onPaste: Function,
        onMousedown: Function
    },
    emits: ["change", "input", "blur", "keydown", "focus", "compositionstart", "compositionend", "keyup", "paste", "mousedown"],
    setup(e, t) {
        let {
            expose: n
        } = t;
        const r = M(null);
        return n({
            focus: () => {
                r.value && r.value.focus()
            },
            blur: () => {
                r.value && r.value.blur()
            },
            input: r,
            setSelectionRange: (l, u, p) => {
                var h;
                (h = r.value) === null || h === void 0 || h.setSelectionRange(l, u, p)
            },
            select: () => {
                var l;
                (l = r.value) === null || l === void 0 || l.select()
            },
            getSelectionStart: () => {
                var l;
                return (l = r.value) === null || l === void 0 ? void 0 : l.selectionStart
            },
            getSelectionEnd: () => {
                var l;
                return (l = r.value) === null || l === void 0 ? void 0 : l.selectionEnd
            },
            getScrollTop: () => {
                var l;
                return (l = r.value) === null || l === void 0 ? void 0 : l.scrollTop
            }
        }), () => {
            const {
                tag: l,
                value: u
            } = e, p = Ot(e, ["tag", "value"]);
            return H(l, O(O({}, p), {}, {
                ref: r,
                value: u
            }), null)
        }
    }
});

function cn(e) {
    const t = e.getBoundingClientRect(),
        n = document.documentElement;
    return {
        left: t.left + (window.scrollX || n.scrollLeft) - (n.clientLeft || document.body.clientLeft || 0),
        top: t.top + (window.scrollY || n.scrollTop) - (n.clientTop || document.body.clientTop || 0)
    }
}

function fn(e) {
    return Array.prototype.slice.apply(e).map(n => `${n}: ${e.getPropertyValue(n)};`).join("")
}

function Ht(e) {
    return Object.keys(e).reduce((t, n) => {
        const r = e[n];
        return typeof r > "u" || r === null || (t += `${n}: ${e[n]};`), t
    }, "")
}
var Tt = function(e, t) {
    var n = {};
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
    return n
};
const Pt = V({
        compatConfig: {
            MODE: 3
        },
        inheritAttrs: !1,
        props: {
            disabled: S.looseBool,
            type: S.string,
            value: S.any,
            lazy: S.bool.def(!0),
            tag: {
                type: String,
                default: "input"
            },
            size: S.string,
            style: S.oneOfType([String, Object]),
            class: S.string
        },
        emits: ["change", "input", "blur", "keydown", "focus", "compositionstart", "compositionend", "keyup", "paste", "mousedown"],
        setup(e, t) {
            let {
                emit: n,
                attrs: r,
                expose: o
            } = t;
            const i = M(null),
                f = P(),
                a = P(!1);
            X([() => e.value, a], () => {
                a.value || (f.value = e.value)
            }, {
                immediate: !0
            });
            const l = s => {
                    n("change", s)
                },
                u = s => {
                    a.value = !0, s.target.composing = !0, n("compositionstart", s)
                },
                p = s => {
                    a.value = !1, s.target.composing = !1, n("compositionend", s);
                    const I = document.createEvent("HTMLEvents");
                    I.initEvent("input", !0, !0), s.target.dispatchEvent(I), l(s)
                },
                h = s => {
                    if (a.value && e.lazy) {
                        f.value = s.target.value;
                        return
                    }
                    n("input", s)
                },
                g = s => {
                    n("blur", s)
                },
                m = s => {
                    n("focus", s)
                },
                x = () => {
                    i.value && i.value.focus()
                },
                w = () => {
                    i.value && i.value.blur()
                },
                E = s => {
                    n("keydown", s)
                },
                R = s => {
                    n("keyup", s)
                },
                $ = (s, I, j) => {
                    var B;
                    (B = i.value) === null || B === void 0 || B.setSelectionRange(s, I, j)
                },
                C = () => {
                    var s;
                    (s = i.value) === null || s === void 0 || s.select()
                };
            o({
                focus: x,
                blur: w,
                input: W(() => {
                    var s;
                    return (s = i.value) === null || s === void 0 ? void 0 : s.input
                }),
                setSelectionRange: $,
                select: C,
                getSelectionStart: () => {
                    var s;
                    return (s = i.value) === null || s === void 0 ? void 0 : s.getSelectionStart()
                },
                getSelectionEnd: () => {
                    var s;
                    return (s = i.value) === null || s === void 0 ? void 0 : s.getSelectionEnd()
                },
                getScrollTop: () => {
                    var s;
                    return (s = i.value) === null || s === void 0 ? void 0 : s.getScrollTop()
                }
            });
            const F = s => {
                    n("mousedown", s)
                },
                L = s => {
                    n("paste", s)
                },
                b = W(() => e.style && typeof e.style != "string" ? Ht(e.style) : e.style);
            return () => {
                const {
                    style: s,
                    lazy: I
                } = e, j = Tt(e, ["style", "lazy"]);
                return H(At, O(O(O({}, j), r), {}, {
                    style: b.value,
                    onInput: h,
                    onChange: l,
                    onBlur: g,
                    onFocus: m,
                    ref: i,
                    value: f.value,
                    onCompositionstart: u,
                    onCompositionend: p,
                    onKeyup: R,
                    onKeydown: E,
                    onPaste: L,
                    onMousedown: F
                }), null)
            }
        }
    }),
    $e = Symbol("ContextProps"),
    we = Symbol("InternalContextProps"),
    Ee = {
        id: W(() => {}),
        onFieldBlur: () => {},
        onFieldChange: () => {},
        clearValidate: () => {}
    },
    Ce = {
        addFormItemField: () => {},
        removeFormItemField: () => {}
    },
    Ft = () => {
        const e = me(we, Ce),
            t = Symbol("FormItemFieldKey"),
            n = ee();
        return e.addFormItemField(t, n.type), de(() => {
            e.removeFormItemField(t)
        }), ye(we, Ce), ye($e, Ee), me($e, Ee)
    },
    fe = it({}),
    hn = V({
        name: "NoFormStatus",
        setup(e, t) {
            let {
                slots: n
            } = t;
            return fe.useProvide({}), () => {
                var r;
                return (r = n.default) === null || r === void 0 ? void 0 : r.call(n)
            }
        }
    });

function Be(e, t, n) {
    return K({
        [`${e}-status-success`]: t === "success",
        [`${e}-status-warning`]: t === "warning",
        [`${e}-status-error`]: t === "error",
        [`${e}-status-validating`]: t === "validating",
        [`${e}-has-feedback`]: n
    })
}
const Me = (e, t) => t || e,
    Bt = e => ({
        "&::-moz-placeholder": {
            opacity: 1
        },
        "&::placeholder": {
            color: e,
            userSelect: "none"
        },
        "&:placeholder-shown": {
            textOverflow: "ellipsis"
        }
    }),
    he = e => ({
        borderColor: e.inputBorderHoverColor,
        borderInlineEndWidth: e.lineWidth
    }),
    ce = e => ({
        borderColor: e.inputBorderHoverColor,
        boxShadow: `0 0 0 ${e.controlOutlineWidth}px ${e.controlOutline}`,
        borderInlineEndWidth: e.lineWidth,
        outline: 0
    }),
    Mt = e => ({
        color: e.colorTextDisabled,
        backgroundColor: e.colorBgContainerDisabled,
        borderColor: e.colorBorder,
        boxShadow: "none",
        cursor: "not-allowed",
        opacity: 1,
        "&:hover": c({}, he(Z(e, {
            inputBorderHoverColor: e.colorBorder
        })))
    }),
    We = e => {
        const {
            inputPaddingVerticalLG: t,
            fontSizeLG: n,
            lineHeightLG: r,
            borderRadiusLG: o,
            inputPaddingHorizontalLG: i
        } = e;
        return {
            padding: `${t}px ${i}px`,
            fontSize: n,
            lineHeight: r,
            borderRadius: o
        }
    },
    Le = e => ({
        padding: `${e.inputPaddingVerticalSM}px ${e.controlPaddingHorizontalSM-1}px`,
        borderRadius: e.borderRadiusSM
    }),
    je = (e, t) => {
        const {
            componentCls: n,
            colorError: r,
            colorWarning: o,
            colorErrorOutline: i,
            colorWarningOutline: f,
            colorErrorBorderHover: a,
            colorWarningBorderHover: l
        } = e;
        return {
            [`&-status-error:not(${t}-disabled):not(${t}-borderless)${t}`]: {
                borderColor: r,
                "&:hover": {
                    borderColor: a
                },
                "&:focus, &-focused": c({}, ce(Z(e, {
                    inputBorderActiveColor: r,
                    inputBorderHoverColor: r,
                    controlOutline: i
                }))),
                [`${n}-prefix`]: {
                    color: r
                }
            },
            [`&-status-warning:not(${t}-disabled):not(${t}-borderless)${t}`]: {
                borderColor: o,
                "&:hover": {
                    borderColor: l
                },
                "&:focus, &-focused": c({}, ce(Z(e, {
                    inputBorderActiveColor: o,
                    inputBorderHoverColor: o,
                    controlOutline: f
                }))),
                [`${n}-prefix`]: {
                    color: o
                }
            }
        }
    },
    De = e => c(c({
        position: "relative",
        display: "inline-block",
        width: "100%",
        minWidth: 0,
        padding: `${e.inputPaddingVertical}px ${e.inputPaddingHorizontal}px`,
        color: e.colorText,
        fontSize: e.fontSize,
        lineHeight: e.lineHeight,
        backgroundColor: e.colorBgContainer,
        backgroundImage: "none",
        borderWidth: e.lineWidth,
        borderStyle: e.lineType,
        borderColor: e.colorBorder,
        borderRadius: e.borderRadius,
        transition: `all ${e.motionDurationMid}`
    }, Bt(e.colorTextPlaceholder)), {
        "&:hover": c({}, he(e)),
        "&:focus, &-focused": c({}, ce(e)),
        "&-disabled, &[disabled]": c({}, Mt(e)),
        "&-borderless": {
            "&, &:hover, &:focus, &-focused, &-disabled, &[disabled]": {
                backgroundColor: "transparent",
                border: "none",
                boxShadow: "none"
            }
        },
        "textarea&": {
            maxWidth: "100%",
            height: "auto",
            minHeight: e.controlHeight,
            lineHeight: e.lineHeight,
            verticalAlign: "bottom",
            transition: `all ${e.motionDurationSlow}, height 0s`,
            resize: "vertical"
        },
        "&-lg": c({}, We(e)),
        "&-sm": c({}, Le(e)),
        "&-rtl": {
            direction: "rtl"
        },
        "&-textarea-rtl": {
            direction: "rtl"
        }
    }),
    Wt = e => {
        const {
            componentCls: t,
            antCls: n
        } = e;
        return {
            position: "relative",
            display: "table",
            width: "100%",
            borderCollapse: "separate",
            borderSpacing: 0,
            "&[class*='col-']": {
                paddingInlineEnd: e.paddingXS,
                "&:last-child": {
                    paddingInlineEnd: 0
                }
            },
            [`&-lg ${t}, &-lg > ${t}-group-addon`]: c({}, We(e)),
            [`&-sm ${t}, &-sm > ${t}-group-addon`]: c({}, Le(e)),
            [`> ${t}`]: {
                display: "table-cell",
                "&:not(:first-child):not(:last-child)": {
                    borderRadius: 0
                }
            },
            [`${t}-group`]: {
                "&-addon, &-wrap": {
                    display: "table-cell",
                    width: 1,
                    whiteSpace: "nowrap",
                    verticalAlign: "middle",
                    "&:not(:first-child):not(:last-child)": {
                        borderRadius: 0
                    }
                },
                "&-wrap > *": {
                    display: "block !important"
                },
                "&-addon": {
                    position: "relative",
                    padding: `0 ${e.inputPaddingHorizontal}px`,
                    color: e.colorText,
                    fontWeight: "normal",
                    fontSize: e.fontSize,
                    textAlign: "center",
                    backgroundColor: e.colorFillAlter,
                    border: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,
                    borderRadius: e.borderRadius,
                    transition: `all ${e.motionDurationSlow}`,
                    lineHeight: 1,
                    [`${n}-select`]: {
                        margin: `-${e.inputPaddingVertical+1}px -${e.inputPaddingHorizontal}px`,
                        [`&${n}-select-single:not(${n}-select-customize-input)`]: {
                            [`${n}-select-selector`]: {
                                backgroundColor: "inherit",
                                border: `${e.lineWidth}px ${e.lineType} transparent`,
                                boxShadow: "none"
                            }
                        },
                        "&-open, &-focused": {
                            [`${n}-select-selector`]: {
                                color: e.colorPrimary
                            }
                        }
                    },
                    [`${n}-cascader-picker`]: {
                        margin: `-9px -${e.inputPaddingHorizontal}px`,
                        backgroundColor: "transparent",
                        [`${n}-cascader-input`]: {
                            textAlign: "start",
                            border: 0,
                            boxShadow: "none"
                        }
                    }
                },
                "&-addon:first-child": {
                    borderInlineEnd: 0
                },
                "&-addon:last-child": {
                    borderInlineStart: 0
                }
            },
            [`${t}`]: {
                float: "inline-start",
                width: "100%",
                marginBottom: 0,
                textAlign: "inherit",
                "&:focus": {
                    zIndex: 1,
                    borderInlineEndWidth: 1
                },
                "&:hover": {
                    zIndex: 1,
                    borderInlineEndWidth: 1,
                    [`${t}-search-with-button &`]: {
                        zIndex: 0
                    }
                }
            },
            [`> ${t}:first-child, ${t}-group-addon:first-child`]: {
                borderStartEndRadius: 0,
                borderEndEndRadius: 0,
                [`${n}-select ${n}-select-selector`]: {
                    borderStartEndRadius: 0,
                    borderEndEndRadius: 0
                }
            },
            [`> ${t}-affix-wrapper`]: {
                [`&:not(:first-child) ${t}`]: {
                    borderStartStartRadius: 0,
                    borderEndStartRadius: 0
                },
                [`&:not(:last-child) ${t}`]: {
                    borderStartEndRadius: 0,
                    borderEndEndRadius: 0
                }
            },
            [`> ${t}:last-child, ${t}-group-addon:last-child`]: {
                borderStartStartRadius: 0,
                borderEndStartRadius: 0,
                [`${n}-select ${n}-select-selector`]: {
                    borderStartStartRadius: 0,
                    borderEndStartRadius: 0
                }
            },
            [`${t}-affix-wrapper`]: {
                "&:not(:last-child)": {
                    borderStartEndRadius: 0,
                    borderEndEndRadius: 0,
                    [`${t}-search &`]: {
                        borderStartStartRadius: e.borderRadius,
                        borderEndStartRadius: e.borderRadius
                    }
                },
                [`&:not(:first-child), ${t}-search &:not(:first-child)`]: {
                    borderStartStartRadius: 0,
                    borderEndStartRadius: 0
                }
            },
            [`&${t}-group-compact`]: c(c({
                display: "block"
            }, Je()), {
                [`${t}-group-addon, ${t}-group-wrap, > ${t}`]: {
                    "&:not(:first-child):not(:last-child)": {
                        borderInlineEndWidth: e.lineWidth,
                        "&:hover": {
                            zIndex: 1
                        },
                        "&:focus": {
                            zIndex: 1
                        }
                    }
                },
                "& > *": {
                    display: "inline-block",
                    float: "none",
                    verticalAlign: "top",
                    borderRadius: 0
                },
                [`& > ${t}-affix-wrapper`]: {
                    display: "inline-flex"
                },
                [`& > ${n}-picker-range`]: {
                    display: "inline-flex"
                },
                "& > *:not(:last-child)": {
                    marginInlineEnd: -e.lineWidth,
                    borderInlineEndWidth: e.lineWidth
                },
                [`${t}`]: {
                    float: "none"
                },
                [`& > ${n}-select > ${n}-select-selector,
      & > ${n}-select-auto-complete ${t},
      & > ${n}-cascader-picker ${t},
      & > ${t}-group-wrapper ${t}`]: {
                    borderInlineEndWidth: e.lineWidth,
                    borderRadius: 0,
                    "&:hover": {
                        zIndex: 1
                    },
                    "&:focus": {
                        zIndex: 1
                    }
                },
                [`& > ${n}-select-focused`]: {
                    zIndex: 1
                },
                [`& > ${n}-select > ${n}-select-arrow`]: {
                    zIndex: 1
                },
                [`& > *:first-child,
      & > ${n}-select:first-child > ${n}-select-selector,
      & > ${n}-select-auto-complete:first-child ${t},
      & > ${n}-cascader-picker:first-child ${t}`]: {
                    borderStartStartRadius: e.borderRadius,
                    borderEndStartRadius: e.borderRadius
                },
                [`& > *:last-child,
      & > ${n}-select:last-child > ${n}-select-selector,
      & > ${n}-cascader-picker:last-child ${t},
      & > ${n}-cascader-picker-focused:last-child ${t}`]: {
                    borderInlineEndWidth: e.lineWidth,
                    borderStartEndRadius: e.borderRadius,
                    borderEndEndRadius: e.borderRadius
                },
                [`& > ${n}-select-auto-complete ${t}`]: {
                    verticalAlign: "top"
                },
                [`${t}-group-wrapper + ${t}-group-wrapper`]: {
                    marginInlineStart: -e.lineWidth,
                    [`${t}-affix-wrapper`]: {
                        borderRadius: 0
                    }
                },
                [`${t}-group-wrapper:not(:last-child)`]: {
                    [`&${t}-search > ${t}-group`]: {
                        [`& > ${t}-group-addon > ${t}-search-button`]: {
                            borderRadius: 0
                        },
                        [`& > ${t}`]: {
                            borderStartStartRadius: e.borderRadius,
                            borderStartEndRadius: 0,
                            borderEndEndRadius: 0,
                            borderEndStartRadius: e.borderRadius
                        }
                    }
                }
            }),
            [`&&-sm ${n}-btn`]: {
                fontSize: e.fontSizeSM,
                height: e.controlHeightSM,
                lineHeight: "normal"
            },
            [`&&-lg ${n}-btn`]: {
                fontSize: e.fontSizeLG,
                height: e.controlHeightLG,
                lineHeight: "normal"
            },
            [`&&-lg ${n}-select-single ${n}-select-selector`]: {
                height: `${e.controlHeightLG}px`,
                [`${n}-select-selection-item, ${n}-select-selection-placeholder`]: {
                    lineHeight: `${e.controlHeightLG-2}px`
                },
                [`${n}-select-selection-search-input`]: {
                    height: `${e.controlHeightLG}px`
                }
            },
            [`&&-sm ${n}-select-single ${n}-select-selector`]: {
                height: `${e.controlHeightSM}px`,
                [`${n}-select-selection-item, ${n}-select-selection-placeholder`]: {
                    lineHeight: `${e.controlHeightSM-2}px`
                },
                [`${n}-select-selection-search-input`]: {
                    height: `${e.controlHeightSM}px`
                }
            }
        }
    },
    Lt = e => {
        const {
            componentCls: t,
            controlHeightSM: n,
            lineWidth: r
        } = e, i = (n - r * 2 - 16) / 2;
        return {
            [t]: c(c(c(c({}, ze(e)), De(e)), je(e, t)), {
                '&[type="color"]': {
                    height: e.controlHeight,
                    [`&${t}-lg`]: {
                        height: e.controlHeightLG
                    },
                    [`&${t}-sm`]: {
                        height: n,
                        paddingTop: i,
                        paddingBottom: i
                    }
                }
            })
        }
    },
    jt = e => {
        const {
            componentCls: t
        } = e;
        return {
            [`${t}-clear-icon`]: {
                margin: 0,
                color: e.colorTextQuaternary,
                fontSize: e.fontSizeIcon,
                verticalAlign: -1,
                cursor: "pointer",
                transition: `color ${e.motionDurationSlow}`,
                "&:hover": {
                    color: e.colorTextTertiary
                },
                "&:active": {
                    color: e.colorText
                },
                "&-hidden": {
                    visibility: "hidden"
                },
                "&-has-suffix": {
                    margin: `0 ${e.inputAffixPadding}px`
                }
            },
            "&-textarea-with-clear-btn": {
                padding: "0 !important",
                border: "0 !important",
                [`${t}-clear-icon`]: {
                    position: "absolute",
                    insetBlockStart: e.paddingXS,
                    insetInlineEnd: e.paddingXS,
                    zIndex: 1
                }
            }
        }
    },
    Dt = e => {
        const {
            componentCls: t,
            inputAffixPadding: n,
            colorTextDescription: r,
            motionDurationSlow: o,
            colorIcon: i,
            colorIconHover: f,
            iconCls: a
        } = e;
        return {
            [`${t}-affix-wrapper`]: c(c(c(c(c({}, De(e)), {
                display: "inline-flex",
                [`&:not(${t}-affix-wrapper-disabled):hover`]: c(c({}, he(e)), {
                    zIndex: 1,
                    [`${t}-search-with-button &`]: {
                        zIndex: 0
                    }
                }),
                "&-focused, &:focus": {
                    zIndex: 1
                },
                "&-disabled": {
                    [`${t}[disabled]`]: {
                        background: "transparent"
                    }
                },
                [`> input${t}`]: {
                    padding: 0,
                    fontSize: "inherit",
                    border: "none",
                    borderRadius: 0,
                    outline: "none",
                    "&:focus": {
                        boxShadow: "none !important"
                    }
                },
                "&::before": {
                    width: 0,
                    visibility: "hidden",
                    content: '"\\a0"'
                },
                [`${t}`]: {
                    "&-prefix, &-suffix": {
                        display: "flex",
                        flex: "none",
                        alignItems: "center",
                        "> *:not(:last-child)": {
                            marginInlineEnd: e.paddingXS
                        }
                    },
                    "&-show-count-suffix": {
                        color: r
                    },
                    "&-show-count-has-suffix": {
                        marginInlineEnd: e.paddingXXS
                    },
                    "&-prefix": {
                        marginInlineEnd: n
                    },
                    "&-suffix": {
                        marginInlineStart: n
                    }
                }
            }), jt(e)), {
                [`${a}${t}-password-icon`]: {
                    color: i,
                    cursor: "pointer",
                    transition: `all ${o}`,
                    "&:hover": {
                        color: f
                    }
                }
            }), je(e, `${t}-affix-wrapper`))
        }
    },
    Vt = e => {
        const {
            componentCls: t,
            colorError: n,
            colorSuccess: r,
            borderRadiusLG: o,
            borderRadiusSM: i
        } = e;
        return {
            [`${t}-group`]: c(c(c({}, ze(e)), Wt(e)), {
                "&-rtl": {
                    direction: "rtl"
                },
                "&-wrapper": {
                    display: "inline-block",
                    width: "100%",
                    textAlign: "start",
                    verticalAlign: "top",
                    "&-rtl": {
                        direction: "rtl"
                    },
                    "&-lg": {
                        [`${t}-group-addon`]: {
                            borderRadius: o
                        }
                    },
                    "&-sm": {
                        [`${t}-group-addon`]: {
                            borderRadius: i
                        }
                    },
                    "&-status-error": {
                        [`${t}-group-addon`]: {
                            color: n,
                            borderColor: n
                        }
                    },
                    "&-status-warning": {
                        [`${t}-group-addon:last-child`]: {
                            color: r,
                            borderColor: r
                        }
                    }
                }
            })
        }
    },
    Gt = e => {
        const {
            componentCls: t,
            antCls: n
        } = e, r = `${t}-search`;
        return {
            [r]: {
                [`${t}`]: {
                    "&:hover, &:focus": {
                        borderColor: e.colorPrimaryHover,
                        [`+ ${t}-group-addon ${r}-button:not(${n}-btn-primary)`]: {
                            borderInlineStartColor: e.colorPrimaryHover
                        }
                    }
                },
                [`${t}-affix-wrapper`]: {
                    borderRadius: 0
                },
                [`${t}-lg`]: {
                    lineHeight: e.lineHeightLG - 2e-4
                },
                [`> ${t}-group`]: {
                    [`> ${t}-group-addon:last-child`]: {
                        insetInlineStart: -1,
                        padding: 0,
                        border: 0,
                        [`${r}-button`]: {
                            paddingTop: 0,
                            paddingBottom: 0,
                            borderStartStartRadius: 0,
                            borderStartEndRadius: e.borderRadius,
                            borderEndEndRadius: e.borderRadius,
                            borderEndStartRadius: 0
                        },
                        [`${r}-button:not(${n}-btn-primary)`]: {
                            color: e.colorTextDescription,
                            "&:hover": {
                                color: e.colorPrimaryHover
                            },
                            "&:active": {
                                color: e.colorPrimaryActive
                            },
                            [`&${n}-btn-loading::before`]: {
                                insetInlineStart: 0,
                                insetInlineEnd: 0,
                                insetBlockStart: 0,
                                insetBlockEnd: 0
                            }
                        }
                    }
                },
                [`${r}-button`]: {
                    height: e.controlHeight,
                    "&:hover, &:focus": {
                        zIndex: 1
                    }
                },
                [`&-large ${r}-button`]: {
                    height: e.controlHeightLG
                },
                [`&-small ${r}-button`]: {
                    height: e.controlHeightSM
                },
                "&-rtl": {
                    direction: "rtl"
                },
                [`&${t}-compact-item`]: {
                    [`&:not(${t}-compact-last-item)`]: {
                        [`${t}-group-addon`]: {
                            [`${t}-search-button`]: {
                                marginInlineEnd: -e.lineWidth,
                                borderRadius: 0
                            }
                        }
                    },
                    [`&:not(${t}-compact-first-item)`]: {
                        [`${t},${t}-affix-wrapper`]: {
                            borderRadius: 0
                        }
                    },
                    [`> ${t}-group-addon ${t}-search-button,
        > ${t},
        ${t}-affix-wrapper`]: {
                        "&:hover,&:focus,&:active": {
                            zIndex: 2
                        }
                    },
                    [`> ${t}-affix-wrapper-focused`]: {
                        zIndex: 2
                    }
                }
            }
        }
    };

function Nt(e) {
    return Z(e, {
        inputAffixPadding: e.paddingXXS,
        inputPaddingVertical: Math.max(Math.round((e.controlHeight - e.fontSize * e.lineHeight) / 2 * 10) / 10 - e.lineWidth, 3),
        inputPaddingVerticalLG: Math.ceil((e.controlHeightLG - e.fontSizeLG * e.lineHeightLG) / 2 * 10) / 10 - e.lineWidth,
        inputPaddingVerticalSM: Math.max(Math.round((e.controlHeightSM - e.fontSize * e.lineHeight) / 2 * 10) / 10 - e.lineWidth, 0),
        inputPaddingHorizontal: e.paddingSM - e.lineWidth,
        inputPaddingHorizontalSM: e.paddingXS - e.lineWidth,
        inputPaddingHorizontalLG: e.controlPaddingHorizontal - e.lineWidth,
        inputBorderHoverColor: e.colorPrimaryHover,
        inputBorderActiveColor: e.colorPrimaryHover
    })
}
const Kt = e => {
        const {
            componentCls: t,
            inputPaddingHorizontal: n,
            paddingLG: r
        } = e, o = `${t}-textarea`;
        return {
            [o]: {
                position: "relative",
                [`${o}-suffix`]: {
                    position: "absolute",
                    top: 0,
                    insetInlineEnd: n,
                    bottom: 0,
                    zIndex: 1,
                    display: "inline-flex",
                    alignItems: "center",
                    margin: "auto"
                },
                "&-status-error,\n        &-status-warning,\n        &-status-success,\n        &-status-validating": {
                    [`&${o}-has-feedback`]: {
                        [`${t}`]: {
                            paddingInlineEnd: r
                        }
                    }
                },
                "&-show-count": {
                    [`> ${t}`]: {
                        height: "100%"
                    },
                    "&::after": {
                        color: e.colorTextDescription,
                        whiteSpace: "nowrap",
                        content: "attr(data-count)",
                        pointerEvents: "none",
                        float: "right"
                    }
                },
                "&-rtl": {
                    "&::after": {
                        float: "left"
                    }
                }
            }
        }
    },
    Xt = Qe("Input", e => {
        const t = Nt(e);
        return [Lt(t), Kt(t), Dt(t), Vt(t), Gt(t), at(t)]
    }),
    N = e => e != null && (Array.isArray(e) ? Ie(e).length : !0);

function pn(e) {
    return N(e.prefix) || N(e.suffix) || N(e.allowClear)
}

function gn(e) {
    return N(e.addonBefore) || N(e.addonAfter)
}

function qt(e) {
    return typeof e > "u" || e === null ? "" : String(e)
}

function oe(e, t, n, r) {
    if (!n) return;
    const o = t;
    if (t.type === "click") {
        Object.defineProperty(o, "target", {
            writable: !0
        }), Object.defineProperty(o, "currentTarget", {
            writable: !0
        });
        const i = e.cloneNode(!0);
        o.target = i, o.currentTarget = i, i.value = "", n(o);
        return
    }
    if (r !== void 0) {
        Object.defineProperty(o, "target", {
            writable: !0
        }), Object.defineProperty(o, "currentTarget", {
            writable: !0
        }), o.target = e, o.currentTarget = e, e.value = r, n(o);
        return
    }
    n(o)
}

function Ut(e, t) {
    if (!e) return;
    e.focus(t);
    const {
        cursor: n
    } = t || {};
    if (n) {
        const r = e.value.length;
        switch (n) {
            case "start":
                e.setSelectionRange(0, 0);
                break;
            case "end":
                e.setSelectionRange(r, r);
                break;
            default:
                e.setSelectionRange(0, r)
        }
    }
}
const Yt = () => ({
        addonBefore: S.any,
        addonAfter: S.any,
        prefix: S.any,
        suffix: S.any,
        clearIcon: S.any,
        affixWrapperClassName: String,
        groupClassName: String,
        wrapperClassName: String,
        inputClassName: String,
        allowClear: {
            type: Boolean,
            default: void 0
        }
    }),
    Zt = () => c(c({}, Yt()), {
        value: {
            type: [String, Number, Symbol],
            default: void 0
        },
        defaultValue: {
            type: [String, Number, Symbol],
            default: void 0
        },
        inputElement: S.any,
        prefixCls: String,
        disabled: {
            type: Boolean,
            default: void 0
        },
        focused: {
            type: Boolean,
            default: void 0
        },
        triggerFocus: Function,
        readonly: {
            type: Boolean,
            default: void 0
        },
        handleReset: Function,
        hidden: {
            type: Boolean,
            default: void 0
        }
    }),
    Qt = () => c(c({}, Zt()), {
        id: String,
        placeholder: {
            type: [String, Number]
        },
        autocomplete: String,
        type: ke("text"),
        name: String,
        size: {
            type: String
        },
        autofocus: {
            type: Boolean,
            default: void 0
        },
        lazy: {
            type: Boolean,
            default: !0
        },
        maxlength: Number,
        loading: {
            type: Boolean,
            default: void 0
        },
        bordered: {
            type: Boolean,
            default: void 0
        },
        showCount: {
            type: [Boolean, Object]
        },
        htmlSize: Number,
        onPressEnter: Function,
        onKeydown: Function,
        onKeyup: Function,
        onFocus: Function,
        onBlur: Function,
        onChange: Function,
        onInput: Function,
        "onUpdate:value": Function,
        onCompositionstart: Function,
        onCompositionend: Function,
        valueModifiers: Object,
        hidden: {
            type: Boolean,
            default: void 0
        },
        status: String
    }),
    Jt = () => k(Qt(), ["wrapperClassName", "groupClassName", "inputClassName", "affixWrapperClassName"]),
    Ve = () => c(c({}, k(Jt(), ["prefix", "addonBefore", "addonAfter", "suffix"])), {
        rows: Number,
        autosize: {
            type: [Boolean, Object],
            default: void 0
        },
        autoSize: {
            type: [Boolean, Object],
            default: void 0
        },
        onResize: {
            type: Function
        },
        onCompositionstart: ve(),
        onCompositionend: ve(),
        valueModifiers: Object
    }),
    Re = e => e != null && (Array.isArray(e) ? Ie(e).length : !0);

function kt(e) {
    return Re(e.addonBefore) || Re(e.addonAfter)
}
const en = ["text", "input"],
    tn = V({
        compatConfig: {
            MODE: 3
        },
        name: "ClearableLabeledInput",
        inheritAttrs: !1,
        props: {
            prefixCls: String,
            inputType: S.oneOf(et("text", "input")),
            value: D(),
            defaultValue: D(),
            allowClear: {
                type: Boolean,
                default: void 0
            },
            element: D(),
            handleReset: Function,
            disabled: {
                type: Boolean,
                default: void 0
            },
            direction: {
                type: String
            },
            size: {
                type: String
            },
            suffix: D(),
            prefix: D(),
            addonBefore: D(),
            addonAfter: D(),
            readonly: {
                type: Boolean,
                default: void 0
            },
            focused: {
                type: Boolean,
                default: void 0
            },
            bordered: {
                type: Boolean,
                default: !0
            },
            triggerFocus: {
                type: Function
            },
            hidden: Boolean,
            status: String,
            hashId: String
        },
        setup(e, t) {
            let {
                slots: n,
                attrs: r
            } = t;
            const o = fe.useInject(),
                i = a => {
                    const {
                        value: l,
                        disabled: u,
                        readonly: p,
                        handleReset: h,
                        suffix: g = n.suffix
                    } = e, m = !u && !p && l, x = `${a}-clear-icon`;
                    return H(tt, {
                        onClick: h,
                        onMousedown: w => w.preventDefault(),
                        class: K({
                            [`${x}-hidden`]: !m,
                            [`${x}-has-suffix`]: !!g
                        }, x),
                        role: "button"
                    }, null)
                },
                f = (a, l) => {
                    const {
                        value: u,
                        allowClear: p,
                        direction: h,
                        bordered: g,
                        hidden: m,
                        status: x,
                        addonAfter: w = n.addonAfter,
                        addonBefore: E = n.addonBefore,
                        hashId: R
                    } = e, {
                        status: $,
                        hasFeedback: C
                    } = o;
                    if (!p) return be(l, {
                        value: u,
                        disabled: e.disabled
                    });
                    const F = K(`${a}-affix-wrapper`, `${a}-affix-wrapper-textarea-with-clear-btn`, Be(`${a}-affix-wrapper`, Me($, x), C), {
                        [`${a}-affix-wrapper-rtl`]: h === "rtl",
                        [`${a}-affix-wrapper-borderless`]: !g,
                        [`${r.class}`]: !kt({
                            addonAfter: w,
                            addonBefore: E
                        }) && r.class
                    }, R);
                    return H("span", {
                        class: F,
                        style: r.style,
                        hidden: m
                    }, [be(l, {
                        style: null,
                        value: u,
                        disabled: e.disabled
                    }), i(a)])
                };
            return () => {
                var a;
                const {
                    prefixCls: l,
                    inputType: u,
                    element: p = (a = n.element) === null || a === void 0 ? void 0 : a.call(n)
                } = e;
                return u === en[0] ? f(l, p) : null
            }
        }
    }),
    nn = `
  min-height:0 !important;
  max-height:none !important;
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
  pointer-events: none !important;
`,
    rn = ["letter-spacing", "line-height", "padding-top", "padding-bottom", "font-family", "font-weight", "font-size", "font-variant", "text-rendering", "text-transform", "width", "text-indent", "padding-left", "padding-right", "border-width", "box-sizing", "word-break", "white-space"],
    ie = {};
let z;

function on(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    const n = e.getAttribute("id") || e.getAttribute("data-reactid") || e.getAttribute("name");
    if (t && ie[n]) return ie[n];
    const r = window.getComputedStyle(e),
        o = r.getPropertyValue("box-sizing") || r.getPropertyValue("-moz-box-sizing") || r.getPropertyValue("-webkit-box-sizing"),
        i = parseFloat(r.getPropertyValue("padding-bottom")) + parseFloat(r.getPropertyValue("padding-top")),
        f = parseFloat(r.getPropertyValue("border-bottom-width")) + parseFloat(r.getPropertyValue("border-top-width")),
        l = {
            sizingStyle: rn.map(u => `${u}:${r.getPropertyValue(u)}`).join(";"),
            paddingSize: i,
            borderSize: f,
            boxSizing: o
        };
    return t && n && (ie[n] = l), l
}

function an(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
        n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null,
        r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
    z || (z = document.createElement("textarea"), z.setAttribute("tab-index", "-1"), z.setAttribute("aria-hidden", "true"), document.body.appendChild(z)), e.getAttribute("wrap") ? z.setAttribute("wrap", e.getAttribute("wrap")) : z.removeAttribute("wrap");
    const {
        paddingSize: o,
        borderSize: i,
        boxSizing: f,
        sizingStyle: a
    } = on(e, t);
    z.setAttribute("style", `${a};${nn}`), z.value = e.value || e.placeholder || "";
    let l, u, p, h = z.scrollHeight;
    if (f === "border-box" ? h += i : f === "content-box" && (h -= o), n !== null || r !== null) {
        z.value = " ";
        const m = z.scrollHeight - o;
        n !== null && (l = m * n, f === "border-box" && (l = l + o + i), h = Math.max(l, h)), r !== null && (u = m * r, f === "border-box" && (u = u + o + i), p = h > u ? "" : "hidden", h = Math.min(u, h))
    }
    const g = {
        height: `${h}px`,
        overflowY: p,
        resize: "none"
    };
    return l && (g.minHeight = `${l}px`), u && (g.maxHeight = `${u}px`), g
}
const ae = 0,
    le = 1,
    se = 2,
    ln = V({
        compatConfig: {
            MODE: 3
        },
        name: "ResizableTextArea",
        inheritAttrs: !1,
        props: Ve(),
        setup(e, t) {
            let {
                attrs: n,
                emit: r,
                expose: o
            } = t, i, f;
            const a = P(),
                l = P({}),
                u = P(se);
            de(() => {
                Y.cancel(i), Y.cancel(f)
            });
            const p = () => {
                    try {
                        if (a.value && document.activeElement === a.value.input) {
                            const b = a.value.getSelectionStart(),
                                s = a.value.getSelectionEnd(),
                                I = a.value.getScrollTop();
                            a.value.setSelectionRange(b, s), a.value.setScrollTop(I)
                        }
                    } catch {}
                },
                h = P(),
                g = P();
            Oe(() => {
                const b = e.autoSize || e.autosize;
                b ? (h.value = b.minRows, g.value = b.maxRows) : (h.value = void 0, g.value = void 0)
            });
            const m = W(() => !!(e.autoSize || e.autosize)),
                x = () => {
                    u.value = ae
                };
            X([() => e.value, h, g, m], () => {
                m.value && x()
            }, {
                immediate: !0
            });
            const w = P();
            X([u, a], () => {
                if (a.value)
                    if (u.value === ae) u.value = le;
                    else if (u.value === le) {
                    const b = an(a.value.input, !1, h.value, g.value);
                    u.value = se, w.value = b
                } else p()
            }, {
                immediate: !0,
                flush: "post"
            });
            const E = ee(),
                R = P(),
                $ = () => {
                    Y.cancel(R.value)
                },
                C = b => {
                    u.value === se && (r("resize", b), m.value && ($(), R.value = Y(() => {
                        x()
                    })))
                };
            de(() => {
                $()
            }), o({
                resizeTextarea: () => {
                    x()
                },
                textArea: W(() => {
                    var b;
                    return (b = a.value) === null || b === void 0 ? void 0 : b.input
                }),
                instance: E
            }), nt(e.autosize === void 0);
            const L = () => {
                const {
                    prefixCls: b,
                    disabled: s
                } = e, I = k(e, ["prefixCls", "onPressEnter", "autoSize", "autosize", "defaultValue", "allowClear", "type", "maxlength", "valueModifiers"]), j = K(b, n.class, {
                    [`${b}-disabled`]: s
                }), B = m.value ? w.value : null, q = [n.style, l.value, B], T = c(c(c({}, I), n), {
                    style: q,
                    class: j
                });
                return (u.value === ae || u.value === le) && q.push({
                    overflowX: "hidden",
                    overflowY: "hidden"
                }), T.autofocus || delete T.autofocus, T.rows === 0 && delete T.rows, H(It, {
                    onResize: C,
                    disabled: !m.value
                }, {
                    default: () => [H(Pt, O(O({}, T), {}, {
                        ref: a,
                        tag: "textarea"
                    }), null)]
                })
            };
            return () => L()
        }
    });

function Ge(e, t) {
    return [...e || ""].slice(0, t).join("")
}

function _e(e, t, n, r) {
    let o = n;
    return e ? o = Ge(n, r) : [...t || ""].length < n.length && [...n || ""].length > r && (o = t), o
}
const vn = V({
    compatConfig: {
        MODE: 3
    },
    name: "ATextarea",
    inheritAttrs: !1,
    props: Ve(),
    setup(e, t) {
        let {
            attrs: n,
            expose: r,
            emit: o
        } = t;
        var i;
        const f = Ft(),
            a = fe.useInject(),
            l = W(() => Me(a.status, e.status)),
            u = M((i = e.value) !== null && i !== void 0 ? i : e.defaultValue),
            p = M(),
            h = M(""),
            {
                prefixCls: g,
                size: m,
                direction: x
            } = rt("input", e),
            [w, E] = Xt(g),
            R = ot(),
            $ = W(() => e.showCount === "" || e.showCount || !1),
            C = W(() => Number(e.maxlength) > 0),
            F = M(!1),
            L = M(),
            b = M(0),
            s = d => {
                F.value = !0, L.value = h.value, b.value = d.currentTarget.selectionStart, o("compositionstart", d)
            },
            I = d => {
                var v;
                F.value = !1;
                let y = d.currentTarget.value;
                if (C.value) {
                    const A = b.value >= e.maxlength + 1 || b.value === ((v = L.value) === null || v === void 0 ? void 0 : v.length);
                    y = _e(A, L.value, y, e.maxlength)
                }
                y !== h.value && (T(y), oe(d.currentTarget, d, ne, y)), o("compositionend", d)
            },
            j = ee();
        X(() => e.value, () => {
            var d;
            "value" in j.vnode.props, u.value = (d = e.value) !== null && d !== void 0 ? d : ""
        });
        const B = d => {
                var v;
                Ut((v = p.value) === null || v === void 0 ? void 0 : v.textArea, d)
            },
            q = () => {
                var d, v;
                (v = (d = p.value) === null || d === void 0 ? void 0 : d.textArea) === null || v === void 0 || v.blur()
            },
            T = (d, v) => {
                u.value !== d && (e.value === void 0 ? u.value = d : Se(() => {
                    var y, A, _;
                    p.value.textArea.value !== h.value && ((_ = (y = p.value) === null || y === void 0 ? void 0 : (A = y.instance).update) === null || _ === void 0 || _.call(A))
                }), Se(() => {
                    v && v()
                }))
            },
            Ne = d => {
                d.keyCode === 13 && o("pressEnter", d), o("keydown", d)
            },
            Ke = d => {
                const {
                    onBlur: v
                } = e;
                v == null || v(d), f.onFieldBlur()
            },
            ne = d => {
                o("update:value", d.target.value), o("change", d), o("input", d), f.onFieldChange()
            },
            Xe = d => {
                oe(p.value.textArea, d, ne), T("", () => {
                    B()
                })
            },
            pe = d => {
                let v = d.target.value;
                if (u.value !== v) {
                    if (C.value) {
                        const y = d.target,
                            A = y.selectionStart >= e.maxlength + 1 || y.selectionStart === v.length || !y.selectionStart;
                        v = _e(A, h.value, v, e.maxlength)
                    }
                    oe(d.currentTarget, d, ne, v), T(v)
                }
            },
            qe = () => {
                var d, v;
                const {
                    class: y
                } = n, {
                    bordered: A = !0
                } = e, _ = c(c(c({}, k(e, ["allowClear"])), n), {
                    class: [{
                        [`${g.value}-borderless`]: !A,
                        [`${y}`]: y && !$.value,
                        [`${g.value}-sm`]: m.value === "small",
                        [`${g.value}-lg`]: m.value === "large"
                    }, Be(g.value, l.value), E.value],
                    disabled: R.value,
                    showCount: null,
                    prefixCls: g.value,
                    onInput: pe,
                    onChange: pe,
                    onBlur: Ke,
                    onKeydown: Ne,
                    onCompositionstart: s,
                    onCompositionend: I
                });
                return !((d = e.valueModifiers) === null || d === void 0) && d.lazy && delete _.onInput, H(ln, O(O({}, _), {}, {
                    id: (v = _ == null ? void 0 : _.id) !== null && v !== void 0 ? v : f.id.value,
                    ref: p,
                    maxlength: e.maxlength,
                    lazy: e.lazy
                }), null)
            };
        return r({
            focus: B,
            blur: q,
            resizableTextArea: p
        }), Oe(() => {
            let d = qt(u.value);
            !F.value && C.value && (e.value === null || e.value === void 0) && (d = Ge(d, e.maxlength)), h.value = d
        }), () => {
            var d;
            const {
                maxlength: v,
                bordered: y = !0,
                hidden: A
            } = e, {
                style: _,
                class: Ue
            } = n, Ye = c(c(c({}, e), n), {
                prefixCls: g.value,
                inputType: "text",
                handleReset: Xe,
                direction: x.value,
                bordered: y,
                style: $.value ? void 0 : _,
                hashId: E.value,
                disabled: (d = e.disabled) !== null && d !== void 0 ? d : R.value
            });
            let re = H(tn, O(O({}, Ye), {}, {
                value: h.value,
                status: e.status
            }), {
                element: qe
            });
            if ($.value || a.hasFeedback) {
                const ge = [...h.value].length;
                let U = "";
                typeof $.value == "object" ? U = $.value.formatter({
                    value: h.value,
                    count: ge,
                    maxlength: v
                }) : U = `${ge}${C.value?` / ${v}`:""}`, re = H("div", {
                    hidden: A,
                    class: K(`${g.value}-textarea`, {
                        [`${g.value}-textarea-rtl`]: x.value === "rtl",
                        [`${g.value}-textarea-show-count`]: $.value,
                        [`${g.value}-textarea-in-form-item`]: a.isFormItemInput
                    }, `${g.value}-textarea-show-count`, Ue, E.value),
                    style: _,
                    "data-count": typeof U != "object" ? U : void 0
                }, [re, a.hasFeedback && H("span", {
                    class: `${g.value}-textarea-suffix`
                }, [a.feedbackIcon])])
            }
            return w(re)
        }
    }
});
export {
    Pt as B, fe as F, hn as N, It as R, vn as _, Me as a, De as b, Le as c, cn as d, gn as e, Zt as f, Be as g, pn as h, Nt as i, qt as j, Qt as k, Xt as l, Jt as m, zt as n, oe as r, fn as s, Ut as t, Ft as u
};