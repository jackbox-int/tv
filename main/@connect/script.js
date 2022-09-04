var iL = Object.defineProperty;
var sL = (e, t, n) => t in e ? iL(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n;
var aL = (e, t) => () => (t || e((t = {
    exports: {}
}).exports, t), t.exports);
var Re = (e, t, n) => (sL(e, typeof t != "symbol" ? t + "" : t, n), n);
var Ore = aL((Cre, Aw) => {
    const oL = function() {
        const t = document.createElement("link").relList;
        if (t && t.supports && t.supports("modulepreload")) return;
        for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
        new MutationObserver(s => {
            for (const o of s)
                if (o.type === "childList")
                    for (const c of o.addedNodes) c.tagName === "LINK" && c.rel === "modulepreload" && r(c)
        }).observe(document, {
            childList: !0,
            subtree: !0
        });

        function n(s) {
            const o = {};
            return s.integrity && (o.integrity = s.integrity), s.referrerpolicy && (o.referrerPolicy = s.referrerpolicy), s.crossorigin === "use-credentials" ? o.credentials = "include" : s.crossorigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o
        }

        function r(s) {
            if (s.ep) return;
            s.ep = !0;
            const o = n(s);
            fetch(s.href, o)
        }
    };
    oL();

    function vh(e, t) {
        const n = Object.create(null),
            r = e.split(",");
        for (let s = 0; s < r.length; s++) n[r[s]] = !0;
        return t ? s => !!n[s.toLowerCase()] : s => !!n[s]
    }
    const cL = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
        lL = vh(cL);

    function VE(e) {
        return !!e || e === ""
    }

    function ca(e) {
        if (Le(e)) {
            const t = {};
            for (let n = 0; n < e.length; n++) {
                const r = e[n],
                    s = Wt(r) ? dL(r) : ca(r);
                if (s)
                    for (const o in s) t[o] = s[o]
            }
            return t
        } else {
            if (Wt(e)) return e;
            if (kt(e)) return e
        }
    }
    const uL = /;(?![^(]*\))/g,
        fL = /:(.+)/;

    function dL(e) {
        const t = {};
        return e.split(uL).forEach(n => {
            if (n) {
                const r = n.split(fL);
                r.length > 1 && (t[r[0].trim()] = r[1].trim())
            }
        }), t
    }

    function Ye(e) {
        let t = "";
        if (Wt(e)) t = e;
        else if (Le(e))
            for (let n = 0; n < e.length; n++) {
                const r = Ye(e[n]);
                r && (t += r + " ")
            } else if (kt(e))
                for (const n in e) e[n] && (t += n + " ");
        return t.trim()
    }

    function hL(e) {
        if (!e) return null;
        let {
            class: t,
            style: n
        } = e;
        return t && !Wt(t) && (e.class = Ye(t)), n && (e.style = ca(n)), e
    }

    function pL(e, t) {
        if (e.length !== t.length) return !1;
        let n = !0;
        for (let r = 0; n && r < e.length; r++) n = us(e[r], t[r]);
        return n
    }

    function us(e, t) {
        if (e === t) return !0;
        let n = Ev(e),
            r = Ev(t);
        if (n || r) return n && r ? e.getTime() === t.getTime() : !1;
        if (n = io(e), r = io(t), n || r) return e === t;
        if (n = Le(e), r = Le(t), n || r) return n && r ? pL(e, t) : !1;
        if (n = kt(e), r = kt(t), n || r) {
            if (!n || !r) return !1;
            const s = Object.keys(e).length,
                o = Object.keys(t).length;
            if (s !== o) return !1;
            for (const c in e) {
                const u = e.hasOwnProperty(c),
                    f = t.hasOwnProperty(c);
                if (u && !f || !u && f || !us(e[c], t[c])) return !1
            }
        }
        return String(e) === String(t)
    }

    function _h(e, t) {
        return e.findIndex(n => us(n, t))
    }
    const Ce = e => Wt(e) ? e : e == null ? "" : Le(e) || kt(e) && (e.toString === zE || !Ke(e.toString)) ? JSON.stringify(e, YE, 2) : String(e),
        YE = (e, t) => t && t.__v_isRef ? YE(e, t.value) : Ws(t) ? {
            [`Map(${t.size})`]: [...t.entries()].reduce((n, [r, s]) => (n[`${r} =>`] = s, n), {})
        } : la(t) ? {
            [`Set(${t.size})`]: [...t.values()]
        } : kt(t) && !Le(t) && !XE(t) ? String(t) : t,
        _t = {},
        Gs = [],
        fr = () => {},
        gL = () => !1,
        mL = /^on[^a-z]/,
        ml = e => mL.test(e),
        yh = e => e.startsWith("onUpdate:"),
        en = Object.assign,
        Eh = (e, t) => {
            const n = e.indexOf(t);
            n > -1 && e.splice(n, 1)
        },
        vL = Object.prototype.hasOwnProperty,
        rt = (e, t) => vL.call(e, t),
        Le = Array.isArray,
        Ws = e => bo(e) === "[object Map]",
        la = e => bo(e) === "[object Set]",
        Ev = e => bo(e) === "[object Date]",
        Ke = e => typeof e == "function",
        Wt = e => typeof e == "string",
        io = e => typeof e == "symbol",
        kt = e => e !== null && typeof e == "object",
        qE = e => kt(e) && Ke(e.then) && Ke(e.catch),
        zE = Object.prototype.toString,
        bo = e => zE.call(e),
        _L = e => bo(e).slice(8, -1),
        XE = e => bo(e) === "[object Object]",
        bh = e => Wt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
        jc = vh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
        vl = e => {
            const t = Object.create(null);
            return n => t[n] || (t[n] = e(n))
        },
        yL = /-(\w)/g,
        Cr = vl(e => e.replace(yL, (t, n) => n ? n.toUpperCase() : "")),
        EL = /\B([A-Z])/g,
        fs = vl(e => e.replace(EL, "-$1").toLowerCase()),
        _l = vl(e => e.charAt(0).toUpperCase() + e.slice(1)),
        Ef = vl(e => e ? `on${_l(e)}` : ""),
        so = (e, t) => !Object.is(e, t),
        Hc = (e, t) => {
            for (let n = 0; n < e.length; n++) e[n](t)
        },
        Zc = (e, t, n) => {
            Object.defineProperty(e, t, {
                configurable: !0,
                enumerable: !1,
                value: n
            })
        },
        ao = e => {
            const t = parseFloat(e);
            return isNaN(t) ? e : t
        };
    let bv;
    const bL = () => bv || (bv = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
    let br;
    class JE {
        constructor(t = !1) {
            this.active = !0, this.effects = [], this.cleanups = [], !t && br && (this.parent = br, this.index = (br.scopes || (br.scopes = [])).push(this) - 1)
        }
        run(t) {
            if (this.active) {
                const n = br;
                try {
                    return br = this, t()
                } finally {
                    br = n
                }
            }
        }
        on() {
            br = this
        }
        off() {
            br = this.parent
        }
        stop(t) {
            if (this.active) {
                let n, r;
                for (n = 0, r = this.effects.length; n < r; n++) this.effects[n].stop();
                for (n = 0, r = this.cleanups.length; n < r; n++) this.cleanups[n]();
                if (this.scopes)
                    for (n = 0, r = this.scopes.length; n < r; n++) this.scopes[n].stop(!0);
                if (this.parent && !t) {
                    const s = this.parent.scopes.pop();
                    s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index)
                }
                this.active = !1
            }
        }
    }

    function TL(e) {
        return new JE(e)
    }

    function SL(e, t = br) {
        t && t.active && t.effects.push(e)
    }
    const Th = e => {
            const t = new Set(e);
            return t.w = 0, t.n = 0, t
        },
        QE = e => (e.w & _i) > 0,
        ZE = e => (e.n & _i) > 0,
        OL = ({
            deps: e
        }) => {
            if (e.length)
                for (let t = 0; t < e.length; t++) e[t].w |= _i
        },
        wL = e => {
            const {
                deps: t
            } = e;
            if (t.length) {
                let n = 0;
                for (let r = 0; r < t.length; r++) {
                    const s = t[r];
                    QE(s) && !ZE(s) ? s.delete(e) : t[n++] = s, s.w &= ~_i, s.n &= ~_i
                }
                t.length = n
            }
        },
        hd = new WeakMap;
    let Ha = 0,
        _i = 1;
    const pd = 30;
    let lr;
    const is = Symbol(""),
        gd = Symbol("");
    class Sh {
        constructor(t, n = null, r) {
            this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, SL(this, r)
        }
        run() {
            if (!this.active) return this.fn();
            let t = lr,
                n = pi;
            for (; t;) {
                if (t === this) return;
                t = t.parent
            }
            try {
                return this.parent = lr, lr = this, pi = !0, _i = 1 << ++Ha, Ha <= pd ? OL(this) : Tv(this), this.fn()
            } finally {
                Ha <= pd && wL(this), _i = 1 << --Ha, lr = this.parent, pi = n, this.parent = void 0, this.deferStop && this.stop()
            }
        }
        stop() {
            lr === this ? this.deferStop = !0 : this.active && (Tv(this), this.onStop && this.onStop(), this.active = !1)
        }
    }

    function Tv(e) {
        const {
            deps: t
        } = e;
        if (t.length) {
            for (let n = 0; n < t.length; n++) t[n].delete(e);
            t.length = 0
        }
    }
    let pi = !0;
    const eb = [];

    function ua() {
        eb.push(pi), pi = !1
    }

    function fa() {
        const e = eb.pop();
        pi = e === void 0 ? !0 : e
    }

    function Gn(e, t, n) {
        if (pi && lr) {
            let r = hd.get(e);
            r || hd.set(e, r = new Map);
            let s = r.get(n);
            s || r.set(n, s = Th()), tb(s)
        }
    }

    function tb(e, t) {
        let n = !1;
        Ha <= pd ? ZE(e) || (e.n |= _i, n = !QE(e)) : n = !e.has(lr), n && (e.add(lr), lr.deps.push(e))
    }

    function Vr(e, t, n, r, s, o) {
        const c = hd.get(e);
        if (!c) return;
        let u = [];
        if (t === "clear") u = [...c.values()];
        else if (n === "length" && Le(e)) c.forEach((f, h) => {
            (h === "length" || h >= r) && u.push(f)
        });
        else switch (n !== void 0 && u.push(c.get(n)), t) {
            case "add":
                Le(e) ? bh(n) && u.push(c.get("length")) : (u.push(c.get(is)), Ws(e) && u.push(c.get(gd)));
                break;
            case "delete":
                Le(e) || (u.push(c.get(is)), Ws(e) && u.push(c.get(gd)));
                break;
            case "set":
                Ws(e) && u.push(c.get(is));
                break
        }
        if (u.length === 1) u[0] && md(u[0]);
        else {
            const f = [];
            for (const h of u) h && f.push(...h);
            md(Th(f))
        }
    }

    function md(e, t) {
        const n = Le(e) ? e : [...e];
        for (const r of n) r.computed && Sv(r);
        for (const r of n) r.computed || Sv(r)
    }

    function Sv(e, t) {
        (e !== lr || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run())
    }
    const CL = vh("__proto__,__v_isRef,__isVue"),
        nb = new Set(Object.getOwnPropertyNames(Symbol).filter(e => e !== "arguments" && e !== "caller").map(e => Symbol[e]).filter(io)),
        AL = Oh(),
        IL = Oh(!1, !0),
        RL = Oh(!0),
        Ov = NL();

    function NL() {
        const e = {};
        return ["includes", "indexOf", "lastIndexOf"].forEach(t => {
            e[t] = function(...n) {
                const r = ot(this);
                for (let o = 0, c = this.length; o < c; o++) Gn(r, "get", o + "");
                const s = r[t](...n);
                return s === -1 || s === !1 ? r[t](...n.map(ot)) : s
            }
        }), ["push", "pop", "shift", "unshift", "splice"].forEach(t => {
            e[t] = function(...n) {
                ua();
                const r = ot(this)[t].apply(this, n);
                return fa(), r
            }
        }), e
    }

    function Oh(e = !1, t = !1) {
        return function(r, s, o) {
            if (s === "__v_isReactive") return !e;
            if (s === "__v_isReadonly") return e;
            if (s === "__v_isShallow") return t;
            if (s === "__v_raw" && o === (e ? t ? VL : ob : t ? ab : sb).get(r)) return r;
            const c = Le(r);
            if (!e && c && rt(Ov, s)) return Reflect.get(Ov, s, o);
            const u = Reflect.get(r, s, o);
            return (io(s) ? nb.has(s) : CL(s)) || (e || Gn(r, "get", s), t) ? u : on(u) ? c && bh(s) ? u : u.value : kt(u) ? e ? cb(u) : dr(u) : u
        }
    }
    const LL = rb(),
        $L = rb(!0);

    function rb(e = !1) {
        return function(n, r, s, o) {
            let c = n[r];
            if (oo(c) && on(c) && !on(s)) return !1;
            if (!e && !oo(s) && (vd(s) || (s = ot(s), c = ot(c)), !Le(n) && on(c) && !on(s))) return c.value = s, !0;
            const u = Le(n) && bh(r) ? Number(r) < n.length : rt(n, r),
                f = Reflect.set(n, r, s, o);
            return n === ot(o) && (u ? so(s, c) && Vr(n, "set", r, s) : Vr(n, "add", r, s)), f
        }
    }

    function PL(e, t) {
        const n = rt(e, t);
        e[t];
        const r = Reflect.deleteProperty(e, t);
        return r && n && Vr(e, "delete", t, void 0), r
    }

    function kL(e, t) {
        const n = Reflect.has(e, t);
        return (!io(t) || !nb.has(t)) && Gn(e, "has", t), n
    }

    function DL(e) {
        return Gn(e, "iterate", Le(e) ? "length" : is), Reflect.ownKeys(e)
    }
    const ib = {
            get: AL,
            set: LL,
            deleteProperty: PL,
            has: kL,
            ownKeys: DL
        },
        ML = {
            get: RL,
            set(e, t) {
                return !0
            },
            deleteProperty(e, t) {
                return !0
            }
        },
        xL = en({}, ib, {
            get: IL,
            set: $L
        }),
        wh = e => e,
        yl = e => Reflect.getPrototypeOf(e);

    function Sc(e, t, n = !1, r = !1) {
        e = e.__v_raw;
        const s = ot(e),
            o = ot(t);
        n || (t !== o && Gn(s, "get", t), Gn(s, "get", o));
        const {
            has: c
        } = yl(s), u = r ? wh : n ? Ih : co;
        if (c.call(s, t)) return u(e.get(t));
        if (c.call(s, o)) return u(e.get(o));
        e !== s && e.get(t)
    }

    function Oc(e, t = !1) {
        const n = this.__v_raw,
            r = ot(n),
            s = ot(e);
        return t || (e !== s && Gn(r, "has", e), Gn(r, "has", s)), e === s ? n.has(e) : n.has(e) || n.has(s)
    }

    function wc(e, t = !1) {
        return e = e.__v_raw, !t && Gn(ot(e), "iterate", is), Reflect.get(e, "size", e)
    }

    function wv(e) {
        e = ot(e);
        const t = ot(this);
        return yl(t).has.call(t, e) || (t.add(e), Vr(t, "add", e, e)), this
    }

    function Cv(e, t) {
        t = ot(t);
        const n = ot(this),
            {
                has: r,
                get: s
            } = yl(n);
        let o = r.call(n, e);
        o || (e = ot(e), o = r.call(n, e));
        const c = s.call(n, e);
        return n.set(e, t), o ? so(t, c) && Vr(n, "set", e, t) : Vr(n, "add", e, t), this
    }

    function Av(e) {
        const t = ot(this),
            {
                has: n,
                get: r
            } = yl(t);
        let s = n.call(t, e);
        s || (e = ot(e), s = n.call(t, e)), r && r.call(t, e);
        const o = t.delete(e);
        return s && Vr(t, "delete", e, void 0), o
    }

    function Iv() {
        const e = ot(this),
            t = e.size !== 0,
            n = e.clear();
        return t && Vr(e, "clear", void 0, void 0), n
    }

    function Cc(e, t) {
        return function(r, s) {
            const o = this,
                c = o.__v_raw,
                u = ot(c),
                f = t ? wh : e ? Ih : co;
            return !e && Gn(u, "iterate", is), c.forEach((h, g) => r.call(s, f(h), f(g), o))
        }
    }

    function Ac(e, t, n) {
        return function(...r) {
            const s = this.__v_raw,
                o = ot(s),
                c = Ws(o),
                u = e === "entries" || e === Symbol.iterator && c,
                f = e === "keys" && c,
                h = s[e](...r),
                g = n ? wh : t ? Ih : co;
            return !t && Gn(o, "iterate", f ? gd : is), {
                next() {
                    const {
                        value: y,
                        done: b
                    } = h.next();
                    return b ? {
                        value: y,
                        done: b
                    } : {
                        value: u ? [g(y[0]), g(y[1])] : g(y),
                        done: b
                    }
                },
                [Symbol.iterator]() {
                    return this
                }
            }
        }
    }

    function ri(e) {
        return function(...t) {
            return e === "delete" ? !1 : this
        }
    }

    function UL() {
        const e = {
                get(o) {
                    return Sc(this, o)
                },
                get size() {
                    return wc(this)
                },
                has: Oc,
                add: wv,
                set: Cv,
                delete: Av,
                clear: Iv,
                forEach: Cc(!1, !1)
            },
            t = {
                get(o) {
                    return Sc(this, o, !1, !0)
                },
                get size() {
                    return wc(this)
                },
                has: Oc,
                add: wv,
                set: Cv,
                delete: Av,
                clear: Iv,
                forEach: Cc(!1, !0)
            },
            n = {
                get(o) {
                    return Sc(this, o, !0)
                },
                get size() {
                    return wc(this, !0)
                },
                has(o) {
                    return Oc.call(this, o, !0)
                },
                add: ri("add"),
                set: ri("set"),
                delete: ri("delete"),
                clear: ri("clear"),
                forEach: Cc(!0, !1)
            },
            r = {
                get(o) {
                    return Sc(this, o, !0, !0)
                },
                get size() {
                    return wc(this, !0)
                },
                has(o) {
                    return Oc.call(this, o, !0)
                },
                add: ri("add"),
                set: ri("set"),
                delete: ri("delete"),
                clear: ri("clear"),
                forEach: Cc(!0, !0)
            };
        return ["keys", "values", "entries", Symbol.iterator].forEach(o => {
            e[o] = Ac(o, !1, !1), n[o] = Ac(o, !0, !1), t[o] = Ac(o, !1, !0), r[o] = Ac(o, !0, !0)
        }), [e, n, t, r]
    }
    const [FL, BL, GL, WL] = UL();

    function Ch(e, t) {
        const n = t ? e ? WL : GL : e ? BL : FL;
        return (r, s, o) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? r : Reflect.get(rt(n, s) && s in r ? n : r, s, o)
    }
    const jL = {
            get: Ch(!1, !1)
        },
        HL = {
            get: Ch(!1, !0)
        },
        KL = {
            get: Ch(!0, !1)
        },
        sb = new WeakMap,
        ab = new WeakMap,
        ob = new WeakMap,
        VL = new WeakMap;

    function YL(e) {
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

    function qL(e) {
        return e.__v_skip || !Object.isExtensible(e) ? 0 : YL(_L(e))
    }

    function dr(e) {
        return oo(e) ? e : Ah(e, !1, ib, jL, sb)
    }

    function zL(e) {
        return Ah(e, !1, xL, HL, ab)
    }

    function cb(e) {
        return Ah(e, !0, ML, KL, ob)
    }

    function Ah(e, t, n, r, s) {
        if (!kt(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
        const o = s.get(e);
        if (o) return o;
        const c = qL(e);
        if (c === 0) return e;
        const u = new Proxy(e, c === 2 ? r : n);
        return s.set(e, u), u
    }

    function js(e) {
        return oo(e) ? js(e.__v_raw) : !!(e && e.__v_isReactive)
    }

    function oo(e) {
        return !!(e && e.__v_isReadonly)
    }

    function vd(e) {
        return !!(e && e.__v_isShallow)
    }

    function lb(e) {
        return js(e) || oo(e)
    }

    function ot(e) {
        const t = e && e.__v_raw;
        return t ? ot(t) : e
    }

    function ub(e) {
        return Zc(e, "__v_skip", !0), e
    }
    const co = e => kt(e) ? dr(e) : e,
        Ih = e => kt(e) ? cb(e) : e;

    function fb(e) {
        pi && lr && (e = ot(e), tb(e.dep || (e.dep = Th())))
    }

    function db(e, t) {
        e = ot(e), e.dep && md(e.dep)
    }

    function on(e) {
        return !!(e && e.__v_isRef === !0)
    }

    function et(e) {
        return hb(e, !1)
    }

    function XL(e) {
        return hb(e, !0)
    }

    function hb(e, t) {
        return on(e) ? e : new JL(e, t)
    }
    class JL {
        constructor(t, n) {
            this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : ot(t), this._value = n ? t : co(t)
        }
        get value() {
            return fb(this), this._value
        }
        set value(t) {
            t = this.__v_isShallow ? t : ot(t), so(t, this._rawValue) && (this._rawValue = t, this._value = this.__v_isShallow ? t : co(t), db(this))
        }
    }

    function QL(e) {
        return on(e) ? e.value : e
    }
    const ZL = {
        get: (e, t, n) => QL(Reflect.get(e, t, n)),
        set: (e, t, n, r) => {
            const s = e[t];
            return on(s) && !on(n) ? (s.value = n, !0) : Reflect.set(e, t, n, r)
        }
    };

    function pb(e) {
        return js(e) ? e : new Proxy(e, ZL)
    }
    class e$ {
        constructor(t, n, r, s) {
            this._setter = n, this.dep = void 0, this.__v_isRef = !0, this._dirty = !0, this.effect = new Sh(t, () => {
                this._dirty || (this._dirty = !0, db(this))
            }), this.effect.computed = this, this.effect.active = this._cacheable = !s, this.__v_isReadonly = r
        }
        get value() {
            const t = ot(this);
            return fb(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value
        }
        set value(t) {
            this._setter(t)
        }
    }

    function t$(e, t, n = !1) {
        let r, s;
        const o = Ke(e);
        return o ? (r = e, s = fr) : (r = e.get, s = e.set), new e$(r, s, o || !s, n)
    }

    function gi(e, t, n, r) {
        let s;
        try {
            s = r ? e(...r) : e()
        } catch (o) {
            El(o, t, n)
        }
        return s
    }

    function tr(e, t, n, r) {
        if (Ke(e)) {
            const o = gi(e, t, n, r);
            return o && qE(o) && o.catch(c => {
                El(c, t, n)
            }), o
        }
        const s = [];
        for (let o = 0; o < e.length; o++) s.push(tr(e[o], t, n, r));
        return s
    }

    function El(e, t, n, r = !0) {
        const s = t ? t.vnode : null;
        if (t) {
            let o = t.parent;
            const c = t.proxy,
                u = n;
            for (; o;) {
                const h = o.ec;
                if (h) {
                    for (let g = 0; g < h.length; g++)
                        if (h[g](e, c, u) === !1) return
                }
                o = o.parent
            }
            const f = t.appContext.config.errorHandler;
            if (f) {
                gi(f, null, 10, [e, c, u]);
                return
            }
        }
        n$(e, n, s, r)
    }

    function n$(e, t, n, r = !0) {
        console.error(e)
    }
    let el = !1,
        _d = !1;
    const Fn = [];
    let jr = 0;
    const qa = [];
    let Ka = null,
        Ps = 0;
    const za = [];
    let oi = null,
        ks = 0;
    const gb = Promise.resolve();
    let Rh = null,
        yd = null;

    function mb(e) {
        const t = Rh || gb;
        return e ? t.then(this ? e.bind(this) : e) : t
    }

    function r$(e) {
        let t = jr + 1,
            n = Fn.length;
        for (; t < n;) {
            const r = t + n >>> 1;
            lo(Fn[r]) < e ? t = r + 1 : n = r
        }
        return t
    }

    function vb(e) {
        (!Fn.length || !Fn.includes(e, el && e.allowRecurse ? jr + 1 : jr)) && e !== yd && (e.id == null ? Fn.push(e) : Fn.splice(r$(e.id), 0, e), _b())
    }

    function _b() {
        !el && !_d && (_d = !0, Rh = gb.then(bb))
    }

    function i$(e) {
        const t = Fn.indexOf(e);
        t > jr && Fn.splice(t, 1)
    }

    function yb(e, t, n, r) {
        Le(e) ? n.push(...e) : (!t || !t.includes(e, e.allowRecurse ? r + 1 : r)) && n.push(e), _b()
    }

    function s$(e) {
        yb(e, Ka, qa, Ps)
    }

    function a$(e) {
        yb(e, oi, za, ks)
    }

    function bl(e, t = null) {
        if (qa.length) {
            for (yd = t, Ka = [...new Set(qa)], qa.length = 0, Ps = 0; Ps < Ka.length; Ps++) Ka[Ps]();
            Ka = null, Ps = 0, yd = null, bl(e, t)
        }
    }

    function Eb(e) {
        if (bl(), za.length) {
            const t = [...new Set(za)];
            if (za.length = 0, oi) {
                oi.push(...t);
                return
            }
            for (oi = t, oi.sort((n, r) => lo(n) - lo(r)), ks = 0; ks < oi.length; ks++) oi[ks]();
            oi = null, ks = 0
        }
    }
    const lo = e => e.id == null ? 1 / 0 : e.id;

    function bb(e) {
        _d = !1, el = !0, bl(e), Fn.sort((n, r) => lo(n) - lo(r));
        const t = fr;
        try {
            for (jr = 0; jr < Fn.length; jr++) {
                const n = Fn[jr];
                n && n.active !== !1 && gi(n, null, 14)
            }
        } finally {
            jr = 0, Fn.length = 0, Eb(), el = !1, Rh = null, (Fn.length || qa.length || za.length) && bb(e)
        }
    }

    function o$(e, t, ...n) {
        if (e.isUnmounted) return;
        const r = e.vnode.props || _t;
        let s = n;
        const o = t.startsWith("update:"),
            c = o && t.slice(7);
        if (c && c in r) {
            const g = `${c==="modelValue"?"model":c}Modifiers`,
                {
                    number: y,
                    trim: b
                } = r[g] || _t;
            b && (s = n.map(C => C.trim())), y && (s = n.map(ao))
        }
        let u, f = r[u = Ef(t)] || r[u = Ef(Cr(t))];
        !f && o && (f = r[u = Ef(fs(t))]), f && tr(f, e, 6, s);
        const h = r[u + "Once"];
        if (h) {
            if (!e.emitted) e.emitted = {};
            else if (e.emitted[u]) return;
            e.emitted[u] = !0, tr(h, e, 6, s)
        }
    }

    function Tb(e, t, n = !1) {
        const r = t.emitsCache,
            s = r.get(e);
        if (s !== void 0) return s;
        const o = e.emits;
        let c = {},
            u = !1;
        if (!Ke(e)) {
            const f = h => {
                const g = Tb(h, t, !0);
                g && (u = !0, en(c, g))
            };
            !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f)
        }
        return !o && !u ? (r.set(e, null), null) : (Le(o) ? o.forEach(f => c[f] = null) : en(c, o), r.set(e, c), c)
    }

    function Tl(e, t) {
        return !e || !ml(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), rt(e, t[0].toLowerCase() + t.slice(1)) || rt(e, fs(t)) || rt(e, t))
    }
    let er = null,
        Sl = null;

    function tl(e) {
        const t = er;
        return er = e, Sl = e && e.type.__scopeId || null, t
    }

    function da(e) {
        Sl = e
    }

    function ha() {
        Sl = null
    }

    function Kr(e, t = er, n) {
        if (!t || e._n) return e;
        const r = (...s) => {
            r._d && Fv(-1);
            const o = tl(t),
                c = e(...s);
            return tl(o), r._d && Fv(1), c
        };
        return r._n = !0, r._c = !0, r._d = !0, r
    }

    function bf(e) {
        const {
            type: t,
            vnode: n,
            proxy: r,
            withProxy: s,
            props: o,
            propsOptions: [c],
            slots: u,
            attrs: f,
            emit: h,
            render: g,
            renderCache: y,
            data: b,
            setupState: C,
            ctx: R,
            inheritAttrs: M
        } = e;
        let W, I;
        const K = tl(e);
        try {
            if (n.shapeFlag & 4) {
                const j = s || r;
                W = Sr(g.call(j, j, y, o, C, b, R)), I = f
            } else {
                const j = t;
                W = Sr(j.length > 1 ? j(o, {
                    attrs: f,
                    slots: u,
                    emit: h
                }) : j(o, null)), I = t.props ? f : c$(f)
            }
        } catch (j) {
            Xa.length = 0, El(j, e, 1), W = ft(hr)
        }
        let q = W;
        if (I && M !== !1) {
            const j = Object.keys(I),
                {
                    shapeFlag: G
                } = q;
            j.length && G & 7 && (c && j.some(yh) && (I = l$(I, c)), q = yi(q, I))
        }
        return n.dirs && (q = yi(q), q.dirs = q.dirs ? q.dirs.concat(n.dirs) : n.dirs), n.transition && (q.transition = n.transition), W = q, tl(K), W
    }
    const c$ = e => {
            let t;
            for (const n in e)(n === "class" || n === "style" || ml(n)) && ((t || (t = {}))[n] = e[n]);
            return t
        },
        l$ = (e, t) => {
            const n = {};
            for (const r in e)(!yh(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
            return n
        };

    function u$(e, t, n) {
        const {
            props: r,
            children: s,
            component: o
        } = e, {
            props: c,
            children: u,
            patchFlag: f
        } = t, h = o.emitsOptions;
        if (t.dirs || t.transition) return !0;
        if (n && f >= 0) {
            if (f & 1024) return !0;
            if (f & 16) return r ? Rv(r, c, h) : !!c;
            if (f & 8) {
                const g = t.dynamicProps;
                for (let y = 0; y < g.length; y++) {
                    const b = g[y];
                    if (c[b] !== r[b] && !Tl(h, b)) return !0
                }
            }
        } else return (s || u) && (!u || !u.$stable) ? !0 : r === c ? !1 : r ? c ? Rv(r, c, h) : !0 : !!c;
        return !1
    }

    function Rv(e, t, n) {
        const r = Object.keys(t);
        if (r.length !== Object.keys(e).length) return !0;
        for (let s = 0; s < r.length; s++) {
            const o = r[s];
            if (t[o] !== e[o] && !Tl(n, o)) return !0
        }
        return !1
    }

    function f$({
        vnode: e,
        parent: t
    }, n) {
        for (; t && t.subTree === e;)(e = t.vnode).el = n, t = t.parent
    }
    const d$ = e => e.__isSuspense;

    function h$(e, t) {
        t && t.pendingBranch ? Le(e) ? t.effects.push(...e) : t.effects.push(e) : a$(e)
    }

    function Fr(e, t) {
        if (Zt) {
            let n = Zt.provides;
            const r = Zt.parent && Zt.parent.provides;
            r === n && (n = Zt.provides = Object.create(r)), n[e] = t
        }
    }

    function hn(e, t, n = !1) {
        const r = Zt || er;
        if (r) {
            const s = r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides;
            if (s && e in s) return s[e];
            if (arguments.length > 1) return n && Ke(t) ? t.call(r.proxy) : t
        }
    }

    function p$(e, t) {
        return Nh(e, null, t)
    }
    const Nv = {};

    function mi(e, t, n) {
        return Nh(e, t, n)
    }

    function Nh(e, t, {
        immediate: n,
        deep: r,
        flush: s,
        onTrack: o,
        onTrigger: c
    } = _t) {
        const u = Zt;
        let f, h = !1,
            g = !1;
        if (on(e) ? (f = () => e.value, h = vd(e)) : js(e) ? (f = () => e, r = !0) : Le(e) ? (g = !0, h = e.some(I => js(I) || vd(I)), f = () => e.map(I => {
                if (on(I)) return I.value;
                if (js(I)) return rs(I);
                if (Ke(I)) return gi(I, u, 2)
            })) : Ke(e) ? t ? f = () => gi(e, u, 2) : f = () => {
                if (!(u && u.isUnmounted)) return y && y(), tr(e, u, 3, [b])
            } : f = fr, t && r) {
            const I = f;
            f = () => rs(I())
        }
        let y, b = I => {
            y = W.onStop = () => {
                gi(I, u, 4)
            }
        };
        if (po) return b = fr, t ? n && tr(t, u, 3, [f(), g ? [] : void 0, b]) : f(), fr;
        let C = g ? [] : Nv;
        const R = () => {
            if (!!W.active)
                if (t) {
                    const I = W.run();
                    (r || h || (g ? I.some((K, q) => so(K, C[q])) : so(I, C))) && (y && y(), tr(t, u, 3, [I, C === Nv ? void 0 : C, b]), C = I)
                } else W.run()
        };
        R.allowRecurse = !!t;
        let M;
        s === "sync" ? M = R : s === "post" ? M = () => Rn(R, u && u.suspense) : M = () => s$(R);
        const W = new Sh(f, M);
        return t ? n ? R() : C = W.run() : s === "post" ? Rn(W.run.bind(W), u && u.suspense) : W.run(), () => {
            W.stop(), u && u.scope && Eh(u.scope.effects, W)
        }
    }

    function g$(e, t, n) {
        const r = this.proxy,
            s = Wt(e) ? e.includes(".") ? Sb(r, e) : () => r[e] : e.bind(r, r);
        let o;
        Ke(t) ? o = t : (o = t.handler, n = t);
        const c = Zt;
        Zs(this);
        const u = Nh(s, o.bind(r), n);
        return c ? Zs(c) : ss(), u
    }

    function Sb(e, t) {
        const n = t.split(".");
        return () => {
            let r = e;
            for (let s = 0; s < n.length && r; s++) r = r[n[s]];
            return r
        }
    }

    function rs(e, t) {
        if (!kt(e) || e.__v_skip || (t = t || new Set, t.has(e))) return e;
        if (t.add(e), on(e)) rs(e.value, t);
        else if (Le(e))
            for (let n = 0; n < e.length; n++) rs(e[n], t);
        else if (la(e) || Ws(e)) e.forEach(n => {
            rs(n, t)
        });
        else if (XE(e))
            for (const n in e) rs(e[n], t);
        return e
    }

    function Ob() {
        const e = {
            isMounted: !1,
            isLeaving: !1,
            isUnmounting: !1,
            leavingVNodes: new Map
        };
        return Cl(() => {
            e.isMounted = !0
        }), Nb(() => {
            e.isUnmounting = !0
        }), e
    }
    const Zn = [Function, Array],
        m$ = {
            name: "BaseTransition",
            props: {
                mode: String,
                appear: Boolean,
                persisted: Boolean,
                onBeforeEnter: Zn,
                onEnter: Zn,
                onAfterEnter: Zn,
                onEnterCancelled: Zn,
                onBeforeLeave: Zn,
                onLeave: Zn,
                onAfterLeave: Zn,
                onLeaveCancelled: Zn,
                onBeforeAppear: Zn,
                onAppear: Zn,
                onAfterAppear: Zn,
                onAppearCancelled: Zn
            },
            setup(e, {
                slots: t
            }) {
                const n = Ei(),
                    r = Ob();
                let s;
                return () => {
                    const o = t.default && Lh(t.default(), !0);
                    if (!o || !o.length) return;
                    let c = o[0];
                    if (o.length > 1) {
                        for (const M of o)
                            if (M.type !== hr) {
                                c = M;
                                break
                            }
                    }
                    const u = ot(e),
                        {
                            mode: f
                        } = u;
                    if (r.isLeaving) return Tf(c);
                    const h = Lv(c);
                    if (!h) return Tf(c);
                    const g = uo(h, u, r, n);
                    fo(h, g);
                    const y = n.subTree,
                        b = y && Lv(y);
                    let C = !1;
                    const {
                        getTransitionKey: R
                    } = h.type;
                    if (R) {
                        const M = R();
                        s === void 0 ? s = M : M !== s && (s = M, C = !0)
                    }
                    if (b && b.type !== hr && (!Zi(h, b) || C)) {
                        const M = uo(b, u, r, n);
                        if (fo(b, M), f === "out-in") return r.isLeaving = !0, M.afterLeave = () => {
                            r.isLeaving = !1, n.update()
                        }, Tf(c);
                        f === "in-out" && h.type !== hr && (M.delayLeave = (W, I, K) => {
                            const q = Cb(r, b);
                            q[String(b.key)] = b, W._leaveCb = () => {
                                I(), W._leaveCb = void 0, delete g.delayedLeave
                            }, g.delayedLeave = K
                        })
                    }
                    return c
                }
            }
        },
        wb = m$;

    function Cb(e, t) {
        const {
            leavingVNodes: n
        } = e;
        let r = n.get(t.type);
        return r || (r = Object.create(null), n.set(t.type, r)), r
    }

    function uo(e, t, n, r) {
        const {
            appear: s,
            mode: o,
            persisted: c = !1,
            onBeforeEnter: u,
            onEnter: f,
            onAfterEnter: h,
            onEnterCancelled: g,
            onBeforeLeave: y,
            onLeave: b,
            onAfterLeave: C,
            onLeaveCancelled: R,
            onBeforeAppear: M,
            onAppear: W,
            onAfterAppear: I,
            onAppearCancelled: K
        } = t, q = String(e.key), j = Cb(n, e), G = (le, ue) => {
            le && tr(le, r, 9, ue)
        }, se = (le, ue) => {
            const Ie = ue[1];
            G(le, ue), Le(le) ? le.every(be => be.length <= 1) && Ie() : le.length <= 1 && Ie()
        }, ce = {
            mode: o,
            persisted: c,
            beforeEnter(le) {
                let ue = u;
                if (!n.isMounted)
                    if (s) ue = M || u;
                    else return;
                le._leaveCb && le._leaveCb(!0);
                const Ie = j[q];
                Ie && Zi(e, Ie) && Ie.el._leaveCb && Ie.el._leaveCb(), G(ue, [le])
            },
            enter(le) {
                let ue = f,
                    Ie = h,
                    be = g;
                if (!n.isMounted)
                    if (s) ue = W || f, Ie = I || h, be = K || g;
                    else return;
                let fe = !1;
                const Oe = le._enterCb = F => {
                    fe || (fe = !0, F ? G(be, [le]) : G(Ie, [le]), ce.delayedLeave && ce.delayedLeave(), le._enterCb = void 0)
                };
                ue ? se(ue, [le, Oe]) : Oe()
            },
            leave(le, ue) {
                const Ie = String(e.key);
                if (le._enterCb && le._enterCb(!0), n.isUnmounting) return ue();
                G(y, [le]);
                let be = !1;
                const fe = le._leaveCb = Oe => {
                    be || (be = !0, ue(), Oe ? G(R, [le]) : G(C, [le]), le._leaveCb = void 0, j[Ie] === e && delete j[Ie])
                };
                j[Ie] = e, b ? se(b, [le, fe]) : fe()
            },
            clone(le) {
                return uo(le, t, n, r)
            }
        };
        return ce
    }

    function Tf(e) {
        if (Ol(e)) return e = yi(e), e.children = null, e
    }

    function Lv(e) {
        return Ol(e) ? e.children ? e.children[0] : void 0 : e
    }

    function fo(e, t) {
        e.shapeFlag & 6 && e.component ? fo(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
    }

    function Lh(e, t = !1, n) {
        let r = [],
            s = 0;
        for (let o = 0; o < e.length; o++) {
            let c = e[o];
            const u = n == null ? c.key : String(n) + String(c.key != null ? c.key : o);
            c.type === ut ? (c.patchFlag & 128 && s++, r = r.concat(Lh(c.children, t, u))) : (t || c.type !== hr) && r.push(u != null ? yi(c, {
                key: u
            }) : c)
        }
        if (s > 1)
            for (let o = 0; o < r.length; o++) r[o].patchFlag = -2;
        return r
    }

    function ze(e) {
        return Ke(e) ? {
            setup: e,
            name: e.name
        } : e
    }
    const Kc = e => !!e.type.__asyncLoader,
        Ol = e => e.type.__isKeepAlive;

    function v$(e, t) {
        Ab(e, "a", t)
    }

    function _$(e, t) {
        Ab(e, "da", t)
    }

    function Ab(e, t, n = Zt) {
        const r = e.__wdc || (e.__wdc = () => {
            let s = n;
            for (; s;) {
                if (s.isDeactivated) return;
                s = s.parent
            }
            return e()
        });
        if (wl(t, r, n), n) {
            let s = n.parent;
            for (; s && s.parent;) Ol(s.parent.vnode) && y$(r, t, n, s), s = s.parent
        }
    }

    function y$(e, t, n, r) {
        const s = wl(t, e, r, !0);
        Al(() => {
            Eh(r[t], s)
        }, n)
    }

    function wl(e, t, n = Zt, r = !1) {
        if (n) {
            const s = n[e] || (n[e] = []),
                o = t.__weh || (t.__weh = (...c) => {
                    if (n.isUnmounted) return;
                    ua(), Zs(n);
                    const u = tr(t, n, e, c);
                    return ss(), fa(), u
                });
            return r ? s.unshift(o) : s.push(o), o
        }
    }
    const Yr = e => (t, n = Zt) => (!po || e === "sp") && wl(e, t, n),
        Ib = Yr("bm"),
        Cl = Yr("m"),
        E$ = Yr("bu"),
        Rb = Yr("u"),
        Nb = Yr("bum"),
        Al = Yr("um"),
        b$ = Yr("sp"),
        T$ = Yr("rtg"),
        S$ = Yr("rtc");

    function O$(e, t = Zt) {
        wl("ec", e, t)
    }

    function je(e, t) {
        const n = er;
        if (n === null) return e;
        const r = Nl(n) || n.proxy,
            s = e.dirs || (e.dirs = []);
        for (let o = 0; o < t.length; o++) {
            let [c, u, f, h = _t] = t[o];
            Ke(c) && (c = {
                mounted: c,
                updated: c
            }), c.deep && rs(u), s.push({
                dir: c,
                instance: r,
                value: u,
                oldValue: void 0,
                arg: f,
                modifiers: h
            })
        }
        return e
    }

    function Hi(e, t, n, r) {
        const s = e.dirs,
            o = t && t.dirs;
        for (let c = 0; c < s.length; c++) {
            const u = s[c];
            o && (u.oldValue = o[c].value);
            let f = u.dir[r];
            f && (ua(), tr(f, n, 8, [e.el, u, e, t]), fa())
        }
    }
    const $h = "components",
        w$ = "directives";

    function Qt(e, t) {
        return Ph($h, e, !0, t) || e
    }
    const Lb = Symbol();

    function C$(e) {
        return Wt(e) ? Ph($h, e, !1) || e : e || Lb
    }

    function gn(e) {
        return Ph(w$, e)
    }

    function Ph(e, t, n = !0, r = !1) {
        const s = er || Zt;
        if (s) {
            const o = s.type;
            if (e === $h) {
                const u = tP(o, !1);
                if (u && (u === t || u === Cr(t) || u === _l(Cr(t)))) return o
            }
            const c = $v(s[e] || o[e], t) || $v(s.appContext[e], t);
            return !c && r ? o : c
        }
    }

    function $v(e, t) {
        return e && (e[t] || e[Cr(t)] || e[_l(Cr(t))])
    }

    function Ar(e, t, n, r) {
        let s;
        const o = n && n[r];
        if (Le(e) || Wt(e)) {
            s = new Array(e.length);
            for (let c = 0, u = e.length; c < u; c++) s[c] = t(e[c], c, void 0, o && o[c])
        } else if (typeof e == "number") {
            s = new Array(e);
            for (let c = 0; c < e; c++) s[c] = t(c + 1, c, void 0, o && o[c])
        } else if (kt(e))
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
        return n && (n[r] = s), s
    }
    const Ed = e => e ? jb(e) ? Nl(e) || e.proxy : Ed(e.parent) : null,
        nl = en(Object.create(null), {
            $: e => e,
            $el: e => e.vnode.el,
            $data: e => e.data,
            $props: e => e.props,
            $attrs: e => e.attrs,
            $slots: e => e.slots,
            $refs: e => e.refs,
            $parent: e => Ed(e.parent),
            $root: e => Ed(e.root),
            $emit: e => e.emit,
            $options: e => Pb(e),
            $forceUpdate: e => e.f || (e.f = () => vb(e.update)),
            $nextTick: e => e.n || (e.n = mb.bind(e.proxy)),
            $watch: e => g$.bind(e)
        }),
        A$ = {
            get({
                _: e
            }, t) {
                const {
                    ctx: n,
                    setupState: r,
                    data: s,
                    props: o,
                    accessCache: c,
                    type: u,
                    appContext: f
                } = e;
                let h;
                if (t[0] !== "$") {
                    const C = c[t];
                    if (C !== void 0) switch (C) {
                        case 1:
                            return r[t];
                        case 2:
                            return s[t];
                        case 4:
                            return n[t];
                        case 3:
                            return o[t]
                    } else {
                        if (r !== _t && rt(r, t)) return c[t] = 1, r[t];
                        if (s !== _t && rt(s, t)) return c[t] = 2, s[t];
                        if ((h = e.propsOptions[0]) && rt(h, t)) return c[t] = 3, o[t];
                        if (n !== _t && rt(n, t)) return c[t] = 4, n[t];
                        bd && (c[t] = 0)
                    }
                }
                const g = nl[t];
                let y, b;
                if (g) return t === "$attrs" && Gn(e, "get", t), g(e);
                if ((y = u.__cssModules) && (y = y[t])) return y;
                if (n !== _t && rt(n, t)) return c[t] = 4, n[t];
                if (b = f.config.globalProperties, rt(b, t)) return b[t]
            },
            set({
                _: e
            }, t, n) {
                const {
                    data: r,
                    setupState: s,
                    ctx: o
                } = e;
                return s !== _t && rt(s, t) ? (s[t] = n, !0) : r !== _t && rt(r, t) ? (r[t] = n, !0) : rt(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0)
            },
            has({
                _: {
                    data: e,
                    setupState: t,
                    accessCache: n,
                    ctx: r,
                    appContext: s,
                    propsOptions: o
                }
            }, c) {
                let u;
                return !!n[c] || e !== _t && rt(e, c) || t !== _t && rt(t, c) || (u = o[0]) && rt(u, c) || rt(r, c) || rt(nl, c) || rt(s.config.globalProperties, c)
            },
            defineProperty(e, t, n) {
                return n.get != null ? e._.accessCache[t] = 0 : rt(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n)
            }
        };
    let bd = !0;

    function I$(e) {
        const t = Pb(e),
            n = e.proxy,
            r = e.ctx;
        bd = !1, t.beforeCreate && Pv(t.beforeCreate, e, "bc");
        const {
            data: s,
            computed: o,
            methods: c,
            watch: u,
            provide: f,
            inject: h,
            created: g,
            beforeMount: y,
            mounted: b,
            beforeUpdate: C,
            updated: R,
            activated: M,
            deactivated: W,
            beforeDestroy: I,
            beforeUnmount: K,
            destroyed: q,
            unmounted: j,
            render: G,
            renderTracked: se,
            renderTriggered: ce,
            errorCaptured: le,
            serverPrefetch: ue,
            expose: Ie,
            inheritAttrs: be,
            components: fe,
            directives: Oe,
            filters: F
        } = t;
        if (h && R$(h, r, null, e.appContext.config.unwrapInjectedRef), c)
            for (const _e in c) {
                const me = c[_e];
                Ke(me) && (r[_e] = me.bind(n))
            }
        if (s) {
            const _e = s.call(n, n);
            kt(_e) && (e.data = dr(_e))
        }
        if (bd = !0, o)
            for (const _e in o) {
                const me = o[_e],
                    Se = Ke(me) ? me.bind(n, n) : Ke(me.get) ? me.get.bind(n, n) : fr,
                    Me = !Ke(me) && Ke(me.set) ? me.set.bind(n) : fr,
                    Fe = Sn({
                        get: Se,
                        set: Me
                    });
                Object.defineProperty(r, _e, {
                    enumerable: !0,
                    configurable: !0,
                    get: () => Fe.value,
                    set: Je => Fe.value = Je
                })
            }
        if (u)
            for (const _e in u) $b(u[_e], r, n, _e);
        if (f) {
            const _e = Ke(f) ? f.call(n) : f;
            Reflect.ownKeys(_e).forEach(me => {
                Fr(me, _e[me])
            })
        }
        g && Pv(g, e, "c");

        function de(_e, me) {
            Le(me) ? me.forEach(Se => _e(Se.bind(n))) : me && _e(me.bind(n))
        }
        if (de(Ib, y), de(Cl, b), de(E$, C), de(Rb, R), de(v$, M), de(_$, W), de(O$, le), de(S$, se), de(T$, ce), de(Nb, K), de(Al, j), de(b$, ue), Le(Ie))
            if (Ie.length) {
                const _e = e.exposed || (e.exposed = {});
                Ie.forEach(me => {
                    Object.defineProperty(_e, me, {
                        get: () => n[me],
                        set: Se => n[me] = Se
                    })
                })
            } else e.exposed || (e.exposed = {});
        G && e.render === fr && (e.render = G), be != null && (e.inheritAttrs = be), fe && (e.components = fe), Oe && (e.directives = Oe)
    }

    function R$(e, t, n = fr, r = !1) {
        Le(e) && (e = Td(e));
        for (const s in e) {
            const o = e[s];
            let c;
            kt(o) ? "default" in o ? c = hn(o.from || s, o.default, !0) : c = hn(o.from || s) : c = hn(o), on(c) && r ? Object.defineProperty(t, s, {
                enumerable: !0,
                configurable: !0,
                get: () => c.value,
                set: u => c.value = u
            }) : t[s] = c
        }
    }

    function Pv(e, t, n) {
        tr(Le(e) ? e.map(r => r.bind(t.proxy)) : e.bind(t.proxy), t, n)
    }

    function $b(e, t, n, r) {
        const s = r.includes(".") ? Sb(n, r) : () => n[r];
        if (Wt(e)) {
            const o = t[e];
            Ke(o) && mi(s, o)
        } else if (Ke(e)) mi(s, e.bind(n));
        else if (kt(e))
            if (Le(e)) e.forEach(o => $b(o, t, n, r));
            else {
                const o = Ke(e.handler) ? e.handler.bind(n) : t[e.handler];
                Ke(o) && mi(s, o, e)
            }
    }

    function Pb(e) {
        const t = e.type,
            {
                mixins: n,
                extends: r
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
        return u ? f = u : !s.length && !n && !r ? f = t : (f = {}, s.length && s.forEach(h => rl(f, h, c, !0)), rl(f, t, c)), o.set(t, f), f
    }

    function rl(e, t, n, r = !1) {
        const {
            mixins: s,
            extends: o
        } = t;
        o && rl(e, o, n, !0), s && s.forEach(c => rl(e, c, n, !0));
        for (const c in t)
            if (!(r && c === "expose")) {
                const u = N$[c] || n && n[c];
                e[c] = u ? u(e[c], t[c]) : t[c]
            } return e
    }
    const N$ = {
        data: kv,
        props: Xi,
        emits: Xi,
        methods: Xi,
        computed: Xi,
        beforeCreate: bn,
        created: bn,
        beforeMount: bn,
        mounted: bn,
        beforeUpdate: bn,
        updated: bn,
        beforeDestroy: bn,
        beforeUnmount: bn,
        destroyed: bn,
        unmounted: bn,
        activated: bn,
        deactivated: bn,
        errorCaptured: bn,
        serverPrefetch: bn,
        components: Xi,
        directives: Xi,
        watch: $$,
        provide: kv,
        inject: L$
    };

    function kv(e, t) {
        return t ? e ? function() {
            return en(Ke(e) ? e.call(this, this) : e, Ke(t) ? t.call(this, this) : t)
        } : t : e
    }

    function L$(e, t) {
        return Xi(Td(e), Td(t))
    }

    function Td(e) {
        if (Le(e)) {
            const t = {};
            for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
            return t
        }
        return e
    }

    function bn(e, t) {
        return e ? [...new Set([].concat(e, t))] : t
    }

    function Xi(e, t) {
        return e ? en(en(Object.create(null), e), t) : t
    }

    function $$(e, t) {
        if (!e) return t;
        if (!t) return e;
        const n = en(Object.create(null), e);
        for (const r in t) n[r] = bn(e[r], t[r]);
        return n
    }

    function P$(e, t, n, r = !1) {
        const s = {},
            o = {};
        Zc(o, Rl, 1), e.propsDefaults = Object.create(null), kb(e, t, s, o);
        for (const c in e.propsOptions[0]) c in s || (s[c] = void 0);
        n ? e.props = r ? s : zL(s) : e.type.props ? e.props = s : e.props = o, e.attrs = o
    }

    function k$(e, t, n, r) {
        const {
            props: s,
            attrs: o,
            vnode: {
                patchFlag: c
            }
        } = e, u = ot(s), [f] = e.propsOptions;
        let h = !1;
        if ((r || c > 0) && !(c & 16)) {
            if (c & 8) {
                const g = e.vnode.dynamicProps;
                for (let y = 0; y < g.length; y++) {
                    let b = g[y];
                    if (Tl(e.emitsOptions, b)) continue;
                    const C = t[b];
                    if (f)
                        if (rt(o, b)) C !== o[b] && (o[b] = C, h = !0);
                        else {
                            const R = Cr(b);
                            s[R] = Sd(f, u, R, C, e, !1)
                        }
                    else C !== o[b] && (o[b] = C, h = !0)
                }
            }
        } else {
            kb(e, t, s, o) && (h = !0);
            let g;
            for (const y in u)(!t || !rt(t, y) && ((g = fs(y)) === y || !rt(t, g))) && (f ? n && (n[y] !== void 0 || n[g] !== void 0) && (s[y] = Sd(f, u, y, void 0, e, !0)) : delete s[y]);
            if (o !== u)
                for (const y in o)(!t || !rt(t, y) && !0) && (delete o[y], h = !0)
        }
        h && Vr(e, "set", "$attrs")
    }

    function kb(e, t, n, r) {
        const [s, o] = e.propsOptions;
        let c = !1,
            u;
        if (t)
            for (let f in t) {
                if (jc(f)) continue;
                const h = t[f];
                let g;
                s && rt(s, g = Cr(f)) ? !o || !o.includes(g) ? n[g] = h : (u || (u = {}))[g] = h : Tl(e.emitsOptions, f) || (!(f in r) || h !== r[f]) && (r[f] = h, c = !0)
            }
        if (o) {
            const f = ot(n),
                h = u || _t;
            for (let g = 0; g < o.length; g++) {
                const y = o[g];
                n[y] = Sd(s, f, y, h[y], e, !rt(h, y))
            }
        }
        return c
    }

    function Sd(e, t, n, r, s, o) {
        const c = e[n];
        if (c != null) {
            const u = rt(c, "default");
            if (u && r === void 0) {
                const f = c.default;
                if (c.type !== Function && Ke(f)) {
                    const {
                        propsDefaults: h
                    } = s;
                    n in h ? r = h[n] : (Zs(s), r = h[n] = f.call(null, t), ss())
                } else r = f
            }
            c[0] && (o && !u ? r = !1 : c[1] && (r === "" || r === fs(n)) && (r = !0))
        }
        return r
    }

    function Db(e, t, n = !1) {
        const r = t.propsCache,
            s = r.get(e);
        if (s) return s;
        const o = e.props,
            c = {},
            u = [];
        let f = !1;
        if (!Ke(e)) {
            const g = y => {
                f = !0;
                const [b, C] = Db(y, t, !0);
                en(c, b), C && u.push(...C)
            };
            !n && t.mixins.length && t.mixins.forEach(g), e.extends && g(e.extends), e.mixins && e.mixins.forEach(g)
        }
        if (!o && !f) return r.set(e, Gs), Gs;
        if (Le(o))
            for (let g = 0; g < o.length; g++) {
                const y = Cr(o[g]);
                Dv(y) && (c[y] = _t)
            } else if (o)
                for (const g in o) {
                    const y = Cr(g);
                    if (Dv(y)) {
                        const b = o[g],
                            C = c[y] = Le(b) || Ke(b) ? {
                                type: b
                            } : b;
                        if (C) {
                            const R = Uv(Boolean, C.type),
                                M = Uv(String, C.type);
                            C[0] = R > -1, C[1] = M < 0 || R < M, (R > -1 || rt(C, "default")) && u.push(y)
                        }
                    }
                }
        const h = [c, u];
        return r.set(e, h), h
    }

    function Dv(e) {
        return e[0] !== "$"
    }

    function Mv(e) {
        const t = e && e.toString().match(/^\s*function (\w+)/);
        return t ? t[1] : e === null ? "null" : ""
    }

    function xv(e, t) {
        return Mv(e) === Mv(t)
    }

    function Uv(e, t) {
        return Le(t) ? t.findIndex(n => xv(n, e)) : Ke(t) && xv(t, e) ? 0 : -1
    }
    const Mb = e => e[0] === "_" || e === "$stable",
        kh = e => Le(e) ? e.map(Sr) : [Sr(e)],
        D$ = (e, t, n) => {
            if (t._n) return t;
            const r = Kr((...s) => kh(t(...s)), n);
            return r._c = !1, r
        },
        xb = (e, t, n) => {
            const r = e._ctx;
            for (const s in e) {
                if (Mb(s)) continue;
                const o = e[s];
                if (Ke(o)) t[s] = D$(s, o, r);
                else if (o != null) {
                    const c = kh(o);
                    t[s] = () => c
                }
            }
        },
        Ub = (e, t) => {
            const n = kh(t);
            e.slots.default = () => n
        },
        M$ = (e, t) => {
            if (e.vnode.shapeFlag & 32) {
                const n = t._;
                n ? (e.slots = ot(t), Zc(t, "_", n)) : xb(t, e.slots = {})
            } else e.slots = {}, t && Ub(e, t);
            Zc(e.slots, Rl, 1)
        },
        x$ = (e, t, n) => {
            const {
                vnode: r,
                slots: s
            } = e;
            let o = !0,
                c = _t;
            if (r.shapeFlag & 32) {
                const u = t._;
                u ? n && u === 1 ? o = !1 : (en(s, t), !n && u === 1 && delete s._) : (o = !t.$stable, xb(t, s)), c = t
            } else t && (Ub(e, t), c = {
                default: 1
            });
            if (o)
                for (const u in s) !Mb(u) && !(u in c) && delete s[u]
        };

    function Fb() {
        return {
            app: null,
            config: {
                isNativeTag: gL,
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
    let U$ = 0;

    function F$(e, t) {
        return function(r, s = null) {
            Ke(r) || (r = Object.assign({}, r)), s != null && !kt(s) && (s = null);
            const o = Fb(),
                c = new Set;
            let u = !1;
            const f = o.app = {
                _uid: U$++,
                _component: r,
                _props: s,
                _container: null,
                _context: o,
                _instance: null,
                version: rP,
                get config() {
                    return o.config
                },
                set config(h) {},
                use(h, ...g) {
                    return c.has(h) || (h && Ke(h.install) ? (c.add(h), h.install(f, ...g)) : Ke(h) && (c.add(h), h(f, ...g))), f
                },
                mixin(h) {
                    return o.mixins.includes(h) || o.mixins.push(h), f
                },
                component(h, g) {
                    return g ? (o.components[h] = g, f) : o.components[h]
                },
                directive(h, g) {
                    return g ? (o.directives[h] = g, f) : o.directives[h]
                },
                mount(h, g, y) {
                    if (!u) {
                        const b = ft(r, s);
                        return b.appContext = o, g && t ? t(b, h) : e(b, h, y), u = !0, f._container = h, h.__vue_app__ = f, Nl(b.component) || b.component.proxy
                    }
                },
                unmount() {
                    u && (e(null, f._container), delete f._container.__vue_app__)
                },
                provide(h, g) {
                    return o.provides[h] = g, f
                }
            };
            return f
        }
    }

    function Od(e, t, n, r, s = !1) {
        if (Le(e)) {
            e.forEach((b, C) => Od(b, t && (Le(t) ? t[C] : t), n, r, s));
            return
        }
        if (Kc(r) && !s) return;
        const o = r.shapeFlag & 4 ? Nl(r.component) || r.component.proxy : r.el,
            c = s ? null : o,
            {
                i: u,
                r: f
            } = e,
            h = t && t.r,
            g = u.refs === _t ? u.refs = {} : u.refs,
            y = u.setupState;
        if (h != null && h !== f && (Wt(h) ? (g[h] = null, rt(y, h) && (y[h] = null)) : on(h) && (h.value = null)), Ke(f)) gi(f, u, 12, [c, g]);
        else {
            const b = Wt(f),
                C = on(f);
            if (b || C) {
                const R = () => {
                    if (e.f) {
                        const M = b ? g[f] : f.value;
                        s ? Le(M) && Eh(M, o) : Le(M) ? M.includes(o) || M.push(o) : b ? (g[f] = [o], rt(y, f) && (y[f] = g[f])) : (f.value = [o], e.k && (g[e.k] = f.value))
                    } else b ? (g[f] = c, rt(y, f) && (y[f] = c)) : C && (f.value = c, e.k && (g[e.k] = c))
                };
                c ? (R.id = -1, Rn(R, n)) : R()
            }
        }
    }
    const Rn = h$;

    function B$(e) {
        return G$(e)
    }

    function G$(e, t) {
        const n = bL();
        n.__VUE__ = !0;
        const {
            insert: r,
            remove: s,
            patchProp: o,
            createElement: c,
            createText: u,
            createComment: f,
            setText: h,
            setElementText: g,
            parentNode: y,
            nextSibling: b,
            setScopeId: C = fr,
            cloneNode: R,
            insertStaticContent: M
        } = e, W = (m, p, O, x = null, B = null, k = null, ae = !1, Z = null, X = !!p.dynamicChildren) => {
            if (m === p) return;
            m && !Zi(m, p) && (x = mt(m), Ot(m, B, k, !0), m = null), p.patchFlag === -2 && (X = !1, p.dynamicChildren = null);
            const {
                type: N,
                ref: H,
                shapeFlag: he
            } = p;
            switch (N) {
                case Il:
                    I(m, p, O, x);
                    break;
                case hr:
                    K(m, p, O, x);
                    break;
                case Vc:
                    m == null && q(p, O, x, ae);
                    break;
                case ut:
                    Oe(m, p, O, x, B, k, ae, Z, X);
                    break;
                default:
                    he & 1 ? se(m, p, O, x, B, k, ae, Z, X) : he & 6 ? F(m, p, O, x, B, k, ae, Z, X) : (he & 64 || he & 128) && N.process(m, p, O, x, B, k, ae, Z, X, $t)
            }
            H != null && B && Od(H, m && m.ref, k, p || m, !p)
        }, I = (m, p, O, x) => {
            if (m == null) r(p.el = u(p.children), O, x);
            else {
                const B = p.el = m.el;
                p.children !== m.children && h(B, p.children)
            }
        }, K = (m, p, O, x) => {
            m == null ? r(p.el = f(p.children || ""), O, x) : p.el = m.el
        }, q = (m, p, O, x) => {
            [m.el, m.anchor] = M(m.children, p, O, x, m.el, m.anchor)
        }, j = ({
            el: m,
            anchor: p
        }, O, x) => {
            let B;
            for (; m && m !== p;) B = b(m), r(m, O, x), m = B;
            r(p, O, x)
        }, G = ({
            el: m,
            anchor: p
        }) => {
            let O;
            for (; m && m !== p;) O = b(m), s(m), m = O;
            s(p)
        }, se = (m, p, O, x, B, k, ae, Z, X) => {
            ae = ae || p.type === "svg", m == null ? ce(p, O, x, B, k, ae, Z, X) : Ie(m, p, B, k, ae, Z, X)
        }, ce = (m, p, O, x, B, k, ae, Z) => {
            let X, N;
            const {
                type: H,
                props: he,
                shapeFlag: pe,
                transition: Ne,
                patchFlag: xe,
                dirs: w
            } = m;
            if (m.el && R !== void 0 && xe === -1) X = m.el = R(m.el);
            else {
                if (X = m.el = c(m.type, k, he && he.is, he), pe & 8 ? g(X, m.children) : pe & 16 && ue(m.children, X, null, x, B, k && H !== "foreignObject", ae, Z), w && Hi(m, null, x, "created"), he) {
                    for (const $ in he) $ !== "value" && !jc($) && o(X, $, null, he[$], k, m.children, x, B, it);
                    "value" in he && o(X, "value", null, he.value), (N = he.onVnodeBeforeMount) && _r(N, x, m)
                }
                le(X, m, m.scopeId, ae, x)
            }
            w && Hi(m, null, x, "beforeMount");
            const T = (!B || B && !B.pendingBranch) && Ne && !Ne.persisted;
            T && Ne.beforeEnter(X), r(X, p, O), ((N = he && he.onVnodeMounted) || T || w) && Rn(() => {
                N && _r(N, x, m), T && Ne.enter(X), w && Hi(m, null, x, "mounted")
            }, B)
        }, le = (m, p, O, x, B) => {
            if (O && C(m, O), x)
                for (let k = 0; k < x.length; k++) C(m, x[k]);
            if (B) {
                let k = B.subTree;
                if (p === k) {
                    const ae = B.vnode;
                    le(m, ae, ae.scopeId, ae.slotScopeIds, B.parent)
                }
            }
        }, ue = (m, p, O, x, B, k, ae, Z, X = 0) => {
            for (let N = X; N < m.length; N++) {
                const H = m[N] = Z ? li(m[N]) : Sr(m[N]);
                W(null, H, p, O, x, B, k, ae, Z)
            }
        }, Ie = (m, p, O, x, B, k, ae) => {
            const Z = p.el = m.el;
            let {
                patchFlag: X,
                dynamicChildren: N,
                dirs: H
            } = p;
            X |= m.patchFlag & 16;
            const he = m.props || _t,
                pe = p.props || _t;
            let Ne;
            O && Ki(O, !1), (Ne = pe.onVnodeBeforeUpdate) && _r(Ne, O, p, m), H && Hi(p, m, O, "beforeUpdate"), O && Ki(O, !0);
            const xe = B && p.type !== "foreignObject";
            if (N ? be(m.dynamicChildren, N, Z, O, x, xe, k) : ae || Se(m, p, Z, null, O, x, xe, k, !1), X > 0) {
                if (X & 16) fe(Z, p, he, pe, O, x, B);
                else if (X & 2 && he.class !== pe.class && o(Z, "class", null, pe.class, B), X & 4 && o(Z, "style", he.style, pe.style, B), X & 8) {
                    const w = p.dynamicProps;
                    for (let T = 0; T < w.length; T++) {
                        const $ = w[T],
                            S = he[$],
                            P = pe[$];
                        (P !== S || $ === "value") && o(Z, $, S, P, B, m.children, O, x, it)
                    }
                }
                X & 1 && m.children !== p.children && g(Z, p.children)
            } else !ae && N == null && fe(Z, p, he, pe, O, x, B);
            ((Ne = pe.onVnodeUpdated) || H) && Rn(() => {
                Ne && _r(Ne, O, p, m), H && Hi(p, m, O, "updated")
            }, x)
        }, be = (m, p, O, x, B, k, ae) => {
            for (let Z = 0; Z < p.length; Z++) {
                const X = m[Z],
                    N = p[Z],
                    H = X.el && (X.type === ut || !Zi(X, N) || X.shapeFlag & 70) ? y(X.el) : O;
                W(X, N, H, null, x, B, k, ae, !0)
            }
        }, fe = (m, p, O, x, B, k, ae) => {
            if (O !== x) {
                for (const Z in x) {
                    if (jc(Z)) continue;
                    const X = x[Z],
                        N = O[Z];
                    X !== N && Z !== "value" && o(m, Z, N, X, ae, p.children, B, k, it)
                }
                if (O !== _t)
                    for (const Z in O) !jc(Z) && !(Z in x) && o(m, Z, O[Z], null, ae, p.children, B, k, it);
                "value" in x && o(m, "value", O.value, x.value)
            }
        }, Oe = (m, p, O, x, B, k, ae, Z, X) => {
            const N = p.el = m ? m.el : u(""),
                H = p.anchor = m ? m.anchor : u("");
            let {
                patchFlag: he,
                dynamicChildren: pe,
                slotScopeIds: Ne
            } = p;
            Ne && (Z = Z ? Z.concat(Ne) : Ne), m == null ? (r(N, O, x), r(H, O, x), ue(p.children, O, H, B, k, ae, Z, X)) : he > 0 && he & 64 && pe && m.dynamicChildren ? (be(m.dynamicChildren, pe, O, B, k, ae, Z), (p.key != null || B && p === B.subTree) && Bb(m, p, !0)) : Se(m, p, O, H, B, k, ae, Z, X)
        }, F = (m, p, O, x, B, k, ae, Z, X) => {
            p.slotScopeIds = Z, m == null ? p.shapeFlag & 512 ? B.ctx.activate(p, O, x, ae, X) : re(p, O, x, B, k, ae, X) : de(m, p, X)
        }, re = (m, p, O, x, B, k, ae) => {
            const Z = m.component = X$(m, x, B);
            if (Ol(m) && (Z.ctx.renderer = $t), J$(Z), Z.asyncDep) {
                if (B && B.registerDep(Z, _e), !m.el) {
                    const X = Z.subTree = ft(hr);
                    K(null, X, p, O)
                }
                return
            }
            _e(Z, m, p, O, B, k, ae)
        }, de = (m, p, O) => {
            const x = p.component = m.component;
            if (u$(m, p, O))
                if (x.asyncDep && !x.asyncResolved) {
                    me(x, p, O);
                    return
                } else x.next = p, i$(x.update), x.update();
            else p.el = m.el, x.vnode = p
        }, _e = (m, p, O, x, B, k, ae) => {
            const Z = () => {
                    if (m.isMounted) {
                        let {
                            next: H,
                            bu: he,
                            u: pe,
                            parent: Ne,
                            vnode: xe
                        } = m, w = H, T;
                        Ki(m, !1), H ? (H.el = xe.el, me(m, H, ae)) : H = xe, he && Hc(he), (T = H.props && H.props.onVnodeBeforeUpdate) && _r(T, Ne, H, xe), Ki(m, !0);
                        const $ = bf(m),
                            S = m.subTree;
                        m.subTree = $, W(S, $, y(S.el), mt(S), m, B, k), H.el = $.el, w === null && f$(m, $.el), pe && Rn(pe, B), (T = H.props && H.props.onVnodeUpdated) && Rn(() => _r(T, Ne, H, xe), B)
                    } else {
                        let H;
                        const {
                            el: he,
                            props: pe
                        } = p, {
                            bm: Ne,
                            m: xe,
                            parent: w
                        } = m, T = Kc(p);
                        if (Ki(m, !1), Ne && Hc(Ne), !T && (H = pe && pe.onVnodeBeforeMount) && _r(H, w, p), Ki(m, !0), he && Nt) {
                            const $ = () => {
                                m.subTree = bf(m), Nt(he, m.subTree, m, B, null)
                            };
                            T ? p.type.__asyncLoader().then(() => !m.isUnmounted && $()) : $()
                        } else {
                            const $ = m.subTree = bf(m);
                            W(null, $, O, x, m, B, k), p.el = $.el
                        }
                        if (xe && Rn(xe, B), !T && (H = pe && pe.onVnodeMounted)) {
                            const $ = p;
                            Rn(() => _r(H, w, $), B)
                        }(p.shapeFlag & 256 || w && Kc(w.vnode) && w.vnode.shapeFlag & 256) && m.a && Rn(m.a, B), m.isMounted = !0, p = O = x = null
                    }
                },
                X = m.effect = new Sh(Z, () => vb(N), m.scope),
                N = m.update = () => X.run();
            N.id = m.uid, Ki(m, !0), N()
        }, me = (m, p, O) => {
            p.component = m;
            const x = m.vnode.props;
            m.vnode = p, m.next = null, k$(m, p.props, x, O), x$(m, p.children, O), ua(), bl(void 0, m.update), fa()
        }, Se = (m, p, O, x, B, k, ae, Z, X = !1) => {
            const N = m && m.children,
                H = m ? m.shapeFlag : 0,
                he = p.children,
                {
                    patchFlag: pe,
                    shapeFlag: Ne
                } = p;
            if (pe > 0) {
                if (pe & 128) {
                    Fe(N, he, O, x, B, k, ae, Z, X);
                    return
                } else if (pe & 256) {
                    Me(N, he, O, x, B, k, ae, Z, X);
                    return
                }
            }
            Ne & 8 ? (H & 16 && it(N, B, k), he !== N && g(O, he)) : H & 16 ? Ne & 16 ? Fe(N, he, O, x, B, k, ae, Z, X) : it(N, B, k, !0) : (H & 8 && g(O, ""), Ne & 16 && ue(he, O, x, B, k, ae, Z, X))
        }, Me = (m, p, O, x, B, k, ae, Z, X) => {
            m = m || Gs, p = p || Gs;
            const N = m.length,
                H = p.length,
                he = Math.min(N, H);
            let pe;
            for (pe = 0; pe < he; pe++) {
                const Ne = p[pe] = X ? li(p[pe]) : Sr(p[pe]);
                W(m[pe], Ne, O, null, B, k, ae, Z, X)
            }
            N > H ? it(m, B, k, !0, !1, he) : ue(p, O, x, B, k, ae, Z, X, he)
        }, Fe = (m, p, O, x, B, k, ae, Z, X) => {
            let N = 0;
            const H = p.length;
            let he = m.length - 1,
                pe = H - 1;
            for (; N <= he && N <= pe;) {
                const Ne = m[N],
                    xe = p[N] = X ? li(p[N]) : Sr(p[N]);
                if (Zi(Ne, xe)) W(Ne, xe, O, null, B, k, ae, Z, X);
                else break;
                N++
            }
            for (; N <= he && N <= pe;) {
                const Ne = m[he],
                    xe = p[pe] = X ? li(p[pe]) : Sr(p[pe]);
                if (Zi(Ne, xe)) W(Ne, xe, O, null, B, k, ae, Z, X);
                else break;
                he--, pe--
            }
            if (N > he) {
                if (N <= pe) {
                    const Ne = pe + 1,
                        xe = Ne < H ? p[Ne].el : x;
                    for (; N <= pe;) W(null, p[N] = X ? li(p[N]) : Sr(p[N]), O, xe, B, k, ae, Z, X), N++
                }
            } else if (N > pe)
                for (; N <= he;) Ot(m[N], B, k, !0), N++;
            else {
                const Ne = N,
                    xe = N,
                    w = new Map;
                for (N = xe; N <= pe; N++) {
                    const Te = p[N] = X ? li(p[N]) : Sr(p[N]);
                    Te.key != null && w.set(Te.key, N)
                }
                let T, $ = 0;
                const S = pe - xe + 1;
                let P = !1,
                    ee = 0;
                const ie = new Array(S);
                for (N = 0; N < S; N++) ie[N] = 0;
                for (N = Ne; N <= he; N++) {
                    const Te = m[N];
                    if ($ >= S) {
                        Ot(Te, B, k, !0);
                        continue
                    }
                    let ht;
                    if (Te.key != null) ht = w.get(Te.key);
                    else
                        for (T = xe; T <= pe; T++)
                            if (ie[T - xe] === 0 && Zi(Te, p[T])) {
                                ht = T;
                                break
                            } ht === void 0 ? Ot(Te, B, k, !0) : (ie[ht - xe] = N + 1, ht >= ee ? ee = ht : P = !0, W(Te, p[ht], O, null, B, k, ae, Z, X), $++)
                }
                const ye = P ? W$(ie) : Gs;
                for (T = ye.length - 1, N = S - 1; N >= 0; N--) {
                    const Te = xe + N,
                        ht = p[Te],
                        ln = Te + 1 < H ? p[Te + 1].el : x;
                    ie[N] === 0 ? W(null, ht, O, ln, B, k, ae, Z, X) : P && (T < 0 || N !== ye[T] ? Je(ht, O, ln, 2) : T--)
                }
            }
        }, Je = (m, p, O, x, B = null) => {
            const {
                el: k,
                type: ae,
                transition: Z,
                children: X,
                shapeFlag: N
            } = m;
            if (N & 6) {
                Je(m.component.subTree, p, O, x);
                return
            }
            if (N & 128) {
                m.suspense.move(p, O, x);
                return
            }
            if (N & 64) {
                ae.move(m, p, O, $t);
                return
            }
            if (ae === ut) {
                r(k, p, O);
                for (let he = 0; he < X.length; he++) Je(X[he], p, O, x);
                r(m.anchor, p, O);
                return
            }
            if (ae === Vc) {
                j(m, p, O);
                return
            }
            if (x !== 2 && N & 1 && Z)
                if (x === 0) Z.beforeEnter(k), r(k, p, O), Rn(() => Z.enter(k), B);
                else {
                    const {
                        leave: he,
                        delayLeave: pe,
                        afterLeave: Ne
                    } = Z, xe = () => r(k, p, O), w = () => {
                        he(k, () => {
                            xe(), Ne && Ne()
                        })
                    };
                    pe ? pe(k, xe, w) : w()
                }
            else r(k, p, O)
        }, Ot = (m, p, O, x = !1, B = !1) => {
            const {
                type: k,
                props: ae,
                ref: Z,
                children: X,
                dynamicChildren: N,
                shapeFlag: H,
                patchFlag: he,
                dirs: pe
            } = m;
            if (Z != null && Od(Z, null, O, m, !0), H & 256) {
                p.ctx.deactivate(m);
                return
            }
            const Ne = H & 1 && pe,
                xe = !Kc(m);
            let w;
            if (xe && (w = ae && ae.onVnodeBeforeUnmount) && _r(w, p, m), H & 6) zt(m.component, O, x);
            else {
                if (H & 128) {
                    m.suspense.unmount(O, x);
                    return
                }
                Ne && Hi(m, null, p, "beforeUnmount"), H & 64 ? m.type.remove(m, p, O, B, $t, x) : N && (k !== ut || he > 0 && he & 64) ? it(N, p, O, !1, !0) : (k === ut && he & 384 || !B && H & 16) && it(X, p, O), x && jt(m)
            }(xe && (w = ae && ae.onVnodeUnmounted) || Ne) && Rn(() => {
                w && _r(w, p, m), Ne && Hi(m, null, p, "unmounted")
            }, O)
        }, jt = m => {
            const {
                type: p,
                el: O,
                anchor: x,
                transition: B
            } = m;
            if (p === ut) {
                wt(O, x);
                return
            }
            if (p === Vc) {
                G(m);
                return
            }
            const k = () => {
                s(O), B && !B.persisted && B.afterLeave && B.afterLeave()
            };
            if (m.shapeFlag & 1 && B && !B.persisted) {
                const {
                    leave: ae,
                    delayLeave: Z
                } = B, X = () => ae(O, k);
                Z ? Z(m.el, k, X) : X()
            } else k()
        }, wt = (m, p) => {
            let O;
            for (; m !== p;) O = b(m), s(m), m = O;
            s(p)
        }, zt = (m, p, O) => {
            const {
                bum: x,
                scope: B,
                update: k,
                subTree: ae,
                um: Z
            } = m;
            x && Hc(x), B.stop(), k && (k.active = !1, Ot(ae, m, p, O)), Z && Rn(Z, p), Rn(() => {
                m.isUnmounted = !0
            }, p), p && p.pendingBranch && !p.isUnmounted && m.asyncDep && !m.asyncResolved && m.suspenseId === p.pendingId && (p.deps--, p.deps === 0 && p.resolve())
        }, it = (m, p, O, x = !1, B = !1, k = 0) => {
            for (let ae = k; ae < m.length; ae++) Ot(m[ae], p, O, x, B)
        }, mt = m => m.shapeFlag & 6 ? mt(m.component.subTree) : m.shapeFlag & 128 ? m.suspense.next() : b(m.anchor || m.el), st = (m, p, O) => {
            m == null ? p._vnode && Ot(p._vnode, null, null, !0) : W(p._vnode || null, m, p, null, null, null, O), Eb(), p._vnode = m
        }, $t = {
            p: W,
            um: Ot,
            m: Je,
            r: jt,
            mt: re,
            mc: ue,
            pc: Se,
            pbc: be,
            n: mt,
            o: e
        };
        let Dt, Nt;
        return t && ([Dt, Nt] = t($t)), {
            render: st,
            hydrate: Dt,
            createApp: F$(st, Dt)
        }
    }

    function Ki({
        effect: e,
        update: t
    }, n) {
        e.allowRecurse = t.allowRecurse = n
    }

    function Bb(e, t, n = !1) {
        const r = e.children,
            s = t.children;
        if (Le(r) && Le(s))
            for (let o = 0; o < r.length; o++) {
                const c = r[o];
                let u = s[o];
                u.shapeFlag & 1 && !u.dynamicChildren && ((u.patchFlag <= 0 || u.patchFlag === 32) && (u = s[o] = li(s[o]), u.el = c.el), n || Bb(c, u))
            }
    }

    function W$(e) {
        const t = e.slice(),
            n = [0];
        let r, s, o, c, u;
        const f = e.length;
        for (r = 0; r < f; r++) {
            const h = e[r];
            if (h !== 0) {
                if (s = n[n.length - 1], e[s] < h) {
                    t[r] = s, n.push(r);
                    continue
                }
                for (o = 0, c = n.length - 1; o < c;) u = o + c >> 1, e[n[u]] < h ? o = u + 1 : c = u;
                h < e[n[o]] && (o > 0 && (t[r] = n[o - 1]), n[o] = r)
            }
        }
        for (o = n.length, c = n[o - 1]; o-- > 0;) n[o] = c, c = t[c];
        return n
    }
    const j$ = e => e.__isTeleport,
        ut = Symbol(void 0),
        Il = Symbol(void 0),
        hr = Symbol(void 0),
        Vc = Symbol(void 0),
        Xa = [];
    let ur = null;

    function z(e = !1) {
        Xa.push(ur = e ? null : [])
    }

    function H$() {
        Xa.pop(), ur = Xa[Xa.length - 1] || null
    }
    let ho = 1;

    function Fv(e) {
        ho += e
    }

    function Gb(e) {
        return e.dynamicChildren = ho > 0 ? ur || Gs : null, H$(), ho > 0 && ur && ur.push(e), e
    }

    function Q(e, t, n, r, s, o) {
        return Gb(Y(e, t, n, r, s, o, !0))
    }

    function nr(e, t, n, r, s) {
        return Gb(ft(e, t, n, r, s, !0))
    }

    function wd(e) {
        return e ? e.__v_isVNode === !0 : !1
    }

    function Zi(e, t) {
        return e.type === t.type && e.key === t.key
    }
    const Rl = "__vInternal",
        Wb = ({
            key: e
        }) => e != null ? e : null,
        Yc = ({
            ref: e,
            ref_key: t,
            ref_for: n
        }) => e != null ? Wt(e) || on(e) || Ke(e) ? {
            i: er,
            r: e,
            k: t,
            f: !!n
        } : e : null;

    function Y(e, t = null, n = null, r = 0, s = null, o = e === ut ? 0 : 1, c = !1, u = !1) {
        const f = {
            __v_isVNode: !0,
            __v_skip: !0,
            type: e,
            props: t,
            key: t && Wb(t),
            ref: t && Yc(t),
            scopeId: Sl,
            slotScopeIds: null,
            children: n,
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
            patchFlag: r,
            dynamicProps: s,
            dynamicChildren: null,
            appContext: null
        };
        return u ? (Dh(f, n), o & 128 && e.normalize(f)) : n && (f.shapeFlag |= Wt(n) ? 8 : 16), ho > 0 && !c && ur && (f.patchFlag > 0 || o & 6) && f.patchFlag !== 32 && ur.push(f), f
    }
    const ft = K$;

    function K$(e, t = null, n = null, r = 0, s = null, o = !1) {
        if ((!e || e === Lb) && (e = hr), wd(e)) {
            const u = yi(e, t, !0);
            return n && Dh(u, n), ho > 0 && !o && ur && (u.shapeFlag & 6 ? ur[ur.indexOf(e)] = u : ur.push(u)), u.patchFlag |= -2, u
        }
        if (nP(e) && (e = e.__vccOpts), t) {
            t = V$(t);
            let {
                class: u,
                style: f
            } = t;
            u && !Wt(u) && (t.class = Ye(u)), kt(f) && (lb(f) && !Le(f) && (f = en({}, f)), t.style = ca(f))
        }
        const c = Wt(e) ? 1 : d$(e) ? 128 : j$(e) ? 64 : kt(e) ? 4 : Ke(e) ? 2 : 0;
        return Y(e, t, n, r, s, c, o, !0)
    }

    function V$(e) {
        return e ? lb(e) || Rl in e ? en({}, e) : e : null
    }

    function yi(e, t, n = !1) {
        const {
            props: r,
            ref: s,
            patchFlag: o,
            children: c
        } = e, u = t ? Mh(r || {}, t) : r;
        return {
            __v_isVNode: !0,
            __v_skip: !0,
            type: e.type,
            props: u,
            key: u && Wb(u),
            ref: t && t.ref ? n && s ? Le(s) ? s.concat(Yc(t)) : [s, Yc(t)] : Yc(t) : s,
            scopeId: e.scopeId,
            slotScopeIds: e.slotScopeIds,
            children: c,
            target: e.target,
            targetAnchor: e.targetAnchor,
            staticCount: e.staticCount,
            shapeFlag: e.shapeFlag,
            patchFlag: t && e.type !== ut ? o === -1 ? 16 : o | 16 : o,
            dynamicProps: e.dynamicProps,
            dynamicChildren: e.dynamicChildren,
            appContext: e.appContext,
            dirs: e.dirs,
            transition: e.transition,
            component: e.component,
            suspense: e.suspense,
            ssContent: e.ssContent && yi(e.ssContent),
            ssFallback: e.ssFallback && yi(e.ssFallback),
            el: e.el,
            anchor: e.anchor
        }
    }

    function Bn(e = " ", t = 0) {
        return ft(Il, null, e, t)
    }

    function Y$(e, t) {
        const n = ft(Vc, null, e);
        return n.staticCount = t, n
    }

    function Ae(e = "", t = !1) {
        return t ? (z(), nr(hr, null, e)) : ft(hr, null, e)
    }

    function Sr(e) {
        return e == null || typeof e == "boolean" ? ft(hr) : Le(e) ? ft(ut, null, e.slice()) : typeof e == "object" ? li(e) : ft(Il, null, String(e))
    }

    function li(e) {
        return e.el === null || e.memo ? e : yi(e)
    }

    function Dh(e, t) {
        let n = 0;
        const {
            shapeFlag: r
        } = e;
        if (t == null) t = null;
        else if (Le(t)) n = 16;
        else if (typeof t == "object")
            if (r & 65) {
                const s = t.default;
                s && (s._c && (s._d = !1), Dh(e, s()), s._c && (s._d = !0));
                return
            } else {
                n = 32;
                const s = t._;
                !s && !(Rl in t) ? t._ctx = er : s === 3 && er && (er.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024))
            }
        else Ke(t) ? (t = {
            default: t,
            _ctx: er
        }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [Bn(t)]) : n = 8);
        e.children = t, e.shapeFlag |= n
    }

    function Mh(...e) {
        const t = {};
        for (let n = 0; n < e.length; n++) {
            const r = e[n];
            for (const s in r)
                if (s === "class") t.class !== r.class && (t.class = Ye([t.class, r.class]));
                else if (s === "style") t.style = ca([t.style, r.style]);
            else if (ml(s)) {
                const o = t[s],
                    c = r[s];
                c && o !== c && !(Le(o) && o.includes(c)) && (t[s] = o ? [].concat(o, c) : c)
            } else s !== "" && (t[s] = r[s])
        }
        return t
    }

    function _r(e, t, n, r = null) {
        tr(e, t, 7, [n, r])
    }
    const q$ = Fb();
    let z$ = 0;

    function X$(e, t, n) {
        const r = e.type,
            s = (t ? t.appContext : e.appContext) || q$,
            o = {
                uid: z$++,
                vnode: e,
                type: r,
                parent: t,
                appContext: s,
                root: null,
                next: null,
                subTree: null,
                effect: null,
                update: null,
                scope: new JE(!0),
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
                propsOptions: Db(r, s),
                emitsOptions: Tb(r, s),
                emit: null,
                emitted: null,
                propsDefaults: _t,
                inheritAttrs: r.inheritAttrs,
                ctx: _t,
                data: _t,
                props: _t,
                attrs: _t,
                slots: _t,
                refs: _t,
                setupState: _t,
                setupContext: null,
                suspense: n,
                suspenseId: n ? n.pendingId : 0,
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
        }, o.root = t ? t.root : o, o.emit = o$.bind(null, o), e.ce && e.ce(o), o
    }
    let Zt = null;
    const Ei = () => Zt || er,
        Zs = e => {
            Zt = e, e.scope.on()
        },
        ss = () => {
            Zt && Zt.scope.off(), Zt = null
        };

    function jb(e) {
        return e.vnode.shapeFlag & 4
    }
    let po = !1;

    function J$(e, t = !1) {
        po = t;
        const {
            props: n,
            children: r
        } = e.vnode, s = jb(e);
        P$(e, n, s, t), M$(e, r);
        const o = s ? Q$(e, t) : void 0;
        return po = !1, o
    }

    function Q$(e, t) {
        const n = e.type;
        e.accessCache = Object.create(null), e.proxy = ub(new Proxy(e.ctx, A$));
        const {
            setup: r
        } = n;
        if (r) {
            const s = e.setupContext = r.length > 1 ? eP(e) : null;
            Zs(e), ua();
            const o = gi(r, e, 0, [e.props, s]);
            if (fa(), ss(), qE(o)) {
                if (o.then(ss, ss), t) return o.then(c => {
                    Bv(e, c, t)
                }).catch(c => {
                    El(c, e, 0)
                });
                e.asyncDep = o
            } else Bv(e, o, t)
        } else Hb(e, t)
    }

    function Bv(e, t, n) {
        Ke(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : kt(t) && (e.setupState = pb(t)), Hb(e, n)
    }
    let Gv;

    function Hb(e, t, n) {
        const r = e.type;
        if (!e.render) {
            if (!t && Gv && !r.render) {
                const s = r.template;
                if (s) {
                    const {
                        isCustomElement: o,
                        compilerOptions: c
                    } = e.appContext.config, {
                        delimiters: u,
                        compilerOptions: f
                    } = r, h = en(en({
                        isCustomElement: o,
                        delimiters: u
                    }, c), f);
                    r.render = Gv(s, h)
                }
            }
            e.render = r.render || fr
        }
        Zs(e), ua(), I$(e), fa(), ss()
    }

    function Z$(e) {
        return new Proxy(e.attrs, {
            get(t, n) {
                return Gn(e, "get", "$attrs"), t[n]
            }
        })
    }

    function eP(e) {
        const t = r => {
            e.exposed = r || {}
        };
        let n;
        return {
            get attrs() {
                return n || (n = Z$(e))
            },
            slots: e.slots,
            emit: e.emit,
            expose: t
        }
    }

    function Nl(e) {
        if (e.exposed) return e.exposeProxy || (e.exposeProxy = new Proxy(pb(ub(e.exposed)), {
            get(t, n) {
                if (n in t) return t[n];
                if (n in nl) return nl[n](e)
            }
        }))
    }

    function tP(e, t = !0) {
        return Ke(e) ? e.displayName || e.name : e.name || t && e.__name
    }

    function nP(e) {
        return Ke(e) && "__vccOpts" in e
    }
    const Sn = (e, t) => t$(e, t, po);

    function wr(e, t, n) {
        const r = arguments.length;
        return r === 2 ? kt(t) && !Le(t) ? wd(t) ? ft(e, null, [t]) : ft(e, t) : ft(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && wd(n) && (n = [n]), ft(e, t, n))
    }
    const rP = "3.2.37",
        iP = "http://www.w3.org/2000/svg",
        es = typeof document < "u" ? document : null,
        Wv = es && es.createElement("template"),
        sP = {
            insert: (e, t, n) => {
                t.insertBefore(e, n || null)
            },
            remove: e => {
                const t = e.parentNode;
                t && t.removeChild(e)
            },
            createElement: (e, t, n, r) => {
                const s = t ? es.createElementNS(iP, e) : es.createElement(e, n ? {
                    is: n
                } : void 0);
                return e === "select" && r && r.multiple != null && s.setAttribute("multiple", r.multiple), s
            },
            createText: e => es.createTextNode(e),
            createComment: e => es.createComment(e),
            setText: (e, t) => {
                e.nodeValue = t
            },
            setElementText: (e, t) => {
                e.textContent = t
            },
            parentNode: e => e.parentNode,
            nextSibling: e => e.nextSibling,
            querySelector: e => es.querySelector(e),
            setScopeId(e, t) {
                e.setAttribute(t, "")
            },
            cloneNode(e) {
                const t = e.cloneNode(!0);
                return "_value" in e && (t._value = e._value), t
            },
            insertStaticContent(e, t, n, r, s, o) {
                const c = n ? n.previousSibling : t.lastChild;
                if (s && (s === o || s.nextSibling))
                    for (; t.insertBefore(s.cloneNode(!0), n), !(s === o || !(s = s.nextSibling)););
                else {
                    Wv.innerHTML = r ? `<svg>${e}</svg>` : e;
                    const u = Wv.content;
                    if (r) {
                        const f = u.firstChild;
                        for (; f.firstChild;) u.appendChild(f.firstChild);
                        u.removeChild(f)
                    }
                    t.insertBefore(u, n)
                }
                return [c ? c.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
            }
        };

    function aP(e, t, n) {
        const r = e._vtc;
        r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t
    }

    function oP(e, t, n) {
        const r = e.style,
            s = Wt(n);
        if (n && !s) {
            for (const o in n) Cd(r, o, n[o]);
            if (t && !Wt(t))
                for (const o in t) n[o] == null && Cd(r, o, "")
        } else {
            const o = r.display;
            s ? t !== n && (r.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (r.display = o)
        }
    }
    const jv = /\s*!important$/;

    function Cd(e, t, n) {
        if (Le(n)) n.forEach(r => Cd(e, t, r));
        else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
        else {
            const r = cP(e, t);
            jv.test(n) ? e.setProperty(fs(r), n.replace(jv, ""), "important") : e[r] = n
        }
    }
    const Hv = ["Webkit", "Moz", "ms"],
        Sf = {};

    function cP(e, t) {
        const n = Sf[t];
        if (n) return n;
        let r = Cr(t);
        if (r !== "filter" && r in e) return Sf[t] = r;
        r = _l(r);
        for (let s = 0; s < Hv.length; s++) {
            const o = Hv[s] + r;
            if (o in e) return Sf[t] = o
        }
        return t
    }
    const Kv = "http://www.w3.org/1999/xlink";

    function lP(e, t, n, r, s) {
        if (r && t.startsWith("xlink:")) n == null ? e.removeAttributeNS(Kv, t.slice(6, t.length)) : e.setAttributeNS(Kv, t, n);
        else {
            const o = lL(t);
            n == null || o && !VE(n) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : n)
        }
    }

    function uP(e, t, n, r, s, o, c) {
        if (t === "innerHTML" || t === "textContent") {
            r && c(r, s, o), e[t] = n == null ? "" : n;
            return
        }
        if (t === "value" && e.tagName !== "PROGRESS" && !e.tagName.includes("-")) {
            e._value = n;
            const f = n == null ? "" : n;
            (e.value !== f || e.tagName === "OPTION") && (e.value = f), n == null && e.removeAttribute(t);
            return
        }
        let u = !1;
        if (n === "" || n == null) {
            const f = typeof e[t];
            f === "boolean" ? n = VE(n) : n == null && f === "string" ? (n = "", u = !0) : f === "number" && (n = 0, u = !0)
        }
        try {
            e[t] = n
        } catch {}
        u && e.removeAttribute(t)
    }
    const [Kb, fP] = (() => {
        let e = Date.now,
            t = !1;
        if (typeof window < "u") {
            Date.now() > document.createEvent("Event").timeStamp && (e = performance.now.bind(performance));
            const n = navigator.userAgent.match(/firefox\/(\d+)/i);
            t = !!(n && Number(n[1]) <= 53)
        }
        return [e, t]
    })();
    let Ad = 0;
    const dP = Promise.resolve(),
        hP = () => {
            Ad = 0
        },
        pP = () => Ad || (dP.then(hP), Ad = Kb());

    function Hr(e, t, n, r) {
        e.addEventListener(t, n, r)
    }

    function gP(e, t, n, r) {
        e.removeEventListener(t, n, r)
    }

    function mP(e, t, n, r, s = null) {
        const o = e._vei || (e._vei = {}),
            c = o[t];
        if (r && c) c.value = r;
        else {
            const [u, f] = vP(t);
            if (r) {
                const h = o[t] = _P(r, s);
                Hr(e, u, h, f)
            } else c && (gP(e, u, c, f), o[t] = void 0)
        }
    }
    const Vv = /(?:Once|Passive|Capture)$/;

    function vP(e) {
        let t;
        if (Vv.test(e)) {
            t = {};
            let n;
            for (; n = e.match(Vv);) e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0
        }
        return [fs(e.slice(2)), t]
    }

    function _P(e, t) {
        const n = r => {
            const s = r.timeStamp || Kb();
            (fP || s >= n.attached - 1) && tr(yP(r, n.value), t, 5, [r])
        };
        return n.value = e, n.attached = pP(), n
    }

    function yP(e, t) {
        if (Le(t)) {
            const n = e.stopImmediatePropagation;
            return e.stopImmediatePropagation = () => {
                n.call(e), e._stopped = !0
            }, t.map(r => s => !s._stopped && r && r(s))
        } else return t
    }
    const Yv = /^on[a-z]/,
        EP = (e, t, n, r, s = !1, o, c, u, f) => {
            t === "class" ? aP(e, r, s) : t === "style" ? oP(e, n, r) : ml(t) ? yh(t) || mP(e, t, n, r, c) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : bP(e, t, r, s)) ? uP(e, t, r, o, c, u, f) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), lP(e, t, r, s))
        };

    function bP(e, t, n, r) {
        return r ? !!(t === "innerHTML" || t === "textContent" || t in e && Yv.test(t) && Ke(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || Yv.test(t) && Wt(n) ? !1 : t in e
    }
    const ii = "transition",
        Fa = "animation",
        To = (e, {
            slots: t
        }) => wr(wb, Yb(e), t);
    To.displayName = "Transition";
    const Vb = {
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
        },
        TP = To.props = en({}, wb.props, Vb),
        Vi = (e, t = []) => {
            Le(e) ? e.forEach(n => n(...t)) : e && e(...t)
        },
        qv = e => e ? Le(e) ? e.some(t => t.length > 1) : e.length > 1 : !1;

    function Yb(e) {
        const t = {};
        for (const fe in e) fe in Vb || (t[fe] = e[fe]);
        if (e.css === !1) return t;
        const {
            name: n = "v",
            type: r,
            duration: s,
            enterFromClass: o = `${n}-enter-from`,
            enterActiveClass: c = `${n}-enter-active`,
            enterToClass: u = `${n}-enter-to`,
            appearFromClass: f = o,
            appearActiveClass: h = c,
            appearToClass: g = u,
            leaveFromClass: y = `${n}-leave-from`,
            leaveActiveClass: b = `${n}-leave-active`,
            leaveToClass: C = `${n}-leave-to`
        } = e, R = SP(s), M = R && R[0], W = R && R[1], {
            onBeforeEnter: I,
            onEnter: K,
            onEnterCancelled: q,
            onLeave: j,
            onLeaveCancelled: G,
            onBeforeAppear: se = I,
            onAppear: ce = K,
            onAppearCancelled: le = q
        } = t, ue = (fe, Oe, F) => {
            ci(fe, Oe ? g : u), ci(fe, Oe ? h : c), F && F()
        }, Ie = (fe, Oe) => {
            fe._isLeaving = !1, ci(fe, y), ci(fe, C), ci(fe, b), Oe && Oe()
        }, be = fe => (Oe, F) => {
            const re = fe ? ce : K,
                de = () => ue(Oe, fe, F);
            Vi(re, [Oe, de]), zv(() => {
                ci(Oe, fe ? f : o), Br(Oe, fe ? g : u), qv(re) || Xv(Oe, r, M, de)
            })
        };
        return en(t, {
            onBeforeEnter(fe) {
                Vi(I, [fe]), Br(fe, o), Br(fe, c)
            },
            onBeforeAppear(fe) {
                Vi(se, [fe]), Br(fe, f), Br(fe, h)
            },
            onEnter: be(!1),
            onAppear: be(!0),
            onLeave(fe, Oe) {
                fe._isLeaving = !0;
                const F = () => Ie(fe, Oe);
                Br(fe, y), zb(), Br(fe, b), zv(() => {
                    !fe._isLeaving || (ci(fe, y), Br(fe, C), qv(j) || Xv(fe, r, W, F))
                }), Vi(j, [fe, F])
            },
            onEnterCancelled(fe) {
                ue(fe, !1), Vi(q, [fe])
            },
            onAppearCancelled(fe) {
                ue(fe, !0), Vi(le, [fe])
            },
            onLeaveCancelled(fe) {
                Ie(fe), Vi(G, [fe])
            }
        })
    }

    function SP(e) {
        if (e == null) return null;
        if (kt(e)) return [Of(e.enter), Of(e.leave)]; {
            const t = Of(e);
            return [t, t]
        }
    }

    function Of(e) {
        return ao(e)
    }

    function Br(e, t) {
        t.split(/\s+/).forEach(n => n && e.classList.add(n)), (e._vtc || (e._vtc = new Set)).add(t)
    }

    function ci(e, t) {
        t.split(/\s+/).forEach(r => r && e.classList.remove(r));
        const {
            _vtc: n
        } = e;
        n && (n.delete(t), n.size || (e._vtc = void 0))
    }

    function zv(e) {
        requestAnimationFrame(() => {
            requestAnimationFrame(e)
        })
    }
    let OP = 0;

    function Xv(e, t, n, r) {
        const s = e._endId = ++OP,
            o = () => {
                s === e._endId && r()
            };
        if (n) return setTimeout(o, n);
        const {
            type: c,
            timeout: u,
            propCount: f
        } = qb(e, t);
        if (!c) return r();
        const h = c + "end";
        let g = 0;
        const y = () => {
                e.removeEventListener(h, b), o()
            },
            b = C => {
                C.target === e && ++g >= f && y()
            };
        setTimeout(() => {
            g < f && y()
        }, u + 1), e.addEventListener(h, b)
    }

    function qb(e, t) {
        const n = window.getComputedStyle(e),
            r = R => (n[R] || "").split(", "),
            s = r(ii + "Delay"),
            o = r(ii + "Duration"),
            c = Jv(s, o),
            u = r(Fa + "Delay"),
            f = r(Fa + "Duration"),
            h = Jv(u, f);
        let g = null,
            y = 0,
            b = 0;
        t === ii ? c > 0 && (g = ii, y = c, b = o.length) : t === Fa ? h > 0 && (g = Fa, y = h, b = f.length) : (y = Math.max(c, h), g = y > 0 ? c > h ? ii : Fa : null, b = g ? g === ii ? o.length : f.length : 0);
        const C = g === ii && /\b(transform|all)(,|$)/.test(n[ii + "Property"]);
        return {
            type: g,
            timeout: y,
            propCount: b,
            hasTransform: C
        }
    }

    function Jv(e, t) {
        for (; e.length < t.length;) e = e.concat(e);
        return Math.max(...t.map((n, r) => Qv(n) + Qv(e[r])))
    }

    function Qv(e) {
        return Number(e.slice(0, -1).replace(",", ".")) * 1e3
    }

    function zb() {
        return document.body.offsetHeight
    }
    const Xb = new WeakMap,
        Jb = new WeakMap,
        wP = {
            name: "TransitionGroup",
            props: en({}, TP, {
                tag: String,
                moveClass: String
            }),
            setup(e, {
                slots: t
            }) {
                const n = Ei(),
                    r = Ob();
                let s, o;
                return Rb(() => {
                    if (!s.length) return;
                    const c = e.moveClass || `${e.name||"v"}-move`;
                    if (!RP(s[0].el, n.vnode.el, c)) return;
                    s.forEach(CP), s.forEach(AP);
                    const u = s.filter(IP);
                    zb(), u.forEach(f => {
                        const h = f.el,
                            g = h.style;
                        Br(h, c), g.transform = g.webkitTransform = g.transitionDuration = "";
                        const y = h._moveCb = b => {
                            b && b.target !== h || (!b || /transform$/.test(b.propertyName)) && (h.removeEventListener("transitionend", y), h._moveCb = null, ci(h, c))
                        };
                        h.addEventListener("transitionend", y)
                    })
                }), () => {
                    const c = ot(e),
                        u = Yb(c);
                    let f = c.tag || ut;
                    s = o, o = t.default ? Lh(t.default()) : [];
                    for (let h = 0; h < o.length; h++) {
                        const g = o[h];
                        g.key != null && fo(g, uo(g, u, r, n))
                    }
                    if (s)
                        for (let h = 0; h < s.length; h++) {
                            const g = s[h];
                            fo(g, uo(g, u, r, n)), Xb.set(g, g.el.getBoundingClientRect())
                        }
                    return ft(f, null, o)
                }
            }
        },
        Qb = wP;

    function CP(e) {
        const t = e.el;
        t._moveCb && t._moveCb(), t._enterCb && t._enterCb()
    }

    function AP(e) {
        Jb.set(e, e.el.getBoundingClientRect())
    }

    function IP(e) {
        const t = Xb.get(e),
            n = Jb.get(e),
            r = t.left - n.left,
            s = t.top - n.top;
        if (r || s) {
            const o = e.el.style;
            return o.transform = o.webkitTransform = `translate(${r}px,${s}px)`, o.transitionDuration = "0s", e
        }
    }

    function RP(e, t, n) {
        const r = e.cloneNode();
        e._vtc && e._vtc.forEach(c => {
            c.split(/\s+/).forEach(u => u && r.classList.remove(u))
        }), n.split(/\s+/).forEach(c => c && r.classList.add(c)), r.style.display = "none";
        const s = t.nodeType === 1 ? t : t.parentNode;
        s.appendChild(r);
        const {
            hasTransform: o
        } = qb(r);
        return s.removeChild(r), o
    }
    const bi = e => {
        const t = e.props["onUpdate:modelValue"] || !1;
        return Le(t) ? n => Hc(t, n) : t
    };

    function NP(e) {
        e.target.composing = !0
    }

    function Zv(e) {
        const t = e.target;
        t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")))
    }
    const e_ = {
            created(e, {
                modifiers: {
                    lazy: t,
                    trim: n,
                    number: r
                }
            }, s) {
                e._assign = bi(s);
                const o = r || s.props && s.props.type === "number";
                Hr(e, t ? "change" : "input", c => {
                    if (c.target.composing) return;
                    let u = e.value;
                    n && (u = u.trim()), o && (u = ao(u)), e._assign(u)
                }), n && Hr(e, "change", () => {
                    e.value = e.value.trim()
                }), t || (Hr(e, "compositionstart", NP), Hr(e, "compositionend", Zv), Hr(e, "change", Zv))
            },
            mounted(e, {
                value: t
            }) {
                e.value = t == null ? "" : t
            },
            beforeUpdate(e, {
                value: t,
                modifiers: {
                    lazy: n,
                    trim: r,
                    number: s
                }
            }, o) {
                if (e._assign = bi(o), e.composing || document.activeElement === e && e.type !== "range" && (n || r && e.value.trim() === t || (s || e.type === "number") && ao(e.value) === t)) return;
                const c = t == null ? "" : t;
                e.value !== c && (e.value = c)
            }
        },
        LP = {
            deep: !0,
            created(e, t, n) {
                e._assign = bi(n), Hr(e, "change", () => {
                    const r = e._modelValue,
                        s = ea(e),
                        o = e.checked,
                        c = e._assign;
                    if (Le(r)) {
                        const u = _h(r, s),
                            f = u !== -1;
                        if (o && !f) c(r.concat(s));
                        else if (!o && f) {
                            const h = [...r];
                            h.splice(u, 1), c(h)
                        }
                    } else if (la(r)) {
                        const u = new Set(r);
                        o ? u.add(s) : u.delete(s), c(u)
                    } else c(eT(e, o))
                })
            },
            mounted: t_,
            beforeUpdate(e, t, n) {
                e._assign = bi(n), t_(e, t, n)
            }
        };

    function t_(e, {
        value: t,
        oldValue: n
    }, r) {
        e._modelValue = t, Le(t) ? e.checked = _h(t, r.props.value) > -1 : la(t) ? e.checked = t.has(r.props.value) : t !== n && (e.checked = us(t, eT(e, !0)))
    }
    const n_ = {
            created(e, {
                value: t
            }, n) {
                e.checked = us(t, n.props.value), e._assign = bi(n), Hr(e, "change", () => {
                    e._assign(ea(e))
                })
            },
            beforeUpdate(e, {
                value: t,
                oldValue: n
            }, r) {
                e._assign = bi(r), t !== n && (e.checked = us(t, r.props.value))
            }
        },
        Zb = {
            deep: !0,
            created(e, {
                value: t,
                modifiers: {
                    number: n
                }
            }, r) {
                const s = la(t);
                Hr(e, "change", () => {
                    const o = Array.prototype.filter.call(e.options, c => c.selected).map(c => n ? ao(ea(c)) : ea(c));
                    e._assign(e.multiple ? s ? new Set(o) : o : o[0])
                }), e._assign = bi(r)
            },
            mounted(e, {
                value: t
            }) {
                r_(e, t)
            },
            beforeUpdate(e, t, n) {
                e._assign = bi(n)
            },
            updated(e, {
                value: t
            }) {
                r_(e, t)
            }
        };

    function r_(e, t) {
        const n = e.multiple;
        if (!(n && !Le(t) && !la(t))) {
            for (let r = 0, s = e.options.length; r < s; r++) {
                const o = e.options[r],
                    c = ea(o);
                if (n) Le(t) ? o.selected = _h(t, c) > -1 : o.selected = t.has(c);
                else if (us(ea(o), t)) {
                    e.selectedIndex !== r && (e.selectedIndex = r);
                    return
                }
            }!n && e.selectedIndex !== -1 && (e.selectedIndex = -1)
        }
    }

    function ea(e) {
        return "_value" in e ? e._value : e.value
    }

    function eT(e, t) {
        const n = t ? "_trueValue" : "_falseValue";
        return n in e ? e[n] : t
    }
    const $P = ["ctrl", "shift", "alt", "meta"],
        PP = {
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
            exact: (e, t) => $P.some(n => e[`${n}Key`] && !t.includes(n))
        },
        Bt = (e, t) => (n, ...r) => {
            for (let s = 0; s < t.length; s++) {
                const o = PP[t[s]];
                if (o && o(n, t)) return
            }
            return e(n, ...r)
        },
        kP = {
            esc: "escape",
            space: " ",
            up: "arrow-up",
            left: "arrow-left",
            right: "arrow-right",
            down: "arrow-down",
            delete: "backspace"
        },
        Hs = (e, t) => n => {
            if (!("key" in n)) return;
            const r = fs(n.key);
            if (t.some(s => s === r || kP[s] === r)) return e(n)
        },
        DP = en({
            patchProp: EP
        }, sP);
    let i_;

    function MP() {
        return i_ || (i_ = B$(DP))
    }
    const xP = (...e) => {
        const t = MP().createApp(...e),
            {
                mount: n
            } = t;
        return t.mount = r => {
            const s = UP(r);
            if (!s) return;
            const o = t._component;
            !Ke(o) && !o.render && !o.template && (o.template = s.innerHTML), s.innerHTML = "";
            const c = n(s, !1, s instanceof SVGElement);
            return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), c
        }, t
    };

    function UP(e) {
        return Wt(e) ? document.querySelector(e) : e
    }
    /*!
     * shared v9.2.2
     * (c) 2022 kazuya kawaguchi
     * Released under the MIT License.
     */
    const Id = typeof window < "u",
        FP = typeof Symbol == "function" && typeof Symbol.toStringTag == "symbol",
        wi = e => FP ? Symbol(e) : e,
        BP = (e, t, n) => GP({
            l: e,
            k: t,
            s: n
        }),
        GP = e => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"),
        Vt = e => typeof e == "number" && isFinite(e),
        WP = e => Uh(e) === "[object Date]",
        Ti = e => Uh(e) === "[object RegExp]",
        Ll = e => Ge(e) && Object.keys(e).length === 0;

    function jP(e, t) {
        typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack))
    }
    const cn = Object.assign;

    function s_(e) {
        return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
    }
    const HP = Object.prototype.hasOwnProperty;

    function xh(e, t) {
        return HP.call(e, t)
    }
    const Tt = Array.isArray,
        Ut = e => typeof e == "function",
        ve = e => typeof e == "string",
        tt = e => typeof e == "boolean",
        St = e => e !== null && typeof e == "object",
        tT = Object.prototype.toString,
        Uh = e => tT.call(e),
        Ge = e => Uh(e) === "[object Object]",
        KP = e => e == null ? "" : Tt(e) || Ge(e) && e.toString === tT ? JSON.stringify(e, null, 2) : String(e);
    /*!
     * message-compiler v9.2.2
     * (c) 2022 kazuya kawaguchi
     * Released under the MIT License.
     */
    const at = {
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

    function $l(e, t, n = {}) {
        const {
            domain: r,
            messages: s,
            args: o
        } = n, c = e, u = new SyntaxError(String(c));
        return u.code = e, t && (u.location = t), u.domain = r, u
    }

    function VP(e) {
        throw e
    }

    function YP(e, t, n) {
        return {
            line: e,
            column: t,
            offset: n
        }
    }

    function Rd(e, t, n) {
        const r = {
            start: e,
            end: t
        };
        return n != null && (r.source = n), r
    }
    const Ur = " ",
        qP = "\r",
        Tn = `
`,
        zP = String.fromCharCode(8232),
        XP = String.fromCharCode(8233);

    function JP(e) {
        const t = e;
        let n = 0,
            r = 1,
            s = 1,
            o = 0;
        const c = ce => t[ce] === qP && t[ce + 1] === Tn,
            u = ce => t[ce] === Tn,
            f = ce => t[ce] === XP,
            h = ce => t[ce] === zP,
            g = ce => c(ce) || u(ce) || f(ce) || h(ce),
            y = () => n,
            b = () => r,
            C = () => s,
            R = () => o,
            M = ce => c(ce) || f(ce) || h(ce) ? Tn : t[ce],
            W = () => M(n),
            I = () => M(n + o);

        function K() {
            return o = 0, g(n) && (r++, s = 0), c(n) && n++, n++, s++, t[n]
        }

        function q() {
            return c(n + o) && o++, o++, t[n + o]
        }

        function j() {
            n = 0, r = 1, s = 1, o = 0
        }

        function G(ce = 0) {
            o = ce
        }

        function se() {
            const ce = n + o;
            for (; ce !== n;) K();
            o = 0
        }
        return {
            index: y,
            line: b,
            column: C,
            peekOffset: R,
            charAt: M,
            currentChar: W,
            currentPeek: I,
            next: K,
            peek: q,
            reset: j,
            resetPeek: G,
            skipToPeek: se
        }
    }
    const si = void 0,
        a_ = "'",
        QP = "tokenizer";

    function ZP(e, t = {}) {
        const n = t.location !== !1,
            r = JP(e),
            s = () => r.index(),
            o = () => YP(r.line(), r.column(), r.index()),
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
                onError: g
            } = t;

        function y(m, p, O, ...x) {
            const B = h();
            if (p.column += O, p.offset += O, g) {
                const k = Rd(B.startLoc, p),
                    ae = $l(m, k, {
                        domain: QP,
                        args: x
                    });
                g(ae)
            }
        }

        function b(m, p, O) {
            m.endLoc = o(), m.currentType = p;
            const x = {
                type: p
            };
            return n && (x.loc = Rd(m.startLoc, m.endLoc)), O != null && (x.value = O), x
        }
        const C = m => b(m, 14);

        function R(m, p) {
            return m.currentChar() === p ? (m.next(), p) : (y(at.EXPECTED_TOKEN, o(), 0, p), "")
        }

        function M(m) {
            let p = "";
            for (; m.currentPeek() === Ur || m.currentPeek() === Tn;) p += m.currentPeek(), m.peek();
            return p
        }

        function W(m) {
            const p = M(m);
            return m.skipToPeek(), p
        }

        function I(m) {
            if (m === si) return !1;
            const p = m.charCodeAt(0);
            return p >= 97 && p <= 122 || p >= 65 && p <= 90 || p === 95
        }

        function K(m) {
            if (m === si) return !1;
            const p = m.charCodeAt(0);
            return p >= 48 && p <= 57
        }

        function q(m, p) {
            const {
                currentType: O
            } = p;
            if (O !== 2) return !1;
            M(m);
            const x = I(m.currentPeek());
            return m.resetPeek(), x
        }

        function j(m, p) {
            const {
                currentType: O
            } = p;
            if (O !== 2) return !1;
            M(m);
            const x = m.currentPeek() === "-" ? m.peek() : m.currentPeek(),
                B = K(x);
            return m.resetPeek(), B
        }

        function G(m, p) {
            const {
                currentType: O
            } = p;
            if (O !== 2) return !1;
            M(m);
            const x = m.currentPeek() === a_;
            return m.resetPeek(), x
        }

        function se(m, p) {
            const {
                currentType: O
            } = p;
            if (O !== 8) return !1;
            M(m);
            const x = m.currentPeek() === ".";
            return m.resetPeek(), x
        }

        function ce(m, p) {
            const {
                currentType: O
            } = p;
            if (O !== 9) return !1;
            M(m);
            const x = I(m.currentPeek());
            return m.resetPeek(), x
        }

        function le(m, p) {
            const {
                currentType: O
            } = p;
            if (!(O === 8 || O === 12)) return !1;
            M(m);
            const x = m.currentPeek() === ":";
            return m.resetPeek(), x
        }

        function ue(m, p) {
            const {
                currentType: O
            } = p;
            if (O !== 10) return !1;
            const x = () => {
                    const k = m.currentPeek();
                    return k === "{" ? I(m.peek()) : k === "@" || k === "%" || k === "|" || k === ":" || k === "." || k === Ur || !k ? !1 : k === Tn ? (m.peek(), x()) : I(k)
                },
                B = x();
            return m.resetPeek(), B
        }

        function Ie(m) {
            M(m);
            const p = m.currentPeek() === "|";
            return m.resetPeek(), p
        }

        function be(m) {
            const p = M(m),
                O = m.currentPeek() === "%" && m.peek() === "{";
            return m.resetPeek(), {
                isModulo: O,
                hasSpace: p.length > 0
            }
        }

        function fe(m, p = !0) {
            const O = (B = !1, k = "", ae = !1) => {
                    const Z = m.currentPeek();
                    return Z === "{" ? k === "%" ? !1 : B : Z === "@" || !Z ? k === "%" ? !0 : B : Z === "%" ? (m.peek(), O(B, "%", !0)) : Z === "|" ? k === "%" || ae ? !0 : !(k === Ur || k === Tn) : Z === Ur ? (m.peek(), O(!0, Ur, ae)) : Z === Tn ? (m.peek(), O(!0, Tn, ae)) : !0
                },
                x = O();
            return p && m.resetPeek(), x
        }

        function Oe(m, p) {
            const O = m.currentChar();
            return O === si ? si : p(O) ? (m.next(), O) : null
        }

        function F(m) {
            return Oe(m, O => {
                const x = O.charCodeAt(0);
                return x >= 97 && x <= 122 || x >= 65 && x <= 90 || x >= 48 && x <= 57 || x === 95 || x === 36
            })
        }

        function re(m) {
            return Oe(m, O => {
                const x = O.charCodeAt(0);
                return x >= 48 && x <= 57
            })
        }

        function de(m) {
            return Oe(m, O => {
                const x = O.charCodeAt(0);
                return x >= 48 && x <= 57 || x >= 65 && x <= 70 || x >= 97 && x <= 102
            })
        }

        function _e(m) {
            let p = "",
                O = "";
            for (; p = re(m);) O += p;
            return O
        }

        function me(m) {
            W(m);
            const p = m.currentChar();
            return p !== "%" && y(at.EXPECTED_TOKEN, o(), 0, p), m.next(), "%"
        }

        function Se(m) {
            let p = "";
            for (;;) {
                const O = m.currentChar();
                if (O === "{" || O === "}" || O === "@" || O === "|" || !O) break;
                if (O === "%")
                    if (fe(m)) p += O, m.next();
                    else break;
                else if (O === Ur || O === Tn)
                    if (fe(m)) p += O, m.next();
                    else {
                        if (Ie(m)) break;
                        p += O, m.next()
                    }
                else p += O, m.next()
            }
            return p
        }

        function Me(m) {
            W(m);
            let p = "",
                O = "";
            for (; p = F(m);) O += p;
            return m.currentChar() === si && y(at.UNTERMINATED_CLOSING_BRACE, o(), 0), O
        }

        function Fe(m) {
            W(m);
            let p = "";
            return m.currentChar() === "-" ? (m.next(), p += `-${_e(m)}`) : p += _e(m), m.currentChar() === si && y(at.UNTERMINATED_CLOSING_BRACE, o(), 0), p
        }

        function Je(m) {
            W(m), R(m, "'");
            let p = "",
                O = "";
            const x = k => k !== a_ && k !== Tn;
            for (; p = Oe(m, x);) p === "\\" ? O += Ot(m) : O += p;
            const B = m.currentChar();
            return B === Tn || B === si ? (y(at.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, o(), 0), B === Tn && (m.next(), R(m, "'")), O) : (R(m, "'"), O)
        }

        function Ot(m) {
            const p = m.currentChar();
            switch (p) {
                case "\\":
                case "'":
                    return m.next(), `\\${p}`;
                case "u":
                    return jt(m, p, 4);
                case "U":
                    return jt(m, p, 6);
                default:
                    return y(at.UNKNOWN_ESCAPE_SEQUENCE, o(), 0, p), ""
            }
        }

        function jt(m, p, O) {
            R(m, p);
            let x = "";
            for (let B = 0; B < O; B++) {
                const k = de(m);
                if (!k) {
                    y(at.INVALID_UNICODE_ESCAPE_SEQUENCE, o(), 0, `\\${p}${x}${m.currentChar()}`);
                    break
                }
                x += k
            }
            return `\\${p}${x}`
        }

        function wt(m) {
            W(m);
            let p = "",
                O = "";
            const x = B => B !== "{" && B !== "}" && B !== Ur && B !== Tn;
            for (; p = Oe(m, x);) O += p;
            return O
        }

        function zt(m) {
            let p = "",
                O = "";
            for (; p = F(m);) O += p;
            return O
        }

        function it(m) {
            const p = (O = !1, x) => {
                const B = m.currentChar();
                return B === "{" || B === "%" || B === "@" || B === "|" || !B || B === Ur ? x : B === Tn ? (x += B, m.next(), p(O, x)) : (x += B, m.next(), p(!0, x))
            };
            return p(!1, "")
        }

        function mt(m) {
            W(m);
            const p = R(m, "|");
            return W(m), p
        }

        function st(m, p) {
            let O = null;
            switch (m.currentChar()) {
                case "{":
                    return p.braceNest >= 1 && y(at.NOT_ALLOW_NEST_PLACEHOLDER, o(), 0), m.next(), O = b(p, 2, "{"), W(m), p.braceNest++, O;
                case "}":
                    return p.braceNest > 0 && p.currentType === 2 && y(at.EMPTY_PLACEHOLDER, o(), 0), m.next(), O = b(p, 3, "}"), p.braceNest--, p.braceNest > 0 && W(m), p.inLinked && p.braceNest === 0 && (p.inLinked = !1), O;
                case "@":
                    return p.braceNest > 0 && y(at.UNTERMINATED_CLOSING_BRACE, o(), 0), O = $t(m, p) || C(p), p.braceNest = 0, O;
                default:
                    let B = !0,
                        k = !0,
                        ae = !0;
                    if (Ie(m)) return p.braceNest > 0 && y(at.UNTERMINATED_CLOSING_BRACE, o(), 0), O = b(p, 1, mt(m)), p.braceNest = 0, p.inLinked = !1, O;
                    if (p.braceNest > 0 && (p.currentType === 5 || p.currentType === 6 || p.currentType === 7)) return y(at.UNTERMINATED_CLOSING_BRACE, o(), 0), p.braceNest = 0, Dt(m, p);
                    if (B = q(m, p)) return O = b(p, 5, Me(m)), W(m), O;
                    if (k = j(m, p)) return O = b(p, 6, Fe(m)), W(m), O;
                    if (ae = G(m, p)) return O = b(p, 7, Je(m)), W(m), O;
                    if (!B && !k && !ae) return O = b(p, 13, wt(m)), y(at.INVALID_TOKEN_IN_PLACEHOLDER, o(), 0, O.value), W(m), O;
                    break
            }
            return O
        }

        function $t(m, p) {
            const {
                currentType: O
            } = p;
            let x = null;
            const B = m.currentChar();
            switch ((O === 8 || O === 9 || O === 12 || O === 10) && (B === Tn || B === Ur) && y(at.INVALID_LINKED_FORMAT, o(), 0), B) {
                case "@":
                    return m.next(), x = b(p, 8, "@"), p.inLinked = !0, x;
                case ".":
                    return W(m), m.next(), b(p, 9, ".");
                case ":":
                    return W(m), m.next(), b(p, 10, ":");
                default:
                    return Ie(m) ? (x = b(p, 1, mt(m)), p.braceNest = 0, p.inLinked = !1, x) : se(m, p) || le(m, p) ? (W(m), $t(m, p)) : ce(m, p) ? (W(m), b(p, 12, zt(m))) : ue(m, p) ? (W(m), B === "{" ? st(m, p) || x : b(p, 11, it(m))) : (O === 8 && y(at.INVALID_LINKED_FORMAT, o(), 0), p.braceNest = 0, p.inLinked = !1, Dt(m, p))
            }
        }

        function Dt(m, p) {
            let O = {
                type: 14
            };
            if (p.braceNest > 0) return st(m, p) || C(p);
            if (p.inLinked) return $t(m, p) || C(p);
            switch (m.currentChar()) {
                case "{":
                    return st(m, p) || C(p);
                case "}":
                    return y(at.UNBALANCED_CLOSING_BRACE, o(), 0), m.next(), b(p, 3, "}");
                case "@":
                    return $t(m, p) || C(p);
                default:
                    if (Ie(m)) return O = b(p, 1, mt(m)), p.braceNest = 0, p.inLinked = !1, O;
                    const {
                        isModulo: B, hasSpace: k
                    } = be(m);
                    if (B) return k ? b(p, 0, Se(m)) : b(p, 4, me(m));
                    if (fe(m)) return b(p, 0, Se(m));
                    break
            }
            return O
        }

        function Nt() {
            const {
                currentType: m,
                offset: p,
                startLoc: O,
                endLoc: x
            } = f;
            return f.lastType = m, f.lastOffset = p, f.lastStartLoc = O, f.lastEndLoc = x, f.offset = s(), f.startLoc = o(), r.currentChar() === si ? b(f, 14) : Dt(r, f)
        }
        return {
            nextToken: Nt,
            currentOffset: s,
            currentPosition: o,
            context: h
        }
    }
    const ek = "parser",
        tk = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;

    function nk(e, t, n) {
        switch (e) {
            case "\\\\":
                return "\\";
            case "\\'":
                return "'";
            default: {
                const r = parseInt(t || n, 16);
                return r <= 55295 || r >= 57344 ? String.fromCodePoint(r) : "\uFFFD"
            }
        }
    }

    function rk(e = {}) {
        const t = e.location !== !1,
            {
                onError: n
            } = e;

        function r(I, K, q, j, ...G) {
            const se = I.currentPosition();
            if (se.offset += j, se.column += j, n) {
                const ce = Rd(q, se),
                    le = $l(K, ce, {
                        domain: ek,
                        args: G
                    });
                n(le)
            }
        }

        function s(I, K, q) {
            const j = {
                type: I,
                start: K,
                end: K
            };
            return t && (j.loc = {
                start: q,
                end: q
            }), j
        }

        function o(I, K, q, j) {
            I.end = K, j && (I.type = j), t && I.loc && (I.loc.end = q)
        }

        function c(I, K) {
            const q = I.context(),
                j = s(3, q.offset, q.startLoc);
            return j.value = K, o(j, I.currentOffset(), I.currentPosition()), j
        }

        function u(I, K) {
            const q = I.context(),
                {
                    lastOffset: j,
                    lastStartLoc: G
                } = q,
                se = s(5, j, G);
            return se.index = parseInt(K, 10), I.nextToken(), o(se, I.currentOffset(), I.currentPosition()), se
        }

        function f(I, K) {
            const q = I.context(),
                {
                    lastOffset: j,
                    lastStartLoc: G
                } = q,
                se = s(4, j, G);
            return se.key = K, I.nextToken(), o(se, I.currentOffset(), I.currentPosition()), se
        }

        function h(I, K) {
            const q = I.context(),
                {
                    lastOffset: j,
                    lastStartLoc: G
                } = q,
                se = s(9, j, G);
            return se.value = K.replace(tk, nk), I.nextToken(), o(se, I.currentOffset(), I.currentPosition()), se
        }

        function g(I) {
            const K = I.nextToken(),
                q = I.context(),
                {
                    lastOffset: j,
                    lastStartLoc: G
                } = q,
                se = s(8, j, G);
            return K.type !== 12 ? (r(I, at.UNEXPECTED_EMPTY_LINKED_MODIFIER, q.lastStartLoc, 0), se.value = "", o(se, j, G), {
                nextConsumeToken: K,
                node: se
            }) : (K.value == null && r(I, at.UNEXPECTED_LEXICAL_ANALYSIS, q.lastStartLoc, 0, yr(K)), se.value = K.value || "", o(se, I.currentOffset(), I.currentPosition()), {
                node: se
            })
        }

        function y(I, K) {
            const q = I.context(),
                j = s(7, q.offset, q.startLoc);
            return j.value = K, o(j, I.currentOffset(), I.currentPosition()), j
        }

        function b(I) {
            const K = I.context(),
                q = s(6, K.offset, K.startLoc);
            let j = I.nextToken();
            if (j.type === 9) {
                const G = g(I);
                q.modifier = G.node, j = G.nextConsumeToken || I.nextToken()
            }
            switch (j.type !== 10 && r(I, at.UNEXPECTED_LEXICAL_ANALYSIS, K.lastStartLoc, 0, yr(j)), j = I.nextToken(), j.type === 2 && (j = I.nextToken()), j.type) {
                case 11:
                    j.value == null && r(I, at.UNEXPECTED_LEXICAL_ANALYSIS, K.lastStartLoc, 0, yr(j)), q.key = y(I, j.value || "");
                    break;
                case 5:
                    j.value == null && r(I, at.UNEXPECTED_LEXICAL_ANALYSIS, K.lastStartLoc, 0, yr(j)), q.key = f(I, j.value || "");
                    break;
                case 6:
                    j.value == null && r(I, at.UNEXPECTED_LEXICAL_ANALYSIS, K.lastStartLoc, 0, yr(j)), q.key = u(I, j.value || "");
                    break;
                case 7:
                    j.value == null && r(I, at.UNEXPECTED_LEXICAL_ANALYSIS, K.lastStartLoc, 0, yr(j)), q.key = h(I, j.value || "");
                    break;
                default:
                    r(I, at.UNEXPECTED_EMPTY_LINKED_KEY, K.lastStartLoc, 0);
                    const G = I.context(),
                        se = s(7, G.offset, G.startLoc);
                    return se.value = "", o(se, G.offset, G.startLoc), q.key = se, o(q, G.offset, G.startLoc), {
                        nextConsumeToken: j,
                        node: q
                    }
            }
            return o(q, I.currentOffset(), I.currentPosition()), {
                node: q
            }
        }

        function C(I) {
            const K = I.context(),
                q = K.currentType === 1 ? I.currentOffset() : K.offset,
                j = K.currentType === 1 ? K.endLoc : K.startLoc,
                G = s(2, q, j);
            G.items = [];
            let se = null;
            do {
                const ue = se || I.nextToken();
                switch (se = null, ue.type) {
                    case 0:
                        ue.value == null && r(I, at.UNEXPECTED_LEXICAL_ANALYSIS, K.lastStartLoc, 0, yr(ue)), G.items.push(c(I, ue.value || ""));
                        break;
                    case 6:
                        ue.value == null && r(I, at.UNEXPECTED_LEXICAL_ANALYSIS, K.lastStartLoc, 0, yr(ue)), G.items.push(u(I, ue.value || ""));
                        break;
                    case 5:
                        ue.value == null && r(I, at.UNEXPECTED_LEXICAL_ANALYSIS, K.lastStartLoc, 0, yr(ue)), G.items.push(f(I, ue.value || ""));
                        break;
                    case 7:
                        ue.value == null && r(I, at.UNEXPECTED_LEXICAL_ANALYSIS, K.lastStartLoc, 0, yr(ue)), G.items.push(h(I, ue.value || ""));
                        break;
                    case 8:
                        const Ie = b(I);
                        G.items.push(Ie.node), se = Ie.nextConsumeToken || null;
                        break
                }
            } while (K.currentType !== 14 && K.currentType !== 1);
            const ce = K.currentType === 1 ? K.lastOffset : I.currentOffset(),
                le = K.currentType === 1 ? K.lastEndLoc : I.currentPosition();
            return o(G, ce, le), G
        }

        function R(I, K, q, j) {
            const G = I.context();
            let se = j.items.length === 0;
            const ce = s(1, K, q);
            ce.cases = [], ce.cases.push(j);
            do {
                const le = C(I);
                se || (se = le.items.length === 0), ce.cases.push(le)
            } while (G.currentType !== 14);
            return se && r(I, at.MUST_HAVE_MESSAGES_IN_PLURAL, q, 0), o(ce, I.currentOffset(), I.currentPosition()), ce
        }

        function M(I) {
            const K = I.context(),
                {
                    offset: q,
                    startLoc: j
                } = K,
                G = C(I);
            return K.currentType === 14 ? G : R(I, q, j, G)
        }

        function W(I) {
            const K = ZP(I, cn({}, e)),
                q = K.context(),
                j = s(0, q.offset, q.startLoc);
            return t && j.loc && (j.loc.source = I), j.body = M(K), q.currentType !== 14 && r(K, at.UNEXPECTED_LEXICAL_ANALYSIS, q.lastStartLoc, 0, I[q.offset] || ""), o(j, K.currentOffset(), K.currentPosition()), j
        }
        return {
            parse: W
        }
    }

    function yr(e) {
        if (e.type === 14) return "EOF";
        const t = (e.value || "").replace(/\r?\n/gu, "\\n");
        return t.length > 10 ? t.slice(0, 9) + "\u2026" : t
    }

    function ik(e, t = {}) {
        const n = {
            ast: e,
            helpers: new Set
        };
        return {
            context: () => n,
            helper: o => (n.helpers.add(o), o)
        }
    }

    function o_(e, t) {
        for (let n = 0; n < e.length; n++) Fh(e[n], t)
    }

    function Fh(e, t) {
        switch (e.type) {
            case 1:
                o_(e.cases, t), t.helper("plural");
                break;
            case 2:
                o_(e.items, t);
                break;
            case 6:
                Fh(e.key, t), t.helper("linked"), t.helper("type");
                break;
            case 5:
                t.helper("interpolate"), t.helper("list");
                break;
            case 4:
                t.helper("interpolate"), t.helper("named");
                break
        }
    }

    function sk(e, t = {}) {
        const n = ik(e);
        n.helper("normalize"), e.body && Fh(e.body, n);
        const r = n.context();
        e.helpers = Array.from(r.helpers)
    }

    function ak(e, t) {
        const {
            sourceMap: n,
            filename: r,
            breakLineCode: s,
            needIndent: o
        } = t, c = {
            source: e.loc.source,
            filename: r,
            code: "",
            column: 1,
            line: 1,
            offset: 0,
            map: void 0,
            breakLineCode: s,
            needIndent: o,
            indentLevel: 0
        }, u = () => c;

        function f(M, W) {
            c.code += M
        }

        function h(M, W = !0) {
            const I = W ? s : "";
            f(o ? I + "  ".repeat(M) : I)
        }

        function g(M = !0) {
            const W = ++c.indentLevel;
            M && h(W)
        }

        function y(M = !0) {
            const W = --c.indentLevel;
            M && h(W)
        }

        function b() {
            h(c.indentLevel)
        }
        return {
            context: u,
            push: f,
            indent: g,
            deindent: y,
            newline: b,
            helper: M => `_${M}`,
            needIndent: () => c.needIndent
        }
    }

    function ok(e, t) {
        const {
            helper: n
        } = e;
        e.push(`${n("linked")}(`), ta(e, t.key), t.modifier ? (e.push(", "), ta(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")")
    }

    function ck(e, t) {
        const {
            helper: n,
            needIndent: r
        } = e;
        e.push(`${n("normalize")}([`), e.indent(r());
        const s = t.items.length;
        for (let o = 0; o < s && (ta(e, t.items[o]), o !== s - 1); o++) e.push(", ");
        e.deindent(r()), e.push("])")
    }

    function lk(e, t) {
        const {
            helper: n,
            needIndent: r
        } = e;
        if (t.cases.length > 1) {
            e.push(`${n("plural")}([`), e.indent(r());
            const s = t.cases.length;
            for (let o = 0; o < s && (ta(e, t.cases[o]), o !== s - 1); o++) e.push(", ");
            e.deindent(r()), e.push("])")
        }
    }

    function uk(e, t) {
        t.body ? ta(e, t.body) : e.push("null")
    }

    function ta(e, t) {
        const {
            helper: n
        } = e;
        switch (t.type) {
            case 0:
                uk(e, t);
                break;
            case 1:
                lk(e, t);
                break;
            case 2:
                ck(e, t);
                break;
            case 6:
                ok(e, t);
                break;
            case 8:
                e.push(JSON.stringify(t.value), t);
                break;
            case 7:
                e.push(JSON.stringify(t.value), t);
                break;
            case 5:
                e.push(`${n("interpolate")}(${n("list")}(${t.index}))`, t);
                break;
            case 4:
                e.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(t.key)}))`, t);
                break;
            case 9:
                e.push(JSON.stringify(t.value), t);
                break;
            case 3:
                e.push(JSON.stringify(t.value), t);
                break
        }
    }
    const fk = (e, t = {}) => {
        const n = ve(t.mode) ? t.mode : "normal",
            r = ve(t.filename) ? t.filename : "message.intl",
            s = !!t.sourceMap,
            o = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`,
            c = t.needIndent ? t.needIndent : n !== "arrow",
            u = e.helpers || [],
            f = ak(e, {
                mode: n,
                filename: r,
                sourceMap: s,
                breakLineCode: o,
                needIndent: c
            });
        f.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), f.indent(c), u.length > 0 && (f.push(`const { ${u.map(y=>`${y}: _${y}`).join(", ")} } = ctx`), f.newline()), f.push("return "), ta(f, e), f.deindent(c), f.push("}");
        const {
            code: h,
            map: g
        } = f.context();
        return {
            ast: e,
            code: h,
            map: g ? g.toJSON() : void 0
        }
    };

    function dk(e, t = {}) {
        const n = cn({}, t),
            s = rk(n).parse(e);
        return sk(s, n), fk(s, n)
    }
    /*!
     * devtools-if v9.2.2
     * (c) 2022 kazuya kawaguchi
     * Released under the MIT License.
     */
    const hk = {
        I18nInit: "i18n:init",
        FunctionTranslate: "function:translate"
    };
    /*!
     * core-base v9.2.2
     * (c) 2022 kazuya kawaguchi
     * Released under the MIT License.
     */
    const Ci = [];
    Ci[0] = {
        w: [0],
        i: [3, 0],
        ["["]: [4],
        o: [7]
    };
    Ci[1] = {
        w: [1],
        ["."]: [2],
        ["["]: [4],
        o: [7]
    };
    Ci[2] = {
        w: [2],
        i: [3, 0],
        [0]: [3, 0]
    };
    Ci[3] = {
        i: [3, 0],
        [0]: [3, 0],
        w: [1, 1],
        ["."]: [2, 1],
        ["["]: [4, 1],
        o: [7, 1]
    };
    Ci[4] = {
        ["'"]: [5, 0],
        ['"']: [6, 0],
        ["["]: [4, 2],
        ["]"]: [1, 3],
        o: 8,
        l: [4, 0]
    };
    Ci[5] = {
        ["'"]: [4, 0],
        o: 8,
        l: [5, 0]
    };
    Ci[6] = {
        ['"']: [4, 0],
        o: 8,
        l: [6, 0]
    };
    const pk = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;

    function gk(e) {
        return pk.test(e)
    }

    function mk(e) {
        const t = e.charCodeAt(0),
            n = e.charCodeAt(e.length - 1);
        return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e
    }

    function vk(e) {
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

    function _k(e) {
        const t = e.trim();
        return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : gk(t) ? mk(t) : "*" + t
    }

    function yk(e) {
        const t = [];
        let n = -1,
            r = 0,
            s = 0,
            o, c, u, f, h, g, y;
        const b = [];
        b[0] = () => {
            c === void 0 ? c = u : c += u
        }, b[1] = () => {
            c !== void 0 && (t.push(c), c = void 0)
        }, b[2] = () => {
            b[0](), s++
        }, b[3] = () => {
            if (s > 0) s--, r = 4, b[0]();
            else {
                if (s = 0, c === void 0 || (c = _k(c), c === !1)) return !1;
                b[1]()
            }
        };

        function C() {
            const R = e[n + 1];
            if (r === 5 && R === "'" || r === 6 && R === '"') return n++, u = "\\" + R, b[0](), !0
        }
        for (; r !== null;)
            if (n++, o = e[n], !(o === "\\" && C())) {
                if (f = vk(o), y = Ci[r], h = y[f] || y.l || 8, h === 8 || (r = h[0], h[1] !== void 0 && (g = b[h[1]], g && (u = o, g() === !1)))) return;
                if (r === 7) return t
            }
    }
    const c_ = new Map;

    function Ek(e, t) {
        return St(e) ? e[t] : null
    }

    function bk(e, t) {
        if (!St(e)) return null;
        let n = c_.get(t);
        if (n || (n = yk(t), n && c_.set(t, n)), !n) return null;
        const r = n.length;
        let s = e,
            o = 0;
        for (; o < r;) {
            const c = s[n[o]];
            if (c === void 0) return null;
            s = c, o++
        }
        return s
    }
    const Tk = e => e,
        Sk = e => "",
        Ok = "text",
        wk = e => e.length === 0 ? "" : e.join(""),
        Ck = KP;

    function l_(e, t) {
        return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0
    }

    function Ak(e) {
        const t = Vt(e.pluralIndex) ? e.pluralIndex : -1;
        return e.named && (Vt(e.named.count) || Vt(e.named.n)) ? Vt(e.named.count) ? e.named.count : Vt(e.named.n) ? e.named.n : t : t
    }

    function Ik(e, t) {
        t.count || (t.count = e), t.n || (t.n = e)
    }

    function Rk(e = {}) {
        const t = e.locale,
            n = Ak(e),
            r = St(e.pluralRules) && ve(t) && Ut(e.pluralRules[t]) ? e.pluralRules[t] : l_,
            s = St(e.pluralRules) && ve(t) && Ut(e.pluralRules[t]) ? l_ : void 0,
            o = I => I[r(n, I.length, s)],
            c = e.list || [],
            u = I => c[I],
            f = e.named || {};
        Vt(e.pluralIndex) && Ik(n, f);
        const h = I => f[I];

        function g(I) {
            const K = Ut(e.messages) ? e.messages(I) : St(e.messages) ? e.messages[I] : !1;
            return K || (e.parent ? e.parent.message(I) : Sk)
        }
        const y = I => e.modifiers ? e.modifiers[I] : Tk,
            b = Ge(e.processor) && Ut(e.processor.normalize) ? e.processor.normalize : wk,
            C = Ge(e.processor) && Ut(e.processor.interpolate) ? e.processor.interpolate : Ck,
            R = Ge(e.processor) && ve(e.processor.type) ? e.processor.type : Ok,
            W = {
                list: u,
                named: h,
                plural: o,
                linked: (I, ...K) => {
                    const [q, j] = K;
                    let G = "text",
                        se = "";
                    K.length === 1 ? St(q) ? (se = q.modifier || se, G = q.type || G) : ve(q) && (se = q || se) : K.length === 2 && (ve(q) && (se = q || se), ve(j) && (G = j || G));
                    let ce = g(I)(W);
                    return G === "vnode" && Tt(ce) && se && (ce = ce[0]), se ? y(se)(ce, G) : ce
                },
                message: g,
                type: R,
                interpolate: C,
                normalize: b
            };
        return W
    }
    let Nk = null;
    hk.FunctionTranslate;

    function Lk(e) {
        return t => Nk
    }
    const $k = {
        NOT_FOUND_KEY: 1,
        FALLBACK_TO_TRANSLATE: 2,
        CANNOT_FORMAT_NUMBER: 3,
        FALLBACK_TO_NUMBER_FORMAT: 4,
        CANNOT_FORMAT_DATE: 5,
        FALLBACK_TO_DATE_FORMAT: 6,
        __EXTEND_POINT__: 7
    };

    function Pk(e, t, n) {
        return [...new Set([n, ...Tt(t) ? t : St(t) ? Object.keys(t) : ve(t) ? [t] : [n]])]
    }

    function nT(e, t, n) {
        const r = ve(n) ? n : So,
            s = e;
        s.__localeChainCache || (s.__localeChainCache = new Map);
        let o = s.__localeChainCache.get(r);
        if (!o) {
            o = [];
            let c = [n];
            for (; Tt(c);) c = u_(o, c, t);
            const u = Tt(t) || !Ge(t) ? t : t.default ? t.default : null;
            c = ve(u) ? [u] : u, Tt(c) && u_(o, c, !1), s.__localeChainCache.set(r, o)
        }
        return o
    }

    function u_(e, t, n) {
        let r = !0;
        for (let s = 0; s < t.length && tt(r); s++) {
            const o = t[s];
            ve(o) && (r = kk(e, t[s], n))
        }
        return r
    }

    function kk(e, t, n) {
        let r;
        const s = t.split("-");
        do {
            const o = s.join("-");
            r = Dk(e, o, n), s.splice(-1, 1)
        } while (s.length && r === !0);
        return r
    }

    function Dk(e, t, n) {
        let r = !1;
        if (!e.includes(t) && (r = !0, t)) {
            r = t[t.length - 1] !== "!";
            const s = t.replace(/!/g, "");
            e.push(s), (Tt(n) || Ge(n)) && n[s] && (r = n[s])
        }
        return r
    }
    const Mk = "9.2.2",
        Pl = -1,
        So = "en-US",
        f_ = "",
        d_ = e => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;

    function xk() {
        return {
            upper: (e, t) => t === "text" && ve(e) ? e.toUpperCase() : t === "vnode" && St(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
            lower: (e, t) => t === "text" && ve(e) ? e.toLowerCase() : t === "vnode" && St(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
            capitalize: (e, t) => t === "text" && ve(e) ? d_(e) : t === "vnode" && St(e) && "__v_isVNode" in e ? d_(e.children) : e
        }
    }
    let rT;

    function Uk(e) {
        rT = e
    }
    let iT;

    function Fk(e) {
        iT = e
    }
    let sT;

    function Bk(e) {
        sT = e
    }
    let h_ = 0;

    function Gk(e = {}) {
        const t = ve(e.version) ? e.version : Mk,
            n = ve(e.locale) ? e.locale : So,
            r = Tt(e.fallbackLocale) || Ge(e.fallbackLocale) || ve(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : n,
            s = Ge(e.messages) ? e.messages : {
                [n]: {}
            },
            o = Ge(e.datetimeFormats) ? e.datetimeFormats : {
                [n]: {}
            },
            c = Ge(e.numberFormats) ? e.numberFormats : {
                [n]: {}
            },
            u = cn({}, e.modifiers || {}, xk()),
            f = e.pluralRules || {},
            h = Ut(e.missing) ? e.missing : null,
            g = tt(e.missingWarn) || Ti(e.missingWarn) ? e.missingWarn : !0,
            y = tt(e.fallbackWarn) || Ti(e.fallbackWarn) ? e.fallbackWarn : !0,
            b = !!e.fallbackFormat,
            C = !!e.unresolving,
            R = Ut(e.postTranslation) ? e.postTranslation : null,
            M = Ge(e.processor) ? e.processor : null,
            W = tt(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
            I = !!e.escapeParameter,
            K = Ut(e.messageCompiler) ? e.messageCompiler : rT,
            q = Ut(e.messageResolver) ? e.messageResolver : iT || Ek,
            j = Ut(e.localeFallbacker) ? e.localeFallbacker : sT || Pk,
            G = St(e.fallbackContext) ? e.fallbackContext : void 0,
            se = Ut(e.onWarn) ? e.onWarn : jP,
            ce = e,
            le = St(ce.__datetimeFormatters) ? ce.__datetimeFormatters : new Map,
            ue = St(ce.__numberFormatters) ? ce.__numberFormatters : new Map,
            Ie = St(ce.__meta) ? ce.__meta : {};
        h_++;
        const be = {
            version: t,
            cid: h_,
            locale: n,
            fallbackLocale: r,
            messages: s,
            modifiers: u,
            pluralRules: f,
            missing: h,
            missingWarn: g,
            fallbackWarn: y,
            fallbackFormat: b,
            unresolving: C,
            postTranslation: R,
            processor: M,
            warnHtmlMessage: W,
            escapeParameter: I,
            messageCompiler: K,
            messageResolver: q,
            localeFallbacker: j,
            fallbackContext: G,
            onWarn: se,
            __meta: Ie
        };
        return be.datetimeFormats = o, be.numberFormats = c, be.__datetimeFormatters = le, be.__numberFormatters = ue, be
    }

    function Bh(e, t, n, r, s) {
        const {
            missing: o,
            onWarn: c
        } = e;
        if (o !== null) {
            const u = o(e, n, t, s);
            return ve(u) ? u : t
        } else return t
    }

    function Ba(e, t, n) {
        const r = e;
        r.__localeChainCache = new Map, e.localeFallbacker(e, n, t)
    }
    const Wk = e => e;
    let p_ = Object.create(null);

    function jk(e, t = {}) {
        {
            const r = (t.onCacheKey || Wk)(e),
                s = p_[r];
            if (s) return s;
            let o = !1;
            const c = t.onError || VP;
            t.onError = h => {
                o = !0, c(h)
            };
            const {
                code: u
            } = dk(e, t), f = new Function(`return ${u}`)();
            return o ? f : p_[r] = f
        }
    }
    let aT = at.__EXTEND_POINT__;
    const wf = () => ++aT,
        xs = {
            INVALID_ARGUMENT: aT,
            INVALID_DATE_ARGUMENT: wf(),
            INVALID_ISO_DATE_ARGUMENT: wf(),
            __EXTEND_POINT__: wf()
        };

    function Us(e) {
        return $l(e, null, void 0)
    }
    const g_ = () => "",
        as = e => Ut(e);

    function m_(e, ...t) {
        const {
            fallbackFormat: n,
            postTranslation: r,
            unresolving: s,
            messageCompiler: o,
            fallbackLocale: c,
            messages: u
        } = e, [f, h] = Nd(...t), g = tt(h.missingWarn) ? h.missingWarn : e.missingWarn, y = tt(h.fallbackWarn) ? h.fallbackWarn : e.fallbackWarn, b = tt(h.escapeParameter) ? h.escapeParameter : e.escapeParameter, C = !!h.resolvedMessage, R = ve(h.default) || tt(h.default) ? tt(h.default) ? o ? f : () => f : h.default : n ? o ? f : () => f : "", M = n || R !== "", W = ve(h.locale) ? h.locale : e.locale;
        b && Hk(h);
        let [I, K, q] = C ? [f, W, u[W] || {}] : oT(e, f, W, c, y, g), j = I, G = f;
        if (!C && !(ve(j) || as(j)) && M && (j = R, G = j), !C && (!(ve(j) || as(j)) || !ve(K))) return s ? Pl : f;
        let se = !1;
        const ce = () => {
                se = !0
            },
            le = as(j) ? j : cT(e, f, K, j, G, ce);
        if (se) return j;
        const ue = Yk(e, K, q, h),
            Ie = Rk(ue),
            be = Kk(e, le, Ie);
        return r ? r(be, f) : be
    }

    function Hk(e) {
        Tt(e.list) ? e.list = e.list.map(t => ve(t) ? s_(t) : t) : St(e.named) && Object.keys(e.named).forEach(t => {
            ve(e.named[t]) && (e.named[t] = s_(e.named[t]))
        })
    }

    function oT(e, t, n, r, s, o) {
        const {
            messages: c,
            onWarn: u,
            messageResolver: f,
            localeFallbacker: h
        } = e, g = h(e, r, n);
        let y = {},
            b, C = null;
        const R = "translate";
        for (let M = 0; M < g.length && (b = g[M], y = c[b] || {}, (C = f(y, t)) === null && (C = y[t]), !(ve(C) || Ut(C))); M++) {
            const W = Bh(e, t, b, o, R);
            W !== t && (C = W)
        }
        return [C, b, y]
    }

    function cT(e, t, n, r, s, o) {
        const {
            messageCompiler: c,
            warnHtmlMessage: u
        } = e;
        if (as(r)) {
            const h = r;
            return h.locale = h.locale || n, h.key = h.key || t, h
        }
        if (c == null) {
            const h = () => r;
            return h.locale = n, h.key = t, h
        }
        const f = c(r, Vk(e, n, s, r, u, o));
        return f.locale = n, f.key = t, f.source = r, f
    }

    function Kk(e, t, n) {
        return t(n)
    }

    function Nd(...e) {
        const [t, n, r] = e, s = {};
        if (!ve(t) && !Vt(t) && !as(t)) throw Us(xs.INVALID_ARGUMENT);
        const o = Vt(t) ? String(t) : (as(t), t);
        return Vt(n) ? s.plural = n : ve(n) ? s.default = n : Ge(n) && !Ll(n) ? s.named = n : Tt(n) && (s.list = n), Vt(r) ? s.plural = r : ve(r) ? s.default = r : Ge(r) && cn(s, r), [o, s]
    }

    function Vk(e, t, n, r, s, o) {
        return {
            warnHtmlMessage: s,
            onError: c => {
                throw o && o(c), c
            },
            onCacheKey: c => BP(t, n, c)
        }
    }

    function Yk(e, t, n, r) {
        const {
            modifiers: s,
            pluralRules: o,
            messageResolver: c,
            fallbackLocale: u,
            fallbackWarn: f,
            missingWarn: h,
            fallbackContext: g
        } = e, b = {
            locale: t,
            modifiers: s,
            pluralRules: o,
            messages: C => {
                let R = c(n, C);
                if (R == null && g) {
                    const [, , M] = oT(g, C, t, u, f, h);
                    R = c(M, C)
                }
                if (ve(R)) {
                    let M = !1;
                    const I = cT(e, C, t, R, C, () => {
                        M = !0
                    });
                    return M ? g_ : I
                } else return as(R) ? R : g_
            }
        };
        return e.processor && (b.processor = e.processor), r.list && (b.list = r.list), r.named && (b.named = r.named), Vt(r.plural) && (b.pluralIndex = r.plural), b
    }

    function v_(e, ...t) {
        const {
            datetimeFormats: n,
            unresolving: r,
            fallbackLocale: s,
            onWarn: o,
            localeFallbacker: c
        } = e, {
            __datetimeFormatters: u
        } = e, [f, h, g, y] = Ld(...t), b = tt(g.missingWarn) ? g.missingWarn : e.missingWarn;
        tt(g.fallbackWarn) ? g.fallbackWarn : e.fallbackWarn;
        const C = !!g.part,
            R = ve(g.locale) ? g.locale : e.locale,
            M = c(e, s, R);
        if (!ve(f) || f === "") return new Intl.DateTimeFormat(R, y).format(h);
        let W = {},
            I, K = null;
        const q = "datetime format";
        for (let se = 0; se < M.length && (I = M[se], W = n[I] || {}, K = W[f], !Ge(K)); se++) Bh(e, f, I, b, q);
        if (!Ge(K) || !ve(I)) return r ? Pl : f;
        let j = `${I}__${f}`;
        Ll(y) || (j = `${j}__${JSON.stringify(y)}`);
        let G = u.get(j);
        return G || (G = new Intl.DateTimeFormat(I, cn({}, K, y)), u.set(j, G)), C ? G.formatToParts(h) : G.format(h)
    }
    const lT = ["localeMatcher", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "formatMatcher", "hour12", "timeZone", "dateStyle", "timeStyle", "calendar", "dayPeriod", "numberingSystem", "hourCycle", "fractionalSecondDigits"];

    function Ld(...e) {
        const [t, n, r, s] = e, o = {};
        let c = {},
            u;
        if (ve(t)) {
            const f = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
            if (!f) throw Us(xs.INVALID_ISO_DATE_ARGUMENT);
            const h = f[3] ? f[3].trim().startsWith("T") ? `${f[1].trim()}${f[3].trim()}` : `${f[1].trim()}T${f[3].trim()}` : f[1].trim();
            u = new Date(h);
            try {
                u.toISOString()
            } catch {
                throw Us(xs.INVALID_ISO_DATE_ARGUMENT)
            }
        } else if (WP(t)) {
            if (isNaN(t.getTime())) throw Us(xs.INVALID_DATE_ARGUMENT);
            u = t
        } else if (Vt(t)) u = t;
        else throw Us(xs.INVALID_ARGUMENT);
        return ve(n) ? o.key = n : Ge(n) && Object.keys(n).forEach(f => {
            lT.includes(f) ? c[f] = n[f] : o[f] = n[f]
        }), ve(r) ? o.locale = r : Ge(r) && (c = r), Ge(s) && (c = s), [o.key || "", u, o, c]
    }

    function __(e, t, n) {
        const r = e;
        for (const s in n) {
            const o = `${t}__${s}`;
            !r.__datetimeFormatters.has(o) || r.__datetimeFormatters.delete(o)
        }
    }

    function y_(e, ...t) {
        const {
            numberFormats: n,
            unresolving: r,
            fallbackLocale: s,
            onWarn: o,
            localeFallbacker: c
        } = e, {
            __numberFormatters: u
        } = e, [f, h, g, y] = $d(...t), b = tt(g.missingWarn) ? g.missingWarn : e.missingWarn;
        tt(g.fallbackWarn) ? g.fallbackWarn : e.fallbackWarn;
        const C = !!g.part,
            R = ve(g.locale) ? g.locale : e.locale,
            M = c(e, s, R);
        if (!ve(f) || f === "") return new Intl.NumberFormat(R, y).format(h);
        let W = {},
            I, K = null;
        const q = "number format";
        for (let se = 0; se < M.length && (I = M[se], W = n[I] || {}, K = W[f], !Ge(K)); se++) Bh(e, f, I, b, q);
        if (!Ge(K) || !ve(I)) return r ? Pl : f;
        let j = `${I}__${f}`;
        Ll(y) || (j = `${j}__${JSON.stringify(y)}`);
        let G = u.get(j);
        return G || (G = new Intl.NumberFormat(I, cn({}, K, y)), u.set(j, G)), C ? G.formatToParts(h) : G.format(h)
    }
    const uT = ["localeMatcher", "style", "currency", "currencyDisplay", "currencySign", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "notation", "signDisplay", "unit", "unitDisplay", "roundingMode", "roundingPriority", "roundingIncrement", "trailingZeroDisplay"];

    function $d(...e) {
        const [t, n, r, s] = e, o = {};
        let c = {};
        if (!Vt(t)) throw Us(xs.INVALID_ARGUMENT);
        const u = t;
        return ve(n) ? o.key = n : Ge(n) && Object.keys(n).forEach(f => {
            uT.includes(f) ? c[f] = n[f] : o[f] = n[f]
        }), ve(r) ? o.locale = r : Ge(r) && (c = r), Ge(s) && (c = s), [o.key || "", u, o, c]
    }

    function E_(e, t, n) {
        const r = e;
        for (const s in n) {
            const o = `${t}__${s}`;
            !r.__numberFormatters.has(o) || r.__numberFormatters.delete(o)
        }
    }
    /*!
     * vue-i18n v9.2.2
     * (c) 2022 kazuya kawaguchi
     * Released under the MIT License.
     */
    const qk = "9.2.2";
    $k.__EXTEND_POINT__;
    let fT = at.__EXTEND_POINT__;
    const In = () => ++fT,
        Gt = {
            UNEXPECTED_RETURN_TYPE: fT,
            INVALID_ARGUMENT: In(),
            MUST_BE_CALL_SETUP_TOP: In(),
            NOT_INSLALLED: In(),
            NOT_AVAILABLE_IN_LEGACY_MODE: In(),
            REQUIRED_VALUE: In(),
            INVALID_VALUE: In(),
            CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: In(),
            NOT_INSLALLED_WITH_PROVIDE: In(),
            UNEXPECTED_ERROR: In(),
            NOT_COMPATIBLE_LEGACY_VUE_I18N: In(),
            BRIDGE_SUPPORT_VUE_2_ONLY: In(),
            MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: In(),
            NOT_AVAILABLE_COMPOSITION_IN_LEGACY: In(),
            __EXTEND_POINT__: In()
        };

    function qt(e, ...t) {
        return $l(e, null, void 0)
    }
    const Pd = wi("__transrateVNode"),
        kd = wi("__datetimeParts"),
        Dd = wi("__numberParts"),
        dT = wi("__setPluralRules");
    wi("__intlifyMeta");
    const hT = wi("__injectWithOption");

    function Md(e) {
        if (!St(e)) return e;
        for (const t in e)
            if (!!xh(e, t))
                if (!t.includes(".")) St(e[t]) && Md(e[t]);
                else {
                    const n = t.split("."),
                        r = n.length - 1;
                    let s = e;
                    for (let o = 0; o < r; o++) n[o] in s || (s[n[o]] = {}), s = s[n[o]];
                    s[n[r]] = e[t], delete e[t], St(s[n[r]]) && Md(s[n[r]])
                } return e
    }

    function kl(e, t) {
        const {
            messages: n,
            __i18n: r,
            messageResolver: s,
            flatJson: o
        } = t, c = Ge(n) ? n : Tt(r) ? {} : {
            [e]: {}
        };
        if (Tt(r) && r.forEach(u => {
                if ("locale" in u && "resource" in u) {
                    const {
                        locale: f,
                        resource: h
                    } = u;
                    f ? (c[f] = c[f] || {}, Ja(h, c[f])) : Ja(h, c)
                } else ve(u) && Ja(JSON.parse(u), c)
            }), s == null && o)
            for (const u in c) xh(c, u) && Md(c[u]);
        return c
    }
    const Ic = e => !St(e) || Tt(e);

    function Ja(e, t) {
        if (Ic(e) || Ic(t)) throw qt(Gt.INVALID_VALUE);
        for (const n in e) xh(e, n) && (Ic(e[n]) || Ic(t[n]) ? t[n] = e[n] : Ja(e[n], t[n]))
    }

    function zk(e) {
        return e.type
    }

    function pT(e, t, n) {
        let r = St(t.messages) ? t.messages : {};
        "__i18nGlobal" in n && (r = kl(e.locale.value, {
            messages: r,
            __i18n: n.__i18nGlobal
        }));
        const s = Object.keys(r);
        s.length && s.forEach(o => {
            e.mergeLocaleMessage(o, r[o])
        }); {
            if (St(t.datetimeFormats)) {
                const o = Object.keys(t.datetimeFormats);
                o.length && o.forEach(c => {
                    e.mergeDateTimeFormat(c, t.datetimeFormats[c])
                })
            }
            if (St(t.numberFormats)) {
                const o = Object.keys(t.numberFormats);
                o.length && o.forEach(c => {
                    e.mergeNumberFormat(c, t.numberFormats[c])
                })
            }
        }
    }

    function b_(e) {
        return ft(Il, null, e, 0)
    }
    let T_ = 0;

    function S_(e) {
        return (t, n, r, s) => e(n, r, Ei() || void 0, s)
    }

    function Gh(e = {}, t) {
        const {
            __root: n
        } = e, r = n === void 0;
        let s = tt(e.inheritLocale) ? e.inheritLocale : !0;
        const o = et(n && s ? n.locale.value : ve(e.locale) ? e.locale : So),
            c = et(n && s ? n.fallbackLocale.value : ve(e.fallbackLocale) || Tt(e.fallbackLocale) || Ge(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : o.value),
            u = et(kl(o.value, e)),
            f = et(Ge(e.datetimeFormats) ? e.datetimeFormats : {
                [o.value]: {}
            }),
            h = et(Ge(e.numberFormats) ? e.numberFormats : {
                [o.value]: {}
            });
        let g = n ? n.missingWarn : tt(e.missingWarn) || Ti(e.missingWarn) ? e.missingWarn : !0,
            y = n ? n.fallbackWarn : tt(e.fallbackWarn) || Ti(e.fallbackWarn) ? e.fallbackWarn : !0,
            b = n ? n.fallbackRoot : tt(e.fallbackRoot) ? e.fallbackRoot : !0,
            C = !!e.fallbackFormat,
            R = Ut(e.missing) ? e.missing : null,
            M = Ut(e.missing) ? S_(e.missing) : null,
            W = Ut(e.postTranslation) ? e.postTranslation : null,
            I = n ? n.warnHtmlMessage : tt(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
            K = !!e.escapeParameter;
        const q = n ? n.modifiers : Ge(e.modifiers) ? e.modifiers : {};
        let j = e.pluralRules || n && n.pluralRules,
            G;
        G = (() => {
            const N = {
                version: qk,
                locale: o.value,
                fallbackLocale: c.value,
                messages: u.value,
                modifiers: q,
                pluralRules: j,
                missing: M === null ? void 0 : M,
                missingWarn: g,
                fallbackWarn: y,
                fallbackFormat: C,
                unresolving: !0,
                postTranslation: W === null ? void 0 : W,
                warnHtmlMessage: I,
                escapeParameter: K,
                messageResolver: e.messageResolver,
                __meta: {
                    framework: "vue"
                }
            };
            return N.datetimeFormats = f.value, N.numberFormats = h.value, N.__datetimeFormatters = Ge(G) ? G.__datetimeFormatters : void 0, N.__numberFormatters = Ge(G) ? G.__numberFormatters : void 0, Gk(N)
        })(), Ba(G, o.value, c.value);

        function ce() {
            return [o.value, c.value, u.value, f.value, h.value]
        }
        const le = Sn({
                get: () => o.value,
                set: N => {
                    o.value = N, G.locale = o.value
                }
            }),
            ue = Sn({
                get: () => c.value,
                set: N => {
                    c.value = N, G.fallbackLocale = c.value, Ba(G, o.value, N)
                }
            }),
            Ie = Sn(() => u.value),
            be = Sn(() => f.value),
            fe = Sn(() => h.value);

        function Oe() {
            return Ut(W) ? W : null
        }

        function F(N) {
            W = N, G.postTranslation = N
        }

        function re() {
            return R
        }

        function de(N) {
            N !== null && (M = S_(N)), R = N, G.missing = M
        }
        const _e = (N, H, he, pe, Ne, xe) => {
            ce();
            let w;
            if (w = N(G), Vt(w) && w === Pl) {
                const [T, $] = H();
                return n && b ? pe(n) : Ne(T)
            } else {
                if (xe(w)) return w;
                throw qt(Gt.UNEXPECTED_RETURN_TYPE)
            }
        };

        function me(...N) {
            return _e(H => Reflect.apply(m_, null, [H, ...N]), () => Nd(...N), "translate", H => Reflect.apply(H.t, H, [...N]), H => H, H => ve(H))
        }

        function Se(...N) {
            const [H, he, pe] = N;
            if (pe && !St(pe)) throw qt(Gt.INVALID_ARGUMENT);
            return me(H, he, cn({
                resolvedMessage: !0
            }, pe || {}))
        }

        function Me(...N) {
            return _e(H => Reflect.apply(v_, null, [H, ...N]), () => Ld(...N), "datetime format", H => Reflect.apply(H.d, H, [...N]), () => f_, H => ve(H))
        }

        function Fe(...N) {
            return _e(H => Reflect.apply(y_, null, [H, ...N]), () => $d(...N), "number format", H => Reflect.apply(H.n, H, [...N]), () => f_, H => ve(H))
        }

        function Je(N) {
            return N.map(H => ve(H) || Vt(H) || tt(H) ? b_(String(H)) : H)
        }
        const jt = {
            normalize: Je,
            interpolate: N => N,
            type: "vnode"
        };

        function wt(...N) {
            return _e(H => {
                let he;
                const pe = H;
                try {
                    pe.processor = jt, he = Reflect.apply(m_, null, [pe, ...N])
                } finally {
                    pe.processor = null
                }
                return he
            }, () => Nd(...N), "translate", H => H[Pd](...N), H => [b_(H)], H => Tt(H))
        }

        function zt(...N) {
            return _e(H => Reflect.apply(y_, null, [H, ...N]), () => $d(...N), "number format", H => H[Dd](...N), () => [], H => ve(H) || Tt(H))
        }

        function it(...N) {
            return _e(H => Reflect.apply(v_, null, [H, ...N]), () => Ld(...N), "datetime format", H => H[kd](...N), () => [], H => ve(H) || Tt(H))
        }

        function mt(N) {
            j = N, G.pluralRules = j
        }

        function st(N, H) {
            const he = ve(H) ? H : o.value,
                pe = Nt(he);
            return G.messageResolver(pe, N) !== null
        }

        function $t(N) {
            let H = null;
            const he = nT(G, c.value, o.value);
            for (let pe = 0; pe < he.length; pe++) {
                const Ne = u.value[he[pe]] || {},
                    xe = G.messageResolver(Ne, N);
                if (xe != null) {
                    H = xe;
                    break
                }
            }
            return H
        }

        function Dt(N) {
            const H = $t(N);
            return H != null ? H : n ? n.tm(N) || {} : {}
        }

        function Nt(N) {
            return u.value[N] || {}
        }

        function m(N, H) {
            u.value[N] = H, G.messages = u.value
        }

        function p(N, H) {
            u.value[N] = u.value[N] || {}, Ja(H, u.value[N]), G.messages = u.value
        }

        function O(N) {
            return f.value[N] || {}
        }

        function x(N, H) {
            f.value[N] = H, G.datetimeFormats = f.value, __(G, N, H)
        }

        function B(N, H) {
            f.value[N] = cn(f.value[N] || {}, H), G.datetimeFormats = f.value, __(G, N, H)
        }

        function k(N) {
            return h.value[N] || {}
        }

        function ae(N, H) {
            h.value[N] = H, G.numberFormats = h.value, E_(G, N, H)
        }

        function Z(N, H) {
            h.value[N] = cn(h.value[N] || {}, H), G.numberFormats = h.value, E_(G, N, H)
        }
        T_++, n && Id && (mi(n.locale, N => {
            s && (o.value = N, G.locale = N, Ba(G, o.value, c.value))
        }), mi(n.fallbackLocale, N => {
            s && (c.value = N, G.fallbackLocale = N, Ba(G, o.value, c.value))
        }));
        const X = {
            id: T_,
            locale: le,
            fallbackLocale: ue,
            get inheritLocale() {
                return s
            },
            set inheritLocale(N) {
                s = N, N && n && (o.value = n.locale.value, c.value = n.fallbackLocale.value, Ba(G, o.value, c.value))
            },
            get availableLocales() {
                return Object.keys(u.value).sort()
            },
            messages: Ie,
            get modifiers() {
                return q
            },
            get pluralRules() {
                return j || {}
            },
            get isGlobal() {
                return r
            },
            get missingWarn() {
                return g
            },
            set missingWarn(N) {
                g = N, G.missingWarn = g
            },
            get fallbackWarn() {
                return y
            },
            set fallbackWarn(N) {
                y = N, G.fallbackWarn = y
            },
            get fallbackRoot() {
                return b
            },
            set fallbackRoot(N) {
                b = N
            },
            get fallbackFormat() {
                return C
            },
            set fallbackFormat(N) {
                C = N, G.fallbackFormat = C
            },
            get warnHtmlMessage() {
                return I
            },
            set warnHtmlMessage(N) {
                I = N, G.warnHtmlMessage = N
            },
            get escapeParameter() {
                return K
            },
            set escapeParameter(N) {
                K = N, G.escapeParameter = N
            },
            t: me,
            getLocaleMessage: Nt,
            setLocaleMessage: m,
            mergeLocaleMessage: p,
            getPostTranslationHandler: Oe,
            setPostTranslationHandler: F,
            getMissingHandler: re,
            setMissingHandler: de,
            [dT]: mt
        };
        return X.datetimeFormats = be, X.numberFormats = fe, X.rt = Se, X.te = st, X.tm = Dt, X.d = Me, X.n = Fe, X.getDateTimeFormat = O, X.setDateTimeFormat = x, X.mergeDateTimeFormat = B, X.getNumberFormat = k, X.setNumberFormat = ae, X.mergeNumberFormat = Z, X[hT] = e.__injectWithOption, X[Pd] = wt, X[kd] = it, X[Dd] = zt, X
    }

    function Xk(e) {
        const t = ve(e.locale) ? e.locale : So,
            n = ve(e.fallbackLocale) || Tt(e.fallbackLocale) || Ge(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : t,
            r = Ut(e.missing) ? e.missing : void 0,
            s = tt(e.silentTranslationWarn) || Ti(e.silentTranslationWarn) ? !e.silentTranslationWarn : !0,
            o = tt(e.silentFallbackWarn) || Ti(e.silentFallbackWarn) ? !e.silentFallbackWarn : !0,
            c = tt(e.fallbackRoot) ? e.fallbackRoot : !0,
            u = !!e.formatFallbackMessages,
            f = Ge(e.modifiers) ? e.modifiers : {},
            h = e.pluralizationRules,
            g = Ut(e.postTranslation) ? e.postTranslation : void 0,
            y = ve(e.warnHtmlInMessage) ? e.warnHtmlInMessage !== "off" : !0,
            b = !!e.escapeParameterHtml,
            C = tt(e.sync) ? e.sync : !0;
        let R = e.messages;
        if (Ge(e.sharedMessages)) {
            const G = e.sharedMessages;
            R = Object.keys(G).reduce((ce, le) => {
                const ue = ce[le] || (ce[le] = {});
                return cn(ue, G[le]), ce
            }, R || {})
        }
        const {
            __i18n: M,
            __root: W,
            __injectWithOption: I
        } = e, K = e.datetimeFormats, q = e.numberFormats, j = e.flatJson;
        return {
            locale: t,
            fallbackLocale: n,
            messages: R,
            flatJson: j,
            datetimeFormats: K,
            numberFormats: q,
            missing: r,
            missingWarn: s,
            fallbackWarn: o,
            fallbackRoot: c,
            fallbackFormat: u,
            modifiers: f,
            pluralRules: h,
            postTranslation: g,
            warnHtmlMessage: y,
            escapeParameter: b,
            messageResolver: e.messageResolver,
            inheritLocale: C,
            __i18n: M,
            __root: W,
            __injectWithOption: I
        }
    }

    function xd(e = {}, t) {
        {
            const n = Gh(Xk(e)),
                r = {
                    id: n.id,
                    get locale() {
                        return n.locale.value
                    },
                    set locale(s) {
                        n.locale.value = s
                    },
                    get fallbackLocale() {
                        return n.fallbackLocale.value
                    },
                    set fallbackLocale(s) {
                        n.fallbackLocale.value = s
                    },
                    get messages() {
                        return n.messages.value
                    },
                    get datetimeFormats() {
                        return n.datetimeFormats.value
                    },
                    get numberFormats() {
                        return n.numberFormats.value
                    },
                    get availableLocales() {
                        return n.availableLocales
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
                        return n.getMissingHandler()
                    },
                    set missing(s) {
                        n.setMissingHandler(s)
                    },
                    get silentTranslationWarn() {
                        return tt(n.missingWarn) ? !n.missingWarn : n.missingWarn
                    },
                    set silentTranslationWarn(s) {
                        n.missingWarn = tt(s) ? !s : s
                    },
                    get silentFallbackWarn() {
                        return tt(n.fallbackWarn) ? !n.fallbackWarn : n.fallbackWarn
                    },
                    set silentFallbackWarn(s) {
                        n.fallbackWarn = tt(s) ? !s : s
                    },
                    get modifiers() {
                        return n.modifiers
                    },
                    get formatFallbackMessages() {
                        return n.fallbackFormat
                    },
                    set formatFallbackMessages(s) {
                        n.fallbackFormat = s
                    },
                    get postTranslation() {
                        return n.getPostTranslationHandler()
                    },
                    set postTranslation(s) {
                        n.setPostTranslationHandler(s)
                    },
                    get sync() {
                        return n.inheritLocale
                    },
                    set sync(s) {
                        n.inheritLocale = s
                    },
                    get warnHtmlInMessage() {
                        return n.warnHtmlMessage ? "warn" : "off"
                    },
                    set warnHtmlInMessage(s) {
                        n.warnHtmlMessage = s !== "off"
                    },
                    get escapeParameterHtml() {
                        return n.escapeParameter
                    },
                    set escapeParameterHtml(s) {
                        n.escapeParameter = s
                    },
                    get preserveDirectiveContent() {
                        return !0
                    },
                    set preserveDirectiveContent(s) {},
                    get pluralizationRules() {
                        return n.pluralRules || {}
                    },
                    __composer: n,
                    t(...s) {
                        const [o, c, u] = s, f = {};
                        let h = null,
                            g = null;
                        if (!ve(o)) throw qt(Gt.INVALID_ARGUMENT);
                        const y = o;
                        return ve(c) ? f.locale = c : Tt(c) ? h = c : Ge(c) && (g = c), Tt(u) ? h = u : Ge(u) && (g = u), Reflect.apply(n.t, n, [y, h || g || {}, f])
                    },
                    rt(...s) {
                        return Reflect.apply(n.rt, n, [...s])
                    },
                    tc(...s) {
                        const [o, c, u] = s, f = {
                            plural: 1
                        };
                        let h = null,
                            g = null;
                        if (!ve(o)) throw qt(Gt.INVALID_ARGUMENT);
                        const y = o;
                        return ve(c) ? f.locale = c : Vt(c) ? f.plural = c : Tt(c) ? h = c : Ge(c) && (g = c), ve(u) ? f.locale = u : Tt(u) ? h = u : Ge(u) && (g = u), Reflect.apply(n.t, n, [y, h || g || {}, f])
                    },
                    te(s, o) {
                        return n.te(s, o)
                    },
                    tm(s) {
                        return n.tm(s)
                    },
                    getLocaleMessage(s) {
                        return n.getLocaleMessage(s)
                    },
                    setLocaleMessage(s, o) {
                        n.setLocaleMessage(s, o)
                    },
                    mergeLocaleMessage(s, o) {
                        n.mergeLocaleMessage(s, o)
                    },
                    d(...s) {
                        return Reflect.apply(n.d, n, [...s])
                    },
                    getDateTimeFormat(s) {
                        return n.getDateTimeFormat(s)
                    },
                    setDateTimeFormat(s, o) {
                        n.setDateTimeFormat(s, o)
                    },
                    mergeDateTimeFormat(s, o) {
                        n.mergeDateTimeFormat(s, o)
                    },
                    n(...s) {
                        return Reflect.apply(n.n, n, [...s])
                    },
                    getNumberFormat(s) {
                        return n.getNumberFormat(s)
                    },
                    setNumberFormat(s, o) {
                        n.setNumberFormat(s, o)
                    },
                    mergeNumberFormat(s, o) {
                        n.mergeNumberFormat(s, o)
                    },
                    getChoiceIndex(s, o) {
                        return -1
                    },
                    __onComponentInstanceCreated(s) {
                        const {
                            componentInstanceCreatedListener: o
                        } = e;
                        o && o(s, r)
                    }
                };
            return r
        }
    }
    const Wh = {
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

    function Jk({
        slots: e
    }, t) {
        return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((r, s) => r = [...r, ...Tt(s.children) ? s.children : [s]], []) : t.reduce((n, r) => {
            const s = e[r];
            return s && (n[r] = s()), n
        }, {})
    }

    function gT(e) {
        return ut
    }
    const O_ = {
        name: "i18n-t",
        props: cn({
            keypath: {
                type: String,
                required: !0
            },
            plural: {
                type: [Number, String],
                validator: e => Vt(e) || !isNaN(e)
            }
        }, Wh),
        setup(e, t) {
            const {
                slots: n,
                attrs: r
            } = t, s = e.i18n || jh({
                useScope: e.scope,
                __useComponent: !0
            });
            return () => {
                const o = Object.keys(n).filter(y => y !== "_"),
                    c = {};
                e.locale && (c.locale = e.locale), e.plural !== void 0 && (c.plural = ve(e.plural) ? +e.plural : e.plural);
                const u = Jk(t, o),
                    f = s[Pd](e.keypath, u, c),
                    h = cn({}, r),
                    g = ve(e.tag) || St(e.tag) ? e.tag : gT();
                return wr(g, h, f)
            }
        }
    };

    function Qk(e) {
        return Tt(e) && !ve(e[0])
    }

    function mT(e, t, n, r) {
        const {
            slots: s,
            attrs: o
        } = t;
        return () => {
            const c = {
                part: !0
            };
            let u = {};
            e.locale && (c.locale = e.locale), ve(e.format) ? c.key = e.format : St(e.format) && (ve(e.format.key) && (c.key = e.format.key), u = Object.keys(e.format).reduce((b, C) => n.includes(C) ? cn({}, b, {
                [C]: e.format[C]
            }) : b, {}));
            const f = r(e.value, c, u);
            let h = [c.key];
            Tt(f) ? h = f.map((b, C) => {
                const R = s[b.type],
                    M = R ? R({
                        [b.type]: b.value,
                        index: C,
                        parts: f
                    }) : [b.value];
                return Qk(M) && (M[0].key = `${b.type}-${C}`), M
            }) : ve(f) && (h = [f]);
            const g = cn({}, o),
                y = ve(e.tag) || St(e.tag) ? e.tag : gT();
            return wr(y, g, h)
        }
    }
    const w_ = {
            name: "i18n-n",
            props: cn({
                value: {
                    type: Number,
                    required: !0
                },
                format: {
                    type: [String, Object]
                }
            }, Wh),
            setup(e, t) {
                const n = e.i18n || jh({
                    useScope: "parent",
                    __useComponent: !0
                });
                return mT(e, t, uT, (...r) => n[Dd](...r))
            }
        },
        C_ = {
            name: "i18n-d",
            props: cn({
                value: {
                    type: [Number, Date],
                    required: !0
                },
                format: {
                    type: [String, Object]
                }
            }, Wh),
            setup(e, t) {
                const n = e.i18n || jh({
                    useScope: "parent",
                    __useComponent: !0
                });
                return mT(e, t, lT, (...r) => n[kd](...r))
            }
        };

    function Zk(e, t) {
        const n = e;
        if (e.mode === "composition") return n.__getInstance(t) || e.global; {
            const r = n.__getInstance(t);
            return r != null ? r.__composer : e.global.__composer
        }
    }

    function eD(e) {
        const t = c => {
            const {
                instance: u,
                modifiers: f,
                value: h
            } = c;
            if (!u || !u.$) throw qt(Gt.UNEXPECTED_ERROR);
            const g = Zk(e, u.$),
                y = A_(h);
            return [Reflect.apply(g.t, g, [...I_(y)]), g]
        };
        return {
            created: (c, u) => {
                const [f, h] = t(u);
                Id && e.global === h && (c.__i18nWatcher = mi(h.locale, () => {
                    u.instance && u.instance.$forceUpdate()
                })), c.__composer = h, c.textContent = f
            },
            unmounted: c => {
                Id && c.__i18nWatcher && (c.__i18nWatcher(), c.__i18nWatcher = void 0, delete c.__i18nWatcher), c.__composer && (c.__composer = void 0, delete c.__composer)
            },
            beforeUpdate: (c, {
                value: u
            }) => {
                if (c.__composer) {
                    const f = c.__composer,
                        h = A_(u);
                    c.textContent = Reflect.apply(f.t, f, [...I_(h)])
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

    function A_(e) {
        if (ve(e)) return {
            path: e
        };
        if (Ge(e)) {
            if (!("path" in e)) throw qt(Gt.REQUIRED_VALUE, "path");
            return e
        } else throw qt(Gt.INVALID_VALUE)
    }

    function I_(e) {
        const {
            path: t,
            locale: n,
            args: r,
            choice: s,
            plural: o
        } = e, c = {}, u = r || {};
        return ve(n) && (c.locale = n), Vt(s) && (c.plural = s), Vt(o) && (c.plural = o), [t, u, c]
    }

    function tD(e, t, ...n) {
        const r = Ge(n[0]) ? n[0] : {},
            s = !!r.useI18nComponentName;
        (tt(r.globalInstall) ? r.globalInstall : !0) && (e.component(s ? "i18n" : O_.name, O_), e.component(w_.name, w_), e.component(C_.name, C_)), e.directive("t", eD(t))
    }

    function nD(e, t, n) {
        return {
            beforeCreate() {
                const r = Ei();
                if (!r) throw qt(Gt.UNEXPECTED_ERROR);
                const s = this.$options;
                if (s.i18n) {
                    const o = s.i18n;
                    s.__i18n && (o.__i18n = s.__i18n), o.__root = t, this === this.$root ? this.$i18n = R_(e, o) : (o.__injectWithOption = !0, this.$i18n = xd(o))
                } else s.__i18n ? this === this.$root ? this.$i18n = R_(e, s) : this.$i18n = xd({
                    __i18n: s.__i18n,
                    __injectWithOption: !0,
                    __root: t
                }) : this.$i18n = e;
                s.__i18nGlobal && pT(t, s, s), e.__onComponentInstanceCreated(this.$i18n), n.__setInstance(r, this.$i18n), this.$t = (...o) => this.$i18n.t(...o), this.$rt = (...o) => this.$i18n.rt(...o), this.$tc = (...o) => this.$i18n.tc(...o), this.$te = (o, c) => this.$i18n.te(o, c), this.$d = (...o) => this.$i18n.d(...o), this.$n = (...o) => this.$i18n.n(...o), this.$tm = o => this.$i18n.tm(o)
            },
            mounted() {},
            unmounted() {
                const r = Ei();
                if (!r) throw qt(Gt.UNEXPECTED_ERROR);
                delete this.$t, delete this.$rt, delete this.$tc, delete this.$te, delete this.$d, delete this.$n, delete this.$tm, n.__deleteInstance(r), delete this.$i18n
            }
        }
    }

    function R_(e, t) {
        e.locale = t.locale || e.locale, e.fallbackLocale = t.fallbackLocale || e.fallbackLocale, e.missing = t.missing || e.missing, e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn, e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn, e.formatFallbackMessages = t.formatFallbackMessages || e.formatFallbackMessages, e.postTranslation = t.postTranslation || e.postTranslation, e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage, e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml, e.sync = t.sync || e.sync, e.__composer[dT](t.pluralizationRules || e.pluralizationRules);
        const n = kl(e.locale, {
            messages: t.messages,
            __i18n: t.__i18n
        });
        return Object.keys(n).forEach(r => e.mergeLocaleMessage(r, n[r])), t.datetimeFormats && Object.keys(t.datetimeFormats).forEach(r => e.mergeDateTimeFormat(r, t.datetimeFormats[r])), t.numberFormats && Object.keys(t.numberFormats).forEach(r => e.mergeNumberFormat(r, t.numberFormats[r])), e
    }
    const rD = wi("global-vue-i18n");

    function iD(e = {}, t) {
        const n = tt(e.legacy) ? e.legacy : !0,
            r = tt(e.globalInjection) ? e.globalInjection : !0,
            s = n ? !!e.allowComposition : !0,
            o = new Map,
            [c, u] = sD(e, n),
            f = wi("");

        function h(b) {
            return o.get(b) || null
        }

        function g(b, C) {
            o.set(b, C)
        }

        function y(b) {
            o.delete(b)
        } {
            const b = {
                get mode() {
                    return n ? "legacy" : "composition"
                },
                get allowComposition() {
                    return s
                },
                async install(C, ...R) {
                    C.__VUE_I18N_SYMBOL__ = f, C.provide(C.__VUE_I18N_SYMBOL__, b), !n && r && pD(C, b.global), tD(C, b, ...R), n && C.mixin(nD(u, u.__composer, b));
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
                __setInstance: g,
                __deleteInstance: y
            };
            return b
        }
    }

    function jh(e = {}) {
        const t = Ei();
        if (t == null) throw qt(Gt.MUST_BE_CALL_SETUP_TOP);
        if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__) throw qt(Gt.NOT_INSLALLED);
        const n = aD(t),
            r = cD(n),
            s = zk(t),
            o = oD(e, s);
        if (n.mode === "legacy" && !e.__useComponent) {
            if (!n.allowComposition) throw qt(Gt.NOT_AVAILABLE_IN_LEGACY_MODE);
            return fD(t, o, r, e)
        }
        if (o === "global") return pT(r, e, s), r;
        if (o === "parent") {
            let f = lD(n, t, e.__useComponent);
            return f == null && (f = r), f
        }
        const c = n;
        let u = c.__getInstance(t);
        if (u == null) {
            const f = cn({}, e);
            "__i18n" in s && (f.__i18n = s.__i18n), r && (f.__root = r), u = Gh(f), uD(c, t), c.__setInstance(t, u)
        }
        return u
    }

    function sD(e, t, n) {
        const r = TL(); {
            const s = t ? r.run(() => xd(e)) : r.run(() => Gh(e));
            if (s == null) throw qt(Gt.UNEXPECTED_ERROR);
            return [r, s]
        }
    }

    function aD(e) {
        {
            const t = hn(e.isCE ? rD : e.appContext.app.__VUE_I18N_SYMBOL__);
            if (!t) throw qt(e.isCE ? Gt.NOT_INSLALLED_WITH_PROVIDE : Gt.UNEXPECTED_ERROR);
            return t
        }
    }

    function oD(e, t) {
        return Ll(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local"
    }

    function cD(e) {
        return e.mode === "composition" ? e.global : e.global.__composer
    }

    function lD(e, t, n = !1) {
        let r = null;
        const s = t.root;
        let o = t.parent;
        for (; o != null;) {
            const c = e;
            if (e.mode === "composition") r = c.__getInstance(o);
            else {
                const u = c.__getInstance(o);
                u != null && (r = u.__composer, n && r && !r[hT] && (r = null))
            }
            if (r != null || s === o) break;
            o = o.parent
        }
        return r
    }

    function uD(e, t, n) {
        Cl(() => {}, t), Al(() => {
            e.__deleteInstance(t)
        }, t)
    }

    function fD(e, t, n, r = {}) {
        const s = t === "local",
            o = XL(null);
        if (s && e.proxy && !(e.proxy.$options.i18n || e.proxy.$options.__i18n)) throw qt(Gt.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
        const c = tt(r.inheritLocale) ? r.inheritLocale : !0,
            u = et(s && c ? n.locale.value : ve(r.locale) ? r.locale : So),
            f = et(s && c ? n.fallbackLocale.value : ve(r.fallbackLocale) || Tt(r.fallbackLocale) || Ge(r.fallbackLocale) || r.fallbackLocale === !1 ? r.fallbackLocale : u.value),
            h = et(kl(u.value, r)),
            g = et(Ge(r.datetimeFormats) ? r.datetimeFormats : {
                [u.value]: {}
            }),
            y = et(Ge(r.numberFormats) ? r.numberFormats : {
                [u.value]: {}
            }),
            b = s ? n.missingWarn : tt(r.missingWarn) || Ti(r.missingWarn) ? r.missingWarn : !0,
            C = s ? n.fallbackWarn : tt(r.fallbackWarn) || Ti(r.fallbackWarn) ? r.fallbackWarn : !0,
            R = s ? n.fallbackRoot : tt(r.fallbackRoot) ? r.fallbackRoot : !0,
            M = !!r.fallbackFormat,
            W = Ut(r.missing) ? r.missing : null,
            I = Ut(r.postTranslation) ? r.postTranslation : null,
            K = s ? n.warnHtmlMessage : tt(r.warnHtmlMessage) ? r.warnHtmlMessage : !0,
            q = !!r.escapeParameter,
            j = s ? n.modifiers : Ge(r.modifiers) ? r.modifiers : {},
            G = r.pluralRules || s && n.pluralRules;

        function se() {
            return [u.value, f.value, h.value, g.value, y.value]
        }
        const ce = Sn({
                get: () => o.value ? o.value.locale.value : u.value,
                set: p => {
                    o.value && (o.value.locale.value = p), u.value = p
                }
            }),
            le = Sn({
                get: () => o.value ? o.value.fallbackLocale.value : f.value,
                set: p => {
                    o.value && (o.value.fallbackLocale.value = p), f.value = p
                }
            }),
            ue = Sn(() => o.value ? o.value.messages.value : h.value),
            Ie = Sn(() => g.value),
            be = Sn(() => y.value);

        function fe() {
            return o.value ? o.value.getPostTranslationHandler() : I
        }

        function Oe(p) {
            o.value && o.value.setPostTranslationHandler(p)
        }

        function F() {
            return o.value ? o.value.getMissingHandler() : W
        }

        function re(p) {
            o.value && o.value.setMissingHandler(p)
        }

        function de(p) {
            return se(), p()
        }

        function _e(...p) {
            return o.value ? de(() => Reflect.apply(o.value.t, null, [...p])) : de(() => "")
        }

        function me(...p) {
            return o.value ? Reflect.apply(o.value.rt, null, [...p]) : ""
        }

        function Se(...p) {
            return o.value ? de(() => Reflect.apply(o.value.d, null, [...p])) : de(() => "")
        }

        function Me(...p) {
            return o.value ? de(() => Reflect.apply(o.value.n, null, [...p])) : de(() => "")
        }

        function Fe(p) {
            return o.value ? o.value.tm(p) : {}
        }

        function Je(p, O) {
            return o.value ? o.value.te(p, O) : !1
        }

        function Ot(p) {
            return o.value ? o.value.getLocaleMessage(p) : {}
        }

        function jt(p, O) {
            o.value && (o.value.setLocaleMessage(p, O), h.value[p] = O)
        }

        function wt(p, O) {
            o.value && o.value.mergeLocaleMessage(p, O)
        }

        function zt(p) {
            return o.value ? o.value.getDateTimeFormat(p) : {}
        }

        function it(p, O) {
            o.value && (o.value.setDateTimeFormat(p, O), g.value[p] = O)
        }

        function mt(p, O) {
            o.value && o.value.mergeDateTimeFormat(p, O)
        }

        function st(p) {
            return o.value ? o.value.getNumberFormat(p) : {}
        }

        function $t(p, O) {
            o.value && (o.value.setNumberFormat(p, O), y.value[p] = O)
        }

        function Dt(p, O) {
            o.value && o.value.mergeNumberFormat(p, O)
        }
        const Nt = {
            get id() {
                return o.value ? o.value.id : -1
            },
            locale: ce,
            fallbackLocale: le,
            messages: ue,
            datetimeFormats: Ie,
            numberFormats: be,
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
                return o.value ? o.value.modifiers : j
            },
            get pluralRules() {
                return o.value ? o.value.pluralRules : G
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
                return o.value ? o.value.fallbackRoot : R
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
                return o.value ? o.value.escapeParameter : q
            },
            set escapeParameter(p) {
                o.value && (o.value.escapeParameter = p)
            },
            t: _e,
            getPostTranslationHandler: fe,
            setPostTranslationHandler: Oe,
            getMissingHandler: F,
            setMissingHandler: re,
            rt: me,
            d: Se,
            n: Me,
            tm: Fe,
            te: Je,
            getLocaleMessage: Ot,
            setLocaleMessage: jt,
            mergeLocaleMessage: wt,
            getDateTimeFormat: zt,
            setDateTimeFormat: it,
            mergeDateTimeFormat: mt,
            getNumberFormat: st,
            setNumberFormat: $t,
            mergeNumberFormat: Dt
        };

        function m(p) {
            p.locale.value = u.value, p.fallbackLocale.value = f.value, Object.keys(h.value).forEach(O => {
                p.mergeLocaleMessage(O, h.value[O])
            }), Object.keys(g.value).forEach(O => {
                p.mergeDateTimeFormat(O, g.value[O])
            }), Object.keys(y.value).forEach(O => {
                p.mergeNumberFormat(O, y.value[O])
            }), p.escapeParameter = q, p.fallbackFormat = M, p.fallbackRoot = R, p.fallbackWarn = C, p.missingWarn = b, p.warnHtmlMessage = K
        }
        return Ib(() => {
            if (e.proxy == null || e.proxy.$i18n == null) throw qt(Gt.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
            const p = o.value = e.proxy.$i18n.__composer;
            t === "global" ? (u.value = p.locale.value, f.value = p.fallbackLocale.value, h.value = p.messages.value, g.value = p.datetimeFormats.value, y.value = p.numberFormats.value) : s && m(p)
        }), Nt
    }
    const dD = ["locale", "fallbackLocale", "availableLocales"],
        hD = ["t", "rt", "d", "n", "tm"];

    function pD(e, t) {
        const n = Object.create(null);
        dD.forEach(r => {
            const s = Object.getOwnPropertyDescriptor(t, r);
            if (!s) throw qt(Gt.UNEXPECTED_ERROR);
            const o = on(s.value) ? {
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
            Object.defineProperty(n, r, o)
        }), e.config.globalProperties.$i18n = n, hD.forEach(r => {
            const s = Object.getOwnPropertyDescriptor(t, r);
            if (!s || !s.value) throw qt(Gt.UNEXPECTED_ERROR);
            Object.defineProperty(e.config.globalProperties, `$${r}`, s)
        })
    }
    Uk(jk);
    Fk(bk);
    Bk(nT);
    class Si {
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
        static gameStarted(t, n) {
            const r = {
                tag: t
            };
            n.isUGC !== void 0 && (r.is_ugc = n.isUGC), n.isSequel !== void 0 && (r.is_sequel = n.isSequel), n.locale !== void 0 && (r.locale = n.locale), n.mode !== void 0 && (r.mode = n.mode), n.numberOfPlayer !== void 0 && (r.number_of_players = n.numberOfPlayer), gtag("event", "game_start", r)
        }
        static bannerClick(t, n) {
            gtag("event", "banner_click", {
                url: t,
                location: n
            })
        }
        static externalLinkClick(t, n) {
            gtag("event", "external_link_click", {
                url: t,
                location: n
            })
        }
        static galleryClick(t, n) {
            gtag("event", "gallery_click", {
                category_id: t,
                location: n
            })
        }
        static galleryImpression(t, n) {
            gtag("event", "gallery_impression", {
                category_id: t,
                location: n
            })
        }
        static moderatorConnected(t) {
            gtag("event", "moderator_connected", {
                tag: t
            })
        }
        static itemModerated(t, n) {
            gtag("event", "item_moderated", {
                tag: t,
                was_rejected: n
            })
        }
        static playerKicked(t, n) {
            gtag("event", "player_kicked", {
                tag: t,
                is_lobby: n
            })
        }
    }
    var Ft = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

    function gD(e) {
        var t = e.default;
        if (typeof t == "function") {
            var n = function() {
                return t.apply(this, arguments)
            };
            n.prototype = t.prototype
        } else n = {};
        return Object.defineProperty(n, "__esModule", {
            value: !0
        }), Object.keys(e).forEach(function(r) {
            var s = Object.getOwnPropertyDescriptor(e, r);
            Object.defineProperty(n, r, s.get ? s : {
                enumerable: !0,
                get: function() {
                    return e[r]
                }
            })
        }), n
    }

    function mD() {
        this.__data__ = [], this.size = 0
    }
    var vD = mD;

    function _D(e, t) {
        return e === t || e !== e && t !== t
    }
    var Dl = _D,
        yD = Dl;

    function ED(e, t) {
        for (var n = e.length; n--;)
            if (yD(e[n][0], t)) return n;
        return -1
    }
    var Ml = ED,
        bD = Ml,
        TD = Array.prototype,
        SD = TD.splice;

    function OD(e) {
        var t = this.__data__,
            n = bD(t, e);
        if (n < 0) return !1;
        var r = t.length - 1;
        return n == r ? t.pop() : SD.call(t, n, 1), --this.size, !0
    }
    var wD = OD,
        CD = Ml;

    function AD(e) {
        var t = this.__data__,
            n = CD(t, e);
        return n < 0 ? void 0 : t[n][1]
    }
    var ID = AD,
        RD = Ml;

    function ND(e) {
        return RD(this.__data__, e) > -1
    }
    var LD = ND,
        $D = Ml;

    function PD(e, t) {
        var n = this.__data__,
            r = $D(n, e);
        return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this
    }
    var kD = PD,
        DD = vD,
        MD = wD,
        xD = ID,
        UD = LD,
        FD = kD;

    function pa(e) {
        var t = -1,
            n = e == null ? 0 : e.length;
        for (this.clear(); ++t < n;) {
            var r = e[t];
            this.set(r[0], r[1])
        }
    }
    pa.prototype.clear = DD;
    pa.prototype.delete = MD;
    pa.prototype.get = xD;
    pa.prototype.has = UD;
    pa.prototype.set = FD;
    var xl = pa,
        BD = xl;

    function GD() {
        this.__data__ = new BD, this.size = 0
    }
    var WD = GD;

    function jD(e) {
        var t = this.__data__,
            n = t.delete(e);
        return this.size = t.size, n
    }
    var HD = jD;

    function KD(e) {
        return this.__data__.get(e)
    }
    var VD = KD;

    function YD(e) {
        return this.__data__.has(e)
    }
    var qD = YD,
        zD = typeof Ft == "object" && Ft && Ft.Object === Object && Ft,
        vT = zD,
        XD = vT,
        JD = typeof self == "object" && self && self.Object === Object && self,
        QD = XD || JD || Function("return this")(),
        Ir = QD,
        ZD = Ir,
        eM = ZD.Symbol,
        Ul = eM,
        N_ = Ul,
        _T = Object.prototype,
        tM = _T.hasOwnProperty,
        nM = _T.toString,
        Ga = N_ ? N_.toStringTag : void 0;

    function rM(e) {
        var t = tM.call(e, Ga),
            n = e[Ga];
        try {
            e[Ga] = void 0;
            var r = !0
        } catch {}
        var s = nM.call(e);
        return r && (t ? e[Ga] = n : delete e[Ga]), s
    }
    var iM = rM,
        sM = Object.prototype,
        aM = sM.toString;

    function oM(e) {
        return aM.call(e)
    }
    var cM = oM,
        L_ = Ul,
        lM = iM,
        uM = cM,
        fM = "[object Null]",
        dM = "[object Undefined]",
        $_ = L_ ? L_.toStringTag : void 0;

    function hM(e) {
        return e == null ? e === void 0 ? dM : fM : $_ && $_ in Object(e) ? lM(e) : uM(e)
    }
    var ga = hM;

    function pM(e) {
        var t = typeof e;
        return e != null && (t == "object" || t == "function")
    }
    var Ai = pM,
        gM = ga,
        mM = Ai,
        vM = "[object AsyncFunction]",
        _M = "[object Function]",
        yM = "[object GeneratorFunction]",
        EM = "[object Proxy]";

    function bM(e) {
        if (!mM(e)) return !1;
        var t = gM(e);
        return t == _M || t == yM || t == vM || t == EM
    }
    var Hh = bM,
        TM = Ir,
        SM = TM["__core-js_shared__"],
        OM = SM,
        Cf = OM,
        P_ = function() {
            var e = /[^.]+$/.exec(Cf && Cf.keys && Cf.keys.IE_PROTO || "");
            return e ? "Symbol(src)_1." + e : ""
        }();

    function wM(e) {
        return !!P_ && P_ in e
    }
    var CM = wM,
        AM = Function.prototype,
        IM = AM.toString;

    function RM(e) {
        if (e != null) {
            try {
                return IM.call(e)
            } catch {}
            try {
                return e + ""
            } catch {}
        }
        return ""
    }
    var yT = RM,
        NM = Hh,
        LM = CM,
        $M = Ai,
        PM = yT,
        kM = /[\\^$.*+?()[\]{}|]/g,
        DM = /^\[object .+?Constructor\]$/,
        MM = Function.prototype,
        xM = Object.prototype,
        UM = MM.toString,
        FM = xM.hasOwnProperty,
        BM = RegExp("^" + UM.call(FM).replace(kM, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

    function GM(e) {
        if (!$M(e) || LM(e)) return !1;
        var t = NM(e) ? BM : DM;
        return t.test(PM(e))
    }
    var WM = GM;

    function jM(e, t) {
        return e == null ? void 0 : e[t]
    }
    var HM = jM,
        KM = WM,
        VM = HM;

    function YM(e, t) {
        var n = VM(e, t);
        return KM(n) ? n : void 0
    }
    var ds = YM,
        qM = ds,
        zM = Ir,
        XM = qM(zM, "Map"),
        Kh = XM,
        JM = ds,
        QM = JM(Object, "create"),
        Fl = QM,
        k_ = Fl;

    function ZM() {
        this.__data__ = k_ ? k_(null) : {}, this.size = 0
    }
    var ex = ZM;

    function tx(e) {
        var t = this.has(e) && delete this.__data__[e];
        return this.size -= t ? 1 : 0, t
    }
    var nx = tx,
        rx = Fl,
        ix = "__lodash_hash_undefined__",
        sx = Object.prototype,
        ax = sx.hasOwnProperty;

    function ox(e) {
        var t = this.__data__;
        if (rx) {
            var n = t[e];
            return n === ix ? void 0 : n
        }
        return ax.call(t, e) ? t[e] : void 0
    }
    var cx = ox,
        lx = Fl,
        ux = Object.prototype,
        fx = ux.hasOwnProperty;

    function dx(e) {
        var t = this.__data__;
        return lx ? t[e] !== void 0 : fx.call(t, e)
    }
    var hx = dx,
        px = Fl,
        gx = "__lodash_hash_undefined__";

    function mx(e, t) {
        var n = this.__data__;
        return this.size += this.has(e) ? 0 : 1, n[e] = px && t === void 0 ? gx : t, this
    }
    var vx = mx,
        _x = ex,
        yx = nx,
        Ex = cx,
        bx = hx,
        Tx = vx;

    function ma(e) {
        var t = -1,
            n = e == null ? 0 : e.length;
        for (this.clear(); ++t < n;) {
            var r = e[t];
            this.set(r[0], r[1])
        }
    }
    ma.prototype.clear = _x;
    ma.prototype.delete = yx;
    ma.prototype.get = Ex;
    ma.prototype.has = bx;
    ma.prototype.set = Tx;
    var Sx = ma,
        D_ = Sx,
        Ox = xl,
        wx = Kh;

    function Cx() {
        this.size = 0, this.__data__ = {
            hash: new D_,
            map: new(wx || Ox),
            string: new D_
        }
    }
    var Ax = Cx;

    function Ix(e) {
        var t = typeof e;
        return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
    }
    var Rx = Ix,
        Nx = Rx;

    function Lx(e, t) {
        var n = e.__data__;
        return Nx(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map
    }
    var Bl = Lx,
        $x = Bl;

    function Px(e) {
        var t = $x(this, e).delete(e);
        return this.size -= t ? 1 : 0, t
    }
    var kx = Px,
        Dx = Bl;

    function Mx(e) {
        return Dx(this, e).get(e)
    }
    var xx = Mx,
        Ux = Bl;

    function Fx(e) {
        return Ux(this, e).has(e)
    }
    var Bx = Fx,
        Gx = Bl;

    function Wx(e, t) {
        var n = Gx(this, e),
            r = n.size;
        return n.set(e, t), this.size += n.size == r ? 0 : 1, this
    }
    var jx = Wx,
        Hx = Ax,
        Kx = kx,
        Vx = xx,
        Yx = Bx,
        qx = jx;

    function va(e) {
        var t = -1,
            n = e == null ? 0 : e.length;
        for (this.clear(); ++t < n;) {
            var r = e[t];
            this.set(r[0], r[1])
        }
    }
    va.prototype.clear = Hx;
    va.prototype.delete = Kx;
    va.prototype.get = Vx;
    va.prototype.has = Yx;
    va.prototype.set = qx;
    var ET = va,
        zx = xl,
        Xx = Kh,
        Jx = ET,
        Qx = 200;

    function Zx(e, t) {
        var n = this.__data__;
        if (n instanceof zx) {
            var r = n.__data__;
            if (!Xx || r.length < Qx - 1) return r.push([e, t]), this.size = ++n.size, this;
            n = this.__data__ = new Jx(r)
        }
        return n.set(e, t), this.size = n.size, this
    }
    var e2 = Zx,
        t2 = xl,
        n2 = WD,
        r2 = HD,
        i2 = VD,
        s2 = qD,
        a2 = e2;

    function _a(e) {
        var t = this.__data__ = new t2(e);
        this.size = t.size
    }
    _a.prototype.clear = n2;
    _a.prototype.delete = r2;
    _a.prototype.get = i2;
    _a.prototype.has = s2;
    _a.prototype.set = a2;
    var bT = _a,
        o2 = ds,
        c2 = function() {
            try {
                var e = o2(Object, "defineProperty");
                return e({}, "", {}), e
            } catch {}
        }(),
        TT = c2,
        M_ = TT;

    function l2(e, t, n) {
        t == "__proto__" && M_ ? M_(e, t, {
            configurable: !0,
            enumerable: !0,
            value: n,
            writable: !0
        }) : e[t] = n
    }
    var Vh = l2,
        u2 = Vh,
        f2 = Dl;

    function d2(e, t, n) {
        (n !== void 0 && !f2(e[t], n) || n === void 0 && !(t in e)) && u2(e, t, n)
    }
    var ST = d2;

    function h2(e) {
        return function(t, n, r) {
            for (var s = -1, o = Object(t), c = r(t), u = c.length; u--;) {
                var f = c[e ? u : ++s];
                if (n(o[f], f, o) === !1) break
            }
            return t
        }
    }
    var p2 = h2,
        g2 = p2,
        m2 = g2(),
        v2 = m2,
        il = {
            exports: {}
        };
    (function(e, t) {
        var n = Ir,
            r = t && !t.nodeType && t,
            s = r && !0 && e && !e.nodeType && e,
            o = s && s.exports === r,
            c = o ? n.Buffer : void 0,
            u = c ? c.allocUnsafe : void 0;

        function f(h, g) {
            if (g) return h.slice();
            var y = h.length,
                b = u ? u(y) : new h.constructor(y);
            return h.copy(b), b
        }
        e.exports = f
    })(il, il.exports);
    var _2 = Ir,
        y2 = _2.Uint8Array,
        E2 = y2,
        x_ = E2;

    function b2(e) {
        var t = new e.constructor(e.byteLength);
        return new x_(t).set(new x_(e)), t
    }
    var Yh = b2,
        T2 = Yh;

    function S2(e, t) {
        var n = t ? T2(e.buffer) : e.buffer;
        return new e.constructor(n, e.byteOffset, e.length)
    }
    var OT = S2;

    function O2(e, t) {
        var n = -1,
            r = e.length;
        for (t || (t = Array(r)); ++n < r;) t[n] = e[n];
        return t
    }
    var wT = O2,
        w2 = Ai,
        U_ = Object.create,
        C2 = function() {
            function e() {}
            return function(t) {
                if (!w2(t)) return {};
                if (U_) return U_(t);
                e.prototype = t;
                var n = new e;
                return e.prototype = void 0, n
            }
        }(),
        A2 = C2;

    function I2(e, t) {
        return function(n) {
            return e(t(n))
        }
    }
    var CT = I2,
        R2 = CT,
        N2 = R2(Object.getPrototypeOf, Object),
        qh = N2,
        L2 = Object.prototype;

    function $2(e) {
        var t = e && e.constructor,
            n = typeof t == "function" && t.prototype || L2;
        return e === n
    }
    var zh = $2,
        P2 = A2,
        k2 = qh,
        D2 = zh;

    function M2(e) {
        return typeof e.constructor == "function" && !D2(e) ? P2(k2(e)) : {}
    }
    var AT = M2;

    function x2(e) {
        return e != null && typeof e == "object"
    }
    var Ii = x2,
        U2 = ga,
        F2 = Ii,
        B2 = "[object Arguments]";

    function G2(e) {
        return F2(e) && U2(e) == B2
    }
    var W2 = G2,
        F_ = W2,
        j2 = Ii,
        IT = Object.prototype,
        H2 = IT.hasOwnProperty,
        K2 = IT.propertyIsEnumerable,
        V2 = F_(function() {
            return arguments
        }()) ? F_ : function(e) {
            return j2(e) && H2.call(e, "callee") && !K2.call(e, "callee")
        },
        RT = V2,
        Y2 = Array.isArray,
        Ri = Y2,
        q2 = 9007199254740991;

    function z2(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= q2
    }
    var NT = z2,
        X2 = Hh,
        J2 = NT;

    function Q2(e) {
        return e != null && J2(e.length) && !X2(e)
    }
    var Gl = Q2,
        Z2 = Gl,
        eU = Ii;

    function tU(e) {
        return eU(e) && Z2(e)
    }
    var nU = tU,
        go = {
            exports: {}
        };

    function rU() {
        return !1
    }
    var iU = rU;
    (function(e, t) {
        var n = Ir,
            r = iU,
            s = t && !t.nodeType && t,
            o = s && !0 && e && !e.nodeType && e,
            c = o && o.exports === s,
            u = c ? n.Buffer : void 0,
            f = u ? u.isBuffer : void 0,
            h = f || r;
        e.exports = h
    })(go, go.exports);
    var sU = ga,
        aU = qh,
        oU = Ii,
        cU = "[object Object]",
        lU = Function.prototype,
        uU = Object.prototype,
        LT = lU.toString,
        fU = uU.hasOwnProperty,
        dU = LT.call(Object);

    function hU(e) {
        if (!oU(e) || sU(e) != cU) return !1;
        var t = aU(e);
        if (t === null) return !0;
        var n = fU.call(t, "constructor") && t.constructor;
        return typeof n == "function" && n instanceof n && LT.call(n) == dU
    }
    var pU = hU,
        gU = ga,
        mU = NT,
        vU = Ii,
        _U = "[object Arguments]",
        yU = "[object Array]",
        EU = "[object Boolean]",
        bU = "[object Date]",
        TU = "[object Error]",
        SU = "[object Function]",
        OU = "[object Map]",
        wU = "[object Number]",
        CU = "[object Object]",
        AU = "[object RegExp]",
        IU = "[object Set]",
        RU = "[object String]",
        NU = "[object WeakMap]",
        LU = "[object ArrayBuffer]",
        $U = "[object DataView]",
        PU = "[object Float32Array]",
        kU = "[object Float64Array]",
        DU = "[object Int8Array]",
        MU = "[object Int16Array]",
        xU = "[object Int32Array]",
        UU = "[object Uint8Array]",
        FU = "[object Uint8ClampedArray]",
        BU = "[object Uint16Array]",
        GU = "[object Uint32Array]",
        At = {};
    At[PU] = At[kU] = At[DU] = At[MU] = At[xU] = At[UU] = At[FU] = At[BU] = At[GU] = !0;
    At[_U] = At[yU] = At[LU] = At[EU] = At[$U] = At[bU] = At[TU] = At[SU] = At[OU] = At[wU] = At[CU] = At[AU] = At[IU] = At[RU] = At[NU] = !1;

    function WU(e) {
        return vU(e) && mU(e.length) && !!At[gU(e)]
    }
    var jU = WU;

    function HU(e) {
        return function(t) {
            return e(t)
        }
    }
    var Xh = HU,
        mo = {
            exports: {}
        };
    (function(e, t) {
        var n = vT,
            r = t && !t.nodeType && t,
            s = r && !0 && e && !e.nodeType && e,
            o = s && s.exports === r,
            c = o && n.process,
            u = function() {
                try {
                    var f = s && s.require && s.require("util").types;
                    return f || c && c.binding && c.binding("util")
                } catch {}
            }();
        e.exports = u
    })(mo, mo.exports);
    var KU = jU,
        VU = Xh,
        B_ = mo.exports,
        G_ = B_ && B_.isTypedArray,
        YU = G_ ? VU(G_) : KU,
        $T = YU;

    function qU(e, t) {
        if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__") return e[t]
    }
    var PT = qU,
        zU = Vh,
        XU = Dl,
        JU = Object.prototype,
        QU = JU.hasOwnProperty;

    function ZU(e, t, n) {
        var r = e[t];
        (!(QU.call(e, t) && XU(r, n)) || n === void 0 && !(t in e)) && zU(e, t, n)
    }
    var kT = ZU,
        eF = kT,
        tF = Vh;

    function nF(e, t, n, r) {
        var s = !n;
        n || (n = {});
        for (var o = -1, c = t.length; ++o < c;) {
            var u = t[o],
                f = r ? r(n[u], e[u], u, n, e) : void 0;
            f === void 0 && (f = e[u]), s ? tF(n, u, f) : eF(n, u, f)
        }
        return n
    }
    var Oo = nF;

    function rF(e, t) {
        for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
        return r
    }
    var iF = rF,
        sF = 9007199254740991,
        aF = /^(?:0|[1-9]\d*)$/;

    function oF(e, t) {
        var n = typeof e;
        return t = t == null ? sF : t, !!t && (n == "number" || n != "symbol" && aF.test(e)) && e > -1 && e % 1 == 0 && e < t
    }
    var DT = oF,
        cF = iF,
        lF = RT,
        uF = Ri,
        fF = go.exports,
        dF = DT,
        hF = $T,
        pF = Object.prototype,
        gF = pF.hasOwnProperty;

    function mF(e, t) {
        var n = uF(e),
            r = !n && lF(e),
            s = !n && !r && fF(e),
            o = !n && !r && !s && hF(e),
            c = n || r || s || o,
            u = c ? cF(e.length, String) : [],
            f = u.length;
        for (var h in e)(t || gF.call(e, h)) && !(c && (h == "length" || s && (h == "offset" || h == "parent") || o && (h == "buffer" || h == "byteLength" || h == "byteOffset") || dF(h, f))) && u.push(h);
        return u
    }
    var MT = mF;

    function vF(e) {
        var t = [];
        if (e != null)
            for (var n in Object(e)) t.push(n);
        return t
    }
    var _F = vF,
        yF = Ai,
        EF = zh,
        bF = _F,
        TF = Object.prototype,
        SF = TF.hasOwnProperty;

    function OF(e) {
        if (!yF(e)) return bF(e);
        var t = EF(e),
            n = [];
        for (var r in e) r == "constructor" && (t || !SF.call(e, r)) || n.push(r);
        return n
    }
    var wF = OF,
        CF = MT,
        AF = wF,
        IF = Gl;

    function RF(e) {
        return IF(e) ? CF(e, !0) : AF(e)
    }
    var wo = RF,
        NF = Oo,
        LF = wo;

    function $F(e) {
        return NF(e, LF(e))
    }
    var PF = $F,
        W_ = ST,
        kF = il.exports,
        DF = OT,
        MF = wT,
        xF = AT,
        j_ = RT,
        H_ = Ri,
        UF = nU,
        FF = go.exports,
        BF = Hh,
        GF = Ai,
        WF = pU,
        jF = $T,
        K_ = PT,
        HF = PF;

    function KF(e, t, n, r, s, o, c) {
        var u = K_(e, n),
            f = K_(t, n),
            h = c.get(f);
        if (h) {
            W_(e, n, h);
            return
        }
        var g = o ? o(u, f, n + "", e, t, c) : void 0,
            y = g === void 0;
        if (y) {
            var b = H_(f),
                C = !b && FF(f),
                R = !b && !C && jF(f);
            g = f, b || C || R ? H_(u) ? g = u : UF(u) ? g = MF(u) : C ? (y = !1, g = kF(f, !0)) : R ? (y = !1, g = DF(f, !0)) : g = [] : WF(f) || j_(f) ? (g = u, j_(u) ? g = HF(u) : (!GF(u) || BF(u)) && (g = xF(f))) : y = !1
        }
        y && (c.set(f, g), s(g, f, r, o, c), c.delete(f)), W_(e, n, g)
    }
    var VF = KF,
        YF = bT,
        qF = ST,
        zF = v2,
        XF = VF,
        JF = Ai,
        QF = wo,
        ZF = PT;

    function xT(e, t, n, r, s) {
        e !== t && zF(t, function(o, c) {
            if (s || (s = new YF), JF(o)) XF(e, t, c, n, xT, r, s);
            else {
                var u = r ? r(ZF(e, c), o, c + "", e, t, s) : void 0;
                u === void 0 && (u = o), qF(e, c, u)
            }
        }, QF)
    }
    var eB = xT;

    function tB(e) {
        return e
    }
    var UT = tB;

    function nB(e, t, n) {
        switch (n.length) {
            case 0:
                return e.call(t);
            case 1:
                return e.call(t, n[0]);
            case 2:
                return e.call(t, n[0], n[1]);
            case 3:
                return e.call(t, n[0], n[1], n[2])
        }
        return e.apply(t, n)
    }
    var rB = nB,
        iB = rB,
        V_ = Math.max;

    function sB(e, t, n) {
        return t = V_(t === void 0 ? e.length - 1 : t, 0),
            function() {
                for (var r = arguments, s = -1, o = V_(r.length - t, 0), c = Array(o); ++s < o;) c[s] = r[t + s];
                s = -1;
                for (var u = Array(t + 1); ++s < t;) u[s] = r[s];
                return u[t] = n(c), iB(e, this, u)
            }
    }
    var aB = sB;

    function oB(e) {
        return function() {
            return e
        }
    }
    var cB = oB,
        lB = cB,
        Y_ = TT,
        uB = UT,
        fB = Y_ ? function(e, t) {
            return Y_(e, "toString", {
                configurable: !0,
                enumerable: !1,
                value: lB(t),
                writable: !0
            })
        } : uB,
        dB = fB,
        hB = 800,
        pB = 16,
        gB = Date.now;

    function mB(e) {
        var t = 0,
            n = 0;
        return function() {
            var r = gB(),
                s = pB - (r - n);
            if (n = r, s > 0) {
                if (++t >= hB) return arguments[0]
            } else t = 0;
            return e.apply(void 0, arguments)
        }
    }
    var vB = mB,
        _B = dB,
        yB = vB,
        EB = yB(_B),
        bB = EB,
        TB = UT,
        SB = aB,
        OB = bB;

    function wB(e, t) {
        return OB(SB(e, t, TB), e + "")
    }
    var CB = wB,
        AB = Dl,
        IB = Gl,
        RB = DT,
        NB = Ai;

    function LB(e, t, n) {
        if (!NB(n)) return !1;
        var r = typeof t;
        return (r == "number" ? IB(n) && RB(t, n.length) : r == "string" && t in n) ? AB(n[t], e) : !1
    }
    var $B = LB,
        PB = CB,
        kB = $B;

    function DB(e) {
        return PB(function(t, n) {
            var r = -1,
                s = n.length,
                o = s > 1 ? n[s - 1] : void 0,
                c = s > 2 ? n[2] : void 0;
            for (o = e.length > 3 && typeof o == "function" ? (s--, o) : void 0, c && kB(n[0], n[1], c) && (o = s < 3 ? void 0 : o, s = 1), t = Object(t); ++r < s;) {
                var u = n[r];
                u && e(t, u, r, o)
            }
            return t
        })
    }
    var MB = DB,
        xB = eB,
        UB = MB,
        FB = UB(function(e, t, n) {
            xB(e, t, n)
        }),
        BB = FB;
    class Ks {
        static set(t) {
            if (t && this.isSupported(t)) {
                this.locale = t;
                return
            }
            this.locale = this.getPreferredDeviceLocale()
        }
        static getPreferredDeviceLocale() {
            const t = navigator.languages;
            for (let n = 0; n < t.length; n++)
                if (this.isSupported(t[n])) return t[n];
            return this.supported[0]
        }
        static isSupported(t) {
            return Object.values(this.supported).includes(t)
        }
        static mergeMessages(...t) {
            return BB(t[0], ...t)
        }
    }
    Re(Ks, "locale"), Re(Ks, "supported", ["en", "fr", "it", "de", "es", "es-XL"]);
    const Hp = class {
        static get serverUrl() {
            var n;
            const t = (n = this.getQueryParam("server")) != null ? n : this.getQueryParam("s");
            return !t || t === "live" ? "ecast.jackboxgames.com" : t === "local" ? "https://localhost" : t.includes("localhost") ? t : `${t}.jackboxgames.com`
        }
        static get isCanvasSupported() {
            const t = document.createElement("canvas");
            return !!(t.getContext && t.getContext("2d"))
        }
        static toPrecision(t, n) {
            const r = 10 ** n;
            return Math.round((t + Number.EPSILON) * r) / r
        }
        static htmlUnescape(t) {
            return String(t).replace(/&quot;/gi, '"').replace(/&#39;/gi, "'").replace(/&lt;/gi, "<").replace(/&gt;/gi, ">").replace(/&amp;/gi, "&")
        }
        static htmlEscape(t) {
            return String(t).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
        }
        static sanitize(t) {
            const n = this.sanitizeInput(t).replace(/'/g, "\u2019");
            return this.htmlEscape(n).trim()
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
            const n = document.createElement("div");
            return n.textContent = t, n.innerHTML
        }
        static htmlTagsToBBCode(t, n) {
            if (!n.length) throw new Error("[Utils.htmlTagsToBBCode] No tag pairs were passed in");
            return n.reduce((r, s) => (r.replaceAll(`<${s[0]}>`, `[${s[1]}]`), r.replaceAll(`</${s[0]}>`, `</${s[1]}>`), r), t)
        }
        static hexToRgb(t) {
            const n = new ArrayBuffer(4);
            new DataView(n).setUint32(0, parseInt(t.replace("#", ""), 16), !1);
            const s = new Uint8Array(n);
            return `${s[1]},${s[2]},${s[3]}`
        }
        static adjustColor(t, n) {
            let r = !1,
                s = t;
            s[0] === "#" && (s = s.slice(1), r = !0);
            const o = parseInt(s, 16),
                c = Math.min(Math.max(0, (o >> 16) * n), 255),
                u = Math.min(Math.max(0, (o >> 8 & 255) * n), 255);
            let h = (Math.min(Math.max(0, (o & 255) * n), 255) | u << 8 | c << 16).toString(16);
            for (; h.length < s.length;) h = `0${h}`;
            return (r ? "#" : "") + h
        }
        static isInTolerance(t, n, r) {
            return !(Math.abs(t.x - n.x) < r || Math.abs(t.y - n.y) > r)
        }
        static getDistanceBetweenPoints(t, n) {
            const r = [t.x - n.x, t.y - n.y],
                s = Math.hypot(...r);
            return Math.round(s * 100) / 100
        }
        static getMidpoint(t, n) {
            return {
                x: (t.x + n.x) / 2,
                y: (t.y + n.y) / 2
            }
        }
        static getAngleBetweenPoints(t, n) {
            let s = Math.atan2(n.y - t.y, n.x - t.x) * (180 / Math.PI);
            return s < 0 && (s += 360), 360 - s
        }
        static getAngularDistance(t, n) {
            let r = (n - t) % 360;
            const s = r < 0 ? 1 : -1;
            return r = Math.abs(r), r > 180 ? s * (360 - r) : s * r
        }
        static getVelocity(t, n, r, s) {
            return this.getDistanceBetweenPoints(t, r) / (s - n)
        }
        static isInsideElement(t, n) {
            const r = n.getBoundingClientRect();
            return !(t.x < r.left || t.x > r.left + r.width || t.y < r.top || t.y > r.top + r.height)
        }
    };
    let dn = Hp;
    Re(dn, "queryParams", new URLSearchParams(window.location.search)), Re(dn, "getQueryParam", t => Hp.queryParams.get(t)), Re(dn, "sleep", t => new Promise(n => {
        window.setTimeout(n, t)
    }));
    class De {
        static get namespace() {
            var t, n;
            return (n = (t = window.tv.storage) == null ? void 0 : t.namespace) != null ? n : this.defaultNamespace
        }
        static get isDisabled() {
            var t, n;
            return (n = (t = window.tv.storage) == null ? void 0 : t.isDisabled) != null ? n : !1
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
        static setup(t, n) {
            var r, s;
            delete window.tv.storage, window.tv.storage = {
                namespace: (s = (r = dn.getQueryParam("namespace")) != null ? r : dn.getQueryParam("ns")) != null ? s : this.defaultNamespace,
                isDisabled: dn.queryParams.has("incognito") || dn.queryParams.has("nc")
            }, t && (window.tv.storage.tag = t), n && (window.tv.storage.code = n.toLowerCase(), this.clearCodeScopedKeys(window.tv.storage.code)), this.migrateNamespace("blobcast", this.defaultNamespace)
        }
        static get(t, n) {
            return this.isSupported ? window.localStorage.getItem(this.getScopedKey(t, n)) : null
        }
        static set(t, n, r = "none") {
            if (!!this.isSupported) return window.localStorage.setItem(this.getScopedSetKey(t, r), n)
        }
        static remove(t, n) {
            if (!!this.isSupported) return window.localStorage.removeItem(this.getScopedKey(t, n))
        }
        static setTag(t) {
            var c;
            const n = t.toLowerCase(),
                r = (c = this.get("tags")) != null ? c : "[]",
                s = n.split("-")[0];
            let o = JSON.parse(r);
            o = o.filter(u => {
                const f = u.split("-")[0];
                return s !== f
            }), o.push(n), this.set("tags", JSON.stringify(o))
        }
        static getScopedKey(t, n) {
            const r = `${this.namespace}:${t}`,
                s = this.tag ? `${this.namespace}:${t}:tag:${this.tag}` : null,
                o = this.code ? `${this.namespace}:${t}:code:${this.code}` : null;
            if (n === "none") return r;
            if (n === "tag") {
                if (!s) throw new Error('[Storage] requested "tag" scope but tv.storage.tag is undefined');
                return s
            }
            if (n === "code") {
                if (!o) throw new Error('[Storage] requested "code" scope but tv.storage.code is undefined');
                return o
            }
            return o && window.localStorage.getItem(o) !== null ? o : s && window.localStorage.getItem(s) !== null ? s : r
        }
        static getScopedSetKey(t, n = "none") {
            if (n === "tag") {
                if (!this.tag) throw new Error('[Storage] requested "room" scope but tv.storage.tag is undefined');
                return `${this.namespace}:${t}:tag:${this.tag}`
            }
            if (n === "code") {
                if (!this.code) throw new Error('[Storage] requested "code" scope but tv.storage.code is undefined');
                return `${this.namespace}:${t}:code:${this.code}`
            }
            return `${this.namespace}:${t}`
        }
        static clearCodeScopedKeys(t) {
            !this.isSupported || Object.keys(window.localStorage).forEach(n => {
                const r = n.split(":code:");
                r.length <= 1 || r[1] !== t && window.localStorage.removeItem(n)
            })
        }
        static migrateNamespace(t, n) {
            !this.isSupported || Object.keys(window.localStorage).forEach(r => {
                if (!r.startsWith(`${t}-`)) return;
                const s = r.replace(`${t}-`, `${n}:`),
                    o = window.localStorage.getItem(r);
                !o || (window.localStorage.setItem(s, o), window.localStorage.removeItem(r))
            })
        }
    }
    Re(De, "defaultNamespace", "tv");
    class na {
        constructor() {
            Re(this, "artifacts");
            this.artifacts = this.list()
        }
        get hasUnviewed() {
            return this.artifacts.some(t => !t.viewed)
        }
        add(t, n) {
            na.add(t, n), this.artifacts = this.list()
        }
        static add(t, n) {
            if (!De.isSupported) return;
            const r = this.isTestArtifact(t) ? "http" : "https",
                s = this.isTestArtifact(t) ? "games-test.jackbox.tv" : "games.jackbox.tv",
                o = `${r}://${s}/artifact/${t.categoryId}/${t.artifactId}/`,
                c = De.get("galleries") || "[]";
            try {
                const u = JSON.parse(c) || [];
                if (u.some(f => f.url === o)) return;
                u.unshift({
                    url: o,
                    time: new Date().getTime(),
                    categoryId: t.categoryId,
                    viewed: !1
                }), De.set("galleries", JSON.stringify(u.slice(0, 40)))
            } catch {
                console.warn("[Artifacts] Unable to add artifact to local storage")
            }
        }
        remove(t) {
            if (!De.isSupported) return;
            const n = De.get("galleries") || "[]";
            try {
                const r = JSON.parse(n) || [];
                r.splice(t, 1), De.set("galleries", JSON.stringify(r)), this.artifacts = this.list()
            } catch {
                console.warn("[Artifacts] Unable to remove artifact")
            }
        }
        setAsViewed(t) {
            na.setAsViewed(t), this.artifacts = this.list()
        }
        static setAsViewed(t) {
            if (!De.isSupported) return;
            const n = De.get("galleries") || "[]";
            try {
                const r = JSON.parse(n) || [];
                r.length && (r[t].viewed = !0), De.set("galleries", JSON.stringify(r))
            } catch {
                console.warn(`[Artifacts] Unable to mark artifact ${t} as viewed`)
            }
        }
        static isTestArtifact(t) {
            var n;
            return ((n = t == null ? void 0 : t.rootId) == null ? void 0 : n.indexOf("test")) !== -1
        }
        list() {
            if (!De.isSupported) return [];
            const t = new Intl.DateTimeFormat(Ks.locale, {
                    year: "numeric",
                    month: "short",
                    day: "numeric"
                }),
                n = De.get("galleries") || "[]",
                r = Date.now();
            try {
                return (JSON.parse(n) || []).filter(o => r - o.time < 525600 * 60 * 1e3).map(o => {
                    const c = new Date(o.time),
                        u = t.format(c),
                        f = o.url.split("/"),
                        h = f[f.length - 1] === "" ? f[f.length - 2] : f[f.length - 1];
                    let g = o.categoryId;
                    return g || (o.url.indexOf("Quiplash2") !== -1 ? g = "Quiplash2Game" : o.url.indexOf("Drawful") !== -1 ? g = "DrawfulGame" : o.url.indexOf("TeeKO") !== -1 ? g = "TeeKOGame" : o.url.indexOf("TriviaDeath") !== -1 && (g = "TriviaDeathResults")), {
                        id: h,
                        gameName: g,
                        date: u,
                        ...o
                    }
                })
            } catch {
                return console.warn("[Artifacts] Unable to parse artifacts array"), []
            }
        }
    }
    var Ud = {
        exports: {}
    };
    (function(e, t) {
        var n = typeof self < "u" ? self : Ft,
            r = function() {
                function o() {
                    this.fetch = !1, this.DOMException = n.DOMException
                }
                return o.prototype = n, new o
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
                    g = ArrayBuffer.isView || function(F) {
                        return F && h.indexOf(Object.prototype.toString.call(F)) > -1
                    };

                function y(F) {
                    if (typeof F != "string" && (F = String(F)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(F)) throw new TypeError("Invalid character in header field name");
                    return F.toLowerCase()
                }

                function b(F) {
                    return typeof F != "string" && (F = String(F)), F
                }

                function C(F) {
                    var re = {
                        next: function() {
                            var de = F.shift();
                            return {
                                done: de === void 0,
                                value: de
                            }
                        }
                    };
                    return u.iterable && (re[Symbol.iterator] = function() {
                        return re
                    }), re
                }

                function R(F) {
                    this.map = {}, F instanceof R ? F.forEach(function(re, de) {
                        this.append(de, re)
                    }, this) : Array.isArray(F) ? F.forEach(function(re) {
                        this.append(re[0], re[1])
                    }, this) : F && Object.getOwnPropertyNames(F).forEach(function(re) {
                        this.append(re, F[re])
                    }, this)
                }
                R.prototype.append = function(F, re) {
                    F = y(F), re = b(re);
                    var de = this.map[F];
                    this.map[F] = de ? de + ", " + re : re
                }, R.prototype.delete = function(F) {
                    delete this.map[y(F)]
                }, R.prototype.get = function(F) {
                    return F = y(F), this.has(F) ? this.map[F] : null
                }, R.prototype.has = function(F) {
                    return this.map.hasOwnProperty(y(F))
                }, R.prototype.set = function(F, re) {
                    this.map[y(F)] = b(re)
                }, R.prototype.forEach = function(F, re) {
                    for (var de in this.map) this.map.hasOwnProperty(de) && F.call(re, this.map[de], de, this)
                }, R.prototype.keys = function() {
                    var F = [];
                    return this.forEach(function(re, de) {
                        F.push(de)
                    }), C(F)
                }, R.prototype.values = function() {
                    var F = [];
                    return this.forEach(function(re) {
                        F.push(re)
                    }), C(F)
                }, R.prototype.entries = function() {
                    var F = [];
                    return this.forEach(function(re, de) {
                        F.push([de, re])
                    }), C(F)
                }, u.iterable && (R.prototype[Symbol.iterator] = R.prototype.entries);

                function M(F) {
                    if (F.bodyUsed) return Promise.reject(new TypeError("Already read"));
                    F.bodyUsed = !0
                }

                function W(F) {
                    return new Promise(function(re, de) {
                        F.onload = function() {
                            re(F.result)
                        }, F.onerror = function() {
                            de(F.error)
                        }
                    })
                }

                function I(F) {
                    var re = new FileReader,
                        de = W(re);
                    return re.readAsArrayBuffer(F), de
                }

                function K(F) {
                    var re = new FileReader,
                        de = W(re);
                    return re.readAsText(F), de
                }

                function q(F) {
                    for (var re = new Uint8Array(F), de = new Array(re.length), _e = 0; _e < re.length; _e++) de[_e] = String.fromCharCode(re[_e]);
                    return de.join("")
                }

                function j(F) {
                    if (F.slice) return F.slice(0);
                    var re = new Uint8Array(F.byteLength);
                    return re.set(new Uint8Array(F)), re.buffer
                }

                function G() {
                    return this.bodyUsed = !1, this._initBody = function(F) {
                        this._bodyInit = F, F ? typeof F == "string" ? this._bodyText = F : u.blob && Blob.prototype.isPrototypeOf(F) ? this._bodyBlob = F : u.formData && FormData.prototype.isPrototypeOf(F) ? this._bodyFormData = F : u.searchParams && URLSearchParams.prototype.isPrototypeOf(F) ? this._bodyText = F.toString() : u.arrayBuffer && u.blob && f(F) ? (this._bodyArrayBuffer = j(F.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : u.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(F) || g(F)) ? this._bodyArrayBuffer = j(F) : this._bodyText = F = Object.prototype.toString.call(F) : this._bodyText = "", this.headers.get("content-type") || (typeof F == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : u.searchParams && URLSearchParams.prototype.isPrototypeOf(F) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
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
                        if (this._bodyArrayBuffer) return Promise.resolve(q(this._bodyArrayBuffer));
                        if (this._bodyFormData) throw new Error("could not read FormData body as text");
                        return Promise.resolve(this._bodyText)
                    }, u.formData && (this.formData = function() {
                        return this.text().then(ue)
                    }), this.json = function() {
                        return this.text().then(JSON.parse)
                    }, this
                }
                var se = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

                function ce(F) {
                    var re = F.toUpperCase();
                    return se.indexOf(re) > -1 ? re : F
                }

                function le(F, re) {
                    re = re || {};
                    var de = re.body;
                    if (F instanceof le) {
                        if (F.bodyUsed) throw new TypeError("Already read");
                        this.url = F.url, this.credentials = F.credentials, re.headers || (this.headers = new R(F.headers)), this.method = F.method, this.mode = F.mode, this.signal = F.signal, !de && F._bodyInit != null && (de = F._bodyInit, F.bodyUsed = !0)
                    } else this.url = String(F);
                    if (this.credentials = re.credentials || this.credentials || "same-origin", (re.headers || !this.headers) && (this.headers = new R(re.headers)), this.method = ce(re.method || this.method || "GET"), this.mode = re.mode || this.mode || null, this.signal = re.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && de) throw new TypeError("Body not allowed for GET or HEAD requests");
                    this._initBody(de)
                }
                le.prototype.clone = function() {
                    return new le(this, {
                        body: this._bodyInit
                    })
                };

                function ue(F) {
                    var re = new FormData;
                    return F.trim().split("&").forEach(function(de) {
                        if (de) {
                            var _e = de.split("="),
                                me = _e.shift().replace(/\+/g, " "),
                                Se = _e.join("=").replace(/\+/g, " ");
                            re.append(decodeURIComponent(me), decodeURIComponent(Se))
                        }
                    }), re
                }

                function Ie(F) {
                    var re = new R,
                        de = F.replace(/\r?\n[\t ]+/g, " ");
                    return de.split(/\r?\n/).forEach(function(_e) {
                        var me = _e.split(":"),
                            Se = me.shift().trim();
                        if (Se) {
                            var Me = me.join(":").trim();
                            re.append(Se, Me)
                        }
                    }), re
                }
                G.call(le.prototype);

                function be(F, re) {
                    re || (re = {}), this.type = "default", this.status = re.status === void 0 ? 200 : re.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in re ? re.statusText : "OK", this.headers = new R(re.headers), this.url = re.url || "", this._initBody(F)
                }
                G.call(be.prototype), be.prototype.clone = function() {
                    return new be(this._bodyInit, {
                        status: this.status,
                        statusText: this.statusText,
                        headers: new R(this.headers),
                        url: this.url
                    })
                }, be.error = function() {
                    var F = new be(null, {
                        status: 0,
                        statusText: ""
                    });
                    return F.type = "error", F
                };
                var fe = [301, 302, 303, 307, 308];
                be.redirect = function(F, re) {
                    if (fe.indexOf(re) === -1) throw new RangeError("Invalid status code");
                    return new be(null, {
                        status: re,
                        headers: {
                            location: F
                        }
                    })
                }, c.DOMException = o.DOMException;
                try {
                    new c.DOMException
                } catch {
                    c.DOMException = function(re, de) {
                        this.message = re, this.name = de;
                        var _e = Error(re);
                        this.stack = _e.stack
                    }, c.DOMException.prototype = Object.create(Error.prototype), c.DOMException.prototype.constructor = c.DOMException
                }

                function Oe(F, re) {
                    return new Promise(function(de, _e) {
                        var me = new le(F, re);
                        if (me.signal && me.signal.aborted) return _e(new c.DOMException("Aborted", "AbortError"));
                        var Se = new XMLHttpRequest;

                        function Me() {
                            Se.abort()
                        }
                        Se.onload = function() {
                            var Fe = {
                                status: Se.status,
                                statusText: Se.statusText,
                                headers: Ie(Se.getAllResponseHeaders() || "")
                            };
                            Fe.url = "responseURL" in Se ? Se.responseURL : Fe.headers.get("X-Request-URL");
                            var Je = "response" in Se ? Se.response : Se.responseText;
                            de(new be(Je, Fe))
                        }, Se.onerror = function() {
                            _e(new TypeError("Network request failed"))
                        }, Se.ontimeout = function() {
                            _e(new TypeError("Network request failed"))
                        }, Se.onabort = function() {
                            _e(new c.DOMException("Aborted", "AbortError"))
                        }, Se.open(me.method, me.url, !0), me.credentials === "include" ? Se.withCredentials = !0 : me.credentials === "omit" && (Se.withCredentials = !1), "responseType" in Se && u.blob && (Se.responseType = "blob"), me.headers.forEach(function(Fe, Je) {
                            Se.setRequestHeader(Je, Fe)
                        }), me.signal && (me.signal.addEventListener("abort", Me), Se.onreadystatechange = function() {
                            Se.readyState === 4 && me.signal.removeEventListener("abort", Me)
                        }), Se.send(typeof me._bodyInit > "u" ? null : me._bodyInit)
                    })
                }
                return Oe.polyfill = !0, o.fetch || (o.fetch = Oe, o.Headers = R, o.Request = le, o.Response = be), c.Headers = R, c.Request = le, c.Response = be, c.fetch = Oe, Object.defineProperty(c, "__esModule", {
                    value: !0
                }), c
            })({})
        })(r), r.fetch.ponyfill = !0, delete r.fetch.polyfill;
        var s = r;
        t = s.fetch, t.default = s.fetch, t.fetch = s.fetch, t.Headers = s.Headers, t.Request = s.Request, t.Response = s.Response, e.exports = t
    })(Ud, Ud.exports);
    var GB = function() {
            if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function") return !1;
            if (typeof Symbol.iterator == "symbol") return !0;
            var t = {},
                n = Symbol("test"),
                r = Object(n);
            if (typeof n == "string" || Object.prototype.toString.call(n) !== "[object Symbol]" || Object.prototype.toString.call(r) !== "[object Symbol]") return !1;
            var s = 42;
            t[n] = s;
            for (n in t) return !1;
            if (typeof Object.keys == "function" && Object.keys(t).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(t).length !== 0) return !1;
            var o = Object.getOwnPropertySymbols(t);
            if (o.length !== 1 || o[0] !== n || !Object.prototype.propertyIsEnumerable.call(t, n)) return !1;
            if (typeof Object.getOwnPropertyDescriptor == "function") {
                var c = Object.getOwnPropertyDescriptor(t, n);
                if (c.value !== s || c.enumerable !== !0) return !1
            }
            return !0
        },
        q_ = typeof Symbol < "u" && Symbol,
        WB = GB,
        jB = function() {
            return typeof q_ != "function" || typeof Symbol != "function" || typeof q_("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : WB()
        },
        HB = "Function.prototype.bind called on incompatible ",
        Af = Array.prototype.slice,
        KB = Object.prototype.toString,
        VB = "[object Function]",
        YB = function(t) {
            var n = this;
            if (typeof n != "function" || KB.call(n) !== VB) throw new TypeError(HB + n);
            for (var r = Af.call(arguments, 1), s, o = function() {
                    if (this instanceof s) {
                        var g = n.apply(this, r.concat(Af.call(arguments)));
                        return Object(g) === g ? g : this
                    } else return n.apply(t, r.concat(Af.call(arguments)))
                }, c = Math.max(0, n.length - r.length), u = [], f = 0; f < c; f++) u.push("$" + f);
            if (s = Function("binder", "return function (" + u.join(",") + "){ return binder.apply(this,arguments); }")(o), n.prototype) {
                var h = function() {};
                h.prototype = n.prototype, s.prototype = new h, h.prototype = null
            }
            return s
        },
        qB = YB,
        Jh = Function.prototype.bind || qB,
        zB = Jh,
        XB = zB.call(Function.call, Object.prototype.hasOwnProperty),
        nt, ra = SyntaxError,
        FT = Function,
        Vs = TypeError,
        If = function(e) {
            try {
                return FT('"use strict"; return (' + e + ").constructor;")()
            } catch {}
        },
        os = Object.getOwnPropertyDescriptor;
    if (os) try {
        os({}, "")
    } catch {
        os = null
    }
    var Rf = function() {
            throw new Vs
        },
        JB = os ? function() {
            try {
                return arguments.callee, Rf
            } catch {
                try {
                    return os(arguments, "callee").get
                } catch {
                    return Rf
                }
            }
        }() : Rf,
        Rs = jB(),
        ui = Object.getPrototypeOf || function(e) {
            return e.__proto__
        },
        Ds = {},
        QB = typeof Uint8Array > "u" ? nt : ui(Uint8Array),
        Ys = {
            "%AggregateError%": typeof AggregateError > "u" ? nt : AggregateError,
            "%Array%": Array,
            "%ArrayBuffer%": typeof ArrayBuffer > "u" ? nt : ArrayBuffer,
            "%ArrayIteratorPrototype%": Rs ? ui([][Symbol.iterator]()) : nt,
            "%AsyncFromSyncIteratorPrototype%": nt,
            "%AsyncFunction%": Ds,
            "%AsyncGenerator%": Ds,
            "%AsyncGeneratorFunction%": Ds,
            "%AsyncIteratorPrototype%": Ds,
            "%Atomics%": typeof Atomics > "u" ? nt : Atomics,
            "%BigInt%": typeof BigInt > "u" ? nt : BigInt,
            "%Boolean%": Boolean,
            "%DataView%": typeof DataView > "u" ? nt : DataView,
            "%Date%": Date,
            "%decodeURI%": decodeURI,
            "%decodeURIComponent%": decodeURIComponent,
            "%encodeURI%": encodeURI,
            "%encodeURIComponent%": encodeURIComponent,
            "%Error%": Error,
            "%eval%": eval,
            "%EvalError%": EvalError,
            "%Float32Array%": typeof Float32Array > "u" ? nt : Float32Array,
            "%Float64Array%": typeof Float64Array > "u" ? nt : Float64Array,
            "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? nt : FinalizationRegistry,
            "%Function%": FT,
            "%GeneratorFunction%": Ds,
            "%Int8Array%": typeof Int8Array > "u" ? nt : Int8Array,
            "%Int16Array%": typeof Int16Array > "u" ? nt : Int16Array,
            "%Int32Array%": typeof Int32Array > "u" ? nt : Int32Array,
            "%isFinite%": isFinite,
            "%isNaN%": isNaN,
            "%IteratorPrototype%": Rs ? ui(ui([][Symbol.iterator]())) : nt,
            "%JSON%": typeof JSON == "object" ? JSON : nt,
            "%Map%": typeof Map > "u" ? nt : Map,
            "%MapIteratorPrototype%": typeof Map > "u" || !Rs ? nt : ui(new Map()[Symbol.iterator]()),
            "%Math%": Math,
            "%Number%": Number,
            "%Object%": Object,
            "%parseFloat%": parseFloat,
            "%parseInt%": parseInt,
            "%Promise%": typeof Promise > "u" ? nt : Promise,
            "%Proxy%": typeof Proxy > "u" ? nt : Proxy,
            "%RangeError%": RangeError,
            "%ReferenceError%": ReferenceError,
            "%Reflect%": typeof Reflect > "u" ? nt : Reflect,
            "%RegExp%": RegExp,
            "%Set%": typeof Set > "u" ? nt : Set,
            "%SetIteratorPrototype%": typeof Set > "u" || !Rs ? nt : ui(new Set()[Symbol.iterator]()),
            "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? nt : SharedArrayBuffer,
            "%String%": String,
            "%StringIteratorPrototype%": Rs ? ui("" [Symbol.iterator]()) : nt,
            "%Symbol%": Rs ? Symbol : nt,
            "%SyntaxError%": ra,
            "%ThrowTypeError%": JB,
            "%TypedArray%": QB,
            "%TypeError%": Vs,
            "%Uint8Array%": typeof Uint8Array > "u" ? nt : Uint8Array,
            "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? nt : Uint8ClampedArray,
            "%Uint16Array%": typeof Uint16Array > "u" ? nt : Uint16Array,
            "%Uint32Array%": typeof Uint32Array > "u" ? nt : Uint32Array,
            "%URIError%": URIError,
            "%WeakMap%": typeof WeakMap > "u" ? nt : WeakMap,
            "%WeakRef%": typeof WeakRef > "u" ? nt : WeakRef,
            "%WeakSet%": typeof WeakSet > "u" ? nt : WeakSet
        },
        ZB = function e(t) {
            var n;
            if (t === "%AsyncFunction%") n = If("async function () {}");
            else if (t === "%GeneratorFunction%") n = If("function* () {}");
            else if (t === "%AsyncGeneratorFunction%") n = If("async function* () {}");
            else if (t === "%AsyncGenerator%") {
                var r = e("%AsyncGeneratorFunction%");
                r && (n = r.prototype)
            } else if (t === "%AsyncIteratorPrototype%") {
                var s = e("%AsyncGenerator%");
                s && (n = ui(s.prototype))
            }
            return Ys[t] = n, n
        },
        z_ = {
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
        Co = Jh,
        sl = XB,
        eG = Co.call(Function.call, Array.prototype.concat),
        tG = Co.call(Function.apply, Array.prototype.splice),
        X_ = Co.call(Function.call, String.prototype.replace),
        al = Co.call(Function.call, String.prototype.slice),
        nG = Co.call(Function.call, RegExp.prototype.exec),
        rG = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
        iG = /\\(\\)?/g,
        sG = function(t) {
            var n = al(t, 0, 1),
                r = al(t, -1);
            if (n === "%" && r !== "%") throw new ra("invalid intrinsic syntax, expected closing `%`");
            if (r === "%" && n !== "%") throw new ra("invalid intrinsic syntax, expected opening `%`");
            var s = [];
            return X_(t, rG, function(o, c, u, f) {
                s[s.length] = u ? X_(f, iG, "$1") : c || o
            }), s
        },
        aG = function(t, n) {
            var r = t,
                s;
            if (sl(z_, r) && (s = z_[r], r = "%" + s[0] + "%"), sl(Ys, r)) {
                var o = Ys[r];
                if (o === Ds && (o = ZB(r)), typeof o > "u" && !n) throw new Vs("intrinsic " + t + " exists, but is not available. Please file an issue!");
                return {
                    alias: s,
                    name: r,
                    value: o
                }
            }
            throw new ra("intrinsic " + t + " does not exist!")
        },
        Qh = function(t, n) {
            if (typeof t != "string" || t.length === 0) throw new Vs("intrinsic name must be a non-empty string");
            if (arguments.length > 1 && typeof n != "boolean") throw new Vs('"allowMissing" argument must be a boolean');
            if (nG(/^%?[^%]*%?$/g, t) === null) throw new ra("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
            var r = sG(t),
                s = r.length > 0 ? r[0] : "",
                o = aG("%" + s + "%", n),
                c = o.name,
                u = o.value,
                f = !1,
                h = o.alias;
            h && (s = h[0], tG(r, eG([0, 1], h)));
            for (var g = 1, y = !0; g < r.length; g += 1) {
                var b = r[g],
                    C = al(b, 0, 1),
                    R = al(b, -1);
                if ((C === '"' || C === "'" || C === "`" || R === '"' || R === "'" || R === "`") && C !== R) throw new ra("property names with quotes must have matching quotes");
                if ((b === "constructor" || !y) && (f = !0), s += "." + b, c = "%" + s + "%", sl(Ys, c)) u = Ys[c];
                else if (u != null) {
                    if (!(b in u)) {
                        if (!n) throw new Vs("base intrinsic for " + t + " exists, but the property is not available.");
                        return
                    }
                    if (os && g + 1 >= r.length) {
                        var M = os(u, b);
                        y = !!M, y && "get" in M && !("originalValue" in M.get) ? u = M.get : u = u[b]
                    } else y = sl(u, b), u = u[b];
                    y && !f && (Ys[c] = u)
                }
            }
            return u
        },
        BT = {
            exports: {}
        };
    (function(e) {
        var t = Jh,
            n = Qh,
            r = n("%Function.prototype.apply%"),
            s = n("%Function.prototype.call%"),
            o = n("%Reflect.apply%", !0) || t.call(s, r),
            c = n("%Object.getOwnPropertyDescriptor%", !0),
            u = n("%Object.defineProperty%", !0),
            f = n("%Math.max%");
        if (u) try {
            u({}, "a", {
                value: 1
            })
        } catch {
            u = null
        }
        e.exports = function(y) {
            var b = o(t, s, arguments);
            if (c && u) {
                var C = c(b, "length");
                C.configurable && u(b, "length", {
                    value: 1 + f(0, y.length - (arguments.length - 1))
                })
            }
            return b
        };
        var h = function() {
            return o(t, r, arguments)
        };
        u ? u(e.exports, "apply", {
            value: h
        }) : e.exports.apply = h
    })(BT);
    var GT = Qh,
        WT = BT.exports,
        oG = WT(GT("String.prototype.indexOf")),
        cG = function(t, n) {
            var r = GT(t, !!n);
            return typeof r == "function" && oG(t, ".prototype.") > -1 ? WT(r) : r
        };
    const lG = {},
        uG = Object.freeze(Object.defineProperty({
            __proto__: null,
            default: lG
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        fG = gD(uG);
    var Zh = typeof Map == "function" && Map.prototype,
        Nf = Object.getOwnPropertyDescriptor && Zh ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null,
        ol = Zh && Nf && typeof Nf.get == "function" ? Nf.get : null,
        dG = Zh && Map.prototype.forEach,
        ep = typeof Set == "function" && Set.prototype,
        Lf = Object.getOwnPropertyDescriptor && ep ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null,
        cl = ep && Lf && typeof Lf.get == "function" ? Lf.get : null,
        hG = ep && Set.prototype.forEach,
        pG = typeof WeakMap == "function" && WeakMap.prototype,
        Qa = pG ? WeakMap.prototype.has : null,
        gG = typeof WeakSet == "function" && WeakSet.prototype,
        Za = gG ? WeakSet.prototype.has : null,
        mG = typeof WeakRef == "function" && WeakRef.prototype,
        J_ = mG ? WeakRef.prototype.deref : null,
        vG = Boolean.prototype.valueOf,
        _G = Object.prototype.toString,
        yG = Function.prototype.toString,
        EG = String.prototype.match,
        tp = String.prototype.slice,
        hi = String.prototype.replace,
        bG = String.prototype.toUpperCase,
        Q_ = String.prototype.toLowerCase,
        jT = RegExp.prototype.test,
        Z_ = Array.prototype.concat,
        Or = Array.prototype.join,
        TG = Array.prototype.slice,
        ey = Math.floor,
        Fd = typeof BigInt == "function" ? BigInt.prototype.valueOf : null,
        $f = Object.getOwnPropertySymbols,
        Bd = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null,
        ia = typeof Symbol == "function" && typeof Symbol.iterator == "object",
        mn = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === ia ? "object" : "symbol") ? Symbol.toStringTag : null,
        HT = Object.prototype.propertyIsEnumerable,
        ty = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(e) {
            return e.__proto__
        } : null);

    function ny(e, t) {
        if (e === 1 / 0 || e === -1 / 0 || e !== e || e && e > -1e3 && e < 1e3 || jT.call(/e/, t)) return t;
        var n = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
        if (typeof e == "number") {
            var r = e < 0 ? -ey(-e) : ey(e);
            if (r !== e) {
                var s = String(r),
                    o = tp.call(t, s.length + 1);
                return hi.call(s, n, "$&_") + "." + hi.call(hi.call(o, /([0-9]{3})/g, "$&_"), /_$/, "")
            }
        }
        return hi.call(t, n, "$&_")
    }
    var Gd = fG,
        ry = Gd.custom,
        iy = VT(ry) ? ry : null,
        SG = function e(t, n, r, s) {
            var o = n || {};
            if (fi(o, "quoteStyle") && o.quoteStyle !== "single" && o.quoteStyle !== "double") throw new TypeError('option "quoteStyle" must be "single" or "double"');
            if (fi(o, "maxStringLength") && (typeof o.maxStringLength == "number" ? o.maxStringLength < 0 && o.maxStringLength !== 1 / 0 : o.maxStringLength !== null)) throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
            var c = fi(o, "customInspect") ? o.customInspect : !0;
            if (typeof c != "boolean" && c !== "symbol") throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
            if (fi(o, "indent") && o.indent !== null && o.indent !== "	" && !(parseInt(o.indent, 10) === o.indent && o.indent > 0)) throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
            if (fi(o, "numericSeparator") && typeof o.numericSeparator != "boolean") throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
            var u = o.numericSeparator;
            if (typeof t > "u") return "undefined";
            if (t === null) return "null";
            if (typeof t == "boolean") return t ? "true" : "false";
            if (typeof t == "string") return qT(t, o);
            if (typeof t == "number") {
                if (t === 0) return 1 / 0 / t > 0 ? "0" : "-0";
                var f = String(t);
                return u ? ny(t, f) : f
            }
            if (typeof t == "bigint") {
                var h = String(t) + "n";
                return u ? ny(t, h) : h
            }
            var g = typeof o.depth > "u" ? 5 : o.depth;
            if (typeof r > "u" && (r = 0), r >= g && g > 0 && typeof t == "object") return Wd(t) ? "[Array]" : "[Object]";
            var y = GG(o, r);
            if (typeof s > "u") s = [];
            else if (YT(s, t) >= 0) return "[Circular]";

            function b(Oe, F, re) {
                if (F && (s = TG.call(s), s.push(F)), re) {
                    var de = {
                        depth: o.depth
                    };
                    return fi(o, "quoteStyle") && (de.quoteStyle = o.quoteStyle), e(Oe, de, r + 1, s)
                }
                return e(Oe, o, r + 1, s)
            }
            if (typeof t == "function" && !sy(t)) {
                var C = $G(t),
                    R = Rc(t, b);
                return "[Function" + (C ? ": " + C : " (anonymous)") + "]" + (R.length > 0 ? " { " + Or.call(R, ", ") + " }" : "")
            }
            if (VT(t)) {
                var M = ia ? hi.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : Bd.call(t);
                return typeof t == "object" && !ia ? Wa(M) : M
            }
            if (UG(t)) {
                for (var W = "<" + Q_.call(String(t.nodeName)), I = t.attributes || [], K = 0; K < I.length; K++) W += " " + I[K].name + "=" + KT(OG(I[K].value), "double", o);
                return W += ">", t.childNodes && t.childNodes.length && (W += "..."), W += "</" + Q_.call(String(t.nodeName)) + ">", W
            }
            if (Wd(t)) {
                if (t.length === 0) return "[]";
                var q = Rc(t, b);
                return y && !BG(q) ? "[" + jd(q, y) + "]" : "[ " + Or.call(q, ", ") + " ]"
            }
            if (CG(t)) {
                var j = Rc(t, b);
                return !("cause" in Error.prototype) && "cause" in t && !HT.call(t, "cause") ? "{ [" + String(t) + "] " + Or.call(Z_.call("[cause]: " + b(t.cause), j), ", ") + " }" : j.length === 0 ? "[" + String(t) + "]" : "{ [" + String(t) + "] " + Or.call(j, ", ") + " }"
            }
            if (typeof t == "object" && c) {
                if (iy && typeof t[iy] == "function" && Gd) return Gd(t, {
                    depth: g - r
                });
                if (c !== "symbol" && typeof t.inspect == "function") return t.inspect()
            }
            if (PG(t)) {
                var G = [];
                return dG.call(t, function(Oe, F) {
                    G.push(b(F, t, !0) + " => " + b(Oe, t))
                }), ay("Map", ol.call(t), G, y)
            }
            if (MG(t)) {
                var se = [];
                return hG.call(t, function(Oe) {
                    se.push(b(Oe, t))
                }), ay("Set", cl.call(t), se, y)
            }
            if (kG(t)) return Pf("WeakMap");
            if (xG(t)) return Pf("WeakSet");
            if (DG(t)) return Pf("WeakRef");
            if (IG(t)) return Wa(b(Number(t)));
            if (NG(t)) return Wa(b(Fd.call(t)));
            if (RG(t)) return Wa(vG.call(t));
            if (AG(t)) return Wa(b(String(t)));
            if (!wG(t) && !sy(t)) {
                var ce = Rc(t, b),
                    le = ty ? ty(t) === Object.prototype : t instanceof Object || t.constructor === Object,
                    ue = t instanceof Object ? "" : "null prototype",
                    Ie = !le && mn && Object(t) === t && mn in t ? tp.call(Ni(t), 8, -1) : ue ? "Object" : "",
                    be = le || typeof t.constructor != "function" ? "" : t.constructor.name ? t.constructor.name + " " : "",
                    fe = be + (Ie || ue ? "[" + Or.call(Z_.call([], Ie || [], ue || []), ": ") + "] " : "");
                return ce.length === 0 ? fe + "{}" : y ? fe + "{" + jd(ce, y) + "}" : fe + "{ " + Or.call(ce, ", ") + " }"
            }
            return String(t)
        };

    function KT(e, t, n) {
        var r = (n.quoteStyle || t) === "double" ? '"' : "'";
        return r + e + r
    }

    function OG(e) {
        return hi.call(String(e), /"/g, "&quot;")
    }

    function Wd(e) {
        return Ni(e) === "[object Array]" && (!mn || !(typeof e == "object" && mn in e))
    }

    function wG(e) {
        return Ni(e) === "[object Date]" && (!mn || !(typeof e == "object" && mn in e))
    }

    function sy(e) {
        return Ni(e) === "[object RegExp]" && (!mn || !(typeof e == "object" && mn in e))
    }

    function CG(e) {
        return Ni(e) === "[object Error]" && (!mn || !(typeof e == "object" && mn in e))
    }

    function AG(e) {
        return Ni(e) === "[object String]" && (!mn || !(typeof e == "object" && mn in e))
    }

    function IG(e) {
        return Ni(e) === "[object Number]" && (!mn || !(typeof e == "object" && mn in e))
    }

    function RG(e) {
        return Ni(e) === "[object Boolean]" && (!mn || !(typeof e == "object" && mn in e))
    }

    function VT(e) {
        if (ia) return e && typeof e == "object" && e instanceof Symbol;
        if (typeof e == "symbol") return !0;
        if (!e || typeof e != "object" || !Bd) return !1;
        try {
            return Bd.call(e), !0
        } catch {}
        return !1
    }

    function NG(e) {
        if (!e || typeof e != "object" || !Fd) return !1;
        try {
            return Fd.call(e), !0
        } catch {}
        return !1
    }
    var LG = Object.prototype.hasOwnProperty || function(e) {
        return e in this
    };

    function fi(e, t) {
        return LG.call(e, t)
    }

    function Ni(e) {
        return _G.call(e)
    }

    function $G(e) {
        if (e.name) return e.name;
        var t = EG.call(yG.call(e), /^function\s*([\w$]+)/);
        return t ? t[1] : null
    }

    function YT(e, t) {
        if (e.indexOf) return e.indexOf(t);
        for (var n = 0, r = e.length; n < r; n++)
            if (e[n] === t) return n;
        return -1
    }

    function PG(e) {
        if (!ol || !e || typeof e != "object") return !1;
        try {
            ol.call(e);
            try {
                cl.call(e)
            } catch {
                return !0
            }
            return e instanceof Map
        } catch {}
        return !1
    }

    function kG(e) {
        if (!Qa || !e || typeof e != "object") return !1;
        try {
            Qa.call(e, Qa);
            try {
                Za.call(e, Za)
            } catch {
                return !0
            }
            return e instanceof WeakMap
        } catch {}
        return !1
    }

    function DG(e) {
        if (!J_ || !e || typeof e != "object") return !1;
        try {
            return J_.call(e), !0
        } catch {}
        return !1
    }

    function MG(e) {
        if (!cl || !e || typeof e != "object") return !1;
        try {
            cl.call(e);
            try {
                ol.call(e)
            } catch {
                return !0
            }
            return e instanceof Set
        } catch {}
        return !1
    }

    function xG(e) {
        if (!Za || !e || typeof e != "object") return !1;
        try {
            Za.call(e, Za);
            try {
                Qa.call(e, Qa)
            } catch {
                return !0
            }
            return e instanceof WeakSet
        } catch {}
        return !1
    }

    function UG(e) {
        return !e || typeof e != "object" ? !1 : typeof HTMLElement < "u" && e instanceof HTMLElement ? !0 : typeof e.nodeName == "string" && typeof e.getAttribute == "function"
    }

    function qT(e, t) {
        if (e.length > t.maxStringLength) {
            var n = e.length - t.maxStringLength,
                r = "... " + n + " more character" + (n > 1 ? "s" : "");
            return qT(tp.call(e, 0, t.maxStringLength), t) + r
        }
        var s = hi.call(hi.call(e, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, FG);
        return KT(s, "single", t)
    }

    function FG(e) {
        var t = e.charCodeAt(0),
            n = {
                8: "b",
                9: "t",
                10: "n",
                12: "f",
                13: "r"
            } [t];
        return n ? "\\" + n : "\\x" + (t < 16 ? "0" : "") + bG.call(t.toString(16))
    }

    function Wa(e) {
        return "Object(" + e + ")"
    }

    function Pf(e) {
        return e + " { ? }"
    }

    function ay(e, t, n, r) {
        var s = r ? jd(n, r) : Or.call(n, ", ");
        return e + " (" + t + ") {" + s + "}"
    }

    function BG(e) {
        for (var t = 0; t < e.length; t++)
            if (YT(e[t], `
`) >= 0) return !1;
        return !0
    }

    function GG(e, t) {
        var n;
        if (e.indent === "	") n = "	";
        else if (typeof e.indent == "number" && e.indent > 0) n = Or.call(Array(e.indent + 1), " ");
        else return null;
        return {
            base: n,
            prev: Or.call(Array(t + 1), n)
        }
    }

    function jd(e, t) {
        if (e.length === 0) return "";
        var n = `
` + t.prev + t.base;
        return n + Or.call(e, "," + n) + `
` + t.prev
    }

    function Rc(e, t) {
        var n = Wd(e),
            r = [];
        if (n) {
            r.length = e.length;
            for (var s = 0; s < e.length; s++) r[s] = fi(e, s) ? t(e[s], e) : ""
        }
        var o = typeof $f == "function" ? $f(e) : [],
            c;
        if (ia) {
            c = {};
            for (var u = 0; u < o.length; u++) c["$" + o[u]] = o[u]
        }
        for (var f in e) !fi(e, f) || n && String(Number(f)) === f && f < e.length || ia && c["$" + f] instanceof Symbol || (jT.call(/[^\w$]/, f) ? r.push(t(f, e) + ": " + t(e[f], e)) : r.push(f + ": " + t(e[f], e)));
        if (typeof $f == "function")
            for (var h = 0; h < o.length; h++) HT.call(e, o[h]) && r.push("[" + t(o[h]) + "]: " + t(e[o[h]], e));
        return r
    }
    var np = Qh,
        ya = cG,
        WG = SG,
        jG = np("%TypeError%"),
        Nc = np("%WeakMap%", !0),
        Lc = np("%Map%", !0),
        HG = ya("WeakMap.prototype.get", !0),
        KG = ya("WeakMap.prototype.set", !0),
        VG = ya("WeakMap.prototype.has", !0),
        YG = ya("Map.prototype.get", !0),
        qG = ya("Map.prototype.set", !0),
        zG = ya("Map.prototype.has", !0),
        rp = function(e, t) {
            for (var n = e, r;
                (r = n.next) !== null; n = r)
                if (r.key === t) return n.next = r.next, r.next = e.next, e.next = r, r
        },
        XG = function(e, t) {
            var n = rp(e, t);
            return n && n.value
        },
        JG = function(e, t, n) {
            var r = rp(e, t);
            r ? r.value = n : e.next = {
                key: t,
                next: e.next,
                value: n
            }
        },
        QG = function(e, t) {
            return !!rp(e, t)
        },
        ZG = function() {
            var t, n, r, s = {
                assert: function(o) {
                    if (!s.has(o)) throw new jG("Side channel does not contain " + WG(o))
                },
                get: function(o) {
                    if (Nc && o && (typeof o == "object" || typeof o == "function")) {
                        if (t) return HG(t, o)
                    } else if (Lc) {
                        if (n) return YG(n, o)
                    } else if (r) return XG(r, o)
                },
                has: function(o) {
                    if (Nc && o && (typeof o == "object" || typeof o == "function")) {
                        if (t) return VG(t, o)
                    } else if (Lc) {
                        if (n) return zG(n, o)
                    } else if (r) return QG(r, o);
                    return !1
                },
                set: function(o, c) {
                    Nc && o && (typeof o == "object" || typeof o == "function") ? (t || (t = new Nc), KG(t, o, c)) : Lc ? (n || (n = new Lc), qG(n, o, c)) : (r || (r = {
                        key: {},
                        next: null
                    }), JG(r, o, c))
                }
            };
            return s
        },
        eW = String.prototype.replace,
        tW = /%20/g,
        kf = {
            RFC1738: "RFC1738",
            RFC3986: "RFC3986"
        },
        ip = {
            default: kf.RFC3986,
            formatters: {
                RFC1738: function(e) {
                    return eW.call(e, tW, "+")
                },
                RFC3986: function(e) {
                    return String(e)
                }
            },
            RFC1738: kf.RFC1738,
            RFC3986: kf.RFC3986
        },
        nW = ip,
        Df = Object.prototype.hasOwnProperty,
        ts = Array.isArray,
        Er = function() {
            for (var e = [], t = 0; t < 256; ++t) e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
            return e
        }(),
        rW = function(t) {
            for (; t.length > 1;) {
                var n = t.pop(),
                    r = n.obj[n.prop];
                if (ts(r)) {
                    for (var s = [], o = 0; o < r.length; ++o) typeof r[o] < "u" && s.push(r[o]);
                    n.obj[n.prop] = s
                }
            }
        },
        zT = function(t, n) {
            for (var r = n && n.plainObjects ? Object.create(null) : {}, s = 0; s < t.length; ++s) typeof t[s] < "u" && (r[s] = t[s]);
            return r
        },
        iW = function e(t, n, r) {
            if (!n) return t;
            if (typeof n != "object") {
                if (ts(t)) t.push(n);
                else if (t && typeof t == "object")(r && (r.plainObjects || r.allowPrototypes) || !Df.call(Object.prototype, n)) && (t[n] = !0);
                else return [t, n];
                return t
            }
            if (!t || typeof t != "object") return [t].concat(n);
            var s = t;
            return ts(t) && !ts(n) && (s = zT(t, r)), ts(t) && ts(n) ? (n.forEach(function(o, c) {
                if (Df.call(t, c)) {
                    var u = t[c];
                    u && typeof u == "object" && o && typeof o == "object" ? t[c] = e(u, o, r) : t.push(o)
                } else t[c] = o
            }), t) : Object.keys(n).reduce(function(o, c) {
                var u = n[c];
                return Df.call(o, c) ? o[c] = e(o[c], u, r) : o[c] = u, o
            }, s)
        },
        sW = function(t, n) {
            return Object.keys(n).reduce(function(r, s) {
                return r[s] = n[s], r
            }, t)
        },
        aW = function(e, t, n) {
            var r = e.replace(/\+/g, " ");
            if (n === "iso-8859-1") return r.replace(/%[0-9a-f]{2}/gi, unescape);
            try {
                return decodeURIComponent(r)
            } catch {
                return r
            }
        },
        oW = function(t, n, r, s, o) {
            if (t.length === 0) return t;
            var c = t;
            if (typeof t == "symbol" ? c = Symbol.prototype.toString.call(t) : typeof t != "string" && (c = String(t)), r === "iso-8859-1") return escape(c).replace(/%u[0-9a-f]{4}/gi, function(g) {
                return "%26%23" + parseInt(g.slice(2), 16) + "%3B"
            });
            for (var u = "", f = 0; f < c.length; ++f) {
                var h = c.charCodeAt(f);
                if (h === 45 || h === 46 || h === 95 || h === 126 || h >= 48 && h <= 57 || h >= 65 && h <= 90 || h >= 97 && h <= 122 || o === nW.RFC1738 && (h === 40 || h === 41)) {
                    u += c.charAt(f);
                    continue
                }
                if (h < 128) {
                    u = u + Er[h];
                    continue
                }
                if (h < 2048) {
                    u = u + (Er[192 | h >> 6] + Er[128 | h & 63]);
                    continue
                }
                if (h < 55296 || h >= 57344) {
                    u = u + (Er[224 | h >> 12] + Er[128 | h >> 6 & 63] + Er[128 | h & 63]);
                    continue
                }
                f += 1, h = 65536 + ((h & 1023) << 10 | c.charCodeAt(f) & 1023), u += Er[240 | h >> 18] + Er[128 | h >> 12 & 63] + Er[128 | h >> 6 & 63] + Er[128 | h & 63]
            }
            return u
        },
        cW = function(t) {
            for (var n = [{
                    obj: {
                        o: t
                    },
                    prop: "o"
                }], r = [], s = 0; s < n.length; ++s)
                for (var o = n[s], c = o.obj[o.prop], u = Object.keys(c), f = 0; f < u.length; ++f) {
                    var h = u[f],
                        g = c[h];
                    typeof g == "object" && g !== null && r.indexOf(g) === -1 && (n.push({
                        obj: c,
                        prop: h
                    }), r.push(g))
                }
            return rW(n), t
        },
        lW = function(t) {
            return Object.prototype.toString.call(t) === "[object RegExp]"
        },
        uW = function(t) {
            return !t || typeof t != "object" ? !1 : !!(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t))
        },
        fW = function(t, n) {
            return [].concat(t, n)
        },
        dW = function(t, n) {
            if (ts(t)) {
                for (var r = [], s = 0; s < t.length; s += 1) r.push(n(t[s]));
                return r
            }
            return n(t)
        },
        XT = {
            arrayToObject: zT,
            assign: sW,
            combine: fW,
            compact: cW,
            decode: aW,
            encode: oW,
            isBuffer: uW,
            isRegExp: lW,
            maybeMap: dW,
            merge: iW
        },
        JT = ZG,
        Hd = XT,
        eo = ip,
        hW = Object.prototype.hasOwnProperty,
        oy = {
            brackets: function(t) {
                return t + "[]"
            },
            comma: "comma",
            indices: function(t, n) {
                return t + "[" + n + "]"
            },
            repeat: function(t) {
                return t
            }
        },
        Wr = Array.isArray,
        pW = String.prototype.split,
        gW = Array.prototype.push,
        QT = function(e, t) {
            gW.apply(e, Wr(t) ? t : [t])
        },
        mW = Date.prototype.toISOString,
        cy = eo.default,
        an = {
            addQueryPrefix: !1,
            allowDots: !1,
            charset: "utf-8",
            charsetSentinel: !1,
            delimiter: "&",
            encode: !0,
            encoder: Hd.encode,
            encodeValuesOnly: !1,
            format: cy,
            formatter: eo.formatters[cy],
            indices: !1,
            serializeDate: function(t) {
                return mW.call(t)
            },
            skipNulls: !1,
            strictNullHandling: !1
        },
        vW = function(t) {
            return typeof t == "string" || typeof t == "number" || typeof t == "boolean" || typeof t == "symbol" || typeof t == "bigint"
        },
        Mf = {},
        _W = function e(t, n, r, s, o, c, u, f, h, g, y, b, C, R, M, W) {
            for (var I = t, K = W, q = 0, j = !1;
                (K = K.get(Mf)) !== void 0 && !j;) {
                var G = K.get(t);
                if (q += 1, typeof G < "u") {
                    if (G === q) throw new RangeError("Cyclic object value");
                    j = !0
                }
                typeof K.get(Mf) > "u" && (q = 0)
            }
            if (typeof f == "function" ? I = f(n, I) : I instanceof Date ? I = y(I) : r === "comma" && Wr(I) && (I = Hd.maybeMap(I, function(Se) {
                    return Se instanceof Date ? y(Se) : Se
                })), I === null) {
                if (o) return u && !R ? u(n, an.encoder, M, "key", b) : n;
                I = ""
            }
            if (vW(I) || Hd.isBuffer(I)) {
                if (u) {
                    var se = R ? n : u(n, an.encoder, M, "key", b);
                    if (r === "comma" && R) {
                        for (var ce = pW.call(String(I), ","), le = "", ue = 0; ue < ce.length; ++ue) le += (ue === 0 ? "" : ",") + C(u(ce[ue], an.encoder, M, "value", b));
                        return [C(se) + (s && Wr(I) && ce.length === 1 ? "[]" : "") + "=" + le]
                    }
                    return [C(se) + "=" + C(u(I, an.encoder, M, "value", b))]
                }
                return [C(n) + "=" + C(String(I))]
            }
            var Ie = [];
            if (typeof I > "u") return Ie;
            var be;
            if (r === "comma" && Wr(I)) be = [{
                value: I.length > 0 ? I.join(",") || null : void 0
            }];
            else if (Wr(f)) be = f;
            else {
                var fe = Object.keys(I);
                be = h ? fe.sort(h) : fe
            }
            for (var Oe = s && Wr(I) && I.length === 1 ? n + "[]" : n, F = 0; F < be.length; ++F) {
                var re = be[F],
                    de = typeof re == "object" && typeof re.value < "u" ? re.value : I[re];
                if (!(c && de === null)) {
                    var _e = Wr(I) ? typeof r == "function" ? r(Oe, re) : Oe : Oe + (g ? "." + re : "[" + re + "]");
                    W.set(t, q);
                    var me = JT();
                    me.set(Mf, W), QT(Ie, e(de, _e, r, s, o, c, u, f, h, g, y, b, C, R, M, me))
                }
            }
            return Ie
        },
        yW = function(t) {
            if (!t) return an;
            if (t.encoder !== null && typeof t.encoder < "u" && typeof t.encoder != "function") throw new TypeError("Encoder has to be a function.");
            var n = t.charset || an.charset;
            if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
            var r = eo.default;
            if (typeof t.format < "u") {
                if (!hW.call(eo.formatters, t.format)) throw new TypeError("Unknown format option provided.");
                r = t.format
            }
            var s = eo.formatters[r],
                o = an.filter;
            return (typeof t.filter == "function" || Wr(t.filter)) && (o = t.filter), {
                addQueryPrefix: typeof t.addQueryPrefix == "boolean" ? t.addQueryPrefix : an.addQueryPrefix,
                allowDots: typeof t.allowDots > "u" ? an.allowDots : !!t.allowDots,
                charset: n,
                charsetSentinel: typeof t.charsetSentinel == "boolean" ? t.charsetSentinel : an.charsetSentinel,
                delimiter: typeof t.delimiter > "u" ? an.delimiter : t.delimiter,
                encode: typeof t.encode == "boolean" ? t.encode : an.encode,
                encoder: typeof t.encoder == "function" ? t.encoder : an.encoder,
                encodeValuesOnly: typeof t.encodeValuesOnly == "boolean" ? t.encodeValuesOnly : an.encodeValuesOnly,
                filter: o,
                format: r,
                formatter: s,
                serializeDate: typeof t.serializeDate == "function" ? t.serializeDate : an.serializeDate,
                skipNulls: typeof t.skipNulls == "boolean" ? t.skipNulls : an.skipNulls,
                sort: typeof t.sort == "function" ? t.sort : null,
                strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : an.strictNullHandling
            }
        },
        EW = function(e, t) {
            var n = e,
                r = yW(t),
                s, o;
            typeof r.filter == "function" ? (o = r.filter, n = o("", n)) : Wr(r.filter) && (o = r.filter, s = o);
            var c = [];
            if (typeof n != "object" || n === null) return "";
            var u;
            t && t.arrayFormat in oy ? u = t.arrayFormat : t && "indices" in t ? u = t.indices ? "indices" : "repeat" : u = "indices";
            var f = oy[u];
            if (t && "commaRoundTrip" in t && typeof t.commaRoundTrip != "boolean") throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
            var h = f === "comma" && t && t.commaRoundTrip;
            s || (s = Object.keys(n)), r.sort && s.sort(r.sort);
            for (var g = JT(), y = 0; y < s.length; ++y) {
                var b = s[y];
                r.skipNulls && n[b] === null || QT(c, _W(n[b], b, f, h, r.strictNullHandling, r.skipNulls, r.encode ? r.encoder : null, r.filter, r.sort, r.allowDots, r.serializeDate, r.format, r.formatter, r.encodeValuesOnly, r.charset, g))
            }
            var C = c.join(r.delimiter),
                R = r.addQueryPrefix === !0 ? "?" : "";
            return r.charsetSentinel && (r.charset === "iso-8859-1" ? R += "utf8=%26%2310003%3B&" : R += "utf8=%E2%9C%93&"), C.length > 0 ? R + C : ""
        },
        sa = XT,
        Kd = Object.prototype.hasOwnProperty,
        bW = Array.isArray,
        Jt = {
            allowDots: !1,
            allowPrototypes: !1,
            allowSparse: !1,
            arrayLimit: 20,
            charset: "utf-8",
            charsetSentinel: !1,
            comma: !1,
            decoder: sa.decode,
            delimiter: "&",
            depth: 5,
            ignoreQueryPrefix: !1,
            interpretNumericEntities: !1,
            parameterLimit: 1e3,
            parseArrays: !0,
            plainObjects: !1,
            strictNullHandling: !1
        },
        TW = function(e) {
            return e.replace(/&#(\d+);/g, function(t, n) {
                return String.fromCharCode(parseInt(n, 10))
            })
        },
        ZT = function(e, t) {
            return e && typeof e == "string" && t.comma && e.indexOf(",") > -1 ? e.split(",") : e
        },
        SW = "utf8=%26%2310003%3B",
        OW = "utf8=%E2%9C%93",
        wW = function(t, n) {
            var r = {},
                s = n.ignoreQueryPrefix ? t.replace(/^\?/, "") : t,
                o = n.parameterLimit === 1 / 0 ? void 0 : n.parameterLimit,
                c = s.split(n.delimiter, o),
                u = -1,
                f, h = n.charset;
            if (n.charsetSentinel)
                for (f = 0; f < c.length; ++f) c[f].indexOf("utf8=") === 0 && (c[f] === OW ? h = "utf-8" : c[f] === SW && (h = "iso-8859-1"), u = f, f = c.length);
            for (f = 0; f < c.length; ++f)
                if (f !== u) {
                    var g = c[f],
                        y = g.indexOf("]="),
                        b = y === -1 ? g.indexOf("=") : y + 1,
                        C, R;
                    b === -1 ? (C = n.decoder(g, Jt.decoder, h, "key"), R = n.strictNullHandling ? null : "") : (C = n.decoder(g.slice(0, b), Jt.decoder, h, "key"), R = sa.maybeMap(ZT(g.slice(b + 1), n), function(M) {
                        return n.decoder(M, Jt.decoder, h, "value")
                    })), R && n.interpretNumericEntities && h === "iso-8859-1" && (R = TW(R)), g.indexOf("[]=") > -1 && (R = bW(R) ? [R] : R), Kd.call(r, C) ? r[C] = sa.combine(r[C], R) : r[C] = R
                } return r
        },
        CW = function(e, t, n, r) {
            for (var s = r ? t : ZT(t, n), o = e.length - 1; o >= 0; --o) {
                var c, u = e[o];
                if (u === "[]" && n.parseArrays) c = [].concat(s);
                else {
                    c = n.plainObjects ? Object.create(null) : {};
                    var f = u.charAt(0) === "[" && u.charAt(u.length - 1) === "]" ? u.slice(1, -1) : u,
                        h = parseInt(f, 10);
                    !n.parseArrays && f === "" ? c = {
                        0: s
                    } : !isNaN(h) && u !== f && String(h) === f && h >= 0 && n.parseArrays && h <= n.arrayLimit ? (c = [], c[h] = s) : f !== "__proto__" && (c[f] = s)
                }
                s = c
            }
            return s
        },
        AW = function(t, n, r, s) {
            if (!!t) {
                var o = r.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t,
                    c = /(\[[^[\]]*])/,
                    u = /(\[[^[\]]*])/g,
                    f = r.depth > 0 && c.exec(o),
                    h = f ? o.slice(0, f.index) : o,
                    g = [];
                if (h) {
                    if (!r.plainObjects && Kd.call(Object.prototype, h) && !r.allowPrototypes) return;
                    g.push(h)
                }
                for (var y = 0; r.depth > 0 && (f = u.exec(o)) !== null && y < r.depth;) {
                    if (y += 1, !r.plainObjects && Kd.call(Object.prototype, f[1].slice(1, -1)) && !r.allowPrototypes) return;
                    g.push(f[1])
                }
                return f && g.push("[" + o.slice(f.index) + "]"), CW(g, n, r, s)
            }
        },
        IW = function(t) {
            if (!t) return Jt;
            if (t.decoder !== null && t.decoder !== void 0 && typeof t.decoder != "function") throw new TypeError("Decoder has to be a function.");
            if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
            var n = typeof t.charset > "u" ? Jt.charset : t.charset;
            return {
                allowDots: typeof t.allowDots > "u" ? Jt.allowDots : !!t.allowDots,
                allowPrototypes: typeof t.allowPrototypes == "boolean" ? t.allowPrototypes : Jt.allowPrototypes,
                allowSparse: typeof t.allowSparse == "boolean" ? t.allowSparse : Jt.allowSparse,
                arrayLimit: typeof t.arrayLimit == "number" ? t.arrayLimit : Jt.arrayLimit,
                charset: n,
                charsetSentinel: typeof t.charsetSentinel == "boolean" ? t.charsetSentinel : Jt.charsetSentinel,
                comma: typeof t.comma == "boolean" ? t.comma : Jt.comma,
                decoder: typeof t.decoder == "function" ? t.decoder : Jt.decoder,
                delimiter: typeof t.delimiter == "string" || sa.isRegExp(t.delimiter) ? t.delimiter : Jt.delimiter,
                depth: typeof t.depth == "number" || t.depth === !1 ? +t.depth : Jt.depth,
                ignoreQueryPrefix: t.ignoreQueryPrefix === !0,
                interpretNumericEntities: typeof t.interpretNumericEntities == "boolean" ? t.interpretNumericEntities : Jt.interpretNumericEntities,
                parameterLimit: typeof t.parameterLimit == "number" ? t.parameterLimit : Jt.parameterLimit,
                parseArrays: t.parseArrays !== !1,
                plainObjects: typeof t.plainObjects == "boolean" ? t.plainObjects : Jt.plainObjects,
                strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : Jt.strictNullHandling
            }
        },
        RW = function(e, t) {
            var n = IW(t);
            if (e === "" || e === null || typeof e > "u") return n.plainObjects ? Object.create(null) : {};
            for (var r = typeof e == "string" ? wW(e, n) : e, s = n.plainObjects ? Object.create(null) : {}, o = Object.keys(r), c = 0; c < o.length; ++c) {
                var u = o[c],
                    f = AW(u, r[u], n, typeof e == "string");
                s = sa.merge(s, f, n)
            }
            return n.allowSparse === !0 ? s : sa.compact(s)
        },
        NW = EW,
        LW = RW,
        $W = ip,
        eS = {
            formats: $W,
            parse: LW,
            stringify: NW
        };
    class PW {
        constructor(t) {
            this.code = t.code, this.token = t.token, this.host = t.host
        }
    }
    class kW {
        constructor(t) {
            this.appId = t.appId, this.appTag = t.appTag, this.audienceEnabled = t.audienceEnabled, this.code = t.code, this.host = t.host, this.audienceHost = t.audienceHost, this.locked = t.locked, this.full = t.full, this.moderationEnabled = t.moderationEnabled, this.passwordRequired = t.passwordRequired, this.twitchLocked = t.twitchLocked, this.locale = t.locale, this.keepalive = t.keepalive, this.controllerBranch = t.controllerBranch
        }
    }
    class DW {
        constructor(t) {
            this.connections = t.connections
        }
    }
    class MW {
        constructor(t) {
            this.cause = t.cause
        }
        whenReceived(t) {
            t.disconnect()
        }
    }
    class xW {}
    var Wl = {
        CreateRoomReply: PW,
        GetRoomReply: kW,
        GetAudienceReply: DW,
        RoomExit: MW,
        RoomLock: xW
    };
    const ly = Ud.exports,
        UW = eS,
        {
            CreateRoomReply: FW,
            GetRoomReply: BW
        } = Wl;
    class GW {
        constructor(t) {
            if (!t.host) throw new Error("unable to create ecast APIClient: no host provided");
            if (this.host = t.host, !t.scheme) throw new Error("unable to create ecast APIClient: no scheme provided");
            this.scheme = t.scheme
        }
        url(t, n) {
            if (n) {
                let r = UW.stringify(n);
                return `${this.scheme}://${this.host}/api/v2${t}?${r}`
            }
            return `${this.scheme}://${this.host}/api/v2${t}`
        }
        async createRoom(t) {
            let n = {
                userId: t.userId || "fart",
                appTag: t.appTag || "test"
            };
            t.password && (n.password = t.password), t.moderatorPassword && (n.moderatorPassword = t.moderatorPassword), t.twitchLocked && (n.twitchLocked = t.twitchLocked), t.locale && (n.locale = t.locale), t.keepalive && (n.keepalive = t.keepalive), t.controllerBranch && (n.controllerBranch = t.controllerBranch);
            let r = this.url("/rooms", n),
                c = await (await ly(r, {
                    method: "POST"
                })).json();
            if (!c.ok) throw new Error(`failed to create room: ${c.error}`);
            let u = c.body;
            return new FW({
                code: u.code,
                token: u.token,
                host: u.host
            })
        }
        async getRoom(t) {
            let n = this.url(`/rooms/${t.code}`),
                s = await (await ly(n)).json();
            if (!s.ok) throw new Error(`unable to get room with options ${JSON.stringify(t)}: ${s.error}`);
            let o = s.body;
            return new BW({
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
    var WW = {
            APIClient: GW
        },
        Ms = null;
    typeof WebSocket < "u" ? Ms = WebSocket : typeof MozWebSocket < "u" ? Ms = MozWebSocket : typeof Ft < "u" ? Ms = Ft.WebSocket || Ft.MozWebSocket : typeof window < "u" ? Ms = window.WebSocket || window.MozWebSocket : typeof self < "u" && (Ms = self.WebSocket || self.MozWebSocket);
    var jW = Ms,
        sp = {
            exports: {}
        },
        qs = typeof Reflect == "object" ? Reflect : null,
        uy = qs && typeof qs.apply == "function" ? qs.apply : function(t, n, r) {
            return Function.prototype.apply.call(t, n, r)
        },
        qc;
    qs && typeof qs.ownKeys == "function" ? qc = qs.ownKeys : Object.getOwnPropertySymbols ? qc = function(t) {
        return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))
    } : qc = function(t) {
        return Object.getOwnPropertyNames(t)
    };

    function HW(e) {
        console && console.warn && console.warn(e)
    }
    var tS = Number.isNaN || function(t) {
        return t !== t
    };

    function gt() {
        gt.init.call(this)
    }
    sp.exports = gt;
    sp.exports.once = qW;
    gt.EventEmitter = gt;
    gt.prototype._events = void 0;
    gt.prototype._eventsCount = 0;
    gt.prototype._maxListeners = void 0;
    var fy = 10;

    function jl(e) {
        if (typeof e != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e)
    }
    Object.defineProperty(gt, "defaultMaxListeners", {
        enumerable: !0,
        get: function() {
            return fy
        },
        set: function(e) {
            if (typeof e != "number" || e < 0 || tS(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
            fy = e
        }
    });
    gt.init = function() {
        (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
    };
    gt.prototype.setMaxListeners = function(t) {
        if (typeof t != "number" || t < 0 || tS(t)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
        return this._maxListeners = t, this
    };

    function nS(e) {
        return e._maxListeners === void 0 ? gt.defaultMaxListeners : e._maxListeners
    }
    gt.prototype.getMaxListeners = function() {
        return nS(this)
    };
    gt.prototype.emit = function(t) {
        for (var n = [], r = 1; r < arguments.length; r++) n.push(arguments[r]);
        var s = t === "error",
            o = this._events;
        if (o !== void 0) s = s && o.error === void 0;
        else if (!s) return !1;
        if (s) {
            var c;
            if (n.length > 0 && (c = n[0]), c instanceof Error) throw c;
            var u = new Error("Unhandled error." + (c ? " (" + c.message + ")" : ""));
            throw u.context = c, u
        }
        var f = o[t];
        if (f === void 0) return !1;
        if (typeof f == "function") uy(f, this, n);
        else
            for (var h = f.length, g = oS(f, h), r = 0; r < h; ++r) uy(g[r], this, n);
        return !0
    };

    function rS(e, t, n, r) {
        var s, o, c;
        if (jl(n), o = e._events, o === void 0 ? (o = e._events = Object.create(null), e._eventsCount = 0) : (o.newListener !== void 0 && (e.emit("newListener", t, n.listener ? n.listener : n), o = e._events), c = o[t]), c === void 0) c = o[t] = n, ++e._eventsCount;
        else if (typeof c == "function" ? c = o[t] = r ? [n, c] : [c, n] : r ? c.unshift(n) : c.push(n), s = nS(e), s > 0 && c.length > s && !c.warned) {
            c.warned = !0;
            var u = new Error("Possible EventEmitter memory leak detected. " + c.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
            u.name = "MaxListenersExceededWarning", u.emitter = e, u.type = t, u.count = c.length, HW(u)
        }
        return e
    }
    gt.prototype.addListener = function(t, n) {
        return rS(this, t, n, !1)
    };
    gt.prototype.on = gt.prototype.addListener;
    gt.prototype.prependListener = function(t, n) {
        return rS(this, t, n, !0)
    };

    function KW() {
        if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
    }

    function iS(e, t, n) {
        var r = {
                fired: !1,
                wrapFn: void 0,
                target: e,
                type: t,
                listener: n
            },
            s = KW.bind(r);
        return s.listener = n, r.wrapFn = s, s
    }
    gt.prototype.once = function(t, n) {
        return jl(n), this.on(t, iS(this, t, n)), this
    };
    gt.prototype.prependOnceListener = function(t, n) {
        return jl(n), this.prependListener(t, iS(this, t, n)), this
    };
    gt.prototype.removeListener = function(t, n) {
        var r, s, o, c, u;
        if (jl(n), s = this._events, s === void 0) return this;
        if (r = s[t], r === void 0) return this;
        if (r === n || r.listener === n) --this._eventsCount === 0 ? this._events = Object.create(null) : (delete s[t], s.removeListener && this.emit("removeListener", t, r.listener || n));
        else if (typeof r != "function") {
            for (o = -1, c = r.length - 1; c >= 0; c--)
                if (r[c] === n || r[c].listener === n) {
                    u = r[c].listener, o = c;
                    break
                } if (o < 0) return this;
            o === 0 ? r.shift() : VW(r, o), r.length === 1 && (s[t] = r[0]), s.removeListener !== void 0 && this.emit("removeListener", t, u || n)
        }
        return this
    };
    gt.prototype.off = gt.prototype.removeListener;
    gt.prototype.removeAllListeners = function(t) {
        var n, r, s;
        if (r = this._events, r === void 0) return this;
        if (r.removeListener === void 0) return arguments.length === 0 ? (this._events = Object.create(null), this._eventsCount = 0) : r[t] !== void 0 && (--this._eventsCount === 0 ? this._events = Object.create(null) : delete r[t]), this;
        if (arguments.length === 0) {
            var o = Object.keys(r),
                c;
            for (s = 0; s < o.length; ++s) c = o[s], c !== "removeListener" && this.removeAllListeners(c);
            return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
        }
        if (n = r[t], typeof n == "function") this.removeListener(t, n);
        else if (n !== void 0)
            for (s = n.length - 1; s >= 0; s--) this.removeListener(t, n[s]);
        return this
    };

    function sS(e, t, n) {
        var r = e._events;
        if (r === void 0) return [];
        var s = r[t];
        return s === void 0 ? [] : typeof s == "function" ? n ? [s.listener || s] : [s] : n ? YW(s) : oS(s, s.length)
    }
    gt.prototype.listeners = function(t) {
        return sS(this, t, !0)
    };
    gt.prototype.rawListeners = function(t) {
        return sS(this, t, !1)
    };
    gt.listenerCount = function(e, t) {
        return typeof e.listenerCount == "function" ? e.listenerCount(t) : aS.call(e, t)
    };
    gt.prototype.listenerCount = aS;

    function aS(e) {
        var t = this._events;
        if (t !== void 0) {
            var n = t[e];
            if (typeof n == "function") return 1;
            if (n !== void 0) return n.length
        }
        return 0
    }
    gt.prototype.eventNames = function() {
        return this._eventsCount > 0 ? qc(this._events) : []
    };

    function oS(e, t) {
        for (var n = new Array(t), r = 0; r < t; ++r) n[r] = e[r];
        return n
    }

    function VW(e, t) {
        for (; t + 1 < e.length; t++) e[t] = e[t + 1];
        e.pop()
    }

    function YW(e) {
        for (var t = new Array(e.length), n = 0; n < t.length; ++n) t[n] = e[n].listener || e[n];
        return t
    }

    function qW(e, t) {
        return new Promise(function(n, r) {
            function s(c) {
                e.removeListener(t, o), r(c)
            }

            function o() {
                typeof e.removeListener == "function" && e.removeListener("error", s), n([].slice.call(arguments))
            }
            cS(e, t, o, {
                once: !0
            }), t !== "error" && zW(e, s, {
                once: !0
            })
        })
    }

    function zW(e, t, n) {
        typeof e.on == "function" && cS(e, "error", t, n)
    }

    function cS(e, t, n, r) {
        if (typeof e.on == "function") r.once ? e.once(t, n) : e.on(t, n);
        else if (typeof e.addEventListener == "function") e.addEventListener(t, function s(o) {
            r.once && e.removeEventListener(t, s), n(o)
        });
        else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e)
    }
    class XW {
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
    class Hl extends Error {
        constructor(t) {
            super(t), t && (this.code = t.code, this.message = t.message)
        }
    }
    class Ao extends Hl {
        constructor(t) {
            super(t), this.code = 1e3, this.message = t && t.message ? t.message : "ecast server error"
        }
    }
    class lS extends Ao {
        constructor(t) {
            super(t), this.code = 1001, this.message = t && t.message ? t.message : "create room failed"
        }
    }
    class uS extends Ao {
        constructor(t) {
            super(t), this.code = 1002, this.message = t && t.message ? t.message : "unable to connect to room"
        }
    }
    class fS extends Ao {
        constructor(t) {
            super(t), this.code = 1003, this.message = t && t.message ? t.message : "server is shutting down"
        }
    }
    class dt extends Hl {
        constructor(t) {
            super(t), this.code = 2e3, this.message = t && t.message ? t.message : "ecast client error"
        }
    }
    class dS extends dt {
        constructor(t) {
            super(t), this.code = 2001, this.message = t && t.message ? t.message : "parse error in ecast protocol"
        }
    }
    class hS extends dt {
        constructor(t) {
            super(t), this.code = 2002, this.message = t && t.message ? t.message : "missing opcode"
        }
    }
    class pS extends dt {
        constructor(t) {
            super(t), this.code = 2003, this.message = t && t.message ? t.message : "invalid opcode"
        }
    }
    class gS extends dt {
        constructor(t) {
            super(t), this.code = 2004, this.message = t && t.message ? t.message : "invalid arguments"
        }
    }
    class mS extends dt {
        constructor(t) {
            super(t), this.code = 2005, this.message = t && t.message ? t.message : "entity not found"
        }
    }
    class vS extends dt {
        constructor(t) {
            super(t), this.code = 2006, this.message = t && t.message ? t.message : "an entity already exists with that key"
        }
    }
    class _S extends dt {
        constructor(t) {
            super(t), this.code = 2007, this.message = t && t.message ? t.message : "the entity is not of the expected type"
        }
    }
    class yS extends dt {
        constructor(t) {
            super(t), this.code = 2008, this.message = t && t.message ? t.message : "no such client"
        }
    }
    class ES extends dt {
        constructor(t) {
            super(t), this.code = 2009, this.message = t && t.message ? t.message : "room is locked"
        }
    }
    class bS extends dt {
        constructor(t) {
            super(t), this.code = 2010, this.message = t && t.message ? t.message : "room is full"
        }
    }
    class TS extends dt {
        constructor(t) {
            super(t), this.code = 2011, this.message = t && t.message ? t.message : "no such license"
        }
    }
    class SS extends dt {
        constructor(t) {
            super(t), this.code = 2012, this.message = t && t.message ? t.message : "invalid license"
        }
    }
    class OS extends dt {
        constructor(t) {
            super(t), this.code = 2013, this.message = t && t.message ? t.message : "room not found"
        }
    }
    class wS extends dt {
        constructor(t) {
            super(t), this.code = 2014, this.message = t && t.message ? t.message : "requested role does not exist"
        }
    }
    class CS extends dt {
        constructor(t) {
            super(t), this.code = 2015, this.message = t && t.message ? t.message : "twitch login required"
        }
    }
    class AS extends dt {
        constructor(t) {
            super(t), this.code = 2016, this.message = t && t.message ? t.message : "no such option"
        }
    }
    class IS extends dt {
        constructor(t) {
            super(t), this.code = 2017, this.message = t && t.message ? t.message : "password required"
        }
    }
    class RS extends dt {
        constructor(t) {
            super(t), this.code = 2018, this.message = t && t.message ? t.message : "invalid room password"
        }
    }
    class NS extends dt {
        constructor(t) {
            super(t), this.code = 2019, this.message = t && t.message ? t.message : "missing name"
        }
    }
    class LS extends dt {
        constructor(t) {
            super(t), this.code = 2021, this.message = t && t.message ? t.message : "text did not pass text filters"
        }
    }
    class $S extends dt {
        constructor(t) {
            super(t), this.code = 2022, this.message = t && t.message ? t.message : "no such filter"
        }
    }
    class PS extends dt {
        constructor(t) {
            super(t), this.code = 2023, this.message = t && t.message ? t.message : "permission denied"
        }
    }
    class kS extends dt {
        constructor(t) {
            super(t), this.code = 2024, this.message = t && t.message ? t.message : "not connected to a room"
        }
    }
    class DS extends dt {
        constructor(t) {
            super(t), this.code = 2025, this.message = t && t.message ? t.message : "illegal operation"
        }
    }
    class MS extends dt {
        constructor(t) {
            super(t), this.code = 2026, this.message = t && t.message ? t.message : "invalid ACL change"
        }
    }
    class xS extends dt {
        constructor(t) {
            super(t), this.code = 2027, this.message = t && t.message ? t.message : "room has already ended"
        }
    }
    class US extends dt {
        constructor(t) {
            super(t), this.code = 2028, this.message = t && t.message ? t.message : "the entity is locked"
        }
    }
    class FS extends dt {
        constructor(t) {
            super(t), this.code = 2420, this.message = t && t.message ? t.message : "rate limit exceeded"
        }
    }

    function JW({
        code: e,
        message: t
    }) {
        const n = QW[e];
        return n ? new n({
            message: t
        }) : new Hl({
            message: t
        })
    }
    var Un = {
        createError: JW,
        CallError: Hl,
        EcastServerError: Ao,
        EcastCreateRoomFailed: lS,
        EcastDialRoomFailed: uS,
        EcastServerIsShuttingDown: fS,
        EcastClientError: dt,
        EcastParseError: dS,
        EcastRequestIsMissingOpcode: hS,
        EcastRequestHasInvalidOpcode: pS,
        EcastRequestHasInvalidArguments: gS,
        EcastEntityNotFound: mS,
        EcastEntityAlreadyExists: vS,
        EcastEntityTypeError: _S,
        EcastNoSuchClient: yS,
        EcastRoomIsLocked: ES,
        EcastRoomIsFull: bS,
        EcastLicenseNotFound: TS,
        EcastLicenseCheckFailed: SS,
        EcastRoomNotFound: OS,
        EcastInvalidRole: wS,
        EcastTwitchLoginRequired: CS,
        EcastInvalidOption: AS,
        EcastPasswordRequired: IS,
        EcastInvalidPassword: RS,
        EcastNameRequired: NS,
        EcastFilterError: LS,
        EcastNoSuchFilter: $S,
        EcastPermissionDenied: PS,
        EcastNotConnected: kS,
        EcastIllegalOperation: DS,
        EcastACLChangeDenied: MS,
        EcastRoomHasEnded: xS,
        EcastEntityLocked: US,
        EcastRateLimitExceeded: FS,
        ObservedError: XW
    };
    const QW = {
        1e3: Ao,
        1001: lS,
        1002: uS,
        1003: fS,
        2e3: dt,
        2001: dS,
        2002: hS,
        2003: pS,
        2004: gS,
        2005: mS,
        2006: vS,
        2007: _S,
        2008: yS,
        2009: ES,
        2010: bS,
        2011: TS,
        2012: SS,
        2013: OS,
        2014: wS,
        2015: CS,
        2016: AS,
        2017: IS,
        2018: RS,
        2019: NS,
        2021: LS,
        2022: $S,
        2023: PS,
        2024: kS,
        2025: DS,
        2026: MS,
        2027: xS,
        2028: US,
        2420: FS
    };
    class ZW {
        constructor(t) {
            this.id = t.id, this.deviceId = t.deviceId, this.name = t.name, this.secret = t.secret, this.reconnect = t.reconnect, this.entities = t.entities, this.here = t.here, this.profile = t.profile, this.replayEnd = t.replayEnd
        }
    }
    class ej {
        constructor(t) {
            this.id = t.id, this.userId = t.userId, this.name = t.name, this.role = t.role, this.reconnect = t.reconnect
        }
    }
    class tj {
        constructor(t) {
            this.id = t.id, this.role = t.role
        }
    }
    class nj {
        constructor(t) {
            this.to = t.to, this.from = t.from, this.body = t.body, this.userId = t.userId
        }
    }
    class rj {
        constructor(t) {
            this.id = t.id, this.banned = t.banned, this.reason = t.reason
        }
    }
    var ap = {
        ClientConnected: ej,
        ClientDisconnected: tj,
        ClientKicked: rj,
        ClientSend: nj,
        ClientWelcome: ZW
    };
    class ij {
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
    var op = {
        CountGroup: ij
    };
    class sj {
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
    var cp = {
        GCounter: sj
    };
    class aj {
        constructor(t) {
            this.pc = t.pc, this.opcode = t.opcode, this.result = t.result
        }
    }
    var BS = {
        Notification: aj
    };
    class oj {
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
    class cj {
        constructor(t) {
            this.message = t.message
        }
        toString() {
            return `ObjectEcho{message: ${this.message}}`
        }
    }
    var lp = {
        ObjectEntity: oj,
        ObjectEcho: cj
    };
    class lj {
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
    var up = {
        PNCounter: lj
    };
    class uj {
        constructor(t) {
            this.pc = t.pc, this.re = t.re, this.opcode = t.opcode, this.result = t.result
        }
    }
    var GS = {
        Reply: uj
    };
    class fj {
        constructor(t) {
            this.seq = t.seq, this.opcode = t.opcode, this.params = t.params
        }
    }
    var dj = {
        Request: fj
    };
    class hj {
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
    class pj {
        constructor(t) {
            this.message = t.message
        }
        toString() {
            return `TextEcho{message: ${this.message}
}`
        }
    }
    var fp = {
        TextEntity: hj,
        TextEcho: pj
    };
    class gj {
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
    var dp = {
        TextRing: gj
    };
    class mj {
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
    var WS = {
        ArtifactEntity: mj
    };
    class vj {
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
    class _j {
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
    class yj {
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
    var hp = {
        DoodleEntity: vj,
        DoodleLine: _j,
        DoodleLineRemoved: yj
    };
    class Ej {
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
    class bj {
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
    class Tj {
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
    var jS = {
        StackEntity: Ej,
        StackElement: bj,
        StackElements: Tj
    };
    class Sj {
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
    var HS = {
        DropEntity: Sj
    };
    class Oj {
        constructor(t) {
            this.message = t.message
        }
        toString() {
            return `Echo{message: ${this.message}
}`
        }
    }
    var wj = {
        Echo: Oj
    };
    class Cj {
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
    var Aj = {
        LockEntity: Cj
    };
    class Ij {
        constructor() {}
        toString() {
            return "OK"
        }
    }
    var KS = {
        OK: Ij
    };
    class Rj {
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
    var VS = {
        NumberEntity: Rj
    };
    const {
        ArtifactEntity: Nj
    } = WS, {
        ClientWelcome: Lj,
        ClientConnected: $j,
        ClientDisconnected: Pj,
        ClientKicked: kj,
        ClientSend: Dj
    } = ap, {
        CountGroup: Mj
    } = op, {
        DoodleEntity: xj,
        DoodleLine: Uj,
        DoodleLineRemoved: Fj
    } = hp, {
        StackEntity: Bj,
        StackElement: Gj,
        StackElements: Wj
    } = jS, {
        DropEntity: jj
    } = HS, {
        Echo: Hj
    } = wj, {
        LockEntity: Kj
    } = Aj, {
        GCounter: Vj
    } = cp, {
        GetAudienceReply: Yj,
        RoomExit: qj,
        RoomLock: zj
    } = Wl, {
        Notification: Xj
    } = BS, {
        OK: Jj
    } = KS, {
        NumberEntity: Qj
    } = VS, {
        ObjectEcho: Zj,
        ObjectEntity: e3
    } = lp, {
        PNCounter: dy
    } = up, {
        Reply: t3
    } = GS, {
        TextEcho: n3,
        TextEntity: r3
    } = fp, {
        TextRing: i3
    } = dp, {
        createError: hy,
        ObservedError: s3
    } = Un;

    function Vd(e, t, n) {
        switch (e) {
            case "ok":
                return new Jj;
            case "echo":
                return new Hj({
                    message: t.message
                });
            case "lock":
                return new Kj({
                    key: t.key,
                    from: t.from
                });
            case "error":
                return hy({
                    code: t.code,
                    message: t.msg
                });
            case "error/observed":
                return new s3({
                    to: t.to,
                    error: hy({
                        code: t.error.code,
                        message: t.error.msg
                    })
                });
            case "string":
                return t;
            case "text":
                return new r3({
                    from: t.from,
                    key: t.key,
                    text: t.val,
                    version: t.version,
                    meta: n,
                    acl: t.acl
                });
            case "text/echo":
                return new n3({
                    message: t.message
                });
            case "object":
                return new e3({
                    from: t.from,
                    key: t.key,
                    val: t.val,
                    meta: n,
                    acl: t.acl
                });
            case "object/echo":
                return new Zj({
                    message: t.message
                });
            case "drop":
                return new jj({
                    key: t.key
                });
            case "artifact":
                return new Nj({
                    key: t.key,
                    artifactId: t.artifactId,
                    categoryId: t.categoryId,
                    rootId: t.rootId,
                    meta: n
                });
            case "client/connected":
                return new $j({
                    id: t.id,
                    userId: t.userId,
                    name: t.name,
                    role: t.role,
                    reconnect: t.reconnect
                });
            case "client/disconnected":
                return new Pj({
                    id: t.id,
                    role: t.role
                });
            case "client/kicked":
                return new kj({
                    id: t.id,
                    banned: t.banned,
                    reason: t.reason
                });
            case "client/send":
                return new Dj({
                    to: t.to,
                    from: t.from,
                    body: t.body,
                    userId: t.userID
                });
            case "client/welcome": {
                let r = new Lj({
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
                        s[o] = Vd(c[0], c[1], c[2])
                    }), r.entities = s
                }
                return r
            }
            case "doodle":
                return new xj({
                    key: t.key,
                    colors: t.val.colors,
                    lines: t.val.lines,
                    live: t.val.live,
                    maxPoints: t.val.maxPoints,
                    size: t.val.size,
                    weights: t.val.weights,
                    meta: n,
                    acl: t.acl
                });
            case "doodle/line":
                return new Uj({
                    key: t.key,
                    line: t.val
                });
            case "doodle/line/removed":
                return new Fj({
                    key: t.key,
                    index: t.index
                });
            case "stack":
                return new Bj({
                    key: t.key,
                    size: t.size,
                    from: t.from,
                    version: t.version,
                    meta: t.meta,
                    acl: t.acl
                });
            case "stack/element":
                return new Gj({
                    key: t.key,
                    val: t.val
                });
            case "stack/elements":
                return new Wj({
                    key: t.key,
                    vals: t.vals
                });
            case "number":
                return new Qj({
                    key: t.key,
                    val: t.val,
                    restrictions: t.restrictions,
                    from: t.from,
                    version: t.version,
                    meta: n,
                    acl: t.acl
                });
            case "room/exit":
                return new qj({
                    cause: t.cause
                });
            case "room/lock":
                return new zj;
            case "room/get-audience":
                return new Yj({
                    connections: t.connections
                });
            case "audience":
                return new dy({
                    key: e,
                    count: t[1]
                });
            case "audience/count-group":
                return new Mj({
                    key: t.key,
                    choices: t.choices,
                    meta: n
                });
            case "audience/text-ring":
                return new i3({
                    key: t.key,
                    elements: t.elements,
                    meta: n
                });
            case "audience/g-counter":
                return new Vj({
                    key: t.key,
                    count: t.count,
                    meta: n
                });
            case "audience/pn-counter":
                return new dy({
                    key: t.key,
                    count: t.count,
                    meta: n
                });
            default:
                return console.error(`failed to parse result of type ${e}: ${JSON.stringify(t,null,2)}`), t
        }
    }

    function a3(e) {
        let t = JSON.parse(e.data),
            n = t.opcode || t.type;
        return t.re ? new t3({
            pc: t.pc,
            re: t.re,
            opcode: n,
            result: Vd(n, t.result)
        }) : new Xj({
            pc: t.pc,
            opcode: n,
            result: Vd(n, t.result)
        })
    }
    var o3 = {
        parseResponseMessage: a3
    };
    const py = jW,
        c3 = eS,
        l3 = sp.exports,
        {
            CallError: u3
        } = Un,
        {
            ClientWelcome: f3
        } = ap,
        {
            CountGroup: d3
        } = op,
        {
            GCounter: h3
        } = cp,
        {
            Notification: gy
        } = BS,
        {
            ObjectEntity: xf
        } = lp,
        {
            PNCounter: p3
        } = up,
        {
            Reply: g3
        } = GS,
        {
            Request: m3
        } = dj,
        {
            TextEntity: Uf
        } = fp,
        {
            TextRing: v3
        } = dp,
        {
            parseResponseMessage: _3
        } = o3,
        {
            DoodleEntity: y3
        } = hp,
        {
            StackEntity: E3
        } = jS,
        b3 = 1e3 + Math.floor(Math.random() * 500),
        my = 13e3;
    class T3 extends l3 {
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
            const n = c3.stringify(t),
                r = this.role === "audience" || this.id > 1e7 ? `${this.scheme}://${this.host}/api/v2/audience/${this.code}/play?${n}` : `${this.scheme}://${this.host}/api/v2/rooms/${this.code}/play?${n}`;
            return new Promise((s, o) => {
                let c = !1,
                    u = !1,
                    f = g => {
                        s(g), c = !0
                    },
                    h = g => {
                        o(g), c = !0
                    };
                this.conn = new py(r, "ecast-v0"), this.conn.onmessage = g => {
                    this.debugLog(`recv <- ${JSON.stringify(JSON.parse(g.data),null,2)}`);
                    const y = _3(g);
                    if (y instanceof g3) this.onReply(y);
                    else if (y instanceof gy) {
                        if (y.result instanceof f3) u = !0, this.id = y.result.id, this.deviceId = y.result.deviceId, this.entities = y.result.entities, this.secret = y.result.secret, y.result.name && (this.name = y.result.name), f(y.result);
                        else if (!c) {
                            h(y.result);
                            return
                        }
                        this.onNotification(y)
                    } else console.error(`failed to parse response messsage: ${y}`)
                }, this.conn.onerror = g => {
                    c ? this.emit("socketError", g) : h(g)
                }, this.conn.onclose = g => {
                    this.debugLog("onclose", g.code), u && g.code === 1006 ? this.reconnect() : this.emit("socketClose", g)
                }, this.conn.onopen = g => {
                    this.emit("socketOpen", g)
                }
            })
        }
        sleep(t) {
            return new Promise(n => setTimeout(n, t))
        }
        debugLog(...t) {
            !this.debug || console.log(`%c[WSClient:${this.name}]`, "background-color:blue;color:white;", ...t)
        }
        async reconnect() {
            this.disconnect(), this.debugLog("Attempting to reconnect");
            let t = 1,
                n = b3;
            for (;;) try {
                this.emit("connection", {
                    status: "connecting",
                    attempt: t
                }), await this.connect(), this.debugLog("reconnected"), this.emit("connection", {
                    status: "connected"
                });
                return
            } catch (r) {
                if (this.debugLog("reconnect error", r), r.code === 1005 || r.code === 1e3) {
                    this.debugLog("unable to reconnect!", r), this.emit("socketClose", r);
                    return
                }
                if (n >= my) {
                    this.debugLog("reconnect failed!", r), this.emit("socketClose", r);
                    return
                }
                t += 1, this.debugLog("waiting", n), this.emit("connection", {
                    status: "waiting",
                    attempt: t
                }), await this.sleep(n), n = Math.min(my, n * 2)
            }
        }
        disconnect() {
            !this.conn || (this.conn.close(), this.conn.onmessage = null, this.conn.onerror = null, this.conn.onopen = null, this.conn.onclose = null, this.conn = null)
        }
        onReply(t) {
            const n = t.re,
                r = this.pending[n];
            if (!r) {
                const s = new gy(t);
                s.re = n, this.emit("notification", s);
                return
            }
            delete this.pending[n], t.result instanceof u3 ? r.reject(t.result) : r.resolve(t.result)
        }
        onNotification(t) {
            typeof t.result.whenReceived == "function" && t.result.whenReceived(this), this.emit("notification", t), this.emit(t.opcode, t.result)
        }
        send(t, n = {}) {
            if (!this.conn) throw new Error("No connection available");
            if (this.conn.readyState !== py.OPEN) throw new Error(`Socket not ready to send, readyState is ${this.conn.readyState}`);
            const r = ++this.seq,
                s = new m3({
                    seq: r,
                    opcode: t,
                    params: n
                }),
                o = new Promise((u, f) => {
                    this.pending[r] = {
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
        mail(t, n) {
            return this.send("client/send", {
                from: this.id,
                to: t,
                body: n
            })
        }
        kick(t, n = !1, r) {
            return this.send("client/kick", {
                id: t,
                ban: n,
                reason: r
            })
        }
        async drop(t) {
            const n = await this.send("drop", {
                key: t
            });
            return delete this.entities[t], n
        }
        echo(t) {
            return this.send("echo", {
                message: t
            })
        }
        async lock(t) {
            const n = await this.send("lock", {
                key: t
            });
            return this.entities[t].meta.locked = !0, n
        }
        async getNumber(t) {
            const n = await this.send("number/get", {
                key: t
            });
            return this.entities[t].val = n.val, this.entities[t].restrictions = n.restrictions, n
        }
        async updateNumber(t, n) {
            const r = await this.send("number/update", {
                key: t,
                val: n
            });
            return this.entities[t].val = n, r
        }
        async createObject(t, n, r) {
            const s = {
                key: t,
                val: n
            };
            r && (s.acl = r);
            const o = await this.send("object/create", s);
            return this.entities[t] = new xf({
                key: t,
                val: n,
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
        async setObject(t, n, r) {
            const s = {
                key: t,
                val: n
            };
            r && (s.acl = r);
            const o = await this.send("object/set", s);
            return this.entities[t] = new xf({
                key: t,
                val: n,
                meta: {
                    locked: !1
                }
            }), o
        }
        async updateObject(t, n) {
            const r = await this.send("object/update", {
                key: t,
                val: n
            });
            return this.entities[t] = new xf({
                key: t,
                val: n,
                meta: {
                    locked: !1
                }
            }), r
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
        async createText(t, n, r) {
            const s = {
                    key: t,
                    val: n
                },
                {
                    acl: o,
                    accept: c,
                    reject: u
                } = r;
            o && (s.acl = o), c && (s.accept = c), u && (s.reject = u);
            const f = await this.send("text/create", s);
            return this.entities[t] = new Uf({
                key: t,
                text: n,
                meta: {
                    locked: !1
                }
            }), f
        }
        async setText(t, n, r) {
            const s = {
                key: t,
                val: n
            };
            r && (s.acl = r);
            const o = await this.send("text/set", s);
            return this.entities[t] = new Uf({
                key: t,
                text: n,
                meta: {
                    locked: !1
                }
            }), o
        }
        async updateText(t, n) {
            const r = await this.send("text/update", {
                key: t,
                val: n
            });
            return this.entities[t] = new Uf({
                key: t,
                text: n,
                meta: {
                    locked: !1
                }
            }), r
        }
        async createDoodle(t, n) {
            let r = {
                key: t
            };
            const {
                acl: s,
                colors: o,
                live: c,
                maxPoints: u,
                size: f,
                weights: h
            } = n;
            s && (r.acl = s), o && (r.colors = o), r.live = c, u != null && (r.maxPoints = u), f && (r.size = f), h && (r.weights = h);
            const g = await this.send("doodle/create", r);
            return this.entities[t] = new y3({
                key: t,
                colors: o,
                lines: [],
                live: c,
                locked: !1,
                maxPoints: r.maxPoints || 0,
                size: f,
                weights: h,
                meta: {
                    locked: !1
                }
            }), g
        }
        async getDoodle(t) {
            return this.send("doodle/get", {
                key: t
            })
        }
        async strokeDoodle(t, n) {
            const {
                layer: r,
                color: s,
                weight: o,
                points: c
            } = n, u = await this.send("doodle/stroke", {
                key: t,
                layer: r,
                color: s,
                weight: o,
                points: c
            }), f = {
                layer: r,
                color: s,
                weight: o,
                points: c
            };
            return this.entities[t].lines.push(f), u
        }
        async undoDoodle(t) {
            const n = await this.send("doodle/undo", {
                key: t
            });
            return this.entities[t].lines.pop(), n
        }
        async createStack(t, n) {
            const r = {
                key: t
            };
            n && (r.acl = n);
            const s = await this.send("stack/create", r);
            return this.entities[t] = new E3({
                key: t,
                size: 0,
                meta: {
                    locked: !1
                }
            }), s
        }
        async pushStack(t, n) {
            return await this.send("stack/push", {
                key: t,
                val: n
            })
        }
        async bulkPushStack(t, n) {
            return await this.send("stack/bulkpush", {
                key: t,
                vals: n
            })
        }
        async peekStack(t, n) {
            return await this.send("stack/peek", {
                key: t,
                size: n
            })
        }
        async popStack(t) {
            return await this.send("stack/pop", {
                key: t
            })
        }
        async createCountGroup(t, n) {
            const r = await this.send("audience/count-group/create", {
                name: t,
                options: n
            });
            return this.entities[t] = new d3({
                key: t,
                choices: n,
                meta: {
                    locked: !1
                }
            }), r
        }
        incrementCountGroupCounter(t, n, r = 1) {
            return this.send("audience/count-group/increment", {
                name: t,
                vote: n,
                times: r
            })
        }
        getCountGroup(t) {
            return this.send("audience/count-group/get", {
                name: t
            })
        }
        async createGCounter(t, n) {
            const r = await this.send("audience/g-counter/create", {
                key: t,
                count: n
            });
            return this.entities[t] = new h3({
                key: t,
                count: n,
                meta: {
                    locked: !1
                }
            }), r
        }
        incrementGCounter(t, n) {
            return this.send("audience/g-counter/increment", {
                key: t,
                times: n
            })
        }
        getGCounter(t) {
            return this.send("audience/g-counter/get", {
                key: t
            })
        }
        async createPNCounter(t, n) {
            const r = await this.send("audience/pn-counter/create", {
                key: t,
                count: n
            });
            return this.entities[t] = new p3({
                key: t,
                count: n,
                meta: {
                    locked: !1
                }
            }), r
        }
        incrementPNCounter(t, n) {
            return this.send("audience/pn-counter/increment", {
                key: t,
                times: n
            })
        }
        decrementPNCounter(t, n) {
            return this.send("audience/pn-counter/decrement", {
                key: t,
                times: n
            })
        }
        getPNCounter(t) {
            return this.send("audience/pn-counter/get", {
                key: t
            })
        }
        async createTextRing(t, n) {
            const r = {
                    key: t
                },
                {
                    limit: s,
                    accept: o,
                    reject: c
                } = n;
            s && (r.limit = s), o && (r.accept = o), c && (r.reject = c);
            const u = await this.send("audience/text-ring/create", r);
            return this.entities[t] = new v3({
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
        pushTextRing(t, n) {
            return this.send("audience/text-ring/push", {
                name: t,
                text: n
            })
        }
    }
    var S3 = {
        WSClient: T3
    };
    const {
        APIClient: O3
    } = WW, {
        WSClient: w3
    } = S3, {
        CreateRoomReply: C3,
        GetRoomReply: A3
    } = Wl, {
        ClientWelcome: I3,
        ClientDisconnected: R3
    } = ap, {
        ArtifactEntity: N3
    } = WS, {
        GCounter: L3
    } = cp, {
        NumberEntity: $3
    } = VS, {
        TextEntity: P3
    } = fp, {
        DoodleEntity: k3
    } = hp, {
        ObjectEntity: D3
    } = lp, {
        CountGroup: M3
    } = op, {
        DropEntity: x3
    } = HS, {
        OK: U3
    } = KS, {
        RoomExit: F3
    } = Wl, {
        TextRing: B3
    } = dp, {
        PNCounter: G3
    } = up;
    var pp = {
        APIClient: O3,
        WSClient: w3,
        ClientWelcome: I3,
        CreateRoomReply: C3,
        DropEntity: x3,
        GetRoomReply: A3,
        ClientDisconnected: R3,
        RoomExit: F3,
        OK: U3,
        ArtifactEntity: N3,
        DoodleEntity: k3,
        NumberEntity: $3,
        CountGroup: M3,
        GCounter: L3,
        ObjectEntity: D3,
        PNCounter: G3,
        TextEntity: P3,
        TextRing: B3
    };
    const W3 = [{
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
        Kl = e => W3.find(t => t.tag === e || t.categoryId === e);

    function j3(...e) {
        console.log(...e)
    }

    function H3(e) {
        throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
    }
    var vy = {
        exports: {}
    };
    (function(e, t) {
        (function(n, r) {
            r(t)
        })(Ft, function(n) {
            var r = typeof window < "u" ? window : typeof Ft < "u" ? Ft : typeof self < "u" ? self : {},
                s = function(T, $) {
                    if ($ = $.split(":")[0], T = +T, !T) return !1;
                    switch ($) {
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
                for (var T = /([^=?#&]+)=?([^&]*)/g, $ = {}, S; S = T.exec(w);) {
                    var P = u(S[1]),
                        ee = u(S[2]);
                    P === null || ee === null || P in $ || ($[P] = ee)
                }
                return $
            }

            function g(w, T) {
                T = T || "";
                var $ = [],
                    S, P;
                typeof T != "string" && (T = "?");
                for (P in w)
                    if (o.call(w, P)) {
                        if (S = w[P], !S && (S === null || S === c || isNaN(S)) && (S = ""), P = f(P), S = f(S), P === null || S === null) continue;
                        $.push(P + "=" + S)
                    } return $.length ? T + $.join("&") : ""
            }
            var y = g,
                b = h,
                C = {
                    stringify: y,
                    parse: b
                },
                R = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
                M = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,
                W = "[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]",
                I = new RegExp("^" + W + "+");

            function K(w) {
                return (w || "").toString().replace(I, "")
            }
            var q = [
                    ["#", "hash"],
                    ["?", "query"],
                    function(T, $) {
                        return se($.protocol) ? T.replace(/\\/g, "/") : T
                    },
                    ["/", "pathname"],
                    ["@", "auth", 1],
                    [NaN, "host", void 0, 1, 1],
                    [/:(\d+)$/, "port", void 0, 1],
                    [NaN, "hostname", void 0, 1, 1]
                ],
                j = {
                    hash: 1,
                    query: 1
                };

            function G(w) {
                var T;
                typeof window < "u" ? T = window : typeof r < "u" ? T = r : typeof self < "u" ? T = self : T = {};
                var $ = T.location || {};
                w = w || $;
                var S = {},
                    P = typeof w,
                    ee;
                if (w.protocol === "blob:") S = new ue(unescape(w.pathname), {});
                else if (P === "string") {
                    S = new ue(w, {});
                    for (ee in j) delete S[ee]
                } else if (P === "object") {
                    for (ee in w) ee in j || (S[ee] = w[ee]);
                    S.slashes === void 0 && (S.slashes = R.test(w.href))
                }
                return S
            }

            function se(w) {
                return w === "file:" || w === "ftp:" || w === "http:" || w === "https:" || w === "ws:" || w === "wss:"
            }

            function ce(w, T) {
                w = K(w), T = T || {};
                var $ = M.exec(w),
                    S = $[1] ? $[1].toLowerCase() : "",
                    P = !!$[2],
                    ee = !!$[3],
                    ie = 0,
                    ye;
                return P ? ee ? (ye = $[2] + $[3] + $[4], ie = $[2].length + $[3].length) : (ye = $[2] + $[4], ie = $[2].length) : ee ? (ye = $[3] + $[4], ie = $[3].length) : ye = $[4], S === "file:" ? ie >= 2 && (ye = ye.slice(2)) : se(S) ? ye = $[4] : S ? P && (ye = ye.slice(2)) : ie >= 2 && se(T.protocol) && (ye = $[4]), {
                    protocol: S,
                    slashes: P || se(S),
                    slashesCount: ie,
                    rest: ye
                }
            }

            function le(w, T) {
                if (w === "") return T;
                for (var $ = (T || "/").split("/").slice(0, -1).concat(w.split("/")), S = $.length, P = $[S - 1], ee = !1, ie = 0; S--;) $[S] === "." ? $.splice(S, 1) : $[S] === ".." ? ($.splice(S, 1), ie++) : ie && (S === 0 && (ee = !0), $.splice(S, 1), ie--);
                return ee && $.unshift(""), (P === "." || P === "..") && $.push(""), $.join("/")
            }

            function ue(w, T, $) {
                if (w = K(w), !(this instanceof ue)) return new ue(w, T, $);
                var S, P, ee, ie, ye, Te, ht = q.slice(),
                    ln = typeof T,
                    Ue = this,
                    Sa = 0;
                for (ln !== "object" && ln !== "string" && ($ = T, T = null), $ && typeof $ != "function" && ($ = C.parse), T = G(T), P = ce(w || "", T), S = !P.protocol && !P.slashes, Ue.slashes = P.slashes || S && T.slashes, Ue.protocol = P.protocol || T.protocol || "", w = P.rest, (Ue.protocol === "file:" || !P.slashes && (P.protocol || P.slashesCount < 2 || !se(Ue.protocol))) && (ht[3] = [/(.*)/, "pathname"]); Sa < ht.length; Sa++) {
                    if (ie = ht[Sa], typeof ie == "function") {
                        w = ie(w, Ue);
                        continue
                    }
                    ee = ie[0], Te = ie[1], ee !== ee ? Ue[Te] = w : typeof ee == "string" ? ~(ye = w.indexOf(ee)) && (typeof ie[2] == "number" ? (Ue[Te] = w.slice(0, ye), w = w.slice(ye + ie[2])) : (Ue[Te] = w.slice(ye), w = w.slice(0, ye))) : (ye = ee.exec(w)) && (Ue[Te] = ye[1], w = w.slice(0, ye.index)), Ue[Te] = Ue[Te] || S && ie[3] && T[Te] || "", ie[4] && (Ue[Te] = Ue[Te].toLowerCase())
                }
                $ && (Ue.query = $(Ue.query)), S && T.slashes && Ue.pathname.charAt(0) !== "/" && (Ue.pathname !== "" || T.pathname !== "") && (Ue.pathname = le(Ue.pathname, T.pathname)), Ue.pathname.charAt(0) !== "/" && se(Ue.protocol) && (Ue.pathname = "/" + Ue.pathname), s(Ue.port, Ue.protocol) || (Ue.host = Ue.hostname, Ue.port = ""), Ue.username = Ue.password = "", Ue.auth && (ie = Ue.auth.split(":"), Ue.username = ie[0] || "", Ue.password = ie[1] || ""), Ue.origin = Ue.protocol !== "file:" && se(Ue.protocol) && Ue.host ? Ue.protocol + "//" + Ue.host : "null", Ue.href = Ue.toString()
            }

            function Ie(w, T, $) {
                var S = this;
                switch (w) {
                    case "query":
                        typeof T == "string" && T.length && (T = ($ || C.parse)(T)), S[w] = T;
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
                        S.protocol = T.toLowerCase(), S.slashes = !$;
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
                for (var ee = 0; ee < q.length; ee++) {
                    var ie = q[ee];
                    ie[4] && (S[ie[1]] = S[ie[1]].toLowerCase())
                }
                return S.origin = S.protocol !== "file:" && se(S.protocol) && S.host ? S.protocol + "//" + S.host : "null", S.href = S.toString(), S
            }

            function be(w) {
                (!w || typeof w != "function") && (w = C.stringify);
                var T, $ = this,
                    S = $.protocol;
                S && S.charAt(S.length - 1) !== ":" && (S += ":");
                var P = S + ($.slashes || se($.protocol) ? "//" : "");
                return $.username && (P += $.username, $.password && (P += ":" + $.password), P += "@"), P += $.host + $.pathname, T = typeof $.query == "object" ? w($.query) : $.query, T && (P += T.charAt(0) !== "?" ? "?" + T : T), $.hash && (P += $.hash), P
            }
            ue.prototype = {
                set: Ie,
                toString: be
            }, ue.extractProtocol = ce, ue.location = G, ue.trimLeft = K, ue.qs = C;
            var fe = ue;

            function Oe(w, T) {
                setTimeout(function($) {
                    return w.call($)
                }, 4, T)
            }

            function F(w, T) {
                typeof process < "u" && console[w].call(null, T)
            }

            function re(w, T) {
                w === void 0 && (w = []);
                var $ = [];
                return w.forEach(function(S) {
                    T(S) || $.push(S)
                }), $
            }

            function de(w, T) {
                w === void 0 && (w = []);
                var $ = [];
                return w.forEach(function(S) {
                    T(S) && $.push(S)
                }), $
            }
            var _e = function() {
                this.listeners = {}
            };
            _e.prototype.addEventListener = function(T, $) {
                typeof $ == "function" && (Array.isArray(this.listeners[T]) || (this.listeners[T] = []), de(this.listeners[T], function(S) {
                    return S === $
                }).length === 0 && this.listeners[T].push($))
            }, _e.prototype.removeEventListener = function(T, $) {
                var S = this.listeners[T];
                this.listeners[T] = re(S, function(P) {
                    return P === $
                })
            }, _e.prototype.dispatchEvent = function(T) {
                for (var $ = this, S = [], P = arguments.length - 1; P-- > 0;) S[P] = arguments[P + 1];
                var ee = T.type,
                    ie = this.listeners[ee];
                return Array.isArray(ie) ? (ie.forEach(function(ye) {
                    S.length > 0 ? ye.apply($, S) : ye.call($, T)
                }), !0) : !1
            };

            function me(w) {
                var T = w.indexOf("?");
                return T >= 0 ? w.slice(0, T) : w
            }
            var Se = function() {
                this.urlMap = {}
            };
            Se.prototype.attachWebSocket = function(T, $) {
                var S = me($),
                    P = this.urlMap[S];
                if (P && P.server && P.websockets.indexOf(T) === -1) return P.websockets.push(T), P.server
            }, Se.prototype.addMembershipToRoom = function(T, $) {
                var S = this.urlMap[me(T.url)];
                S && S.server && S.websockets.indexOf(T) !== -1 && (S.roomMemberships[$] || (S.roomMemberships[$] = []), S.roomMemberships[$].push(T))
            }, Se.prototype.attachServer = function(T, $) {
                var S = me($),
                    P = this.urlMap[S];
                if (!P) return this.urlMap[S] = {
                    server: T,
                    websockets: [],
                    roomMemberships: {}
                }, T
            }, Se.prototype.serverLookup = function(T) {
                var $ = me(T),
                    S = this.urlMap[$];
                if (S) return S.server
            }, Se.prototype.websocketsLookup = function(T, $, S) {
                var P = me(T),
                    ee, ie = this.urlMap[P];
                if (ee = ie ? ie.websockets : [], $) {
                    var ye = ie.roomMemberships[$];
                    ee = ye || []
                }
                return S ? ee.filter(function(Te) {
                    return Te !== S
                }) : ee
            }, Se.prototype.removeServer = function(T) {
                delete this.urlMap[me(T)]
            }, Se.prototype.removeWebSocket = function(T, $) {
                var S = me($),
                    P = this.urlMap[S];
                P && (P.websockets = re(P.websockets, function(ee) {
                    return ee === T
                }))
            }, Se.prototype.removeMembershipFromRoom = function(T, $) {
                var S = this.urlMap[me(T.url)],
                    P = S.roomMemberships[$];
                S && P !== null && (S.roomMemberships[$] = re(P, function(ee) {
                    return ee === T
                }))
            };
            var Me = new Se,
                Fe = {
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
                Je = {
                    CONSTRUCTOR_ERROR: "Failed to construct 'WebSocket':",
                    CLOSE_ERROR: "Failed to execute 'close' on 'WebSocket':",
                    EVENT: {
                        CONSTRUCT: "Failed to construct 'Event':",
                        MESSAGE: "Failed to construct 'MessageEvent':",
                        CLOSE: "Failed to construct 'CloseEvent':"
                    }
                },
                Ot = function() {};
            Ot.prototype.stopPropagation = function() {}, Ot.prototype.stopImmediatePropagation = function() {}, Ot.prototype.initEvent = function(T, $, S) {
                T === void 0 && (T = "undefined"), $ === void 0 && ($ = !1), S === void 0 && (S = !1), this.type = "" + T, this.bubbles = Boolean($), this.cancelable = Boolean(S)
            };
            var jt = function(w) {
                    function T($, S) {
                        if (S === void 0 && (S = {}), w.call(this), !$) throw new TypeError(Je.EVENT_ERROR + " 1 argument required, but only 0 present.");
                        if (typeof S != "object") throw new TypeError(Je.EVENT_ERROR + " parameter 2 ('eventInitDict') is not an object.");
                        var P = S.bubbles,
                            ee = S.cancelable;
                        this.type = "" + $, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = ee ? Boolean(ee) : !1, this.cancelBubble = !1, this.bubbles = P ? Boolean(P) : !1
                    }
                    return w && (T.__proto__ = w), T.prototype = Object.create(w && w.prototype), T.prototype.constructor = T, T
                }(Ot),
                wt = function(w) {
                    function T($, S) {
                        if (S === void 0 && (S = {}), w.call(this), !$) throw new TypeError(Je.EVENT.MESSAGE + " 1 argument required, but only 0 present.");
                        if (typeof S != "object") throw new TypeError(Je.EVENT.MESSAGE + " parameter 2 ('eventInitDict') is not an object");
                        var P = S.bubbles,
                            ee = S.cancelable,
                            ie = S.data,
                            ye = S.origin,
                            Te = S.lastEventId,
                            ht = S.ports;
                        this.type = "" + $, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = ee ? Boolean(ee) : !1, this.canncelBubble = !1, this.bubbles = P ? Boolean(P) : !1, this.origin = "" + ye, this.ports = typeof ht > "u" ? null : ht, this.data = typeof ie > "u" ? null : ie, this.lastEventId = "" + (Te || "")
                    }
                    return w && (T.__proto__ = w), T.prototype = Object.create(w && w.prototype), T.prototype.constructor = T, T
                }(Ot),
                zt = function(w) {
                    function T($, S) {
                        if (S === void 0 && (S = {}), w.call(this), !$) throw new TypeError(Je.EVENT.CLOSE + " 1 argument required, but only 0 present.");
                        if (typeof S != "object") throw new TypeError(Je.EVENT.CLOSE + " parameter 2 ('eventInitDict') is not an object");
                        var P = S.bubbles,
                            ee = S.cancelable,
                            ie = S.code,
                            ye = S.reason,
                            Te = S.wasClean;
                        this.type = "" + $, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = ee ? Boolean(ee) : !1, this.cancelBubble = !1, this.bubbles = P ? Boolean(P) : !1, this.code = typeof ie == "number" ? parseInt(ie, 10) : 0, this.reason = "" + (ye || ""), this.wasClean = Te ? Boolean(Te) : !1
                    }
                    return w && (T.__proto__ = w), T.prototype = Object.create(w && w.prototype), T.prototype.constructor = T, T
                }(Ot);

            function it(w) {
                var T = w.type,
                    $ = w.target,
                    S = new jt(T);
                return $ && (S.target = $, S.srcElement = $, S.currentTarget = $), S
            }

            function mt(w) {
                var T = w.type,
                    $ = w.origin,
                    S = w.data,
                    P = w.target,
                    ee = new wt(T, {
                        data: S,
                        origin: $
                    });
                return P && (ee.target = P, ee.srcElement = P, ee.currentTarget = P), ee
            }

            function st(w) {
                var T = w.code,
                    $ = w.reason,
                    S = w.type,
                    P = w.target,
                    ee = w.wasClean;
                ee || (ee = T === Fe.CLOSE_NORMAL || T === Fe.CLOSE_NO_STATUS);
                var ie = new zt(S, {
                    code: T,
                    reason: $,
                    wasClean: ee
                });
                return P && (ie.target = P, ie.srcElement = P, ie.currentTarget = P), ie
            }

            function $t(w, T, $) {
                w.readyState = k.CLOSING;
                var S = Me.serverLookup(w.url),
                    P = st({
                        type: "close",
                        target: w.target,
                        code: T,
                        reason: $
                    }),
                    ee = st({
                        type: "server::close",
                        target: w,
                        code: T,
                        reason: $
                    });
                Oe(function() {
                    Me.removeWebSocket(w, w.url), w.readyState = k.CLOSED, w.dispatchEvent(P), w.dispatchEvent(ee), S && S.dispatchEvent(P, S)
                }, w)
            }

            function Dt(w, T, $) {
                w.readyState = k.CLOSING;
                var S = Me.serverLookup(w.url),
                    P = st({
                        type: "close",
                        target: w.target,
                        code: T,
                        reason: $,
                        wasClean: !1
                    }),
                    ee = st({
                        type: "server::close",
                        target: w,
                        code: T,
                        reason: $,
                        wasClean: !1
                    }),
                    ie = it({
                        type: "error",
                        target: w.target
                    });
                Oe(function() {
                    Me.removeWebSocket(w, w.url), w.readyState = k.CLOSED, w.dispatchEvent(ie), w.dispatchEvent(P), w.dispatchEvent(ee), S && S.dispatchEvent(P, S)
                }, w)
            }

            function Nt(w) {
                return Object.prototype.toString.call(w) !== "[object Blob]" && !(w instanceof ArrayBuffer) && (w = String(w)), w
            }
            var m = new WeakMap;

            function p(w) {
                if (m.has(w)) return m.get(w);
                var T = new Proxy(w, {
                    get: function(S, P) {
                        return P === "close" ? function(ie) {
                            ie === void 0 && (ie = {});
                            var ye = ie.code || Fe.CLOSE_NORMAL,
                                Te = ie.reason || "";
                            $t(T, ye, Te)
                        } : P === "send" ? function(ie) {
                            ie = Nt(ie), w.dispatchEvent(mt({
                                type: "message",
                                data: ie,
                                origin: this.url,
                                target: w
                            }))
                        } : P === "on" ? function(ie, ye) {
                            w.addEventListener("server::" + ie, ye)
                        } : P === "target" ? w : S[P]
                    }
                });
                return m.set(w, T), T
            }

            function O(w) {
                var T = encodeURIComponent(w).match(/%[89ABab]/g);
                return w.length + (T ? T.length : 0)
            }

            function x(w) {
                var T = new fe(w),
                    $ = T.pathname,
                    S = T.protocol,
                    P = T.hash;
                if (!w) throw new TypeError(Je.CONSTRUCTOR_ERROR + " 1 argument required, but only 0 present.");
                if ($ || (T.pathname = "/"), S === "") throw new SyntaxError(Je.CONSTRUCTOR_ERROR + " The URL '" + T.toString() + "' is invalid.");
                if (S !== "ws:" && S !== "wss:") throw new SyntaxError(Je.CONSTRUCTOR_ERROR + " The URL's scheme must be either 'ws' or 'wss'. '" + S + "' is not allowed.");
                if (P !== "") throw new SyntaxError(Je.CONSTRUCTOR_ERROR + " The URL contains a fragment identifier ('" + P + "'). Fragment identifiers are not allowed in WebSocket URLs.");
                return T.toString()
            }

            function B(w) {
                if (w === void 0 && (w = []), !Array.isArray(w) && typeof w != "string") throw new SyntaxError(Je.CONSTRUCTOR_ERROR + " The subprotocol '" + w.toString() + "' is invalid.");
                typeof w == "string" && (w = [w]);
                var T = w.map(function(S) {
                        return {
                            count: 1,
                            protocol: S
                        }
                    }).reduce(function(S, P) {
                        return S[P.protocol] = (S[P.protocol] || 0) + P.count, S
                    }, {}),
                    $ = Object.keys(T).filter(function(S) {
                        return T[S] > 1
                    });
                if ($.length > 0) throw new SyntaxError(Je.CONSTRUCTOR_ERROR + " The subprotocol '" + $[0] + "' is duplicated.");
                return w
            }
            var k = function(w) {
                function T(S, P) {
                    w.call(this), this._onopen = null, this._onmessage = null, this._onerror = null, this._onclose = null, this.url = x(S), P = B(P), this.protocol = P[0] || "", this.binaryType = "blob", this.readyState = T.CONNECTING;
                    var ee = p(this),
                        ie = Me.attachWebSocket(ee, this.url);
                    Oe(function() {
                        if (ie)
                            if (ie.options.verifyClient && typeof ie.options.verifyClient == "function" && !ie.options.verifyClient()) this.readyState = T.CLOSED, F("error", "WebSocket connection to '" + this.url + "' failed: HTTP Authentication failed; no valid credentials available"), Me.removeWebSocket(ee, this.url), this.dispatchEvent(it({
                                type: "error",
                                target: this
                            })), this.dispatchEvent(st({
                                type: "close",
                                target: this,
                                code: Fe.CLOSE_NORMAL
                            }));
                            else {
                                if (ie.options.selectProtocol && typeof ie.options.selectProtocol == "function") {
                                    var Te = ie.options.selectProtocol(P),
                                        ht = Te !== "",
                                        ln = P.indexOf(Te) !== -1;
                                    if (ht && !ln) {
                                        this.readyState = T.CLOSED, F("error", "WebSocket connection to '" + this.url + "' failed: Invalid Sub-Protocol"), Me.removeWebSocket(ee, this.url), this.dispatchEvent(it({
                                            type: "error",
                                            target: this
                                        })), this.dispatchEvent(st({
                                            type: "close",
                                            target: this,
                                            code: Fe.CLOSE_NORMAL
                                        }));
                                        return
                                    }
                                    this.protocol = Te
                                }
                                this.readyState = T.OPEN, this.dispatchEvent(it({
                                    type: "open",
                                    target: this
                                })), ie.dispatchEvent(it({
                                    type: "connection"
                                }), ee)
                            }
                        else this.readyState = T.CLOSED, this.dispatchEvent(it({
                            type: "error",
                            target: this
                        })), this.dispatchEvent(st({
                            type: "close",
                            target: this,
                            code: Fe.CLOSE_NORMAL
                        })), F("error", "WebSocket connection to '" + this.url + "' failed")
                    }, this)
                }
                w && (T.__proto__ = w), T.prototype = Object.create(w && w.prototype), T.prototype.constructor = T;
                var $ = {
                    onopen: {},
                    onmessage: {},
                    onclose: {},
                    onerror: {}
                };
                return $.onopen.get = function() {
                    return this._onopen
                }, $.onmessage.get = function() {
                    return this._onmessage
                }, $.onclose.get = function() {
                    return this._onclose
                }, $.onerror.get = function() {
                    return this._onerror
                }, $.onopen.set = function(S) {
                    this.removeEventListener("open", this._onopen), this._onopen = S, this.addEventListener("open", S)
                }, $.onmessage.set = function(S) {
                    this.removeEventListener("message", this._onmessage), this._onmessage = S, this.addEventListener("message", S)
                }, $.onclose.set = function(S) {
                    this.removeEventListener("close", this._onclose), this._onclose = S, this.addEventListener("close", S)
                }, $.onerror.set = function(S) {
                    this.removeEventListener("error", this._onerror), this._onerror = S, this.addEventListener("error", S)
                }, T.prototype.send = function(P) {
                    var ee = this;
                    if (this.readyState === T.CLOSING || this.readyState === T.CLOSED) throw new Error("WebSocket is already in CLOSING or CLOSED state");
                    var ie = mt({
                            type: "server::message",
                            origin: this.url,
                            data: Nt(P)
                        }),
                        ye = Me.serverLookup(this.url);
                    ye && Oe(function() {
                        ee.dispatchEvent(ie, P)
                    }, ye)
                }, T.prototype.close = function(P, ee) {
                    if (P !== void 0 && (typeof P != "number" || P !== 1e3 && (P < 3e3 || P > 4999))) throw new TypeError(Je.CLOSE_ERROR + " The code must be either 1000, or between 3000 and 4999. " + P + " is neither.");
                    if (ee !== void 0) {
                        var ie = O(ee);
                        if (ie > 123) throw new SyntaxError(Je.CLOSE_ERROR + " The message must not be greater than 123 bytes.")
                    }
                    if (!(this.readyState === T.CLOSING || this.readyState === T.CLOSED)) {
                        var ye = p(this);
                        this.readyState === T.CONNECTING ? Dt(ye, P || Fe.CLOSE_ABNORMAL, ee) : $t(ye, P || Fe.CLOSE_NO_STATUS, ee)
                    }
                }, Object.defineProperties(T.prototype, $), T
            }(_e);
            k.CONNECTING = 0, k.prototype.CONNECTING = k.CONNECTING, k.OPEN = 1, k.prototype.OPEN = k.OPEN, k.CLOSING = 2, k.prototype.CLOSING = k.CLOSING, k.CLOSED = 3, k.prototype.CLOSED = k.CLOSED;
            var ae = function(w) {
                return w.reduce(function(T, $) {
                    return T.indexOf($) > -1 ? T : T.concat($)
                }, [])
            };

            function Z() {
                return typeof window < "u" ? window : typeof process == "object" && typeof H3 == "function" && typeof Ft == "object" ? Ft : this
            }
            var X = {
                    mock: !0,
                    verifyClient: null,
                    selectProtocol: null
                },
                N = function(w) {
                    function T($, S) {
                        S === void 0 && (S = X), w.call(this);
                        var P = new fe($);
                        P.pathname || (P.pathname = "/"), this.url = P.toString(), this.originalWebSocket = null;
                        var ee = Me.attachServer(this, this.url);
                        if (!ee) throw this.dispatchEvent(it({
                            type: "error"
                        })), new Error("A mock server is already listening on this url");
                        this.options = Object.assign({}, X, S), this.options.mock && this.mockWebsocket()
                    }
                    return w && (T.__proto__ = w), T.prototype = Object.create(w && w.prototype), T.prototype.constructor = T, T.prototype.mockWebsocket = function() {
                        var S = Z();
                        this.originalWebSocket = S.WebSocket, S.WebSocket = k
                    }, T.prototype.restoreWebsocket = function() {
                        var S = Z();
                        this.originalWebSocket !== null && (S.WebSocket = this.originalWebSocket), this.originalWebSocket = null
                    }, T.prototype.stop = function(S) {
                        S === void 0 && (S = function() {}), this.options.mock && this.restoreWebsocket(), Me.removeServer(this.url), typeof S == "function" && S()
                    }, T.prototype.on = function(S, P) {
                        this.addEventListener(S, P)
                    }, T.prototype.close = function(S) {
                        S === void 0 && (S = {});
                        var P = S.code,
                            ee = S.reason,
                            ie = S.wasClean,
                            ye = Me.websocketsLookup(this.url);
                        Me.removeServer(this.url), ye.forEach(function(Te) {
                            Te.readyState = k.CLOSED, Te.dispatchEvent(st({
                                type: "close",
                                target: Te.target,
                                code: P || Fe.CLOSE_NORMAL,
                                reason: ee || "",
                                wasClean: ie
                            }))
                        }), this.dispatchEvent(st({
                            type: "close"
                        }), this)
                    }, T.prototype.emit = function(S, P, ee) {
                        var ie = this;
                        ee === void 0 && (ee = {});
                        var ye = ee.websockets;
                        ye || (ye = Me.websocketsLookup(this.url)), typeof ee != "object" || arguments.length > 3 ? (P = Array.prototype.slice.call(arguments, 1, arguments.length), P = P.map(function(Te) {
                            return Nt(Te)
                        })) : P = Nt(P), ye.forEach(function(Te) {
                            Array.isArray(P) ? Te.dispatchEvent.apply(Te, [mt({
                                type: S,
                                data: P,
                                origin: ie.url,
                                target: Te.target
                            })].concat(P)) : Te.dispatchEvent(mt({
                                type: S,
                                data: P,
                                origin: ie.url,
                                target: Te.target
                            }))
                        })
                    }, T.prototype.clients = function() {
                        return Me.websocketsLookup(this.url)
                    }, T.prototype.to = function(S, P, ee) {
                        var ie = this;
                        ee === void 0 && (ee = []);
                        var ye = this,
                            Te = ae(ee.concat(Me.websocketsLookup(this.url, S, P)));
                        return {
                            to: function(ht, ln) {
                                return ie.to.call(ie, ht, ln, Te)
                            },
                            emit: function(ln, Ue) {
                                ye.emit(ln, Ue, {
                                    websockets: Te
                                })
                            }
                        }
                    }, T.prototype.in = function() {
                        for (var S = [], P = arguments.length; P--;) S[P] = arguments[P];
                        return this.to.apply(null, S)
                    }, T.prototype.simulate = function(S) {
                        var P = Me.websocketsLookup(this.url);
                        S === "error" && P.forEach(function(ee) {
                            ee.readyState = k.CLOSED, ee.dispatchEvent(it({
                                type: "error"
                            }))
                        })
                    }, T
                }(_e);
            N.of = function(T) {
                return new N(T)
            };
            var H = function(w) {
                function T(S, P) {
                    var ee = this;
                    S === void 0 && (S = "socket.io"), P === void 0 && (P = ""), w.call(this), this.binaryType = "blob";
                    var ie = new fe(S);
                    ie.pathname || (ie.pathname = "/"), this.url = ie.toString(), this.readyState = T.CONNECTING, this.protocol = "", this.target = this, typeof P == "string" || typeof P == "object" && P !== null ? this.protocol = P : Array.isArray(P) && P.length > 0 && (this.protocol = P[0]);
                    var ye = Me.attachWebSocket(this, this.url);
                    Oe(function() {
                        ye ? (this.readyState = T.OPEN, ye.dispatchEvent(it({
                            type: "connection"
                        }), ye, this), ye.dispatchEvent(it({
                            type: "connect"
                        }), ye, this), this.dispatchEvent(it({
                            type: "connect",
                            target: this
                        }))) : (this.readyState = T.CLOSED, this.dispatchEvent(it({
                            type: "error",
                            target: this
                        })), this.dispatchEvent(st({
                            type: "close",
                            target: this,
                            code: Fe.CLOSE_NORMAL
                        })), F("error", "Socket.io connection to '" + this.url + "' failed"))
                    }, this), this.addEventListener("close", function(Te) {
                        ee.dispatchEvent(st({
                            type: "disconnect",
                            target: Te.target,
                            code: Te.code
                        }))
                    })
                }
                w && (T.__proto__ = w), T.prototype = Object.create(w && w.prototype), T.prototype.constructor = T;
                var $ = {
                    broadcast: {}
                };
                return T.prototype.close = function() {
                    if (this.readyState === T.OPEN) {
                        var P = Me.serverLookup(this.url);
                        return Me.removeWebSocket(this, this.url), this.readyState = T.CLOSED, this.dispatchEvent(st({
                            type: "close",
                            target: this,
                            code: Fe.CLOSE_NORMAL
                        })), P && P.dispatchEvent(st({
                            type: "disconnect",
                            target: this,
                            code: Fe.CLOSE_NORMAL
                        }), P), this
                    }
                }, T.prototype.disconnect = function() {
                    return this.close()
                }, T.prototype.emit = function(P) {
                    for (var ee = [], ie = arguments.length - 1; ie-- > 0;) ee[ie] = arguments[ie + 1];
                    if (this.readyState !== T.OPEN) throw new Error("SocketIO is already in CLOSING or CLOSED state");
                    var ye = mt({
                            type: P,
                            origin: this.url,
                            data: ee
                        }),
                        Te = Me.serverLookup(this.url);
                    return Te && Te.dispatchEvent.apply(Te, [ye].concat(ee)), this
                }, T.prototype.send = function(P) {
                    return this.emit("message", P), this
                }, $.broadcast.get = function() {
                    if (this.readyState !== T.OPEN) throw new Error("SocketIO is already in CLOSING or CLOSED state");
                    var S = this,
                        P = Me.serverLookup(this.url);
                    if (!P) throw new Error("SocketIO can not find a server at the specified URL (" + this.url + ")");
                    return {
                        emit: function(ie, ye) {
                            return P.emit(ie, ye, {
                                websockets: Me.websocketsLookup(S.url, null, S)
                            }), S
                        },
                        to: function(ie) {
                            return P.to(ie, S)
                        },
                        in: function(ie) {
                            return P.in(ie, S)
                        }
                    }
                }, T.prototype.on = function(P, ee) {
                    return this.addEventListener(P, ee), this
                }, T.prototype.off = function(P, ee) {
                    this.removeEventListener(P, ee)
                }, T.prototype.hasListeners = function(P) {
                    var ee = this.listeners[P];
                    return Array.isArray(ee) ? !!ee.length : !1
                }, T.prototype.join = function(P) {
                    Me.addMembershipToRoom(this, P)
                }, T.prototype.leave = function(P) {
                    Me.removeMembershipFromRoom(this, P)
                }, T.prototype.to = function(P) {
                    return this.broadcast.to(P)
                }, T.prototype.in = function() {
                    return this.to.apply(null, arguments)
                }, T.prototype.dispatchEvent = function(P) {
                    for (var ee = this, ie = [], ye = arguments.length - 1; ye-- > 0;) ie[ye] = arguments[ye + 1];
                    var Te = P.type,
                        ht = this.listeners[Te];
                    if (!Array.isArray(ht)) return !1;
                    ht.forEach(function(ln) {
                        ie.length > 0 ? ln.apply(ee, ie) : ln.call(ee, P.data ? P.data : P)
                    })
                }, Object.defineProperties(T.prototype, $), T
            }(_e);
            H.CONNECTING = 0, H.OPEN = 1, H.CLOSING = 2, H.CLOSED = 3;
            var he = function(T, $) {
                return new H(T, $)
            };
            he.connect = function(T, $) {
                return he(T, $)
            };
            var pe = N,
                Ne = k,
                xe = he;
            n.Server = pe, n.WebSocket = Ne, n.SocketIO = xe, Object.defineProperty(n, "__esModule", {
                value: !0
            })
        })
    })(vy, vy.exports);
    var YS = {
        exports: {}
    };
    (function(e) {
        (function() {
            function t(u, f) {
                var h = u.x - f.x,
                    g = u.y - f.y;
                return h * h + g * g
            }

            function n(u, f, h) {
                var g = f.x,
                    y = f.y,
                    b = h.x - g,
                    C = h.y - y;
                if (b !== 0 || C !== 0) {
                    var R = ((u.x - g) * b + (u.y - y) * C) / (b * b + C * C);
                    R > 1 ? (g = h.x, y = h.y) : R > 0 && (g += b * R, y += C * R)
                }
                return b = u.x - g, C = u.y - y, b * b + C * C
            }

            function r(u, f) {
                for (var h = u[0], g = [h], y, b = 1, C = u.length; b < C; b++) y = u[b], t(y, h) > f && (g.push(y), h = y);
                return h !== y && g.push(y), g
            }

            function s(u, f, h, g, y) {
                for (var b = g, C, R = f + 1; R < h; R++) {
                    var M = n(u[R], u[f], u[h]);
                    M > b && (C = R, b = M)
                }
                b > g && (C - f > 1 && s(u, f, C, g, y), y.push(u[C]), h - C > 1 && s(u, C, h, g, y))
            }

            function o(u, f) {
                var h = u.length - 1,
                    g = [u[0]];
                return s(u, 0, h, f, g), g.push(u[h]), g
            }

            function c(u, f, h) {
                if (u.length <= 2) return u;
                var g = f !== void 0 ? f * f : 1;
                return u = h ? u : r(u, g), u = o(u, g), u
            }
            e.exports = c, e.exports.default = c
        })()
    })(YS);
    const qS = YS.exports;
    class K3 {
        constructor(t, n, r) {
            Re(this, "DEFAULT_WIDTH", 400);
            Re(this, "DEFAULT_HEIGHT", 400);
            Re(this, "canvas");
            Re(this, "ctx");
            Re(this, "doodle");
            Re(this, "color", "#000");
            Re(this, "layer", 0);
            Re(this, "layers", 1);
            Re(this, "maxPoints", Number.MAX_SAFE_INTEGER);
            Re(this, "points", []);
            Re(this, "precision", 2);
            Re(this, "scale", {
                width: 1,
                height: 1
            });
            Re(this, "weight", 4);
            Re(this, "weightScale", 1);
            Re(this, "isInteracting", !1);
            var s, o, c, u, f;
            r != null && r.color && (this.color = r.color), r != null && r.layer && (this.layer = r.layer), r != null && r.layers && (this.layers = r.layers), r != null && r.maxPoints && (this.maxPoints = r.maxPoints), r != null && r.precision && (this.precision = r.precision), r != null && r.scale && (this.scale = r.scale), r != null && r.weight && (this.weight = r.weight), r != null && r.weightScale && (this.weightScale = r.weightScale), t.width = ((o = (s = n.size) == null ? void 0 : s.width) != null ? o : this.DEFAULT_WIDTH) * this.scale.width, t.height = ((u = (c = n.size) == null ? void 0 : c.height) != null ? u : this.DEFAULT_HEIGHT) * this.scale.height, this.canvas = t, this.ctx = t.getContext("2d"), (f = this.ctx) == null || f.scale(this.scale.width, this.scale.height), this.doodle = n, this.drawLines()
        }
        addPoint(t) {
            this.points.push(t)
        }
        normalizePoint(t) {
            const n = {
                    x: t.x / this.scale.width,
                    y: t.y / this.scale.height
                },
                r = {
                    x: Math.min(Math.max(.5 * this.weight, n.x), this.canvas.width / this.scale.width - .5 * this.weight),
                    y: Math.min(Math.max(.5 * this.weight, n.y), this.canvas.height / this.scale.height - .5 * this.weight)
                };
            return {
                x: dn.toPrecision(r.x, this.precision),
                y: dn.toPrecision(r.y, this.precision)
            }
        }
        drawLines() {
            if (!!this.ctx) {
                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                for (let t = 0; t < this.layers; t++) Object.values(this.doodle.lines).filter(n => {
                    var r;
                    return ((r = n.layer) != null ? r : 0) === t
                }).forEach(n => this.drawLine(n)), t === this.layer && this.drawLine({
                    color: this.color,
                    index: this.doodle.lines.length,
                    layer: this.layer,
                    points: this.points,
                    weight: this.weight
                })
            }
        }
        drawLine(t) {
            !this.ctx || (this.ctx.fillStyle = t.color, this.ctx.strokeStyle = t.color, this.ctx.lineCap = "round", this.ctx.lineJoin = "round", this.ctx.lineWidth = t.weight * this.weightScale, this.ctx.beginPath(), t.points.forEach((n, r) => {
                t.points.length === 1 && r === 0 && (this.ctx.save(), this.ctx.arc(n.x, n.y, t.weight / 2, 0, 2 * Math.PI), this.ctx.fill(), this.ctx.restore(), this.ctx.beginPath()), this.ctx.lineTo(n.x, n.y)
            }), this.ctx.stroke())
        }
        renderImage(t = "image/png") {
            return this.doodle.lines.length > 0 && this.drawLines(), this.canvas.toDataURL(t)
        }
        onStart(t) {
            this.isInteracting = !0;
            const n = this.normalizePoint(t);
            this.addPoint(n), this.drawLines()
        }
        onMove(t) {
            if (!this.isInteracting) return;
            const n = this.points[this.points.length - 1];
            if (!n) {
                this.addPoint(this.normalizePoint(t));
                return
            }
            const r = .5 * this.weight,
                s = {
                    x: t.x - n.x,
                    y: t.y - n.y
                },
                o = Math.sqrt(s.x ** 2 + s.y ** 2);
            if (o > r) {
                const c = (o - r) / o,
                    u = {
                        x: s.x * c,
                        y: s.y * c
                    },
                    f = {
                        x: n.x + u.x,
                        y: n.y + u.y
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
                points: qS(this.points, .5).map(n => ({
                    x: dn.toPrecision(n.x, this.precision),
                    y: dn.toPrecision(n.y, this.precision)
                })),
                weight: this.weight
            };
            return this.isInteracting = !1, this.points = [], t
        }
    }
    class V3 {
        constructor(t, n, r, s) {
            Re(this, "renderCanvas");
            Re(this, "canvases", []);
            Re(this, "maxPoints", Number.MAX_SAFE_INTEGER);
            Re(this, "tolerance", 1);
            Re(this, "lines", []);
            Re(this, "lines2", []);
            Re(this, "currentLine", {
                color: "#000",
                thickness: 0,
                points: []
            });
            Re(this, "isSubmitting", !1);
            Re(this, "isInteracting", !1);
            Re(this, "currentColor", "#000");
            Re(this, "currentThickness", 4);
            Re(this, "currentFrame", 0);
            Re(this, "width", 400);
            Re(this, "height", 400);
            this.width = n, this.height = r, this.renderCanvas = document.createElement("canvas"), s.thickness && (this.currentThickness = s.thickness), s.color && (this.currentColor = s.color), s.maxPoints && (this.maxPoints = s.maxPoints), this.setupElements(t), this.draw()
        }
        createCanvasObject(t) {
            const n = document.createElement("canvas");
            n.width = this.width, n.height = this.height, n.style.display = "none", this.canvases.push({
                name: t,
                element: n,
                dirty: !0
            })
        }
        getCanvasObject(t) {
            const n = this.canvases.find(r => r.name === t);
            if (!n) throw new Error(`No canvas found with name ${t}`);
            return n
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
            const n = this.getLastDrawnPoint();
            if (!n) {
                this.addPoint(t), this.getCanvasObject("line").dirty = !0;
                return
            }
            const r = .5 * this.thickness,
                s = {
                    x: t.x - n.x,
                    y: t.y - n.y
                },
                o = Math.sqrt(s.x ** 2 + s.y ** 2);
            if (o > r) {
                const c = (o - r) / o,
                    u = {
                        x: s.x * c,
                        y: s.y * c
                    },
                    f = {
                        x: n.x + u.x,
                        y: n.y + u.y
                    };
                this.addPoint(f), this.getCanvasObject("line").dirty = !0, this.draw()
            }
        }
        onUp() {
            this.isSubmitting || !this.isInteracting || (this.isInteracting = !1, this.endLine(), this.getCanvasObject("active").dirty = !0, this.getCanvasObject("line").dirty = !0, this.draw())
        }
        addLine(t) {
            const n = this.currentColor,
                r = this.currentThickness;
            this.currentLine = {
                color: n,
                thickness: r,
                points: []
            }, this.addPoint(t)
        }
        addPoint(t) {
            const n = this.currentLine;
            if (!n) return;
            const r = {
                x: Math.min(Math.max(.5 * n.thickness, t.x), this.renderCanvas.width - .5 * n.thickness),
                y: Math.min(Math.max(.5 * n.thickness, t.y), this.renderCanvas.height - .5 * n.thickness)
            };
            n.points.push(r)
        }
        getLastDrawnPoint() {
            return this.currentLine.points.length === 0 ? null : this.currentLine.points[this.currentLine.points.length - 1]
        }
        endLine() {
            const n = this.currentFrame === 0 ? this.lines : this.lines2,
                r = qS(this.currentLine.points);
            n.push({
                ...this.currentLine,
                points: r
            }), this.currentLine = {
                color: "#000",
                thickness: 0,
                points: []
            }
        }
        parseLines(t) {
            let n = "#000",
                r = 1;
            return t.map(s => {
                let o = [];
                return typeof s.points == "string" ? o = s.points.split("|").map(c => {
                    const [u, f] = c.split(",");
                    return {
                        x: parseInt(u, 10),
                        y: parseInt(f, 10)
                    }
                }) : o = s.points, s.color && s.color !== n && (n = s.color), s.thickness && s.thickness !== r && (r = s.thickness), {
                    color: n,
                    thickness: r,
                    points: o
                }
            })
        }
        exportLines(t) {
            return t.map(n => ({
                ...n,
                points: n.points.map(r => `${r.x},${r.y}`).join("|")
            }))
        }
        draw() {
            const t = this.renderCanvas.getContext("2d");
            if (!t) return;
            t.clearRect(0, 0, this.width, this.height);
            const n = this.getCanvasObject("inactive");
            if (n.dirty) {
                const o = n.element.getContext("2d");
                o.clearRect(0, 0, this.width, this.height), (this.currentFrame === 0 ? this.lines2 : this.lines).forEach(u => this.drawLine(o, u)), n.dirty = !1
            }
            t.save(), t.globalAlpha = .1, t.drawImage(n.element, 0, 0), t.restore();
            const r = this.getCanvasObject("active");
            if (r.dirty) {
                const o = r.element.getContext("2d");
                o.clearRect(0, 0, this.width, this.height), (this.currentFrame === 0 ? this.lines : this.lines2).forEach(u => this.drawLine(o, u)), r.dirty = !1
            }
            t.drawImage(r.element, 0, 0);
            const s = this.getCanvasObject("line");
            if (s.dirty) {
                const o = s.element.getContext("2d");
                o.clearRect(0, 0, this.width, this.height), this.drawLine(o, this.currentLine), s.dirty = !1
            }
            t.drawImage(s.element, 0, 0)
        }
        drawLine(t, n) {
            t.strokeStyle = n.color, t.lineWidth = n.thickness, t.lineCap = "round", t.lineJoin = "round", t.fillStyle = n.color, t.strokeStyle = n.color, t.beginPath(), n.points.forEach((r, s) => {
                s === 0 && (t.save(), t.arc(r.x, r.y, n.thickness / 2, 0, 2 * Math.PI), t.fill(), t.restore(), t.beginPath(), t.moveTo(r.x, r.y)), t.lineTo(r.x, r.y)
            }), t.stroke()
        }
    }
    class Y3 {
        constructor(t, n) {
            Re(this, "stageElement");
            Re(this, "width", 400);
            Re(this, "height", 400);
            Re(this, "interactCanvas");
            Re(this, "isDrawing", !1);
            Re(this, "callbacks", {});
            Re(this, "capturedPointer");
            Re(this, "onPointerDown", t => {
                if (t.preventDefault(), !t.isPrimary || this.capturedPointer) return;
                const n = this.getEventPoint(t);
                this.interactCanvas.onDown(n), this.stageElement.setPointerCapture(t.pointerId), this.capturedPointer = {
                    pointerId: t.pointerId,
                    pointerType: t.pointerType
                }
            });
            Re(this, "onPointerMove", t => {
                if (t.preventDefault(), !this.capturedPointer || !t.isPrimary || t.pointerType !== this.capturedPointer.pointerType) return;
                const n = this.getEventPoint(t);
                this.interactCanvas.onMove(n)
            });
            Re(this, "onLostPointerCapture", t => {
                if (t.preventDefault(), !this.capturedPointer || !t.isPrimary || t.pointerType !== this.capturedPointer.pointerType) return;
                this.interactCanvas.onUp(), this.emit("up");
                const n = this.capturedPointer.pointerId;
                this.stageElement.hasPointerCapture(n) && this.stageElement.releasePointerCapture(n), this.capturedPointer = void 0
            });
            Re(this, "onPointerEnd", t => {
                if (t.preventDefault(), !this.capturedPointer || !t.isPrimary || t.pointerType !== this.capturedPointer.pointerType) return;
                this.interactCanvas.onUp(), this.emit("up");
                const n = this.capturedPointer.pointerId;
                this.stageElement.hasPointerCapture(n) && this.stageElement.releasePointerCapture(n), this.capturedPointer = void 0
            });
            Re(this, "onMouseDown", t => {
                t.preventDefault();
                const n = this.getEventPoint(t);
                this.interactCanvas.onDown(n), this.isDrawing = !0
            });
            Re(this, "onMouseMove", t => {
                if (t.preventDefault(), !this.isDrawing) return;
                const n = this.getEventPoint(t);
                this.interactCanvas.onMove(n)
            });
            Re(this, "onMouseUp", t => {
                t.preventDefault(), this.interactCanvas.onUp(), this.isDrawing = !1, this.emit("up")
            });
            Re(this, "onTouchStart", t => {
                t.preventDefault();
                const n = this.getEventPoint(t.touches[0]);
                this.interactCanvas.onDown(n), this.isDrawing = !0
            });
            Re(this, "onTouchMove", t => {
                if (t.preventDefault(), !this.isDrawing) return;
                const n = this.getEventPoint(t.touches[0]);
                this.interactCanvas.onMove(n)
            });
            Re(this, "onTouchCancel", t => {
                t.preventDefault(), this.interactCanvas.onUp(), this.isDrawing = !1, this.emit("up")
            });
            Re(this, "onTouchEnd", t => {
                t.preventDefault(), this.interactCanvas.onUp(), this.isDrawing = !1, this.emit("up")
            });
            n.width && (this.width = n.width), n.height && (this.height = n.height), this.stageElement = t, this.setupElements(), this.setupEvents(), n.InteractCanvas ? this.interactCanvas = new n.InteractCanvas(t, this.width, this.height, n) : this.interactCanvas = new V3(t, this.width, this.height, n)
        }
        on(t, n) {
            this.callbacks[t] = this.callbacks[t] || [], this.callbacks[t].push(n)
        }
        off(t, n) {
            this.callbacks[t] = (this.callbacks[t] || []).filter(r => r !== n)
        }
        emit(t, ...n) {
            (this.callbacks[t] || []).map(r => r(...n))
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
        getPropValue(t, n) {
            return parseFloat(t.getPropertyValue(n)) || 0
        }
        getCanvasOffset() {
            const t = this.interactCanvas.canvasElement,
                n = window.getComputedStyle(t),
                r = t.getBoundingClientRect(),
                s = n.transform !== "none" ? n.transform.replace("matrix(", "").split(",") : ["1", "1", "1", "1"],
                o = parseFloat(s[0]),
                c = parseFloat(s[3]),
                u = (this.getPropValue(n, "border-left-width") + this.getPropValue(n, "border-right-width")) * o,
                f = (this.getPropValue(n, "border-top-width") + this.getPropValue(n, "border-bottom-width")) * c,
                h = (this.getPropValue(n, "padding-left") + this.getPropValue(n, "padding-right")) * o,
                g = (this.getPropValue(n, "padding-top") + this.getPropValue(n, "padding-bottom")) * c;
            return {
                scaleX: (r.width - u - h) / t.width,
                scaleY: (r.height - f - g) / t.height,
                offsetX: r.left + (this.getPropValue(n, "border-left-width") + this.getPropValue(n, "padding-left")) * o,
                offsetY: r.top + (this.getPropValue(n, "border-top-width") + this.getPropValue(n, "padding-top")) * c
            }
        }
        getEventPoint(t) {
            const {
                scaleX: n,
                scaleY: r,
                offsetX: s,
                offsetY: o
            } = this.getCanvasOffset(), c = t.clientX, u = t.clientY;
            let f = (c - s) / n,
                h = (u - o) / r;
            return f = Math.max(0, Math.min(this.width, f)), h = Math.max(0, Math.min(this.height, h)), f = Math.round(f), h = Math.round(h), {
                x: f,
                y: h
            }
        }
    }
    class q3 {
        static async warningsForAppTag(t) {
            var s;
            const n = [],
                r = Kl(t);
            return this.isCanvasSupported || n.push("canvas"), this.isFlexboxSupported || n.push("flexbox"), ((s = r == null ? void 0 : r.features) == null ? void 0 : s.includes("camera")) && !await this.isCameraSupported && n.push("camera"), n
        }
        static get isCanvasSupported() {
            const t = document.createElement("canvas");
            return !!(t.getContext && t.getContext("2d"))
        }
        static get isFlexboxSupported() {
            try {
                return CSS.supports("flex-wrap", "wrap")
            } catch {
                return !1
            }
        }
        static get isCameraSupported() {
            return new Promise((t, n) => {
                var r;
                (r = navigator.mediaDevices) == null || r.enumerateDevices().then(s => t(s.some(o => o.kind === "videoinput"))).catch(s => n(s))
            })
        }
    }
    class _y {
        static getPromptGuess(t, n) {
            var r, s, o;
            if ((r = t.player) != null && r.prompt) return t.player.prompt;
            if ((s = t.audience) != null && s.prompt) return t.audience.prompt;
            if ((o = t.audiencePlayer) != null && o.prompt) return t.audiencePlayer.prompt;
            if (t.prompt) return t.prompt;
            if (n === "range-game") return this.getRangeGameGuess(t)
        }
        static getRangeGameGuess(t) {
            var n, r, s, o, c, u, f, h;
            if ((r = (n = t.player) == null ? void 0 : n.content) != null && r.text) return (o = (s = t.player) == null ? void 0 : s.content) == null ? void 0 : o.text;
            if ((u = (c = t.content) == null ? void 0 : c.content) != null && u.text) return (h = (f = t.content) == null ? void 0 : f.content) == null ? void 0 : h.text
        }
        static async send(t) {
            const n = {
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
                const r = await this.sendToEcast(n);
                await this.sendToSlack(r, t)
            } catch (r) {
                console.error(r)
            }
        }
        static async sendToEcast(t) {
            return (await (await fetch("https://ecast.jackboxgames.com/api/v2/controller/state", {
                method: "POST",
                body: JSON.stringify(t)
            })).json()).body.url
        }
        static async sendToSlack(t, n) {
            var y;
            const r = Kl(n.room.appTag),
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
                    BASE_URL: "https://bundles.jackbox.tv/main/@connect/",
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
                u = `${(y=r==null?void 0:r.name)!=null?y:n.room.appTag} :${n.room.appTag}: 

 From: ${n.name},
${n.message}`,
                f = [];
            n.vibe && n.vibe !== "none" && f.push({
                type: "plain_text",
                text: `${o[n.vibe]} ${n.vibe.toUpperCase()} Vibes`,
                emoji: !0
            }), n.content && f.push({
                type: "plain_text",
                text: `Content: ${n.content}`,
                emoji: !0
            });
            const g = {
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
                const C = await (await fetch(s, {
                    method: "POST",
                    body: JSON.stringify(g)
                })).text();
                j3("[Feedback] sendToSlack", C)
            } catch (b) {
                console.error("[Feedback] sendToSlack", b)
            }
        }
    }
    var $c, z3 = new Uint8Array(16);

    function X3() {
        if (!$c && ($c = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto < "u" && typeof msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto), !$c)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return $c(z3)
    }
    const J3 = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

    function Q3(e) {
        return typeof e == "string" && J3.test(e)
    }
    var sn = [];
    for (var Ff = 0; Ff < 256; ++Ff) sn.push((Ff + 256).toString(16).substr(1));

    function Z3(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
            n = (sn[e[t + 0]] + sn[e[t + 1]] + sn[e[t + 2]] + sn[e[t + 3]] + "-" + sn[e[t + 4]] + sn[e[t + 5]] + "-" + sn[e[t + 6]] + sn[e[t + 7]] + "-" + sn[e[t + 8]] + sn[e[t + 9]] + "-" + sn[e[t + 10]] + sn[e[t + 11]] + sn[e[t + 12]] + sn[e[t + 13]] + sn[e[t + 14]] + sn[e[t + 15]]).toLowerCase();
        if (!Q3(n)) throw TypeError("Stringified UUID is invalid");
        return n
    }

    function zS(e, t, n) {
        e = e || {};
        var r = e.random || (e.rng || X3)();
        if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, t) {
            n = n || 0;
            for (var s = 0; s < 16; ++s) t[n + s] = r[s];
            return t
        }
        return Z3(r)
    }
    class eH {
        constructor(t) {
            Re(this, "user");
            if (!De.isSupported) {
                console.warn("Twitch Login requires local storage");
                return
            }
            this.processParams(t)
        }
        prepare() {
            return !De.isSupported || !De.get("token") ? null : this.fetchUser()
        }
        login() {
            if (!De.isSupported) return;
            const t = zS();
            De.set("twitchState", t);
            const n = "yn2iepd23vskpmkzgeg2lkfsct7gsc";
            let r = `https://${window.location.hostname}`;
            window.location.hostname === "localhost" && (r = "http://localhost:9090/");
            let s = "https://id.twitch.tv/oauth2/authorize";
            s += `?client_id=${n}`, s += `&redirect_uri=${r}`, s += "&response_type=token", s += "&scope=user:read:email", s += `&state=${t}`, window.location.href = s
        }
        logout() {
            !De.isSupported || (delete this.user, De.remove("token"))
        }
        processParams(t) {
            if (!t || !De.isSupported) return;
            const n = De.get("twitchState");
            if (!n) {
                console.error("[Twitch] Could not find the expected state in local storage");
                return
            }
            const r = new URLSearchParams(t),
                s = r.get("access_token"),
                o = r.get("state");
            if (!s) {
                console.error("[Twitch] Invalid Twitch redirect hash");
                return
            }
            o !== n && console.error("[Twitch] State parameter doesn't match the expected state"), De.set("token", s), De.remove("twitchState"), window.history.replaceState({}, document.title, "/")
        }
        async fetchUser() {
            if (!De.isSupported) return null;
            const t = De.get("token");
            if (!t) throw new Error("[Twitch] Token not found in local storage");
            try {
                const r = await (await fetch("https://api.twitch.tv/helix/users", {
                    headers: {
                        Authorization: `Bearer ${t}`,
                        "Client-ID": "yn2iepd23vskpmkzgeg2lkfsct7gsc"
                    }
                })).json();
                if (!r || !r.data) return null;
                const s = r.data[0];
                return s.token = t, this.user = s, this.user
            } catch (n) {
                return console.warn(n), null
            }
        }
    }
    const tH = {
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
        nH = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "prompts hidden on players\u2019 devices",
                VISIBILITY_CONTROLLER_ON: "prompts shown on players\u2019 devices",
                VISIBILITY_SCREEN_OFF: "prompts hidden on game screen",
                VISIBILITY_SCREEN_ON: "prompts shown on game screen"
            }
        },
        rH = {
            DISCONNECTED: "You have been disconnected.",
            DRAWING_NOTHING: "You have to draw something!",
            PLAYER_KICKED: "You have been kicked from the game by a moderator.",
            ROOM_DESTROYED: "Thanks for playing!",
            ROOM_DISCONNECTED: "Disconnected",
            TEXT_NAUGHTY: "I\u2019m afraid you can\u2019t write that. Please be respectful of other players.",
            TEXT_NOTHING: "You can\u2019t enter nothing!",
            TITLE: "Error"
        },
        iH = "LOADING",
        sH = {
            JOINED_COUNT: "x | {count} of {maxPlayers} players joined | {count} of {maxPlayers} players joined",
            PLAYERS_NEEDED: "x | {count} player needed to start | {count} players needed to start",
            WAITING_FOR_VIP: "Waiting for {name} to start the game",
            WAITING_FOR_GAMEPAD: "Waiting for the game to start",
            GAME_STARTING: "Game is starting",
            BUTTON_START: "Press to Start",
            BUTTON_CANCEL: "Press to Cancel"
        },
        aH = {
            GALLERY_LINK: "Visit the Gallery",
            PLAY_AGAIN: "Play again?",
            BUTTON_SAME_PLAYERS: "Same Players",
            BUTTON_NEW_PLAYERS: "New Players"
        },
        oH = {
            AND: "AND",
            OR: "OR"
        },
        cH = {
            BUTTON_SKIP: "Skip",
            BUTTON_NEXT: "Next",
            BUTTON_DONE: "Let\u2019s Go!"
        },
        lH = {
            NAME: "AUDIENCE"
        },
        uH = {
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
        fH = {
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
        dH = {
            ACTION: tH,
            ALT: nH,
            ERROR: rH,
            LOADING: iH,
            LOBBY: sH,
            POST_GAME: aH,
            SEPARATOR: oH,
            TUTORIAL: cH,
            AUDIENCE: lH,
            UGC: uH,
            TOAST: fH
        },
        hH = {
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
        pH = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "sujets non affich\xE9s sur les appareils des joueurs",
                VISIBILITY_CONTROLLER_ON: "sujets affich\xE9s sur les appareils des joueurs",
                VISIBILITY_SCREEN_OFF: "sujets non affich\xE9s sur l'\xE9cran de jeu",
                VISIBILITY_SCREEN_ON: "sujets affich\xE9s sur l'\xE9cran de jeu"
            }
        },
        gH = {
            DISCONNECTED: "Vous avez \xE9t\xE9 d\xE9connect\xE9.",
            DRAWING_NOTHING: "Vous devez dessiner quelque chose\xA0!",
            ROOM_DESTROYED: "Merci d'avoir jou\xE9\xA0!",
            ROOM_DISCONNECTED: "D\xE9connexion",
            TEXT_NAUGHTY: "Je crains que vous ne puissiez pas \xE9crire \xE7a. Soyez respectueux des autres joueurs.",
            TEXT_NOTHING: "Vous ne pouvez rien entrer\xA0!",
            TITLE: "Erreur"
        },
        mH = {
            JOINED_COUNT: "x | {count} joueur sur {maxPlayers} \xE0 rejoint la partie | {count} joueurs sur {maxPlayers} ont rejoint la partie",
            PLAYERS_NEEDED: "x | {count} joueur n\xE9cessaire pour commencer | {count} joueurs n\xE9cessaires pour commencer",
            WAITING_FOR_VIP: "En attente de {name} pour commencer la partie",
            WAITING_FOR_GAMEPAD: "En attente du d\xE9but de la partie",
            GAME_STARTING: "La partie commence",
            BUTTON_START: "Appuyer pour commencer",
            BUTTON_CANCEL: "Appuyer pour annuler"
        },
        vH = {
            GALLERY_LINK: "Visiter la galerie",
            PLAY_AGAIN: "Rejouer\xA0?",
            BUTTON_SAME_PLAYERS: "Les m\xEAmes joueurs",
            BUTTON_NEW_PLAYERS: "De nouveaux joueurs"
        },
        _H = {
            AND: "ET",
            OR: "OU"
        },
        yH = {
            BUTTON_SKIP: "Passer",
            BUTTON_NEXT: "Suivant",
            BUTTON_DONE: "Allons-y\xA0!"
        },
        EH = {
            NAME: "SPECTATEURS"
        },
        bH = {
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
        TH = {
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
        SH = {
            ACTION: hH,
            ALT: pH,
            ERROR: gH,
            LOBBY: mH,
            POST_GAME: vH,
            SEPARATOR: _H,
            TUTORIAL: yH,
            AUDIENCE: EH,
            UGC: bH,
            TOAST: TH
        },
        OH = {
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
        wH = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "definizioni nascoste sui dispositivi dei giocatori",
                VISIBILITY_CONTROLLER_ON: "definizioni visualizzate sui dispositivi dei giocatori",
                VISIBILITY_SCREEN_OFF: "definizioni nascoste sullo schermo di gioco",
                VISIBILITY_SCREEN_ON: "definizioni visualizzate sullo schermo di gioco"
            }
        },
        CH = {
            DISCONNECTED: "\xC8 stata effettuata la disconnessione.",
            DRAWING_NOTHING: "Devi disegnare qualcosa!",
            ROOM_DESTROYED: "Grazie per aver scelto di giocare con noi!",
            ROOM_DISCONNECTED: "Disconnessione effettuata",
            TEXT_NAUGHTY: "Purtroppo non puoi scrivere questa cosa. Abbi rispetto per gli altri giocatori.",
            TEXT_NOTHING: "Devi per forza inserire qualcosa!",
            TITLE: "Errore"
        },
        AH = {
            JOINED_COUNT: "x | Sta partecipando {count} giocatore su {maxPlayers} | Stanno partecipando {count} giocatori su {maxPlayers}",
            PLAYERS_NEEDED: "x | Manca {count} giocatore per iniziare | Mancano {count} giocatori per iniziare",
            WAITING_FOR_VIP: "In attesa di {name} per iniziare la partita",
            WAITING_FOR_GAMEPAD: "In attesa d'iniziare la partita",
            GAME_STARTING: "La partita sta per iniziare",
            BUTTON_START: "Premi per avviare",
            BUTTON_CANCEL: "Premi per annullare"
        },
        IH = {
            GALLERY_LINK: "Visita la galleria",
            PLAY_AGAIN: "Vuoi giocare di nuovo?",
            BUTTON_SAME_PLAYERS: "Stessi giocatori",
            BUTTON_NEW_PLAYERS: "Nuovi giocatori"
        },
        RH = {
            AND: "E",
            OR: "O"
        },
        NH = {
            BUTTON_SKIP: "Salta",
            BUTTON_NEXT: "Avanti",
            BUTTON_DONE: "Iniziamo!"
        },
        LH = {
            NAME: "PUBBLICO"
        },
        $H = {
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
        PH = {
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
        kH = {
            ACTION: OH,
            ALT: wH,
            ERROR: CH,
            LOBBY: AH,
            POST_GAME: IH,
            SEPARATOR: RH,
            TUTORIAL: NH,
            AUDIENCE: LH,
            UGC: $H,
            TOAST: PH
        },
        DH = {
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
        MH = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "Prompts auf Spielerger\xE4ten verborgen",
                VISIBILITY_CONTROLLER_ON: "Prompts auf Spielerger\xE4ten angezeigt",
                VISIBILITY_SCREEN_OFF: "Prompts auf Spielbildschirm verborgen",
                VISIBILITY_SCREEN_ON: "Prompts auf Spielbildschirm angezeigt"
            }
        },
        xH = {
            DISCONNECTED: "Deine Verbindung wurde getrennt.",
            DRAWING_NOTHING: "Du musst irgendwas zeichnen!",
            ROOM_DESTROYED: "Danke f\xFCrs Spielen!",
            ROOM_DISCONNECTED: "Verbindung getrennt",
            TEXT_NAUGHTY: "Das kannst du leider nicht schreiben. Bitte nimm R\xFCcksicht auf deine Mitspieler.",
            TEXT_NOTHING: "Du musst etwas eingeben!",
            TITLE: "Fehler"
        },
        UH = {
            JOINED_COUNT: "x | {count} von {maxPlayers} Spielern sind beigetreten | {count} von {maxPlayers} Spielern sind beigetreten",
            PLAYERS_NEEDED: "x | {count} Spieler zum Starten ben\xF6tigt | {count} Spieler zum Starten ben\xF6tigt",
            WAITING_FOR_VIP: "Warten, bis {name} das Spiel startet",
            WAITING_FOR_GAMEPAD: "Warten, bis das Spiel startet",
            GAME_STARTING: "Das Spiel beginnt",
            BUTTON_START: "Zum Starten dr\xFCcken",
            BUTTON_CANCEL: "Zum Abbrechen dr\xFCcken"
        },
        FH = {
            GALLERY_LINK: "Galerie besuchen",
            PLAY_AGAIN: "Erneut spielen?",
            BUTTON_SAME_PLAYERS: "Selbe Spieler",
            BUTTON_NEW_PLAYERS: "Neue Spieler"
        },
        BH = {
            AND: "UND",
            OR: "ODER"
        },
        GH = {
            BUTTON_SKIP: "\xDCberspringen",
            BUTTON_NEXT: "Weiter",
            BUTTON_DONE: "Los geht's!"
        },
        WH = {
            NAME: "PUBLIKUM"
        },
        jH = {
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
        HH = {
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
        KH = {
            ACTION: DH,
            ALT: MH,
            ERROR: xH,
            LOBBY: UH,
            POST_GAME: FH,
            SEPARATOR: BH,
            TUTORIAL: GH,
            AUDIENCE: WH,
            UGC: jH,
            TOAST: HH
        },
        VH = {
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
        YH = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "los enunciados no se muestran en el dispositivo del jugador",
                VISIBILITY_CONTROLLER_ON: "los enunciados se muestran en el dispositivo del jugador",
                VISIBILITY_SCREEN_OFF: "los enunciados no se muestran en la pantalla",
                VISIBILITY_SCREEN_ON: "los enunciados se muestran en la pantalla"
            }
        },
        qH = {
            DISCONNECTED: "Te has desconectado.",
            DRAWING_NOTHING: "\xA1Tienes que dibujar algo!",
            ROOM_DESTROYED: "\xA1Gracias por jugar!",
            ROOM_DISCONNECTED: "Desconectado",
            TEXT_NAUGHTY: "Lo siento, no puedes escribir eso. Hay que ser respetuoso con los dem\xE1s jugadores.",
            TEXT_NOTHING: "Tienes que escribir algo",
            TITLE: "Error"
        },
        zH = {
            JOINED_COUNT: "x | Se ha unido {count} de {maxPlayers} jugadores | Se han unido {count} de {maxPlayers} jugadores",
            PLAYERS_NEEDED: "x | Se necesita {count} jugador para empezar | Se necesitan {count} jugadores para empezar",
            WAITING_FOR_VIP: "Esperando a que {name} inicie la partida",
            WAITING_FOR_GAMEPAD: "Esperando a que empiece la partida",
            GAME_STARTING: "La partida va a empezar",
            BUTTON_START: "Pulsa para empezar",
            BUTTON_CANCEL: "Pulsa para cancelar"
        },
        XH = {
            GALLERY_LINK: "Visita la galer\xEDa",
            PLAY_AGAIN: "\xBFJugar otra vez?",
            BUTTON_SAME_PLAYERS: "Los mismos jugadores",
            BUTTON_NEW_PLAYERS: "Otros jugadores"
        },
        JH = {
            AND: "Y",
            OR: "O"
        },
        QH = {
            BUTTON_SKIP: "Omitir",
            BUTTON_NEXT: "Siguiente",
            BUTTON_DONE: "\xA1Vamos!"
        },
        ZH = {
            NAME: "P\xDABLICO"
        },
        e8 = {
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
        t8 = {
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
        n8 = {
            ACTION: VH,
            ALT: YH,
            ERROR: qH,
            LOBBY: zH,
            POST_GAME: XH,
            SEPARATOR: JH,
            TUTORIAL: QH,
            AUDIENCE: ZH,
            UGC: e8,
            TOAST: t8
        },
        r8 = {
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
        i8 = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "indicaciones ocultas en los dispositivos de los jugadores",
                VISIBILITY_CONTROLLER_ON: "indicaciones se muestran en los dispositivos de los jugadores",
                VISIBILITY_SCREEN_OFF: "indicaciones ocultas en la pantalla del juego",
                VISIBILITY_SCREEN_ON: "indicaciones se muestran en la pantalla del juego"
            }
        },
        s8 = {
            DISCONNECTED: "Te has desconectado.",
            DRAWING_NOTHING: "\xA1Tienes que dibujar algo!",
            ROOM_DESTROYED: "\xA1Gracias por jugar!",
            ROOM_DISCONNECTED: "Desconectado",
            TEXT_NAUGHTY: "Lo siento, no puedes escribir eso. Seamos respetuosos con los dem\xE1s jugadores.",
            TEXT_NOTHING: "Tienes que escribir algo",
            TITLE: "Error"
        },
        a8 = {
            JOINED_COUNT: "x | Se ha unido {count} de {maxPlayers} jugadores | Se han unido {count} de {maxPlayers} jugadores",
            PLAYERS_NEEDED: "x | Se necesita {count} jugador para empezar | Se necesitan {count} jugadores para empezar",
            WAITING_FOR_VIP: "Esperando a que {name} inicie la partida",
            WAITING_FOR_GAMEPAD: "Esperando a que empiece la partida",
            GAME_STARTING: "La partida va a empezar",
            BUTTON_START: "Pulsa para empezar",
            BUTTON_CANCEL: "Pulsa para cancelar"
        },
        o8 = {
            GALLERY_LINK: "Visita la galer\xEDa",
            PLAY_AGAIN: "\xBFJugar otra vez?",
            BUTTON_SAME_PLAYERS: "Los mismos jugadores",
            BUTTON_NEW_PLAYERS: "Otros jugadores"
        },
        c8 = {
            AND: "Y",
            OR: "O"
        },
        l8 = {
            BUTTON_SKIP: "Omitir",
            BUTTON_NEXT: "Siguiente",
            BUTTON_DONE: "\xA1Vamos!"
        },
        u8 = {
            NAME: "P\xDABLICO"
        },
        f8 = {
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
        d8 = {
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
        h8 = {
            ACTION: r8,
            ALT: i8,
            ERROR: s8,
            LOBBY: a8,
            POST_GAME: o8,
            SEPARATOR: c8,
            TUTORIAL: l8,
            AUDIENCE: u8,
            UGC: f8,
            TOAST: d8
        },
        p8 = {
            en: dH,
            fr: SH,
            it: kH,
            de: KH,
            es: n8,
            "es-XL": h8
        },
        g8 = ze({
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
                    const n = (c = this.player.action) != null ? c : "choice",
                        r = (u = this.player.key) != null ? u : "value",
                        s = (f = t.value) != null ? f : e,
                        o = {
                            action: n,
                            [r]: s
                        };
                    this.$ecast.updateObject(this.player.responseKey, o).catch(this.$handleEcastError)
                }
            }
        }),
        yt = (e, t) => {
            const n = e.__vccOpts || e;
            for (const [r, s] of t) n[r] = s;
            return n
        },
        m8 = {
            class: "choices"
        },
        v8 = {
            class: "constrain"
        },
        _8 = {
            key: 0
        },
        y8 = ["disabled", "onClick"];

    function E8(e, t, n, r, s, o) {
        const c = gn("bb");
        return z(), Q("div", m8, [Y("div", v8, [e.player.prompt ? je((z(), Q("p", _8, null, 512)), [
            [c, e.player.prompt]
        ]) : Ae("", !0), (z(!0), Q(ut, null, Ar(e.player.choices, (u, f) => (z(), Q("button", {
            key: f,
            class: Ye({
                selected: u.isSelected
            }),
            disabled: u.isDisabled,
            onClick: Bt(h => e.onChoiceClick(f), ["prevent"])
        }, Ce(u.text), 11, y8))), 128))])])
    }
    const b8 = yt(g8, [
            ["render", E8]
        ]),
        T8 = ze({
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
                    var t, n, r;
                    let e = 320;
                    return (t = this.player.doodle.size) != null && t.width && (e = this.player.doodle.size.width), e * ((r = (n = this.canvasOptions.scale) == null ? void 0 : n.width) != null ? r : 1)
                },
                pointerBoxHeight() {
                    var t, n, r;
                    let e = 320;
                    return (t = this.player.doodle.size) != null && t.height && (e = this.player.doodle.size.height), e * ((r = (n = this.canvasOptions.scale) == null ? void 0 : n.height) != null ? r : 1)
                }
            },
            watch: {
                canvasOptions: function(t) {
                    var n, r, s, o, c, u, f;
                    !this.canvas || (this.canvas.color = (n = t.color) != null ? n : "#000000", this.canvas.layer = (r = t.layer) != null ? r : 0, this.canvas.layers = (s = t.layers) != null ? s : 1, this.canvas.maxPoints = (o = t.maxPoints) != null ? o : Number.MAX_SAFE_INTEGER, this.canvas.precision = (c = t.precision) != null ? c : 2, this.canvas.scale = (u = t.scale) != null ? u : {
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
                const e = Ei();
                if (!(e != null && e.appContext.directives.pointerbox)) throw new Error("Doodle.vue relies on PointerBoxPlugin. Please install it inside your main.ts file.")
            },
            mounted() {
                this.createCanvas()
            },
            methods: {
                createCanvas() {
                    const e = this.$refs.canvas;
                    this.canvas = dr(new K3(e, this.player.doodle, this.canvasOptions))
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
        S8 = {
            class: "doodle"
        },
        O8 = {
            ref: "canvas"
        },
        w8 = ["disabled"],
        C8 = ["disabled"];

    function A8(e, t, n, r, s, o) {
        const c = gn("pointerbox-translate"),
            u = gn("pointerbox"),
            f = gn("t");
        return z(), Q("div", S8, [je((z(), Q("div", {
            class: "stage",
            "onPointerbox:start": t[0] || (t[0] = (...h) => e.onPointerBoxStart && e.onPointerBoxStart(...h)),
            "onPointerbox:move": t[1] || (t[1] = (...h) => e.onPointerBoxMove && e.onPointerBoxMove(...h)),
            "onPointerbox:end": t[2] || (t[2] = (...h) => e.onPointerBoxEnd && e.onPointerBoxEnd(...h))
        }, [je(Y("canvas", O8, null, 512), [
            [c, {
                id: "doodleCanvas",
                width: e.pointerBoxWidth,
                height: e.pointerBoxHeight
            }]
        ])], 32)), [
            [u]
        ]), e.hideUndo ? Ae("", !0) : je((z(), Q("button", {
            key: 0,
            class: "doodle-action undo",
            disabled: !e.canSubmit,
            onClick: t[3] || (t[3] = Bt((...h) => e.onUndo && e.onUndo(...h), ["prevent"]))
        }, null, 8, w8)), [
            [f, "ACTION.UNDO"]
        ]), e.hideSubmit ? Ae("", !0) : je((z(), Q("button", {
            key: 1,
            class: "doodle-action submit",
            disabled: !e.canSubmit,
            onClick: t[4] || (t[4] = Bt((...h) => e.onSubmit && e.onSubmit(...h), ["prevent"]))
        }, null, 8, C8)), [
            [f, "ACTION.SUBMIT"]
        ])])
    }
    const I8 = yt(T8, [
        ["render", A8]
    ]);
    var Yd = {
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
            var n, r = "4.17.21",
                s = 200,
                o = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",
                c = "Expected a function",
                u = "Invalid `variable` option passed into `_.template`",
                f = "__lodash_hash_undefined__",
                h = 500,
                g = "__lodash_placeholder__",
                y = 1,
                b = 2,
                C = 4,
                R = 1,
                M = 2,
                W = 1,
                I = 2,
                K = 4,
                q = 8,
                j = 16,
                G = 32,
                se = 64,
                ce = 128,
                le = 256,
                ue = 512,
                Ie = 30,
                be = "...",
                fe = 800,
                Oe = 16,
                F = 1,
                re = 2,
                de = 3,
                _e = 1 / 0,
                me = 9007199254740991,
                Se = 17976931348623157e292,
                Me = 0 / 0,
                Fe = 4294967295,
                Je = Fe - 1,
                Ot = Fe >>> 1,
                jt = [
                    ["ary", ce],
                    ["bind", W],
                    ["bindKey", I],
                    ["curry", q],
                    ["curryRight", j],
                    ["flip", ue],
                    ["partial", G],
                    ["partialRight", se],
                    ["rearg", le]
                ],
                wt = "[object Arguments]",
                zt = "[object Array]",
                it = "[object AsyncFunction]",
                mt = "[object Boolean]",
                st = "[object Date]",
                $t = "[object DOMException]",
                Dt = "[object Error]",
                Nt = "[object Function]",
                m = "[object GeneratorFunction]",
                p = "[object Map]",
                O = "[object Number]",
                x = "[object Null]",
                B = "[object Object]",
                k = "[object Promise]",
                ae = "[object Proxy]",
                Z = "[object RegExp]",
                X = "[object Set]",
                N = "[object String]",
                H = "[object Symbol]",
                he = "[object Undefined]",
                pe = "[object WeakMap]",
                Ne = "[object WeakSet]",
                xe = "[object ArrayBuffer]",
                w = "[object DataView]",
                T = "[object Float32Array]",
                $ = "[object Float64Array]",
                S = "[object Int8Array]",
                P = "[object Int16Array]",
                ee = "[object Int32Array]",
                ie = "[object Uint8Array]",
                ye = "[object Uint8ClampedArray]",
                Te = "[object Uint16Array]",
                ht = "[object Uint32Array]",
                ln = /\b__p \+= '';/g,
                Ue = /\b(__p \+=) '' \+/g,
                Sa = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
                Kp = /&(?:amp|lt|gt|quot|#39);/g,
                Vp = /[&<>"']/g,
                Iw = RegExp(Kp.source),
                Rw = RegExp(Vp.source),
                Nw = /<%-([\s\S]+?)%>/g,
                Lw = /<%([\s\S]+?)%>/g,
                Yp = /<%=([\s\S]+?)%>/g,
                $w = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                Pw = /^\w*$/,
                kw = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                ou = /[\\^$.*+?()[\]{}|]/g,
                Dw = RegExp(ou.source),
                cu = /^\s+/,
                Mw = /\s/,
                xw = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
                Uw = /\{\n\/\* \[wrapped with (.+)\] \*/,
                Fw = /,? & /,
                Bw = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
                Gw = /[()=,{}\[\]\/\s]/,
                Ww = /\\(\\)?/g,
                jw = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
                qp = /\w*$/,
                Hw = /^[-+]0x[0-9a-f]+$/i,
                Kw = /^0b[01]+$/i,
                Vw = /^\[object .+?Constructor\]$/,
                Yw = /^0o[0-7]+$/i,
                qw = /^(?:0|[1-9]\d*)$/,
                zw = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
                Do = /($^)/,
                Xw = /['\n\r\u2028\u2029\\]/g,
                Mo = "\\ud800-\\udfff",
                Jw = "\\u0300-\\u036f",
                Qw = "\\ufe20-\\ufe2f",
                Zw = "\\u20d0-\\u20ff",
                zp = Jw + Qw + Zw,
                Xp = "\\u2700-\\u27bf",
                Jp = "a-z\\xdf-\\xf6\\xf8-\\xff",
                eC = "\\xac\\xb1\\xd7\\xf7",
                tC = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
                nC = "\\u2000-\\u206f",
                rC = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
                Qp = "A-Z\\xc0-\\xd6\\xd8-\\xde",
                Zp = "\\ufe0e\\ufe0f",
                eg = eC + tC + nC + rC,
                lu = "['\u2019]",
                iC = "[" + Mo + "]",
                tg = "[" + eg + "]",
                xo = "[" + zp + "]",
                ng = "\\d+",
                sC = "[" + Xp + "]",
                rg = "[" + Jp + "]",
                ig = "[^" + Mo + eg + ng + Xp + Jp + Qp + "]",
                uu = "\\ud83c[\\udffb-\\udfff]",
                aC = "(?:" + xo + "|" + uu + ")",
                sg = "[^" + Mo + "]",
                fu = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                du = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                gs = "[" + Qp + "]",
                ag = "\\u200d",
                og = "(?:" + rg + "|" + ig + ")",
                oC = "(?:" + gs + "|" + ig + ")",
                cg = "(?:" + lu + "(?:d|ll|m|re|s|t|ve))?",
                lg = "(?:" + lu + "(?:D|LL|M|RE|S|T|VE))?",
                ug = aC + "?",
                fg = "[" + Zp + "]?",
                cC = "(?:" + ag + "(?:" + [sg, fu, du].join("|") + ")" + fg + ug + ")*",
                lC = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
                uC = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
                dg = fg + ug + cC,
                fC = "(?:" + [sC, fu, du].join("|") + ")" + dg,
                dC = "(?:" + [sg + xo + "?", xo, fu, du, iC].join("|") + ")",
                hC = RegExp(lu, "g"),
                pC = RegExp(xo, "g"),
                hu = RegExp(uu + "(?=" + uu + ")|" + dC + dg, "g"),
                gC = RegExp([gs + "?" + rg + "+" + cg + "(?=" + [tg, gs, "$"].join("|") + ")", oC + "+" + lg + "(?=" + [tg, gs + og, "$"].join("|") + ")", gs + "?" + og + "+" + cg, gs + "+" + lg, uC, lC, ng, fC].join("|"), "g"),
                mC = RegExp("[" + ag + Mo + zp + Zp + "]"),
                vC = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
                _C = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
                yC = -1,
                Ct = {};
            Ct[T] = Ct[$] = Ct[S] = Ct[P] = Ct[ee] = Ct[ie] = Ct[ye] = Ct[Te] = Ct[ht] = !0, Ct[wt] = Ct[zt] = Ct[xe] = Ct[mt] = Ct[w] = Ct[st] = Ct[Dt] = Ct[Nt] = Ct[p] = Ct[O] = Ct[B] = Ct[Z] = Ct[X] = Ct[N] = Ct[pe] = !1;
            var Et = {};
            Et[wt] = Et[zt] = Et[xe] = Et[w] = Et[mt] = Et[st] = Et[T] = Et[$] = Et[S] = Et[P] = Et[ee] = Et[p] = Et[O] = Et[B] = Et[Z] = Et[X] = Et[N] = Et[H] = Et[ie] = Et[ye] = Et[Te] = Et[ht] = !0, Et[Dt] = Et[Nt] = Et[pe] = !1;
            var EC = {
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
                bC = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;"
                },
                TC = {
                    "&amp;": "&",
                    "&lt;": "<",
                    "&gt;": ">",
                    "&quot;": '"',
                    "&#39;": "'"
                },
                SC = {
                    "\\": "\\",
                    "'": "'",
                    "\n": "n",
                    "\r": "r",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                },
                OC = parseFloat,
                wC = parseInt,
                hg = typeof Ft == "object" && Ft && Ft.Object === Object && Ft,
                CC = typeof self == "object" && self && self.Object === Object && self,
                nn = hg || CC || Function("return this")(),
                pu = t && !t.nodeType && t,
                Di = pu && !0 && e && !e.nodeType && e,
                pg = Di && Di.exports === pu,
                gu = pg && hg.process,
                Kn = function() {
                    try {
                        var D = Di && Di.require && Di.require("util").types;
                        return D || gu && gu.binding && gu.binding("util")
                    } catch {}
                }(),
                gg = Kn && Kn.isArrayBuffer,
                mg = Kn && Kn.isDate,
                vg = Kn && Kn.isMap,
                _g = Kn && Kn.isRegExp,
                yg = Kn && Kn.isSet,
                Eg = Kn && Kn.isTypedArray;

            function Ln(D, J, V) {
                switch (V.length) {
                    case 0:
                        return D.call(J);
                    case 1:
                        return D.call(J, V[0]);
                    case 2:
                        return D.call(J, V[0], V[1]);
                    case 3:
                        return D.call(J, V[0], V[1], V[2])
                }
                return D.apply(J, V)
            }

            function AC(D, J, V, Ee) {
                for (var Be = -1, ct = D == null ? 0 : D.length; ++Be < ct;) {
                    var Ht = D[Be];
                    J(Ee, Ht, V(Ht), D)
                }
                return Ee
            }

            function Vn(D, J) {
                for (var V = -1, Ee = D == null ? 0 : D.length; ++V < Ee && J(D[V], V, D) !== !1;);
                return D
            }

            function IC(D, J) {
                for (var V = D == null ? 0 : D.length; V-- && J(D[V], V, D) !== !1;);
                return D
            }

            function bg(D, J) {
                for (var V = -1, Ee = D == null ? 0 : D.length; ++V < Ee;)
                    if (!J(D[V], V, D)) return !1;
                return !0
            }

            function qr(D, J) {
                for (var V = -1, Ee = D == null ? 0 : D.length, Be = 0, ct = []; ++V < Ee;) {
                    var Ht = D[V];
                    J(Ht, V, D) && (ct[Be++] = Ht)
                }
                return ct
            }

            function Uo(D, J) {
                var V = D == null ? 0 : D.length;
                return !!V && ms(D, J, 0) > -1
            }

            function mu(D, J, V) {
                for (var Ee = -1, Be = D == null ? 0 : D.length; ++Ee < Be;)
                    if (V(J, D[Ee])) return !0;
                return !1
            }

            function It(D, J) {
                for (var V = -1, Ee = D == null ? 0 : D.length, Be = Array(Ee); ++V < Ee;) Be[V] = J(D[V], V, D);
                return Be
            }

            function zr(D, J) {
                for (var V = -1, Ee = J.length, Be = D.length; ++V < Ee;) D[Be + V] = J[V];
                return D
            }

            function vu(D, J, V, Ee) {
                var Be = -1,
                    ct = D == null ? 0 : D.length;
                for (Ee && ct && (V = D[++Be]); ++Be < ct;) V = J(V, D[Be], Be, D);
                return V
            }

            function RC(D, J, V, Ee) {
                var Be = D == null ? 0 : D.length;
                for (Ee && Be && (V = D[--Be]); Be--;) V = J(V, D[Be], Be, D);
                return V
            }

            function _u(D, J) {
                for (var V = -1, Ee = D == null ? 0 : D.length; ++V < Ee;)
                    if (J(D[V], V, D)) return !0;
                return !1
            }
            var NC = yu("length");

            function LC(D) {
                return D.split("")
            }

            function $C(D) {
                return D.match(Bw) || []
            }

            function Tg(D, J, V) {
                var Ee;
                return V(D, function(Be, ct, Ht) {
                    if (J(Be, ct, Ht)) return Ee = ct, !1
                }), Ee
            }

            function Fo(D, J, V, Ee) {
                for (var Be = D.length, ct = V + (Ee ? 1 : -1); Ee ? ct-- : ++ct < Be;)
                    if (J(D[ct], ct, D)) return ct;
                return -1
            }

            function ms(D, J, V) {
                return J === J ? HC(D, J, V) : Fo(D, Sg, V)
            }

            function PC(D, J, V, Ee) {
                for (var Be = V - 1, ct = D.length; ++Be < ct;)
                    if (Ee(D[Be], J)) return Be;
                return -1
            }

            function Sg(D) {
                return D !== D
            }

            function Og(D, J) {
                var V = D == null ? 0 : D.length;
                return V ? bu(D, J) / V : Me
            }

            function yu(D) {
                return function(J) {
                    return J == null ? n : J[D]
                }
            }

            function Eu(D) {
                return function(J) {
                    return D == null ? n : D[J]
                }
            }

            function wg(D, J, V, Ee, Be) {
                return Be(D, function(ct, Ht, vt) {
                    V = Ee ? (Ee = !1, ct) : J(V, ct, Ht, vt)
                }), V
            }

            function kC(D, J) {
                var V = D.length;
                for (D.sort(J); V--;) D[V] = D[V].value;
                return D
            }

            function bu(D, J) {
                for (var V, Ee = -1, Be = D.length; ++Ee < Be;) {
                    var ct = J(D[Ee]);
                    ct !== n && (V = V === n ? ct : V + ct)
                }
                return V
            }

            function Tu(D, J) {
                for (var V = -1, Ee = Array(D); ++V < D;) Ee[V] = J(V);
                return Ee
            }

            function DC(D, J) {
                return It(J, function(V) {
                    return [V, D[V]]
                })
            }

            function Cg(D) {
                return D && D.slice(0, Ng(D) + 1).replace(cu, "")
            }

            function $n(D) {
                return function(J) {
                    return D(J)
                }
            }

            function Su(D, J) {
                return It(J, function(V) {
                    return D[V]
                })
            }

            function Oa(D, J) {
                return D.has(J)
            }

            function Ag(D, J) {
                for (var V = -1, Ee = D.length; ++V < Ee && ms(J, D[V], 0) > -1;);
                return V
            }

            function Ig(D, J) {
                for (var V = D.length; V-- && ms(J, D[V], 0) > -1;);
                return V
            }

            function MC(D, J) {
                for (var V = D.length, Ee = 0; V--;) D[V] === J && ++Ee;
                return Ee
            }
            var xC = Eu(EC),
                UC = Eu(bC);

            function FC(D) {
                return "\\" + SC[D]
            }

            function BC(D, J) {
                return D == null ? n : D[J]
            }

            function vs(D) {
                return mC.test(D)
            }

            function GC(D) {
                return vC.test(D)
            }

            function WC(D) {
                for (var J, V = []; !(J = D.next()).done;) V.push(J.value);
                return V
            }

            function Ou(D) {
                var J = -1,
                    V = Array(D.size);
                return D.forEach(function(Ee, Be) {
                    V[++J] = [Be, Ee]
                }), V
            }

            function Rg(D, J) {
                return function(V) {
                    return D(J(V))
                }
            }

            function Xr(D, J) {
                for (var V = -1, Ee = D.length, Be = 0, ct = []; ++V < Ee;) {
                    var Ht = D[V];
                    (Ht === J || Ht === g) && (D[V] = g, ct[Be++] = V)
                }
                return ct
            }

            function Bo(D) {
                var J = -1,
                    V = Array(D.size);
                return D.forEach(function(Ee) {
                    V[++J] = Ee
                }), V
            }

            function jC(D) {
                var J = -1,
                    V = Array(D.size);
                return D.forEach(function(Ee) {
                    V[++J] = [Ee, Ee]
                }), V
            }

            function HC(D, J, V) {
                for (var Ee = V - 1, Be = D.length; ++Ee < Be;)
                    if (D[Ee] === J) return Ee;
                return -1
            }

            function KC(D, J, V) {
                for (var Ee = V + 1; Ee--;)
                    if (D[Ee] === J) return Ee;
                return Ee
            }

            function _s(D) {
                return vs(D) ? YC(D) : NC(D)
            }

            function ir(D) {
                return vs(D) ? qC(D) : LC(D)
            }

            function Ng(D) {
                for (var J = D.length; J-- && Mw.test(D.charAt(J)););
                return J
            }
            var VC = Eu(TC);

            function YC(D) {
                for (var J = hu.lastIndex = 0; hu.test(D);) ++J;
                return J
            }

            function qC(D) {
                return D.match(hu) || []
            }

            function zC(D) {
                return D.match(gC) || []
            }
            var XC = function D(J) {
                    J = J == null ? nn : ys.defaults(nn.Object(), J, ys.pick(nn, _C));
                    var V = J.Array,
                        Ee = J.Date,
                        Be = J.Error,
                        ct = J.Function,
                        Ht = J.Math,
                        vt = J.Object,
                        wu = J.RegExp,
                        JC = J.String,
                        Yn = J.TypeError,
                        Go = V.prototype,
                        QC = ct.prototype,
                        Es = vt.prototype,
                        Wo = J["__core-js_shared__"],
                        jo = QC.toString,
                        pt = Es.hasOwnProperty,
                        ZC = 0,
                        Lg = function() {
                            var i = /[^.]+$/.exec(Wo && Wo.keys && Wo.keys.IE_PROTO || "");
                            return i ? "Symbol(src)_1." + i : ""
                        }(),
                        Ho = Es.toString,
                        e0 = jo.call(vt),
                        t0 = nn._,
                        n0 = wu("^" + jo.call(pt).replace(ou, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                        Ko = pg ? J.Buffer : n,
                        Jr = J.Symbol,
                        Vo = J.Uint8Array,
                        $g = Ko ? Ko.allocUnsafe : n,
                        Yo = Rg(vt.getPrototypeOf, vt),
                        Pg = vt.create,
                        kg = Es.propertyIsEnumerable,
                        qo = Go.splice,
                        Dg = Jr ? Jr.isConcatSpreadable : n,
                        wa = Jr ? Jr.iterator : n,
                        Mi = Jr ? Jr.toStringTag : n,
                        zo = function() {
                            try {
                                var i = Gi(vt, "defineProperty");
                                return i({}, "", {}), i
                            } catch {}
                        }(),
                        r0 = J.clearTimeout !== nn.clearTimeout && J.clearTimeout,
                        i0 = Ee && Ee.now !== nn.Date.now && Ee.now,
                        s0 = J.setTimeout !== nn.setTimeout && J.setTimeout,
                        Xo = Ht.ceil,
                        Jo = Ht.floor,
                        Cu = vt.getOwnPropertySymbols,
                        a0 = Ko ? Ko.isBuffer : n,
                        Mg = J.isFinite,
                        o0 = Go.join,
                        c0 = Rg(vt.keys, vt),
                        Kt = Ht.max,
                        un = Ht.min,
                        l0 = Ee.now,
                        u0 = J.parseInt,
                        xg = Ht.random,
                        f0 = Go.reverse,
                        Au = Gi(J, "DataView"),
                        Ca = Gi(J, "Map"),
                        Iu = Gi(J, "Promise"),
                        bs = Gi(J, "Set"),
                        Aa = Gi(J, "WeakMap"),
                        Ia = Gi(vt, "create"),
                        Qo = Aa && new Aa,
                        Ts = {},
                        d0 = Wi(Au),
                        h0 = Wi(Ca),
                        p0 = Wi(Iu),
                        g0 = Wi(bs),
                        m0 = Wi(Aa),
                        Zo = Jr ? Jr.prototype : n,
                        Ra = Zo ? Zo.valueOf : n,
                        Ug = Zo ? Zo.toString : n;

                    function _(i) {
                        if (Pt(i) && !We(i) && !(i instanceof Qe)) {
                            if (i instanceof qn) return i;
                            if (pt.call(i, "__wrapped__")) return Fm(i)
                        }
                        return new qn(i)
                    }
                    var Ss = function() {
                        function i() {}
                        return function(a) {
                            if (!Lt(a)) return {};
                            if (Pg) return Pg(a);
                            i.prototype = a;
                            var l = new i;
                            return i.prototype = n, l
                        }
                    }();

                    function ec() {}

                    function qn(i, a) {
                        this.__wrapped__ = i, this.__actions__ = [], this.__chain__ = !!a, this.__index__ = 0, this.__values__ = n
                    }
                    _.templateSettings = {
                        escape: Nw,
                        evaluate: Lw,
                        interpolate: Yp,
                        variable: "",
                        imports: {
                            _
                        }
                    }, _.prototype = ec.prototype, _.prototype.constructor = _, qn.prototype = Ss(ec.prototype), qn.prototype.constructor = qn;

                    function Qe(i) {
                        this.__wrapped__ = i, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Fe, this.__views__ = []
                    }

                    function v0() {
                        var i = new Qe(this.__wrapped__);
                        return i.__actions__ = On(this.__actions__), i.__dir__ = this.__dir__, i.__filtered__ = this.__filtered__, i.__iteratees__ = On(this.__iteratees__), i.__takeCount__ = this.__takeCount__, i.__views__ = On(this.__views__), i
                    }

                    function _0() {
                        if (this.__filtered__) {
                            var i = new Qe(this);
                            i.__dir__ = -1, i.__filtered__ = !0
                        } else i = this.clone(), i.__dir__ *= -1;
                        return i
                    }

                    function y0() {
                        var i = this.__wrapped__.value(),
                            a = this.__dir__,
                            l = We(i),
                            d = a < 0,
                            v = l ? i.length : 0,
                            E = LA(0, v, this.__views__),
                            A = E.start,
                            L = E.end,
                            U = L - A,
                            te = d ? L : A - 1,
                            ne = this.__iteratees__,
                            oe = ne.length,
                            ge = 0,
                            we = un(U, this.__takeCount__);
                        if (!l || !d && v == U && we == U) return cm(i, this.__actions__);
                        var Pe = [];
                        e: for (; U-- && ge < we;) {
                            te += a;
                            for (var Ve = -1, ke = i[te]; ++Ve < oe;) {
                                var Xe = ne[Ve],
                                    Ze = Xe.iteratee,
                                    Dn = Xe.type,
                                    En = Ze(ke);
                                if (Dn == re) ke = En;
                                else if (!En) {
                                    if (Dn == F) continue e;
                                    break e
                                }
                            }
                            Pe[ge++] = ke
                        }
                        return Pe
                    }
                    Qe.prototype = Ss(ec.prototype), Qe.prototype.constructor = Qe;

                    function xi(i) {
                        var a = -1,
                            l = i == null ? 0 : i.length;
                        for (this.clear(); ++a < l;) {
                            var d = i[a];
                            this.set(d[0], d[1])
                        }
                    }

                    function E0() {
                        this.__data__ = Ia ? Ia(null) : {}, this.size = 0
                    }

                    function b0(i) {
                        var a = this.has(i) && delete this.__data__[i];
                        return this.size -= a ? 1 : 0, a
                    }

                    function T0(i) {
                        var a = this.__data__;
                        if (Ia) {
                            var l = a[i];
                            return l === f ? n : l
                        }
                        return pt.call(a, i) ? a[i] : n
                    }

                    function S0(i) {
                        var a = this.__data__;
                        return Ia ? a[i] !== n : pt.call(a, i)
                    }

                    function O0(i, a) {
                        var l = this.__data__;
                        return this.size += this.has(i) ? 0 : 1, l[i] = Ia && a === n ? f : a, this
                    }
                    xi.prototype.clear = E0, xi.prototype.delete = b0, xi.prototype.get = T0, xi.prototype.has = S0, xi.prototype.set = O0;

                    function Rr(i) {
                        var a = -1,
                            l = i == null ? 0 : i.length;
                        for (this.clear(); ++a < l;) {
                            var d = i[a];
                            this.set(d[0], d[1])
                        }
                    }

                    function w0() {
                        this.__data__ = [], this.size = 0
                    }

                    function C0(i) {
                        var a = this.__data__,
                            l = tc(a, i);
                        if (l < 0) return !1;
                        var d = a.length - 1;
                        return l == d ? a.pop() : qo.call(a, l, 1), --this.size, !0
                    }

                    function A0(i) {
                        var a = this.__data__,
                            l = tc(a, i);
                        return l < 0 ? n : a[l][1]
                    }

                    function I0(i) {
                        return tc(this.__data__, i) > -1
                    }

                    function R0(i, a) {
                        var l = this.__data__,
                            d = tc(l, i);
                        return d < 0 ? (++this.size, l.push([i, a])) : l[d][1] = a, this
                    }
                    Rr.prototype.clear = w0, Rr.prototype.delete = C0, Rr.prototype.get = A0, Rr.prototype.has = I0, Rr.prototype.set = R0;

                    function Nr(i) {
                        var a = -1,
                            l = i == null ? 0 : i.length;
                        for (this.clear(); ++a < l;) {
                            var d = i[a];
                            this.set(d[0], d[1])
                        }
                    }

                    function N0() {
                        this.size = 0, this.__data__ = {
                            hash: new xi,
                            map: new(Ca || Rr),
                            string: new xi
                        }
                    }

                    function L0(i) {
                        var a = hc(this, i).delete(i);
                        return this.size -= a ? 1 : 0, a
                    }

                    function $0(i) {
                        return hc(this, i).get(i)
                    }

                    function P0(i) {
                        return hc(this, i).has(i)
                    }

                    function k0(i, a) {
                        var l = hc(this, i),
                            d = l.size;
                        return l.set(i, a), this.size += l.size == d ? 0 : 1, this
                    }
                    Nr.prototype.clear = N0, Nr.prototype.delete = L0, Nr.prototype.get = $0, Nr.prototype.has = P0, Nr.prototype.set = k0;

                    function Ui(i) {
                        var a = -1,
                            l = i == null ? 0 : i.length;
                        for (this.__data__ = new Nr; ++a < l;) this.add(i[a])
                    }

                    function D0(i) {
                        return this.__data__.set(i, f), this
                    }

                    function M0(i) {
                        return this.__data__.has(i)
                    }
                    Ui.prototype.add = Ui.prototype.push = D0, Ui.prototype.has = M0;

                    function sr(i) {
                        var a = this.__data__ = new Rr(i);
                        this.size = a.size
                    }

                    function x0() {
                        this.__data__ = new Rr, this.size = 0
                    }

                    function U0(i) {
                        var a = this.__data__,
                            l = a.delete(i);
                        return this.size = a.size, l
                    }

                    function F0(i) {
                        return this.__data__.get(i)
                    }

                    function B0(i) {
                        return this.__data__.has(i)
                    }

                    function G0(i, a) {
                        var l = this.__data__;
                        if (l instanceof Rr) {
                            var d = l.__data__;
                            if (!Ca || d.length < s - 1) return d.push([i, a]), this.size = ++l.size, this;
                            l = this.__data__ = new Nr(d)
                        }
                        return l.set(i, a), this.size = l.size, this
                    }
                    sr.prototype.clear = x0, sr.prototype.delete = U0, sr.prototype.get = F0, sr.prototype.has = B0, sr.prototype.set = G0;

                    function Fg(i, a) {
                        var l = We(i),
                            d = !l && ji(i),
                            v = !l && !d && ni(i),
                            E = !l && !d && !v && As(i),
                            A = l || d || v || E,
                            L = A ? Tu(i.length, JC) : [],
                            U = L.length;
                        for (var te in i)(a || pt.call(i, te)) && !(A && (te == "length" || v && (te == "offset" || te == "parent") || E && (te == "buffer" || te == "byteLength" || te == "byteOffset") || kr(te, U))) && L.push(te);
                        return L
                    }

                    function Bg(i) {
                        var a = i.length;
                        return a ? i[Fu(0, a - 1)] : n
                    }

                    function W0(i, a) {
                        return pc(On(i), Fi(a, 0, i.length))
                    }

                    function j0(i) {
                        return pc(On(i))
                    }

                    function Ru(i, a, l) {
                        (l !== n && !ar(i[a], l) || l === n && !(a in i)) && Lr(i, a, l)
                    }

                    function Na(i, a, l) {
                        var d = i[a];
                        (!(pt.call(i, a) && ar(d, l)) || l === n && !(a in i)) && Lr(i, a, l)
                    }

                    function tc(i, a) {
                        for (var l = i.length; l--;)
                            if (ar(i[l][0], a)) return l;
                        return -1
                    }

                    function H0(i, a, l, d) {
                        return Qr(i, function(v, E, A) {
                            a(d, v, l(v), A)
                        }), d
                    }

                    function Gg(i, a) {
                        return i && mr(a, Xt(a), i)
                    }

                    function K0(i, a) {
                        return i && mr(a, Cn(a), i)
                    }

                    function Lr(i, a, l) {
                        a == "__proto__" && zo ? zo(i, a, {
                            configurable: !0,
                            enumerable: !0,
                            value: l,
                            writable: !0
                        }) : i[a] = l
                    }

                    function Nu(i, a) {
                        for (var l = -1, d = a.length, v = V(d), E = i == null; ++l < d;) v[l] = E ? n : ff(i, a[l]);
                        return v
                    }

                    function Fi(i, a, l) {
                        return i === i && (l !== n && (i = i <= l ? i : l), a !== n && (i = i >= a ? i : a)), i
                    }

                    function zn(i, a, l, d, v, E) {
                        var A, L = a & y,
                            U = a & b,
                            te = a & C;
                        if (l && (A = v ? l(i, d, v, E) : l(i)), A !== n) return A;
                        if (!Lt(i)) return i;
                        var ne = We(i);
                        if (ne) {
                            if (A = PA(i), !L) return On(i, A)
                        } else {
                            var oe = fn(i),
                                ge = oe == Nt || oe == m;
                            if (ni(i)) return fm(i, L);
                            if (oe == B || oe == wt || ge && !v) {
                                if (A = U || ge ? {} : Nm(i), !L) return U ? TA(i, K0(A, i)) : bA(i, Gg(A, i))
                            } else {
                                if (!Et[oe]) return v ? i : {};
                                A = kA(i, oe, L)
                            }
                        }
                        E || (E = new sr);
                        var we = E.get(i);
                        if (we) return we;
                        E.set(i, A), sv(i) ? i.forEach(function(ke) {
                            A.add(zn(ke, a, l, ke, i, E))
                        }) : rv(i) && i.forEach(function(ke, Xe) {
                            A.set(Xe, zn(ke, a, l, Xe, i, E))
                        });
                        var Pe = te ? U ? Xu : zu : U ? Cn : Xt,
                            Ve = ne ? n : Pe(i);
                        return Vn(Ve || i, function(ke, Xe) {
                            Ve && (Xe = ke, ke = i[Xe]), Na(A, Xe, zn(ke, a, l, Xe, i, E))
                        }), A
                    }

                    function V0(i) {
                        var a = Xt(i);
                        return function(l) {
                            return Wg(l, i, a)
                        }
                    }

                    function Wg(i, a, l) {
                        var d = l.length;
                        if (i == null) return !d;
                        for (i = vt(i); d--;) {
                            var v = l[d],
                                E = a[v],
                                A = i[v];
                            if (A === n && !(v in i) || !E(A)) return !1
                        }
                        return !0
                    }

                    function jg(i, a, l) {
                        if (typeof i != "function") throw new Yn(c);
                        return xa(function() {
                            i.apply(n, l)
                        }, a)
                    }

                    function La(i, a, l, d) {
                        var v = -1,
                            E = Uo,
                            A = !0,
                            L = i.length,
                            U = [],
                            te = a.length;
                        if (!L) return U;
                        l && (a = It(a, $n(l))), d ? (E = mu, A = !1) : a.length >= s && (E = Oa, A = !1, a = new Ui(a));
                        e: for (; ++v < L;) {
                            var ne = i[v],
                                oe = l == null ? ne : l(ne);
                            if (ne = d || ne !== 0 ? ne : 0, A && oe === oe) {
                                for (var ge = te; ge--;)
                                    if (a[ge] === oe) continue e;
                                U.push(ne)
                            } else E(a, oe, d) || U.push(ne)
                        }
                        return U
                    }
                    var Qr = mm(gr),
                        Hg = mm($u, !0);

                    function Y0(i, a) {
                        var l = !0;
                        return Qr(i, function(d, v, E) {
                            return l = !!a(d, v, E), l
                        }), l
                    }

                    function nc(i, a, l) {
                        for (var d = -1, v = i.length; ++d < v;) {
                            var E = i[d],
                                A = a(E);
                            if (A != null && (L === n ? A === A && !kn(A) : l(A, L))) var L = A,
                                U = E
                        }
                        return U
                    }

                    function q0(i, a, l, d) {
                        var v = i.length;
                        for (l = He(l), l < 0 && (l = -l > v ? 0 : v + l), d = d === n || d > v ? v : He(d), d < 0 && (d += v), d = l > d ? 0 : ov(d); l < d;) i[l++] = a;
                        return i
                    }

                    function Kg(i, a) {
                        var l = [];
                        return Qr(i, function(d, v, E) {
                            a(d, v, E) && l.push(d)
                        }), l
                    }

                    function rn(i, a, l, d, v) {
                        var E = -1,
                            A = i.length;
                        for (l || (l = MA), v || (v = []); ++E < A;) {
                            var L = i[E];
                            a > 0 && l(L) ? a > 1 ? rn(L, a - 1, l, d, v) : zr(v, L) : d || (v[v.length] = L)
                        }
                        return v
                    }
                    var Lu = vm(),
                        Vg = vm(!0);

                    function gr(i, a) {
                        return i && Lu(i, a, Xt)
                    }

                    function $u(i, a) {
                        return i && Vg(i, a, Xt)
                    }

                    function rc(i, a) {
                        return qr(a, function(l) {
                            return Dr(i[l])
                        })
                    }

                    function Bi(i, a) {
                        a = ei(a, i);
                        for (var l = 0, d = a.length; i != null && l < d;) i = i[vr(a[l++])];
                        return l && l == d ? i : n
                    }

                    function Yg(i, a, l) {
                        var d = a(i);
                        return We(i) ? d : zr(d, l(i))
                    }

                    function _n(i) {
                        return i == null ? i === n ? he : x : Mi && Mi in vt(i) ? NA(i) : jA(i)
                    }

                    function Pu(i, a) {
                        return i > a
                    }

                    function z0(i, a) {
                        return i != null && pt.call(i, a)
                    }

                    function X0(i, a) {
                        return i != null && a in vt(i)
                    }

                    function J0(i, a, l) {
                        return i >= un(a, l) && i < Kt(a, l)
                    }

                    function ku(i, a, l) {
                        for (var d = l ? mu : Uo, v = i[0].length, E = i.length, A = E, L = V(E), U = 1 / 0, te = []; A--;) {
                            var ne = i[A];
                            A && a && (ne = It(ne, $n(a))), U = un(ne.length, U), L[A] = !l && (a || v >= 120 && ne.length >= 120) ? new Ui(A && ne) : n
                        }
                        ne = i[0];
                        var oe = -1,
                            ge = L[0];
                        e: for (; ++oe < v && te.length < U;) {
                            var we = ne[oe],
                                Pe = a ? a(we) : we;
                            if (we = l || we !== 0 ? we : 0, !(ge ? Oa(ge, Pe) : d(te, Pe, l))) {
                                for (A = E; --A;) {
                                    var Ve = L[A];
                                    if (!(Ve ? Oa(Ve, Pe) : d(i[A], Pe, l))) continue e
                                }
                                ge && ge.push(Pe), te.push(we)
                            }
                        }
                        return te
                    }

                    function Q0(i, a, l, d) {
                        return gr(i, function(v, E, A) {
                            a(d, l(v), E, A)
                        }), d
                    }

                    function $a(i, a, l) {
                        a = ei(a, i), i = km(i, a);
                        var d = i == null ? i : i[vr(Jn(a))];
                        return d == null ? n : Ln(d, i, l)
                    }

                    function qg(i) {
                        return Pt(i) && _n(i) == wt
                    }

                    function Z0(i) {
                        return Pt(i) && _n(i) == xe
                    }

                    function eA(i) {
                        return Pt(i) && _n(i) == st
                    }

                    function Pa(i, a, l, d, v) {
                        return i === a ? !0 : i == null || a == null || !Pt(i) && !Pt(a) ? i !== i && a !== a : tA(i, a, l, d, Pa, v)
                    }

                    function tA(i, a, l, d, v, E) {
                        var A = We(i),
                            L = We(a),
                            U = A ? zt : fn(i),
                            te = L ? zt : fn(a);
                        U = U == wt ? B : U, te = te == wt ? B : te;
                        var ne = U == B,
                            oe = te == B,
                            ge = U == te;
                        if (ge && ni(i)) {
                            if (!ni(a)) return !1;
                            A = !0, ne = !1
                        }
                        if (ge && !ne) return E || (E = new sr), A || As(i) ? Am(i, a, l, d, v, E) : IA(i, a, U, l, d, v, E);
                        if (!(l & R)) {
                            var we = ne && pt.call(i, "__wrapped__"),
                                Pe = oe && pt.call(a, "__wrapped__");
                            if (we || Pe) {
                                var Ve = we ? i.value() : i,
                                    ke = Pe ? a.value() : a;
                                return E || (E = new sr), v(Ve, ke, l, d, E)
                            }
                        }
                        return ge ? (E || (E = new sr), RA(i, a, l, d, v, E)) : !1
                    }

                    function nA(i) {
                        return Pt(i) && fn(i) == p
                    }

                    function Du(i, a, l, d) {
                        var v = l.length,
                            E = v,
                            A = !d;
                        if (i == null) return !E;
                        for (i = vt(i); v--;) {
                            var L = l[v];
                            if (A && L[2] ? L[1] !== i[L[0]] : !(L[0] in i)) return !1
                        }
                        for (; ++v < E;) {
                            L = l[v];
                            var U = L[0],
                                te = i[U],
                                ne = L[1];
                            if (A && L[2]) {
                                if (te === n && !(U in i)) return !1
                            } else {
                                var oe = new sr;
                                if (d) var ge = d(te, ne, U, i, a, oe);
                                if (!(ge === n ? Pa(ne, te, R | M, d, oe) : ge)) return !1
                            }
                        }
                        return !0
                    }

                    function zg(i) {
                        if (!Lt(i) || UA(i)) return !1;
                        var a = Dr(i) ? n0 : Vw;
                        return a.test(Wi(i))
                    }

                    function rA(i) {
                        return Pt(i) && _n(i) == Z
                    }

                    function iA(i) {
                        return Pt(i) && fn(i) == X
                    }

                    function sA(i) {
                        return Pt(i) && Ec(i.length) && !!Ct[_n(i)]
                    }

                    function Xg(i) {
                        return typeof i == "function" ? i : i == null ? An : typeof i == "object" ? We(i) ? Zg(i[0], i[1]) : Qg(i) : _v(i)
                    }

                    function Mu(i) {
                        if (!Ma(i)) return c0(i);
                        var a = [];
                        for (var l in vt(i)) pt.call(i, l) && l != "constructor" && a.push(l);
                        return a
                    }

                    function aA(i) {
                        if (!Lt(i)) return WA(i);
                        var a = Ma(i),
                            l = [];
                        for (var d in i) d == "constructor" && (a || !pt.call(i, d)) || l.push(d);
                        return l
                    }

                    function xu(i, a) {
                        return i < a
                    }

                    function Jg(i, a) {
                        var l = -1,
                            d = wn(i) ? V(i.length) : [];
                        return Qr(i, function(v, E, A) {
                            d[++l] = a(v, E, A)
                        }), d
                    }

                    function Qg(i) {
                        var a = Qu(i);
                        return a.length == 1 && a[0][2] ? $m(a[0][0], a[0][1]) : function(l) {
                            return l === i || Du(l, i, a)
                        }
                    }

                    function Zg(i, a) {
                        return ef(i) && Lm(a) ? $m(vr(i), a) : function(l) {
                            var d = ff(l, i);
                            return d === n && d === a ? df(l, i) : Pa(a, d, R | M)
                        }
                    }

                    function ic(i, a, l, d, v) {
                        i !== a && Lu(a, function(E, A) {
                            if (v || (v = new sr), Lt(E)) oA(i, a, A, l, ic, d, v);
                            else {
                                var L = d ? d(nf(i, A), E, A + "", i, a, v) : n;
                                L === n && (L = E), Ru(i, A, L)
                            }
                        }, Cn)
                    }

                    function oA(i, a, l, d, v, E, A) {
                        var L = nf(i, l),
                            U = nf(a, l),
                            te = A.get(U);
                        if (te) {
                            Ru(i, l, te);
                            return
                        }
                        var ne = E ? E(L, U, l + "", i, a, A) : n,
                            oe = ne === n;
                        if (oe) {
                            var ge = We(U),
                                we = !ge && ni(U),
                                Pe = !ge && !we && As(U);
                            ne = U, ge || we || Pe ? We(L) ? ne = L : Mt(L) ? ne = On(L) : we ? (oe = !1, ne = fm(U, !0)) : Pe ? (oe = !1, ne = dm(U, !0)) : ne = [] : Ua(U) || ji(U) ? (ne = L, ji(L) ? ne = cv(L) : (!Lt(L) || Dr(L)) && (ne = Nm(U))) : oe = !1
                        }
                        oe && (A.set(U, ne), v(ne, U, d, E, A), A.delete(U)), Ru(i, l, ne)
                    }

                    function em(i, a) {
                        var l = i.length;
                        if (!!l) return a += a < 0 ? l : 0, kr(a, l) ? i[a] : n
                    }

                    function tm(i, a, l) {
                        a.length ? a = It(a, function(E) {
                            return We(E) ? function(A) {
                                return Bi(A, E.length === 1 ? E[0] : E)
                            } : E
                        }) : a = [An];
                        var d = -1;
                        a = It(a, $n($e()));
                        var v = Jg(i, function(E, A, L) {
                            var U = It(a, function(te) {
                                return te(E)
                            });
                            return {
                                criteria: U,
                                index: ++d,
                                value: E
                            }
                        });
                        return kC(v, function(E, A) {
                            return EA(E, A, l)
                        })
                    }

                    function cA(i, a) {
                        return nm(i, a, function(l, d) {
                            return df(i, d)
                        })
                    }

                    function nm(i, a, l) {
                        for (var d = -1, v = a.length, E = {}; ++d < v;) {
                            var A = a[d],
                                L = Bi(i, A);
                            l(L, A) && ka(E, ei(A, i), L)
                        }
                        return E
                    }

                    function lA(i) {
                        return function(a) {
                            return Bi(a, i)
                        }
                    }

                    function Uu(i, a, l, d) {
                        var v = d ? PC : ms,
                            E = -1,
                            A = a.length,
                            L = i;
                        for (i === a && (a = On(a)), l && (L = It(i, $n(l))); ++E < A;)
                            for (var U = 0, te = a[E], ne = l ? l(te) : te;
                                (U = v(L, ne, U, d)) > -1;) L !== i && qo.call(L, U, 1), qo.call(i, U, 1);
                        return i
                    }

                    function rm(i, a) {
                        for (var l = i ? a.length : 0, d = l - 1; l--;) {
                            var v = a[l];
                            if (l == d || v !== E) {
                                var E = v;
                                kr(v) ? qo.call(i, v, 1) : Wu(i, v)
                            }
                        }
                        return i
                    }

                    function Fu(i, a) {
                        return i + Jo(xg() * (a - i + 1))
                    }

                    function uA(i, a, l, d) {
                        for (var v = -1, E = Kt(Xo((a - i) / (l || 1)), 0), A = V(E); E--;) A[d ? E : ++v] = i, i += l;
                        return A
                    }

                    function Bu(i, a) {
                        var l = "";
                        if (!i || a < 1 || a > me) return l;
                        do a % 2 && (l += i), a = Jo(a / 2), a && (i += i); while (a);
                        return l
                    }

                    function qe(i, a) {
                        return rf(Pm(i, a, An), i + "")
                    }

                    function fA(i) {
                        return Bg(Is(i))
                    }

                    function dA(i, a) {
                        var l = Is(i);
                        return pc(l, Fi(a, 0, l.length))
                    }

                    function ka(i, a, l, d) {
                        if (!Lt(i)) return i;
                        a = ei(a, i);
                        for (var v = -1, E = a.length, A = E - 1, L = i; L != null && ++v < E;) {
                            var U = vr(a[v]),
                                te = l;
                            if (U === "__proto__" || U === "constructor" || U === "prototype") return i;
                            if (v != A) {
                                var ne = L[U];
                                te = d ? d(ne, U, L) : n, te === n && (te = Lt(ne) ? ne : kr(a[v + 1]) ? [] : {})
                            }
                            Na(L, U, te), L = L[U]
                        }
                        return i
                    }
                    var im = Qo ? function(i, a) {
                            return Qo.set(i, a), i
                        } : An,
                        hA = zo ? function(i, a) {
                            return zo(i, "toString", {
                                configurable: !0,
                                enumerable: !1,
                                value: pf(a),
                                writable: !0
                            })
                        } : An;

                    function pA(i) {
                        return pc(Is(i))
                    }

                    function Xn(i, a, l) {
                        var d = -1,
                            v = i.length;
                        a < 0 && (a = -a > v ? 0 : v + a), l = l > v ? v : l, l < 0 && (l += v), v = a > l ? 0 : l - a >>> 0, a >>>= 0;
                        for (var E = V(v); ++d < v;) E[d] = i[d + a];
                        return E
                    }

                    function gA(i, a) {
                        var l;
                        return Qr(i, function(d, v, E) {
                            return l = a(d, v, E), !l
                        }), !!l
                    }

                    function sc(i, a, l) {
                        var d = 0,
                            v = i == null ? d : i.length;
                        if (typeof a == "number" && a === a && v <= Ot) {
                            for (; d < v;) {
                                var E = d + v >>> 1,
                                    A = i[E];
                                A !== null && !kn(A) && (l ? A <= a : A < a) ? d = E + 1 : v = E
                            }
                            return v
                        }
                        return Gu(i, a, An, l)
                    }

                    function Gu(i, a, l, d) {
                        var v = 0,
                            E = i == null ? 0 : i.length;
                        if (E === 0) return 0;
                        a = l(a);
                        for (var A = a !== a, L = a === null, U = kn(a), te = a === n; v < E;) {
                            var ne = Jo((v + E) / 2),
                                oe = l(i[ne]),
                                ge = oe !== n,
                                we = oe === null,
                                Pe = oe === oe,
                                Ve = kn(oe);
                            if (A) var ke = d || Pe;
                            else te ? ke = Pe && (d || ge) : L ? ke = Pe && ge && (d || !we) : U ? ke = Pe && ge && !we && (d || !Ve) : we || Ve ? ke = !1 : ke = d ? oe <= a : oe < a;
                            ke ? v = ne + 1 : E = ne
                        }
                        return un(E, Je)
                    }

                    function sm(i, a) {
                        for (var l = -1, d = i.length, v = 0, E = []; ++l < d;) {
                            var A = i[l],
                                L = a ? a(A) : A;
                            if (!l || !ar(L, U)) {
                                var U = L;
                                E[v++] = A === 0 ? 0 : A
                            }
                        }
                        return E
                    }

                    function am(i) {
                        return typeof i == "number" ? i : kn(i) ? Me : +i
                    }

                    function Pn(i) {
                        if (typeof i == "string") return i;
                        if (We(i)) return It(i, Pn) + "";
                        if (kn(i)) return Ug ? Ug.call(i) : "";
                        var a = i + "";
                        return a == "0" && 1 / i == -_e ? "-0" : a
                    }

                    function Zr(i, a, l) {
                        var d = -1,
                            v = Uo,
                            E = i.length,
                            A = !0,
                            L = [],
                            U = L;
                        if (l) A = !1, v = mu;
                        else if (E >= s) {
                            var te = a ? null : CA(i);
                            if (te) return Bo(te);
                            A = !1, v = Oa, U = new Ui
                        } else U = a ? [] : L;
                        e: for (; ++d < E;) {
                            var ne = i[d],
                                oe = a ? a(ne) : ne;
                            if (ne = l || ne !== 0 ? ne : 0, A && oe === oe) {
                                for (var ge = U.length; ge--;)
                                    if (U[ge] === oe) continue e;
                                a && U.push(oe), L.push(ne)
                            } else v(U, oe, l) || (U !== L && U.push(oe), L.push(ne))
                        }
                        return L
                    }

                    function Wu(i, a) {
                        return a = ei(a, i), i = km(i, a), i == null || delete i[vr(Jn(a))]
                    }

                    function om(i, a, l, d) {
                        return ka(i, a, l(Bi(i, a)), d)
                    }

                    function ac(i, a, l, d) {
                        for (var v = i.length, E = d ? v : -1;
                            (d ? E-- : ++E < v) && a(i[E], E, i););
                        return l ? Xn(i, d ? 0 : E, d ? E + 1 : v) : Xn(i, d ? E + 1 : 0, d ? v : E)
                    }

                    function cm(i, a) {
                        var l = i;
                        return l instanceof Qe && (l = l.value()), vu(a, function(d, v) {
                            return v.func.apply(v.thisArg, zr([d], v.args))
                        }, l)
                    }

                    function ju(i, a, l) {
                        var d = i.length;
                        if (d < 2) return d ? Zr(i[0]) : [];
                        for (var v = -1, E = V(d); ++v < d;)
                            for (var A = i[v], L = -1; ++L < d;) L != v && (E[v] = La(E[v] || A, i[L], a, l));
                        return Zr(rn(E, 1), a, l)
                    }

                    function lm(i, a, l) {
                        for (var d = -1, v = i.length, E = a.length, A = {}; ++d < v;) {
                            var L = d < E ? a[d] : n;
                            l(A, i[d], L)
                        }
                        return A
                    }

                    function Hu(i) {
                        return Mt(i) ? i : []
                    }

                    function Ku(i) {
                        return typeof i == "function" ? i : An
                    }

                    function ei(i, a) {
                        return We(i) ? i : ef(i, a) ? [i] : Um(lt(i))
                    }
                    var mA = qe;

                    function ti(i, a, l) {
                        var d = i.length;
                        return l = l === n ? d : l, !a && l >= d ? i : Xn(i, a, l)
                    }
                    var um = r0 || function(i) {
                        return nn.clearTimeout(i)
                    };

                    function fm(i, a) {
                        if (a) return i.slice();
                        var l = i.length,
                            d = $g ? $g(l) : new i.constructor(l);
                        return i.copy(d), d
                    }

                    function Vu(i) {
                        var a = new i.constructor(i.byteLength);
                        return new Vo(a).set(new Vo(i)), a
                    }

                    function vA(i, a) {
                        var l = a ? Vu(i.buffer) : i.buffer;
                        return new i.constructor(l, i.byteOffset, i.byteLength)
                    }

                    function _A(i) {
                        var a = new i.constructor(i.source, qp.exec(i));
                        return a.lastIndex = i.lastIndex, a
                    }

                    function yA(i) {
                        return Ra ? vt(Ra.call(i)) : {}
                    }

                    function dm(i, a) {
                        var l = a ? Vu(i.buffer) : i.buffer;
                        return new i.constructor(l, i.byteOffset, i.length)
                    }

                    function hm(i, a) {
                        if (i !== a) {
                            var l = i !== n,
                                d = i === null,
                                v = i === i,
                                E = kn(i),
                                A = a !== n,
                                L = a === null,
                                U = a === a,
                                te = kn(a);
                            if (!L && !te && !E && i > a || E && A && U && !L && !te || d && A && U || !l && U || !v) return 1;
                            if (!d && !E && !te && i < a || te && l && v && !d && !E || L && l && v || !A && v || !U) return -1
                        }
                        return 0
                    }

                    function EA(i, a, l) {
                        for (var d = -1, v = i.criteria, E = a.criteria, A = v.length, L = l.length; ++d < A;) {
                            var U = hm(v[d], E[d]);
                            if (U) {
                                if (d >= L) return U;
                                var te = l[d];
                                return U * (te == "desc" ? -1 : 1)
                            }
                        }
                        return i.index - a.index
                    }

                    function pm(i, a, l, d) {
                        for (var v = -1, E = i.length, A = l.length, L = -1, U = a.length, te = Kt(E - A, 0), ne = V(U + te), oe = !d; ++L < U;) ne[L] = a[L];
                        for (; ++v < A;)(oe || v < E) && (ne[l[v]] = i[v]);
                        for (; te--;) ne[L++] = i[v++];
                        return ne
                    }

                    function gm(i, a, l, d) {
                        for (var v = -1, E = i.length, A = -1, L = l.length, U = -1, te = a.length, ne = Kt(E - L, 0), oe = V(ne + te), ge = !d; ++v < ne;) oe[v] = i[v];
                        for (var we = v; ++U < te;) oe[we + U] = a[U];
                        for (; ++A < L;)(ge || v < E) && (oe[we + l[A]] = i[v++]);
                        return oe
                    }

                    function On(i, a) {
                        var l = -1,
                            d = i.length;
                        for (a || (a = V(d)); ++l < d;) a[l] = i[l];
                        return a
                    }

                    function mr(i, a, l, d) {
                        var v = !l;
                        l || (l = {});
                        for (var E = -1, A = a.length; ++E < A;) {
                            var L = a[E],
                                U = d ? d(l[L], i[L], L, l, i) : n;
                            U === n && (U = i[L]), v ? Lr(l, L, U) : Na(l, L, U)
                        }
                        return l
                    }

                    function bA(i, a) {
                        return mr(i, Zu(i), a)
                    }

                    function TA(i, a) {
                        return mr(i, Im(i), a)
                    }

                    function oc(i, a) {
                        return function(l, d) {
                            var v = We(l) ? AC : H0,
                                E = a ? a() : {};
                            return v(l, i, $e(d, 2), E)
                        }
                    }

                    function Os(i) {
                        return qe(function(a, l) {
                            var d = -1,
                                v = l.length,
                                E = v > 1 ? l[v - 1] : n,
                                A = v > 2 ? l[2] : n;
                            for (E = i.length > 3 && typeof E == "function" ? (v--, E) : n, A && yn(l[0], l[1], A) && (E = v < 3 ? n : E, v = 1), a = vt(a); ++d < v;) {
                                var L = l[d];
                                L && i(a, L, d, E)
                            }
                            return a
                        })
                    }

                    function mm(i, a) {
                        return function(l, d) {
                            if (l == null) return l;
                            if (!wn(l)) return i(l, d);
                            for (var v = l.length, E = a ? v : -1, A = vt(l);
                                (a ? E-- : ++E < v) && d(A[E], E, A) !== !1;);
                            return l
                        }
                    }

                    function vm(i) {
                        return function(a, l, d) {
                            for (var v = -1, E = vt(a), A = d(a), L = A.length; L--;) {
                                var U = A[i ? L : ++v];
                                if (l(E[U], U, E) === !1) break
                            }
                            return a
                        }
                    }

                    function SA(i, a, l) {
                        var d = a & W,
                            v = Da(i);

                        function E() {
                            var A = this && this !== nn && this instanceof E ? v : i;
                            return A.apply(d ? l : this, arguments)
                        }
                        return E
                    }

                    function _m(i) {
                        return function(a) {
                            a = lt(a);
                            var l = vs(a) ? ir(a) : n,
                                d = l ? l[0] : a.charAt(0),
                                v = l ? ti(l, 1).join("") : a.slice(1);
                            return d[i]() + v
                        }
                    }

                    function ws(i) {
                        return function(a) {
                            return vu(mv(gv(a).replace(hC, "")), i, "")
                        }
                    }

                    function Da(i) {
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
                            var l = Ss(i.prototype),
                                d = i.apply(l, a);
                            return Lt(d) ? d : l
                        }
                    }

                    function OA(i, a, l) {
                        var d = Da(i);

                        function v() {
                            for (var E = arguments.length, A = V(E), L = E, U = Cs(v); L--;) A[L] = arguments[L];
                            var te = E < 3 && A[0] !== U && A[E - 1] !== U ? [] : Xr(A, U);
                            if (E -= te.length, E < l) return Sm(i, a, cc, v.placeholder, n, A, te, n, n, l - E);
                            var ne = this && this !== nn && this instanceof v ? d : i;
                            return Ln(ne, this, A)
                        }
                        return v
                    }

                    function ym(i) {
                        return function(a, l, d) {
                            var v = vt(a);
                            if (!wn(a)) {
                                var E = $e(l, 3);
                                a = Xt(a), l = function(L) {
                                    return E(v[L], L, v)
                                }
                            }
                            var A = i(a, l, d);
                            return A > -1 ? v[E ? a[A] : A] : n
                        }
                    }

                    function Em(i) {
                        return Pr(function(a) {
                            var l = a.length,
                                d = l,
                                v = qn.prototype.thru;
                            for (i && a.reverse(); d--;) {
                                var E = a[d];
                                if (typeof E != "function") throw new Yn(c);
                                if (v && !A && dc(E) == "wrapper") var A = new qn([], !0)
                            }
                            for (d = A ? d : l; ++d < l;) {
                                E = a[d];
                                var L = dc(E),
                                    U = L == "wrapper" ? Ju(E) : n;
                                U && tf(U[0]) && U[1] == (ce | q | G | le) && !U[4].length && U[9] == 1 ? A = A[dc(U[0])].apply(A, U[3]) : A = E.length == 1 && tf(E) ? A[L]() : A.thru(E)
                            }
                            return function() {
                                var te = arguments,
                                    ne = te[0];
                                if (A && te.length == 1 && We(ne)) return A.plant(ne).value();
                                for (var oe = 0, ge = l ? a[oe].apply(this, te) : ne; ++oe < l;) ge = a[oe].call(this, ge);
                                return ge
                            }
                        })
                    }

                    function cc(i, a, l, d, v, E, A, L, U, te) {
                        var ne = a & ce,
                            oe = a & W,
                            ge = a & I,
                            we = a & (q | j),
                            Pe = a & ue,
                            Ve = ge ? n : Da(i);

                        function ke() {
                            for (var Xe = arguments.length, Ze = V(Xe), Dn = Xe; Dn--;) Ze[Dn] = arguments[Dn];
                            if (we) var En = Cs(ke),
                                Mn = MC(Ze, En);
                            if (d && (Ze = pm(Ze, d, v, we)), E && (Ze = gm(Ze, E, A, we)), Xe -= Mn, we && Xe < te) {
                                var xt = Xr(Ze, En);
                                return Sm(i, a, cc, ke.placeholder, l, Ze, xt, L, U, te - Xe)
                            }
                            var or = oe ? l : this,
                                xr = ge ? or[i] : i;
                            return Xe = Ze.length, L ? Ze = HA(Ze, L) : Pe && Xe > 1 && Ze.reverse(), ne && U < Xe && (Ze.length = U), this && this !== nn && this instanceof ke && (xr = Ve || Da(xr)), xr.apply(or, Ze)
                        }
                        return ke
                    }

                    function bm(i, a) {
                        return function(l, d) {
                            return Q0(l, i, a(d), {})
                        }
                    }

                    function lc(i, a) {
                        return function(l, d) {
                            var v;
                            if (l === n && d === n) return a;
                            if (l !== n && (v = l), d !== n) {
                                if (v === n) return d;
                                typeof l == "string" || typeof d == "string" ? (l = Pn(l), d = Pn(d)) : (l = am(l), d = am(d)), v = i(l, d)
                            }
                            return v
                        }
                    }

                    function Yu(i) {
                        return Pr(function(a) {
                            return a = It(a, $n($e())), qe(function(l) {
                                var d = this;
                                return i(a, function(v) {
                                    return Ln(v, d, l)
                                })
                            })
                        })
                    }

                    function uc(i, a) {
                        a = a === n ? " " : Pn(a);
                        var l = a.length;
                        if (l < 2) return l ? Bu(a, i) : a;
                        var d = Bu(a, Xo(i / _s(a)));
                        return vs(a) ? ti(ir(d), 0, i).join("") : d.slice(0, i)
                    }

                    function wA(i, a, l, d) {
                        var v = a & W,
                            E = Da(i);

                        function A() {
                            for (var L = -1, U = arguments.length, te = -1, ne = d.length, oe = V(ne + U), ge = this && this !== nn && this instanceof A ? E : i; ++te < ne;) oe[te] = d[te];
                            for (; U--;) oe[te++] = arguments[++L];
                            return Ln(ge, v ? l : this, oe)
                        }
                        return A
                    }

                    function Tm(i) {
                        return function(a, l, d) {
                            return d && typeof d != "number" && yn(a, l, d) && (l = d = n), a = Mr(a), l === n ? (l = a, a = 0) : l = Mr(l), d = d === n ? a < l ? 1 : -1 : Mr(d), uA(a, l, d, i)
                        }
                    }

                    function fc(i) {
                        return function(a, l) {
                            return typeof a == "string" && typeof l == "string" || (a = Qn(a), l = Qn(l)), i(a, l)
                        }
                    }

                    function Sm(i, a, l, d, v, E, A, L, U, te) {
                        var ne = a & q,
                            oe = ne ? A : n,
                            ge = ne ? n : A,
                            we = ne ? E : n,
                            Pe = ne ? n : E;
                        a |= ne ? G : se, a &= ~(ne ? se : G), a & K || (a &= ~(W | I));
                        var Ve = [i, a, v, we, oe, Pe, ge, L, U, te],
                            ke = l.apply(n, Ve);
                        return tf(i) && Dm(ke, Ve), ke.placeholder = d, Mm(ke, i, a)
                    }

                    function qu(i) {
                        var a = Ht[i];
                        return function(l, d) {
                            if (l = Qn(l), d = d == null ? 0 : un(He(d), 292), d && Mg(l)) {
                                var v = (lt(l) + "e").split("e"),
                                    E = a(v[0] + "e" + (+v[1] + d));
                                return v = (lt(E) + "e").split("e"), +(v[0] + "e" + (+v[1] - d))
                            }
                            return a(l)
                        }
                    }
                    var CA = bs && 1 / Bo(new bs([, -0]))[1] == _e ? function(i) {
                        return new bs(i)
                    } : vf;

                    function Om(i) {
                        return function(a) {
                            var l = fn(a);
                            return l == p ? Ou(a) : l == X ? jC(a) : DC(a, i(a))
                        }
                    }

                    function $r(i, a, l, d, v, E, A, L) {
                        var U = a & I;
                        if (!U && typeof i != "function") throw new Yn(c);
                        var te = d ? d.length : 0;
                        if (te || (a &= ~(G | se), d = v = n), A = A === n ? A : Kt(He(A), 0), L = L === n ? L : He(L), te -= v ? v.length : 0, a & se) {
                            var ne = d,
                                oe = v;
                            d = v = n
                        }
                        var ge = U ? n : Ju(i),
                            we = [i, a, l, d, v, ne, oe, E, A, L];
                        if (ge && GA(we, ge), i = we[0], a = we[1], l = we[2], d = we[3], v = we[4], L = we[9] = we[9] === n ? U ? 0 : i.length : Kt(we[9] - te, 0), !L && a & (q | j) && (a &= ~(q | j)), !a || a == W) var Pe = SA(i, a, l);
                        else a == q || a == j ? Pe = OA(i, a, L) : (a == G || a == (W | G)) && !v.length ? Pe = wA(i, a, l, d) : Pe = cc.apply(n, we);
                        var Ve = ge ? im : Dm;
                        return Mm(Ve(Pe, we), i, a)
                    }

                    function wm(i, a, l, d) {
                        return i === n || ar(i, Es[l]) && !pt.call(d, l) ? a : i
                    }

                    function Cm(i, a, l, d, v, E) {
                        return Lt(i) && Lt(a) && (E.set(a, i), ic(i, a, n, Cm, E), E.delete(a)), i
                    }

                    function AA(i) {
                        return Ua(i) ? n : i
                    }

                    function Am(i, a, l, d, v, E) {
                        var A = l & R,
                            L = i.length,
                            U = a.length;
                        if (L != U && !(A && U > L)) return !1;
                        var te = E.get(i),
                            ne = E.get(a);
                        if (te && ne) return te == a && ne == i;
                        var oe = -1,
                            ge = !0,
                            we = l & M ? new Ui : n;
                        for (E.set(i, a), E.set(a, i); ++oe < L;) {
                            var Pe = i[oe],
                                Ve = a[oe];
                            if (d) var ke = A ? d(Ve, Pe, oe, a, i, E) : d(Pe, Ve, oe, i, a, E);
                            if (ke !== n) {
                                if (ke) continue;
                                ge = !1;
                                break
                            }
                            if (we) {
                                if (!_u(a, function(Xe, Ze) {
                                        if (!Oa(we, Ze) && (Pe === Xe || v(Pe, Xe, l, d, E))) return we.push(Ze)
                                    })) {
                                    ge = !1;
                                    break
                                }
                            } else if (!(Pe === Ve || v(Pe, Ve, l, d, E))) {
                                ge = !1;
                                break
                            }
                        }
                        return E.delete(i), E.delete(a), ge
                    }

                    function IA(i, a, l, d, v, E, A) {
                        switch (l) {
                            case w:
                                if (i.byteLength != a.byteLength || i.byteOffset != a.byteOffset) return !1;
                                i = i.buffer, a = a.buffer;
                            case xe:
                                return !(i.byteLength != a.byteLength || !E(new Vo(i), new Vo(a)));
                            case mt:
                            case st:
                            case O:
                                return ar(+i, +a);
                            case Dt:
                                return i.name == a.name && i.message == a.message;
                            case Z:
                            case N:
                                return i == a + "";
                            case p:
                                var L = Ou;
                            case X:
                                var U = d & R;
                                if (L || (L = Bo), i.size != a.size && !U) return !1;
                                var te = A.get(i);
                                if (te) return te == a;
                                d |= M, A.set(i, a);
                                var ne = Am(L(i), L(a), d, v, E, A);
                                return A.delete(i), ne;
                            case H:
                                if (Ra) return Ra.call(i) == Ra.call(a)
                        }
                        return !1
                    }

                    function RA(i, a, l, d, v, E) {
                        var A = l & R,
                            L = zu(i),
                            U = L.length,
                            te = zu(a),
                            ne = te.length;
                        if (U != ne && !A) return !1;
                        for (var oe = U; oe--;) {
                            var ge = L[oe];
                            if (!(A ? ge in a : pt.call(a, ge))) return !1
                        }
                        var we = E.get(i),
                            Pe = E.get(a);
                        if (we && Pe) return we == a && Pe == i;
                        var Ve = !0;
                        E.set(i, a), E.set(a, i);
                        for (var ke = A; ++oe < U;) {
                            ge = L[oe];
                            var Xe = i[ge],
                                Ze = a[ge];
                            if (d) var Dn = A ? d(Ze, Xe, ge, a, i, E) : d(Xe, Ze, ge, i, a, E);
                            if (!(Dn === n ? Xe === Ze || v(Xe, Ze, l, d, E) : Dn)) {
                                Ve = !1;
                                break
                            }
                            ke || (ke = ge == "constructor")
                        }
                        if (Ve && !ke) {
                            var En = i.constructor,
                                Mn = a.constructor;
                            En != Mn && "constructor" in i && "constructor" in a && !(typeof En == "function" && En instanceof En && typeof Mn == "function" && Mn instanceof Mn) && (Ve = !1)
                        }
                        return E.delete(i), E.delete(a), Ve
                    }

                    function Pr(i) {
                        return rf(Pm(i, n, Wm), i + "")
                    }

                    function zu(i) {
                        return Yg(i, Xt, Zu)
                    }

                    function Xu(i) {
                        return Yg(i, Cn, Im)
                    }
                    var Ju = Qo ? function(i) {
                        return Qo.get(i)
                    } : vf;

                    function dc(i) {
                        for (var a = i.name + "", l = Ts[a], d = pt.call(Ts, a) ? l.length : 0; d--;) {
                            var v = l[d],
                                E = v.func;
                            if (E == null || E == i) return v.name
                        }
                        return a
                    }

                    function Cs(i) {
                        var a = pt.call(_, "placeholder") ? _ : i;
                        return a.placeholder
                    }

                    function $e() {
                        var i = _.iteratee || gf;
                        return i = i === gf ? Xg : i, arguments.length ? i(arguments[0], arguments[1]) : i
                    }

                    function hc(i, a) {
                        var l = i.__data__;
                        return xA(a) ? l[typeof a == "string" ? "string" : "hash"] : l.map
                    }

                    function Qu(i) {
                        for (var a = Xt(i), l = a.length; l--;) {
                            var d = a[l],
                                v = i[d];
                            a[l] = [d, v, Lm(v)]
                        }
                        return a
                    }

                    function Gi(i, a) {
                        var l = BC(i, a);
                        return zg(l) ? l : n
                    }

                    function NA(i) {
                        var a = pt.call(i, Mi),
                            l = i[Mi];
                        try {
                            i[Mi] = n;
                            var d = !0
                        } catch {}
                        var v = Ho.call(i);
                        return d && (a ? i[Mi] = l : delete i[Mi]), v
                    }
                    var Zu = Cu ? function(i) {
                            return i == null ? [] : (i = vt(i), qr(Cu(i), function(a) {
                                return kg.call(i, a)
                            }))
                        } : _f,
                        Im = Cu ? function(i) {
                            for (var a = []; i;) zr(a, Zu(i)), i = Yo(i);
                            return a
                        } : _f,
                        fn = _n;
                    (Au && fn(new Au(new ArrayBuffer(1))) != w || Ca && fn(new Ca) != p || Iu && fn(Iu.resolve()) != k || bs && fn(new bs) != X || Aa && fn(new Aa) != pe) && (fn = function(i) {
                        var a = _n(i),
                            l = a == B ? i.constructor : n,
                            d = l ? Wi(l) : "";
                        if (d) switch (d) {
                            case d0:
                                return w;
                            case h0:
                                return p;
                            case p0:
                                return k;
                            case g0:
                                return X;
                            case m0:
                                return pe
                        }
                        return a
                    });

                    function LA(i, a, l) {
                        for (var d = -1, v = l.length; ++d < v;) {
                            var E = l[d],
                                A = E.size;
                            switch (E.type) {
                                case "drop":
                                    i += A;
                                    break;
                                case "dropRight":
                                    a -= A;
                                    break;
                                case "take":
                                    a = un(a, i + A);
                                    break;
                                case "takeRight":
                                    i = Kt(i, a - A);
                                    break
                            }
                        }
                        return {
                            start: i,
                            end: a
                        }
                    }

                    function $A(i) {
                        var a = i.match(Uw);
                        return a ? a[1].split(Fw) : []
                    }

                    function Rm(i, a, l) {
                        a = ei(a, i);
                        for (var d = -1, v = a.length, E = !1; ++d < v;) {
                            var A = vr(a[d]);
                            if (!(E = i != null && l(i, A))) break;
                            i = i[A]
                        }
                        return E || ++d != v ? E : (v = i == null ? 0 : i.length, !!v && Ec(v) && kr(A, v) && (We(i) || ji(i)))
                    }

                    function PA(i) {
                        var a = i.length,
                            l = new i.constructor(a);
                        return a && typeof i[0] == "string" && pt.call(i, "index") && (l.index = i.index, l.input = i.input), l
                    }

                    function Nm(i) {
                        return typeof i.constructor == "function" && !Ma(i) ? Ss(Yo(i)) : {}
                    }

                    function kA(i, a, l) {
                        var d = i.constructor;
                        switch (a) {
                            case xe:
                                return Vu(i);
                            case mt:
                            case st:
                                return new d(+i);
                            case w:
                                return vA(i, l);
                            case T:
                            case $:
                            case S:
                            case P:
                            case ee:
                            case ie:
                            case ye:
                            case Te:
                            case ht:
                                return dm(i, l);
                            case p:
                                return new d;
                            case O:
                            case N:
                                return new d(i);
                            case Z:
                                return _A(i);
                            case X:
                                return new d;
                            case H:
                                return yA(i)
                        }
                    }

                    function DA(i, a) {
                        var l = a.length;
                        if (!l) return i;
                        var d = l - 1;
                        return a[d] = (l > 1 ? "& " : "") + a[d], a = a.join(l > 2 ? ", " : " "), i.replace(xw, `{
/* [wrapped with ` + a + `] */
`)
                    }

                    function MA(i) {
                        return We(i) || ji(i) || !!(Dg && i && i[Dg])
                    }

                    function kr(i, a) {
                        var l = typeof i;
                        return a = a == null ? me : a, !!a && (l == "number" || l != "symbol" && qw.test(i)) && i > -1 && i % 1 == 0 && i < a
                    }

                    function yn(i, a, l) {
                        if (!Lt(l)) return !1;
                        var d = typeof a;
                        return (d == "number" ? wn(l) && kr(a, l.length) : d == "string" && a in l) ? ar(l[a], i) : !1
                    }

                    function ef(i, a) {
                        if (We(i)) return !1;
                        var l = typeof i;
                        return l == "number" || l == "symbol" || l == "boolean" || i == null || kn(i) ? !0 : Pw.test(i) || !$w.test(i) || a != null && i in vt(a)
                    }

                    function xA(i) {
                        var a = typeof i;
                        return a == "string" || a == "number" || a == "symbol" || a == "boolean" ? i !== "__proto__" : i === null
                    }

                    function tf(i) {
                        var a = dc(i),
                            l = _[a];
                        if (typeof l != "function" || !(a in Qe.prototype)) return !1;
                        if (i === l) return !0;
                        var d = Ju(l);
                        return !!d && i === d[0]
                    }

                    function UA(i) {
                        return !!Lg && Lg in i
                    }
                    var FA = Wo ? Dr : yf;

                    function Ma(i) {
                        var a = i && i.constructor,
                            l = typeof a == "function" && a.prototype || Es;
                        return i === l
                    }

                    function Lm(i) {
                        return i === i && !Lt(i)
                    }

                    function $m(i, a) {
                        return function(l) {
                            return l == null ? !1 : l[i] === a && (a !== n || i in vt(l))
                        }
                    }

                    function BA(i) {
                        var a = _c(i, function(d) {
                                return l.size === h && l.clear(), d
                            }),
                            l = a.cache;
                        return a
                    }

                    function GA(i, a) {
                        var l = i[1],
                            d = a[1],
                            v = l | d,
                            E = v < (W | I | ce),
                            A = d == ce && l == q || d == ce && l == le && i[7].length <= a[8] || d == (ce | le) && a[7].length <= a[8] && l == q;
                        if (!(E || A)) return i;
                        d & W && (i[2] = a[2], v |= l & W ? 0 : K);
                        var L = a[3];
                        if (L) {
                            var U = i[3];
                            i[3] = U ? pm(U, L, a[4]) : L, i[4] = U ? Xr(i[3], g) : a[4]
                        }
                        return L = a[5], L && (U = i[5], i[5] = U ? gm(U, L, a[6]) : L, i[6] = U ? Xr(i[5], g) : a[6]), L = a[7], L && (i[7] = L), d & ce && (i[8] = i[8] == null ? a[8] : un(i[8], a[8])), i[9] == null && (i[9] = a[9]), i[0] = a[0], i[1] = v, i
                    }

                    function WA(i) {
                        var a = [];
                        if (i != null)
                            for (var l in vt(i)) a.push(l);
                        return a
                    }

                    function jA(i) {
                        return Ho.call(i)
                    }

                    function Pm(i, a, l) {
                        return a = Kt(a === n ? i.length - 1 : a, 0),
                            function() {
                                for (var d = arguments, v = -1, E = Kt(d.length - a, 0), A = V(E); ++v < E;) A[v] = d[a + v];
                                v = -1;
                                for (var L = V(a + 1); ++v < a;) L[v] = d[v];
                                return L[a] = l(A), Ln(i, this, L)
                            }
                    }

                    function km(i, a) {
                        return a.length < 2 ? i : Bi(i, Xn(a, 0, -1))
                    }

                    function HA(i, a) {
                        for (var l = i.length, d = un(a.length, l), v = On(i); d--;) {
                            var E = a[d];
                            i[d] = kr(E, l) ? v[E] : n
                        }
                        return i
                    }

                    function nf(i, a) {
                        if (!(a === "constructor" && typeof i[a] == "function") && a != "__proto__") return i[a]
                    }
                    var Dm = xm(im),
                        xa = s0 || function(i, a) {
                            return nn.setTimeout(i, a)
                        },
                        rf = xm(hA);

                    function Mm(i, a, l) {
                        var d = a + "";
                        return rf(i, DA(d, KA($A(d), l)))
                    }

                    function xm(i) {
                        var a = 0,
                            l = 0;
                        return function() {
                            var d = l0(),
                                v = Oe - (d - l);
                            if (l = d, v > 0) {
                                if (++a >= fe) return arguments[0]
                            } else a = 0;
                            return i.apply(n, arguments)
                        }
                    }

                    function pc(i, a) {
                        var l = -1,
                            d = i.length,
                            v = d - 1;
                        for (a = a === n ? d : a; ++l < a;) {
                            var E = Fu(l, v),
                                A = i[E];
                            i[E] = i[l], i[l] = A
                        }
                        return i.length = a, i
                    }
                    var Um = BA(function(i) {
                        var a = [];
                        return i.charCodeAt(0) === 46 && a.push(""), i.replace(kw, function(l, d, v, E) {
                            a.push(v ? E.replace(Ww, "$1") : d || l)
                        }), a
                    });

                    function vr(i) {
                        if (typeof i == "string" || kn(i)) return i;
                        var a = i + "";
                        return a == "0" && 1 / i == -_e ? "-0" : a
                    }

                    function Wi(i) {
                        if (i != null) {
                            try {
                                return jo.call(i)
                            } catch {}
                            try {
                                return i + ""
                            } catch {}
                        }
                        return ""
                    }

                    function KA(i, a) {
                        return Vn(jt, function(l) {
                            var d = "_." + l[0];
                            a & l[1] && !Uo(i, d) && i.push(d)
                        }), i.sort()
                    }

                    function Fm(i) {
                        if (i instanceof Qe) return i.clone();
                        var a = new qn(i.__wrapped__, i.__chain__);
                        return a.__actions__ = On(i.__actions__), a.__index__ = i.__index__, a.__values__ = i.__values__, a
                    }

                    function VA(i, a, l) {
                        (l ? yn(i, a, l) : a === n) ? a = 1: a = Kt(He(a), 0);
                        var d = i == null ? 0 : i.length;
                        if (!d || a < 1) return [];
                        for (var v = 0, E = 0, A = V(Xo(d / a)); v < d;) A[E++] = Xn(i, v, v += a);
                        return A
                    }

                    function YA(i) {
                        for (var a = -1, l = i == null ? 0 : i.length, d = 0, v = []; ++a < l;) {
                            var E = i[a];
                            E && (v[d++] = E)
                        }
                        return v
                    }

                    function qA() {
                        var i = arguments.length;
                        if (!i) return [];
                        for (var a = V(i - 1), l = arguments[0], d = i; d--;) a[d - 1] = arguments[d];
                        return zr(We(l) ? On(l) : [l], rn(a, 1))
                    }
                    var zA = qe(function(i, a) {
                            return Mt(i) ? La(i, rn(a, 1, Mt, !0)) : []
                        }),
                        XA = qe(function(i, a) {
                            var l = Jn(a);
                            return Mt(l) && (l = n), Mt(i) ? La(i, rn(a, 1, Mt, !0), $e(l, 2)) : []
                        }),
                        JA = qe(function(i, a) {
                            var l = Jn(a);
                            return Mt(l) && (l = n), Mt(i) ? La(i, rn(a, 1, Mt, !0), n, l) : []
                        });

                    function QA(i, a, l) {
                        var d = i == null ? 0 : i.length;
                        return d ? (a = l || a === n ? 1 : He(a), Xn(i, a < 0 ? 0 : a, d)) : []
                    }

                    function ZA(i, a, l) {
                        var d = i == null ? 0 : i.length;
                        return d ? (a = l || a === n ? 1 : He(a), a = d - a, Xn(i, 0, a < 0 ? 0 : a)) : []
                    }

                    function eI(i, a) {
                        return i && i.length ? ac(i, $e(a, 3), !0, !0) : []
                    }

                    function tI(i, a) {
                        return i && i.length ? ac(i, $e(a, 3), !0) : []
                    }

                    function nI(i, a, l, d) {
                        var v = i == null ? 0 : i.length;
                        return v ? (l && typeof l != "number" && yn(i, a, l) && (l = 0, d = v), q0(i, a, l, d)) : []
                    }

                    function Bm(i, a, l) {
                        var d = i == null ? 0 : i.length;
                        if (!d) return -1;
                        var v = l == null ? 0 : He(l);
                        return v < 0 && (v = Kt(d + v, 0)), Fo(i, $e(a, 3), v)
                    }

                    function Gm(i, a, l) {
                        var d = i == null ? 0 : i.length;
                        if (!d) return -1;
                        var v = d - 1;
                        return l !== n && (v = He(l), v = l < 0 ? Kt(d + v, 0) : un(v, d - 1)), Fo(i, $e(a, 3), v, !0)
                    }

                    function Wm(i) {
                        var a = i == null ? 0 : i.length;
                        return a ? rn(i, 1) : []
                    }

                    function rI(i) {
                        var a = i == null ? 0 : i.length;
                        return a ? rn(i, _e) : []
                    }

                    function iI(i, a) {
                        var l = i == null ? 0 : i.length;
                        return l ? (a = a === n ? 1 : He(a), rn(i, a)) : []
                    }

                    function sI(i) {
                        for (var a = -1, l = i == null ? 0 : i.length, d = {}; ++a < l;) {
                            var v = i[a];
                            d[v[0]] = v[1]
                        }
                        return d
                    }

                    function jm(i) {
                        return i && i.length ? i[0] : n
                    }

                    function aI(i, a, l) {
                        var d = i == null ? 0 : i.length;
                        if (!d) return -1;
                        var v = l == null ? 0 : He(l);
                        return v < 0 && (v = Kt(d + v, 0)), ms(i, a, v)
                    }

                    function oI(i) {
                        var a = i == null ? 0 : i.length;
                        return a ? Xn(i, 0, -1) : []
                    }
                    var cI = qe(function(i) {
                            var a = It(i, Hu);
                            return a.length && a[0] === i[0] ? ku(a) : []
                        }),
                        lI = qe(function(i) {
                            var a = Jn(i),
                                l = It(i, Hu);
                            return a === Jn(l) ? a = n : l.pop(), l.length && l[0] === i[0] ? ku(l, $e(a, 2)) : []
                        }),
                        uI = qe(function(i) {
                            var a = Jn(i),
                                l = It(i, Hu);
                            return a = typeof a == "function" ? a : n, a && l.pop(), l.length && l[0] === i[0] ? ku(l, n, a) : []
                        });

                    function fI(i, a) {
                        return i == null ? "" : o0.call(i, a)
                    }

                    function Jn(i) {
                        var a = i == null ? 0 : i.length;
                        return a ? i[a - 1] : n
                    }

                    function dI(i, a, l) {
                        var d = i == null ? 0 : i.length;
                        if (!d) return -1;
                        var v = d;
                        return l !== n && (v = He(l), v = v < 0 ? Kt(d + v, 0) : un(v, d - 1)), a === a ? KC(i, a, v) : Fo(i, Sg, v, !0)
                    }

                    function hI(i, a) {
                        return i && i.length ? em(i, He(a)) : n
                    }
                    var pI = qe(Hm);

                    function Hm(i, a) {
                        return i && i.length && a && a.length ? Uu(i, a) : i
                    }

                    function gI(i, a, l) {
                        return i && i.length && a && a.length ? Uu(i, a, $e(l, 2)) : i
                    }

                    function mI(i, a, l) {
                        return i && i.length && a && a.length ? Uu(i, a, n, l) : i
                    }
                    var vI = Pr(function(i, a) {
                        var l = i == null ? 0 : i.length,
                            d = Nu(i, a);
                        return rm(i, It(a, function(v) {
                            return kr(v, l) ? +v : v
                        }).sort(hm)), d
                    });

                    function _I(i, a) {
                        var l = [];
                        if (!(i && i.length)) return l;
                        var d = -1,
                            v = [],
                            E = i.length;
                        for (a = $e(a, 3); ++d < E;) {
                            var A = i[d];
                            a(A, d, i) && (l.push(A), v.push(d))
                        }
                        return rm(i, v), l
                    }

                    function sf(i) {
                        return i == null ? i : f0.call(i)
                    }

                    function yI(i, a, l) {
                        var d = i == null ? 0 : i.length;
                        return d ? (l && typeof l != "number" && yn(i, a, l) ? (a = 0, l = d) : (a = a == null ? 0 : He(a), l = l === n ? d : He(l)), Xn(i, a, l)) : []
                    }

                    function EI(i, a) {
                        return sc(i, a)
                    }

                    function bI(i, a, l) {
                        return Gu(i, a, $e(l, 2))
                    }

                    function TI(i, a) {
                        var l = i == null ? 0 : i.length;
                        if (l) {
                            var d = sc(i, a);
                            if (d < l && ar(i[d], a)) return d
                        }
                        return -1
                    }

                    function SI(i, a) {
                        return sc(i, a, !0)
                    }

                    function OI(i, a, l) {
                        return Gu(i, a, $e(l, 2), !0)
                    }

                    function wI(i, a) {
                        var l = i == null ? 0 : i.length;
                        if (l) {
                            var d = sc(i, a, !0) - 1;
                            if (ar(i[d], a)) return d
                        }
                        return -1
                    }

                    function CI(i) {
                        return i && i.length ? sm(i) : []
                    }

                    function AI(i, a) {
                        return i && i.length ? sm(i, $e(a, 2)) : []
                    }

                    function II(i) {
                        var a = i == null ? 0 : i.length;
                        return a ? Xn(i, 1, a) : []
                    }

                    function RI(i, a, l) {
                        return i && i.length ? (a = l || a === n ? 1 : He(a), Xn(i, 0, a < 0 ? 0 : a)) : []
                    }

                    function NI(i, a, l) {
                        var d = i == null ? 0 : i.length;
                        return d ? (a = l || a === n ? 1 : He(a), a = d - a, Xn(i, a < 0 ? 0 : a, d)) : []
                    }

                    function LI(i, a) {
                        return i && i.length ? ac(i, $e(a, 3), !1, !0) : []
                    }

                    function $I(i, a) {
                        return i && i.length ? ac(i, $e(a, 3)) : []
                    }
                    var PI = qe(function(i) {
                            return Zr(rn(i, 1, Mt, !0))
                        }),
                        kI = qe(function(i) {
                            var a = Jn(i);
                            return Mt(a) && (a = n), Zr(rn(i, 1, Mt, !0), $e(a, 2))
                        }),
                        DI = qe(function(i) {
                            var a = Jn(i);
                            return a = typeof a == "function" ? a : n, Zr(rn(i, 1, Mt, !0), n, a)
                        });

                    function MI(i) {
                        return i && i.length ? Zr(i) : []
                    }

                    function xI(i, a) {
                        return i && i.length ? Zr(i, $e(a, 2)) : []
                    }

                    function UI(i, a) {
                        return a = typeof a == "function" ? a : n, i && i.length ? Zr(i, n, a) : []
                    }

                    function af(i) {
                        if (!(i && i.length)) return [];
                        var a = 0;
                        return i = qr(i, function(l) {
                            if (Mt(l)) return a = Kt(l.length, a), !0
                        }), Tu(a, function(l) {
                            return It(i, yu(l))
                        })
                    }

                    function Km(i, a) {
                        if (!(i && i.length)) return [];
                        var l = af(i);
                        return a == null ? l : It(l, function(d) {
                            return Ln(a, n, d)
                        })
                    }
                    var FI = qe(function(i, a) {
                            return Mt(i) ? La(i, a) : []
                        }),
                        BI = qe(function(i) {
                            return ju(qr(i, Mt))
                        }),
                        GI = qe(function(i) {
                            var a = Jn(i);
                            return Mt(a) && (a = n), ju(qr(i, Mt), $e(a, 2))
                        }),
                        WI = qe(function(i) {
                            var a = Jn(i);
                            return a = typeof a == "function" ? a : n, ju(qr(i, Mt), n, a)
                        }),
                        jI = qe(af);

                    function HI(i, a) {
                        return lm(i || [], a || [], Na)
                    }

                    function KI(i, a) {
                        return lm(i || [], a || [], ka)
                    }
                    var VI = qe(function(i) {
                        var a = i.length,
                            l = a > 1 ? i[a - 1] : n;
                        return l = typeof l == "function" ? (i.pop(), l) : n, Km(i, l)
                    });

                    function Vm(i) {
                        var a = _(i);
                        return a.__chain__ = !0, a
                    }

                    function YI(i, a) {
                        return a(i), i
                    }

                    function gc(i, a) {
                        return a(i)
                    }
                    var qI = Pr(function(i) {
                        var a = i.length,
                            l = a ? i[0] : 0,
                            d = this.__wrapped__,
                            v = function(E) {
                                return Nu(E, i)
                            };
                        return a > 1 || this.__actions__.length || !(d instanceof Qe) || !kr(l) ? this.thru(v) : (d = d.slice(l, +l + (a ? 1 : 0)), d.__actions__.push({
                            func: gc,
                            args: [v],
                            thisArg: n
                        }), new qn(d, this.__chain__).thru(function(E) {
                            return a && !E.length && E.push(n), E
                        }))
                    });

                    function zI() {
                        return Vm(this)
                    }

                    function XI() {
                        return new qn(this.value(), this.__chain__)
                    }

                    function JI() {
                        this.__values__ === n && (this.__values__ = av(this.value()));
                        var i = this.__index__ >= this.__values__.length,
                            a = i ? n : this.__values__[this.__index__++];
                        return {
                            done: i,
                            value: a
                        }
                    }

                    function QI() {
                        return this
                    }

                    function ZI(i) {
                        for (var a, l = this; l instanceof ec;) {
                            var d = Fm(l);
                            d.__index__ = 0, d.__values__ = n, a ? v.__wrapped__ = d : a = d;
                            var v = d;
                            l = l.__wrapped__
                        }
                        return v.__wrapped__ = i, a
                    }

                    function e1() {
                        var i = this.__wrapped__;
                        if (i instanceof Qe) {
                            var a = i;
                            return this.__actions__.length && (a = new Qe(this)), a = a.reverse(), a.__actions__.push({
                                func: gc,
                                args: [sf],
                                thisArg: n
                            }), new qn(a, this.__chain__)
                        }
                        return this.thru(sf)
                    }

                    function t1() {
                        return cm(this.__wrapped__, this.__actions__)
                    }
                    var n1 = oc(function(i, a, l) {
                        pt.call(i, l) ? ++i[l] : Lr(i, l, 1)
                    });

                    function r1(i, a, l) {
                        var d = We(i) ? bg : Y0;
                        return l && yn(i, a, l) && (a = n), d(i, $e(a, 3))
                    }

                    function i1(i, a) {
                        var l = We(i) ? qr : Kg;
                        return l(i, $e(a, 3))
                    }
                    var s1 = ym(Bm),
                        a1 = ym(Gm);

                    function o1(i, a) {
                        return rn(mc(i, a), 1)
                    }

                    function c1(i, a) {
                        return rn(mc(i, a), _e)
                    }

                    function l1(i, a, l) {
                        return l = l === n ? 1 : He(l), rn(mc(i, a), l)
                    }

                    function Ym(i, a) {
                        var l = We(i) ? Vn : Qr;
                        return l(i, $e(a, 3))
                    }

                    function qm(i, a) {
                        var l = We(i) ? IC : Hg;
                        return l(i, $e(a, 3))
                    }
                    var u1 = oc(function(i, a, l) {
                        pt.call(i, l) ? i[l].push(a) : Lr(i, l, [a])
                    });

                    function f1(i, a, l, d) {
                        i = wn(i) ? i : Is(i), l = l && !d ? He(l) : 0;
                        var v = i.length;
                        return l < 0 && (l = Kt(v + l, 0)), bc(i) ? l <= v && i.indexOf(a, l) > -1 : !!v && ms(i, a, l) > -1
                    }
                    var d1 = qe(function(i, a, l) {
                            var d = -1,
                                v = typeof a == "function",
                                E = wn(i) ? V(i.length) : [];
                            return Qr(i, function(A) {
                                E[++d] = v ? Ln(a, A, l) : $a(A, a, l)
                            }), E
                        }),
                        h1 = oc(function(i, a, l) {
                            Lr(i, l, a)
                        });

                    function mc(i, a) {
                        var l = We(i) ? It : Jg;
                        return l(i, $e(a, 3))
                    }

                    function p1(i, a, l, d) {
                        return i == null ? [] : (We(a) || (a = a == null ? [] : [a]), l = d ? n : l, We(l) || (l = l == null ? [] : [l]), tm(i, a, l))
                    }
                    var g1 = oc(function(i, a, l) {
                        i[l ? 0 : 1].push(a)
                    }, function() {
                        return [
                            [],
                            []
                        ]
                    });

                    function m1(i, a, l) {
                        var d = We(i) ? vu : wg,
                            v = arguments.length < 3;
                        return d(i, $e(a, 4), l, v, Qr)
                    }

                    function v1(i, a, l) {
                        var d = We(i) ? RC : wg,
                            v = arguments.length < 3;
                        return d(i, $e(a, 4), l, v, Hg)
                    }

                    function _1(i, a) {
                        var l = We(i) ? qr : Kg;
                        return l(i, yc($e(a, 3)))
                    }

                    function y1(i) {
                        var a = We(i) ? Bg : fA;
                        return a(i)
                    }

                    function E1(i, a, l) {
                        (l ? yn(i, a, l) : a === n) ? a = 1: a = He(a);
                        var d = We(i) ? W0 : dA;
                        return d(i, a)
                    }

                    function b1(i) {
                        var a = We(i) ? j0 : pA;
                        return a(i)
                    }

                    function T1(i) {
                        if (i == null) return 0;
                        if (wn(i)) return bc(i) ? _s(i) : i.length;
                        var a = fn(i);
                        return a == p || a == X ? i.size : Mu(i).length
                    }

                    function S1(i, a, l) {
                        var d = We(i) ? _u : gA;
                        return l && yn(i, a, l) && (a = n), d(i, $e(a, 3))
                    }
                    var O1 = qe(function(i, a) {
                            if (i == null) return [];
                            var l = a.length;
                            return l > 1 && yn(i, a[0], a[1]) ? a = [] : l > 2 && yn(a[0], a[1], a[2]) && (a = [a[0]]), tm(i, rn(a, 1), [])
                        }),
                        vc = i0 || function() {
                            return nn.Date.now()
                        };

                    function w1(i, a) {
                        if (typeof a != "function") throw new Yn(c);
                        return i = He(i),
                            function() {
                                if (--i < 1) return a.apply(this, arguments)
                            }
                    }

                    function zm(i, a, l) {
                        return a = l ? n : a, a = i && a == null ? i.length : a, $r(i, ce, n, n, n, n, a)
                    }

                    function Xm(i, a) {
                        var l;
                        if (typeof a != "function") throw new Yn(c);
                        return i = He(i),
                            function() {
                                return --i > 0 && (l = a.apply(this, arguments)), i <= 1 && (a = n), l
                            }
                    }
                    var of = qe(function(i, a, l) {
                        var d = W;
                        if (l.length) {
                            var v = Xr(l, Cs(of));
                            d |= G
                        }
                        return $r(i, d, a, l, v)
                    }), Jm = qe(function(i, a, l) {
                        var d = W | I;
                        if (l.length) {
                            var v = Xr(l, Cs(Jm));
                            d |= G
                        }
                        return $r(a, d, i, l, v)
                    });

                    function Qm(i, a, l) {
                        a = l ? n : a;
                        var d = $r(i, q, n, n, n, n, n, a);
                        return d.placeholder = Qm.placeholder, d
                    }

                    function Zm(i, a, l) {
                        a = l ? n : a;
                        var d = $r(i, j, n, n, n, n, n, a);
                        return d.placeholder = Zm.placeholder, d
                    }

                    function ev(i, a, l) {
                        var d, v, E, A, L, U, te = 0,
                            ne = !1,
                            oe = !1,
                            ge = !0;
                        if (typeof i != "function") throw new Yn(c);
                        a = Qn(a) || 0, Lt(l) && (ne = !!l.leading, oe = "maxWait" in l, E = oe ? Kt(Qn(l.maxWait) || 0, a) : E, ge = "trailing" in l ? !!l.trailing : ge);

                        function we(xt) {
                            var or = d,
                                xr = v;
                            return d = v = n, te = xt, A = i.apply(xr, or), A
                        }

                        function Pe(xt) {
                            return te = xt, L = xa(Xe, a), ne ? we(xt) : A
                        }

                        function Ve(xt) {
                            var or = xt - U,
                                xr = xt - te,
                                yv = a - or;
                            return oe ? un(yv, E - xr) : yv
                        }

                        function ke(xt) {
                            var or = xt - U,
                                xr = xt - te;
                            return U === n || or >= a || or < 0 || oe && xr >= E
                        }

                        function Xe() {
                            var xt = vc();
                            if (ke(xt)) return Ze(xt);
                            L = xa(Xe, Ve(xt))
                        }

                        function Ze(xt) {
                            return L = n, ge && d ? we(xt) : (d = v = n, A)
                        }

                        function Dn() {
                            L !== n && um(L), te = 0, d = U = v = L = n
                        }

                        function En() {
                            return L === n ? A : Ze(vc())
                        }

                        function Mn() {
                            var xt = vc(),
                                or = ke(xt);
                            if (d = arguments, v = this, U = xt, or) {
                                if (L === n) return Pe(U);
                                if (oe) return um(L), L = xa(Xe, a), we(U)
                            }
                            return L === n && (L = xa(Xe, a)), A
                        }
                        return Mn.cancel = Dn, Mn.flush = En, Mn
                    }
                    var C1 = qe(function(i, a) {
                            return jg(i, 1, a)
                        }),
                        A1 = qe(function(i, a, l) {
                            return jg(i, Qn(a) || 0, l)
                        });

                    function I1(i) {
                        return $r(i, ue)
                    }

                    function _c(i, a) {
                        if (typeof i != "function" || a != null && typeof a != "function") throw new Yn(c);
                        var l = function() {
                            var d = arguments,
                                v = a ? a.apply(this, d) : d[0],
                                E = l.cache;
                            if (E.has(v)) return E.get(v);
                            var A = i.apply(this, d);
                            return l.cache = E.set(v, A) || E, A
                        };
                        return l.cache = new(_c.Cache || Nr), l
                    }
                    _c.Cache = Nr;

                    function yc(i) {
                        if (typeof i != "function") throw new Yn(c);
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

                    function R1(i) {
                        return Xm(2, i)
                    }
                    var N1 = mA(function(i, a) {
                            a = a.length == 1 && We(a[0]) ? It(a[0], $n($e())) : It(rn(a, 1), $n($e()));
                            var l = a.length;
                            return qe(function(d) {
                                for (var v = -1, E = un(d.length, l); ++v < E;) d[v] = a[v].call(this, d[v]);
                                return Ln(i, this, d)
                            })
                        }),
                        cf = qe(function(i, a) {
                            var l = Xr(a, Cs(cf));
                            return $r(i, G, n, a, l)
                        }),
                        tv = qe(function(i, a) {
                            var l = Xr(a, Cs(tv));
                            return $r(i, se, n, a, l)
                        }),
                        L1 = Pr(function(i, a) {
                            return $r(i, le, n, n, n, a)
                        });

                    function $1(i, a) {
                        if (typeof i != "function") throw new Yn(c);
                        return a = a === n ? a : He(a), qe(i, a)
                    }

                    function P1(i, a) {
                        if (typeof i != "function") throw new Yn(c);
                        return a = a == null ? 0 : Kt(He(a), 0), qe(function(l) {
                            var d = l[a],
                                v = ti(l, 0, a);
                            return d && zr(v, d), Ln(i, this, v)
                        })
                    }

                    function k1(i, a, l) {
                        var d = !0,
                            v = !0;
                        if (typeof i != "function") throw new Yn(c);
                        return Lt(l) && (d = "leading" in l ? !!l.leading : d, v = "trailing" in l ? !!l.trailing : v), ev(i, a, {
                            leading: d,
                            maxWait: a,
                            trailing: v
                        })
                    }

                    function D1(i) {
                        return zm(i, 1)
                    }

                    function M1(i, a) {
                        return cf(Ku(a), i)
                    }

                    function x1() {
                        if (!arguments.length) return [];
                        var i = arguments[0];
                        return We(i) ? i : [i]
                    }

                    function U1(i) {
                        return zn(i, C)
                    }

                    function F1(i, a) {
                        return a = typeof a == "function" ? a : n, zn(i, C, a)
                    }

                    function B1(i) {
                        return zn(i, y | C)
                    }

                    function G1(i, a) {
                        return a = typeof a == "function" ? a : n, zn(i, y | C, a)
                    }

                    function W1(i, a) {
                        return a == null || Wg(i, a, Xt(a))
                    }

                    function ar(i, a) {
                        return i === a || i !== i && a !== a
                    }
                    var j1 = fc(Pu),
                        H1 = fc(function(i, a) {
                            return i >= a
                        }),
                        ji = qg(function() {
                            return arguments
                        }()) ? qg : function(i) {
                            return Pt(i) && pt.call(i, "callee") && !kg.call(i, "callee")
                        },
                        We = V.isArray,
                        K1 = gg ? $n(gg) : Z0;

                    function wn(i) {
                        return i != null && Ec(i.length) && !Dr(i)
                    }

                    function Mt(i) {
                        return Pt(i) && wn(i)
                    }

                    function V1(i) {
                        return i === !0 || i === !1 || Pt(i) && _n(i) == mt
                    }
                    var ni = a0 || yf,
                        Y1 = mg ? $n(mg) : eA;

                    function q1(i) {
                        return Pt(i) && i.nodeType === 1 && !Ua(i)
                    }

                    function z1(i) {
                        if (i == null) return !0;
                        if (wn(i) && (We(i) || typeof i == "string" || typeof i.splice == "function" || ni(i) || As(i) || ji(i))) return !i.length;
                        var a = fn(i);
                        if (a == p || a == X) return !i.size;
                        if (Ma(i)) return !Mu(i).length;
                        for (var l in i)
                            if (pt.call(i, l)) return !1;
                        return !0
                    }

                    function X1(i, a) {
                        return Pa(i, a)
                    }

                    function J1(i, a, l) {
                        l = typeof l == "function" ? l : n;
                        var d = l ? l(i, a) : n;
                        return d === n ? Pa(i, a, n, l) : !!d
                    }

                    function lf(i) {
                        if (!Pt(i)) return !1;
                        var a = _n(i);
                        return a == Dt || a == $t || typeof i.message == "string" && typeof i.name == "string" && !Ua(i)
                    }

                    function Q1(i) {
                        return typeof i == "number" && Mg(i)
                    }

                    function Dr(i) {
                        if (!Lt(i)) return !1;
                        var a = _n(i);
                        return a == Nt || a == m || a == it || a == ae
                    }

                    function nv(i) {
                        return typeof i == "number" && i == He(i)
                    }

                    function Ec(i) {
                        return typeof i == "number" && i > -1 && i % 1 == 0 && i <= me
                    }

                    function Lt(i) {
                        var a = typeof i;
                        return i != null && (a == "object" || a == "function")
                    }

                    function Pt(i) {
                        return i != null && typeof i == "object"
                    }
                    var rv = vg ? $n(vg) : nA;

                    function Z1(i, a) {
                        return i === a || Du(i, a, Qu(a))
                    }

                    function eR(i, a, l) {
                        return l = typeof l == "function" ? l : n, Du(i, a, Qu(a), l)
                    }

                    function tR(i) {
                        return iv(i) && i != +i
                    }

                    function nR(i) {
                        if (FA(i)) throw new Be(o);
                        return zg(i)
                    }

                    function rR(i) {
                        return i === null
                    }

                    function iR(i) {
                        return i == null
                    }

                    function iv(i) {
                        return typeof i == "number" || Pt(i) && _n(i) == O
                    }

                    function Ua(i) {
                        if (!Pt(i) || _n(i) != B) return !1;
                        var a = Yo(i);
                        if (a === null) return !0;
                        var l = pt.call(a, "constructor") && a.constructor;
                        return typeof l == "function" && l instanceof l && jo.call(l) == e0
                    }
                    var uf = _g ? $n(_g) : rA;

                    function sR(i) {
                        return nv(i) && i >= -me && i <= me
                    }
                    var sv = yg ? $n(yg) : iA;

                    function bc(i) {
                        return typeof i == "string" || !We(i) && Pt(i) && _n(i) == N
                    }

                    function kn(i) {
                        return typeof i == "symbol" || Pt(i) && _n(i) == H
                    }
                    var As = Eg ? $n(Eg) : sA;

                    function aR(i) {
                        return i === n
                    }

                    function oR(i) {
                        return Pt(i) && fn(i) == pe
                    }

                    function cR(i) {
                        return Pt(i) && _n(i) == Ne
                    }
                    var lR = fc(xu),
                        uR = fc(function(i, a) {
                            return i <= a
                        });

                    function av(i) {
                        if (!i) return [];
                        if (wn(i)) return bc(i) ? ir(i) : On(i);
                        if (wa && i[wa]) return WC(i[wa]());
                        var a = fn(i),
                            l = a == p ? Ou : a == X ? Bo : Is;
                        return l(i)
                    }

                    function Mr(i) {
                        if (!i) return i === 0 ? i : 0;
                        if (i = Qn(i), i === _e || i === -_e) {
                            var a = i < 0 ? -1 : 1;
                            return a * Se
                        }
                        return i === i ? i : 0
                    }

                    function He(i) {
                        var a = Mr(i),
                            l = a % 1;
                        return a === a ? l ? a - l : a : 0
                    }

                    function ov(i) {
                        return i ? Fi(He(i), 0, Fe) : 0
                    }

                    function Qn(i) {
                        if (typeof i == "number") return i;
                        if (kn(i)) return Me;
                        if (Lt(i)) {
                            var a = typeof i.valueOf == "function" ? i.valueOf() : i;
                            i = Lt(a) ? a + "" : a
                        }
                        if (typeof i != "string") return i === 0 ? i : +i;
                        i = Cg(i);
                        var l = Kw.test(i);
                        return l || Yw.test(i) ? wC(i.slice(2), l ? 2 : 8) : Hw.test(i) ? Me : +i
                    }

                    function cv(i) {
                        return mr(i, Cn(i))
                    }

                    function fR(i) {
                        return i ? Fi(He(i), -me, me) : i === 0 ? i : 0
                    }

                    function lt(i) {
                        return i == null ? "" : Pn(i)
                    }
                    var dR = Os(function(i, a) {
                            if (Ma(a) || wn(a)) {
                                mr(a, Xt(a), i);
                                return
                            }
                            for (var l in a) pt.call(a, l) && Na(i, l, a[l])
                        }),
                        lv = Os(function(i, a) {
                            mr(a, Cn(a), i)
                        }),
                        Tc = Os(function(i, a, l, d) {
                            mr(a, Cn(a), i, d)
                        }),
                        hR = Os(function(i, a, l, d) {
                            mr(a, Xt(a), i, d)
                        }),
                        pR = Pr(Nu);

                    function gR(i, a) {
                        var l = Ss(i);
                        return a == null ? l : Gg(l, a)
                    }
                    var mR = qe(function(i, a) {
                            i = vt(i);
                            var l = -1,
                                d = a.length,
                                v = d > 2 ? a[2] : n;
                            for (v && yn(a[0], a[1], v) && (d = 1); ++l < d;)
                                for (var E = a[l], A = Cn(E), L = -1, U = A.length; ++L < U;) {
                                    var te = A[L],
                                        ne = i[te];
                                    (ne === n || ar(ne, Es[te]) && !pt.call(i, te)) && (i[te] = E[te])
                                }
                            return i
                        }),
                        vR = qe(function(i) {
                            return i.push(n, Cm), Ln(uv, n, i)
                        });

                    function _R(i, a) {
                        return Tg(i, $e(a, 3), gr)
                    }

                    function yR(i, a) {
                        return Tg(i, $e(a, 3), $u)
                    }

                    function ER(i, a) {
                        return i == null ? i : Lu(i, $e(a, 3), Cn)
                    }

                    function bR(i, a) {
                        return i == null ? i : Vg(i, $e(a, 3), Cn)
                    }

                    function TR(i, a) {
                        return i && gr(i, $e(a, 3))
                    }

                    function SR(i, a) {
                        return i && $u(i, $e(a, 3))
                    }

                    function OR(i) {
                        return i == null ? [] : rc(i, Xt(i))
                    }

                    function wR(i) {
                        return i == null ? [] : rc(i, Cn(i))
                    }

                    function ff(i, a, l) {
                        var d = i == null ? n : Bi(i, a);
                        return d === n ? l : d
                    }

                    function CR(i, a) {
                        return i != null && Rm(i, a, z0)
                    }

                    function df(i, a) {
                        return i != null && Rm(i, a, X0)
                    }
                    var AR = bm(function(i, a, l) {
                            a != null && typeof a.toString != "function" && (a = Ho.call(a)), i[a] = l
                        }, pf(An)),
                        IR = bm(function(i, a, l) {
                            a != null && typeof a.toString != "function" && (a = Ho.call(a)), pt.call(i, a) ? i[a].push(l) : i[a] = [l]
                        }, $e),
                        RR = qe($a);

                    function Xt(i) {
                        return wn(i) ? Fg(i) : Mu(i)
                    }

                    function Cn(i) {
                        return wn(i) ? Fg(i, !0) : aA(i)
                    }

                    function NR(i, a) {
                        var l = {};
                        return a = $e(a, 3), gr(i, function(d, v, E) {
                            Lr(l, a(d, v, E), d)
                        }), l
                    }

                    function LR(i, a) {
                        var l = {};
                        return a = $e(a, 3), gr(i, function(d, v, E) {
                            Lr(l, v, a(d, v, E))
                        }), l
                    }
                    var $R = Os(function(i, a, l) {
                            ic(i, a, l)
                        }),
                        uv = Os(function(i, a, l, d) {
                            ic(i, a, l, d)
                        }),
                        PR = Pr(function(i, a) {
                            var l = {};
                            if (i == null) return l;
                            var d = !1;
                            a = It(a, function(E) {
                                return E = ei(E, i), d || (d = E.length > 1), E
                            }), mr(i, Xu(i), l), d && (l = zn(l, y | b | C, AA));
                            for (var v = a.length; v--;) Wu(l, a[v]);
                            return l
                        });

                    function kR(i, a) {
                        return fv(i, yc($e(a)))
                    }
                    var DR = Pr(function(i, a) {
                        return i == null ? {} : cA(i, a)
                    });

                    function fv(i, a) {
                        if (i == null) return {};
                        var l = It(Xu(i), function(d) {
                            return [d]
                        });
                        return a = $e(a), nm(i, l, function(d, v) {
                            return a(d, v[0])
                        })
                    }

                    function MR(i, a, l) {
                        a = ei(a, i);
                        var d = -1,
                            v = a.length;
                        for (v || (v = 1, i = n); ++d < v;) {
                            var E = i == null ? n : i[vr(a[d])];
                            E === n && (d = v, E = l), i = Dr(E) ? E.call(i) : E
                        }
                        return i
                    }

                    function xR(i, a, l) {
                        return i == null ? i : ka(i, a, l)
                    }

                    function UR(i, a, l, d) {
                        return d = typeof d == "function" ? d : n, i == null ? i : ka(i, a, l, d)
                    }
                    var dv = Om(Xt),
                        hv = Om(Cn);

                    function FR(i, a, l) {
                        var d = We(i),
                            v = d || ni(i) || As(i);
                        if (a = $e(a, 4), l == null) {
                            var E = i && i.constructor;
                            v ? l = d ? new E : [] : Lt(i) ? l = Dr(E) ? Ss(Yo(i)) : {} : l = {}
                        }
                        return (v ? Vn : gr)(i, function(A, L, U) {
                            return a(l, A, L, U)
                        }), l
                    }

                    function BR(i, a) {
                        return i == null ? !0 : Wu(i, a)
                    }

                    function GR(i, a, l) {
                        return i == null ? i : om(i, a, Ku(l))
                    }

                    function WR(i, a, l, d) {
                        return d = typeof d == "function" ? d : n, i == null ? i : om(i, a, Ku(l), d)
                    }

                    function Is(i) {
                        return i == null ? [] : Su(i, Xt(i))
                    }

                    function jR(i) {
                        return i == null ? [] : Su(i, Cn(i))
                    }

                    function HR(i, a, l) {
                        return l === n && (l = a, a = n), l !== n && (l = Qn(l), l = l === l ? l : 0), a !== n && (a = Qn(a), a = a === a ? a : 0), Fi(Qn(i), a, l)
                    }

                    function KR(i, a, l) {
                        return a = Mr(a), l === n ? (l = a, a = 0) : l = Mr(l), i = Qn(i), J0(i, a, l)
                    }

                    function VR(i, a, l) {
                        if (l && typeof l != "boolean" && yn(i, a, l) && (a = l = n), l === n && (typeof a == "boolean" ? (l = a, a = n) : typeof i == "boolean" && (l = i, i = n)), i === n && a === n ? (i = 0, a = 1) : (i = Mr(i), a === n ? (a = i, i = 0) : a = Mr(a)), i > a) {
                            var d = i;
                            i = a, a = d
                        }
                        if (l || i % 1 || a % 1) {
                            var v = xg();
                            return un(i + v * (a - i + OC("1e-" + ((v + "").length - 1))), a)
                        }
                        return Fu(i, a)
                    }
                    var YR = ws(function(i, a, l) {
                        return a = a.toLowerCase(), i + (l ? pv(a) : a)
                    });

                    function pv(i) {
                        return hf(lt(i).toLowerCase())
                    }

                    function gv(i) {
                        return i = lt(i), i && i.replace(zw, xC).replace(pC, "")
                    }

                    function qR(i, a, l) {
                        i = lt(i), a = Pn(a);
                        var d = i.length;
                        l = l === n ? d : Fi(He(l), 0, d);
                        var v = l;
                        return l -= a.length, l >= 0 && i.slice(l, v) == a
                    }

                    function zR(i) {
                        return i = lt(i), i && Rw.test(i) ? i.replace(Vp, UC) : i
                    }

                    function XR(i) {
                        return i = lt(i), i && Dw.test(i) ? i.replace(ou, "\\$&") : i
                    }
                    var JR = ws(function(i, a, l) {
                            return i + (l ? "-" : "") + a.toLowerCase()
                        }),
                        QR = ws(function(i, a, l) {
                            return i + (l ? " " : "") + a.toLowerCase()
                        }),
                        ZR = _m("toLowerCase");

                    function eN(i, a, l) {
                        i = lt(i), a = He(a);
                        var d = a ? _s(i) : 0;
                        if (!a || d >= a) return i;
                        var v = (a - d) / 2;
                        return uc(Jo(v), l) + i + uc(Xo(v), l)
                    }

                    function tN(i, a, l) {
                        i = lt(i), a = He(a);
                        var d = a ? _s(i) : 0;
                        return a && d < a ? i + uc(a - d, l) : i
                    }

                    function nN(i, a, l) {
                        i = lt(i), a = He(a);
                        var d = a ? _s(i) : 0;
                        return a && d < a ? uc(a - d, l) + i : i
                    }

                    function rN(i, a, l) {
                        return l || a == null ? a = 0 : a && (a = +a), u0(lt(i).replace(cu, ""), a || 0)
                    }

                    function iN(i, a, l) {
                        return (l ? yn(i, a, l) : a === n) ? a = 1 : a = He(a), Bu(lt(i), a)
                    }

                    function sN() {
                        var i = arguments,
                            a = lt(i[0]);
                        return i.length < 3 ? a : a.replace(i[1], i[2])
                    }
                    var aN = ws(function(i, a, l) {
                        return i + (l ? "_" : "") + a.toLowerCase()
                    });

                    function oN(i, a, l) {
                        return l && typeof l != "number" && yn(i, a, l) && (a = l = n), l = l === n ? Fe : l >>> 0, l ? (i = lt(i), i && (typeof a == "string" || a != null && !uf(a)) && (a = Pn(a), !a && vs(i)) ? ti(ir(i), 0, l) : i.split(a, l)) : []
                    }
                    var cN = ws(function(i, a, l) {
                        return i + (l ? " " : "") + hf(a)
                    });

                    function lN(i, a, l) {
                        return i = lt(i), l = l == null ? 0 : Fi(He(l), 0, i.length), a = Pn(a), i.slice(l, l + a.length) == a
                    }

                    function uN(i, a, l) {
                        var d = _.templateSettings;
                        l && yn(i, a, l) && (a = n), i = lt(i), a = Tc({}, a, d, wm);
                        var v = Tc({}, a.imports, d.imports, wm),
                            E = Xt(v),
                            A = Su(v, E),
                            L, U, te = 0,
                            ne = a.interpolate || Do,
                            oe = "__p += '",
                            ge = wu((a.escape || Do).source + "|" + ne.source + "|" + (ne === Yp ? jw : Do).source + "|" + (a.evaluate || Do).source + "|$", "g"),
                            we = "//# sourceURL=" + (pt.call(a, "sourceURL") ? (a.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++yC + "]") + `
`;
                        i.replace(ge, function(ke, Xe, Ze, Dn, En, Mn) {
                            return Ze || (Ze = Dn), oe += i.slice(te, Mn).replace(Xw, FC), Xe && (L = !0, oe += `' +
__e(` + Xe + `) +
'`), En && (U = !0, oe += `';
` + En + `;
__p += '`), Ze && (oe += `' +
((__t = (` + Ze + `)) == null ? '' : __t) +
'`), te = Mn + ke.length, ke
                        }), oe += `';
`;
                        var Pe = pt.call(a, "variable") && a.variable;
                        if (!Pe) oe = `with (obj) {
` + oe + `
}
`;
                        else if (Gw.test(Pe)) throw new Be(u);
                        oe = (U ? oe.replace(ln, "") : oe).replace(Ue, "$1").replace(Sa, "$1;"), oe = "function(" + (Pe || "obj") + `) {
` + (Pe ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (L ? ", __e = _.escape" : "") + (U ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + oe + `return __p
}`;
                        var Ve = vv(function() {
                            return ct(E, we + "return " + oe).apply(n, A)
                        });
                        if (Ve.source = oe, lf(Ve)) throw Ve;
                        return Ve
                    }

                    function fN(i) {
                        return lt(i).toLowerCase()
                    }

                    function dN(i) {
                        return lt(i).toUpperCase()
                    }

                    function hN(i, a, l) {
                        if (i = lt(i), i && (l || a === n)) return Cg(i);
                        if (!i || !(a = Pn(a))) return i;
                        var d = ir(i),
                            v = ir(a),
                            E = Ag(d, v),
                            A = Ig(d, v) + 1;
                        return ti(d, E, A).join("")
                    }

                    function pN(i, a, l) {
                        if (i = lt(i), i && (l || a === n)) return i.slice(0, Ng(i) + 1);
                        if (!i || !(a = Pn(a))) return i;
                        var d = ir(i),
                            v = Ig(d, ir(a)) + 1;
                        return ti(d, 0, v).join("")
                    }

                    function gN(i, a, l) {
                        if (i = lt(i), i && (l || a === n)) return i.replace(cu, "");
                        if (!i || !(a = Pn(a))) return i;
                        var d = ir(i),
                            v = Ag(d, ir(a));
                        return ti(d, v).join("")
                    }

                    function mN(i, a) {
                        var l = Ie,
                            d = be;
                        if (Lt(a)) {
                            var v = "separator" in a ? a.separator : v;
                            l = "length" in a ? He(a.length) : l, d = "omission" in a ? Pn(a.omission) : d
                        }
                        i = lt(i);
                        var E = i.length;
                        if (vs(i)) {
                            var A = ir(i);
                            E = A.length
                        }
                        if (l >= E) return i;
                        var L = l - _s(d);
                        if (L < 1) return d;
                        var U = A ? ti(A, 0, L).join("") : i.slice(0, L);
                        if (v === n) return U + d;
                        if (A && (L += U.length - L), uf(v)) {
                            if (i.slice(L).search(v)) {
                                var te, ne = U;
                                for (v.global || (v = wu(v.source, lt(qp.exec(v)) + "g")), v.lastIndex = 0; te = v.exec(ne);) var oe = te.index;
                                U = U.slice(0, oe === n ? L : oe)
                            }
                        } else if (i.indexOf(Pn(v), L) != L) {
                            var ge = U.lastIndexOf(v);
                            ge > -1 && (U = U.slice(0, ge))
                        }
                        return U + d
                    }

                    function vN(i) {
                        return i = lt(i), i && Iw.test(i) ? i.replace(Kp, VC) : i
                    }
                    var _N = ws(function(i, a, l) {
                            return i + (l ? " " : "") + a.toUpperCase()
                        }),
                        hf = _m("toUpperCase");

                    function mv(i, a, l) {
                        return i = lt(i), a = l ? n : a, a === n ? GC(i) ? zC(i) : $C(i) : i.match(a) || []
                    }
                    var vv = qe(function(i, a) {
                            try {
                                return Ln(i, n, a)
                            } catch (l) {
                                return lf(l) ? l : new Be(l)
                            }
                        }),
                        yN = Pr(function(i, a) {
                            return Vn(a, function(l) {
                                l = vr(l), Lr(i, l, of(i[l], i))
                            }), i
                        });

                    function EN(i) {
                        var a = i == null ? 0 : i.length,
                            l = $e();
                        return i = a ? It(i, function(d) {
                            if (typeof d[1] != "function") throw new Yn(c);
                            return [l(d[0]), d[1]]
                        }) : [], qe(function(d) {
                            for (var v = -1; ++v < a;) {
                                var E = i[v];
                                if (Ln(E[0], this, d)) return Ln(E[1], this, d)
                            }
                        })
                    }

                    function bN(i) {
                        return V0(zn(i, y))
                    }

                    function pf(i) {
                        return function() {
                            return i
                        }
                    }

                    function TN(i, a) {
                        return i == null || i !== i ? a : i
                    }
                    var SN = Em(),
                        ON = Em(!0);

                    function An(i) {
                        return i
                    }

                    function gf(i) {
                        return Xg(typeof i == "function" ? i : zn(i, y))
                    }

                    function wN(i) {
                        return Qg(zn(i, y))
                    }

                    function CN(i, a) {
                        return Zg(i, zn(a, y))
                    }
                    var AN = qe(function(i, a) {
                            return function(l) {
                                return $a(l, i, a)
                            }
                        }),
                        IN = qe(function(i, a) {
                            return function(l) {
                                return $a(i, l, a)
                            }
                        });

                    function mf(i, a, l) {
                        var d = Xt(a),
                            v = rc(a, d);
                        l == null && !(Lt(a) && (v.length || !d.length)) && (l = a, a = i, i = this, v = rc(a, Xt(a)));
                        var E = !(Lt(l) && "chain" in l) || !!l.chain,
                            A = Dr(i);
                        return Vn(v, function(L) {
                            var U = a[L];
                            i[L] = U, A && (i.prototype[L] = function() {
                                var te = this.__chain__;
                                if (E || te) {
                                    var ne = i(this.__wrapped__),
                                        oe = ne.__actions__ = On(this.__actions__);
                                    return oe.push({
                                        func: U,
                                        args: arguments,
                                        thisArg: i
                                    }), ne.__chain__ = te, ne
                                }
                                return U.apply(i, zr([this.value()], arguments))
                            })
                        }), i
                    }

                    function RN() {
                        return nn._ === this && (nn._ = t0), this
                    }

                    function vf() {}

                    function NN(i) {
                        return i = He(i), qe(function(a) {
                            return em(a, i)
                        })
                    }
                    var LN = Yu(It),
                        $N = Yu(bg),
                        PN = Yu(_u);

                    function _v(i) {
                        return ef(i) ? yu(vr(i)) : lA(i)
                    }

                    function kN(i) {
                        return function(a) {
                            return i == null ? n : Bi(i, a)
                        }
                    }
                    var DN = Tm(),
                        MN = Tm(!0);

                    function _f() {
                        return []
                    }

                    function yf() {
                        return !1
                    }

                    function xN() {
                        return {}
                    }

                    function UN() {
                        return ""
                    }

                    function FN() {
                        return !0
                    }

                    function BN(i, a) {
                        if (i = He(i), i < 1 || i > me) return [];
                        var l = Fe,
                            d = un(i, Fe);
                        a = $e(a), i -= Fe;
                        for (var v = Tu(d, a); ++l < i;) a(l);
                        return v
                    }

                    function GN(i) {
                        return We(i) ? It(i, vr) : kn(i) ? [i] : On(Um(lt(i)))
                    }

                    function WN(i) {
                        var a = ++ZC;
                        return lt(i) + a
                    }
                    var jN = lc(function(i, a) {
                            return i + a
                        }, 0),
                        HN = qu("ceil"),
                        KN = lc(function(i, a) {
                            return i / a
                        }, 1),
                        VN = qu("floor");

                    function YN(i) {
                        return i && i.length ? nc(i, An, Pu) : n
                    }

                    function qN(i, a) {
                        return i && i.length ? nc(i, $e(a, 2), Pu) : n
                    }

                    function zN(i) {
                        return Og(i, An)
                    }

                    function XN(i, a) {
                        return Og(i, $e(a, 2))
                    }

                    function JN(i) {
                        return i && i.length ? nc(i, An, xu) : n
                    }

                    function QN(i, a) {
                        return i && i.length ? nc(i, $e(a, 2), xu) : n
                    }
                    var ZN = lc(function(i, a) {
                            return i * a
                        }, 1),
                        eL = qu("round"),
                        tL = lc(function(i, a) {
                            return i - a
                        }, 0);

                    function nL(i) {
                        return i && i.length ? bu(i, An) : 0
                    }

                    function rL(i, a) {
                        return i && i.length ? bu(i, $e(a, 2)) : 0
                    }
                    return _.after = w1, _.ary = zm, _.assign = dR, _.assignIn = lv, _.assignInWith = Tc, _.assignWith = hR, _.at = pR, _.before = Xm, _.bind = of, _.bindAll = yN, _.bindKey = Jm, _.castArray = x1, _.chain = Vm, _.chunk = VA, _.compact = YA, _.concat = qA, _.cond = EN, _.conforms = bN, _.constant = pf, _.countBy = n1, _.create = gR, _.curry = Qm, _.curryRight = Zm, _.debounce = ev, _.defaults = mR, _.defaultsDeep = vR, _.defer = C1, _.delay = A1, _.difference = zA, _.differenceBy = XA, _.differenceWith = JA, _.drop = QA, _.dropRight = ZA, _.dropRightWhile = eI, _.dropWhile = tI, _.fill = nI, _.filter = i1, _.flatMap = o1, _.flatMapDeep = c1, _.flatMapDepth = l1, _.flatten = Wm, _.flattenDeep = rI, _.flattenDepth = iI, _.flip = I1, _.flow = SN, _.flowRight = ON, _.fromPairs = sI, _.functions = OR, _.functionsIn = wR, _.groupBy = u1, _.initial = oI, _.intersection = cI, _.intersectionBy = lI, _.intersectionWith = uI, _.invert = AR, _.invertBy = IR, _.invokeMap = d1, _.iteratee = gf, _.keyBy = h1, _.keys = Xt, _.keysIn = Cn, _.map = mc, _.mapKeys = NR, _.mapValues = LR, _.matches = wN, _.matchesProperty = CN, _.memoize = _c, _.merge = $R, _.mergeWith = uv, _.method = AN, _.methodOf = IN, _.mixin = mf, _.negate = yc, _.nthArg = NN, _.omit = PR, _.omitBy = kR, _.once = R1, _.orderBy = p1, _.over = LN, _.overArgs = N1, _.overEvery = $N, _.overSome = PN, _.partial = cf, _.partialRight = tv, _.partition = g1, _.pick = DR, _.pickBy = fv, _.property = _v, _.propertyOf = kN, _.pull = pI, _.pullAll = Hm, _.pullAllBy = gI, _.pullAllWith = mI, _.pullAt = vI, _.range = DN, _.rangeRight = MN, _.rearg = L1, _.reject = _1, _.remove = _I, _.rest = $1, _.reverse = sf, _.sampleSize = E1, _.set = xR, _.setWith = UR, _.shuffle = b1, _.slice = yI, _.sortBy = O1, _.sortedUniq = CI, _.sortedUniqBy = AI, _.split = oN, _.spread = P1, _.tail = II, _.take = RI, _.takeRight = NI, _.takeRightWhile = LI, _.takeWhile = $I, _.tap = YI, _.throttle = k1, _.thru = gc, _.toArray = av, _.toPairs = dv, _.toPairsIn = hv, _.toPath = GN, _.toPlainObject = cv, _.transform = FR, _.unary = D1, _.union = PI, _.unionBy = kI, _.unionWith = DI, _.uniq = MI, _.uniqBy = xI, _.uniqWith = UI, _.unset = BR, _.unzip = af, _.unzipWith = Km, _.update = GR, _.updateWith = WR, _.values = Is, _.valuesIn = jR, _.without = FI, _.words = mv, _.wrap = M1, _.xor = BI, _.xorBy = GI, _.xorWith = WI, _.zip = jI, _.zipObject = HI, _.zipObjectDeep = KI, _.zipWith = VI, _.entries = dv, _.entriesIn = hv, _.extend = lv, _.extendWith = Tc, mf(_, _), _.add = jN, _.attempt = vv, _.camelCase = YR, _.capitalize = pv, _.ceil = HN, _.clamp = HR, _.clone = U1, _.cloneDeep = B1, _.cloneDeepWith = G1, _.cloneWith = F1, _.conformsTo = W1, _.deburr = gv, _.defaultTo = TN, _.divide = KN, _.endsWith = qR, _.eq = ar, _.escape = zR, _.escapeRegExp = XR, _.every = r1, _.find = s1, _.findIndex = Bm, _.findKey = _R, _.findLast = a1, _.findLastIndex = Gm, _.findLastKey = yR, _.floor = VN, _.forEach = Ym, _.forEachRight = qm, _.forIn = ER, _.forInRight = bR, _.forOwn = TR, _.forOwnRight = SR, _.get = ff, _.gt = j1, _.gte = H1, _.has = CR, _.hasIn = df, _.head = jm, _.identity = An, _.includes = f1, _.indexOf = aI, _.inRange = KR, _.invoke = RR, _.isArguments = ji, _.isArray = We, _.isArrayBuffer = K1, _.isArrayLike = wn, _.isArrayLikeObject = Mt, _.isBoolean = V1, _.isBuffer = ni, _.isDate = Y1, _.isElement = q1, _.isEmpty = z1, _.isEqual = X1, _.isEqualWith = J1, _.isError = lf, _.isFinite = Q1, _.isFunction = Dr, _.isInteger = nv, _.isLength = Ec, _.isMap = rv, _.isMatch = Z1, _.isMatchWith = eR, _.isNaN = tR, _.isNative = nR, _.isNil = iR, _.isNull = rR, _.isNumber = iv, _.isObject = Lt, _.isObjectLike = Pt, _.isPlainObject = Ua, _.isRegExp = uf, _.isSafeInteger = sR, _.isSet = sv, _.isString = bc, _.isSymbol = kn, _.isTypedArray = As, _.isUndefined = aR, _.isWeakMap = oR, _.isWeakSet = cR, _.join = fI, _.kebabCase = JR, _.last = Jn, _.lastIndexOf = dI, _.lowerCase = QR, _.lowerFirst = ZR, _.lt = lR, _.lte = uR, _.max = YN, _.maxBy = qN, _.mean = zN, _.meanBy = XN, _.min = JN, _.minBy = QN, _.stubArray = _f, _.stubFalse = yf, _.stubObject = xN, _.stubString = UN, _.stubTrue = FN, _.multiply = ZN, _.nth = hI, _.noConflict = RN, _.noop = vf, _.now = vc, _.pad = eN, _.padEnd = tN, _.padStart = nN, _.parseInt = rN, _.random = VR, _.reduce = m1, _.reduceRight = v1, _.repeat = iN, _.replace = sN, _.result = MR, _.round = eL, _.runInContext = D, _.sample = y1, _.size = T1, _.snakeCase = aN, _.some = S1, _.sortedIndex = EI, _.sortedIndexBy = bI, _.sortedIndexOf = TI, _.sortedLastIndex = SI, _.sortedLastIndexBy = OI, _.sortedLastIndexOf = wI, _.startCase = cN, _.startsWith = lN, _.subtract = tL, _.sum = nL, _.sumBy = rL, _.template = uN, _.times = BN, _.toFinite = Mr, _.toInteger = He, _.toLength = ov, _.toLower = fN, _.toNumber = Qn, _.toSafeInteger = fR, _.toString = lt, _.toUpper = dN, _.trim = hN, _.trimEnd = pN, _.trimStart = gN, _.truncate = mN, _.unescape = vN, _.uniqueId = WN, _.upperCase = _N, _.upperFirst = hf, _.each = Ym, _.eachRight = qm, _.first = jm, mf(_, function() {
                        var i = {};
                        return gr(_, function(a, l) {
                            pt.call(_.prototype, l) || (i[l] = a)
                        }), i
                    }(), {
                        chain: !1
                    }), _.VERSION = r, Vn(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(i) {
                        _[i].placeholder = _
                    }), Vn(["drop", "take"], function(i, a) {
                        Qe.prototype[i] = function(l) {
                            l = l === n ? 1 : Kt(He(l), 0);
                            var d = this.__filtered__ && !a ? new Qe(this) : this.clone();
                            return d.__filtered__ ? d.__takeCount__ = un(l, d.__takeCount__) : d.__views__.push({
                                size: un(l, Fe),
                                type: i + (d.__dir__ < 0 ? "Right" : "")
                            }), d
                        }, Qe.prototype[i + "Right"] = function(l) {
                            return this.reverse()[i](l).reverse()
                        }
                    }), Vn(["filter", "map", "takeWhile"], function(i, a) {
                        var l = a + 1,
                            d = l == F || l == de;
                        Qe.prototype[i] = function(v) {
                            var E = this.clone();
                            return E.__iteratees__.push({
                                iteratee: $e(v, 3),
                                type: l
                            }), E.__filtered__ = E.__filtered__ || d, E
                        }
                    }), Vn(["head", "last"], function(i, a) {
                        var l = "take" + (a ? "Right" : "");
                        Qe.prototype[i] = function() {
                            return this[l](1).value()[0]
                        }
                    }), Vn(["initial", "tail"], function(i, a) {
                        var l = "drop" + (a ? "" : "Right");
                        Qe.prototype[i] = function() {
                            return this.__filtered__ ? new Qe(this) : this[l](1)
                        }
                    }), Qe.prototype.compact = function() {
                        return this.filter(An)
                    }, Qe.prototype.find = function(i) {
                        return this.filter(i).head()
                    }, Qe.prototype.findLast = function(i) {
                        return this.reverse().find(i)
                    }, Qe.prototype.invokeMap = qe(function(i, a) {
                        return typeof i == "function" ? new Qe(this) : this.map(function(l) {
                            return $a(l, i, a)
                        })
                    }), Qe.prototype.reject = function(i) {
                        return this.filter(yc($e(i)))
                    }, Qe.prototype.slice = function(i, a) {
                        i = He(i);
                        var l = this;
                        return l.__filtered__ && (i > 0 || a < 0) ? new Qe(l) : (i < 0 ? l = l.takeRight(-i) : i && (l = l.drop(i)), a !== n && (a = He(a), l = a < 0 ? l.dropRight(-a) : l.take(a - i)), l)
                    }, Qe.prototype.takeRightWhile = function(i) {
                        return this.reverse().takeWhile(i).reverse()
                    }, Qe.prototype.toArray = function() {
                        return this.take(Fe)
                    }, gr(Qe.prototype, function(i, a) {
                        var l = /^(?:filter|find|map|reject)|While$/.test(a),
                            d = /^(?:head|last)$/.test(a),
                            v = _[d ? "take" + (a == "last" ? "Right" : "") : a],
                            E = d || /^find/.test(a);
                        !v || (_.prototype[a] = function() {
                            var A = this.__wrapped__,
                                L = d ? [1] : arguments,
                                U = A instanceof Qe,
                                te = L[0],
                                ne = U || We(A),
                                oe = function(Xe) {
                                    var Ze = v.apply(_, zr([Xe], L));
                                    return d && ge ? Ze[0] : Ze
                                };
                            ne && l && typeof te == "function" && te.length != 1 && (U = ne = !1);
                            var ge = this.__chain__,
                                we = !!this.__actions__.length,
                                Pe = E && !ge,
                                Ve = U && !we;
                            if (!E && ne) {
                                A = Ve ? A : new Qe(this);
                                var ke = i.apply(A, L);
                                return ke.__actions__.push({
                                    func: gc,
                                    args: [oe],
                                    thisArg: n
                                }), new qn(ke, ge)
                            }
                            return Pe && Ve ? i.apply(this, L) : (ke = this.thru(oe), Pe ? d ? ke.value()[0] : ke.value() : ke)
                        })
                    }), Vn(["pop", "push", "shift", "sort", "splice", "unshift"], function(i) {
                        var a = Go[i],
                            l = /^(?:push|sort|unshift)$/.test(i) ? "tap" : "thru",
                            d = /^(?:pop|shift)$/.test(i);
                        _.prototype[i] = function() {
                            var v = arguments;
                            if (d && !this.__chain__) {
                                var E = this.value();
                                return a.apply(We(E) ? E : [], v)
                            }
                            return this[l](function(A) {
                                return a.apply(We(A) ? A : [], v)
                            })
                        }
                    }), gr(Qe.prototype, function(i, a) {
                        var l = _[a];
                        if (l) {
                            var d = l.name + "";
                            pt.call(Ts, d) || (Ts[d] = []), Ts[d].push({
                                name: a,
                                func: l
                            })
                        }
                    }), Ts[cc(n, I).name] = [{
                        name: "wrapper",
                        func: n
                    }], Qe.prototype.clone = v0, Qe.prototype.reverse = _0, Qe.prototype.value = y0, _.prototype.at = qI, _.prototype.chain = zI, _.prototype.commit = XI, _.prototype.next = JI, _.prototype.plant = ZI, _.prototype.reverse = e1, _.prototype.toJSON = _.prototype.valueOf = _.prototype.value = t1, _.prototype.first = _.prototype.head, wa && (_.prototype[wa] = QI), _
                },
                ys = XC();
            Di ? ((Di.exports = ys)._ = ys, pu._ = ys) : nn._ = ys
        }).call(Ft)
    })(Yd, Yd.exports);
    const R8 = ze({
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
                        n = this.$refs.stage,
                        r = n.getBoundingClientRect(),
                        s = n.parentElement.getBoundingClientRect(),
                        o = Math.max(s.width * .9, 240),
                        c = Math.max(this.windowHeight - t.height + r.height, 240),
                        u = this.stage.canvas.width,
                        f = this.stage.canvas.height,
                        h = Math.min(o / u, c / f),
                        g = u * h,
                        y = f * h;
                    return {
                        width: `${g}px`,
                        height: `${y}px`
                    }
                }
            },
            mounted() {
                this.onResizeWithContext = Yd.exports.throttle(this.onResize.bind(this), 400), window.addEventListener("resize", this.onResizeWithContext), this.setupStage()
            },
            beforeUnmount() {
                window.removeEventListener("resize", this.onResizeWithContext), this.stage && this.stage.beforeDestroy()
            },
            methods: {
                setupStage() {
                    const e = this.$refs.stage,
                        t = {};
                    this.player.size && (t.width = this.player.size.width, t.height = this.player.size.height), this.player.thicknesses && (t.thickness = this.player.thicknesses[0]), this.player.colors && (t.color = this.player.colors[0]), this.player.maxPoints && (t.maxPoints = this.player.maxPoints);
                    const n = new Y3(e, t);
                    n.canvas.lines = dr([]), n.canvas.lines2 = dr([]), this.stage = n, this.stage.on("up", () => {
                        var s;
                        if (!this.player.live) return;
                        const r = ((s = this.stage) == null ? void 0 : s.getObject()) || {};
                        r.done = !1, this.$ecast.updateObject(this.player.responseKey, r).catch(this.$handleEcastError)
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
        N8 = {
            class: "draw"
        },
        L8 = {
            ref: "content",
            class: "content"
        },
        $8 = {
            class: "constrain"
        },
        P8 = {
            key: 0
        };

    function k8(e, t, n, r, s, o) {
        const c = gn("bb");
        return z(), Q("div", N8, [Y("div", L8, [Y("div", $8, [e.player.prompt ? je((z(), Q("div", P8, null, 512)), [
            [c, e.player.prompt]
        ]) : Ae("", !0), Y("div", {
            ref: "stage",
            class: "stage",
            style: ca(e.stageDimensions)
        }, null, 4), Y("button", {
            onClick: t[0] || (t[0] = Bt((...u) => e.onSubmitClick && e.onSubmitClick(...u), ["prevent"]))
        }, Ce(e.player.submitText || "SUBMIT"), 1)])], 512)])
    }
    const D8 = yt(R8, [
            ["render", k8]
        ]),
        M8 = ze({
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
                    var e, t, n, r, s, o;
                    return {
                        message: (t = (e = this.classes) == null ? void 0 : e.message) != null ? t : "message",
                        status: (r = (n = this.classes) == null ? void 0 : n.status) != null ? r : "status",
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
                            e.numberOfPlayer = this.player.joinedPlayers, e.locale = this.$ecastRoom.locale, Si.gameStarted(this.$ecastRoom.appTag, e)
                        }
                    } catch (e) {
                        this.$handleEcastError(e)
                    }
                }
            }
        }),
        x8 = ["textContent"],
        U8 = ["textContent"],
        F8 = ["textContent"],
        B8 = ["textContent"];

    function G8(e, t, n, r, s, o) {
        const c = gn("t");
        return z(), Q("div", {
            class: Ye(["lobby-actions", {
                vip: e.player.hasControls
            }])
        }, [!e.messageLocation || e.messageLocation === "top" ? (z(), Q("p", {
            key: 0,
            class: Ye(e.localClasses.message),
            textContent: Ce(e.joinedCountText)
        }, null, 10, x8)) : Ae("", !0), e.player.hasControls ? (z(), Q(ut, {
            key: 1
        }, [e.player.status === "waitingForMore" ? (z(), Q("p", {
            key: 0,
            class: Ye(e.localClasses.status)
        }, Ce(e.neededText), 3)) : Ae("", !0), e.player.status === "canStart" ? (z(), Q("button", {
            key: 1,
            class: Ye(e.localClasses.action),
            onClick: t[0] || (t[0] = (...u) => e.onStartClick && e.onStartClick(...u)),
            textContent: Ce(e.startText || e.$t("LOBBY.BUTTON_START"))
        }, null, 10, U8)) : Ae("", !0), e.player.status === "countdown" ? (z(), Q("button", {
            key: 2,
            class: Ye(e.localClasses.action),
            onClick: t[1] || (t[1] = (...u) => e.onCancelClick && e.onCancelClick(...u)),
            textContent: Ce(e.cancelText || e.$t("LOBBY.BUTTON_CANCEL"))
        }, null, 10, F8)) : Ae("", !0)], 64)) : e.player.gamepadStart ? (z(), Q(ut, {
            key: 2
        }, [e.player.status === "waitingForMore" ? (z(), Q("p", {
            key: 0,
            class: Ye(e.localClasses.status)
        }, Ce(e.neededText), 3)) : Ae("", !0), e.player.status === "canStart" ? je((z(), Q("p", {
            key: 1,
            class: Ye(e.localClasses.status)
        }, null, 2)), [
            [c, "LOBBY.WAITING_FOR_GAMEPAD"]
        ]) : Ae("", !0), e.player.status === "countdown" ? je((z(), Q("p", {
            key: 2,
            class: Ye(e.localClasses.status)
        }, null, 2)), [
            [c, "LOBBY.GAME_STARTING"]
        ]) : Ae("", !0)], 64)) : (z(), Q(ut, {
            key: 3
        }, [e.player.status === "waitingForMore" ? (z(), Q("p", {
            key: 0,
            class: Ye(e.localClasses.status)
        }, Ce(e.neededText), 3)) : Ae("", !0), e.player.status === "canStart" ? (z(), Q("p", {
            key: 1,
            class: Ye(e.localClasses.status)
        }, Ce(e.waitingForVIPText), 3)) : Ae("", !0), e.player.status === "countdown" ? je((z(), Q("p", {
            key: 2,
            class: Ye(e.localClasses.status)
        }, null, 2)), [
            [c, "LOBBY.GAME_STARTING"]
        ]) : Ae("", !0)], 64)), e.messageLocation === "bottom" ? (z(), Q("p", {
            key: 4,
            class: Ye(e.localClasses.message),
            textContent: Ce(e.joinedCountText)
        }, null, 10, B8)) : Ae("", !0)], 2)
    }
    const W8 = yt(M8, [
            ["render", G8]
        ]),
        j8 = ze({
            components: {
                LobbyActions: W8
            },
            props: {
                player: Object
            }
        }),
        H8 = {
            class: "lobby"
        },
        K8 = {
            class: "constrain"
        };

    function V8(e, t, n, r, s, o) {
        const c = Qt("LobbyActions");
        return z(), Q("div", H8, [Y("div", K8, [ft(c, {
            player: e.player
        }, null, 8, ["player"])])])
    }
    const Y8 = yt(j8, [
            ["render", V8]
        ]),
        q8 = ze({
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
                    var e, t, n, r, s, o;
                    return {
                        message: (t = (e = this.classes) == null ? void 0 : e.message) != null ? t : "message",
                        status: (r = (n = this.classes) == null ? void 0 : n.status) != null ? r : "status",
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
                            e.isSequal = !0, e.locale = this.$ecastRoom.locale, Si.gameStarted(this.$ecastRoom.appTag, e)
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

    function z8(e, t, n, r, s, o) {
        const c = gn("t");
        return e.player && e.player.status ? (z(), Q("div", {
            key: 0,
            class: Ye(["post-game-actions", {
                vip: e.player.hasControls
            }])
        }, [!e.messageLocation || e.messageLocation === "top" ? je((z(), Q("p", {
            key: 0,
            class: Ye(e.localClasses.message)
        }, null, 2)), [
            [c, "POST_GAME.PLAY_AGAIN"]
        ]) : Ae("", !0), e.player.hasControls ? (z(), Q(ut, {
            key: 1
        }, [e.player.status === "waiting" ? je((z(), Q("button", {
            key: 0,
            class: Ye(e.localClasses.action),
            onClick: t[0] || (t[0] = (...u) => e.onSamePlayersClick && e.onSamePlayersClick(...u))
        }, null, 2)), [
            [c, "POST_GAME.BUTTON_SAME_PLAYERS"]
        ]) : Ae("", !0), e.player.status === "waiting" ? je((z(), Q("button", {
            key: 1,
            class: Ye(e.localClasses.action),
            onClick: t[1] || (t[1] = (...u) => e.onNewPlayersClick && e.onNewPlayersClick(...u))
        }, null, 2)), [
            [c, "POST_GAME.BUTTON_NEW_PLAYERS"]
        ]) : Ae("", !0), e.player.status === "countdown" ? je((z(), Q("button", {
            key: 2,
            class: Ye(e.localClasses.action),
            onClick: t[2] || (t[2] = (...u) => e.onCancelClick && e.onCancelClick(...u))
        }, null, 2)), [
            [c, "LOBBY.BUTTON_CANCEL"]
        ]) : Ae("", !0)], 64)) : e.player.gamepadStart ? je((z(), Q("p", {
            key: 2,
            class: Ye(e.localClasses.status)
        }, null, 2)), [
            [c, "LOBBY.WAITING_FOR_GAMEPAD"]
        ]) : (z(), Q("p", {
            key: 3,
            class: Ye(e.localClasses.status)
        }, Ce(e.waitingForVIPText), 3)), e.messageLocation === "bottom" ? je((z(), Q("p", {
            key: 4,
            class: Ye(e.localClasses.message)
        }, null, 2)), [
            [c, "POST_GAME.PLAY_AGAIN"]
        ]) : Ae("", !0)], 2)) : Ae("", !0)
    }
    const X8 = yt(q8, [
            ["render", z8]
        ]),
        J8 = ze({
            components: {
                PostGameActions: X8
            },
            props: {
                player: Object
            }
        }),
        Q8 = {
            class: "post-game"
        },
        Z8 = {
            class: "constrain"
        };

    function e4(e, t, n, r, s, o) {
        const c = Qt("PostGameActions");
        return z(), Q("div", Q8, [Y("div", Z8, [ft(c, {
            player: e.player
        }, null, 8, ["player"])])])
    }
    const t4 = yt(J8, [
            ["render", e4]
        ]),
        n4 = ze({
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
                        if (e && e instanceof pp.ObjectEntity) return !0
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
        r4 = {
            class: "single-text-entry"
        },
        i4 = {
            class: "constrain"
        },
        s4 = {
            key: 0
        },
        a4 = {
            key: 1,
            for: "input"
        },
        o4 = ["value", "rows", "placeholder", "disabled"],
        c4 = ["value", "placeholder", "disabled"];

    function l4(e, t, n, r, s, o) {
        const c = gn("bb");
        return z(), Q("div", r4, [Y("div", i4, [e.player.prompt ? je((z(), Q("p", s4, null, 512)), [
            [c, e.player.prompt]
        ]) : Ae("", !0), e.player.label ? je((z(), Q("label", a4, null, 512)), [
            [c, e.player.label]
        ]) : Ae("", !0), e.player.isMultiline ? (z(), Q("textarea", {
            key: 2,
            id: "input",
            value: e.value,
            rows: e.player.lines || 2,
            placeholder: e.player.placeholder,
            disabled: e.player.isDisabled,
            onInput: t[0] || (t[0] = (...u) => e.onValueInput && e.onValueInput(...u))
        }, null, 40, o4)) : (z(), Q("input", {
            key: 3,
            id: "input",
            type: "text",
            value: e.value,
            placeholder: e.player.placeholder,
            disabled: e.player.isDisabled,
            onInput: t[1] || (t[1] = (...u) => e.onValueInput && e.onValueInput(...u))
        }, null, 40, c4)), je(Y("button", {
            onClick: t[2] || (t[2] = Bt((...u) => e.onSubmitClick && e.onSubmitClick(...u), ["prevent"]))
        }, null, 512), [
            [c, e.player.submitText || "SUBMIT"]
        ])])])
    }
    const u4 = yt(n4, [
            ["render", l4]
        ]),
        f4 = ze({
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
                    const n = e.target;
                    this.values[t] = n.value
                },
                isObjectResponseKey() {
                    if (!this.player.responseType) {
                        const e = this.$ecast.entities[this.player.responseKey];
                        if (e && e instanceof pp.ObjectEntity) return !0
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
                    this.player.inputs.forEach((t, n) => {
                        var s;
                        const r = (s = t.key) != null ? s : `input${n}`;
                        e[r] = this.values[n]
                    }), this.$ecast.updateObject(this.player.responseKey, e).catch(this.$handleEcastError)
                },
                sendAsText() {
                    const e = this.player.separator || "|";
                    this.$ecast.updateText(this.player.responseKey, this.values.join(e)).catch(this.$handleEcastError)
                }
            }
        }),
        d4 = {
            class: "multi-text-entry"
        },
        h4 = {
            class: "constrain"
        },
        p4 = {
            key: 0
        },
        g4 = ["for"],
        m4 = ["id", "value", "rows", "placeholder", "disabled", "onInput"],
        v4 = ["id", "value", "placeholder", "disabled", "onInput"];

    function _4(e, t, n, r, s, o) {
        const c = gn("bb");
        return z(), Q("div", d4, [Y("div", h4, [e.player.prompt ? je((z(), Q("p", p4, null, 512)), [
            [c, e.player.prompt]
        ]) : Ae("", !0), (z(!0), Q(ut, null, Ar(e.player.inputs, (u, f) => (z(), Q(ut, null, [u.label ? je((z(), Q("label", {
            key: `label-${u.key}`,
            for: `input-${f}`
        }, null, 8, g4)), [
            [c, u.label]
        ]) : Ae("", !0), u.isMultiline ? (z(), Q("textarea", {
            id: `input-${f}`,
            key: `input-${f}`,
            value: e.values[f],
            rows: u.lines || 2,
            placeholder: u.placeholder,
            disabled: u.isDisabled,
            onInput: h => e.onValueInput(h, f)
        }, null, 40, m4)) : (z(), Q("input", {
            id: `input-${f}`,
            key: `input-${u.key}`,
            type: "text",
            value: e.values[f],
            placeholder: u.placeholder,
            disabled: u.isDisabled,
            onInput: h => e.onValueInput(h, f)
        }, null, 40, v4))], 64))), 256)), je(Y("button", {
            onClick: t[0] || (t[0] = Bt((...u) => e.onSubmitClick && e.onSubmitClick(...u), ["prevent"]))
        }, null, 512), [
            [c, e.player.submitText || "SUBMIT"]
        ])])])
    }
    const y4 = yt(f4, [
            ["render", _4]
        ]),
        E4 = ze({
            props: {
                player: Object
            }
        }),
        b4 = {
            class: "waiting"
        },
        T4 = {
            class: "constrain"
        },
        S4 = {
            key: 0
        };

    function O4(e, t, n, r, s, o) {
        const c = gn("bb");
        return z(), Q("div", b4, [Y("div", T4, [e.player.message ? je((z(), Q("p", S4, null, 512)), [
            [c, e.player.message]
        ]) : Ae("", !0)])])
    }
    const w4 = yt(E4, [
        ["render", O4]
    ]);
    ze({
        components: {
            Choices: b8,
            Doodle: I8,
            Draw: D8,
            Lobby: Y8,
            PostGame: t4,
            SingleTextEntry: u4,
            MultiTextEntry: y4,
            Waiting: w4
        },
        props: {
            applyStyling: {
                type: Boolean,
                default: !0
            },
            player: Object
        }
    });
    ze({
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
            Si.galleryImpression(this.artifact.categoryId, "post_game")
        },
        methods: {
            onLinkClick() {
                Si.galleryClick(this.artifact.categoryId, "post_game"), na.setAsViewed(0)
            }
        }
    });
    const C4 = ze({
            props: {
                modelValue: String
            },
            emits: {
                "update:modelValue": e => !0
            },
            watch: {
                modelValue(e, t) {
                    if (e !== t) {
                        const n = this.$refs.input;
                        n.value = e
                    }
                }
            },
            methods: {
                async onInput(e) {
                    const t = e.target,
                        n = t.maxLength === -1 ? Number.MAX_SAFE_INTEGER : t.maxLength;
                    if (t.value.length > n) {
                        t.value = t.value.substring(0, n);
                        return
                    }
                    this.$emit("update:modelValue", t.value), await this.$nextTick(), t.value !== this.modelValue && (t.value = this.modelValue)
                }
            }
        }),
        A4 = ["value"];

    function I4(e, t, n, r, s, o) {
        return z(), Q("input", {
            ref: "input",
            value: e.modelValue,
            onInput: t[0] || (t[0] = (...c) => e.onInput && e.onInput(...c))
        }, null, 40, A4)
    }
    const R4 = yt(C4, [
        ["render", I4]
    ]);
    var Yi, Pc, to = typeof Map == "function" ? new Map : (Yi = [], Pc = [], {
            has: function(e) {
                return Yi.indexOf(e) > -1
            },
            get: function(e) {
                return Pc[Yi.indexOf(e)]
            },
            set: function(e, t) {
                Yi.indexOf(e) === -1 && (Yi.push(e), Pc.push(t))
            },
            delete: function(e) {
                var t = Yi.indexOf(e);
                t > -1 && (Yi.splice(t, 1), Pc.splice(t, 1))
            }
        }),
        XS = function(e) {
            return new Event(e, {
                bubbles: !0
            })
        };
    try {
        new Event("test")
    } catch {
        XS = function(t) {
            var n = document.createEvent("Event");
            return n.initEvent(t, !0, !1), n
        }
    }

    function N4(e) {
        var t = to.get(e);
        t && t.destroy()
    }

    function L4(e) {
        var t = to.get(e);
        t && t.update()
    }
    var Va = null;
    typeof window > "u" || typeof window.getComputedStyle != "function" ? ((Va = function(e) {
        return e
    }).destroy = function(e) {
        return e
    }, Va.update = function(e) {
        return e
    }) : ((Va = function(e, t) {
        return e && Array.prototype.forEach.call(e.length ? e : [e], function(n) {
            return function(r) {
                if (r && r.nodeName && r.nodeName === "TEXTAREA" && !to.has(r)) {
                    var s, o = null,
                        c = null,
                        u = null,
                        f = function() {
                            r.clientWidth !== c && b()
                        },
                        h = function(C) {
                            window.removeEventListener("resize", f, !1), r.removeEventListener("input", b, !1), r.removeEventListener("keyup", b, !1), r.removeEventListener("autosize:destroy", h, !1), r.removeEventListener("autosize:update", b, !1), Object.keys(C).forEach(function(R) {
                                r.style[R] = C[R]
                            }), to.delete(r)
                        }.bind(r, {
                            height: r.style.height,
                            resize: r.style.resize,
                            overflowY: r.style.overflowY,
                            overflowX: r.style.overflowX,
                            wordWrap: r.style.wordWrap
                        });
                    r.addEventListener("autosize:destroy", h, !1), "onpropertychange" in r && "oninput" in r && r.addEventListener("keyup", b, !1), window.addEventListener("resize", f, !1), r.addEventListener("input", b, !1), r.addEventListener("autosize:update", b, !1), r.style.overflowX = "hidden", r.style.wordWrap = "break-word", to.set(r, {
                        destroy: h,
                        update: b
                    }), (s = window.getComputedStyle(r, null)).resize === "vertical" ? r.style.resize = "none" : s.resize === "both" && (r.style.resize = "horizontal"), o = s.boxSizing === "content-box" ? -(parseFloat(s.paddingTop) + parseFloat(s.paddingBottom)) : parseFloat(s.borderTopWidth) + parseFloat(s.borderBottomWidth), isNaN(o) && (o = 0), b()
                }

                function g(C) {
                    var R = r.style.width;
                    r.style.width = "0px", r.style.width = R, r.style.overflowY = C
                }

                function y() {
                    if (r.scrollHeight !== 0) {
                        var C = function(M) {
                                for (var W = []; M && M.parentNode && M.parentNode instanceof Element;) M.parentNode.scrollTop && W.push({
                                    node: M.parentNode,
                                    scrollTop: M.parentNode.scrollTop
                                }), M = M.parentNode;
                                return W
                            }(r),
                            R = document.documentElement && document.documentElement.scrollTop;
                        r.style.height = "", r.style.height = r.scrollHeight + o + "px", c = r.clientWidth, C.forEach(function(M) {
                            M.node.scrollTop = M.scrollTop
                        }), R && (document.documentElement.scrollTop = R)
                    }
                }

                function b() {
                    y();
                    var C = Math.round(parseFloat(r.style.height)),
                        R = window.getComputedStyle(r, null),
                        M = R.boxSizing === "content-box" ? Math.round(parseFloat(R.height)) : r.offsetHeight;
                    if (M < C ? R.overflowY === "hidden" && (g("scroll"), y(), M = R.boxSizing === "content-box" ? Math.round(parseFloat(window.getComputedStyle(r, null).height)) : r.offsetHeight) : R.overflowY !== "hidden" && (g("hidden"), y(), M = R.boxSizing === "content-box" ? Math.round(parseFloat(window.getComputedStyle(r, null).height)) : r.offsetHeight), u !== M) {
                        u = M;
                        var W = XS("autosize:resized");
                        try {
                            r.dispatchEvent(W)
                        } catch {}
                    }
                }
            }(n)
        }), e
    }).destroy = function(e) {
        return e && Array.prototype.forEach.call(e.length ? e : [e], N4), e
    }, Va.update = function(e) {
        return e && Array.prototype.forEach.call(e.length ? e : [e], L4), e
    });
    var $4 = Va,
        P4 = {
            exports: {}
        },
        kc = function(e) {
            return e && e.Math == Math && e
        },
        jn = kc(typeof globalThis == "object" && globalThis) || kc(typeof window == "object" && window) || kc(typeof self == "object" && self) || kc(typeof Ft == "object" && Ft) || function() {
            return this
        }() || Function("return this")(),
        gp = {},
        Hn = function(e) {
            try {
                return !!e()
            } catch {
                return !0
            }
        },
        k4 = Hn,
        Li = !k4(function() {
            return Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1] != 7
        }),
        D4 = Hn,
        mp = !D4(function() {
            var e = function() {}.bind();
            return typeof e != "function" || e.hasOwnProperty("prototype")
        }),
        M4 = mp,
        Dc = Function.prototype.call,
        $i = M4 ? Dc.bind(Dc) : function() {
            return Dc.apply(Dc, arguments)
        },
        JS = {},
        QS = {}.propertyIsEnumerable,
        ZS = Object.getOwnPropertyDescriptor,
        x4 = ZS && !QS.call({
            1: 2
        }, 1);
    JS.f = x4 ? function(t) {
        var n = ZS(this, t);
        return !!n && n.enumerable
    } : QS;
    var eO = function(e, t) {
            return {
                enumerable: !(e & 1),
                configurable: !(e & 2),
                writable: !(e & 4),
                value: t
            }
        },
        tO = mp,
        nO = Function.prototype,
        U4 = nO.bind,
        qd = nO.call,
        F4 = tO && U4.bind(qd, qd),
        vn = tO ? function(e) {
            return e && F4(e)
        } : function(e) {
            return e && function() {
                return qd.apply(e, arguments)
            }
        },
        rO = vn,
        B4 = rO({}.toString),
        G4 = rO("".slice),
        Vl = function(e) {
            return G4(B4(e), 8, -1)
        },
        W4 = vn,
        j4 = Hn,
        H4 = Vl,
        Bf = Object,
        K4 = W4("".split),
        V4 = j4(function() {
            return !Bf("z").propertyIsEnumerable(0)
        }) ? function(e) {
            return H4(e) == "String" ? K4(e, "") : Bf(e)
        } : Bf,
        Y4 = TypeError,
        Io = function(e) {
            if (e == null) throw Y4("Can't call method on " + e);
            return e
        },
        q4 = V4,
        z4 = Io,
        Yl = function(e) {
            return q4(z4(e))
        },
        Nn = function(e) {
            return typeof e == "function"
        },
        X4 = Nn,
        Ea = function(e) {
            return typeof e == "object" ? e !== null : X4(e)
        },
        Gf = jn,
        J4 = Nn,
        Q4 = function(e) {
            return J4(e) ? e : void 0
        },
        ql = function(e, t) {
            return arguments.length < 2 ? Q4(Gf[e]) : Gf[e] && Gf[e][t]
        },
        Z4 = vn,
        iO = Z4({}.isPrototypeOf),
        e5 = ql,
        t5 = e5("navigator", "userAgent") || "",
        sO = jn,
        Wf = t5,
        yy = sO.process,
        Ey = sO.Deno,
        by = yy && yy.versions || Ey && Ey.version,
        Ty = by && by.v8,
        cr, ll;
    Ty && (cr = Ty.split("."), ll = cr[0] > 0 && cr[0] < 4 ? 1 : +(cr[0] + cr[1]));
    !ll && Wf && (cr = Wf.match(/Edge\/(\d+)/), (!cr || cr[1] >= 74) && (cr = Wf.match(/Chrome\/(\d+)/), cr && (ll = +cr[1])));
    var n5 = ll,
        Sy = n5,
        r5 = Hn,
        aO = !!Object.getOwnPropertySymbols && !r5(function() {
            var e = Symbol();
            return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && Sy && Sy < 41
        }),
        i5 = aO,
        oO = i5 && !Symbol.sham && typeof Symbol.iterator == "symbol",
        s5 = ql,
        a5 = Nn,
        o5 = iO,
        c5 = oO,
        l5 = Object,
        cO = c5 ? function(e) {
            return typeof e == "symbol"
        } : function(e) {
            var t = s5("Symbol");
            return a5(t) && o5(t.prototype, l5(e))
        },
        u5 = String,
        f5 = function(e) {
            try {
                return u5(e)
            } catch {
                return "Object"
            }
        },
        d5 = Nn,
        h5 = f5,
        p5 = TypeError,
        g5 = function(e) {
            if (d5(e)) return e;
            throw p5(h5(e) + " is not a function")
        },
        m5 = g5,
        vp = function(e, t) {
            var n = e[t];
            return n == null ? void 0 : m5(n)
        },
        jf = $i,
        Hf = Nn,
        Kf = Ea,
        v5 = TypeError,
        _5 = function(e, t) {
            var n, r;
            if (t === "string" && Hf(n = e.toString) && !Kf(r = jf(n, e)) || Hf(n = e.valueOf) && !Kf(r = jf(n, e)) || t !== "string" && Hf(n = e.toString) && !Kf(r = jf(n, e))) return r;
            throw v5("Can't convert object to primitive value")
        },
        zl = {
            exports: {}
        },
        Oy = jn,
        y5 = Object.defineProperty,
        _p = function(e, t) {
            try {
                y5(Oy, e, {
                    value: t,
                    configurable: !0,
                    writable: !0
                })
            } catch {
                Oy[e] = t
            }
            return t
        },
        E5 = jn,
        b5 = _p,
        wy = "__core-js_shared__",
        T5 = E5[wy] || b5(wy, {}),
        yp = T5,
        Cy = yp;
    (zl.exports = function(e, t) {
        return Cy[e] || (Cy[e] = t !== void 0 ? t : {})
    })("versions", []).push({
        version: "3.23.4",
        mode: "global",
        copyright: "\xA9 2014-2022 Denis Pushkarev (zloirock.ru)",
        license: "https://github.com/zloirock/core-js/blob/v3.23.4/LICENSE",
        source: "https://github.com/zloirock/core-js"
    });
    var S5 = Io,
        O5 = Object,
        lO = function(e) {
            return O5(S5(e))
        },
        w5 = vn,
        C5 = lO,
        A5 = w5({}.hasOwnProperty),
        Pi = Object.hasOwn || function(t, n) {
            return A5(C5(t), n)
        },
        I5 = vn,
        R5 = 0,
        N5 = Math.random(),
        L5 = I5(1 .toString),
        uO = function(e) {
            return "Symbol(" + (e === void 0 ? "" : e) + ")_" + L5(++R5 + N5, 36)
        },
        $5 = jn,
        P5 = zl.exports,
        Ay = Pi,
        k5 = uO,
        Iy = aO,
        fO = oO,
        Ns = P5("wks"),
        cs = $5.Symbol,
        Ry = cs && cs.for,
        D5 = fO ? cs : cs && cs.withoutSetter || k5,
        hs = function(e) {
            if (!Ay(Ns, e) || !(Iy || typeof Ns[e] == "string")) {
                var t = "Symbol." + e;
                Iy && Ay(cs, e) ? Ns[e] = cs[e] : fO && Ry ? Ns[e] = Ry(t) : Ns[e] = D5(t)
            }
            return Ns[e]
        },
        M5 = $i,
        Ny = Ea,
        Ly = cO,
        x5 = vp,
        U5 = _5,
        F5 = hs,
        B5 = TypeError,
        G5 = F5("toPrimitive"),
        W5 = function(e, t) {
            if (!Ny(e) || Ly(e)) return e;
            var n = x5(e, G5),
                r;
            if (n) {
                if (t === void 0 && (t = "default"), r = M5(n, e, t), !Ny(r) || Ly(r)) return r;
                throw B5("Can't convert object to primitive value")
            }
            return t === void 0 && (t = "number"), U5(e, t)
        },
        j5 = W5,
        H5 = cO,
        dO = function(e) {
            var t = j5(e, "string");
            return H5(t) ? t : t + ""
        },
        K5 = jn,
        $y = Ea,
        zd = K5.document,
        V5 = $y(zd) && $y(zd.createElement),
        hO = function(e) {
            return V5 ? zd.createElement(e) : {}
        },
        Y5 = Li,
        q5 = Hn,
        z5 = hO,
        pO = !Y5 && !q5(function() {
            return Object.defineProperty(z5("div"), "a", {
                get: function() {
                    return 7
                }
            }).a != 7
        }),
        X5 = Li,
        J5 = $i,
        Q5 = JS,
        Z5 = eO,
        eK = Yl,
        tK = dO,
        nK = Pi,
        rK = pO,
        Py = Object.getOwnPropertyDescriptor;
    gp.f = X5 ? Py : function(t, n) {
        if (t = eK(t), n = tK(n), rK) try {
            return Py(t, n)
        } catch {}
        if (nK(t, n)) return Z5(!J5(Q5.f, t, n), t[n])
    };
    var Ro = {},
        iK = Li,
        sK = Hn,
        gO = iK && sK(function() {
            return Object.defineProperty(function() {}, "prototype", {
                value: 42,
                writable: !1
            }).prototype != 42
        }),
        aK = Ea,
        oK = String,
        cK = TypeError,
        ps = function(e) {
            if (aK(e)) return e;
            throw cK(oK(e) + " is not an object")
        },
        lK = Li,
        uK = pO,
        fK = gO,
        Mc = ps,
        ky = dO,
        dK = TypeError,
        Vf = Object.defineProperty,
        hK = Object.getOwnPropertyDescriptor,
        Yf = "enumerable",
        qf = "configurable",
        zf = "writable";
    Ro.f = lK ? fK ? function(t, n, r) {
        if (Mc(t), n = ky(n), Mc(r), typeof t == "function" && n === "prototype" && "value" in r && zf in r && !r[zf]) {
            var s = hK(t, n);
            s && s[zf] && (t[n] = r.value, r = {
                configurable: qf in r ? r[qf] : s[qf],
                enumerable: Yf in r ? r[Yf] : s[Yf],
                writable: !1
            })
        }
        return Vf(t, n, r)
    } : Vf : function(t, n, r) {
        if (Mc(t), n = ky(n), Mc(r), uK) try {
            return Vf(t, n, r)
        } catch {}
        if ("get" in r || "set" in r) throw dK("Accessors not supported");
        return "value" in r && (t[n] = r.value), t
    };
    var pK = Li,
        gK = Ro,
        mK = eO,
        Ep = pK ? function(e, t, n) {
            return gK.f(e, t, mK(1, n))
        } : function(e, t, n) {
            return e[t] = n, e
        },
        mO = {
            exports: {}
        },
        Xd = Li,
        vK = Pi,
        vO = Function.prototype,
        _K = Xd && Object.getOwnPropertyDescriptor,
        bp = vK(vO, "name"),
        yK = bp && function() {}.name === "something",
        EK = bp && (!Xd || Xd && _K(vO, "name").configurable),
        bK = {
            EXISTS: bp,
            PROPER: yK,
            CONFIGURABLE: EK
        },
        TK = vn,
        SK = Nn,
        Jd = yp,
        OK = TK(Function.toString);
    SK(Jd.inspectSource) || (Jd.inspectSource = function(e) {
        return OK(e)
    });
    var _O = Jd.inspectSource,
        wK = jn,
        CK = Nn,
        AK = _O,
        Dy = wK.WeakMap,
        IK = CK(Dy) && /native code/.test(AK(Dy)),
        RK = zl.exports,
        NK = uO,
        My = RK("keys"),
        yO = function(e) {
            return My[e] || (My[e] = NK(e))
        },
        Tp = {},
        LK = IK,
        EO = jn,
        Xf = vn,
        $K = Ea,
        PK = Ep,
        Jf = Pi,
        Qf = yp,
        kK = yO,
        DK = Tp,
        xy = "Object already initialized",
        Qd = EO.TypeError,
        MK = EO.WeakMap,
        ul, vo, fl, xK = function(e) {
            return fl(e) ? vo(e) : ul(e, {})
        },
        UK = function(e) {
            return function(t) {
                var n;
                if (!$K(t) || (n = vo(t)).type !== e) throw Qd("Incompatible receiver, " + e + " required");
                return n
            }
        };
    if (LK || Qf.state) {
        var qi = Qf.state || (Qf.state = new MK),
            FK = Xf(qi.get),
            Uy = Xf(qi.has),
            BK = Xf(qi.set);
        ul = function(e, t) {
            if (Uy(qi, e)) throw new Qd(xy);
            return t.facade = e, BK(qi, e, t), t
        }, vo = function(e) {
            return FK(qi, e) || {}
        }, fl = function(e) {
            return Uy(qi, e)
        }
    } else {
        var Ls = kK("state");
        DK[Ls] = !0, ul = function(e, t) {
            if (Jf(e, Ls)) throw new Qd(xy);
            return t.facade = e, PK(e, Ls, t), t
        }, vo = function(e) {
            return Jf(e, Ls) ? e[Ls] : {}
        }, fl = function(e) {
            return Jf(e, Ls)
        }
    }
    var bO = {
            set: ul,
            get: vo,
            has: fl,
            enforce: xK,
            getterFor: UK
        },
        GK = Hn,
        WK = Nn,
        xc = Pi,
        Zd = Li,
        jK = bK.CONFIGURABLE,
        HK = _O,
        TO = bO,
        KK = TO.enforce,
        VK = TO.get,
        zc = Object.defineProperty,
        YK = Zd && !GK(function() {
            return zc(function() {}, "length", {
                value: 8
            }).length !== 8
        }),
        qK = String(String).split("String"),
        zK = mO.exports = function(e, t, n) {
            String(t).slice(0, 7) === "Symbol(" && (t = "[" + String(t).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), n && n.getter && (t = "get " + t), n && n.setter && (t = "set " + t), (!xc(e, "name") || jK && e.name !== t) && (Zd ? zc(e, "name", {
                value: t,
                configurable: !0
            }) : e.name = t), YK && n && xc(n, "arity") && e.length !== n.arity && zc(e, "length", {
                value: n.arity
            });
            try {
                n && xc(n, "constructor") && n.constructor ? Zd && zc(e, "prototype", {
                    writable: !1
                }) : e.prototype && (e.prototype = void 0)
            } catch {}
            var r = KK(e);
            return xc(r, "source") || (r.source = qK.join(typeof t == "string" ? t : "")), e
        };
    Function.prototype.toString = zK(function() {
        return WK(this) && VK(this).source || HK(this)
    }, "toString");
    var XK = Nn,
        JK = Ro,
        QK = mO.exports,
        ZK = _p,
        SO = function(e, t, n, r) {
            r || (r = {});
            var s = r.enumerable,
                o = r.name !== void 0 ? r.name : t;
            if (XK(n) && QK(n, o, r), r.global) s ? e[t] = n : ZK(t, n);
            else {
                try {
                    r.unsafe ? e[t] && (s = !0) : delete e[t]
                } catch {}
                s ? e[t] = n : JK.f(e, t, {
                    value: n,
                    enumerable: !1,
                    configurable: !r.nonConfigurable,
                    writable: !r.nonWritable
                })
            }
            return e
        },
        OO = {},
        eV = Math.ceil,
        tV = Math.floor,
        nV = Math.trunc || function(t) {
            var n = +t;
            return (n > 0 ? tV : eV)(n)
        },
        rV = nV,
        Xl = function(e) {
            var t = +e;
            return t !== t || t === 0 ? 0 : rV(t)
        },
        iV = Xl,
        sV = Math.max,
        aV = Math.min,
        oV = function(e, t) {
            var n = iV(e);
            return n < 0 ? sV(n + t, 0) : aV(n, t)
        },
        cV = Xl,
        lV = Math.min,
        wO = function(e) {
            return e > 0 ? lV(cV(e), 9007199254740991) : 0
        },
        uV = wO,
        fV = function(e) {
            return uV(e.length)
        },
        dV = Yl,
        hV = oV,
        pV = fV,
        Fy = function(e) {
            return function(t, n, r) {
                var s = dV(t),
                    o = pV(s),
                    c = hV(r, o),
                    u;
                if (e && n != n) {
                    for (; o > c;)
                        if (u = s[c++], u != u) return !0
                } else
                    for (; o > c; c++)
                        if ((e || c in s) && s[c] === n) return e || c || 0;
                return !e && -1
            }
        },
        gV = {
            includes: Fy(!0),
            indexOf: Fy(!1)
        },
        mV = vn,
        Zf = Pi,
        vV = Yl,
        _V = gV.indexOf,
        yV = Tp,
        By = mV([].push),
        CO = function(e, t) {
            var n = vV(e),
                r = 0,
                s = [],
                o;
            for (o in n) !Zf(yV, o) && Zf(n, o) && By(s, o);
            for (; t.length > r;) Zf(n, o = t[r++]) && (~_V(s, o) || By(s, o));
            return s
        },
        Sp = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
        EV = CO,
        bV = Sp,
        TV = bV.concat("length", "prototype");
    OO.f = Object.getOwnPropertyNames || function(t) {
        return EV(t, TV)
    };
    var AO = {};
    AO.f = Object.getOwnPropertySymbols;
    var SV = ql,
        OV = vn,
        wV = OO,
        CV = AO,
        AV = ps,
        IV = OV([].concat),
        RV = SV("Reflect", "ownKeys") || function(t) {
            var n = wV.f(AV(t)),
                r = CV.f;
            return r ? IV(n, r(t)) : n
        },
        Gy = Pi,
        NV = RV,
        LV = gp,
        $V = Ro,
        PV = function(e, t, n) {
            for (var r = NV(t), s = $V.f, o = LV.f, c = 0; c < r.length; c++) {
                var u = r[c];
                !Gy(e, u) && !(n && Gy(n, u)) && s(e, u, o(t, u))
            }
        },
        kV = Hn,
        DV = Nn,
        MV = /#|\.prototype\./,
        No = function(e, t) {
            var n = UV[xV(e)];
            return n == BV ? !0 : n == FV ? !1 : DV(t) ? kV(t) : !!t
        },
        xV = No.normalize = function(e) {
            return String(e).replace(MV, ".").toLowerCase()
        },
        UV = No.data = {},
        FV = No.NATIVE = "N",
        BV = No.POLYFILL = "P",
        GV = No,
        ed = jn,
        WV = gp.f,
        jV = Ep,
        HV = SO,
        KV = _p,
        VV = PV,
        YV = GV,
        IO = function(e, t) {
            var n = e.target,
                r = e.global,
                s = e.stat,
                o, c, u, f, h, g;
            if (r ? c = ed : s ? c = ed[n] || KV(n, {}) : c = (ed[n] || {}).prototype, c)
                for (u in t) {
                    if (h = t[u], e.dontCallGetSet ? (g = WV(c, u), f = g && g.value) : f = c[u], o = YV(r ? u : n + (s ? "." : "#") + u, e.forced), !o && f !== void 0) {
                        if (typeof h == typeof f) continue;
                        VV(h, f)
                    }(e.sham || f && f.sham) && jV(h, "sham", !0), HV(c, u, h, e)
                }
        },
        qV = Ea,
        zV = Vl,
        XV = hs,
        JV = XV("match"),
        QV = function(e) {
            var t;
            return qV(e) && ((t = e[JV]) !== void 0 ? !!t : zV(e) == "RegExp")
        },
        ZV = hs,
        e6 = ZV("toStringTag"),
        RO = {};
    RO[e6] = "z";
    var t6 = String(RO) === "[object z]",
        n6 = t6,
        r6 = Nn,
        Xc = Vl,
        i6 = hs,
        s6 = i6("toStringTag"),
        a6 = Object,
        o6 = Xc(function() {
            return arguments
        }()) == "Arguments",
        c6 = function(e, t) {
            try {
                return e[t]
            } catch {}
        },
        l6 = n6 ? Xc : function(e) {
            var t, n, r;
            return e === void 0 ? "Undefined" : e === null ? "Null" : typeof(n = c6(t = a6(e), s6)) == "string" ? n : o6 ? Xc(t) : (r = Xc(t)) == "Object" && r6(t.callee) ? "Arguments" : r
        },
        u6 = l6,
        f6 = String,
        Jl = function(e) {
            if (u6(e) === "Symbol") throw TypeError("Cannot convert a Symbol value to a string");
            return f6(e)
        },
        d6 = ps,
        NO = function() {
            var e = d6(this),
                t = "";
            return e.hasIndices && (t += "d"), e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.unicodeSets && (t += "v"), e.sticky && (t += "y"), t
        },
        h6 = $i,
        p6 = Pi,
        g6 = iO,
        m6 = NO,
        Wy = RegExp.prototype,
        v6 = function(e) {
            var t = e.flags;
            return t === void 0 && !("flags" in Wy) && !p6(e, "flags") && g6(Wy, e) ? h6(m6, e) : t
        },
        Op = vn,
        _6 = lO,
        y6 = Math.floor,
        td = Op("".charAt),
        E6 = Op("".replace),
        nd = Op("".slice),
        b6 = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
        T6 = /\$([$&'`]|\d{1,2})/g,
        LO = function(e, t, n, r, s, o) {
            var c = n + e.length,
                u = r.length,
                f = T6;
            return s !== void 0 && (s = _6(s), f = b6), E6(o, f, function(h, g) {
                var y;
                switch (td(g, 0)) {
                    case "$":
                        return "$";
                    case "&":
                        return e;
                    case "`":
                        return nd(t, 0, n);
                    case "'":
                        return nd(t, c);
                    case "<":
                        y = s[nd(g, 1, -1)];
                        break;
                    default:
                        var b = +g;
                        if (b === 0) return h;
                        if (b > u) {
                            var C = y6(b / 10);
                            return C === 0 ? h : C <= u ? r[C - 1] === void 0 ? td(g, 1) : r[C - 1] + td(g, 1) : h
                        }
                        y = r[b - 1]
                }
                return y === void 0 ? "" : y
            })
        },
        S6 = IO,
        O6 = $i,
        wp = vn,
        jy = Io,
        w6 = Nn,
        C6 = QV,
        ja = Jl,
        A6 = vp,
        I6 = v6,
        R6 = LO,
        N6 = hs,
        L6 = N6("replace"),
        $6 = TypeError,
        $O = wp("".indexOf);
    wp("".replace);
    var Hy = wp("".slice),
        P6 = Math.max,
        Ky = function(e, t, n) {
            return n > e.length ? -1 : t === "" ? n : $O(e, t, n)
        };
    S6({
        target: "String",
        proto: !0
    }, {
        replaceAll: function(t, n) {
            var r = jy(this),
                s, o, c, u, f, h, g, y, b, C = 0,
                R = 0,
                M = "";
            if (t != null) {
                if (s = C6(t), s && (o = ja(jy(I6(t))), !~$O(o, "g"))) throw $6("`.replaceAll` does not allow non-global regexes");
                if (c = A6(t, L6), c) return O6(c, t, r, n)
            }
            for (u = ja(r), f = ja(t), h = w6(n), h || (n = ja(n)), g = f.length, y = P6(1, g), C = Ky(u, f, 0); C !== -1;) b = h ? ja(n(f, C, u)) : R6(f, u, C, [], void 0, n), M += Hy(u, R, C) + b, R = C + g, C = Ky(u, f, C + y);
            return R < u.length && (M += Hy(u, R)), M
        }
    });
    var Cp = Hn,
        k6 = jn,
        Ap = k6.RegExp,
        Ip = Cp(function() {
            var e = Ap("a", "y");
            return e.lastIndex = 2, e.exec("abcd") != null
        }),
        D6 = Ip || Cp(function() {
            return !Ap("a", "y").sticky
        }),
        M6 = Ip || Cp(function() {
            var e = Ap("^r", "gy");
            return e.lastIndex = 2, e.exec("str") != null
        }),
        x6 = {
            BROKEN_CARET: M6,
            MISSED_STICKY: D6,
            UNSUPPORTED_Y: Ip
        },
        PO = {},
        U6 = CO,
        F6 = Sp,
        B6 = Object.keys || function(t) {
            return U6(t, F6)
        },
        G6 = Li,
        W6 = gO,
        j6 = Ro,
        H6 = ps,
        K6 = Yl,
        V6 = B6;
    PO.f = G6 && !W6 ? Object.defineProperties : function(t, n) {
        H6(t);
        for (var r = K6(n), s = V6(n), o = s.length, c = 0, u; o > c;) j6.f(t, u = s[c++], r[u]);
        return t
    };
    var Y6 = ql,
        q6 = Y6("document", "documentElement"),
        z6 = ps,
        X6 = PO,
        Vy = Sp,
        J6 = Tp,
        Q6 = q6,
        Z6 = hO,
        eY = yO,
        Yy = ">",
        qy = "<",
        eh = "prototype",
        th = "script",
        kO = eY("IE_PROTO"),
        rd = function() {},
        DO = function(e) {
            return qy + th + Yy + e + qy + "/" + th + Yy
        },
        zy = function(e) {
            e.write(DO("")), e.close();
            var t = e.parentWindow.Object;
            return e = null, t
        },
        tY = function() {
            var e = Z6("iframe"),
                t = "java" + th + ":",
                n;
            return e.style.display = "none", Q6.appendChild(e), e.src = String(t), n = e.contentWindow.document, n.open(), n.write(DO("document.F=Object")), n.close(), n.F
        },
        Uc, Jc = function() {
            try {
                Uc = new ActiveXObject("htmlfile")
            } catch {}
            Jc = typeof document < "u" ? document.domain && Uc ? zy(Uc) : tY() : zy(Uc);
            for (var e = Vy.length; e--;) delete Jc[eh][Vy[e]];
            return Jc()
        };
    J6[kO] = !0;
    var nY = Object.create || function(t, n) {
            var r;
            return t !== null ? (rd[eh] = z6(t), r = new rd, rd[eh] = null, r[kO] = t) : r = Jc(), n === void 0 ? r : X6.f(r, n)
        },
        rY = Hn,
        iY = jn,
        sY = iY.RegExp,
        aY = rY(function() {
            var e = sY(".", "s");
            return !(e.dotAll && e.exec(`
`) && e.flags === "s")
        }),
        oY = Hn,
        cY = jn,
        lY = cY.RegExp,
        uY = oY(function() {
            var e = lY("(?<a>b)", "g");
            return e.exec("b").groups.a !== "b" || "b".replace(e, "$<a>c") !== "bc"
        }),
        Fs = $i,
        Ql = vn,
        fY = Jl,
        dY = NO,
        hY = x6,
        pY = zl.exports,
        gY = nY,
        mY = bO.get,
        vY = aY,
        _Y = uY,
        yY = pY("native-string-replace", String.prototype.replace),
        dl = RegExp.prototype.exec,
        nh = dl,
        EY = Ql("".charAt),
        bY = Ql("".indexOf),
        TY = Ql("".replace),
        id = Ql("".slice),
        rh = function() {
            var e = /a/,
                t = /b*/g;
            return Fs(dl, e, "a"), Fs(dl, t, "a"), e.lastIndex !== 0 || t.lastIndex !== 0
        }(),
        MO = hY.BROKEN_CARET,
        ih = /()??/.exec("")[1] !== void 0,
        SY = rh || ih || MO || vY || _Y;
    SY && (nh = function(t) {
        var n = this,
            r = mY(n),
            s = fY(t),
            o = r.raw,
            c, u, f, h, g, y, b;
        if (o) return o.lastIndex = n.lastIndex, c = Fs(nh, o, s), n.lastIndex = o.lastIndex, c;
        var C = r.groups,
            R = MO && n.sticky,
            M = Fs(dY, n),
            W = n.source,
            I = 0,
            K = s;
        if (R && (M = TY(M, "y", ""), bY(M, "g") === -1 && (M += "g"), K = id(s, n.lastIndex), n.lastIndex > 0 && (!n.multiline || n.multiline && EY(s, n.lastIndex - 1) !== `
`) && (W = "(?: " + W + ")", K = " " + K, I++), u = new RegExp("^(?:" + W + ")", M)), ih && (u = new RegExp("^" + W + "$(?!\\s)", M)), rh && (f = n.lastIndex), h = Fs(dl, R ? u : n, K), R ? h ? (h.input = id(h.input, I), h[0] = id(h[0], I), h.index = n.lastIndex, n.lastIndex += h[0].length) : n.lastIndex = 0 : rh && h && (n.lastIndex = n.global ? h.index + h[0].length : f), ih && h && h.length > 1 && Fs(yY, h[0], u, function() {
                for (g = 1; g < arguments.length - 2; g++) arguments[g] === void 0 && (h[g] = void 0)
            }), h && C)
            for (h.groups = y = gY(null), g = 0; g < C.length; g++) b = C[g], y[b[0]] = h[b[1]];
        return h
    });
    var Rp = nh,
        OY = IO,
        Xy = Rp;
    OY({
        target: "RegExp",
        proto: !0,
        forced: /./.exec !== Xy
    }, {
        exec: Xy
    });
    var wY = mp,
        xO = Function.prototype,
        Jy = xO.apply,
        Qy = xO.call,
        CY = typeof Reflect == "object" && Reflect.apply || (wY ? Qy.bind(Jy) : function() {
            return Qy.apply(Jy, arguments)
        }),
        Zy = vn,
        eE = SO,
        AY = Rp,
        tE = Hn,
        UO = hs,
        IY = Ep,
        RY = UO("species"),
        sd = RegExp.prototype,
        NY = function(e, t, n, r) {
            var s = UO(e),
                o = !tE(function() {
                    var h = {};
                    return h[s] = function() {
                        return 7
                    }, "" [e](h) != 7
                }),
                c = o && !tE(function() {
                    var h = !1,
                        g = /a/;
                    return e === "split" && (g = {}, g.constructor = {}, g.constructor[RY] = function() {
                        return g
                    }, g.flags = "", g[s] = /./ [s]), g.exec = function() {
                        return h = !0, null
                    }, g[s](""), !h
                });
            if (!o || !c || n) {
                var u = Zy(/./ [s]),
                    f = t(s, "" [e], function(h, g, y, b, C) {
                        var R = Zy(h),
                            M = g.exec;
                        return M === AY || M === sd.exec ? o && !C ? {
                            done: !0,
                            value: u(g, y, b)
                        } : {
                            done: !0,
                            value: R(y, g, b)
                        } : {
                            done: !1
                        }
                    });
                eE(String.prototype, e, f[0]), eE(sd, s, f[1])
            }
            r && IY(sd[s], "sham", !0)
        },
        Np = vn,
        LY = Xl,
        $Y = Jl,
        PY = Io,
        kY = Np("".charAt),
        nE = Np("".charCodeAt),
        DY = Np("".slice),
        rE = function(e) {
            return function(t, n) {
                var r = $Y(PY(t)),
                    s = LY(n),
                    o = r.length,
                    c, u;
                return s < 0 || s >= o ? e ? "" : void 0 : (c = nE(r, s), c < 55296 || c > 56319 || s + 1 === o || (u = nE(r, s + 1)) < 56320 || u > 57343 ? e ? kY(r, s) : c : e ? DY(r, s, s + 2) : (c - 55296 << 10) + (u - 56320) + 65536)
            }
        },
        MY = {
            codeAt: rE(!1),
            charAt: rE(!0)
        },
        xY = MY.charAt,
        UY = function(e, t, n) {
            return t + (n ? xY(e, t).length : 1)
        },
        iE = $i,
        FY = ps,
        BY = Nn,
        GY = Vl,
        WY = Rp,
        jY = TypeError,
        HY = function(e, t) {
            var n = e.exec;
            if (BY(n)) {
                var r = iE(n, e, t);
                return r !== null && FY(r), r
            }
            if (GY(e) === "RegExp") return iE(WY, e, t);
            throw jY("RegExp#exec called on incompatible receiver")
        },
        KY = CY,
        sE = $i,
        Zl = vn,
        VY = NY,
        YY = Hn,
        qY = ps,
        zY = Nn,
        XY = Xl,
        JY = wO,
        $s = Jl,
        QY = Io,
        ZY = UY,
        eq = vp,
        tq = LO,
        nq = HY,
        rq = hs,
        sh = rq("replace"),
        iq = Math.max,
        sq = Math.min,
        aq = Zl([].concat),
        ad = Zl([].push),
        aE = Zl("".indexOf),
        oE = Zl("".slice),
        oq = function(e) {
            return e === void 0 ? e : String(e)
        },
        cq = function() {
            return "a".replace(/./, "$0") === "$0"
        }(),
        cE = function() {
            return /./ [sh] ? /./ [sh]("a", "$0") === "" : !1
        }(),
        lq = !YY(function() {
            var e = /./;
            return e.exec = function() {
                var t = [];
                return t.groups = {
                    a: "7"
                }, t
            }, "".replace(e, "$<a>") !== "7"
        });
    VY("replace", function(e, t, n) {
        var r = cE ? "$" : "$0";
        return [function(o, c) {
            var u = QY(this),
                f = o == null ? void 0 : eq(o, sh);
            return f ? sE(f, o, u, c) : sE(t, $s(u), o, c)
        }, function(s, o) {
            var c = qY(this),
                u = $s(s);
            if (typeof o == "string" && aE(o, r) === -1 && aE(o, "$<") === -1) {
                var f = n(t, c, u, o);
                if (f.done) return f.value
            }
            var h = zY(o);
            h || (o = $s(o));
            var g = c.global;
            if (g) {
                var y = c.unicode;
                c.lastIndex = 0
            }
            for (var b = [];;) {
                var C = nq(c, u);
                if (C === null || (ad(b, C), !g)) break;
                var R = $s(C[0]);
                R === "" && (c.lastIndex = ZY(u, JY(c.lastIndex), y))
            }
            for (var M = "", W = 0, I = 0; I < b.length; I++) {
                C = b[I];
                for (var K = $s(C[0]), q = iq(sq(XY(C.index), u.length), 0), j = [], G = 1; G < C.length; G++) ad(j, oq(C[G]));
                var se = C.groups;
                if (h) {
                    var ce = aq([K], j, q, u);
                    se !== void 0 && ad(ce, se);
                    var le = $s(KY(o, void 0, ce))
                } else le = tq(K, u, q, j, se, o);
                q >= W && (M += oE(u, W, q) + le, W = q + K.length)
            }
            return M + oE(u, W)
        }]
    }, !lq || !cq || cE);
    var uq = jn,
        fq = vn,
        dq = function(e, t) {
            return fq(uq[e].prototype[t])
        },
        hq = dq,
        pq = hq("String", "replaceAll"),
        gq = pq,
        mq = gq,
        vq = mq,
        _q = vq,
        yq = _q,
        Eq = yq;
    (function(e) {
        e.exports = Eq
    })(P4);
    ze({
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
                    const n = this.$refs.textarea;
                    n.value = e
                }
            }
        },
        mounted() {
            this.autosize && $4(this.$refs.textarea)
        },
        methods: {
            focus() {
                this.$refs.textarea.focus()
            },
            async onInput(e) {
                const t = e.target;
                if ((t == null ? void 0 : t.value) == null) return;
                const n = t.maxLength === -1 ? Number.MAX_SAFE_INTEGER : t.maxLength;
                if (t.value = t.value.replaceAll(`
`, ""), t.value.length > n) {
                    t.value = t.value.substring(0, n);
                    return
                }
                this.$emit("update:modelValue", t.value), await this.$nextTick(), t.value !== this.modelValue && (t.value = this.modelValue)
            },
            onKeypressEnter(e) {
                this.$emit("keypress", e)
            }
        }
    });
    ze({
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
            const e = Ei();
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
    var Ji = {},
        eu = {},
        FO = {},
        tu = {},
        Lp = {};
    (function(e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.Token = void 0;
        var t = function() {
            function n(r, s, o, c) {
                this.type = r, this.content = s, this.attributes = o, this.text = c
            }
            return n.prototype.toString = function() {
                return this.content + " (" + this.type + ")"
            }, n.prototype.equals = function(r) {
                return this.type === r.type && this.content === r.content
            }, n.prototype.convertToTextToken = function() {
                var r;
                this.type === n.Type.startTag ? (this.content = (r = this.text) !== null && r !== void 0 ? r : "", this.type = n.Type.text) : this.type === n.Type.endTag && (this.content = "[/" + this.content + "]", this.type = n.Type.text)
            }, n
        }();
        e.Token = t,
            function(n) {
                (function(r) {
                    r[r.text = 0] = "text", r[r.startTag = 1] = "startTag", r[r.endTag = 2] = "endTag"
                })(n.Type || (n.Type = {}))
            }(t = e.Token || (e.Token = {})), e.Token = t
    })(Lp);
    Object.defineProperty(tu, "__esModule", {
        value: !0
    });
    tu.Tokenizer = void 0;
    var ai = Lp,
        bq = function() {
            function e(t) {
                this.tags = t
            }
            return e.prototype.tokenizeString = function(t) {
                var n = this,
                    r = this.getTokens(t),
                    s = [],
                    o = !1,
                    c = "",
                    u = "";
                return r.forEach(function(f) {
                    var h = n.tags[f.content],
                        g = !0;
                    !h && !o ? f.convertToTextToken() : o ? f.type === ai.Token.Type.endTag && f.content === c ? (o = !1, s.push(e.createTextToken(u))) : (f.convertToTextToken(), u += f.content, g = !1) : h.noNesting && f.type === ai.Token.Type.startTag && (o = !0, c = f.content, u = ""), g && s.push(f)
                }), s
            }, e.prototype.getTokens = function(t) {
                for (var n = '\\[(/\\w*)\\]|\\[(\\w*)+(=(["])' + e.valueChars + "*\\4)?( (" + e.nameChars + '+)?=(["])(' + e.valueChars + "+)\\7)*\\]", r = new RegExp(n, "g"), s = [], o = r.exec(t), c = 0; o;) {
                    var u = o.index - c;
                    u > 0 && s.push(e.createTextToken(t.substr(c, u))), s.push(e.createTagToken(o)), c = r.lastIndex, o = r.exec(t)
                }
                var f = t.length - c;
                return f > 0 && s.push(e.createTextToken(t.substr(c, f))), s
            }, e.createTextToken = function(t) {
                return new ai.Token(ai.Token.Type.text, t)
            }, e.createTagToken = function(t) {
                if (!t[1]) {
                    for (var n = t[2], r = {}, s = new RegExp("(" + e.nameChars + '+)?=(["])(' + e.valueChars + "+)\\2", "g"), o = t[0].substr(1 + n.length, t[0].length - 2 - n.length), c = s.exec(o); c;) c[1] ? r[c[1]] = c[3] : r[n] = c[3], c = s.exec(o);
                    return new ai.Token(ai.Token.Type.startTag, n, r, t[0])
                }
                return new ai.Token(ai.Token.Type.endTag, t[1].substr(1, t[1].length - 1))
            }, e.nameChars = "[a-zA-Z0-9\\.\\-_:;/]", e.valueChars = "[a-zA-Z0-9\\.\\-_:;#/\\s]", e
        }();
    tu.Tokenizer = bq;
    (function(e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.ParseTree = void 0;
        var t = tu,
            n = Lp,
            r = function() {
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
                    if (f.type === n.Token.Type.text) {
                        var h = new s({
                            type: s.Type.text,
                            content: f.content
                        });
                        o.subTrees.push(h)
                    }
                    if (f.type === n.Token.Type.startTag) {
                        var g = f.content,
                            h = new s({
                                type: s.Type.tag,
                                content: g,
                                attributes: f.attributes
                            }),
                            y = s.buildTreeFromTokens(h, c, g);
                        if (!y) return null;
                        o.subTrees.push(y)
                    }
                    if (f.type === n.Token.Type.endTag) {
                        var g = f.content;
                        return g === u ? o : null
                    }
                    return !c.length && u !== "" ? null : this.buildTreeFromTokens(o, c, u)
                }, s
            }();
        e.ParseTree = r,
            function(s) {
                (function(o) {
                    o[o.root = 0] = "root", o[o.text = 1] = "text", o[o.tag = 2] = "tag"
                })(s.Type || (s.Type = {}))
            }(r = e.ParseTree || (e.ParseTree = {})), e.ParseTree = r
    })(FO);
    var Lo = {};
    Object.defineProperty(Lo, "__esModule", {
        value: !0
    });
    Lo.Tag = void 0;
    var Tq = function() {
        function e(t) {
            var n;
            this.tagName = t.tagName, this.insertLineBreaks = t.insertLineBreaks, this.suppressLineBreaks = t.suppressLineBreaks, this.noNesting = t.noNesting, this.markupGenerator = (n = t.markupGenerator) !== null && n !== void 0 ? n : function(r, s) {
                return "<" + r.tagName + ">" + s + "</" + r.tagName + ">"
            }
        }
        return e.create = function(t, n, r) {
            var s, o, c;
            return r === void 0 && (r = {}), new e({
                tagName: t,
                insertLineBreaks: (s = r.insertLineBreaks) !== null && s !== void 0 ? s : !0,
                suppressLineBreaks: (o = r.suppressLineBreaks) !== null && o !== void 0 ? o : !1,
                noNesting: (c = r.noNesting) !== null && c !== void 0 ? c : !1,
                markupGenerator: n
            })
        }, e
    }();
    Lo.Tag = Tq;
    Object.defineProperty(eu, "__esModule", {
        value: !0
    });
    eu.BBCodeParser = void 0;
    var lE = FO,
        uE = Lo,
        Sq = function() {
            function e(t, n) {
                this.options = n, this.escapeHTML = !1, this.tags = t, n && (this.escapeHTML = n.escapeHTML)
            }
            return Object.defineProperty(e, "defaultTags", {
                get: function() {
                    return {
                        b: uE.Tag.create("b"),
                        i: uE.Tag.create("i")
                    }
                },
                enumerable: !1,
                configurable: !0
            }), e.prototype.parse = function(t, n, r, s) {
                n === void 0 && (n = !1), r === void 0 && (r = !0), s === void 0 && (s = !0);
                var o = lE.ParseTree.buildTree(t, this.tags);
                return !o || !o.isValid ? t : this.treeToHtml(o.subTrees, r, s, n)
            }, e.prototype.addTag = function(t, n) {
                this.tags[t] = n
            }, e.prototype.treeToHtml = function(t, n, r, s) {
                var o = this;
                s === void 0 && (s = !1);
                var c = "",
                    u = !1;
                return t.forEach(function(f) {
                    var h;
                    if (f.type === lE.ParseTree.Type.text) {
                        var g = f.content;
                        r && (g = o.escapeHTML ? e.escapeHTML(g) : g), n && !u && (g = g.replace(/(\r\n|\n|\r)/gm, "<br>"), u = !1), c += g
                    } else {
                        var y = o.tags[f.content],
                            b = o.treeToHtml(f.subTrees, y.insertLineBreaks, r, s);
                        s ? c += b : c += y.markupGenerator(y, b, (h = f.attributes) !== null && h !== void 0 ? h : {}), u = y.suppressLineBreaks
                    }
                }), c
            }, e.escapeHTML = function(t) {
                return t.replace(/[&<>]/g, function(n) {
                    return e.tagsToReplace[n] || n
                })
            }, e.tagsToReplace = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;"
            }, e
        }();
    eu.BBCodeParser = Sq;
    (function(e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.Tag = e.BBCodeParser = void 0;
        var t = eu;
        Object.defineProperty(e, "BBCodeParser", {
            enumerable: !0,
            get: function() {
                return t.BBCodeParser
            }
        });
        var n = Lo;
        Object.defineProperty(e, "Tag", {
            enumerable: !0,
            get: function() {
                return n.Tag
            }
        })
    })(Ji);
    const Oq = {
        install: e => {
            const t = {
                section: Ji.Tag.create("section", (o, c, {
                    section: u
                }) => `<div ${u?`class="section ${u}"`:'class="section"'}>${c}</div>`)
            };
            ["b", "bold", "B"].forEach(o => {
                t[o] = Ji.Tag.create(o, (c, u) => `<strong>${u}</strong>`)
            }), ["i", "italic", "I"].forEach(o => {
                t[o] = Ji.Tag.create(o, (c, u) => `<em>${u}</em>`)
            });
            const s = new Ji.BBCodeParser(t);
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
                            s.addTag(o, Ji.Tag.create(o, c));
                            return
                        }
                        s.addTag(o, Ji.Tag.create(o, c.generator, c.options))
                    })
                }
            }), e.config.globalProperties.$bb = o => (typeof o != "string" && console.warn(`[BBCodePlugin] Received unexpected ${typeof o} with value ${o};converting to string before parsing.`), s.parse(String(o)))
        }
    };
    var wq = {
        exports: {}
    };
    (function(e) {
        (function(t, n) {
            var r = t.KonamiCode,
                s = t.KonamiCode = n;
            s.noConflict = function() {
                return t.KonamiCode = r, s
            }, e.exports && (e.exports = n)
        })(Ft, function t(n) {
            var r = this,
                s = {},
                o = t;
            o.getNumberOfInstance = function() {
                return o._numberOfInstance
            }, r.enable = function() {
                return s.listenCodeCharSequence(), s.listenCodeGestureSequence(), s.debug && s.debug("Listener enabled for all."), r
            }, r.enableKeyboardKeys = function() {
                return s.listenCodeCharSequence(), s.debug && s.debug("Listener enabled for Keyboard Keys."), r
            }, r.enableTouchGesture = function() {
                return s.listenCodeGestureSequence(), s.debug && s.debug("Listener enabled for Touch Gesture."), r
            }, r.disable = function() {
                return s.stopCodeCharSequence(), s.stopCodeGestureSequence(), s.debug && s.debug("Listener disabled for all."), r
            }, r.disableKeyboardKeys = function() {
                return s.stopCodeCharSequence(), s.debug && s.debug("Listener disabled for Keyboard Keys."), r
            }, r.disableTouchGesture = function() {
                return s.stopCodeGestureSequence(), s.debug && s.debug("Listener disabled for Touch Gesture."), r
            }, r.setListener = function(c) {
                return s.stopCodeCharSequence(), s.stopCodeGestureSequence(), s.listener = c || document, s.listenCodeCharSequence(), s.listenCodeGestureSequence(), s.debug && s.debug("Listener changed.", c), r
            }, r.setCallback = function(c) {
                return s.afterCodeSequenceCallback = typeof c == "function" && c || s.defaultCallback, s.debug && s.debug("Callback changed.", c), r
            }, r.setOptions = function(c) {
                return s.initOptions(c), r
            }, s.keptLastCodeChar = function() {
                s.input.length > s.konamiCodeChar.length && (s.input = s.input.substr(s.input.length - s.konamiCodeChar.length))
            }, s.defaultCallback = function() {
                s.debug && s.debug("Konami Code Sequence Entered. There is no action defined.")
            }, s.checkIfCodeCharIsValid = function() {
                s.input === s.konamiCodeChar && s.afterCodeSequenceCallback(r)
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
                    g = c > u ? f : h;
                g = s.tap === !0 ? "tp" : g, g === s.konamiCodeGesture.substr(0, 2) ? s.konamiCodeGesture = s.konamiCodeGesture.substr(2, s.konamiCodeGesture.length - 2) : s.konamiCodeGesture = s.originalCodeGesture, s.konamiCodeGesture.length === 0 && (s.konamiCodeGesture = s.originalCodeGesture, s.afterCodeSequenceCallback(r))
            }, s.checkDebugMode = function(c) {
                c && c.debug === !0 ? (s.debug = function(u, f) {
                    f !== void 0 ? console.log(u, f) : console.log(u)
                }, s.debug && s.debug("Debug Mode On.")) : s.debug = !1
            }, s.initOptions = function(c) {
                s.checkDebugMode(c), s.listener = c && c.listener || document, s.afterCodeSequenceCallback = typeof c == "function" && c || c && typeof c.callback == "function" && c.callback || s.defaultCallback
            }, s.init = function() {
                s.input = "", s.konamiCodeChar = "38384040373937396665", s.konamiCodeGesture = "upupdndnltrtltrttptp", s.startX = 0, s.startY = 0, s.stopX = 0, s.stopY = 0, s.tap = !1, s.capture = !1, o._numberOfInstance = o._numberOfInstance ? o._numberOfInstance + 1 : 1, s.initOptions(n), s.listenCodeCharSequence(), s.listenCodeGestureSequence()
            }, s.init()
        })
    })(wq);
    ze({
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
                var t, n, r, s;
                return e.key === "," ? (t = this.replayer) == null ? void 0 : t.toPreviousEntity() : e.key === "." ? (n = this.replayer) == null ? void 0 : n.toNextEntity() : e.key === "q" ? (r = this.replayer) == null ? void 0 : r.toPreviousMarker() : e.key === "w" ? (s = this.replayer) == null ? void 0 : s.toNextMarker() : null
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
    });

    function Cq(e, t) {
        for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1;);
        return e
    }
    var Aq = Cq,
        Iq = CT,
        Rq = Iq(Object.keys, Object),
        Nq = Rq,
        Lq = zh,
        $q = Nq,
        Pq = Object.prototype,
        kq = Pq.hasOwnProperty;

    function Dq(e) {
        if (!Lq(e)) return $q(e);
        var t = [];
        for (var n in Object(e)) kq.call(e, n) && n != "constructor" && t.push(n);
        return t
    }
    var Mq = Dq,
        xq = MT,
        Uq = Mq,
        Fq = Gl;

    function Bq(e) {
        return Fq(e) ? xq(e) : Uq(e)
    }
    var nu = Bq,
        Gq = Oo,
        Wq = nu;

    function jq(e, t) {
        return e && Gq(t, Wq(t), e)
    }
    var Hq = jq,
        Kq = Oo,
        Vq = wo;

    function Yq(e, t) {
        return e && Kq(t, Vq(t), e)
    }
    var qq = Yq;

    function zq(e, t) {
        for (var n = -1, r = e == null ? 0 : e.length, s = 0, o = []; ++n < r;) {
            var c = e[n];
            t(c, n, e) && (o[s++] = c)
        }
        return o
    }
    var Xq = zq;

    function Jq() {
        return []
    }
    var BO = Jq,
        Qq = Xq,
        Zq = BO,
        e7 = Object.prototype,
        t7 = e7.propertyIsEnumerable,
        fE = Object.getOwnPropertySymbols,
        n7 = fE ? function(e) {
            return e == null ? [] : (e = Object(e), Qq(fE(e), function(t) {
                return t7.call(e, t)
            }))
        } : Zq,
        $p = n7,
        r7 = Oo,
        i7 = $p;

    function s7(e, t) {
        return r7(e, i7(e), t)
    }
    var a7 = s7;

    function o7(e, t) {
        for (var n = -1, r = t.length, s = e.length; ++n < r;) e[s + n] = t[n];
        return e
    }
    var GO = o7,
        c7 = GO,
        l7 = qh,
        u7 = $p,
        f7 = BO,
        d7 = Object.getOwnPropertySymbols,
        h7 = d7 ? function(e) {
            for (var t = []; e;) c7(t, u7(e)), e = l7(e);
            return t
        } : f7,
        WO = h7,
        p7 = Oo,
        g7 = WO;

    function m7(e, t) {
        return p7(e, g7(e), t)
    }
    var v7 = m7,
        _7 = GO,
        y7 = Ri;

    function E7(e, t, n) {
        var r = t(e);
        return y7(e) ? r : _7(r, n(e))
    }
    var jO = E7,
        b7 = jO,
        T7 = $p,
        S7 = nu;

    function O7(e) {
        return b7(e, S7, T7)
    }
    var w7 = O7,
        C7 = jO,
        A7 = WO,
        I7 = wo;

    function R7(e) {
        return C7(e, I7, A7)
    }
    var N7 = R7,
        L7 = ds,
        $7 = Ir,
        P7 = L7($7, "DataView"),
        k7 = P7,
        D7 = ds,
        M7 = Ir,
        x7 = D7(M7, "Promise"),
        U7 = x7,
        F7 = ds,
        B7 = Ir,
        G7 = F7(B7, "Set"),
        W7 = G7,
        j7 = ds,
        H7 = Ir,
        K7 = j7(H7, "WeakMap"),
        V7 = K7,
        ah = k7,
        oh = Kh,
        ch = U7,
        lh = W7,
        uh = V7,
        HO = ga,
        ba = yT,
        dE = "[object Map]",
        Y7 = "[object Object]",
        hE = "[object Promise]",
        pE = "[object Set]",
        gE = "[object WeakMap]",
        mE = "[object DataView]",
        q7 = ba(ah),
        z7 = ba(oh),
        X7 = ba(ch),
        J7 = ba(lh),
        Q7 = ba(uh),
        Qi = HO;
    (ah && Qi(new ah(new ArrayBuffer(1))) != mE || oh && Qi(new oh) != dE || ch && Qi(ch.resolve()) != hE || lh && Qi(new lh) != pE || uh && Qi(new uh) != gE) && (Qi = function(e) {
        var t = HO(e),
            n = t == Y7 ? e.constructor : void 0,
            r = n ? ba(n) : "";
        if (r) switch (r) {
            case q7:
                return mE;
            case z7:
                return dE;
            case X7:
                return hE;
            case J7:
                return pE;
            case Q7:
                return gE
        }
        return t
    });
    var Pp = Qi,
        Z7 = Object.prototype,
        e9 = Z7.hasOwnProperty;

    function t9(e) {
        var t = e.length,
            n = new e.constructor(t);
        return t && typeof e[0] == "string" && e9.call(e, "index") && (n.index = e.index, n.input = e.input), n
    }
    var n9 = t9,
        r9 = Yh;

    function i9(e, t) {
        var n = t ? r9(e.buffer) : e.buffer;
        return new e.constructor(n, e.byteOffset, e.byteLength)
    }
    var s9 = i9,
        a9 = /\w*$/;

    function o9(e) {
        var t = new e.constructor(e.source, a9.exec(e));
        return t.lastIndex = e.lastIndex, t
    }
    var c9 = o9,
        vE = Ul,
        _E = vE ? vE.prototype : void 0,
        yE = _E ? _E.valueOf : void 0;

    function l9(e) {
        return yE ? Object(yE.call(e)) : {}
    }
    var u9 = l9,
        f9 = Yh,
        d9 = s9,
        h9 = c9,
        p9 = u9,
        g9 = OT,
        m9 = "[object Boolean]",
        v9 = "[object Date]",
        _9 = "[object Map]",
        y9 = "[object Number]",
        E9 = "[object RegExp]",
        b9 = "[object Set]",
        T9 = "[object String]",
        S9 = "[object Symbol]",
        O9 = "[object ArrayBuffer]",
        w9 = "[object DataView]",
        C9 = "[object Float32Array]",
        A9 = "[object Float64Array]",
        I9 = "[object Int8Array]",
        R9 = "[object Int16Array]",
        N9 = "[object Int32Array]",
        L9 = "[object Uint8Array]",
        $9 = "[object Uint8ClampedArray]",
        P9 = "[object Uint16Array]",
        k9 = "[object Uint32Array]";

    function D9(e, t, n) {
        var r = e.constructor;
        switch (t) {
            case O9:
                return f9(e);
            case m9:
            case v9:
                return new r(+e);
            case w9:
                return d9(e, n);
            case C9:
            case A9:
            case I9:
            case R9:
            case N9:
            case L9:
            case $9:
            case P9:
            case k9:
                return g9(e, n);
            case _9:
                return new r;
            case y9:
            case T9:
                return new r(e);
            case E9:
                return h9(e);
            case b9:
                return new r;
            case S9:
                return p9(e)
        }
    }
    var M9 = D9,
        x9 = Pp,
        U9 = Ii,
        F9 = "[object Map]";

    function B9(e) {
        return U9(e) && x9(e) == F9
    }
    var G9 = B9,
        W9 = G9,
        j9 = Xh,
        EE = mo.exports,
        bE = EE && EE.isMap,
        H9 = bE ? j9(bE) : W9,
        K9 = H9,
        V9 = Pp,
        Y9 = Ii,
        q9 = "[object Set]";

    function z9(e) {
        return Y9(e) && V9(e) == q9
    }
    var X9 = z9,
        J9 = X9,
        Q9 = Xh,
        TE = mo.exports,
        SE = TE && TE.isSet,
        Z9 = SE ? Q9(SE) : J9,
        ez = Z9,
        tz = bT,
        nz = Aq,
        rz = kT,
        iz = Hq,
        sz = qq,
        az = il.exports,
        oz = wT,
        cz = a7,
        lz = v7,
        uz = w7,
        fz = N7,
        dz = Pp,
        hz = n9,
        pz = M9,
        gz = AT,
        mz = Ri,
        vz = go.exports,
        _z = K9,
        yz = Ai,
        Ez = ez,
        bz = nu,
        Tz = wo,
        Sz = 1,
        Oz = 2,
        wz = 4,
        KO = "[object Arguments]",
        Cz = "[object Array]",
        Az = "[object Boolean]",
        Iz = "[object Date]",
        Rz = "[object Error]",
        VO = "[object Function]",
        Nz = "[object GeneratorFunction]",
        Lz = "[object Map]",
        $z = "[object Number]",
        YO = "[object Object]",
        Pz = "[object RegExp]",
        kz = "[object Set]",
        Dz = "[object String]",
        Mz = "[object Symbol]",
        xz = "[object WeakMap]",
        Uz = "[object ArrayBuffer]",
        Fz = "[object DataView]",
        Bz = "[object Float32Array]",
        Gz = "[object Float64Array]",
        Wz = "[object Int8Array]",
        jz = "[object Int16Array]",
        Hz = "[object Int32Array]",
        Kz = "[object Uint8Array]",
        Vz = "[object Uint8ClampedArray]",
        Yz = "[object Uint16Array]",
        qz = "[object Uint32Array]",
        bt = {};
    bt[KO] = bt[Cz] = bt[Uz] = bt[Fz] = bt[Az] = bt[Iz] = bt[Bz] = bt[Gz] = bt[Wz] = bt[jz] = bt[Hz] = bt[Lz] = bt[$z] = bt[YO] = bt[Pz] = bt[kz] = bt[Dz] = bt[Mz] = bt[Kz] = bt[Vz] = bt[Yz] = bt[qz] = !0;
    bt[Rz] = bt[VO] = bt[xz] = !1;

    function Qc(e, t, n, r, s, o) {
        var c, u = t & Sz,
            f = t & Oz,
            h = t & wz;
        if (n && (c = s ? n(e, r, s, o) : n(e)), c !== void 0) return c;
        if (!yz(e)) return e;
        var g = mz(e);
        if (g) {
            if (c = hz(e), !u) return oz(e, c)
        } else {
            var y = dz(e),
                b = y == VO || y == Nz;
            if (vz(e)) return az(e, u);
            if (y == YO || y == KO || b && !s) {
                if (c = f || b ? {} : gz(e), !u) return f ? lz(e, sz(c, e)) : cz(e, iz(c, e))
            } else {
                if (!bt[y]) return s ? e : {};
                c = pz(e, y, u)
            }
        }
        o || (o = new tz);
        var C = o.get(e);
        if (C) return C;
        o.set(e, c), Ez(e) ? e.forEach(function(W) {
            c.add(Qc(W, t, n, W, e, o))
        }) : _z(e) && e.forEach(function(W, I) {
            c.set(I, Qc(W, t, n, I, e, o))
        });
        var R = h ? f ? fz : uz : f ? Tz : bz,
            M = g ? void 0 : R(e);
        return nz(M || e, function(W, I) {
            M && (I = W, W = e[I]), rz(c, I, Qc(W, t, n, I, e, o))
        }), c
    }
    var zz = Qc,
        Xz = zz,
        Jz = 1,
        Qz = 4;

    function Zz(e) {
        return Xz(e, Jz | Qz)
    }
    var eX = Zz;
    const tX = ze({
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
                var t, n, r;
                const e = (n = (t = this.$debugRecorder) == null ? void 0 : t.room) == null ? void 0 : n.appTag;
                !e || (this.values = eX(this.$ecastValues), this.content = (r = _y.getPromptGuess(this.values, e)) != null ? r : null)
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
                    !this.$debugRecorder || (this.screen === "debug" && (await this.$debugRecorder.send(this.message), this.$emit("resolve")), this.screen === "feedback" && (await _y.send({
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
        qO = "main/@connect/assets/ad9172fc.png",
        zO = "main/@connect/assets/dc131b16.png",
        nX = "main/@connect/assets/38715b18.png",
        rX = "main/@connect/assets/b0d7c822.png",
        iX = "main/@connect/assets/06150f24.png",
        rr = e => (da("data-v-c4b66a33"), e = e(), ha(), e),
        sX = {
            class: "jbg"
        },
        aX = {
            key: 0,
            class: "options"
        },
        oX = rr(() => Y("img", {
            src: qO,
            alt: "Leave Feedback"
        }, null, -1)),
        cX = rr(() => Y("span", null, [Bn("LEAVE"), Y("br"), Bn("FEEDBACK")], -1)),
        lX = [oX, cX],
        uX = rr(() => Y("img", {
            src: zO,
            alt: "Send Debug"
        }, null, -1)),
        fX = rr(() => Y("span", null, [Bn("SEND A"), Y("br"), Bn("DEBUG")], -1)),
        dX = [uX, fX],
        hX = {
            key: 1,
            class: "feedback"
        },
        pX = rr(() => Y("img", {
            class: "image",
            src: qO,
            alt: "Feedback"
        }, null, -1)),
        gX = rr(() => Y("h3", {
            class: "text"
        }, "Send Feedback", -1)),
        mX = rr(() => Y("p", {
            class: "cta"
        }, "CHOOSE A VIBE", -1)),
        vX = {
            class: "buttons"
        },
        _X = rr(() => Y("img", {
            src: nX,
            alt: "good"
        }, null, -1)),
        yX = [_X],
        EX = rr(() => Y("img", {
            src: rX,
            alt: "good"
        }, null, -1)),
        bX = [EX],
        TX = rr(() => Y("img", {
            src: iX,
            alt: "bad"
        }, null, -1)),
        SX = [TX],
        OX = {
            class: "actions"
        },
        wX = {
            key: 0,
            class: "content-guess"
        },
        CX = Bn("Feedback is about: "),
        AX = {
            key: 2,
            class: "debug"
        },
        IX = rr(() => Y("img", {
            class: "image",
            src: zO,
            alt: "Debug"
        }, null, -1)),
        RX = rr(() => Y("h3", {
            class: "text"
        }, "What is Happening?", -1)),
        NX = {
            class: "actions"
        };

    function LX(e, t, n, r, s, o) {
        return z(), Q("div", sX, [e.screen === "options" ? (z(), Q("div", aX, [Y("button", {
            class: "feedback-button",
            onClick: t[0] || (t[0] = (...c) => e.onFeedbackClick && e.onFeedbackClick(...c))
        }, lX), Y("button", {
            onClick: t[1] || (t[1] = (...c) => e.onDebugClick && e.onDebugClick(...c))
        }, dX)])) : e.screen === "feedback" ? (z(), Q("div", hX, [pX, gX, Y("div", {
            class: Ye(["vibes", {
                "has-selected": e.vibe
            }])
        }, [mX, Y("div", vX, [Y("button", {
            class: Ye({
                selected: e.vibe === "good"
            }),
            onClick: t[2] || (t[2] = c => e.onVibeClick("good"))
        }, yX, 2), Y("button", {
            class: Ye({
                selected: e.vibe === "meh"
            }),
            onClick: t[3] || (t[3] = c => e.onVibeClick("meh"))
        }, bX, 2), Y("button", {
            class: Ye({
                selected: e.vibe === "bad"
            }),
            onClick: t[4] || (t[4] = c => e.onVibeClick("bad"))
        }, SX, 2)])], 2), Y("div", OX, [e.content ? (z(), Q("div", wX, [je(Y("input", {
            "onUpdate:modelValue": t[5] || (t[5] = c => e.isContent = c),
            type: "checkbox"
        }, null, 512), [
            [LP, e.isContent]
        ]), Y("span", null, [CX, Y("em", null, Ce(e.content), 1)])])) : Ae("", !0), je(Y("textarea", {
            "onUpdate:modelValue": t[6] || (t[6] = c => e.message = c),
            rows: "3",
            placeholder: "(optional) more details",
            "aria-label": "Details"
        }, null, 512), [
            [e_, e.message]
        ]), Y("button", {
            onClick: t[7] || (t[7] = Bt((...c) => e.onSubmitClick && e.onSubmitClick(...c), ["prevent"]))
        }, Ce(e.$t("ACTION.SUBMIT")), 1)])])) : e.screen === "debug" ? (z(), Q("div", AX, [IX, RX, Y("div", NX, [je(Y("textarea", {
            "onUpdate:modelValue": t[8] || (t[8] = c => e.message = c),
            rows: "3",
            placeholder: "Enter details",
            "aria-label": "Details"
        }, null, 512), [
            [e_, e.message]
        ]), Y("button", {
            onClick: t[9] || (t[9] = Bt((...c) => e.onSubmitClick && e.onSubmitClick(...c), ["prevent"]))
        }, Ce(e.$t("ACTION.OK")), 1)])])) : Ae("", !0)])
    }
    const $X = yt(tX, [
        ["render", LX],
        ["__scopeId", "data-v-c4b66a33"]
    ]);
    ze({
        methods: {
            onFeedbackClick() {
                this.$showModal($X)
            }
        }
    });
    var PX = ga,
        kX = Ii,
        DX = "[object Symbol]";

    function MX(e) {
        return typeof e == "symbol" || kX(e) && PX(e) == DX
    }
    var kp = MX,
        xX = Ri,
        UX = kp,
        FX = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        BX = /^\w*$/;

    function GX(e, t) {
        if (xX(e)) return !1;
        var n = typeof e;
        return n == "number" || n == "symbol" || n == "boolean" || e == null || UX(e) ? !0 : BX.test(e) || !FX.test(e) || t != null && e in Object(t)
    }
    var WX = GX,
        XO = ET,
        jX = "Expected a function";

    function Dp(e, t) {
        if (typeof e != "function" || t != null && typeof t != "function") throw new TypeError(jX);
        var n = function() {
            var r = arguments,
                s = t ? t.apply(this, r) : r[0],
                o = n.cache;
            if (o.has(s)) return o.get(s);
            var c = e.apply(this, r);
            return n.cache = o.set(s, c) || o, c
        };
        return n.cache = new(Dp.Cache || XO), n
    }
    Dp.Cache = XO;
    var HX = Dp,
        KX = HX,
        VX = 500;

    function YX(e) {
        var t = KX(e, function(r) {
                return n.size === VX && n.clear(), r
            }),
            n = t.cache;
        return t
    }
    var qX = YX,
        zX = qX,
        XX = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        JX = /\\(\\)?/g,
        QX = zX(function(e) {
            var t = [];
            return e.charCodeAt(0) === 46 && t.push(""), e.replace(XX, function(n, r, s, o) {
                t.push(s ? o.replace(JX, "$1") : r || n)
            }), t
        }),
        ZX = QX;

    function eJ(e, t) {
        for (var n = -1, r = e == null ? 0 : e.length, s = Array(r); ++n < r;) s[n] = t(e[n], n, e);
        return s
    }
    var JO = eJ,
        OE = Ul,
        tJ = JO,
        nJ = Ri,
        rJ = kp,
        iJ = 1 / 0,
        wE = OE ? OE.prototype : void 0,
        CE = wE ? wE.toString : void 0;

    function QO(e) {
        if (typeof e == "string") return e;
        if (nJ(e)) return tJ(e, QO) + "";
        if (rJ(e)) return CE ? CE.call(e) : "";
        var t = e + "";
        return t == "0" && 1 / e == -iJ ? "-0" : t
    }
    var sJ = QO,
        aJ = sJ;

    function oJ(e) {
        return e == null ? "" : aJ(e)
    }
    var cJ = oJ,
        lJ = Ri,
        uJ = WX,
        fJ = ZX,
        dJ = cJ;

    function hJ(e, t) {
        return lJ(e) ? e : uJ(e, t) ? [e] : fJ(dJ(e))
    }
    var pJ = hJ,
        gJ = kp,
        mJ = 1 / 0;

    function vJ(e) {
        if (typeof e == "string" || gJ(e)) return e;
        var t = e + "";
        return t == "0" && 1 / e == -mJ ? "-0" : t
    }
    var _J = vJ;
    const $o = {
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

    function yJ() {
        return typeof __SENTRY_BROWSER_BUNDLE__ < "u" && !!__SENTRY_BROWSER_BUNDLE__
    }

    function Mp() {
        return !yJ() && Object.prototype.toString.call(typeof process < "u" ? process : 0) === "[object process]"
    }

    function EJ(e, t) {
        return e.require(t)
    }
    var bJ = {};

    function tn() {
        return Mp() ? global : typeof window < "u" ? window : typeof self < "u" ? self : bJ
    }

    function xp(e, t, n) {
        var r = n || tn(),
            s = r.__SENTRY__ = r.__SENTRY__ || {},
            o = s[e] || (s[e] = t());
        return o
    }
    var ZO = Object.prototype.toString;

    function ew(e) {
        switch (ZO.call(e)) {
            case "[object Error]":
            case "[object Exception]":
            case "[object DOMException]":
                return !0;
            default:
                return ki(e, Error)
        }
    }

    function Ta(e, t) {
        return ZO.call(e) === `[object ${t}]`
    }

    function tw(e) {
        return Ta(e, "ErrorEvent")
    }

    function AE(e) {
        return Ta(e, "DOMError")
    }

    function TJ(e) {
        return Ta(e, "DOMException")
    }

    function aa(e) {
        return Ta(e, "String")
    }

    function SJ(e) {
        return e === null || typeof e != "object" && typeof e != "function"
    }

    function ru(e) {
        return Ta(e, "Object")
    }

    function Up(e) {
        return typeof Event < "u" && ki(e, Event)
    }

    function OJ(e) {
        return typeof Element < "u" && ki(e, Element)
    }

    function wJ(e) {
        return Ta(e, "RegExp")
    }

    function nw(e) {
        return Boolean(e && e.then && typeof e.then == "function")
    }

    function CJ(e) {
        return ru(e) && "nativeEvent" in e && "preventDefault" in e && "stopPropagation" in e
    }

    function AJ(e) {
        return typeof e == "number" && e !== e
    }

    function ki(e, t) {
        try {
            return e instanceof t
        } catch {
            return !1
        }
    }

    function fh(e, t) {
        try {
            let u = e;
            var n = 5,
                r = 80,
                s = [];
            let f = 0,
                h = 0;
            var o = " > ",
                c = o.length;
            let g;
            for (; u && f++ < n && (g = IJ(u, t), !(g === "html" || f > 1 && h + s.length * c + g.length >= r));) s.push(g), h += g.length, u = u.parentNode;
            return s.reverse().join(o)
        } catch {
            return "<unknown>"
        }
    }

    function IJ(e, t) {
        var n = e,
            r = [];
        let s, o, c, u, f;
        if (!n || !n.tagName) return "";
        r.push(n.tagName.toLowerCase());
        var h = t && t.length ? t.filter(y => n.getAttribute(y)).map(y => [y, n.getAttribute(y)]) : null;
        if (h && h.length) h.forEach(y => {
            r.push(`[${y[0]}="${y[1]}"]`)
        });
        else if (n.id && r.push(`#${n.id}`), s = n.className, s && aa(s))
            for (o = s.split(/\s+/), f = 0; f < o.length; f++) r.push(`.${o[f]}`);
        var g = ["type", "name", "title", "alt"];
        for (f = 0; f < g.length; f++) c = g[f], u = n.getAttribute(c), u && r.push(`[${c}="${u}"]`);
        return r.join("")
    }

    function RJ() {
        var e = tn();
        try {
            return e.document.location.href
        } catch {
            return ""
        }
    }
    class Ya extends Error {
        constructor(t, n = "warn") {
            super(t), this.message = t, this.name = new.target.prototype.constructor.name, Object.setPrototypeOf(this, new.target.prototype), this.logLevel = n
        }
    }
    var NJ = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/;

    function LJ(e) {
        return e === "http" || e === "https"
    }

    function $J(e, t = !1) {
        const {
            host: n,
            path: r,
            pass: s,
            port: o,
            projectId: c,
            protocol: u,
            publicKey: f
        } = e;
        return `${u}://${f}${t&&s?`:${s}`:""}@${n}${o?`:${o}`:""}/${r&&`${r}/`}${c}`
    }

    function PJ(e) {
        var t = NJ.exec(e);
        if (!t) throw new Ya(`Invalid Sentry Dsn: ${e}`);
        const [n, r, s = "", o, c = "", u] = t.slice(1);
        let f = "",
            h = u;
        var g = h.split("/");
        if (g.length > 1 && (f = g.slice(0, -1).join("/"), h = g.pop()), h) {
            var y = h.match(/^\d+/);
            y && (h = y[0])
        }
        return rw({
            host: o,
            pass: s,
            path: f,
            projectId: h,
            port: c,
            protocol: n,
            publicKey: r
        })
    }

    function rw(e) {
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

    function kJ(e) {
        if (!(typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__)) return;
        const {
            port: t,
            projectId: n,
            protocol: r
        } = e;
        var s = ["protocol", "publicKey", "host", "projectId"];
        if (s.forEach(o => {
                if (!e[o]) throw new Ya(`Invalid Sentry Dsn: ${o} missing`)
            }), !n.match(/^\d+$/)) throw new Ya(`Invalid Sentry Dsn: Invalid projectId ${n}`);
        if (!LJ(r)) throw new Ya(`Invalid Sentry Dsn: Invalid protocol ${r}`);
        if (t && isNaN(parseInt(t, 10))) throw new Ya(`Invalid Sentry Dsn: Invalid port ${t}`);
        return !0
    }

    function DJ(e) {
        var t = typeof e == "string" ? PJ(e) : rw(e);
        return kJ(t), t
    }
    var MJ = tn(),
        xJ = "Sentry Logger ",
        hl = ["debug", "info", "warn", "error", "log", "assert", "trace"];

    function iw(e) {
        var t = tn();
        if (!("console" in t)) return e();
        var n = t.console,
            r = {};
        hl.forEach(s => {
            var o = n[s] && n[s].__sentry_original__;
            s in t.console && o && (r[s] = n[s], n[s] = o)
        });
        try {
            return e()
        } finally {
            Object.keys(r).forEach(s => {
                n[s] = r[s]
            })
        }
    }

    function IE() {
        let e = !1;
        var t = {
            enable: () => {
                e = !0
            },
            disable: () => {
                e = !1
            }
        };
        return typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__ ? hl.forEach(n => {
            t[n] = (...r) => {
                e && iw(() => {
                    MJ.console[n](`${xJ}[${n}]:`, ...r)
                })
            }
        }) : hl.forEach(n => {
            t[n] = () => {}
        }), t
    }
    let Yt;
    typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__ ? Yt = xp("logger", IE) : Yt = IE();

    function RE(e, t = 0) {
        return typeof e != "string" || t === 0 || e.length <= t ? e : `${e.substr(0,t)}...`
    }

    function NE(e, t) {
        if (!Array.isArray(e)) return "";
        var n = [];
        for (let s = 0; s < e.length; s++) {
            var r = e[s];
            try {
                n.push(String(r))
            } catch {
                n.push("[value cannot be serialized]")
            }
        }
        return n.join(t)
    }

    function Fp(e, t) {
        return aa(e) ? wJ(t) ? t.test(e) : typeof t == "string" ? e.indexOf(t) !== -1 : !1 : !1
    }

    function pn(e, t, n) {
        if (t in e) {
            var r = e[t],
                s = n(r);
            if (typeof s == "function") try {
                aw(s, r)
            } catch {}
            e[t] = s
        }
    }

    function sw(e, t, n) {
        Object.defineProperty(e, t, {
            value: n,
            writable: !0,
            configurable: !0
        })
    }

    function aw(e, t) {
        var n = t.prototype || {};
        e.prototype = t.prototype = n, sw(e, "__sentry_original__", t)
    }

    function Bp(e) {
        return e.__sentry_original__
    }

    function ow(e) {
        if (ew(e)) return {
            message: e.message,
            name: e.name,
            stack: e.stack,
            ...$E(e)
        };
        if (Up(e)) {
            var t = {
                type: e.type,
                target: LE(e.target),
                currentTarget: LE(e.currentTarget),
                ...$E(e)
            };
            return typeof CustomEvent < "u" && ki(e, CustomEvent) && (t.detail = e.detail), t
        } else return e
    }

    function LE(e) {
        try {
            return OJ(e) ? fh(e) : Object.prototype.toString.call(e)
        } catch {
            return "<unknown>"
        }
    }

    function $E(e) {
        if (typeof e == "object" && e !== null) {
            var t = {};
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t
        } else return {}
    }

    function UJ(e, t = 40) {
        var n = Object.keys(ow(e));
        if (n.sort(), !n.length) return "[object has no keys]";
        if (n[0].length >= t) return RE(n[0], t);
        for (let s = n.length; s > 0; s--) {
            var r = n.slice(0, s).join(", ");
            if (!(r.length > t)) return s === n.length ? r : RE(r, t)
        }
        return ""
    }

    function FJ(e) {
        var t = new Map;
        return dh(e, t)
    }

    function dh(e, t) {
        if (ru(e)) {
            var n = t.get(e);
            if (n !== void 0) return n;
            var r = {};
            t.set(e, r);
            for (var s of Object.keys(e)) typeof e[s] < "u" && (r[s] = dh(e[s], t));
            return r
        }
        if (Array.isArray(e)) {
            var n = t.get(e);
            if (n !== void 0) return n;
            var r = [];
            return t.set(e, r), e.forEach(u => {
                r.push(dh(u, t))
            }), r
        }
        return e
    }
    var od = "<anonymous>";

    function Oi(e) {
        try {
            return !e || typeof e != "function" ? od : e.name || od
        } catch {
            return od
        }
    }

    function BJ() {
        if (!("fetch" in tn())) return !1;
        try {
            return new Headers, new Request(""), new Response, !0
        } catch {
            return !1
        }
    }

    function PE(e) {
        return e && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())
    }

    function GJ() {
        if (!BJ()) return !1;
        var e = tn();
        if (PE(e.fetch)) return !0;
        let t = !1;
        var n = e.document;
        if (n && typeof n.createElement == "function") try {
            var r = n.createElement("iframe");
            r.hidden = !0, n.head.appendChild(r), r.contentWindow && r.contentWindow.fetch && (t = PE(r.contentWindow.fetch)), n.head.removeChild(r)
        } catch (s) {
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Yt.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", s)
        }
        return t
    }

    function WJ() {
        var e = tn(),
            t = e.chrome,
            n = t && t.app && t.app.runtime,
            r = "history" in e && !!e.history.pushState && !!e.history.replaceState;
        return !n && r
    }
    var Rt = tn(),
        no = {},
        kE = {};

    function jJ(e) {
        if (!kE[e]) switch (kE[e] = !0, e) {
            case "console":
                HJ();
                break;
            case "dom":
                ZJ();
                break;
            case "xhr":
                qJ();
                break;
            case "fetch":
                KJ();
                break;
            case "history":
                zJ();
                break;
            case "error":
                eQ();
                break;
            case "unhandledrejection":
                tQ();
                break;
            default:
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Yt.warn("unknown instrumentation type:", e);
                return
        }
    }

    function ns(e, t) {
        no[e] = no[e] || [], no[e].push(t), jJ(e)
    }

    function pr(e, t) {
        if (!(!e || !no[e]))
            for (var n of no[e] || []) try {
                n(t)
            } catch (r) {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Yt.error(`Error while triggering instrumentation handler.
Type: ${e}
Name: ${Oi(n)}
Error:`, r)
            }
    }

    function HJ() {
        "console" in Rt && hl.forEach(function(e) {
            e in Rt.console && pn(Rt.console, e, function(t) {
                return function(...n) {
                    pr("console", {
                        args: n,
                        level: e
                    }), t && t.apply(Rt.console, n)
                }
            })
        })
    }

    function KJ() {
        !GJ() || pn(Rt, "fetch", function(e) {
            return function(...t) {
                var n = {
                    args: t,
                    fetchData: {
                        method: VJ(t),
                        url: YJ(t)
                    },
                    startTimestamp: Date.now()
                };
                return pr("fetch", {
                    ...n
                }), e.apply(Rt, t).then(r => (pr("fetch", {
                    ...n,
                    endTimestamp: Date.now(),
                    response: r
                }), r), r => {
                    throw pr("fetch", {
                        ...n,
                        endTimestamp: Date.now(),
                        error: r
                    }), r
                })
            }
        })
    }

    function VJ(e = []) {
        return "Request" in Rt && ki(e[0], Request) && e[0].method ? String(e[0].method).toUpperCase() : e[1] && e[1].method ? String(e[1].method).toUpperCase() : "GET"
    }

    function YJ(e = []) {
        return typeof e[0] == "string" ? e[0] : "Request" in Rt && ki(e[0], Request) ? e[0].url : String(e[0])
    }

    function qJ() {
        if ("XMLHttpRequest" in Rt) {
            var e = XMLHttpRequest.prototype;
            pn(e, "open", function(t) {
                return function(...n) {
                    var r = this,
                        s = n[1],
                        o = r.__sentry_xhr__ = {
                            method: aa(n[0]) ? n[0].toUpperCase() : n[0],
                            url: n[1]
                        };
                    aa(s) && o.method === "POST" && s.match(/sentry_key/) && (r.__sentry_own_request__ = !0);
                    var c = function() {
                        if (r.readyState === 4) {
                            try {
                                o.status_code = r.status
                            } catch {}
                            pr("xhr", {
                                args: n,
                                endTimestamp: Date.now(),
                                startTimestamp: Date.now(),
                                xhr: r
                            })
                        }
                    };
                    return "onreadystatechange" in r && typeof r.onreadystatechange == "function" ? pn(r, "onreadystatechange", function(u) {
                        return function(...f) {
                            return c(), u.apply(r, f)
                        }
                    }) : r.addEventListener("readystatechange", c), t.apply(r, n)
                }
            }), pn(e, "send", function(t) {
                return function(...n) {
                    return this.__sentry_xhr__ && n[0] !== void 0 && (this.__sentry_xhr__.body = n[0]), pr("xhr", {
                        args: n,
                        startTimestamp: Date.now(),
                        xhr: this
                    }), t.apply(this, n)
                }
            })
        }
    }
    let Fc;

    function zJ() {
        if (!WJ()) return;
        var e = Rt.onpopstate;
        Rt.onpopstate = function(...n) {
            var r = Rt.location.href,
                s = Fc;
            if (Fc = r, pr("history", {
                    from: s,
                    to: r
                }), e) try {
                return e.apply(this, n)
            } catch {}
        };

        function t(n) {
            return function(...r) {
                var s = r.length > 2 ? r[2] : void 0;
                if (s) {
                    var o = Fc,
                        c = String(s);
                    Fc = c, pr("history", {
                        from: o,
                        to: c
                    })
                }
                return n.apply(this, r)
            }
        }
        pn(Rt.history, "pushState", t), pn(Rt.history, "replaceState", t)
    }
    var XJ = 1e3;
    let Bc, Gc;

    function JJ(e, t) {
        if (!e || e.type !== t.type) return !0;
        try {
            if (e.target !== t.target) return !0
        } catch {}
        return !1
    }

    function QJ(e) {
        if (e.type !== "keypress") return !1;
        try {
            var t = e.target;
            if (!t || !t.tagName) return !0;
            if (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable) return !1
        } catch {}
        return !0
    }

    function DE(e, t = !1) {
        return n => {
            if (!(!n || Gc === n) && !QJ(n)) {
                var r = n.type === "keypress" ? "input" : n.type;
                Bc === void 0 ? (e({
                    event: n,
                    name: r,
                    global: t
                }), Gc = n) : JJ(Gc, n) && (e({
                    event: n,
                    name: r,
                    global: t
                }), Gc = n), clearTimeout(Bc), Bc = Rt.setTimeout(() => {
                    Bc = void 0
                }, XJ)
            }
        }
    }

    function ZJ() {
        if ("document" in Rt) {
            var e = pr.bind(null, "dom"),
                t = DE(e, !0);
            Rt.document.addEventListener("click", t, !1), Rt.document.addEventListener("keypress", t, !1), ["EventTarget", "Node"].forEach(n => {
                var r = Rt[n] && Rt[n].prototype;
                !r || !r.hasOwnProperty || !r.hasOwnProperty("addEventListener") || (pn(r, "addEventListener", function(s) {
                    return function(o, c, u) {
                        if (o === "click" || o == "keypress") try {
                            var f = this,
                                h = f.__sentry_instrumentation_handlers__ = f.__sentry_instrumentation_handlers__ || {},
                                g = h[o] = h[o] || {
                                    refCount: 0
                                };
                            if (!g.handler) {
                                var y = DE(e);
                                g.handler = y, s.call(this, o, y, u)
                            }
                            g.refCount += 1
                        } catch {}
                        return s.call(this, o, c, u)
                    }
                }), pn(r, "removeEventListener", function(s) {
                    return function(o, c, u) {
                        if (o === "click" || o == "keypress") try {
                            var f = this,
                                h = f.__sentry_instrumentation_handlers__ || {},
                                g = h[o];
                            g && (g.refCount -= 1, g.refCount <= 0 && (s.call(this, o, g.handler, u), g.handler = void 0, delete h[o]), Object.keys(h).length === 0 && delete f.__sentry_instrumentation_handlers__)
                        } catch {}
                        return s.call(this, o, c, u)
                    }
                }))
            })
        }
    }
    let cd = null;

    function eQ() {
        cd = Rt.onerror, Rt.onerror = function(e, t, n, r, s) {
            return pr("error", {
                column: r,
                error: s,
                line: n,
                msg: e,
                url: t
            }), cd ? cd.apply(this, arguments) : !1
        }
    }
    let ld = null;

    function tQ() {
        ld = Rt.onunhandledrejection, Rt.onunhandledrejection = function(e) {
            return pr("unhandledrejection", e), ld ? ld.apply(this, arguments) : !0
        }
    }

    function nQ() {
        var e = typeof WeakSet == "function",
            t = e ? new WeakSet : [];

        function n(s) {
            if (e) return t.has(s) ? !0 : (t.add(s), !1);
            for (let c = 0; c < t.length; c++) {
                var o = t[c];
                if (o === s) return !0
            }
            return t.push(s), !1
        }

        function r(s) {
            if (e) t.delete(s);
            else
                for (let o = 0; o < t.length; o++)
                    if (t[o] === s) {
                        t.splice(o, 1);
                        break
                    }
        }
        return [n, r]
    }

    function ro() {
        var e = tn(),
            t = e.crypto || e.msCrypto;
        if (t && t.randomUUID) return t.randomUUID().replace(/-/g, "");
        var n = t && t.getRandomValues ? () => t.getRandomValues(new Uint8Array(1))[0] : () => Math.random() * 16;
        return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, r => (r ^ (n() & 15) >> r / 4).toString(16))
    }

    function cw(e) {
        return e.exception && e.exception.values ? e.exception.values[0] : void 0
    }

    function Bs(e) {
        const {
            message: t,
            event_id: n
        } = e;
        if (t) return t;
        var r = cw(e);
        return r ? r.type && r.value ? `${r.type}: ${r.value}` : r.type || r.value || n || "<unknown>" : n || "<unknown>"
    }

    function hh(e, t, n) {
        var r = e.exception = e.exception || {},
            s = r.values = r.values || [],
            o = s[0] = s[0] || {};
        o.value || (o.value = t || ""), o.type || (o.type = n || "Error")
    }

    function pl(e, t) {
        var n = cw(e);
        if (!!n) {
            var r = {
                    type: "generic",
                    handled: !0
                },
                s = n.mechanism;
            if (n.mechanism = {
                    ...r,
                    ...s,
                    ...t
                }, t && "data" in t) {
                var o = {
                    ...s && s.data,
                    ...t.data
                };
                n.mechanism.data = o
            }
        }
    }

    function rQ(e, t = 1 / 0, n = 1 / 0) {
        try {
            return ph("", e, t, n)
        } catch (r) {
            return {
                ERROR: `**non-serializable** (${r})`
            }
        }
    }

    function lw(e, t = 3, n = 100 * 1024) {
        var r = rQ(e, t);
        return aQ(r) > n ? lw(e, t - 1, n) : r
    }

    function ph(e, t, n = 1 / 0, r = 1 / 0, s = nQ()) {
        const [o, c] = s;
        if (t === null || ["number", "boolean", "string"].includes(typeof t) && !AJ(t)) return t;
        var u = iQ(e, t);
        if (!u.startsWith("[object ")) return u;
        if (t.__sentry_skip_normalization__) return t;
        if (n === 0) return u.replace("object ", "");
        if (o(t)) return "[Circular ~]";
        var f = t;
        if (f && typeof f.toJSON == "function") try {
            var h = f.toJSON();
            return ph("", h, n - 1, r, s)
        } catch {}
        var g = Array.isArray(t) ? [] : {};
        let y = 0;
        var b = ow(t);
        for (var C in b)
            if (!!Object.prototype.hasOwnProperty.call(b, C)) {
                if (y >= r) {
                    g[C] = "[MaxProperties ~]";
                    break
                }
                var R = b[C];
                g[C] = ph(C, R, n - 1, r, s), y += 1
            } return c(t), g
    }

    function iQ(e, t) {
        try {
            return e === "domain" && t && typeof t == "object" && t._events ? "[Domain]" : e === "domainEmitter" ? "[DomainEmitter]" : typeof global < "u" && t === global ? "[Global]" : typeof window < "u" && t === window ? "[Window]" : typeof document < "u" && t === document ? "[Document]" : CJ(t) ? "[SyntheticEvent]" : typeof t == "number" && t !== t ? "[NaN]" : t === void 0 ? "[undefined]" : typeof t == "function" ? `[Function: ${Oi(t)}]` : typeof t == "symbol" ? `[${String(t)}]` : typeof t == "bigint" ? `[BigInt: ${String(t)}]` : `[object ${Object.getPrototypeOf(t).constructor.name}]`
        } catch (n) {
            return `**non-serializable** (${n})`
        }
    }

    function sQ(e) {
        return ~-encodeURI(e).split(/%..|./).length
    }

    function aQ(e) {
        return sQ(JSON.stringify(e))
    }
    var Gr;
    (function(e) {
        var t = 0;
        e[e.PENDING = t] = "PENDING";
        var n = 1;
        e[e.RESOLVED = n] = "RESOLVED";
        var r = 2;
        e[e.REJECTED = r] = "REJECTED"
    })(Gr || (Gr = {}));
    class Tr {
        __init() {
            this._state = Gr.PENDING
        }
        __init2() {
            this._handlers = []
        }
        constructor(t) {
            Tr.prototype.__init.call(this), Tr.prototype.__init2.call(this), Tr.prototype.__init3.call(this), Tr.prototype.__init4.call(this), Tr.prototype.__init5.call(this), Tr.prototype.__init6.call(this);
            try {
                t(this._resolve, this._reject)
            } catch (n) {
                this._reject(n)
            }
        }
        then(t, n) {
            return new Tr((r, s) => {
                this._handlers.push([!1, o => {
                    if (!t) r(o);
                    else try {
                        r(t(o))
                    } catch (c) {
                        s(c)
                    }
                }, o => {
                    if (!n) s(o);
                    else try {
                        r(n(o))
                    } catch (c) {
                        s(c)
                    }
                }]), this._executeHandlers()
            })
        } catch (t) {
            return this.then(n => n, t)
        } finally(t) {
            return new Tr((n, r) => {
                let s, o;
                return this.then(c => {
                    o = !1, s = c, t && t()
                }, c => {
                    o = !0, s = c, t && t()
                }).then(() => {
                    if (o) {
                        r(s);
                        return
                    }
                    n(s)
                })
            })
        }
        __init3() {
            this._resolve = t => {
                this._setResult(Gr.RESOLVED, t)
            }
        }
        __init4() {
            this._reject = t => {
                this._setResult(Gr.REJECTED, t)
            }
        }
        __init5() {
            this._setResult = (t, n) => {
                if (this._state === Gr.PENDING) {
                    if (nw(n)) {
                        n.then(this._resolve, this._reject);
                        return
                    }
                    this._state = t, this._value = n, this._executeHandlers()
                }
            }
        }
        __init6() {
            this._executeHandlers = () => {
                if (this._state !== Gr.PENDING) {
                    var t = this._handlers.slice();
                    this._handlers = [], t.forEach(n => {
                        n[0] || (this._state === Gr.RESOLVED && n[1](this._value), this._state === Gr.REJECTED && n[2](this._value), n[0] = !0)
                    })
                }
            }
        }
    }

    function ud(e) {
        if (!e) return {};
        var t = e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
        if (!t) return {};
        var n = t[6] || "",
            r = t[8] || "";
        return {
            host: t[4],
            path: t[5],
            protocol: t[2],
            relative: t[5] + n + r
        }
    }
    var oQ = ["fatal", "error", "warning", "log", "info", "debug"];

    function cQ(e) {
        return e === "warn" ? "warning" : oQ.includes(e) ? e : "log"
    }
    var gh = {
        nowSeconds: () => Date.now() / 1e3
    };

    function lQ() {
        const {
            performance: e
        } = tn();
        if (!(!e || !e.now)) {
            var t = Date.now() - e.now();
            return {
                now: () => e.now(),
                timeOrigin: t
            }
        }
    }

    function uQ() {
        try {
            var e = EJ(Aw, "perf_hooks");
            return e.performance
        } catch {
            return
        }
    }
    var fd = Mp() ? uQ() : lQ(),
        ME = fd === void 0 ? gh : {
            nowSeconds: () => (fd.timeOrigin + fd.now()) / 1e3
        },
        uw = gh.nowSeconds.bind(gh),
        fw = ME.nowSeconds.bind(ME);
    (() => {
        const {
            performance: e
        } = tn();
        if (!(!e || !e.now)) {
            var t = 3600 * 1e3,
                n = e.now(),
                r = Date.now(),
                s = e.timeOrigin ? Math.abs(e.timeOrigin + n - r) : t,
                o = s < t,
                c = e.timing && e.timing.navigationStart,
                u = typeof c == "number",
                f = u ? Math.abs(c + n - r) : t,
                h = f < t;
            return o || h ? s <= f ? e.timeOrigin : c : r
        }
    })();

    function fQ(e) {
        var t = fw(),
            n = {
                sid: ro(),
                init: !0,
                timestamp: t,
                started: t,
                duration: 0,
                status: "ok",
                errors: 0,
                ignoreDuration: !1,
                toJSON: () => hQ(n)
            };
        return e && iu(n, e), n
    }

    function iu(e, t = {}) {
        if (t.user && (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address), !e.did && !t.did && (e.did = t.user.id || t.user.email || t.user.username)), e.timestamp = t.timestamp || fw(), t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration), t.sid && (e.sid = t.sid.length === 32 ? t.sid : ro()), t.init !== void 0 && (e.init = t.init), !e.did && t.did && (e.did = `${t.did}`), typeof t.started == "number" && (e.started = t.started), e.ignoreDuration) e.duration = void 0;
        else if (typeof t.duration == "number") e.duration = t.duration;
        else {
            var n = e.timestamp - e.started;
            e.duration = n >= 0 ? n : 0
        }
        t.release && (e.release = t.release), t.environment && (e.environment = t.environment), !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress), !e.userAgent && t.userAgent && (e.userAgent = t.userAgent), typeof t.errors == "number" && (e.errors = t.errors), t.status && (e.status = t.status)
    }

    function dQ(e, t) {
        let n = {};
        t ? n = {
            status: t
        } : e.status === "ok" && (n = {
            status: "exited"
        }), iu(e, n)
    }

    function hQ(e) {
        return FJ({
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
    var xE = 100;
    class ls {
        constructor() {
            this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}
        }
        static clone(t) {
            var n = new ls;
            return t && (n._breadcrumbs = [...t._breadcrumbs], n._tags = {
                ...t._tags
            }, n._extra = {
                ...t._extra
            }, n._contexts = {
                ...t._contexts
            }, n._user = t._user, n._level = t._level, n._span = t._span, n._session = t._session, n._transactionName = t._transactionName, n._fingerprint = t._fingerprint, n._eventProcessors = [...t._eventProcessors], n._requestSession = t._requestSession, n._attachments = [...t._attachments]), n
        }
        addScopeListener(t) {
            this._scopeListeners.push(t)
        }
        addEventProcessor(t) {
            return this._eventProcessors.push(t), this
        }
        setUser(t) {
            return this._user = t || {}, this._session && iu(this._session, {
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
        setTag(t, n) {
            return this._tags = {
                ...this._tags,
                [t]: n
            }, this._notifyScopeListeners(), this
        }
        setExtras(t) {
            return this._extra = {
                ...this._extra,
                ...t
            }, this._notifyScopeListeners(), this
        }
        setExtra(t, n) {
            return this._extra = {
                ...this._extra,
                [t]: n
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
        setContext(t, n) {
            return n === null ? delete this._contexts[t] : this._contexts = {
                ...this._contexts,
                [t]: n
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
                var n = t(this);
                return n instanceof ls ? n : this
            }
            return t instanceof ls ? (this._tags = {
                ...this._tags,
                ...t._tags
            }, this._extra = {
                ...this._extra,
                ...t._extra
            }, this._contexts = {
                ...this._contexts,
                ...t._contexts
            }, t._user && Object.keys(t._user).length && (this._user = t._user), t._level && (this._level = t._level), t._fingerprint && (this._fingerprint = t._fingerprint), t._requestSession && (this._requestSession = t._requestSession)) : ru(t) && (t = t, this._tags = {
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
        addBreadcrumb(t, n) {
            var r = typeof n == "number" ? Math.min(n, xE) : xE;
            if (r <= 0) return this;
            var s = {
                timestamp: uw(),
                ...t
            };
            return this._breadcrumbs = [...this._breadcrumbs, s].slice(-r), this._notifyScopeListeners(), this
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
        applyToEvent(t, n = {}) {
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
                var r = this._span.transaction && this._span.transaction.name;
                r && (t.tags = {
                    transaction: r,
                    ...t.tags
                })
            }
            return this._applyFingerprint(t), t.breadcrumbs = [...t.breadcrumbs || [], ...this._breadcrumbs], t.breadcrumbs = t.breadcrumbs.length > 0 ? t.breadcrumbs : void 0, t.sdkProcessingMetadata = {
                ...t.sdkProcessingMetadata,
                ...this._sdkProcessingMetadata
            }, this._notifyEventProcessors([...dw(), ...this._eventProcessors], t, n)
        }
        setSDKProcessingMetadata(t) {
            return this._sdkProcessingMetadata = {
                ...this._sdkProcessingMetadata,
                ...t
            }, this
        }
        _notifyEventProcessors(t, n, r, s = 0) {
            return new Tr((o, c) => {
                var u = t[s];
                if (n === null || typeof u != "function") o(n);
                else {
                    var f = u({
                        ...n
                    }, r);
                    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && u.id && f === null && Yt.log(`Event processor "${u.id}" dropped event`), nw(f) ? f.then(h => this._notifyEventProcessors(t, h, r, s + 1).then(o)).then(null, c) : this._notifyEventProcessors(t, f, r, s + 1).then(o).then(null, c)
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

    function dw() {
        return xp("globalEventProcessors", () => [])
    }

    function hw(e) {
        dw().push(e)
    }
    var Gp = 4,
        pQ = 100;
    class Po {
        __init() {
            this._stack = [{}]
        }
        constructor(t, n = new ls, r = Gp) {
            this._version = r, Po.prototype.__init.call(this), this.getStackTop().scope = n, t && this.bindClient(t)
        }
        isOlderThan(t) {
            return this._version < t
        }
        bindClient(t) {
            var n = this.getStackTop();
            n.client = t, t && t.setupIntegrations && t.setupIntegrations()
        }
        pushScope() {
            var t = ls.clone(this.getScope());
            return this.getStack().push({
                client: this.getClient(),
                scope: t
            }), t
        }
        popScope() {
            return this.getStack().length <= 1 ? !1 : !!this.getStack().pop()
        }
        withScope(t) {
            var n = this.pushScope();
            try {
                t(n)
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
        captureException(t, n) {
            var r = this._lastEventId = n && n.event_id ? n.event_id : ro(),
                s = new Error("Sentry syntheticException");
            return this._withClient((o, c) => {
                o.captureException(t, {
                    originalException: t,
                    syntheticException: s,
                    ...n,
                    event_id: r
                }, c)
            }), r
        }
        captureMessage(t, n, r) {
            var s = this._lastEventId = r && r.event_id ? r.event_id : ro(),
                o = new Error(t);
            return this._withClient((c, u) => {
                c.captureMessage(t, n, {
                    originalException: t,
                    syntheticException: o,
                    ...r,
                    event_id: s
                }, u)
            }), s
        }
        captureEvent(t, n) {
            var r = n && n.event_id ? n.event_id : ro();
            return t.type !== "transaction" && (this._lastEventId = r), this._withClient((s, o) => {
                s.captureEvent(t, {
                    ...n,
                    event_id: r
                }, o)
            }), r
        }
        lastEventId() {
            return this._lastEventId
        }
        addBreadcrumb(t, n) {
            const {
                scope: r,
                client: s
            } = this.getStackTop();
            if (!r || !s) return;
            const {
                beforeBreadcrumb: o = null,
                maxBreadcrumbs: c = pQ
            } = s.getOptions && s.getOptions() || {};
            if (!(c <= 0)) {
                var u = uw(),
                    f = {
                        timestamp: u,
                        ...t
                    },
                    h = o ? iw(() => o(f, n)) : f;
                h !== null && r.addBreadcrumb(h, c)
            }
        }
        setUser(t) {
            var n = this.getScope();
            n && n.setUser(t)
        }
        setTags(t) {
            var n = this.getScope();
            n && n.setTags(t)
        }
        setExtras(t) {
            var n = this.getScope();
            n && n.setExtras(t)
        }
        setTag(t, n) {
            var r = this.getScope();
            r && r.setTag(t, n)
        }
        setExtra(t, n) {
            var r = this.getScope();
            r && r.setExtra(t, n)
        }
        setContext(t, n) {
            var r = this.getScope();
            r && r.setContext(t, n)
        }
        configureScope(t) {
            const {
                scope: n,
                client: r
            } = this.getStackTop();
            n && r && t(n)
        }
        run(t) {
            var n = UE(this);
            try {
                t(this)
            } finally {
                UE(n)
            }
        }
        getIntegration(t) {
            var n = this.getClient();
            if (!n) return null;
            try {
                return n.getIntegration(t)
            } catch {
                return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Yt.warn(`Cannot retrieve integration ${t.id} from the current Hub`), null
            }
        }
        startTransaction(t, n) {
            return this._callExtensionMethod("startTransaction", t, n)
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
                n = t && t.scope,
                r = n && n.getSession();
            r && dQ(r), this._sendSessionUpdate(), n && n.setSession()
        }
        startSession(t) {
            const {
                scope: n,
                client: r
            } = this.getStackTop(), {
                release: s,
                environment: o
            } = r && r.getOptions() || {};
            var c = tn();
            const {
                userAgent: u
            } = c.navigator || {};
            var f = fQ({
                release: s,
                environment: o,
                ...n && {
                    user: n.getUser()
                },
                ...u && {
                    userAgent: u
                },
                ...t
            });
            if (n) {
                var h = n.getSession && n.getSession();
                h && h.status === "ok" && iu(h, {
                    status: "exited"
                }), this.endSession(), n.setSession(f)
            }
            return f
        }
        shouldSendDefaultPii() {
            var t = this.getClient(),
                n = t && t.getOptions();
            return Boolean(n && n.sendDefaultPii)
        }
        _sendSessionUpdate() {
            const {
                scope: t,
                client: n
            } = this.getStackTop();
            if (!!t) {
                var r = t.getSession();
                r && n && n.captureSession && n.captureSession(r)
            }
        }
        _withClient(t) {
            const {
                scope: n,
                client: r
            } = this.getStackTop();
            r && t(r, n)
        }
        _callExtensionMethod(t, ...n) {
            var r = su(),
                s = r.__SENTRY__;
            if (s && s.extensions && typeof s.extensions[t] == "function") return s.extensions[t].apply(this, n);
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Yt.warn(`Extension method ${t} couldn't be found, doing nothing.`)
        }
    }

    function su() {
        var e = tn();
        return e.__SENTRY__ = e.__SENTRY__ || {
            extensions: {},
            hub: void 0
        }, e
    }

    function UE(e) {
        var t = su(),
            n = di(t);
        return Wp(t, e), n
    }

    function Wn() {
        var e = su();
        return (!pw(e) || di(e).isOlderThan(Gp)) && Wp(e, new Po), Mp() ? gQ(e) : di(e)
    }

    function gQ(e) {
        try {
            var t = su().__SENTRY__,
                n = t && t.extensions && t.extensions.domain && t.extensions.domain.active;
            if (!n) return di(e);
            if (!pw(n) || di(n).isOlderThan(Gp)) {
                var r = di(e).getStackTop();
                Wp(n, new Po(r.client, ls.clone(r.scope)))
            }
            return di(n)
        } catch {
            return di(e)
        }
    }

    function pw(e) {
        return !!(e && e.__SENTRY__ && e.__SENTRY__.hub)
    }

    function di(e) {
        return xp("hub", () => new Po, e)
    }

    function Wp(e, t) {
        if (!e) return !1;
        var n = e.__SENTRY__ = e.__SENTRY__ || {};
        return n.hub = t, !0
    }

    function mQ(e, t) {
        return Wn().captureException(e, {
            captureContext: t
        })
    }

    function vQ(e) {
        Wn().withScope(e)
    }

    function _Q(e) {
        var t = e.protocol ? `${e.protocol}:` : "",
            n = e.port ? `:${e.port}` : "";
        return `${t}//${e.host}${n}${e.path?`/${e.path}`:""}/api/`
    }

    function yQ(e, t) {
        var n = DJ(e),
            r = `${_Q(n)}embed/error-page/`;
        let s = `dsn=${$J(n)}`;
        for (var o in t)
            if (o !== "dsn")
                if (o === "user") {
                    var c = t.user;
                    if (!c) continue;
                    c.name && (s += `&name=${encodeURIComponent(c.name)}`), c.email && (s += `&email=${encodeURIComponent(c.email)}`)
                } else s += `&${encodeURIComponent(o)}=${encodeURIComponent(t[o])}`;
        return `${r}?${s}`
    }
    let FE;
    class _o {
        constructor() {
            _o.prototype.__init.call(this)
        }
        static __initStatic() {
            this.id = "FunctionToString"
        }
        __init() {
            this.name = _o.id
        }
        setupOnce() {
            FE = Function.prototype.toString, Function.prototype.toString = function(...t) {
                var n = Bp(this) || this;
                return FE.apply(n, t)
            }
        }
    }
    _o.__initStatic();
    var EQ = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/];
    class zs {
        static __initStatic() {
            this.id = "InboundFilters"
        }
        __init() {
            this.name = zs.id
        }
        constructor(t = {}) {
            this._options = t, zs.prototype.__init.call(this)
        }
        setupOnce(t, n) {
            var r = s => {
                var o = n();
                if (o) {
                    var c = o.getIntegration(zs);
                    if (c) {
                        var u = o.getClient(),
                            f = u ? u.getOptions() : {},
                            h = bQ(c._options, f);
                        return TQ(s, h) ? null : s
                    }
                }
                return s
            };
            r.id = this.name, t(r)
        }
    }
    zs.__initStatic();

    function bQ(e = {}, t = {}) {
        return {
            allowUrls: [...e.allowUrls || [], ...t.allowUrls || []],
            denyUrls: [...e.denyUrls || [], ...t.denyUrls || []],
            ignoreErrors: [...e.ignoreErrors || [], ...t.ignoreErrors || [], ...EQ],
            ignoreInternal: e.ignoreInternal !== void 0 ? e.ignoreInternal : !0
        }
    }

    function TQ(e, t) {
        return t.ignoreInternal && AQ(e) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Yt.warn(`Event dropped due to being internal Sentry Error.
Event: ${Bs(e)}`), !0) : SQ(e, t.ignoreErrors) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Yt.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${Bs(e)}`), !0) : OQ(e, t.denyUrls) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Yt.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${Bs(e)}.
Url: ${gl(e)}`), !0) : wQ(e, t.allowUrls) ? !1 : ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Yt.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${Bs(e)}.
Url: ${gl(e)}`), !0)
    }

    function SQ(e, t) {
        return !t || !t.length ? !1 : CQ(e).some(n => t.some(r => Fp(n, r)))
    }

    function OQ(e, t) {
        if (!t || !t.length) return !1;
        var n = gl(e);
        return n ? t.some(r => Fp(n, r)) : !1
    }

    function wQ(e, t) {
        if (!t || !t.length) return !0;
        var n = gl(e);
        return n ? t.some(r => Fp(n, r)) : !0
    }

    function CQ(e) {
        if (e.message) return [e.message];
        if (e.exception) try {
            const {
                type: t = "",
                value: n = ""
            } = e.exception.values && e.exception.values[0] || {};
            return [`${n}`, `${t}: ${n}`]
        } catch {
            return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Yt.error(`Cannot extract message for event ${Bs(e)}`), []
        }
        return []
    }

    function AQ(e) {
        try {
            return e.exception.values[0].type === "SentryError"
        } catch {}
        return !1
    }

    function IQ(e = []) {
        for (let n = e.length - 1; n >= 0; n--) {
            var t = e[n];
            if (t && t.filename !== "<anonymous>" && t.filename !== "[native code]") return t.filename || null
        }
        return null
    }

    function gl(e) {
        try {
            let t;
            try {
                t = e.exception.values[0].stacktrace.frames
            } catch {}
            return t ? IQ(t) : null
        } catch {
            return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Yt.error(`Cannot extract url for event ${Bs(e)}`), null
        }
    }

    function gw(e, t) {
        var n = jp(e, t),
            r = {
                type: t && t.name,
                value: $Q(t)
            };
        return n.length && (r.stacktrace = {
            frames: n
        }), r.type === void 0 && r.value === "" && (r.value = "Unrecoverable error caught"), r
    }

    function RQ(e, t, n, r) {
        var s = {
            exception: {
                values: [{
                    type: Up(t) ? t.constructor.name : r ? "UnhandledRejection" : "Error",
                    value: `Non-Error ${r?"promise rejection":"exception"} captured with keys: ${UJ(t)}`
                }]
            },
            extra: {
                __serialized__: lw(t)
            }
        };
        if (n) {
            var o = jp(e, n);
            o.length && (s.exception.values[0].stacktrace = {
                frames: o
            })
        }
        return s
    }

    function dd(e, t) {
        return {
            exception: {
                values: [gw(e, t)]
            }
        }
    }

    function jp(e, t) {
        var n = t.stacktrace || t.stack || "",
            r = LQ(t);
        try {
            return e(n, r)
        } catch {}
        return []
    }
    var NQ = /Minified React error #\d+;/i;

    function LQ(e) {
        if (e) {
            if (typeof e.framesToPop == "number") return e.framesToPop;
            if (NQ.test(e.message)) return 1
        }
        return 0
    }

    function $Q(e) {
        var t = e && e.message;
        return t ? t.error && typeof t.error.message == "string" ? t.error.message : t : "No error message"
    }

    function mw(e, t, n, r, s) {
        let o;
        if (tw(t) && t.error) {
            var c = t;
            return dd(e, c.error)
        }
        if (AE(t) || TJ(t)) {
            var u = t;
            if ("stack" in t) o = dd(e, t);
            else {
                var f = u.name || (AE(u) ? "DOMError" : "DOMException"),
                    h = u.message ? `${f}: ${u.message}` : f;
                o = BE(e, h, n, r), hh(o, h)
            }
            return "code" in u && (o.tags = {
                ...o.tags,
                "DOMException.code": `${u.code}`
            }), o
        }
        if (ew(t)) return dd(e, t);
        if (ru(t) || Up(t)) {
            var g = t;
            return o = RQ(e, g, n, s), pl(o, {
                synthetic: !0
            }), o
        }
        return o = BE(e, t, n, r), hh(o, `${t}`, void 0), pl(o, {
            synthetic: !0
        }), o
    }

    function BE(e, t, n, r) {
        var s = {
            message: t
        };
        if (r && n) {
            var o = jp(e, n);
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
    var PQ = "Breadcrumbs";
    class yo {
        static __initStatic() {
            this.id = PQ
        }
        __init() {
            this.name = yo.id
        }
        constructor(t) {
            yo.prototype.__init.call(this), this.options = {
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
            this.options.console && ns("console", DQ), this.options.dom && ns("dom", kQ(this.options.dom)), this.options.xhr && ns("xhr", MQ), this.options.fetch && ns("fetch", xQ), this.options.history && ns("history", UQ)
        }
    }
    yo.__initStatic();

    function kQ(e) {
        function t(n) {
            let r, s = typeof e == "object" ? e.serializeAttribute : void 0;
            typeof s == "string" && (s = [s]);
            try {
                r = n.event.target ? fh(n.event.target, s) : fh(n.event, s)
            } catch {
                r = "<unknown>"
            }
            r.length !== 0 && Wn().addBreadcrumb({
                category: `ui.${n.name}`,
                message: r
            }, {
                event: n.event,
                name: n.name,
                global: n.global
            })
        }
        return t
    }

    function DQ(e) {
        var t = {
            category: "console",
            data: {
                arguments: e.args,
                logger: "console"
            },
            level: cQ(e.level),
            message: NE(e.args, " ")
        };
        if (e.level === "assert")
            if (e.args[0] === !1) t.message = `Assertion failed: ${NE(e.args.slice(1)," ")||"console.assert"}`, t.data.arguments = e.args.slice(1);
            else return;
        Wn().addBreadcrumb(t, {
            input: e.args,
            level: e.level
        })
    }

    function MQ(e) {
        if (e.endTimestamp) {
            if (e.xhr.__sentry_own_request__) return;
            const {
                method: t,
                url: n,
                status_code: r,
                body: s
            } = e.xhr.__sentry_xhr__ || {};
            Wn().addBreadcrumb({
                category: "xhr",
                data: {
                    method: t,
                    url: n,
                    status_code: r
                },
                type: "http"
            }, {
                xhr: e.xhr,
                input: s
            });
            return
        }
    }

    function xQ(e) {
        !e.endTimestamp || e.fetchData.url.match(/sentry_key/) && e.fetchData.method === "POST" || (e.error ? Wn().addBreadcrumb({
            category: "fetch",
            data: e.fetchData,
            level: "error",
            type: "http"
        }, {
            data: e.error,
            input: e.args
        }) : Wn().addBreadcrumb({
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

    function UQ(e) {
        var t = tn();
        let n = e.from,
            r = e.to;
        var s = ud(t.location.href);
        let o = ud(n);
        var c = ud(r);
        o.path || (o = s), s.protocol === c.protocol && s.host === c.host && (r = c.relative), s.protocol === o.protocol && s.host === o.host && (n = o.relative), Wn().addBreadcrumb({
            category: "navigation",
            data: {
                from: n,
                to: r
            }
        })
    }
    let mh = 0;

    function vw() {
        return mh > 0
    }

    function FQ() {
        mh += 1, setTimeout(() => {
            mh -= 1
        })
    }

    function oa(e, t = {}, n) {
        if (typeof e != "function") return e;
        try {
            var r = e.__sentry_wrapped__;
            if (r) return r;
            if (Bp(e)) return e
        } catch {
            return e
        }
        var s = function() {
            var u = Array.prototype.slice.call(arguments);
            try {
                n && typeof n == "function" && n.apply(this, arguments);
                var f = u.map(h => oa(h, t));
                return e.apply(this, f)
            } catch (h) {
                throw FQ(), vQ(g => {
                    g.addEventProcessor(y => (t.mechanism && (hh(y, void 0, void 0), pl(y, t.mechanism)), y.extra = {
                        ...y.extra,
                        arguments: u
                    }, y)), mQ(h)
                }), h
            }
        };
        try {
            for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (s[o] = e[o])
        } catch {}
        aw(s, e), sw(e, "__sentry_wrapped__", s);
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
    class vi {
        static __initStatic() {
            this.id = "GlobalHandlers"
        }
        __init() {
            this.name = vi.id
        }
        __init2() {
            this._installFunc = {
                onerror: BQ,
                onunhandledrejection: GQ
            }
        }
        constructor(t) {
            vi.prototype.__init.call(this), vi.prototype.__init2.call(this), this._options = {
                onerror: !0,
                onunhandledrejection: !0,
                ...t
            }
        }
        setupOnce() {
            Error.stackTraceLimit = 50;
            var t = this._options;
            for (var n in t) {
                var r = this._installFunc[n];
                r && t[n] && (HQ(n), r(), this._installFunc[n] = void 0)
            }
        }
    }
    vi.__initStatic();

    function BQ() {
        ns("error", e => {
            const [t, n, r] = Ew();
            if (!t.getIntegration(vi)) return;
            const {
                msg: s,
                url: o,
                line: c,
                column: u,
                error: f
            } = e;
            if (!(vw() || f && f.__sentry_own_request__)) {
                var h = f === void 0 && aa(s) ? jQ(s, o, c, u) : _w(mw(n, f || s, void 0, r, !1), o, c, u);
                h.level = "error", yw(t, f, h, "onerror")
            }
        })
    }

    function GQ() {
        ns("unhandledrejection", e => {
            const [t, n, r] = Ew();
            if (!t.getIntegration(vi)) return;
            let s = e;
            try {
                "reason" in e ? s = e.reason : "detail" in e && "reason" in e.detail && (s = e.detail.reason)
            } catch {}
            if (vw() || s && s.__sentry_own_request__) return !0;
            var o = SJ(s) ? WQ(s) : mw(n, s, void 0, r, !0);
            o.level = "error", yw(t, s, o, "onunhandledrejection")
        })
    }

    function WQ(e) {
        return {
            exception: {
                values: [{
                    type: "UnhandledRejection",
                    value: `Non-Error promise rejection captured with value: ${String(e)}`
                }]
            }
        }
    }

    function jQ(e, t, n, r) {
        var s = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
        let o = tw(e) ? e.message : e,
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
        return _w(f, t, n, r)
    }

    function _w(e, t, n, r) {
        var s = e.exception = e.exception || {},
            o = s.values = s.values || [],
            c = o[0] = o[0] || {},
            u = c.stacktrace = c.stacktrace || {},
            f = u.frames = u.frames || [],
            h = isNaN(parseInt(r, 10)) ? void 0 : r,
            g = isNaN(parseInt(n, 10)) ? void 0 : n,
            y = aa(t) && t.length > 0 ? t : RJ();
        return f.length === 0 && f.push({
            colno: h,
            filename: y,
            function: "?",
            in_app: !0,
            lineno: g
        }), e
    }

    function HQ(e) {
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Yt.log(`Global Handler attached: ${e}`)
    }

    function yw(e, t, n, r) {
        pl(n, {
            handled: !1,
            type: r
        }), e.captureEvent(n, {
            originalException: t
        })
    }

    function Ew() {
        var e = Wn(),
            t = e.getClient(),
            n = t && t.getOptions() || {
                stackParser: () => [],
                attachStacktrace: !1
            };
        return [e, n.stackParser, n.attachStacktrace]
    }
    var KQ = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"];
    class Eo {
        static __initStatic() {
            this.id = "TryCatch"
        }
        __init() {
            this.name = Eo.id
        }
        constructor(t) {
            Eo.prototype.__init.call(this), this._options = {
                XMLHttpRequest: !0,
                eventTarget: !0,
                requestAnimationFrame: !0,
                setInterval: !0,
                setTimeout: !0,
                ...t
            }
        }
        setupOnce() {
            var t = tn();
            this._options.setTimeout && pn(t, "setTimeout", GE), this._options.setInterval && pn(t, "setInterval", GE), this._options.requestAnimationFrame && pn(t, "requestAnimationFrame", VQ), this._options.XMLHttpRequest && "XMLHttpRequest" in t && pn(XMLHttpRequest.prototype, "send", YQ);
            var n = this._options.eventTarget;
            if (n) {
                var r = Array.isArray(n) ? n : KQ;
                r.forEach(qQ)
            }
        }
    }
    Eo.__initStatic();

    function GE(e) {
        return function(...t) {
            var n = t[0];
            return t[0] = oa(n, {
                mechanism: {
                    data: {
                        function: Oi(e)
                    },
                    handled: !0,
                    type: "instrument"
                }
            }), e.apply(this, t)
        }
    }

    function VQ(e) {
        return function(t) {
            return e.apply(this, [oa(t, {
                mechanism: {
                    data: {
                        function: "requestAnimationFrame",
                        handler: Oi(e)
                    },
                    handled: !0,
                    type: "instrument"
                }
            })])
        }
    }

    function YQ(e) {
        return function(...t) {
            var n = this,
                r = ["onload", "onerror", "onprogress", "onreadystatechange"];
            return r.forEach(s => {
                s in n && typeof n[s] == "function" && pn(n, s, function(o) {
                    var c = {
                            mechanism: {
                                data: {
                                    function: s,
                                    handler: Oi(o)
                                },
                                handled: !0,
                                type: "instrument"
                            }
                        },
                        u = Bp(o);
                    return u && (c.mechanism.data.handler = Oi(u)), oa(o, c)
                })
            }), e.apply(this, t)
        }
    }

    function qQ(e) {
        var t = tn(),
            n = t[e] && t[e].prototype;
        !n || !n.hasOwnProperty || !n.hasOwnProperty("addEventListener") || (pn(n, "addEventListener", function(r) {
            return function(s, o, c) {
                try {
                    typeof o.handleEvent == "function" && (o.handleEvent = oa(o.handleEvent, {
                        mechanism: {
                            data: {
                                function: "handleEvent",
                                handler: Oi(o),
                                target: e
                            },
                            handled: !0,
                            type: "instrument"
                        }
                    }))
                } catch {}
                return r.apply(this, [s, oa(o, {
                    mechanism: {
                        data: {
                            function: "addEventListener",
                            handler: Oi(o),
                            target: e
                        },
                        handled: !0,
                        type: "instrument"
                    }
                }), c])
            }
        }), pn(n, "removeEventListener", function(r) {
            return function(s, o, c) {
                var u = o;
                try {
                    var f = u && u.__sentry_wrapped__;
                    f && r.call(this, s, f, c)
                } catch {}
                return r.call(this, s, u, c)
            }
        }))
    }
    var zQ = "cause",
        XQ = 5;
    class Xs {
        static __initStatic() {
            this.id = "LinkedErrors"
        }
        __init() {
            this.name = Xs.id
        }
        constructor(t = {}) {
            Xs.prototype.__init.call(this), this._key = t.key || zQ, this._limit = t.limit || XQ
        }
        setupOnce() {
            var t = Wn().getClient();
            !t || hw((n, r) => {
                var s = Wn().getIntegration(Xs);
                return s ? JQ(t.getOptions().stackParser, s._key, s._limit, n, r) : n
            })
        }
    }
    Xs.__initStatic();

    function JQ(e, t, n, r, s) {
        if (!r.exception || !r.exception.values || !s || !ki(s.originalException, Error)) return r;
        var o = bw(e, n, s.originalException, t);
        return r.exception.values = [...o, ...r.exception.values], r
    }

    function bw(e, t, n, r, s = []) {
        if (!ki(n[r], Error) || s.length + 1 >= t) return s;
        var o = gw(e, n[r]);
        return bw(e, t, n[r], r, [o, ...s])
    }
    var zi = tn();
    class Js {
        constructor() {
            Js.prototype.__init.call(this)
        }
        static __initStatic() {
            this.id = "HttpContext"
        }
        __init() {
            this.name = Js.id
        }
        setupOnce() {
            hw(t => {
                if (Wn().getIntegration(Js)) {
                    if (!zi.navigator && !zi.location && !zi.document) return t;
                    var n = t.request && t.request.url || zi.location && zi.location.href;
                    const {
                        referrer: o
                    } = zi.document || {}, {
                        userAgent: c
                    } = zi.navigator || {};
                    var r = {
                            ...t.request && t.request.headers,
                            ...o && {
                                Referer: o
                            },
                            ...c && {
                                "User-Agent": c
                            }
                        },
                        s = {
                            ...n && {
                                url: n
                            },
                            headers: r
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
    Js.__initStatic();
    class Qs {
        constructor() {
            Qs.prototype.__init.call(this)
        }
        static __initStatic() {
            this.id = "Dedupe"
        }
        __init() {
            this.name = Qs.id
        }
        setupOnce(t, n) {
            var r = s => {
                var o = n().getIntegration(Qs);
                if (o) {
                    try {
                        if (QQ(s, o._previousEvent)) return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Yt.warn("Event dropped due to being a duplicate of previously captured event."), null
                    } catch {
                        return o._previousEvent = s
                    }
                    return o._previousEvent = s
                }
                return s
            };
            r.id = this.name, t(r)
        }
    }
    Qs.__initStatic();

    function QQ(e, t) {
        return t ? !!(ZQ(e, t) || eZ(e, t)) : !1
    }

    function ZQ(e, t) {
        var n = e.message,
            r = t.message;
        return !(!n && !r || n && !r || !n && r || n !== r || !Sw(e, t) || !Tw(e, t))
    }

    function eZ(e, t) {
        var n = WE(t),
            r = WE(e);
        return !(!n || !r || n.type !== r.type || n.value !== r.value || !Sw(e, t) || !Tw(e, t))
    }

    function Tw(e, t) {
        let n = jE(e),
            r = jE(t);
        if (!n && !r) return !0;
        if (n && !r || !n && r || (n = n, r = r, r.length !== n.length)) return !1;
        for (let c = 0; c < r.length; c++) {
            var s = r[c],
                o = n[c];
            if (s.filename !== o.filename || s.lineno !== o.lineno || s.colno !== o.colno || s.function !== o.function) return !1
        }
        return !0
    }

    function Sw(e, t) {
        let n = e.fingerprint,
            r = t.fingerprint;
        if (!n && !r) return !0;
        if (n && !r || !n && r) return !1;
        n = n, r = r;
        try {
            return n.join("") === r.join("")
        } catch {
            return !1
        }
    }

    function WE(e) {
        return e.exception && e.exception.values && e.exception.values[0]
    }

    function jE(e) {
        var t = e.exception;
        if (t) try {
            return t.values[0].stacktrace.frames
        } catch {
            return
        }
    }
    new zs, new _o, new Eo, new yo, new vi, new Xs, new Qs, new Js;

    function tZ(e = {}, t = Wn()) {
        var n = tn();
        if (!n.document) {
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Yt.error("Global document not defined in showReportDialog call");
            return
        }
        const {
            client: r,
            scope: s
        } = t.getStackTop();
        var o = e.dsn || r && r.getDsn();
        if (!o) {
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Yt.error("DSN not configured for showReportDialog call");
            return
        }
        s && (e.user = {
            ...s.getUser(),
            ...e.user
        }), e.eventId || (e.eventId = t.lastEventId());
        var c = n.document.createElement("script");
        c.async = !0, c.src = yQ(o, e), e.onLoad && (c.onload = e.onLoad);
        var u = n.document.head || n.document.body;
        u ? u.appendChild(c) : (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Yt.error("Not injecting report dialog. No injection point found in HTML")
    }
    const nZ = ze({
            setup() {
                return {
                    fatalError: hn($o.fatal.error)
                }
            },
            computed: {
                message() {
                    var r, s, o, c, u;
                    const e = (o = (s = (r = this.fatalError) == null ? void 0 : r.event) == null ? void 0 : s.event_id) != null ? o : "Unknown";
                    let t = "";
                    const n = (u = (c = this.fatalError) == null ? void 0 : c.hint) == null ? void 0 : u.originalException;
                    return n ? typeof n == "string" ? t = n : t = n.message : t = "An unknown error occured", `Version:
${window.tv.manifest.loader.version}

Event ID:
${e}

${t}`
                }
            },
            methods: {
                onFeedbackClick() {
                    var e, t, n;
                    tZ({
                        id: (n = (t = (e = this.fatalError) == null ? void 0 : e.event) == null ? void 0 : t.event_id) != null ? n : "Unknown"
                    })
                }
            }
        }),
        ko = e => (da("data-v-d0abff79"), e = e(), ha(), e),
        rZ = {
            class: "jbg fatal"
        },
        iZ = {
            class: "constrain"
        },
        sZ = ko(() => Y("a", {
            class: "logo",
            href: "/",
            "aria-label": "Jackbox Games Logo"
        }, null, -1)),
        aZ = {
            class: "content"
        },
        oZ = ko(() => Y("h1", null, "You have encountered an error", -1)),
        cZ = ko(() => Y("p", null, "Something went wrong! But don't worry, you can try a few things to get going.", -1)),
        lZ = ko(() => Y("ul", null, [Y("li", null, "Refresh the page"), Y("li", null, "Turn off adblockers or other browser extensions."), Y("li", null, "Check your connection to the Internet."), Y("li", null, "Make sure you're using an up-to-date browser."), Y("li", null, "If that doesn't work, let us know.")], -1)),
        uZ = ko(() => Y("hr", null, null, -1)),
        fZ = {
            class: "error"
        };

    function dZ(e, t, n, r, s, o) {
        return z(), Q("div", rZ, [Y("div", iZ, [sZ, Y("div", aZ, [oZ, cZ, lZ, Y("button", {
            onClick: t[0] || (t[0] = (...c) => e.onFeedbackClick && e.onFeedbackClick(...c))
        }, "Tell us what happened"), uZ, Y("pre", fZ, Ce(e.message), 1)])])])
    }
    const hZ = yt(nZ, [
            ["render", dZ],
            ["__scopeId", "data-v-d0abff79"]
        ]),
        Wc = dr({
            hasCrashed: !1
        }),
        pZ = {
            install: e => {
                if (e.config.globalProperties.$handleEcastError) return;
                e.provide($o.fatal.error, Sn(() => Wc));
                const t = (n, r) => {
                    var s, o;
                    if (n instanceof Un.EcastEntityNotFound || n instanceof Un.EcastFilterError || n instanceof Un.EcastRateLimitExceeded || n instanceof Error && ((s = n.message) == null ? void 0 : s.includes("Socket not ready to send")) || n instanceof Error && ((o = n.message) == null ? void 0 : o.includes("No connection available"))) return console.warn(n);
                    throw r ? console.error(r, n) : console.error(n), n
                };
                window.tv.onError = async (n, r) => {
                    if (n.level === "error" && (Wc.hasCrashed = !0, Wc.event = n, Wc.hint = r), e.config.globalProperties.$debugRecorder) return await e.config.globalProperties.$debugRecorder.sendToEcast()
                }, e.component("Fatal", hZ), e.config.globalProperties.$handleEcastError = t
            }
        };
    var gZ = pJ,
        mZ = _J;

    function vZ(e, t) {
        t = gZ(t, e);
        for (var n = 0, r = t.length; e != null && n < r;) e = e[mZ(t[n++])];
        return n && n == r ? e : void 0
    }
    var _Z = vZ,
        yZ = _Z;

    function EZ(e, t, n) {
        var r = e == null ? void 0 : yZ(e, t);
        return r === void 0 ? n : r
    }
    var bZ = EZ,
        TZ = Math.floor,
        SZ = Math.random;

    function OZ(e, t) {
        return e + TZ(SZ() * (t - e + 1))
    }
    var wZ = OZ,
        CZ = wZ;

    function AZ(e) {
        var t = e.length;
        return t ? e[CZ(0, t - 1)] : void 0
    }
    var Ow = AZ,
        IZ = JO;

    function RZ(e, t) {
        return IZ(t, function(n) {
            return e[n]
        })
    }
    var NZ = RZ,
        LZ = NZ,
        $Z = nu;

    function PZ(e) {
        return e == null ? [] : LZ(e, $Z(e))
    }
    var kZ = PZ,
        DZ = Ow,
        MZ = kZ;

    function xZ(e) {
        return DZ(MZ(e))
    }
    var UZ = xZ,
        FZ = Ow,
        BZ = UZ,
        GZ = Ri;

    function WZ(e) {
        var t = GZ(e) ? FZ : BZ;
        return t(e)
    }
    var jZ = WZ;

    function HE(e, t) {
        const n = e.global.locale,
            r = e.global.messages[n],
            s = bZ(r, t);
        return Array.isArray(s) || console.warn(`[i18nPlugin] Translation with key ${t} is not an array`), jZ(s)
    }
    const HZ = {
            install: (e, t) => {
                e.directive("ts", (n, r) => {
                    const s = HE(t.i18n, r.value);
                    n.textContent = s || ""
                }), e.config.globalProperties.$ts = function(r) {
                    return HE(t.i18n, r) || ""
                }, e.config.globalProperties.$t = t.i18n.global.t, e.config.globalProperties.$tc = t.i18n.global.tc, e.config.globalProperties.$te = t.i18n.global.te, e.config.globalProperties.$tm = t.i18n.global.tm
            }
        },
        KZ = ze({
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
        VZ = "main/@connect/assets/928ef0da.png",
        YZ = "main/@connect/assets/0bb76a2d.png",
        qZ = "main/@connect/assets/ed4469b3.png",
        zZ = {
            key: 0,
            class: "image",
            src: VZ,
            alt: "Kicked"
        },
        XZ = {
            key: 1,
            class: "image",
            src: YZ,
            alt: "Thank You"
        },
        JZ = {
            key: 2,
            class: "image",
            src: qZ,
            alt: "Error"
        },
        QZ = {
            class: "text"
        },
        ZZ = {
            key: 3,
            class: "subtext"
        },
        eee = {
            class: "actions"
        };

    function tee(e, t, n, r, s, o) {
        const c = gn("bb");
        return z(), Q("div", {
            class: Ye(["error-model", e.classes])
        }, [e.image === "tear" ? (z(), Q("img", zZ)) : e.image === "moon" ? (z(), Q("img", XZ)) : (z(), Q("img", JZ)), je(Y("h3", QZ, null, 512), [
            [c, e.text]
        ]), e.subtext ? je((z(), Q("h3", ZZ, null, 512)), [
            [c, e.subtext]
        ]) : Ae("", !0), Y("div", eee, [je(Y("button", {
            onClick: t[0] || (t[0] = Bt(u => e.$emit("resolve"), ["prevent"]))
        }, null, 512), [
            [c, e.dismissText]
        ])])], 2)
    }
    const nee = yt(KZ, [
            ["render", tee],
            ["__scopeId", "data-v-420dd700"]
        ]),
        ree = ze({
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
        iee = {
            class: "text"
        },
        see = {
            key: 0,
            class: "subtext"
        },
        aee = {
            class: "actions"
        },
        oee = ["onClick"];

    function cee(e, t, n, r, s, o) {
        const c = gn("bb");
        return z(), Q("div", {
            class: Ye(["options-modal", e.classes])
        }, [je(Y("h3", iee, null, 512), [
            [c, e.text]
        ]), e.subtext ? je((z(), Q("h3", see, null, 512)), [
            [c, e.subtext]
        ]) : Ae("", !0), Y("div", aee, [(z(!0), Q(ut, null, Ar(e.options, (u, f) => je((z(), Q("button", {
            key: f,
            class: Ye(u.classes),
            onClick: Bt(h => e.$emit("resolve", u.value), ["prevent"])
        }, null, 10, oee)), [
            [c, u.text]
        ])), 128))])], 2)
    }
    const lee = yt(ree, [
            ["render", cee],
            ["__scopeId", "data-v-f5303469"]
        ]),
        uee = ze({
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
                show(e, t = {}, n = {}) {
                    return this.props = t, this.classes = n.classes || "jbg", e === "Error" ? this.content = nee : e === "Options" ? this.content = lee : this.content = e, new Promise(r => {
                        this.resolve = r
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

    function fee(e, t, n, r, s, o) {
        return z(), nr(To, {
            name: "modal-transition"
        }, {
            default: Kr(() => [e.props ? (z(), Q("div", {
                key: 0,
                class: Ye(["modal", e.classes]),
                onKeyup: t[0] || (t[0] = Hs((...c) => e.onBackgroundClick && e.onBackgroundClick(...c), ["esc"])),
                onClick: t[1] || (t[1] = Bt((...c) => e.onBackgroundClick && e.onBackgroundClick(...c), ["self"]))
            }, [e.content ? (z(), nr(C$(e.content), Mh({
                key: 0,
                class: "content"
            }, e.props, {
                onResolve: e.onResolve
            }), null, 16, ["onResolve"])) : Ae("", !0)], 34)) : Ae("", !0)]),
            _: 1
        })
    }
    const dee = yt(uee, [
            ["render", fee],
            ["__scopeId", "data-v-e6feb9c0"]
        ]),
        hee = {
            install: e => {
                if (e.config.globalProperties.$showModal) return;
                let t;
                const n = (s, o, c) => {
                        if (!t) throw new Error("No ModalComponent is registered");
                        return t.show(s, o, c)
                    },
                    r = s => {
                        t = s
                    };
                e.component("Modal", dee), e.config.globalProperties.$showModal = n, e.config.globalProperties.$registerModal = r
            }
        };
    ze({
        setup() {
            return {
                announcment: hn($o.textDescriptions.announcement)
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
                !t || !t.length || t.forEach(n => {
                    n.id !== void 0 && this.lines.find(r => r.id === n.id) || this.lines.push(n)
                })
            }
        }
    });
    et("");
    ze({
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
    });
    ze({
        props: {
            options: Object,
            mainView: Object
        },
        setup() {
            return {
                fatalError: hn($o.fatal.error)
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
    const pee = {
            LABEL: "BRANCH",
            REFRESH_REQUIRED: "Refresh Required",
            PREFERRED: "PREFERRED BRANCH",
            SELECT: "Select a Branch",
            WAITING: "Waiting for Room"
        },
        gee = {
            UNSUPPORTED_BROWSER: "This game is not supported on this browser. View '?' or HELP to see a list of compatible browsers.",
            ROOM_IS_FULL: "The game is full",
            ROOM_NOT_FOUND: "Room not found",
            AUDIENCE_IS_FULL: "The audience is full",
            UNABLE_TO_CONNECT: "Unable to connect to the Jackbox Games server. This is commonly caused by adblockers or privacy extensions.",
            UNABLE_TO_PRELOAD: "Unable to preload this game bundle",
            KICKED: "You cannot join because you have been kicked by a moderator",
            REQUIRES_TWITCH_LOGIN: "Game requires Twitch login",
            ROOM_IS_LOCKED: "Game is locked",
            INCORRECT_PASSWORD: "Incorrect password",
            GENERIC: "Error joining this game",
            FILTER_NAME: "This game has profanity filters enabled. Please pick a different name."
        },
        mee = {
            NAME: "NAME",
            NAME_PLACEHOLDER: "ENTER YOUR NAME",
            PASSWORD_PLACEHOLDER: "ENTER 5-DIGIT PASSWORD",
            PASSWORD_REQUIRED_TITLE: "Password required",
            PASSWORD_REQUIRED_BODY: "Please enter the password or join as an audience member",
            PASSWORD_JOIN_AS_PLAYER: "Join as Player",
            PASSWORD_JOIN_AS_AUDIENCE: "Join Audience",
            ROOM_CODE: "ROOM CODE",
            ROOM_CODE_PLACEHOLDER: "ENTER 4-LETTER CODE"
        },
        vee = "Link to Jackbox Games Homepage",
        _ee = {
            APPEARANCE: "APPEARANCE",
            DARK: "dark",
            HELP: "HELP",
            TWITCH: "TWITCH",
            LIGHT: "light",
            LOGOUT: "LOGOUT",
            MERCH: "MERCH",
            PAST_GAMES: "PAST GAMES",
            MAILING_LIST: "MAILING LIST",
            MODERATOR: "MODERATOR"
        },
        yee = {
            CALL_TO_ACTION: {
                SHOP: "VIEW GAME & SHOP",
                VIEW: "VIEW THIS GAME"
            },
            NEW: "NEW",
            PLAYED_ON: "PLAYED ON",
            REMOVE: {
                CONFIRM: "Are you sure?",
                DESCRIPTION: `This will permanently remove this game
from your past games list.`,
                MANAGE: "Remove Game?",
                TITLE: "Are You Sure?"
            }
        },
        Eee = {
            EMPTY: "No Past Games Yet",
            MANAGE: "MANAGE",
            TITLE: "YOUR PAST GAMES"
        },
        bee = {
            TITLE: "RECENT GAMES",
            VIEW_ALL: {
                BUTTON: "VIEW ALL",
                LINK: "VIEW ALL PAST GAMES"
            }
        },
        Tee = {
            GAME_FULL: "Game is full",
            GAME_STARTED: "Game has started",
            ROOM_NOT_FOUND: "Room not found"
        },
        See = {
            GAME_FULL: "GAME IS FULL",
            GAME_STARTED: "GAME HAS STARTED",
            JOIN_AUDIENCE: "JOIN AUDIENCE",
            RECONNECT: "RECONNECT",
            TWITCH_LOGIN: "LOGIN WITH TWITCH"
        },
        Oee = {
            CAMERA: "[b]HEADS UP:[/b] We\u2019re not detecting a camera, but you can still play the game without a photo. If this seems wrong, try joining with a different browser.",
            STYLE: "[b]HEADS UP:[/b] Your browser seems a bit outdated, and will have some issues displaying this game.",
            TOS: "By clicking {submit}, you agree to our [tos]Terms of Service[/tos]"
        },
        wee = {
            BRANCH: pee,
            ERROR: gee,
            FORM: mee,
            HOMEPAGE_LINK: vee,
            MENU: _ee,
            PAST_GAME: yee,
            PAST_GAMES: Eee,
            RECENT_GAMES: bee,
            STATUS: Tee,
            SUBMIT: See,
            WARNING: Oee
        },
        Cee = {
            UNSUPPORTED_BROWSER: "Le jeu n'est pas compatible avec votre navigateur. Allez sur '?' ou sur AIDE pour afficher une liste des navigateurs compatibles.",
            ROOM_IS_FULL: "La salle est pleine",
            ROOM_NOT_FOUND: "Salle introuvable",
            AUDIENCE_IS_FULL: "Il n'y a plus de place dans le public",
            UNABLE_TO_CONNECT: "Impossible de se connecter au serveur de Jackbox Games. Les bloqueurs de publicit\xE9 ou les modules de protection de la confidentialit\xE9 sont g\xE9n\xE9ralement \xE0 l'origine de ce probl\xE8me.",
            REQUIRES_TWITCH_LOGIN: "Ce jeu n\xE9cessite une connexion Twitch",
            ROOM_IS_LOCKED: "La salle est ferm\xE9e",
            INCORRECT_PASSWORD: "Mot de passe incorrect",
            GENERIC: "Erreur en rejoignant la salle",
            FILTER_NAME: "Le filtre anti-grossi\xE8ret\xE9 est activ\xE9 pour cette partie. Veuillez choisir un autre nom."
        },
        Aee = {
            NAME: "NOM",
            NAME_PLACEHOLDER: "INDIQUEZ VOTRE NOM",
            PASSWORD_REQUIRED_TITLE: "Mot de passe requis",
            PASSWORD_REQUIRED_BODY: "Indiquez le mot de passe ou rejoignez la salle en tant que spectateur",
            PASSWORD_JOIN_AS_PLAYER: "Rejoindre en tant que joueur",
            PASSWORD_JOIN_AS_AUDIENCE: "Rejoindre en tant que spectateur",
            PASSWORD_PLACEHOLDER: "ENTREZ UN MOT DE PASSE \xC0 5 CHIFFRES",
            ROOM_CODE: "CODE DE SALLE",
            ROOM_CODE_PLACEHOLDER: "TAPEZ LE CODE 4 \xC0 LETTRES"
        },
        Iee = {
            APPEARANCE: "APPEARANCE",
            HELP: "AIDE",
            TWITCH: "TWITCH",
            LOGOUT: "D\xC9CONNEXION",
            MERCH: "MERCH",
            PAST_GAMES: "ANCIENS JEU",
            MAILING_LIST: "LISTE DE DIFFUSION",
            MODERATOR: "MOD\xC9RATEUR"
        },
        Ree = {
            GAME_FULL: "La salle est pleine",
            GAME_STARTED: "La partie a commenc\xE9",
            ROOM_NOT_FOUND: "Salle introuvable"
        },
        Nee = {
            GAME_FULL: "LA SALLE EST PLEINE",
            GAME_STARTED: "LA PARTIE A COMMENC\xC9",
            JOIN_AUDIENCE: "REJOINDRE EN TANT QUE SPECTATEUR",
            RECONNECT: "SE RECONNECTER",
            TWITCH_LOGIN: "SE CONNECTER AVEC TWITCH"
        },
        Lee = {
            CAMERA: "[b]ATTENTION\xA0:[/b] Nous ne d\xE9tectons aucune cam\xE9ra, mais vous pouvez jouer sans afficher votre photo. Si vous pensez qu'il s'agit d'une erreur, essayez de rejoindre en utilisant un autre navigateur.",
            STYLE: "[b]ATTENTION\xA0:[/b] Votre navigateur semble obsol\xE8te. Vous risquez de rencontrer des probl\xE8mes d'affichage avec ce jeu.",
            TOS: "En cliquant sur {submit}, vous acceptez nos [tos]Conditions de service[/tos]."
        },
        $ee = {
            ERROR: Cee,
            FORM: Aee,
            MENU: Iee,
            STATUS: Ree,
            SUBMIT: Nee,
            WARNING: Lee
        },
        Pee = {
            UNSUPPORTED_BROWSER: "Il gioco non \xE8 supportato dal browser attualmente in uso. Clicca su '?' o AIUTO per visualizzare la lista dei browser compatibili.",
            ROOM_IS_FULL: "La partita \xE8 al completo",
            ROOM_NOT_FOUND: "Sala non trovata",
            AUDIENCE_IS_FULL: "Il pubblico \xE8 al completo",
            UNABLE_TO_CONNECT: "Impossibile collegarsi al server Jackbox Games. Solitamente il problema \xE8 causato da adblocker o estensioni per la privacy.",
            REQUIRES_TWITCH_LOGIN: "Questo gioco richiede l'accesso a Twitch",
            ROOM_IS_LOCKED: "La stanza \xE8 bloccata",
            INCORRECT_PASSWORD: "Password errata",
            GENERIC: "Impossibile entrare in questa stanza",
            FILTER_NAME: "Questa partita ha i filtri delle volgarit\xE0 attivi. Scegli un nome diverso."
        },
        kee = {
            NAME: "NOME",
            NAME_PLACEHOLDER: "INSERISCI IL TUO NOME",
            PASSWORD_REQUIRED_TITLE: "Password necessaria",
            PASSWORD_REQUIRED_BODY: "Inserisci la password o partecipa come pubblico",
            PASSWORD_JOIN_AS_PLAYER: "Partecipa come giocatore",
            PASSWORD_JOIN_AS_AUDIENCE: "Partecipa come pubblico",
            PASSWORD_PLACEHOLDER: "INSERISCI LA PASSWORD DI 5 CARATTERI",
            ROOM_CODE: "CODICE STANZA",
            ROOM_CODE_PLACEHOLDER: "INSERISCI IL CODICE DI 4 LETTERE"
        },
        Dee = {
            APPEARANCE: "APPEARANCE",
            HELP: "AIUTO",
            TWITCH: "TWITCH",
            LOGOUT: "ESCI",
            MERCH: "NEGOZIO",
            PAST_GAMES: "PARTITE PRECEDENTI",
            MAILING_LIST: "NEWSLETTER",
            MODERATOR: "MODERATORE"
        },
        Mee = {
            GAME_FULL: "La partita \xE8 al completo",
            GAME_STARTED: "La partita \xE8 gi\xE0 iniziata",
            ROOM_NOT_FOUND: "Impossibile trovare la sala"
        },
        xee = {
            GAME_FULL: "LA PARTITA \xC8 AL COMPLETO",
            GAME_STARTED: "LA PARTITA \xC8 GI\xC0 INIZIATA",
            JOIN_AUDIENCE: "PARTECIPA COME PUBBLICO",
            RECONNECT: "RICOLLEGATI",
            TWITCH_LOGIN: "ACCEDI CON TWITCH"
        },
        Uee = {
            CAMERA: "[b]AVVISO:[/b] Non rileviamo la telecamera, ma puoi giocare anche senza aggiungere una foto. Se la cosa non ti torna, prova ad accedere usando un altro browser.",
            STYLE: "[b]AVVISO:[/b] Il tuo browser \xE8 obsoleto e avr\xE0 dei problemi a visualizzare il gioco.",
            TOS: "Selezionando {submit}, accetti le [tos]Condizioni del servizio[/tos]"
        },
        Fee = {
            ERROR: Pee,
            FORM: kee,
            MENU: Dee,
            STATUS: Mee,
            SUBMIT: xee,
            WARNING: Uee
        },
        Bee = {
            UNSUPPORTED_BROWSER: "Dieses Spiel wird von diesem Browser nicht unterst\xFCtzt. Unter '?' und HILFE findest du eine vollst\xE4ndige Liste an kompatiblen Browsern.",
            ROOM_IS_FULL: "Das Spiel ist voll",
            ROOM_NOT_FOUND: "Raum wurde nicht gefunden",
            AUDIENCE_IS_FULL: "Das Publikum ist voll",
            UNABLE_TO_CONNECT: "Es konnte keine Verbindung zum Server von Jackbox Games hergestellt werden. Dies wird h\xE4ufig durch Adblocker oder Privacy Extensions verursacht.",
            REQUIRES_TWITCH_LOGIN: "F\xFCr diesen Spiel ist Twitch erforderlich",
            ROOM_IS_LOCKED: "Spiel verschlossen",
            INCORRECT_PASSWORD: "Falsches Passwort",
            GENERIC: "Fehler beim Betreten des Spiels",
            FILTER_NAME: "Der Familientauglichkeits-Filter des Spiels ist aktiviert. W\xE4hle einen anderen Namen."
        },
        Gee = {
            NAME: "NAME",
            NAME_PLACEHOLDER: "GIB DEINEN NAMEN EIN",
            PASSWORD_REQUIRED_TITLE: "Passwort ben\xF6tigt",
            PASSWORD_REQUIRED_BODY: "Bitte gib das Passwort ein oder setze dich ins Publikum",
            PASSWORD_PLACEHOLDER: "F\xDCNFSTELLIGES PASSWORT EINGEBEN",
            PASSWORD_JOIN_AS_PLAYER: "Als Spieler beitreten",
            PASSWORD_JOIN_AS_AUDIENCE: "Ins Publikum setzen",
            ROOM_CODE: "RAUMCODE",
            ROOM_CODE_PLACEHOLDER: "GIB DEN 4-STELLIGEN CODE EIN"
        },
        Wee = {
            APPEARANCE: "APPEARANCE",
            HELP: "HILFE",
            TWITCH: "TWITCH",
            LOGOUT: "ABMELDEN",
            MERCH: "MERCH",
            PAST_GAMES: "ANDERE SPIELE",
            MAILING_LIST: "MAILINGLISTE",
            MODERATOR: "MODERATOR"
        },
        jee = {
            GAME_FULL: "Spiel ist voll",
            GAME_STARTED: "Spiel hat bereits begonnen",
            ROOM_NOT_FOUND: "Raum nicht gefunden"
        },
        Hee = {
            GAME_FULL: "SPIEL IST VOLL",
            GAME_STARTED: "SPIEL HAT BEREITS BEGONNEN",
            JOIN_AUDIENCE: "INS PUBLIKUM SETZEN",
            RECONNECT: "NEU VERBINDEN",
            TWITCH_LOGIN: "MIT TWITCH ANMELDEN"
        },
        Kee = {
            CAMERA: "[b]ACHTUNG:[/b] Es wurde keine Kamera erkannt, aber du kannst das Spiel auch ohne Foto spielen. Falls eine Kamera vorhanden ist, probiere es mit einem anderen Browser.",
            STYLE: "[b]ACHTUNG:[/b] Dein Browser scheint etwas veraltet zu sein. Es k\xF6nnte Probleme bei der Anzeige dieses Spiels geben.",
            TOS: "Wenn du auf {submit} klickst, erkl\xE4rst du dich mit unseren [tos]Nutzungsbedingungen[/tos] einverstanden"
        },
        Vee = {
            ERROR: Bee,
            FORM: Gee,
            MENU: Wee,
            STATUS: jee,
            SUBMIT: Hee,
            WARNING: Kee
        },
        Yee = {
            UNSUPPORTED_BROWSER: "El juego no es compatible con este navegador. En '?' y AYUDA puedes ver la lista de navegadores compatibles.",
            ROOM_IS_FULL: "La sala est\xE1 llena",
            ROOM_NOT_FOUND: "No se encuentra la sala",
            AUDIENCE_IS_FULL: "El p\xFAblico est\xE1 completo",
            UNABLE_TO_CONNECT: "No ha podido establecerse conexi\xF3n con el servidor de Jackbox Games. Puede ser debido a los bloqueadores de anuncios o a las extensiones de privacidad.",
            REQUIRES_TWITCH_LOGIN: "Este juego requiere un inicio de sesi\xF3n de Twitch",
            ROOM_IS_LOCKED: "El juego est\xE1 bloqueado",
            INCORRECT_PASSWORD: "Contrase\xF1a incorrecta",
            GENERIC: "Error al unirte al juego",
            FILTER_NAME: "Esta partida tiene activados los filtros de lenguaje malsonante. Elige un nombre diferente."
        },
        qee = {
            NAME: "NOMBRE",
            NAME_PLACEHOLDER: "INDICA TU NOMBRE",
            PASSWORD_REQUIRED_TITLE: "Hace falta una contrase\xF1a",
            PASSWORD_REQUIRED_BODY: "Introduce la contrase\xF1a o \xFAnete como p\xFAblico",
            PASSWORD_JOIN_AS_PLAYER: "Unirse como jugador",
            PASSWORD_JOIN_AS_AUDIENCE: "Unirse como p\xFAblico",
            PASSWORD_PLACEHOLDER: "INTRODUCIR CONTRASE\xD1A DE 5 D\xCDGITOS",
            ROOM_CODE: "C\xD3DIGO DE LA SALA",
            ROOM_CODE_PLACEHOLDER: "INTRODUCIR C\xD3DIGO DE 4 CARACTERES"
        },
        zee = {
            APPEARANCE: "APPEARANCE",
            HELP: "AYUDA",
            TWITCH: "TWITCH",
            LOGOUT: "CERRAR SESI\xD3N",
            MERCH: "MERCHANDISING",
            PAST_GAMES: "PARTIDAS ANTERIORES",
            MAILING_LIST: "LISTA DE CORREO",
            MODERATOR: "MODERADOR"
        },
        Xee = {
            GAME_FULL: "La partida est\xE1 completa",
            GAME_STARTED: "La partida ha empezado",
            ROOM_NOT_FOUND: "No se encuentra la sala"
        },
        Jee = {
            GAME_FULL: "LA PARTIDA EST\xC1 COMPLETA",
            GAME_STARTED: "LA PARTIDA HA EMPEZADO",
            JOIN_AUDIENCE: "UNIRSE COMO P\xDABLICO",
            RECONNECT: "RECONECTAR",
            TWITCH_LOGIN: "INICIAR SESI\xD3N CON TWITCH"
        },
        Qee = {
            CAMERA: "[b]AVISO:[/b] No se detecta ninguna c\xE1mara, pero puedes jugar sin foto. Si crees que se trata de un error, cambia de navegador.",
            STYLE: "[b]AVISO:[/b] Tu navegador est\xE1 un poco desactualizado, as\xED que es posible que el juego no se vea del todo bien.",
            TOS: "Al hacer clic en {submit}, aceptas las [tos]Condiciones del servicio[/tos]"
        },
        Zee = {
            ERROR: Yee,
            FORM: qee,
            MENU: zee,
            STATUS: Xee,
            SUBMIT: Jee,
            WARNING: Qee
        },
        ete = {
            UNSUPPORTED_BROWSER: "El juego no es compatible con este navegador. En '?' y AYUDA puedes ver la lista de navegadores compatibles.",
            ROOM_IS_FULL: "La sala est\xE1 llena",
            ROOM_NOT_FOUND: "No se encuentra la sala",
            AUDIENCE_IS_FULL: "El p\xFAblico est\xE1 completo",
            UNABLE_TO_CONNECT: "No podemos conectarte a los servidores de Jackbox Games. Puede ser debido a los bloqueadores de anuncios y las extensiones de privacidad.",
            REQUIRES_TWITCH_LOGIN: "Este juego requiere inicio de sesi\xF3n de Twitch",
            ROOM_IS_LOCKED: "La sala est\xE1 bloqueada",
            INCORRECT_PASSWORD: "Contrase\xF1a incorrecta",
            GENERIC: "Error al unirte a la sala",
            FILTER_NAME: "Esta partida tiene activados los filtros de lenguaje malsonante. Elige un nombre diferente."
        },
        tte = {
            NAME: "NOMBRE",
            NAME_PLACEHOLDER: "INDICA TU NOMBRE",
            PASSWORD_PLACEHOLDER: "INTRODUCE CONTRASE\xD1A DE 5 D\xCDGITOS",
            PASSWORD_REQUIRED_TITLE: "Requiere contrase\xF1a",
            PASSWORD_REQUIRED_BODY: "Introduce la contrase\xF1a o \xFAnete como p\xFAblico",
            PASSWORD_JOIN_AS_PLAYER: "Unirse como jugador",
            PASSWORD_JOIN_AS_AUDIENCE: "Unirse como p\xFAblico",
            ROOM_CODE: "C\xD3DIGO DE LA SALA",
            ROOM_CODE_PLACEHOLDER: "INTRODUCE EL C\xD3DIGO DE 4 CARACTERES"
        },
        nte = {
            APPEARANCE: "APPEARANCE",
            HELP: "AYUDA",
            TWITCH: "TWITCH",
            LOGOUT: "CERRAR SESI\xD3N",
            MERCH: "MERCHANDISING",
            PAST_GAMES: "PARTIDAS ANTERIORES",
            MAILING_LIST: "LISTA DE CORREO",
            MODERATOR: "MODERADOR"
        },
        rte = {
            GAME_FULL: "La partida est\xE1 completa",
            GAME_STARTED: "La partida ha empezado",
            ROOM_NOT_FOUND: "No se encuentra la sala"
        },
        ite = {
            GAME_FULL: "LA PARTIDA EST\xC1 COMPLETA",
            GAME_STARTED: "LA PARTIDA HA EMPEZADO",
            JOIN_AUDIENCE: "UNIRSE AL P\xDABLICO",
            RECONNECT: "RECONECTAR",
            TWITCH_LOGIN: "INICIAR SESI\xD3N CON TWITCH"
        },
        ste = {
            CAMERA: "[b]AVISO:[/b] No se detecta ninguna c\xE1mara, pero puedes jugar sin hacerte una foto. Si crees que se trata de un error, cambia de navegador.",
            STYLE: "[b]AVISO:[/b] Tu navegador est\xE1 un poco desactualizado, as\xED que es posible que el juego no se vea del todo bien.",
            TOS: "Al hacer clic en {submit}, aceptas las [tos]Condiciones del servicio[/tos]"
        },
        ate = {
            ERROR: ete,
            FORM: tte,
            MENU: nte,
            STATUS: rte,
            SUBMIT: ite,
            WARNING: ste
        },
        ote = {
            en: wee,
            fr: $ee,
            it: Fee,
            de: Vee,
            es: Zee,
            "es-XL": ate
        },
        cte = ze({
            props: {
                room: Object
            },
            emits: ["resolve"],
            data() {
                return {
                    passwordLength: 5,
                    password: ""
                }
            },
            computed: {
                canSubmit() {
                    return this.password.length >= this.passwordLength
                }
            },
            mounted() {
                this.$refs.input.focus()
            },
            methods: {
                onInput(e) {
                    const t = e.target;
                    this.password = t.value.toUpperCase()
                }
            }
        }),
        lte = "main/@connect/assets/a96a9236.png",
        ww = e => (da("data-v-f058cb4c"), e = e(), ha(), e),
        ute = {
            class: "jbg password"
        },
        fte = ww(() => Y("img", {
            class: "image",
            src: lte,
            alt: "Enter Password"
        }, null, -1)),
        dte = {
            class: "text"
        },
        hte = {
            class: "subtext"
        },
        pte = {
            class: "actions"
        },
        gte = ["value", "placeholder", "maxlength"],
        mte = ["disabled"],
        vte = ww(() => Y("hr", null, null, -1)),
        _te = {
            class: "or"
        };

    function yte(e, t, n, r, s, o) {
        const c = gn("bb");
        return z(), Q("div", ute, [fte, Y("h3", dte, Ce(e.$t("FORM.PASSWORD_REQUIRED_TITLE")), 1), Y("p", hte, Ce(e.$t("FORM.PASSWORD_REQUIRED_BODY")), 1), Y("div", pte, [Y("input", {
            ref: "input",
            type: "text",
            value: e.password,
            placeholder: e.$t("FORM.PASSWORD_PLACEHOLDER"),
            maxlength: e.passwordLength,
            autocapitalize: "off",
            autocorrect: "off",
            autocomplete: "off",
            "aria-label": "password",
            onInput: t[0] || (t[0] = (...u) => e.onInput && e.onInput(...u))
        }, null, 40, gte), Y("button", {
            type: "submit",
            disabled: !e.canSubmit,
            onClick: t[1] || (t[1] = Bt(u => e.$emit("resolve", e.password), ["prevent"]))
        }, Ce(e.$t("FORM.PASSWORD_JOIN_AS_PLAYER")), 9, mte), e.room.audienceEnabled ? (z(), Q(ut, {
            key: 0
        }, [vte, Y("p", _te, Ce(e.$t("SEPARATOR.OR")), 1), je(Y("button", {
            class: "audience",
            type: "submit",
            onClick: t[2] || (t[2] = Bt(u => e.$emit("resolve", !0), ["prevent"]))
        }, null, 512), [
            [c, e.$t("FORM.PASSWORD_JOIN_AS_AUDIENCE")]
        ])], 64)) : (z(), Q("button", {
            key: 1,
            class: "cancel",
            onClick: t[3] || (t[3] = Bt(u => e.$emit("resolve", !1), ["prevent"]))
        }, Ce(e.$t("ACTION.CANCEL")), 1))])])
    }
    const Ete = yt(cte, [
            ["render", yte],
            ["__scopeId", "data-v-f058cb4c"]
        ]),
        bte = ze({
            components: {
                Input: R4
            },
            props: {
                match: Object,
                twitchUser: Object
            },
            emits: {
                twitchLoginWasClicked: () => !0
            },
            data() {
                return {
                    codeLength: 4,
                    code: "",
                    nameLength: 12,
                    name: "",
                    passwordLength: 5,
                    password: "",
                    branch: "",
                    isConnecting: !1,
                    reconnectData: null,
                    api: new pp.APIClient({
                        host: dn.serverUrl,
                        scheme: "https"
                    }),
                    isPreloading: !1,
                    preloaded: {
                        appTag: null,
                        branch: null
                    },
                    room: null,
                    roomNotFound: !1,
                    warnings: []
                }
            },
            computed: {
                canConnect() {
                    return !(!this.hasFormData || this.isConnecting || this.isPreloading || !this.preloaded.appTag)
                },
                hasFormData() {
                    return !(this.code.length !== this.codeLength || !this.name || this.name.length > this.nameLength)
                },
                isReconnectable() {
                    return !(!this.reconnectData || this.code !== this.reconnectData.code)
                },
                state() {
                    var t, n;
                    if (!this.room) {
                        const r = this.code.length === this.codeLength && this.roomNotFound;
                        return {
                            canSubmit: !1,
                            statusKey: r ? "STATUS.ROOM_NOT_FOUND" : "",
                            submitKey: "ACTION.PLAY"
                        }
                    }
                    const e = (n = (t = Kl(this.room.appTag)) == null ? void 0 : t.name) != null ? n : "???";
                    return this.isReconnectable ? {
                        canSubmit: this.canConnect,
                        statusKey: e,
                        submitKey: "SUBMIT.RECONNECT",
                        joinAs: this.reconnectData.joinAs
                    } : this.room.locked ? this.room.audienceEnabled ? {
                        canSubmit: this.canConnect,
                        statusKey: "STATUS.GAME_STARTED",
                        submitKey: "SUBMIT.JOIN_AUDIENCE",
                        joinAs: "audience"
                    } : {
                        canSubmit: !1,
                        statusKey: "STATUS.GAME_STARTED",
                        submitKey: "SUBMIT.GAME_STARTED"
                    } : this.room.full ? this.room.audienceEnabled ? {
                        canSubmit: this.canConnect,
                        statusKey: "STATUS.GAME_FULL",
                        submitKey: "SUBMIT.JOIN_AUDIENCE",
                        joinAs: "audience"
                    } : {
                        canSubmit: !1,
                        statusKey: "STATUS.GAME_FULL",
                        submitKey: "SUBMIT.GAME_FULL"
                    } : {
                        canSubmit: this.canConnect,
                        statusText: e,
                        submitKey: "ACTION.PLAY",
                        joinAs: "player"
                    }
                },
                shouldShowBranchOptions() {
                    return window.tv.manifest.environment !== "production"
                },
                branchOptions() {
                    if (!this.room) return {};
                    const e = {};
                    return Object.entries(window.tv.manifest.branches).forEach(([t, n]) => {
                        !n.bundles[this.room.appTag] || (e[t] = n)
                    }), e
                },
                selectedBranch() {
                    return window.tv.manifest.branches[this.branch]
                },
                selectedBundle() {
                    var e;
                    if (!!this.room) return (e = window.tv.manifest.branches[this.branch]) == null ? void 0 : e.bundles[this.room.appTag]
                },
                displayBranchLastUpdated() {
                    if (!!this.selectedBranch) return new Date(this.selectedBranch.lastUpdated).toLocaleString()
                },
                displayBranchType() {
                    if (!!this.selectedBranch) return this.selectedBranch.type === "production" ? "PROD" : "DEV"
                },
                displayVersion() {
                    var e, t, n;
                    return (n = (e = this.selectedBundle) == null ? void 0 : e.version) != null ? n : (t = this.selectedBranch) == null ? void 0 : t.version
                }
            },
            watch: {
                twitchUser: "twitchDidUpdate",
                branch: "preloadBundle"
            },
            beforeMount() {
                this.populateFromStorage(), this.checkReconnect(), this.populateFromURL()
            },
            methods: {
                populateFromStorage() {
                    var t, n, r;
                    if (!De.isSupported) return;
                    this.code = ((t = De.get("code")) != null ? t : "").toUpperCase(), this.name = ((n = De.get("name")) != null ? n : "").toUpperCase();
                    const e = (r = De.get("reconnect")) != null ? r : "";
                    if (e) {
                        const [s, o, c, u] = e.split(":");
                        this.reconnectData = {
                            code: this.code,
                            id: parseInt(s, 10),
                            joinAs: o,
                            secret: c,
                            branch: u
                        }
                    }
                },
                populateFromURL() {
                    var r, s, o, c, u, f;
                    const e = (s = (r = this.match) == null ? void 0 : r.params) == null ? void 0 : s.code,
                        t = (c = (o = this.match) == null ? void 0 : o.params) == null ? void 0 : c.name,
                        n = (f = (u = this.match) == null ? void 0 : u.params) == null ? void 0 : f.password;
                    e && e.length === this.codeLength && (this.code = e.toUpperCase(), this.getRoomInfo()), t && (this.name = t), n && (this.password = n)
                },
                async checkReconnect() {
                    !this.code || (await this.getRoomInfo(), this.room || (this.code = "", De.remove("code"), De.remove("reconnect")))
                },
                onCodeInput() {
                    const e = /\s/g;
                    if (this.code = this.code.replace(e, "").trim().toUpperCase(), this.code.length !== this.codeLength) {
                        this.room = null;
                        return
                    }
                    this.getRoomInfo()
                },
                onNameInput() {
                    const e = /^\s+/;
                    this.name = this.name.replace(e, "");
                    const t = dn.sanitizeName(this.name);
                    this.name = t.toUpperCase()
                },
                async onFormSubmit() {
                    await this.connect(this.state.joinAs)
                },
                getBranchForRoom() {
                    var r, s;
                    if (!this.room) return null;
                    const e = this.room.appTag,
                        t = window.tv.manifest.branches,
                        n = [this.branch, (s = (r = this.match) == null ? void 0 : r.params) == null ? void 0 : s.branch, this.room.controllerBranch, "** hmr **", De.get("preference:branch"), "** dist **", "main"];
                    for (let o = 0; o <= n.length; o++) {
                        const c = n[o];
                        if (!!c && !!t[c] && !!t[c].bundles[e]) return c
                    }
                    return null
                },
                shouldPromptForPassword(e) {
                    return !(e !== "player" || this.isReconnectable || !this.room.passwordRequired || this.password)
                },
                async promptForPassword() {
                    const e = await this.$showModal(Ete, {
                        room: this.room
                    });
                    if (!!e) {
                        if (e === !0) {
                            this.connect("audience");
                            return
                        }
                        this.password = e, this.connect("player")
                    }
                },
                shouldPromptForTwitch(e) {
                    return !(e !== "player" || !this.room.twitchLocked || this.twitchUser)
                },
                async promptForTwitch() {
                    var n;
                    const e = [{
                        text: this.$t("SUBMIT.TWITCH_LOGIN"),
                        classes: ["twitch"],
                        value: "twitch"
                    }];
                    switch ((n = this.room) != null && n.audienceEnabled ? e.push({
                            text: this.$t("SUBMIT.JOIN_AUDIENCE"),
                            classes: ["audience"],
                            value: "audience"
                        }) : e.push({
                            text: this.$t("ACTION.CANCEL"),
                            classes: ["cancel"],
                            value: "cancel"
                        }), await this.$showModal("Options", {
                            text: this.$t("ERROR.REQUIRES_TWITCH_LOGIN"),
                            options: e
                        })) {
                        case "twitch":
                            this.$emit("twitchLoginWasClicked");
                            return;
                        case "audience":
                            this.connect("audience")
                    }
                },
                twitchDidUpdate(e, t) {
                    if (e) {
                        let n = e.display_name;
                        n.length > this.nameLength && (n = `${n.slice(0,this.nameLength-1)}\u2026`), this.name = n;
                        return
                    }
                    t && !e && (this.name = "")
                },
                async promptForRetry(e) {
                    var r;
                    let t = [{
                        text: this.$t("ACTION.OK"),
                        classes: ["cancel"],
                        value: "close"
                    }];
                    if ((r = this.room) != null && r.audienceEnabled && (t = [{
                            text: this.$t("FORM.PASSWORD_JOIN_AS_AUDIENCE"),
                            classes: ["audience"],
                            value: "audience"
                        }, {
                            text: this.$t("ACTION.CANCEL"),
                            classes: ["cancel"],
                            value: "close"
                        }]), e === "ERROR.AUDIENCE_IS_FULL" && (t = [{
                            text: this.$t("ACTION.OK"),
                            classes: ["ok"],
                            value: "ok"
                        }]), await this.$showModal("Options", {
                            text: this.$t(e),
                            options: t
                        }) === "audience") return this.connect("audience")
                },
                async getRoomInfo() {
                    this.roomNotFound = !1;
                    try {
                        const e = await this.api.getRoom({
                            code: this.code
                        });
                        this.room = e, this.warnings = await q3.warningsForAppTag(e.appTag), this.$i18n.locale = this.room.locale;
                        const t = this.getBranchForRoom();
                        if (!t) return;
                        this.branch = t, await this.preloadBundle()
                    } catch (e) {
                        console.warn(e), this.room = null, this.roomNotFound = !0, this.branch = ""
                    }
                },
                async preloadBundle() {
                    if (!this.room || !this.branch || this.isPreloading) return;
                    const e = this.preloaded.appTag !== this.room.appTag,
                        t = this.preloaded.branch !== this.branch;
                    if (!(!e && !t)) {
                        this.preloaded = {
                            appTag: null,
                            branch: null
                        };
                        try {
                            this.isPreloading = !0, await window.tv.load({
                                app: this.room.appTag,
                                branch: this.branch
                            }), this.preloaded = {
                                appTag: this.room.appTag,
                                branch: this.branch
                            }
                        } catch (n) {
                            console.error(n), this.showError("ERROR.UNABLE_TO_PRELOAD")
                        }
                        this.isPreloading = !1
                    }
                },
                getConnectOptions(e) {
                    var o;
                    const t = e === "audience" ? this.room.audienceHost : this.room.host;
                    let n = dn.sanitizeName(this.name).trim();
                    n.length > this.nameLength && (n = `${n.substr(0,this.nameLength-1)}\u2026`);
                    let r = zS();
                    De.isSupported && (r = (o = De.get("uuid")) != null ? o : r, De.set("uuid", r));
                    const s = {
                        host: t,
                        code: this.code.toUpperCase(),
                        name: n,
                        password: this.password,
                        role: e,
                        userId: r,
                        debug: "false"
                    };
                    return this.twitchUser && (s.twitchToken = this.twitchUser.token), this.isReconnectable && (s.id = this.reconnectData.id, s.secret = this.reconnectData.secret), s
                },
                async connect(e) {
                    var n, r, s;
                    if (!e || this.isConnecting || !this.state.canSubmit) return;
                    if (await this.getRoomInfo(), !this.room) return this.showError("ERROR.ROOM_NOT_FOUND");
                    if (this.shouldPromptForPassword(e)) return this.promptForPassword();
                    if (this.shouldPromptForTwitch(e)) return this.promptForTwitch();
                    if (!window.tv.connect || !window.tv.mount) return this.showError("ERROR.GENERIC");
                    const t = this.getConnectOptions(e);
                    if (!!t.host && !!t.code && !!t.name && !this.isConnecting) try {
                        this.isConnecting = !0;
                        const o = await window.tv.connect(t);
                        return De.isSupported && (De.set("name", t.name), De.set("code", this.code), De.set("branch", this.branch), De.set("reconnect", `${o.id}:${e}:${o.secret}:${this.branch}`)), window.tv.mount({
                            app: this.room.appTag,
                            branch: this.branch,
                            match: this.match,
                            room: this.room,
                            version: (s = (n = this.selectedBundle) == null ? void 0 : n.version) != null ? s : (r = this.selectedBranch) == null ? void 0 : r.version,
                            welcome: o
                        })
                    } catch (o) {
                        console.error("[connect]", o), this.isConnecting = !1, this.onConnectionError(o, e)
                    }
                },
                async onConnectionError(e, t) {
                    var n;
                    if (e instanceof Un.EcastRoomIsFull) return t === "audience" ? this.promptForRetry("ERROR.AUDIENCE_IS_FULL") : this.promptForRetry("ERROR.ROOM_IS_FULL");
                    if (e instanceof Un.EcastRoomIsLocked) return this.promptForRetry("ERROR.ROOM_IS_LOCKED");
                    if (e instanceof Un.EcastInvalidPassword) return await this.$showModal("Error", {
                        text: this.$t("ERROR.TITLE"),
                        subtext: this.$t("ERROR.INCORRECT_PASSWORD"),
                        dismissText: this.$t("ACTION.TRY_AGAIN")
                    }), this.password = "", this.connect("player");
                    if (e instanceof Un.EcastRoomNotFound) return this.showError("ERROR.ROOM_NOT_FOUND");
                    if (e instanceof Un.EcastTwitchLoginRequired) return this.showError("ERROR.REQUIRES_TWITCH_LOGIN");
                    if (e instanceof Un.EcastPasswordRequired) return this.showError("FORM.PASSWORD_REQUIRED_TITLE");
                    if (e instanceof Un.EcastFilterError) return this.showError("ERROR.FILTER_NAME");
                    if (e instanceof Un.EcastPermissionDenied) return this.showError("ERROR.KICKED");
                    if ((n = e.message) != null && n.includes("Network request failed")) return this.showError("ERROR.UNABLE_TO_CONNECT");
                    this.showError("ERROR.GENERIC")
                },
                showError(e) {
                    this.$showModal("Error", {
                        text: this.$t("ERROR.TITLE"),
                        subtext: this.$t(e),
                        dismissText: this.$t("ACTION.OK")
                    })
                }
            }
        }),
        Tte = e => (da("data-v-ef24a772"), e = e(), ha(), e),
        Ste = {
            for: "roomcode"
        },
        Ote = {
            key: 0,
            class: "status"
        },
        wte = {
            key: 1,
            class: "status"
        },
        Cte = {
            key: 0,
            class: "warnings"
        },
        Ate = {
            for: "username"
        },
        Ite = {
            class: "remaining"
        },
        Rte = {
            for: "branch"
        },
        Nte = {
            key: 0,
            class: "status date"
        },
        Lte = ["disabled"],
        $te = {
            key: 0,
            value: "",
            disabled: ""
        },
        Pte = {
            key: 1,
            value: "",
            disabled: ""
        },
        kte = ["value"],
        Dte = {
            key: 0,
            class: "details"
        },
        Mte = ["disabled"],
        xte = Tte(() => Y("div", {
            class: "loading"
        }, null, -1)),
        Ute = {
            class: "tos",
            role: "complementary"
        };

    function Fte(e, t, n, r, s, o) {
        const c = Qt("Input"),
            u = gn("t"),
            f = gn("bb");
        return z(), Q("form", {
            autocomplete: "off",
            onSubmit: t[3] || (t[3] = Bt((...h) => e.onFormSubmit && e.onFormSubmit(...h), ["prevent"]))
        }, [Y("fieldset", null, [Y("label", Ste, [Bn(Ce(e.$t("FORM.ROOM_CODE")) + " ", 1), e.state.statusKey ? je((z(), Q("span", Ote, null, 512)), [
            [u, e.state.statusKey]
        ]) : e.state.statusText ? (z(), Q("span", wte, Ce(e.state.statusText), 1)) : Ae("", !0)]), ft(c, {
            id: "roomcode",
            modelValue: e.code,
            "onUpdate:modelValue": t[0] || (t[0] = h => e.code = h),
            type: "text",
            autocapitalize: "off",
            autocorrect: "off",
            autocomplete: "off",
            placeholder: e.$t("FORM.ROOM_CODE_PLACEHOLDER"),
            maxlength: e.codeLength,
            onInput: e.onCodeInput
        }, null, 8, ["modelValue", "placeholder", "maxlength", "onInput"]), e.room && e.warnings.length ? (z(), Q("div", Cte, [(z(!0), Q(ut, null, Ar(e.warnings, h => (z(), Q(ut, null, [h === "flexbox" ? je((z(), Q("p", {
            key: h
        })), [
            [f, e.$t("WARNING.STYLE")]
        ]) : Ae("", !0), h === "canvas" ? je((z(), Q("p", {
            key: h
        })), [
            [f, e.$t("ERROR.UNSUPPORTED_BROWSER")]
        ]) : Ae("", !0), h === "camera" ? je((z(), Q("p", {
            key: h
        })), [
            [f, e.$t("WARNING.CAMERA")]
        ]) : Ae("", !0)], 64))), 256))])) : Ae("", !0), Y("label", Ate, [Bn(Ce(e.$t("FORM.NAME")) + " ", 1), Y("span", Ite, Ce(e.nameLength - e.name.length), 1)]), ft(c, {
            id: "username",
            modelValue: e.name,
            "onUpdate:modelValue": t[1] || (t[1] = h => e.name = h),
            type: "text",
            autocapitalize: "off",
            autocorrect: "off",
            autocomplete: "off",
            disabled: e.twitchUser !== void 0,
            placeholder: e.$t("FORM.NAME_PLACEHOLDER"),
            maxlength: e.nameLength,
            onInput: e.onNameInput
        }, null, 8, ["modelValue", "disabled", "placeholder", "maxlength", "onInput"]), e.shouldShowBranchOptions ? (z(), Q(ut, {
            key: 1
        }, [Y("label", Rte, [Bn(Ce(e.$t("BRANCH.LABEL")) + " ", 1), e.selectedBranch ? (z(), Q("span", Nte, Ce(e.displayBranchLastUpdated), 1)) : Ae("", !0)]), Y("div", {
            class: Ye(["select", {
                disabled: !e.room
            }])
        }, [je(Y("select", {
            id: "branch",
            "onUpdate:modelValue": t[2] || (t[2] = h => e.branch = h),
            class: Ye({
                "no-selection": !e.selectedBranch
            }),
            disabled: !e.room || e.isPreloading
        }, [e.room ? (z(), Q("option", Pte, Ce(e.$t("BRANCH.SELECT")), 1)) : (z(), Q("option", $te, Ce(e.$t("BRANCH.WAITING")), 1)), (z(!0), Q(ut, null, Ar(e.branchOptions, (h, g) => (z(), Q("option", {
            key: g,
            value: g
        }, Ce(g), 9, kte))), 128))], 10, Lte), [
            [Zb, e.branch]
        ]), e.selectedBranch ? (z(), Q("p", Dte, Ce(e.displayBranchType) + " " + Ce(e.displayVersion), 1)) : Ae("", !0)], 2)], 64)) : Ae("", !0), Y("button", {
            id: "button-join",
            type: "submit",
            class: Ye({
                connecting: e.isConnecting,
                audience: e.state.joinAs === "audience"
            }),
            disabled: !e.state.canSubmit
        }, [Y("span", null, Ce(e.$t(e.state.submitKey)), 1), xte], 10, Mte)]), je(Y("p", Ute, null, 512), [
            [f, e.$t("WARNING.TOS", {
                submit: e.$t(e.state.submitKey)
            })]
        ])], 32)
    }
    const Bte = yt(bte, [
            ["render", Fte],
            ["__scopeId", "data-v-ef24a772"]
        ]),
        Gte = ze({
            props: {
                index: Number,
                isManaging: Boolean,
                location: String,
                artifact: Object
            },
            emits: {
                removeWasClicked: e => !0
            },
            data() {
                return {
                    viewed: !1,
                    status: "loading",
                    showConfirm: !1
                }
            },
            computed: {
                config() {
                    return Kl(this.artifact.gameName)
                },
                name() {
                    var e, t;
                    return this.showConfirm ? this.$t("PAST_GAME.CONFIRM") : this.isManaging ? this.$t("PAST_GAME.MANAGE") : (t = (e = this.config) == null ? void 0 : e.name) != null ? t : ""
                },
                hasPreviews() {
                    var e, t, n;
                    return (n = (t = (e = this.config) == null ? void 0 : e.features) == null ? void 0 : t.includes("previews")) != null ? n : !1
                },
                imageClasses() {
                    return this.status === "error" || !this.hasPreviews ? ["fallback", this.artifact.gameName] : this.status === "success" ? ["preview"] : []
                },
                imageSrc() {
                    return `https://s3.amazonaws.com/jbg-blobcast-artifacts/${this.artifact.gameName}/${this.artifact.id}/preview.png`
                },
                cta() {
                    var e, t;
                    return (t = (e = this.config) == null ? void 0 : e.shopItems) != null && t.length ? this.$t("PAST_GAME.CALL_TO_ACTION.SHOP") : this.$t("PAST_GAME.CALL_TO_ACTION.VIEW")
                }
            },
            watch: {
                isManaging() {
                    this.showConfirm = !1
                }
            },
            mounted() {
                Si.galleryImpression(this.artifact.categoryId, this.location)
            },
            methods: {
                onImageLoad() {
                    this.status = "success"
                },
                onImageError() {
                    this.status = "error"
                },
                onClick(e) {
                    if (this.isManaging) {
                        e.preventDefault(), this.showConfirm = !0;
                        return
                    }
                    na.setAsViewed(this.index), this.viewed = !0, Si.galleryClick(this.artifact.categoryId, this.location)
                },
                onCancelClick() {
                    this.showConfirm = !1
                }
            }
        }),
        au = e => (da("data-v-ef37839b"), e = e(), ha(), e),
        Wte = ["href"],
        jte = ["src", "alt"],
        Hte = {
            class: "cta"
        },
        Kte = au(() => Y("svg", {
            viewBox: "0 0 200 200",
            class: "external-icon"
        }, [Y("path", {
            d: `M185,106c-8.3,0-15,6.7-15,15v44c0,2.8-2.2,5-5,5H35c-2.8,0-5-2.2-5-5V35c0-2.8,2.2-5,5-5h44c8.3,0,15-6.7,15-15
                       S87.3,0,79,0H35C15.7,0,0,15.7,0,35v130c0,19.3,15.7,35,35,35h130
                       c19.3,0,35-15.7,35-35v-44C200,112.7,193.3,106,185,106z`
        }), Y("path", {
            d: `M184,0h-54c-8.3,0-15,6.7-15,15s6.7,15,15,15h18.8L90.4,88.4c-5.9,5.9-5.9,15.4,0,21.2c2.9,2.9,6.8,4.4,10.6,4.4
                        s7.7-1.5,10.6-4.4L170,51.2V70c0,8.3,6.7,15,15,15s15-6.7,15-15V16C200,7.2,192.8,0,184,0z`
        })], -1)),
        Vte = {
            class: "content"
        },
        Yte = {
            class: "name"
        },
        qte = {
            class: "date"
        },
        zte = {
            key: 0,
            class: "new"
        },
        Xte = {
            key: 0,
            class: "items"
        },
        Jte = {
            key: 0,
            viewBox: "0 0 200 200"
        },
        Qte = au(() => Y("path", {
            d: `M187.4,47.8l-34.1-15.9V29c0-8.8-7.2-16-16-16H57.8c-8.8,0-16,7.2-16,16v18.9L13.6,61.1c-3.9,1.8-6.8,5-8.3,9
                    c-1.5,4-1.3,8.4,0.5,12.2l45,96.4c1.8,3.9,5,6.8,9,8.3c1.8,0.6,3.6,1,5.5,1c2.3,0,4.6-0.5,6.8-1.5l42.7-19.9l14.2,6.6
                    c2.2,1,4.5,1.5,6.7,1.5c6,0,11.8-3.4,14.5-9.2l45-96.4C198.9,61,195.4,51.5,187.4,47.8z M133.4,91.7L107,35.2
                    c-0.4-0.8-0.8-1.5-1.2-2.1h27.6V91.7z M61.8,33h12l-12,5.6V33z M67.2,166.7L25.7,77.5l64.9-30.3l41.6,89.2l-21.7,10.1
                    c0,0,0,0,0,0L67.2,166.7z M153.4,111.4V54l22,10.3L153.4,111.4z`
        }, null, -1)),
        Zte = [Qte],
        ene = {
            key: 1,
            viewBox: "0 0 200 200"
        },
        tne = au(() => Y("path", {
            d: `M164.7,52.2h-20.7V35.5c0-6.2-5-11.2-11.2-11.2H47.6c-6.2,0-11.2,5-11.2,11.2v118c0,12.8,10.4,23.2,23.2,23.2h61.3
                       c12.8,0,23.2-10.4,23.2-23.2v-16.2h20.7c14.3,0,25.9-11.6,25.9-25.9V78.1C190.7,63.8,179,52.2,164.7,52.2z
                       M174.2,111.4c0,5.2-4.3,9.5-9.5,9.5h-20.7V68.6h20.7c5.2,0,9.5,4.3,9.5,9.5V111.4z`
        }, null, -1)),
        nne = [tne],
        rne = {
            key: 2,
            viewBox: "0 0 200 200"
        },
        ine = au(() => Y("path", {
            d: `M145.5,184.5H55.5c-4.1,0-7.5-3.4-7.5-7.5V95.2H29.6c-3.3,0-6.2-2.1-7.2-5.2L10,50.5c-1.2-3.7,0.7-7.7,4.3-9.2
                       L72.5,17c1.8-0.7,3.8-0.8,5.6-0.1c0.1,0,6.3,15.1,22.4,15.1S122.7,17,122.9,17c1.8-0.7,3.8-0.7,5.6,0.1l58.2,24.2
                       c3.6,1.5,5.4,5.5,4.3,9.2L178.5,90c-1,3.1-3.9,5.2-7.2,5.2H153V177C153,181.2,149.7,184.5,145.5,184.5z`
        }, null, -1)),
        sne = [ine],
        ane = {
            key: 0,
            class: "confirm"
        },
        one = {
            class: "contain"
        };

    function cne(e, t, n, r, s, o) {
        return e.config && e.artifact ? (z(), Q("div", {
            key: 0,
            class: Ye(["past-game", {
                managing: e.isManaging,
                confirming: e.showConfirm
            }])
        }, [Y("a", {
            class: "card",
            href: e.artifact.url,
            target: "_blank",
            onClick: t[2] || (t[2] = (...c) => e.onClick && e.onClick(...c))
        }, [Y("div", {
            class: Ye(["image", e.imageClasses])
        }, [e.hasPreviews ? (z(), Q("img", {
            key: 0,
            ref: "image",
            src: e.imageSrc,
            alt: e.artifact.gameName,
            onError: t[0] || (t[0] = (...c) => e.onImageError && e.onImageError(...c)),
            onLoad: t[1] || (t[1] = (...c) => e.onImageLoad && e.onImageLoad(...c))
        }, null, 40, jte)) : Ae("", !0)], 2), Y("p", Hte, [Bn(Ce(e.cta) + " ", 1), Kte]), Y("div", Vte, [Y("p", Yte, Ce(e.name), 1), Y("p", qte, [Y("span", null, Ce(e.$t("PAST_GAME.PLAYED_ON")), 1), Bn(Ce(e.artifact.date), 1)])]), !e.viewed && !e.artifact.viewed ? (z(), Q("p", zte, Ce(e.$t("PAST_GAME.NEW")), 1)) : Ae("", !0)], 8, Wte), e.config && e.config.shopItems && e.config.shopItems.length ? (z(), Q("div", Xte, [(z(!0), Q(ut, null, Ar(e.config.shopItems, c => (z(), Q("div", {
            key: c,
            class: "item"
        }, [c === "cards" ? (z(), Q("svg", Jte, Zte)) : c === "mugs" ? (z(), Q("svg", ene, nne)) : c === "shirts" ? (z(), Q("svg", rne, sne)) : Ae("", !0)]))), 128))])) : Ae("", !0), ft(To, {
            name: "fade-transition"
        }, {
            default: Kr(() => [e.showConfirm ? (z(), Q("div", ane, [Y("div", one, [Y("p", null, [Y("span", null, Ce(e.$t("REMOVE.TITLE")), 1), Bn(" " + Ce(e.$t("REMOVE.DESCRIPTION")), 1)]), Y("button", {
                class: "confirm-yes",
                onClick: t[3] || (t[3] = c => e.$emit("removeWasClicked", e.index))
            }, Ce(e.$t("ACTION.REMOVE")), 1), Y("button", {
                class: "confirm-no",
                onClick: t[4] || (t[4] = (...c) => e.onCancelClick && e.onCancelClick(...c))
            }, Ce(e.$t("ACTION.CANCEL")), 1)])])) : Ae("", !0)]),
            _: 1
        })], 2)) : Ae("", !0)
    }
    const Cw = yt(Gte, [
            ["render", cne],
            ["__scopeId", "data-v-ef37839b"]
        ]),
        lne = ze({
            components: {
                PastGame: Cw
            },
            props: {
                recentGames: {
                    type: Array,
                    default: () => []
                }
            },
            emits: ["pastGamesWasClicked"],
            methods: {
                onPastGamesClick() {
                    this.$emit("pastGamesWasClicked")
                }
            }
        }),
        une = {
            key: 0,
            class: "recent"
        },
        fne = {
            class: "constrain"
        },
        dne = {
            class: "top-items"
        };

    function hne(e, t, n, r, s, o) {
        const c = Qt("PastGame");
        return e.recentGames.length ? (z(), Q("div", une, [Y("div", fne, [Y("div", dne, [Y("h3", null, Ce(e.$t("RECENT_GAMES.TITLE")), 1), Y("button", {
            class: "view-all",
            onClick: t[0] || (t[0] = Bt((...u) => e.onPastGamesClick && e.onPastGamesClick(...u), ["prevent"]))
        }, Ce(e.$t("RECENT_GAMES.VIEW_ALL.BUTTON")), 1)]), (z(!0), Q(ut, null, Ar(e.recentGames, u => (z(), nr(c, {
            key: u.url,
            class: "home",
            artifact: u,
            location: "recent_game"
        }, null, 8, ["artifact"]))), 128)), e.recentGames.length >= 3 ? (z(), Q("a", {
            key: 0,
            class: "more",
            href: "#",
            onClick: t[1] || (t[1] = Bt((...u) => e.onPastGamesClick && e.onPastGamesClick(...u), ["prevent"]))
        }, Ce(e.$t("RECENT_GAMES.VIEW_ALL.LINK")), 1)) : Ae("", !0)])])) : Ae("", !0)
    }
    const pne = yt(lne, [
        ["render", hne],
        ["__scopeId", "data-v-9c9808d1"]
    ]);
    /**
     * Vue 3 Carousel 0.1.40
     * (c) 2022
     * @license MIT
     */
    const xn = {
        itemsToShow: 1,
        itemsToScroll: 1,
        modelValue: 0,
        transition: 300,
        autoplay: 0,
        snapAlign: "center",
        wrapAround: !1,
        pauseAutoplayOnHover: !1,
        mouseDrag: !0,
        touchDrag: !0,
        dir: "ltr",
        breakpoints: void 0
    };

    function gne(e, t) {
        let n;
        return function(...r) {
            n && clearTimeout(n), n = setTimeout(() => {
                e(...r), n = null
            }, t)
        }
    }

    function mne(e, t) {
        let n;
        return function(...r) {
            const s = this;
            n || (e.apply(s, r), n = !0, setTimeout(() => n = !1, t))
        }
    }

    function vne(e) {
        var t, n, r;
        return e ? ((n = (t = e[0]) === null || t === void 0 ? void 0 : t.type) === null || n === void 0 ? void 0 : n.name) === "CarouselSlide" ? e : ((r = e[0]) === null || r === void 0 ? void 0 : r.children) || [] : []
    }

    function _ne(e, t) {
        if (e.wrapAround) return t - 1;
        switch (e.snapAlign) {
            case "start":
                return t - e.itemsToShow;
            case "end":
                return t - 1;
            case "center":
            case "center-odd":
                return t - Math.ceil(e.itemsToShow / 2);
            case "center-even":
                return t - Math.ceil(e.itemsToShow / 2);
            default:
                return 0
        }
    }

    function yne(e) {
        if (e.wrapAround) return 0;
        switch (e.snapAlign) {
            case "start":
                return 0;
            case "end":
                return e.itemsToShow - 1;
            case "center":
            case "center-odd":
                return Math.floor((e.itemsToShow - 1) / 2);
            case "center-even":
                return Math.floor((e.itemsToShow - 2) / 2);
            default:
                return 0
        }
    }

    function KE(e, t, n, r) {
        return e.wrapAround ? t : Math.min(Math.max(t, r), n)
    }

    function Ene({
        slidesBuffer: e,
        currentSlide: t,
        snapAlign: n,
        itemsToShow: r,
        wrapAround: s,
        slidesCount: o
    }) {
        let c = e.indexOf(t);
        if (c === -1 && (c = e.indexOf(Math.ceil(t))), n === "center" || n === "center-odd" ? c -= (r - 1) / 2 : n === "center-even" ? c -= (r - 2) / 2 : n === "end" && (c -= r - 1), !s) {
            const u = o - r,
                f = 0;
            c = Math.max(Math.min(c, u), f)
        }
        return c
    }
    var bne = ze({
            name: "Carousel",
            props: {
                itemsToShow: {
                    default: xn.itemsToShow,
                    type: Number
                },
                itemsToScroll: {
                    default: xn.itemsToScroll,
                    type: Number
                },
                wrapAround: {
                    default: xn.wrapAround,
                    type: Boolean
                },
                snapAlign: {
                    default: xn.snapAlign,
                    validator(e) {
                        return ["start", "end", "center", "center-even", "center-odd"].includes(e)
                    }
                },
                transition: {
                    default: xn.transition,
                    type: Number
                },
                breakpoints: {
                    default: xn.breakpoints,
                    type: Object
                },
                autoplay: {
                    default: xn.autoplay,
                    type: Number
                },
                pauseAutoplayOnHover: {
                    default: xn.pauseAutoplayOnHover,
                    type: Boolean
                },
                modelValue: {
                    default: void 0,
                    type: Number
                },
                mouseDrag: {
                    default: xn.mouseDrag,
                    type: Boolean
                },
                touchDrag: {
                    default: xn.touchDrag,
                    type: Boolean
                },
                dir: {
                    default: xn.dir,
                    validator(e) {
                        return ["rtl", "ltr"].includes(e)
                    }
                },
                settings: {
                    default () {
                        return {}
                    },
                    type: Object
                }
            },
            setup(e, {
                slots: t,
                emit: n,
                expose: r
            }) {
                var s;
                const o = et(null),
                    c = et([]),
                    u = et([]),
                    f = et(0),
                    h = et(1),
                    g = et(null),
                    y = et(null);
                let b = et({}),
                    C = Object.assign({}, xn);
                const R = dr(Object.assign({}, C)),
                    M = et((s = R.modelValue) !== null && s !== void 0 ? s : 0),
                    W = et(0),
                    I = et(0),
                    K = et(0),
                    q = et(0);
                Fr("config", R), Fr("slidesBuffer", u), Fr("slidesCount", h), Fr("currentSlide", M), Fr("maxSlide", K), Fr("minSlide", q);

                function j() {
                    const k = Object.assign(Object.assign({}, e), e.settings);
                    b = et(Object.assign({}, k.breakpoints)), C = Object.assign(Object.assign({}, k), {
                        settings: void 0,
                        breakpoints: void 0
                    }), se(C)
                }

                function G() {
                    const k = Object.keys(b.value).map(Z => Number(Z)).sort((Z, X) => +X - +Z);
                    let ae = Object.assign({}, C);
                    k.some(Z => window.matchMedia(`(min-width: ${Z}px)`).matches ? (ae = Object.assign(Object.assign({}, ae), b.value[Z]), !0) : !1), se(ae)
                }

                function se(k) {
                    for (let ae in k) R[ae] = k[ae]
                }
                const ce = gne(() => {
                    b.value && (G(), ue()), le()
                }, 16);

                function le() {
                    if (!o.value) return;
                    const k = o.value.getBoundingClientRect();
                    f.value = k.width / R.itemsToShow
                }

                function ue() {
                    h.value = Math.max(c.value.length, 1), !(h.value <= 0) && (I.value = Math.ceil((h.value - 1) / 2), K.value = _ne(R, h.value), q.value = yne(R), M.value = KE(R, M.value, K.value, q.value))
                }

                function Ie() {
                    const k = [...Array(h.value).keys()];
                    if (R.wrapAround && R.itemsToShow + 1 <= h.value) {
                        let X = (R.itemsToShow !== 1 ? Math.round((h.value - R.itemsToShow) / 2) : 0) - M.value;
                        if (R.snapAlign === "end" ? X += Math.floor(R.itemsToShow - 1) : (R.snapAlign === "center" || R.snapAlign === "center-odd") && X++, X < 0)
                            for (let N = X; N < 0; N++) k.push(Number(k.shift()));
                        else
                            for (let N = 0; N < X; N++) k.unshift(Number(k.pop()))
                    }
                    u.value = k
                }
                Cl(() => {
                    b.value && (G(), ue()), mb(() => setTimeout(le, 16)), R.autoplay && R.autoplay > 0 && Je(), window.addEventListener("resize", ce, {
                        passive: !0
                    })
                }), Al(() => {
                    y.value && clearTimeout(y.value), Ot(!1)
                });
                let be = !1;
                const fe = {
                        x: 0,
                        y: 0
                    },
                    Oe = {
                        x: 0,
                        y: 0
                    },
                    F = dr({
                        x: 0,
                        y: 0
                    }),
                    re = et(!1),
                    de = et(!1),
                    _e = () => {
                        de.value = !0
                    },
                    me = () => {
                        de.value = !1
                    };

                function Se(k) {
                    be = k.type === "touchstart", !(!be && k.button !== 0 || jt.value) && (re.value = !0, fe.x = be ? k.touches[0].clientX : k.clientX, fe.y = be ? k.touches[0].clientY : k.clientY, document.addEventListener(be ? "touchmove" : "mousemove", Me, !0), document.addEventListener(be ? "touchend" : "mouseup", Fe, !0))
                }
                const Me = mne(k => {
                    Oe.x = be ? k.touches[0].clientX : k.clientX, Oe.y = be ? k.touches[0].clientY : k.clientY;
                    const ae = Oe.x - fe.x,
                        Z = Oe.y - fe.y;
                    F.y = Z, F.x = ae
                }, 16);

                function Fe() {
                    re.value = !1;
                    const k = R.dir === "rtl" ? -1 : 1,
                        ae = Math.sign(F.x) * .4,
                        Z = Math.round(F.x / f.value + ae) * k;
                    let X = KE(R, M.value - Z, K.value, q.value);
                    if (Z) {
                        const N = H => {
                            H.stopPropagation(), window.removeEventListener("click", N, !0)
                        };
                        window.addEventListener("click", N, !0)
                    }
                    wt(X), F.x = 0, F.y = 0, document.removeEventListener(be ? "touchmove" : "mousemove", Me, !0), document.removeEventListener(be ? "touchend" : "mouseup", Fe, !0)
                }

                function Je() {
                    g.value = setInterval(() => {
                        R.pauseAutoplayOnHover && de.value || zt()
                    }, R.autoplay)
                }

                function Ot(k = !0) {
                    !g.value || (clearInterval(g.value), k && Je())
                }
                const jt = et(!1);

                function wt(k, ae = !1) {
                    if (Ot(), M.value === k || jt.value) return;
                    const Z = h.value - 1;
                    if (k > Z) return wt(k - h.value);
                    if (k < 0) return wt(k + h.value);
                    jt.value = !0, W.value = M.value, M.value = k, ae || n("update:modelValue", M.value), y.value = setTimeout(() => {
                        R.wrapAround && Ie(), jt.value = !1
                    }, R.transition)
                }

                function zt() {
                    let k = M.value + R.itemsToScroll;
                    R.wrapAround || (k = Math.min(k, K.value)), wt(k)
                }

                function it() {
                    let k = M.value - R.itemsToScroll;
                    R.wrapAround || (k = Math.max(k, q.value)), wt(k)
                }
                const mt = {
                    slideTo: wt,
                    next: zt,
                    prev: it
                };
                Fr("nav", mt);
                const st = Sn(() => Ene({
                    slidesBuffer: u.value,
                    itemsToShow: R.itemsToShow,
                    snapAlign: R.snapAlign,
                    wrapAround: Boolean(R.wrapAround),
                    currentSlide: M.value,
                    slidesCount: h.value
                }));
                Fr("slidesToScroll", st);
                const $t = Sn(() => {
                    const k = R.dir === "rtl" ? -1 : 1,
                        ae = st.value * f.value * k;
                    return {
                        transform: `translateX(${F.x-ae}px)`,
                        transition: `${jt.value?R.transition:0}ms`
                    }
                });

                function Dt() {
                    j()
                }

                function Nt() {
                    j(), G(), ue(), Ie(), le()
                }

                function m() {
                    ue(), Ie()
                }
                mi(() => Object.values(e), Nt), Dt(), p$(() => {
                    const k = h.value !== c.value.length;
                    e.modelValue !== void 0 && M.value !== e.modelValue && wt(Number(e.modelValue), !0), k && m()
                });
                const p = {
                    config: R,
                    slidesBuffer: u,
                    slidesCount: h,
                    slideWidth: f,
                    currentSlide: M,
                    maxSlide: K,
                    minSlide: q,
                    middleSlide: I
                };
                r({
                    updateBreakpointsConfigs: G,
                    updateSlidesData: ue,
                    updateSlideWidth: le,
                    updateSlidesBuffer: Ie,
                    initCarousel: Dt,
                    restartCarousel: Nt,
                    updateCarousel: m,
                    slideTo: wt,
                    next: zt,
                    prev: it,
                    nav: mt,
                    data: p
                });
                const O = t.default || t.slides,
                    x = t.addons,
                    B = dr(p);
                return () => {
                    const k = vne(O == null ? void 0 : O(B)),
                        ae = (x == null ? void 0 : x(B)) || [];
                    c.value = k, k.forEach((N, H) => N.props.index = H);
                    const Z = wr("ol", {
                            class: "carousel__track",
                            style: $t.value,
                            onMousedown: R.mouseDrag ? Se : null,
                            onTouchstart: R.touchDrag ? Se : null
                        }, k),
                        X = wr("div", {
                            class: "carousel__viewport"
                        }, Z);
                    return wr("section", {
                        ref: o,
                        class: {
                            carousel: !0,
                            "carousel--rtl": R.dir === "rtl"
                        },
                        dir: R.dir,
                        "aria-label": "Gallery",
                        onMouseenter: _e,
                        onMouseleave: me
                    }, [X, ae])
                }
            }
        }),
        Tne = ze({
            name: "CarouselSlide",
            props: {
                index: {
                    type: Number,
                    default: 1
                }
            },
            setup(e, {
                slots: t
            }) {
                const n = hn("config", dr(Object.assign({}, xn))),
                    r = hn("slidesBuffer", et([])),
                    s = hn("currentSlide", et(0)),
                    o = hn("slidesToScroll", et(0)),
                    c = et(e.index);
                n.wrapAround && (u(), mi(r, u));

                function u() {
                    c.value = r.value.indexOf(e.index)
                }
                const f = Sn(() => {
                        const C = n.itemsToShow;
                        return {
                            width: `${1/C*100}%`,
                            order: c.value.toString()
                        }
                    }),
                    h = () => e.index === s.value,
                    g = () => {
                        const C = Math.ceil(o.value),
                            R = Math.floor(o.value + n.itemsToShow);
                        return r.value.slice(C, R).includes(e.index)
                    },
                    y = () => e.index === r.value[Math.ceil(o.value) - 1],
                    b = () => e.index === r.value[Math.floor(o.value + n.itemsToShow)];
                return () => {
                    var C;
                    return wr("li", {
                        style: f.value,
                        class: {
                            carousel__slide: !0,
                            "carousel__slide--active": h(),
                            "carousel__slide--visible": g(),
                            "carousel__slide--prev": y(),
                            "carousel__slide--next": b()
                        }
                    }, (C = t.default) === null || C === void 0 ? void 0 : C.call(t))
                }
            }
        });
    const Sne = () => {
            const e = hn("maxSlide", et(1)),
                t = hn("minSlide", et(1)),
                n = hn("currentSlide", et(1)),
                r = hn("nav", {});

            function s(u) {
                r.slideTo(u)
            }
            const o = u => {
                    const f = n.value;
                    return f === u || f > e.value && u >= e.value || f < t.value && u <= t.value
                },
                c = [];
            for (let u = t.value; u < e.value + 1; u++) {
                const f = wr("button", {
                        type: "button",
                        class: {
                            "carousel__pagination-button": !0,
                            "carousel__pagination-button--active": o(u)
                        },
                        "aria-label": `Navigate to slide ${u+1}`,
                        onClick: () => s(u)
                    }),
                    h = wr("li", {
                        class: "carousel__pagination-item",
                        key: u
                    }, f);
                c.push(h)
            }
            return wr("ol", {
                class: "carousel__pagination"
            }, c)
        },
        One = ze({
            components: {
                Carousel: bne,
                Pagination: Sne,
                Slide: Tne
            },
            data() {
                return {
                    isLoading: !1,
                    banners: [],
                    settings: {
                        transition: 500,
                        wrapAround: !0,
                        itemsToShow: 1.5,
                        autoplay: 5e3
                    }
                }
            },
            mounted() {
                this.load()
            },
            methods: {
                async load() {
                    var e;
                    try {
                        const n = await (await fetch("https://s3.amazonaws.com/static.jackboxgames.com/banners.json")).json(),
                            r = (e = n == null ? void 0 : n.bannerAds) != null ? e : [];
                        this.banners = r.filter(this.isValidBanner.bind(this)).map(s => ({
                            url: s.href,
                            image: s.src,
                            text: s.text
                        })), this.banners.length || this.showDefault()
                    } catch (t) {
                        this.showDefault(), console.warn("[SlideBanner] Could not load or parse banner data", t)
                    } finally {
                        this.isLoading = !1
                    }
                },
                showDefault() {
                    this.banners = [{
                        url: "https://www.jackboxgames.com/party-pack-seven/?utm_source=jbgtv&utm_medium=jbgtvpp7&utm_campaign=jbgtvpp7",
                        image: "https://s3.amazonaws.com/static.jackboxgames.com/banners/PP7.png",
                        text: "AVAILABLE NOW!"
                    }]
                },
                isValidBanner(e) {
                    var n, r;
                    const t = new Date;
                    if (De.isSupported && e.tags) {
                        const s = (n = e.tags) != null ? n : [],
                            o = JSON.parse((r = De.get("tags")) != null ? r : "[]");
                        if (!s.every(u => o.includes(u))) return !1
                    }
                    if (e.start) {
                        const s = new Date(e.start);
                        if (t < s) return !1
                    }
                    if (e.end) {
                        const s = new Date(e.end);
                        if (t > s) return !1
                    }
                    return !0
                },
                onClick(e) {
                    window.open(e.url, "_blank"), Si.bannerClick(e.url, "connect")
                }
            }
        }),
        wne = {
            class: "slide-banner"
        },
        Cne = {
            key: 0,
            class: "loading"
        },
        Ane = ["onClick"],
        Ine = ["src"];

    function Rne(e, t, n, r, s, o) {
        const c = Qt("Slide"),
            u = Qt("Pagination"),
            f = Qt("Carousel");
        return z(), Q("div", wne, [e.isLoading ? (z(), Q("div", Cne, Ce(e.$t("LOADING")), 1)) : Ae("", !0), !e.isLoading && e.banners.length ? (z(), nr(f, hL(Mh({
            key: 1
        }, e.settings)), {
            addons: Kr(() => [ft(u, {
                class: "dots"
            })]),
            default: Kr(() => [(z(!0), Q(ut, null, Ar(e.banners, h => (z(), nr(c, {
                key: h.url,
                class: "slide"
            }, {
                default: Kr(() => [Y("button", {
                    onClick: g => e.onClick(h)
                }, [Y("img", {
                    src: h.image,
                    draggable: "false",
                    alt: "Advert"
                }, null, 8, Ine), Y("p", null, Ce(h.text), 1)], 8, Ane)]),
                _: 2
            }, 1024))), 128))]),
            _: 1
        }, 16)) : Ae("", !0)])
    }
    const Nne = yt(One, [
            ["render", Rne],
            ["__scopeId", "data-v-08558975"]
        ]),
        Lne = ze({
            data() {
                return {
                    value: De.get("preference:theme") || "device"
                }
            },
            watch: {
                value(e) {
                    De.set("preference:theme", e), window.dispatchEvent(new CustomEvent("themedidchange"))
                }
            }
        }),
        $ne = {
            class: "appearance"
        },
        Pne = {
            for: "appearance"
        },
        kne = {
            id: "appearance"
        },
        Dne = Y$('<svg viewBox="0 0 340 85" data-v-727b0bbe><rect class="frame" x="87.5" width="165" height="85" rx="42.5" vector-effect="non-scaling-stroke" data-v-727b0bbe></rect><circle class="indicator" cx="170" cy="42.5" r="29.8" data-v-727b0bbe></circle><path class="celestial moon" d="M314.64,14.79A29.36,29.36,0,0,1,275,54.4a29.37,29.37,0,1,0,39.6-39.61Z" vector-effect="non-scaling-stroke" data-v-727b0bbe></path><circle class="celestial sun" cx="32.19" cy="42.72" r="13.05" vector-effect="non-scaling-stroke" data-v-727b0bbe></circle><line x1="32.19" y1="10.53" x2="32.19" y2="21.59" vector-effect="non-scaling-stroke" data-v-727b0bbe></line><line x1="32.19" y1="63.85" x2="32.19" y2="74.91" vector-effect="non-scaling-stroke" data-v-727b0bbe></line><line x1="0" y1="42.72" x2="11.06" y2="42.72" vector-effect="non-scaling-stroke" data-v-727b0bbe></line><line x1="53.32" y1="42.72" x2="64.38" y2="42.72" vector-effect="non-scaling-stroke" data-v-727b0bbe></line><line x1="12.01" y1="22.55" x2="17.25" y2="27.78" vector-effect="non-scaling-stroke" data-v-727b0bbe></line><line x1="47.13" y1="57.66" x2="52.36" y2="62.89" vector-effect="non-scaling-stroke" data-v-727b0bbe></line><line x1="12.01" y1="62.89" x2="17.25" y2="57.66" vector-effect="non-scaling-stroke" data-v-727b0bbe></line><line x1="47.13" y1="27.78" x2="52.36" y2="22.55" vector-effect="non-scaling-stroke" data-v-727b0bbe></line></svg>', 1),
        Mne = ["aria-label"],
        xne = ["aria-label"];

    function Une(e, t, n, r, s, o) {
        const c = gn("t");
        return z(), Q("li", $ne, [je(Y("label", Pne, null, 512), [
            [c, "MENU.APPEARANCE"]
        ]), Y("fieldset", kne, [Dne, je(Y("input", {
            id: "light",
            "onUpdate:modelValue": t[0] || (t[0] = u => e.value = u),
            type: "radio",
            name: "theme",
            value: "light",
            "aria-label": e.$t("MENU.LIGHT")
        }, null, 8, Mne), [
            [n_, e.value]
        ]), je(Y("input", {
            id: "dark",
            "onUpdate:modelValue": t[1] || (t[1] = u => e.value = u),
            type: "radio",
            name: "theme",
            value: "dark",
            "aria-label": e.$t("MENU.DARK")
        }, null, 8, xne), [
            [n_, e.value]
        ])])])
    }
    const Fne = yt(Lne, [
            ["render", Une],
            ["__scopeId", "data-v-727b0bbe"]
        ]),
        Bne = ze({
            data() {
                const e = Object.keys(window.tv.manifest.branches);
                let t = "main";
                return e.includes("** hmr **") ? t = "** hmr **" : e.includes("** dist **") && (t = "** dist **"), {
                    branch: De.get("preference:branch") || t,
                    branchHasChanged: !1
                }
            },
            computed: {
                branchOptions() {
                    return Object.keys(window.tv.manifest.branches)
                }
            },
            watch: {
                branch(e, t) {
                    t && t !== e && (De.set("preference:branch", e), this.branchHasChanged = !0)
                }
            },
            methods: {
                reload() {
                    window.location.reload()
                }
            }
        }),
        Gne = {
            key: 1,
            for: "branch"
        },
        Wne = {
            class: "select"
        },
        jne = ["value"];

    function Hne(e, t, n, r, s, o) {
        return z(), Q("li", null, [e.branchHasChanged ? (z(), Q("label", {
            key: 0,
            for: "branch",
            class: "changed",
            onClick: t[0] || (t[0] = (...c) => e.reload && e.reload(...c)),
            onKeyup: t[1] || (t[1] = Hs((...c) => e.reload && e.reload(...c), ["enter"]))
        }, Ce(e.$t("BRANCH.REFRESH_REQUIRED")), 33)) : (z(), Q("label", Gne, Ce(e.$t("BRANCH.PREFERRED")), 1)), Y("div", Wne, [je(Y("select", {
            id: "branch",
            "onUpdate:modelValue": t[2] || (t[2] = c => e.branch = c)
        }, [(z(!0), Q(ut, null, Ar(e.branchOptions, c => (z(), Q("option", {
            key: c,
            value: c
        }, Ce(c), 9, jne))), 128))], 512), [
            [Zb, e.branch]
        ])])])
    }
    const Kne = yt(Bne, [
            ["render", Hne],
            ["__scopeId", "data-v-70c01ceb"]
        ]),
        Vne = ze({
            components: {
                AppearanceRadio: Fne,
                PreferredBranch: Kne
            },
            props: {
                hasUnseenGames: Boolean,
                twitch: Object
            },
            emits: ["pastGameWasClicked", "twitchLoginWasClicked", "twitchLogoutWasClicked"],
            computed: {
                shouldShowPreferredBranch() {
                    return window.tv.manifest.environment !== "production"
                },
                version() {
                    return window.tv.manifest.loader.version
                },
                isTwitchAuthenticated() {
                    return this.twitch.user !== void 0
                }
            },
            methods: {
                onPastGamesClick() {
                    this.$emit("pastGameWasClicked")
                },
                onTwitchLoginClick() {
                    this.$emit("twitchLoginWasClicked")
                },
                onTwitchLogoutClick() {
                    this.$emit("twitchLogoutWasClicked")
                },
                onLinkClick(e) {
                    Si.externalLinkClick(e, "hamburger")
                }
            }
        }),
        Yne = {
            class: "nav"
        },
        qne = {
            key: 0,
            class: "twitch"
        },
        zne = {
            href: "#"
        },
        Xne = {
            class: "moderator"
        },
        Jne = {
            href: "/moderator"
        },
        Qne = {
            key: 0,
            class: "indicator"
        },
        Zne = {
            class: "social"
        },
        ere = {
            class: "version"
        };

    function tre(e, t, n, r, s, o) {
        const c = Qt("AppearanceRadio"),
            u = Qt("PreferredBranch");
        return z(), Q("nav", Yne, [Y("ul", null, [e.isTwitchAuthenticated ? (z(), Q("li", {
            key: 1,
            class: "twitch",
            onKeyup: t[2] || (t[2] = Hs((...f) => e.onTwitchLogoutClick && e.onTwitchLogoutClick(...f), ["enter"])),
            onClick: t[3] || (t[3] = Bt((...f) => e.onTwitchLogoutClick && e.onTwitchLogoutClick(...f), ["prevent"]))
        }, [Y("a", zne, Ce(e.$t("MENU.LOGOUT")), 1)], 32)) : (z(), Q("li", qne, [Y("a", {
            onKeyup: t[0] || (t[0] = Hs((...f) => e.onTwitchLoginClick && e.onTwitchLoginClick(...f), ["enter"])),
            onClick: t[1] || (t[1] = Bt((...f) => e.onTwitchLoginClick && e.onTwitchLoginClick(...f), ["prevent"]))
        }, Ce(e.$t("MENU.TWITCH")), 33)])), Y("li", Xne, [Y("a", Jne, Ce(e.$t("MENU.MODERATOR")), 1)]), Y("li", null, [Y("a", {
            href: "http://help.jackboxgames.com",
            target: "_blank",
            onClick: t[4] || (t[4] = f => e.onLinkClick("help"))
        }, Ce(e.$t("MENU.HELP")), 1)]), Y("li", null, [Y("a", {
            href: "https://shop.jackboxgames.com",
            target: "_blank",
            onClick: t[5] || (t[5] = f => e.onLinkClick("merch"))
        }, Ce(e.$t("MENU.MERCH")), 1)]), Y("li", null, [Y("a", {
            onKeyup: t[6] || (t[6] = Hs((...f) => e.onPastGamesClick && e.onPastGamesClick(...f), ["enter"])),
            onClick: t[7] || (t[7] = Bt((...f) => e.onPastGamesClick && e.onPastGamesClick(...f), ["prevent"]))
        }, [Bn(Ce(e.$t("MENU.PAST_GAMES")) + " ", 1), e.hasUnseenGames ? (z(), Q("div", Qne)) : Ae("", !0)], 32)]), ft(c), e.shouldShowPreferredBranch ? (z(), nr(u, {
            key: 2
        })) : Ae("", !0), Y("li", Zne, [Y("a", {
            class: "facebook",
            "aria-label": "facebook",
            target: "_blank",
            href: "https://www.facebook.com/JackboxGames",
            onClick: t[8] || (t[8] = f => e.onLinkClick("https://www.facebook.com/JackboxGames"))
        }), Y("a", {
            class: "twitter",
            "aria-label": "twitter",
            target: "_blank",
            href: "https://twitter.com/jackboxgames",
            onClick: t[9] || (t[9] = f => e.onLinkClick("https://twitter.com/jackboxgames"))
        }), Y("a", {
            class: "instagram",
            "aria-label": "instagram",
            target: "_blank",
            href: "https://www.instagram.com/playjackboxgames",
            onClick: t[10] || (t[10] = f => e.onLinkClick("https://www.instagram.com/playjackboxgames"))
        })]), Y("li", ere, Ce(e.version), 1)])])
    }
    const nre = yt(Vne, [
            ["render", tre],
            ["__scopeId", "data-v-7c1b89a9"]
        ]),
        rre = ze({
            components: {
                PastGame: Cw
            },
            props: {
                artifacts: Object
            },
            data() {
                return {
                    isManaging: !1
                }
            },
            methods: {
                onManageClick() {
                    this.isManaging = !this.isManaging
                },
                onRemoveClick(e) {
                    this.artifacts.remove(e)
                }
            }
        }),
        ire = {
            key: 0,
            class: "past-games"
        },
        sre = {
            class: "constrain"
        },
        are = {
            key: 0,
            class: "top-items"
        },
        ore = {
            key: 1,
            class: "empty"
        };

    function cre(e, t, n, r, s, o) {
        const c = Qt("PastGame");
        return e.artifacts ? (z(), Q("div", ire, [Y("div", sre, [e.artifacts.artifacts.length ? (z(), Q("div", are, [Y("h3", null, Ce(e.$t("PAST_GAMES.TITLE")), 1), Y("button", {
            class: "manage",
            onClick: t[0] || (t[0] = (...u) => e.onManageClick && e.onManageClick(...u))
        }, Ce(e.isManaging ? e.$t("ACTION.DONE") : e.$t("PAST_GAMES.MANAGE")), 1)])) : (z(), Q("p", ore, Ce(e.$t("PAST_GAMES.EMPTY")), 1)), ft(Qb, {
            name: "list-transition"
        }, {
            default: Kr(() => [(z(!0), Q(ut, null, Ar(e.artifacts.artifacts, (u, f) => (z(), nr(c, {
                key: u.url,
                artifact: u,
                index: f,
                "is-managing": e.isManaging,
                location: "past_game",
                onRemoveClick: e.onRemoveClick
            }, null, 8, ["artifact", "index", "is-managing", "onRemoveClick"]))), 128))]),
            _: 1
        })])])) : Ae("", !0)
    }
    const lre = yt(rre, [
            ["render", cre],
            ["__scopeId", "data-v-d14b28d3"]
        ]),
        ure = ze({
            components: {
                Menu: nre,
                PastGames: lre
            },
            props: {
                artifacts: Object,
                twitch: Object
            },
            emits: ["twitchLoginWasClicked", "twitchLogoutWasClicked"],
            data() {
                return {
                    openedTo: null
                }
            },
            computed: {
                hasUnseenGames() {
                    return this.artifacts.artifacts.length ? this.artifacts.hasUnviewed : !1
                }
            },
            methods: {
                onHamburgerClick() {
                    this.openedTo = this.openedTo ? null : "menu"
                },
                onPastGamesClick() {
                    this.openedTo = "pastGames"
                },
                onTwitchLoginClick() {
                    this.$emit("twitchLoginWasClicked")
                },
                onTwitchLogoutClick() {
                    this.$emit("twitchLogoutWasClicked"), this.openedTo = null
                }
            }
        }),
        fre = e => (da("data-v-0c67992c"), e = e(), ha(), e),
        dre = {
            key: 0,
            class: "top-bar"
        },
        hre = {
            class: "constrain"
        },
        pre = fre(() => Y("div", {
            class: "logo"
        }, null, -1)),
        gre = {
            key: 0,
            class: "indicator"
        };

    function mre(e, t, n, r, s, o) {
        const c = Qt("PastGames"),
            u = Qt("Menu");
        return e.twitch ? (z(), Q("div", dre, [Y("header", {
            class: "header",
            onKeyup: t[0] || (t[0] = Hs((...f) => e.onHamburgerClick && e.onHamburgerClick(...f), ["enter"])),
            onClick: t[1] || (t[1] = (...f) => e.onHamburgerClick && e.onHamburgerClick(...f))
        }, [Y("div", hre, [pre, Y("div", {
            class: Ye(["hamburger", {
                close: e.openedTo !== null
            }])
        }, null, 2), !e.openedTo && e.hasUnseenGames ? (z(), Q("div", gre)) : Ae("", !0), e.twitch.user ? (z(), Q("div", {
            key: 1,
            class: "avatar",
            style: ca(`background-image: url(${e.twitch.user.profile_image_url});`)
        }, null, 4)) : Ae("", !0)])], 32), ft(To, {
            name: "open-transition"
        }, {
            default: Kr(() => [e.openedTo ? (z(), nr(Qb, {
                key: 0,
                tag: "div",
                class: "screen-container",
                name: "screen-transition"
            }, {
                default: Kr(() => [e.openedTo === "pastGames" ? (z(), nr(c, {
                    key: "pastGames",
                    class: "screen",
                    artifacts: e.artifacts
                }, null, 8, ["artifacts"])) : Ae("", !0), e.openedTo === "menu" ? (z(), nr(u, {
                    key: "menu",
                    class: "screen",
                    "has-unseen-games": e.hasUnseenGames,
                    twitch: e.twitch,
                    onPastGameWasClicked: e.onPastGamesClick,
                    onTwitchLoginWasClicked: e.onTwitchLoginClick,
                    onTwitchLogoutWasClicked: e.onTwitchLogoutClick
                }, null, 8, ["has-unseen-games", "twitch", "onPastGameWasClicked", "onTwitchLoginWasClicked", "onTwitchLogoutWasClicked"])) : Ae("", !0)]),
                _: 1
            })) : Ae("", !0)]),
            _: 1
        })])) : Ae("", !0)
    }
    const vre = yt(ure, [
            ["render", mre],
            ["__scopeId", "data-v-0c67992c"]
        ]),
        _re = ze({
            name: "@connect",
            components: {
                Connect: Bte,
                TopBar: vre,
                RecentGames: pne,
                SlideBanner: Nne
            },
            props: {
                options: Object
            },
            setup() {
                return {
                    fatalError: hn($o.fatal.error)
                }
            },
            bb: {
                tos: (e, t) => `<a class="tosLink" href="https://jackboxgames.com/terms-of-service/" target="_blank">${t}</a>`
            },
            data() {
                return {
                    artifacts: new na,
                    theme: De.get("preference:theme") || "device",
                    twitch: new eH(this.options.match.hashString)
                }
            },
            computed: {
                classes() {
                    const e = [`locale-${this.$i18n.locale}`, `theme-${this.theme}`];
                    return this.recentGames.length && e.push("has-recent"), e
                },
                recentGames() {
                    var e, t;
                    return (t = (e = this.artifacts) == null ? void 0 : e.artifacts) == null ? void 0 : t.slice(0, 3)
                },
                shouldShowFatal() {
                    var e, t;
                    return (t = (e = this.fatalError) == null ? void 0 : e.hasCrashed) != null ? t : !1
                }
            },
            beforeMount() {
                this.setupTwitch(), window.addEventListener("themedidchange", this.onThemeChange)
            },
            beforeUnmount() {
                window.removeEventListener("themedidchange", this.onThemeChange)
            },
            methods: {
                setupTwitch() {
                    this.twitch.prepare()
                },
                onTwitchLoginClick() {
                    this.twitch.login()
                },
                onTwitchLogoutClick() {
                    this.twitch.logout()
                },
                onPastGamesClick() {
                    const e = this.$refs.topBar;
                    e.$data.openedTo = "pastGames"
                },
                onThemeChange(e) {
                    this.theme = De.get("preference:theme") || "device"
                }
            }
        }),
        yre = {
            class: "form"
        },
        Ere = {
            class: "constrain"
        },
        bre = {
            key: 0,
            class: "bottom-logo",
            target: "_blank",
            href: "https://www.jackboxgames.com/?utm_source=jackboxtv&utm_medium=logo&utm_campaign=jackboxgames"
        };

    function Tre(e, t, n, r, s, o) {
        const c = Qt("Fatal"),
            u = Qt("TopBar"),
            f = Qt("Connect"),
            h = Qt("SlideBanner"),
            g = Qt("RecentGames"),
            y = Qt("Modal");
        return e.shouldShowFatal ? (z(), nr(c, {
            key: 0
        })) : (z(), Q("div", {
            key: 1,
            class: Ye(["jbg schemable sign-in", e.classes])
        }, [ft(u, {
            ref: "topBar",
            twitch: e.twitch,
            artifacts: e.artifacts,
            onTwitchLoginWasClicked: e.onTwitchLoginClick,
            onTwitchLogoutWasClicked: e.onTwitchLogoutClick
        }, null, 8, ["twitch", "artifacts", "onTwitchLoginWasClicked", "onTwitchLogoutWasClicked"]), Y("div", yre, [Y("div", Ere, [ft(f, {
            match: e.options.match,
            "twitch-user": e.twitch.user
        }, null, 8, ["match", "twitch-user"]), ft(h), e.recentGames.length ? Ae("", !0) : (z(), Q("a", bre, Ce(e.$t("HOMEPAGE_LINK")), 1))])]), ft(g, {
            "recent-games": e.recentGames,
            onPastGamesWasClicked: e.onPastGamesClick
        }, null, 8, ["recent-games", "onPastGamesWasClicked"]), ft(y)], 2))
    }
    const Sre = yt(_re, [
        ["render", Tre],
        ["__scopeId", "data-v-74f892c9"]
    ]);
    window.tv.register({
        mount: e => {
            var s, o;
            let t = xP(Sre, {
                options: e
            });
            t.config.unwrapInjectedRef = !0;
            let n;
            (o = (s = e.match) == null ? void 0 : s.params) != null && o.locale && (n = e.match.params.locale), Ks.set(n);
            const r = iD({
                fallbackLocale: "en",
                locale: Ks.locale,
                messages: Ks.mergeMessages(p8, ote)
            });
            return t.use(Oq), t.use(pZ), t.use(r), t.use(HZ, {
                i18n: r
            }), t.use(hee), t.mount("#app"), () => {
                t.unmount(), t = null
            }
        },
        info: e => ({
            tag: "@connect",
            version: e.version,
            type: e.type,
            branch: e.branch
        })
    })
});
export default Ore();
//# sourceMappingURL=a77d459e.js.map