var dN = Object.defineProperty;
var hN = (e, t, r) => t in e ? dN(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r;
var pN = (e, t) => () => (t || e((t = {
    exports: {}
}).exports, t), t.exports);
var ge = (e, t, r) => (hN(e, typeof t != "symbol" ? t + "" : t, r), r);
var xie = pN((Mie, xS) => {
    const gN = function() {
        const t = document.createElement("link").relList;
        if (t && t.supports && t.supports("modulepreload")) return;
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
    };
    gN();

    function gh(e, t) {
        const r = Object.create(null),
            n = e.split(",");
        for (let s = 0; s < n.length; s++) r[n[s]] = !0;
        return t ? s => !!r[s.toLowerCase()] : s => !!r[s]
    }
    const mN = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
        vN = gh(mN);

    function Qb(e) {
        return !!e || e === ""
    }

    function sl(e) {
        if (ke(e)) {
            const t = {};
            for (let r = 0; r < e.length; r++) {
                const n = e[r],
                    s = Vt(n) ? bN(n) : sl(n);
                if (s)
                    for (const o in s) t[o] = s[o]
            }
            return t
        } else {
            if (Vt(e)) return e;
            if (Lt(e)) return e
        }
    }
    const yN = /;(?![^(]*\))/g,
        _N = /:(.+)/;

    function bN(e) {
        const t = {};
        return e.split(yN).forEach(r => {
            if (r) {
                const n = r.split(_N);
                n.length > 1 && (t[n[0].trim()] = n[1].trim())
            }
        }), t
    }

    function Fe(e) {
        let t = "";
        if (Vt(e)) t = e;
        else if (ke(e))
            for (let r = 0; r < e.length; r++) {
                const n = Fe(e[r]);
                n && (t += n + " ")
            } else if (Lt(e))
                for (const r in e) e[r] && (t += r + " ");
        return t.trim()
    }

    function EN(e, t) {
        if (e.length !== t.length) return !1;
        let r = !0;
        for (let n = 0; r && n < e.length; n++) r = al(e[n], t[n]);
        return r
    }

    function al(e, t) {
        if (e === t) return !0;
        let r = bv(e),
            n = bv(t);
        if (r || n) return r && n ? e.getTime() === t.getTime() : !1;
        if (r = Ya(e), n = Ya(t), r || n) return e === t;
        if (r = ke(e), n = ke(t), r || n) return r && n ? EN(e, t) : !1;
        if (r = Lt(e), n = Lt(t), r || n) {
            if (!r || !n) return !1;
            const s = Object.keys(e).length,
                o = Object.keys(t).length;
            if (s !== o) return !1;
            for (const c in e) {
                const u = e.hasOwnProperty(c),
                    f = t.hasOwnProperty(c);
                if (u && !f || !u && f || !al(e[c], t[c])) return !1
            }
        }
        return String(e) === String(t)
    }

    function eE(e, t) {
        return e.findIndex(r => al(r, t))
    }
    const De = e => Vt(e) ? e : e == null ? "" : ke(e) || Lt(e) && (e.toString === nE || !Ke(e.toString)) ? JSON.stringify(e, tE, 2) : String(e),
        tE = (e, t) => t && t.__v_isRef ? tE(e, t.value) : Ms(t) ? {
            [`Map(${t.size})`]: [...t.entries()].reduce((r, [n, s]) => (r[`${n} =>`] = s, r), {})
        } : cl(t) ? {
            [`Set(${t.size})`]: [...t.values()]
        } : Lt(t) && !ke(t) && !iE(t) ? String(t) : t,
        mt = {},
        Ds = [],
        dn = () => {},
        TN = () => !1,
        SN = /^on[^a-z]/,
        ol = e => SN.test(e),
        mh = e => e.startsWith("onUpdate:"),
        nr = Object.assign,
        vh = (e, t) => {
            const r = e.indexOf(t);
            r > -1 && e.splice(r, 1)
        },
        wN = Object.prototype.hasOwnProperty,
        rt = (e, t) => wN.call(e, t),
        ke = Array.isArray,
        Ms = e => co(e) === "[object Map]",
        cl = e => co(e) === "[object Set]",
        bv = e => co(e) === "[object Date]",
        Ke = e => typeof e == "function",
        Vt = e => typeof e == "string",
        Ya = e => typeof e == "symbol",
        Lt = e => e !== null && typeof e == "object",
        rE = e => Lt(e) && Ke(e.then) && Ke(e.catch),
        nE = Object.prototype.toString,
        co = e => nE.call(e),
        ON = e => co(e).slice(8, -1),
        iE = e => co(e) === "[object Object]",
        yh = e => Vt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
        Ac = gh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
        ll = e => {
            const t = Object.create(null);
            return r => t[r] || (t[r] = e(r))
        },
        IN = /-(\w)/g,
        On = ll(e => e.replace(IN, (t, r) => r ? r.toUpperCase() : "")),
        CN = /\B([A-Z])/g,
        as = ll(e => e.replace(CN, "-$1").toLowerCase()),
        ul = ll(e => e.charAt(0).toUpperCase() + e.slice(1)),
        Rc = ll(e => e ? `on${ul(e)}` : ""),
        za = (e, t) => !Object.is(e, t),
        Nc = (e, t) => {
            for (let r = 0; r < e.length; r++) e[r](t)
        },
        Uc = (e, t, r) => {
            Object.defineProperty(e, t, {
                configurable: !0,
                enumerable: !1,
                value: r
            })
        },
        Fc = e => {
            const t = parseFloat(e);
            return isNaN(t) ? e : t
        };
    let Ev;
    const $N = () => Ev || (Ev = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
    let En;
    class sE {
        constructor(t = !1) {
            this.active = !0, this.effects = [], this.cleanups = [], !t && En && (this.parent = En, this.index = (En.scopes || (En.scopes = [])).push(this) - 1)
        }
        run(t) {
            if (this.active) {
                const r = En;
                try {
                    return En = this, t()
                } finally {
                    En = r
                }
            }
        }
        on() {
            En = this
        }
        off() {
            En = this.parent
        }
        stop(t) {
            if (this.active) {
                let r, n;
                for (r = 0, n = this.effects.length; r < n; r++) this.effects[r].stop();
                for (r = 0, n = this.cleanups.length; r < n; r++) this.cleanups[r]();
                if (this.scopes)
                    for (r = 0, n = this.scopes.length; r < n; r++) this.scopes[r].stop(!0);
                if (this.parent && !t) {
                    const s = this.parent.scopes.pop();
                    s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index)
                }
                this.active = !1
            }
        }
    }

    function AN(e) {
        return new sE(e)
    }

    function RN(e, t = En) {
        t && t.active && t.effects.push(e)
    }
    const _h = e => {
            const t = new Set(e);
            return t.w = 0, t.n = 0, t
        },
        aE = e => (e.w & hi) > 0,
        oE = e => (e.n & hi) > 0,
        NN = ({
            deps: e
        }) => {
            if (e.length)
                for (let t = 0; t < e.length; t++) e[t].w |= hi
        },
        LN = e => {
            const {
                deps: t
            } = e;
            if (t.length) {
                let r = 0;
                for (let n = 0; n < t.length; n++) {
                    const s = t[n];
                    aE(s) && !oE(s) ? s.delete(e) : t[r++] = s, s.w &= ~hi, s.n &= ~hi
                }
                t.length = r
            }
        },
        od = new WeakMap;
    let La = 0,
        hi = 1;
    const cd = 30;
    let ln;
    const Zi = Symbol(""),
        ld = Symbol("");
    class bh {
        constructor(t, r = null, n) {
            this.fn = t, this.scheduler = r, this.active = !0, this.deps = [], this.parent = void 0, RN(this, n)
        }
        run() {
            if (!this.active) return this.fn();
            let t = ln,
                r = li;
            for (; t;) {
                if (t === this) return;
                t = t.parent
            }
            try {
                return this.parent = ln, ln = this, li = !0, hi = 1 << ++La, La <= cd ? NN(this) : Tv(this), this.fn()
            } finally {
                La <= cd && LN(this), hi = 1 << --La, ln = this.parent, li = r, this.parent = void 0, this.deferStop && this.stop()
            }
        }
        stop() {
            ln === this ? this.deferStop = !0 : this.active && (Tv(this), this.onStop && this.onStop(), this.active = !1)
        }
    }

    function Tv(e) {
        const {
            deps: t
        } = e;
        if (t.length) {
            for (let r = 0; r < t.length; r++) t[r].delete(e);
            t.length = 0
        }
    }
    let li = !0;
    const cE = [];

    function ea() {
        cE.push(li), li = !1
    }

    function ta() {
        const e = cE.pop();
        li = e === void 0 ? !0 : e
    }

    function Mr(e, t, r) {
        if (li && ln) {
            let n = od.get(e);
            n || od.set(e, n = new Map);
            let s = n.get(r);
            s || n.set(r, s = _h()), lE(s)
        }
    }

    function lE(e, t) {
        let r = !1;
        La <= cd ? oE(e) || (e.n |= hi, r = !aE(e)) : r = !e.has(ln), r && (e.add(ln), ln.deps.push(e))
    }

    function Fn(e, t, r, n, s, o) {
        const c = od.get(e);
        if (!c) return;
        let u = [];
        if (t === "clear") u = [...c.values()];
        else if (r === "length" && ke(e)) c.forEach((f, h) => {
            (h === "length" || h >= n) && u.push(f)
        });
        else switch (r !== void 0 && u.push(c.get(r)), t) {
            case "add":
                ke(e) ? yh(r) && u.push(c.get("length")) : (u.push(c.get(Zi)), Ms(e) && u.push(c.get(ld)));
                break;
            case "delete":
                ke(e) || (u.push(c.get(Zi)), Ms(e) && u.push(c.get(ld)));
                break;
            case "set":
                Ms(e) && u.push(c.get(Zi));
                break
        }
        if (u.length === 1) u[0] && ud(u[0]);
        else {
            const f = [];
            for (const h of u) h && f.push(...h);
            ud(_h(f))
        }
    }

    function ud(e, t) {
        const r = ke(e) ? e : [...e];
        for (const n of r) n.computed && Sv(n);
        for (const n of r) n.computed || Sv(n)
    }

    function Sv(e, t) {
        (e !== ln || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run())
    }
    const kN = gh("__proto__,__v_isRef,__isVue"),
        uE = new Set(Object.getOwnPropertyNames(Symbol).filter(e => e !== "arguments" && e !== "caller").map(e => Symbol[e]).filter(Ya)),
        PN = Eh(),
        xN = Eh(!1, !0),
        DN = Eh(!0),
        wv = MN();

    function MN() {
        const e = {};
        return ["includes", "indexOf", "lastIndexOf"].forEach(t => {
            e[t] = function(...r) {
                const n = ot(this);
                for (let o = 0, c = this.length; o < c; o++) Mr(n, "get", o + "");
                const s = n[t](...r);
                return s === -1 || s === !1 ? n[t](...r.map(ot)) : s
            }
        }), ["push", "pop", "shift", "unshift", "splice"].forEach(t => {
            e[t] = function(...r) {
                ea();
                const n = ot(this)[t].apply(this, r);
                return ta(), n
            }
        }), e
    }

    function Eh(e = !1, t = !1) {
        return function(n, s, o) {
            if (s === "__v_isReactive") return !e;
            if (s === "__v_isReadonly") return e;
            if (s === "__v_isShallow") return t;
            if (s === "__v_raw" && o === (e ? t ? QN : gE : t ? pE : hE).get(n)) return n;
            const c = ke(n);
            if (!e && c && rt(wv, s)) return Reflect.get(wv, s, o);
            const u = Reflect.get(n, s, o);
            return (Ya(s) ? uE.has(s) : kN(s)) || (e || Mr(n, "get", s), t) ? u : tr(u) ? c && yh(s) ? u : u.value : Lt(u) ? e ? mE(u) : Bn(u) : u
        }
    }
    const UN = fE(),
        FN = fE(!0);

    function fE(e = !1) {
        return function(r, n, s, o) {
            let c = r[n];
            if (Xa(c) && tr(c) && !tr(s)) return !1;
            if (!e && !Xa(s) && (fd(s) || (s = ot(s), c = ot(c)), !ke(r) && tr(c) && !tr(s))) return c.value = s, !0;
            const u = ke(r) && yh(n) ? Number(n) < r.length : rt(r, n),
                f = Reflect.set(r, n, s, o);
            return r === ot(o) && (u ? za(s, c) && Fn(r, "set", n, s) : Fn(r, "add", n, s)), f
        }
    }

    function BN(e, t) {
        const r = rt(e, t);
        e[t];
        const n = Reflect.deleteProperty(e, t);
        return n && r && Fn(e, "delete", t, void 0), n
    }

    function jN(e, t) {
        const r = Reflect.has(e, t);
        return (!Ya(t) || !uE.has(t)) && Mr(e, "has", t), r
    }

    function GN(e) {
        return Mr(e, "iterate", ke(e) ? "length" : Zi), Reflect.ownKeys(e)
    }
    const dE = {
            get: PN,
            set: UN,
            deleteProperty: BN,
            has: jN,
            ownKeys: GN
        },
        WN = {
            get: DN,
            set(e, t) {
                return !0
            },
            deleteProperty(e, t) {
                return !0
            }
        },
        KN = nr({}, dE, {
            get: xN,
            set: FN
        }),
        Th = e => e,
        fl = e => Reflect.getPrototypeOf(e);

    function uc(e, t, r = !1, n = !1) {
        e = e.__v_raw;
        const s = ot(e),
            o = ot(t);
        r || (t !== o && Mr(s, "get", t), Mr(s, "get", o));
        const {
            has: c
        } = fl(s), u = n ? Th : r ? Oh : Ja;
        if (c.call(s, t)) return u(e.get(t));
        if (c.call(s, o)) return u(e.get(o));
        e !== s && e.get(t)
    }

    function fc(e, t = !1) {
        const r = this.__v_raw,
            n = ot(r),
            s = ot(e);
        return t || (e !== s && Mr(n, "has", e), Mr(n, "has", s)), e === s ? r.has(e) : r.has(e) || r.has(s)
    }

    function dc(e, t = !1) {
        return e = e.__v_raw, !t && Mr(ot(e), "iterate", Zi), Reflect.get(e, "size", e)
    }

    function Ov(e) {
        e = ot(e);
        const t = ot(this);
        return fl(t).has.call(t, e) || (t.add(e), Fn(t, "add", e, e)), this
    }

    function Iv(e, t) {
        t = ot(t);
        const r = ot(this),
            {
                has: n,
                get: s
            } = fl(r);
        let o = n.call(r, e);
        o || (e = ot(e), o = n.call(r, e));
        const c = s.call(r, e);
        return r.set(e, t), o ? za(t, c) && Fn(r, "set", e, t) : Fn(r, "add", e, t), this
    }

    function Cv(e) {
        const t = ot(this),
            {
                has: r,
                get: n
            } = fl(t);
        let s = r.call(t, e);
        s || (e = ot(e), s = r.call(t, e)), n && n.call(t, e);
        const o = t.delete(e);
        return s && Fn(t, "delete", e, void 0), o
    }

    function $v() {
        const e = ot(this),
            t = e.size !== 0,
            r = e.clear();
        return t && Fn(e, "clear", void 0, void 0), r
    }

    function hc(e, t) {
        return function(n, s) {
            const o = this,
                c = o.__v_raw,
                u = ot(c),
                f = t ? Th : e ? Oh : Ja;
            return !e && Mr(u, "iterate", Zi), c.forEach((h, m) => n.call(s, f(h), f(m), o))
        }
    }

    function pc(e, t, r) {
        return function(...n) {
            const s = this.__v_raw,
                o = ot(s),
                c = Ms(o),
                u = e === "entries" || e === Symbol.iterator && c,
                f = e === "keys" && c,
                h = s[e](...n),
                m = r ? Th : t ? Oh : Ja;
            return !t && Mr(o, "iterate", f ? ld : Zi), {
                next() {
                    const {
                        value: y,
                        done: E
                    } = h.next();
                    return E ? {
                        value: y,
                        done: E
                    } : {
                        value: u ? [m(y[0]), m(y[1])] : m(y),
                        done: E
                    }
                },
                [Symbol.iterator]() {
                    return this
                }
            }
        }
    }

    function Zn(e) {
        return function(...t) {
            return e === "delete" ? !1 : this
        }
    }

    function HN() {
        const e = {
                get(o) {
                    return uc(this, o)
                },
                get size() {
                    return dc(this)
                },
                has: fc,
                add: Ov,
                set: Iv,
                delete: Cv,
                clear: $v,
                forEach: hc(!1, !1)
            },
            t = {
                get(o) {
                    return uc(this, o, !1, !0)
                },
                get size() {
                    return dc(this)
                },
                has: fc,
                add: Ov,
                set: Iv,
                delete: Cv,
                clear: $v,
                forEach: hc(!1, !0)
            },
            r = {
                get(o) {
                    return uc(this, o, !0)
                },
                get size() {
                    return dc(this, !0)
                },
                has(o) {
                    return fc.call(this, o, !0)
                },
                add: Zn("add"),
                set: Zn("set"),
                delete: Zn("delete"),
                clear: Zn("clear"),
                forEach: hc(!0, !1)
            },
            n = {
                get(o) {
                    return uc(this, o, !0, !0)
                },
                get size() {
                    return dc(this, !0)
                },
                has(o) {
                    return fc.call(this, o, !0)
                },
                add: Zn("add"),
                set: Zn("set"),
                delete: Zn("delete"),
                clear: Zn("clear"),
                forEach: hc(!0, !0)
            };
        return ["keys", "values", "entries", Symbol.iterator].forEach(o => {
            e[o] = pc(o, !1, !1), r[o] = pc(o, !0, !1), t[o] = pc(o, !1, !0), n[o] = pc(o, !0, !0)
        }), [e, r, t, n]
    }
    const [VN, qN, YN, zN] = HN();

    function Sh(e, t) {
        const r = t ? e ? zN : YN : e ? qN : VN;
        return (n, s, o) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? n : Reflect.get(rt(r, s) && s in n ? r : n, s, o)
    }
    const XN = {
            get: Sh(!1, !1)
        },
        JN = {
            get: Sh(!1, !0)
        },
        ZN = {
            get: Sh(!0, !1)
        },
        hE = new WeakMap,
        pE = new WeakMap,
        gE = new WeakMap,
        QN = new WeakMap;

    function eL(e) {
        switch (e) {
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

    function tL(e) {
        return e.__v_skip || !Object.isExtensible(e) ? 0 : eL(ON(e))
    }

    function Bn(e) {
        return Xa(e) ? e : wh(e, !1, dE, XN, hE)
    }

    function rL(e) {
        return wh(e, !1, KN, JN, pE)
    }

    function mE(e) {
        return wh(e, !0, WN, ZN, gE)
    }

    function wh(e, t, r, n, s) {
        if (!Lt(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
        const o = s.get(e);
        if (o) return o;
        const c = tL(e);
        if (c === 0) return e;
        const u = new Proxy(e, c === 2 ? n : r);
        return s.set(e, u), u
    }

    function Us(e) {
        return Xa(e) ? Us(e.__v_raw) : !!(e && e.__v_isReactive)
    }

    function Xa(e) {
        return !!(e && e.__v_isReadonly)
    }

    function fd(e) {
        return !!(e && e.__v_isShallow)
    }

    function vE(e) {
        return Us(e) || Xa(e)
    }

    function ot(e) {
        const t = e && e.__v_raw;
        return t ? ot(t) : e
    }

    function yE(e) {
        return Uc(e, "__v_skip", !0), e
    }
    const Ja = e => Lt(e) ? Bn(e) : e,
        Oh = e => Lt(e) ? mE(e) : e;

    function _E(e) {
        li && ln && (e = ot(e), lE(e.dep || (e.dep = _h())))
    }

    function bE(e, t) {
        e = ot(e), e.dep && ud(e.dep)
    }

    function tr(e) {
        return !!(e && e.__v_isRef === !0)
    }

    function un(e) {
        return EE(e, !1)
    }

    function nL(e) {
        return EE(e, !0)
    }

    function EE(e, t) {
        return tr(e) ? e : new iL(e, t)
    }
    class iL {
        constructor(t, r) {
            this.__v_isShallow = r, this.dep = void 0, this.__v_isRef = !0, this._rawValue = r ? t : ot(t), this._value = r ? t : Ja(t)
        }
        get value() {
            return _E(this), this._value
        }
        set value(t) {
            t = this.__v_isShallow ? t : ot(t), za(t, this._rawValue) && (this._rawValue = t, this._value = this.__v_isShallow ? t : Ja(t), bE(this))
        }
    }

    function sL(e) {
        return tr(e) ? e.value : e
    }
    const aL = {
        get: (e, t, r) => sL(Reflect.get(e, t, r)),
        set: (e, t, r, n) => {
            const s = e[t];
            return tr(s) && !tr(r) ? (s.value = r, !0) : Reflect.set(e, t, r, n)
        }
    };

    function TE(e) {
        return Us(e) ? e : new Proxy(e, aL)
    }
    class oL {
        constructor(t, r, n, s) {
            this._setter = r, this.dep = void 0, this.__v_isRef = !0, this._dirty = !0, this.effect = new bh(t, () => {
                this._dirty || (this._dirty = !0, bE(this))
            }), this.effect.computed = this, this.effect.active = this._cacheable = !s, this.__v_isReadonly = n
        }
        get value() {
            const t = ot(this);
            return _E(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value
        }
        set value(t) {
            this._setter(t)
        }
    }

    function cL(e, t, r = !1) {
        let n, s;
        const o = Ke(e);
        return o ? (n = e, s = dn) : (n = e.get, s = e.set), new oL(n, s, o || !s, r)
    }

    function ui(e, t, r, n) {
        let s;
        try {
            s = n ? e(...n) : e()
        } catch (o) {
            dl(o, t, r)
        }
        return s
    }

    function Jr(e, t, r, n) {
        if (Ke(e)) {
            const o = ui(e, t, r, n);
            return o && rE(o) && o.catch(c => {
                dl(c, t, r)
            }), o
        }
        const s = [];
        for (let o = 0; o < e.length; o++) s.push(Jr(e[o], t, r, n));
        return s
    }

    function dl(e, t, r, n = !0) {
        const s = t ? t.vnode : null;
        if (t) {
            let o = t.parent;
            const c = t.proxy,
                u = r;
            for (; o;) {
                const h = o.ec;
                if (h) {
                    for (let m = 0; m < h.length; m++)
                        if (h[m](e, c, u) === !1) return
                }
                o = o.parent
            }
            const f = t.appContext.config.errorHandler;
            if (f) {
                ui(f, null, 10, [e, c, u]);
                return
            }
        }
        lL(e, r, s, n)
    }

    function lL(e, t, r, n = !0) {
        console.error(e)
    }
    let Bc = !1,
        dd = !1;
    const Pr = [];
    let Un = 0;
    const Da = [];
    let ka = null,
        $s = 0;
    const Ma = [];
    let ni = null,
        As = 0;
    const SE = Promise.resolve();
    let Ih = null,
        hd = null;

    function uL(e) {
        const t = Ih || SE;
        return e ? t.then(this ? e.bind(this) : e) : t
    }

    function fL(e) {
        let t = Un + 1,
            r = Pr.length;
        for (; t < r;) {
            const n = t + r >>> 1;
            Za(Pr[n]) < e ? t = n + 1 : r = n
        }
        return t
    }

    function wE(e) {
        (!Pr.length || !Pr.includes(e, Bc && e.allowRecurse ? Un + 1 : Un)) && e !== hd && (e.id == null ? Pr.push(e) : Pr.splice(fL(e.id), 0, e), OE())
    }

    function OE() {
        !Bc && !dd && (dd = !0, Ih = SE.then($E))
    }

    function dL(e) {
        const t = Pr.indexOf(e);
        t > Un && Pr.splice(t, 1)
    }

    function IE(e, t, r, n) {
        ke(e) ? r.push(...e) : (!t || !t.includes(e, e.allowRecurse ? n + 1 : n)) && r.push(e), OE()
    }

    function hL(e) {
        IE(e, ka, Da, $s)
    }

    function pL(e) {
        IE(e, ni, Ma, As)
    }

    function hl(e, t = null) {
        if (Da.length) {
            for (hd = t, ka = [...new Set(Da)], Da.length = 0, $s = 0; $s < ka.length; $s++) ka[$s]();
            ka = null, $s = 0, hd = null, hl(e, t)
        }
    }

    function CE(e) {
        if (hl(), Ma.length) {
            const t = [...new Set(Ma)];
            if (Ma.length = 0, ni) {
                ni.push(...t);
                return
            }
            for (ni = t, ni.sort((r, n) => Za(r) - Za(n)), As = 0; As < ni.length; As++) ni[As]();
            ni = null, As = 0
        }
    }
    const Za = e => e.id == null ? 1 / 0 : e.id;

    function $E(e) {
        dd = !1, Bc = !0, hl(e), Pr.sort((r, n) => Za(r) - Za(n));
        const t = dn;
        try {
            for (Un = 0; Un < Pr.length; Un++) {
                const r = Pr[Un];
                r && r.active !== !1 && ui(r, null, 14)
            }
        } finally {
            Un = 0, Pr.length = 0, CE(), Bc = !1, Ih = null, (Pr.length || Da.length || Ma.length) && $E(e)
        }
    }

    function gL(e, t, ...r) {
        if (e.isUnmounted) return;
        const n = e.vnode.props || mt;
        let s = r;
        const o = t.startsWith("update:"),
            c = o && t.slice(7);
        if (c && c in n) {
            const m = `${c==="modelValue"?"model":c}Modifiers`,
                {
                    number: y,
                    trim: E
                } = n[m] || mt;
            E && (s = r.map(I => I.trim())), y && (s = r.map(Fc))
        }
        let u, f = n[u = Rc(t)] || n[u = Rc(On(t))];
        !f && o && (f = n[u = Rc(as(t))]), f && Jr(f, e, 6, s);
        const h = n[u + "Once"];
        if (h) {
            if (!e.emitted) e.emitted = {};
            else if (e.emitted[u]) return;
            e.emitted[u] = !0, Jr(h, e, 6, s)
        }
    }

    function AE(e, t, r = !1) {
        const n = t.emitsCache,
            s = n.get(e);
        if (s !== void 0) return s;
        const o = e.emits;
        let c = {},
            u = !1;
        if (!Ke(e)) {
            const f = h => {
                const m = AE(h, t, !0);
                m && (u = !0, nr(c, m))
            };
            !r && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f)
        }
        return !o && !u ? (n.set(e, null), null) : (ke(o) ? o.forEach(f => c[f] = null) : nr(c, o), n.set(e, c), c)
    }

    function pl(e, t) {
        return !e || !ol(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), rt(e, t[0].toLowerCase() + t.slice(1)) || rt(e, as(t)) || rt(e, t))
    }
    let cr = null,
        gl = null;

    function jc(e) {
        const t = cr;
        return cr = e, gl = e && e.type.__scopeId || null, t
    }

    function ml(e) {
        gl = e
    }

    function vl() {
        gl = null
    }

    function Ch(e, t = cr, r) {
        if (!t || e._n) return e;
        const n = (...s) => {
            n._d && Fv(-1);
            const o = jc(t),
                c = e(...s);
            return jc(o), n._d && Fv(1), c
        };
        return n._n = !0, n._c = !0, n._d = !0, n
    }

    function gf(e) {
        const {
            type: t,
            vnode: r,
            proxy: n,
            withProxy: s,
            props: o,
            propsOptions: [c],
            slots: u,
            attrs: f,
            emit: h,
            render: m,
            renderCache: y,
            data: E,
            setupState: I,
            ctx: k,
            inheritAttrs: M
        } = e;
        let j, C;
        const H = jc(e);
        try {
            if (r.shapeFlag & 4) {
                const W = s || n;
                j = Sn(m.call(W, W, y, o, I, E, k)), C = f
            } else {
                const W = t;
                j = Sn(W.length > 1 ? W(o, {
                    attrs: f,
                    slots: u,
                    emit: h
                }) : W(o, null)), C = t.props ? f : mL(f)
            }
        } catch (W) {
            Ba.length = 0, dl(W, e, 1), j = at(Zr)
        }
        let X = j;
        if (C && M !== !1) {
            const W = Object.keys(C),
                {
                    shapeFlag: G
                } = X;
            W.length && G & 7 && (c && W.some(mh) && (C = vL(C, c)), X = pi(X, C))
        }
        return r.dirs && (X = pi(X), X.dirs = X.dirs ? X.dirs.concat(r.dirs) : r.dirs), r.transition && (X.transition = r.transition), j = X, jc(H), j
    }
    const mL = e => {
            let t;
            for (const r in e)(r === "class" || r === "style" || ol(r)) && ((t || (t = {}))[r] = e[r]);
            return t
        },
        vL = (e, t) => {
            const r = {};
            for (const n in e)(!mh(n) || !(n.slice(9) in t)) && (r[n] = e[n]);
            return r
        };

    function yL(e, t, r) {
        const {
            props: n,
            children: s,
            component: o
        } = e, {
            props: c,
            children: u,
            patchFlag: f
        } = t, h = o.emitsOptions;
        if (t.dirs || t.transition) return !0;
        if (r && f >= 0) {
            if (f & 1024) return !0;
            if (f & 16) return n ? Av(n, c, h) : !!c;
            if (f & 8) {
                const m = t.dynamicProps;
                for (let y = 0; y < m.length; y++) {
                    const E = m[y];
                    if (c[E] !== n[E] && !pl(h, E)) return !0
                }
            }
        } else return (s || u) && (!u || !u.$stable) ? !0 : n === c ? !1 : n ? c ? Av(n, c, h) : !0 : !!c;
        return !1
    }

    function Av(e, t, r) {
        const n = Object.keys(t);
        if (n.length !== Object.keys(e).length) return !0;
        for (let s = 0; s < n.length; s++) {
            const o = n[s];
            if (t[o] !== e[o] && !pl(r, o)) return !0
        }
        return !1
    }

    function _L({
        vnode: e,
        parent: t
    }, r) {
        for (; t && t.subTree === e;)(e = t.vnode).el = r, t = t.parent
    }
    const bL = e => e.__isSuspense;

    function EL(e, t) {
        t && t.pendingBranch ? ke(e) ? t.effects.push(...e) : t.effects.push(e) : pL(e)
    }

    function TL(e, t) {
        if (Xt) {
            let r = Xt.provides;
            const n = Xt.parent && Xt.parent.provides;
            n === r && (r = Xt.provides = Object.create(n)), r[e] = t
        }
    }

    function Qi(e, t, r = !1) {
        const n = Xt || cr;
        if (n) {
            const s = n.parent == null ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides;
            if (s && e in s) return s[e];
            if (arguments.length > 1) return r && Ke(t) ? t.call(n.proxy) : t
        }
    }

    function SL(e, t) {
        return $h(e, null, {
            flush: "post"
        })
    }
    const Rv = {};

    function es(e, t, r) {
        return $h(e, t, r)
    }

    function $h(e, t, {
        immediate: r,
        deep: n,
        flush: s,
        onTrack: o,
        onTrigger: c
    } = mt) {
        const u = Xt;
        let f, h = !1,
            m = !1;
        if (tr(e) ? (f = () => e.value, h = fd(e)) : Us(e) ? (f = () => e, n = !0) : ke(e) ? (m = !0, h = e.some(C => Us(C) || fd(C)), f = () => e.map(C => {
                if (tr(C)) return C.value;
                if (Us(C)) return Ji(C);
                if (Ke(C)) return ui(C, u, 2)
            })) : Ke(e) ? t ? f = () => ui(e, u, 2) : f = () => {
                if (!(u && u.isUnmounted)) return y && y(), Jr(e, u, 3, [E])
            } : f = dn, t && n) {
            const C = f;
            f = () => Ji(C())
        }
        let y, E = C => {
            y = j.onStop = () => {
                ui(C, u, 4)
            }
        };
        if (eo) return E = dn, t ? r && Jr(t, u, 3, [f(), m ? [] : void 0, E]) : f(), dn;
        let I = m ? [] : Rv;
        const k = () => {
            if (!!j.active)
                if (t) {
                    const C = j.run();
                    (n || h || (m ? C.some((H, X) => za(H, I[X])) : za(C, I))) && (y && y(), Jr(t, u, 3, [C, I === Rv ? void 0 : I, E]), I = C)
                } else j.run()
        };
        k.allowRecurse = !!t;
        let M;
        s === "sync" ? M = k : s === "post" ? M = () => Sr(k, u && u.suspense) : M = () => hL(k);
        const j = new bh(f, M);
        return t ? r ? k() : I = j.run() : s === "post" ? Sr(j.run.bind(j), u && u.suspense) : j.run(), () => {
            j.stop(), u && u.scope && vh(u.scope.effects, j)
        }
    }

    function wL(e, t, r) {
        const n = this.proxy,
            s = Vt(e) ? e.includes(".") ? RE(n, e) : () => n[e] : e.bind(n, n);
        let o;
        Ke(t) ? o = t : (o = t.handler, r = t);
        const c = Xt;
        qs(this);
        const u = $h(s, o.bind(n), r);
        return c ? qs(c) : ts(), u
    }

    function RE(e, t) {
        const r = t.split(".");
        return () => {
            let n = e;
            for (let s = 0; s < r.length && n; s++) n = n[r[s]];
            return n
        }
    }

    function Ji(e, t) {
        if (!Lt(e) || e.__v_skip || (t = t || new Set, t.has(e))) return e;
        if (t.add(e), tr(e)) Ji(e.value, t);
        else if (ke(e))
            for (let r = 0; r < e.length; r++) Ji(e[r], t);
        else if (cl(e) || Ms(e)) e.forEach(r => {
            Ji(r, t)
        });
        else if (iE(e))
            for (const r in e) Ji(e[r], t);
        return e
    }

    function OL() {
        const e = {
            isMounted: !1,
            isLeaving: !1,
            isUnmounting: !1,
            leavingVNodes: new Map
        };
        return bl(() => {
            e.isMounted = !0
        }), DE(() => {
            e.isUnmounting = !0
        }), e
    }
    const zr = [Function, Array],
        IL = {
            name: "BaseTransition",
            props: {
                mode: String,
                appear: Boolean,
                persisted: Boolean,
                onBeforeEnter: zr,
                onEnter: zr,
                onAfterEnter: zr,
                onEnterCancelled: zr,
                onBeforeLeave: zr,
                onLeave: zr,
                onAfterLeave: zr,
                onLeaveCancelled: zr,
                onBeforeAppear: zr,
                onAppear: zr,
                onAfterAppear: zr,
                onAppearCancelled: zr
            },
            setup(e, {
                slots: t
            }) {
                const r = gi(),
                    n = OL();
                let s;
                return () => {
                    const o = t.default && kE(t.default(), !0);
                    if (!o || !o.length) return;
                    let c = o[0];
                    if (o.length > 1) {
                        for (const M of o)
                            if (M.type !== Zr) {
                                c = M;
                                break
                            }
                    }
                    const u = ot(e),
                        {
                            mode: f
                        } = u;
                    if (n.isLeaving) return mf(c);
                    const h = Nv(c);
                    if (!h) return mf(c);
                    const m = pd(h, u, n, r);
                    gd(h, m);
                    const y = r.subTree,
                        E = y && Nv(y);
                    let I = !1;
                    const {
                        getTransitionKey: k
                    } = h.type;
                    if (k) {
                        const M = k();
                        s === void 0 ? s = M : M !== s && (s = M, I = !0)
                    }
                    if (E && E.type !== Zr && (!Vi(h, E) || I)) {
                        const M = pd(E, u, n, r);
                        if (gd(E, M), f === "out-in") return n.isLeaving = !0, M.afterLeave = () => {
                            n.isLeaving = !1, r.update()
                        }, mf(c);
                        f === "in-out" && h.type !== Zr && (M.delayLeave = (j, C, H) => {
                            const X = LE(n, E);
                            X[String(E.key)] = E, j._leaveCb = () => {
                                C(), j._leaveCb = void 0, delete m.delayedLeave
                            }, m.delayedLeave = H
                        })
                    }
                    return c
                }
            }
        },
        NE = IL;

    function LE(e, t) {
        const {
            leavingVNodes: r
        } = e;
        let n = r.get(t.type);
        return n || (n = Object.create(null), r.set(t.type, n)), n
    }

    function pd(e, t, r, n) {
        const {
            appear: s,
            mode: o,
            persisted: c = !1,
            onBeforeEnter: u,
            onEnter: f,
            onAfterEnter: h,
            onEnterCancelled: m,
            onBeforeLeave: y,
            onLeave: E,
            onAfterLeave: I,
            onLeaveCancelled: k,
            onBeforeAppear: M,
            onAppear: j,
            onAfterAppear: C,
            onAppearCancelled: H
        } = t, X = String(e.key), W = LE(r, e), G = (ce, ue) => {
            ce && Jr(ce, n, 9, ue)
        }, Z = (ce, ue) => {
            const $e = ue[1];
            G(ce, ue), ke(ce) ? ce.every(Ce => Ce.length <= 1) && $e() : ce.length <= 1 && $e()
        }, oe = {
            mode: o,
            persisted: c,
            beforeEnter(ce) {
                let ue = u;
                if (!r.isMounted)
                    if (s) ue = M || u;
                    else return;
                ce._leaveCb && ce._leaveCb(!0);
                const $e = W[X];
                $e && Vi(e, $e) && $e.el._leaveCb && $e.el._leaveCb(), G(ue, [ce])
            },
            enter(ce) {
                let ue = f,
                    $e = h,
                    Ce = m;
                if (!r.isMounted)
                    if (s) ue = j || f, $e = C || h, Ce = H || m;
                    else return;
                let fe = !1;
                const Ie = ce._enterCb = U => {
                    fe || (fe = !0, U ? G(Ce, [ce]) : G($e, [ce]), oe.delayedLeave && oe.delayedLeave(), ce._enterCb = void 0)
                };
                ue ? Z(ue, [ce, Ie]) : Ie()
            },
            leave(ce, ue) {
                const $e = String(e.key);
                if (ce._enterCb && ce._enterCb(!0), r.isUnmounting) return ue();
                G(y, [ce]);
                let Ce = !1;
                const fe = ce._leaveCb = Ie => {
                    Ce || (Ce = !0, ue(), Ie ? G(k, [ce]) : G(I, [ce]), ce._leaveCb = void 0, W[$e] === e && delete W[$e])
                };
                W[$e] = e, E ? Z(E, [ce, fe]) : fe()
            },
            clone(ce) {
                return pd(ce, t, r, n)
            }
        };
        return oe
    }

    function mf(e) {
        if (yl(e)) return e = pi(e), e.children = null, e
    }

    function Nv(e) {
        return yl(e) ? e.children ? e.children[0] : void 0 : e
    }

    function gd(e, t) {
        e.shapeFlag & 6 && e.component ? gd(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
    }

    function kE(e, t = !1, r) {
        let n = [],
            s = 0;
        for (let o = 0; o < e.length; o++) {
            let c = e[o];
            const u = r == null ? c.key : String(r) + String(c.key != null ? c.key : o);
            c.type === ze ? (c.patchFlag & 128 && s++, n = n.concat(kE(c.children, t, u))) : (t || c.type !== Zr) && n.push(u != null ? pi(c, {
                key: u
            }) : c)
        }
        if (s > 1)
            for (let o = 0; o < n.length; o++) n[o].patchFlag = -2;
        return n
    }

    function Je(e) {
        return Ke(e) ? {
            setup: e,
            name: e.name
        } : e
    }
    const Ua = e => !!e.type.__asyncLoader,
        yl = e => e.type.__isKeepAlive;

    function CL(e, t) {
        PE(e, "a", t)
    }

    function $L(e, t) {
        PE(e, "da", t)
    }

    function PE(e, t, r = Xt) {
        const n = e.__wdc || (e.__wdc = () => {
            let s = r;
            for (; s;) {
                if (s.isDeactivated) return;
                s = s.parent
            }
            return e()
        });
        if (_l(t, n, r), r) {
            let s = r.parent;
            for (; s && s.parent;) yl(s.parent.vnode) && AL(n, t, r, s), s = s.parent
        }
    }

    function AL(e, t, r, n) {
        const s = _l(t, e, n, !0);
        El(() => {
            vh(n[t], s)
        }, r)
    }

    function _l(e, t, r = Xt, n = !1) {
        if (r) {
            const s = r[e] || (r[e] = []),
                o = t.__weh || (t.__weh = (...c) => {
                    if (r.isUnmounted) return;
                    ea(), qs(r);
                    const u = Jr(t, r, e, c);
                    return ts(), ta(), u
                });
            return n ? s.unshift(o) : s.push(o), o
        }
    }
    const jn = e => (t, r = Xt) => (!eo || e === "sp") && _l(e, t, r),
        xE = jn("bm"),
        bl = jn("m"),
        RL = jn("bu"),
        NL = jn("u"),
        DE = jn("bum"),
        El = jn("um"),
        LL = jn("sp"),
        kL = jn("rtg"),
        PL = jn("rtc");

    function xL(e, t = Xt) {
        _l("ec", e, t)
    }

    function Ve(e, t) {
        const r = cr;
        if (r === null) return e;
        const n = Ol(r) || r.proxy,
            s = e.dirs || (e.dirs = []);
        for (let o = 0; o < t.length; o++) {
            let [c, u, f, h = mt] = t[o];
            Ke(c) && (c = {
                mounted: c,
                updated: c
            }), c.deep && Ji(u), s.push({
                dir: c,
                instance: n,
                value: u,
                oldValue: void 0,
                arg: f,
                modifiers: h
            })
        }
        return e
    }

    function Di(e, t, r, n) {
        const s = e.dirs,
            o = t && t.dirs;
        for (let c = 0; c < s.length; c++) {
            const u = s[c];
            o && (u.oldValue = o[c].value);
            let f = u.dir[n];
            f && (ea(), Jr(f, r, 8, [e.el, u, e, t]), ta())
        }
    }
    const Ah = "components",
        DL = "directives";

    function vt(e, t) {
        return Nh(Ah, e, !0, t) || e
    }
    const ME = Symbol();

    function Rh(e) {
        return Vt(e) ? Nh(Ah, e, !1) || e : e || ME
    }

    function Kt(e) {
        return Nh(DL, e)
    }

    function Nh(e, t, r = !0, n = !1) {
        const s = cr || Xt;
        if (s) {
            const o = s.type;
            if (e === Ah) {
                const u = dk(o, !1);
                if (u && (u === t || u === On(t) || u === ul(On(t)))) return o
            }
            const c = Lv(s[e] || o[e], t) || Lv(s.appContext[e], t);
            return !c && n ? o : c
        }
    }

    function Lv(e, t) {
        return e && (e[t] || e[On(t)] || e[ul(On(t))])
    }

    function Qr(e, t, r, n) {
        let s;
        const o = r && r[n];
        if (ke(e) || Vt(e)) {
            s = new Array(e.length);
            for (let c = 0, u = e.length; c < u; c++) s[c] = t(e[c], c, void 0, o && o[c])
        } else if (typeof e == "number") {
            s = new Array(e);
            for (let c = 0; c < e; c++) s[c] = t(c + 1, c, void 0, o && o[c])
        } else if (Lt(e))
            if (e[Symbol.iterator]) s = Array.from(e, (c, u) => t(c, u, void 0, o && o[u]));
            else {
                const c = Object.keys(e);
                s = new Array(c.length);
                for (let u = 0, f = c.length; u < f; u++) {
                    const h = c[u];
                    s[u] = t(e[h], h, u, o && o[u])
                }
            }
        else s = [];
        return r && (r[n] = s), s
    }

    function ML(e, t, r = {}, n, s) {
        if (cr.isCE || cr.parent && Ua(cr.parent) && cr.parent.isCE) return at("slot", t === "default" ? null : {
            name: t
        }, n && n());
        let o = e[t];
        o && o._c && (o._d = !1), F();
        const c = o && UE(o(r)),
            u = At(ze, {
                key: r.key || `_${t}`
            }, c || (n ? n() : []), c && e._ === 1 ? 64 : -2);
        return !s && u.scopeId && (u.slotScopeIds = [u.scopeId + "-s"]), o && o._c && (o._d = !0), u
    }

    function UE(e) {
        return e.some(t => Kc(t) ? !(t.type === Zr || t.type === ze && !UE(t.children)) : !0) ? e : null
    }

    function UL(e) {
        const t = {};
        for (const r in e) t[Rc(r)] = e[r];
        return t
    }
    const md = e => e ? JE(e) ? Ol(e) || e.proxy : md(e.parent) : null,
        Gc = nr(Object.create(null), {
            $: e => e,
            $el: e => e.vnode.el,
            $data: e => e.data,
            $props: e => e.props,
            $attrs: e => e.attrs,
            $slots: e => e.slots,
            $refs: e => e.refs,
            $parent: e => md(e.parent),
            $root: e => md(e.root),
            $emit: e => e.emit,
            $options: e => BE(e),
            $forceUpdate: e => e.f || (e.f = () => wE(e.update)),
            $nextTick: e => e.n || (e.n = uL.bind(e.proxy)),
            $watch: e => wL.bind(e)
        }),
        FL = {
            get({
                _: e
            }, t) {
                const {
                    ctx: r,
                    setupState: n,
                    data: s,
                    props: o,
                    accessCache: c,
                    type: u,
                    appContext: f
                } = e;
                let h;
                if (t[0] !== "$") {
                    const I = c[t];
                    if (I !== void 0) switch (I) {
                        case 1:
                            return n[t];
                        case 2:
                            return s[t];
                        case 4:
                            return r[t];
                        case 3:
                            return o[t]
                    } else {
                        if (n !== mt && rt(n, t)) return c[t] = 1, n[t];
                        if (s !== mt && rt(s, t)) return c[t] = 2, s[t];
                        if ((h = e.propsOptions[0]) && rt(h, t)) return c[t] = 3, o[t];
                        if (r !== mt && rt(r, t)) return c[t] = 4, r[t];
                        vd && (c[t] = 0)
                    }
                }
                const m = Gc[t];
                let y, E;
                if (m) return t === "$attrs" && Mr(e, "get", t), m(e);
                if ((y = u.__cssModules) && (y = y[t])) return y;
                if (r !== mt && rt(r, t)) return c[t] = 4, r[t];
                if (E = f.config.globalProperties, rt(E, t)) return E[t]
            },
            set({
                _: e
            }, t, r) {
                const {
                    data: n,
                    setupState: s,
                    ctx: o
                } = e;
                return s !== mt && rt(s, t) ? (s[t] = r, !0) : n !== mt && rt(n, t) ? (n[t] = r, !0) : rt(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = r, !0)
            },
            has({
                _: {
                    data: e,
                    setupState: t,
                    accessCache: r,
                    ctx: n,
                    appContext: s,
                    propsOptions: o
                }
            }, c) {
                let u;
                return !!r[c] || e !== mt && rt(e, c) || t !== mt && rt(t, c) || (u = o[0]) && rt(u, c) || rt(n, c) || rt(Gc, c) || rt(s.config.globalProperties, c)
            },
            defineProperty(e, t, r) {
                return r.get != null ? e._.accessCache[t] = 0 : rt(r, "value") && this.set(e, t, r.value, null), Reflect.defineProperty(e, t, r)
            }
        };
    let vd = !0;

    function BL(e) {
        const t = BE(e),
            r = e.proxy,
            n = e.ctx;
        vd = !1, t.beforeCreate && kv(t.beforeCreate, e, "bc");
        const {
            data: s,
            computed: o,
            methods: c,
            watch: u,
            provide: f,
            inject: h,
            created: m,
            beforeMount: y,
            mounted: E,
            beforeUpdate: I,
            updated: k,
            activated: M,
            deactivated: j,
            beforeDestroy: C,
            beforeUnmount: H,
            destroyed: X,
            unmounted: W,
            render: G,
            renderTracked: Z,
            renderTriggered: oe,
            errorCaptured: ce,
            serverPrefetch: ue,
            expose: $e,
            inheritAttrs: Ce,
            components: fe,
            directives: Ie,
            filters: U
        } = t;
        if (h && jL(h, n, null, e.appContext.config.unwrapInjectedRef), c)
            for (const be in c) {
                const ve = c[be];
                Ke(ve) && (n[be] = ve.bind(r))
            }
        if (s) {
            const be = s.call(r, r);
            Lt(be) && (e.data = Bn(be))
        }
        if (vd = !0, o)
            for (const be in o) {
                const ve = o[be],
                    Se = Ke(ve) ? ve.bind(r, r) : Ke(ve.get) ? ve.get.bind(r, r) : dn,
                    Me = !Ke(ve) && Ke(ve.set) ? ve.set.bind(r) : dn,
                    Ge = xr({
                        get: Se,
                        set: Me
                    });
                Object.defineProperty(n, be, {
                    enumerable: !0,
                    configurable: !0,
                    get: () => Ge.value,
                    set: nt => Ge.value = nt
                })
            }
        if (u)
            for (const be in u) FE(u[be], n, r, be);
        if (f) {
            const be = Ke(f) ? f.call(r) : f;
            Reflect.ownKeys(be).forEach(ve => {
                TL(ve, be[ve])
            })
        }
        m && kv(m, e, "c");

        function de(be, ve) {
            ke(ve) ? ve.forEach(Se => be(Se.bind(r))) : ve && be(ve.bind(r))
        }
        if (de(xE, y), de(bl, E), de(RL, I), de(NL, k), de(CL, M), de($L, j), de(xL, ce), de(PL, Z), de(kL, oe), de(DE, H), de(El, W), de(LL, ue), ke($e))
            if ($e.length) {
                const be = e.exposed || (e.exposed = {});
                $e.forEach(ve => {
                    Object.defineProperty(be, ve, {
                        get: () => r[ve],
                        set: Se => r[ve] = Se
                    })
                })
            } else e.exposed || (e.exposed = {});
        G && e.render === dn && (e.render = G), Ce != null && (e.inheritAttrs = Ce), fe && (e.components = fe), Ie && (e.directives = Ie)
    }

    function jL(e, t, r = dn, n = !1) {
        ke(e) && (e = yd(e));
        for (const s in e) {
            const o = e[s];
            let c;
            Lt(o) ? "default" in o ? c = Qi(o.from || s, o.default, !0) : c = Qi(o.from || s) : c = Qi(o), tr(c) && n ? Object.defineProperty(t, s, {
                enumerable: !0,
                configurable: !0,
                get: () => c.value,
                set: u => c.value = u
            }) : t[s] = c
        }
    }

    function kv(e, t, r) {
        Jr(ke(e) ? e.map(n => n.bind(t.proxy)) : e.bind(t.proxy), t, r)
    }

    function FE(e, t, r, n) {
        const s = n.includes(".") ? RE(r, n) : () => r[n];
        if (Vt(e)) {
            const o = t[e];
            Ke(o) && es(s, o)
        } else if (Ke(e)) es(s, e.bind(r));
        else if (Lt(e))
            if (ke(e)) e.forEach(o => FE(o, t, r, n));
            else {
                const o = Ke(e.handler) ? e.handler.bind(r) : t[e.handler];
                Ke(o) && es(s, o, e)
            }
    }

    function BE(e) {
        const t = e.type,
            {
                mixins: r,
                extends: n
            } = t,
            {
                mixins: s,
                optionsCache: o,
                config: {
                    optionMergeStrategies: c
                }
            } = e.appContext,
            u = o.get(t);
        let f;
        return u ? f = u : !s.length && !r && !n ? f = t : (f = {}, s.length && s.forEach(h => Wc(f, h, c, !0)), Wc(f, t, c)), o.set(t, f), f
    }

    function Wc(e, t, r, n = !1) {
        const {
            mixins: s,
            extends: o
        } = t;
        o && Wc(e, o, r, !0), s && s.forEach(c => Wc(e, c, r, !0));
        for (const c in t)
            if (!(n && c === "expose")) {
                const u = GL[c] || r && r[c];
                e[c] = u ? u(e[c], t[c]) : t[c]
            } return e
    }
    const GL = {
        data: Pv,
        props: Wi,
        emits: Wi,
        methods: Wi,
        computed: Wi,
        beforeCreate: gr,
        created: gr,
        beforeMount: gr,
        mounted: gr,
        beforeUpdate: gr,
        updated: gr,
        beforeDestroy: gr,
        beforeUnmount: gr,
        destroyed: gr,
        unmounted: gr,
        activated: gr,
        deactivated: gr,
        errorCaptured: gr,
        serverPrefetch: gr,
        components: Wi,
        directives: Wi,
        watch: KL,
        provide: Pv,
        inject: WL
    };

    function Pv(e, t) {
        return t ? e ? function() {
            return nr(Ke(e) ? e.call(this, this) : e, Ke(t) ? t.call(this, this) : t)
        } : t : e
    }

    function WL(e, t) {
        return Wi(yd(e), yd(t))
    }

    function yd(e) {
        if (ke(e)) {
            const t = {};
            for (let r = 0; r < e.length; r++) t[e[r]] = e[r];
            return t
        }
        return e
    }

    function gr(e, t) {
        return e ? [...new Set([].concat(e, t))] : t
    }

    function Wi(e, t) {
        return e ? nr(nr(Object.create(null), e), t) : t
    }

    function KL(e, t) {
        if (!e) return t;
        if (!t) return e;
        const r = nr(Object.create(null), e);
        for (const n in t) r[n] = gr(e[n], t[n]);
        return r
    }

    function HL(e, t, r, n = !1) {
        const s = {},
            o = {};
        Uc(o, Sl, 1), e.propsDefaults = Object.create(null), jE(e, t, s, o);
        for (const c in e.propsOptions[0]) c in s || (s[c] = void 0);
        r ? e.props = n ? s : rL(s) : e.type.props ? e.props = s : e.props = o, e.attrs = o
    }

    function VL(e, t, r, n) {
        const {
            props: s,
            attrs: o,
            vnode: {
                patchFlag: c
            }
        } = e, u = ot(s), [f] = e.propsOptions;
        let h = !1;
        if ((n || c > 0) && !(c & 16)) {
            if (c & 8) {
                const m = e.vnode.dynamicProps;
                for (let y = 0; y < m.length; y++) {
                    let E = m[y];
                    if (pl(e.emitsOptions, E)) continue;
                    const I = t[E];
                    if (f)
                        if (rt(o, E)) I !== o[E] && (o[E] = I, h = !0);
                        else {
                            const k = On(E);
                            s[k] = _d(f, u, k, I, e, !1)
                        }
                    else I !== o[E] && (o[E] = I, h = !0)
                }
            }
        } else {
            jE(e, t, s, o) && (h = !0);
            let m;
            for (const y in u)(!t || !rt(t, y) && ((m = as(y)) === y || !rt(t, m))) && (f ? r && (r[y] !== void 0 || r[m] !== void 0) && (s[y] = _d(f, u, y, void 0, e, !0)) : delete s[y]);
            if (o !== u)
                for (const y in o)(!t || !rt(t, y) && !0) && (delete o[y], h = !0)
        }
        h && Fn(e, "set", "$attrs")
    }

    function jE(e, t, r, n) {
        const [s, o] = e.propsOptions;
        let c = !1,
            u;
        if (t)
            for (let f in t) {
                if (Ac(f)) continue;
                const h = t[f];
                let m;
                s && rt(s, m = On(f)) ? !o || !o.includes(m) ? r[m] = h : (u || (u = {}))[m] = h : pl(e.emitsOptions, f) || (!(f in n) || h !== n[f]) && (n[f] = h, c = !0)
            }
        if (o) {
            const f = ot(r),
                h = u || mt;
            for (let m = 0; m < o.length; m++) {
                const y = o[m];
                r[y] = _d(s, f, y, h[y], e, !rt(h, y))
            }
        }
        return c
    }

    function _d(e, t, r, n, s, o) {
        const c = e[r];
        if (c != null) {
            const u = rt(c, "default");
            if (u && n === void 0) {
                const f = c.default;
                if (c.type !== Function && Ke(f)) {
                    const {
                        propsDefaults: h
                    } = s;
                    r in h ? n = h[r] : (qs(s), n = h[r] = f.call(null, t), ts())
                } else n = f
            }
            c[0] && (o && !u ? n = !1 : c[1] && (n === "" || n === as(r)) && (n = !0))
        }
        return n
    }

    function GE(e, t, r = !1) {
        const n = t.propsCache,
            s = n.get(e);
        if (s) return s;
        const o = e.props,
            c = {},
            u = [];
        let f = !1;
        if (!Ke(e)) {
            const m = y => {
                f = !0;
                const [E, I] = GE(y, t, !0);
                nr(c, E), I && u.push(...I)
            };
            !r && t.mixins.length && t.mixins.forEach(m), e.extends && m(e.extends), e.mixins && e.mixins.forEach(m)
        }
        if (!o && !f) return n.set(e, Ds), Ds;
        if (ke(o))
            for (let m = 0; m < o.length; m++) {
                const y = On(o[m]);
                xv(y) && (c[y] = mt)
            } else if (o)
                for (const m in o) {
                    const y = On(m);
                    if (xv(y)) {
                        const E = o[m],
                            I = c[y] = ke(E) || Ke(E) ? {
                                type: E
                            } : E;
                        if (I) {
                            const k = Uv(Boolean, I.type),
                                M = Uv(String, I.type);
                            I[0] = k > -1, I[1] = M < 0 || k < M, (k > -1 || rt(I, "default")) && u.push(y)
                        }
                    }
                }
        const h = [c, u];
        return n.set(e, h), h
    }

    function xv(e) {
        return e[0] !== "$"
    }

    function Dv(e) {
        const t = e && e.toString().match(/^\s*function (\w+)/);
        return t ? t[1] : e === null ? "null" : ""
    }

    function Mv(e, t) {
        return Dv(e) === Dv(t)
    }

    function Uv(e, t) {
        return ke(t) ? t.findIndex(r => Mv(r, e)) : Ke(t) && Mv(t, e) ? 0 : -1
    }
    const WE = e => e[0] === "_" || e === "$stable",
        Lh = e => ke(e) ? e.map(Sn) : [Sn(e)],
        qL = (e, t, r) => {
            if (t._n) return t;
            const n = Ch((...s) => Lh(t(...s)), r);
            return n._c = !1, n
        },
        KE = (e, t, r) => {
            const n = e._ctx;
            for (const s in e) {
                if (WE(s)) continue;
                const o = e[s];
                if (Ke(o)) t[s] = qL(s, o, n);
                else if (o != null) {
                    const c = Lh(o);
                    t[s] = () => c
                }
            }
        },
        HE = (e, t) => {
            const r = Lh(t);
            e.slots.default = () => r
        },
        YL = (e, t) => {
            if (e.vnode.shapeFlag & 32) {
                const r = t._;
                r ? (e.slots = ot(t), Uc(t, "_", r)) : KE(t, e.slots = {})
            } else e.slots = {}, t && HE(e, t);
            Uc(e.slots, Sl, 1)
        },
        zL = (e, t, r) => {
            const {
                vnode: n,
                slots: s
            } = e;
            let o = !0,
                c = mt;
            if (n.shapeFlag & 32) {
                const u = t._;
                u ? r && u === 1 ? o = !1 : (nr(s, t), !r && u === 1 && delete s._) : (o = !t.$stable, KE(t, s)), c = t
            } else t && (HE(e, t), c = {
                default: 1
            });
            if (o)
                for (const u in s) !WE(u) && !(u in c) && delete s[u]
        };

    function VE() {
        return {
            app: null,
            config: {
                isNativeTag: TN,
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
    let XL = 0;

    function JL(e, t) {
        return function(n, s = null) {
            Ke(n) || (n = Object.assign({}, n)), s != null && !Lt(s) && (s = null);
            const o = VE(),
                c = new Set;
            let u = !1;
            const f = o.app = {
                _uid: XL++,
                _component: n,
                _props: s,
                _container: null,
                _context: o,
                _instance: null,
                version: pk,
                get config() {
                    return o.config
                },
                set config(h) {},
                use(h, ...m) {
                    return c.has(h) || (h && Ke(h.install) ? (c.add(h), h.install(f, ...m)) : Ke(h) && (c.add(h), h(f, ...m))), f
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
                mount(h, m, y) {
                    if (!u) {
                        const E = at(n, s);
                        return E.appContext = o, m && t ? t(E, h) : e(E, h, y), u = !0, f._container = h, h.__vue_app__ = f, Ol(E.component) || E.component.proxy
                    }
                },
                unmount() {
                    u && (e(null, f._container), delete f._container.__vue_app__)
                },
                provide(h, m) {
                    return o.provides[h] = m, f
                }
            };
            return f
        }
    }

    function bd(e, t, r, n, s = !1) {
        if (ke(e)) {
            e.forEach((E, I) => bd(E, t && (ke(t) ? t[I] : t), r, n, s));
            return
        }
        if (Ua(n) && !s) return;
        const o = n.shapeFlag & 4 ? Ol(n.component) || n.component.proxy : n.el,
            c = s ? null : o,
            {
                i: u,
                r: f
            } = e,
            h = t && t.r,
            m = u.refs === mt ? u.refs = {} : u.refs,
            y = u.setupState;
        if (h != null && h !== f && (Vt(h) ? (m[h] = null, rt(y, h) && (y[h] = null)) : tr(h) && (h.value = null)), Ke(f)) ui(f, u, 12, [c, m]);
        else {
            const E = Vt(f),
                I = tr(f);
            if (E || I) {
                const k = () => {
                    if (e.f) {
                        const M = E ? m[f] : f.value;
                        s ? ke(M) && vh(M, o) : ke(M) ? M.includes(o) || M.push(o) : E ? (m[f] = [o], rt(y, f) && (y[f] = m[f])) : (f.value = [o], e.k && (m[e.k] = f.value))
                    } else E ? (m[f] = c, rt(y, f) && (y[f] = c)) : I && (f.value = c, e.k && (m[e.k] = c))
                };
                c ? (k.id = -1, Sr(k, r)) : k()
            }
        }
    }
    const Sr = EL;

    function ZL(e) {
        return QL(e)
    }

    function QL(e, t) {
        const r = $N();
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
            parentNode: y,
            nextSibling: E,
            setScopeId: I = dn,
            cloneNode: k,
            insertStaticContent: M
        } = e, j = (g, p, w, D = null, B = null, Y = null, le = !1, se = null, re = !!p.dynamicChildren) => {
            if (g === p) return;
            g && !Vi(g, p) && (D = wt(g), Rt(g, B, Y, !0), g = null), p.patchFlag === -2 && (re = !1, p.dynamicChildren = null);
            const {
                type: A,
                ref: K,
                shapeFlag: he
            } = p;
            switch (A) {
                case Tl:
                    C(g, p, w, D);
                    break;
                case Zr:
                    H(g, p, w, D);
                    break;
                case Fa:
                    g == null && X(p, w, D, le);
                    break;
                case ze:
                    Ie(g, p, w, D, B, Y, le, se, re);
                    break;
                default:
                    he & 1 ? Z(g, p, w, D, B, Y, le, se, re) : he & 6 ? U(g, p, w, D, B, Y, le, se, re) : (he & 64 || he & 128) && A.process(g, p, w, D, B, Y, le, se, re, Mt)
            }
            K != null && B && bd(K, g && g.ref, Y, p || g, !p)
        }, C = (g, p, w, D) => {
            if (g == null) n(p.el = u(p.children), w, D);
            else {
                const B = p.el = g.el;
                p.children !== g.children && h(B, p.children)
            }
        }, H = (g, p, w, D) => {
            g == null ? n(p.el = f(p.children || ""), w, D) : p.el = g.el
        }, X = (g, p, w, D) => {
            [g.el, g.anchor] = M(g.children, p, w, D, g.el, g.anchor)
        }, W = ({
            el: g,
            anchor: p
        }, w, D) => {
            let B;
            for (; g && g !== p;) B = E(g), n(g, w, D), g = B;
            n(p, w, D)
        }, G = ({
            el: g,
            anchor: p
        }) => {
            let w;
            for (; g && g !== p;) w = E(g), s(g), g = w;
            s(p)
        }, Z = (g, p, w, D, B, Y, le, se, re) => {
            le = le || p.type === "svg", g == null ? oe(p, w, D, B, Y, le, se, re) : $e(g, p, B, Y, le, se, re)
        }, oe = (g, p, w, D, B, Y, le, se) => {
            let re, A;
            const {
                type: K,
                props: he,
                shapeFlag: pe,
                transition: Ae,
                patchFlag: Pe,
                dirs: O
            } = g;
            if (g.el && k !== void 0 && Pe === -1) re = g.el = k(g.el);
            else {
                if (re = g.el = c(g.type, Y, he && he.is, he), pe & 8 ? m(re, g.children) : pe & 16 && ue(g.children, re, null, D, B, Y && K !== "foreignObject", le, se), O && Di(g, null, D, "created"), he) {
                    for (const N in he) N !== "value" && !Ac(N) && o(re, N, null, he[N], Y, g.children, D, B, ct);
                    "value" in he && o(re, "value", null, he.value), (A = he.onVnodeBeforeMount) && yn(A, D, g)
                }
                ce(re, g, g.scopeId, le, D)
            }
            O && Di(g, null, D, "beforeMount");
            const T = (!B || B && !B.pendingBranch) && Ae && !Ae.persisted;
            T && Ae.beforeEnter(re), n(re, p, w), ((A = he && he.onVnodeMounted) || T || O) && Sr(() => {
                A && yn(A, D, g), T && Ae.enter(re), O && Di(g, null, D, "mounted")
            }, B)
        }, ce = (g, p, w, D, B) => {
            if (w && I(g, w), D)
                for (let Y = 0; Y < D.length; Y++) I(g, D[Y]);
            if (B) {
                let Y = B.subTree;
                if (p === Y) {
                    const le = B.vnode;
                    ce(g, le, le.scopeId, le.slotScopeIds, B.parent)
                }
            }
        }, ue = (g, p, w, D, B, Y, le, se, re = 0) => {
            for (let A = re; A < g.length; A++) {
                const K = g[A] = se ? ii(g[A]) : Sn(g[A]);
                j(null, K, p, w, D, B, Y, le, se)
            }
        }, $e = (g, p, w, D, B, Y, le) => {
            const se = p.el = g.el;
            let {
                patchFlag: re,
                dynamicChildren: A,
                dirs: K
            } = p;
            re |= g.patchFlag & 16;
            const he = g.props || mt,
                pe = p.props || mt;
            let Ae;
            w && Mi(w, !1), (Ae = pe.onVnodeBeforeUpdate) && yn(Ae, w, p, g), K && Di(p, g, w, "beforeUpdate"), w && Mi(w, !0);
            const Pe = B && p.type !== "foreignObject";
            if (A ? Ce(g.dynamicChildren, A, se, w, D, Pe, Y) : le || Se(g, p, se, null, w, D, Pe, Y, !1), re > 0) {
                if (re & 16) fe(se, p, he, pe, w, D, B);
                else if (re & 2 && he.class !== pe.class && o(se, "class", null, pe.class, B), re & 4 && o(se, "style", he.style, pe.style, B), re & 8) {
                    const O = p.dynamicProps;
                    for (let T = 0; T < O.length; T++) {
                        const N = O[T],
                            S = he[N],
                            L = pe[N];
                        (L !== S || N === "value") && o(se, N, S, L, B, g.children, w, D, ct)
                    }
                }
                re & 1 && g.children !== p.children && m(se, p.children)
            } else !le && A == null && fe(se, p, he, pe, w, D, B);
            ((Ae = pe.onVnodeUpdated) || K) && Sr(() => {
                Ae && yn(Ae, w, p, g), K && Di(p, g, w, "updated")
            }, D)
        }, Ce = (g, p, w, D, B, Y, le) => {
            for (let se = 0; se < p.length; se++) {
                const re = g[se],
                    A = p[se],
                    K = re.el && (re.type === ze || !Vi(re, A) || re.shapeFlag & 70) ? y(re.el) : w;
                j(re, A, K, null, D, B, Y, le, !0)
            }
        }, fe = (g, p, w, D, B, Y, le) => {
            if (w !== D) {
                for (const se in D) {
                    if (Ac(se)) continue;
                    const re = D[se],
                        A = w[se];
                    re !== A && se !== "value" && o(g, se, A, re, le, p.children, B, Y, ct)
                }
                if (w !== mt)
                    for (const se in w) !Ac(se) && !(se in D) && o(g, se, w[se], null, le, p.children, B, Y, ct);
                "value" in D && o(g, "value", w.value, D.value)
            }
        }, Ie = (g, p, w, D, B, Y, le, se, re) => {
            const A = p.el = g ? g.el : u(""),
                K = p.anchor = g ? g.anchor : u("");
            let {
                patchFlag: he,
                dynamicChildren: pe,
                slotScopeIds: Ae
            } = p;
            Ae && (se = se ? se.concat(Ae) : Ae), g == null ? (n(A, w, D), n(K, w, D), ue(p.children, w, K, B, Y, le, se, re)) : he > 0 && he & 64 && pe && g.dynamicChildren ? (Ce(g.dynamicChildren, pe, w, B, Y, le, se), (p.key != null || B && p === B.subTree) && qE(g, p, !0)) : Se(g, p, w, K, B, Y, le, se, re)
        }, U = (g, p, w, D, B, Y, le, se, re) => {
            p.slotScopeIds = se, g == null ? p.shapeFlag & 512 ? B.ctx.activate(p, w, D, le, re) : ie(p, w, D, B, Y, le, re) : de(g, p, re)
        }, ie = (g, p, w, D, B, Y, le) => {
            const se = g.component = ok(g, D, B);
            if (yl(g) && (se.ctx.renderer = Mt), ck(se), se.asyncDep) {
                if (B && B.registerDep(se, be), !g.el) {
                    const re = se.subTree = at(Zr);
                    H(null, re, p, w)
                }
                return
            }
            be(se, g, p, w, B, Y, le)
        }, de = (g, p, w) => {
            const D = p.component = g.component;
            if (yL(g, p, w))
                if (D.asyncDep && !D.asyncResolved) {
                    ve(D, p, w);
                    return
                } else D.next = p, dL(D.update), D.update();
            else p.el = g.el, D.vnode = p
        }, be = (g, p, w, D, B, Y, le) => {
            const se = () => {
                    if (g.isMounted) {
                        let {
                            next: K,
                            bu: he,
                            u: pe,
                            parent: Ae,
                            vnode: Pe
                        } = g, O = K, T;
                        Mi(g, !1), K ? (K.el = Pe.el, ve(g, K, le)) : K = Pe, he && Nc(he), (T = K.props && K.props.onVnodeBeforeUpdate) && yn(T, Ae, K, Pe), Mi(g, !0);
                        const N = gf(g),
                            S = g.subTree;
                        g.subTree = N, j(S, N, y(S.el), wt(S), g, B, Y), K.el = N.el, O === null && _L(g, N.el), pe && Sr(pe, B), (T = K.props && K.props.onVnodeUpdated) && Sr(() => yn(T, Ae, K, Pe), B)
                    } else {
                        let K;
                        const {
                            el: he,
                            props: pe
                        } = p, {
                            bm: Ae,
                            m: Pe,
                            parent: O
                        } = g, T = Ua(p);
                        if (Mi(g, !1), Ae && Nc(Ae), !T && (K = pe && pe.onVnodeBeforeMount) && yn(K, O, p), Mi(g, !0), he && Ut) {
                            const N = () => {
                                g.subTree = gf(g), Ut(he, g.subTree, g, B, null)
                            };
                            T ? p.type.__asyncLoader().then(() => !g.isUnmounted && N()) : N()
                        } else {
                            const N = g.subTree = gf(g);
                            j(null, N, w, D, g, B, Y), p.el = N.el
                        }
                        if (Pe && Sr(Pe, B), !T && (K = pe && pe.onVnodeMounted)) {
                            const N = p;
                            Sr(() => yn(K, O, N), B)
                        }(p.shapeFlag & 256 || O && Ua(O.vnode) && O.vnode.shapeFlag & 256) && g.a && Sr(g.a, B), g.isMounted = !0, p = w = D = null
                    }
                },
                re = g.effect = new bh(se, () => wE(A), g.scope),
                A = g.update = () => re.run();
            A.id = g.uid, Mi(g, !0), A()
        }, ve = (g, p, w) => {
            p.component = g;
            const D = g.vnode.props;
            g.vnode = p, g.next = null, VL(g, p.props, D, w), zL(g, p.children, w), ea(), hl(void 0, g.update), ta()
        }, Se = (g, p, w, D, B, Y, le, se, re = !1) => {
            const A = g && g.children,
                K = g ? g.shapeFlag : 0,
                he = p.children,
                {
                    patchFlag: pe,
                    shapeFlag: Ae
                } = p;
            if (pe > 0) {
                if (pe & 128) {
                    Ge(A, he, w, D, B, Y, le, se, re);
                    return
                } else if (pe & 256) {
                    Me(A, he, w, D, B, Y, le, se, re);
                    return
                }
            }
            Ae & 8 ? (K & 16 && ct(A, B, Y), he !== A && m(w, he)) : K & 16 ? Ae & 16 ? Ge(A, he, w, D, B, Y, le, se, re) : ct(A, B, Y, !0) : (K & 8 && m(w, ""), Ae & 16 && ue(he, w, D, B, Y, le, se, re))
        }, Me = (g, p, w, D, B, Y, le, se, re) => {
            g = g || Ds, p = p || Ds;
            const A = g.length,
                K = p.length,
                he = Math.min(A, K);
            let pe;
            for (pe = 0; pe < he; pe++) {
                const Ae = p[pe] = re ? ii(p[pe]) : Sn(p[pe]);
                j(g[pe], Ae, w, null, B, Y, le, se, re)
            }
            A > K ? ct(g, B, Y, !0, !1, he) : ue(p, w, D, B, Y, le, se, re, he)
        }, Ge = (g, p, w, D, B, Y, le, se, re) => {
            let A = 0;
            const K = p.length;
            let he = g.length - 1,
                pe = K - 1;
            for (; A <= he && A <= pe;) {
                const Ae = g[A],
                    Pe = p[A] = re ? ii(p[A]) : Sn(p[A]);
                if (Vi(Ae, Pe)) j(Ae, Pe, w, null, B, Y, le, se, re);
                else break;
                A++
            }
            for (; A <= he && A <= pe;) {
                const Ae = g[he],
                    Pe = p[pe] = re ? ii(p[pe]) : Sn(p[pe]);
                if (Vi(Ae, Pe)) j(Ae, Pe, w, null, B, Y, le, se, re);
                else break;
                he--, pe--
            }
            if (A > he) {
                if (A <= pe) {
                    const Ae = pe + 1,
                        Pe = Ae < K ? p[Ae].el : D;
                    for (; A <= pe;) j(null, p[A] = re ? ii(p[A]) : Sn(p[A]), w, Pe, B, Y, le, se, re), A++
                }
            } else if (A > pe)
                for (; A <= he;) Rt(g[A], B, Y, !0), A++;
            else {
                const Ae = A,
                    Pe = A,
                    O = new Map;
                for (A = Pe; A <= pe; A++) {
                    const Te = p[A] = re ? ii(p[A]) : Sn(p[A]);
                    Te.key != null && O.set(Te.key, A)
                }
                let T, N = 0;
                const S = pe - Pe + 1;
                let L = !1,
                    Q = 0;
                const ne = new Array(S);
                for (A = 0; A < S; A++) ne[A] = 0;
                for (A = Ae; A <= he; A++) {
                    const Te = g[A];
                    if (N >= S) {
                        Rt(Te, B, Y, !0);
                        continue
                    }
                    let dt;
                    if (Te.key != null) dt = O.get(Te.key);
                    else
                        for (T = Pe; T <= pe; T++)
                            if (ne[T - Pe] === 0 && Vi(Te, p[T])) {
                                dt = T;
                                break
                            } dt === void 0 ? Rt(Te, B, Y, !0) : (ne[dt - Pe] = A + 1, dt >= Q ? Q = dt : L = !0, j(Te, p[dt], w, null, B, Y, le, se, re), N++)
                }
                const _e = L ? ek(ne) : Ds;
                for (T = _e.length - 1, A = S - 1; A >= 0; A--) {
                    const Te = Pe + A,
                        dt = p[Te],
                        sr = Te + 1 < K ? p[Te + 1].el : D;
                    ne[A] === 0 ? j(null, dt, w, sr, B, Y, le, se, re) : L && (T < 0 || A !== _e[T] ? nt(dt, w, sr, 2) : T--)
                }
            }
        }, nt = (g, p, w, D, B = null) => {
            const {
                el: Y,
                type: le,
                transition: se,
                children: re,
                shapeFlag: A
            } = g;
            if (A & 6) {
                nt(g.component.subTree, p, w, D);
                return
            }
            if (A & 128) {
                g.suspense.move(p, w, D);
                return
            }
            if (A & 64) {
                le.move(g, p, w, Mt);
                return
            }
            if (le === ze) {
                n(Y, p, w);
                for (let he = 0; he < re.length; he++) nt(re[he], p, w, D);
                n(g.anchor, p, w);
                return
            }
            if (le === Fa) {
                W(g, p, w);
                return
            }
            if (D !== 2 && A & 1 && se)
                if (D === 0) se.beforeEnter(Y), n(Y, p, w), Sr(() => se.enter(Y), B);
                else {
                    const {
                        leave: he,
                        delayLeave: pe,
                        afterLeave: Ae
                    } = se, Pe = () => n(Y, p, w), O = () => {
                        he(Y, () => {
                            Pe(), Ae && Ae()
                        })
                    };
                    pe ? pe(Y, Pe, O) : O()
                }
            else n(Y, p, w)
        }, Rt = (g, p, w, D = !1, B = !1) => {
            const {
                type: Y,
                props: le,
                ref: se,
                children: re,
                dynamicChildren: A,
                shapeFlag: K,
                patchFlag: he,
                dirs: pe
            } = g;
            if (se != null && bd(se, null, w, g, !0), K & 256) {
                p.ctx.deactivate(g);
                return
            }
            const Ae = K & 1 && pe,
                Pe = !Ua(g);
            let O;
            if (Pe && (O = le && le.onVnodeBeforeUnmount) && yn(O, p, g), K & 6) vr(g.component, w, D);
            else {
                if (K & 128) {
                    g.suspense.unmount(w, D);
                    return
                }
                Ae && Di(g, null, p, "beforeUnmount"), K & 64 ? g.type.remove(g, p, w, B, Mt, D) : A && (Y !== ze || he > 0 && he & 64) ? ct(A, p, w, !1, !0) : (Y === ze && he & 384 || !B && K & 16) && ct(re, p, w), D && Cr(g)
            }(Pe && (O = le && le.onVnodeUnmounted) || Ae) && Sr(() => {
                O && yn(O, p, g), Ae && Di(g, null, p, "unmounted")
            }, w)
        }, Cr = g => {
            const {
                type: p,
                el: w,
                anchor: D,
                transition: B
            } = g;
            if (p === ze) {
                ir(w, D);
                return
            }
            if (p === Fa) {
                G(g);
                return
            }
            const Y = () => {
                s(w), B && !B.persisted && B.afterLeave && B.afterLeave()
            };
            if (g.shapeFlag & 1 && B && !B.persisted) {
                const {
                    leave: le,
                    delayLeave: se
                } = B, re = () => le(w, Y);
                se ? se(g.el, Y, re) : re()
            } else Y()
        }, ir = (g, p) => {
            let w;
            for (; g !== p;) w = E(g), s(g), g = w;
            s(p)
        }, vr = (g, p, w) => {
            const {
                bum: D,
                scope: B,
                update: Y,
                subTree: le,
                um: se
            } = g;
            D && Nc(D), B.stop(), Y && (Y.active = !1, Rt(le, g, p, w)), se && Sr(se, p), Sr(() => {
                g.isUnmounted = !0
            }, p), p && p.pendingBranch && !p.isUnmounted && g.asyncDep && !g.asyncResolved && g.suspenseId === p.pendingId && (p.deps--, p.deps === 0 && p.resolve())
        }, ct = (g, p, w, D = !1, B = !1, Y = 0) => {
            for (let le = Y; le < g.length; le++) Rt(g[le], p, w, D, B)
        }, wt = g => g.shapeFlag & 6 ? wt(g.component.subTree) : g.shapeFlag & 128 ? g.suspense.next() : E(g.anchor || g.el), lt = (g, p, w) => {
            g == null ? p._vnode && Rt(p._vnode, null, null, !0) : j(p._vnode || null, g, p, null, null, null, w), CE(), p._vnode = g
        }, Mt = {
            p: j,
            um: Rt,
            m: nt,
            r: Cr,
            mt: ie,
            mc: ue,
            pc: Se,
            pbc: Ce,
            n: wt,
            o: e
        };
        let qt, Ut;
        return t && ([qt, Ut] = t(Mt)), {
            render: lt,
            hydrate: qt,
            createApp: JL(lt, qt)
        }
    }

    function Mi({
        effect: e,
        update: t
    }, r) {
        e.allowRecurse = t.allowRecurse = r
    }

    function qE(e, t, r = !1) {
        const n = e.children,
            s = t.children;
        if (ke(n) && ke(s))
            for (let o = 0; o < n.length; o++) {
                const c = n[o];
                let u = s[o];
                u.shapeFlag & 1 && !u.dynamicChildren && ((u.patchFlag <= 0 || u.patchFlag === 32) && (u = s[o] = ii(s[o]), u.el = c.el), r || qE(c, u))
            }
    }

    function ek(e) {
        const t = e.slice(),
            r = [0];
        let n, s, o, c, u;
        const f = e.length;
        for (n = 0; n < f; n++) {
            const h = e[n];
            if (h !== 0) {
                if (s = r[r.length - 1], e[s] < h) {
                    t[n] = s, r.push(n);
                    continue
                }
                for (o = 0, c = r.length - 1; o < c;) u = o + c >> 1, e[r[u]] < h ? o = u + 1 : c = u;
                h < e[r[o]] && (o > 0 && (t[n] = r[o - 1]), r[o] = n)
            }
        }
        for (o = r.length, c = r[o - 1]; o-- > 0;) r[o] = c, c = t[c];
        return r
    }
    const tk = e => e.__isTeleport,
        ze = Symbol(void 0),
        Tl = Symbol(void 0),
        Zr = Symbol(void 0),
        Fa = Symbol(void 0),
        Ba = [];
    let fn = null;

    function F(e = !1) {
        Ba.push(fn = e ? null : [])
    }

    function rk() {
        Ba.pop(), fn = Ba[Ba.length - 1] || null
    }
    let Qa = 1;

    function Fv(e) {
        Qa += e
    }

    function YE(e) {
        return e.dynamicChildren = Qa > 0 ? fn || Ds : null, rk(), Qa > 0 && fn && fn.push(e), e
    }

    function q(e, t, r, n, s, o) {
        return YE(z(e, t, r, n, s, o, !0))
    }

    function At(e, t, r, n, s) {
        return YE(at(e, t, r, n, s, !0))
    }

    function Kc(e) {
        return e ? e.__v_isVNode === !0 : !1
    }

    function Vi(e, t) {
        return e.type === t.type && e.key === t.key
    }
    const Sl = "__vInternal",
        zE = ({
            key: e
        }) => e != null ? e : null,
        Lc = ({
            ref: e,
            ref_key: t,
            ref_for: r
        }) => e != null ? Vt(e) || tr(e) || Ke(e) ? {
            i: cr,
            r: e,
            k: t,
            f: !!r
        } : e : null;

    function z(e, t = null, r = null, n = 0, s = null, o = e === ze ? 0 : 1, c = !1, u = !1) {
        const f = {
            __v_isVNode: !0,
            __v_skip: !0,
            type: e,
            props: t,
            key: t && zE(t),
            ref: t && Lc(t),
            scopeId: gl,
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
        return u ? (kh(f, r), o & 128 && e.normalize(f)) : r && (f.shapeFlag |= Vt(r) ? 8 : 16), Qa > 0 && !c && fn && (f.patchFlag > 0 || o & 6) && f.patchFlag !== 32 && fn.push(f), f
    }
    const at = nk;

    function nk(e, t = null, r = null, n = 0, s = null, o = !1) {
        if ((!e || e === ME) && (e = Zr), Kc(e)) {
            const u = pi(e, t, !0);
            return r && kh(u, r), Qa > 0 && !o && fn && (u.shapeFlag & 6 ? fn[fn.indexOf(e)] = u : fn.push(u)), u.patchFlag |= -2, u
        }
        if (hk(e) && (e = e.__vccOpts), t) {
            t = ik(t);
            let {
                class: u,
                style: f
            } = t;
            u && !Vt(u) && (t.class = Fe(u)), Lt(f) && (vE(f) && !ke(f) && (f = nr({}, f)), t.style = sl(f))
        }
        const c = Vt(e) ? 1 : bL(e) ? 128 : tk(e) ? 64 : Lt(e) ? 4 : Ke(e) ? 2 : 0;
        return z(e, t, r, n, s, c, o, !0)
    }

    function ik(e) {
        return e ? vE(e) || Sl in e ? nr({}, e) : e : null
    }

    function pi(e, t, r = !1) {
        const {
            props: n,
            ref: s,
            patchFlag: o,
            children: c
        } = e, u = t ? wl(n || {}, t) : n;
        return {
            __v_isVNode: !0,
            __v_skip: !0,
            type: e.type,
            props: u,
            key: u && zE(u),
            ref: t && t.ref ? r && s ? ke(s) ? s.concat(Lc(t)) : [s, Lc(t)] : Lc(t) : s,
            scopeId: e.scopeId,
            slotScopeIds: e.slotScopeIds,
            children: c,
            target: e.target,
            targetAnchor: e.targetAnchor,
            staticCount: e.staticCount,
            shapeFlag: e.shapeFlag,
            patchFlag: t && e.type !== ze ? o === -1 ? 16 : o | 16 : o,
            dynamicProps: e.dynamicProps,
            dynamicChildren: e.dynamicChildren,
            appContext: e.appContext,
            dirs: e.dirs,
            transition: e.transition,
            component: e.component,
            suspense: e.suspense,
            ssContent: e.ssContent && pi(e.ssContent),
            ssFallback: e.ssFallback && pi(e.ssFallback),
            el: e.el,
            anchor: e.anchor
        }
    }

    function en(e = " ", t = 0) {
        return at(Tl, null, e, t)
    }

    function XE(e, t) {
        const r = at(Fa, null, e);
        return r.staticCount = t, r
    }

    function Oe(e = "", t = !1) {
        return t ? (F(), At(Zr, null, e)) : at(Zr, null, e)
    }

    function Sn(e) {
        return e == null || typeof e == "boolean" ? at(Zr) : ke(e) ? at(ze, null, e.slice()) : typeof e == "object" ? ii(e) : at(Tl, null, String(e))
    }

    function ii(e) {
        return e.el === null || e.memo ? e : pi(e)
    }

    function kh(e, t) {
        let r = 0;
        const {
            shapeFlag: n
        } = e;
        if (t == null) t = null;
        else if (ke(t)) r = 16;
        else if (typeof t == "object")
            if (n & 65) {
                const s = t.default;
                s && (s._c && (s._d = !1), kh(e, s()), s._c && (s._d = !0));
                return
            } else {
                r = 32;
                const s = t._;
                !s && !(Sl in t) ? t._ctx = cr : s === 3 && cr && (cr.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024))
            }
        else Ke(t) ? (t = {
            default: t,
            _ctx: cr
        }, r = 32) : (t = String(t), n & 64 ? (r = 16, t = [en(t)]) : r = 8);
        e.children = t, e.shapeFlag |= r
    }

    function wl(...e) {
        const t = {};
        for (let r = 0; r < e.length; r++) {
            const n = e[r];
            for (const s in n)
                if (s === "class") t.class !== n.class && (t.class = Fe([t.class, n.class]));
                else if (s === "style") t.style = sl([t.style, n.style]);
            else if (ol(s)) {
                const o = t[s],
                    c = n[s];
                c && o !== c && !(ke(o) && o.includes(c)) && (t[s] = o ? [].concat(o, c) : c)
            } else s !== "" && (t[s] = n[s])
        }
        return t
    }

    function yn(e, t, r, n = null) {
        Jr(e, t, 7, [r, n])
    }
    const sk = VE();
    let ak = 0;

    function ok(e, t, r) {
        const n = e.type,
            s = (t ? t.appContext : e.appContext) || sk,
            o = {
                uid: ak++,
                vnode: e,
                type: n,
                parent: t,
                appContext: s,
                root: null,
                next: null,
                subTree: null,
                effect: null,
                update: null,
                scope: new sE(!0),
                render: null,
                proxy: null,
                exposed: null,
                exposeProxy: null,
                withProxy: null,
                provides: t ? t.provides : Object.create(s.provides),
                accessCache: null,
                renderCache: [],
                components: null,
                directives: null,
                propsOptions: GE(n, s),
                emitsOptions: AE(n, s),
                emit: null,
                emitted: null,
                propsDefaults: mt,
                inheritAttrs: n.inheritAttrs,
                ctx: mt,
                data: mt,
                props: mt,
                attrs: mt,
                slots: mt,
                refs: mt,
                setupState: mt,
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
        }, o.root = t ? t.root : o, o.emit = gL.bind(null, o), e.ce && e.ce(o), o
    }
    let Xt = null;
    const gi = () => Xt || cr,
        qs = e => {
            Xt = e, e.scope.on()
        },
        ts = () => {
            Xt && Xt.scope.off(), Xt = null
        };

    function JE(e) {
        return e.vnode.shapeFlag & 4
    }
    let eo = !1;

    function ck(e, t = !1) {
        eo = t;
        const {
            props: r,
            children: n
        } = e.vnode, s = JE(e);
        HL(e, r, s, t), YL(e, n);
        const o = s ? lk(e, t) : void 0;
        return eo = !1, o
    }

    function lk(e, t) {
        const r = e.type;
        e.accessCache = Object.create(null), e.proxy = yE(new Proxy(e.ctx, FL));
        const {
            setup: n
        } = r;
        if (n) {
            const s = e.setupContext = n.length > 1 ? fk(e) : null;
            qs(e), ea();
            const o = ui(n, e, 0, [e.props, s]);
            if (ta(), ts(), rE(o)) {
                if (o.then(ts, ts), t) return o.then(c => {
                    Bv(e, c, t)
                }).catch(c => {
                    dl(c, e, 0)
                });
                e.asyncDep = o
            } else Bv(e, o, t)
        } else ZE(e, t)
    }

    function Bv(e, t, r) {
        Ke(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Lt(t) && (e.setupState = TE(t)), ZE(e, r)
    }
    let jv;

    function ZE(e, t, r) {
        const n = e.type;
        if (!e.render) {
            if (!t && jv && !n.render) {
                const s = n.template;
                if (s) {
                    const {
                        isCustomElement: o,
                        compilerOptions: c
                    } = e.appContext.config, {
                        delimiters: u,
                        compilerOptions: f
                    } = n, h = nr(nr({
                        isCustomElement: o,
                        delimiters: u
                    }, c), f);
                    n.render = jv(s, h)
                }
            }
            e.render = n.render || dn
        }
        qs(e), ea(), BL(e), ta(), ts()
    }

    function uk(e) {
        return new Proxy(e.attrs, {
            get(t, r) {
                return Mr(e, "get", "$attrs"), t[r]
            }
        })
    }

    function fk(e) {
        const t = n => {
            e.exposed = n || {}
        };
        let r;
        return {
            get attrs() {
                return r || (r = uk(e))
            },
            slots: e.slots,
            emit: e.emit,
            expose: t
        }
    }

    function Ol(e) {
        if (e.exposed) return e.exposeProxy || (e.exposeProxy = new Proxy(TE(yE(e.exposed)), {
            get(t, r) {
                if (r in t) return t[r];
                if (r in Gc) return Gc[r](e)
            }
        }))
    }

    function dk(e, t = !0) {
        return Ke(e) ? e.displayName || e.name : e.name || t && e.__name
    }

    function hk(e) {
        return Ke(e) && "__vccOpts" in e
    }
    const xr = (e, t) => cL(e, t, eo);

    function Ph(e, t, r) {
        const n = arguments.length;
        return n === 2 ? Lt(t) && !ke(t) ? Kc(t) ? at(e, null, [t]) : at(e, t) : at(e, null, t) : (n > 3 ? r = Array.prototype.slice.call(arguments, 2) : n === 3 && Kc(r) && (r = [r]), at(e, t, r))
    }
    const pk = "3.2.37",
        gk = "http://www.w3.org/2000/svg",
        qi = typeof document < "u" ? document : null,
        Gv = qi && qi.createElement("template"),
        mk = {
            insert: (e, t, r) => {
                t.insertBefore(e, r || null)
            },
            remove: e => {
                const t = e.parentNode;
                t && t.removeChild(e)
            },
            createElement: (e, t, r, n) => {
                const s = t ? qi.createElementNS(gk, e) : qi.createElement(e, r ? {
                    is: r
                } : void 0);
                return e === "select" && n && n.multiple != null && s.setAttribute("multiple", n.multiple), s
            },
            createText: e => qi.createTextNode(e),
            createComment: e => qi.createComment(e),
            setText: (e, t) => {
                e.nodeValue = t
            },
            setElementText: (e, t) => {
                e.textContent = t
            },
            parentNode: e => e.parentNode,
            nextSibling: e => e.nextSibling,
            querySelector: e => qi.querySelector(e),
            setScopeId(e, t) {
                e.setAttribute(t, "")
            },
            cloneNode(e) {
                const t = e.cloneNode(!0);
                return "_value" in e && (t._value = e._value), t
            },
            insertStaticContent(e, t, r, n, s, o) {
                const c = r ? r.previousSibling : t.lastChild;
                if (s && (s === o || s.nextSibling))
                    for (; t.insertBefore(s.cloneNode(!0), r), !(s === o || !(s = s.nextSibling)););
                else {
                    Gv.innerHTML = n ? `<svg>${e}</svg>` : e;
                    const u = Gv.content;
                    if (n) {
                        const f = u.firstChild;
                        for (; f.firstChild;) u.appendChild(f.firstChild);
                        u.removeChild(f)
                    }
                    t.insertBefore(u, r)
                }
                return [c ? c.nextSibling : t.firstChild, r ? r.previousSibling : t.lastChild]
            }
        };

    function vk(e, t, r) {
        const n = e._vtc;
        n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : r ? e.setAttribute("class", t) : e.className = t
    }

    function yk(e, t, r) {
        const n = e.style,
            s = Vt(r);
        if (r && !s) {
            for (const o in r) Ed(n, o, r[o]);
            if (t && !Vt(t))
                for (const o in t) r[o] == null && Ed(n, o, "")
        } else {
            const o = n.display;
            s ? t !== r && (n.cssText = r) : t && e.removeAttribute("style"), "_vod" in e && (n.display = o)
        }
    }
    const Wv = /\s*!important$/;

    function Ed(e, t, r) {
        if (ke(r)) r.forEach(n => Ed(e, t, n));
        else if (r == null && (r = ""), t.startsWith("--")) e.setProperty(t, r);
        else {
            const n = _k(e, t);
            Wv.test(r) ? e.setProperty(as(n), r.replace(Wv, ""), "important") : e[n] = r
        }
    }
    const Kv = ["Webkit", "Moz", "ms"],
        vf = {};

    function _k(e, t) {
        const r = vf[t];
        if (r) return r;
        let n = On(t);
        if (n !== "filter" && n in e) return vf[t] = n;
        n = ul(n);
        for (let s = 0; s < Kv.length; s++) {
            const o = Kv[s] + n;
            if (o in e) return vf[t] = o
        }
        return t
    }
    const Hv = "http://www.w3.org/1999/xlink";

    function bk(e, t, r, n, s) {
        if (n && t.startsWith("xlink:")) r == null ? e.removeAttributeNS(Hv, t.slice(6, t.length)) : e.setAttributeNS(Hv, t, r);
        else {
            const o = vN(t);
            r == null || o && !Qb(r) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : r)
        }
    }

    function Ek(e, t, r, n, s, o, c) {
        if (t === "innerHTML" || t === "textContent") {
            n && c(n, s, o), e[t] = r == null ? "" : r;
            return
        }
        if (t === "value" && e.tagName !== "PROGRESS" && !e.tagName.includes("-")) {
            e._value = r;
            const f = r == null ? "" : r;
            (e.value !== f || e.tagName === "OPTION") && (e.value = f), r == null && e.removeAttribute(t);
            return
        }
        let u = !1;
        if (r === "" || r == null) {
            const f = typeof e[t];
            f === "boolean" ? r = Qb(r) : r == null && f === "string" ? (r = "", u = !0) : f === "number" && (r = 0, u = !0)
        }
        try {
            e[t] = r
        } catch {}
        u && e.removeAttribute(t)
    }
    const [QE, Tk] = (() => {
        let e = Date.now,
            t = !1;
        if (typeof window < "u") {
            Date.now() > document.createEvent("Event").timeStamp && (e = performance.now.bind(performance));
            const r = navigator.userAgent.match(/firefox\/(\d+)/i);
            t = !!(r && Number(r[1]) <= 53)
        }
        return [e, t]
    })();
    let Td = 0;
    const Sk = Promise.resolve(),
        wk = () => {
            Td = 0
        },
        Ok = () => Td || (Sk.then(wk), Td = QE());

    function Yi(e, t, r, n) {
        e.addEventListener(t, r, n)
    }

    function Ik(e, t, r, n) {
        e.removeEventListener(t, r, n)
    }

    function Ck(e, t, r, n, s = null) {
        const o = e._vei || (e._vei = {}),
            c = o[t];
        if (n && c) c.value = n;
        else {
            const [u, f] = $k(t);
            if (n) {
                const h = o[t] = Ak(n, s);
                Yi(e, u, h, f)
            } else c && (Ik(e, u, c, f), o[t] = void 0)
        }
    }
    const Vv = /(?:Once|Passive|Capture)$/;

    function $k(e) {
        let t;
        if (Vv.test(e)) {
            t = {};
            let r;
            for (; r = e.match(Vv);) e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0
        }
        return [as(e.slice(2)), t]
    }

    function Ak(e, t) {
        const r = n => {
            const s = n.timeStamp || QE();
            (Tk || s >= r.attached - 1) && Jr(Rk(n, r.value), t, 5, [n])
        };
        return r.value = e, r.attached = Ok(), r
    }

    function Rk(e, t) {
        if (ke(t)) {
            const r = e.stopImmediatePropagation;
            return e.stopImmediatePropagation = () => {
                r.call(e), e._stopped = !0
            }, t.map(n => s => !s._stopped && n && n(s))
        } else return t
    }
    const qv = /^on[a-z]/,
        Nk = (e, t, r, n, s = !1, o, c, u, f) => {
            t === "class" ? vk(e, n, s) : t === "style" ? yk(e, r, n) : ol(t) ? mh(t) || Ck(e, t, r, n, c) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Lk(e, t, n, s)) ? Ek(e, t, n, o, c, u, f) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), bk(e, t, n, s))
        };

    function Lk(e, t, r, n) {
        return n ? !!(t === "innerHTML" || t === "textContent" || t in e && qv.test(t) && Ke(r)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || qv.test(t) && Vt(r) ? !1 : t in e
    }

    function kk(e) {
        const t = gi();
        if (!t) return;
        const r = () => Sd(t.subTree, e(t.proxy));
        SL(r), bl(() => {
            const n = new MutationObserver(r);
            n.observe(t.subTree.el.parentNode, {
                childList: !0
            }), El(() => n.disconnect())
        })
    }

    function Sd(e, t) {
        if (e.shapeFlag & 128) {
            const r = e.suspense;
            e = r.activeBranch, r.pendingBranch && !r.isHydrating && r.effects.push(() => {
                Sd(r.activeBranch, t)
            })
        }
        for (; e.component;) e = e.component.subTree;
        if (e.shapeFlag & 1 && e.el) Yv(e.el, t);
        else if (e.type === ze) e.children.forEach(r => Sd(r, t));
        else if (e.type === Fa) {
            let {
                el: r,
                anchor: n
            } = e;
            for (; r && (Yv(r, t), r !== n);) r = r.nextSibling
        }
    }

    function Yv(e, t) {
        if (e.nodeType === 1) {
            const r = e.style;
            for (const n in t) r.setProperty(`--${n}`, t[n])
        }
    }
    const Qn = "transition",
        Ca = "animation",
        Il = (e, {
            slots: t
        }) => Ph(NE, Pk(e), t);
    Il.displayName = "Transition";
    const eT = {
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
    Il.props = nr({}, NE.props, eT);
    const Ui = (e, t = []) => {
            ke(e) ? e.forEach(r => r(...t)) : e && e(...t)
        },
        zv = e => e ? ke(e) ? e.some(t => t.length > 1) : e.length > 1 : !1;

    function Pk(e) {
        const t = {};
        for (const fe in e) fe in eT || (t[fe] = e[fe]);
        if (e.css === !1) return t;
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
            leaveFromClass: y = `${r}-leave-from`,
            leaveActiveClass: E = `${r}-leave-active`,
            leaveToClass: I = `${r}-leave-to`
        } = e, k = xk(s), M = k && k[0], j = k && k[1], {
            onBeforeEnter: C,
            onEnter: H,
            onEnterCancelled: X,
            onLeave: W,
            onLeaveCancelled: G,
            onBeforeAppear: Z = C,
            onAppear: oe = H,
            onAppearCancelled: ce = X
        } = t, ue = (fe, Ie, U) => {
            Fi(fe, Ie ? m : u), Fi(fe, Ie ? h : c), U && U()
        }, $e = (fe, Ie) => {
            fe._isLeaving = !1, Fi(fe, y), Fi(fe, I), Fi(fe, E), Ie && Ie()
        }, Ce = fe => (Ie, U) => {
            const ie = fe ? oe : H,
                de = () => ue(Ie, fe, U);
            Ui(ie, [Ie, de]), Xv(() => {
                Fi(Ie, fe ? f : o), ei(Ie, fe ? m : u), zv(ie) || Jv(Ie, n, M, de)
            })
        };
        return nr(t, {
            onBeforeEnter(fe) {
                Ui(C, [fe]), ei(fe, o), ei(fe, c)
            },
            onBeforeAppear(fe) {
                Ui(Z, [fe]), ei(fe, f), ei(fe, h)
            },
            onEnter: Ce(!1),
            onAppear: Ce(!0),
            onLeave(fe, Ie) {
                fe._isLeaving = !0;
                const U = () => $e(fe, Ie);
                ei(fe, y), Uk(), ei(fe, E), Xv(() => {
                    !fe._isLeaving || (Fi(fe, y), ei(fe, I), zv(W) || Jv(fe, n, j, U))
                }), Ui(W, [fe, U])
            },
            onEnterCancelled(fe) {
                ue(fe, !1), Ui(X, [fe])
            },
            onAppearCancelled(fe) {
                ue(fe, !0), Ui(ce, [fe])
            },
            onLeaveCancelled(fe) {
                $e(fe), Ui(G, [fe])
            }
        })
    }

    function xk(e) {
        if (e == null) return null;
        if (Lt(e)) return [yf(e.enter), yf(e.leave)]; {
            const t = yf(e);
            return [t, t]
        }
    }

    function yf(e) {
        return Fc(e)
    }

    function ei(e, t) {
        t.split(/\s+/).forEach(r => r && e.classList.add(r)), (e._vtc || (e._vtc = new Set)).add(t)
    }

    function Fi(e, t) {
        t.split(/\s+/).forEach(n => n && e.classList.remove(n));
        const {
            _vtc: r
        } = e;
        r && (r.delete(t), r.size || (e._vtc = void 0))
    }

    function Xv(e) {
        requestAnimationFrame(() => {
            requestAnimationFrame(e)
        })
    }
    let Dk = 0;

    function Jv(e, t, r, n) {
        const s = e._endId = ++Dk,
            o = () => {
                s === e._endId && n()
            };
        if (r) return setTimeout(o, r);
        const {
            type: c,
            timeout: u,
            propCount: f
        } = Mk(e, t);
        if (!c) return n();
        const h = c + "end";
        let m = 0;
        const y = () => {
                e.removeEventListener(h, E), o()
            },
            E = I => {
                I.target === e && ++m >= f && y()
            };
        setTimeout(() => {
            m < f && y()
        }, u + 1), e.addEventListener(h, E)
    }

    function Mk(e, t) {
        const r = window.getComputedStyle(e),
            n = k => (r[k] || "").split(", "),
            s = n(Qn + "Delay"),
            o = n(Qn + "Duration"),
            c = Zv(s, o),
            u = n(Ca + "Delay"),
            f = n(Ca + "Duration"),
            h = Zv(u, f);
        let m = null,
            y = 0,
            E = 0;
        t === Qn ? c > 0 && (m = Qn, y = c, E = o.length) : t === Ca ? h > 0 && (m = Ca, y = h, E = f.length) : (y = Math.max(c, h), m = y > 0 ? c > h ? Qn : Ca : null, E = m ? m === Qn ? o.length : f.length : 0);
        const I = m === Qn && /\b(transform|all)(,|$)/.test(r[Qn + "Property"]);
        return {
            type: m,
            timeout: y,
            propCount: E,
            hasTransform: I
        }
    }

    function Zv(e, t) {
        for (; e.length < t.length;) e = e.concat(e);
        return Math.max(...t.map((r, n) => Qv(r) + Qv(e[n])))
    }

    function Qv(e) {
        return Number(e.slice(0, -1).replace(",", ".")) * 1e3
    }

    function Uk() {
        return document.body.offsetHeight
    }
    const Hc = e => {
        const t = e.props["onUpdate:modelValue"] || !1;
        return ke(t) ? r => Nc(t, r) : t
    };

    function Fk(e) {
        e.target.composing = !0
    }

    function ey(e) {
        const t = e.target;
        t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")))
    }
    const ty = {
            created(e, {
                modifiers: {
                    lazy: t,
                    trim: r,
                    number: n
                }
            }, s) {
                e._assign = Hc(s);
                const o = n || s.props && s.props.type === "number";
                Yi(e, t ? "change" : "input", c => {
                    if (c.target.composing) return;
                    let u = e.value;
                    r && (u = u.trim()), o && (u = Fc(u)), e._assign(u)
                }), r && Yi(e, "change", () => {
                    e.value = e.value.trim()
                }), t || (Yi(e, "compositionstart", Fk), Yi(e, "compositionend", ey), Yi(e, "change", ey))
            },
            mounted(e, {
                value: t
            }) {
                e.value = t == null ? "" : t
            },
            beforeUpdate(e, {
                value: t,
                modifiers: {
                    lazy: r,
                    trim: n,
                    number: s
                }
            }, o) {
                if (e._assign = Hc(o), e.composing || document.activeElement === e && e.type !== "range" && (r || n && e.value.trim() === t || (s || e.type === "number") && Fc(e.value) === t)) return;
                const c = t == null ? "" : t;
                e.value !== c && (e.value = c)
            }
        },
        Bk = {
            deep: !0,
            created(e, t, r) {
                e._assign = Hc(r), Yi(e, "change", () => {
                    const n = e._modelValue,
                        s = jk(e),
                        o = e.checked,
                        c = e._assign;
                    if (ke(n)) {
                        const u = eE(n, s),
                            f = u !== -1;
                        if (o && !f) c(n.concat(s));
                        else if (!o && f) {
                            const h = [...n];
                            h.splice(u, 1), c(h)
                        }
                    } else if (cl(n)) {
                        const u = new Set(n);
                        o ? u.add(s) : u.delete(s), c(u)
                    } else c(tT(e, o))
                })
            },
            mounted: ry,
            beforeUpdate(e, t, r) {
                e._assign = Hc(r), ry(e, t, r)
            }
        };

    function ry(e, {
        value: t,
        oldValue: r
    }, n) {
        e._modelValue = t, ke(t) ? e.checked = eE(t, n.props.value) > -1 : cl(t) ? e.checked = t.has(n.props.value) : t !== r && (e.checked = al(t, tT(e, !0)))
    }

    function jk(e) {
        return "_value" in e ? e._value : e.value
    }

    function tT(e, t) {
        const r = t ? "_trueValue" : "_falseValue";
        return r in e ? e[r] : t
    }
    const Gk = ["ctrl", "shift", "alt", "meta"],
        Wk = {
            stop: e => e.stopPropagation(),
            prevent: e => e.preventDefault(),
            self: e => e.target !== e.currentTarget,
            ctrl: e => !e.ctrlKey,
            shift: e => !e.shiftKey,
            alt: e => !e.altKey,
            meta: e => !e.metaKey,
            left: e => "button" in e && e.button !== 0,
            middle: e => "button" in e && e.button !== 1,
            right: e => "button" in e && e.button !== 2,
            exact: (e, t) => Gk.some(r => e[`${r}Key`] && !t.includes(r))
        },
        Or = (e, t) => (r, ...n) => {
            for (let s = 0; s < t.length; s++) {
                const o = Wk[t[s]];
                if (o && o(r, t)) return
            }
            return e(r, ...n)
        },
        Kk = {
            esc: "escape",
            space: " ",
            up: "arrow-up",
            left: "arrow-left",
            right: "arrow-right",
            down: "arrow-down",
            delete: "backspace"
        },
        rT = (e, t) => r => {
            if (!("key" in r)) return;
            const n = as(r.key);
            if (t.some(s => s === n || Kk[s] === n)) return e(r)
        },
        Hk = nr({
            patchProp: Nk
        }, mk);
    let ny;

    function Vk() {
        return ny || (ny = ZL(Hk))
    }
    const qk = (...e) => {
        const t = Vk().createApp(...e),
            {
                mount: r
            } = t;
        return t.mount = n => {
            const s = Yk(n);
            if (!s) return;
            const o = t._component;
            !Ke(o) && !o.render && !o.template && (o.template = s.innerHTML), s.innerHTML = "";
            const c = r(s, !1, s instanceof SVGElement);
            return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), c
        }, t
    };

    function Yk(e) {
        return Vt(e) ? document.querySelector(e) : e
    }
    const zk = Je({
            props: {
                player: Object
            },
            methods: {
                onChoiceClick(e) {
                    var c, u, f;
                    const t = this.player.choices[e];
                    if (t.send) {
                        this.$ecast.updateObject(this.player.responseKey, t.send).catch(this.$handleEcastError);
                        return
                    }
                    const r = (c = this.player.action) != null ? c : "choice",
                        n = (u = this.player.key) != null ? u : "value",
                        s = (f = t.value) != null ? f : e,
                        o = {
                            action: r,
                            [n]: s
                        };
                    this.$ecast.updateObject(this.player.responseKey, o).catch(this.$handleEcastError)
                }
            }
        }),
        qe = (e, t) => {
            const r = e.__vccOpts || e;
            for (const [n, s] of t) r[n] = s;
            return r
        },
        Xk = {
            class: "choices"
        },
        Jk = {
            class: "constrain"
        },
        Zk = {
            key: 0
        },
        Qk = ["disabled", "onClick"];

    function eP(e, t, r, n, s, o) {
        const c = Kt("bb");
        return F(), q("div", Xk, [z("div", Jk, [e.player.prompt ? Ve((F(), q("p", Zk, null, 512)), [
            [c, e.player.prompt]
        ]) : Oe("", !0), (F(!0), q(ze, null, Qr(e.player.choices, (u, f) => (F(), q("button", {
            key: f,
            class: Fe({
                selected: u.isSelected
            }),
            disabled: u.isDisabled,
            onClick: Or(h => e.onChoiceClick(f), ["prevent"])
        }, De(u.text), 11, Qk))), 128))])])
    }
    const tP = qe(zk, [
        ["render", eP]
    ]);
    class Vc {
        static setup() {
            gtag("config", "G-V1QJVQMYF1", {
                send_page_view: !1
            })
        }
        static pageView(t) {
            gtag("event", "page_view", {
                page_title: t,
                page_location: `https://jackbox.tv/${t}`
            })
        }
        static gameStarted(t, r) {
            const n = {
                tag: t
            };
            r.isUGC !== void 0 && (n.is_ugc = r.isUGC), r.isSequel !== void 0 && (n.is_sequel = r.isSequel), r.locale !== void 0 && (n.locale = r.locale), r.mode !== void 0 && (n.mode = r.mode), r.numberOfPlayer !== void 0 && (n.number_of_players = r.numberOfPlayer), gtag("event", "game_start", n)
        }
        static bannerClick(t, r) {
            gtag("event", "banner_click", {
                url: t,
                location: r
            })
        }
        static externalLinkClick(t, r) {
            gtag("event", "external_link_click", {
                url: t,
                location: r
            })
        }
        static galleryClick(t, r) {
            gtag("event", "gallery_click", {
                category_id: t,
                location: r
            })
        }
        static galleryImpression(t, r) {
            gtag("event", "gallery_impression", {
                category_id: t,
                location: r
            })
        }
        static moderatorConnected(t) {
            gtag("event", "moderator_connected", {
                tag: t
            })
        }
        static itemModerated(t, r) {
            gtag("event", "item_moderated", {
                tag: t,
                was_rejected: r
            })
        }
        static playerKicked(t, r) {
            gtag("event", "player_kicked", {
                tag: t,
                is_lobby: r
            })
        }
    }
    var Dt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

    function rP(e) {
        var t = e.default;
        if (typeof t == "function") {
            var r = function() {
                return t.apply(this, arguments)
            };
            r.prototype = t.prototype
        } else r = {};
        return Object.defineProperty(r, "__esModule", {
            value: !0
        }), Object.keys(e).forEach(function(n) {
            var s = Object.getOwnPropertyDescriptor(e, n);
            Object.defineProperty(r, n, s.get ? s : {
                enumerable: !0,
                get: function() {
                    return e[n]
                }
            })
        }), r
    }

    function nP() {
        this.__data__ = [], this.size = 0
    }
    var iP = nP;

    function sP(e, t) {
        return e === t || e !== e && t !== t
    }
    var Cl = sP,
        aP = Cl;

    function oP(e, t) {
        for (var r = e.length; r--;)
            if (aP(e[r][0], t)) return r;
        return -1
    }
    var $l = oP,
        cP = $l,
        lP = Array.prototype,
        uP = lP.splice;

    function fP(e) {
        var t = this.__data__,
            r = cP(t, e);
        if (r < 0) return !1;
        var n = t.length - 1;
        return r == n ? t.pop() : uP.call(t, r, 1), --this.size, !0
    }
    var dP = fP,
        hP = $l;

    function pP(e) {
        var t = this.__data__,
            r = hP(t, e);
        return r < 0 ? void 0 : t[r][1]
    }
    var gP = pP,
        mP = $l;

    function vP(e) {
        return mP(this.__data__, e) > -1
    }
    var yP = vP,
        _P = $l;

    function bP(e, t) {
        var r = this.__data__,
            n = _P(r, e);
        return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this
    }
    var EP = bP,
        TP = iP,
        SP = dP,
        wP = gP,
        OP = yP,
        IP = EP;

    function ra(e) {
        var t = -1,
            r = e == null ? 0 : e.length;
        for (this.clear(); ++t < r;) {
            var n = e[t];
            this.set(n[0], n[1])
        }
    }
    ra.prototype.clear = TP;
    ra.prototype.delete = SP;
    ra.prototype.get = wP;
    ra.prototype.has = OP;
    ra.prototype.set = IP;
    var Al = ra,
        CP = Al;

    function $P() {
        this.__data__ = new CP, this.size = 0
    }
    var AP = $P;

    function RP(e) {
        var t = this.__data__,
            r = t.delete(e);
        return this.size = t.size, r
    }
    var NP = RP;

    function LP(e) {
        return this.__data__.get(e)
    }
    var kP = LP;

    function PP(e) {
        return this.__data__.has(e)
    }
    var xP = PP,
        DP = typeof Dt == "object" && Dt && Dt.Object === Object && Dt,
        nT = DP,
        MP = nT,
        UP = typeof self == "object" && self && self.Object === Object && self,
        FP = MP || UP || Function("return this")(),
        pn = FP,
        BP = pn,
        jP = BP.Symbol,
        Rl = jP,
        iy = Rl,
        iT = Object.prototype,
        GP = iT.hasOwnProperty,
        WP = iT.toString,
        $a = iy ? iy.toStringTag : void 0;

    function KP(e) {
        var t = GP.call(e, $a),
            r = e[$a];
        try {
            e[$a] = void 0;
            var n = !0
        } catch {}
        var s = WP.call(e);
        return n && (t ? e[$a] = r : delete e[$a]), s
    }
    var HP = KP,
        VP = Object.prototype,
        qP = VP.toString;

    function YP(e) {
        return qP.call(e)
    }
    var zP = YP,
        sy = Rl,
        XP = HP,
        JP = zP,
        ZP = "[object Null]",
        QP = "[object Undefined]",
        ay = sy ? sy.toStringTag : void 0;

    function ex(e) {
        return e == null ? e === void 0 ? QP : ZP : ay && ay in Object(e) ? XP(e) : JP(e)
    }
    var na = ex;

    function tx(e) {
        var t = typeof e;
        return e != null && (t == "object" || t == "function")
    }
    var tn = tx,
        rx = na,
        nx = tn,
        ix = "[object AsyncFunction]",
        sx = "[object Function]",
        ax = "[object GeneratorFunction]",
        ox = "[object Proxy]";

    function cx(e) {
        if (!nx(e)) return !1;
        var t = rx(e);
        return t == sx || t == ax || t == ix || t == ox
    }
    var xh = cx,
        lx = pn,
        ux = lx["__core-js_shared__"],
        fx = ux,
        _f = fx,
        oy = function() {
            var e = /[^.]+$/.exec(_f && _f.keys && _f.keys.IE_PROTO || "");
            return e ? "Symbol(src)_1." + e : ""
        }();

    function dx(e) {
        return !!oy && oy in e
    }
    var hx = dx,
        px = Function.prototype,
        gx = px.toString;

    function mx(e) {
        if (e != null) {
            try {
                return gx.call(e)
            } catch {}
            try {
                return e + ""
            } catch {}
        }
        return ""
    }
    var sT = mx,
        vx = xh,
        yx = hx,
        _x = tn,
        bx = sT,
        Ex = /[\\^$.*+?()[\]{}|]/g,
        Tx = /^\[object .+?Constructor\]$/,
        Sx = Function.prototype,
        wx = Object.prototype,
        Ox = Sx.toString,
        Ix = wx.hasOwnProperty,
        Cx = RegExp("^" + Ox.call(Ix).replace(Ex, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

    function $x(e) {
        if (!_x(e) || yx(e)) return !1;
        var t = vx(e) ? Cx : Tx;
        return t.test(bx(e))
    }
    var Ax = $x;

    function Rx(e, t) {
        return e == null ? void 0 : e[t]
    }
    var Nx = Rx,
        Lx = Ax,
        kx = Nx;

    function Px(e, t) {
        var r = kx(e, t);
        return Lx(r) ? r : void 0
    }
    var os = Px,
        xx = os,
        Dx = pn,
        Mx = xx(Dx, "Map"),
        Dh = Mx,
        Ux = os,
        Fx = Ux(Object, "create"),
        Nl = Fx,
        cy = Nl;

    function Bx() {
        this.__data__ = cy ? cy(null) : {}, this.size = 0
    }
    var jx = Bx;

    function Gx(e) {
        var t = this.has(e) && delete this.__data__[e];
        return this.size -= t ? 1 : 0, t
    }
    var Wx = Gx,
        Kx = Nl,
        Hx = "__lodash_hash_undefined__",
        Vx = Object.prototype,
        qx = Vx.hasOwnProperty;

    function Yx(e) {
        var t = this.__data__;
        if (Kx) {
            var r = t[e];
            return r === Hx ? void 0 : r
        }
        return qx.call(t, e) ? t[e] : void 0
    }
    var zx = Yx,
        Xx = Nl,
        Jx = Object.prototype,
        Zx = Jx.hasOwnProperty;

    function Qx(e) {
        var t = this.__data__;
        return Xx ? t[e] !== void 0 : Zx.call(t, e)
    }
    var e2 = Qx,
        t2 = Nl,
        r2 = "__lodash_hash_undefined__";

    function n2(e, t) {
        var r = this.__data__;
        return this.size += this.has(e) ? 0 : 1, r[e] = t2 && t === void 0 ? r2 : t, this
    }
    var i2 = n2,
        s2 = jx,
        a2 = Wx,
        o2 = zx,
        c2 = e2,
        l2 = i2;

    function ia(e) {
        var t = -1,
            r = e == null ? 0 : e.length;
        for (this.clear(); ++t < r;) {
            var n = e[t];
            this.set(n[0], n[1])
        }
    }
    ia.prototype.clear = s2;
    ia.prototype.delete = a2;
    ia.prototype.get = o2;
    ia.prototype.has = c2;
    ia.prototype.set = l2;
    var u2 = ia,
        ly = u2,
        f2 = Al,
        d2 = Dh;

    function h2() {
        this.size = 0, this.__data__ = {
            hash: new ly,
            map: new(d2 || f2),
            string: new ly
        }
    }
    var p2 = h2;

    function g2(e) {
        var t = typeof e;
        return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
    }
    var m2 = g2,
        v2 = m2;

    function y2(e, t) {
        var r = e.__data__;
        return v2(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map
    }
    var Ll = y2,
        _2 = Ll;

    function b2(e) {
        var t = _2(this, e).delete(e);
        return this.size -= t ? 1 : 0, t
    }
    var E2 = b2,
        T2 = Ll;

    function S2(e) {
        return T2(this, e).get(e)
    }
    var w2 = S2,
        O2 = Ll;

    function I2(e) {
        return O2(this, e).has(e)
    }
    var C2 = I2,
        $2 = Ll;

    function A2(e, t) {
        var r = $2(this, e),
            n = r.size;
        return r.set(e, t), this.size += r.size == n ? 0 : 1, this
    }
    var R2 = A2,
        N2 = p2,
        L2 = E2,
        k2 = w2,
        P2 = C2,
        x2 = R2;

    function sa(e) {
        var t = -1,
            r = e == null ? 0 : e.length;
        for (this.clear(); ++t < r;) {
            var n = e[t];
            this.set(n[0], n[1])
        }
    }
    sa.prototype.clear = N2;
    sa.prototype.delete = L2;
    sa.prototype.get = k2;
    sa.prototype.has = P2;
    sa.prototype.set = x2;
    var aT = sa,
        D2 = Al,
        M2 = Dh,
        U2 = aT,
        F2 = 200;

    function B2(e, t) {
        var r = this.__data__;
        if (r instanceof D2) {
            var n = r.__data__;
            if (!M2 || n.length < F2 - 1) return n.push([e, t]), this.size = ++r.size, this;
            r = this.__data__ = new U2(n)
        }
        return r.set(e, t), this.size = r.size, this
    }
    var j2 = B2,
        G2 = Al,
        W2 = AP,
        K2 = NP,
        H2 = kP,
        V2 = xP,
        q2 = j2;

    function aa(e) {
        var t = this.__data__ = new G2(e);
        this.size = t.size
    }
    aa.prototype.clear = W2;
    aa.prototype.delete = K2;
    aa.prototype.get = H2;
    aa.prototype.has = V2;
    aa.prototype.set = q2;
    var oT = aa,
        Y2 = os,
        z2 = function() {
            try {
                var e = Y2(Object, "defineProperty");
                return e({}, "", {}), e
            } catch {}
        }(),
        cT = z2,
        uy = cT;

    function X2(e, t, r) {
        t == "__proto__" && uy ? uy(e, t, {
            configurable: !0,
            enumerable: !0,
            value: r,
            writable: !0
        }) : e[t] = r
    }
    var Mh = X2,
        J2 = Mh,
        Z2 = Cl;

    function Q2(e, t, r) {
        (r !== void 0 && !Z2(e[t], r) || r === void 0 && !(t in e)) && J2(e, t, r)
    }
    var lT = Q2;

    function eD(e) {
        return function(t, r, n) {
            for (var s = -1, o = Object(t), c = n(t), u = c.length; u--;) {
                var f = c[e ? u : ++s];
                if (r(o[f], f, o) === !1) break
            }
            return t
        }
    }
    var tD = eD,
        rD = tD,
        nD = rD(),
        iD = nD,
        qc = {
            exports: {}
        };
    (function(e, t) {
        var r = pn,
            n = t && !t.nodeType && t,
            s = n && !0 && e && !e.nodeType && e,
            o = s && s.exports === n,
            c = o ? r.Buffer : void 0,
            u = c ? c.allocUnsafe : void 0;

        function f(h, m) {
            if (m) return h.slice();
            var y = h.length,
                E = u ? u(y) : new h.constructor(y);
            return h.copy(E), E
        }
        e.exports = f
    })(qc, qc.exports);
    var sD = pn,
        aD = sD.Uint8Array,
        oD = aD,
        fy = oD;

    function cD(e) {
        var t = new e.constructor(e.byteLength);
        return new fy(t).set(new fy(e)), t
    }
    var Uh = cD,
        lD = Uh;

    function uD(e, t) {
        var r = t ? lD(e.buffer) : e.buffer;
        return new e.constructor(r, e.byteOffset, e.length)
    }
    var uT = uD;

    function fD(e, t) {
        var r = -1,
            n = e.length;
        for (t || (t = Array(n)); ++r < n;) t[r] = e[r];
        return t
    }
    var fT = fD,
        dD = tn,
        dy = Object.create,
        hD = function() {
            function e() {}
            return function(t) {
                if (!dD(t)) return {};
                if (dy) return dy(t);
                e.prototype = t;
                var r = new e;
                return e.prototype = void 0, r
            }
        }(),
        pD = hD;

    function gD(e, t) {
        return function(r) {
            return e(t(r))
        }
    }
    var dT = gD,
        mD = dT,
        vD = mD(Object.getPrototypeOf, Object),
        Fh = vD,
        yD = Object.prototype;

    function _D(e) {
        var t = e && e.constructor,
            r = typeof t == "function" && t.prototype || yD;
        return e === r
    }
    var Bh = _D,
        bD = pD,
        ED = Fh,
        TD = Bh;

    function SD(e) {
        return typeof e.constructor == "function" && !TD(e) ? bD(ED(e)) : {}
    }
    var hT = SD;

    function wD(e) {
        return e != null && typeof e == "object"
    }
    var yi = wD,
        OD = na,
        ID = yi,
        CD = "[object Arguments]";

    function $D(e) {
        return ID(e) && OD(e) == CD
    }
    var AD = $D,
        hy = AD,
        RD = yi,
        pT = Object.prototype,
        ND = pT.hasOwnProperty,
        LD = pT.propertyIsEnumerable,
        kD = hy(function() {
            return arguments
        }()) ? hy : function(e) {
            return RD(e) && ND.call(e, "callee") && !LD.call(e, "callee")
        },
        gT = kD,
        PD = Array.isArray,
        _i = PD,
        xD = 9007199254740991;

    function DD(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= xD
    }
    var mT = DD,
        MD = xh,
        UD = mT;

    function FD(e) {
        return e != null && UD(e.length) && !MD(e)
    }
    var kl = FD,
        BD = kl,
        jD = yi;

    function GD(e) {
        return jD(e) && BD(e)
    }
    var WD = GD,
        to = {
            exports: {}
        };

    function KD() {
        return !1
    }
    var HD = KD;
    (function(e, t) {
        var r = pn,
            n = HD,
            s = t && !t.nodeType && t,
            o = s && !0 && e && !e.nodeType && e,
            c = o && o.exports === s,
            u = c ? r.Buffer : void 0,
            f = u ? u.isBuffer : void 0,
            h = f || n;
        e.exports = h
    })(to, to.exports);
    var VD = na,
        qD = Fh,
        YD = yi,
        zD = "[object Object]",
        XD = Function.prototype,
        JD = Object.prototype,
        vT = XD.toString,
        ZD = JD.hasOwnProperty,
        QD = vT.call(Object);

    function eM(e) {
        if (!YD(e) || VD(e) != zD) return !1;
        var t = qD(e);
        if (t === null) return !0;
        var r = ZD.call(t, "constructor") && t.constructor;
        return typeof r == "function" && r instanceof r && vT.call(r) == QD
    }
    var tM = eM,
        rM = na,
        nM = mT,
        iM = yi,
        sM = "[object Arguments]",
        aM = "[object Array]",
        oM = "[object Boolean]",
        cM = "[object Date]",
        lM = "[object Error]",
        uM = "[object Function]",
        fM = "[object Map]",
        dM = "[object Number]",
        hM = "[object Object]",
        pM = "[object RegExp]",
        gM = "[object Set]",
        mM = "[object String]",
        vM = "[object WeakMap]",
        yM = "[object ArrayBuffer]",
        _M = "[object DataView]",
        bM = "[object Float32Array]",
        EM = "[object Float64Array]",
        TM = "[object Int8Array]",
        SM = "[object Int16Array]",
        wM = "[object Int32Array]",
        OM = "[object Uint8Array]",
        IM = "[object Uint8ClampedArray]",
        CM = "[object Uint16Array]",
        $M = "[object Uint32Array]",
        St = {};
    St[bM] = St[EM] = St[TM] = St[SM] = St[wM] = St[OM] = St[IM] = St[CM] = St[$M] = !0;
    St[sM] = St[aM] = St[yM] = St[oM] = St[_M] = St[cM] = St[lM] = St[uM] = St[fM] = St[dM] = St[hM] = St[pM] = St[gM] = St[mM] = St[vM] = !1;

    function AM(e) {
        return iM(e) && nM(e.length) && !!St[rM(e)]
    }
    var RM = AM;

    function NM(e) {
        return function(t) {
            return e(t)
        }
    }
    var jh = NM,
        ro = {
            exports: {}
        };
    (function(e, t) {
        var r = nT,
            n = t && !t.nodeType && t,
            s = n && !0 && e && !e.nodeType && e,
            o = s && s.exports === n,
            c = o && r.process,
            u = function() {
                try {
                    var f = s && s.require && s.require("util").types;
                    return f || c && c.binding && c.binding("util")
                } catch {}
            }();
        e.exports = u
    })(ro, ro.exports);
    var LM = RM,
        kM = jh,
        py = ro.exports,
        gy = py && py.isTypedArray,
        PM = gy ? kM(gy) : LM,
        yT = PM;

    function xM(e, t) {
        if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__") return e[t]
    }
    var _T = xM,
        DM = Mh,
        MM = Cl,
        UM = Object.prototype,
        FM = UM.hasOwnProperty;

    function BM(e, t, r) {
        var n = e[t];
        (!(FM.call(e, t) && MM(n, r)) || r === void 0 && !(t in e)) && DM(e, t, r)
    }
    var Gh = BM,
        jM = Gh,
        GM = Mh;

    function WM(e, t, r, n) {
        var s = !r;
        r || (r = {});
        for (var o = -1, c = t.length; ++o < c;) {
            var u = t[o],
                f = n ? n(r[u], e[u], u, r, e) : void 0;
            f === void 0 && (f = e[u]), s ? GM(r, u, f) : jM(r, u, f)
        }
        return r
    }
    var lo = WM;

    function KM(e, t) {
        for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
        return n
    }
    var HM = KM,
        VM = 9007199254740991,
        qM = /^(?:0|[1-9]\d*)$/;

    function YM(e, t) {
        var r = typeof e;
        return t = t == null ? VM : t, !!t && (r == "number" || r != "symbol" && qM.test(e)) && e > -1 && e % 1 == 0 && e < t
    }
    var Wh = YM,
        zM = HM,
        XM = gT,
        JM = _i,
        ZM = to.exports,
        QM = Wh,
        eU = yT,
        tU = Object.prototype,
        rU = tU.hasOwnProperty;

    function nU(e, t) {
        var r = JM(e),
            n = !r && XM(e),
            s = !r && !n && ZM(e),
            o = !r && !n && !s && eU(e),
            c = r || n || s || o,
            u = c ? zM(e.length, String) : [],
            f = u.length;
        for (var h in e)(t || rU.call(e, h)) && !(c && (h == "length" || s && (h == "offset" || h == "parent") || o && (h == "buffer" || h == "byteLength" || h == "byteOffset") || QM(h, f))) && u.push(h);
        return u
    }
    var bT = nU;

    function iU(e) {
        var t = [];
        if (e != null)
            for (var r in Object(e)) t.push(r);
        return t
    }
    var sU = iU,
        aU = tn,
        oU = Bh,
        cU = sU,
        lU = Object.prototype,
        uU = lU.hasOwnProperty;

    function fU(e) {
        if (!aU(e)) return cU(e);
        var t = oU(e),
            r = [];
        for (var n in e) n == "constructor" && (t || !uU.call(e, n)) || r.push(n);
        return r
    }
    var dU = fU,
        hU = bT,
        pU = dU,
        gU = kl;

    function mU(e) {
        return gU(e) ? hU(e, !0) : pU(e)
    }
    var uo = mU,
        vU = lo,
        yU = uo;

    function _U(e) {
        return vU(e, yU(e))
    }
    var bU = _U,
        my = lT,
        EU = qc.exports,
        TU = uT,
        SU = fT,
        wU = hT,
        vy = gT,
        yy = _i,
        OU = WD,
        IU = to.exports,
        CU = xh,
        $U = tn,
        AU = tM,
        RU = yT,
        _y = _T,
        NU = bU;

    function LU(e, t, r, n, s, o, c) {
        var u = _y(e, r),
            f = _y(t, r),
            h = c.get(f);
        if (h) {
            my(e, r, h);
            return
        }
        var m = o ? o(u, f, r + "", e, t, c) : void 0,
            y = m === void 0;
        if (y) {
            var E = yy(f),
                I = !E && IU(f),
                k = !E && !I && RU(f);
            m = f, E || I || k ? yy(u) ? m = u : OU(u) ? m = SU(u) : I ? (y = !1, m = EU(f, !0)) : k ? (y = !1, m = TU(f, !0)) : m = [] : AU(f) || vy(f) ? (m = u, vy(u) ? m = NU(u) : (!$U(u) || CU(u)) && (m = wU(f))) : y = !1
        }
        y && (c.set(f, m), s(m, f, n, o, c), c.delete(f)), my(e, r, m)
    }
    var kU = LU,
        PU = oT,
        xU = lT,
        DU = iD,
        MU = kU,
        UU = tn,
        FU = uo,
        BU = _T;

    function ET(e, t, r, n, s) {
        e !== t && DU(t, function(o, c) {
            if (s || (s = new PU), UU(o)) MU(e, t, c, r, ET, n, s);
            else {
                var u = n ? n(BU(e, c), o, c + "", e, t, s) : void 0;
                u === void 0 && (u = o), xU(e, c, u)
            }
        }, FU)
    }
    var jU = ET;

    function GU(e) {
        return e
    }
    var TT = GU;

    function WU(e, t, r) {
        switch (r.length) {
            case 0:
                return e.call(t);
            case 1:
                return e.call(t, r[0]);
            case 2:
                return e.call(t, r[0], r[1]);
            case 3:
                return e.call(t, r[0], r[1], r[2])
        }
        return e.apply(t, r)
    }
    var KU = WU,
        HU = KU,
        by = Math.max;

    function VU(e, t, r) {
        return t = by(t === void 0 ? e.length - 1 : t, 0),
            function() {
                for (var n = arguments, s = -1, o = by(n.length - t, 0), c = Array(o); ++s < o;) c[s] = n[t + s];
                s = -1;
                for (var u = Array(t + 1); ++s < t;) u[s] = n[s];
                return u[t] = r(c), HU(e, this, u)
            }
    }
    var qU = VU;

    function YU(e) {
        return function() {
            return e
        }
    }
    var zU = YU,
        XU = zU,
        Ey = cT,
        JU = TT,
        ZU = Ey ? function(e, t) {
            return Ey(e, "toString", {
                configurable: !0,
                enumerable: !1,
                value: XU(t),
                writable: !0
            })
        } : JU,
        QU = ZU,
        eF = 800,
        tF = 16,
        rF = Date.now;

    function nF(e) {
        var t = 0,
            r = 0;
        return function() {
            var n = rF(),
                s = tF - (n - r);
            if (r = n, s > 0) {
                if (++t >= eF) return arguments[0]
            } else t = 0;
            return e.apply(void 0, arguments)
        }
    }
    var iF = nF,
        sF = QU,
        aF = iF,
        oF = aF(sF),
        cF = oF,
        lF = TT,
        uF = qU,
        fF = cF;

    function dF(e, t) {
        return fF(uF(e, t, lF), e + "")
    }
    var hF = dF,
        pF = Cl,
        gF = kl,
        mF = Wh,
        vF = tn;

    function yF(e, t, r) {
        if (!vF(r)) return !1;
        var n = typeof t;
        return (n == "number" ? gF(r) && mF(t, r.length) : n == "string" && t in r) ? pF(r[t], e) : !1
    }
    var _F = yF,
        bF = hF,
        EF = _F;

    function TF(e) {
        return bF(function(t, r) {
            var n = -1,
                s = r.length,
                o = s > 1 ? r[s - 1] : void 0,
                c = s > 2 ? r[2] : void 0;
            for (o = e.length > 3 && typeof o == "function" ? (s--, o) : void 0, c && EF(r[0], r[1], c) && (o = s < 3 ? void 0 : o, s = 1), t = Object(t); ++n < s;) {
                var u = r[n];
                u && e(t, u, n, o)
            }
            return t
        })
    }
    var SF = TF,
        wF = jU,
        OF = SF,
        IF = OF(function(e, t, r) {
            wF(e, t, r)
        }),
        CF = IF;
    class Fs {
        static set(t) {
            if (t && this.isSupported(t)) {
                this.locale = t;
                return
            }
            this.locale = this.getPreferredDeviceLocale()
        }
        static getPreferredDeviceLocale() {
            const t = navigator.languages;
            for (let r = 0; r < t.length; r++)
                if (this.isSupported(t[r])) return t[r];
            return this.supported[0]
        }
        static isSupported(t) {
            return Object.values(this.supported).includes(t)
        }
        static mergeMessages(...t) {
            return CF(t[0], ...t)
        }
    }
    ge(Fs, "locale"), ge(Fs, "supported", ["en", "fr", "it", "de", "es", "es-XL"]);
    const Kp = class {
        static get serverUrl() {
            var r;
            const t = (r = this.getQueryParam("server")) != null ? r : this.getQueryParam("s");
            return !t || t === "live" ? "ecast.jackboxgames.com" : t === "local" ? "https://localhost" : t.includes("localhost") ? t : `${t}.jackboxgames.com`
        }
        static get isCanvasSupported() {
            const t = document.createElement("canvas");
            return !!(t.getContext && t.getContext("2d"))
        }
        static toPrecision(t, r) {
            const n = 10 ** r;
            return Math.round((t + Number.EPSILON) * n) / n
        }
        static htmlUnescape(t) {
            return String(t).replace(/&quot;/gi, '"').replace(/&#39;/gi, "'").replace(/&lt;/gi, "<").replace(/&gt;/gi, ">").replace(/&amp;/gi, "&")
        }
        static htmlEscape(t) {
            return String(t).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
        }
        static sanitize(t) {
            const r = this.sanitizeInput(t).replace(/'/g, "\u2019");
            return this.htmlEscape(r).trim()
        }
        static sanitizeName(t) {
            return t.replace(/[^A-Z0-9\u00A1\u0020-\u002F\u00BF-\u00FF\u2026!?*$+\-'_ .,]/gi, "").replace(/'/g, "\u2019")
        }
        static sanitizeInput(t) {
            return t.replace(/[^\u00A1\u0020-\u007E\u00BF-\u00FF’]/gi, "")
        }
        static sanitizeEmoji(t) {
            return t.replace(/(\u00a9|\u00ae|[\u2000-\u2017]|[\u2020-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/, "")
        }
        static safeText(t) {
            const r = document.createElement("div");
            return r.textContent = t, r.innerHTML
        }
        static htmlTagsToBBCode(t, r) {
            if (!r.length) throw new Error("[Utils.htmlTagsToBBCode] No tag pairs were passed in");
            return r.reduce((n, s) => (n.replaceAll(`<${s[0]}>`, `[${s[1]}]`), n.replaceAll(`</${s[0]}>`, `</${s[1]}>`), n), t)
        }
        static hexToRgb(t) {
            const r = new ArrayBuffer(4);
            new DataView(r).setUint32(0, parseInt(t.replace("#", ""), 16), !1);
            const s = new Uint8Array(r);
            return `${s[1]},${s[2]},${s[3]}`
        }
        static adjustColor(t, r) {
            let n = !1,
                s = t;
            s[0] === "#" && (s = s.slice(1), n = !0);
            const o = parseInt(s, 16),
                c = Math.min(Math.max(0, (o >> 16) * r), 255),
                u = Math.min(Math.max(0, (o >> 8 & 255) * r), 255);
            let h = (Math.min(Math.max(0, (o & 255) * r), 255) | u << 8 | c << 16).toString(16);
            for (; h.length < s.length;) h = `0${h}`;
            return (n ? "#" : "") + h
        }
        static isInTolerance(t, r, n) {
            return !(Math.abs(t.x - r.x) < n || Math.abs(t.y - r.y) > n)
        }
        static getDistanceBetweenPoints(t, r) {
            const n = [t.x - r.x, t.y - r.y],
                s = Math.hypot(...n);
            return Math.round(s * 100) / 100
        }
        static getMidpoint(t, r) {
            return {
                x: (t.x + r.x) / 2,
                y: (t.y + r.y) / 2
            }
        }
        static getAngleBetweenPoints(t, r) {
            let s = Math.atan2(r.y - t.y, r.x - t.x) * (180 / Math.PI);
            return s < 0 && (s += 360), 360 - s
        }
        static getAngularDistance(t, r) {
            let n = (r - t) % 360;
            const s = n < 0 ? 1 : -1;
            return n = Math.abs(n), n > 180 ? s * (360 - n) : s * n
        }
        static getVelocity(t, r, n, s) {
            return this.getDistanceBetweenPoints(t, n) / (s - r)
        }
        static isInsideElement(t, r) {
            const n = r.getBoundingClientRect();
            return !(t.x < n.left || t.x > n.left + n.width || t.y < n.top || t.y > n.top + n.height)
        }
    };
    let Dr = Kp;
    ge(Dr, "queryParams", new URLSearchParams(window.location.search)), ge(Dr, "getQueryParam", t => Kp.queryParams.get(t)), ge(Dr, "sleep", t => new Promise(r => {
        window.setTimeout(r, t)
    }));
    class $t {
        static get namespace() {
            var t, r;
            return (r = (t = window.tv.storage) == null ? void 0 : t.namespace) != null ? r : this.defaultNamespace
        }
        static get isDisabled() {
            var t, r;
            return (r = (t = window.tv.storage) == null ? void 0 : t.isDisabled) != null ? r : !1
        }
        static get tag() {
            var t;
            return (t = window.tv.storage) == null ? void 0 : t.tag
        }
        static get code() {
            var t;
            return (t = window.tv.storage) == null ? void 0 : t.code
        }
        static get isSupported() {
            if (this.isDisabled) return !1;
            try {
                return window.localStorage ? (window.localStorage.setItem("support-check", "1"), window.localStorage.removeItem("support-check"), !0) : !1
            } catch {
                return !1
            }
        }
        static setup(t, r) {
            var n, s;
            delete window.tv.storage, window.tv.storage = {
                namespace: (s = (n = Dr.getQueryParam("namespace")) != null ? n : Dr.getQueryParam("ns")) != null ? s : this.defaultNamespace,
                isDisabled: Dr.queryParams.has("incognito") || Dr.queryParams.has("nc")
            }, t && (window.tv.storage.tag = t), r && (window.tv.storage.code = r.toLowerCase(), this.clearCodeScopedKeys(window.tv.storage.code)), this.migrateNamespace("blobcast", this.defaultNamespace)
        }
        static get(t, r) {
            return this.isSupported ? window.localStorage.getItem(this.getScopedKey(t, r)) : null
        }
        static set(t, r, n = "none") {
            if (!!this.isSupported) return window.localStorage.setItem(this.getScopedSetKey(t, n), r)
        }
        static remove(t, r) {
            if (!!this.isSupported) return window.localStorage.removeItem(this.getScopedKey(t, r))
        }
        static setTag(t) {
            var c;
            const r = t.toLowerCase(),
                n = (c = this.get("tags")) != null ? c : "[]",
                s = r.split("-")[0];
            let o = JSON.parse(n);
            o = o.filter(u => {
                const f = u.split("-")[0];
                return s !== f
            }), o.push(r), this.set("tags", JSON.stringify(o))
        }
        static getScopedKey(t, r) {
            const n = `${this.namespace}:${t}`,
                s = this.tag ? `${this.namespace}:${t}:tag:${this.tag}` : null,
                o = this.code ? `${this.namespace}:${t}:code:${this.code}` : null;
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
        static getScopedSetKey(t, r = "none") {
            if (r === "tag") {
                if (!this.tag) throw new Error('[Storage] requested "room" scope but tv.storage.tag is undefined');
                return `${this.namespace}:${t}:tag:${this.tag}`
            }
            if (r === "code") {
                if (!this.code) throw new Error('[Storage] requested "code" scope but tv.storage.code is undefined');
                return `${this.namespace}:${t}:code:${this.code}`
            }
            return `${this.namespace}:${t}`
        }
        static clearCodeScopedKeys(t) {
            !this.isSupported || Object.keys(window.localStorage).forEach(r => {
                const n = r.split(":code:");
                n.length <= 1 || n[1] !== t && window.localStorage.removeItem(r)
            })
        }
        static migrateNamespace(t, r) {
            !this.isSupported || Object.keys(window.localStorage).forEach(n => {
                if (!n.startsWith(`${t}-`)) return;
                const s = n.replace(`${t}-`, `${r}:`),
                    o = window.localStorage.getItem(n);
                !o || (window.localStorage.setItem(s, o), window.localStorage.removeItem(n))
            })
        }
    }
    ge($t, "defaultNamespace", "tv");
    class no {
        constructor() {
            ge(this, "artifacts");
            this.artifacts = this.list()
        }
        get hasUnviewed() {
            return this.artifacts.some(t => !t.viewed)
        }
        add(t, r) {
            no.add(t, r), this.artifacts = this.list()
        }
        static add(t, r) {
            if (!$t.isSupported) return;
            const n = this.isTestArtifact(t) ? "http" : "https",
                s = this.isTestArtifact(t) ? "games-test.jackbox.tv" : "games.jackbox.tv",
                o = `${n}://${s}/artifact/${t.categoryId}/${t.artifactId}/`,
                c = $t.get("galleries") || "[]";
            try {
                const u = JSON.parse(c) || [];
                if (u.some(f => f.url === o)) return;
                u.unshift({
                    url: o,
                    time: new Date().getTime(),
                    categoryId: t.categoryId,
                    viewed: !1
                }), $t.set("galleries", JSON.stringify(u.slice(0, 40)))
            } catch {
                console.warn("[Artifacts] Unable to add artifact to local storage")
            }
        }
        remove(t) {
            if (!$t.isSupported) return;
            const r = $t.get("galleries") || "[]";
            try {
                const n = JSON.parse(r) || [];
                n.splice(t, 1), $t.set("galleries", JSON.stringify(n)), this.artifacts = this.list()
            } catch {
                console.warn("[Artifacts] Unable to remove artifact")
            }
        }
        setAsViewed(t) {
            no.setAsViewed(t), this.artifacts = this.list()
        }
        static setAsViewed(t) {
            if (!$t.isSupported) return;
            const r = $t.get("galleries") || "[]";
            try {
                const n = JSON.parse(r) || [];
                n.length && (n[t].viewed = !0), $t.set("galleries", JSON.stringify(n))
            } catch {
                console.warn(`[Artifacts] Unable to mark artifact ${t} as viewed`)
            }
        }
        static isTestArtifact(t) {
            var r;
            return ((r = t == null ? void 0 : t.rootId) == null ? void 0 : r.indexOf("test")) !== -1
        }
        list() {
            if (!$t.isSupported) return [];
            const t = new Intl.DateTimeFormat(Fs.locale, {
                    year: "numeric",
                    month: "short",
                    day: "numeric"
                }),
                r = $t.get("galleries") || "[]",
                n = Date.now();
            try {
                return (JSON.parse(r) || []).filter(o => n - o.time < 525600 * 60 * 1e3).map(o => {
                    const c = new Date(o.time),
                        u = t.format(c),
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
    var wd = {
        exports: {}
    };
    (function(e, t) {
        var r = typeof self < "u" ? self : Dt,
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

                function f(U) {
                    return U && DataView.prototype.isPrototypeOf(U)
                }
                if (u.arrayBuffer) var h = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                    m = ArrayBuffer.isView || function(U) {
                        return U && h.indexOf(Object.prototype.toString.call(U)) > -1
                    };

                function y(U) {
                    if (typeof U != "string" && (U = String(U)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(U)) throw new TypeError("Invalid character in header field name");
                    return U.toLowerCase()
                }

                function E(U) {
                    return typeof U != "string" && (U = String(U)), U
                }

                function I(U) {
                    var ie = {
                        next: function() {
                            var de = U.shift();
                            return {
                                done: de === void 0,
                                value: de
                            }
                        }
                    };
                    return u.iterable && (ie[Symbol.iterator] = function() {
                        return ie
                    }), ie
                }

                function k(U) {
                    this.map = {}, U instanceof k ? U.forEach(function(ie, de) {
                        this.append(de, ie)
                    }, this) : Array.isArray(U) ? U.forEach(function(ie) {
                        this.append(ie[0], ie[1])
                    }, this) : U && Object.getOwnPropertyNames(U).forEach(function(ie) {
                        this.append(ie, U[ie])
                    }, this)
                }
                k.prototype.append = function(U, ie) {
                    U = y(U), ie = E(ie);
                    var de = this.map[U];
                    this.map[U] = de ? de + ", " + ie : ie
                }, k.prototype.delete = function(U) {
                    delete this.map[y(U)]
                }, k.prototype.get = function(U) {
                    return U = y(U), this.has(U) ? this.map[U] : null
                }, k.prototype.has = function(U) {
                    return this.map.hasOwnProperty(y(U))
                }, k.prototype.set = function(U, ie) {
                    this.map[y(U)] = E(ie)
                }, k.prototype.forEach = function(U, ie) {
                    for (var de in this.map) this.map.hasOwnProperty(de) && U.call(ie, this.map[de], de, this)
                }, k.prototype.keys = function() {
                    var U = [];
                    return this.forEach(function(ie, de) {
                        U.push(de)
                    }), I(U)
                }, k.prototype.values = function() {
                    var U = [];
                    return this.forEach(function(ie) {
                        U.push(ie)
                    }), I(U)
                }, k.prototype.entries = function() {
                    var U = [];
                    return this.forEach(function(ie, de) {
                        U.push([de, ie])
                    }), I(U)
                }, u.iterable && (k.prototype[Symbol.iterator] = k.prototype.entries);

                function M(U) {
                    if (U.bodyUsed) return Promise.reject(new TypeError("Already read"));
                    U.bodyUsed = !0
                }

                function j(U) {
                    return new Promise(function(ie, de) {
                        U.onload = function() {
                            ie(U.result)
                        }, U.onerror = function() {
                            de(U.error)
                        }
                    })
                }

                function C(U) {
                    var ie = new FileReader,
                        de = j(ie);
                    return ie.readAsArrayBuffer(U), de
                }

                function H(U) {
                    var ie = new FileReader,
                        de = j(ie);
                    return ie.readAsText(U), de
                }

                function X(U) {
                    for (var ie = new Uint8Array(U), de = new Array(ie.length), be = 0; be < ie.length; be++) de[be] = String.fromCharCode(ie[be]);
                    return de.join("")
                }

                function W(U) {
                    if (U.slice) return U.slice(0);
                    var ie = new Uint8Array(U.byteLength);
                    return ie.set(new Uint8Array(U)), ie.buffer
                }

                function G() {
                    return this.bodyUsed = !1, this._initBody = function(U) {
                        this._bodyInit = U, U ? typeof U == "string" ? this._bodyText = U : u.blob && Blob.prototype.isPrototypeOf(U) ? this._bodyBlob = U : u.formData && FormData.prototype.isPrototypeOf(U) ? this._bodyFormData = U : u.searchParams && URLSearchParams.prototype.isPrototypeOf(U) ? this._bodyText = U.toString() : u.arrayBuffer && u.blob && f(U) ? (this._bodyArrayBuffer = W(U.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : u.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(U) || m(U)) ? this._bodyArrayBuffer = W(U) : this._bodyText = U = Object.prototype.toString.call(U) : this._bodyText = "", this.headers.get("content-type") || (typeof U == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : u.searchParams && URLSearchParams.prototype.isPrototypeOf(U) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                    }, u.blob && (this.blob = function() {
                        var U = M(this);
                        if (U) return U;
                        if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                        if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                        if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                        return Promise.resolve(new Blob([this._bodyText]))
                    }, this.arrayBuffer = function() {
                        return this._bodyArrayBuffer ? M(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(C)
                    }), this.text = function() {
                        var U = M(this);
                        if (U) return U;
                        if (this._bodyBlob) return H(this._bodyBlob);
                        if (this._bodyArrayBuffer) return Promise.resolve(X(this._bodyArrayBuffer));
                        if (this._bodyFormData) throw new Error("could not read FormData body as text");
                        return Promise.resolve(this._bodyText)
                    }, u.formData && (this.formData = function() {
                        return this.text().then(ue)
                    }), this.json = function() {
                        return this.text().then(JSON.parse)
                    }, this
                }
                var Z = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

                function oe(U) {
                    var ie = U.toUpperCase();
                    return Z.indexOf(ie) > -1 ? ie : U
                }

                function ce(U, ie) {
                    ie = ie || {};
                    var de = ie.body;
                    if (U instanceof ce) {
                        if (U.bodyUsed) throw new TypeError("Already read");
                        this.url = U.url, this.credentials = U.credentials, ie.headers || (this.headers = new k(U.headers)), this.method = U.method, this.mode = U.mode, this.signal = U.signal, !de && U._bodyInit != null && (de = U._bodyInit, U.bodyUsed = !0)
                    } else this.url = String(U);
                    if (this.credentials = ie.credentials || this.credentials || "same-origin", (ie.headers || !this.headers) && (this.headers = new k(ie.headers)), this.method = oe(ie.method || this.method || "GET"), this.mode = ie.mode || this.mode || null, this.signal = ie.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && de) throw new TypeError("Body not allowed for GET or HEAD requests");
                    this._initBody(de)
                }
                ce.prototype.clone = function() {
                    return new ce(this, {
                        body: this._bodyInit
                    })
                };

                function ue(U) {
                    var ie = new FormData;
                    return U.trim().split("&").forEach(function(de) {
                        if (de) {
                            var be = de.split("="),
                                ve = be.shift().replace(/\+/g, " "),
                                Se = be.join("=").replace(/\+/g, " ");
                            ie.append(decodeURIComponent(ve), decodeURIComponent(Se))
                        }
                    }), ie
                }

                function $e(U) {
                    var ie = new k,
                        de = U.replace(/\r?\n[\t ]+/g, " ");
                    return de.split(/\r?\n/).forEach(function(be) {
                        var ve = be.split(":"),
                            Se = ve.shift().trim();
                        if (Se) {
                            var Me = ve.join(":").trim();
                            ie.append(Se, Me)
                        }
                    }), ie
                }
                G.call(ce.prototype);

                function Ce(U, ie) {
                    ie || (ie = {}), this.type = "default", this.status = ie.status === void 0 ? 200 : ie.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in ie ? ie.statusText : "OK", this.headers = new k(ie.headers), this.url = ie.url || "", this._initBody(U)
                }
                G.call(Ce.prototype), Ce.prototype.clone = function() {
                    return new Ce(this._bodyInit, {
                        status: this.status,
                        statusText: this.statusText,
                        headers: new k(this.headers),
                        url: this.url
                    })
                }, Ce.error = function() {
                    var U = new Ce(null, {
                        status: 0,
                        statusText: ""
                    });
                    return U.type = "error", U
                };
                var fe = [301, 302, 303, 307, 308];
                Ce.redirect = function(U, ie) {
                    if (fe.indexOf(ie) === -1) throw new RangeError("Invalid status code");
                    return new Ce(null, {
                        status: ie,
                        headers: {
                            location: U
                        }
                    })
                }, c.DOMException = o.DOMException;
                try {
                    new c.DOMException
                } catch {
                    c.DOMException = function(ie, de) {
                        this.message = ie, this.name = de;
                        var be = Error(ie);
                        this.stack = be.stack
                    }, c.DOMException.prototype = Object.create(Error.prototype), c.DOMException.prototype.constructor = c.DOMException
                }

                function Ie(U, ie) {
                    return new Promise(function(de, be) {
                        var ve = new ce(U, ie);
                        if (ve.signal && ve.signal.aborted) return be(new c.DOMException("Aborted", "AbortError"));
                        var Se = new XMLHttpRequest;

                        function Me() {
                            Se.abort()
                        }
                        Se.onload = function() {
                            var Ge = {
                                status: Se.status,
                                statusText: Se.statusText,
                                headers: $e(Se.getAllResponseHeaders() || "")
                            };
                            Ge.url = "responseURL" in Se ? Se.responseURL : Ge.headers.get("X-Request-URL");
                            var nt = "response" in Se ? Se.response : Se.responseText;
                            de(new Ce(nt, Ge))
                        }, Se.onerror = function() {
                            be(new TypeError("Network request failed"))
                        }, Se.ontimeout = function() {
                            be(new TypeError("Network request failed"))
                        }, Se.onabort = function() {
                            be(new c.DOMException("Aborted", "AbortError"))
                        }, Se.open(ve.method, ve.url, !0), ve.credentials === "include" ? Se.withCredentials = !0 : ve.credentials === "omit" && (Se.withCredentials = !1), "responseType" in Se && u.blob && (Se.responseType = "blob"), ve.headers.forEach(function(Ge, nt) {
                            Se.setRequestHeader(nt, Ge)
                        }), ve.signal && (ve.signal.addEventListener("abort", Me), Se.onreadystatechange = function() {
                            Se.readyState === 4 && ve.signal.removeEventListener("abort", Me)
                        }), Se.send(typeof ve._bodyInit > "u" ? null : ve._bodyInit)
                    })
                }
                return Ie.polyfill = !0, o.fetch || (o.fetch = Ie, o.Headers = k, o.Request = ce, o.Response = Ce), c.Headers = k, c.Request = ce, c.Response = Ce, c.fetch = Ie, Object.defineProperty(c, "__esModule", {
                    value: !0
                }), c
            })({})
        })(n), n.fetch.ponyfill = !0, delete n.fetch.polyfill;
        var s = n;
        t = s.fetch, t.default = s.fetch, t.fetch = s.fetch, t.Headers = s.Headers, t.Request = s.Request, t.Response = s.Response, e.exports = t
    })(wd, wd.exports);
    var $F = function() {
            if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function") return !1;
            if (typeof Symbol.iterator == "symbol") return !0;
            var t = {},
                r = Symbol("test"),
                n = Object(r);
            if (typeof r == "string" || Object.prototype.toString.call(r) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]") return !1;
            var s = 42;
            t[r] = s;
            for (r in t) return !1;
            if (typeof Object.keys == "function" && Object.keys(t).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(t).length !== 0) return !1;
            var o = Object.getOwnPropertySymbols(t);
            if (o.length !== 1 || o[0] !== r || !Object.prototype.propertyIsEnumerable.call(t, r)) return !1;
            if (typeof Object.getOwnPropertyDescriptor == "function") {
                var c = Object.getOwnPropertyDescriptor(t, r);
                if (c.value !== s || c.enumerable !== !0) return !1
            }
            return !0
        },
        Ty = typeof Symbol < "u" && Symbol,
        AF = $F,
        RF = function() {
            return typeof Ty != "function" || typeof Symbol != "function" || typeof Ty("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : AF()
        },
        NF = "Function.prototype.bind called on incompatible ",
        bf = Array.prototype.slice,
        LF = Object.prototype.toString,
        kF = "[object Function]",
        PF = function(t) {
            var r = this;
            if (typeof r != "function" || LF.call(r) !== kF) throw new TypeError(NF + r);
            for (var n = bf.call(arguments, 1), s, o = function() {
                    if (this instanceof s) {
                        var m = r.apply(this, n.concat(bf.call(arguments)));
                        return Object(m) === m ? m : this
                    } else return r.apply(t, n.concat(bf.call(arguments)))
                }, c = Math.max(0, r.length - n.length), u = [], f = 0; f < c; f++) u.push("$" + f);
            if (s = Function("binder", "return function (" + u.join(",") + "){ return binder.apply(this,arguments); }")(o), r.prototype) {
                var h = function() {};
                h.prototype = r.prototype, s.prototype = new h, h.prototype = null
            }
            return s
        },
        xF = PF,
        Kh = Function.prototype.bind || xF,
        DF = Kh,
        MF = DF.call(Function.call, Object.prototype.hasOwnProperty),
        tt, Ys = SyntaxError,
        ST = Function,
        Bs = TypeError,
        Ef = function(e) {
            try {
                return ST('"use strict"; return (' + e + ").constructor;")()
            } catch {}
        },
        rs = Object.getOwnPropertyDescriptor;
    if (rs) try {
        rs({}, "")
    } catch {
        rs = null
    }
    var Tf = function() {
            throw new Bs
        },
        UF = rs ? function() {
            try {
                return arguments.callee, Tf
            } catch {
                try {
                    return rs(arguments, "callee").get
                } catch {
                    return Tf
                }
            }
        }() : Tf,
        ws = RF(),
        si = Object.getPrototypeOf || function(e) {
            return e.__proto__
        },
        Rs = {},
        FF = typeof Uint8Array > "u" ? tt : si(Uint8Array),
        js = {
            "%AggregateError%": typeof AggregateError > "u" ? tt : AggregateError,
            "%Array%": Array,
            "%ArrayBuffer%": typeof ArrayBuffer > "u" ? tt : ArrayBuffer,
            "%ArrayIteratorPrototype%": ws ? si([][Symbol.iterator]()) : tt,
            "%AsyncFromSyncIteratorPrototype%": tt,
            "%AsyncFunction%": Rs,
            "%AsyncGenerator%": Rs,
            "%AsyncGeneratorFunction%": Rs,
            "%AsyncIteratorPrototype%": Rs,
            "%Atomics%": typeof Atomics > "u" ? tt : Atomics,
            "%BigInt%": typeof BigInt > "u" ? tt : BigInt,
            "%Boolean%": Boolean,
            "%DataView%": typeof DataView > "u" ? tt : DataView,
            "%Date%": Date,
            "%decodeURI%": decodeURI,
            "%decodeURIComponent%": decodeURIComponent,
            "%encodeURI%": encodeURI,
            "%encodeURIComponent%": encodeURIComponent,
            "%Error%": Error,
            "%eval%": eval,
            "%EvalError%": EvalError,
            "%Float32Array%": typeof Float32Array > "u" ? tt : Float32Array,
            "%Float64Array%": typeof Float64Array > "u" ? tt : Float64Array,
            "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? tt : FinalizationRegistry,
            "%Function%": ST,
            "%GeneratorFunction%": Rs,
            "%Int8Array%": typeof Int8Array > "u" ? tt : Int8Array,
            "%Int16Array%": typeof Int16Array > "u" ? tt : Int16Array,
            "%Int32Array%": typeof Int32Array > "u" ? tt : Int32Array,
            "%isFinite%": isFinite,
            "%isNaN%": isNaN,
            "%IteratorPrototype%": ws ? si(si([][Symbol.iterator]())) : tt,
            "%JSON%": typeof JSON == "object" ? JSON : tt,
            "%Map%": typeof Map > "u" ? tt : Map,
            "%MapIteratorPrototype%": typeof Map > "u" || !ws ? tt : si(new Map()[Symbol.iterator]()),
            "%Math%": Math,
            "%Number%": Number,
            "%Object%": Object,
            "%parseFloat%": parseFloat,
            "%parseInt%": parseInt,
            "%Promise%": typeof Promise > "u" ? tt : Promise,
            "%Proxy%": typeof Proxy > "u" ? tt : Proxy,
            "%RangeError%": RangeError,
            "%ReferenceError%": ReferenceError,
            "%Reflect%": typeof Reflect > "u" ? tt : Reflect,
            "%RegExp%": RegExp,
            "%Set%": typeof Set > "u" ? tt : Set,
            "%SetIteratorPrototype%": typeof Set > "u" || !ws ? tt : si(new Set()[Symbol.iterator]()),
            "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? tt : SharedArrayBuffer,
            "%String%": String,
            "%StringIteratorPrototype%": ws ? si("" [Symbol.iterator]()) : tt,
            "%Symbol%": ws ? Symbol : tt,
            "%SyntaxError%": Ys,
            "%ThrowTypeError%": UF,
            "%TypedArray%": FF,
            "%TypeError%": Bs,
            "%Uint8Array%": typeof Uint8Array > "u" ? tt : Uint8Array,
            "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? tt : Uint8ClampedArray,
            "%Uint16Array%": typeof Uint16Array > "u" ? tt : Uint16Array,
            "%Uint32Array%": typeof Uint32Array > "u" ? tt : Uint32Array,
            "%URIError%": URIError,
            "%WeakMap%": typeof WeakMap > "u" ? tt : WeakMap,
            "%WeakRef%": typeof WeakRef > "u" ? tt : WeakRef,
            "%WeakSet%": typeof WeakSet > "u" ? tt : WeakSet
        },
        BF = function e(t) {
            var r;
            if (t === "%AsyncFunction%") r = Ef("async function () {}");
            else if (t === "%GeneratorFunction%") r = Ef("function* () {}");
            else if (t === "%AsyncGeneratorFunction%") r = Ef("async function* () {}");
            else if (t === "%AsyncGenerator%") {
                var n = e("%AsyncGeneratorFunction%");
                n && (r = n.prototype)
            } else if (t === "%AsyncIteratorPrototype%") {
                var s = e("%AsyncGenerator%");
                s && (r = si(s.prototype))
            }
            return js[t] = r, r
        },
        Sy = {
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
        fo = Kh,
        Yc = MF,
        jF = fo.call(Function.call, Array.prototype.concat),
        GF = fo.call(Function.apply, Array.prototype.splice),
        wy = fo.call(Function.call, String.prototype.replace),
        zc = fo.call(Function.call, String.prototype.slice),
        WF = fo.call(Function.call, RegExp.prototype.exec),
        KF = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
        HF = /\\(\\)?/g,
        VF = function(t) {
            var r = zc(t, 0, 1),
                n = zc(t, -1);
            if (r === "%" && n !== "%") throw new Ys("invalid intrinsic syntax, expected closing `%`");
            if (n === "%" && r !== "%") throw new Ys("invalid intrinsic syntax, expected opening `%`");
            var s = [];
            return wy(t, KF, function(o, c, u, f) {
                s[s.length] = u ? wy(f, HF, "$1") : c || o
            }), s
        },
        qF = function(t, r) {
            var n = t,
                s;
            if (Yc(Sy, n) && (s = Sy[n], n = "%" + s[0] + "%"), Yc(js, n)) {
                var o = js[n];
                if (o === Rs && (o = BF(n)), typeof o > "u" && !r) throw new Bs("intrinsic " + t + " exists, but is not available. Please file an issue!");
                return {
                    alias: s,
                    name: n,
                    value: o
                }
            }
            throw new Ys("intrinsic " + t + " does not exist!")
        },
        Hh = function(t, r) {
            if (typeof t != "string" || t.length === 0) throw new Bs("intrinsic name must be a non-empty string");
            if (arguments.length > 1 && typeof r != "boolean") throw new Bs('"allowMissing" argument must be a boolean');
            if (WF(/^%?[^%]*%?$/g, t) === null) throw new Ys("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
            var n = VF(t),
                s = n.length > 0 ? n[0] : "",
                o = qF("%" + s + "%", r),
                c = o.name,
                u = o.value,
                f = !1,
                h = o.alias;
            h && (s = h[0], GF(n, jF([0, 1], h)));
            for (var m = 1, y = !0; m < n.length; m += 1) {
                var E = n[m],
                    I = zc(E, 0, 1),
                    k = zc(E, -1);
                if ((I === '"' || I === "'" || I === "`" || k === '"' || k === "'" || k === "`") && I !== k) throw new Ys("property names with quotes must have matching quotes");
                if ((E === "constructor" || !y) && (f = !0), s += "." + E, c = "%" + s + "%", Yc(js, c)) u = js[c];
                else if (u != null) {
                    if (!(E in u)) {
                        if (!r) throw new Bs("base intrinsic for " + t + " exists, but the property is not available.");
                        return
                    }
                    if (rs && m + 1 >= n.length) {
                        var M = rs(u, E);
                        y = !!M, y && "get" in M && !("originalValue" in M.get) ? u = M.get : u = u[E]
                    } else y = Yc(u, E), u = u[E];
                    y && !f && (js[c] = u)
                }
            }
            return u
        },
        wT = {
            exports: {}
        };
    (function(e) {
        var t = Kh,
            r = Hh,
            n = r("%Function.prototype.apply%"),
            s = r("%Function.prototype.call%"),
            o = r("%Reflect.apply%", !0) || t.call(s, n),
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
        e.exports = function(y) {
            var E = o(t, s, arguments);
            if (c && u) {
                var I = c(E, "length");
                I.configurable && u(E, "length", {
                    value: 1 + f(0, y.length - (arguments.length - 1))
                })
            }
            return E
        };
        var h = function() {
            return o(t, n, arguments)
        };
        u ? u(e.exports, "apply", {
            value: h
        }) : e.exports.apply = h
    })(wT);
    var OT = Hh,
        IT = wT.exports,
        YF = IT(OT("String.prototype.indexOf")),
        zF = function(t, r) {
            var n = OT(t, !!r);
            return typeof n == "function" && YF(t, ".prototype.") > -1 ? IT(n) : n
        };
    const XF = {},
        JF = Object.freeze(Object.defineProperty({
            __proto__: null,
            default: XF
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        ZF = rP(JF);
    var Vh = typeof Map == "function" && Map.prototype,
        Sf = Object.getOwnPropertyDescriptor && Vh ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null,
        Xc = Vh && Sf && typeof Sf.get == "function" ? Sf.get : null,
        QF = Vh && Map.prototype.forEach,
        qh = typeof Set == "function" && Set.prototype,
        wf = Object.getOwnPropertyDescriptor && qh ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null,
        Jc = qh && wf && typeof wf.get == "function" ? wf.get : null,
        eB = qh && Set.prototype.forEach,
        tB = typeof WeakMap == "function" && WeakMap.prototype,
        ja = tB ? WeakMap.prototype.has : null,
        rB = typeof WeakSet == "function" && WeakSet.prototype,
        Ga = rB ? WeakSet.prototype.has : null,
        nB = typeof WeakRef == "function" && WeakRef.prototype,
        Oy = nB ? WeakRef.prototype.deref : null,
        iB = Boolean.prototype.valueOf,
        sB = Object.prototype.toString,
        aB = Function.prototype.toString,
        oB = String.prototype.match,
        Yh = String.prototype.slice,
        ci = String.prototype.replace,
        cB = String.prototype.toUpperCase,
        Iy = String.prototype.toLowerCase,
        CT = RegExp.prototype.test,
        Cy = Array.prototype.concat,
        wn = Array.prototype.join,
        lB = Array.prototype.slice,
        $y = Math.floor,
        Od = typeof BigInt == "function" ? BigInt.prototype.valueOf : null,
        Of = Object.getOwnPropertySymbols,
        Id = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null,
        zs = typeof Symbol == "function" && typeof Symbol.iterator == "object",
        ur = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === zs ? "object" : "symbol") ? Symbol.toStringTag : null,
        $T = Object.prototype.propertyIsEnumerable,
        Ay = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(e) {
            return e.__proto__
        } : null);

    function Ry(e, t) {
        if (e === 1 / 0 || e === -1 / 0 || e !== e || e && e > -1e3 && e < 1e3 || CT.call(/e/, t)) return t;
        var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
        if (typeof e == "number") {
            var n = e < 0 ? -$y(-e) : $y(e);
            if (n !== e) {
                var s = String(n),
                    o = Yh.call(t, s.length + 1);
                return ci.call(s, r, "$&_") + "." + ci.call(ci.call(o, /([0-9]{3})/g, "$&_"), /_$/, "")
            }
        }
        return ci.call(t, r, "$&_")
    }
    var Cd = ZF,
        Ny = Cd.custom,
        Ly = RT(Ny) ? Ny : null,
        uB = function e(t, r, n, s) {
            var o = r || {};
            if (ai(o, "quoteStyle") && o.quoteStyle !== "single" && o.quoteStyle !== "double") throw new TypeError('option "quoteStyle" must be "single" or "double"');
            if (ai(o, "maxStringLength") && (typeof o.maxStringLength == "number" ? o.maxStringLength < 0 && o.maxStringLength !== 1 / 0 : o.maxStringLength !== null)) throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
            var c = ai(o, "customInspect") ? o.customInspect : !0;
            if (typeof c != "boolean" && c !== "symbol") throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
            if (ai(o, "indent") && o.indent !== null && o.indent !== "	" && !(parseInt(o.indent, 10) === o.indent && o.indent > 0)) throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
            if (ai(o, "numericSeparator") && typeof o.numericSeparator != "boolean") throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
            var u = o.numericSeparator;
            if (typeof t > "u") return "undefined";
            if (t === null) return "null";
            if (typeof t == "boolean") return t ? "true" : "false";
            if (typeof t == "string") return LT(t, o);
            if (typeof t == "number") {
                if (t === 0) return 1 / 0 / t > 0 ? "0" : "-0";
                var f = String(t);
                return u ? Ry(t, f) : f
            }
            if (typeof t == "bigint") {
                var h = String(t) + "n";
                return u ? Ry(t, h) : h
            }
            var m = typeof o.depth > "u" ? 5 : o.depth;
            if (typeof n > "u" && (n = 0), n >= m && m > 0 && typeof t == "object") return $d(t) ? "[Array]" : "[Object]";
            var y = $B(o, n);
            if (typeof s > "u") s = [];
            else if (NT(s, t) >= 0) return "[Circular]";

            function E(Ie, U, ie) {
                if (U && (s = lB.call(s), s.push(U)), ie) {
                    var de = {
                        depth: o.depth
                    };
                    return ai(o, "quoteStyle") && (de.quoteStyle = o.quoteStyle), e(Ie, de, n + 1, s)
                }
                return e(Ie, o, n + 1, s)
            }
            if (typeof t == "function" && !ky(t)) {
                var I = _B(t),
                    k = gc(t, E);
                return "[Function" + (I ? ": " + I : " (anonymous)") + "]" + (k.length > 0 ? " { " + wn.call(k, ", ") + " }" : "")
            }
            if (RT(t)) {
                var M = zs ? ci.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : Id.call(t);
                return typeof t == "object" && !zs ? Aa(M) : M
            }
            if (OB(t)) {
                for (var j = "<" + Iy.call(String(t.nodeName)), C = t.attributes || [], H = 0; H < C.length; H++) j += " " + C[H].name + "=" + AT(fB(C[H].value), "double", o);
                return j += ">", t.childNodes && t.childNodes.length && (j += "..."), j += "</" + Iy.call(String(t.nodeName)) + ">", j
            }
            if ($d(t)) {
                if (t.length === 0) return "[]";
                var X = gc(t, E);
                return y && !CB(X) ? "[" + Ad(X, y) + "]" : "[ " + wn.call(X, ", ") + " ]"
            }
            if (hB(t)) {
                var W = gc(t, E);
                return !("cause" in Error.prototype) && "cause" in t && !$T.call(t, "cause") ? "{ [" + String(t) + "] " + wn.call(Cy.call("[cause]: " + E(t.cause), W), ", ") + " }" : W.length === 0 ? "[" + String(t) + "]" : "{ [" + String(t) + "] " + wn.call(W, ", ") + " }"
            }
            if (typeof t == "object" && c) {
                if (Ly && typeof t[Ly] == "function" && Cd) return Cd(t, {
                    depth: m - n
                });
                if (c !== "symbol" && typeof t.inspect == "function") return t.inspect()
            }
            if (bB(t)) {
                var G = [];
                return QF.call(t, function(Ie, U) {
                    G.push(E(U, t, !0) + " => " + E(Ie, t))
                }), Py("Map", Xc.call(t), G, y)
            }
            if (SB(t)) {
                var Z = [];
                return eB.call(t, function(Ie) {
                    Z.push(E(Ie, t))
                }), Py("Set", Jc.call(t), Z, y)
            }
            if (EB(t)) return If("WeakMap");
            if (wB(t)) return If("WeakSet");
            if (TB(t)) return If("WeakRef");
            if (gB(t)) return Aa(E(Number(t)));
            if (vB(t)) return Aa(E(Od.call(t)));
            if (mB(t)) return Aa(iB.call(t));
            if (pB(t)) return Aa(E(String(t)));
            if (!dB(t) && !ky(t)) {
                var oe = gc(t, E),
                    ce = Ay ? Ay(t) === Object.prototype : t instanceof Object || t.constructor === Object,
                    ue = t instanceof Object ? "" : "null prototype",
                    $e = !ce && ur && Object(t) === t && ur in t ? Yh.call(bi(t), 8, -1) : ue ? "Object" : "",
                    Ce = ce || typeof t.constructor != "function" ? "" : t.constructor.name ? t.constructor.name + " " : "",
                    fe = Ce + ($e || ue ? "[" + wn.call(Cy.call([], $e || [], ue || []), ": ") + "] " : "");
                return oe.length === 0 ? fe + "{}" : y ? fe + "{" + Ad(oe, y) + "}" : fe + "{ " + wn.call(oe, ", ") + " }"
            }
            return String(t)
        };

    function AT(e, t, r) {
        var n = (r.quoteStyle || t) === "double" ? '"' : "'";
        return n + e + n
    }

    function fB(e) {
        return ci.call(String(e), /"/g, "&quot;")
    }

    function $d(e) {
        return bi(e) === "[object Array]" && (!ur || !(typeof e == "object" && ur in e))
    }

    function dB(e) {
        return bi(e) === "[object Date]" && (!ur || !(typeof e == "object" && ur in e))
    }

    function ky(e) {
        return bi(e) === "[object RegExp]" && (!ur || !(typeof e == "object" && ur in e))
    }

    function hB(e) {
        return bi(e) === "[object Error]" && (!ur || !(typeof e == "object" && ur in e))
    }

    function pB(e) {
        return bi(e) === "[object String]" && (!ur || !(typeof e == "object" && ur in e))
    }

    function gB(e) {
        return bi(e) === "[object Number]" && (!ur || !(typeof e == "object" && ur in e))
    }

    function mB(e) {
        return bi(e) === "[object Boolean]" && (!ur || !(typeof e == "object" && ur in e))
    }

    function RT(e) {
        if (zs) return e && typeof e == "object" && e instanceof Symbol;
        if (typeof e == "symbol") return !0;
        if (!e || typeof e != "object" || !Id) return !1;
        try {
            return Id.call(e), !0
        } catch {}
        return !1
    }

    function vB(e) {
        if (!e || typeof e != "object" || !Od) return !1;
        try {
            return Od.call(e), !0
        } catch {}
        return !1
    }
    var yB = Object.prototype.hasOwnProperty || function(e) {
        return e in this
    };

    function ai(e, t) {
        return yB.call(e, t)
    }

    function bi(e) {
        return sB.call(e)
    }

    function _B(e) {
        if (e.name) return e.name;
        var t = oB.call(aB.call(e), /^function\s*([\w$]+)/);
        return t ? t[1] : null
    }

    function NT(e, t) {
        if (e.indexOf) return e.indexOf(t);
        for (var r = 0, n = e.length; r < n; r++)
            if (e[r] === t) return r;
        return -1
    }

    function bB(e) {
        if (!Xc || !e || typeof e != "object") return !1;
        try {
            Xc.call(e);
            try {
                Jc.call(e)
            } catch {
                return !0
            }
            return e instanceof Map
        } catch {}
        return !1
    }

    function EB(e) {
        if (!ja || !e || typeof e != "object") return !1;
        try {
            ja.call(e, ja);
            try {
                Ga.call(e, Ga)
            } catch {
                return !0
            }
            return e instanceof WeakMap
        } catch {}
        return !1
    }

    function TB(e) {
        if (!Oy || !e || typeof e != "object") return !1;
        try {
            return Oy.call(e), !0
        } catch {}
        return !1
    }

    function SB(e) {
        if (!Jc || !e || typeof e != "object") return !1;
        try {
            Jc.call(e);
            try {
                Xc.call(e)
            } catch {
                return !0
            }
            return e instanceof Set
        } catch {}
        return !1
    }

    function wB(e) {
        if (!Ga || !e || typeof e != "object") return !1;
        try {
            Ga.call(e, Ga);
            try {
                ja.call(e, ja)
            } catch {
                return !0
            }
            return e instanceof WeakSet
        } catch {}
        return !1
    }

    function OB(e) {
        return !e || typeof e != "object" ? !1 : typeof HTMLElement < "u" && e instanceof HTMLElement ? !0 : typeof e.nodeName == "string" && typeof e.getAttribute == "function"
    }

    function LT(e, t) {
        if (e.length > t.maxStringLength) {
            var r = e.length - t.maxStringLength,
                n = "... " + r + " more character" + (r > 1 ? "s" : "");
            return LT(Yh.call(e, 0, t.maxStringLength), t) + n
        }
        var s = ci.call(ci.call(e, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, IB);
        return AT(s, "single", t)
    }

    function IB(e) {
        var t = e.charCodeAt(0),
            r = {
                8: "b",
                9: "t",
                10: "n",
                12: "f",
                13: "r"
            } [t];
        return r ? "\\" + r : "\\x" + (t < 16 ? "0" : "") + cB.call(t.toString(16))
    }

    function Aa(e) {
        return "Object(" + e + ")"
    }

    function If(e) {
        return e + " { ? }"
    }

    function Py(e, t, r, n) {
        var s = n ? Ad(r, n) : wn.call(r, ", ");
        return e + " (" + t + ") {" + s + "}"
    }

    function CB(e) {
        for (var t = 0; t < e.length; t++)
            if (NT(e[t], `
`) >= 0) return !1;
        return !0
    }

    function $B(e, t) {
        var r;
        if (e.indent === "	") r = "	";
        else if (typeof e.indent == "number" && e.indent > 0) r = wn.call(Array(e.indent + 1), " ");
        else return null;
        return {
            base: r,
            prev: wn.call(Array(t + 1), r)
        }
    }

    function Ad(e, t) {
        if (e.length === 0) return "";
        var r = `
` + t.prev + t.base;
        return r + wn.call(e, "," + r) + `
` + t.prev
    }

    function gc(e, t) {
        var r = $d(e),
            n = [];
        if (r) {
            n.length = e.length;
            for (var s = 0; s < e.length; s++) n[s] = ai(e, s) ? t(e[s], e) : ""
        }
        var o = typeof Of == "function" ? Of(e) : [],
            c;
        if (zs) {
            c = {};
            for (var u = 0; u < o.length; u++) c["$" + o[u]] = o[u]
        }
        for (var f in e) !ai(e, f) || r && String(Number(f)) === f && f < e.length || zs && c["$" + f] instanceof Symbol || (CT.call(/[^\w$]/, f) ? n.push(t(f, e) + ": " + t(e[f], e)) : n.push(f + ": " + t(e[f], e)));
        if (typeof Of == "function")
            for (var h = 0; h < o.length; h++) $T.call(e, o[h]) && n.push("[" + t(o[h]) + "]: " + t(e[o[h]], e));
        return n
    }
    var zh = Hh,
        oa = zF,
        AB = uB,
        RB = zh("%TypeError%"),
        mc = zh("%WeakMap%", !0),
        vc = zh("%Map%", !0),
        NB = oa("WeakMap.prototype.get", !0),
        LB = oa("WeakMap.prototype.set", !0),
        kB = oa("WeakMap.prototype.has", !0),
        PB = oa("Map.prototype.get", !0),
        xB = oa("Map.prototype.set", !0),
        DB = oa("Map.prototype.has", !0),
        Xh = function(e, t) {
            for (var r = e, n;
                (n = r.next) !== null; r = n)
                if (n.key === t) return r.next = n.next, n.next = e.next, e.next = n, n
        },
        MB = function(e, t) {
            var r = Xh(e, t);
            return r && r.value
        },
        UB = function(e, t, r) {
            var n = Xh(e, t);
            n ? n.value = r : e.next = {
                key: t,
                next: e.next,
                value: r
            }
        },
        FB = function(e, t) {
            return !!Xh(e, t)
        },
        BB = function() {
            var t, r, n, s = {
                assert: function(o) {
                    if (!s.has(o)) throw new RB("Side channel does not contain " + AB(o))
                },
                get: function(o) {
                    if (mc && o && (typeof o == "object" || typeof o == "function")) {
                        if (t) return NB(t, o)
                    } else if (vc) {
                        if (r) return PB(r, o)
                    } else if (n) return MB(n, o)
                },
                has: function(o) {
                    if (mc && o && (typeof o == "object" || typeof o == "function")) {
                        if (t) return kB(t, o)
                    } else if (vc) {
                        if (r) return DB(r, o)
                    } else if (n) return FB(n, o);
                    return !1
                },
                set: function(o, c) {
                    mc && o && (typeof o == "object" || typeof o == "function") ? (t || (t = new mc), LB(t, o, c)) : vc ? (r || (r = new vc), xB(r, o, c)) : (n || (n = {
                        key: {},
                        next: null
                    }), UB(n, o, c))
                }
            };
            return s
        },
        jB = String.prototype.replace,
        GB = /%20/g,
        Cf = {
            RFC1738: "RFC1738",
            RFC3986: "RFC3986"
        },
        Jh = {
            default: Cf.RFC3986,
            formatters: {
                RFC1738: function(e) {
                    return jB.call(e, GB, "+")
                },
                RFC3986: function(e) {
                    return String(e)
                }
            },
            RFC1738: Cf.RFC1738,
            RFC3986: Cf.RFC3986
        },
        WB = Jh,
        $f = Object.prototype.hasOwnProperty,
        zi = Array.isArray,
        _n = function() {
            for (var e = [], t = 0; t < 256; ++t) e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
            return e
        }(),
        KB = function(t) {
            for (; t.length > 1;) {
                var r = t.pop(),
                    n = r.obj[r.prop];
                if (zi(n)) {
                    for (var s = [], o = 0; o < n.length; ++o) typeof n[o] < "u" && s.push(n[o]);
                    r.obj[r.prop] = s
                }
            }
        },
        kT = function(t, r) {
            for (var n = r && r.plainObjects ? Object.create(null) : {}, s = 0; s < t.length; ++s) typeof t[s] < "u" && (n[s] = t[s]);
            return n
        },
        HB = function e(t, r, n) {
            if (!r) return t;
            if (typeof r != "object") {
                if (zi(t)) t.push(r);
                else if (t && typeof t == "object")(n && (n.plainObjects || n.allowPrototypes) || !$f.call(Object.prototype, r)) && (t[r] = !0);
                else return [t, r];
                return t
            }
            if (!t || typeof t != "object") return [t].concat(r);
            var s = t;
            return zi(t) && !zi(r) && (s = kT(t, n)), zi(t) && zi(r) ? (r.forEach(function(o, c) {
                if ($f.call(t, c)) {
                    var u = t[c];
                    u && typeof u == "object" && o && typeof o == "object" ? t[c] = e(u, o, n) : t.push(o)
                } else t[c] = o
            }), t) : Object.keys(r).reduce(function(o, c) {
                var u = r[c];
                return $f.call(o, c) ? o[c] = e(o[c], u, n) : o[c] = u, o
            }, s)
        },
        VB = function(t, r) {
            return Object.keys(r).reduce(function(n, s) {
                return n[s] = r[s], n
            }, t)
        },
        qB = function(e, t, r) {
            var n = e.replace(/\+/g, " ");
            if (r === "iso-8859-1") return n.replace(/%[0-9a-f]{2}/gi, unescape);
            try {
                return decodeURIComponent(n)
            } catch {
                return n
            }
        },
        YB = function(t, r, n, s, o) {
            if (t.length === 0) return t;
            var c = t;
            if (typeof t == "symbol" ? c = Symbol.prototype.toString.call(t) : typeof t != "string" && (c = String(t)), n === "iso-8859-1") return escape(c).replace(/%u[0-9a-f]{4}/gi, function(m) {
                return "%26%23" + parseInt(m.slice(2), 16) + "%3B"
            });
            for (var u = "", f = 0; f < c.length; ++f) {
                var h = c.charCodeAt(f);
                if (h === 45 || h === 46 || h === 95 || h === 126 || h >= 48 && h <= 57 || h >= 65 && h <= 90 || h >= 97 && h <= 122 || o === WB.RFC1738 && (h === 40 || h === 41)) {
                    u += c.charAt(f);
                    continue
                }
                if (h < 128) {
                    u = u + _n[h];
                    continue
                }
                if (h < 2048) {
                    u = u + (_n[192 | h >> 6] + _n[128 | h & 63]);
                    continue
                }
                if (h < 55296 || h >= 57344) {
                    u = u + (_n[224 | h >> 12] + _n[128 | h >> 6 & 63] + _n[128 | h & 63]);
                    continue
                }
                f += 1, h = 65536 + ((h & 1023) << 10 | c.charCodeAt(f) & 1023), u += _n[240 | h >> 18] + _n[128 | h >> 12 & 63] + _n[128 | h >> 6 & 63] + _n[128 | h & 63]
            }
            return u
        },
        zB = function(t) {
            for (var r = [{
                    obj: {
                        o: t
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
            return KB(r), t
        },
        XB = function(t) {
            return Object.prototype.toString.call(t) === "[object RegExp]"
        },
        JB = function(t) {
            return !t || typeof t != "object" ? !1 : !!(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t))
        },
        ZB = function(t, r) {
            return [].concat(t, r)
        },
        QB = function(t, r) {
            if (zi(t)) {
                for (var n = [], s = 0; s < t.length; s += 1) n.push(r(t[s]));
                return n
            }
            return r(t)
        },
        PT = {
            arrayToObject: kT,
            assign: VB,
            combine: ZB,
            compact: zB,
            decode: qB,
            encode: YB,
            isBuffer: JB,
            isRegExp: XB,
            maybeMap: QB,
            merge: HB
        },
        xT = BB,
        Rd = PT,
        Wa = Jh,
        e3 = Object.prototype.hasOwnProperty,
        xy = {
            brackets: function(t) {
                return t + "[]"
            },
            comma: "comma",
            indices: function(t, r) {
                return t + "[" + r + "]"
            },
            repeat: function(t) {
                return t
            }
        },
        Mn = Array.isArray,
        t3 = String.prototype.split,
        r3 = Array.prototype.push,
        DT = function(e, t) {
            r3.apply(e, Mn(t) ? t : [t])
        },
        n3 = Date.prototype.toISOString,
        Dy = Wa.default,
        er = {
            addQueryPrefix: !1,
            allowDots: !1,
            charset: "utf-8",
            charsetSentinel: !1,
            delimiter: "&",
            encode: !0,
            encoder: Rd.encode,
            encodeValuesOnly: !1,
            format: Dy,
            formatter: Wa.formatters[Dy],
            indices: !1,
            serializeDate: function(t) {
                return n3.call(t)
            },
            skipNulls: !1,
            strictNullHandling: !1
        },
        i3 = function(t) {
            return typeof t == "string" || typeof t == "number" || typeof t == "boolean" || typeof t == "symbol" || typeof t == "bigint"
        },
        Af = {},
        s3 = function e(t, r, n, s, o, c, u, f, h, m, y, E, I, k, M, j) {
            for (var C = t, H = j, X = 0, W = !1;
                (H = H.get(Af)) !== void 0 && !W;) {
                var G = H.get(t);
                if (X += 1, typeof G < "u") {
                    if (G === X) throw new RangeError("Cyclic object value");
                    W = !0
                }
                typeof H.get(Af) > "u" && (X = 0)
            }
            if (typeof f == "function" ? C = f(r, C) : C instanceof Date ? C = y(C) : n === "comma" && Mn(C) && (C = Rd.maybeMap(C, function(Se) {
                    return Se instanceof Date ? y(Se) : Se
                })), C === null) {
                if (o) return u && !k ? u(r, er.encoder, M, "key", E) : r;
                C = ""
            }
            if (i3(C) || Rd.isBuffer(C)) {
                if (u) {
                    var Z = k ? r : u(r, er.encoder, M, "key", E);
                    if (n === "comma" && k) {
                        for (var oe = t3.call(String(C), ","), ce = "", ue = 0; ue < oe.length; ++ue) ce += (ue === 0 ? "" : ",") + I(u(oe[ue], er.encoder, M, "value", E));
                        return [I(Z) + (s && Mn(C) && oe.length === 1 ? "[]" : "") + "=" + ce]
                    }
                    return [I(Z) + "=" + I(u(C, er.encoder, M, "value", E))]
                }
                return [I(r) + "=" + I(String(C))]
            }
            var $e = [];
            if (typeof C > "u") return $e;
            var Ce;
            if (n === "comma" && Mn(C)) Ce = [{
                value: C.length > 0 ? C.join(",") || null : void 0
            }];
            else if (Mn(f)) Ce = f;
            else {
                var fe = Object.keys(C);
                Ce = h ? fe.sort(h) : fe
            }
            for (var Ie = s && Mn(C) && C.length === 1 ? r + "[]" : r, U = 0; U < Ce.length; ++U) {
                var ie = Ce[U],
                    de = typeof ie == "object" && typeof ie.value < "u" ? ie.value : C[ie];
                if (!(c && de === null)) {
                    var be = Mn(C) ? typeof n == "function" ? n(Ie, ie) : Ie : Ie + (m ? "." + ie : "[" + ie + "]");
                    j.set(t, X);
                    var ve = xT();
                    ve.set(Af, j), DT($e, e(de, be, n, s, o, c, u, f, h, m, y, E, I, k, M, ve))
                }
            }
            return $e
        },
        a3 = function(t) {
            if (!t) return er;
            if (t.encoder !== null && typeof t.encoder < "u" && typeof t.encoder != "function") throw new TypeError("Encoder has to be a function.");
            var r = t.charset || er.charset;
            if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
            var n = Wa.default;
            if (typeof t.format < "u") {
                if (!e3.call(Wa.formatters, t.format)) throw new TypeError("Unknown format option provided.");
                n = t.format
            }
            var s = Wa.formatters[n],
                o = er.filter;
            return (typeof t.filter == "function" || Mn(t.filter)) && (o = t.filter), {
                addQueryPrefix: typeof t.addQueryPrefix == "boolean" ? t.addQueryPrefix : er.addQueryPrefix,
                allowDots: typeof t.allowDots > "u" ? er.allowDots : !!t.allowDots,
                charset: r,
                charsetSentinel: typeof t.charsetSentinel == "boolean" ? t.charsetSentinel : er.charsetSentinel,
                delimiter: typeof t.delimiter > "u" ? er.delimiter : t.delimiter,
                encode: typeof t.encode == "boolean" ? t.encode : er.encode,
                encoder: typeof t.encoder == "function" ? t.encoder : er.encoder,
                encodeValuesOnly: typeof t.encodeValuesOnly == "boolean" ? t.encodeValuesOnly : er.encodeValuesOnly,
                filter: o,
                format: n,
                formatter: s,
                serializeDate: typeof t.serializeDate == "function" ? t.serializeDate : er.serializeDate,
                skipNulls: typeof t.skipNulls == "boolean" ? t.skipNulls : er.skipNulls,
                sort: typeof t.sort == "function" ? t.sort : null,
                strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : er.strictNullHandling
            }
        },
        o3 = function(e, t) {
            var r = e,
                n = a3(t),
                s, o;
            typeof n.filter == "function" ? (o = n.filter, r = o("", r)) : Mn(n.filter) && (o = n.filter, s = o);
            var c = [];
            if (typeof r != "object" || r === null) return "";
            var u;
            t && t.arrayFormat in xy ? u = t.arrayFormat : t && "indices" in t ? u = t.indices ? "indices" : "repeat" : u = "indices";
            var f = xy[u];
            if (t && "commaRoundTrip" in t && typeof t.commaRoundTrip != "boolean") throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
            var h = f === "comma" && t && t.commaRoundTrip;
            s || (s = Object.keys(r)), n.sort && s.sort(n.sort);
            for (var m = xT(), y = 0; y < s.length; ++y) {
                var E = s[y];
                n.skipNulls && r[E] === null || DT(c, s3(r[E], E, f, h, n.strictNullHandling, n.skipNulls, n.encode ? n.encoder : null, n.filter, n.sort, n.allowDots, n.serializeDate, n.format, n.formatter, n.encodeValuesOnly, n.charset, m))
            }
            var I = c.join(n.delimiter),
                k = n.addQueryPrefix === !0 ? "?" : "";
            return n.charsetSentinel && (n.charset === "iso-8859-1" ? k += "utf8=%26%2310003%3B&" : k += "utf8=%E2%9C%93&"), I.length > 0 ? k + I : ""
        },
        Xs = PT,
        Nd = Object.prototype.hasOwnProperty,
        c3 = Array.isArray,
        zt = {
            allowDots: !1,
            allowPrototypes: !1,
            allowSparse: !1,
            arrayLimit: 20,
            charset: "utf-8",
            charsetSentinel: !1,
            comma: !1,
            decoder: Xs.decode,
            delimiter: "&",
            depth: 5,
            ignoreQueryPrefix: !1,
            interpretNumericEntities: !1,
            parameterLimit: 1e3,
            parseArrays: !0,
            plainObjects: !1,
            strictNullHandling: !1
        },
        l3 = function(e) {
            return e.replace(/&#(\d+);/g, function(t, r) {
                return String.fromCharCode(parseInt(r, 10))
            })
        },
        MT = function(e, t) {
            return e && typeof e == "string" && t.comma && e.indexOf(",") > -1 ? e.split(",") : e
        },
        u3 = "utf8=%26%2310003%3B",
        f3 = "utf8=%E2%9C%93",
        d3 = function(t, r) {
            var n = {},
                s = r.ignoreQueryPrefix ? t.replace(/^\?/, "") : t,
                o = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit,
                c = s.split(r.delimiter, o),
                u = -1,
                f, h = r.charset;
            if (r.charsetSentinel)
                for (f = 0; f < c.length; ++f) c[f].indexOf("utf8=") === 0 && (c[f] === f3 ? h = "utf-8" : c[f] === u3 && (h = "iso-8859-1"), u = f, f = c.length);
            for (f = 0; f < c.length; ++f)
                if (f !== u) {
                    var m = c[f],
                        y = m.indexOf("]="),
                        E = y === -1 ? m.indexOf("=") : y + 1,
                        I, k;
                    E === -1 ? (I = r.decoder(m, zt.decoder, h, "key"), k = r.strictNullHandling ? null : "") : (I = r.decoder(m.slice(0, E), zt.decoder, h, "key"), k = Xs.maybeMap(MT(m.slice(E + 1), r), function(M) {
                        return r.decoder(M, zt.decoder, h, "value")
                    })), k && r.interpretNumericEntities && h === "iso-8859-1" && (k = l3(k)), m.indexOf("[]=") > -1 && (k = c3(k) ? [k] : k), Nd.call(n, I) ? n[I] = Xs.combine(n[I], k) : n[I] = k
                } return n
        },
        h3 = function(e, t, r, n) {
            for (var s = n ? t : MT(t, r), o = e.length - 1; o >= 0; --o) {
                var c, u = e[o];
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
        p3 = function(t, r, n, s) {
            if (!!t) {
                var o = n.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t,
                    c = /(\[[^[\]]*])/,
                    u = /(\[[^[\]]*])/g,
                    f = n.depth > 0 && c.exec(o),
                    h = f ? o.slice(0, f.index) : o,
                    m = [];
                if (h) {
                    if (!n.plainObjects && Nd.call(Object.prototype, h) && !n.allowPrototypes) return;
                    m.push(h)
                }
                for (var y = 0; n.depth > 0 && (f = u.exec(o)) !== null && y < n.depth;) {
                    if (y += 1, !n.plainObjects && Nd.call(Object.prototype, f[1].slice(1, -1)) && !n.allowPrototypes) return;
                    m.push(f[1])
                }
                return f && m.push("[" + o.slice(f.index) + "]"), h3(m, r, n, s)
            }
        },
        g3 = function(t) {
            if (!t) return zt;
            if (t.decoder !== null && t.decoder !== void 0 && typeof t.decoder != "function") throw new TypeError("Decoder has to be a function.");
            if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
            var r = typeof t.charset > "u" ? zt.charset : t.charset;
            return {
                allowDots: typeof t.allowDots > "u" ? zt.allowDots : !!t.allowDots,
                allowPrototypes: typeof t.allowPrototypes == "boolean" ? t.allowPrototypes : zt.allowPrototypes,
                allowSparse: typeof t.allowSparse == "boolean" ? t.allowSparse : zt.allowSparse,
                arrayLimit: typeof t.arrayLimit == "number" ? t.arrayLimit : zt.arrayLimit,
                charset: r,
                charsetSentinel: typeof t.charsetSentinel == "boolean" ? t.charsetSentinel : zt.charsetSentinel,
                comma: typeof t.comma == "boolean" ? t.comma : zt.comma,
                decoder: typeof t.decoder == "function" ? t.decoder : zt.decoder,
                delimiter: typeof t.delimiter == "string" || Xs.isRegExp(t.delimiter) ? t.delimiter : zt.delimiter,
                depth: typeof t.depth == "number" || t.depth === !1 ? +t.depth : zt.depth,
                ignoreQueryPrefix: t.ignoreQueryPrefix === !0,
                interpretNumericEntities: typeof t.interpretNumericEntities == "boolean" ? t.interpretNumericEntities : zt.interpretNumericEntities,
                parameterLimit: typeof t.parameterLimit == "number" ? t.parameterLimit : zt.parameterLimit,
                parseArrays: t.parseArrays !== !1,
                plainObjects: typeof t.plainObjects == "boolean" ? t.plainObjects : zt.plainObjects,
                strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : zt.strictNullHandling
            }
        },
        m3 = function(e, t) {
            var r = g3(t);
            if (e === "" || e === null || typeof e > "u") return r.plainObjects ? Object.create(null) : {};
            for (var n = typeof e == "string" ? d3(e, r) : e, s = r.plainObjects ? Object.create(null) : {}, o = Object.keys(n), c = 0; c < o.length; ++c) {
                var u = o[c],
                    f = p3(u, n[u], r, typeof e == "string");
                s = Xs.merge(s, f, r)
            }
            return r.allowSparse === !0 ? s : Xs.compact(s)
        },
        v3 = o3,
        y3 = m3,
        _3 = Jh,
        UT = {
            formats: _3,
            parse: y3,
            stringify: v3
        };
    class b3 {
        constructor(t) {
            this.code = t.code, this.token = t.token, this.host = t.host
        }
    }
    class E3 {
        constructor(t) {
            this.appId = t.appId, this.appTag = t.appTag, this.audienceEnabled = t.audienceEnabled, this.code = t.code, this.host = t.host, this.audienceHost = t.audienceHost, this.locked = t.locked, this.full = t.full, this.moderationEnabled = t.moderationEnabled, this.passwordRequired = t.passwordRequired, this.twitchLocked = t.twitchLocked, this.locale = t.locale, this.keepalive = t.keepalive, this.controllerBranch = t.controllerBranch
        }
    }
    class T3 {
        constructor(t) {
            this.connections = t.connections
        }
    }
    class S3 {
        constructor(t) {
            this.cause = t.cause
        }
        whenReceived(t) {
            t.disconnect()
        }
    }
    class w3 {}
    var Pl = {
        CreateRoomReply: b3,
        GetRoomReply: E3,
        GetAudienceReply: T3,
        RoomExit: S3,
        RoomLock: w3
    };
    const My = wd.exports,
        O3 = UT,
        {
            CreateRoomReply: I3,
            GetRoomReply: C3
        } = Pl;
    class $3 {
        constructor(t) {
            if (!t.host) throw new Error("unable to create ecast APIClient: no host provided");
            if (this.host = t.host, !t.scheme) throw new Error("unable to create ecast APIClient: no scheme provided");
            this.scheme = t.scheme
        }
        url(t, r) {
            if (r) {
                let n = O3.stringify(r);
                return `${this.scheme}://${this.host}/api/v2${t}?${n}`
            }
            return `${this.scheme}://${this.host}/api/v2${t}`
        }
        async createRoom(t) {
            let r = {
                userId: t.userId || "fart",
                appTag: t.appTag || "test"
            };
            t.password && (r.password = t.password), t.moderatorPassword && (r.moderatorPassword = t.moderatorPassword), t.twitchLocked && (r.twitchLocked = t.twitchLocked), t.locale && (r.locale = t.locale), t.keepalive && (r.keepalive = t.keepalive), t.controllerBranch && (r.controllerBranch = t.controllerBranch);
            let n = this.url("/rooms", r),
                c = await (await My(n, {
                    method: "POST"
                })).json();
            if (!c.ok) throw new Error(`failed to create room: ${c.error}`);
            let u = c.body;
            return new I3({
                code: u.code,
                token: u.token,
                host: u.host
            })
        }
        async getRoom(t) {
            let r = this.url(`/rooms/${t.code}`),
                s = await (await My(r)).json();
            if (!s.ok) throw new Error(`unable to get room with options ${JSON.stringify(t)}: ${s.error}`);
            let o = s.body;
            return new C3({
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
    var A3 = {
            APIClient: $3
        },
        Ns = null;
    typeof WebSocket < "u" ? Ns = WebSocket : typeof MozWebSocket < "u" ? Ns = MozWebSocket : typeof Dt < "u" ? Ns = Dt.WebSocket || Dt.MozWebSocket : typeof window < "u" ? Ns = window.WebSocket || window.MozWebSocket : typeof self < "u" && (Ns = self.WebSocket || self.MozWebSocket);
    var R3 = Ns,
        Zh = {
            exports: {}
        },
        Gs = typeof Reflect == "object" ? Reflect : null,
        Uy = Gs && typeof Gs.apply == "function" ? Gs.apply : function(t, r, n) {
            return Function.prototype.apply.call(t, r, n)
        },
        kc;
    Gs && typeof Gs.ownKeys == "function" ? kc = Gs.ownKeys : Object.getOwnPropertySymbols ? kc = function(t) {
        return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))
    } : kc = function(t) {
        return Object.getOwnPropertyNames(t)
    };

    function N3(e) {
        console && console.warn && console.warn(e)
    }
    var FT = Number.isNaN || function(t) {
        return t !== t
    };

    function pt() {
        pt.init.call(this)
    }
    Zh.exports = pt;
    Zh.exports.once = x3;
    pt.EventEmitter = pt;
    pt.prototype._events = void 0;
    pt.prototype._eventsCount = 0;
    pt.prototype._maxListeners = void 0;
    var Fy = 10;

    function xl(e) {
        if (typeof e != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e)
    }
    Object.defineProperty(pt, "defaultMaxListeners", {
        enumerable: !0,
        get: function() {
            return Fy
        },
        set: function(e) {
            if (typeof e != "number" || e < 0 || FT(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
            Fy = e
        }
    });
    pt.init = function() {
        (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
    };
    pt.prototype.setMaxListeners = function(t) {
        if (typeof t != "number" || t < 0 || FT(t)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
        return this._maxListeners = t, this
    };

    function BT(e) {
        return e._maxListeners === void 0 ? pt.defaultMaxListeners : e._maxListeners
    }
    pt.prototype.getMaxListeners = function() {
        return BT(this)
    };
    pt.prototype.emit = function(t) {
        for (var r = [], n = 1; n < arguments.length; n++) r.push(arguments[n]);
        var s = t === "error",
            o = this._events;
        if (o !== void 0) s = s && o.error === void 0;
        else if (!s) return !1;
        if (s) {
            var c;
            if (r.length > 0 && (c = r[0]), c instanceof Error) throw c;
            var u = new Error("Unhandled error." + (c ? " (" + c.message + ")" : ""));
            throw u.context = c, u
        }
        var f = o[t];
        if (f === void 0) return !1;
        if (typeof f == "function") Uy(f, this, r);
        else
            for (var h = f.length, m = HT(f, h), n = 0; n < h; ++n) Uy(m[n], this, r);
        return !0
    };

    function jT(e, t, r, n) {
        var s, o, c;
        if (xl(r), o = e._events, o === void 0 ? (o = e._events = Object.create(null), e._eventsCount = 0) : (o.newListener !== void 0 && (e.emit("newListener", t, r.listener ? r.listener : r), o = e._events), c = o[t]), c === void 0) c = o[t] = r, ++e._eventsCount;
        else if (typeof c == "function" ? c = o[t] = n ? [r, c] : [c, r] : n ? c.unshift(r) : c.push(r), s = BT(e), s > 0 && c.length > s && !c.warned) {
            c.warned = !0;
            var u = new Error("Possible EventEmitter memory leak detected. " + c.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
            u.name = "MaxListenersExceededWarning", u.emitter = e, u.type = t, u.count = c.length, N3(u)
        }
        return e
    }
    pt.prototype.addListener = function(t, r) {
        return jT(this, t, r, !1)
    };
    pt.prototype.on = pt.prototype.addListener;
    pt.prototype.prependListener = function(t, r) {
        return jT(this, t, r, !0)
    };

    function L3() {
        if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
    }

    function GT(e, t, r) {
        var n = {
                fired: !1,
                wrapFn: void 0,
                target: e,
                type: t,
                listener: r
            },
            s = L3.bind(n);
        return s.listener = r, n.wrapFn = s, s
    }
    pt.prototype.once = function(t, r) {
        return xl(r), this.on(t, GT(this, t, r)), this
    };
    pt.prototype.prependOnceListener = function(t, r) {
        return xl(r), this.prependListener(t, GT(this, t, r)), this
    };
    pt.prototype.removeListener = function(t, r) {
        var n, s, o, c, u;
        if (xl(r), s = this._events, s === void 0) return this;
        if (n = s[t], n === void 0) return this;
        if (n === r || n.listener === r) --this._eventsCount === 0 ? this._events = Object.create(null) : (delete s[t], s.removeListener && this.emit("removeListener", t, n.listener || r));
        else if (typeof n != "function") {
            for (o = -1, c = n.length - 1; c >= 0; c--)
                if (n[c] === r || n[c].listener === r) {
                    u = n[c].listener, o = c;
                    break
                } if (o < 0) return this;
            o === 0 ? n.shift() : k3(n, o), n.length === 1 && (s[t] = n[0]), s.removeListener !== void 0 && this.emit("removeListener", t, u || r)
        }
        return this
    };
    pt.prototype.off = pt.prototype.removeListener;
    pt.prototype.removeAllListeners = function(t) {
        var r, n, s;
        if (n = this._events, n === void 0) return this;
        if (n.removeListener === void 0) return arguments.length === 0 ? (this._events = Object.create(null), this._eventsCount = 0) : n[t] !== void 0 && (--this._eventsCount === 0 ? this._events = Object.create(null) : delete n[t]), this;
        if (arguments.length === 0) {
            var o = Object.keys(n),
                c;
            for (s = 0; s < o.length; ++s) c = o[s], c !== "removeListener" && this.removeAllListeners(c);
            return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
        }
        if (r = n[t], typeof r == "function") this.removeListener(t, r);
        else if (r !== void 0)
            for (s = r.length - 1; s >= 0; s--) this.removeListener(t, r[s]);
        return this
    };

    function WT(e, t, r) {
        var n = e._events;
        if (n === void 0) return [];
        var s = n[t];
        return s === void 0 ? [] : typeof s == "function" ? r ? [s.listener || s] : [s] : r ? P3(s) : HT(s, s.length)
    }
    pt.prototype.listeners = function(t) {
        return WT(this, t, !0)
    };
    pt.prototype.rawListeners = function(t) {
        return WT(this, t, !1)
    };
    pt.listenerCount = function(e, t) {
        return typeof e.listenerCount == "function" ? e.listenerCount(t) : KT.call(e, t)
    };
    pt.prototype.listenerCount = KT;

    function KT(e) {
        var t = this._events;
        if (t !== void 0) {
            var r = t[e];
            if (typeof r == "function") return 1;
            if (r !== void 0) return r.length
        }
        return 0
    }
    pt.prototype.eventNames = function() {
        return this._eventsCount > 0 ? kc(this._events) : []
    };

    function HT(e, t) {
        for (var r = new Array(t), n = 0; n < t; ++n) r[n] = e[n];
        return r
    }

    function k3(e, t) {
        for (; t + 1 < e.length; t++) e[t] = e[t + 1];
        e.pop()
    }

    function P3(e) {
        for (var t = new Array(e.length), r = 0; r < t.length; ++r) t[r] = e[r].listener || e[r];
        return t
    }

    function x3(e, t) {
        return new Promise(function(r, n) {
            function s(c) {
                e.removeListener(t, o), n(c)
            }

            function o() {
                typeof e.removeListener == "function" && e.removeListener("error", s), r([].slice.call(arguments))
            }
            VT(e, t, o, {
                once: !0
            }), t !== "error" && D3(e, s, {
                once: !0
            })
        })
    }

    function D3(e, t, r) {
        typeof e.on == "function" && VT(e, "error", t, r)
    }

    function VT(e, t, r, n) {
        if (typeof e.on == "function") n.once ? e.once(t, r) : e.on(t, r);
        else if (typeof e.addEventListener == "function") e.addEventListener(t, function s(o) {
            n.once && e.removeEventListener(t, s), r(o)
        });
        else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e)
    }
    class M3 {
        constructor(t) {
            t && (this.error = t.error, this.to = t.to)
        }
        toString() {
            return `ObservedError{
	to:${this.to}
	error:${this.error}
}`
        }
    }
    class Dl extends Error {
        constructor(t) {
            super(t), t && (this.code = t.code, this.message = t.message)
        }
    }
    class ho extends Dl {
        constructor(t) {
            super(t), this.code = 1e3, this.message = t && t.message ? t.message : "ecast server error"
        }
    }
    class qT extends ho {
        constructor(t) {
            super(t), this.code = 1001, this.message = t && t.message ? t.message : "create room failed"
        }
    }
    class YT extends ho {
        constructor(t) {
            super(t), this.code = 1002, this.message = t && t.message ? t.message : "unable to connect to room"
        }
    }
    class zT extends ho {
        constructor(t) {
            super(t), this.code = 1003, this.message = t && t.message ? t.message : "server is shutting down"
        }
    }
    class ft extends Dl {
        constructor(t) {
            super(t), this.code = 2e3, this.message = t && t.message ? t.message : "ecast client error"
        }
    }
    class XT extends ft {
        constructor(t) {
            super(t), this.code = 2001, this.message = t && t.message ? t.message : "parse error in ecast protocol"
        }
    }
    class JT extends ft {
        constructor(t) {
            super(t), this.code = 2002, this.message = t && t.message ? t.message : "missing opcode"
        }
    }
    class ZT extends ft {
        constructor(t) {
            super(t), this.code = 2003, this.message = t && t.message ? t.message : "invalid opcode"
        }
    }
    class QT extends ft {
        constructor(t) {
            super(t), this.code = 2004, this.message = t && t.message ? t.message : "invalid arguments"
        }
    }
    class e0 extends ft {
        constructor(t) {
            super(t), this.code = 2005, this.message = t && t.message ? t.message : "entity not found"
        }
    }
    class t0 extends ft {
        constructor(t) {
            super(t), this.code = 2006, this.message = t && t.message ? t.message : "an entity already exists with that key"
        }
    }
    class r0 extends ft {
        constructor(t) {
            super(t), this.code = 2007, this.message = t && t.message ? t.message : "the entity is not of the expected type"
        }
    }
    class n0 extends ft {
        constructor(t) {
            super(t), this.code = 2008, this.message = t && t.message ? t.message : "no such client"
        }
    }
    class i0 extends ft {
        constructor(t) {
            super(t), this.code = 2009, this.message = t && t.message ? t.message : "room is locked"
        }
    }
    class s0 extends ft {
        constructor(t) {
            super(t), this.code = 2010, this.message = t && t.message ? t.message : "room is full"
        }
    }
    class a0 extends ft {
        constructor(t) {
            super(t), this.code = 2011, this.message = t && t.message ? t.message : "no such license"
        }
    }
    class o0 extends ft {
        constructor(t) {
            super(t), this.code = 2012, this.message = t && t.message ? t.message : "invalid license"
        }
    }
    class c0 extends ft {
        constructor(t) {
            super(t), this.code = 2013, this.message = t && t.message ? t.message : "room not found"
        }
    }
    class l0 extends ft {
        constructor(t) {
            super(t), this.code = 2014, this.message = t && t.message ? t.message : "requested role does not exist"
        }
    }
    class u0 extends ft {
        constructor(t) {
            super(t), this.code = 2015, this.message = t && t.message ? t.message : "twitch login required"
        }
    }
    class f0 extends ft {
        constructor(t) {
            super(t), this.code = 2016, this.message = t && t.message ? t.message : "no such option"
        }
    }
    class d0 extends ft {
        constructor(t) {
            super(t), this.code = 2017, this.message = t && t.message ? t.message : "password required"
        }
    }
    class h0 extends ft {
        constructor(t) {
            super(t), this.code = 2018, this.message = t && t.message ? t.message : "invalid room password"
        }
    }
    class p0 extends ft {
        constructor(t) {
            super(t), this.code = 2019, this.message = t && t.message ? t.message : "missing name"
        }
    }
    class g0 extends ft {
        constructor(t) {
            super(t), this.code = 2021, this.message = t && t.message ? t.message : "text did not pass text filters"
        }
    }
    class m0 extends ft {
        constructor(t) {
            super(t), this.code = 2022, this.message = t && t.message ? t.message : "no such filter"
        }
    }
    class v0 extends ft {
        constructor(t) {
            super(t), this.code = 2023, this.message = t && t.message ? t.message : "permission denied"
        }
    }
    class y0 extends ft {
        constructor(t) {
            super(t), this.code = 2024, this.message = t && t.message ? t.message : "not connected to a room"
        }
    }
    class _0 extends ft {
        constructor(t) {
            super(t), this.code = 2025, this.message = t && t.message ? t.message : "illegal operation"
        }
    }
    class b0 extends ft {
        constructor(t) {
            super(t), this.code = 2026, this.message = t && t.message ? t.message : "invalid ACL change"
        }
    }
    class E0 extends ft {
        constructor(t) {
            super(t), this.code = 2027, this.message = t && t.message ? t.message : "room has already ended"
        }
    }
    class T0 extends ft {
        constructor(t) {
            super(t), this.code = 2028, this.message = t && t.message ? t.message : "the entity is locked"
        }
    }
    class S0 extends ft {
        constructor(t) {
            super(t), this.code = 2420, this.message = t && t.message ? t.message : "rate limit exceeded"
        }
    }

    function U3({
        code: e,
        message: t
    }) {
        const r = F3[e];
        return r ? new r({
            message: t
        }) : new Dl({
            message: t
        })
    }
    var fi = {
        createError: U3,
        CallError: Dl,
        EcastServerError: ho,
        EcastCreateRoomFailed: qT,
        EcastDialRoomFailed: YT,
        EcastServerIsShuttingDown: zT,
        EcastClientError: ft,
        EcastParseError: XT,
        EcastRequestIsMissingOpcode: JT,
        EcastRequestHasInvalidOpcode: ZT,
        EcastRequestHasInvalidArguments: QT,
        EcastEntityNotFound: e0,
        EcastEntityAlreadyExists: t0,
        EcastEntityTypeError: r0,
        EcastNoSuchClient: n0,
        EcastRoomIsLocked: i0,
        EcastRoomIsFull: s0,
        EcastLicenseNotFound: a0,
        EcastLicenseCheckFailed: o0,
        EcastRoomNotFound: c0,
        EcastInvalidRole: l0,
        EcastTwitchLoginRequired: u0,
        EcastInvalidOption: f0,
        EcastPasswordRequired: d0,
        EcastInvalidPassword: h0,
        EcastNameRequired: p0,
        EcastFilterError: g0,
        EcastNoSuchFilter: m0,
        EcastPermissionDenied: v0,
        EcastNotConnected: y0,
        EcastIllegalOperation: _0,
        EcastACLChangeDenied: b0,
        EcastRoomHasEnded: E0,
        EcastEntityLocked: T0,
        EcastRateLimitExceeded: S0,
        ObservedError: M3
    };
    const F3 = {
        1e3: ho,
        1001: qT,
        1002: YT,
        1003: zT,
        2e3: ft,
        2001: XT,
        2002: JT,
        2003: ZT,
        2004: QT,
        2005: e0,
        2006: t0,
        2007: r0,
        2008: n0,
        2009: i0,
        2010: s0,
        2011: a0,
        2012: o0,
        2013: c0,
        2014: l0,
        2015: u0,
        2016: f0,
        2017: d0,
        2018: h0,
        2019: p0,
        2021: g0,
        2022: m0,
        2023: v0,
        2024: y0,
        2025: _0,
        2026: b0,
        2027: E0,
        2028: T0,
        2420: S0
    };
    class B3 {
        constructor(t) {
            this.id = t.id, this.deviceId = t.deviceId, this.name = t.name, this.secret = t.secret, this.reconnect = t.reconnect, this.entities = t.entities, this.here = t.here, this.profile = t.profile, this.replayEnd = t.replayEnd
        }
    }
    class j3 {
        constructor(t) {
            this.id = t.id, this.userId = t.userId, this.name = t.name, this.role = t.role, this.reconnect = t.reconnect
        }
    }
    class G3 {
        constructor(t) {
            this.id = t.id, this.role = t.role
        }
    }
    class W3 {
        constructor(t) {
            this.to = t.to, this.from = t.from, this.body = t.body, this.userId = t.userId
        }
    }
    class K3 {
        constructor(t) {
            this.id = t.id, this.banned = t.banned, this.reason = t.reason
        }
    }
    var Qh = {
        ClientConnected: j3,
        ClientDisconnected: G3,
        ClientKicked: K3,
        ClientSend: W3,
        ClientWelcome: B3
    };
    class H3 {
        constructor(t) {
            this.choices = t.choices, this.key = t.key, this.meta = t.meta || {}
        }
        whenReceived(t) {
            t.entities[this.key] = this
        }
        toString() {
            return `CountGroup{
	choices: ${this.choices}
	meta:${JSON.stringify(this.meta)}
}`
        }
    }
    var ep = {
        CountGroup: H3
    };
    class V3 {
        constructor(t) {
            this.key = t.key, this.count = t.count, this.meta = t.meta || {}
        }
        whenReceived(t) {
            t.entities[this.key] = this
        }
        toString() {
            return `GCounter{
	count:${this.count}
	meta:${this.meta}
}`
        }
    }
    var tp = {
        GCounter: V3
    };
    class q3 {
        constructor(t) {
            this.pc = t.pc, this.opcode = t.opcode, this.result = t.result
        }
    }
    var w0 = {
        Notification: q3
    };
    class Y3 {
        constructor(t) {
            this.from = t.from, this.key = t.key, this.val = t.val, this.version = t.version, this.meta = t.meta || {}, t.acl && (this.acl = t.acl)
        }
        whenReceived(t) {
            t.entities[this.key] = this
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
    class z3 {
        constructor(t) {
            this.message = t.message
        }
        toString() {
            return `ObjectEcho{message: ${this.message}}`
        }
    }
    var rp = {
        ObjectEntity: Y3,
        ObjectEcho: z3
    };
    class X3 {
        constructor(t) {
            this.key = t.key, this.count = t.count, this.meta = t.meta || {}
        }
        whenReceived(t) {
            t.entities[this.key] = this
        }
        toString() {
            return `PNCounter{
	count:${this.count}
	meta:${JSON.stringify(this.meta)}
}`
        }
    }
    var np = {
        PNCounter: X3
    };
    class J3 {
        constructor(t) {
            this.pc = t.pc, this.re = t.re, this.opcode = t.opcode, this.result = t.result
        }
    }
    var O0 = {
        Reply: J3
    };
    class Z3 {
        constructor(t) {
            this.seq = t.seq, this.opcode = t.opcode, this.params = t.params
        }
    }
    var Q3 = {
        Request: Z3
    };
    class e8 {
        constructor(t) {
            this.from = t.from, this.key = t.key, this.text = t.text, this.version = t.version, this.meta = t.meta || {}, t.acl && (this.acl = t.acl)
        }
        whenReceived(t) {
            t.entities[this.key] = this, t.emit("text " + this.key, this)
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
    class t8 {
        constructor(t) {
            this.message = t.message
        }
        toString() {
            return `TextEcho{message: ${this.message}
}`
        }
    }
    var ip = {
        TextEntity: e8,
        TextEcho: t8
    };
    class r8 {
        constructor(t) {
            this.key = t.key, this.elements = t.elements, this.limit = t.limit, this.meta = t.meta || {}
        }
        whenReceived(t) {
            t.entities[this.key] = this
        }
        toString() {
            return `TextRing{
	elements: ${this.elements}
	meta:${JSON.stringify(this.meta)}
}`
        }
    }
    var sp = {
        TextRing: r8
    };
    class n8 {
        constructor(t) {
            this.key = t.key, this.artifactId = t.artifactId, this.categoryId = t.categoryId, this.rootId = t.rootId, this.meta = t.meta || {}
        }
        whenReceived(t) {
            t.entities[this.key] = this
        }
        toString() {
            return `ArtifactEntity${JSON.stringify(this)}
`
        }
    }
    var I0 = {
        ArtifactEntity: n8
    };
    class i8 {
        constructor(t) {
            this.key = t.key, this.colors = t.colors, this.lines = t.lines, this.live = t.live, this.maxPoints = t.maxPoints, this.size = t.size, this.weights = t.weights, this.meta = t.meta || {}, t.acl && (this.acl = t.acl)
        }
        whenReceived(t) {
            t.entities[this.key] = this
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
    class s8 {
        constructor(t) {
            this.key = t.key, this.line = t.line
        }
        whenReceived(t) {
            t.entities[this.key].lines.push(this.line)
        }
        toString() {
            return `DoodleLine{
	val:${this.line}
}`
        }
    }
    class a8 {
        constructor(t) {
            this.key = t.key, this.index = t.index
        }
        whenReceived(t) {
            t.entities[this.key].lines.splice(this.index, 1)
        }
        toString() {
            return `DoodleLineRemoved{
	index:${this.index}
}`
        }
    }
    var ap = {
        DoodleEntity: i8,
        DoodleLine: s8,
        DoodleLineRemoved: a8
    };
    class o8 {
        constructor(t) {
            this.key = t.key, this.size = t.size, this.version = t.version, this.from = t.from, this.meta = t.meta || {}, t.acl && (this.acl = t.acl)
        }
        whenRecived(t) {
            t.entities[this.key] = this
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
    class c8 {
        constructor(t) {
            this.key = t.key, this.val = t.val
        }
        toString() {
            return `StackElement{
	key:${this.key}
	value: ${JSON.stringify(this.val)}
}`
        }
    }
    class l8 {
        constructor(t) {
            this.key = t.key, this.vals = t.vals
        }
        toString() {
            return `StackElements{
	key:${this.key}
	values: ${JSON.stringify(this.vals)}
}`
        }
    }
    var C0 = {
        StackEntity: o8,
        StackElement: c8,
        StackElements: l8
    };
    class u8 {
        constructor(t) {
            this.key = t.key
        }
        whenReceived(t) {
            delete t.entities[this.key]
        }
        toString() {
            return `DropEntity{
	key:${this.key}
}`
        }
    }
    var $0 = {
        DropEntity: u8
    };
    class f8 {
        constructor(t) {
            this.message = t.message
        }
        toString() {
            return `Echo{message: ${this.message}
}`
        }
    }
    var d8 = {
        Echo: f8
    };
    class h8 {
        constructor(t) {
            this.key = t.key, this.from = t.from
        }
        whenReceived(t) {
            t.entities[this.key] && (t.entities[this.key].meta.locked = !0)
        }
        toString() {
            return `LockEntity{
	key:${this.key}
}`
        }
    }
    var p8 = {
        LockEntity: h8
    };
    class g8 {
        constructor() {}
        toString() {
            return "OK"
        }
    }
    var A0 = {
        OK: g8
    };
    class m8 {
        constructor(t) {
            this.from = t.from, this.key = t.key, this.val = t.val, this.restrictions = t.restrictions, this.version = t.version, this.meta = t.meta || {}, t.acl && (this.acl = t.acl)
        }
        whenReceived(t) {
            t.entities[this.key] = this
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
    var R0 = {
        NumberEntity: m8
    };
    const {
        ArtifactEntity: v8
    } = I0, {
        ClientWelcome: y8,
        ClientConnected: _8,
        ClientDisconnected: b8,
        ClientKicked: E8,
        ClientSend: T8
    } = Qh, {
        CountGroup: S8
    } = ep, {
        DoodleEntity: w8,
        DoodleLine: O8,
        DoodleLineRemoved: I8
    } = ap, {
        StackEntity: C8,
        StackElement: $8,
        StackElements: A8
    } = C0, {
        DropEntity: R8
    } = $0, {
        Echo: N8
    } = d8, {
        LockEntity: L8
    } = p8, {
        GCounter: k8
    } = tp, {
        GetAudienceReply: P8,
        RoomExit: x8,
        RoomLock: D8
    } = Pl, {
        Notification: M8
    } = w0, {
        OK: U8
    } = A0, {
        NumberEntity: F8
    } = R0, {
        ObjectEcho: B8,
        ObjectEntity: j8
    } = rp, {
        PNCounter: By
    } = np, {
        Reply: G8
    } = O0, {
        TextEcho: W8,
        TextEntity: K8
    } = ip, {
        TextRing: H8
    } = sp, {
        createError: jy,
        ObservedError: V8
    } = fi;

    function Ld(e, t, r) {
        switch (e) {
            case "ok":
                return new U8;
            case "echo":
                return new N8({
                    message: t.message
                });
            case "lock":
                return new L8({
                    key: t.key,
                    from: t.from
                });
            case "error":
                return jy({
                    code: t.code,
                    message: t.msg
                });
            case "error/observed":
                return new V8({
                    to: t.to,
                    error: jy({
                        code: t.error.code,
                        message: t.error.msg
                    })
                });
            case "string":
                return t;
            case "text":
                return new K8({
                    from: t.from,
                    key: t.key,
                    text: t.val,
                    version: t.version,
                    meta: r,
                    acl: t.acl
                });
            case "text/echo":
                return new W8({
                    message: t.message
                });
            case "object":
                return new j8({
                    from: t.from,
                    key: t.key,
                    val: t.val,
                    meta: r,
                    acl: t.acl
                });
            case "object/echo":
                return new B8({
                    message: t.message
                });
            case "drop":
                return new R8({
                    key: t.key
                });
            case "artifact":
                return new v8({
                    key: t.key,
                    artifactId: t.artifactId,
                    categoryId: t.categoryId,
                    rootId: t.rootId,
                    meta: r
                });
            case "client/connected":
                return new _8({
                    id: t.id,
                    userId: t.userId,
                    name: t.name,
                    role: t.role,
                    reconnect: t.reconnect
                });
            case "client/disconnected":
                return new b8({
                    id: t.id,
                    role: t.role
                });
            case "client/kicked":
                return new E8({
                    id: t.id,
                    banned: t.banned,
                    reason: t.reason
                });
            case "client/send":
                return new T8({
                    to: t.to,
                    from: t.from,
                    body: t.body,
                    userId: t.userID
                });
            case "client/welcome": {
                let n = new y8({
                    id: t.id,
                    name: t.name,
                    secret: t.secret,
                    reconnect: t.reconnect,
                    here: t.here,
                    profile: t.profile,
                    replayEnd: t.replayEnd
                });
                if (t.entities) {
                    let s = {};
                    Object.entries(t.entities).forEach(([o, c]) => {
                        s[o] = Ld(c[0], c[1], c[2])
                    }), n.entities = s
                }
                return n
            }
            case "doodle":
                return new w8({
                    key: t.key,
                    colors: t.val.colors,
                    lines: t.val.lines,
                    live: t.val.live,
                    maxPoints: t.val.maxPoints,
                    size: t.val.size,
                    weights: t.val.weights,
                    meta: r,
                    acl: t.acl
                });
            case "doodle/line":
                return new O8({
                    key: t.key,
                    line: t.val
                });
            case "doodle/line/removed":
                return new I8({
                    key: t.key,
                    index: t.index
                });
            case "stack":
                return new C8({
                    key: t.key,
                    size: t.size,
                    from: t.from,
                    version: t.version,
                    meta: t.meta,
                    acl: t.acl
                });
            case "stack/element":
                return new $8({
                    key: t.key,
                    val: t.val
                });
            case "stack/elements":
                return new A8({
                    key: t.key,
                    vals: t.vals
                });
            case "number":
                return new F8({
                    key: t.key,
                    val: t.val,
                    restrictions: t.restrictions,
                    from: t.from,
                    version: t.version,
                    meta: r,
                    acl: t.acl
                });
            case "room/exit":
                return new x8({
                    cause: t.cause
                });
            case "room/lock":
                return new D8;
            case "room/get-audience":
                return new P8({
                    connections: t.connections
                });
            case "audience":
                return new By({
                    key: e,
                    count: t[1]
                });
            case "audience/count-group":
                return new S8({
                    key: t.key,
                    choices: t.choices,
                    meta: r
                });
            case "audience/text-ring":
                return new H8({
                    key: t.key,
                    elements: t.elements,
                    meta: r
                });
            case "audience/g-counter":
                return new k8({
                    key: t.key,
                    count: t.count,
                    meta: r
                });
            case "audience/pn-counter":
                return new By({
                    key: t.key,
                    count: t.count,
                    meta: r
                });
            default:
                return console.error(`failed to parse result of type ${e}: ${JSON.stringify(t,null,2)}`), t
        }
    }

    function q8(e) {
        let t = JSON.parse(e.data),
            r = t.opcode || t.type;
        return t.re ? new G8({
            pc: t.pc,
            re: t.re,
            opcode: r,
            result: Ld(r, t.result)
        }) : new M8({
            pc: t.pc,
            opcode: r,
            result: Ld(r, t.result)
        })
    }
    var Y8 = {
        parseResponseMessage: q8
    };
    const Gy = R3,
        z8 = UT,
        X8 = Zh.exports,
        {
            CallError: J8
        } = fi,
        {
            ClientWelcome: Z8
        } = Qh,
        {
            CountGroup: Q8
        } = ep,
        {
            GCounter: e4
        } = tp,
        {
            Notification: Wy
        } = w0,
        {
            ObjectEntity: Rf
        } = rp,
        {
            PNCounter: t4
        } = np,
        {
            Reply: r4
        } = O0,
        {
            Request: n4
        } = Q3,
        {
            TextEntity: Nf
        } = ip,
        {
            TextRing: i4
        } = sp,
        {
            parseResponseMessage: s4
        } = Y8,
        {
            DoodleEntity: a4
        } = ap,
        {
            StackEntity: o4
        } = C0,
        c4 = 1e3 + Math.floor(Math.random() * 500),
        Ky = 13e3;
    class l4 extends X8 {
        constructor(t) {
            if (super(), this.debug = t.debug || !1, !t.host) throw new Error("unable to create ecast WSClient: no host provided");
            if (this.host = t.host, !t.code) throw new Error("unable to create ecast WSClient: no room code provided");
            if (this.code = t.code, t.scheme ? this.scheme = t.scheme : this.scheme = "wss", t.secret && t.id) this.id = t.id, this.secret = t.secret;
            else {
                switch (t.role) {
                    case "player":
                        if (!t.name) throw new Error("unable to create ecast WSClient: no name provided");
                        break;
                    case "host":
                        if (!t.token) throw new Error("unable to create ecast WSClient: tried to connect with host role but without host token");
                        this.token = t.token;
                        break;
                    case "moderator":
                        if (!t.password) throw new Error("unable to create ecast WSClient: tried to connect with moderator role but without password");
                        break
                }
                t.password && (this.password = t.password), t.twitchToken && (this.twitchToken = t.twitchToken)
            }
            this.name = t.name, this.role = t.role, this.deviceId = t.deviceId, this.userId = t.userId, this.conn = null, this.seq = 0, this.pending = {}, this.entities = {}, t.role == "host" && (this.replaySince = t.replaySince || 0, this.syncEntities = t.syncEntities || !1)
        }
        connect() {
            const t = {
                id: this.id,
                role: this.role,
                name: this.name,
                format: "json",
                "user-id": this.userId,
                password: this.password
            };
            this.deviceId && (t["device-id"] = this.deviceId), this.twitchToken && (t["twitch-token"] = this.twitchToken), this.secret && (t.secret = this.secret), this.role === "host" && (t["host-token"] = this.token, this.replaySince > 0 && (t["replay-since"] = this.replaySince), this.syncEntities && (t["sync-entities"] = this.syncEntities));
            const r = z8.stringify(t),
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
                this.conn = new Gy(n, "ecast-v0"), this.conn.onmessage = m => {
                    this.debugLog(`recv <- ${JSON.stringify(JSON.parse(m.data),null,2)}`);
                    const y = s4(m);
                    if (y instanceof r4) this.onReply(y);
                    else if (y instanceof Wy) {
                        if (y.result instanceof Z8) u = !0, this.id = y.result.id, this.deviceId = y.result.deviceId, this.entities = y.result.entities, this.secret = y.result.secret, y.result.name && (this.name = y.result.name), f(y.result);
                        else if (!c) {
                            h(y.result);
                            return
                        }
                        this.onNotification(y)
                    } else console.error(`failed to parse response messsage: ${y}`)
                }, this.conn.onerror = m => {
                    c ? this.emit("socketError", m) : h(m)
                }, this.conn.onclose = m => {
                    this.debugLog("onclose", m.code), u && m.code === 1006 ? this.reconnect() : this.emit("socketClose", m)
                }, this.conn.onopen = m => {
                    this.emit("socketOpen", m)
                }
            })
        }
        sleep(t) {
            return new Promise(r => setTimeout(r, t))
        }
        debugLog(...t) {
            !this.debug || console.log(`%c[WSClient:${this.name}]`, "background-color:blue;color:white;", ...t)
        }
        async reconnect() {
            this.disconnect(), this.debugLog("Attempting to reconnect");
            let t = 1,
                r = c4;
            for (;;) try {
                this.emit("connection", {
                    status: "connecting",
                    attempt: t
                }), await this.connect(), this.debugLog("reconnected"), this.emit("connection", {
                    status: "connected"
                });
                return
            } catch (n) {
                if (this.debugLog("reconnect error", n), n.code === 1005 || n.code === 1e3) {
                    this.debugLog("unable to reconnect!", n), this.emit("socketClose", n);
                    return
                }
                if (r >= Ky) {
                    this.debugLog("reconnect failed!", n), this.emit("socketClose", n);
                    return
                }
                t += 1, this.debugLog("waiting", r), this.emit("connection", {
                    status: "waiting",
                    attempt: t
                }), await this.sleep(r), r = Math.min(Ky, r * 2)
            }
        }
        disconnect() {
            !this.conn || (this.conn.close(), this.conn.onmessage = null, this.conn.onerror = null, this.conn.onopen = null, this.conn.onclose = null, this.conn = null)
        }
        onReply(t) {
            const r = t.re,
                n = this.pending[r];
            if (!n) {
                const s = new Wy(t);
                s.re = r, this.emit("notification", s);
                return
            }
            delete this.pending[r], t.result instanceof J8 ? n.reject(t.result) : n.resolve(t.result)
        }
        onNotification(t) {
            typeof t.result.whenReceived == "function" && t.result.whenReceived(this), this.emit("notification", t), this.emit(t.opcode, t.result)
        }
        send(t, r = {}) {
            if (!this.conn) throw new Error("No connection available");
            if (this.conn.readyState !== Gy.OPEN) throw new Error(`Socket not ready to send, readyState is ${this.conn.readyState}`);
            const n = ++this.seq,
                s = new n4({
                    seq: n,
                    opcode: t,
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
        mail(t, r) {
            return this.send("client/send", {
                from: this.id,
                to: t,
                body: r
            })
        }
        kick(t, r = !1, n) {
            return this.send("client/kick", {
                id: t,
                ban: r,
                reason: n
            })
        }
        async drop(t) {
            const r = await this.send("drop", {
                key: t
            });
            return delete this.entities[t], r
        }
        echo(t) {
            return this.send("echo", {
                message: t
            })
        }
        async lock(t) {
            const r = await this.send("lock", {
                key: t
            });
            return this.entities[t].meta.locked = !0, r
        }
        async getNumber(t) {
            const r = await this.send("number/get", {
                key: t
            });
            return this.entities[t].val = r.val, this.entities[t].restrictions = r.restrictions, r
        }
        async updateNumber(t, r) {
            const n = await this.send("number/update", {
                key: t,
                val: r
            });
            return this.entities[t].val = r, n
        }
        async createObject(t, r, n) {
            const s = {
                key: t,
                val: r
            };
            n && (s.acl = n);
            const o = await this.send("object/create", s);
            return this.entities[t] = new Rf({
                key: t,
                val: r,
                meta: {
                    locked: !1
                }
            }), o
        }
        echoObject(t) {
            return this.send("object/echo", {
                message: t
            })
        }
        async setObject(t, r, n) {
            const s = {
                key: t,
                val: r
            };
            n && (s.acl = n);
            const o = await this.send("object/set", s);
            return this.entities[t] = new Rf({
                key: t,
                val: r,
                meta: {
                    locked: !1
                }
            }), o
        }
        async updateObject(t, r) {
            const n = await this.send("object/update", {
                key: t,
                val: r
            });
            return this.entities[t] = new Rf({
                key: t,
                val: r,
                meta: {
                    locked: !1
                }
            }), n
        }
        echoText(t) {
            return this.send("text/echo", {
                message: t
            })
        }
        getText(t) {
            return this.send("text/get", {
                key: t
            })
        }
        async createText(t, r, n) {
            const s = {
                    key: t,
                    val: r
                },
                {
                    acl: o,
                    accept: c,
                    reject: u
                } = n;
            o && (s.acl = o), c && (s.accept = c), u && (s.reject = u);
            const f = await this.send("text/create", s);
            return this.entities[t] = new Nf({
                key: t,
                text: r,
                meta: {
                    locked: !1
                }
            }), f
        }
        async setText(t, r, n) {
            const s = {
                key: t,
                val: r
            };
            n && (s.acl = n);
            const o = await this.send("text/set", s);
            return this.entities[t] = new Nf({
                key: t,
                text: r,
                meta: {
                    locked: !1
                }
            }), o
        }
        async updateText(t, r) {
            const n = await this.send("text/update", {
                key: t,
                val: r
            });
            return this.entities[t] = new Nf({
                key: t,
                text: r,
                meta: {
                    locked: !1
                }
            }), n
        }
        async createDoodle(t, r) {
            let n = {
                key: t
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
            return this.entities[t] = new a4({
                key: t,
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
        async getDoodle(t) {
            return this.send("doodle/get", {
                key: t
            })
        }
        async strokeDoodle(t, r) {
            const {
                layer: n,
                color: s,
                weight: o,
                points: c
            } = r, u = await this.send("doodle/stroke", {
                key: t,
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
            return this.entities[t].lines.push(f), u
        }
        async undoDoodle(t) {
            const r = await this.send("doodle/undo", {
                key: t
            });
            return this.entities[t].lines.pop(), r
        }
        async createStack(t, r) {
            const n = {
                key: t
            };
            r && (n.acl = r);
            const s = await this.send("stack/create", n);
            return this.entities[t] = new o4({
                key: t,
                size: 0,
                meta: {
                    locked: !1
                }
            }), s
        }
        async pushStack(t, r) {
            return await this.send("stack/push", {
                key: t,
                val: r
            })
        }
        async bulkPushStack(t, r) {
            return await this.send("stack/bulkpush", {
                key: t,
                vals: r
            })
        }
        async peekStack(t, r) {
            return await this.send("stack/peek", {
                key: t,
                size: r
            })
        }
        async popStack(t) {
            return await this.send("stack/pop", {
                key: t
            })
        }
        async createCountGroup(t, r) {
            const n = await this.send("audience/count-group/create", {
                name: t,
                options: r
            });
            return this.entities[t] = new Q8({
                key: t,
                choices: r,
                meta: {
                    locked: !1
                }
            }), n
        }
        incrementCountGroupCounter(t, r, n = 1) {
            return this.send("audience/count-group/increment", {
                name: t,
                vote: r,
                times: n
            })
        }
        getCountGroup(t) {
            return this.send("audience/count-group/get", {
                name: t
            })
        }
        async createGCounter(t, r) {
            const n = await this.send("audience/g-counter/create", {
                key: t,
                count: r
            });
            return this.entities[t] = new e4({
                key: t,
                count: r,
                meta: {
                    locked: !1
                }
            }), n
        }
        incrementGCounter(t, r) {
            return this.send("audience/g-counter/increment", {
                key: t,
                times: r
            })
        }
        getGCounter(t) {
            return this.send("audience/g-counter/get", {
                key: t
            })
        }
        async createPNCounter(t, r) {
            const n = await this.send("audience/pn-counter/create", {
                key: t,
                count: r
            });
            return this.entities[t] = new t4({
                key: t,
                count: r,
                meta: {
                    locked: !1
                }
            }), n
        }
        incrementPNCounter(t, r) {
            return this.send("audience/pn-counter/increment", {
                key: t,
                times: r
            })
        }
        decrementPNCounter(t, r) {
            return this.send("audience/pn-counter/decrement", {
                key: t,
                times: r
            })
        }
        getPNCounter(t) {
            return this.send("audience/pn-counter/get", {
                key: t
            })
        }
        async createTextRing(t, r) {
            const n = {
                    key: t
                },
                {
                    limit: s,
                    accept: o,
                    reject: c
                } = r;
            s && (n.limit = s), o && (n.accept = o), c && (n.reject = c);
            const u = await this.send("audience/text-ring/create", n);
            return this.entities[t] = new i4({
                key: t,
                elements: [],
                limit: s,
                meta: {
                    locked: !1
                }
            }), u
        }
        getTextRing(t) {
            return this.send("audience/text-ring/get", {
                name: t
            })
        }
        pushTextRing(t, r) {
            return this.send("audience/text-ring/push", {
                name: t,
                text: r
            })
        }
    }
    var u4 = {
        WSClient: l4
    };
    const {
        APIClient: f4
    } = A3, {
        WSClient: d4
    } = u4, {
        CreateRoomReply: h4,
        GetRoomReply: p4
    } = Pl, {
        ClientWelcome: g4,
        ClientDisconnected: m4
    } = Qh, {
        ArtifactEntity: v4
    } = I0, {
        GCounter: y4
    } = tp, {
        NumberEntity: _4
    } = R0, {
        TextEntity: b4
    } = ip, {
        DoodleEntity: E4
    } = ap, {
        ObjectEntity: T4
    } = rp, {
        CountGroup: S4
    } = ep, {
        DropEntity: w4
    } = $0, {
        OK: O4
    } = A0, {
        RoomExit: I4
    } = Pl, {
        TextRing: C4
    } = sp, {
        PNCounter: $4
    } = np;
    var wr = {
        APIClient: f4,
        WSClient: d4,
        ClientWelcome: g4,
        CreateRoomReply: h4,
        DropEntity: w4,
        GetRoomReply: p4,
        ClientDisconnected: m4,
        RoomExit: I4,
        OK: O4,
        ArtifactEntity: v4,
        DoodleEntity: E4,
        NumberEntity: _4,
        CountGroup: S4,
        GCounter: y4,
        ObjectEntity: T4,
        PNCounter: $4,
        TextEntity: b4,
        TextRing: C4
    };
    const A4 = [{
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
            name: "Quiplash 2 International",
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
            features: ["moderation"],
            hasPreviews: !0
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
            features: ["kicking"],
            categoryId: "LineupGame"
        }],
        kd = e => A4.find(t => t.tag === e || t.categoryId === e);

    function Pd(...e) {
        console.log(...e)
    }
    class R4 {
        constructor(t, r) {
            ge(this, "client");
            ge(this, "room");
            ge(this, "items", []);
            ge(this, "autoMarkWindow", 150);
            ge(this, "autoMarkTimeout");
            ge(this, "autoMarkerCount", 0);
            ge(this, "automarkIgnoredKeys", []);
            ge(this, "automarkPendingLabel");
            window.tv.debug = this.expose(), this.client = t, this.room = r, Object.keys(this.client.entities).forEach(n => {
                this.pushEntity(this.client.entities[n])
            }), this.items.length && this.setMarker("welcome"), t.on("artifact", n => this.pushEntity(n)), t.on("doodle", n => this.pushEntity(n)), t.on("drop", n => this.pushEntity(n)), t.on("number", n => this.pushEntity(n)), t.on("object", n => this.pushEntity(n)), t.on("text", n => this.pushEntity(n)), this.hijackConsole(), this.hijackSend()
        }
        get markerCount() {
            return this.items.reduce((t, r) => "marker" in r ? t + 1 : t, 0)
        }
        reset() {
            this.items = []
        }
        setAutomarkIgnoredKeys(t) {
            this.automarkIgnoredKeys = t
        }
        hijackConsole() {
            const t = console.error.bind(console);
            console.error = (...r) => {
                this.pushError(r), t.apply(console, r)
            }
        }
        hijackSend() {
            !window.Proxy || (this.client.send = new Proxy(this.client.send, {
                apply: (t, r, n) => (this.pushSend(n), t.apply(r, n))
            }))
        }
        pushEntity(t) {
            Pd("[Debug] pushEntity", t), t instanceof wr.ArtifactEntity ? this.items.push({
                type: "artifact",
                ...t
            }) : t instanceof wr.DoodleEntity ? this.items.push({
                type: "doodle",
                ...t
            }) : t instanceof wr.DropEntity ? this.items.push({
                key: t.key,
                type: "drop"
            }) : t instanceof wr.NumberEntity ? this.items.push({
                key: t.key,
                type: "number",
                value: t.val,
                meta: t.meta,
                restrictions: t.restrictions
            }) : t instanceof wr.ObjectEntity ? (t.val.kind && (this.automarkPendingLabel = t.val.kind), this.items.push({
                key: t.key,
                type: "object",
                value: t.val,
                meta: t.meta
            })) : t instanceof wr.TextEntity && this.items.push({
                key: t.key,
                type: "text",
                value: t.text,
                meta: t.meta
            }), !this.automarkIgnoredKeys.includes(t.key) && this.startAutoMarkTimeout()
        }
        pushError(...t) {
            this.items.push({
                error: t
            })
        }
        pushSend(t) {
            this.items.push({
                opcode: t[0],
                arguments: t[1]
            })
        }
        setMarker(t) {
            const r = this.items.filter(s => s.marker === t).length,
                n = r ? `label-${r}` : t;
            this.items.push({
                marker: n
            }), this.clearAutoMarkTimeout()
        }
        setAutoMarker() {
            var r;
            const t = (r = this.automarkPendingLabel) != null ? r : "marker";
            this.items.push({
                marker: `${this.autoMarkerCount}-${t}`
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
        async send(t) {
            if (!this.client) return;
            const r = await this.sendToEcast();
            r && await this.sendToSlack(r, t)
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
            const t = this.getSendData();
            try {
                const n = await (await fetch("https://ecast.jackboxgames.com/api/v2/controller/state", {
                    method: "POST",
                    body: JSON.stringify(t)
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
        async sendToSlack(t, r) {
            var f;
            if (!this.room || !this.client) return;
            const n = kd(this.room.appTag),
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
                    y = `*${(f=n==null?void 0:n.name)!=null?f:this.room.appTag} :${this.room.appTag}:* (${o}, ${c}) 

 From: ${this.client.name},
${r}`,
                    E = [{
                        type: "section",
                        text: {
                            type: "mrkdwn",
                            text: y
                        }
                    }, {
                        type: "context",
                        elements: u
                    }, {
                        type: "actions",
                        elements: [{
                            type: "button",
                            action_id: "actionId-0",
                            url: t.json,
                            text: {
                                type: "plain_text",
                                text: "JSON",
                                emoji: !0
                            }
                        }, {
                            type: "button",
                            action_id: "actionId-3",
                            url: t.local,
                            text: {
                                type: "plain_text",
                                text: "localhost:9090",
                                emoji: !0
                            }
                        }, {
                            type: "button",
                            action_id: "actionId-1",
                            url: t.dev,
                            text: {
                                type: "plain_text",
                                text: "dev.jackbox.tv",
                                emoji: !0
                            }
                        }]
                    }],
                    I = {
                        unfurl_links: !1,
                        blocks: E
                    };
                if (this.room) {
                    I.icon_emoji = this.room.appTag;
                    const j = kd(this.room.appTag);
                    I.username = `DebugRecorder ${j?j.name:this.room.appTag}`
                }
                const M = await (await fetch(h, {
                    method: "POST",
                    body: JSON.stringify(I)
                })).text();
                Pd("[Debug] sendToSlack", M)
            } catch (h) {
                console.error("[Debug] sendToSlack", h)
            }
        }
        download(t) {
            var c, u;
            const r = t != null ? t : `${(u=(c=this.room)==null?void 0:c.appTag)!=null?u:"unknown"}-debug`,
                n = this.getSendData().state,
                s = JSON.stringify(n, null, 4),
                o = document.createElement("a");
            o.setAttribute("href", `data:text/json;charset=utf-8,${encodeURIComponent(s)}`), o.setAttribute("download", `${r}.json`), o.style.display = "none", document.body.appendChild(o), o.click(), document.body.removeChild(o)
        }
        open() {
            var s;
            const t = this.getSendData().state,
                r = JSON.stringify(t, null, 4),
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
                setMarker: t => this.setMarker(t),
                download: t => this.download(t),
                open: () => this.open(),
                send: t => void this.send(t)
            }
        }
    }

    function N4(e) {
        throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
    }
    var Hy = {
        exports: {}
    };
    (function(e, t) {
        (function(r, n) {
            n(t)
        })(Dt, function(r) {
            var n = typeof window < "u" ? window : typeof Dt < "u" ? Dt : typeof self < "u" ? self : {},
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

            function u(O) {
                try {
                    return decodeURIComponent(O.replace(/\+/g, " "))
                } catch {
                    return null
                }
            }

            function f(O) {
                try {
                    return encodeURIComponent(O)
                } catch {
                    return null
                }
            }

            function h(O) {
                for (var T = /([^=?#&]+)=?([^&]*)/g, N = {}, S; S = T.exec(O);) {
                    var L = u(S[1]),
                        Q = u(S[2]);
                    L === null || Q === null || L in N || (N[L] = Q)
                }
                return N
            }

            function m(O, T) {
                T = T || "";
                var N = [],
                    S, L;
                typeof T != "string" && (T = "?");
                for (L in O)
                    if (o.call(O, L)) {
                        if (S = O[L], !S && (S === null || S === c || isNaN(S)) && (S = ""), L = f(L), S = f(S), L === null || S === null) continue;
                        N.push(L + "=" + S)
                    } return N.length ? T + N.join("&") : ""
            }
            var y = m,
                E = h,
                I = {
                    stringify: y,
                    parse: E
                },
                k = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
                M = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,
                j = "[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]",
                C = new RegExp("^" + j + "+");

            function H(O) {
                return (O || "").toString().replace(C, "")
            }
            var X = [
                    ["#", "hash"],
                    ["?", "query"],
                    function(T, N) {
                        return Z(N.protocol) ? T.replace(/\\/g, "/") : T
                    },
                    ["/", "pathname"],
                    ["@", "auth", 1],
                    [NaN, "host", void 0, 1, 1],
                    [/:(\d+)$/, "port", void 0, 1],
                    [NaN, "hostname", void 0, 1, 1]
                ],
                W = {
                    hash: 1,
                    query: 1
                };

            function G(O) {
                var T;
                typeof window < "u" ? T = window : typeof n < "u" ? T = n : typeof self < "u" ? T = self : T = {};
                var N = T.location || {};
                O = O || N;
                var S = {},
                    L = typeof O,
                    Q;
                if (O.protocol === "blob:") S = new ue(unescape(O.pathname), {});
                else if (L === "string") {
                    S = new ue(O, {});
                    for (Q in W) delete S[Q]
                } else if (L === "object") {
                    for (Q in O) Q in W || (S[Q] = O[Q]);
                    S.slashes === void 0 && (S.slashes = k.test(O.href))
                }
                return S
            }

            function Z(O) {
                return O === "file:" || O === "ftp:" || O === "http:" || O === "https:" || O === "ws:" || O === "wss:"
            }

            function oe(O, T) {
                O = H(O), T = T || {};
                var N = M.exec(O),
                    S = N[1] ? N[1].toLowerCase() : "",
                    L = !!N[2],
                    Q = !!N[3],
                    ne = 0,
                    _e;
                return L ? Q ? (_e = N[2] + N[3] + N[4], ne = N[2].length + N[3].length) : (_e = N[2] + N[4], ne = N[2].length) : Q ? (_e = N[3] + N[4], ne = N[3].length) : _e = N[4], S === "file:" ? ne >= 2 && (_e = _e.slice(2)) : Z(S) ? _e = N[4] : S ? L && (_e = _e.slice(2)) : ne >= 2 && Z(T.protocol) && (_e = N[4]), {
                    protocol: S,
                    slashes: L || Z(S),
                    slashesCount: ne,
                    rest: _e
                }
            }

            function ce(O, T) {
                if (O === "") return T;
                for (var N = (T || "/").split("/").slice(0, -1).concat(O.split("/")), S = N.length, L = N[S - 1], Q = !1, ne = 0; S--;) N[S] === "." ? N.splice(S, 1) : N[S] === ".." ? (N.splice(S, 1), ne++) : ne && (S === 0 && (Q = !0), N.splice(S, 1), ne--);
                return Q && N.unshift(""), (L === "." || L === "..") && N.push(""), N.join("/")
            }

            function ue(O, T, N) {
                if (O = H(O), !(this instanceof ue)) return new ue(O, T, N);
                var S, L, Q, ne, _e, Te, dt = X.slice(),
                    sr = typeof T,
                    xe = this,
                    fa = 0;
                for (sr !== "object" && sr !== "string" && (N = T, T = null), N && typeof N != "function" && (N = I.parse), T = G(T), L = oe(O || "", T), S = !L.protocol && !L.slashes, xe.slashes = L.slashes || S && T.slashes, xe.protocol = L.protocol || T.protocol || "", O = L.rest, (xe.protocol === "file:" || !L.slashes && (L.protocol || L.slashesCount < 2 || !Z(xe.protocol))) && (dt[3] = [/(.*)/, "pathname"]); fa < dt.length; fa++) {
                    if (ne = dt[fa], typeof ne == "function") {
                        O = ne(O, xe);
                        continue
                    }
                    Q = ne[0], Te = ne[1], Q !== Q ? xe[Te] = O : typeof Q == "string" ? ~(_e = O.indexOf(Q)) && (typeof ne[2] == "number" ? (xe[Te] = O.slice(0, _e), O = O.slice(_e + ne[2])) : (xe[Te] = O.slice(_e), O = O.slice(0, _e))) : (_e = Q.exec(O)) && (xe[Te] = _e[1], O = O.slice(0, _e.index)), xe[Te] = xe[Te] || S && ne[3] && T[Te] || "", ne[4] && (xe[Te] = xe[Te].toLowerCase())
                }
                N && (xe.query = N(xe.query)), S && T.slashes && xe.pathname.charAt(0) !== "/" && (xe.pathname !== "" || T.pathname !== "") && (xe.pathname = ce(xe.pathname, T.pathname)), xe.pathname.charAt(0) !== "/" && Z(xe.protocol) && (xe.pathname = "/" + xe.pathname), s(xe.port, xe.protocol) || (xe.host = xe.hostname, xe.port = ""), xe.username = xe.password = "", xe.auth && (ne = xe.auth.split(":"), xe.username = ne[0] || "", xe.password = ne[1] || ""), xe.origin = xe.protocol !== "file:" && Z(xe.protocol) && xe.host ? xe.protocol + "//" + xe.host : "null", xe.href = xe.toString()
            }

            function $e(O, T, N) {
                var S = this;
                switch (O) {
                    case "query":
                        typeof T == "string" && T.length && (T = (N || I.parse)(T)), S[O] = T;
                        break;
                    case "port":
                        S[O] = T, s(T, S.protocol) ? T && (S.host = S.hostname + ":" + T) : (S.host = S.hostname, S[O] = "");
                        break;
                    case "hostname":
                        S[O] = T, S.port && (T += ":" + S.port), S.host = T;
                        break;
                    case "host":
                        S[O] = T, /:\d+$/.test(T) ? (T = T.split(":"), S.port = T.pop(), S.hostname = T.join(":")) : (S.hostname = T, S.port = "");
                        break;
                    case "protocol":
                        S.protocol = T.toLowerCase(), S.slashes = !N;
                        break;
                    case "pathname":
                    case "hash":
                        if (T) {
                            var L = O === "pathname" ? "/" : "#";
                            S[O] = T.charAt(0) !== L ? L + T : T
                        } else S[O] = T;
                        break;
                    default:
                        S[O] = T
                }
                for (var Q = 0; Q < X.length; Q++) {
                    var ne = X[Q];
                    ne[4] && (S[ne[1]] = S[ne[1]].toLowerCase())
                }
                return S.origin = S.protocol !== "file:" && Z(S.protocol) && S.host ? S.protocol + "//" + S.host : "null", S.href = S.toString(), S
            }

            function Ce(O) {
                (!O || typeof O != "function") && (O = I.stringify);
                var T, N = this,
                    S = N.protocol;
                S && S.charAt(S.length - 1) !== ":" && (S += ":");
                var L = S + (N.slashes || Z(N.protocol) ? "//" : "");
                return N.username && (L += N.username, N.password && (L += ":" + N.password), L += "@"), L += N.host + N.pathname, T = typeof N.query == "object" ? O(N.query) : N.query, T && (L += T.charAt(0) !== "?" ? "?" + T : T), N.hash && (L += N.hash), L
            }
            ue.prototype = {
                set: $e,
                toString: Ce
            }, ue.extractProtocol = oe, ue.location = G, ue.trimLeft = H, ue.qs = I;
            var fe = ue;

            function Ie(O, T) {
                setTimeout(function(N) {
                    return O.call(N)
                }, 4, T)
            }

            function U(O, T) {
                typeof process < "u" && console[O].call(null, T)
            }

            function ie(O, T) {
                O === void 0 && (O = []);
                var N = [];
                return O.forEach(function(S) {
                    T(S) || N.push(S)
                }), N
            }

            function de(O, T) {
                O === void 0 && (O = []);
                var N = [];
                return O.forEach(function(S) {
                    T(S) && N.push(S)
                }), N
            }
            var be = function() {
                this.listeners = {}
            };
            be.prototype.addEventListener = function(T, N) {
                typeof N == "function" && (Array.isArray(this.listeners[T]) || (this.listeners[T] = []), de(this.listeners[T], function(S) {
                    return S === N
                }).length === 0 && this.listeners[T].push(N))
            }, be.prototype.removeEventListener = function(T, N) {
                var S = this.listeners[T];
                this.listeners[T] = ie(S, function(L) {
                    return L === N
                })
            }, be.prototype.dispatchEvent = function(T) {
                for (var N = this, S = [], L = arguments.length - 1; L-- > 0;) S[L] = arguments[L + 1];
                var Q = T.type,
                    ne = this.listeners[Q];
                return Array.isArray(ne) ? (ne.forEach(function(_e) {
                    S.length > 0 ? _e.apply(N, S) : _e.call(N, T)
                }), !0) : !1
            };

            function ve(O) {
                var T = O.indexOf("?");
                return T >= 0 ? O.slice(0, T) : O
            }
            var Se = function() {
                this.urlMap = {}
            };
            Se.prototype.attachWebSocket = function(T, N) {
                var S = ve(N),
                    L = this.urlMap[S];
                if (L && L.server && L.websockets.indexOf(T) === -1) return L.websockets.push(T), L.server
            }, Se.prototype.addMembershipToRoom = function(T, N) {
                var S = this.urlMap[ve(T.url)];
                S && S.server && S.websockets.indexOf(T) !== -1 && (S.roomMemberships[N] || (S.roomMemberships[N] = []), S.roomMemberships[N].push(T))
            }, Se.prototype.attachServer = function(T, N) {
                var S = ve(N),
                    L = this.urlMap[S];
                if (!L) return this.urlMap[S] = {
                    server: T,
                    websockets: [],
                    roomMemberships: {}
                }, T
            }, Se.prototype.serverLookup = function(T) {
                var N = ve(T),
                    S = this.urlMap[N];
                if (S) return S.server
            }, Se.prototype.websocketsLookup = function(T, N, S) {
                var L = ve(T),
                    Q, ne = this.urlMap[L];
                if (Q = ne ? ne.websockets : [], N) {
                    var _e = ne.roomMemberships[N];
                    Q = _e || []
                }
                return S ? Q.filter(function(Te) {
                    return Te !== S
                }) : Q
            }, Se.prototype.removeServer = function(T) {
                delete this.urlMap[ve(T)]
            }, Se.prototype.removeWebSocket = function(T, N) {
                var S = ve(N),
                    L = this.urlMap[S];
                L && (L.websockets = ie(L.websockets, function(Q) {
                    return Q === T
                }))
            }, Se.prototype.removeMembershipFromRoom = function(T, N) {
                var S = this.urlMap[ve(T.url)],
                    L = S.roomMemberships[N];
                S && L !== null && (S.roomMemberships[N] = ie(L, function(Q) {
                    return Q === T
                }))
            };
            var Me = new Se,
                Ge = {
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
                nt = {
                    CONSTRUCTOR_ERROR: "Failed to construct 'WebSocket':",
                    CLOSE_ERROR: "Failed to execute 'close' on 'WebSocket':",
                    EVENT: {
                        CONSTRUCT: "Failed to construct 'Event':",
                        MESSAGE: "Failed to construct 'MessageEvent':",
                        CLOSE: "Failed to construct 'CloseEvent':"
                    }
                },
                Rt = function() {};
            Rt.prototype.stopPropagation = function() {}, Rt.prototype.stopImmediatePropagation = function() {}, Rt.prototype.initEvent = function(T, N, S) {
                T === void 0 && (T = "undefined"), N === void 0 && (N = !1), S === void 0 && (S = !1), this.type = "" + T, this.bubbles = Boolean(N), this.cancelable = Boolean(S)
            };
            var Cr = function(O) {
                    function T(N, S) {
                        if (S === void 0 && (S = {}), O.call(this), !N) throw new TypeError(nt.EVENT_ERROR + " 1 argument required, but only 0 present.");
                        if (typeof S != "object") throw new TypeError(nt.EVENT_ERROR + " parameter 2 ('eventInitDict') is not an object.");
                        var L = S.bubbles,
                            Q = S.cancelable;
                        this.type = "" + N, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = Q ? Boolean(Q) : !1, this.cancelBubble = !1, this.bubbles = L ? Boolean(L) : !1
                    }
                    return O && (T.__proto__ = O), T.prototype = Object.create(O && O.prototype), T.prototype.constructor = T, T
                }(Rt),
                ir = function(O) {
                    function T(N, S) {
                        if (S === void 0 && (S = {}), O.call(this), !N) throw new TypeError(nt.EVENT.MESSAGE + " 1 argument required, but only 0 present.");
                        if (typeof S != "object") throw new TypeError(nt.EVENT.MESSAGE + " parameter 2 ('eventInitDict') is not an object");
                        var L = S.bubbles,
                            Q = S.cancelable,
                            ne = S.data,
                            _e = S.origin,
                            Te = S.lastEventId,
                            dt = S.ports;
                        this.type = "" + N, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = Q ? Boolean(Q) : !1, this.canncelBubble = !1, this.bubbles = L ? Boolean(L) : !1, this.origin = "" + _e, this.ports = typeof dt > "u" ? null : dt, this.data = typeof ne > "u" ? null : ne, this.lastEventId = "" + (Te || "")
                    }
                    return O && (T.__proto__ = O), T.prototype = Object.create(O && O.prototype), T.prototype.constructor = T, T
                }(Rt),
                vr = function(O) {
                    function T(N, S) {
                        if (S === void 0 && (S = {}), O.call(this), !N) throw new TypeError(nt.EVENT.CLOSE + " 1 argument required, but only 0 present.");
                        if (typeof S != "object") throw new TypeError(nt.EVENT.CLOSE + " parameter 2 ('eventInitDict') is not an object");
                        var L = S.bubbles,
                            Q = S.cancelable,
                            ne = S.code,
                            _e = S.reason,
                            Te = S.wasClean;
                        this.type = "" + N, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = Q ? Boolean(Q) : !1, this.cancelBubble = !1, this.bubbles = L ? Boolean(L) : !1, this.code = typeof ne == "number" ? parseInt(ne, 10) : 0, this.reason = "" + (_e || ""), this.wasClean = Te ? Boolean(Te) : !1
                    }
                    return O && (T.__proto__ = O), T.prototype = Object.create(O && O.prototype), T.prototype.constructor = T, T
                }(Rt);

            function ct(O) {
                var T = O.type,
                    N = O.target,
                    S = new Cr(T);
                return N && (S.target = N, S.srcElement = N, S.currentTarget = N), S
            }

            function wt(O) {
                var T = O.type,
                    N = O.origin,
                    S = O.data,
                    L = O.target,
                    Q = new ir(T, {
                        data: S,
                        origin: N
                    });
                return L && (Q.target = L, Q.srcElement = L, Q.currentTarget = L), Q
            }

            function lt(O) {
                var T = O.code,
                    N = O.reason,
                    S = O.type,
                    L = O.target,
                    Q = O.wasClean;
                Q || (Q = T === Ge.CLOSE_NORMAL || T === Ge.CLOSE_NO_STATUS);
                var ne = new vr(S, {
                    code: T,
                    reason: N,
                    wasClean: Q
                });
                return L && (ne.target = L, ne.srcElement = L, ne.currentTarget = L), ne
            }

            function Mt(O, T, N) {
                O.readyState = Y.CLOSING;
                var S = Me.serverLookup(O.url),
                    L = lt({
                        type: "close",
                        target: O.target,
                        code: T,
                        reason: N
                    }),
                    Q = lt({
                        type: "server::close",
                        target: O,
                        code: T,
                        reason: N
                    });
                Ie(function() {
                    Me.removeWebSocket(O, O.url), O.readyState = Y.CLOSED, O.dispatchEvent(L), O.dispatchEvent(Q), S && S.dispatchEvent(L, S)
                }, O)
            }

            function qt(O, T, N) {
                O.readyState = Y.CLOSING;
                var S = Me.serverLookup(O.url),
                    L = lt({
                        type: "close",
                        target: O.target,
                        code: T,
                        reason: N,
                        wasClean: !1
                    }),
                    Q = lt({
                        type: "server::close",
                        target: O,
                        code: T,
                        reason: N,
                        wasClean: !1
                    }),
                    ne = ct({
                        type: "error",
                        target: O.target
                    });
                Ie(function() {
                    Me.removeWebSocket(O, O.url), O.readyState = Y.CLOSED, O.dispatchEvent(ne), O.dispatchEvent(L), O.dispatchEvent(Q), S && S.dispatchEvent(L, S)
                }, O)
            }

            function Ut(O) {
                return Object.prototype.toString.call(O) !== "[object Blob]" && !(O instanceof ArrayBuffer) && (O = String(O)), O
            }
            var g = new WeakMap;

            function p(O) {
                if (g.has(O)) return g.get(O);
                var T = new Proxy(O, {
                    get: function(S, L) {
                        return L === "close" ? function(ne) {
                            ne === void 0 && (ne = {});
                            var _e = ne.code || Ge.CLOSE_NORMAL,
                                Te = ne.reason || "";
                            Mt(T, _e, Te)
                        } : L === "send" ? function(ne) {
                            ne = Ut(ne), O.dispatchEvent(wt({
                                type: "message",
                                data: ne,
                                origin: this.url,
                                target: O
                            }))
                        } : L === "on" ? function(ne, _e) {
                            O.addEventListener("server::" + ne, _e)
                        } : L === "target" ? O : S[L]
                    }
                });
                return g.set(O, T), T
            }

            function w(O) {
                var T = encodeURIComponent(O).match(/%[89ABab]/g);
                return O.length + (T ? T.length : 0)
            }

            function D(O) {
                var T = new fe(O),
                    N = T.pathname,
                    S = T.protocol,
                    L = T.hash;
                if (!O) throw new TypeError(nt.CONSTRUCTOR_ERROR + " 1 argument required, but only 0 present.");
                if (N || (T.pathname = "/"), S === "") throw new SyntaxError(nt.CONSTRUCTOR_ERROR + " The URL '" + T.toString() + "' is invalid.");
                if (S !== "ws:" && S !== "wss:") throw new SyntaxError(nt.CONSTRUCTOR_ERROR + " The URL's scheme must be either 'ws' or 'wss'. '" + S + "' is not allowed.");
                if (L !== "") throw new SyntaxError(nt.CONSTRUCTOR_ERROR + " The URL contains a fragment identifier ('" + L + "'). Fragment identifiers are not allowed in WebSocket URLs.");
                return T.toString()
            }

            function B(O) {
                if (O === void 0 && (O = []), !Array.isArray(O) && typeof O != "string") throw new SyntaxError(nt.CONSTRUCTOR_ERROR + " The subprotocol '" + O.toString() + "' is invalid.");
                typeof O == "string" && (O = [O]);
                var T = O.map(function(S) {
                        return {
                            count: 1,
                            protocol: S
                        }
                    }).reduce(function(S, L) {
                        return S[L.protocol] = (S[L.protocol] || 0) + L.count, S
                    }, {}),
                    N = Object.keys(T).filter(function(S) {
                        return T[S] > 1
                    });
                if (N.length > 0) throw new SyntaxError(nt.CONSTRUCTOR_ERROR + " The subprotocol '" + N[0] + "' is duplicated.");
                return O
            }
            var Y = function(O) {
                function T(S, L) {
                    O.call(this), this._onopen = null, this._onmessage = null, this._onerror = null, this._onclose = null, this.url = D(S), L = B(L), this.protocol = L[0] || "", this.binaryType = "blob", this.readyState = T.CONNECTING;
                    var Q = p(this),
                        ne = Me.attachWebSocket(Q, this.url);
                    Ie(function() {
                        if (ne)
                            if (ne.options.verifyClient && typeof ne.options.verifyClient == "function" && !ne.options.verifyClient()) this.readyState = T.CLOSED, U("error", "WebSocket connection to '" + this.url + "' failed: HTTP Authentication failed; no valid credentials available"), Me.removeWebSocket(Q, this.url), this.dispatchEvent(ct({
                                type: "error",
                                target: this
                            })), this.dispatchEvent(lt({
                                type: "close",
                                target: this,
                                code: Ge.CLOSE_NORMAL
                            }));
                            else {
                                if (ne.options.selectProtocol && typeof ne.options.selectProtocol == "function") {
                                    var Te = ne.options.selectProtocol(L),
                                        dt = Te !== "",
                                        sr = L.indexOf(Te) !== -1;
                                    if (dt && !sr) {
                                        this.readyState = T.CLOSED, U("error", "WebSocket connection to '" + this.url + "' failed: Invalid Sub-Protocol"), Me.removeWebSocket(Q, this.url), this.dispatchEvent(ct({
                                            type: "error",
                                            target: this
                                        })), this.dispatchEvent(lt({
                                            type: "close",
                                            target: this,
                                            code: Ge.CLOSE_NORMAL
                                        }));
                                        return
                                    }
                                    this.protocol = Te
                                }
                                this.readyState = T.OPEN, this.dispatchEvent(ct({
                                    type: "open",
                                    target: this
                                })), ne.dispatchEvent(ct({
                                    type: "connection"
                                }), Q)
                            }
                        else this.readyState = T.CLOSED, this.dispatchEvent(ct({
                            type: "error",
                            target: this
                        })), this.dispatchEvent(lt({
                            type: "close",
                            target: this,
                            code: Ge.CLOSE_NORMAL
                        })), U("error", "WebSocket connection to '" + this.url + "' failed")
                    }, this)
                }
                O && (T.__proto__ = O), T.prototype = Object.create(O && O.prototype), T.prototype.constructor = T;
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
                }, T.prototype.send = function(L) {
                    var Q = this;
                    if (this.readyState === T.CLOSING || this.readyState === T.CLOSED) throw new Error("WebSocket is already in CLOSING or CLOSED state");
                    var ne = wt({
                            type: "server::message",
                            origin: this.url,
                            data: Ut(L)
                        }),
                        _e = Me.serverLookup(this.url);
                    _e && Ie(function() {
                        Q.dispatchEvent(ne, L)
                    }, _e)
                }, T.prototype.close = function(L, Q) {
                    if (L !== void 0 && (typeof L != "number" || L !== 1e3 && (L < 3e3 || L > 4999))) throw new TypeError(nt.CLOSE_ERROR + " The code must be either 1000, or between 3000 and 4999. " + L + " is neither.");
                    if (Q !== void 0) {
                        var ne = w(Q);
                        if (ne > 123) throw new SyntaxError(nt.CLOSE_ERROR + " The message must not be greater than 123 bytes.")
                    }
                    if (!(this.readyState === T.CLOSING || this.readyState === T.CLOSED)) {
                        var _e = p(this);
                        this.readyState === T.CONNECTING ? qt(_e, L || Ge.CLOSE_ABNORMAL, Q) : Mt(_e, L || Ge.CLOSE_NO_STATUS, Q)
                    }
                }, Object.defineProperties(T.prototype, N), T
            }(be);
            Y.CONNECTING = 0, Y.prototype.CONNECTING = Y.CONNECTING, Y.OPEN = 1, Y.prototype.OPEN = Y.OPEN, Y.CLOSING = 2, Y.prototype.CLOSING = Y.CLOSING, Y.CLOSED = 3, Y.prototype.CLOSED = Y.CLOSED;
            var le = function(O) {
                return O.reduce(function(T, N) {
                    return T.indexOf(N) > -1 ? T : T.concat(N)
                }, [])
            };

            function se() {
                return typeof window < "u" ? window : typeof process == "object" && typeof N4 == "function" && typeof Dt == "object" ? Dt : this
            }
            var re = {
                    mock: !0,
                    verifyClient: null,
                    selectProtocol: null
                },
                A = function(O) {
                    function T(N, S) {
                        S === void 0 && (S = re), O.call(this);
                        var L = new fe(N);
                        L.pathname || (L.pathname = "/"), this.url = L.toString(), this.originalWebSocket = null;
                        var Q = Me.attachServer(this, this.url);
                        if (!Q) throw this.dispatchEvent(ct({
                            type: "error"
                        })), new Error("A mock server is already listening on this url");
                        this.options = Object.assign({}, re, S), this.options.mock && this.mockWebsocket()
                    }
                    return O && (T.__proto__ = O), T.prototype = Object.create(O && O.prototype), T.prototype.constructor = T, T.prototype.mockWebsocket = function() {
                        var S = se();
                        this.originalWebSocket = S.WebSocket, S.WebSocket = Y
                    }, T.prototype.restoreWebsocket = function() {
                        var S = se();
                        this.originalWebSocket !== null && (S.WebSocket = this.originalWebSocket), this.originalWebSocket = null
                    }, T.prototype.stop = function(S) {
                        S === void 0 && (S = function() {}), this.options.mock && this.restoreWebsocket(), Me.removeServer(this.url), typeof S == "function" && S()
                    }, T.prototype.on = function(S, L) {
                        this.addEventListener(S, L)
                    }, T.prototype.close = function(S) {
                        S === void 0 && (S = {});
                        var L = S.code,
                            Q = S.reason,
                            ne = S.wasClean,
                            _e = Me.websocketsLookup(this.url);
                        Me.removeServer(this.url), _e.forEach(function(Te) {
                            Te.readyState = Y.CLOSED, Te.dispatchEvent(lt({
                                type: "close",
                                target: Te.target,
                                code: L || Ge.CLOSE_NORMAL,
                                reason: Q || "",
                                wasClean: ne
                            }))
                        }), this.dispatchEvent(lt({
                            type: "close"
                        }), this)
                    }, T.prototype.emit = function(S, L, Q) {
                        var ne = this;
                        Q === void 0 && (Q = {});
                        var _e = Q.websockets;
                        _e || (_e = Me.websocketsLookup(this.url)), typeof Q != "object" || arguments.length > 3 ? (L = Array.prototype.slice.call(arguments, 1, arguments.length), L = L.map(function(Te) {
                            return Ut(Te)
                        })) : L = Ut(L), _e.forEach(function(Te) {
                            Array.isArray(L) ? Te.dispatchEvent.apply(Te, [wt({
                                type: S,
                                data: L,
                                origin: ne.url,
                                target: Te.target
                            })].concat(L)) : Te.dispatchEvent(wt({
                                type: S,
                                data: L,
                                origin: ne.url,
                                target: Te.target
                            }))
                        })
                    }, T.prototype.clients = function() {
                        return Me.websocketsLookup(this.url)
                    }, T.prototype.to = function(S, L, Q) {
                        var ne = this;
                        Q === void 0 && (Q = []);
                        var _e = this,
                            Te = le(Q.concat(Me.websocketsLookup(this.url, S, L)));
                        return {
                            to: function(dt, sr) {
                                return ne.to.call(ne, dt, sr, Te)
                            },
                            emit: function(sr, xe) {
                                _e.emit(sr, xe, {
                                    websockets: Te
                                })
                            }
                        }
                    }, T.prototype.in = function() {
                        for (var S = [], L = arguments.length; L--;) S[L] = arguments[L];
                        return this.to.apply(null, S)
                    }, T.prototype.simulate = function(S) {
                        var L = Me.websocketsLookup(this.url);
                        S === "error" && L.forEach(function(Q) {
                            Q.readyState = Y.CLOSED, Q.dispatchEvent(ct({
                                type: "error"
                            }))
                        })
                    }, T
                }(be);
            A.of = function(T) {
                return new A(T)
            };
            var K = function(O) {
                function T(S, L) {
                    var Q = this;
                    S === void 0 && (S = "socket.io"), L === void 0 && (L = ""), O.call(this), this.binaryType = "blob";
                    var ne = new fe(S);
                    ne.pathname || (ne.pathname = "/"), this.url = ne.toString(), this.readyState = T.CONNECTING, this.protocol = "", this.target = this, typeof L == "string" || typeof L == "object" && L !== null ? this.protocol = L : Array.isArray(L) && L.length > 0 && (this.protocol = L[0]);
                    var _e = Me.attachWebSocket(this, this.url);
                    Ie(function() {
                        _e ? (this.readyState = T.OPEN, _e.dispatchEvent(ct({
                            type: "connection"
                        }), _e, this), _e.dispatchEvent(ct({
                            type: "connect"
                        }), _e, this), this.dispatchEvent(ct({
                            type: "connect",
                            target: this
                        }))) : (this.readyState = T.CLOSED, this.dispatchEvent(ct({
                            type: "error",
                            target: this
                        })), this.dispatchEvent(lt({
                            type: "close",
                            target: this,
                            code: Ge.CLOSE_NORMAL
                        })), U("error", "Socket.io connection to '" + this.url + "' failed"))
                    }, this), this.addEventListener("close", function(Te) {
                        Q.dispatchEvent(lt({
                            type: "disconnect",
                            target: Te.target,
                            code: Te.code
                        }))
                    })
                }
                O && (T.__proto__ = O), T.prototype = Object.create(O && O.prototype), T.prototype.constructor = T;
                var N = {
                    broadcast: {}
                };
                return T.prototype.close = function() {
                    if (this.readyState === T.OPEN) {
                        var L = Me.serverLookup(this.url);
                        return Me.removeWebSocket(this, this.url), this.readyState = T.CLOSED, this.dispatchEvent(lt({
                            type: "close",
                            target: this,
                            code: Ge.CLOSE_NORMAL
                        })), L && L.dispatchEvent(lt({
                            type: "disconnect",
                            target: this,
                            code: Ge.CLOSE_NORMAL
                        }), L), this
                    }
                }, T.prototype.disconnect = function() {
                    return this.close()
                }, T.prototype.emit = function(L) {
                    for (var Q = [], ne = arguments.length - 1; ne-- > 0;) Q[ne] = arguments[ne + 1];
                    if (this.readyState !== T.OPEN) throw new Error("SocketIO is already in CLOSING or CLOSED state");
                    var _e = wt({
                            type: L,
                            origin: this.url,
                            data: Q
                        }),
                        Te = Me.serverLookup(this.url);
                    return Te && Te.dispatchEvent.apply(Te, [_e].concat(Q)), this
                }, T.prototype.send = function(L) {
                    return this.emit("message", L), this
                }, N.broadcast.get = function() {
                    if (this.readyState !== T.OPEN) throw new Error("SocketIO is already in CLOSING or CLOSED state");
                    var S = this,
                        L = Me.serverLookup(this.url);
                    if (!L) throw new Error("SocketIO can not find a server at the specified URL (" + this.url + ")");
                    return {
                        emit: function(ne, _e) {
                            return L.emit(ne, _e, {
                                websockets: Me.websocketsLookup(S.url, null, S)
                            }), S
                        },
                        to: function(ne) {
                            return L.to(ne, S)
                        },
                        in: function(ne) {
                            return L.in(ne, S)
                        }
                    }
                }, T.prototype.on = function(L, Q) {
                    return this.addEventListener(L, Q), this
                }, T.prototype.off = function(L, Q) {
                    this.removeEventListener(L, Q)
                }, T.prototype.hasListeners = function(L) {
                    var Q = this.listeners[L];
                    return Array.isArray(Q) ? !!Q.length : !1
                }, T.prototype.join = function(L) {
                    Me.addMembershipToRoom(this, L)
                }, T.prototype.leave = function(L) {
                    Me.removeMembershipFromRoom(this, L)
                }, T.prototype.to = function(L) {
                    return this.broadcast.to(L)
                }, T.prototype.in = function() {
                    return this.to.apply(null, arguments)
                }, T.prototype.dispatchEvent = function(L) {
                    for (var Q = this, ne = [], _e = arguments.length - 1; _e-- > 0;) ne[_e] = arguments[_e + 1];
                    var Te = L.type,
                        dt = this.listeners[Te];
                    if (!Array.isArray(dt)) return !1;
                    dt.forEach(function(sr) {
                        ne.length > 0 ? sr.apply(Q, ne) : sr.call(Q, L.data ? L.data : L)
                    })
                }, Object.defineProperties(T.prototype, N), T
            }(be);
            K.CONNECTING = 0, K.OPEN = 1, K.CLOSING = 2, K.CLOSED = 3;
            var he = function(T, N) {
                return new K(T, N)
            };
            he.connect = function(T, N) {
                return he(T, N)
            };
            var pe = A,
                Ae = Y,
                Pe = he;
            r.Server = pe, r.WebSocket = Ae, r.SocketIO = Pe, Object.defineProperty(r, "__esModule", {
                value: !0
            })
        })
    })(Hy, Hy.exports);
    var N0 = {
        exports: {}
    };
    (function(e) {
        (function() {
            function t(u, f) {
                var h = u.x - f.x,
                    m = u.y - f.y;
                return h * h + m * m
            }

            function r(u, f, h) {
                var m = f.x,
                    y = f.y,
                    E = h.x - m,
                    I = h.y - y;
                if (E !== 0 || I !== 0) {
                    var k = ((u.x - m) * E + (u.y - y) * I) / (E * E + I * I);
                    k > 1 ? (m = h.x, y = h.y) : k > 0 && (m += E * k, y += I * k)
                }
                return E = u.x - m, I = u.y - y, E * E + I * I
            }

            function n(u, f) {
                for (var h = u[0], m = [h], y, E = 1, I = u.length; E < I; E++) y = u[E], t(y, h) > f && (m.push(y), h = y);
                return h !== y && m.push(y), m
            }

            function s(u, f, h, m, y) {
                for (var E = m, I, k = f + 1; k < h; k++) {
                    var M = r(u[k], u[f], u[h]);
                    M > E && (I = k, E = M)
                }
                E > m && (I - f > 1 && s(u, f, I, m, y), y.push(u[I]), h - I > 1 && s(u, I, h, m, y))
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
            e.exports = c, e.exports.default = c
        })()
    })(N0);
    const L0 = N0.exports;
    class L4 {
        constructor(t, r, n) {
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
            n != null && n.color && (this.color = n.color), n != null && n.layer && (this.layer = n.layer), n != null && n.layers && (this.layers = n.layers), n != null && n.maxPoints && (this.maxPoints = n.maxPoints), n != null && n.precision && (this.precision = n.precision), n != null && n.scale && (this.scale = n.scale), n != null && n.weight && (this.weight = n.weight), n != null && n.weightScale && (this.weightScale = n.weightScale), t.width = ((o = (s = r.size) == null ? void 0 : s.width) != null ? o : this.DEFAULT_WIDTH) * this.scale.width, t.height = ((u = (c = r.size) == null ? void 0 : c.height) != null ? u : this.DEFAULT_HEIGHT) * this.scale.height, this.canvas = t, this.ctx = t.getContext("2d"), (f = this.ctx) == null || f.scale(this.scale.width, this.scale.height), this.doodle = r, this.drawLines()
        }
        addPoint(t) {
            this.points.push(t)
        }
        normalizePoint(t) {
            const r = {
                    x: t.x / this.scale.width,
                    y: t.y / this.scale.height
                },
                n = {
                    x: Math.min(Math.max(.5 * this.weight, r.x), this.canvas.width / this.scale.width - .5 * this.weight),
                    y: Math.min(Math.max(.5 * this.weight, r.y), this.canvas.height / this.scale.height - .5 * this.weight)
                };
            return {
                x: Dr.toPrecision(n.x, this.precision),
                y: Dr.toPrecision(n.y, this.precision)
            }
        }
        drawLines() {
            if (!!this.ctx) {
                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                for (let t = 0; t < this.layers; t++) Object.values(this.doodle.lines).filter(r => {
                    var n;
                    return ((n = r.layer) != null ? n : 0) === t
                }).forEach(r => this.drawLine(r)), t === this.layer && this.drawLine({
                    color: this.color,
                    index: this.doodle.lines.length,
                    layer: this.layer,
                    points: this.points,
                    weight: this.weight
                })
            }
        }
        drawLine(t) {
            !this.ctx || (this.ctx.fillStyle = t.color, this.ctx.strokeStyle = t.color, this.ctx.lineCap = "round", this.ctx.lineJoin = "round", this.ctx.lineWidth = t.weight * this.weightScale, this.ctx.beginPath(), t.points.forEach((r, n) => {
                t.points.length === 1 && n === 0 && (this.ctx.save(), this.ctx.arc(r.x, r.y, t.weight / 2, 0, 2 * Math.PI), this.ctx.fill(), this.ctx.restore(), this.ctx.beginPath()), this.ctx.lineTo(r.x, r.y)
            }), this.ctx.stroke())
        }
        renderImage(t = "image/png") {
            return this.doodle.lines.length > 0 && this.drawLines(), this.canvas.toDataURL(t)
        }
        onStart(t) {
            this.isInteracting = !0;
            const r = this.normalizePoint(t);
            this.addPoint(r), this.drawLines()
        }
        onMove(t) {
            if (!this.isInteracting) return;
            const r = this.points[this.points.length - 1];
            if (!r) {
                this.addPoint(this.normalizePoint(t));
                return
            }
            const n = .5 * this.weight,
                s = {
                    x: t.x - r.x,
                    y: t.y - r.y
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
            const t = {
                color: this.color,
                index: this.doodle.lines.length,
                layer: this.layer,
                points: L0(this.points, .5).map(r => ({
                    x: Dr.toPrecision(r.x, this.precision),
                    y: Dr.toPrecision(r.y, this.precision)
                })),
                weight: this.weight
            };
            return this.isInteracting = !1, this.points = [], t
        }
    }
    class k4 {
        constructor(t, r, n, s) {
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
            this.width = r, this.height = n, this.renderCanvas = document.createElement("canvas"), s.thickness && (this.currentThickness = s.thickness), s.color && (this.currentColor = s.color), s.maxPoints && (this.maxPoints = s.maxPoints), this.setupElements(t), this.draw()
        }
        createCanvasObject(t) {
            const r = document.createElement("canvas");
            r.width = this.width, r.height = this.height, r.style.display = "none", this.canvases.push({
                name: t,
                element: r,
                dirty: !0
            })
        }
        getCanvasObject(t) {
            const r = this.canvases.find(n => n.name === t);
            if (!r) throw new Error(`No canvas found with name ${t}`);
            return r
        }
        setupElements(t) {
            this.renderCanvas.classList.add("draw-canvas"), this.renderCanvas.width = this.width, this.renderCanvas.height = this.height, this.renderCanvas.style.width = "100%", this.renderCanvas.style.margin = "0px auto", this.renderCanvas.style.height = "100%", this.renderCanvas.style.top = "0", this.renderCanvas.style.left = "0", t.append(this.renderCanvas), this.createCanvasObject("inactive"), this.createCanvasObject("active"), this.createCanvasObject("line")
        }
        get submitting() {
            return this.isSubmitting
        }
        set submitting(t) {
            this.isSubmitting = t
        }
        get color() {
            return this.currentColor
        }
        set color(t) {
            this.currentColor = t
        }
        get thickness() {
            return this.currentThickness
        }
        set thickness(t) {
            this.currentThickness = t
        }
        get frame() {
            return this.currentFrame
        }
        set frame(t) {
            this.currentFrame = t, this.getCanvasObject("active").dirty = !0, this.getCanvasObject("inactive").dirty = !0, this.draw()
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
        onDown(t) {
            this.isSubmitting || (this.isInteracting = !0, this.addLine(t), this.getCanvasObject("line").dirty = !0, this.draw())
        }
        onMove(t) {
            if (!this.isInteracting || this.isSubmitting) return;
            const r = this.getLastDrawnPoint();
            if (!r) {
                this.addPoint(t), this.getCanvasObject("line").dirty = !0;
                return
            }
            const n = .5 * this.thickness,
                s = {
                    x: t.x - r.x,
                    y: t.y - r.y
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
        addLine(t) {
            const r = this.currentColor,
                n = this.currentThickness;
            this.currentLine = {
                color: r,
                thickness: n,
                points: []
            }, this.addPoint(t)
        }
        addPoint(t) {
            const r = this.currentLine;
            if (!r) return;
            const n = {
                x: Math.min(Math.max(.5 * r.thickness, t.x), this.renderCanvas.width - .5 * r.thickness),
                y: Math.min(Math.max(.5 * r.thickness, t.y), this.renderCanvas.height - .5 * r.thickness)
            };
            r.points.push(n)
        }
        getLastDrawnPoint() {
            return this.currentLine.points.length === 0 ? null : this.currentLine.points[this.currentLine.points.length - 1]
        }
        endLine() {
            const r = this.currentFrame === 0 ? this.lines : this.lines2,
                n = L0(this.currentLine.points);
            r.push({
                ...this.currentLine,
                points: n
            }), this.currentLine = {
                color: "#000",
                thickness: 0,
                points: []
            }
        }
        parseLines(t) {
            let r = "#000",
                n = 1;
            return t.map(s => {
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
        exportLines(t) {
            return t.map(r => ({
                ...r,
                points: r.points.map(n => `${n.x},${n.y}`).join("|")
            }))
        }
        draw() {
            const t = this.renderCanvas.getContext("2d");
            if (!t) return;
            t.clearRect(0, 0, this.width, this.height);
            const r = this.getCanvasObject("inactive");
            if (r.dirty) {
                const o = r.element.getContext("2d");
                o.clearRect(0, 0, this.width, this.height), (this.currentFrame === 0 ? this.lines2 : this.lines).forEach(u => this.drawLine(o, u)), r.dirty = !1
            }
            t.save(), t.globalAlpha = .1, t.drawImage(r.element, 0, 0), t.restore();
            const n = this.getCanvasObject("active");
            if (n.dirty) {
                const o = n.element.getContext("2d");
                o.clearRect(0, 0, this.width, this.height), (this.currentFrame === 0 ? this.lines : this.lines2).forEach(u => this.drawLine(o, u)), n.dirty = !1
            }
            t.drawImage(n.element, 0, 0);
            const s = this.getCanvasObject("line");
            if (s.dirty) {
                const o = s.element.getContext("2d");
                o.clearRect(0, 0, this.width, this.height), this.drawLine(o, this.currentLine), s.dirty = !1
            }
            t.drawImage(s.element, 0, 0)
        }
        drawLine(t, r) {
            t.strokeStyle = r.color, t.lineWidth = r.thickness, t.lineCap = "round", t.lineJoin = "round", t.fillStyle = r.color, t.strokeStyle = r.color, t.beginPath(), r.points.forEach((n, s) => {
                s === 0 && (t.save(), t.arc(n.x, n.y, r.thickness / 2, 0, 2 * Math.PI), t.fill(), t.restore(), t.beginPath(), t.moveTo(n.x, n.y)), t.lineTo(n.x, n.y)
            }), t.stroke()
        }
    }
    class P4 {
        constructor(t, r) {
            ge(this, "stageElement");
            ge(this, "width", 400);
            ge(this, "height", 400);
            ge(this, "interactCanvas");
            ge(this, "isDrawing", !1);
            ge(this, "callbacks", {});
            ge(this, "capturedPointer");
            ge(this, "onPointerDown", t => {
                if (t.preventDefault(), !t.isPrimary || this.capturedPointer) return;
                const r = this.getEventPoint(t);
                this.interactCanvas.onDown(r), this.stageElement.setPointerCapture(t.pointerId), this.capturedPointer = {
                    pointerId: t.pointerId,
                    pointerType: t.pointerType
                }
            });
            ge(this, "onPointerMove", t => {
                if (t.preventDefault(), !this.capturedPointer || !t.isPrimary || t.pointerType !== this.capturedPointer.pointerType) return;
                const r = this.getEventPoint(t);
                this.interactCanvas.onMove(r)
            });
            ge(this, "onLostPointerCapture", t => {
                if (t.preventDefault(), !this.capturedPointer || !t.isPrimary || t.pointerType !== this.capturedPointer.pointerType) return;
                this.interactCanvas.onUp(), this.emit("up");
                const r = this.capturedPointer.pointerId;
                this.stageElement.hasPointerCapture(r) && this.stageElement.releasePointerCapture(r), this.capturedPointer = void 0
            });
            ge(this, "onPointerEnd", t => {
                if (t.preventDefault(), !this.capturedPointer || !t.isPrimary || t.pointerType !== this.capturedPointer.pointerType) return;
                this.interactCanvas.onUp(), this.emit("up");
                const r = this.capturedPointer.pointerId;
                this.stageElement.hasPointerCapture(r) && this.stageElement.releasePointerCapture(r), this.capturedPointer = void 0
            });
            ge(this, "onMouseDown", t => {
                t.preventDefault();
                const r = this.getEventPoint(t);
                this.interactCanvas.onDown(r), this.isDrawing = !0
            });
            ge(this, "onMouseMove", t => {
                if (t.preventDefault(), !this.isDrawing) return;
                const r = this.getEventPoint(t);
                this.interactCanvas.onMove(r)
            });
            ge(this, "onMouseUp", t => {
                t.preventDefault(), this.interactCanvas.onUp(), this.isDrawing = !1, this.emit("up")
            });
            ge(this, "onTouchStart", t => {
                t.preventDefault();
                const r = this.getEventPoint(t.touches[0]);
                this.interactCanvas.onDown(r), this.isDrawing = !0
            });
            ge(this, "onTouchMove", t => {
                if (t.preventDefault(), !this.isDrawing) return;
                const r = this.getEventPoint(t.touches[0]);
                this.interactCanvas.onMove(r)
            });
            ge(this, "onTouchCancel", t => {
                t.preventDefault(), this.interactCanvas.onUp(), this.isDrawing = !1, this.emit("up")
            });
            ge(this, "onTouchEnd", t => {
                t.preventDefault(), this.interactCanvas.onUp(), this.isDrawing = !1, this.emit("up")
            });
            r.width && (this.width = r.width), r.height && (this.height = r.height), this.stageElement = t, this.setupElements(), this.setupEvents(), r.InteractCanvas ? this.interactCanvas = new r.InteractCanvas(t, this.width, this.height, r) : this.interactCanvas = new k4(t, this.width, this.height, r)
        }
        on(t, r) {
            this.callbacks[t] = this.callbacks[t] || [], this.callbacks[t].push(r)
        }
        off(t, r) {
            this.callbacks[t] = (this.callbacks[t] || []).filter(n => n !== r)
        }
        emit(t, ...r) {
            (this.callbacks[t] || []).map(n => n(...r))
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
        getPropValue(t, r) {
            return parseFloat(t.getPropertyValue(r)) || 0
        }
        getCanvasOffset() {
            const t = this.interactCanvas.canvasElement,
                r = window.getComputedStyle(t),
                n = t.getBoundingClientRect(),
                s = r.transform !== "none" ? r.transform.replace("matrix(", "").split(",") : ["1", "1", "1", "1"],
                o = parseFloat(s[0]),
                c = parseFloat(s[3]),
                u = (this.getPropValue(r, "border-left-width") + this.getPropValue(r, "border-right-width")) * o,
                f = (this.getPropValue(r, "border-top-width") + this.getPropValue(r, "border-bottom-width")) * c,
                h = (this.getPropValue(r, "padding-left") + this.getPropValue(r, "padding-right")) * o,
                m = (this.getPropValue(r, "padding-top") + this.getPropValue(r, "padding-bottom")) * c;
            return {
                scaleX: (n.width - u - h) / t.width,
                scaleY: (n.height - f - m) / t.height,
                offsetX: n.left + (this.getPropValue(r, "border-left-width") + this.getPropValue(r, "padding-left")) * o,
                offsetY: n.top + (this.getPropValue(r, "border-top-width") + this.getPropValue(r, "padding-top")) * c
            }
        }
        getEventPoint(t) {
            const {
                scaleX: r,
                scaleY: n,
                offsetX: s,
                offsetY: o
            } = this.getCanvasOffset(), c = t.clientX, u = t.clientY;
            let f = (c - s) / r,
                h = (u - o) / n;
            return f = Math.max(0, Math.min(this.width, f)), h = Math.max(0, Math.min(this.height, h)), f = Math.round(f), h = Math.round(h), {
                x: f,
                y: h
            }
        }
    }
    class Vy {
        static getPromptGuess(t, r) {
            var n, s, o;
            if ((n = t.player) != null && n.prompt) return t.player.prompt;
            if ((s = t.audience) != null && s.prompt) return t.audience.prompt;
            if ((o = t.audiencePlayer) != null && o.prompt) return t.audiencePlayer.prompt;
            if (t.prompt) return t.prompt;
            if (r === "range-game") return this.getRangeGameGuess(t)
        }
        static getRangeGameGuess(t) {
            var r, n, s, o, c, u, f, h;
            if ((n = (r = t.player) == null ? void 0 : r.content) != null && n.text) return (o = (s = t.player) == null ? void 0 : s.content) == null ? void 0 : o.text;
            if ((u = (c = t.content) == null ? void 0 : c.content) != null && u.text) return (h = (f = t.content) == null ? void 0 : f.content) == null ? void 0 : h.text
        }
        static async send(t) {
            const r = {
                appTag: t.room.appTag,
                state: {
                    appTag: t.room.appTag,
                    name: t.name,
                    role: t.role,
                    code: t.room.code,
                    message: t.message,
                    vibe: t.vibe,
                    state: t.values
                }
            };
            try {
                const n = await this.sendToEcast(r);
                await this.sendToSlack(n, t)
            } catch (n) {
                console.error(n)
            }
        }
        static async sendToEcast(t) {
            return (await (await fetch("https://ecast.jackboxgames.com/api/v2/controller/state", {
                method: "POST",
                body: JSON.stringify(t)
            })).json()).body.url
        }
        static async sendToSlack(t, r) {
            var y;
            const n = kd(r.room.appTag),
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
                    BASE_URL: "https://bundles.jackbox.tv/main/pp8-survey-bomb/",
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
                u = `${(y=n==null?void 0:n.name)!=null?y:r.room.appTag} :${r.room.appTag}: 

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
                        url: t,
                        text: {
                            type: "plain_text",
                            text: "View Game State JSON",
                            emoji: !0
                        }
                    }]
                }]
            };
            try {
                const I = await (await fetch(s, {
                    method: "POST",
                    body: JSON.stringify(m)
                })).text();
                Pd("[Feedback] sendToSlack", I)
            } catch (E) {
                console.error("[Feedback] sendToSlack", E)
            }
        }
    }
    const x4 = {
            BACK: "Back",
            CANCEL: "Cancel",
            CLOSE: "Close",
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
        D4 = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "prompts hidden on players\u2019 devices",
                VISIBILITY_CONTROLLER_ON: "prompts shown on players\u2019 devices",
                VISIBILITY_SCREEN_OFF: "prompts hidden on game screen",
                VISIBILITY_SCREEN_ON: "prompts shown on game screen"
            }
        },
        M4 = {
            DISCONNECTED: "You have been disconnected.",
            DRAWING_NOTHING: "You have to draw something!",
            PLAYER_KICKED: "You have been kicked from the game by a moderator.",
            ROOM_DESTROYED: "Thanks for playing!",
            ROOM_DISCONNECTED: "Disconnected",
            TEXT_NAUGHTY: "I\u2019m afraid you can\u2019t write that. Please be respectful of other players.",
            TEXT_NOTHING: "You can\u2019t enter nothing!",
            TITLE: "Error"
        },
        U4 = "LOADING",
        F4 = {
            JOINED_COUNT: "x | {count} of {maxPlayers} players joined | {count} of {maxPlayers} players joined",
            PLAYERS_NEEDED: "x | {count} player needed to start | {count} players needed to start",
            WAITING_FOR_VIP: "Waiting for {name} to start the game",
            WAITING_FOR_GAMEPAD: "Waiting for the game to start",
            GAME_STARTING: "Game is starting",
            BUTTON_START: "Press to Start",
            BUTTON_CANCEL: "Press to Cancel"
        },
        B4 = {
            GALLERY_LINK: "Visit the Gallery",
            PLAY_AGAIN: "Play again?",
            BUTTON_SAME_PLAYERS: "Same Players",
            BUTTON_NEW_PLAYERS: "New Players"
        },
        j4 = {
            AND: "AND",
            OR: "OR"
        },
        G4 = {
            BUTTON_SKIP: "Skip",
            BUTTON_NEXT: "Next",
            BUTTON_DONE: "Let\u2019s Go!"
        },
        W4 = {
            NAME: "AUDIENCE"
        },
        K4 = {
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
        H4 = {
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
        V4 = {
            ACTION: x4,
            ALT: D4,
            ERROR: M4,
            LOADING: U4,
            LOBBY: F4,
            POST_GAME: B4,
            SEPARATOR: j4,
            TUTORIAL: G4,
            AUDIENCE: W4,
            UGC: K4,
            TOAST: H4
        },
        q4 = {
            BACK: "Retour",
            CANCEL: "Annuler",
            CLOSE: "Fermer",
            CREATE: "Cr\xE9er",
            DELETE: "Supprimer",
            DONE: "Termin\xE9",
            EDIT: "Modifier",
            OK: "OK",
            NO: "Non",
            PLAY: "Jouer",
            PUBLISH: "Publier",
            RESET: "R\xE9initialiser",
            SUBMIT: "Envoyer",
            TRY_AGAIN: "R\xE9essayer",
            YES: "Oui"
        },
        Y4 = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "sujets non affich\xE9s sur les appareils des joueurs",
                VISIBILITY_CONTROLLER_ON: "sujets affich\xE9s sur les appareils des joueurs",
                VISIBILITY_SCREEN_OFF: "sujets non affich\xE9s sur l'\xE9cran de jeu",
                VISIBILITY_SCREEN_ON: "sujets affich\xE9s sur l'\xE9cran de jeu"
            }
        },
        z4 = {
            DISCONNECTED: "Vous avez \xE9t\xE9 d\xE9connect\xE9.",
            DRAWING_NOTHING: "Vous devez dessiner quelque chose\xA0!",
            ROOM_DESTROYED: "Merci d'avoir jou\xE9\xA0!",
            ROOM_DISCONNECTED: "D\xE9connexion",
            TEXT_NAUGHTY: "Je crains que vous ne puissiez pas \xE9crire \xE7a. Soyez respectueux des autres joueurs.",
            TEXT_NOTHING: "Vous ne pouvez rien entrer\xA0!",
            TITLE: "Erreur"
        },
        X4 = {
            JOINED_COUNT: "x | {count} joueur sur {maxPlayers} \xE0 rejoint la partie | {count} joueurs sur {maxPlayers} ont rejoint la partie",
            PLAYERS_NEEDED: "x | {count} joueur n\xE9cessaire pour commencer | {count} joueurs n\xE9cessaires pour commencer",
            WAITING_FOR_VIP: "En attente de {name} pour commencer la partie",
            WAITING_FOR_GAMEPAD: "En attente du d\xE9but de la partie",
            GAME_STARTING: "La partie commence",
            BUTTON_START: "Appuyer pour commencer",
            BUTTON_CANCEL: "Appuyer pour annuler"
        },
        J4 = {
            GALLERY_LINK: "Visiter la galerie",
            PLAY_AGAIN: "Rejouer\xA0?",
            BUTTON_SAME_PLAYERS: "Les m\xEAmes joueurs",
            BUTTON_NEW_PLAYERS: "De nouveaux joueurs"
        },
        Z4 = {
            AND: "ET",
            OR: "OU"
        },
        Q4 = {
            BUTTON_SKIP: "Passer",
            BUTTON_NEXT: "Suivant",
            BUTTON_DONE: "Allons-y\xA0!"
        },
        ej = {
            NAME: "SPECTATEURS"
        },
        tj = {
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
        rj = {
            BROADCASTER: {
                SUBTEXT: "La connexion de votre compte \xE0 l'extension Twitch Jackbox Audience Kit a r\xE9ussi.",
                WARNING: "LE PARAM\xC8TRE 'PUBLIC' N'EST PAS ACTIV\xC9 DANS CETTE SALLE."
            },
            RECONNECTED: {
                TEXT: "RECONNECT\xC9",
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
        nj = {
            ACTION: q4,
            ALT: Y4,
            ERROR: z4,
            LOBBY: X4,
            POST_GAME: J4,
            SEPARATOR: Z4,
            TUTORIAL: Q4,
            AUDIENCE: ej,
            UGC: tj,
            TOAST: rj
        },
        ij = {
            BACK: "Indietro",
            CANCEL: "Annulla",
            CLOSE: "Chiuda",
            CREATE: "Crea",
            DELETE: "Elimina",
            DONE: "Fine",
            EDIT: "Modifica",
            OK: "OK",
            NO: "No",
            PLAY: "Gioca",
            PUBLISH: "Pubblica",
            RESET: "Reset",
            SUBMIT: "Invia",
            TRY_AGAIN: "Riprova",
            YES: "S\xEC"
        },
        sj = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "definizioni nascoste sui dispositivi dei giocatori",
                VISIBILITY_CONTROLLER_ON: "definizioni visualizzate sui dispositivi dei giocatori",
                VISIBILITY_SCREEN_OFF: "definizioni nascoste sullo schermo di gioco",
                VISIBILITY_SCREEN_ON: "definizioni visualizzate sullo schermo di gioco"
            }
        },
        aj = {
            DISCONNECTED: "\xC8 stata effettuata la disconnessione.",
            DRAWING_NOTHING: "Devi disegnare qualcosa!",
            ROOM_DESTROYED: "Grazie per aver scelto di giocare con noi!",
            ROOM_DISCONNECTED: "Disconnessione effettuata",
            TEXT_NAUGHTY: "Purtroppo non puoi scrivere questa cosa. Abbi rispetto per gli altri giocatori.",
            TEXT_NOTHING: "Devi per forza inserire qualcosa!",
            TITLE: "Errore"
        },
        oj = {
            JOINED_COUNT: "x | Sta partecipando {count} giocatore su {maxPlayers} | Stanno partecipando {count} giocatori su {maxPlayers}",
            PLAYERS_NEEDED: "x | Manca {count} giocatore per iniziare | Mancano {count} giocatori per iniziare",
            WAITING_FOR_VIP: "In attesa di {name} per iniziare la partita",
            WAITING_FOR_GAMEPAD: "In attesa d'iniziare la partita",
            GAME_STARTING: "La partita sta per iniziare",
            BUTTON_START: "Premi per avviare",
            BUTTON_CANCEL: "Premi per annullare"
        },
        cj = {
            GALLERY_LINK: "Visita la galleria",
            PLAY_AGAIN: "Vuoi giocare di nuovo?",
            BUTTON_SAME_PLAYERS: "Stessi giocatori",
            BUTTON_NEW_PLAYERS: "Nuovi giocatori"
        },
        lj = {
            AND: "E",
            OR: "O"
        },
        uj = {
            BUTTON_SKIP: "Salta",
            BUTTON_NEXT: "Avanti",
            BUTTON_DONE: "Iniziamo!"
        },
        fj = {
            NAME: "PUBBLICO"
        },
        dj = {
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
                TOS: "Condividendo i contenuti, accetti i nostri [tos]Condizioni del servizio[/tos]",
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
        hj = {
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
                    SUBTEXT: "Tentativo di ricollegamento in corso ({attempt} di 5)"
                },
                GAME: {
                    TEXT: "CONNESSIONE AL GIOCO INTERROTTA",
                    SUBTEXT: "Resta in attesa mentre proviamo a ricollegarci"
                }
            }
        },
        pj = {
            ACTION: ij,
            ALT: sj,
            ERROR: aj,
            LOBBY: oj,
            POST_GAME: cj,
            SEPARATOR: lj,
            TUTORIAL: uj,
            AUDIENCE: fj,
            UGC: dj,
            TOAST: hj
        },
        gj = {
            BACK: "Zur\xFCck",
            CANCEL: "Abbrechen",
            CLOSE: "Schlie\xDFen",
            CREATE: "Erstellen",
            DELETE: "L\xF6schen",
            DONE: "Fertig",
            EDIT: "Bearbeiten",
            OK: "OK",
            NO: "Nein",
            PLAY: "Spielen",
            PUBLISH: "Ver\xF6ffentlichen",
            RESET: "Neu starten",
            SUBMIT: "Abschicken",
            TRY_AGAIN: "Erneut versuchen",
            YES: "Ja"
        },
        mj = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "Prompts auf Spielerger\xE4ten verborgen",
                VISIBILITY_CONTROLLER_ON: "Prompts auf Spielerger\xE4ten angezeigt",
                VISIBILITY_SCREEN_OFF: "Prompts auf Spielbildschirm verborgen",
                VISIBILITY_SCREEN_ON: "Prompts auf Spielbildschirm angezeigt"
            }
        },
        vj = {
            DISCONNECTED: "Deine Verbindung wurde getrennt.",
            DRAWING_NOTHING: "Du musst irgendwas zeichnen!",
            ROOM_DESTROYED: "Danke f\xFCrs Spielen!",
            ROOM_DISCONNECTED: "Verbindung getrennt",
            TEXT_NAUGHTY: "Das kannst du leider nicht schreiben. Bitte nimm R\xFCcksicht auf deine Mitspieler.",
            TEXT_NOTHING: "Du musst etwas eingeben!",
            TITLE: "Fehler"
        },
        yj = {
            JOINED_COUNT: "x | {count} von {maxPlayers} Spielern sind beigetreten | {count} von {maxPlayers} Spielern sind beigetreten",
            PLAYERS_NEEDED: "x | {count} Spieler zum Starten ben\xF6tigt | {count} Spieler zum Starten ben\xF6tigt",
            WAITING_FOR_VIP: "Warten, bis {name} das Spiel startet",
            WAITING_FOR_GAMEPAD: "Warten, bis das Spiel startet",
            GAME_STARTING: "Das Spiel beginnt",
            BUTTON_START: "Zum Starten dr\xFCcken",
            BUTTON_CANCEL: "Zum Abbrechen dr\xFCcken"
        },
        _j = {
            GALLERY_LINK: "Galerie besuchen",
            PLAY_AGAIN: "Erneut spielen?",
            BUTTON_SAME_PLAYERS: "Selbe Spieler",
            BUTTON_NEW_PLAYERS: "Neue Spieler"
        },
        bj = {
            AND: "UND",
            OR: "ODER"
        },
        Ej = {
            BUTTON_SKIP: "\xDCberspringen",
            BUTTON_NEXT: "Weiter",
            BUTTON_DONE: "Los geht's!"
        },
        Tj = {
            NAME: "PUBLIKUM"
        },
        Sj = {
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
        wj = {
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
        Oj = {
            ACTION: gj,
            ALT: mj,
            ERROR: vj,
            LOBBY: yj,
            POST_GAME: _j,
            SEPARATOR: bj,
            TUTORIAL: Ej,
            AUDIENCE: Tj,
            UGC: Sj,
            TOAST: wj
        },
        Ij = {
            BACK: "Atr\xE1s",
            CANCEL: "Cancelar",
            CLOSE: "Cerrar",
            CREATE: "Crear",
            DELETE: "Borrar",
            DONE: "Hecho",
            EDIT: "Editar",
            OK: "Aceptar",
            NO: "No",
            PLAY: "Jugar",
            PUBLISH: "Publicar",
            RESET: "Reiniciar",
            SUBMIT: "Enviar",
            TRY_AGAIN: "Volver a intentarlo",
            YES: "S\xED"
        },
        Cj = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "los enunciados no se muestran en el dispositivo del jugador",
                VISIBILITY_CONTROLLER_ON: "los enunciados se muestran en el dispositivo del jugador",
                VISIBILITY_SCREEN_OFF: "los enunciados no se muestran en la pantalla",
                VISIBILITY_SCREEN_ON: "los enunciados se muestran en la pantalla"
            }
        },
        $j = {
            DISCONNECTED: "Te has desconectado.",
            DRAWING_NOTHING: "\xA1Tienes que dibujar algo!",
            ROOM_DESTROYED: "\xA1Gracias por jugar!",
            ROOM_DISCONNECTED: "Desconectado",
            TEXT_NAUGHTY: "Lo siento, no puedes escribir eso. Hay que ser respetuoso con los dem\xE1s jugadores.",
            TEXT_NOTHING: "Tienes que escribir algo",
            TITLE: "Error"
        },
        Aj = {
            JOINED_COUNT: "x | Se ha unido {count} de {maxPlayers} jugadores | Se han unido {count} de {maxPlayers} jugadores",
            PLAYERS_NEEDED: "x | Se necesita {count} jugador para empezar | Se necesitan {count} jugadores para empezar",
            WAITING_FOR_VIP: "Esperando a que {name} inicie la partida",
            WAITING_FOR_GAMEPAD: "Esperando a que empiece la partida",
            GAME_STARTING: "La partida va a empezar",
            BUTTON_START: "Pulsa para empezar",
            BUTTON_CANCEL: "Pulsa para cancelar"
        },
        Rj = {
            GALLERY_LINK: "Visita la galer\xEDa",
            PLAY_AGAIN: "\xBFJugar otra vez?",
            BUTTON_SAME_PLAYERS: "Los mismos jugadores",
            BUTTON_NEW_PLAYERS: "Otros jugadores"
        },
        Nj = {
            AND: "Y",
            OR: "O"
        },
        Lj = {
            BUTTON_SKIP: "Omitir",
            BUTTON_NEXT: "Siguiente",
            BUTTON_DONE: "\xA1Vamos!"
        },
        kj = {
            NAME: "P\xDABLICO"
        },
        Pj = {
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
        xj = {
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
        Dj = {
            ACTION: Ij,
            ALT: Cj,
            ERROR: $j,
            LOBBY: Aj,
            POST_GAME: Rj,
            SEPARATOR: Nj,
            TUTORIAL: Lj,
            AUDIENCE: kj,
            UGC: Pj,
            TOAST: xj
        },
        Mj = {
            BACK: "Volver",
            CANCEL: "Cancelar",
            CLOSE: "Cerrar",
            CREATE: "Crear",
            DELETE: "Borrar",
            DONE: "Hecho",
            EDIT: "Editar",
            OK: "Aceptar",
            NO: "No",
            PLAY: "Jugar",
            PUBLISH: "Publicar",
            RESET: "Reiniciar",
            SUBMIT: "Enviar",
            TRY_AGAIN: "Volver a intentarlo",
            YES: "S\xED"
        },
        Uj = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "indicaciones ocultas en los dispositivos de los jugadores",
                VISIBILITY_CONTROLLER_ON: "indicaciones se muestran en los dispositivos de los jugadores",
                VISIBILITY_SCREEN_OFF: "indicaciones ocultas en la pantalla del juego",
                VISIBILITY_SCREEN_ON: "indicaciones se muestran en la pantalla del juego"
            }
        },
        Fj = {
            DISCONNECTED: "Te has desconectado.",
            DRAWING_NOTHING: "\xA1Tienes que dibujar algo!",
            ROOM_DESTROYED: "\xA1Gracias por jugar!",
            ROOM_DISCONNECTED: "Desconectado",
            TEXT_NAUGHTY: "Lo siento, no puedes escribir eso. Seamos respetuosos con los dem\xE1s jugadores.",
            TEXT_NOTHING: "Tienes que escribir algo",
            TITLE: "Error"
        },
        Bj = {
            JOINED_COUNT: "x | Se ha unido {count} de {maxPlayers} jugadores | Se han unido {count} de {maxPlayers} jugadores",
            PLAYERS_NEEDED: "x | Se necesita {count} jugador para empezar | Se necesitan {count} jugadores para empezar",
            WAITING_FOR_VIP: "Esperando a que {name} inicie la partida",
            WAITING_FOR_GAMEPAD: "Esperando a que empiece la partida",
            GAME_STARTING: "La partida va a empezar",
            BUTTON_START: "Pulsa para empezar",
            BUTTON_CANCEL: "Pulsa para cancelar"
        },
        jj = {
            GALLERY_LINK: "Visita la galer\xEDa",
            PLAY_AGAIN: "\xBFJugar otra vez?",
            BUTTON_SAME_PLAYERS: "Los mismos jugadores",
            BUTTON_NEW_PLAYERS: "Otros jugadores"
        },
        Gj = {
            AND: "Y",
            OR: "O"
        },
        Wj = {
            BUTTON_SKIP: "Omitir",
            BUTTON_NEXT: "Siguiente",
            BUTTON_DONE: "\xA1Vamos!"
        },
        Kj = {
            NAME: "P\xDABLICO"
        },
        Hj = {
            EPISODE_REPORT: "Denunciar episodio",
            EPISODE_UNLOAD: "Retirar episodio",
            EPISODE_VIEW_AUTHOR: "Ver autor",
            EPISODES_LOAD: "Carga un episodio por ID:",
            EPISODES_MENU: "Men\xFA de episodios",
            EPISODES_SELECT: "O selecciona un episodio:",
            EPISODES_WARNING: "Aviso: El contenido de los usuarios no tiene clasificaci\xF3n de edad",
            INSTRUCTION: {
                CREATE_TITLE: "Lo primero es que debes hacer es introducir un nombre para el episodio que contendr\xE1 todas sus indicaciones y pulsar crear.",
                LOAD: "\xBFcrear o cargar?",
                PUBLISH: "publica tu episodio",
                TITLE: "nombra tu episodio",
                TOGGLE_VISIBILITY: "pulsa para mostrar/ocultar las indicaciones",
                WRITE: "escribe tus indicaciones"
            },
            WARNING: {
                DELETE: "\xBFEst\xE1s seguro de que quieres borrar este episodio?",
                TOS: "Al compartir contenido, aceptas nuestros [tos]T\xE9rminos de servicio[/tos]",
                TOS_AGREE: "aceptar y compartir"
            },
            BACK_TO_EPISODES: "volver a los episodios",
            BACK_TO_MENU: "volver al men\xFA",
            CREATE_NEW_EPISODE: "crear un nuevo episodio",
            PREVIOUS_EPISODES: "episodios anteriores",
            PROMPT_ADD: "a\xF1adir indicaci\xF3n",
            PROMPT_PLACEHOLDER: "introducir una indicaci\xF3n",
            PROMPTS_COUNT_HIDDEN: "({count} oculto)",
            TITLE_PLACEHOLDER: "introducir un t\xEDtulo"
        },
        Vj = {
            BROADCASTER: {
                SUBTEXT: "Has conectado correctamente tu cuenta a la extensi\xF3n para Twitch del kit para p\xFAblico de Jackbox.",
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
                    SUBTEXT: "Por favor, espera mientras intentamos restablecer la conexi\xF3n."
                }
            }
        },
        qj = {
            ACTION: Mj,
            ALT: Uj,
            ERROR: Fj,
            LOBBY: Bj,
            POST_GAME: jj,
            SEPARATOR: Gj,
            TUTORIAL: Wj,
            AUDIENCE: Kj,
            UGC: Hj,
            TOAST: Vj
        },
        Yj = {
            en: V4,
            fr: nj,
            it: pj,
            de: Oj,
            es: Dj,
            "es-XL": qj
        },
        zj = Je({
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
                    var t, r, n;
                    let e = 320;
                    return (t = this.player.doodle.size) != null && t.width && (e = this.player.doodle.size.width), e * ((n = (r = this.canvasOptions.scale) == null ? void 0 : r.width) != null ? n : 1)
                },
                pointerBoxHeight() {
                    var t, r, n;
                    let e = 320;
                    return (t = this.player.doodle.size) != null && t.height && (e = this.player.doodle.size.height), e * ((n = (r = this.canvasOptions.scale) == null ? void 0 : r.height) != null ? n : 1)
                }
            },
            watch: {
                canvasOptions: function(t) {
                    var r, n, s, o, c, u, f;
                    !this.canvas || (this.canvas.color = (r = t.color) != null ? r : "#000000", this.canvas.layer = (n = t.layer) != null ? n : 0, this.canvas.layers = (s = t.layers) != null ? s : 1, this.canvas.maxPoints = (o = t.maxPoints) != null ? o : Number.MAX_SAFE_INTEGER, this.canvas.precision = (c = t.precision) != null ? c : 2, this.canvas.scale = (u = t.scale) != null ? u : {
                        width: 1,
                        height: 1
                    }, this.canvas.weight = (f = t.weight) != null ? f : 4)
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
                const e = gi();
                if (!(e != null && e.appContext.directives.pointerbox)) throw new Error("Doodle.vue relies on PointerBoxPlugin. Please install it inside your main.ts file.")
            },
            mounted() {
                this.createCanvas()
            },
            methods: {
                createCanvas() {
                    const e = this.$refs.canvas;
                    this.canvas = Bn(new L4(e, this.player.doodle, this.canvasOptions))
                },
                onPointerBoxStart(e) {
                    if (!this.canvas) return;
                    const t = {
                        x: e.detail.translations.doodleCanvas.x,
                        y: e.detail.translations.doodleCanvas.y
                    };
                    this.canvas.onStart(t)
                },
                onPointerBoxMove(e) {
                    if (!this.canvas) return;
                    const t = {
                        x: e.detail.translations.doodleCanvas.x,
                        y: e.detail.translations.doodleCanvas.y
                    };
                    this.canvas.onMove(t)
                },
                async onPointerBoxEnd() {
                    if (!this.canvas) return;
                    const e = this.canvas.onEnd();
                    if (e) try {
                        await this.$ecast.strokeDoodle(this.player.doodle.key, e)
                    } catch (t) {
                        this.$handleEcastError(t)
                    }
                },
                async onSubmit() {
                    this.isSubmitting = !0;
                    try {
                        await this.$ecast.lock(this.player.doodle.key)
                    } catch (e) {
                        this.isSubmitting = !1, this.$handleEcastError(e)
                    }
                },
                async onUndo() {
                    if (!!this.canvas) {
                        this.isUndoing = !0;
                        try {
                            await this.$ecast.undoDoodle(this.player.doodle.key)
                        } catch (e) {
                            this.$handleEcastError(e)
                        } finally {
                            this.isUndoing = !1
                        }
                    }
                }
            }
        }),
        Xj = {
            class: "doodle"
        },
        Jj = {
            ref: "canvas"
        },
        Zj = ["disabled"],
        Qj = ["disabled"];

    function eG(e, t, r, n, s, o) {
        const c = Kt("pointerbox-translate"),
            u = Kt("pointerbox"),
            f = Kt("t");
        return F(), q("div", Xj, [Ve((F(), q("div", {
            class: "stage",
            "onPointerbox:start": t[0] || (t[0] = (...h) => e.onPointerBoxStart && e.onPointerBoxStart(...h)),
            "onPointerbox:move": t[1] || (t[1] = (...h) => e.onPointerBoxMove && e.onPointerBoxMove(...h)),
            "onPointerbox:end": t[2] || (t[2] = (...h) => e.onPointerBoxEnd && e.onPointerBoxEnd(...h))
        }, [Ve(z("canvas", Jj, null, 512), [
            [c, {
                id: "doodleCanvas",
                width: e.pointerBoxWidth,
                height: e.pointerBoxHeight
            }]
        ])], 32)), [
            [u]
        ]), e.hideUndo ? Oe("", !0) : Ve((F(), q("button", {
            key: 0,
            class: "doodle-action undo",
            disabled: !e.canSubmit,
            onClick: t[3] || (t[3] = Or((...h) => e.onUndo && e.onUndo(...h), ["prevent"]))
        }, null, 8, Zj)), [
            [f, "ACTION.UNDO"]
        ]), e.hideSubmit ? Oe("", !0) : Ve((F(), q("button", {
            key: 1,
            class: "doodle-action submit",
            disabled: !e.canSubmit,
            onClick: t[4] || (t[4] = Or((...h) => e.onSubmit && e.onSubmit(...h), ["prevent"]))
        }, null, 8, Qj)), [
            [f, "ACTION.SUBMIT"]
        ])])
    }
    const tG = qe(zj, [
        ["render", eG]
    ]);
    var xd = {
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
    (function(e, t) {
        (function() {
            var r, n = "4.17.21",
                s = 200,
                o = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",
                c = "Expected a function",
                u = "Invalid `variable` option passed into `_.template`",
                f = "__lodash_hash_undefined__",
                h = 500,
                m = "__lodash_placeholder__",
                y = 1,
                E = 2,
                I = 4,
                k = 1,
                M = 2,
                j = 1,
                C = 2,
                H = 4,
                X = 8,
                W = 16,
                G = 32,
                Z = 64,
                oe = 128,
                ce = 256,
                ue = 512,
                $e = 30,
                Ce = "...",
                fe = 800,
                Ie = 16,
                U = 1,
                ie = 2,
                de = 3,
                be = 1 / 0,
                ve = 9007199254740991,
                Se = 17976931348623157e292,
                Me = 0 / 0,
                Ge = 4294967295,
                nt = Ge - 1,
                Rt = Ge >>> 1,
                Cr = [
                    ["ary", oe],
                    ["bind", j],
                    ["bindKey", C],
                    ["curry", X],
                    ["curryRight", W],
                    ["flip", ue],
                    ["partial", G],
                    ["partialRight", Z],
                    ["rearg", ce]
                ],
                ir = "[object Arguments]",
                vr = "[object Array]",
                ct = "[object AsyncFunction]",
                wt = "[object Boolean]",
                lt = "[object Date]",
                Mt = "[object DOMException]",
                qt = "[object Error]",
                Ut = "[object Function]",
                g = "[object GeneratorFunction]",
                p = "[object Map]",
                w = "[object Number]",
                D = "[object Null]",
                B = "[object Object]",
                Y = "[object Promise]",
                le = "[object Proxy]",
                se = "[object RegExp]",
                re = "[object Set]",
                A = "[object String]",
                K = "[object Symbol]",
                he = "[object Undefined]",
                pe = "[object WeakMap]",
                Ae = "[object WeakSet]",
                Pe = "[object ArrayBuffer]",
                O = "[object DataView]",
                T = "[object Float32Array]",
                N = "[object Float64Array]",
                S = "[object Int8Array]",
                L = "[object Int16Array]",
                Q = "[object Int32Array]",
                ne = "[object Uint8Array]",
                _e = "[object Uint8ClampedArray]",
                Te = "[object Uint16Array]",
                dt = "[object Uint32Array]",
                sr = /\b__p \+= '';/g,
                xe = /\b(__p \+=) '' \+/g,
                fa = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
                Hp = /&(?:amp|lt|gt|quot|#39);/g,
                Vp = /[&<>"']/g,
                DS = RegExp(Hp.source),
                MS = RegExp(Vp.source),
                US = /<%-([\s\S]+?)%>/g,
                FS = /<%([\s\S]+?)%>/g,
                qp = /<%=([\s\S]+?)%>/g,
                BS = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                jS = /^\w*$/,
                GS = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                ru = /[\\^$.*+?()[\]{}|]/g,
                WS = RegExp(ru.source),
                nu = /^\s+/,
                KS = /\s/,
                HS = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
                VS = /\{\n\/\* \[wrapped with (.+)\] \*/,
                qS = /,? & /,
                YS = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
                zS = /[()=,{}\[\]\/\s]/,
                XS = /\\(\\)?/g,
                JS = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
                Yp = /\w*$/,
                ZS = /^[-+]0x[0-9a-f]+$/i,
                QS = /^0b[01]+$/i,
                ew = /^\[object .+?Constructor\]$/,
                tw = /^0o[0-7]+$/i,
                rw = /^(?:0|[1-9]\d*)$/,
                nw = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
                To = /($^)/,
                iw = /['\n\r\u2028\u2029\\]/g,
                So = "\\ud800-\\udfff",
                sw = "\\u0300-\\u036f",
                aw = "\\ufe20-\\ufe2f",
                ow = "\\u20d0-\\u20ff",
                zp = sw + aw + ow,
                Xp = "\\u2700-\\u27bf",
                Jp = "a-z\\xdf-\\xf6\\xf8-\\xff",
                cw = "\\xac\\xb1\\xd7\\xf7",
                lw = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
                uw = "\\u2000-\\u206f",
                fw = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
                Zp = "A-Z\\xc0-\\xd6\\xd8-\\xde",
                Qp = "\\ufe0e\\ufe0f",
                eg = cw + lw + uw + fw,
                iu = "['\u2019]",
                dw = "[" + So + "]",
                tg = "[" + eg + "]",
                wo = "[" + zp + "]",
                rg = "\\d+",
                hw = "[" + Xp + "]",
                ng = "[" + Jp + "]",
                ig = "[^" + So + eg + rg + Xp + Jp + Zp + "]",
                su = "\\ud83c[\\udffb-\\udfff]",
                pw = "(?:" + wo + "|" + su + ")",
                sg = "[^" + So + "]",
                au = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                ou = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                us = "[" + Zp + "]",
                ag = "\\u200d",
                og = "(?:" + ng + "|" + ig + ")",
                gw = "(?:" + us + "|" + ig + ")",
                cg = "(?:" + iu + "(?:d|ll|m|re|s|t|ve))?",
                lg = "(?:" + iu + "(?:D|LL|M|RE|S|T|VE))?",
                ug = pw + "?",
                fg = "[" + Qp + "]?",
                mw = "(?:" + ag + "(?:" + [sg, au, ou].join("|") + ")" + fg + ug + ")*",
                vw = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
                yw = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
                dg = fg + ug + mw,
                _w = "(?:" + [hw, au, ou].join("|") + ")" + dg,
                bw = "(?:" + [sg + wo + "?", wo, au, ou, dw].join("|") + ")",
                Ew = RegExp(iu, "g"),
                Tw = RegExp(wo, "g"),
                cu = RegExp(su + "(?=" + su + ")|" + bw + dg, "g"),
                Sw = RegExp([us + "?" + ng + "+" + cg + "(?=" + [tg, us, "$"].join("|") + ")", gw + "+" + lg + "(?=" + [tg, us + og, "$"].join("|") + ")", us + "?" + og + "+" + cg, us + "+" + lg, yw, vw, rg, _w].join("|"), "g"),
                ww = RegExp("[" + ag + So + zp + Qp + "]"),
                Ow = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
                Iw = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
                Cw = -1,
                Tt = {};
            Tt[T] = Tt[N] = Tt[S] = Tt[L] = Tt[Q] = Tt[ne] = Tt[_e] = Tt[Te] = Tt[dt] = !0, Tt[ir] = Tt[vr] = Tt[Pe] = Tt[wt] = Tt[O] = Tt[lt] = Tt[qt] = Tt[Ut] = Tt[p] = Tt[w] = Tt[B] = Tt[se] = Tt[re] = Tt[A] = Tt[pe] = !1;
            var yt = {};
            yt[ir] = yt[vr] = yt[Pe] = yt[O] = yt[wt] = yt[lt] = yt[T] = yt[N] = yt[S] = yt[L] = yt[Q] = yt[p] = yt[w] = yt[B] = yt[se] = yt[re] = yt[A] = yt[K] = yt[ne] = yt[_e] = yt[Te] = yt[dt] = !0, yt[qt] = yt[Ut] = yt[pe] = !1;
            var $w = {
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
                Aw = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;"
                },
                Rw = {
                    "&amp;": "&",
                    "&lt;": "<",
                    "&gt;": ">",
                    "&quot;": '"',
                    "&#39;": "'"
                },
                Nw = {
                    "\\": "\\",
                    "'": "'",
                    "\n": "n",
                    "\r": "r",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                },
                Lw = parseFloat,
                kw = parseInt,
                hg = typeof Dt == "object" && Dt && Dt.Object === Object && Dt,
                Pw = typeof self == "object" && self && self.Object === Object && self,
                Zt = hg || Pw || Function("return this")(),
                lu = t && !t.nodeType && t,
                Ci = lu && !0 && e && !e.nodeType && e,
                pg = Ci && Ci.exports === lu,
                uu = pg && hg.process,
                jr = function() {
                    try {
                        var P = Ci && Ci.require && Ci.require("util").types;
                        return P || uu && uu.binding && uu.binding("util")
                    } catch {}
                }(),
                gg = jr && jr.isArrayBuffer,
                mg = jr && jr.isDate,
                vg = jr && jr.isMap,
                yg = jr && jr.isRegExp,
                _g = jr && jr.isSet,
                bg = jr && jr.isTypedArray;

            function $r(P, J, V) {
                switch (V.length) {
                    case 0:
                        return P.call(J);
                    case 1:
                        return P.call(J, V[0]);
                    case 2:
                        return P.call(J, V[0], V[1]);
                    case 3:
                        return P.call(J, V[0], V[1], V[2])
                }
                return P.apply(J, V)
            }

            function xw(P, J, V, Ee) {
                for (var Ue = -1, st = P == null ? 0 : P.length; ++Ue < st;) {
                    var Bt = P[Ue];
                    J(Ee, Bt, V(Bt), P)
                }
                return Ee
            }

            function Gr(P, J) {
                for (var V = -1, Ee = P == null ? 0 : P.length; ++V < Ee && J(P[V], V, P) !== !1;);
                return P
            }

            function Dw(P, J) {
                for (var V = P == null ? 0 : P.length; V-- && J(P[V], V, P) !== !1;);
                return P
            }

            function Eg(P, J) {
                for (var V = -1, Ee = P == null ? 0 : P.length; ++V < Ee;)
                    if (!J(P[V], V, P)) return !1;
                return !0
            }

            function Wn(P, J) {
                for (var V = -1, Ee = P == null ? 0 : P.length, Ue = 0, st = []; ++V < Ee;) {
                    var Bt = P[V];
                    J(Bt, V, P) && (st[Ue++] = Bt)
                }
                return st
            }

            function Oo(P, J) {
                var V = P == null ? 0 : P.length;
                return !!V && fs(P, J, 0) > -1
            }

            function fu(P, J, V) {
                for (var Ee = -1, Ue = P == null ? 0 : P.length; ++Ee < Ue;)
                    if (V(J, P[Ee])) return !0;
                return !1
            }

            function Ot(P, J) {
                for (var V = -1, Ee = P == null ? 0 : P.length, Ue = Array(Ee); ++V < Ee;) Ue[V] = J(P[V], V, P);
                return Ue
            }

            function Kn(P, J) {
                for (var V = -1, Ee = J.length, Ue = P.length; ++V < Ee;) P[Ue + V] = J[V];
                return P
            }

            function du(P, J, V, Ee) {
                var Ue = -1,
                    st = P == null ? 0 : P.length;
                for (Ee && st && (V = P[++Ue]); ++Ue < st;) V = J(V, P[Ue], Ue, P);
                return V
            }

            function Mw(P, J, V, Ee) {
                var Ue = P == null ? 0 : P.length;
                for (Ee && Ue && (V = P[--Ue]); Ue--;) V = J(V, P[Ue], Ue, P);
                return V
            }

            function hu(P, J) {
                for (var V = -1, Ee = P == null ? 0 : P.length; ++V < Ee;)
                    if (J(P[V], V, P)) return !0;
                return !1
            }
            var Uw = pu("length");

            function Fw(P) {
                return P.split("")
            }

            function Bw(P) {
                return P.match(YS) || []
            }

            function Tg(P, J, V) {
                var Ee;
                return V(P, function(Ue, st, Bt) {
                    if (J(Ue, st, Bt)) return Ee = st, !1
                }), Ee
            }

            function Io(P, J, V, Ee) {
                for (var Ue = P.length, st = V + (Ee ? 1 : -1); Ee ? st-- : ++st < Ue;)
                    if (J(P[st], st, P)) return st;
                return -1
            }

            function fs(P, J, V) {
                return J === J ? Zw(P, J, V) : Io(P, Sg, V)
            }

            function jw(P, J, V, Ee) {
                for (var Ue = V - 1, st = P.length; ++Ue < st;)
                    if (Ee(P[Ue], J)) return Ue;
                return -1
            }

            function Sg(P) {
                return P !== P
            }

            function wg(P, J) {
                var V = P == null ? 0 : P.length;
                return V ? mu(P, J) / V : Me
            }

            function pu(P) {
                return function(J) {
                    return J == null ? r : J[P]
                }
            }

            function gu(P) {
                return function(J) {
                    return P == null ? r : P[J]
                }
            }

            function Og(P, J, V, Ee, Ue) {
                return Ue(P, function(st, Bt, gt) {
                    V = Ee ? (Ee = !1, st) : J(V, st, Bt, gt)
                }), V
            }

            function Gw(P, J) {
                var V = P.length;
                for (P.sort(J); V--;) P[V] = P[V].value;
                return P
            }

            function mu(P, J) {
                for (var V, Ee = -1, Ue = P.length; ++Ee < Ue;) {
                    var st = J(P[Ee]);
                    st !== r && (V = V === r ? st : V + st)
                }
                return V
            }

            function vu(P, J) {
                for (var V = -1, Ee = Array(P); ++V < P;) Ee[V] = J(V);
                return Ee
            }

            function Ww(P, J) {
                return Ot(J, function(V) {
                    return [V, P[V]]
                })
            }

            function Ig(P) {
                return P && P.slice(0, Rg(P) + 1).replace(nu, "")
            }

            function Ar(P) {
                return function(J) {
                    return P(J)
                }
            }

            function yu(P, J) {
                return Ot(J, function(V) {
                    return P[V]
                })
            }

            function da(P, J) {
                return P.has(J)
            }

            function Cg(P, J) {
                for (var V = -1, Ee = P.length; ++V < Ee && fs(J, P[V], 0) > -1;);
                return V
            }

            function $g(P, J) {
                for (var V = P.length; V-- && fs(J, P[V], 0) > -1;);
                return V
            }

            function Kw(P, J) {
                for (var V = P.length, Ee = 0; V--;) P[V] === J && ++Ee;
                return Ee
            }
            var Hw = gu($w),
                Vw = gu(Aw);

            function qw(P) {
                return "\\" + Nw[P]
            }

            function Yw(P, J) {
                return P == null ? r : P[J]
            }

            function ds(P) {
                return ww.test(P)
            }

            function zw(P) {
                return Ow.test(P)
            }

            function Xw(P) {
                for (var J, V = []; !(J = P.next()).done;) V.push(J.value);
                return V
            }

            function _u(P) {
                var J = -1,
                    V = Array(P.size);
                return P.forEach(function(Ee, Ue) {
                    V[++J] = [Ue, Ee]
                }), V
            }

            function Ag(P, J) {
                return function(V) {
                    return P(J(V))
                }
            }

            function Hn(P, J) {
                for (var V = -1, Ee = P.length, Ue = 0, st = []; ++V < Ee;) {
                    var Bt = P[V];
                    (Bt === J || Bt === m) && (P[V] = m, st[Ue++] = V)
                }
                return st
            }

            function Co(P) {
                var J = -1,
                    V = Array(P.size);
                return P.forEach(function(Ee) {
                    V[++J] = Ee
                }), V
            }

            function Jw(P) {
                var J = -1,
                    V = Array(P.size);
                return P.forEach(function(Ee) {
                    V[++J] = [Ee, Ee]
                }), V
            }

            function Zw(P, J, V) {
                for (var Ee = V - 1, Ue = P.length; ++Ee < Ue;)
                    if (P[Ee] === J) return Ee;
                return -1
            }

            function Qw(P, J, V) {
                for (var Ee = V + 1; Ee--;)
                    if (P[Ee] === J) return Ee;
                return Ee
            }

            function hs(P) {
                return ds(P) ? tO(P) : Uw(P)
            }

            function nn(P) {
                return ds(P) ? rO(P) : Fw(P)
            }

            function Rg(P) {
                for (var J = P.length; J-- && KS.test(P.charAt(J)););
                return J
            }
            var eO = gu(Rw);

            function tO(P) {
                for (var J = cu.lastIndex = 0; cu.test(P);) ++J;
                return J
            }

            function rO(P) {
                return P.match(cu) || []
            }

            function nO(P) {
                return P.match(Sw) || []
            }
            var iO = function P(J) {
                    J = J == null ? Zt : ps.defaults(Zt.Object(), J, ps.pick(Zt, Iw));
                    var V = J.Array,
                        Ee = J.Date,
                        Ue = J.Error,
                        st = J.Function,
                        Bt = J.Math,
                        gt = J.Object,
                        bu = J.RegExp,
                        sO = J.String,
                        Wr = J.TypeError,
                        $o = V.prototype,
                        aO = st.prototype,
                        gs = gt.prototype,
                        Ao = J["__core-js_shared__"],
                        Ro = aO.toString,
                        ht = gs.hasOwnProperty,
                        oO = 0,
                        Ng = function() {
                            var i = /[^.]+$/.exec(Ao && Ao.keys && Ao.keys.IE_PROTO || "");
                            return i ? "Symbol(src)_1." + i : ""
                        }(),
                        No = gs.toString,
                        cO = Ro.call(gt),
                        lO = Zt._,
                        uO = bu("^" + Ro.call(ht).replace(ru, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                        Lo = pg ? J.Buffer : r,
                        Vn = J.Symbol,
                        ko = J.Uint8Array,
                        Lg = Lo ? Lo.allocUnsafe : r,
                        Po = Ag(gt.getPrototypeOf, gt),
                        kg = gt.create,
                        Pg = gs.propertyIsEnumerable,
                        xo = $o.splice,
                        xg = Vn ? Vn.isConcatSpreadable : r,
                        ha = Vn ? Vn.iterator : r,
                        $i = Vn ? Vn.toStringTag : r,
                        Do = function() {
                            try {
                                var i = ki(gt, "defineProperty");
                                return i({}, "", {}), i
                            } catch {}
                        }(),
                        fO = J.clearTimeout !== Zt.clearTimeout && J.clearTimeout,
                        dO = Ee && Ee.now !== Zt.Date.now && Ee.now,
                        hO = J.setTimeout !== Zt.setTimeout && J.setTimeout,
                        Mo = Bt.ceil,
                        Uo = Bt.floor,
                        Eu = gt.getOwnPropertySymbols,
                        pO = Lo ? Lo.isBuffer : r,
                        Dg = J.isFinite,
                        gO = $o.join,
                        mO = Ag(gt.keys, gt),
                        jt = Bt.max,
                        ar = Bt.min,
                        vO = Ee.now,
                        yO = J.parseInt,
                        Mg = Bt.random,
                        _O = $o.reverse,
                        Tu = ki(J, "DataView"),
                        pa = ki(J, "Map"),
                        Su = ki(J, "Promise"),
                        ms = ki(J, "Set"),
                        ga = ki(J, "WeakMap"),
                        ma = ki(gt, "create"),
                        Fo = ga && new ga,
                        vs = {},
                        bO = Pi(Tu),
                        EO = Pi(pa),
                        TO = Pi(Su),
                        SO = Pi(ms),
                        wO = Pi(ga),
                        Bo = Vn ? Vn.prototype : r,
                        va = Bo ? Bo.valueOf : r,
                        Ug = Bo ? Bo.toString : r;

                    function _(i) {
                        if (Nt(i) && !je(i) && !(i instanceof Ze)) {
                            if (i instanceof Kr) return i;
                            if (ht.call(i, "__wrapped__")) return Fm(i)
                        }
                        return new Kr(i)
                    }
                    var ys = function() {
                        function i() {}
                        return function(a) {
                            if (!Ct(a)) return {};
                            if (kg) return kg(a);
                            i.prototype = a;
                            var l = new i;
                            return i.prototype = r, l
                        }
                    }();

                    function jo() {}

                    function Kr(i, a) {
                        this.__wrapped__ = i, this.__actions__ = [], this.__chain__ = !!a, this.__index__ = 0, this.__values__ = r
                    }
                    _.templateSettings = {
                        escape: US,
                        evaluate: FS,
                        interpolate: qp,
                        variable: "",
                        imports: {
                            _
                        }
                    }, _.prototype = jo.prototype, _.prototype.constructor = _, Kr.prototype = ys(jo.prototype), Kr.prototype.constructor = Kr;

                    function Ze(i) {
                        this.__wrapped__ = i, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Ge, this.__views__ = []
                    }

                    function OO() {
                        var i = new Ze(this.__wrapped__);
                        return i.__actions__ = yr(this.__actions__), i.__dir__ = this.__dir__, i.__filtered__ = this.__filtered__, i.__iteratees__ = yr(this.__iteratees__), i.__takeCount__ = this.__takeCount__, i.__views__ = yr(this.__views__), i
                    }

                    function IO() {
                        if (this.__filtered__) {
                            var i = new Ze(this);
                            i.__dir__ = -1, i.__filtered__ = !0
                        } else i = this.clone(), i.__dir__ *= -1;
                        return i
                    }

                    function CO() {
                        var i = this.__wrapped__.value(),
                            a = this.__dir__,
                            l = je(i),
                            d = a < 0,
                            v = l ? i.length : 0,
                            b = FI(0, v, this.__views__),
                            $ = b.start,
                            R = b.end,
                            x = R - $,
                            ee = d ? R : $ - 1,
                            te = this.__iteratees__,
                            ae = te.length,
                            me = 0,
                            we = ar(x, this.__takeCount__);
                        if (!l || !d && v == x && we == x) return cm(i, this.__actions__);
                        var Ne = [];
                        e: for (; x-- && me < we;) {
                            ee += a;
                            for (var He = -1, Le = i[ee]; ++He < ae;) {
                                var Xe = te[He],
                                    Qe = Xe.iteratee,
                                    Lr = Xe.type,
                                    pr = Qe(Le);
                                if (Lr == ie) Le = pr;
                                else if (!pr) {
                                    if (Lr == U) continue e;
                                    break e
                                }
                            }
                            Ne[me++] = Le
                        }
                        return Ne
                    }
                    Ze.prototype = ys(jo.prototype), Ze.prototype.constructor = Ze;

                    function Ai(i) {
                        var a = -1,
                            l = i == null ? 0 : i.length;
                        for (this.clear(); ++a < l;) {
                            var d = i[a];
                            this.set(d[0], d[1])
                        }
                    }

                    function $O() {
                        this.__data__ = ma ? ma(null) : {}, this.size = 0
                    }

                    function AO(i) {
                        var a = this.has(i) && delete this.__data__[i];
                        return this.size -= a ? 1 : 0, a
                    }

                    function RO(i) {
                        var a = this.__data__;
                        if (ma) {
                            var l = a[i];
                            return l === f ? r : l
                        }
                        return ht.call(a, i) ? a[i] : r
                    }

                    function NO(i) {
                        var a = this.__data__;
                        return ma ? a[i] !== r : ht.call(a, i)
                    }

                    function LO(i, a) {
                        var l = this.__data__;
                        return this.size += this.has(i) ? 0 : 1, l[i] = ma && a === r ? f : a, this
                    }
                    Ai.prototype.clear = $O, Ai.prototype.delete = AO, Ai.prototype.get = RO, Ai.prototype.has = NO, Ai.prototype.set = LO;

                    function In(i) {
                        var a = -1,
                            l = i == null ? 0 : i.length;
                        for (this.clear(); ++a < l;) {
                            var d = i[a];
                            this.set(d[0], d[1])
                        }
                    }

                    function kO() {
                        this.__data__ = [], this.size = 0
                    }

                    function PO(i) {
                        var a = this.__data__,
                            l = Go(a, i);
                        if (l < 0) return !1;
                        var d = a.length - 1;
                        return l == d ? a.pop() : xo.call(a, l, 1), --this.size, !0
                    }

                    function xO(i) {
                        var a = this.__data__,
                            l = Go(a, i);
                        return l < 0 ? r : a[l][1]
                    }

                    function DO(i) {
                        return Go(this.__data__, i) > -1
                    }

                    function MO(i, a) {
                        var l = this.__data__,
                            d = Go(l, i);
                        return d < 0 ? (++this.size, l.push([i, a])) : l[d][1] = a, this
                    }
                    In.prototype.clear = kO, In.prototype.delete = PO, In.prototype.get = xO, In.prototype.has = DO, In.prototype.set = MO;

                    function Cn(i) {
                        var a = -1,
                            l = i == null ? 0 : i.length;
                        for (this.clear(); ++a < l;) {
                            var d = i[a];
                            this.set(d[0], d[1])
                        }
                    }

                    function UO() {
                        this.size = 0, this.__data__ = {
                            hash: new Ai,
                            map: new(pa || In),
                            string: new Ai
                        }
                    }

                    function FO(i) {
                        var a = ec(this, i).delete(i);
                        return this.size -= a ? 1 : 0, a
                    }

                    function BO(i) {
                        return ec(this, i).get(i)
                    }

                    function jO(i) {
                        return ec(this, i).has(i)
                    }

                    function GO(i, a) {
                        var l = ec(this, i),
                            d = l.size;
                        return l.set(i, a), this.size += l.size == d ? 0 : 1, this
                    }
                    Cn.prototype.clear = UO, Cn.prototype.delete = FO, Cn.prototype.get = BO, Cn.prototype.has = jO, Cn.prototype.set = GO;

                    function Ri(i) {
                        var a = -1,
                            l = i == null ? 0 : i.length;
                        for (this.__data__ = new Cn; ++a < l;) this.add(i[a])
                    }

                    function WO(i) {
                        return this.__data__.set(i, f), this
                    }

                    function KO(i) {
                        return this.__data__.has(i)
                    }
                    Ri.prototype.add = Ri.prototype.push = WO, Ri.prototype.has = KO;

                    function sn(i) {
                        var a = this.__data__ = new In(i);
                        this.size = a.size
                    }

                    function HO() {
                        this.__data__ = new In, this.size = 0
                    }

                    function VO(i) {
                        var a = this.__data__,
                            l = a.delete(i);
                        return this.size = a.size, l
                    }

                    function qO(i) {
                        return this.__data__.get(i)
                    }

                    function YO(i) {
                        return this.__data__.has(i)
                    }

                    function zO(i, a) {
                        var l = this.__data__;
                        if (l instanceof In) {
                            var d = l.__data__;
                            if (!pa || d.length < s - 1) return d.push([i, a]), this.size = ++l.size, this;
                            l = this.__data__ = new Cn(d)
                        }
                        return l.set(i, a), this.size = l.size, this
                    }
                    sn.prototype.clear = HO, sn.prototype.delete = VO, sn.prototype.get = qO, sn.prototype.has = YO, sn.prototype.set = zO;

                    function Fg(i, a) {
                        var l = je(i),
                            d = !l && xi(i),
                            v = !l && !d && Jn(i),
                            b = !l && !d && !v && Ts(i),
                            $ = l || d || v || b,
                            R = $ ? vu(i.length, sO) : [],
                            x = R.length;
                        for (var ee in i)(a || ht.call(i, ee)) && !($ && (ee == "length" || v && (ee == "offset" || ee == "parent") || b && (ee == "buffer" || ee == "byteLength" || ee == "byteOffset") || Nn(ee, x))) && R.push(ee);
                        return R
                    }

                    function Bg(i) {
                        var a = i.length;
                        return a ? i[Pu(0, a - 1)] : r
                    }

                    function XO(i, a) {
                        return tc(yr(i), Ni(a, 0, i.length))
                    }

                    function JO(i) {
                        return tc(yr(i))
                    }

                    function wu(i, a, l) {
                        (l !== r && !an(i[a], l) || l === r && !(a in i)) && $n(i, a, l)
                    }

                    function ya(i, a, l) {
                        var d = i[a];
                        (!(ht.call(i, a) && an(d, l)) || l === r && !(a in i)) && $n(i, a, l)
                    }

                    function Go(i, a) {
                        for (var l = i.length; l--;)
                            if (an(i[l][0], a)) return l;
                        return -1
                    }

                    function ZO(i, a, l, d) {
                        return qn(i, function(v, b, $) {
                            a(d, v, l(v), $)
                        }), d
                    }

                    function jg(i, a) {
                        return i && mn(a, Yt(a), i)
                    }

                    function QO(i, a) {
                        return i && mn(a, br(a), i)
                    }

                    function $n(i, a, l) {
                        a == "__proto__" && Do ? Do(i, a, {
                            configurable: !0,
                            enumerable: !0,
                            value: l,
                            writable: !0
                        }) : i[a] = l
                    }

                    function Ou(i, a) {
                        for (var l = -1, d = a.length, v = V(d), b = i == null; ++l < d;) v[l] = b ? r : af(i, a[l]);
                        return v
                    }

                    function Ni(i, a, l) {
                        return i === i && (l !== r && (i = i <= l ? i : l), a !== r && (i = i >= a ? i : a)), i
                    }

                    function Hr(i, a, l, d, v, b) {
                        var $, R = a & y,
                            x = a & E,
                            ee = a & I;
                        if (l && ($ = v ? l(i, d, v, b) : l(i)), $ !== r) return $;
                        if (!Ct(i)) return i;
                        var te = je(i);
                        if (te) {
                            if ($ = jI(i), !R) return yr(i, $)
                        } else {
                            var ae = or(i),
                                me = ae == Ut || ae == g;
                            if (Jn(i)) return fm(i, R);
                            if (ae == B || ae == ir || me && !v) {
                                if ($ = x || me ? {} : Rm(i), !R) return x ? RI(i, QO($, i)) : AI(i, jg($, i))
                            } else {
                                if (!yt[ae]) return v ? i : {};
                                $ = GI(i, ae, R)
                            }
                        }
                        b || (b = new sn);
                        var we = b.get(i);
                        if (we) return we;
                        b.set(i, $), sv(i) ? i.forEach(function(Le) {
                            $.add(Hr(Le, a, l, Le, i, b))
                        }) : nv(i) && i.forEach(function(Le, Xe) {
                            $.set(Xe, Hr(Le, a, l, Xe, i, b))
                        });
                        var Ne = ee ? x ? Hu : Ku : x ? br : Yt,
                            He = te ? r : Ne(i);
                        return Gr(He || i, function(Le, Xe) {
                            He && (Xe = Le, Le = i[Xe]), ya($, Xe, Hr(Le, a, l, Xe, i, b))
                        }), $
                    }

                    function eI(i) {
                        var a = Yt(i);
                        return function(l) {
                            return Gg(l, i, a)
                        }
                    }

                    function Gg(i, a, l) {
                        var d = l.length;
                        if (i == null) return !d;
                        for (i = gt(i); d--;) {
                            var v = l[d],
                                b = a[v],
                                $ = i[v];
                            if ($ === r && !(v in i) || !b($)) return !1
                        }
                        return !0
                    }

                    function Wg(i, a, l) {
                        if (typeof i != "function") throw new Wr(c);
                        return Oa(function() {
                            i.apply(r, l)
                        }, a)
                    }

                    function _a(i, a, l, d) {
                        var v = -1,
                            b = Oo,
                            $ = !0,
                            R = i.length,
                            x = [],
                            ee = a.length;
                        if (!R) return x;
                        l && (a = Ot(a, Ar(l))), d ? (b = fu, $ = !1) : a.length >= s && (b = da, $ = !1, a = new Ri(a));
                        e: for (; ++v < R;) {
                            var te = i[v],
                                ae = l == null ? te : l(te);
                            if (te = d || te !== 0 ? te : 0, $ && ae === ae) {
                                for (var me = ee; me--;)
                                    if (a[me] === ae) continue e;
                                x.push(te)
                            } else b(a, ae, d) || x.push(te)
                        }
                        return x
                    }
                    var qn = mm(gn),
                        Kg = mm(Cu, !0);

                    function tI(i, a) {
                        var l = !0;
                        return qn(i, function(d, v, b) {
                            return l = !!a(d, v, b), l
                        }), l
                    }

                    function Wo(i, a, l) {
                        for (var d = -1, v = i.length; ++d < v;) {
                            var b = i[d],
                                $ = a(b);
                            if ($ != null && (R === r ? $ === $ && !Nr($) : l($, R))) var R = $,
                                x = b
                        }
                        return x
                    }

                    function rI(i, a, l, d) {
                        var v = i.length;
                        for (l = We(l), l < 0 && (l = -l > v ? 0 : v + l), d = d === r || d > v ? v : We(d), d < 0 && (d += v), d = l > d ? 0 : ov(d); l < d;) i[l++] = a;
                        return i
                    }

                    function Hg(i, a) {
                        var l = [];
                        return qn(i, function(d, v, b) {
                            a(d, v, b) && l.push(d)
                        }), l
                    }

                    function Qt(i, a, l, d, v) {
                        var b = -1,
                            $ = i.length;
                        for (l || (l = KI), v || (v = []); ++b < $;) {
                            var R = i[b];
                            a > 0 && l(R) ? a > 1 ? Qt(R, a - 1, l, d, v) : Kn(v, R) : d || (v[v.length] = R)
                        }
                        return v
                    }
                    var Iu = vm(),
                        Vg = vm(!0);

                    function gn(i, a) {
                        return i && Iu(i, a, Yt)
                    }

                    function Cu(i, a) {
                        return i && Vg(i, a, Yt)
                    }

                    function Ko(i, a) {
                        return Wn(a, function(l) {
                            return Ln(i[l])
                        })
                    }

                    function Li(i, a) {
                        a = zn(a, i);
                        for (var l = 0, d = a.length; i != null && l < d;) i = i[vn(a[l++])];
                        return l && l == d ? i : r
                    }

                    function qg(i, a, l) {
                        var d = a(i);
                        return je(i) ? d : Kn(d, l(i))
                    }

                    function dr(i) {
                        return i == null ? i === r ? he : D : $i && $i in gt(i) ? UI(i) : JI(i)
                    }

                    function $u(i, a) {
                        return i > a
                    }

                    function nI(i, a) {
                        return i != null && ht.call(i, a)
                    }

                    function iI(i, a) {
                        return i != null && a in gt(i)
                    }

                    function sI(i, a, l) {
                        return i >= ar(a, l) && i < jt(a, l)
                    }

                    function Au(i, a, l) {
                        for (var d = l ? fu : Oo, v = i[0].length, b = i.length, $ = b, R = V(b), x = 1 / 0, ee = []; $--;) {
                            var te = i[$];
                            $ && a && (te = Ot(te, Ar(a))), x = ar(te.length, x), R[$] = !l && (a || v >= 120 && te.length >= 120) ? new Ri($ && te) : r
                        }
                        te = i[0];
                        var ae = -1,
                            me = R[0];
                        e: for (; ++ae < v && ee.length < x;) {
                            var we = te[ae],
                                Ne = a ? a(we) : we;
                            if (we = l || we !== 0 ? we : 0, !(me ? da(me, Ne) : d(ee, Ne, l))) {
                                for ($ = b; --$;) {
                                    var He = R[$];
                                    if (!(He ? da(He, Ne) : d(i[$], Ne, l))) continue e
                                }
                                me && me.push(Ne), ee.push(we)
                            }
                        }
                        return ee
                    }

                    function aI(i, a, l, d) {
                        return gn(i, function(v, b, $) {
                            a(d, l(v), b, $)
                        }), d
                    }

                    function ba(i, a, l) {
                        a = zn(a, i), i = Pm(i, a);
                        var d = i == null ? i : i[vn(qr(a))];
                        return d == null ? r : $r(d, i, l)
                    }

                    function Yg(i) {
                        return Nt(i) && dr(i) == ir
                    }

                    function oI(i) {
                        return Nt(i) && dr(i) == Pe
                    }

                    function cI(i) {
                        return Nt(i) && dr(i) == lt
                    }

                    function Ea(i, a, l, d, v) {
                        return i === a ? !0 : i == null || a == null || !Nt(i) && !Nt(a) ? i !== i && a !== a : lI(i, a, l, d, Ea, v)
                    }

                    function lI(i, a, l, d, v, b) {
                        var $ = je(i),
                            R = je(a),
                            x = $ ? vr : or(i),
                            ee = R ? vr : or(a);
                        x = x == ir ? B : x, ee = ee == ir ? B : ee;
                        var te = x == B,
                            ae = ee == B,
                            me = x == ee;
                        if (me && Jn(i)) {
                            if (!Jn(a)) return !1;
                            $ = !0, te = !1
                        }
                        if (me && !te) return b || (b = new sn), $ || Ts(i) ? Cm(i, a, l, d, v, b) : DI(i, a, x, l, d, v, b);
                        if (!(l & k)) {
                            var we = te && ht.call(i, "__wrapped__"),
                                Ne = ae && ht.call(a, "__wrapped__");
                            if (we || Ne) {
                                var He = we ? i.value() : i,
                                    Le = Ne ? a.value() : a;
                                return b || (b = new sn), v(He, Le, l, d, b)
                            }
                        }
                        return me ? (b || (b = new sn), MI(i, a, l, d, v, b)) : !1
                    }

                    function uI(i) {
                        return Nt(i) && or(i) == p
                    }

                    function Ru(i, a, l, d) {
                        var v = l.length,
                            b = v,
                            $ = !d;
                        if (i == null) return !b;
                        for (i = gt(i); v--;) {
                            var R = l[v];
                            if ($ && R[2] ? R[1] !== i[R[0]] : !(R[0] in i)) return !1
                        }
                        for (; ++v < b;) {
                            R = l[v];
                            var x = R[0],
                                ee = i[x],
                                te = R[1];
                            if ($ && R[2]) {
                                if (ee === r && !(x in i)) return !1
                            } else {
                                var ae = new sn;
                                if (d) var me = d(ee, te, x, i, a, ae);
                                if (!(me === r ? Ea(te, ee, k | M, d, ae) : me)) return !1
                            }
                        }
                        return !0
                    }

                    function zg(i) {
                        if (!Ct(i) || VI(i)) return !1;
                        var a = Ln(i) ? uO : ew;
                        return a.test(Pi(i))
                    }

                    function fI(i) {
                        return Nt(i) && dr(i) == se
                    }

                    function dI(i) {
                        return Nt(i) && or(i) == re
                    }

                    function hI(i) {
                        return Nt(i) && oc(i.length) && !!Tt[dr(i)]
                    }

                    function Xg(i) {
                        return typeof i == "function" ? i : i == null ? Er : typeof i == "object" ? je(i) ? Qg(i[0], i[1]) : Zg(i) : yv(i)
                    }

                    function Nu(i) {
                        if (!wa(i)) return mO(i);
                        var a = [];
                        for (var l in gt(i)) ht.call(i, l) && l != "constructor" && a.push(l);
                        return a
                    }

                    function pI(i) {
                        if (!Ct(i)) return XI(i);
                        var a = wa(i),
                            l = [];
                        for (var d in i) d == "constructor" && (a || !ht.call(i, d)) || l.push(d);
                        return l
                    }

                    function Lu(i, a) {
                        return i < a
                    }

                    function Jg(i, a) {
                        var l = -1,
                            d = _r(i) ? V(i.length) : [];
                        return qn(i, function(v, b, $) {
                            d[++l] = a(v, b, $)
                        }), d
                    }

                    function Zg(i) {
                        var a = qu(i);
                        return a.length == 1 && a[0][2] ? Lm(a[0][0], a[0][1]) : function(l) {
                            return l === i || Ru(l, i, a)
                        }
                    }

                    function Qg(i, a) {
                        return zu(i) && Nm(a) ? Lm(vn(i), a) : function(l) {
                            var d = af(l, i);
                            return d === r && d === a ? of(l, i) : Ea(a, d, k | M)
                        }
                    }

                    function Ho(i, a, l, d, v) {
                        i !== a && Iu(a, function(b, $) {
                            if (v || (v = new sn), Ct(b)) gI(i, a, $, l, Ho, d, v);
                            else {
                                var R = d ? d(Ju(i, $), b, $ + "", i, a, v) : r;
                                R === r && (R = b), wu(i, $, R)
                            }
                        }, br)
                    }

                    function gI(i, a, l, d, v, b, $) {
                        var R = Ju(i, l),
                            x = Ju(a, l),
                            ee = $.get(x);
                        if (ee) {
                            wu(i, l, ee);
                            return
                        }
                        var te = b ? b(R, x, l + "", i, a, $) : r,
                            ae = te === r;
                        if (ae) {
                            var me = je(x),
                                we = !me && Jn(x),
                                Ne = !me && !we && Ts(x);
                            te = x, me || we || Ne ? je(R) ? te = R : kt(R) ? te = yr(R) : we ? (ae = !1, te = fm(x, !0)) : Ne ? (ae = !1, te = dm(x, !0)) : te = [] : Ia(x) || xi(x) ? (te = R, xi(R) ? te = cv(R) : (!Ct(R) || Ln(R)) && (te = Rm(x))) : ae = !1
                        }
                        ae && ($.set(x, te), v(te, x, d, b, $), $.delete(x)), wu(i, l, te)
                    }

                    function em(i, a) {
                        var l = i.length;
                        if (!!l) return a += a < 0 ? l : 0, Nn(a, l) ? i[a] : r
                    }

                    function tm(i, a, l) {
                        a.length ? a = Ot(a, function(b) {
                            return je(b) ? function($) {
                                return Li($, b.length === 1 ? b[0] : b)
                            } : b
                        }) : a = [Er];
                        var d = -1;
                        a = Ot(a, Ar(Re()));
                        var v = Jg(i, function(b, $, R) {
                            var x = Ot(a, function(ee) {
                                return ee(b)
                            });
                            return {
                                criteria: x,
                                index: ++d,
                                value: b
                            }
                        });
                        return Gw(v, function(b, $) {
                            return $I(b, $, l)
                        })
                    }

                    function mI(i, a) {
                        return rm(i, a, function(l, d) {
                            return of(i, d)
                        })
                    }

                    function rm(i, a, l) {
                        for (var d = -1, v = a.length, b = {}; ++d < v;) {
                            var $ = a[d],
                                R = Li(i, $);
                            l(R, $) && Ta(b, zn($, i), R)
                        }
                        return b
                    }

                    function vI(i) {
                        return function(a) {
                            return Li(a, i)
                        }
                    }

                    function ku(i, a, l, d) {
                        var v = d ? jw : fs,
                            b = -1,
                            $ = a.length,
                            R = i;
                        for (i === a && (a = yr(a)), l && (R = Ot(i, Ar(l))); ++b < $;)
                            for (var x = 0, ee = a[b], te = l ? l(ee) : ee;
                                (x = v(R, te, x, d)) > -1;) R !== i && xo.call(R, x, 1), xo.call(i, x, 1);
                        return i
                    }

                    function nm(i, a) {
                        for (var l = i ? a.length : 0, d = l - 1; l--;) {
                            var v = a[l];
                            if (l == d || v !== b) {
                                var b = v;
                                Nn(v) ? xo.call(i, v, 1) : Mu(i, v)
                            }
                        }
                        return i
                    }

                    function Pu(i, a) {
                        return i + Uo(Mg() * (a - i + 1))
                    }

                    function yI(i, a, l, d) {
                        for (var v = -1, b = jt(Mo((a - i) / (l || 1)), 0), $ = V(b); b--;) $[d ? b : ++v] = i, i += l;
                        return $
                    }

                    function xu(i, a) {
                        var l = "";
                        if (!i || a < 1 || a > ve) return l;
                        do a % 2 && (l += i), a = Uo(a / 2), a && (i += i); while (a);
                        return l
                    }

                    function Ye(i, a) {
                        return Zu(km(i, a, Er), i + "")
                    }

                    function _I(i) {
                        return Bg(Ss(i))
                    }

                    function bI(i, a) {
                        var l = Ss(i);
                        return tc(l, Ni(a, 0, l.length))
                    }

                    function Ta(i, a, l, d) {
                        if (!Ct(i)) return i;
                        a = zn(a, i);
                        for (var v = -1, b = a.length, $ = b - 1, R = i; R != null && ++v < b;) {
                            var x = vn(a[v]),
                                ee = l;
                            if (x === "__proto__" || x === "constructor" || x === "prototype") return i;
                            if (v != $) {
                                var te = R[x];
                                ee = d ? d(te, x, R) : r, ee === r && (ee = Ct(te) ? te : Nn(a[v + 1]) ? [] : {})
                            }
                            ya(R, x, ee), R = R[x]
                        }
                        return i
                    }
                    var im = Fo ? function(i, a) {
                            return Fo.set(i, a), i
                        } : Er,
                        EI = Do ? function(i, a) {
                            return Do(i, "toString", {
                                configurable: !0,
                                enumerable: !1,
                                value: lf(a),
                                writable: !0
                            })
                        } : Er;

                    function TI(i) {
                        return tc(Ss(i))
                    }

                    function Vr(i, a, l) {
                        var d = -1,
                            v = i.length;
                        a < 0 && (a = -a > v ? 0 : v + a), l = l > v ? v : l, l < 0 && (l += v), v = a > l ? 0 : l - a >>> 0, a >>>= 0;
                        for (var b = V(v); ++d < v;) b[d] = i[d + a];
                        return b
                    }

                    function SI(i, a) {
                        var l;
                        return qn(i, function(d, v, b) {
                            return l = a(d, v, b), !l
                        }), !!l
                    }

                    function Vo(i, a, l) {
                        var d = 0,
                            v = i == null ? d : i.length;
                        if (typeof a == "number" && a === a && v <= Rt) {
                            for (; d < v;) {
                                var b = d + v >>> 1,
                                    $ = i[b];
                                $ !== null && !Nr($) && (l ? $ <= a : $ < a) ? d = b + 1 : v = b
                            }
                            return v
                        }
                        return Du(i, a, Er, l)
                    }

                    function Du(i, a, l, d) {
                        var v = 0,
                            b = i == null ? 0 : i.length;
                        if (b === 0) return 0;
                        a = l(a);
                        for (var $ = a !== a, R = a === null, x = Nr(a), ee = a === r; v < b;) {
                            var te = Uo((v + b) / 2),
                                ae = l(i[te]),
                                me = ae !== r,
                                we = ae === null,
                                Ne = ae === ae,
                                He = Nr(ae);
                            if ($) var Le = d || Ne;
                            else ee ? Le = Ne && (d || me) : R ? Le = Ne && me && (d || !we) : x ? Le = Ne && me && !we && (d || !He) : we || He ? Le = !1 : Le = d ? ae <= a : ae < a;
                            Le ? v = te + 1 : b = te
                        }
                        return ar(b, nt)
                    }

                    function sm(i, a) {
                        for (var l = -1, d = i.length, v = 0, b = []; ++l < d;) {
                            var $ = i[l],
                                R = a ? a($) : $;
                            if (!l || !an(R, x)) {
                                var x = R;
                                b[v++] = $ === 0 ? 0 : $
                            }
                        }
                        return b
                    }

                    function am(i) {
                        return typeof i == "number" ? i : Nr(i) ? Me : +i
                    }

                    function Rr(i) {
                        if (typeof i == "string") return i;
                        if (je(i)) return Ot(i, Rr) + "";
                        if (Nr(i)) return Ug ? Ug.call(i) : "";
                        var a = i + "";
                        return a == "0" && 1 / i == -be ? "-0" : a
                    }

                    function Yn(i, a, l) {
                        var d = -1,
                            v = Oo,
                            b = i.length,
                            $ = !0,
                            R = [],
                            x = R;
                        if (l) $ = !1, v = fu;
                        else if (b >= s) {
                            var ee = a ? null : PI(i);
                            if (ee) return Co(ee);
                            $ = !1, v = da, x = new Ri
                        } else x = a ? [] : R;
                        e: for (; ++d < b;) {
                            var te = i[d],
                                ae = a ? a(te) : te;
                            if (te = l || te !== 0 ? te : 0, $ && ae === ae) {
                                for (var me = x.length; me--;)
                                    if (x[me] === ae) continue e;
                                a && x.push(ae), R.push(te)
                            } else v(x, ae, l) || (x !== R && x.push(ae), R.push(te))
                        }
                        return R
                    }

                    function Mu(i, a) {
                        return a = zn(a, i), i = Pm(i, a), i == null || delete i[vn(qr(a))]
                    }

                    function om(i, a, l, d) {
                        return Ta(i, a, l(Li(i, a)), d)
                    }

                    function qo(i, a, l, d) {
                        for (var v = i.length, b = d ? v : -1;
                            (d ? b-- : ++b < v) && a(i[b], b, i););
                        return l ? Vr(i, d ? 0 : b, d ? b + 1 : v) : Vr(i, d ? b + 1 : 0, d ? v : b)
                    }

                    function cm(i, a) {
                        var l = i;
                        return l instanceof Ze && (l = l.value()), du(a, function(d, v) {
                            return v.func.apply(v.thisArg, Kn([d], v.args))
                        }, l)
                    }

                    function Uu(i, a, l) {
                        var d = i.length;
                        if (d < 2) return d ? Yn(i[0]) : [];
                        for (var v = -1, b = V(d); ++v < d;)
                            for (var $ = i[v], R = -1; ++R < d;) R != v && (b[v] = _a(b[v] || $, i[R], a, l));
                        return Yn(Qt(b, 1), a, l)
                    }

                    function lm(i, a, l) {
                        for (var d = -1, v = i.length, b = a.length, $ = {}; ++d < v;) {
                            var R = d < b ? a[d] : r;
                            l($, i[d], R)
                        }
                        return $
                    }

                    function Fu(i) {
                        return kt(i) ? i : []
                    }

                    function Bu(i) {
                        return typeof i == "function" ? i : Er
                    }

                    function zn(i, a) {
                        return je(i) ? i : zu(i, a) ? [i] : Um(ut(i))
                    }
                    var wI = Ye;

                    function Xn(i, a, l) {
                        var d = i.length;
                        return l = l === r ? d : l, !a && l >= d ? i : Vr(i, a, l)
                    }
                    var um = fO || function(i) {
                        return Zt.clearTimeout(i)
                    };

                    function fm(i, a) {
                        if (a) return i.slice();
                        var l = i.length,
                            d = Lg ? Lg(l) : new i.constructor(l);
                        return i.copy(d), d
                    }

                    function ju(i) {
                        var a = new i.constructor(i.byteLength);
                        return new ko(a).set(new ko(i)), a
                    }

                    function OI(i, a) {
                        var l = a ? ju(i.buffer) : i.buffer;
                        return new i.constructor(l, i.byteOffset, i.byteLength)
                    }

                    function II(i) {
                        var a = new i.constructor(i.source, Yp.exec(i));
                        return a.lastIndex = i.lastIndex, a
                    }

                    function CI(i) {
                        return va ? gt(va.call(i)) : {}
                    }

                    function dm(i, a) {
                        var l = a ? ju(i.buffer) : i.buffer;
                        return new i.constructor(l, i.byteOffset, i.length)
                    }

                    function hm(i, a) {
                        if (i !== a) {
                            var l = i !== r,
                                d = i === null,
                                v = i === i,
                                b = Nr(i),
                                $ = a !== r,
                                R = a === null,
                                x = a === a,
                                ee = Nr(a);
                            if (!R && !ee && !b && i > a || b && $ && x && !R && !ee || d && $ && x || !l && x || !v) return 1;
                            if (!d && !b && !ee && i < a || ee && l && v && !d && !b || R && l && v || !$ && v || !x) return -1
                        }
                        return 0
                    }

                    function $I(i, a, l) {
                        for (var d = -1, v = i.criteria, b = a.criteria, $ = v.length, R = l.length; ++d < $;) {
                            var x = hm(v[d], b[d]);
                            if (x) {
                                if (d >= R) return x;
                                var ee = l[d];
                                return x * (ee == "desc" ? -1 : 1)
                            }
                        }
                        return i.index - a.index
                    }

                    function pm(i, a, l, d) {
                        for (var v = -1, b = i.length, $ = l.length, R = -1, x = a.length, ee = jt(b - $, 0), te = V(x + ee), ae = !d; ++R < x;) te[R] = a[R];
                        for (; ++v < $;)(ae || v < b) && (te[l[v]] = i[v]);
                        for (; ee--;) te[R++] = i[v++];
                        return te
                    }

                    function gm(i, a, l, d) {
                        for (var v = -1, b = i.length, $ = -1, R = l.length, x = -1, ee = a.length, te = jt(b - R, 0), ae = V(te + ee), me = !d; ++v < te;) ae[v] = i[v];
                        for (var we = v; ++x < ee;) ae[we + x] = a[x];
                        for (; ++$ < R;)(me || v < b) && (ae[we + l[$]] = i[v++]);
                        return ae
                    }

                    function yr(i, a) {
                        var l = -1,
                            d = i.length;
                        for (a || (a = V(d)); ++l < d;) a[l] = i[l];
                        return a
                    }

                    function mn(i, a, l, d) {
                        var v = !l;
                        l || (l = {});
                        for (var b = -1, $ = a.length; ++b < $;) {
                            var R = a[b],
                                x = d ? d(l[R], i[R], R, l, i) : r;
                            x === r && (x = i[R]), v ? $n(l, R, x) : ya(l, R, x)
                        }
                        return l
                    }

                    function AI(i, a) {
                        return mn(i, Yu(i), a)
                    }

                    function RI(i, a) {
                        return mn(i, $m(i), a)
                    }

                    function Yo(i, a) {
                        return function(l, d) {
                            var v = je(l) ? xw : ZO,
                                b = a ? a() : {};
                            return v(l, i, Re(d, 2), b)
                        }
                    }

                    function _s(i) {
                        return Ye(function(a, l) {
                            var d = -1,
                                v = l.length,
                                b = v > 1 ? l[v - 1] : r,
                                $ = v > 2 ? l[2] : r;
                            for (b = i.length > 3 && typeof b == "function" ? (v--, b) : r, $ && hr(l[0], l[1], $) && (b = v < 3 ? r : b, v = 1), a = gt(a); ++d < v;) {
                                var R = l[d];
                                R && i(a, R, d, b)
                            }
                            return a
                        })
                    }

                    function mm(i, a) {
                        return function(l, d) {
                            if (l == null) return l;
                            if (!_r(l)) return i(l, d);
                            for (var v = l.length, b = a ? v : -1, $ = gt(l);
                                (a ? b-- : ++b < v) && d($[b], b, $) !== !1;);
                            return l
                        }
                    }

                    function vm(i) {
                        return function(a, l, d) {
                            for (var v = -1, b = gt(a), $ = d(a), R = $.length; R--;) {
                                var x = $[i ? R : ++v];
                                if (l(b[x], x, b) === !1) break
                            }
                            return a
                        }
                    }

                    function NI(i, a, l) {
                        var d = a & j,
                            v = Sa(i);

                        function b() {
                            var $ = this && this !== Zt && this instanceof b ? v : i;
                            return $.apply(d ? l : this, arguments)
                        }
                        return b
                    }

                    function ym(i) {
                        return function(a) {
                            a = ut(a);
                            var l = ds(a) ? nn(a) : r,
                                d = l ? l[0] : a.charAt(0),
                                v = l ? Xn(l, 1).join("") : a.slice(1);
                            return d[i]() + v
                        }
                    }

                    function bs(i) {
                        return function(a) {
                            return du(mv(gv(a).replace(Ew, "")), i, "")
                        }
                    }

                    function Sa(i) {
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
                            var l = ys(i.prototype),
                                d = i.apply(l, a);
                            return Ct(d) ? d : l
                        }
                    }

                    function LI(i, a, l) {
                        var d = Sa(i);

                        function v() {
                            for (var b = arguments.length, $ = V(b), R = b, x = Es(v); R--;) $[R] = arguments[R];
                            var ee = b < 3 && $[0] !== x && $[b - 1] !== x ? [] : Hn($, x);
                            if (b -= ee.length, b < l) return Sm(i, a, zo, v.placeholder, r, $, ee, r, r, l - b);
                            var te = this && this !== Zt && this instanceof v ? d : i;
                            return $r(te, this, $)
                        }
                        return v
                    }

                    function _m(i) {
                        return function(a, l, d) {
                            var v = gt(a);
                            if (!_r(a)) {
                                var b = Re(l, 3);
                                a = Yt(a), l = function(R) {
                                    return b(v[R], R, v)
                                }
                            }
                            var $ = i(a, l, d);
                            return $ > -1 ? v[b ? a[$] : $] : r
                        }
                    }

                    function bm(i) {
                        return Rn(function(a) {
                            var l = a.length,
                                d = l,
                                v = Kr.prototype.thru;
                            for (i && a.reverse(); d--;) {
                                var b = a[d];
                                if (typeof b != "function") throw new Wr(c);
                                if (v && !$ && Qo(b) == "wrapper") var $ = new Kr([], !0)
                            }
                            for (d = $ ? d : l; ++d < l;) {
                                b = a[d];
                                var R = Qo(b),
                                    x = R == "wrapper" ? Vu(b) : r;
                                x && Xu(x[0]) && x[1] == (oe | X | G | ce) && !x[4].length && x[9] == 1 ? $ = $[Qo(x[0])].apply($, x[3]) : $ = b.length == 1 && Xu(b) ? $[R]() : $.thru(b)
                            }
                            return function() {
                                var ee = arguments,
                                    te = ee[0];
                                if ($ && ee.length == 1 && je(te)) return $.plant(te).value();
                                for (var ae = 0, me = l ? a[ae].apply(this, ee) : te; ++ae < l;) me = a[ae].call(this, me);
                                return me
                            }
                        })
                    }

                    function zo(i, a, l, d, v, b, $, R, x, ee) {
                        var te = a & oe,
                            ae = a & j,
                            me = a & C,
                            we = a & (X | W),
                            Ne = a & ue,
                            He = me ? r : Sa(i);

                        function Le() {
                            for (var Xe = arguments.length, Qe = V(Xe), Lr = Xe; Lr--;) Qe[Lr] = arguments[Lr];
                            if (we) var pr = Es(Le),
                                kr = Kw(Qe, pr);
                            if (d && (Qe = pm(Qe, d, v, we)), b && (Qe = gm(Qe, b, $, we)), Xe -= kr, we && Xe < ee) {
                                var Pt = Hn(Qe, pr);
                                return Sm(i, a, zo, Le.placeholder, l, Qe, Pt, R, x, ee - Xe)
                            }
                            var on = ae ? l : this,
                                Pn = me ? on[i] : i;
                            return Xe = Qe.length, R ? Qe = ZI(Qe, R) : Ne && Xe > 1 && Qe.reverse(), te && x < Xe && (Qe.length = x), this && this !== Zt && this instanceof Le && (Pn = He || Sa(Pn)), Pn.apply(on, Qe)
                        }
                        return Le
                    }

                    function Em(i, a) {
                        return function(l, d) {
                            return aI(l, i, a(d), {})
                        }
                    }

                    function Xo(i, a) {
                        return function(l, d) {
                            var v;
                            if (l === r && d === r) return a;
                            if (l !== r && (v = l), d !== r) {
                                if (v === r) return d;
                                typeof l == "string" || typeof d == "string" ? (l = Rr(l), d = Rr(d)) : (l = am(l), d = am(d)), v = i(l, d)
                            }
                            return v
                        }
                    }

                    function Gu(i) {
                        return Rn(function(a) {
                            return a = Ot(a, Ar(Re())), Ye(function(l) {
                                var d = this;
                                return i(a, function(v) {
                                    return $r(v, d, l)
                                })
                            })
                        })
                    }

                    function Jo(i, a) {
                        a = a === r ? " " : Rr(a);
                        var l = a.length;
                        if (l < 2) return l ? xu(a, i) : a;
                        var d = xu(a, Mo(i / hs(a)));
                        return ds(a) ? Xn(nn(d), 0, i).join("") : d.slice(0, i)
                    }

                    function kI(i, a, l, d) {
                        var v = a & j,
                            b = Sa(i);

                        function $() {
                            for (var R = -1, x = arguments.length, ee = -1, te = d.length, ae = V(te + x), me = this && this !== Zt && this instanceof $ ? b : i; ++ee < te;) ae[ee] = d[ee];
                            for (; x--;) ae[ee++] = arguments[++R];
                            return $r(me, v ? l : this, ae)
                        }
                        return $
                    }

                    function Tm(i) {
                        return function(a, l, d) {
                            return d && typeof d != "number" && hr(a, l, d) && (l = d = r), a = kn(a), l === r ? (l = a, a = 0) : l = kn(l), d = d === r ? a < l ? 1 : -1 : kn(d), yI(a, l, d, i)
                        }
                    }

                    function Zo(i) {
                        return function(a, l) {
                            return typeof a == "string" && typeof l == "string" || (a = Yr(a), l = Yr(l)), i(a, l)
                        }
                    }

                    function Sm(i, a, l, d, v, b, $, R, x, ee) {
                        var te = a & X,
                            ae = te ? $ : r,
                            me = te ? r : $,
                            we = te ? b : r,
                            Ne = te ? r : b;
                        a |= te ? G : Z, a &= ~(te ? Z : G), a & H || (a &= ~(j | C));
                        var He = [i, a, v, we, ae, Ne, me, R, x, ee],
                            Le = l.apply(r, He);
                        return Xu(i) && xm(Le, He), Le.placeholder = d, Dm(Le, i, a)
                    }

                    function Wu(i) {
                        var a = Bt[i];
                        return function(l, d) {
                            if (l = Yr(l), d = d == null ? 0 : ar(We(d), 292), d && Dg(l)) {
                                var v = (ut(l) + "e").split("e"),
                                    b = a(v[0] + "e" + (+v[1] + d));
                                return v = (ut(b) + "e").split("e"), +(v[0] + "e" + (+v[1] - d))
                            }
                            return a(l)
                        }
                    }
                    var PI = ms && 1 / Co(new ms([, -0]))[1] == be ? function(i) {
                        return new ms(i)
                    } : df;

                    function wm(i) {
                        return function(a) {
                            var l = or(a);
                            return l == p ? _u(a) : l == re ? Jw(a) : Ww(a, i(a))
                        }
                    }

                    function An(i, a, l, d, v, b, $, R) {
                        var x = a & C;
                        if (!x && typeof i != "function") throw new Wr(c);
                        var ee = d ? d.length : 0;
                        if (ee || (a &= ~(G | Z), d = v = r), $ = $ === r ? $ : jt(We($), 0), R = R === r ? R : We(R), ee -= v ? v.length : 0, a & Z) {
                            var te = d,
                                ae = v;
                            d = v = r
                        }
                        var me = x ? r : Vu(i),
                            we = [i, a, l, d, v, te, ae, b, $, R];
                        if (me && zI(we, me), i = we[0], a = we[1], l = we[2], d = we[3], v = we[4], R = we[9] = we[9] === r ? x ? 0 : i.length : jt(we[9] - ee, 0), !R && a & (X | W) && (a &= ~(X | W)), !a || a == j) var Ne = NI(i, a, l);
                        else a == X || a == W ? Ne = LI(i, a, R) : (a == G || a == (j | G)) && !v.length ? Ne = kI(i, a, l, d) : Ne = zo.apply(r, we);
                        var He = me ? im : xm;
                        return Dm(He(Ne, we), i, a)
                    }

                    function Om(i, a, l, d) {
                        return i === r || an(i, gs[l]) && !ht.call(d, l) ? a : i
                    }

                    function Im(i, a, l, d, v, b) {
                        return Ct(i) && Ct(a) && (b.set(a, i), Ho(i, a, r, Im, b), b.delete(a)), i
                    }

                    function xI(i) {
                        return Ia(i) ? r : i
                    }

                    function Cm(i, a, l, d, v, b) {
                        var $ = l & k,
                            R = i.length,
                            x = a.length;
                        if (R != x && !($ && x > R)) return !1;
                        var ee = b.get(i),
                            te = b.get(a);
                        if (ee && te) return ee == a && te == i;
                        var ae = -1,
                            me = !0,
                            we = l & M ? new Ri : r;
                        for (b.set(i, a), b.set(a, i); ++ae < R;) {
                            var Ne = i[ae],
                                He = a[ae];
                            if (d) var Le = $ ? d(He, Ne, ae, a, i, b) : d(Ne, He, ae, i, a, b);
                            if (Le !== r) {
                                if (Le) continue;
                                me = !1;
                                break
                            }
                            if (we) {
                                if (!hu(a, function(Xe, Qe) {
                                        if (!da(we, Qe) && (Ne === Xe || v(Ne, Xe, l, d, b))) return we.push(Qe)
                                    })) {
                                    me = !1;
                                    break
                                }
                            } else if (!(Ne === He || v(Ne, He, l, d, b))) {
                                me = !1;
                                break
                            }
                        }
                        return b.delete(i), b.delete(a), me
                    }

                    function DI(i, a, l, d, v, b, $) {
                        switch (l) {
                            case O:
                                if (i.byteLength != a.byteLength || i.byteOffset != a.byteOffset) return !1;
                                i = i.buffer, a = a.buffer;
                            case Pe:
                                return !(i.byteLength != a.byteLength || !b(new ko(i), new ko(a)));
                            case wt:
                            case lt:
                            case w:
                                return an(+i, +a);
                            case qt:
                                return i.name == a.name && i.message == a.message;
                            case se:
                            case A:
                                return i == a + "";
                            case p:
                                var R = _u;
                            case re:
                                var x = d & k;
                                if (R || (R = Co), i.size != a.size && !x) return !1;
                                var ee = $.get(i);
                                if (ee) return ee == a;
                                d |= M, $.set(i, a);
                                var te = Cm(R(i), R(a), d, v, b, $);
                                return $.delete(i), te;
                            case K:
                                if (va) return va.call(i) == va.call(a)
                        }
                        return !1
                    }

                    function MI(i, a, l, d, v, b) {
                        var $ = l & k,
                            R = Ku(i),
                            x = R.length,
                            ee = Ku(a),
                            te = ee.length;
                        if (x != te && !$) return !1;
                        for (var ae = x; ae--;) {
                            var me = R[ae];
                            if (!($ ? me in a : ht.call(a, me))) return !1
                        }
                        var we = b.get(i),
                            Ne = b.get(a);
                        if (we && Ne) return we == a && Ne == i;
                        var He = !0;
                        b.set(i, a), b.set(a, i);
                        for (var Le = $; ++ae < x;) {
                            me = R[ae];
                            var Xe = i[me],
                                Qe = a[me];
                            if (d) var Lr = $ ? d(Qe, Xe, me, a, i, b) : d(Xe, Qe, me, i, a, b);
                            if (!(Lr === r ? Xe === Qe || v(Xe, Qe, l, d, b) : Lr)) {
                                He = !1;
                                break
                            }
                            Le || (Le = me == "constructor")
                        }
                        if (He && !Le) {
                            var pr = i.constructor,
                                kr = a.constructor;
                            pr != kr && "constructor" in i && "constructor" in a && !(typeof pr == "function" && pr instanceof pr && typeof kr == "function" && kr instanceof kr) && (He = !1)
                        }
                        return b.delete(i), b.delete(a), He
                    }

                    function Rn(i) {
                        return Zu(km(i, r, Gm), i + "")
                    }

                    function Ku(i) {
                        return qg(i, Yt, Yu)
                    }

                    function Hu(i) {
                        return qg(i, br, $m)
                    }
                    var Vu = Fo ? function(i) {
                        return Fo.get(i)
                    } : df;

                    function Qo(i) {
                        for (var a = i.name + "", l = vs[a], d = ht.call(vs, a) ? l.length : 0; d--;) {
                            var v = l[d],
                                b = v.func;
                            if (b == null || b == i) return v.name
                        }
                        return a
                    }

                    function Es(i) {
                        var a = ht.call(_, "placeholder") ? _ : i;
                        return a.placeholder
                    }

                    function Re() {
                        var i = _.iteratee || uf;
                        return i = i === uf ? Xg : i, arguments.length ? i(arguments[0], arguments[1]) : i
                    }

                    function ec(i, a) {
                        var l = i.__data__;
                        return HI(a) ? l[typeof a == "string" ? "string" : "hash"] : l.map
                    }

                    function qu(i) {
                        for (var a = Yt(i), l = a.length; l--;) {
                            var d = a[l],
                                v = i[d];
                            a[l] = [d, v, Nm(v)]
                        }
                        return a
                    }

                    function ki(i, a) {
                        var l = Yw(i, a);
                        return zg(l) ? l : r
                    }

                    function UI(i) {
                        var a = ht.call(i, $i),
                            l = i[$i];
                        try {
                            i[$i] = r;
                            var d = !0
                        } catch {}
                        var v = No.call(i);
                        return d && (a ? i[$i] = l : delete i[$i]), v
                    }
                    var Yu = Eu ? function(i) {
                            return i == null ? [] : (i = gt(i), Wn(Eu(i), function(a) {
                                return Pg.call(i, a)
                            }))
                        } : hf,
                        $m = Eu ? function(i) {
                            for (var a = []; i;) Kn(a, Yu(i)), i = Po(i);
                            return a
                        } : hf,
                        or = dr;
                    (Tu && or(new Tu(new ArrayBuffer(1))) != O || pa && or(new pa) != p || Su && or(Su.resolve()) != Y || ms && or(new ms) != re || ga && or(new ga) != pe) && (or = function(i) {
                        var a = dr(i),
                            l = a == B ? i.constructor : r,
                            d = l ? Pi(l) : "";
                        if (d) switch (d) {
                            case bO:
                                return O;
                            case EO:
                                return p;
                            case TO:
                                return Y;
                            case SO:
                                return re;
                            case wO:
                                return pe
                        }
                        return a
                    });

                    function FI(i, a, l) {
                        for (var d = -1, v = l.length; ++d < v;) {
                            var b = l[d],
                                $ = b.size;
                            switch (b.type) {
                                case "drop":
                                    i += $;
                                    break;
                                case "dropRight":
                                    a -= $;
                                    break;
                                case "take":
                                    a = ar(a, i + $);
                                    break;
                                case "takeRight":
                                    i = jt(i, a - $);
                                    break
                            }
                        }
                        return {
                            start: i,
                            end: a
                        }
                    }

                    function BI(i) {
                        var a = i.match(VS);
                        return a ? a[1].split(qS) : []
                    }

                    function Am(i, a, l) {
                        a = zn(a, i);
                        for (var d = -1, v = a.length, b = !1; ++d < v;) {
                            var $ = vn(a[d]);
                            if (!(b = i != null && l(i, $))) break;
                            i = i[$]
                        }
                        return b || ++d != v ? b : (v = i == null ? 0 : i.length, !!v && oc(v) && Nn($, v) && (je(i) || xi(i)))
                    }

                    function jI(i) {
                        var a = i.length,
                            l = new i.constructor(a);
                        return a && typeof i[0] == "string" && ht.call(i, "index") && (l.index = i.index, l.input = i.input), l
                    }

                    function Rm(i) {
                        return typeof i.constructor == "function" && !wa(i) ? ys(Po(i)) : {}
                    }

                    function GI(i, a, l) {
                        var d = i.constructor;
                        switch (a) {
                            case Pe:
                                return ju(i);
                            case wt:
                            case lt:
                                return new d(+i);
                            case O:
                                return OI(i, l);
                            case T:
                            case N:
                            case S:
                            case L:
                            case Q:
                            case ne:
                            case _e:
                            case Te:
                            case dt:
                                return dm(i, l);
                            case p:
                                return new d;
                            case w:
                            case A:
                                return new d(i);
                            case se:
                                return II(i);
                            case re:
                                return new d;
                            case K:
                                return CI(i)
                        }
                    }

                    function WI(i, a) {
                        var l = a.length;
                        if (!l) return i;
                        var d = l - 1;
                        return a[d] = (l > 1 ? "& " : "") + a[d], a = a.join(l > 2 ? ", " : " "), i.replace(HS, `{
/* [wrapped with ` + a + `] */
`)
                    }

                    function KI(i) {
                        return je(i) || xi(i) || !!(xg && i && i[xg])
                    }

                    function Nn(i, a) {
                        var l = typeof i;
                        return a = a == null ? ve : a, !!a && (l == "number" || l != "symbol" && rw.test(i)) && i > -1 && i % 1 == 0 && i < a
                    }

                    function hr(i, a, l) {
                        if (!Ct(l)) return !1;
                        var d = typeof a;
                        return (d == "number" ? _r(l) && Nn(a, l.length) : d == "string" && a in l) ? an(l[a], i) : !1
                    }

                    function zu(i, a) {
                        if (je(i)) return !1;
                        var l = typeof i;
                        return l == "number" || l == "symbol" || l == "boolean" || i == null || Nr(i) ? !0 : jS.test(i) || !BS.test(i) || a != null && i in gt(a)
                    }

                    function HI(i) {
                        var a = typeof i;
                        return a == "string" || a == "number" || a == "symbol" || a == "boolean" ? i !== "__proto__" : i === null
                    }

                    function Xu(i) {
                        var a = Qo(i),
                            l = _[a];
                        if (typeof l != "function" || !(a in Ze.prototype)) return !1;
                        if (i === l) return !0;
                        var d = Vu(l);
                        return !!d && i === d[0]
                    }

                    function VI(i) {
                        return !!Ng && Ng in i
                    }
                    var qI = Ao ? Ln : pf;

                    function wa(i) {
                        var a = i && i.constructor,
                            l = typeof a == "function" && a.prototype || gs;
                        return i === l
                    }

                    function Nm(i) {
                        return i === i && !Ct(i)
                    }

                    function Lm(i, a) {
                        return function(l) {
                            return l == null ? !1 : l[i] === a && (a !== r || i in gt(l))
                        }
                    }

                    function YI(i) {
                        var a = sc(i, function(d) {
                                return l.size === h && l.clear(), d
                            }),
                            l = a.cache;
                        return a
                    }

                    function zI(i, a) {
                        var l = i[1],
                            d = a[1],
                            v = l | d,
                            b = v < (j | C | oe),
                            $ = d == oe && l == X || d == oe && l == ce && i[7].length <= a[8] || d == (oe | ce) && a[7].length <= a[8] && l == X;
                        if (!(b || $)) return i;
                        d & j && (i[2] = a[2], v |= l & j ? 0 : H);
                        var R = a[3];
                        if (R) {
                            var x = i[3];
                            i[3] = x ? pm(x, R, a[4]) : R, i[4] = x ? Hn(i[3], m) : a[4]
                        }
                        return R = a[5], R && (x = i[5], i[5] = x ? gm(x, R, a[6]) : R, i[6] = x ? Hn(i[5], m) : a[6]), R = a[7], R && (i[7] = R), d & oe && (i[8] = i[8] == null ? a[8] : ar(i[8], a[8])), i[9] == null && (i[9] = a[9]), i[0] = a[0], i[1] = v, i
                    }

                    function XI(i) {
                        var a = [];
                        if (i != null)
                            for (var l in gt(i)) a.push(l);
                        return a
                    }

                    function JI(i) {
                        return No.call(i)
                    }

                    function km(i, a, l) {
                        return a = jt(a === r ? i.length - 1 : a, 0),
                            function() {
                                for (var d = arguments, v = -1, b = jt(d.length - a, 0), $ = V(b); ++v < b;) $[v] = d[a + v];
                                v = -1;
                                for (var R = V(a + 1); ++v < a;) R[v] = d[v];
                                return R[a] = l($), $r(i, this, R)
                            }
                    }

                    function Pm(i, a) {
                        return a.length < 2 ? i : Li(i, Vr(a, 0, -1))
                    }

                    function ZI(i, a) {
                        for (var l = i.length, d = ar(a.length, l), v = yr(i); d--;) {
                            var b = a[d];
                            i[d] = Nn(b, l) ? v[b] : r
                        }
                        return i
                    }

                    function Ju(i, a) {
                        if (!(a === "constructor" && typeof i[a] == "function") && a != "__proto__") return i[a]
                    }
                    var xm = Mm(im),
                        Oa = hO || function(i, a) {
                            return Zt.setTimeout(i, a)
                        },
                        Zu = Mm(EI);

                    function Dm(i, a, l) {
                        var d = a + "";
                        return Zu(i, WI(d, QI(BI(d), l)))
                    }

                    function Mm(i) {
                        var a = 0,
                            l = 0;
                        return function() {
                            var d = vO(),
                                v = Ie - (d - l);
                            if (l = d, v > 0) {
                                if (++a >= fe) return arguments[0]
                            } else a = 0;
                            return i.apply(r, arguments)
                        }
                    }

                    function tc(i, a) {
                        var l = -1,
                            d = i.length,
                            v = d - 1;
                        for (a = a === r ? d : a; ++l < a;) {
                            var b = Pu(l, v),
                                $ = i[b];
                            i[b] = i[l], i[l] = $
                        }
                        return i.length = a, i
                    }
                    var Um = YI(function(i) {
                        var a = [];
                        return i.charCodeAt(0) === 46 && a.push(""), i.replace(GS, function(l, d, v, b) {
                            a.push(v ? b.replace(XS, "$1") : d || l)
                        }), a
                    });

                    function vn(i) {
                        if (typeof i == "string" || Nr(i)) return i;
                        var a = i + "";
                        return a == "0" && 1 / i == -be ? "-0" : a
                    }

                    function Pi(i) {
                        if (i != null) {
                            try {
                                return Ro.call(i)
                            } catch {}
                            try {
                                return i + ""
                            } catch {}
                        }
                        return ""
                    }

                    function QI(i, a) {
                        return Gr(Cr, function(l) {
                            var d = "_." + l[0];
                            a & l[1] && !Oo(i, d) && i.push(d)
                        }), i.sort()
                    }

                    function Fm(i) {
                        if (i instanceof Ze) return i.clone();
                        var a = new Kr(i.__wrapped__, i.__chain__);
                        return a.__actions__ = yr(i.__actions__), a.__index__ = i.__index__, a.__values__ = i.__values__, a
                    }

                    function eC(i, a, l) {
                        (l ? hr(i, a, l) : a === r) ? a = 1: a = jt(We(a), 0);
                        var d = i == null ? 0 : i.length;
                        if (!d || a < 1) return [];
                        for (var v = 0, b = 0, $ = V(Mo(d / a)); v < d;) $[b++] = Vr(i, v, v += a);
                        return $
                    }

                    function tC(i) {
                        for (var a = -1, l = i == null ? 0 : i.length, d = 0, v = []; ++a < l;) {
                            var b = i[a];
                            b && (v[d++] = b)
                        }
                        return v
                    }

                    function rC() {
                        var i = arguments.length;
                        if (!i) return [];
                        for (var a = V(i - 1), l = arguments[0], d = i; d--;) a[d - 1] = arguments[d];
                        return Kn(je(l) ? yr(l) : [l], Qt(a, 1))
                    }
                    var nC = Ye(function(i, a) {
                            return kt(i) ? _a(i, Qt(a, 1, kt, !0)) : []
                        }),
                        iC = Ye(function(i, a) {
                            var l = qr(a);
                            return kt(l) && (l = r), kt(i) ? _a(i, Qt(a, 1, kt, !0), Re(l, 2)) : []
                        }),
                        sC = Ye(function(i, a) {
                            var l = qr(a);
                            return kt(l) && (l = r), kt(i) ? _a(i, Qt(a, 1, kt, !0), r, l) : []
                        });

                    function aC(i, a, l) {
                        var d = i == null ? 0 : i.length;
                        return d ? (a = l || a === r ? 1 : We(a), Vr(i, a < 0 ? 0 : a, d)) : []
                    }

                    function oC(i, a, l) {
                        var d = i == null ? 0 : i.length;
                        return d ? (a = l || a === r ? 1 : We(a), a = d - a, Vr(i, 0, a < 0 ? 0 : a)) : []
                    }

                    function cC(i, a) {
                        return i && i.length ? qo(i, Re(a, 3), !0, !0) : []
                    }

                    function lC(i, a) {
                        return i && i.length ? qo(i, Re(a, 3), !0) : []
                    }

                    function uC(i, a, l, d) {
                        var v = i == null ? 0 : i.length;
                        return v ? (l && typeof l != "number" && hr(i, a, l) && (l = 0, d = v), rI(i, a, l, d)) : []
                    }

                    function Bm(i, a, l) {
                        var d = i == null ? 0 : i.length;
                        if (!d) return -1;
                        var v = l == null ? 0 : We(l);
                        return v < 0 && (v = jt(d + v, 0)), Io(i, Re(a, 3), v)
                    }

                    function jm(i, a, l) {
                        var d = i == null ? 0 : i.length;
                        if (!d) return -1;
                        var v = d - 1;
                        return l !== r && (v = We(l), v = l < 0 ? jt(d + v, 0) : ar(v, d - 1)), Io(i, Re(a, 3), v, !0)
                    }

                    function Gm(i) {
                        var a = i == null ? 0 : i.length;
                        return a ? Qt(i, 1) : []
                    }

                    function fC(i) {
                        var a = i == null ? 0 : i.length;
                        return a ? Qt(i, be) : []
                    }

                    function dC(i, a) {
                        var l = i == null ? 0 : i.length;
                        return l ? (a = a === r ? 1 : We(a), Qt(i, a)) : []
                    }

                    function hC(i) {
                        for (var a = -1, l = i == null ? 0 : i.length, d = {}; ++a < l;) {
                            var v = i[a];
                            d[v[0]] = v[1]
                        }
                        return d
                    }

                    function Wm(i) {
                        return i && i.length ? i[0] : r
                    }

                    function pC(i, a, l) {
                        var d = i == null ? 0 : i.length;
                        if (!d) return -1;
                        var v = l == null ? 0 : We(l);
                        return v < 0 && (v = jt(d + v, 0)), fs(i, a, v)
                    }

                    function gC(i) {
                        var a = i == null ? 0 : i.length;
                        return a ? Vr(i, 0, -1) : []
                    }
                    var mC = Ye(function(i) {
                            var a = Ot(i, Fu);
                            return a.length && a[0] === i[0] ? Au(a) : []
                        }),
                        vC = Ye(function(i) {
                            var a = qr(i),
                                l = Ot(i, Fu);
                            return a === qr(l) ? a = r : l.pop(), l.length && l[0] === i[0] ? Au(l, Re(a, 2)) : []
                        }),
                        yC = Ye(function(i) {
                            var a = qr(i),
                                l = Ot(i, Fu);
                            return a = typeof a == "function" ? a : r, a && l.pop(), l.length && l[0] === i[0] ? Au(l, r, a) : []
                        });

                    function _C(i, a) {
                        return i == null ? "" : gO.call(i, a)
                    }

                    function qr(i) {
                        var a = i == null ? 0 : i.length;
                        return a ? i[a - 1] : r
                    }

                    function bC(i, a, l) {
                        var d = i == null ? 0 : i.length;
                        if (!d) return -1;
                        var v = d;
                        return l !== r && (v = We(l), v = v < 0 ? jt(d + v, 0) : ar(v, d - 1)), a === a ? Qw(i, a, v) : Io(i, Sg, v, !0)
                    }

                    function EC(i, a) {
                        return i && i.length ? em(i, We(a)) : r
                    }
                    var TC = Ye(Km);

                    function Km(i, a) {
                        return i && i.length && a && a.length ? ku(i, a) : i
                    }

                    function SC(i, a, l) {
                        return i && i.length && a && a.length ? ku(i, a, Re(l, 2)) : i
                    }

                    function wC(i, a, l) {
                        return i && i.length && a && a.length ? ku(i, a, r, l) : i
                    }
                    var OC = Rn(function(i, a) {
                        var l = i == null ? 0 : i.length,
                            d = Ou(i, a);
                        return nm(i, Ot(a, function(v) {
                            return Nn(v, l) ? +v : v
                        }).sort(hm)), d
                    });

                    function IC(i, a) {
                        var l = [];
                        if (!(i && i.length)) return l;
                        var d = -1,
                            v = [],
                            b = i.length;
                        for (a = Re(a, 3); ++d < b;) {
                            var $ = i[d];
                            a($, d, i) && (l.push($), v.push(d))
                        }
                        return nm(i, v), l
                    }

                    function Qu(i) {
                        return i == null ? i : _O.call(i)
                    }

                    function CC(i, a, l) {
                        var d = i == null ? 0 : i.length;
                        return d ? (l && typeof l != "number" && hr(i, a, l) ? (a = 0, l = d) : (a = a == null ? 0 : We(a), l = l === r ? d : We(l)), Vr(i, a, l)) : []
                    }

                    function $C(i, a) {
                        return Vo(i, a)
                    }

                    function AC(i, a, l) {
                        return Du(i, a, Re(l, 2))
                    }

                    function RC(i, a) {
                        var l = i == null ? 0 : i.length;
                        if (l) {
                            var d = Vo(i, a);
                            if (d < l && an(i[d], a)) return d
                        }
                        return -1
                    }

                    function NC(i, a) {
                        return Vo(i, a, !0)
                    }

                    function LC(i, a, l) {
                        return Du(i, a, Re(l, 2), !0)
                    }

                    function kC(i, a) {
                        var l = i == null ? 0 : i.length;
                        if (l) {
                            var d = Vo(i, a, !0) - 1;
                            if (an(i[d], a)) return d
                        }
                        return -1
                    }

                    function PC(i) {
                        return i && i.length ? sm(i) : []
                    }

                    function xC(i, a) {
                        return i && i.length ? sm(i, Re(a, 2)) : []
                    }

                    function DC(i) {
                        var a = i == null ? 0 : i.length;
                        return a ? Vr(i, 1, a) : []
                    }

                    function MC(i, a, l) {
                        return i && i.length ? (a = l || a === r ? 1 : We(a), Vr(i, 0, a < 0 ? 0 : a)) : []
                    }

                    function UC(i, a, l) {
                        var d = i == null ? 0 : i.length;
                        return d ? (a = l || a === r ? 1 : We(a), a = d - a, Vr(i, a < 0 ? 0 : a, d)) : []
                    }

                    function FC(i, a) {
                        return i && i.length ? qo(i, Re(a, 3), !1, !0) : []
                    }

                    function BC(i, a) {
                        return i && i.length ? qo(i, Re(a, 3)) : []
                    }
                    var jC = Ye(function(i) {
                            return Yn(Qt(i, 1, kt, !0))
                        }),
                        GC = Ye(function(i) {
                            var a = qr(i);
                            return kt(a) && (a = r), Yn(Qt(i, 1, kt, !0), Re(a, 2))
                        }),
                        WC = Ye(function(i) {
                            var a = qr(i);
                            return a = typeof a == "function" ? a : r, Yn(Qt(i, 1, kt, !0), r, a)
                        });

                    function KC(i) {
                        return i && i.length ? Yn(i) : []
                    }

                    function HC(i, a) {
                        return i && i.length ? Yn(i, Re(a, 2)) : []
                    }

                    function VC(i, a) {
                        return a = typeof a == "function" ? a : r, i && i.length ? Yn(i, r, a) : []
                    }

                    function ef(i) {
                        if (!(i && i.length)) return [];
                        var a = 0;
                        return i = Wn(i, function(l) {
                            if (kt(l)) return a = jt(l.length, a), !0
                        }), vu(a, function(l) {
                            return Ot(i, pu(l))
                        })
                    }

                    function Hm(i, a) {
                        if (!(i && i.length)) return [];
                        var l = ef(i);
                        return a == null ? l : Ot(l, function(d) {
                            return $r(a, r, d)
                        })
                    }
                    var qC = Ye(function(i, a) {
                            return kt(i) ? _a(i, a) : []
                        }),
                        YC = Ye(function(i) {
                            return Uu(Wn(i, kt))
                        }),
                        zC = Ye(function(i) {
                            var a = qr(i);
                            return kt(a) && (a = r), Uu(Wn(i, kt), Re(a, 2))
                        }),
                        XC = Ye(function(i) {
                            var a = qr(i);
                            return a = typeof a == "function" ? a : r, Uu(Wn(i, kt), r, a)
                        }),
                        JC = Ye(ef);

                    function ZC(i, a) {
                        return lm(i || [], a || [], ya)
                    }

                    function QC(i, a) {
                        return lm(i || [], a || [], Ta)
                    }
                    var e$ = Ye(function(i) {
                        var a = i.length,
                            l = a > 1 ? i[a - 1] : r;
                        return l = typeof l == "function" ? (i.pop(), l) : r, Hm(i, l)
                    });

                    function Vm(i) {
                        var a = _(i);
                        return a.__chain__ = !0, a
                    }

                    function t$(i, a) {
                        return a(i), i
                    }

                    function rc(i, a) {
                        return a(i)
                    }
                    var r$ = Rn(function(i) {
                        var a = i.length,
                            l = a ? i[0] : 0,
                            d = this.__wrapped__,
                            v = function(b) {
                                return Ou(b, i)
                            };
                        return a > 1 || this.__actions__.length || !(d instanceof Ze) || !Nn(l) ? this.thru(v) : (d = d.slice(l, +l + (a ? 1 : 0)), d.__actions__.push({
                            func: rc,
                            args: [v],
                            thisArg: r
                        }), new Kr(d, this.__chain__).thru(function(b) {
                            return a && !b.length && b.push(r), b
                        }))
                    });

                    function n$() {
                        return Vm(this)
                    }

                    function i$() {
                        return new Kr(this.value(), this.__chain__)
                    }

                    function s$() {
                        this.__values__ === r && (this.__values__ = av(this.value()));
                        var i = this.__index__ >= this.__values__.length,
                            a = i ? r : this.__values__[this.__index__++];
                        return {
                            done: i,
                            value: a
                        }
                    }

                    function a$() {
                        return this
                    }

                    function o$(i) {
                        for (var a, l = this; l instanceof jo;) {
                            var d = Fm(l);
                            d.__index__ = 0, d.__values__ = r, a ? v.__wrapped__ = d : a = d;
                            var v = d;
                            l = l.__wrapped__
                        }
                        return v.__wrapped__ = i, a
                    }

                    function c$() {
                        var i = this.__wrapped__;
                        if (i instanceof Ze) {
                            var a = i;
                            return this.__actions__.length && (a = new Ze(this)), a = a.reverse(), a.__actions__.push({
                                func: rc,
                                args: [Qu],
                                thisArg: r
                            }), new Kr(a, this.__chain__)
                        }
                        return this.thru(Qu)
                    }

                    function l$() {
                        return cm(this.__wrapped__, this.__actions__)
                    }
                    var u$ = Yo(function(i, a, l) {
                        ht.call(i, l) ? ++i[l] : $n(i, l, 1)
                    });

                    function f$(i, a, l) {
                        var d = je(i) ? Eg : tI;
                        return l && hr(i, a, l) && (a = r), d(i, Re(a, 3))
                    }

                    function d$(i, a) {
                        var l = je(i) ? Wn : Hg;
                        return l(i, Re(a, 3))
                    }
                    var h$ = _m(Bm),
                        p$ = _m(jm);

                    function g$(i, a) {
                        return Qt(nc(i, a), 1)
                    }

                    function m$(i, a) {
                        return Qt(nc(i, a), be)
                    }

                    function v$(i, a, l) {
                        return l = l === r ? 1 : We(l), Qt(nc(i, a), l)
                    }

                    function qm(i, a) {
                        var l = je(i) ? Gr : qn;
                        return l(i, Re(a, 3))
                    }

                    function Ym(i, a) {
                        var l = je(i) ? Dw : Kg;
                        return l(i, Re(a, 3))
                    }
                    var y$ = Yo(function(i, a, l) {
                        ht.call(i, l) ? i[l].push(a) : $n(i, l, [a])
                    });

                    function _$(i, a, l, d) {
                        i = _r(i) ? i : Ss(i), l = l && !d ? We(l) : 0;
                        var v = i.length;
                        return l < 0 && (l = jt(v + l, 0)), cc(i) ? l <= v && i.indexOf(a, l) > -1 : !!v && fs(i, a, l) > -1
                    }
                    var b$ = Ye(function(i, a, l) {
                            var d = -1,
                                v = typeof a == "function",
                                b = _r(i) ? V(i.length) : [];
                            return qn(i, function($) {
                                b[++d] = v ? $r(a, $, l) : ba($, a, l)
                            }), b
                        }),
                        E$ = Yo(function(i, a, l) {
                            $n(i, l, a)
                        });

                    function nc(i, a) {
                        var l = je(i) ? Ot : Jg;
                        return l(i, Re(a, 3))
                    }

                    function T$(i, a, l, d) {
                        return i == null ? [] : (je(a) || (a = a == null ? [] : [a]), l = d ? r : l, je(l) || (l = l == null ? [] : [l]), tm(i, a, l))
                    }
                    var S$ = Yo(function(i, a, l) {
                        i[l ? 0 : 1].push(a)
                    }, function() {
                        return [
                            [],
                            []
                        ]
                    });

                    function w$(i, a, l) {
                        var d = je(i) ? du : Og,
                            v = arguments.length < 3;
                        return d(i, Re(a, 4), l, v, qn)
                    }

                    function O$(i, a, l) {
                        var d = je(i) ? Mw : Og,
                            v = arguments.length < 3;
                        return d(i, Re(a, 4), l, v, Kg)
                    }

                    function I$(i, a) {
                        var l = je(i) ? Wn : Hg;
                        return l(i, ac(Re(a, 3)))
                    }

                    function C$(i) {
                        var a = je(i) ? Bg : _I;
                        return a(i)
                    }

                    function $$(i, a, l) {
                        (l ? hr(i, a, l) : a === r) ? a = 1: a = We(a);
                        var d = je(i) ? XO : bI;
                        return d(i, a)
                    }

                    function A$(i) {
                        var a = je(i) ? JO : TI;
                        return a(i)
                    }

                    function R$(i) {
                        if (i == null) return 0;
                        if (_r(i)) return cc(i) ? hs(i) : i.length;
                        var a = or(i);
                        return a == p || a == re ? i.size : Nu(i).length
                    }

                    function N$(i, a, l) {
                        var d = je(i) ? hu : SI;
                        return l && hr(i, a, l) && (a = r), d(i, Re(a, 3))
                    }
                    var L$ = Ye(function(i, a) {
                            if (i == null) return [];
                            var l = a.length;
                            return l > 1 && hr(i, a[0], a[1]) ? a = [] : l > 2 && hr(a[0], a[1], a[2]) && (a = [a[0]]), tm(i, Qt(a, 1), [])
                        }),
                        ic = dO || function() {
                            return Zt.Date.now()
                        };

                    function k$(i, a) {
                        if (typeof a != "function") throw new Wr(c);
                        return i = We(i),
                            function() {
                                if (--i < 1) return a.apply(this, arguments)
                            }
                    }

                    function zm(i, a, l) {
                        return a = l ? r : a, a = i && a == null ? i.length : a, An(i, oe, r, r, r, r, a)
                    }

                    function Xm(i, a) {
                        var l;
                        if (typeof a != "function") throw new Wr(c);
                        return i = We(i),
                            function() {
                                return --i > 0 && (l = a.apply(this, arguments)), i <= 1 && (a = r), l
                            }
                    }
                    var tf = Ye(function(i, a, l) {
                            var d = j;
                            if (l.length) {
                                var v = Hn(l, Es(tf));
                                d |= G
                            }
                            return An(i, d, a, l, v)
                        }),
                        Jm = Ye(function(i, a, l) {
                            var d = j | C;
                            if (l.length) {
                                var v = Hn(l, Es(Jm));
                                d |= G
                            }
                            return An(a, d, i, l, v)
                        });

                    function Zm(i, a, l) {
                        a = l ? r : a;
                        var d = An(i, X, r, r, r, r, r, a);
                        return d.placeholder = Zm.placeholder, d
                    }

                    function Qm(i, a, l) {
                        a = l ? r : a;
                        var d = An(i, W, r, r, r, r, r, a);
                        return d.placeholder = Qm.placeholder, d
                    }

                    function ev(i, a, l) {
                        var d, v, b, $, R, x, ee = 0,
                            te = !1,
                            ae = !1,
                            me = !0;
                        if (typeof i != "function") throw new Wr(c);
                        a = Yr(a) || 0, Ct(l) && (te = !!l.leading, ae = "maxWait" in l, b = ae ? jt(Yr(l.maxWait) || 0, a) : b, me = "trailing" in l ? !!l.trailing : me);

                        function we(Pt) {
                            var on = d,
                                Pn = v;
                            return d = v = r, ee = Pt, $ = i.apply(Pn, on), $
                        }

                        function Ne(Pt) {
                            return ee = Pt, R = Oa(Xe, a), te ? we(Pt) : $
                        }

                        function He(Pt) {
                            var on = Pt - x,
                                Pn = Pt - ee,
                                _v = a - on;
                            return ae ? ar(_v, b - Pn) : _v
                        }

                        function Le(Pt) {
                            var on = Pt - x,
                                Pn = Pt - ee;
                            return x === r || on >= a || on < 0 || ae && Pn >= b
                        }

                        function Xe() {
                            var Pt = ic();
                            if (Le(Pt)) return Qe(Pt);
                            R = Oa(Xe, He(Pt))
                        }

                        function Qe(Pt) {
                            return R = r, me && d ? we(Pt) : (d = v = r, $)
                        }

                        function Lr() {
                            R !== r && um(R), ee = 0, d = x = v = R = r
                        }

                        function pr() {
                            return R === r ? $ : Qe(ic())
                        }

                        function kr() {
                            var Pt = ic(),
                                on = Le(Pt);
                            if (d = arguments, v = this, x = Pt, on) {
                                if (R === r) return Ne(x);
                                if (ae) return um(R), R = Oa(Xe, a), we(x)
                            }
                            return R === r && (R = Oa(Xe, a)), $
                        }
                        return kr.cancel = Lr, kr.flush = pr, kr
                    }
                    var P$ = Ye(function(i, a) {
                            return Wg(i, 1, a)
                        }),
                        x$ = Ye(function(i, a, l) {
                            return Wg(i, Yr(a) || 0, l)
                        });

                    function D$(i) {
                        return An(i, ue)
                    }

                    function sc(i, a) {
                        if (typeof i != "function" || a != null && typeof a != "function") throw new Wr(c);
                        var l = function() {
                            var d = arguments,
                                v = a ? a.apply(this, d) : d[0],
                                b = l.cache;
                            if (b.has(v)) return b.get(v);
                            var $ = i.apply(this, d);
                            return l.cache = b.set(v, $) || b, $
                        };
                        return l.cache = new(sc.Cache || Cn), l
                    }
                    sc.Cache = Cn;

                    function ac(i) {
                        if (typeof i != "function") throw new Wr(c);
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

                    function M$(i) {
                        return Xm(2, i)
                    }
                    var U$ = wI(function(i, a) {
                            a = a.length == 1 && je(a[0]) ? Ot(a[0], Ar(Re())) : Ot(Qt(a, 1), Ar(Re()));
                            var l = a.length;
                            return Ye(function(d) {
                                for (var v = -1, b = ar(d.length, l); ++v < b;) d[v] = a[v].call(this, d[v]);
                                return $r(i, this, d)
                            })
                        }),
                        rf = Ye(function(i, a) {
                            var l = Hn(a, Es(rf));
                            return An(i, G, r, a, l)
                        }),
                        tv = Ye(function(i, a) {
                            var l = Hn(a, Es(tv));
                            return An(i, Z, r, a, l)
                        }),
                        F$ = Rn(function(i, a) {
                            return An(i, ce, r, r, r, a)
                        });

                    function B$(i, a) {
                        if (typeof i != "function") throw new Wr(c);
                        return a = a === r ? a : We(a), Ye(i, a)
                    }

                    function j$(i, a) {
                        if (typeof i != "function") throw new Wr(c);
                        return a = a == null ? 0 : jt(We(a), 0), Ye(function(l) {
                            var d = l[a],
                                v = Xn(l, 0, a);
                            return d && Kn(v, d), $r(i, this, v)
                        })
                    }

                    function G$(i, a, l) {
                        var d = !0,
                            v = !0;
                        if (typeof i != "function") throw new Wr(c);
                        return Ct(l) && (d = "leading" in l ? !!l.leading : d, v = "trailing" in l ? !!l.trailing : v), ev(i, a, {
                            leading: d,
                            maxWait: a,
                            trailing: v
                        })
                    }

                    function W$(i) {
                        return zm(i, 1)
                    }

                    function K$(i, a) {
                        return rf(Bu(a), i)
                    }

                    function H$() {
                        if (!arguments.length) return [];
                        var i = arguments[0];
                        return je(i) ? i : [i]
                    }

                    function V$(i) {
                        return Hr(i, I)
                    }

                    function q$(i, a) {
                        return a = typeof a == "function" ? a : r, Hr(i, I, a)
                    }

                    function Y$(i) {
                        return Hr(i, y | I)
                    }

                    function z$(i, a) {
                        return a = typeof a == "function" ? a : r, Hr(i, y | I, a)
                    }

                    function X$(i, a) {
                        return a == null || Gg(i, a, Yt(a))
                    }

                    function an(i, a) {
                        return i === a || i !== i && a !== a
                    }
                    var J$ = Zo($u),
                        Z$ = Zo(function(i, a) {
                            return i >= a
                        }),
                        xi = Yg(function() {
                            return arguments
                        }()) ? Yg : function(i) {
                            return Nt(i) && ht.call(i, "callee") && !Pg.call(i, "callee")
                        },
                        je = V.isArray,
                        Q$ = gg ? Ar(gg) : oI;

                    function _r(i) {
                        return i != null && oc(i.length) && !Ln(i)
                    }

                    function kt(i) {
                        return Nt(i) && _r(i)
                    }

                    function eA(i) {
                        return i === !0 || i === !1 || Nt(i) && dr(i) == wt
                    }
                    var Jn = pO || pf,
                        tA = mg ? Ar(mg) : cI;

                    function rA(i) {
                        return Nt(i) && i.nodeType === 1 && !Ia(i)
                    }

                    function nA(i) {
                        if (i == null) return !0;
                        if (_r(i) && (je(i) || typeof i == "string" || typeof i.splice == "function" || Jn(i) || Ts(i) || xi(i))) return !i.length;
                        var a = or(i);
                        if (a == p || a == re) return !i.size;
                        if (wa(i)) return !Nu(i).length;
                        for (var l in i)
                            if (ht.call(i, l)) return !1;
                        return !0
                    }

                    function iA(i, a) {
                        return Ea(i, a)
                    }

                    function sA(i, a, l) {
                        l = typeof l == "function" ? l : r;
                        var d = l ? l(i, a) : r;
                        return d === r ? Ea(i, a, r, l) : !!d
                    }

                    function nf(i) {
                        if (!Nt(i)) return !1;
                        var a = dr(i);
                        return a == qt || a == Mt || typeof i.message == "string" && typeof i.name == "string" && !Ia(i)
                    }

                    function aA(i) {
                        return typeof i == "number" && Dg(i)
                    }

                    function Ln(i) {
                        if (!Ct(i)) return !1;
                        var a = dr(i);
                        return a == Ut || a == g || a == ct || a == le
                    }

                    function rv(i) {
                        return typeof i == "number" && i == We(i)
                    }

                    function oc(i) {
                        return typeof i == "number" && i > -1 && i % 1 == 0 && i <= ve
                    }

                    function Ct(i) {
                        var a = typeof i;
                        return i != null && (a == "object" || a == "function")
                    }

                    function Nt(i) {
                        return i != null && typeof i == "object"
                    }
                    var nv = vg ? Ar(vg) : uI;

                    function oA(i, a) {
                        return i === a || Ru(i, a, qu(a))
                    }

                    function cA(i, a, l) {
                        return l = typeof l == "function" ? l : r, Ru(i, a, qu(a), l)
                    }

                    function lA(i) {
                        return iv(i) && i != +i
                    }

                    function uA(i) {
                        if (qI(i)) throw new Ue(o);
                        return zg(i)
                    }

                    function fA(i) {
                        return i === null
                    }

                    function dA(i) {
                        return i == null
                    }

                    function iv(i) {
                        return typeof i == "number" || Nt(i) && dr(i) == w
                    }

                    function Ia(i) {
                        if (!Nt(i) || dr(i) != B) return !1;
                        var a = Po(i);
                        if (a === null) return !0;
                        var l = ht.call(a, "constructor") && a.constructor;
                        return typeof l == "function" && l instanceof l && Ro.call(l) == cO
                    }
                    var sf = yg ? Ar(yg) : fI;

                    function hA(i) {
                        return rv(i) && i >= -ve && i <= ve
                    }
                    var sv = _g ? Ar(_g) : dI;

                    function cc(i) {
                        return typeof i == "string" || !je(i) && Nt(i) && dr(i) == A
                    }

                    function Nr(i) {
                        return typeof i == "symbol" || Nt(i) && dr(i) == K
                    }
                    var Ts = bg ? Ar(bg) : hI;

                    function pA(i) {
                        return i === r
                    }

                    function gA(i) {
                        return Nt(i) && or(i) == pe
                    }

                    function mA(i) {
                        return Nt(i) && dr(i) == Ae
                    }
                    var vA = Zo(Lu),
                        yA = Zo(function(i, a) {
                            return i <= a
                        });

                    function av(i) {
                        if (!i) return [];
                        if (_r(i)) return cc(i) ? nn(i) : yr(i);
                        if (ha && i[ha]) return Xw(i[ha]());
                        var a = or(i),
                            l = a == p ? _u : a == re ? Co : Ss;
                        return l(i)
                    }

                    function kn(i) {
                        if (!i) return i === 0 ? i : 0;
                        if (i = Yr(i), i === be || i === -be) {
                            var a = i < 0 ? -1 : 1;
                            return a * Se
                        }
                        return i === i ? i : 0
                    }

                    function We(i) {
                        var a = kn(i),
                            l = a % 1;
                        return a === a ? l ? a - l : a : 0
                    }

                    function ov(i) {
                        return i ? Ni(We(i), 0, Ge) : 0
                    }

                    function Yr(i) {
                        if (typeof i == "number") return i;
                        if (Nr(i)) return Me;
                        if (Ct(i)) {
                            var a = typeof i.valueOf == "function" ? i.valueOf() : i;
                            i = Ct(a) ? a + "" : a
                        }
                        if (typeof i != "string") return i === 0 ? i : +i;
                        i = Ig(i);
                        var l = QS.test(i);
                        return l || tw.test(i) ? kw(i.slice(2), l ? 2 : 8) : ZS.test(i) ? Me : +i
                    }

                    function cv(i) {
                        return mn(i, br(i))
                    }

                    function _A(i) {
                        return i ? Ni(We(i), -ve, ve) : i === 0 ? i : 0
                    }

                    function ut(i) {
                        return i == null ? "" : Rr(i)
                    }
                    var bA = _s(function(i, a) {
                            if (wa(a) || _r(a)) {
                                mn(a, Yt(a), i);
                                return
                            }
                            for (var l in a) ht.call(a, l) && ya(i, l, a[l])
                        }),
                        lv = _s(function(i, a) {
                            mn(a, br(a), i)
                        }),
                        lc = _s(function(i, a, l, d) {
                            mn(a, br(a), i, d)
                        }),
                        EA = _s(function(i, a, l, d) {
                            mn(a, Yt(a), i, d)
                        }),
                        TA = Rn(Ou);

                    function SA(i, a) {
                        var l = ys(i);
                        return a == null ? l : jg(l, a)
                    }
                    var wA = Ye(function(i, a) {
                            i = gt(i);
                            var l = -1,
                                d = a.length,
                                v = d > 2 ? a[2] : r;
                            for (v && hr(a[0], a[1], v) && (d = 1); ++l < d;)
                                for (var b = a[l], $ = br(b), R = -1, x = $.length; ++R < x;) {
                                    var ee = $[R],
                                        te = i[ee];
                                    (te === r || an(te, gs[ee]) && !ht.call(i, ee)) && (i[ee] = b[ee])
                                }
                            return i
                        }),
                        OA = Ye(function(i) {
                            return i.push(r, Im), $r(uv, r, i)
                        });

                    function IA(i, a) {
                        return Tg(i, Re(a, 3), gn)
                    }

                    function CA(i, a) {
                        return Tg(i, Re(a, 3), Cu)
                    }

                    function $A(i, a) {
                        return i == null ? i : Iu(i, Re(a, 3), br)
                    }

                    function AA(i, a) {
                        return i == null ? i : Vg(i, Re(a, 3), br)
                    }

                    function RA(i, a) {
                        return i && gn(i, Re(a, 3))
                    }

                    function NA(i, a) {
                        return i && Cu(i, Re(a, 3))
                    }

                    function LA(i) {
                        return i == null ? [] : Ko(i, Yt(i))
                    }

                    function kA(i) {
                        return i == null ? [] : Ko(i, br(i))
                    }

                    function af(i, a, l) {
                        var d = i == null ? r : Li(i, a);
                        return d === r ? l : d
                    }

                    function PA(i, a) {
                        return i != null && Am(i, a, nI)
                    }

                    function of(i, a) {
                        return i != null && Am(i, a, iI)
                    }
                    var xA = Em(function(i, a, l) {
                            a != null && typeof a.toString != "function" && (a = No.call(a)), i[a] = l
                        }, lf(Er)),
                        DA = Em(function(i, a, l) {
                            a != null && typeof a.toString != "function" && (a = No.call(a)), ht.call(i, a) ? i[a].push(l) : i[a] = [l]
                        }, Re),
                        MA = Ye(ba);

                    function Yt(i) {
                        return _r(i) ? Fg(i) : Nu(i)
                    }

                    function br(i) {
                        return _r(i) ? Fg(i, !0) : pI(i)
                    }

                    function UA(i, a) {
                        var l = {};
                        return a = Re(a, 3), gn(i, function(d, v, b) {
                            $n(l, a(d, v, b), d)
                        }), l
                    }

                    function FA(i, a) {
                        var l = {};
                        return a = Re(a, 3), gn(i, function(d, v, b) {
                            $n(l, v, a(d, v, b))
                        }), l
                    }
                    var BA = _s(function(i, a, l) {
                            Ho(i, a, l)
                        }),
                        uv = _s(function(i, a, l, d) {
                            Ho(i, a, l, d)
                        }),
                        jA = Rn(function(i, a) {
                            var l = {};
                            if (i == null) return l;
                            var d = !1;
                            a = Ot(a, function(b) {
                                return b = zn(b, i), d || (d = b.length > 1), b
                            }), mn(i, Hu(i), l), d && (l = Hr(l, y | E | I, xI));
                            for (var v = a.length; v--;) Mu(l, a[v]);
                            return l
                        });

                    function GA(i, a) {
                        return fv(i, ac(Re(a)))
                    }
                    var WA = Rn(function(i, a) {
                        return i == null ? {} : mI(i, a)
                    });

                    function fv(i, a) {
                        if (i == null) return {};
                        var l = Ot(Hu(i), function(d) {
                            return [d]
                        });
                        return a = Re(a), rm(i, l, function(d, v) {
                            return a(d, v[0])
                        })
                    }

                    function KA(i, a, l) {
                        a = zn(a, i);
                        var d = -1,
                            v = a.length;
                        for (v || (v = 1, i = r); ++d < v;) {
                            var b = i == null ? r : i[vn(a[d])];
                            b === r && (d = v, b = l), i = Ln(b) ? b.call(i) : b
                        }
                        return i
                    }

                    function HA(i, a, l) {
                        return i == null ? i : Ta(i, a, l)
                    }

                    function VA(i, a, l, d) {
                        return d = typeof d == "function" ? d : r, i == null ? i : Ta(i, a, l, d)
                    }
                    var dv = wm(Yt),
                        hv = wm(br);

                    function qA(i, a, l) {
                        var d = je(i),
                            v = d || Jn(i) || Ts(i);
                        if (a = Re(a, 4), l == null) {
                            var b = i && i.constructor;
                            v ? l = d ? new b : [] : Ct(i) ? l = Ln(b) ? ys(Po(i)) : {} : l = {}
                        }
                        return (v ? Gr : gn)(i, function($, R, x) {
                            return a(l, $, R, x)
                        }), l
                    }

                    function YA(i, a) {
                        return i == null ? !0 : Mu(i, a)
                    }

                    function zA(i, a, l) {
                        return i == null ? i : om(i, a, Bu(l))
                    }

                    function XA(i, a, l, d) {
                        return d = typeof d == "function" ? d : r, i == null ? i : om(i, a, Bu(l), d)
                    }

                    function Ss(i) {
                        return i == null ? [] : yu(i, Yt(i))
                    }

                    function JA(i) {
                        return i == null ? [] : yu(i, br(i))
                    }

                    function ZA(i, a, l) {
                        return l === r && (l = a, a = r), l !== r && (l = Yr(l), l = l === l ? l : 0), a !== r && (a = Yr(a), a = a === a ? a : 0), Ni(Yr(i), a, l)
                    }

                    function QA(i, a, l) {
                        return a = kn(a), l === r ? (l = a, a = 0) : l = kn(l), i = Yr(i), sI(i, a, l)
                    }

                    function eR(i, a, l) {
                        if (l && typeof l != "boolean" && hr(i, a, l) && (a = l = r), l === r && (typeof a == "boolean" ? (l = a, a = r) : typeof i == "boolean" && (l = i, i = r)), i === r && a === r ? (i = 0, a = 1) : (i = kn(i), a === r ? (a = i, i = 0) : a = kn(a)), i > a) {
                            var d = i;
                            i = a, a = d
                        }
                        if (l || i % 1 || a % 1) {
                            var v = Mg();
                            return ar(i + v * (a - i + Lw("1e-" + ((v + "").length - 1))), a)
                        }
                        return Pu(i, a)
                    }
                    var tR = bs(function(i, a, l) {
                        return a = a.toLowerCase(), i + (l ? pv(a) : a)
                    });

                    function pv(i) {
                        return cf(ut(i).toLowerCase())
                    }

                    function gv(i) {
                        return i = ut(i), i && i.replace(nw, Hw).replace(Tw, "")
                    }

                    function rR(i, a, l) {
                        i = ut(i), a = Rr(a);
                        var d = i.length;
                        l = l === r ? d : Ni(We(l), 0, d);
                        var v = l;
                        return l -= a.length, l >= 0 && i.slice(l, v) == a
                    }

                    function nR(i) {
                        return i = ut(i), i && MS.test(i) ? i.replace(Vp, Vw) : i
                    }

                    function iR(i) {
                        return i = ut(i), i && WS.test(i) ? i.replace(ru, "\\$&") : i
                    }
                    var sR = bs(function(i, a, l) {
                            return i + (l ? "-" : "") + a.toLowerCase()
                        }),
                        aR = bs(function(i, a, l) {
                            return i + (l ? " " : "") + a.toLowerCase()
                        }),
                        oR = ym("toLowerCase");

                    function cR(i, a, l) {
                        i = ut(i), a = We(a);
                        var d = a ? hs(i) : 0;
                        if (!a || d >= a) return i;
                        var v = (a - d) / 2;
                        return Jo(Uo(v), l) + i + Jo(Mo(v), l)
                    }

                    function lR(i, a, l) {
                        i = ut(i), a = We(a);
                        var d = a ? hs(i) : 0;
                        return a && d < a ? i + Jo(a - d, l) : i
                    }

                    function uR(i, a, l) {
                        i = ut(i), a = We(a);
                        var d = a ? hs(i) : 0;
                        return a && d < a ? Jo(a - d, l) + i : i
                    }

                    function fR(i, a, l) {
                        return l || a == null ? a = 0 : a && (a = +a), yO(ut(i).replace(nu, ""), a || 0)
                    }

                    function dR(i, a, l) {
                        return (l ? hr(i, a, l) : a === r) ? a = 1 : a = We(a), xu(ut(i), a)
                    }

                    function hR() {
                        var i = arguments,
                            a = ut(i[0]);
                        return i.length < 3 ? a : a.replace(i[1], i[2])
                    }
                    var pR = bs(function(i, a, l) {
                        return i + (l ? "_" : "") + a.toLowerCase()
                    });

                    function gR(i, a, l) {
                        return l && typeof l != "number" && hr(i, a, l) && (a = l = r), l = l === r ? Ge : l >>> 0, l ? (i = ut(i), i && (typeof a == "string" || a != null && !sf(a)) && (a = Rr(a), !a && ds(i)) ? Xn(nn(i), 0, l) : i.split(a, l)) : []
                    }
                    var mR = bs(function(i, a, l) {
                        return i + (l ? " " : "") + cf(a)
                    });

                    function vR(i, a, l) {
                        return i = ut(i), l = l == null ? 0 : Ni(We(l), 0, i.length), a = Rr(a), i.slice(l, l + a.length) == a
                    }

                    function yR(i, a, l) {
                        var d = _.templateSettings;
                        l && hr(i, a, l) && (a = r), i = ut(i), a = lc({}, a, d, Om);
                        var v = lc({}, a.imports, d.imports, Om),
                            b = Yt(v),
                            $ = yu(v, b),
                            R, x, ee = 0,
                            te = a.interpolate || To,
                            ae = "__p += '",
                            me = bu((a.escape || To).source + "|" + te.source + "|" + (te === qp ? JS : To).source + "|" + (a.evaluate || To).source + "|$", "g"),
                            we = "//# sourceURL=" + (ht.call(a, "sourceURL") ? (a.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Cw + "]") + `
`;
                        i.replace(me, function(Le, Xe, Qe, Lr, pr, kr) {
                            return Qe || (Qe = Lr), ae += i.slice(ee, kr).replace(iw, qw), Xe && (R = !0, ae += `' +
__e(` + Xe + `) +
'`), pr && (x = !0, ae += `';
` + pr + `;
__p += '`), Qe && (ae += `' +
((__t = (` + Qe + `)) == null ? '' : __t) +
'`), ee = kr + Le.length, Le
                        }), ae += `';
`;
                        var Ne = ht.call(a, "variable") && a.variable;
                        if (!Ne) ae = `with (obj) {
` + ae + `
}
`;
                        else if (zS.test(Ne)) throw new Ue(u);
                        ae = (x ? ae.replace(sr, "") : ae).replace(xe, "$1").replace(fa, "$1;"), ae = "function(" + (Ne || "obj") + `) {
` + (Ne ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (R ? ", __e = _.escape" : "") + (x ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + ae + `return __p
}`;
                        var He = vv(function() {
                            return st(b, we + "return " + ae).apply(r, $)
                        });
                        if (He.source = ae, nf(He)) throw He;
                        return He
                    }

                    function _R(i) {
                        return ut(i).toLowerCase()
                    }

                    function bR(i) {
                        return ut(i).toUpperCase()
                    }

                    function ER(i, a, l) {
                        if (i = ut(i), i && (l || a === r)) return Ig(i);
                        if (!i || !(a = Rr(a))) return i;
                        var d = nn(i),
                            v = nn(a),
                            b = Cg(d, v),
                            $ = $g(d, v) + 1;
                        return Xn(d, b, $).join("")
                    }

                    function TR(i, a, l) {
                        if (i = ut(i), i && (l || a === r)) return i.slice(0, Rg(i) + 1);
                        if (!i || !(a = Rr(a))) return i;
                        var d = nn(i),
                            v = $g(d, nn(a)) + 1;
                        return Xn(d, 0, v).join("")
                    }

                    function SR(i, a, l) {
                        if (i = ut(i), i && (l || a === r)) return i.replace(nu, "");
                        if (!i || !(a = Rr(a))) return i;
                        var d = nn(i),
                            v = Cg(d, nn(a));
                        return Xn(d, v).join("")
                    }

                    function wR(i, a) {
                        var l = $e,
                            d = Ce;
                        if (Ct(a)) {
                            var v = "separator" in a ? a.separator : v;
                            l = "length" in a ? We(a.length) : l, d = "omission" in a ? Rr(a.omission) : d
                        }
                        i = ut(i);
                        var b = i.length;
                        if (ds(i)) {
                            var $ = nn(i);
                            b = $.length
                        }
                        if (l >= b) return i;
                        var R = l - hs(d);
                        if (R < 1) return d;
                        var x = $ ? Xn($, 0, R).join("") : i.slice(0, R);
                        if (v === r) return x + d;
                        if ($ && (R += x.length - R), sf(v)) {
                            if (i.slice(R).search(v)) {
                                var ee, te = x;
                                for (v.global || (v = bu(v.source, ut(Yp.exec(v)) + "g")), v.lastIndex = 0; ee = v.exec(te);) var ae = ee.index;
                                x = x.slice(0, ae === r ? R : ae)
                            }
                        } else if (i.indexOf(Rr(v), R) != R) {
                            var me = x.lastIndexOf(v);
                            me > -1 && (x = x.slice(0, me))
                        }
                        return x + d
                    }

                    function OR(i) {
                        return i = ut(i), i && DS.test(i) ? i.replace(Hp, eO) : i
                    }
                    var IR = bs(function(i, a, l) {
                            return i + (l ? " " : "") + a.toUpperCase()
                        }),
                        cf = ym("toUpperCase");

                    function mv(i, a, l) {
                        return i = ut(i), a = l ? r : a, a === r ? zw(i) ? nO(i) : Bw(i) : i.match(a) || []
                    }
                    var vv = Ye(function(i, a) {
                            try {
                                return $r(i, r, a)
                            } catch (l) {
                                return nf(l) ? l : new Ue(l)
                            }
                        }),
                        CR = Rn(function(i, a) {
                            return Gr(a, function(l) {
                                l = vn(l), $n(i, l, tf(i[l], i))
                            }), i
                        });

                    function $R(i) {
                        var a = i == null ? 0 : i.length,
                            l = Re();
                        return i = a ? Ot(i, function(d) {
                            if (typeof d[1] != "function") throw new Wr(c);
                            return [l(d[0]), d[1]]
                        }) : [], Ye(function(d) {
                            for (var v = -1; ++v < a;) {
                                var b = i[v];
                                if ($r(b[0], this, d)) return $r(b[1], this, d)
                            }
                        })
                    }

                    function AR(i) {
                        return eI(Hr(i, y))
                    }

                    function lf(i) {
                        return function() {
                            return i
                        }
                    }

                    function RR(i, a) {
                        return i == null || i !== i ? a : i
                    }
                    var NR = bm(),
                        LR = bm(!0);

                    function Er(i) {
                        return i
                    }

                    function uf(i) {
                        return Xg(typeof i == "function" ? i : Hr(i, y))
                    }

                    function kR(i) {
                        return Zg(Hr(i, y))
                    }

                    function PR(i, a) {
                        return Qg(i, Hr(a, y))
                    }
                    var xR = Ye(function(i, a) {
                            return function(l) {
                                return ba(l, i, a)
                            }
                        }),
                        DR = Ye(function(i, a) {
                            return function(l) {
                                return ba(i, l, a)
                            }
                        });

                    function ff(i, a, l) {
                        var d = Yt(a),
                            v = Ko(a, d);
                        l == null && !(Ct(a) && (v.length || !d.length)) && (l = a, a = i, i = this, v = Ko(a, Yt(a)));
                        var b = !(Ct(l) && "chain" in l) || !!l.chain,
                            $ = Ln(i);
                        return Gr(v, function(R) {
                            var x = a[R];
                            i[R] = x, $ && (i.prototype[R] = function() {
                                var ee = this.__chain__;
                                if (b || ee) {
                                    var te = i(this.__wrapped__),
                                        ae = te.__actions__ = yr(this.__actions__);
                                    return ae.push({
                                        func: x,
                                        args: arguments,
                                        thisArg: i
                                    }), te.__chain__ = ee, te
                                }
                                return x.apply(i, Kn([this.value()], arguments))
                            })
                        }), i
                    }

                    function MR() {
                        return Zt._ === this && (Zt._ = lO), this
                    }

                    function df() {}

                    function UR(i) {
                        return i = We(i), Ye(function(a) {
                            return em(a, i)
                        })
                    }
                    var FR = Gu(Ot),
                        BR = Gu(Eg),
                        jR = Gu(hu);

                    function yv(i) {
                        return zu(i) ? pu(vn(i)) : vI(i)
                    }

                    function GR(i) {
                        return function(a) {
                            return i == null ? r : Li(i, a)
                        }
                    }
                    var WR = Tm(),
                        KR = Tm(!0);

                    function hf() {
                        return []
                    }

                    function pf() {
                        return !1
                    }

                    function HR() {
                        return {}
                    }

                    function VR() {
                        return ""
                    }

                    function qR() {
                        return !0
                    }

                    function YR(i, a) {
                        if (i = We(i), i < 1 || i > ve) return [];
                        var l = Ge,
                            d = ar(i, Ge);
                        a = Re(a), i -= Ge;
                        for (var v = vu(d, a); ++l < i;) a(l);
                        return v
                    }

                    function zR(i) {
                        return je(i) ? Ot(i, vn) : Nr(i) ? [i] : yr(Um(ut(i)))
                    }

                    function XR(i) {
                        var a = ++oO;
                        return ut(i) + a
                    }
                    var JR = Xo(function(i, a) {
                            return i + a
                        }, 0),
                        ZR = Wu("ceil"),
                        QR = Xo(function(i, a) {
                            return i / a
                        }, 1),
                        eN = Wu("floor");

                    function tN(i) {
                        return i && i.length ? Wo(i, Er, $u) : r
                    }

                    function rN(i, a) {
                        return i && i.length ? Wo(i, Re(a, 2), $u) : r
                    }

                    function nN(i) {
                        return wg(i, Er)
                    }

                    function iN(i, a) {
                        return wg(i, Re(a, 2))
                    }

                    function sN(i) {
                        return i && i.length ? Wo(i, Er, Lu) : r
                    }

                    function aN(i, a) {
                        return i && i.length ? Wo(i, Re(a, 2), Lu) : r
                    }
                    var oN = Xo(function(i, a) {
                            return i * a
                        }, 1),
                        cN = Wu("round"),
                        lN = Xo(function(i, a) {
                            return i - a
                        }, 0);

                    function uN(i) {
                        return i && i.length ? mu(i, Er) : 0
                    }

                    function fN(i, a) {
                        return i && i.length ? mu(i, Re(a, 2)) : 0
                    }
                    return _.after = k$, _.ary = zm, _.assign = bA, _.assignIn = lv, _.assignInWith = lc, _.assignWith = EA, _.at = TA, _.before = Xm, _.bind = tf, _.bindAll = CR, _.bindKey = Jm, _.castArray = H$, _.chain = Vm, _.chunk = eC, _.compact = tC, _.concat = rC, _.cond = $R, _.conforms = AR, _.constant = lf, _.countBy = u$, _.create = SA, _.curry = Zm, _.curryRight = Qm, _.debounce = ev, _.defaults = wA, _.defaultsDeep = OA, _.defer = P$, _.delay = x$, _.difference = nC, _.differenceBy = iC, _.differenceWith = sC, _.drop = aC, _.dropRight = oC, _.dropRightWhile = cC, _.dropWhile = lC, _.fill = uC, _.filter = d$, _.flatMap = g$, _.flatMapDeep = m$, _.flatMapDepth = v$, _.flatten = Gm, _.flattenDeep = fC, _.flattenDepth = dC, _.flip = D$, _.flow = NR, _.flowRight = LR, _.fromPairs = hC, _.functions = LA, _.functionsIn = kA, _.groupBy = y$, _.initial = gC, _.intersection = mC, _.intersectionBy = vC, _.intersectionWith = yC, _.invert = xA, _.invertBy = DA, _.invokeMap = b$, _.iteratee = uf, _.keyBy = E$, _.keys = Yt, _.keysIn = br, _.map = nc, _.mapKeys = UA, _.mapValues = FA, _.matches = kR, _.matchesProperty = PR, _.memoize = sc, _.merge = BA, _.mergeWith = uv, _.method = xR, _.methodOf = DR, _.mixin = ff, _.negate = ac, _.nthArg = UR, _.omit = jA, _.omitBy = GA, _.once = M$, _.orderBy = T$, _.over = FR, _.overArgs = U$, _.overEvery = BR, _.overSome = jR, _.partial = rf, _.partialRight = tv, _.partition = S$, _.pick = WA, _.pickBy = fv, _.property = yv, _.propertyOf = GR, _.pull = TC, _.pullAll = Km, _.pullAllBy = SC, _.pullAllWith = wC, _.pullAt = OC, _.range = WR, _.rangeRight = KR, _.rearg = F$, _.reject = I$, _.remove = IC, _.rest = B$, _.reverse = Qu, _.sampleSize = $$, _.set = HA, _.setWith = VA, _.shuffle = A$, _.slice = CC, _.sortBy = L$, _.sortedUniq = PC, _.sortedUniqBy = xC, _.split = gR, _.spread = j$, _.tail = DC, _.take = MC, _.takeRight = UC, _.takeRightWhile = FC, _.takeWhile = BC, _.tap = t$, _.throttle = G$, _.thru = rc, _.toArray = av, _.toPairs = dv, _.toPairsIn = hv, _.toPath = zR, _.toPlainObject = cv, _.transform = qA, _.unary = W$, _.union = jC, _.unionBy = GC, _.unionWith = WC, _.uniq = KC, _.uniqBy = HC, _.uniqWith = VC, _.unset = YA, _.unzip = ef, _.unzipWith = Hm, _.update = zA, _.updateWith = XA, _.values = Ss, _.valuesIn = JA, _.without = qC, _.words = mv, _.wrap = K$, _.xor = YC, _.xorBy = zC, _.xorWith = XC, _.zip = JC, _.zipObject = ZC, _.zipObjectDeep = QC, _.zipWith = e$, _.entries = dv, _.entriesIn = hv, _.extend = lv, _.extendWith = lc, ff(_, _), _.add = JR, _.attempt = vv, _.camelCase = tR, _.capitalize = pv, _.ceil = ZR, _.clamp = ZA, _.clone = V$, _.cloneDeep = Y$, _.cloneDeepWith = z$, _.cloneWith = q$, _.conformsTo = X$, _.deburr = gv, _.defaultTo = RR, _.divide = QR, _.endsWith = rR, _.eq = an, _.escape = nR, _.escapeRegExp = iR, _.every = f$, _.find = h$, _.findIndex = Bm, _.findKey = IA, _.findLast = p$, _.findLastIndex = jm, _.findLastKey = CA, _.floor = eN, _.forEach = qm, _.forEachRight = Ym, _.forIn = $A, _.forInRight = AA, _.forOwn = RA, _.forOwnRight = NA, _.get = af, _.gt = J$, _.gte = Z$, _.has = PA, _.hasIn = of, _.head = Wm, _.identity = Er, _.includes = _$, _.indexOf = pC, _.inRange = QA, _.invoke = MA, _.isArguments = xi, _.isArray = je, _.isArrayBuffer = Q$, _.isArrayLike = _r, _.isArrayLikeObject = kt, _.isBoolean = eA, _.isBuffer = Jn, _.isDate = tA, _.isElement = rA, _.isEmpty = nA, _.isEqual = iA, _.isEqualWith = sA, _.isError = nf, _.isFinite = aA, _.isFunction = Ln, _.isInteger = rv, _.isLength = oc, _.isMap = nv, _.isMatch = oA, _.isMatchWith = cA, _.isNaN = lA, _.isNative = uA, _.isNil = dA, _.isNull = fA, _.isNumber = iv, _.isObject = Ct, _.isObjectLike = Nt, _.isPlainObject = Ia, _.isRegExp = sf, _.isSafeInteger = hA, _.isSet = sv, _.isString = cc, _.isSymbol = Nr, _.isTypedArray = Ts, _.isUndefined = pA, _.isWeakMap = gA, _.isWeakSet = mA, _.join = _C, _.kebabCase = sR, _.last = qr, _.lastIndexOf = bC, _.lowerCase = aR, _.lowerFirst = oR, _.lt = vA, _.lte = yA, _.max = tN, _.maxBy = rN, _.mean = nN, _.meanBy = iN, _.min = sN, _.minBy = aN, _.stubArray = hf, _.stubFalse = pf, _.stubObject = HR, _.stubString = VR, _.stubTrue = qR, _.multiply = oN, _.nth = EC, _.noConflict = MR, _.noop = df, _.now = ic, _.pad = cR, _.padEnd = lR, _.padStart = uR, _.parseInt = fR, _.random = eR, _.reduce = w$, _.reduceRight = O$, _.repeat = dR, _.replace = hR, _.result = KA, _.round = cN, _.runInContext = P, _.sample = C$, _.size = R$, _.snakeCase = pR, _.some = N$, _.sortedIndex = $C, _.sortedIndexBy = AC, _.sortedIndexOf = RC, _.sortedLastIndex = NC, _.sortedLastIndexBy = LC, _.sortedLastIndexOf = kC, _.startCase = mR, _.startsWith = vR, _.subtract = lN, _.sum = uN, _.sumBy = fN, _.template = yR, _.times = YR, _.toFinite = kn, _.toInteger = We, _.toLength = ov, _.toLower = _R, _.toNumber = Yr, _.toSafeInteger = _A, _.toString = ut, _.toUpper = bR, _.trim = ER, _.trimEnd = TR, _.trimStart = SR, _.truncate = wR, _.unescape = OR, _.uniqueId = XR, _.upperCase = IR, _.upperFirst = cf, _.each = qm, _.eachRight = Ym, _.first = Wm, ff(_, function() {
                        var i = {};
                        return gn(_, function(a, l) {
                            ht.call(_.prototype, l) || (i[l] = a)
                        }), i
                    }(), {
                        chain: !1
                    }), _.VERSION = n, Gr(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(i) {
                        _[i].placeholder = _
                    }), Gr(["drop", "take"], function(i, a) {
                        Ze.prototype[i] = function(l) {
                            l = l === r ? 1 : jt(We(l), 0);
                            var d = this.__filtered__ && !a ? new Ze(this) : this.clone();
                            return d.__filtered__ ? d.__takeCount__ = ar(l, d.__takeCount__) : d.__views__.push({
                                size: ar(l, Ge),
                                type: i + (d.__dir__ < 0 ? "Right" : "")
                            }), d
                        }, Ze.prototype[i + "Right"] = function(l) {
                            return this.reverse()[i](l).reverse()
                        }
                    }), Gr(["filter", "map", "takeWhile"], function(i, a) {
                        var l = a + 1,
                            d = l == U || l == de;
                        Ze.prototype[i] = function(v) {
                            var b = this.clone();
                            return b.__iteratees__.push({
                                iteratee: Re(v, 3),
                                type: l
                            }), b.__filtered__ = b.__filtered__ || d, b
                        }
                    }), Gr(["head", "last"], function(i, a) {
                        var l = "take" + (a ? "Right" : "");
                        Ze.prototype[i] = function() {
                            return this[l](1).value()[0]
                        }
                    }), Gr(["initial", "tail"], function(i, a) {
                        var l = "drop" + (a ? "" : "Right");
                        Ze.prototype[i] = function() {
                            return this.__filtered__ ? new Ze(this) : this[l](1)
                        }
                    }), Ze.prototype.compact = function() {
                        return this.filter(Er)
                    }, Ze.prototype.find = function(i) {
                        return this.filter(i).head()
                    }, Ze.prototype.findLast = function(i) {
                        return this.reverse().find(i)
                    }, Ze.prototype.invokeMap = Ye(function(i, a) {
                        return typeof i == "function" ? new Ze(this) : this.map(function(l) {
                            return ba(l, i, a)
                        })
                    }), Ze.prototype.reject = function(i) {
                        return this.filter(ac(Re(i)))
                    }, Ze.prototype.slice = function(i, a) {
                        i = We(i);
                        var l = this;
                        return l.__filtered__ && (i > 0 || a < 0) ? new Ze(l) : (i < 0 ? l = l.takeRight(-i) : i && (l = l.drop(i)), a !== r && (a = We(a), l = a < 0 ? l.dropRight(-a) : l.take(a - i)), l)
                    }, Ze.prototype.takeRightWhile = function(i) {
                        return this.reverse().takeWhile(i).reverse()
                    }, Ze.prototype.toArray = function() {
                        return this.take(Ge)
                    }, gn(Ze.prototype, function(i, a) {
                        var l = /^(?:filter|find|map|reject)|While$/.test(a),
                            d = /^(?:head|last)$/.test(a),
                            v = _[d ? "take" + (a == "last" ? "Right" : "") : a],
                            b = d || /^find/.test(a);
                        !v || (_.prototype[a] = function() {
                            var $ = this.__wrapped__,
                                R = d ? [1] : arguments,
                                x = $ instanceof Ze,
                                ee = R[0],
                                te = x || je($),
                                ae = function(Xe) {
                                    var Qe = v.apply(_, Kn([Xe], R));
                                    return d && me ? Qe[0] : Qe
                                };
                            te && l && typeof ee == "function" && ee.length != 1 && (x = te = !1);
                            var me = this.__chain__,
                                we = !!this.__actions__.length,
                                Ne = b && !me,
                                He = x && !we;
                            if (!b && te) {
                                $ = He ? $ : new Ze(this);
                                var Le = i.apply($, R);
                                return Le.__actions__.push({
                                    func: rc,
                                    args: [ae],
                                    thisArg: r
                                }), new Kr(Le, me)
                            }
                            return Ne && He ? i.apply(this, R) : (Le = this.thru(ae), Ne ? d ? Le.value()[0] : Le.value() : Le)
                        })
                    }), Gr(["pop", "push", "shift", "sort", "splice", "unshift"], function(i) {
                        var a = $o[i],
                            l = /^(?:push|sort|unshift)$/.test(i) ? "tap" : "thru",
                            d = /^(?:pop|shift)$/.test(i);
                        _.prototype[i] = function() {
                            var v = arguments;
                            if (d && !this.__chain__) {
                                var b = this.value();
                                return a.apply(je(b) ? b : [], v)
                            }
                            return this[l](function($) {
                                return a.apply(je($) ? $ : [], v)
                            })
                        }
                    }), gn(Ze.prototype, function(i, a) {
                        var l = _[a];
                        if (l) {
                            var d = l.name + "";
                            ht.call(vs, d) || (vs[d] = []), vs[d].push({
                                name: a,
                                func: l
                            })
                        }
                    }), vs[zo(r, C).name] = [{
                        name: "wrapper",
                        func: r
                    }], Ze.prototype.clone = OO, Ze.prototype.reverse = IO, Ze.prototype.value = CO, _.prototype.at = r$, _.prototype.chain = n$, _.prototype.commit = i$, _.prototype.next = s$, _.prototype.plant = o$, _.prototype.reverse = c$, _.prototype.toJSON = _.prototype.valueOf = _.prototype.value = l$, _.prototype.first = _.prototype.head, ha && (_.prototype[ha] = a$), _
                },
                ps = iO();
            Ci ? ((Ci.exports = ps)._ = ps, lu._ = ps) : Zt._ = ps
        }).call(Dt)
    })(xd, xd.exports);
    const rG = Je({
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
                    const t = this.$refs.content.getBoundingClientRect(),
                        r = this.$refs.stage,
                        n = r.getBoundingClientRect(),
                        s = r.parentElement.getBoundingClientRect(),
                        o = Math.max(s.width * .9, 240),
                        c = Math.max(this.windowHeight - t.height + n.height, 240),
                        u = this.stage.canvas.width,
                        f = this.stage.canvas.height,
                        h = Math.min(o / u, c / f),
                        m = u * h,
                        y = f * h;
                    return {
                        width: `${m}px`,
                        height: `${y}px`
                    }
                }
            },
            mounted() {
                this.onResizeWithContext = xd.exports.throttle(this.onResize.bind(this), 400), window.addEventListener("resize", this.onResizeWithContext), this.setupStage()
            },
            beforeUnmount() {
                window.removeEventListener("resize", this.onResizeWithContext), this.stage && this.stage.beforeDestroy()
            },
            methods: {
                setupStage() {
                    const e = this.$refs.stage,
                        t = {};
                    this.player.size && (t.width = this.player.size.width, t.height = this.player.size.height), this.player.thicknesses && (t.thickness = this.player.thicknesses[0]), this.player.colors && (t.color = this.player.colors[0]), this.player.maxPoints && (t.maxPoints = this.player.maxPoints);
                    const r = new P4(e, t);
                    r.canvas.lines = Bn([]), r.canvas.lines2 = Bn([]), this.stage = r, this.stage.on("up", () => {
                        var s;
                        if (!this.player.live) return;
                        const n = ((s = this.stage) == null ? void 0 : s.getObject()) || {};
                        n.done = !1, this.$ecast.updateObject(this.player.responseKey, n).catch(this.$handleEcastError)
                    })
                },
                onSubmitClick() {
                    if (!this.stage) return;
                    this.isSubmitting = !0, this.stage.canvas.submitting = !0;
                    const e = this.stage.getObject();
                    e.done = !0, e.action = "submit", this.$ecast.updateObject(this.player.responseKey, e).catch(this.$handleEcastError)
                },
                onResize() {
                    this.windowHeight = window.innerHeight
                }
            }
        }),
        nG = {
            class: "draw"
        },
        iG = {
            ref: "content",
            class: "content"
        },
        sG = {
            class: "constrain"
        },
        aG = {
            key: 0
        };

    function oG(e, t, r, n, s, o) {
        const c = Kt("bb");
        return F(), q("div", nG, [z("div", iG, [z("div", sG, [e.player.prompt ? Ve((F(), q("div", aG, null, 512)), [
            [c, e.player.prompt]
        ]) : Oe("", !0), z("div", {
            ref: "stage",
            class: "stage",
            style: sl(e.stageDimensions)
        }, null, 4), z("button", {
            onClick: t[0] || (t[0] = Or((...u) => e.onSubmitClick && e.onSubmitClick(...u), ["prevent"]))
        }, De(e.player.submitText || "SUBMIT"), 1)])], 512)])
    }
    const cG = qe(rG, [
            ["render", oG]
        ]),
        lG = Je({
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
                    var e, t, r, n, s, o;
                    return {
                        message: (t = (e = this.classes) == null ? void 0 : e.message) != null ? t : "message",
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
                    } catch (e) {
                        this.$handleEcastError(e)
                    }
                },
                async onStartClick() {
                    if (!!this.player.responseKey && !(this.shouldStart && !await Promise.resolve(this.shouldStart()))) try {
                        if (await this.$ecast.updateObject(this.player.responseKey, {
                                action: "start"
                            }), this.$ecastRoom.appTag) {
                            const e = this.gameStartedOptions || {};
                            e.numberOfPlayer = this.player.joinedPlayers, e.locale = this.$ecastRoom.locale, Vc.gameStarted(this.$ecastRoom.appTag, e)
                        }
                    } catch (e) {
                        this.$handleEcastError(e)
                    }
                }
            }
        }),
        uG = ["textContent"],
        fG = ["textContent"],
        dG = ["textContent"],
        hG = ["textContent"];

    function pG(e, t, r, n, s, o) {
        const c = Kt("t");
        return F(), q("div", {
            class: Fe(["lobby-actions", {
                vip: e.player.hasControls
            }])
        }, [!e.messageLocation || e.messageLocation === "top" ? (F(), q("p", {
            key: 0,
            class: Fe(e.localClasses.message),
            textContent: De(e.joinedCountText)
        }, null, 10, uG)) : Oe("", !0), e.player.hasControls ? (F(), q(ze, {
            key: 1
        }, [e.player.status === "waitingForMore" ? (F(), q("p", {
            key: 0,
            class: Fe(e.localClasses.status)
        }, De(e.neededText), 3)) : Oe("", !0), e.player.status === "canStart" ? (F(), q("button", {
            key: 1,
            class: Fe(e.localClasses.action),
            onClick: t[0] || (t[0] = (...u) => e.onStartClick && e.onStartClick(...u)),
            textContent: De(e.startText || e.$t("LOBBY.BUTTON_START"))
        }, null, 10, fG)) : Oe("", !0), e.player.status === "countdown" ? (F(), q("button", {
            key: 2,
            class: Fe(e.localClasses.action),
            onClick: t[1] || (t[1] = (...u) => e.onCancelClick && e.onCancelClick(...u)),
            textContent: De(e.cancelText || e.$t("LOBBY.BUTTON_CANCEL"))
        }, null, 10, dG)) : Oe("", !0)], 64)) : e.player.gamepadStart ? (F(), q(ze, {
            key: 2
        }, [e.player.status === "waitingForMore" ? (F(), q("p", {
            key: 0,
            class: Fe(e.localClasses.status)
        }, De(e.neededText), 3)) : Oe("", !0), e.player.status === "canStart" ? Ve((F(), q("p", {
            key: 1,
            class: Fe(e.localClasses.status)
        }, null, 2)), [
            [c, "LOBBY.WAITING_FOR_GAMEPAD"]
        ]) : Oe("", !0), e.player.status === "countdown" ? Ve((F(), q("p", {
            key: 2,
            class: Fe(e.localClasses.status)
        }, null, 2)), [
            [c, "LOBBY.GAME_STARTING"]
        ]) : Oe("", !0)], 64)) : (F(), q(ze, {
            key: 3
        }, [e.player.status === "waitingForMore" ? (F(), q("p", {
            key: 0,
            class: Fe(e.localClasses.status)
        }, De(e.neededText), 3)) : Oe("", !0), e.player.status === "canStart" ? (F(), q("p", {
            key: 1,
            class: Fe(e.localClasses.status)
        }, De(e.waitingForVIPText), 3)) : Oe("", !0), e.player.status === "countdown" ? Ve((F(), q("p", {
            key: 2,
            class: Fe(e.localClasses.status)
        }, null, 2)), [
            [c, "LOBBY.GAME_STARTING"]
        ]) : Oe("", !0)], 64)), e.messageLocation === "bottom" ? (F(), q("p", {
            key: 4,
            class: Fe(e.localClasses.message),
            textContent: De(e.joinedCountText)
        }, null, 10, hG)) : Oe("", !0)], 2)
    }
    const k0 = qe(lG, [
            ["render", pG]
        ]),
        gG = Je({
            components: {
                LobbyActions: k0
            },
            props: {
                player: Object
            }
        }),
        mG = {
            class: "lobby"
        },
        vG = {
            class: "constrain"
        };

    function yG(e, t, r, n, s, o) {
        const c = vt("LobbyActions");
        return F(), q("div", mG, [z("div", vG, [at(c, {
            player: e.player
        }, null, 8, ["player"])])])
    }
    const _G = qe(gG, [
            ["render", yG]
        ]),
        bG = Je({
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
                    var e, t, r, n, s, o;
                    return {
                        message: (t = (e = this.classes) == null ? void 0 : e.message) != null ? t : "message",
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
                            const e = this.gameStartedOptions || {};
                            e.isSequal = !0, e.locale = this.$ecastRoom.locale, Vc.gameStarted(this.$ecastRoom.appTag, e)
                        }
                    } catch (e) {
                        this.$handleEcastError(e)
                    }
                },
                async onNewPlayersClick() {
                    if (!!this.player.responseKey && !(this.shouldStart && !await Promise.resolve(this.shouldStart()))) try {
                        await this.$ecast.updateObject(this.player.responseKey, {
                            action: "newPlayers"
                        })
                    } catch (e) {
                        this.$handleEcastError(e)
                    }
                },
                async onCancelClick() {
                    if (!!this.player.responseKey) try {
                        await this.$ecast.updateObject(this.player.responseKey, {
                            action: "cancel"
                        })
                    } catch (e) {
                        this.$handleEcastError(e)
                    }
                }
            }
        });

    function EG(e, t, r, n, s, o) {
        const c = Kt("t");
        return e.player && e.player.status ? (F(), q("div", {
            key: 0,
            class: Fe(["post-game-actions", {
                vip: e.player.hasControls
            }])
        }, [!e.messageLocation || e.messageLocation === "top" ? Ve((F(), q("p", {
            key: 0,
            class: Fe(e.localClasses.message)
        }, null, 2)), [
            [c, "POST_GAME.PLAY_AGAIN"]
        ]) : Oe("", !0), e.player.hasControls ? (F(), q(ze, {
            key: 1
        }, [e.player.status === "waiting" ? Ve((F(), q("button", {
            key: 0,
            class: Fe(e.localClasses.action),
            onClick: t[0] || (t[0] = (...u) => e.onSamePlayersClick && e.onSamePlayersClick(...u))
        }, null, 2)), [
            [c, "POST_GAME.BUTTON_SAME_PLAYERS"]
        ]) : Oe("", !0), e.player.status === "waiting" ? Ve((F(), q("button", {
            key: 1,
            class: Fe(e.localClasses.action),
            onClick: t[1] || (t[1] = (...u) => e.onNewPlayersClick && e.onNewPlayersClick(...u))
        }, null, 2)), [
            [c, "POST_GAME.BUTTON_NEW_PLAYERS"]
        ]) : Oe("", !0), e.player.status === "countdown" ? Ve((F(), q("button", {
            key: 2,
            class: Fe(e.localClasses.action),
            onClick: t[2] || (t[2] = (...u) => e.onCancelClick && e.onCancelClick(...u))
        }, null, 2)), [
            [c, "LOBBY.BUTTON_CANCEL"]
        ]) : Oe("", !0)], 64)) : e.player.gamepadStart ? Ve((F(), q("p", {
            key: 2,
            class: Fe(e.localClasses.status)
        }, null, 2)), [
            [c, "LOBBY.WAITING_FOR_GAMEPAD"]
        ]) : (F(), q("p", {
            key: 3,
            class: Fe(e.localClasses.status)
        }, De(e.waitingForVIPText), 3)), e.messageLocation === "bottom" ? Ve((F(), q("p", {
            key: 4,
            class: Fe(e.localClasses.message)
        }, null, 2)), [
            [c, "POST_GAME.PLAY_AGAIN"]
        ]) : Oe("", !0)], 2)) : Oe("", !0)
    }
    const P0 = qe(bG, [
            ["render", EG]
        ]),
        TG = Je({
            components: {
                PostGameActions: P0
            },
            props: {
                player: Object
            }
        }),
        SG = {
            class: "post-game"
        },
        wG = {
            class: "constrain"
        };

    function OG(e, t, r, n, s, o) {
        const c = vt("PostGameActions");
        return F(), q("div", SG, [z("div", wG, [at(c, {
            player: e.player
        }, null, 8, ["player"])])])
    }
    const IG = qe(TG, [
            ["render", OG]
        ]),
        CG = Je({
            props: {
                player: Object
            },
            data() {
                return {
                    value: ""
                }
            },
            methods: {
                onValueInput(e) {
                    const t = e.target;
                    this.value = t.value
                },
                isObjectResponseKey() {
                    if (!this.player.responseType) {
                        const e = this.$ecast.entities[this.player.responseKey];
                        if (e && e instanceof wr.ObjectEntity) return !0
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
                    const e = this.player.send || {
                        action: this.player.action || "input"
                    };
                    e[this.player.key || "value"] = this.value, this.$ecast.updateObject(this.player.responseKey, e).catch(this.$handleEcastError)
                },
                sendAsText() {
                    this.$ecast.updateText(this.player.responseKey, this.value).catch(this.$handleEcastError)
                }
            }
        }),
        $G = {
            class: "single-text-entry"
        },
        AG = {
            class: "constrain"
        },
        RG = {
            key: 0
        },
        NG = {
            key: 1,
            for: "input"
        },
        LG = ["value", "rows", "placeholder", "disabled"],
        kG = ["value", "placeholder", "disabled"];

    function PG(e, t, r, n, s, o) {
        const c = Kt("bb");
        return F(), q("div", $G, [z("div", AG, [e.player.prompt ? Ve((F(), q("p", RG, null, 512)), [
            [c, e.player.prompt]
        ]) : Oe("", !0), e.player.label ? Ve((F(), q("label", NG, null, 512)), [
            [c, e.player.label]
        ]) : Oe("", !0), e.player.isMultiline ? (F(), q("textarea", {
            key: 2,
            id: "input",
            value: e.value,
            rows: e.player.lines || 2,
            placeholder: e.player.placeholder,
            disabled: e.player.isDisabled,
            onInput: t[0] || (t[0] = (...u) => e.onValueInput && e.onValueInput(...u))
        }, null, 40, LG)) : (F(), q("input", {
            key: 3,
            id: "input",
            type: "text",
            value: e.value,
            placeholder: e.player.placeholder,
            disabled: e.player.isDisabled,
            onInput: t[1] || (t[1] = (...u) => e.onValueInput && e.onValueInput(...u))
        }, null, 40, kG)), Ve(z("button", {
            onClick: t[2] || (t[2] = Or((...u) => e.onSubmitClick && e.onSubmitClick(...u), ["prevent"]))
        }, null, 512), [
            [c, e.player.submitText || "SUBMIT"]
        ])])])
    }
    const xG = qe(CG, [
            ["render", PG]
        ]),
        DG = Je({
            props: {
                player: Object
            },
            data() {
                return {
                    values: []
                }
            },
            beforeMount() {
                this.values = this.player.inputs.map(e => {
                    var t;
                    return (t = e.value) != null ? t : ""
                })
            },
            methods: {
                onValueInput(e, t) {
                    const r = e.target;
                    this.values[t] = r.value
                },
                isObjectResponseKey() {
                    if (!this.player.responseType) {
                        const e = this.$ecast.entities[this.player.responseKey];
                        if (e && e instanceof wr.ObjectEntity) return !0
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
                    const e = this.player.send || {
                        action: this.player.action || "input"
                    };
                    this.player.inputs.forEach((t, r) => {
                        var s;
                        const n = (s = t.key) != null ? s : `input${r}`;
                        e[n] = this.values[r]
                    }), this.$ecast.updateObject(this.player.responseKey, e).catch(this.$handleEcastError)
                },
                sendAsText() {
                    const e = this.player.separator || "|";
                    this.$ecast.updateText(this.player.responseKey, this.values.join(e)).catch(this.$handleEcastError)
                }
            }
        }),
        MG = {
            class: "multi-text-entry"
        },
        UG = {
            class: "constrain"
        },
        FG = {
            key: 0
        },
        BG = ["for"],
        jG = ["id", "value", "rows", "placeholder", "disabled", "onInput"],
        GG = ["id", "value", "placeholder", "disabled", "onInput"];

    function WG(e, t, r, n, s, o) {
        const c = Kt("bb");
        return F(), q("div", MG, [z("div", UG, [e.player.prompt ? Ve((F(), q("p", FG, null, 512)), [
            [c, e.player.prompt]
        ]) : Oe("", !0), (F(!0), q(ze, null, Qr(e.player.inputs, (u, f) => (F(), q(ze, null, [u.label ? Ve((F(), q("label", {
            key: `label-${u.key}`,
            for: `input-${f}`
        }, null, 8, BG)), [
            [c, u.label]
        ]) : Oe("", !0), u.isMultiline ? (F(), q("textarea", {
            id: `input-${f}`,
            key: `input-${f}`,
            value: e.values[f],
            rows: u.lines || 2,
            placeholder: u.placeholder,
            disabled: u.isDisabled,
            onInput: h => e.onValueInput(h, f)
        }, null, 40, jG)) : (F(), q("input", {
            id: `input-${f}`,
            key: `input-${u.key}`,
            type: "text",
            value: e.values[f],
            placeholder: u.placeholder,
            disabled: u.isDisabled,
            onInput: h => e.onValueInput(h, f)
        }, null, 40, GG))], 64))), 256)), Ve(z("button", {
            onClick: t[0] || (t[0] = Or((...u) => e.onSubmitClick && e.onSubmitClick(...u), ["prevent"]))
        }, null, 512), [
            [c, e.player.submitText || "SUBMIT"]
        ])])])
    }
    const KG = qe(DG, [
            ["render", WG]
        ]),
        HG = Je({
            props: {
                player: Object
            }
        }),
        VG = {
            class: "waiting"
        },
        qG = {
            class: "constrain"
        },
        YG = {
            key: 0
        };

    function zG(e, t, r, n, s, o) {
        const c = Kt("bb");
        return F(), q("div", VG, [z("div", qG, [e.player.message ? Ve((F(), q("p", YG, null, 512)), [
            [c, e.player.message]
        ]) : Oe("", !0)])])
    }
    const XG = qe(HG, [
        ["render", zG]
    ]);
    Je({
        components: {
            Choices: tP,
            Doodle: tG,
            Draw: cG,
            Lobby: _G,
            PostGame: IG,
            SingleTextEntry: xG,
            MultiTextEntry: KG,
            Waiting: XG
        },
        props: {
            applyStyling: {
                type: Boolean,
                default: !0
            },
            player: Object
        }
    });
    const JG = Je({
            props: {
                artifact: Object
            },
            computed: {
                link() {
                    if (!this.artifact) return;
                    const e = this.artifact.rootId.includes("test") ? "http" : "https",
                        t = this.artifact.rootId.includes("test") ? "games-test.jackbox.tv" : "games.jackbox.tv";
                    return `${e}://${t}/artifact/${this.artifact.categoryId}/${this.artifact.artifactId}/`
                },
                hasProvidedContent() {
                    return this.$slots.default !== void 0
                }
            },
            mounted() {
                Vc.galleryImpression(this.artifact.categoryId, "post_game")
            },
            methods: {
                onLinkClick() {
                    Vc.galleryClick(this.artifact.categoryId, "post_game"), no.setAsViewed(0)
                }
            }
        }),
        ZG = ["href", "aria-label"];

    function QG(e, t, r, n, s, o) {
        return e.link ? (F(), q("a", {
            key: 0,
            class: Fe([{
                "no-content": !e.hasProvidedContent
            }, "artifact-link"]),
            target: "_blank",
            href: e.link,
            "aria-label": e.$t("POST_GAME.GALLERY_LINK"),
            onClick: t[0] || (t[0] = (...c) => e.onLinkClick && e.onLinkClick(...c))
        }, [ML(e.$slots, "default")], 10, ZG)) : Oe("", !0)
    }
    const e5 = qe(JG, [
            ["render", QG]
        ]),
        t5 = Je({
            props: {
                modelValue: String
            },
            emits: {
                "update:modelValue": e => !0
            },
            watch: {
                modelValue(e, t) {
                    if (e !== t) {
                        const r = this.$refs.input;
                        r.value = e
                    }
                }
            },
            methods: {
                async onInput(e) {
                    const t = e.target,
                        r = t.maxLength === -1 ? Number.MAX_SAFE_INTEGER : t.maxLength;
                    if (t.value.length > r) {
                        t.value = t.value.substring(0, r);
                        return
                    }
                    this.$emit("update:modelValue", t.value), await this.$nextTick(), t.value !== this.modelValue && (t.value = this.modelValue)
                }
            }
        }),
        r5 = ["value"];

    function n5(e, t, r, n, s, o) {
        return F(), q("input", {
            ref: "input",
            value: e.modelValue,
            onInput: t[0] || (t[0] = (...c) => e.onInput && e.onInput(...c))
        }, null, 40, r5)
    }
    const i5 = qe(t5, [
        ["render", n5]
    ]);
    var Bi, yc, Ka = typeof Map == "function" ? new Map : (Bi = [], yc = [], {
            has: function(e) {
                return Bi.indexOf(e) > -1
            },
            get: function(e) {
                return yc[Bi.indexOf(e)]
            },
            set: function(e, t) {
                Bi.indexOf(e) === -1 && (Bi.push(e), yc.push(t))
            },
            delete: function(e) {
                var t = Bi.indexOf(e);
                t > -1 && (Bi.splice(t, 1), yc.splice(t, 1))
            }
        }),
        x0 = function(e) {
            return new Event(e, {
                bubbles: !0
            })
        };
    try {
        new Event("test")
    } catch {
        x0 = function(t) {
            var r = document.createEvent("Event");
            return r.initEvent(t, !0, !1), r
        }
    }

    function s5(e) {
        var t = Ka.get(e);
        t && t.destroy()
    }

    function a5(e) {
        var t = Ka.get(e);
        t && t.update()
    }
    var Pa = null;
    typeof window > "u" || typeof window.getComputedStyle != "function" ? ((Pa = function(e) {
        return e
    }).destroy = function(e) {
        return e
    }, Pa.update = function(e) {
        return e
    }) : ((Pa = function(e, t) {
        return e && Array.prototype.forEach.call(e.length ? e : [e], function(r) {
            return function(n) {
                if (n && n.nodeName && n.nodeName === "TEXTAREA" && !Ka.has(n)) {
                    var s, o = null,
                        c = null,
                        u = null,
                        f = function() {
                            n.clientWidth !== c && E()
                        },
                        h = function(I) {
                            window.removeEventListener("resize", f, !1), n.removeEventListener("input", E, !1), n.removeEventListener("keyup", E, !1), n.removeEventListener("autosize:destroy", h, !1), n.removeEventListener("autosize:update", E, !1), Object.keys(I).forEach(function(k) {
                                n.style[k] = I[k]
                            }), Ka.delete(n)
                        }.bind(n, {
                            height: n.style.height,
                            resize: n.style.resize,
                            overflowY: n.style.overflowY,
                            overflowX: n.style.overflowX,
                            wordWrap: n.style.wordWrap
                        });
                    n.addEventListener("autosize:destroy", h, !1), "onpropertychange" in n && "oninput" in n && n.addEventListener("keyup", E, !1), window.addEventListener("resize", f, !1), n.addEventListener("input", E, !1), n.addEventListener("autosize:update", E, !1), n.style.overflowX = "hidden", n.style.wordWrap = "break-word", Ka.set(n, {
                        destroy: h,
                        update: E
                    }), (s = window.getComputedStyle(n, null)).resize === "vertical" ? n.style.resize = "none" : s.resize === "both" && (n.style.resize = "horizontal"), o = s.boxSizing === "content-box" ? -(parseFloat(s.paddingTop) + parseFloat(s.paddingBottom)) : parseFloat(s.borderTopWidth) + parseFloat(s.borderBottomWidth), isNaN(o) && (o = 0), E()
                }

                function m(I) {
                    var k = n.style.width;
                    n.style.width = "0px", n.style.width = k, n.style.overflowY = I
                }

                function y() {
                    if (n.scrollHeight !== 0) {
                        var I = function(M) {
                                for (var j = []; M && M.parentNode && M.parentNode instanceof Element;) M.parentNode.scrollTop && j.push({
                                    node: M.parentNode,
                                    scrollTop: M.parentNode.scrollTop
                                }), M = M.parentNode;
                                return j
                            }(n),
                            k = document.documentElement && document.documentElement.scrollTop;
                        n.style.height = "", n.style.height = n.scrollHeight + o + "px", c = n.clientWidth, I.forEach(function(M) {
                            M.node.scrollTop = M.scrollTop
                        }), k && (document.documentElement.scrollTop = k)
                    }
                }

                function E() {
                    y();
                    var I = Math.round(parseFloat(n.style.height)),
                        k = window.getComputedStyle(n, null),
                        M = k.boxSizing === "content-box" ? Math.round(parseFloat(k.height)) : n.offsetHeight;
                    if (M < I ? k.overflowY === "hidden" && (m("scroll"), y(), M = k.boxSizing === "content-box" ? Math.round(parseFloat(window.getComputedStyle(n, null).height)) : n.offsetHeight) : k.overflowY !== "hidden" && (m("hidden"), y(), M = k.boxSizing === "content-box" ? Math.round(parseFloat(window.getComputedStyle(n, null).height)) : n.offsetHeight), u !== M) {
                        u = M;
                        var j = x0("autosize:resized");
                        try {
                            n.dispatchEvent(j)
                        } catch {}
                    }
                }
            }(r)
        }), e
    }).destroy = function(e) {
        return e && Array.prototype.forEach.call(e.length ? e : [e], s5), e
    }, Pa.update = function(e) {
        return e && Array.prototype.forEach.call(e.length ? e : [e], a5), e
    });
    var o5 = Pa,
        c5 = {
            exports: {}
        },
        _c = function(e) {
            return e && e.Math == Math && e
        },
        Fr = _c(typeof globalThis == "object" && globalThis) || _c(typeof window == "object" && window) || _c(typeof self == "object" && self) || _c(typeof Dt == "object" && Dt) || function() {
            return this
        }() || Function("return this")(),
        op = {},
        Br = function(e) {
            try {
                return !!e()
            } catch {
                return !0
            }
        },
        l5 = Br,
        Ei = !l5(function() {
            return Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1] != 7
        }),
        u5 = Br,
        cp = !u5(function() {
            var e = function() {}.bind();
            return typeof e != "function" || e.hasOwnProperty("prototype")
        }),
        f5 = cp,
        bc = Function.prototype.call,
        Ti = f5 ? bc.bind(bc) : function() {
            return bc.apply(bc, arguments)
        },
        D0 = {},
        M0 = {}.propertyIsEnumerable,
        U0 = Object.getOwnPropertyDescriptor,
        d5 = U0 && !M0.call({
            1: 2
        }, 1);
    D0.f = d5 ? function(t) {
        var r = U0(this, t);
        return !!r && r.enumerable
    } : M0;
    var F0 = function(e, t) {
            return {
                enumerable: !(e & 1),
                configurable: !(e & 2),
                writable: !(e & 4),
                value: t
            }
        },
        B0 = cp,
        j0 = Function.prototype,
        h5 = j0.bind,
        Dd = j0.call,
        p5 = B0 && h5.bind(Dd, Dd),
        fr = B0 ? function(e) {
            return e && p5(e)
        } : function(e) {
            return e && function() {
                return Dd.apply(e, arguments)
            }
        },
        G0 = fr,
        g5 = G0({}.toString),
        m5 = G0("".slice),
        Ml = function(e) {
            return m5(g5(e), 8, -1)
        },
        v5 = fr,
        y5 = Br,
        _5 = Ml,
        Lf = Object,
        b5 = v5("".split),
        E5 = y5(function() {
            return !Lf("z").propertyIsEnumerable(0)
        }) ? function(e) {
            return _5(e) == "String" ? b5(e, "") : Lf(e)
        } : Lf,
        T5 = TypeError,
        po = function(e) {
            if (e == null) throw T5("Can't call method on " + e);
            return e
        },
        S5 = E5,
        w5 = po,
        Ul = function(e) {
            return S5(w5(e))
        },
        Ir = function(e) {
            return typeof e == "function"
        },
        O5 = Ir,
        ca = function(e) {
            return typeof e == "object" ? e !== null : O5(e)
        },
        kf = Fr,
        I5 = Ir,
        C5 = function(e) {
            return I5(e) ? e : void 0
        },
        Fl = function(e, t) {
            return arguments.length < 2 ? C5(kf[e]) : kf[e] && kf[e][t]
        },
        $5 = fr,
        W0 = $5({}.isPrototypeOf),
        A5 = Fl,
        R5 = A5("navigator", "userAgent") || "",
        K0 = Fr,
        Pf = R5,
        qy = K0.process,
        Yy = K0.Deno,
        zy = qy && qy.versions || Yy && Yy.version,
        Xy = zy && zy.v8,
        cn, Zc;
    Xy && (cn = Xy.split("."), Zc = cn[0] > 0 && cn[0] < 4 ? 1 : +(cn[0] + cn[1]));
    !Zc && Pf && (cn = Pf.match(/Edge\/(\d+)/), (!cn || cn[1] >= 74) && (cn = Pf.match(/Chrome\/(\d+)/), cn && (Zc = +cn[1])));
    var N5 = Zc,
        Jy = N5,
        L5 = Br,
        H0 = !!Object.getOwnPropertySymbols && !L5(function() {
            var e = Symbol();
            return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && Jy && Jy < 41
        }),
        k5 = H0,
        V0 = k5 && !Symbol.sham && typeof Symbol.iterator == "symbol",
        P5 = Fl,
        x5 = Ir,
        D5 = W0,
        M5 = V0,
        U5 = Object,
        q0 = M5 ? function(e) {
            return typeof e == "symbol"
        } : function(e) {
            var t = P5("Symbol");
            return x5(t) && D5(t.prototype, U5(e))
        },
        F5 = String,
        B5 = function(e) {
            try {
                return F5(e)
            } catch {
                return "Object"
            }
        },
        j5 = Ir,
        G5 = B5,
        W5 = TypeError,
        K5 = function(e) {
            if (j5(e)) return e;
            throw W5(G5(e) + " is not a function")
        },
        H5 = K5,
        lp = function(e, t) {
            var r = e[t];
            return r == null ? void 0 : H5(r)
        },
        xf = Ti,
        Df = Ir,
        Mf = ca,
        V5 = TypeError,
        q5 = function(e, t) {
            var r, n;
            if (t === "string" && Df(r = e.toString) && !Mf(n = xf(r, e)) || Df(r = e.valueOf) && !Mf(n = xf(r, e)) || t !== "string" && Df(r = e.toString) && !Mf(n = xf(r, e))) return n;
            throw V5("Can't convert object to primitive value")
        },
        Bl = {
            exports: {}
        },
        Zy = Fr,
        Y5 = Object.defineProperty,
        up = function(e, t) {
            try {
                Y5(Zy, e, {
                    value: t,
                    configurable: !0,
                    writable: !0
                })
            } catch {
                Zy[e] = t
            }
            return t
        },
        z5 = Fr,
        X5 = up,
        Qy = "__core-js_shared__",
        J5 = z5[Qy] || X5(Qy, {}),
        fp = J5,
        e_ = fp;
    (Bl.exports = function(e, t) {
        return e_[e] || (e_[e] = t !== void 0 ? t : {})
    })("versions", []).push({
        version: "3.23.4",
        mode: "global",
        copyright: "\xA9 2014-2022 Denis Pushkarev (zloirock.ru)",
        license: "https://github.com/zloirock/core-js/blob/v3.23.4/LICENSE",
        source: "https://github.com/zloirock/core-js"
    });
    var Z5 = po,
        Q5 = Object,
        Y0 = function(e) {
            return Q5(Z5(e))
        },
        e6 = fr,
        t6 = Y0,
        r6 = e6({}.hasOwnProperty),
        Si = Object.hasOwn || function(t, r) {
            return r6(t6(t), r)
        },
        n6 = fr,
        i6 = 0,
        s6 = Math.random(),
        a6 = n6(1 .toString),
        z0 = function(e) {
            return "Symbol(" + (e === void 0 ? "" : e) + ")_" + a6(++i6 + s6, 36)
        },
        o6 = Fr,
        c6 = Bl.exports,
        t_ = Si,
        l6 = z0,
        r_ = H0,
        X0 = V0,
        Os = c6("wks"),
        ns = o6.Symbol,
        n_ = ns && ns.for,
        u6 = X0 ? ns : ns && ns.withoutSetter || l6,
        cs = function(e) {
            if (!t_(Os, e) || !(r_ || typeof Os[e] == "string")) {
                var t = "Symbol." + e;
                r_ && t_(ns, e) ? Os[e] = ns[e] : X0 && n_ ? Os[e] = n_(t) : Os[e] = u6(t)
            }
            return Os[e]
        },
        f6 = Ti,
        i_ = ca,
        s_ = q0,
        d6 = lp,
        h6 = q5,
        p6 = cs,
        g6 = TypeError,
        m6 = p6("toPrimitive"),
        v6 = function(e, t) {
            if (!i_(e) || s_(e)) return e;
            var r = d6(e, m6),
                n;
            if (r) {
                if (t === void 0 && (t = "default"), n = f6(r, e, t), !i_(n) || s_(n)) return n;
                throw g6("Can't convert object to primitive value")
            }
            return t === void 0 && (t = "number"), h6(e, t)
        },
        y6 = v6,
        _6 = q0,
        J0 = function(e) {
            var t = y6(e, "string");
            return _6(t) ? t : t + ""
        },
        b6 = Fr,
        a_ = ca,
        Md = b6.document,
        E6 = a_(Md) && a_(Md.createElement),
        Z0 = function(e) {
            return E6 ? Md.createElement(e) : {}
        },
        T6 = Ei,
        S6 = Br,
        w6 = Z0,
        Q0 = !T6 && !S6(function() {
            return Object.defineProperty(w6("div"), "a", {
                get: function() {
                    return 7
                }
            }).a != 7
        }),
        O6 = Ei,
        I6 = Ti,
        C6 = D0,
        $6 = F0,
        A6 = Ul,
        R6 = J0,
        N6 = Si,
        L6 = Q0,
        o_ = Object.getOwnPropertyDescriptor;
    op.f = O6 ? o_ : function(t, r) {
        if (t = A6(t), r = R6(r), L6) try {
            return o_(t, r)
        } catch {}
        if (N6(t, r)) return $6(!I6(C6.f, t, r), t[r])
    };
    var go = {},
        k6 = Ei,
        P6 = Br,
        e1 = k6 && P6(function() {
            return Object.defineProperty(function() {}, "prototype", {
                value: 42,
                writable: !1
            }).prototype != 42
        }),
        x6 = ca,
        D6 = String,
        M6 = TypeError,
        ls = function(e) {
            if (x6(e)) return e;
            throw M6(D6(e) + " is not an object")
        },
        U6 = Ei,
        F6 = Q0,
        B6 = e1,
        Ec = ls,
        c_ = J0,
        j6 = TypeError,
        Uf = Object.defineProperty,
        G6 = Object.getOwnPropertyDescriptor,
        Ff = "enumerable",
        Bf = "configurable",
        jf = "writable";
    go.f = U6 ? B6 ? function(t, r, n) {
        if (Ec(t), r = c_(r), Ec(n), typeof t == "function" && r === "prototype" && "value" in n && jf in n && !n[jf]) {
            var s = G6(t, r);
            s && s[jf] && (t[r] = n.value, n = {
                configurable: Bf in n ? n[Bf] : s[Bf],
                enumerable: Ff in n ? n[Ff] : s[Ff],
                writable: !1
            })
        }
        return Uf(t, r, n)
    } : Uf : function(t, r, n) {
        if (Ec(t), r = c_(r), Ec(n), F6) try {
            return Uf(t, r, n)
        } catch {}
        if ("get" in n || "set" in n) throw j6("Accessors not supported");
        return "value" in n && (t[r] = n.value), t
    };
    var W6 = Ei,
        K6 = go,
        H6 = F0,
        dp = W6 ? function(e, t, r) {
            return K6.f(e, t, H6(1, r))
        } : function(e, t, r) {
            return e[t] = r, e
        },
        t1 = {
            exports: {}
        },
        Ud = Ei,
        V6 = Si,
        r1 = Function.prototype,
        q6 = Ud && Object.getOwnPropertyDescriptor,
        hp = V6(r1, "name"),
        Y6 = hp && function() {}.name === "something",
        z6 = hp && (!Ud || Ud && q6(r1, "name").configurable),
        X6 = {
            EXISTS: hp,
            PROPER: Y6,
            CONFIGURABLE: z6
        },
        J6 = fr,
        Z6 = Ir,
        Fd = fp,
        Q6 = J6(Function.toString);
    Z6(Fd.inspectSource) || (Fd.inspectSource = function(e) {
        return Q6(e)
    });
    var n1 = Fd.inspectSource,
        eW = Fr,
        tW = Ir,
        rW = n1,
        l_ = eW.WeakMap,
        nW = tW(l_) && /native code/.test(rW(l_)),
        iW = Bl.exports,
        sW = z0,
        u_ = iW("keys"),
        i1 = function(e) {
            return u_[e] || (u_[e] = sW(e))
        },
        pp = {},
        aW = nW,
        s1 = Fr,
        Gf = fr,
        oW = ca,
        cW = dp,
        Wf = Si,
        Kf = fp,
        lW = i1,
        uW = pp,
        f_ = "Object already initialized",
        Bd = s1.TypeError,
        fW = s1.WeakMap,
        Qc, io, el, dW = function(e) {
            return el(e) ? io(e) : Qc(e, {})
        },
        hW = function(e) {
            return function(t) {
                var r;
                if (!oW(t) || (r = io(t)).type !== e) throw Bd("Incompatible receiver, " + e + " required");
                return r
            }
        };
    if (aW || Kf.state) {
        var ji = Kf.state || (Kf.state = new fW),
            pW = Gf(ji.get),
            d_ = Gf(ji.has),
            gW = Gf(ji.set);
        Qc = function(e, t) {
            if (d_(ji, e)) throw new Bd(f_);
            return t.facade = e, gW(ji, e, t), t
        }, io = function(e) {
            return pW(ji, e) || {}
        }, el = function(e) {
            return d_(ji, e)
        }
    } else {
        var Is = lW("state");
        uW[Is] = !0, Qc = function(e, t) {
            if (Wf(e, Is)) throw new Bd(f_);
            return t.facade = e, cW(e, Is, t), t
        }, io = function(e) {
            return Wf(e, Is) ? e[Is] : {}
        }, el = function(e) {
            return Wf(e, Is)
        }
    }
    var a1 = {
            set: Qc,
            get: io,
            has: el,
            enforce: dW,
            getterFor: hW
        },
        mW = Br,
        vW = Ir,
        Tc = Si,
        jd = Ei,
        yW = X6.CONFIGURABLE,
        _W = n1,
        o1 = a1,
        bW = o1.enforce,
        EW = o1.get,
        Pc = Object.defineProperty,
        TW = jd && !mW(function() {
            return Pc(function() {}, "length", {
                value: 8
            }).length !== 8
        }),
        SW = String(String).split("String"),
        wW = t1.exports = function(e, t, r) {
            String(t).slice(0, 7) === "Symbol(" && (t = "[" + String(t).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), r && r.getter && (t = "get " + t), r && r.setter && (t = "set " + t), (!Tc(e, "name") || yW && e.name !== t) && (jd ? Pc(e, "name", {
                value: t,
                configurable: !0
            }) : e.name = t), TW && r && Tc(r, "arity") && e.length !== r.arity && Pc(e, "length", {
                value: r.arity
            });
            try {
                r && Tc(r, "constructor") && r.constructor ? jd && Pc(e, "prototype", {
                    writable: !1
                }) : e.prototype && (e.prototype = void 0)
            } catch {}
            var n = bW(e);
            return Tc(n, "source") || (n.source = SW.join(typeof t == "string" ? t : "")), e
        };
    Function.prototype.toString = wW(function() {
        return vW(this) && EW(this).source || _W(this)
    }, "toString");
    var OW = Ir,
        IW = go,
        CW = t1.exports,
        $W = up,
        c1 = function(e, t, r, n) {
            n || (n = {});
            var s = n.enumerable,
                o = n.name !== void 0 ? n.name : t;
            if (OW(r) && CW(r, o, n), n.global) s ? e[t] = r : $W(t, r);
            else {
                try {
                    n.unsafe ? e[t] && (s = !0) : delete e[t]
                } catch {}
                s ? e[t] = r : IW.f(e, t, {
                    value: r,
                    enumerable: !1,
                    configurable: !n.nonConfigurable,
                    writable: !n.nonWritable
                })
            }
            return e
        },
        l1 = {},
        AW = Math.ceil,
        RW = Math.floor,
        NW = Math.trunc || function(t) {
            var r = +t;
            return (r > 0 ? RW : AW)(r)
        },
        LW = NW,
        jl = function(e) {
            var t = +e;
            return t !== t || t === 0 ? 0 : LW(t)
        },
        kW = jl,
        PW = Math.max,
        xW = Math.min,
        DW = function(e, t) {
            var r = kW(e);
            return r < 0 ? PW(r + t, 0) : xW(r, t)
        },
        MW = jl,
        UW = Math.min,
        u1 = function(e) {
            return e > 0 ? UW(MW(e), 9007199254740991) : 0
        },
        FW = u1,
        BW = function(e) {
            return FW(e.length)
        },
        jW = Ul,
        GW = DW,
        WW = BW,
        h_ = function(e) {
            return function(t, r, n) {
                var s = jW(t),
                    o = WW(s),
                    c = GW(n, o),
                    u;
                if (e && r != r) {
                    for (; o > c;)
                        if (u = s[c++], u != u) return !0
                } else
                    for (; o > c; c++)
                        if ((e || c in s) && s[c] === r) return e || c || 0;
                return !e && -1
            }
        },
        KW = {
            includes: h_(!0),
            indexOf: h_(!1)
        },
        HW = fr,
        Hf = Si,
        VW = Ul,
        qW = KW.indexOf,
        YW = pp,
        p_ = HW([].push),
        f1 = function(e, t) {
            var r = VW(e),
                n = 0,
                s = [],
                o;
            for (o in r) !Hf(YW, o) && Hf(r, o) && p_(s, o);
            for (; t.length > n;) Hf(r, o = t[n++]) && (~qW(s, o) || p_(s, o));
            return s
        },
        gp = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
        zW = f1,
        XW = gp,
        JW = XW.concat("length", "prototype");
    l1.f = Object.getOwnPropertyNames || function(t) {
        return zW(t, JW)
    };
    var d1 = {};
    d1.f = Object.getOwnPropertySymbols;
    var ZW = Fl,
        QW = fr,
        eK = l1,
        tK = d1,
        rK = ls,
        nK = QW([].concat),
        iK = ZW("Reflect", "ownKeys") || function(t) {
            var r = eK.f(rK(t)),
                n = tK.f;
            return n ? nK(r, n(t)) : r
        },
        g_ = Si,
        sK = iK,
        aK = op,
        oK = go,
        cK = function(e, t, r) {
            for (var n = sK(t), s = oK.f, o = aK.f, c = 0; c < n.length; c++) {
                var u = n[c];
                !g_(e, u) && !(r && g_(r, u)) && s(e, u, o(t, u))
            }
        },
        lK = Br,
        uK = Ir,
        fK = /#|\.prototype\./,
        mo = function(e, t) {
            var r = hK[dK(e)];
            return r == gK ? !0 : r == pK ? !1 : uK(t) ? lK(t) : !!t
        },
        dK = mo.normalize = function(e) {
            return String(e).replace(fK, ".").toLowerCase()
        },
        hK = mo.data = {},
        pK = mo.NATIVE = "N",
        gK = mo.POLYFILL = "P",
        mK = mo,
        Vf = Fr,
        vK = op.f,
        yK = dp,
        _K = c1,
        bK = up,
        EK = cK,
        TK = mK,
        h1 = function(e, t) {
            var r = e.target,
                n = e.global,
                s = e.stat,
                o, c, u, f, h, m;
            if (n ? c = Vf : s ? c = Vf[r] || bK(r, {}) : c = (Vf[r] || {}).prototype, c)
                for (u in t) {
                    if (h = t[u], e.dontCallGetSet ? (m = vK(c, u), f = m && m.value) : f = c[u], o = TK(n ? u : r + (s ? "." : "#") + u, e.forced), !o && f !== void 0) {
                        if (typeof h == typeof f) continue;
                        EK(h, f)
                    }(e.sham || f && f.sham) && yK(h, "sham", !0), _K(c, u, h, e)
                }
        },
        SK = ca,
        wK = Ml,
        OK = cs,
        IK = OK("match"),
        CK = function(e) {
            var t;
            return SK(e) && ((t = e[IK]) !== void 0 ? !!t : wK(e) == "RegExp")
        },
        $K = cs,
        AK = $K("toStringTag"),
        p1 = {};
    p1[AK] = "z";
    var RK = String(p1) === "[object z]",
        NK = RK,
        LK = Ir,
        xc = Ml,
        kK = cs,
        PK = kK("toStringTag"),
        xK = Object,
        DK = xc(function() {
            return arguments
        }()) == "Arguments",
        MK = function(e, t) {
            try {
                return e[t]
            } catch {}
        },
        UK = NK ? xc : function(e) {
            var t, r, n;
            return e === void 0 ? "Undefined" : e === null ? "Null" : typeof(r = MK(t = xK(e), PK)) == "string" ? r : DK ? xc(t) : (n = xc(t)) == "Object" && LK(t.callee) ? "Arguments" : n
        },
        FK = UK,
        BK = String,
        Gl = function(e) {
            if (FK(e) === "Symbol") throw TypeError("Cannot convert a Symbol value to a string");
            return BK(e)
        },
        jK = ls,
        g1 = function() {
            var e = jK(this),
                t = "";
            return e.hasIndices && (t += "d"), e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.unicodeSets && (t += "v"), e.sticky && (t += "y"), t
        },
        GK = Ti,
        WK = Si,
        KK = W0,
        HK = g1,
        m_ = RegExp.prototype,
        VK = function(e) {
            var t = e.flags;
            return t === void 0 && !("flags" in m_) && !WK(e, "flags") && KK(m_, e) ? GK(HK, e) : t
        },
        mp = fr,
        qK = Y0,
        YK = Math.floor,
        qf = mp("".charAt),
        zK = mp("".replace),
        Yf = mp("".slice),
        XK = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
        JK = /\$([$&'`]|\d{1,2})/g,
        m1 = function(e, t, r, n, s, o) {
            var c = r + e.length,
                u = n.length,
                f = JK;
            return s !== void 0 && (s = qK(s), f = XK), zK(o, f, function(h, m) {
                var y;
                switch (qf(m, 0)) {
                    case "$":
                        return "$";
                    case "&":
                        return e;
                    case "`":
                        return Yf(t, 0, r);
                    case "'":
                        return Yf(t, c);
                    case "<":
                        y = s[Yf(m, 1, -1)];
                        break;
                    default:
                        var E = +m;
                        if (E === 0) return h;
                        if (E > u) {
                            var I = YK(E / 10);
                            return I === 0 ? h : I <= u ? n[I - 1] === void 0 ? qf(m, 1) : n[I - 1] + qf(m, 1) : h
                        }
                        y = n[E - 1]
                }
                return y === void 0 ? "" : y
            })
        },
        ZK = h1,
        QK = Ti,
        vp = fr,
        v_ = po,
        eH = Ir,
        tH = CK,
        Ra = Gl,
        rH = lp,
        nH = VK,
        iH = m1,
        sH = cs,
        aH = sH("replace"),
        oH = TypeError,
        v1 = vp("".indexOf);
    vp("".replace);
    var y_ = vp("".slice),
        cH = Math.max,
        __ = function(e, t, r) {
            return r > e.length ? -1 : t === "" ? r : v1(e, t, r)
        };
    ZK({
        target: "String",
        proto: !0
    }, {
        replaceAll: function(t, r) {
            var n = v_(this),
                s, o, c, u, f, h, m, y, E, I = 0,
                k = 0,
                M = "";
            if (t != null) {
                if (s = tH(t), s && (o = Ra(v_(nH(t))), !~v1(o, "g"))) throw oH("`.replaceAll` does not allow non-global regexes");
                if (c = rH(t, aH), c) return QK(c, t, n, r)
            }
            for (u = Ra(n), f = Ra(t), h = eH(r), h || (r = Ra(r)), m = f.length, y = cH(1, m), I = __(u, f, 0); I !== -1;) E = h ? Ra(r(f, I, u)) : iH(f, u, I, [], void 0, r), M += y_(u, k, I) + E, k = I + m, I = __(u, f, I + y);
            return k < u.length && (M += y_(u, k)), M
        }
    });
    var yp = Br,
        lH = Fr,
        _p = lH.RegExp,
        bp = yp(function() {
            var e = _p("a", "y");
            return e.lastIndex = 2, e.exec("abcd") != null
        }),
        uH = bp || yp(function() {
            return !_p("a", "y").sticky
        }),
        fH = bp || yp(function() {
            var e = _p("^r", "gy");
            return e.lastIndex = 2, e.exec("str") != null
        }),
        dH = {
            BROKEN_CARET: fH,
            MISSED_STICKY: uH,
            UNSUPPORTED_Y: bp
        },
        y1 = {},
        hH = f1,
        pH = gp,
        gH = Object.keys || function(t) {
            return hH(t, pH)
        },
        mH = Ei,
        vH = e1,
        yH = go,
        _H = ls,
        bH = Ul,
        EH = gH;
    y1.f = mH && !vH ? Object.defineProperties : function(t, r) {
        _H(t);
        for (var n = bH(r), s = EH(r), o = s.length, c = 0, u; o > c;) yH.f(t, u = s[c++], n[u]);
        return t
    };
    var TH = Fl,
        SH = TH("document", "documentElement"),
        wH = ls,
        OH = y1,
        b_ = gp,
        IH = pp,
        CH = SH,
        $H = Z0,
        AH = i1,
        E_ = ">",
        T_ = "<",
        Gd = "prototype",
        Wd = "script",
        _1 = AH("IE_PROTO"),
        zf = function() {},
        b1 = function(e) {
            return T_ + Wd + E_ + e + T_ + "/" + Wd + E_
        },
        S_ = function(e) {
            e.write(b1("")), e.close();
            var t = e.parentWindow.Object;
            return e = null, t
        },
        RH = function() {
            var e = $H("iframe"),
                t = "java" + Wd + ":",
                r;
            return e.style.display = "none", CH.appendChild(e), e.src = String(t), r = e.contentWindow.document, r.open(), r.write(b1("document.F=Object")), r.close(), r.F
        },
        Sc, Dc = function() {
            try {
                Sc = new ActiveXObject("htmlfile")
            } catch {}
            Dc = typeof document < "u" ? document.domain && Sc ? S_(Sc) : RH() : S_(Sc);
            for (var e = b_.length; e--;) delete Dc[Gd][b_[e]];
            return Dc()
        };
    IH[_1] = !0;
    var NH = Object.create || function(t, r) {
            var n;
            return t !== null ? (zf[Gd] = wH(t), n = new zf, zf[Gd] = null, n[_1] = t) : n = Dc(), r === void 0 ? n : OH.f(n, r)
        },
        LH = Br,
        kH = Fr,
        PH = kH.RegExp,
        xH = LH(function() {
            var e = PH(".", "s");
            return !(e.dotAll && e.exec(`
`) && e.flags === "s")
        }),
        DH = Br,
        MH = Fr,
        UH = MH.RegExp,
        FH = DH(function() {
            var e = UH("(?<a>b)", "g");
            return e.exec("b").groups.a !== "b" || "b".replace(e, "$<a>c") !== "bc"
        }),
        Ls = Ti,
        Wl = fr,
        BH = Gl,
        jH = g1,
        GH = dH,
        WH = Bl.exports,
        KH = NH,
        HH = a1.get,
        VH = xH,
        qH = FH,
        YH = WH("native-string-replace", String.prototype.replace),
        tl = RegExp.prototype.exec,
        Kd = tl,
        zH = Wl("".charAt),
        XH = Wl("".indexOf),
        JH = Wl("".replace),
        Xf = Wl("".slice),
        Hd = function() {
            var e = /a/,
                t = /b*/g;
            return Ls(tl, e, "a"), Ls(tl, t, "a"), e.lastIndex !== 0 || t.lastIndex !== 0
        }(),
        E1 = GH.BROKEN_CARET,
        Vd = /()??/.exec("")[1] !== void 0,
        ZH = Hd || Vd || E1 || VH || qH;
    ZH && (Kd = function(t) {
        var r = this,
            n = HH(r),
            s = BH(t),
            o = n.raw,
            c, u, f, h, m, y, E;
        if (o) return o.lastIndex = r.lastIndex, c = Ls(Kd, o, s), r.lastIndex = o.lastIndex, c;
        var I = n.groups,
            k = E1 && r.sticky,
            M = Ls(jH, r),
            j = r.source,
            C = 0,
            H = s;
        if (k && (M = JH(M, "y", ""), XH(M, "g") === -1 && (M += "g"), H = Xf(s, r.lastIndex), r.lastIndex > 0 && (!r.multiline || r.multiline && zH(s, r.lastIndex - 1) !== `
`) && (j = "(?: " + j + ")", H = " " + H, C++), u = new RegExp("^(?:" + j + ")", M)), Vd && (u = new RegExp("^" + j + "$(?!\\s)", M)), Hd && (f = r.lastIndex), h = Ls(tl, k ? u : r, H), k ? h ? (h.input = Xf(h.input, C), h[0] = Xf(h[0], C), h.index = r.lastIndex, r.lastIndex += h[0].length) : r.lastIndex = 0 : Hd && h && (r.lastIndex = r.global ? h.index + h[0].length : f), Vd && h && h.length > 1 && Ls(YH, h[0], u, function() {
                for (m = 1; m < arguments.length - 2; m++) arguments[m] === void 0 && (h[m] = void 0)
            }), h && I)
            for (h.groups = y = KH(null), m = 0; m < I.length; m++) E = I[m], y[E[0]] = h[E[1]];
        return h
    });
    var Ep = Kd,
        QH = h1,
        w_ = Ep;
    QH({
        target: "RegExp",
        proto: !0,
        forced: /./.exec !== w_
    }, {
        exec: w_
    });
    var eV = cp,
        T1 = Function.prototype,
        O_ = T1.apply,
        I_ = T1.call,
        tV = typeof Reflect == "object" && Reflect.apply || (eV ? I_.bind(O_) : function() {
            return I_.apply(O_, arguments)
        }),
        C_ = fr,
        $_ = c1,
        rV = Ep,
        A_ = Br,
        S1 = cs,
        nV = dp,
        iV = S1("species"),
        Jf = RegExp.prototype,
        sV = function(e, t, r, n) {
            var s = S1(e),
                o = !A_(function() {
                    var h = {};
                    return h[s] = function() {
                        return 7
                    }, "" [e](h) != 7
                }),
                c = o && !A_(function() {
                    var h = !1,
                        m = /a/;
                    return e === "split" && (m = {}, m.constructor = {}, m.constructor[iV] = function() {
                        return m
                    }, m.flags = "", m[s] = /./ [s]), m.exec = function() {
                        return h = !0, null
                    }, m[s](""), !h
                });
            if (!o || !c || r) {
                var u = C_(/./ [s]),
                    f = t(s, "" [e], function(h, m, y, E, I) {
                        var k = C_(h),
                            M = m.exec;
                        return M === rV || M === Jf.exec ? o && !I ? {
                            done: !0,
                            value: u(m, y, E)
                        } : {
                            done: !0,
                            value: k(y, m, E)
                        } : {
                            done: !1
                        }
                    });
                $_(String.prototype, e, f[0]), $_(Jf, s, f[1])
            }
            n && nV(Jf[s], "sham", !0)
        },
        Tp = fr,
        aV = jl,
        oV = Gl,
        cV = po,
        lV = Tp("".charAt),
        R_ = Tp("".charCodeAt),
        uV = Tp("".slice),
        N_ = function(e) {
            return function(t, r) {
                var n = oV(cV(t)),
                    s = aV(r),
                    o = n.length,
                    c, u;
                return s < 0 || s >= o ? e ? "" : void 0 : (c = R_(n, s), c < 55296 || c > 56319 || s + 1 === o || (u = R_(n, s + 1)) < 56320 || u > 57343 ? e ? lV(n, s) : c : e ? uV(n, s, s + 2) : (c - 55296 << 10) + (u - 56320) + 65536)
            }
        },
        fV = {
            codeAt: N_(!1),
            charAt: N_(!0)
        },
        dV = fV.charAt,
        hV = function(e, t, r) {
            return t + (r ? dV(e, t).length : 1)
        },
        L_ = Ti,
        pV = ls,
        gV = Ir,
        mV = Ml,
        vV = Ep,
        yV = TypeError,
        _V = function(e, t) {
            var r = e.exec;
            if (gV(r)) {
                var n = L_(r, e, t);
                return n !== null && pV(n), n
            }
            if (mV(e) === "RegExp") return L_(vV, e, t);
            throw yV("RegExp#exec called on incompatible receiver")
        },
        bV = tV,
        k_ = Ti,
        Kl = fr,
        EV = sV,
        TV = Br,
        SV = ls,
        wV = Ir,
        OV = jl,
        IV = u1,
        Cs = Gl,
        CV = po,
        $V = hV,
        AV = lp,
        RV = m1,
        NV = _V,
        LV = cs,
        qd = LV("replace"),
        kV = Math.max,
        PV = Math.min,
        xV = Kl([].concat),
        Zf = Kl([].push),
        P_ = Kl("".indexOf),
        x_ = Kl("".slice),
        DV = function(e) {
            return e === void 0 ? e : String(e)
        },
        MV = function() {
            return "a".replace(/./, "$0") === "$0"
        }(),
        D_ = function() {
            return /./ [qd] ? /./ [qd]("a", "$0") === "" : !1
        }(),
        UV = !TV(function() {
            var e = /./;
            return e.exec = function() {
                var t = [];
                return t.groups = {
                    a: "7"
                }, t
            }, "".replace(e, "$<a>") !== "7"
        });
    EV("replace", function(e, t, r) {
        var n = D_ ? "$" : "$0";
        return [function(o, c) {
            var u = CV(this),
                f = o == null ? void 0 : AV(o, qd);
            return f ? k_(f, o, u, c) : k_(t, Cs(u), o, c)
        }, function(s, o) {
            var c = SV(this),
                u = Cs(s);
            if (typeof o == "string" && P_(o, n) === -1 && P_(o, "$<") === -1) {
                var f = r(t, c, u, o);
                if (f.done) return f.value
            }
            var h = wV(o);
            h || (o = Cs(o));
            var m = c.global;
            if (m) {
                var y = c.unicode;
                c.lastIndex = 0
            }
            for (var E = [];;) {
                var I = NV(c, u);
                if (I === null || (Zf(E, I), !m)) break;
                var k = Cs(I[0]);
                k === "" && (c.lastIndex = $V(u, IV(c.lastIndex), y))
            }
            for (var M = "", j = 0, C = 0; C < E.length; C++) {
                I = E[C];
                for (var H = Cs(I[0]), X = kV(PV(OV(I.index), u.length), 0), W = [], G = 1; G < I.length; G++) Zf(W, DV(I[G]));
                var Z = I.groups;
                if (h) {
                    var oe = xV([H], W, X, u);
                    Z !== void 0 && Zf(oe, Z);
                    var ce = Cs(bV(o, void 0, oe))
                } else ce = RV(H, u, X, W, Z, o);
                X >= j && (M += x_(u, j, X) + ce, j = X + H.length)
            }
            return M + x_(u, j)
        }]
    }, !UV || !MV || D_);
    var FV = Fr,
        BV = fr,
        jV = function(e, t) {
            return BV(FV[e].prototype[t])
        },
        GV = jV,
        WV = GV("String", "replaceAll"),
        KV = WV,
        HV = KV,
        VV = HV,
        qV = VV,
        YV = qV,
        zV = YV;
    (function(e) {
        e.exports = zV
    })(c5);
    Je({
        props: {
            autosize: Boolean,
            modelValue: String
        },
        emits: {
            keypress: e => !0,
            "update:modelValue": e => !0
        },
        watch: {
            modelValue(e, t) {
                if (e !== t) {
                    const r = this.$refs.textarea;
                    r.value = e
                }
            }
        },
        mounted() {
            this.autosize && o5(this.$refs.textarea)
        },
        methods: {
            focus() {
                this.$refs.textarea.focus()
            },
            async onInput(e) {
                const t = e.target;
                if ((t == null ? void 0 : t.value) == null) return;
                const r = t.maxLength === -1 ? Number.MAX_SAFE_INTEGER : t.maxLength;
                if (t.value = t.value.replaceAll(`
`, ""), t.value.length > r) {
                    t.value = t.value.substring(0, r);
                    return
                }
                this.$emit("update:modelValue", t.value), await this.$nextTick(), t.value !== this.modelValue && (t.value = this.modelValue)
            },
            onKeypressEnter(e) {
                this.$emit("keypress", e)
            }
        }
    });
    Je({
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
                return this.slides.map((e, t) => t < this.currentIndex ? ["left"] : t > this.currentIndex ? ["right"] : ["current"])
            }
        },
        beforeMount() {
            const e = gi();
            if (!(e != null && e.appContext.directives.pointerbox)) throw new Error("Tutorial.vue relies on PointerBoxPlugin. Please install it inside your main.ts file.")
        },
        methods: {
            onPointerBoxSwipe(e) {
                if (e.detail.direction === "right") {
                    if (this.currentIndex === 0) return;
                    this.currentIndex -= 1
                }
                if (e.detail.direction === "left") {
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
            onDotClick(e) {
                this.currentIndex = e
            },
            onDoneClick() {
                this.$emit("tutorialComplete")
            }
        }
    });
    var Ki = {},
        Hl = {},
        w1 = {},
        Vl = {},
        Sp = {};
    (function(e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.Token = void 0;
        var t = function() {
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
        e.Token = t,
            function(r) {
                (function(n) {
                    n[n.text = 0] = "text", n[n.startTag = 1] = "startTag", n[n.endTag = 2] = "endTag"
                })(r.Type || (r.Type = {}))
            }(t = e.Token || (e.Token = {})), e.Token = t
    })(Sp);
    Object.defineProperty(Vl, "__esModule", {
        value: !0
    });
    Vl.Tokenizer = void 0;
    var ti = Sp,
        XV = function() {
            function e(t) {
                this.tags = t
            }
            return e.prototype.tokenizeString = function(t) {
                var r = this,
                    n = this.getTokens(t),
                    s = [],
                    o = !1,
                    c = "",
                    u = "";
                return n.forEach(function(f) {
                    var h = r.tags[f.content],
                        m = !0;
                    !h && !o ? f.convertToTextToken() : o ? f.type === ti.Token.Type.endTag && f.content === c ? (o = !1, s.push(e.createTextToken(u))) : (f.convertToTextToken(), u += f.content, m = !1) : h.noNesting && f.type === ti.Token.Type.startTag && (o = !0, c = f.content, u = ""), m && s.push(f)
                }), s
            }, e.prototype.getTokens = function(t) {
                for (var r = '\\[(/\\w*)\\]|\\[(\\w*)+(=(["])' + e.valueChars + "*\\4)?( (" + e.nameChars + '+)?=(["])(' + e.valueChars + "+)\\7)*\\]", n = new RegExp(r, "g"), s = [], o = n.exec(t), c = 0; o;) {
                    var u = o.index - c;
                    u > 0 && s.push(e.createTextToken(t.substr(c, u))), s.push(e.createTagToken(o)), c = n.lastIndex, o = n.exec(t)
                }
                var f = t.length - c;
                return f > 0 && s.push(e.createTextToken(t.substr(c, f))), s
            }, e.createTextToken = function(t) {
                return new ti.Token(ti.Token.Type.text, t)
            }, e.createTagToken = function(t) {
                if (!t[1]) {
                    for (var r = t[2], n = {}, s = new RegExp("(" + e.nameChars + '+)?=(["])(' + e.valueChars + "+)\\2", "g"), o = t[0].substr(1 + r.length, t[0].length - 2 - r.length), c = s.exec(o); c;) c[1] ? n[c[1]] = c[3] : n[r] = c[3], c = s.exec(o);
                    return new ti.Token(ti.Token.Type.startTag, r, n, t[0])
                }
                return new ti.Token(ti.Token.Type.endTag, t[1].substr(1, t[1].length - 1))
            }, e.nameChars = "[a-zA-Z0-9\\.\\-_:;/]", e.valueChars = "[a-zA-Z0-9\\.\\-_:;#/\\s]", e
        }();
    Vl.Tokenizer = XV;
    (function(e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.ParseTree = void 0;
        var t = Vl,
            r = Sp,
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
                    var u = new t.Tokenizer(c),
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
                            y = s.buildTreeFromTokens(h, c, m);
                        if (!y) return null;
                        o.subTrees.push(y)
                    }
                    if (f.type === r.Token.Type.endTag) {
                        var m = f.content;
                        return m === u ? o : null
                    }
                    return !c.length && u !== "" ? null : this.buildTreeFromTokens(o, c, u)
                }, s
            }();
        e.ParseTree = n,
            function(s) {
                (function(o) {
                    o[o.root = 0] = "root", o[o.text = 1] = "text", o[o.tag = 2] = "tag"
                })(s.Type || (s.Type = {}))
            }(n = e.ParseTree || (e.ParseTree = {})), e.ParseTree = n
    })(w1);
    var vo = {};
    Object.defineProperty(vo, "__esModule", {
        value: !0
    });
    vo.Tag = void 0;
    var JV = function() {
        function e(t) {
            var r;
            this.tagName = t.tagName, this.insertLineBreaks = t.insertLineBreaks, this.suppressLineBreaks = t.suppressLineBreaks, this.noNesting = t.noNesting, this.markupGenerator = (r = t.markupGenerator) !== null && r !== void 0 ? r : function(n, s) {
                return "<" + n.tagName + ">" + s + "</" + n.tagName + ">"
            }
        }
        return e.create = function(t, r, n) {
            var s, o, c;
            return n === void 0 && (n = {}), new e({
                tagName: t,
                insertLineBreaks: (s = n.insertLineBreaks) !== null && s !== void 0 ? s : !0,
                suppressLineBreaks: (o = n.suppressLineBreaks) !== null && o !== void 0 ? o : !1,
                noNesting: (c = n.noNesting) !== null && c !== void 0 ? c : !1,
                markupGenerator: r
            })
        }, e
    }();
    vo.Tag = JV;
    Object.defineProperty(Hl, "__esModule", {
        value: !0
    });
    Hl.BBCodeParser = void 0;
    var M_ = w1,
        U_ = vo,
        ZV = function() {
            function e(t, r) {
                this.options = r, this.escapeHTML = !1, this.tags = t, r && (this.escapeHTML = r.escapeHTML)
            }
            return Object.defineProperty(e, "defaultTags", {
                get: function() {
                    return {
                        b: U_.Tag.create("b"),
                        i: U_.Tag.create("i")
                    }
                },
                enumerable: !1,
                configurable: !0
            }), e.prototype.parse = function(t, r, n, s) {
                r === void 0 && (r = !1), n === void 0 && (n = !0), s === void 0 && (s = !0);
                var o = M_.ParseTree.buildTree(t, this.tags);
                return !o || !o.isValid ? t : this.treeToHtml(o.subTrees, n, s, r)
            }, e.prototype.addTag = function(t, r) {
                this.tags[t] = r
            }, e.prototype.treeToHtml = function(t, r, n, s) {
                var o = this;
                s === void 0 && (s = !1);
                var c = "",
                    u = !1;
                return t.forEach(function(f) {
                    var h;
                    if (f.type === M_.ParseTree.Type.text) {
                        var m = f.content;
                        n && (m = o.escapeHTML ? e.escapeHTML(m) : m), r && !u && (m = m.replace(/(\r\n|\n|\r)/gm, "<br>"), u = !1), c += m
                    } else {
                        var y = o.tags[f.content],
                            E = o.treeToHtml(f.subTrees, y.insertLineBreaks, n, s);
                        s ? c += E : c += y.markupGenerator(y, E, (h = f.attributes) !== null && h !== void 0 ? h : {}), u = y.suppressLineBreaks
                    }
                }), c
            }, e.escapeHTML = function(t) {
                return t.replace(/[&<>]/g, function(r) {
                    return e.tagsToReplace[r] || r
                })
            }, e.tagsToReplace = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;"
            }, e
        }();
    Hl.BBCodeParser = ZV;
    (function(e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.Tag = e.BBCodeParser = void 0;
        var t = Hl;
        Object.defineProperty(e, "BBCodeParser", {
            enumerable: !0,
            get: function() {
                return t.BBCodeParser
            }
        });
        var r = vo;
        Object.defineProperty(e, "Tag", {
            enumerable: !0,
            get: function() {
                return r.Tag
            }
        })
    })(Ki);
    const QV = {
        install: e => {
            const t = {
                section: Ki.Tag.create("section", (o, c, {
                    section: u
                }) => `<div ${u?`class="section ${u}"`:'class="section"'}>${c}</div>`)
            };
            ["b", "bold", "B"].forEach(o => {
                t[o] = Ki.Tag.create(o, (c, u) => `<strong>${u}</strong>`)
            }), ["i", "italic", "I"].forEach(o => {
                t[o] = Ki.Tag.create(o, (c, u) => `<em>${u}</em>`)
            });
            const s = new Ki.BBCodeParser(t);
            e.directive("bb", {
                mounted(o, c) {
                    const u = document.createElement("div");
                    u.textContent = c.value, o.innerHTML = s.parse(u.innerHTML)
                },
                updated(o, c) {
                    const u = document.createElement("div");
                    u.textContent = c.value, o.innerHTML = s.parse(u.innerHTML)
                }
            }), e.mixin({
                beforeCreate() {
                    !this.$options.bb || Object.keys(this.$options.bb).forEach(o => {
                        const c = this.$options.bb[o];
                        if (c instanceof Function) {
                            s.addTag(o, Ki.Tag.create(o, c));
                            return
                        }
                        s.addTag(o, Ki.Tag.create(o, c.generator, c.options))
                    })
                }
            }), e.config.globalProperties.$bb = o => (typeof o != "string" && console.warn(`[BBCodePlugin] Received unexpected ${typeof o} with value ${o};converting to string before parsing.`), s.parse(String(o)))
        }
    };
    var O1 = {
        exports: {}
    };
    (function(e) {
        (function(t, r) {
            var n = t.KonamiCode,
                s = t.KonamiCode = r;
            s.noConflict = function() {
                return t.KonamiCode = n, s
            }, e.exports && (e.exports = r)
        })(Dt, function t(r) {
            var n = this,
                s = {},
                o = t;
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
    })(O1);
    const e7 = O1.exports,
        t7 = Je({
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
                window.addEventListener("keydown", e => {
                    var t, r, n, s;
                    return e.key === "," ? (t = this.replayer) == null ? void 0 : t.toPreviousEntity() : e.key === "." ? (r = this.replayer) == null ? void 0 : r.toNextEntity() : e.key === "q" ? (n = this.replayer) == null ? void 0 : n.toPreviousMarker() : e.key === "w" ? (s = this.replayer) == null ? void 0 : s.toNextMarker() : null
                })
            },
            methods: {
                onPreviousClick() {
                    var e;
                    (e = this.replayer) == null || e.toPreviousMarker()
                },
                onNextClick() {
                    var e;
                    (e = this.replayer) == null || e.toNextMarker()
                },
                onOpenPowerNavClick() {
                    this.showPowerNav = !0, this.debugNav.focus()
                },
                onClosePowerNavClick() {
                    this.showPowerNav = !1, this.debugNav.focus()
                },
                onMarkerClick(e) {
                    var t;
                    (t = this.replayer) == null || t.toMarkerIndex(e)
                },
                onKillClick() {
                    var e;
                    (e = this.replayer) == null || e.kill()
                },
                onDisconnectClick() {
                    var e;
                    (e = this.replayer) == null || e.disconnect()
                }
            }
        }),
        Gn = e => (ml("data-v-220ec4c0"), e = e(), vl(), e),
        r7 = {
            key: 0,
            ref: "debugNav",
            class: "debug-nav",
            tabindex: "0"
        },
        n7 = {
            key: 0,
            class: "power-nav"
        },
        i7 = Gn(() => z("p", null, "MARKERS", -1)),
        s7 = ["onClick"],
        a7 = en("KILL"),
        o7 = Gn(() => z("br", null, null, -1)),
        c7 = en("ROOM"),
        l7 = [a7, o7, c7],
        u7 = Gn(() => z("p", {
            class: "title blurred"
        }, "DEBUG", -1)),
        f7 = {
            key: 1,
            class: "title focused"
        },
        d7 = {
            key: 2,
            class: "title focused"
        },
        h7 = Gn(() => z("svg", {
            viewBox: "0 0 20 10"
        }, [z("polygon", {
            points: "0,10 10,0 20,10"
        })], -1)),
        p7 = Gn(() => z("div", {
            class: "visually-hidden"
        }, "Open debug menu", -1)),
        g7 = [h7, p7],
        m7 = Gn(() => z("svg", {
            viewBox: "0 0 60 50"
        }, [z("polygon", {
            class: "outline",
            points: "40,35.6 20,25 40,14.4"
        }), z("polygon", {
            points: "40,35.6 20,25 40,14.4"
        })], -1)),
        v7 = Gn(() => z("div", {
            class: "visually-hidden"
        }, "Previous", -1)),
        y7 = [m7, v7],
        _7 = Gn(() => z("svg", {
            viewBox: "0 0 60 50"
        }, [z("polygon", {
            class: "outline",
            points: "40,35.6 20,25 40,14.4"
        }), z("polygon", {
            points: "40,35.6 20,25 40,14.4"
        })], -1)),
        b7 = Gn(() => z("div", {
            class: "visually-hidden"
        }, "Next", -1)),
        E7 = [_7, b7];

    function T7(e, t, r, n, s, o) {
        return e.replayer ? (F(), q("div", r7, [e.showPowerNav ? (F(), q("div", n7, [z("button", {
            class: "close",
            onClick: t[0] || (t[0] = (...c) => e.onClosePowerNavClick && e.onClosePowerNavClick(...c))
        }, "X"), i7, z("ul", null, [(F(!0), q(ze, null, Qr(e.replayer.markerMap, (c, u) => (F(), q("li", {
            key: u,
            class: Fe({
                active: u === e.replayer.currentMarkerItemIndex
            }),
            onClick: f => e.onMarkerClick(u)
        }, De(c[1].marker), 11, s7))), 128))]), z("button", {
            class: "option",
            onClick: t[1] || (t[1] = (...c) => e.onKillClick && e.onKillClick(...c))
        }, l7), z("button", {
            class: "option",
            onClick: t[2] || (t[2] = (...c) => e.onDisconnectClick && e.onDisconnectClick(...c))
        }, "DISCONNECT")])) : Oe("", !0), u7, e.replayer.markerMap.length ? (F(), q("p", d7, De(e.replayer.currentMarkerItemIndex) + " : " + De(e.replayer.currentMarkerItem[1].marker) + " (" + De(e.replayer.currentEntityItemIndex) + ") ", 1)) : (F(), q("p", f7, "Item #" + De(e.replayer.currentEntityItemIndex), 1)), e.showPowerNav ? Oe("", !0) : (F(), q("button", {
            key: 3,
            class: "open-power-nav",
            onClick: t[3] || (t[3] = (...c) => e.onOpenPowerNavClick && e.onOpenPowerNavClick(...c))
        }, g7)), z("button", {
            class: "direction previous",
            onClick: t[4] || (t[4] = (...c) => e.onPreviousClick && e.onPreviousClick(...c))
        }, y7), z("button", {
            class: "direction next",
            onClick: t[5] || (t[5] = (...c) => e.onNextClick && e.onNextClick(...c))
        }, E7)], 512)) : Oe("", !0)
    }
    const S7 = qe(t7, [
        ["render", T7],
        ["__scopeId", "data-v-220ec4c0"]
    ]);

    function w7(e, t) {
        for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1;);
        return e
    }
    var O7 = w7,
        I7 = dT,
        C7 = I7(Object.keys, Object),
        $7 = C7,
        A7 = Bh,
        R7 = $7,
        N7 = Object.prototype,
        L7 = N7.hasOwnProperty;

    function k7(e) {
        if (!A7(e)) return R7(e);
        var t = [];
        for (var r in Object(e)) L7.call(e, r) && r != "constructor" && t.push(r);
        return t
    }
    var P7 = k7,
        x7 = bT,
        D7 = P7,
        M7 = kl;

    function U7(e) {
        return M7(e) ? x7(e) : D7(e)
    }
    var ql = U7,
        F7 = lo,
        B7 = ql;

    function j7(e, t) {
        return e && F7(t, B7(t), e)
    }
    var G7 = j7,
        W7 = lo,
        K7 = uo;

    function H7(e, t) {
        return e && W7(t, K7(t), e)
    }
    var V7 = H7;

    function q7(e, t) {
        for (var r = -1, n = e == null ? 0 : e.length, s = 0, o = []; ++r < n;) {
            var c = e[r];
            t(c, r, e) && (o[s++] = c)
        }
        return o
    }
    var Y7 = q7;

    function z7() {
        return []
    }
    var I1 = z7,
        X7 = Y7,
        J7 = I1,
        Z7 = Object.prototype,
        Q7 = Z7.propertyIsEnumerable,
        F_ = Object.getOwnPropertySymbols,
        e9 = F_ ? function(e) {
            return e == null ? [] : (e = Object(e), X7(F_(e), function(t) {
                return Q7.call(e, t)
            }))
        } : J7,
        wp = e9,
        t9 = lo,
        r9 = wp;

    function n9(e, t) {
        return t9(e, r9(e), t)
    }
    var i9 = n9;

    function s9(e, t) {
        for (var r = -1, n = t.length, s = e.length; ++r < n;) e[s + r] = t[r];
        return e
    }
    var C1 = s9,
        a9 = C1,
        o9 = Fh,
        c9 = wp,
        l9 = I1,
        u9 = Object.getOwnPropertySymbols,
        f9 = u9 ? function(e) {
            for (var t = []; e;) a9(t, c9(e)), e = o9(e);
            return t
        } : l9,
        $1 = f9,
        d9 = lo,
        h9 = $1;

    function p9(e, t) {
        return d9(e, h9(e), t)
    }
    var g9 = p9,
        m9 = C1,
        v9 = _i;

    function y9(e, t, r) {
        var n = t(e);
        return v9(e) ? n : m9(n, r(e))
    }
    var A1 = y9,
        _9 = A1,
        b9 = wp,
        E9 = ql;

    function T9(e) {
        return _9(e, E9, b9)
    }
    var S9 = T9,
        w9 = A1,
        O9 = $1,
        I9 = uo;

    function C9(e) {
        return w9(e, I9, O9)
    }
    var $9 = C9,
        A9 = os,
        R9 = pn,
        N9 = A9(R9, "DataView"),
        L9 = N9,
        k9 = os,
        P9 = pn,
        x9 = k9(P9, "Promise"),
        D9 = x9,
        M9 = os,
        U9 = pn,
        F9 = M9(U9, "Set"),
        B9 = F9,
        j9 = os,
        G9 = pn,
        W9 = j9(G9, "WeakMap"),
        K9 = W9,
        Yd = L9,
        zd = Dh,
        Xd = D9,
        Jd = B9,
        Zd = K9,
        R1 = na,
        la = sT,
        B_ = "[object Map]",
        H9 = "[object Object]",
        j_ = "[object Promise]",
        G_ = "[object Set]",
        W_ = "[object WeakMap]",
        K_ = "[object DataView]",
        V9 = la(Yd),
        q9 = la(zd),
        Y9 = la(Xd),
        z9 = la(Jd),
        X9 = la(Zd),
        Hi = R1;
    (Yd && Hi(new Yd(new ArrayBuffer(1))) != K_ || zd && Hi(new zd) != B_ || Xd && Hi(Xd.resolve()) != j_ || Jd && Hi(new Jd) != G_ || Zd && Hi(new Zd) != W_) && (Hi = function(e) {
        var t = R1(e),
            r = t == H9 ? e.constructor : void 0,
            n = r ? la(r) : "";
        if (n) switch (n) {
            case V9:
                return K_;
            case q9:
                return B_;
            case Y9:
                return j_;
            case z9:
                return G_;
            case X9:
                return W_
        }
        return t
    });
    var Op = Hi,
        J9 = Object.prototype,
        Z9 = J9.hasOwnProperty;

    function Q9(e) {
        var t = e.length,
            r = new e.constructor(t);
        return t && typeof e[0] == "string" && Z9.call(e, "index") && (r.index = e.index, r.input = e.input), r
    }
    var eq = Q9,
        tq = Uh;

    function rq(e, t) {
        var r = t ? tq(e.buffer) : e.buffer;
        return new e.constructor(r, e.byteOffset, e.byteLength)
    }
    var nq = rq,
        iq = /\w*$/;

    function sq(e) {
        var t = new e.constructor(e.source, iq.exec(e));
        return t.lastIndex = e.lastIndex, t
    }
    var aq = sq,
        H_ = Rl,
        V_ = H_ ? H_.prototype : void 0,
        q_ = V_ ? V_.valueOf : void 0;

    function oq(e) {
        return q_ ? Object(q_.call(e)) : {}
    }
    var cq = oq,
        lq = Uh,
        uq = nq,
        fq = aq,
        dq = cq,
        hq = uT,
        pq = "[object Boolean]",
        gq = "[object Date]",
        mq = "[object Map]",
        vq = "[object Number]",
        yq = "[object RegExp]",
        _q = "[object Set]",
        bq = "[object String]",
        Eq = "[object Symbol]",
        Tq = "[object ArrayBuffer]",
        Sq = "[object DataView]",
        wq = "[object Float32Array]",
        Oq = "[object Float64Array]",
        Iq = "[object Int8Array]",
        Cq = "[object Int16Array]",
        $q = "[object Int32Array]",
        Aq = "[object Uint8Array]",
        Rq = "[object Uint8ClampedArray]",
        Nq = "[object Uint16Array]",
        Lq = "[object Uint32Array]";

    function kq(e, t, r) {
        var n = e.constructor;
        switch (t) {
            case Tq:
                return lq(e);
            case pq:
            case gq:
                return new n(+e);
            case Sq:
                return uq(e, r);
            case wq:
            case Oq:
            case Iq:
            case Cq:
            case $q:
            case Aq:
            case Rq:
            case Nq:
            case Lq:
                return hq(e, r);
            case mq:
                return new n;
            case vq:
            case bq:
                return new n(e);
            case yq:
                return fq(e);
            case _q:
                return new n;
            case Eq:
                return dq(e)
        }
    }
    var Pq = kq,
        xq = Op,
        Dq = yi,
        Mq = "[object Map]";

    function Uq(e) {
        return Dq(e) && xq(e) == Mq
    }
    var Fq = Uq,
        Bq = Fq,
        jq = jh,
        Y_ = ro.exports,
        z_ = Y_ && Y_.isMap,
        Gq = z_ ? jq(z_) : Bq,
        Wq = Gq,
        Kq = Op,
        Hq = yi,
        Vq = "[object Set]";

    function qq(e) {
        return Hq(e) && Kq(e) == Vq
    }
    var Yq = qq,
        zq = Yq,
        Xq = jh,
        X_ = ro.exports,
        J_ = X_ && X_.isSet,
        Jq = J_ ? Xq(J_) : zq,
        Zq = Jq,
        Qq = oT,
        eY = O7,
        tY = Gh,
        rY = G7,
        nY = V7,
        iY = qc.exports,
        sY = fT,
        aY = i9,
        oY = g9,
        cY = S9,
        lY = $9,
        uY = Op,
        fY = eq,
        dY = Pq,
        hY = hT,
        pY = _i,
        gY = to.exports,
        mY = Wq,
        vY = tn,
        yY = Zq,
        _Y = ql,
        bY = uo,
        EY = 1,
        TY = 2,
        SY = 4,
        N1 = "[object Arguments]",
        wY = "[object Array]",
        OY = "[object Boolean]",
        IY = "[object Date]",
        CY = "[object Error]",
        L1 = "[object Function]",
        $Y = "[object GeneratorFunction]",
        AY = "[object Map]",
        RY = "[object Number]",
        k1 = "[object Object]",
        NY = "[object RegExp]",
        LY = "[object Set]",
        kY = "[object String]",
        PY = "[object Symbol]",
        xY = "[object WeakMap]",
        DY = "[object ArrayBuffer]",
        MY = "[object DataView]",
        UY = "[object Float32Array]",
        FY = "[object Float64Array]",
        BY = "[object Int8Array]",
        jY = "[object Int16Array]",
        GY = "[object Int32Array]",
        WY = "[object Uint8Array]",
        KY = "[object Uint8ClampedArray]",
        HY = "[object Uint16Array]",
        VY = "[object Uint32Array]",
        _t = {};
    _t[N1] = _t[wY] = _t[DY] = _t[MY] = _t[OY] = _t[IY] = _t[UY] = _t[FY] = _t[BY] = _t[jY] = _t[GY] = _t[AY] = _t[RY] = _t[k1] = _t[NY] = _t[LY] = _t[kY] = _t[PY] = _t[WY] = _t[KY] = _t[HY] = _t[VY] = !0;
    _t[CY] = _t[L1] = _t[xY] = !1;

    function Mc(e, t, r, n, s, o) {
        var c, u = t & EY,
            f = t & TY,
            h = t & SY;
        if (r && (c = s ? r(e, n, s, o) : r(e)), c !== void 0) return c;
        if (!vY(e)) return e;
        var m = pY(e);
        if (m) {
            if (c = fY(e), !u) return sY(e, c)
        } else {
            var y = uY(e),
                E = y == L1 || y == $Y;
            if (gY(e)) return iY(e, u);
            if (y == k1 || y == N1 || E && !s) {
                if (c = f || E ? {} : hY(e), !u) return f ? oY(e, nY(c, e)) : aY(e, rY(c, e))
            } else {
                if (!_t[y]) return s ? e : {};
                c = dY(e, y, u)
            }
        }
        o || (o = new Qq);
        var I = o.get(e);
        if (I) return I;
        o.set(e, c), yY(e) ? e.forEach(function(j) {
            c.add(Mc(j, t, r, j, e, o))
        }) : mY(e) && e.forEach(function(j, C) {
            c.set(C, Mc(j, t, r, C, e, o))
        });
        var k = h ? f ? lY : cY : f ? bY : _Y,
            M = m ? void 0 : k(e);
        return eY(M || e, function(j, C) {
            M && (C = j, j = e[C]), tY(c, C, Mc(j, t, r, C, e, o))
        }), c
    }
    var qY = Mc,
        YY = qY,
        zY = 1,
        XY = 4;

    function JY(e) {
        return YY(e, zY | XY)
    }
    var P1 = JY;
    const ZY = Je({
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
                var t, r, n;
                const e = (r = (t = this.$debugRecorder) == null ? void 0 : t.room) == null ? void 0 : r.appTag;
                !e || (this.values = P1(this.$ecastValues), this.content = (n = Vy.getPromptGuess(this.values, e)) != null ? n : null)
            },
            methods: {
                onFeedbackClick() {
                    this.screen = "feedback"
                },
                onDebugClick() {
                    this.screen = "debug"
                },
                onVibeClick(e) {
                    this.vibe = e
                },
                async onSubmitClick() {
                    var e, t;
                    !this.$debugRecorder || (this.screen === "debug" && (await this.$debugRecorder.send(this.message), this.$emit("resolve")), this.screen === "feedback" && (await Vy.send({
                        room: this.$debugRecorder.room,
                        name: this.$ecast.name,
                        role: this.$ecast.role,
                        content: this.isContent ? this.content : null,
                        message: (e = this.message) != null ? e : "",
                        vibe: (t = this.vibe) != null ? t : "none",
                        values: this.values
                    }), this.$emit("resolve")))
                }
            }
        }),
        x1 = "main/pp8/survey-bomb/assets/ad9172fc.png",
        D1 = "main/pp8/survey-bomb/assets/dc131b16.png",
        QY = "main/pp8/survey-bomb/assets/38715b18.png",
        ez = "main/pp8/survey-bomb/assets/b0d7c822.png",
        tz = "main/pp8/survey-bomb/assets/06150f24.png",
        rn = e => (ml("data-v-2c53389f"), e = e(), vl(), e),
        rz = {
            class: "jbg"
        },
        nz = {
            key: 0,
            class: "options"
        },
        iz = rn(() => z("img", {
            src: x1,
            alt: "Leave Feedback"
        }, null, -1)),
        sz = rn(() => z("span", null, [en("LEAVE"), z("br"), en("FEEDBACK")], -1)),
        az = [iz, sz],
        oz = rn(() => z("img", {
            src: D1,
            alt: "Send Debug"
        }, null, -1)),
        cz = rn(() => z("span", null, [en("SEND A"), z("br"), en("DEBUG")], -1)),
        lz = [oz, cz],
        uz = {
            key: 1,
            class: "feedback"
        },
        fz = rn(() => z("img", {
            class: "image",
            src: x1,
            alt: "Feedback"
        }, null, -1)),
        dz = rn(() => z("h3", {
            class: "text"
        }, "Send Feedback", -1)),
        hz = rn(() => z("p", {
            class: "cta"
        }, "CHOOSE A VIBE", -1)),
        pz = {
            class: "buttons"
        },
        gz = rn(() => z("img", {
            src: QY,
            alt: "good"
        }, null, -1)),
        mz = [gz],
        vz = rn(() => z("img", {
            src: ez,
            alt: "good"
        }, null, -1)),
        yz = [vz],
        _z = rn(() => z("img", {
            src: tz,
            alt: "bad"
        }, null, -1)),
        bz = [_z],
        Ez = {
            class: "actions"
        },
        Tz = {
            key: 0,
            class: "content-guess"
        },
        Sz = en("Feedback is about: "),
        wz = {
            key: 2,
            class: "debug"
        },
        Oz = rn(() => z("img", {
            class: "image",
            src: D1,
            alt: "Debug"
        }, null, -1)),
        Iz = rn(() => z("h3", {
            class: "text"
        }, "What is Happening?", -1)),
        Cz = {
            class: "actions"
        };

    function $z(e, t, r, n, s, o) {
        return F(), q("div", rz, [e.screen === "options" ? (F(), q("div", nz, [z("button", {
            class: "feedback-button",
            onClick: t[0] || (t[0] = (...c) => e.onFeedbackClick && e.onFeedbackClick(...c))
        }, az), z("button", {
            onClick: t[1] || (t[1] = (...c) => e.onDebugClick && e.onDebugClick(...c))
        }, lz)])) : e.screen === "feedback" ? (F(), q("div", uz, [fz, dz, z("div", {
            class: Fe(["vibes", {
                "has-selected": e.vibe
            }])
        }, [hz, z("div", pz, [z("button", {
            class: Fe({
                selected: e.vibe === "good"
            }),
            onClick: t[2] || (t[2] = c => e.onVibeClick("good"))
        }, mz, 2), z("button", {
            class: Fe({
                selected: e.vibe === "meh"
            }),
            onClick: t[3] || (t[3] = c => e.onVibeClick("meh"))
        }, yz, 2), z("button", {
            class: Fe({
                selected: e.vibe === "bad"
            }),
            onClick: t[4] || (t[4] = c => e.onVibeClick("bad"))
        }, bz, 2)])], 2), z("div", Ez, [e.content ? (F(), q("div", Tz, [Ve(z("input", {
            "onUpdate:modelValue": t[5] || (t[5] = c => e.isContent = c),
            type: "checkbox"
        }, null, 512), [
            [Bk, e.isContent]
        ]), z("span", null, [Sz, z("em", null, De(e.content), 1)])])) : Oe("", !0), Ve(z("textarea", {
            "onUpdate:modelValue": t[6] || (t[6] = c => e.message = c),
            rows: "3",
            placeholder: "(optional) more details",
            "aria-label": "Details"
        }, null, 512), [
            [ty, e.message]
        ]), z("button", {
            onClick: t[7] || (t[7] = Or((...c) => e.onSubmitClick && e.onSubmitClick(...c), ["prevent"]))
        }, De(e.$t("ACTION.SUBMIT")), 1)])])) : e.screen === "debug" ? (F(), q("div", wz, [Oz, Iz, z("div", Cz, [Ve(z("textarea", {
            "onUpdate:modelValue": t[8] || (t[8] = c => e.message = c),
            rows: "3",
            placeholder: "Enter details",
            "aria-label": "Details"
        }, null, 512), [
            [ty, e.message]
        ]), z("button", {
            onClick: t[9] || (t[9] = Or((...c) => e.onSubmitClick && e.onSubmitClick(...c), ["prevent"]))
        }, De(e.$t("ACTION.OK")), 1)])])) : Oe("", !0)])
    }
    const M1 = qe(ZY, [
        ["render", $z],
        ["__scopeId", "data-v-2c53389f"]
    ]);
    Je({
        methods: {
            onFeedbackClick() {
                this.$showModal(M1)
            }
        }
    });
    const Az = {
        install: (e, t) => {
            if (!e.config.globalProperties.$debugRecorder && !e.config.globalProperties.$debugReplayer) {
                if (t.replayer) {
                    e.config.globalProperties.$debugReplayer = t.replayer, e.component("Debug", S7);
                    return
                }
                if (e.config.globalProperties.$debugRecorder = new R4(t.client, t.room), !e.config.globalProperties.$showModal) {
                    console.warn("[debugPlugin] Sending debug and feedback messages is disabled be the modalPlugin is not used.");
                    return
                }
                new e7(() => {
                    e.config.globalProperties.$showModal(M1)
                })
            }
        }
    };
    var Rz = pn,
        Nz = function() {
            return Rz.Date.now()
        },
        Lz = Nz,
        kz = /\s/;

    function Pz(e) {
        for (var t = e.length; t-- && kz.test(e.charAt(t)););
        return t
    }
    var xz = Pz,
        Dz = xz,
        Mz = /^\s+/;

    function Uz(e) {
        return e && e.slice(0, Dz(e) + 1).replace(Mz, "")
    }
    var Fz = Uz,
        Bz = na,
        jz = yi,
        Gz = "[object Symbol]";

    function Wz(e) {
        return typeof e == "symbol" || jz(e) && Bz(e) == Gz
    }
    var Yl = Wz,
        Kz = Fz,
        Z_ = tn,
        Hz = Yl,
        Q_ = 0 / 0,
        Vz = /^[-+]0x[0-9a-f]+$/i,
        qz = /^0b[01]+$/i,
        Yz = /^0o[0-7]+$/i,
        zz = parseInt;

    function Xz(e) {
        if (typeof e == "number") return e;
        if (Hz(e)) return Q_;
        if (Z_(e)) {
            var t = typeof e.valueOf == "function" ? e.valueOf() : e;
            e = Z_(t) ? t + "" : t
        }
        if (typeof e != "string") return e === 0 ? e : +e;
        e = Kz(e);
        var r = qz.test(e);
        return r || Yz.test(e) ? zz(e.slice(2), r ? 2 : 8) : Vz.test(e) ? Q_ : +e
    }
    var Jz = Xz,
        Zz = tn,
        Qf = Lz,
        eb = Jz,
        Qz = "Expected a function",
        eX = Math.max,
        tX = Math.min;

    function rX(e, t, r) {
        var n, s, o, c, u, f, h = 0,
            m = !1,
            y = !1,
            E = !0;
        if (typeof e != "function") throw new TypeError(Qz);
        t = eb(t) || 0, Zz(r) && (m = !!r.leading, y = "maxWait" in r, o = y ? eX(eb(r.maxWait) || 0, t) : o, E = "trailing" in r ? !!r.trailing : E);

        function I(Z) {
            var oe = n,
                ce = s;
            return n = s = void 0, h = Z, c = e.apply(ce, oe), c
        }

        function k(Z) {
            return h = Z, u = setTimeout(C, t), m ? I(Z) : c
        }

        function M(Z) {
            var oe = Z - f,
                ce = Z - h,
                ue = t - oe;
            return y ? tX(ue, o - ce) : ue
        }

        function j(Z) {
            var oe = Z - f,
                ce = Z - h;
            return f === void 0 || oe >= t || oe < 0 || y && ce >= o
        }

        function C() {
            var Z = Qf();
            if (j(Z)) return H(Z);
            u = setTimeout(C, M(Z))
        }

        function H(Z) {
            return u = void 0, E && n ? I(Z) : (n = s = void 0, c)
        }

        function X() {
            u !== void 0 && clearTimeout(u), h = 0, n = f = s = u = void 0
        }

        function W() {
            return u === void 0 ? c : H(Qf())
        }

        function G() {
            var Z = Qf(),
                oe = j(Z);
            if (n = arguments, s = this, f = Z, oe) {
                if (u === void 0) return k(f);
                if (y) return clearTimeout(u), u = setTimeout(C, t), I(f)
            }
            return u === void 0 && (u = setTimeout(C, t)), c
        }
        return G.cancel = X, G.flush = W, G
    }
    var U1 = rX,
        nX = _i,
        iX = Yl,
        sX = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        aX = /^\w*$/;

    function oX(e, t) {
        if (nX(e)) return !1;
        var r = typeof e;
        return r == "number" || r == "symbol" || r == "boolean" || e == null || iX(e) ? !0 : aX.test(e) || !sX.test(e) || t != null && e in Object(t)
    }
    var cX = oX,
        F1 = aT,
        lX = "Expected a function";

    function Ip(e, t) {
        if (typeof e != "function" || t != null && typeof t != "function") throw new TypeError(lX);
        var r = function() {
            var n = arguments,
                s = t ? t.apply(this, n) : n[0],
                o = r.cache;
            if (o.has(s)) return o.get(s);
            var c = e.apply(this, n);
            return r.cache = o.set(s, c) || o, c
        };
        return r.cache = new(Ip.Cache || F1), r
    }
    Ip.Cache = F1;
    var uX = Ip,
        fX = uX,
        dX = 500;

    function hX(e) {
        var t = fX(e, function(n) {
                return r.size === dX && r.clear(), n
            }),
            r = t.cache;
        return t
    }
    var pX = hX,
        gX = pX,
        mX = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        vX = /\\(\\)?/g,
        yX = gX(function(e) {
            var t = [];
            return e.charCodeAt(0) === 46 && t.push(""), e.replace(mX, function(r, n, s, o) {
                t.push(s ? o.replace(vX, "$1") : n || r)
            }), t
        }),
        _X = yX;

    function bX(e, t) {
        for (var r = -1, n = e == null ? 0 : e.length, s = Array(n); ++r < n;) s[r] = t(e[r], r, e);
        return s
    }
    var B1 = bX,
        tb = Rl,
        EX = B1,
        TX = _i,
        SX = Yl,
        wX = 1 / 0,
        rb = tb ? tb.prototype : void 0,
        nb = rb ? rb.toString : void 0;

    function j1(e) {
        if (typeof e == "string") return e;
        if (TX(e)) return EX(e, j1) + "";
        if (SX(e)) return nb ? nb.call(e) : "";
        var t = e + "";
        return t == "0" && 1 / e == -wX ? "-0" : t
    }
    var OX = j1,
        IX = OX;

    function CX(e) {
        return e == null ? "" : IX(e)
    }
    var $X = CX,
        AX = _i,
        RX = cX,
        NX = _X,
        LX = $X;

    function kX(e, t) {
        return AX(e) ? e : RX(e, t) ? [e] : NX(LX(e))
    }
    var G1 = kX,
        PX = Yl,
        xX = 1 / 0;

    function DX(e) {
        if (typeof e == "string" || PX(e)) return e;
        var t = e + "";
        return t == "0" && 1 / e == -xX ? "-0" : t
    }
    var W1 = DX,
        MX = Gh,
        UX = G1,
        FX = Wh,
        ib = tn,
        BX = W1;

    function jX(e, t, r, n) {
        if (!ib(e)) return e;
        t = UX(t, e);
        for (var s = -1, o = t.length, c = o - 1, u = e; u != null && ++s < o;) {
            var f = BX(t[s]),
                h = r;
            if (f === "__proto__" || f === "constructor" || f === "prototype") return e;
            if (s != c) {
                var m = u[f];
                h = n ? n(m, f, u) : void 0, h === void 0 && (h = ib(m) ? m : FX(t[s + 1]) ? [] : {})
            }
            MX(u, f, h), u = u[f]
        }
        return e
    }
    var GX = jX,
        WX = GX;

    function KX(e, t, r) {
        return e == null ? e : WX(e, t, r)
    }
    var HX = KX;
    class VX {
        constructor() {
            ge(this, "wsClient");
            ge(this, "keyMap");
            ge(this, "providerMap");
            ge(this, "mappedValues", Bn({}));
            ge(this, "shouldParseBlobcast", !1);
            ge(this, "pausedKeys", null);
            ge(this, "keyMapKeys");
            ge(this, "providerMapKeys");
            ge(this, "hotValues");
            ge(this, "newValues");
            ge(this, "pause", (t = []) => {
                this.pausedKeys = t
            });
            ge(this, "resume", () => {
                this.pausedKeys = null, this.sync()
            });
            ge(this, "sync", U1(() => {
                !this.wsClient || !this.keyMap && !this.providerMap || this.pausedKeys && !this.pausedKeys.length || (this.hotValues = {}, this.newValues = {}, this.normalize().mapKeysToValues().mapProvidersToValues().deleteDropped().hydrateRefs().syncExisting(), delete this.hotValues, delete this.newValues)
            }, 50))
        }
        setWSClient(t) {
            this.wsClient = t, this.setupWatcher()
        }
        setupWatcher() {
            this.wsClient.entities = Bn(this.wsClient.entities), es(this.wsClient.entities, (t, r) => {
                this.sync()
            })
        }
        valueForEntity(t) {
            return t instanceof wr.ArtifactEntity || t instanceof wr.DoodleEntity ? t : t instanceof wr.ObjectEntity ? P1(t.val) : t instanceof wr.TextEntity ? t.text : t instanceof wr.NumberEntity ? t.val : null
        }
        normalize() {
            var r;
            const t = Object.keys(this.wsClient.entities);
            for (let n = 0; n < t.length; n++) {
                let s = t[n];
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
            const t = (r, n, s = !1) => {
                var c;
                const o = (c = r.$ref) != null ? c : r.ref;
                if (o) {
                    const u = this.hotValues[o];
                    if (u === void 0) throw new Error(`[ecastPlugin] entity "${n}" referenced entity "${o}" but it does not exist`);
                    HX(this.newValues, n, u)
                } else s && Object.entries(r).forEach(([u, f]) => {
                    f !== null && typeof f == "object" && t(f, `${n}.${u}`, s)
                })
            };
            return Object.entries(this.newValues).forEach(([r, n]) => {
                !n || Object.entries(n).forEach(([s, o]) => {
                    o !== null && typeof o == "object" && t(o, `${r}.${s}`, this.keyHasDeepRefs(r))
                })
            }), this
        }
        keyHasDeepRefs(t) {
            var r, n, s, o;
            return !!((n = (r = this.keyMap) == null ? void 0 : r[t]) != null && n.hasDeepRefs || (o = (s = this.providerMap) == null ? void 0 : s[t]) != null && o.hasDeepRefs)
        }
        mapKeysToValues() {
            if (!this.keyMap) return this;
            for (let t = 0; t < this.keyMapKeys.length; t++) this.newValues[this.keyMapKeys[t]] = this.hotValues[this.keyMap[this.keyMapKeys[t]].key];
            return this
        }
        mapProvidersToValues() {
            if (!this.providerMap) return this;
            for (let t = 0; t < this.providerMapKeys.length; t++) this.newValues[this.providerMapKeys[t]] = this.providerMap[this.providerMapKeys[t]].fn(this.hotValues, this.wsClient);
            return this
        }
        deleteDropped() {
            const t = Object.keys(this.mappedValues);
            for (let r = 0; r < t.length; r++) this.newValues[t[r]] || delete this.mappedValues[t[r]];
            return this
        }
        syncExisting() {
            const t = Object.keys(this.newValues);
            for (let r = 0; r < t.length; r++) this.mappedValues[t[r]] ? this.mappedValues[t[r]] = this.newValues[t[r]] : this.mappedValues[t[r]] = this.newValues[t[r]];
            return this.mappedValues
        }
        addKeys(t) {
            this.keyMap || (this.keyMap = {}), Object.keys(t).forEach(r => {
                var n;
                if (typeof t[r] == "function") {
                    const s = t[r];
                    this.keyMap[r] = {
                        key: s(this.wsClient),
                        hasDeepRefs: !1
                    };
                    return
                }
                if (typeof t[r] == "object") {
                    const s = t[r];
                    this.keyMap[r] = {
                        key: s.fn ? s.fn(this.wsClient) : s.key,
                        hasDeepRefs: (n = s.hasDeepRefs) != null ? n : !1
                    };
                    return
                }
                this.keyMap[r] = {
                    key: t[r]
                }
            }), this.keyMapKeys = Object.keys(this.keyMap), this.sync()
        }
        purgeKeys(t) {
            !this.keyMap || (Object.keys(t).forEach(r => {
                this.keyMap[r] && delete this.keyMap[r]
            }), this.keyMapKeys = Object.keys(this.keyMap), this.sync())
        }
        addProviders(t) {
            this.providerMap || (this.providerMap = {}), Object.keys(t).forEach(r => {
                var n;
                if (typeof t[r] == "object") {
                    const s = t[r];
                    this.providerMap[r] = {
                        fn: s.fn,
                        hasDeepRefs: (n = s.hasDeepRefs) != null ? n : !1
                    };
                    return
                }
                this.providerMap[r] = {
                    fn: t[r]
                }
            }), this.providerMapKeys = Object.keys(this.providerMap), this.sync()
        }
        purgeProviders(t) {
            !this.providerMap || (Object.keys(t).forEach(r => {
                this.providerMap[r] && delete this.providerMap[r]
            }), this.providerMapKeys = Object.keys(this.providerMap), this.sync())
        }
    }
    const Xr = new VX,
        qX = {
            install: (e, t) => {
                e.config.globalProperties.$setupEcast = r => {
                    Xr.setWSClient(r.wsClient), r.wsClient.on("artifact", n => no.add(n)), r.wsClient.on("connection", n => {
                        n.status === "connected" && Xr.setupWatcher()
                    }), Xr.sync(), e.config.globalProperties.$ecast = Xr.wsClient, e.config.globalProperties.$ecastValues = Xr.mappedValues, e.config.globalProperties.$ecastRoom = r.room, e.config.globalProperties.$ecastWelcome = r.welcome, e.config.globalProperties.$syncEcast = Xr.sync, e.config.globalProperties.$pauseEcastUpdates = Xr.pause, e.config.globalProperties.$resumeEcastUpdates = Xr.resume, e.mixin({
                        beforeCreate() {
                            this.$options.ecastKeys && Xr.addKeys(this.$options.ecastKeys), this.$options.ecastProviders && Xr.addProviders(this.$options.ecastProviders)
                        },
                        beforeDestroy() {
                            this.$options.ecastKeys && Xr.purgeKeys(this.$options.ecastKeys), this.$options.ecastProviders && Xr.purgeProviders(this.$options.ecastProviders)
                        }
                    })
                }, t != null && t.wsClient && e.config.globalProperties.$setupEcast(t)
            }
        },
        yo = {
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

    function YX() {
        return typeof __SENTRY_BROWSER_BUNDLE__ < "u" && !!__SENTRY_BROWSER_BUNDLE__
    }

    function Cp() {
        return !YX() && Object.prototype.toString.call(typeof process < "u" ? process : 0) === "[object process]"
    }

    function zX(e, t) {
        return e.require(t)
    }
    var XX = {};

    function Jt() {
        return Cp() ? global : typeof window < "u" ? window : typeof self < "u" ? self : XX
    }

    function $p(e, t, r) {
        var n = r || Jt(),
            s = n.__SENTRY__ = n.__SENTRY__ || {},
            o = s[e] || (s[e] = t());
        return o
    }
    var K1 = Object.prototype.toString;

    function H1(e) {
        switch (K1.call(e)) {
            case "[object Error]":
            case "[object Exception]":
            case "[object DOMException]":
                return !0;
            default:
                return wi(e, Error)
        }
    }

    function ua(e, t) {
        return K1.call(e) === `[object ${t}]`
    }

    function V1(e) {
        return ua(e, "ErrorEvent")
    }

    function sb(e) {
        return ua(e, "DOMError")
    }

    function JX(e) {
        return ua(e, "DOMException")
    }

    function Js(e) {
        return ua(e, "String")
    }

    function ZX(e) {
        return e === null || typeof e != "object" && typeof e != "function"
    }

    function zl(e) {
        return ua(e, "Object")
    }

    function Ap(e) {
        return typeof Event < "u" && wi(e, Event)
    }

    function QX(e) {
        return typeof Element < "u" && wi(e, Element)
    }

    function eJ(e) {
        return ua(e, "RegExp")
    }

    function q1(e) {
        return Boolean(e && e.then && typeof e.then == "function")
    }

    function tJ(e) {
        return zl(e) && "nativeEvent" in e && "preventDefault" in e && "stopPropagation" in e
    }

    function rJ(e) {
        return typeof e == "number" && e !== e
    }

    function wi(e, t) {
        try {
            return e instanceof t
        } catch {
            return !1
        }
    }

    function Qd(e, t) {
        try {
            let u = e;
            var r = 5,
                n = 80,
                s = [];
            let f = 0,
                h = 0;
            var o = " > ",
                c = o.length;
            let m;
            for (; u && f++ < r && (m = nJ(u, t), !(m === "html" || f > 1 && h + s.length * c + m.length >= n));) s.push(m), h += m.length, u = u.parentNode;
            return s.reverse().join(o)
        } catch {
            return "<unknown>"
        }
    }

    function nJ(e, t) {
        var r = e,
            n = [];
        let s, o, c, u, f;
        if (!r || !r.tagName) return "";
        n.push(r.tagName.toLowerCase());
        var h = t && t.length ? t.filter(y => r.getAttribute(y)).map(y => [y, r.getAttribute(y)]) : null;
        if (h && h.length) h.forEach(y => {
            n.push(`[${y[0]}="${y[1]}"]`)
        });
        else if (r.id && n.push(`#${r.id}`), s = r.className, s && Js(s))
            for (o = s.split(/\s+/), f = 0; f < o.length; f++) n.push(`.${o[f]}`);
        var m = ["type", "name", "title", "alt"];
        for (f = 0; f < m.length; f++) c = m[f], u = r.getAttribute(c), u && n.push(`[${c}="${u}"]`);
        return n.join("")
    }

    function iJ() {
        var e = Jt();
        try {
            return e.document.location.href
        } catch {
            return ""
        }
    }
    class xa extends Error {
        constructor(t, r = "warn") {
            super(t), this.message = t, this.name = new.target.prototype.constructor.name, Object.setPrototypeOf(this, new.target.prototype), this.logLevel = r
        }
    }
    var sJ = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/;

    function aJ(e) {
        return e === "http" || e === "https"
    }

    function oJ(e, t = !1) {
        const {
            host: r,
            path: n,
            pass: s,
            port: o,
            projectId: c,
            protocol: u,
            publicKey: f
        } = e;
        return `${u}://${f}${t&&s?`:${s}`:""}@${r}${o?`:${o}`:""}/${n&&`${n}/`}${c}`
    }

    function cJ(e) {
        var t = sJ.exec(e);
        if (!t) throw new xa(`Invalid Sentry Dsn: ${e}`);
        const [r, n, s = "", o, c = "", u] = t.slice(1);
        let f = "",
            h = u;
        var m = h.split("/");
        if (m.length > 1 && (f = m.slice(0, -1).join("/"), h = m.pop()), h) {
            var y = h.match(/^\d+/);
            y && (h = y[0])
        }
        return Y1({
            host: o,
            pass: s,
            path: f,
            projectId: h,
            port: c,
            protocol: r,
            publicKey: n
        })
    }

    function Y1(e) {
        return {
            protocol: e.protocol,
            publicKey: e.publicKey || "",
            pass: e.pass || "",
            host: e.host,
            port: e.port || "",
            path: e.path || "",
            projectId: e.projectId
        }
    }

    function lJ(e) {
        if (!(typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__)) return;
        const {
            port: t,
            projectId: r,
            protocol: n
        } = e;
        var s = ["protocol", "publicKey", "host", "projectId"];
        if (s.forEach(o => {
                if (!e[o]) throw new xa(`Invalid Sentry Dsn: ${o} missing`)
            }), !r.match(/^\d+$/)) throw new xa(`Invalid Sentry Dsn: Invalid projectId ${r}`);
        if (!aJ(n)) throw new xa(`Invalid Sentry Dsn: Invalid protocol ${n}`);
        if (t && isNaN(parseInt(t, 10))) throw new xa(`Invalid Sentry Dsn: Invalid port ${t}`);
        return !0
    }

    function uJ(e) {
        var t = typeof e == "string" ? cJ(e) : Y1(e);
        return lJ(t), t
    }
    var fJ = Jt(),
        dJ = "Sentry Logger ",
        rl = ["debug", "info", "warn", "error", "log", "assert", "trace"];

    function z1(e) {
        var t = Jt();
        if (!("console" in t)) return e();
        var r = t.console,
            n = {};
        rl.forEach(s => {
            var o = r[s] && r[s].__sentry_original__;
            s in t.console && o && (n[s] = r[s], r[s] = o)
        });
        try {
            return e()
        } finally {
            Object.keys(n).forEach(s => {
                r[s] = n[s]
            })
        }
    }

    function ab() {
        let e = !1;
        var t = {
            enable: () => {
                e = !0
            },
            disable: () => {
                e = !1
            }
        };
        return typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__ ? rl.forEach(r => {
            t[r] = (...n) => {
                e && z1(() => {
                    fJ.console[r](`${dJ}[${r}]:`, ...n)
                })
            }
        }) : rl.forEach(r => {
            t[r] = () => {}
        }), t
    }
    let Wt;
    typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__ ? Wt = $p("logger", ab) : Wt = ab();

    function ob(e, t = 0) {
        return typeof e != "string" || t === 0 || e.length <= t ? e : `${e.substr(0,t)}...`
    }

    function cb(e, t) {
        if (!Array.isArray(e)) return "";
        var r = [];
        for (let s = 0; s < e.length; s++) {
            var n = e[s];
            try {
                r.push(String(n))
            } catch {
                r.push("[value cannot be serialized]")
            }
        }
        return r.join(t)
    }

    function Rp(e, t) {
        return Js(e) ? eJ(t) ? t.test(e) : typeof t == "string" ? e.indexOf(t) !== -1 : !1 : !1
    }

    function lr(e, t, r) {
        if (t in e) {
            var n = e[t],
                s = r(n);
            if (typeof s == "function") try {
                J1(s, n)
            } catch {}
            e[t] = s
        }
    }

    function X1(e, t, r) {
        Object.defineProperty(e, t, {
            value: r,
            writable: !0,
            configurable: !0
        })
    }

    function J1(e, t) {
        var r = t.prototype || {};
        e.prototype = t.prototype = r, X1(e, "__sentry_original__", t)
    }

    function Np(e) {
        return e.__sentry_original__
    }

    function Z1(e) {
        if (H1(e)) return {
            message: e.message,
            name: e.name,
            stack: e.stack,
            ...ub(e)
        };
        if (Ap(e)) {
            var t = {
                type: e.type,
                target: lb(e.target),
                currentTarget: lb(e.currentTarget),
                ...ub(e)
            };
            return typeof CustomEvent < "u" && wi(e, CustomEvent) && (t.detail = e.detail), t
        } else return e
    }

    function lb(e) {
        try {
            return QX(e) ? Qd(e) : Object.prototype.toString.call(e)
        } catch {
            return "<unknown>"
        }
    }

    function ub(e) {
        if (typeof e == "object" && e !== null) {
            var t = {};
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t
        } else return {}
    }

    function hJ(e, t = 40) {
        var r = Object.keys(Z1(e));
        if (r.sort(), !r.length) return "[object has no keys]";
        if (r[0].length >= t) return ob(r[0], t);
        for (let s = r.length; s > 0; s--) {
            var n = r.slice(0, s).join(", ");
            if (!(n.length > t)) return s === r.length ? n : ob(n, t)
        }
        return ""
    }

    function pJ(e) {
        var t = new Map;
        return eh(e, t)
    }

    function eh(e, t) {
        if (zl(e)) {
            var r = t.get(e);
            if (r !== void 0) return r;
            var n = {};
            t.set(e, n);
            for (var s of Object.keys(e)) typeof e[s] < "u" && (n[s] = eh(e[s], t));
            return n
        }
        if (Array.isArray(e)) {
            var r = t.get(e);
            if (r !== void 0) return r;
            var n = [];
            return t.set(e, n), e.forEach(u => {
                n.push(eh(u, t))
            }), n
        }
        return e
    }
    var ed = "<anonymous>";

    function mi(e) {
        try {
            return !e || typeof e != "function" ? ed : e.name || ed
        } catch {
            return ed
        }
    }

    function gJ() {
        if (!("fetch" in Jt())) return !1;
        try {
            return new Headers, new Request(""), new Response, !0
        } catch {
            return !1
        }
    }

    function fb(e) {
        return e && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())
    }

    function mJ() {
        if (!gJ()) return !1;
        var e = Jt();
        if (fb(e.fetch)) return !0;
        let t = !1;
        var r = e.document;
        if (r && typeof r.createElement == "function") try {
            var n = r.createElement("iframe");
            n.hidden = !0, r.head.appendChild(n), n.contentWindow && n.contentWindow.fetch && (t = fb(n.contentWindow.fetch)), r.head.removeChild(n)
        } catch (s) {
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Wt.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", s)
        }
        return t
    }

    function vJ() {
        var e = Jt(),
            t = e.chrome,
            r = t && t.app && t.app.runtime,
            n = "history" in e && !!e.history.pushState && !!e.history.replaceState;
        return !r && n
    }
    var It = Jt(),
        Ha = {},
        db = {};

    function yJ(e) {
        if (!db[e]) switch (db[e] = !0, e) {
            case "console":
                _J();
                break;
            case "dom":
                $J();
                break;
            case "xhr":
                SJ();
                break;
            case "fetch":
                bJ();
                break;
            case "history":
                wJ();
                break;
            case "error":
                AJ();
                break;
            case "unhandledrejection":
                RJ();
                break;
            default:
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Wt.warn("unknown instrumentation type:", e);
                return
        }
    }

    function Xi(e, t) {
        Ha[e] = Ha[e] || [], Ha[e].push(t), yJ(e)
    }

    function hn(e, t) {
        if (!(!e || !Ha[e]))
            for (var r of Ha[e] || []) try {
                r(t)
            } catch (n) {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Wt.error(`Error while triggering instrumentation handler.
Type: ${e}
Name: ${mi(r)}
Error:`, n)
            }
    }

    function _J() {
        "console" in It && rl.forEach(function(e) {
            e in It.console && lr(It.console, e, function(t) {
                return function(...r) {
                    hn("console", {
                        args: r,
                        level: e
                    }), t && t.apply(It.console, r)
                }
            })
        })
    }

    function bJ() {
        !mJ() || lr(It, "fetch", function(e) {
            return function(...t) {
                var r = {
                    args: t,
                    fetchData: {
                        method: EJ(t),
                        url: TJ(t)
                    },
                    startTimestamp: Date.now()
                };
                return hn("fetch", {
                    ...r
                }), e.apply(It, t).then(n => (hn("fetch", {
                    ...r,
                    endTimestamp: Date.now(),
                    response: n
                }), n), n => {
                    throw hn("fetch", {
                        ...r,
                        endTimestamp: Date.now(),
                        error: n
                    }), n
                })
            }
        })
    }

    function EJ(e = []) {
        return "Request" in It && wi(e[0], Request) && e[0].method ? String(e[0].method).toUpperCase() : e[1] && e[1].method ? String(e[1].method).toUpperCase() : "GET"
    }

    function TJ(e = []) {
        return typeof e[0] == "string" ? e[0] : "Request" in It && wi(e[0], Request) ? e[0].url : String(e[0])
    }

    function SJ() {
        if ("XMLHttpRequest" in It) {
            var e = XMLHttpRequest.prototype;
            lr(e, "open", function(t) {
                return function(...r) {
                    var n = this,
                        s = r[1],
                        o = n.__sentry_xhr__ = {
                            method: Js(r[0]) ? r[0].toUpperCase() : r[0],
                            url: r[1]
                        };
                    Js(s) && o.method === "POST" && s.match(/sentry_key/) && (n.__sentry_own_request__ = !0);
                    var c = function() {
                        if (n.readyState === 4) {
                            try {
                                o.status_code = n.status
                            } catch {}
                            hn("xhr", {
                                args: r,
                                endTimestamp: Date.now(),
                                startTimestamp: Date.now(),
                                xhr: n
                            })
                        }
                    };
                    return "onreadystatechange" in n && typeof n.onreadystatechange == "function" ? lr(n, "onreadystatechange", function(u) {
                        return function(...f) {
                            return c(), u.apply(n, f)
                        }
                    }) : n.addEventListener("readystatechange", c), t.apply(n, r)
                }
            }), lr(e, "send", function(t) {
                return function(...r) {
                    return this.__sentry_xhr__ && r[0] !== void 0 && (this.__sentry_xhr__.body = r[0]), hn("xhr", {
                        args: r,
                        startTimestamp: Date.now(),
                        xhr: this
                    }), t.apply(this, r)
                }
            })
        }
    }
    let wc;

    function wJ() {
        if (!vJ()) return;
        var e = It.onpopstate;
        It.onpopstate = function(...r) {
            var n = It.location.href,
                s = wc;
            if (wc = n, hn("history", {
                    from: s,
                    to: n
                }), e) try {
                return e.apply(this, r)
            } catch {}
        };

        function t(r) {
            return function(...n) {
                var s = n.length > 2 ? n[2] : void 0;
                if (s) {
                    var o = wc,
                        c = String(s);
                    wc = c, hn("history", {
                        from: o,
                        to: c
                    })
                }
                return r.apply(this, n)
            }
        }
        lr(It.history, "pushState", t), lr(It.history, "replaceState", t)
    }
    var OJ = 1e3;
    let Oc, Ic;

    function IJ(e, t) {
        if (!e || e.type !== t.type) return !0;
        try {
            if (e.target !== t.target) return !0
        } catch {}
        return !1
    }

    function CJ(e) {
        if (e.type !== "keypress") return !1;
        try {
            var t = e.target;
            if (!t || !t.tagName) return !0;
            if (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable) return !1
        } catch {}
        return !0
    }

    function hb(e, t = !1) {
        return r => {
            if (!(!r || Ic === r) && !CJ(r)) {
                var n = r.type === "keypress" ? "input" : r.type;
                Oc === void 0 ? (e({
                    event: r,
                    name: n,
                    global: t
                }), Ic = r) : IJ(Ic, r) && (e({
                    event: r,
                    name: n,
                    global: t
                }), Ic = r), clearTimeout(Oc), Oc = It.setTimeout(() => {
                    Oc = void 0
                }, OJ)
            }
        }
    }

    function $J() {
        if ("document" in It) {
            var e = hn.bind(null, "dom"),
                t = hb(e, !0);
            It.document.addEventListener("click", t, !1), It.document.addEventListener("keypress", t, !1), ["EventTarget", "Node"].forEach(r => {
                var n = It[r] && It[r].prototype;
                !n || !n.hasOwnProperty || !n.hasOwnProperty("addEventListener") || (lr(n, "addEventListener", function(s) {
                    return function(o, c, u) {
                        if (o === "click" || o == "keypress") try {
                            var f = this,
                                h = f.__sentry_instrumentation_handlers__ = f.__sentry_instrumentation_handlers__ || {},
                                m = h[o] = h[o] || {
                                    refCount: 0
                                };
                            if (!m.handler) {
                                var y = hb(e);
                                m.handler = y, s.call(this, o, y, u)
                            }
                            m.refCount += 1
                        } catch {}
                        return s.call(this, o, c, u)
                    }
                }), lr(n, "removeEventListener", function(s) {
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
    let td = null;

    function AJ() {
        td = It.onerror, It.onerror = function(e, t, r, n, s) {
            return hn("error", {
                column: n,
                error: s,
                line: r,
                msg: e,
                url: t
            }), td ? td.apply(this, arguments) : !1
        }
    }
    let rd = null;

    function RJ() {
        rd = It.onunhandledrejection, It.onunhandledrejection = function(e) {
            return hn("unhandledrejection", e), rd ? rd.apply(this, arguments) : !0
        }
    }

    function NJ() {
        var e = typeof WeakSet == "function",
            t = e ? new WeakSet : [];

        function r(s) {
            if (e) return t.has(s) ? !0 : (t.add(s), !1);
            for (let c = 0; c < t.length; c++) {
                var o = t[c];
                if (o === s) return !0
            }
            return t.push(s), !1
        }

        function n(s) {
            if (e) t.delete(s);
            else
                for (let o = 0; o < t.length; o++)
                    if (t[o] === s) {
                        t.splice(o, 1);
                        break
                    }
        }
        return [r, n]
    }

    function Va() {
        var e = Jt(),
            t = e.crypto || e.msCrypto;
        if (t && t.randomUUID) return t.randomUUID().replace(/-/g, "");
        var r = t && t.getRandomValues ? () => t.getRandomValues(new Uint8Array(1))[0] : () => Math.random() * 16;
        return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, n => (n ^ (r() & 15) >> n / 4).toString(16))
    }

    function Q1(e) {
        return e.exception && e.exception.values ? e.exception.values[0] : void 0
    }

    function ks(e) {
        const {
            message: t,
            event_id: r
        } = e;
        if (t) return t;
        var n = Q1(e);
        return n ? n.type && n.value ? `${n.type}: ${n.value}` : n.type || n.value || r || "<unknown>" : r || "<unknown>"
    }

    function th(e, t, r) {
        var n = e.exception = e.exception || {},
            s = n.values = n.values || [],
            o = s[0] = s[0] || {};
        o.value || (o.value = t || ""), o.type || (o.type = r || "Error")
    }

    function nl(e, t) {
        var r = Q1(e);
        if (!!r) {
            var n = {
                    type: "generic",
                    handled: !0
                },
                s = r.mechanism;
            if (r.mechanism = {
                    ...n,
                    ...s,
                    ...t
                }, t && "data" in t) {
                var o = {
                    ...s && s.data,
                    ...t.data
                };
                r.mechanism.data = o
            }
        }
    }

    function LJ(e, t = 1 / 0, r = 1 / 0) {
        try {
            return rh("", e, t, r)
        } catch (n) {
            return {
                ERROR: `**non-serializable** (${n})`
            }
        }
    }

    function eS(e, t = 3, r = 100 * 1024) {
        var n = LJ(e, t);
        return xJ(n) > r ? eS(e, t - 1, r) : n
    }

    function rh(e, t, r = 1 / 0, n = 1 / 0, s = NJ()) {
        const [o, c] = s;
        if (t === null || ["number", "boolean", "string"].includes(typeof t) && !rJ(t)) return t;
        var u = kJ(e, t);
        if (!u.startsWith("[object ")) return u;
        if (t.__sentry_skip_normalization__) return t;
        if (r === 0) return u.replace("object ", "");
        if (o(t)) return "[Circular ~]";
        var f = t;
        if (f && typeof f.toJSON == "function") try {
            var h = f.toJSON();
            return rh("", h, r - 1, n, s)
        } catch {}
        var m = Array.isArray(t) ? [] : {};
        let y = 0;
        var E = Z1(t);
        for (var I in E)
            if (!!Object.prototype.hasOwnProperty.call(E, I)) {
                if (y >= n) {
                    m[I] = "[MaxProperties ~]";
                    break
                }
                var k = E[I];
                m[I] = rh(I, k, r - 1, n, s), y += 1
            } return c(t), m
    }

    function kJ(e, t) {
        try {
            return e === "domain" && t && typeof t == "object" && t._events ? "[Domain]" : e === "domainEmitter" ? "[DomainEmitter]" : typeof global < "u" && t === global ? "[Global]" : typeof window < "u" && t === window ? "[Window]" : typeof document < "u" && t === document ? "[Document]" : tJ(t) ? "[SyntheticEvent]" : typeof t == "number" && t !== t ? "[NaN]" : t === void 0 ? "[undefined]" : typeof t == "function" ? `[Function: ${mi(t)}]` : typeof t == "symbol" ? `[${String(t)}]` : typeof t == "bigint" ? `[BigInt: ${String(t)}]` : `[object ${Object.getPrototypeOf(t).constructor.name}]`
        } catch (r) {
            return `**non-serializable** (${r})`
        }
    }

    function PJ(e) {
        return ~-encodeURI(e).split(/%..|./).length
    }

    function xJ(e) {
        return PJ(JSON.stringify(e))
    }
    var Dn;
    (function(e) {
        var t = 0;
        e[e.PENDING = t] = "PENDING";
        var r = 1;
        e[e.RESOLVED = r] = "RESOLVED";
        var n = 2;
        e[e.REJECTED = n] = "REJECTED"
    })(Dn || (Dn = {}));
    class Tn {
        __init() {
            this._state = Dn.PENDING
        }
        __init2() {
            this._handlers = []
        }
        constructor(t) {
            Tn.prototype.__init.call(this), Tn.prototype.__init2.call(this), Tn.prototype.__init3.call(this), Tn.prototype.__init4.call(this), Tn.prototype.__init5.call(this), Tn.prototype.__init6.call(this);
            try {
                t(this._resolve, this._reject)
            } catch (r) {
                this._reject(r)
            }
        }
        then(t, r) {
            return new Tn((n, s) => {
                this._handlers.push([!1, o => {
                    if (!t) n(o);
                    else try {
                        n(t(o))
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
        } catch (t) {
            return this.then(r => r, t)
        } finally(t) {
            return new Tn((r, n) => {
                let s, o;
                return this.then(c => {
                    o = !1, s = c, t && t()
                }, c => {
                    o = !0, s = c, t && t()
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
            this._resolve = t => {
                this._setResult(Dn.RESOLVED, t)
            }
        }
        __init4() {
            this._reject = t => {
                this._setResult(Dn.REJECTED, t)
            }
        }
        __init5() {
            this._setResult = (t, r) => {
                if (this._state === Dn.PENDING) {
                    if (q1(r)) {
                        r.then(this._resolve, this._reject);
                        return
                    }
                    this._state = t, this._value = r, this._executeHandlers()
                }
            }
        }
        __init6() {
            this._executeHandlers = () => {
                if (this._state !== Dn.PENDING) {
                    var t = this._handlers.slice();
                    this._handlers = [], t.forEach(r => {
                        r[0] || (this._state === Dn.RESOLVED && r[1](this._value), this._state === Dn.REJECTED && r[2](this._value), r[0] = !0)
                    })
                }
            }
        }
    }

    function nd(e) {
        if (!e) return {};
        var t = e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
        if (!t) return {};
        var r = t[6] || "",
            n = t[8] || "";
        return {
            host: t[4],
            path: t[5],
            protocol: t[2],
            relative: t[5] + r + n
        }
    }
    var DJ = ["fatal", "error", "warning", "log", "info", "debug"];

    function MJ(e) {
        return e === "warn" ? "warning" : DJ.includes(e) ? e : "log"
    }
    var nh = {
        nowSeconds: () => Date.now() / 1e3
    };

    function UJ() {
        const {
            performance: e
        } = Jt();
        if (!(!e || !e.now)) {
            var t = Date.now() - e.now();
            return {
                now: () => e.now(),
                timeOrigin: t
            }
        }
    }

    function FJ() {
        try {
            var e = zX(xS, "perf_hooks");
            return e.performance
        } catch {
            return
        }
    }
    var id = Cp() ? FJ() : UJ(),
        pb = id === void 0 ? nh : {
            nowSeconds: () => (id.timeOrigin + id.now()) / 1e3
        },
        tS = nh.nowSeconds.bind(nh),
        rS = pb.nowSeconds.bind(pb);
    (() => {
        const {
            performance: e
        } = Jt();
        if (!(!e || !e.now)) {
            var t = 3600 * 1e3,
                r = e.now(),
                n = Date.now(),
                s = e.timeOrigin ? Math.abs(e.timeOrigin + r - n) : t,
                o = s < t,
                c = e.timing && e.timing.navigationStart,
                u = typeof c == "number",
                f = u ? Math.abs(c + r - n) : t,
                h = f < t;
            return o || h ? s <= f ? e.timeOrigin : c : n
        }
    })();

    function BJ(e) {
        var t = rS(),
            r = {
                sid: Va(),
                init: !0,
                timestamp: t,
                started: t,
                duration: 0,
                status: "ok",
                errors: 0,
                ignoreDuration: !1,
                toJSON: () => GJ(r)
            };
        return e && Xl(r, e), r
    }

    function Xl(e, t = {}) {
        if (t.user && (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address), !e.did && !t.did && (e.did = t.user.id || t.user.email || t.user.username)), e.timestamp = t.timestamp || rS(), t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration), t.sid && (e.sid = t.sid.length === 32 ? t.sid : Va()), t.init !== void 0 && (e.init = t.init), !e.did && t.did && (e.did = `${t.did}`), typeof t.started == "number" && (e.started = t.started), e.ignoreDuration) e.duration = void 0;
        else if (typeof t.duration == "number") e.duration = t.duration;
        else {
            var r = e.timestamp - e.started;
            e.duration = r >= 0 ? r : 0
        }
        t.release && (e.release = t.release), t.environment && (e.environment = t.environment), !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress), !e.userAgent && t.userAgent && (e.userAgent = t.userAgent), typeof t.errors == "number" && (e.errors = t.errors), t.status && (e.status = t.status)
    }

    function jJ(e, t) {
        let r = {};
        t ? r = {
            status: t
        } : e.status === "ok" && (r = {
            status: "exited"
        }), Xl(e, r)
    }

    function GJ(e) {
        return pJ({
            sid: `${e.sid}`,
            init: e.init,
            started: new Date(e.started * 1e3).toISOString(),
            timestamp: new Date(e.timestamp * 1e3).toISOString(),
            status: e.status,
            errors: e.errors,
            did: typeof e.did == "number" || typeof e.did == "string" ? `${e.did}` : void 0,
            duration: e.duration,
            attrs: {
                release: e.release,
                environment: e.environment,
                ip_address: e.ipAddress,
                user_agent: e.userAgent
            }
        })
    }
    var gb = 100;
    class is {
        constructor() {
            this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}
        }
        static clone(t) {
            var r = new is;
            return t && (r._breadcrumbs = [...t._breadcrumbs], r._tags = {
                ...t._tags
            }, r._extra = {
                ...t._extra
            }, r._contexts = {
                ...t._contexts
            }, r._user = t._user, r._level = t._level, r._span = t._span, r._session = t._session, r._transactionName = t._transactionName, r._fingerprint = t._fingerprint, r._eventProcessors = [...t._eventProcessors], r._requestSession = t._requestSession, r._attachments = [...t._attachments]), r
        }
        addScopeListener(t) {
            this._scopeListeners.push(t)
        }
        addEventProcessor(t) {
            return this._eventProcessors.push(t), this
        }
        setUser(t) {
            return this._user = t || {}, this._session && Xl(this._session, {
                user: t
            }), this._notifyScopeListeners(), this
        }
        getUser() {
            return this._user
        }
        getRequestSession() {
            return this._requestSession
        }
        setRequestSession(t) {
            return this._requestSession = t, this
        }
        setTags(t) {
            return this._tags = {
                ...this._tags,
                ...t
            }, this._notifyScopeListeners(), this
        }
        setTag(t, r) {
            return this._tags = {
                ...this._tags,
                [t]: r
            }, this._notifyScopeListeners(), this
        }
        setExtras(t) {
            return this._extra = {
                ...this._extra,
                ...t
            }, this._notifyScopeListeners(), this
        }
        setExtra(t, r) {
            return this._extra = {
                ...this._extra,
                [t]: r
            }, this._notifyScopeListeners(), this
        }
        setFingerprint(t) {
            return this._fingerprint = t, this._notifyScopeListeners(), this
        }
        setLevel(t) {
            return this._level = t, this._notifyScopeListeners(), this
        }
        setTransactionName(t) {
            return this._transactionName = t, this._notifyScopeListeners(), this
        }
        setContext(t, r) {
            return r === null ? delete this._contexts[t] : this._contexts = {
                ...this._contexts,
                [t]: r
            }, this._notifyScopeListeners(), this
        }
        setSpan(t) {
            return this._span = t, this._notifyScopeListeners(), this
        }
        getSpan() {
            return this._span
        }
        getTransaction() {
            var t = this.getSpan();
            return t && t.transaction
        }
        setSession(t) {
            return t ? this._session = t : delete this._session, this._notifyScopeListeners(), this
        }
        getSession() {
            return this._session
        }
        update(t) {
            if (!t) return this;
            if (typeof t == "function") {
                var r = t(this);
                return r instanceof is ? r : this
            }
            return t instanceof is ? (this._tags = {
                ...this._tags,
                ...t._tags
            }, this._extra = {
                ...this._extra,
                ...t._extra
            }, this._contexts = {
                ...this._contexts,
                ...t._contexts
            }, t._user && Object.keys(t._user).length && (this._user = t._user), t._level && (this._level = t._level), t._fingerprint && (this._fingerprint = t._fingerprint), t._requestSession && (this._requestSession = t._requestSession)) : zl(t) && (t = t, this._tags = {
                ...this._tags,
                ...t.tags
            }, this._extra = {
                ...this._extra,
                ...t.extra
            }, this._contexts = {
                ...this._contexts,
                ...t.contexts
            }, t.user && (this._user = t.user), t.level && (this._level = t.level), t.fingerprint && (this._fingerprint = t.fingerprint), t.requestSession && (this._requestSession = t.requestSession)), this
        }
        clear() {
            return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._requestSession = void 0, this._span = void 0, this._session = void 0, this._notifyScopeListeners(), this._attachments = [], this
        }
        addBreadcrumb(t, r) {
            var n = typeof r == "number" ? Math.min(r, gb) : gb;
            if (n <= 0) return this;
            var s = {
                timestamp: tS(),
                ...t
            };
            return this._breadcrumbs = [...this._breadcrumbs, s].slice(-n), this._notifyScopeListeners(), this
        }
        clearBreadcrumbs() {
            return this._breadcrumbs = [], this._notifyScopeListeners(), this
        }
        addAttachment(t) {
            return this._attachments.push(t), this
        }
        getAttachments() {
            return this._attachments
        }
        clearAttachments() {
            return this._attachments = [], this
        }
        applyToEvent(t, r = {}) {
            if (this._extra && Object.keys(this._extra).length && (t.extra = {
                    ...this._extra,
                    ...t.extra
                }), this._tags && Object.keys(this._tags).length && (t.tags = {
                    ...this._tags,
                    ...t.tags
                }), this._user && Object.keys(this._user).length && (t.user = {
                    ...this._user,
                    ...t.user
                }), this._contexts && Object.keys(this._contexts).length && (t.contexts = {
                    ...this._contexts,
                    ...t.contexts
                }), this._level && (t.level = this._level), this._transactionName && (t.transaction = this._transactionName), this._span) {
                t.contexts = {
                    trace: this._span.getTraceContext(),
                    ...t.contexts
                };
                var n = this._span.transaction && this._span.transaction.name;
                n && (t.tags = {
                    transaction: n,
                    ...t.tags
                })
            }
            return this._applyFingerprint(t), t.breadcrumbs = [...t.breadcrumbs || [], ...this._breadcrumbs], t.breadcrumbs = t.breadcrumbs.length > 0 ? t.breadcrumbs : void 0, t.sdkProcessingMetadata = {
                ...t.sdkProcessingMetadata,
                ...this._sdkProcessingMetadata
            }, this._notifyEventProcessors([...nS(), ...this._eventProcessors], t, r)
        }
        setSDKProcessingMetadata(t) {
            return this._sdkProcessingMetadata = {
                ...this._sdkProcessingMetadata,
                ...t
            }, this
        }
        _notifyEventProcessors(t, r, n, s = 0) {
            return new Tn((o, c) => {
                var u = t[s];
                if (r === null || typeof u != "function") o(r);
                else {
                    var f = u({
                        ...r
                    }, n);
                    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && u.id && f === null && Wt.log(`Event processor "${u.id}" dropped event`), q1(f) ? f.then(h => this._notifyEventProcessors(t, h, n, s + 1).then(o)).then(null, c) : this._notifyEventProcessors(t, f, n, s + 1).then(o).then(null, c)
                }
            })
        }
        _notifyScopeListeners() {
            this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach(t => {
                t(this)
            }), this._notifyingListeners = !1)
        }
        _applyFingerprint(t) {
            t.fingerprint = t.fingerprint ? Array.isArray(t.fingerprint) ? t.fingerprint : [t.fingerprint] : [], this._fingerprint && (t.fingerprint = t.fingerprint.concat(this._fingerprint)), t.fingerprint && !t.fingerprint.length && delete t.fingerprint
        }
    }

    function nS() {
        return $p("globalEventProcessors", () => [])
    }

    function iS(e) {
        nS().push(e)
    }
    var Lp = 4,
        WJ = 100;
    class _o {
        __init() {
            this._stack = [{}]
        }
        constructor(t, r = new is, n = Lp) {
            this._version = n, _o.prototype.__init.call(this), this.getStackTop().scope = r, t && this.bindClient(t)
        }
        isOlderThan(t) {
            return this._version < t
        }
        bindClient(t) {
            var r = this.getStackTop();
            r.client = t, t && t.setupIntegrations && t.setupIntegrations()
        }
        pushScope() {
            var t = is.clone(this.getScope());
            return this.getStack().push({
                client: this.getClient(),
                scope: t
            }), t
        }
        popScope() {
            return this.getStack().length <= 1 ? !1 : !!this.getStack().pop()
        }
        withScope(t) {
            var r = this.pushScope();
            try {
                t(r)
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
        captureException(t, r) {
            var n = this._lastEventId = r && r.event_id ? r.event_id : Va(),
                s = new Error("Sentry syntheticException");
            return this._withClient((o, c) => {
                o.captureException(t, {
                    originalException: t,
                    syntheticException: s,
                    ...r,
                    event_id: n
                }, c)
            }), n
        }
        captureMessage(t, r, n) {
            var s = this._lastEventId = n && n.event_id ? n.event_id : Va(),
                o = new Error(t);
            return this._withClient((c, u) => {
                c.captureMessage(t, r, {
                    originalException: t,
                    syntheticException: o,
                    ...n,
                    event_id: s
                }, u)
            }), s
        }
        captureEvent(t, r) {
            var n = r && r.event_id ? r.event_id : Va();
            return t.type !== "transaction" && (this._lastEventId = n), this._withClient((s, o) => {
                s.captureEvent(t, {
                    ...r,
                    event_id: n
                }, o)
            }), n
        }
        lastEventId() {
            return this._lastEventId
        }
        addBreadcrumb(t, r) {
            const {
                scope: n,
                client: s
            } = this.getStackTop();
            if (!n || !s) return;
            const {
                beforeBreadcrumb: o = null,
                maxBreadcrumbs: c = WJ
            } = s.getOptions && s.getOptions() || {};
            if (!(c <= 0)) {
                var u = tS(),
                    f = {
                        timestamp: u,
                        ...t
                    },
                    h = o ? z1(() => o(f, r)) : f;
                h !== null && n.addBreadcrumb(h, c)
            }
        }
        setUser(t) {
            var r = this.getScope();
            r && r.setUser(t)
        }
        setTags(t) {
            var r = this.getScope();
            r && r.setTags(t)
        }
        setExtras(t) {
            var r = this.getScope();
            r && r.setExtras(t)
        }
        setTag(t, r) {
            var n = this.getScope();
            n && n.setTag(t, r)
        }
        setExtra(t, r) {
            var n = this.getScope();
            n && n.setExtra(t, r)
        }
        setContext(t, r) {
            var n = this.getScope();
            n && n.setContext(t, r)
        }
        configureScope(t) {
            const {
                scope: r,
                client: n
            } = this.getStackTop();
            r && n && t(r)
        }
        run(t) {
            var r = mb(this);
            try {
                t(this)
            } finally {
                mb(r)
            }
        }
        getIntegration(t) {
            var r = this.getClient();
            if (!r) return null;
            try {
                return r.getIntegration(t)
            } catch {
                return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Wt.warn(`Cannot retrieve integration ${t.id} from the current Hub`), null
            }
        }
        startTransaction(t, r) {
            return this._callExtensionMethod("startTransaction", t, r)
        }
        traceHeaders() {
            return this._callExtensionMethod("traceHeaders")
        }
        captureSession(t = !1) {
            if (t) return this.endSession();
            this._sendSessionUpdate()
        }
        endSession() {
            var t = this.getStackTop(),
                r = t && t.scope,
                n = r && r.getSession();
            n && jJ(n), this._sendSessionUpdate(), r && r.setSession()
        }
        startSession(t) {
            const {
                scope: r,
                client: n
            } = this.getStackTop(), {
                release: s,
                environment: o
            } = n && n.getOptions() || {};
            var c = Jt();
            const {
                userAgent: u
            } = c.navigator || {};
            var f = BJ({
                release: s,
                environment: o,
                ...r && {
                    user: r.getUser()
                },
                ...u && {
                    userAgent: u
                },
                ...t
            });
            if (r) {
                var h = r.getSession && r.getSession();
                h && h.status === "ok" && Xl(h, {
                    status: "exited"
                }), this.endSession(), r.setSession(f)
            }
            return f
        }
        shouldSendDefaultPii() {
            var t = this.getClient(),
                r = t && t.getOptions();
            return Boolean(r && r.sendDefaultPii)
        }
        _sendSessionUpdate() {
            const {
                scope: t,
                client: r
            } = this.getStackTop();
            if (!!t) {
                var n = t.getSession();
                n && r && r.captureSession && r.captureSession(n)
            }
        }
        _withClient(t) {
            const {
                scope: r,
                client: n
            } = this.getStackTop();
            n && t(n, r)
        }
        _callExtensionMethod(t, ...r) {
            var n = Jl(),
                s = n.__SENTRY__;
            if (s && s.extensions && typeof s.extensions[t] == "function") return s.extensions[t].apply(this, r);
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Wt.warn(`Extension method ${t} couldn't be found, doing nothing.`)
        }
    }

    function Jl() {
        var e = Jt();
        return e.__SENTRY__ = e.__SENTRY__ || {
            extensions: {},
            hub: void 0
        }, e
    }

    function mb(e) {
        var t = Jl(),
            r = oi(t);
        return kp(t, e), r
    }

    function Ur() {
        var e = Jl();
        return (!sS(e) || oi(e).isOlderThan(Lp)) && kp(e, new _o), Cp() ? KJ(e) : oi(e)
    }

    function KJ(e) {
        try {
            var t = Jl().__SENTRY__,
                r = t && t.extensions && t.extensions.domain && t.extensions.domain.active;
            if (!r) return oi(e);
            if (!sS(r) || oi(r).isOlderThan(Lp)) {
                var n = oi(e).getStackTop();
                kp(r, new _o(n.client, is.clone(n.scope)))
            }
            return oi(r)
        } catch {
            return oi(e)
        }
    }

    function sS(e) {
        return !!(e && e.__SENTRY__ && e.__SENTRY__.hub)
    }

    function oi(e) {
        return $p("hub", () => new _o, e)
    }

    function kp(e, t) {
        if (!e) return !1;
        var r = e.__SENTRY__ = e.__SENTRY__ || {};
        return r.hub = t, !0
    }

    function HJ(e, t) {
        return Ur().captureException(e, {
            captureContext: t
        })
    }

    function VJ(e) {
        Ur().withScope(e)
    }

    function qJ(e) {
        var t = e.protocol ? `${e.protocol}:` : "",
            r = e.port ? `:${e.port}` : "";
        return `${t}//${e.host}${r}${e.path?`/${e.path}`:""}/api/`
    }

    function YJ(e, t) {
        var r = uJ(e),
            n = `${qJ(r)}embed/error-page/`;
        let s = `dsn=${oJ(r)}`;
        for (var o in t)
            if (o !== "dsn")
                if (o === "user") {
                    var c = t.user;
                    if (!c) continue;
                    c.name && (s += `&name=${encodeURIComponent(c.name)}`), c.email && (s += `&email=${encodeURIComponent(c.email)}`)
                } else s += `&${encodeURIComponent(o)}=${encodeURIComponent(t[o])}`;
        return `${n}?${s}`
    }
    let vb;
    class so {
        constructor() {
            so.prototype.__init.call(this)
        }
        static __initStatic() {
            this.id = "FunctionToString"
        }
        __init() {
            this.name = so.id
        }
        setupOnce() {
            vb = Function.prototype.toString, Function.prototype.toString = function(...t) {
                var r = Np(this) || this;
                return vb.apply(r, t)
            }
        }
    }
    so.__initStatic();
    var zJ = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/];
    class Ws {
        static __initStatic() {
            this.id = "InboundFilters"
        }
        __init() {
            this.name = Ws.id
        }
        constructor(t = {}) {
            this._options = t, Ws.prototype.__init.call(this)
        }
        setupOnce(t, r) {
            var n = s => {
                var o = r();
                if (o) {
                    var c = o.getIntegration(Ws);
                    if (c) {
                        var u = o.getClient(),
                            f = u ? u.getOptions() : {},
                            h = XJ(c._options, f);
                        return JJ(s, h) ? null : s
                    }
                }
                return s
            };
            n.id = this.name, t(n)
        }
    }
    Ws.__initStatic();

    function XJ(e = {}, t = {}) {
        return {
            allowUrls: [...e.allowUrls || [], ...t.allowUrls || []],
            denyUrls: [...e.denyUrls || [], ...t.denyUrls || []],
            ignoreErrors: [...e.ignoreErrors || [], ...t.ignoreErrors || [], ...zJ],
            ignoreInternal: e.ignoreInternal !== void 0 ? e.ignoreInternal : !0
        }
    }

    function JJ(e, t) {
        return t.ignoreInternal && rZ(e) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Wt.warn(`Event dropped due to being internal Sentry Error.
Event: ${ks(e)}`), !0) : ZJ(e, t.ignoreErrors) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Wt.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${ks(e)}`), !0) : QJ(e, t.denyUrls) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Wt.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${ks(e)}.
Url: ${il(e)}`), !0) : eZ(e, t.allowUrls) ? !1 : ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Wt.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${ks(e)}.
Url: ${il(e)}`), !0)
    }

    function ZJ(e, t) {
        return !t || !t.length ? !1 : tZ(e).some(r => t.some(n => Rp(r, n)))
    }

    function QJ(e, t) {
        if (!t || !t.length) return !1;
        var r = il(e);
        return r ? t.some(n => Rp(r, n)) : !1
    }

    function eZ(e, t) {
        if (!t || !t.length) return !0;
        var r = il(e);
        return r ? t.some(n => Rp(r, n)) : !0
    }

    function tZ(e) {
        if (e.message) return [e.message];
        if (e.exception) try {
            const {
                type: t = "",
                value: r = ""
            } = e.exception.values && e.exception.values[0] || {};
            return [`${r}`, `${t}: ${r}`]
        } catch {
            return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Wt.error(`Cannot extract message for event ${ks(e)}`), []
        }
        return []
    }

    function rZ(e) {
        try {
            return e.exception.values[0].type === "SentryError"
        } catch {}
        return !1
    }

    function nZ(e = []) {
        for (let r = e.length - 1; r >= 0; r--) {
            var t = e[r];
            if (t && t.filename !== "<anonymous>" && t.filename !== "[native code]") return t.filename || null
        }
        return null
    }

    function il(e) {
        try {
            let t;
            try {
                t = e.exception.values[0].stacktrace.frames
            } catch {}
            return t ? nZ(t) : null
        } catch {
            return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Wt.error(`Cannot extract url for event ${ks(e)}`), null
        }
    }

    function aS(e, t) {
        var r = Pp(e, t),
            n = {
                type: t && t.name,
                value: oZ(t)
            };
        return r.length && (n.stacktrace = {
            frames: r
        }), n.type === void 0 && n.value === "" && (n.value = "Unrecoverable error caught"), n
    }

    function iZ(e, t, r, n) {
        var s = {
            exception: {
                values: [{
                    type: Ap(t) ? t.constructor.name : n ? "UnhandledRejection" : "Error",
                    value: `Non-Error ${n?"promise rejection":"exception"} captured with keys: ${hJ(t)}`
                }]
            },
            extra: {
                __serialized__: eS(t)
            }
        };
        if (r) {
            var o = Pp(e, r);
            o.length && (s.exception.values[0].stacktrace = {
                frames: o
            })
        }
        return s
    }

    function sd(e, t) {
        return {
            exception: {
                values: [aS(e, t)]
            }
        }
    }

    function Pp(e, t) {
        var r = t.stacktrace || t.stack || "",
            n = aZ(t);
        try {
            return e(r, n)
        } catch {}
        return []
    }
    var sZ = /Minified React error #\d+;/i;

    function aZ(e) {
        if (e) {
            if (typeof e.framesToPop == "number") return e.framesToPop;
            if (sZ.test(e.message)) return 1
        }
        return 0
    }

    function oZ(e) {
        var t = e && e.message;
        return t ? t.error && typeof t.error.message == "string" ? t.error.message : t : "No error message"
    }

    function oS(e, t, r, n, s) {
        let o;
        if (V1(t) && t.error) {
            var c = t;
            return sd(e, c.error)
        }
        if (sb(t) || JX(t)) {
            var u = t;
            if ("stack" in t) o = sd(e, t);
            else {
                var f = u.name || (sb(u) ? "DOMError" : "DOMException"),
                    h = u.message ? `${f}: ${u.message}` : f;
                o = yb(e, h, r, n), th(o, h)
            }
            return "code" in u && (o.tags = {
                ...o.tags,
                "DOMException.code": `${u.code}`
            }), o
        }
        if (H1(t)) return sd(e, t);
        if (zl(t) || Ap(t)) {
            var m = t;
            return o = iZ(e, m, r, s), nl(o, {
                synthetic: !0
            }), o
        }
        return o = yb(e, t, r, n), th(o, `${t}`, void 0), nl(o, {
            synthetic: !0
        }), o
    }

    function yb(e, t, r, n) {
        var s = {
            message: t
        };
        if (n && r) {
            var o = Pp(e, r);
            o.length && (s.exception = {
                values: [{
                    value: t,
                    stacktrace: {
                        frames: o
                    }
                }]
            })
        }
        return s
    }
    var cZ = "Breadcrumbs";
    class ao {
        static __initStatic() {
            this.id = cZ
        }
        __init() {
            this.name = ao.id
        }
        constructor(t) {
            ao.prototype.__init.call(this), this.options = {
                console: !0,
                dom: !0,
                fetch: !0,
                history: !0,
                sentry: !0,
                xhr: !0,
                ...t
            }
        }
        setupOnce() {
            this.options.console && Xi("console", uZ), this.options.dom && Xi("dom", lZ(this.options.dom)), this.options.xhr && Xi("xhr", fZ), this.options.fetch && Xi("fetch", dZ), this.options.history && Xi("history", hZ)
        }
    }
    ao.__initStatic();

    function lZ(e) {
        function t(r) {
            let n, s = typeof e == "object" ? e.serializeAttribute : void 0;
            typeof s == "string" && (s = [s]);
            try {
                n = r.event.target ? Qd(r.event.target, s) : Qd(r.event, s)
            } catch {
                n = "<unknown>"
            }
            n.length !== 0 && Ur().addBreadcrumb({
                category: `ui.${r.name}`,
                message: n
            }, {
                event: r.event,
                name: r.name,
                global: r.global
            })
        }
        return t
    }

    function uZ(e) {
        var t = {
            category: "console",
            data: {
                arguments: e.args,
                logger: "console"
            },
            level: MJ(e.level),
            message: cb(e.args, " ")
        };
        if (e.level === "assert")
            if (e.args[0] === !1) t.message = `Assertion failed: ${cb(e.args.slice(1)," ")||"console.assert"}`, t.data.arguments = e.args.slice(1);
            else return;
        Ur().addBreadcrumb(t, {
            input: e.args,
            level: e.level
        })
    }

    function fZ(e) {
        if (e.endTimestamp) {
            if (e.xhr.__sentry_own_request__) return;
            const {
                method: t,
                url: r,
                status_code: n,
                body: s
            } = e.xhr.__sentry_xhr__ || {};
            Ur().addBreadcrumb({
                category: "xhr",
                data: {
                    method: t,
                    url: r,
                    status_code: n
                },
                type: "http"
            }, {
                xhr: e.xhr,
                input: s
            });
            return
        }
    }

    function dZ(e) {
        !e.endTimestamp || e.fetchData.url.match(/sentry_key/) && e.fetchData.method === "POST" || (e.error ? Ur().addBreadcrumb({
            category: "fetch",
            data: e.fetchData,
            level: "error",
            type: "http"
        }, {
            data: e.error,
            input: e.args
        }) : Ur().addBreadcrumb({
            category: "fetch",
            data: {
                ...e.fetchData,
                status_code: e.response.status
            },
            type: "http"
        }, {
            input: e.args,
            response: e.response
        }))
    }

    function hZ(e) {
        var t = Jt();
        let r = e.from,
            n = e.to;
        var s = nd(t.location.href);
        let o = nd(r);
        var c = nd(n);
        o.path || (o = s), s.protocol === c.protocol && s.host === c.host && (n = c.relative), s.protocol === o.protocol && s.host === o.host && (r = o.relative), Ur().addBreadcrumb({
            category: "navigation",
            data: {
                from: r,
                to: n
            }
        })
    }
    let ih = 0;

    function cS() {
        return ih > 0
    }

    function pZ() {
        ih += 1, setTimeout(() => {
            ih -= 1
        })
    }

    function Zs(e, t = {}, r) {
        if (typeof e != "function") return e;
        try {
            var n = e.__sentry_wrapped__;
            if (n) return n;
            if (Np(e)) return e
        } catch {
            return e
        }
        var s = function() {
            var u = Array.prototype.slice.call(arguments);
            try {
                r && typeof r == "function" && r.apply(this, arguments);
                var f = u.map(h => Zs(h, t));
                return e.apply(this, f)
            } catch (h) {
                throw pZ(), VJ(m => {
                    m.addEventProcessor(y => (t.mechanism && (th(y, void 0, void 0), nl(y, t.mechanism)), y.extra = {
                        ...y.extra,
                        arguments: u
                    }, y)), HJ(h)
                }), h
            }
        };
        try {
            for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (s[o] = e[o])
        } catch {}
        J1(s, e), X1(e, "__sentry_wrapped__", s);
        try {
            var c = Object.getOwnPropertyDescriptor(s, "name");
            c.configurable && Object.defineProperty(s, "name", {
                get() {
                    return e.name
                }
            })
        } catch {}
        return s
    }
    class di {
        static __initStatic() {
            this.id = "GlobalHandlers"
        }
        __init() {
            this.name = di.id
        }
        __init2() {
            this._installFunc = {
                onerror: gZ,
                onunhandledrejection: mZ
            }
        }
        constructor(t) {
            di.prototype.__init.call(this), di.prototype.__init2.call(this), this._options = {
                onerror: !0,
                onunhandledrejection: !0,
                ...t
            }
        }
        setupOnce() {
            Error.stackTraceLimit = 50;
            var t = this._options;
            for (var r in t) {
                var n = this._installFunc[r];
                n && t[r] && (_Z(r), n(), this._installFunc[r] = void 0)
            }
        }
    }
    di.__initStatic();

    function gZ() {
        Xi("error", e => {
            const [t, r, n] = fS();
            if (!t.getIntegration(di)) return;
            const {
                msg: s,
                url: o,
                line: c,
                column: u,
                error: f
            } = e;
            if (!(cS() || f && f.__sentry_own_request__)) {
                var h = f === void 0 && Js(s) ? yZ(s, o, c, u) : lS(oS(r, f || s, void 0, n, !1), o, c, u);
                h.level = "error", uS(t, f, h, "onerror")
            }
        })
    }

    function mZ() {
        Xi("unhandledrejection", e => {
            const [t, r, n] = fS();
            if (!t.getIntegration(di)) return;
            let s = e;
            try {
                "reason" in e ? s = e.reason : "detail" in e && "reason" in e.detail && (s = e.detail.reason)
            } catch {}
            if (cS() || s && s.__sentry_own_request__) return !0;
            var o = ZX(s) ? vZ(s) : oS(r, s, void 0, n, !0);
            o.level = "error", uS(t, s, o, "onunhandledrejection")
        })
    }

    function vZ(e) {
        return {
            exception: {
                values: [{
                    type: "UnhandledRejection",
                    value: `Non-Error promise rejection captured with value: ${String(e)}`
                }]
            }
        }
    }

    function yZ(e, t, r, n) {
        var s = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
        let o = V1(e) ? e.message : e,
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
        return lS(f, t, r, n)
    }

    function lS(e, t, r, n) {
        var s = e.exception = e.exception || {},
            o = s.values = s.values || [],
            c = o[0] = o[0] || {},
            u = c.stacktrace = c.stacktrace || {},
            f = u.frames = u.frames || [],
            h = isNaN(parseInt(n, 10)) ? void 0 : n,
            m = isNaN(parseInt(r, 10)) ? void 0 : r,
            y = Js(t) && t.length > 0 ? t : iJ();
        return f.length === 0 && f.push({
            colno: h,
            filename: y,
            function: "?",
            in_app: !0,
            lineno: m
        }), e
    }

    function _Z(e) {
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Wt.log(`Global Handler attached: ${e}`)
    }

    function uS(e, t, r, n) {
        nl(r, {
            handled: !1,
            type: n
        }), e.captureEvent(r, {
            originalException: t
        })
    }

    function fS() {
        var e = Ur(),
            t = e.getClient(),
            r = t && t.getOptions() || {
                stackParser: () => [],
                attachStacktrace: !1
            };
        return [e, r.stackParser, r.attachStacktrace]
    }
    var bZ = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"];
    class oo {
        static __initStatic() {
            this.id = "TryCatch"
        }
        __init() {
            this.name = oo.id
        }
        constructor(t) {
            oo.prototype.__init.call(this), this._options = {
                XMLHttpRequest: !0,
                eventTarget: !0,
                requestAnimationFrame: !0,
                setInterval: !0,
                setTimeout: !0,
                ...t
            }
        }
        setupOnce() {
            var t = Jt();
            this._options.setTimeout && lr(t, "setTimeout", _b), this._options.setInterval && lr(t, "setInterval", _b), this._options.requestAnimationFrame && lr(t, "requestAnimationFrame", EZ), this._options.XMLHttpRequest && "XMLHttpRequest" in t && lr(XMLHttpRequest.prototype, "send", TZ);
            var r = this._options.eventTarget;
            if (r) {
                var n = Array.isArray(r) ? r : bZ;
                n.forEach(SZ)
            }
        }
    }
    oo.__initStatic();

    function _b(e) {
        return function(...t) {
            var r = t[0];
            return t[0] = Zs(r, {
                mechanism: {
                    data: {
                        function: mi(e)
                    },
                    handled: !0,
                    type: "instrument"
                }
            }), e.apply(this, t)
        }
    }

    function EZ(e) {
        return function(t) {
            return e.apply(this, [Zs(t, {
                mechanism: {
                    data: {
                        function: "requestAnimationFrame",
                        handler: mi(e)
                    },
                    handled: !0,
                    type: "instrument"
                }
            })])
        }
    }

    function TZ(e) {
        return function(...t) {
            var r = this,
                n = ["onload", "onerror", "onprogress", "onreadystatechange"];
            return n.forEach(s => {
                s in r && typeof r[s] == "function" && lr(r, s, function(o) {
                    var c = {
                            mechanism: {
                                data: {
                                    function: s,
                                    handler: mi(o)
                                },
                                handled: !0,
                                type: "instrument"
                            }
                        },
                        u = Np(o);
                    return u && (c.mechanism.data.handler = mi(u)), Zs(o, c)
                })
            }), e.apply(this, t)
        }
    }

    function SZ(e) {
        var t = Jt(),
            r = t[e] && t[e].prototype;
        !r || !r.hasOwnProperty || !r.hasOwnProperty("addEventListener") || (lr(r, "addEventListener", function(n) {
            return function(s, o, c) {
                try {
                    typeof o.handleEvent == "function" && (o.handleEvent = Zs(o.handleEvent, {
                        mechanism: {
                            data: {
                                function: "handleEvent",
                                handler: mi(o),
                                target: e
                            },
                            handled: !0,
                            type: "instrument"
                        }
                    }))
                } catch {}
                return n.apply(this, [s, Zs(o, {
                    mechanism: {
                        data: {
                            function: "addEventListener",
                            handler: mi(o),
                            target: e
                        },
                        handled: !0,
                        type: "instrument"
                    }
                }), c])
            }
        }), lr(r, "removeEventListener", function(n) {
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
    var wZ = "cause",
        OZ = 5;
    class Ks {
        static __initStatic() {
            this.id = "LinkedErrors"
        }
        __init() {
            this.name = Ks.id
        }
        constructor(t = {}) {
            Ks.prototype.__init.call(this), this._key = t.key || wZ, this._limit = t.limit || OZ
        }
        setupOnce() {
            var t = Ur().getClient();
            !t || iS((r, n) => {
                var s = Ur().getIntegration(Ks);
                return s ? IZ(t.getOptions().stackParser, s._key, s._limit, r, n) : r
            })
        }
    }
    Ks.__initStatic();

    function IZ(e, t, r, n, s) {
        if (!n.exception || !n.exception.values || !s || !wi(s.originalException, Error)) return n;
        var o = dS(e, r, s.originalException, t);
        return n.exception.values = [...o, ...n.exception.values], n
    }

    function dS(e, t, r, n, s = []) {
        if (!wi(r[n], Error) || s.length + 1 >= t) return s;
        var o = aS(e, r[n]);
        return dS(e, t, r[n], n, [o, ...s])
    }
    var Gi = Jt();
    class Hs {
        constructor() {
            Hs.prototype.__init.call(this)
        }
        static __initStatic() {
            this.id = "HttpContext"
        }
        __init() {
            this.name = Hs.id
        }
        setupOnce() {
            iS(t => {
                if (Ur().getIntegration(Hs)) {
                    if (!Gi.navigator && !Gi.location && !Gi.document) return t;
                    var r = t.request && t.request.url || Gi.location && Gi.location.href;
                    const {
                        referrer: o
                    } = Gi.document || {}, {
                        userAgent: c
                    } = Gi.navigator || {};
                    var n = {
                            ...t.request && t.request.headers,
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
                        ...t,
                        request: s
                    }
                }
                return t
            })
        }
    }
    Hs.__initStatic();
    class Vs {
        constructor() {
            Vs.prototype.__init.call(this)
        }
        static __initStatic() {
            this.id = "Dedupe"
        }
        __init() {
            this.name = Vs.id
        }
        setupOnce(t, r) {
            var n = s => {
                var o = r().getIntegration(Vs);
                if (o) {
                    try {
                        if (CZ(s, o._previousEvent)) return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Wt.warn("Event dropped due to being a duplicate of previously captured event."), null
                    } catch {
                        return o._previousEvent = s
                    }
                    return o._previousEvent = s
                }
                return s
            };
            n.id = this.name, t(n)
        }
    }
    Vs.__initStatic();

    function CZ(e, t) {
        return t ? !!($Z(e, t) || AZ(e, t)) : !1
    }

    function $Z(e, t) {
        var r = e.message,
            n = t.message;
        return !(!r && !n || r && !n || !r && n || r !== n || !pS(e, t) || !hS(e, t))
    }

    function AZ(e, t) {
        var r = bb(t),
            n = bb(e);
        return !(!r || !n || r.type !== n.type || r.value !== n.value || !pS(e, t) || !hS(e, t))
    }

    function hS(e, t) {
        let r = Eb(e),
            n = Eb(t);
        if (!r && !n) return !0;
        if (r && !n || !r && n || (r = r, n = n, n.length !== r.length)) return !1;
        for (let c = 0; c < n.length; c++) {
            var s = n[c],
                o = r[c];
            if (s.filename !== o.filename || s.lineno !== o.lineno || s.colno !== o.colno || s.function !== o.function) return !1
        }
        return !0
    }

    function pS(e, t) {
        let r = e.fingerprint,
            n = t.fingerprint;
        if (!r && !n) return !0;
        if (r && !n || !r && n) return !1;
        r = r, n = n;
        try {
            return r.join("") === n.join("")
        } catch {
            return !1
        }
    }

    function bb(e) {
        return e.exception && e.exception.values && e.exception.values[0]
    }

    function Eb(e) {
        var t = e.exception;
        if (t) try {
            return t.values[0].stacktrace.frames
        } catch {
            return
        }
    }
    new Ws, new so, new oo, new ao, new di, new Ks, new Vs, new Hs;

    function RZ(e = {}, t = Ur()) {
        var r = Jt();
        if (!r.document) {
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Wt.error("Global document not defined in showReportDialog call");
            return
        }
        const {
            client: n,
            scope: s
        } = t.getStackTop();
        var o = e.dsn || n && n.getDsn();
        if (!o) {
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Wt.error("DSN not configured for showReportDialog call");
            return
        }
        s && (e.user = {
            ...s.getUser(),
            ...e.user
        }), e.eventId || (e.eventId = t.lastEventId());
        var c = r.document.createElement("script");
        c.async = !0, c.src = YJ(o, e), e.onLoad && (c.onload = e.onLoad);
        var u = r.document.head || r.document.body;
        u ? u.appendChild(c) : (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Wt.error("Not injecting report dialog. No injection point found in HTML")
    }
    const NZ = Je({
            setup() {
                return {
                    fatalError: Qi(yo.fatal.error)
                }
            },
            computed: {
                message() {
                    var n, s, o, c, u;
                    const e = (o = (s = (n = this.fatalError) == null ? void 0 : n.event) == null ? void 0 : s.event_id) != null ? o : "Unknown";
                    let t = "";
                    const r = (u = (c = this.fatalError) == null ? void 0 : c.hint) == null ? void 0 : u.originalException;
                    return r ? typeof r == "string" ? t = r : t = r.message : t = "An unknown error occured", `Version:
${window.tv.manifest.loader.version}

Event ID:
${e}

${t}`
                }
            },
            methods: {
                onFeedbackClick() {
                    var e, t, r;
                    RZ({
                        id: (r = (t = (e = this.fatalError) == null ? void 0 : e.event) == null ? void 0 : t.event_id) != null ? r : "Unknown"
                    })
                }
            }
        }),
        bo = e => (ml("data-v-a7272d53"), e = e(), vl(), e),
        LZ = {
            class: "jbg fatal"
        },
        kZ = {
            class: "constrain"
        },
        PZ = bo(() => z("a", {
            class: "logo",
            href: "/",
            "aria-label": "Jackbox Games Logo"
        }, null, -1)),
        xZ = {
            class: "content"
        },
        DZ = bo(() => z("h1", null, "You have encountered an error", -1)),
        MZ = bo(() => z("p", null, "Something went wrong! But don't worry, you can try a few things to get going.", -1)),
        UZ = bo(() => z("ul", null, [z("li", null, "Refresh the page"), z("li", null, "Turn off adblockers or other browser extensions."), z("li", null, "Check your connection to the Internet."), z("li", null, "Make sure you're using an up-to-date browser."), z("li", null, "If that doesn't work, let us know.")], -1)),
        FZ = bo(() => z("hr", null, null, -1)),
        BZ = {
            class: "error"
        };

    function jZ(e, t, r, n, s, o) {
        return F(), q("div", LZ, [z("div", kZ, [PZ, z("div", xZ, [DZ, MZ, UZ, z("button", {
            onClick: t[0] || (t[0] = (...c) => e.onFeedbackClick && e.onFeedbackClick(...c))
        }, "Tell us what happened"), FZ, z("pre", BZ, De(e.message), 1)])])])
    }
    const GZ = qe(NZ, [
            ["render", jZ],
            ["__scopeId", "data-v-a7272d53"]
        ]),
        Cc = Bn({
            hasCrashed: !1
        }),
        WZ = {
            install: e => {
                if (e.config.globalProperties.$handleEcastError) return;
                e.provide(yo.fatal.error, xr(() => Cc));
                const t = (r, n) => {
                    var s, o;
                    if (r instanceof fi.EcastEntityNotFound || r instanceof fi.EcastFilterError || r instanceof fi.EcastRateLimitExceeded || r instanceof Error && ((s = r.message) == null ? void 0 : s.includes("Socket not ready to send")) || r instanceof Error && ((o = r.message) == null ? void 0 : o.includes("No connection available"))) return console.warn(r);
                    throw n ? console.error(n, r) : console.error(r), r
                };
                window.tv.onError = async (r, n) => {
                    if (r.level === "error" && (Cc.hasCrashed = !0, Cc.event = r, Cc.hint = n), e.config.globalProperties.$debugRecorder) return await e.config.globalProperties.$debugRecorder.sendToEcast()
                }, e.component("Fatal", GZ), e.config.globalProperties.$handleEcastError = t
            }
        };
    var KZ = G1,
        HZ = W1;

    function VZ(e, t) {
        t = KZ(t, e);
        for (var r = 0, n = t.length; e != null && r < n;) e = e[HZ(t[r++])];
        return r && r == n ? e : void 0
    }
    var qZ = VZ,
        YZ = qZ;

    function zZ(e, t, r) {
        var n = e == null ? void 0 : YZ(e, t);
        return n === void 0 ? r : n
    }
    var XZ = zZ,
        JZ = Math.floor,
        ZZ = Math.random;

    function QZ(e, t) {
        return e + JZ(ZZ() * (t - e + 1))
    }
    var eQ = QZ,
        tQ = eQ;

    function rQ(e) {
        var t = e.length;
        return t ? e[tQ(0, t - 1)] : void 0
    }
    var gS = rQ,
        nQ = B1;

    function iQ(e, t) {
        return nQ(t, function(r) {
            return e[r]
        })
    }
    var sQ = iQ,
        aQ = sQ,
        oQ = ql;

    function cQ(e) {
        return e == null ? [] : aQ(e, oQ(e))
    }
    var lQ = cQ,
        uQ = gS,
        fQ = lQ;

    function dQ(e) {
        return uQ(fQ(e))
    }
    var hQ = dQ,
        pQ = gS,
        gQ = hQ,
        mQ = _i;

    function vQ(e) {
        var t = mQ(e) ? pQ : gQ;
        return t(e)
    }
    var yQ = vQ;

    function Tb(e, t) {
        const r = e.global.locale,
            n = e.global.messages[r],
            s = XZ(n, t);
        return Array.isArray(s) || console.warn(`[i18nPlugin] Translation with key ${t} is not an array`), yQ(s)
    }
    const _Q = {
            install: (e, t) => {
                e.directive("ts", (r, n) => {
                    const s = Tb(t.i18n, n.value);
                    r.textContent = s || ""
                }), e.config.globalProperties.$ts = function(n) {
                    return Tb(t.i18n, n) || ""
                }
            }
        },
        bQ = Je({
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
        EQ = "main/pp8/survey-bomb/assets/928ef0da.png",
        TQ = "main/pp8/survey-bomb/assets/0bb76a2d.png",
        SQ = "main/pp8/survey-bomb/assets/ed4469b3.png",
        wQ = {
            key: 0,
            class: "image",
            src: EQ,
            alt: "Kicked"
        },
        OQ = {
            key: 1,
            class: "image",
            src: TQ,
            alt: "Thank You"
        },
        IQ = {
            key: 2,
            class: "image",
            src: SQ,
            alt: "Error"
        },
        CQ = {
            class: "text"
        },
        $Q = {
            key: 3,
            class: "subtext"
        },
        AQ = {
            class: "actions"
        };

    function RQ(e, t, r, n, s, o) {
        const c = Kt("bb");
        return F(), q("div", {
            class: Fe(["error-model", e.classes])
        }, [e.image === "tear" ? (F(), q("img", wQ)) : e.image === "moon" ? (F(), q("img", OQ)) : (F(), q("img", IQ)), Ve(z("h3", CQ, null, 512), [
            [c, e.text]
        ]), e.subtext ? Ve((F(), q("h3", $Q, null, 512)), [
            [c, e.subtext]
        ]) : Oe("", !0), z("div", AQ, [Ve(z("button", {
            onClick: t[0] || (t[0] = Or(u => e.$emit("resolve"), ["prevent"]))
        }, null, 512), [
            [c, e.dismissText]
        ])])], 2)
    }
    const NQ = qe(bQ, [
            ["render", RQ],
            ["__scopeId", "data-v-39debcb6"]
        ]),
        LQ = Je({
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
        kQ = {
            class: "text"
        },
        PQ = {
            key: 0,
            class: "subtext"
        },
        xQ = {
            class: "actions"
        },
        DQ = ["onClick"];

    function MQ(e, t, r, n, s, o) {
        const c = Kt("bb");
        return F(), q("div", {
            class: Fe(["options-modal", e.classes])
        }, [Ve(z("h3", kQ, null, 512), [
            [c, e.text]
        ]), e.subtext ? Ve((F(), q("h3", PQ, null, 512)), [
            [c, e.subtext]
        ]) : Oe("", !0), z("div", xQ, [(F(!0), q(ze, null, Qr(e.options, (u, f) => Ve((F(), q("button", {
            key: f,
            class: Fe(u.classes),
            onClick: Or(h => e.$emit("resolve", u.value), ["prevent"])
        }, null, 10, DQ)), [
            [c, u.text]
        ])), 128))])], 2)
    }
    const UQ = qe(LQ, [
            ["render", MQ],
            ["__scopeId", "data-v-fdbdeb06"]
        ]),
        FQ = Je({
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
                show(e, t = {}, r = {}) {
                    return this.props = t, this.classes = r.classes || "jbg", e === "Error" ? this.content = NQ : e === "Options" ? this.content = UQ : this.content = e, new Promise(n => {
                        this.resolve = n
                    })
                },
                onResolve(...e) {
                    this.props = null, this.resolve(...e)
                },
                onBackgroundClick() {
                    this.props = null, this.resolve()
                }
            }
        });

    function BQ(e, t, r, n, s, o) {
        return F(), At(Il, {
            name: "modal-transition"
        }, {
            default: Ch(() => [e.props ? (F(), q("div", {
                key: 0,
                class: Fe(["modal", e.classes]),
                onKeyup: t[0] || (t[0] = rT((...c) => e.onBackgroundClick && e.onBackgroundClick(...c), ["esc"])),
                onClick: t[1] || (t[1] = Or((...c) => e.onBackgroundClick && e.onBackgroundClick(...c), ["self"]))
            }, [e.content ? (F(), At(Rh(e.content), wl({
                key: 0,
                class: "content"
            }, e.props, {
                onResolve: e.onResolve
            }), null, 16, ["onResolve"])) : Oe("", !0)], 34)) : Oe("", !0)]),
            _: 1
        })
    }
    const jQ = qe(FQ, [
            ["render", BQ],
            ["__scopeId", "data-v-dc92e8d3"]
        ]),
        GQ = {
            install: e => {
                if (e.config.globalProperties.$showModal) return;
                let t;
                const r = (s, o, c) => {
                        if (!t) throw new Error("No ModalComponent is registered");
                        return t.show(s, o, c)
                    },
                    n = s => {
                        t = s
                    };
                e.component("Modal", jQ), e.config.globalProperties.$showModal = r, e.config.globalProperties.$registerModal = n
            }
        },
        WQ = Je({
            setup() {
                return {
                    announcment: Qi(yo.textDescriptions.announcement)
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
                announcment: function(t) {
                    this.lines.push({
                        id: Math.random(),
                        category: "announce",
                        text: t
                    })
                },
                "textDescriptions.latestDescriptions": function(t) {
                    !t || !t.length || t.forEach(r => {
                        r.id !== void 0 && this.lines.find(n => n.id === r.id) || this.lines.push(r)
                    })
                }
            }
        }),
        KQ = {
            class: "text-descriptions",
            role: "log",
            "aria-atomic": "false",
            "aria-relevant": "additions",
            "aria-live": "polite"
        };

    function HQ(e, t, r, n, s, o) {
        return F(), q("div", KQ, [(F(!0), q(ze, null, Qr(e.lines, c => (F(), q("p", {
            key: c.id
        }, De(c.text), 1))), 128))])
    }
    const VQ = qe(WQ, [
            ["render", HQ]
        ]),
        Sb = un(""),
        qQ = {
            install: e => {
                if (e.config.globalProperties.$announce) return;
                e.provide(yo.textDescriptions.announcement, xr(() => Sb.value));
                const t = r => {
                    Sb.value = r
                };
                e.component("TextDescriptions", VQ), e.config.globalProperties.$announce = t
            }
        },
        YQ = {
            install: e => {
                let t = "",
                    r = "";
                const n = o => o instanceof Function ? o() : o,
                    s = o => {
                        const c = document.querySelector('meta[name="theme-color"]');
                        !c || (document.body && (document.body.style.background = o), c.setAttribute("content", o), r = o)
                    };
                e.config.globalProperties.$setThemeColor = function(c) {
                    this.$options.themeColor = c, s(c)
                }, e.mixin({
                    mounted() {
                        if (!this.$options.themeColor) return;
                        const o = n(this.$options.themeColor);
                        s(o), this.$attrs.name === "game" && (t = o)
                    },
                    beforeDestroy() {
                        !this.$options.themeColor || n(this.$options.themeColor) !== r || s(t)
                    }
                })
            }
        },
        zQ = {
            install: e => {
                e.config.globalProperties.$vibrate = (t = [100, 100]) => {
                    var r;
                    if (!((r = window.navigator) != null && r.vibrate)) return !1;
                    try {
                        return window.navigator.vibrate(t), !0
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
    const sh = typeof window < "u",
        XQ = typeof Symbol == "function" && typeof Symbol.toStringTag == "symbol",
        Oi = e => XQ ? Symbol(e) : e,
        JQ = (e, t, r) => ZQ({
            l: e,
            k: t,
            s: r
        }),
        ZQ = e => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"),
        Gt = e => typeof e == "number" && isFinite(e),
        QQ = e => Dp(e) === "[object Date]",
        vi = e => Dp(e) === "[object RegExp]",
        Zl = e => Be(e) && Object.keys(e).length === 0;

    function eee(e, t) {
        typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack))
    }
    const rr = Object.assign;

    function wb(e) {
        return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
    }
    const tee = Object.prototype.hasOwnProperty;

    function xp(e, t) {
        return tee.call(e, t)
    }
    const bt = Array.isArray,
        xt = e => typeof e == "function",
        ye = e => typeof e == "string",
        et = e => typeof e == "boolean",
        Et = e => e !== null && typeof e == "object",
        mS = Object.prototype.toString,
        Dp = e => mS.call(e),
        Be = e => Dp(e) === "[object Object]",
        ree = e => e == null ? "" : bt(e) || Be(e) && e.toString === mS ? JSON.stringify(e, null, 2) : String(e);
    /*!
     * message-compiler v9.2.2
     * (c) 2022 kazuya kawaguchi
     * Released under the MIT License.
     */
    const it = {
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

    function Ql(e, t, r = {}) {
        const {
            domain: n,
            messages: s,
            args: o
        } = r, c = e, u = new SyntaxError(String(c));
        return u.code = e, t && (u.location = t), u.domain = n, u
    }

    function nee(e) {
        throw e
    }

    function iee(e, t, r) {
        return {
            line: e,
            column: t,
            offset: r
        }
    }

    function ah(e, t, r) {
        const n = {
            start: e,
            end: t
        };
        return r != null && (n.source = r), n
    }
    const xn = " ",
        see = "\r",
        mr = `
`,
        aee = String.fromCharCode(8232),
        oee = String.fromCharCode(8233);

    function cee(e) {
        const t = e;
        let r = 0,
            n = 1,
            s = 1,
            o = 0;
        const c = oe => t[oe] === see && t[oe + 1] === mr,
            u = oe => t[oe] === mr,
            f = oe => t[oe] === oee,
            h = oe => t[oe] === aee,
            m = oe => c(oe) || u(oe) || f(oe) || h(oe),
            y = () => r,
            E = () => n,
            I = () => s,
            k = () => o,
            M = oe => c(oe) || f(oe) || h(oe) ? mr : t[oe],
            j = () => M(r),
            C = () => M(r + o);

        function H() {
            return o = 0, m(r) && (n++, s = 0), c(r) && r++, r++, s++, t[r]
        }

        function X() {
            return c(r + o) && o++, o++, t[r + o]
        }

        function W() {
            r = 0, n = 1, s = 1, o = 0
        }

        function G(oe = 0) {
            o = oe
        }

        function Z() {
            const oe = r + o;
            for (; oe !== r;) H();
            o = 0
        }
        return {
            index: y,
            line: E,
            column: I,
            peekOffset: k,
            charAt: M,
            currentChar: j,
            currentPeek: C,
            next: H,
            peek: X,
            reset: W,
            resetPeek: G,
            skipToPeek: Z
        }
    }
    const ri = void 0,
        Ob = "'",
        lee = "tokenizer";

    function uee(e, t = {}) {
        const r = t.location !== !1,
            n = cee(e),
            s = () => n.index(),
            o = () => iee(n.line(), n.column(), n.index()),
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
            } = t;

        function y(g, p, w, ...D) {
            const B = h();
            if (p.column += w, p.offset += w, m) {
                const Y = ah(B.startLoc, p),
                    le = Ql(g, Y, {
                        domain: lee,
                        args: D
                    });
                m(le)
            }
        }

        function E(g, p, w) {
            g.endLoc = o(), g.currentType = p;
            const D = {
                type: p
            };
            return r && (D.loc = ah(g.startLoc, g.endLoc)), w != null && (D.value = w), D
        }
        const I = g => E(g, 14);

        function k(g, p) {
            return g.currentChar() === p ? (g.next(), p) : (y(it.EXPECTED_TOKEN, o(), 0, p), "")
        }

        function M(g) {
            let p = "";
            for (; g.currentPeek() === xn || g.currentPeek() === mr;) p += g.currentPeek(), g.peek();
            return p
        }

        function j(g) {
            const p = M(g);
            return g.skipToPeek(), p
        }

        function C(g) {
            if (g === ri) return !1;
            const p = g.charCodeAt(0);
            return p >= 97 && p <= 122 || p >= 65 && p <= 90 || p === 95
        }

        function H(g) {
            if (g === ri) return !1;
            const p = g.charCodeAt(0);
            return p >= 48 && p <= 57
        }

        function X(g, p) {
            const {
                currentType: w
            } = p;
            if (w !== 2) return !1;
            M(g);
            const D = C(g.currentPeek());
            return g.resetPeek(), D
        }

        function W(g, p) {
            const {
                currentType: w
            } = p;
            if (w !== 2) return !1;
            M(g);
            const D = g.currentPeek() === "-" ? g.peek() : g.currentPeek(),
                B = H(D);
            return g.resetPeek(), B
        }

        function G(g, p) {
            const {
                currentType: w
            } = p;
            if (w !== 2) return !1;
            M(g);
            const D = g.currentPeek() === Ob;
            return g.resetPeek(), D
        }

        function Z(g, p) {
            const {
                currentType: w
            } = p;
            if (w !== 8) return !1;
            M(g);
            const D = g.currentPeek() === ".";
            return g.resetPeek(), D
        }

        function oe(g, p) {
            const {
                currentType: w
            } = p;
            if (w !== 9) return !1;
            M(g);
            const D = C(g.currentPeek());
            return g.resetPeek(), D
        }

        function ce(g, p) {
            const {
                currentType: w
            } = p;
            if (!(w === 8 || w === 12)) return !1;
            M(g);
            const D = g.currentPeek() === ":";
            return g.resetPeek(), D
        }

        function ue(g, p) {
            const {
                currentType: w
            } = p;
            if (w !== 10) return !1;
            const D = () => {
                    const Y = g.currentPeek();
                    return Y === "{" ? C(g.peek()) : Y === "@" || Y === "%" || Y === "|" || Y === ":" || Y === "." || Y === xn || !Y ? !1 : Y === mr ? (g.peek(), D()) : C(Y)
                },
                B = D();
            return g.resetPeek(), B
        }

        function $e(g) {
            M(g);
            const p = g.currentPeek() === "|";
            return g.resetPeek(), p
        }

        function Ce(g) {
            const p = M(g),
                w = g.currentPeek() === "%" && g.peek() === "{";
            return g.resetPeek(), {
                isModulo: w,
                hasSpace: p.length > 0
            }
        }

        function fe(g, p = !0) {
            const w = (B = !1, Y = "", le = !1) => {
                    const se = g.currentPeek();
                    return se === "{" ? Y === "%" ? !1 : B : se === "@" || !se ? Y === "%" ? !0 : B : se === "%" ? (g.peek(), w(B, "%", !0)) : se === "|" ? Y === "%" || le ? !0 : !(Y === xn || Y === mr) : se === xn ? (g.peek(), w(!0, xn, le)) : se === mr ? (g.peek(), w(!0, mr, le)) : !0
                },
                D = w();
            return p && g.resetPeek(), D
        }

        function Ie(g, p) {
            const w = g.currentChar();
            return w === ri ? ri : p(w) ? (g.next(), w) : null
        }

        function U(g) {
            return Ie(g, w => {
                const D = w.charCodeAt(0);
                return D >= 97 && D <= 122 || D >= 65 && D <= 90 || D >= 48 && D <= 57 || D === 95 || D === 36
            })
        }

        function ie(g) {
            return Ie(g, w => {
                const D = w.charCodeAt(0);
                return D >= 48 && D <= 57
            })
        }

        function de(g) {
            return Ie(g, w => {
                const D = w.charCodeAt(0);
                return D >= 48 && D <= 57 || D >= 65 && D <= 70 || D >= 97 && D <= 102
            })
        }

        function be(g) {
            let p = "",
                w = "";
            for (; p = ie(g);) w += p;
            return w
        }

        function ve(g) {
            j(g);
            const p = g.currentChar();
            return p !== "%" && y(it.EXPECTED_TOKEN, o(), 0, p), g.next(), "%"
        }

        function Se(g) {
            let p = "";
            for (;;) {
                const w = g.currentChar();
                if (w === "{" || w === "}" || w === "@" || w === "|" || !w) break;
                if (w === "%")
                    if (fe(g)) p += w, g.next();
                    else break;
                else if (w === xn || w === mr)
                    if (fe(g)) p += w, g.next();
                    else {
                        if ($e(g)) break;
                        p += w, g.next()
                    }
                else p += w, g.next()
            }
            return p
        }

        function Me(g) {
            j(g);
            let p = "",
                w = "";
            for (; p = U(g);) w += p;
            return g.currentChar() === ri && y(it.UNTERMINATED_CLOSING_BRACE, o(), 0), w
        }

        function Ge(g) {
            j(g);
            let p = "";
            return g.currentChar() === "-" ? (g.next(), p += `-${be(g)}`) : p += be(g), g.currentChar() === ri && y(it.UNTERMINATED_CLOSING_BRACE, o(), 0), p
        }

        function nt(g) {
            j(g), k(g, "'");
            let p = "",
                w = "";
            const D = Y => Y !== Ob && Y !== mr;
            for (; p = Ie(g, D);) p === "\\" ? w += Rt(g) : w += p;
            const B = g.currentChar();
            return B === mr || B === ri ? (y(it.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, o(), 0), B === mr && (g.next(), k(g, "'")), w) : (k(g, "'"), w)
        }

        function Rt(g) {
            const p = g.currentChar();
            switch (p) {
                case "\\":
                case "'":
                    return g.next(), `\\${p}`;
                case "u":
                    return Cr(g, p, 4);
                case "U":
                    return Cr(g, p, 6);
                default:
                    return y(it.UNKNOWN_ESCAPE_SEQUENCE, o(), 0, p), ""
            }
        }

        function Cr(g, p, w) {
            k(g, p);
            let D = "";
            for (let B = 0; B < w; B++) {
                const Y = de(g);
                if (!Y) {
                    y(it.INVALID_UNICODE_ESCAPE_SEQUENCE, o(), 0, `\\${p}${D}${g.currentChar()}`);
                    break
                }
                D += Y
            }
            return `\\${p}${D}`
        }

        function ir(g) {
            j(g);
            let p = "",
                w = "";
            const D = B => B !== "{" && B !== "}" && B !== xn && B !== mr;
            for (; p = Ie(g, D);) w += p;
            return w
        }

        function vr(g) {
            let p = "",
                w = "";
            for (; p = U(g);) w += p;
            return w
        }

        function ct(g) {
            const p = (w = !1, D) => {
                const B = g.currentChar();
                return B === "{" || B === "%" || B === "@" || B === "|" || !B || B === xn ? D : B === mr ? (D += B, g.next(), p(w, D)) : (D += B, g.next(), p(!0, D))
            };
            return p(!1, "")
        }

        function wt(g) {
            j(g);
            const p = k(g, "|");
            return j(g), p
        }

        function lt(g, p) {
            let w = null;
            switch (g.currentChar()) {
                case "{":
                    return p.braceNest >= 1 && y(it.NOT_ALLOW_NEST_PLACEHOLDER, o(), 0), g.next(), w = E(p, 2, "{"), j(g), p.braceNest++, w;
                case "}":
                    return p.braceNest > 0 && p.currentType === 2 && y(it.EMPTY_PLACEHOLDER, o(), 0), g.next(), w = E(p, 3, "}"), p.braceNest--, p.braceNest > 0 && j(g), p.inLinked && p.braceNest === 0 && (p.inLinked = !1), w;
                case "@":
                    return p.braceNest > 0 && y(it.UNTERMINATED_CLOSING_BRACE, o(), 0), w = Mt(g, p) || I(p), p.braceNest = 0, w;
                default:
                    let B = !0,
                        Y = !0,
                        le = !0;
                    if ($e(g)) return p.braceNest > 0 && y(it.UNTERMINATED_CLOSING_BRACE, o(), 0), w = E(p, 1, wt(g)), p.braceNest = 0, p.inLinked = !1, w;
                    if (p.braceNest > 0 && (p.currentType === 5 || p.currentType === 6 || p.currentType === 7)) return y(it.UNTERMINATED_CLOSING_BRACE, o(), 0), p.braceNest = 0, qt(g, p);
                    if (B = X(g, p)) return w = E(p, 5, Me(g)), j(g), w;
                    if (Y = W(g, p)) return w = E(p, 6, Ge(g)), j(g), w;
                    if (le = G(g, p)) return w = E(p, 7, nt(g)), j(g), w;
                    if (!B && !Y && !le) return w = E(p, 13, ir(g)), y(it.INVALID_TOKEN_IN_PLACEHOLDER, o(), 0, w.value), j(g), w;
                    break
            }
            return w
        }

        function Mt(g, p) {
            const {
                currentType: w
            } = p;
            let D = null;
            const B = g.currentChar();
            switch ((w === 8 || w === 9 || w === 12 || w === 10) && (B === mr || B === xn) && y(it.INVALID_LINKED_FORMAT, o(), 0), B) {
                case "@":
                    return g.next(), D = E(p, 8, "@"), p.inLinked = !0, D;
                case ".":
                    return j(g), g.next(), E(p, 9, ".");
                case ":":
                    return j(g), g.next(), E(p, 10, ":");
                default:
                    return $e(g) ? (D = E(p, 1, wt(g)), p.braceNest = 0, p.inLinked = !1, D) : Z(g, p) || ce(g, p) ? (j(g), Mt(g, p)) : oe(g, p) ? (j(g), E(p, 12, vr(g))) : ue(g, p) ? (j(g), B === "{" ? lt(g, p) || D : E(p, 11, ct(g))) : (w === 8 && y(it.INVALID_LINKED_FORMAT, o(), 0), p.braceNest = 0, p.inLinked = !1, qt(g, p))
            }
        }

        function qt(g, p) {
            let w = {
                type: 14
            };
            if (p.braceNest > 0) return lt(g, p) || I(p);
            if (p.inLinked) return Mt(g, p) || I(p);
            switch (g.currentChar()) {
                case "{":
                    return lt(g, p) || I(p);
                case "}":
                    return y(it.UNBALANCED_CLOSING_BRACE, o(), 0), g.next(), E(p, 3, "}");
                case "@":
                    return Mt(g, p) || I(p);
                default:
                    if ($e(g)) return w = E(p, 1, wt(g)), p.braceNest = 0, p.inLinked = !1, w;
                    const {
                        isModulo: B, hasSpace: Y
                    } = Ce(g);
                    if (B) return Y ? E(p, 0, Se(g)) : E(p, 4, ve(g));
                    if (fe(g)) return E(p, 0, Se(g));
                    break
            }
            return w
        }

        function Ut() {
            const {
                currentType: g,
                offset: p,
                startLoc: w,
                endLoc: D
            } = f;
            return f.lastType = g, f.lastOffset = p, f.lastStartLoc = w, f.lastEndLoc = D, f.offset = s(), f.startLoc = o(), n.currentChar() === ri ? E(f, 14) : qt(n, f)
        }
        return {
            nextToken: Ut,
            currentOffset: s,
            currentPosition: o,
            context: h
        }
    }
    const fee = "parser",
        dee = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;

    function hee(e, t, r) {
        switch (e) {
            case "\\\\":
                return "\\";
            case "\\'":
                return "'";
            default: {
                const n = parseInt(t || r, 16);
                return n <= 55295 || n >= 57344 ? String.fromCodePoint(n) : "\uFFFD"
            }
        }
    }

    function pee(e = {}) {
        const t = e.location !== !1,
            {
                onError: r
            } = e;

        function n(C, H, X, W, ...G) {
            const Z = C.currentPosition();
            if (Z.offset += W, Z.column += W, r) {
                const oe = ah(X, Z),
                    ce = Ql(H, oe, {
                        domain: fee,
                        args: G
                    });
                r(ce)
            }
        }

        function s(C, H, X) {
            const W = {
                type: C,
                start: H,
                end: H
            };
            return t && (W.loc = {
                start: X,
                end: X
            }), W
        }

        function o(C, H, X, W) {
            C.end = H, W && (C.type = W), t && C.loc && (C.loc.end = X)
        }

        function c(C, H) {
            const X = C.context(),
                W = s(3, X.offset, X.startLoc);
            return W.value = H, o(W, C.currentOffset(), C.currentPosition()), W
        }

        function u(C, H) {
            const X = C.context(),
                {
                    lastOffset: W,
                    lastStartLoc: G
                } = X,
                Z = s(5, W, G);
            return Z.index = parseInt(H, 10), C.nextToken(), o(Z, C.currentOffset(), C.currentPosition()), Z
        }

        function f(C, H) {
            const X = C.context(),
                {
                    lastOffset: W,
                    lastStartLoc: G
                } = X,
                Z = s(4, W, G);
            return Z.key = H, C.nextToken(), o(Z, C.currentOffset(), C.currentPosition()), Z
        }

        function h(C, H) {
            const X = C.context(),
                {
                    lastOffset: W,
                    lastStartLoc: G
                } = X,
                Z = s(9, W, G);
            return Z.value = H.replace(dee, hee), C.nextToken(), o(Z, C.currentOffset(), C.currentPosition()), Z
        }

        function m(C) {
            const H = C.nextToken(),
                X = C.context(),
                {
                    lastOffset: W,
                    lastStartLoc: G
                } = X,
                Z = s(8, W, G);
            return H.type !== 12 ? (n(C, it.UNEXPECTED_EMPTY_LINKED_MODIFIER, X.lastStartLoc, 0), Z.value = "", o(Z, W, G), {
                nextConsumeToken: H,
                node: Z
            }) : (H.value == null && n(C, it.UNEXPECTED_LEXICAL_ANALYSIS, X.lastStartLoc, 0, bn(H)), Z.value = H.value || "", o(Z, C.currentOffset(), C.currentPosition()), {
                node: Z
            })
        }

        function y(C, H) {
            const X = C.context(),
                W = s(7, X.offset, X.startLoc);
            return W.value = H, o(W, C.currentOffset(), C.currentPosition()), W
        }

        function E(C) {
            const H = C.context(),
                X = s(6, H.offset, H.startLoc);
            let W = C.nextToken();
            if (W.type === 9) {
                const G = m(C);
                X.modifier = G.node, W = G.nextConsumeToken || C.nextToken()
            }
            switch (W.type !== 10 && n(C, it.UNEXPECTED_LEXICAL_ANALYSIS, H.lastStartLoc, 0, bn(W)), W = C.nextToken(), W.type === 2 && (W = C.nextToken()), W.type) {
                case 11:
                    W.value == null && n(C, it.UNEXPECTED_LEXICAL_ANALYSIS, H.lastStartLoc, 0, bn(W)), X.key = y(C, W.value || "");
                    break;
                case 5:
                    W.value == null && n(C, it.UNEXPECTED_LEXICAL_ANALYSIS, H.lastStartLoc, 0, bn(W)), X.key = f(C, W.value || "");
                    break;
                case 6:
                    W.value == null && n(C, it.UNEXPECTED_LEXICAL_ANALYSIS, H.lastStartLoc, 0, bn(W)), X.key = u(C, W.value || "");
                    break;
                case 7:
                    W.value == null && n(C, it.UNEXPECTED_LEXICAL_ANALYSIS, H.lastStartLoc, 0, bn(W)), X.key = h(C, W.value || "");
                    break;
                default:
                    n(C, it.UNEXPECTED_EMPTY_LINKED_KEY, H.lastStartLoc, 0);
                    const G = C.context(),
                        Z = s(7, G.offset, G.startLoc);
                    return Z.value = "", o(Z, G.offset, G.startLoc), X.key = Z, o(X, G.offset, G.startLoc), {
                        nextConsumeToken: W,
                        node: X
                    }
            }
            return o(X, C.currentOffset(), C.currentPosition()), {
                node: X
            }
        }

        function I(C) {
            const H = C.context(),
                X = H.currentType === 1 ? C.currentOffset() : H.offset,
                W = H.currentType === 1 ? H.endLoc : H.startLoc,
                G = s(2, X, W);
            G.items = [];
            let Z = null;
            do {
                const ue = Z || C.nextToken();
                switch (Z = null, ue.type) {
                    case 0:
                        ue.value == null && n(C, it.UNEXPECTED_LEXICAL_ANALYSIS, H.lastStartLoc, 0, bn(ue)), G.items.push(c(C, ue.value || ""));
                        break;
                    case 6:
                        ue.value == null && n(C, it.UNEXPECTED_LEXICAL_ANALYSIS, H.lastStartLoc, 0, bn(ue)), G.items.push(u(C, ue.value || ""));
                        break;
                    case 5:
                        ue.value == null && n(C, it.UNEXPECTED_LEXICAL_ANALYSIS, H.lastStartLoc, 0, bn(ue)), G.items.push(f(C, ue.value || ""));
                        break;
                    case 7:
                        ue.value == null && n(C, it.UNEXPECTED_LEXICAL_ANALYSIS, H.lastStartLoc, 0, bn(ue)), G.items.push(h(C, ue.value || ""));
                        break;
                    case 8:
                        const $e = E(C);
                        G.items.push($e.node), Z = $e.nextConsumeToken || null;
                        break
                }
            } while (H.currentType !== 14 && H.currentType !== 1);
            const oe = H.currentType === 1 ? H.lastOffset : C.currentOffset(),
                ce = H.currentType === 1 ? H.lastEndLoc : C.currentPosition();
            return o(G, oe, ce), G
        }

        function k(C, H, X, W) {
            const G = C.context();
            let Z = W.items.length === 0;
            const oe = s(1, H, X);
            oe.cases = [], oe.cases.push(W);
            do {
                const ce = I(C);
                Z || (Z = ce.items.length === 0), oe.cases.push(ce)
            } while (G.currentType !== 14);
            return Z && n(C, it.MUST_HAVE_MESSAGES_IN_PLURAL, X, 0), o(oe, C.currentOffset(), C.currentPosition()), oe
        }

        function M(C) {
            const H = C.context(),
                {
                    offset: X,
                    startLoc: W
                } = H,
                G = I(C);
            return H.currentType === 14 ? G : k(C, X, W, G)
        }

        function j(C) {
            const H = uee(C, rr({}, e)),
                X = H.context(),
                W = s(0, X.offset, X.startLoc);
            return t && W.loc && (W.loc.source = C), W.body = M(H), X.currentType !== 14 && n(H, it.UNEXPECTED_LEXICAL_ANALYSIS, X.lastStartLoc, 0, C[X.offset] || ""), o(W, H.currentOffset(), H.currentPosition()), W
        }
        return {
            parse: j
        }
    }

    function bn(e) {
        if (e.type === 14) return "EOF";
        const t = (e.value || "").replace(/\r?\n/gu, "\\n");
        return t.length > 10 ? t.slice(0, 9) + "\u2026" : t
    }

    function gee(e, t = {}) {
        const r = {
            ast: e,
            helpers: new Set
        };
        return {
            context: () => r,
            helper: o => (r.helpers.add(o), o)
        }
    }

    function Ib(e, t) {
        for (let r = 0; r < e.length; r++) Mp(e[r], t)
    }

    function Mp(e, t) {
        switch (e.type) {
            case 1:
                Ib(e.cases, t), t.helper("plural");
                break;
            case 2:
                Ib(e.items, t);
                break;
            case 6:
                Mp(e.key, t), t.helper("linked"), t.helper("type");
                break;
            case 5:
                t.helper("interpolate"), t.helper("list");
                break;
            case 4:
                t.helper("interpolate"), t.helper("named");
                break
        }
    }

    function mee(e, t = {}) {
        const r = gee(e);
        r.helper("normalize"), e.body && Mp(e.body, r);
        const n = r.context();
        e.helpers = Array.from(n.helpers)
    }

    function vee(e, t) {
        const {
            sourceMap: r,
            filename: n,
            breakLineCode: s,
            needIndent: o
        } = t, c = {
            source: e.loc.source,
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

        function f(M, j) {
            c.code += M
        }

        function h(M, j = !0) {
            const C = j ? s : "";
            f(o ? C + "  ".repeat(M) : C)
        }

        function m(M = !0) {
            const j = ++c.indentLevel;
            M && h(j)
        }

        function y(M = !0) {
            const j = --c.indentLevel;
            M && h(j)
        }

        function E() {
            h(c.indentLevel)
        }
        return {
            context: u,
            push: f,
            indent: m,
            deindent: y,
            newline: E,
            helper: M => `_${M}`,
            needIndent: () => c.needIndent
        }
    }

    function yee(e, t) {
        const {
            helper: r
        } = e;
        e.push(`${r("linked")}(`), Qs(e, t.key), t.modifier ? (e.push(", "), Qs(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")")
    }

    function _ee(e, t) {
        const {
            helper: r,
            needIndent: n
        } = e;
        e.push(`${r("normalize")}([`), e.indent(n());
        const s = t.items.length;
        for (let o = 0; o < s && (Qs(e, t.items[o]), o !== s - 1); o++) e.push(", ");
        e.deindent(n()), e.push("])")
    }

    function bee(e, t) {
        const {
            helper: r,
            needIndent: n
        } = e;
        if (t.cases.length > 1) {
            e.push(`${r("plural")}([`), e.indent(n());
            const s = t.cases.length;
            for (let o = 0; o < s && (Qs(e, t.cases[o]), o !== s - 1); o++) e.push(", ");
            e.deindent(n()), e.push("])")
        }
    }

    function Eee(e, t) {
        t.body ? Qs(e, t.body) : e.push("null")
    }

    function Qs(e, t) {
        const {
            helper: r
        } = e;
        switch (t.type) {
            case 0:
                Eee(e, t);
                break;
            case 1:
                bee(e, t);
                break;
            case 2:
                _ee(e, t);
                break;
            case 6:
                yee(e, t);
                break;
            case 8:
                e.push(JSON.stringify(t.value), t);
                break;
            case 7:
                e.push(JSON.stringify(t.value), t);
                break;
            case 5:
                e.push(`${r("interpolate")}(${r("list")}(${t.index}))`, t);
                break;
            case 4:
                e.push(`${r("interpolate")}(${r("named")}(${JSON.stringify(t.key)}))`, t);
                break;
            case 9:
                e.push(JSON.stringify(t.value), t);
                break;
            case 3:
                e.push(JSON.stringify(t.value), t);
                break
        }
    }
    const Tee = (e, t = {}) => {
        const r = ye(t.mode) ? t.mode : "normal",
            n = ye(t.filename) ? t.filename : "message.intl",
            s = !!t.sourceMap,
            o = t.breakLineCode != null ? t.breakLineCode : r === "arrow" ? ";" : `
`,
            c = t.needIndent ? t.needIndent : r !== "arrow",
            u = e.helpers || [],
            f = vee(e, {
                mode: r,
                filename: n,
                sourceMap: s,
                breakLineCode: o,
                needIndent: c
            });
        f.push(r === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), f.indent(c), u.length > 0 && (f.push(`const { ${u.map(y=>`${y}: _${y}`).join(", ")} } = ctx`), f.newline()), f.push("return "), Qs(f, e), f.deindent(c), f.push("}");
        const {
            code: h,
            map: m
        } = f.context();
        return {
            ast: e,
            code: h,
            map: m ? m.toJSON() : void 0
        }
    };

    function See(e, t = {}) {
        const r = rr({}, t),
            s = pee(r).parse(e);
        return mee(s, r), Tee(s, r)
    }
    /*!
     * devtools-if v9.2.2
     * (c) 2022 kazuya kawaguchi
     * Released under the MIT License.
     */
    const wee = {
        I18nInit: "i18n:init",
        FunctionTranslate: "function:translate"
    };
    /*!
     * core-base v9.2.2
     * (c) 2022 kazuya kawaguchi
     * Released under the MIT License.
     */
    const Ii = [];
    Ii[0] = {
        w: [0],
        i: [3, 0],
        ["["]: [4],
        o: [7]
    };
    Ii[1] = {
        w: [1],
        ["."]: [2],
        ["["]: [4],
        o: [7]
    };
    Ii[2] = {
        w: [2],
        i: [3, 0],
        [0]: [3, 0]
    };
    Ii[3] = {
        i: [3, 0],
        [0]: [3, 0],
        w: [1, 1],
        ["."]: [2, 1],
        ["["]: [4, 1],
        o: [7, 1]
    };
    Ii[4] = {
        ["'"]: [5, 0],
        ['"']: [6, 0],
        ["["]: [4, 2],
        ["]"]: [1, 3],
        o: 8,
        l: [4, 0]
    };
    Ii[5] = {
        ["'"]: [4, 0],
        o: 8,
        l: [5, 0]
    };
    Ii[6] = {
        ['"']: [4, 0],
        o: 8,
        l: [6, 0]
    };
    const Oee = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;

    function Iee(e) {
        return Oee.test(e)
    }

    function Cee(e) {
        const t = e.charCodeAt(0),
            r = e.charCodeAt(e.length - 1);
        return t === r && (t === 34 || t === 39) ? e.slice(1, -1) : e
    }

    function $ee(e) {
        if (e == null) return "o";
        switch (e.charCodeAt(0)) {
            case 91:
            case 93:
            case 46:
            case 34:
            case 39:
                return e;
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

    function Aee(e) {
        const t = e.trim();
        return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : Iee(t) ? Cee(t) : "*" + t
    }

    function Ree(e) {
        const t = [];
        let r = -1,
            n = 0,
            s = 0,
            o, c, u, f, h, m, y;
        const E = [];
        E[0] = () => {
            c === void 0 ? c = u : c += u
        }, E[1] = () => {
            c !== void 0 && (t.push(c), c = void 0)
        }, E[2] = () => {
            E[0](), s++
        }, E[3] = () => {
            if (s > 0) s--, n = 4, E[0]();
            else {
                if (s = 0, c === void 0 || (c = Aee(c), c === !1)) return !1;
                E[1]()
            }
        };

        function I() {
            const k = e[r + 1];
            if (n === 5 && k === "'" || n === 6 && k === '"') return r++, u = "\\" + k, E[0](), !0
        }
        for (; n !== null;)
            if (r++, o = e[r], !(o === "\\" && I())) {
                if (f = $ee(o), y = Ii[n], h = y[f] || y.l || 8, h === 8 || (n = h[0], h[1] !== void 0 && (m = E[h[1]], m && (u = o, m() === !1)))) return;
                if (n === 7) return t
            }
    }
    const Cb = new Map;

    function Nee(e, t) {
        return Et(e) ? e[t] : null
    }

    function Lee(e, t) {
        if (!Et(e)) return null;
        let r = Cb.get(t);
        if (r || (r = Ree(t), r && Cb.set(t, r)), !r) return null;
        const n = r.length;
        let s = e,
            o = 0;
        for (; o < n;) {
            const c = s[r[o]];
            if (c === void 0) return null;
            s = c, o++
        }
        return s
    }
    const kee = e => e,
        Pee = e => "",
        xee = "text",
        Dee = e => e.length === 0 ? "" : e.join(""),
        Mee = ree;

    function $b(e, t) {
        return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0
    }

    function Uee(e) {
        const t = Gt(e.pluralIndex) ? e.pluralIndex : -1;
        return e.named && (Gt(e.named.count) || Gt(e.named.n)) ? Gt(e.named.count) ? e.named.count : Gt(e.named.n) ? e.named.n : t : t
    }

    function Fee(e, t) {
        t.count || (t.count = e), t.n || (t.n = e)
    }

    function Bee(e = {}) {
        const t = e.locale,
            r = Uee(e),
            n = Et(e.pluralRules) && ye(t) && xt(e.pluralRules[t]) ? e.pluralRules[t] : $b,
            s = Et(e.pluralRules) && ye(t) && xt(e.pluralRules[t]) ? $b : void 0,
            o = C => C[n(r, C.length, s)],
            c = e.list || [],
            u = C => c[C],
            f = e.named || {};
        Gt(e.pluralIndex) && Fee(r, f);
        const h = C => f[C];

        function m(C) {
            const H = xt(e.messages) ? e.messages(C) : Et(e.messages) ? e.messages[C] : !1;
            return H || (e.parent ? e.parent.message(C) : Pee)
        }
        const y = C => e.modifiers ? e.modifiers[C] : kee,
            E = Be(e.processor) && xt(e.processor.normalize) ? e.processor.normalize : Dee,
            I = Be(e.processor) && xt(e.processor.interpolate) ? e.processor.interpolate : Mee,
            k = Be(e.processor) && ye(e.processor.type) ? e.processor.type : xee,
            j = {
                list: u,
                named: h,
                plural: o,
                linked: (C, ...H) => {
                    const [X, W] = H;
                    let G = "text",
                        Z = "";
                    H.length === 1 ? Et(X) ? (Z = X.modifier || Z, G = X.type || G) : ye(X) && (Z = X || Z) : H.length === 2 && (ye(X) && (Z = X || Z), ye(W) && (G = W || G));
                    let oe = m(C)(j);
                    return G === "vnode" && bt(oe) && Z && (oe = oe[0]), Z ? y(Z)(oe, G) : oe
                },
                message: m,
                type: k,
                interpolate: I,
                normalize: E
            };
        return j
    }
    let jee = null;
    wee.FunctionTranslate;

    function Gee(e) {
        return t => jee
    }
    const Wee = {
        NOT_FOUND_KEY: 1,
        FALLBACK_TO_TRANSLATE: 2,
        CANNOT_FORMAT_NUMBER: 3,
        FALLBACK_TO_NUMBER_FORMAT: 4,
        CANNOT_FORMAT_DATE: 5,
        FALLBACK_TO_DATE_FORMAT: 6,
        __EXTEND_POINT__: 7
    };

    function Kee(e, t, r) {
        return [...new Set([r, ...bt(t) ? t : Et(t) ? Object.keys(t) : ye(t) ? [t] : [r]])]
    }

    function vS(e, t, r) {
        const n = ye(r) ? r : Eo,
            s = e;
        s.__localeChainCache || (s.__localeChainCache = new Map);
        let o = s.__localeChainCache.get(n);
        if (!o) {
            o = [];
            let c = [r];
            for (; bt(c);) c = Ab(o, c, t);
            const u = bt(t) || !Be(t) ? t : t.default ? t.default : null;
            c = ye(u) ? [u] : u, bt(c) && Ab(o, c, !1), s.__localeChainCache.set(n, o)
        }
        return o
    }

    function Ab(e, t, r) {
        let n = !0;
        for (let s = 0; s < t.length && et(n); s++) {
            const o = t[s];
            ye(o) && (n = Hee(e, t[s], r))
        }
        return n
    }

    function Hee(e, t, r) {
        let n;
        const s = t.split("-");
        do {
            const o = s.join("-");
            n = Vee(e, o, r), s.splice(-1, 1)
        } while (s.length && n === !0);
        return n
    }

    function Vee(e, t, r) {
        let n = !1;
        if (!e.includes(t) && (n = !0, t)) {
            n = t[t.length - 1] !== "!";
            const s = t.replace(/!/g, "");
            e.push(s), (bt(r) || Be(r)) && r[s] && (n = r[s])
        }
        return n
    }
    const qee = "9.2.2",
        eu = -1,
        Eo = "en-US",
        Rb = "",
        Nb = e => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;

    function Yee() {
        return {
            upper: (e, t) => t === "text" && ye(e) ? e.toUpperCase() : t === "vnode" && Et(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
            lower: (e, t) => t === "text" && ye(e) ? e.toLowerCase() : t === "vnode" && Et(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
            capitalize: (e, t) => t === "text" && ye(e) ? Nb(e) : t === "vnode" && Et(e) && "__v_isVNode" in e ? Nb(e.children) : e
        }
    }
    let yS;

    function zee(e) {
        yS = e
    }
    let _S;

    function Xee(e) {
        _S = e
    }
    let bS;

    function Jee(e) {
        bS = e
    }
    let Lb = 0;

    function Zee(e = {}) {
        const t = ye(e.version) ? e.version : qee,
            r = ye(e.locale) ? e.locale : Eo,
            n = bt(e.fallbackLocale) || Be(e.fallbackLocale) || ye(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : r,
            s = Be(e.messages) ? e.messages : {
                [r]: {}
            },
            o = Be(e.datetimeFormats) ? e.datetimeFormats : {
                [r]: {}
            },
            c = Be(e.numberFormats) ? e.numberFormats : {
                [r]: {}
            },
            u = rr({}, e.modifiers || {}, Yee()),
            f = e.pluralRules || {},
            h = xt(e.missing) ? e.missing : null,
            m = et(e.missingWarn) || vi(e.missingWarn) ? e.missingWarn : !0,
            y = et(e.fallbackWarn) || vi(e.fallbackWarn) ? e.fallbackWarn : !0,
            E = !!e.fallbackFormat,
            I = !!e.unresolving,
            k = xt(e.postTranslation) ? e.postTranslation : null,
            M = Be(e.processor) ? e.processor : null,
            j = et(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
            C = !!e.escapeParameter,
            H = xt(e.messageCompiler) ? e.messageCompiler : yS,
            X = xt(e.messageResolver) ? e.messageResolver : _S || Nee,
            W = xt(e.localeFallbacker) ? e.localeFallbacker : bS || Kee,
            G = Et(e.fallbackContext) ? e.fallbackContext : void 0,
            Z = xt(e.onWarn) ? e.onWarn : eee,
            oe = e,
            ce = Et(oe.__datetimeFormatters) ? oe.__datetimeFormatters : new Map,
            ue = Et(oe.__numberFormatters) ? oe.__numberFormatters : new Map,
            $e = Et(oe.__meta) ? oe.__meta : {};
        Lb++;
        const Ce = {
            version: t,
            cid: Lb,
            locale: r,
            fallbackLocale: n,
            messages: s,
            modifiers: u,
            pluralRules: f,
            missing: h,
            missingWarn: m,
            fallbackWarn: y,
            fallbackFormat: E,
            unresolving: I,
            postTranslation: k,
            processor: M,
            warnHtmlMessage: j,
            escapeParameter: C,
            messageCompiler: H,
            messageResolver: X,
            localeFallbacker: W,
            fallbackContext: G,
            onWarn: Z,
            __meta: $e
        };
        return Ce.datetimeFormats = o, Ce.numberFormats = c, Ce.__datetimeFormatters = ce, Ce.__numberFormatters = ue, Ce
    }

    function Up(e, t, r, n, s) {
        const {
            missing: o,
            onWarn: c
        } = e;
        if (o !== null) {
            const u = o(e, r, t, s);
            return ye(u) ? u : t
        } else return t
    }

    function Na(e, t, r) {
        const n = e;
        n.__localeChainCache = new Map, e.localeFallbacker(e, r, t)
    }
    const Qee = e => e;
    let kb = Object.create(null);

    function ete(e, t = {}) {
        {
            const n = (t.onCacheKey || Qee)(e),
                s = kb[n];
            if (s) return s;
            let o = !1;
            const c = t.onError || nee;
            t.onError = h => {
                o = !0, c(h)
            };
            const {
                code: u
            } = See(e, t), f = new Function(`return ${u}`)();
            return o ? f : kb[n] = f
        }
    }
    let ES = it.__EXTEND_POINT__;
    const ad = () => ++ES,
        Ps = {
            INVALID_ARGUMENT: ES,
            INVALID_DATE_ARGUMENT: ad(),
            INVALID_ISO_DATE_ARGUMENT: ad(),
            __EXTEND_POINT__: ad()
        };

    function xs(e) {
        return Ql(e, null, void 0)
    }
    const Pb = () => "",
        ss = e => xt(e);

    function xb(e, ...t) {
        const {
            fallbackFormat: r,
            postTranslation: n,
            unresolving: s,
            messageCompiler: o,
            fallbackLocale: c,
            messages: u
        } = e, [f, h] = oh(...t), m = et(h.missingWarn) ? h.missingWarn : e.missingWarn, y = et(h.fallbackWarn) ? h.fallbackWarn : e.fallbackWarn, E = et(h.escapeParameter) ? h.escapeParameter : e.escapeParameter, I = !!h.resolvedMessage, k = ye(h.default) || et(h.default) ? et(h.default) ? o ? f : () => f : h.default : r ? o ? f : () => f : "", M = r || k !== "", j = ye(h.locale) ? h.locale : e.locale;
        E && tte(h);
        let [C, H, X] = I ? [f, j, u[j] || {}] : TS(e, f, j, c, y, m), W = C, G = f;
        if (!I && !(ye(W) || ss(W)) && M && (W = k, G = W), !I && (!(ye(W) || ss(W)) || !ye(H))) return s ? eu : f;
        let Z = !1;
        const oe = () => {
                Z = !0
            },
            ce = ss(W) ? W : SS(e, f, H, W, G, oe);
        if (Z) return W;
        const ue = ite(e, H, X, h),
            $e = Bee(ue),
            Ce = rte(e, ce, $e);
        return n ? n(Ce, f) : Ce
    }

    function tte(e) {
        bt(e.list) ? e.list = e.list.map(t => ye(t) ? wb(t) : t) : Et(e.named) && Object.keys(e.named).forEach(t => {
            ye(e.named[t]) && (e.named[t] = wb(e.named[t]))
        })
    }

    function TS(e, t, r, n, s, o) {
        const {
            messages: c,
            onWarn: u,
            messageResolver: f,
            localeFallbacker: h
        } = e, m = h(e, n, r);
        let y = {},
            E, I = null;
        const k = "translate";
        for (let M = 0; M < m.length && (E = m[M], y = c[E] || {}, (I = f(y, t)) === null && (I = y[t]), !(ye(I) || xt(I))); M++) {
            const j = Up(e, t, E, o, k);
            j !== t && (I = j)
        }
        return [I, E, y]
    }

    function SS(e, t, r, n, s, o) {
        const {
            messageCompiler: c,
            warnHtmlMessage: u
        } = e;
        if (ss(n)) {
            const h = n;
            return h.locale = h.locale || r, h.key = h.key || t, h
        }
        if (c == null) {
            const h = () => n;
            return h.locale = r, h.key = t, h
        }
        const f = c(n, nte(e, r, s, n, u, o));
        return f.locale = r, f.key = t, f.source = n, f
    }

    function rte(e, t, r) {
        return t(r)
    }

    function oh(...e) {
        const [t, r, n] = e, s = {};
        if (!ye(t) && !Gt(t) && !ss(t)) throw xs(Ps.INVALID_ARGUMENT);
        const o = Gt(t) ? String(t) : (ss(t), t);
        return Gt(r) ? s.plural = r : ye(r) ? s.default = r : Be(r) && !Zl(r) ? s.named = r : bt(r) && (s.list = r), Gt(n) ? s.plural = n : ye(n) ? s.default = n : Be(n) && rr(s, n), [o, s]
    }

    function nte(e, t, r, n, s, o) {
        return {
            warnHtmlMessage: s,
            onError: c => {
                throw o && o(c), c
            },
            onCacheKey: c => JQ(t, r, c)
        }
    }

    function ite(e, t, r, n) {
        const {
            modifiers: s,
            pluralRules: o,
            messageResolver: c,
            fallbackLocale: u,
            fallbackWarn: f,
            missingWarn: h,
            fallbackContext: m
        } = e, E = {
            locale: t,
            modifiers: s,
            pluralRules: o,
            messages: I => {
                let k = c(r, I);
                if (k == null && m) {
                    const [, , M] = TS(m, I, t, u, f, h);
                    k = c(M, I)
                }
                if (ye(k)) {
                    let M = !1;
                    const C = SS(e, I, t, k, I, () => {
                        M = !0
                    });
                    return M ? Pb : C
                } else return ss(k) ? k : Pb
            }
        };
        return e.processor && (E.processor = e.processor), n.list && (E.list = n.list), n.named && (E.named = n.named), Gt(n.plural) && (E.pluralIndex = n.plural), E
    }

    function Db(e, ...t) {
        const {
            datetimeFormats: r,
            unresolving: n,
            fallbackLocale: s,
            onWarn: o,
            localeFallbacker: c
        } = e, {
            __datetimeFormatters: u
        } = e, [f, h, m, y] = ch(...t), E = et(m.missingWarn) ? m.missingWarn : e.missingWarn;
        et(m.fallbackWarn) ? m.fallbackWarn : e.fallbackWarn;
        const I = !!m.part,
            k = ye(m.locale) ? m.locale : e.locale,
            M = c(e, s, k);
        if (!ye(f) || f === "") return new Intl.DateTimeFormat(k, y).format(h);
        let j = {},
            C, H = null;
        const X = "datetime format";
        for (let Z = 0; Z < M.length && (C = M[Z], j = r[C] || {}, H = j[f], !Be(H)); Z++) Up(e, f, C, E, X);
        if (!Be(H) || !ye(C)) return n ? eu : f;
        let W = `${C}__${f}`;
        Zl(y) || (W = `${W}__${JSON.stringify(y)}`);
        let G = u.get(W);
        return G || (G = new Intl.DateTimeFormat(C, rr({}, H, y)), u.set(W, G)), I ? G.formatToParts(h) : G.format(h)
    }
    const wS = ["localeMatcher", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "formatMatcher", "hour12", "timeZone", "dateStyle", "timeStyle", "calendar", "dayPeriod", "numberingSystem", "hourCycle", "fractionalSecondDigits"];

    function ch(...e) {
        const [t, r, n, s] = e, o = {};
        let c = {},
            u;
        if (ye(t)) {
            const f = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
            if (!f) throw xs(Ps.INVALID_ISO_DATE_ARGUMENT);
            const h = f[3] ? f[3].trim().startsWith("T") ? `${f[1].trim()}${f[3].trim()}` : `${f[1].trim()}T${f[3].trim()}` : f[1].trim();
            u = new Date(h);
            try {
                u.toISOString()
            } catch {
                throw xs(Ps.INVALID_ISO_DATE_ARGUMENT)
            }
        } else if (QQ(t)) {
            if (isNaN(t.getTime())) throw xs(Ps.INVALID_DATE_ARGUMENT);
            u = t
        } else if (Gt(t)) u = t;
        else throw xs(Ps.INVALID_ARGUMENT);
        return ye(r) ? o.key = r : Be(r) && Object.keys(r).forEach(f => {
            wS.includes(f) ? c[f] = r[f] : o[f] = r[f]
        }), ye(n) ? o.locale = n : Be(n) && (c = n), Be(s) && (c = s), [o.key || "", u, o, c]
    }

    function Mb(e, t, r) {
        const n = e;
        for (const s in r) {
            const o = `${t}__${s}`;
            !n.__datetimeFormatters.has(o) || n.__datetimeFormatters.delete(o)
        }
    }

    function Ub(e, ...t) {
        const {
            numberFormats: r,
            unresolving: n,
            fallbackLocale: s,
            onWarn: o,
            localeFallbacker: c
        } = e, {
            __numberFormatters: u
        } = e, [f, h, m, y] = lh(...t), E = et(m.missingWarn) ? m.missingWarn : e.missingWarn;
        et(m.fallbackWarn) ? m.fallbackWarn : e.fallbackWarn;
        const I = !!m.part,
            k = ye(m.locale) ? m.locale : e.locale,
            M = c(e, s, k);
        if (!ye(f) || f === "") return new Intl.NumberFormat(k, y).format(h);
        let j = {},
            C, H = null;
        const X = "number format";
        for (let Z = 0; Z < M.length && (C = M[Z], j = r[C] || {}, H = j[f], !Be(H)); Z++) Up(e, f, C, E, X);
        if (!Be(H) || !ye(C)) return n ? eu : f;
        let W = `${C}__${f}`;
        Zl(y) || (W = `${W}__${JSON.stringify(y)}`);
        let G = u.get(W);
        return G || (G = new Intl.NumberFormat(C, rr({}, H, y)), u.set(W, G)), I ? G.formatToParts(h) : G.format(h)
    }
    const OS = ["localeMatcher", "style", "currency", "currencyDisplay", "currencySign", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "notation", "signDisplay", "unit", "unitDisplay", "roundingMode", "roundingPriority", "roundingIncrement", "trailingZeroDisplay"];

    function lh(...e) {
        const [t, r, n, s] = e, o = {};
        let c = {};
        if (!Gt(t)) throw xs(Ps.INVALID_ARGUMENT);
        const u = t;
        return ye(r) ? o.key = r : Be(r) && Object.keys(r).forEach(f => {
            OS.includes(f) ? c[f] = r[f] : o[f] = r[f]
        }), ye(n) ? o.locale = n : Be(n) && (c = n), Be(s) && (c = s), [o.key || "", u, o, c]
    }

    function Fb(e, t, r) {
        const n = e;
        for (const s in r) {
            const o = `${t}__${s}`;
            !n.__numberFormatters.has(o) || n.__numberFormatters.delete(o)
        }
    }
    /*!
     * vue-i18n v9.2.2
     * (c) 2022 kazuya kawaguchi
     * Released under the MIT License.
     */
    const ste = "9.2.2";
    Wee.__EXTEND_POINT__;
    let IS = it.__EXTEND_POINT__;
    const Tr = () => ++IS,
        Ft = {
            UNEXPECTED_RETURN_TYPE: IS,
            INVALID_ARGUMENT: Tr(),
            MUST_BE_CALL_SETUP_TOP: Tr(),
            NOT_INSLALLED: Tr(),
            NOT_AVAILABLE_IN_LEGACY_MODE: Tr(),
            REQUIRED_VALUE: Tr(),
            INVALID_VALUE: Tr(),
            CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: Tr(),
            NOT_INSLALLED_WITH_PROVIDE: Tr(),
            UNEXPECTED_ERROR: Tr(),
            NOT_COMPATIBLE_LEGACY_VUE_I18N: Tr(),
            BRIDGE_SUPPORT_VUE_2_ONLY: Tr(),
            MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: Tr(),
            NOT_AVAILABLE_COMPOSITION_IN_LEGACY: Tr(),
            __EXTEND_POINT__: Tr()
        };

    function Ht(e, ...t) {
        return Ql(e, null, void 0)
    }
    const uh = Oi("__transrateVNode"),
        fh = Oi("__datetimeParts"),
        dh = Oi("__numberParts"),
        CS = Oi("__setPluralRules");
    Oi("__intlifyMeta");
    const $S = Oi("__injectWithOption");

    function hh(e) {
        if (!Et(e)) return e;
        for (const t in e)
            if (!!xp(e, t))
                if (!t.includes(".")) Et(e[t]) && hh(e[t]);
                else {
                    const r = t.split("."),
                        n = r.length - 1;
                    let s = e;
                    for (let o = 0; o < n; o++) r[o] in s || (s[r[o]] = {}), s = s[r[o]];
                    s[r[n]] = e[t], delete e[t], Et(s[r[n]]) && hh(s[r[n]])
                } return e
    }

    function tu(e, t) {
        const {
            messages: r,
            __i18n: n,
            messageResolver: s,
            flatJson: o
        } = t, c = Be(r) ? r : bt(n) ? {} : {
            [e]: {}
        };
        if (bt(n) && n.forEach(u => {
                if ("locale" in u && "resource" in u) {
                    const {
                        locale: f,
                        resource: h
                    } = u;
                    f ? (c[f] = c[f] || {}, qa(h, c[f])) : qa(h, c)
                } else ye(u) && qa(JSON.parse(u), c)
            }), s == null && o)
            for (const u in c) xp(c, u) && hh(c[u]);
        return c
    }
    const $c = e => !Et(e) || bt(e);

    function qa(e, t) {
        if ($c(e) || $c(t)) throw Ht(Ft.INVALID_VALUE);
        for (const r in e) xp(e, r) && ($c(e[r]) || $c(t[r]) ? t[r] = e[r] : qa(e[r], t[r]))
    }

    function ate(e) {
        return e.type
    }

    function AS(e, t, r) {
        let n = Et(t.messages) ? t.messages : {};
        "__i18nGlobal" in r && (n = tu(e.locale.value, {
            messages: n,
            __i18n: r.__i18nGlobal
        }));
        const s = Object.keys(n);
        s.length && s.forEach(o => {
            e.mergeLocaleMessage(o, n[o])
        }); {
            if (Et(t.datetimeFormats)) {
                const o = Object.keys(t.datetimeFormats);
                o.length && o.forEach(c => {
                    e.mergeDateTimeFormat(c, t.datetimeFormats[c])
                })
            }
            if (Et(t.numberFormats)) {
                const o = Object.keys(t.numberFormats);
                o.length && o.forEach(c => {
                    e.mergeNumberFormat(c, t.numberFormats[c])
                })
            }
        }
    }

    function Bb(e) {
        return at(Tl, null, e, 0)
    }
    let jb = 0;

    function Gb(e) {
        return (t, r, n, s) => e(r, n, gi() || void 0, s)
    }

    function Fp(e = {}, t) {
        const {
            __root: r
        } = e, n = r === void 0;
        let s = et(e.inheritLocale) ? e.inheritLocale : !0;
        const o = un(r && s ? r.locale.value : ye(e.locale) ? e.locale : Eo),
            c = un(r && s ? r.fallbackLocale.value : ye(e.fallbackLocale) || bt(e.fallbackLocale) || Be(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : o.value),
            u = un(tu(o.value, e)),
            f = un(Be(e.datetimeFormats) ? e.datetimeFormats : {
                [o.value]: {}
            }),
            h = un(Be(e.numberFormats) ? e.numberFormats : {
                [o.value]: {}
            });
        let m = r ? r.missingWarn : et(e.missingWarn) || vi(e.missingWarn) ? e.missingWarn : !0,
            y = r ? r.fallbackWarn : et(e.fallbackWarn) || vi(e.fallbackWarn) ? e.fallbackWarn : !0,
            E = r ? r.fallbackRoot : et(e.fallbackRoot) ? e.fallbackRoot : !0,
            I = !!e.fallbackFormat,
            k = xt(e.missing) ? e.missing : null,
            M = xt(e.missing) ? Gb(e.missing) : null,
            j = xt(e.postTranslation) ? e.postTranslation : null,
            C = r ? r.warnHtmlMessage : et(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
            H = !!e.escapeParameter;
        const X = r ? r.modifiers : Be(e.modifiers) ? e.modifiers : {};
        let W = e.pluralRules || r && r.pluralRules,
            G;
        G = (() => {
            const A = {
                version: ste,
                locale: o.value,
                fallbackLocale: c.value,
                messages: u.value,
                modifiers: X,
                pluralRules: W,
                missing: M === null ? void 0 : M,
                missingWarn: m,
                fallbackWarn: y,
                fallbackFormat: I,
                unresolving: !0,
                postTranslation: j === null ? void 0 : j,
                warnHtmlMessage: C,
                escapeParameter: H,
                messageResolver: e.messageResolver,
                __meta: {
                    framework: "vue"
                }
            };
            return A.datetimeFormats = f.value, A.numberFormats = h.value, A.__datetimeFormatters = Be(G) ? G.__datetimeFormatters : void 0, A.__numberFormatters = Be(G) ? G.__numberFormatters : void 0, Zee(A)
        })(), Na(G, o.value, c.value);

        function oe() {
            return [o.value, c.value, u.value, f.value, h.value]
        }
        const ce = xr({
                get: () => o.value,
                set: A => {
                    o.value = A, G.locale = o.value
                }
            }),
            ue = xr({
                get: () => c.value,
                set: A => {
                    c.value = A, G.fallbackLocale = c.value, Na(G, o.value, A)
                }
            }),
            $e = xr(() => u.value),
            Ce = xr(() => f.value),
            fe = xr(() => h.value);

        function Ie() {
            return xt(j) ? j : null
        }

        function U(A) {
            j = A, G.postTranslation = A
        }

        function ie() {
            return k
        }

        function de(A) {
            A !== null && (M = Gb(A)), k = A, G.missing = M
        }
        const be = (A, K, he, pe, Ae, Pe) => {
            oe();
            let O;
            if (O = A(G), Gt(O) && O === eu) {
                const [T, N] = K();
                return r && E ? pe(r) : Ae(T)
            } else {
                if (Pe(O)) return O;
                throw Ht(Ft.UNEXPECTED_RETURN_TYPE)
            }
        };

        function ve(...A) {
            return be(K => Reflect.apply(xb, null, [K, ...A]), () => oh(...A), "translate", K => Reflect.apply(K.t, K, [...A]), K => K, K => ye(K))
        }

        function Se(...A) {
            const [K, he, pe] = A;
            if (pe && !Et(pe)) throw Ht(Ft.INVALID_ARGUMENT);
            return ve(K, he, rr({
                resolvedMessage: !0
            }, pe || {}))
        }

        function Me(...A) {
            return be(K => Reflect.apply(Db, null, [K, ...A]), () => ch(...A), "datetime format", K => Reflect.apply(K.d, K, [...A]), () => Rb, K => ye(K))
        }

        function Ge(...A) {
            return be(K => Reflect.apply(Ub, null, [K, ...A]), () => lh(...A), "number format", K => Reflect.apply(K.n, K, [...A]), () => Rb, K => ye(K))
        }

        function nt(A) {
            return A.map(K => ye(K) || Gt(K) || et(K) ? Bb(String(K)) : K)
        }
        const Cr = {
            normalize: nt,
            interpolate: A => A,
            type: "vnode"
        };

        function ir(...A) {
            return be(K => {
                let he;
                const pe = K;
                try {
                    pe.processor = Cr, he = Reflect.apply(xb, null, [pe, ...A])
                } finally {
                    pe.processor = null
                }
                return he
            }, () => oh(...A), "translate", K => K[uh](...A), K => [Bb(K)], K => bt(K))
        }

        function vr(...A) {
            return be(K => Reflect.apply(Ub, null, [K, ...A]), () => lh(...A), "number format", K => K[dh](...A), () => [], K => ye(K) || bt(K))
        }

        function ct(...A) {
            return be(K => Reflect.apply(Db, null, [K, ...A]), () => ch(...A), "datetime format", K => K[fh](...A), () => [], K => ye(K) || bt(K))
        }

        function wt(A) {
            W = A, G.pluralRules = W
        }

        function lt(A, K) {
            const he = ye(K) ? K : o.value,
                pe = Ut(he);
            return G.messageResolver(pe, A) !== null
        }

        function Mt(A) {
            let K = null;
            const he = vS(G, c.value, o.value);
            for (let pe = 0; pe < he.length; pe++) {
                const Ae = u.value[he[pe]] || {},
                    Pe = G.messageResolver(Ae, A);
                if (Pe != null) {
                    K = Pe;
                    break
                }
            }
            return K
        }

        function qt(A) {
            const K = Mt(A);
            return K != null ? K : r ? r.tm(A) || {} : {}
        }

        function Ut(A) {
            return u.value[A] || {}
        }

        function g(A, K) {
            u.value[A] = K, G.messages = u.value
        }

        function p(A, K) {
            u.value[A] = u.value[A] || {}, qa(K, u.value[A]), G.messages = u.value
        }

        function w(A) {
            return f.value[A] || {}
        }

        function D(A, K) {
            f.value[A] = K, G.datetimeFormats = f.value, Mb(G, A, K)
        }

        function B(A, K) {
            f.value[A] = rr(f.value[A] || {}, K), G.datetimeFormats = f.value, Mb(G, A, K)
        }

        function Y(A) {
            return h.value[A] || {}
        }

        function le(A, K) {
            h.value[A] = K, G.numberFormats = h.value, Fb(G, A, K)
        }

        function se(A, K) {
            h.value[A] = rr(h.value[A] || {}, K), G.numberFormats = h.value, Fb(G, A, K)
        }
        jb++, r && sh && (es(r.locale, A => {
            s && (o.value = A, G.locale = A, Na(G, o.value, c.value))
        }), es(r.fallbackLocale, A => {
            s && (c.value = A, G.fallbackLocale = A, Na(G, o.value, c.value))
        }));
        const re = {
            id: jb,
            locale: ce,
            fallbackLocale: ue,
            get inheritLocale() {
                return s
            },
            set inheritLocale(A) {
                s = A, A && r && (o.value = r.locale.value, c.value = r.fallbackLocale.value, Na(G, o.value, c.value))
            },
            get availableLocales() {
                return Object.keys(u.value).sort()
            },
            messages: $e,
            get modifiers() {
                return X
            },
            get pluralRules() {
                return W || {}
            },
            get isGlobal() {
                return n
            },
            get missingWarn() {
                return m
            },
            set missingWarn(A) {
                m = A, G.missingWarn = m
            },
            get fallbackWarn() {
                return y
            },
            set fallbackWarn(A) {
                y = A, G.fallbackWarn = y
            },
            get fallbackRoot() {
                return E
            },
            set fallbackRoot(A) {
                E = A
            },
            get fallbackFormat() {
                return I
            },
            set fallbackFormat(A) {
                I = A, G.fallbackFormat = I
            },
            get warnHtmlMessage() {
                return C
            },
            set warnHtmlMessage(A) {
                C = A, G.warnHtmlMessage = A
            },
            get escapeParameter() {
                return H
            },
            set escapeParameter(A) {
                H = A, G.escapeParameter = A
            },
            t: ve,
            getLocaleMessage: Ut,
            setLocaleMessage: g,
            mergeLocaleMessage: p,
            getPostTranslationHandler: Ie,
            setPostTranslationHandler: U,
            getMissingHandler: ie,
            setMissingHandler: de,
            [CS]: wt
        };
        return re.datetimeFormats = Ce, re.numberFormats = fe, re.rt = Se, re.te = lt, re.tm = qt, re.d = Me, re.n = Ge, re.getDateTimeFormat = w, re.setDateTimeFormat = D, re.mergeDateTimeFormat = B, re.getNumberFormat = Y, re.setNumberFormat = le, re.mergeNumberFormat = se, re[$S] = e.__injectWithOption, re[uh] = ir, re[fh] = ct, re[dh] = vr, re
    }

    function ote(e) {
        const t = ye(e.locale) ? e.locale : Eo,
            r = ye(e.fallbackLocale) || bt(e.fallbackLocale) || Be(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : t,
            n = xt(e.missing) ? e.missing : void 0,
            s = et(e.silentTranslationWarn) || vi(e.silentTranslationWarn) ? !e.silentTranslationWarn : !0,
            o = et(e.silentFallbackWarn) || vi(e.silentFallbackWarn) ? !e.silentFallbackWarn : !0,
            c = et(e.fallbackRoot) ? e.fallbackRoot : !0,
            u = !!e.formatFallbackMessages,
            f = Be(e.modifiers) ? e.modifiers : {},
            h = e.pluralizationRules,
            m = xt(e.postTranslation) ? e.postTranslation : void 0,
            y = ye(e.warnHtmlInMessage) ? e.warnHtmlInMessage !== "off" : !0,
            E = !!e.escapeParameterHtml,
            I = et(e.sync) ? e.sync : !0;
        let k = e.messages;
        if (Be(e.sharedMessages)) {
            const G = e.sharedMessages;
            k = Object.keys(G).reduce((oe, ce) => {
                const ue = oe[ce] || (oe[ce] = {});
                return rr(ue, G[ce]), oe
            }, k || {})
        }
        const {
            __i18n: M,
            __root: j,
            __injectWithOption: C
        } = e, H = e.datetimeFormats, X = e.numberFormats, W = e.flatJson;
        return {
            locale: t,
            fallbackLocale: r,
            messages: k,
            flatJson: W,
            datetimeFormats: H,
            numberFormats: X,
            missing: n,
            missingWarn: s,
            fallbackWarn: o,
            fallbackRoot: c,
            fallbackFormat: u,
            modifiers: f,
            pluralRules: h,
            postTranslation: m,
            warnHtmlMessage: y,
            escapeParameter: E,
            messageResolver: e.messageResolver,
            inheritLocale: I,
            __i18n: M,
            __root: j,
            __injectWithOption: C
        }
    }

    function ph(e = {}, t) {
        {
            const r = Fp(ote(e)),
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
                        return et(r.missingWarn) ? !r.missingWarn : r.missingWarn
                    },
                    set silentTranslationWarn(s) {
                        r.missingWarn = et(s) ? !s : s
                    },
                    get silentFallbackWarn() {
                        return et(r.fallbackWarn) ? !r.fallbackWarn : r.fallbackWarn
                    },
                    set silentFallbackWarn(s) {
                        r.fallbackWarn = et(s) ? !s : s
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
                        if (!ye(o)) throw Ht(Ft.INVALID_ARGUMENT);
                        const y = o;
                        return ye(c) ? f.locale = c : bt(c) ? h = c : Be(c) && (m = c), bt(u) ? h = u : Be(u) && (m = u), Reflect.apply(r.t, r, [y, h || m || {}, f])
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
                        if (!ye(o)) throw Ht(Ft.INVALID_ARGUMENT);
                        const y = o;
                        return ye(c) ? f.locale = c : Gt(c) ? f.plural = c : bt(c) ? h = c : Be(c) && (m = c), ye(u) ? f.locale = u : bt(u) ? h = u : Be(u) && (m = u), Reflect.apply(r.t, r, [y, h || m || {}, f])
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
                        } = e;
                        o && o(s, n)
                    }
                };
            return n
        }
    }
    const Bp = {
        tag: {
            type: [String, Object]
        },
        locale: {
            type: String
        },
        scope: {
            type: String,
            validator: e => e === "parent" || e === "global",
            default: "parent"
        },
        i18n: {
            type: Object
        }
    };

    function cte({
        slots: e
    }, t) {
        return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((n, s) => n = [...n, ...bt(s.children) ? s.children : [s]], []) : t.reduce((r, n) => {
            const s = e[n];
            return s && (r[n] = s()), r
        }, {})
    }

    function RS(e) {
        return ze
    }
    const Wb = {
        name: "i18n-t",
        props: rr({
            keypath: {
                type: String,
                required: !0
            },
            plural: {
                type: [Number, String],
                validator: e => Gt(e) || !isNaN(e)
            }
        }, Bp),
        setup(e, t) {
            const {
                slots: r,
                attrs: n
            } = t, s = e.i18n || jp({
                useScope: e.scope,
                __useComponent: !0
            });
            return () => {
                const o = Object.keys(r).filter(y => y !== "_"),
                    c = {};
                e.locale && (c.locale = e.locale), e.plural !== void 0 && (c.plural = ye(e.plural) ? +e.plural : e.plural);
                const u = cte(t, o),
                    f = s[uh](e.keypath, u, c),
                    h = rr({}, n),
                    m = ye(e.tag) || Et(e.tag) ? e.tag : RS();
                return Ph(m, h, f)
            }
        }
    };

    function lte(e) {
        return bt(e) && !ye(e[0])
    }

    function NS(e, t, r, n) {
        const {
            slots: s,
            attrs: o
        } = t;
        return () => {
            const c = {
                part: !0
            };
            let u = {};
            e.locale && (c.locale = e.locale), ye(e.format) ? c.key = e.format : Et(e.format) && (ye(e.format.key) && (c.key = e.format.key), u = Object.keys(e.format).reduce((E, I) => r.includes(I) ? rr({}, E, {
                [I]: e.format[I]
            }) : E, {}));
            const f = n(e.value, c, u);
            let h = [c.key];
            bt(f) ? h = f.map((E, I) => {
                const k = s[E.type],
                    M = k ? k({
                        [E.type]: E.value,
                        index: I,
                        parts: f
                    }) : [E.value];
                return lte(M) && (M[0].key = `${E.type}-${I}`), M
            }) : ye(f) && (h = [f]);
            const m = rr({}, o),
                y = ye(e.tag) || Et(e.tag) ? e.tag : RS();
            return Ph(y, m, h)
        }
    }
    const Kb = {
            name: "i18n-n",
            props: rr({
                value: {
                    type: Number,
                    required: !0
                },
                format: {
                    type: [String, Object]
                }
            }, Bp),
            setup(e, t) {
                const r = e.i18n || jp({
                    useScope: "parent",
                    __useComponent: !0
                });
                return NS(e, t, OS, (...n) => r[dh](...n))
            }
        },
        Hb = {
            name: "i18n-d",
            props: rr({
                value: {
                    type: [Number, Date],
                    required: !0
                },
                format: {
                    type: [String, Object]
                }
            }, Bp),
            setup(e, t) {
                const r = e.i18n || jp({
                    useScope: "parent",
                    __useComponent: !0
                });
                return NS(e, t, wS, (...n) => r[fh](...n))
            }
        };

    function ute(e, t) {
        const r = e;
        if (e.mode === "composition") return r.__getInstance(t) || e.global; {
            const n = r.__getInstance(t);
            return n != null ? n.__composer : e.global.__composer
        }
    }

    function fte(e) {
        const t = c => {
            const {
                instance: u,
                modifiers: f,
                value: h
            } = c;
            if (!u || !u.$) throw Ht(Ft.UNEXPECTED_ERROR);
            const m = ute(e, u.$),
                y = Vb(h);
            return [Reflect.apply(m.t, m, [...qb(y)]), m]
        };
        return {
            created: (c, u) => {
                const [f, h] = t(u);
                sh && e.global === h && (c.__i18nWatcher = es(h.locale, () => {
                    u.instance && u.instance.$forceUpdate()
                })), c.__composer = h, c.textContent = f
            },
            unmounted: c => {
                sh && c.__i18nWatcher && (c.__i18nWatcher(), c.__i18nWatcher = void 0, delete c.__i18nWatcher), c.__composer && (c.__composer = void 0, delete c.__composer)
            },
            beforeUpdate: (c, {
                value: u
            }) => {
                if (c.__composer) {
                    const f = c.__composer,
                        h = Vb(u);
                    c.textContent = Reflect.apply(f.t, f, [...qb(h)])
                }
            },
            getSSRProps: c => {
                const [u] = t(c);
                return {
                    textContent: u
                }
            }
        }
    }

    function Vb(e) {
        if (ye(e)) return {
            path: e
        };
        if (Be(e)) {
            if (!("path" in e)) throw Ht(Ft.REQUIRED_VALUE, "path");
            return e
        } else throw Ht(Ft.INVALID_VALUE)
    }

    function qb(e) {
        const {
            path: t,
            locale: r,
            args: n,
            choice: s,
            plural: o
        } = e, c = {}, u = n || {};
        return ye(r) && (c.locale = r), Gt(s) && (c.plural = s), Gt(o) && (c.plural = o), [t, u, c]
    }

    function dte(e, t, ...r) {
        const n = Be(r[0]) ? r[0] : {},
            s = !!n.useI18nComponentName;
        (et(n.globalInstall) ? n.globalInstall : !0) && (e.component(s ? "i18n" : Wb.name, Wb), e.component(Kb.name, Kb), e.component(Hb.name, Hb)), e.directive("t", fte(t))
    }

    function hte(e, t, r) {
        return {
            beforeCreate() {
                const n = gi();
                if (!n) throw Ht(Ft.UNEXPECTED_ERROR);
                const s = this.$options;
                if (s.i18n) {
                    const o = s.i18n;
                    s.__i18n && (o.__i18n = s.__i18n), o.__root = t, this === this.$root ? this.$i18n = Yb(e, o) : (o.__injectWithOption = !0, this.$i18n = ph(o))
                } else s.__i18n ? this === this.$root ? this.$i18n = Yb(e, s) : this.$i18n = ph({
                    __i18n: s.__i18n,
                    __injectWithOption: !0,
                    __root: t
                }) : this.$i18n = e;
                s.__i18nGlobal && AS(t, s, s), e.__onComponentInstanceCreated(this.$i18n), r.__setInstance(n, this.$i18n), this.$t = (...o) => this.$i18n.t(...o), this.$rt = (...o) => this.$i18n.rt(...o), this.$tc = (...o) => this.$i18n.tc(...o), this.$te = (o, c) => this.$i18n.te(o, c), this.$d = (...o) => this.$i18n.d(...o), this.$n = (...o) => this.$i18n.n(...o), this.$tm = o => this.$i18n.tm(o)
            },
            mounted() {},
            unmounted() {
                const n = gi();
                if (!n) throw Ht(Ft.UNEXPECTED_ERROR);
                delete this.$t, delete this.$rt, delete this.$tc, delete this.$te, delete this.$d, delete this.$n, delete this.$tm, r.__deleteInstance(n), delete this.$i18n
            }
        }
    }

    function Yb(e, t) {
        e.locale = t.locale || e.locale, e.fallbackLocale = t.fallbackLocale || e.fallbackLocale, e.missing = t.missing || e.missing, e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn, e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn, e.formatFallbackMessages = t.formatFallbackMessages || e.formatFallbackMessages, e.postTranslation = t.postTranslation || e.postTranslation, e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage, e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml, e.sync = t.sync || e.sync, e.__composer[CS](t.pluralizationRules || e.pluralizationRules);
        const r = tu(e.locale, {
            messages: t.messages,
            __i18n: t.__i18n
        });
        return Object.keys(r).forEach(n => e.mergeLocaleMessage(n, r[n])), t.datetimeFormats && Object.keys(t.datetimeFormats).forEach(n => e.mergeDateTimeFormat(n, t.datetimeFormats[n])), t.numberFormats && Object.keys(t.numberFormats).forEach(n => e.mergeNumberFormat(n, t.numberFormats[n])), e
    }
    const pte = Oi("global-vue-i18n");

    function gte(e = {}, t) {
        const r = et(e.legacy) ? e.legacy : !0,
            n = et(e.globalInjection) ? e.globalInjection : !0,
            s = r ? !!e.allowComposition : !0,
            o = new Map,
            [c, u] = mte(e, r),
            f = Oi("");

        function h(E) {
            return o.get(E) || null
        }

        function m(E, I) {
            o.set(E, I)
        }

        function y(E) {
            o.delete(E)
        } {
            const E = {
                get mode() {
                    return r ? "legacy" : "composition"
                },
                get allowComposition() {
                    return s
                },
                async install(I, ...k) {
                    I.__VUE_I18N_SYMBOL__ = f, I.provide(I.__VUE_I18N_SYMBOL__, E), !r && n && Ote(I, E.global), dte(I, E, ...k), r && I.mixin(hte(u, u.__composer, E));
                    const M = I.unmount;
                    I.unmount = () => {
                        E.dispose(), M()
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
                __deleteInstance: y
            };
            return E
        }
    }

    function jp(e = {}) {
        const t = gi();
        if (t == null) throw Ht(Ft.MUST_BE_CALL_SETUP_TOP);
        if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__) throw Ht(Ft.NOT_INSLALLED);
        const r = vte(t),
            n = _te(r),
            s = ate(t),
            o = yte(e, s);
        if (r.mode === "legacy" && !e.__useComponent) {
            if (!r.allowComposition) throw Ht(Ft.NOT_AVAILABLE_IN_LEGACY_MODE);
            return Tte(t, o, n, e)
        }
        if (o === "global") return AS(n, e, s), n;
        if (o === "parent") {
            let f = bte(r, t, e.__useComponent);
            return f == null && (f = n), f
        }
        const c = r;
        let u = c.__getInstance(t);
        if (u == null) {
            const f = rr({}, e);
            "__i18n" in s && (f.__i18n = s.__i18n), n && (f.__root = n), u = Fp(f), Ete(c, t), c.__setInstance(t, u)
        }
        return u
    }

    function mte(e, t, r) {
        const n = AN(); {
            const s = t ? n.run(() => ph(e)) : n.run(() => Fp(e));
            if (s == null) throw Ht(Ft.UNEXPECTED_ERROR);
            return [n, s]
        }
    }

    function vte(e) {
        {
            const t = Qi(e.isCE ? pte : e.appContext.app.__VUE_I18N_SYMBOL__);
            if (!t) throw Ht(e.isCE ? Ft.NOT_INSLALLED_WITH_PROVIDE : Ft.UNEXPECTED_ERROR);
            return t
        }
    }

    function yte(e, t) {
        return Zl(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local"
    }

    function _te(e) {
        return e.mode === "composition" ? e.global : e.global.__composer
    }

    function bte(e, t, r = !1) {
        let n = null;
        const s = t.root;
        let o = t.parent;
        for (; o != null;) {
            const c = e;
            if (e.mode === "composition") n = c.__getInstance(o);
            else {
                const u = c.__getInstance(o);
                u != null && (n = u.__composer, r && n && !n[$S] && (n = null))
            }
            if (n != null || s === o) break;
            o = o.parent
        }
        return n
    }

    function Ete(e, t, r) {
        bl(() => {}, t), El(() => {
            e.__deleteInstance(t)
        }, t)
    }

    function Tte(e, t, r, n = {}) {
        const s = t === "local",
            o = nL(null);
        if (s && e.proxy && !(e.proxy.$options.i18n || e.proxy.$options.__i18n)) throw Ht(Ft.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
        const c = et(n.inheritLocale) ? n.inheritLocale : !0,
            u = un(s && c ? r.locale.value : ye(n.locale) ? n.locale : Eo),
            f = un(s && c ? r.fallbackLocale.value : ye(n.fallbackLocale) || bt(n.fallbackLocale) || Be(n.fallbackLocale) || n.fallbackLocale === !1 ? n.fallbackLocale : u.value),
            h = un(tu(u.value, n)),
            m = un(Be(n.datetimeFormats) ? n.datetimeFormats : {
                [u.value]: {}
            }),
            y = un(Be(n.numberFormats) ? n.numberFormats : {
                [u.value]: {}
            }),
            E = s ? r.missingWarn : et(n.missingWarn) || vi(n.missingWarn) ? n.missingWarn : !0,
            I = s ? r.fallbackWarn : et(n.fallbackWarn) || vi(n.fallbackWarn) ? n.fallbackWarn : !0,
            k = s ? r.fallbackRoot : et(n.fallbackRoot) ? n.fallbackRoot : !0,
            M = !!n.fallbackFormat,
            j = xt(n.missing) ? n.missing : null,
            C = xt(n.postTranslation) ? n.postTranslation : null,
            H = s ? r.warnHtmlMessage : et(n.warnHtmlMessage) ? n.warnHtmlMessage : !0,
            X = !!n.escapeParameter,
            W = s ? r.modifiers : Be(n.modifiers) ? n.modifiers : {},
            G = n.pluralRules || s && r.pluralRules;

        function Z() {
            return [u.value, f.value, h.value, m.value, y.value]
        }
        const oe = xr({
                get: () => o.value ? o.value.locale.value : u.value,
                set: p => {
                    o.value && (o.value.locale.value = p), u.value = p
                }
            }),
            ce = xr({
                get: () => o.value ? o.value.fallbackLocale.value : f.value,
                set: p => {
                    o.value && (o.value.fallbackLocale.value = p), f.value = p
                }
            }),
            ue = xr(() => o.value ? o.value.messages.value : h.value),
            $e = xr(() => m.value),
            Ce = xr(() => y.value);

        function fe() {
            return o.value ? o.value.getPostTranslationHandler() : C
        }

        function Ie(p) {
            o.value && o.value.setPostTranslationHandler(p)
        }

        function U() {
            return o.value ? o.value.getMissingHandler() : j
        }

        function ie(p) {
            o.value && o.value.setMissingHandler(p)
        }

        function de(p) {
            return Z(), p()
        }

        function be(...p) {
            return o.value ? de(() => Reflect.apply(o.value.t, null, [...p])) : de(() => "")
        }

        function ve(...p) {
            return o.value ? Reflect.apply(o.value.rt, null, [...p]) : ""
        }

        function Se(...p) {
            return o.value ? de(() => Reflect.apply(o.value.d, null, [...p])) : de(() => "")
        }

        function Me(...p) {
            return o.value ? de(() => Reflect.apply(o.value.n, null, [...p])) : de(() => "")
        }

        function Ge(p) {
            return o.value ? o.value.tm(p) : {}
        }

        function nt(p, w) {
            return o.value ? o.value.te(p, w) : !1
        }

        function Rt(p) {
            return o.value ? o.value.getLocaleMessage(p) : {}
        }

        function Cr(p, w) {
            o.value && (o.value.setLocaleMessage(p, w), h.value[p] = w)
        }

        function ir(p, w) {
            o.value && o.value.mergeLocaleMessage(p, w)
        }

        function vr(p) {
            return o.value ? o.value.getDateTimeFormat(p) : {}
        }

        function ct(p, w) {
            o.value && (o.value.setDateTimeFormat(p, w), m.value[p] = w)
        }

        function wt(p, w) {
            o.value && o.value.mergeDateTimeFormat(p, w)
        }

        function lt(p) {
            return o.value ? o.value.getNumberFormat(p) : {}
        }

        function Mt(p, w) {
            o.value && (o.value.setNumberFormat(p, w), y.value[p] = w)
        }

        function qt(p, w) {
            o.value && o.value.mergeNumberFormat(p, w)
        }
        const Ut = {
            get id() {
                return o.value ? o.value.id : -1
            },
            locale: oe,
            fallbackLocale: ce,
            messages: ue,
            datetimeFormats: $e,
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
                return o.value ? o.value.modifiers : W
            },
            get pluralRules() {
                return o.value ? o.value.pluralRules : G
            },
            get isGlobal() {
                return o.value ? o.value.isGlobal : !1
            },
            get missingWarn() {
                return o.value ? o.value.missingWarn : E
            },
            set missingWarn(p) {
                o.value && (o.value.missingWarn = p)
            },
            get fallbackWarn() {
                return o.value ? o.value.fallbackWarn : I
            },
            set fallbackWarn(p) {
                o.value && (o.value.missingWarn = p)
            },
            get fallbackRoot() {
                return o.value ? o.value.fallbackRoot : k
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
                return o.value ? o.value.warnHtmlMessage : H
            },
            set warnHtmlMessage(p) {
                o.value && (o.value.warnHtmlMessage = p)
            },
            get escapeParameter() {
                return o.value ? o.value.escapeParameter : X
            },
            set escapeParameter(p) {
                o.value && (o.value.escapeParameter = p)
            },
            t: be,
            getPostTranslationHandler: fe,
            setPostTranslationHandler: Ie,
            getMissingHandler: U,
            setMissingHandler: ie,
            rt: ve,
            d: Se,
            n: Me,
            tm: Ge,
            te: nt,
            getLocaleMessage: Rt,
            setLocaleMessage: Cr,
            mergeLocaleMessage: ir,
            getDateTimeFormat: vr,
            setDateTimeFormat: ct,
            mergeDateTimeFormat: wt,
            getNumberFormat: lt,
            setNumberFormat: Mt,
            mergeNumberFormat: qt
        };

        function g(p) {
            p.locale.value = u.value, p.fallbackLocale.value = f.value, Object.keys(h.value).forEach(w => {
                p.mergeLocaleMessage(w, h.value[w])
            }), Object.keys(m.value).forEach(w => {
                p.mergeDateTimeFormat(w, m.value[w])
            }), Object.keys(y.value).forEach(w => {
                p.mergeNumberFormat(w, y.value[w])
            }), p.escapeParameter = X, p.fallbackFormat = M, p.fallbackRoot = k, p.fallbackWarn = I, p.missingWarn = E, p.warnHtmlMessage = H
        }
        return xE(() => {
            if (e.proxy == null || e.proxy.$i18n == null) throw Ht(Ft.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
            const p = o.value = e.proxy.$i18n.__composer;
            t === "global" ? (u.value = p.locale.value, f.value = p.fallbackLocale.value, h.value = p.messages.value, m.value = p.datetimeFormats.value, y.value = p.numberFormats.value) : s && g(p)
        }), Ut
    }
    const Ste = ["locale", "fallbackLocale", "availableLocales"],
        wte = ["t", "rt", "d", "n", "tm"];

    function Ote(e, t) {
        const r = Object.create(null);
        Ste.forEach(n => {
            const s = Object.getOwnPropertyDescriptor(t, n);
            if (!s) throw Ht(Ft.UNEXPECTED_ERROR);
            const o = tr(s.value) ? {
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
        }), e.config.globalProperties.$i18n = r, wte.forEach(n => {
            const s = Object.getOwnPropertyDescriptor(t, n);
            if (!s || !s.value) throw Ht(Ft.UNEXPECTED_ERROR);
            Object.defineProperty(e.config.globalProperties, `$${n}`, s)
        })
    }
    zee(ete);
    Xee(Lee);
    Jee(vS);
    const Ite = Je({
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
                show(e) {
                    this.isVisible = !0, this.options = e, this.timeout && (window.clearTimeout(this.timeout), this.timeout = null), e.duration && (this.timeout = window.setTimeout(() => {
                        this.hide()
                    }, e.duration))
                },
                hide() {
                    this.isVisible = !1, this.options = null, this.timeout && (window.clearTimeout(this.timeout), this.timeout = null)
                }
            }
        }),
        Cte = "main/pp8/survey-bomb/assets/c8afd972.svg",
        $te = {
            class: "constrain"
        },
        Ate = {
            class: "text"
        },
        Rte = {
            class: "subtext"
        },
        Nte = {
            key: 0,
            class: "warning"
        },
        Lte = {
            key: 1,
            class: "spinner"
        };

    function kte(e, t, r, n, s, o) {
        return F(), At(Il, {
            name: "toast-transition"
        }, {
            default: Ch(() => [e.isVisible && e.options ? (F(), q("div", {
                key: 0,
                class: Fe([e.options.type, "jbg toast"])
            }, [z("div", $te, [z("img", {
                class: "close",
                alt: "close",
                src: Cte,
                onClick: t[0] || (t[0] = (...c) => e.hide && e.hide(...c)),
                onKeydown: t[1] || (t[1] = rT((...c) => e.hide && e.hide(...c), ["esc"]))
            }, null, 32), z("p", Ate, De(e.options.text), 1), z("p", Rte, De(e.options.subtext), 1), e.options.warning ? (F(), q("p", Nte, De(e.options.warning), 1)) : Oe("", !0), e.options.type === "reconnecting" ? (F(), q("div", Lte)) : Oe("", !0)])], 2)) : Oe("", !0)]),
            _: 1
        })
    }
    const Pte = qe(Ite, [
            ["render", kte],
            ["__scopeId", "data-v-0a136edf"]
        ]),
        xte = {
            install: e => {
                if (e.config.globalProperties.$showToast) return;
                let t;
                const r = o => {
                        if (!t) throw new Error("No ToastComponent is registered to show");
                        t.show(o)
                    },
                    n = () => {
                        if (!t) throw new Error("No ToastComponent is registered to hide");
                        t.hide()
                    },
                    s = o => {
                        t = o
                    };
                e.component("Toast", Pte), e.config.globalProperties.$showToast = r, e.config.globalProperties.$hideToast = n, e.config.globalProperties.$registerToast = s
            }
        },
        Dte = Je({
            props: {
                options: Object,
                mainView: Object
            },
            setup() {
                return {
                    fatalError: Qi(yo.fatal.error)
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
                    var e, t;
                    return (t = (e = this.fatalError) == null ? void 0 : e.hasCrashed) != null ? t : !1
                }
            },
            beforeMount() {
                this.$ecast.on("connection", e => {
                    this.onConnection(e)
                }), this.$ecast.on("client/connected", e => {
                    this.onClientConnected(e)
                }), this.$ecast.on("client/disconnected", e => {
                    this.onClientDisconnected(e)
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
                onConnection(e) {
                    switch (e.status) {
                        case "waiting":
                        case "connecting":
                            this.$showToast({
                                type: "reconnecting",
                                text: this.$t("TOAST.RECONNECTING.CONTROLLER.TEXT"),
                                subtext: this.$t("TOAST.RECONNECTING.CONTROLLER.SUBTEXT", {
                                    attempt: e.attempt
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
                onClientConnected(e) {
                    e.role === "host" && (!e.reconnect || this.$showToast({
                        type: "generic",
                        text: this.$t("TOAST.RECONNECTED.TEXT"),
                        subtext: this.$t("TOAST.RECONNECTED.SUBTEXT"),
                        duration: 1500
                    }))
                },
                onClientDisconnected(e) {
                    e.role === "host" && this.$showToast({
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

    function Mte(e, t, r, n, s, o) {
        const c = vt("Fatal"),
            u = vt("TextDescriptions"),
            f = vt("Debug"),
            h = vt("Modal"),
            m = vt("Toast");
        return e.shouldShowFatal ? (F(), At(c, {
            key: 0
        })) : (F(), q(ze, {
            key: 1
        }, [at(u), (F(), At(Rh(e.mainView), wl({
            id: "game",
            class: e.classes
        }, e.ecastValues), null, 16, ["class"])), at(f), at(h), at(m)], 64))
    }
    const zb = qe(Dte, [
            ["render", Mte]
        ]),
        Ute = e => {
            let t;
            window.tv.register({
                connect: r => (t = new wr.WSClient(r), t.connect()),
                mount: r => {
                    var c, u, f, h;
                    zb.name = r.app;
                    let n = qk(zb, {
                        options: r,
                        mainView: e.MainView
                    });
                    r.client && (t = r.client);
                    let s;
                    (c = r.room) != null && c.locale && (s = r.room.locale), (f = (u = r.match) == null ? void 0 : u.params) != null && f.locale && (s = r.match.params.locale), Fs.set(s);
                    const o = gte({
                        fallbackLocale: "en",
                        locale: Fs.locale,
                        messages: Fs.mergeMessages(Yj, (h = e.messages) != null ? h : {})
                    });
                    if (n.use(QV), n.use(GQ), n.use(Az, {
                            replayer: r.replayer,
                            client: t,
                            room: r.room
                        }), n.use(qX, {
                            wsClient: t,
                            room: r.room,
                            welcome: r.welcome
                        }), n.use(WZ), n.use(o), n.use(_Q, {
                            i18n: o
                        }), n.use(qQ), n.use(YQ), n.use(xte), n.use(zQ), e.plugins) {
                        const m = y => y.plugin === void 0;
                        e.plugins.forEach(y => {
                            if (m(y)) {
                                n.use(y);
                                return
                            }
                            n.use(y.plugin, ...y.options)
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
        Fte = {
            INSTRUCTION: {
                ORDERED: "Choose the door you think is {rank}",
                UNORDERED: "Choose all {amount} correct doors"
            },
            REMAINING: "Remaining Choices: {remaining}"
        },
        Bte = {
            CHOOSE_ONE: "Choose a door",
            CHOOSE_THIS: "Choose this door"
        },
        jte = {
            FILTER_ERROR: "That\u2019s not allowed, enter something else!",
            INSTRUCTION: {
                AVATAR: "Pick your avatar",
                NAME_TEAM: "Suggest a team name",
                RANK_TEAM: "Rank your favorite team names"
            }
        },
        Gte = "No torches",
        Wte = {
            CONFIRM: "Yeah, yeah, I got it",
            SUBTEXT: {
                ATTENTION: "[b]YOU MUST HAVE THE AUDIENCE ON TO PLAY![/b]",
                BEST: "[b]BEST:[/b] Passwording the game and sharing the password with your desired team",
                GOOD: "[b]ALMOST AS GOOD:[/b] Hiding the room code and setting a max player limit",
                RECOMMEND: "We recommend the following settings to help create your desired team and audience.",
                RESTART: "So, if you haven\u2019t done that, maybe restart the game?"
            },
            TEXT: "Welcome to Streamer Mode!"
        },
        Kte = {
            INSTRUCTION: "Remember your choices",
            PICK_MORE: "Pick {amount} more"
        },
        Hte = "Switch teams",
        Vte = "VS",
        qte = {
            FINAL_CHANCE: {
                BOTH: "If either team gets the next choice right, the game is over!",
                CURRENT: "If their team gets their next choice right, the game is over!",
                HEADER: "Elimination Moment",
                RIVAL: "If your team gets your next choice right, the game is over!"
            },
            LOSE: {
                HEADER: "You\u2019re Trapped",
                TEXT: ["Don\u2019t worry, apparently you were tasty.", "At least the other team is happy.", "Learn more about your friends next time.", "Still, you learned a lot about each other.", "It is pitch black. You are likely to be eaten by a grue.", "Even worse, you\u2019re damp.", "Theivery doesn\u2019t pay!", "It\u2019s okay, Laverne will keep you company.", "Enjoy the musty air.", "At least your team name was cool."]
            },
            SKIP_TUTORIALS: "Skip Tutorials",
            UP_NEXT: {
                HEADER: "You\u2019re Up Next",
                TEXT: ["Get ready! You\u2019re choosing next.", "Pay attention because you\u2019re picking the next door.", "After this choice, it\u2019s your turn\u2026 so hope they fail!"]
            },
            WIN: {
                HEADER: "You Escaped",
                TEXT: ["Congratulations on a job well done!", "Teamwork made this dream work.", "Don\u2019t spend all that gold you stole earlier in one place.", "Enjoy the fresh air.", "Don\u2019t forget to rate your stay!", "I\u2019m sure the other team is just fine.", "You picked your friends\u2019 knows!", "Looking forward to your next visit.", "The real treasure was the friends we lost to the depths of this mine.", "Everyone is proud of you."]
            }
        },
        Yte = {
            AUDIENCE: Fte,
            CHOICES: Bte,
            LOBBY: jte,
            NO_TORCHES: Gte,
            STREAMER_MODAL: Wte,
            SURVEY: Kte,
            SWITCH_TEAMS: Hte,
            VERSUS: Vte,
            WAITING: qte
        },
        zte = {
            en: Yte
        },
        Xte = {},
        Jte = {
            width: "13",
            height: "24",
            viewBox: "0 0 13 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        },
        Zte = z("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M6.587 0L7.514 0.438C10.857 2.016 13 5.455 13 9.241V24H0V9.307C0 5.484 2.185 2.021 5.577 0.464L6.587 0ZM6.581 1.16L5.995 1.429C2.973 2.816 1.026 5.901 1.026 9.307V22.943H11.974V9.241C11.974 5.868 10.064 2.804 7.086 1.398L6.581 1.16Z",
            fill: "#89D510"
        }, null, -1),
        Qte = z("path", {
            d: "M6.5 1V23.5",
            stroke: "#89D510"
        }, null, -1),
        ere = z("circle", {
            cx: "9",
            cy: "15",
            r: "1",
            fill: "#89D510"
        }, null, -1),
        tre = z("circle", {
            cx: "4",
            cy: "15",
            r: "1",
            fill: "#89D510"
        }, null, -1),
        rre = [Zte, Qte, ere, tre];

    function nre(e, t) {
        return F(), q("svg", Jte, rre)
    }
    const ire = qe(Xte, [
            ["render", nre]
        ]),
        sre = {},
        are = {
            width: "14",
            height: "15",
            viewBox: "0 0 14 15",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        },
        ore = z("path", {
            d: "M13 1.5L1 13.5",
            stroke: "#FF1515",
            "stroke-width": "2"
        }, null, -1),
        cre = z("path", {
            d: "M13 13.5L1 1.5",
            stroke: "#FF1515",
            "stroke-width": "2"
        }, null, -1),
        lre = [ore, cre];

    function ure(e, t) {
        return F(), q("svg", are, lre)
    }
    const fre = qe(sre, [
            ["render", ure]
        ]),
        dre = {},
        hre = {
            width: "21",
            height: "25",
            viewBox: "0 0 21 25",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        },
        pre = z("path", {
            d: "m4.969 3.81.936-.644a8.1 8.1 0 0 1 9.19 0l1.053.725a7.988 7.988 0 0 1 3.09 8.965l-.054.175c-.137.436-.206.89-.206 1.347v.043c0 .289.03.577.09.86l.13.604a2.685 2.685 0 0 1-.43 2.108l-.144.206a2.202 2.202 0 0 1-1.8.934 2.202 2.202 0 0 0-2.202 2.202v.797a.7.7 0 0 1-.474.662l-.099.034a11.037 11.037 0 0 1-7.098 0l-.099-.034a.7.7 0 0 1-.474-.662v-.797a2.202 2.202 0 0 0-2.202-2.202 2.201 2.201 0 0 1-1.8-.934l-.145-.206a2.685 2.685 0 0 1-.43-2.108l.133-.62a3.959 3.959 0 0 0-.085-1.987l-.084-.275A8.237 8.237 0 0 1 4.969 3.81Z",
            fill: "#fff"
        }, null, -1),
        gre = z("path", {
            d: "M9.255 14.778a2.8 2.8 0 0 1-2.8 2.8c-1.546 0-2.489-.943-2.489-2.49 0-1.545.943-2.488 2.49-2.488 1.546 0 2.8.631 2.8 2.178ZM17.033 15.089c0 1.546-.943 2.489-2.489 2.489a2.8 2.8 0 0 1-2.8-2.8c0-1.547 1.254-2.178 2.8-2.178 1.546 0 2.489.943 2.489 2.489ZM8.95 18.748l.835-2.815a.745.745 0 0 1 1.43 0l.834 2.815a.674.674 0 0 1-1.117.675L10.5 19l-.433.422a.674.674 0 0 1-1.117-.675Z",
            fill: "#000"
        }, null, -1),
        mre = z("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M8.089 23.022v-1.555h.622v1.555H8.09Zm4.355 0v-1.555h.623v1.555h-.623Zm-2.177.311v-1.555h.622v1.555h-.622Z",
            fill: "#000"
        }, null, -1),
        vre = [pre, gre, mre];

    function yre(e, t) {
        return F(), q("svg", hre, vre)
    }
    const _re = qe(dre, [
            ["render", yre]
        ]),
        bre = {},
        Ere = {
            width: "21",
            height: "25",
            viewBox: "0 0 21 25",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        },
        Tre = XE('<path d="m13.004.472.05 5.582 1.2 1.286A12.934 12.934 0 0 0 21 11.162v10.5l-3.122.568a10.36 10.36 0 0 1-6.472 2.27H3l-.23-.192A2.692 2.692 0 0 1 3 20a2.404 2.404 0 0 1 0-4l-.442-.295A2.295 2.295 0 0 1 3.83 11.5h4.134a1.303 1.303 0 0 0 1.13-1.952l-.365-.636a3.766 3.766 0 0 1-.5-1.876V4.394A4.386 4.386 0 0 1 12.528.01a.467.467 0 0 1 .476.463Z" fill="#89D510"></path><path d="M14.012 16.353a1.795 1.795 0 0 1 2.345-2.704l1.368 1.016a3.383 3.383 0 0 0 2.018.668H21v3.506h-1.488c-.688 0-1.358.219-1.914.625l-1.237.904a1.803 1.803 0 0 1-2.344-2.726l.637-.642-.642-.647ZM3.512 14.946l.404.303c.141.105.33.122.487.043a3.52 3.52 0 0 1 1.574-.371h1.169v-2H5.977a3.521 3.521 0 0 1-1.574-.372.464.464 0 0 0-.487.044l-.404.303a1.281 1.281 0 0 0 0 2.05Z" fill="#fff"></path><path d="m9.78 12.896-.405-.303a.464.464 0 0 0-.486-.044 3.521 3.521 0 0 1-1.574.372h-1.17v2h1.17a3.52 3.52 0 0 1 1.574.371.464.464 0 0 0 .486-.043l.404-.303a1.281 1.281 0 0 0 0-2.05ZM10.743 7.909l-.13.44a.35.35 0 0 0 .135.396c.398.276.707.64.904 1.064l.42.906 1.814-.841-.42-.906a2.658 2.658 0 0 1-.23-1.378.35.35 0 0 0-.214-.358l-.42-.186c-.71-.314-1.64.118-1.86.863Z" fill="#fff"></path><path d="m14.856 11.905.13-.44a.35.35 0 0 0-.136-.396 2.657 2.657 0 0 1-.903-1.064l-.42-.907-1.815.842.42.906c.197.424.276.896.23 1.377a.35.35 0 0 0 .214.359l.42.185c.711.315 1.64-.117 1.86-.862ZM11.955 6.044l.27-.366a.41.41 0 0 0 .033-.435 3.114 3.114 0 0 1-.36-1.405V2.385a.909.909 0 1 0-1.817 0v1.48c.007.49-.101.974-.317 1.416a.41.41 0 0 0 .047.434l.28.358c.476.604 1.407.59 1.864-.029ZM3.512 18.946l.404.302c.141.106.33.123.487.044a3.52 3.52 0 0 1 1.574-.371h1.169v-2H5.977a3.521 3.521 0 0 1-1.574-.372.464.464 0 0 0-.487.044l-.404.303a1.281 1.281 0 0 0 0 2.05Z" fill="#fff"></path><path d="m9.78 16.896-.405-.303a.464.464 0 0 0-.486-.044 3.521 3.521 0 0 1-1.574.372h-1.17v2h1.17a3.52 3.52 0 0 1 1.574.371.464.464 0 0 0 .486-.044l.404-.302a1.281 1.281 0 0 0 0-2.05ZM3.512 22.946l.404.302c.141.106.33.123.487.044a3.52 3.52 0 0 1 1.574-.371h1.169v-2H5.977a3.521 3.521 0 0 1-1.574-.372.464.464 0 0 0-.487.044l-.404.303a1.281 1.281 0 0 0 0 2.05Z" fill="#fff"></path><path d="m9.78 20.896-.405-.303a.464.464 0 0 0-.486-.044 3.521 3.521 0 0 1-1.574.372h-1.17v2h1.17a3.52 3.52 0 0 1 1.574.371.464.464 0 0 0 .486-.044l.404-.302a1.281 1.281 0 0 0 0-2.05Z" fill="#fff"></path>', 6),
        Sre = [Tre];

    function wre(e, t) {
        return F(), q("svg", Ere, Sre)
    }
    const Ore = qe(bre, [
            ["render", wre]
        ]),
        LS = e => {
            const t = ["th", "st", "nd", "rd"],
                r = e % 100;
            return `${t[(r-20)%10]||t[r]||t[0]}`
        },
        Ire = e => `${e}${LS(e)}`,
        Gp = Je({
            components: {
                DoorSVG: ire,
                RemoveSVG: fre,
                SkullSVG: _re,
                ThumbSVG: Ore
            },
            props: {
                choice: {
                    type: Object,
                    required: !0
                },
                chosen: Boolean,
                correct: Boolean,
                disabled: Boolean,
                incorrect: Boolean,
                rank: Number,
                removable: Boolean
            },
            emits: ["choose"],
            computed: {
                scale() {
                    return this.choice.percent ? (this.choice.percent / 100).toFixed(2) : 0
                }
            },
            methods: {
                getOrdinal(e) {
                    return LS(e)
                }
            }
        }),
        Xb = () => {
            kk(e => ({
                "10ba71f1": e.scale
            }))
        },
        Jb = Gp.setup;
    Gp.setup = Jb ? (e, t) => (Xb(), Jb(e, t)) : Xb;
    const Cre = {
            key: 0,
            class: "rank"
        },
        $re = ["id", "disabled"],
        Are = ["id", "disabled"],
        Rre = ["textContent"],
        Nre = ["for"];

    function Lre(e, t, r, n, s, o) {
        const c = vt("RemoveSVG"),
            u = vt("ThumbSVG"),
            f = vt("SkullSVG"),
            h = vt("DoorSVG"),
            m = Kt("bb");
        return F(), q("div", {
            class: Fe(["choice", {
                chosen: e.chosen,
                correct: e.correct,
                disabled: e.disabled,
                incorrect: e.incorrect,
                progress: !!e.choice.percent
            }])
        }, [e.rank ? (F(), q("div", Cre, [en(De(e.rank), 1), z("sup", null, De(e.getOrdinal(e.rank)), 1)])) : Oe("", !0), e.removable ? (F(), q(ze, {
            key: 1
        }, [z("input", {
            id: e.choice.index.toString(),
            disabled: e.disabled,
            type: "checkbox",
            onClick: t[0] || (t[0] = y => e.$emit("choose"))
        }, null, 8, $re), e.disabled ? Oe("", !0) : (F(), At(c, {
            key: 0,
            class: "remove"
        })), e.chosen ? (F(), q(ze, {
            key: 1
        }, [e.correct ? (F(), At(u, {
            key: 0,
            class: "result",
            "aria-label": "correct answer"
        })) : Oe("", !0), e.incorrect ? (F(), At(f, {
            key: 1,
            class: "result",
            "aria-label": "incorrect answer"
        })) : Oe("", !0)], 64)) : Oe("", !0)], 64)) : (F(), q(ze, {
            key: 2
        }, [at(h, {
            class: "door"
        }), z("input", {
            id: e.choice.index.toString(),
            disabled: e.disabled,
            name: "choices",
            type: "radio",
            onChange: t[1] || (t[1] = y => e.$emit("choose"))
        }, null, 40, Are), e.choice.percent ? (F(), q("div", {
            key: 0,
            class: "percent",
            textContent: De(`${e.choice.percent}%`)
        }, null, 8, Rre)) : Oe("", !0)], 64)), z("label", {
            for: e.choice.index.toString()
        }, [Ve(z("span", null, null, 512), [
            [m, e.choice.text]
        ])], 8, Nre)], 2)
    }
    const Wp = qe(Gp, [
            ["render", Lre],
            ["__scopeId", "data-v-892612eb"]
        ]),
        kre = Je({
            components: {
                ChoiceButton: Wp
            },
            props: {
                player: {
                    type: Object,
                    required: !0
                }
            },
            data() {
                return {
                    chosenIndex: -1,
                    hasSubmit: !1,
                    isSubmitting: !1,
                    pollAudienceInterval: null
                }
            },
            computed: {
                choices() {
                    return this.player.choices.filter(e => e.rank == null)
                }
            },
            created() {
                this.player.countGroupName && (this.pollAudienceInterval = window.setInterval(async () => {
                    await this.pollAudience()
                }, 1e3))
            },
            mounted() {
                this.$vibrate()
            },
            beforeUnmount() {
                window.clearInterval(this.pollAudienceInterval), this.pollAudienceInterval = null
            },
            methods: {
                async pollAudience() {
                    let e;
                    try {
                        if ({
                                choices: e
                            } = await this.$ecast.getCountGroup(this.player.countGroupName), !e) throw new Error("missing choice data")
                    } catch (r) {
                        console.warn(`failed to get countgroup ${this.player.countGroupName} during poll: ${r}`);
                        return
                    }
                    const t = Object.values(e).reduce((r, n) => r + n, 0);
                    Object.values(this.choices).forEach((r, n) => {
                        const s = Object.keys(e).find(c => c.endsWith(`:${r.index}`)),
                            o = e[s];
                        this.choices[n].percent = Math.round(o / t * 100)
                    })
                },
                shouldDisableChoice(e) {
                    return !!(this.isSubmitting || !!e.rank)
                },
                async onChoose(e) {
                    if (this.chosenIndex = e, this.player.responseKey) try {
                        await this.$ecast.updateObject(this.player.responseKey, {
                            choiceIndex: this.chosenIndex
                        })
                    } catch (t) {
                        this.$handleEcastError(t)
                    }
                },
                async onSubmitChoices() {
                    switch (this.$ecast.role) {
                        case "audience":
                            await this.onAudienceSubmit();
                            break;
                        case "player":
                            await this.onPlayerSubmit();
                            break
                    }
                    this.hasSubmit = !0
                },
                async onAudienceSubmit() {
                    if (!!this.player.countGroupName) {
                        this.isSubmitting = !0;
                        try {
                            await this.$ecast.incrementCountGroupCounter(this.player.countGroupName, `${this.player.questionIndex}:${this.chosenIndex}`)
                        } catch (e) {
                            this.$handleEcastError(e)
                        }
                    }
                },
                async onPlayerSubmit() {
                    if (!!this.player.responseKey) {
                        this.isSubmitting = !0;
                        try {
                            await this.$ecast.updateObject(this.player.responseKey, {
                                action: "submit",
                                choiceIndex: this.chosenIndex
                            })
                        } catch (e) {
                            this.$handleEcastError(e)
                        }
                    }
                }
            }
        }),
        Pre = {
            class: "choices"
        },
        xre = {
            class: "question"
        },
        Dre = {
            class: "actions"
        },
        Mre = {
            key: 0,
            disabled: ""
        },
        Ure = ["disabled"],
        Fre = {
            class: "question"
        };

    function Bre(e, t, r, n, s, o) {
        const c = vt("ChoiceButton"),
            u = Kt("bb");
        return F(), q("div", Pre, [e.hasSubmit ? (F(), q(ze, {
            key: 1
        }, [Ve(z("div", Fre, null, 512), [
            [u, e.player.question]
        ]), at(c, {
            class: "chosen",
            choice: e.player.choices.find(f => e.chosenIndex === f.index),
            disabled: ""
        }, null, 8, ["choice"])], 64)) : (F(), q("form", {
            key: 0,
            onSubmit: t[0] || (t[0] = Or((...f) => e.onSubmitChoices && e.onSubmitChoices(...f), ["prevent"]))
        }, [z("fieldset", null, [Ve(z("legend", xre, null, 512), [
            [u, e.player.question]
        ]), (F(!0), q(ze, null, Qr(e.choices, f => (F(), At(c, {
            key: `choice${f.index}`,
            class: Fe({
                chosen: e.chosenIndex === f.index
            }),
            choice: f,
            disabled: e.shouldDisableChoice(f),
            rank: f.rank,
            onChoose: h => e.onChoose(f.index)
        }, null, 8, ["class", "choice", "disabled", "rank", "onChoose"]))), 128))]), z("div", Dre, [e.chosenIndex === -1 ? (F(), q("button", Mre, De(e.$t("CHOICES.CHOOSE_ONE")), 1)) : (F(), q("button", {
            key: 1,
            disabled: e.isSubmitting
        }, De(e.$t("CHOICES.CHOOSE_THIS")), 9, Ure))])], 32))])
    }
    const jre = qe(kre, [
            ["render", Bre],
            ["__scopeId", "data-v-16e23f10"]
        ]),
        Gre = Je({
            components: {
                ChoiceButton: Wp
            },
            props: {
                choices: Array,
                disabled: Boolean,
                instructions: String,
                places: Number,
                question: String
            },
            emits: {
                choose: e => !0,
                submit: e => !0
            },
            data() {
                return {
                    nextRank: 1,
                    selections: new Array(this.places).fill(-1)
                }
            },
            watch: {
                places: function(t) {
                    for (let r = this.selections.length; r < t; r++) this.selections.push(-1), this.nextRank = this.getNextRank()
                }
            },
            methods: {
                getNextRank() {
                    return this.selections.findIndex(e => e === -1) + 1
                },
                getRank(e) {
                    return this.selections.includes(e) ? this.selections.findIndex(t => t === e) + 1 : 0
                },
                toggleSelection(e) {
                    if (this.selections.includes(e)) {
                        this.selections[this.selections.findIndex(r => r === e)] = -1;
                        const t = this.getNextRank();
                        t > 0 && (this.nextRank = t)
                    } else this.selections[this.nextRank - 1] = e, this.nextRank = this.getNextRank();
                    this.$emit("choose", this.selections.filter(t => t !== -1))
                }
            }
        }),
        Wre = {
            class: "survey-form"
        },
        Kre = {
            key: 0,
            class: "instructions"
        },
        Hre = {
            class: "question"
        },
        Vre = {
            key: 0,
            class: "actions"
        },
        qre = {
            key: 0,
            disabled: ""
        },
        Yre = {
            key: 1
        };

    function zre(e, t, r, n, s, o) {
        const c = vt("ChoiceButton"),
            u = Kt("bb");
        return F(), q("div", Wre, [e.instructions ? (F(), q("div", Kre, [z("h1", null, De(e.instructions), 1)])) : Oe("", !0), z("form", {
            onSubmit: t[0] || (t[0] = Or(f => e.$emit("submit", e.selections), ["prevent"]))
        }, [z("fieldset", null, [Ve(z("legend", Hre, null, 512), [
            [u, e.question]
        ]), (F(!0), q(ze, null, Qr(e.choices, f => (F(), At(c, {
            key: `choice${f.index}`,
            class: Fe({
                chosen: e.selections.includes(f.index)
            }),
            choice: f,
            disabled: e.disabled || !e.selections.includes(-1) && !e.selections.includes(f.index),
            rank: e.getRank(f.index),
            removable: "",
            onChoose: h => e.toggleSelection(f.index)
        }, null, 8, ["class", "choice", "disabled", "rank", "onChoose"]))), 128))]), e.disabled ? Oe("", !0) : (F(), q("div", Vre, [e.selections.includes(-1) && e.places != null ? (F(), q("button", qre, De(e.$t("SURVEY.PICK_MORE", {
            amount: e.places - e.selections.filter(f => f !== -1).length
        })), 1)) : (F(), q("button", Yre, De(e.$t("ACTION.SUBMIT")), 1))]))], 32)])
    }
    const kS = qe(Gre, [
            ["render", zre],
            ["__scopeId", "data-v-627a585a"]
        ]),
        Xre = {},
        Jre = {
            width: "26",
            height: "26",
            viewBox: "0 0 26 26",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        },
        Zre = z("path", {
            d: "M26 13H6",
            stroke: "black",
            "stroke-width": "5"
        }, null, -1),
        Qre = z("path", {
            d: "M15 2L4 13L15 24",
            stroke: "black",
            "stroke-width": "5"
        }, null, -1),
        ene = [Zre, Qre];

    function tne(e, t) {
        return F(), q("svg", Jre, ene)
    }
    const rne = qe(Xre, [
            ["render", tne]
        ]),
        nne = {},
        ine = {
            width: "26",
            height: "26",
            viewBox: "0 0 26 26",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        },
        sne = z("path", {
            d: "M0 13H20",
            stroke: "black",
            "stroke-width": "5"
        }, null, -1),
        ane = z("path", {
            d: "M11 2L22 13L11 24",
            stroke: "black",
            "stroke-width": "5"
        }, null, -1),
        one = [sne, ane];

    function cne(e, t) {
        return F(), q("svg", ine, one)
    }
    const lne = qe(nne, [
            ["render", cne]
        ]),
        une = Je({
            components: {
                ArrowLeftSVG: rne,
                ArrowRightSVG: lne
            },
            props: {
                avatar: Object,
                canSwitch: Boolean,
                teamIndex: Number
            },
            emits: ["switch-teams"],
            data() {
                return {
                    isSwitching: !1
                }
            }
        }),
        fne = ["disabled"],
        dne = ["src", "alt"];

    function hne(e, t, r, n, s, o) {
        const c = vt("ArrowRightSVG"),
            u = vt("ArrowLeftSVG");
        return F(), q("div", {
            class: Fe(["team-switcher", {
                left: e.teamIndex === 1,
                right: e.teamIndex === 0
            }])
        }, [z("button", {
            disabled: !e.canSwitch || e.isSwitching,
            onClick: t[0] || (t[0] = f => e.$emit("switch-teams"))
        }, [e.avatar ? (F(), q("img", {
            key: 0,
            class: "avatar",
            src: e.avatar.on,
            alt: e.avatar.alt
        }, null, 8, dne)) : Oe("", !0), e.teamIndex === 0 ? (F(), At(c, {
            key: 1,
            class: "arrow"
        })) : (F(), At(u, {
            key: 2,
            class: "arrow"
        })), en(" " + De(e.$t("SWITCH_TEAMS")), 1)], 8, fne)], 2)
    }
    const pne = qe(une, [
            ["render", hne],
            ["__scopeId", "data-v-e617a953"]
        ]),
        gne = Je({
            components: {
                LobbyActions: k0,
                Input: i5,
                SurveyForm: kS,
                TeamSwitcher: pne
            },
            props: {
                info: {
                    type: Object,
                    required: !0
                },
                player: {
                    type: Object,
                    required: !0
                }
            },
            bb: {
                section: (e, t) => `<div class="section">${t}</div>`
            },
            data() {
                return {
                    avatarImages: {
                        0: {
                            alt: "armored adventurer with sword",
                            off: new URL("main/pp8/survey-bomb/assets/a8c3a864.png", self.location).href,
                            on: new URL("main/pp8/survey-bomb/assets/5d15f0d1.png", self.location).href
                        },
                        1: {
                            alt: "raven with large beak",
                            off: new URL("main/pp8/survey-bomb/assets/b3cc8796.png", self.location).href,
                            on: new URL("main/pp8/survey-bomb/assets/53768559.png", self.location).href
                        },
                        2: {
                            alt: "rogue with dagger and feather cap",
                            off: new URL("main/pp8/survey-bomb/assets/8b8859b6.png", self.location).href,
                            on: new URL("main/pp8/survey-bomb/assets/51d034a9.png", self.location).href
                        },
                        3: {
                            alt: "hooded thief flipping a coin",
                            off: new URL("main/pp8/survey-bomb/assets/8c4e5c69.png", self.location).href,
                            on: new URL("main/pp8/survey-bomb/assets/b9a7e9a5.png", self.location).href
                        },
                        4: {
                            alt: "snail with pickaxe lashed to its shell",
                            off: new URL("main/pp8/survey-bomb/assets/5eeccce0.png", self.location).href,
                            on: new URL("main/pp8/survey-bomb/assets/ba84c99e.png", self.location).href
                        },
                        5: {
                            alt: "royalty covered by long hair while holding gem",
                            off: new URL("main/pp8/survey-bomb/assets/dc10f07a.png", self.location).href,
                            on: new URL("main/pp8/survey-bomb/assets/2bee22a7.png", self.location).href
                        },
                        6: {
                            alt: "skull-faced miner wielding shovel",
                            off: new URL("main/pp8/survey-bomb/assets/4c894246.png", self.location).href,
                            on: new URL("main/pp8/survey-bomb/assets/11762825.png", self.location).href
                        },
                        7: {
                            alt: "cool kid with mace riding a turtle",
                            off: new URL("main/pp8/survey-bomb/assets/c3f7575c.png", self.location).href,
                            on: new URL("main/pp8/survey-bomb/assets/7e72a908.png", self.location).href
                        },
                        8: {
                            alt: "angry flower in a boot",
                            off: new URL("main/pp8/survey-bomb/assets/27bc4eb8.png", self.location).href,
                            on: new URL("main/pp8/survey-bomb/assets/0b736286.png", self.location).href
                        },
                        9: {
                            alt: "broad mountaineer gnome with large bedroll",
                            off: new URL("main/pp8/survey-bomb/assets/311e8e8e.png", self.location).href,
                            on: new URL("main/pp8/survey-bomb/assets/d4fbb597.png", self.location).href
                        },
                        10: {
                            alt: "short brooding gnome with very tall hat",
                            off: new URL("main/pp8/survey-bomb/assets/ff043567.png", self.location).href,
                            on: new URL("main/pp8/survey-bomb/assets/7a01f477.png", self.location).href
                        },
                        11: {
                            alt: "capped mushroom with legs",
                            off: new URL("main/pp8/survey-bomb/assets/b5ce96a7.png", self.location).href,
                            on: new URL("main/pp8/survey-bomb/assets/cd733855.png", self.location).href
                        },
                        12: {
                            alt: "determined underling holding a sack",
                            off: new URL("main/pp8/survey-bomb/assets/9824e903.png", self.location).href,
                            on: new URL("main/pp8/survey-bomb/assets/80e2faa9.png", self.location).href
                        },
                        13: {
                            alt: "frog knight",
                            off: new URL("main/pp8/survey-bomb/assets/4ba7fa02.png", self.location).href,
                            on: new URL("main/pp8/survey-bomb/assets/26546468.png", self.location).href
                        }
                    },
                    filterError: !1,
                    isSubmitting: !1,
                    selectedAvatar: {},
                    steps: ["avatar", "name", "rank", "start"],
                    teamName: ""
                }
            },
            computed: {
                choices() {
                    var e;
                    return (e = this.player.names) == null ? void 0 : e.map((t, r) => ({
                        index: r,
                        text: t
                    }))
                },
                gameStartedOptions() {
                    return {
                        mode: this.player.streamerMode ? "streamer" : "standard"
                    }
                }
            },
            watch: {
                "player.avatars": function() {
                    if (!this.selectedAvatar.name) return;
                    const t = this.player.avatars.find(r => r.name === this.selectedAvatar.name);
                    t != null && t.available || (this.selectedAvatar = {})
                },
                "player.stepIndex": function() {
                    this.isSubmitting = !1
                }
            },
            mounted() {
                this.player.streamerMode && this.player.vipName === this.info.name && this.$showModal("Options", {
                    text: this.$t("STREAMER_MODAL.TEXT"),
                    subtext: `${this.$t("STREAMER_MODAL.SUBTEXT.ATTENTION")}[section]${this.$t("STREAMER_MODAL.SUBTEXT.RECOMMEND")}[/section][section]${this.$t("STREAMER_MODAL.SUBTEXT.BEST")}[/section][section]${this.$t("STREAMER_MODAL.SUBTEXT.GOOD")}[/section][section]${this.$t("STREAMER_MODAL.SUBTEXT.RESTART")}[/section]`,
                    options: [{
                        text: this.$t("STREAMER_MODAL.CONFIRM"),
                        value: "confirm"
                    }]
                }, {
                    classes: "pm-streamer-mode"
                })
            },
            methods: {
                shouldEndAvatarRow(e) {
                    return (e + 3) % 7 === 0 || e % 7 === 0
                },
                onSelectAvatar(e) {
                    this.selectedAvatar = e
                },
                async onSubmitAvatar() {
                    try {
                        await this.$ecast.updateObject(this.player.responseKey, {
                            action: "avatar",
                            avatar: this.selectedAvatar.name
                        })
                    } catch (e) {
                        this.$handleEcastError(e)
                    }
                },
                async onSubmitNameSurvey(e) {
                    try {
                        await this.$ecast.updateObject(this.player.responseKey, {
                            action: "rankNames",
                            answers: e
                        })
                    } catch (t) {
                        this.$handleEcastError(t)
                    }
                },
                async onSubmitTeamName() {
                    if (!!this.player.textKey) {
                        this.filterError = !1;
                        try {
                            await this.$ecast.updateText(this.player.textKey, this.teamName)
                        } catch (e) {
                            if (e instanceof fi.EcastFilterError) {
                                this.filterError = !0;
                                return
                            }
                            this.$handleEcastError(e)
                        }
                    }
                },
                async onSwitchTeams() {
                    if (!!this.player.responseKey) try {
                        await this.$ecast.updateObject(this.player.responseKey, {
                            action: "switchTeams"
                        })
                    } catch (e) {
                        this.$handleEcastError(e)
                    }
                }
            }
        }),
        mne = {
            class: "lobby"
        },
        vne = {
            class: "dots"
        },
        yne = {
            key: 1,
            class: "selecting"
        },
        _ne = {
            class: "instructions"
        },
        bne = {
            class: "avatars"
        },
        Ene = ["disabled", "onClick"],
        Tne = ["src", "alt"],
        Sne = {
            class: "actions"
        },
        wne = ["disabled"],
        One = {
            key: 2,
            class: "naming"
        },
        Ine = {
            class: "instructions"
        },
        Cne = {
            key: 0,
            class: "error"
        },
        $ne = ["disabled"],
        Ane = {
            key: 3,
            class: "ranking"
        };

    function Rne(e, t, r, n, s, o) {
        const c = vt("LobbyActions"),
            u = vt("Input"),
            f = vt("SurveyForm"),
            h = vt("TeamSwitcher"),
            m = Kt("t");
        return F(), q("div", mne, [e.player.hasControls || e.steps[e.player.stepIndex] === "start" ? (F(), At(c, {
            key: 0,
            player: e.player,
            "message-location": e.steps[e.player.stepIndex] === "start" ? "bottom" : "none",
            "game-started-options": e.gameStartedOptions
        }, null, 8, ["player", "message-location", "game-started-options"])) : Oe("", !0), z("div", vne, [(F(!0), q(ze, null, Qr(e.steps, (y, E) => (F(), q("div", {
            key: E,
            class: Fe(["dot", {
                active: e.player.stepIndex >= E
            }])
        }, null, 2))), 128))]), e.steps[e.player.stepIndex] === "avatar" ? (F(), q("div", yne, [z("span", _ne, De(e.$t("LOBBY.INSTRUCTION.AVATAR")), 1), z("div", bne, [(F(!0), q(ze, null, Qr(e.player.avatars, (y, E) => (F(), q(ze, {
            key: `av${E}`
        }, [z("button", {
            class: Fe(["avatar", {
                selected: y.name === e.selectedAvatar.name
            }]),
            disabled: !y.available,
            onClick: I => e.onSelectAvatar(y)
        }, [z("img", {
            src: y.available ? e.avatarImages[y.name] && e.avatarImages[y.name].on : e.avatarImages[y.name] && e.avatarImages[y.name].off,
            alt: e.avatarImages[y.name] && e.avatarImages[y.name].alt
        }, null, 8, Tne)], 10, Ene), e.shouldEndAvatarRow(E + 1) ? (F(), q("div", {
            key: `break${E}`,
            class: "row-break"
        })) : Oe("", !0)], 64))), 128))]), z("div", Sne, [z("button", {
            disabled: !e.selectedAvatar.name,
            onClick: t[0] || (t[0] = (...y) => e.onSubmitAvatar && e.onSubmitAvatar(...y))
        }, De(e.$t("ACTION.SUBMIT")), 9, wne)])])) : e.steps[e.player.stepIndex] === "name" ? (F(), q("div", One, [z("span", Ine, De(e.$t("LOBBY.INSTRUCTION.NAME_TEAM")), 1), z("form", {
            onSubmit: t[2] || (t[2] = Or((...y) => e.onSubmitTeamName && e.onSubmitTeamName(...y), ["prevent"]))
        }, [at(u, {
            modelValue: e.teamName,
            "onUpdate:modelValue": t[1] || (t[1] = y => e.teamName = y),
            maxlength: "21"
        }, null, 8, ["modelValue"]), e.filterError ? Ve((F(), q("span", Cne, null, 512)), [
            [m, "LOBBY.FILTER_ERROR"]
        ]) : Oe("", !0), z("button", {
            class: "submit",
            disabled: !e.teamName
        }, De(e.$t("ACTION.SUBMIT")), 9, $ne)], 32)])) : e.steps[e.player.stepIndex] === "rank" ? (F(), q("div", Ane, [at(f, {
            choices: e.choices,
            places: Math.min(e.player.names.length, 3),
            question: e.$t("LOBBY.INSTRUCTION.RANK_TEAM"),
            onSubmit: e.onSubmitNameSurvey
        }, null, 8, ["choices", "places", "question", "onSubmit"])])) : Oe("", !0), e.$ecast.role !== "audience" && e.steps[e.player.stepIndex] !== "avatar" ? (F(), At(h, {
            key: 4,
            avatar: e.avatarImages[e.info.avatarId],
            "can-switch": e.player.canSwitch,
            "team-index": e.player.teamIndex,
            onSwitchTeams: e.onSwitchTeams
        }, null, 8, ["avatar", "can-switch", "team-index", "onSwitchTeams"])) : Oe("", !0)])
    }
    const Nne = qe(gne, [
            ["render", Rne],
            ["__scopeId", "data-v-3a5a7c69"]
        ]),
        Lne = {},
        kne = {
            width: "12",
            height: "29",
            viewBox: "0 0 12 29",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        },
        Pne = XE('<path d="M5.4 26.923L5.136 17.558C5.1126 16.717 5.787 16.023 6.628 16.023C7.469 16.023 8.143 16.717 8.120 17.558L7.855 26.923C7.837 27.587 7.293 28.116 6.628 28.116C5.963 28.116 5.419 27.587 5.400 26.923Z" fill="white"></path><path d="M1.86 11.678C0.69 13.893 0.214 16.362 3.42 19.061C4.98 20.169 8.1 20.169 9.66 19.061C11.22 17.954 12 16.597 12 14.262C12 11.678 10.83 10.202 9.66 8.725C8.49 7.249 6.54 5.403 7.71 2.08C5.76 3.188 4.98 4.665 4.98 6.51C4.98 8.161 5.76 11.309 4.2 12.417C5.158 10.202 4.59 8.725 3.42 7.618C3.81 9.094 3.03 9.463 1.86 11.678Z" fill="#FF4444"></path><path d="M12 0.973C11.22 1.342 9.646 2.078 10.036 4.293C10.188 5.155 10.83 5.772 12 6.51C11.22 4.295 11.61 2.819 12 0.973Z" fill="#FF4444"></path><path d="M8.242 9.897C8.671 11.848 6.75 13.71 5.892 14.686C5.057 15.635 4.38 17.109 5.567 18.108C7.067 19.373 9.154 17.456 9.529 15.75C9.958 13.799 9.1 11.848 8.242 9.897Z" fill="url(#paint0_linear)"></path><defs><linearGradient id="paint0_linear" x1="7.286" y1="9.897" x2="7.286" y2="18.517" gradientUnits="userSpaceOnUse"><stop offset="0.469" stop-color="#FFD43D"></stop><stop offset="1" stop-color="#FFD43D" stop-opacity="0"></stop></linearGradient></defs>', 5),
        xne = [Pne];

    function Dne(e, t) {
        return F(), q("svg", kne, xne)
    }
    const PS = qe(Lne, [
            ["render", Dne]
        ]),
        Mne = Je({
            components: {
                TorchSVG: PS
            },
            props: {
                name: String,
                teamIndex: Number,
                torches: Number
            },
            themeColor: "#000"
        }),
        Une = {
            class: "header",
            "aria-label": "name and torch section"
        },
        Fne = {
            class: "name"
        },
        Bne = {
            key: 1,
            class: "torches"
        },
        jne = {
            key: 0,
            class: "torch-warning"
        };

    function Gne(e, t, r, n, s, o) {
        const c = vt("TorchSVG"),
            u = Kt("t");
        return F(), q("div", Une, [e.name ? (F(), q("div", {
            key: 0,
            class: Fe(["banner", e.teamIndex != null ? `team-${e.teamIndex}` : ""])
        }, [z("span", Fne, De(e.name), 1)], 2)) : Oe("", !0), e.torches != null ? (F(), q("div", Bne, [e.torches === 0 ? Ve((F(), q("span", jne, null, 512)), [
            [u, "NO_TORCHES"]
        ]) : (F(!0), q(ze, {
            key: 1
        }, Qr(e.torches, f => (F(), At(c, {
            key: `torch${f}`,
            class: "torch"
        }))), 128))])) : Oe("", !0)])
    }
    const Wne = qe(Mne, [
            ["render", Gne],
            ["__scopeId", "data-v-3e30cadd"]
        ]),
        Kne = Je({
            components: {
                GalleryLink: e5,
                PostGameActions: P0
            },
            props: {
                artifact: Object,
                player: {
                    type: Object,
                    required: !0
                }
            }
        }),
        Hne = {
            class: "post-game"
        };

    function Vne(e, t, r, n, s, o) {
        const c = vt("PostGameActions"),
            u = vt("GalleryLink");
        return F(), q("div", Hne, [at(c, {
            player: e.player
        }, null, 8, ["player"]), at(u, {
            artifact: e.artifact
        }, null, 8, ["artifact"])])
    }
    const qne = qe(Kne, [
            ["render", Vne],
            ["__scopeId", "data-v-4a3d7c49"]
        ]),
        Yne = Je({
            components: {
                SurveyForm: kS
            },
            props: {
                player: {
                    type: Object,
                    required: !0
                }
            },
            data() {
                return {
                    answers: new Array(this.player.places).fill(-1),
                    hasSubmit: !1,
                    isSubmitting: !1
                }
            },
            created() {
                $t.remove("pm-answers", "code")
            },
            mounted() {
                this.$vibrate()
            },
            methods: {
                async onChooseAnswer(e) {
                    if (this.answers = e, this.player.responseKey) try {
                        await this.$ecast.updateObject(this.player.responseKey, {
                            answers: this.answers
                        })
                    } catch (t) {
                        this.$handleEcastError(t)
                    }
                },
                async onSubmitSurvey() {
                    switch (this.$ecast.role) {
                        case "audience":
                            this.onAudienceSubmit();
                            break;
                        case "player":
                            await this.onPlayerSubmit();
                            break
                    }
                    this.hasSubmit = !0
                },
                onAudienceSubmit() {
                    !this.player.countGroupName || (this.isSubmitting = !0, this.answers.forEach((e, t) => {
                        const r = t + 1;
                        this.$ecast.incrementCountGroupCounter(this.player.countGroupName, `${e.toString()}:${r}`).catch(this.$handleEcastError)
                    }))
                },
                async onPlayerSubmit() {
                    if (!!this.player.responseKey) {
                        this.isSubmitting = !0;
                        try {
                            await this.$ecast.updateObject(this.player.responseKey, {
                                action: "submit",
                                answers: this.answers
                            })
                        } catch (e) {
                            this.$handleEcastError(e)
                        }
                    }
                }
            }
        }),
        zne = {
            class: "survey"
        };

    function Xne(e, t, r, n, s, o) {
        const c = vt("SurveyForm");
        return F(), q("div", zne, [e.hasSubmit ? (F(), At(c, {
            key: 1,
            class: "review",
            choices: e.answers.map(u => e.player.choices.find(f => u === f.index)),
            disabled: "",
            instructions: e.$t("SURVEY.INSTRUCTION"),
            question: e.player.question
        }, null, 8, ["choices", "instructions", "question"])) : (F(), At(c, {
            key: 0,
            choices: e.player.choices,
            disabled: e.isSubmitting,
            places: e.player.places,
            question: e.player.question,
            onChoose: e.onChooseAnswer,
            onSubmit: e.onSubmitSurvey
        }, null, 8, ["choices", "disabled", "places", "question", "onChoose", "onSubmit"]))])
    }
    const Jne = qe(Yne, [
            ["render", Xne]
        ]),
        Zne = "main/pp8/survey-bomb/assets/39dce078.png",
        Qne = "main/pp8/survey-bomb/assets/2686fbda.png",
        eie = Je({
            components: {
                TorchSVG: PS
            },
            props: {
                teamIndex: Number,
                teamName: String,
                torches: Number
            },
            data() {
                return {
                    imgSrc: new URL(Object.assign({
                        "../assets/ribbon-team-0.png": Zne,
                        "../assets/ribbon-team-1.png": Qne
                    })[`../assets/ribbon-team-${this.teamIndex}.png`], self.location).href
                }
            }
        }),
        tie = {
            class: "info",
            "aria-label": "team section"
        },
        rie = {
            class: "torches"
        },
        nie = ["src"],
        iie = {
            class: "team"
        };

    function sie(e, t, r, n, s, o) {
        const c = vt("TorchSVG");
        return F(), q("div", tie, [z("div", rie, [(F(!0), q(ze, null, Qr(e.torches, u => (F(), At(c, {
            key: `torch${u}`,
            class: "torch"
        }))), 128))]), z("img", {
            class: "ribbon",
            src: e.imgSrc,
            alt: "team ribbon"
        }, null, 8, nie), z("span", iie, De(e.teamName), 1)])
    }
    const aie = qe(eie, [
            ["render", sie],
            ["__scopeId", "data-v-c5a4fcff"]
        ]),
        oie = Je({
            components: {
                TeamInfo: aie
            },
            props: {
                avatar: Object,
                info: Object,
                player: Object,
                teams: Object
            },
            emits: ["reset"],
            data() {
                return {
                    loseMsg: this.$ts("WAITING.LOSE.TEXT"),
                    nextMsg: this.$ts("WAITING.UP_NEXT.TEXT"),
                    winMsg: this.$ts("WAITING.WIN.TEXT")
                }
            },
            computed: {
                finalChanceMsg() {
                    const e = this.isTeamFinalChance(this.teamIndexes.current),
                        t = this.isTeamFinalChance(this.teamIndexes.rival);
                    return e && t ? this.$t("WAITING.FINAL_CHANCE.BOTH") : t ? this.$t("WAITING.FINAL_CHANCE.RIVAL") : e ? this.$t("WAITING.FINAL_CHANCE.CURRENT") : "An unknown team may be doomed by the next choice!"
                },
                hasTeamData() {
                    return !(!this.teams || !this.teams[this.teamIndexes.current] || !this.teams[this.teamIndexes.rival])
                },
                message() {
                    var e, t;
                    if (this.$vibrate(), this.hasTeamData) {
                        if ((e = this.player) != null && e.over) return (this.info && this.info.teamIndex == null && this.info.torches != null ? this.info.torches > 0 : this.teams[this.teamIndexes.current].torches >= this.teams[this.teamIndexes.rival].torches) ? {
                            class: "win",
                            header: this.$t("WAITING.WIN.HEADER"),
                            text: this.winMsg
                        } : {
                            class: "lose",
                            header: this.$t("WAITING.LOSE.HEADER"),
                            text: this.loseMsg
                        };
                        if (this.isTeamFinalChance(this.teamIndexes.current) || this.isTeamFinalChance(this.teamIndexes.rival)) return {
                            class: "finalChance",
                            header: this.$t("WAITING.FINAL_CHANCE.HEADER"),
                            text: this.finalChanceMsg
                        }
                    }
                    return this.$ecast.role === "player" && ((t = this.player) == null ? void 0 : t.next) ? {
                        class: "next",
                        header: this.$t("WAITING.UP_NEXT.HEADER"),
                        text: this.nextMsg
                    } : null
                },
                teamIndexes() {
                    var e;
                    return ((e = this.info) == null ? void 0 : e.teamIndex) == null ? {
                        current: 0,
                        rival: 1
                    } : {
                        current: this.info.teamIndex,
                        rival: this.info.teamIndex === 0 ? 1 : 0
                    }
                }
            },
            watch: {
                "player.over": function(t) {
                    t && this.$ecast.role === "audience" && (this.$emit("reset"), $t.remove("pm-answers", "code"), $t.remove("pm-torches", "code"))
                }
            },
            methods: {
                isTeamFinalChance(e) {
                    var t;
                    return !this.hasTeamData || ((t = this.info) == null ? void 0 : t.teamIndex) == null ? !1 : this.teams[e].finalChance
                },
                async onSkip() {
                    var e;
                    if (!!((e = this.player) != null && e.responseKey)) try {
                        await this.$ecast.updateObject(this.player.responseKey, {
                            action: "skip"
                        })
                    } catch (t) {
                        this.$handleEcastError(t)
                    }
                }
            }
        }),
        cie = e => (ml("data-v-a9953353"), e = e(), vl(), e),
        lie = {
            class: "waiting"
        },
        uie = cie(() => z("div", {
            class: "logo"
        }, null, -1)),
        fie = {
            key: 0,
            class: "avatar"
        },
        die = ["src", "alt"],
        hie = {
            key: 0,
            class: "name"
        },
        pie = {
            key: 1,
            class: "teams"
        },
        gie = {
            class: "versus"
        },
        mie = ["textContent"],
        vie = ["textContent"],
        yie = {
            key: 3,
            class: "actions"
        };

    function _ie(e, t, r, n, s, o) {
        var f;
        const c = vt("TeamInfo"),
            u = Kt("t");
        return F(), q("div", lie, [uie, e.avatar ? (F(), q("div", fie, [z("img", {
            src: e.avatar.on,
            alt: e.avatar.alt
        }, null, 8, die), e.info ? (F(), q("div", hie, De(e.info.name), 1)) : Oe("", !0)])) : Oe("", !0), e.hasTeamData ? (F(), q("div", pie, [at(c, {
            "team-index": e.teamIndexes.current,
            "team-name": e.teams[e.teamIndexes.current].name,
            torches: e.teams[e.teamIndexes.current].torches
        }, null, 8, ["team-index", "team-name", "torches"]), Ve(z("div", gie, null, 512), [
            [u, "VERSUS"]
        ]), at(c, {
            "team-index": e.teamIndexes.rival,
            "team-name": e.teams[e.teamIndexes.rival].name,
            torches: e.teams[e.teamIndexes.rival].torches
        }, null, 8, ["team-index", "team-name", "torches"])])) : Oe("", !0), e.message ? (F(), q("div", {
            key: 2,
            class: Fe(["message", e.message.class])
        }, [z("p", {
            class: "header",
            textContent: De(e.message.header)
        }, null, 8, mie), z("p", {
            class: "text",
            textContent: De(e.message.text)
        }, null, 8, vie)], 2)) : (F(), q("div", yie, [(f = e.player) != null && f.canSkip ? Ve((F(), q("button", {
            key: 0,
            onClick: t[0] || (t[0] = (...h) => e.onSkip && e.onSkip(...h))
        }, null, 512)), [
            [u, "WAITING.SKIP_TUTORIALS"]
        ]) : Oe("", !0)]))])
    }
    const bie = qe(oie, [
        ["render", _ie],
        ["__scopeId", "data-v-a9953353"]
    ]);
    var Eie = U1,
        Tie = tn,
        Sie = "Expected a function";

    function wie(e, t, r) {
        var n = !0,
            s = !0;
        if (typeof e != "function") throw new TypeError(Sie);
        return Tie(r) && (n = "leading" in r ? !!r.leading : n, s = "trailing" in r ? !!r.trailing : s), Eie(e, t, {
            leading: n,
            maxWait: t,
            trailing: s
        })
    }
    var Zb = wie;
    const Oie = Je({
            components: {
                ChoiceButton: Wp
            },
            props: {
                audience: {
                    type: Object,
                    required: !0
                }
            },
            emits: ["correct", "incorrect"],
            data() {
                return {
                    answers: new Array(this.audience.ruleset.length).fill(-1),
                    nextRule: this.audience.ruleset[0],
                    decrementPNCounter: null,
                    incrementPNCounter: null
                }
            },
            computed: {
                correctAnswers() {
                    return this.correctChoices.filter(({
                        index: e
                    }) => this.answers.includes(e))
                },
                correctChoices() {
                    return this.audience.choices.filter(e => this.isCorrect(e))
                },
                pnCounterPrefix() {
                    return `${this.audience.voteID}:${this.audience.questionIndex}`
                },
                rankedRules() {
                    return this.audience.choices.filter(e => this.isRanked(e)).map(e => e.rank - 1).filter(e => this.audience.ruleset.includes(e))
                },
                remainingChoices() {
                    if (this.audience.ordered) return this.answers[this.rankedRules.length] === -1 ? 1 : 0;
                    const e = this.answers.filter(t => t !== -1 && !this.correctAnswers.some(({
                        index: r
                    }) => t === r));
                    return Math.max(0, this.audience.ruleset.length - this.correctChoices.length - e.length)
                }
            },
            watch: {
                "audience.choices": function(t, r) {
                    t.filter(s => !r.some(o => o.rank === s.rank)).forEach(s => {
                        let o = !1,
                            c = !1;
                        this.audience.ordered ? (c = this.isIncorrect(s), c && (this.answers[this.audience.ruleset[s.rank - 1]] = -1)) : this.isChosen(s) && (o = this.isCorrect(s), c = this.isIncorrect(s)), o && this.$emit("correct"), c && this.$emit("incorrect")
                    }), this.nextRule = this.getNextRule()
                },
                "audience.questionIndex": function() {
                    this.answers = new Array(this.audience.ruleset.length).fill(-1), $t.remove("pm-answers", "code")
                },
                "audience.voteID": function() {
                    const t = this.answers[this.rankedRules.length];
                    t !== -1 && this.incrementPNCounter(`${this.pnCounterPrefix}:${t}`)
                }
            },
            created() {
                $t.get("pm-answers", "code") && (this.answers = JSON.parse($t.get("pm-answers", "code"))), this.decrementPNCounter = Zb(this._decrementPNCounter.bind(this), 250), this.incrementPNCounter = Zb(this._incrementPNCounter.bind(this), 250), this.nextRule = this.getNextRule()
            },
            methods: {
                getNextRule() {
                    let e = this.answers.findIndex(t => t === -1);
                    return this.audience.ordered && (e = this.rankedRules.length), this.audience.ruleset[e]
                },
                getNumberWithOrdinal(e) {
                    return Ire(e)
                },
                getOrder(e) {
                    return this.audience.ordered && this.isChosen(e) ? this.audience.ruleset[this.rankedRules.length] + 1 : 0
                },
                isChosen(e) {
                    return this.answers.includes(e.index)
                },
                isCorrect(e) {
                    if (this.audience.ordered) {
                        const t = this.audience.ruleset.findIndex(r => r === e.rank - 1);
                        return t === -1 ? !1 : this.answers[t] === e.index
                    }
                    return this.isRanked(e) && this.audience.ruleset.includes(e.rank - 1)
                },
                isIncorrect(e) {
                    if (this.audience.ordered) {
                        const t = this.audience.ruleset.findIndex(r => r === e.rank - 1);
                        return t === -1 ? !1 : this.answers[t] !== e.index
                    }
                    return this.isRanked(e) && !this.audience.ruleset.includes(e.rank - 1)
                },
                isRanked(e) {
                    return !!e.rank
                },
                shouldDisable(e) {
                    return this.isRanked(e) ? !0 : !this.isChosen(e) && this.remainingChoices === 0
                },
                onChoose(e) {
                    const t = `${this.pnCounterPrefix}:${e}`;
                    if (this.answers.includes(e)) {
                        this.decrementPNCounter(t);
                        const r = this.answers.findIndex(n => n === e);
                        this.audience.ordered ? this.answers[r] = -1 : (this.answers.splice(r, 1), this.answers.push(-1))
                    } else this.incrementPNCounter(t), this.answers[this.audience.ruleset.findIndex(r => r === this.nextRule)] = e;
                    this.nextRule = this.getNextRule(), $t.set("pm-answers", JSON.stringify(this.answers), "code")
                },
                async _decrementPNCounter(e) {
                    try {
                        await this.$ecast.decrementPNCounter(e)
                    } catch (t) {
                        t instanceof fi.EcastEntityNotFound ? console.warn(`PNCounter ${e} not found, can't subtract vote`) : this.$handleEcastError(t)
                    }
                },
                async _incrementPNCounter(e) {
                    try {
                        await this.$ecast.incrementPNCounter(e)
                    } catch (t) {
                        t instanceof fi.EcastEntityNotFound ? console.warn(`PNCounter ${e} not found, can't add vote`) : this.$handleEcastError(t)
                    }
                }
            }
        }),
        Iie = {
            class: "playalong"
        },
        Cie = {
            class: "instructions"
        },
        $ie = {
            class: "question"
        };

    function Aie(e, t, r, n, s, o) {
        const c = vt("ChoiceButton"),
            u = Kt("bb");
        return F(), q("div", Iie, [z("h1", Cie, [e.audience.ordered ? (F(), q(ze, {
            key: 0
        }, [en(De(e.$t("AUDIENCE.INSTRUCTION.ORDERED", {
            rank: e.getNumberWithOrdinal(e.audience.ruleset[e.rankedRules.length] + 1)
        })), 1)], 64)) : (F(), q(ze, {
            key: 1
        }, [en(De(e.$t("AUDIENCE.INSTRUCTION.UNORDERED", {
            amount: e.audience.ruleset.length
        })), 1)], 64))]), Ve(z("div", $ie, null, 512), [
            [u, e.audience.question]
        ]), (F(!0), q(ze, null, Qr(e.audience.choices, f => (F(), q("div", {
            key: `choice${f.index}`
        }, [at(c, {
            choice: f,
            chosen: e.isChosen(f) || e.audience.ordered && e.isIncorrect(f),
            correct: e.isCorrect(f),
            disabled: e.shouldDisable(f),
            incorrect: e.isIncorrect(f),
            rank: f.rank || e.getOrder(f),
            removable: "",
            onChoose: h => e.onChoose(f.index)
        }, null, 8, ["choice", "chosen", "correct", "disabled", "incorrect", "rank", "onChoose"])]))), 128)), z("div", null, De(e.$t("AUDIENCE.REMAINING", {
            remaining: e.remainingChoices
        })), 1)])
    }
    const Rie = qe(Oie, [
            ["render", Aie],
            ["__scopeId", "data-v-a31a81bf"]
        ]),
        Nie = Je({
            components: {
                NameHeader: Wne,
                Choices: jre,
                Lobby: Nne,
                PostGame: qne,
                Survey: Jne,
                Waiting: bie,
                Playalong: Rie
            },
            ecastKeys: {
                audience: "audiencePlayer",
                info: ({
                    id: e
                }) => `info:${e}`,
                player: ({
                    id: e
                }) => `player:${e}`,
                teams: "teams"
            },
            ecastProviders: {
                artifact: e => {
                    if (e.artifact) return e.artifact;
                    let t = 0,
                        r;
                    for (; e[`artifact:${t}`];) r = e[`artifact:${t}`], t += 1;
                    return r
                }
            },
            themeColor: "#582664",
            props: {
                artifact: Object,
                audience: Object,
                info: Object,
                player: Object,
                teams: Object
            },
            data() {
                return {
                    audienceInfo: {
                        name: "AUDIENCE"
                    }
                }
            },
            computed: {
                background() {
                    var t, r;
                    if (!this.audience && !this.player) return "bg-fallback";
                    switch (((t = this.audience) == null ? void 0 : t.kind) || ((r = this.player) == null ? void 0 : r.kind)) {
                        case "choices":
                            return "bg-choices";
                        case "lobby":
                        case "survey":
                        case "waiting":
                            return "bg-game";
                        case "postGame":
                        default:
                            return "bg-fallback"
                    }
                },
                screen() {
                    var e;
                    if (this.$ecast.role === "audience" && this.audience) switch (this.audience.kind) {
                        case "choices":
                            return this.audience.streamerMode ? {
                                name: "Choices",
                                props: {
                                    player: this.audience
                                }
                            } : {
                                name: "Playalong",
                                props: {
                                    audience: this.audience
                                },
                                on: {
                                    correct: () => {
                                        this.audienceInfo.torches != null && this.setAudienceTorches(this.audienceInfo.torches + 1)
                                    },
                                    incorrect: () => {
                                        this.audienceInfo.torches != null && this.setAudienceTorches(this.audienceInfo.torches - 1)
                                    }
                                }
                            };
                        case "postGame":
                            return {
                                name: "PostGame", props: {
                                    artifact: this.artifact,
                                    player: this.audience
                                }
                            };
                        case "survey":
                            return {
                                name: "Survey", props: {
                                    player: this.audience
                                }
                            };
                        case "waiting":
                            return {
                                name: "Waiting", props: {
                                    info: this.audienceInfo,
                                    player: this.audience,
                                    teams: this.teams
                                }, on: {
                                    reset: () => {
                                        this.audienceInfo.torches != null && this.setAudienceTorches(1)
                                    }
                                }
                            }
                    } else if (this.$ecast.role === "player" && this.player) switch (this.player.kind) {
                        case "choices":
                            return {
                                name: "Choices", props: {
                                    player: this.player
                                }
                            };
                        case "lobby":
                            return {
                                name: "Lobby", props: {
                                    info: this.info,
                                    player: this.player
                                }
                            };
                        case "postGame":
                            return {
                                name: "PostGame", props: {
                                    artifact: this.artifact,
                                    player: this.player
                                }
                            };
                        case "survey":
                            return {
                                name: "Survey", props: {
                                    player: this.player
                                }
                            };
                        case "waiting":
                            return {
                                name: "Waiting", props: {
                                    avatar: (e = this.info) == null ? void 0 : e.avatar,
                                    info: this.info,
                                    player: this.player,
                                    teams: this.teams
                                }
                            }
                    }
                    return {
                        name: "Waiting",
                        props: {},
                        on: {}
                    }
                },
                showAudienceNameHeader() {
                    var e, t;
                    return ((e = this.audience) == null ? void 0 : e.kind) === "survey" || ((t = this.audience) == null ? void 0 : t.kind) === "choices" && !this.audience.streamerMode
                },
                showPlayerNameHeader() {
                    var e;
                    return !(!this.info || ((e = this.player) == null ? void 0 : e.kind) !== "survey")
                }
            },
            watch: {
                audience: function() {
                    var t;
                    (t = this.audience) != null && t.streamerMode ? (this.audienceInfo.teamIndex = 1, this.audienceInfo.torches = this.teams && this.teams[1].torches) : this.audienceInfo.torches = $t.get("pm-torches", "code") ? JSON.parse($t.get("pm-torches", "code")) : 1
                },
                "player.kind": "setThemeColor",
                "audience.kind": "setThemeColor"
            },
            methods: {
                setAudienceTorches(e) {
                    this.audienceInfo.torches = Math.max(0, e), $t.isSupported && $t.set("pm-torches", JSON.stringify(this.audienceInfo.torches), "code")
                },
                setThemeColor(e) {
                    switch (e) {
                        case "choices":
                            break;
                        case "lobby":
                        case "survey":
                        case "waiting":
                            this.$setThemeColor("#5f2d60");
                            break;
                        case "postGame":
                        default:
                            this.$setThemeColor("#0e5767")
                    }
                }
            }
        }),
        Lie = {
            class: "constrain"
        };

    function kie(e, t, r, n, s, o) {
        var u;
        const c = vt("NameHeader");
        return F(), q("div", {
            class: Fe(["poll-mine", e.background])
        }, [z("div", Lie, [e.showPlayerNameHeader ? (F(), At(c, {
            key: 0,
            name: e.info.name,
            "team-index": e.info.teamIndex,
            torches: e.teams && e.teams[e.info.teamIndex] && e.teams[e.info.teamIndex].torches
        }, null, 8, ["name", "team-index", "torches"])) : e.showAudienceNameHeader ? (F(), At(c, {
            key: 1,
            name: e.audienceInfo.name,
            "team-index": e.audienceInfo.teamIndex,
            torches: e.audienceInfo.torches
        }, null, 8, ["name", "team-index", "torches"])) : Oe("", !0), (F(), At(Rh(e.screen.name), wl(e.screen.props, UL((u = e.screen.on) != null ? u : {})), null, 16))])], 2)
    }
    const Pie = qe(Nie, [
        ["render", kie]
    ]);
    Ute({
        MainView: Pie,
        messages: zte
    })
});
export default xie();
//# sourceMappingURL=b171c904.js.map