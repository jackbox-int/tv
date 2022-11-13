var qR = Object.defineProperty;
var zR = (t, e, r) => e in t ? qR(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : t[e] = r;
var XR = (t, e) => () => (e || t((e = {
    exports: {}
}).exports, e), e.exports);
var ge = (t, e, r) => (zR(t, typeof e != "symbol" ? e + "" : e, r), r);
var Cte = XR(($te, vw) => {
    (function() {
        const e = document.createElement("link").relList;
        if (e && e.supports && e.supports("modulepreload")) return;
        for (const s of document.querySelectorAll('link[rel="modulepreload"]')) n(s);
        new MutationObserver(s => {
            for (const o of s)
                if (o.type === "childList")
                    for (const c of o.addedNodes) c.tagName === "LINK" && c.rel === "modulepreload" && n(c)
        }).observe(document, {
            childList: !0,
            subtree: !0
        });

        function r(s) {
            const o = {};
            return s.integrity && (o.integrity = s.integrity), s.referrerpolicy && (o.referrerPolicy = s.referrerpolicy), s.crossorigin === "use-credentials" ? o.credentials = "include" : s.crossorigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o
        }

        function n(s) {
            if (s.ep) return;
            s.ep = !0;
            const o = r(s);
            fetch(s.href, o)
        }
    })();

    function ih(t, e) {
        const r = Object.create(null),
            n = t.split(",");
        for (let s = 0; s < n.length; s++) r[n[s]] = !0;
        return e ? s => !!r[s.toLowerCase()] : s => !!r[s]
    }
    const JR = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
        ZR = ih(JR);

    function WE(t) {
        return !!t || t === ""
    }

    function el(t) {
        if (Pe(t)) {
            const e = {};
            for (let r = 0; r < t.length; r++) {
                const n = t[r],
                    s = Gt(n) ? tN(n) : el(n);
                if (s)
                    for (const o in s) e[o] = s[o]
            }
            return e
        } else {
            if (Gt(t)) return t;
            if (dt(t)) return t
        }
    }
    const QR = /;(?![^(]*\))/g,
        eN = /:(.+)/;

    function tN(t) {
        const e = {};
        return t.split(QR).forEach(r => {
            if (r) {
                const n = r.split(eN);
                n.length > 1 && (e[n[0].trim()] = n[1].trim())
            }
        }), e
    }

    function qe(t) {
        let e = "";
        if (Gt(t)) e = t;
        else if (Pe(t))
            for (let r = 0; r < t.length; r++) {
                const n = qe(t[r]);
                n && (e += n + " ")
            } else if (dt(t))
                for (const r in t) t[r] && (e += r + " ");
        return e.trim()
    }

    function rN(t, e) {
        if (t.length !== e.length) return !1;
        let r = !0;
        for (let n = 0; r && n < t.length; n++) r = tl(t[n], e[n]);
        return r
    }

    function tl(t, e) {
        if (t === e) return !0;
        let r = hv(t),
            n = hv(e);
        if (r || n) return r && n ? t.getTime() === e.getTime() : !1;
        if (r = Wa(t), n = Wa(e), r || n) return t === e;
        if (r = Pe(t), n = Pe(e), r || n) return r && n ? rN(t, e) : !1;
        if (r = dt(t), n = dt(e), r || n) {
            if (!r || !n) return !1;
            const s = Object.keys(t).length,
                o = Object.keys(e).length;
            if (s !== o) return !1;
            for (const c in t) {
                const u = t.hasOwnProperty(c),
                    f = e.hasOwnProperty(c);
                if (u && !f || !u && f || !tl(t[c], e[c])) return !1
            }
        }
        return String(t) === String(e)
    }

    function KE(t, e) {
        return t.findIndex(r => tl(r, e))
    }
    const Tt = t => Gt(t) ? t : t == null ? "" : Pe(t) || dt(t) && (t.toString === YE || !je(t.toString)) ? JSON.stringify(t, HE, 2) : String(t),
        HE = (t, e) => e && e.__v_isRef ? HE(t, e.value) : ks(e) ? {
            [`Map(${e.size})`]: [...e.entries()].reduce((r, [n, s]) => (r[`${n} =>`] = s, r), {})
        } : nl(e) ? {
            [`Set(${e.size})`]: [...e.values()]
        } : dt(e) && !Pe(e) && !qE(e) ? String(e) : e,
        ft = {},
        Ls = [],
        sn = () => {},
        nN = () => !1,
        iN = /^on[^a-z]/,
        rl = t => iN.test(t),
        sh = t => t.startsWith("onUpdate:"),
        Qt = Object.assign,
        ah = (t, e) => {
            const r = t.indexOf(e);
            r > -1 && t.splice(r, 1)
        },
        sN = Object.prototype.hasOwnProperty,
        Je = (t, e) => sN.call(t, e),
        Pe = Array.isArray,
        ks = t => no(t) === "[object Map]",
        nl = t => no(t) === "[object Set]",
        hv = t => no(t) === "[object Date]",
        je = t => typeof t == "function",
        Gt = t => typeof t == "string",
        Wa = t => typeof t == "symbol",
        dt = t => t !== null && typeof t == "object",
        VE = t => dt(t) && je(t.then) && je(t.catch),
        YE = Object.prototype.toString,
        no = t => YE.call(t),
        aN = t => no(t).slice(8, -1),
        qE = t => no(t) === "[object Object]",
        oh = t => Gt(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t,
        wc = ih(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
        il = t => {
            const e = Object.create(null);
            return r => e[r] || (e[r] = t(r))
        },
        oN = /-(\w)/g,
        Tn = il(t => t.replace(oN, (e, r) => r ? r.toUpperCase() : "")),
        cN = /\B([A-Z])/g,
        ss = il(t => t.replace(cN, "-$1").toLowerCase()),
        sl = il(t => t.charAt(0).toUpperCase() + t.slice(1)),
        nf = il(t => t ? `on${sl(t)}` : ""),
        Ka = (t, e) => !Object.is(t, e),
        Cc = (t, e) => {
            for (let r = 0; r < t.length; r++) t[r](e)
        },
        kc = (t, e, r) => {
            Object.defineProperty(t, e, {
                configurable: !0,
                enumerable: !1,
                value: r
            })
        },
        xc = t => {
            const e = parseFloat(t);
            return isNaN(e) ? t : e
        };
    let pv;
    const lN = () => pv || (pv = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
    let vn;
    class zE {
        constructor(e = !1) {
            this.active = !0, this.effects = [], this.cleanups = [], !e && vn && (this.parent = vn, this.index = (vn.scopes || (vn.scopes = [])).push(this) - 1)
        }
        run(e) {
            if (this.active) {
                const r = vn;
                try {
                    return vn = this, e()
                } finally {
                    vn = r
                }
            }
        }
        on() {
            vn = this
        }
        off() {
            vn = this.parent
        }
        stop(e) {
            if (this.active) {
                let r, n;
                for (r = 0, n = this.effects.length; r < n; r++) this.effects[r].stop();
                for (r = 0, n = this.cleanups.length; r < n; r++) this.cleanups[r]();
                if (this.scopes)
                    for (r = 0, n = this.scopes.length; r < n; r++) this.scopes[r].stop(!0);
                if (this.parent && !e) {
                    const s = this.parent.scopes.pop();
                    s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index)
                }
                this.active = !1
            }
        }
    }

    function uN(t) {
        return new zE(t)
    }

    function fN(t, e = vn) {
        e && e.active && e.effects.push(t)
    }
    const ch = t => {
            const e = new Set(t);
            return e.w = 0, e.n = 0, e
        },
        XE = t => (t.w & li) > 0,
        JE = t => (t.n & li) > 0,
        dN = ({
            deps: t
        }) => {
            if (t.length)
                for (let e = 0; e < t.length; e++) t[e].w |= li
        },
        hN = t => {
            const {
                deps: e
            } = t;
            if (e.length) {
                let r = 0;
                for (let n = 0; n < e.length; n++) {
                    const s = e[n];
                    XE(s) && !JE(s) ? s.delete(t) : e[r++] = s, s.w &= ~li, s.n &= ~li
                }
                e.length = r
            }
        },
        Zf = new WeakMap;
    let Na = 0,
        li = 1;
    const Qf = 30;
    let tn;
    const Xi = Symbol(""),
        ed = Symbol("");
    class lh {
        constructor(e, r = null, n) {
            this.fn = e, this.scheduler = r, this.active = !0, this.deps = [], this.parent = void 0, fN(this, n)
        }
        run() {
            if (!this.active) return this.fn();
            let e = tn,
                r = ai;
            for (; e;) {
                if (e === this) return;
                e = e.parent
            }
            try {
                return this.parent = tn, tn = this, ai = !0, li = 1 << ++Na, Na <= Qf ? dN(this) : gv(this), this.fn()
            } finally {
                Na <= Qf && hN(this), li = 1 << --Na, tn = this.parent, ai = r, this.parent = void 0, this.deferStop && this.stop()
            }
        }
        stop() {
            tn === this ? this.deferStop = !0 : this.active && (gv(this), this.onStop && this.onStop(), this.active = !1)
        }
    }

    function gv(t) {
        const {
            deps: e
        } = t;
        if (e.length) {
            for (let r = 0; r < e.length; r++) e[r].delete(t);
            e.length = 0
        }
    }
    let ai = !0;
    const ZE = [];

    function Qs() {
        ZE.push(ai), ai = !1
    }

    function ea() {
        const t = ZE.pop();
        ai = t === void 0 ? !0 : t
    }

    function Nr(t, e, r) {
        if (ai && tn) {
            let n = Zf.get(t);
            n || Zf.set(t, n = new Map);
            let s = n.get(r);
            s || n.set(r, s = ch()), QE(s)
        }
    }

    function QE(t, e) {
        let r = !1;
        Na <= Qf ? JE(t) || (t.n |= li, r = !XE(t)) : r = !t.has(tn), r && (t.add(tn), tn.deps.push(t))
    }

    function Dn(t, e, r, n, s, o) {
        const c = Zf.get(t);
        if (!c) return;
        let u = [];
        if (e === "clear") u = [...c.values()];
        else if (r === "length" && Pe(t)) c.forEach((f, h) => {
            (h === "length" || h >= n) && u.push(f)
        });
        else switch (r !== void 0 && u.push(c.get(r)), e) {
            case "add":
                Pe(t) ? oh(r) && u.push(c.get("length")) : (u.push(c.get(Xi)), ks(t) && u.push(c.get(ed)));
                break;
            case "delete":
                Pe(t) || (u.push(c.get(Xi)), ks(t) && u.push(c.get(ed)));
                break;
            case "set":
                ks(t) && u.push(c.get(Xi));
                break
        }
        if (u.length === 1) u[0] && td(u[0]);
        else {
            const f = [];
            for (const h of u) h && f.push(...h);
            td(ch(f))
        }
    }

    function td(t, e) {
        const r = Pe(t) ? t : [...t];
        for (const n of r) n.computed && mv(n);
        for (const n of r) n.computed || mv(n)
    }

    function mv(t, e) {
        (t !== tn || t.allowRecurse) && (t.scheduler ? t.scheduler() : t.run())
    }
    const pN = ih("__proto__,__v_isRef,__isVue"),
        eb = new Set(Object.getOwnPropertyNames(Symbol).filter(t => t !== "arguments" && t !== "caller").map(t => Symbol[t]).filter(Wa)),
        gN = uh(),
        mN = uh(!1, !0),
        vN = uh(!0),
        vv = yN();

    function yN() {
        const t = {};
        return ["includes", "indexOf", "lastIndexOf"].forEach(e => {
            t[e] = function(...r) {
                const n = rt(this);
                for (let o = 0, c = this.length; o < c; o++) Nr(n, "get", o + "");
                const s = n[e](...r);
                return s === -1 || s === !1 ? n[e](...r.map(rt)) : s
            }
        }), ["push", "pop", "shift", "unshift", "splice"].forEach(e => {
            t[e] = function(...r) {
                Qs();
                const n = rt(this)[e].apply(this, r);
                return ea(), n
            }
        }), t
    }

    function uh(t = !1, e = !1) {
        return function(n, s, o) {
            if (s === "__v_isReactive") return !t;
            if (s === "__v_isReadonly") return t;
            if (s === "__v_isShallow") return e;
            if (s === "__v_raw" && o === (t ? e ? kN : sb : e ? ib : nb).get(n)) return n;
            const c = Pe(n);
            if (!t && c && Je(vv, s)) return Reflect.get(vv, s, o);
            const u = Reflect.get(n, s, o);
            return (Wa(s) ? eb.has(s) : pN(s)) || (t || Nr(n, "get", s), e) ? u : Jt(u) ? c && oh(s) ? u : u.value : dt(u) ? t ? ab(u) : Mn(u) : u
        }
    }
    const _N = tb(),
        EN = tb(!0);

    function tb(t = !1) {
        return function(r, n, s, o) {
            let c = r[n];
            if (Hs(c) && Jt(c) && !Jt(s)) return !1;
            if (!t && (!Dc(s) && !Hs(s) && (c = rt(c), s = rt(s)), !Pe(r) && Jt(c) && !Jt(s))) return c.value = s, !0;
            const u = Pe(r) && oh(n) ? Number(n) < r.length : Je(r, n),
                f = Reflect.set(r, n, s, o);
            return r === rt(o) && (u ? Ka(s, c) && Dn(r, "set", n, s) : Dn(r, "add", n, s)), f
        }
    }

    function bN(t, e) {
        const r = Je(t, e);
        t[e];
        const n = Reflect.deleteProperty(t, e);
        return n && r && Dn(t, "delete", e, void 0), n
    }

    function TN(t, e) {
        const r = Reflect.has(t, e);
        return (!Wa(e) || !eb.has(e)) && Nr(t, "has", e), r
    }

    function SN(t) {
        return Nr(t, "iterate", Pe(t) ? "length" : Xi), Reflect.ownKeys(t)
    }
    const rb = {
            get: gN,
            set: _N,
            deleteProperty: bN,
            has: TN,
            ownKeys: SN
        },
        ON = {
            get: vN,
            set(t, e) {
                return !0
            },
            deleteProperty(t, e) {
                return !0
            }
        },
        wN = Qt({}, rb, {
            get: mN,
            set: EN
        }),
        fh = t => t,
        al = t => Reflect.getPrototypeOf(t);

    function ac(t, e, r = !1, n = !1) {
        t = t.__v_raw;
        const s = rt(t),
            o = rt(e);
        r || (e !== o && Nr(s, "get", e), Nr(s, "get", o));
        const {
            has: c
        } = al(s), u = n ? fh : r ? ph : Ha;
        if (c.call(s, e)) return u(t.get(e));
        if (c.call(s, o)) return u(t.get(o));
        t !== s && t.get(e)
    }

    function oc(t, e = !1) {
        const r = this.__v_raw,
            n = rt(r),
            s = rt(t);
        return e || (t !== s && Nr(n, "has", t), Nr(n, "has", s)), t === s ? r.has(t) : r.has(t) || r.has(s)
    }

    function cc(t, e = !1) {
        return t = t.__v_raw, !e && Nr(rt(t), "iterate", Xi), Reflect.get(t, "size", t)
    }

    function yv(t) {
        t = rt(t);
        const e = rt(this);
        return al(e).has.call(e, t) || (e.add(t), Dn(e, "add", t, t)), this
    }

    function _v(t, e) {
        e = rt(e);
        const r = rt(this),
            {
                has: n,
                get: s
            } = al(r);
        let o = n.call(r, t);
        o || (t = rt(t), o = n.call(r, t));
        const c = s.call(r, t);
        return r.set(t, e), o ? Ka(e, c) && Dn(r, "set", t, e) : Dn(r, "add", t, e), this
    }

    function Ev(t) {
        const e = rt(this),
            {
                has: r,
                get: n
            } = al(e);
        let s = r.call(e, t);
        s || (t = rt(t), s = r.call(e, t)), n && n.call(e, t);
        const o = e.delete(t);
        return s && Dn(e, "delete", t, void 0), o
    }

    function bv() {
        const t = rt(this),
            e = t.size !== 0,
            r = t.clear();
        return e && Dn(t, "clear", void 0, void 0), r
    }

    function lc(t, e) {
        return function(n, s) {
            const o = this,
                c = o.__v_raw,
                u = rt(c),
                f = e ? fh : t ? ph : Ha;
            return !t && Nr(u, "iterate", Xi), c.forEach((h, m) => n.call(s, f(h), f(m), o))
        }
    }

    function uc(t, e, r) {
        return function(...n) {
            const s = this.__v_raw,
                o = rt(s),
                c = ks(o),
                u = t === "entries" || t === Symbol.iterator && c,
                f = t === "keys" && c,
                h = s[t](...n),
                m = r ? fh : e ? ph : Ha;
            return !e && Nr(o, "iterate", f ? ed : Xi), {
                next() {
                    const {
                        value: _,
                        done: b
                    } = h.next();
                    return b ? {
                        value: _,
                        done: b
                    } : {
                        value: u ? [m(_[0]), m(_[1])] : m(_),
                        done: b
                    }
                },
                [Symbol.iterator]() {
                    return this
                }
            }
        }
    }

    function zn(t) {
        return function(...e) {
            return t === "delete" ? !1 : this
        }
    }

    function CN() {
        const t = {
                get(o) {
                    return ac(this, o)
                },
                get size() {
                    return cc(this)
                },
                has: oc,
                add: yv,
                set: _v,
                delete: Ev,
                clear: bv,
                forEach: lc(!1, !1)
            },
            e = {
                get(o) {
                    return ac(this, o, !1, !0)
                },
                get size() {
                    return cc(this)
                },
                has: oc,
                add: yv,
                set: _v,
                delete: Ev,
                clear: bv,
                forEach: lc(!1, !0)
            },
            r = {
                get(o) {
                    return ac(this, o, !0)
                },
                get size() {
                    return cc(this, !0)
                },
                has(o) {
                    return oc.call(this, o, !0)
                },
                add: zn("add"),
                set: zn("set"),
                delete: zn("delete"),
                clear: zn("clear"),
                forEach: lc(!0, !1)
            },
            n = {
                get(o) {
                    return ac(this, o, !0, !0)
                },
                get size() {
                    return cc(this, !0)
                },
                has(o) {
                    return oc.call(this, o, !0)
                },
                add: zn("add"),
                set: zn("set"),
                delete: zn("delete"),
                clear: zn("clear"),
                forEach: lc(!0, !0)
            };
        return ["keys", "values", "entries", Symbol.iterator].forEach(o => {
            t[o] = uc(o, !1, !1), r[o] = uc(o, !0, !1), e[o] = uc(o, !1, !0), n[o] = uc(o, !0, !0)
        }), [t, r, e, n]
    }
    const [IN, $N, AN, RN] = CN();

    function dh(t, e) {
        const r = e ? t ? RN : AN : t ? $N : IN;
        return (n, s, o) => s === "__v_isReactive" ? !t : s === "__v_isReadonly" ? t : s === "__v_raw" ? n : Reflect.get(Je(r, s) && s in n ? r : n, s, o)
    }
    const NN = {
            get: dh(!1, !1)
        },
        PN = {
            get: dh(!1, !0)
        },
        LN = {
            get: dh(!0, !1)
        },
        nb = new WeakMap,
        ib = new WeakMap,
        sb = new WeakMap,
        kN = new WeakMap;

    function xN(t) {
        switch (t) {
            case "Object":
            case "Array":
                return 1;
            case "Map":
            case "Set":
            case "WeakMap":
            case "WeakSet":
                return 2;
            default:
                return 0
        }
    }

    function DN(t) {
        return t.__v_skip || !Object.isExtensible(t) ? 0 : xN(aN(t))
    }

    function Mn(t) {
        return Hs(t) ? t : hh(t, !1, rb, NN, nb)
    }

    function MN(t) {
        return hh(t, !1, wN, PN, ib)
    }

    function ab(t) {
        return hh(t, !0, ON, LN, sb)
    }

    function hh(t, e, r, n, s) {
        if (!dt(t) || t.__v_raw && !(e && t.__v_isReactive)) return t;
        const o = s.get(t);
        if (o) return o;
        const c = DN(t);
        if (c === 0) return t;
        const u = new Proxy(t, c === 2 ? n : r);
        return s.set(t, u), u
    }

    function xs(t) {
        return Hs(t) ? xs(t.__v_raw) : !!(t && t.__v_isReactive)
    }

    function Hs(t) {
        return !!(t && t.__v_isReadonly)
    }

    function Dc(t) {
        return !!(t && t.__v_isShallow)
    }

    function ob(t) {
        return xs(t) || Hs(t)
    }

    function rt(t) {
        const e = t && t.__v_raw;
        return e ? rt(e) : t
    }

    function cb(t) {
        return kc(t, "__v_skip", !0), t
    }
    const Ha = t => dt(t) ? Mn(t) : t,
        ph = t => dt(t) ? ab(t) : t;

    function lb(t) {
        ai && tn && (t = rt(t), QE(t.dep || (t.dep = ch())))
    }

    function ub(t, e) {
        t = rt(t), t.dep && td(t.dep)
    }

    function Jt(t) {
        return !!(t && t.__v_isRef === !0)
    }

    function rn(t) {
        return fb(t, !1)
    }

    function FN(t) {
        return fb(t, !0)
    }

    function fb(t, e) {
        return Jt(t) ? t : new UN(t, e)
    }
    class UN {
        constructor(e, r) {
            this.__v_isShallow = r, this.dep = void 0, this.__v_isRef = !0, this._rawValue = r ? e : rt(e), this._value = r ? e : Ha(e)
        }
        get value() {
            return lb(this), this._value
        }
        set value(e) {
            const r = this.__v_isShallow || Dc(e) || Hs(e);
            e = r ? e : rt(e), Ka(e, this._rawValue) && (this._rawValue = e, this._value = r ? e : Ha(e), ub(this))
        }
    }

    function BN(t) {
        return Jt(t) ? t.value : t
    }
    const jN = {
        get: (t, e, r) => BN(Reflect.get(t, e, r)),
        set: (t, e, r, n) => {
            const s = t[e];
            return Jt(s) && !Jt(r) ? (s.value = r, !0) : Reflect.set(t, e, r, n)
        }
    };

    function db(t) {
        return xs(t) ? t : new Proxy(t, jN)
    }
    var hb;
    class GN {
        constructor(e, r, n, s) {
            this._setter = r, this.dep = void 0, this.__v_isRef = !0, this[hb] = !1, this._dirty = !0, this.effect = new lh(e, () => {
                this._dirty || (this._dirty = !0, ub(this))
            }), this.effect.computed = this, this.effect.active = this._cacheable = !s, this.__v_isReadonly = n
        }
        get value() {
            const e = rt(this);
            return lb(e), (e._dirty || !e._cacheable) && (e._dirty = !1, e._value = e.effect.run()), e._value
        }
        set value(e) {
            this._setter(e)
        }
    }
    hb = "__v_isReadonly";

    function WN(t, e, r = !1) {
        let n, s;
        const o = je(t);
        return o ? (n = t, s = sn) : (n = t.get, s = t.set), new GN(n, s, o || !s, r)
    }

    function oi(t, e, r, n) {
        let s;
        try {
            s = n ? t(...n) : t()
        } catch (o) {
            ol(o, e, r)
        }
        return s
    }

    function Yr(t, e, r, n) {
        if (je(t)) {
            const o = oi(t, e, r, n);
            return o && VE(o) && o.catch(c => {
                ol(c, e, r)
            }), o
        }
        const s = [];
        for (let o = 0; o < t.length; o++) s.push(Yr(t[o], e, r, n));
        return s
    }

    function ol(t, e, r, n = !0) {
        const s = e ? e.vnode : null;
        if (e) {
            let o = e.parent;
            const c = e.proxy,
                u = r;
            for (; o;) {
                const h = o.ec;
                if (h) {
                    for (let m = 0; m < h.length; m++)
                        if (h[m](t, c, u) === !1) return
                }
                o = o.parent
            }
            const f = e.appContext.config.errorHandler;
            if (f) {
                oi(f, null, 10, [t, c, u]);
                return
            }
        }
        KN(t, r, s, n)
    }

    function KN(t, e, r, n = !0) {
        console.error(t)
    }
    let Va = !1,
        rd = !1;
    const ir = [];
    let bn = 0;
    const Ds = [];
    let Ln = null,
        Wi = 0;
    const pb = Promise.resolve();
    let gh = null;

    function HN(t) {
        const e = gh || pb;
        return t ? e.then(this ? t.bind(this) : t) : e
    }

    function VN(t) {
        let e = bn + 1,
            r = ir.length;
        for (; e < r;) {
            const n = e + r >>> 1;
            Ya(ir[n]) < t ? e = n + 1 : r = n
        }
        return e
    }

    function mh(t) {
        (!ir.length || !ir.includes(t, Va && t.allowRecurse ? bn + 1 : bn)) && (t.id == null ? ir.push(t) : ir.splice(VN(t.id), 0, t), gb())
    }

    function gb() {
        !Va && !rd && (rd = !0, gh = pb.then(vb))
    }

    function YN(t) {
        const e = ir.indexOf(t);
        e > bn && ir.splice(e, 1)
    }

    function qN(t) {
        Pe(t) ? Ds.push(...t) : (!Ln || !Ln.includes(t, t.allowRecurse ? Wi + 1 : Wi)) && Ds.push(t), gb()
    }

    function Tv(t, e = Va ? bn + 1 : 0) {
        for (; e < ir.length; e++) {
            const r = ir[e];
            r && r.pre && (ir.splice(e, 1), e--, r())
        }
    }

    function mb(t) {
        if (Ds.length) {
            const e = [...new Set(Ds)];
            if (Ds.length = 0, Ln) {
                Ln.push(...e);
                return
            }
            for (Ln = e, Ln.sort((r, n) => Ya(r) - Ya(n)), Wi = 0; Wi < Ln.length; Wi++) Ln[Wi]();
            Ln = null, Wi = 0
        }
    }
    const Ya = t => t.id == null ? 1 / 0 : t.id,
        zN = (t, e) => {
            const r = Ya(t) - Ya(e);
            if (r === 0) {
                if (t.pre && !e.pre) return -1;
                if (e.pre && !t.pre) return 1
            }
            return r
        };

    function vb(t) {
        rd = !1, Va = !0, ir.sort(zN);
        const e = sn;
        try {
            for (bn = 0; bn < ir.length; bn++) {
                const r = ir[bn];
                r && r.active !== !1 && oi(r, null, 14)
            }
        } finally {
            bn = 0, ir.length = 0, mb(), Va = !1, gh = null, (ir.length || Ds.length) && vb()
        }
    }

    function XN(t, e, ...r) {
        if (t.isUnmounted) return;
        const n = t.vnode.props || ft;
        let s = r;
        const o = e.startsWith("update:"),
            c = o && e.slice(7);
        if (c && c in n) {
            const m = `${c==="modelValue"?"model":c}Modifiers`,
                {
                    number: _,
                    trim: b
                } = n[m] || ft;
            b && (s = r.map(C => C.trim())), _ && (s = r.map(xc))
        }
        let u, f = n[u = nf(e)] || n[u = nf(Tn(e))];
        !f && o && (f = n[u = nf(ss(e))]), f && Yr(f, t, 6, s);
        const h = n[u + "Once"];
        if (h) {
            if (!t.emitted) t.emitted = {};
            else if (t.emitted[u]) return;
            t.emitted[u] = !0, Yr(h, t, 6, s)
        }
    }

    function yb(t, e, r = !1) {
        const n = e.emitsCache,
            s = n.get(t);
        if (s !== void 0) return s;
        const o = t.emits;
        let c = {},
            u = !1;
        if (!je(t)) {
            const f = h => {
                const m = yb(h, e, !0);
                m && (u = !0, Qt(c, m))
            };
            !r && e.mixins.length && e.mixins.forEach(f), t.extends && f(t.extends), t.mixins && t.mixins.forEach(f)
        }
        return !o && !u ? (dt(t) && n.set(t, null), null) : (Pe(o) ? o.forEach(f => c[f] = null) : Qt(c, o), dt(t) && n.set(t, c), c)
    }

    function cl(t, e) {
        return !t || !rl(e) ? !1 : (e = e.slice(2).replace(/Once$/, ""), Je(t, e[0].toLowerCase() + e.slice(1)) || Je(t, ss(e)) || Je(t, e))
    }
    let Vr = null,
        ll = null;

    function Mc(t) {
        const e = Vr;
        return Vr = t, ll = t && t.type.__scopeId || null, e
    }

    function vh(t) {
        ll = t
    }

    function yh() {
        ll = null
    }

    function _h(t, e = Vr, r) {
        if (!e || t._n) return t;
        const n = (...s) => {
            n._d && Lv(-1);
            const o = Mc(e),
                c = t(...s);
            return Mc(o), n._d && Lv(1), c
        };
        return n._n = !0, n._c = !0, n._d = !0, n
    }

    function sf(t) {
        const {
            type: e,
            vnode: r,
            proxy: n,
            withProxy: s,
            props: o,
            propsOptions: [c],
            slots: u,
            attrs: f,
            emit: h,
            render: m,
            renderCache: _,
            data: b,
            setupState: C,
            ctx: L,
            inheritAttrs: M
        } = t;
        let B, I;
        const K = Mc(t);
        try {
            if (r.shapeFlag & 4) {
                const G = s || n;
                B = _n(m.call(G, G, _, o, C, b, L)), I = f
            } else {
                const G = e;
                B = _n(G.length > 1 ? G(o, {
                    attrs: f,
                    slots: u,
                    emit: h
                }) : G(o, null)), I = e.props ? f : JN(f)
            }
        } catch (G) {
            ka.length = 0, ol(G, t, 1), B = xt(an)
        }
        let Y = B;
        if (I && M !== !1) {
            const G = Object.keys(I),
                {
                    shapeFlag: j
                } = Y;
            G.length && j & 7 && (c && G.some(sh) && (I = ZN(I, c)), Y = fi(Y, I))
        }
        return r.dirs && (Y = fi(Y), Y.dirs = Y.dirs ? Y.dirs.concat(r.dirs) : r.dirs), r.transition && (Y.transition = r.transition), B = Y, Mc(K), B
    }
    const JN = t => {
            let e;
            for (const r in t)(r === "class" || r === "style" || rl(r)) && ((e || (e = {}))[r] = t[r]);
            return e
        },
        ZN = (t, e) => {
            const r = {};
            for (const n in t)(!sh(n) || !(n.slice(9) in e)) && (r[n] = t[n]);
            return r
        };

    function QN(t, e, r) {
        const {
            props: n,
            children: s,
            component: o
        } = t, {
            props: c,
            children: u,
            patchFlag: f
        } = e, h = o.emitsOptions;
        if (e.dirs || e.transition) return !0;
        if (r && f >= 0) {
            if (f & 1024) return !0;
            if (f & 16) return n ? Sv(n, c, h) : !!c;
            if (f & 8) {
                const m = e.dynamicProps;
                for (let _ = 0; _ < m.length; _++) {
                    const b = m[_];
                    if (c[b] !== n[b] && !cl(h, b)) return !0
                }
            }
        } else return (s || u) && (!u || !u.$stable) ? !0 : n === c ? !1 : n ? c ? Sv(n, c, h) : !0 : !!c;
        return !1
    }

    function Sv(t, e, r) {
        const n = Object.keys(e);
        if (n.length !== Object.keys(t).length) return !0;
        for (let s = 0; s < n.length; s++) {
            const o = n[s];
            if (e[o] !== t[o] && !cl(r, o)) return !0
        }
        return !1
    }

    function eP({
        vnode: t,
        parent: e
    }, r) {
        for (; e && e.subTree === t;)(t = e.vnode).el = r, e = e.parent
    }
    const tP = t => t.__isSuspense;

    function rP(t, e) {
        e && e.pendingBranch ? Pe(t) ? e.effects.push(...t) : e.effects.push(t) : qN(t)
    }

    function nP(t, e) {
        if (Vt) {
            let r = Vt.provides;
            const n = Vt.parent && Vt.parent.provides;
            n === r && (r = Vt.provides = Object.create(n)), r[t] = e
        }
    }

    function Ji(t, e, r = !1) {
        const n = Vt || Vr;
        if (n) {
            const s = n.parent == null ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides;
            if (s && t in s) return s[t];
            if (arguments.length > 1) return r && je(e) ? e.call(n.proxy) : e
        }
    }
    const Ov = {};

    function Zi(t, e, r) {
        return _b(t, e, r)
    }

    function _b(t, e, {
        immediate: r,
        deep: n,
        flush: s,
        onTrack: o,
        onTrigger: c
    } = ft) {
        const u = Vt;
        let f, h = !1,
            m = !1;
        if (Jt(t) ? (f = () => t.value, h = Dc(t)) : xs(t) ? (f = () => t, n = !0) : Pe(t) ? (m = !0, h = t.some(I => xs(I) || Dc(I)), f = () => t.map(I => {
                if (Jt(I)) return I.value;
                if (xs(I)) return zi(I);
                if (je(I)) return oi(I, u, 2)
            })) : je(t) ? e ? f = () => oi(t, u, 2) : f = () => {
                if (!(u && u.isUnmounted)) return _ && _(), Yr(t, u, 3, [b])
            } : f = sn, e && n) {
            const I = f;
            f = () => zi(I())
        }
        let _, b = I => {
            _ = B.onStop = () => {
                oi(I, u, 4)
            }
        };
        if (za) return b = sn, e ? r && Yr(e, u, 3, [f(), m ? [] : void 0, b]) : f(), sn;
        let C = m ? [] : Ov;
        const L = () => {
            if (!!B.active)
                if (e) {
                    const I = B.run();
                    (n || h || (m ? I.some((K, Y) => Ka(K, C[Y])) : Ka(I, C))) && (_ && _(), Yr(e, u, 3, [I, C === Ov ? void 0 : C, b]), C = I)
                } else B.run()
        };
        L.allowRecurse = !!e;
        let M;
        s === "sync" ? M = L : s === "post" ? M = () => Er(L, u && u.suspense) : (L.pre = !0, u && (L.id = u.uid), M = () => mh(L));
        const B = new lh(f, M);
        return e ? r ? L() : C = B.run() : s === "post" ? Er(B.run.bind(B), u && u.suspense) : B.run(), () => {
            B.stop(), u && u.scope && ah(u.scope.effects, B)
        }
    }

    function iP(t, e, r) {
        const n = this.proxy,
            s = Gt(t) ? t.includes(".") ? Eb(n, t) : () => n[t] : t.bind(n, n);
        let o;
        je(e) ? o = e : (o = e.handler, r = e);
        const c = Vt;
        Vs(this);
        const u = _b(s, o.bind(n), r);
        return c ? Vs(c) : Qi(), u
    }

    function Eb(t, e) {
        const r = e.split(".");
        return () => {
            let n = t;
            for (let s = 0; s < r.length && n; s++) n = n[r[s]];
            return n
        }
    }

    function zi(t, e) {
        if (!dt(t) || t.__v_skip || (e = e || new Set, e.has(t))) return t;
        if (e.add(t), Jt(t)) zi(t.value, e);
        else if (Pe(t))
            for (let r = 0; r < t.length; r++) zi(t[r], e);
        else if (nl(t) || ks(t)) t.forEach(r => {
            zi(r, e)
        });
        else if (qE(t))
            for (const r in t) zi(t[r], e);
        return t
    }

    function sP() {
        const t = {
            isMounted: !1,
            isLeaving: !1,
            isUnmounting: !1,
            leavingVNodes: new Map
        };
        return Eh(() => {
            t.isMounted = !0
        }), Cb(() => {
            t.isUnmounting = !0
        }), t
    }
    const Wr = [Function, Array],
        aP = {
            name: "BaseTransition",
            props: {
                mode: String,
                appear: Boolean,
                persisted: Boolean,
                onBeforeEnter: Wr,
                onEnter: Wr,
                onAfterEnter: Wr,
                onEnterCancelled: Wr,
                onBeforeLeave: Wr,
                onLeave: Wr,
                onAfterLeave: Wr,
                onLeaveCancelled: Wr,
                onBeforeAppear: Wr,
                onAppear: Wr,
                onAfterAppear: Wr,
                onAppearCancelled: Wr
            },
            setup(t, {
                slots: e
            }) {
                const r = is(),
                    n = sP();
                let s;
                return () => {
                    const o = e.default && Sb(e.default(), !0);
                    if (!o || !o.length) return;
                    let c = o[0];
                    if (o.length > 1) {
                        for (const M of o)
                            if (M.type !== an) {
                                c = M;
                                break
                            }
                    }
                    const u = rt(t),
                        {
                            mode: f
                        } = u;
                    if (n.isLeaving) return af(c);
                    const h = wv(c);
                    if (!h) return af(c);
                    const m = nd(h, u, n, r);
                    id(h, m);
                    const _ = r.subTree,
                        b = _ && wv(_);
                    let C = !1;
                    const {
                        getTransitionKey: L
                    } = h.type;
                    if (L) {
                        const M = L();
                        s === void 0 ? s = M : M !== s && (s = M, C = !0)
                    }
                    if (b && b.type !== an && (!Ki(h, b) || C)) {
                        const M = nd(b, u, n, r);
                        if (id(b, M), f === "out-in") return n.isLeaving = !0, M.afterLeave = () => {
                            n.isLeaving = !1, r.update()
                        }, af(c);
                        f === "in-out" && h.type !== an && (M.delayLeave = (B, I, K) => {
                            const Y = Tb(n, b);
                            Y[String(b.key)] = b, B._leaveCb = () => {
                                I(), B._leaveCb = void 0, delete m.delayedLeave
                            }, m.delayedLeave = K
                        })
                    }
                    return c
                }
            }
        },
        bb = aP;

    function Tb(t, e) {
        const {
            leavingVNodes: r
        } = t;
        let n = r.get(e.type);
        return n || (n = Object.create(null), r.set(e.type, n)), n
    }

    function nd(t, e, r, n) {
        const {
            appear: s,
            mode: o,
            persisted: c = !1,
            onBeforeEnter: u,
            onEnter: f,
            onAfterEnter: h,
            onEnterCancelled: m,
            onBeforeLeave: _,
            onLeave: b,
            onAfterLeave: C,
            onLeaveCancelled: L,
            onBeforeAppear: M,
            onAppear: B,
            onAfterAppear: I,
            onAppearCancelled: K
        } = e, Y = String(t.key), G = Tb(r, t), j = (oe, ue) => {
            oe && Yr(oe, n, 9, ue)
        }, z = (oe, ue) => {
            const Ie = ue[1];
            j(oe, ue), Pe(oe) ? oe.every(Ce => Ce.length <= 1) && Ie() : oe.length <= 1 && Ie()
        }, ie = {
            mode: o,
            persisted: c,
            beforeEnter(oe) {
                let ue = u;
                if (!r.isMounted)
                    if (s) ue = M || u;
                    else return;
                oe._leaveCb && oe._leaveCb(!0);
                const Ie = G[Y];
                Ie && Ki(t, Ie) && Ie.el._leaveCb && Ie.el._leaveCb(), j(ue, [oe])
            },
            enter(oe) {
                let ue = f,
                    Ie = h,
                    Ce = m;
                if (!r.isMounted)
                    if (s) ue = B || f, Ie = I || h, Ce = K || m;
                    else return;
                let fe = !1;
                const we = oe._enterCb = F => {
                    fe || (fe = !0, F ? j(Ce, [oe]) : j(Ie, [oe]), ie.delayedLeave && ie.delayedLeave(), oe._enterCb = void 0)
                };
                ue ? z(ue, [oe, we]) : we()
            },
            leave(oe, ue) {
                const Ie = String(t.key);
                if (oe._enterCb && oe._enterCb(!0), r.isUnmounting) return ue();
                j(_, [oe]);
                let Ce = !1;
                const fe = oe._leaveCb = we => {
                    Ce || (Ce = !0, ue(), we ? j(L, [oe]) : j(C, [oe]), oe._leaveCb = void 0, G[Ie] === t && delete G[Ie])
                };
                G[Ie] = t, b ? z(b, [oe, fe]) : fe()
            },
            clone(oe) {
                return nd(oe, e, r, n)
            }
        };
        return ie
    }

    function af(t) {
        if (ul(t)) return t = fi(t), t.children = null, t
    }

    function wv(t) {
        return ul(t) ? t.children ? t.children[0] : void 0 : t
    }

    function id(t, e) {
        t.shapeFlag & 6 && t.component ? id(t.component.subTree, e) : t.shapeFlag & 128 ? (t.ssContent.transition = e.clone(t.ssContent), t.ssFallback.transition = e.clone(t.ssFallback)) : t.transition = e
    }

    function Sb(t, e = !1, r) {
        let n = [],
            s = 0;
        for (let o = 0; o < t.length; o++) {
            let c = t[o];
            const u = r == null ? c.key : String(r) + String(c.key != null ? c.key : o);
            c.type === It ? (c.patchFlag & 128 && s++, n = n.concat(Sb(c.children, e, u))) : (e || c.type !== an) && n.push(u != null ? fi(c, {
                key: u
            }) : c)
        }
        if (s > 1)
            for (let o = 0; o < n.length; o++) n[o].patchFlag = -2;
        return n
    }

    function vt(t) {
        return je(t) ? {
            setup: t,
            name: t.name
        } : t
    }
    const Ic = t => !!t.type.__asyncLoader,
        ul = t => t.type.__isKeepAlive;

    function oP(t, e) {
        Ob(t, "a", e)
    }

    function cP(t, e) {
        Ob(t, "da", e)
    }

    function Ob(t, e, r = Vt) {
        const n = t.__wdc || (t.__wdc = () => {
            let s = r;
            for (; s;) {
                if (s.isDeactivated) return;
                s = s.parent
            }
            return t()
        });
        if (fl(e, n, r), r) {
            let s = r.parent;
            for (; s && s.parent;) ul(s.parent.vnode) && lP(n, e, r, s), s = s.parent
        }
    }

    function lP(t, e, r, n) {
        const s = fl(e, t, n, !0);
        bh(() => {
            ah(n[e], s)
        }, r)
    }

    function fl(t, e, r = Vt, n = !1) {
        if (r) {
            const s = r[t] || (r[t] = []),
                o = e.__weh || (e.__weh = (...c) => {
                    if (r.isUnmounted) return;
                    Qs(), Vs(r);
                    const u = Yr(e, r, t, c);
                    return Qi(), ea(), u
                });
            return n ? s.unshift(o) : s.push(o), o
        }
    }
    const Fn = t => (e, r = Vt) => (!za || t === "sp") && fl(t, e, r),
        wb = Fn("bm"),
        Eh = Fn("m"),
        uP = Fn("bu"),
        fP = Fn("u"),
        Cb = Fn("bum"),
        bh = Fn("um"),
        dP = Fn("sp"),
        hP = Fn("rtg"),
        pP = Fn("rtc");

    function gP(t, e = Vt) {
        fl("ec", t, e)
    }

    function tt(t, e) {
        const r = Vr;
        if (r === null) return t;
        const n = pl(r) || r.proxy,
            s = t.dirs || (t.dirs = []);
        for (let o = 0; o < e.length; o++) {
            let [c, u, f, h = ft] = e[o];
            je(c) && (c = {
                mounted: c,
                updated: c
            }), c.deep && zi(u), s.push({
                dir: c,
                instance: n,
                value: u,
                oldValue: void 0,
                arg: f,
                modifiers: h
            })
        }
        return t
    }

    function Li(t, e, r, n) {
        const s = t.dirs,
            o = e && e.dirs;
        for (let c = 0; c < s.length; c++) {
            const u = s[c];
            o && (u.oldValue = o[c].value);
            let f = u.dir[n];
            f && (Qs(), Yr(f, r, 8, [t.el, u, t, e]), ea())
        }
    }
    const Th = "components",
        mP = "directives";

    function ni(t, e) {
        return Oh(Th, t, !0, e) || t
    }
    const Ib = Symbol();

    function Sh(t) {
        return Gt(t) ? Oh(Th, t, !1) || t : t || Ib
    }

    function qr(t) {
        return Oh(mP, t)
    }

    function Oh(t, e, r = !0, n = !1) {
        const s = Vr || Vt;
        if (s) {
            const o = s.type;
            if (t === Th) {
                const u = KP(o, !1);
                if (u && (u === e || u === Tn(e) || u === sl(Tn(e)))) return o
            }
            const c = Cv(s[t] || o[t], e) || Cv(s.appContext[t], e);
            return !c && n ? o : c
        }
    }

    function Cv(t, e) {
        return t && (t[e] || t[Tn(e)] || t[sl(Tn(e))])
    }

    function io(t, e, r, n) {
        let s;
        const o = r && r[n];
        if (Pe(t) || Gt(t)) {
            s = new Array(t.length);
            for (let c = 0, u = t.length; c < u; c++) s[c] = e(t[c], c, void 0, o && o[c])
        } else if (typeof t == "number") {
            s = new Array(t);
            for (let c = 0; c < t; c++) s[c] = e(c + 1, c, void 0, o && o[c])
        } else if (dt(t))
            if (t[Symbol.iterator]) s = Array.from(t, (c, u) => e(c, u, void 0, o && o[u]));
            else {
                const c = Object.keys(t);
                s = new Array(c.length);
                for (let u = 0, f = c.length; u < f; u++) {
                    const h = c[u];
                    s[u] = e(t[h], h, u, o && o[u])
                }
            }
        else s = [];
        return r && (r[n] = s), s
    }
    const sd = t => t ? Fb(t) ? pl(t) || t.proxy : sd(t.parent) : null,
        Fc = Qt(Object.create(null), {
            $: t => t,
            $el: t => t.vnode.el,
            $data: t => t.data,
            $props: t => t.props,
            $attrs: t => t.attrs,
            $slots: t => t.slots,
            $refs: t => t.refs,
            $parent: t => sd(t.parent),
            $root: t => sd(t.root),
            $emit: t => t.emit,
            $options: t => wh(t),
            $forceUpdate: t => t.f || (t.f = () => mh(t.update)),
            $nextTick: t => t.n || (t.n = HN.bind(t.proxy)),
            $watch: t => iP.bind(t)
        }),
        vP = {
            get({
                _: t
            }, e) {
                const {
                    ctx: r,
                    setupState: n,
                    data: s,
                    props: o,
                    accessCache: c,
                    type: u,
                    appContext: f
                } = t;
                let h;
                if (e[0] !== "$") {
                    const C = c[e];
                    if (C !== void 0) switch (C) {
                        case 1:
                            return n[e];
                        case 2:
                            return s[e];
                        case 4:
                            return r[e];
                        case 3:
                            return o[e]
                    } else {
                        if (n !== ft && Je(n, e)) return c[e] = 1, n[e];
                        if (s !== ft && Je(s, e)) return c[e] = 2, s[e];
                        if ((h = t.propsOptions[0]) && Je(h, e)) return c[e] = 3, o[e];
                        if (r !== ft && Je(r, e)) return c[e] = 4, r[e];
                        ad && (c[e] = 0)
                    }
                }
                const m = Fc[e];
                let _, b;
                if (m) return e === "$attrs" && Nr(t, "get", e), m(t);
                if ((_ = u.__cssModules) && (_ = _[e])) return _;
                if (r !== ft && Je(r, e)) return c[e] = 4, r[e];
                if (b = f.config.globalProperties, Je(b, e)) return b[e]
            },
            set({
                _: t
            }, e, r) {
                const {
                    data: n,
                    setupState: s,
                    ctx: o
                } = t;
                return s !== ft && Je(s, e) ? (s[e] = r, !0) : n !== ft && Je(n, e) ? (n[e] = r, !0) : Je(t.props, e) || e[0] === "$" && e.slice(1) in t ? !1 : (o[e] = r, !0)
            },
            has({
                _: {
                    data: t,
                    setupState: e,
                    accessCache: r,
                    ctx: n,
                    appContext: s,
                    propsOptions: o
                }
            }, c) {
                let u;
                return !!r[c] || t !== ft && Je(t, c) || e !== ft && Je(e, c) || (u = o[0]) && Je(u, c) || Je(n, c) || Je(Fc, c) || Je(s.config.globalProperties, c)
            },
            defineProperty(t, e, r) {
                return r.get != null ? t._.accessCache[e] = 0 : Je(r, "value") && this.set(t, e, r.value, null), Reflect.defineProperty(t, e, r)
            }
        };
    let ad = !0;

    function yP(t) {
        const e = wh(t),
            r = t.proxy,
            n = t.ctx;
        ad = !1, e.beforeCreate && Iv(e.beforeCreate, t, "bc");
        const {
            data: s,
            computed: o,
            methods: c,
            watch: u,
            provide: f,
            inject: h,
            created: m,
            beforeMount: _,
            mounted: b,
            beforeUpdate: C,
            updated: L,
            activated: M,
            deactivated: B,
            beforeDestroy: I,
            beforeUnmount: K,
            destroyed: Y,
            unmounted: G,
            render: j,
            renderTracked: z,
            renderTriggered: ie,
            errorCaptured: oe,
            serverPrefetch: ue,
            expose: Ie,
            inheritAttrs: Ce,
            components: fe,
            directives: we,
            filters: F
        } = e;
        if (h && _P(h, n, null, t.appContext.config.unwrapInjectedRef), c)
            for (const Ee in c) {
                const ve = c[Ee];
                je(ve) && (n[Ee] = ve.bind(r))
            }
        if (s) {
            const Ee = s.call(r, r);
            dt(Ee) && (t.data = Mn(Ee))
        }
        if (ad = !0, o)
            for (const Ee in o) {
                const ve = o[Ee],
                    Se = je(ve) ? ve.bind(r, r) : je(ve.get) ? ve.get.bind(r, r) : sn,
                    xe = !je(ve) && je(ve.set) ? ve.set.bind(r) : sn,
                    Ue = Rr({
                        get: Se,
                        set: xe
                    });
                Object.defineProperty(n, Ee, {
                    enumerable: !0,
                    configurable: !0,
                    get: () => Ue.value,
                    set: Ze => Ue.value = Ze
                })
            }
        if (u)
            for (const Ee in u) $b(u[Ee], n, r, Ee);
        if (f) {
            const Ee = je(f) ? f.call(r) : f;
            Reflect.ownKeys(Ee).forEach(ve => {
                nP(ve, Ee[ve])
            })
        }
        m && Iv(m, t, "c");

        function de(Ee, ve) {
            Pe(ve) ? ve.forEach(Se => Ee(Se.bind(r))) : ve && Ee(ve.bind(r))
        }
        if (de(wb, _), de(Eh, b), de(uP, C), de(fP, L), de(oP, M), de(cP, B), de(gP, oe), de(pP, z), de(hP, ie), de(Cb, K), de(bh, G), de(dP, ue), Pe(Ie))
            if (Ie.length) {
                const Ee = t.exposed || (t.exposed = {});
                Ie.forEach(ve => {
                    Object.defineProperty(Ee, ve, {
                        get: () => r[ve],
                        set: Se => r[ve] = Se
                    })
                })
            } else t.exposed || (t.exposed = {});
        j && t.render === sn && (t.render = j), Ce != null && (t.inheritAttrs = Ce), fe && (t.components = fe), we && (t.directives = we)
    }

    function _P(t, e, r = sn, n = !1) {
        Pe(t) && (t = od(t));
        for (const s in t) {
            const o = t[s];
            let c;
            dt(o) ? "default" in o ? c = Ji(o.from || s, o.default, !0) : c = Ji(o.from || s) : c = Ji(o), Jt(c) && n ? Object.defineProperty(e, s, {
                enumerable: !0,
                configurable: !0,
                get: () => c.value,
                set: u => c.value = u
            }) : e[s] = c
        }
    }

    function Iv(t, e, r) {
        Yr(Pe(t) ? t.map(n => n.bind(e.proxy)) : t.bind(e.proxy), e, r)
    }

    function $b(t, e, r, n) {
        const s = n.includes(".") ? Eb(r, n) : () => r[n];
        if (Gt(t)) {
            const o = e[t];
            je(o) && Zi(s, o)
        } else if (je(t)) Zi(s, t.bind(r));
        else if (dt(t))
            if (Pe(t)) t.forEach(o => $b(o, e, r, n));
            else {
                const o = je(t.handler) ? t.handler.bind(r) : e[t.handler];
                je(o) && Zi(s, o, t)
            }
    }

    function wh(t) {
        const e = t.type,
            {
                mixins: r,
                extends: n
            } = e,
            {
                mixins: s,
                optionsCache: o,
                config: {
                    optionMergeStrategies: c
                }
            } = t.appContext,
            u = o.get(e);
        let f;
        return u ? f = u : !s.length && !r && !n ? f = e : (f = {}, s.length && s.forEach(h => Uc(f, h, c, !0)), Uc(f, e, c)), dt(e) && o.set(e, f), f
    }

    function Uc(t, e, r, n = !1) {
        const {
            mixins: s,
            extends: o
        } = e;
        o && Uc(t, o, r, !0), s && s.forEach(c => Uc(t, c, r, !0));
        for (const c in e)
            if (!(n && c === "expose")) {
                const u = EP[c] || r && r[c];
                t[c] = u ? u(t[c], e[c]) : e[c]
            } return t
    }
    const EP = {
        data: $v,
        props: Bi,
        emits: Bi,
        methods: Bi,
        computed: Bi,
        beforeCreate: fr,
        created: fr,
        beforeMount: fr,
        mounted: fr,
        beforeUpdate: fr,
        updated: fr,
        beforeDestroy: fr,
        beforeUnmount: fr,
        destroyed: fr,
        unmounted: fr,
        activated: fr,
        deactivated: fr,
        errorCaptured: fr,
        serverPrefetch: fr,
        components: Bi,
        directives: Bi,
        watch: TP,
        provide: $v,
        inject: bP
    };

    function $v(t, e) {
        return e ? t ? function() {
            return Qt(je(t) ? t.call(this, this) : t, je(e) ? e.call(this, this) : e)
        } : e : t
    }

    function bP(t, e) {
        return Bi(od(t), od(e))
    }

    function od(t) {
        if (Pe(t)) {
            const e = {};
            for (let r = 0; r < t.length; r++) e[t[r]] = t[r];
            return e
        }
        return t
    }

    function fr(t, e) {
        return t ? [...new Set([].concat(t, e))] : e
    }

    function Bi(t, e) {
        return t ? Qt(Qt(Object.create(null), t), e) : e
    }

    function TP(t, e) {
        if (!t) return e;
        if (!e) return t;
        const r = Qt(Object.create(null), t);
        for (const n in e) r[n] = fr(t[n], e[n]);
        return r
    }

    function SP(t, e, r, n = !1) {
        const s = {},
            o = {};
        kc(o, hl, 1), t.propsDefaults = Object.create(null), Ab(t, e, s, o);
        for (const c in t.propsOptions[0]) c in s || (s[c] = void 0);
        r ? t.props = n ? s : MN(s) : t.type.props ? t.props = s : t.props = o, t.attrs = o
    }

    function OP(t, e, r, n) {
        const {
            props: s,
            attrs: o,
            vnode: {
                patchFlag: c
            }
        } = t, u = rt(s), [f] = t.propsOptions;
        let h = !1;
        if ((n || c > 0) && !(c & 16)) {
            if (c & 8) {
                const m = t.vnode.dynamicProps;
                for (let _ = 0; _ < m.length; _++) {
                    let b = m[_];
                    if (cl(t.emitsOptions, b)) continue;
                    const C = e[b];
                    if (f)
                        if (Je(o, b)) C !== o[b] && (o[b] = C, h = !0);
                        else {
                            const L = Tn(b);
                            s[L] = cd(f, u, L, C, t, !1)
                        }
                    else C !== o[b] && (o[b] = C, h = !0)
                }
            }
        } else {
            Ab(t, e, s, o) && (h = !0);
            let m;
            for (const _ in u)(!e || !Je(e, _) && ((m = ss(_)) === _ || !Je(e, m))) && (f ? r && (r[_] !== void 0 || r[m] !== void 0) && (s[_] = cd(f, u, _, void 0, t, !0)) : delete s[_]);
            if (o !== u)
                for (const _ in o)(!e || !Je(e, _) && !0) && (delete o[_], h = !0)
        }
        h && Dn(t, "set", "$attrs")
    }

    function Ab(t, e, r, n) {
        const [s, o] = t.propsOptions;
        let c = !1,
            u;
        if (e)
            for (let f in e) {
                if (wc(f)) continue;
                const h = e[f];
                let m;
                s && Je(s, m = Tn(f)) ? !o || !o.includes(m) ? r[m] = h : (u || (u = {}))[m] = h : cl(t.emitsOptions, f) || (!(f in n) || h !== n[f]) && (n[f] = h, c = !0)
            }
        if (o) {
            const f = rt(r),
                h = u || ft;
            for (let m = 0; m < o.length; m++) {
                const _ = o[m];
                r[_] = cd(s, f, _, h[_], t, !Je(h, _))
            }
        }
        return c
    }

    function cd(t, e, r, n, s, o) {
        const c = t[r];
        if (c != null) {
            const u = Je(c, "default");
            if (u && n === void 0) {
                const f = c.default;
                if (c.type !== Function && je(f)) {
                    const {
                        propsDefaults: h
                    } = s;
                    r in h ? n = h[r] : (Vs(s), n = h[r] = f.call(null, e), Qi())
                } else n = f
            }
            c[0] && (o && !u ? n = !1 : c[1] && (n === "" || n === ss(r)) && (n = !0))
        }
        return n
    }

    function Rb(t, e, r = !1) {
        const n = e.propsCache,
            s = n.get(t);
        if (s) return s;
        const o = t.props,
            c = {},
            u = [];
        let f = !1;
        if (!je(t)) {
            const m = _ => {
                f = !0;
                const [b, C] = Rb(_, e, !0);
                Qt(c, b), C && u.push(...C)
            };
            !r && e.mixins.length && e.mixins.forEach(m), t.extends && m(t.extends), t.mixins && t.mixins.forEach(m)
        }
        if (!o && !f) return dt(t) && n.set(t, Ls), Ls;
        if (Pe(o))
            for (let m = 0; m < o.length; m++) {
                const _ = Tn(o[m]);
                Av(_) && (c[_] = ft)
            } else if (o)
                for (const m in o) {
                    const _ = Tn(m);
                    if (Av(_)) {
                        const b = o[m],
                            C = c[_] = Pe(b) || je(b) ? {
                                type: b
                            } : b;
                        if (C) {
                            const L = Pv(Boolean, C.type),
                                M = Pv(String, C.type);
                            C[0] = L > -1, C[1] = M < 0 || L < M, (L > -1 || Je(C, "default")) && u.push(_)
                        }
                    }
                }
        const h = [c, u];
        return dt(t) && n.set(t, h), h
    }

    function Av(t) {
        return t[0] !== "$"
    }

    function Rv(t) {
        const e = t && t.toString().match(/^\s*function (\w+)/);
        return e ? e[1] : t === null ? "null" : ""
    }

    function Nv(t, e) {
        return Rv(t) === Rv(e)
    }

    function Pv(t, e) {
        return Pe(e) ? e.findIndex(r => Nv(r, t)) : je(e) && Nv(e, t) ? 0 : -1
    }
    const Nb = t => t[0] === "_" || t === "$stable",
        Ch = t => Pe(t) ? t.map(_n) : [_n(t)],
        wP = (t, e, r) => {
            if (e._n) return e;
            const n = _h((...s) => Ch(e(...s)), r);
            return n._c = !1, n
        },
        Pb = (t, e, r) => {
            const n = t._ctx;
            for (const s in t) {
                if (Nb(s)) continue;
                const o = t[s];
                if (je(o)) e[s] = wP(s, o, n);
                else if (o != null) {
                    const c = Ch(o);
                    e[s] = () => c
                }
            }
        },
        Lb = (t, e) => {
            const r = Ch(e);
            t.slots.default = () => r
        },
        CP = (t, e) => {
            if (t.vnode.shapeFlag & 32) {
                const r = e._;
                r ? (t.slots = rt(e), kc(e, "_", r)) : Pb(e, t.slots = {})
            } else t.slots = {}, e && Lb(t, e);
            kc(t.slots, hl, 1)
        },
        IP = (t, e, r) => {
            const {
                vnode: n,
                slots: s
            } = t;
            let o = !0,
                c = ft;
            if (n.shapeFlag & 32) {
                const u = e._;
                u ? r && u === 1 ? o = !1 : (Qt(s, e), !r && u === 1 && delete s._) : (o = !e.$stable, Pb(e, s)), c = e
            } else e && (Lb(t, e), c = {
                default: 1
            });
            if (o)
                for (const u in s) !Nb(u) && !(u in c) && delete s[u]
        };

    function kb() {
        return {
            app: null,
            config: {
                isNativeTag: nN,
                performance: !1,
                globalProperties: {},
                optionMergeStrategies: {},
                errorHandler: void 0,
                warnHandler: void 0,
                compilerOptions: {}
            },
            mixins: [],
            components: {},
            directives: {},
            provides: Object.create(null),
            optionsCache: new WeakMap,
            propsCache: new WeakMap,
            emitsCache: new WeakMap
        }
    }
    let $P = 0;

    function AP(t, e) {
        return function(n, s = null) {
            je(n) || (n = Object.assign({}, n)), s != null && !dt(s) && (s = null);
            const o = kb(),
                c = new Set;
            let u = !1;
            const f = o.app = {
                _uid: $P++,
                _component: n,
                _props: s,
                _container: null,
                _context: o,
                _instance: null,
                version: VP,
                get config() {
                    return o.config
                },
                set config(h) {},
                use(h, ...m) {
                    return c.has(h) || (h && je(h.install) ? (c.add(h), h.install(f, ...m)) : je(h) && (c.add(h), h(f, ...m))), f
                },
                mixin(h) {
                    return o.mixins.includes(h) || o.mixins.push(h), f
                },
                component(h, m) {
                    return m ? (o.components[h] = m, f) : o.components[h]
                },
                directive(h, m) {
                    return m ? (o.directives[h] = m, f) : o.directives[h]
                },
                mount(h, m, _) {
                    if (!u) {
                        const b = xt(n, s);
                        return b.appContext = o, m && e ? e(b, h) : t(b, h, _), u = !0, f._container = h, h.__vue_app__ = f, pl(b.component) || b.component.proxy
                    }
                },
                unmount() {
                    u && (t(null, f._container), delete f._container.__vue_app__)
                },
                provide(h, m) {
                    return o.provides[h] = m, f
                }
            };
            return f
        }
    }

    function ld(t, e, r, n, s = !1) {
        if (Pe(t)) {
            t.forEach((b, C) => ld(b, e && (Pe(e) ? e[C] : e), r, n, s));
            return
        }
        if (Ic(n) && !s) return;
        const o = n.shapeFlag & 4 ? pl(n.component) || n.component.proxy : n.el,
            c = s ? null : o,
            {
                i: u,
                r: f
            } = t,
            h = e && e.r,
            m = u.refs === ft ? u.refs = {} : u.refs,
            _ = u.setupState;
        if (h != null && h !== f && (Gt(h) ? (m[h] = null, Je(_, h) && (_[h] = null)) : Jt(h) && (h.value = null)), je(f)) oi(f, u, 12, [c, m]);
        else {
            const b = Gt(f),
                C = Jt(f);
            if (b || C) {
                const L = () => {
                    if (t.f) {
                        const M = b ? m[f] : f.value;
                        s ? Pe(M) && ah(M, o) : Pe(M) ? M.includes(o) || M.push(o) : b ? (m[f] = [o], Je(_, f) && (_[f] = m[f])) : (f.value = [o], t.k && (m[t.k] = f.value))
                    } else b ? (m[f] = c, Je(_, f) && (_[f] = c)) : C && (f.value = c, t.k && (m[t.k] = c))
                };
                c ? (L.id = -1, Er(L, r)) : L()
            }
        }
    }
    const Er = rP;

    function RP(t) {
        return NP(t)
    }

    function NP(t, e) {
        const r = lN();
        r.__VUE__ = !0;
        const {
            insert: n,
            remove: s,
            patchProp: o,
            createElement: c,
            createText: u,
            createComment: f,
            setText: h,
            setElementText: m,
            parentNode: _,
            nextSibling: b,
            setScopeId: C = sn,
            cloneNode: L,
            insertStaticContent: M
        } = t, B = (g, p, O, D = null, U = null, V = null, ce = !1, re = null, Q = !!p.dynamicChildren) => {
            if (g === p) return;
            g && !Ki(g, p) && (D = Et(g), wt(g, U, V, !0), g = null), p.patchFlag === -2 && (Q = !1, p.dynamicChildren = null);
            const {
                type: A,
                ref: W,
                shapeFlag: he
            } = p;
            switch (A) {
                case dl:
                    I(g, p, O, D);
                    break;
                case an:
                    K(g, p, O, D);
                    break;
                case of:
                    g == null && Y(p, O, D, ce);
                    break;
                case It:
                    we(g, p, O, D, U, V, ce, re, Q);
                    break;
                default:
                    he & 1 ? z(g, p, O, D, U, V, ce, re, Q) : he & 6 ? F(g, p, O, D, U, V, ce, re, Q) : (he & 64 || he & 128) && A.process(g, p, O, D, U, V, ce, re, Q, Lt)
            }
            W != null && U && ld(W, g && g.ref, V, p || g, !p)
        }, I = (g, p, O, D) => {
            if (g == null) n(p.el = u(p.children), O, D);
            else {
                const U = p.el = g.el;
                p.children !== g.children && h(U, p.children)
            }
        }, K = (g, p, O, D) => {
            g == null ? n(p.el = f(p.children || ""), O, D) : p.el = g.el
        }, Y = (g, p, O, D) => {
            [g.el, g.anchor] = M(g.children, p, O, D, g.el, g.anchor)
        }, G = ({
            el: g,
            anchor: p
        }, O, D) => {
            let U;
            for (; g && g !== p;) U = b(g), n(g, O, D), g = U;
            n(p, O, D)
        }, j = ({
            el: g,
            anchor: p
        }) => {
            let O;
            for (; g && g !== p;) O = b(g), s(g), g = O;
            s(p)
        }, z = (g, p, O, D, U, V, ce, re, Q) => {
            ce = ce || p.type === "svg", g == null ? ie(p, O, D, U, V, ce, re, Q) : Ie(g, p, U, V, ce, re, Q)
        }, ie = (g, p, O, D, U, V, ce, re) => {
            let Q, A;
            const {
                type: W,
                props: he,
                shapeFlag: pe,
                transition: $e,
                patchFlag: Le,
                dirs: w
            } = g;
            if (g.el && L !== void 0 && Le === -1) Q = g.el = L(g.el);
            else {
                if (Q = g.el = c(g.type, V, he && he.is, he), pe & 8 ? m(Q, g.children) : pe & 16 && ue(g.children, Q, null, D, U, V && W !== "foreignObject", ce, re), w && Li(g, null, D, "created"), he) {
                    for (const N in he) N !== "value" && !wc(N) && o(Q, N, null, he[N], V, g.children, D, U, nt);
                    "value" in he && o(Q, "value", null, he.value), (A = he.onVnodeBeforeMount) && pn(A, D, g)
                }
                oe(Q, g, g.scopeId, ce, D)
            }
            w && Li(g, null, D, "beforeMount");
            const T = (!U || U && !U.pendingBranch) && $e && !$e.persisted;
            T && $e.beforeEnter(Q), n(Q, p, O), ((A = he && he.onVnodeMounted) || T || w) && Er(() => {
                A && pn(A, D, g), T && $e.enter(Q), w && Li(g, null, D, "mounted")
            }, U)
        }, oe = (g, p, O, D, U) => {
            if (O && C(g, O), D)
                for (let V = 0; V < D.length; V++) C(g, D[V]);
            if (U) {
                let V = U.subTree;
                if (p === V) {
                    const ce = U.vnode;
                    oe(g, ce, ce.scopeId, ce.slotScopeIds, U.parent)
                }
            }
        }, ue = (g, p, O, D, U, V, ce, re, Q = 0) => {
            for (let A = Q; A < g.length; A++) {
                const W = g[A] = re ? ei(g[A]) : _n(g[A]);
                B(null, W, p, O, D, U, V, ce, re)
            }
        }, Ie = (g, p, O, D, U, V, ce) => {
            const re = p.el = g.el;
            let {
                patchFlag: Q,
                dynamicChildren: A,
                dirs: W
            } = p;
            Q |= g.patchFlag & 16;
            const he = g.props || ft,
                pe = p.props || ft;
            let $e;
            O && ki(O, !1), ($e = pe.onVnodeBeforeUpdate) && pn($e, O, p, g), W && Li(p, g, O, "beforeUpdate"), O && ki(O, !0);
            const Le = U && p.type !== "foreignObject";
            if (A ? Ce(g.dynamicChildren, A, re, O, D, Le, V) : ce || Se(g, p, re, null, O, D, Le, V, !1), Q > 0) {
                if (Q & 16) fe(re, p, he, pe, O, D, U);
                else if (Q & 2 && he.class !== pe.class && o(re, "class", null, pe.class, U), Q & 4 && o(re, "style", he.style, pe.style, U), Q & 8) {
                    const w = p.dynamicProps;
                    for (let T = 0; T < w.length; T++) {
                        const N = w[T],
                            S = he[N],
                            P = pe[N];
                        (P !== S || N === "value") && o(re, N, S, P, U, g.children, O, D, nt)
                    }
                }
                Q & 1 && g.children !== p.children && m(re, p.children)
            } else !ce && A == null && fe(re, p, he, pe, O, D, U);
            (($e = pe.onVnodeUpdated) || W) && Er(() => {
                $e && pn($e, O, p, g), W && Li(p, g, O, "updated")
            }, D)
        }, Ce = (g, p, O, D, U, V, ce) => {
            for (let re = 0; re < p.length; re++) {
                const Q = g[re],
                    A = p[re],
                    W = Q.el && (Q.type === It || !Ki(Q, A) || Q.shapeFlag & 70) ? _(Q.el) : O;
                B(Q, A, W, null, D, U, V, ce, !0)
            }
        }, fe = (g, p, O, D, U, V, ce) => {
            if (O !== D) {
                for (const re in D) {
                    if (wc(re)) continue;
                    const Q = D[re],
                        A = O[re];
                    Q !== A && re !== "value" && o(g, re, A, Q, ce, p.children, U, V, nt)
                }
                if (O !== ft)
                    for (const re in O) !wc(re) && !(re in D) && o(g, re, O[re], null, ce, p.children, U, V, nt);
                "value" in D && o(g, "value", O.value, D.value)
            }
        }, we = (g, p, O, D, U, V, ce, re, Q) => {
            const A = p.el = g ? g.el : u(""),
                W = p.anchor = g ? g.anchor : u("");
            let {
                patchFlag: he,
                dynamicChildren: pe,
                slotScopeIds: $e
            } = p;
            $e && (re = re ? re.concat($e) : $e), g == null ? (n(A, O, D), n(W, O, D), ue(p.children, O, W, U, V, ce, re, Q)) : he > 0 && he & 64 && pe && g.dynamicChildren ? (Ce(g.dynamicChildren, pe, O, U, V, ce, re), (p.key != null || U && p === U.subTree) && xb(g, p, !0)) : Se(g, p, O, W, U, V, ce, re, Q)
        }, F = (g, p, O, D, U, V, ce, re, Q) => {
            p.slotScopeIds = re, g == null ? p.shapeFlag & 512 ? U.ctx.activate(p, O, D, ce, Q) : te(p, O, D, U, V, ce, Q) : de(g, p, Q)
        }, te = (g, p, O, D, U, V, ce) => {
            const re = g.component = UP(g, D, U);
            if (ul(g) && (re.ctx.renderer = Lt), BP(re), re.asyncDep) {
                if (U && U.registerDep(re, Ee), !g.el) {
                    const Q = re.subTree = xt(an);
                    K(null, Q, p, O)
                }
                return
            }
            Ee(re, g, p, O, U, V, ce)
        }, de = (g, p, O) => {
            const D = p.component = g.component;
            if (QN(g, p, O))
                if (D.asyncDep && !D.asyncResolved) {
                    ve(D, p, O);
                    return
                } else D.next = p, YN(D.update), D.update();
            else p.el = g.el, D.vnode = p
        }, Ee = (g, p, O, D, U, V, ce) => {
            const re = () => {
                    if (g.isMounted) {
                        let {
                            next: W,
                            bu: he,
                            u: pe,
                            parent: $e,
                            vnode: Le
                        } = g, w = W, T;
                        ki(g, !1), W ? (W.el = Le.el, ve(g, W, ce)) : W = Le, he && Cc(he), (T = W.props && W.props.onVnodeBeforeUpdate) && pn(T, $e, W, Le), ki(g, !0);
                        const N = sf(g),
                            S = g.subTree;
                        g.subTree = N, B(S, N, _(S.el), Et(S), g, U, V), W.el = N.el, w === null && eP(g, N.el), pe && Er(pe, U), (T = W.props && W.props.onVnodeUpdated) && Er(() => pn(T, $e, W, Le), U)
                    } else {
                        let W;
                        const {
                            el: he,
                            props: pe
                        } = p, {
                            bm: $e,
                            m: Le,
                            parent: w
                        } = g, T = Ic(p);
                        if (ki(g, !1), $e && Cc($e), !T && (W = pe && pe.onVnodeBeforeMount) && pn(W, w, p), ki(g, !0), he && kt) {
                            const N = () => {
                                g.subTree = sf(g), kt(he, g.subTree, g, U, null)
                            };
                            T ? p.type.__asyncLoader().then(() => !g.isUnmounted && N()) : N()
                        } else {
                            const N = g.subTree = sf(g);
                            B(null, N, O, D, g, U, V), p.el = N.el
                        }
                        if (Le && Er(Le, U), !T && (W = pe && pe.onVnodeMounted)) {
                            const N = p;
                            Er(() => pn(W, w, N), U)
                        }(p.shapeFlag & 256 || w && Ic(w.vnode) && w.vnode.shapeFlag & 256) && g.a && Er(g.a, U), g.isMounted = !0, p = O = D = null
                    }
                },
                Q = g.effect = new lh(re, () => mh(A), g.scope),
                A = g.update = () => Q.run();
            A.id = g.uid, ki(g, !0), A()
        }, ve = (g, p, O) => {
            p.component = g;
            const D = g.vnode.props;
            g.vnode = p, g.next = null, OP(g, p.props, D, O), IP(g, p.children, O), Qs(), Tv(), ea()
        }, Se = (g, p, O, D, U, V, ce, re, Q = !1) => {
            const A = g && g.children,
                W = g ? g.shapeFlag : 0,
                he = p.children,
                {
                    patchFlag: pe,
                    shapeFlag: $e
                } = p;
            if (pe > 0) {
                if (pe & 128) {
                    Ue(A, he, O, D, U, V, ce, re, Q);
                    return
                } else if (pe & 256) {
                    xe(A, he, O, D, U, V, ce, re, Q);
                    return
                }
            }
            $e & 8 ? (W & 16 && nt(A, U, V), he !== A && m(O, he)) : W & 16 ? $e & 16 ? Ue(A, he, O, D, U, V, ce, re, Q) : nt(A, U, V, !0) : (W & 8 && m(O, ""), $e & 16 && ue(he, O, D, U, V, ce, re, Q))
        }, xe = (g, p, O, D, U, V, ce, re, Q) => {
            g = g || Ls, p = p || Ls;
            const A = g.length,
                W = p.length,
                he = Math.min(A, W);
            let pe;
            for (pe = 0; pe < he; pe++) {
                const $e = p[pe] = Q ? ei(p[pe]) : _n(p[pe]);
                B(g[pe], $e, O, null, U, V, ce, re, Q)
            }
            A > W ? nt(g, U, V, !0, !1, he) : ue(p, O, D, U, V, ce, re, Q, he)
        }, Ue = (g, p, O, D, U, V, ce, re, Q) => {
            let A = 0;
            const W = p.length;
            let he = g.length - 1,
                pe = W - 1;
            for (; A <= he && A <= pe;) {
                const $e = g[A],
                    Le = p[A] = Q ? ei(p[A]) : _n(p[A]);
                if (Ki($e, Le)) B($e, Le, O, null, U, V, ce, re, Q);
                else break;
                A++
            }
            for (; A <= he && A <= pe;) {
                const $e = g[he],
                    Le = p[pe] = Q ? ei(p[pe]) : _n(p[pe]);
                if (Ki($e, Le)) B($e, Le, O, null, U, V, ce, re, Q);
                else break;
                he--, pe--
            }
            if (A > he) {
                if (A <= pe) {
                    const $e = pe + 1,
                        Le = $e < W ? p[$e].el : D;
                    for (; A <= pe;) B(null, p[A] = Q ? ei(p[A]) : _n(p[A]), O, Le, U, V, ce, re, Q), A++
                }
            } else if (A > pe)
                for (; A <= he;) wt(g[A], U, V, !0), A++;
            else {
                const $e = A,
                    Le = A,
                    w = new Map;
                for (A = Le; A <= pe; A++) {
                    const Te = p[A] = Q ? ei(p[A]) : _n(p[A]);
                    Te.key != null && w.set(Te.key, A)
                }
                let T, N = 0;
                const S = pe - Le + 1;
                let P = !1,
                    X = 0;
                const ee = new Array(S);
                for (A = 0; A < S; A++) ee[A] = 0;
                for (A = $e; A <= he; A++) {
                    const Te = g[A];
                    if (N >= S) {
                        wt(Te, U, V, !0);
                        continue
                    }
                    let ot;
                    if (Te.key != null) ot = w.get(Te.key);
                    else
                        for (T = Le; T <= pe; T++)
                            if (ee[T - Le] === 0 && Ki(Te, p[T])) {
                                ot = T;
                                break
                            } ot === void 0 ? wt(Te, U, V, !0) : (ee[ot - Le] = A + 1, ot >= X ? X = ot : P = !0, B(Te, p[ot], O, null, U, V, ce, re, Q), N++)
                }
                const _e = P ? PP(ee) : Ls;
                for (T = _e.length - 1, A = S - 1; A >= 0; A--) {
                    const Te = Le + A,
                        ot = p[Te],
                        tr = Te + 1 < W ? p[Te + 1].el : D;
                    ee[A] === 0 ? B(null, ot, O, tr, U, V, ce, re, Q) : P && (T < 0 || A !== _e[T] ? Ze(ot, O, tr, 2) : T--)
                }
            }
        }, Ze = (g, p, O, D, U = null) => {
            const {
                el: V,
                type: ce,
                transition: re,
                children: Q,
                shapeFlag: A
            } = g;
            if (A & 6) {
                Ze(g.component.subTree, p, O, D);
                return
            }
            if (A & 128) {
                g.suspense.move(p, O, D);
                return
            }
            if (A & 64) {
                ce.move(g, p, O, Lt);
                return
            }
            if (ce === It) {
                n(V, p, O);
                for (let he = 0; he < Q.length; he++) Ze(Q[he], p, O, D);
                n(g.anchor, p, O);
                return
            }
            if (ce === of) {
                G(g, p, O);
                return
            }
            if (D !== 2 && A & 1 && re)
                if (D === 0) re.beforeEnter(V), n(V, p, O), Er(() => re.enter(V), U);
                else {
                    const {
                        leave: he,
                        delayLeave: pe,
                        afterLeave: $e
                    } = re, Le = () => n(V, p, O), w = () => {
                        he(V, () => {
                            Le(), $e && $e()
                        })
                    };
                    pe ? pe(V, Le, w) : w()
                }
            else n(V, p, O)
        }, wt = (g, p, O, D = !1, U = !1) => {
            const {
                type: V,
                props: ce,
                ref: re,
                children: Q,
                dynamicChildren: A,
                shapeFlag: W,
                patchFlag: he,
                dirs: pe
            } = g;
            if (re != null && ld(re, null, O, g, !0), W & 256) {
                p.ctx.deactivate(g);
                return
            }
            const $e = W & 1 && pe,
                Le = !Ic(g);
            let w;
            if (Le && (w = ce && ce.onVnodeBeforeUnmount) && pn(w, p, g), W & 6) pr(g.component, O, D);
            else {
                if (W & 128) {
                    g.suspense.unmount(O, D);
                    return
                }
                $e && Li(g, null, p, "beforeUnmount"), W & 64 ? g.type.remove(g, p, O, U, Lt, D) : A && (V !== It || he > 0 && he & 64) ? nt(A, p, O, !1, !0) : (V === It && he & 384 || !U && W & 16) && nt(Q, p, O), D && Sr(g)
            }(Le && (w = ce && ce.onVnodeUnmounted) || $e) && Er(() => {
                w && pn(w, p, g), $e && Li(g, null, p, "unmounted")
            }, O)
        }, Sr = g => {
            const {
                type: p,
                el: O,
                anchor: D,
                transition: U
            } = g;
            if (p === It) {
                er(O, D);
                return
            }
            if (p === of) {
                j(g);
                return
            }
            const V = () => {
                s(O), U && !U.persisted && U.afterLeave && U.afterLeave()
            };
            if (g.shapeFlag & 1 && U && !U.persisted) {
                const {
                    leave: ce,
                    delayLeave: re
                } = U, Q = () => ce(O, V);
                re ? re(g.el, V, Q) : Q()
            } else V()
        }, er = (g, p) => {
            let O;
            for (; g !== p;) O = b(g), s(g), g = O;
            s(p)
        }, pr = (g, p, O) => {
            const {
                bum: D,
                scope: U,
                update: V,
                subTree: ce,
                um: re
            } = g;
            D && Cc(D), U.stop(), V && (V.active = !1, wt(ce, g, p, O)), re && Er(re, p), Er(() => {
                g.isUnmounted = !0
            }, p), p && p.pendingBranch && !p.isUnmounted && g.asyncDep && !g.asyncResolved && g.suspenseId === p.pendingId && (p.deps--, p.deps === 0 && p.resolve())
        }, nt = (g, p, O, D = !1, U = !1, V = 0) => {
            for (let ce = V; ce < g.length; ce++) wt(g[ce], p, O, D, U)
        }, Et = g => g.shapeFlag & 6 ? Et(g.component.subTree) : g.shapeFlag & 128 ? g.suspense.next() : b(g.anchor || g.el), it = (g, p, O) => {
            g == null ? p._vnode && wt(p._vnode, null, null, !0) : B(p._vnode || null, g, p, null, null, null, O), Tv(), mb(), p._vnode = g
        }, Lt = {
            p: B,
            um: wt,
            m: Ze,
            r: Sr,
            mt: te,
            mc: ue,
            pc: Se,
            pbc: Ce,
            n: Et,
            o: t
        };
        let Wt, kt;
        return e && ([Wt, kt] = e(Lt)), {
            render: it,
            hydrate: Wt,
            createApp: AP(it, Wt)
        }
    }

    function ki({
        effect: t,
        update: e
    }, r) {
        t.allowRecurse = e.allowRecurse = r
    }

    function xb(t, e, r = !1) {
        const n = t.children,
            s = e.children;
        if (Pe(n) && Pe(s))
            for (let o = 0; o < n.length; o++) {
                const c = n[o];
                let u = s[o];
                u.shapeFlag & 1 && !u.dynamicChildren && ((u.patchFlag <= 0 || u.patchFlag === 32) && (u = s[o] = ei(s[o]), u.el = c.el), r || xb(c, u))
            }
    }

    function PP(t) {
        const e = t.slice(),
            r = [0];
        let n, s, o, c, u;
        const f = t.length;
        for (n = 0; n < f; n++) {
            const h = t[n];
            if (h !== 0) {
                if (s = r[r.length - 1], t[s] < h) {
                    e[n] = s, r.push(n);
                    continue
                }
                for (o = 0, c = r.length - 1; o < c;) u = o + c >> 1, t[r[u]] < h ? o = u + 1 : c = u;
                h < t[r[o]] && (o > 0 && (e[n] = r[o - 1]), r[o] = n)
            }
        }
        for (o = r.length, c = r[o - 1]; o-- > 0;) r[o] = c, c = e[c];
        return r
    }
    const LP = t => t.__isTeleport,
        It = Symbol(void 0),
        dl = Symbol(void 0),
        an = Symbol(void 0),
        of = Symbol(void 0),
        ka = [];
    let nn = null;

    function se(t = !1) {
        ka.push(nn = t ? null : [])
    }

    function kP() {
        ka.pop(), nn = ka[ka.length - 1] || null
    }
    let qa = 1;

    function Lv(t) {
        qa += t
    }

    function Db(t) {
        return t.dynamicChildren = qa > 0 ? nn || Ls : null, kP(), qa > 0 && nn && nn.push(t), t
    }

    function le(t, e, r, n, s, o) {
        return Db(ae(t, e, r, n, s, o, !0))
    }

    function ui(t, e, r, n, s) {
        return Db(xt(t, e, r, n, s, !0))
    }

    function ud(t) {
        return t ? t.__v_isVNode === !0 : !1
    }

    function Ki(t, e) {
        return t.type === e.type && t.key === e.key
    }
    const hl = "__vInternal",
        Mb = ({
            key: t
        }) => t != null ? t : null,
        $c = ({
            ref: t,
            ref_key: e,
            ref_for: r
        }) => t != null ? Gt(t) || Jt(t) || je(t) ? {
            i: Vr,
            r: t,
            k: e,
            f: !!r
        } : t : null;

    function ae(t, e = null, r = null, n = 0, s = null, o = t === It ? 0 : 1, c = !1, u = !1) {
        const f = {
            __v_isVNode: !0,
            __v_skip: !0,
            type: t,
            props: e,
            key: e && Mb(e),
            ref: e && $c(e),
            scopeId: ll,
            slotScopeIds: null,
            children: r,
            component: null,
            suspense: null,
            ssContent: null,
            ssFallback: null,
            dirs: null,
            transition: null,
            el: null,
            anchor: null,
            target: null,
            targetAnchor: null,
            staticCount: 0,
            shapeFlag: o,
            patchFlag: n,
            dynamicProps: s,
            dynamicChildren: null,
            appContext: null
        };
        return u ? (Ih(f, r), o & 128 && t.normalize(f)) : r && (f.shapeFlag |= Gt(r) ? 8 : 16), qa > 0 && !c && nn && (f.patchFlag > 0 || o & 6) && f.patchFlag !== 32 && nn.push(f), f
    }
    const xt = xP;

    function xP(t, e = null, r = null, n = 0, s = null, o = !1) {
        if ((!t || t === Ib) && (t = an), ud(t)) {
            const u = fi(t, e, !0);
            return r && Ih(u, r), qa > 0 && !o && nn && (u.shapeFlag & 6 ? nn[nn.indexOf(t)] = u : nn.push(u)), u.patchFlag |= -2, u
        }
        if (HP(t) && (t = t.__vccOpts), e) {
            e = DP(e);
            let {
                class: u,
                style: f
            } = e;
            u && !Gt(u) && (e.class = qe(u)), dt(f) && (ob(f) && !Pe(f) && (f = Qt({}, f)), e.style = el(f))
        }
        const c = Gt(t) ? 1 : tP(t) ? 128 : LP(t) ? 64 : dt(t) ? 4 : je(t) ? 2 : 0;
        return ae(t, e, r, n, s, c, o, !0)
    }

    function DP(t) {
        return t ? ob(t) || hl in t ? Qt({}, t) : t : null
    }

    function fi(t, e, r = !1) {
        const {
            props: n,
            ref: s,
            patchFlag: o,
            children: c
        } = t, u = e ? $h(n || {}, e) : n;
        return {
            __v_isVNode: !0,
            __v_skip: !0,
            type: t.type,
            props: u,
            key: u && Mb(u),
            ref: e && e.ref ? r && s ? Pe(s) ? s.concat($c(e)) : [s, $c(e)] : $c(e) : s,
            scopeId: t.scopeId,
            slotScopeIds: t.slotScopeIds,
            children: c,
            target: t.target,
            targetAnchor: t.targetAnchor,
            staticCount: t.staticCount,
            shapeFlag: t.shapeFlag,
            patchFlag: e && t.type !== It ? o === -1 ? 16 : o | 16 : o,
            dynamicProps: t.dynamicProps,
            dynamicChildren: t.dynamicChildren,
            appContext: t.appContext,
            dirs: t.dirs,
            transition: t.transition,
            component: t.component,
            suspense: t.suspense,
            ssContent: t.ssContent && fi(t.ssContent),
            ssFallback: t.ssFallback && fi(t.ssFallback),
            el: t.el,
            anchor: t.anchor
        }
    }

    function di(t = " ", e = 0) {
        return xt(dl, null, t, e)
    }

    function We(t = "", e = !1) {
        return e ? (se(), ui(an, null, t)) : xt(an, null, t)
    }

    function _n(t) {
        return t == null || typeof t == "boolean" ? xt(an) : Pe(t) ? xt(It, null, t.slice()) : typeof t == "object" ? ei(t) : xt(dl, null, String(t))
    }

    function ei(t) {
        return t.el === null || t.memo ? t : fi(t)
    }

    function Ih(t, e) {
        let r = 0;
        const {
            shapeFlag: n
        } = t;
        if (e == null) e = null;
        else if (Pe(e)) r = 16;
        else if (typeof e == "object")
            if (n & 65) {
                const s = e.default;
                s && (s._c && (s._d = !1), Ih(t, s()), s._c && (s._d = !0));
                return
            } else {
                r = 32;
                const s = e._;
                !s && !(hl in e) ? e._ctx = Vr : s === 3 && Vr && (Vr.slots._ === 1 ? e._ = 1 : (e._ = 2, t.patchFlag |= 1024))
            }
        else je(e) ? (e = {
            default: e,
            _ctx: Vr
        }, r = 32) : (e = String(e), n & 64 ? (r = 16, e = [di(e)]) : r = 8);
        t.children = e, t.shapeFlag |= r
    }

    function $h(...t) {
        const e = {};
        for (let r = 0; r < t.length; r++) {
            const n = t[r];
            for (const s in n)
                if (s === "class") e.class !== n.class && (e.class = qe([e.class, n.class]));
                else if (s === "style") e.style = el([e.style, n.style]);
            else if (rl(s)) {
                const o = e[s],
                    c = n[s];
                c && o !== c && !(Pe(o) && o.includes(c)) && (e[s] = o ? [].concat(o, c) : c)
            } else s !== "" && (e[s] = n[s])
        }
        return e
    }

    function pn(t, e, r, n = null) {
        Yr(t, e, 7, [r, n])
    }
    const MP = kb();
    let FP = 0;

    function UP(t, e, r) {
        const n = t.type,
            s = (e ? e.appContext : t.appContext) || MP,
            o = {
                uid: FP++,
                vnode: t,
                type: n,
                parent: e,
                appContext: s,
                root: null,
                next: null,
                subTree: null,
                effect: null,
                update: null,
                scope: new zE(!0),
                render: null,
                proxy: null,
                exposed: null,
                exposeProxy: null,
                withProxy: null,
                provides: e ? e.provides : Object.create(s.provides),
                accessCache: null,
                renderCache: [],
                components: null,
                directives: null,
                propsOptions: Rb(n, s),
                emitsOptions: yb(n, s),
                emit: null,
                emitted: null,
                propsDefaults: ft,
                inheritAttrs: n.inheritAttrs,
                ctx: ft,
                data: ft,
                props: ft,
                attrs: ft,
                slots: ft,
                refs: ft,
                setupState: ft,
                setupContext: null,
                suspense: r,
                suspenseId: r ? r.pendingId : 0,
                asyncDep: null,
                asyncResolved: !1,
                isMounted: !1,
                isUnmounted: !1,
                isDeactivated: !1,
                bc: null,
                c: null,
                bm: null,
                m: null,
                bu: null,
                u: null,
                um: null,
                bum: null,
                da: null,
                a: null,
                rtg: null,
                rtc: null,
                ec: null,
                sp: null
            };
        return o.ctx = {
            _: o
        }, o.root = e ? e.root : o, o.emit = XN.bind(null, o), t.ce && t.ce(o), o
    }
    let Vt = null;
    const is = () => Vt || Vr,
        Vs = t => {
            Vt = t, t.scope.on()
        },
        Qi = () => {
            Vt && Vt.scope.off(), Vt = null
        };

    function Fb(t) {
        return t.vnode.shapeFlag & 4
    }
    let za = !1;

    function BP(t, e = !1) {
        za = e;
        const {
            props: r,
            children: n
        } = t.vnode, s = Fb(t);
        SP(t, r, s, e), CP(t, n);
        const o = s ? jP(t, e) : void 0;
        return za = !1, o
    }

    function jP(t, e) {
        const r = t.type;
        t.accessCache = Object.create(null), t.proxy = cb(new Proxy(t.ctx, vP));
        const {
            setup: n
        } = r;
        if (n) {
            const s = t.setupContext = n.length > 1 ? WP(t) : null;
            Vs(t), Qs();
            const o = oi(n, t, 0, [t.props, s]);
            if (ea(), Qi(), VE(o)) {
                if (o.then(Qi, Qi), e) return o.then(c => {
                    kv(t, c, e)
                }).catch(c => {
                    ol(c, t, 0)
                });
                t.asyncDep = o
            } else kv(t, o, e)
        } else Ub(t, e)
    }

    function kv(t, e, r) {
        je(e) ? t.type.__ssrInlineRender ? t.ssrRender = e : t.render = e : dt(e) && (t.setupState = db(e)), Ub(t, r)
    }
    let xv;

    function Ub(t, e, r) {
        const n = t.type;
        if (!t.render) {
            if (!e && xv && !n.render) {
                const s = n.template || wh(t).template;
                if (s) {
                    const {
                        isCustomElement: o,
                        compilerOptions: c
                    } = t.appContext.config, {
                        delimiters: u,
                        compilerOptions: f
                    } = n, h = Qt(Qt({
                        isCustomElement: o,
                        delimiters: u
                    }, c), f);
                    n.render = xv(s, h)
                }
            }
            t.render = n.render || sn
        }
        Vs(t), Qs(), yP(t), ea(), Qi()
    }

    function GP(t) {
        return new Proxy(t.attrs, {
            get(e, r) {
                return Nr(t, "get", "$attrs"), e[r]
            }
        })
    }

    function WP(t) {
        const e = n => {
            t.exposed = n || {}
        };
        let r;
        return {
            get attrs() {
                return r || (r = GP(t))
            },
            slots: t.slots,
            emit: t.emit,
            expose: e
        }
    }

    function pl(t) {
        if (t.exposed) return t.exposeProxy || (t.exposeProxy = new Proxy(db(cb(t.exposed)), {
            get(e, r) {
                if (r in e) return e[r];
                if (r in Fc) return Fc[r](t)
            }
        }))
    }

    function KP(t, e = !0) {
        return je(t) ? t.displayName || t.name : t.name || e && t.__name
    }

    function HP(t) {
        return je(t) && "__vccOpts" in t
    }
    const Rr = (t, e) => WN(t, e, za);

    function Ah(t, e, r) {
        const n = arguments.length;
        return n === 2 ? dt(e) && !Pe(e) ? ud(e) ? xt(t, null, [e]) : xt(t, e) : xt(t, null, e) : (n > 3 ? r = Array.prototype.slice.call(arguments, 2) : n === 3 && ud(r) && (r = [r]), xt(t, e, r))
    }
    const VP = "3.2.39",
        YP = "http://www.w3.org/2000/svg",
        Hi = typeof document < "u" ? document : null,
        Dv = Hi && Hi.createElement("template"),
        qP = {
            insert: (t, e, r) => {
                e.insertBefore(t, r || null)
            },
            remove: t => {
                const e = t.parentNode;
                e && e.removeChild(t)
            },
            createElement: (t, e, r, n) => {
                const s = e ? Hi.createElementNS(YP, t) : Hi.createElement(t, r ? {
                    is: r
                } : void 0);
                return t === "select" && n && n.multiple != null && s.setAttribute("multiple", n.multiple), s
            },
            createText: t => Hi.createTextNode(t),
            createComment: t => Hi.createComment(t),
            setText: (t, e) => {
                t.nodeValue = e
            },
            setElementText: (t, e) => {
                t.textContent = e
            },
            parentNode: t => t.parentNode,
            nextSibling: t => t.nextSibling,
            querySelector: t => Hi.querySelector(t),
            setScopeId(t, e) {
                t.setAttribute(e, "")
            },
            cloneNode(t) {
                const e = t.cloneNode(!0);
                return "_value" in t && (e._value = t._value), e
            },
            insertStaticContent(t, e, r, n, s, o) {
                const c = r ? r.previousSibling : e.lastChild;
                if (s && (s === o || s.nextSibling))
                    for (; e.insertBefore(s.cloneNode(!0), r), !(s === o || !(s = s.nextSibling)););
                else {
                    Dv.innerHTML = n ? `<svg>${t}</svg>` : t;
                    const u = Dv.content;
                    if (n) {
                        const f = u.firstChild;
                        for (; f.firstChild;) u.appendChild(f.firstChild);
                        u.removeChild(f)
                    }
                    e.insertBefore(u, r)
                }
                return [c ? c.nextSibling : e.firstChild, r ? r.previousSibling : e.lastChild]
            }
        };

    function zP(t, e, r) {
        const n = t._vtc;
        n && (e = (e ? [e, ...n] : [...n]).join(" ")), e == null ? t.removeAttribute("class") : r ? t.setAttribute("class", e) : t.className = e
    }

    function XP(t, e, r) {
        const n = t.style,
            s = Gt(r);
        if (r && !s) {
            for (const o in r) fd(n, o, r[o]);
            if (e && !Gt(e))
                for (const o in e) r[o] == null && fd(n, o, "")
        } else {
            const o = n.display;
            s ? e !== r && (n.cssText = r) : e && t.removeAttribute("style"), "_vod" in t && (n.display = o)
        }
    }
    const Mv = /\s*!important$/;

    function fd(t, e, r) {
        if (Pe(r)) r.forEach(n => fd(t, e, n));
        else if (r == null && (r = ""), e.startsWith("--")) t.setProperty(e, r);
        else {
            const n = JP(t, e);
            Mv.test(r) ? t.setProperty(ss(n), r.replace(Mv, ""), "important") : t[n] = r
        }
    }
    const Fv = ["Webkit", "Moz", "ms"],
        cf = {};

    function JP(t, e) {
        const r = cf[e];
        if (r) return r;
        let n = Tn(e);
        if (n !== "filter" && n in t) return cf[e] = n;
        n = sl(n);
        for (let s = 0; s < Fv.length; s++) {
            const o = Fv[s] + n;
            if (o in t) return cf[e] = o
        }
        return e
    }
    const Uv = "http://www.w3.org/1999/xlink";

    function ZP(t, e, r, n, s) {
        if (n && e.startsWith("xlink:")) r == null ? t.removeAttributeNS(Uv, e.slice(6, e.length)) : t.setAttributeNS(Uv, e, r);
        else {
            const o = ZR(e);
            r == null || o && !WE(r) ? t.removeAttribute(e) : t.setAttribute(e, o ? "" : r)
        }
    }

    function QP(t, e, r, n, s, o, c) {
        if (e === "innerHTML" || e === "textContent") {
            n && c(n, s, o), t[e] = r == null ? "" : r;
            return
        }
        if (e === "value" && t.tagName !== "PROGRESS" && !t.tagName.includes("-")) {
            t._value = r;
            const f = r == null ? "" : r;
            (t.value !== f || t.tagName === "OPTION") && (t.value = f), r == null && t.removeAttribute(e);
            return
        }
        let u = !1;
        if (r === "" || r == null) {
            const f = typeof t[e];
            f === "boolean" ? r = WE(r) : r == null && f === "string" ? (r = "", u = !0) : f === "number" && (r = 0, u = !0)
        }
        try {
            t[e] = r
        } catch {}
        u && t.removeAttribute(e)
    }
    const [Bb, eL] = (() => {
        let t = Date.now,
            e = !1;
        if (typeof window < "u") {
            Date.now() > document.createEvent("Event").timeStamp && (t = performance.now.bind(performance));
            const r = navigator.userAgent.match(/firefox\/(\d+)/i);
            e = !!(r && Number(r[1]) <= 53)
        }
        return [t, e]
    })();
    let dd = 0;
    const tL = Promise.resolve(),
        rL = () => {
            dd = 0
        },
        nL = () => dd || (tL.then(rL), dd = Bb());

    function Vi(t, e, r, n) {
        t.addEventListener(e, r, n)
    }

    function iL(t, e, r, n) {
        t.removeEventListener(e, r, n)
    }

    function sL(t, e, r, n, s = null) {
        const o = t._vei || (t._vei = {}),
            c = o[e];
        if (n && c) c.value = n;
        else {
            const [u, f] = aL(e);
            if (n) {
                const h = o[e] = oL(n, s);
                Vi(t, u, h, f)
            } else c && (iL(t, u, c, f), o[e] = void 0)
        }
    }
    const Bv = /(?:Once|Passive|Capture)$/;

    function aL(t) {
        let e;
        if (Bv.test(t)) {
            e = {};
            let n;
            for (; n = t.match(Bv);) t = t.slice(0, t.length - n[0].length), e[n[0].toLowerCase()] = !0
        }
        return [t[2] === ":" ? t.slice(3) : ss(t.slice(2)), e]
    }

    function oL(t, e) {
        const r = n => {
            const s = n.timeStamp || Bb();
            (eL || s >= r.attached - 1) && Yr(cL(n, r.value), e, 5, [n])
        };
        return r.value = t, r.attached = nL(), r
    }

    function cL(t, e) {
        if (Pe(e)) {
            const r = t.stopImmediatePropagation;
            return t.stopImmediatePropagation = () => {
                r.call(t), t._stopped = !0
            }, e.map(n => s => !s._stopped && n && n(s))
        } else return e
    }
    const jv = /^on[a-z]/,
        lL = (t, e, r, n, s = !1, o, c, u, f) => {
            e === "class" ? zP(t, n, s) : e === "style" ? XP(t, r, n) : rl(e) ? sh(e) || sL(t, e, r, n, c) : (e[0] === "." ? (e = e.slice(1), !0) : e[0] === "^" ? (e = e.slice(1), !1) : uL(t, e, n, s)) ? QP(t, e, n, o, c, u, f) : (e === "true-value" ? t._trueValue = n : e === "false-value" && (t._falseValue = n), ZP(t, e, n, s))
        };

    function uL(t, e, r, n) {
        return n ? !!(e === "innerHTML" || e === "textContent" || e in t && jv.test(e) && je(r)) : e === "spellcheck" || e === "draggable" || e === "translate" || e === "form" || e === "list" && t.tagName === "INPUT" || e === "type" && t.tagName === "TEXTAREA" || jv.test(e) && Gt(r) ? !1 : e in t
    }
    const Xn = "transition",
        Ca = "animation",
        gl = (t, {
            slots: e
        }) => Ah(bb, fL(t), e);
    gl.displayName = "Transition";
    const jb = {
        name: String,
        type: String,
        css: {
            type: Boolean,
            default: !0
        },
        duration: [String, Number, Object],
        enterFromClass: String,
        enterActiveClass: String,
        enterToClass: String,
        appearFromClass: String,
        appearActiveClass: String,
        appearToClass: String,
        leaveFromClass: String,
        leaveActiveClass: String,
        leaveToClass: String
    };
    gl.props = Qt({}, bb.props, jb);
    const xi = (t, e = []) => {
            Pe(t) ? t.forEach(r => r(...e)) : t && t(...e)
        },
        Gv = t => t ? Pe(t) ? t.some(e => e.length > 1) : t.length > 1 : !1;

    function fL(t) {
        const e = {};
        for (const fe in t) fe in jb || (e[fe] = t[fe]);
        if (t.css === !1) return e;
        const {
            name: r = "v",
            type: n,
            duration: s,
            enterFromClass: o = `${r}-enter-from`,
            enterActiveClass: c = `${r}-enter-active`,
            enterToClass: u = `${r}-enter-to`,
            appearFromClass: f = o,
            appearActiveClass: h = c,
            appearToClass: m = u,
            leaveFromClass: _ = `${r}-leave-from`,
            leaveActiveClass: b = `${r}-leave-active`,
            leaveToClass: C = `${r}-leave-to`
        } = t, L = dL(s), M = L && L[0], B = L && L[1], {
            onBeforeEnter: I,
            onEnter: K,
            onEnterCancelled: Y,
            onLeave: G,
            onLeaveCancelled: j,
            onBeforeAppear: z = I,
            onAppear: ie = K,
            onAppearCancelled: oe = Y
        } = e, ue = (fe, we, F) => {
            Di(fe, we ? m : u), Di(fe, we ? h : c), F && F()
        }, Ie = (fe, we) => {
            fe._isLeaving = !1, Di(fe, _), Di(fe, C), Di(fe, b), we && we()
        }, Ce = fe => (we, F) => {
            const te = fe ? ie : K,
                de = () => ue(we, fe, F);
            xi(te, [we, de]), Wv(() => {
                Di(we, fe ? f : o), Jn(we, fe ? m : u), Gv(te) || Kv(we, n, M, de)
            })
        };
        return Qt(e, {
            onBeforeEnter(fe) {
                xi(I, [fe]), Jn(fe, o), Jn(fe, c)
            },
            onBeforeAppear(fe) {
                xi(z, [fe]), Jn(fe, f), Jn(fe, h)
            },
            onEnter: Ce(!1),
            onAppear: Ce(!0),
            onLeave(fe, we) {
                fe._isLeaving = !0;
                const F = () => Ie(fe, we);
                Jn(fe, _), gL(), Jn(fe, b), Wv(() => {
                    !fe._isLeaving || (Di(fe, _), Jn(fe, C), Gv(G) || Kv(fe, n, B, F))
                }), xi(G, [fe, F])
            },
            onEnterCancelled(fe) {
                ue(fe, !1), xi(Y, [fe])
            },
            onAppearCancelled(fe) {
                ue(fe, !0), xi(oe, [fe])
            },
            onLeaveCancelled(fe) {
                Ie(fe), xi(j, [fe])
            }
        })
    }

    function dL(t) {
        if (t == null) return null;
        if (dt(t)) return [lf(t.enter), lf(t.leave)]; {
            const e = lf(t);
            return [e, e]
        }
    }

    function lf(t) {
        return xc(t)
    }

    function Jn(t, e) {
        e.split(/\s+/).forEach(r => r && t.classList.add(r)), (t._vtc || (t._vtc = new Set)).add(e)
    }

    function Di(t, e) {
        e.split(/\s+/).forEach(n => n && t.classList.remove(n));
        const {
            _vtc: r
        } = t;
        r && (r.delete(e), r.size || (t._vtc = void 0))
    }

    function Wv(t) {
        requestAnimationFrame(() => {
            requestAnimationFrame(t)
        })
    }
    let hL = 0;

    function Kv(t, e, r, n) {
        const s = t._endId = ++hL,
            o = () => {
                s === t._endId && n()
            };
        if (r) return setTimeout(o, r);
        const {
            type: c,
            timeout: u,
            propCount: f
        } = pL(t, e);
        if (!c) return n();
        const h = c + "end";
        let m = 0;
        const _ = () => {
                t.removeEventListener(h, b), o()
            },
            b = C => {
                C.target === t && ++m >= f && _()
            };
        setTimeout(() => {
            m < f && _()
        }, u + 1), t.addEventListener(h, b)
    }

    function pL(t, e) {
        const r = window.getComputedStyle(t),
            n = L => (r[L] || "").split(", "),
            s = n(Xn + "Delay"),
            o = n(Xn + "Duration"),
            c = Hv(s, o),
            u = n(Ca + "Delay"),
            f = n(Ca + "Duration"),
            h = Hv(u, f);
        let m = null,
            _ = 0,
            b = 0;
        e === Xn ? c > 0 && (m = Xn, _ = c, b = o.length) : e === Ca ? h > 0 && (m = Ca, _ = h, b = f.length) : (_ = Math.max(c, h), m = _ > 0 ? c > h ? Xn : Ca : null, b = m ? m === Xn ? o.length : f.length : 0);
        const C = m === Xn && /\b(transform|all)(,|$)/.test(r[Xn + "Property"]);
        return {
            type: m,
            timeout: _,
            propCount: b,
            hasTransform: C
        }
    }

    function Hv(t, e) {
        for (; t.length < e.length;) t = t.concat(t);
        return Math.max(...e.map((r, n) => Vv(r) + Vv(t[n])))
    }

    function Vv(t) {
        return Number(t.slice(0, -1).replace(",", ".")) * 1e3
    }

    function gL() {
        return document.body.offsetHeight
    }
    const Bc = t => {
        const e = t.props["onUpdate:modelValue"] || !1;
        return Pe(e) ? r => Cc(e, r) : e
    };

    function mL(t) {
        t.target.composing = !0
    }

    function Yv(t) {
        const e = t.target;
        e.composing && (e.composing = !1, e.dispatchEvent(new Event("input")))
    }
    const qv = {
            created(t, {
                modifiers: {
                    lazy: e,
                    trim: r,
                    number: n
                }
            }, s) {
                t._assign = Bc(s);
                const o = n || s.props && s.props.type === "number";
                Vi(t, e ? "change" : "input", c => {
                    if (c.target.composing) return;
                    let u = t.value;
                    r && (u = u.trim()), o && (u = xc(u)), t._assign(u)
                }), r && Vi(t, "change", () => {
                    t.value = t.value.trim()
                }), e || (Vi(t, "compositionstart", mL), Vi(t, "compositionend", Yv), Vi(t, "change", Yv))
            },
            mounted(t, {
                value: e
            }) {
                t.value = e == null ? "" : e
            },
            beforeUpdate(t, {
                value: e,
                modifiers: {
                    lazy: r,
                    trim: n,
                    number: s
                }
            }, o) {
                if (t._assign = Bc(o), t.composing || document.activeElement === t && t.type !== "range" && (r || n && t.value.trim() === e || (s || t.type === "number") && xc(t.value) === e)) return;
                const c = e == null ? "" : e;
                t.value !== c && (t.value = c)
            }
        },
        vL = {
            deep: !0,
            created(t, e, r) {
                t._assign = Bc(r), Vi(t, "change", () => {
                    const n = t._modelValue,
                        s = yL(t),
                        o = t.checked,
                        c = t._assign;
                    if (Pe(n)) {
                        const u = KE(n, s),
                            f = u !== -1;
                        if (o && !f) c(n.concat(s));
                        else if (!o && f) {
                            const h = [...n];
                            h.splice(u, 1), c(h)
                        }
                    } else if (nl(n)) {
                        const u = new Set(n);
                        o ? u.add(s) : u.delete(s), c(u)
                    } else c(Gb(t, o))
                })
            },
            mounted: zv,
            beforeUpdate(t, e, r) {
                t._assign = Bc(r), zv(t, e, r)
            }
        };

    function zv(t, {
        value: e,
        oldValue: r
    }, n) {
        t._modelValue = e, Pe(e) ? t.checked = KE(e, n.props.value) > -1 : nl(e) ? t.checked = e.has(n.props.value) : e !== r && (t.checked = tl(e, Gb(t, !0)))
    }

    function yL(t) {
        return "_value" in t ? t._value : t.value
    }

    function Gb(t, e) {
        const r = e ? "_trueValue" : "_falseValue";
        return r in t ? t[r] : e
    }
    const _L = ["ctrl", "shift", "alt", "meta"],
        EL = {
            stop: t => t.stopPropagation(),
            prevent: t => t.preventDefault(),
            self: t => t.target !== t.currentTarget,
            ctrl: t => !t.ctrlKey,
            shift: t => !t.shiftKey,
            alt: t => !t.altKey,
            meta: t => !t.metaKey,
            left: t => "button" in t && t.button !== 0,
            middle: t => "button" in t && t.button !== 1,
            right: t => "button" in t && t.button !== 2,
            exact: (t, e) => _L.some(r => t[`${r}Key`] && !e.includes(r))
        },
        cn = (t, e) => (r, ...n) => {
            for (let s = 0; s < e.length; s++) {
                const o = EL[e[s]];
                if (o && o(r, e)) return
            }
            return t(r, ...n)
        },
        bL = {
            esc: "escape",
            space: " ",
            up: "arrow-up",
            left: "arrow-left",
            right: "arrow-right",
            down: "arrow-down",
            delete: "backspace"
        },
        Wb = (t, e) => r => {
            if (!("key" in r)) return;
            const n = ss(r.key);
            if (e.some(s => s === n || bL[s] === n)) return t(r)
        },
        TL = Qt({
            patchProp: lL
        }, qP);
    let Xv;

    function SL() {
        return Xv || (Xv = RP(TL))
    }
    const OL = (...t) => {
        const e = SL().createApp(...t),
            {
                mount: r
            } = e;
        return e.mount = n => {
            const s = wL(n);
            if (!s) return;
            const o = e._component;
            !je(o) && !o.render && !o.template && (o.template = s.innerHTML), s.innerHTML = "";
            const c = r(s, !1, s instanceof SVGElement);
            return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), c
        }, e
    };

    function wL(t) {
        return Gt(t) ? document.querySelector(t) : t
    }
    const CL = vt({
            props: {
                player: Object
            },
            methods: {
                onChoiceClick(t) {
                    var c, u, f;
                    const e = this.player.choices[t];
                    if (e.send) {
                        this.$ecast.updateObject(this.player.responseKey, e.send).catch(this.$handleEcastError);
                        return
                    }
                    const r = (c = this.player.action) != null ? c : "choice",
                        n = (u = this.player.key) != null ? u : "value",
                        s = (f = e.value) != null ? f : t,
                        o = {
                            action: r,
                            [n]: s
                        };
                    this.$ecast.updateObject(this.player.responseKey, o).catch(this.$handleEcastError)
                }
            }
        }),
        $t = (t, e) => {
            const r = t.__vccOpts || t;
            for (const [n, s] of e) r[n] = s;
            return r
        },
        IL = {
            class: "choices"
        },
        $L = {
            class: "constrain"
        },
        AL = {
            key: 0
        },
        RL = ["disabled", "onClick"];

    function NL(t, e, r, n, s, o) {
        const c = qr("bb");
        return se(), le("div", IL, [ae("div", $L, [t.player.prompt ? tt((se(), le("p", AL, null, 512)), [
            [c, t.player.prompt]
        ]) : We("", !0), (se(!0), le(It, null, io(t.player.choices, (u, f) => (se(), le("button", {
            key: f,
            class: qe({
                selected: u.isSelected
            }),
            disabled: u.isDisabled,
            onClick: cn(h => t.onChoiceClick(f), ["prevent"])
        }, Tt(u.text), 11, RL))), 128))])])
    }
    const PL = $t(CL, [
        ["render", NL]
    ]);
    class jc {
        static setup() {
            gtag("config", "G-V1QJVQMYF1", {
                send_page_view: !1
            })
        }
        static pageView(e) {
            gtag("event", "page_view", {
                page_title: e,
                page_location: `https://jackbox.tv/${e}`
            })
        }
        static gameStarted(e, r) {
            const n = {
                tag: e
            };
            r.isUGC !== void 0 && (n.is_ugc = r.isUGC), r.isSequel !== void 0 && (n.is_sequel = r.isSequel), r.locale !== void 0 && (n.locale = r.locale), r.mode !== void 0 && (n.mode = r.mode), r.numberOfPlayer !== void 0 && (n.number_of_players = r.numberOfPlayer), gtag("event", "game_start", n)
        }
        static bannerClick(e, r) {
            gtag("event", "banner_click", {
                url: e,
                location: r
            })
        }
        static externalLinkClick(e, r) {
            gtag("event", "external_link_click", {
                url: e,
                location: r
            })
        }
        static galleryClick(e, r) {
            gtag("event", "gallery_click", {
                category_id: e,
                location: r
            })
        }
        static galleryImpression(e, r) {
            gtag("event", "gallery_impression", {
                category_id: e,
                location: r
            })
        }
        static moderatorConnected(e) {
            gtag("event", "moderator_connected", {
                tag: e
            })
        }
        static itemModerated(e, r) {
            gtag("event", "item_moderated", {
                tag: e,
                was_rejected: r
            })
        }
        static playerKicked(e, r) {
            gtag("event", "player_kicked", {
                tag: e,
                is_lobby: r
            })
        }
    }
    var Pt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

    function LL(t) {
        var e = t.default;
        if (typeof e == "function") {
            var r = function() {
                return e.apply(this, arguments)
            };
            r.prototype = e.prototype
        } else r = {};
        return Object.defineProperty(r, "__esModule", {
            value: !0
        }), Object.keys(t).forEach(function(n) {
            var s = Object.getOwnPropertyDescriptor(t, n);
            Object.defineProperty(r, n, s.get ? s : {
                enumerable: !0,
                get: function() {
                    return t[n]
                }
            })
        }), r
    }

    function kL() {
        this.__data__ = [], this.size = 0
    }
    var xL = kL;

    function DL(t, e) {
        return t === e || t !== t && e !== e
    }
    var ml = DL,
        ML = ml;

    function FL(t, e) {
        for (var r = t.length; r--;)
            if (ML(t[r][0], e)) return r;
        return -1
    }
    var vl = FL,
        UL = vl,
        BL = Array.prototype,
        jL = BL.splice;

    function GL(t) {
        var e = this.__data__,
            r = UL(e, t);
        if (r < 0) return !1;
        var n = e.length - 1;
        return r == n ? e.pop() : jL.call(e, r, 1), --this.size, !0
    }
    var WL = GL,
        KL = vl;

    function HL(t) {
        var e = this.__data__,
            r = KL(e, t);
        return r < 0 ? void 0 : e[r][1]
    }
    var VL = HL,
        YL = vl;

    function qL(t) {
        return YL(this.__data__, t) > -1
    }
    var zL = qL,
        XL = vl;

    function JL(t, e) {
        var r = this.__data__,
            n = XL(r, t);
        return n < 0 ? (++this.size, r.push([t, e])) : r[n][1] = e, this
    }
    var ZL = JL,
        QL = xL,
        ek = WL,
        tk = VL,
        rk = zL,
        nk = ZL;

    function ta(t) {
        var e = -1,
            r = t == null ? 0 : t.length;
        for (this.clear(); ++e < r;) {
            var n = t[e];
            this.set(n[0], n[1])
        }
    }
    ta.prototype.clear = QL;
    ta.prototype.delete = ek;
    ta.prototype.get = tk;
    ta.prototype.has = rk;
    ta.prototype.set = nk;
    var yl = ta,
        ik = yl;

    function sk() {
        this.__data__ = new ik, this.size = 0
    }
    var ak = sk;

    function ok(t) {
        var e = this.__data__,
            r = e.delete(t);
        return this.size = e.size, r
    }
    var ck = ok;

    function lk(t) {
        return this.__data__.get(t)
    }
    var uk = lk;

    function fk(t) {
        return this.__data__.has(t)
    }
    var dk = fk,
        hk = typeof Pt == "object" && Pt && Pt.Object === Object && Pt,
        Kb = hk,
        pk = Kb,
        gk = typeof self == "object" && self && self.Object === Object && self,
        mk = pk || gk || Function("return this")(),
        ln = mk,
        vk = ln,
        yk = vk.Symbol,
        _l = yk,
        Jv = _l,
        Hb = Object.prototype,
        _k = Hb.hasOwnProperty,
        Ek = Hb.toString,
        Ia = Jv ? Jv.toStringTag : void 0;

    function bk(t) {
        var e = _k.call(t, Ia),
            r = t[Ia];
        try {
            t[Ia] = void 0;
            var n = !0
        } catch {}
        var s = Ek.call(t);
        return n && (e ? t[Ia] = r : delete t[Ia]), s
    }
    var Tk = bk,
        Sk = Object.prototype,
        Ok = Sk.toString;

    function wk(t) {
        return Ok.call(t)
    }
    var Ck = wk,
        Zv = _l,
        Ik = Tk,
        $k = Ck,
        Ak = "[object Null]",
        Rk = "[object Undefined]",
        Qv = Zv ? Zv.toStringTag : void 0;

    function Nk(t) {
        return t == null ? t === void 0 ? Rk : Ak : Qv && Qv in Object(t) ? Ik(t) : $k(t)
    }
    var ra = Nk;

    function Pk(t) {
        var e = typeof t;
        return t != null && (e == "object" || e == "function")
    }
    var un = Pk,
        Lk = ra,
        kk = un,
        xk = "[object AsyncFunction]",
        Dk = "[object Function]",
        Mk = "[object GeneratorFunction]",
        Fk = "[object Proxy]";

    function Uk(t) {
        if (!kk(t)) return !1;
        var e = Lk(t);
        return e == Dk || e == Mk || e == xk || e == Fk
    }
    var Rh = Uk,
        Bk = ln,
        jk = Bk["__core-js_shared__"],
        Gk = jk,
        uf = Gk,
        ey = function() {
            var t = /[^.]+$/.exec(uf && uf.keys && uf.keys.IE_PROTO || "");
            return t ? "Symbol(src)_1." + t : ""
        }();

    function Wk(t) {
        return !!ey && ey in t
    }
    var Kk = Wk,
        Hk = Function.prototype,
        Vk = Hk.toString;

    function Yk(t) {
        if (t != null) {
            try {
                return Vk.call(t)
            } catch {}
            try {
                return t + ""
            } catch {}
        }
        return ""
    }
    var Vb = Yk,
        qk = Rh,
        zk = Kk,
        Xk = un,
        Jk = Vb,
        Zk = /[\\^$.*+?()[\]{}|]/g,
        Qk = /^\[object .+?Constructor\]$/,
        ex = Function.prototype,
        tx = Object.prototype,
        rx = ex.toString,
        nx = tx.hasOwnProperty,
        ix = RegExp("^" + rx.call(nx).replace(Zk, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

    function sx(t) {
        if (!Xk(t) || zk(t)) return !1;
        var e = qk(t) ? ix : Qk;
        return e.test(Jk(t))
    }
    var ax = sx;

    function ox(t, e) {
        return t == null ? void 0 : t[e]
    }
    var cx = ox,
        lx = ax,
        ux = cx;

    function fx(t, e) {
        var r = ux(t, e);
        return lx(r) ? r : void 0
    }
    var as = fx,
        dx = as,
        hx = ln,
        px = dx(hx, "Map"),
        Nh = px,
        gx = as,
        mx = gx(Object, "create"),
        El = mx,
        ty = El;

    function vx() {
        this.__data__ = ty ? ty(null) : {}, this.size = 0
    }
    var yx = vx;

    function _x(t) {
        var e = this.has(t) && delete this.__data__[t];
        return this.size -= e ? 1 : 0, e
    }
    var Ex = _x,
        bx = El,
        Tx = "__lodash_hash_undefined__",
        Sx = Object.prototype,
        Ox = Sx.hasOwnProperty;

    function wx(t) {
        var e = this.__data__;
        if (bx) {
            var r = e[t];
            return r === Tx ? void 0 : r
        }
        return Ox.call(e, t) ? e[t] : void 0
    }
    var Cx = wx,
        Ix = El,
        $x = Object.prototype,
        Ax = $x.hasOwnProperty;

    function Rx(t) {
        var e = this.__data__;
        return Ix ? e[t] !== void 0 : Ax.call(e, t)
    }
    var Nx = Rx,
        Px = El,
        Lx = "__lodash_hash_undefined__";

    function kx(t, e) {
        var r = this.__data__;
        return this.size += this.has(t) ? 0 : 1, r[t] = Px && e === void 0 ? Lx : e, this
    }
    var xx = kx,
        Dx = yx,
        Mx = Ex,
        Fx = Cx,
        Ux = Nx,
        Bx = xx;

    function na(t) {
        var e = -1,
            r = t == null ? 0 : t.length;
        for (this.clear(); ++e < r;) {
            var n = t[e];
            this.set(n[0], n[1])
        }
    }
    na.prototype.clear = Dx;
    na.prototype.delete = Mx;
    na.prototype.get = Fx;
    na.prototype.has = Ux;
    na.prototype.set = Bx;
    var jx = na,
        ry = jx,
        Gx = yl,
        Wx = Nh;

    function Kx() {
        this.size = 0, this.__data__ = {
            hash: new ry,
            map: new(Wx || Gx),
            string: new ry
        }
    }
    var Hx = Kx;

    function Vx(t) {
        var e = typeof t;
        return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null
    }
    var Yx = Vx,
        qx = Yx;

    function zx(t, e) {
        var r = t.__data__;
        return qx(e) ? r[typeof e == "string" ? "string" : "hash"] : r.map
    }
    var bl = zx,
        Xx = bl;

    function Jx(t) {
        var e = Xx(this, t).delete(t);
        return this.size -= e ? 1 : 0, e
    }
    var Zx = Jx,
        Qx = bl;

    function eD(t) {
        return Qx(this, t).get(t)
    }
    var tD = eD,
        rD = bl;

    function nD(t) {
        return rD(this, t).has(t)
    }
    var iD = nD,
        sD = bl;

    function aD(t, e) {
        var r = sD(this, t),
            n = r.size;
        return r.set(t, e), this.size += r.size == n ? 0 : 1, this
    }
    var oD = aD,
        cD = Hx,
        lD = Zx,
        uD = tD,
        fD = iD,
        dD = oD;

    function ia(t) {
        var e = -1,
            r = t == null ? 0 : t.length;
        for (this.clear(); ++e < r;) {
            var n = t[e];
            this.set(n[0], n[1])
        }
    }
    ia.prototype.clear = cD;
    ia.prototype.delete = lD;
    ia.prototype.get = uD;
    ia.prototype.has = fD;
    ia.prototype.set = dD;
    var Yb = ia,
        hD = yl,
        pD = Nh,
        gD = Yb,
        mD = 200;

    function vD(t, e) {
        var r = this.__data__;
        if (r instanceof hD) {
            var n = r.__data__;
            if (!pD || n.length < mD - 1) return n.push([t, e]), this.size = ++r.size, this;
            r = this.__data__ = new gD(n)
        }
        return r.set(t, e), this.size = r.size, this
    }
    var yD = vD,
        _D = yl,
        ED = ak,
        bD = ck,
        TD = uk,
        SD = dk,
        OD = yD;

    function sa(t) {
        var e = this.__data__ = new _D(t);
        this.size = e.size
    }
    sa.prototype.clear = ED;
    sa.prototype.delete = bD;
    sa.prototype.get = TD;
    sa.prototype.has = SD;
    sa.prototype.set = OD;
    var qb = sa,
        wD = as,
        CD = function() {
            try {
                var t = wD(Object, "defineProperty");
                return t({}, "", {}), t
            } catch {}
        }(),
        zb = CD,
        ny = zb;

    function ID(t, e, r) {
        e == "__proto__" && ny ? ny(t, e, {
            configurable: !0,
            enumerable: !0,
            value: r,
            writable: !0
        }) : t[e] = r
    }
    var Ph = ID,
        $D = Ph,
        AD = ml;

    function RD(t, e, r) {
        (r !== void 0 && !AD(t[e], r) || r === void 0 && !(e in t)) && $D(t, e, r)
    }
    var Xb = RD;

    function ND(t) {
        return function(e, r, n) {
            for (var s = -1, o = Object(e), c = n(e), u = c.length; u--;) {
                var f = c[t ? u : ++s];
                if (r(o[f], f, o) === !1) break
            }
            return e
        }
    }
    var PD = ND,
        LD = PD,
        kD = LD(),
        xD = kD,
        Gc = {
            exports: {}
        };
    (function(t, e) {
        var r = ln,
            n = e && !e.nodeType && e,
            s = n && !0 && t && !t.nodeType && t,
            o = s && s.exports === n,
            c = o ? r.Buffer : void 0,
            u = c ? c.allocUnsafe : void 0;

        function f(h, m) {
            if (m) return h.slice();
            var _ = h.length,
                b = u ? u(_) : new h.constructor(_);
            return h.copy(b), b
        }
        t.exports = f
    })(Gc, Gc.exports);
    var DD = ln,
        MD = DD.Uint8Array,
        FD = MD,
        iy = FD;

    function UD(t) {
        var e = new t.constructor(t.byteLength);
        return new iy(e).set(new iy(t)), e
    }
    var Lh = UD,
        BD = Lh;

    function jD(t, e) {
        var r = e ? BD(t.buffer) : t.buffer;
        return new t.constructor(r, t.byteOffset, t.length)
    }
    var Jb = jD;

    function GD(t, e) {
        var r = -1,
            n = t.length;
        for (e || (e = Array(n)); ++r < n;) e[r] = t[r];
        return e
    }
    var Zb = GD,
        WD = un,
        sy = Object.create,
        KD = function() {
            function t() {}
            return function(e) {
                if (!WD(e)) return {};
                if (sy) return sy(e);
                t.prototype = e;
                var r = new t;
                return t.prototype = void 0, r
            }
        }(),
        HD = KD;

    function VD(t, e) {
        return function(r) {
            return t(e(r))
        }
    }
    var Qb = VD,
        YD = Qb,
        qD = YD(Object.getPrototypeOf, Object),
        kh = qD,
        zD = Object.prototype;

    function XD(t) {
        var e = t && t.constructor,
            r = typeof e == "function" && e.prototype || zD;
        return t === r
    }
    var xh = XD,
        JD = HD,
        ZD = kh,
        QD = xh;

    function eM(t) {
        return typeof t.constructor == "function" && !QD(t) ? JD(ZD(t)) : {}
    }
    var eT = eM;

    function tM(t) {
        return t != null && typeof t == "object"
    }
    var gi = tM,
        rM = ra,
        nM = gi,
        iM = "[object Arguments]";

    function sM(t) {
        return nM(t) && rM(t) == iM
    }
    var aM = sM,
        ay = aM,
        oM = gi,
        tT = Object.prototype,
        cM = tT.hasOwnProperty,
        lM = tT.propertyIsEnumerable,
        uM = ay(function() {
            return arguments
        }()) ? ay : function(t) {
            return oM(t) && cM.call(t, "callee") && !lM.call(t, "callee")
        },
        rT = uM,
        fM = Array.isArray,
        mi = fM,
        dM = 9007199254740991;

    function hM(t) {
        return typeof t == "number" && t > -1 && t % 1 == 0 && t <= dM
    }
    var nT = hM,
        pM = Rh,
        gM = nT;

    function mM(t) {
        return t != null && gM(t.length) && !pM(t)
    }
    var Tl = mM,
        vM = Tl,
        yM = gi;

    function _M(t) {
        return yM(t) && vM(t)
    }
    var EM = _M,
        Xa = {
            exports: {}
        };

    function bM() {
        return !1
    }
    var TM = bM;
    (function(t, e) {
        var r = ln,
            n = TM,
            s = e && !e.nodeType && e,
            o = s && !0 && t && !t.nodeType && t,
            c = o && o.exports === s,
            u = c ? r.Buffer : void 0,
            f = u ? u.isBuffer : void 0,
            h = f || n;
        t.exports = h
    })(Xa, Xa.exports);
    var SM = ra,
        OM = kh,
        wM = gi,
        CM = "[object Object]",
        IM = Function.prototype,
        $M = Object.prototype,
        iT = IM.toString,
        AM = $M.hasOwnProperty,
        RM = iT.call(Object);

    function NM(t) {
        if (!wM(t) || SM(t) != CM) return !1;
        var e = OM(t);
        if (e === null) return !0;
        var r = AM.call(e, "constructor") && e.constructor;
        return typeof r == "function" && r instanceof r && iT.call(r) == RM
    }
    var PM = NM,
        LM = ra,
        kM = nT,
        xM = gi,
        DM = "[object Arguments]",
        MM = "[object Array]",
        FM = "[object Boolean]",
        UM = "[object Date]",
        BM = "[object Error]",
        jM = "[object Function]",
        GM = "[object Map]",
        WM = "[object Number]",
        KM = "[object Object]",
        HM = "[object RegExp]",
        VM = "[object Set]",
        YM = "[object String]",
        qM = "[object WeakMap]",
        zM = "[object ArrayBuffer]",
        XM = "[object DataView]",
        JM = "[object Float32Array]",
        ZM = "[object Float64Array]",
        QM = "[object Int8Array]",
        e2 = "[object Int16Array]",
        t2 = "[object Int32Array]",
        r2 = "[object Uint8Array]",
        n2 = "[object Uint8ClampedArray]",
        i2 = "[object Uint16Array]",
        s2 = "[object Uint32Array]",
        _t = {};
    _t[JM] = _t[ZM] = _t[QM] = _t[e2] = _t[t2] = _t[r2] = _t[n2] = _t[i2] = _t[s2] = !0;
    _t[DM] = _t[MM] = _t[zM] = _t[FM] = _t[XM] = _t[UM] = _t[BM] = _t[jM] = _t[GM] = _t[WM] = _t[KM] = _t[HM] = _t[VM] = _t[YM] = _t[qM] = !1;

    function a2(t) {
        return xM(t) && kM(t.length) && !!_t[LM(t)]
    }
    var o2 = a2;

    function c2(t) {
        return function(e) {
            return t(e)
        }
    }
    var Dh = c2,
        Ja = {
            exports: {}
        };
    (function(t, e) {
        var r = Kb,
            n = e && !e.nodeType && e,
            s = n && !0 && t && !t.nodeType && t,
            o = s && s.exports === n,
            c = o && r.process,
            u = function() {
                try {
                    var f = s && s.require && s.require("util").types;
                    return f || c && c.binding && c.binding("util")
                } catch {}
            }();
        t.exports = u
    })(Ja, Ja.exports);
    var l2 = o2,
        u2 = Dh,
        oy = Ja.exports,
        cy = oy && oy.isTypedArray,
        f2 = cy ? u2(cy) : l2,
        sT = f2;

    function d2(t, e) {
        if (!(e === "constructor" && typeof t[e] == "function") && e != "__proto__") return t[e]
    }
    var aT = d2,
        h2 = Ph,
        p2 = ml,
        g2 = Object.prototype,
        m2 = g2.hasOwnProperty;

    function v2(t, e, r) {
        var n = t[e];
        (!(m2.call(t, e) && p2(n, r)) || r === void 0 && !(e in t)) && h2(t, e, r)
    }
    var Mh = v2,
        y2 = Mh,
        _2 = Ph;

    function E2(t, e, r, n) {
        var s = !r;
        r || (r = {});
        for (var o = -1, c = e.length; ++o < c;) {
            var u = e[o],
                f = n ? n(r[u], t[u], u, r, t) : void 0;
            f === void 0 && (f = t[u]), s ? _2(r, u, f) : y2(r, u, f)
        }
        return r
    }
    var so = E2;

    function b2(t, e) {
        for (var r = -1, n = Array(t); ++r < t;) n[r] = e(r);
        return n
    }
    var T2 = b2,
        S2 = 9007199254740991,
        O2 = /^(?:0|[1-9]\d*)$/;

    function w2(t, e) {
        var r = typeof t;
        return e = e == null ? S2 : e, !!e && (r == "number" || r != "symbol" && O2.test(t)) && t > -1 && t % 1 == 0 && t < e
    }
    var Fh = w2,
        C2 = T2,
        I2 = rT,
        $2 = mi,
        A2 = Xa.exports,
        R2 = Fh,
        N2 = sT,
        P2 = Object.prototype,
        L2 = P2.hasOwnProperty;

    function k2(t, e) {
        var r = $2(t),
            n = !r && I2(t),
            s = !r && !n && A2(t),
            o = !r && !n && !s && N2(t),
            c = r || n || s || o,
            u = c ? C2(t.length, String) : [],
            f = u.length;
        for (var h in t)(e || L2.call(t, h)) && !(c && (h == "length" || s && (h == "offset" || h == "parent") || o && (h == "buffer" || h == "byteLength" || h == "byteOffset") || R2(h, f))) && u.push(h);
        return u
    }
    var oT = k2;

    function x2(t) {
        var e = [];
        if (t != null)
            for (var r in Object(t)) e.push(r);
        return e
    }
    var D2 = x2,
        M2 = un,
        F2 = xh,
        U2 = D2,
        B2 = Object.prototype,
        j2 = B2.hasOwnProperty;

    function G2(t) {
        if (!M2(t)) return U2(t);
        var e = F2(t),
            r = [];
        for (var n in t) n == "constructor" && (e || !j2.call(t, n)) || r.push(n);
        return r
    }
    var W2 = G2,
        K2 = oT,
        H2 = W2,
        V2 = Tl;

    function Y2(t) {
        return V2(t) ? K2(t, !0) : H2(t)
    }
    var ao = Y2,
        q2 = so,
        z2 = ao;

    function X2(t) {
        return q2(t, z2(t))
    }
    var J2 = X2,
        ly = Xb,
        Z2 = Gc.exports,
        Q2 = Jb,
        eF = Zb,
        tF = eT,
        uy = rT,
        fy = mi,
        rF = EM,
        nF = Xa.exports,
        iF = Rh,
        sF = un,
        aF = PM,
        oF = sT,
        dy = aT,
        cF = J2;

    function lF(t, e, r, n, s, o, c) {
        var u = dy(t, r),
            f = dy(e, r),
            h = c.get(f);
        if (h) {
            ly(t, r, h);
            return
        }
        var m = o ? o(u, f, r + "", t, e, c) : void 0,
            _ = m === void 0;
        if (_) {
            var b = fy(f),
                C = !b && nF(f),
                L = !b && !C && oF(f);
            m = f, b || C || L ? fy(u) ? m = u : rF(u) ? m = eF(u) : C ? (_ = !1, m = Z2(f, !0)) : L ? (_ = !1, m = Q2(f, !0)) : m = [] : aF(f) || uy(f) ? (m = u, uy(u) ? m = cF(u) : (!sF(u) || iF(u)) && (m = tF(f))) : _ = !1
        }
        _ && (c.set(f, m), s(m, f, n, o, c), c.delete(f)), ly(t, r, m)
    }
    var uF = lF,
        fF = qb,
        dF = Xb,
        hF = xD,
        pF = uF,
        gF = un,
        mF = ao,
        vF = aT;

    function cT(t, e, r, n, s) {
        t !== e && hF(e, function(o, c) {
            if (s || (s = new fF), gF(o)) pF(t, e, c, r, cT, n, s);
            else {
                var u = n ? n(vF(t, c), o, c + "", t, e, s) : void 0;
                u === void 0 && (u = o), dF(t, c, u)
            }
        }, mF)
    }
    var yF = cT;

    function _F(t) {
        return t
    }
    var lT = _F;

    function EF(t, e, r) {
        switch (r.length) {
            case 0:
                return t.call(e);
            case 1:
                return t.call(e, r[0]);
            case 2:
                return t.call(e, r[0], r[1]);
            case 3:
                return t.call(e, r[0], r[1], r[2])
        }
        return t.apply(e, r)
    }
    var bF = EF,
        TF = bF,
        hy = Math.max;

    function SF(t, e, r) {
        return e = hy(e === void 0 ? t.length - 1 : e, 0),
            function() {
                for (var n = arguments, s = -1, o = hy(n.length - e, 0), c = Array(o); ++s < o;) c[s] = n[e + s];
                s = -1;
                for (var u = Array(e + 1); ++s < e;) u[s] = n[s];
                return u[e] = r(c), TF(t, this, u)
            }
    }
    var OF = SF;

    function wF(t) {
        return function() {
            return t
        }
    }
    var CF = wF,
        IF = CF,
        py = zb,
        $F = lT,
        AF = py ? function(t, e) {
            return py(t, "toString", {
                configurable: !0,
                enumerable: !1,
                value: IF(e),
                writable: !0
            })
        } : $F,
        RF = AF,
        NF = 800,
        PF = 16,
        LF = Date.now;

    function kF(t) {
        var e = 0,
            r = 0;
        return function() {
            var n = LF(),
                s = PF - (n - r);
            if (r = n, s > 0) {
                if (++e >= NF) return arguments[0]
            } else e = 0;
            return t.apply(void 0, arguments)
        }
    }
    var xF = kF,
        DF = RF,
        MF = xF,
        FF = MF(DF),
        UF = FF,
        BF = lT,
        jF = OF,
        GF = UF;

    function WF(t, e) {
        return GF(jF(t, e, BF), t + "")
    }
    var KF = WF,
        HF = ml,
        VF = Tl,
        YF = Fh,
        qF = un;

    function zF(t, e, r) {
        if (!qF(r)) return !1;
        var n = typeof e;
        return (n == "number" ? VF(r) && YF(e, r.length) : n == "string" && e in r) ? HF(r[e], t) : !1
    }
    var XF = zF,
        JF = KF,
        ZF = XF;

    function QF(t) {
        return JF(function(e, r) {
            var n = -1,
                s = r.length,
                o = s > 1 ? r[s - 1] : void 0,
                c = s > 2 ? r[2] : void 0;
            for (o = t.length > 3 && typeof o == "function" ? (s--, o) : void 0, c && ZF(r[0], r[1], c) && (o = s < 3 ? void 0 : o, s = 1), e = Object(e); ++n < s;) {
                var u = r[n];
                u && t(e, u, n, o)
            }
            return e
        })
    }
    var eU = QF,
        tU = yF,
        rU = eU,
        nU = rU(function(t, e, r) {
            tU(t, e, r)
        }),
        iU = nU;
    class Ms {
        static set(e) {
            if (e && this.isSupported(e)) {
                this.locale = e;
                return
            }
            this.locale = this.getPreferredDeviceLocale()
        }
        static getPreferredDeviceLocale() {
            const e = navigator.languages;
            for (let r = 0; r < e.length; r++)
                if (this.isSupported(e[r])) return e[r];
            return this.supported[0]
        }
        static isSupported(e) {
            return Object.values(this.supported).includes(e)
        }
        static mergeMessages(...e) {
            return iU(e[0], ...e)
        }
    }
    ge(Ms, "locale"), ge(Ms, "supported", ["en", "fr", "it", "de", "es", "es-XL"]);
    const Mp = class {
        static get serverUrl() {
            var r;
            const e = (r = this.getQueryParam("server")) != null ? r : this.getQueryParam("s");
            return !e || e === "live" ? "ecast.jackboxgames.com" : e === "local" ? "https://localhost" : e.includes("localhost") ? e : `${e}.jackboxgames.com`
        }
        static get isCanvasSupported() {
            const e = document.createElement("canvas");
            return !!(e.getContext && e.getContext("2d"))
        }
        static toPrecision(e, r) {
            const n = 10 ** r;
            return Math.round((e + Number.EPSILON) * n) / n
        }
        static isProduction() {
            return window.location.hostname === "jackbox.tv"
        }
        static htmlUnescape(e) {
            return String(e).replace(/&quot;/gi, '"').replace(/&#39;/gi, "'").replace(/&lt;/gi, "<").replace(/&gt;/gi, ">").replace(/&amp;/gi, "&")
        }
        static htmlEscape(e) {
            return String(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
        }
        static sanitize(e) {
            const r = this.sanitizeInput(e).replace(/'/g, "\u2019");
            return this.htmlEscape(r).trim()
        }
        static sanitizeName(e) {
            return e.replace(/[^A-Z0-9\u00A1\u0020-\u002F\u00BF-\u00FF\u2026!?*$+\-'_ .,]/gi, "").replace(/'/g, "\u2019")
        }
        static sanitizeInput(e) {
            return e = e.replace("\u2026", "..."), e.replace(/[^\u00A1\u0020-\u007E\u00BF-\u00FF’]/gi, "")
        }
        static sanitizeEmoji(e) {
            return e.replace(/(\u00a9|\u00ae|[\u2000-\u2017]|[\u2020-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/, "")
        }
        static safeText(e) {
            const r = document.createElement("div");
            return r.textContent = e, r.innerHTML
        }
        static htmlTagsToBBCode(e, r) {
            if (!r.length) throw new Error("[Utils.htmlTagsToBBCode] No tag pairs were passed in");
            return r.reduce((n, s) => (n.replaceAll(`<${s[0]}>`, `[${s[1]}]`), n.replaceAll(`</${s[0]}>`, `</${s[1]}>`), n), e)
        }
        static hexToRgb(e) {
            const r = new ArrayBuffer(4);
            new DataView(r).setUint32(0, parseInt(e.replace("#", ""), 16), !1);
            const s = new Uint8Array(r);
            return `${s[1]},${s[2]},${s[3]}`
        }
        static adjustColor(e, r) {
            let n = !1,
                s = e;
            s[0] === "#" && (s = s.slice(1), n = !0);
            const o = parseInt(s, 16),
                c = Math.min(Math.max(0, (o >> 16) * r), 255),
                u = Math.min(Math.max(0, (o >> 8 & 255) * r), 255);
            let h = (Math.min(Math.max(0, (o & 255) * r), 255) | u << 8 | c << 16).toString(16);
            for (; h.length < s.length;) h = `0${h}`;
            return (n ? "#" : "") + h
        }
        static isInTolerance(e, r, n) {
            return !(Math.abs(e.x - r.x) < n || Math.abs(e.y - r.y) > n)
        }
        static getDistanceBetweenPoints(e, r) {
            const n = [e.x - r.x, e.y - r.y],
                s = Math.hypot(...n);
            return Math.round(s * 100) / 100
        }
        static getMidpoint(e, r) {
            return {
                x: (e.x + r.x) / 2,
                y: (e.y + r.y) / 2
            }
        }
        static getAngleBetweenPoints(e, r) {
            let s = Math.atan2(r.y - e.y, r.x - e.x) * (180 / Math.PI);
            return s < 0 && (s += 360), 360 - s
        }
        static getAngularDistance(e, r) {
            let n = (r - e) % 360;
            const s = n < 0 ? 1 : -1;
            return n = Math.abs(n), n > 180 ? s * (360 - n) : s * n
        }
        static getVelocity(e, r, n, s) {
            return this.getDistanceBetweenPoints(e, n) / (s - r)
        }
        static isInsideElement(e, r) {
            const n = r.getBoundingClientRect();
            return !(e.x < n.left || e.x > n.left + n.width || e.y < n.top || e.y > n.top + n.height)
        }
    };
    let hr = Mp;
    ge(hr, "queryParams", new URLSearchParams(window.location.search)), ge(hr, "getQueryParam", e => Mp.queryParams.get(e)), ge(hr, "sleep", e => new Promise(r => {
        window.setTimeout(r, e)
    }));
    class Hr {
        static get namespace() {
            var e, r;
            return (r = (e = window.tv.storage) == null ? void 0 : e.namespace) != null ? r : this.defaultNamespace
        }
        static get isDisabled() {
            var e, r;
            return (r = (e = window.tv.storage) == null ? void 0 : e.isDisabled) != null ? r : !1
        }
        static get tag() {
            var e;
            return (e = window.tv.storage) == null ? void 0 : e.tag
        }
        static get code() {
            var e;
            return (e = window.tv.storage) == null ? void 0 : e.code
        }
        static get isSupported() {
            if (this.isDisabled) return !1;
            try {
                return window.localStorage ? (window.localStorage.setItem("support-check", "1"), window.localStorage.removeItem("support-check"), !0) : !1
            } catch {
                return !1
            }
        }
        static setup(e, r) {
            var n, s;
            delete window.tv.storage, window.tv.storage = {
                namespace: (s = (n = hr.getQueryParam("namespace")) != null ? n : hr.getQueryParam("ns")) != null ? s : this.defaultNamespace,
                isDisabled: hr.queryParams.has("incognito") || hr.queryParams.has("nc")
            }, e && (window.tv.storage.tag = e), r && (window.tv.storage.code = r.toLowerCase(), this.clearCodeScopedKeys(window.tv.storage.code)), this.migrateNamespace("blobcast", this.defaultNamespace)
        }
        static get(e, r) {
            return this.isSupported ? window.localStorage.getItem(this.getScopedKey(e, r)) : null
        }
        static set(e, r, n = "none") {
            if (!!this.isSupported) return window.localStorage.setItem(this.getScopedSetKey(e, n), r)
        }
        static remove(e, r) {
            if (!!this.isSupported) return window.localStorage.removeItem(this.getScopedKey(e, r))
        }
        static setTag(e) {
            var c;
            const r = e.toLowerCase(),
                n = (c = this.get("tags")) != null ? c : "[]",
                s = r.split("-")[0];
            let o = JSON.parse(n);
            o = o.filter(u => {
                const f = u.split("-")[0];
                return s !== f
            }), o.push(r), this.set("tags", JSON.stringify(o))
        }
        static getScopedKey(e, r) {
            const n = `${this.namespace}:${e}`,
                s = this.tag ? `${this.namespace}:${e}:tag:${this.tag}` : null,
                o = this.code ? `${this.namespace}:${e}:code:${this.code}` : null;
            if (r === "none") return n;
            if (r === "tag") {
                if (!s) throw new Error('[Storage] requested "tag" scope but tv.storage.tag is undefined');
                return s
            }
            if (r === "code") {
                if (!o) throw new Error('[Storage] requested "code" scope but tv.storage.code is undefined');
                return o
            }
            return o && window.localStorage.getItem(o) !== null ? o : s && window.localStorage.getItem(s) !== null ? s : n
        }
        static getScopedSetKey(e, r = "none") {
            if (r === "tag") {
                if (!this.tag) throw new Error('[Storage] requested "room" scope but tv.storage.tag is undefined');
                return `${this.namespace}:${e}:tag:${this.tag}`
            }
            if (r === "code") {
                if (!this.code) throw new Error('[Storage] requested "code" scope but tv.storage.code is undefined');
                return `${this.namespace}:${e}:code:${this.code}`
            }
            return `${this.namespace}:${e}`
        }
        static clearCodeScopedKeys(e) {
            !this.isSupported || Object.keys(window.localStorage).forEach(r => {
                const n = r.split(":code:");
                n.length <= 1 || n[1] !== e && window.localStorage.removeItem(r)
            })
        }
        static migrateNamespace(e, r) {
            !this.isSupported || Object.keys(window.localStorage).forEach(n => {
                if (!n.startsWith(`${e}-`)) return;
                const s = n.replace(`${e}-`, `${r}:`),
                    o = window.localStorage.getItem(n);
                !o || (window.localStorage.setItem(s, o), window.localStorage.removeItem(n))
            })
        }
    }
    ge(Hr, "defaultNamespace", "tv");
    class Za {
        constructor() {
            ge(this, "artifacts");
            this.artifacts = this.list()
        }
        get hasUnviewed() {
            return this.artifacts.some(e => !e.viewed)
        }
        add(e, r) {
            Za.add(e, r), this.artifacts = this.list()
        }
        static add(e, r) {
            if (!Hr.isSupported) return;
            const n = this.isTestArtifact(e) ? "http" : "https",
                s = this.isTestArtifact(e) ? "games-test.jackbox.tv" : "games.jackbox.tv",
                o = `${n}://${s}/artifact/${e.categoryId}/${e.artifactId}/`,
                c = Hr.get("galleries") || "[]";
            try {
                const u = JSON.parse(c) || [];
                if (u.some(f => f.url === o)) return;
                u.unshift({
                    url: o,
                    time: new Date().getTime(),
                    categoryId: e.categoryId,
                    viewed: !1
                }), Hr.set("galleries", JSON.stringify(u.slice(0, 40)))
            } catch {
                console.warn("[Artifacts] Unable to add artifact to local storage")
            }
        }
        remove(e) {
            if (!Hr.isSupported) return;
            const r = Hr.get("galleries") || "[]";
            try {
                const n = JSON.parse(r) || [];
                n.splice(e, 1), Hr.set("galleries", JSON.stringify(n)), this.artifacts = this.list()
            } catch {
                console.warn("[Artifacts] Unable to remove artifact")
            }
        }
        setAsViewed(e) {
            Za.setAsViewed(e), this.artifacts = this.list()
        }
        static setAsViewed(e) {
            if (!Hr.isSupported) return;
            const r = Hr.get("galleries") || "[]";
            try {
                const n = JSON.parse(r) || [];
                n.length && (n[e].viewed = !0), Hr.set("galleries", JSON.stringify(n))
            } catch {
                console.warn(`[Artifacts] Unable to mark artifact ${e} as viewed`)
            }
        }
        static isTestArtifact(e) {
            var r;
            return ((r = e == null ? void 0 : e.rootId) == null ? void 0 : r.indexOf("test")) !== -1
        }
        list() {
            if (!Hr.isSupported) return [];
            const e = new Intl.DateTimeFormat(Ms.locale, {
                    year: "numeric",
                    month: "short",
                    day: "numeric"
                }),
                r = Hr.get("galleries") || "[]",
                n = Date.now();
            try {
                return (JSON.parse(r) || []).filter(o => n - o.time < 525600 * 60 * 1e3).map(o => {
                    const c = new Date(o.time),
                        u = e.format(c),
                        f = o.url.split("/"),
                        h = f[f.length - 1] === "" ? f[f.length - 2] : f[f.length - 1];
                    let m = o.categoryId;
                    return m || (o.url.indexOf("Quiplash2") !== -1 ? m = "Quiplash2Game" : o.url.indexOf("Drawful") !== -1 ? m = "DrawfulGame" : o.url.indexOf("TeeKO") !== -1 ? m = "TeeKOGame" : o.url.indexOf("TriviaDeath") !== -1 && (m = "TriviaDeathResults")), {
                        id: h,
                        gameName: m,
                        date: u,
                        ...o
                    }
                })
            } catch {
                return console.warn("[Artifacts] Unable to parse artifacts array"), []
            }
        }
    }
    var hd = {
        exports: {}
    };
    (function(t, e) {
        var r = typeof self < "u" ? self : Pt,
            n = function() {
                function o() {
                    this.fetch = !1, this.DOMException = r.DOMException
                }
                return o.prototype = r, new o
            }();
        (function(o) {
            (function(c) {
                var u = {
                    searchParams: "URLSearchParams" in o,
                    iterable: "Symbol" in o && "iterator" in Symbol,
                    blob: "FileReader" in o && "Blob" in o && function() {
                        try {
                            return new Blob, !0
                        } catch {
                            return !1
                        }
                    }(),
                    formData: "FormData" in o,
                    arrayBuffer: "ArrayBuffer" in o
                };

                function f(F) {
                    return F && DataView.prototype.isPrototypeOf(F)
                }
                if (u.arrayBuffer) var h = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                    m = ArrayBuffer.isView || function(F) {
                        return F && h.indexOf(Object.prototype.toString.call(F)) > -1
                    };

                function _(F) {
                    if (typeof F != "string" && (F = String(F)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(F)) throw new TypeError("Invalid character in header field name");
                    return F.toLowerCase()
                }

                function b(F) {
                    return typeof F != "string" && (F = String(F)), F
                }

                function C(F) {
                    var te = {
                        next: function() {
                            var de = F.shift();
                            return {
                                done: de === void 0,
                                value: de
                            }
                        }
                    };
                    return u.iterable && (te[Symbol.iterator] = function() {
                        return te
                    }), te
                }

                function L(F) {
                    this.map = {}, F instanceof L ? F.forEach(function(te, de) {
                        this.append(de, te)
                    }, this) : Array.isArray(F) ? F.forEach(function(te) {
                        this.append(te[0], te[1])
                    }, this) : F && Object.getOwnPropertyNames(F).forEach(function(te) {
                        this.append(te, F[te])
                    }, this)
                }
                L.prototype.append = function(F, te) {
                    F = _(F), te = b(te);
                    var de = this.map[F];
                    this.map[F] = de ? de + ", " + te : te
                }, L.prototype.delete = function(F) {
                    delete this.map[_(F)]
                }, L.prototype.get = function(F) {
                    return F = _(F), this.has(F) ? this.map[F] : null
                }, L.prototype.has = function(F) {
                    return this.map.hasOwnProperty(_(F))
                }, L.prototype.set = function(F, te) {
                    this.map[_(F)] = b(te)
                }, L.prototype.forEach = function(F, te) {
                    for (var de in this.map) this.map.hasOwnProperty(de) && F.call(te, this.map[de], de, this)
                }, L.prototype.keys = function() {
                    var F = [];
                    return this.forEach(function(te, de) {
                        F.push(de)
                    }), C(F)
                }, L.prototype.values = function() {
                    var F = [];
                    return this.forEach(function(te) {
                        F.push(te)
                    }), C(F)
                }, L.prototype.entries = function() {
                    var F = [];
                    return this.forEach(function(te, de) {
                        F.push([de, te])
                    }), C(F)
                }, u.iterable && (L.prototype[Symbol.iterator] = L.prototype.entries);

                function M(F) {
                    if (F.bodyUsed) return Promise.reject(new TypeError("Already read"));
                    F.bodyUsed = !0
                }

                function B(F) {
                    return new Promise(function(te, de) {
                        F.onload = function() {
                            te(F.result)
                        }, F.onerror = function() {
                            de(F.error)
                        }
                    })
                }

                function I(F) {
                    var te = new FileReader,
                        de = B(te);
                    return te.readAsArrayBuffer(F), de
                }

                function K(F) {
                    var te = new FileReader,
                        de = B(te);
                    return te.readAsText(F), de
                }

                function Y(F) {
                    for (var te = new Uint8Array(F), de = new Array(te.length), Ee = 0; Ee < te.length; Ee++) de[Ee] = String.fromCharCode(te[Ee]);
                    return de.join("")
                }

                function G(F) {
                    if (F.slice) return F.slice(0);
                    var te = new Uint8Array(F.byteLength);
                    return te.set(new Uint8Array(F)), te.buffer
                }

                function j() {
                    return this.bodyUsed = !1, this._initBody = function(F) {
                        this._bodyInit = F, F ? typeof F == "string" ? this._bodyText = F : u.blob && Blob.prototype.isPrototypeOf(F) ? this._bodyBlob = F : u.formData && FormData.prototype.isPrototypeOf(F) ? this._bodyFormData = F : u.searchParams && URLSearchParams.prototype.isPrototypeOf(F) ? this._bodyText = F.toString() : u.arrayBuffer && u.blob && f(F) ? (this._bodyArrayBuffer = G(F.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : u.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(F) || m(F)) ? this._bodyArrayBuffer = G(F) : this._bodyText = F = Object.prototype.toString.call(F) : this._bodyText = "", this.headers.get("content-type") || (typeof F == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : u.searchParams && URLSearchParams.prototype.isPrototypeOf(F) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                    }, u.blob && (this.blob = function() {
                        var F = M(this);
                        if (F) return F;
                        if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                        if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                        if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                        return Promise.resolve(new Blob([this._bodyText]))
                    }, this.arrayBuffer = function() {
                        return this._bodyArrayBuffer ? M(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(I)
                    }), this.text = function() {
                        var F = M(this);
                        if (F) return F;
                        if (this._bodyBlob) return K(this._bodyBlob);
                        if (this._bodyArrayBuffer) return Promise.resolve(Y(this._bodyArrayBuffer));
                        if (this._bodyFormData) throw new Error("could not read FormData body as text");
                        return Promise.resolve(this._bodyText)
                    }, u.formData && (this.formData = function() {
                        return this.text().then(ue)
                    }), this.json = function() {
                        return this.text().then(JSON.parse)
                    }, this
                }
                var z = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

                function ie(F) {
                    var te = F.toUpperCase();
                    return z.indexOf(te) > -1 ? te : F
                }

                function oe(F, te) {
                    te = te || {};
                    var de = te.body;
                    if (F instanceof oe) {
                        if (F.bodyUsed) throw new TypeError("Already read");
                        this.url = F.url, this.credentials = F.credentials, te.headers || (this.headers = new L(F.headers)), this.method = F.method, this.mode = F.mode, this.signal = F.signal, !de && F._bodyInit != null && (de = F._bodyInit, F.bodyUsed = !0)
                    } else this.url = String(F);
                    if (this.credentials = te.credentials || this.credentials || "same-origin", (te.headers || !this.headers) && (this.headers = new L(te.headers)), this.method = ie(te.method || this.method || "GET"), this.mode = te.mode || this.mode || null, this.signal = te.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && de) throw new TypeError("Body not allowed for GET or HEAD requests");
                    this._initBody(de)
                }
                oe.prototype.clone = function() {
                    return new oe(this, {
                        body: this._bodyInit
                    })
                };

                function ue(F) {
                    var te = new FormData;
                    return F.trim().split("&").forEach(function(de) {
                        if (de) {
                            var Ee = de.split("="),
                                ve = Ee.shift().replace(/\+/g, " "),
                                Se = Ee.join("=").replace(/\+/g, " ");
                            te.append(decodeURIComponent(ve), decodeURIComponent(Se))
                        }
                    }), te
                }

                function Ie(F) {
                    var te = new L,
                        de = F.replace(/\r?\n[\t ]+/g, " ");
                    return de.split(/\r?\n/).forEach(function(Ee) {
                        var ve = Ee.split(":"),
                            Se = ve.shift().trim();
                        if (Se) {
                            var xe = ve.join(":").trim();
                            te.append(Se, xe)
                        }
                    }), te
                }
                j.call(oe.prototype);

                function Ce(F, te) {
                    te || (te = {}), this.type = "default", this.status = te.status === void 0 ? 200 : te.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in te ? te.statusText : "OK", this.headers = new L(te.headers), this.url = te.url || "", this._initBody(F)
                }
                j.call(Ce.prototype), Ce.prototype.clone = function() {
                    return new Ce(this._bodyInit, {
                        status: this.status,
                        statusText: this.statusText,
                        headers: new L(this.headers),
                        url: this.url
                    })
                }, Ce.error = function() {
                    var F = new Ce(null, {
                        status: 0,
                        statusText: ""
                    });
                    return F.type = "error", F
                };
                var fe = [301, 302, 303, 307, 308];
                Ce.redirect = function(F, te) {
                    if (fe.indexOf(te) === -1) throw new RangeError("Invalid status code");
                    return new Ce(null, {
                        status: te,
                        headers: {
                            location: F
                        }
                    })
                }, c.DOMException = o.DOMException;
                try {
                    new c.DOMException
                } catch {
                    c.DOMException = function(te, de) {
                        this.message = te, this.name = de;
                        var Ee = Error(te);
                        this.stack = Ee.stack
                    }, c.DOMException.prototype = Object.create(Error.prototype), c.DOMException.prototype.constructor = c.DOMException
                }

                function we(F, te) {
                    return new Promise(function(de, Ee) {
                        var ve = new oe(F, te);
                        if (ve.signal && ve.signal.aborted) return Ee(new c.DOMException("Aborted", "AbortError"));
                        var Se = new XMLHttpRequest;

                        function xe() {
                            Se.abort()
                        }
                        Se.onload = function() {
                            var Ue = {
                                status: Se.status,
                                statusText: Se.statusText,
                                headers: Ie(Se.getAllResponseHeaders() || "")
                            };
                            Ue.url = "responseURL" in Se ? Se.responseURL : Ue.headers.get("X-Request-URL");
                            var Ze = "response" in Se ? Se.response : Se.responseText;
                            de(new Ce(Ze, Ue))
                        }, Se.onerror = function() {
                            Ee(new TypeError("Network request failed"))
                        }, Se.ontimeout = function() {
                            Ee(new TypeError("Network request failed"))
                        }, Se.onabort = function() {
                            Ee(new c.DOMException("Aborted", "AbortError"))
                        }, Se.open(ve.method, ve.url, !0), ve.credentials === "include" ? Se.withCredentials = !0 : ve.credentials === "omit" && (Se.withCredentials = !1), "responseType" in Se && u.blob && (Se.responseType = "blob"), ve.headers.forEach(function(Ue, Ze) {
                            Se.setRequestHeader(Ze, Ue)
                        }), ve.signal && (ve.signal.addEventListener("abort", xe), Se.onreadystatechange = function() {
                            Se.readyState === 4 && ve.signal.removeEventListener("abort", xe)
                        }), Se.send(typeof ve._bodyInit > "u" ? null : ve._bodyInit)
                    })
                }
                return we.polyfill = !0, o.fetch || (o.fetch = we, o.Headers = L, o.Request = oe, o.Response = Ce), c.Headers = L, c.Request = oe, c.Response = Ce, c.fetch = we, Object.defineProperty(c, "__esModule", {
                    value: !0
                }), c
            })({})
        })(n), n.fetch.ponyfill = !0, delete n.fetch.polyfill;
        var s = n;
        e = s.fetch, e.default = s.fetch, e.fetch = s.fetch, e.Headers = s.Headers, e.Request = s.Request, e.Response = s.Response, t.exports = e
    })(hd, hd.exports);
    var sU = function() {
            if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function") return !1;
            if (typeof Symbol.iterator == "symbol") return !0;
            var e = {},
                r = Symbol("test"),
                n = Object(r);
            if (typeof r == "string" || Object.prototype.toString.call(r) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]") return !1;
            var s = 42;
            e[r] = s;
            for (r in e) return !1;
            if (typeof Object.keys == "function" && Object.keys(e).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(e).length !== 0) return !1;
            var o = Object.getOwnPropertySymbols(e);
            if (o.length !== 1 || o[0] !== r || !Object.prototype.propertyIsEnumerable.call(e, r)) return !1;
            if (typeof Object.getOwnPropertyDescriptor == "function") {
                var c = Object.getOwnPropertyDescriptor(e, r);
                if (c.value !== s || c.enumerable !== !0) return !1
            }
            return !0
        },
        gy = typeof Symbol < "u" && Symbol,
        aU = sU,
        oU = function() {
            return typeof gy != "function" || typeof Symbol != "function" || typeof gy("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : aU()
        },
        cU = "Function.prototype.bind called on incompatible ",
        ff = Array.prototype.slice,
        lU = Object.prototype.toString,
        uU = "[object Function]",
        fU = function(e) {
            var r = this;
            if (typeof r != "function" || lU.call(r) !== uU) throw new TypeError(cU + r);
            for (var n = ff.call(arguments, 1), s, o = function() {
                    if (this instanceof s) {
                        var m = r.apply(this, n.concat(ff.call(arguments)));
                        return Object(m) === m ? m : this
                    } else return r.apply(e, n.concat(ff.call(arguments)))
                }, c = Math.max(0, r.length - n.length), u = [], f = 0; f < c; f++) u.push("$" + f);
            if (s = Function("binder", "return function (" + u.join(",") + "){ return binder.apply(this,arguments); }")(o), r.prototype) {
                var h = function() {};
                h.prototype = r.prototype, s.prototype = new h, h.prototype = null
            }
            return s
        },
        dU = fU,
        Uh = Function.prototype.bind || dU,
        hU = Uh,
        pU = hU.call(Function.call, Object.prototype.hasOwnProperty),
        Xe, Ys = SyntaxError,
        uT = Function,
        Fs = TypeError,
        df = function(t) {
            try {
                return uT('"use strict"; return (' + t + ").constructor;")()
            } catch {}
        },
        es = Object.getOwnPropertyDescriptor;
    if (es) try {
        es({}, "")
    } catch {
        es = null
    }
    var hf = function() {
            throw new Fs
        },
        gU = es ? function() {
            try {
                return arguments.callee, hf
            } catch {
                try {
                    return es(arguments, "callee").get
                } catch {
                    return hf
                }
            }
        }() : hf,
        Ss = oU(),
        ti = Object.getPrototypeOf || function(t) {
            return t.__proto__
        },
        Is = {},
        mU = typeof Uint8Array > "u" ? Xe : ti(Uint8Array),
        Us = {
            "%AggregateError%": typeof AggregateError > "u" ? Xe : AggregateError,
            "%Array%": Array,
            "%ArrayBuffer%": typeof ArrayBuffer > "u" ? Xe : ArrayBuffer,
            "%ArrayIteratorPrototype%": Ss ? ti([][Symbol.iterator]()) : Xe,
            "%AsyncFromSyncIteratorPrototype%": Xe,
            "%AsyncFunction%": Is,
            "%AsyncGenerator%": Is,
            "%AsyncGeneratorFunction%": Is,
            "%AsyncIteratorPrototype%": Is,
            "%Atomics%": typeof Atomics > "u" ? Xe : Atomics,
            "%BigInt%": typeof BigInt > "u" ? Xe : BigInt,
            "%Boolean%": Boolean,
            "%DataView%": typeof DataView > "u" ? Xe : DataView,
            "%Date%": Date,
            "%decodeURI%": decodeURI,
            "%decodeURIComponent%": decodeURIComponent,
            "%encodeURI%": encodeURI,
            "%encodeURIComponent%": encodeURIComponent,
            "%Error%": Error,
            "%eval%": eval,
            "%EvalError%": EvalError,
            "%Float32Array%": typeof Float32Array > "u" ? Xe : Float32Array,
            "%Float64Array%": typeof Float64Array > "u" ? Xe : Float64Array,
            "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? Xe : FinalizationRegistry,
            "%Function%": uT,
            "%GeneratorFunction%": Is,
            "%Int8Array%": typeof Int8Array > "u" ? Xe : Int8Array,
            "%Int16Array%": typeof Int16Array > "u" ? Xe : Int16Array,
            "%Int32Array%": typeof Int32Array > "u" ? Xe : Int32Array,
            "%isFinite%": isFinite,
            "%isNaN%": isNaN,
            "%IteratorPrototype%": Ss ? ti(ti([][Symbol.iterator]())) : Xe,
            "%JSON%": typeof JSON == "object" ? JSON : Xe,
            "%Map%": typeof Map > "u" ? Xe : Map,
            "%MapIteratorPrototype%": typeof Map > "u" || !Ss ? Xe : ti(new Map()[Symbol.iterator]()),
            "%Math%": Math,
            "%Number%": Number,
            "%Object%": Object,
            "%parseFloat%": parseFloat,
            "%parseInt%": parseInt,
            "%Promise%": typeof Promise > "u" ? Xe : Promise,
            "%Proxy%": typeof Proxy > "u" ? Xe : Proxy,
            "%RangeError%": RangeError,
            "%ReferenceError%": ReferenceError,
            "%Reflect%": typeof Reflect > "u" ? Xe : Reflect,
            "%RegExp%": RegExp,
            "%Set%": typeof Set > "u" ? Xe : Set,
            "%SetIteratorPrototype%": typeof Set > "u" || !Ss ? Xe : ti(new Set()[Symbol.iterator]()),
            "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? Xe : SharedArrayBuffer,
            "%String%": String,
            "%StringIteratorPrototype%": Ss ? ti("" [Symbol.iterator]()) : Xe,
            "%Symbol%": Ss ? Symbol : Xe,
            "%SyntaxError%": Ys,
            "%ThrowTypeError%": gU,
            "%TypedArray%": mU,
            "%TypeError%": Fs,
            "%Uint8Array%": typeof Uint8Array > "u" ? Xe : Uint8Array,
            "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? Xe : Uint8ClampedArray,
            "%Uint16Array%": typeof Uint16Array > "u" ? Xe : Uint16Array,
            "%Uint32Array%": typeof Uint32Array > "u" ? Xe : Uint32Array,
            "%URIError%": URIError,
            "%WeakMap%": typeof WeakMap > "u" ? Xe : WeakMap,
            "%WeakRef%": typeof WeakRef > "u" ? Xe : WeakRef,
            "%WeakSet%": typeof WeakSet > "u" ? Xe : WeakSet
        },
        vU = function t(e) {
            var r;
            if (e === "%AsyncFunction%") r = df("async function () {}");
            else if (e === "%GeneratorFunction%") r = df("function* () {}");
            else if (e === "%AsyncGeneratorFunction%") r = df("async function* () {}");
            else if (e === "%AsyncGenerator%") {
                var n = t("%AsyncGeneratorFunction%");
                n && (r = n.prototype)
            } else if (e === "%AsyncIteratorPrototype%") {
                var s = t("%AsyncGenerator%");
                s && (r = ti(s.prototype))
            }
            return Us[e] = r, r
        },
        my = {
            "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
            "%ArrayPrototype%": ["Array", "prototype"],
            "%ArrayProto_entries%": ["Array", "prototype", "entries"],
            "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
            "%ArrayProto_keys%": ["Array", "prototype", "keys"],
            "%ArrayProto_values%": ["Array", "prototype", "values"],
            "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
            "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
            "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
            "%BooleanPrototype%": ["Boolean", "prototype"],
            "%DataViewPrototype%": ["DataView", "prototype"],
            "%DatePrototype%": ["Date", "prototype"],
            "%ErrorPrototype%": ["Error", "prototype"],
            "%EvalErrorPrototype%": ["EvalError", "prototype"],
            "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
            "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
            "%FunctionPrototype%": ["Function", "prototype"],
            "%Generator%": ["GeneratorFunction", "prototype"],
            "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
            "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
            "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
            "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
            "%JSONParse%": ["JSON", "parse"],
            "%JSONStringify%": ["JSON", "stringify"],
            "%MapPrototype%": ["Map", "prototype"],
            "%NumberPrototype%": ["Number", "prototype"],
            "%ObjectPrototype%": ["Object", "prototype"],
            "%ObjProto_toString%": ["Object", "prototype", "toString"],
            "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
            "%PromisePrototype%": ["Promise", "prototype"],
            "%PromiseProto_then%": ["Promise", "prototype", "then"],
            "%Promise_all%": ["Promise", "all"],
            "%Promise_reject%": ["Promise", "reject"],
            "%Promise_resolve%": ["Promise", "resolve"],
            "%RangeErrorPrototype%": ["RangeError", "prototype"],
            "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
            "%RegExpPrototype%": ["RegExp", "prototype"],
            "%SetPrototype%": ["Set", "prototype"],
            "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
            "%StringPrototype%": ["String", "prototype"],
            "%SymbolPrototype%": ["Symbol", "prototype"],
            "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
            "%TypedArrayPrototype%": ["TypedArray", "prototype"],
            "%TypeErrorPrototype%": ["TypeError", "prototype"],
            "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
            "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
            "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
            "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
            "%URIErrorPrototype%": ["URIError", "prototype"],
            "%WeakMapPrototype%": ["WeakMap", "prototype"],
            "%WeakSetPrototype%": ["WeakSet", "prototype"]
        },
        oo = Uh,
        Wc = pU,
        yU = oo.call(Function.call, Array.prototype.concat),
        _U = oo.call(Function.apply, Array.prototype.splice),
        vy = oo.call(Function.call, String.prototype.replace),
        Kc = oo.call(Function.call, String.prototype.slice),
        EU = oo.call(Function.call, RegExp.prototype.exec),
        bU = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
        TU = /\\(\\)?/g,
        SU = function(e) {
            var r = Kc(e, 0, 1),
                n = Kc(e, -1);
            if (r === "%" && n !== "%") throw new Ys("invalid intrinsic syntax, expected closing `%`");
            if (n === "%" && r !== "%") throw new Ys("invalid intrinsic syntax, expected opening `%`");
            var s = [];
            return vy(e, bU, function(o, c, u, f) {
                s[s.length] = u ? vy(f, TU, "$1") : c || o
            }), s
        },
        OU = function(e, r) {
            var n = e,
                s;
            if (Wc(my, n) && (s = my[n], n = "%" + s[0] + "%"), Wc(Us, n)) {
                var o = Us[n];
                if (o === Is && (o = vU(n)), typeof o > "u" && !r) throw new Fs("intrinsic " + e + " exists, but is not available. Please file an issue!");
                return {
                    alias: s,
                    name: n,
                    value: o
                }
            }
            throw new Ys("intrinsic " + e + " does not exist!")
        },
        Bh = function(e, r) {
            if (typeof e != "string" || e.length === 0) throw new Fs("intrinsic name must be a non-empty string");
            if (arguments.length > 1 && typeof r != "boolean") throw new Fs('"allowMissing" argument must be a boolean');
            if (EU(/^%?[^%]*%?$/g, e) === null) throw new Ys("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
            var n = SU(e),
                s = n.length > 0 ? n[0] : "",
                o = OU("%" + s + "%", r),
                c = o.name,
                u = o.value,
                f = !1,
                h = o.alias;
            h && (s = h[0], _U(n, yU([0, 1], h)));
            for (var m = 1, _ = !0; m < n.length; m += 1) {
                var b = n[m],
                    C = Kc(b, 0, 1),
                    L = Kc(b, -1);
                if ((C === '"' || C === "'" || C === "`" || L === '"' || L === "'" || L === "`") && C !== L) throw new Ys("property names with quotes must have matching quotes");
                if ((b === "constructor" || !_) && (f = !0), s += "." + b, c = "%" + s + "%", Wc(Us, c)) u = Us[c];
                else if (u != null) {
                    if (!(b in u)) {
                        if (!r) throw new Fs("base intrinsic for " + e + " exists, but the property is not available.");
                        return
                    }
                    if (es && m + 1 >= n.length) {
                        var M = es(u, b);
                        _ = !!M, _ && "get" in M && !("originalValue" in M.get) ? u = M.get : u = u[b]
                    } else _ = Wc(u, b), u = u[b];
                    _ && !f && (Us[c] = u)
                }
            }
            return u
        },
        fT = {
            exports: {}
        };
    (function(t) {
        var e = Uh,
            r = Bh,
            n = r("%Function.prototype.apply%"),
            s = r("%Function.prototype.call%"),
            o = r("%Reflect.apply%", !0) || e.call(s, n),
            c = r("%Object.getOwnPropertyDescriptor%", !0),
            u = r("%Object.defineProperty%", !0),
            f = r("%Math.max%");
        if (u) try {
            u({}, "a", {
                value: 1
            })
        } catch {
            u = null
        }
        t.exports = function(_) {
            var b = o(e, s, arguments);
            if (c && u) {
                var C = c(b, "length");
                C.configurable && u(b, "length", {
                    value: 1 + f(0, _.length - (arguments.length - 1))
                })
            }
            return b
        };
        var h = function() {
            return o(e, n, arguments)
        };
        u ? u(t.exports, "apply", {
            value: h
        }) : t.exports.apply = h
    })(fT);
    var dT = Bh,
        hT = fT.exports,
        wU = hT(dT("String.prototype.indexOf")),
        CU = function(e, r) {
            var n = dT(e, !!r);
            return typeof n == "function" && wU(e, ".prototype.") > -1 ? hT(n) : n
        };
    const IU = {},
        $U = Object.freeze(Object.defineProperty({
            __proto__: null,
            default: IU
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        AU = LL($U);
    var jh = typeof Map == "function" && Map.prototype,
        pf = Object.getOwnPropertyDescriptor && jh ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null,
        Hc = jh && pf && typeof pf.get == "function" ? pf.get : null,
        RU = jh && Map.prototype.forEach,
        Gh = typeof Set == "function" && Set.prototype,
        gf = Object.getOwnPropertyDescriptor && Gh ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null,
        Vc = Gh && gf && typeof gf.get == "function" ? gf.get : null,
        NU = Gh && Set.prototype.forEach,
        PU = typeof WeakMap == "function" && WeakMap.prototype,
        xa = PU ? WeakMap.prototype.has : null,
        LU = typeof WeakSet == "function" && WeakSet.prototype,
        Da = LU ? WeakSet.prototype.has : null,
        kU = typeof WeakRef == "function" && WeakRef.prototype,
        yy = kU ? WeakRef.prototype.deref : null,
        xU = Boolean.prototype.valueOf,
        DU = Object.prototype.toString,
        MU = Function.prototype.toString,
        FU = String.prototype.match,
        Wh = String.prototype.slice,
        si = String.prototype.replace,
        UU = String.prototype.toUpperCase,
        _y = String.prototype.toLowerCase,
        pT = RegExp.prototype.test,
        Ey = Array.prototype.concat,
        En = Array.prototype.join,
        BU = Array.prototype.slice,
        by = Math.floor,
        pd = typeof BigInt == "function" ? BigInt.prototype.valueOf : null,
        mf = Object.getOwnPropertySymbols,
        gd = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null,
        qs = typeof Symbol == "function" && typeof Symbol.iterator == "object",
        ar = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === qs ? "object" : "symbol") ? Symbol.toStringTag : null,
        gT = Object.prototype.propertyIsEnumerable,
        Ty = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(t) {
            return t.__proto__
        } : null);

    function Sy(t, e) {
        if (t === 1 / 0 || t === -1 / 0 || t !== t || t && t > -1e3 && t < 1e3 || pT.call(/e/, e)) return e;
        var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
        if (typeof t == "number") {
            var n = t < 0 ? -by(-t) : by(t);
            if (n !== t) {
                var s = String(n),
                    o = Wh.call(e, s.length + 1);
                return si.call(s, r, "$&_") + "." + si.call(si.call(o, /([0-9]{3})/g, "$&_"), /_$/, "")
            }
        }
        return si.call(e, r, "$&_")
    }
    var md = AU,
        Oy = md.custom,
        wy = vT(Oy) ? Oy : null,
        jU = function t(e, r, n, s) {
            var o = r || {};
            if (ri(o, "quoteStyle") && o.quoteStyle !== "single" && o.quoteStyle !== "double") throw new TypeError('option "quoteStyle" must be "single" or "double"');
            if (ri(o, "maxStringLength") && (typeof o.maxStringLength == "number" ? o.maxStringLength < 0 && o.maxStringLength !== 1 / 0 : o.maxStringLength !== null)) throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
            var c = ri(o, "customInspect") ? o.customInspect : !0;
            if (typeof c != "boolean" && c !== "symbol") throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
            if (ri(o, "indent") && o.indent !== null && o.indent !== "	" && !(parseInt(o.indent, 10) === o.indent && o.indent > 0)) throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
            if (ri(o, "numericSeparator") && typeof o.numericSeparator != "boolean") throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
            var u = o.numericSeparator;
            if (typeof e > "u") return "undefined";
            if (e === null) return "null";
            if (typeof e == "boolean") return e ? "true" : "false";
            if (typeof e == "string") return _T(e, o);
            if (typeof e == "number") {
                if (e === 0) return 1 / 0 / e > 0 ? "0" : "-0";
                var f = String(e);
                return u ? Sy(e, f) : f
            }
            if (typeof e == "bigint") {
                var h = String(e) + "n";
                return u ? Sy(e, h) : h
            }
            var m = typeof o.depth > "u" ? 5 : o.depth;
            if (typeof n > "u" && (n = 0), n >= m && m > 0 && typeof e == "object") return vd(e) ? "[Array]" : "[Object]";
            var _ = sB(o, n);
            if (typeof s > "u") s = [];
            else if (yT(s, e) >= 0) return "[Circular]";

            function b(we, F, te) {
                if (F && (s = BU.call(s), s.push(F)), te) {
                    var de = {
                        depth: o.depth
                    };
                    return ri(o, "quoteStyle") && (de.quoteStyle = o.quoteStyle), t(we, de, n + 1, s)
                }
                return t(we, o, n + 1, s)
            }
            if (typeof e == "function" && !Cy(e)) {
                var C = XU(e),
                    L = fc(e, b);
                return "[Function" + (C ? ": " + C : " (anonymous)") + "]" + (L.length > 0 ? " { " + En.call(L, ", ") + " }" : "")
            }
            if (vT(e)) {
                var M = qs ? si.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1") : gd.call(e);
                return typeof e == "object" && !qs ? $a(M) : M
            }
            if (rB(e)) {
                for (var B = "<" + _y.call(String(e.nodeName)), I = e.attributes || [], K = 0; K < I.length; K++) B += " " + I[K].name + "=" + mT(GU(I[K].value), "double", o);
                return B += ">", e.childNodes && e.childNodes.length && (B += "..."), B += "</" + _y.call(String(e.nodeName)) + ">", B
            }
            if (vd(e)) {
                if (e.length === 0) return "[]";
                var Y = fc(e, b);
                return _ && !iB(Y) ? "[" + yd(Y, _) + "]" : "[ " + En.call(Y, ", ") + " ]"
            }
            if (KU(e)) {
                var G = fc(e, b);
                return !("cause" in Error.prototype) && "cause" in e && !gT.call(e, "cause") ? "{ [" + String(e) + "] " + En.call(Ey.call("[cause]: " + b(e.cause), G), ", ") + " }" : G.length === 0 ? "[" + String(e) + "]" : "{ [" + String(e) + "] " + En.call(G, ", ") + " }"
            }
            if (typeof e == "object" && c) {
                if (wy && typeof e[wy] == "function" && md) return md(e, {
                    depth: m - n
                });
                if (c !== "symbol" && typeof e.inspect == "function") return e.inspect()
            }
            if (JU(e)) {
                var j = [];
                return RU.call(e, function(we, F) {
                    j.push(b(F, e, !0) + " => " + b(we, e))
                }), Iy("Map", Hc.call(e), j, _)
            }
            if (eB(e)) {
                var z = [];
                return NU.call(e, function(we) {
                    z.push(b(we, e))
                }), Iy("Set", Vc.call(e), z, _)
            }
            if (ZU(e)) return vf("WeakMap");
            if (tB(e)) return vf("WeakSet");
            if (QU(e)) return vf("WeakRef");
            if (VU(e)) return $a(b(Number(e)));
            if (qU(e)) return $a(b(pd.call(e)));
            if (YU(e)) return $a(xU.call(e));
            if (HU(e)) return $a(b(String(e)));
            if (!WU(e) && !Cy(e)) {
                var ie = fc(e, b),
                    oe = Ty ? Ty(e) === Object.prototype : e instanceof Object || e.constructor === Object,
                    ue = e instanceof Object ? "" : "null prototype",
                    Ie = !oe && ar && Object(e) === e && ar in e ? Wh.call(vi(e), 8, -1) : ue ? "Object" : "",
                    Ce = oe || typeof e.constructor != "function" ? "" : e.constructor.name ? e.constructor.name + " " : "",
                    fe = Ce + (Ie || ue ? "[" + En.call(Ey.call([], Ie || [], ue || []), ": ") + "] " : "");
                return ie.length === 0 ? fe + "{}" : _ ? fe + "{" + yd(ie, _) + "}" : fe + "{ " + En.call(ie, ", ") + " }"
            }
            return String(e)
        };

    function mT(t, e, r) {
        var n = (r.quoteStyle || e) === "double" ? '"' : "'";
        return n + t + n
    }

    function GU(t) {
        return si.call(String(t), /"/g, "&quot;")
    }

    function vd(t) {
        return vi(t) === "[object Array]" && (!ar || !(typeof t == "object" && ar in t))
    }

    function WU(t) {
        return vi(t) === "[object Date]" && (!ar || !(typeof t == "object" && ar in t))
    }

    function Cy(t) {
        return vi(t) === "[object RegExp]" && (!ar || !(typeof t == "object" && ar in t))
    }

    function KU(t) {
        return vi(t) === "[object Error]" && (!ar || !(typeof t == "object" && ar in t))
    }

    function HU(t) {
        return vi(t) === "[object String]" && (!ar || !(typeof t == "object" && ar in t))
    }

    function VU(t) {
        return vi(t) === "[object Number]" && (!ar || !(typeof t == "object" && ar in t))
    }

    function YU(t) {
        return vi(t) === "[object Boolean]" && (!ar || !(typeof t == "object" && ar in t))
    }

    function vT(t) {
        if (qs) return t && typeof t == "object" && t instanceof Symbol;
        if (typeof t == "symbol") return !0;
        if (!t || typeof t != "object" || !gd) return !1;
        try {
            return gd.call(t), !0
        } catch {}
        return !1
    }

    function qU(t) {
        if (!t || typeof t != "object" || !pd) return !1;
        try {
            return pd.call(t), !0
        } catch {}
        return !1
    }
    var zU = Object.prototype.hasOwnProperty || function(t) {
        return t in this
    };

    function ri(t, e) {
        return zU.call(t, e)
    }

    function vi(t) {
        return DU.call(t)
    }

    function XU(t) {
        if (t.name) return t.name;
        var e = FU.call(MU.call(t), /^function\s*([\w$]+)/);
        return e ? e[1] : null
    }

    function yT(t, e) {
        if (t.indexOf) return t.indexOf(e);
        for (var r = 0, n = t.length; r < n; r++)
            if (t[r] === e) return r;
        return -1
    }

    function JU(t) {
        if (!Hc || !t || typeof t != "object") return !1;
        try {
            Hc.call(t);
            try {
                Vc.call(t)
            } catch {
                return !0
            }
            return t instanceof Map
        } catch {}
        return !1
    }

    function ZU(t) {
        if (!xa || !t || typeof t != "object") return !1;
        try {
            xa.call(t, xa);
            try {
                Da.call(t, Da)
            } catch {
                return !0
            }
            return t instanceof WeakMap
        } catch {}
        return !1
    }

    function QU(t) {
        if (!yy || !t || typeof t != "object") return !1;
        try {
            return yy.call(t), !0
        } catch {}
        return !1
    }

    function eB(t) {
        if (!Vc || !t || typeof t != "object") return !1;
        try {
            Vc.call(t);
            try {
                Hc.call(t)
            } catch {
                return !0
            }
            return t instanceof Set
        } catch {}
        return !1
    }

    function tB(t) {
        if (!Da || !t || typeof t != "object") return !1;
        try {
            Da.call(t, Da);
            try {
                xa.call(t, xa)
            } catch {
                return !0
            }
            return t instanceof WeakSet
        } catch {}
        return !1
    }

    function rB(t) {
        return !t || typeof t != "object" ? !1 : typeof HTMLElement < "u" && t instanceof HTMLElement ? !0 : typeof t.nodeName == "string" && typeof t.getAttribute == "function"
    }

    function _T(t, e) {
        if (t.length > e.maxStringLength) {
            var r = t.length - e.maxStringLength,
                n = "... " + r + " more character" + (r > 1 ? "s" : "");
            return _T(Wh.call(t, 0, e.maxStringLength), e) + n
        }
        var s = si.call(si.call(t, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, nB);
        return mT(s, "single", e)
    }

    function nB(t) {
        var e = t.charCodeAt(0),
            r = {
                8: "b",
                9: "t",
                10: "n",
                12: "f",
                13: "r"
            } [e];
        return r ? "\\" + r : "\\x" + (e < 16 ? "0" : "") + UU.call(e.toString(16))
    }

    function $a(t) {
        return "Object(" + t + ")"
    }

    function vf(t) {
        return t + " { ? }"
    }

    function Iy(t, e, r, n) {
        var s = n ? yd(r, n) : En.call(r, ", ");
        return t + " (" + e + ") {" + s + "}"
    }

    function iB(t) {
        for (var e = 0; e < t.length; e++)
            if (yT(t[e], `
`) >= 0) return !1;
        return !0
    }

    function sB(t, e) {
        var r;
        if (t.indent === "	") r = "	";
        else if (typeof t.indent == "number" && t.indent > 0) r = En.call(Array(t.indent + 1), " ");
        else return null;
        return {
            base: r,
            prev: En.call(Array(e + 1), r)
        }
    }

    function yd(t, e) {
        if (t.length === 0) return "";
        var r = `
` + e.prev + e.base;
        return r + En.call(t, "," + r) + `
` + e.prev
    }

    function fc(t, e) {
        var r = vd(t),
            n = [];
        if (r) {
            n.length = t.length;
            for (var s = 0; s < t.length; s++) n[s] = ri(t, s) ? e(t[s], t) : ""
        }
        var o = typeof mf == "function" ? mf(t) : [],
            c;
        if (qs) {
            c = {};
            for (var u = 0; u < o.length; u++) c["$" + o[u]] = o[u]
        }
        for (var f in t) !ri(t, f) || r && String(Number(f)) === f && f < t.length || qs && c["$" + f] instanceof Symbol || (pT.call(/[^\w$]/, f) ? n.push(e(f, t) + ": " + e(t[f], t)) : n.push(f + ": " + e(t[f], t)));
        if (typeof mf == "function")
            for (var h = 0; h < o.length; h++) gT.call(t, o[h]) && n.push("[" + e(o[h]) + "]: " + e(t[o[h]], t));
        return n
    }
    var Kh = Bh,
        aa = CU,
        aB = jU,
        oB = Kh("%TypeError%"),
        dc = Kh("%WeakMap%", !0),
        hc = Kh("%Map%", !0),
        cB = aa("WeakMap.prototype.get", !0),
        lB = aa("WeakMap.prototype.set", !0),
        uB = aa("WeakMap.prototype.has", !0),
        fB = aa("Map.prototype.get", !0),
        dB = aa("Map.prototype.set", !0),
        hB = aa("Map.prototype.has", !0),
        Hh = function(t, e) {
            for (var r = t, n;
                (n = r.next) !== null; r = n)
                if (n.key === e) return r.next = n.next, n.next = t.next, t.next = n, n
        },
        pB = function(t, e) {
            var r = Hh(t, e);
            return r && r.value
        },
        gB = function(t, e, r) {
            var n = Hh(t, e);
            n ? n.value = r : t.next = {
                key: e,
                next: t.next,
                value: r
            }
        },
        mB = function(t, e) {
            return !!Hh(t, e)
        },
        vB = function() {
            var e, r, n, s = {
                assert: function(o) {
                    if (!s.has(o)) throw new oB("Side channel does not contain " + aB(o))
                },
                get: function(o) {
                    if (dc && o && (typeof o == "object" || typeof o == "function")) {
                        if (e) return cB(e, o)
                    } else if (hc) {
                        if (r) return fB(r, o)
                    } else if (n) return pB(n, o)
                },
                has: function(o) {
                    if (dc && o && (typeof o == "object" || typeof o == "function")) {
                        if (e) return uB(e, o)
                    } else if (hc) {
                        if (r) return hB(r, o)
                    } else if (n) return mB(n, o);
                    return !1
                },
                set: function(o, c) {
                    dc && o && (typeof o == "object" || typeof o == "function") ? (e || (e = new dc), lB(e, o, c)) : hc ? (r || (r = new hc), dB(r, o, c)) : (n || (n = {
                        key: {},
                        next: null
                    }), gB(n, o, c))
                }
            };
            return s
        },
        yB = String.prototype.replace,
        _B = /%20/g,
        yf = {
            RFC1738: "RFC1738",
            RFC3986: "RFC3986"
        },
        Vh = {
            default: yf.RFC3986,
            formatters: {
                RFC1738: function(t) {
                    return yB.call(t, _B, "+")
                },
                RFC3986: function(t) {
                    return String(t)
                }
            },
            RFC1738: yf.RFC1738,
            RFC3986: yf.RFC3986
        },
        EB = Vh,
        _f = Object.prototype.hasOwnProperty,
        Yi = Array.isArray,
        gn = function() {
            for (var t = [], e = 0; e < 256; ++e) t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
            return t
        }(),
        bB = function(e) {
            for (; e.length > 1;) {
                var r = e.pop(),
                    n = r.obj[r.prop];
                if (Yi(n)) {
                    for (var s = [], o = 0; o < n.length; ++o) typeof n[o] < "u" && s.push(n[o]);
                    r.obj[r.prop] = s
                }
            }
        },
        ET = function(e, r) {
            for (var n = r && r.plainObjects ? Object.create(null) : {}, s = 0; s < e.length; ++s) typeof e[s] < "u" && (n[s] = e[s]);
            return n
        },
        TB = function t(e, r, n) {
            if (!r) return e;
            if (typeof r != "object") {
                if (Yi(e)) e.push(r);
                else if (e && typeof e == "object")(n && (n.plainObjects || n.allowPrototypes) || !_f.call(Object.prototype, r)) && (e[r] = !0);
                else return [e, r];
                return e
            }
            if (!e || typeof e != "object") return [e].concat(r);
            var s = e;
            return Yi(e) && !Yi(r) && (s = ET(e, n)), Yi(e) && Yi(r) ? (r.forEach(function(o, c) {
                if (_f.call(e, c)) {
                    var u = e[c];
                    u && typeof u == "object" && o && typeof o == "object" ? e[c] = t(u, o, n) : e.push(o)
                } else e[c] = o
            }), e) : Object.keys(r).reduce(function(o, c) {
                var u = r[c];
                return _f.call(o, c) ? o[c] = t(o[c], u, n) : o[c] = u, o
            }, s)
        },
        SB = function(e, r) {
            return Object.keys(r).reduce(function(n, s) {
                return n[s] = r[s], n
            }, e)
        },
        OB = function(t, e, r) {
            var n = t.replace(/\+/g, " ");
            if (r === "iso-8859-1") return n.replace(/%[0-9a-f]{2}/gi, unescape);
            try {
                return decodeURIComponent(n)
            } catch {
                return n
            }
        },
        wB = function(e, r, n, s, o) {
            if (e.length === 0) return e;
            var c = e;
            if (typeof e == "symbol" ? c = Symbol.prototype.toString.call(e) : typeof e != "string" && (c = String(e)), n === "iso-8859-1") return escape(c).replace(/%u[0-9a-f]{4}/gi, function(m) {
                return "%26%23" + parseInt(m.slice(2), 16) + "%3B"
            });
            for (var u = "", f = 0; f < c.length; ++f) {
                var h = c.charCodeAt(f);
                if (h === 45 || h === 46 || h === 95 || h === 126 || h >= 48 && h <= 57 || h >= 65 && h <= 90 || h >= 97 && h <= 122 || o === EB.RFC1738 && (h === 40 || h === 41)) {
                    u += c.charAt(f);
                    continue
                }
                if (h < 128) {
                    u = u + gn[h];
                    continue
                }
                if (h < 2048) {
                    u = u + (gn[192 | h >> 6] + gn[128 | h & 63]);
                    continue
                }
                if (h < 55296 || h >= 57344) {
                    u = u + (gn[224 | h >> 12] + gn[128 | h >> 6 & 63] + gn[128 | h & 63]);
                    continue
                }
                f += 1, h = 65536 + ((h & 1023) << 10 | c.charCodeAt(f) & 1023), u += gn[240 | h >> 18] + gn[128 | h >> 12 & 63] + gn[128 | h >> 6 & 63] + gn[128 | h & 63]
            }
            return u
        },
        CB = function(e) {
            for (var r = [{
                    obj: {
                        o: e
                    },
                    prop: "o"
                }], n = [], s = 0; s < r.length; ++s)
                for (var o = r[s], c = o.obj[o.prop], u = Object.keys(c), f = 0; f < u.length; ++f) {
                    var h = u[f],
                        m = c[h];
                    typeof m == "object" && m !== null && n.indexOf(m) === -1 && (r.push({
                        obj: c,
                        prop: h
                    }), n.push(m))
                }
            return bB(r), e
        },
        IB = function(e) {
            return Object.prototype.toString.call(e) === "[object RegExp]"
        },
        $B = function(e) {
            return !e || typeof e != "object" ? !1 : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e))
        },
        AB = function(e, r) {
            return [].concat(e, r)
        },
        RB = function(e, r) {
            if (Yi(e)) {
                for (var n = [], s = 0; s < e.length; s += 1) n.push(r(e[s]));
                return n
            }
            return r(e)
        },
        bT = {
            arrayToObject: ET,
            assign: SB,
            combine: AB,
            compact: CB,
            decode: OB,
            encode: wB,
            isBuffer: $B,
            isRegExp: IB,
            maybeMap: RB,
            merge: TB
        },
        TT = vB,
        _d = bT,
        Ma = Vh,
        NB = Object.prototype.hasOwnProperty,
        $y = {
            brackets: function(e) {
                return e + "[]"
            },
            comma: "comma",
            indices: function(e, r) {
                return e + "[" + r + "]"
            },
            repeat: function(e) {
                return e
            }
        },
        xn = Array.isArray,
        PB = String.prototype.split,
        LB = Array.prototype.push,
        ST = function(t, e) {
            LB.apply(t, xn(e) ? e : [e])
        },
        kB = Date.prototype.toISOString,
        Ay = Ma.default,
        Xt = {
            addQueryPrefix: !1,
            allowDots: !1,
            charset: "utf-8",
            charsetSentinel: !1,
            delimiter: "&",
            encode: !0,
            encoder: _d.encode,
            encodeValuesOnly: !1,
            format: Ay,
            formatter: Ma.formatters[Ay],
            indices: !1,
            serializeDate: function(e) {
                return kB.call(e)
            },
            skipNulls: !1,
            strictNullHandling: !1
        },
        xB = function(e) {
            return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "symbol" || typeof e == "bigint"
        },
        Ef = {},
        DB = function t(e, r, n, s, o, c, u, f, h, m, _, b, C, L, M, B) {
            for (var I = e, K = B, Y = 0, G = !1;
                (K = K.get(Ef)) !== void 0 && !G;) {
                var j = K.get(e);
                if (Y += 1, typeof j < "u") {
                    if (j === Y) throw new RangeError("Cyclic object value");
                    G = !0
                }
                typeof K.get(Ef) > "u" && (Y = 0)
            }
            if (typeof f == "function" ? I = f(r, I) : I instanceof Date ? I = _(I) : n === "comma" && xn(I) && (I = _d.maybeMap(I, function(Se) {
                    return Se instanceof Date ? _(Se) : Se
                })), I === null) {
                if (o) return u && !L ? u(r, Xt.encoder, M, "key", b) : r;
                I = ""
            }
            if (xB(I) || _d.isBuffer(I)) {
                if (u) {
                    var z = L ? r : u(r, Xt.encoder, M, "key", b);
                    if (n === "comma" && L) {
                        for (var ie = PB.call(String(I), ","), oe = "", ue = 0; ue < ie.length; ++ue) oe += (ue === 0 ? "" : ",") + C(u(ie[ue], Xt.encoder, M, "value", b));
                        return [C(z) + (s && xn(I) && ie.length === 1 ? "[]" : "") + "=" + oe]
                    }
                    return [C(z) + "=" + C(u(I, Xt.encoder, M, "value", b))]
                }
                return [C(r) + "=" + C(String(I))]
            }
            var Ie = [];
            if (typeof I > "u") return Ie;
            var Ce;
            if (n === "comma" && xn(I)) Ce = [{
                value: I.length > 0 ? I.join(",") || null : void 0
            }];
            else if (xn(f)) Ce = f;
            else {
                var fe = Object.keys(I);
                Ce = h ? fe.sort(h) : fe
            }
            for (var we = s && xn(I) && I.length === 1 ? r + "[]" : r, F = 0; F < Ce.length; ++F) {
                var te = Ce[F],
                    de = typeof te == "object" && typeof te.value < "u" ? te.value : I[te];
                if (!(c && de === null)) {
                    var Ee = xn(I) ? typeof n == "function" ? n(we, te) : we : we + (m ? "." + te : "[" + te + "]");
                    B.set(e, Y);
                    var ve = TT();
                    ve.set(Ef, B), ST(Ie, t(de, Ee, n, s, o, c, u, f, h, m, _, b, C, L, M, ve))
                }
            }
            return Ie
        },
        MB = function(e) {
            if (!e) return Xt;
            if (e.encoder !== null && typeof e.encoder < "u" && typeof e.encoder != "function") throw new TypeError("Encoder has to be a function.");
            var r = e.charset || Xt.charset;
            if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
            var n = Ma.default;
            if (typeof e.format < "u") {
                if (!NB.call(Ma.formatters, e.format)) throw new TypeError("Unknown format option provided.");
                n = e.format
            }
            var s = Ma.formatters[n],
                o = Xt.filter;
            return (typeof e.filter == "function" || xn(e.filter)) && (o = e.filter), {
                addQueryPrefix: typeof e.addQueryPrefix == "boolean" ? e.addQueryPrefix : Xt.addQueryPrefix,
                allowDots: typeof e.allowDots > "u" ? Xt.allowDots : !!e.allowDots,
                charset: r,
                charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : Xt.charsetSentinel,
                delimiter: typeof e.delimiter > "u" ? Xt.delimiter : e.delimiter,
                encode: typeof e.encode == "boolean" ? e.encode : Xt.encode,
                encoder: typeof e.encoder == "function" ? e.encoder : Xt.encoder,
                encodeValuesOnly: typeof e.encodeValuesOnly == "boolean" ? e.encodeValuesOnly : Xt.encodeValuesOnly,
                filter: o,
                format: n,
                formatter: s,
                serializeDate: typeof e.serializeDate == "function" ? e.serializeDate : Xt.serializeDate,
                skipNulls: typeof e.skipNulls == "boolean" ? e.skipNulls : Xt.skipNulls,
                sort: typeof e.sort == "function" ? e.sort : null,
                strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : Xt.strictNullHandling
            }
        },
        FB = function(t, e) {
            var r = t,
                n = MB(e),
                s, o;
            typeof n.filter == "function" ? (o = n.filter, r = o("", r)) : xn(n.filter) && (o = n.filter, s = o);
            var c = [];
            if (typeof r != "object" || r === null) return "";
            var u;
            e && e.arrayFormat in $y ? u = e.arrayFormat : e && "indices" in e ? u = e.indices ? "indices" : "repeat" : u = "indices";
            var f = $y[u];
            if (e && "commaRoundTrip" in e && typeof e.commaRoundTrip != "boolean") throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
            var h = f === "comma" && e && e.commaRoundTrip;
            s || (s = Object.keys(r)), n.sort && s.sort(n.sort);
            for (var m = TT(), _ = 0; _ < s.length; ++_) {
                var b = s[_];
                n.skipNulls && r[b] === null || ST(c, DB(r[b], b, f, h, n.strictNullHandling, n.skipNulls, n.encode ? n.encoder : null, n.filter, n.sort, n.allowDots, n.serializeDate, n.format, n.formatter, n.encodeValuesOnly, n.charset, m))
            }
            var C = c.join(n.delimiter),
                L = n.addQueryPrefix === !0 ? "?" : "";
            return n.charsetSentinel && (n.charset === "iso-8859-1" ? L += "utf8=%26%2310003%3B&" : L += "utf8=%E2%9C%93&"), C.length > 0 ? L + C : ""
        },
        zs = bT,
        Ed = Object.prototype.hasOwnProperty,
        UB = Array.isArray,
        Ht = {
            allowDots: !1,
            allowPrototypes: !1,
            allowSparse: !1,
            arrayLimit: 20,
            charset: "utf-8",
            charsetSentinel: !1,
            comma: !1,
            decoder: zs.decode,
            delimiter: "&",
            depth: 5,
            ignoreQueryPrefix: !1,
            interpretNumericEntities: !1,
            parameterLimit: 1e3,
            parseArrays: !0,
            plainObjects: !1,
            strictNullHandling: !1
        },
        BB = function(t) {
            return t.replace(/&#(\d+);/g, function(e, r) {
                return String.fromCharCode(parseInt(r, 10))
            })
        },
        OT = function(t, e) {
            return t && typeof t == "string" && e.comma && t.indexOf(",") > -1 ? t.split(",") : t
        },
        jB = "utf8=%26%2310003%3B",
        GB = "utf8=%E2%9C%93",
        WB = function(e, r) {
            var n = {},
                s = r.ignoreQueryPrefix ? e.replace(/^\?/, "") : e,
                o = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit,
                c = s.split(r.delimiter, o),
                u = -1,
                f, h = r.charset;
            if (r.charsetSentinel)
                for (f = 0; f < c.length; ++f) c[f].indexOf("utf8=") === 0 && (c[f] === GB ? h = "utf-8" : c[f] === jB && (h = "iso-8859-1"), u = f, f = c.length);
            for (f = 0; f < c.length; ++f)
                if (f !== u) {
                    var m = c[f],
                        _ = m.indexOf("]="),
                        b = _ === -1 ? m.indexOf("=") : _ + 1,
                        C, L;
                    b === -1 ? (C = r.decoder(m, Ht.decoder, h, "key"), L = r.strictNullHandling ? null : "") : (C = r.decoder(m.slice(0, b), Ht.decoder, h, "key"), L = zs.maybeMap(OT(m.slice(b + 1), r), function(M) {
                        return r.decoder(M, Ht.decoder, h, "value")
                    })), L && r.interpretNumericEntities && h === "iso-8859-1" && (L = BB(L)), m.indexOf("[]=") > -1 && (L = UB(L) ? [L] : L), Ed.call(n, C) ? n[C] = zs.combine(n[C], L) : n[C] = L
                } return n
        },
        KB = function(t, e, r, n) {
            for (var s = n ? e : OT(e, r), o = t.length - 1; o >= 0; --o) {
                var c, u = t[o];
                if (u === "[]" && r.parseArrays) c = [].concat(s);
                else {
                    c = r.plainObjects ? Object.create(null) : {};
                    var f = u.charAt(0) === "[" && u.charAt(u.length - 1) === "]" ? u.slice(1, -1) : u,
                        h = parseInt(f, 10);
                    !r.parseArrays && f === "" ? c = {
                        0: s
                    } : !isNaN(h) && u !== f && String(h) === f && h >= 0 && r.parseArrays && h <= r.arrayLimit ? (c = [], c[h] = s) : f !== "__proto__" && (c[f] = s)
                }
                s = c
            }
            return s
        },
        HB = function(e, r, n, s) {
            if (!!e) {
                var o = n.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e,
                    c = /(\[[^[\]]*])/,
                    u = /(\[[^[\]]*])/g,
                    f = n.depth > 0 && c.exec(o),
                    h = f ? o.slice(0, f.index) : o,
                    m = [];
                if (h) {
                    if (!n.plainObjects && Ed.call(Object.prototype, h) && !n.allowPrototypes) return;
                    m.push(h)
                }
                for (var _ = 0; n.depth > 0 && (f = u.exec(o)) !== null && _ < n.depth;) {
                    if (_ += 1, !n.plainObjects && Ed.call(Object.prototype, f[1].slice(1, -1)) && !n.allowPrototypes) return;
                    m.push(f[1])
                }
                return f && m.push("[" + o.slice(f.index) + "]"), KB(m, r, n, s)
            }
        },
        VB = function(e) {
            if (!e) return Ht;
            if (e.decoder !== null && e.decoder !== void 0 && typeof e.decoder != "function") throw new TypeError("Decoder has to be a function.");
            if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
            var r = typeof e.charset > "u" ? Ht.charset : e.charset;
            return {
                allowDots: typeof e.allowDots > "u" ? Ht.allowDots : !!e.allowDots,
                allowPrototypes: typeof e.allowPrototypes == "boolean" ? e.allowPrototypes : Ht.allowPrototypes,
                allowSparse: typeof e.allowSparse == "boolean" ? e.allowSparse : Ht.allowSparse,
                arrayLimit: typeof e.arrayLimit == "number" ? e.arrayLimit : Ht.arrayLimit,
                charset: r,
                charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : Ht.charsetSentinel,
                comma: typeof e.comma == "boolean" ? e.comma : Ht.comma,
                decoder: typeof e.decoder == "function" ? e.decoder : Ht.decoder,
                delimiter: typeof e.delimiter == "string" || zs.isRegExp(e.delimiter) ? e.delimiter : Ht.delimiter,
                depth: typeof e.depth == "number" || e.depth === !1 ? +e.depth : Ht.depth,
                ignoreQueryPrefix: e.ignoreQueryPrefix === !0,
                interpretNumericEntities: typeof e.interpretNumericEntities == "boolean" ? e.interpretNumericEntities : Ht.interpretNumericEntities,
                parameterLimit: typeof e.parameterLimit == "number" ? e.parameterLimit : Ht.parameterLimit,
                parseArrays: e.parseArrays !== !1,
                plainObjects: typeof e.plainObjects == "boolean" ? e.plainObjects : Ht.plainObjects,
                strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : Ht.strictNullHandling
            }
        },
        YB = function(t, e) {
            var r = VB(e);
            if (t === "" || t === null || typeof t > "u") return r.plainObjects ? Object.create(null) : {};
            for (var n = typeof t == "string" ? WB(t, r) : t, s = r.plainObjects ? Object.create(null) : {}, o = Object.keys(n), c = 0; c < o.length; ++c) {
                var u = o[c],
                    f = HB(u, n[u], r, typeof t == "string");
                s = zs.merge(s, f, r)
            }
            return r.allowSparse === !0 ? s : zs.compact(s)
        },
        qB = FB,
        zB = YB,
        XB = Vh,
        wT = {
            formats: XB,
            parse: zB,
            stringify: qB
        };
    class JB {
        constructor(e) {
            this.code = e.code, this.token = e.token, this.host = e.host
        }
    }
    class ZB {
        constructor(e) {
            this.appId = e.appId, this.appTag = e.appTag, this.audienceEnabled = e.audienceEnabled, this.code = e.code, this.host = e.host, this.audienceHost = e.audienceHost, this.locked = e.locked, this.full = e.full, this.moderationEnabled = e.moderationEnabled, this.passwordRequired = e.passwordRequired, this.twitchLocked = e.twitchLocked, this.locale = e.locale, this.keepalive = e.keepalive, this.controllerBranch = e.controllerBranch
        }
    }
    class QB {
        constructor(e) {
            this.connections = e.connections
        }
    }
    class ej {
        constructor(e) {
            this.cause = e.cause
        }
        whenReceived(e) {
            e.disconnect()
        }
    }
    class tj {}
    var Sl = {
        CreateRoomReply: JB,
        GetRoomReply: ZB,
        GetAudienceReply: QB,
        RoomExit: ej,
        RoomLock: tj
    };
    const Ry = hd.exports,
        rj = wT,
        {
            CreateRoomReply: nj,
            GetRoomReply: ij
        } = Sl;
    class sj {
        constructor(e) {
            if (!e.host) throw new Error("unable to create ecast APIClient: no host provided");
            if (this.host = e.host, !e.scheme) throw new Error("unable to create ecast APIClient: no scheme provided");
            this.scheme = e.scheme
        }
        url(e, r) {
            if (r) {
                let n = rj.stringify(r);
                return `${this.scheme}://${this.host}/api/v2${e}?${n}`
            }
            return `${this.scheme}://${this.host}/api/v2${e}`
        }
        async createRoom(e) {
            let r = {
                userId: e.userId || "fart",
                appTag: e.appTag || "test"
            };
            e.password && (r.password = e.password), e.moderatorPassword && (r.moderatorPassword = e.moderatorPassword), e.twitchLocked && (r.twitchLocked = e.twitchLocked), e.locale && (r.locale = e.locale), e.keepalive && (r.keepalive = e.keepalive), e.controllerBranch && (r.controllerBranch = e.controllerBranch);
            let n = this.url("/rooms", r),
                c = await (await Ry(n, {
                    method: "POST"
                })).json();
            if (!c.ok) throw new Error(`failed to create room: ${c.error}`);
            let u = c.body;
            return new nj({
                code: u.code,
                token: u.token,
                host: u.host
            })
        }
        async getRoom(e) {
            let r = this.url(`/rooms/${e.code}`),
                s = await (await Ry(r)).json();
            if (!s.ok) throw new Error(`unable to get room with options ${JSON.stringify(e)}: ${s.error}`);
            let o = s.body;
            return new ij({
                appId: o.appId,
                appTag: o.appTag,
                audienceEnabled: o.audienceEnabled,
                code: o.code,
                host: o.host,
                audienceHost: o.audienceHost,
                locked: o.locked,
                full: o.full,
                moderationEnabled: o.moderationEnabled,
                passwordRequired: o.passwordRequired,
                twitchLocked: o.twitchLocked,
                locale: o.locale,
                keepalive: o.keepalive,
                controllerBranch: o.controllerBranch
            })
        }
    }
    var aj = {
            APIClient: sj
        },
        $s = null;
    typeof WebSocket < "u" ? $s = WebSocket : typeof MozWebSocket < "u" ? $s = MozWebSocket : typeof Pt < "u" ? $s = Pt.WebSocket || Pt.MozWebSocket : typeof window < "u" ? $s = window.WebSocket || window.MozWebSocket : typeof self < "u" && ($s = self.WebSocket || self.MozWebSocket);
    var oj = $s,
        Yh = {
            exports: {}
        },
        Bs = typeof Reflect == "object" ? Reflect : null,
        Ny = Bs && typeof Bs.apply == "function" ? Bs.apply : function(e, r, n) {
            return Function.prototype.apply.call(e, r, n)
        },
        Ac;
    Bs && typeof Bs.ownKeys == "function" ? Ac = Bs.ownKeys : Object.getOwnPropertySymbols ? Ac = function(e) {
        return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
    } : Ac = function(e) {
        return Object.getOwnPropertyNames(e)
    };

    function cj(t) {
        console && console.warn && console.warn(t)
    }
    var CT = Number.isNaN || function(e) {
        return e !== e
    };

    function lt() {
        lt.init.call(this)
    }
    Yh.exports = lt;
    Yh.exports.once = dj;
    lt.EventEmitter = lt;
    lt.prototype._events = void 0;
    lt.prototype._eventsCount = 0;
    lt.prototype._maxListeners = void 0;
    var Py = 10;

    function Ol(t) {
        if (typeof t != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t)
    }
    Object.defineProperty(lt, "defaultMaxListeners", {
        enumerable: !0,
        get: function() {
            return Py
        },
        set: function(t) {
            if (typeof t != "number" || t < 0 || CT(t)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
            Py = t
        }
    });
    lt.init = function() {
        (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
    };
    lt.prototype.setMaxListeners = function(e) {
        if (typeof e != "number" || e < 0 || CT(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
        return this._maxListeners = e, this
    };

    function IT(t) {
        return t._maxListeners === void 0 ? lt.defaultMaxListeners : t._maxListeners
    }
    lt.prototype.getMaxListeners = function() {
        return IT(this)
    };
    lt.prototype.emit = function(e) {
        for (var r = [], n = 1; n < arguments.length; n++) r.push(arguments[n]);
        var s = e === "error",
            o = this._events;
        if (o !== void 0) s = s && o.error === void 0;
        else if (!s) return !1;
        if (s) {
            var c;
            if (r.length > 0 && (c = r[0]), c instanceof Error) throw c;
            var u = new Error("Unhandled error." + (c ? " (" + c.message + ")" : ""));
            throw u.context = c, u
        }
        var f = o[e];
        if (f === void 0) return !1;
        if (typeof f == "function") Ny(f, this, r);
        else
            for (var h = f.length, m = PT(f, h), n = 0; n < h; ++n) Ny(m[n], this, r);
        return !0
    };

    function $T(t, e, r, n) {
        var s, o, c;
        if (Ol(r), o = t._events, o === void 0 ? (o = t._events = Object.create(null), t._eventsCount = 0) : (o.newListener !== void 0 && (t.emit("newListener", e, r.listener ? r.listener : r), o = t._events), c = o[e]), c === void 0) c = o[e] = r, ++t._eventsCount;
        else if (typeof c == "function" ? c = o[e] = n ? [r, c] : [c, r] : n ? c.unshift(r) : c.push(r), s = IT(t), s > 0 && c.length > s && !c.warned) {
            c.warned = !0;
            var u = new Error("Possible EventEmitter memory leak detected. " + c.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
            u.name = "MaxListenersExceededWarning", u.emitter = t, u.type = e, u.count = c.length, cj(u)
        }
        return t
    }
    lt.prototype.addListener = function(e, r) {
        return $T(this, e, r, !1)
    };
    lt.prototype.on = lt.prototype.addListener;
    lt.prototype.prependListener = function(e, r) {
        return $T(this, e, r, !0)
    };

    function lj() {
        if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
    }

    function AT(t, e, r) {
        var n = {
                fired: !1,
                wrapFn: void 0,
                target: t,
                type: e,
                listener: r
            },
            s = lj.bind(n);
        return s.listener = r, n.wrapFn = s, s
    }
    lt.prototype.once = function(e, r) {
        return Ol(r), this.on(e, AT(this, e, r)), this
    };
    lt.prototype.prependOnceListener = function(e, r) {
        return Ol(r), this.prependListener(e, AT(this, e, r)), this
    };
    lt.prototype.removeListener = function(e, r) {
        var n, s, o, c, u;
        if (Ol(r), s = this._events, s === void 0) return this;
        if (n = s[e], n === void 0) return this;
        if (n === r || n.listener === r) --this._eventsCount === 0 ? this._events = Object.create(null) : (delete s[e], s.removeListener && this.emit("removeListener", e, n.listener || r));
        else if (typeof n != "function") {
            for (o = -1, c = n.length - 1; c >= 0; c--)
                if (n[c] === r || n[c].listener === r) {
                    u = n[c].listener, o = c;
                    break
                } if (o < 0) return this;
            o === 0 ? n.shift() : uj(n, o), n.length === 1 && (s[e] = n[0]), s.removeListener !== void 0 && this.emit("removeListener", e, u || r)
        }
        return this
    };
    lt.prototype.off = lt.prototype.removeListener;
    lt.prototype.removeAllListeners = function(e) {
        var r, n, s;
        if (n = this._events, n === void 0) return this;
        if (n.removeListener === void 0) return arguments.length === 0 ? (this._events = Object.create(null), this._eventsCount = 0) : n[e] !== void 0 && (--this._eventsCount === 0 ? this._events = Object.create(null) : delete n[e]), this;
        if (arguments.length === 0) {
            var o = Object.keys(n),
                c;
            for (s = 0; s < o.length; ++s) c = o[s], c !== "removeListener" && this.removeAllListeners(c);
            return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
        }
        if (r = n[e], typeof r == "function") this.removeListener(e, r);
        else if (r !== void 0)
            for (s = r.length - 1; s >= 0; s--) this.removeListener(e, r[s]);
        return this
    };

    function RT(t, e, r) {
        var n = t._events;
        if (n === void 0) return [];
        var s = n[e];
        return s === void 0 ? [] : typeof s == "function" ? r ? [s.listener || s] : [s] : r ? fj(s) : PT(s, s.length)
    }
    lt.prototype.listeners = function(e) {
        return RT(this, e, !0)
    };
    lt.prototype.rawListeners = function(e) {
        return RT(this, e, !1)
    };
    lt.listenerCount = function(t, e) {
        return typeof t.listenerCount == "function" ? t.listenerCount(e) : NT.call(t, e)
    };
    lt.prototype.listenerCount = NT;

    function NT(t) {
        var e = this._events;
        if (e !== void 0) {
            var r = e[t];
            if (typeof r == "function") return 1;
            if (r !== void 0) return r.length
        }
        return 0
    }
    lt.prototype.eventNames = function() {
        return this._eventsCount > 0 ? Ac(this._events) : []
    };

    function PT(t, e) {
        for (var r = new Array(e), n = 0; n < e; ++n) r[n] = t[n];
        return r
    }

    function uj(t, e) {
        for (; e + 1 < t.length; e++) t[e] = t[e + 1];
        t.pop()
    }

    function fj(t) {
        for (var e = new Array(t.length), r = 0; r < e.length; ++r) e[r] = t[r].listener || t[r];
        return e
    }

    function dj(t, e) {
        return new Promise(function(r, n) {
            function s(c) {
                t.removeListener(e, o), n(c)
            }

            function o() {
                typeof t.removeListener == "function" && t.removeListener("error", s), r([].slice.call(arguments))
            }
            LT(t, e, o, {
                once: !0
            }), e !== "error" && hj(t, s, {
                once: !0
            })
        })
    }

    function hj(t, e, r) {
        typeof t.on == "function" && LT(t, "error", e, r)
    }

    function LT(t, e, r, n) {
        if (typeof t.on == "function") n.once ? t.once(e, r) : t.on(e, r);
        else if (typeof t.addEventListener == "function") t.addEventListener(e, function s(o) {
            n.once && t.removeEventListener(e, s), r(o)
        });
        else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t)
    }
    class pj {
        constructor(e) {
            e && (this.error = e.error, this.to = e.to)
        }
        toString() {
            return `ObservedError{
	to:${this.to}
	error:${this.error}
}`
        }
    }
    class wl extends Error {
        constructor(e) {
            super(e), e && (this.code = e.code, this.message = e.message)
        }
    }
    class co extends wl {
        constructor(e) {
            super(e), this.code = 1e3, this.message = e && e.message ? e.message : "ecast server error"
        }
    }
    class kT extends co {
        constructor(e) {
            super(e), this.code = 1001, this.message = e && e.message ? e.message : "create room failed"
        }
    }
    class xT extends co {
        constructor(e) {
            super(e), this.code = 1002, this.message = e && e.message ? e.message : "unable to connect to room"
        }
    }
    class DT extends co {
        constructor(e) {
            super(e), this.code = 1003, this.message = e && e.message ? e.message : "server is shutting down"
        }
    }
    class at extends wl {
        constructor(e) {
            super(e), this.code = 2e3, this.message = e && e.message ? e.message : "ecast client error"
        }
    }
    class MT extends at {
        constructor(e) {
            super(e), this.code = 2001, this.message = e && e.message ? e.message : "parse error in ecast protocol"
        }
    }
    class FT extends at {
        constructor(e) {
            super(e), this.code = 2002, this.message = e && e.message ? e.message : "missing opcode"
        }
    }
    class UT extends at {
        constructor(e) {
            super(e), this.code = 2003, this.message = e && e.message ? e.message : "invalid opcode"
        }
    }
    class BT extends at {
        constructor(e) {
            super(e), this.code = 2004, this.message = e && e.message ? e.message : "invalid arguments"
        }
    }
    class jT extends at {
        constructor(e) {
            super(e), this.code = 2005, this.message = e && e.message ? e.message : "entity not found"
        }
    }
    class GT extends at {
        constructor(e) {
            super(e), this.code = 2006, this.message = e && e.message ? e.message : "an entity already exists with that key"
        }
    }
    class WT extends at {
        constructor(e) {
            super(e), this.code = 2007, this.message = e && e.message ? e.message : "the entity is not of the expected type"
        }
    }
    class KT extends at {
        constructor(e) {
            super(e), this.code = 2008, this.message = e && e.message ? e.message : "no such client"
        }
    }
    class HT extends at {
        constructor(e) {
            super(e), this.code = 2009, this.message = e && e.message ? e.message : "room is locked"
        }
    }
    class VT extends at {
        constructor(e) {
            super(e), this.code = 2010, this.message = e && e.message ? e.message : "room is full"
        }
    }
    class YT extends at {
        constructor(e) {
            super(e), this.code = 2011, this.message = e && e.message ? e.message : "no such license"
        }
    }
    class qT extends at {
        constructor(e) {
            super(e), this.code = 2012, this.message = e && e.message ? e.message : "invalid license"
        }
    }
    class zT extends at {
        constructor(e) {
            super(e), this.code = 2013, this.message = e && e.message ? e.message : "room not found"
        }
    }
    class XT extends at {
        constructor(e) {
            super(e), this.code = 2014, this.message = e && e.message ? e.message : "requested role does not exist"
        }
    }
    class JT extends at {
        constructor(e) {
            super(e), this.code = 2015, this.message = e && e.message ? e.message : "twitch login required"
        }
    }
    class ZT extends at {
        constructor(e) {
            super(e), this.code = 2016, this.message = e && e.message ? e.message : "no such option"
        }
    }
    class QT extends at {
        constructor(e) {
            super(e), this.code = 2017, this.message = e && e.message ? e.message : "password required"
        }
    }
    class eS extends at {
        constructor(e) {
            super(e), this.code = 2018, this.message = e && e.message ? e.message : "invalid room password"
        }
    }
    class tS extends at {
        constructor(e) {
            super(e), this.code = 2019, this.message = e && e.message ? e.message : "missing name"
        }
    }
    class rS extends at {
        constructor(e) {
            super(e), this.code = 2021, this.message = e && e.message ? e.message : "text did not pass text filters"
        }
    }
    class nS extends at {
        constructor(e) {
            super(e), this.code = 2022, this.message = e && e.message ? e.message : "no such filter"
        }
    }
    class iS extends at {
        constructor(e) {
            super(e), this.code = 2023, this.message = e && e.message ? e.message : "permission denied"
        }
    }
    class sS extends at {
        constructor(e) {
            super(e), this.code = 2024, this.message = e && e.message ? e.message : "not connected to a room"
        }
    }
    class aS extends at {
        constructor(e) {
            super(e), this.code = 2025, this.message = e && e.message ? e.message : "illegal operation"
        }
    }
    class oS extends at {
        constructor(e) {
            super(e), this.code = 2026, this.message = e && e.message ? e.message : "invalid ACL change"
        }
    }
    class cS extends at {
        constructor(e) {
            super(e), this.code = 2027, this.message = e && e.message ? e.message : "room has already ended"
        }
    }
    class lS extends at {
        constructor(e) {
            super(e), this.code = 2028, this.message = e && e.message ? e.message : "the entity is locked"
        }
    }
    class uS extends at {
        constructor(e) {
            super(e), this.code = 2420, this.message = e && e.message ? e.message : "rate limit exceeded"
        }
    }

    function gj({
        code: t,
        message: e
    }) {
        const r = mj[t];
        return r ? new r({
            message: e
        }) : new wl({
            message: e
        })
    }
    var Fa = {
        createError: gj,
        CallError: wl,
        EcastServerError: co,
        EcastCreateRoomFailed: kT,
        EcastDialRoomFailed: xT,
        EcastServerIsShuttingDown: DT,
        EcastClientError: at,
        EcastParseError: MT,
        EcastRequestIsMissingOpcode: FT,
        EcastRequestHasInvalidOpcode: UT,
        EcastRequestHasInvalidArguments: BT,
        EcastEntityNotFound: jT,
        EcastEntityAlreadyExists: GT,
        EcastEntityTypeError: WT,
        EcastNoSuchClient: KT,
        EcastRoomIsLocked: HT,
        EcastRoomIsFull: VT,
        EcastLicenseNotFound: YT,
        EcastLicenseCheckFailed: qT,
        EcastRoomNotFound: zT,
        EcastInvalidRole: XT,
        EcastTwitchLoginRequired: JT,
        EcastInvalidOption: ZT,
        EcastPasswordRequired: QT,
        EcastInvalidPassword: eS,
        EcastNameRequired: tS,
        EcastFilterError: rS,
        EcastNoSuchFilter: nS,
        EcastPermissionDenied: iS,
        EcastNotConnected: sS,
        EcastIllegalOperation: aS,
        EcastACLChangeDenied: oS,
        EcastRoomHasEnded: cS,
        EcastEntityLocked: lS,
        EcastRateLimitExceeded: uS,
        ObservedError: pj
    };
    const mj = {
        1e3: co,
        1001: kT,
        1002: xT,
        1003: DT,
        2e3: at,
        2001: MT,
        2002: FT,
        2003: UT,
        2004: BT,
        2005: jT,
        2006: GT,
        2007: WT,
        2008: KT,
        2009: HT,
        2010: VT,
        2011: YT,
        2012: qT,
        2013: zT,
        2014: XT,
        2015: JT,
        2016: ZT,
        2017: QT,
        2018: eS,
        2019: tS,
        2021: rS,
        2022: nS,
        2023: iS,
        2024: sS,
        2025: aS,
        2026: oS,
        2027: cS,
        2028: lS,
        2420: uS
    };
    class vj {
        constructor(e) {
            this.id = e.id, this.deviceId = e.deviceId, this.name = e.name, this.secret = e.secret, this.reconnect = e.reconnect, this.entities = e.entities, this.here = e.here, this.profile = e.profile, this.replayEnd = e.replayEnd
        }
    }
    class yj {
        constructor(e) {
            this.id = e.id, this.userId = e.userId, this.name = e.name, this.role = e.role, this.reconnect = e.reconnect
        }
    }
    class _j {
        constructor(e) {
            this.id = e.id, this.role = e.role
        }
    }
    class Ej {
        constructor(e) {
            this.to = e.to, this.from = e.from, this.body = e.body, this.userId = e.userId
        }
    }
    class bj {
        constructor(e) {
            this.id = e.id, this.banned = e.banned, this.reason = e.reason
        }
    }
    var qh = {
        ClientConnected: yj,
        ClientDisconnected: _j,
        ClientKicked: bj,
        ClientSend: Ej,
        ClientWelcome: vj
    };
    class Tj {
        constructor(e) {
            this.choices = e.choices, this.key = e.key, this.meta = e.meta || {}
        }
        whenReceived(e) {
            e.entities[this.key] = this
        }
        toString() {
            return `CountGroup{
	choices: ${this.choices}
	meta:${JSON.stringify(this.meta)}
}`
        }
    }
    var zh = {
        CountGroup: Tj
    };
    class Sj {
        constructor(e) {
            this.key = e.key, this.count = e.count, this.meta = e.meta || {}
        }
        whenReceived(e) {
            e.entities[this.key] = this
        }
        toString() {
            return `GCounter{
	count:${this.count}
	meta:${this.meta}
}`
        }
    }
    var Xh = {
        GCounter: Sj
    };
    class Oj {
        constructor(e) {
            this.pc = e.pc, this.opcode = e.opcode, this.result = e.result
        }
    }
    var fS = {
        Notification: Oj
    };
    class wj {
        constructor(e) {
            this.from = e.from, this.key = e.key, this.val = e.val, this.version = e.version, this.meta = e.meta || {}, e.acl && (this.acl = e.acl)
        }
        whenReceived(e) {
            e.entities[this.key] = this
        }
        toString() {
            return `ObjectEntity{
	key:${this.key}
	value: ${JSON.stringify(this.val)}
	meta:${JSON.stringify(this.meta)}
}`
        }
        toBlob() {
            return this.val
        }
    }
    class Cj {
        constructor(e) {
            this.message = e.message
        }
        toString() {
            return `ObjectEcho{message: ${this.message}}`
        }
    }
    var Jh = {
        ObjectEntity: wj,
        ObjectEcho: Cj
    };
    class Ij {
        constructor(e) {
            this.key = e.key, this.count = e.count, this.meta = e.meta || {}
        }
        whenReceived(e) {
            e.entities[this.key] = this
        }
        toString() {
            return `PNCounter{
	count:${this.count}
	meta:${JSON.stringify(this.meta)}
}`
        }
    }
    var Zh = {
        PNCounter: Ij
    };
    class $j {
        constructor(e) {
            this.pc = e.pc, this.re = e.re, this.opcode = e.opcode, this.result = e.result
        }
    }
    var dS = {
        Reply: $j
    };
    class Aj {
        constructor(e) {
            this.seq = e.seq, this.opcode = e.opcode, this.params = e.params
        }
    }
    var Rj = {
        Request: Aj
    };
    class Nj {
        constructor(e) {
            this.from = e.from, this.key = e.key, this.text = e.text, this.version = e.version, this.meta = e.meta || {}, e.acl && (this.acl = e.acl)
        }
        whenReceived(e) {
            e.entities[this.key] = this, e.emit("text " + this.key, this)
        }
        toString() {
            return `TextEntity{
	key:${this.key}
	text: ${this.text}
	meta:${JSON.stringify(this.meta)}
}`
        }
        toBlob() {
            return JSON.parse(this.text)
        }
    }
    class Pj {
        constructor(e) {
            this.message = e.message
        }
        toString() {
            return `TextEcho{message: ${this.message}
}`
        }
    }
    var Qh = {
        TextEntity: Nj,
        TextEcho: Pj
    };
    class Lj {
        constructor(e) {
            this.key = e.key, this.elements = e.elements, this.limit = e.limit, this.meta = e.meta || {}
        }
        whenReceived(e) {
            e.entities[this.key] = this
        }
        toString() {
            return `TextRing{
	elements: ${this.elements}
	meta:${JSON.stringify(this.meta)}
}`
        }
    }
    var ep = {
        TextRing: Lj
    };
    class kj {
        constructor(e) {
            this.key = e.key, this.artifactId = e.artifactId, this.categoryId = e.categoryId, this.rootId = e.rootId, this.meta = e.meta || {}
        }
        whenReceived(e) {
            e.entities[this.key] = this
        }
        toString() {
            return `ArtifactEntity${JSON.stringify(this)}
`
        }
    }
    var hS = {
        ArtifactEntity: kj
    };
    class xj {
        constructor(e) {
            this.key = e.key, this.colors = e.colors, this.lines = e.lines, this.live = e.live, this.maxPoints = e.maxPoints, this.size = e.size, this.weights = e.weights, this.meta = e.meta || {}, e.acl && (this.acl = e.acl)
        }
        whenReceived(e) {
            e.entities[this.key] = this
        }
        toString() {
            return `Doodle{
	key:${this.key}
	colors:${this.colors}
	lines:${this.lines}
	live:${this.live}
	maxPoints:${this.maxPoints}
	size:${this.size}
	weights:${this.weights}
	meta:${JSON.stringify(this.meta)}
}`
        }
    }
    class Dj {
        constructor(e) {
            this.key = e.key, this.line = e.line
        }
        whenReceived(e) {
            e.entities[this.key].lines.push(this.line)
        }
        toString() {
            return `DoodleLine{
	val:${this.line}
}`
        }
    }
    class Mj {
        constructor(e) {
            this.key = e.key, this.index = e.index
        }
        whenReceived(e) {
            e.entities[this.key].lines.splice(this.index, 1)
        }
        toString() {
            return `DoodleLineRemoved{
	index:${this.index}
}`
        }
    }
    var tp = {
        DoodleEntity: xj,
        DoodleLine: Dj,
        DoodleLineRemoved: Mj
    };
    class Fj {
        constructor(e) {
            this.key = e.key, this.size = e.size, this.version = e.version, this.from = e.from, this.meta = e.meta || {}, e.acl && (this.acl = e.acl)
        }
        whenRecived(e) {
            e.entities[this.key] = this
        }
        toString() {
            return `Stack{
	key:${this.key}
	size:${this.size}
	version:${this.version}
	from:${this.from}
	meta:${this.meta}
}`
        }
    }
    class Uj {
        constructor(e) {
            this.key = e.key, this.val = e.val
        }
        toString() {
            return `StackElement{
	key:${this.key}
	value: ${JSON.stringify(this.val)}
}`
        }
    }
    class Bj {
        constructor(e) {
            this.key = e.key, this.vals = e.vals
        }
        toString() {
            return `StackElements{
	key:${this.key}
	values: ${JSON.stringify(this.vals)}
}`
        }
    }
    var pS = {
        StackEntity: Fj,
        StackElement: Uj,
        StackElements: Bj
    };
    class jj {
        constructor(e) {
            this.key = e.key
        }
        whenReceived(e) {
            delete e.entities[this.key]
        }
        toString() {
            return `DropEntity{
	key:${this.key}
}`
        }
    }
    var gS = {
        DropEntity: jj
    };
    class Gj {
        constructor(e) {
            this.message = e.message
        }
        toString() {
            return `Echo{message: ${this.message}
}`
        }
    }
    var Wj = {
        Echo: Gj
    };
    class Kj {
        constructor(e) {
            this.key = e.key, this.from = e.from
        }
        whenReceived(e) {
            e.entities[this.key] && (e.entities[this.key].meta.locked = !0)
        }
        toString() {
            return `LockEntity{
	key:${this.key}
}`
        }
    }
    var Hj = {
        LockEntity: Kj
    };
    class Vj {
        constructor() {}
        toString() {
            return "OK"
        }
    }
    var mS = {
        OK: Vj
    };
    class Yj {
        constructor(e) {
            this.from = e.from, this.key = e.key, this.val = e.val, this.restrictions = e.restrictions, this.version = e.version, this.meta = e.meta || {}, e.acl && (this.acl = e.acl)
        }
        whenReceived(e) {
            e.entities[this.key] = this
        }
        toString() {
            return `NumberEntity{
	key:${this.key}
	val: ${this.val}
	restrictions: ${JSON.stringify(this.restrictions)}
	meta: ${JSON.stringify(this.meta)}
}`
        }
    }
    var vS = {
        NumberEntity: Yj
    };
    const {
        ArtifactEntity: qj
    } = hS, {
        ClientWelcome: zj,
        ClientConnected: Xj,
        ClientDisconnected: Jj,
        ClientKicked: Zj,
        ClientSend: Qj
    } = qh, {
        CountGroup: eG
    } = zh, {
        DoodleEntity: tG,
        DoodleLine: rG,
        DoodleLineRemoved: nG
    } = tp, {
        StackEntity: iG,
        StackElement: sG,
        StackElements: aG
    } = pS, {
        DropEntity: oG
    } = gS, {
        Echo: cG
    } = Wj, {
        LockEntity: lG
    } = Hj, {
        GCounter: uG
    } = Xh, {
        GetAudienceReply: fG,
        RoomExit: dG,
        RoomLock: hG
    } = Sl, {
        Notification: pG
    } = fS, {
        OK: gG
    } = mS, {
        NumberEntity: mG
    } = vS, {
        ObjectEcho: vG,
        ObjectEntity: yG
    } = Jh, {
        PNCounter: Ly
    } = Zh, {
        Reply: _G
    } = dS, {
        TextEcho: EG,
        TextEntity: bG
    } = Qh, {
        TextRing: TG
    } = ep, {
        createError: ky,
        ObservedError: SG
    } = Fa;

    function bd(t, e, r) {
        switch (t) {
            case "ok":
                return new gG;
            case "echo":
                return new cG({
                    message: e.message
                });
            case "lock":
                return new lG({
                    key: e.key,
                    from: e.from
                });
            case "error":
                return ky({
                    code: e.code,
                    message: e.msg
                });
            case "error/observed":
                return new SG({
                    to: e.to,
                    error: ky({
                        code: e.error.code,
                        message: e.error.msg
                    })
                });
            case "string":
                return e;
            case "text":
                return new bG({
                    from: e.from,
                    key: e.key,
                    text: e.val,
                    version: e.version,
                    meta: r,
                    acl: e.acl
                });
            case "text/echo":
                return new EG({
                    message: e.message
                });
            case "object":
                return new yG({
                    from: e.from,
                    key: e.key,
                    val: e.val,
                    meta: r,
                    acl: e.acl
                });
            case "object/echo":
                return new vG({
                    message: e.message
                });
            case "drop":
                return new oG({
                    key: e.key
                });
            case "artifact":
                return new qj({
                    key: e.key,
                    artifactId: e.artifactId,
                    categoryId: e.categoryId,
                    rootId: e.rootId,
                    meta: r
                });
            case "client/connected":
                return new Xj({
                    id: e.id,
                    userId: e.userId,
                    name: e.name,
                    role: e.role,
                    reconnect: e.reconnect
                });
            case "client/disconnected":
                return new Jj({
                    id: e.id,
                    role: e.role
                });
            case "client/kicked":
                return new Zj({
                    id: e.id,
                    banned: e.banned,
                    reason: e.reason
                });
            case "client/send":
                return new Qj({
                    to: e.to,
                    from: e.from,
                    body: e.body,
                    userId: e.userID
                });
            case "client/welcome": {
                let n = new zj({
                    id: e.id,
                    name: e.name,
                    secret: e.secret,
                    reconnect: e.reconnect,
                    here: e.here,
                    profile: e.profile,
                    replayEnd: e.replayEnd
                });
                if (e.entities) {
                    let s = {};
                    Object.entries(e.entities).forEach(([o, c]) => {
                        s[o] = bd(c[0], c[1], c[2])
                    }), n.entities = s
                }
                return n
            }
            case "doodle":
                return new tG({
                    key: e.key,
                    colors: e.val.colors,
                    lines: e.val.lines,
                    live: e.val.live,
                    maxPoints: e.val.maxPoints,
                    size: e.val.size,
                    weights: e.val.weights,
                    meta: r,
                    acl: e.acl
                });
            case "doodle/line":
                return new rG({
                    key: e.key,
                    line: e.val
                });
            case "doodle/line/removed":
                return new nG({
                    key: e.key,
                    index: e.index
                });
            case "stack":
                return new iG({
                    key: e.key,
                    size: e.size,
                    from: e.from,
                    version: e.version,
                    meta: e.meta,
                    acl: e.acl
                });
            case "stack/element":
                return new sG({
                    key: e.key,
                    val: e.val
                });
            case "stack/elements":
                return new aG({
                    key: e.key,
                    vals: e.vals
                });
            case "number":
                return new mG({
                    key: e.key,
                    val: e.val,
                    restrictions: e.restrictions,
                    from: e.from,
                    version: e.version,
                    meta: r,
                    acl: e.acl
                });
            case "room/exit":
                return new dG({
                    cause: e.cause
                });
            case "room/lock":
                return new hG;
            case "room/get-audience":
                return new fG({
                    connections: e.connections
                });
            case "audience":
                return new Ly({
                    key: t,
                    count: e[1]
                });
            case "audience/count-group":
                return new eG({
                    key: e.key,
                    choices: e.choices,
                    meta: r
                });
            case "audience/text-ring":
                return new TG({
                    key: e.key,
                    elements: e.elements,
                    meta: r
                });
            case "audience/g-counter":
                return new uG({
                    key: e.key,
                    count: e.count,
                    meta: r
                });
            case "audience/pn-counter":
                return new Ly({
                    key: e.key,
                    count: e.count,
                    meta: r
                });
            default:
                return console.error(`failed to parse result of type ${t}: ${JSON.stringify(e,null,2)}`), e
        }
    }

    function OG(t) {
        let e = JSON.parse(t.data),
            r = e.opcode || e.type;
        return e.re ? new _G({
            pc: e.pc,
            re: e.re,
            opcode: r,
            result: bd(r, e.result)
        }) : new pG({
            pc: e.pc,
            opcode: r,
            result: bd(r, e.result)
        })
    }
    var wG = {
        parseResponseMessage: OG
    };
    const xy = oj,
        CG = wT,
        IG = Yh.exports,
        {
            CallError: $G
        } = Fa,
        {
            ClientWelcome: AG
        } = qh,
        {
            CountGroup: RG
        } = zh,
        {
            GCounter: NG
        } = Xh,
        {
            Notification: Dy
        } = fS,
        {
            ObjectEntity: bf
        } = Jh,
        {
            PNCounter: PG
        } = Zh,
        {
            Reply: LG
        } = dS,
        {
            Request: kG
        } = Rj,
        {
            TextEntity: Tf
        } = Qh,
        {
            TextRing: xG
        } = ep,
        {
            parseResponseMessage: DG
        } = wG,
        {
            DoodleEntity: MG
        } = tp,
        {
            StackEntity: FG
        } = pS,
        UG = 1e3 + Math.floor(Math.random() * 500),
        My = 13e3;
    class BG extends IG {
        constructor(e) {
            if (super(), this.debug = e.debug || !1, !e.host) throw new Error("unable to create ecast WSClient: no host provided");
            if (this.host = e.host, !e.code) throw new Error("unable to create ecast WSClient: no room code provided");
            if (this.code = e.code, e.scheme ? this.scheme = e.scheme : this.scheme = "wss", e.secret && e.id) this.id = e.id, this.secret = e.secret;
            else {
                switch (e.role) {
                    case "player":
                        if (!e.name) throw new Error("unable to create ecast WSClient: no name provided");
                        break;
                    case "host":
                        if (!e.token) throw new Error("unable to create ecast WSClient: tried to connect with host role but without host token");
                        this.token = e.token;
                        break;
                    case "moderator":
                        if (!e.password) throw new Error("unable to create ecast WSClient: tried to connect with moderator role but without password");
                        break
                }
                e.password && (this.password = e.password), e.twitchToken && (this.twitchToken = e.twitchToken)
            }
            this.name = e.name, this.role = e.role, this.deviceId = e.deviceId, this.userId = e.userId, this.conn = null, this.seq = 0, this.pending = {}, this.entities = {}, e.role == "host" && (this.replaySince = e.replaySince || 0, this.syncEntities = e.syncEntities || !1)
        }
        connect() {
            const e = {
                id: this.id,
                role: this.role,
                name: this.name,
                format: "json",
                "user-id": this.userId,
                password: this.password
            };
            this.deviceId && (e["device-id"] = this.deviceId), this.twitchToken && (e["twitch-token"] = this.twitchToken), this.secret && (e.secret = this.secret), this.role === "host" && (e["host-token"] = this.token, this.replaySince > 0 && (e["replay-since"] = this.replaySince), this.syncEntities && (e["sync-entities"] = this.syncEntities));
            const r = CG.stringify(e),
                n = this.role === "audience" || this.id > 1e7 ? `${this.scheme}://${this.host}/api/v2/audience/${this.code}/play?${r}` : `${this.scheme}://${this.host}/api/v2/rooms/${this.code}/play?${r}`;
            return new Promise((s, o) => {
                let c = !1,
                    u = !1,
                    f = m => {
                        s(m), c = !0
                    },
                    h = m => {
                        o(m), c = !0
                    };
                this.conn = new xy(n, "ecast-v0"), this.conn.onmessage = m => {
                    this.debugLog(`recv <- ${JSON.stringify(JSON.parse(m.data),null,2)}`);
                    const _ = DG(m);
                    if (_ instanceof LG) this.onReply(_);
                    else if (_ instanceof Dy) {
                        if (_.result instanceof AG) u = !0, this.id = _.result.id, this.deviceId = _.result.deviceId, this.entities = _.result.entities, this.secret = _.result.secret, _.result.name && (this.name = _.result.name), f(_.result);
                        else if (!c) {
                            h(_.result);
                            return
                        }
                        this.onNotification(_)
                    } else console.error(`failed to parse response messsage: ${_}`)
                }, this.conn.onerror = m => {
                    c ? this.emit("socketError", m) : h(m)
                }, this.conn.onclose = m => {
                    this.debugLog("onclose", m.code), u && m.code === 1006 ? this.reconnect() : this.emit("socketClose", m)
                }, this.conn.onopen = m => {
                    this.emit("socketOpen", m)
                }
            })
        }
        sleep(e) {
            return new Promise(r => setTimeout(r, e))
        }
        debugLog(...e) {
            !this.debug || console.log(`%c[WSClient:${this.name}]`, "background-color:blue;color:white;", ...e)
        }
        async reconnect() {
            this.disconnect(), this.debugLog("Attempting to reconnect");
            let e = 1,
                r = UG;
            for (;;) try {
                this.emit("connection", {
                    status: "connecting",
                    attempt: e
                }), await this.connect(), this.debugLog("reconnected"), this.emit("connection", {
                    status: "connected"
                });
                return
            } catch (n) {
                if (this.debugLog("reconnect error", n), n.code === 1005 || n.code === 1e3) {
                    this.debugLog("unable to reconnect!", n), this.emit("socketClose", n);
                    return
                }
                if (r >= My) {
                    this.debugLog("reconnect failed!", n), this.emit("socketClose", n);
                    return
                }
                e += 1, this.debugLog("waiting", r), this.emit("connection", {
                    status: "waiting",
                    attempt: e
                }), await this.sleep(r), r = Math.min(My, r * 2)
            }
        }
        disconnect() {
            !this.conn || (this.conn.close(), this.conn.onmessage = null, this.conn.onerror = null, this.conn.onopen = null, this.conn.onclose = null, this.conn = null)
        }
        onReply(e) {
            const r = e.re,
                n = this.pending[r];
            if (!n) {
                const s = new Dy(e);
                s.re = r, this.emit("notification", s);
                return
            }
            delete this.pending[r], e.result instanceof $G ? n.reject(e.result) : n.resolve(e.result)
        }
        onNotification(e) {
            typeof e.result.whenReceived == "function" && e.result.whenReceived(this), this.emit("notification", e), this.emit(e.opcode, e.result)
        }
        send(e, r = {}) {
            if (!this.conn) throw new Error("No connection available");
            if (this.conn.readyState !== xy.OPEN) throw new Error(`Socket not ready to send, readyState is ${this.conn.readyState}`);
            const n = ++this.seq,
                s = new kG({
                    seq: n,
                    opcode: e,
                    params: r
                }),
                o = new Promise((u, f) => {
                    this.pending[n] = {
                        resolve: u,
                        reject: f,
                        request: s
                    }
                }),
                c = JSON.stringify(s);
            return this.debugLog(`send -> ${c}`), this.conn.send(c), o
        }
        lockRoom() {
            return this.send("room/lock")
        }
        startAudience() {
            return this.send("room/start-audience")
        }
        getAudience() {
            return this.send("room/get-audience")
        }
        mail(e, r) {
            return this.send("client/send", {
                from: this.id,
                to: e,
                body: r
            })
        }
        kick(e, r = !1, n) {
            return this.send("client/kick", {
                id: e,
                ban: r,
                reason: n
            })
        }
        async drop(e) {
            const r = await this.send("drop", {
                key: e
            });
            return delete this.entities[e], r
        }
        echo(e) {
            return this.send("echo", {
                message: e
            })
        }
        async lock(e) {
            const r = await this.send("lock", {
                key: e
            });
            return this.entities[e].meta.locked = !0, r
        }
        async getNumber(e) {
            const r = await this.send("number/get", {
                key: e
            });
            return this.entities[e].val = r.val, this.entities[e].restrictions = r.restrictions, r
        }
        async updateNumber(e, r) {
            const n = await this.send("number/update", {
                key: e,
                val: r
            });
            return this.entities[e].val = r, n
        }
        async createObject(e, r, n) {
            const s = {
                key: e,
                val: r
            };
            n && (s.acl = n);
            const o = await this.send("object/create", s);
            return this.entities[e] = new bf({
                key: e,
                val: r,
                meta: {
                    locked: !1
                }
            }), o
        }
        echoObject(e) {
            return this.send("object/echo", {
                message: e
            })
        }
        async setObject(e, r, n) {
            const s = {
                key: e,
                val: r
            };
            n && (s.acl = n);
            const o = await this.send("object/set", s);
            return this.entities[e] = new bf({
                key: e,
                val: r,
                meta: {
                    locked: !1
                }
            }), o
        }
        async updateObject(e, r) {
            const n = await this.send("object/update", {
                key: e,
                val: r
            });
            return this.entities[e] = new bf({
                key: e,
                val: r,
                meta: {
                    locked: !1
                }
            }), n
        }
        echoText(e) {
            return this.send("text/echo", {
                message: e
            })
        }
        getText(e) {
            return this.send("text/get", {
                key: e
            })
        }
        async createText(e, r, n) {
            const s = {
                    key: e,
                    val: r
                },
                {
                    acl: o,
                    accept: c,
                    reject: u
                } = n;
            o && (s.acl = o), c && (s.accept = c), u && (s.reject = u);
            const f = await this.send("text/create", s);
            return this.entities[e] = new Tf({
                key: e,
                text: r,
                meta: {
                    locked: !1
                }
            }), f
        }
        async setText(e, r, n) {
            const s = {
                key: e,
                val: r
            };
            n && (s.acl = n);
            const o = await this.send("text/set", s);
            return this.entities[e] = new Tf({
                key: e,
                text: r,
                meta: {
                    locked: !1
                }
            }), o
        }
        async updateText(e, r) {
            const n = await this.send("text/update", {
                key: e,
                val: r
            });
            return this.entities[e] = new Tf({
                key: e,
                text: r,
                meta: {
                    locked: !1
                }
            }), n
        }
        async createDoodle(e, r) {
            let n = {
                key: e
            };
            const {
                acl: s,
                colors: o,
                live: c,
                maxPoints: u,
                size: f,
                weights: h
            } = r;
            s && (n.acl = s), o && (n.colors = o), n.live = c, u != null && (n.maxPoints = u), f && (n.size = f), h && (n.weights = h);
            const m = await this.send("doodle/create", n);
            return this.entities[e] = new MG({
                key: e,
                colors: o,
                lines: [],
                live: c,
                locked: !1,
                maxPoints: n.maxPoints || 0,
                size: f,
                weights: h,
                meta: {
                    locked: !1
                }
            }), m
        }
        async getDoodle(e) {
            return this.send("doodle/get", {
                key: e
            })
        }
        async strokeDoodle(e, r) {
            const {
                layer: n,
                color: s,
                weight: o,
                points: c
            } = r, u = await this.send("doodle/stroke", {
                key: e,
                layer: n,
                color: s,
                weight: o,
                points: c
            }), f = {
                layer: n,
                color: s,
                weight: o,
                points: c
            };
            return this.entities[e].lines.push(f), u
        }
        async undoDoodle(e) {
            const r = await this.send("doodle/undo", {
                key: e
            });
            return this.entities[e].lines.pop(), r
        }
        async createStack(e, r) {
            const n = {
                key: e
            };
            r && (n.acl = r);
            const s = await this.send("stack/create", n);
            return this.entities[e] = new FG({
                key: e,
                size: 0,
                meta: {
                    locked: !1
                }
            }), s
        }
        async pushStack(e, r) {
            return await this.send("stack/push", {
                key: e,
                val: r
            })
        }
        async bulkPushStack(e, r) {
            return await this.send("stack/bulkpush", {
                key: e,
                vals: r
            })
        }
        async peekStack(e, r) {
            return await this.send("stack/peek", {
                key: e,
                size: r
            })
        }
        async popStack(e) {
            return await this.send("stack/pop", {
                key: e
            })
        }
        async createCountGroup(e, r) {
            const n = await this.send("audience/count-group/create", {
                name: e,
                options: r
            });
            return this.entities[e] = new RG({
                key: e,
                choices: r,
                meta: {
                    locked: !1
                }
            }), n
        }
        incrementCountGroupCounter(e, r, n = 1) {
            return this.send("audience/count-group/increment", {
                name: e,
                vote: r,
                times: n
            })
        }
        getCountGroup(e) {
            return this.send("audience/count-group/get", {
                name: e
            })
        }
        async createGCounter(e, r) {
            const n = await this.send("audience/g-counter/create", {
                key: e,
                count: r
            });
            return this.entities[e] = new NG({
                key: e,
                count: r,
                meta: {
                    locked: !1
                }
            }), n
        }
        incrementGCounter(e, r) {
            return this.send("audience/g-counter/increment", {
                key: e,
                times: r
            })
        }
        getGCounter(e) {
            return this.send("audience/g-counter/get", {
                key: e
            })
        }
        async createPNCounter(e, r) {
            const n = await this.send("audience/pn-counter/create", {
                key: e,
                count: r
            });
            return this.entities[e] = new PG({
                key: e,
                count: r,
                meta: {
                    locked: !1
                }
            }), n
        }
        incrementPNCounter(e, r) {
            return this.send("audience/pn-counter/increment", {
                key: e,
                times: r
            })
        }
        decrementPNCounter(e, r) {
            return this.send("audience/pn-counter/decrement", {
                key: e,
                times: r
            })
        }
        getPNCounter(e) {
            return this.send("audience/pn-counter/get", {
                key: e
            })
        }
        async createTextRing(e, r) {
            const n = {
                    key: e
                },
                {
                    limit: s,
                    accept: o,
                    reject: c
                } = r;
            s && (n.limit = s), o && (n.accept = o), c && (n.reject = c);
            const u = await this.send("audience/text-ring/create", n);
            return this.entities[e] = new xG({
                key: e,
                elements: [],
                limit: s,
                meta: {
                    locked: !1
                }
            }), u
        }
        getTextRing(e) {
            return this.send("audience/text-ring/get", {
                name: e
            })
        }
        pushTextRing(e, r) {
            return this.send("audience/text-ring/push", {
                name: e,
                text: r
            })
        }
    }
    var jG = {
        WSClient: BG
    };
    const {
        APIClient: GG
    } = aj, {
        WSClient: WG
    } = jG, {
        CreateRoomReply: KG,
        GetRoomReply: HG
    } = Sl, {
        ClientWelcome: VG,
        ClientDisconnected: YG
    } = qh, {
        ArtifactEntity: qG
    } = hS, {
        GCounter: zG
    } = Xh, {
        NumberEntity: XG
    } = vS, {
        TextEntity: JG
    } = Qh, {
        DoodleEntity: ZG
    } = tp, {
        ObjectEntity: QG
    } = Jh, {
        CountGroup: eW
    } = zh, {
        DropEntity: tW
    } = gS, {
        OK: rW
    } = mS, {
        RoomExit: nW
    } = Sl, {
        TextRing: iW
    } = ep, {
        PNCounter: sW
    } = Zh;
    var br = {
        APIClient: GG,
        WSClient: WG,
        ClientWelcome: VG,
        CreateRoomReply: KG,
        DropEntity: tW,
        GetRoomReply: HG,
        ClientDisconnected: YG,
        RoomExit: nW,
        OK: rW,
        ArtifactEntity: qG,
        DoodleEntity: ZG,
        NumberEntity: XG,
        CountGroup: eW,
        GCounter: zG,
        ObjectEntity: QG,
        PNCounter: sW,
        TextEntity: JG,
        TextRing: iW
    };
    const aW = [{
            name: "Prototype",
            tag: "prototype",
            wrapper: "vue",
            isPublic: !0,
            directory: "internal/prototype"
        }, {
            name: "EcastTestClient",
            tag: "ecast-test-client",
            wrapper: "marionette",
            isPublic: !0,
            directory: "internal/ecast-test-client"
        }, {
            name: "Quiplash 2 InterLASHional",
            tag: "quiplash2-international",
            wrapper: "marionette",
            isPublic: !0,
            directory: "standalone/quiplash2-international",
            categoryId: "quiplash2-internationalGame"
        }, {
            name: "Guesspionage Crowdplay",
            tag: "guesspionage-crowdplay",
            wrapper: "marionette",
            isPublic: !0,
            directory: "standalone/guesspionage-crowdplay"
        }, {
            name: "Drawful 2",
            tag: "drawful2",
            wrapper: "marionette",
            isPublic: !0,
            directory: "standalone/drawful2",
            categoryId: "DrawfulGame",
            shopItems: ["shirts"]
        }, {
            name: "Drawful 2",
            tag: "drawful2international",
            wrapper: "marionette",
            isPublic: !0,
            directory: "standalone/drawful2-international",
            features: ["moderation"]
        }, {
            name: "Acquisitions, Inc.",
            tag: "acquisitions-inc",
            wrapper: "marionette",
            isPublic: !0,
            directory: "standalone/acquisitions-inc"
        }, {
            name: "You Don't Know Jack 2015",
            tag: "ydkj2015",
            wrapper: "marionette",
            isPublic: !0,
            directory: "pp1/ydkj2015"
        }, {
            name: "Drawful",
            tag: "drawful",
            wrapper: "marionette",
            isPublic: !0,
            directory: "pp1/drawful"
        }, {
            name: "Word Spud",
            tag: "wordspud",
            wrapper: "marionette",
            isPublic: !0,
            directory: "pp1/wordspud"
        }, {
            name: "Lie Swatter",
            tag: "lieswatter",
            wrapper: "marionette",
            isPublic: !0,
            directory: "pp1/lieswatter"
        }, {
            name: "Fibbage",
            tag: "fibbage",
            wrapper: "marionette",
            isPublic: !0,
            directory: "pp1/fibbage"
        }, {
            name: "Fibbage 2",
            tag: "fibbage2",
            wrapper: "marionette",
            isPublic: !0,
            directory: "pp2/fibbage2"
        }, {
            name: "Earwax",
            tag: "earwax",
            wrapper: "marionette",
            isPublic: !0,
            directory: "pp2/earwax"
        }, {
            name: "Bidiots",
            tag: "auction",
            wrapper: "marionette",
            isPublic: !0,
            directory: "pp2/auction"
        }, {
            name: "Bomb Corp",
            tag: "bombintern",
            wrapper: "marionette",
            isPublic: !0,
            directory: "pp2/bombintern"
        }, {
            name: "Quiplash",
            tag: "quiplash",
            wrapper: "marionette",
            isPublic: !0,
            directory: "pp2/quiplash"
        }, {
            name: "Fakin' It",
            tag: "fakinit",
            wrapper: "marionette",
            isPublic: !0,
            directory: "pp3/fakinit"
        }, {
            name: "Tee K.O.",
            tag: "awshirt",
            wrapper: "marionette",
            isPublic: !0,
            directory: "pp3/awshirt",
            categoryId: "TeeKOGame",
            shopItems: ["shirts"]
        }, {
            name: "Quiplash 2",
            tag: "quiplash2",
            wrapper: "marionette",
            isPublic: !0,
            directory: "pp3/quiplash2",
            categoryId: "Quiplash2Game"
        }, {
            name: "Trivia Murder Party",
            tag: "triviadeath",
            wrapper: "marionette",
            isPublic: !0,
            directory: "pp3/triviadeath",
            categoryId: "TriviaDeathResults"
        }, {
            name: "Guesspionage",
            tag: "pollposition",
            wrapper: "marionette",
            isPublic: !0,
            directory: "pp3/pollposition"
        }, {
            name: "Fibbage 3",
            tag: "fibbage3",
            wrapper: "marionette",
            isPublic: !0,
            directory: "pp4/fibbage3"
        }, {
            name: "Survive the Internet",
            tag: "survivetheinternet",
            wrapper: "marionette",
            isPublic: !0,
            directory: "pp4/survivetheinternet",
            categoryId: "STIGame"
        }, {
            name: "Monster Seeking Monster",
            tag: "monstermingle",
            wrapper: "marionette",
            isPublic: !0,
            directory: "pp4/monstermingle",
            categoryId: "MonsterMingleGame"
        }, {
            name: "Bracketeering",
            tag: "bracketeering",
            wrapper: "marionette",
            isPublic: !0,
            directory: "pp4/bracketeering",
            categoryId: "BRKGame"
        }, {
            name: "Civic Doodle",
            tag: "overdrawn",
            wrapper: "marionette",
            isPublic: !0,
            directory: "pp4/overdrawn",
            categoryId: "OverdrawnGame",
            shopItems: ["shirts"]
        }, {
            name: "You Don't Know Jack: Full Stream",
            tag: "ydkj2018",
            wrapper: "marionette",
            isPublic: !0,
            directory: "pp5/ydkj2018",
            categoryId: "YDKJ2018Game"
        }, {
            name: "Split the Room",
            tag: "splittheroom",
            wrapper: "marionette",
            isPublic: !0,
            directory: "pp5/splittheroom",
            categoryId: "SplitTheRoomGame"
        }, {
            name: "Mad Verse City",
            tag: "rapbattle",
            wrapper: "marionette",
            isPublic: !0,
            directory: "pp5/rapbattle",
            categoryId: "RapBattleGame"
        }, {
            name: "Zeeple Dome",
            tag: "slingshoot",
            wrapper: "marionette",
            isPublic: !0,
            directory: "pp5/slingshoot",
            categoryId: "SlingShootGame"
        }, {
            name: "Patently Stupid",
            tag: "patentlystupid",
            wrapper: "marionette",
            isPublic: !0,
            directory: "pp5/patentlystupid",
            categoryId: "PatentlyStupidGame",
            shopItems: ["mugs"]
        }, {
            name: "Trivia Murder Party 2",
            tag: "triviadeath2",
            wrapper: "marionette",
            isPublic: !0,
            directory: "pp6/triviadeath2",
            categoryId: "TriviaDeath2Game"
        }, {
            name: "Role Models",
            tag: "rolemodels",
            wrapper: "marionette",
            isPublic: !0,
            features: ["camera"],
            directory: "pp6/rolemodels",
            categoryId: "RoleModelsGame",
            shopItems: ["shirts"]
        }, {
            name: "Joke Boat",
            tag: "jokeboat",
            wrapper: "marionette",
            isPublic: !0,
            directory: "pp6/jokeboat",
            categoryId: "JokeboatGame"
        }, {
            name: "Dictionarium",
            tag: "ridictionary",
            wrapper: "marionette",
            isPublic: !0,
            directory: "pp6/ridictionary",
            categoryId: "RidictionaryGame"
        }, {
            name: "Push the Button",
            tag: "pushthebutton",
            wrapper: "marionette",
            isPublic: !0,
            directory: "pp6/pushthebutton",
            categoryId: "PushTheButtonGame"
        }, {
            name: "Talking Points",
            tag: "jackbox-talks",
            wrapper: "marionette",
            isPublic: !0,
            directory: "pp7/jackboxtalks",
            features: ["camera", "moderation"],
            categoryId: "JackboxTalksGame"
        }, {
            name: "Quiplash 3",
            tag: "quiplash3",
            wrapper: "marionette",
            isPublic: !0,
            directory: "pp7/quiplash3",
            features: ["moderation"],
            categoryId: "quiplash3Game"
        }, {
            name: "The Devils and the Details",
            tag: "everyday",
            wrapper: "marionette",
            isPublic: !0,
            directory: "pp7/everyday",
            categoryId: "EverydayGame",
            shopItems: ["mugs"]
        }, {
            name: "Champ'd Up",
            tag: "worldchamps",
            wrapper: "marionette",
            isPublic: !0,
            directory: "pp7/worldchampions",
            features: ["moderation"],
            categoryId: "WorldChampionsGame",
            shopItems: ["cards"]
        }, {
            name: "Blather 'Round",
            tag: "blanky-blank",
            wrapper: "marionette",
            isPublic: !0,
            directory: "pp7/blanky-blank",
            categoryId: "BlankyBlankGame"
        }, {
            name: "Job Job",
            tag: "apply-yourself",
            wrapper: "vue",
            isPublic: !0,
            directory: "pp8/apply-yourself",
            categoryId: "JobGameGame",
            features: ["moderation", "previews"]
        }, {
            name: "Drawful Animate",
            tag: "drawful-animate",
            wrapper: "vue",
            isPublic: !0,
            directory: "pp8/drawful-animate",
            categoryId: "DrawfulAnimateGame",
            features: ["moderation"]
        }, {
            name: "The Wheel of Enormous Proportions",
            tag: "the-wheel",
            wrapper: "vue",
            isPublic: !0,
            directory: "pp8/the-wheel",
            categoryId: "TheWheelGame"
        }, {
            name: "The Poll Mine",
            tag: "survey-bomb",
            wrapper: "vue",
            isPublic: !0,
            directory: "pp8/survey-bomb",
            categoryId: "SurveyBombGame"
        }, {
            name: "Weapons Drawn",
            tag: "murder-detectives",
            wrapper: "vue",
            isPublic: !0,
            directory: "pp8/murder-detectives",
            categoryId: "MurderDetectivesGame",
            features: ["moderation"]
        }, {
            name: "Quiplash 3",
            tag: "quiplash3-tjsp",
            wrapper: "vue",
            isPublic: !0,
            directory: "tjsp/quiplash3",
            features: ["moderation"],
            categoryId: "quiplash3Game"
        }, {
            name: "Tee K.O.",
            tag: "awshirt-tjsp",
            wrapper: "vue",
            isPublic: !0,
            directory: "tjsp/awshirt",
            features: ["moderation"],
            shopItems: ["shirts"],
            categoryId: "TeeKOGame"
        }, {
            name: "Trivia Murder Party 2",
            tag: "triviadeath2-tjsp",
            wrapper: "vue",
            isPublic: !0,
            directory: "tjsp/triviadeath2",
            categoryId: "TriviaMurderParty2Game"
        }, {
            name: "Fibbage 4",
            tag: "fourbage",
            wrapper: "vue",
            isPublic: !0,
            directory: "pp9/fourbage",
            features: ["moderation", "kicking"]
        }, {
            name: "Roomerang",
            tag: "htmf",
            wrapper: "vue",
            isPublic: !0,
            directory: "pp9/htmf",
            features: ["moderation", "kicking"]
        }, {
            name: "Junktopia",
            tag: "antique-freak",
            wrapper: "vue",
            isPublic: !0,
            directory: "pp9/antique-freak",
            features: ["moderation", "kicking"],
            categoryId: "AntiqueGameGame"
        }, {
            name: "Nonsensory",
            tag: "range-game",
            wrapper: "vue",
            isPublic: !0,
            directory: "pp9/range-game",
            features: ["moderation", "kicking"],
            categoryId: "RangeGameGame"
        }, {
            name: "Quixort",
            tag: "lineup",
            wrapper: "vue",
            isPublic: !0,
            directory: "pp9/lineup",
            features: ["kicking", "previews"],
            categoryId: "LineupGame"
        }],
        Td = t => aW.find(e => e.tag === t || e.categoryId === t);

    function Sd(...t) {
        console.log(...t)
    }
    class oW {
        constructor(e, r) {
            ge(this, "client");
            ge(this, "room");
            ge(this, "items", []);
            ge(this, "autoMarkWindow", 150);
            ge(this, "autoMarkTimeout");
            ge(this, "autoMarkerCount", 0);
            ge(this, "automarkIgnoredKeys", []);
            ge(this, "automarkPendingLabel");
            window.tv.debug = this.expose(), this.client = e, this.room = r, Object.keys(this.client.entities).forEach(n => {
                this.pushEntity(this.client.entities[n])
            }), this.items.length && this.setMarker("welcome"), e.on("artifact", n => this.pushEntity(n)), e.on("doodle", n => this.pushEntity(n)), e.on("drop", n => this.pushEntity(n)), e.on("number", n => this.pushEntity(n)), e.on("object", n => this.pushEntity(n)), e.on("text", n => this.pushEntity(n)), this.hijackConsole(), this.hijackSend()
        }
        get markerCount() {
            return this.items.reduce((e, r) => "marker" in r ? e + 1 : e, 0)
        }
        reset() {
            this.items = []
        }
        setAutomarkIgnoredKeys(e) {
            this.automarkIgnoredKeys = e
        }
        hijackConsole() {
            const e = console.error.bind(console);
            console.error = (...r) => {
                this.pushError(r), e.apply(console, r)
            }
        }
        hijackSend() {
            !window.Proxy || (this.client.send = new Proxy(this.client.send, {
                apply: (e, r, n) => (this.pushSend(n), e.apply(r, n))
            }))
        }
        pushEntity(e) {
            Sd("[Debug] pushEntity", e), e instanceof br.ArtifactEntity ? this.items.push({
                type: "artifact",
                ...e
            }) : e instanceof br.DoodleEntity ? this.items.push({
                type: "doodle",
                ...e
            }) : e instanceof br.DropEntity ? this.items.push({
                key: e.key,
                type: "drop"
            }) : e instanceof br.NumberEntity ? this.items.push({
                key: e.key,
                type: "number",
                value: e.val,
                meta: e.meta,
                restrictions: e.restrictions
            }) : e instanceof br.ObjectEntity ? (e.val.kind && (this.automarkPendingLabel = e.val.kind), this.items.push({
                key: e.key,
                type: "object",
                value: e.val,
                meta: e.meta
            })) : e instanceof br.TextEntity && this.items.push({
                key: e.key,
                type: "text",
                value: e.text,
                meta: e.meta
            }), !this.automarkIgnoredKeys.includes(e.key) && this.startAutoMarkTimeout()
        }
        pushError(...e) {
            this.items.push({
                error: e
            })
        }
        pushSend(e) {
            this.items.push({
                opcode: e[0],
                arguments: e[1]
            })
        }
        setMarker(e) {
            const r = this.items.filter(s => s.marker === e).length,
                n = r ? `label-${r}` : e;
            this.items.push({
                marker: n
            }), this.clearAutoMarkTimeout()
        }
        setAutoMarker() {
            var r;
            const e = (r = this.automarkPendingLabel) != null ? r : "marker";
            this.items.push({
                marker: `${this.autoMarkerCount}-${e}`
            }), this.autoMarkerCount += 1, delete this.automarkPendingLabel, this.clearAutoMarkTimeout()
        }
        startAutoMarkTimeout() {
            this.clearAutoMarkTimeout(), this.autoMarkTimeout = window.setTimeout(() => {
                this.setAutoMarker()
            }, this.autoMarkWindow)
        }
        clearAutoMarkTimeout() {
            !this.autoMarkTimeout || (window.clearTimeout(this.autoMarkTimeout), delete this.autoMarkTimeout)
        }
        async send(e) {
            if (!this.client) return;
            const r = await this.sendToEcast();
            r && await this.sendToSlack(r, e)
        }
        getSendData() {
            return {
                appTag: this.room.appTag,
                state: {
                    version: 3,
                    room: {
                        code: this.room.code,
                        appTag: this.room.appTag
                    },
                    client: {
                        id: this.client.id,
                        name: this.client.name,
                        role: this.client.role
                    },
                    items: this.items
                }
            }
        }
        async sendToEcast() {
            const e = this.getSendData();
            try {
                const n = await (await fetch("https://ecast.jackboxgames.com/api/v2/controller/state", {
                    method: "POST",
                    body: JSON.stringify(e)
                })).json();
                if (!n.body || !n.body.url) return console.warn(n), null;
                const s = n.body.url.split("/"),
                    o = s[s.length - 1].replace(".json", ""),
                    c = s[s.length - 2];
                return {
                    json: n.body.url,
                    dev: `https://dev.jackbox.tv/debug/cloud/${c}/${o}/`,
                    local: `http://localhost:9090/debug/cloud/${c}/${o}/`
                }
            } catch (r) {
                return console.error("[Debug] sendToEcast", r), null
            }
        }
        async sendToSlack(e, r) {
            var f;
            if (!this.room || !this.client) return;
            const n = Td(this.room.appTag),
                s = this.items.length - this.markerCount,
                o = `${this.markerCount} ${this.markerCount===1?"marker":"markers"}`,
                c = `${s} ${s===1?"entity":"entities"}`,
                u = [{
                    type: "mrkdwn",
                    text: `${this.client.role}:${this.client.id}`
                }, {
                    type: "mrkdwn",
                    text: `*Version:* ${window.tv.manifest.loader.version}`
                }, {
                    type: "mrkdwn",
                    text: `*Domain:* ${window.location.hostname}`
                }];
            try {
                const h = "https://hooks.slack.com/services/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",
                    _ = `*${(f=n==null?void 0:n.name)!=null?f:this.room.appTag} :${this.room.appTag}:* (${o}, ${c}) 

 From: ${this.client.name},
${r}`,
                    b = [{
                        type: "section",
                        text: {
                            type: "mrkdwn",
                            text: _
                        }
                    }, {
                        type: "context",
                        elements: u
                    }, {
                        type: "actions",
                        elements: [{
                            type: "button",
                            action_id: "actionId-0",
                            url: e.json,
                            text: {
                                type: "plain_text",
                                text: "JSON",
                                emoji: !0
                            }
                        }, {
                            type: "button",
                            action_id: "actionId-3",
                            url: e.local,
                            text: {
                                type: "plain_text",
                                text: "localhost:9090",
                                emoji: !0
                            }
                        }, {
                            type: "button",
                            action_id: "actionId-1",
                            url: e.dev,
                            text: {
                                type: "plain_text",
                                text: "dev.jackbox.tv",
                                emoji: !0
                            }
                        }]
                    }],
                    C = {
                        unfurl_links: !1,
                        blocks: b
                    };
                if (this.room) {
                    C.icon_emoji = this.room.appTag;
                    const B = Td(this.room.appTag);
                    C.username = `DebugRecorder ${B?B.name:this.room.appTag}`
                }
                const M = await (await fetch(h, {
                    method: "POST",
                    body: JSON.stringify(C)
                })).text();
                Sd("[Debug] sendToSlack", M)
            } catch (h) {
                console.error("[Debug] sendToSlack", h)
            }
        }
        download(e) {
            var c, u;
            const r = e != null ? e : `${(u=(c=this.room)==null?void 0:c.appTag)!=null?u:"unknown"}-debug`,
                n = this.getSendData().state,
                s = JSON.stringify(n, null, 4),
                o = document.createElement("a");
            o.setAttribute("href", `data:text/json;charset=utf-8,${encodeURIComponent(s)}`), o.setAttribute("download", `${r}.json`), o.style.display = "none", document.body.appendChild(o), o.click(), document.body.removeChild(o)
        }
        open() {
            var s;
            const e = this.getSendData().state,
                r = JSON.stringify(e, null, 4),
                n = window.open();
            n.document.write(`
            <iframe src="data:text/json;charset=utf-8,${encodeURIComponent(r)}" frameborder="0" style="border:0;
                top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen>
            </iframe>
        `), n.document.title = `${(s=this.room)==null?void 0:s.appTag} debug JSON`, n.document.close(), n.focus()
        }
        expose() {
            return {
                print: () => this.items,
                reset: () => this.reset(),
                setMarker: e => this.setMarker(e),
                download: e => this.download(e),
                open: () => this.open(),
                send: e => void this.send(e)
            }
        }
    }

    function cW(t) {
        throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
    }
    var Fy = {
        exports: {}
    };
    (function(t, e) {
        (function(r, n) {
            n(e)
        })(Pt, function(r) {
            var n = typeof window < "u" ? window : typeof Pt < "u" ? Pt : typeof self < "u" ? self : {},
                s = function(T, N) {
                    if (N = N.split(":")[0], T = +T, !T) return !1;
                    switch (N) {
                        case "http":
                        case "ws":
                            return T !== 80;
                        case "https":
                        case "wss":
                            return T !== 443;
                        case "ftp":
                            return T !== 21;
                        case "gopher":
                            return T !== 70;
                        case "file":
                            return !1
                    }
                    return T !== 0
                },
                o = Object.prototype.hasOwnProperty,
                c;

            function u(w) {
                try {
                    return decodeURIComponent(w.replace(/\+/g, " "))
                } catch {
                    return null
                }
            }

            function f(w) {
                try {
                    return encodeURIComponent(w)
                } catch {
                    return null
                }
            }

            function h(w) {
                for (var T = /([^=?#&]+)=?([^&]*)/g, N = {}, S; S = T.exec(w);) {
                    var P = u(S[1]),
                        X = u(S[2]);
                    P === null || X === null || P in N || (N[P] = X)
                }
                return N
            }

            function m(w, T) {
                T = T || "";
                var N = [],
                    S, P;
                typeof T != "string" && (T = "?");
                for (P in w)
                    if (o.call(w, P)) {
                        if (S = w[P], !S && (S === null || S === c || isNaN(S)) && (S = ""), P = f(P), S = f(S), P === null || S === null) continue;
                        N.push(P + "=" + S)
                    } return N.length ? T + N.join("&") : ""
            }
            var _ = m,
                b = h,
                C = {
                    stringify: _,
                    parse: b
                },
                L = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
                M = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,
                B = "[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]",
                I = new RegExp("^" + B + "+");

            function K(w) {
                return (w || "").toString().replace(I, "")
            }
            var Y = [
                    ["#", "hash"],
                    ["?", "query"],
                    function(T, N) {
                        return z(N.protocol) ? T.replace(/\\/g, "/") : T
                    },
                    ["/", "pathname"],
                    ["@", "auth", 1],
                    [NaN, "host", void 0, 1, 1],
                    [/:(\d+)$/, "port", void 0, 1],
                    [NaN, "hostname", void 0, 1, 1]
                ],
                G = {
                    hash: 1,
                    query: 1
                };

            function j(w) {
                var T;
                typeof window < "u" ? T = window : typeof n < "u" ? T = n : typeof self < "u" ? T = self : T = {};
                var N = T.location || {};
                w = w || N;
                var S = {},
                    P = typeof w,
                    X;
                if (w.protocol === "blob:") S = new ue(unescape(w.pathname), {});
                else if (P === "string") {
                    S = new ue(w, {});
                    for (X in G) delete S[X]
                } else if (P === "object") {
                    for (X in w) X in G || (S[X] = w[X]);
                    S.slashes === void 0 && (S.slashes = L.test(w.href))
                }
                return S
            }

            function z(w) {
                return w === "file:" || w === "ftp:" || w === "http:" || w === "https:" || w === "ws:" || w === "wss:"
            }

            function ie(w, T) {
                w = K(w), T = T || {};
                var N = M.exec(w),
                    S = N[1] ? N[1].toLowerCase() : "",
                    P = !!N[2],
                    X = !!N[3],
                    ee = 0,
                    _e;
                return P ? X ? (_e = N[2] + N[3] + N[4], ee = N[2].length + N[3].length) : (_e = N[2] + N[4], ee = N[2].length) : X ? (_e = N[3] + N[4], ee = N[3].length) : _e = N[4], S === "file:" ? ee >= 2 && (_e = _e.slice(2)) : z(S) ? _e = N[4] : S ? P && (_e = _e.slice(2)) : ee >= 2 && z(T.protocol) && (_e = N[4]), {
                    protocol: S,
                    slashes: P || z(S),
                    slashesCount: ee,
                    rest: _e
                }
            }

            function oe(w, T) {
                if (w === "") return T;
                for (var N = (T || "/").split("/").slice(0, -1).concat(w.split("/")), S = N.length, P = N[S - 1], X = !1, ee = 0; S--;) N[S] === "." ? N.splice(S, 1) : N[S] === ".." ? (N.splice(S, 1), ee++) : ee && (S === 0 && (X = !0), N.splice(S, 1), ee--);
                return X && N.unshift(""), (P === "." || P === "..") && N.push(""), N.join("/")
            }

            function ue(w, T, N) {
                if (w = K(w), !(this instanceof ue)) return new ue(w, T, N);
                var S, P, X, ee, _e, Te, ot = Y.slice(),
                    tr = typeof T,
                    ke = this,
                    ua = 0;
                for (tr !== "object" && tr !== "string" && (N = T, T = null), N && typeof N != "function" && (N = C.parse), T = j(T), P = ie(w || "", T), S = !P.protocol && !P.slashes, ke.slashes = P.slashes || S && T.slashes, ke.protocol = P.protocol || T.protocol || "", w = P.rest, (ke.protocol === "file:" || !P.slashes && (P.protocol || P.slashesCount < 2 || !z(ke.protocol))) && (ot[3] = [/(.*)/, "pathname"]); ua < ot.length; ua++) {
                    if (ee = ot[ua], typeof ee == "function") {
                        w = ee(w, ke);
                        continue
                    }
                    X = ee[0], Te = ee[1], X !== X ? ke[Te] = w : typeof X == "string" ? ~(_e = w.indexOf(X)) && (typeof ee[2] == "number" ? (ke[Te] = w.slice(0, _e), w = w.slice(_e + ee[2])) : (ke[Te] = w.slice(_e), w = w.slice(0, _e))) : (_e = X.exec(w)) && (ke[Te] = _e[1], w = w.slice(0, _e.index)), ke[Te] = ke[Te] || S && ee[3] && T[Te] || "", ee[4] && (ke[Te] = ke[Te].toLowerCase())
                }
                N && (ke.query = N(ke.query)), S && T.slashes && ke.pathname.charAt(0) !== "/" && (ke.pathname !== "" || T.pathname !== "") && (ke.pathname = oe(ke.pathname, T.pathname)), ke.pathname.charAt(0) !== "/" && z(ke.protocol) && (ke.pathname = "/" + ke.pathname), s(ke.port, ke.protocol) || (ke.host = ke.hostname, ke.port = ""), ke.username = ke.password = "", ke.auth && (ee = ke.auth.split(":"), ke.username = ee[0] || "", ke.password = ee[1] || ""), ke.origin = ke.protocol !== "file:" && z(ke.protocol) && ke.host ? ke.protocol + "//" + ke.host : "null", ke.href = ke.toString()
            }

            function Ie(w, T, N) {
                var S = this;
                switch (w) {
                    case "query":
                        typeof T == "string" && T.length && (T = (N || C.parse)(T)), S[w] = T;
                        break;
                    case "port":
                        S[w] = T, s(T, S.protocol) ? T && (S.host = S.hostname + ":" + T) : (S.host = S.hostname, S[w] = "");
                        break;
                    case "hostname":
                        S[w] = T, S.port && (T += ":" + S.port), S.host = T;
                        break;
                    case "host":
                        S[w] = T, /:\d+$/.test(T) ? (T = T.split(":"), S.port = T.pop(), S.hostname = T.join(":")) : (S.hostname = T, S.port = "");
                        break;
                    case "protocol":
                        S.protocol = T.toLowerCase(), S.slashes = !N;
                        break;
                    case "pathname":
                    case "hash":
                        if (T) {
                            var P = w === "pathname" ? "/" : "#";
                            S[w] = T.charAt(0) !== P ? P + T : T
                        } else S[w] = T;
                        break;
                    default:
                        S[w] = T
                }
                for (var X = 0; X < Y.length; X++) {
                    var ee = Y[X];
                    ee[4] && (S[ee[1]] = S[ee[1]].toLowerCase())
                }
                return S.origin = S.protocol !== "file:" && z(S.protocol) && S.host ? S.protocol + "//" + S.host : "null", S.href = S.toString(), S
            }

            function Ce(w) {
                (!w || typeof w != "function") && (w = C.stringify);
                var T, N = this,
                    S = N.protocol;
                S && S.charAt(S.length - 1) !== ":" && (S += ":");
                var P = S + (N.slashes || z(N.protocol) ? "//" : "");
                return N.username && (P += N.username, N.password && (P += ":" + N.password), P += "@"), P += N.host + N.pathname, T = typeof N.query == "object" ? w(N.query) : N.query, T && (P += T.charAt(0) !== "?" ? "?" + T : T), N.hash && (P += N.hash), P
            }
            ue.prototype = {
                set: Ie,
                toString: Ce
            }, ue.extractProtocol = ie, ue.location = j, ue.trimLeft = K, ue.qs = C;
            var fe = ue;

            function we(w, T) {
                setTimeout(function(N) {
                    return w.call(N)
                }, 4, T)
            }

            function F(w, T) {
                typeof process < "u" && console[w].call(null, T)
            }

            function te(w, T) {
                w === void 0 && (w = []);
                var N = [];
                return w.forEach(function(S) {
                    T(S) || N.push(S)
                }), N
            }

            function de(w, T) {
                w === void 0 && (w = []);
                var N = [];
                return w.forEach(function(S) {
                    T(S) && N.push(S)
                }), N
            }
            var Ee = function() {
                this.listeners = {}
            };
            Ee.prototype.addEventListener = function(T, N) {
                typeof N == "function" && (Array.isArray(this.listeners[T]) || (this.listeners[T] = []), de(this.listeners[T], function(S) {
                    return S === N
                }).length === 0 && this.listeners[T].push(N))
            }, Ee.prototype.removeEventListener = function(T, N) {
                var S = this.listeners[T];
                this.listeners[T] = te(S, function(P) {
                    return P === N
                })
            }, Ee.prototype.dispatchEvent = function(T) {
                for (var N = this, S = [], P = arguments.length - 1; P-- > 0;) S[P] = arguments[P + 1];
                var X = T.type,
                    ee = this.listeners[X];
                return Array.isArray(ee) ? (ee.forEach(function(_e) {
                    S.length > 0 ? _e.apply(N, S) : _e.call(N, T)
                }), !0) : !1
            };

            function ve(w) {
                var T = w.indexOf("?");
                return T >= 0 ? w.slice(0, T) : w
            }
            var Se = function() {
                this.urlMap = {}
            };
            Se.prototype.attachWebSocket = function(T, N) {
                var S = ve(N),
                    P = this.urlMap[S];
                if (P && P.server && P.websockets.indexOf(T) === -1) return P.websockets.push(T), P.server
            }, Se.prototype.addMembershipToRoom = function(T, N) {
                var S = this.urlMap[ve(T.url)];
                S && S.server && S.websockets.indexOf(T) !== -1 && (S.roomMemberships[N] || (S.roomMemberships[N] = []), S.roomMemberships[N].push(T))
            }, Se.prototype.attachServer = function(T, N) {
                var S = ve(N),
                    P = this.urlMap[S];
                if (!P) return this.urlMap[S] = {
                    server: T,
                    websockets: [],
                    roomMemberships: {}
                }, T
            }, Se.prototype.serverLookup = function(T) {
                var N = ve(T),
                    S = this.urlMap[N];
                if (S) return S.server
            }, Se.prototype.websocketsLookup = function(T, N, S) {
                var P = ve(T),
                    X, ee = this.urlMap[P];
                if (X = ee ? ee.websockets : [], N) {
                    var _e = ee.roomMemberships[N];
                    X = _e || []
                }
                return S ? X.filter(function(Te) {
                    return Te !== S
                }) : X
            }, Se.prototype.removeServer = function(T) {
                delete this.urlMap[ve(T)]
            }, Se.prototype.removeWebSocket = function(T, N) {
                var S = ve(N),
                    P = this.urlMap[S];
                P && (P.websockets = te(P.websockets, function(X) {
                    return X === T
                }))
            }, Se.prototype.removeMembershipFromRoom = function(T, N) {
                var S = this.urlMap[ve(T.url)],
                    P = S.roomMemberships[N];
                S && P !== null && (S.roomMemberships[N] = te(P, function(X) {
                    return X === T
                }))
            };
            var xe = new Se,
                Ue = {
                    CLOSE_NORMAL: 1e3,
                    CLOSE_GOING_AWAY: 1001,
                    CLOSE_PROTOCOL_ERROR: 1002,
                    CLOSE_UNSUPPORTED: 1003,
                    CLOSE_NO_STATUS: 1005,
                    CLOSE_ABNORMAL: 1006,
                    UNSUPPORTED_DATA: 1007,
                    POLICY_VIOLATION: 1008,
                    CLOSE_TOO_LARGE: 1009,
                    MISSING_EXTENSION: 1010,
                    INTERNAL_ERROR: 1011,
                    SERVICE_RESTART: 1012,
                    TRY_AGAIN_LATER: 1013,
                    TLS_HANDSHAKE: 1015
                },
                Ze = {
                    CONSTRUCTOR_ERROR: "Failed to construct 'WebSocket':",
                    CLOSE_ERROR: "Failed to execute 'close' on 'WebSocket':",
                    EVENT: {
                        CONSTRUCT: "Failed to construct 'Event':",
                        MESSAGE: "Failed to construct 'MessageEvent':",
                        CLOSE: "Failed to construct 'CloseEvent':"
                    }
                },
                wt = function() {};
            wt.prototype.stopPropagation = function() {}, wt.prototype.stopImmediatePropagation = function() {}, wt.prototype.initEvent = function(T, N, S) {
                T === void 0 && (T = "undefined"), N === void 0 && (N = !1), S === void 0 && (S = !1), this.type = "" + T, this.bubbles = Boolean(N), this.cancelable = Boolean(S)
            };
            var Sr = function(w) {
                    function T(N, S) {
                        if (S === void 0 && (S = {}), w.call(this), !N) throw new TypeError(Ze.EVENT_ERROR + " 1 argument required, but only 0 present.");
                        if (typeof S != "object") throw new TypeError(Ze.EVENT_ERROR + " parameter 2 ('eventInitDict') is not an object.");
                        var P = S.bubbles,
                            X = S.cancelable;
                        this.type = "" + N, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = X ? Boolean(X) : !1, this.cancelBubble = !1, this.bubbles = P ? Boolean(P) : !1
                    }
                    return w && (T.__proto__ = w), T.prototype = Object.create(w && w.prototype), T.prototype.constructor = T, T
                }(wt),
                er = function(w) {
                    function T(N, S) {
                        if (S === void 0 && (S = {}), w.call(this), !N) throw new TypeError(Ze.EVENT.MESSAGE + " 1 argument required, but only 0 present.");
                        if (typeof S != "object") throw new TypeError(Ze.EVENT.MESSAGE + " parameter 2 ('eventInitDict') is not an object");
                        var P = S.bubbles,
                            X = S.cancelable,
                            ee = S.data,
                            _e = S.origin,
                            Te = S.lastEventId,
                            ot = S.ports;
                        this.type = "" + N, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = X ? Boolean(X) : !1, this.canncelBubble = !1, this.bubbles = P ? Boolean(P) : !1, this.origin = "" + _e, this.ports = typeof ot > "u" ? null : ot, this.data = typeof ee > "u" ? null : ee, this.lastEventId = "" + (Te || "")
                    }
                    return w && (T.__proto__ = w), T.prototype = Object.create(w && w.prototype), T.prototype.constructor = T, T
                }(wt),
                pr = function(w) {
                    function T(N, S) {
                        if (S === void 0 && (S = {}), w.call(this), !N) throw new TypeError(Ze.EVENT.CLOSE + " 1 argument required, but only 0 present.");
                        if (typeof S != "object") throw new TypeError(Ze.EVENT.CLOSE + " parameter 2 ('eventInitDict') is not an object");
                        var P = S.bubbles,
                            X = S.cancelable,
                            ee = S.code,
                            _e = S.reason,
                            Te = S.wasClean;
                        this.type = "" + N, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = X ? Boolean(X) : !1, this.cancelBubble = !1, this.bubbles = P ? Boolean(P) : !1, this.code = typeof ee == "number" ? parseInt(ee, 10) : 0, this.reason = "" + (_e || ""), this.wasClean = Te ? Boolean(Te) : !1
                    }
                    return w && (T.__proto__ = w), T.prototype = Object.create(w && w.prototype), T.prototype.constructor = T, T
                }(wt);

            function nt(w) {
                var T = w.type,
                    N = w.target,
                    S = new Sr(T);
                return N && (S.target = N, S.srcElement = N, S.currentTarget = N), S
            }

            function Et(w) {
                var T = w.type,
                    N = w.origin,
                    S = w.data,
                    P = w.target,
                    X = new er(T, {
                        data: S,
                        origin: N
                    });
                return P && (X.target = P, X.srcElement = P, X.currentTarget = P), X
            }

            function it(w) {
                var T = w.code,
                    N = w.reason,
                    S = w.type,
                    P = w.target,
                    X = w.wasClean;
                X || (X = T === Ue.CLOSE_NORMAL || T === Ue.CLOSE_NO_STATUS);
                var ee = new pr(S, {
                    code: T,
                    reason: N,
                    wasClean: X
                });
                return P && (ee.target = P, ee.srcElement = P, ee.currentTarget = P), ee
            }

            function Lt(w, T, N) {
                w.readyState = V.CLOSING;
                var S = xe.serverLookup(w.url),
                    P = it({
                        type: "close",
                        target: w.target,
                        code: T,
                        reason: N
                    }),
                    X = it({
                        type: "server::close",
                        target: w,
                        code: T,
                        reason: N
                    });
                we(function() {
                    xe.removeWebSocket(w, w.url), w.readyState = V.CLOSED, w.dispatchEvent(P), w.dispatchEvent(X), S && S.dispatchEvent(P, S)
                }, w)
            }

            function Wt(w, T, N) {
                w.readyState = V.CLOSING;
                var S = xe.serverLookup(w.url),
                    P = it({
                        type: "close",
                        target: w.target,
                        code: T,
                        reason: N,
                        wasClean: !1
                    }),
                    X = it({
                        type: "server::close",
                        target: w,
                        code: T,
                        reason: N,
                        wasClean: !1
                    }),
                    ee = nt({
                        type: "error",
                        target: w.target
                    });
                we(function() {
                    xe.removeWebSocket(w, w.url), w.readyState = V.CLOSED, w.dispatchEvent(ee), w.dispatchEvent(P), w.dispatchEvent(X), S && S.dispatchEvent(P, S)
                }, w)
            }

            function kt(w) {
                return Object.prototype.toString.call(w) !== "[object Blob]" && !(w instanceof ArrayBuffer) && (w = String(w)), w
            }
            var g = new WeakMap;

            function p(w) {
                if (g.has(w)) return g.get(w);
                var T = new Proxy(w, {
                    get: function(S, P) {
                        return P === "close" ? function(ee) {
                            ee === void 0 && (ee = {});
                            var _e = ee.code || Ue.CLOSE_NORMAL,
                                Te = ee.reason || "";
                            Lt(T, _e, Te)
                        } : P === "send" ? function(ee) {
                            ee = kt(ee), w.dispatchEvent(Et({
                                type: "message",
                                data: ee,
                                origin: this.url,
                                target: w
                            }))
                        } : P === "on" ? function(ee, _e) {
                            w.addEventListener("server::" + ee, _e)
                        } : P === "target" ? w : S[P]
                    }
                });
                return g.set(w, T), T
            }

            function O(w) {
                var T = encodeURIComponent(w).match(/%[89ABab]/g);
                return w.length + (T ? T.length : 0)
            }

            function D(w) {
                var T = new fe(w),
                    N = T.pathname,
                    S = T.protocol,
                    P = T.hash;
                if (!w) throw new TypeError(Ze.CONSTRUCTOR_ERROR + " 1 argument required, but only 0 present.");
                if (N || (T.pathname = "/"), S === "") throw new SyntaxError(Ze.CONSTRUCTOR_ERROR + " The URL '" + T.toString() + "' is invalid.");
                if (S !== "ws:" && S !== "wss:") throw new SyntaxError(Ze.CONSTRUCTOR_ERROR + " The URL's scheme must be either 'ws' or 'wss'. '" + S + "' is not allowed.");
                if (P !== "") throw new SyntaxError(Ze.CONSTRUCTOR_ERROR + " The URL contains a fragment identifier ('" + P + "'). Fragment identifiers are not allowed in WebSocket URLs.");
                return T.toString()
            }

            function U(w) {
                if (w === void 0 && (w = []), !Array.isArray(w) && typeof w != "string") throw new SyntaxError(Ze.CONSTRUCTOR_ERROR + " The subprotocol '" + w.toString() + "' is invalid.");
                typeof w == "string" && (w = [w]);
                var T = w.map(function(S) {
                        return {
                            count: 1,
                            protocol: S
                        }
                    }).reduce(function(S, P) {
                        return S[P.protocol] = (S[P.protocol] || 0) + P.count, S
                    }, {}),
                    N = Object.keys(T).filter(function(S) {
                        return T[S] > 1
                    });
                if (N.length > 0) throw new SyntaxError(Ze.CONSTRUCTOR_ERROR + " The subprotocol '" + N[0] + "' is duplicated.");
                return w
            }
            var V = function(w) {
                function T(S, P) {
                    w.call(this), this._onopen = null, this._onmessage = null, this._onerror = null, this._onclose = null, this.url = D(S), P = U(P), this.protocol = P[0] || "", this.binaryType = "blob", this.readyState = T.CONNECTING;
                    var X = p(this),
                        ee = xe.attachWebSocket(X, this.url);
                    we(function() {
                        if (ee)
                            if (ee.options.verifyClient && typeof ee.options.verifyClient == "function" && !ee.options.verifyClient()) this.readyState = T.CLOSED, F("error", "WebSocket connection to '" + this.url + "' failed: HTTP Authentication failed; no valid credentials available"), xe.removeWebSocket(X, this.url), this.dispatchEvent(nt({
                                type: "error",
                                target: this
                            })), this.dispatchEvent(it({
                                type: "close",
                                target: this,
                                code: Ue.CLOSE_NORMAL
                            }));
                            else {
                                if (ee.options.selectProtocol && typeof ee.options.selectProtocol == "function") {
                                    var Te = ee.options.selectProtocol(P),
                                        ot = Te !== "",
                                        tr = P.indexOf(Te) !== -1;
                                    if (ot && !tr) {
                                        this.readyState = T.CLOSED, F("error", "WebSocket connection to '" + this.url + "' failed: Invalid Sub-Protocol"), xe.removeWebSocket(X, this.url), this.dispatchEvent(nt({
                                            type: "error",
                                            target: this
                                        })), this.dispatchEvent(it({
                                            type: "close",
                                            target: this,
                                            code: Ue.CLOSE_NORMAL
                                        }));
                                        return
                                    }
                                    this.protocol = Te
                                }
                                this.readyState = T.OPEN, this.dispatchEvent(nt({
                                    type: "open",
                                    target: this
                                })), ee.dispatchEvent(nt({
                                    type: "connection"
                                }), X)
                            }
                        else this.readyState = T.CLOSED, this.dispatchEvent(nt({
                            type: "error",
                            target: this
                        })), this.dispatchEvent(it({
                            type: "close",
                            target: this,
                            code: Ue.CLOSE_NORMAL
                        })), F("error", "WebSocket connection to '" + this.url + "' failed")
                    }, this)
                }
                w && (T.__proto__ = w), T.prototype = Object.create(w && w.prototype), T.prototype.constructor = T;
                var N = {
                    onopen: {},
                    onmessage: {},
                    onclose: {},
                    onerror: {}
                };
                return N.onopen.get = function() {
                    return this._onopen
                }, N.onmessage.get = function() {
                    return this._onmessage
                }, N.onclose.get = function() {
                    return this._onclose
                }, N.onerror.get = function() {
                    return this._onerror
                }, N.onopen.set = function(S) {
                    this.removeEventListener("open", this._onopen), this._onopen = S, this.addEventListener("open", S)
                }, N.onmessage.set = function(S) {
                    this.removeEventListener("message", this._onmessage), this._onmessage = S, this.addEventListener("message", S)
                }, N.onclose.set = function(S) {
                    this.removeEventListener("close", this._onclose), this._onclose = S, this.addEventListener("close", S)
                }, N.onerror.set = function(S) {
                    this.removeEventListener("error", this._onerror), this._onerror = S, this.addEventListener("error", S)
                }, T.prototype.send = function(P) {
                    var X = this;
                    if (this.readyState === T.CLOSING || this.readyState === T.CLOSED) throw new Error("WebSocket is already in CLOSING or CLOSED state");
                    var ee = Et({
                            type: "server::message",
                            origin: this.url,
                            data: kt(P)
                        }),
                        _e = xe.serverLookup(this.url);
                    _e && we(function() {
                        X.dispatchEvent(ee, P)
                    }, _e)
                }, T.prototype.close = function(P, X) {
                    if (P !== void 0 && (typeof P != "number" || P !== 1e3 && (P < 3e3 || P > 4999))) throw new TypeError(Ze.CLOSE_ERROR + " The code must be either 1000, or between 3000 and 4999. " + P + " is neither.");
                    if (X !== void 0) {
                        var ee = O(X);
                        if (ee > 123) throw new SyntaxError(Ze.CLOSE_ERROR + " The message must not be greater than 123 bytes.")
                    }
                    if (!(this.readyState === T.CLOSING || this.readyState === T.CLOSED)) {
                        var _e = p(this);
                        this.readyState === T.CONNECTING ? Wt(_e, P || Ue.CLOSE_ABNORMAL, X) : Lt(_e, P || Ue.CLOSE_NO_STATUS, X)
                    }
                }, Object.defineProperties(T.prototype, N), T
            }(Ee);
            V.CONNECTING = 0, V.prototype.CONNECTING = V.CONNECTING, V.OPEN = 1, V.prototype.OPEN = V.OPEN, V.CLOSING = 2, V.prototype.CLOSING = V.CLOSING, V.CLOSED = 3, V.prototype.CLOSED = V.CLOSED;
            var ce = function(w) {
                return w.reduce(function(T, N) {
                    return T.indexOf(N) > -1 ? T : T.concat(N)
                }, [])
            };

            function re() {
                return typeof window < "u" ? window : typeof process == "object" && typeof cW == "function" && typeof Pt == "object" ? Pt : this
            }
            var Q = {
                    mock: !0,
                    verifyClient: null,
                    selectProtocol: null
                },
                A = function(w) {
                    function T(N, S) {
                        S === void 0 && (S = Q), w.call(this);
                        var P = new fe(N);
                        P.pathname || (P.pathname = "/"), this.url = P.toString(), this.originalWebSocket = null;
                        var X = xe.attachServer(this, this.url);
                        if (!X) throw this.dispatchEvent(nt({
                            type: "error"
                        })), new Error("A mock server is already listening on this url");
                        this.options = Object.assign({}, Q, S), this.options.mock && this.mockWebsocket()
                    }
                    return w && (T.__proto__ = w), T.prototype = Object.create(w && w.prototype), T.prototype.constructor = T, T.prototype.mockWebsocket = function() {
                        var S = re();
                        this.originalWebSocket = S.WebSocket, S.WebSocket = V
                    }, T.prototype.restoreWebsocket = function() {
                        var S = re();
                        this.originalWebSocket !== null && (S.WebSocket = this.originalWebSocket), this.originalWebSocket = null
                    }, T.prototype.stop = function(S) {
                        S === void 0 && (S = function() {}), this.options.mock && this.restoreWebsocket(), xe.removeServer(this.url), typeof S == "function" && S()
                    }, T.prototype.on = function(S, P) {
                        this.addEventListener(S, P)
                    }, T.prototype.close = function(S) {
                        S === void 0 && (S = {});
                        var P = S.code,
                            X = S.reason,
                            ee = S.wasClean,
                            _e = xe.websocketsLookup(this.url);
                        xe.removeServer(this.url), _e.forEach(function(Te) {
                            Te.readyState = V.CLOSED, Te.dispatchEvent(it({
                                type: "close",
                                target: Te.target,
                                code: P || Ue.CLOSE_NORMAL,
                                reason: X || "",
                                wasClean: ee
                            }))
                        }), this.dispatchEvent(it({
                            type: "close"
                        }), this)
                    }, T.prototype.emit = function(S, P, X) {
                        var ee = this;
                        X === void 0 && (X = {});
                        var _e = X.websockets;
                        _e || (_e = xe.websocketsLookup(this.url)), typeof X != "object" || arguments.length > 3 ? (P = Array.prototype.slice.call(arguments, 1, arguments.length), P = P.map(function(Te) {
                            return kt(Te)
                        })) : P = kt(P), _e.forEach(function(Te) {
                            Array.isArray(P) ? Te.dispatchEvent.apply(Te, [Et({
                                type: S,
                                data: P,
                                origin: ee.url,
                                target: Te.target
                            })].concat(P)) : Te.dispatchEvent(Et({
                                type: S,
                                data: P,
                                origin: ee.url,
                                target: Te.target
                            }))
                        })
                    }, T.prototype.clients = function() {
                        return xe.websocketsLookup(this.url)
                    }, T.prototype.to = function(S, P, X) {
                        var ee = this;
                        X === void 0 && (X = []);
                        var _e = this,
                            Te = ce(X.concat(xe.websocketsLookup(this.url, S, P)));
                        return {
                            to: function(ot, tr) {
                                return ee.to.call(ee, ot, tr, Te)
                            },
                            emit: function(tr, ke) {
                                _e.emit(tr, ke, {
                                    websockets: Te
                                })
                            }
                        }
                    }, T.prototype.in = function() {
                        for (var S = [], P = arguments.length; P--;) S[P] = arguments[P];
                        return this.to.apply(null, S)
                    }, T.prototype.simulate = function(S) {
                        var P = xe.websocketsLookup(this.url);
                        S === "error" && P.forEach(function(X) {
                            X.readyState = V.CLOSED, X.dispatchEvent(nt({
                                type: "error"
                            }))
                        })
                    }, T
                }(Ee);
            A.of = function(T) {
                return new A(T)
            };
            var W = function(w) {
                function T(S, P) {
                    var X = this;
                    S === void 0 && (S = "socket.io"), P === void 0 && (P = ""), w.call(this), this.binaryType = "blob";
                    var ee = new fe(S);
                    ee.pathname || (ee.pathname = "/"), this.url = ee.toString(), this.readyState = T.CONNECTING, this.protocol = "", this.target = this, typeof P == "string" || typeof P == "object" && P !== null ? this.protocol = P : Array.isArray(P) && P.length > 0 && (this.protocol = P[0]);
                    var _e = xe.attachWebSocket(this, this.url);
                    we(function() {
                        _e ? (this.readyState = T.OPEN, _e.dispatchEvent(nt({
                            type: "connection"
                        }), _e, this), _e.dispatchEvent(nt({
                            type: "connect"
                        }), _e, this), this.dispatchEvent(nt({
                            type: "connect",
                            target: this
                        }))) : (this.readyState = T.CLOSED, this.dispatchEvent(nt({
                            type: "error",
                            target: this
                        })), this.dispatchEvent(it({
                            type: "close",
                            target: this,
                            code: Ue.CLOSE_NORMAL
                        })), F("error", "Socket.io connection to '" + this.url + "' failed"))
                    }, this), this.addEventListener("close", function(Te) {
                        X.dispatchEvent(it({
                            type: "disconnect",
                            target: Te.target,
                            code: Te.code
                        }))
                    })
                }
                w && (T.__proto__ = w), T.prototype = Object.create(w && w.prototype), T.prototype.constructor = T;
                var N = {
                    broadcast: {}
                };
                return T.prototype.close = function() {
                    if (this.readyState === T.OPEN) {
                        var P = xe.serverLookup(this.url);
                        return xe.removeWebSocket(this, this.url), this.readyState = T.CLOSED, this.dispatchEvent(it({
                            type: "close",
                            target: this,
                            code: Ue.CLOSE_NORMAL
                        })), P && P.dispatchEvent(it({
                            type: "disconnect",
                            target: this,
                            code: Ue.CLOSE_NORMAL
                        }), P), this
                    }
                }, T.prototype.disconnect = function() {
                    return this.close()
                }, T.prototype.emit = function(P) {
                    for (var X = [], ee = arguments.length - 1; ee-- > 0;) X[ee] = arguments[ee + 1];
                    if (this.readyState !== T.OPEN) throw new Error("SocketIO is already in CLOSING or CLOSED state");
                    var _e = Et({
                            type: P,
                            origin: this.url,
                            data: X
                        }),
                        Te = xe.serverLookup(this.url);
                    return Te && Te.dispatchEvent.apply(Te, [_e].concat(X)), this
                }, T.prototype.send = function(P) {
                    return this.emit("message", P), this
                }, N.broadcast.get = function() {
                    if (this.readyState !== T.OPEN) throw new Error("SocketIO is already in CLOSING or CLOSED state");
                    var S = this,
                        P = xe.serverLookup(this.url);
                    if (!P) throw new Error("SocketIO can not find a server at the specified URL (" + this.url + ")");
                    return {
                        emit: function(ee, _e) {
                            return P.emit(ee, _e, {
                                websockets: xe.websocketsLookup(S.url, null, S)
                            }), S
                        },
                        to: function(ee) {
                            return P.to(ee, S)
                        },
                        in: function(ee) {
                            return P.in(ee, S)
                        }
                    }
                }, T.prototype.on = function(P, X) {
                    return this.addEventListener(P, X), this
                }, T.prototype.off = function(P, X) {
                    this.removeEventListener(P, X)
                }, T.prototype.hasListeners = function(P) {
                    var X = this.listeners[P];
                    return Array.isArray(X) ? !!X.length : !1
                }, T.prototype.join = function(P) {
                    xe.addMembershipToRoom(this, P)
                }, T.prototype.leave = function(P) {
                    xe.removeMembershipFromRoom(this, P)
                }, T.prototype.to = function(P) {
                    return this.broadcast.to(P)
                }, T.prototype.in = function() {
                    return this.to.apply(null, arguments)
                }, T.prototype.dispatchEvent = function(P) {
                    for (var X = this, ee = [], _e = arguments.length - 1; _e-- > 0;) ee[_e] = arguments[_e + 1];
                    var Te = P.type,
                        ot = this.listeners[Te];
                    if (!Array.isArray(ot)) return !1;
                    ot.forEach(function(tr) {
                        ee.length > 0 ? tr.apply(X, ee) : tr.call(X, P.data ? P.data : P)
                    })
                }, Object.defineProperties(T.prototype, N), T
            }(Ee);
            W.CONNECTING = 0, W.OPEN = 1, W.CLOSING = 2, W.CLOSED = 3;
            var he = function(T, N) {
                return new W(T, N)
            };
            he.connect = function(T, N) {
                return he(T, N)
            };
            var pe = A,
                $e = V,
                Le = he;
            r.Server = pe, r.WebSocket = $e, r.SocketIO = Le, Object.defineProperty(r, "__esModule", {
                value: !0
            })
        })
    })(Fy, Fy.exports);
    var yS = {
        exports: {}
    };
    (function(t) {
        (function() {
            function e(u, f) {
                var h = u.x - f.x,
                    m = u.y - f.y;
                return h * h + m * m
            }

            function r(u, f, h) {
                var m = f.x,
                    _ = f.y,
                    b = h.x - m,
                    C = h.y - _;
                if (b !== 0 || C !== 0) {
                    var L = ((u.x - m) * b + (u.y - _) * C) / (b * b + C * C);
                    L > 1 ? (m = h.x, _ = h.y) : L > 0 && (m += b * L, _ += C * L)
                }
                return b = u.x - m, C = u.y - _, b * b + C * C
            }

            function n(u, f) {
                for (var h = u[0], m = [h], _, b = 1, C = u.length; b < C; b++) _ = u[b], e(_, h) > f && (m.push(_), h = _);
                return h !== _ && m.push(_), m
            }

            function s(u, f, h, m, _) {
                for (var b = m, C, L = f + 1; L < h; L++) {
                    var M = r(u[L], u[f], u[h]);
                    M > b && (C = L, b = M)
                }
                b > m && (C - f > 1 && s(u, f, C, m, _), _.push(u[C]), h - C > 1 && s(u, C, h, m, _))
            }

            function o(u, f) {
                var h = u.length - 1,
                    m = [u[0]];
                return s(u, 0, h, f, m), m.push(u[h]), m
            }

            function c(u, f, h) {
                if (u.length <= 2) return u;
                var m = f !== void 0 ? f * f : 1;
                return u = h ? u : n(u, m), u = o(u, m), u
            }
            t.exports = c, t.exports.default = c
        })()
    })(yS);
    const _S = yS.exports;
    class lW {
        constructor(e, r, n) {
            ge(this, "DEFAULT_WIDTH", 400);
            ge(this, "DEFAULT_HEIGHT", 400);
            ge(this, "canvas");
            ge(this, "ctx");
            ge(this, "doodle");
            ge(this, "color", "#000");
            ge(this, "layer", 0);
            ge(this, "layers", 1);
            ge(this, "maxPoints", Number.MAX_SAFE_INTEGER);
            ge(this, "points", []);
            ge(this, "precision", 2);
            ge(this, "scale", {
                width: 1,
                height: 1
            });
            ge(this, "weight", 4);
            ge(this, "weightScale", 1);
            ge(this, "isInteracting", !1);
            var s, o, c, u, f;
            n != null && n.color && (this.color = n.color), n != null && n.layer && (this.layer = n.layer), n != null && n.layers && (this.layers = n.layers), n != null && n.maxPoints && (this.maxPoints = n.maxPoints), n != null && n.precision && (this.precision = n.precision), n != null && n.scale && (this.scale = n.scale), n != null && n.weight && (this.weight = n.weight), n != null && n.weightScale && (this.weightScale = n.weightScale), e.width = ((o = (s = r.size) == null ? void 0 : s.width) != null ? o : this.DEFAULT_WIDTH) * this.scale.width, e.height = ((u = (c = r.size) == null ? void 0 : c.height) != null ? u : this.DEFAULT_HEIGHT) * this.scale.height, this.canvas = e, this.ctx = e.getContext("2d"), (f = this.ctx) == null || f.scale(this.scale.width, this.scale.height), this.doodle = r, this.drawLines()
        }
        addPoint(e) {
            this.points.push(e)
        }
        normalizePoint(e) {
            const r = {
                    x: e.x / this.scale.width,
                    y: e.y / this.scale.height
                },
                n = {
                    x: Math.min(Math.max(.5 * this.weight, r.x), this.canvas.width / this.scale.width - .5 * this.weight),
                    y: Math.min(Math.max(.5 * this.weight, r.y), this.canvas.height / this.scale.height - .5 * this.weight)
                };
            return {
                x: hr.toPrecision(n.x, this.precision),
                y: hr.toPrecision(n.y, this.precision)
            }
        }
        drawLines() {
            if (!!this.ctx) {
                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                for (let e = 0; e < this.layers; e++) Object.values(this.doodle.lines).filter(r => {
                    var n;
                    return ((n = r.layer) != null ? n : 0) === e
                }).forEach(r => this.drawLine(r)), e === this.layer && this.drawLine({
                    color: this.color,
                    index: this.doodle.lines.length,
                    layer: this.layer,
                    points: this.points,
                    weight: this.weight
                })
            }
        }
        drawLine(e) {
            !this.ctx || (this.ctx.fillStyle = e.color, this.ctx.strokeStyle = e.color, this.ctx.lineCap = "round", this.ctx.lineJoin = "round", this.ctx.lineWidth = e.weight * this.weightScale, this.ctx.beginPath(), e.points.forEach((r, n) => {
                e.points.length === 1 && n === 0 && (this.ctx.save(), this.ctx.arc(r.x, r.y, e.weight / 2, 0, 2 * Math.PI), this.ctx.fill(), this.ctx.restore(), this.ctx.beginPath()), this.ctx.lineTo(r.x, r.y)
            }), this.ctx.stroke())
        }
        renderImage(e = "image/png") {
            return this.doodle.lines.length > 0 && this.drawLines(), this.canvas.toDataURL(e)
        }
        onStart(e) {
            this.isInteracting = !0;
            const r = this.normalizePoint(e);
            this.addPoint(r), this.drawLines()
        }
        onMove(e) {
            if (!this.isInteracting) return;
            const r = this.points[this.points.length - 1];
            if (!r) {
                this.addPoint(this.normalizePoint(e));
                return
            }
            const n = .5 * this.weight,
                s = {
                    x: e.x - r.x,
                    y: e.y - r.y
                },
                o = Math.sqrt(s.x ** 2 + s.y ** 2);
            if (o > n) {
                const c = (o - n) / o,
                    u = {
                        x: s.x * c,
                        y: s.y * c
                    },
                    f = {
                        x: r.x + u.x,
                        y: r.y + u.y
                    };
                this.addPoint(this.normalizePoint(f)), this.drawLines()
            }
        }
        onEnd() {
            if (!this.isInteracting) return null;
            const e = {
                color: this.color,
                index: this.doodle.lines.length,
                layer: this.layer,
                points: _S(this.points, .5).map(r => ({
                    x: hr.toPrecision(r.x, this.precision),
                    y: hr.toPrecision(r.y, this.precision)
                })),
                weight: this.weight
            };
            return this.isInteracting = !1, this.points = [], e
        }
    }
    class uW {
        constructor(e, r, n, s) {
            ge(this, "renderCanvas");
            ge(this, "canvases", []);
            ge(this, "maxPoints", Number.MAX_SAFE_INTEGER);
            ge(this, "tolerance", 1);
            ge(this, "lines", []);
            ge(this, "lines2", []);
            ge(this, "currentLine", {
                color: "#000",
                thickness: 0,
                points: []
            });
            ge(this, "isSubmitting", !1);
            ge(this, "isInteracting", !1);
            ge(this, "currentColor", "#000");
            ge(this, "currentThickness", 4);
            ge(this, "currentFrame", 0);
            ge(this, "width", 400);
            ge(this, "height", 400);
            this.width = r, this.height = n, this.renderCanvas = document.createElement("canvas"), s.thickness && (this.currentThickness = s.thickness), s.color && (this.currentColor = s.color), s.maxPoints && (this.maxPoints = s.maxPoints), this.setupElements(e), this.draw()
        }
        createCanvasObject(e) {
            const r = document.createElement("canvas");
            r.width = this.width, r.height = this.height, r.style.display = "none", this.canvases.push({
                name: e,
                element: r,
                dirty: !0
            })
        }
        getCanvasObject(e) {
            const r = this.canvases.find(n => n.name === e);
            if (!r) throw new Error(`No canvas found with name ${e}`);
            return r
        }
        setupElements(e) {
            this.renderCanvas.classList.add("draw-canvas"), this.renderCanvas.width = this.width, this.renderCanvas.height = this.height, this.renderCanvas.style.width = "100%", this.renderCanvas.style.margin = "0px auto", this.renderCanvas.style.height = "100%", this.renderCanvas.style.top = "0", this.renderCanvas.style.left = "0", e.append(this.renderCanvas), this.createCanvasObject("inactive"), this.createCanvasObject("active"), this.createCanvasObject("line")
        }
        get submitting() {
            return this.isSubmitting
        }
        set submitting(e) {
            this.isSubmitting = e
        }
        get color() {
            return this.currentColor
        }
        set color(e) {
            this.currentColor = e
        }
        get thickness() {
            return this.currentThickness
        }
        set thickness(e) {
            this.currentThickness = e
        }
        get frame() {
            return this.currentFrame
        }
        set frame(e) {
            this.currentFrame = e, this.getCanvasObject("active").dirty = !0, this.getCanvasObject("inactive").dirty = !0, this.draw()
        }
        get canvasElement() {
            return this.renderCanvas
        }
        toObject() {
            return {
                frame0: this.exportLines(this.lines),
                frame1: this.exportLines(this.lines2)
            }
        }
        onDown(e) {
            this.isSubmitting || (this.isInteracting = !0, this.addLine(e), this.getCanvasObject("line").dirty = !0, this.draw())
        }
        onMove(e) {
            if (!this.isInteracting || this.isSubmitting) return;
            const r = this.getLastDrawnPoint();
            if (!r) {
                this.addPoint(e), this.getCanvasObject("line").dirty = !0;
                return
            }
            const n = .5 * this.thickness,
                s = {
                    x: e.x - r.x,
                    y: e.y - r.y
                },
                o = Math.sqrt(s.x ** 2 + s.y ** 2);
            if (o > n) {
                const c = (o - n) / o,
                    u = {
                        x: s.x * c,
                        y: s.y * c
                    },
                    f = {
                        x: r.x + u.x,
                        y: r.y + u.y
                    };
                this.addPoint(f), this.getCanvasObject("line").dirty = !0, this.draw()
            }
        }
        onUp() {
            this.isSubmitting || !this.isInteracting || (this.isInteracting = !1, this.endLine(), this.getCanvasObject("active").dirty = !0, this.getCanvasObject("line").dirty = !0, this.draw())
        }
        addLine(e) {
            const r = this.currentColor,
                n = this.currentThickness;
            this.currentLine = {
                color: r,
                thickness: n,
                points: []
            }, this.addPoint(e)
        }
        addPoint(e) {
            const r = this.currentLine;
            if (!r) return;
            const n = {
                x: Math.min(Math.max(.5 * r.thickness, e.x), this.renderCanvas.width - .5 * r.thickness),
                y: Math.min(Math.max(.5 * r.thickness, e.y), this.renderCanvas.height - .5 * r.thickness)
            };
            r.points.push(n)
        }
        getLastDrawnPoint() {
            return this.currentLine.points.length === 0 ? null : this.currentLine.points[this.currentLine.points.length - 1]
        }
        endLine() {
            const r = this.currentFrame === 0 ? this.lines : this.lines2,
                n = _S(this.currentLine.points);
            r.push({
                ...this.currentLine,
                points: n
            }), this.currentLine = {
                color: "#000",
                thickness: 0,
                points: []
            }
        }
        parseLines(e) {
            let r = "#000",
                n = 1;
            return e.map(s => {
                let o = [];
                return typeof s.points == "string" ? o = s.points.split("|").map(c => {
                    const [u, f] = c.split(",");
                    return {
                        x: parseInt(u, 10),
                        y: parseInt(f, 10)
                    }
                }) : o = s.points, s.color && s.color !== r && (r = s.color), s.thickness && s.thickness !== n && (n = s.thickness), {
                    color: r,
                    thickness: n,
                    points: o
                }
            })
        }
        exportLines(e) {
            return e.map(r => ({
                ...r,
                points: r.points.map(n => `${n.x},${n.y}`).join("|")
            }))
        }
        draw() {
            const e = this.renderCanvas.getContext("2d");
            if (!e) return;
            e.clearRect(0, 0, this.width, this.height);
            const r = this.getCanvasObject("inactive");
            if (r.dirty) {
                const o = r.element.getContext("2d");
                o.clearRect(0, 0, this.width, this.height), (this.currentFrame === 0 ? this.lines2 : this.lines).forEach(u => this.drawLine(o, u)), r.dirty = !1
            }
            e.save(), e.globalAlpha = .1, e.drawImage(r.element, 0, 0), e.restore();
            const n = this.getCanvasObject("active");
            if (n.dirty) {
                const o = n.element.getContext("2d");
                o.clearRect(0, 0, this.width, this.height), (this.currentFrame === 0 ? this.lines : this.lines2).forEach(u => this.drawLine(o, u)), n.dirty = !1
            }
            e.drawImage(n.element, 0, 0);
            const s = this.getCanvasObject("line");
            if (s.dirty) {
                const o = s.element.getContext("2d");
                o.clearRect(0, 0, this.width, this.height), this.drawLine(o, this.currentLine), s.dirty = !1
            }
            e.drawImage(s.element, 0, 0)
        }
        drawLine(e, r) {
            e.strokeStyle = r.color, e.lineWidth = r.thickness, e.lineCap = "round", e.lineJoin = "round", e.fillStyle = r.color, e.strokeStyle = r.color, e.beginPath(), r.points.forEach((n, s) => {
                s === 0 && (e.save(), e.arc(n.x, n.y, r.thickness / 2, 0, 2 * Math.PI), e.fill(), e.restore(), e.beginPath(), e.moveTo(n.x, n.y)), e.lineTo(n.x, n.y)
            }), e.stroke()
        }
    }
    class fW {
        constructor(e, r) {
            ge(this, "stageElement");
            ge(this, "width", 400);
            ge(this, "height", 400);
            ge(this, "interactCanvas");
            ge(this, "isDrawing", !1);
            ge(this, "callbacks", {});
            ge(this, "capturedPointer");
            ge(this, "onPointerDown", e => {
                if (e.preventDefault(), !e.isPrimary || this.capturedPointer) return;
                const r = this.getEventPoint(e);
                this.interactCanvas.onDown(r), this.stageElement.setPointerCapture(e.pointerId), this.capturedPointer = {
                    pointerId: e.pointerId,
                    pointerType: e.pointerType
                }
            });
            ge(this, "onPointerMove", e => {
                if (e.preventDefault(), !this.capturedPointer || !e.isPrimary || e.pointerType !== this.capturedPointer.pointerType) return;
                const r = this.getEventPoint(e);
                this.interactCanvas.onMove(r)
            });
            ge(this, "onLostPointerCapture", e => {
                if (e.preventDefault(), !this.capturedPointer || !e.isPrimary || e.pointerType !== this.capturedPointer.pointerType) return;
                this.interactCanvas.onUp(), this.emit("up");
                const r = this.capturedPointer.pointerId;
                this.stageElement.hasPointerCapture(r) && this.stageElement.releasePointerCapture(r), this.capturedPointer = void 0
            });
            ge(this, "onPointerEnd", e => {
                if (e.preventDefault(), !this.capturedPointer || !e.isPrimary || e.pointerType !== this.capturedPointer.pointerType) return;
                this.interactCanvas.onUp(), this.emit("up");
                const r = this.capturedPointer.pointerId;
                this.stageElement.hasPointerCapture(r) && this.stageElement.releasePointerCapture(r), this.capturedPointer = void 0
            });
            ge(this, "onMouseDown", e => {
                e.preventDefault();
                const r = this.getEventPoint(e);
                this.interactCanvas.onDown(r), this.isDrawing = !0
            });
            ge(this, "onMouseMove", e => {
                if (e.preventDefault(), !this.isDrawing) return;
                const r = this.getEventPoint(e);
                this.interactCanvas.onMove(r)
            });
            ge(this, "onMouseUp", e => {
                e.preventDefault(), this.interactCanvas.onUp(), this.isDrawing = !1, this.emit("up")
            });
            ge(this, "onTouchStart", e => {
                e.preventDefault();
                const r = this.getEventPoint(e.touches[0]);
                this.interactCanvas.onDown(r), this.isDrawing = !0
            });
            ge(this, "onTouchMove", e => {
                if (e.preventDefault(), !this.isDrawing) return;
                const r = this.getEventPoint(e.touches[0]);
                this.interactCanvas.onMove(r)
            });
            ge(this, "onTouchCancel", e => {
                e.preventDefault(), this.interactCanvas.onUp(), this.isDrawing = !1, this.emit("up")
            });
            ge(this, "onTouchEnd", e => {
                e.preventDefault(), this.interactCanvas.onUp(), this.isDrawing = !1, this.emit("up")
            });
            r.width && (this.width = r.width), r.height && (this.height = r.height), this.stageElement = e, this.setupElements(), this.setupEvents(), r.InteractCanvas ? this.interactCanvas = new r.InteractCanvas(e, this.width, this.height, r) : this.interactCanvas = new uW(e, this.width, this.height, r)
        }
        on(e, r) {
            this.callbacks[e] = this.callbacks[e] || [], this.callbacks[e].push(r)
        }
        off(e, r) {
            this.callbacks[e] = (this.callbacks[e] || []).filter(n => n !== r)
        }
        emit(e, ...r) {
            (this.callbacks[e] || []).map(n => n(...r))
        }
        beforeDestroy() {
            this.tearDownEvents()
        }
        get canvas() {
            return this.interactCanvas
        }
        getObject() {
            return this.interactCanvas.toObject()
        }
        setupElements() {
            this.stageElement.style.touchAction = "none"
        }
        setupEvents() {
            typeof PointerEvent == "function" ? (this.stageElement.addEventListener("pointerdown", this.onPointerDown), this.stageElement.addEventListener("pointermove", this.onPointerMove), this.stageElement.addEventListener("lostpointercapture", this.onLostPointerCapture), this.stageElement.addEventListener("pointerup", this.onPointerEnd)) : (this.stageElement.addEventListener("mousedown", this.onMouseDown), this.stageElement.addEventListener("mousemove", this.onMouseMove), document.addEventListener("mouseup", this.onMouseUp.bind(this.stageElement)), this.stageElement.addEventListener("touchstart", this.onTouchStart), this.stageElement.addEventListener("touchmove", this.onTouchMove), this.stageElement.addEventListener("touchcancel", this.onTouchCancel), this.stageElement.addEventListener("touchend", this.onTouchEnd))
        }
        tearDownEvents() {
            typeof PointerEvent == "function" ? (this.stageElement.removeEventListener("pointerdown", this.onPointerDown), this.stageElement.removeEventListener("pointermove", this.onPointerMove), this.stageElement.removeEventListener("lostpointercapture", this.onLostPointerCapture), this.stageElement.removeEventListener("pointerup", this.onPointerEnd)) : (this.stageElement.removeEventListener("mousedown", this.onMouseDown), this.stageElement.removeEventListener("mousemove", this.onMouseMove), document.removeEventListener("mouseup", this.onMouseUp), this.stageElement.removeEventListener("touchstart", this.onTouchStart), this.stageElement.removeEventListener("touchmove", this.onTouchMove), this.stageElement.removeEventListener("touchcancel", this.onTouchCancel), this.stageElement.removeEventListener("touchend", this.onTouchEnd))
        }
        getPropValue(e, r) {
            return parseFloat(e.getPropertyValue(r)) || 0
        }
        getCanvasOffset() {
            const e = this.interactCanvas.canvasElement,
                r = window.getComputedStyle(e),
                n = e.getBoundingClientRect(),
                s = r.transform !== "none" ? r.transform.replace("matrix(", "").split(",") : ["1", "1", "1", "1"],
                o = parseFloat(s[0]),
                c = parseFloat(s[3]),
                u = (this.getPropValue(r, "border-left-width") + this.getPropValue(r, "border-right-width")) * o,
                f = (this.getPropValue(r, "border-top-width") + this.getPropValue(r, "border-bottom-width")) * c,
                h = (this.getPropValue(r, "padding-left") + this.getPropValue(r, "padding-right")) * o,
                m = (this.getPropValue(r, "padding-top") + this.getPropValue(r, "padding-bottom")) * c;
            return {
                scaleX: (n.width - u - h) / e.width,
                scaleY: (n.height - f - m) / e.height,
                offsetX: n.left + (this.getPropValue(r, "border-left-width") + this.getPropValue(r, "padding-left")) * o,
                offsetY: n.top + (this.getPropValue(r, "border-top-width") + this.getPropValue(r, "padding-top")) * c
            }
        }
        getEventPoint(e) {
            const {
                scaleX: r,
                scaleY: n,
                offsetX: s,
                offsetY: o
            } = this.getCanvasOffset(), c = e.clientX, u = e.clientY;
            let f = (c - s) / r,
                h = (u - o) / n;
            return f = Math.max(0, Math.min(this.width, f)), h = Math.max(0, Math.min(this.height, h)), f = Math.round(f), h = Math.round(h), {
                x: f,
                y: h
            }
        }
    }
    class Uy {
        static getPromptGuess(e, r) {
            var n, s, o;
            if ((n = e.player) != null && n.prompt) return e.player.prompt;
            if ((s = e.audience) != null && s.prompt) return e.audience.prompt;
            if ((o = e.audiencePlayer) != null && o.prompt) return e.audiencePlayer.prompt;
            if (e.prompt) return e.prompt;
            if (r === "range-game") return this.getRangeGameGuess(e)
        }
        static getRangeGameGuess(e) {
            var r, n, s, o, c, u, f, h;
            if ((n = (r = e.player) == null ? void 0 : r.content) != null && n.text) return (o = (s = e.player) == null ? void 0 : s.content) == null ? void 0 : o.text;
            if ((u = (c = e.content) == null ? void 0 : c.content) != null && u.text) return (h = (f = e.content) == null ? void 0 : f.content) == null ? void 0 : h.text
        }
        static async send(e) {
            const r = {
                appTag: e.room.appTag,
                state: {
                    appTag: e.room.appTag,
                    name: e.name,
                    role: e.role,
                    code: e.room.code,
                    message: e.message,
                    vibe: e.vibe,
                    state: e.values
                }
            };
            try {
                const n = await this.sendToEcast(r);
                await this.sendToSlack(n, e)
            } catch (n) {
                console.error(n)
            }
        }
        static async sendToEcast(e) {
            return (await (await fetch("https://ecast.jackboxgames.com/api/v2/controller/state", {
                method: "POST",
                body: JSON.stringify(e)
            })).json()).body.url
        }
        static async sendToSlack(e, r) {
            var _;
            const n = Td(r.room.appTag),
                s = {
                    TV_ADROLL_ADVERTISABLE_ID: "WN335VM7RVAMPDZAOWMIHP",
                    TV_ADROLL_PIXEL_ID: "WN335VM7RVAMPDZAOWMIHP",
                    TV_CDN_IMAGES_URL: "https://s3.amazonaws.com/static.jackboxgames.com/game-images",
                    TV_DEBUG: "false",
                    TV_DOMAINS: "https://dev.jackbox.tv,https://qa.jackbox.tv,https://jackbox.tv,https://tinyshirts.jackboxgames.com",
                    TV_ECAST: "ecast.jackboxgames.com",
                    TV_GA_STREAM_ID: "3795853220",
                    TV_GA_MEASUREMENT_ID: "G-V1QJVQMYF1",
                    TV_S3_BUNDLES: "https://bundles.jackbox.tv",
                    TV_S3_DEBUG: "https://jbg-ops.s3.amazonaws.com",
                    TV_SENTRY_ALLOWED_URLS: "/(http|https):\\/\\/(\\S*\\.)?jackbox\\.tv/i",
                    TV_SENTRY_DSN: "https://bb026273d98c4b99ab11c1de369f521f@o420318.ingest.sentry.io/6387933",
                    TV_SENTRY_RATE: "0.2",
                    TV_SLACK_DEBUG: "https://hooks.slack.com/services/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",
                    TV_TWITCH_CLIENT_ID: "yn2iepd23vskpmkzgeg2lkfsct7gsc",
                    BASE_URL: "https://bundles.jackbox.tv/main/internal-prototype/",
                    MODE: "production",
                    DEV: !1,
                    PROD: !0
                }.TV_SLACK_FEEDBACK;
            if (!s) return;
            const o = {
                    good: ":large_green_circle:",
                    meh: ":large_yellow_circle:",
                    bad: ":red_circle:"
                },
                u = `${(_=n==null?void 0:n.name)!=null?_:r.room.appTag} :${r.room.appTag}: 

 From: ${r.name},
${r.message}`,
                f = [];
            r.vibe && r.vibe !== "none" && f.push({
                type: "plain_text",
                text: `${o[r.vibe]} ${r.vibe.toUpperCase()} Vibes`,
                emoji: !0
            }), r.content && f.push({
                type: "plain_text",
                text: `Content: ${r.content}`,
                emoji: !0
            });
            const m = {
                blocks: [{
                    type: "section",
                    text: {
                        type: "mrkdwn",
                        text: u
                    }
                }, {
                    type: "context",
                    elements: f
                }, {
                    type: "actions",
                    elements: [{
                        type: "button",
                        action_id: "actionId-0",
                        url: e,
                        text: {
                            type: "plain_text",
                            text: "View Game State JSON",
                            emoji: !0
                        }
                    }]
                }]
            };
            try {
                const C = await (await fetch(s, {
                    method: "POST",
                    body: JSON.stringify(m)
                })).text();
                Sd("[Feedback] sendToSlack", C)
            } catch (b) {
                console.error("[Feedback] sendToSlack", b)
            }
        }
    }
    class ES {
        static withTypes(e, r) {
            let n = e;
            return r.forEach(s => {
                s === "html" && (n = this.html(n)), s === "username" && (n = this.username(n)), s === "emoji" && (n = this.emoji(n)), s === "input" && (n = this.input(n))
            }), n
        }
        static html(e) {
            if (String(e).match(/<fart>/g)) {
                const n = new Audio(new URL("main/internal/prototype/assets/4af6cbea.wav", self.location).href);
                n.volume = .1, n.play()
            }
            const r = /<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g;
            return String(e).replace(r, "")
        }
        static input(e) {
            return e.replace(/[^\u00A1\u0020-\u007E\u00BF-\u00FF’]/gi, "")
        }
        static username(e) {
            return e.replace(/[^A-Z0-9\u00A1\u0020-\u002F\u00BF-\u00FF\u2026!?*$+\-'_ .,]/gi, "").replace(/'/g, "\u2019")
        }
        static emoji(e) {
            return e.replace(/(\u00a9|\u00ae|[\u2000-\u2017]|[\u2020-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/, "")
        }
    }
    const dW = {
            BACK: "Back",
            CANCEL: "Cancel",
            CLOSE: "Close",
            CONFIRM: "Confirm",
            CREATE: "Create",
            DELETE: "Delete",
            DONE: "Done",
            EDIT: "Edit",
            OK: "OK",
            NO: "No",
            PLAY: "Play",
            PUBLISH: "Publish",
            REMOVE: "Remove",
            RESET: "Reset",
            SUBMIT: "Submit",
            TRY_AGAIN: "Try Again",
            UNDO: "Undo",
            YES: "Yes"
        },
        hW = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "prompts hidden on players\u2019 devices",
                VISIBILITY_CONTROLLER_ON: "prompts shown on players\u2019 devices",
                VISIBILITY_SCREEN_OFF: "prompts hidden on game screen",
                VISIBILITY_SCREEN_ON: "prompts shown on game screen"
            }
        },
        pW = {
            DISCONNECTED: "You have been disconnected.",
            DRAWING_NOTHING: "You have to draw something!",
            PLAYER_KICKED: "You have been kicked from the game by a moderator.",
            ROOM_DESTROYED: "Thanks for playing!",
            ROOM_DISCONNECTED: "Disconnected",
            TEXT_NAUGHTY: "I\u2019m afraid you can\u2019t write that. Please be respectful of other players.",
            TEXT_NOTHING: "You can\u2019t enter nothing!",
            TITLE: "Error"
        },
        gW = "LOADING",
        mW = {
            JOINED_COUNT: "x | {count} of {maxPlayers} players joined | {count} of {maxPlayers} players joined",
            PLAYERS_NEEDED: "x | {count} player needed to start | {count} players needed to start",
            WAITING_FOR_VIP: "Waiting for {name} to start the game",
            WAITING_FOR_GAMEPAD: "Waiting for the game to start",
            GAME_STARTING: "Game is starting",
            BUTTON_START: "Press to Start",
            BUTTON_CANCEL: "Press to Cancel"
        },
        vW = {
            GALLERY_LINK: "Visit the Gallery",
            PLAY_AGAIN: "Play again?",
            BUTTON_SAME_PLAYERS: "Same Players",
            BUTTON_NEW_PLAYERS: "New Players"
        },
        yW = {
            AND: "AND",
            OR: "OR"
        },
        _W = {
            BUTTON_SKIP: "Skip",
            BUTTON_NEXT: "Next",
            BUTTON_DONE: "Let\u2019s Go!"
        },
        EW = {
            NAME: "AUDIENCE"
        },
        bW = {
            EPISODE_REPORT: "Report Episode",
            EPISODE_UNLOAD: "Unload Episode",
            EPISODE_VIEW_AUTHOR: "View Author",
            EPISODES_LOAD: "Load an episode by id:",
            EPISODES_MENU: "Episodes Menu",
            EPISODES_SELECT: "Or select an epsiode:",
            EPISODES_WARNING: "Warning: user generated content is not rated",
            INSTRUCTION: {
                CREATE_TITLE: "first things first, enter a name for the episode that will contain all your prompts and hit create.",
                LOAD: "create or load?",
                PUBLISH: "publish your episode",
                TITLE: "name your episode",
                TOGGLE_VISIBILITY: "tap to show/hide prompts",
                WRITE: "write your prompts"
            },
            WARNING: {
                DELETE: "Are you sure you want to delete this episode?",
                TOS: "By sharing content, you agree to our [tos]Terms of Service[/tos]",
                TOS_AGREE: "agree and share"
            },
            BACK_TO_EPISODES: "back to episodes",
            BACK_TO_MENU: "back to menu",
            CREATE_NEW_EPISODE: "create a new episode",
            PREVIOUS_EPISODES: "previous episodes",
            PROMPT_ADD: "add prompt",
            PROMPT_PLACEHOLDER: "enter a prompt",
            PROMPTS_COUNT_HIDDEN: "({count} hidden)",
            TITLE_PLACEHOLDER: "enter a title"
        },
        TW = {
            BROADCASTER: {
                SUBTEXT: "You have successfully connected your account to the Jackbox Audience Kit Twitch Extension.",
                WARNING: "THIS ROOM DOESN'T HAVE THE AUDIENCE SETTING ENABLED"
            },
            RECONNECTED: {
                TEXT: "RECONNECTED",
                SUBTEXT: "Have fun!"
            },
            RECONNECTING: {
                CONTROLLER: {
                    TEXT: "CONNECTION INTERRUPTED",
                    SUBTEXT: "Attempting to reconnect ({attempt} of 5)"
                },
                GAME: {
                    TEXT: "GAME CONNECTION INTERRUPTED",
                    SUBTEXT: "Please wait while we attempt to reconnect"
                }
            }
        },
        SW = {
            ACTION: dW,
            ALT: hW,
            ERROR: pW,
            LOADING: gW,
            LOBBY: mW,
            POST_GAME: vW,
            SEPARATOR: yW,
            TUTORIAL: _W,
            AUDIENCE: EW,
            UGC: bW,
            TOAST: TW
        },
        OW = {
            BACK: "Retour",
            CANCEL: "Annuler",
            CLOSE: "Fermer",
            CONFIRM: "Confirmer",
            CREATE: "Cr\xE9er",
            DELETE: "Supprimer",
            DONE: "Termin\xE9",
            EDIT: "Modifier",
            OK: "OK",
            NO: "Non",
            PLAY: "Jouer",
            PUBLISH: "Publier",
            REMOVE: "Supprimer",
            RESET: "R\xE9initialiser",
            SUBMIT: "Envoyer",
            TRY_AGAIN: "R\xE9essayer",
            UNDO: "Annuler",
            YES: "Oui"
        },
        wW = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "sujets non affich\xE9s sur les appareils des joueurs",
                VISIBILITY_CONTROLLER_ON: "sujets affich\xE9s sur les appareils des joueurs",
                VISIBILITY_SCREEN_OFF: "sujets non affich\xE9s sur l'\xE9cran de jeu",
                VISIBILITY_SCREEN_ON: "sujets affich\xE9s sur l'\xE9cran de jeu"
            }
        },
        CW = {
            DISCONNECTED: "Vous avez \xE9t\xE9 d\xE9connect\xE9(e).",
            DRAWING_NOTHING: "Vous devez dessiner quelque chose\xA0!",
            PLAYER_KICKED: "Vous avez \xE9t\xE9 \xE9ject\xE9(e) de la partie par un mod\xE9rateur.",
            ROOM_DESTROYED: "Merci d'avoir jou\xE9\xA0!",
            ROOM_DISCONNECTED: "D\xE9connexion",
            TEXT_NAUGHTY: "Je crains que vous ne puissiez pas \xE9crire \xE7a. Respectez les autres joueurs.",
            TEXT_NOTHING: "Vous ne pouvez pas ne rien entrer",
            TITLE: "Erreur"
        },
        IW = "CHARGEMENT",
        $W = {
            JOINED_COUNT: "x | {count}\xA0joueur sur {maxPlayers} a rejoint la partie | {count}\xA0joueurs sur {maxPlayers} ont rejoint la partie",
            PLAYERS_NEEDED: "x | {count}\xA0joueur n\xE9cessaire pour commencer | {count}\xA0joueurs n\xE9cessaires pour commencer",
            WAITING_FOR_VIP: "En attente de {name} pour commencer la partie",
            WAITING_FOR_GAMEPAD: "En attente du d\xE9but de la partie",
            GAME_STARTING: "La partie commence",
            BUTTON_START: "Appuyer pour commencer",
            BUTTON_CANCEL: "Appuyer pour annuler"
        },
        AW = {
            GALLERY_LINK: "Visiter la galerie",
            PLAY_AGAIN: "Rejouer\xA0?",
            BUTTON_SAME_PLAYERS: "Les m\xEAmes joueurs",
            BUTTON_NEW_PLAYERS: "De nouveaux joueurs"
        },
        RW = {
            AND: "ET",
            OR: "OU"
        },
        NW = {
            BUTTON_SKIP: "Passer",
            BUTTON_NEXT: "Suivant",
            BUTTON_DONE: "Allons-y\xA0!"
        },
        PW = {
            NAME: "SPECTATEURS"
        },
        LW = {
            EPISODE_REPORT: "Signaler l'\xE9pisode",
            EPISODE_UNLOAD: "Retirer l'\xE9pisode",
            EPISODE_VIEW_AUTHOR: "Voir l'auteur",
            EPISODES_LOAD: "Charger un \xE9pisode par id\xA0:",
            EPISODES_MENU: "Menu des \xE9pisodes",
            EPISODES_SELECT: "Ou s\xE9lectionner un \xE9pisode\xA0:",
            EPISODES_WARNING: "Attention\xA0: le contenu g\xE9n\xE9r\xE9 par les utilisateurs ne fait pas l'objet d'un classement",
            INSTRUCTION: {
                CREATE_TITLE: "commencez par donner un nom \xE0 l'\xE9pisode qui contiendra vos sujets, puis touchez cr\xE9er.",
                LOAD: "cr\xE9er ou charger\xA0?",
                PUBLISH: "publiez votre \xE9pisode",
                TITLE: "donnez un nom \xE0 votre \xE9pisode",
                TOGGLE_VISIBILITY: "touchez pour afficher/masquer les sujets",
                WRITE: "\xE9crivez vos sujets"
            },
            WARNING: {
                DELETE: "Voulez-vous vraiment supprimer cet \xE9pisode\xA0?",
                TOS: "En partageant votre contenu, vous acceptez nos [tos]Conditions de service[/tos]",
                TOS_AGREE: "accepter et partager"
            },
            BACK_TO_EPISODES: "retour aux \xE9pisodes",
            BACK_TO_MENU: "retour au menu",
            CREATE_NEW_EPISODE: "cr\xE9er un nouvel \xE9pisode",
            PREVIOUS_EPISODES: "\xE9pisodes pr\xE9c\xE9dents",
            PROMPT_ADD: "ajouter un sujet",
            PROMPT_PLACEHOLDER: "taper un sujet",
            PROMPTS_COUNT_HIDDEN: "({count} non affich\xE9)",
            TITLE_PLACEHOLDER: "taper un titre"
        },
        kW = {
            BROADCASTER: {
                SUBTEXT: "La connexion de votre compte \xE0 l'extension Twitch Jackbox Audience Kit a r\xE9ussi.",
                WARNING: "LE PARAM\xC8TRE 'PUBLIC' N'EST PAS ACTIV\xC9 DANS CETTE SALLE."
            },
            RECONNECTED: {
                TEXT: "RECONNECT\xC9(E)",
                SUBTEXT: "Amusez-vous bien\xA0!"
            },
            RECONNECTING: {
                CONTROLLER: {
                    TEXT: "CONNEXION INTERROMPUE",
                    SUBTEXT: "Tentative de reconnexion ({attempt} sur 5)"
                },
                GAME: {
                    TEXT: "CONNEXION AU JEU INTERROMPUE",
                    SUBTEXT: "Veuillez patienter pendant que nous tentons de vous reconnecter."
                }
            }
        },
        xW = {
            ACTION: OW,
            ALT: wW,
            ERROR: CW,
            LOADING: IW,
            LOBBY: $W,
            POST_GAME: AW,
            SEPARATOR: RW,
            TUTORIAL: NW,
            AUDIENCE: PW,
            UGC: LW,
            TOAST: kW
        },
        DW = {
            BACK: "Indietro",
            CANCEL: "Annulla",
            CLOSE: "Chiuda",
            CONFIRM: "Conferma",
            CREATE: "Crea",
            DELETE: "Elimina",
            DONE: "Fine",
            EDIT: "Modifica",
            OK: "OK",
            NO: "No",
            PLAY: "Gioca",
            PUBLISH: "Pubblica",
            REMOVE: "Rimuovi",
            RESET: "Reset",
            SUBMIT: "Invia",
            TRY_AGAIN: "Riprova",
            UNDO: "Annulla",
            YES: "S\xEC"
        },
        MW = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "definizioni nascoste sui dispositivi dei giocatori",
                VISIBILITY_CONTROLLER_ON: "definizioni visualizzate sui dispositivi dei giocatori",
                VISIBILITY_SCREEN_OFF: "definizioni nascoste sullo schermo di gioco",
                VISIBILITY_SCREEN_ON: "definizioni visualizzate sullo schermo di gioco"
            }
        },
        FW = {
            DISCONNECTED: "\xC8 stata effettuata la disconnessione.",
            DRAWING_NOTHING: "Devi disegnare qualcosa!",
            PLAYER_KICKED: "Un moderatore ti ha cacciato dalla partita.",
            ROOM_DESTROYED: "Grazie per aver scelto di giocare con noi!",
            ROOM_DISCONNECTED: "Disconnessione effettuata",
            TEXT_NAUGHTY: "Purtroppo non puoi scrivere questa cosa. Abbi rispetto per gli altri giocatori.",
            TEXT_NOTHING: "Devi per forza inserire qualcosa!",
            TITLE: "Errore"
        },
        UW = "CARICAMENTO",
        BW = {
            JOINED_COUNT: "x | Sta partecipando {count} giocatore su {maxPlayers} | Stanno partecipando {count} giocatori su {maxPlayers}",
            PLAYERS_NEEDED: "x | Manca {count} giocatore per iniziare | Mancano {count} giocatori per iniziare",
            WAITING_FOR_VIP: "In attesa di {name} per iniziare la partita",
            WAITING_FOR_GAMEPAD: "In attesa d'iniziare la partita",
            GAME_STARTING: "La partita sta per iniziare",
            BUTTON_START: "Premi per avviare",
            BUTTON_CANCEL: "Premi per annullare"
        },
        jW = {
            GALLERY_LINK: "Visita la galleria",
            PLAY_AGAIN: "Vuoi giocare di nuovo?",
            BUTTON_SAME_PLAYERS: "Stessi giocatori",
            BUTTON_NEW_PLAYERS: "Nuovi giocatori"
        },
        GW = {
            AND: "E",
            OR: "O"
        },
        WW = {
            BUTTON_SKIP: "Salta",
            BUTTON_NEXT: "Avanti",
            BUTTON_DONE: "Iniziamo!"
        },
        KW = {
            NAME: "PUBBLICO"
        },
        HW = {
            EPISODE_REPORT: "Segnala episodio",
            EPISODE_UNLOAD: "Rimuovi episodio",
            EPISODE_VIEW_AUTHOR: "Mostra autore",
            EPISODES_LOAD: "Carica un episodio in base al suo id:",
            EPISODES_MENU: "Menu Episodi",
            EPISODES_SELECT: "Oppure seleziona un episodio:",
            EPISODES_WARNING: "Attenzione: il contenuto generato dagli utenti non \xE8 classificato",
            INSTRUCTION: {
                CREATE_TITLE: "per prima cosa, inserisci un nome per l\u2019episodio che contenga tutti i tuoi suggerimenti e premi crea.",
                LOAD: "creare o caricare?",
                PUBLISH: "pubblica il tuo episodio",
                TITLE: "dai un nome al tuo episodio",
                TOGGLE_VISIBILITY: "tocca per mostrare/nascondere suggerimenti",
                WRITE: "scrivi le tue definizioni"
            },
            WARNING: {
                DELETE: "Vuoi davvero eliminare questo episodio?",
                TOS: "Condividendo i contenuti, accetti le nostre [tos]Condizioni del servizio[/tos]",
                TOS_AGREE: "accetta e condividi"
            },
            BACK_TO_EPISODES: "torna agli episodi",
            BACK_TO_MENU: "torna al menu",
            CREATE_NEW_EPISODE: "crea un nuovo episodio",
            PREVIOUS_EPISODES: "episodi precedenti",
            PROMPT_ADD: "aggiungi suggerimento",
            PROMPT_PLACEHOLDER: "inserisci suggerimento",
            PROMPTS_COUNT_HIDDEN: "({count} nascosti)",
            TITLE_PLACEHOLDER: "inserisci un titolo"
        },
        VW = {
            BROADCASTER: {
                SUBTEXT: "Il collegamento del tuo account con l'estensione per Twitch Jackbox Audience Kit \xE8 andato a buon fine.",
                WARNING: "L'IMPOSTAZIONE DEL PUBBLICO NON \xC8 ATTIVA PER QUESTA STANZA"
            },
            RECONNECTED: {
                TEXT: "RICONNESSO",
                SUBTEXT: "Buon divertimento!"
            },
            RECONNECTING: {
                CONTROLLER: {
                    TEXT: "CONNESSIONE INTERROTTA",
                    SUBTEXT: "Tentativo di riconnessione in corso ({attempt} di 5)"
                },
                GAME: {
                    TEXT: "CONNESSIONE AL GIOCO INTERROTTA",
                    SUBTEXT: "Resta in attesa mentre proviamo a riconnetterci"
                }
            }
        },
        YW = {
            ACTION: DW,
            ALT: MW,
            ERROR: FW,
            LOADING: UW,
            LOBBY: BW,
            POST_GAME: jW,
            SEPARATOR: GW,
            TUTORIAL: WW,
            AUDIENCE: KW,
            UGC: HW,
            TOAST: VW
        },
        qW = {
            BACK: "Zur\xFCck",
            CANCEL: "Abbrechen",
            CLOSE: "Schlie\xDFen",
            CONFIRM: "Best\xE4tigen",
            CREATE: "Erstellen",
            DELETE: "L\xF6schen",
            DONE: "Fertig",
            EDIT: "Bearbeiten",
            OK: "OK",
            NO: "Nein",
            PLAY: "Spielen",
            PUBLISH: "Ver\xF6ffentlichen",
            REMOVE: "Entfernen",
            RESET: "Neu starten",
            SUBMIT: "Abschicken",
            TRY_AGAIN: "Erneut versuchen",
            UNDO: "R\xFCckg\xE4ngig",
            YES: "Ja"
        },
        zW = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "Prompts auf Spielerger\xE4ten verborgen",
                VISIBILITY_CONTROLLER_ON: "Prompts auf Spielerger\xE4ten angezeigt",
                VISIBILITY_SCREEN_OFF: "Prompts auf Spielbildschirm verborgen",
                VISIBILITY_SCREEN_ON: "Prompts auf Spielbildschirm angezeigt"
            }
        },
        XW = {
            DISCONNECTED: "Deine Verbindung wurde getrennt.",
            DRAWING_NOTHING: "Du musst irgendwas zeichnen!",
            PLAYER_KICKED: "Du wurdest von einem Moderator gekickt.",
            ROOM_DESTROYED: "Danke f\xFCrs Spielen!",
            ROOM_DISCONNECTED: "Verbindung getrennt",
            TEXT_NAUGHTY: "Das kannst du leider nicht schreiben. Bitte nimm R\xFCcksicht auf deine Mitspieler.",
            TEXT_NOTHING: "Du musst etwas eingeben!",
            TITLE: "Fehler"
        },
        JW = "LADE",
        ZW = {
            JOINED_COUNT: "x | {count} von {maxPlayers} Spielern sind beigetreten | {count} von {maxPlayers} Spielern sind beigetreten",
            PLAYERS_NEEDED: "x | {count} Spieler zum Starten ben\xF6tigt | {count} Spieler zum Starten ben\xF6tigt",
            WAITING_FOR_VIP: "Warten, bis {name} das Spiel startet",
            WAITING_FOR_GAMEPAD: "Warten, bis das Spiel startet",
            GAME_STARTING: "Das Spiel beginnt",
            BUTTON_START: "Zum Starten dr\xFCcken",
            BUTTON_CANCEL: "Zum Abbrechen dr\xFCcken"
        },
        QW = {
            GALLERY_LINK: "Galerie besuchen",
            PLAY_AGAIN: "Erneut spielen?",
            BUTTON_SAME_PLAYERS: "Selbe Spieler",
            BUTTON_NEW_PLAYERS: "Neue Spieler"
        },
        e3 = {
            AND: "UND",
            OR: "ODER"
        },
        t3 = {
            BUTTON_SKIP: "\xDCberspringen",
            BUTTON_NEXT: "Weiter",
            BUTTON_DONE: "Los geht's!"
        },
        r3 = {
            NAME: "PUBLIKUM"
        },
        n3 = {
            EPISODE_REPORT: "Episode melden",
            EPISODE_UNLOAD: "Episode deaktivieren",
            EPISODE_VIEW_AUTHOR: "Autor ansehen",
            EPISODES_LOAD: "Lade eine Episode \xFCber dessen ID:",
            EPISODES_MENU: "Episoden-Men\xFC",
            EPISODES_SELECT: "Oder w\xE4hle eine Episode aus:",
            EPISODES_WARNING: "Achtung: Von Nutzern erstellte Inhalte werden nicht auf Familientauglichkeit gepr\xFCft",
            INSTRUCTION: {
                CREATE_TITLE: 'Benenne als allererstes deine Episode, die alle deine Prompts enthalten wird und dr\xFCcke dann "Erstellen".',
                LOAD: "Erstellen oder laden?",
                PUBLISH: "Ver\xF6ffentliche deine Episode",
                TITLE: "Benenne deine Episode",
                TOGGLE_VISIBILITY: "Dr\xFCcken, um Prompts zu zeigen / zu verstecken",
                WRITE: "Schreibe deine Prompts"
            },
            WARNING: {
                DELETE: "Bist du sicher, dass du diese Episode l\xF6schen m\xF6chtest?",
                TOS: "Durch das Teilen von Inhalten stimmst du unseren [tos]Nutzungsbedingungen[/tos] zu",
                TOS_AGREE: "Zustimmen und teilen"
            },
            BACK_TO_EPISODES: "Zur\xFCck zu den Episoden",
            BACK_TO_MENU: "Zur\xFCck zum Men\xFC",
            CREATE_NEW_EPISODE: "Eigene Episode erstellen",
            PREVIOUS_EPISODES: "Vorige Episoden",
            PROMPT_ADD: "Prompt hinzuf\xFCgen",
            PROMPT_PLACEHOLDER: "Prompt eingeben",
            PROMPTS_COUNT_HIDDEN: "({count} versteckt)",
            TITLE_PLACEHOLDER: "Titel eingeben"
        },
        i3 = {
            BROADCASTER: {
                SUBTEXT: "Du hast dein Konto erfolgreich mit der Jackbox Audience Kit Twitch-Erweiterung verkn\xFCpft.",
                WARNING: "F\xDCR DIESEN RAUM IST DIE PUBLIKUMS-EINSTELLUNG NICHT AKTIV"
            },
            RECONNECTED: {
                TEXT: "NEU VERBUNDEN",
                SUBTEXT: "Viel Spa\xDF!"
            },
            RECONNECTING: {
                CONTROLLER: {
                    TEXT: "VERBINDUNG UNTERBROCHEN",
                    SUBTEXT: "Versuche neu zu verbinden ({attempt} von 5)"
                },
                GAME: {
                    TEXT: "VERBINDUNG ZUM SPIEL UNTERBROCHEN",
                    SUBTEXT: "Bitte warte w\xE4hrend wir versuchen, die Verbindung wiederherzustellen."
                }
            }
        },
        s3 = {
            ACTION: qW,
            ALT: zW,
            ERROR: XW,
            LOADING: JW,
            LOBBY: ZW,
            POST_GAME: QW,
            SEPARATOR: e3,
            TUTORIAL: t3,
            AUDIENCE: r3,
            UGC: n3,
            TOAST: i3
        },
        a3 = {
            BACK: "Atr\xE1s",
            CANCEL: "Cancelar",
            CLOSE: "Cerrar",
            CONFIRM: "Confirmar",
            CREATE: "Crear",
            DELETE: "Borrar",
            DONE: "Hecho",
            EDIT: "Editar",
            OK: "Aceptar",
            NO: "No",
            PLAY: "Jugar",
            PUBLISH: "Publicar",
            REMOVE: "Eliminar",
            RESET: "Reiniciar",
            SUBMIT: "Enviar",
            TRY_AGAIN: "Volver a intentarlo",
            UNDO: "Deshacer",
            YES: "S\xED"
        },
        o3 = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "los enunciados no se muestran en el dispositivo del jugador",
                VISIBILITY_CONTROLLER_ON: "los enunciados se muestran en el dispositivo del jugador",
                VISIBILITY_SCREEN_OFF: "los enunciados no se muestran en la pantalla",
                VISIBILITY_SCREEN_ON: "los enunciados se muestran en la pantalla"
            }
        },
        c3 = {
            DISCONNECTED: "Te has desconectado.",
            DRAWING_NOTHING: "\xA1Tienes que dibujar algo!",
            PLAYER_KICKED: "Un moderador te ha expulsado de la partida.",
            ROOM_DESTROYED: "\xA1Gracias por jugar!",
            ROOM_DISCONNECTED: "Desconectado",
            TEXT_NAUGHTY: "Lo siento, no puedes escribir eso. Hay que ser respetuoso con los dem\xE1s jugadores.",
            TEXT_NOTHING: "Tienes que escribir algo",
            TITLE: "Error"
        },
        l3 = "CARGANDO",
        u3 = {
            JOINED_COUNT: "x | Se ha unido {count} de {maxPlayers} jugadores | Se han unido {count} de {maxPlayers} jugadores",
            PLAYERS_NEEDED: "x | Se necesita {count} jugador para empezar | Se necesitan {count} jugadores para empezar",
            WAITING_FOR_VIP: "Esperando a que {name} inicie la partida",
            WAITING_FOR_GAMEPAD: "Esperando a que empiece la partida",
            GAME_STARTING: "La partida va a empezar",
            BUTTON_START: "Pulsa para empezar",
            BUTTON_CANCEL: "Pulsa para cancelar"
        },
        f3 = {
            GALLERY_LINK: "Visita la galer\xEDa",
            PLAY_AGAIN: "\xBFJugar otra vez?",
            BUTTON_SAME_PLAYERS: "Los mismos jugadores",
            BUTTON_NEW_PLAYERS: "Otros jugadores"
        },
        d3 = {
            AND: "Y",
            OR: "O"
        },
        h3 = {
            BUTTON_SKIP: "Omitir",
            BUTTON_NEXT: "Siguiente",
            BUTTON_DONE: "\xA1Vamos!"
        },
        p3 = {
            NAME: "P\xDABLICO"
        },
        g3 = {
            EPISODE_REPORT: "Denunciar episodio",
            EPISODE_UNLOAD: "Retirar episodio",
            EPISODE_VIEW_AUTHOR: "Ver autor",
            EPISODES_LOAD: "Cargar un episodio por ID:",
            EPISODES_MENU: "Men\xFA de episodios",
            EPISODES_SELECT: "O selecciona un episodio:",
            EPISODES_WARNING: "Aviso: El contenido de los usuarios no tiene clasificaci\xF3n de edad",
            INSTRUCTION: {
                CREATE_TITLE: "en primer lugar, ponle un nombre al episodio que contendr\xE1 tus enunciados y dale a crear.",
                LOAD: "\xBFcrear o cargar?",
                PUBLISH: "publica tu episodio",
                TITLE: "ponle nombre al episodio",
                TOGGLE_VISIBILITY: "toca para mostrar u ocultar los enunciados",
                WRITE: "escribe los enunciados"
            },
            WARNING: {
                DELETE: "\xBFSeguro que quieres borrar este episodio?",
                TOS: "Al compartir contenidos, aceptas las [tos]Condiciones del servicio[/tos]",
                TOS_AGREE: "aceptar y compartir"
            },
            BACK_TO_EPISODES: "volver a los episodios",
            BACK_TO_MENU: "volver al men\xFA",
            CREATE_NEW_EPISODE: "crear nuevo episodio",
            PREVIOUS_EPISODES: "episodios anteriores",
            PROMPT_ADD: "a\xF1adir enunciado",
            PROMPT_PLACEHOLDER: "escribe un enunciado",
            PROMPTS_COUNT_HIDDEN: "({count} ocultos)",
            TITLE_PLACEHOLDER: "escribe un t\xEDtulo"
        },
        m3 = {
            BROADCASTER: {
                SUBTEXT: "Has conectado tu cuenta con \xE9xito a la extensi\xF3n de Twitch del kit para p\xFAblico de Jackbox.",
                WARNING: "ESTA SALA NO TIENE LA FUNCI\xD3N DE P\xDABLICO HABILITADA"
            },
            RECONNECTED: {
                TEXT: "CONEXI\xD3N RESTABLECIDA",
                SUBTEXT: "\xA1Divi\xE9rtete!"
            },
            RECONNECTING: {
                CONTROLLER: {
                    TEXT: "SE HA INTERRUMPIDO LA CONEXI\xD3N",
                    SUBTEXT: "Recuperando conexi\xF3n (intento {attempt} de 5)"
                },
                GAME: {
                    TEXT: "SE HA INTERRUMPIDO LA CONEXI\xD3N CON EL JUEGO",
                    SUBTEXT: "Espera mientras intentamos recuperar la conexi\xF3n"
                }
            }
        },
        v3 = {
            ACTION: a3,
            ALT: o3,
            ERROR: c3,
            LOADING: l3,
            LOBBY: u3,
            POST_GAME: f3,
            SEPARATOR: d3,
            TUTORIAL: h3,
            AUDIENCE: p3,
            UGC: g3,
            TOAST: m3
        },
        y3 = {
            BACK: "Volver",
            CANCEL: "Cancelar",
            CLOSE: "Cerrar",
            CONFIRM: "Confirmar",
            CREATE: "Crear",
            DELETE: "Borrar",
            DONE: "Listo",
            EDIT: "Editar",
            OK: "Aceptar",
            NO: "No",
            PLAY: "Jugar",
            PUBLISH: "Publicar",
            REMOVE: "Quitar",
            RESET: "Reiniciar",
            SUBMIT: "Enviar",
            TRY_AGAIN: "Volver a intentarlo",
            UNDO: "Deshacer",
            YES: "S\xED"
        },
        _3 = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "indicaciones ocultas en los dispositivos de los jugadores",
                VISIBILITY_CONTROLLER_ON: "indicaciones presentes en los dispositivos de los jugadores",
                VISIBILITY_SCREEN_OFF: "indicaciones ocultas en la pantalla del juego",
                VISIBILITY_SCREEN_ON: "indicaciones presentes en la pantalla del juego"
            }
        },
        E3 = {
            DISCONNECTED: "Te desconectaste.",
            DRAWING_NOTHING: "\xA1Tienes que dibujar algo!",
            PLAYER_KICKED: "Un moderador te expuls\xF3 del juego.",
            ROOM_DESTROYED: "\xA1Gracias por jugar!",
            ROOM_DISCONNECTED: "Desconectado",
            TEXT_NAUGHTY: "Lo siento, no puedes escribir eso. Seamos respetuosos con los dem\xE1s jugadores.",
            TEXT_NOTHING: "\xA1Tienes que escribir algo!",
            TITLE: "Error"
        },
        b3 = "CARGANDO",
        T3 = {
            JOINED_COUNT: "x | Se unieron {count} de {maxPlayers} jugadores | Se unieron {count} de {maxPlayers} jugadores",
            PLAYERS_NEEDED: "x | Se necesita {count} jugador para empezar | Se necesitan {count} jugadores para empezar",
            WAITING_FOR_VIP: "Esperando a que {name} inicie la partida",
            WAITING_FOR_GAMEPAD: "Esperando a que empiece la partida",
            GAME_STARTING: "La partida va a empezar",
            BUTTON_START: "Pulsa para empezar",
            BUTTON_CANCEL: "Pulsa para cancelar"
        },
        S3 = {
            GALLERY_LINK: "Visita la galer\xEDa",
            PLAY_AGAIN: "\xBFJugar otra vez?",
            BUTTON_SAME_PLAYERS: "Los mismos jugadores",
            BUTTON_NEW_PLAYERS: "Otros jugadores"
        },
        O3 = {
            AND: "Y",
            OR: "O"
        },
        w3 = {
            BUTTON_SKIP: "Omitir",
            BUTTON_NEXT: "Siguiente",
            BUTTON_DONE: "\xA1Vamos!"
        },
        C3 = {
            NAME: "P\xDABLICO"
        },
        I3 = {
            EPISODE_REPORT: "Denunciar episodio",
            EPISODE_UNLOAD: "Descargar episodio",
            EPISODE_VIEW_AUTHOR: "Ver autor",
            EPISODES_LOAD: "Cargar un episodio por ID:",
            EPISODES_MENU: "Men\xFA de episodios",
            EPISODES_SELECT: "O selecciona un episodio:",
            EPISODES_WARNING: "Aviso: El contenido de los usuarios no tiene clasificaci\xF3n por edades",
            INSTRUCTION: {
                CREATE_TITLE: "Lo primero que debes hacer es escribir un nombre para el episodio que contendr\xE1 todas sus indicaciones y pulsar crear.",
                LOAD: "\xBFCrear o cargar?",
                PUBLISH: "Publica tu episodio",
                TITLE: "Nombra tu episodio",
                TOGGLE_VISIBILITY: "Pulsa para mostrar/ocultar las indicaciones",
                WRITE: "Escribe tus indicaciones"
            },
            WARNING: {
                DELETE: "\xBFDe verdad quieres borrar este episodio?",
                TOS: "Al compartir contenido, aceptas nuestros [tos]T\xE9rminos de servicio[/tos]",
                TOS_AGREE: "Aceptar y compartir"
            },
            BACK_TO_EPISODES: "Volver a los episodios",
            BACK_TO_MENU: "Volver al men\xFA",
            CREATE_NEW_EPISODE: "Crear un nuevo episodio",
            PREVIOUS_EPISODES: "Episodios anteriores",
            PROMPT_ADD: "A\xF1adir indicaci\xF3n",
            PROMPT_PLACEHOLDER: "Escribe una indicaci\xF3n",
            PROMPTS_COUNT_HIDDEN: "({count} oculto(s))",
            TITLE_PLACEHOLDER: "Escribir un t\xEDtulo"
        },
        $3 = {
            BROADCASTER: {
                SUBTEXT: "Conectaste correctamente tu cuenta a la extensi\xF3n para Twitch del kit para p\xFAblico de Jackbox.",
                WARNING: "ESTA SALA NO TIENE ACTIVADA LA OPCI\xD3N DE P\xDABLICO"
            },
            RECONNECTED: {
                TEXT: "CONEXI\xD3N RESTABLECIDA",
                SUBTEXT: "\xA1Divi\xE9rtete!"
            },
            RECONNECTING: {
                CONTROLLER: {
                    TEXT: "CONEXI\xD3N INTERRUMPIDA",
                    SUBTEXT: "Intento de reconexi\xF3n ({attempt} de 5)"
                },
                GAME: {
                    TEXT: "SE INTERRUMPI\xD3 LA CONEXI\xD3N AL JUEGO",
                    SUBTEXT: "Espera mientras intentamos restablecer la conexi\xF3n"
                }
            }
        },
        A3 = {
            ACTION: y3,
            ALT: _3,
            ERROR: E3,
            LOADING: b3,
            LOBBY: T3,
            POST_GAME: S3,
            SEPARATOR: O3,
            TUTORIAL: w3,
            AUDIENCE: C3,
            UGC: I3,
            TOAST: $3
        },
        R3 = {
            en: SW,
            fr: xW,
            it: YW,
            de: s3,
            es: v3,
            "es-XL": A3
        },
        N3 = vt({
            props: {
                canvasOptions: Object,
                hideSubmit: Boolean,
                hideUndo: Boolean,
                player: Object
            },
            data() {
                return {
                    canvas: null,
                    isSubmitting: !1,
                    isUndoing: !1
                }
            },
            computed: {
                canSubmit() {
                    return !(this.isSubmitting || this.isUndoing || this.player.doodle.lines.length <= 0)
                },
                pointerBoxWidth() {
                    var e, r, n;
                    let t = 320;
                    return (e = this.player.doodle.size) != null && e.width && (t = this.player.doodle.size.width), t * ((n = (r = this.canvasOptions.scale) == null ? void 0 : r.width) != null ? n : 1)
                },
                pointerBoxHeight() {
                    var e, r, n;
                    let t = 320;
                    return (e = this.player.doodle.size) != null && e.height && (t = this.player.doodle.size.height), t * ((n = (r = this.canvasOptions.scale) == null ? void 0 : r.height) != null ? n : 1)
                }
            },
            watch: {
                canvasOptions: function(e) {
                    var r, n, s, o, c, u, f;
                    !this.canvas || (this.canvas.color = (r = e.color) != null ? r : "#000000", this.canvas.layer = (n = e.layer) != null ? n : 0, this.canvas.layers = (s = e.layers) != null ? s : 1, this.canvas.maxPoints = (o = e.maxPoints) != null ? o : Number.MAX_SAFE_INTEGER, this.canvas.precision = (c = e.precision) != null ? c : 2, this.canvas.scale = (u = e.scale) != null ? u : {
                        width: 1,
                        height: 1
                    }, this.canvas.weight = (f = e.weight) != null ? f : 4)
                },
                "player.doodle.key": function() {
                    this.createCanvas()
                },
                "player.doodle.lines": {
                    handler() {
                        !this.canvas || this.canvas.drawLines()
                    },
                    deep: !0
                }
            },
            beforeMount() {
                const t = is();
                if (!(t != null && t.appContext.directives.pointerbox)) throw new Error("Doodle.vue relies on PointerBoxPlugin. Please install it inside your main.ts file.")
            },
            mounted() {
                this.createCanvas()
            },
            methods: {
                createCanvas() {
                    const t = this.$refs.canvas;
                    this.canvas = Mn(new lW(t, this.player.doodle, this.canvasOptions))
                },
                onPointerBoxStart(t) {
                    if (!this.canvas) return;
                    const e = {
                        x: t.detail.translations.doodleCanvas.x,
                        y: t.detail.translations.doodleCanvas.y
                    };
                    this.canvas.onStart(e)
                },
                onPointerBoxMove(t) {
                    if (!this.canvas) return;
                    const e = {
                        x: t.detail.translations.doodleCanvas.x,
                        y: t.detail.translations.doodleCanvas.y
                    };
                    this.canvas.onMove(e)
                },
                async onPointerBoxEnd() {
                    if (!this.canvas) return;
                    const t = this.canvas.onEnd();
                    if (t) try {
                        await this.$ecast.strokeDoodle(this.player.doodle.key, t)
                    } catch (e) {
                        this.$handleEcastError(e)
                    }
                },
                async onSubmit() {
                    this.isSubmitting = !0;
                    try {
                        await this.$ecast.lock(this.player.doodle.key)
                    } catch (t) {
                        this.isSubmitting = !1, this.$handleEcastError(t)
                    }
                },
                async onUndo() {
                    if (!!this.canvas) {
                        this.isUndoing = !0;
                        try {
                            await this.$ecast.undoDoodle(this.player.doodle.key)
                        } catch (t) {
                            this.$handleEcastError(t)
                        } finally {
                            this.isUndoing = !1
                        }
                    }
                }
            }
        }),
        P3 = {
            class: "doodle"
        },
        L3 = {
            ref: "canvas"
        },
        k3 = ["disabled"],
        x3 = ["disabled"];

    function D3(t, e, r, n, s, o) {
        const c = qr("pointerbox-translate"),
            u = qr("pointerbox"),
            f = qr("t");
        return se(), le("div", P3, [tt((se(), le("div", {
            class: "stage",
            "onPointerbox:start": e[0] || (e[0] = (...h) => t.onPointerBoxStart && t.onPointerBoxStart(...h)),
            "onPointerbox:move": e[1] || (e[1] = (...h) => t.onPointerBoxMove && t.onPointerBoxMove(...h)),
            "onPointerbox:end": e[2] || (e[2] = (...h) => t.onPointerBoxEnd && t.onPointerBoxEnd(...h))
        }, [tt(ae("canvas", L3, null, 512), [
            [c, {
                id: "doodleCanvas",
                width: t.pointerBoxWidth,
                height: t.pointerBoxHeight
            }]
        ])], 32)), [
            [u]
        ]), t.hideUndo ? We("", !0) : tt((se(), le("button", {
            key: 0,
            class: "doodle-action undo",
            disabled: !t.canSubmit,
            onClick: e[3] || (e[3] = cn((...h) => t.onUndo && t.onUndo(...h), ["prevent"]))
        }, null, 8, k3)), [
            [f, "ACTION.UNDO"]
        ]), t.hideSubmit ? We("", !0) : tt((se(), le("button", {
            key: 1,
            class: "doodle-action submit",
            disabled: !t.canSubmit,
            onClick: e[4] || (e[4] = cn((...h) => t.onSubmit && t.onSubmit(...h), ["prevent"]))
        }, null, 8, x3)), [
            [f, "ACTION.SUBMIT"]
        ])])
    }
    const M3 = $t(N3, [
        ["render", D3]
    ]);
    var Od = {
        exports: {}
    };
    /**
     * @license
     * Lodash <https://lodash.com/>
     * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
     * Released under MIT license <https://lodash.com/license>
     * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
     * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
     */
    (function(t, e) {
        (function() {
            var r, n = "4.17.21",
                s = 200,
                o = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",
                c = "Expected a function",
                u = "Invalid `variable` option passed into `_.template`",
                f = "__lodash_hash_undefined__",
                h = 500,
                m = "__lodash_placeholder__",
                _ = 1,
                b = 2,
                C = 4,
                L = 1,
                M = 2,
                B = 1,
                I = 2,
                K = 4,
                Y = 8,
                G = 16,
                j = 32,
                z = 64,
                ie = 128,
                oe = 256,
                ue = 512,
                Ie = 30,
                Ce = "...",
                fe = 800,
                we = 16,
                F = 1,
                te = 2,
                de = 3,
                Ee = 1 / 0,
                ve = 9007199254740991,
                Se = 17976931348623157e292,
                xe = 0 / 0,
                Ue = 4294967295,
                Ze = Ue - 1,
                wt = Ue >>> 1,
                Sr = [
                    ["ary", ie],
                    ["bind", B],
                    ["bindKey", I],
                    ["curry", Y],
                    ["curryRight", G],
                    ["flip", ue],
                    ["partial", j],
                    ["partialRight", z],
                    ["rearg", oe]
                ],
                er = "[object Arguments]",
                pr = "[object Array]",
                nt = "[object AsyncFunction]",
                Et = "[object Boolean]",
                it = "[object Date]",
                Lt = "[object DOMException]",
                Wt = "[object Error]",
                kt = "[object Function]",
                g = "[object GeneratorFunction]",
                p = "[object Map]",
                O = "[object Number]",
                D = "[object Null]",
                U = "[object Object]",
                V = "[object Promise]",
                ce = "[object Proxy]",
                re = "[object RegExp]",
                Q = "[object Set]",
                A = "[object String]",
                W = "[object Symbol]",
                he = "[object Undefined]",
                pe = "[object WeakMap]",
                $e = "[object WeakSet]",
                Le = "[object ArrayBuffer]",
                w = "[object DataView]",
                T = "[object Float32Array]",
                N = "[object Float64Array]",
                S = "[object Int8Array]",
                P = "[object Int16Array]",
                X = "[object Int32Array]",
                ee = "[object Uint8Array]",
                _e = "[object Uint8ClampedArray]",
                Te = "[object Uint16Array]",
                ot = "[object Uint32Array]",
                tr = /\b__p \+= '';/g,
                ke = /\b(__p \+=) '' \+/g,
                ua = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
                Fp = /&(?:amp|lt|gt|quot|#39);/g,
                Up = /[&<>"']/g,
                yw = RegExp(Fp.source),
                _w = RegExp(Up.source),
                Ew = /<%-([\s\S]+?)%>/g,
                bw = /<%([\s\S]+?)%>/g,
                Bp = /<%=([\s\S]+?)%>/g,
                Tw = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                Sw = /^\w*$/,
                Ow = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                Hl = /[\\^$.*+?()[\]{}|]/g,
                ww = RegExp(Hl.source),
                Vl = /^\s+/,
                Cw = /\s/,
                Iw = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
                $w = /\{\n\/\* \[wrapped with (.+)\] \*/,
                Aw = /,? & /,
                Rw = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
                Nw = /[()=,{}\[\]\/\s]/,
                Pw = /\\(\\)?/g,
                Lw = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
                jp = /\w*$/,
                kw = /^[-+]0x[0-9a-f]+$/i,
                xw = /^0b[01]+$/i,
                Dw = /^\[object .+?Constructor\]$/,
                Mw = /^0o[0-7]+$/i,
                Fw = /^(?:0|[1-9]\d*)$/,
                Uw = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
                yo = /($^)/,
                Bw = /['\n\r\u2028\u2029\\]/g,
                _o = "\\ud800-\\udfff",
                jw = "\\u0300-\\u036f",
                Gw = "\\ufe20-\\ufe2f",
                Ww = "\\u20d0-\\u20ff",
                Gp = jw + Gw + Ww,
                Wp = "\\u2700-\\u27bf",
                Kp = "a-z\\xdf-\\xf6\\xf8-\\xff",
                Kw = "\\xac\\xb1\\xd7\\xf7",
                Hw = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
                Vw = "\\u2000-\\u206f",
                Yw = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
                Hp = "A-Z\\xc0-\\xd6\\xd8-\\xde",
                Vp = "\\ufe0e\\ufe0f",
                Yp = Kw + Hw + Vw + Yw,
                Yl = "['\u2019]",
                qw = "[" + _o + "]",
                qp = "[" + Yp + "]",
                Eo = "[" + Gp + "]",
                zp = "\\d+",
                zw = "[" + Wp + "]",
                Xp = "[" + Kp + "]",
                Jp = "[^" + _o + Yp + zp + Wp + Kp + Hp + "]",
                ql = "\\ud83c[\\udffb-\\udfff]",
                Xw = "(?:" + Eo + "|" + ql + ")",
                Zp = "[^" + _o + "]",
                zl = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                Xl = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                ls = "[" + Hp + "]",
                Qp = "\\u200d",
                eg = "(?:" + Xp + "|" + Jp + ")",
                Jw = "(?:" + ls + "|" + Jp + ")",
                tg = "(?:" + Yl + "(?:d|ll|m|re|s|t|ve))?",
                rg = "(?:" + Yl + "(?:D|LL|M|RE|S|T|VE))?",
                ng = Xw + "?",
                ig = "[" + Vp + "]?",
                Zw = "(?:" + Qp + "(?:" + [Zp, zl, Xl].join("|") + ")" + ig + ng + ")*",
                Qw = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
                e0 = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
                sg = ig + ng + Zw,
                t0 = "(?:" + [zw, zl, Xl].join("|") + ")" + sg,
                r0 = "(?:" + [Zp + Eo + "?", Eo, zl, Xl, qw].join("|") + ")",
                n0 = RegExp(Yl, "g"),
                i0 = RegExp(Eo, "g"),
                Jl = RegExp(ql + "(?=" + ql + ")|" + r0 + sg, "g"),
                s0 = RegExp([ls + "?" + Xp + "+" + tg + "(?=" + [qp, ls, "$"].join("|") + ")", Jw + "+" + rg + "(?=" + [qp, ls + eg, "$"].join("|") + ")", ls + "?" + eg + "+" + tg, ls + "+" + rg, e0, Qw, zp, t0].join("|"), "g"),
                a0 = RegExp("[" + Qp + _o + Gp + Vp + "]"),
                o0 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
                c0 = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
                l0 = -1,
                yt = {};
            yt[T] = yt[N] = yt[S] = yt[P] = yt[X] = yt[ee] = yt[_e] = yt[Te] = yt[ot] = !0, yt[er] = yt[pr] = yt[Le] = yt[Et] = yt[w] = yt[it] = yt[Wt] = yt[kt] = yt[p] = yt[O] = yt[U] = yt[re] = yt[Q] = yt[A] = yt[pe] = !1;
            var ht = {};
            ht[er] = ht[pr] = ht[Le] = ht[w] = ht[Et] = ht[it] = ht[T] = ht[N] = ht[S] = ht[P] = ht[X] = ht[p] = ht[O] = ht[U] = ht[re] = ht[Q] = ht[A] = ht[W] = ht[ee] = ht[_e] = ht[Te] = ht[ot] = !0, ht[Wt] = ht[kt] = ht[pe] = !1;
            var u0 = {
                    \u00C0: "A",
                    \u00C1: "A",
                    \u00C2: "A",
                    \u00C3: "A",
                    \u00C4: "A",
                    \u00C5: "A",
                    \u00E0: "a",
                    \u00E1: "a",
                    \u00E2: "a",
                    \u00E3: "a",
                    \u00E4: "a",
                    \u00E5: "a",
                    \u00C7: "C",
                    \u00E7: "c",
                    \u00D0: "D",
                    \u00F0: "d",
                    \u00C8: "E",
                    \u00C9: "E",
                    \u00CA: "E",
                    \u00CB: "E",
                    \u00E8: "e",
                    \u00E9: "e",
                    \u00EA: "e",
                    \u00EB: "e",
                    \u00CC: "I",
                    \u00CD: "I",
                    \u00CE: "I",
                    \u00CF: "I",
                    \u00EC: "i",
                    \u00ED: "i",
                    \u00EE: "i",
                    \u00EF: "i",
                    \u00D1: "N",
                    \u00F1: "n",
                    \u00D2: "O",
                    \u00D3: "O",
                    \u00D4: "O",
                    \u00D5: "O",
                    \u00D6: "O",
                    \u00D8: "O",
                    \u00F2: "o",
                    \u00F3: "o",
                    \u00F4: "o",
                    \u00F5: "o",
                    \u00F6: "o",
                    \u00F8: "o",
                    \u00D9: "U",
                    \u00DA: "U",
                    \u00DB: "U",
                    \u00DC: "U",
                    \u00F9: "u",
                    \u00FA: "u",
                    \u00FB: "u",
                    \u00FC: "u",
                    \u00DD: "Y",
                    \u00FD: "y",
                    \u00FF: "y",
                    \u00C6: "Ae",
                    \u00E6: "ae",
                    \u00DE: "Th",
                    \u00FE: "th",
                    \u00DF: "ss",
                    \u0100: "A",
                    \u0102: "A",
                    \u0104: "A",
                    \u0101: "a",
                    \u0103: "a",
                    \u0105: "a",
                    \u0106: "C",
                    \u0108: "C",
                    \u010A: "C",
                    \u010C: "C",
                    \u0107: "c",
                    \u0109: "c",
                    \u010B: "c",
                    \u010D: "c",
                    \u010E: "D",
                    \u0110: "D",
                    \u010F: "d",
                    \u0111: "d",
                    \u0112: "E",
                    \u0114: "E",
                    \u0116: "E",
                    \u0118: "E",
                    \u011A: "E",
                    \u0113: "e",
                    \u0115: "e",
                    \u0117: "e",
                    \u0119: "e",
                    \u011B: "e",
                    \u011C: "G",
                    \u011E: "G",
                    \u0120: "G",
                    \u0122: "G",
                    \u011D: "g",
                    \u011F: "g",
                    \u0121: "g",
                    \u0123: "g",
                    \u0124: "H",
                    \u0126: "H",
                    \u0125: "h",
                    \u0127: "h",
                    \u0128: "I",
                    \u012A: "I",
                    \u012C: "I",
                    \u012E: "I",
                    \u0130: "I",
                    \u0129: "i",
                    \u012B: "i",
                    \u012D: "i",
                    \u012F: "i",
                    \u0131: "i",
                    \u0134: "J",
                    \u0135: "j",
                    \u0136: "K",
                    \u0137: "k",
                    \u0138: "k",
                    \u0139: "L",
                    \u013B: "L",
                    \u013D: "L",
                    \u013F: "L",
                    \u0141: "L",
                    \u013A: "l",
                    \u013C: "l",
                    \u013E: "l",
                    \u0140: "l",
                    \u0142: "l",
                    \u0143: "N",
                    \u0145: "N",
                    \u0147: "N",
                    \u014A: "N",
                    \u0144: "n",
                    \u0146: "n",
                    \u0148: "n",
                    \u014B: "n",
                    \u014C: "O",
                    \u014E: "O",
                    \u0150: "O",
                    \u014D: "o",
                    \u014F: "o",
                    \u0151: "o",
                    \u0154: "R",
                    \u0156: "R",
                    \u0158: "R",
                    \u0155: "r",
                    \u0157: "r",
                    \u0159: "r",
                    \u015A: "S",
                    \u015C: "S",
                    \u015E: "S",
                    \u0160: "S",
                    \u015B: "s",
                    \u015D: "s",
                    \u015F: "s",
                    \u0161: "s",
                    \u0162: "T",
                    \u0164: "T",
                    \u0166: "T",
                    \u0163: "t",
                    \u0165: "t",
                    \u0167: "t",
                    \u0168: "U",
                    \u016A: "U",
                    \u016C: "U",
                    \u016E: "U",
                    \u0170: "U",
                    \u0172: "U",
                    \u0169: "u",
                    \u016B: "u",
                    \u016D: "u",
                    \u016F: "u",
                    \u0171: "u",
                    \u0173: "u",
                    \u0174: "W",
                    \u0175: "w",
                    \u0176: "Y",
                    \u0177: "y",
                    \u0178: "Y",
                    \u0179: "Z",
                    \u017B: "Z",
                    \u017D: "Z",
                    \u017A: "z",
                    \u017C: "z",
                    \u017E: "z",
                    \u0132: "IJ",
                    \u0133: "ij",
                    \u0152: "Oe",
                    \u0153: "oe",
                    \u0149: "'n",
                    \u017F: "s"
                },
                f0 = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;"
                },
                d0 = {
                    "&amp;": "&",
                    "&lt;": "<",
                    "&gt;": ">",
                    "&quot;": '"',
                    "&#39;": "'"
                },
                h0 = {
                    "\\": "\\",
                    "'": "'",
                    "\n": "n",
                    "\r": "r",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                },
                p0 = parseFloat,
                g0 = parseInt,
                ag = typeof Pt == "object" && Pt && Pt.Object === Object && Pt,
                m0 = typeof self == "object" && self && self.Object === Object && self,
                qt = ag || m0 || Function("return this")(),
                Zl = e && !e.nodeType && e,
                Oi = Zl && !0 && t && !t.nodeType && t,
                og = Oi && Oi.exports === Zl,
                Ql = og && ag.process,
                xr = function() {
                    try {
                        var k = Oi && Oi.require && Oi.require("util").types;
                        return k || Ql && Ql.binding && Ql.binding("util")
                    } catch {}
                }(),
                cg = xr && xr.isArrayBuffer,
                lg = xr && xr.isDate,
                ug = xr && xr.isMap,
                fg = xr && xr.isRegExp,
                dg = xr && xr.isSet,
                hg = xr && xr.isTypedArray;

            function Or(k, q, H) {
                switch (H.length) {
                    case 0:
                        return k.call(q);
                    case 1:
                        return k.call(q, H[0]);
                    case 2:
                        return k.call(q, H[0], H[1]);
                    case 3:
                        return k.call(q, H[0], H[1], H[2])
                }
                return k.apply(q, H)
            }

            function v0(k, q, H, be) {
                for (var De = -1, et = k == null ? 0 : k.length; ++De < et;) {
                    var Mt = k[De];
                    q(be, Mt, H(Mt), k)
                }
                return be
            }

            function Dr(k, q) {
                for (var H = -1, be = k == null ? 0 : k.length; ++H < be && q(k[H], H, k) !== !1;);
                return k
            }

            function y0(k, q) {
                for (var H = k == null ? 0 : k.length; H-- && q(k[H], H, k) !== !1;);
                return k
            }

            function pg(k, q) {
                for (var H = -1, be = k == null ? 0 : k.length; ++H < be;)
                    if (!q(k[H], H, k)) return !1;
                return !0
            }

            function Bn(k, q) {
                for (var H = -1, be = k == null ? 0 : k.length, De = 0, et = []; ++H < be;) {
                    var Mt = k[H];
                    q(Mt, H, k) && (et[De++] = Mt)
                }
                return et
            }

            function bo(k, q) {
                var H = k == null ? 0 : k.length;
                return !!H && us(k, q, 0) > -1
            }

            function eu(k, q, H) {
                for (var be = -1, De = k == null ? 0 : k.length; ++be < De;)
                    if (H(q, k[be])) return !0;
                return !1
            }

            function bt(k, q) {
                for (var H = -1, be = k == null ? 0 : k.length, De = Array(be); ++H < be;) De[H] = q(k[H], H, k);
                return De
            }

            function jn(k, q) {
                for (var H = -1, be = q.length, De = k.length; ++H < be;) k[De + H] = q[H];
                return k
            }

            function tu(k, q, H, be) {
                var De = -1,
                    et = k == null ? 0 : k.length;
                for (be && et && (H = k[++De]); ++De < et;) H = q(H, k[De], De, k);
                return H
            }

            function _0(k, q, H, be) {
                var De = k == null ? 0 : k.length;
                for (be && De && (H = k[--De]); De--;) H = q(H, k[De], De, k);
                return H
            }

            function ru(k, q) {
                for (var H = -1, be = k == null ? 0 : k.length; ++H < be;)
                    if (q(k[H], H, k)) return !0;
                return !1
            }
            var E0 = nu("length");

            function b0(k) {
                return k.split("")
            }

            function T0(k) {
                return k.match(Rw) || []
            }

            function gg(k, q, H) {
                var be;
                return H(k, function(De, et, Mt) {
                    if (q(De, et, Mt)) return be = et, !1
                }), be
            }

            function To(k, q, H, be) {
                for (var De = k.length, et = H + (be ? 1 : -1); be ? et-- : ++et < De;)
                    if (q(k[et], et, k)) return et;
                return -1
            }

            function us(k, q, H) {
                return q === q ? k0(k, q, H) : To(k, mg, H)
            }

            function S0(k, q, H, be) {
                for (var De = H - 1, et = k.length; ++De < et;)
                    if (be(k[De], q)) return De;
                return -1
            }

            function mg(k) {
                return k !== k
            }

            function vg(k, q) {
                var H = k == null ? 0 : k.length;
                return H ? su(k, q) / H : xe
            }

            function nu(k) {
                return function(q) {
                    return q == null ? r : q[k]
                }
            }

            function iu(k) {
                return function(q) {
                    return k == null ? r : k[q]
                }
            }

            function yg(k, q, H, be, De) {
                return De(k, function(et, Mt, ut) {
                    H = be ? (be = !1, et) : q(H, et, Mt, ut)
                }), H
            }

            function O0(k, q) {
                var H = k.length;
                for (k.sort(q); H--;) k[H] = k[H].value;
                return k
            }

            function su(k, q) {
                for (var H, be = -1, De = k.length; ++be < De;) {
                    var et = q(k[be]);
                    et !== r && (H = H === r ? et : H + et)
                }
                return H
            }

            function au(k, q) {
                for (var H = -1, be = Array(k); ++H < k;) be[H] = q(H);
                return be
            }

            function w0(k, q) {
                return bt(q, function(H) {
                    return [H, k[H]]
                })
            }

            function _g(k) {
                return k && k.slice(0, Sg(k) + 1).replace(Vl, "")
            }

            function wr(k) {
                return function(q) {
                    return k(q)
                }
            }

            function ou(k, q) {
                return bt(q, function(H) {
                    return k[H]
                })
            }

            function fa(k, q) {
                return k.has(q)
            }

            function Eg(k, q) {
                for (var H = -1, be = k.length; ++H < be && us(q, k[H], 0) > -1;);
                return H
            }

            function bg(k, q) {
                for (var H = k.length; H-- && us(q, k[H], 0) > -1;);
                return H
            }

            function C0(k, q) {
                for (var H = k.length, be = 0; H--;) k[H] === q && ++be;
                return be
            }
            var I0 = iu(u0),
                $0 = iu(f0);

            function A0(k) {
                return "\\" + h0[k]
            }

            function R0(k, q) {
                return k == null ? r : k[q]
            }

            function fs(k) {
                return a0.test(k)
            }

            function N0(k) {
                return o0.test(k)
            }

            function P0(k) {
                for (var q, H = []; !(q = k.next()).done;) H.push(q.value);
                return H
            }

            function cu(k) {
                var q = -1,
                    H = Array(k.size);
                return k.forEach(function(be, De) {
                    H[++q] = [De, be]
                }), H
            }

            function Tg(k, q) {
                return function(H) {
                    return k(q(H))
                }
            }

            function Gn(k, q) {
                for (var H = -1, be = k.length, De = 0, et = []; ++H < be;) {
                    var Mt = k[H];
                    (Mt === q || Mt === m) && (k[H] = m, et[De++] = H)
                }
                return et
            }

            function So(k) {
                var q = -1,
                    H = Array(k.size);
                return k.forEach(function(be) {
                    H[++q] = be
                }), H
            }

            function L0(k) {
                var q = -1,
                    H = Array(k.size);
                return k.forEach(function(be) {
                    H[++q] = [be, be]
                }), H
            }

            function k0(k, q, H) {
                for (var be = H - 1, De = k.length; ++be < De;)
                    if (k[be] === q) return be;
                return -1
            }

            function x0(k, q, H) {
                for (var be = H + 1; be--;)
                    if (k[be] === q) return be;
                return be
            }

            function ds(k) {
                return fs(k) ? M0(k) : E0(k)
            }

            function Xr(k) {
                return fs(k) ? F0(k) : b0(k)
            }

            function Sg(k) {
                for (var q = k.length; q-- && Cw.test(k.charAt(q)););
                return q
            }
            var D0 = iu(d0);

            function M0(k) {
                for (var q = Jl.lastIndex = 0; Jl.test(k);) ++q;
                return q
            }

            function F0(k) {
                return k.match(Jl) || []
            }

            function U0(k) {
                return k.match(s0) || []
            }
            var B0 = function k(q) {
                    q = q == null ? qt : hs.defaults(qt.Object(), q, hs.pick(qt, c0));
                    var H = q.Array,
                        be = q.Date,
                        De = q.Error,
                        et = q.Function,
                        Mt = q.Math,
                        ut = q.Object,
                        lu = q.RegExp,
                        j0 = q.String,
                        Mr = q.TypeError,
                        Oo = H.prototype,
                        G0 = et.prototype,
                        ps = ut.prototype,
                        wo = q["__core-js_shared__"],
                        Co = G0.toString,
                        ct = ps.hasOwnProperty,
                        W0 = 0,
                        Og = function() {
                            var i = /[^.]+$/.exec(wo && wo.keys && wo.keys.IE_PROTO || "");
                            return i ? "Symbol(src)_1." + i : ""
                        }(),
                        Io = ps.toString,
                        K0 = Co.call(ut),
                        H0 = qt._,
                        V0 = lu("^" + Co.call(ct).replace(Hl, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                        $o = og ? q.Buffer : r,
                        Wn = q.Symbol,
                        Ao = q.Uint8Array,
                        wg = $o ? $o.allocUnsafe : r,
                        Ro = Tg(ut.getPrototypeOf, ut),
                        Cg = ut.create,
                        Ig = ps.propertyIsEnumerable,
                        No = Oo.splice,
                        $g = Wn ? Wn.isConcatSpreadable : r,
                        da = Wn ? Wn.iterator : r,
                        wi = Wn ? Wn.toStringTag : r,
                        Po = function() {
                            try {
                                var i = Ri(ut, "defineProperty");
                                return i({}, "", {}), i
                            } catch {}
                        }(),
                        Y0 = q.clearTimeout !== qt.clearTimeout && q.clearTimeout,
                        q0 = be && be.now !== qt.Date.now && be.now,
                        z0 = q.setTimeout !== qt.setTimeout && q.setTimeout,
                        Lo = Mt.ceil,
                        ko = Mt.floor,
                        uu = ut.getOwnPropertySymbols,
                        X0 = $o ? $o.isBuffer : r,
                        Ag = q.isFinite,
                        J0 = Oo.join,
                        Z0 = Tg(ut.keys, ut),
                        Ft = Mt.max,
                        rr = Mt.min,
                        Q0 = be.now,
                        e1 = q.parseInt,
                        Rg = Mt.random,
                        t1 = Oo.reverse,
                        fu = Ri(q, "DataView"),
                        ha = Ri(q, "Map"),
                        du = Ri(q, "Promise"),
                        gs = Ri(q, "Set"),
                        pa = Ri(q, "WeakMap"),
                        ga = Ri(ut, "create"),
                        xo = pa && new pa,
                        ms = {},
                        r1 = Ni(fu),
                        n1 = Ni(ha),
                        i1 = Ni(du),
                        s1 = Ni(gs),
                        a1 = Ni(pa),
                        Do = Wn ? Wn.prototype : r,
                        ma = Do ? Do.valueOf : r,
                        Ng = Do ? Do.toString : r;

                    function y(i) {
                        if (Ct(i) && !Fe(i) && !(i instanceof Ve)) {
                            if (i instanceof Fr) return i;
                            if (ct.call(i, "__wrapped__")) return Pm(i)
                        }
                        return new Fr(i)
                    }
                    var vs = function() {
                        function i() {}
                        return function(a) {
                            if (!Ot(a)) return {};
                            if (Cg) return Cg(a);
                            i.prototype = a;
                            var l = new i;
                            return i.prototype = r, l
                        }
                    }();

                    function Mo() {}

                    function Fr(i, a) {
                        this.__wrapped__ = i, this.__actions__ = [], this.__chain__ = !!a, this.__index__ = 0, this.__values__ = r
                    }
                    y.templateSettings = {
                        escape: Ew,
                        evaluate: bw,
                        interpolate: Bp,
                        variable: "",
                        imports: {
                            _: y
                        }
                    }, y.prototype = Mo.prototype, y.prototype.constructor = y, Fr.prototype = vs(Mo.prototype), Fr.prototype.constructor = Fr;

                    function Ve(i) {
                        this.__wrapped__ = i, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Ue, this.__views__ = []
                    }

                    function o1() {
                        var i = new Ve(this.__wrapped__);
                        return i.__actions__ = gr(this.__actions__), i.__dir__ = this.__dir__, i.__filtered__ = this.__filtered__, i.__iteratees__ = gr(this.__iteratees__), i.__takeCount__ = this.__takeCount__, i.__views__ = gr(this.__views__), i
                    }

                    function c1() {
                        if (this.__filtered__) {
                            var i = new Ve(this);
                            i.__dir__ = -1, i.__filtered__ = !0
                        } else i = this.clone(), i.__dir__ *= -1;
                        return i
                    }

                    function l1() {
                        var i = this.__wrapped__.value(),
                            a = this.__dir__,
                            l = Fe(i),
                            d = a < 0,
                            v = l ? i.length : 0,
                            E = bC(0, v, this.__views__),
                            $ = E.start,
                            R = E.end,
                            x = R - $,
                            J = d ? R : $ - 1,
                            Z = this.__iteratees__,
                            ne = Z.length,
                            me = 0,
                            Oe = rr(x, this.__takeCount__);
                        if (!l || !d && v == x && Oe == x) return tm(i, this.__actions__);
                        var Re = [];
                        e: for (; x-- && me < Oe;) {
                            J += a;
                            for (var Ge = -1, Ne = i[J]; ++Ge < ne;) {
                                var He = Z[Ge],
                                    Ye = He.iteratee,
                                    $r = He.type,
                                    ur = Ye(Ne);
                                if ($r == te) Ne = ur;
                                else if (!ur) {
                                    if ($r == F) continue e;
                                    break e
                                }
                            }
                            Re[me++] = Ne
                        }
                        return Re
                    }
                    Ve.prototype = vs(Mo.prototype), Ve.prototype.constructor = Ve;

                    function Ci(i) {
                        var a = -1,
                            l = i == null ? 0 : i.length;
                        for (this.clear(); ++a < l;) {
                            var d = i[a];
                            this.set(d[0], d[1])
                        }
                    }

                    function u1() {
                        this.__data__ = ga ? ga(null) : {}, this.size = 0
                    }

                    function f1(i) {
                        var a = this.has(i) && delete this.__data__[i];
                        return this.size -= a ? 1 : 0, a
                    }

                    function d1(i) {
                        var a = this.__data__;
                        if (ga) {
                            var l = a[i];
                            return l === f ? r : l
                        }
                        return ct.call(a, i) ? a[i] : r
                    }

                    function h1(i) {
                        var a = this.__data__;
                        return ga ? a[i] !== r : ct.call(a, i)
                    }

                    function p1(i, a) {
                        var l = this.__data__;
                        return this.size += this.has(i) ? 0 : 1, l[i] = ga && a === r ? f : a, this
                    }
                    Ci.prototype.clear = u1, Ci.prototype.delete = f1, Ci.prototype.get = d1, Ci.prototype.has = h1, Ci.prototype.set = p1;

                    function Sn(i) {
                        var a = -1,
                            l = i == null ? 0 : i.length;
                        for (this.clear(); ++a < l;) {
                            var d = i[a];
                            this.set(d[0], d[1])
                        }
                    }

                    function g1() {
                        this.__data__ = [], this.size = 0
                    }

                    function m1(i) {
                        var a = this.__data__,
                            l = Fo(a, i);
                        if (l < 0) return !1;
                        var d = a.length - 1;
                        return l == d ? a.pop() : No.call(a, l, 1), --this.size, !0
                    }

                    function v1(i) {
                        var a = this.__data__,
                            l = Fo(a, i);
                        return l < 0 ? r : a[l][1]
                    }

                    function y1(i) {
                        return Fo(this.__data__, i) > -1
                    }

                    function _1(i, a) {
                        var l = this.__data__,
                            d = Fo(l, i);
                        return d < 0 ? (++this.size, l.push([i, a])) : l[d][1] = a, this
                    }
                    Sn.prototype.clear = g1, Sn.prototype.delete = m1, Sn.prototype.get = v1, Sn.prototype.has = y1, Sn.prototype.set = _1;

                    function On(i) {
                        var a = -1,
                            l = i == null ? 0 : i.length;
                        for (this.clear(); ++a < l;) {
                            var d = i[a];
                            this.set(d[0], d[1])
                        }
                    }

                    function E1() {
                        this.size = 0, this.__data__ = {
                            hash: new Ci,
                            map: new(ha || Sn),
                            string: new Ci
                        }
                    }

                    function b1(i) {
                        var a = Xo(this, i).delete(i);
                        return this.size -= a ? 1 : 0, a
                    }

                    function T1(i) {
                        return Xo(this, i).get(i)
                    }

                    function S1(i) {
                        return Xo(this, i).has(i)
                    }

                    function O1(i, a) {
                        var l = Xo(this, i),
                            d = l.size;
                        return l.set(i, a), this.size += l.size == d ? 0 : 1, this
                    }
                    On.prototype.clear = E1, On.prototype.delete = b1, On.prototype.get = T1, On.prototype.has = S1, On.prototype.set = O1;

                    function Ii(i) {
                        var a = -1,
                            l = i == null ? 0 : i.length;
                        for (this.__data__ = new On; ++a < l;) this.add(i[a])
                    }

                    function w1(i) {
                        return this.__data__.set(i, f), this
                    }

                    function C1(i) {
                        return this.__data__.has(i)
                    }
                    Ii.prototype.add = Ii.prototype.push = w1, Ii.prototype.has = C1;

                    function Jr(i) {
                        var a = this.__data__ = new Sn(i);
                        this.size = a.size
                    }

                    function I1() {
                        this.__data__ = new Sn, this.size = 0
                    }

                    function $1(i) {
                        var a = this.__data__,
                            l = a.delete(i);
                        return this.size = a.size, l
                    }

                    function A1(i) {
                        return this.__data__.get(i)
                    }

                    function R1(i) {
                        return this.__data__.has(i)
                    }

                    function N1(i, a) {
                        var l = this.__data__;
                        if (l instanceof Sn) {
                            var d = l.__data__;
                            if (!ha || d.length < s - 1) return d.push([i, a]), this.size = ++l.size, this;
                            l = this.__data__ = new On(d)
                        }
                        return l.set(i, a), this.size = l.size, this
                    }
                    Jr.prototype.clear = I1, Jr.prototype.delete = $1, Jr.prototype.get = A1, Jr.prototype.has = R1, Jr.prototype.set = N1;

                    function Pg(i, a) {
                        var l = Fe(i),
                            d = !l && Pi(i),
                            v = !l && !d && qn(i),
                            E = !l && !d && !v && bs(i),
                            $ = l || d || v || E,
                            R = $ ? au(i.length, j0) : [],
                            x = R.length;
                        for (var J in i)(a || ct.call(i, J)) && !($ && (J == "length" || v && (J == "offset" || J == "parent") || E && (J == "buffer" || J == "byteLength" || J == "byteOffset") || $n(J, x))) && R.push(J);
                        return R
                    }

                    function Lg(i) {
                        var a = i.length;
                        return a ? i[Su(0, a - 1)] : r
                    }

                    function P1(i, a) {
                        return Jo(gr(i), $i(a, 0, i.length))
                    }

                    function L1(i) {
                        return Jo(gr(i))
                    }

                    function hu(i, a, l) {
                        (l !== r && !Zr(i[a], l) || l === r && !(a in i)) && wn(i, a, l)
                    }

                    function va(i, a, l) {
                        var d = i[a];
                        (!(ct.call(i, a) && Zr(d, l)) || l === r && !(a in i)) && wn(i, a, l)
                    }

                    function Fo(i, a) {
                        for (var l = i.length; l--;)
                            if (Zr(i[l][0], a)) return l;
                        return -1
                    }

                    function k1(i, a, l, d) {
                        return Kn(i, function(v, E, $) {
                            a(d, v, l(v), $)
                        }), d
                    }

                    function kg(i, a) {
                        return i && dn(a, Kt(a), i)
                    }

                    function x1(i, a) {
                        return i && dn(a, vr(a), i)
                    }

                    function wn(i, a, l) {
                        a == "__proto__" && Po ? Po(i, a, {
                            configurable: !0,
                            enumerable: !0,
                            value: l,
                            writable: !0
                        }) : i[a] = l
                    }

                    function pu(i, a) {
                        for (var l = -1, d = a.length, v = H(d), E = i == null; ++l < d;) v[l] = E ? r : qu(i, a[l]);
                        return v
                    }

                    function $i(i, a, l) {
                        return i === i && (l !== r && (i = i <= l ? i : l), a !== r && (i = i >= a ? i : a)), i
                    }

                    function Ur(i, a, l, d, v, E) {
                        var $, R = a & _,
                            x = a & b,
                            J = a & C;
                        if (l && ($ = v ? l(i, d, v, E) : l(i)), $ !== r) return $;
                        if (!Ot(i)) return i;
                        var Z = Fe(i);
                        if (Z) {
                            if ($ = SC(i), !R) return gr(i, $)
                        } else {
                            var ne = nr(i),
                                me = ne == kt || ne == g;
                            if (qn(i)) return im(i, R);
                            if (ne == U || ne == er || me && !v) {
                                if ($ = x || me ? {} : Sm(i), !R) return x ? dC(i, x1($, i)) : fC(i, kg($, i))
                            } else {
                                if (!ht[ne]) return v ? i : {};
                                $ = OC(i, ne, R)
                            }
                        }
                        E || (E = new Jr);
                        var Oe = E.get(i);
                        if (Oe) return Oe;
                        E.set(i, $), Zm(i) ? i.forEach(function(Ne) {
                            $.add(Ur(Ne, a, l, Ne, i, E))
                        }) : Xm(i) && i.forEach(function(Ne, He) {
                            $.set(He, Ur(Ne, a, l, He, i, E))
                        });
                        var Re = J ? x ? ku : Lu : x ? vr : Kt,
                            Ge = Z ? r : Re(i);
                        return Dr(Ge || i, function(Ne, He) {
                            Ge && (He = Ne, Ne = i[He]), va($, He, Ur(Ne, a, l, He, i, E))
                        }), $
                    }

                    function D1(i) {
                        var a = Kt(i);
                        return function(l) {
                            return xg(l, i, a)
                        }
                    }

                    function xg(i, a, l) {
                        var d = l.length;
                        if (i == null) return !d;
                        for (i = ut(i); d--;) {
                            var v = l[d],
                                E = a[v],
                                $ = i[v];
                            if ($ === r && !(v in i) || !E($)) return !1
                        }
                        return !0
                    }

                    function Dg(i, a, l) {
                        if (typeof i != "function") throw new Mr(c);
                        return Oa(function() {
                            i.apply(r, l)
                        }, a)
                    }

                    function ya(i, a, l, d) {
                        var v = -1,
                            E = bo,
                            $ = !0,
                            R = i.length,
                            x = [],
                            J = a.length;
                        if (!R) return x;
                        l && (a = bt(a, wr(l))), d ? (E = eu, $ = !1) : a.length >= s && (E = fa, $ = !1, a = new Ii(a));
                        e: for (; ++v < R;) {
                            var Z = i[v],
                                ne = l == null ? Z : l(Z);
                            if (Z = d || Z !== 0 ? Z : 0, $ && ne === ne) {
                                for (var me = J; me--;)
                                    if (a[me] === ne) continue e;
                                x.push(Z)
                            } else E(a, ne, d) || x.push(Z)
                        }
                        return x
                    }
                    var Kn = lm(fn),
                        Mg = lm(mu, !0);

                    function M1(i, a) {
                        var l = !0;
                        return Kn(i, function(d, v, E) {
                            return l = !!a(d, v, E), l
                        }), l
                    }

                    function Uo(i, a, l) {
                        for (var d = -1, v = i.length; ++d < v;) {
                            var E = i[d],
                                $ = a(E);
                            if ($ != null && (R === r ? $ === $ && !Ir($) : l($, R))) var R = $,
                                x = E
                        }
                        return x
                    }

                    function F1(i, a, l, d) {
                        var v = i.length;
                        for (l = Be(l), l < 0 && (l = -l > v ? 0 : v + l), d = d === r || d > v ? v : Be(d), d < 0 && (d += v), d = l > d ? 0 : ev(d); l < d;) i[l++] = a;
                        return i
                    }

                    function Fg(i, a) {
                        var l = [];
                        return Kn(i, function(d, v, E) {
                            a(d, v, E) && l.push(d)
                        }), l
                    }

                    function zt(i, a, l, d, v) {
                        var E = -1,
                            $ = i.length;
                        for (l || (l = CC), v || (v = []); ++E < $;) {
                            var R = i[E];
                            a > 0 && l(R) ? a > 1 ? zt(R, a - 1, l, d, v) : jn(v, R) : d || (v[v.length] = R)
                        }
                        return v
                    }
                    var gu = um(),
                        Ug = um(!0);

                    function fn(i, a) {
                        return i && gu(i, a, Kt)
                    }

                    function mu(i, a) {
                        return i && Ug(i, a, Kt)
                    }

                    function Bo(i, a) {
                        return Bn(a, function(l) {
                            return An(i[l])
                        })
                    }

                    function Ai(i, a) {
                        a = Vn(a, i);
                        for (var l = 0, d = a.length; i != null && l < d;) i = i[hn(a[l++])];
                        return l && l == d ? i : r
                    }

                    function Bg(i, a, l) {
                        var d = a(i);
                        return Fe(i) ? d : jn(d, l(i))
                    }

                    function cr(i) {
                        return i == null ? i === r ? he : D : wi && wi in ut(i) ? EC(i) : LC(i)
                    }

                    function vu(i, a) {
                        return i > a
                    }

                    function U1(i, a) {
                        return i != null && ct.call(i, a)
                    }

                    function B1(i, a) {
                        return i != null && a in ut(i)
                    }

                    function j1(i, a, l) {
                        return i >= rr(a, l) && i < Ft(a, l)
                    }

                    function yu(i, a, l) {
                        for (var d = l ? eu : bo, v = i[0].length, E = i.length, $ = E, R = H(E), x = 1 / 0, J = []; $--;) {
                            var Z = i[$];
                            $ && a && (Z = bt(Z, wr(a))), x = rr(Z.length, x), R[$] = !l && (a || v >= 120 && Z.length >= 120) ? new Ii($ && Z) : r
                        }
                        Z = i[0];
                        var ne = -1,
                            me = R[0];
                        e: for (; ++ne < v && J.length < x;) {
                            var Oe = Z[ne],
                                Re = a ? a(Oe) : Oe;
                            if (Oe = l || Oe !== 0 ? Oe : 0, !(me ? fa(me, Re) : d(J, Re, l))) {
                                for ($ = E; --$;) {
                                    var Ge = R[$];
                                    if (!(Ge ? fa(Ge, Re) : d(i[$], Re, l))) continue e
                                }
                                me && me.push(Re), J.push(Oe)
                            }
                        }
                        return J
                    }

                    function G1(i, a, l, d) {
                        return fn(i, function(v, E, $) {
                            a(d, l(v), E, $)
                        }), d
                    }

                    function _a(i, a, l) {
                        a = Vn(a, i), i = Im(i, a);
                        var d = i == null ? i : i[hn(jr(a))];
                        return d == null ? r : Or(d, i, l)
                    }

                    function jg(i) {
                        return Ct(i) && cr(i) == er
                    }

                    function W1(i) {
                        return Ct(i) && cr(i) == Le
                    }

                    function K1(i) {
                        return Ct(i) && cr(i) == it
                    }

                    function Ea(i, a, l, d, v) {
                        return i === a ? !0 : i == null || a == null || !Ct(i) && !Ct(a) ? i !== i && a !== a : H1(i, a, l, d, Ea, v)
                    }

                    function H1(i, a, l, d, v, E) {
                        var $ = Fe(i),
                            R = Fe(a),
                            x = $ ? pr : nr(i),
                            J = R ? pr : nr(a);
                        x = x == er ? U : x, J = J == er ? U : J;
                        var Z = x == U,
                            ne = J == U,
                            me = x == J;
                        if (me && qn(i)) {
                            if (!qn(a)) return !1;
                            $ = !0, Z = !1
                        }
                        if (me && !Z) return E || (E = new Jr), $ || bs(i) ? Em(i, a, l, d, v, E) : yC(i, a, x, l, d, v, E);
                        if (!(l & L)) {
                            var Oe = Z && ct.call(i, "__wrapped__"),
                                Re = ne && ct.call(a, "__wrapped__");
                            if (Oe || Re) {
                                var Ge = Oe ? i.value() : i,
                                    Ne = Re ? a.value() : a;
                                return E || (E = new Jr), v(Ge, Ne, l, d, E)
                            }
                        }
                        return me ? (E || (E = new Jr), _C(i, a, l, d, v, E)) : !1
                    }

                    function V1(i) {
                        return Ct(i) && nr(i) == p
                    }

                    function _u(i, a, l, d) {
                        var v = l.length,
                            E = v,
                            $ = !d;
                        if (i == null) return !E;
                        for (i = ut(i); v--;) {
                            var R = l[v];
                            if ($ && R[2] ? R[1] !== i[R[0]] : !(R[0] in i)) return !1
                        }
                        for (; ++v < E;) {
                            R = l[v];
                            var x = R[0],
                                J = i[x],
                                Z = R[1];
                            if ($ && R[2]) {
                                if (J === r && !(x in i)) return !1
                            } else {
                                var ne = new Jr;
                                if (d) var me = d(J, Z, x, i, a, ne);
                                if (!(me === r ? Ea(Z, J, L | M, d, ne) : me)) return !1
                            }
                        }
                        return !0
                    }

                    function Gg(i) {
                        if (!Ot(i) || $C(i)) return !1;
                        var a = An(i) ? V0 : Dw;
                        return a.test(Ni(i))
                    }

                    function Y1(i) {
                        return Ct(i) && cr(i) == re
                    }

                    function q1(i) {
                        return Ct(i) && nr(i) == Q
                    }

                    function z1(i) {
                        return Ct(i) && nc(i.length) && !!yt[cr(i)]
                    }

                    function Wg(i) {
                        return typeof i == "function" ? i : i == null ? yr : typeof i == "object" ? Fe(i) ? Vg(i[0], i[1]) : Hg(i) : fv(i)
                    }

                    function Eu(i) {
                        if (!Sa(i)) return Z0(i);
                        var a = [];
                        for (var l in ut(i)) ct.call(i, l) && l != "constructor" && a.push(l);
                        return a
                    }

                    function X1(i) {
                        if (!Ot(i)) return PC(i);
                        var a = Sa(i),
                            l = [];
                        for (var d in i) d == "constructor" && (a || !ct.call(i, d)) || l.push(d);
                        return l
                    }

                    function bu(i, a) {
                        return i < a
                    }

                    function Kg(i, a) {
                        var l = -1,
                            d = mr(i) ? H(i.length) : [];
                        return Kn(i, function(v, E, $) {
                            d[++l] = a(v, E, $)
                        }), d
                    }

                    function Hg(i) {
                        var a = Du(i);
                        return a.length == 1 && a[0][2] ? wm(a[0][0], a[0][1]) : function(l) {
                            return l === i || _u(l, i, a)
                        }
                    }

                    function Vg(i, a) {
                        return Fu(i) && Om(a) ? wm(hn(i), a) : function(l) {
                            var d = qu(l, i);
                            return d === r && d === a ? zu(l, i) : Ea(a, d, L | M)
                        }
                    }

                    function jo(i, a, l, d, v) {
                        i !== a && gu(a, function(E, $) {
                            if (v || (v = new Jr), Ot(E)) J1(i, a, $, l, jo, d, v);
                            else {
                                var R = d ? d(Bu(i, $), E, $ + "", i, a, v) : r;
                                R === r && (R = E), hu(i, $, R)
                            }
                        }, vr)
                    }

                    function J1(i, a, l, d, v, E, $) {
                        var R = Bu(i, l),
                            x = Bu(a, l),
                            J = $.get(x);
                        if (J) {
                            hu(i, l, J);
                            return
                        }
                        var Z = E ? E(R, x, l + "", i, a, $) : r,
                            ne = Z === r;
                        if (ne) {
                            var me = Fe(x),
                                Oe = !me && qn(x),
                                Re = !me && !Oe && bs(x);
                            Z = x, me || Oe || Re ? Fe(R) ? Z = R : At(R) ? Z = gr(R) : Oe ? (ne = !1, Z = im(x, !0)) : Re ? (ne = !1, Z = sm(x, !0)) : Z = [] : wa(x) || Pi(x) ? (Z = R, Pi(R) ? Z = tv(R) : (!Ot(R) || An(R)) && (Z = Sm(x))) : ne = !1
                        }
                        ne && ($.set(x, Z), v(Z, x, d, E, $), $.delete(x)), hu(i, l, Z)
                    }

                    function Yg(i, a) {
                        var l = i.length;
                        if (!!l) return a += a < 0 ? l : 0, $n(a, l) ? i[a] : r
                    }

                    function qg(i, a, l) {
                        a.length ? a = bt(a, function(E) {
                            return Fe(E) ? function($) {
                                return Ai($, E.length === 1 ? E[0] : E)
                            } : E
                        }) : a = [yr];
                        var d = -1;
                        a = bt(a, wr(Ae()));
                        var v = Kg(i, function(E, $, R) {
                            var x = bt(a, function(J) {
                                return J(E)
                            });
                            return {
                                criteria: x,
                                index: ++d,
                                value: E
                            }
                        });
                        return O0(v, function(E, $) {
                            return uC(E, $, l)
                        })
                    }

                    function Z1(i, a) {
                        return zg(i, a, function(l, d) {
                            return zu(i, d)
                        })
                    }

                    function zg(i, a, l) {
                        for (var d = -1, v = a.length, E = {}; ++d < v;) {
                            var $ = a[d],
                                R = Ai(i, $);
                            l(R, $) && ba(E, Vn($, i), R)
                        }
                        return E
                    }

                    function Q1(i) {
                        return function(a) {
                            return Ai(a, i)
                        }
                    }

                    function Tu(i, a, l, d) {
                        var v = d ? S0 : us,
                            E = -1,
                            $ = a.length,
                            R = i;
                        for (i === a && (a = gr(a)), l && (R = bt(i, wr(l))); ++E < $;)
                            for (var x = 0, J = a[E], Z = l ? l(J) : J;
                                (x = v(R, Z, x, d)) > -1;) R !== i && No.call(R, x, 1), No.call(i, x, 1);
                        return i
                    }

                    function Xg(i, a) {
                        for (var l = i ? a.length : 0, d = l - 1; l--;) {
                            var v = a[l];
                            if (l == d || v !== E) {
                                var E = v;
                                $n(v) ? No.call(i, v, 1) : Cu(i, v)
                            }
                        }
                        return i
                    }

                    function Su(i, a) {
                        return i + ko(Rg() * (a - i + 1))
                    }

                    function eC(i, a, l, d) {
                        for (var v = -1, E = Ft(Lo((a - i) / (l || 1)), 0), $ = H(E); E--;) $[d ? E : ++v] = i, i += l;
                        return $
                    }

                    function Ou(i, a) {
                        var l = "";
                        if (!i || a < 1 || a > ve) return l;
                        do a % 2 && (l += i), a = ko(a / 2), a && (i += i); while (a);
                        return l
                    }

                    function Ke(i, a) {
                        return ju(Cm(i, a, yr), i + "")
                    }

                    function tC(i) {
                        return Lg(Ts(i))
                    }

                    function rC(i, a) {
                        var l = Ts(i);
                        return Jo(l, $i(a, 0, l.length))
                    }

                    function ba(i, a, l, d) {
                        if (!Ot(i)) return i;
                        a = Vn(a, i);
                        for (var v = -1, E = a.length, $ = E - 1, R = i; R != null && ++v < E;) {
                            var x = hn(a[v]),
                                J = l;
                            if (x === "__proto__" || x === "constructor" || x === "prototype") return i;
                            if (v != $) {
                                var Z = R[x];
                                J = d ? d(Z, x, R) : r, J === r && (J = Ot(Z) ? Z : $n(a[v + 1]) ? [] : {})
                            }
                            va(R, x, J), R = R[x]
                        }
                        return i
                    }
                    var Jg = xo ? function(i, a) {
                            return xo.set(i, a), i
                        } : yr,
                        nC = Po ? function(i, a) {
                            return Po(i, "toString", {
                                configurable: !0,
                                enumerable: !1,
                                value: Ju(a),
                                writable: !0
                            })
                        } : yr;

                    function iC(i) {
                        return Jo(Ts(i))
                    }

                    function Br(i, a, l) {
                        var d = -1,
                            v = i.length;
                        a < 0 && (a = -a > v ? 0 : v + a), l = l > v ? v : l, l < 0 && (l += v), v = a > l ? 0 : l - a >>> 0, a >>>= 0;
                        for (var E = H(v); ++d < v;) E[d] = i[d + a];
                        return E
                    }

                    function sC(i, a) {
                        var l;
                        return Kn(i, function(d, v, E) {
                            return l = a(d, v, E), !l
                        }), !!l
                    }

                    function Go(i, a, l) {
                        var d = 0,
                            v = i == null ? d : i.length;
                        if (typeof a == "number" && a === a && v <= wt) {
                            for (; d < v;) {
                                var E = d + v >>> 1,
                                    $ = i[E];
                                $ !== null && !Ir($) && (l ? $ <= a : $ < a) ? d = E + 1 : v = E
                            }
                            return v
                        }
                        return wu(i, a, yr, l)
                    }

                    function wu(i, a, l, d) {
                        var v = 0,
                            E = i == null ? 0 : i.length;
                        if (E === 0) return 0;
                        a = l(a);
                        for (var $ = a !== a, R = a === null, x = Ir(a), J = a === r; v < E;) {
                            var Z = ko((v + E) / 2),
                                ne = l(i[Z]),
                                me = ne !== r,
                                Oe = ne === null,
                                Re = ne === ne,
                                Ge = Ir(ne);
                            if ($) var Ne = d || Re;
                            else J ? Ne = Re && (d || me) : R ? Ne = Re && me && (d || !Oe) : x ? Ne = Re && me && !Oe && (d || !Ge) : Oe || Ge ? Ne = !1 : Ne = d ? ne <= a : ne < a;
                            Ne ? v = Z + 1 : E = Z
                        }
                        return rr(E, Ze)
                    }

                    function Zg(i, a) {
                        for (var l = -1, d = i.length, v = 0, E = []; ++l < d;) {
                            var $ = i[l],
                                R = a ? a($) : $;
                            if (!l || !Zr(R, x)) {
                                var x = R;
                                E[v++] = $ === 0 ? 0 : $
                            }
                        }
                        return E
                    }

                    function Qg(i) {
                        return typeof i == "number" ? i : Ir(i) ? xe : +i
                    }

                    function Cr(i) {
                        if (typeof i == "string") return i;
                        if (Fe(i)) return bt(i, Cr) + "";
                        if (Ir(i)) return Ng ? Ng.call(i) : "";
                        var a = i + "";
                        return a == "0" && 1 / i == -Ee ? "-0" : a
                    }

                    function Hn(i, a, l) {
                        var d = -1,
                            v = bo,
                            E = i.length,
                            $ = !0,
                            R = [],
                            x = R;
                        if (l) $ = !1, v = eu;
                        else if (E >= s) {
                            var J = a ? null : mC(i);
                            if (J) return So(J);
                            $ = !1, v = fa, x = new Ii
                        } else x = a ? [] : R;
                        e: for (; ++d < E;) {
                            var Z = i[d],
                                ne = a ? a(Z) : Z;
                            if (Z = l || Z !== 0 ? Z : 0, $ && ne === ne) {
                                for (var me = x.length; me--;)
                                    if (x[me] === ne) continue e;
                                a && x.push(ne), R.push(Z)
                            } else v(x, ne, l) || (x !== R && x.push(ne), R.push(Z))
                        }
                        return R
                    }

                    function Cu(i, a) {
                        return a = Vn(a, i), i = Im(i, a), i == null || delete i[hn(jr(a))]
                    }

                    function em(i, a, l, d) {
                        return ba(i, a, l(Ai(i, a)), d)
                    }

                    function Wo(i, a, l, d) {
                        for (var v = i.length, E = d ? v : -1;
                            (d ? E-- : ++E < v) && a(i[E], E, i););
                        return l ? Br(i, d ? 0 : E, d ? E + 1 : v) : Br(i, d ? E + 1 : 0, d ? v : E)
                    }

                    function tm(i, a) {
                        var l = i;
                        return l instanceof Ve && (l = l.value()), tu(a, function(d, v) {
                            return v.func.apply(v.thisArg, jn([d], v.args))
                        }, l)
                    }

                    function Iu(i, a, l) {
                        var d = i.length;
                        if (d < 2) return d ? Hn(i[0]) : [];
                        for (var v = -1, E = H(d); ++v < d;)
                            for (var $ = i[v], R = -1; ++R < d;) R != v && (E[v] = ya(E[v] || $, i[R], a, l));
                        return Hn(zt(E, 1), a, l)
                    }

                    function rm(i, a, l) {
                        for (var d = -1, v = i.length, E = a.length, $ = {}; ++d < v;) {
                            var R = d < E ? a[d] : r;
                            l($, i[d], R)
                        }
                        return $
                    }

                    function $u(i) {
                        return At(i) ? i : []
                    }

                    function Au(i) {
                        return typeof i == "function" ? i : yr
                    }

                    function Vn(i, a) {
                        return Fe(i) ? i : Fu(i, a) ? [i] : Nm(st(i))
                    }
                    var aC = Ke;

                    function Yn(i, a, l) {
                        var d = i.length;
                        return l = l === r ? d : l, !a && l >= d ? i : Br(i, a, l)
                    }
                    var nm = Y0 || function(i) {
                        return qt.clearTimeout(i)
                    };

                    function im(i, a) {
                        if (a) return i.slice();
                        var l = i.length,
                            d = wg ? wg(l) : new i.constructor(l);
                        return i.copy(d), d
                    }

                    function Ru(i) {
                        var a = new i.constructor(i.byteLength);
                        return new Ao(a).set(new Ao(i)), a
                    }

                    function oC(i, a) {
                        var l = a ? Ru(i.buffer) : i.buffer;
                        return new i.constructor(l, i.byteOffset, i.byteLength)
                    }

                    function cC(i) {
                        var a = new i.constructor(i.source, jp.exec(i));
                        return a.lastIndex = i.lastIndex, a
                    }

                    function lC(i) {
                        return ma ? ut(ma.call(i)) : {}
                    }

                    function sm(i, a) {
                        var l = a ? Ru(i.buffer) : i.buffer;
                        return new i.constructor(l, i.byteOffset, i.length)
                    }

                    function am(i, a) {
                        if (i !== a) {
                            var l = i !== r,
                                d = i === null,
                                v = i === i,
                                E = Ir(i),
                                $ = a !== r,
                                R = a === null,
                                x = a === a,
                                J = Ir(a);
                            if (!R && !J && !E && i > a || E && $ && x && !R && !J || d && $ && x || !l && x || !v) return 1;
                            if (!d && !E && !J && i < a || J && l && v && !d && !E || R && l && v || !$ && v || !x) return -1
                        }
                        return 0
                    }

                    function uC(i, a, l) {
                        for (var d = -1, v = i.criteria, E = a.criteria, $ = v.length, R = l.length; ++d < $;) {
                            var x = am(v[d], E[d]);
                            if (x) {
                                if (d >= R) return x;
                                var J = l[d];
                                return x * (J == "desc" ? -1 : 1)
                            }
                        }
                        return i.index - a.index
                    }

                    function om(i, a, l, d) {
                        for (var v = -1, E = i.length, $ = l.length, R = -1, x = a.length, J = Ft(E - $, 0), Z = H(x + J), ne = !d; ++R < x;) Z[R] = a[R];
                        for (; ++v < $;)(ne || v < E) && (Z[l[v]] = i[v]);
                        for (; J--;) Z[R++] = i[v++];
                        return Z
                    }

                    function cm(i, a, l, d) {
                        for (var v = -1, E = i.length, $ = -1, R = l.length, x = -1, J = a.length, Z = Ft(E - R, 0), ne = H(Z + J), me = !d; ++v < Z;) ne[v] = i[v];
                        for (var Oe = v; ++x < J;) ne[Oe + x] = a[x];
                        for (; ++$ < R;)(me || v < E) && (ne[Oe + l[$]] = i[v++]);
                        return ne
                    }

                    function gr(i, a) {
                        var l = -1,
                            d = i.length;
                        for (a || (a = H(d)); ++l < d;) a[l] = i[l];
                        return a
                    }

                    function dn(i, a, l, d) {
                        var v = !l;
                        l || (l = {});
                        for (var E = -1, $ = a.length; ++E < $;) {
                            var R = a[E],
                                x = d ? d(l[R], i[R], R, l, i) : r;
                            x === r && (x = i[R]), v ? wn(l, R, x) : va(l, R, x)
                        }
                        return l
                    }

                    function fC(i, a) {
                        return dn(i, Mu(i), a)
                    }

                    function dC(i, a) {
                        return dn(i, bm(i), a)
                    }

                    function Ko(i, a) {
                        return function(l, d) {
                            var v = Fe(l) ? v0 : k1,
                                E = a ? a() : {};
                            return v(l, i, Ae(d, 2), E)
                        }
                    }

                    function ys(i) {
                        return Ke(function(a, l) {
                            var d = -1,
                                v = l.length,
                                E = v > 1 ? l[v - 1] : r,
                                $ = v > 2 ? l[2] : r;
                            for (E = i.length > 3 && typeof E == "function" ? (v--, E) : r, $ && lr(l[0], l[1], $) && (E = v < 3 ? r : E, v = 1), a = ut(a); ++d < v;) {
                                var R = l[d];
                                R && i(a, R, d, E)
                            }
                            return a
                        })
                    }

                    function lm(i, a) {
                        return function(l, d) {
                            if (l == null) return l;
                            if (!mr(l)) return i(l, d);
                            for (var v = l.length, E = a ? v : -1, $ = ut(l);
                                (a ? E-- : ++E < v) && d($[E], E, $) !== !1;);
                            return l
                        }
                    }

                    function um(i) {
                        return function(a, l, d) {
                            for (var v = -1, E = ut(a), $ = d(a), R = $.length; R--;) {
                                var x = $[i ? R : ++v];
                                if (l(E[x], x, E) === !1) break
                            }
                            return a
                        }
                    }

                    function hC(i, a, l) {
                        var d = a & B,
                            v = Ta(i);

                        function E() {
                            var $ = this && this !== qt && this instanceof E ? v : i;
                            return $.apply(d ? l : this, arguments)
                        }
                        return E
                    }

                    function fm(i) {
                        return function(a) {
                            a = st(a);
                            var l = fs(a) ? Xr(a) : r,
                                d = l ? l[0] : a.charAt(0),
                                v = l ? Yn(l, 1).join("") : a.slice(1);
                            return d[i]() + v
                        }
                    }

                    function _s(i) {
                        return function(a) {
                            return tu(lv(cv(a).replace(n0, "")), i, "")
                        }
                    }

                    function Ta(i) {
                        return function() {
                            var a = arguments;
                            switch (a.length) {
                                case 0:
                                    return new i;
                                case 1:
                                    return new i(a[0]);
                                case 2:
                                    return new i(a[0], a[1]);
                                case 3:
                                    return new i(a[0], a[1], a[2]);
                                case 4:
                                    return new i(a[0], a[1], a[2], a[3]);
                                case 5:
                                    return new i(a[0], a[1], a[2], a[3], a[4]);
                                case 6:
                                    return new i(a[0], a[1], a[2], a[3], a[4], a[5]);
                                case 7:
                                    return new i(a[0], a[1], a[2], a[3], a[4], a[5], a[6])
                            }
                            var l = vs(i.prototype),
                                d = i.apply(l, a);
                            return Ot(d) ? d : l
                        }
                    }

                    function pC(i, a, l) {
                        var d = Ta(i);

                        function v() {
                            for (var E = arguments.length, $ = H(E), R = E, x = Es(v); R--;) $[R] = arguments[R];
                            var J = E < 3 && $[0] !== x && $[E - 1] !== x ? [] : Gn($, x);
                            if (E -= J.length, E < l) return mm(i, a, Ho, v.placeholder, r, $, J, r, r, l - E);
                            var Z = this && this !== qt && this instanceof v ? d : i;
                            return Or(Z, this, $)
                        }
                        return v
                    }

                    function dm(i) {
                        return function(a, l, d) {
                            var v = ut(a);
                            if (!mr(a)) {
                                var E = Ae(l, 3);
                                a = Kt(a), l = function(R) {
                                    return E(v[R], R, v)
                                }
                            }
                            var $ = i(a, l, d);
                            return $ > -1 ? v[E ? a[$] : $] : r
                        }
                    }

                    function hm(i) {
                        return In(function(a) {
                            var l = a.length,
                                d = l,
                                v = Fr.prototype.thru;
                            for (i && a.reverse(); d--;) {
                                var E = a[d];
                                if (typeof E != "function") throw new Mr(c);
                                if (v && !$ && zo(E) == "wrapper") var $ = new Fr([], !0)
                            }
                            for (d = $ ? d : l; ++d < l;) {
                                E = a[d];
                                var R = zo(E),
                                    x = R == "wrapper" ? xu(E) : r;
                                x && Uu(x[0]) && x[1] == (ie | Y | j | oe) && !x[4].length && x[9] == 1 ? $ = $[zo(x[0])].apply($, x[3]) : $ = E.length == 1 && Uu(E) ? $[R]() : $.thru(E)
                            }
                            return function() {
                                var J = arguments,
                                    Z = J[0];
                                if ($ && J.length == 1 && Fe(Z)) return $.plant(Z).value();
                                for (var ne = 0, me = l ? a[ne].apply(this, J) : Z; ++ne < l;) me = a[ne].call(this, me);
                                return me
                            }
                        })
                    }

                    function Ho(i, a, l, d, v, E, $, R, x, J) {
                        var Z = a & ie,
                            ne = a & B,
                            me = a & I,
                            Oe = a & (Y | G),
                            Re = a & ue,
                            Ge = me ? r : Ta(i);

                        function Ne() {
                            for (var He = arguments.length, Ye = H(He), $r = He; $r--;) Ye[$r] = arguments[$r];
                            if (Oe) var ur = Es(Ne),
                                Ar = C0(Ye, ur);
                            if (d && (Ye = om(Ye, d, v, Oe)), E && (Ye = cm(Ye, E, $, Oe)), He -= Ar, Oe && He < J) {
                                var Rt = Gn(Ye, ur);
                                return mm(i, a, Ho, Ne.placeholder, l, Ye, Rt, R, x, J - He)
                            }
                            var Qr = ne ? l : this,
                                Nn = me ? Qr[i] : i;
                            return He = Ye.length, R ? Ye = kC(Ye, R) : Re && He > 1 && Ye.reverse(), Z && x < He && (Ye.length = x), this && this !== qt && this instanceof Ne && (Nn = Ge || Ta(Nn)), Nn.apply(Qr, Ye)
                        }
                        return Ne
                    }

                    function pm(i, a) {
                        return function(l, d) {
                            return G1(l, i, a(d), {})
                        }
                    }

                    function Vo(i, a) {
                        return function(l, d) {
                            var v;
                            if (l === r && d === r) return a;
                            if (l !== r && (v = l), d !== r) {
                                if (v === r) return d;
                                typeof l == "string" || typeof d == "string" ? (l = Cr(l), d = Cr(d)) : (l = Qg(l), d = Qg(d)), v = i(l, d)
                            }
                            return v
                        }
                    }

                    function Nu(i) {
                        return In(function(a) {
                            return a = bt(a, wr(Ae())), Ke(function(l) {
                                var d = this;
                                return i(a, function(v) {
                                    return Or(v, d, l)
                                })
                            })
                        })
                    }

                    function Yo(i, a) {
                        a = a === r ? " " : Cr(a);
                        var l = a.length;
                        if (l < 2) return l ? Ou(a, i) : a;
                        var d = Ou(a, Lo(i / ds(a)));
                        return fs(a) ? Yn(Xr(d), 0, i).join("") : d.slice(0, i)
                    }

                    function gC(i, a, l, d) {
                        var v = a & B,
                            E = Ta(i);

                        function $() {
                            for (var R = -1, x = arguments.length, J = -1, Z = d.length, ne = H(Z + x), me = this && this !== qt && this instanceof $ ? E : i; ++J < Z;) ne[J] = d[J];
                            for (; x--;) ne[J++] = arguments[++R];
                            return Or(me, v ? l : this, ne)
                        }
                        return $
                    }

                    function gm(i) {
                        return function(a, l, d) {
                            return d && typeof d != "number" && lr(a, l, d) && (l = d = r), a = Rn(a), l === r ? (l = a, a = 0) : l = Rn(l), d = d === r ? a < l ? 1 : -1 : Rn(d), eC(a, l, d, i)
                        }
                    }

                    function qo(i) {
                        return function(a, l) {
                            return typeof a == "string" && typeof l == "string" || (a = Gr(a), l = Gr(l)), i(a, l)
                        }
                    }

                    function mm(i, a, l, d, v, E, $, R, x, J) {
                        var Z = a & Y,
                            ne = Z ? $ : r,
                            me = Z ? r : $,
                            Oe = Z ? E : r,
                            Re = Z ? r : E;
                        a |= Z ? j : z, a &= ~(Z ? z : j), a & K || (a &= ~(B | I));
                        var Ge = [i, a, v, Oe, ne, Re, me, R, x, J],
                            Ne = l.apply(r, Ge);
                        return Uu(i) && $m(Ne, Ge), Ne.placeholder = d, Am(Ne, i, a)
                    }

                    function Pu(i) {
                        var a = Mt[i];
                        return function(l, d) {
                            if (l = Gr(l), d = d == null ? 0 : rr(Be(d), 292), d && Ag(l)) {
                                var v = (st(l) + "e").split("e"),
                                    E = a(v[0] + "e" + (+v[1] + d));
                                return v = (st(E) + "e").split("e"), +(v[0] + "e" + (+v[1] - d))
                            }
                            return a(l)
                        }
                    }
                    var mC = gs && 1 / So(new gs([, -0]))[1] == Ee ? function(i) {
                        return new gs(i)
                    } : ef;

                    function vm(i) {
                        return function(a) {
                            var l = nr(a);
                            return l == p ? cu(a) : l == Q ? L0(a) : w0(a, i(a))
                        }
                    }

                    function Cn(i, a, l, d, v, E, $, R) {
                        var x = a & I;
                        if (!x && typeof i != "function") throw new Mr(c);
                        var J = d ? d.length : 0;
                        if (J || (a &= ~(j | z), d = v = r), $ = $ === r ? $ : Ft(Be($), 0), R = R === r ? R : Be(R), J -= v ? v.length : 0, a & z) {
                            var Z = d,
                                ne = v;
                            d = v = r
                        }
                        var me = x ? r : xu(i),
                            Oe = [i, a, l, d, v, Z, ne, E, $, R];
                        if (me && NC(Oe, me), i = Oe[0], a = Oe[1], l = Oe[2], d = Oe[3], v = Oe[4], R = Oe[9] = Oe[9] === r ? x ? 0 : i.length : Ft(Oe[9] - J, 0), !R && a & (Y | G) && (a &= ~(Y | G)), !a || a == B) var Re = hC(i, a, l);
                        else a == Y || a == G ? Re = pC(i, a, R) : (a == j || a == (B | j)) && !v.length ? Re = gC(i, a, l, d) : Re = Ho.apply(r, Oe);
                        var Ge = me ? Jg : $m;
                        return Am(Ge(Re, Oe), i, a)
                    }

                    function ym(i, a, l, d) {
                        return i === r || Zr(i, ps[l]) && !ct.call(d, l) ? a : i
                    }

                    function _m(i, a, l, d, v, E) {
                        return Ot(i) && Ot(a) && (E.set(a, i), jo(i, a, r, _m, E), E.delete(a)), i
                    }

                    function vC(i) {
                        return wa(i) ? r : i
                    }

                    function Em(i, a, l, d, v, E) {
                        var $ = l & L,
                            R = i.length,
                            x = a.length;
                        if (R != x && !($ && x > R)) return !1;
                        var J = E.get(i),
                            Z = E.get(a);
                        if (J && Z) return J == a && Z == i;
                        var ne = -1,
                            me = !0,
                            Oe = l & M ? new Ii : r;
                        for (E.set(i, a), E.set(a, i); ++ne < R;) {
                            var Re = i[ne],
                                Ge = a[ne];
                            if (d) var Ne = $ ? d(Ge, Re, ne, a, i, E) : d(Re, Ge, ne, i, a, E);
                            if (Ne !== r) {
                                if (Ne) continue;
                                me = !1;
                                break
                            }
                            if (Oe) {
                                if (!ru(a, function(He, Ye) {
                                        if (!fa(Oe, Ye) && (Re === He || v(Re, He, l, d, E))) return Oe.push(Ye)
                                    })) {
                                    me = !1;
                                    break
                                }
                            } else if (!(Re === Ge || v(Re, Ge, l, d, E))) {
                                me = !1;
                                break
                            }
                        }
                        return E.delete(i), E.delete(a), me
                    }

                    function yC(i, a, l, d, v, E, $) {
                        switch (l) {
                            case w:
                                if (i.byteLength != a.byteLength || i.byteOffset != a.byteOffset) return !1;
                                i = i.buffer, a = a.buffer;
                            case Le:
                                return !(i.byteLength != a.byteLength || !E(new Ao(i), new Ao(a)));
                            case Et:
                            case it:
                            case O:
                                return Zr(+i, +a);
                            case Wt:
                                return i.name == a.name && i.message == a.message;
                            case re:
                            case A:
                                return i == a + "";
                            case p:
                                var R = cu;
                            case Q:
                                var x = d & L;
                                if (R || (R = So), i.size != a.size && !x) return !1;
                                var J = $.get(i);
                                if (J) return J == a;
                                d |= M, $.set(i, a);
                                var Z = Em(R(i), R(a), d, v, E, $);
                                return $.delete(i), Z;
                            case W:
                                if (ma) return ma.call(i) == ma.call(a)
                        }
                        return !1
                    }

                    function _C(i, a, l, d, v, E) {
                        var $ = l & L,
                            R = Lu(i),
                            x = R.length,
                            J = Lu(a),
                            Z = J.length;
                        if (x != Z && !$) return !1;
                        for (var ne = x; ne--;) {
                            var me = R[ne];
                            if (!($ ? me in a : ct.call(a, me))) return !1
                        }
                        var Oe = E.get(i),
                            Re = E.get(a);
                        if (Oe && Re) return Oe == a && Re == i;
                        var Ge = !0;
                        E.set(i, a), E.set(a, i);
                        for (var Ne = $; ++ne < x;) {
                            me = R[ne];
                            var He = i[me],
                                Ye = a[me];
                            if (d) var $r = $ ? d(Ye, He, me, a, i, E) : d(He, Ye, me, i, a, E);
                            if (!($r === r ? He === Ye || v(He, Ye, l, d, E) : $r)) {
                                Ge = !1;
                                break
                            }
                            Ne || (Ne = me == "constructor")
                        }
                        if (Ge && !Ne) {
                            var ur = i.constructor,
                                Ar = a.constructor;
                            ur != Ar && "constructor" in i && "constructor" in a && !(typeof ur == "function" && ur instanceof ur && typeof Ar == "function" && Ar instanceof Ar) && (Ge = !1)
                        }
                        return E.delete(i), E.delete(a), Ge
                    }

                    function In(i) {
                        return ju(Cm(i, r, xm), i + "")
                    }

                    function Lu(i) {
                        return Bg(i, Kt, Mu)
                    }

                    function ku(i) {
                        return Bg(i, vr, bm)
                    }
                    var xu = xo ? function(i) {
                        return xo.get(i)
                    } : ef;

                    function zo(i) {
                        for (var a = i.name + "", l = ms[a], d = ct.call(ms, a) ? l.length : 0; d--;) {
                            var v = l[d],
                                E = v.func;
                            if (E == null || E == i) return v.name
                        }
                        return a
                    }

                    function Es(i) {
                        var a = ct.call(y, "placeholder") ? y : i;
                        return a.placeholder
                    }

                    function Ae() {
                        var i = y.iteratee || Zu;
                        return i = i === Zu ? Wg : i, arguments.length ? i(arguments[0], arguments[1]) : i
                    }

                    function Xo(i, a) {
                        var l = i.__data__;
                        return IC(a) ? l[typeof a == "string" ? "string" : "hash"] : l.map
                    }

                    function Du(i) {
                        for (var a = Kt(i), l = a.length; l--;) {
                            var d = a[l],
                                v = i[d];
                            a[l] = [d, v, Om(v)]
                        }
                        return a
                    }

                    function Ri(i, a) {
                        var l = R0(i, a);
                        return Gg(l) ? l : r
                    }

                    function EC(i) {
                        var a = ct.call(i, wi),
                            l = i[wi];
                        try {
                            i[wi] = r;
                            var d = !0
                        } catch {}
                        var v = Io.call(i);
                        return d && (a ? i[wi] = l : delete i[wi]), v
                    }
                    var Mu = uu ? function(i) {
                            return i == null ? [] : (i = ut(i), Bn(uu(i), function(a) {
                                return Ig.call(i, a)
                            }))
                        } : tf,
                        bm = uu ? function(i) {
                            for (var a = []; i;) jn(a, Mu(i)), i = Ro(i);
                            return a
                        } : tf,
                        nr = cr;
                    (fu && nr(new fu(new ArrayBuffer(1))) != w || ha && nr(new ha) != p || du && nr(du.resolve()) != V || gs && nr(new gs) != Q || pa && nr(new pa) != pe) && (nr = function(i) {
                        var a = cr(i),
                            l = a == U ? i.constructor : r,
                            d = l ? Ni(l) : "";
                        if (d) switch (d) {
                            case r1:
                                return w;
                            case n1:
                                return p;
                            case i1:
                                return V;
                            case s1:
                                return Q;
                            case a1:
                                return pe
                        }
                        return a
                    });

                    function bC(i, a, l) {
                        for (var d = -1, v = l.length; ++d < v;) {
                            var E = l[d],
                                $ = E.size;
                            switch (E.type) {
                                case "drop":
                                    i += $;
                                    break;
                                case "dropRight":
                                    a -= $;
                                    break;
                                case "take":
                                    a = rr(a, i + $);
                                    break;
                                case "takeRight":
                                    i = Ft(i, a - $);
                                    break
                            }
                        }
                        return {
                            start: i,
                            end: a
                        }
                    }

                    function TC(i) {
                        var a = i.match($w);
                        return a ? a[1].split(Aw) : []
                    }

                    function Tm(i, a, l) {
                        a = Vn(a, i);
                        for (var d = -1, v = a.length, E = !1; ++d < v;) {
                            var $ = hn(a[d]);
                            if (!(E = i != null && l(i, $))) break;
                            i = i[$]
                        }
                        return E || ++d != v ? E : (v = i == null ? 0 : i.length, !!v && nc(v) && $n($, v) && (Fe(i) || Pi(i)))
                    }

                    function SC(i) {
                        var a = i.length,
                            l = new i.constructor(a);
                        return a && typeof i[0] == "string" && ct.call(i, "index") && (l.index = i.index, l.input = i.input), l
                    }

                    function Sm(i) {
                        return typeof i.constructor == "function" && !Sa(i) ? vs(Ro(i)) : {}
                    }

                    function OC(i, a, l) {
                        var d = i.constructor;
                        switch (a) {
                            case Le:
                                return Ru(i);
                            case Et:
                            case it:
                                return new d(+i);
                            case w:
                                return oC(i, l);
                            case T:
                            case N:
                            case S:
                            case P:
                            case X:
                            case ee:
                            case _e:
                            case Te:
                            case ot:
                                return sm(i, l);
                            case p:
                                return new d;
                            case O:
                            case A:
                                return new d(i);
                            case re:
                                return cC(i);
                            case Q:
                                return new d;
                            case W:
                                return lC(i)
                        }
                    }

                    function wC(i, a) {
                        var l = a.length;
                        if (!l) return i;
                        var d = l - 1;
                        return a[d] = (l > 1 ? "& " : "") + a[d], a = a.join(l > 2 ? ", " : " "), i.replace(Iw, `{
/* [wrapped with ` + a + `] */
`)
                    }

                    function CC(i) {
                        return Fe(i) || Pi(i) || !!($g && i && i[$g])
                    }

                    function $n(i, a) {
                        var l = typeof i;
                        return a = a == null ? ve : a, !!a && (l == "number" || l != "symbol" && Fw.test(i)) && i > -1 && i % 1 == 0 && i < a
                    }

                    function lr(i, a, l) {
                        if (!Ot(l)) return !1;
                        var d = typeof a;
                        return (d == "number" ? mr(l) && $n(a, l.length) : d == "string" && a in l) ? Zr(l[a], i) : !1
                    }

                    function Fu(i, a) {
                        if (Fe(i)) return !1;
                        var l = typeof i;
                        return l == "number" || l == "symbol" || l == "boolean" || i == null || Ir(i) ? !0 : Sw.test(i) || !Tw.test(i) || a != null && i in ut(a)
                    }

                    function IC(i) {
                        var a = typeof i;
                        return a == "string" || a == "number" || a == "symbol" || a == "boolean" ? i !== "__proto__" : i === null
                    }

                    function Uu(i) {
                        var a = zo(i),
                            l = y[a];
                        if (typeof l != "function" || !(a in Ve.prototype)) return !1;
                        if (i === l) return !0;
                        var d = xu(l);
                        return !!d && i === d[0]
                    }

                    function $C(i) {
                        return !!Og && Og in i
                    }
                    var AC = wo ? An : rf;

                    function Sa(i) {
                        var a = i && i.constructor,
                            l = typeof a == "function" && a.prototype || ps;
                        return i === l
                    }

                    function Om(i) {
                        return i === i && !Ot(i)
                    }

                    function wm(i, a) {
                        return function(l) {
                            return l == null ? !1 : l[i] === a && (a !== r || i in ut(l))
                        }
                    }

                    function RC(i) {
                        var a = tc(i, function(d) {
                                return l.size === h && l.clear(), d
                            }),
                            l = a.cache;
                        return a
                    }

                    function NC(i, a) {
                        var l = i[1],
                            d = a[1],
                            v = l | d,
                            E = v < (B | I | ie),
                            $ = d == ie && l == Y || d == ie && l == oe && i[7].length <= a[8] || d == (ie | oe) && a[7].length <= a[8] && l == Y;
                        if (!(E || $)) return i;
                        d & B && (i[2] = a[2], v |= l & B ? 0 : K);
                        var R = a[3];
                        if (R) {
                            var x = i[3];
                            i[3] = x ? om(x, R, a[4]) : R, i[4] = x ? Gn(i[3], m) : a[4]
                        }
                        return R = a[5], R && (x = i[5], i[5] = x ? cm(x, R, a[6]) : R, i[6] = x ? Gn(i[5], m) : a[6]), R = a[7], R && (i[7] = R), d & ie && (i[8] = i[8] == null ? a[8] : rr(i[8], a[8])), i[9] == null && (i[9] = a[9]), i[0] = a[0], i[1] = v, i
                    }

                    function PC(i) {
                        var a = [];
                        if (i != null)
                            for (var l in ut(i)) a.push(l);
                        return a
                    }

                    function LC(i) {
                        return Io.call(i)
                    }

                    function Cm(i, a, l) {
                        return a = Ft(a === r ? i.length - 1 : a, 0),
                            function() {
                                for (var d = arguments, v = -1, E = Ft(d.length - a, 0), $ = H(E); ++v < E;) $[v] = d[a + v];
                                v = -1;
                                for (var R = H(a + 1); ++v < a;) R[v] = d[v];
                                return R[a] = l($), Or(i, this, R)
                            }
                    }

                    function Im(i, a) {
                        return a.length < 2 ? i : Ai(i, Br(a, 0, -1))
                    }

                    function kC(i, a) {
                        for (var l = i.length, d = rr(a.length, l), v = gr(i); d--;) {
                            var E = a[d];
                            i[d] = $n(E, l) ? v[E] : r
                        }
                        return i
                    }

                    function Bu(i, a) {
                        if (!(a === "constructor" && typeof i[a] == "function") && a != "__proto__") return i[a]
                    }
                    var $m = Rm(Jg),
                        Oa = z0 || function(i, a) {
                            return qt.setTimeout(i, a)
                        },
                        ju = Rm(nC);

                    function Am(i, a, l) {
                        var d = a + "";
                        return ju(i, wC(d, xC(TC(d), l)))
                    }

                    function Rm(i) {
                        var a = 0,
                            l = 0;
                        return function() {
                            var d = Q0(),
                                v = we - (d - l);
                            if (l = d, v > 0) {
                                if (++a >= fe) return arguments[0]
                            } else a = 0;
                            return i.apply(r, arguments)
                        }
                    }

                    function Jo(i, a) {
                        var l = -1,
                            d = i.length,
                            v = d - 1;
                        for (a = a === r ? d : a; ++l < a;) {
                            var E = Su(l, v),
                                $ = i[E];
                            i[E] = i[l], i[l] = $
                        }
                        return i.length = a, i
                    }
                    var Nm = RC(function(i) {
                        var a = [];
                        return i.charCodeAt(0) === 46 && a.push(""), i.replace(Ow, function(l, d, v, E) {
                            a.push(v ? E.replace(Pw, "$1") : d || l)
                        }), a
                    });

                    function hn(i) {
                        if (typeof i == "string" || Ir(i)) return i;
                        var a = i + "";
                        return a == "0" && 1 / i == -Ee ? "-0" : a
                    }

                    function Ni(i) {
                        if (i != null) {
                            try {
                                return Co.call(i)
                            } catch {}
                            try {
                                return i + ""
                            } catch {}
                        }
                        return ""
                    }

                    function xC(i, a) {
                        return Dr(Sr, function(l) {
                            var d = "_." + l[0];
                            a & l[1] && !bo(i, d) && i.push(d)
                        }), i.sort()
                    }

                    function Pm(i) {
                        if (i instanceof Ve) return i.clone();
                        var a = new Fr(i.__wrapped__, i.__chain__);
                        return a.__actions__ = gr(i.__actions__), a.__index__ = i.__index__, a.__values__ = i.__values__, a
                    }

                    function DC(i, a, l) {
                        (l ? lr(i, a, l) : a === r) ? a = 1: a = Ft(Be(a), 0);
                        var d = i == null ? 0 : i.length;
                        if (!d || a < 1) return [];
                        for (var v = 0, E = 0, $ = H(Lo(d / a)); v < d;) $[E++] = Br(i, v, v += a);
                        return $
                    }

                    function MC(i) {
                        for (var a = -1, l = i == null ? 0 : i.length, d = 0, v = []; ++a < l;) {
                            var E = i[a];
                            E && (v[d++] = E)
                        }
                        return v
                    }

                    function FC() {
                        var i = arguments.length;
                        if (!i) return [];
                        for (var a = H(i - 1), l = arguments[0], d = i; d--;) a[d - 1] = arguments[d];
                        return jn(Fe(l) ? gr(l) : [l], zt(a, 1))
                    }
                    var UC = Ke(function(i, a) {
                            return At(i) ? ya(i, zt(a, 1, At, !0)) : []
                        }),
                        BC = Ke(function(i, a) {
                            var l = jr(a);
                            return At(l) && (l = r), At(i) ? ya(i, zt(a, 1, At, !0), Ae(l, 2)) : []
                        }),
                        jC = Ke(function(i, a) {
                            var l = jr(a);
                            return At(l) && (l = r), At(i) ? ya(i, zt(a, 1, At, !0), r, l) : []
                        });

                    function GC(i, a, l) {
                        var d = i == null ? 0 : i.length;
                        return d ? (a = l || a === r ? 1 : Be(a), Br(i, a < 0 ? 0 : a, d)) : []
                    }

                    function WC(i, a, l) {
                        var d = i == null ? 0 : i.length;
                        return d ? (a = l || a === r ? 1 : Be(a), a = d - a, Br(i, 0, a < 0 ? 0 : a)) : []
                    }

                    function KC(i, a) {
                        return i && i.length ? Wo(i, Ae(a, 3), !0, !0) : []
                    }

                    function HC(i, a) {
                        return i && i.length ? Wo(i, Ae(a, 3), !0) : []
                    }

                    function VC(i, a, l, d) {
                        var v = i == null ? 0 : i.length;
                        return v ? (l && typeof l != "number" && lr(i, a, l) && (l = 0, d = v), F1(i, a, l, d)) : []
                    }

                    function Lm(i, a, l) {
                        var d = i == null ? 0 : i.length;
                        if (!d) return -1;
                        var v = l == null ? 0 : Be(l);
                        return v < 0 && (v = Ft(d + v, 0)), To(i, Ae(a, 3), v)
                    }

                    function km(i, a, l) {
                        var d = i == null ? 0 : i.length;
                        if (!d) return -1;
                        var v = d - 1;
                        return l !== r && (v = Be(l), v = l < 0 ? Ft(d + v, 0) : rr(v, d - 1)), To(i, Ae(a, 3), v, !0)
                    }

                    function xm(i) {
                        var a = i == null ? 0 : i.length;
                        return a ? zt(i, 1) : []
                    }

                    function YC(i) {
                        var a = i == null ? 0 : i.length;
                        return a ? zt(i, Ee) : []
                    }

                    function qC(i, a) {
                        var l = i == null ? 0 : i.length;
                        return l ? (a = a === r ? 1 : Be(a), zt(i, a)) : []
                    }

                    function zC(i) {
                        for (var a = -1, l = i == null ? 0 : i.length, d = {}; ++a < l;) {
                            var v = i[a];
                            d[v[0]] = v[1]
                        }
                        return d
                    }

                    function Dm(i) {
                        return i && i.length ? i[0] : r
                    }

                    function XC(i, a, l) {
                        var d = i == null ? 0 : i.length;
                        if (!d) return -1;
                        var v = l == null ? 0 : Be(l);
                        return v < 0 && (v = Ft(d + v, 0)), us(i, a, v)
                    }

                    function JC(i) {
                        var a = i == null ? 0 : i.length;
                        return a ? Br(i, 0, -1) : []
                    }
                    var ZC = Ke(function(i) {
                            var a = bt(i, $u);
                            return a.length && a[0] === i[0] ? yu(a) : []
                        }),
                        QC = Ke(function(i) {
                            var a = jr(i),
                                l = bt(i, $u);
                            return a === jr(l) ? a = r : l.pop(), l.length && l[0] === i[0] ? yu(l, Ae(a, 2)) : []
                        }),
                        eI = Ke(function(i) {
                            var a = jr(i),
                                l = bt(i, $u);
                            return a = typeof a == "function" ? a : r, a && l.pop(), l.length && l[0] === i[0] ? yu(l, r, a) : []
                        });

                    function tI(i, a) {
                        return i == null ? "" : J0.call(i, a)
                    }

                    function jr(i) {
                        var a = i == null ? 0 : i.length;
                        return a ? i[a - 1] : r
                    }

                    function rI(i, a, l) {
                        var d = i == null ? 0 : i.length;
                        if (!d) return -1;
                        var v = d;
                        return l !== r && (v = Be(l), v = v < 0 ? Ft(d + v, 0) : rr(v, d - 1)), a === a ? x0(i, a, v) : To(i, mg, v, !0)
                    }

                    function nI(i, a) {
                        return i && i.length ? Yg(i, Be(a)) : r
                    }
                    var iI = Ke(Mm);

                    function Mm(i, a) {
                        return i && i.length && a && a.length ? Tu(i, a) : i
                    }

                    function sI(i, a, l) {
                        return i && i.length && a && a.length ? Tu(i, a, Ae(l, 2)) : i
                    }

                    function aI(i, a, l) {
                        return i && i.length && a && a.length ? Tu(i, a, r, l) : i
                    }
                    var oI = In(function(i, a) {
                        var l = i == null ? 0 : i.length,
                            d = pu(i, a);
                        return Xg(i, bt(a, function(v) {
                            return $n(v, l) ? +v : v
                        }).sort(am)), d
                    });

                    function cI(i, a) {
                        var l = [];
                        if (!(i && i.length)) return l;
                        var d = -1,
                            v = [],
                            E = i.length;
                        for (a = Ae(a, 3); ++d < E;) {
                            var $ = i[d];
                            a($, d, i) && (l.push($), v.push(d))
                        }
                        return Xg(i, v), l
                    }

                    function Gu(i) {
                        return i == null ? i : t1.call(i)
                    }

                    function lI(i, a, l) {
                        var d = i == null ? 0 : i.length;
                        return d ? (l && typeof l != "number" && lr(i, a, l) ? (a = 0, l = d) : (a = a == null ? 0 : Be(a), l = l === r ? d : Be(l)), Br(i, a, l)) : []
                    }

                    function uI(i, a) {
                        return Go(i, a)
                    }

                    function fI(i, a, l) {
                        return wu(i, a, Ae(l, 2))
                    }

                    function dI(i, a) {
                        var l = i == null ? 0 : i.length;
                        if (l) {
                            var d = Go(i, a);
                            if (d < l && Zr(i[d], a)) return d
                        }
                        return -1
                    }

                    function hI(i, a) {
                        return Go(i, a, !0)
                    }

                    function pI(i, a, l) {
                        return wu(i, a, Ae(l, 2), !0)
                    }

                    function gI(i, a) {
                        var l = i == null ? 0 : i.length;
                        if (l) {
                            var d = Go(i, a, !0) - 1;
                            if (Zr(i[d], a)) return d
                        }
                        return -1
                    }

                    function mI(i) {
                        return i && i.length ? Zg(i) : []
                    }

                    function vI(i, a) {
                        return i && i.length ? Zg(i, Ae(a, 2)) : []
                    }

                    function yI(i) {
                        var a = i == null ? 0 : i.length;
                        return a ? Br(i, 1, a) : []
                    }

                    function _I(i, a, l) {
                        return i && i.length ? (a = l || a === r ? 1 : Be(a), Br(i, 0, a < 0 ? 0 : a)) : []
                    }

                    function EI(i, a, l) {
                        var d = i == null ? 0 : i.length;
                        return d ? (a = l || a === r ? 1 : Be(a), a = d - a, Br(i, a < 0 ? 0 : a, d)) : []
                    }

                    function bI(i, a) {
                        return i && i.length ? Wo(i, Ae(a, 3), !1, !0) : []
                    }

                    function TI(i, a) {
                        return i && i.length ? Wo(i, Ae(a, 3)) : []
                    }
                    var SI = Ke(function(i) {
                            return Hn(zt(i, 1, At, !0))
                        }),
                        OI = Ke(function(i) {
                            var a = jr(i);
                            return At(a) && (a = r), Hn(zt(i, 1, At, !0), Ae(a, 2))
                        }),
                        wI = Ke(function(i) {
                            var a = jr(i);
                            return a = typeof a == "function" ? a : r, Hn(zt(i, 1, At, !0), r, a)
                        });

                    function CI(i) {
                        return i && i.length ? Hn(i) : []
                    }

                    function II(i, a) {
                        return i && i.length ? Hn(i, Ae(a, 2)) : []
                    }

                    function $I(i, a) {
                        return a = typeof a == "function" ? a : r, i && i.length ? Hn(i, r, a) : []
                    }

                    function Wu(i) {
                        if (!(i && i.length)) return [];
                        var a = 0;
                        return i = Bn(i, function(l) {
                            if (At(l)) return a = Ft(l.length, a), !0
                        }), au(a, function(l) {
                            return bt(i, nu(l))
                        })
                    }

                    function Fm(i, a) {
                        if (!(i && i.length)) return [];
                        var l = Wu(i);
                        return a == null ? l : bt(l, function(d) {
                            return Or(a, r, d)
                        })
                    }
                    var AI = Ke(function(i, a) {
                            return At(i) ? ya(i, a) : []
                        }),
                        RI = Ke(function(i) {
                            return Iu(Bn(i, At))
                        }),
                        NI = Ke(function(i) {
                            var a = jr(i);
                            return At(a) && (a = r), Iu(Bn(i, At), Ae(a, 2))
                        }),
                        PI = Ke(function(i) {
                            var a = jr(i);
                            return a = typeof a == "function" ? a : r, Iu(Bn(i, At), r, a)
                        }),
                        LI = Ke(Wu);

                    function kI(i, a) {
                        return rm(i || [], a || [], va)
                    }

                    function xI(i, a) {
                        return rm(i || [], a || [], ba)
                    }
                    var DI = Ke(function(i) {
                        var a = i.length,
                            l = a > 1 ? i[a - 1] : r;
                        return l = typeof l == "function" ? (i.pop(), l) : r, Fm(i, l)
                    });

                    function Um(i) {
                        var a = y(i);
                        return a.__chain__ = !0, a
                    }

                    function MI(i, a) {
                        return a(i), i
                    }

                    function Zo(i, a) {
                        return a(i)
                    }
                    var FI = In(function(i) {
                        var a = i.length,
                            l = a ? i[0] : 0,
                            d = this.__wrapped__,
                            v = function(E) {
                                return pu(E, i)
                            };
                        return a > 1 || this.__actions__.length || !(d instanceof Ve) || !$n(l) ? this.thru(v) : (d = d.slice(l, +l + (a ? 1 : 0)), d.__actions__.push({
                            func: Zo,
                            args: [v],
                            thisArg: r
                        }), new Fr(d, this.__chain__).thru(function(E) {
                            return a && !E.length && E.push(r), E
                        }))
                    });

                    function UI() {
                        return Um(this)
                    }

                    function BI() {
                        return new Fr(this.value(), this.__chain__)
                    }

                    function jI() {
                        this.__values__ === r && (this.__values__ = Qm(this.value()));
                        var i = this.__index__ >= this.__values__.length,
                            a = i ? r : this.__values__[this.__index__++];
                        return {
                            done: i,
                            value: a
                        }
                    }

                    function GI() {
                        return this
                    }

                    function WI(i) {
                        for (var a, l = this; l instanceof Mo;) {
                            var d = Pm(l);
                            d.__index__ = 0, d.__values__ = r, a ? v.__wrapped__ = d : a = d;
                            var v = d;
                            l = l.__wrapped__
                        }
                        return v.__wrapped__ = i, a
                    }

                    function KI() {
                        var i = this.__wrapped__;
                        if (i instanceof Ve) {
                            var a = i;
                            return this.__actions__.length && (a = new Ve(this)), a = a.reverse(), a.__actions__.push({
                                func: Zo,
                                args: [Gu],
                                thisArg: r
                            }), new Fr(a, this.__chain__)
                        }
                        return this.thru(Gu)
                    }

                    function HI() {
                        return tm(this.__wrapped__, this.__actions__)
                    }
                    var VI = Ko(function(i, a, l) {
                        ct.call(i, l) ? ++i[l] : wn(i, l, 1)
                    });

                    function YI(i, a, l) {
                        var d = Fe(i) ? pg : M1;
                        return l && lr(i, a, l) && (a = r), d(i, Ae(a, 3))
                    }

                    function qI(i, a) {
                        var l = Fe(i) ? Bn : Fg;
                        return l(i, Ae(a, 3))
                    }
                    var zI = dm(Lm),
                        XI = dm(km);

                    function JI(i, a) {
                        return zt(Qo(i, a), 1)
                    }

                    function ZI(i, a) {
                        return zt(Qo(i, a), Ee)
                    }

                    function QI(i, a, l) {
                        return l = l === r ? 1 : Be(l), zt(Qo(i, a), l)
                    }

                    function Bm(i, a) {
                        var l = Fe(i) ? Dr : Kn;
                        return l(i, Ae(a, 3))
                    }

                    function jm(i, a) {
                        var l = Fe(i) ? y0 : Mg;
                        return l(i, Ae(a, 3))
                    }
                    var e$ = Ko(function(i, a, l) {
                        ct.call(i, l) ? i[l].push(a) : wn(i, l, [a])
                    });

                    function t$(i, a, l, d) {
                        i = mr(i) ? i : Ts(i), l = l && !d ? Be(l) : 0;
                        var v = i.length;
                        return l < 0 && (l = Ft(v + l, 0)), ic(i) ? l <= v && i.indexOf(a, l) > -1 : !!v && us(i, a, l) > -1
                    }
                    var r$ = Ke(function(i, a, l) {
                            var d = -1,
                                v = typeof a == "function",
                                E = mr(i) ? H(i.length) : [];
                            return Kn(i, function($) {
                                E[++d] = v ? Or(a, $, l) : _a($, a, l)
                            }), E
                        }),
                        n$ = Ko(function(i, a, l) {
                            wn(i, l, a)
                        });

                    function Qo(i, a) {
                        var l = Fe(i) ? bt : Kg;
                        return l(i, Ae(a, 3))
                    }

                    function i$(i, a, l, d) {
                        return i == null ? [] : (Fe(a) || (a = a == null ? [] : [a]), l = d ? r : l, Fe(l) || (l = l == null ? [] : [l]), qg(i, a, l))
                    }
                    var s$ = Ko(function(i, a, l) {
                        i[l ? 0 : 1].push(a)
                    }, function() {
                        return [
                            [],
                            []
                        ]
                    });

                    function a$(i, a, l) {
                        var d = Fe(i) ? tu : yg,
                            v = arguments.length < 3;
                        return d(i, Ae(a, 4), l, v, Kn)
                    }

                    function o$(i, a, l) {
                        var d = Fe(i) ? _0 : yg,
                            v = arguments.length < 3;
                        return d(i, Ae(a, 4), l, v, Mg)
                    }

                    function c$(i, a) {
                        var l = Fe(i) ? Bn : Fg;
                        return l(i, rc(Ae(a, 3)))
                    }

                    function l$(i) {
                        var a = Fe(i) ? Lg : tC;
                        return a(i)
                    }

                    function u$(i, a, l) {
                        (l ? lr(i, a, l) : a === r) ? a = 1: a = Be(a);
                        var d = Fe(i) ? P1 : rC;
                        return d(i, a)
                    }

                    function f$(i) {
                        var a = Fe(i) ? L1 : iC;
                        return a(i)
                    }

                    function d$(i) {
                        if (i == null) return 0;
                        if (mr(i)) return ic(i) ? ds(i) : i.length;
                        var a = nr(i);
                        return a == p || a == Q ? i.size : Eu(i).length
                    }

                    function h$(i, a, l) {
                        var d = Fe(i) ? ru : sC;
                        return l && lr(i, a, l) && (a = r), d(i, Ae(a, 3))
                    }
                    var p$ = Ke(function(i, a) {
                            if (i == null) return [];
                            var l = a.length;
                            return l > 1 && lr(i, a[0], a[1]) ? a = [] : l > 2 && lr(a[0], a[1], a[2]) && (a = [a[0]]), qg(i, zt(a, 1), [])
                        }),
                        ec = q0 || function() {
                            return qt.Date.now()
                        };

                    function g$(i, a) {
                        if (typeof a != "function") throw new Mr(c);
                        return i = Be(i),
                            function() {
                                if (--i < 1) return a.apply(this, arguments)
                            }
                    }

                    function Gm(i, a, l) {
                        return a = l ? r : a, a = i && a == null ? i.length : a, Cn(i, ie, r, r, r, r, a)
                    }

                    function Wm(i, a) {
                        var l;
                        if (typeof a != "function") throw new Mr(c);
                        return i = Be(i),
                            function() {
                                return --i > 0 && (l = a.apply(this, arguments)), i <= 1 && (a = r), l
                            }
                    }
                    var Ku = Ke(function(i, a, l) {
                            var d = B;
                            if (l.length) {
                                var v = Gn(l, Es(Ku));
                                d |= j
                            }
                            return Cn(i, d, a, l, v)
                        }),
                        Km = Ke(function(i, a, l) {
                            var d = B | I;
                            if (l.length) {
                                var v = Gn(l, Es(Km));
                                d |= j
                            }
                            return Cn(a, d, i, l, v)
                        });

                    function Hm(i, a, l) {
                        a = l ? r : a;
                        var d = Cn(i, Y, r, r, r, r, r, a);
                        return d.placeholder = Hm.placeholder, d
                    }

                    function Vm(i, a, l) {
                        a = l ? r : a;
                        var d = Cn(i, G, r, r, r, r, r, a);
                        return d.placeholder = Vm.placeholder, d
                    }

                    function Ym(i, a, l) {
                        var d, v, E, $, R, x, J = 0,
                            Z = !1,
                            ne = !1,
                            me = !0;
                        if (typeof i != "function") throw new Mr(c);
                        a = Gr(a) || 0, Ot(l) && (Z = !!l.leading, ne = "maxWait" in l, E = ne ? Ft(Gr(l.maxWait) || 0, a) : E, me = "trailing" in l ? !!l.trailing : me);

                        function Oe(Rt) {
                            var Qr = d,
                                Nn = v;
                            return d = v = r, J = Rt, $ = i.apply(Nn, Qr), $
                        }

                        function Re(Rt) {
                            return J = Rt, R = Oa(He, a), Z ? Oe(Rt) : $
                        }

                        function Ge(Rt) {
                            var Qr = Rt - x,
                                Nn = Rt - J,
                                dv = a - Qr;
                            return ne ? rr(dv, E - Nn) : dv
                        }

                        function Ne(Rt) {
                            var Qr = Rt - x,
                                Nn = Rt - J;
                            return x === r || Qr >= a || Qr < 0 || ne && Nn >= E
                        }

                        function He() {
                            var Rt = ec();
                            if (Ne(Rt)) return Ye(Rt);
                            R = Oa(He, Ge(Rt))
                        }

                        function Ye(Rt) {
                            return R = r, me && d ? Oe(Rt) : (d = v = r, $)
                        }

                        function $r() {
                            R !== r && nm(R), J = 0, d = x = v = R = r
                        }

                        function ur() {
                            return R === r ? $ : Ye(ec())
                        }

                        function Ar() {
                            var Rt = ec(),
                                Qr = Ne(Rt);
                            if (d = arguments, v = this, x = Rt, Qr) {
                                if (R === r) return Re(x);
                                if (ne) return nm(R), R = Oa(He, a), Oe(x)
                            }
                            return R === r && (R = Oa(He, a)), $
                        }
                        return Ar.cancel = $r, Ar.flush = ur, Ar
                    }
                    var m$ = Ke(function(i, a) {
                            return Dg(i, 1, a)
                        }),
                        v$ = Ke(function(i, a, l) {
                            return Dg(i, Gr(a) || 0, l)
                        });

                    function y$(i) {
                        return Cn(i, ue)
                    }

                    function tc(i, a) {
                        if (typeof i != "function" || a != null && typeof a != "function") throw new Mr(c);
                        var l = function() {
                            var d = arguments,
                                v = a ? a.apply(this, d) : d[0],
                                E = l.cache;
                            if (E.has(v)) return E.get(v);
                            var $ = i.apply(this, d);
                            return l.cache = E.set(v, $) || E, $
                        };
                        return l.cache = new(tc.Cache || On), l
                    }
                    tc.Cache = On;

                    function rc(i) {
                        if (typeof i != "function") throw new Mr(c);
                        return function() {
                            var a = arguments;
                            switch (a.length) {
                                case 0:
                                    return !i.call(this);
                                case 1:
                                    return !i.call(this, a[0]);
                                case 2:
                                    return !i.call(this, a[0], a[1]);
                                case 3:
                                    return !i.call(this, a[0], a[1], a[2])
                            }
                            return !i.apply(this, a)
                        }
                    }

                    function _$(i) {
                        return Wm(2, i)
                    }
                    var E$ = aC(function(i, a) {
                            a = a.length == 1 && Fe(a[0]) ? bt(a[0], wr(Ae())) : bt(zt(a, 1), wr(Ae()));
                            var l = a.length;
                            return Ke(function(d) {
                                for (var v = -1, E = rr(d.length, l); ++v < E;) d[v] = a[v].call(this, d[v]);
                                return Or(i, this, d)
                            })
                        }),
                        Hu = Ke(function(i, a) {
                            var l = Gn(a, Es(Hu));
                            return Cn(i, j, r, a, l)
                        }),
                        qm = Ke(function(i, a) {
                            var l = Gn(a, Es(qm));
                            return Cn(i, z, r, a, l)
                        }),
                        b$ = In(function(i, a) {
                            return Cn(i, oe, r, r, r, a)
                        });

                    function T$(i, a) {
                        if (typeof i != "function") throw new Mr(c);
                        return a = a === r ? a : Be(a), Ke(i, a)
                    }

                    function S$(i, a) {
                        if (typeof i != "function") throw new Mr(c);
                        return a = a == null ? 0 : Ft(Be(a), 0), Ke(function(l) {
                            var d = l[a],
                                v = Yn(l, 0, a);
                            return d && jn(v, d), Or(i, this, v)
                        })
                    }

                    function O$(i, a, l) {
                        var d = !0,
                            v = !0;
                        if (typeof i != "function") throw new Mr(c);
                        return Ot(l) && (d = "leading" in l ? !!l.leading : d, v = "trailing" in l ? !!l.trailing : v), Ym(i, a, {
                            leading: d,
                            maxWait: a,
                            trailing: v
                        })
                    }

                    function w$(i) {
                        return Gm(i, 1)
                    }

                    function C$(i, a) {
                        return Hu(Au(a), i)
                    }

                    function I$() {
                        if (!arguments.length) return [];
                        var i = arguments[0];
                        return Fe(i) ? i : [i]
                    }

                    function $$(i) {
                        return Ur(i, C)
                    }

                    function A$(i, a) {
                        return a = typeof a == "function" ? a : r, Ur(i, C, a)
                    }

                    function R$(i) {
                        return Ur(i, _ | C)
                    }

                    function N$(i, a) {
                        return a = typeof a == "function" ? a : r, Ur(i, _ | C, a)
                    }

                    function P$(i, a) {
                        return a == null || xg(i, a, Kt(a))
                    }

                    function Zr(i, a) {
                        return i === a || i !== i && a !== a
                    }
                    var L$ = qo(vu),
                        k$ = qo(function(i, a) {
                            return i >= a
                        }),
                        Pi = jg(function() {
                            return arguments
                        }()) ? jg : function(i) {
                            return Ct(i) && ct.call(i, "callee") && !Ig.call(i, "callee")
                        },
                        Fe = H.isArray,
                        x$ = cg ? wr(cg) : W1;

                    function mr(i) {
                        return i != null && nc(i.length) && !An(i)
                    }

                    function At(i) {
                        return Ct(i) && mr(i)
                    }

                    function D$(i) {
                        return i === !0 || i === !1 || Ct(i) && cr(i) == Et
                    }
                    var qn = X0 || rf,
                        M$ = lg ? wr(lg) : K1;

                    function F$(i) {
                        return Ct(i) && i.nodeType === 1 && !wa(i)
                    }

                    function U$(i) {
                        if (i == null) return !0;
                        if (mr(i) && (Fe(i) || typeof i == "string" || typeof i.splice == "function" || qn(i) || bs(i) || Pi(i))) return !i.length;
                        var a = nr(i);
                        if (a == p || a == Q) return !i.size;
                        if (Sa(i)) return !Eu(i).length;
                        for (var l in i)
                            if (ct.call(i, l)) return !1;
                        return !0
                    }

                    function B$(i, a) {
                        return Ea(i, a)
                    }

                    function j$(i, a, l) {
                        l = typeof l == "function" ? l : r;
                        var d = l ? l(i, a) : r;
                        return d === r ? Ea(i, a, r, l) : !!d
                    }

                    function Vu(i) {
                        if (!Ct(i)) return !1;
                        var a = cr(i);
                        return a == Wt || a == Lt || typeof i.message == "string" && typeof i.name == "string" && !wa(i)
                    }

                    function G$(i) {
                        return typeof i == "number" && Ag(i)
                    }

                    function An(i) {
                        if (!Ot(i)) return !1;
                        var a = cr(i);
                        return a == kt || a == g || a == nt || a == ce
                    }

                    function zm(i) {
                        return typeof i == "number" && i == Be(i)
                    }

                    function nc(i) {
                        return typeof i == "number" && i > -1 && i % 1 == 0 && i <= ve
                    }

                    function Ot(i) {
                        var a = typeof i;
                        return i != null && (a == "object" || a == "function")
                    }

                    function Ct(i) {
                        return i != null && typeof i == "object"
                    }
                    var Xm = ug ? wr(ug) : V1;

                    function W$(i, a) {
                        return i === a || _u(i, a, Du(a))
                    }

                    function K$(i, a, l) {
                        return l = typeof l == "function" ? l : r, _u(i, a, Du(a), l)
                    }

                    function H$(i) {
                        return Jm(i) && i != +i
                    }

                    function V$(i) {
                        if (AC(i)) throw new De(o);
                        return Gg(i)
                    }

                    function Y$(i) {
                        return i === null
                    }

                    function q$(i) {
                        return i == null
                    }

                    function Jm(i) {
                        return typeof i == "number" || Ct(i) && cr(i) == O
                    }

                    function wa(i) {
                        if (!Ct(i) || cr(i) != U) return !1;
                        var a = Ro(i);
                        if (a === null) return !0;
                        var l = ct.call(a, "constructor") && a.constructor;
                        return typeof l == "function" && l instanceof l && Co.call(l) == K0
                    }
                    var Yu = fg ? wr(fg) : Y1;

                    function z$(i) {
                        return zm(i) && i >= -ve && i <= ve
                    }
                    var Zm = dg ? wr(dg) : q1;

                    function ic(i) {
                        return typeof i == "string" || !Fe(i) && Ct(i) && cr(i) == A
                    }

                    function Ir(i) {
                        return typeof i == "symbol" || Ct(i) && cr(i) == W
                    }
                    var bs = hg ? wr(hg) : z1;

                    function X$(i) {
                        return i === r
                    }

                    function J$(i) {
                        return Ct(i) && nr(i) == pe
                    }

                    function Z$(i) {
                        return Ct(i) && cr(i) == $e
                    }
                    var Q$ = qo(bu),
                        eA = qo(function(i, a) {
                            return i <= a
                        });

                    function Qm(i) {
                        if (!i) return [];
                        if (mr(i)) return ic(i) ? Xr(i) : gr(i);
                        if (da && i[da]) return P0(i[da]());
                        var a = nr(i),
                            l = a == p ? cu : a == Q ? So : Ts;
                        return l(i)
                    }

                    function Rn(i) {
                        if (!i) return i === 0 ? i : 0;
                        if (i = Gr(i), i === Ee || i === -Ee) {
                            var a = i < 0 ? -1 : 1;
                            return a * Se
                        }
                        return i === i ? i : 0
                    }

                    function Be(i) {
                        var a = Rn(i),
                            l = a % 1;
                        return a === a ? l ? a - l : a : 0
                    }

                    function ev(i) {
                        return i ? $i(Be(i), 0, Ue) : 0
                    }

                    function Gr(i) {
                        if (typeof i == "number") return i;
                        if (Ir(i)) return xe;
                        if (Ot(i)) {
                            var a = typeof i.valueOf == "function" ? i.valueOf() : i;
                            i = Ot(a) ? a + "" : a
                        }
                        if (typeof i != "string") return i === 0 ? i : +i;
                        i = _g(i);
                        var l = xw.test(i);
                        return l || Mw.test(i) ? g0(i.slice(2), l ? 2 : 8) : kw.test(i) ? xe : +i
                    }

                    function tv(i) {
                        return dn(i, vr(i))
                    }

                    function tA(i) {
                        return i ? $i(Be(i), -ve, ve) : i === 0 ? i : 0
                    }

                    function st(i) {
                        return i == null ? "" : Cr(i)
                    }
                    var rA = ys(function(i, a) {
                            if (Sa(a) || mr(a)) {
                                dn(a, Kt(a), i);
                                return
                            }
                            for (var l in a) ct.call(a, l) && va(i, l, a[l])
                        }),
                        rv = ys(function(i, a) {
                            dn(a, vr(a), i)
                        }),
                        sc = ys(function(i, a, l, d) {
                            dn(a, vr(a), i, d)
                        }),
                        nA = ys(function(i, a, l, d) {
                            dn(a, Kt(a), i, d)
                        }),
                        iA = In(pu);

                    function sA(i, a) {
                        var l = vs(i);
                        return a == null ? l : kg(l, a)
                    }
                    var aA = Ke(function(i, a) {
                            i = ut(i);
                            var l = -1,
                                d = a.length,
                                v = d > 2 ? a[2] : r;
                            for (v && lr(a[0], a[1], v) && (d = 1); ++l < d;)
                                for (var E = a[l], $ = vr(E), R = -1, x = $.length; ++R < x;) {
                                    var J = $[R],
                                        Z = i[J];
                                    (Z === r || Zr(Z, ps[J]) && !ct.call(i, J)) && (i[J] = E[J])
                                }
                            return i
                        }),
                        oA = Ke(function(i) {
                            return i.push(r, _m), Or(nv, r, i)
                        });

                    function cA(i, a) {
                        return gg(i, Ae(a, 3), fn)
                    }

                    function lA(i, a) {
                        return gg(i, Ae(a, 3), mu)
                    }

                    function uA(i, a) {
                        return i == null ? i : gu(i, Ae(a, 3), vr)
                    }

                    function fA(i, a) {
                        return i == null ? i : Ug(i, Ae(a, 3), vr)
                    }

                    function dA(i, a) {
                        return i && fn(i, Ae(a, 3))
                    }

                    function hA(i, a) {
                        return i && mu(i, Ae(a, 3))
                    }

                    function pA(i) {
                        return i == null ? [] : Bo(i, Kt(i))
                    }

                    function gA(i) {
                        return i == null ? [] : Bo(i, vr(i))
                    }

                    function qu(i, a, l) {
                        var d = i == null ? r : Ai(i, a);
                        return d === r ? l : d
                    }

                    function mA(i, a) {
                        return i != null && Tm(i, a, U1)
                    }

                    function zu(i, a) {
                        return i != null && Tm(i, a, B1)
                    }
                    var vA = pm(function(i, a, l) {
                            a != null && typeof a.toString != "function" && (a = Io.call(a)), i[a] = l
                        }, Ju(yr)),
                        yA = pm(function(i, a, l) {
                            a != null && typeof a.toString != "function" && (a = Io.call(a)), ct.call(i, a) ? i[a].push(l) : i[a] = [l]
                        }, Ae),
                        _A = Ke(_a);

                    function Kt(i) {
                        return mr(i) ? Pg(i) : Eu(i)
                    }

                    function vr(i) {
                        return mr(i) ? Pg(i, !0) : X1(i)
                    }

                    function EA(i, a) {
                        var l = {};
                        return a = Ae(a, 3), fn(i, function(d, v, E) {
                            wn(l, a(d, v, E), d)
                        }), l
                    }

                    function bA(i, a) {
                        var l = {};
                        return a = Ae(a, 3), fn(i, function(d, v, E) {
                            wn(l, v, a(d, v, E))
                        }), l
                    }
                    var TA = ys(function(i, a, l) {
                            jo(i, a, l)
                        }),
                        nv = ys(function(i, a, l, d) {
                            jo(i, a, l, d)
                        }),
                        SA = In(function(i, a) {
                            var l = {};
                            if (i == null) return l;
                            var d = !1;
                            a = bt(a, function(E) {
                                return E = Vn(E, i), d || (d = E.length > 1), E
                            }), dn(i, ku(i), l), d && (l = Ur(l, _ | b | C, vC));
                            for (var v = a.length; v--;) Cu(l, a[v]);
                            return l
                        });

                    function OA(i, a) {
                        return iv(i, rc(Ae(a)))
                    }
                    var wA = In(function(i, a) {
                        return i == null ? {} : Z1(i, a)
                    });

                    function iv(i, a) {
                        if (i == null) return {};
                        var l = bt(ku(i), function(d) {
                            return [d]
                        });
                        return a = Ae(a), zg(i, l, function(d, v) {
                            return a(d, v[0])
                        })
                    }

                    function CA(i, a, l) {
                        a = Vn(a, i);
                        var d = -1,
                            v = a.length;
                        for (v || (v = 1, i = r); ++d < v;) {
                            var E = i == null ? r : i[hn(a[d])];
                            E === r && (d = v, E = l), i = An(E) ? E.call(i) : E
                        }
                        return i
                    }

                    function IA(i, a, l) {
                        return i == null ? i : ba(i, a, l)
                    }

                    function $A(i, a, l, d) {
                        return d = typeof d == "function" ? d : r, i == null ? i : ba(i, a, l, d)
                    }
                    var sv = vm(Kt),
                        av = vm(vr);

                    function AA(i, a, l) {
                        var d = Fe(i),
                            v = d || qn(i) || bs(i);
                        if (a = Ae(a, 4), l == null) {
                            var E = i && i.constructor;
                            v ? l = d ? new E : [] : Ot(i) ? l = An(E) ? vs(Ro(i)) : {} : l = {}
                        }
                        return (v ? Dr : fn)(i, function($, R, x) {
                            return a(l, $, R, x)
                        }), l
                    }

                    function RA(i, a) {
                        return i == null ? !0 : Cu(i, a)
                    }

                    function NA(i, a, l) {
                        return i == null ? i : em(i, a, Au(l))
                    }

                    function PA(i, a, l, d) {
                        return d = typeof d == "function" ? d : r, i == null ? i : em(i, a, Au(l), d)
                    }

                    function Ts(i) {
                        return i == null ? [] : ou(i, Kt(i))
                    }

                    function LA(i) {
                        return i == null ? [] : ou(i, vr(i))
                    }

                    function kA(i, a, l) {
                        return l === r && (l = a, a = r), l !== r && (l = Gr(l), l = l === l ? l : 0), a !== r && (a = Gr(a), a = a === a ? a : 0), $i(Gr(i), a, l)
                    }

                    function xA(i, a, l) {
                        return a = Rn(a), l === r ? (l = a, a = 0) : l = Rn(l), i = Gr(i), j1(i, a, l)
                    }

                    function DA(i, a, l) {
                        if (l && typeof l != "boolean" && lr(i, a, l) && (a = l = r), l === r && (typeof a == "boolean" ? (l = a, a = r) : typeof i == "boolean" && (l = i, i = r)), i === r && a === r ? (i = 0, a = 1) : (i = Rn(i), a === r ? (a = i, i = 0) : a = Rn(a)), i > a) {
                            var d = i;
                            i = a, a = d
                        }
                        if (l || i % 1 || a % 1) {
                            var v = Rg();
                            return rr(i + v * (a - i + p0("1e-" + ((v + "").length - 1))), a)
                        }
                        return Su(i, a)
                    }
                    var MA = _s(function(i, a, l) {
                        return a = a.toLowerCase(), i + (l ? ov(a) : a)
                    });

                    function ov(i) {
                        return Xu(st(i).toLowerCase())
                    }

                    function cv(i) {
                        return i = st(i), i && i.replace(Uw, I0).replace(i0, "")
                    }

                    function FA(i, a, l) {
                        i = st(i), a = Cr(a);
                        var d = i.length;
                        l = l === r ? d : $i(Be(l), 0, d);
                        var v = l;
                        return l -= a.length, l >= 0 && i.slice(l, v) == a
                    }

                    function UA(i) {
                        return i = st(i), i && _w.test(i) ? i.replace(Up, $0) : i
                    }

                    function BA(i) {
                        return i = st(i), i && ww.test(i) ? i.replace(Hl, "\\$&") : i
                    }
                    var jA = _s(function(i, a, l) {
                            return i + (l ? "-" : "") + a.toLowerCase()
                        }),
                        GA = _s(function(i, a, l) {
                            return i + (l ? " " : "") + a.toLowerCase()
                        }),
                        WA = fm("toLowerCase");

                    function KA(i, a, l) {
                        i = st(i), a = Be(a);
                        var d = a ? ds(i) : 0;
                        if (!a || d >= a) return i;
                        var v = (a - d) / 2;
                        return Yo(ko(v), l) + i + Yo(Lo(v), l)
                    }

                    function HA(i, a, l) {
                        i = st(i), a = Be(a);
                        var d = a ? ds(i) : 0;
                        return a && d < a ? i + Yo(a - d, l) : i
                    }

                    function VA(i, a, l) {
                        i = st(i), a = Be(a);
                        var d = a ? ds(i) : 0;
                        return a && d < a ? Yo(a - d, l) + i : i
                    }

                    function YA(i, a, l) {
                        return l || a == null ? a = 0 : a && (a = +a), e1(st(i).replace(Vl, ""), a || 0)
                    }

                    function qA(i, a, l) {
                        return (l ? lr(i, a, l) : a === r) ? a = 1 : a = Be(a), Ou(st(i), a)
                    }

                    function zA() {
                        var i = arguments,
                            a = st(i[0]);
                        return i.length < 3 ? a : a.replace(i[1], i[2])
                    }
                    var XA = _s(function(i, a, l) {
                        return i + (l ? "_" : "") + a.toLowerCase()
                    });

                    function JA(i, a, l) {
                        return l && typeof l != "number" && lr(i, a, l) && (a = l = r), l = l === r ? Ue : l >>> 0, l ? (i = st(i), i && (typeof a == "string" || a != null && !Yu(a)) && (a = Cr(a), !a && fs(i)) ? Yn(Xr(i), 0, l) : i.split(a, l)) : []
                    }
                    var ZA = _s(function(i, a, l) {
                        return i + (l ? " " : "") + Xu(a)
                    });

                    function QA(i, a, l) {
                        return i = st(i), l = l == null ? 0 : $i(Be(l), 0, i.length), a = Cr(a), i.slice(l, l + a.length) == a
                    }

                    function eR(i, a, l) {
                        var d = y.templateSettings;
                        l && lr(i, a, l) && (a = r), i = st(i), a = sc({}, a, d, ym);
                        var v = sc({}, a.imports, d.imports, ym),
                            E = Kt(v),
                            $ = ou(v, E),
                            R, x, J = 0,
                            Z = a.interpolate || yo,
                            ne = "__p += '",
                            me = lu((a.escape || yo).source + "|" + Z.source + "|" + (Z === Bp ? Lw : yo).source + "|" + (a.evaluate || yo).source + "|$", "g"),
                            Oe = "//# sourceURL=" + (ct.call(a, "sourceURL") ? (a.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++l0 + "]") + `
`;
                        i.replace(me, function(Ne, He, Ye, $r, ur, Ar) {
                            return Ye || (Ye = $r), ne += i.slice(J, Ar).replace(Bw, A0), He && (R = !0, ne += `' +
__e(` + He + `) +
'`), ur && (x = !0, ne += `';
` + ur + `;
__p += '`), Ye && (ne += `' +
((__t = (` + Ye + `)) == null ? '' : __t) +
'`), J = Ar + Ne.length, Ne
                        }), ne += `';
`;
                        var Re = ct.call(a, "variable") && a.variable;
                        if (!Re) ne = `with (obj) {
` + ne + `
}
`;
                        else if (Nw.test(Re)) throw new De(u);
                        ne = (x ? ne.replace(tr, "") : ne).replace(ke, "$1").replace(ua, "$1;"), ne = "function(" + (Re || "obj") + `) {
` + (Re ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (R ? ", __e = _.escape" : "") + (x ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + ne + `return __p
}`;
                        var Ge = uv(function() {
                            return et(E, Oe + "return " + ne).apply(r, $)
                        });
                        if (Ge.source = ne, Vu(Ge)) throw Ge;
                        return Ge
                    }

                    function tR(i) {
                        return st(i).toLowerCase()
                    }

                    function rR(i) {
                        return st(i).toUpperCase()
                    }

                    function nR(i, a, l) {
                        if (i = st(i), i && (l || a === r)) return _g(i);
                        if (!i || !(a = Cr(a))) return i;
                        var d = Xr(i),
                            v = Xr(a),
                            E = Eg(d, v),
                            $ = bg(d, v) + 1;
                        return Yn(d, E, $).join("")
                    }

                    function iR(i, a, l) {
                        if (i = st(i), i && (l || a === r)) return i.slice(0, Sg(i) + 1);
                        if (!i || !(a = Cr(a))) return i;
                        var d = Xr(i),
                            v = bg(d, Xr(a)) + 1;
                        return Yn(d, 0, v).join("")
                    }

                    function sR(i, a, l) {
                        if (i = st(i), i && (l || a === r)) return i.replace(Vl, "");
                        if (!i || !(a = Cr(a))) return i;
                        var d = Xr(i),
                            v = Eg(d, Xr(a));
                        return Yn(d, v).join("")
                    }

                    function aR(i, a) {
                        var l = Ie,
                            d = Ce;
                        if (Ot(a)) {
                            var v = "separator" in a ? a.separator : v;
                            l = "length" in a ? Be(a.length) : l, d = "omission" in a ? Cr(a.omission) : d
                        }
                        i = st(i);
                        var E = i.length;
                        if (fs(i)) {
                            var $ = Xr(i);
                            E = $.length
                        }
                        if (l >= E) return i;
                        var R = l - ds(d);
                        if (R < 1) return d;
                        var x = $ ? Yn($, 0, R).join("") : i.slice(0, R);
                        if (v === r) return x + d;
                        if ($ && (R += x.length - R), Yu(v)) {
                            if (i.slice(R).search(v)) {
                                var J, Z = x;
                                for (v.global || (v = lu(v.source, st(jp.exec(v)) + "g")), v.lastIndex = 0; J = v.exec(Z);) var ne = J.index;
                                x = x.slice(0, ne === r ? R : ne)
                            }
                        } else if (i.indexOf(Cr(v), R) != R) {
                            var me = x.lastIndexOf(v);
                            me > -1 && (x = x.slice(0, me))
                        }
                        return x + d
                    }

                    function oR(i) {
                        return i = st(i), i && yw.test(i) ? i.replace(Fp, D0) : i
                    }
                    var cR = _s(function(i, a, l) {
                            return i + (l ? " " : "") + a.toUpperCase()
                        }),
                        Xu = fm("toUpperCase");

                    function lv(i, a, l) {
                        return i = st(i), a = l ? r : a, a === r ? N0(i) ? U0(i) : T0(i) : i.match(a) || []
                    }
                    var uv = Ke(function(i, a) {
                            try {
                                return Or(i, r, a)
                            } catch (l) {
                                return Vu(l) ? l : new De(l)
                            }
                        }),
                        lR = In(function(i, a) {
                            return Dr(a, function(l) {
                                l = hn(l), wn(i, l, Ku(i[l], i))
                            }), i
                        });

                    function uR(i) {
                        var a = i == null ? 0 : i.length,
                            l = Ae();
                        return i = a ? bt(i, function(d) {
                            if (typeof d[1] != "function") throw new Mr(c);
                            return [l(d[0]), d[1]]
                        }) : [], Ke(function(d) {
                            for (var v = -1; ++v < a;) {
                                var E = i[v];
                                if (Or(E[0], this, d)) return Or(E[1], this, d)
                            }
                        })
                    }

                    function fR(i) {
                        return D1(Ur(i, _))
                    }

                    function Ju(i) {
                        return function() {
                            return i
                        }
                    }

                    function dR(i, a) {
                        return i == null || i !== i ? a : i
                    }
                    var hR = hm(),
                        pR = hm(!0);

                    function yr(i) {
                        return i
                    }

                    function Zu(i) {
                        return Wg(typeof i == "function" ? i : Ur(i, _))
                    }

                    function gR(i) {
                        return Hg(Ur(i, _))
                    }

                    function mR(i, a) {
                        return Vg(i, Ur(a, _))
                    }
                    var vR = Ke(function(i, a) {
                            return function(l) {
                                return _a(l, i, a)
                            }
                        }),
                        yR = Ke(function(i, a) {
                            return function(l) {
                                return _a(i, l, a)
                            }
                        });

                    function Qu(i, a, l) {
                        var d = Kt(a),
                            v = Bo(a, d);
                        l == null && !(Ot(a) && (v.length || !d.length)) && (l = a, a = i, i = this, v = Bo(a, Kt(a)));
                        var E = !(Ot(l) && "chain" in l) || !!l.chain,
                            $ = An(i);
                        return Dr(v, function(R) {
                            var x = a[R];
                            i[R] = x, $ && (i.prototype[R] = function() {
                                var J = this.__chain__;
                                if (E || J) {
                                    var Z = i(this.__wrapped__),
                                        ne = Z.__actions__ = gr(this.__actions__);
                                    return ne.push({
                                        func: x,
                                        args: arguments,
                                        thisArg: i
                                    }), Z.__chain__ = J, Z
                                }
                                return x.apply(i, jn([this.value()], arguments))
                            })
                        }), i
                    }

                    function _R() {
                        return qt._ === this && (qt._ = H0), this
                    }

                    function ef() {}

                    function ER(i) {
                        return i = Be(i), Ke(function(a) {
                            return Yg(a, i)
                        })
                    }
                    var bR = Nu(bt),
                        TR = Nu(pg),
                        SR = Nu(ru);

                    function fv(i) {
                        return Fu(i) ? nu(hn(i)) : Q1(i)
                    }

                    function OR(i) {
                        return function(a) {
                            return i == null ? r : Ai(i, a)
                        }
                    }
                    var wR = gm(),
                        CR = gm(!0);

                    function tf() {
                        return []
                    }

                    function rf() {
                        return !1
                    }

                    function IR() {
                        return {}
                    }

                    function $R() {
                        return ""
                    }

                    function AR() {
                        return !0
                    }

                    function RR(i, a) {
                        if (i = Be(i), i < 1 || i > ve) return [];
                        var l = Ue,
                            d = rr(i, Ue);
                        a = Ae(a), i -= Ue;
                        for (var v = au(d, a); ++l < i;) a(l);
                        return v
                    }

                    function NR(i) {
                        return Fe(i) ? bt(i, hn) : Ir(i) ? [i] : gr(Nm(st(i)))
                    }

                    function PR(i) {
                        var a = ++W0;
                        return st(i) + a
                    }
                    var LR = Vo(function(i, a) {
                            return i + a
                        }, 0),
                        kR = Pu("ceil"),
                        xR = Vo(function(i, a) {
                            return i / a
                        }, 1),
                        DR = Pu("floor");

                    function MR(i) {
                        return i && i.length ? Uo(i, yr, vu) : r
                    }

                    function FR(i, a) {
                        return i && i.length ? Uo(i, Ae(a, 2), vu) : r
                    }

                    function UR(i) {
                        return vg(i, yr)
                    }

                    function BR(i, a) {
                        return vg(i, Ae(a, 2))
                    }

                    function jR(i) {
                        return i && i.length ? Uo(i, yr, bu) : r
                    }

                    function GR(i, a) {
                        return i && i.length ? Uo(i, Ae(a, 2), bu) : r
                    }
                    var WR = Vo(function(i, a) {
                            return i * a
                        }, 1),
                        KR = Pu("round"),
                        HR = Vo(function(i, a) {
                            return i - a
                        }, 0);

                    function VR(i) {
                        return i && i.length ? su(i, yr) : 0
                    }

                    function YR(i, a) {
                        return i && i.length ? su(i, Ae(a, 2)) : 0
                    }
                    return y.after = g$, y.ary = Gm, y.assign = rA, y.assignIn = rv, y.assignInWith = sc, y.assignWith = nA, y.at = iA, y.before = Wm, y.bind = Ku, y.bindAll = lR, y.bindKey = Km, y.castArray = I$, y.chain = Um, y.chunk = DC, y.compact = MC, y.concat = FC, y.cond = uR, y.conforms = fR, y.constant = Ju, y.countBy = VI, y.create = sA, y.curry = Hm, y.curryRight = Vm, y.debounce = Ym, y.defaults = aA, y.defaultsDeep = oA, y.defer = m$, y.delay = v$, y.difference = UC, y.differenceBy = BC, y.differenceWith = jC, y.drop = GC, y.dropRight = WC, y.dropRightWhile = KC, y.dropWhile = HC, y.fill = VC, y.filter = qI, y.flatMap = JI, y.flatMapDeep = ZI, y.flatMapDepth = QI, y.flatten = xm, y.flattenDeep = YC, y.flattenDepth = qC, y.flip = y$, y.flow = hR, y.flowRight = pR, y.fromPairs = zC, y.functions = pA, y.functionsIn = gA, y.groupBy = e$, y.initial = JC, y.intersection = ZC, y.intersectionBy = QC, y.intersectionWith = eI, y.invert = vA, y.invertBy = yA, y.invokeMap = r$, y.iteratee = Zu, y.keyBy = n$, y.keys = Kt, y.keysIn = vr, y.map = Qo, y.mapKeys = EA, y.mapValues = bA, y.matches = gR, y.matchesProperty = mR, y.memoize = tc, y.merge = TA, y.mergeWith = nv, y.method = vR, y.methodOf = yR, y.mixin = Qu, y.negate = rc, y.nthArg = ER, y.omit = SA, y.omitBy = OA, y.once = _$, y.orderBy = i$, y.over = bR, y.overArgs = E$, y.overEvery = TR, y.overSome = SR, y.partial = Hu, y.partialRight = qm, y.partition = s$, y.pick = wA, y.pickBy = iv, y.property = fv, y.propertyOf = OR, y.pull = iI, y.pullAll = Mm, y.pullAllBy = sI, y.pullAllWith = aI, y.pullAt = oI, y.range = wR, y.rangeRight = CR, y.rearg = b$, y.reject = c$, y.remove = cI, y.rest = T$, y.reverse = Gu, y.sampleSize = u$, y.set = IA, y.setWith = $A, y.shuffle = f$, y.slice = lI, y.sortBy = p$, y.sortedUniq = mI, y.sortedUniqBy = vI, y.split = JA, y.spread = S$, y.tail = yI, y.take = _I, y.takeRight = EI, y.takeRightWhile = bI, y.takeWhile = TI, y.tap = MI, y.throttle = O$, y.thru = Zo, y.toArray = Qm, y.toPairs = sv, y.toPairsIn = av, y.toPath = NR, y.toPlainObject = tv, y.transform = AA, y.unary = w$, y.union = SI, y.unionBy = OI, y.unionWith = wI, y.uniq = CI, y.uniqBy = II, y.uniqWith = $I, y.unset = RA, y.unzip = Wu, y.unzipWith = Fm, y.update = NA, y.updateWith = PA, y.values = Ts, y.valuesIn = LA, y.without = AI, y.words = lv, y.wrap = C$, y.xor = RI, y.xorBy = NI, y.xorWith = PI, y.zip = LI, y.zipObject = kI, y.zipObjectDeep = xI, y.zipWith = DI, y.entries = sv, y.entriesIn = av, y.extend = rv, y.extendWith = sc, Qu(y, y), y.add = LR, y.attempt = uv, y.camelCase = MA, y.capitalize = ov, y.ceil = kR, y.clamp = kA, y.clone = $$, y.cloneDeep = R$, y.cloneDeepWith = N$, y.cloneWith = A$, y.conformsTo = P$, y.deburr = cv, y.defaultTo = dR, y.divide = xR, y.endsWith = FA, y.eq = Zr, y.escape = UA, y.escapeRegExp = BA, y.every = YI, y.find = zI, y.findIndex = Lm, y.findKey = cA, y.findLast = XI, y.findLastIndex = km, y.findLastKey = lA, y.floor = DR, y.forEach = Bm, y.forEachRight = jm, y.forIn = uA, y.forInRight = fA, y.forOwn = dA, y.forOwnRight = hA, y.get = qu, y.gt = L$, y.gte = k$, y.has = mA, y.hasIn = zu, y.head = Dm, y.identity = yr, y.includes = t$, y.indexOf = XC, y.inRange = xA, y.invoke = _A, y.isArguments = Pi, y.isArray = Fe, y.isArrayBuffer = x$, y.isArrayLike = mr, y.isArrayLikeObject = At, y.isBoolean = D$, y.isBuffer = qn, y.isDate = M$, y.isElement = F$, y.isEmpty = U$, y.isEqual = B$, y.isEqualWith = j$, y.isError = Vu, y.isFinite = G$, y.isFunction = An, y.isInteger = zm, y.isLength = nc, y.isMap = Xm, y.isMatch = W$, y.isMatchWith = K$, y.isNaN = H$, y.isNative = V$, y.isNil = q$, y.isNull = Y$, y.isNumber = Jm, y.isObject = Ot, y.isObjectLike = Ct, y.isPlainObject = wa, y.isRegExp = Yu, y.isSafeInteger = z$, y.isSet = Zm, y.isString = ic, y.isSymbol = Ir, y.isTypedArray = bs, y.isUndefined = X$, y.isWeakMap = J$, y.isWeakSet = Z$, y.join = tI, y.kebabCase = jA, y.last = jr, y.lastIndexOf = rI, y.lowerCase = GA, y.lowerFirst = WA, y.lt = Q$, y.lte = eA, y.max = MR, y.maxBy = FR, y.mean = UR, y.meanBy = BR, y.min = jR, y.minBy = GR, y.stubArray = tf, y.stubFalse = rf, y.stubObject = IR, y.stubString = $R, y.stubTrue = AR, y.multiply = WR, y.nth = nI, y.noConflict = _R, y.noop = ef, y.now = ec, y.pad = KA, y.padEnd = HA, y.padStart = VA, y.parseInt = YA, y.random = DA, y.reduce = a$, y.reduceRight = o$, y.repeat = qA, y.replace = zA, y.result = CA, y.round = KR, y.runInContext = k, y.sample = l$, y.size = d$, y.snakeCase = XA, y.some = h$, y.sortedIndex = uI, y.sortedIndexBy = fI, y.sortedIndexOf = dI, y.sortedLastIndex = hI, y.sortedLastIndexBy = pI, y.sortedLastIndexOf = gI, y.startCase = ZA, y.startsWith = QA, y.subtract = HR, y.sum = VR, y.sumBy = YR, y.template = eR, y.times = RR, y.toFinite = Rn, y.toInteger = Be, y.toLength = ev, y.toLower = tR, y.toNumber = Gr, y.toSafeInteger = tA, y.toString = st, y.toUpper = rR, y.trim = nR, y.trimEnd = iR, y.trimStart = sR, y.truncate = aR, y.unescape = oR, y.uniqueId = PR, y.upperCase = cR, y.upperFirst = Xu, y.each = Bm, y.eachRight = jm, y.first = Dm, Qu(y, function() {
                        var i = {};
                        return fn(y, function(a, l) {
                            ct.call(y.prototype, l) || (i[l] = a)
                        }), i
                    }(), {
                        chain: !1
                    }), y.VERSION = n, Dr(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(i) {
                        y[i].placeholder = y
                    }), Dr(["drop", "take"], function(i, a) {
                        Ve.prototype[i] = function(l) {
                            l = l === r ? 1 : Ft(Be(l), 0);
                            var d = this.__filtered__ && !a ? new Ve(this) : this.clone();
                            return d.__filtered__ ? d.__takeCount__ = rr(l, d.__takeCount__) : d.__views__.push({
                                size: rr(l, Ue),
                                type: i + (d.__dir__ < 0 ? "Right" : "")
                            }), d
                        }, Ve.prototype[i + "Right"] = function(l) {
                            return this.reverse()[i](l).reverse()
                        }
                    }), Dr(["filter", "map", "takeWhile"], function(i, a) {
                        var l = a + 1,
                            d = l == F || l == de;
                        Ve.prototype[i] = function(v) {
                            var E = this.clone();
                            return E.__iteratees__.push({
                                iteratee: Ae(v, 3),
                                type: l
                            }), E.__filtered__ = E.__filtered__ || d, E
                        }
                    }), Dr(["head", "last"], function(i, a) {
                        var l = "take" + (a ? "Right" : "");
                        Ve.prototype[i] = function() {
                            return this[l](1).value()[0]
                        }
                    }), Dr(["initial", "tail"], function(i, a) {
                        var l = "drop" + (a ? "" : "Right");
                        Ve.prototype[i] = function() {
                            return this.__filtered__ ? new Ve(this) : this[l](1)
                        }
                    }), Ve.prototype.compact = function() {
                        return this.filter(yr)
                    }, Ve.prototype.find = function(i) {
                        return this.filter(i).head()
                    }, Ve.prototype.findLast = function(i) {
                        return this.reverse().find(i)
                    }, Ve.prototype.invokeMap = Ke(function(i, a) {
                        return typeof i == "function" ? new Ve(this) : this.map(function(l) {
                            return _a(l, i, a)
                        })
                    }), Ve.prototype.reject = function(i) {
                        return this.filter(rc(Ae(i)))
                    }, Ve.prototype.slice = function(i, a) {
                        i = Be(i);
                        var l = this;
                        return l.__filtered__ && (i > 0 || a < 0) ? new Ve(l) : (i < 0 ? l = l.takeRight(-i) : i && (l = l.drop(i)), a !== r && (a = Be(a), l = a < 0 ? l.dropRight(-a) : l.take(a - i)), l)
                    }, Ve.prototype.takeRightWhile = function(i) {
                        return this.reverse().takeWhile(i).reverse()
                    }, Ve.prototype.toArray = function() {
                        return this.take(Ue)
                    }, fn(Ve.prototype, function(i, a) {
                        var l = /^(?:filter|find|map|reject)|While$/.test(a),
                            d = /^(?:head|last)$/.test(a),
                            v = y[d ? "take" + (a == "last" ? "Right" : "") : a],
                            E = d || /^find/.test(a);
                        !v || (y.prototype[a] = function() {
                            var $ = this.__wrapped__,
                                R = d ? [1] : arguments,
                                x = $ instanceof Ve,
                                J = R[0],
                                Z = x || Fe($),
                                ne = function(He) {
                                    var Ye = v.apply(y, jn([He], R));
                                    return d && me ? Ye[0] : Ye
                                };
                            Z && l && typeof J == "function" && J.length != 1 && (x = Z = !1);
                            var me = this.__chain__,
                                Oe = !!this.__actions__.length,
                                Re = E && !me,
                                Ge = x && !Oe;
                            if (!E && Z) {
                                $ = Ge ? $ : new Ve(this);
                                var Ne = i.apply($, R);
                                return Ne.__actions__.push({
                                    func: Zo,
                                    args: [ne],
                                    thisArg: r
                                }), new Fr(Ne, me)
                            }
                            return Re && Ge ? i.apply(this, R) : (Ne = this.thru(ne), Re ? d ? Ne.value()[0] : Ne.value() : Ne)
                        })
                    }), Dr(["pop", "push", "shift", "sort", "splice", "unshift"], function(i) {
                        var a = Oo[i],
                            l = /^(?:push|sort|unshift)$/.test(i) ? "tap" : "thru",
                            d = /^(?:pop|shift)$/.test(i);
                        y.prototype[i] = function() {
                            var v = arguments;
                            if (d && !this.__chain__) {
                                var E = this.value();
                                return a.apply(Fe(E) ? E : [], v)
                            }
                            return this[l](function($) {
                                return a.apply(Fe($) ? $ : [], v)
                            })
                        }
                    }), fn(Ve.prototype, function(i, a) {
                        var l = y[a];
                        if (l) {
                            var d = l.name + "";
                            ct.call(ms, d) || (ms[d] = []), ms[d].push({
                                name: a,
                                func: l
                            })
                        }
                    }), ms[Ho(r, I).name] = [{
                        name: "wrapper",
                        func: r
                    }], Ve.prototype.clone = o1, Ve.prototype.reverse = c1, Ve.prototype.value = l1, y.prototype.at = FI, y.prototype.chain = UI, y.prototype.commit = BI, y.prototype.next = jI, y.prototype.plant = WI, y.prototype.reverse = KI, y.prototype.toJSON = y.prototype.valueOf = y.prototype.value = HI, y.prototype.first = y.prototype.head, da && (y.prototype[da] = GI), y
                },
                hs = B0();
            Oi ? ((Oi.exports = hs)._ = hs, Zl._ = hs) : qt._ = hs
        }).call(Pt)
    })(Od, Od.exports);
    const F3 = vt({
            props: {
                player: Object
            },
            data() {
                return {
                    onResizeWithContext: null,
                    stage: null,
                    windowHeight: window.innerHeight,
                    isSubmitting: !1
                }
            },
            computed: {
                stageDimensions() {
                    if (!this.stage) return {
                        width: "auto",
                        height: "auto"
                    };
                    const e = this.$refs.content.getBoundingClientRect(),
                        r = this.$refs.stage,
                        n = r.getBoundingClientRect(),
                        s = r.parentElement.getBoundingClientRect(),
                        o = Math.max(s.width * .9, 240),
                        c = Math.max(this.windowHeight - e.height + n.height, 240),
                        u = this.stage.canvas.width,
                        f = this.stage.canvas.height,
                        h = Math.min(o / u, c / f),
                        m = u * h,
                        _ = f * h;
                    return {
                        width: `${m}px`,
                        height: `${_}px`
                    }
                }
            },
            mounted() {
                this.onResizeWithContext = Od.exports.throttle(this.onResize.bind(this), 400), window.addEventListener("resize", this.onResizeWithContext), this.setupStage()
            },
            beforeUnmount() {
                window.removeEventListener("resize", this.onResizeWithContext), this.stage && this.stage.beforeDestroy()
            },
            methods: {
                setupStage() {
                    const t = this.$refs.stage,
                        e = {};
                    this.player.size && (e.width = this.player.size.width, e.height = this.player.size.height), this.player.thicknesses && (e.thickness = this.player.thicknesses[0]), this.player.colors && (e.color = this.player.colors[0]), this.player.maxPoints && (e.maxPoints = this.player.maxPoints);
                    const r = new fW(t, e);
                    r.canvas.lines = Mn([]), r.canvas.lines2 = Mn([]), this.stage = r, this.stage.on("up", () => {
                        var s;
                        if (!this.player.live) return;
                        const n = ((s = this.stage) == null ? void 0 : s.getObject()) || {};
                        n.done = !1, this.$ecast.updateObject(this.player.responseKey, n).catch(this.$handleEcastError)
                    })
                },
                onSubmitClick() {
                    if (!this.stage) return;
                    this.isSubmitting = !0, this.stage.canvas.submitting = !0;
                    const t = this.stage.getObject();
                    t.done = !0, t.action = "submit", this.$ecast.updateObject(this.player.responseKey, t).catch(this.$handleEcastError)
                },
                onResize() {
                    this.windowHeight = window.innerHeight
                }
            }
        }),
        U3 = {
            class: "draw"
        },
        B3 = {
            ref: "content",
            class: "content"
        },
        j3 = {
            class: "constrain"
        },
        G3 = {
            key: 0
        };

    function W3(t, e, r, n, s, o) {
        const c = qr("bb");
        return se(), le("div", U3, [ae("div", B3, [ae("div", j3, [t.player.prompt ? tt((se(), le("div", G3, null, 512)), [
            [c, t.player.prompt]
        ]) : We("", !0), ae("div", {
            ref: "stage",
            class: "stage",
            style: el(t.stageDimensions)
        }, null, 4), ae("button", {
            onClick: e[0] || (e[0] = cn((...u) => t.onSubmitClick && t.onSubmitClick(...u), ["prevent"]))
        }, Tt(t.player.submitText || "SUBMIT"), 1)])], 512)])
    }
    const K3 = $t(F3, [
            ["render", W3]
        ]),
        H3 = vt({
            props: {
                cancelText: String,
                classes: Object,
                messageLocation: String,
                shouldStart: Function,
                startText: String,
                gameStartedOptions: Object,
                player: {
                    type: Object,
                    required: !0
                }
            },
            computed: {
                joinedCountText() {
                    return this.$tc("LOBBY.JOINED_COUNT", this.player.joinedPlayers, {
                        count: this.player.joinedPlayers,
                        maxPlayers: this.player.maxPlayers
                    })
                },
                localClasses() {
                    var t, e, r, n, s, o;
                    return {
                        message: (e = (t = this.classes) == null ? void 0 : t.message) != null ? e : "message",
                        status: (n = (r = this.classes) == null ? void 0 : r.status) != null ? n : "status",
                        action: (o = (s = this.classes) == null ? void 0 : s.action) != null ? o : "action"
                    }
                },
                neededText() {
                    return this.$tc("LOBBY.PLAYERS_NEEDED", this.player.minPlayers - this.player.joinedPlayers)
                },
                waitingForVIPText() {
                    return this.$t("LOBBY.WAITING_FOR_VIP", {
                        name: this.player.vipName
                    })
                }
            },
            methods: {
                async onCancelClick() {
                    if (!!this.player.responseKey) try {
                        await this.$ecast.updateObject(this.player.responseKey, {
                            action: "cancel"
                        })
                    } catch (t) {
                        this.$handleEcastError(t)
                    }
                },
                async onStartClick() {
                    if (!!this.player.responseKey && !(this.shouldStart && !await Promise.resolve(this.shouldStart()))) try {
                        if (await this.$ecast.updateObject(this.player.responseKey, {
                                action: "start"
                            }), this.$ecastRoom.appTag) {
                            const t = this.gameStartedOptions || {};
                            t.numberOfPlayer = this.player.joinedPlayers, t.locale = this.$ecastRoom.locale, jc.gameStarted(this.$ecastRoom.appTag, t)
                        }
                    } catch (t) {
                        this.$handleEcastError(t)
                    }
                }
            }
        }),
        V3 = ["textContent"],
        Y3 = ["textContent"],
        q3 = ["textContent"],
        z3 = ["textContent"];

    function X3(t, e, r, n, s, o) {
        const c = qr("t");
        return se(), le("div", {
            class: qe(["lobby-actions", {
                vip: t.player.hasControls
            }])
        }, [!t.messageLocation || t.messageLocation === "top" ? (se(), le("p", {
            key: 0,
            class: qe(t.localClasses.message),
            textContent: Tt(t.joinedCountText)
        }, null, 10, V3)) : We("", !0), t.player.hasControls ? (se(), le(It, {
            key: 1
        }, [t.player.status === "waitingForMore" ? (se(), le("p", {
            key: 0,
            class: qe(t.localClasses.status)
        }, Tt(t.neededText), 3)) : We("", !0), t.player.status === "canStart" ? (se(), le("button", {
            key: 1,
            class: qe(t.localClasses.action),
            onClick: e[0] || (e[0] = (...u) => t.onStartClick && t.onStartClick(...u)),
            textContent: Tt(t.startText || t.$t("LOBBY.BUTTON_START"))
        }, null, 10, Y3)) : We("", !0), t.player.status === "countdown" ? (se(), le("button", {
            key: 2,
            class: qe(t.localClasses.action),
            onClick: e[1] || (e[1] = (...u) => t.onCancelClick && t.onCancelClick(...u)),
            textContent: Tt(t.cancelText || t.$t("LOBBY.BUTTON_CANCEL"))
        }, null, 10, q3)) : We("", !0)], 64)) : t.player.gamepadStart ? (se(), le(It, {
            key: 2
        }, [t.player.status === "waitingForMore" ? (se(), le("p", {
            key: 0,
            class: qe(t.localClasses.status)
        }, Tt(t.neededText), 3)) : We("", !0), t.player.status === "canStart" ? tt((se(), le("p", {
            key: 1,
            class: qe(t.localClasses.status)
        }, null, 2)), [
            [c, "LOBBY.WAITING_FOR_GAMEPAD"]
        ]) : We("", !0), t.player.status === "countdown" ? tt((se(), le("p", {
            key: 2,
            class: qe(t.localClasses.status)
        }, null, 2)), [
            [c, "LOBBY.GAME_STARTING"]
        ]) : We("", !0)], 64)) : (se(), le(It, {
            key: 3
        }, [t.player.status === "waitingForMore" ? (se(), le("p", {
            key: 0,
            class: qe(t.localClasses.status)
        }, Tt(t.neededText), 3)) : We("", !0), t.player.status === "canStart" ? (se(), le("p", {
            key: 1,
            class: qe(t.localClasses.status)
        }, Tt(t.waitingForVIPText), 3)) : We("", !0), t.player.status === "countdown" ? tt((se(), le("p", {
            key: 2,
            class: qe(t.localClasses.status)
        }, null, 2)), [
            [c, "LOBBY.GAME_STARTING"]
        ]) : We("", !0)], 64)), t.messageLocation === "bottom" ? (se(), le("p", {
            key: 4,
            class: qe(t.localClasses.message),
            textContent: Tt(t.joinedCountText)
        }, null, 10, z3)) : We("", !0)], 2)
    }
    const J3 = $t(H3, [
            ["render", X3]
        ]),
        Z3 = vt({
            components: {
                LobbyActions: J3
            },
            props: {
                player: Object
            }
        }),
        Q3 = {
            class: "lobby"
        },
        eK = {
            class: "constrain"
        };

    function tK(t, e, r, n, s, o) {
        const c = ni("LobbyActions");
        return se(), le("div", Q3, [ae("div", eK, [xt(c, {
            player: t.player
        }, null, 8, ["player"])])])
    }
    const rK = $t(Z3, [
            ["render", tK]
        ]),
        nK = vt({
            props: {
                shouldStart: Function,
                messageLocation: String,
                classes: Object,
                gameStartedOptions: Object,
                player: {
                    type: Object,
                    required: !0
                }
            },
            computed: {
                localClasses() {
                    var t, e, r, n, s, o;
                    return {
                        message: (e = (t = this.classes) == null ? void 0 : t.message) != null ? e : "message",
                        status: (n = (r = this.classes) == null ? void 0 : r.status) != null ? n : "status",
                        action: (o = (s = this.classes) == null ? void 0 : s.action) != null ? o : "action"
                    }
                },
                waitingForVIPText() {
                    return this.$t("LOBBY.WAITING_FOR_VIP", {
                        name: this.player.vipName
                    })
                }
            },
            methods: {
                async onSamePlayersClick() {
                    if (!!this.player.responseKey && !(this.shouldStart && !await Promise.resolve(this.shouldStart()))) try {
                        if (await this.$ecast.updateObject(this.player.responseKey, {
                                action: "samePlayers"
                            }), this.$ecastRoom.appTag) {
                            const t = this.gameStartedOptions || {};
                            t.isSequal = !0, t.locale = this.$ecastRoom.locale, jc.gameStarted(this.$ecastRoom.appTag, t)
                        }
                    } catch (t) {
                        this.$handleEcastError(t)
                    }
                },
                async onNewPlayersClick() {
                    if (!!this.player.responseKey && !(this.shouldStart && !await Promise.resolve(this.shouldStart()))) try {
                        await this.$ecast.updateObject(this.player.responseKey, {
                            action: "newPlayers"
                        })
                    } catch (t) {
                        this.$handleEcastError(t)
                    }
                },
                async onCancelClick() {
                    if (!!this.player.responseKey) try {
                        await this.$ecast.updateObject(this.player.responseKey, {
                            action: "cancel"
                        })
                    } catch (t) {
                        this.$handleEcastError(t)
                    }
                }
            }
        });

    function iK(t, e, r, n, s, o) {
        const c = qr("t");
        return t.player && t.player.status ? (se(), le("div", {
            key: 0,
            class: qe(["post-game-actions", {
                vip: t.player.hasControls
            }])
        }, [!t.messageLocation || t.messageLocation === "top" ? tt((se(), le("p", {
            key: 0,
            class: qe(t.localClasses.message)
        }, null, 2)), [
            [c, "POST_GAME.PLAY_AGAIN"]
        ]) : We("", !0), t.player.hasControls ? (se(), le(It, {
            key: 1
        }, [t.player.status === "waiting" ? tt((se(), le("button", {
            key: 0,
            class: qe(t.localClasses.action),
            onClick: e[0] || (e[0] = (...u) => t.onSamePlayersClick && t.onSamePlayersClick(...u))
        }, null, 2)), [
            [c, "POST_GAME.BUTTON_SAME_PLAYERS"]
        ]) : We("", !0), t.player.status === "waiting" ? tt((se(), le("button", {
            key: 1,
            class: qe(t.localClasses.action),
            onClick: e[1] || (e[1] = (...u) => t.onNewPlayersClick && t.onNewPlayersClick(...u))
        }, null, 2)), [
            [c, "POST_GAME.BUTTON_NEW_PLAYERS"]
        ]) : We("", !0), t.player.status === "countdown" ? tt((se(), le("button", {
            key: 2,
            class: qe(t.localClasses.action),
            onClick: e[2] || (e[2] = (...u) => t.onCancelClick && t.onCancelClick(...u))
        }, null, 2)), [
            [c, "LOBBY.BUTTON_CANCEL"]
        ]) : We("", !0)], 64)) : t.player.gamepadStart ? tt((se(), le("p", {
            key: 2,
            class: qe(t.localClasses.status)
        }, null, 2)), [
            [c, "LOBBY.WAITING_FOR_GAMEPAD"]
        ]) : (se(), le("p", {
            key: 3,
            class: qe(t.localClasses.status)
        }, Tt(t.waitingForVIPText), 3)), t.messageLocation === "bottom" ? tt((se(), le("p", {
            key: 4,
            class: qe(t.localClasses.message)
        }, null, 2)), [
            [c, "POST_GAME.PLAY_AGAIN"]
        ]) : We("", !0)], 2)) : We("", !0)
    }
    const sK = $t(nK, [
            ["render", iK]
        ]),
        aK = vt({
            components: {
                PostGameActions: sK
            },
            props: {
                player: Object
            }
        }),
        oK = {
            class: "post-game"
        },
        cK = {
            class: "constrain"
        };

    function lK(t, e, r, n, s, o) {
        const c = ni("PostGameActions");
        return se(), le("div", oK, [ae("div", cK, [xt(c, {
            player: t.player
        }, null, 8, ["player"])])])
    }
    const uK = $t(aK, [
            ["render", lK]
        ]),
        fK = vt({
            props: {
                player: Object
            },
            data() {
                return {
                    value: ""
                }
            },
            methods: {
                onValueInput(t) {
                    const e = t.target;
                    this.value = e.value
                },
                isObjectResponseKey() {
                    if (!this.player.responseType) {
                        const t = this.$ecast.entities[this.player.responseKey];
                        if (t && t instanceof br.ObjectEntity) return !0
                    }
                    return this.player.responseType === "object"
                },
                onSubmitClick() {
                    if (this.isObjectResponseKey()) {
                        this.sendAsObject();
                        return
                    }
                    this.sendAsText()
                },
                sendAsObject() {
                    const t = this.player.send || {
                        action: this.player.action || "input"
                    };
                    t[this.player.key || "value"] = this.value, this.$ecast.updateObject(this.player.responseKey, t).catch(this.$handleEcastError)
                },
                sendAsText() {
                    this.$ecast.updateText(this.player.responseKey, this.value).catch(this.$handleEcastError)
                }
            }
        }),
        dK = {
            class: "single-text-entry"
        },
        hK = {
            class: "constrain"
        },
        pK = {
            key: 0
        },
        gK = {
            key: 1,
            for: "input"
        },
        mK = ["value", "rows", "placeholder", "disabled"],
        vK = ["value", "placeholder", "disabled"];

    function yK(t, e, r, n, s, o) {
        const c = qr("bb");
        return se(), le("div", dK, [ae("div", hK, [t.player.prompt ? tt((se(), le("p", pK, null, 512)), [
            [c, t.player.prompt]
        ]) : We("", !0), t.player.label ? tt((se(), le("label", gK, null, 512)), [
            [c, t.player.label]
        ]) : We("", !0), t.player.isMultiline ? (se(), le("textarea", {
            key: 2,
            id: "input",
            value: t.value,
            rows: t.player.lines || 2,
            placeholder: t.player.placeholder,
            disabled: t.player.isDisabled,
            onInput: e[0] || (e[0] = (...u) => t.onValueInput && t.onValueInput(...u))
        }, null, 40, mK)) : (se(), le("input", {
            key: 3,
            id: "input",
            type: "text",
            value: t.value,
            placeholder: t.player.placeholder,
            disabled: t.player.isDisabled,
            onInput: e[1] || (e[1] = (...u) => t.onValueInput && t.onValueInput(...u))
        }, null, 40, vK)), tt(ae("button", {
            onClick: e[2] || (e[2] = cn((...u) => t.onSubmitClick && t.onSubmitClick(...u), ["prevent"]))
        }, null, 512), [
            [c, t.player.submitText || "SUBMIT"]
        ])])])
    }
    const _K = $t(fK, [
            ["render", yK]
        ]),
        EK = vt({
            props: {
                player: Object
            },
            data() {
                return {
                    values: []
                }
            },
            beforeMount() {
                this.values = this.player.inputs.map(t => {
                    var e;
                    return (e = t.value) != null ? e : ""
                })
            },
            methods: {
                onValueInput(t, e) {
                    const r = t.target;
                    this.values[e] = r.value
                },
                isObjectResponseKey() {
                    if (!this.player.responseType) {
                        const t = this.$ecast.entities[this.player.responseKey];
                        if (t && t instanceof br.ObjectEntity) return !0
                    }
                    return this.player.responseType === "object"
                },
                onSubmitClick() {
                    if (this.isObjectResponseKey()) {
                        this.sendAsObject();
                        return
                    }
                    this.sendAsText()
                },
                sendAsObject() {
                    const t = this.player.send || {
                        action: this.player.action || "input"
                    };
                    this.player.inputs.forEach((e, r) => {
                        var s;
                        const n = (s = e.key) != null ? s : `input${r}`;
                        t[n] = this.values[r]
                    }), this.$ecast.updateObject(this.player.responseKey, t).catch(this.$handleEcastError)
                },
                sendAsText() {
                    const t = this.player.separator || "|";
                    this.$ecast.updateText(this.player.responseKey, this.values.join(t)).catch(this.$handleEcastError)
                }
            }
        }),
        bK = {
            class: "multi-text-entry"
        },
        TK = {
            class: "constrain"
        },
        SK = {
            key: 0
        },
        OK = ["for"],
        wK = ["id", "value", "rows", "placeholder", "disabled", "onInput"],
        CK = ["id", "value", "placeholder", "disabled", "onInput"];

    function IK(t, e, r, n, s, o) {
        const c = qr("bb");
        return se(), le("div", bK, [ae("div", TK, [t.player.prompt ? tt((se(), le("p", SK, null, 512)), [
            [c, t.player.prompt]
        ]) : We("", !0), (se(!0), le(It, null, io(t.player.inputs, (u, f) => (se(), le(It, null, [u.label ? tt((se(), le("label", {
            key: `label-${u.key}`,
            for: `input-${f}`
        }, null, 8, OK)), [
            [c, u.label]
        ]) : We("", !0), u.isMultiline ? (se(), le("textarea", {
            id: `input-${f}`,
            key: `input-${f}`,
            value: t.values[f],
            rows: u.lines || 2,
            placeholder: u.placeholder,
            disabled: u.isDisabled,
            onInput: h => t.onValueInput(h, f)
        }, null, 40, wK)) : (se(), le("input", {
            id: `input-${f}`,
            key: `input-${u.key}`,
            type: "text",
            value: t.values[f],
            placeholder: u.placeholder,
            disabled: u.isDisabled,
            onInput: h => t.onValueInput(h, f)
        }, null, 40, CK))], 64))), 256)), tt(ae("button", {
            onClick: e[0] || (e[0] = cn((...u) => t.onSubmitClick && t.onSubmitClick(...u), ["prevent"]))
        }, null, 512), [
            [c, t.player.submitText || "SUBMIT"]
        ])])])
    }
    const $K = $t(EK, [
            ["render", IK]
        ]),
        AK = vt({
            props: {
                player: Object
            }
        }),
        RK = {
            class: "waiting"
        },
        NK = {
            class: "constrain"
        },
        PK = {
            key: 0
        };

    function LK(t, e, r, n, s, o) {
        const c = qr("bb");
        return se(), le("div", RK, [ae("div", NK, [t.player.message ? tt((se(), le("p", PK, null, 512)), [
            [c, t.player.message]
        ]) : We("", !0)])])
    }
    const kK = $t(AK, [
            ["render", LK]
        ]),
        xK = vt({
            components: {
                Choices: PL,
                Doodle: M3,
                Draw: K3,
                Lobby: rK,
                PostGame: uK,
                SingleTextEntry: _K,
                MultiTextEntry: $K,
                Waiting: kK
            },
            props: {
                applyStyling: {
                    type: Boolean,
                    default: !0
                },
                player: Object
            }
        });

    function DK(t, e, r, n, s, o) {
        return t.player ? (se(), ui(Sh(t.player.kind), {
            key: 0,
            player: t.player,
            class: qe({
                fallback: t.applyStyling
            })
        }, null, 8, ["player", "class"])) : We("", !0)
    }
    const MK = $t(xK, [
        ["render", DK]
    ]);
    vt({
        props: {
            artifact: Object
        },
        computed: {
            link() {
                if (!this.artifact) return;
                const t = this.artifact.rootId.includes("test") ? "http" : "https",
                    e = this.artifact.rootId.includes("test") ? "games-test.jackbox.tv" : "games.jackbox.tv";
                return `${t}://${e}/artifact/${this.artifact.categoryId}/${this.artifact.artifactId}/`
            },
            hasProvidedContent() {
                return this.$slots.default !== void 0
            }
        },
        mounted() {
            jc.galleryImpression(this.artifact.categoryId, "post_game")
        },
        methods: {
            onLinkClick() {
                jc.galleryClick(this.artifact.categoryId, "post_game"), Za.setAsViewed(0)
            }
        }
    });
    vt({
        props: {
            modelValue: String,
            sanitizers: Array
        },
        emits: {
            "update:modelValue": t => !0
        },
        watch: {
            modelValue(t, e) {
                if (t !== e) {
                    const r = this.$refs.input;
                    r.value = t
                }
            }
        },
        methods: {
            async onInput(t) {
                const e = t.target,
                    r = e.maxLength === -1 ? Number.MAX_SAFE_INTEGER : e.maxLength;
                if (this.sanitizers && (e.value = ES.withTypes(e.value, [...this.sanitizers])), e.value.length > r) {
                    e.value = e.value.substring(0, r);
                    return
                }
                this.$emit("update:modelValue", e.value), await this.$nextTick(), e.value !== this.modelValue && (e.value = this.modelValue)
            }
        }
    });
    var Mi, pc, Ua = typeof Map == "function" ? new Map : (Mi = [], pc = [], {
            has: function(t) {
                return Mi.indexOf(t) > -1
            },
            get: function(t) {
                return pc[Mi.indexOf(t)]
            },
            set: function(t, e) {
                Mi.indexOf(t) === -1 && (Mi.push(t), pc.push(e))
            },
            delete: function(t) {
                var e = Mi.indexOf(t);
                e > -1 && (Mi.splice(e, 1), pc.splice(e, 1))
            }
        }),
        bS = function(t) {
            return new Event(t, {
                bubbles: !0
            })
        };
    try {
        new Event("test")
    } catch {
        bS = function(e) {
            var r = document.createEvent("Event");
            return r.initEvent(e, !0, !1), r
        }
    }

    function FK(t) {
        var e = Ua.get(t);
        e && e.destroy()
    }

    function UK(t) {
        var e = Ua.get(t);
        e && e.update()
    }
    var Pa = null;
    typeof window > "u" || typeof window.getComputedStyle != "function" ? ((Pa = function(t) {
        return t
    }).destroy = function(t) {
        return t
    }, Pa.update = function(t) {
        return t
    }) : ((Pa = function(t, e) {
        return t && Array.prototype.forEach.call(t.length ? t : [t], function(r) {
            return function(n) {
                if (n && n.nodeName && n.nodeName === "TEXTAREA" && !Ua.has(n)) {
                    var s, o = null,
                        c = null,
                        u = null,
                        f = function() {
                            n.clientWidth !== c && b()
                        },
                        h = function(C) {
                            window.removeEventListener("resize", f, !1), n.removeEventListener("input", b, !1), n.removeEventListener("keyup", b, !1), n.removeEventListener("autosize:destroy", h, !1), n.removeEventListener("autosize:update", b, !1), Object.keys(C).forEach(function(L) {
                                n.style[L] = C[L]
                            }), Ua.delete(n)
                        }.bind(n, {
                            height: n.style.height,
                            resize: n.style.resize,
                            overflowY: n.style.overflowY,
                            overflowX: n.style.overflowX,
                            wordWrap: n.style.wordWrap
                        });
                    n.addEventListener("autosize:destroy", h, !1), "onpropertychange" in n && "oninput" in n && n.addEventListener("keyup", b, !1), window.addEventListener("resize", f, !1), n.addEventListener("input", b, !1), n.addEventListener("autosize:update", b, !1), n.style.overflowX = "hidden", n.style.wordWrap = "break-word", Ua.set(n, {
                        destroy: h,
                        update: b
                    }), (s = window.getComputedStyle(n, null)).resize === "vertical" ? n.style.resize = "none" : s.resize === "both" && (n.style.resize = "horizontal"), o = s.boxSizing === "content-box" ? -(parseFloat(s.paddingTop) + parseFloat(s.paddingBottom)) : parseFloat(s.borderTopWidth) + parseFloat(s.borderBottomWidth), isNaN(o) && (o = 0), b()
                }

                function m(C) {
                    var L = n.style.width;
                    n.style.width = "0px", n.style.width = L, n.style.overflowY = C
                }

                function _() {
                    if (n.scrollHeight !== 0) {
                        var C = function(M) {
                                for (var B = []; M && M.parentNode && M.parentNode instanceof Element;) M.parentNode.scrollTop && B.push({
                                    node: M.parentNode,
                                    scrollTop: M.parentNode.scrollTop
                                }), M = M.parentNode;
                                return B
                            }(n),
                            L = document.documentElement && document.documentElement.scrollTop;
                        n.style.height = "", n.style.height = n.scrollHeight + o + "px", c = n.clientWidth, C.forEach(function(M) {
                            M.node.scrollTop = M.scrollTop
                        }), L && (document.documentElement.scrollTop = L)
                    }
                }

                function b() {
                    _();
                    var C = Math.round(parseFloat(n.style.height)),
                        L = window.getComputedStyle(n, null),
                        M = L.boxSizing === "content-box" ? Math.round(parseFloat(L.height)) : n.offsetHeight;
                    if (M < C ? L.overflowY === "hidden" && (m("scroll"), _(), M = L.boxSizing === "content-box" ? Math.round(parseFloat(window.getComputedStyle(n, null).height)) : n.offsetHeight) : L.overflowY !== "hidden" && (m("hidden"), _(), M = L.boxSizing === "content-box" ? Math.round(parseFloat(window.getComputedStyle(n, null).height)) : n.offsetHeight), u !== M) {
                        u = M;
                        var B = bS("autosize:resized");
                        try {
                            n.dispatchEvent(B)
                        } catch {}
                    }
                }
            }(r)
        }), t
    }).destroy = function(t) {
        return t && Array.prototype.forEach.call(t.length ? t : [t], FK), t
    }, Pa.update = function(t) {
        return t && Array.prototype.forEach.call(t.length ? t : [t], UK), t
    });
    var BK = Pa,
        jK = {
            exports: {}
        },
        gc = function(t) {
            return t && t.Math == Math && t
        },
        Lr = gc(typeof globalThis == "object" && globalThis) || gc(typeof window == "object" && window) || gc(typeof self == "object" && self) || gc(typeof Pt == "object" && Pt) || function() {
            return this
        }() || Function("return this")(),
        rp = {},
        kr = function(t) {
            try {
                return !!t()
            } catch {
                return !0
            }
        },
        GK = kr,
        yi = !GK(function() {
            return Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1] != 7
        }),
        WK = kr,
        np = !WK(function() {
            var t = function() {}.bind();
            return typeof t != "function" || t.hasOwnProperty("prototype")
        }),
        KK = np,
        mc = Function.prototype.call,
        _i = KK ? mc.bind(mc) : function() {
            return mc.apply(mc, arguments)
        },
        TS = {},
        SS = {}.propertyIsEnumerable,
        OS = Object.getOwnPropertyDescriptor,
        HK = OS && !SS.call({
            1: 2
        }, 1);
    TS.f = HK ? function(e) {
        var r = OS(this, e);
        return !!r && r.enumerable
    } : SS;
    var wS = function(t, e) {
            return {
                enumerable: !(t & 1),
                configurable: !(t & 2),
                writable: !(t & 4),
                value: e
            }
        },
        CS = np,
        IS = Function.prototype,
        VK = IS.bind,
        wd = IS.call,
        YK = CS && VK.bind(wd, wd),
        or = CS ? function(t) {
            return t && YK(t)
        } : function(t) {
            return t && function() {
                return wd.apply(t, arguments)
            }
        },
        $S = or,
        qK = $S({}.toString),
        zK = $S("".slice),
        Cl = function(t) {
            return zK(qK(t), 8, -1)
        },
        XK = or,
        JK = kr,
        ZK = Cl,
        Sf = Object,
        QK = XK("".split),
        e8 = JK(function() {
            return !Sf("z").propertyIsEnumerable(0)
        }) ? function(t) {
            return ZK(t) == "String" ? QK(t, "") : Sf(t)
        } : Sf,
        t8 = TypeError,
        lo = function(t) {
            if (t == null) throw t8("Can't call method on " + t);
            return t
        },
        r8 = e8,
        n8 = lo,
        Il = function(t) {
            return r8(n8(t))
        },
        Tr = function(t) {
            return typeof t == "function"
        },
        i8 = Tr,
        oa = function(t) {
            return typeof t == "object" ? t !== null : i8(t)
        },
        Of = Lr,
        s8 = Tr,
        a8 = function(t) {
            return s8(t) ? t : void 0
        },
        $l = function(t, e) {
            return arguments.length < 2 ? a8(Of[t]) : Of[t] && Of[t][e]
        },
        o8 = or,
        AS = o8({}.isPrototypeOf),
        c8 = $l,
        l8 = c8("navigator", "userAgent") || "",
        RS = Lr,
        wf = l8,
        By = RS.process,
        jy = RS.Deno,
        Gy = By && By.versions || jy && jy.version,
        Wy = Gy && Gy.v8,
        en, Yc;
    Wy && (en = Wy.split("."), Yc = en[0] > 0 && en[0] < 4 ? 1 : +(en[0] + en[1]));
    !Yc && wf && (en = wf.match(/Edge\/(\d+)/), (!en || en[1] >= 74) && (en = wf.match(/Chrome\/(\d+)/), en && (Yc = +en[1])));
    var u8 = Yc,
        Ky = u8,
        f8 = kr,
        NS = !!Object.getOwnPropertySymbols && !f8(function() {
            var t = Symbol();
            return !String(t) || !(Object(t) instanceof Symbol) || !Symbol.sham && Ky && Ky < 41
        }),
        d8 = NS,
        PS = d8 && !Symbol.sham && typeof Symbol.iterator == "symbol",
        h8 = $l,
        p8 = Tr,
        g8 = AS,
        m8 = PS,
        v8 = Object,
        LS = m8 ? function(t) {
            return typeof t == "symbol"
        } : function(t) {
            var e = h8("Symbol");
            return p8(e) && g8(e.prototype, v8(t))
        },
        y8 = String,
        _8 = function(t) {
            try {
                return y8(t)
            } catch {
                return "Object"
            }
        },
        E8 = Tr,
        b8 = _8,
        T8 = TypeError,
        S8 = function(t) {
            if (E8(t)) return t;
            throw T8(b8(t) + " is not a function")
        },
        O8 = S8,
        ip = function(t, e) {
            var r = t[e];
            return r == null ? void 0 : O8(r)
        },
        Cf = _i,
        If = Tr,
        $f = oa,
        w8 = TypeError,
        C8 = function(t, e) {
            var r, n;
            if (e === "string" && If(r = t.toString) && !$f(n = Cf(r, t)) || If(r = t.valueOf) && !$f(n = Cf(r, t)) || e !== "string" && If(r = t.toString) && !$f(n = Cf(r, t))) return n;
            throw w8("Can't convert object to primitive value")
        },
        Al = {
            exports: {}
        },
        Hy = Lr,
        I8 = Object.defineProperty,
        sp = function(t, e) {
            try {
                I8(Hy, t, {
                    value: e,
                    configurable: !0,
                    writable: !0
                })
            } catch {
                Hy[t] = e
            }
            return e
        },
        $8 = Lr,
        A8 = sp,
        Vy = "__core-js_shared__",
        R8 = $8[Vy] || A8(Vy, {}),
        ap = R8,
        Yy = ap;
    (Al.exports = function(t, e) {
        return Yy[t] || (Yy[t] = e !== void 0 ? e : {})
    })("versions", []).push({
        version: "3.23.4",
        mode: "global",
        copyright: "\xA9 2014-2022 Denis Pushkarev (zloirock.ru)",
        license: "https://github.com/zloirock/core-js/blob/v3.23.4/LICENSE",
        source: "https://github.com/zloirock/core-js"
    });
    var N8 = lo,
        P8 = Object,
        kS = function(t) {
            return P8(N8(t))
        },
        L8 = or,
        k8 = kS,
        x8 = L8({}.hasOwnProperty),
        Ei = Object.hasOwn || function(e, r) {
            return x8(k8(e), r)
        },
        D8 = or,
        M8 = 0,
        F8 = Math.random(),
        U8 = D8(1 .toString),
        xS = function(t) {
            return "Symbol(" + (t === void 0 ? "" : t) + ")_" + U8(++M8 + F8, 36)
        },
        B8 = Lr,
        j8 = Al.exports,
        qy = Ei,
        G8 = xS,
        zy = NS,
        DS = PS,
        Os = j8("wks"),
        ts = B8.Symbol,
        Xy = ts && ts.for,
        W8 = DS ? ts : ts && ts.withoutSetter || G8,
        os = function(t) {
            if (!qy(Os, t) || !(zy || typeof Os[t] == "string")) {
                var e = "Symbol." + t;
                zy && qy(ts, t) ? Os[t] = ts[t] : DS && Xy ? Os[t] = Xy(e) : Os[t] = W8(e)
            }
            return Os[t]
        },
        K8 = _i,
        Jy = oa,
        Zy = LS,
        H8 = ip,
        V8 = C8,
        Y8 = os,
        q8 = TypeError,
        z8 = Y8("toPrimitive"),
        X8 = function(t, e) {
            if (!Jy(t) || Zy(t)) return t;
            var r = H8(t, z8),
                n;
            if (r) {
                if (e === void 0 && (e = "default"), n = K8(r, t, e), !Jy(n) || Zy(n)) return n;
                throw q8("Can't convert object to primitive value")
            }
            return e === void 0 && (e = "number"), V8(t, e)
        },
        J8 = X8,
        Z8 = LS,
        MS = function(t) {
            var e = J8(t, "string");
            return Z8(e) ? e : e + ""
        },
        Q8 = Lr,
        Qy = oa,
        Cd = Q8.document,
        eH = Qy(Cd) && Qy(Cd.createElement),
        FS = function(t) {
            return eH ? Cd.createElement(t) : {}
        },
        tH = yi,
        rH = kr,
        nH = FS,
        US = !tH && !rH(function() {
            return Object.defineProperty(nH("div"), "a", {
                get: function() {
                    return 7
                }
            }).a != 7
        }),
        iH = yi,
        sH = _i,
        aH = TS,
        oH = wS,
        cH = Il,
        lH = MS,
        uH = Ei,
        fH = US,
        e_ = Object.getOwnPropertyDescriptor;
    rp.f = iH ? e_ : function(e, r) {
        if (e = cH(e), r = lH(r), fH) try {
            return e_(e, r)
        } catch {}
        if (uH(e, r)) return oH(!sH(aH.f, e, r), e[r])
    };
    var uo = {},
        dH = yi,
        hH = kr,
        BS = dH && hH(function() {
            return Object.defineProperty(function() {}, "prototype", {
                value: 42,
                writable: !1
            }).prototype != 42
        }),
        pH = oa,
        gH = String,
        mH = TypeError,
        cs = function(t) {
            if (pH(t)) return t;
            throw mH(gH(t) + " is not an object")
        },
        vH = yi,
        yH = US,
        _H = BS,
        vc = cs,
        t_ = MS,
        EH = TypeError,
        Af = Object.defineProperty,
        bH = Object.getOwnPropertyDescriptor,
        Rf = "enumerable",
        Nf = "configurable",
        Pf = "writable";
    uo.f = vH ? _H ? function(e, r, n) {
        if (vc(e), r = t_(r), vc(n), typeof e == "function" && r === "prototype" && "value" in n && Pf in n && !n[Pf]) {
            var s = bH(e, r);
            s && s[Pf] && (e[r] = n.value, n = {
                configurable: Nf in n ? n[Nf] : s[Nf],
                enumerable: Rf in n ? n[Rf] : s[Rf],
                writable: !1
            })
        }
        return Af(e, r, n)
    } : Af : function(e, r, n) {
        if (vc(e), r = t_(r), vc(n), yH) try {
            return Af(e, r, n)
        } catch {}
        if ("get" in n || "set" in n) throw EH("Accessors not supported");
        return "value" in n && (e[r] = n.value), e
    };
    var TH = yi,
        SH = uo,
        OH = wS,
        op = TH ? function(t, e, r) {
            return SH.f(t, e, OH(1, r))
        } : function(t, e, r) {
            return t[e] = r, t
        },
        jS = {
            exports: {}
        },
        Id = yi,
        wH = Ei,
        GS = Function.prototype,
        CH = Id && Object.getOwnPropertyDescriptor,
        cp = wH(GS, "name"),
        IH = cp && function() {}.name === "something",
        $H = cp && (!Id || Id && CH(GS, "name").configurable),
        AH = {
            EXISTS: cp,
            PROPER: IH,
            CONFIGURABLE: $H
        },
        RH = or,
        NH = Tr,
        $d = ap,
        PH = RH(Function.toString);
    NH($d.inspectSource) || ($d.inspectSource = function(t) {
        return PH(t)
    });
    var WS = $d.inspectSource,
        LH = Lr,
        kH = Tr,
        xH = WS,
        r_ = LH.WeakMap,
        DH = kH(r_) && /native code/.test(xH(r_)),
        MH = Al.exports,
        FH = xS,
        n_ = MH("keys"),
        KS = function(t) {
            return n_[t] || (n_[t] = FH(t))
        },
        lp = {},
        UH = DH,
        HS = Lr,
        Lf = or,
        BH = oa,
        jH = op,
        kf = Ei,
        xf = ap,
        GH = KS,
        WH = lp,
        i_ = "Object already initialized",
        Ad = HS.TypeError,
        KH = HS.WeakMap,
        qc, Qa, zc, HH = function(t) {
            return zc(t) ? Qa(t) : qc(t, {})
        },
        VH = function(t) {
            return function(e) {
                var r;
                if (!BH(e) || (r = Qa(e)).type !== t) throw Ad("Incompatible receiver, " + t + " required");
                return r
            }
        };
    if (UH || xf.state) {
        var Fi = xf.state || (xf.state = new KH),
            YH = Lf(Fi.get),
            s_ = Lf(Fi.has),
            qH = Lf(Fi.set);
        qc = function(t, e) {
            if (s_(Fi, t)) throw new Ad(i_);
            return e.facade = t, qH(Fi, t, e), e
        }, Qa = function(t) {
            return YH(Fi, t) || {}
        }, zc = function(t) {
            return s_(Fi, t)
        }
    } else {
        var ws = GH("state");
        WH[ws] = !0, qc = function(t, e) {
            if (kf(t, ws)) throw new Ad(i_);
            return e.facade = t, jH(t, ws, e), e
        }, Qa = function(t) {
            return kf(t, ws) ? t[ws] : {}
        }, zc = function(t) {
            return kf(t, ws)
        }
    }
    var VS = {
            set: qc,
            get: Qa,
            has: zc,
            enforce: HH,
            getterFor: VH
        },
        zH = kr,
        XH = Tr,
        yc = Ei,
        Rd = yi,
        JH = AH.CONFIGURABLE,
        ZH = WS,
        YS = VS,
        QH = YS.enforce,
        eV = YS.get,
        Rc = Object.defineProperty,
        tV = Rd && !zH(function() {
            return Rc(function() {}, "length", {
                value: 8
            }).length !== 8
        }),
        rV = String(String).split("String"),
        nV = jS.exports = function(t, e, r) {
            String(e).slice(0, 7) === "Symbol(" && (e = "[" + String(e).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), r && r.getter && (e = "get " + e), r && r.setter && (e = "set " + e), (!yc(t, "name") || JH && t.name !== e) && (Rd ? Rc(t, "name", {
                value: e,
                configurable: !0
            }) : t.name = e), tV && r && yc(r, "arity") && t.length !== r.arity && Rc(t, "length", {
                value: r.arity
            });
            try {
                r && yc(r, "constructor") && r.constructor ? Rd && Rc(t, "prototype", {
                    writable: !1
                }) : t.prototype && (t.prototype = void 0)
            } catch {}
            var n = QH(t);
            return yc(n, "source") || (n.source = rV.join(typeof e == "string" ? e : "")), t
        };
    Function.prototype.toString = nV(function() {
        return XH(this) && eV(this).source || ZH(this)
    }, "toString");
    var iV = Tr,
        sV = uo,
        aV = jS.exports,
        oV = sp,
        qS = function(t, e, r, n) {
            n || (n = {});
            var s = n.enumerable,
                o = n.name !== void 0 ? n.name : e;
            if (iV(r) && aV(r, o, n), n.global) s ? t[e] = r : oV(e, r);
            else {
                try {
                    n.unsafe ? t[e] && (s = !0) : delete t[e]
                } catch {}
                s ? t[e] = r : sV.f(t, e, {
                    value: r,
                    enumerable: !1,
                    configurable: !n.nonConfigurable,
                    writable: !n.nonWritable
                })
            }
            return t
        },
        zS = {},
        cV = Math.ceil,
        lV = Math.floor,
        uV = Math.trunc || function(e) {
            var r = +e;
            return (r > 0 ? lV : cV)(r)
        },
        fV = uV,
        Rl = function(t) {
            var e = +t;
            return e !== e || e === 0 ? 0 : fV(e)
        },
        dV = Rl,
        hV = Math.max,
        pV = Math.min,
        gV = function(t, e) {
            var r = dV(t);
            return r < 0 ? hV(r + e, 0) : pV(r, e)
        },
        mV = Rl,
        vV = Math.min,
        XS = function(t) {
            return t > 0 ? vV(mV(t), 9007199254740991) : 0
        },
        yV = XS,
        _V = function(t) {
            return yV(t.length)
        },
        EV = Il,
        bV = gV,
        TV = _V,
        a_ = function(t) {
            return function(e, r, n) {
                var s = EV(e),
                    o = TV(s),
                    c = bV(n, o),
                    u;
                if (t && r != r) {
                    for (; o > c;)
                        if (u = s[c++], u != u) return !0
                } else
                    for (; o > c; c++)
                        if ((t || c in s) && s[c] === r) return t || c || 0;
                return !t && -1
            }
        },
        SV = {
            includes: a_(!0),
            indexOf: a_(!1)
        },
        OV = or,
        Df = Ei,
        wV = Il,
        CV = SV.indexOf,
        IV = lp,
        o_ = OV([].push),
        JS = function(t, e) {
            var r = wV(t),
                n = 0,
                s = [],
                o;
            for (o in r) !Df(IV, o) && Df(r, o) && o_(s, o);
            for (; e.length > n;) Df(r, o = e[n++]) && (~CV(s, o) || o_(s, o));
            return s
        },
        up = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
        $V = JS,
        AV = up,
        RV = AV.concat("length", "prototype");
    zS.f = Object.getOwnPropertyNames || function(e) {
        return $V(e, RV)
    };
    var ZS = {};
    ZS.f = Object.getOwnPropertySymbols;
    var NV = $l,
        PV = or,
        LV = zS,
        kV = ZS,
        xV = cs,
        DV = PV([].concat),
        MV = NV("Reflect", "ownKeys") || function(e) {
            var r = LV.f(xV(e)),
                n = kV.f;
            return n ? DV(r, n(e)) : r
        },
        c_ = Ei,
        FV = MV,
        UV = rp,
        BV = uo,
        jV = function(t, e, r) {
            for (var n = FV(e), s = BV.f, o = UV.f, c = 0; c < n.length; c++) {
                var u = n[c];
                !c_(t, u) && !(r && c_(r, u)) && s(t, u, o(e, u))
            }
        },
        GV = kr,
        WV = Tr,
        KV = /#|\.prototype\./,
        fo = function(t, e) {
            var r = VV[HV(t)];
            return r == qV ? !0 : r == YV ? !1 : WV(e) ? GV(e) : !!e
        },
        HV = fo.normalize = function(t) {
            return String(t).replace(KV, ".").toLowerCase()
        },
        VV = fo.data = {},
        YV = fo.NATIVE = "N",
        qV = fo.POLYFILL = "P",
        zV = fo,
        Mf = Lr,
        XV = rp.f,
        JV = op,
        ZV = qS,
        QV = sp,
        e4 = jV,
        t4 = zV,
        QS = function(t, e) {
            var r = t.target,
                n = t.global,
                s = t.stat,
                o, c, u, f, h, m;
            if (n ? c = Mf : s ? c = Mf[r] || QV(r, {}) : c = (Mf[r] || {}).prototype, c)
                for (u in e) {
                    if (h = e[u], t.dontCallGetSet ? (m = XV(c, u), f = m && m.value) : f = c[u], o = t4(n ? u : r + (s ? "." : "#") + u, t.forced), !o && f !== void 0) {
                        if (typeof h == typeof f) continue;
                        e4(h, f)
                    }(t.sham || f && f.sham) && JV(h, "sham", !0), ZV(c, u, h, t)
                }
        },
        r4 = oa,
        n4 = Cl,
        i4 = os,
        s4 = i4("match"),
        a4 = function(t) {
            var e;
            return r4(t) && ((e = t[s4]) !== void 0 ? !!e : n4(t) == "RegExp")
        },
        o4 = os,
        c4 = o4("toStringTag"),
        eO = {};
    eO[c4] = "z";
    var l4 = String(eO) === "[object z]",
        u4 = l4,
        f4 = Tr,
        Nc = Cl,
        d4 = os,
        h4 = d4("toStringTag"),
        p4 = Object,
        g4 = Nc(function() {
            return arguments
        }()) == "Arguments",
        m4 = function(t, e) {
            try {
                return t[e]
            } catch {}
        },
        v4 = u4 ? Nc : function(t) {
            var e, r, n;
            return t === void 0 ? "Undefined" : t === null ? "Null" : typeof(r = m4(e = p4(t), h4)) == "string" ? r : g4 ? Nc(e) : (n = Nc(e)) == "Object" && f4(e.callee) ? "Arguments" : n
        },
        y4 = v4,
        _4 = String,
        Nl = function(t) {
            if (y4(t) === "Symbol") throw TypeError("Cannot convert a Symbol value to a string");
            return _4(t)
        },
        E4 = cs,
        tO = function() {
            var t = E4(this),
                e = "";
            return t.hasIndices && (e += "d"), t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.dotAll && (e += "s"), t.unicode && (e += "u"), t.unicodeSets && (e += "v"), t.sticky && (e += "y"), e
        },
        b4 = _i,
        T4 = Ei,
        S4 = AS,
        O4 = tO,
        l_ = RegExp.prototype,
        w4 = function(t) {
            var e = t.flags;
            return e === void 0 && !("flags" in l_) && !T4(t, "flags") && S4(l_, t) ? b4(O4, t) : e
        },
        fp = or,
        C4 = kS,
        I4 = Math.floor,
        Ff = fp("".charAt),
        $4 = fp("".replace),
        Uf = fp("".slice),
        A4 = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
        R4 = /\$([$&'`]|\d{1,2})/g,
        rO = function(t, e, r, n, s, o) {
            var c = r + t.length,
                u = n.length,
                f = R4;
            return s !== void 0 && (s = C4(s), f = A4), $4(o, f, function(h, m) {
                var _;
                switch (Ff(m, 0)) {
                    case "$":
                        return "$";
                    case "&":
                        return t;
                    case "`":
                        return Uf(e, 0, r);
                    case "'":
                        return Uf(e, c);
                    case "<":
                        _ = s[Uf(m, 1, -1)];
                        break;
                    default:
                        var b = +m;
                        if (b === 0) return h;
                        if (b > u) {
                            var C = I4(b / 10);
                            return C === 0 ? h : C <= u ? n[C - 1] === void 0 ? Ff(m, 1) : n[C - 1] + Ff(m, 1) : h
                        }
                        _ = n[b - 1]
                }
                return _ === void 0 ? "" : _
            })
        },
        N4 = QS,
        P4 = _i,
        dp = or,
        u_ = lo,
        L4 = Tr,
        k4 = a4,
        Aa = Nl,
        x4 = ip,
        D4 = w4,
        M4 = rO,
        F4 = os,
        U4 = F4("replace"),
        B4 = TypeError,
        nO = dp("".indexOf);
    dp("".replace);
    var f_ = dp("".slice),
        j4 = Math.max,
        d_ = function(t, e, r) {
            return r > t.length ? -1 : e === "" ? r : nO(t, e, r)
        };
    N4({
        target: "String",
        proto: !0
    }, {
        replaceAll: function(e, r) {
            var n = u_(this),
                s, o, c, u, f, h, m, _, b, C = 0,
                L = 0,
                M = "";
            if (e != null) {
                if (s = k4(e), s && (o = Aa(u_(D4(e))), !~nO(o, "g"))) throw B4("`.replaceAll` does not allow non-global regexes");
                if (c = x4(e, U4), c) return P4(c, e, n, r)
            }
            for (u = Aa(n), f = Aa(e), h = L4(r), h || (r = Aa(r)), m = f.length, _ = j4(1, m), C = d_(u, f, 0); C !== -1;) b = h ? Aa(r(f, C, u)) : M4(f, u, C, [], void 0, r), M += f_(u, L, C) + b, L = C + m, C = d_(u, f, C + _);
            return L < u.length && (M += f_(u, L)), M
        }
    });
    var hp = kr,
        G4 = Lr,
        pp = G4.RegExp,
        gp = hp(function() {
            var t = pp("a", "y");
            return t.lastIndex = 2, t.exec("abcd") != null
        }),
        W4 = gp || hp(function() {
            return !pp("a", "y").sticky
        }),
        K4 = gp || hp(function() {
            var t = pp("^r", "gy");
            return t.lastIndex = 2, t.exec("str") != null
        }),
        H4 = {
            BROKEN_CARET: K4,
            MISSED_STICKY: W4,
            UNSUPPORTED_Y: gp
        },
        iO = {},
        V4 = JS,
        Y4 = up,
        q4 = Object.keys || function(e) {
            return V4(e, Y4)
        },
        z4 = yi,
        X4 = BS,
        J4 = uo,
        Z4 = cs,
        Q4 = Il,
        eY = q4;
    iO.f = z4 && !X4 ? Object.defineProperties : function(e, r) {
        Z4(e);
        for (var n = Q4(r), s = eY(r), o = s.length, c = 0, u; o > c;) J4.f(e, u = s[c++], n[u]);
        return e
    };
    var tY = $l,
        rY = tY("document", "documentElement"),
        nY = cs,
        iY = iO,
        h_ = up,
        sY = lp,
        aY = rY,
        oY = FS,
        cY = KS,
        p_ = ">",
        g_ = "<",
        Nd = "prototype",
        Pd = "script",
        sO = cY("IE_PROTO"),
        Bf = function() {},
        aO = function(t) {
            return g_ + Pd + p_ + t + g_ + "/" + Pd + p_
        },
        m_ = function(t) {
            t.write(aO("")), t.close();
            var e = t.parentWindow.Object;
            return t = null, e
        },
        lY = function() {
            var t = oY("iframe"),
                e = "java" + Pd + ":",
                r;
            return t.style.display = "none", aY.appendChild(t), t.src = String(e), r = t.contentWindow.document, r.open(), r.write(aO("document.F=Object")), r.close(), r.F
        },
        _c, Pc = function() {
            try {
                _c = new ActiveXObject("htmlfile")
            } catch {}
            Pc = typeof document < "u" ? document.domain && _c ? m_(_c) : lY() : m_(_c);
            for (var t = h_.length; t--;) delete Pc[Nd][h_[t]];
            return Pc()
        };
    sY[sO] = !0;
    var uY = Object.create || function(e, r) {
            var n;
            return e !== null ? (Bf[Nd] = nY(e), n = new Bf, Bf[Nd] = null, n[sO] = e) : n = Pc(), r === void 0 ? n : iY.f(n, r)
        },
        fY = kr,
        dY = Lr,
        hY = dY.RegExp,
        pY = fY(function() {
            var t = hY(".", "s");
            return !(t.dotAll && t.exec(`
`) && t.flags === "s")
        }),
        gY = kr,
        mY = Lr,
        vY = mY.RegExp,
        yY = gY(function() {
            var t = vY("(?<a>b)", "g");
            return t.exec("b").groups.a !== "b" || "b".replace(t, "$<a>c") !== "bc"
        }),
        As = _i,
        Pl = or,
        _Y = Nl,
        EY = tO,
        bY = H4,
        TY = Al.exports,
        SY = uY,
        OY = VS.get,
        wY = pY,
        CY = yY,
        IY = TY("native-string-replace", String.prototype.replace),
        Xc = RegExp.prototype.exec,
        Ld = Xc,
        $Y = Pl("".charAt),
        AY = Pl("".indexOf),
        RY = Pl("".replace),
        jf = Pl("".slice),
        kd = function() {
            var t = /a/,
                e = /b*/g;
            return As(Xc, t, "a"), As(Xc, e, "a"), t.lastIndex !== 0 || e.lastIndex !== 0
        }(),
        oO = bY.BROKEN_CARET,
        xd = /()??/.exec("")[1] !== void 0,
        NY = kd || xd || oO || wY || CY;
    NY && (Ld = function(e) {
        var r = this,
            n = OY(r),
            s = _Y(e),
            o = n.raw,
            c, u, f, h, m, _, b;
        if (o) return o.lastIndex = r.lastIndex, c = As(Ld, o, s), r.lastIndex = o.lastIndex, c;
        var C = n.groups,
            L = oO && r.sticky,
            M = As(EY, r),
            B = r.source,
            I = 0,
            K = s;
        if (L && (M = RY(M, "y", ""), AY(M, "g") === -1 && (M += "g"), K = jf(s, r.lastIndex), r.lastIndex > 0 && (!r.multiline || r.multiline && $Y(s, r.lastIndex - 1) !== `
`) && (B = "(?: " + B + ")", K = " " + K, I++), u = new RegExp("^(?:" + B + ")", M)), xd && (u = new RegExp("^" + B + "$(?!\\s)", M)), kd && (f = r.lastIndex), h = As(Xc, L ? u : r, K), L ? h ? (h.input = jf(h.input, I), h[0] = jf(h[0], I), h.index = r.lastIndex, r.lastIndex += h[0].length) : r.lastIndex = 0 : kd && h && (r.lastIndex = r.global ? h.index + h[0].length : f), xd && h && h.length > 1 && As(IY, h[0], u, function() {
                for (m = 1; m < arguments.length - 2; m++) arguments[m] === void 0 && (h[m] = void 0)
            }), h && C)
            for (h.groups = _ = SY(null), m = 0; m < C.length; m++) b = C[m], _[b[0]] = h[b[1]];
        return h
    });
    var mp = Ld,
        PY = QS,
        v_ = mp;
    PY({
        target: "RegExp",
        proto: !0,
        forced: /./.exec !== v_
    }, {
        exec: v_
    });
    var LY = np,
        cO = Function.prototype,
        y_ = cO.apply,
        __ = cO.call,
        kY = typeof Reflect == "object" && Reflect.apply || (LY ? __.bind(y_) : function() {
            return __.apply(y_, arguments)
        }),
        E_ = or,
        b_ = qS,
        xY = mp,
        T_ = kr,
        lO = os,
        DY = op,
        MY = lO("species"),
        Gf = RegExp.prototype,
        FY = function(t, e, r, n) {
            var s = lO(t),
                o = !T_(function() {
                    var h = {};
                    return h[s] = function() {
                        return 7
                    }, "" [t](h) != 7
                }),
                c = o && !T_(function() {
                    var h = !1,
                        m = /a/;
                    return t === "split" && (m = {}, m.constructor = {}, m.constructor[MY] = function() {
                        return m
                    }, m.flags = "", m[s] = /./ [s]), m.exec = function() {
                        return h = !0, null
                    }, m[s](""), !h
                });
            if (!o || !c || r) {
                var u = E_(/./ [s]),
                    f = e(s, "" [t], function(h, m, _, b, C) {
                        var L = E_(h),
                            M = m.exec;
                        return M === xY || M === Gf.exec ? o && !C ? {
                            done: !0,
                            value: u(m, _, b)
                        } : {
                            done: !0,
                            value: L(_, m, b)
                        } : {
                            done: !1
                        }
                    });
                b_(String.prototype, t, f[0]), b_(Gf, s, f[1])
            }
            n && DY(Gf[s], "sham", !0)
        },
        vp = or,
        UY = Rl,
        BY = Nl,
        jY = lo,
        GY = vp("".charAt),
        S_ = vp("".charCodeAt),
        WY = vp("".slice),
        O_ = function(t) {
            return function(e, r) {
                var n = BY(jY(e)),
                    s = UY(r),
                    o = n.length,
                    c, u;
                return s < 0 || s >= o ? t ? "" : void 0 : (c = S_(n, s), c < 55296 || c > 56319 || s + 1 === o || (u = S_(n, s + 1)) < 56320 || u > 57343 ? t ? GY(n, s) : c : t ? WY(n, s, s + 2) : (c - 55296 << 10) + (u - 56320) + 65536)
            }
        },
        KY = {
            codeAt: O_(!1),
            charAt: O_(!0)
        },
        HY = KY.charAt,
        VY = function(t, e, r) {
            return e + (r ? HY(t, e).length : 1)
        },
        w_ = _i,
        YY = cs,
        qY = Tr,
        zY = Cl,
        XY = mp,
        JY = TypeError,
        ZY = function(t, e) {
            var r = t.exec;
            if (qY(r)) {
                var n = w_(r, t, e);
                return n !== null && YY(n), n
            }
            if (zY(t) === "RegExp") return w_(XY, t, e);
            throw JY("RegExp#exec called on incompatible receiver")
        },
        QY = kY,
        C_ = _i,
        Ll = or,
        eq = FY,
        tq = kr,
        rq = cs,
        nq = Tr,
        iq = Rl,
        sq = XS,
        Cs = Nl,
        aq = lo,
        oq = VY,
        cq = ip,
        lq = rO,
        uq = ZY,
        fq = os,
        Dd = fq("replace"),
        dq = Math.max,
        hq = Math.min,
        pq = Ll([].concat),
        Wf = Ll([].push),
        I_ = Ll("".indexOf),
        $_ = Ll("".slice),
        gq = function(t) {
            return t === void 0 ? t : String(t)
        },
        mq = function() {
            return "a".replace(/./, "$0") === "$0"
        }(),
        A_ = function() {
            return /./ [Dd] ? /./ [Dd]("a", "$0") === "" : !1
        }(),
        vq = !tq(function() {
            var t = /./;
            return t.exec = function() {
                var e = [];
                return e.groups = {
                    a: "7"
                }, e
            }, "".replace(t, "$<a>") !== "7"
        });
    eq("replace", function(t, e, r) {
        var n = A_ ? "$" : "$0";
        return [function(o, c) {
            var u = aq(this),
                f = o == null ? void 0 : cq(o, Dd);
            return f ? C_(f, o, u, c) : C_(e, Cs(u), o, c)
        }, function(s, o) {
            var c = rq(this),
                u = Cs(s);
            if (typeof o == "string" && I_(o, n) === -1 && I_(o, "$<") === -1) {
                var f = r(e, c, u, o);
                if (f.done) return f.value
            }
            var h = nq(o);
            h || (o = Cs(o));
            var m = c.global;
            if (m) {
                var _ = c.unicode;
                c.lastIndex = 0
            }
            for (var b = [];;) {
                var C = uq(c, u);
                if (C === null || (Wf(b, C), !m)) break;
                var L = Cs(C[0]);
                L === "" && (c.lastIndex = oq(u, sq(c.lastIndex), _))
            }
            for (var M = "", B = 0, I = 0; I < b.length; I++) {
                C = b[I];
                for (var K = Cs(C[0]), Y = dq(hq(iq(C.index), u.length), 0), G = [], j = 1; j < C.length; j++) Wf(G, gq(C[j]));
                var z = C.groups;
                if (h) {
                    var ie = pq([K], G, Y, u);
                    z !== void 0 && Wf(ie, z);
                    var oe = Cs(QY(o, void 0, ie))
                } else oe = lq(K, u, Y, G, z, o);
                Y >= B && (M += $_(u, B, Y) + oe, B = Y + K.length)
            }
            return M + $_(u, B)
        }]
    }, !vq || !mq || A_);
    var yq = Lr,
        _q = or,
        Eq = function(t, e) {
            return _q(yq[t].prototype[e])
        },
        bq = Eq,
        Tq = bq("String", "replaceAll"),
        Sq = Tq,
        Oq = Sq,
        wq = Oq,
        Cq = wq,
        Iq = Cq,
        $q = Iq;
    (function(t) {
        t.exports = $q
    })(jK);
    vt({
        props: {
            autosize: Boolean,
            modelValue: String,
            sanitizers: Array
        },
        emits: {
            keypress: t => !0,
            "update:modelValue": t => !0
        },
        watch: {
            modelValue(t, e) {
                if (t !== e) {
                    const r = this.$refs.textarea;
                    r.value = t
                }
            }
        },
        mounted() {
            this.autosize && BK(this.$refs.textarea)
        },
        methods: {
            focus() {
                this.$refs.textarea.focus()
            },
            async onInput(t) {
                const e = t.target;
                if ((e == null ? void 0 : e.value) == null) return;
                const r = e.maxLength === -1 ? Number.MAX_SAFE_INTEGER : e.maxLength;
                if (e.value = e.value.replaceAll(`
`, ""), this.sanitizers && (e.value = ES.withTypes(e.value, [...this.sanitizers])), e.value.length > r) {
                    e.value = e.value.substring(0, r);
                    return
                }
                this.$emit("update:modelValue", e.value), await this.$nextTick(), e.value !== this.modelValue && (e.value = this.modelValue)
            },
            onKeypressEnter(t) {
                this.$emit("keypress", t)
            }
        }
    });
    vt({
        props: {
            slides: Array
        },
        emits: ["tutorialComplete"],
        data() {
            return {
                currentIndex: 0
            }
        },
        computed: {
            isFinalSlide() {
                return this.currentIndex === this.slides.length - 1
            },
            slideClasses() {
                return this.slides.map((t, e) => e < this.currentIndex ? ["left"] : e > this.currentIndex ? ["right"] : ["current"])
            }
        },
        beforeMount() {
            const t = is();
            if (!(t != null && t.appContext.directives.pointerbox)) throw new Error("Tutorial.vue relies on PointerBoxPlugin. Please install it inside your main.ts file.")
        },
        methods: {
            onPointerBoxSwipe(t) {
                if (t.detail.direction === "right") {
                    if (this.currentIndex === 0) return;
                    this.currentIndex -= 1
                }
                if (t.detail.direction === "left") {
                    if (this.isFinalSlide) {
                        this.onDoneClick();
                        return
                    }
                    this.currentIndex += 1
                }
            },
            onNextClick() {
                if (this.isFinalSlide) {
                    this.onDoneClick();
                    return
                }
                this.currentIndex += 1
            },
            onDotClick(t) {
                this.currentIndex = t
            },
            onDoneClick() {
                this.$emit("tutorialComplete")
            }
        }
    });
    var ji = {},
        kl = {},
        uO = {},
        xl = {},
        yp = {};
    (function(t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Token = void 0;
        var e = function() {
            function r(n, s, o, c) {
                this.type = n, this.content = s, this.attributes = o, this.text = c
            }
            return r.prototype.toString = function() {
                return this.content + " (" + this.type + ")"
            }, r.prototype.equals = function(n) {
                return this.type === n.type && this.content === n.content
            }, r.prototype.convertToTextToken = function() {
                var n;
                this.type === r.Type.startTag ? (this.content = (n = this.text) !== null && n !== void 0 ? n : "", this.type = r.Type.text) : this.type === r.Type.endTag && (this.content = "[/" + this.content + "]", this.type = r.Type.text)
            }, r
        }();
        t.Token = e,
            function(r) {
                (function(n) {
                    n[n.text = 0] = "text", n[n.startTag = 1] = "startTag", n[n.endTag = 2] = "endTag"
                })(r.Type || (r.Type = {}))
            }(e = t.Token || (t.Token = {})), t.Token = e
    })(yp);
    Object.defineProperty(xl, "__esModule", {
        value: !0
    });
    xl.Tokenizer = void 0;
    var Zn = yp,
        Aq = function() {
            function t(e) {
                this.tags = e
            }
            return t.prototype.tokenizeString = function(e) {
                var r = this,
                    n = this.getTokens(e),
                    s = [],
                    o = !1,
                    c = "",
                    u = "";
                return n.forEach(function(f) {
                    var h = r.tags[f.content],
                        m = !0;
                    !h && !o ? f.convertToTextToken() : o ? f.type === Zn.Token.Type.endTag && f.content === c ? (o = !1, s.push(t.createTextToken(u))) : (f.convertToTextToken(), u += f.content, m = !1) : h.noNesting && f.type === Zn.Token.Type.startTag && (o = !0, c = f.content, u = ""), m && s.push(f)
                }), s
            }, t.prototype.getTokens = function(e) {
                for (var r = '\\[(/\\w*)\\]|\\[(\\w*)+(=(["])' + t.valueChars + "*\\4)?( (" + t.nameChars + '+)?=(["])(' + t.valueChars + "+)\\7)*\\]", n = new RegExp(r, "g"), s = [], o = n.exec(e), c = 0; o;) {
                    var u = o.index - c;
                    u > 0 && s.push(t.createTextToken(e.substr(c, u))), s.push(t.createTagToken(o)), c = n.lastIndex, o = n.exec(e)
                }
                var f = e.length - c;
                return f > 0 && s.push(t.createTextToken(e.substr(c, f))), s
            }, t.createTextToken = function(e) {
                return new Zn.Token(Zn.Token.Type.text, e)
            }, t.createTagToken = function(e) {
                if (!e[1]) {
                    for (var r = e[2], n = {}, s = new RegExp("(" + t.nameChars + '+)?=(["])(' + t.valueChars + "+)\\2", "g"), o = e[0].substr(1 + r.length, e[0].length - 2 - r.length), c = s.exec(o); c;) c[1] ? n[c[1]] = c[3] : n[r] = c[3], c = s.exec(o);
                    return new Zn.Token(Zn.Token.Type.startTag, r, n, e[0])
                }
                return new Zn.Token(Zn.Token.Type.endTag, e[1].substr(1, e[1].length - 1))
            }, t.nameChars = "[a-zA-Z0-9\\.\\-_:;/]", t.valueChars = "[a-zA-Z0-9\\.\\-_:;#/\\s]", t
        }();
    xl.Tokenizer = Aq;
    (function(t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.ParseTree = void 0;
        var e = xl,
            r = yp,
            n = function() {
                function s(o) {
                    this.subTrees = [], this.type = o.type, this.content = o.content, o.attributes && (this.attributes = o.attributes), o.subTrees && (this.subTrees = o.subTrees)
                }
                return Object.defineProperty(s.prototype, "isValid", {
                    get: function() {
                        return this.subTrees.length ? this.subTrees.every(function(o) {
                            return o.isValid
                        }) : !0
                    },
                    enumerable: !1,
                    configurable: !0
                }), s.prototype.toString = function() {
                    return this.type + " - " + this.content
                }, s.buildTree = function(o, c) {
                    var u = new e.Tokenizer(c),
                        f = u.tokenizeString(o),
                        h = new s({
                            type: s.Type.root,
                            content: o
                        });
                    return this.buildTreeFromTokens(h, f.reverse())
                }, s.buildTreeFromTokens = function(o, c, u) {
                    if (u === void 0 && (u = ""), !o) return null;
                    if (!c.length) return o;
                    var f = c.pop();
                    if (!f) return null;
                    if (f.type === r.Token.Type.text) {
                        var h = new s({
                            type: s.Type.text,
                            content: f.content
                        });
                        o.subTrees.push(h)
                    }
                    if (f.type === r.Token.Type.startTag) {
                        var m = f.content,
                            h = new s({
                                type: s.Type.tag,
                                content: m,
                                attributes: f.attributes
                            }),
                            _ = s.buildTreeFromTokens(h, c, m);
                        if (!_) return null;
                        o.subTrees.push(_)
                    }
                    if (f.type === r.Token.Type.endTag) {
                        var m = f.content;
                        return m === u ? o : null
                    }
                    return !c.length && u !== "" ? null : this.buildTreeFromTokens(o, c, u)
                }, s
            }();
        t.ParseTree = n,
            function(s) {
                (function(o) {
                    o[o.root = 0] = "root", o[o.text = 1] = "text", o[o.tag = 2] = "tag"
                })(s.Type || (s.Type = {}))
            }(n = t.ParseTree || (t.ParseTree = {})), t.ParseTree = n
    })(uO);
    var ho = {};
    Object.defineProperty(ho, "__esModule", {
        value: !0
    });
    ho.Tag = void 0;
    var Rq = function() {
        function t(e) {
            var r;
            this.tagName = e.tagName, this.insertLineBreaks = e.insertLineBreaks, this.suppressLineBreaks = e.suppressLineBreaks, this.noNesting = e.noNesting, this.markupGenerator = (r = e.markupGenerator) !== null && r !== void 0 ? r : function(n, s) {
                return "<" + n.tagName + ">" + s + "</" + n.tagName + ">"
            }
        }
        return t.create = function(e, r, n) {
            var s, o, c;
            return n === void 0 && (n = {}), new t({
                tagName: e,
                insertLineBreaks: (s = n.insertLineBreaks) !== null && s !== void 0 ? s : !0,
                suppressLineBreaks: (o = n.suppressLineBreaks) !== null && o !== void 0 ? o : !1,
                noNesting: (c = n.noNesting) !== null && c !== void 0 ? c : !1,
                markupGenerator: r
            })
        }, t
    }();
    ho.Tag = Rq;
    Object.defineProperty(kl, "__esModule", {
        value: !0
    });
    kl.BBCodeParser = void 0;
    var R_ = uO,
        N_ = ho,
        Nq = function() {
            function t(e, r) {
                this.options = r, this.escapeHTML = !1, this.tags = e, r && (this.escapeHTML = r.escapeHTML)
            }
            return Object.defineProperty(t, "defaultTags", {
                get: function() {
                    return {
                        b: N_.Tag.create("b"),
                        i: N_.Tag.create("i")
                    }
                },
                enumerable: !1,
                configurable: !0
            }), t.prototype.parse = function(e, r, n, s) {
                r === void 0 && (r = !1), n === void 0 && (n = !0), s === void 0 && (s = !0);
                var o = R_.ParseTree.buildTree(e, this.tags);
                return !o || !o.isValid ? e : this.treeToHtml(o.subTrees, n, s, r)
            }, t.prototype.addTag = function(e, r) {
                this.tags[e] = r
            }, t.prototype.treeToHtml = function(e, r, n, s) {
                var o = this;
                s === void 0 && (s = !1);
                var c = "",
                    u = !1;
                return e.forEach(function(f) {
                    var h;
                    if (f.type === R_.ParseTree.Type.text) {
                        var m = f.content;
                        n && (m = o.escapeHTML ? t.escapeHTML(m) : m), r && !u && (m = m.replace(/(\r\n|\n|\r)/gm, "<br>"), u = !1), c += m
                    } else {
                        var _ = o.tags[f.content],
                            b = o.treeToHtml(f.subTrees, _.insertLineBreaks, n, s);
                        s ? c += b : c += _.markupGenerator(_, b, (h = f.attributes) !== null && h !== void 0 ? h : {}), u = _.suppressLineBreaks
                    }
                }), c
            }, t.escapeHTML = function(e) {
                return e.replace(/[&<>]/g, function(r) {
                    return t.tagsToReplace[r] || r
                })
            }, t.tagsToReplace = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;"
            }, t
        }();
    kl.BBCodeParser = Nq;
    (function(t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Tag = t.BBCodeParser = void 0;
        var e = kl;
        Object.defineProperty(t, "BBCodeParser", {
            enumerable: !0,
            get: function() {
                return e.BBCodeParser
            }
        });
        var r = ho;
        Object.defineProperty(t, "Tag", {
            enumerable: !0,
            get: function() {
                return r.Tag
            }
        })
    })(ji);
    const Pq = {
        install: t => {
            const e = {
                section: ji.Tag.create("section", (o, c, {
                    section: u
                }) => `<div ${u?`class="section ${u}"`:'class="section"'}>${c}</div>`)
            };
            ["b", "bold", "B"].forEach(o => {
                e[o] = ji.Tag.create(o, (c, u) => `<strong>${u}</strong>`)
            }), ["i", "italic", "I"].forEach(o => {
                e[o] = ji.Tag.create(o, (c, u) => `<em>${u}</em>`)
            });
            const s = new ji.BBCodeParser(e);
            t.directive("bb", {
                mounted(o, c) {
                    const u = document.createElement("div");
                    u.textContent = c.value, o.innerHTML = s.parse(u.innerHTML)
                },
                updated(o, c) {
                    const u = document.createElement("div");
                    u.textContent = c.value, o.innerHTML = s.parse(u.innerHTML)
                }
            }), t.mixin({
                beforeCreate() {
                    !this.$options.bb || Object.keys(this.$options.bb).forEach(o => {
                        const c = this.$options.bb[o];
                        if (c instanceof Function) {
                            s.addTag(o, ji.Tag.create(o, c));
                            return
                        }
                        s.addTag(o, ji.Tag.create(o, c.generator, c.options))
                    })
                }
            }), t.config.globalProperties.$bb = o => (typeof o != "string" && console.warn(`[BBCodePlugin] Received unexpected ${typeof o} with value ${o};converting to string before parsing.`), s.parse(String(o)))
        }
    };
    var fO = {
        exports: {}
    };
    (function(t) {
        (function(e, r) {
            var n = e.KonamiCode,
                s = e.KonamiCode = r;
            s.noConflict = function() {
                return e.KonamiCode = n, s
            }, t.exports && (t.exports = r)
        })(Pt, function e(r) {
            var n = this,
                s = {},
                o = e;
            o.getNumberOfInstance = function() {
                return o._numberOfInstance
            }, n.enable = function() {
                return s.listenCodeCharSequence(), s.listenCodeGestureSequence(), s.debug && s.debug("Listener enabled for all."), n
            }, n.enableKeyboardKeys = function() {
                return s.listenCodeCharSequence(), s.debug && s.debug("Listener enabled for Keyboard Keys."), n
            }, n.enableTouchGesture = function() {
                return s.listenCodeGestureSequence(), s.debug && s.debug("Listener enabled for Touch Gesture."), n
            }, n.disable = function() {
                return s.stopCodeCharSequence(), s.stopCodeGestureSequence(), s.debug && s.debug("Listener disabled for all."), n
            }, n.disableKeyboardKeys = function() {
                return s.stopCodeCharSequence(), s.debug && s.debug("Listener disabled for Keyboard Keys."), n
            }, n.disableTouchGesture = function() {
                return s.stopCodeGestureSequence(), s.debug && s.debug("Listener disabled for Touch Gesture."), n
            }, n.setListener = function(c) {
                return s.stopCodeCharSequence(), s.stopCodeGestureSequence(), s.listener = c || document, s.listenCodeCharSequence(), s.listenCodeGestureSequence(), s.debug && s.debug("Listener changed.", c), n
            }, n.setCallback = function(c) {
                return s.afterCodeSequenceCallback = typeof c == "function" && c || s.defaultCallback, s.debug && s.debug("Callback changed.", c), n
            }, n.setOptions = function(c) {
                return s.initOptions(c), n
            }, s.keptLastCodeChar = function() {
                s.input.length > s.konamiCodeChar.length && (s.input = s.input.substr(s.input.length - s.konamiCodeChar.length))
            }, s.defaultCallback = function() {
                s.debug && s.debug("Konami Code Sequence Entered. There is no action defined.")
            }, s.checkIfCodeCharIsValid = function() {
                s.input === s.konamiCodeChar && s.afterCodeSequenceCallback(n)
            }, s.codeSequenceEventKeyDown = function(c) {
                s.input += c.keyCode, s.keptLastCodeChar(), s.checkIfCodeCharIsValid()
            }, s.codeSequenceEventTouchMove = function(c) {
                var u;
                c.touches.length === 1 && s.capture === !0 && (u = c.touches[0], s.stopX = u.pageX, s.stopY = u.pageY, s.tap = !1, s.capture = !1, s.checkIfCodeGestureIsValid())
            }, s.codeSequenceEventTouchEnd = function() {
                s.tap === !0 && s.checkIfCodeGestureIsValid()
            }, s.codeSequenceEventTouchStart = function(c) {
                s.startX = c.changedTouches[0].pageX, s.startY = c.changedTouches[0].pageY, s.tap = !0, s.capture = !0
            }, s.stopCodeCharSequence = function() {
                s.listener.removeEventListener("keydown", s.codeSequenceEventKeyDown)
            }, s.stopCodeGestureSequence = function() {
                s.listener.removeEventListener("touchstart", s.codeSequenceEventTouchStart), s.listener.removeEventListener("touchmove", s.codeSequenceEventTouchMove), s.listener.removeEventListener("touchend", s.codeSequenceEventTouchEnd)
            }, s.listenCodeCharSequence = function() {
                s.stopCodeCharSequence(), s.listener.addEventListener("keydown", s.codeSequenceEventKeyDown)
            }, s.listenCodeGestureSequence = function() {
                s.originalCodeGesture = s.konamiCodeGesture, s.stopCodeGestureSequence(), s.listener.addEventListener("touchstart", s.codeSequenceEventTouchStart), s.listener.addEventListener("touchmove", s.codeSequenceEventTouchMove), s.listener.addEventListener("touchend", s.codeSequenceEventTouchEnd, !1)
            }, s.checkIfCodeGestureIsValid = function() {
                var c = Math.abs(s.startX - s.stopX),
                    u = Math.abs(s.startY - s.stopY),
                    f = s.startX - s.stopX < 0 ? "rt" : "lt",
                    h = s.startY - s.stopY < 0 ? "dn" : "up",
                    m = c > u ? f : h;
                m = s.tap === !0 ? "tp" : m, m === s.konamiCodeGesture.substr(0, 2) ? s.konamiCodeGesture = s.konamiCodeGesture.substr(2, s.konamiCodeGesture.length - 2) : s.konamiCodeGesture = s.originalCodeGesture, s.konamiCodeGesture.length === 0 && (s.konamiCodeGesture = s.originalCodeGesture, s.afterCodeSequenceCallback(n))
            }, s.checkDebugMode = function(c) {
                c && c.debug === !0 ? (s.debug = function(u, f) {
                    f !== void 0 ? console.log(u, f) : console.log(u)
                }, s.debug && s.debug("Debug Mode On.")) : s.debug = !1
            }, s.initOptions = function(c) {
                s.checkDebugMode(c), s.listener = c && c.listener || document, s.afterCodeSequenceCallback = typeof c == "function" && c || c && typeof c.callback == "function" && c.callback || s.defaultCallback
            }, s.init = function() {
                s.input = "", s.konamiCodeChar = "38384040373937396665", s.konamiCodeGesture = "upupdndnltrtltrttptp", s.startX = 0, s.startY = 0, s.stopX = 0, s.stopY = 0, s.tap = !1, s.capture = !1, o._numberOfInstance = o._numberOfInstance ? o._numberOfInstance + 1 : 1, s.initOptions(r), s.listenCodeCharSequence(), s.listenCodeGestureSequence()
            }, s.init()
        })
    })(fO);
    const Lq = fO.exports,
        kq = vt({
            data() {
                return {
                    showPowerNav: !1
                }
            },
            computed: {
                debugNav() {
                    return this.$refs.debugNav
                },
                replayer() {
                    return this.$debugReplayer
                }
            },
            mounted() {
                window.addEventListener("keydown", t => {
                    var e, r, n, s;
                    return t.key === "," ? (e = this.replayer) == null ? void 0 : e.toPreviousEntity() : t.key === "." ? (r = this.replayer) == null ? void 0 : r.toNextEntity() : t.key === "q" ? (n = this.replayer) == null ? void 0 : n.toPreviousMarker() : t.key === "w" ? (s = this.replayer) == null ? void 0 : s.toNextMarker() : null
                })
            },
            methods: {
                onPreviousClick() {
                    var t;
                    (t = this.replayer) == null || t.toPreviousMarker()
                },
                onNextClick() {
                    var t;
                    (t = this.replayer) == null || t.toNextMarker()
                },
                onOpenPowerNavClick() {
                    this.showPowerNav = !0, this.debugNav.focus()
                },
                onClosePowerNavClick() {
                    this.showPowerNav = !1, this.debugNav.focus()
                },
                onMarkerClick(t) {
                    var e;
                    (e = this.replayer) == null || e.toMarkerIndex(t)
                },
                onKillClick() {
                    var t;
                    (t = this.replayer) == null || t.kill()
                },
                onDisconnectClick() {
                    var t;
                    (t = this.replayer) == null || t.disconnect()
                }
            }
        }),
        Un = t => (vh("data-v-220ec4c0"), t = t(), yh(), t),
        xq = {
            key: 0,
            ref: "debugNav",
            class: "debug-nav",
            tabindex: "0"
        },
        Dq = {
            key: 0,
            class: "power-nav"
        },
        Mq = Un(() => ae("p", null, "MARKERS", -1)),
        Fq = ["onClick"],
        Uq = di("KILL"),
        Bq = Un(() => ae("br", null, null, -1)),
        jq = di("ROOM"),
        Gq = [Uq, Bq, jq],
        Wq = Un(() => ae("p", {
            class: "title blurred"
        }, "DEBUG", -1)),
        Kq = {
            key: 1,
            class: "title focused"
        },
        Hq = {
            key: 2,
            class: "title focused"
        },
        Vq = Un(() => ae("svg", {
            viewBox: "0 0 20 10"
        }, [ae("polygon", {
            points: "0,10 10,0 20,10"
        })], -1)),
        Yq = Un(() => ae("div", {
            class: "visually-hidden"
        }, "Open debug menu", -1)),
        qq = [Vq, Yq],
        zq = Un(() => ae("svg", {
            viewBox: "0 0 60 50"
        }, [ae("polygon", {
            class: "outline",
            points: "40,35.6 20,25 40,14.4"
        }), ae("polygon", {
            points: "40,35.6 20,25 40,14.4"
        })], -1)),
        Xq = Un(() => ae("div", {
            class: "visually-hidden"
        }, "Previous", -1)),
        Jq = [zq, Xq],
        Zq = Un(() => ae("svg", {
            viewBox: "0 0 60 50"
        }, [ae("polygon", {
            class: "outline",
            points: "40,35.6 20,25 40,14.4"
        }), ae("polygon", {
            points: "40,35.6 20,25 40,14.4"
        })], -1)),
        Qq = Un(() => ae("div", {
            class: "visually-hidden"
        }, "Next", -1)),
        e6 = [Zq, Qq];

    function t6(t, e, r, n, s, o) {
        return t.replayer ? (se(), le("div", xq, [t.showPowerNav ? (se(), le("div", Dq, [ae("button", {
            class: "close",
            onClick: e[0] || (e[0] = (...c) => t.onClosePowerNavClick && t.onClosePowerNavClick(...c))
        }, "X"), Mq, ae("ul", null, [(se(!0), le(It, null, io(t.replayer.markerMap, (c, u) => (se(), le("li", {
            key: u,
            class: qe({
                active: u === t.replayer.currentMarkerItemIndex
            }),
            onClick: f => t.onMarkerClick(u)
        }, Tt(c[1].marker), 11, Fq))), 128))]), ae("button", {
            class: "option",
            onClick: e[1] || (e[1] = (...c) => t.onKillClick && t.onKillClick(...c))
        }, Gq), ae("button", {
            class: "option",
            onClick: e[2] || (e[2] = (...c) => t.onDisconnectClick && t.onDisconnectClick(...c))
        }, "DISCONNECT")])) : We("", !0), Wq, t.replayer.markerMap.length ? (se(), le("p", Hq, Tt(t.replayer.currentMarkerItemIndex) + " : " + Tt(t.replayer.currentMarkerItem[1].marker) + " (" + Tt(t.replayer.currentEntityItemIndex) + ") ", 1)) : (se(), le("p", Kq, "Item #" + Tt(t.replayer.currentEntityItemIndex), 1)), t.showPowerNav ? We("", !0) : (se(), le("button", {
            key: 3,
            class: "open-power-nav",
            onClick: e[3] || (e[3] = (...c) => t.onOpenPowerNavClick && t.onOpenPowerNavClick(...c))
        }, qq)), ae("button", {
            class: "direction previous",
            onClick: e[4] || (e[4] = (...c) => t.onPreviousClick && t.onPreviousClick(...c))
        }, Jq), ae("button", {
            class: "direction next",
            onClick: e[5] || (e[5] = (...c) => t.onNextClick && t.onNextClick(...c))
        }, e6)], 512)) : We("", !0)
    }
    const r6 = $t(kq, [
        ["render", t6],
        ["__scopeId", "data-v-220ec4c0"]
    ]);

    function n6(t, e) {
        for (var r = -1, n = t == null ? 0 : t.length; ++r < n && e(t[r], r, t) !== !1;);
        return t
    }
    var i6 = n6,
        s6 = Qb,
        a6 = s6(Object.keys, Object),
        o6 = a6,
        c6 = xh,
        l6 = o6,
        u6 = Object.prototype,
        f6 = u6.hasOwnProperty;

    function d6(t) {
        if (!c6(t)) return l6(t);
        var e = [];
        for (var r in Object(t)) f6.call(t, r) && r != "constructor" && e.push(r);
        return e
    }
    var h6 = d6,
        p6 = oT,
        g6 = h6,
        m6 = Tl;

    function v6(t) {
        return m6(t) ? p6(t) : g6(t)
    }
    var Dl = v6,
        y6 = so,
        _6 = Dl;

    function E6(t, e) {
        return t && y6(e, _6(e), t)
    }
    var b6 = E6,
        T6 = so,
        S6 = ao;

    function O6(t, e) {
        return t && T6(e, S6(e), t)
    }
    var w6 = O6;

    function C6(t, e) {
        for (var r = -1, n = t == null ? 0 : t.length, s = 0, o = []; ++r < n;) {
            var c = t[r];
            e(c, r, t) && (o[s++] = c)
        }
        return o
    }
    var I6 = C6;

    function $6() {
        return []
    }
    var dO = $6,
        A6 = I6,
        R6 = dO,
        N6 = Object.prototype,
        P6 = N6.propertyIsEnumerable,
        P_ = Object.getOwnPropertySymbols,
        L6 = P_ ? function(t) {
            return t == null ? [] : (t = Object(t), A6(P_(t), function(e) {
                return P6.call(t, e)
            }))
        } : R6,
        _p = L6,
        k6 = so,
        x6 = _p;

    function D6(t, e) {
        return k6(t, x6(t), e)
    }
    var M6 = D6;

    function F6(t, e) {
        for (var r = -1, n = e.length, s = t.length; ++r < n;) t[s + r] = e[r];
        return t
    }
    var hO = F6,
        U6 = hO,
        B6 = kh,
        j6 = _p,
        G6 = dO,
        W6 = Object.getOwnPropertySymbols,
        K6 = W6 ? function(t) {
            for (var e = []; t;) U6(e, j6(t)), t = B6(t);
            return e
        } : G6,
        pO = K6,
        H6 = so,
        V6 = pO;

    function Y6(t, e) {
        return H6(t, V6(t), e)
    }
    var q6 = Y6,
        z6 = hO,
        X6 = mi;

    function J6(t, e, r) {
        var n = e(t);
        return X6(t) ? n : z6(n, r(t))
    }
    var gO = J6,
        Z6 = gO,
        Q6 = _p,
        e5 = Dl;

    function t5(t) {
        return Z6(t, e5, Q6)
    }
    var r5 = t5,
        n5 = gO,
        i5 = pO,
        s5 = ao;

    function a5(t) {
        return n5(t, s5, i5)
    }
    var o5 = a5,
        c5 = as,
        l5 = ln,
        u5 = c5(l5, "DataView"),
        f5 = u5,
        d5 = as,
        h5 = ln,
        p5 = d5(h5, "Promise"),
        g5 = p5,
        m5 = as,
        v5 = ln,
        y5 = m5(v5, "Set"),
        _5 = y5,
        E5 = as,
        b5 = ln,
        T5 = E5(b5, "WeakMap"),
        S5 = T5,
        Md = f5,
        Fd = Nh,
        Ud = g5,
        Bd = _5,
        jd = S5,
        mO = ra,
        ca = Vb,
        L_ = "[object Map]",
        O5 = "[object Object]",
        k_ = "[object Promise]",
        x_ = "[object Set]",
        D_ = "[object WeakMap]",
        M_ = "[object DataView]",
        w5 = ca(Md),
        C5 = ca(Fd),
        I5 = ca(Ud),
        $5 = ca(Bd),
        A5 = ca(jd),
        Gi = mO;
    (Md && Gi(new Md(new ArrayBuffer(1))) != M_ || Fd && Gi(new Fd) != L_ || Ud && Gi(Ud.resolve()) != k_ || Bd && Gi(new Bd) != x_ || jd && Gi(new jd) != D_) && (Gi = function(t) {
        var e = mO(t),
            r = e == O5 ? t.constructor : void 0,
            n = r ? ca(r) : "";
        if (n) switch (n) {
            case w5:
                return M_;
            case C5:
                return L_;
            case I5:
                return k_;
            case $5:
                return x_;
            case A5:
                return D_
        }
        return e
    });
    var Ep = Gi,
        R5 = Object.prototype,
        N5 = R5.hasOwnProperty;

    function P5(t) {
        var e = t.length,
            r = new t.constructor(e);
        return e && typeof t[0] == "string" && N5.call(t, "index") && (r.index = t.index, r.input = t.input), r
    }
    var L5 = P5,
        k5 = Lh;

    function x5(t, e) {
        var r = e ? k5(t.buffer) : t.buffer;
        return new t.constructor(r, t.byteOffset, t.byteLength)
    }
    var D5 = x5,
        M5 = /\w*$/;

    function F5(t) {
        var e = new t.constructor(t.source, M5.exec(t));
        return e.lastIndex = t.lastIndex, e
    }
    var U5 = F5,
        F_ = _l,
        U_ = F_ ? F_.prototype : void 0,
        B_ = U_ ? U_.valueOf : void 0;

    function B5(t) {
        return B_ ? Object(B_.call(t)) : {}
    }
    var j5 = B5,
        G5 = Lh,
        W5 = D5,
        K5 = U5,
        H5 = j5,
        V5 = Jb,
        Y5 = "[object Boolean]",
        q5 = "[object Date]",
        z5 = "[object Map]",
        X5 = "[object Number]",
        J5 = "[object RegExp]",
        Z5 = "[object Set]",
        Q5 = "[object String]",
        ez = "[object Symbol]",
        tz = "[object ArrayBuffer]",
        rz = "[object DataView]",
        nz = "[object Float32Array]",
        iz = "[object Float64Array]",
        sz = "[object Int8Array]",
        az = "[object Int16Array]",
        oz = "[object Int32Array]",
        cz = "[object Uint8Array]",
        lz = "[object Uint8ClampedArray]",
        uz = "[object Uint16Array]",
        fz = "[object Uint32Array]";

    function dz(t, e, r) {
        var n = t.constructor;
        switch (e) {
            case tz:
                return G5(t);
            case Y5:
            case q5:
                return new n(+t);
            case rz:
                return W5(t, r);
            case nz:
            case iz:
            case sz:
            case az:
            case oz:
            case cz:
            case lz:
            case uz:
            case fz:
                return V5(t, r);
            case z5:
                return new n;
            case X5:
            case Q5:
                return new n(t);
            case J5:
                return K5(t);
            case Z5:
                return new n;
            case ez:
                return H5(t)
        }
    }
    var hz = dz,
        pz = Ep,
        gz = gi,
        mz = "[object Map]";

    function vz(t) {
        return gz(t) && pz(t) == mz
    }
    var yz = vz,
        _z = yz,
        Ez = Dh,
        j_ = Ja.exports,
        G_ = j_ && j_.isMap,
        bz = G_ ? Ez(G_) : _z,
        Tz = bz,
        Sz = Ep,
        Oz = gi,
        wz = "[object Set]";

    function Cz(t) {
        return Oz(t) && Sz(t) == wz
    }
    var Iz = Cz,
        $z = Iz,
        Az = Dh,
        W_ = Ja.exports,
        K_ = W_ && W_.isSet,
        Rz = K_ ? Az(K_) : $z,
        Nz = Rz,
        Pz = qb,
        Lz = i6,
        kz = Mh,
        xz = b6,
        Dz = w6,
        Mz = Gc.exports,
        Fz = Zb,
        Uz = M6,
        Bz = q6,
        jz = r5,
        Gz = o5,
        Wz = Ep,
        Kz = L5,
        Hz = hz,
        Vz = eT,
        Yz = mi,
        qz = Xa.exports,
        zz = Tz,
        Xz = un,
        Jz = Nz,
        Zz = Dl,
        Qz = ao,
        eX = 1,
        tX = 2,
        rX = 4,
        vO = "[object Arguments]",
        nX = "[object Array]",
        iX = "[object Boolean]",
        sX = "[object Date]",
        aX = "[object Error]",
        yO = "[object Function]",
        oX = "[object GeneratorFunction]",
        cX = "[object Map]",
        lX = "[object Number]",
        _O = "[object Object]",
        uX = "[object RegExp]",
        fX = "[object Set]",
        dX = "[object String]",
        hX = "[object Symbol]",
        pX = "[object WeakMap]",
        gX = "[object ArrayBuffer]",
        mX = "[object DataView]",
        vX = "[object Float32Array]",
        yX = "[object Float64Array]",
        _X = "[object Int8Array]",
        EX = "[object Int16Array]",
        bX = "[object Int32Array]",
        TX = "[object Uint8Array]",
        SX = "[object Uint8ClampedArray]",
        OX = "[object Uint16Array]",
        wX = "[object Uint32Array]",
        pt = {};
    pt[vO] = pt[nX] = pt[gX] = pt[mX] = pt[iX] = pt[sX] = pt[vX] = pt[yX] = pt[_X] = pt[EX] = pt[bX] = pt[cX] = pt[lX] = pt[_O] = pt[uX] = pt[fX] = pt[dX] = pt[hX] = pt[TX] = pt[SX] = pt[OX] = pt[wX] = !0;
    pt[aX] = pt[yO] = pt[pX] = !1;

    function Lc(t, e, r, n, s, o) {
        var c, u = e & eX,
            f = e & tX,
            h = e & rX;
        if (r && (c = s ? r(t, n, s, o) : r(t)), c !== void 0) return c;
        if (!Xz(t)) return t;
        var m = Yz(t);
        if (m) {
            if (c = Kz(t), !u) return Fz(t, c)
        } else {
            var _ = Wz(t),
                b = _ == yO || _ == oX;
            if (qz(t)) return Mz(t, u);
            if (_ == _O || _ == vO || b && !s) {
                if (c = f || b ? {} : Vz(t), !u) return f ? Bz(t, Dz(c, t)) : Uz(t, xz(c, t))
            } else {
                if (!pt[_]) return s ? t : {};
                c = Hz(t, _, u)
            }
        }
        o || (o = new Pz);
        var C = o.get(t);
        if (C) return C;
        o.set(t, c), Jz(t) ? t.forEach(function(B) {
            c.add(Lc(B, e, r, B, t, o))
        }) : zz(t) && t.forEach(function(B, I) {
            c.set(I, Lc(B, e, r, I, t, o))
        });
        var L = h ? f ? Gz : jz : f ? Qz : Zz,
            M = m ? void 0 : L(t);
        return Lz(M || t, function(B, I) {
            M && (I = B, B = t[I]), kz(c, I, Lc(B, e, r, I, t, o))
        }), c
    }
    var CX = Lc,
        IX = CX,
        $X = 1,
        AX = 4;

    function RX(t) {
        return IX(t, $X | AX)
    }
    var EO = RX;
    const NX = vt({
            emits: {
                resolve: () => !0
            },
            data() {
                return {
                    screen: "options",
                    vibe: null,
                    message: "",
                    content: null,
                    isContent: !0,
                    values: {}
                }
            },
            mounted() {
                var e, r, n;
                const t = (r = (e = this.$debugRecorder) == null ? void 0 : e.room) == null ? void 0 : r.appTag;
                !t || (this.values = EO(this.$ecastValues), this.content = (n = Uy.getPromptGuess(this.values, t)) != null ? n : null)
            },
            methods: {
                onFeedbackClick() {
                    this.screen = "feedback"
                },
                onDebugClick() {
                    this.screen = "debug"
                },
                onVibeClick(t) {
                    this.vibe = t
                },
                async onSubmitClick() {
                    var t, e;
                    !this.$debugRecorder || (this.screen === "debug" && (await this.$debugRecorder.send(this.message), this.$emit("resolve")), this.screen === "feedback" && (await Uy.send({
                        room: this.$debugRecorder.room,
                        name: this.$ecast.name,
                        role: this.$ecast.role,
                        content: this.isContent ? this.content : null,
                        message: (t = this.message) != null ? t : "",
                        vibe: (e = this.vibe) != null ? e : "none",
                        values: this.values
                    }), this.$emit("resolve")))
                }
            }
        }),
        bO = "main/internal/prototype/assets/ad9172fc.png",
        TO = "main/internal/prototype/assets/dc131b16.png",
        PX = "main/internal/prototype/assets/38715b18.png",
        LX = "main/internal/prototype/assets/b0d7c822.png",
        kX = "main/internal/prototype/assets/06150f24.png",
        zr = t => (vh("data-v-2c53389f"), t = t(), yh(), t),
        xX = {
            class: "jbg"
        },
        DX = {
            key: 0,
            class: "options"
        },
        MX = zr(() => ae("img", {
            src: bO,
            alt: "Leave Feedback"
        }, null, -1)),
        FX = zr(() => ae("span", null, [di("LEAVE"), ae("br"), di("FEEDBACK")], -1)),
        UX = [MX, FX],
        BX = zr(() => ae("img", {
            src: TO,
            alt: "Send Debug"
        }, null, -1)),
        jX = zr(() => ae("span", null, [di("SEND A"), ae("br"), di("DEBUG")], -1)),
        GX = [BX, jX],
        WX = {
            key: 1,
            class: "feedback"
        },
        KX = zr(() => ae("img", {
            class: "image",
            src: bO,
            alt: "Feedback"
        }, null, -1)),
        HX = zr(() => ae("h3", {
            class: "text"
        }, "Send Feedback", -1)),
        VX = zr(() => ae("p", {
            class: "cta"
        }, "CHOOSE A VIBE", -1)),
        YX = {
            class: "buttons"
        },
        qX = zr(() => ae("img", {
            src: PX,
            alt: "good"
        }, null, -1)),
        zX = [qX],
        XX = zr(() => ae("img", {
            src: LX,
            alt: "good"
        }, null, -1)),
        JX = [XX],
        ZX = zr(() => ae("img", {
            src: kX,
            alt: "bad"
        }, null, -1)),
        QX = [ZX],
        e9 = {
            class: "actions"
        },
        t9 = {
            key: 0,
            class: "content-guess"
        },
        r9 = di("Feedback is about: "),
        n9 = {
            key: 2,
            class: "debug"
        },
        i9 = zr(() => ae("img", {
            class: "image",
            src: TO,
            alt: "Debug"
        }, null, -1)),
        s9 = zr(() => ae("h3", {
            class: "text"
        }, "What is Happening?", -1)),
        a9 = {
            class: "actions"
        };

    function o9(t, e, r, n, s, o) {
        return se(), le("div", xX, [t.screen === "options" ? (se(), le("div", DX, [ae("button", {
            class: "feedback-button",
            onClick: e[0] || (e[0] = (...c) => t.onFeedbackClick && t.onFeedbackClick(...c))
        }, UX), ae("button", {
            onClick: e[1] || (e[1] = (...c) => t.onDebugClick && t.onDebugClick(...c))
        }, GX)])) : t.screen === "feedback" ? (se(), le("div", WX, [KX, HX, ae("div", {
            class: qe(["vibes", {
                "has-selected": t.vibe
            }])
        }, [VX, ae("div", YX, [ae("button", {
            class: qe({
                selected: t.vibe === "good"
            }),
            onClick: e[2] || (e[2] = c => t.onVibeClick("good"))
        }, zX, 2), ae("button", {
            class: qe({
                selected: t.vibe === "meh"
            }),
            onClick: e[3] || (e[3] = c => t.onVibeClick("meh"))
        }, JX, 2), ae("button", {
            class: qe({
                selected: t.vibe === "bad"
            }),
            onClick: e[4] || (e[4] = c => t.onVibeClick("bad"))
        }, QX, 2)])], 2), ae("div", e9, [t.content ? (se(), le("div", t9, [tt(ae("input", {
            "onUpdate:modelValue": e[5] || (e[5] = c => t.isContent = c),
            type: "checkbox"
        }, null, 512), [
            [vL, t.isContent]
        ]), ae("span", null, [r9, ae("em", null, Tt(t.content), 1)])])) : We("", !0), tt(ae("textarea", {
            "onUpdate:modelValue": e[6] || (e[6] = c => t.message = c),
            rows: "3",
            placeholder: "(optional) more details",
            "aria-label": "Details"
        }, null, 512), [
            [qv, t.message]
        ]), ae("button", {
            onClick: e[7] || (e[7] = cn((...c) => t.onSubmitClick && t.onSubmitClick(...c), ["prevent"]))
        }, Tt(t.$t("ACTION.SUBMIT")), 1)])])) : t.screen === "debug" ? (se(), le("div", n9, [i9, s9, ae("div", a9, [tt(ae("textarea", {
            "onUpdate:modelValue": e[8] || (e[8] = c => t.message = c),
            rows: "3",
            placeholder: "Enter details",
            "aria-label": "Details"
        }, null, 512), [
            [qv, t.message]
        ]), ae("button", {
            onClick: e[9] || (e[9] = cn((...c) => t.onSubmitClick && t.onSubmitClick(...c), ["prevent"]))
        }, Tt(t.$t("ACTION.OK")), 1)])])) : We("", !0)])
    }
    const SO = $t(NX, [
            ["render", o9],
            ["__scopeId", "data-v-2c53389f"]
        ]),
        c9 = vt({
            methods: {
                onFeedbackClick() {
                    this.$showModal(SO)
                }
            }
        });

    function l9(t, e, r, n, s, o) {
        return se(), le("div", {
            class: "feedback-button",
            onClick: e[0] || (e[0] = (...c) => t.onFeedbackClick && t.onFeedbackClick(...c))
        }, "SEND FEEDBACK")
    }
    const u9 = $t(c9, [
            ["render", l9],
            ["__scopeId", "data-v-6f2f1788"]
        ]),
        f9 = {
            install: (t, e) => {
                if (!t.config.globalProperties.$debugRecorder && !t.config.globalProperties.$debugReplayer) {
                    if (e.replayer) {
                        t.config.globalProperties.$debugReplayer = e.replayer, t.component("Debug", r6);
                        return
                    }
                    if (t.config.globalProperties.$debugRecorder = new oW(e.client, e.room), !t.config.globalProperties.$showModal) {
                        console.warn("[debugPlugin] Sending debug and feedback messages is disabled be the modalPlugin is not used.");
                        return
                    }(!hr.isProduction || hr.getQueryParam("feedback")) && t.component("Debug", u9), new Lq(() => {
                        t.config.globalProperties.$showModal(SO)
                    })
                }
            }
        };
    var d9 = ln,
        h9 = function() {
            return d9.Date.now()
        },
        p9 = h9,
        g9 = /\s/;

    function m9(t) {
        for (var e = t.length; e-- && g9.test(t.charAt(e)););
        return e
    }
    var v9 = m9,
        y9 = v9,
        _9 = /^\s+/;

    function E9(t) {
        return t && t.slice(0, y9(t) + 1).replace(_9, "")
    }
    var b9 = E9,
        T9 = ra,
        S9 = gi,
        O9 = "[object Symbol]";

    function w9(t) {
        return typeof t == "symbol" || S9(t) && T9(t) == O9
    }
    var Ml = w9,
        C9 = b9,
        H_ = un,
        I9 = Ml,
        V_ = 0 / 0,
        $9 = /^[-+]0x[0-9a-f]+$/i,
        A9 = /^0b[01]+$/i,
        R9 = /^0o[0-7]+$/i,
        N9 = parseInt;

    function P9(t) {
        if (typeof t == "number") return t;
        if (I9(t)) return V_;
        if (H_(t)) {
            var e = typeof t.valueOf == "function" ? t.valueOf() : t;
            t = H_(e) ? e + "" : e
        }
        if (typeof t != "string") return t === 0 ? t : +t;
        t = C9(t);
        var r = A9.test(t);
        return r || R9.test(t) ? N9(t.slice(2), r ? 2 : 8) : $9.test(t) ? V_ : +t
    }
    var L9 = P9,
        k9 = un,
        Kf = p9,
        Y_ = L9,
        x9 = "Expected a function",
        D9 = Math.max,
        M9 = Math.min;

    function F9(t, e, r) {
        var n, s, o, c, u, f, h = 0,
            m = !1,
            _ = !1,
            b = !0;
        if (typeof t != "function") throw new TypeError(x9);
        e = Y_(e) || 0, k9(r) && (m = !!r.leading, _ = "maxWait" in r, o = _ ? D9(Y_(r.maxWait) || 0, e) : o, b = "trailing" in r ? !!r.trailing : b);

        function C(z) {
            var ie = n,
                oe = s;
            return n = s = void 0, h = z, c = t.apply(oe, ie), c
        }

        function L(z) {
            return h = z, u = setTimeout(I, e), m ? C(z) : c
        }

        function M(z) {
            var ie = z - f,
                oe = z - h,
                ue = e - ie;
            return _ ? M9(ue, o - oe) : ue
        }

        function B(z) {
            var ie = z - f,
                oe = z - h;
            return f === void 0 || ie >= e || ie < 0 || _ && oe >= o
        }

        function I() {
            var z = Kf();
            if (B(z)) return K(z);
            u = setTimeout(I, M(z))
        }

        function K(z) {
            return u = void 0, b && n ? C(z) : (n = s = void 0, c)
        }

        function Y() {
            u !== void 0 && clearTimeout(u), h = 0, n = f = s = u = void 0
        }

        function G() {
            return u === void 0 ? c : K(Kf())
        }

        function j() {
            var z = Kf(),
                ie = B(z);
            if (n = arguments, s = this, f = z, ie) {
                if (u === void 0) return L(f);
                if (_) return clearTimeout(u), u = setTimeout(I, e), C(f)
            }
            return u === void 0 && (u = setTimeout(I, e)), c
        }
        return j.cancel = Y, j.flush = G, j
    }
    var U9 = F9,
        B9 = mi,
        j9 = Ml,
        G9 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        W9 = /^\w*$/;

    function K9(t, e) {
        if (B9(t)) return !1;
        var r = typeof t;
        return r == "number" || r == "symbol" || r == "boolean" || t == null || j9(t) ? !0 : W9.test(t) || !G9.test(t) || e != null && t in Object(e)
    }
    var H9 = K9,
        OO = Yb,
        V9 = "Expected a function";

    function bp(t, e) {
        if (typeof t != "function" || e != null && typeof e != "function") throw new TypeError(V9);
        var r = function() {
            var n = arguments,
                s = e ? e.apply(this, n) : n[0],
                o = r.cache;
            if (o.has(s)) return o.get(s);
            var c = t.apply(this, n);
            return r.cache = o.set(s, c) || o, c
        };
        return r.cache = new(bp.Cache || OO), r
    }
    bp.Cache = OO;
    var Y9 = bp,
        q9 = Y9,
        z9 = 500;

    function X9(t) {
        var e = q9(t, function(n) {
                return r.size === z9 && r.clear(), n
            }),
            r = e.cache;
        return e
    }
    var J9 = X9,
        Z9 = J9,
        Q9 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        e7 = /\\(\\)?/g,
        t7 = Z9(function(t) {
            var e = [];
            return t.charCodeAt(0) === 46 && e.push(""), t.replace(Q9, function(r, n, s, o) {
                e.push(s ? o.replace(e7, "$1") : n || r)
            }), e
        }),
        r7 = t7;

    function n7(t, e) {
        for (var r = -1, n = t == null ? 0 : t.length, s = Array(n); ++r < n;) s[r] = e(t[r], r, t);
        return s
    }
    var wO = n7,
        q_ = _l,
        i7 = wO,
        s7 = mi,
        a7 = Ml,
        o7 = 1 / 0,
        z_ = q_ ? q_.prototype : void 0,
        X_ = z_ ? z_.toString : void 0;

    function CO(t) {
        if (typeof t == "string") return t;
        if (s7(t)) return i7(t, CO) + "";
        if (a7(t)) return X_ ? X_.call(t) : "";
        var e = t + "";
        return e == "0" && 1 / t == -o7 ? "-0" : e
    }
    var c7 = CO,
        l7 = c7;

    function u7(t) {
        return t == null ? "" : l7(t)
    }
    var f7 = u7,
        d7 = mi,
        h7 = H9,
        p7 = r7,
        g7 = f7;

    function m7(t, e) {
        return d7(t) ? t : h7(t, e) ? [t] : p7(g7(t))
    }
    var IO = m7,
        v7 = Ml,
        y7 = 1 / 0;

    function _7(t) {
        if (typeof t == "string" || v7(t)) return t;
        var e = t + "";
        return e == "0" && 1 / t == -y7 ? "-0" : e
    }
    var $O = _7,
        E7 = Mh,
        b7 = IO,
        T7 = Fh,
        J_ = un,
        S7 = $O;

    function O7(t, e, r, n) {
        if (!J_(t)) return t;
        e = b7(e, t);
        for (var s = -1, o = e.length, c = o - 1, u = t; u != null && ++s < o;) {
            var f = S7(e[s]),
                h = r;
            if (f === "__proto__" || f === "constructor" || f === "prototype") return t;
            if (s != c) {
                var m = u[f];
                h = n ? n(m, f, u) : void 0, h === void 0 && (h = J_(m) ? m : T7(e[s + 1]) ? [] : {})
            }
            E7(u, f, h), u = u[f]
        }
        return t
    }
    var w7 = O7,
        C7 = w7;

    function I7(t, e, r) {
        return t == null ? t : C7(t, e, r)
    }
    var $7 = I7;
    class A7 {
        constructor() {
            ge(this, "wsClient");
            ge(this, "keyMap");
            ge(this, "providerMap");
            ge(this, "mappedValues", Mn({}));
            ge(this, "shouldParseBlobcast", !1);
            ge(this, "pausedKeys", null);
            ge(this, "keyMapKeys");
            ge(this, "providerMapKeys");
            ge(this, "hotValues");
            ge(this, "newValues");
            ge(this, "pause", (e = []) => {
                this.pausedKeys = e
            });
            ge(this, "resume", () => {
                this.pausedKeys = null, this.sync()
            });
            ge(this, "sync", U9(() => {
                !this.wsClient || !this.keyMap && !this.providerMap || this.pausedKeys && !this.pausedKeys.length || (this.hotValues = {}, this.newValues = {}, this.normalize().mapKeysToValues().mapProvidersToValues().deleteDropped().hydrateRefs().syncExisting(), delete this.hotValues, delete this.newValues)
            }, 50))
        }
        setWSClient(e) {
            this.wsClient = e, this.setupWatcher()
        }
        setupWatcher() {
            this.wsClient.entities = Mn(this.wsClient.entities), Zi(this.wsClient.entities, (e, r) => {
                this.sync()
            })
        }
        valueForEntity(e) {
            return e instanceof br.ArtifactEntity || e instanceof br.DoodleEntity ? e : e instanceof br.ObjectEntity ? EO(e.val) : e instanceof br.TextEntity ? e.text : e instanceof br.NumberEntity ? e.val : null
        }
        normalize() {
            var r;
            const e = Object.keys(this.wsClient.entities);
            for (let n = 0; n < e.length; n++) {
                let s = e[n];
                if ((r = this.pausedKeys) != null && r.includes(s)) continue;
                const o = this.valueForEntity(this.wsClient.entities[s]);
                if (o != null) {
                    if (this.shouldParseBlobcast) {
                        const c = s.split(":");
                        if (c[0] === "bc")
                            if (c[1] === "customer") {
                                if (c[2] !== `${this.wsClient.id}`) continue;
                                s = "player"
                            } else c[1] === "room" && (s = "room")
                    }
                    this.hotValues[s] = o
                }
            }
            return this
        }
        hydrateRefs() {
            const e = (r, n, s = !1) => {
                var c;
                const o = (c = r.$ref) != null ? c : r.ref;
                if (o) {
                    const u = this.hotValues[o];
                    if (u === void 0) throw new Error(`[ecastPlugin] entity "${n}" referenced entity "${o}" but it does not exist`);
                    $7(this.newValues, n, u)
                } else s && Object.entries(r).forEach(([u, f]) => {
                    f !== null && typeof f == "object" && e(f, `${n}.${u}`, s)
                })
            };
            return Object.entries(this.newValues).forEach(([r, n]) => {
                !n || Object.entries(n).forEach(([s, o]) => {
                    o !== null && typeof o == "object" && e(o, `${r}.${s}`, this.keyHasDeepRefs(r))
                })
            }), this
        }
        keyHasDeepRefs(e) {
            var r, n, s, o;
            return !!((n = (r = this.keyMap) == null ? void 0 : r[e]) != null && n.hasDeepRefs || (o = (s = this.providerMap) == null ? void 0 : s[e]) != null && o.hasDeepRefs)
        }
        mapKeysToValues() {
            if (!this.keyMap) return this;
            for (let e = 0; e < this.keyMapKeys.length; e++) this.newValues[this.keyMapKeys[e]] = this.hotValues[this.keyMap[this.keyMapKeys[e]].key];
            return this
        }
        mapProvidersToValues() {
            if (!this.providerMap) return this;
            for (let e = 0; e < this.providerMapKeys.length; e++) this.newValues[this.providerMapKeys[e]] = this.providerMap[this.providerMapKeys[e]].fn(this.hotValues, this.wsClient);
            return this
        }
        deleteDropped() {
            const e = Object.keys(this.mappedValues);
            for (let r = 0; r < e.length; r++) this.newValues[e[r]] || delete this.mappedValues[e[r]];
            return this
        }
        syncExisting() {
            const e = Object.keys(this.newValues);
            for (let r = 0; r < e.length; r++) this.mappedValues[e[r]] ? this.mappedValues[e[r]] = this.newValues[e[r]] : this.mappedValues[e[r]] = this.newValues[e[r]];
            return this.mappedValues
        }
        addKeys(e) {
            this.keyMap || (this.keyMap = {}), Object.keys(e).forEach(r => {
                var n;
                if (typeof e[r] == "function") {
                    const s = e[r];
                    this.keyMap[r] = {
                        key: s(this.wsClient),
                        hasDeepRefs: !1
                    };
                    return
                }
                if (typeof e[r] == "object") {
                    const s = e[r];
                    this.keyMap[r] = {
                        key: s.fn ? s.fn(this.wsClient) : s.key,
                        hasDeepRefs: (n = s.hasDeepRefs) != null ? n : !1
                    };
                    return
                }
                this.keyMap[r] = {
                    key: e[r]
                }
            }), this.keyMapKeys = Object.keys(this.keyMap), this.sync()
        }
        purgeKeys(e) {
            !this.keyMap || (Object.keys(e).forEach(r => {
                this.keyMap[r] && delete this.keyMap[r]
            }), this.keyMapKeys = Object.keys(this.keyMap), this.sync())
        }
        addProviders(e) {
            this.providerMap || (this.providerMap = {}), Object.keys(e).forEach(r => {
                var n;
                if (typeof e[r] == "object") {
                    const s = e[r];
                    this.providerMap[r] = {
                        fn: s.fn,
                        hasDeepRefs: (n = s.hasDeepRefs) != null ? n : !1
                    };
                    return
                }
                this.providerMap[r] = {
                    fn: e[r]
                }
            }), this.providerMapKeys = Object.keys(this.providerMap), this.sync()
        }
        purgeProviders(e) {
            !this.providerMap || (Object.keys(e).forEach(r => {
                this.providerMap[r] && delete this.providerMap[r]
            }), this.providerMapKeys = Object.keys(this.providerMap), this.sync())
        }
    }
    const Kr = new A7,
        R7 = {
            install: (t, e) => {
                t.config.globalProperties.$setupEcast = r => {
                    Kr.setWSClient(r.wsClient), r.wsClient.on("artifact", n => Za.add(n)), r.wsClient.on("connection", n => {
                        n.status === "connected" && Kr.setupWatcher()
                    }), Kr.sync(), t.config.globalProperties.$ecast = Kr.wsClient, t.config.globalProperties.$ecastValues = Kr.mappedValues, t.config.globalProperties.$ecastRoom = r.room, t.config.globalProperties.$ecastWelcome = r.welcome, t.config.globalProperties.$syncEcast = Kr.sync, t.config.globalProperties.$pauseEcastUpdates = Kr.pause, t.config.globalProperties.$resumeEcastUpdates = Kr.resume, t.mixin({
                        beforeCreate() {
                            this.$options.ecastKeys && Kr.addKeys(this.$options.ecastKeys), this.$options.ecastProviders && Kr.addProviders(this.$options.ecastProviders)
                        },
                        beforeDestroy() {
                            this.$options.ecastKeys && Kr.purgeKeys(this.$options.ecastKeys), this.$options.ecastProviders && Kr.purgeProviders(this.$options.ecastProviders)
                        }
                    })
                }, e != null && e.wsClient && t.config.globalProperties.$setupEcast(e)
            }
        },
        po = {
            fatal: {
                error: Symbol("fatal.error")
            },
            modal: {
                active: Symbol("modal.active")
            },
            textDescriptions: {
                announcement: Symbol("textDescriptions.announcement")
            }
        };

    function N7() {
        return typeof __SENTRY_BROWSER_BUNDLE__ < "u" && !!__SENTRY_BROWSER_BUNDLE__
    }

    function Tp() {
        return !N7() && Object.prototype.toString.call(typeof process < "u" ? process : 0) === "[object process]"
    }

    function P7(t, e) {
        return t.require(e)
    }
    var L7 = {};

    function Yt() {
        return Tp() ? global : typeof window < "u" ? window : typeof self < "u" ? self : L7
    }

    function Sp(t, e, r) {
        var n = r || Yt(),
            s = n.__SENTRY__ = n.__SENTRY__ || {},
            o = s[t] || (s[t] = e());
        return o
    }
    var AO = Object.prototype.toString;

    function RO(t) {
        switch (AO.call(t)) {
            case "[object Error]":
            case "[object Exception]":
            case "[object DOMException]":
                return !0;
            default:
                return bi(t, Error)
        }
    }

    function la(t, e) {
        return AO.call(t) === `[object ${e}]`
    }

    function NO(t) {
        return la(t, "ErrorEvent")
    }

    function Z_(t) {
        return la(t, "DOMError")
    }

    function k7(t) {
        return la(t, "DOMException")
    }

    function Xs(t) {
        return la(t, "String")
    }

    function x7(t) {
        return t === null || typeof t != "object" && typeof t != "function"
    }

    function Fl(t) {
        return la(t, "Object")
    }

    function Op(t) {
        return typeof Event < "u" && bi(t, Event)
    }

    function D7(t) {
        return typeof Element < "u" && bi(t, Element)
    }

    function M7(t) {
        return la(t, "RegExp")
    }

    function PO(t) {
        return Boolean(t && t.then && typeof t.then == "function")
    }

    function F7(t) {
        return Fl(t) && "nativeEvent" in t && "preventDefault" in t && "stopPropagation" in t
    }

    function U7(t) {
        return typeof t == "number" && t !== t
    }

    function bi(t, e) {
        try {
            return t instanceof e
        } catch {
            return !1
        }
    }

    function Gd(t, e) {
        try {
            let u = t;
            var r = 5,
                n = 80,
                s = [];
            let f = 0,
                h = 0;
            var o = " > ",
                c = o.length;
            let m;
            for (; u && f++ < r && (m = B7(u, e), !(m === "html" || f > 1 && h + s.length * c + m.length >= n));) s.push(m), h += m.length, u = u.parentNode;
            return s.reverse().join(o)
        } catch {
            return "<unknown>"
        }
    }

    function B7(t, e) {
        var r = t,
            n = [];
        let s, o, c, u, f;
        if (!r || !r.tagName) return "";
        n.push(r.tagName.toLowerCase());
        var h = e && e.length ? e.filter(_ => r.getAttribute(_)).map(_ => [_, r.getAttribute(_)]) : null;
        if (h && h.length) h.forEach(_ => {
            n.push(`[${_[0]}="${_[1]}"]`)
        });
        else if (r.id && n.push(`#${r.id}`), s = r.className, s && Xs(s))
            for (o = s.split(/\s+/), f = 0; f < o.length; f++) n.push(`.${o[f]}`);
        var m = ["type", "name", "title", "alt"];
        for (f = 0; f < m.length; f++) c = m[f], u = r.getAttribute(c), u && n.push(`[${c}="${u}"]`);
        return n.join("")
    }

    function j7() {
        var t = Yt();
        try {
            return t.document.location.href
        } catch {
            return ""
        }
    }
    class La extends Error {
        constructor(e, r = "warn") {
            super(e), this.message = e, this.name = new.target.prototype.constructor.name, Object.setPrototypeOf(this, new.target.prototype), this.logLevel = r
        }
    }
    var G7 = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/;

    function W7(t) {
        return t === "http" || t === "https"
    }

    function K7(t, e = !1) {
        const {
            host: r,
            path: n,
            pass: s,
            port: o,
            projectId: c,
            protocol: u,
            publicKey: f
        } = t;
        return `${u}://${f}${e&&s?`:${s}`:""}@${r}${o?`:${o}`:""}/${n&&`${n}/`}${c}`
    }

    function H7(t) {
        var e = G7.exec(t);
        if (!e) throw new La(`Invalid Sentry Dsn: ${t}`);
        const [r, n, s = "", o, c = "", u] = e.slice(1);
        let f = "",
            h = u;
        var m = h.split("/");
        if (m.length > 1 && (f = m.slice(0, -1).join("/"), h = m.pop()), h) {
            var _ = h.match(/^\d+/);
            _ && (h = _[0])
        }
        return LO({
            host: o,
            pass: s,
            path: f,
            projectId: h,
            port: c,
            protocol: r,
            publicKey: n
        })
    }

    function LO(t) {
        return {
            protocol: t.protocol,
            publicKey: t.publicKey || "",
            pass: t.pass || "",
            host: t.host,
            port: t.port || "",
            path: t.path || "",
            projectId: t.projectId
        }
    }

    function V7(t) {
        if (!(typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__)) return;
        const {
            port: e,
            projectId: r,
            protocol: n
        } = t;
        var s = ["protocol", "publicKey", "host", "projectId"];
        if (s.forEach(o => {
                if (!t[o]) throw new La(`Invalid Sentry Dsn: ${o} missing`)
            }), !r.match(/^\d+$/)) throw new La(`Invalid Sentry Dsn: Invalid projectId ${r}`);
        if (!W7(n)) throw new La(`Invalid Sentry Dsn: Invalid protocol ${n}`);
        if (e && isNaN(parseInt(e, 10))) throw new La(`Invalid Sentry Dsn: Invalid port ${e}`);
        return !0
    }

    function Y7(t) {
        var e = typeof t == "string" ? H7(t) : LO(t);
        return V7(e), e
    }
    var q7 = Yt(),
        z7 = "Sentry Logger ",
        Jc = ["debug", "info", "warn", "error", "log", "assert", "trace"];

    function kO(t) {
        var e = Yt();
        if (!("console" in e)) return t();
        var r = e.console,
            n = {};
        Jc.forEach(s => {
            var o = r[s] && r[s].__sentry_original__;
            s in e.console && o && (n[s] = r[s], r[s] = o)
        });
        try {
            return t()
        } finally {
            Object.keys(n).forEach(s => {
                r[s] = n[s]
            })
        }
    }

    function Q_() {
        let t = !1;
        var e = {
            enable: () => {
                t = !0
            },
            disable: () => {
                t = !1
            }
        };
        return typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__ ? Jc.forEach(r => {
            e[r] = (...n) => {
                t && kO(() => {
                    q7.console[r](`${z7}[${r}]:`, ...n)
                })
            }
        }) : Jc.forEach(r => {
            e[r] = () => {}
        }), e
    }
    let Bt;
    typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__ ? Bt = Sp("logger", Q_) : Bt = Q_();

    function eE(t, e = 0) {
        return typeof t != "string" || e === 0 || t.length <= e ? t : `${t.substr(0,e)}...`
    }

    function tE(t, e) {
        if (!Array.isArray(t)) return "";
        var r = [];
        for (let s = 0; s < t.length; s++) {
            var n = t[s];
            try {
                r.push(String(n))
            } catch {
                r.push("[value cannot be serialized]")
            }
        }
        return r.join(e)
    }

    function wp(t, e) {
        return Xs(t) ? M7(e) ? e.test(t) : typeof e == "string" ? t.indexOf(e) !== -1 : !1 : !1
    }

    function sr(t, e, r) {
        if (e in t) {
            var n = t[e],
                s = r(n);
            if (typeof s == "function") try {
                DO(s, n)
            } catch {}
            t[e] = s
        }
    }

    function xO(t, e, r) {
        Object.defineProperty(t, e, {
            value: r,
            writable: !0,
            configurable: !0
        })
    }

    function DO(t, e) {
        var r = e.prototype || {};
        t.prototype = e.prototype = r, xO(t, "__sentry_original__", e)
    }

    function Cp(t) {
        return t.__sentry_original__
    }

    function MO(t) {
        if (RO(t)) return {
            message: t.message,
            name: t.name,
            stack: t.stack,
            ...nE(t)
        };
        if (Op(t)) {
            var e = {
                type: t.type,
                target: rE(t.target),
                currentTarget: rE(t.currentTarget),
                ...nE(t)
            };
            return typeof CustomEvent < "u" && bi(t, CustomEvent) && (e.detail = t.detail), e
        } else return t
    }

    function rE(t) {
        try {
            return D7(t) ? Gd(t) : Object.prototype.toString.call(t)
        } catch {
            return "<unknown>"
        }
    }

    function nE(t) {
        if (typeof t == "object" && t !== null) {
            var e = {};
            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e
        } else return {}
    }

    function X7(t, e = 40) {
        var r = Object.keys(MO(t));
        if (r.sort(), !r.length) return "[object has no keys]";
        if (r[0].length >= e) return eE(r[0], e);
        for (let s = r.length; s > 0; s--) {
            var n = r.slice(0, s).join(", ");
            if (!(n.length > e)) return s === r.length ? n : eE(n, e)
        }
        return ""
    }

    function J7(t) {
        var e = new Map;
        return Wd(t, e)
    }

    function Wd(t, e) {
        if (Fl(t)) {
            var r = e.get(t);
            if (r !== void 0) return r;
            var n = {};
            e.set(t, n);
            for (var s of Object.keys(t)) typeof t[s] < "u" && (n[s] = Wd(t[s], e));
            return n
        }
        if (Array.isArray(t)) {
            var r = e.get(t);
            if (r !== void 0) return r;
            var n = [];
            return e.set(t, n), t.forEach(u => {
                n.push(Wd(u, e))
            }), n
        }
        return t
    }
    var Hf = "<anonymous>";

    function hi(t) {
        try {
            return !t || typeof t != "function" ? Hf : t.name || Hf
        } catch {
            return Hf
        }
    }

    function Z7() {
        if (!("fetch" in Yt())) return !1;
        try {
            return new Headers, new Request(""), new Response, !0
        } catch {
            return !1
        }
    }

    function iE(t) {
        return t && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString())
    }

    function Q7() {
        if (!Z7()) return !1;
        var t = Yt();
        if (iE(t.fetch)) return !0;
        let e = !1;
        var r = t.document;
        if (r && typeof r.createElement == "function") try {
            var n = r.createElement("iframe");
            n.hidden = !0, r.head.appendChild(n), n.contentWindow && n.contentWindow.fetch && (e = iE(n.contentWindow.fetch)), r.head.removeChild(n)
        } catch (s) {
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Bt.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", s)
        }
        return e
    }

    function eJ() {
        var t = Yt(),
            e = t.chrome,
            r = e && e.app && e.app.runtime,
            n = "history" in t && !!t.history.pushState && !!t.history.replaceState;
        return !r && n
    }
    var St = Yt(),
        Ba = {},
        sE = {};

    function tJ(t) {
        if (!sE[t]) switch (sE[t] = !0, t) {
            case "console":
                rJ();
                break;
            case "dom":
                fJ();
                break;
            case "xhr":
                aJ();
                break;
            case "fetch":
                nJ();
                break;
            case "history":
                oJ();
                break;
            case "error":
                dJ();
                break;
            case "unhandledrejection":
                hJ();
                break;
            default:
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Bt.warn("unknown instrumentation type:", t);
                return
        }
    }

    function qi(t, e) {
        Ba[t] = Ba[t] || [], Ba[t].push(e), tJ(t)
    }

    function on(t, e) {
        if (!(!t || !Ba[t]))
            for (var r of Ba[t] || []) try {
                r(e)
            } catch (n) {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Bt.error(`Error while triggering instrumentation handler.
Type: ${t}
Name: ${hi(r)}
Error:`, n)
            }
    }

    function rJ() {
        "console" in St && Jc.forEach(function(t) {
            t in St.console && sr(St.console, t, function(e) {
                return function(...r) {
                    on("console", {
                        args: r,
                        level: t
                    }), e && e.apply(St.console, r)
                }
            })
        })
    }

    function nJ() {
        !Q7() || sr(St, "fetch", function(t) {
            return function(...e) {
                var r = {
                    args: e,
                    fetchData: {
                        method: iJ(e),
                        url: sJ(e)
                    },
                    startTimestamp: Date.now()
                };
                return on("fetch", {
                    ...r
                }), t.apply(St, e).then(n => (on("fetch", {
                    ...r,
                    endTimestamp: Date.now(),
                    response: n
                }), n), n => {
                    throw on("fetch", {
                        ...r,
                        endTimestamp: Date.now(),
                        error: n
                    }), n
                })
            }
        })
    }

    function iJ(t = []) {
        return "Request" in St && bi(t[0], Request) && t[0].method ? String(t[0].method).toUpperCase() : t[1] && t[1].method ? String(t[1].method).toUpperCase() : "GET"
    }

    function sJ(t = []) {
        return typeof t[0] == "string" ? t[0] : "Request" in St && bi(t[0], Request) ? t[0].url : String(t[0])
    }

    function aJ() {
        if ("XMLHttpRequest" in St) {
            var t = XMLHttpRequest.prototype;
            sr(t, "open", function(e) {
                return function(...r) {
                    var n = this,
                        s = r[1],
                        o = n.__sentry_xhr__ = {
                            method: Xs(r[0]) ? r[0].toUpperCase() : r[0],
                            url: r[1]
                        };
                    Xs(s) && o.method === "POST" && s.match(/sentry_key/) && (n.__sentry_own_request__ = !0);
                    var c = function() {
                        if (n.readyState === 4) {
                            try {
                                o.status_code = n.status
                            } catch {}
                            on("xhr", {
                                args: r,
                                endTimestamp: Date.now(),
                                startTimestamp: Date.now(),
                                xhr: n
                            })
                        }
                    };
                    return "onreadystatechange" in n && typeof n.onreadystatechange == "function" ? sr(n, "onreadystatechange", function(u) {
                        return function(...f) {
                            return c(), u.apply(n, f)
                        }
                    }) : n.addEventListener("readystatechange", c), e.apply(n, r)
                }
            }), sr(t, "send", function(e) {
                return function(...r) {
                    return this.__sentry_xhr__ && r[0] !== void 0 && (this.__sentry_xhr__.body = r[0]), on("xhr", {
                        args: r,
                        startTimestamp: Date.now(),
                        xhr: this
                    }), e.apply(this, r)
                }
            })
        }
    }
    let Ec;

    function oJ() {
        if (!eJ()) return;
        var t = St.onpopstate;
        St.onpopstate = function(...r) {
            var n = St.location.href,
                s = Ec;
            if (Ec = n, on("history", {
                    from: s,
                    to: n
                }), t) try {
                return t.apply(this, r)
            } catch {}
        };

        function e(r) {
            return function(...n) {
                var s = n.length > 2 ? n[2] : void 0;
                if (s) {
                    var o = Ec,
                        c = String(s);
                    Ec = c, on("history", {
                        from: o,
                        to: c
                    })
                }
                return r.apply(this, n)
            }
        }
        sr(St.history, "pushState", e), sr(St.history, "replaceState", e)
    }
    var cJ = 1e3;
    let bc, Tc;

    function lJ(t, e) {
        if (!t || t.type !== e.type) return !0;
        try {
            if (t.target !== e.target) return !0
        } catch {}
        return !1
    }

    function uJ(t) {
        if (t.type !== "keypress") return !1;
        try {
            var e = t.target;
            if (!e || !e.tagName) return !0;
            if (e.tagName === "INPUT" || e.tagName === "TEXTAREA" || e.isContentEditable) return !1
        } catch {}
        return !0
    }

    function aE(t, e = !1) {
        return r => {
            if (!(!r || Tc === r) && !uJ(r)) {
                var n = r.type === "keypress" ? "input" : r.type;
                bc === void 0 ? (t({
                    event: r,
                    name: n,
                    global: e
                }), Tc = r) : lJ(Tc, r) && (t({
                    event: r,
                    name: n,
                    global: e
                }), Tc = r), clearTimeout(bc), bc = St.setTimeout(() => {
                    bc = void 0
                }, cJ)
            }
        }
    }

    function fJ() {
        if ("document" in St) {
            var t = on.bind(null, "dom"),
                e = aE(t, !0);
            St.document.addEventListener("click", e, !1), St.document.addEventListener("keypress", e, !1), ["EventTarget", "Node"].forEach(r => {
                var n = St[r] && St[r].prototype;
                !n || !n.hasOwnProperty || !n.hasOwnProperty("addEventListener") || (sr(n, "addEventListener", function(s) {
                    return function(o, c, u) {
                        if (o === "click" || o == "keypress") try {
                            var f = this,
                                h = f.__sentry_instrumentation_handlers__ = f.__sentry_instrumentation_handlers__ || {},
                                m = h[o] = h[o] || {
                                    refCount: 0
                                };
                            if (!m.handler) {
                                var _ = aE(t);
                                m.handler = _, s.call(this, o, _, u)
                            }
                            m.refCount += 1
                        } catch {}
                        return s.call(this, o, c, u)
                    }
                }), sr(n, "removeEventListener", function(s) {
                    return function(o, c, u) {
                        if (o === "click" || o == "keypress") try {
                            var f = this,
                                h = f.__sentry_instrumentation_handlers__ || {},
                                m = h[o];
                            m && (m.refCount -= 1, m.refCount <= 0 && (s.call(this, o, m.handler, u), m.handler = void 0, delete h[o]), Object.keys(h).length === 0 && delete f.__sentry_instrumentation_handlers__)
                        } catch {}
                        return s.call(this, o, c, u)
                    }
                }))
            })
        }
    }
    let Vf = null;

    function dJ() {
        Vf = St.onerror, St.onerror = function(t, e, r, n, s) {
            return on("error", {
                column: n,
                error: s,
                line: r,
                msg: t,
                url: e
            }), Vf ? Vf.apply(this, arguments) : !1
        }
    }
    let Yf = null;

    function hJ() {
        Yf = St.onunhandledrejection, St.onunhandledrejection = function(t) {
            return on("unhandledrejection", t), Yf ? Yf.apply(this, arguments) : !0
        }
    }

    function pJ() {
        var t = typeof WeakSet == "function",
            e = t ? new WeakSet : [];

        function r(s) {
            if (t) return e.has(s) ? !0 : (e.add(s), !1);
            for (let c = 0; c < e.length; c++) {
                var o = e[c];
                if (o === s) return !0
            }
            return e.push(s), !1
        }

        function n(s) {
            if (t) e.delete(s);
            else
                for (let o = 0; o < e.length; o++)
                    if (e[o] === s) {
                        e.splice(o, 1);
                        break
                    }
        }
        return [r, n]
    }

    function ja() {
        var t = Yt(),
            e = t.crypto || t.msCrypto;
        if (e && e.randomUUID) return e.randomUUID().replace(/-/g, "");
        var r = e && e.getRandomValues ? () => e.getRandomValues(new Uint8Array(1))[0] : () => Math.random() * 16;
        return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, n => (n ^ (r() & 15) >> n / 4).toString(16))
    }

    function FO(t) {
        return t.exception && t.exception.values ? t.exception.values[0] : void 0
    }

    function Rs(t) {
        const {
            message: e,
            event_id: r
        } = t;
        if (e) return e;
        var n = FO(t);
        return n ? n.type && n.value ? `${n.type}: ${n.value}` : n.type || n.value || r || "<unknown>" : r || "<unknown>"
    }

    function Kd(t, e, r) {
        var n = t.exception = t.exception || {},
            s = n.values = n.values || [],
            o = s[0] = s[0] || {};
        o.value || (o.value = e || ""), o.type || (o.type = r || "Error")
    }

    function Zc(t, e) {
        var r = FO(t);
        if (!!r) {
            var n = {
                    type: "generic",
                    handled: !0
                },
                s = r.mechanism;
            if (r.mechanism = {
                    ...n,
                    ...s,
                    ...e
                }, e && "data" in e) {
                var o = {
                    ...s && s.data,
                    ...e.data
                };
                r.mechanism.data = o
            }
        }
    }

    function gJ(t, e = 1 / 0, r = 1 / 0) {
        try {
            return Hd("", t, e, r)
        } catch (n) {
            return {
                ERROR: `**non-serializable** (${n})`
            }
        }
    }

    function UO(t, e = 3, r = 100 * 1024) {
        var n = gJ(t, e);
        return yJ(n) > r ? UO(t, e - 1, r) : n
    }

    function Hd(t, e, r = 1 / 0, n = 1 / 0, s = pJ()) {
        const [o, c] = s;
        if (e === null || ["number", "boolean", "string"].includes(typeof e) && !U7(e)) return e;
        var u = mJ(t, e);
        if (!u.startsWith("[object ")) return u;
        if (e.__sentry_skip_normalization__) return e;
        if (r === 0) return u.replace("object ", "");
        if (o(e)) return "[Circular ~]";
        var f = e;
        if (f && typeof f.toJSON == "function") try {
            var h = f.toJSON();
            return Hd("", h, r - 1, n, s)
        } catch {}
        var m = Array.isArray(e) ? [] : {};
        let _ = 0;
        var b = MO(e);
        for (var C in b)
            if (!!Object.prototype.hasOwnProperty.call(b, C)) {
                if (_ >= n) {
                    m[C] = "[MaxProperties ~]";
                    break
                }
                var L = b[C];
                m[C] = Hd(C, L, r - 1, n, s), _ += 1
            } return c(e), m
    }

    function mJ(t, e) {
        try {
            return t === "domain" && e && typeof e == "object" && e._events ? "[Domain]" : t === "domainEmitter" ? "[DomainEmitter]" : typeof global < "u" && e === global ? "[Global]" : typeof window < "u" && e === window ? "[Window]" : typeof document < "u" && e === document ? "[Document]" : F7(e) ? "[SyntheticEvent]" : typeof e == "number" && e !== e ? "[NaN]" : e === void 0 ? "[undefined]" : typeof e == "function" ? `[Function: ${hi(e)}]` : typeof e == "symbol" ? `[${String(e)}]` : typeof e == "bigint" ? `[BigInt: ${String(e)}]` : `[object ${Object.getPrototypeOf(e).constructor.name}]`
        } catch (r) {
            return `**non-serializable** (${r})`
        }
    }

    function vJ(t) {
        return ~-encodeURI(t).split(/%..|./).length
    }

    function yJ(t) {
        return vJ(JSON.stringify(t))
    }
    var kn;
    (function(t) {
        var e = 0;
        t[t.PENDING = e] = "PENDING";
        var r = 1;
        t[t.RESOLVED = r] = "RESOLVED";
        var n = 2;
        t[t.REJECTED = n] = "REJECTED"
    })(kn || (kn = {}));
    class yn {
        __init() {
            this._state = kn.PENDING
        }
        __init2() {
            this._handlers = []
        }
        constructor(e) {
            yn.prototype.__init.call(this), yn.prototype.__init2.call(this), yn.prototype.__init3.call(this), yn.prototype.__init4.call(this), yn.prototype.__init5.call(this), yn.prototype.__init6.call(this);
            try {
                e(this._resolve, this._reject)
            } catch (r) {
                this._reject(r)
            }
        }
        then(e, r) {
            return new yn((n, s) => {
                this._handlers.push([!1, o => {
                    if (!e) n(o);
                    else try {
                        n(e(o))
                    } catch (c) {
                        s(c)
                    }
                }, o => {
                    if (!r) s(o);
                    else try {
                        n(r(o))
                    } catch (c) {
                        s(c)
                    }
                }]), this._executeHandlers()
            })
        } catch (e) {
            return this.then(r => r, e)
        } finally(e) {
            return new yn((r, n) => {
                let s, o;
                return this.then(c => {
                    o = !1, s = c, e && e()
                }, c => {
                    o = !0, s = c, e && e()
                }).then(() => {
                    if (o) {
                        n(s);
                        return
                    }
                    r(s)
                })
            })
        }
        __init3() {
            this._resolve = e => {
                this._setResult(kn.RESOLVED, e)
            }
        }
        __init4() {
            this._reject = e => {
                this._setResult(kn.REJECTED, e)
            }
        }
        __init5() {
            this._setResult = (e, r) => {
                if (this._state === kn.PENDING) {
                    if (PO(r)) {
                        r.then(this._resolve, this._reject);
                        return
                    }
                    this._state = e, this._value = r, this._executeHandlers()
                }
            }
        }
        __init6() {
            this._executeHandlers = () => {
                if (this._state !== kn.PENDING) {
                    var e = this._handlers.slice();
                    this._handlers = [], e.forEach(r => {
                        r[0] || (this._state === kn.RESOLVED && r[1](this._value), this._state === kn.REJECTED && r[2](this._value), r[0] = !0)
                    })
                }
            }
        }
    }

    function qf(t) {
        if (!t) return {};
        var e = t.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
        if (!e) return {};
        var r = e[6] || "",
            n = e[8] || "";
        return {
            host: e[4],
            path: e[5],
            protocol: e[2],
            relative: e[5] + r + n
        }
    }
    var _J = ["fatal", "error", "warning", "log", "info", "debug"];

    function EJ(t) {
        return t === "warn" ? "warning" : _J.includes(t) ? t : "log"
    }
    var Vd = {
        nowSeconds: () => Date.now() / 1e3
    };

    function bJ() {
        const {
            performance: t
        } = Yt();
        if (!(!t || !t.now)) {
            var e = Date.now() - t.now();
            return {
                now: () => t.now(),
                timeOrigin: e
            }
        }
    }

    function TJ() {
        try {
            var t = P7(vw, "perf_hooks");
            return t.performance
        } catch {
            return
        }
    }
    var zf = Tp() ? TJ() : bJ(),
        oE = zf === void 0 ? Vd : {
            nowSeconds: () => (zf.timeOrigin + zf.now()) / 1e3
        },
        BO = Vd.nowSeconds.bind(Vd),
        jO = oE.nowSeconds.bind(oE);
    (() => {
        const {
            performance: t
        } = Yt();
        if (!(!t || !t.now)) {
            var e = 3600 * 1e3,
                r = t.now(),
                n = Date.now(),
                s = t.timeOrigin ? Math.abs(t.timeOrigin + r - n) : e,
                o = s < e,
                c = t.timing && t.timing.navigationStart,
                u = typeof c == "number",
                f = u ? Math.abs(c + r - n) : e,
                h = f < e;
            return o || h ? s <= f ? t.timeOrigin : c : n
        }
    })();

    function SJ(t) {
        var e = jO(),
            r = {
                sid: ja(),
                init: !0,
                timestamp: e,
                started: e,
                duration: 0,
                status: "ok",
                errors: 0,
                ignoreDuration: !1,
                toJSON: () => wJ(r)
            };
        return t && Ul(r, t), r
    }

    function Ul(t, e = {}) {
        if (e.user && (!t.ipAddress && e.user.ip_address && (t.ipAddress = e.user.ip_address), !t.did && !e.did && (t.did = e.user.id || e.user.email || e.user.username)), t.timestamp = e.timestamp || jO(), e.ignoreDuration && (t.ignoreDuration = e.ignoreDuration), e.sid && (t.sid = e.sid.length === 32 ? e.sid : ja()), e.init !== void 0 && (t.init = e.init), !t.did && e.did && (t.did = `${e.did}`), typeof e.started == "number" && (t.started = e.started), t.ignoreDuration) t.duration = void 0;
        else if (typeof e.duration == "number") t.duration = e.duration;
        else {
            var r = t.timestamp - t.started;
            t.duration = r >= 0 ? r : 0
        }
        e.release && (t.release = e.release), e.environment && (t.environment = e.environment), !t.ipAddress && e.ipAddress && (t.ipAddress = e.ipAddress), !t.userAgent && e.userAgent && (t.userAgent = e.userAgent), typeof e.errors == "number" && (t.errors = e.errors), e.status && (t.status = e.status)
    }

    function OJ(t, e) {
        let r = {};
        e ? r = {
            status: e
        } : t.status === "ok" && (r = {
            status: "exited"
        }), Ul(t, r)
    }

    function wJ(t) {
        return J7({
            sid: `${t.sid}`,
            init: t.init,
            started: new Date(t.started * 1e3).toISOString(),
            timestamp: new Date(t.timestamp * 1e3).toISOString(),
            status: t.status,
            errors: t.errors,
            did: typeof t.did == "number" || typeof t.did == "string" ? `${t.did}` : void 0,
            duration: t.duration,
            attrs: {
                release: t.release,
                environment: t.environment,
                ip_address: t.ipAddress,
                user_agent: t.userAgent
            }
        })
    }
    var cE = 100;
    class rs {
        constructor() {
            this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}
        }
        static clone(e) {
            var r = new rs;
            return e && (r._breadcrumbs = [...e._breadcrumbs], r._tags = {
                ...e._tags
            }, r._extra = {
                ...e._extra
            }, r._contexts = {
                ...e._contexts
            }, r._user = e._user, r._level = e._level, r._span = e._span, r._session = e._session, r._transactionName = e._transactionName, r._fingerprint = e._fingerprint, r._eventProcessors = [...e._eventProcessors], r._requestSession = e._requestSession, r._attachments = [...e._attachments]), r
        }
        addScopeListener(e) {
            this._scopeListeners.push(e)
        }
        addEventProcessor(e) {
            return this._eventProcessors.push(e), this
        }
        setUser(e) {
            return this._user = e || {}, this._session && Ul(this._session, {
                user: e
            }), this._notifyScopeListeners(), this
        }
        getUser() {
            return this._user
        }
        getRequestSession() {
            return this._requestSession
        }
        setRequestSession(e) {
            return this._requestSession = e, this
        }
        setTags(e) {
            return this._tags = {
                ...this._tags,
                ...e
            }, this._notifyScopeListeners(), this
        }
        setTag(e, r) {
            return this._tags = {
                ...this._tags,
                [e]: r
            }, this._notifyScopeListeners(), this
        }
        setExtras(e) {
            return this._extra = {
                ...this._extra,
                ...e
            }, this._notifyScopeListeners(), this
        }
        setExtra(e, r) {
            return this._extra = {
                ...this._extra,
                [e]: r
            }, this._notifyScopeListeners(), this
        }
        setFingerprint(e) {
            return this._fingerprint = e, this._notifyScopeListeners(), this
        }
        setLevel(e) {
            return this._level = e, this._notifyScopeListeners(), this
        }
        setTransactionName(e) {
            return this._transactionName = e, this._notifyScopeListeners(), this
        }
        setContext(e, r) {
            return r === null ? delete this._contexts[e] : this._contexts = {
                ...this._contexts,
                [e]: r
            }, this._notifyScopeListeners(), this
        }
        setSpan(e) {
            return this._span = e, this._notifyScopeListeners(), this
        }
        getSpan() {
            return this._span
        }
        getTransaction() {
            var e = this.getSpan();
            return e && e.transaction
        }
        setSession(e) {
            return e ? this._session = e : delete this._session, this._notifyScopeListeners(), this
        }
        getSession() {
            return this._session
        }
        update(e) {
            if (!e) return this;
            if (typeof e == "function") {
                var r = e(this);
                return r instanceof rs ? r : this
            }
            return e instanceof rs ? (this._tags = {
                ...this._tags,
                ...e._tags
            }, this._extra = {
                ...this._extra,
                ...e._extra
            }, this._contexts = {
                ...this._contexts,
                ...e._contexts
            }, e._user && Object.keys(e._user).length && (this._user = e._user), e._level && (this._level = e._level), e._fingerprint && (this._fingerprint = e._fingerprint), e._requestSession && (this._requestSession = e._requestSession)) : Fl(e) && (e = e, this._tags = {
                ...this._tags,
                ...e.tags
            }, this._extra = {
                ...this._extra,
                ...e.extra
            }, this._contexts = {
                ...this._contexts,
                ...e.contexts
            }, e.user && (this._user = e.user), e.level && (this._level = e.level), e.fingerprint && (this._fingerprint = e.fingerprint), e.requestSession && (this._requestSession = e.requestSession)), this
        }
        clear() {
            return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._requestSession = void 0, this._span = void 0, this._session = void 0, this._notifyScopeListeners(), this._attachments = [], this
        }
        addBreadcrumb(e, r) {
            var n = typeof r == "number" ? Math.min(r, cE) : cE;
            if (n <= 0) return this;
            var s = {
                timestamp: BO(),
                ...e
            };
            return this._breadcrumbs = [...this._breadcrumbs, s].slice(-n), this._notifyScopeListeners(), this
        }
        clearBreadcrumbs() {
            return this._breadcrumbs = [], this._notifyScopeListeners(), this
        }
        addAttachment(e) {
            return this._attachments.push(e), this
        }
        getAttachments() {
            return this._attachments
        }
        clearAttachments() {
            return this._attachments = [], this
        }
        applyToEvent(e, r = {}) {
            if (this._extra && Object.keys(this._extra).length && (e.extra = {
                    ...this._extra,
                    ...e.extra
                }), this._tags && Object.keys(this._tags).length && (e.tags = {
                    ...this._tags,
                    ...e.tags
                }), this._user && Object.keys(this._user).length && (e.user = {
                    ...this._user,
                    ...e.user
                }), this._contexts && Object.keys(this._contexts).length && (e.contexts = {
                    ...this._contexts,
                    ...e.contexts
                }), this._level && (e.level = this._level), this._transactionName && (e.transaction = this._transactionName), this._span) {
                e.contexts = {
                    trace: this._span.getTraceContext(),
                    ...e.contexts
                };
                var n = this._span.transaction && this._span.transaction.name;
                n && (e.tags = {
                    transaction: n,
                    ...e.tags
                })
            }
            return this._applyFingerprint(e), e.breadcrumbs = [...e.breadcrumbs || [], ...this._breadcrumbs], e.breadcrumbs = e.breadcrumbs.length > 0 ? e.breadcrumbs : void 0, e.sdkProcessingMetadata = {
                ...e.sdkProcessingMetadata,
                ...this._sdkProcessingMetadata
            }, this._notifyEventProcessors([...GO(), ...this._eventProcessors], e, r)
        }
        setSDKProcessingMetadata(e) {
            return this._sdkProcessingMetadata = {
                ...this._sdkProcessingMetadata,
                ...e
            }, this
        }
        _notifyEventProcessors(e, r, n, s = 0) {
            return new yn((o, c) => {
                var u = e[s];
                if (r === null || typeof u != "function") o(r);
                else {
                    var f = u({
                        ...r
                    }, n);
                    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && u.id && f === null && Bt.log(`Event processor "${u.id}" dropped event`), PO(f) ? f.then(h => this._notifyEventProcessors(e, h, n, s + 1).then(o)).then(null, c) : this._notifyEventProcessors(e, f, n, s + 1).then(o).then(null, c)
                }
            })
        }
        _notifyScopeListeners() {
            this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach(e => {
                e(this)
            }), this._notifyingListeners = !1)
        }
        _applyFingerprint(e) {
            e.fingerprint = e.fingerprint ? Array.isArray(e.fingerprint) ? e.fingerprint : [e.fingerprint] : [], this._fingerprint && (e.fingerprint = e.fingerprint.concat(this._fingerprint)), e.fingerprint && !e.fingerprint.length && delete e.fingerprint
        }
    }

    function GO() {
        return Sp("globalEventProcessors", () => [])
    }

    function WO(t) {
        GO().push(t)
    }
    var Ip = 4,
        CJ = 100;
    class go {
        __init() {
            this._stack = [{}]
        }
        constructor(e, r = new rs, n = Ip) {
            this._version = n, go.prototype.__init.call(this), this.getStackTop().scope = r, e && this.bindClient(e)
        }
        isOlderThan(e) {
            return this._version < e
        }
        bindClient(e) {
            var r = this.getStackTop();
            r.client = e, e && e.setupIntegrations && e.setupIntegrations()
        }
        pushScope() {
            var e = rs.clone(this.getScope());
            return this.getStack().push({
                client: this.getClient(),
                scope: e
            }), e
        }
        popScope() {
            return this.getStack().length <= 1 ? !1 : !!this.getStack().pop()
        }
        withScope(e) {
            var r = this.pushScope();
            try {
                e(r)
            } finally {
                this.popScope()
            }
        }
        getClient() {
            return this.getStackTop().client
        }
        getScope() {
            return this.getStackTop().scope
        }
        getStack() {
            return this._stack
        }
        getStackTop() {
            return this._stack[this._stack.length - 1]
        }
        captureException(e, r) {
            var n = this._lastEventId = r && r.event_id ? r.event_id : ja(),
                s = new Error("Sentry syntheticException");
            return this._withClient((o, c) => {
                o.captureException(e, {
                    originalException: e,
                    syntheticException: s,
                    ...r,
                    event_id: n
                }, c)
            }), n
        }
        captureMessage(e, r, n) {
            var s = this._lastEventId = n && n.event_id ? n.event_id : ja(),
                o = new Error(e);
            return this._withClient((c, u) => {
                c.captureMessage(e, r, {
                    originalException: e,
                    syntheticException: o,
                    ...n,
                    event_id: s
                }, u)
            }), s
        }
        captureEvent(e, r) {
            var n = r && r.event_id ? r.event_id : ja();
            return e.type !== "transaction" && (this._lastEventId = n), this._withClient((s, o) => {
                s.captureEvent(e, {
                    ...r,
                    event_id: n
                }, o)
            }), n
        }
        lastEventId() {
            return this._lastEventId
        }
        addBreadcrumb(e, r) {
            const {
                scope: n,
                client: s
            } = this.getStackTop();
            if (!n || !s) return;
            const {
                beforeBreadcrumb: o = null,
                maxBreadcrumbs: c = CJ
            } = s.getOptions && s.getOptions() || {};
            if (!(c <= 0)) {
                var u = BO(),
                    f = {
                        timestamp: u,
                        ...e
                    },
                    h = o ? kO(() => o(f, r)) : f;
                h !== null && n.addBreadcrumb(h, c)
            }
        }
        setUser(e) {
            var r = this.getScope();
            r && r.setUser(e)
        }
        setTags(e) {
            var r = this.getScope();
            r && r.setTags(e)
        }
        setExtras(e) {
            var r = this.getScope();
            r && r.setExtras(e)
        }
        setTag(e, r) {
            var n = this.getScope();
            n && n.setTag(e, r)
        }
        setExtra(e, r) {
            var n = this.getScope();
            n && n.setExtra(e, r)
        }
        setContext(e, r) {
            var n = this.getScope();
            n && n.setContext(e, r)
        }
        configureScope(e) {
            const {
                scope: r,
                client: n
            } = this.getStackTop();
            r && n && e(r)
        }
        run(e) {
            var r = lE(this);
            try {
                e(this)
            } finally {
                lE(r)
            }
        }
        getIntegration(e) {
            var r = this.getClient();
            if (!r) return null;
            try {
                return r.getIntegration(e)
            } catch {
                return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Bt.warn(`Cannot retrieve integration ${e.id} from the current Hub`), null
            }
        }
        startTransaction(e, r) {
            return this._callExtensionMethod("startTransaction", e, r)
        }
        traceHeaders() {
            return this._callExtensionMethod("traceHeaders")
        }
        captureSession(e = !1) {
            if (e) return this.endSession();
            this._sendSessionUpdate()
        }
        endSession() {
            var e = this.getStackTop(),
                r = e && e.scope,
                n = r && r.getSession();
            n && OJ(n), this._sendSessionUpdate(), r && r.setSession()
        }
        startSession(e) {
            const {
                scope: r,
                client: n
            } = this.getStackTop(), {
                release: s,
                environment: o
            } = n && n.getOptions() || {};
            var c = Yt();
            const {
                userAgent: u
            } = c.navigator || {};
            var f = SJ({
                release: s,
                environment: o,
                ...r && {
                    user: r.getUser()
                },
                ...u && {
                    userAgent: u
                },
                ...e
            });
            if (r) {
                var h = r.getSession && r.getSession();
                h && h.status === "ok" && Ul(h, {
                    status: "exited"
                }), this.endSession(), r.setSession(f)
            }
            return f
        }
        shouldSendDefaultPii() {
            var e = this.getClient(),
                r = e && e.getOptions();
            return Boolean(r && r.sendDefaultPii)
        }
        _sendSessionUpdate() {
            const {
                scope: e,
                client: r
            } = this.getStackTop();
            if (!!e) {
                var n = e.getSession();
                n && r && r.captureSession && r.captureSession(n)
            }
        }
        _withClient(e) {
            const {
                scope: r,
                client: n
            } = this.getStackTop();
            n && e(n, r)
        }
        _callExtensionMethod(e, ...r) {
            var n = Bl(),
                s = n.__SENTRY__;
            if (s && s.extensions && typeof s.extensions[e] == "function") return s.extensions[e].apply(this, r);
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Bt.warn(`Extension method ${e} couldn't be found, doing nothing.`)
        }
    }

    function Bl() {
        var t = Yt();
        return t.__SENTRY__ = t.__SENTRY__ || {
            extensions: {},
            hub: void 0
        }, t
    }

    function lE(t) {
        var e = Bl(),
            r = ii(e);
        return $p(e, t), r
    }

    function Pr() {
        var t = Bl();
        return (!KO(t) || ii(t).isOlderThan(Ip)) && $p(t, new go), Tp() ? IJ(t) : ii(t)
    }

    function IJ(t) {
        try {
            var e = Bl().__SENTRY__,
                r = e && e.extensions && e.extensions.domain && e.extensions.domain.active;
            if (!r) return ii(t);
            if (!KO(r) || ii(r).isOlderThan(Ip)) {
                var n = ii(t).getStackTop();
                $p(r, new go(n.client, rs.clone(n.scope)))
            }
            return ii(r)
        } catch {
            return ii(t)
        }
    }

    function KO(t) {
        return !!(t && t.__SENTRY__ && t.__SENTRY__.hub)
    }

    function ii(t) {
        return Sp("hub", () => new go, t)
    }

    function $p(t, e) {
        if (!t) return !1;
        var r = t.__SENTRY__ = t.__SENTRY__ || {};
        return r.hub = e, !0
    }

    function $J(t, e) {
        return Pr().captureException(t, {
            captureContext: e
        })
    }

    function AJ(t) {
        Pr().withScope(t)
    }

    function RJ(t) {
        var e = t.protocol ? `${t.protocol}:` : "",
            r = t.port ? `:${t.port}` : "";
        return `${e}//${t.host}${r}${t.path?`/${t.path}`:""}/api/`
    }

    function NJ(t, e) {
        var r = Y7(t),
            n = `${RJ(r)}embed/error-page/`;
        let s = `dsn=${K7(r)}`;
        for (var o in e)
            if (o !== "dsn")
                if (o === "user") {
                    var c = e.user;
                    if (!c) continue;
                    c.name && (s += `&name=${encodeURIComponent(c.name)}`), c.email && (s += `&email=${encodeURIComponent(c.email)}`)
                } else s += `&${encodeURIComponent(o)}=${encodeURIComponent(e[o])}`;
        return `${n}?${s}`
    }
    let uE;
    class eo {
        constructor() {
            eo.prototype.__init.call(this)
        }
        static __initStatic() {
            this.id = "FunctionToString"
        }
        __init() {
            this.name = eo.id
        }
        setupOnce() {
            uE = Function.prototype.toString, Function.prototype.toString = function(...e) {
                var r = Cp(this) || this;
                return uE.apply(r, e)
            }
        }
    }
    eo.__initStatic();
    var PJ = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/];
    class js {
        static __initStatic() {
            this.id = "InboundFilters"
        }
        __init() {
            this.name = js.id
        }
        constructor(e = {}) {
            this._options = e, js.prototype.__init.call(this)
        }
        setupOnce(e, r) {
            var n = s => {
                var o = r();
                if (o) {
                    var c = o.getIntegration(js);
                    if (c) {
                        var u = o.getClient(),
                            f = u ? u.getOptions() : {},
                            h = LJ(c._options, f);
                        return kJ(s, h) ? null : s
                    }
                }
                return s
            };
            n.id = this.name, e(n)
        }
    }
    js.__initStatic();

    function LJ(t = {}, e = {}) {
        return {
            allowUrls: [...t.allowUrls || [], ...e.allowUrls || []],
            denyUrls: [...t.denyUrls || [], ...e.denyUrls || []],
            ignoreErrors: [...t.ignoreErrors || [], ...e.ignoreErrors || [], ...PJ],
            ignoreInternal: t.ignoreInternal !== void 0 ? t.ignoreInternal : !0
        }
    }

    function kJ(t, e) {
        return e.ignoreInternal && UJ(t) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Bt.warn(`Event dropped due to being internal Sentry Error.
Event: ${Rs(t)}`), !0) : xJ(t, e.ignoreErrors) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Bt.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${Rs(t)}`), !0) : DJ(t, e.denyUrls) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Bt.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${Rs(t)}.
Url: ${Qc(t)}`), !0) : MJ(t, e.allowUrls) ? !1 : ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Bt.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${Rs(t)}.
Url: ${Qc(t)}`), !0)
    }

    function xJ(t, e) {
        return !e || !e.length ? !1 : FJ(t).some(r => e.some(n => wp(r, n)))
    }

    function DJ(t, e) {
        if (!e || !e.length) return !1;
        var r = Qc(t);
        return r ? e.some(n => wp(r, n)) : !1
    }

    function MJ(t, e) {
        if (!e || !e.length) return !0;
        var r = Qc(t);
        return r ? e.some(n => wp(r, n)) : !0
    }

    function FJ(t) {
        if (t.message) return [t.message];
        if (t.exception) try {
            const {
                type: e = "",
                value: r = ""
            } = t.exception.values && t.exception.values[0] || {};
            return [`${r}`, `${e}: ${r}`]
        } catch {
            return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Bt.error(`Cannot extract message for event ${Rs(t)}`), []
        }
        return []
    }

    function UJ(t) {
        try {
            return t.exception.values[0].type === "SentryError"
        } catch {}
        return !1
    }

    function BJ(t = []) {
        for (let r = t.length - 1; r >= 0; r--) {
            var e = t[r];
            if (e && e.filename !== "<anonymous>" && e.filename !== "[native code]") return e.filename || null
        }
        return null
    }

    function Qc(t) {
        try {
            let e;
            try {
                e = t.exception.values[0].stacktrace.frames
            } catch {}
            return e ? BJ(e) : null
        } catch {
            return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Bt.error(`Cannot extract url for event ${Rs(t)}`), null
        }
    }

    function HO(t, e) {
        var r = Ap(t, e),
            n = {
                type: e && e.name,
                value: KJ(e)
            };
        return r.length && (n.stacktrace = {
            frames: r
        }), n.type === void 0 && n.value === "" && (n.value = "Unrecoverable error caught"), n
    }

    function jJ(t, e, r, n) {
        var s = {
            exception: {
                values: [{
                    type: Op(e) ? e.constructor.name : n ? "UnhandledRejection" : "Error",
                    value: `Non-Error ${n?"promise rejection":"exception"} captured with keys: ${X7(e)}`
                }]
            },
            extra: {
                __serialized__: UO(e)
            }
        };
        if (r) {
            var o = Ap(t, r);
            o.length && (s.exception.values[0].stacktrace = {
                frames: o
            })
        }
        return s
    }

    function Xf(t, e) {
        return {
            exception: {
                values: [HO(t, e)]
            }
        }
    }

    function Ap(t, e) {
        var r = e.stacktrace || e.stack || "",
            n = WJ(e);
        try {
            return t(r, n)
        } catch {}
        return []
    }
    var GJ = /Minified React error #\d+;/i;

    function WJ(t) {
        if (t) {
            if (typeof t.framesToPop == "number") return t.framesToPop;
            if (GJ.test(t.message)) return 1
        }
        return 0
    }

    function KJ(t) {
        var e = t && t.message;
        return e ? e.error && typeof e.error.message == "string" ? e.error.message : e : "No error message"
    }

    function VO(t, e, r, n, s) {
        let o;
        if (NO(e) && e.error) {
            var c = e;
            return Xf(t, c.error)
        }
        if (Z_(e) || k7(e)) {
            var u = e;
            if ("stack" in e) o = Xf(t, e);
            else {
                var f = u.name || (Z_(u) ? "DOMError" : "DOMException"),
                    h = u.message ? `${f}: ${u.message}` : f;
                o = fE(t, h, r, n), Kd(o, h)
            }
            return "code" in u && (o.tags = {
                ...o.tags,
                "DOMException.code": `${u.code}`
            }), o
        }
        if (RO(e)) return Xf(t, e);
        if (Fl(e) || Op(e)) {
            var m = e;
            return o = jJ(t, m, r, s), Zc(o, {
                synthetic: !0
            }), o
        }
        return o = fE(t, e, r, n), Kd(o, `${e}`, void 0), Zc(o, {
            synthetic: !0
        }), o
    }

    function fE(t, e, r, n) {
        var s = {
            message: e
        };
        if (n && r) {
            var o = Ap(t, r);
            o.length && (s.exception = {
                values: [{
                    value: e,
                    stacktrace: {
                        frames: o
                    }
                }]
            })
        }
        return s
    }
    var HJ = "Breadcrumbs";
    class to {
        static __initStatic() {
            this.id = HJ
        }
        __init() {
            this.name = to.id
        }
        constructor(e) {
            to.prototype.__init.call(this), this.options = {
                console: !0,
                dom: !0,
                fetch: !0,
                history: !0,
                sentry: !0,
                xhr: !0,
                ...e
            }
        }
        setupOnce() {
            this.options.console && qi("console", YJ), this.options.dom && qi("dom", VJ(this.options.dom)), this.options.xhr && qi("xhr", qJ), this.options.fetch && qi("fetch", zJ), this.options.history && qi("history", XJ)
        }
    }
    to.__initStatic();

    function VJ(t) {
        function e(r) {
            let n, s = typeof t == "object" ? t.serializeAttribute : void 0;
            typeof s == "string" && (s = [s]);
            try {
                n = r.event.target ? Gd(r.event.target, s) : Gd(r.event, s)
            } catch {
                n = "<unknown>"
            }
            n.length !== 0 && Pr().addBreadcrumb({
                category: `ui.${r.name}`,
                message: n
            }, {
                event: r.event,
                name: r.name,
                global: r.global
            })
        }
        return e
    }

    function YJ(t) {
        var e = {
            category: "console",
            data: {
                arguments: t.args,
                logger: "console"
            },
            level: EJ(t.level),
            message: tE(t.args, " ")
        };
        if (t.level === "assert")
            if (t.args[0] === !1) e.message = `Assertion failed: ${tE(t.args.slice(1)," ")||"console.assert"}`, e.data.arguments = t.args.slice(1);
            else return;
        Pr().addBreadcrumb(e, {
            input: t.args,
            level: t.level
        })
    }

    function qJ(t) {
        if (t.endTimestamp) {
            if (t.xhr.__sentry_own_request__) return;
            const {
                method: e,
                url: r,
                status_code: n,
                body: s
            } = t.xhr.__sentry_xhr__ || {};
            Pr().addBreadcrumb({
                category: "xhr",
                data: {
                    method: e,
                    url: r,
                    status_code: n
                },
                type: "http"
            }, {
                xhr: t.xhr,
                input: s
            });
            return
        }
    }

    function zJ(t) {
        !t.endTimestamp || t.fetchData.url.match(/sentry_key/) && t.fetchData.method === "POST" || (t.error ? Pr().addBreadcrumb({
            category: "fetch",
            data: t.fetchData,
            level: "error",
            type: "http"
        }, {
            data: t.error,
            input: t.args
        }) : Pr().addBreadcrumb({
            category: "fetch",
            data: {
                ...t.fetchData,
                status_code: t.response.status
            },
            type: "http"
        }, {
            input: t.args,
            response: t.response
        }))
    }

    function XJ(t) {
        var e = Yt();
        let r = t.from,
            n = t.to;
        var s = qf(e.location.href);
        let o = qf(r);
        var c = qf(n);
        o.path || (o = s), s.protocol === c.protocol && s.host === c.host && (n = c.relative), s.protocol === o.protocol && s.host === o.host && (r = o.relative), Pr().addBreadcrumb({
            category: "navigation",
            data: {
                from: r,
                to: n
            }
        })
    }
    let Yd = 0;

    function YO() {
        return Yd > 0
    }

    function JJ() {
        Yd += 1, setTimeout(() => {
            Yd -= 1
        })
    }

    function Js(t, e = {}, r) {
        if (typeof t != "function") return t;
        try {
            var n = t.__sentry_wrapped__;
            if (n) return n;
            if (Cp(t)) return t
        } catch {
            return t
        }
        var s = function() {
            var u = Array.prototype.slice.call(arguments);
            try {
                r && typeof r == "function" && r.apply(this, arguments);
                var f = u.map(h => Js(h, e));
                return t.apply(this, f)
            } catch (h) {
                throw JJ(), AJ(m => {
                    m.addEventProcessor(_ => (e.mechanism && (Kd(_, void 0, void 0), Zc(_, e.mechanism)), _.extra = {
                        ..._.extra,
                        arguments: u
                    }, _)), $J(h)
                }), h
            }
        };
        try {
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (s[o] = t[o])
        } catch {}
        DO(s, t), xO(t, "__sentry_wrapped__", s);
        try {
            var c = Object.getOwnPropertyDescriptor(s, "name");
            c.configurable && Object.defineProperty(s, "name", {
                get() {
                    return t.name
                }
            })
        } catch {}
        return s
    }
    class ci {
        static __initStatic() {
            this.id = "GlobalHandlers"
        }
        __init() {
            this.name = ci.id
        }
        __init2() {
            this._installFunc = {
                onerror: ZJ,
                onunhandledrejection: QJ
            }
        }
        constructor(e) {
            ci.prototype.__init.call(this), ci.prototype.__init2.call(this), this._options = {
                onerror: !0,
                onunhandledrejection: !0,
                ...e
            }
        }
        setupOnce() {
            Error.stackTraceLimit = 50;
            var e = this._options;
            for (var r in e) {
                var n = this._installFunc[r];
                n && e[r] && (rZ(r), n(), this._installFunc[r] = void 0)
            }
        }
    }
    ci.__initStatic();

    function ZJ() {
        qi("error", t => {
            const [e, r, n] = XO();
            if (!e.getIntegration(ci)) return;
            const {
                msg: s,
                url: o,
                line: c,
                column: u,
                error: f
            } = t;
            if (!(YO() || f && f.__sentry_own_request__)) {
                var h = f === void 0 && Xs(s) ? tZ(s, o, c, u) : qO(VO(r, f || s, void 0, n, !1), o, c, u);
                h.level = "error", zO(e, f, h, "onerror")
            }
        })
    }

    function QJ() {
        qi("unhandledrejection", t => {
            const [e, r, n] = XO();
            if (!e.getIntegration(ci)) return;
            let s = t;
            try {
                "reason" in t ? s = t.reason : "detail" in t && "reason" in t.detail && (s = t.detail.reason)
            } catch {}
            if (YO() || s && s.__sentry_own_request__) return !0;
            var o = x7(s) ? eZ(s) : VO(r, s, void 0, n, !0);
            o.level = "error", zO(e, s, o, "onunhandledrejection")
        })
    }

    function eZ(t) {
        return {
            exception: {
                values: [{
                    type: "UnhandledRejection",
                    value: `Non-Error promise rejection captured with value: ${String(t)}`
                }]
            }
        }
    }

    function tZ(t, e, r, n) {
        var s = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
        let o = NO(t) ? t.message : t,
            c = "Error";
        var u = o.match(s);
        u && (c = u[1], o = u[2]);
        var f = {
            exception: {
                values: [{
                    type: c,
                    value: o
                }]
            }
        };
        return qO(f, e, r, n)
    }

    function qO(t, e, r, n) {
        var s = t.exception = t.exception || {},
            o = s.values = s.values || [],
            c = o[0] = o[0] || {},
            u = c.stacktrace = c.stacktrace || {},
            f = u.frames = u.frames || [],
            h = isNaN(parseInt(n, 10)) ? void 0 : n,
            m = isNaN(parseInt(r, 10)) ? void 0 : r,
            _ = Xs(e) && e.length > 0 ? e : j7();
        return f.length === 0 && f.push({
            colno: h,
            filename: _,
            function: "?",
            in_app: !0,
            lineno: m
        }), t
    }

    function rZ(t) {
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Bt.log(`Global Handler attached: ${t}`)
    }

    function zO(t, e, r, n) {
        Zc(r, {
            handled: !1,
            type: n
        }), t.captureEvent(r, {
            originalException: e
        })
    }

    function XO() {
        var t = Pr(),
            e = t.getClient(),
            r = e && e.getOptions() || {
                stackParser: () => [],
                attachStacktrace: !1
            };
        return [t, r.stackParser, r.attachStacktrace]
    }
    var nZ = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"];
    class ro {
        static __initStatic() {
            this.id = "TryCatch"
        }
        __init() {
            this.name = ro.id
        }
        constructor(e) {
            ro.prototype.__init.call(this), this._options = {
                XMLHttpRequest: !0,
                eventTarget: !0,
                requestAnimationFrame: !0,
                setInterval: !0,
                setTimeout: !0,
                ...e
            }
        }
        setupOnce() {
            var e = Yt();
            this._options.setTimeout && sr(e, "setTimeout", dE), this._options.setInterval && sr(e, "setInterval", dE), this._options.requestAnimationFrame && sr(e, "requestAnimationFrame", iZ), this._options.XMLHttpRequest && "XMLHttpRequest" in e && sr(XMLHttpRequest.prototype, "send", sZ);
            var r = this._options.eventTarget;
            if (r) {
                var n = Array.isArray(r) ? r : nZ;
                n.forEach(aZ)
            }
        }
    }
    ro.__initStatic();

    function dE(t) {
        return function(...e) {
            var r = e[0];
            return e[0] = Js(r, {
                mechanism: {
                    data: {
                        function: hi(t)
                    },
                    handled: !0,
                    type: "instrument"
                }
            }), t.apply(this, e)
        }
    }

    function iZ(t) {
        return function(e) {
            return t.apply(this, [Js(e, {
                mechanism: {
                    data: {
                        function: "requestAnimationFrame",
                        handler: hi(t)
                    },
                    handled: !0,
                    type: "instrument"
                }
            })])
        }
    }

    function sZ(t) {
        return function(...e) {
            var r = this,
                n = ["onload", "onerror", "onprogress", "onreadystatechange"];
            return n.forEach(s => {
                s in r && typeof r[s] == "function" && sr(r, s, function(o) {
                    var c = {
                            mechanism: {
                                data: {
                                    function: s,
                                    handler: hi(o)
                                },
                                handled: !0,
                                type: "instrument"
                            }
                        },
                        u = Cp(o);
                    return u && (c.mechanism.data.handler = hi(u)), Js(o, c)
                })
            }), t.apply(this, e)
        }
    }

    function aZ(t) {
        var e = Yt(),
            r = e[t] && e[t].prototype;
        !r || !r.hasOwnProperty || !r.hasOwnProperty("addEventListener") || (sr(r, "addEventListener", function(n) {
            return function(s, o, c) {
                try {
                    typeof o.handleEvent == "function" && (o.handleEvent = Js(o.handleEvent, {
                        mechanism: {
                            data: {
                                function: "handleEvent",
                                handler: hi(o),
                                target: t
                            },
                            handled: !0,
                            type: "instrument"
                        }
                    }))
                } catch {}
                return n.apply(this, [s, Js(o, {
                    mechanism: {
                        data: {
                            function: "addEventListener",
                            handler: hi(o),
                            target: t
                        },
                        handled: !0,
                        type: "instrument"
                    }
                }), c])
            }
        }), sr(r, "removeEventListener", function(n) {
            return function(s, o, c) {
                var u = o;
                try {
                    var f = u && u.__sentry_wrapped__;
                    f && n.call(this, s, f, c)
                } catch {}
                return n.call(this, s, u, c)
            }
        }))
    }
    var oZ = "cause",
        cZ = 5;
    class Gs {
        static __initStatic() {
            this.id = "LinkedErrors"
        }
        __init() {
            this.name = Gs.id
        }
        constructor(e = {}) {
            Gs.prototype.__init.call(this), this._key = e.key || oZ, this._limit = e.limit || cZ
        }
        setupOnce() {
            var e = Pr().getClient();
            !e || WO((r, n) => {
                var s = Pr().getIntegration(Gs);
                return s ? lZ(e.getOptions().stackParser, s._key, s._limit, r, n) : r
            })
        }
    }
    Gs.__initStatic();

    function lZ(t, e, r, n, s) {
        if (!n.exception || !n.exception.values || !s || !bi(s.originalException, Error)) return n;
        var o = JO(t, r, s.originalException, e);
        return n.exception.values = [...o, ...n.exception.values], n
    }

    function JO(t, e, r, n, s = []) {
        if (!bi(r[n], Error) || s.length + 1 >= e) return s;
        var o = HO(t, r[n]);
        return JO(t, e, r[n], n, [o, ...s])
    }
    var Ui = Yt();
    class Ws {
        constructor() {
            Ws.prototype.__init.call(this)
        }
        static __initStatic() {
            this.id = "HttpContext"
        }
        __init() {
            this.name = Ws.id
        }
        setupOnce() {
            WO(e => {
                if (Pr().getIntegration(Ws)) {
                    if (!Ui.navigator && !Ui.location && !Ui.document) return e;
                    var r = e.request && e.request.url || Ui.location && Ui.location.href;
                    const {
                        referrer: o
                    } = Ui.document || {}, {
                        userAgent: c
                    } = Ui.navigator || {};
                    var n = {
                            ...e.request && e.request.headers,
                            ...o && {
                                Referer: o
                            },
                            ...c && {
                                "User-Agent": c
                            }
                        },
                        s = {
                            ...r && {
                                url: r
                            },
                            headers: n
                        };
                    return {
                        ...e,
                        request: s
                    }
                }
                return e
            })
        }
    }
    Ws.__initStatic();
    class Ks {
        constructor() {
            Ks.prototype.__init.call(this)
        }
        static __initStatic() {
            this.id = "Dedupe"
        }
        __init() {
            this.name = Ks.id
        }
        setupOnce(e, r) {
            var n = s => {
                var o = r().getIntegration(Ks);
                if (o) {
                    try {
                        if (uZ(s, o._previousEvent)) return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Bt.warn("Event dropped due to being a duplicate of previously captured event."), null
                    } catch {
                        return o._previousEvent = s
                    }
                    return o._previousEvent = s
                }
                return s
            };
            n.id = this.name, e(n)
        }
    }
    Ks.__initStatic();

    function uZ(t, e) {
        return e ? !!(fZ(t, e) || dZ(t, e)) : !1
    }

    function fZ(t, e) {
        var r = t.message,
            n = e.message;
        return !(!r && !n || r && !n || !r && n || r !== n || !QO(t, e) || !ZO(t, e))
    }

    function dZ(t, e) {
        var r = hE(e),
            n = hE(t);
        return !(!r || !n || r.type !== n.type || r.value !== n.value || !QO(t, e) || !ZO(t, e))
    }

    function ZO(t, e) {
        let r = pE(t),
            n = pE(e);
        if (!r && !n) return !0;
        if (r && !n || !r && n || (r = r, n = n, n.length !== r.length)) return !1;
        for (let c = 0; c < n.length; c++) {
            var s = n[c],
                o = r[c];
            if (s.filename !== o.filename || s.lineno !== o.lineno || s.colno !== o.colno || s.function !== o.function) return !1
        }
        return !0
    }

    function QO(t, e) {
        let r = t.fingerprint,
            n = e.fingerprint;
        if (!r && !n) return !0;
        if (r && !n || !r && n) return !1;
        r = r, n = n;
        try {
            return r.join("") === n.join("")
        } catch {
            return !1
        }
    }

    function hE(t) {
        return t.exception && t.exception.values && t.exception.values[0]
    }

    function pE(t) {
        var e = t.exception;
        if (e) try {
            return e.values[0].stacktrace.frames
        } catch {
            return
        }
    }
    new js, new eo, new ro, new to, new ci, new Gs, new Ks, new Ws;

    function hZ(t = {}, e = Pr()) {
        var r = Yt();
        if (!r.document) {
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Bt.error("Global document not defined in showReportDialog call");
            return
        }
        const {
            client: n,
            scope: s
        } = e.getStackTop();
        var o = t.dsn || n && n.getDsn();
        if (!o) {
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Bt.error("DSN not configured for showReportDialog call");
            return
        }
        s && (t.user = {
            ...s.getUser(),
            ...t.user
        }), t.eventId || (t.eventId = e.lastEventId());
        var c = r.document.createElement("script");
        c.async = !0, c.src = NJ(o, t), t.onLoad && (c.onload = t.onLoad);
        var u = r.document.head || r.document.body;
        u ? u.appendChild(c) : (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Bt.error("Not injecting report dialog. No injection point found in HTML")
    }
    const pZ = vt({
            setup() {
                return {
                    fatalError: Ji(po.fatal.error)
                }
            },
            computed: {
                message() {
                    var n, s, o, c, u;
                    const t = (o = (s = (n = this.fatalError) == null ? void 0 : n.event) == null ? void 0 : s.event_id) != null ? o : "Unknown";
                    let e = "";
                    const r = (u = (c = this.fatalError) == null ? void 0 : c.hint) == null ? void 0 : u.originalException;
                    return r ? typeof r == "string" ? e = r : e = r.message : e = "An unknown error occured", `Version:
${window.tv.manifest.loader.version}

Event ID:
${t}

${e}`
                }
            },
            methods: {
                onFeedbackClick() {
                    var t, e, r;
                    hZ({
                        id: (r = (e = (t = this.fatalError) == null ? void 0 : t.event) == null ? void 0 : e.event_id) != null ? r : "Unknown"
                    })
                }
            }
        }),
        mo = t => (vh("data-v-a7272d53"), t = t(), yh(), t),
        gZ = {
            class: "jbg fatal"
        },
        mZ = {
            class: "constrain"
        },
        vZ = mo(() => ae("a", {
            class: "logo",
            href: "/",
            "aria-label": "Jackbox Games Logo"
        }, null, -1)),
        yZ = {
            class: "content"
        },
        _Z = mo(() => ae("h1", null, "You have encountered an error", -1)),
        EZ = mo(() => ae("p", null, "Something went wrong! But don't worry, you can try a few things to get going.", -1)),
        bZ = mo(() => ae("ul", null, [ae("li", null, "Refresh the page"), ae("li", null, "Turn off adblockers or other browser extensions."), ae("li", null, "Check your connection to the Internet."), ae("li", null, "Make sure you're using an up-to-date browser."), ae("li", null, "If that doesn't work, let us know.")], -1)),
        TZ = mo(() => ae("hr", null, null, -1)),
        SZ = {
            class: "error"
        };

    function OZ(t, e, r, n, s, o) {
        return se(), le("div", gZ, [ae("div", mZ, [vZ, ae("div", yZ, [_Z, EZ, bZ, ae("button", {
            onClick: e[0] || (e[0] = (...c) => t.onFeedbackClick && t.onFeedbackClick(...c))
        }, "Tell us what happened"), TZ, ae("pre", SZ, Tt(t.message), 1)])])])
    }
    const wZ = $t(pZ, [
            ["render", OZ],
            ["__scopeId", "data-v-a7272d53"]
        ]),
        Sc = Mn({
            hasCrashed: !1
        }),
        CZ = {
            install: t => {
                if (t.config.globalProperties.$handleEcastError) return;
                t.provide(po.fatal.error, Rr(() => Sc));
                const e = (r, n) => {
                    var s, o;
                    if (r instanceof Fa.EcastEntityNotFound || r instanceof Fa.EcastFilterError || r instanceof Fa.EcastRateLimitExceeded || r instanceof Error && ((s = r.message) == null ? void 0 : s.includes("Socket not ready to send")) || r instanceof Error && ((o = r.message) == null ? void 0 : o.includes("No connection available"))) return console.warn(r);
                    throw n ? console.error(n, r) : console.error(r), r
                };
                window.tv.onError = async (r, n) => {
                    if (r.level === "error" && (Sc.hasCrashed = !0, Sc.event = r, Sc.hint = n), t.config.globalProperties.$debugRecorder) return await t.config.globalProperties.$debugRecorder.sendToEcast()
                }, t.component("Fatal", wZ), t.config.globalProperties.$handleEcastError = e
            }
        };
    var IZ = IO,
        $Z = $O;

    function AZ(t, e) {
        e = IZ(e, t);
        for (var r = 0, n = e.length; t != null && r < n;) t = t[$Z(e[r++])];
        return r && r == n ? t : void 0
    }
    var RZ = AZ,
        NZ = RZ;

    function PZ(t, e, r) {
        var n = t == null ? void 0 : NZ(t, e);
        return n === void 0 ? r : n
    }
    var LZ = PZ,
        kZ = Math.floor,
        xZ = Math.random;

    function DZ(t, e) {
        return t + kZ(xZ() * (e - t + 1))
    }
    var MZ = DZ,
        FZ = MZ;

    function UZ(t) {
        var e = t.length;
        return e ? t[FZ(0, e - 1)] : void 0
    }
    var ew = UZ,
        BZ = wO;

    function jZ(t, e) {
        return BZ(e, function(r) {
            return t[r]
        })
    }
    var GZ = jZ,
        WZ = GZ,
        KZ = Dl;

    function HZ(t) {
        return t == null ? [] : WZ(t, KZ(t))
    }
    var VZ = HZ,
        YZ = ew,
        qZ = VZ;

    function zZ(t) {
        return YZ(qZ(t))
    }
    var XZ = zZ,
        JZ = ew,
        ZZ = XZ,
        QZ = mi;

    function eQ(t) {
        var e = QZ(t) ? JZ : ZZ;
        return e(t)
    }
    var tQ = eQ;

    function gE(t, e) {
        const r = t.global.locale,
            n = t.global.messages[r],
            s = LZ(n, e);
        return Array.isArray(s) || console.warn(`[i18nPlugin] Translation with key ${e} is not an array`), tQ(s)
    }
    const rQ = {
            install: (t, e) => {
                t.directive("ts", (r, n) => {
                    const s = gE(e.i18n, n.value);
                    r.textContent = s || ""
                }), t.config.globalProperties.$ts = function(n) {
                    return gE(e.i18n, n) || ""
                }, t.config.globalProperties.$t = e.i18n.global.t, t.config.globalProperties.$tc = e.i18n.global.tc, t.config.globalProperties.$te = e.i18n.global.te, t.config.globalProperties.$tm = e.i18n.global.tm
            }
        },
        nQ = vt({
            props: {
                image: String,
                text: String,
                subtext: String,
                classes: {
                    type: [Array, String],
                    default: () => "jbg"
                },
                dismissText: String
            }
        }),
        iQ = "main/internal/prototype/assets/928ef0da.png",
        sQ = "main/internal/prototype/assets/0bb76a2d.png",
        aQ = "main/internal/prototype/assets/ed4469b3.png",
        oQ = {
            key: 0,
            class: "image",
            src: iQ,
            alt: "Kicked"
        },
        cQ = {
            key: 1,
            class: "image",
            src: sQ,
            alt: "Thank You"
        },
        lQ = {
            key: 2,
            class: "image",
            src: aQ,
            alt: "Error"
        },
        uQ = {
            class: "text"
        },
        fQ = {
            key: 3,
            class: "subtext"
        },
        dQ = {
            class: "actions"
        };

    function hQ(t, e, r, n, s, o) {
        const c = qr("bb");
        return se(), le("div", {
            class: qe(["error-model", t.classes])
        }, [t.image === "tear" ? (se(), le("img", oQ)) : t.image === "moon" ? (se(), le("img", cQ)) : (se(), le("img", lQ)), tt(ae("h3", uQ, null, 512), [
            [c, t.text]
        ]), t.subtext ? tt((se(), le("h3", fQ, null, 512)), [
            [c, t.subtext]
        ]) : We("", !0), ae("div", dQ, [tt(ae("button", {
            onClick: e[0] || (e[0] = cn(u => t.$emit("resolve"), ["prevent"]))
        }, null, 512), [
            [c, t.dismissText]
        ])])], 2)
    }
    const pQ = $t(nQ, [
            ["render", hQ],
            ["__scopeId", "data-v-39debcb6"]
        ]),
        gQ = vt({
            props: {
                text: String,
                subtext: String,
                classes: {
                    type: [Array, String],
                    default: () => "jbg"
                },
                options: Array
            }
        }),
        mQ = {
            class: "text"
        },
        vQ = {
            key: 0,
            class: "subtext"
        },
        yQ = {
            class: "actions"
        },
        _Q = ["onClick"];

    function EQ(t, e, r, n, s, o) {
        const c = qr("bb");
        return se(), le("div", {
            class: qe(["options-modal", t.classes])
        }, [tt(ae("h3", mQ, null, 512), [
            [c, t.text]
        ]), t.subtext ? tt((se(), le("h3", vQ, null, 512)), [
            [c, t.subtext]
        ]) : We("", !0), ae("div", yQ, [(se(!0), le(It, null, io(t.options, (u, f) => tt((se(), le("button", {
            key: f,
            class: qe(u.classes),
            onClick: cn(h => t.$emit("resolve", u.value), ["prevent"])
        }, null, 10, _Q)), [
            [c, u.text]
        ])), 128))])], 2)
    }
    const bQ = $t(gQ, [
            ["render", EQ],
            ["__scopeId", "data-v-fdbdeb06"]
        ]),
        TQ = vt({
            data() {
                return {
                    classes: "jbg",
                    props: null,
                    resolve: null,
                    content: null
                }
            },
            beforeMount() {
                this.$registerModal(this)
            },
            methods: {
                show(t, e = {}, r = {}) {
                    return this.props = e, this.classes = r.classes || "jbg", t === "Error" ? this.content = pQ : t === "Options" ? this.content = bQ : this.content = t, new Promise(n => {
                        this.resolve = n
                    })
                },
                onResolve(...t) {
                    this.props = null, this.resolve(...t)
                },
                onBackgroundClick() {
                    this.props = null, this.resolve()
                }
            }
        });

    function SQ(t, e, r, n, s, o) {
        return se(), ui(gl, {
            name: "modal-transition"
        }, {
            default: _h(() => [t.props ? (se(), le("div", {
                key: 0,
                class: qe(["modal", t.classes]),
                onKeyup: e[0] || (e[0] = Wb((...c) => t.onBackgroundClick && t.onBackgroundClick(...c), ["esc"])),
                onClick: e[1] || (e[1] = cn((...c) => t.onBackgroundClick && t.onBackgroundClick(...c), ["self"]))
            }, [t.content ? (se(), ui(Sh(t.content), $h({
                key: 0,
                class: "content"
            }, t.props, {
                onResolve: t.onResolve
            }), null, 16, ["onResolve"])) : We("", !0)], 34)) : We("", !0)]),
            _: 1
        })
    }
    const OQ = $t(TQ, [
            ["render", SQ],
            ["__scopeId", "data-v-dc92e8d3"]
        ]),
        wQ = {
            install: t => {
                if (t.config.globalProperties.$showModal) return;
                let e;
                const r = (s, o, c) => {
                        if (!e) throw new Error("No ModalComponent is registered");
                        return e.show(s, o, c)
                    },
                    n = s => {
                        e = s
                    };
                t.component("Modal", OQ), t.config.globalProperties.$showModal = r, t.config.globalProperties.$registerModal = n
            }
        },
        CQ = vt({
            setup() {
                return {
                    announcment: Ji(po.textDescriptions.announcement)
                }
            },
            ecastKeys: {
                textDescriptions: "textDescriptions"
            },
            data() {
                return {
                    lines: []
                }
            },
            computed: {
                textDescriptions() {
                    return !this.$ecastValues || !this.$ecastValues.textDescriptions ? null : this.$ecastValues.textDescriptions
                }
            },
            watch: {
                announcment: function(e) {
                    this.lines.push({
                        id: Math.random(),
                        category: "announce",
                        text: e
                    })
                },
                "textDescriptions.latestDescriptions": function(e) {
                    !e || !e.length || e.forEach(r => {
                        r.id !== void 0 && this.lines.find(n => n.id === r.id) || this.lines.push(r)
                    })
                }
            }
        }),
        IQ = {
            class: "text-descriptions",
            role: "log",
            "aria-atomic": "false",
            "aria-relevant": "additions",
            "aria-live": "polite"
        };

    function $Q(t, e, r, n, s, o) {
        return se(), le("div", IQ, [(se(!0), le(It, null, io(t.lines, c => (se(), le("p", {
            key: c.id
        }, Tt(c.text), 1))), 128))])
    }
    const AQ = $t(CQ, [
            ["render", $Q]
        ]),
        mE = rn(""),
        RQ = {
            install: t => {
                if (t.config.globalProperties.$announce) return;
                t.provide(po.textDescriptions.announcement, Rr(() => mE.value));
                const e = r => {
                    mE.value = r
                };
                t.component("TextDescriptions", AQ), t.config.globalProperties.$announce = e
            }
        },
        NQ = {
            install: t => {
                let e = "",
                    r = "";
                const n = o => o instanceof Function ? o() : o,
                    s = o => {
                        const c = document.querySelector('meta[name="theme-color"]');
                        !c || (document.body && (document.body.style.background = o), c.setAttribute("content", o), r = o)
                    };
                t.config.globalProperties.$setThemeColor = function(c) {
                    this.$options.themeColor = c, s(c)
                }, t.mixin({
                    mounted() {
                        if (!this.$options.themeColor) return;
                        const o = n(this.$options.themeColor);
                        s(o), this.$attrs.name === "game" && (e = o)
                    },
                    beforeDestroy() {
                        !this.$options.themeColor || n(this.$options.themeColor) !== r || s(e)
                    }
                })
            }
        },
        PQ = {
            install: t => {
                t.config.globalProperties.$vibrate = (e = [100, 100]) => {
                    var r;
                    if (!((r = window.navigator) != null && r.vibrate)) return !1;
                    try {
                        return window.navigator.vibrate(e), !0
                    } catch {
                        return !1
                    }
                }
            }
        };
    /*!
     * shared v9.2.2
     * (c) 2022 kazuya kawaguchi
     * Released under the MIT License.
     */
    const qd = typeof window < "u",
        LQ = typeof Symbol == "function" && typeof Symbol.toStringTag == "symbol",
        Ti = t => LQ ? Symbol(t) : t,
        kQ = (t, e, r) => xQ({
            l: t,
            k: e,
            s: r
        }),
        xQ = t => JSON.stringify(t).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"),
        Ut = t => typeof t == "number" && isFinite(t),
        DQ = t => Np(t) === "[object Date]",
        pi = t => Np(t) === "[object RegExp]",
        jl = t => Me(t) && Object.keys(t).length === 0;

    function MQ(t, e) {
        typeof console < "u" && (console.warn("[intlify] " + t), e && console.warn(e.stack))
    }
    const Zt = Object.assign;

    function vE(t) {
        return t.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
    }
    const FQ = Object.prototype.hasOwnProperty;

    function Rp(t, e) {
        return FQ.call(t, e)
    }
    const gt = Array.isArray,
        Nt = t => typeof t == "function",
        ye = t => typeof t == "string",
        ze = t => typeof t == "boolean",
        mt = t => t !== null && typeof t == "object",
        tw = Object.prototype.toString,
        Np = t => tw.call(t),
        Me = t => Np(t) === "[object Object]",
        UQ = t => t == null ? "" : gt(t) || Me(t) && t.toString === tw ? JSON.stringify(t, null, 2) : String(t);
    /*!
     * message-compiler v9.2.2
     * (c) 2022 kazuya kawaguchi
     * Released under the MIT License.
     */
    const Qe = {
        EXPECTED_TOKEN: 1,
        INVALID_TOKEN_IN_PLACEHOLDER: 2,
        UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
        UNKNOWN_ESCAPE_SEQUENCE: 4,
        INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
        UNBALANCED_CLOSING_BRACE: 6,
        UNTERMINATED_CLOSING_BRACE: 7,
        EMPTY_PLACEHOLDER: 8,
        NOT_ALLOW_NEST_PLACEHOLDER: 9,
        INVALID_LINKED_FORMAT: 10,
        MUST_HAVE_MESSAGES_IN_PLURAL: 11,
        UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
        UNEXPECTED_EMPTY_LINKED_KEY: 13,
        UNEXPECTED_LEXICAL_ANALYSIS: 14,
        __EXTEND_POINT__: 15
    };

    function Gl(t, e, r = {}) {
        const {
            domain: n,
            messages: s,
            args: o
        } = r, c = t, u = new SyntaxError(String(c));
        return u.code = t, e && (u.location = e), u.domain = n, u
    }

    function BQ(t) {
        throw t
    }

    function jQ(t, e, r) {
        return {
            line: t,
            column: e,
            offset: r
        }
    }

    function zd(t, e, r) {
        const n = {
            start: t,
            end: e
        };
        return r != null && (n.source = r), n
    }
    const Pn = " ",
        GQ = "\r",
        dr = `
`,
        WQ = String.fromCharCode(8232),
        KQ = String.fromCharCode(8233);

    function HQ(t) {
        const e = t;
        let r = 0,
            n = 1,
            s = 1,
            o = 0;
        const c = ie => e[ie] === GQ && e[ie + 1] === dr,
            u = ie => e[ie] === dr,
            f = ie => e[ie] === KQ,
            h = ie => e[ie] === WQ,
            m = ie => c(ie) || u(ie) || f(ie) || h(ie),
            _ = () => r,
            b = () => n,
            C = () => s,
            L = () => o,
            M = ie => c(ie) || f(ie) || h(ie) ? dr : e[ie],
            B = () => M(r),
            I = () => M(r + o);

        function K() {
            return o = 0, m(r) && (n++, s = 0), c(r) && r++, r++, s++, e[r]
        }

        function Y() {
            return c(r + o) && o++, o++, e[r + o]
        }

        function G() {
            r = 0, n = 1, s = 1, o = 0
        }

        function j(ie = 0) {
            o = ie
        }

        function z() {
            const ie = r + o;
            for (; ie !== r;) K();
            o = 0
        }
        return {
            index: _,
            line: b,
            column: C,
            peekOffset: L,
            charAt: M,
            currentChar: B,
            currentPeek: I,
            next: K,
            peek: Y,
            reset: G,
            resetPeek: j,
            skipToPeek: z
        }
    }
    const Qn = void 0,
        yE = "'",
        VQ = "tokenizer";

    function YQ(t, e = {}) {
        const r = e.location !== !1,
            n = HQ(t),
            s = () => n.index(),
            o = () => jQ(n.line(), n.column(), n.index()),
            c = o(),
            u = s(),
            f = {
                currentType: 14,
                offset: u,
                startLoc: c,
                endLoc: c,
                lastType: 14,
                lastOffset: u,
                lastStartLoc: c,
                lastEndLoc: c,
                braceNest: 0,
                inLinked: !1,
                text: ""
            },
            h = () => f,
            {
                onError: m
            } = e;

        function _(g, p, O, ...D) {
            const U = h();
            if (p.column += O, p.offset += O, m) {
                const V = zd(U.startLoc, p),
                    ce = Gl(g, V, {
                        domain: VQ,
                        args: D
                    });
                m(ce)
            }
        }

        function b(g, p, O) {
            g.endLoc = o(), g.currentType = p;
            const D = {
                type: p
            };
            return r && (D.loc = zd(g.startLoc, g.endLoc)), O != null && (D.value = O), D
        }
        const C = g => b(g, 14);

        function L(g, p) {
            return g.currentChar() === p ? (g.next(), p) : (_(Qe.EXPECTED_TOKEN, o(), 0, p), "")
        }

        function M(g) {
            let p = "";
            for (; g.currentPeek() === Pn || g.currentPeek() === dr;) p += g.currentPeek(), g.peek();
            return p
        }

        function B(g) {
            const p = M(g);
            return g.skipToPeek(), p
        }

        function I(g) {
            if (g === Qn) return !1;
            const p = g.charCodeAt(0);
            return p >= 97 && p <= 122 || p >= 65 && p <= 90 || p === 95
        }

        function K(g) {
            if (g === Qn) return !1;
            const p = g.charCodeAt(0);
            return p >= 48 && p <= 57
        }

        function Y(g, p) {
            const {
                currentType: O
            } = p;
            if (O !== 2) return !1;
            M(g);
            const D = I(g.currentPeek());
            return g.resetPeek(), D
        }

        function G(g, p) {
            const {
                currentType: O
            } = p;
            if (O !== 2) return !1;
            M(g);
            const D = g.currentPeek() === "-" ? g.peek() : g.currentPeek(),
                U = K(D);
            return g.resetPeek(), U
        }

        function j(g, p) {
            const {
                currentType: O
            } = p;
            if (O !== 2) return !1;
            M(g);
            const D = g.currentPeek() === yE;
            return g.resetPeek(), D
        }

        function z(g, p) {
            const {
                currentType: O
            } = p;
            if (O !== 8) return !1;
            M(g);
            const D = g.currentPeek() === ".";
            return g.resetPeek(), D
        }

        function ie(g, p) {
            const {
                currentType: O
            } = p;
            if (O !== 9) return !1;
            M(g);
            const D = I(g.currentPeek());
            return g.resetPeek(), D
        }

        function oe(g, p) {
            const {
                currentType: O
            } = p;
            if (!(O === 8 || O === 12)) return !1;
            M(g);
            const D = g.currentPeek() === ":";
            return g.resetPeek(), D
        }

        function ue(g, p) {
            const {
                currentType: O
            } = p;
            if (O !== 10) return !1;
            const D = () => {
                    const V = g.currentPeek();
                    return V === "{" ? I(g.peek()) : V === "@" || V === "%" || V === "|" || V === ":" || V === "." || V === Pn || !V ? !1 : V === dr ? (g.peek(), D()) : I(V)
                },
                U = D();
            return g.resetPeek(), U
        }

        function Ie(g) {
            M(g);
            const p = g.currentPeek() === "|";
            return g.resetPeek(), p
        }

        function Ce(g) {
            const p = M(g),
                O = g.currentPeek() === "%" && g.peek() === "{";
            return g.resetPeek(), {
                isModulo: O,
                hasSpace: p.length > 0
            }
        }

        function fe(g, p = !0) {
            const O = (U = !1, V = "", ce = !1) => {
                    const re = g.currentPeek();
                    return re === "{" ? V === "%" ? !1 : U : re === "@" || !re ? V === "%" ? !0 : U : re === "%" ? (g.peek(), O(U, "%", !0)) : re === "|" ? V === "%" || ce ? !0 : !(V === Pn || V === dr) : re === Pn ? (g.peek(), O(!0, Pn, ce)) : re === dr ? (g.peek(), O(!0, dr, ce)) : !0
                },
                D = O();
            return p && g.resetPeek(), D
        }

        function we(g, p) {
            const O = g.currentChar();
            return O === Qn ? Qn : p(O) ? (g.next(), O) : null
        }

        function F(g) {
            return we(g, O => {
                const D = O.charCodeAt(0);
                return D >= 97 && D <= 122 || D >= 65 && D <= 90 || D >= 48 && D <= 57 || D === 95 || D === 36
            })
        }

        function te(g) {
            return we(g, O => {
                const D = O.charCodeAt(0);
                return D >= 48 && D <= 57
            })
        }

        function de(g) {
            return we(g, O => {
                const D = O.charCodeAt(0);
                return D >= 48 && D <= 57 || D >= 65 && D <= 70 || D >= 97 && D <= 102
            })
        }

        function Ee(g) {
            let p = "",
                O = "";
            for (; p = te(g);) O += p;
            return O
        }

        function ve(g) {
            B(g);
            const p = g.currentChar();
            return p !== "%" && _(Qe.EXPECTED_TOKEN, o(), 0, p), g.next(), "%"
        }

        function Se(g) {
            let p = "";
            for (;;) {
                const O = g.currentChar();
                if (O === "{" || O === "}" || O === "@" || O === "|" || !O) break;
                if (O === "%")
                    if (fe(g)) p += O, g.next();
                    else break;
                else if (O === Pn || O === dr)
                    if (fe(g)) p += O, g.next();
                    else {
                        if (Ie(g)) break;
                        p += O, g.next()
                    }
                else p += O, g.next()
            }
            return p
        }

        function xe(g) {
            B(g);
            let p = "",
                O = "";
            for (; p = F(g);) O += p;
            return g.currentChar() === Qn && _(Qe.UNTERMINATED_CLOSING_BRACE, o(), 0), O
        }

        function Ue(g) {
            B(g);
            let p = "";
            return g.currentChar() === "-" ? (g.next(), p += `-${Ee(g)}`) : p += Ee(g), g.currentChar() === Qn && _(Qe.UNTERMINATED_CLOSING_BRACE, o(), 0), p
        }

        function Ze(g) {
            B(g), L(g, "'");
            let p = "",
                O = "";
            const D = V => V !== yE && V !== dr;
            for (; p = we(g, D);) p === "\\" ? O += wt(g) : O += p;
            const U = g.currentChar();
            return U === dr || U === Qn ? (_(Qe.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, o(), 0), U === dr && (g.next(), L(g, "'")), O) : (L(g, "'"), O)
        }

        function wt(g) {
            const p = g.currentChar();
            switch (p) {
                case "\\":
                case "'":
                    return g.next(), `\\${p}`;
                case "u":
                    return Sr(g, p, 4);
                case "U":
                    return Sr(g, p, 6);
                default:
                    return _(Qe.UNKNOWN_ESCAPE_SEQUENCE, o(), 0, p), ""
            }
        }

        function Sr(g, p, O) {
            L(g, p);
            let D = "";
            for (let U = 0; U < O; U++) {
                const V = de(g);
                if (!V) {
                    _(Qe.INVALID_UNICODE_ESCAPE_SEQUENCE, o(), 0, `\\${p}${D}${g.currentChar()}`);
                    break
                }
                D += V
            }
            return `\\${p}${D}`
        }

        function er(g) {
            B(g);
            let p = "",
                O = "";
            const D = U => U !== "{" && U !== "}" && U !== Pn && U !== dr;
            for (; p = we(g, D);) O += p;
            return O
        }

        function pr(g) {
            let p = "",
                O = "";
            for (; p = F(g);) O += p;
            return O
        }

        function nt(g) {
            const p = (O = !1, D) => {
                const U = g.currentChar();
                return U === "{" || U === "%" || U === "@" || U === "|" || !U || U === Pn ? D : U === dr ? (D += U, g.next(), p(O, D)) : (D += U, g.next(), p(!0, D))
            };
            return p(!1, "")
        }

        function Et(g) {
            B(g);
            const p = L(g, "|");
            return B(g), p
        }

        function it(g, p) {
            let O = null;
            switch (g.currentChar()) {
                case "{":
                    return p.braceNest >= 1 && _(Qe.NOT_ALLOW_NEST_PLACEHOLDER, o(), 0), g.next(), O = b(p, 2, "{"), B(g), p.braceNest++, O;
                case "}":
                    return p.braceNest > 0 && p.currentType === 2 && _(Qe.EMPTY_PLACEHOLDER, o(), 0), g.next(), O = b(p, 3, "}"), p.braceNest--, p.braceNest > 0 && B(g), p.inLinked && p.braceNest === 0 && (p.inLinked = !1), O;
                case "@":
                    return p.braceNest > 0 && _(Qe.UNTERMINATED_CLOSING_BRACE, o(), 0), O = Lt(g, p) || C(p), p.braceNest = 0, O;
                default:
                    let U = !0,
                        V = !0,
                        ce = !0;
                    if (Ie(g)) return p.braceNest > 0 && _(Qe.UNTERMINATED_CLOSING_BRACE, o(), 0), O = b(p, 1, Et(g)), p.braceNest = 0, p.inLinked = !1, O;
                    if (p.braceNest > 0 && (p.currentType === 5 || p.currentType === 6 || p.currentType === 7)) return _(Qe.UNTERMINATED_CLOSING_BRACE, o(), 0), p.braceNest = 0, Wt(g, p);
                    if (U = Y(g, p)) return O = b(p, 5, xe(g)), B(g), O;
                    if (V = G(g, p)) return O = b(p, 6, Ue(g)), B(g), O;
                    if (ce = j(g, p)) return O = b(p, 7, Ze(g)), B(g), O;
                    if (!U && !V && !ce) return O = b(p, 13, er(g)), _(Qe.INVALID_TOKEN_IN_PLACEHOLDER, o(), 0, O.value), B(g), O;
                    break
            }
            return O
        }

        function Lt(g, p) {
            const {
                currentType: O
            } = p;
            let D = null;
            const U = g.currentChar();
            switch ((O === 8 || O === 9 || O === 12 || O === 10) && (U === dr || U === Pn) && _(Qe.INVALID_LINKED_FORMAT, o(), 0), U) {
                case "@":
                    return g.next(), D = b(p, 8, "@"), p.inLinked = !0, D;
                case ".":
                    return B(g), g.next(), b(p, 9, ".");
                case ":":
                    return B(g), g.next(), b(p, 10, ":");
                default:
                    return Ie(g) ? (D = b(p, 1, Et(g)), p.braceNest = 0, p.inLinked = !1, D) : z(g, p) || oe(g, p) ? (B(g), Lt(g, p)) : ie(g, p) ? (B(g), b(p, 12, pr(g))) : ue(g, p) ? (B(g), U === "{" ? it(g, p) || D : b(p, 11, nt(g))) : (O === 8 && _(Qe.INVALID_LINKED_FORMAT, o(), 0), p.braceNest = 0, p.inLinked = !1, Wt(g, p))
            }
        }

        function Wt(g, p) {
            let O = {
                type: 14
            };
            if (p.braceNest > 0) return it(g, p) || C(p);
            if (p.inLinked) return Lt(g, p) || C(p);
            switch (g.currentChar()) {
                case "{":
                    return it(g, p) || C(p);
                case "}":
                    return _(Qe.UNBALANCED_CLOSING_BRACE, o(), 0), g.next(), b(p, 3, "}");
                case "@":
                    return Lt(g, p) || C(p);
                default:
                    if (Ie(g)) return O = b(p, 1, Et(g)), p.braceNest = 0, p.inLinked = !1, O;
                    const {
                        isModulo: U, hasSpace: V
                    } = Ce(g);
                    if (U) return V ? b(p, 0, Se(g)) : b(p, 4, ve(g));
                    if (fe(g)) return b(p, 0, Se(g));
                    break
            }
            return O
        }

        function kt() {
            const {
                currentType: g,
                offset: p,
                startLoc: O,
                endLoc: D
            } = f;
            return f.lastType = g, f.lastOffset = p, f.lastStartLoc = O, f.lastEndLoc = D, f.offset = s(), f.startLoc = o(), n.currentChar() === Qn ? b(f, 14) : Wt(n, f)
        }
        return {
            nextToken: kt,
            currentOffset: s,
            currentPosition: o,
            context: h
        }
    }
    const qQ = "parser",
        zQ = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;

    function XQ(t, e, r) {
        switch (t) {
            case "\\\\":
                return "\\";
            case "\\'":
                return "'";
            default: {
                const n = parseInt(e || r, 16);
                return n <= 55295 || n >= 57344 ? String.fromCodePoint(n) : "\uFFFD"
            }
        }
    }

    function JQ(t = {}) {
        const e = t.location !== !1,
            {
                onError: r
            } = t;

        function n(I, K, Y, G, ...j) {
            const z = I.currentPosition();
            if (z.offset += G, z.column += G, r) {
                const ie = zd(Y, z),
                    oe = Gl(K, ie, {
                        domain: qQ,
                        args: j
                    });
                r(oe)
            }
        }

        function s(I, K, Y) {
            const G = {
                type: I,
                start: K,
                end: K
            };
            return e && (G.loc = {
                start: Y,
                end: Y
            }), G
        }

        function o(I, K, Y, G) {
            I.end = K, G && (I.type = G), e && I.loc && (I.loc.end = Y)
        }

        function c(I, K) {
            const Y = I.context(),
                G = s(3, Y.offset, Y.startLoc);
            return G.value = K, o(G, I.currentOffset(), I.currentPosition()), G
        }

        function u(I, K) {
            const Y = I.context(),
                {
                    lastOffset: G,
                    lastStartLoc: j
                } = Y,
                z = s(5, G, j);
            return z.index = parseInt(K, 10), I.nextToken(), o(z, I.currentOffset(), I.currentPosition()), z
        }

        function f(I, K) {
            const Y = I.context(),
                {
                    lastOffset: G,
                    lastStartLoc: j
                } = Y,
                z = s(4, G, j);
            return z.key = K, I.nextToken(), o(z, I.currentOffset(), I.currentPosition()), z
        }

        function h(I, K) {
            const Y = I.context(),
                {
                    lastOffset: G,
                    lastStartLoc: j
                } = Y,
                z = s(9, G, j);
            return z.value = K.replace(zQ, XQ), I.nextToken(), o(z, I.currentOffset(), I.currentPosition()), z
        }

        function m(I) {
            const K = I.nextToken(),
                Y = I.context(),
                {
                    lastOffset: G,
                    lastStartLoc: j
                } = Y,
                z = s(8, G, j);
            return K.type !== 12 ? (n(I, Qe.UNEXPECTED_EMPTY_LINKED_MODIFIER, Y.lastStartLoc, 0), z.value = "", o(z, G, j), {
                nextConsumeToken: K,
                node: z
            }) : (K.value == null && n(I, Qe.UNEXPECTED_LEXICAL_ANALYSIS, Y.lastStartLoc, 0, mn(K)), z.value = K.value || "", o(z, I.currentOffset(), I.currentPosition()), {
                node: z
            })
        }

        function _(I, K) {
            const Y = I.context(),
                G = s(7, Y.offset, Y.startLoc);
            return G.value = K, o(G, I.currentOffset(), I.currentPosition()), G
        }

        function b(I) {
            const K = I.context(),
                Y = s(6, K.offset, K.startLoc);
            let G = I.nextToken();
            if (G.type === 9) {
                const j = m(I);
                Y.modifier = j.node, G = j.nextConsumeToken || I.nextToken()
            }
            switch (G.type !== 10 && n(I, Qe.UNEXPECTED_LEXICAL_ANALYSIS, K.lastStartLoc, 0, mn(G)), G = I.nextToken(), G.type === 2 && (G = I.nextToken()), G.type) {
                case 11:
                    G.value == null && n(I, Qe.UNEXPECTED_LEXICAL_ANALYSIS, K.lastStartLoc, 0, mn(G)), Y.key = _(I, G.value || "");
                    break;
                case 5:
                    G.value == null && n(I, Qe.UNEXPECTED_LEXICAL_ANALYSIS, K.lastStartLoc, 0, mn(G)), Y.key = f(I, G.value || "");
                    break;
                case 6:
                    G.value == null && n(I, Qe.UNEXPECTED_LEXICAL_ANALYSIS, K.lastStartLoc, 0, mn(G)), Y.key = u(I, G.value || "");
                    break;
                case 7:
                    G.value == null && n(I, Qe.UNEXPECTED_LEXICAL_ANALYSIS, K.lastStartLoc, 0, mn(G)), Y.key = h(I, G.value || "");
                    break;
                default:
                    n(I, Qe.UNEXPECTED_EMPTY_LINKED_KEY, K.lastStartLoc, 0);
                    const j = I.context(),
                        z = s(7, j.offset, j.startLoc);
                    return z.value = "", o(z, j.offset, j.startLoc), Y.key = z, o(Y, j.offset, j.startLoc), {
                        nextConsumeToken: G,
                        node: Y
                    }
            }
            return o(Y, I.currentOffset(), I.currentPosition()), {
                node: Y
            }
        }

        function C(I) {
            const K = I.context(),
                Y = K.currentType === 1 ? I.currentOffset() : K.offset,
                G = K.currentType === 1 ? K.endLoc : K.startLoc,
                j = s(2, Y, G);
            j.items = [];
            let z = null;
            do {
                const ue = z || I.nextToken();
                switch (z = null, ue.type) {
                    case 0:
                        ue.value == null && n(I, Qe.UNEXPECTED_LEXICAL_ANALYSIS, K.lastStartLoc, 0, mn(ue)), j.items.push(c(I, ue.value || ""));
                        break;
                    case 6:
                        ue.value == null && n(I, Qe.UNEXPECTED_LEXICAL_ANALYSIS, K.lastStartLoc, 0, mn(ue)), j.items.push(u(I, ue.value || ""));
                        break;
                    case 5:
                        ue.value == null && n(I, Qe.UNEXPECTED_LEXICAL_ANALYSIS, K.lastStartLoc, 0, mn(ue)), j.items.push(f(I, ue.value || ""));
                        break;
                    case 7:
                        ue.value == null && n(I, Qe.UNEXPECTED_LEXICAL_ANALYSIS, K.lastStartLoc, 0, mn(ue)), j.items.push(h(I, ue.value || ""));
                        break;
                    case 8:
                        const Ie = b(I);
                        j.items.push(Ie.node), z = Ie.nextConsumeToken || null;
                        break
                }
            } while (K.currentType !== 14 && K.currentType !== 1);
            const ie = K.currentType === 1 ? K.lastOffset : I.currentOffset(),
                oe = K.currentType === 1 ? K.lastEndLoc : I.currentPosition();
            return o(j, ie, oe), j
        }

        function L(I, K, Y, G) {
            const j = I.context();
            let z = G.items.length === 0;
            const ie = s(1, K, Y);
            ie.cases = [], ie.cases.push(G);
            do {
                const oe = C(I);
                z || (z = oe.items.length === 0), ie.cases.push(oe)
            } while (j.currentType !== 14);
            return z && n(I, Qe.MUST_HAVE_MESSAGES_IN_PLURAL, Y, 0), o(ie, I.currentOffset(), I.currentPosition()), ie
        }

        function M(I) {
            const K = I.context(),
                {
                    offset: Y,
                    startLoc: G
                } = K,
                j = C(I);
            return K.currentType === 14 ? j : L(I, Y, G, j)
        }

        function B(I) {
            const K = YQ(I, Zt({}, t)),
                Y = K.context(),
                G = s(0, Y.offset, Y.startLoc);
            return e && G.loc && (G.loc.source = I), G.body = M(K), Y.currentType !== 14 && n(K, Qe.UNEXPECTED_LEXICAL_ANALYSIS, Y.lastStartLoc, 0, I[Y.offset] || ""), o(G, K.currentOffset(), K.currentPosition()), G
        }
        return {
            parse: B
        }
    }

    function mn(t) {
        if (t.type === 14) return "EOF";
        const e = (t.value || "").replace(/\r?\n/gu, "\\n");
        return e.length > 10 ? e.slice(0, 9) + "\u2026" : e
    }

    function ZQ(t, e = {}) {
        const r = {
            ast: t,
            helpers: new Set
        };
        return {
            context: () => r,
            helper: o => (r.helpers.add(o), o)
        }
    }

    function _E(t, e) {
        for (let r = 0; r < t.length; r++) Pp(t[r], e)
    }

    function Pp(t, e) {
        switch (t.type) {
            case 1:
                _E(t.cases, e), e.helper("plural");
                break;
            case 2:
                _E(t.items, e);
                break;
            case 6:
                Pp(t.key, e), e.helper("linked"), e.helper("type");
                break;
            case 5:
                e.helper("interpolate"), e.helper("list");
                break;
            case 4:
                e.helper("interpolate"), e.helper("named");
                break
        }
    }

    function QQ(t, e = {}) {
        const r = ZQ(t);
        r.helper("normalize"), t.body && Pp(t.body, r);
        const n = r.context();
        t.helpers = Array.from(n.helpers)
    }

    function eee(t, e) {
        const {
            sourceMap: r,
            filename: n,
            breakLineCode: s,
            needIndent: o
        } = e, c = {
            source: t.loc.source,
            filename: n,
            code: "",
            column: 1,
            line: 1,
            offset: 0,
            map: void 0,
            breakLineCode: s,
            needIndent: o,
            indentLevel: 0
        }, u = () => c;

        function f(M, B) {
            c.code += M
        }

        function h(M, B = !0) {
            const I = B ? s : "";
            f(o ? I + "  ".repeat(M) : I)
        }

        function m(M = !0) {
            const B = ++c.indentLevel;
            M && h(B)
        }

        function _(M = !0) {
            const B = --c.indentLevel;
            M && h(B)
        }

        function b() {
            h(c.indentLevel)
        }
        return {
            context: u,
            push: f,
            indent: m,
            deindent: _,
            newline: b,
            helper: M => `_${M}`,
            needIndent: () => c.needIndent
        }
    }

    function tee(t, e) {
        const {
            helper: r
        } = t;
        t.push(`${r("linked")}(`), Zs(t, e.key), e.modifier ? (t.push(", "), Zs(t, e.modifier), t.push(", _type")) : t.push(", undefined, _type"), t.push(")")
    }

    function ree(t, e) {
        const {
            helper: r,
            needIndent: n
        } = t;
        t.push(`${r("normalize")}([`), t.indent(n());
        const s = e.items.length;
        for (let o = 0; o < s && (Zs(t, e.items[o]), o !== s - 1); o++) t.push(", ");
        t.deindent(n()), t.push("])")
    }

    function nee(t, e) {
        const {
            helper: r,
            needIndent: n
        } = t;
        if (e.cases.length > 1) {
            t.push(`${r("plural")}([`), t.indent(n());
            const s = e.cases.length;
            for (let o = 0; o < s && (Zs(t, e.cases[o]), o !== s - 1); o++) t.push(", ");
            t.deindent(n()), t.push("])")
        }
    }

    function iee(t, e) {
        e.body ? Zs(t, e.body) : t.push("null")
    }

    function Zs(t, e) {
        const {
            helper: r
        } = t;
        switch (e.type) {
            case 0:
                iee(t, e);
                break;
            case 1:
                nee(t, e);
                break;
            case 2:
                ree(t, e);
                break;
            case 6:
                tee(t, e);
                break;
            case 8:
                t.push(JSON.stringify(e.value), e);
                break;
            case 7:
                t.push(JSON.stringify(e.value), e);
                break;
            case 5:
                t.push(`${r("interpolate")}(${r("list")}(${e.index}))`, e);
                break;
            case 4:
                t.push(`${r("interpolate")}(${r("named")}(${JSON.stringify(e.key)}))`, e);
                break;
            case 9:
                t.push(JSON.stringify(e.value), e);
                break;
            case 3:
                t.push(JSON.stringify(e.value), e);
                break
        }
    }
    const see = (t, e = {}) => {
        const r = ye(e.mode) ? e.mode : "normal",
            n = ye(e.filename) ? e.filename : "message.intl",
            s = !!e.sourceMap,
            o = e.breakLineCode != null ? e.breakLineCode : r === "arrow" ? ";" : `
`,
            c = e.needIndent ? e.needIndent : r !== "arrow",
            u = t.helpers || [],
            f = eee(t, {
                mode: r,
                filename: n,
                sourceMap: s,
                breakLineCode: o,
                needIndent: c
            });
        f.push(r === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), f.indent(c), u.length > 0 && (f.push(`const { ${u.map(_=>`${_}: _${_}`).join(", ")} } = ctx`), f.newline()), f.push("return "), Zs(f, t), f.deindent(c), f.push("}");
        const {
            code: h,
            map: m
        } = f.context();
        return {
            ast: t,
            code: h,
            map: m ? m.toJSON() : void 0
        }
    };

    function aee(t, e = {}) {
        const r = Zt({}, e),
            s = JQ(r).parse(t);
        return QQ(s, r), see(s, r)
    }
    /*!
     * devtools-if v9.2.2
     * (c) 2022 kazuya kawaguchi
     * Released under the MIT License.
     */
    const oee = {
        I18nInit: "i18n:init",
        FunctionTranslate: "function:translate"
    };
    /*!
     * core-base v9.2.2
     * (c) 2022 kazuya kawaguchi
     * Released under the MIT License.
     */
    const Si = [];
    Si[0] = {
        w: [0],
        i: [3, 0],
        ["["]: [4],
        o: [7]
    };
    Si[1] = {
        w: [1],
        ["."]: [2],
        ["["]: [4],
        o: [7]
    };
    Si[2] = {
        w: [2],
        i: [3, 0],
        [0]: [3, 0]
    };
    Si[3] = {
        i: [3, 0],
        [0]: [3, 0],
        w: [1, 1],
        ["."]: [2, 1],
        ["["]: [4, 1],
        o: [7, 1]
    };
    Si[4] = {
        ["'"]: [5, 0],
        ['"']: [6, 0],
        ["["]: [4, 2],
        ["]"]: [1, 3],
        o: 8,
        l: [4, 0]
    };
    Si[5] = {
        ["'"]: [4, 0],
        o: 8,
        l: [5, 0]
    };
    Si[6] = {
        ['"']: [4, 0],
        o: 8,
        l: [6, 0]
    };
    const cee = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;

    function lee(t) {
        return cee.test(t)
    }

    function uee(t) {
        const e = t.charCodeAt(0),
            r = t.charCodeAt(t.length - 1);
        return e === r && (e === 34 || e === 39) ? t.slice(1, -1) : t
    }

    function fee(t) {
        if (t == null) return "o";
        switch (t.charCodeAt(0)) {
            case 91:
            case 93:
            case 46:
            case 34:
            case 39:
                return t;
            case 95:
            case 36:
            case 45:
                return "i";
            case 9:
            case 10:
            case 13:
            case 160:
            case 65279:
            case 8232:
            case 8233:
                return "w"
        }
        return "i"
    }

    function dee(t) {
        const e = t.trim();
        return t.charAt(0) === "0" && isNaN(parseInt(t)) ? !1 : lee(e) ? uee(e) : "*" + e
    }

    function hee(t) {
        const e = [];
        let r = -1,
            n = 0,
            s = 0,
            o, c, u, f, h, m, _;
        const b = [];
        b[0] = () => {
            c === void 0 ? c = u : c += u
        }, b[1] = () => {
            c !== void 0 && (e.push(c), c = void 0)
        }, b[2] = () => {
            b[0](), s++
        }, b[3] = () => {
            if (s > 0) s--, n = 4, b[0]();
            else {
                if (s = 0, c === void 0 || (c = dee(c), c === !1)) return !1;
                b[1]()
            }
        };

        function C() {
            const L = t[r + 1];
            if (n === 5 && L === "'" || n === 6 && L === '"') return r++, u = "\\" + L, b[0](), !0
        }
        for (; n !== null;)
            if (r++, o = t[r], !(o === "\\" && C())) {
                if (f = fee(o), _ = Si[n], h = _[f] || _.l || 8, h === 8 || (n = h[0], h[1] !== void 0 && (m = b[h[1]], m && (u = o, m() === !1)))) return;
                if (n === 7) return e
            }
    }
    const EE = new Map;

    function pee(t, e) {
        return mt(t) ? t[e] : null
    }

    function gee(t, e) {
        if (!mt(t)) return null;
        let r = EE.get(e);
        if (r || (r = hee(e), r && EE.set(e, r)), !r) return null;
        const n = r.length;
        let s = t,
            o = 0;
        for (; o < n;) {
            const c = s[r[o]];
            if (c === void 0) return null;
            s = c, o++
        }
        return s
    }
    const mee = t => t,
        vee = t => "",
        yee = "text",
        _ee = t => t.length === 0 ? "" : t.join(""),
        Eee = UQ;

    function bE(t, e) {
        return t = Math.abs(t), e === 2 ? t ? t > 1 ? 1 : 0 : 1 : t ? Math.min(t, 2) : 0
    }

    function bee(t) {
        const e = Ut(t.pluralIndex) ? t.pluralIndex : -1;
        return t.named && (Ut(t.named.count) || Ut(t.named.n)) ? Ut(t.named.count) ? t.named.count : Ut(t.named.n) ? t.named.n : e : e
    }

    function Tee(t, e) {
        e.count || (e.count = t), e.n || (e.n = t)
    }

    function See(t = {}) {
        const e = t.locale,
            r = bee(t),
            n = mt(t.pluralRules) && ye(e) && Nt(t.pluralRules[e]) ? t.pluralRules[e] : bE,
            s = mt(t.pluralRules) && ye(e) && Nt(t.pluralRules[e]) ? bE : void 0,
            o = I => I[n(r, I.length, s)],
            c = t.list || [],
            u = I => c[I],
            f = t.named || {};
        Ut(t.pluralIndex) && Tee(r, f);
        const h = I => f[I];

        function m(I) {
            const K = Nt(t.messages) ? t.messages(I) : mt(t.messages) ? t.messages[I] : !1;
            return K || (t.parent ? t.parent.message(I) : vee)
        }
        const _ = I => t.modifiers ? t.modifiers[I] : mee,
            b = Me(t.processor) && Nt(t.processor.normalize) ? t.processor.normalize : _ee,
            C = Me(t.processor) && Nt(t.processor.interpolate) ? t.processor.interpolate : Eee,
            L = Me(t.processor) && ye(t.processor.type) ? t.processor.type : yee,
            B = {
                list: u,
                named: h,
                plural: o,
                linked: (I, ...K) => {
                    const [Y, G] = K;
                    let j = "text",
                        z = "";
                    K.length === 1 ? mt(Y) ? (z = Y.modifier || z, j = Y.type || j) : ye(Y) && (z = Y || z) : K.length === 2 && (ye(Y) && (z = Y || z), ye(G) && (j = G || j));
                    let ie = m(I)(B);
                    return j === "vnode" && gt(ie) && z && (ie = ie[0]), z ? _(z)(ie, j) : ie
                },
                message: m,
                type: L,
                interpolate: C,
                normalize: b
            };
        return B
    }
    let Oee = null;
    oee.FunctionTranslate;

    function wee(t) {
        return e => Oee
    }
    const Cee = {
        NOT_FOUND_KEY: 1,
        FALLBACK_TO_TRANSLATE: 2,
        CANNOT_FORMAT_NUMBER: 3,
        FALLBACK_TO_NUMBER_FORMAT: 4,
        CANNOT_FORMAT_DATE: 5,
        FALLBACK_TO_DATE_FORMAT: 6,
        __EXTEND_POINT__: 7
    };

    function Iee(t, e, r) {
        return [...new Set([r, ...gt(e) ? e : mt(e) ? Object.keys(e) : ye(e) ? [e] : [r]])]
    }

    function rw(t, e, r) {
        const n = ye(r) ? r : vo,
            s = t;
        s.__localeChainCache || (s.__localeChainCache = new Map);
        let o = s.__localeChainCache.get(n);
        if (!o) {
            o = [];
            let c = [r];
            for (; gt(c);) c = TE(o, c, e);
            const u = gt(e) || !Me(e) ? e : e.default ? e.default : null;
            c = ye(u) ? [u] : u, gt(c) && TE(o, c, !1), s.__localeChainCache.set(n, o)
        }
        return o
    }

    function TE(t, e, r) {
        let n = !0;
        for (let s = 0; s < e.length && ze(n); s++) {
            const o = e[s];
            ye(o) && (n = $ee(t, e[s], r))
        }
        return n
    }

    function $ee(t, e, r) {
        let n;
        const s = e.split("-");
        do {
            const o = s.join("-");
            n = Aee(t, o, r), s.splice(-1, 1)
        } while (s.length && n === !0);
        return n
    }

    function Aee(t, e, r) {
        let n = !1;
        if (!t.includes(e) && (n = !0, e)) {
            n = e[e.length - 1] !== "!";
            const s = e.replace(/!/g, "");
            t.push(s), (gt(r) || Me(r)) && r[s] && (n = r[s])
        }
        return n
    }
    const Ree = "9.2.2",
        Wl = -1,
        vo = "en-US",
        SE = "",
        OE = t => `${t.charAt(0).toLocaleUpperCase()}${t.substr(1)}`;

    function Nee() {
        return {
            upper: (t, e) => e === "text" && ye(t) ? t.toUpperCase() : e === "vnode" && mt(t) && "__v_isVNode" in t ? t.children.toUpperCase() : t,
            lower: (t, e) => e === "text" && ye(t) ? t.toLowerCase() : e === "vnode" && mt(t) && "__v_isVNode" in t ? t.children.toLowerCase() : t,
            capitalize: (t, e) => e === "text" && ye(t) ? OE(t) : e === "vnode" && mt(t) && "__v_isVNode" in t ? OE(t.children) : t
        }
    }
    let nw;

    function Pee(t) {
        nw = t
    }
    let iw;

    function Lee(t) {
        iw = t
    }
    let sw;

    function kee(t) {
        sw = t
    }
    let wE = 0;

    function xee(t = {}) {
        const e = ye(t.version) ? t.version : Ree,
            r = ye(t.locale) ? t.locale : vo,
            n = gt(t.fallbackLocale) || Me(t.fallbackLocale) || ye(t.fallbackLocale) || t.fallbackLocale === !1 ? t.fallbackLocale : r,
            s = Me(t.messages) ? t.messages : {
                [r]: {}
            },
            o = Me(t.datetimeFormats) ? t.datetimeFormats : {
                [r]: {}
            },
            c = Me(t.numberFormats) ? t.numberFormats : {
                [r]: {}
            },
            u = Zt({}, t.modifiers || {}, Nee()),
            f = t.pluralRules || {},
            h = Nt(t.missing) ? t.missing : null,
            m = ze(t.missingWarn) || pi(t.missingWarn) ? t.missingWarn : !0,
            _ = ze(t.fallbackWarn) || pi(t.fallbackWarn) ? t.fallbackWarn : !0,
            b = !!t.fallbackFormat,
            C = !!t.unresolving,
            L = Nt(t.postTranslation) ? t.postTranslation : null,
            M = Me(t.processor) ? t.processor : null,
            B = ze(t.warnHtmlMessage) ? t.warnHtmlMessage : !0,
            I = !!t.escapeParameter,
            K = Nt(t.messageCompiler) ? t.messageCompiler : nw,
            Y = Nt(t.messageResolver) ? t.messageResolver : iw || pee,
            G = Nt(t.localeFallbacker) ? t.localeFallbacker : sw || Iee,
            j = mt(t.fallbackContext) ? t.fallbackContext : void 0,
            z = Nt(t.onWarn) ? t.onWarn : MQ,
            ie = t,
            oe = mt(ie.__datetimeFormatters) ? ie.__datetimeFormatters : new Map,
            ue = mt(ie.__numberFormatters) ? ie.__numberFormatters : new Map,
            Ie = mt(ie.__meta) ? ie.__meta : {};
        wE++;
        const Ce = {
            version: e,
            cid: wE,
            locale: r,
            fallbackLocale: n,
            messages: s,
            modifiers: u,
            pluralRules: f,
            missing: h,
            missingWarn: m,
            fallbackWarn: _,
            fallbackFormat: b,
            unresolving: C,
            postTranslation: L,
            processor: M,
            warnHtmlMessage: B,
            escapeParameter: I,
            messageCompiler: K,
            messageResolver: Y,
            localeFallbacker: G,
            fallbackContext: j,
            onWarn: z,
            __meta: Ie
        };
        return Ce.datetimeFormats = o, Ce.numberFormats = c, Ce.__datetimeFormatters = oe, Ce.__numberFormatters = ue, Ce
    }

    function Lp(t, e, r, n, s) {
        const {
            missing: o,
            onWarn: c
        } = t;
        if (o !== null) {
            const u = o(t, r, e, s);
            return ye(u) ? u : e
        } else return e
    }

    function Ra(t, e, r) {
        const n = t;
        n.__localeChainCache = new Map, t.localeFallbacker(t, r, e)
    }
    const Dee = t => t;
    let CE = Object.create(null);

    function Mee(t, e = {}) {
        {
            const n = (e.onCacheKey || Dee)(t),
                s = CE[n];
            if (s) return s;
            let o = !1;
            const c = e.onError || BQ;
            e.onError = h => {
                o = !0, c(h)
            };
            const {
                code: u
            } = aee(t, e), f = new Function(`return ${u}`)();
            return o ? f : CE[n] = f
        }
    }
    let aw = Qe.__EXTEND_POINT__;
    const Jf = () => ++aw,
        Ns = {
            INVALID_ARGUMENT: aw,
            INVALID_DATE_ARGUMENT: Jf(),
            INVALID_ISO_DATE_ARGUMENT: Jf(),
            __EXTEND_POINT__: Jf()
        };

    function Ps(t) {
        return Gl(t, null, void 0)
    }
    const IE = () => "",
        ns = t => Nt(t);

    function $E(t, ...e) {
        const {
            fallbackFormat: r,
            postTranslation: n,
            unresolving: s,
            messageCompiler: o,
            fallbackLocale: c,
            messages: u
        } = t, [f, h] = Xd(...e), m = ze(h.missingWarn) ? h.missingWarn : t.missingWarn, _ = ze(h.fallbackWarn) ? h.fallbackWarn : t.fallbackWarn, b = ze(h.escapeParameter) ? h.escapeParameter : t.escapeParameter, C = !!h.resolvedMessage, L = ye(h.default) || ze(h.default) ? ze(h.default) ? o ? f : () => f : h.default : r ? o ? f : () => f : "", M = r || L !== "", B = ye(h.locale) ? h.locale : t.locale;
        b && Fee(h);
        let [I, K, Y] = C ? [f, B, u[B] || {}] : ow(t, f, B, c, _, m), G = I, j = f;
        if (!C && !(ye(G) || ns(G)) && M && (G = L, j = G), !C && (!(ye(G) || ns(G)) || !ye(K))) return s ? Wl : f;
        let z = !1;
        const ie = () => {
                z = !0
            },
            oe = ns(G) ? G : cw(t, f, K, G, j, ie);
        if (z) return G;
        const ue = jee(t, K, Y, h),
            Ie = See(ue),
            Ce = Uee(t, oe, Ie);
        return n ? n(Ce, f) : Ce
    }

    function Fee(t) {
        gt(t.list) ? t.list = t.list.map(e => ye(e) ? vE(e) : e) : mt(t.named) && Object.keys(t.named).forEach(e => {
            ye(t.named[e]) && (t.named[e] = vE(t.named[e]))
        })
    }

    function ow(t, e, r, n, s, o) {
        const {
            messages: c,
            onWarn: u,
            messageResolver: f,
            localeFallbacker: h
        } = t, m = h(t, n, r);
        let _ = {},
            b, C = null;
        const L = "translate";
        for (let M = 0; M < m.length && (b = m[M], _ = c[b] || {}, (C = f(_, e)) === null && (C = _[e]), !(ye(C) || Nt(C))); M++) {
            const B = Lp(t, e, b, o, L);
            B !== e && (C = B)
        }
        return [C, b, _]
    }

    function cw(t, e, r, n, s, o) {
        const {
            messageCompiler: c,
            warnHtmlMessage: u
        } = t;
        if (ns(n)) {
            const h = n;
            return h.locale = h.locale || r, h.key = h.key || e, h
        }
        if (c == null) {
            const h = () => n;
            return h.locale = r, h.key = e, h
        }
        const f = c(n, Bee(t, r, s, n, u, o));
        return f.locale = r, f.key = e, f.source = n, f
    }

    function Uee(t, e, r) {
        return e(r)
    }

    function Xd(...t) {
        const [e, r, n] = t, s = {};
        if (!ye(e) && !Ut(e) && !ns(e)) throw Ps(Ns.INVALID_ARGUMENT);
        const o = Ut(e) ? String(e) : (ns(e), e);
        return Ut(r) ? s.plural = r : ye(r) ? s.default = r : Me(r) && !jl(r) ? s.named = r : gt(r) && (s.list = r), Ut(n) ? s.plural = n : ye(n) ? s.default = n : Me(n) && Zt(s, n), [o, s]
    }

    function Bee(t, e, r, n, s, o) {
        return {
            warnHtmlMessage: s,
            onError: c => {
                throw o && o(c), c
            },
            onCacheKey: c => kQ(e, r, c)
        }
    }

    function jee(t, e, r, n) {
        const {
            modifiers: s,
            pluralRules: o,
            messageResolver: c,
            fallbackLocale: u,
            fallbackWarn: f,
            missingWarn: h,
            fallbackContext: m
        } = t, b = {
            locale: e,
            modifiers: s,
            pluralRules: o,
            messages: C => {
                let L = c(r, C);
                if (L == null && m) {
                    const [, , M] = ow(m, C, e, u, f, h);
                    L = c(M, C)
                }
                if (ye(L)) {
                    let M = !1;
                    const I = cw(t, C, e, L, C, () => {
                        M = !0
                    });
                    return M ? IE : I
                } else return ns(L) ? L : IE
            }
        };
        return t.processor && (b.processor = t.processor), n.list && (b.list = n.list), n.named && (b.named = n.named), Ut(n.plural) && (b.pluralIndex = n.plural), b
    }

    function AE(t, ...e) {
        const {
            datetimeFormats: r,
            unresolving: n,
            fallbackLocale: s,
            onWarn: o,
            localeFallbacker: c
        } = t, {
            __datetimeFormatters: u
        } = t, [f, h, m, _] = Jd(...e), b = ze(m.missingWarn) ? m.missingWarn : t.missingWarn;
        ze(m.fallbackWarn) ? m.fallbackWarn : t.fallbackWarn;
        const C = !!m.part,
            L = ye(m.locale) ? m.locale : t.locale,
            M = c(t, s, L);
        if (!ye(f) || f === "") return new Intl.DateTimeFormat(L, _).format(h);
        let B = {},
            I, K = null;
        const Y = "datetime format";
        for (let z = 0; z < M.length && (I = M[z], B = r[I] || {}, K = B[f], !Me(K)); z++) Lp(t, f, I, b, Y);
        if (!Me(K) || !ye(I)) return n ? Wl : f;
        let G = `${I}__${f}`;
        jl(_) || (G = `${G}__${JSON.stringify(_)}`);
        let j = u.get(G);
        return j || (j = new Intl.DateTimeFormat(I, Zt({}, K, _)), u.set(G, j)), C ? j.formatToParts(h) : j.format(h)
    }
    const lw = ["localeMatcher", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "formatMatcher", "hour12", "timeZone", "dateStyle", "timeStyle", "calendar", "dayPeriod", "numberingSystem", "hourCycle", "fractionalSecondDigits"];

    function Jd(...t) {
        const [e, r, n, s] = t, o = {};
        let c = {},
            u;
        if (ye(e)) {
            const f = e.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
            if (!f) throw Ps(Ns.INVALID_ISO_DATE_ARGUMENT);
            const h = f[3] ? f[3].trim().startsWith("T") ? `${f[1].trim()}${f[3].trim()}` : `${f[1].trim()}T${f[3].trim()}` : f[1].trim();
            u = new Date(h);
            try {
                u.toISOString()
            } catch {
                throw Ps(Ns.INVALID_ISO_DATE_ARGUMENT)
            }
        } else if (DQ(e)) {
            if (isNaN(e.getTime())) throw Ps(Ns.INVALID_DATE_ARGUMENT);
            u = e
        } else if (Ut(e)) u = e;
        else throw Ps(Ns.INVALID_ARGUMENT);
        return ye(r) ? o.key = r : Me(r) && Object.keys(r).forEach(f => {
            lw.includes(f) ? c[f] = r[f] : o[f] = r[f]
        }), ye(n) ? o.locale = n : Me(n) && (c = n), Me(s) && (c = s), [o.key || "", u, o, c]
    }

    function RE(t, e, r) {
        const n = t;
        for (const s in r) {
            const o = `${e}__${s}`;
            !n.__datetimeFormatters.has(o) || n.__datetimeFormatters.delete(o)
        }
    }

    function NE(t, ...e) {
        const {
            numberFormats: r,
            unresolving: n,
            fallbackLocale: s,
            onWarn: o,
            localeFallbacker: c
        } = t, {
            __numberFormatters: u
        } = t, [f, h, m, _] = Zd(...e), b = ze(m.missingWarn) ? m.missingWarn : t.missingWarn;
        ze(m.fallbackWarn) ? m.fallbackWarn : t.fallbackWarn;
        const C = !!m.part,
            L = ye(m.locale) ? m.locale : t.locale,
            M = c(t, s, L);
        if (!ye(f) || f === "") return new Intl.NumberFormat(L, _).format(h);
        let B = {},
            I, K = null;
        const Y = "number format";
        for (let z = 0; z < M.length && (I = M[z], B = r[I] || {}, K = B[f], !Me(K)); z++) Lp(t, f, I, b, Y);
        if (!Me(K) || !ye(I)) return n ? Wl : f;
        let G = `${I}__${f}`;
        jl(_) || (G = `${G}__${JSON.stringify(_)}`);
        let j = u.get(G);
        return j || (j = new Intl.NumberFormat(I, Zt({}, K, _)), u.set(G, j)), C ? j.formatToParts(h) : j.format(h)
    }
    const uw = ["localeMatcher", "style", "currency", "currencyDisplay", "currencySign", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "notation", "signDisplay", "unit", "unitDisplay", "roundingMode", "roundingPriority", "roundingIncrement", "trailingZeroDisplay"];

    function Zd(...t) {
        const [e, r, n, s] = t, o = {};
        let c = {};
        if (!Ut(e)) throw Ps(Ns.INVALID_ARGUMENT);
        const u = e;
        return ye(r) ? o.key = r : Me(r) && Object.keys(r).forEach(f => {
            uw.includes(f) ? c[f] = r[f] : o[f] = r[f]
        }), ye(n) ? o.locale = n : Me(n) && (c = n), Me(s) && (c = s), [o.key || "", u, o, c]
    }

    function PE(t, e, r) {
        const n = t;
        for (const s in r) {
            const o = `${e}__${s}`;
            !n.__numberFormatters.has(o) || n.__numberFormatters.delete(o)
        }
    }
    /*!
     * vue-i18n v9.2.2
     * (c) 2022 kazuya kawaguchi
     * Released under the MIT License.
     */
    const Gee = "9.2.2";
    Cee.__EXTEND_POINT__;
    let fw = Qe.__EXTEND_POINT__;
    const _r = () => ++fw,
        Dt = {
            UNEXPECTED_RETURN_TYPE: fw,
            INVALID_ARGUMENT: _r(),
            MUST_BE_CALL_SETUP_TOP: _r(),
            NOT_INSLALLED: _r(),
            NOT_AVAILABLE_IN_LEGACY_MODE: _r(),
            REQUIRED_VALUE: _r(),
            INVALID_VALUE: _r(),
            CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: _r(),
            NOT_INSLALLED_WITH_PROVIDE: _r(),
            UNEXPECTED_ERROR: _r(),
            NOT_COMPATIBLE_LEGACY_VUE_I18N: _r(),
            BRIDGE_SUPPORT_VUE_2_ONLY: _r(),
            MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: _r(),
            NOT_AVAILABLE_COMPOSITION_IN_LEGACY: _r(),
            __EXTEND_POINT__: _r()
        };

    function jt(t, ...e) {
        return Gl(t, null, void 0)
    }
    const Qd = Ti("__transrateVNode"),
        eh = Ti("__datetimeParts"),
        th = Ti("__numberParts"),
        dw = Ti("__setPluralRules");
    Ti("__intlifyMeta");
    const hw = Ti("__injectWithOption");

    function rh(t) {
        if (!mt(t)) return t;
        for (const e in t)
            if (!!Rp(t, e))
                if (!e.includes(".")) mt(t[e]) && rh(t[e]);
                else {
                    const r = e.split("."),
                        n = r.length - 1;
                    let s = t;
                    for (let o = 0; o < n; o++) r[o] in s || (s[r[o]] = {}), s = s[r[o]];
                    s[r[n]] = t[e], delete t[e], mt(s[r[n]]) && rh(s[r[n]])
                } return t
    }

    function Kl(t, e) {
        const {
            messages: r,
            __i18n: n,
            messageResolver: s,
            flatJson: o
        } = e, c = Me(r) ? r : gt(n) ? {} : {
            [t]: {}
        };
        if (gt(n) && n.forEach(u => {
                if ("locale" in u && "resource" in u) {
                    const {
                        locale: f,
                        resource: h
                    } = u;
                    f ? (c[f] = c[f] || {}, Ga(h, c[f])) : Ga(h, c)
                } else ye(u) && Ga(JSON.parse(u), c)
            }), s == null && o)
            for (const u in c) Rp(c, u) && rh(c[u]);
        return c
    }
    const Oc = t => !mt(t) || gt(t);

    function Ga(t, e) {
        if (Oc(t) || Oc(e)) throw jt(Dt.INVALID_VALUE);
        for (const r in t) Rp(t, r) && (Oc(t[r]) || Oc(e[r]) ? e[r] = t[r] : Ga(t[r], e[r]))
    }

    function Wee(t) {
        return t.type
    }

    function pw(t, e, r) {
        let n = mt(e.messages) ? e.messages : {};
        "__i18nGlobal" in r && (n = Kl(t.locale.value, {
            messages: n,
            __i18n: r.__i18nGlobal
        }));
        const s = Object.keys(n);
        s.length && s.forEach(o => {
            t.mergeLocaleMessage(o, n[o])
        }); {
            if (mt(e.datetimeFormats)) {
                const o = Object.keys(e.datetimeFormats);
                o.length && o.forEach(c => {
                    t.mergeDateTimeFormat(c, e.datetimeFormats[c])
                })
            }
            if (mt(e.numberFormats)) {
                const o = Object.keys(e.numberFormats);
                o.length && o.forEach(c => {
                    t.mergeNumberFormat(c, e.numberFormats[c])
                })
            }
        }
    }

    function LE(t) {
        return xt(dl, null, t, 0)
    }
    let kE = 0;

    function xE(t) {
        return (e, r, n, s) => t(r, n, is() || void 0, s)
    }

    function kp(t = {}, e) {
        const {
            __root: r
        } = t, n = r === void 0;
        let s = ze(t.inheritLocale) ? t.inheritLocale : !0;
        const o = rn(r && s ? r.locale.value : ye(t.locale) ? t.locale : vo),
            c = rn(r && s ? r.fallbackLocale.value : ye(t.fallbackLocale) || gt(t.fallbackLocale) || Me(t.fallbackLocale) || t.fallbackLocale === !1 ? t.fallbackLocale : o.value),
            u = rn(Kl(o.value, t)),
            f = rn(Me(t.datetimeFormats) ? t.datetimeFormats : {
                [o.value]: {}
            }),
            h = rn(Me(t.numberFormats) ? t.numberFormats : {
                [o.value]: {}
            });
        let m = r ? r.missingWarn : ze(t.missingWarn) || pi(t.missingWarn) ? t.missingWarn : !0,
            _ = r ? r.fallbackWarn : ze(t.fallbackWarn) || pi(t.fallbackWarn) ? t.fallbackWarn : !0,
            b = r ? r.fallbackRoot : ze(t.fallbackRoot) ? t.fallbackRoot : !0,
            C = !!t.fallbackFormat,
            L = Nt(t.missing) ? t.missing : null,
            M = Nt(t.missing) ? xE(t.missing) : null,
            B = Nt(t.postTranslation) ? t.postTranslation : null,
            I = r ? r.warnHtmlMessage : ze(t.warnHtmlMessage) ? t.warnHtmlMessage : !0,
            K = !!t.escapeParameter;
        const Y = r ? r.modifiers : Me(t.modifiers) ? t.modifiers : {};
        let G = t.pluralRules || r && r.pluralRules,
            j;
        j = (() => {
            const A = {
                version: Gee,
                locale: o.value,
                fallbackLocale: c.value,
                messages: u.value,
                modifiers: Y,
                pluralRules: G,
                missing: M === null ? void 0 : M,
                missingWarn: m,
                fallbackWarn: _,
                fallbackFormat: C,
                unresolving: !0,
                postTranslation: B === null ? void 0 : B,
                warnHtmlMessage: I,
                escapeParameter: K,
                messageResolver: t.messageResolver,
                __meta: {
                    framework: "vue"
                }
            };
            return A.datetimeFormats = f.value, A.numberFormats = h.value, A.__datetimeFormatters = Me(j) ? j.__datetimeFormatters : void 0, A.__numberFormatters = Me(j) ? j.__numberFormatters : void 0, xee(A)
        })(), Ra(j, o.value, c.value);

        function ie() {
            return [o.value, c.value, u.value, f.value, h.value]
        }
        const oe = Rr({
                get: () => o.value,
                set: A => {
                    o.value = A, j.locale = o.value
                }
            }),
            ue = Rr({
                get: () => c.value,
                set: A => {
                    c.value = A, j.fallbackLocale = c.value, Ra(j, o.value, A)
                }
            }),
            Ie = Rr(() => u.value),
            Ce = Rr(() => f.value),
            fe = Rr(() => h.value);

        function we() {
            return Nt(B) ? B : null
        }

        function F(A) {
            B = A, j.postTranslation = A
        }

        function te() {
            return L
        }

        function de(A) {
            A !== null && (M = xE(A)), L = A, j.missing = M
        }
        const Ee = (A, W, he, pe, $e, Le) => {
            ie();
            let w;
            if (w = A(j), Ut(w) && w === Wl) {
                const [T, N] = W();
                return r && b ? pe(r) : $e(T)
            } else {
                if (Le(w)) return w;
                throw jt(Dt.UNEXPECTED_RETURN_TYPE)
            }
        };

        function ve(...A) {
            return Ee(W => Reflect.apply($E, null, [W, ...A]), () => Xd(...A), "translate", W => Reflect.apply(W.t, W, [...A]), W => W, W => ye(W))
        }

        function Se(...A) {
            const [W, he, pe] = A;
            if (pe && !mt(pe)) throw jt(Dt.INVALID_ARGUMENT);
            return ve(W, he, Zt({
                resolvedMessage: !0
            }, pe || {}))
        }

        function xe(...A) {
            return Ee(W => Reflect.apply(AE, null, [W, ...A]), () => Jd(...A), "datetime format", W => Reflect.apply(W.d, W, [...A]), () => SE, W => ye(W))
        }

        function Ue(...A) {
            return Ee(W => Reflect.apply(NE, null, [W, ...A]), () => Zd(...A), "number format", W => Reflect.apply(W.n, W, [...A]), () => SE, W => ye(W))
        }

        function Ze(A) {
            return A.map(W => ye(W) || Ut(W) || ze(W) ? LE(String(W)) : W)
        }
        const Sr = {
            normalize: Ze,
            interpolate: A => A,
            type: "vnode"
        };

        function er(...A) {
            return Ee(W => {
                let he;
                const pe = W;
                try {
                    pe.processor = Sr, he = Reflect.apply($E, null, [pe, ...A])
                } finally {
                    pe.processor = null
                }
                return he
            }, () => Xd(...A), "translate", W => W[Qd](...A), W => [LE(W)], W => gt(W))
        }

        function pr(...A) {
            return Ee(W => Reflect.apply(NE, null, [W, ...A]), () => Zd(...A), "number format", W => W[th](...A), () => [], W => ye(W) || gt(W))
        }

        function nt(...A) {
            return Ee(W => Reflect.apply(AE, null, [W, ...A]), () => Jd(...A), "datetime format", W => W[eh](...A), () => [], W => ye(W) || gt(W))
        }

        function Et(A) {
            G = A, j.pluralRules = G
        }

        function it(A, W) {
            const he = ye(W) ? W : o.value,
                pe = kt(he);
            return j.messageResolver(pe, A) !== null
        }

        function Lt(A) {
            let W = null;
            const he = rw(j, c.value, o.value);
            for (let pe = 0; pe < he.length; pe++) {
                const $e = u.value[he[pe]] || {},
                    Le = j.messageResolver($e, A);
                if (Le != null) {
                    W = Le;
                    break
                }
            }
            return W
        }

        function Wt(A) {
            const W = Lt(A);
            return W != null ? W : r ? r.tm(A) || {} : {}
        }

        function kt(A) {
            return u.value[A] || {}
        }

        function g(A, W) {
            u.value[A] = W, j.messages = u.value
        }

        function p(A, W) {
            u.value[A] = u.value[A] || {}, Ga(W, u.value[A]), j.messages = u.value
        }

        function O(A) {
            return f.value[A] || {}
        }

        function D(A, W) {
            f.value[A] = W, j.datetimeFormats = f.value, RE(j, A, W)
        }

        function U(A, W) {
            f.value[A] = Zt(f.value[A] || {}, W), j.datetimeFormats = f.value, RE(j, A, W)
        }

        function V(A) {
            return h.value[A] || {}
        }

        function ce(A, W) {
            h.value[A] = W, j.numberFormats = h.value, PE(j, A, W)
        }

        function re(A, W) {
            h.value[A] = Zt(h.value[A] || {}, W), j.numberFormats = h.value, PE(j, A, W)
        }
        kE++, r && qd && (Zi(r.locale, A => {
            s && (o.value = A, j.locale = A, Ra(j, o.value, c.value))
        }), Zi(r.fallbackLocale, A => {
            s && (c.value = A, j.fallbackLocale = A, Ra(j, o.value, c.value))
        }));
        const Q = {
            id: kE,
            locale: oe,
            fallbackLocale: ue,
            get inheritLocale() {
                return s
            },
            set inheritLocale(A) {
                s = A, A && r && (o.value = r.locale.value, c.value = r.fallbackLocale.value, Ra(j, o.value, c.value))
            },
            get availableLocales() {
                return Object.keys(u.value).sort()
            },
            messages: Ie,
            get modifiers() {
                return Y
            },
            get pluralRules() {
                return G || {}
            },
            get isGlobal() {
                return n
            },
            get missingWarn() {
                return m
            },
            set missingWarn(A) {
                m = A, j.missingWarn = m
            },
            get fallbackWarn() {
                return _
            },
            set fallbackWarn(A) {
                _ = A, j.fallbackWarn = _
            },
            get fallbackRoot() {
                return b
            },
            set fallbackRoot(A) {
                b = A
            },
            get fallbackFormat() {
                return C
            },
            set fallbackFormat(A) {
                C = A, j.fallbackFormat = C
            },
            get warnHtmlMessage() {
                return I
            },
            set warnHtmlMessage(A) {
                I = A, j.warnHtmlMessage = A
            },
            get escapeParameter() {
                return K
            },
            set escapeParameter(A) {
                K = A, j.escapeParameter = A
            },
            t: ve,
            getLocaleMessage: kt,
            setLocaleMessage: g,
            mergeLocaleMessage: p,
            getPostTranslationHandler: we,
            setPostTranslationHandler: F,
            getMissingHandler: te,
            setMissingHandler: de,
            [dw]: Et
        };
        return Q.datetimeFormats = Ce, Q.numberFormats = fe, Q.rt = Se, Q.te = it, Q.tm = Wt, Q.d = xe, Q.n = Ue, Q.getDateTimeFormat = O, Q.setDateTimeFormat = D, Q.mergeDateTimeFormat = U, Q.getNumberFormat = V, Q.setNumberFormat = ce, Q.mergeNumberFormat = re, Q[hw] = t.__injectWithOption, Q[Qd] = er, Q[eh] = nt, Q[th] = pr, Q
    }

    function Kee(t) {
        const e = ye(t.locale) ? t.locale : vo,
            r = ye(t.fallbackLocale) || gt(t.fallbackLocale) || Me(t.fallbackLocale) || t.fallbackLocale === !1 ? t.fallbackLocale : e,
            n = Nt(t.missing) ? t.missing : void 0,
            s = ze(t.silentTranslationWarn) || pi(t.silentTranslationWarn) ? !t.silentTranslationWarn : !0,
            o = ze(t.silentFallbackWarn) || pi(t.silentFallbackWarn) ? !t.silentFallbackWarn : !0,
            c = ze(t.fallbackRoot) ? t.fallbackRoot : !0,
            u = !!t.formatFallbackMessages,
            f = Me(t.modifiers) ? t.modifiers : {},
            h = t.pluralizationRules,
            m = Nt(t.postTranslation) ? t.postTranslation : void 0,
            _ = ye(t.warnHtmlInMessage) ? t.warnHtmlInMessage !== "off" : !0,
            b = !!t.escapeParameterHtml,
            C = ze(t.sync) ? t.sync : !0;
        let L = t.messages;
        if (Me(t.sharedMessages)) {
            const j = t.sharedMessages;
            L = Object.keys(j).reduce((ie, oe) => {
                const ue = ie[oe] || (ie[oe] = {});
                return Zt(ue, j[oe]), ie
            }, L || {})
        }
        const {
            __i18n: M,
            __root: B,
            __injectWithOption: I
        } = t, K = t.datetimeFormats, Y = t.numberFormats, G = t.flatJson;
        return {
            locale: e,
            fallbackLocale: r,
            messages: L,
            flatJson: G,
            datetimeFormats: K,
            numberFormats: Y,
            missing: n,
            missingWarn: s,
            fallbackWarn: o,
            fallbackRoot: c,
            fallbackFormat: u,
            modifiers: f,
            pluralRules: h,
            postTranslation: m,
            warnHtmlMessage: _,
            escapeParameter: b,
            messageResolver: t.messageResolver,
            inheritLocale: C,
            __i18n: M,
            __root: B,
            __injectWithOption: I
        }
    }

    function nh(t = {}, e) {
        {
            const r = kp(Kee(t)),
                n = {
                    id: r.id,
                    get locale() {
                        return r.locale.value
                    },
                    set locale(s) {
                        r.locale.value = s
                    },
                    get fallbackLocale() {
                        return r.fallbackLocale.value
                    },
                    set fallbackLocale(s) {
                        r.fallbackLocale.value = s
                    },
                    get messages() {
                        return r.messages.value
                    },
                    get datetimeFormats() {
                        return r.datetimeFormats.value
                    },
                    get numberFormats() {
                        return r.numberFormats.value
                    },
                    get availableLocales() {
                        return r.availableLocales
                    },
                    get formatter() {
                        return {
                            interpolate() {
                                return []
                            }
                        }
                    },
                    set formatter(s) {},
                    get missing() {
                        return r.getMissingHandler()
                    },
                    set missing(s) {
                        r.setMissingHandler(s)
                    },
                    get silentTranslationWarn() {
                        return ze(r.missingWarn) ? !r.missingWarn : r.missingWarn
                    },
                    set silentTranslationWarn(s) {
                        r.missingWarn = ze(s) ? !s : s
                    },
                    get silentFallbackWarn() {
                        return ze(r.fallbackWarn) ? !r.fallbackWarn : r.fallbackWarn
                    },
                    set silentFallbackWarn(s) {
                        r.fallbackWarn = ze(s) ? !s : s
                    },
                    get modifiers() {
                        return r.modifiers
                    },
                    get formatFallbackMessages() {
                        return r.fallbackFormat
                    },
                    set formatFallbackMessages(s) {
                        r.fallbackFormat = s
                    },
                    get postTranslation() {
                        return r.getPostTranslationHandler()
                    },
                    set postTranslation(s) {
                        r.setPostTranslationHandler(s)
                    },
                    get sync() {
                        return r.inheritLocale
                    },
                    set sync(s) {
                        r.inheritLocale = s
                    },
                    get warnHtmlInMessage() {
                        return r.warnHtmlMessage ? "warn" : "off"
                    },
                    set warnHtmlInMessage(s) {
                        r.warnHtmlMessage = s !== "off"
                    },
                    get escapeParameterHtml() {
                        return r.escapeParameter
                    },
                    set escapeParameterHtml(s) {
                        r.escapeParameter = s
                    },
                    get preserveDirectiveContent() {
                        return !0
                    },
                    set preserveDirectiveContent(s) {},
                    get pluralizationRules() {
                        return r.pluralRules || {}
                    },
                    __composer: r,
                    t(...s) {
                        const [o, c, u] = s, f = {};
                        let h = null,
                            m = null;
                        if (!ye(o)) throw jt(Dt.INVALID_ARGUMENT);
                        const _ = o;
                        return ye(c) ? f.locale = c : gt(c) ? h = c : Me(c) && (m = c), gt(u) ? h = u : Me(u) && (m = u), Reflect.apply(r.t, r, [_, h || m || {}, f])
                    },
                    rt(...s) {
                        return Reflect.apply(r.rt, r, [...s])
                    },
                    tc(...s) {
                        const [o, c, u] = s, f = {
                            plural: 1
                        };
                        let h = null,
                            m = null;
                        if (!ye(o)) throw jt(Dt.INVALID_ARGUMENT);
                        const _ = o;
                        return ye(c) ? f.locale = c : Ut(c) ? f.plural = c : gt(c) ? h = c : Me(c) && (m = c), ye(u) ? f.locale = u : gt(u) ? h = u : Me(u) && (m = u), Reflect.apply(r.t, r, [_, h || m || {}, f])
                    },
                    te(s, o) {
                        return r.te(s, o)
                    },
                    tm(s) {
                        return r.tm(s)
                    },
                    getLocaleMessage(s) {
                        return r.getLocaleMessage(s)
                    },
                    setLocaleMessage(s, o) {
                        r.setLocaleMessage(s, o)
                    },
                    mergeLocaleMessage(s, o) {
                        r.mergeLocaleMessage(s, o)
                    },
                    d(...s) {
                        return Reflect.apply(r.d, r, [...s])
                    },
                    getDateTimeFormat(s) {
                        return r.getDateTimeFormat(s)
                    },
                    setDateTimeFormat(s, o) {
                        r.setDateTimeFormat(s, o)
                    },
                    mergeDateTimeFormat(s, o) {
                        r.mergeDateTimeFormat(s, o)
                    },
                    n(...s) {
                        return Reflect.apply(r.n, r, [...s])
                    },
                    getNumberFormat(s) {
                        return r.getNumberFormat(s)
                    },
                    setNumberFormat(s, o) {
                        r.setNumberFormat(s, o)
                    },
                    mergeNumberFormat(s, o) {
                        r.mergeNumberFormat(s, o)
                    },
                    getChoiceIndex(s, o) {
                        return -1
                    },
                    __onComponentInstanceCreated(s) {
                        const {
                            componentInstanceCreatedListener: o
                        } = t;
                        o && o(s, n)
                    }
                };
            return n
        }
    }
    const xp = {
        tag: {
            type: [String, Object]
        },
        locale: {
            type: String
        },
        scope: {
            type: String,
            validator: t => t === "parent" || t === "global",
            default: "parent"
        },
        i18n: {
            type: Object
        }
    };

    function Hee({
        slots: t
    }, e) {
        return e.length === 1 && e[0] === "default" ? (t.default ? t.default() : []).reduce((n, s) => n = [...n, ...gt(s.children) ? s.children : [s]], []) : e.reduce((r, n) => {
            const s = t[n];
            return s && (r[n] = s()), r
        }, {})
    }

    function gw(t) {
        return It
    }
    const DE = {
        name: "i18n-t",
        props: Zt({
            keypath: {
                type: String,
                required: !0
            },
            plural: {
                type: [Number, String],
                validator: t => Ut(t) || !isNaN(t)
            }
        }, xp),
        setup(t, e) {
            const {
                slots: r,
                attrs: n
            } = e, s = t.i18n || Dp({
                useScope: t.scope,
                __useComponent: !0
            });
            return () => {
                const o = Object.keys(r).filter(_ => _ !== "_"),
                    c = {};
                t.locale && (c.locale = t.locale), t.plural !== void 0 && (c.plural = ye(t.plural) ? +t.plural : t.plural);
                const u = Hee(e, o),
                    f = s[Qd](t.keypath, u, c),
                    h = Zt({}, n),
                    m = ye(t.tag) || mt(t.tag) ? t.tag : gw();
                return Ah(m, h, f)
            }
        }
    };

    function Vee(t) {
        return gt(t) && !ye(t[0])
    }

    function mw(t, e, r, n) {
        const {
            slots: s,
            attrs: o
        } = e;
        return () => {
            const c = {
                part: !0
            };
            let u = {};
            t.locale && (c.locale = t.locale), ye(t.format) ? c.key = t.format : mt(t.format) && (ye(t.format.key) && (c.key = t.format.key), u = Object.keys(t.format).reduce((b, C) => r.includes(C) ? Zt({}, b, {
                [C]: t.format[C]
            }) : b, {}));
            const f = n(t.value, c, u);
            let h = [c.key];
            gt(f) ? h = f.map((b, C) => {
                const L = s[b.type],
                    M = L ? L({
                        [b.type]: b.value,
                        index: C,
                        parts: f
                    }) : [b.value];
                return Vee(M) && (M[0].key = `${b.type}-${C}`), M
            }) : ye(f) && (h = [f]);
            const m = Zt({}, o),
                _ = ye(t.tag) || mt(t.tag) ? t.tag : gw();
            return Ah(_, m, h)
        }
    }
    const ME = {
            name: "i18n-n",
            props: Zt({
                value: {
                    type: Number,
                    required: !0
                },
                format: {
                    type: [String, Object]
                }
            }, xp),
            setup(t, e) {
                const r = t.i18n || Dp({
                    useScope: "parent",
                    __useComponent: !0
                });
                return mw(t, e, uw, (...n) => r[th](...n))
            }
        },
        FE = {
            name: "i18n-d",
            props: Zt({
                value: {
                    type: [Number, Date],
                    required: !0
                },
                format: {
                    type: [String, Object]
                }
            }, xp),
            setup(t, e) {
                const r = t.i18n || Dp({
                    useScope: "parent",
                    __useComponent: !0
                });
                return mw(t, e, lw, (...n) => r[eh](...n))
            }
        };

    function Yee(t, e) {
        const r = t;
        if (t.mode === "composition") return r.__getInstance(e) || t.global; {
            const n = r.__getInstance(e);
            return n != null ? n.__composer : t.global.__composer
        }
    }

    function qee(t) {
        const e = c => {
            const {
                instance: u,
                modifiers: f,
                value: h
            } = c;
            if (!u || !u.$) throw jt(Dt.UNEXPECTED_ERROR);
            const m = Yee(t, u.$),
                _ = UE(h);
            return [Reflect.apply(m.t, m, [...BE(_)]), m]
        };
        return {
            created: (c, u) => {
                const [f, h] = e(u);
                qd && t.global === h && (c.__i18nWatcher = Zi(h.locale, () => {
                    u.instance && u.instance.$forceUpdate()
                })), c.__composer = h, c.textContent = f
            },
            unmounted: c => {
                qd && c.__i18nWatcher && (c.__i18nWatcher(), c.__i18nWatcher = void 0, delete c.__i18nWatcher), c.__composer && (c.__composer = void 0, delete c.__composer)
            },
            beforeUpdate: (c, {
                value: u
            }) => {
                if (c.__composer) {
                    const f = c.__composer,
                        h = UE(u);
                    c.textContent = Reflect.apply(f.t, f, [...BE(h)])
                }
            },
            getSSRProps: c => {
                const [u] = e(c);
                return {
                    textContent: u
                }
            }
        }
    }

    function UE(t) {
        if (ye(t)) return {
            path: t
        };
        if (Me(t)) {
            if (!("path" in t)) throw jt(Dt.REQUIRED_VALUE, "path");
            return t
        } else throw jt(Dt.INVALID_VALUE)
    }

    function BE(t) {
        const {
            path: e,
            locale: r,
            args: n,
            choice: s,
            plural: o
        } = t, c = {}, u = n || {};
        return ye(r) && (c.locale = r), Ut(s) && (c.plural = s), Ut(o) && (c.plural = o), [e, u, c]
    }

    function zee(t, e, ...r) {
        const n = Me(r[0]) ? r[0] : {},
            s = !!n.useI18nComponentName;
        (ze(n.globalInstall) ? n.globalInstall : !0) && (t.component(s ? "i18n" : DE.name, DE), t.component(ME.name, ME), t.component(FE.name, FE)), t.directive("t", qee(e))
    }

    function Xee(t, e, r) {
        return {
            beforeCreate() {
                const n = is();
                if (!n) throw jt(Dt.UNEXPECTED_ERROR);
                const s = this.$options;
                if (s.i18n) {
                    const o = s.i18n;
                    s.__i18n && (o.__i18n = s.__i18n), o.__root = e, this === this.$root ? this.$i18n = jE(t, o) : (o.__injectWithOption = !0, this.$i18n = nh(o))
                } else s.__i18n ? this === this.$root ? this.$i18n = jE(t, s) : this.$i18n = nh({
                    __i18n: s.__i18n,
                    __injectWithOption: !0,
                    __root: e
                }) : this.$i18n = t;
                s.__i18nGlobal && pw(e, s, s), t.__onComponentInstanceCreated(this.$i18n), r.__setInstance(n, this.$i18n), this.$t = (...o) => this.$i18n.t(...o), this.$rt = (...o) => this.$i18n.rt(...o), this.$tc = (...o) => this.$i18n.tc(...o), this.$te = (o, c) => this.$i18n.te(o, c), this.$d = (...o) => this.$i18n.d(...o), this.$n = (...o) => this.$i18n.n(...o), this.$tm = o => this.$i18n.tm(o)
            },
            mounted() {},
            unmounted() {
                const n = is();
                if (!n) throw jt(Dt.UNEXPECTED_ERROR);
                delete this.$t, delete this.$rt, delete this.$tc, delete this.$te, delete this.$d, delete this.$n, delete this.$tm, r.__deleteInstance(n), delete this.$i18n
            }
        }
    }

    function jE(t, e) {
        t.locale = e.locale || t.locale, t.fallbackLocale = e.fallbackLocale || t.fallbackLocale, t.missing = e.missing || t.missing, t.silentTranslationWarn = e.silentTranslationWarn || t.silentFallbackWarn, t.silentFallbackWarn = e.silentFallbackWarn || t.silentFallbackWarn, t.formatFallbackMessages = e.formatFallbackMessages || t.formatFallbackMessages, t.postTranslation = e.postTranslation || t.postTranslation, t.warnHtmlInMessage = e.warnHtmlInMessage || t.warnHtmlInMessage, t.escapeParameterHtml = e.escapeParameterHtml || t.escapeParameterHtml, t.sync = e.sync || t.sync, t.__composer[dw](e.pluralizationRules || t.pluralizationRules);
        const r = Kl(t.locale, {
            messages: e.messages,
            __i18n: e.__i18n
        });
        return Object.keys(r).forEach(n => t.mergeLocaleMessage(n, r[n])), e.datetimeFormats && Object.keys(e.datetimeFormats).forEach(n => t.mergeDateTimeFormat(n, e.datetimeFormats[n])), e.numberFormats && Object.keys(e.numberFormats).forEach(n => t.mergeNumberFormat(n, e.numberFormats[n])), t
    }
    const Jee = Ti("global-vue-i18n");

    function Zee(t = {}, e) {
        const r = ze(t.legacy) ? t.legacy : !0,
            n = ze(t.globalInjection) ? t.globalInjection : !0,
            s = r ? !!t.allowComposition : !0,
            o = new Map,
            [c, u] = Qee(t, r),
            f = Ti("");

        function h(b) {
            return o.get(b) || null
        }

        function m(b, C) {
            o.set(b, C)
        }

        function _(b) {
            o.delete(b)
        } {
            const b = {
                get mode() {
                    return r ? "legacy" : "composition"
                },
                get allowComposition() {
                    return s
                },
                async install(C, ...L) {
                    C.__VUE_I18N_SYMBOL__ = f, C.provide(C.__VUE_I18N_SYMBOL__, b), !r && n && cte(C, b.global), zee(C, b, ...L), r && C.mixin(Xee(u, u.__composer, b));
                    const M = C.unmount;
                    C.unmount = () => {
                        b.dispose(), M()
                    }
                },
                get global() {
                    return u
                },
                dispose() {
                    c.stop()
                },
                __instances: o,
                __getInstance: h,
                __setInstance: m,
                __deleteInstance: _
            };
            return b
        }
    }

    function Dp(t = {}) {
        const e = is();
        if (e == null) throw jt(Dt.MUST_BE_CALL_SETUP_TOP);
        if (!e.isCE && e.appContext.app != null && !e.appContext.app.__VUE_I18N_SYMBOL__) throw jt(Dt.NOT_INSLALLED);
        const r = ete(e),
            n = rte(r),
            s = Wee(e),
            o = tte(t, s);
        if (r.mode === "legacy" && !t.__useComponent) {
            if (!r.allowComposition) throw jt(Dt.NOT_AVAILABLE_IN_LEGACY_MODE);
            return ste(e, o, n, t)
        }
        if (o === "global") return pw(n, t, s), n;
        if (o === "parent") {
            let f = nte(r, e, t.__useComponent);
            return f == null && (f = n), f
        }
        const c = r;
        let u = c.__getInstance(e);
        if (u == null) {
            const f = Zt({}, t);
            "__i18n" in s && (f.__i18n = s.__i18n), n && (f.__root = n), u = kp(f), ite(c, e), c.__setInstance(e, u)
        }
        return u
    }

    function Qee(t, e, r) {
        const n = uN(); {
            const s = e ? n.run(() => nh(t)) : n.run(() => kp(t));
            if (s == null) throw jt(Dt.UNEXPECTED_ERROR);
            return [n, s]
        }
    }

    function ete(t) {
        {
            const e = Ji(t.isCE ? Jee : t.appContext.app.__VUE_I18N_SYMBOL__);
            if (!e) throw jt(t.isCE ? Dt.NOT_INSLALLED_WITH_PROVIDE : Dt.UNEXPECTED_ERROR);
            return e
        }
    }

    function tte(t, e) {
        return jl(t) ? "__i18n" in e ? "local" : "global" : t.useScope ? t.useScope : "local"
    }

    function rte(t) {
        return t.mode === "composition" ? t.global : t.global.__composer
    }

    function nte(t, e, r = !1) {
        let n = null;
        const s = e.root;
        let o = e.parent;
        for (; o != null;) {
            const c = t;
            if (t.mode === "composition") n = c.__getInstance(o);
            else {
                const u = c.__getInstance(o);
                u != null && (n = u.__composer, r && n && !n[hw] && (n = null))
            }
            if (n != null || s === o) break;
            o = o.parent
        }
        return n
    }

    function ite(t, e, r) {
        Eh(() => {}, e), bh(() => {
            t.__deleteInstance(e)
        }, e)
    }

    function ste(t, e, r, n = {}) {
        const s = e === "local",
            o = FN(null);
        if (s && t.proxy && !(t.proxy.$options.i18n || t.proxy.$options.__i18n)) throw jt(Dt.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
        const c = ze(n.inheritLocale) ? n.inheritLocale : !0,
            u = rn(s && c ? r.locale.value : ye(n.locale) ? n.locale : vo),
            f = rn(s && c ? r.fallbackLocale.value : ye(n.fallbackLocale) || gt(n.fallbackLocale) || Me(n.fallbackLocale) || n.fallbackLocale === !1 ? n.fallbackLocale : u.value),
            h = rn(Kl(u.value, n)),
            m = rn(Me(n.datetimeFormats) ? n.datetimeFormats : {
                [u.value]: {}
            }),
            _ = rn(Me(n.numberFormats) ? n.numberFormats : {
                [u.value]: {}
            }),
            b = s ? r.missingWarn : ze(n.missingWarn) || pi(n.missingWarn) ? n.missingWarn : !0,
            C = s ? r.fallbackWarn : ze(n.fallbackWarn) || pi(n.fallbackWarn) ? n.fallbackWarn : !0,
            L = s ? r.fallbackRoot : ze(n.fallbackRoot) ? n.fallbackRoot : !0,
            M = !!n.fallbackFormat,
            B = Nt(n.missing) ? n.missing : null,
            I = Nt(n.postTranslation) ? n.postTranslation : null,
            K = s ? r.warnHtmlMessage : ze(n.warnHtmlMessage) ? n.warnHtmlMessage : !0,
            Y = !!n.escapeParameter,
            G = s ? r.modifiers : Me(n.modifiers) ? n.modifiers : {},
            j = n.pluralRules || s && r.pluralRules;

        function z() {
            return [u.value, f.value, h.value, m.value, _.value]
        }
        const ie = Rr({
                get: () => o.value ? o.value.locale.value : u.value,
                set: p => {
                    o.value && (o.value.locale.value = p), u.value = p
                }
            }),
            oe = Rr({
                get: () => o.value ? o.value.fallbackLocale.value : f.value,
                set: p => {
                    o.value && (o.value.fallbackLocale.value = p), f.value = p
                }
            }),
            ue = Rr(() => o.value ? o.value.messages.value : h.value),
            Ie = Rr(() => m.value),
            Ce = Rr(() => _.value);

        function fe() {
            return o.value ? o.value.getPostTranslationHandler() : I
        }

        function we(p) {
            o.value && o.value.setPostTranslationHandler(p)
        }

        function F() {
            return o.value ? o.value.getMissingHandler() : B
        }

        function te(p) {
            o.value && o.value.setMissingHandler(p)
        }

        function de(p) {
            return z(), p()
        }

        function Ee(...p) {
            return o.value ? de(() => Reflect.apply(o.value.t, null, [...p])) : de(() => "")
        }

        function ve(...p) {
            return o.value ? Reflect.apply(o.value.rt, null, [...p]) : ""
        }

        function Se(...p) {
            return o.value ? de(() => Reflect.apply(o.value.d, null, [...p])) : de(() => "")
        }

        function xe(...p) {
            return o.value ? de(() => Reflect.apply(o.value.n, null, [...p])) : de(() => "")
        }

        function Ue(p) {
            return o.value ? o.value.tm(p) : {}
        }

        function Ze(p, O) {
            return o.value ? o.value.te(p, O) : !1
        }

        function wt(p) {
            return o.value ? o.value.getLocaleMessage(p) : {}
        }

        function Sr(p, O) {
            o.value && (o.value.setLocaleMessage(p, O), h.value[p] = O)
        }

        function er(p, O) {
            o.value && o.value.mergeLocaleMessage(p, O)
        }

        function pr(p) {
            return o.value ? o.value.getDateTimeFormat(p) : {}
        }

        function nt(p, O) {
            o.value && (o.value.setDateTimeFormat(p, O), m.value[p] = O)
        }

        function Et(p, O) {
            o.value && o.value.mergeDateTimeFormat(p, O)
        }

        function it(p) {
            return o.value ? o.value.getNumberFormat(p) : {}
        }

        function Lt(p, O) {
            o.value && (o.value.setNumberFormat(p, O), _.value[p] = O)
        }

        function Wt(p, O) {
            o.value && o.value.mergeNumberFormat(p, O)
        }
        const kt = {
            get id() {
                return o.value ? o.value.id : -1
            },
            locale: ie,
            fallbackLocale: oe,
            messages: ue,
            datetimeFormats: Ie,
            numberFormats: Ce,
            get inheritLocale() {
                return o.value ? o.value.inheritLocale : c
            },
            set inheritLocale(p) {
                o.value && (o.value.inheritLocale = p)
            },
            get availableLocales() {
                return o.value ? o.value.availableLocales : Object.keys(h.value)
            },
            get modifiers() {
                return o.value ? o.value.modifiers : G
            },
            get pluralRules() {
                return o.value ? o.value.pluralRules : j
            },
            get isGlobal() {
                return o.value ? o.value.isGlobal : !1
            },
            get missingWarn() {
                return o.value ? o.value.missingWarn : b
            },
            set missingWarn(p) {
                o.value && (o.value.missingWarn = p)
            },
            get fallbackWarn() {
                return o.value ? o.value.fallbackWarn : C
            },
            set fallbackWarn(p) {
                o.value && (o.value.missingWarn = p)
            },
            get fallbackRoot() {
                return o.value ? o.value.fallbackRoot : L
            },
            set fallbackRoot(p) {
                o.value && (o.value.fallbackRoot = p)
            },
            get fallbackFormat() {
                return o.value ? o.value.fallbackFormat : M
            },
            set fallbackFormat(p) {
                o.value && (o.value.fallbackFormat = p)
            },
            get warnHtmlMessage() {
                return o.value ? o.value.warnHtmlMessage : K
            },
            set warnHtmlMessage(p) {
                o.value && (o.value.warnHtmlMessage = p)
            },
            get escapeParameter() {
                return o.value ? o.value.escapeParameter : Y
            },
            set escapeParameter(p) {
                o.value && (o.value.escapeParameter = p)
            },
            t: Ee,
            getPostTranslationHandler: fe,
            setPostTranslationHandler: we,
            getMissingHandler: F,
            setMissingHandler: te,
            rt: ve,
            d: Se,
            n: xe,
            tm: Ue,
            te: Ze,
            getLocaleMessage: wt,
            setLocaleMessage: Sr,
            mergeLocaleMessage: er,
            getDateTimeFormat: pr,
            setDateTimeFormat: nt,
            mergeDateTimeFormat: Et,
            getNumberFormat: it,
            setNumberFormat: Lt,
            mergeNumberFormat: Wt
        };

        function g(p) {
            p.locale.value = u.value, p.fallbackLocale.value = f.value, Object.keys(h.value).forEach(O => {
                p.mergeLocaleMessage(O, h.value[O])
            }), Object.keys(m.value).forEach(O => {
                p.mergeDateTimeFormat(O, m.value[O])
            }), Object.keys(_.value).forEach(O => {
                p.mergeNumberFormat(O, _.value[O])
            }), p.escapeParameter = Y, p.fallbackFormat = M, p.fallbackRoot = L, p.fallbackWarn = C, p.missingWarn = b, p.warnHtmlMessage = K
        }
        return wb(() => {
            if (t.proxy == null || t.proxy.$i18n == null) throw jt(Dt.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
            const p = o.value = t.proxy.$i18n.__composer;
            e === "global" ? (u.value = p.locale.value, f.value = p.fallbackLocale.value, h.value = p.messages.value, m.value = p.datetimeFormats.value, _.value = p.numberFormats.value) : s && g(p)
        }), kt
    }
    const ate = ["locale", "fallbackLocale", "availableLocales"],
        ote = ["t", "rt", "d", "n", "tm"];

    function cte(t, e) {
        const r = Object.create(null);
        ate.forEach(n => {
            const s = Object.getOwnPropertyDescriptor(e, n);
            if (!s) throw jt(Dt.UNEXPECTED_ERROR);
            const o = Jt(s.value) ? {
                get() {
                    return s.value.value
                },
                set(c) {
                    s.value.value = c
                }
            } : {
                get() {
                    return s.get && s.get()
                }
            };
            Object.defineProperty(r, n, o)
        }), t.config.globalProperties.$i18n = r, ote.forEach(n => {
            const s = Object.getOwnPropertyDescriptor(e, n);
            if (!s || !s.value) throw jt(Dt.UNEXPECTED_ERROR);
            Object.defineProperty(t.config.globalProperties, `$${n}`, s)
        })
    }
    Pee(Mee);
    Lee(gee);
    kee(rw);
    const lte = vt({
            data() {
                return {
                    isVisible: !1,
                    options: null,
                    timeout: null
                }
            },
            beforeMount() {
                this.$registerToast(this)
            },
            methods: {
                show(t) {
                    this.isVisible = !0, this.options = t, this.timeout && (window.clearTimeout(this.timeout), this.timeout = null), t.duration && (this.timeout = window.setTimeout(() => {
                        this.hide()
                    }, t.duration))
                },
                hide() {
                    this.isVisible = !1, this.options = null, this.timeout && (window.clearTimeout(this.timeout), this.timeout = null)
                }
            }
        }),
        ute = "main/internal/prototype/assets/c8afd972.svg",
        fte = {
            class: "constrain"
        },
        dte = {
            class: "text"
        },
        hte = {
            class: "subtext"
        },
        pte = {
            key: 0,
            class: "warning"
        },
        gte = {
            key: 1,
            class: "spinner"
        };

    function mte(t, e, r, n, s, o) {
        return se(), ui(gl, {
            name: "toast-transition"
        }, {
            default: _h(() => [t.isVisible && t.options ? (se(), le("div", {
                key: 0,
                class: qe([t.options.type, "jbg toast"])
            }, [ae("div", fte, [ae("img", {
                class: "close",
                alt: "close",
                src: ute,
                onClick: e[0] || (e[0] = (...c) => t.hide && t.hide(...c)),
                onKeydown: e[1] || (e[1] = Wb((...c) => t.hide && t.hide(...c), ["esc"]))
            }, null, 32), ae("p", dte, Tt(t.options.text), 1), ae("p", hte, Tt(t.options.subtext), 1), t.options.warning ? (se(), le("p", pte, Tt(t.options.warning), 1)) : We("", !0), t.options.type === "reconnecting" ? (se(), le("div", gte)) : We("", !0)])], 2)) : We("", !0)]),
            _: 1
        })
    }
    const vte = $t(lte, [
            ["render", mte],
            ["__scopeId", "data-v-0a136edf"]
        ]),
        yte = {
            install: t => {
                if (t.config.globalProperties.$showToast) return;
                let e;
                const r = o => {
                        if (!e) throw new Error("No ToastComponent is registered to show");
                        e.show(o)
                    },
                    n = () => {
                        if (!e) throw new Error("No ToastComponent is registered to hide");
                        e.hide()
                    },
                    s = o => {
                        e = o
                    };
                t.component("Toast", vte), t.config.globalProperties.$showToast = r, t.config.globalProperties.$hideToast = n, t.config.globalProperties.$registerToast = s
            }
        },
        _te = vt({
            props: {
                options: Object,
                mainView: Object
            },
            setup() {
                return {
                    fatalError: Ji(po.fatal.error)
                }
            },
            data() {
                return {
                    isKicked: !1
                }
            },
            computed: {
                ecast() {
                    return this.$ecast
                },
                ecastValues() {
                    return this.$ecastValues ? this.$ecastValues : null
                },
                classes() {
                    return [`locale-${this.$i18n.locale}`]
                },
                shouldShowFatal() {
                    var t, e;
                    return (e = (t = this.fatalError) == null ? void 0 : t.hasCrashed) != null ? e : !1
                }
            },
            beforeMount() {
                this.$ecast.on("connection", t => {
                    this.onConnection(t)
                }), this.$ecast.on("client/connected", t => {
                    this.onClientConnected(t)
                }), this.$ecast.on("client/disconnected", t => {
                    this.onClientDisconnected(t)
                }), this.$ecast.on("room/exit", () => {
                    this.onRoomExit()
                }), this.$ecast.on("client/kicked", () => {
                    this.onClientKicked()
                }), this.$ecast.on("socketClose", () => {
                    this.onSocketClose()
                })
            },
            beforeUnmount() {},
            methods: {
                onConnection(t) {
                    switch (t.status) {
                        case "waiting":
                        case "connecting":
                            this.$showToast({
                                type: "reconnecting",
                                text: this.$t("TOAST.RECONNECTING.CONTROLLER.TEXT"),
                                subtext: this.$t("TOAST.RECONNECTING.CONTROLLER.SUBTEXT", {
                                    attempt: t.attempt
                                })
                            });
                            break;
                        case "connected":
                            this.$showToast({
                                type: "generic",
                                text: this.$t("TOAST.RECONNECTED.TEXT"),
                                subtext: this.$t("TOAST.RECONNECTED.SUBTEXT"),
                                duration: 1500
                            });
                            break
                    }
                },
                onClientConnected(t) {
                    t.role === "host" && (!t.reconnect || this.$showToast({
                        type: "generic",
                        text: this.$t("TOAST.RECONNECTED.TEXT"),
                        subtext: this.$t("TOAST.RECONNECTED.SUBTEXT"),
                        duration: 1500
                    }))
                },
                onClientDisconnected(t) {
                    t.role === "host" && this.$showToast({
                        type: "reconnecting",
                        text: this.$t("TOAST.RECONNECTING.GAME.TEXT"),
                        subtext: this.$t("TOAST.RECONNECTING.GAME.SUBTEXT")
                    })
                },
                async onRoomExit() {
                    this.$hideToast(), await this.$showModal("Error", {
                        image: "moon",
                        text: this.$t("ERROR.ROOM_DISCONNECTED"),
                        subtext: this.$t("ERROR.ROOM_DESTROYED"),
                        dismissText: this.$t("ACTION.OK")
                    }), window.location.reload()
                },
                async onClientKicked() {
                    this.isKicked = !0, this.$hideToast(), await this.$showModal("Error", {
                        image: "tear",
                        text: this.$t("ERROR.ROOM_DISCONNECTED"),
                        subtext: this.$t("ERROR.PLAYER_KICKED"),
                        dismissText: this.$t("ACTION.OK")
                    }), window.location.reload()
                },
                async onSocketClose() {
                    this.isKicked || (this.$hideToast(), await this.$showModal("Error", {
                        image: "moon",
                        text: this.$t("ERROR.ROOM_DISCONNECTED"),
                        dismissText: this.$t("ACTION.OK")
                    }), window.location.reload())
                }
            }
        });

    function Ete(t, e, r, n, s, o) {
        const c = ni("Fatal"),
            u = ni("TextDescriptions"),
            f = ni("Debug"),
            h = ni("Modal"),
            m = ni("Toast");
        return t.shouldShowFatal ? (se(), ui(c, {
            key: 0
        })) : (se(), le(It, {
            key: 1
        }, [xt(u), (se(), ui(Sh(t.mainView), $h({
            id: "game",
            class: t.classes
        }, t.ecastValues), null, 16, ["class"])), xt(f), xt(h), xt(m)], 64))
    }
    const GE = $t(_te, [
            ["render", Ete]
        ]),
        bte = t => {
            let e;
            window.tv.register({
                connect: r => (e = new br.WSClient(r), e.connect()),
                mount: r => {
                    var c, u, f, h;
                    GE.name = r.app;
                    let n = OL(GE, {
                        options: r,
                        mainView: t.MainView
                    });
                    r.client && (e = r.client);
                    let s;
                    (c = r.room) != null && c.locale && (s = r.room.locale), (f = (u = r.match) == null ? void 0 : u.params) != null && f.locale && (s = r.match.params.locale), Ms.set(s);
                    const o = Zee({
                        fallbackLocale: "en",
                        locale: Ms.locale,
                        messages: Ms.mergeMessages(R3, (h = t.messages) != null ? h : {})
                    });
                    if (n.use(Pq), n.use(wQ), n.use(f9, {
                            replayer: r.replayer,
                            client: e,
                            room: r.room
                        }), n.use(R7, {
                            wsClient: e,
                            room: r.room,
                            welcome: r.welcome
                        }), n.use(CZ), n.use(o), n.use(rQ, {
                            i18n: o
                        }), n.use(RQ), n.use(NQ), n.use(yte), n.use(PQ), t.plugins) {
                        const m = _ => _.plugin === void 0;
                        t.plugins.forEach(_ => {
                            if (m(_)) {
                                n.use(_);
                                return
                            }
                            n.use(_.plugin, ..._.options)
                        })
                    }
                    return n.mount("#app"), () => {
                        n.unmount(), n = null
                    }
                },
                info: r => ({
                    tag: r.app,
                    version: r.version,
                    type: r.type,
                    wrapper: "vue",
                    branch: r.branch
                })
            })
        },
        Tte = vt({
            components: {
                Fallbacks: MK
            },
            ecastKeys: {
                player: ({
                    id: t
                }) => `player:${t}`
            },
            props: {
                player: Object
            }
        }),
        Ste = {
            class: "main"
        };

    function Ote(t, e, r, n, s, o) {
        const c = ni("Fallbacks");
        return se(), le("div", Ste, [t.player ? (se(), ui(c, {
            key: 0,
            player: t.player
        }, null, 8, ["player"])) : We("", !0)])
    }
    const wte = $t(Tte, [
        ["render", Ote]
    ]);
    bte({
        MainView: wte
    })
});
export default Cte();
//# sourceMappingURL=55dd546c.js.map