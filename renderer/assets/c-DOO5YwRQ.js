import {
    d as Ca,
    y as Aa,
    o as La,
    a as qa,
    c as na,
    L as s,
    u as h,
    e as Sa,
    M as R,
    f as ua,
    N as Pa,
    O as ia,
    P as ca,
    Q as oa,
    b as _,
    r as l,
    A as T,
    R as Wa,
    i as U
} from "./c-B57oo86K.js";
import {
    i as za,
    S as Da,
    B as Ga,
    M as Ra,
    a as ja,
    _ as Ka
} from "./c-r9gNuqcd.js";
import {
    I as Oa,
    u as Qa,
    a as Ta
} from "./c-DikSrXhV.js";
import {
    s as q,
    o as f,
    a as Ua,
    r,
    b as m,
    c as la,
    d as S,
    C as Ba,
    _ as Fa
} from "./e-Kf-uhv6n.js";
import "./c-BYFbIAm8.js";
import "./c-DRQrsXw0.js";
const Ja = {
        class: "wx_page"
    },
    Ma = {
        class: "page-header"
    },
    Na = {
        class: "header-right"
    },
    Va = {
        class: "qrcode-card"
    },
    Xa = {
        class: "qrcode-section"
    },
    $a = {
        class: "qrcode-wrapper"
    },
    Ea = {
        class: "loading-box"
    },
    Ha = {
        key: 0,
        class: "qrcode-error"
    },
    Ya = {
        id: "wx_login",
        class: "wx_login_v16"
    },
    Za = {
        class: "agreement-text"
    },
    ae = 15e3,
    ee = Ca({
        __name: "WXLoginView",
        setup(te) {
            const ra = Wa(),
                {
                    getWxLoginInfo: da
                } = Ta(),
                {
                    getQueryParams: fa,
                    xssFilter: B
                } = Qa(),
                wa = fa(),
                j = da();
            let va = l(""),
                pa = l(""),
                _a = l(!1),
                P = l(!0),
                F = l(!0),
                ga = l(!1),
                k = l("");
            const x = l(!1),
                g = l("");
            let y = null,
                K = !1,
                W = null;
            const w = l(!1),
                O = () => {
                    W && (clearTimeout(W), W = null)
                },
                Q = t => {
                    O(), W = window.setTimeout(() => {
                        K || (w.value = !0, P.value = !1)
                    }, ae), new window.WxLogin({
                        self_redirect: !0,
                        id: "wx_login",
                        appid: j.appid,
                        scope: "snsapi_login",
                        redirect_uri: encodeURIComponent(j.redirect_uri),
                        state: t,
                        style: "white",
                        href: `data:text/css;base64,${j.wxLoginStyleBase64}`,
                        onReady: function(a) {
                            a && (O(), P.value = !1, w.value = !1, K = !0)
                        },
                        onQRcodeReady: function() {}
                    })
                },
                ya = async t => {
                    var a, u, c, o, d;
                    try {
                        const n = await f.checkInviteCode({
                                user_id: g.value
                            }),
                            i = ((u = (a = n.data) == null ? void 0 : a.resp) == null ? void 0 : u.data) ?? ((c = n.data) == null ? void 0 : c.data) ?? n.data;
                        n.success && (i == null ? void 0 : i.already_verified) === !0 ? (r("InviteCode_Check", "success", {
                            verified: !0
                        }), await ((d = (o = window.electronAPI) == null ? void 0 : o.security.verifyInviteCode(String(g.value))) == null ? void 0 : d.catch(v => {})), t()) : (r("InviteCode_Check", "success", {
                            verified: !1,
                            res: m(n)
                        }), y = async () => {
                            t()
                        }, x.value = !0)
                    } catch (n) {
                        r("InviteCode_Check", "fail", {
                            error: m(n)
                        }), y = async () => {
                            t()
                        }, x.value = !0
                    }
                }, ba = async () => {
                    var t, a;
                    x.value = !1, await ((a = (t = window.electronAPI) == null ? void 0 : t.security.verifyInviteCode(String(g.value))) == null ? void 0 : a.catch(u => {})), y && (await y(), y = null)
                }, ha = () => {
                    x.value = !1, y = null, S("wx_login_code"), S("jwt_token"), S("login_key"), S("openclaw_channel_token"), S("userInfo"), g.value = "", k.value = "", I()
                }, ma = () => {
                    var t;
                    (t = window.electronAPI) == null || t.window.minimize()
                }, ka = () => {
                    var t;
                    (t = window.electronAPI) == null || t.window.maximize()
                }, xa = () => {
                    var t;
                    (t = window.electronAPI) == null || t.window.close()
                }, Ia = async () => {
                    w.value = !1, await I()
                }, J = t => {
                    window.open(t, "_blank")
                }, I = async () => {
                    var t, a, u, c, o, d;
                    P.value = !0, F.value = !0, ga.value = !1, K = !1, w.value = !1;
                    try {
                        const n = await f.getGuid(),
                            i = await f.getWxLoginState({
                                guid: n
                            }),
                            v = ((t = i.data) == null ? void 0 : t.state) ?? ((c = (u = (a = i.data) == null ? void 0 : a.resp) == null ? void 0 : u.data) == null ? void 0 : c.state) ?? ((d = (o = i.data) == null ? void 0 : o.resp) == null ? void 0 : d.state);
                        i.success && v ? (k.value = v, r("WxLogin_GetState", "success", {
                            login_type: "wechat"
                        }), T(() => {
                            Q(v)
                        })) : (r("WxLogin_GetState", "fail", {
                            login_type: "wechat",
                            error_code: i.code ?? -1,
                            res: m(i)
                        }), T(() => {
                            Q(233)
                        }))
                    } catch (n) {
                        r("WxLogin_GetState", "fail", {
                            login_type: "wechat",
                            error: m(n)
                        }), T(() => {
                            Q(233)
                        })
                    }
                };
            return Aa(async () => {
                (async () => {
                    const t = wa;
                    va.value = B(t.guid), pa.value = B(t.version), _a.value = t.from === "wmpf"
                })()
            }), La(async () => {
                window.onmessage = async t => {
                    const a = t.data;
                    a && a.type && a.type == "sendCode" && (async u => {
                        var o, d, n, i, v, M, N, V, X, $, E, H;
                        await q("wx_login_code", u);
                        const c = Date.now();
                        try {
                            const C = await f.getGuid();
                            if (!k.value) {
                                const e = await f.getWxLoginState({
                                        guid: C
                                    }),
                                    z = ((o = e.data) == null ? void 0 : o.state) ?? ((i = (n = (d = e.data) == null ? void 0 : d.resp) == null ? void 0 : n.data) == null ? void 0 : i.state) ?? ((M = (v = e.data) == null ? void 0 : v.resp) == null ? void 0 : M.state);
                                e.success && z && (k.value = z)
                            }
                            const p = await f.wxLogin({
                                guid: C,
                                code: u,
                                state: k.value
                            });
                            if (p.success) {
                                const e = ((V = (N = p.data) == null ? void 0 : N.resp) == null ? void 0 : V.data) || ((X = p.data) == null ? void 0 : X.data) || p.data;
                                if (e != null && e.token && await q("jwt_token", e.token), e != null && e.openclaw_channel_token && await q("openclaw_channel_token", e.openclaw_channel_token), await (async A => {
                                        var D, Y, Z, aa, ea, ta, sa;
                                        try {
                                            let b;
                                            try {
                                                const L = await f.createApiKey();
                                                b = ((D = L.data) == null ? void 0 : D.key) ?? ((aa = (Z = (Y = L.data) == null ? void 0 : Y.resp) == null ? void 0 : Z.data) == null ? void 0 : aa.key) ?? ((ta = (ea = L.data) == null ? void 0 : ea.resp) == null ? void 0 : ta.key), L.success && b || (b = void 0)
                                            } catch {}
                                            const G = {};
                                            if (A && (G.channels = {
                                                    "wechat-access": {
                                                        token: A
                                                    }
                                                }), b && (G.models = {
                                                    providers: {
                                                        qclaw: {
                                                            apiKey: b
                                                        }
                                                    }
                                                }), Object.keys(G).length === 0) return;
                                            await ((sa = window.electronAPI) == null ? void 0 : sa.config.updateField(G))
                                        } catch {}
                                    })(e == null ? void 0 : e.openclaw_channel_token), e && (e.token = "", e.openclaw_channel_token = ""), e == null ? void 0 : e.user_info) {
                                    const A = {
                                        ...e.user_info,
                                        nickname: e.user_info.nickname,
                                        avatar: e.user_info.avatar_url || e.user_info.avatar || "",
                                        userId: e.user_info.user_id,
                                        guid: C
                                    };
                                    await q("userInfo", JSON.stringify(A)), await q("loginKey", e.user_info.loginKey);
                                    const D = await Ua("jwt_token");
                                    await window.electronAPI.safeStorage.setJwtToken(D), await (($ = window.electronAPI) == null ? void 0 : $.safeStorage.setUserInfo(A || {}))
                                }(E = window.electronAPI) == null || E.reporter.report({
                                    name: "login_success"
                                }), r("WxLogin_Auth", "success", {
                                    login_type: "wechat",
                                    duration_ms: Date.now() - c
                                });
                                const z = ((H = e == null ? void 0 : e.user_info) == null ? void 0 : H.user_id) || await f.getUserId();
                                g.value = z, await ya(() => {
                                    ra.replace("/init-loading")
                                })
                            } else r("WxLogin_Auth", "fail", {
                                login_type: "wechat",
                                error_code: p.code ?? -1,
                                res: m(p),
                                duration_ms: Date.now() - c
                            }), la.error(p.message || "微信登录失败，请重新扫码"), await I()
                        } catch (C) {
                            r("WxLogin_Auth", "fail", {
                                login_type: "wechat",
                                error: m(C),
                                duration_ms: Date.now() - c
                            }), la.error("微信登录请求异常，请重新扫码"), await I()
                        }
                    })(a.data)
                }, await I()
            }), qa(() => {
                O()
            }), (t, a) => {
                const u = Ga,
                    c = Da;
                return U(), na("div", Ja, [s("header", Ma, [a[2] || (a[2] = s("div", {
                    class: "header-left"
                }, null, -1)), s("div", Na, [h(za) ? ua("", !0) : (U(), Sa(c, {
                    key: 0,
                    size: 4
                }, {
                    default: R(() => [_(u, {
                        type: "text",
                        size: "small",
                        class: "win-btn",
                        onClick: ma
                    }, {
                        icon: R(() => [_(h(Ra))]),
                        _: 1
                    }), _(u, {
                        type: "text",
                        size: "small",
                        class: "win-btn",
                        onClick: ka
                    }, {
                        icon: R(() => [_(h(ja))]),
                        _: 1
                    }), _(u, {
                        type: "text",
                        size: "small",
                        class: "win-btn close-btn",
                        onClick: xa
                    }, {
                        icon: R(() => [_(h(Ba))]),
                        _: 1
                    })]),
                    _: 1
                }))])]), a[11] || (a[11] = Pa('<div class="header-section" data-v-a298f36c><div class="logo-title-row" data-v-a298f36c><img class="logo-icon" src="' + Ka + '" alt="logo" data-v-a298f36c><h1 class="title" data-v-a298f36c>管家 OpenClaw</h1></div><p class="subtitle" data-v-a298f36c>7x24小时，随时随地召唤的 <span class="highlight" data-v-a298f36c>全能电脑 AI 助手</span></p></div>', 1)), s("div", Va, [s("div", Xa, [a[9] || (a[9] = s("div", {
                    class: "qrcode-title"
                }, "微信扫码登录", -1)), s("div", $a, [ia(s("div", Ea, [...a[3] || (a[3] = [s("div", {
                    class: "loading-icon"
                }, null, -1)])], 512), [
                    [ca, h(P) && !w.value]
                ]), w.value ? (U(), na("div", Ha, [a[4] || (a[4] = s("div", {
                    class: "qrcode-error-icon"
                }, "⚠️", -1)), a[5] || (a[5] = s("p", {
                    class: "qrcode-error-text"
                }, "二维码加载失败", -1)), a[6] || (a[6] = s("p", {
                    class: "qrcode-error-hint"
                }, "请检查网络连接后重试", -1)), s("button", {
                    class: "qrcode-retry-btn",
                    onClick: Ia
                }, "重新加载")])) : ua("", !0), ia(s("div", Ya, null, 512), [
                    [ca, h(F) && !w.value]
                ])]), s("p", Za, [a[7] || (a[7] = oa(" 扫码代表同意 ", -1)), s("span", {
                    class: "link",
                    onClick: a[0] || (a[0] = o => J("https://privacy.qq.com/document/preview/4a7ba3f82ff042c1aafbec6e7341d713"))
                }, "隐私协议"), a[8] || (a[8] = oa()), s("span", {
                    class: "link",
                    onClick: a[1] || (a[1] = o => J("https://rule.tencent.com/rule/202603060002"))
                }, "用户协议")])]), a[10] || (a[10] = s("div", {
                    class: "safety-banner"
                }, [s("span", {
                    class: "safety-icon"
                }, "⚠"), s("span", null, "涉及系统安全，请知悉生成式人工智能的执行风险并审慎操作")], -1))]), a[12] || (a[12] = s("div", {
                    class: "feature-tags"
                }, [s("span", null, "微信直连"), s("span", null, "安全沙箱"), s("span", null, "中文社区"), s("span", null, "稳定连接")], -1)), _(Oa, {
                    visible: x.value,
                    "user-id": g.value,
                    onVerified: ba,
                    onClose: ha
                }, null, 8, ["visible", "user-id"])])
            }
        }
    }),
    le = Fa(ee, [
        ["__scopeId", "data-v-a298f36c"]
    ]);
export {
    le as
    default
};