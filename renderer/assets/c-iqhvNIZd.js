import {
    o
} from "./e-Kf-uhv6n.js";
import {
    J as s,
    r as u
} from "./c-B57oo86K.js";
const e = u("external"),
    t = u(!1);
let r = null;

function l() {
    r || (r = (async () => {
        try {
            (await o.getUserNetworkArea()).success && (e.value = "internal")
        } catch {
            e.value = "external"
        } finally {
            t.value = !0
        }
    })())
}
async function c() {
    t.value || r && await r
}
async function i() {
    try {
        const n = !!(await o.getUserNetworkArea()).success;
        return e.value = n ? "internal" : "external", t.value = !0, n
    } catch {
        return e.value = "external", !1
    }
}

function k() {
    return {
        userNetworkArea: s(e),
        networkAreaReady: s(t),
        fetchNetworkArea: l,
        waitForNetworkArea: c,
        isInternalNetwork: i
    }
}
export {
    k as u
};