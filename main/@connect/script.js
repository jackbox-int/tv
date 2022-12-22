var nL = Object.defineProperty;
var rL = (e, t, n) => t in e ? nL(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n;
var iL = (e, t) => () => (t || e((t = {
    exports: {}
}).exports, t), t.exports);
var Re = (e, t, n) => (rL(e, typeof t != "symbol" ? t + "" : t, n), n);
var Zre = iL((tie, AA) => {
    (function() {
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
    })();

    function dh(e, t) {
        const n = Object.create(null),
            r = e.split(",");
        for (let s = 0; s < r.length; s++) n[r[s]] = !0;
        return t ? s => !!n[s.toLowerCase()] : s => !!n[s]
    }
    const sL = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
        aL = dh(sL);

    function Hy(e) {
        return !!e || e === ""
    }

    function la(e) {
        if (Le(e)) {
            const t = {};
            for (let n = 0; n < e.length; n++) {
                const r = e[n],
                    s = jt(r) ? lL(r) : la(r);
                if (s)
                    for (const o in s) t[o] = s[o]
            }
            return t
        } else {
            if (jt(e)) return e;
            if (yt(e)) return e
        }
    }
    const oL = /;(?![^(]*\))/g,
        cL = /:(.+)/;

    function lL(e) {
        const t = {};
        return e.split(oL).forEach(n => {
            if (n) {
                const r = n.split(cL);
                r.length > 1 && (t[r[0].trim()] = r[1].trim())
            }
        }), t
    }

    function Ye(e) {
        let t = "";
        if (jt(e)) t = e;
        else if (Le(e))
            for (let n = 0; n < e.length; n++) {
                const r = Ye(e[n]);
                r && (t += r + " ")
            } else if (yt(e))
                for (const n in e) e[n] && (t += n + " ");
        return t.trim()
    }

    function uL(e) {
        if (!e) return null;
        let {
            class: t,
            style: n
        } = e;
        return t && !jt(t) && (e.class = Ye(t)), n && (e.style = la(n)), e
    }

    function fL(e, t) {
        if (e.length !== t.length) return !1;
        let n = !0;
        for (let r = 0; n && r < e.length; r++) n = ds(e[r], t[r]);
        return n
    }

    function ds(e, t) {
        if (e === t) return !0;
        let n = vv(e),
            r = vv(t);
        if (n || r) return n && r ? e.getTime() === t.getTime() : !1;
        if (n = no(e), r = no(t), n || r) return e === t;
        if (n = Le(e), r = Le(t), n || r) return n && r ? fL(e, t) : !1;
        if (n = yt(e), r = yt(t), n || r) {
            if (!n || !r) return !1;
            const s = Object.keys(e).length,
                o = Object.keys(t).length;
            if (s !== o) return !1;
            for (const c in e) {
                const u = e.hasOwnProperty(c),
                    f = t.hasOwnProperty(c);
                if (u && !f || !u && f || !ds(e[c], t[c])) return !1
            }
        }
        return String(e) === String(t)
    }

    function hh(e, t) {
        return e.findIndex(n => ds(n, t))
    }
    const Ie = e => jt(e) ? e : e == null ? "" : Le(e) || yt(e) && (e.toString === Yy || !Ve(e.toString)) ? JSON.stringify(e, Vy, 2) : String(e),
        Vy = (e, t) => t && t.__v_isRef ? Vy(e, t.value) : Ws(t) ? {
            [`Map(${t.size})`]: [...t.entries()].reduce((n, [r, s]) => (n[`${r} =>`] = s, n), {})
        } : ua(t) ? {
            [`Set(${t.size})`]: [...t.values()]
        } : yt(t) && !Le(t) && !qy(t) ? String(t) : t,
        _t = {},
        Gs = [],
        fr = () => {},
        dL = () => !1,
        hL = /^on[^a-z]/,
        gl = e => hL.test(e),
        ph = e => e.startsWith("onUpdate:"),
        en = Object.assign,
        gh = (e, t) => {
            const n = e.indexOf(t);
            n > -1 && e.splice(n, 1)
        },
        pL = Object.prototype.hasOwnProperty,
        rt = (e, t) => pL.call(e, t),
        Le = Array.isArray,
        Ws = e => _o(e) === "[object Map]",
        ua = e => _o(e) === "[object Set]",
        vv = e => _o(e) === "[object Date]",
        Ve = e => typeof e == "function",
        jt = e => typeof e == "string",
        no = e => typeof e == "symbol",
        yt = e => e !== null && typeof e == "object",
        Ky = e => yt(e) && Ve(e.then) && Ve(e.catch),
        Yy = Object.prototype.toString,
        _o = e => Yy.call(e),
        gL = e => _o(e).slice(8, -1),
        qy = e => _o(e) === "[object Object]",
        mh = e => jt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
        Wc = dh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
        ml = e => {
            const t = Object.create(null);
            return n => t[n] || (t[n] = e(n))
        },
        mL = /-(\w)/g,
        wr = ml(e => e.replace(mL, (t, n) => n ? n.toUpperCase() : "")),
        vL = /\B([A-Z])/g,
        hs = ml(e => e.replace(vL, "-$1").toLowerCase()),
        vl = ml(e => e.charAt(0).toUpperCase() + e.slice(1)),
        vf = ml(e => e ? `on${vl(e)}` : ""),
        ro = (e, t) => !Object.is(e, t),
        jc = (e, t) => {
            for (let n = 0; n < e.length; n++) e[n](t)
        },
        Qc = (e, t, n) => {
            Object.defineProperty(e, t, {
                configurable: !0,
                enumerable: !1,
                value: n
            })
        },
        io = e => {
            const t = parseFloat(e);
            return isNaN(t) ? e : t
        };
    let Ev;
    const EL = () => Ev || (Ev = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
    let br;
    class zy {
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

    function _L(e) {
        return new zy(e)
    }

    function yL(e, t = br) {
        t && t.active && t.effects.push(e)
    }
    const vh = e => {
            const t = new Set(e);
            return t.w = 0, t.n = 0, t
        },
        Xy = e => (e.w & Ei) > 0,
        Jy = e => (e.n & Ei) > 0,
        bL = ({
            deps: e
        }) => {
            if (e.length)
                for (let t = 0; t < e.length; t++) e[t].w |= Ei
        },
        TL = e => {
            const {
                deps: t
            } = e;
            if (t.length) {
                let n = 0;
                for (let r = 0; r < t.length; r++) {
                    const s = t[r];
                    Xy(s) && !Jy(s) ? s.delete(e) : t[n++] = s, s.w &= ~Ei, s.n &= ~Ei
                }
                t.length = n
            }
        },
        ud = new WeakMap;
    let Va = 0,
        Ei = 1;
    const fd = 30;
    let lr;
    const ss = Symbol(""),
        dd = Symbol("");
    class Eh {
        constructor(t, n = null, r) {
            this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, yL(this, r)
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
                return this.parent = lr, lr = this, pi = !0, Ei = 1 << ++Va, Va <= fd ? bL(this) : _v(this), this.fn()
            } finally {
                Va <= fd && TL(this), Ei = 1 << --Va, lr = this.parent, pi = n, this.parent = void 0, this.deferStop && this.stop()
            }
        }
        stop() {
            lr === this ? this.deferStop = !0 : this.active && (_v(this), this.onStop && this.onStop(), this.active = !1)
        }
    }

    function _v(e) {
        const {
            deps: t
        } = e;
        if (t.length) {
            for (let n = 0; n < t.length; n++) t[n].delete(e);
            t.length = 0
        }
    }
    let pi = !0;
    const Qy = [];

    function fa() {
        Qy.push(pi), pi = !1
    }

    function da() {
        const e = Qy.pop();
        pi = e === void 0 ? !0 : e
    }

    function Wn(e, t, n) {
        if (pi && lr) {
            let r = ud.get(e);
            r || ud.set(e, r = new Map);
            let s = r.get(n);
            s || r.set(n, s = vh()), Zy(s)
        }
    }

    function Zy(e, t) {
        let n = !1;
        Va <= fd ? Jy(e) || (e.n |= Ei, n = !Xy(e)) : n = !e.has(lr), n && (e.add(lr), lr.deps.push(e))
    }

    function Yr(e, t, n, r, s, o) {
        const c = ud.get(e);
        if (!c) return;
        let u = [];
        if (t === "clear") u = [...c.values()];
        else if (n === "length" && Le(e)) c.forEach((f, d) => {
            (d === "length" || d >= r) && u.push(f)
        });
        else switch (n !== void 0 && u.push(c.get(n)), t) {
            case "add":
                Le(e) ? mh(n) && u.push(c.get("length")) : (u.push(c.get(ss)), Ws(e) && u.push(c.get(dd)));
                break;
            case "delete":
                Le(e) || (u.push(c.get(ss)), Ws(e) && u.push(c.get(dd)));
                break;
            case "set":
                Ws(e) && u.push(c.get(ss));
                break
        }
        if (u.length === 1) u[0] && hd(u[0]);
        else {
            const f = [];
            for (const d of u) d && f.push(...d);
            hd(vh(f))
        }
    }

    function hd(e, t) {
        const n = Le(e) ? e : [...e];
        for (const r of n) r.computed && yv(r);
        for (const r of n) r.computed || yv(r)
    }

    function yv(e, t) {
        (e !== lr || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run())
    }
    const SL = dh("__proto__,__v_isRef,__isVue"),
        eb = new Set(Object.getOwnPropertyNames(Symbol).filter(e => e !== "arguments" && e !== "caller").map(e => Symbol[e]).filter(no)),
        OL = _h(),
        AL = _h(!1, !0),
        IL = _h(!0),
        bv = wL();

    function wL() {
        const e = {};
        return ["includes", "indexOf", "lastIndexOf"].forEach(t => {
            e[t] = function(...n) {
                const r = ot(this);
                for (let o = 0, c = this.length; o < c; o++) Wn(r, "get", o + "");
                const s = r[t](...n);
                return s === -1 || s === !1 ? r[t](...n.map(ot)) : s
            }
        }), ["push", "pop", "shift", "unshift", "splice"].forEach(t => {
            e[t] = function(...n) {
                fa();
                const r = ot(this)[t].apply(this, n);
                return da(), r
            }
        }), e
    }

    function _h(e = !1, t = !1) {
        return function(r, s, o) {
            if (s === "__v_isReactive") return !e;
            if (s === "__v_isReadonly") return e;
            if (s === "__v_isShallow") return t;
            if (s === "__v_raw" && o === (e ? t ? jL : sb : t ? ib : rb).get(r)) return r;
            const c = Le(r);
            if (!e && c && rt(bv, s)) return Reflect.get(bv, s, o);
            const u = Reflect.get(r, s, o);
            return (no(s) ? eb.has(s) : SL(s)) || (e || Wn(r, "get", s), t) ? u : on(u) ? c && mh(s) ? u : u.value : yt(u) ? e ? ab(u) : dr(u) : u
        }
    }
    const CL = tb(),
        RL = tb(!0);

    function tb(e = !1) {
        return function(n, r, s, o) {
            let c = n[r];
            if (Zs(c) && on(c) && !on(s)) return !1;
            if (!e && (!Zc(s) && !Zs(s) && (c = ot(c), s = ot(s)), !Le(n) && on(c) && !on(s))) return c.value = s, !0;
            const u = Le(n) && mh(r) ? Number(r) < n.length : rt(n, r),
                f = Reflect.set(n, r, s, o);
            return n === ot(o) && (u ? ro(s, c) && Yr(n, "set", r, s) : Yr(n, "add", r, s)), f
        }
    }

    function NL(e, t) {
        const n = rt(e, t);
        e[t];
        const r = Reflect.deleteProperty(e, t);
        return r && n && Yr(e, "delete", t, void 0), r
    }

    function LL(e, t) {
        const n = Reflect.has(e, t);
        return (!no(t) || !eb.has(t)) && Wn(e, "has", t), n
    }

    function $L(e) {
        return Wn(e, "iterate", Le(e) ? "length" : ss), Reflect.ownKeys(e)
    }
    const nb = {
            get: OL,
            set: CL,
            deleteProperty: NL,
            has: LL,
            ownKeys: $L
        },
        PL = {
            get: IL,
            set(e, t) {
                return !0
            },
            deleteProperty(e, t) {
                return !0
            }
        },
        DL = en({}, nb, {
            get: AL,
            set: RL
        }),
        yh = e => e,
        El = e => Reflect.getPrototypeOf(e);

    function Tc(e, t, n = !1, r = !1) {
        e = e.__v_raw;
        const s = ot(e),
            o = ot(t);
        n || (t !== o && Wn(s, "get", t), Wn(s, "get", o));
        const {
            has: c
        } = El(s), u = r ? yh : n ? Sh : so;
        if (c.call(s, t)) return u(e.get(t));
        if (c.call(s, o)) return u(e.get(o));
        e !== s && e.get(t)
    }

    function Sc(e, t = !1) {
        const n = this.__v_raw,
            r = ot(n),
            s = ot(e);
        return t || (e !== s && Wn(r, "has", e), Wn(r, "has", s)), e === s ? n.has(e) : n.has(e) || n.has(s)
    }

    function Oc(e, t = !1) {
        return e = e.__v_raw, !t && Wn(ot(e), "iterate", ss), Reflect.get(e, "size", e)
    }

    function Tv(e) {
        e = ot(e);
        const t = ot(this);
        return El(t).has.call(t, e) || (t.add(e), Yr(t, "add", e, e)), this
    }

    function Sv(e, t) {
        t = ot(t);
        const n = ot(this),
            {
                has: r,
                get: s
            } = El(n);
        let o = r.call(n, e);
        o || (e = ot(e), o = r.call(n, e));
        const c = s.call(n, e);
        return n.set(e, t), o ? ro(t, c) && Yr(n, "set", e, t) : Yr(n, "add", e, t), this
    }

    function Ov(e) {
        const t = ot(this),
            {
                has: n,
                get: r
            } = El(t);
        let s = n.call(t, e);
        s || (e = ot(e), s = n.call(t, e)), r && r.call(t, e);
        const o = t.delete(e);
        return s && Yr(t, "delete", e, void 0), o
    }

    function Av() {
        const e = ot(this),
            t = e.size !== 0,
            n = e.clear();
        return t && Yr(e, "clear", void 0, void 0), n
    }

    function Ac(e, t) {
        return function(r, s) {
            const o = this,
                c = o.__v_raw,
                u = ot(c),
                f = t ? yh : e ? Sh : so;
            return !e && Wn(u, "iterate", ss), c.forEach((d, g) => r.call(s, f(d), f(g), o))
        }
    }

    function Ic(e, t, n) {
        return function(...r) {
            const s = this.__v_raw,
                o = ot(s),
                c = Ws(o),
                u = e === "entries" || e === Symbol.iterator && c,
                f = e === "keys" && c,
                d = s[e](...r),
                g = n ? yh : t ? Sh : so;
            return !t && Wn(o, "iterate", f ? dd : ss), {
                next() {
                    const {
                        value: _,
                        done: b
                    } = d.next();
                    return b ? {
                        value: _,
                        done: b
                    } : {
                        value: u ? [g(_[0]), g(_[1])] : g(_),
                        done: b
                    }
                },
                [Symbol.iterator]() {
                    return this
                }
            }
        }
    }

    function ii(e) {
        return function(...t) {
            return e === "delete" ? !1 : this
        }
    }

    function kL() {
        const e = {
                get(o) {
                    return Tc(this, o)
                },
                get size() {
                    return Oc(this)
                },
                has: Sc,
                add: Tv,
                set: Sv,
                delete: Ov,
                clear: Av,
                forEach: Ac(!1, !1)
            },
            t = {
                get(o) {
                    return Tc(this, o, !1, !0)
                },
                get size() {
                    return Oc(this)
                },
                has: Sc,
                add: Tv,
                set: Sv,
                delete: Ov,
                clear: Av,
                forEach: Ac(!1, !0)
            },
            n = {
                get(o) {
                    return Tc(this, o, !0)
                },
                get size() {
                    return Oc(this, !0)
                },
                has(o) {
                    return Sc.call(this, o, !0)
                },
                add: ii("add"),
                set: ii("set"),
                delete: ii("delete"),
                clear: ii("clear"),
                forEach: Ac(!0, !1)
            },
            r = {
                get(o) {
                    return Tc(this, o, !0, !0)
                },
                get size() {
                    return Oc(this, !0)
                },
                has(o) {
                    return Sc.call(this, o, !0)
                },
                add: ii("add"),
                set: ii("set"),
                delete: ii("delete"),
                clear: ii("clear"),
                forEach: Ac(!0, !0)
            };
        return ["keys", "values", "entries", Symbol.iterator].forEach(o => {
            e[o] = Ic(o, !1, !1), n[o] = Ic(o, !0, !1), t[o] = Ic(o, !1, !0), r[o] = Ic(o, !0, !0)
        }), [e, n, t, r]
    }
    const [ML, xL, UL, FL] = kL();

    function bh(e, t) {
        const n = t ? e ? FL : UL : e ? xL : ML;
        return (r, s, o) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? r : Reflect.get(rt(n, s) && s in r ? n : r, s, o)
    }
    const BL = {
            get: bh(!1, !1)
        },
        GL = {
            get: bh(!1, !0)
        },
        WL = {
            get: bh(!0, !1)
        },
        rb = new WeakMap,
        ib = new WeakMap,
        sb = new WeakMap,
        jL = new WeakMap;

    function HL(e) {
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

    function VL(e) {
        return e.__v_skip || !Object.isExtensible(e) ? 0 : HL(gL(e))
    }

    function dr(e) {
        return Zs(e) ? e : Th(e, !1, nb, BL, rb)
    }

    function KL(e) {
        return Th(e, !1, DL, GL, ib)
    }

    function ab(e) {
        return Th(e, !0, PL, WL, sb)
    }

    function Th(e, t, n, r, s) {
        if (!yt(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
        const o = s.get(e);
        if (o) return o;
        const c = VL(e);
        if (c === 0) return e;
        const u = new Proxy(e, c === 2 ? r : n);
        return s.set(e, u), u
    }

    function js(e) {
        return Zs(e) ? js(e.__v_raw) : !!(e && e.__v_isReactive)
    }

    function Zs(e) {
        return !!(e && e.__v_isReadonly)
    }

    function Zc(e) {
        return !!(e && e.__v_isShallow)
    }

    function ob(e) {
        return js(e) || Zs(e)
    }

    function ot(e) {
        const t = e && e.__v_raw;
        return t ? ot(t) : e
    }

    function cb(e) {
        return Qc(e, "__v_skip", !0), e
    }
    const so = e => yt(e) ? dr(e) : e,
        Sh = e => yt(e) ? ab(e) : e;

    function lb(e) {
        pi && lr && (e = ot(e), Zy(e.dep || (e.dep = vh())))
    }

    function ub(e, t) {
        e = ot(e), e.dep && hd(e.dep)
    }

    function on(e) {
        return !!(e && e.__v_isRef === !0)
    }

    function et(e) {
        return fb(e, !1)
    }

    function YL(e) {
        return fb(e, !0)
    }

    function fb(e, t) {
        return on(e) ? e : new qL(e, t)
    }
    class qL {
        constructor(t, n) {
            this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : ot(t), this._value = n ? t : so(t)
        }
        get value() {
            return lb(this), this._value
        }
        set value(t) {
            const n = this.__v_isShallow || Zc(t) || Zs(t);
            t = n ? t : ot(t), ro(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : so(t), ub(this))
        }
    }

    function zL(e) {
        return on(e) ? e.value : e
    }
    const XL = {
        get: (e, t, n) => zL(Reflect.get(e, t, n)),
        set: (e, t, n, r) => {
            const s = e[t];
            return on(s) && !on(n) ? (s.value = n, !0) : Reflect.set(e, t, n, r)
        }
    };

    function db(e) {
        return js(e) ? e : new Proxy(e, XL)
    }
    var hb;
    class JL {
        constructor(t, n, r, s) {
            this._setter = n, this.dep = void 0, this.__v_isRef = !0, this[hb] = !1, this._dirty = !0, this.effect = new Eh(t, () => {
                this._dirty || (this._dirty = !0, ub(this))
            }), this.effect.computed = this, this.effect.active = this._cacheable = !s, this.__v_isReadonly = r
        }
        get value() {
            const t = ot(this);
            return lb(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value
        }
        set value(t) {
            this._setter(t)
        }
    }
    hb = "__v_isReadonly";

    function QL(e, t, n = !1) {
        let r, s;
        const o = Ve(e);
        return o ? (r = e, s = fr) : (r = e.get, s = e.set), new JL(r, s, o || !s, n)
    }

    function gi(e, t, n, r) {
        let s;
        try {
            s = r ? e(...r) : e()
        } catch (o) {
            _l(o, t, n)
        }
        return s
    }

    function nr(e, t, n, r) {
        if (Ve(e)) {
            const o = gi(e, t, n, r);
            return o && Ky(o) && o.catch(c => {
                _l(c, t, n)
            }), o
        }
        const s = [];
        for (let o = 0; o < e.length; o++) s.push(nr(e[o], t, n, r));
        return s
    }

    function _l(e, t, n, r = !0) {
        const s = t ? t.vnode : null;
        if (t) {
            let o = t.parent;
            const c = t.proxy,
                u = n;
            for (; o;) {
                const d = o.ec;
                if (d) {
                    for (let g = 0; g < d.length; g++)
                        if (d[g](e, c, u) === !1) return
                }
                o = o.parent
            }
            const f = t.appContext.config.errorHandler;
            if (f) {
                gi(f, null, 10, [e, c, u]);
                return
            }
        }
        ZL(e, n, s, r)
    }

    function ZL(e, t, n, r = !0) {
        console.error(e)
    }
    let ao = !1,
        pd = !1;
    const dn = [];
    let Ar = 0;
    const Hs = [];
    let Wr = null,
        Zi = 0;
    const pb = Promise.resolve();
    let Oh = null;

    function gb(e) {
        const t = Oh || pb;
        return e ? t.then(this ? e.bind(this) : e) : t
    }

    function e$(e) {
        let t = Ar + 1,
            n = dn.length;
        for (; t < n;) {
            const r = t + n >>> 1;
            oo(dn[r]) < e ? t = r + 1 : n = r
        }
        return t
    }

    function Ah(e) {
        (!dn.length || !dn.includes(e, ao && e.allowRecurse ? Ar + 1 : Ar)) && (e.id == null ? dn.push(e) : dn.splice(e$(e.id), 0, e), mb())
    }

    function mb() {
        !ao && !pd && (pd = !0, Oh = pb.then(Eb))
    }

    function t$(e) {
        const t = dn.indexOf(e);
        t > Ar && dn.splice(t, 1)
    }

    function n$(e) {
        Le(e) ? Hs.push(...e) : (!Wr || !Wr.includes(e, e.allowRecurse ? Zi + 1 : Zi)) && Hs.push(e), mb()
    }

    function Iv(e, t = ao ? Ar + 1 : 0) {
        for (; t < dn.length; t++) {
            const n = dn[t];
            n && n.pre && (dn.splice(t, 1), t--, n())
        }
    }

    function vb(e) {
        if (Hs.length) {
            const t = [...new Set(Hs)];
            if (Hs.length = 0, Wr) {
                Wr.push(...t);
                return
            }
            for (Wr = t, Wr.sort((n, r) => oo(n) - oo(r)), Zi = 0; Zi < Wr.length; Zi++) Wr[Zi]();
            Wr = null, Zi = 0
        }
    }
    const oo = e => e.id == null ? 1 / 0 : e.id,
        r$ = (e, t) => {
            const n = oo(e) - oo(t);
            if (n === 0) {
                if (e.pre && !t.pre) return -1;
                if (t.pre && !e.pre) return 1
            }
            return n
        };

    function Eb(e) {
        pd = !1, ao = !0, dn.sort(r$);
        const t = fr;
        try {
            for (Ar = 0; Ar < dn.length; Ar++) {
                const n = dn[Ar];
                n && n.active !== !1 && gi(n, null, 14)
            }
        } finally {
            Ar = 0, dn.length = 0, vb(), ao = !1, Oh = null, (dn.length || Hs.length) && Eb()
        }
    }

    function i$(e, t, ...n) {
        if (e.isUnmounted) return;
        const r = e.vnode.props || _t;
        let s = n;
        const o = t.startsWith("update:"),
            c = o && t.slice(7);
        if (c && c in r) {
            const g = `${c==="modelValue"?"model":c}Modifiers`,
                {
                    number: _,
                    trim: b
                } = r[g] || _t;
            b && (s = n.map(I => I.trim())), _ && (s = n.map(io))
        }
        let u, f = r[u = vf(t)] || r[u = vf(wr(t))];
        !f && o && (f = r[u = vf(hs(t))]), f && nr(f, e, 6, s);
        const d = r[u + "Once"];
        if (d) {
            if (!e.emitted) e.emitted = {};
            else if (e.emitted[u]) return;
            e.emitted[u] = !0, nr(d, e, 6, s)
        }
    }

    function _b(e, t, n = !1) {
        const r = t.emitsCache,
            s = r.get(e);
        if (s !== void 0) return s;
        const o = e.emits;
        let c = {},
            u = !1;
        if (!Ve(e)) {
            const f = d => {
                const g = _b(d, t, !0);
                g && (u = !0, en(c, g))
            };
            !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f)
        }
        return !o && !u ? (yt(e) && r.set(e, null), null) : (Le(o) ? o.forEach(f => c[f] = null) : en(c, o), yt(e) && r.set(e, c), c)
    }

    function yl(e, t) {
        return !e || !gl(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), rt(e, t[0].toLowerCase() + t.slice(1)) || rt(e, hs(t)) || rt(e, t))
    }
    let tr = null,
        bl = null;

    function el(e) {
        const t = tr;
        return tr = e, bl = e && e.type.__scopeId || null, t
    }

    function ha(e) {
        bl = e
    }

    function pa() {
        bl = null
    }

    function Kr(e, t = tr, n) {
        if (!t || e._n) return e;
        const r = (...s) => {
            r._d && xv(-1);
            const o = el(t),
                c = e(...s);
            return el(o), r._d && xv(1), c
        };
        return r._n = !0, r._c = !0, r._d = !0, r
    }

    function Ef(e) {
        const {
            type: t,
            vnode: n,
            proxy: r,
            withProxy: s,
            props: o,
            propsOptions: [c],
            slots: u,
            attrs: f,
            emit: d,
            render: g,
            renderCache: _,
            data: b,
            setupState: I,
            ctx: R,
            inheritAttrs: M
        } = e;
        let W, C;
        const V = el(e);
        try {
            if (n.shapeFlag & 4) {
                const j = s || r;
                W = Sr(g.call(j, j, _, o, I, b, R)), C = f
            } else {
                const j = t;
                W = Sr(j.length > 1 ? j(o, {
                    attrs: f,
                    slots: u,
                    emit: d
                }) : j(o, null)), C = t.props ? f : s$(f)
            }
        } catch (j) {
            qa.length = 0, _l(j, e, 1), W = ft(hr)
        }
        let q = W;
        if (C && M !== !1) {
            const j = Object.keys(C),
                {
                    shapeFlag: G
                } = q;
            j.length && G & 7 && (c && j.some(ph) && (C = a$(C, c)), q = _i(q, C))
        }
        return n.dirs && (q = _i(q), q.dirs = q.dirs ? q.dirs.concat(n.dirs) : n.dirs), n.transition && (q.transition = n.transition), W = q, el(V), W
    }
    const s$ = e => {
            let t;
            for (const n in e)(n === "class" || n === "style" || gl(n)) && ((t || (t = {}))[n] = e[n]);
            return t
        },
        a$ = (e, t) => {
            const n = {};
            for (const r in e)(!ph(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
            return n
        };

    function o$(e, t, n) {
        const {
            props: r,
            children: s,
            component: o
        } = e, {
            props: c,
            children: u,
            patchFlag: f
        } = t, d = o.emitsOptions;
        if (t.dirs || t.transition) return !0;
        if (n && f >= 0) {
            if (f & 1024) return !0;
            if (f & 16) return r ? wv(r, c, d) : !!c;
            if (f & 8) {
                const g = t.dynamicProps;
                for (let _ = 0; _ < g.length; _++) {
                    const b = g[_];
                    if (c[b] !== r[b] && !yl(d, b)) return !0
                }
            }
        } else return (s || u) && (!u || !u.$stable) ? !0 : r === c ? !1 : r ? c ? wv(r, c, d) : !0 : !!c;
        return !1
    }

    function wv(e, t, n) {
        const r = Object.keys(t);
        if (r.length !== Object.keys(e).length) return !0;
        for (let s = 0; s < r.length; s++) {
            const o = r[s];
            if (t[o] !== e[o] && !yl(n, o)) return !0
        }
        return !1
    }

    function c$({
        vnode: e,
        parent: t
    }, n) {
        for (; t && t.subTree === e;)(e = t.vnode).el = n, t = t.parent
    }
    const l$ = e => e.__isSuspense;

    function u$(e, t) {
        t && t.pendingBranch ? Le(e) ? t.effects.push(...e) : t.effects.push(e) : n$(e)
    }

    function Br(e, t) {
        if (Zt) {
            let n = Zt.provides;
            const r = Zt.parent && Zt.parent.provides;
            r === n && (n = Zt.provides = Object.create(r)), n[e] = t
        }
    }

    function pn(e, t, n = !1) {
        const r = Zt || tr;
        if (r) {
            const s = r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides;
            if (s && e in s) return s[e];
            if (arguments.length > 1) return n && Ve(t) ? t.call(r.proxy) : t
        }
    }

    function f$(e, t) {
        return Ih(e, null, t)
    }
    const Cv = {};

    function mi(e, t, n) {
        return Ih(e, t, n)
    }

    function Ih(e, t, {
        immediate: n,
        deep: r,
        flush: s,
        onTrack: o,
        onTrigger: c
    } = _t) {
        const u = Zt;
        let f, d = !1,
            g = !1;
        if (on(e) ? (f = () => e.value, d = Zc(e)) : js(e) ? (f = () => e, r = !0) : Le(e) ? (g = !0, d = e.some(C => js(C) || Zc(C)), f = () => e.map(C => {
                if (on(C)) return C.value;
                if (js(C)) return is(C);
                if (Ve(C)) return gi(C, u, 2)
            })) : Ve(e) ? t ? f = () => gi(e, u, 2) : f = () => {
                if (!(u && u.isUnmounted)) return _ && _(), nr(e, u, 3, [b])
            } : f = fr, t && r) {
            const C = f;
            f = () => is(C())
        }
        let _, b = C => {
            _ = W.onStop = () => {
                gi(C, u, 4)
            }
        };
        if (fo) return b = fr, t ? n && nr(t, u, 3, [f(), g ? [] : void 0, b]) : f(), fr;
        let I = g ? [] : Cv;
        const R = () => {
            if (!!W.active)
                if (t) {
                    const C = W.run();
                    (r || d || (g ? C.some((V, q) => ro(V, I[q])) : ro(C, I))) && (_ && _(), nr(t, u, 3, [C, I === Cv ? void 0 : I, b]), I = C)
                } else W.run()
        };
        R.allowRecurse = !!t;
        let M;
        s === "sync" ? M = R : s === "post" ? M = () => Nn(R, u && u.suspense) : (R.pre = !0, u && (R.id = u.uid), M = () => Ah(R));
        const W = new Eh(f, M);
        return t ? n ? R() : I = W.run() : s === "post" ? Nn(W.run.bind(W), u && u.suspense) : W.run(), () => {
            W.stop(), u && u.scope && gh(u.scope.effects, W)
        }
    }

    function d$(e, t, n) {
        const r = this.proxy,
            s = jt(e) ? e.includes(".") ? yb(r, e) : () => r[e] : e.bind(r, r);
        let o;
        Ve(t) ? o = t : (o = t.handler, n = t);
        const c = Zt;
        ea(this);
        const u = Ih(s, o.bind(r), n);
        return c ? ea(c) : as(), u
    }

    function yb(e, t) {
        const n = t.split(".");
        return () => {
            let r = e;
            for (let s = 0; s < n.length && r; s++) r = r[n[s]];
            return r
        }
    }

    function is(e, t) {
        if (!yt(e) || e.__v_skip || (t = t || new Set, t.has(e))) return e;
        if (t.add(e), on(e)) is(e.value, t);
        else if (Le(e))
            for (let n = 0; n < e.length; n++) is(e[n], t);
        else if (ua(e) || Ws(e)) e.forEach(n => {
            is(n, t)
        });
        else if (qy(e))
            for (const n in e) is(e[n], t);
        return e
    }

    function bb() {
        const e = {
            isMounted: !1,
            isLeaving: !1,
            isUnmounting: !1,
            leavingVNodes: new Map
        };
        return Ol(() => {
            e.isMounted = !0
        }), wb(() => {
            e.isUnmounting = !0
        }), e
    }
    const er = [Function, Array],
        h$ = {
            name: "BaseTransition",
            props: {
                mode: String,
                appear: Boolean,
                persisted: Boolean,
                onBeforeEnter: er,
                onEnter: er,
                onAfterEnter: er,
                onEnterCancelled: er,
                onBeforeLeave: er,
                onLeave: er,
                onAfterLeave: er,
                onLeaveCancelled: er,
                onBeforeAppear: er,
                onAppear: er,
                onAfterAppear: er,
                onAppearCancelled: er
            },
            setup(e, {
                slots: t
            }) {
                const n = yi(),
                    r = bb();
                let s;
                return () => {
                    const o = t.default && wh(t.default(), !0);
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
                    if (r.isLeaving) return _f(c);
                    const d = Rv(c);
                    if (!d) return _f(c);
                    const g = co(d, u, r, n);
                    lo(d, g);
                    const _ = n.subTree,
                        b = _ && Rv(_);
                    let I = !1;
                    const {
                        getTransitionKey: R
                    } = d.type;
                    if (R) {
                        const M = R();
                        s === void 0 ? s = M : M !== s && (s = M, I = !0)
                    }
                    if (b && b.type !== hr && (!es(d, b) || I)) {
                        const M = co(b, u, r, n);
                        if (lo(b, M), f === "out-in") return r.isLeaving = !0, M.afterLeave = () => {
                            r.isLeaving = !1, n.update()
                        }, _f(c);
                        f === "in-out" && d.type !== hr && (M.delayLeave = (W, C, V) => {
                            const q = Sb(r, b);
                            q[String(b.key)] = b, W._leaveCb = () => {
                                C(), W._leaveCb = void 0, delete g.delayedLeave
                            }, g.delayedLeave = V
                        })
                    }
                    return c
                }
            }
        },
        Tb = h$;

    function Sb(e, t) {
        const {
            leavingVNodes: n
        } = e;
        let r = n.get(t.type);
        return r || (r = Object.create(null), n.set(t.type, r)), r
    }

    function co(e, t, n, r) {
        const {
            appear: s,
            mode: o,
            persisted: c = !1,
            onBeforeEnter: u,
            onEnter: f,
            onAfterEnter: d,
            onEnterCancelled: g,
            onBeforeLeave: _,
            onLeave: b,
            onAfterLeave: I,
            onLeaveCancelled: R,
            onBeforeAppear: M,
            onAppear: W,
            onAfterAppear: C,
            onAppearCancelled: V
        } = t, q = String(e.key), j = Sb(n, e), G = (le, ue) => {
            le && nr(le, r, 9, ue)
        }, se = (le, ue) => {
            const Ce = ue[1];
            G(le, ue), Le(le) ? le.every(be => be.length <= 1) && Ce() : le.length <= 1 && Ce()
        }, ce = {
            mode: o,
            persisted: c,
            beforeEnter(le) {
                let ue = u;
                if (!n.isMounted)
                    if (s) ue = M || u;
                    else return;
                le._leaveCb && le._leaveCb(!0);
                const Ce = j[q];
                Ce && es(e, Ce) && Ce.el._leaveCb && Ce.el._leaveCb(), G(ue, [le])
            },
            enter(le) {
                let ue = f,
                    Ce = d,
                    be = g;
                if (!n.isMounted)
                    if (s) ue = W || f, Ce = C || d, be = V || g;
                    else return;
                let fe = !1;
                const Oe = le._enterCb = F => {
                    fe || (fe = !0, F ? G(be, [le]) : G(Ce, [le]), ce.delayedLeave && ce.delayedLeave(), le._enterCb = void 0)
                };
                ue ? se(ue, [le, Oe]) : Oe()
            },
            leave(le, ue) {
                const Ce = String(e.key);
                if (le._enterCb && le._enterCb(!0), n.isUnmounting) return ue();
                G(_, [le]);
                let be = !1;
                const fe = le._leaveCb = Oe => {
                    be || (be = !0, ue(), Oe ? G(R, [le]) : G(I, [le]), le._leaveCb = void 0, j[Ce] === e && delete j[Ce])
                };
                j[Ce] = e, b ? se(b, [le, fe]) : fe()
            },
            clone(le) {
                return co(le, t, n, r)
            }
        };
        return ce
    }

    function _f(e) {
        if (Tl(e)) return e = _i(e), e.children = null, e
    }

    function Rv(e) {
        return Tl(e) ? e.children ? e.children[0] : void 0 : e
    }

    function lo(e, t) {
        e.shapeFlag & 6 && e.component ? lo(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
    }

    function wh(e, t = !1, n) {
        let r = [],
            s = 0;
        for (let o = 0; o < e.length; o++) {
            let c = e[o];
            const u = n == null ? c.key : String(n) + String(c.key != null ? c.key : o);
            c.type === ut ? (c.patchFlag & 128 && s++, r = r.concat(wh(c.children, t, u))) : (t || c.type !== hr) && r.push(u != null ? _i(c, {
                key: u
            }) : c)
        }
        if (s > 1)
            for (let o = 0; o < r.length; o++) r[o].patchFlag = -2;
        return r
    }

    function ze(e) {
        return Ve(e) ? {
            setup: e,
            name: e.name
        } : e
    }
    const Hc = e => !!e.type.__asyncLoader,
        Tl = e => e.type.__isKeepAlive;

    function p$(e, t) {
        Ob(e, "a", t)
    }

    function g$(e, t) {
        Ob(e, "da", t)
    }

    function Ob(e, t, n = Zt) {
        const r = e.__wdc || (e.__wdc = () => {
            let s = n;
            for (; s;) {
                if (s.isDeactivated) return;
                s = s.parent
            }
            return e()
        });
        if (Sl(t, r, n), n) {
            let s = n.parent;
            for (; s && s.parent;) Tl(s.parent.vnode) && m$(r, t, n, s), s = s.parent
        }
    }

    function m$(e, t, n, r) {
        const s = Sl(t, e, r, !0);
        Al(() => {
            gh(r[t], s)
        }, n)
    }

    function Sl(e, t, n = Zt, r = !1) {
        if (n) {
            const s = n[e] || (n[e] = []),
                o = t.__weh || (t.__weh = (...c) => {
                    if (n.isUnmounted) return;
                    fa(), ea(n);
                    const u = nr(t, n, e, c);
                    return as(), da(), u
                });
            return r ? s.unshift(o) : s.push(o), o
        }
    }
    const qr = e => (t, n = Zt) => (!fo || e === "sp") && Sl(e, t, n),
        Ab = qr("bm"),
        Ol = qr("m"),
        v$ = qr("bu"),
        Ib = qr("u"),
        wb = qr("bum"),
        Al = qr("um"),
        E$ = qr("sp"),
        _$ = qr("rtg"),
        y$ = qr("rtc");

    function b$(e, t = Zt) {
        Sl("ec", e, t)
    }

    function je(e, t) {
        const n = tr;
        if (n === null) return e;
        const r = Cl(n) || n.proxy,
            s = e.dirs || (e.dirs = []);
        for (let o = 0; o < t.length; o++) {
            let [c, u, f, d = _t] = t[o];
            Ve(c) && (c = {
                mounted: c,
                updated: c
            }), c.deep && is(u), s.push({
                dir: c,
                instance: r,
                value: u,
                oldValue: void 0,
                arg: f,
                modifiers: d
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
            f && (fa(), nr(f, n, 8, [e.el, u, e, t]), da())
        }
    }
    const Ch = "components",
        T$ = "directives";

    function Bt(e, t) {
        return Rh(Ch, e, !0, t) || e
    }
    const Cb = Symbol();

    function S$(e) {
        return jt(e) ? Rh(Ch, e, !1) || e : e || Cb
    }

    function mn(e) {
        return Rh(T$, e)
    }

    function Rh(e, t, n = !0, r = !1) {
        const s = tr || Zt;
        if (s) {
            const o = s.type;
            if (e === Ch) {
                const u = Q$(o, !1);
                if (u && (u === t || u === wr(t) || u === vl(wr(t)))) return o
            }
            const c = Nv(s[e] || o[e], t) || Nv(s.appContext[e], t);
            return !c && r ? o : c
        }
    }

    function Nv(e, t) {
        return e && (e[t] || e[wr(t)] || e[vl(wr(t))])
    }

    function Cr(e, t, n, r) {
        let s;
        const o = n && n[r];
        if (Le(e) || jt(e)) {
            s = new Array(e.length);
            for (let c = 0, u = e.length; c < u; c++) s[c] = t(e[c], c, void 0, o && o[c])
        } else if (typeof e == "number") {
            s = new Array(e);
            for (let c = 0; c < e; c++) s[c] = t(c + 1, c, void 0, o && o[c])
        } else if (yt(e))
            if (e[Symbol.iterator]) s = Array.from(e, (c, u) => t(c, u, void 0, o && o[u]));
            else {
                const c = Object.keys(e);
                s = new Array(c.length);
                for (let u = 0, f = c.length; u < f; u++) {
                    const d = c[u];
                    s[u] = t(e[d], d, u, o && o[u])
                }
            }
        else s = [];
        return n && (n[r] = s), s
    }
    const gd = e => e ? Fb(e) ? Cl(e) || e.proxy : gd(e.parent) : null,
        tl = en(Object.create(null), {
            $: e => e,
            $el: e => e.vnode.el,
            $data: e => e.data,
            $props: e => e.props,
            $attrs: e => e.attrs,
            $slots: e => e.slots,
            $refs: e => e.refs,
            $parent: e => gd(e.parent),
            $root: e => gd(e.root),
            $emit: e => e.emit,
            $options: e => Nh(e),
            $forceUpdate: e => e.f || (e.f = () => Ah(e.update)),
            $nextTick: e => e.n || (e.n = gb.bind(e.proxy)),
            $watch: e => d$.bind(e)
        }),
        O$ = {
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
                let d;
                if (t[0] !== "$") {
                    const I = c[t];
                    if (I !== void 0) switch (I) {
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
                        if ((d = e.propsOptions[0]) && rt(d, t)) return c[t] = 3, o[t];
                        if (n !== _t && rt(n, t)) return c[t] = 4, n[t];
                        md && (c[t] = 0)
                    }
                }
                const g = tl[t];
                let _, b;
                if (g) return t === "$attrs" && Wn(e, "get", t), g(e);
                if ((_ = u.__cssModules) && (_ = _[t])) return _;
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
                return !!n[c] || e !== _t && rt(e, c) || t !== _t && rt(t, c) || (u = o[0]) && rt(u, c) || rt(r, c) || rt(tl, c) || rt(s.config.globalProperties, c)
            },
            defineProperty(e, t, n) {
                return n.get != null ? e._.accessCache[t] = 0 : rt(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n)
            }
        };
    let md = !0;

    function A$(e) {
        const t = Nh(e),
            n = e.proxy,
            r = e.ctx;
        md = !1, t.beforeCreate && Lv(t.beforeCreate, e, "bc");
        const {
            data: s,
            computed: o,
            methods: c,
            watch: u,
            provide: f,
            inject: d,
            created: g,
            beforeMount: _,
            mounted: b,
            beforeUpdate: I,
            updated: R,
            activated: M,
            deactivated: W,
            beforeDestroy: C,
            beforeUnmount: V,
            destroyed: q,
            unmounted: j,
            render: G,
            renderTracked: se,
            renderTriggered: ce,
            errorCaptured: le,
            serverPrefetch: ue,
            expose: Ce,
            inheritAttrs: be,
            components: fe,
            directives: Oe,
            filters: F
        } = t;
        if (d && I$(d, r, null, e.appContext.config.unwrapInjectedRef), c)
            for (const Ee in c) {
                const me = c[Ee];
                Ve(me) && (r[Ee] = me.bind(n))
            }
        if (s) {
            const Ee = s.call(n, n);
            yt(Ee) && (e.data = dr(Ee))
        }
        if (md = !0, o)
            for (const Ee in o) {
                const me = o[Ee],
                    Se = Ve(me) ? me.bind(n, n) : Ve(me.get) ? me.get.bind(n, n) : fr,
                    Me = !Ve(me) && Ve(me.set) ? me.set.bind(n) : fr,
                    Fe = On({
                        get: Se,
                        set: Me
                    });
                Object.defineProperty(r, Ee, {
                    enumerable: !0,
                    configurable: !0,
                    get: () => Fe.value,
                    set: Je => Fe.value = Je
                })
            }
        if (u)
            for (const Ee in u) Rb(u[Ee], r, n, Ee);
        if (f) {
            const Ee = Ve(f) ? f.call(n) : f;
            Reflect.ownKeys(Ee).forEach(me => {
                Br(me, Ee[me])
            })
        }
        g && Lv(g, e, "c");

        function de(Ee, me) {
            Le(me) ? me.forEach(Se => Ee(Se.bind(n))) : me && Ee(me.bind(n))
        }
        if (de(Ab, _), de(Ol, b), de(v$, I), de(Ib, R), de(p$, M), de(g$, W), de(b$, le), de(y$, se), de(_$, ce), de(wb, V), de(Al, j), de(E$, ue), Le(Ce))
            if (Ce.length) {
                const Ee = e.exposed || (e.exposed = {});
                Ce.forEach(me => {
                    Object.defineProperty(Ee, me, {
                        get: () => n[me],
                        set: Se => n[me] = Se
                    })
                })
            } else e.exposed || (e.exposed = {});
        G && e.render === fr && (e.render = G), be != null && (e.inheritAttrs = be), fe && (e.components = fe), Oe && (e.directives = Oe)
    }

    function I$(e, t, n = fr, r = !1) {
        Le(e) && (e = vd(e));
        for (const s in e) {
            const o = e[s];
            let c;
            yt(o) ? "default" in o ? c = pn(o.from || s, o.default, !0) : c = pn(o.from || s) : c = pn(o), on(c) && r ? Object.defineProperty(t, s, {
                enumerable: !0,
                configurable: !0,
                get: () => c.value,
                set: u => c.value = u
            }) : t[s] = c
        }
    }

    function Lv(e, t, n) {
        nr(Le(e) ? e.map(r => r.bind(t.proxy)) : e.bind(t.proxy), t, n)
    }

    function Rb(e, t, n, r) {
        const s = r.includes(".") ? yb(n, r) : () => n[r];
        if (jt(e)) {
            const o = t[e];
            Ve(o) && mi(s, o)
        } else if (Ve(e)) mi(s, e.bind(n));
        else if (yt(e))
            if (Le(e)) e.forEach(o => Rb(o, t, n, r));
            else {
                const o = Ve(e.handler) ? e.handler.bind(n) : t[e.handler];
                Ve(o) && mi(s, o, e)
            }
    }

    function Nh(e) {
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
        return u ? f = u : !s.length && !n && !r ? f = t : (f = {}, s.length && s.forEach(d => nl(f, d, c, !0)), nl(f, t, c)), yt(t) && o.set(t, f), f
    }

    function nl(e, t, n, r = !1) {
        const {
            mixins: s,
            extends: o
        } = t;
        o && nl(e, o, n, !0), s && s.forEach(c => nl(e, c, n, !0));
        for (const c in t)
            if (!(r && c === "expose")) {
                const u = w$[c] || n && n[c];
                e[c] = u ? u(e[c], t[c]) : t[c]
            } return e
    }
    const w$ = {
        data: $v,
        props: Xi,
        emits: Xi,
        methods: Xi,
        computed: Xi,
        beforeCreate: Tn,
        created: Tn,
        beforeMount: Tn,
        mounted: Tn,
        beforeUpdate: Tn,
        updated: Tn,
        beforeDestroy: Tn,
        beforeUnmount: Tn,
        destroyed: Tn,
        unmounted: Tn,
        activated: Tn,
        deactivated: Tn,
        errorCaptured: Tn,
        serverPrefetch: Tn,
        components: Xi,
        directives: Xi,
        watch: R$,
        provide: $v,
        inject: C$
    };

    function $v(e, t) {
        return t ? e ? function() {
            return en(Ve(e) ? e.call(this, this) : e, Ve(t) ? t.call(this, this) : t)
        } : t : e
    }

    function C$(e, t) {
        return Xi(vd(e), vd(t))
    }

    function vd(e) {
        if (Le(e)) {
            const t = {};
            for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
            return t
        }
        return e
    }

    function Tn(e, t) {
        return e ? [...new Set([].concat(e, t))] : t
    }

    function Xi(e, t) {
        return e ? en(en(Object.create(null), e), t) : t
    }

    function R$(e, t) {
        if (!e) return t;
        if (!t) return e;
        const n = en(Object.create(null), e);
        for (const r in t) n[r] = Tn(e[r], t[r]);
        return n
    }

    function N$(e, t, n, r = !1) {
        const s = {},
            o = {};
        Qc(o, wl, 1), e.propsDefaults = Object.create(null), Nb(e, t, s, o);
        for (const c in e.propsOptions[0]) c in s || (s[c] = void 0);
        n ? e.props = r ? s : KL(s) : e.type.props ? e.props = s : e.props = o, e.attrs = o
    }

    function L$(e, t, n, r) {
        const {
            props: s,
            attrs: o,
            vnode: {
                patchFlag: c
            }
        } = e, u = ot(s), [f] = e.propsOptions;
        let d = !1;
        if ((r || c > 0) && !(c & 16)) {
            if (c & 8) {
                const g = e.vnode.dynamicProps;
                for (let _ = 0; _ < g.length; _++) {
                    let b = g[_];
                    if (yl(e.emitsOptions, b)) continue;
                    const I = t[b];
                    if (f)
                        if (rt(o, b)) I !== o[b] && (o[b] = I, d = !0);
                        else {
                            const R = wr(b);
                            s[R] = Ed(f, u, R, I, e, !1)
                        }
                    else I !== o[b] && (o[b] = I, d = !0)
                }
            }
        } else {
            Nb(e, t, s, o) && (d = !0);
            let g;
            for (const _ in u)(!t || !rt(t, _) && ((g = hs(_)) === _ || !rt(t, g))) && (f ? n && (n[_] !== void 0 || n[g] !== void 0) && (s[_] = Ed(f, u, _, void 0, e, !0)) : delete s[_]);
            if (o !== u)
                for (const _ in o)(!t || !rt(t, _) && !0) && (delete o[_], d = !0)
        }
        d && Yr(e, "set", "$attrs")
    }

    function Nb(e, t, n, r) {
        const [s, o] = e.propsOptions;
        let c = !1,
            u;
        if (t)
            for (let f in t) {
                if (Wc(f)) continue;
                const d = t[f];
                let g;
                s && rt(s, g = wr(f)) ? !o || !o.includes(g) ? n[g] = d : (u || (u = {}))[g] = d : yl(e.emitsOptions, f) || (!(f in r) || d !== r[f]) && (r[f] = d, c = !0)
            }
        if (o) {
            const f = ot(n),
                d = u || _t;
            for (let g = 0; g < o.length; g++) {
                const _ = o[g];
                n[_] = Ed(s, f, _, d[_], e, !rt(d, _))
            }
        }
        return c
    }

    function Ed(e, t, n, r, s, o) {
        const c = e[n];
        if (c != null) {
            const u = rt(c, "default");
            if (u && r === void 0) {
                const f = c.default;
                if (c.type !== Function && Ve(f)) {
                    const {
                        propsDefaults: d
                    } = s;
                    n in d ? r = d[n] : (ea(s), r = d[n] = f.call(null, t), as())
                } else r = f
            }
            c[0] && (o && !u ? r = !1 : c[1] && (r === "" || r === hs(n)) && (r = !0))
        }
        return r
    }

    function Lb(e, t, n = !1) {
        const r = t.propsCache,
            s = r.get(e);
        if (s) return s;
        const o = e.props,
            c = {},
            u = [];
        let f = !1;
        if (!Ve(e)) {
            const g = _ => {
                f = !0;
                const [b, I] = Lb(_, t, !0);
                en(c, b), I && u.push(...I)
            };
            !n && t.mixins.length && t.mixins.forEach(g), e.extends && g(e.extends), e.mixins && e.mixins.forEach(g)
        }
        if (!o && !f) return yt(e) && r.set(e, Gs), Gs;
        if (Le(o))
            for (let g = 0; g < o.length; g++) {
                const _ = wr(o[g]);
                Pv(_) && (c[_] = _t)
            } else if (o)
                for (const g in o) {
                    const _ = wr(g);
                    if (Pv(_)) {
                        const b = o[g],
                            I = c[_] = Le(b) || Ve(b) ? {
                                type: b
                            } : b;
                        if (I) {
                            const R = Mv(Boolean, I.type),
                                M = Mv(String, I.type);
                            I[0] = R > -1, I[1] = M < 0 || R < M, (R > -1 || rt(I, "default")) && u.push(_)
                        }
                    }
                }
        const d = [c, u];
        return yt(e) && r.set(e, d), d
    }

    function Pv(e) {
        return e[0] !== "$"
    }

    function Dv(e) {
        const t = e && e.toString().match(/^\s*function (\w+)/);
        return t ? t[1] : e === null ? "null" : ""
    }

    function kv(e, t) {
        return Dv(e) === Dv(t)
    }

    function Mv(e, t) {
        return Le(t) ? t.findIndex(n => kv(n, e)) : Ve(t) && kv(t, e) ? 0 : -1
    }
    const $b = e => e[0] === "_" || e === "$stable",
        Lh = e => Le(e) ? e.map(Sr) : [Sr(e)],
        $$ = (e, t, n) => {
            if (t._n) return t;
            const r = Kr((...s) => Lh(t(...s)), n);
            return r._c = !1, r
        },
        Pb = (e, t, n) => {
            const r = e._ctx;
            for (const s in e) {
                if ($b(s)) continue;
                const o = e[s];
                if (Ve(o)) t[s] = $$(s, o, r);
                else if (o != null) {
                    const c = Lh(o);
                    t[s] = () => c
                }
            }
        },
        Db = (e, t) => {
            const n = Lh(t);
            e.slots.default = () => n
        },
        P$ = (e, t) => {
            if (e.vnode.shapeFlag & 32) {
                const n = t._;
                n ? (e.slots = ot(t), Qc(t, "_", n)) : Pb(t, e.slots = {})
            } else e.slots = {}, t && Db(e, t);
            Qc(e.slots, wl, 1)
        },
        D$ = (e, t, n) => {
            const {
                vnode: r,
                slots: s
            } = e;
            let o = !0,
                c = _t;
            if (r.shapeFlag & 32) {
                const u = t._;
                u ? n && u === 1 ? o = !1 : (en(s, t), !n && u === 1 && delete s._) : (o = !t.$stable, Pb(t, s)), c = t
            } else t && (Db(e, t), c = {
                default: 1
            });
            if (o)
                for (const u in s) !$b(u) && !(u in c) && delete s[u]
        };

    function kb() {
        return {
            app: null,
            config: {
                isNativeTag: dL,
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
    let k$ = 0;

    function M$(e, t) {
        return function(r, s = null) {
            Ve(r) || (r = Object.assign({}, r)), s != null && !yt(s) && (s = null);
            const o = kb(),
                c = new Set;
            let u = !1;
            const f = o.app = {
                _uid: k$++,
                _component: r,
                _props: s,
                _container: null,
                _context: o,
                _instance: null,
                version: eP,
                get config() {
                    return o.config
                },
                set config(d) {},
                use(d, ...g) {
                    return c.has(d) || (d && Ve(d.install) ? (c.add(d), d.install(f, ...g)) : Ve(d) && (c.add(d), d(f, ...g))), f
                },
                mixin(d) {
                    return o.mixins.includes(d) || o.mixins.push(d), f
                },
                component(d, g) {
                    return g ? (o.components[d] = g, f) : o.components[d]
                },
                directive(d, g) {
                    return g ? (o.directives[d] = g, f) : o.directives[d]
                },
                mount(d, g, _) {
                    if (!u) {
                        const b = ft(r, s);
                        return b.appContext = o, g && t ? t(b, d) : e(b, d, _), u = !0, f._container = d, d.__vue_app__ = f, Cl(b.component) || b.component.proxy
                    }
                },
                unmount() {
                    u && (e(null, f._container), delete f._container.__vue_app__)
                },
                provide(d, g) {
                    return o.provides[d] = g, f
                }
            };
            return f
        }
    }

    function _d(e, t, n, r, s = !1) {
        if (Le(e)) {
            e.forEach((b, I) => _d(b, t && (Le(t) ? t[I] : t), n, r, s));
            return
        }
        if (Hc(r) && !s) return;
        const o = r.shapeFlag & 4 ? Cl(r.component) || r.component.proxy : r.el,
            c = s ? null : o,
            {
                i: u,
                r: f
            } = e,
            d = t && t.r,
            g = u.refs === _t ? u.refs = {} : u.refs,
            _ = u.setupState;
        if (d != null && d !== f && (jt(d) ? (g[d] = null, rt(_, d) && (_[d] = null)) : on(d) && (d.value = null)), Ve(f)) gi(f, u, 12, [c, g]);
        else {
            const b = jt(f),
                I = on(f);
            if (b || I) {
                const R = () => {
                    if (e.f) {
                        const M = b ? g[f] : f.value;
                        s ? Le(M) && gh(M, o) : Le(M) ? M.includes(o) || M.push(o) : b ? (g[f] = [o], rt(_, f) && (_[f] = g[f])) : (f.value = [o], e.k && (g[e.k] = f.value))
                    } else b ? (g[f] = c, rt(_, f) && (_[f] = c)) : I && (f.value = c, e.k && (g[e.k] = c))
                };
                c ? (R.id = -1, Nn(R, n)) : R()
            }
        }
    }
    const Nn = u$;

    function x$(e) {
        return U$(e)
    }

    function U$(e, t) {
        const n = EL();
        n.__VUE__ = !0;
        const {
            insert: r,
            remove: s,
            patchProp: o,
            createElement: c,
            createText: u,
            createComment: f,
            setText: d,
            setElementText: g,
            parentNode: _,
            nextSibling: b,
            setScopeId: I = fr,
            cloneNode: R,
            insertStaticContent: M
        } = e, W = (m, p, O, x = null, B = null, D = null, ae = !1, Q = null, X = !!p.dynamicChildren) => {
            if (m === p) return;
            m && !es(m, p) && (x = vt(m), At(m, B, D, !0), m = null), p.patchFlag === -2 && (X = !1, p.dynamicChildren = null);
            const {
                type: N,
                ref: H,
                shapeFlag: he
            } = p;
            switch (N) {
                case Il:
                    C(m, p, O, x);
                    break;
                case hr:
                    V(m, p, O, x);
                    break;
                case Vc:
                    m == null && q(p, O, x, ae);
                    break;
                case ut:
                    Oe(m, p, O, x, B, D, ae, Q, X);
                    break;
                default:
                    he & 1 ? se(m, p, O, x, B, D, ae, Q, X) : he & 6 ? F(m, p, O, x, B, D, ae, Q, X) : (he & 64 || he & 128) && N.process(m, p, O, x, B, D, ae, Q, X, Pt)
            }
            H != null && B && _d(H, m && m.ref, D, p || m, !p)
        }, C = (m, p, O, x) => {
            if (m == null) r(p.el = u(p.children), O, x);
            else {
                const B = p.el = m.el;
                p.children !== m.children && d(B, p.children)
            }
        }, V = (m, p, O, x) => {
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
        }, se = (m, p, O, x, B, D, ae, Q, X) => {
            ae = ae || p.type === "svg", m == null ? ce(p, O, x, B, D, ae, Q, X) : Ce(m, p, B, D, ae, Q, X)
        }, ce = (m, p, O, x, B, D, ae, Q) => {
            let X, N;
            const {
                type: H,
                props: he,
                shapeFlag: pe,
                transition: Ne,
                patchFlag: xe,
                dirs: A
            } = m;
            if (m.el && R !== void 0 && xe === -1) X = m.el = R(m.el);
            else {
                if (X = m.el = c(m.type, D, he && he.is, he), pe & 8 ? g(X, m.children) : pe & 16 && ue(m.children, X, null, x, B, D && H !== "foreignObject", ae, Q), A && Hi(m, null, x, "created"), he) {
                    for (const $ in he) $ !== "value" && !Wc($) && o(X, $, null, he[$], D, m.children, x, B, it);
                    "value" in he && o(X, "value", null, he.value), (N = he.onVnodeBeforeMount) && Er(N, x, m)
                }
                le(X, m, m.scopeId, ae, x)
            }
            A && Hi(m, null, x, "beforeMount");
            const T = (!B || B && !B.pendingBranch) && Ne && !Ne.persisted;
            T && Ne.beforeEnter(X), r(X, p, O), ((N = he && he.onVnodeMounted) || T || A) && Nn(() => {
                N && Er(N, x, m), T && Ne.enter(X), A && Hi(m, null, x, "mounted")
            }, B)
        }, le = (m, p, O, x, B) => {
            if (O && I(m, O), x)
                for (let D = 0; D < x.length; D++) I(m, x[D]);
            if (B) {
                let D = B.subTree;
                if (p === D) {
                    const ae = B.vnode;
                    le(m, ae, ae.scopeId, ae.slotScopeIds, B.parent)
                }
            }
        }, ue = (m, p, O, x, B, D, ae, Q, X = 0) => {
            for (let N = X; N < m.length; N++) {
                const H = m[N] = Q ? li(m[N]) : Sr(m[N]);
                W(null, H, p, O, x, B, D, ae, Q)
            }
        }, Ce = (m, p, O, x, B, D, ae) => {
            const Q = p.el = m.el;
            let {
                patchFlag: X,
                dynamicChildren: N,
                dirs: H
            } = p;
            X |= m.patchFlag & 16;
            const he = m.props || _t,
                pe = p.props || _t;
            let Ne;
            O && Vi(O, !1), (Ne = pe.onVnodeBeforeUpdate) && Er(Ne, O, p, m), H && Hi(p, m, O, "beforeUpdate"), O && Vi(O, !0);
            const xe = B && p.type !== "foreignObject";
            if (N ? be(m.dynamicChildren, N, Q, O, x, xe, D) : ae || Se(m, p, Q, null, O, x, xe, D, !1), X > 0) {
                if (X & 16) fe(Q, p, he, pe, O, x, B);
                else if (X & 2 && he.class !== pe.class && o(Q, "class", null, pe.class, B), X & 4 && o(Q, "style", he.style, pe.style, B), X & 8) {
                    const A = p.dynamicProps;
                    for (let T = 0; T < A.length; T++) {
                        const $ = A[T],
                            S = he[$],
                            P = pe[$];
                        (P !== S || $ === "value") && o(Q, $, S, P, B, m.children, O, x, it)
                    }
                }
                X & 1 && m.children !== p.children && g(Q, p.children)
            } else !ae && N == null && fe(Q, p, he, pe, O, x, B);
            ((Ne = pe.onVnodeUpdated) || H) && Nn(() => {
                Ne && Er(Ne, O, p, m), H && Hi(p, m, O, "updated")
            }, x)
        }, be = (m, p, O, x, B, D, ae) => {
            for (let Q = 0; Q < p.length; Q++) {
                const X = m[Q],
                    N = p[Q],
                    H = X.el && (X.type === ut || !es(X, N) || X.shapeFlag & 70) ? _(X.el) : O;
                W(X, N, H, null, x, B, D, ae, !0)
            }
        }, fe = (m, p, O, x, B, D, ae) => {
            if (O !== x) {
                for (const Q in x) {
                    if (Wc(Q)) continue;
                    const X = x[Q],
                        N = O[Q];
                    X !== N && Q !== "value" && o(m, Q, N, X, ae, p.children, B, D, it)
                }
                if (O !== _t)
                    for (const Q in O) !Wc(Q) && !(Q in x) && o(m, Q, O[Q], null, ae, p.children, B, D, it);
                "value" in x && o(m, "value", O.value, x.value)
            }
        }, Oe = (m, p, O, x, B, D, ae, Q, X) => {
            const N = p.el = m ? m.el : u(""),
                H = p.anchor = m ? m.anchor : u("");
            let {
                patchFlag: he,
                dynamicChildren: pe,
                slotScopeIds: Ne
            } = p;
            Ne && (Q = Q ? Q.concat(Ne) : Ne), m == null ? (r(N, O, x), r(H, O, x), ue(p.children, O, H, B, D, ae, Q, X)) : he > 0 && he & 64 && pe && m.dynamicChildren ? (be(m.dynamicChildren, pe, O, B, D, ae, Q), (p.key != null || B && p === B.subTree) && Mb(m, p, !0)) : Se(m, p, O, H, B, D, ae, Q, X)
        }, F = (m, p, O, x, B, D, ae, Q, X) => {
            p.slotScopeIds = Q, m == null ? p.shapeFlag & 512 ? B.ctx.activate(p, O, x, ae, X) : re(p, O, x, B, D, ae, X) : de(m, p, X)
        }, re = (m, p, O, x, B, D, ae) => {
            const Q = m.component = Y$(m, x, B);
            if (Tl(m) && (Q.ctx.renderer = Pt), q$(Q), Q.asyncDep) {
                if (B && B.registerDep(Q, Ee), !m.el) {
                    const X = Q.subTree = ft(hr);
                    V(null, X, p, O)
                }
                return
            }
            Ee(Q, m, p, O, B, D, ae)
        }, de = (m, p, O) => {
            const x = p.component = m.component;
            if (o$(m, p, O))
                if (x.asyncDep && !x.asyncResolved) {
                    me(x, p, O);
                    return
                } else x.next = p, t$(x.update), x.update();
            else p.el = m.el, x.vnode = p
        }, Ee = (m, p, O, x, B, D, ae) => {
            const Q = () => {
                    if (m.isMounted) {
                        let {
                            next: H,
                            bu: he,
                            u: pe,
                            parent: Ne,
                            vnode: xe
                        } = m, A = H, T;
                        Vi(m, !1), H ? (H.el = xe.el, me(m, H, ae)) : H = xe, he && jc(he), (T = H.props && H.props.onVnodeBeforeUpdate) && Er(T, Ne, H, xe), Vi(m, !0);
                        const $ = Ef(m),
                            S = m.subTree;
                        m.subTree = $, W(S, $, _(S.el), vt(S), m, B, D), H.el = $.el, A === null && c$(m, $.el), pe && Nn(pe, B), (T = H.props && H.props.onVnodeUpdated) && Nn(() => Er(T, Ne, H, xe), B)
                    } else {
                        let H;
                        const {
                            el: he,
                            props: pe
                        } = p, {
                            bm: Ne,
                            m: xe,
                            parent: A
                        } = m, T = Hc(p);
                        if (Vi(m, !1), Ne && jc(Ne), !T && (H = pe && pe.onVnodeBeforeMount) && Er(H, A, p), Vi(m, !0), he && Lt) {
                            const $ = () => {
                                m.subTree = Ef(m), Lt(he, m.subTree, m, B, null)
                            };
                            T ? p.type.__asyncLoader().then(() => !m.isUnmounted && $()) : $()
                        } else {
                            const $ = m.subTree = Ef(m);
                            W(null, $, O, x, m, B, D), p.el = $.el
                        }
                        if (xe && Nn(xe, B), !T && (H = pe && pe.onVnodeMounted)) {
                            const $ = p;
                            Nn(() => Er(H, A, $), B)
                        }(p.shapeFlag & 256 || A && Hc(A.vnode) && A.vnode.shapeFlag & 256) && m.a && Nn(m.a, B), m.isMounted = !0, p = O = x = null
                    }
                },
                X = m.effect = new Eh(Q, () => Ah(N), m.scope),
                N = m.update = () => X.run();
            N.id = m.uid, Vi(m, !0), N()
        }, me = (m, p, O) => {
            p.component = m;
            const x = m.vnode.props;
            m.vnode = p, m.next = null, L$(m, p.props, x, O), D$(m, p.children, O), fa(), Iv(), da()
        }, Se = (m, p, O, x, B, D, ae, Q, X = !1) => {
            const N = m && m.children,
                H = m ? m.shapeFlag : 0,
                he = p.children,
                {
                    patchFlag: pe,
                    shapeFlag: Ne
                } = p;
            if (pe > 0) {
                if (pe & 128) {
                    Fe(N, he, O, x, B, D, ae, Q, X);
                    return
                } else if (pe & 256) {
                    Me(N, he, O, x, B, D, ae, Q, X);
                    return
                }
            }
            Ne & 8 ? (H & 16 && it(N, B, D), he !== N && g(O, he)) : H & 16 ? Ne & 16 ? Fe(N, he, O, x, B, D, ae, Q, X) : it(N, B, D, !0) : (H & 8 && g(O, ""), Ne & 16 && ue(he, O, x, B, D, ae, Q, X))
        }, Me = (m, p, O, x, B, D, ae, Q, X) => {
            m = m || Gs, p = p || Gs;
            const N = m.length,
                H = p.length,
                he = Math.min(N, H);
            let pe;
            for (pe = 0; pe < he; pe++) {
                const Ne = p[pe] = X ? li(p[pe]) : Sr(p[pe]);
                W(m[pe], Ne, O, null, B, D, ae, Q, X)
            }
            N > H ? it(m, B, D, !0, !1, he) : ue(p, O, x, B, D, ae, Q, X, he)
        }, Fe = (m, p, O, x, B, D, ae, Q, X) => {
            let N = 0;
            const H = p.length;
            let he = m.length - 1,
                pe = H - 1;
            for (; N <= he && N <= pe;) {
                const Ne = m[N],
                    xe = p[N] = X ? li(p[N]) : Sr(p[N]);
                if (es(Ne, xe)) W(Ne, xe, O, null, B, D, ae, Q, X);
                else break;
                N++
            }
            for (; N <= he && N <= pe;) {
                const Ne = m[he],
                    xe = p[pe] = X ? li(p[pe]) : Sr(p[pe]);
                if (es(Ne, xe)) W(Ne, xe, O, null, B, D, ae, Q, X);
                else break;
                he--, pe--
            }
            if (N > he) {
                if (N <= pe) {
                    const Ne = pe + 1,
                        xe = Ne < H ? p[Ne].el : x;
                    for (; N <= pe;) W(null, p[N] = X ? li(p[N]) : Sr(p[N]), O, xe, B, D, ae, Q, X), N++
                }
            } else if (N > pe)
                for (; N <= he;) At(m[N], B, D, !0), N++;
            else {
                const Ne = N,
                    xe = N,
                    A = new Map;
                for (N = xe; N <= pe; N++) {
                    const Te = p[N] = X ? li(p[N]) : Sr(p[N]);
                    Te.key != null && A.set(Te.key, N)
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
                        At(Te, B, D, !0);
                        continue
                    }
                    let ht;
                    if (Te.key != null) ht = A.get(Te.key);
                    else
                        for (T = xe; T <= pe; T++)
                            if (ie[T - xe] === 0 && es(Te, p[T])) {
                                ht = T;
                                break
                            } ht === void 0 ? At(Te, B, D, !0) : (ie[ht - xe] = N + 1, ht >= ee ? ee = ht : P = !0, W(Te, p[ht], O, null, B, D, ae, Q, X), $++)
                }
                const _e = P ? F$(ie) : Gs;
                for (T = _e.length - 1, N = S - 1; N >= 0; N--) {
                    const Te = xe + N,
                        ht = p[Te],
                        ln = Te + 1 < H ? p[Te + 1].el : x;
                    ie[N] === 0 ? W(null, ht, O, ln, B, D, ae, Q, X) : P && (T < 0 || N !== _e[T] ? Je(ht, O, ln, 2) : T--)
                }
            }
        }, Je = (m, p, O, x, B = null) => {
            const {
                el: D,
                type: ae,
                transition: Q,
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
                ae.move(m, p, O, Pt);
                return
            }
            if (ae === ut) {
                r(D, p, O);
                for (let he = 0; he < X.length; he++) Je(X[he], p, O, x);
                r(m.anchor, p, O);
                return
            }
            if (ae === Vc) {
                j(m, p, O);
                return
            }
            if (x !== 2 && N & 1 && Q)
                if (x === 0) Q.beforeEnter(D), r(D, p, O), Nn(() => Q.enter(D), B);
                else {
                    const {
                        leave: he,
                        delayLeave: pe,
                        afterLeave: Ne
                    } = Q, xe = () => r(D, p, O), A = () => {
                        he(D, () => {
                            xe(), Ne && Ne()
                        })
                    };
                    pe ? pe(D, xe, A) : A()
                }
            else r(D, p, O)
        }, At = (m, p, O, x = !1, B = !1) => {
            const {
                type: D,
                props: ae,
                ref: Q,
                children: X,
                dynamicChildren: N,
                shapeFlag: H,
                patchFlag: he,
                dirs: pe
            } = m;
            if (Q != null && _d(Q, null, O, m, !0), H & 256) {
                p.ctx.deactivate(m);
                return
            }
            const Ne = H & 1 && pe,
                xe = !Hc(m);
            let A;
            if (xe && (A = ae && ae.onVnodeBeforeUnmount) && Er(A, p, m), H & 6) Xt(m.component, O, x);
            else {
                if (H & 128) {
                    m.suspense.unmount(O, x);
                    return
                }
                Ne && Hi(m, null, p, "beforeUnmount"), H & 64 ? m.type.remove(m, p, O, B, Pt, x) : N && (D !== ut || he > 0 && he & 64) ? it(N, p, O, !1, !0) : (D === ut && he & 384 || !B && H & 16) && it(X, p, O), x && Ht(m)
            }(xe && (A = ae && ae.onVnodeUnmounted) || Ne) && Nn(() => {
                A && Er(A, p, m), Ne && Hi(m, null, p, "unmounted")
            }, O)
        }, Ht = m => {
            const {
                type: p,
                el: O,
                anchor: x,
                transition: B
            } = m;
            if (p === ut) {
                It(O, x);
                return
            }
            if (p === Vc) {
                G(m);
                return
            }
            const D = () => {
                s(O), B && !B.persisted && B.afterLeave && B.afterLeave()
            };
            if (m.shapeFlag & 1 && B && !B.persisted) {
                const {
                    leave: ae,
                    delayLeave: Q
                } = B, X = () => ae(O, D);
                Q ? Q(m.el, D, X) : X()
            } else D()
        }, It = (m, p) => {
            let O;
            for (; m !== p;) O = b(m), s(m), m = O;
            s(p)
        }, Xt = (m, p, O) => {
            const {
                bum: x,
                scope: B,
                update: D,
                subTree: ae,
                um: Q
            } = m;
            x && jc(x), B.stop(), D && (D.active = !1, At(ae, m, p, O)), Q && Nn(Q, p), Nn(() => {
                m.isUnmounted = !0
            }, p), p && p.pendingBranch && !p.isUnmounted && m.asyncDep && !m.asyncResolved && m.suspenseId === p.pendingId && (p.deps--, p.deps === 0 && p.resolve())
        }, it = (m, p, O, x = !1, B = !1, D = 0) => {
            for (let ae = D; ae < m.length; ae++) At(m[ae], p, O, x, B)
        }, vt = m => m.shapeFlag & 6 ? vt(m.component.subTree) : m.shapeFlag & 128 ? m.suspense.next() : b(m.anchor || m.el), st = (m, p, O) => {
            m == null ? p._vnode && At(p._vnode, null, null, !0) : W(p._vnode || null, m, p, null, null, null, O), Iv(), vb(), p._vnode = m
        }, Pt = {
            p: W,
            um: At,
            m: Je,
            r: Ht,
            mt: re,
            mc: ue,
            pc: Se,
            pbc: be,
            n: vt,
            o: e
        };
        let kt, Lt;
        return t && ([kt, Lt] = t(Pt)), {
            render: st,
            hydrate: kt,
            createApp: M$(st, kt)
        }
    }

    function Vi({
        effect: e,
        update: t
    }, n) {
        e.allowRecurse = t.allowRecurse = n
    }

    function Mb(e, t, n = !1) {
        const r = e.children,
            s = t.children;
        if (Le(r) && Le(s))
            for (let o = 0; o < r.length; o++) {
                const c = r[o];
                let u = s[o];
                u.shapeFlag & 1 && !u.dynamicChildren && ((u.patchFlag <= 0 || u.patchFlag === 32) && (u = s[o] = li(s[o]), u.el = c.el), n || Mb(c, u))
            }
    }

    function F$(e) {
        const t = e.slice(),
            n = [0];
        let r, s, o, c, u;
        const f = e.length;
        for (r = 0; r < f; r++) {
            const d = e[r];
            if (d !== 0) {
                if (s = n[n.length - 1], e[s] < d) {
                    t[r] = s, n.push(r);
                    continue
                }
                for (o = 0, c = n.length - 1; o < c;) u = o + c >> 1, e[n[u]] < d ? o = u + 1 : c = u;
                d < e[n[o]] && (o > 0 && (t[r] = n[o - 1]), n[o] = r)
            }
        }
        for (o = n.length, c = n[o - 1]; o-- > 0;) n[o] = c, c = t[c];
        return n
    }
    const B$ = e => e.__isTeleport,
        ut = Symbol(void 0),
        Il = Symbol(void 0),
        hr = Symbol(void 0),
        Vc = Symbol(void 0),
        qa = [];
    let ur = null;

    function z(e = !1) {
        qa.push(ur = e ? null : [])
    }

    function G$() {
        qa.pop(), ur = qa[qa.length - 1] || null
    }
    let uo = 1;

    function xv(e) {
        uo += e
    }

    function xb(e) {
        return e.dynamicChildren = uo > 0 ? ur || Gs : null, G$(), uo > 0 && ur && ur.push(e), e
    }

    function Z(e, t, n, r, s, o) {
        return xb(Y(e, t, n, r, s, o, !0))
    }

    function Ln(e, t, n, r, s) {
        return xb(ft(e, t, n, r, s, !0))
    }

    function yd(e) {
        return e ? e.__v_isVNode === !0 : !1
    }

    function es(e, t) {
        return e.type === t.type && e.key === t.key
    }
    const wl = "__vInternal",
        Ub = ({
            key: e
        }) => e != null ? e : null,
        Kc = ({
            ref: e,
            ref_key: t,
            ref_for: n
        }) => e != null ? jt(e) || on(e) || Ve(e) ? {
            i: tr,
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
            key: t && Ub(t),
            ref: t && Kc(t),
            scopeId: bl,
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
        return u ? ($h(f, n), o & 128 && e.normalize(f)) : n && (f.shapeFlag |= jt(n) ? 8 : 16), uo > 0 && !c && ur && (f.patchFlag > 0 || o & 6) && f.patchFlag !== 32 && ur.push(f), f
    }
    const ft = W$;

    function W$(e, t = null, n = null, r = 0, s = null, o = !1) {
        if ((!e || e === Cb) && (e = hr), yd(e)) {
            const u = _i(e, t, !0);
            return n && $h(u, n), uo > 0 && !o && ur && (u.shapeFlag & 6 ? ur[ur.indexOf(e)] = u : ur.push(u)), u.patchFlag |= -2, u
        }
        if (Z$(e) && (e = e.__vccOpts), t) {
            t = j$(t);
            let {
                class: u,
                style: f
            } = t;
            u && !jt(u) && (t.class = Ye(u)), yt(f) && (ob(f) && !Le(f) && (f = en({}, f)), t.style = la(f))
        }
        const c = jt(e) ? 1 : l$(e) ? 128 : B$(e) ? 64 : yt(e) ? 4 : Ve(e) ? 2 : 0;
        return Y(e, t, n, r, s, c, o, !0)
    }

    function j$(e) {
        return e ? ob(e) || wl in e ? en({}, e) : e : null
    }

    function _i(e, t, n = !1) {
        const {
            props: r,
            ref: s,
            patchFlag: o,
            children: c
        } = e, u = t ? Ph(r || {}, t) : r;
        return {
            __v_isVNode: !0,
            __v_skip: !0,
            type: e.type,
            props: u,
            key: u && Ub(u),
            ref: t && t.ref ? n && s ? Le(s) ? s.concat(Kc(t)) : [s, Kc(t)] : Kc(t) : s,
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
            ssContent: e.ssContent && _i(e.ssContent),
            ssFallback: e.ssFallback && _i(e.ssFallback),
            el: e.el,
            anchor: e.anchor
        }
    }

    function Gn(e = " ", t = 0) {
        return ft(Il, null, e, t)
    }

    function H$(e, t) {
        const n = ft(Vc, null, e);
        return n.staticCount = t, n
    }

    function we(e = "", t = !1) {
        return t ? (z(), Ln(hr, null, e)) : ft(hr, null, e)
    }

    function Sr(e) {
        return e == null || typeof e == "boolean" ? ft(hr) : Le(e) ? ft(ut, null, e.slice()) : typeof e == "object" ? li(e) : ft(Il, null, String(e))
    }

    function li(e) {
        return e.el === null || e.memo ? e : _i(e)
    }

    function $h(e, t) {
        let n = 0;
        const {
            shapeFlag: r
        } = e;
        if (t == null) t = null;
        else if (Le(t)) n = 16;
        else if (typeof t == "object")
            if (r & 65) {
                const s = t.default;
                s && (s._c && (s._d = !1), $h(e, s()), s._c && (s._d = !0));
                return
            } else {
                n = 32;
                const s = t._;
                !s && !(wl in t) ? t._ctx = tr : s === 3 && tr && (tr.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024))
            }
        else Ve(t) ? (t = {
            default: t,
            _ctx: tr
        }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [Gn(t)]) : n = 8);
        e.children = t, e.shapeFlag |= n
    }

    function Ph(...e) {
        const t = {};
        for (let n = 0; n < e.length; n++) {
            const r = e[n];
            for (const s in r)
                if (s === "class") t.class !== r.class && (t.class = Ye([t.class, r.class]));
                else if (s === "style") t.style = la([t.style, r.style]);
            else if (gl(s)) {
                const o = t[s],
                    c = r[s];
                c && o !== c && !(Le(o) && o.includes(c)) && (t[s] = o ? [].concat(o, c) : c)
            } else s !== "" && (t[s] = r[s])
        }
        return t
    }

    function Er(e, t, n, r = null) {
        nr(e, t, 7, [n, r])
    }
    const V$ = kb();
    let K$ = 0;

    function Y$(e, t, n) {
        const r = e.type,
            s = (t ? t.appContext : e.appContext) || V$,
            o = {
                uid: K$++,
                vnode: e,
                type: r,
                parent: t,
                appContext: s,
                root: null,
                next: null,
                subTree: null,
                effect: null,
                update: null,
                scope: new zy(!0),
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
                propsOptions: Lb(r, s),
                emitsOptions: _b(r, s),
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
        }, o.root = t ? t.root : o, o.emit = i$.bind(null, o), e.ce && e.ce(o), o
    }
    let Zt = null;
    const yi = () => Zt || tr,
        ea = e => {
            Zt = e, e.scope.on()
        },
        as = () => {
            Zt && Zt.scope.off(), Zt = null
        };

    function Fb(e) {
        return e.vnode.shapeFlag & 4
    }
    let fo = !1;

    function q$(e, t = !1) {
        fo = t;
        const {
            props: n,
            children: r
        } = e.vnode, s = Fb(e);
        N$(e, n, s, t), P$(e, r);
        const o = s ? z$(e, t) : void 0;
        return fo = !1, o
    }

    function z$(e, t) {
        const n = e.type;
        e.accessCache = Object.create(null), e.proxy = cb(new Proxy(e.ctx, O$));
        const {
            setup: r
        } = n;
        if (r) {
            const s = e.setupContext = r.length > 1 ? J$(e) : null;
            ea(e), fa();
            const o = gi(r, e, 0, [e.props, s]);
            if (da(), as(), Ky(o)) {
                if (o.then(as, as), t) return o.then(c => {
                    Uv(e, c, t)
                }).catch(c => {
                    _l(c, e, 0)
                });
                e.asyncDep = o
            } else Uv(e, o, t)
        } else Bb(e, t)
    }

    function Uv(e, t, n) {
        Ve(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : yt(t) && (e.setupState = db(t)), Bb(e, n)
    }
    let Fv;

    function Bb(e, t, n) {
        const r = e.type;
        if (!e.render) {
            if (!t && Fv && !r.render) {
                const s = r.template || Nh(e).template;
                if (s) {
                    const {
                        isCustomElement: o,
                        compilerOptions: c
                    } = e.appContext.config, {
                        delimiters: u,
                        compilerOptions: f
                    } = r, d = en(en({
                        isCustomElement: o,
                        delimiters: u
                    }, c), f);
                    r.render = Fv(s, d)
                }
            }
            e.render = r.render || fr
        }
        ea(e), fa(), A$(e), da(), as()
    }

    function X$(e) {
        return new Proxy(e.attrs, {
            get(t, n) {
                return Wn(e, "get", "$attrs"), t[n]
            }
        })
    }

    function J$(e) {
        const t = r => {
            e.exposed = r || {}
        };
        let n;
        return {
            get attrs() {
                return n || (n = X$(e))
            },
            slots: e.slots,
            emit: e.emit,
            expose: t
        }
    }

    function Cl(e) {
        if (e.exposed) return e.exposeProxy || (e.exposeProxy = new Proxy(db(cb(e.exposed)), {
            get(t, n) {
                if (n in t) return t[n];
                if (n in tl) return tl[n](e)
            }
        }))
    }

    function Q$(e, t = !0) {
        return Ve(e) ? e.displayName || e.name : e.name || t && e.__name
    }

    function Z$(e) {
        return Ve(e) && "__vccOpts" in e
    }
    const On = (e, t) => QL(e, t, fo);

    function Ir(e, t, n) {
        const r = arguments.length;
        return r === 2 ? yt(t) && !Le(t) ? yd(t) ? ft(e, null, [t]) : ft(e, t) : ft(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && yd(n) && (n = [n]), ft(e, t, n))
    }
    const eP = "3.2.39",
        tP = "http://www.w3.org/2000/svg",
        ts = typeof document < "u" ? document : null,
        Bv = ts && ts.createElement("template"),
        nP = {
            insert: (e, t, n) => {
                t.insertBefore(e, n || null)
            },
            remove: e => {
                const t = e.parentNode;
                t && t.removeChild(e)
            },
            createElement: (e, t, n, r) => {
                const s = t ? ts.createElementNS(tP, e) : ts.createElement(e, n ? {
                    is: n
                } : void 0);
                return e === "select" && r && r.multiple != null && s.setAttribute("multiple", r.multiple), s
            },
            createText: e => ts.createTextNode(e),
            createComment: e => ts.createComment(e),
            setText: (e, t) => {
                e.nodeValue = t
            },
            setElementText: (e, t) => {
                e.textContent = t
            },
            parentNode: e => e.parentNode,
            nextSibling: e => e.nextSibling,
            querySelector: e => ts.querySelector(e),
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
                    Bv.innerHTML = r ? `<svg>${e}</svg>` : e;
                    const u = Bv.content;
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

    function rP(e, t, n) {
        const r = e._vtc;
        r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t
    }

    function iP(e, t, n) {
        const r = e.style,
            s = jt(n);
        if (n && !s) {
            for (const o in n) bd(r, o, n[o]);
            if (t && !jt(t))
                for (const o in t) n[o] == null && bd(r, o, "")
        } else {
            const o = r.display;
            s ? t !== n && (r.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (r.display = o)
        }
    }
    const Gv = /\s*!important$/;

    function bd(e, t, n) {
        if (Le(n)) n.forEach(r => bd(e, t, r));
        else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
        else {
            const r = sP(e, t);
            Gv.test(n) ? e.setProperty(hs(r), n.replace(Gv, ""), "important") : e[r] = n
        }
    }
    const Wv = ["Webkit", "Moz", "ms"],
        yf = {};

    function sP(e, t) {
        const n = yf[t];
        if (n) return n;
        let r = wr(t);
        if (r !== "filter" && r in e) return yf[t] = r;
        r = vl(r);
        for (let s = 0; s < Wv.length; s++) {
            const o = Wv[s] + r;
            if (o in e) return yf[t] = o
        }
        return t
    }
    const jv = "http://www.w3.org/1999/xlink";

    function aP(e, t, n, r, s) {
        if (r && t.startsWith("xlink:")) n == null ? e.removeAttributeNS(jv, t.slice(6, t.length)) : e.setAttributeNS(jv, t, n);
        else {
            const o = aL(t);
            n == null || o && !Hy(n) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : n)
        }
    }

    function oP(e, t, n, r, s, o, c) {
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
            f === "boolean" ? n = Hy(n) : n == null && f === "string" ? (n = "", u = !0) : f === "number" && (n = 0, u = !0)
        }
        try {
            e[t] = n
        } catch {}
        u && e.removeAttribute(t)
    }
    const [Gb, cP] = (() => {
        let e = Date.now,
            t = !1;
        if (typeof window < "u") {
            Date.now() > document.createEvent("Event").timeStamp && (e = performance.now.bind(performance));
            const n = navigator.userAgent.match(/firefox\/(\d+)/i);
            t = !!(n && Number(n[1]) <= 53)
        }
        return [e, t]
    })();
    let Td = 0;
    const lP = Promise.resolve(),
        uP = () => {
            Td = 0
        },
        fP = () => Td || (lP.then(uP), Td = Gb());

    function Vr(e, t, n, r) {
        e.addEventListener(t, n, r)
    }

    function dP(e, t, n, r) {
        e.removeEventListener(t, n, r)
    }

    function hP(e, t, n, r, s = null) {
        const o = e._vei || (e._vei = {}),
            c = o[t];
        if (r && c) c.value = r;
        else {
            const [u, f] = pP(t);
            if (r) {
                const d = o[t] = gP(r, s);
                Vr(e, u, d, f)
            } else c && (dP(e, u, c, f), o[t] = void 0)
        }
    }
    const Hv = /(?:Once|Passive|Capture)$/;

    function pP(e) {
        let t;
        if (Hv.test(e)) {
            t = {};
            let r;
            for (; r = e.match(Hv);) e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0
        }
        return [e[2] === ":" ? e.slice(3) : hs(e.slice(2)), t]
    }

    function gP(e, t) {
        const n = r => {
            const s = r.timeStamp || Gb();
            (cP || s >= n.attached - 1) && nr(mP(r, n.value), t, 5, [r])
        };
        return n.value = e, n.attached = fP(), n
    }

    function mP(e, t) {
        if (Le(t)) {
            const n = e.stopImmediatePropagation;
            return e.stopImmediatePropagation = () => {
                n.call(e), e._stopped = !0
            }, t.map(r => s => !s._stopped && r && r(s))
        } else return t
    }
    const Vv = /^on[a-z]/,
        vP = (e, t, n, r, s = !1, o, c, u, f) => {
            t === "class" ? rP(e, r, s) : t === "style" ? iP(e, n, r) : gl(t) ? ph(t) || hP(e, t, n, r, c) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : EP(e, t, r, s)) ? oP(e, t, r, o, c, u, f) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), aP(e, t, r, s))
        };

    function EP(e, t, n, r) {
        return r ? !!(t === "innerHTML" || t === "textContent" || t in e && Vv.test(t) && Ve(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || Vv.test(t) && jt(n) ? !1 : t in e
    }
    const si = "transition",
        Ba = "animation",
        yo = (e, {
            slots: t
        }) => Ir(Tb, jb(e), t);
    yo.displayName = "Transition";
    const Wb = {
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
        _P = yo.props = en({}, Tb.props, Wb),
        Ki = (e, t = []) => {
            Le(e) ? e.forEach(n => n(...t)) : e && e(...t)
        },
        Kv = e => e ? Le(e) ? e.some(t => t.length > 1) : e.length > 1 : !1;

    function jb(e) {
        const t = {};
        for (const fe in e) fe in Wb || (t[fe] = e[fe]);
        if (e.css === !1) return t;
        const {
            name: n = "v",
            type: r,
            duration: s,
            enterFromClass: o = `${n}-enter-from`,
            enterActiveClass: c = `${n}-enter-active`,
            enterToClass: u = `${n}-enter-to`,
            appearFromClass: f = o,
            appearActiveClass: d = c,
            appearToClass: g = u,
            leaveFromClass: _ = `${n}-leave-from`,
            leaveActiveClass: b = `${n}-leave-active`,
            leaveToClass: I = `${n}-leave-to`
        } = e, R = yP(s), M = R && R[0], W = R && R[1], {
            onBeforeEnter: C,
            onEnter: V,
            onEnterCancelled: q,
            onLeave: j,
            onLeaveCancelled: G,
            onBeforeAppear: se = C,
            onAppear: ce = V,
            onAppearCancelled: le = q
        } = t, ue = (fe, Oe, F) => {
            ci(fe, Oe ? g : u), ci(fe, Oe ? d : c), F && F()
        }, Ce = (fe, Oe) => {
            fe._isLeaving = !1, ci(fe, _), ci(fe, I), ci(fe, b), Oe && Oe()
        }, be = fe => (Oe, F) => {
            const re = fe ? ce : V,
                de = () => ue(Oe, fe, F);
            Ki(re, [Oe, de]), Yv(() => {
                ci(Oe, fe ? f : o), Gr(Oe, fe ? g : u), Kv(re) || qv(Oe, r, M, de)
            })
        };
        return en(t, {
            onBeforeEnter(fe) {
                Ki(C, [fe]), Gr(fe, o), Gr(fe, c)
            },
            onBeforeAppear(fe) {
                Ki(se, [fe]), Gr(fe, f), Gr(fe, d)
            },
            onEnter: be(!1),
            onAppear: be(!0),
            onLeave(fe, Oe) {
                fe._isLeaving = !0;
                const F = () => Ce(fe, Oe);
                Gr(fe, _), Vb(), Gr(fe, b), Yv(() => {
                    !fe._isLeaving || (ci(fe, _), Gr(fe, I), Kv(j) || qv(fe, r, W, F))
                }), Ki(j, [fe, F])
            },
            onEnterCancelled(fe) {
                ue(fe, !1), Ki(q, [fe])
            },
            onAppearCancelled(fe) {
                ue(fe, !0), Ki(le, [fe])
            },
            onLeaveCancelled(fe) {
                Ce(fe), Ki(G, [fe])
            }
        })
    }

    function yP(e) {
        if (e == null) return null;
        if (yt(e)) return [bf(e.enter), bf(e.leave)]; {
            const t = bf(e);
            return [t, t]
        }
    }

    function bf(e) {
        return io(e)
    }

    function Gr(e, t) {
        t.split(/\s+/).forEach(n => n && e.classList.add(n)), (e._vtc || (e._vtc = new Set)).add(t)
    }

    function ci(e, t) {
        t.split(/\s+/).forEach(r => r && e.classList.remove(r));
        const {
            _vtc: n
        } = e;
        n && (n.delete(t), n.size || (e._vtc = void 0))
    }

    function Yv(e) {
        requestAnimationFrame(() => {
            requestAnimationFrame(e)
        })
    }
    let bP = 0;

    function qv(e, t, n, r) {
        const s = e._endId = ++bP,
            o = () => {
                s === e._endId && r()
            };
        if (n) return setTimeout(o, n);
        const {
            type: c,
            timeout: u,
            propCount: f
        } = Hb(e, t);
        if (!c) return r();
        const d = c + "end";
        let g = 0;
        const _ = () => {
                e.removeEventListener(d, b), o()
            },
            b = I => {
                I.target === e && ++g >= f && _()
            };
        setTimeout(() => {
            g < f && _()
        }, u + 1), e.addEventListener(d, b)
    }

    function Hb(e, t) {
        const n = window.getComputedStyle(e),
            r = R => (n[R] || "").split(", "),
            s = r(si + "Delay"),
            o = r(si + "Duration"),
            c = zv(s, o),
            u = r(Ba + "Delay"),
            f = r(Ba + "Duration"),
            d = zv(u, f);
        let g = null,
            _ = 0,
            b = 0;
        t === si ? c > 0 && (g = si, _ = c, b = o.length) : t === Ba ? d > 0 && (g = Ba, _ = d, b = f.length) : (_ = Math.max(c, d), g = _ > 0 ? c > d ? si : Ba : null, b = g ? g === si ? o.length : f.length : 0);
        const I = g === si && /\b(transform|all)(,|$)/.test(n[si + "Property"]);
        return {
            type: g,
            timeout: _,
            propCount: b,
            hasTransform: I
        }
    }

    function zv(e, t) {
        for (; e.length < t.length;) e = e.concat(e);
        return Math.max(...t.map((n, r) => Xv(n) + Xv(e[r])))
    }

    function Xv(e) {
        return Number(e.slice(0, -1).replace(",", ".")) * 1e3
    }

    function Vb() {
        return document.body.offsetHeight
    }
    const Kb = new WeakMap,
        Yb = new WeakMap,
        TP = {
            name: "TransitionGroup",
            props: en({}, _P, {
                tag: String,
                moveClass: String
            }),
            setup(e, {
                slots: t
            }) {
                const n = yi(),
                    r = bb();
                let s, o;
                return Ib(() => {
                    if (!s.length) return;
                    const c = e.moveClass || `${e.name||"v"}-move`;
                    if (!IP(s[0].el, n.vnode.el, c)) return;
                    s.forEach(SP), s.forEach(OP);
                    const u = s.filter(AP);
                    Vb(), u.forEach(f => {
                        const d = f.el,
                            g = d.style;
                        Gr(d, c), g.transform = g.webkitTransform = g.transitionDuration = "";
                        const _ = d._moveCb = b => {
                            b && b.target !== d || (!b || /transform$/.test(b.propertyName)) && (d.removeEventListener("transitionend", _), d._moveCb = null, ci(d, c))
                        };
                        d.addEventListener("transitionend", _)
                    })
                }), () => {
                    const c = ot(e),
                        u = jb(c);
                    let f = c.tag || ut;
                    s = o, o = t.default ? wh(t.default()) : [];
                    for (let d = 0; d < o.length; d++) {
                        const g = o[d];
                        g.key != null && lo(g, co(g, u, r, n))
                    }
                    if (s)
                        for (let d = 0; d < s.length; d++) {
                            const g = s[d];
                            lo(g, co(g, u, r, n)), Kb.set(g, g.el.getBoundingClientRect())
                        }
                    return ft(f, null, o)
                }
            }
        },
        qb = TP;

    function SP(e) {
        const t = e.el;
        t._moveCb && t._moveCb(), t._enterCb && t._enterCb()
    }

    function OP(e) {
        Yb.set(e, e.el.getBoundingClientRect())
    }

    function AP(e) {
        const t = Kb.get(e),
            n = Yb.get(e),
            r = t.left - n.left,
            s = t.top - n.top;
        if (r || s) {
            const o = e.el.style;
            return o.transform = o.webkitTransform = `translate(${r}px,${s}px)`, o.transitionDuration = "0s", e
        }
    }

    function IP(e, t, n) {
        const r = e.cloneNode();
        e._vtc && e._vtc.forEach(c => {
            c.split(/\s+/).forEach(u => u && r.classList.remove(u))
        }), n.split(/\s+/).forEach(c => c && r.classList.add(c)), r.style.display = "none";
        const s = t.nodeType === 1 ? t : t.parentNode;
        s.appendChild(r);
        const {
            hasTransform: o
        } = Hb(r);
        return s.removeChild(r), o
    }
    const bi = e => {
        const t = e.props["onUpdate:modelValue"] || !1;
        return Le(t) ? n => jc(t, n) : t
    };

    function wP(e) {
        e.target.composing = !0
    }

    function Jv(e) {
        const t = e.target;
        t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")))
    }
    const Qv = {
            created(e, {
                modifiers: {
                    lazy: t,
                    trim: n,
                    number: r
                }
            }, s) {
                e._assign = bi(s);
                const o = r || s.props && s.props.type === "number";
                Vr(e, t ? "change" : "input", c => {
                    if (c.target.composing) return;
                    let u = e.value;
                    n && (u = u.trim()), o && (u = io(u)), e._assign(u)
                }), n && Vr(e, "change", () => {
                    e.value = e.value.trim()
                }), t || (Vr(e, "compositionstart", wP), Vr(e, "compositionend", Jv), Vr(e, "change", Jv))
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
                if (e._assign = bi(o), e.composing || document.activeElement === e && e.type !== "range" && (n || r && e.value.trim() === t || (s || e.type === "number") && io(e.value) === t)) return;
                const c = t == null ? "" : t;
                e.value !== c && (e.value = c)
            }
        },
        CP = {
            deep: !0,
            created(e, t, n) {
                e._assign = bi(n), Vr(e, "change", () => {
                    const r = e._modelValue,
                        s = ta(e),
                        o = e.checked,
                        c = e._assign;
                    if (Le(r)) {
                        const u = hh(r, s),
                            f = u !== -1;
                        if (o && !f) c(r.concat(s));
                        else if (!o && f) {
                            const d = [...r];
                            d.splice(u, 1), c(d)
                        }
                    } else if (ua(r)) {
                        const u = new Set(r);
                        o ? u.add(s) : u.delete(s), c(u)
                    } else c(Xb(e, o))
                })
            },
            mounted: Zv,
            beforeUpdate(e, t, n) {
                e._assign = bi(n), Zv(e, t, n)
            }
        };

    function Zv(e, {
        value: t,
        oldValue: n
    }, r) {
        e._modelValue = t, Le(t) ? e.checked = hh(t, r.props.value) > -1 : ua(t) ? e.checked = t.has(r.props.value) : t !== n && (e.checked = ds(t, Xb(e, !0)))
    }
    const eE = {
            created(e, {
                value: t
            }, n) {
                e.checked = ds(t, n.props.value), e._assign = bi(n), Vr(e, "change", () => {
                    e._assign(ta(e))
                })
            },
            beforeUpdate(e, {
                value: t,
                oldValue: n
            }, r) {
                e._assign = bi(r), t !== n && (e.checked = ds(t, r.props.value))
            }
        },
        zb = {
            deep: !0,
            created(e, {
                value: t,
                modifiers: {
                    number: n
                }
            }, r) {
                const s = ua(t);
                Vr(e, "change", () => {
                    const o = Array.prototype.filter.call(e.options, c => c.selected).map(c => n ? io(ta(c)) : ta(c));
                    e._assign(e.multiple ? s ? new Set(o) : o : o[0])
                }), e._assign = bi(r)
            },
            mounted(e, {
                value: t
            }) {
                tE(e, t)
            },
            beforeUpdate(e, t, n) {
                e._assign = bi(n)
            },
            updated(e, {
                value: t
            }) {
                tE(e, t)
            }
        };

    function tE(e, t) {
        const n = e.multiple;
        if (!(n && !Le(t) && !ua(t))) {
            for (let r = 0, s = e.options.length; r < s; r++) {
                const o = e.options[r],
                    c = ta(o);
                if (n) Le(t) ? o.selected = hh(t, c) > -1 : o.selected = t.has(c);
                else if (ds(ta(o), t)) {
                    e.selectedIndex !== r && (e.selectedIndex = r);
                    return
                }
            }!n && e.selectedIndex !== -1 && (e.selectedIndex = -1)
        }
    }

    function ta(e) {
        return "_value" in e ? e._value : e.value
    }

    function Xb(e, t) {
        const n = t ? "_trueValue" : "_falseValue";
        return n in e ? e[n] : t
    }
    const RP = ["ctrl", "shift", "alt", "meta"],
        NP = {
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
            exact: (e, t) => RP.some(n => e[`${n}Key`] && !t.includes(n))
        },
        Gt = (e, t) => (n, ...r) => {
            for (let s = 0; s < t.length; s++) {
                const o = NP[t[s]];
                if (o && o(n, t)) return
            }
            return e(n, ...r)
        },
        LP = {
            esc: "escape",
            space: " ",
            up: "arrow-up",
            left: "arrow-left",
            right: "arrow-right",
            down: "arrow-down",
            delete: "backspace"
        },
        os = (e, t) => n => {
            if (!("key" in n)) return;
            const r = hs(n.key);
            if (t.some(s => s === r || LP[s] === r)) return e(n)
        },
        $P = en({
            patchProp: vP
        }, nP);
    let nE;

    function PP() {
        return nE || (nE = x$($P))
    }
    const DP = (...e) => {
        const t = PP().createApp(...e),
            {
                mount: n
            } = t;
        return t.mount = r => {
            const s = kP(r);
            if (!s) return;
            const o = t._component;
            !Ve(o) && !o.render && !o.template && (o.template = s.innerHTML), s.innerHTML = "";
            const c = n(s, !1, s instanceof SVGElement);
            return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), c
        }, t
    };

    function kP(e) {
        return jt(e) ? document.querySelector(e) : e
    }
    /*!
     * shared v9.2.2
     * (c) 2022 kazuya kawaguchi
     * Released under the MIT License.
     */
    const Sd = typeof window < "u",
        MP = typeof Symbol == "function" && typeof Symbol.toStringTag == "symbol",
        Ai = e => MP ? Symbol(e) : e,
        xP = (e, t, n) => UP({
            l: e,
            k: t,
            s: n
        }),
        UP = e => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"),
        Yt = e => typeof e == "number" && isFinite(e),
        FP = e => kh(e) === "[object Date]",
        Ti = e => kh(e) === "[object RegExp]",
        Rl = e => Ge(e) && Object.keys(e).length === 0;

    function BP(e, t) {
        typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack))
    }
    const cn = Object.assign;

    function rE(e) {
        return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
    }
    const GP = Object.prototype.hasOwnProperty;

    function Dh(e, t) {
        return GP.call(e, t)
    }
    const St = Array.isArray,
        Ut = e => typeof e == "function",
        ve = e => typeof e == "string",
        tt = e => typeof e == "boolean",
        Ot = e => e !== null && typeof e == "object",
        Jb = Object.prototype.toString,
        kh = e => Jb.call(e),
        Ge = e => kh(e) === "[object Object]",
        WP = e => e == null ? "" : St(e) || Ge(e) && e.toString === Jb ? JSON.stringify(e, null, 2) : String(e);
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

    function Nl(e, t, n = {}) {
        const {
            domain: r,
            messages: s,
            args: o
        } = n, c = e, u = new SyntaxError(String(c));
        return u.code = e, t && (u.location = t), u.domain = r, u
    }

    function jP(e) {
        throw e
    }

    function HP(e, t, n) {
        return {
            line: e,
            column: t,
            offset: n
        }
    }

    function Od(e, t, n) {
        const r = {
            start: e,
            end: t
        };
        return n != null && (r.source = n), r
    }
    const Fr = " ",
        VP = "\r",
        Sn = `
`,
        KP = String.fromCharCode(8232),
        YP = String.fromCharCode(8233);

    function qP(e) {
        const t = e;
        let n = 0,
            r = 1,
            s = 1,
            o = 0;
        const c = ce => t[ce] === VP && t[ce + 1] === Sn,
            u = ce => t[ce] === Sn,
            f = ce => t[ce] === YP,
            d = ce => t[ce] === KP,
            g = ce => c(ce) || u(ce) || f(ce) || d(ce),
            _ = () => n,
            b = () => r,
            I = () => s,
            R = () => o,
            M = ce => c(ce) || f(ce) || d(ce) ? Sn : t[ce],
            W = () => M(n),
            C = () => M(n + o);

        function V() {
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
            for (; ce !== n;) V();
            o = 0
        }
        return {
            index: _,
            line: b,
            column: I,
            peekOffset: R,
            charAt: M,
            currentChar: W,
            currentPeek: C,
            next: V,
            peek: q,
            reset: j,
            resetPeek: G,
            skipToPeek: se
        }
    }
    const ai = void 0,
        iE = "'",
        zP = "tokenizer";

    function XP(e, t = {}) {
        const n = t.location !== !1,
            r = qP(e),
            s = () => r.index(),
            o = () => HP(r.line(), r.column(), r.index()),
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
            d = () => f,
            {
                onError: g
            } = t;

        function _(m, p, O, ...x) {
            const B = d();
            if (p.column += O, p.offset += O, g) {
                const D = Od(B.startLoc, p),
                    ae = Nl(m, D, {
                        domain: zP,
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
            return n && (x.loc = Od(m.startLoc, m.endLoc)), O != null && (x.value = O), x
        }
        const I = m => b(m, 14);

        function R(m, p) {
            return m.currentChar() === p ? (m.next(), p) : (_(at.EXPECTED_TOKEN, o(), 0, p), "")
        }

        function M(m) {
            let p = "";
            for (; m.currentPeek() === Fr || m.currentPeek() === Sn;) p += m.currentPeek(), m.peek();
            return p
        }

        function W(m) {
            const p = M(m);
            return m.skipToPeek(), p
        }

        function C(m) {
            if (m === ai) return !1;
            const p = m.charCodeAt(0);
            return p >= 97 && p <= 122 || p >= 65 && p <= 90 || p === 95
        }

        function V(m) {
            if (m === ai) return !1;
            const p = m.charCodeAt(0);
            return p >= 48 && p <= 57
        }

        function q(m, p) {
            const {
                currentType: O
            } = p;
            if (O !== 2) return !1;
            M(m);
            const x = C(m.currentPeek());
            return m.resetPeek(), x
        }

        function j(m, p) {
            const {
                currentType: O
            } = p;
            if (O !== 2) return !1;
            M(m);
            const x = m.currentPeek() === "-" ? m.peek() : m.currentPeek(),
                B = V(x);
            return m.resetPeek(), B
        }

        function G(m, p) {
            const {
                currentType: O
            } = p;
            if (O !== 2) return !1;
            M(m);
            const x = m.currentPeek() === iE;
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
            const x = C(m.currentPeek());
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
                    const D = m.currentPeek();
                    return D === "{" ? C(m.peek()) : D === "@" || D === "%" || D === "|" || D === ":" || D === "." || D === Fr || !D ? !1 : D === Sn ? (m.peek(), x()) : C(D)
                },
                B = x();
            return m.resetPeek(), B
        }

        function Ce(m) {
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
            const O = (B = !1, D = "", ae = !1) => {
                    const Q = m.currentPeek();
                    return Q === "{" ? D === "%" ? !1 : B : Q === "@" || !Q ? D === "%" ? !0 : B : Q === "%" ? (m.peek(), O(B, "%", !0)) : Q === "|" ? D === "%" || ae ? !0 : !(D === Fr || D === Sn) : Q === Fr ? (m.peek(), O(!0, Fr, ae)) : Q === Sn ? (m.peek(), O(!0, Sn, ae)) : !0
                },
                x = O();
            return p && m.resetPeek(), x
        }

        function Oe(m, p) {
            const O = m.currentChar();
            return O === ai ? ai : p(O) ? (m.next(), O) : null
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

        function Ee(m) {
            let p = "",
                O = "";
            for (; p = re(m);) O += p;
            return O
        }

        function me(m) {
            W(m);
            const p = m.currentChar();
            return p !== "%" && _(at.EXPECTED_TOKEN, o(), 0, p), m.next(), "%"
        }

        function Se(m) {
            let p = "";
            for (;;) {
                const O = m.currentChar();
                if (O === "{" || O === "}" || O === "@" || O === "|" || !O) break;
                if (O === "%")
                    if (fe(m)) p += O, m.next();
                    else break;
                else if (O === Fr || O === Sn)
                    if (fe(m)) p += O, m.next();
                    else {
                        if (Ce(m)) break;
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
            return m.currentChar() === ai && _(at.UNTERMINATED_CLOSING_BRACE, o(), 0), O
        }

        function Fe(m) {
            W(m);
            let p = "";
            return m.currentChar() === "-" ? (m.next(), p += `-${Ee(m)}`) : p += Ee(m), m.currentChar() === ai && _(at.UNTERMINATED_CLOSING_BRACE, o(), 0), p
        }

        function Je(m) {
            W(m), R(m, "'");
            let p = "",
                O = "";
            const x = D => D !== iE && D !== Sn;
            for (; p = Oe(m, x);) p === "\\" ? O += At(m) : O += p;
            const B = m.currentChar();
            return B === Sn || B === ai ? (_(at.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, o(), 0), B === Sn && (m.next(), R(m, "'")), O) : (R(m, "'"), O)
        }

        function At(m) {
            const p = m.currentChar();
            switch (p) {
                case "\\":
                case "'":
                    return m.next(), `\\${p}`;
                case "u":
                    return Ht(m, p, 4);
                case "U":
                    return Ht(m, p, 6);
                default:
                    return _(at.UNKNOWN_ESCAPE_SEQUENCE, o(), 0, p), ""
            }
        }

        function Ht(m, p, O) {
            R(m, p);
            let x = "";
            for (let B = 0; B < O; B++) {
                const D = de(m);
                if (!D) {
                    _(at.INVALID_UNICODE_ESCAPE_SEQUENCE, o(), 0, `\\${p}${x}${m.currentChar()}`);
                    break
                }
                x += D
            }
            return `\\${p}${x}`
        }

        function It(m) {
            W(m);
            let p = "",
                O = "";
            const x = B => B !== "{" && B !== "}" && B !== Fr && B !== Sn;
            for (; p = Oe(m, x);) O += p;
            return O
        }

        function Xt(m) {
            let p = "",
                O = "";
            for (; p = F(m);) O += p;
            return O
        }

        function it(m) {
            const p = (O = !1, x) => {
                const B = m.currentChar();
                return B === "{" || B === "%" || B === "@" || B === "|" || !B || B === Fr ? x : B === Sn ? (x += B, m.next(), p(O, x)) : (x += B, m.next(), p(!0, x))
            };
            return p(!1, "")
        }

        function vt(m) {
            W(m);
            const p = R(m, "|");
            return W(m), p
        }

        function st(m, p) {
            let O = null;
            switch (m.currentChar()) {
                case "{":
                    return p.braceNest >= 1 && _(at.NOT_ALLOW_NEST_PLACEHOLDER, o(), 0), m.next(), O = b(p, 2, "{"), W(m), p.braceNest++, O;
                case "}":
                    return p.braceNest > 0 && p.currentType === 2 && _(at.EMPTY_PLACEHOLDER, o(), 0), m.next(), O = b(p, 3, "}"), p.braceNest--, p.braceNest > 0 && W(m), p.inLinked && p.braceNest === 0 && (p.inLinked = !1), O;
                case "@":
                    return p.braceNest > 0 && _(at.UNTERMINATED_CLOSING_BRACE, o(), 0), O = Pt(m, p) || I(p), p.braceNest = 0, O;
                default:
                    let B = !0,
                        D = !0,
                        ae = !0;
                    if (Ce(m)) return p.braceNest > 0 && _(at.UNTERMINATED_CLOSING_BRACE, o(), 0), O = b(p, 1, vt(m)), p.braceNest = 0, p.inLinked = !1, O;
                    if (p.braceNest > 0 && (p.currentType === 5 || p.currentType === 6 || p.currentType === 7)) return _(at.UNTERMINATED_CLOSING_BRACE, o(), 0), p.braceNest = 0, kt(m, p);
                    if (B = q(m, p)) return O = b(p, 5, Me(m)), W(m), O;
                    if (D = j(m, p)) return O = b(p, 6, Fe(m)), W(m), O;
                    if (ae = G(m, p)) return O = b(p, 7, Je(m)), W(m), O;
                    if (!B && !D && !ae) return O = b(p, 13, It(m)), _(at.INVALID_TOKEN_IN_PLACEHOLDER, o(), 0, O.value), W(m), O;
                    break
            }
            return O
        }

        function Pt(m, p) {
            const {
                currentType: O
            } = p;
            let x = null;
            const B = m.currentChar();
            switch ((O === 8 || O === 9 || O === 12 || O === 10) && (B === Sn || B === Fr) && _(at.INVALID_LINKED_FORMAT, o(), 0), B) {
                case "@":
                    return m.next(), x = b(p, 8, "@"), p.inLinked = !0, x;
                case ".":
                    return W(m), m.next(), b(p, 9, ".");
                case ":":
                    return W(m), m.next(), b(p, 10, ":");
                default:
                    return Ce(m) ? (x = b(p, 1, vt(m)), p.braceNest = 0, p.inLinked = !1, x) : se(m, p) || le(m, p) ? (W(m), Pt(m, p)) : ce(m, p) ? (W(m), b(p, 12, Xt(m))) : ue(m, p) ? (W(m), B === "{" ? st(m, p) || x : b(p, 11, it(m))) : (O === 8 && _(at.INVALID_LINKED_FORMAT, o(), 0), p.braceNest = 0, p.inLinked = !1, kt(m, p))
            }
        }

        function kt(m, p) {
            let O = {
                type: 14
            };
            if (p.braceNest > 0) return st(m, p) || I(p);
            if (p.inLinked) return Pt(m, p) || I(p);
            switch (m.currentChar()) {
                case "{":
                    return st(m, p) || I(p);
                case "}":
                    return _(at.UNBALANCED_CLOSING_BRACE, o(), 0), m.next(), b(p, 3, "}");
                case "@":
                    return Pt(m, p) || I(p);
                default:
                    if (Ce(m)) return O = b(p, 1, vt(m)), p.braceNest = 0, p.inLinked = !1, O;
                    const {
                        isModulo: B, hasSpace: D
                    } = be(m);
                    if (B) return D ? b(p, 0, Se(m)) : b(p, 4, me(m));
                    if (fe(m)) return b(p, 0, Se(m));
                    break
            }
            return O
        }

        function Lt() {
            const {
                currentType: m,
                offset: p,
                startLoc: O,
                endLoc: x
            } = f;
            return f.lastType = m, f.lastOffset = p, f.lastStartLoc = O, f.lastEndLoc = x, f.offset = s(), f.startLoc = o(), r.currentChar() === ai ? b(f, 14) : kt(r, f)
        }
        return {
            nextToken: Lt,
            currentOffset: s,
            currentPosition: o,
            context: d
        }
    }
    const JP = "parser",
        QP = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;

    function ZP(e, t, n) {
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

    function eD(e = {}) {
        const t = e.location !== !1,
            {
                onError: n
            } = e;

        function r(C, V, q, j, ...G) {
            const se = C.currentPosition();
            if (se.offset += j, se.column += j, n) {
                const ce = Od(q, se),
                    le = Nl(V, ce, {
                        domain: JP,
                        args: G
                    });
                n(le)
            }
        }

        function s(C, V, q) {
            const j = {
                type: C,
                start: V,
                end: V
            };
            return t && (j.loc = {
                start: q,
                end: q
            }), j
        }

        function o(C, V, q, j) {
            C.end = V, j && (C.type = j), t && C.loc && (C.loc.end = q)
        }

        function c(C, V) {
            const q = C.context(),
                j = s(3, q.offset, q.startLoc);
            return j.value = V, o(j, C.currentOffset(), C.currentPosition()), j
        }

        function u(C, V) {
            const q = C.context(),
                {
                    lastOffset: j,
                    lastStartLoc: G
                } = q,
                se = s(5, j, G);
            return se.index = parseInt(V, 10), C.nextToken(), o(se, C.currentOffset(), C.currentPosition()), se
        }

        function f(C, V) {
            const q = C.context(),
                {
                    lastOffset: j,
                    lastStartLoc: G
                } = q,
                se = s(4, j, G);
            return se.key = V, C.nextToken(), o(se, C.currentOffset(), C.currentPosition()), se
        }

        function d(C, V) {
            const q = C.context(),
                {
                    lastOffset: j,
                    lastStartLoc: G
                } = q,
                se = s(9, j, G);
            return se.value = V.replace(QP, ZP), C.nextToken(), o(se, C.currentOffset(), C.currentPosition()), se
        }

        function g(C) {
            const V = C.nextToken(),
                q = C.context(),
                {
                    lastOffset: j,
                    lastStartLoc: G
                } = q,
                se = s(8, j, G);
            return V.type !== 12 ? (r(C, at.UNEXPECTED_EMPTY_LINKED_MODIFIER, q.lastStartLoc, 0), se.value = "", o(se, j, G), {
                nextConsumeToken: V,
                node: se
            }) : (V.value == null && r(C, at.UNEXPECTED_LEXICAL_ANALYSIS, q.lastStartLoc, 0, _r(V)), se.value = V.value || "", o(se, C.currentOffset(), C.currentPosition()), {
                node: se
            })
        }

        function _(C, V) {
            const q = C.context(),
                j = s(7, q.offset, q.startLoc);
            return j.value = V, o(j, C.currentOffset(), C.currentPosition()), j
        }

        function b(C) {
            const V = C.context(),
                q = s(6, V.offset, V.startLoc);
            let j = C.nextToken();
            if (j.type === 9) {
                const G = g(C);
                q.modifier = G.node, j = G.nextConsumeToken || C.nextToken()
            }
            switch (j.type !== 10 && r(C, at.UNEXPECTED_LEXICAL_ANALYSIS, V.lastStartLoc, 0, _r(j)), j = C.nextToken(), j.type === 2 && (j = C.nextToken()), j.type) {
                case 11:
                    j.value == null && r(C, at.UNEXPECTED_LEXICAL_ANALYSIS, V.lastStartLoc, 0, _r(j)), q.key = _(C, j.value || "");
                    break;
                case 5:
                    j.value == null && r(C, at.UNEXPECTED_LEXICAL_ANALYSIS, V.lastStartLoc, 0, _r(j)), q.key = f(C, j.value || "");
                    break;
                case 6:
                    j.value == null && r(C, at.UNEXPECTED_LEXICAL_ANALYSIS, V.lastStartLoc, 0, _r(j)), q.key = u(C, j.value || "");
                    break;
                case 7:
                    j.value == null && r(C, at.UNEXPECTED_LEXICAL_ANALYSIS, V.lastStartLoc, 0, _r(j)), q.key = d(C, j.value || "");
                    break;
                default:
                    r(C, at.UNEXPECTED_EMPTY_LINKED_KEY, V.lastStartLoc, 0);
                    const G = C.context(),
                        se = s(7, G.offset, G.startLoc);
                    return se.value = "", o(se, G.offset, G.startLoc), q.key = se, o(q, G.offset, G.startLoc), {
                        nextConsumeToken: j,
                        node: q
                    }
            }
            return o(q, C.currentOffset(), C.currentPosition()), {
                node: q
            }
        }

        function I(C) {
            const V = C.context(),
                q = V.currentType === 1 ? C.currentOffset() : V.offset,
                j = V.currentType === 1 ? V.endLoc : V.startLoc,
                G = s(2, q, j);
            G.items = [];
            let se = null;
            do {
                const ue = se || C.nextToken();
                switch (se = null, ue.type) {
                    case 0:
                        ue.value == null && r(C, at.UNEXPECTED_LEXICAL_ANALYSIS, V.lastStartLoc, 0, _r(ue)), G.items.push(c(C, ue.value || ""));
                        break;
                    case 6:
                        ue.value == null && r(C, at.UNEXPECTED_LEXICAL_ANALYSIS, V.lastStartLoc, 0, _r(ue)), G.items.push(u(C, ue.value || ""));
                        break;
                    case 5:
                        ue.value == null && r(C, at.UNEXPECTED_LEXICAL_ANALYSIS, V.lastStartLoc, 0, _r(ue)), G.items.push(f(C, ue.value || ""));
                        break;
                    case 7:
                        ue.value == null && r(C, at.UNEXPECTED_LEXICAL_ANALYSIS, V.lastStartLoc, 0, _r(ue)), G.items.push(d(C, ue.value || ""));
                        break;
                    case 8:
                        const Ce = b(C);
                        G.items.push(Ce.node), se = Ce.nextConsumeToken || null;
                        break
                }
            } while (V.currentType !== 14 && V.currentType !== 1);
            const ce = V.currentType === 1 ? V.lastOffset : C.currentOffset(),
                le = V.currentType === 1 ? V.lastEndLoc : C.currentPosition();
            return o(G, ce, le), G
        }

        function R(C, V, q, j) {
            const G = C.context();
            let se = j.items.length === 0;
            const ce = s(1, V, q);
            ce.cases = [], ce.cases.push(j);
            do {
                const le = I(C);
                se || (se = le.items.length === 0), ce.cases.push(le)
            } while (G.currentType !== 14);
            return se && r(C, at.MUST_HAVE_MESSAGES_IN_PLURAL, q, 0), o(ce, C.currentOffset(), C.currentPosition()), ce
        }

        function M(C) {
            const V = C.context(),
                {
                    offset: q,
                    startLoc: j
                } = V,
                G = I(C);
            return V.currentType === 14 ? G : R(C, q, j, G)
        }

        function W(C) {
            const V = XP(C, cn({}, e)),
                q = V.context(),
                j = s(0, q.offset, q.startLoc);
            return t && j.loc && (j.loc.source = C), j.body = M(V), q.currentType !== 14 && r(V, at.UNEXPECTED_LEXICAL_ANALYSIS, q.lastStartLoc, 0, C[q.offset] || ""), o(j, V.currentOffset(), V.currentPosition()), j
        }
        return {
            parse: W
        }
    }

    function _r(e) {
        if (e.type === 14) return "EOF";
        const t = (e.value || "").replace(/\r?\n/gu, "\\n");
        return t.length > 10 ? t.slice(0, 9) + "\u2026" : t
    }

    function tD(e, t = {}) {
        const n = {
            ast: e,
            helpers: new Set
        };
        return {
            context: () => n,
            helper: o => (n.helpers.add(o), o)
        }
    }

    function sE(e, t) {
        for (let n = 0; n < e.length; n++) Mh(e[n], t)
    }

    function Mh(e, t) {
        switch (e.type) {
            case 1:
                sE(e.cases, t), t.helper("plural");
                break;
            case 2:
                sE(e.items, t);
                break;
            case 6:
                Mh(e.key, t), t.helper("linked"), t.helper("type");
                break;
            case 5:
                t.helper("interpolate"), t.helper("list");
                break;
            case 4:
                t.helper("interpolate"), t.helper("named");
                break
        }
    }

    function nD(e, t = {}) {
        const n = tD(e);
        n.helper("normalize"), e.body && Mh(e.body, n);
        const r = n.context();
        e.helpers = Array.from(r.helpers)
    }

    function rD(e, t) {
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

        function d(M, W = !0) {
            const C = W ? s : "";
            f(o ? C + "  ".repeat(M) : C)
        }

        function g(M = !0) {
            const W = ++c.indentLevel;
            M && d(W)
        }

        function _(M = !0) {
            const W = --c.indentLevel;
            M && d(W)
        }

        function b() {
            d(c.indentLevel)
        }
        return {
            context: u,
            push: f,
            indent: g,
            deindent: _,
            newline: b,
            helper: M => `_${M}`,
            needIndent: () => c.needIndent
        }
    }

    function iD(e, t) {
        const {
            helper: n
        } = e;
        e.push(`${n("linked")}(`), na(e, t.key), t.modifier ? (e.push(", "), na(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")")
    }

    function sD(e, t) {
        const {
            helper: n,
            needIndent: r
        } = e;
        e.push(`${n("normalize")}([`), e.indent(r());
        const s = t.items.length;
        for (let o = 0; o < s && (na(e, t.items[o]), o !== s - 1); o++) e.push(", ");
        e.deindent(r()), e.push("])")
    }

    function aD(e, t) {
        const {
            helper: n,
            needIndent: r
        } = e;
        if (t.cases.length > 1) {
            e.push(`${n("plural")}([`), e.indent(r());
            const s = t.cases.length;
            for (let o = 0; o < s && (na(e, t.cases[o]), o !== s - 1); o++) e.push(", ");
            e.deindent(r()), e.push("])")
        }
    }

    function oD(e, t) {
        t.body ? na(e, t.body) : e.push("null")
    }

    function na(e, t) {
        const {
            helper: n
        } = e;
        switch (t.type) {
            case 0:
                oD(e, t);
                break;
            case 1:
                aD(e, t);
                break;
            case 2:
                sD(e, t);
                break;
            case 6:
                iD(e, t);
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
    const cD = (e, t = {}) => {
        const n = ve(t.mode) ? t.mode : "normal",
            r = ve(t.filename) ? t.filename : "message.intl",
            s = !!t.sourceMap,
            o = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`,
            c = t.needIndent ? t.needIndent : n !== "arrow",
            u = e.helpers || [],
            f = rD(e, {
                mode: n,
                filename: r,
                sourceMap: s,
                breakLineCode: o,
                needIndent: c
            });
        f.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), f.indent(c), u.length > 0 && (f.push(`const { ${u.map(_=>`${_}: _${_}`).join(", ")} } = ctx`), f.newline()), f.push("return "), na(f, e), f.deindent(c), f.push("}");
        const {
            code: d,
            map: g
        } = f.context();
        return {
            ast: e,
            code: d,
            map: g ? g.toJSON() : void 0
        }
    };

    function lD(e, t = {}) {
        const n = cn({}, t),
            s = eD(n).parse(e);
        return nD(s, n), cD(s, n)
    }
    /*!
     * devtools-if v9.2.2
     * (c) 2022 kazuya kawaguchi
     * Released under the MIT License.
     */
    const uD = {
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
    const fD = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;

    function dD(e) {
        return fD.test(e)
    }

    function hD(e) {
        const t = e.charCodeAt(0),
            n = e.charCodeAt(e.length - 1);
        return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e
    }

    function pD(e) {
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

    function gD(e) {
        const t = e.trim();
        return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : dD(t) ? hD(t) : "*" + t
    }

    function mD(e) {
        const t = [];
        let n = -1,
            r = 0,
            s = 0,
            o, c, u, f, d, g, _;
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
                if (s = 0, c === void 0 || (c = gD(c), c === !1)) return !1;
                b[1]()
            }
        };

        function I() {
            const R = e[n + 1];
            if (r === 5 && R === "'" || r === 6 && R === '"') return n++, u = "\\" + R, b[0](), !0
        }
        for (; r !== null;)
            if (n++, o = e[n], !(o === "\\" && I())) {
                if (f = pD(o), _ = Ii[r], d = _[f] || _.l || 8, d === 8 || (r = d[0], d[1] !== void 0 && (g = b[d[1]], g && (u = o, g() === !1)))) return;
                if (r === 7) return t
            }
    }
    const aE = new Map;

    function vD(e, t) {
        return Ot(e) ? e[t] : null
    }

    function ED(e, t) {
        if (!Ot(e)) return null;
        let n = aE.get(t);
        if (n || (n = mD(t), n && aE.set(t, n)), !n) return null;
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
    const _D = e => e,
        yD = e => "",
        bD = "text",
        TD = e => e.length === 0 ? "" : e.join(""),
        SD = WP;

    function oE(e, t) {
        return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0
    }

    function OD(e) {
        const t = Yt(e.pluralIndex) ? e.pluralIndex : -1;
        return e.named && (Yt(e.named.count) || Yt(e.named.n)) ? Yt(e.named.count) ? e.named.count : Yt(e.named.n) ? e.named.n : t : t
    }

    function AD(e, t) {
        t.count || (t.count = e), t.n || (t.n = e)
    }

    function ID(e = {}) {
        const t = e.locale,
            n = OD(e),
            r = Ot(e.pluralRules) && ve(t) && Ut(e.pluralRules[t]) ? e.pluralRules[t] : oE,
            s = Ot(e.pluralRules) && ve(t) && Ut(e.pluralRules[t]) ? oE : void 0,
            o = C => C[r(n, C.length, s)],
            c = e.list || [],
            u = C => c[C],
            f = e.named || {};
        Yt(e.pluralIndex) && AD(n, f);
        const d = C => f[C];

        function g(C) {
            const V = Ut(e.messages) ? e.messages(C) : Ot(e.messages) ? e.messages[C] : !1;
            return V || (e.parent ? e.parent.message(C) : yD)
        }
        const _ = C => e.modifiers ? e.modifiers[C] : _D,
            b = Ge(e.processor) && Ut(e.processor.normalize) ? e.processor.normalize : TD,
            I = Ge(e.processor) && Ut(e.processor.interpolate) ? e.processor.interpolate : SD,
            R = Ge(e.processor) && ve(e.processor.type) ? e.processor.type : bD,
            W = {
                list: u,
                named: d,
                plural: o,
                linked: (C, ...V) => {
                    const [q, j] = V;
                    let G = "text",
                        se = "";
                    V.length === 1 ? Ot(q) ? (se = q.modifier || se, G = q.type || G) : ve(q) && (se = q || se) : V.length === 2 && (ve(q) && (se = q || se), ve(j) && (G = j || G));
                    let ce = g(C)(W);
                    return G === "vnode" && St(ce) && se && (ce = ce[0]), se ? _(se)(ce, G) : ce
                },
                message: g,
                type: R,
                interpolate: I,
                normalize: b
            };
        return W
    }
    let wD = null;
    uD.FunctionTranslate;

    function CD(e) {
        return t => wD
    }
    const RD = {
        NOT_FOUND_KEY: 1,
        FALLBACK_TO_TRANSLATE: 2,
        CANNOT_FORMAT_NUMBER: 3,
        FALLBACK_TO_NUMBER_FORMAT: 4,
        CANNOT_FORMAT_DATE: 5,
        FALLBACK_TO_DATE_FORMAT: 6,
        __EXTEND_POINT__: 7
    };

    function ND(e, t, n) {
        return [...new Set([n, ...St(t) ? t : Ot(t) ? Object.keys(t) : ve(t) ? [t] : [n]])]
    }

    function Qb(e, t, n) {
        const r = ve(n) ? n : bo,
            s = e;
        s.__localeChainCache || (s.__localeChainCache = new Map);
        let o = s.__localeChainCache.get(r);
        if (!o) {
            o = [];
            let c = [n];
            for (; St(c);) c = cE(o, c, t);
            const u = St(t) || !Ge(t) ? t : t.default ? t.default : null;
            c = ve(u) ? [u] : u, St(c) && cE(o, c, !1), s.__localeChainCache.set(r, o)
        }
        return o
    }

    function cE(e, t, n) {
        let r = !0;
        for (let s = 0; s < t.length && tt(r); s++) {
            const o = t[s];
            ve(o) && (r = LD(e, t[s], n))
        }
        return r
    }

    function LD(e, t, n) {
        let r;
        const s = t.split("-");
        do {
            const o = s.join("-");
            r = $D(e, o, n), s.splice(-1, 1)
        } while (s.length && r === !0);
        return r
    }

    function $D(e, t, n) {
        let r = !1;
        if (!e.includes(t) && (r = !0, t)) {
            r = t[t.length - 1] !== "!";
            const s = t.replace(/!/g, "");
            e.push(s), (St(n) || Ge(n)) && n[s] && (r = n[s])
        }
        return r
    }
    const PD = "9.2.2",
        Ll = -1,
        bo = "en-US",
        lE = "",
        uE = e => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;

    function DD() {
        return {
            upper: (e, t) => t === "text" && ve(e) ? e.toUpperCase() : t === "vnode" && Ot(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
            lower: (e, t) => t === "text" && ve(e) ? e.toLowerCase() : t === "vnode" && Ot(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
            capitalize: (e, t) => t === "text" && ve(e) ? uE(e) : t === "vnode" && Ot(e) && "__v_isVNode" in e ? uE(e.children) : e
        }
    }
    let Zb;

    function kD(e) {
        Zb = e
    }
    let eT;

    function MD(e) {
        eT = e
    }
    let tT;

    function xD(e) {
        tT = e
    }
    let fE = 0;

    function UD(e = {}) {
        const t = ve(e.version) ? e.version : PD,
            n = ve(e.locale) ? e.locale : bo,
            r = St(e.fallbackLocale) || Ge(e.fallbackLocale) || ve(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : n,
            s = Ge(e.messages) ? e.messages : {
                [n]: {}
            },
            o = Ge(e.datetimeFormats) ? e.datetimeFormats : {
                [n]: {}
            },
            c = Ge(e.numberFormats) ? e.numberFormats : {
                [n]: {}
            },
            u = cn({}, e.modifiers || {}, DD()),
            f = e.pluralRules || {},
            d = Ut(e.missing) ? e.missing : null,
            g = tt(e.missingWarn) || Ti(e.missingWarn) ? e.missingWarn : !0,
            _ = tt(e.fallbackWarn) || Ti(e.fallbackWarn) ? e.fallbackWarn : !0,
            b = !!e.fallbackFormat,
            I = !!e.unresolving,
            R = Ut(e.postTranslation) ? e.postTranslation : null,
            M = Ge(e.processor) ? e.processor : null,
            W = tt(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
            C = !!e.escapeParameter,
            V = Ut(e.messageCompiler) ? e.messageCompiler : Zb,
            q = Ut(e.messageResolver) ? e.messageResolver : eT || vD,
            j = Ut(e.localeFallbacker) ? e.localeFallbacker : tT || ND,
            G = Ot(e.fallbackContext) ? e.fallbackContext : void 0,
            se = Ut(e.onWarn) ? e.onWarn : BP,
            ce = e,
            le = Ot(ce.__datetimeFormatters) ? ce.__datetimeFormatters : new Map,
            ue = Ot(ce.__numberFormatters) ? ce.__numberFormatters : new Map,
            Ce = Ot(ce.__meta) ? ce.__meta : {};
        fE++;
        const be = {
            version: t,
            cid: fE,
            locale: n,
            fallbackLocale: r,
            messages: s,
            modifiers: u,
            pluralRules: f,
            missing: d,
            missingWarn: g,
            fallbackWarn: _,
            fallbackFormat: b,
            unresolving: I,
            postTranslation: R,
            processor: M,
            warnHtmlMessage: W,
            escapeParameter: C,
            messageCompiler: V,
            messageResolver: q,
            localeFallbacker: j,
            fallbackContext: G,
            onWarn: se,
            __meta: Ce
        };
        return be.datetimeFormats = o, be.numberFormats = c, be.__datetimeFormatters = le, be.__numberFormatters = ue, be
    }

    function xh(e, t, n, r, s) {
        const {
            missing: o,
            onWarn: c
        } = e;
        if (o !== null) {
            const u = o(e, n, t, s);
            return ve(u) ? u : t
        } else return t
    }

    function Ga(e, t, n) {
        const r = e;
        r.__localeChainCache = new Map, e.localeFallbacker(e, n, t)
    }
    const FD = e => e;
    let dE = Object.create(null);

    function BD(e, t = {}) {
        {
            const r = (t.onCacheKey || FD)(e),
                s = dE[r];
            if (s) return s;
            let o = !1;
            const c = t.onError || jP;
            t.onError = d => {
                o = !0, c(d)
            };
            const {
                code: u
            } = lD(e, t), f = new Function(`return ${u}`)();
            return o ? f : dE[r] = f
        }
    }
    let nT = at.__EXTEND_POINT__;
    const Tf = () => ++nT,
        xs = {
            INVALID_ARGUMENT: nT,
            INVALID_DATE_ARGUMENT: Tf(),
            INVALID_ISO_DATE_ARGUMENT: Tf(),
            __EXTEND_POINT__: Tf()
        };

    function Us(e) {
        return Nl(e, null, void 0)
    }
    const hE = () => "",
        cs = e => Ut(e);

    function pE(e, ...t) {
        const {
            fallbackFormat: n,
            postTranslation: r,
            unresolving: s,
            messageCompiler: o,
            fallbackLocale: c,
            messages: u
        } = e, [f, d] = Ad(...t), g = tt(d.missingWarn) ? d.missingWarn : e.missingWarn, _ = tt(d.fallbackWarn) ? d.fallbackWarn : e.fallbackWarn, b = tt(d.escapeParameter) ? d.escapeParameter : e.escapeParameter, I = !!d.resolvedMessage, R = ve(d.default) || tt(d.default) ? tt(d.default) ? o ? f : () => f : d.default : n ? o ? f : () => f : "", M = n || R !== "", W = ve(d.locale) ? d.locale : e.locale;
        b && GD(d);
        let [C, V, q] = I ? [f, W, u[W] || {}] : rT(e, f, W, c, _, g), j = C, G = f;
        if (!I && !(ve(j) || cs(j)) && M && (j = R, G = j), !I && (!(ve(j) || cs(j)) || !ve(V))) return s ? Ll : f;
        let se = !1;
        const ce = () => {
                se = !0
            },
            le = cs(j) ? j : iT(e, f, V, j, G, ce);
        if (se) return j;
        const ue = HD(e, V, q, d),
            Ce = ID(ue),
            be = WD(e, le, Ce);
        return r ? r(be, f) : be
    }

    function GD(e) {
        St(e.list) ? e.list = e.list.map(t => ve(t) ? rE(t) : t) : Ot(e.named) && Object.keys(e.named).forEach(t => {
            ve(e.named[t]) && (e.named[t] = rE(e.named[t]))
        })
    }

    function rT(e, t, n, r, s, o) {
        const {
            messages: c,
            onWarn: u,
            messageResolver: f,
            localeFallbacker: d
        } = e, g = d(e, r, n);
        let _ = {},
            b, I = null;
        const R = "translate";
        for (let M = 0; M < g.length && (b = g[M], _ = c[b] || {}, (I = f(_, t)) === null && (I = _[t]), !(ve(I) || Ut(I))); M++) {
            const W = xh(e, t, b, o, R);
            W !== t && (I = W)
        }
        return [I, b, _]
    }

    function iT(e, t, n, r, s, o) {
        const {
            messageCompiler: c,
            warnHtmlMessage: u
        } = e;
        if (cs(r)) {
            const d = r;
            return d.locale = d.locale || n, d.key = d.key || t, d
        }
        if (c == null) {
            const d = () => r;
            return d.locale = n, d.key = t, d
        }
        const f = c(r, jD(e, n, s, r, u, o));
        return f.locale = n, f.key = t, f.source = r, f
    }

    function WD(e, t, n) {
        return t(n)
    }

    function Ad(...e) {
        const [t, n, r] = e, s = {};
        if (!ve(t) && !Yt(t) && !cs(t)) throw Us(xs.INVALID_ARGUMENT);
        const o = Yt(t) ? String(t) : (cs(t), t);
        return Yt(n) ? s.plural = n : ve(n) ? s.default = n : Ge(n) && !Rl(n) ? s.named = n : St(n) && (s.list = n), Yt(r) ? s.plural = r : ve(r) ? s.default = r : Ge(r) && cn(s, r), [o, s]
    }

    function jD(e, t, n, r, s, o) {
        return {
            warnHtmlMessage: s,
            onError: c => {
                throw o && o(c), c
            },
            onCacheKey: c => xP(t, n, c)
        }
    }

    function HD(e, t, n, r) {
        const {
            modifiers: s,
            pluralRules: o,
            messageResolver: c,
            fallbackLocale: u,
            fallbackWarn: f,
            missingWarn: d,
            fallbackContext: g
        } = e, b = {
            locale: t,
            modifiers: s,
            pluralRules: o,
            messages: I => {
                let R = c(n, I);
                if (R == null && g) {
                    const [, , M] = rT(g, I, t, u, f, d);
                    R = c(M, I)
                }
                if (ve(R)) {
                    let M = !1;
                    const C = iT(e, I, t, R, I, () => {
                        M = !0
                    });
                    return M ? hE : C
                } else return cs(R) ? R : hE
            }
        };
        return e.processor && (b.processor = e.processor), r.list && (b.list = r.list), r.named && (b.named = r.named), Yt(r.plural) && (b.pluralIndex = r.plural), b
    }

    function gE(e, ...t) {
        const {
            datetimeFormats: n,
            unresolving: r,
            fallbackLocale: s,
            onWarn: o,
            localeFallbacker: c
        } = e, {
            __datetimeFormatters: u
        } = e, [f, d, g, _] = Id(...t), b = tt(g.missingWarn) ? g.missingWarn : e.missingWarn;
        tt(g.fallbackWarn) ? g.fallbackWarn : e.fallbackWarn;
        const I = !!g.part,
            R = ve(g.locale) ? g.locale : e.locale,
            M = c(e, s, R);
        if (!ve(f) || f === "") return new Intl.DateTimeFormat(R, _).format(d);
        let W = {},
            C, V = null;
        const q = "datetime format";
        for (let se = 0; se < M.length && (C = M[se], W = n[C] || {}, V = W[f], !Ge(V)); se++) xh(e, f, C, b, q);
        if (!Ge(V) || !ve(C)) return r ? Ll : f;
        let j = `${C}__${f}`;
        Rl(_) || (j = `${j}__${JSON.stringify(_)}`);
        let G = u.get(j);
        return G || (G = new Intl.DateTimeFormat(C, cn({}, V, _)), u.set(j, G)), I ? G.formatToParts(d) : G.format(d)
    }
    const sT = ["localeMatcher", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "formatMatcher", "hour12", "timeZone", "dateStyle", "timeStyle", "calendar", "dayPeriod", "numberingSystem", "hourCycle", "fractionalSecondDigits"];

    function Id(...e) {
        const [t, n, r, s] = e, o = {};
        let c = {},
            u;
        if (ve(t)) {
            const f = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
            if (!f) throw Us(xs.INVALID_ISO_DATE_ARGUMENT);
            const d = f[3] ? f[3].trim().startsWith("T") ? `${f[1].trim()}${f[3].trim()}` : `${f[1].trim()}T${f[3].trim()}` : f[1].trim();
            u = new Date(d);
            try {
                u.toISOString()
            } catch {
                throw Us(xs.INVALID_ISO_DATE_ARGUMENT)
            }
        } else if (FP(t)) {
            if (isNaN(t.getTime())) throw Us(xs.INVALID_DATE_ARGUMENT);
            u = t
        } else if (Yt(t)) u = t;
        else throw Us(xs.INVALID_ARGUMENT);
        return ve(n) ? o.key = n : Ge(n) && Object.keys(n).forEach(f => {
            sT.includes(f) ? c[f] = n[f] : o[f] = n[f]
        }), ve(r) ? o.locale = r : Ge(r) && (c = r), Ge(s) && (c = s), [o.key || "", u, o, c]
    }

    function mE(e, t, n) {
        const r = e;
        for (const s in n) {
            const o = `${t}__${s}`;
            !r.__datetimeFormatters.has(o) || r.__datetimeFormatters.delete(o)
        }
    }

    function vE(e, ...t) {
        const {
            numberFormats: n,
            unresolving: r,
            fallbackLocale: s,
            onWarn: o,
            localeFallbacker: c
        } = e, {
            __numberFormatters: u
        } = e, [f, d, g, _] = wd(...t), b = tt(g.missingWarn) ? g.missingWarn : e.missingWarn;
        tt(g.fallbackWarn) ? g.fallbackWarn : e.fallbackWarn;
        const I = !!g.part,
            R = ve(g.locale) ? g.locale : e.locale,
            M = c(e, s, R);
        if (!ve(f) || f === "") return new Intl.NumberFormat(R, _).format(d);
        let W = {},
            C, V = null;
        const q = "number format";
        for (let se = 0; se < M.length && (C = M[se], W = n[C] || {}, V = W[f], !Ge(V)); se++) xh(e, f, C, b, q);
        if (!Ge(V) || !ve(C)) return r ? Ll : f;
        let j = `${C}__${f}`;
        Rl(_) || (j = `${j}__${JSON.stringify(_)}`);
        let G = u.get(j);
        return G || (G = new Intl.NumberFormat(C, cn({}, V, _)), u.set(j, G)), I ? G.formatToParts(d) : G.format(d)
    }
    const aT = ["localeMatcher", "style", "currency", "currencyDisplay", "currencySign", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "notation", "signDisplay", "unit", "unitDisplay", "roundingMode", "roundingPriority", "roundingIncrement", "trailingZeroDisplay"];

    function wd(...e) {
        const [t, n, r, s] = e, o = {};
        let c = {};
        if (!Yt(t)) throw Us(xs.INVALID_ARGUMENT);
        const u = t;
        return ve(n) ? o.key = n : Ge(n) && Object.keys(n).forEach(f => {
            aT.includes(f) ? c[f] = n[f] : o[f] = n[f]
        }), ve(r) ? o.locale = r : Ge(r) && (c = r), Ge(s) && (c = s), [o.key || "", u, o, c]
    }

    function EE(e, t, n) {
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
    const VD = "9.2.2";
    RD.__EXTEND_POINT__;
    let oT = at.__EXTEND_POINT__;
    const Rn = () => ++oT,
        Wt = {
            UNEXPECTED_RETURN_TYPE: oT,
            INVALID_ARGUMENT: Rn(),
            MUST_BE_CALL_SETUP_TOP: Rn(),
            NOT_INSLALLED: Rn(),
            NOT_AVAILABLE_IN_LEGACY_MODE: Rn(),
            REQUIRED_VALUE: Rn(),
            INVALID_VALUE: Rn(),
            CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: Rn(),
            NOT_INSLALLED_WITH_PROVIDE: Rn(),
            UNEXPECTED_ERROR: Rn(),
            NOT_COMPATIBLE_LEGACY_VUE_I18N: Rn(),
            BRIDGE_SUPPORT_VUE_2_ONLY: Rn(),
            MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: Rn(),
            NOT_AVAILABLE_COMPOSITION_IN_LEGACY: Rn(),
            __EXTEND_POINT__: Rn()
        };

    function zt(e, ...t) {
        return Nl(e, null, void 0)
    }
    const Cd = Ai("__transrateVNode"),
        Rd = Ai("__datetimeParts"),
        Nd = Ai("__numberParts"),
        cT = Ai("__setPluralRules");
    Ai("__intlifyMeta");
    const lT = Ai("__injectWithOption");

    function Ld(e) {
        if (!Ot(e)) return e;
        for (const t in e)
            if (!!Dh(e, t))
                if (!t.includes(".")) Ot(e[t]) && Ld(e[t]);
                else {
                    const n = t.split("."),
                        r = n.length - 1;
                    let s = e;
                    for (let o = 0; o < r; o++) n[o] in s || (s[n[o]] = {}), s = s[n[o]];
                    s[n[r]] = e[t], delete e[t], Ot(s[n[r]]) && Ld(s[n[r]])
                } return e
    }

    function $l(e, t) {
        const {
            messages: n,
            __i18n: r,
            messageResolver: s,
            flatJson: o
        } = t, c = Ge(n) ? n : St(r) ? {} : {
            [e]: {}
        };
        if (St(r) && r.forEach(u => {
                if ("locale" in u && "resource" in u) {
                    const {
                        locale: f,
                        resource: d
                    } = u;
                    f ? (c[f] = c[f] || {}, za(d, c[f])) : za(d, c)
                } else ve(u) && za(JSON.parse(u), c)
            }), s == null && o)
            for (const u in c) Dh(c, u) && Ld(c[u]);
        return c
    }
    const wc = e => !Ot(e) || St(e);

    function za(e, t) {
        if (wc(e) || wc(t)) throw zt(Wt.INVALID_VALUE);
        for (const n in e) Dh(e, n) && (wc(e[n]) || wc(t[n]) ? t[n] = e[n] : za(e[n], t[n]))
    }

    function KD(e) {
        return e.type
    }

    function uT(e, t, n) {
        let r = Ot(t.messages) ? t.messages : {};
        "__i18nGlobal" in n && (r = $l(e.locale.value, {
            messages: r,
            __i18n: n.__i18nGlobal
        }));
        const s = Object.keys(r);
        s.length && s.forEach(o => {
            e.mergeLocaleMessage(o, r[o])
        }); {
            if (Ot(t.datetimeFormats)) {
                const o = Object.keys(t.datetimeFormats);
                o.length && o.forEach(c => {
                    e.mergeDateTimeFormat(c, t.datetimeFormats[c])
                })
            }
            if (Ot(t.numberFormats)) {
                const o = Object.keys(t.numberFormats);
                o.length && o.forEach(c => {
                    e.mergeNumberFormat(c, t.numberFormats[c])
                })
            }
        }
    }

    function _E(e) {
        return ft(Il, null, e, 0)
    }
    let yE = 0;

    function bE(e) {
        return (t, n, r, s) => e(n, r, yi() || void 0, s)
    }

    function Uh(e = {}, t) {
        const {
            __root: n
        } = e, r = n === void 0;
        let s = tt(e.inheritLocale) ? e.inheritLocale : !0;
        const o = et(n && s ? n.locale.value : ve(e.locale) ? e.locale : bo),
            c = et(n && s ? n.fallbackLocale.value : ve(e.fallbackLocale) || St(e.fallbackLocale) || Ge(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : o.value),
            u = et($l(o.value, e)),
            f = et(Ge(e.datetimeFormats) ? e.datetimeFormats : {
                [o.value]: {}
            }),
            d = et(Ge(e.numberFormats) ? e.numberFormats : {
                [o.value]: {}
            });
        let g = n ? n.missingWarn : tt(e.missingWarn) || Ti(e.missingWarn) ? e.missingWarn : !0,
            _ = n ? n.fallbackWarn : tt(e.fallbackWarn) || Ti(e.fallbackWarn) ? e.fallbackWarn : !0,
            b = n ? n.fallbackRoot : tt(e.fallbackRoot) ? e.fallbackRoot : !0,
            I = !!e.fallbackFormat,
            R = Ut(e.missing) ? e.missing : null,
            M = Ut(e.missing) ? bE(e.missing) : null,
            W = Ut(e.postTranslation) ? e.postTranslation : null,
            C = n ? n.warnHtmlMessage : tt(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
            V = !!e.escapeParameter;
        const q = n ? n.modifiers : Ge(e.modifiers) ? e.modifiers : {};
        let j = e.pluralRules || n && n.pluralRules,
            G;
        G = (() => {
            const N = {
                version: VD,
                locale: o.value,
                fallbackLocale: c.value,
                messages: u.value,
                modifiers: q,
                pluralRules: j,
                missing: M === null ? void 0 : M,
                missingWarn: g,
                fallbackWarn: _,
                fallbackFormat: I,
                unresolving: !0,
                postTranslation: W === null ? void 0 : W,
                warnHtmlMessage: C,
                escapeParameter: V,
                messageResolver: e.messageResolver,
                __meta: {
                    framework: "vue"
                }
            };
            return N.datetimeFormats = f.value, N.numberFormats = d.value, N.__datetimeFormatters = Ge(G) ? G.__datetimeFormatters : void 0, N.__numberFormatters = Ge(G) ? G.__numberFormatters : void 0, UD(N)
        })(), Ga(G, o.value, c.value);

        function ce() {
            return [o.value, c.value, u.value, f.value, d.value]
        }
        const le = On({
                get: () => o.value,
                set: N => {
                    o.value = N, G.locale = o.value
                }
            }),
            ue = On({
                get: () => c.value,
                set: N => {
                    c.value = N, G.fallbackLocale = c.value, Ga(G, o.value, N)
                }
            }),
            Ce = On(() => u.value),
            be = On(() => f.value),
            fe = On(() => d.value);

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
            N !== null && (M = bE(N)), R = N, G.missing = M
        }
        const Ee = (N, H, he, pe, Ne, xe) => {
            ce();
            let A;
            if (A = N(G), Yt(A) && A === Ll) {
                const [T, $] = H();
                return n && b ? pe(n) : Ne(T)
            } else {
                if (xe(A)) return A;
                throw zt(Wt.UNEXPECTED_RETURN_TYPE)
            }
        };

        function me(...N) {
            return Ee(H => Reflect.apply(pE, null, [H, ...N]), () => Ad(...N), "translate", H => Reflect.apply(H.t, H, [...N]), H => H, H => ve(H))
        }

        function Se(...N) {
            const [H, he, pe] = N;
            if (pe && !Ot(pe)) throw zt(Wt.INVALID_ARGUMENT);
            return me(H, he, cn({
                resolvedMessage: !0
            }, pe || {}))
        }

        function Me(...N) {
            return Ee(H => Reflect.apply(gE, null, [H, ...N]), () => Id(...N), "datetime format", H => Reflect.apply(H.d, H, [...N]), () => lE, H => ve(H))
        }

        function Fe(...N) {
            return Ee(H => Reflect.apply(vE, null, [H, ...N]), () => wd(...N), "number format", H => Reflect.apply(H.n, H, [...N]), () => lE, H => ve(H))
        }

        function Je(N) {
            return N.map(H => ve(H) || Yt(H) || tt(H) ? _E(String(H)) : H)
        }
        const Ht = {
            normalize: Je,
            interpolate: N => N,
            type: "vnode"
        };

        function It(...N) {
            return Ee(H => {
                let he;
                const pe = H;
                try {
                    pe.processor = Ht, he = Reflect.apply(pE, null, [pe, ...N])
                } finally {
                    pe.processor = null
                }
                return he
            }, () => Ad(...N), "translate", H => H[Cd](...N), H => [_E(H)], H => St(H))
        }

        function Xt(...N) {
            return Ee(H => Reflect.apply(vE, null, [H, ...N]), () => wd(...N), "number format", H => H[Nd](...N), () => [], H => ve(H) || St(H))
        }

        function it(...N) {
            return Ee(H => Reflect.apply(gE, null, [H, ...N]), () => Id(...N), "datetime format", H => H[Rd](...N), () => [], H => ve(H) || St(H))
        }

        function vt(N) {
            j = N, G.pluralRules = j
        }

        function st(N, H) {
            const he = ve(H) ? H : o.value,
                pe = Lt(he);
            return G.messageResolver(pe, N) !== null
        }

        function Pt(N) {
            let H = null;
            const he = Qb(G, c.value, o.value);
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

        function kt(N) {
            const H = Pt(N);
            return H != null ? H : n ? n.tm(N) || {} : {}
        }

        function Lt(N) {
            return u.value[N] || {}
        }

        function m(N, H) {
            u.value[N] = H, G.messages = u.value
        }

        function p(N, H) {
            u.value[N] = u.value[N] || {}, za(H, u.value[N]), G.messages = u.value
        }

        function O(N) {
            return f.value[N] || {}
        }

        function x(N, H) {
            f.value[N] = H, G.datetimeFormats = f.value, mE(G, N, H)
        }

        function B(N, H) {
            f.value[N] = cn(f.value[N] || {}, H), G.datetimeFormats = f.value, mE(G, N, H)
        }

        function D(N) {
            return d.value[N] || {}
        }

        function ae(N, H) {
            d.value[N] = H, G.numberFormats = d.value, EE(G, N, H)
        }

        function Q(N, H) {
            d.value[N] = cn(d.value[N] || {}, H), G.numberFormats = d.value, EE(G, N, H)
        }
        yE++, n && Sd && (mi(n.locale, N => {
            s && (o.value = N, G.locale = N, Ga(G, o.value, c.value))
        }), mi(n.fallbackLocale, N => {
            s && (c.value = N, G.fallbackLocale = N, Ga(G, o.value, c.value))
        }));
        const X = {
            id: yE,
            locale: le,
            fallbackLocale: ue,
            get inheritLocale() {
                return s
            },
            set inheritLocale(N) {
                s = N, N && n && (o.value = n.locale.value, c.value = n.fallbackLocale.value, Ga(G, o.value, c.value))
            },
            get availableLocales() {
                return Object.keys(u.value).sort()
            },
            messages: Ce,
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
                return _
            },
            set fallbackWarn(N) {
                _ = N, G.fallbackWarn = _
            },
            get fallbackRoot() {
                return b
            },
            set fallbackRoot(N) {
                b = N
            },
            get fallbackFormat() {
                return I
            },
            set fallbackFormat(N) {
                I = N, G.fallbackFormat = I
            },
            get warnHtmlMessage() {
                return C
            },
            set warnHtmlMessage(N) {
                C = N, G.warnHtmlMessage = N
            },
            get escapeParameter() {
                return V
            },
            set escapeParameter(N) {
                V = N, G.escapeParameter = N
            },
            t: me,
            getLocaleMessage: Lt,
            setLocaleMessage: m,
            mergeLocaleMessage: p,
            getPostTranslationHandler: Oe,
            setPostTranslationHandler: F,
            getMissingHandler: re,
            setMissingHandler: de,
            [cT]: vt
        };
        return X.datetimeFormats = be, X.numberFormats = fe, X.rt = Se, X.te = st, X.tm = kt, X.d = Me, X.n = Fe, X.getDateTimeFormat = O, X.setDateTimeFormat = x, X.mergeDateTimeFormat = B, X.getNumberFormat = D, X.setNumberFormat = ae, X.mergeNumberFormat = Q, X[lT] = e.__injectWithOption, X[Cd] = It, X[Rd] = it, X[Nd] = Xt, X
    }

    function YD(e) {
        const t = ve(e.locale) ? e.locale : bo,
            n = ve(e.fallbackLocale) || St(e.fallbackLocale) || Ge(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : t,
            r = Ut(e.missing) ? e.missing : void 0,
            s = tt(e.silentTranslationWarn) || Ti(e.silentTranslationWarn) ? !e.silentTranslationWarn : !0,
            o = tt(e.silentFallbackWarn) || Ti(e.silentFallbackWarn) ? !e.silentFallbackWarn : !0,
            c = tt(e.fallbackRoot) ? e.fallbackRoot : !0,
            u = !!e.formatFallbackMessages,
            f = Ge(e.modifiers) ? e.modifiers : {},
            d = e.pluralizationRules,
            g = Ut(e.postTranslation) ? e.postTranslation : void 0,
            _ = ve(e.warnHtmlInMessage) ? e.warnHtmlInMessage !== "off" : !0,
            b = !!e.escapeParameterHtml,
            I = tt(e.sync) ? e.sync : !0;
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
            __injectWithOption: C
        } = e, V = e.datetimeFormats, q = e.numberFormats, j = e.flatJson;
        return {
            locale: t,
            fallbackLocale: n,
            messages: R,
            flatJson: j,
            datetimeFormats: V,
            numberFormats: q,
            missing: r,
            missingWarn: s,
            fallbackWarn: o,
            fallbackRoot: c,
            fallbackFormat: u,
            modifiers: f,
            pluralRules: d,
            postTranslation: g,
            warnHtmlMessage: _,
            escapeParameter: b,
            messageResolver: e.messageResolver,
            inheritLocale: I,
            __i18n: M,
            __root: W,
            __injectWithOption: C
        }
    }

    function $d(e = {}, t) {
        {
            const n = Uh(YD(e)),
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
                        let d = null,
                            g = null;
                        if (!ve(o)) throw zt(Wt.INVALID_ARGUMENT);
                        const _ = o;
                        return ve(c) ? f.locale = c : St(c) ? d = c : Ge(c) && (g = c), St(u) ? d = u : Ge(u) && (g = u), Reflect.apply(n.t, n, [_, d || g || {}, f])
                    },
                    rt(...s) {
                        return Reflect.apply(n.rt, n, [...s])
                    },
                    tc(...s) {
                        const [o, c, u] = s, f = {
                            plural: 1
                        };
                        let d = null,
                            g = null;
                        if (!ve(o)) throw zt(Wt.INVALID_ARGUMENT);
                        const _ = o;
                        return ve(c) ? f.locale = c : Yt(c) ? f.plural = c : St(c) ? d = c : Ge(c) && (g = c), ve(u) ? f.locale = u : St(u) ? d = u : Ge(u) && (g = u), Reflect.apply(n.t, n, [_, d || g || {}, f])
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
    const Fh = {
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

    function qD({
        slots: e
    }, t) {
        return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((r, s) => r = [...r, ...St(s.children) ? s.children : [s]], []) : t.reduce((n, r) => {
            const s = e[r];
            return s && (n[r] = s()), n
        }, {})
    }

    function fT(e) {
        return ut
    }
    const TE = {
        name: "i18n-t",
        props: cn({
            keypath: {
                type: String,
                required: !0
            },
            plural: {
                type: [Number, String],
                validator: e => Yt(e) || !isNaN(e)
            }
        }, Fh),
        setup(e, t) {
            const {
                slots: n,
                attrs: r
            } = t, s = e.i18n || Bh({
                useScope: e.scope,
                __useComponent: !0
            });
            return () => {
                const o = Object.keys(n).filter(_ => _ !== "_"),
                    c = {};
                e.locale && (c.locale = e.locale), e.plural !== void 0 && (c.plural = ve(e.plural) ? +e.plural : e.plural);
                const u = qD(t, o),
                    f = s[Cd](e.keypath, u, c),
                    d = cn({}, r),
                    g = ve(e.tag) || Ot(e.tag) ? e.tag : fT();
                return Ir(g, d, f)
            }
        }
    };

    function zD(e) {
        return St(e) && !ve(e[0])
    }

    function dT(e, t, n, r) {
        const {
            slots: s,
            attrs: o
        } = t;
        return () => {
            const c = {
                part: !0
            };
            let u = {};
            e.locale && (c.locale = e.locale), ve(e.format) ? c.key = e.format : Ot(e.format) && (ve(e.format.key) && (c.key = e.format.key), u = Object.keys(e.format).reduce((b, I) => n.includes(I) ? cn({}, b, {
                [I]: e.format[I]
            }) : b, {}));
            const f = r(e.value, c, u);
            let d = [c.key];
            St(f) ? d = f.map((b, I) => {
                const R = s[b.type],
                    M = R ? R({
                        [b.type]: b.value,
                        index: I,
                        parts: f
                    }) : [b.value];
                return zD(M) && (M[0].key = `${b.type}-${I}`), M
            }) : ve(f) && (d = [f]);
            const g = cn({}, o),
                _ = ve(e.tag) || Ot(e.tag) ? e.tag : fT();
            return Ir(_, g, d)
        }
    }
    const SE = {
            name: "i18n-n",
            props: cn({
                value: {
                    type: Number,
                    required: !0
                },
                format: {
                    type: [String, Object]
                }
            }, Fh),
            setup(e, t) {
                const n = e.i18n || Bh({
                    useScope: "parent",
                    __useComponent: !0
                });
                return dT(e, t, aT, (...r) => n[Nd](...r))
            }
        },
        OE = {
            name: "i18n-d",
            props: cn({
                value: {
                    type: [Number, Date],
                    required: !0
                },
                format: {
                    type: [String, Object]
                }
            }, Fh),
            setup(e, t) {
                const n = e.i18n || Bh({
                    useScope: "parent",
                    __useComponent: !0
                });
                return dT(e, t, sT, (...r) => n[Rd](...r))
            }
        };

    function XD(e, t) {
        const n = e;
        if (e.mode === "composition") return n.__getInstance(t) || e.global; {
            const r = n.__getInstance(t);
            return r != null ? r.__composer : e.global.__composer
        }
    }

    function JD(e) {
        const t = c => {
            const {
                instance: u,
                modifiers: f,
                value: d
            } = c;
            if (!u || !u.$) throw zt(Wt.UNEXPECTED_ERROR);
            const g = XD(e, u.$),
                _ = AE(d);
            return [Reflect.apply(g.t, g, [...IE(_)]), g]
        };
        return {
            created: (c, u) => {
                const [f, d] = t(u);
                Sd && e.global === d && (c.__i18nWatcher = mi(d.locale, () => {
                    u.instance && u.instance.$forceUpdate()
                })), c.__composer = d, c.textContent = f
            },
            unmounted: c => {
                Sd && c.__i18nWatcher && (c.__i18nWatcher(), c.__i18nWatcher = void 0, delete c.__i18nWatcher), c.__composer && (c.__composer = void 0, delete c.__composer)
            },
            beforeUpdate: (c, {
                value: u
            }) => {
                if (c.__composer) {
                    const f = c.__composer,
                        d = AE(u);
                    c.textContent = Reflect.apply(f.t, f, [...IE(d)])
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

    function AE(e) {
        if (ve(e)) return {
            path: e
        };
        if (Ge(e)) {
            if (!("path" in e)) throw zt(Wt.REQUIRED_VALUE, "path");
            return e
        } else throw zt(Wt.INVALID_VALUE)
    }

    function IE(e) {
        const {
            path: t,
            locale: n,
            args: r,
            choice: s,
            plural: o
        } = e, c = {}, u = r || {};
        return ve(n) && (c.locale = n), Yt(s) && (c.plural = s), Yt(o) && (c.plural = o), [t, u, c]
    }

    function QD(e, t, ...n) {
        const r = Ge(n[0]) ? n[0] : {},
            s = !!r.useI18nComponentName;
        (tt(r.globalInstall) ? r.globalInstall : !0) && (e.component(s ? "i18n" : TE.name, TE), e.component(SE.name, SE), e.component(OE.name, OE)), e.directive("t", JD(t))
    }

    function ZD(e, t, n) {
        return {
            beforeCreate() {
                const r = yi();
                if (!r) throw zt(Wt.UNEXPECTED_ERROR);
                const s = this.$options;
                if (s.i18n) {
                    const o = s.i18n;
                    s.__i18n && (o.__i18n = s.__i18n), o.__root = t, this === this.$root ? this.$i18n = wE(e, o) : (o.__injectWithOption = !0, this.$i18n = $d(o))
                } else s.__i18n ? this === this.$root ? this.$i18n = wE(e, s) : this.$i18n = $d({
                    __i18n: s.__i18n,
                    __injectWithOption: !0,
                    __root: t
                }) : this.$i18n = e;
                s.__i18nGlobal && uT(t, s, s), e.__onComponentInstanceCreated(this.$i18n), n.__setInstance(r, this.$i18n), this.$t = (...o) => this.$i18n.t(...o), this.$rt = (...o) => this.$i18n.rt(...o), this.$tc = (...o) => this.$i18n.tc(...o), this.$te = (o, c) => this.$i18n.te(o, c), this.$d = (...o) => this.$i18n.d(...o), this.$n = (...o) => this.$i18n.n(...o), this.$tm = o => this.$i18n.tm(o)
            },
            mounted() {},
            unmounted() {
                const r = yi();
                if (!r) throw zt(Wt.UNEXPECTED_ERROR);
                delete this.$t, delete this.$rt, delete this.$tc, delete this.$te, delete this.$d, delete this.$n, delete this.$tm, n.__deleteInstance(r), delete this.$i18n
            }
        }
    }

    function wE(e, t) {
        e.locale = t.locale || e.locale, e.fallbackLocale = t.fallbackLocale || e.fallbackLocale, e.missing = t.missing || e.missing, e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn, e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn, e.formatFallbackMessages = t.formatFallbackMessages || e.formatFallbackMessages, e.postTranslation = t.postTranslation || e.postTranslation, e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage, e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml, e.sync = t.sync || e.sync, e.__composer[cT](t.pluralizationRules || e.pluralizationRules);
        const n = $l(e.locale, {
            messages: t.messages,
            __i18n: t.__i18n
        });
        return Object.keys(n).forEach(r => e.mergeLocaleMessage(r, n[r])), t.datetimeFormats && Object.keys(t.datetimeFormats).forEach(r => e.mergeDateTimeFormat(r, t.datetimeFormats[r])), t.numberFormats && Object.keys(t.numberFormats).forEach(r => e.mergeNumberFormat(r, t.numberFormats[r])), e
    }
    const ek = Ai("global-vue-i18n");

    function tk(e = {}, t) {
        const n = tt(e.legacy) ? e.legacy : !0,
            r = tt(e.globalInjection) ? e.globalInjection : !0,
            s = n ? !!e.allowComposition : !0,
            o = new Map,
            [c, u] = nk(e, n),
            f = Ai("");

        function d(b) {
            return o.get(b) || null
        }

        function g(b, I) {
            o.set(b, I)
        }

        function _(b) {
            o.delete(b)
        } {
            const b = {
                get mode() {
                    return n ? "legacy" : "composition"
                },
                get allowComposition() {
                    return s
                },
                async install(I, ...R) {
                    I.__VUE_I18N_SYMBOL__ = f, I.provide(I.__VUE_I18N_SYMBOL__, b), !n && r && fk(I, b.global), QD(I, b, ...R), n && I.mixin(ZD(u, u.__composer, b));
                    const M = I.unmount;
                    I.unmount = () => {
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
                __getInstance: d,
                __setInstance: g,
                __deleteInstance: _
            };
            return b
        }
    }

    function Bh(e = {}) {
        const t = yi();
        if (t == null) throw zt(Wt.MUST_BE_CALL_SETUP_TOP);
        if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__) throw zt(Wt.NOT_INSLALLED);
        const n = rk(t),
            r = sk(n),
            s = KD(t),
            o = ik(e, s);
        if (n.mode === "legacy" && !e.__useComponent) {
            if (!n.allowComposition) throw zt(Wt.NOT_AVAILABLE_IN_LEGACY_MODE);
            return ck(t, o, r, e)
        }
        if (o === "global") return uT(r, e, s), r;
        if (o === "parent") {
            let f = ak(n, t, e.__useComponent);
            return f == null && (f = r), f
        }
        const c = n;
        let u = c.__getInstance(t);
        if (u == null) {
            const f = cn({}, e);
            "__i18n" in s && (f.__i18n = s.__i18n), r && (f.__root = r), u = Uh(f), ok(c, t), c.__setInstance(t, u)
        }
        return u
    }

    function nk(e, t, n) {
        const r = _L(); {
            const s = t ? r.run(() => $d(e)) : r.run(() => Uh(e));
            if (s == null) throw zt(Wt.UNEXPECTED_ERROR);
            return [r, s]
        }
    }

    function rk(e) {
        {
            const t = pn(e.isCE ? ek : e.appContext.app.__VUE_I18N_SYMBOL__);
            if (!t) throw zt(e.isCE ? Wt.NOT_INSLALLED_WITH_PROVIDE : Wt.UNEXPECTED_ERROR);
            return t
        }
    }

    function ik(e, t) {
        return Rl(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local"
    }

    function sk(e) {
        return e.mode === "composition" ? e.global : e.global.__composer
    }

    function ak(e, t, n = !1) {
        let r = null;
        const s = t.root;
        let o = t.parent;
        for (; o != null;) {
            const c = e;
            if (e.mode === "composition") r = c.__getInstance(o);
            else {
                const u = c.__getInstance(o);
                u != null && (r = u.__composer, n && r && !r[lT] && (r = null))
            }
            if (r != null || s === o) break;
            o = o.parent
        }
        return r
    }

    function ok(e, t, n) {
        Ol(() => {}, t), Al(() => {
            e.__deleteInstance(t)
        }, t)
    }

    function ck(e, t, n, r = {}) {
        const s = t === "local",
            o = YL(null);
        if (s && e.proxy && !(e.proxy.$options.i18n || e.proxy.$options.__i18n)) throw zt(Wt.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
        const c = tt(r.inheritLocale) ? r.inheritLocale : !0,
            u = et(s && c ? n.locale.value : ve(r.locale) ? r.locale : bo),
            f = et(s && c ? n.fallbackLocale.value : ve(r.fallbackLocale) || St(r.fallbackLocale) || Ge(r.fallbackLocale) || r.fallbackLocale === !1 ? r.fallbackLocale : u.value),
            d = et($l(u.value, r)),
            g = et(Ge(r.datetimeFormats) ? r.datetimeFormats : {
                [u.value]: {}
            }),
            _ = et(Ge(r.numberFormats) ? r.numberFormats : {
                [u.value]: {}
            }),
            b = s ? n.missingWarn : tt(r.missingWarn) || Ti(r.missingWarn) ? r.missingWarn : !0,
            I = s ? n.fallbackWarn : tt(r.fallbackWarn) || Ti(r.fallbackWarn) ? r.fallbackWarn : !0,
            R = s ? n.fallbackRoot : tt(r.fallbackRoot) ? r.fallbackRoot : !0,
            M = !!r.fallbackFormat,
            W = Ut(r.missing) ? r.missing : null,
            C = Ut(r.postTranslation) ? r.postTranslation : null,
            V = s ? n.warnHtmlMessage : tt(r.warnHtmlMessage) ? r.warnHtmlMessage : !0,
            q = !!r.escapeParameter,
            j = s ? n.modifiers : Ge(r.modifiers) ? r.modifiers : {},
            G = r.pluralRules || s && n.pluralRules;

        function se() {
            return [u.value, f.value, d.value, g.value, _.value]
        }
        const ce = On({
                get: () => o.value ? o.value.locale.value : u.value,
                set: p => {
                    o.value && (o.value.locale.value = p), u.value = p
                }
            }),
            le = On({
                get: () => o.value ? o.value.fallbackLocale.value : f.value,
                set: p => {
                    o.value && (o.value.fallbackLocale.value = p), f.value = p
                }
            }),
            ue = On(() => o.value ? o.value.messages.value : d.value),
            Ce = On(() => g.value),
            be = On(() => _.value);

        function fe() {
            return o.value ? o.value.getPostTranslationHandler() : C
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

        function Ee(...p) {
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

        function At(p) {
            return o.value ? o.value.getLocaleMessage(p) : {}
        }

        function Ht(p, O) {
            o.value && (o.value.setLocaleMessage(p, O), d.value[p] = O)
        }

        function It(p, O) {
            o.value && o.value.mergeLocaleMessage(p, O)
        }

        function Xt(p) {
            return o.value ? o.value.getDateTimeFormat(p) : {}
        }

        function it(p, O) {
            o.value && (o.value.setDateTimeFormat(p, O), g.value[p] = O)
        }

        function vt(p, O) {
            o.value && o.value.mergeDateTimeFormat(p, O)
        }

        function st(p) {
            return o.value ? o.value.getNumberFormat(p) : {}
        }

        function Pt(p, O) {
            o.value && (o.value.setNumberFormat(p, O), _.value[p] = O)
        }

        function kt(p, O) {
            o.value && o.value.mergeNumberFormat(p, O)
        }
        const Lt = {
            get id() {
                return o.value ? o.value.id : -1
            },
            locale: ce,
            fallbackLocale: le,
            messages: ue,
            datetimeFormats: Ce,
            numberFormats: be,
            get inheritLocale() {
                return o.value ? o.value.inheritLocale : c
            },
            set inheritLocale(p) {
                o.value && (o.value.inheritLocale = p)
            },
            get availableLocales() {
                return o.value ? o.value.availableLocales : Object.keys(d.value)
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
                return o.value ? o.value.fallbackWarn : I
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
                return o.value ? o.value.warnHtmlMessage : V
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
            t: Ee,
            getPostTranslationHandler: fe,
            setPostTranslationHandler: Oe,
            getMissingHandler: F,
            setMissingHandler: re,
            rt: me,
            d: Se,
            n: Me,
            tm: Fe,
            te: Je,
            getLocaleMessage: At,
            setLocaleMessage: Ht,
            mergeLocaleMessage: It,
            getDateTimeFormat: Xt,
            setDateTimeFormat: it,
            mergeDateTimeFormat: vt,
            getNumberFormat: st,
            setNumberFormat: Pt,
            mergeNumberFormat: kt
        };

        function m(p) {
            p.locale.value = u.value, p.fallbackLocale.value = f.value, Object.keys(d.value).forEach(O => {
                p.mergeLocaleMessage(O, d.value[O])
            }), Object.keys(g.value).forEach(O => {
                p.mergeDateTimeFormat(O, g.value[O])
            }), Object.keys(_.value).forEach(O => {
                p.mergeNumberFormat(O, _.value[O])
            }), p.escapeParameter = q, p.fallbackFormat = M, p.fallbackRoot = R, p.fallbackWarn = I, p.missingWarn = b, p.warnHtmlMessage = V
        }
        return Ab(() => {
            if (e.proxy == null || e.proxy.$i18n == null) throw zt(Wt.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
            const p = o.value = e.proxy.$i18n.__composer;
            t === "global" ? (u.value = p.locale.value, f.value = p.fallbackLocale.value, d.value = p.messages.value, g.value = p.datetimeFormats.value, _.value = p.numberFormats.value) : s && m(p)
        }), Lt
    }
    const lk = ["locale", "fallbackLocale", "availableLocales"],
        uk = ["t", "rt", "d", "n", "tm"];

    function fk(e, t) {
        const n = Object.create(null);
        lk.forEach(r => {
            const s = Object.getOwnPropertyDescriptor(t, r);
            if (!s) throw zt(Wt.UNEXPECTED_ERROR);
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
        }), e.config.globalProperties.$i18n = n, uk.forEach(r => {
            const s = Object.getOwnPropertyDescriptor(t, r);
            if (!s || !s.value) throw zt(Wt.UNEXPECTED_ERROR);
            Object.defineProperty(e.config.globalProperties, `$${r}`, s)
        })
    }
    kD(BD);
    MD(ED);
    xD(Qb);
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

    function dk(e) {
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

    function hk() {
        this.__data__ = [], this.size = 0
    }
    var pk = hk;

    function gk(e, t) {
        return e === t || e !== e && t !== t
    }
    var Pl = gk,
        mk = Pl;

    function vk(e, t) {
        for (var n = e.length; n--;)
            if (mk(e[n][0], t)) return n;
        return -1
    }
    var Dl = vk,
        Ek = Dl,
        _k = Array.prototype,
        yk = _k.splice;

    function bk(e) {
        var t = this.__data__,
            n = Ek(t, e);
        if (n < 0) return !1;
        var r = t.length - 1;
        return n == r ? t.pop() : yk.call(t, n, 1), --this.size, !0
    }
    var Tk = bk,
        Sk = Dl;

    function Ok(e) {
        var t = this.__data__,
            n = Sk(t, e);
        return n < 0 ? void 0 : t[n][1]
    }
    var Ak = Ok,
        Ik = Dl;

    function wk(e) {
        return Ik(this.__data__, e) > -1
    }
    var Ck = wk,
        Rk = Dl;

    function Nk(e, t) {
        var n = this.__data__,
            r = Rk(n, e);
        return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this
    }
    var Lk = Nk,
        $k = pk,
        Pk = Tk,
        Dk = Ak,
        kk = Ck,
        Mk = Lk;

    function ga(e) {
        var t = -1,
            n = e == null ? 0 : e.length;
        for (this.clear(); ++t < n;) {
            var r = e[t];
            this.set(r[0], r[1])
        }
    }
    ga.prototype.clear = $k;
    ga.prototype.delete = Pk;
    ga.prototype.get = Dk;
    ga.prototype.has = kk;
    ga.prototype.set = Mk;
    var kl = ga,
        xk = kl;

    function Uk() {
        this.__data__ = new xk, this.size = 0
    }
    var Fk = Uk;

    function Bk(e) {
        var t = this.__data__,
            n = t.delete(e);
        return this.size = t.size, n
    }
    var Gk = Bk;

    function Wk(e) {
        return this.__data__.get(e)
    }
    var jk = Wk;

    function Hk(e) {
        return this.__data__.has(e)
    }
    var Vk = Hk,
        Kk = typeof Ft == "object" && Ft && Ft.Object === Object && Ft,
        hT = Kk,
        Yk = hT,
        qk = typeof self == "object" && self && self.Object === Object && self,
        zk = Yk || qk || Function("return this")(),
        Rr = zk,
        Xk = Rr,
        Jk = Xk.Symbol,
        Ml = Jk,
        CE = Ml,
        pT = Object.prototype,
        Qk = pT.hasOwnProperty,
        Zk = pT.toString,
        Wa = CE ? CE.toStringTag : void 0;

    function eM(e) {
        var t = Qk.call(e, Wa),
            n = e[Wa];
        try {
            e[Wa] = void 0;
            var r = !0
        } catch {}
        var s = Zk.call(e);
        return r && (t ? e[Wa] = n : delete e[Wa]), s
    }
    var tM = eM,
        nM = Object.prototype,
        rM = nM.toString;

    function iM(e) {
        return rM.call(e)
    }
    var sM = iM,
        RE = Ml,
        aM = tM,
        oM = sM,
        cM = "[object Null]",
        lM = "[object Undefined]",
        NE = RE ? RE.toStringTag : void 0;

    function uM(e) {
        return e == null ? e === void 0 ? lM : cM : NE && NE in Object(e) ? aM(e) : oM(e)
    }
    var ma = uM;

    function fM(e) {
        var t = typeof e;
        return e != null && (t == "object" || t == "function")
    }
    var wi = fM,
        dM = ma,
        hM = wi,
        pM = "[object AsyncFunction]",
        gM = "[object Function]",
        mM = "[object GeneratorFunction]",
        vM = "[object Proxy]";

    function EM(e) {
        if (!hM(e)) return !1;
        var t = dM(e);
        return t == gM || t == mM || t == pM || t == vM
    }
    var Gh = EM,
        _M = Rr,
        yM = _M["__core-js_shared__"],
        bM = yM,
        Sf = bM,
        LE = function() {
            var e = /[^.]+$/.exec(Sf && Sf.keys && Sf.keys.IE_PROTO || "");
            return e ? "Symbol(src)_1." + e : ""
        }();

    function TM(e) {
        return !!LE && LE in e
    }
    var SM = TM,
        OM = Function.prototype,
        AM = OM.toString;

    function IM(e) {
        if (e != null) {
            try {
                return AM.call(e)
            } catch {}
            try {
                return e + ""
            } catch {}
        }
        return ""
    }
    var gT = IM,
        wM = Gh,
        CM = SM,
        RM = wi,
        NM = gT,
        LM = /[\\^$.*+?()[\]{}|]/g,
        $M = /^\[object .+?Constructor\]$/,
        PM = Function.prototype,
        DM = Object.prototype,
        kM = PM.toString,
        MM = DM.hasOwnProperty,
        xM = RegExp("^" + kM.call(MM).replace(LM, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

    function UM(e) {
        if (!RM(e) || CM(e)) return !1;
        var t = wM(e) ? xM : $M;
        return t.test(NM(e))
    }
    var FM = UM;

    function BM(e, t) {
        return e == null ? void 0 : e[t]
    }
    var GM = BM,
        WM = FM,
        jM = GM;

    function HM(e, t) {
        var n = jM(e, t);
        return WM(n) ? n : void 0
    }
    var ps = HM,
        VM = ps,
        KM = Rr,
        YM = VM(KM, "Map"),
        Wh = YM,
        qM = ps,
        zM = qM(Object, "create"),
        xl = zM,
        $E = xl;

    function XM() {
        this.__data__ = $E ? $E(null) : {}, this.size = 0
    }
    var JM = XM;

    function QM(e) {
        var t = this.has(e) && delete this.__data__[e];
        return this.size -= t ? 1 : 0, t
    }
    var ZM = QM,
        ex = xl,
        tx = "__lodash_hash_undefined__",
        nx = Object.prototype,
        rx = nx.hasOwnProperty;

    function ix(e) {
        var t = this.__data__;
        if (ex) {
            var n = t[e];
            return n === tx ? void 0 : n
        }
        return rx.call(t, e) ? t[e] : void 0
    }
    var sx = ix,
        ax = xl,
        ox = Object.prototype,
        cx = ox.hasOwnProperty;

    function lx(e) {
        var t = this.__data__;
        return ax ? t[e] !== void 0 : cx.call(t, e)
    }
    var ux = lx,
        fx = xl,
        dx = "__lodash_hash_undefined__";

    function hx(e, t) {
        var n = this.__data__;
        return this.size += this.has(e) ? 0 : 1, n[e] = fx && t === void 0 ? dx : t, this
    }
    var px = hx,
        gx = JM,
        mx = ZM,
        vx = sx,
        Ex = ux,
        _x = px;

    function va(e) {
        var t = -1,
            n = e == null ? 0 : e.length;
        for (this.clear(); ++t < n;) {
            var r = e[t];
            this.set(r[0], r[1])
        }
    }
    va.prototype.clear = gx;
    va.prototype.delete = mx;
    va.prototype.get = vx;
    va.prototype.has = Ex;
    va.prototype.set = _x;
    var yx = va,
        PE = yx,
        bx = kl,
        Tx = Wh;

    function Sx() {
        this.size = 0, this.__data__ = {
            hash: new PE,
            map: new(Tx || bx),
            string: new PE
        }
    }
    var Ox = Sx;

    function Ax(e) {
        var t = typeof e;
        return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
    }
    var Ix = Ax,
        wx = Ix;

    function Cx(e, t) {
        var n = e.__data__;
        return wx(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map
    }
    var Ul = Cx,
        Rx = Ul;

    function Nx(e) {
        var t = Rx(this, e).delete(e);
        return this.size -= t ? 1 : 0, t
    }
    var Lx = Nx,
        $x = Ul;

    function Px(e) {
        return $x(this, e).get(e)
    }
    var Dx = Px,
        kx = Ul;

    function Mx(e) {
        return kx(this, e).has(e)
    }
    var xx = Mx,
        Ux = Ul;

    function Fx(e, t) {
        var n = Ux(this, e),
            r = n.size;
        return n.set(e, t), this.size += n.size == r ? 0 : 1, this
    }
    var Bx = Fx,
        Gx = Ox,
        Wx = Lx,
        jx = Dx,
        Hx = xx,
        Vx = Bx;

    function Ea(e) {
        var t = -1,
            n = e == null ? 0 : e.length;
        for (this.clear(); ++t < n;) {
            var r = e[t];
            this.set(r[0], r[1])
        }
    }
    Ea.prototype.clear = Gx;
    Ea.prototype.delete = Wx;
    Ea.prototype.get = jx;
    Ea.prototype.has = Hx;
    Ea.prototype.set = Vx;
    var mT = Ea,
        Kx = kl,
        Yx = Wh,
        qx = mT,
        zx = 200;

    function Xx(e, t) {
        var n = this.__data__;
        if (n instanceof Kx) {
            var r = n.__data__;
            if (!Yx || r.length < zx - 1) return r.push([e, t]), this.size = ++n.size, this;
            n = this.__data__ = new qx(r)
        }
        return n.set(e, t), this.size = n.size, this
    }
    var Jx = Xx,
        Qx = kl,
        Zx = Fk,
        eU = Gk,
        tU = jk,
        nU = Vk,
        rU = Jx;

    function _a(e) {
        var t = this.__data__ = new Qx(e);
        this.size = t.size
    }
    _a.prototype.clear = Zx;
    _a.prototype.delete = eU;
    _a.prototype.get = tU;
    _a.prototype.has = nU;
    _a.prototype.set = rU;
    var vT = _a,
        iU = ps,
        sU = function() {
            try {
                var e = iU(Object, "defineProperty");
                return e({}, "", {}), e
            } catch {}
        }(),
        ET = sU,
        DE = ET;

    function aU(e, t, n) {
        t == "__proto__" && DE ? DE(e, t, {
            configurable: !0,
            enumerable: !0,
            value: n,
            writable: !0
        }) : e[t] = n
    }
    var jh = aU,
        oU = jh,
        cU = Pl;

    function lU(e, t, n) {
        (n !== void 0 && !cU(e[t], n) || n === void 0 && !(t in e)) && oU(e, t, n)
    }
    var _T = lU;

    function uU(e) {
        return function(t, n, r) {
            for (var s = -1, o = Object(t), c = r(t), u = c.length; u--;) {
                var f = c[e ? u : ++s];
                if (n(o[f], f, o) === !1) break
            }
            return t
        }
    }
    var fU = uU,
        dU = fU,
        hU = dU(),
        pU = hU,
        rl = {
            exports: {}
        };
    (function(e, t) {
        var n = Rr,
            r = t && !t.nodeType && t,
            s = r && !0 && e && !e.nodeType && e,
            o = s && s.exports === r,
            c = o ? n.Buffer : void 0,
            u = c ? c.allocUnsafe : void 0;

        function f(d, g) {
            if (g) return d.slice();
            var _ = d.length,
                b = u ? u(_) : new d.constructor(_);
            return d.copy(b), b
        }
        e.exports = f
    })(rl, rl.exports);
    var gU = Rr,
        mU = gU.Uint8Array,
        vU = mU,
        kE = vU;

    function EU(e) {
        var t = new e.constructor(e.byteLength);
        return new kE(t).set(new kE(e)), t
    }
    var Hh = EU,
        _U = Hh;

    function yU(e, t) {
        var n = t ? _U(e.buffer) : e.buffer;
        return new e.constructor(n, e.byteOffset, e.length)
    }
    var yT = yU;

    function bU(e, t) {
        var n = -1,
            r = e.length;
        for (t || (t = Array(r)); ++n < r;) t[n] = e[n];
        return t
    }
    var bT = bU,
        TU = wi,
        ME = Object.create,
        SU = function() {
            function e() {}
            return function(t) {
                if (!TU(t)) return {};
                if (ME) return ME(t);
                e.prototype = t;
                var n = new e;
                return e.prototype = void 0, n
            }
        }(),
        OU = SU;

    function AU(e, t) {
        return function(n) {
            return e(t(n))
        }
    }
    var TT = AU,
        IU = TT,
        wU = IU(Object.getPrototypeOf, Object),
        Vh = wU,
        CU = Object.prototype;

    function RU(e) {
        var t = e && e.constructor,
            n = typeof t == "function" && t.prototype || CU;
        return e === n
    }
    var Kh = RU,
        NU = OU,
        LU = Vh,
        $U = Kh;

    function PU(e) {
        return typeof e.constructor == "function" && !$U(e) ? NU(LU(e)) : {}
    }
    var ST = PU;

    function DU(e) {
        return e != null && typeof e == "object"
    }
    var Ci = DU,
        kU = ma,
        MU = Ci,
        xU = "[object Arguments]";

    function UU(e) {
        return MU(e) && kU(e) == xU
    }
    var FU = UU,
        xE = FU,
        BU = Ci,
        OT = Object.prototype,
        GU = OT.hasOwnProperty,
        WU = OT.propertyIsEnumerable,
        jU = xE(function() {
            return arguments
        }()) ? xE : function(e) {
            return BU(e) && GU.call(e, "callee") && !WU.call(e, "callee")
        },
        AT = jU,
        HU = Array.isArray,
        Ri = HU,
        VU = 9007199254740991;

    function KU(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= VU
    }
    var IT = KU,
        YU = Gh,
        qU = IT;

    function zU(e) {
        return e != null && qU(e.length) && !YU(e)
    }
    var Fl = zU,
        XU = Fl,
        JU = Ci;

    function QU(e) {
        return JU(e) && XU(e)
    }
    var ZU = QU,
        ho = {
            exports: {}
        };

    function e2() {
        return !1
    }
    var t2 = e2;
    (function(e, t) {
        var n = Rr,
            r = t2,
            s = t && !t.nodeType && t,
            o = s && !0 && e && !e.nodeType && e,
            c = o && o.exports === s,
            u = c ? n.Buffer : void 0,
            f = u ? u.isBuffer : void 0,
            d = f || r;
        e.exports = d
    })(ho, ho.exports);
    var n2 = ma,
        r2 = Vh,
        i2 = Ci,
        s2 = "[object Object]",
        a2 = Function.prototype,
        o2 = Object.prototype,
        wT = a2.toString,
        c2 = o2.hasOwnProperty,
        l2 = wT.call(Object);

    function u2(e) {
        if (!i2(e) || n2(e) != s2) return !1;
        var t = r2(e);
        if (t === null) return !0;
        var n = c2.call(t, "constructor") && t.constructor;
        return typeof n == "function" && n instanceof n && wT.call(n) == l2
    }
    var f2 = u2,
        d2 = ma,
        h2 = IT,
        p2 = Ci,
        g2 = "[object Arguments]",
        m2 = "[object Array]",
        v2 = "[object Boolean]",
        E2 = "[object Date]",
        _2 = "[object Error]",
        y2 = "[object Function]",
        b2 = "[object Map]",
        T2 = "[object Number]",
        S2 = "[object Object]",
        O2 = "[object RegExp]",
        A2 = "[object Set]",
        I2 = "[object String]",
        w2 = "[object WeakMap]",
        C2 = "[object ArrayBuffer]",
        R2 = "[object DataView]",
        N2 = "[object Float32Array]",
        L2 = "[object Float64Array]",
        $2 = "[object Int8Array]",
        P2 = "[object Int16Array]",
        D2 = "[object Int32Array]",
        k2 = "[object Uint8Array]",
        M2 = "[object Uint8ClampedArray]",
        x2 = "[object Uint16Array]",
        U2 = "[object Uint32Array]",
        Ct = {};
    Ct[N2] = Ct[L2] = Ct[$2] = Ct[P2] = Ct[D2] = Ct[k2] = Ct[M2] = Ct[x2] = Ct[U2] = !0;
    Ct[g2] = Ct[m2] = Ct[C2] = Ct[v2] = Ct[R2] = Ct[E2] = Ct[_2] = Ct[y2] = Ct[b2] = Ct[T2] = Ct[S2] = Ct[O2] = Ct[A2] = Ct[I2] = Ct[w2] = !1;

    function F2(e) {
        return p2(e) && h2(e.length) && !!Ct[d2(e)]
    }
    var B2 = F2;

    function G2(e) {
        return function(t) {
            return e(t)
        }
    }
    var Yh = G2,
        po = {
            exports: {}
        };
    (function(e, t) {
        var n = hT,
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
    })(po, po.exports);
    var W2 = B2,
        j2 = Yh,
        UE = po.exports,
        FE = UE && UE.isTypedArray,
        H2 = FE ? j2(FE) : W2,
        CT = H2;

    function V2(e, t) {
        if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__") return e[t]
    }
    var RT = V2,
        K2 = jh,
        Y2 = Pl,
        q2 = Object.prototype,
        z2 = q2.hasOwnProperty;

    function X2(e, t, n) {
        var r = e[t];
        (!(z2.call(e, t) && Y2(r, n)) || n === void 0 && !(t in e)) && K2(e, t, n)
    }
    var NT = X2,
        J2 = NT,
        Q2 = jh;

    function Z2(e, t, n, r) {
        var s = !n;
        n || (n = {});
        for (var o = -1, c = t.length; ++o < c;) {
            var u = t[o],
                f = r ? r(n[u], e[u], u, n, e) : void 0;
            f === void 0 && (f = e[u]), s ? Q2(n, u, f) : J2(n, u, f)
        }
        return n
    }
    var To = Z2;

    function eF(e, t) {
        for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
        return r
    }
    var tF = eF,
        nF = 9007199254740991,
        rF = /^(?:0|[1-9]\d*)$/;

    function iF(e, t) {
        var n = typeof e;
        return t = t == null ? nF : t, !!t && (n == "number" || n != "symbol" && rF.test(e)) && e > -1 && e % 1 == 0 && e < t
    }
    var LT = iF,
        sF = tF,
        aF = AT,
        oF = Ri,
        cF = ho.exports,
        lF = LT,
        uF = CT,
        fF = Object.prototype,
        dF = fF.hasOwnProperty;

    function hF(e, t) {
        var n = oF(e),
            r = !n && aF(e),
            s = !n && !r && cF(e),
            o = !n && !r && !s && uF(e),
            c = n || r || s || o,
            u = c ? sF(e.length, String) : [],
            f = u.length;
        for (var d in e)(t || dF.call(e, d)) && !(c && (d == "length" || s && (d == "offset" || d == "parent") || o && (d == "buffer" || d == "byteLength" || d == "byteOffset") || lF(d, f))) && u.push(d);
        return u
    }
    var $T = hF;

    function pF(e) {
        var t = [];
        if (e != null)
            for (var n in Object(e)) t.push(n);
        return t
    }
    var gF = pF,
        mF = wi,
        vF = Kh,
        EF = gF,
        _F = Object.prototype,
        yF = _F.hasOwnProperty;

    function bF(e) {
        if (!mF(e)) return EF(e);
        var t = vF(e),
            n = [];
        for (var r in e) r == "constructor" && (t || !yF.call(e, r)) || n.push(r);
        return n
    }
    var TF = bF,
        SF = $T,
        OF = TF,
        AF = Fl;

    function IF(e) {
        return AF(e) ? SF(e, !0) : OF(e)
    }
    var So = IF,
        wF = To,
        CF = So;

    function RF(e) {
        return wF(e, CF(e))
    }
    var NF = RF,
        BE = _T,
        LF = rl.exports,
        $F = yT,
        PF = bT,
        DF = ST,
        GE = AT,
        WE = Ri,
        kF = ZU,
        MF = ho.exports,
        xF = Gh,
        UF = wi,
        FF = f2,
        BF = CT,
        jE = RT,
        GF = NF;

    function WF(e, t, n, r, s, o, c) {
        var u = jE(e, n),
            f = jE(t, n),
            d = c.get(f);
        if (d) {
            BE(e, n, d);
            return
        }
        var g = o ? o(u, f, n + "", e, t, c) : void 0,
            _ = g === void 0;
        if (_) {
            var b = WE(f),
                I = !b && MF(f),
                R = !b && !I && BF(f);
            g = f, b || I || R ? WE(u) ? g = u : kF(u) ? g = PF(u) : I ? (_ = !1, g = LF(f, !0)) : R ? (_ = !1, g = $F(f, !0)) : g = [] : FF(f) || GE(f) ? (g = u, GE(u) ? g = GF(u) : (!UF(u) || xF(u)) && (g = DF(f))) : _ = !1
        }
        _ && (c.set(f, g), s(g, f, r, o, c), c.delete(f)), BE(e, n, g)
    }
    var jF = WF,
        HF = vT,
        VF = _T,
        KF = pU,
        YF = jF,
        qF = wi,
        zF = So,
        XF = RT;

    function PT(e, t, n, r, s) {
        e !== t && KF(t, function(o, c) {
            if (s || (s = new HF), qF(o)) YF(e, t, c, n, PT, r, s);
            else {
                var u = r ? r(XF(e, c), o, c + "", e, t, s) : void 0;
                u === void 0 && (u = o), VF(e, c, u)
            }
        }, zF)
    }
    var JF = PT;

    function QF(e) {
        return e
    }
    var DT = QF;

    function ZF(e, t, n) {
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
    var eB = ZF,
        tB = eB,
        HE = Math.max;

    function nB(e, t, n) {
        return t = HE(t === void 0 ? e.length - 1 : t, 0),
            function() {
                for (var r = arguments, s = -1, o = HE(r.length - t, 0), c = Array(o); ++s < o;) c[s] = r[t + s];
                s = -1;
                for (var u = Array(t + 1); ++s < t;) u[s] = r[s];
                return u[t] = n(c), tB(e, this, u)
            }
    }
    var rB = nB;

    function iB(e) {
        return function() {
            return e
        }
    }
    var sB = iB,
        aB = sB,
        VE = ET,
        oB = DT,
        cB = VE ? function(e, t) {
            return VE(e, "toString", {
                configurable: !0,
                enumerable: !1,
                value: aB(t),
                writable: !0
            })
        } : oB,
        lB = cB,
        uB = 800,
        fB = 16,
        dB = Date.now;

    function hB(e) {
        var t = 0,
            n = 0;
        return function() {
            var r = dB(),
                s = fB - (r - n);
            if (n = r, s > 0) {
                if (++t >= uB) return arguments[0]
            } else t = 0;
            return e.apply(void 0, arguments)
        }
    }
    var pB = hB,
        gB = lB,
        mB = pB,
        vB = mB(gB),
        EB = vB,
        _B = DT,
        yB = rB,
        bB = EB;

    function TB(e, t) {
        return bB(yB(e, t, _B), e + "")
    }
    var SB = TB,
        OB = Pl,
        AB = Fl,
        IB = LT,
        wB = wi;

    function CB(e, t, n) {
        if (!wB(n)) return !1;
        var r = typeof t;
        return (r == "number" ? AB(n) && IB(t, n.length) : r == "string" && t in n) ? OB(n[t], e) : !1
    }
    var RB = CB,
        NB = SB,
        LB = RB;

    function $B(e) {
        return NB(function(t, n) {
            var r = -1,
                s = n.length,
                o = s > 1 ? n[s - 1] : void 0,
                c = s > 2 ? n[2] : void 0;
            for (o = e.length > 3 && typeof o == "function" ? (s--, o) : void 0, c && LB(n[0], n[1], c) && (o = s < 3 ? void 0 : o, s = 1), t = Object(t); ++r < s;) {
                var u = n[r];
                u && e(t, u, r, o)
            }
            return t
        })
    }
    var PB = $B,
        DB = JF,
        kB = PB,
        MB = kB(function(e, t, n) {
            DB(e, t, n)
        }),
        xB = MB;
    class Vs {
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
            return xB(t[0], ...t)
        }
    }
    Re(Vs, "locale"), Re(Vs, "supported", ["en", "fr", "it", "de", "es", "es-XL"]);
    const Gp = class {
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
        static isProduction() {
            return window.location.hostname === "jackbox.tv"
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
            return t = t.replace("\u2026", "..."), t.replace(/[^\u00A1\u0020-\u007E\u00BF-\u00FF’]/gi, "")
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
            let d = (Math.min(Math.max(0, (o & 255) * n), 255) | u << 8 | c << 16).toString(16);
            for (; d.length < s.length;) d = `0${d}`;
            return (r ? "#" : "") + d
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
    let hn = Gp;
    Re(hn, "queryParams", new URLSearchParams(window.location.search)), Re(hn, "getQueryParam", t => Gp.queryParams.get(t)), Re(hn, "sleep", t => new Promise(n => {
        window.setTimeout(n, t)
    }));
    class ke {
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
                namespace: (s = (r = hn.getQueryParam("namespace")) != null ? r : hn.getQueryParam("ns")) != null ? s : this.defaultNamespace,
                isDisabled: hn.queryParams.has("incognito") || hn.queryParams.has("nc")
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
    Re(ke, "defaultNamespace", "tv");
    class ra {
        constructor() {
            Re(this, "artifacts");
            this.artifacts = this.list()
        }
        get hasUnviewed() {
            return this.artifacts.some(t => !t.viewed)
        }
        add(t, n) {
            ra.add(t, n), this.artifacts = this.list()
        }
        static add(t, n) {
            if (!ke.isSupported) return;
            const r = this.isTestArtifact(t) ? "http" : "https",
                s = this.isTestArtifact(t) ? "games-test.jackbox.tv" : "games.jackbox.tv",
                o = `${r}://${s}/artifact/${t.categoryId}/${t.artifactId}/`,
                c = ke.get("galleries") || "[]";
            try {
                const u = JSON.parse(c) || [];
                if (u.some(f => f.url === o)) return;
                u.unshift({
                    url: o,
                    time: new Date().getTime(),
                    categoryId: t.categoryId,
                    viewed: !1
                }), ke.set("galleries", JSON.stringify(u.slice(0, 40)))
            } catch {
                console.warn("[Artifacts] Unable to add artifact to local storage")
            }
        }
        remove(t) {
            if (!ke.isSupported) return;
            const n = ke.get("galleries") || "[]";
            try {
                const r = JSON.parse(n) || [];
                r.splice(t, 1), ke.set("galleries", JSON.stringify(r)), this.artifacts = this.list()
            } catch {
                console.warn("[Artifacts] Unable to remove artifact")
            }
        }
        setAsViewed(t) {
            ra.setAsViewed(t), this.artifacts = this.list()
        }
        static setAsViewed(t) {
            if (!ke.isSupported) return;
            const n = ke.get("galleries") || "[]";
            try {
                const r = JSON.parse(n) || [];
                r.length && (r[t].viewed = !0), ke.set("galleries", JSON.stringify(r))
            } catch {
                console.warn(`[Artifacts] Unable to mark artifact ${t} as viewed`)
            }
        }
        static isTestArtifact(t) {
            var n;
            return ((n = t == null ? void 0 : t.rootId) == null ? void 0 : n.indexOf("test")) !== -1
        }
        list() {
            if (!ke.isSupported) return [];
            const t = new Intl.DateTimeFormat(Vs.locale, {
                    year: "numeric",
                    month: "short",
                    day: "numeric"
                }),
                n = ke.get("galleries") || "[]",
                r = Date.now();
            try {
                return (JSON.parse(n) || []).filter(o => r - o.time < 525600 * 60 * 1e3).map(o => {
                    const c = new Date(o.time),
                        u = t.format(c),
                        f = o.url.split("/"),
                        d = f[f.length - 1] === "" ? f[f.length - 2] : f[f.length - 1];
                    let g = o.categoryId;
                    return g || (o.url.indexOf("Quiplash2") !== -1 ? g = "Quiplash2Game" : o.url.indexOf("Drawful") !== -1 ? g = "DrawfulGame" : o.url.indexOf("TeeKO") !== -1 ? g = "TeeKOGame" : o.url.indexOf("TriviaDeath") !== -1 && (g = "TriviaDeathResults")), {
                        id: d,
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
    var Pd = {
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
                if (u.arrayBuffer) var d = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                    g = ArrayBuffer.isView || function(F) {
                        return F && d.indexOf(Object.prototype.toString.call(F)) > -1
                    };

                function _(F) {
                    if (typeof F != "string" && (F = String(F)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(F)) throw new TypeError("Invalid character in header field name");
                    return F.toLowerCase()
                }

                function b(F) {
                    return typeof F != "string" && (F = String(F)), F
                }

                function I(F) {
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
                    F = _(F), re = b(re);
                    var de = this.map[F];
                    this.map[F] = de ? de + ", " + re : re
                }, R.prototype.delete = function(F) {
                    delete this.map[_(F)]
                }, R.prototype.get = function(F) {
                    return F = _(F), this.has(F) ? this.map[F] : null
                }, R.prototype.has = function(F) {
                    return this.map.hasOwnProperty(_(F))
                }, R.prototype.set = function(F, re) {
                    this.map[_(F)] = b(re)
                }, R.prototype.forEach = function(F, re) {
                    for (var de in this.map) this.map.hasOwnProperty(de) && F.call(re, this.map[de], de, this)
                }, R.prototype.keys = function() {
                    var F = [];
                    return this.forEach(function(re, de) {
                        F.push(de)
                    }), I(F)
                }, R.prototype.values = function() {
                    var F = [];
                    return this.forEach(function(re) {
                        F.push(re)
                    }), I(F)
                }, R.prototype.entries = function() {
                    var F = [];
                    return this.forEach(function(re, de) {
                        F.push([de, re])
                    }), I(F)
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

                function C(F) {
                    var re = new FileReader,
                        de = W(re);
                    return re.readAsArrayBuffer(F), de
                }

                function V(F) {
                    var re = new FileReader,
                        de = W(re);
                    return re.readAsText(F), de
                }

                function q(F) {
                    for (var re = new Uint8Array(F), de = new Array(re.length), Ee = 0; Ee < re.length; Ee++) de[Ee] = String.fromCharCode(re[Ee]);
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
                        return this._bodyArrayBuffer ? M(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(C)
                    }), this.text = function() {
                        var F = M(this);
                        if (F) return F;
                        if (this._bodyBlob) return V(this._bodyBlob);
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
                            var Ee = de.split("="),
                                me = Ee.shift().replace(/\+/g, " "),
                                Se = Ee.join("=").replace(/\+/g, " ");
                            re.append(decodeURIComponent(me), decodeURIComponent(Se))
                        }
                    }), re
                }

                function Ce(F) {
                    var re = new R,
                        de = F.replace(/\r?\n[\t ]+/g, " ");
                    return de.split(/\r?\n/).forEach(function(Ee) {
                        var me = Ee.split(":"),
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
                        var Ee = Error(re);
                        this.stack = Ee.stack
                    }, c.DOMException.prototype = Object.create(Error.prototype), c.DOMException.prototype.constructor = c.DOMException
                }

                function Oe(F, re) {
                    return new Promise(function(de, Ee) {
                        var me = new le(F, re);
                        if (me.signal && me.signal.aborted) return Ee(new c.DOMException("Aborted", "AbortError"));
                        var Se = new XMLHttpRequest;

                        function Me() {
                            Se.abort()
                        }
                        Se.onload = function() {
                            var Fe = {
                                status: Se.status,
                                statusText: Se.statusText,
                                headers: Ce(Se.getAllResponseHeaders() || "")
                            };
                            Fe.url = "responseURL" in Se ? Se.responseURL : Fe.headers.get("X-Request-URL");
                            var Je = "response" in Se ? Se.response : Se.responseText;
                            de(new be(Je, Fe))
                        }, Se.onerror = function() {
                            Ee(new TypeError("Network request failed"))
                        }, Se.ontimeout = function() {
                            Ee(new TypeError("Network request failed"))
                        }, Se.onabort = function() {
                            Ee(new c.DOMException("Aborted", "AbortError"))
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
    })(Pd, Pd.exports);
    var UB = function() {
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
        KE = typeof Symbol < "u" && Symbol,
        FB = UB,
        BB = function() {
            return typeof KE != "function" || typeof Symbol != "function" || typeof KE("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : FB()
        },
        GB = "Function.prototype.bind called on incompatible ",
        Of = Array.prototype.slice,
        WB = Object.prototype.toString,
        jB = "[object Function]",
        HB = function(t) {
            var n = this;
            if (typeof n != "function" || WB.call(n) !== jB) throw new TypeError(GB + n);
            for (var r = Of.call(arguments, 1), s, o = function() {
                    if (this instanceof s) {
                        var g = n.apply(this, r.concat(Of.call(arguments)));
                        return Object(g) === g ? g : this
                    } else return n.apply(t, r.concat(Of.call(arguments)))
                }, c = Math.max(0, n.length - r.length), u = [], f = 0; f < c; f++) u.push("$" + f);
            if (s = Function("binder", "return function (" + u.join(",") + "){ return binder.apply(this,arguments); }")(o), n.prototype) {
                var d = function() {};
                d.prototype = n.prototype, s.prototype = new d, d.prototype = null
            }
            return s
        },
        VB = HB,
        qh = Function.prototype.bind || VB,
        KB = qh,
        YB = KB.call(Function.call, Object.prototype.hasOwnProperty),
        nt, ia = SyntaxError,
        kT = Function,
        Ks = TypeError,
        Af = function(e) {
            try {
                return kT('"use strict"; return (' + e + ").constructor;")()
            } catch {}
        },
        ls = Object.getOwnPropertyDescriptor;
    if (ls) try {
        ls({}, "")
    } catch {
        ls = null
    }
    var If = function() {
            throw new Ks
        },
        qB = ls ? function() {
            try {
                return arguments.callee, If
            } catch {
                try {
                    return ls(arguments, "callee").get
                } catch {
                    return If
                }
            }
        }() : If,
        Ls = BB(),
        ui = Object.getPrototypeOf || function(e) {
            return e.__proto__
        },
        ks = {},
        zB = typeof Uint8Array > "u" ? nt : ui(Uint8Array),
        Ys = {
            "%AggregateError%": typeof AggregateError > "u" ? nt : AggregateError,
            "%Array%": Array,
            "%ArrayBuffer%": typeof ArrayBuffer > "u" ? nt : ArrayBuffer,
            "%ArrayIteratorPrototype%": Ls ? ui([][Symbol.iterator]()) : nt,
            "%AsyncFromSyncIteratorPrototype%": nt,
            "%AsyncFunction%": ks,
            "%AsyncGenerator%": ks,
            "%AsyncGeneratorFunction%": ks,
            "%AsyncIteratorPrototype%": ks,
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
            "%Function%": kT,
            "%GeneratorFunction%": ks,
            "%Int8Array%": typeof Int8Array > "u" ? nt : Int8Array,
            "%Int16Array%": typeof Int16Array > "u" ? nt : Int16Array,
            "%Int32Array%": typeof Int32Array > "u" ? nt : Int32Array,
            "%isFinite%": isFinite,
            "%isNaN%": isNaN,
            "%IteratorPrototype%": Ls ? ui(ui([][Symbol.iterator]())) : nt,
            "%JSON%": typeof JSON == "object" ? JSON : nt,
            "%Map%": typeof Map > "u" ? nt : Map,
            "%MapIteratorPrototype%": typeof Map > "u" || !Ls ? nt : ui(new Map()[Symbol.iterator]()),
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
            "%SetIteratorPrototype%": typeof Set > "u" || !Ls ? nt : ui(new Set()[Symbol.iterator]()),
            "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? nt : SharedArrayBuffer,
            "%String%": String,
            "%StringIteratorPrototype%": Ls ? ui("" [Symbol.iterator]()) : nt,
            "%Symbol%": Ls ? Symbol : nt,
            "%SyntaxError%": ia,
            "%ThrowTypeError%": qB,
            "%TypedArray%": zB,
            "%TypeError%": Ks,
            "%Uint8Array%": typeof Uint8Array > "u" ? nt : Uint8Array,
            "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? nt : Uint8ClampedArray,
            "%Uint16Array%": typeof Uint16Array > "u" ? nt : Uint16Array,
            "%Uint32Array%": typeof Uint32Array > "u" ? nt : Uint32Array,
            "%URIError%": URIError,
            "%WeakMap%": typeof WeakMap > "u" ? nt : WeakMap,
            "%WeakRef%": typeof WeakRef > "u" ? nt : WeakRef,
            "%WeakSet%": typeof WeakSet > "u" ? nt : WeakSet
        },
        XB = function e(t) {
            var n;
            if (t === "%AsyncFunction%") n = Af("async function () {}");
            else if (t === "%GeneratorFunction%") n = Af("function* () {}");
            else if (t === "%AsyncGeneratorFunction%") n = Af("async function* () {}");
            else if (t === "%AsyncGenerator%") {
                var r = e("%AsyncGeneratorFunction%");
                r && (n = r.prototype)
            } else if (t === "%AsyncIteratorPrototype%") {
                var s = e("%AsyncGenerator%");
                s && (n = ui(s.prototype))
            }
            return Ys[t] = n, n
        },
        YE = {
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
        Oo = qh,
        il = YB,
        JB = Oo.call(Function.call, Array.prototype.concat),
        QB = Oo.call(Function.apply, Array.prototype.splice),
        qE = Oo.call(Function.call, String.prototype.replace),
        sl = Oo.call(Function.call, String.prototype.slice),
        ZB = Oo.call(Function.call, RegExp.prototype.exec),
        eG = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
        tG = /\\(\\)?/g,
        nG = function(t) {
            var n = sl(t, 0, 1),
                r = sl(t, -1);
            if (n === "%" && r !== "%") throw new ia("invalid intrinsic syntax, expected closing `%`");
            if (r === "%" && n !== "%") throw new ia("invalid intrinsic syntax, expected opening `%`");
            var s = [];
            return qE(t, eG, function(o, c, u, f) {
                s[s.length] = u ? qE(f, tG, "$1") : c || o
            }), s
        },
        rG = function(t, n) {
            var r = t,
                s;
            if (il(YE, r) && (s = YE[r], r = "%" + s[0] + "%"), il(Ys, r)) {
                var o = Ys[r];
                if (o === ks && (o = XB(r)), typeof o > "u" && !n) throw new Ks("intrinsic " + t + " exists, but is not available. Please file an issue!");
                return {
                    alias: s,
                    name: r,
                    value: o
                }
            }
            throw new ia("intrinsic " + t + " does not exist!")
        },
        zh = function(t, n) {
            if (typeof t != "string" || t.length === 0) throw new Ks("intrinsic name must be a non-empty string");
            if (arguments.length > 1 && typeof n != "boolean") throw new Ks('"allowMissing" argument must be a boolean');
            if (ZB(/^%?[^%]*%?$/g, t) === null) throw new ia("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
            var r = nG(t),
                s = r.length > 0 ? r[0] : "",
                o = rG("%" + s + "%", n),
                c = o.name,
                u = o.value,
                f = !1,
                d = o.alias;
            d && (s = d[0], QB(r, JB([0, 1], d)));
            for (var g = 1, _ = !0; g < r.length; g += 1) {
                var b = r[g],
                    I = sl(b, 0, 1),
                    R = sl(b, -1);
                if ((I === '"' || I === "'" || I === "`" || R === '"' || R === "'" || R === "`") && I !== R) throw new ia("property names with quotes must have matching quotes");
                if ((b === "constructor" || !_) && (f = !0), s += "." + b, c = "%" + s + "%", il(Ys, c)) u = Ys[c];
                else if (u != null) {
                    if (!(b in u)) {
                        if (!n) throw new Ks("base intrinsic for " + t + " exists, but the property is not available.");
                        return
                    }
                    if (ls && g + 1 >= r.length) {
                        var M = ls(u, b);
                        _ = !!M, _ && "get" in M && !("originalValue" in M.get) ? u = M.get : u = u[b]
                    } else _ = il(u, b), u = u[b];
                    _ && !f && (Ys[c] = u)
                }
            }
            return u
        },
        MT = {
            exports: {}
        };
    (function(e) {
        var t = qh,
            n = zh,
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
        e.exports = function(_) {
            var b = o(t, s, arguments);
            if (c && u) {
                var I = c(b, "length");
                I.configurable && u(b, "length", {
                    value: 1 + f(0, _.length - (arguments.length - 1))
                })
            }
            return b
        };
        var d = function() {
            return o(t, r, arguments)
        };
        u ? u(e.exports, "apply", {
            value: d
        }) : e.exports.apply = d
    })(MT);
    var xT = zh,
        UT = MT.exports,
        iG = UT(xT("String.prototype.indexOf")),
        sG = function(t, n) {
            var r = xT(t, !!n);
            return typeof r == "function" && iG(t, ".prototype.") > -1 ? UT(r) : r
        };
    const aG = {},
        oG = Object.freeze(Object.defineProperty({
            __proto__: null,
            default: aG
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        cG = dk(oG);
    var Xh = typeof Map == "function" && Map.prototype,
        wf = Object.getOwnPropertyDescriptor && Xh ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null,
        al = Xh && wf && typeof wf.get == "function" ? wf.get : null,
        lG = Xh && Map.prototype.forEach,
        Jh = typeof Set == "function" && Set.prototype,
        Cf = Object.getOwnPropertyDescriptor && Jh ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null,
        ol = Jh && Cf && typeof Cf.get == "function" ? Cf.get : null,
        uG = Jh && Set.prototype.forEach,
        fG = typeof WeakMap == "function" && WeakMap.prototype,
        Xa = fG ? WeakMap.prototype.has : null,
        dG = typeof WeakSet == "function" && WeakSet.prototype,
        Ja = dG ? WeakSet.prototype.has : null,
        hG = typeof WeakRef == "function" && WeakRef.prototype,
        zE = hG ? WeakRef.prototype.deref : null,
        pG = Boolean.prototype.valueOf,
        gG = Object.prototype.toString,
        mG = Function.prototype.toString,
        vG = String.prototype.match,
        Qh = String.prototype.slice,
        hi = String.prototype.replace,
        EG = String.prototype.toUpperCase,
        XE = String.prototype.toLowerCase,
        FT = RegExp.prototype.test,
        JE = Array.prototype.concat,
        Or = Array.prototype.join,
        _G = Array.prototype.slice,
        QE = Math.floor,
        Dd = typeof BigInt == "function" ? BigInt.prototype.valueOf : null,
        Rf = Object.getOwnPropertySymbols,
        kd = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null,
        sa = typeof Symbol == "function" && typeof Symbol.iterator == "object",
        vn = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === sa ? "object" : "symbol") ? Symbol.toStringTag : null,
        BT = Object.prototype.propertyIsEnumerable,
        ZE = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(e) {
            return e.__proto__
        } : null);

    function e_(e, t) {
        if (e === 1 / 0 || e === -1 / 0 || e !== e || e && e > -1e3 && e < 1e3 || FT.call(/e/, t)) return t;
        var n = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
        if (typeof e == "number") {
            var r = e < 0 ? -QE(-e) : QE(e);
            if (r !== e) {
                var s = String(r),
                    o = Qh.call(t, s.length + 1);
                return hi.call(s, n, "$&_") + "." + hi.call(hi.call(o, /([0-9]{3})/g, "$&_"), /_$/, "")
            }
        }
        return hi.call(t, n, "$&_")
    }
    var Md = cG,
        t_ = Md.custom,
        n_ = WT(t_) ? t_ : null,
        yG = function e(t, n, r, s) {
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
            if (typeof t == "string") return HT(t, o);
            if (typeof t == "number") {
                if (t === 0) return 1 / 0 / t > 0 ? "0" : "-0";
                var f = String(t);
                return u ? e_(t, f) : f
            }
            if (typeof t == "bigint") {
                var d = String(t) + "n";
                return u ? e_(t, d) : d
            }
            var g = typeof o.depth > "u" ? 5 : o.depth;
            if (typeof r > "u" && (r = 0), r >= g && g > 0 && typeof t == "object") return xd(t) ? "[Array]" : "[Object]";
            var _ = UG(o, r);
            if (typeof s > "u") s = [];
            else if (jT(s, t) >= 0) return "[Circular]";

            function b(Oe, F, re) {
                if (F && (s = _G.call(s), s.push(F)), re) {
                    var de = {
                        depth: o.depth
                    };
                    return fi(o, "quoteStyle") && (de.quoteStyle = o.quoteStyle), e(Oe, de, r + 1, s)
                }
                return e(Oe, o, r + 1, s)
            }
            if (typeof t == "function" && !r_(t)) {
                var I = RG(t),
                    R = Cc(t, b);
                return "[Function" + (I ? ": " + I : " (anonymous)") + "]" + (R.length > 0 ? " { " + Or.call(R, ", ") + " }" : "")
            }
            if (WT(t)) {
                var M = sa ? hi.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : kd.call(t);
                return typeof t == "object" && !sa ? ja(M) : M
            }
            if (kG(t)) {
                for (var W = "<" + XE.call(String(t.nodeName)), C = t.attributes || [], V = 0; V < C.length; V++) W += " " + C[V].name + "=" + GT(bG(C[V].value), "double", o);
                return W += ">", t.childNodes && t.childNodes.length && (W += "..."), W += "</" + XE.call(String(t.nodeName)) + ">", W
            }
            if (xd(t)) {
                if (t.length === 0) return "[]";
                var q = Cc(t, b);
                return _ && !xG(q) ? "[" + Ud(q, _) + "]" : "[ " + Or.call(q, ", ") + " ]"
            }
            if (SG(t)) {
                var j = Cc(t, b);
                return !("cause" in Error.prototype) && "cause" in t && !BT.call(t, "cause") ? "{ [" + String(t) + "] " + Or.call(JE.call("[cause]: " + b(t.cause), j), ", ") + " }" : j.length === 0 ? "[" + String(t) + "]" : "{ [" + String(t) + "] " + Or.call(j, ", ") + " }"
            }
            if (typeof t == "object" && c) {
                if (n_ && typeof t[n_] == "function" && Md) return Md(t, {
                    depth: g - r
                });
                if (c !== "symbol" && typeof t.inspect == "function") return t.inspect()
            }
            if (NG(t)) {
                var G = [];
                return lG.call(t, function(Oe, F) {
                    G.push(b(F, t, !0) + " => " + b(Oe, t))
                }), i_("Map", al.call(t), G, _)
            }
            if (PG(t)) {
                var se = [];
                return uG.call(t, function(Oe) {
                    se.push(b(Oe, t))
                }), i_("Set", ol.call(t), se, _)
            }
            if (LG(t)) return Nf("WeakMap");
            if (DG(t)) return Nf("WeakSet");
            if ($G(t)) return Nf("WeakRef");
            if (AG(t)) return ja(b(Number(t)));
            if (wG(t)) return ja(b(Dd.call(t)));
            if (IG(t)) return ja(pG.call(t));
            if (OG(t)) return ja(b(String(t)));
            if (!TG(t) && !r_(t)) {
                var ce = Cc(t, b),
                    le = ZE ? ZE(t) === Object.prototype : t instanceof Object || t.constructor === Object,
                    ue = t instanceof Object ? "" : "null prototype",
                    Ce = !le && vn && Object(t) === t && vn in t ? Qh.call(Ni(t), 8, -1) : ue ? "Object" : "",
                    be = le || typeof t.constructor != "function" ? "" : t.constructor.name ? t.constructor.name + " " : "",
                    fe = be + (Ce || ue ? "[" + Or.call(JE.call([], Ce || [], ue || []), ": ") + "] " : "");
                return ce.length === 0 ? fe + "{}" : _ ? fe + "{" + Ud(ce, _) + "}" : fe + "{ " + Or.call(ce, ", ") + " }"
            }
            return String(t)
        };

    function GT(e, t, n) {
        var r = (n.quoteStyle || t) === "double" ? '"' : "'";
        return r + e + r
    }

    function bG(e) {
        return hi.call(String(e), /"/g, "&quot;")
    }

    function xd(e) {
        return Ni(e) === "[object Array]" && (!vn || !(typeof e == "object" && vn in e))
    }

    function TG(e) {
        return Ni(e) === "[object Date]" && (!vn || !(typeof e == "object" && vn in e))
    }

    function r_(e) {
        return Ni(e) === "[object RegExp]" && (!vn || !(typeof e == "object" && vn in e))
    }

    function SG(e) {
        return Ni(e) === "[object Error]" && (!vn || !(typeof e == "object" && vn in e))
    }

    function OG(e) {
        return Ni(e) === "[object String]" && (!vn || !(typeof e == "object" && vn in e))
    }

    function AG(e) {
        return Ni(e) === "[object Number]" && (!vn || !(typeof e == "object" && vn in e))
    }

    function IG(e) {
        return Ni(e) === "[object Boolean]" && (!vn || !(typeof e == "object" && vn in e))
    }

    function WT(e) {
        if (sa) return e && typeof e == "object" && e instanceof Symbol;
        if (typeof e == "symbol") return !0;
        if (!e || typeof e != "object" || !kd) return !1;
        try {
            return kd.call(e), !0
        } catch {}
        return !1
    }

    function wG(e) {
        if (!e || typeof e != "object" || !Dd) return !1;
        try {
            return Dd.call(e), !0
        } catch {}
        return !1
    }
    var CG = Object.prototype.hasOwnProperty || function(e) {
        return e in this
    };

    function fi(e, t) {
        return CG.call(e, t)
    }

    function Ni(e) {
        return gG.call(e)
    }

    function RG(e) {
        if (e.name) return e.name;
        var t = vG.call(mG.call(e), /^function\s*([\w$]+)/);
        return t ? t[1] : null
    }

    function jT(e, t) {
        if (e.indexOf) return e.indexOf(t);
        for (var n = 0, r = e.length; n < r; n++)
            if (e[n] === t) return n;
        return -1
    }

    function NG(e) {
        if (!al || !e || typeof e != "object") return !1;
        try {
            al.call(e);
            try {
                ol.call(e)
            } catch {
                return !0
            }
            return e instanceof Map
        } catch {}
        return !1
    }

    function LG(e) {
        if (!Xa || !e || typeof e != "object") return !1;
        try {
            Xa.call(e, Xa);
            try {
                Ja.call(e, Ja)
            } catch {
                return !0
            }
            return e instanceof WeakMap
        } catch {}
        return !1
    }

    function $G(e) {
        if (!zE || !e || typeof e != "object") return !1;
        try {
            return zE.call(e), !0
        } catch {}
        return !1
    }

    function PG(e) {
        if (!ol || !e || typeof e != "object") return !1;
        try {
            ol.call(e);
            try {
                al.call(e)
            } catch {
                return !0
            }
            return e instanceof Set
        } catch {}
        return !1
    }

    function DG(e) {
        if (!Ja || !e || typeof e != "object") return !1;
        try {
            Ja.call(e, Ja);
            try {
                Xa.call(e, Xa)
            } catch {
                return !0
            }
            return e instanceof WeakSet
        } catch {}
        return !1
    }

    function kG(e) {
        return !e || typeof e != "object" ? !1 : typeof HTMLElement < "u" && e instanceof HTMLElement ? !0 : typeof e.nodeName == "string" && typeof e.getAttribute == "function"
    }

    function HT(e, t) {
        if (e.length > t.maxStringLength) {
            var n = e.length - t.maxStringLength,
                r = "... " + n + " more character" + (n > 1 ? "s" : "");
            return HT(Qh.call(e, 0, t.maxStringLength), t) + r
        }
        var s = hi.call(hi.call(e, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, MG);
        return GT(s, "single", t)
    }

    function MG(e) {
        var t = e.charCodeAt(0),
            n = {
                8: "b",
                9: "t",
                10: "n",
                12: "f",
                13: "r"
            } [t];
        return n ? "\\" + n : "\\x" + (t < 16 ? "0" : "") + EG.call(t.toString(16))
    }

    function ja(e) {
        return "Object(" + e + ")"
    }

    function Nf(e) {
        return e + " { ? }"
    }

    function i_(e, t, n, r) {
        var s = r ? Ud(n, r) : Or.call(n, ", ");
        return e + " (" + t + ") {" + s + "}"
    }

    function xG(e) {
        for (var t = 0; t < e.length; t++)
            if (jT(e[t], `
`) >= 0) return !1;
        return !0
    }

    function UG(e, t) {
        var n;
        if (e.indent === "	") n = "	";
        else if (typeof e.indent == "number" && e.indent > 0) n = Or.call(Array(e.indent + 1), " ");
        else return null;
        return {
            base: n,
            prev: Or.call(Array(t + 1), n)
        }
    }

    function Ud(e, t) {
        if (e.length === 0) return "";
        var n = `
` + t.prev + t.base;
        return n + Or.call(e, "," + n) + `
` + t.prev
    }

    function Cc(e, t) {
        var n = xd(e),
            r = [];
        if (n) {
            r.length = e.length;
            for (var s = 0; s < e.length; s++) r[s] = fi(e, s) ? t(e[s], e) : ""
        }
        var o = typeof Rf == "function" ? Rf(e) : [],
            c;
        if (sa) {
            c = {};
            for (var u = 0; u < o.length; u++) c["$" + o[u]] = o[u]
        }
        for (var f in e) !fi(e, f) || n && String(Number(f)) === f && f < e.length || sa && c["$" + f] instanceof Symbol || (FT.call(/[^\w$]/, f) ? r.push(t(f, e) + ": " + t(e[f], e)) : r.push(f + ": " + t(e[f], e)));
        if (typeof Rf == "function")
            for (var d = 0; d < o.length; d++) BT.call(e, o[d]) && r.push("[" + t(o[d]) + "]: " + t(e[o[d]], e));
        return r
    }
    var Zh = zh,
        ya = sG,
        FG = yG,
        BG = Zh("%TypeError%"),
        Rc = Zh("%WeakMap%", !0),
        Nc = Zh("%Map%", !0),
        GG = ya("WeakMap.prototype.get", !0),
        WG = ya("WeakMap.prototype.set", !0),
        jG = ya("WeakMap.prototype.has", !0),
        HG = ya("Map.prototype.get", !0),
        VG = ya("Map.prototype.set", !0),
        KG = ya("Map.prototype.has", !0),
        ep = function(e, t) {
            for (var n = e, r;
                (r = n.next) !== null; n = r)
                if (r.key === t) return n.next = r.next, r.next = e.next, e.next = r, r
        },
        YG = function(e, t) {
            var n = ep(e, t);
            return n && n.value
        },
        qG = function(e, t, n) {
            var r = ep(e, t);
            r ? r.value = n : e.next = {
                key: t,
                next: e.next,
                value: n
            }
        },
        zG = function(e, t) {
            return !!ep(e, t)
        },
        XG = function() {
            var t, n, r, s = {
                assert: function(o) {
                    if (!s.has(o)) throw new BG("Side channel does not contain " + FG(o))
                },
                get: function(o) {
                    if (Rc && o && (typeof o == "object" || typeof o == "function")) {
                        if (t) return GG(t, o)
                    } else if (Nc) {
                        if (n) return HG(n, o)
                    } else if (r) return YG(r, o)
                },
                has: function(o) {
                    if (Rc && o && (typeof o == "object" || typeof o == "function")) {
                        if (t) return jG(t, o)
                    } else if (Nc) {
                        if (n) return KG(n, o)
                    } else if (r) return zG(r, o);
                    return !1
                },
                set: function(o, c) {
                    Rc && o && (typeof o == "object" || typeof o == "function") ? (t || (t = new Rc), WG(t, o, c)) : Nc ? (n || (n = new Nc), VG(n, o, c)) : (r || (r = {
                        key: {},
                        next: null
                    }), qG(r, o, c))
                }
            };
            return s
        },
        JG = String.prototype.replace,
        QG = /%20/g,
        Lf = {
            RFC1738: "RFC1738",
            RFC3986: "RFC3986"
        },
        tp = {
            default: Lf.RFC3986,
            formatters: {
                RFC1738: function(e) {
                    return JG.call(e, QG, "+")
                },
                RFC3986: function(e) {
                    return String(e)
                }
            },
            RFC1738: Lf.RFC1738,
            RFC3986: Lf.RFC3986
        },
        ZG = tp,
        $f = Object.prototype.hasOwnProperty,
        ns = Array.isArray,
        yr = function() {
            for (var e = [], t = 0; t < 256; ++t) e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
            return e
        }(),
        eW = function(t) {
            for (; t.length > 1;) {
                var n = t.pop(),
                    r = n.obj[n.prop];
                if (ns(r)) {
                    for (var s = [], o = 0; o < r.length; ++o) typeof r[o] < "u" && s.push(r[o]);
                    n.obj[n.prop] = s
                }
            }
        },
        VT = function(t, n) {
            for (var r = n && n.plainObjects ? Object.create(null) : {}, s = 0; s < t.length; ++s) typeof t[s] < "u" && (r[s] = t[s]);
            return r
        },
        tW = function e(t, n, r) {
            if (!n) return t;
            if (typeof n != "object") {
                if (ns(t)) t.push(n);
                else if (t && typeof t == "object")(r && (r.plainObjects || r.allowPrototypes) || !$f.call(Object.prototype, n)) && (t[n] = !0);
                else return [t, n];
                return t
            }
            if (!t || typeof t != "object") return [t].concat(n);
            var s = t;
            return ns(t) && !ns(n) && (s = VT(t, r)), ns(t) && ns(n) ? (n.forEach(function(o, c) {
                if ($f.call(t, c)) {
                    var u = t[c];
                    u && typeof u == "object" && o && typeof o == "object" ? t[c] = e(u, o, r) : t.push(o)
                } else t[c] = o
            }), t) : Object.keys(n).reduce(function(o, c) {
                var u = n[c];
                return $f.call(o, c) ? o[c] = e(o[c], u, r) : o[c] = u, o
            }, s)
        },
        nW = function(t, n) {
            return Object.keys(n).reduce(function(r, s) {
                return r[s] = n[s], r
            }, t)
        },
        rW = function(e, t, n) {
            var r = e.replace(/\+/g, " ");
            if (n === "iso-8859-1") return r.replace(/%[0-9a-f]{2}/gi, unescape);
            try {
                return decodeURIComponent(r)
            } catch {
                return r
            }
        },
        iW = function(t, n, r, s, o) {
            if (t.length === 0) return t;
            var c = t;
            if (typeof t == "symbol" ? c = Symbol.prototype.toString.call(t) : typeof t != "string" && (c = String(t)), r === "iso-8859-1") return escape(c).replace(/%u[0-9a-f]{4}/gi, function(g) {
                return "%26%23" + parseInt(g.slice(2), 16) + "%3B"
            });
            for (var u = "", f = 0; f < c.length; ++f) {
                var d = c.charCodeAt(f);
                if (d === 45 || d === 46 || d === 95 || d === 126 || d >= 48 && d <= 57 || d >= 65 && d <= 90 || d >= 97 && d <= 122 || o === ZG.RFC1738 && (d === 40 || d === 41)) {
                    u += c.charAt(f);
                    continue
                }
                if (d < 128) {
                    u = u + yr[d];
                    continue
                }
                if (d < 2048) {
                    u = u + (yr[192 | d >> 6] + yr[128 | d & 63]);
                    continue
                }
                if (d < 55296 || d >= 57344) {
                    u = u + (yr[224 | d >> 12] + yr[128 | d >> 6 & 63] + yr[128 | d & 63]);
                    continue
                }
                f += 1, d = 65536 + ((d & 1023) << 10 | c.charCodeAt(f) & 1023), u += yr[240 | d >> 18] + yr[128 | d >> 12 & 63] + yr[128 | d >> 6 & 63] + yr[128 | d & 63]
            }
            return u
        },
        sW = function(t) {
            for (var n = [{
                    obj: {
                        o: t
                    },
                    prop: "o"
                }], r = [], s = 0; s < n.length; ++s)
                for (var o = n[s], c = o.obj[o.prop], u = Object.keys(c), f = 0; f < u.length; ++f) {
                    var d = u[f],
                        g = c[d];
                    typeof g == "object" && g !== null && r.indexOf(g) === -1 && (n.push({
                        obj: c,
                        prop: d
                    }), r.push(g))
                }
            return eW(n), t
        },
        aW = function(t) {
            return Object.prototype.toString.call(t) === "[object RegExp]"
        },
        oW = function(t) {
            return !t || typeof t != "object" ? !1 : !!(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t))
        },
        cW = function(t, n) {
            return [].concat(t, n)
        },
        lW = function(t, n) {
            if (ns(t)) {
                for (var r = [], s = 0; s < t.length; s += 1) r.push(n(t[s]));
                return r
            }
            return n(t)
        },
        KT = {
            arrayToObject: VT,
            assign: nW,
            combine: cW,
            compact: sW,
            decode: rW,
            encode: iW,
            isBuffer: oW,
            isRegExp: aW,
            maybeMap: lW,
            merge: tW
        },
        YT = XG,
        Fd = KT,
        Qa = tp,
        uW = Object.prototype.hasOwnProperty,
        s_ = {
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
        Hr = Array.isArray,
        fW = String.prototype.split,
        dW = Array.prototype.push,
        qT = function(e, t) {
            dW.apply(e, Hr(t) ? t : [t])
        },
        hW = Date.prototype.toISOString,
        a_ = Qa.default,
        an = {
            addQueryPrefix: !1,
            allowDots: !1,
            charset: "utf-8",
            charsetSentinel: !1,
            delimiter: "&",
            encode: !0,
            encoder: Fd.encode,
            encodeValuesOnly: !1,
            format: a_,
            formatter: Qa.formatters[a_],
            indices: !1,
            serializeDate: function(t) {
                return hW.call(t)
            },
            skipNulls: !1,
            strictNullHandling: !1
        },
        pW = function(t) {
            return typeof t == "string" || typeof t == "number" || typeof t == "boolean" || typeof t == "symbol" || typeof t == "bigint"
        },
        Pf = {},
        gW = function e(t, n, r, s, o, c, u, f, d, g, _, b, I, R, M, W) {
            for (var C = t, V = W, q = 0, j = !1;
                (V = V.get(Pf)) !== void 0 && !j;) {
                var G = V.get(t);
                if (q += 1, typeof G < "u") {
                    if (G === q) throw new RangeError("Cyclic object value");
                    j = !0
                }
                typeof V.get(Pf) > "u" && (q = 0)
            }
            if (typeof f == "function" ? C = f(n, C) : C instanceof Date ? C = _(C) : r === "comma" && Hr(C) && (C = Fd.maybeMap(C, function(Se) {
                    return Se instanceof Date ? _(Se) : Se
                })), C === null) {
                if (o) return u && !R ? u(n, an.encoder, M, "key", b) : n;
                C = ""
            }
            if (pW(C) || Fd.isBuffer(C)) {
                if (u) {
                    var se = R ? n : u(n, an.encoder, M, "key", b);
                    if (r === "comma" && R) {
                        for (var ce = fW.call(String(C), ","), le = "", ue = 0; ue < ce.length; ++ue) le += (ue === 0 ? "" : ",") + I(u(ce[ue], an.encoder, M, "value", b));
                        return [I(se) + (s && Hr(C) && ce.length === 1 ? "[]" : "") + "=" + le]
                    }
                    return [I(se) + "=" + I(u(C, an.encoder, M, "value", b))]
                }
                return [I(n) + "=" + I(String(C))]
            }
            var Ce = [];
            if (typeof C > "u") return Ce;
            var be;
            if (r === "comma" && Hr(C)) be = [{
                value: C.length > 0 ? C.join(",") || null : void 0
            }];
            else if (Hr(f)) be = f;
            else {
                var fe = Object.keys(C);
                be = d ? fe.sort(d) : fe
            }
            for (var Oe = s && Hr(C) && C.length === 1 ? n + "[]" : n, F = 0; F < be.length; ++F) {
                var re = be[F],
                    de = typeof re == "object" && typeof re.value < "u" ? re.value : C[re];
                if (!(c && de === null)) {
                    var Ee = Hr(C) ? typeof r == "function" ? r(Oe, re) : Oe : Oe + (g ? "." + re : "[" + re + "]");
                    W.set(t, q);
                    var me = YT();
                    me.set(Pf, W), qT(Ce, e(de, Ee, r, s, o, c, u, f, d, g, _, b, I, R, M, me))
                }
            }
            return Ce
        },
        mW = function(t) {
            if (!t) return an;
            if (t.encoder !== null && typeof t.encoder < "u" && typeof t.encoder != "function") throw new TypeError("Encoder has to be a function.");
            var n = t.charset || an.charset;
            if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
            var r = Qa.default;
            if (typeof t.format < "u") {
                if (!uW.call(Qa.formatters, t.format)) throw new TypeError("Unknown format option provided.");
                r = t.format
            }
            var s = Qa.formatters[r],
                o = an.filter;
            return (typeof t.filter == "function" || Hr(t.filter)) && (o = t.filter), {
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
        vW = function(e, t) {
            var n = e,
                r = mW(t),
                s, o;
            typeof r.filter == "function" ? (o = r.filter, n = o("", n)) : Hr(r.filter) && (o = r.filter, s = o);
            var c = [];
            if (typeof n != "object" || n === null) return "";
            var u;
            t && t.arrayFormat in s_ ? u = t.arrayFormat : t && "indices" in t ? u = t.indices ? "indices" : "repeat" : u = "indices";
            var f = s_[u];
            if (t && "commaRoundTrip" in t && typeof t.commaRoundTrip != "boolean") throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
            var d = f === "comma" && t && t.commaRoundTrip;
            s || (s = Object.keys(n)), r.sort && s.sort(r.sort);
            for (var g = YT(), _ = 0; _ < s.length; ++_) {
                var b = s[_];
                r.skipNulls && n[b] === null || qT(c, gW(n[b], b, f, d, r.strictNullHandling, r.skipNulls, r.encode ? r.encoder : null, r.filter, r.sort, r.allowDots, r.serializeDate, r.format, r.formatter, r.encodeValuesOnly, r.charset, g))
            }
            var I = c.join(r.delimiter),
                R = r.addQueryPrefix === !0 ? "?" : "";
            return r.charsetSentinel && (r.charset === "iso-8859-1" ? R += "utf8=%26%2310003%3B&" : R += "utf8=%E2%9C%93&"), I.length > 0 ? R + I : ""
        },
        aa = KT,
        Bd = Object.prototype.hasOwnProperty,
        EW = Array.isArray,
        Qt = {
            allowDots: !1,
            allowPrototypes: !1,
            allowSparse: !1,
            arrayLimit: 20,
            charset: "utf-8",
            charsetSentinel: !1,
            comma: !1,
            decoder: aa.decode,
            delimiter: "&",
            depth: 5,
            ignoreQueryPrefix: !1,
            interpretNumericEntities: !1,
            parameterLimit: 1e3,
            parseArrays: !0,
            plainObjects: !1,
            strictNullHandling: !1
        },
        _W = function(e) {
            return e.replace(/&#(\d+);/g, function(t, n) {
                return String.fromCharCode(parseInt(n, 10))
            })
        },
        zT = function(e, t) {
            return e && typeof e == "string" && t.comma && e.indexOf(",") > -1 ? e.split(",") : e
        },
        yW = "utf8=%26%2310003%3B",
        bW = "utf8=%E2%9C%93",
        TW = function(t, n) {
            var r = {},
                s = n.ignoreQueryPrefix ? t.replace(/^\?/, "") : t,
                o = n.parameterLimit === 1 / 0 ? void 0 : n.parameterLimit,
                c = s.split(n.delimiter, o),
                u = -1,
                f, d = n.charset;
            if (n.charsetSentinel)
                for (f = 0; f < c.length; ++f) c[f].indexOf("utf8=") === 0 && (c[f] === bW ? d = "utf-8" : c[f] === yW && (d = "iso-8859-1"), u = f, f = c.length);
            for (f = 0; f < c.length; ++f)
                if (f !== u) {
                    var g = c[f],
                        _ = g.indexOf("]="),
                        b = _ === -1 ? g.indexOf("=") : _ + 1,
                        I, R;
                    b === -1 ? (I = n.decoder(g, Qt.decoder, d, "key"), R = n.strictNullHandling ? null : "") : (I = n.decoder(g.slice(0, b), Qt.decoder, d, "key"), R = aa.maybeMap(zT(g.slice(b + 1), n), function(M) {
                        return n.decoder(M, Qt.decoder, d, "value")
                    })), R && n.interpretNumericEntities && d === "iso-8859-1" && (R = _W(R)), g.indexOf("[]=") > -1 && (R = EW(R) ? [R] : R), Bd.call(r, I) ? r[I] = aa.combine(r[I], R) : r[I] = R
                } return r
        },
        SW = function(e, t, n, r) {
            for (var s = r ? t : zT(t, n), o = e.length - 1; o >= 0; --o) {
                var c, u = e[o];
                if (u === "[]" && n.parseArrays) c = [].concat(s);
                else {
                    c = n.plainObjects ? Object.create(null) : {};
                    var f = u.charAt(0) === "[" && u.charAt(u.length - 1) === "]" ? u.slice(1, -1) : u,
                        d = parseInt(f, 10);
                    !n.parseArrays && f === "" ? c = {
                        0: s
                    } : !isNaN(d) && u !== f && String(d) === f && d >= 0 && n.parseArrays && d <= n.arrayLimit ? (c = [], c[d] = s) : f !== "__proto__" && (c[f] = s)
                }
                s = c
            }
            return s
        },
        OW = function(t, n, r, s) {
            if (!!t) {
                var o = r.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t,
                    c = /(\[[^[\]]*])/,
                    u = /(\[[^[\]]*])/g,
                    f = r.depth > 0 && c.exec(o),
                    d = f ? o.slice(0, f.index) : o,
                    g = [];
                if (d) {
                    if (!r.plainObjects && Bd.call(Object.prototype, d) && !r.allowPrototypes) return;
                    g.push(d)
                }
                for (var _ = 0; r.depth > 0 && (f = u.exec(o)) !== null && _ < r.depth;) {
                    if (_ += 1, !r.plainObjects && Bd.call(Object.prototype, f[1].slice(1, -1)) && !r.allowPrototypes) return;
                    g.push(f[1])
                }
                return f && g.push("[" + o.slice(f.index) + "]"), SW(g, n, r, s)
            }
        },
        AW = function(t) {
            if (!t) return Qt;
            if (t.decoder !== null && t.decoder !== void 0 && typeof t.decoder != "function") throw new TypeError("Decoder has to be a function.");
            if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
            var n = typeof t.charset > "u" ? Qt.charset : t.charset;
            return {
                allowDots: typeof t.allowDots > "u" ? Qt.allowDots : !!t.allowDots,
                allowPrototypes: typeof t.allowPrototypes == "boolean" ? t.allowPrototypes : Qt.allowPrototypes,
                allowSparse: typeof t.allowSparse == "boolean" ? t.allowSparse : Qt.allowSparse,
                arrayLimit: typeof t.arrayLimit == "number" ? t.arrayLimit : Qt.arrayLimit,
                charset: n,
                charsetSentinel: typeof t.charsetSentinel == "boolean" ? t.charsetSentinel : Qt.charsetSentinel,
                comma: typeof t.comma == "boolean" ? t.comma : Qt.comma,
                decoder: typeof t.decoder == "function" ? t.decoder : Qt.decoder,
                delimiter: typeof t.delimiter == "string" || aa.isRegExp(t.delimiter) ? t.delimiter : Qt.delimiter,
                depth: typeof t.depth == "number" || t.depth === !1 ? +t.depth : Qt.depth,
                ignoreQueryPrefix: t.ignoreQueryPrefix === !0,
                interpretNumericEntities: typeof t.interpretNumericEntities == "boolean" ? t.interpretNumericEntities : Qt.interpretNumericEntities,
                parameterLimit: typeof t.parameterLimit == "number" ? t.parameterLimit : Qt.parameterLimit,
                parseArrays: t.parseArrays !== !1,
                plainObjects: typeof t.plainObjects == "boolean" ? t.plainObjects : Qt.plainObjects,
                strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : Qt.strictNullHandling
            }
        },
        IW = function(e, t) {
            var n = AW(t);
            if (e === "" || e === null || typeof e > "u") return n.plainObjects ? Object.create(null) : {};
            for (var r = typeof e == "string" ? TW(e, n) : e, s = n.plainObjects ? Object.create(null) : {}, o = Object.keys(r), c = 0; c < o.length; ++c) {
                var u = o[c],
                    f = OW(u, r[u], n, typeof e == "string");
                s = aa.merge(s, f, n)
            }
            return n.allowSparse === !0 ? s : aa.compact(s)
        },
        wW = vW,
        CW = IW,
        RW = tp,
        XT = {
            formats: RW,
            parse: CW,
            stringify: wW
        };
    class NW {
        constructor(t) {
            this.code = t.code, this.token = t.token, this.host = t.host
        }
    }
    class LW {
        constructor(t) {
            this.appId = t.appId, this.appTag = t.appTag, this.audienceEnabled = t.audienceEnabled, this.code = t.code, this.host = t.host, this.audienceHost = t.audienceHost, this.locked = t.locked, this.full = t.full, this.moderationEnabled = t.moderationEnabled, this.passwordRequired = t.passwordRequired, this.twitchLocked = t.twitchLocked, this.locale = t.locale, this.keepalive = t.keepalive, this.controllerBranch = t.controllerBranch
        }
    }
    class $W {
        constructor(t) {
            this.connections = t.connections
        }
    }
    class PW {
        constructor(t) {
            this.cause = t.cause
        }
        whenReceived(t) {
            t.disconnect()
        }
    }
    class DW {}
    var Bl = {
        CreateRoomReply: NW,
        GetRoomReply: LW,
        GetAudienceReply: $W,
        RoomExit: PW,
        RoomLock: DW
    };
    const o_ = Pd.exports,
        kW = XT,
        {
            CreateRoomReply: MW,
            GetRoomReply: xW
        } = Bl;
    class UW {
        constructor(t) {
            if (!t.host) throw new Error("unable to create ecast APIClient: no host provided");
            if (this.host = t.host, !t.scheme) throw new Error("unable to create ecast APIClient: no scheme provided");
            this.scheme = t.scheme
        }
        url(t, n) {
            if (n) {
                let r = kW.stringify(n);
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
                c = await (await o_(r, {
                    method: "POST"
                })).json();
            if (!c.ok) throw new Error(`failed to create room: ${c.error}`);
            let u = c.body;
            return new MW({
                code: u.code,
                token: u.token,
                host: u.host
            })
        }
        async getRoom(t) {
            let n = this.url(`/rooms/${t.code}`),
                s = await (await o_(n)).json();
            if (!s.ok) throw new Error(`unable to get room with options ${JSON.stringify(t)}: ${s.error}`);
            let o = s.body;
            return new xW({
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
    var FW = {
            APIClient: UW
        },
        Ms = null;
    typeof WebSocket < "u" ? Ms = WebSocket : typeof MozWebSocket < "u" ? Ms = MozWebSocket : typeof Ft < "u" ? Ms = Ft.WebSocket || Ft.MozWebSocket : typeof window < "u" ? Ms = window.WebSocket || window.MozWebSocket : typeof self < "u" && (Ms = self.WebSocket || self.MozWebSocket);
    var BW = Ms,
        np = {
            exports: {}
        },
        qs = typeof Reflect == "object" ? Reflect : null,
        c_ = qs && typeof qs.apply == "function" ? qs.apply : function(t, n, r) {
            return Function.prototype.apply.call(t, n, r)
        },
        Yc;
    qs && typeof qs.ownKeys == "function" ? Yc = qs.ownKeys : Object.getOwnPropertySymbols ? Yc = function(t) {
        return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))
    } : Yc = function(t) {
        return Object.getOwnPropertyNames(t)
    };

    function GW(e) {
        console && console.warn && console.warn(e)
    }
    var JT = Number.isNaN || function(t) {
        return t !== t
    };

    function gt() {
        gt.init.call(this)
    }
    np.exports = gt;
    np.exports.once = VW;
    gt.EventEmitter = gt;
    gt.prototype._events = void 0;
    gt.prototype._eventsCount = 0;
    gt.prototype._maxListeners = void 0;
    var l_ = 10;

    function Gl(e) {
        if (typeof e != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e)
    }
    Object.defineProperty(gt, "defaultMaxListeners", {
        enumerable: !0,
        get: function() {
            return l_
        },
        set: function(e) {
            if (typeof e != "number" || e < 0 || JT(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
            l_ = e
        }
    });
    gt.init = function() {
        (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
    };
    gt.prototype.setMaxListeners = function(t) {
        if (typeof t != "number" || t < 0 || JT(t)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
        return this._maxListeners = t, this
    };

    function QT(e) {
        return e._maxListeners === void 0 ? gt.defaultMaxListeners : e._maxListeners
    }
    gt.prototype.getMaxListeners = function() {
        return QT(this)
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
        if (typeof f == "function") c_(f, this, n);
        else
            for (var d = f.length, g = rS(f, d), r = 0; r < d; ++r) c_(g[r], this, n);
        return !0
    };

    function ZT(e, t, n, r) {
        var s, o, c;
        if (Gl(n), o = e._events, o === void 0 ? (o = e._events = Object.create(null), e._eventsCount = 0) : (o.newListener !== void 0 && (e.emit("newListener", t, n.listener ? n.listener : n), o = e._events), c = o[t]), c === void 0) c = o[t] = n, ++e._eventsCount;
        else if (typeof c == "function" ? c = o[t] = r ? [n, c] : [c, n] : r ? c.unshift(n) : c.push(n), s = QT(e), s > 0 && c.length > s && !c.warned) {
            c.warned = !0;
            var u = new Error("Possible EventEmitter memory leak detected. " + c.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
            u.name = "MaxListenersExceededWarning", u.emitter = e, u.type = t, u.count = c.length, GW(u)
        }
        return e
    }
    gt.prototype.addListener = function(t, n) {
        return ZT(this, t, n, !1)
    };
    gt.prototype.on = gt.prototype.addListener;
    gt.prototype.prependListener = function(t, n) {
        return ZT(this, t, n, !0)
    };

    function WW() {
        if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
    }

    function eS(e, t, n) {
        var r = {
                fired: !1,
                wrapFn: void 0,
                target: e,
                type: t,
                listener: n
            },
            s = WW.bind(r);
        return s.listener = n, r.wrapFn = s, s
    }
    gt.prototype.once = function(t, n) {
        return Gl(n), this.on(t, eS(this, t, n)), this
    };
    gt.prototype.prependOnceListener = function(t, n) {
        return Gl(n), this.prependListener(t, eS(this, t, n)), this
    };
    gt.prototype.removeListener = function(t, n) {
        var r, s, o, c, u;
        if (Gl(n), s = this._events, s === void 0) return this;
        if (r = s[t], r === void 0) return this;
        if (r === n || r.listener === n) --this._eventsCount === 0 ? this._events = Object.create(null) : (delete s[t], s.removeListener && this.emit("removeListener", t, r.listener || n));
        else if (typeof r != "function") {
            for (o = -1, c = r.length - 1; c >= 0; c--)
                if (r[c] === n || r[c].listener === n) {
                    u = r[c].listener, o = c;
                    break
                } if (o < 0) return this;
            o === 0 ? r.shift() : jW(r, o), r.length === 1 && (s[t] = r[0]), s.removeListener !== void 0 && this.emit("removeListener", t, u || n)
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

    function tS(e, t, n) {
        var r = e._events;
        if (r === void 0) return [];
        var s = r[t];
        return s === void 0 ? [] : typeof s == "function" ? n ? [s.listener || s] : [s] : n ? HW(s) : rS(s, s.length)
    }
    gt.prototype.listeners = function(t) {
        return tS(this, t, !0)
    };
    gt.prototype.rawListeners = function(t) {
        return tS(this, t, !1)
    };
    gt.listenerCount = function(e, t) {
        return typeof e.listenerCount == "function" ? e.listenerCount(t) : nS.call(e, t)
    };
    gt.prototype.listenerCount = nS;

    function nS(e) {
        var t = this._events;
        if (t !== void 0) {
            var n = t[e];
            if (typeof n == "function") return 1;
            if (n !== void 0) return n.length
        }
        return 0
    }
    gt.prototype.eventNames = function() {
        return this._eventsCount > 0 ? Yc(this._events) : []
    };

    function rS(e, t) {
        for (var n = new Array(t), r = 0; r < t; ++r) n[r] = e[r];
        return n
    }

    function jW(e, t) {
        for (; t + 1 < e.length; t++) e[t] = e[t + 1];
        e.pop()
    }

    function HW(e) {
        for (var t = new Array(e.length), n = 0; n < t.length; ++n) t[n] = e[n].listener || e[n];
        return t
    }

    function VW(e, t) {
        return new Promise(function(n, r) {
            function s(c) {
                e.removeListener(t, o), r(c)
            }

            function o() {
                typeof e.removeListener == "function" && e.removeListener("error", s), n([].slice.call(arguments))
            }
            iS(e, t, o, {
                once: !0
            }), t !== "error" && KW(e, s, {
                once: !0
            })
        })
    }

    function KW(e, t, n) {
        typeof e.on == "function" && iS(e, "error", t, n)
    }

    function iS(e, t, n, r) {
        if (typeof e.on == "function") r.once ? e.once(t, n) : e.on(t, n);
        else if (typeof e.addEventListener == "function") e.addEventListener(t, function s(o) {
            r.once && e.removeEventListener(t, s), n(o)
        });
        else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e)
    }
    class YW {
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
    class Wl extends Error {
        constructor(t) {
            super(t), t && (this.code = t.code, this.message = t.message)
        }
    }
    class Ao extends Wl {
        constructor(t) {
            super(t), this.code = 1e3, this.message = t && t.message ? t.message : "ecast server error"
        }
    }
    class sS extends Ao {
        constructor(t) {
            super(t), this.code = 1001, this.message = t && t.message ? t.message : "create room failed"
        }
    }
    class aS extends Ao {
        constructor(t) {
            super(t), this.code = 1002, this.message = t && t.message ? t.message : "unable to connect to room"
        }
    }
    class oS extends Ao {
        constructor(t) {
            super(t), this.code = 1003, this.message = t && t.message ? t.message : "server is shutting down"
        }
    }
    class dt extends Wl {
        constructor(t) {
            super(t), this.code = 2e3, this.message = t && t.message ? t.message : "ecast client error"
        }
    }
    class cS extends dt {
        constructor(t) {
            super(t), this.code = 2001, this.message = t && t.message ? t.message : "parse error in ecast protocol"
        }
    }
    class lS extends dt {
        constructor(t) {
            super(t), this.code = 2002, this.message = t && t.message ? t.message : "missing opcode"
        }
    }
    class uS extends dt {
        constructor(t) {
            super(t), this.code = 2003, this.message = t && t.message ? t.message : "invalid opcode"
        }
    }
    class fS extends dt {
        constructor(t) {
            super(t), this.code = 2004, this.message = t && t.message ? t.message : "invalid arguments"
        }
    }
    class dS extends dt {
        constructor(t) {
            super(t), this.code = 2005, this.message = t && t.message ? t.message : "entity not found"
        }
    }
    class hS extends dt {
        constructor(t) {
            super(t), this.code = 2006, this.message = t && t.message ? t.message : "an entity already exists with that key"
        }
    }
    class pS extends dt {
        constructor(t) {
            super(t), this.code = 2007, this.message = t && t.message ? t.message : "the entity is not of the expected type"
        }
    }
    class gS extends dt {
        constructor(t) {
            super(t), this.code = 2008, this.message = t && t.message ? t.message : "no such client"
        }
    }
    class mS extends dt {
        constructor(t) {
            super(t), this.code = 2009, this.message = t && t.message ? t.message : "room is locked"
        }
    }
    class vS extends dt {
        constructor(t) {
            super(t), this.code = 2010, this.message = t && t.message ? t.message : "room is full"
        }
    }
    class ES extends dt {
        constructor(t) {
            super(t), this.code = 2011, this.message = t && t.message ? t.message : "no such license"
        }
    }
    class _S extends dt {
        constructor(t) {
            super(t), this.code = 2012, this.message = t && t.message ? t.message : "invalid license"
        }
    }
    class yS extends dt {
        constructor(t) {
            super(t), this.code = 2013, this.message = t && t.message ? t.message : "room not found"
        }
    }
    class bS extends dt {
        constructor(t) {
            super(t), this.code = 2014, this.message = t && t.message ? t.message : "requested role does not exist"
        }
    }
    class TS extends dt {
        constructor(t) {
            super(t), this.code = 2015, this.message = t && t.message ? t.message : "twitch login required"
        }
    }
    class SS extends dt {
        constructor(t) {
            super(t), this.code = 2016, this.message = t && t.message ? t.message : "no such option"
        }
    }
    class OS extends dt {
        constructor(t) {
            super(t), this.code = 2017, this.message = t && t.message ? t.message : "password required"
        }
    }
    class AS extends dt {
        constructor(t) {
            super(t), this.code = 2018, this.message = t && t.message ? t.message : "invalid room password"
        }
    }
    class IS extends dt {
        constructor(t) {
            super(t), this.code = 2019, this.message = t && t.message ? t.message : "missing name"
        }
    }
    class wS extends dt {
        constructor(t) {
            super(t), this.code = 2021, this.message = t && t.message ? t.message : "text did not pass text filters"
        }
    }
    class CS extends dt {
        constructor(t) {
            super(t), this.code = 2022, this.message = t && t.message ? t.message : "no such filter"
        }
    }
    class RS extends dt {
        constructor(t) {
            super(t), this.code = 2023, this.message = t && t.message ? t.message : "permission denied"
        }
    }
    class NS extends dt {
        constructor(t) {
            super(t), this.code = 2024, this.message = t && t.message ? t.message : "not connected to a room"
        }
    }
    class LS extends dt {
        constructor(t) {
            super(t), this.code = 2025, this.message = t && t.message ? t.message : "illegal operation"
        }
    }
    class $S extends dt {
        constructor(t) {
            super(t), this.code = 2026, this.message = t && t.message ? t.message : "invalid ACL change"
        }
    }
    class PS extends dt {
        constructor(t) {
            super(t), this.code = 2027, this.message = t && t.message ? t.message : "room has already ended"
        }
    }
    class DS extends dt {
        constructor(t) {
            super(t), this.code = 2028, this.message = t && t.message ? t.message : "the entity is locked"
        }
    }
    class kS extends dt {
        constructor(t) {
            super(t), this.code = 2420, this.message = t && t.message ? t.message : "rate limit exceeded"
        }
    }

    function qW({
        code: e,
        message: t
    }) {
        const n = zW[e];
        return n ? new n({
            message: t
        }) : new Wl({
            message: t
        })
    }
    var Bn = {
        createError: qW,
        CallError: Wl,
        EcastServerError: Ao,
        EcastCreateRoomFailed: sS,
        EcastDialRoomFailed: aS,
        EcastServerIsShuttingDown: oS,
        EcastClientError: dt,
        EcastParseError: cS,
        EcastRequestIsMissingOpcode: lS,
        EcastRequestHasInvalidOpcode: uS,
        EcastRequestHasInvalidArguments: fS,
        EcastEntityNotFound: dS,
        EcastEntityAlreadyExists: hS,
        EcastEntityTypeError: pS,
        EcastNoSuchClient: gS,
        EcastRoomIsLocked: mS,
        EcastRoomIsFull: vS,
        EcastLicenseNotFound: ES,
        EcastLicenseCheckFailed: _S,
        EcastRoomNotFound: yS,
        EcastInvalidRole: bS,
        EcastTwitchLoginRequired: TS,
        EcastInvalidOption: SS,
        EcastPasswordRequired: OS,
        EcastInvalidPassword: AS,
        EcastNameRequired: IS,
        EcastFilterError: wS,
        EcastNoSuchFilter: CS,
        EcastPermissionDenied: RS,
        EcastNotConnected: NS,
        EcastIllegalOperation: LS,
        EcastACLChangeDenied: $S,
        EcastRoomHasEnded: PS,
        EcastEntityLocked: DS,
        EcastRateLimitExceeded: kS,
        ObservedError: YW
    };
    const zW = {
        1e3: Ao,
        1001: sS,
        1002: aS,
        1003: oS,
        2e3: dt,
        2001: cS,
        2002: lS,
        2003: uS,
        2004: fS,
        2005: dS,
        2006: hS,
        2007: pS,
        2008: gS,
        2009: mS,
        2010: vS,
        2011: ES,
        2012: _S,
        2013: yS,
        2014: bS,
        2015: TS,
        2016: SS,
        2017: OS,
        2018: AS,
        2019: IS,
        2021: wS,
        2022: CS,
        2023: RS,
        2024: NS,
        2025: LS,
        2026: $S,
        2027: PS,
        2028: DS,
        2420: kS
    };
    class XW {
        constructor(t) {
            this.id = t.id, this.deviceId = t.deviceId, this.name = t.name, this.secret = t.secret, this.reconnect = t.reconnect, this.entities = t.entities, this.here = t.here, this.profile = t.profile, this.replayEnd = t.replayEnd
        }
    }
    class JW {
        constructor(t) {
            this.id = t.id, this.userId = t.userId, this.name = t.name, this.role = t.role, this.reconnect = t.reconnect
        }
    }
    class QW {
        constructor(t) {
            this.id = t.id, this.role = t.role
        }
    }
    class ZW {
        constructor(t) {
            this.to = t.to, this.from = t.from, this.body = t.body, this.userId = t.userId
        }
    }
    class ej {
        constructor(t) {
            this.id = t.id, this.banned = t.banned, this.reason = t.reason
        }
    }
    var rp = {
        ClientConnected: JW,
        ClientDisconnected: QW,
        ClientKicked: ej,
        ClientSend: ZW,
        ClientWelcome: XW
    };
    class tj {
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
    var ip = {
        CountGroup: tj
    };
    class nj {
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
    var sp = {
        GCounter: nj
    };
    class rj {
        constructor(t) {
            this.pc = t.pc, this.opcode = t.opcode, this.result = t.result
        }
    }
    var MS = {
        Notification: rj
    };
    class ij {
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
    class sj {
        constructor(t) {
            this.message = t.message
        }
        toString() {
            return `ObjectEcho{message: ${this.message}}`
        }
    }
    var ap = {
        ObjectEntity: ij,
        ObjectEcho: sj
    };
    class aj {
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
    var op = {
        PNCounter: aj
    };
    class oj {
        constructor(t) {
            this.pc = t.pc, this.re = t.re, this.opcode = t.opcode, this.result = t.result
        }
    }
    var xS = {
        Reply: oj
    };
    class cj {
        constructor(t) {
            this.seq = t.seq, this.opcode = t.opcode, this.params = t.params
        }
    }
    var lj = {
        Request: cj
    };
    class uj {
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
    class fj {
        constructor(t) {
            this.message = t.message
        }
        toString() {
            return `TextEcho{message: ${this.message}
}`
        }
    }
    var cp = {
        TextEntity: uj,
        TextEcho: fj
    };
    class dj {
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
    var lp = {
        TextRing: dj
    };
    class hj {
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
    var US = {
        ArtifactEntity: hj
    };
    class pj {
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
    class gj {
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
    class mj {
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
    var up = {
        DoodleEntity: pj,
        DoodleLine: gj,
        DoodleLineRemoved: mj
    };
    class vj {
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
    class Ej {
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
    class _j {
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
    var FS = {
        StackEntity: vj,
        StackElement: Ej,
        StackElements: _j
    };
    class yj {
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
    var BS = {
        DropEntity: yj
    };
    class bj {
        constructor(t) {
            this.message = t.message
        }
        toString() {
            return `Echo{message: ${this.message}
}`
        }
    }
    var Tj = {
        Echo: bj
    };
    class Sj {
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
    var Oj = {
        LockEntity: Sj
    };
    class Aj {
        constructor() {}
        toString() {
            return "OK"
        }
    }
    var GS = {
        OK: Aj
    };
    class Ij {
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
    var WS = {
        NumberEntity: Ij
    };
    const {
        ArtifactEntity: wj
    } = US, {
        ClientWelcome: Cj,
        ClientConnected: Rj,
        ClientDisconnected: Nj,
        ClientKicked: Lj,
        ClientSend: $j
    } = rp, {
        CountGroup: Pj
    } = ip, {
        DoodleEntity: Dj,
        DoodleLine: kj,
        DoodleLineRemoved: Mj
    } = up, {
        StackEntity: xj,
        StackElement: Uj,
        StackElements: Fj
    } = FS, {
        DropEntity: Bj
    } = BS, {
        Echo: Gj
    } = Tj, {
        LockEntity: Wj
    } = Oj, {
        GCounter: jj
    } = sp, {
        GetAudienceReply: Hj,
        RoomExit: Vj,
        RoomLock: Kj
    } = Bl, {
        Notification: Yj
    } = MS, {
        OK: qj
    } = GS, {
        NumberEntity: zj
    } = WS, {
        ObjectEcho: Xj,
        ObjectEntity: Jj
    } = ap, {
        PNCounter: u_
    } = op, {
        Reply: Qj
    } = xS, {
        TextEcho: Zj,
        TextEntity: e3
    } = cp, {
        TextRing: t3
    } = lp, {
        createError: f_,
        ObservedError: n3
    } = Bn;

    function Gd(e, t, n) {
        switch (e) {
            case "ok":
                return new qj;
            case "echo":
                return new Gj({
                    message: t.message
                });
            case "lock":
                return new Wj({
                    key: t.key,
                    from: t.from
                });
            case "error":
                return f_({
                    code: t.code,
                    message: t.msg
                });
            case "error/observed":
                return new n3({
                    to: t.to,
                    error: f_({
                        code: t.error.code,
                        message: t.error.msg
                    })
                });
            case "string":
                return t;
            case "text":
                return new e3({
                    from: t.from,
                    key: t.key,
                    text: t.val,
                    version: t.version,
                    meta: n,
                    acl: t.acl
                });
            case "text/echo":
                return new Zj({
                    message: t.message
                });
            case "object":
                return new Jj({
                    from: t.from,
                    key: t.key,
                    val: t.val,
                    meta: n,
                    acl: t.acl
                });
            case "object/echo":
                return new Xj({
                    message: t.message
                });
            case "drop":
                return new Bj({
                    key: t.key
                });
            case "artifact":
                return new wj({
                    key: t.key,
                    artifactId: t.artifactId,
                    categoryId: t.categoryId,
                    rootId: t.rootId,
                    meta: n
                });
            case "client/connected":
                return new Rj({
                    id: t.id,
                    userId: t.userId,
                    name: t.name,
                    role: t.role,
                    reconnect: t.reconnect
                });
            case "client/disconnected":
                return new Nj({
                    id: t.id,
                    role: t.role
                });
            case "client/kicked":
                return new Lj({
                    id: t.id,
                    banned: t.banned,
                    reason: t.reason
                });
            case "client/send":
                return new $j({
                    to: t.to,
                    from: t.from,
                    body: t.body,
                    userId: t.userID
                });
            case "client/welcome": {
                let r = new Cj({
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
                        s[o] = Gd(c[0], c[1], c[2])
                    }), r.entities = s
                }
                return r
            }
            case "doodle":
                return new Dj({
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
                return new kj({
                    key: t.key,
                    line: t.val
                });
            case "doodle/line/removed":
                return new Mj({
                    key: t.key,
                    index: t.index
                });
            case "stack":
                return new xj({
                    key: t.key,
                    size: t.size,
                    from: t.from,
                    version: t.version,
                    meta: t.meta,
                    acl: t.acl
                });
            case "stack/element":
                return new Uj({
                    key: t.key,
                    val: t.val
                });
            case "stack/elements":
                return new Fj({
                    key: t.key,
                    vals: t.vals
                });
            case "number":
                return new zj({
                    key: t.key,
                    val: t.val,
                    restrictions: t.restrictions,
                    from: t.from,
                    version: t.version,
                    meta: n,
                    acl: t.acl
                });
            case "room/exit":
                return new Vj({
                    cause: t.cause
                });
            case "room/lock":
                return new Kj;
            case "room/get-audience":
                return new Hj({
                    connections: t.connections
                });
            case "audience":
                return new u_({
                    key: e,
                    count: t[1]
                });
            case "audience/count-group":
                return new Pj({
                    key: t.key,
                    choices: t.choices,
                    meta: n
                });
            case "audience/text-ring":
                return new t3({
                    key: t.key,
                    elements: t.elements,
                    meta: n
                });
            case "audience/g-counter":
                return new jj({
                    key: t.key,
                    count: t.count,
                    meta: n
                });
            case "audience/pn-counter":
                return new u_({
                    key: t.key,
                    count: t.count,
                    meta: n
                });
            default:
                return console.error(`failed to parse result of type ${e}: ${JSON.stringify(t,null,2)}`), t
        }
    }

    function r3(e) {
        let t = JSON.parse(e.data),
            n = t.opcode || t.type;
        return t.re ? new Qj({
            pc: t.pc,
            re: t.re,
            opcode: n,
            result: Gd(n, t.result)
        }) : new Yj({
            pc: t.pc,
            opcode: n,
            result: Gd(n, t.result)
        })
    }
    var i3 = {
        parseResponseMessage: r3
    };
    const d_ = BW,
        s3 = XT,
        a3 = np.exports,
        {
            CallError: o3
        } = Bn,
        {
            ClientWelcome: c3
        } = rp,
        {
            CountGroup: l3
        } = ip,
        {
            GCounter: u3
        } = sp,
        {
            Notification: h_
        } = MS,
        {
            ObjectEntity: Df
        } = ap,
        {
            PNCounter: f3
        } = op,
        {
            Reply: d3
        } = xS,
        {
            Request: h3
        } = lj,
        {
            TextEntity: kf
        } = cp,
        {
            TextRing: p3
        } = lp,
        {
            parseResponseMessage: g3
        } = i3,
        {
            DoodleEntity: m3
        } = up,
        {
            StackEntity: v3
        } = FS,
        E3 = 1e3 + Math.floor(Math.random() * 500),
        p_ = 13e3;
    class _3 extends a3 {
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
            const n = s3.stringify(t),
                r = this.role === "audience" || this.id > 1e7 ? `${this.scheme}://${this.host}/api/v2/audience/${this.code}/play?${n}` : `${this.scheme}://${this.host}/api/v2/rooms/${this.code}/play?${n}`;
            return new Promise((s, o) => {
                let c = !1,
                    u = !1,
                    f = g => {
                        s(g), c = !0
                    },
                    d = g => {
                        o(g), c = !0
                    };
                this.conn = new d_(r, "ecast-v0"), this.conn.onmessage = g => {
                    this.debugLog(`recv <- ${JSON.stringify(JSON.parse(g.data),null,2)}`);
                    const _ = g3(g);
                    if (_ instanceof d3) this.onReply(_);
                    else if (_ instanceof h_) {
                        if (_.result instanceof c3) u = !0, this.id = _.result.id, this.deviceId = _.result.deviceId, this.entities = _.result.entities, this.secret = _.result.secret, _.result.name && (this.name = _.result.name), f(_.result);
                        else if (!c) {
                            d(_.result);
                            return
                        }
                        this.onNotification(_)
                    } else console.error(`failed to parse response messsage: ${_}`)
                }, this.conn.onerror = g => {
                    c ? this.emit("socketError", g) : d(g)
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
                n = E3;
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
                if (n >= p_) {
                    this.debugLog("reconnect failed!", r), this.emit("socketClose", r);
                    return
                }
                t += 1, this.debugLog("waiting", n), this.emit("connection", {
                    status: "waiting",
                    attempt: t
                }), await this.sleep(n), n = Math.min(p_, n * 2)
            }
        }
        disconnect() {
            !this.conn || (this.conn.close(), this.conn.onmessage = null, this.conn.onerror = null, this.conn.onopen = null, this.conn.onclose = null, this.conn = null)
        }
        onReply(t) {
            const n = t.re,
                r = this.pending[n];
            if (!r) {
                const s = new h_(t);
                s.re = n, this.emit("notification", s);
                return
            }
            delete this.pending[n], t.result instanceof o3 ? r.reject(t.result) : r.resolve(t.result)
        }
        onNotification(t) {
            typeof t.result.whenReceived == "function" && t.result.whenReceived(this), this.emit("notification", t), this.emit(t.opcode, t.result)
        }
        send(t, n = {}) {
            if (!this.conn) throw new Error("No connection available");
            if (this.conn.readyState !== d_.OPEN) throw new Error(`Socket not ready to send, readyState is ${this.conn.readyState}`);
            const r = ++this.seq,
                s = new h3({
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
            return this.entities[t] = new Df({
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
            return this.entities[t] = new Df({
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
            return this.entities[t] = new Df({
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
            return this.entities[t] = new kf({
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
            return this.entities[t] = new kf({
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
            return this.entities[t] = new kf({
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
                weights: d
            } = n;
            s && (r.acl = s), o && (r.colors = o), r.live = c, u != null && (r.maxPoints = u), f && (r.size = f), d && (r.weights = d);
            const g = await this.send("doodle/create", r);
            return this.entities[t] = new m3({
                key: t,
                colors: o,
                lines: [],
                live: c,
                locked: !1,
                maxPoints: r.maxPoints || 0,
                size: f,
                weights: d,
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
            return this.entities[t] = new v3({
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
            return this.entities[t] = new l3({
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
            return this.entities[t] = new u3({
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
            return this.entities[t] = new f3({
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
            return this.entities[t] = new p3({
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
    var y3 = {
        WSClient: _3
    };
    const {
        APIClient: b3
    } = FW, {
        WSClient: T3
    } = y3, {
        CreateRoomReply: S3,
        GetRoomReply: O3
    } = Bl, {
        ClientWelcome: A3,
        ClientDisconnected: I3
    } = rp, {
        ArtifactEntity: w3
    } = US, {
        GCounter: C3
    } = sp, {
        NumberEntity: R3
    } = WS, {
        TextEntity: N3
    } = cp, {
        DoodleEntity: L3
    } = up, {
        ObjectEntity: $3
    } = ap, {
        CountGroup: P3
    } = ip, {
        DropEntity: D3
    } = BS, {
        OK: k3
    } = GS, {
        RoomExit: M3
    } = Bl, {
        TextRing: x3
    } = lp, {
        PNCounter: U3
    } = op;
    var fp = {
        APIClient: b3,
        WSClient: T3,
        ClientWelcome: A3,
        CreateRoomReply: S3,
        DropEntity: D3,
        GetRoomReply: O3,
        ClientDisconnected: I3,
        RoomExit: M3,
        OK: k3,
        ArtifactEntity: w3,
        DoodleEntity: L3,
        NumberEntity: R3,
        CountGroup: P3,
        GCounter: C3,
        ObjectEntity: $3,
        PNCounter: U3,
        TextEntity: N3,
        TextRing: x3
    };
    const F3 = [{
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
            features: ["moderation", "kicking"],
            categoryId: "Fibbage4Game"
        }, {
            name: "Roomerang",
            tag: "htmf",
            wrapper: "vue",
            isPublic: !0,
            directory: "pp9/htmf",
            features: ["moderation", "kicking"],
            categoryId: "MakeFriendsGame"
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
        Io = e => F3.find(t => t.tag === e || t.categoryId === e);

    function B3(...e) {
        console.log(...e)
    }

    function G3(e) {
        throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
    }
    var g_ = {
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

            function u(A) {
                try {
                    return decodeURIComponent(A.replace(/\+/g, " "))
                } catch {
                    return null
                }
            }

            function f(A) {
                try {
                    return encodeURIComponent(A)
                } catch {
                    return null
                }
            }

            function d(A) {
                for (var T = /([^=?#&]+)=?([^&]*)/g, $ = {}, S; S = T.exec(A);) {
                    var P = u(S[1]),
                        ee = u(S[2]);
                    P === null || ee === null || P in $ || ($[P] = ee)
                }
                return $
            }

            function g(A, T) {
                T = T || "";
                var $ = [],
                    S, P;
                typeof T != "string" && (T = "?");
                for (P in A)
                    if (o.call(A, P)) {
                        if (S = A[P], !S && (S === null || S === c || isNaN(S)) && (S = ""), P = f(P), S = f(S), P === null || S === null) continue;
                        $.push(P + "=" + S)
                    } return $.length ? T + $.join("&") : ""
            }
            var _ = g,
                b = d,
                I = {
                    stringify: _,
                    parse: b
                },
                R = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
                M = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,
                W = "[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]",
                C = new RegExp("^" + W + "+");

            function V(A) {
                return (A || "").toString().replace(C, "")
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

            function G(A) {
                var T;
                typeof window < "u" ? T = window : typeof r < "u" ? T = r : typeof self < "u" ? T = self : T = {};
                var $ = T.location || {};
                A = A || $;
                var S = {},
                    P = typeof A,
                    ee;
                if (A.protocol === "blob:") S = new ue(unescape(A.pathname), {});
                else if (P === "string") {
                    S = new ue(A, {});
                    for (ee in j) delete S[ee]
                } else if (P === "object") {
                    for (ee in A) ee in j || (S[ee] = A[ee]);
                    S.slashes === void 0 && (S.slashes = R.test(A.href))
                }
                return S
            }

            function se(A) {
                return A === "file:" || A === "ftp:" || A === "http:" || A === "https:" || A === "ws:" || A === "wss:"
            }

            function ce(A, T) {
                A = V(A), T = T || {};
                var $ = M.exec(A),
                    S = $[1] ? $[1].toLowerCase() : "",
                    P = !!$[2],
                    ee = !!$[3],
                    ie = 0,
                    _e;
                return P ? ee ? (_e = $[2] + $[3] + $[4], ie = $[2].length + $[3].length) : (_e = $[2] + $[4], ie = $[2].length) : ee ? (_e = $[3] + $[4], ie = $[3].length) : _e = $[4], S === "file:" ? ie >= 2 && (_e = _e.slice(2)) : se(S) ? _e = $[4] : S ? P && (_e = _e.slice(2)) : ie >= 2 && se(T.protocol) && (_e = $[4]), {
                    protocol: S,
                    slashes: P || se(S),
                    slashesCount: ie,
                    rest: _e
                }
            }

            function le(A, T) {
                if (A === "") return T;
                for (var $ = (T || "/").split("/").slice(0, -1).concat(A.split("/")), S = $.length, P = $[S - 1], ee = !1, ie = 0; S--;) $[S] === "." ? $.splice(S, 1) : $[S] === ".." ? ($.splice(S, 1), ie++) : ie && (S === 0 && (ee = !0), $.splice(S, 1), ie--);
                return ee && $.unshift(""), (P === "." || P === "..") && $.push(""), $.join("/")
            }

            function ue(A, T, $) {
                if (A = V(A), !(this instanceof ue)) return new ue(A, T, $);
                var S, P, ee, ie, _e, Te, ht = q.slice(),
                    ln = typeof T,
                    Ue = this,
                    Oa = 0;
                for (ln !== "object" && ln !== "string" && ($ = T, T = null), $ && typeof $ != "function" && ($ = I.parse), T = G(T), P = ce(A || "", T), S = !P.protocol && !P.slashes, Ue.slashes = P.slashes || S && T.slashes, Ue.protocol = P.protocol || T.protocol || "", A = P.rest, (Ue.protocol === "file:" || !P.slashes && (P.protocol || P.slashesCount < 2 || !se(Ue.protocol))) && (ht[3] = [/(.*)/, "pathname"]); Oa < ht.length; Oa++) {
                    if (ie = ht[Oa], typeof ie == "function") {
                        A = ie(A, Ue);
                        continue
                    }
                    ee = ie[0], Te = ie[1], ee !== ee ? Ue[Te] = A : typeof ee == "string" ? ~(_e = A.indexOf(ee)) && (typeof ie[2] == "number" ? (Ue[Te] = A.slice(0, _e), A = A.slice(_e + ie[2])) : (Ue[Te] = A.slice(_e), A = A.slice(0, _e))) : (_e = ee.exec(A)) && (Ue[Te] = _e[1], A = A.slice(0, _e.index)), Ue[Te] = Ue[Te] || S && ie[3] && T[Te] || "", ie[4] && (Ue[Te] = Ue[Te].toLowerCase())
                }
                $ && (Ue.query = $(Ue.query)), S && T.slashes && Ue.pathname.charAt(0) !== "/" && (Ue.pathname !== "" || T.pathname !== "") && (Ue.pathname = le(Ue.pathname, T.pathname)), Ue.pathname.charAt(0) !== "/" && se(Ue.protocol) && (Ue.pathname = "/" + Ue.pathname), s(Ue.port, Ue.protocol) || (Ue.host = Ue.hostname, Ue.port = ""), Ue.username = Ue.password = "", Ue.auth && (ie = Ue.auth.split(":"), Ue.username = ie[0] || "", Ue.password = ie[1] || ""), Ue.origin = Ue.protocol !== "file:" && se(Ue.protocol) && Ue.host ? Ue.protocol + "//" + Ue.host : "null", Ue.href = Ue.toString()
            }

            function Ce(A, T, $) {
                var S = this;
                switch (A) {
                    case "query":
                        typeof T == "string" && T.length && (T = ($ || I.parse)(T)), S[A] = T;
                        break;
                    case "port":
                        S[A] = T, s(T, S.protocol) ? T && (S.host = S.hostname + ":" + T) : (S.host = S.hostname, S[A] = "");
                        break;
                    case "hostname":
                        S[A] = T, S.port && (T += ":" + S.port), S.host = T;
                        break;
                    case "host":
                        S[A] = T, /:\d+$/.test(T) ? (T = T.split(":"), S.port = T.pop(), S.hostname = T.join(":")) : (S.hostname = T, S.port = "");
                        break;
                    case "protocol":
                        S.protocol = T.toLowerCase(), S.slashes = !$;
                        break;
                    case "pathname":
                    case "hash":
                        if (T) {
                            var P = A === "pathname" ? "/" : "#";
                            S[A] = T.charAt(0) !== P ? P + T : T
                        } else S[A] = T;
                        break;
                    default:
                        S[A] = T
                }
                for (var ee = 0; ee < q.length; ee++) {
                    var ie = q[ee];
                    ie[4] && (S[ie[1]] = S[ie[1]].toLowerCase())
                }
                return S.origin = S.protocol !== "file:" && se(S.protocol) && S.host ? S.protocol + "//" + S.host : "null", S.href = S.toString(), S
            }

            function be(A) {
                (!A || typeof A != "function") && (A = I.stringify);
                var T, $ = this,
                    S = $.protocol;
                S && S.charAt(S.length - 1) !== ":" && (S += ":");
                var P = S + ($.slashes || se($.protocol) ? "//" : "");
                return $.username && (P += $.username, $.password && (P += ":" + $.password), P += "@"), P += $.host + $.pathname, T = typeof $.query == "object" ? A($.query) : $.query, T && (P += T.charAt(0) !== "?" ? "?" + T : T), $.hash && (P += $.hash), P
            }
            ue.prototype = {
                set: Ce,
                toString: be
            }, ue.extractProtocol = ce, ue.location = G, ue.trimLeft = V, ue.qs = I;
            var fe = ue;

            function Oe(A, T) {
                setTimeout(function($) {
                    return A.call($)
                }, 4, T)
            }

            function F(A, T) {
                typeof process < "u" && console[A].call(null, T)
            }

            function re(A, T) {
                A === void 0 && (A = []);
                var $ = [];
                return A.forEach(function(S) {
                    T(S) || $.push(S)
                }), $
            }

            function de(A, T) {
                A === void 0 && (A = []);
                var $ = [];
                return A.forEach(function(S) {
                    T(S) && $.push(S)
                }), $
            }
            var Ee = function() {
                this.listeners = {}
            };
            Ee.prototype.addEventListener = function(T, $) {
                typeof $ == "function" && (Array.isArray(this.listeners[T]) || (this.listeners[T] = []), de(this.listeners[T], function(S) {
                    return S === $
                }).length === 0 && this.listeners[T].push($))
            }, Ee.prototype.removeEventListener = function(T, $) {
                var S = this.listeners[T];
                this.listeners[T] = re(S, function(P) {
                    return P === $
                })
            }, Ee.prototype.dispatchEvent = function(T) {
                for (var $ = this, S = [], P = arguments.length - 1; P-- > 0;) S[P] = arguments[P + 1];
                var ee = T.type,
                    ie = this.listeners[ee];
                return Array.isArray(ie) ? (ie.forEach(function(_e) {
                    S.length > 0 ? _e.apply($, S) : _e.call($, T)
                }), !0) : !1
            };

            function me(A) {
                var T = A.indexOf("?");
                return T >= 0 ? A.slice(0, T) : A
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
                    var _e = ie.roomMemberships[$];
                    ee = _e || []
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
                At = function() {};
            At.prototype.stopPropagation = function() {}, At.prototype.stopImmediatePropagation = function() {}, At.prototype.initEvent = function(T, $, S) {
                T === void 0 && (T = "undefined"), $ === void 0 && ($ = !1), S === void 0 && (S = !1), this.type = "" + T, this.bubbles = Boolean($), this.cancelable = Boolean(S)
            };
            var Ht = function(A) {
                    function T($, S) {
                        if (S === void 0 && (S = {}), A.call(this), !$) throw new TypeError(Je.EVENT_ERROR + " 1 argument required, but only 0 present.");
                        if (typeof S != "object") throw new TypeError(Je.EVENT_ERROR + " parameter 2 ('eventInitDict') is not an object.");
                        var P = S.bubbles,
                            ee = S.cancelable;
                        this.type = "" + $, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = ee ? Boolean(ee) : !1, this.cancelBubble = !1, this.bubbles = P ? Boolean(P) : !1
                    }
                    return A && (T.__proto__ = A), T.prototype = Object.create(A && A.prototype), T.prototype.constructor = T, T
                }(At),
                It = function(A) {
                    function T($, S) {
                        if (S === void 0 && (S = {}), A.call(this), !$) throw new TypeError(Je.EVENT.MESSAGE + " 1 argument required, but only 0 present.");
                        if (typeof S != "object") throw new TypeError(Je.EVENT.MESSAGE + " parameter 2 ('eventInitDict') is not an object");
                        var P = S.bubbles,
                            ee = S.cancelable,
                            ie = S.data,
                            _e = S.origin,
                            Te = S.lastEventId,
                            ht = S.ports;
                        this.type = "" + $, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = ee ? Boolean(ee) : !1, this.canncelBubble = !1, this.bubbles = P ? Boolean(P) : !1, this.origin = "" + _e, this.ports = typeof ht > "u" ? null : ht, this.data = typeof ie > "u" ? null : ie, this.lastEventId = "" + (Te || "")
                    }
                    return A && (T.__proto__ = A), T.prototype = Object.create(A && A.prototype), T.prototype.constructor = T, T
                }(At),
                Xt = function(A) {
                    function T($, S) {
                        if (S === void 0 && (S = {}), A.call(this), !$) throw new TypeError(Je.EVENT.CLOSE + " 1 argument required, but only 0 present.");
                        if (typeof S != "object") throw new TypeError(Je.EVENT.CLOSE + " parameter 2 ('eventInitDict') is not an object");
                        var P = S.bubbles,
                            ee = S.cancelable,
                            ie = S.code,
                            _e = S.reason,
                            Te = S.wasClean;
                        this.type = "" + $, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = ee ? Boolean(ee) : !1, this.cancelBubble = !1, this.bubbles = P ? Boolean(P) : !1, this.code = typeof ie == "number" ? parseInt(ie, 10) : 0, this.reason = "" + (_e || ""), this.wasClean = Te ? Boolean(Te) : !1
                    }
                    return A && (T.__proto__ = A), T.prototype = Object.create(A && A.prototype), T.prototype.constructor = T, T
                }(At);

            function it(A) {
                var T = A.type,
                    $ = A.target,
                    S = new Ht(T);
                return $ && (S.target = $, S.srcElement = $, S.currentTarget = $), S
            }

            function vt(A) {
                var T = A.type,
                    $ = A.origin,
                    S = A.data,
                    P = A.target,
                    ee = new It(T, {
                        data: S,
                        origin: $
                    });
                return P && (ee.target = P, ee.srcElement = P, ee.currentTarget = P), ee
            }

            function st(A) {
                var T = A.code,
                    $ = A.reason,
                    S = A.type,
                    P = A.target,
                    ee = A.wasClean;
                ee || (ee = T === Fe.CLOSE_NORMAL || T === Fe.CLOSE_NO_STATUS);
                var ie = new Xt(S, {
                    code: T,
                    reason: $,
                    wasClean: ee
                });
                return P && (ie.target = P, ie.srcElement = P, ie.currentTarget = P), ie
            }

            function Pt(A, T, $) {
                A.readyState = D.CLOSING;
                var S = Me.serverLookup(A.url),
                    P = st({
                        type: "close",
                        target: A.target,
                        code: T,
                        reason: $
                    }),
                    ee = st({
                        type: "server::close",
                        target: A,
                        code: T,
                        reason: $
                    });
                Oe(function() {
                    Me.removeWebSocket(A, A.url), A.readyState = D.CLOSED, A.dispatchEvent(P), A.dispatchEvent(ee), S && S.dispatchEvent(P, S)
                }, A)
            }

            function kt(A, T, $) {
                A.readyState = D.CLOSING;
                var S = Me.serverLookup(A.url),
                    P = st({
                        type: "close",
                        target: A.target,
                        code: T,
                        reason: $,
                        wasClean: !1
                    }),
                    ee = st({
                        type: "server::close",
                        target: A,
                        code: T,
                        reason: $,
                        wasClean: !1
                    }),
                    ie = it({
                        type: "error",
                        target: A.target
                    });
                Oe(function() {
                    Me.removeWebSocket(A, A.url), A.readyState = D.CLOSED, A.dispatchEvent(ie), A.dispatchEvent(P), A.dispatchEvent(ee), S && S.dispatchEvent(P, S)
                }, A)
            }

            function Lt(A) {
                return Object.prototype.toString.call(A) !== "[object Blob]" && !(A instanceof ArrayBuffer) && (A = String(A)), A
            }
            var m = new WeakMap;

            function p(A) {
                if (m.has(A)) return m.get(A);
                var T = new Proxy(A, {
                    get: function(S, P) {
                        return P === "close" ? function(ie) {
                            ie === void 0 && (ie = {});
                            var _e = ie.code || Fe.CLOSE_NORMAL,
                                Te = ie.reason || "";
                            Pt(T, _e, Te)
                        } : P === "send" ? function(ie) {
                            ie = Lt(ie), A.dispatchEvent(vt({
                                type: "message",
                                data: ie,
                                origin: this.url,
                                target: A
                            }))
                        } : P === "on" ? function(ie, _e) {
                            A.addEventListener("server::" + ie, _e)
                        } : P === "target" ? A : S[P]
                    }
                });
                return m.set(A, T), T
            }

            function O(A) {
                var T = encodeURIComponent(A).match(/%[89ABab]/g);
                return A.length + (T ? T.length : 0)
            }

            function x(A) {
                var T = new fe(A),
                    $ = T.pathname,
                    S = T.protocol,
                    P = T.hash;
                if (!A) throw new TypeError(Je.CONSTRUCTOR_ERROR + " 1 argument required, but only 0 present.");
                if ($ || (T.pathname = "/"), S === "") throw new SyntaxError(Je.CONSTRUCTOR_ERROR + " The URL '" + T.toString() + "' is invalid.");
                if (S !== "ws:" && S !== "wss:") throw new SyntaxError(Je.CONSTRUCTOR_ERROR + " The URL's scheme must be either 'ws' or 'wss'. '" + S + "' is not allowed.");
                if (P !== "") throw new SyntaxError(Je.CONSTRUCTOR_ERROR + " The URL contains a fragment identifier ('" + P + "'). Fragment identifiers are not allowed in WebSocket URLs.");
                return T.toString()
            }

            function B(A) {
                if (A === void 0 && (A = []), !Array.isArray(A) && typeof A != "string") throw new SyntaxError(Je.CONSTRUCTOR_ERROR + " The subprotocol '" + A.toString() + "' is invalid.");
                typeof A == "string" && (A = [A]);
                var T = A.map(function(S) {
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
                return A
            }
            var D = function(A) {
                function T(S, P) {
                    A.call(this), this._onopen = null, this._onmessage = null, this._onerror = null, this._onclose = null, this.url = x(S), P = B(P), this.protocol = P[0] || "", this.binaryType = "blob", this.readyState = T.CONNECTING;
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
                A && (T.__proto__ = A), T.prototype = Object.create(A && A.prototype), T.prototype.constructor = T;
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
                    var ie = vt({
                            type: "server::message",
                            origin: this.url,
                            data: Lt(P)
                        }),
                        _e = Me.serverLookup(this.url);
                    _e && Oe(function() {
                        ee.dispatchEvent(ie, P)
                    }, _e)
                }, T.prototype.close = function(P, ee) {
                    if (P !== void 0 && (typeof P != "number" || P !== 1e3 && (P < 3e3 || P > 4999))) throw new TypeError(Je.CLOSE_ERROR + " The code must be either 1000, or between 3000 and 4999. " + P + " is neither.");
                    if (ee !== void 0) {
                        var ie = O(ee);
                        if (ie > 123) throw new SyntaxError(Je.CLOSE_ERROR + " The message must not be greater than 123 bytes.")
                    }
                    if (!(this.readyState === T.CLOSING || this.readyState === T.CLOSED)) {
                        var _e = p(this);
                        this.readyState === T.CONNECTING ? kt(_e, P || Fe.CLOSE_ABNORMAL, ee) : Pt(_e, P || Fe.CLOSE_NO_STATUS, ee)
                    }
                }, Object.defineProperties(T.prototype, $), T
            }(Ee);
            D.CONNECTING = 0, D.prototype.CONNECTING = D.CONNECTING, D.OPEN = 1, D.prototype.OPEN = D.OPEN, D.CLOSING = 2, D.prototype.CLOSING = D.CLOSING, D.CLOSED = 3, D.prototype.CLOSED = D.CLOSED;
            var ae = function(A) {
                return A.reduce(function(T, $) {
                    return T.indexOf($) > -1 ? T : T.concat($)
                }, [])
            };

            function Q() {
                return typeof window < "u" ? window : typeof process == "object" && typeof G3 == "function" && typeof Ft == "object" ? Ft : this
            }
            var X = {
                    mock: !0,
                    verifyClient: null,
                    selectProtocol: null
                },
                N = function(A) {
                    function T($, S) {
                        S === void 0 && (S = X), A.call(this);
                        var P = new fe($);
                        P.pathname || (P.pathname = "/"), this.url = P.toString(), this.originalWebSocket = null;
                        var ee = Me.attachServer(this, this.url);
                        if (!ee) throw this.dispatchEvent(it({
                            type: "error"
                        })), new Error("A mock server is already listening on this url");
                        this.options = Object.assign({}, X, S), this.options.mock && this.mockWebsocket()
                    }
                    return A && (T.__proto__ = A), T.prototype = Object.create(A && A.prototype), T.prototype.constructor = T, T.prototype.mockWebsocket = function() {
                        var S = Q();
                        this.originalWebSocket = S.WebSocket, S.WebSocket = D
                    }, T.prototype.restoreWebsocket = function() {
                        var S = Q();
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
                            _e = Me.websocketsLookup(this.url);
                        Me.removeServer(this.url), _e.forEach(function(Te) {
                            Te.readyState = D.CLOSED, Te.dispatchEvent(st({
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
                        var _e = ee.websockets;
                        _e || (_e = Me.websocketsLookup(this.url)), typeof ee != "object" || arguments.length > 3 ? (P = Array.prototype.slice.call(arguments, 1, arguments.length), P = P.map(function(Te) {
                            return Lt(Te)
                        })) : P = Lt(P), _e.forEach(function(Te) {
                            Array.isArray(P) ? Te.dispatchEvent.apply(Te, [vt({
                                type: S,
                                data: P,
                                origin: ie.url,
                                target: Te.target
                            })].concat(P)) : Te.dispatchEvent(vt({
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
                        var _e = this,
                            Te = ae(ee.concat(Me.websocketsLookup(this.url, S, P)));
                        return {
                            to: function(ht, ln) {
                                return ie.to.call(ie, ht, ln, Te)
                            },
                            emit: function(ln, Ue) {
                                _e.emit(ln, Ue, {
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
                            ee.readyState = D.CLOSED, ee.dispatchEvent(it({
                                type: "error"
                            }))
                        })
                    }, T
                }(Ee);
            N.of = function(T) {
                return new N(T)
            };
            var H = function(A) {
                function T(S, P) {
                    var ee = this;
                    S === void 0 && (S = "socket.io"), P === void 0 && (P = ""), A.call(this), this.binaryType = "blob";
                    var ie = new fe(S);
                    ie.pathname || (ie.pathname = "/"), this.url = ie.toString(), this.readyState = T.CONNECTING, this.protocol = "", this.target = this, typeof P == "string" || typeof P == "object" && P !== null ? this.protocol = P : Array.isArray(P) && P.length > 0 && (this.protocol = P[0]);
                    var _e = Me.attachWebSocket(this, this.url);
                    Oe(function() {
                        _e ? (this.readyState = T.OPEN, _e.dispatchEvent(it({
                            type: "connection"
                        }), _e, this), _e.dispatchEvent(it({
                            type: "connect"
                        }), _e, this), this.dispatchEvent(it({
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
                A && (T.__proto__ = A), T.prototype = Object.create(A && A.prototype), T.prototype.constructor = T;
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
                    var _e = vt({
                            type: P,
                            origin: this.url,
                            data: ee
                        }),
                        Te = Me.serverLookup(this.url);
                    return Te && Te.dispatchEvent.apply(Te, [_e].concat(ee)), this
                }, T.prototype.send = function(P) {
                    return this.emit("message", P), this
                }, $.broadcast.get = function() {
                    if (this.readyState !== T.OPEN) throw new Error("SocketIO is already in CLOSING or CLOSED state");
                    var S = this,
                        P = Me.serverLookup(this.url);
                    if (!P) throw new Error("SocketIO can not find a server at the specified URL (" + this.url + ")");
                    return {
                        emit: function(ie, _e) {
                            return P.emit(ie, _e, {
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
                    for (var ee = this, ie = [], _e = arguments.length - 1; _e-- > 0;) ie[_e] = arguments[_e + 1];
                    var Te = P.type,
                        ht = this.listeners[Te];
                    if (!Array.isArray(ht)) return !1;
                    ht.forEach(function(ln) {
                        ie.length > 0 ? ln.apply(ee, ie) : ln.call(ee, P.data ? P.data : P)
                    })
                }, Object.defineProperties(T.prototype, $), T
            }(Ee);
            H.CONNECTING = 0, H.OPEN = 1, H.CLOSING = 2, H.CLOSED = 3;
            var he = function(T, $) {
                return new H(T, $)
            };
            he.connect = function(T, $) {
                return he(T, $)
            };
            var pe = N,
                Ne = D,
                xe = he;
            n.Server = pe, n.WebSocket = Ne, n.SocketIO = xe, Object.defineProperty(n, "__esModule", {
                value: !0
            })
        })
    })(g_, g_.exports);
    var jS = {
        exports: {}
    };
    (function(e) {
        (function() {
            function t(u, f) {
                var d = u.x - f.x,
                    g = u.y - f.y;
                return d * d + g * g
            }

            function n(u, f, d) {
                var g = f.x,
                    _ = f.y,
                    b = d.x - g,
                    I = d.y - _;
                if (b !== 0 || I !== 0) {
                    var R = ((u.x - g) * b + (u.y - _) * I) / (b * b + I * I);
                    R > 1 ? (g = d.x, _ = d.y) : R > 0 && (g += b * R, _ += I * R)
                }
                return b = u.x - g, I = u.y - _, b * b + I * I
            }

            function r(u, f) {
                for (var d = u[0], g = [d], _, b = 1, I = u.length; b < I; b++) _ = u[b], t(_, d) > f && (g.push(_), d = _);
                return d !== _ && g.push(_), g
            }

            function s(u, f, d, g, _) {
                for (var b = g, I, R = f + 1; R < d; R++) {
                    var M = n(u[R], u[f], u[d]);
                    M > b && (I = R, b = M)
                }
                b > g && (I - f > 1 && s(u, f, I, g, _), _.push(u[I]), d - I > 1 && s(u, I, d, g, _))
            }

            function o(u, f) {
                var d = u.length - 1,
                    g = [u[0]];
                return s(u, 0, d, f, g), g.push(u[d]), g
            }

            function c(u, f, d) {
                if (u.length <= 2) return u;
                var g = f !== void 0 ? f * f : 1;
                return u = d ? u : r(u, g), u = o(u, g), u
            }
            e.exports = c, e.exports.default = c
        })()
    })(jS);
    const HS = jS.exports;
    class W3 {
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
                x: hn.toPrecision(r.x, this.precision),
                y: hn.toPrecision(r.y, this.precision)
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
                points: HS(this.points, .5).map(n => ({
                    x: hn.toPrecision(n.x, this.precision),
                    y: hn.toPrecision(n.y, this.precision)
                })),
                weight: this.weight
            };
            return this.isInteracting = !1, this.points = [], t
        }
    }
    class j3 {
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
                r = HS(this.currentLine.points);
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
    class H3 {
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
            n.width && (this.width = n.width), n.height && (this.height = n.height), this.stageElement = t, this.setupElements(), this.setupEvents(), n.InteractCanvas ? this.interactCanvas = new n.InteractCanvas(t, this.width, this.height, n) : this.interactCanvas = new j3(t, this.width, this.height, n)
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
                d = (this.getPropValue(n, "padding-left") + this.getPropValue(n, "padding-right")) * o,
                g = (this.getPropValue(n, "padding-top") + this.getPropValue(n, "padding-bottom")) * c;
            return {
                scaleX: (r.width - u - d) / t.width,
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
                d = (u - o) / r;
            return f = Math.max(0, Math.min(this.width, f)), d = Math.max(0, Math.min(this.height, d)), f = Math.round(f), d = Math.round(d), {
                x: f,
                y: d
            }
        }
    }
    class V3 {
        static async warningsForAppTag(t) {
            var s;
            const n = [],
                r = Io(t);
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
    class m_ {
        static getPromptGuess(t, n) {
            var r, s, o;
            if ((r = t.player) != null && r.prompt) return t.player.prompt;
            if ((s = t.audience) != null && s.prompt) return t.audience.prompt;
            if ((o = t.audiencePlayer) != null && o.prompt) return t.audiencePlayer.prompt;
            if (t.prompt) return t.prompt;
            if (n === "range-game") return this.getRangeGameGuess(t)
        }
        static getRangeGameGuess(t) {
            var n, r, s, o, c, u, f, d;
            if ((r = (n = t.player) == null ? void 0 : n.content) != null && r.text) return (o = (s = t.player) == null ? void 0 : s.content) == null ? void 0 : o.text;
            if ((u = (c = t.content) == null ? void 0 : c.content) != null && u.text) return (d = (f = t.content) == null ? void 0 : f.content) == null ? void 0 : d.text
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
            var _;
            const r = Io(n.room.appTag),
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
                u = `${(_=r==null?void 0:r.name)!=null?_:n.room.appTag} :${n.room.appTag}: 

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
                const I = await (await fetch(s, {
                    method: "POST",
                    body: JSON.stringify(g)
                })).text();
                B3("[Feedback] sendToSlack", I)
            } catch (b) {
                console.error("[Feedback] sendToSlack", b)
            }
        }
    }
    class VS {
        static withTypes(t, n) {
            let r = t;
            return n.forEach(s => {
                s === "html" && (r = this.html(r)), s === "username" && (r = this.username(r)), s === "emoji" && (r = this.emoji(r)), s === "input" && (r = this.input(r))
            }), r
        }
        static html(t) {
            if (String(t).match(/<fart>/g)) {
                const r = new Audio(new URL("main/@connect/assets/4af6cbea.wav", self.location).href);
                r.volume = .1, r.play()
            }
            const n = /<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g;
            return String(t).replace(n, "")
        }
        static input(t) {
            return t.replace(/[^\u00A1\u0020-\u007E\u00BF-\u00FF’]/gi, "")
        }
        static username(t) {
            return t.replace(/[^A-Z0-9\u00A1\u0020-\u002F\u00BF-\u00FF\u2026!?*$+\-'_ .,]/gi, "").replace(/'/g, "\u2019")
        }
        static emoji(t) {
            return t.replace(/(\u00a9|\u00ae|[\u2000-\u2017]|[\u2020-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/, "")
        }
    }
    var Lc, K3 = new Uint8Array(16);

    function Y3() {
        if (!Lc && (Lc = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto < "u" && typeof msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto), !Lc)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return Lc(K3)
    }
    const q3 = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

    function z3(e) {
        return typeof e == "string" && q3.test(e)
    }
    var sn = [];
    for (var Mf = 0; Mf < 256; ++Mf) sn.push((Mf + 256).toString(16).substr(1));

    function X3(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
            n = (sn[e[t + 0]] + sn[e[t + 1]] + sn[e[t + 2]] + sn[e[t + 3]] + "-" + sn[e[t + 4]] + sn[e[t + 5]] + "-" + sn[e[t + 6]] + sn[e[t + 7]] + "-" + sn[e[t + 8]] + sn[e[t + 9]] + "-" + sn[e[t + 10]] + sn[e[t + 11]] + sn[e[t + 12]] + sn[e[t + 13]] + sn[e[t + 14]] + sn[e[t + 15]]).toLowerCase();
        if (!z3(n)) throw TypeError("Stringified UUID is invalid");
        return n
    }

    function KS(e, t, n) {
        e = e || {};
        var r = e.random || (e.rng || Y3)();
        if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, t) {
            n = n || 0;
            for (var s = 0; s < 16; ++s) t[n + s] = r[s];
            return t
        }
        return X3(r)
    }
    class J3 {
        constructor(t) {
            Re(this, "user");
            if (!ke.isSupported) {
                console.warn("Twitch Login requires local storage");
                return
            }
            this.processParams(t)
        }
        prepare() {
            return !ke.isSupported || !ke.get("token") ? null : this.fetchUser()
        }
        login() {
            if (!ke.isSupported) return;
            const t = KS();
            ke.set("twitchState", t);
            const n = "yn2iepd23vskpmkzgeg2lkfsct7gsc";
            let r = `https://${window.location.hostname}`;
            window.location.hostname === "localhost" && (r = "http://localhost:9090/");
            let s = "https://id.twitch.tv/oauth2/authorize";
            s += `?client_id=${n}`, s += `&redirect_uri=${r}`, s += "&response_type=token", s += "&scope=user:read:email", s += `&state=${t}`, window.location.href = s
        }
        logout() {
            !ke.isSupported || (delete this.user, ke.remove("token"))
        }
        processParams(t) {
            if (!t || !ke.isSupported) return;
            const n = ke.get("twitchState");
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
            o !== n && console.error("[Twitch] State parameter doesn't match the expected state"), ke.set("token", s), ke.remove("twitchState"), window.history.replaceState({}, document.title, "/")
        }
        async fetchUser() {
            if (!ke.isSupported) return null;
            const t = ke.get("token");
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
    const Q3 = {
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
        Z3 = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "prompts hidden on players\u2019 devices",
                VISIBILITY_CONTROLLER_ON: "prompts shown on players\u2019 devices",
                VISIBILITY_SCREEN_OFF: "prompts hidden on game screen",
                VISIBILITY_SCREEN_ON: "prompts shown on game screen"
            }
        },
        eH = {
            DISCONNECTED: "You have been disconnected.",
            DRAWING_NOTHING: "You have to draw something!",
            PLAYER_KICKED: "You have been kicked from the game by a moderator.",
            ROOM_DESTROYED: "Thanks for playing!",
            ROOM_DISCONNECTED: "Disconnected",
            TEXT_NAUGHTY: "I\u2019m afraid you can\u2019t write that. Please be respectful of other players.",
            TEXT_NOTHING: "You can\u2019t enter nothing!",
            TITLE: "Error"
        },
        tH = "LOADING",
        nH = {
            JOINED_COUNT: "{count} of {maxPlayers} players joined",
            PLAYERS_NEEDED: "1 player needed to start | {count} players needed to start",
            WAITING_FOR_VIP: "Waiting for {name} to start the game",
            WAITING_FOR_GAMEPAD: "Waiting for the game to start",
            GAME_STARTING: "Game is starting",
            BUTTON_START: "Press to Start",
            BUTTON_CANCEL: "Press to Cancel"
        },
        rH = {
            GALLERY_LINK: "Visit the Gallery",
            PLAY_AGAIN: "Play again?",
            BUTTON_SAME_PLAYERS: "Same Players",
            BUTTON_NEW_PLAYERS: "New Players"
        },
        iH = {
            AND: "AND",
            OR: "OR"
        },
        sH = {
            BUTTON_SKIP: "Skip",
            BUTTON_NEXT: "Next",
            BUTTON_DONE: "Let\u2019s Go!"
        },
        aH = {
            NAME: "AUDIENCE"
        },
        oH = {
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
        cH = {
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
        lH = {
            ACTION: Q3,
            ALT: Z3,
            ERROR: eH,
            LOADING: tH,
            LOBBY: nH,
            POST_GAME: rH,
            SEPARATOR: iH,
            TUTORIAL: sH,
            AUDIENCE: aH,
            UGC: oH,
            TOAST: cH
        },
        uH = {
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
        fH = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "sujets non affich\xE9s sur les appareils des joueurs",
                VISIBILITY_CONTROLLER_ON: "sujets affich\xE9s sur les appareils des joueurs",
                VISIBILITY_SCREEN_OFF: "sujets non affich\xE9s sur l'\xE9cran de jeu",
                VISIBILITY_SCREEN_ON: "sujets affich\xE9s sur l'\xE9cran de jeu"
            }
        },
        dH = {
            DISCONNECTED: "Vous avez \xE9t\xE9 d\xE9connect\xE9(e).",
            DRAWING_NOTHING: "Vous devez dessiner quelque chose\xA0!",
            PLAYER_KICKED: "Vous avez \xE9t\xE9 \xE9ject\xE9(e) de la partie par un mod\xE9rateur.",
            ROOM_DESTROYED: "Merci d'avoir jou\xE9\xA0!",
            ROOM_DISCONNECTED: "D\xE9connexion",
            TEXT_NAUGHTY: "Je crains que vous ne puissiez pas \xE9crire \xE7a. Respectez les autres joueurs.",
            TEXT_NOTHING: "Vous ne pouvez pas ne rien entrer",
            TITLE: "Erreur"
        },
        hH = "CHARGEMENT",
        pH = {
            JOINED_COUNT: "1\xA0joueur sur {maxPlayers} a rejoint la partie | {count}\xA0joueurs sur {maxPlayers} ont rejoint la partie",
            PLAYERS_NEEDED: "1\xA0joueur n\xE9cessaire pour commencer | {count}\xA0joueurs n\xE9cessaires pour commencer",
            WAITING_FOR_VIP: "En attente de {name} pour commencer la partie",
            WAITING_FOR_GAMEPAD: "En attente du d\xE9but de la partie",
            GAME_STARTING: "La partie commence",
            BUTTON_START: "Appuyer pour commencer",
            BUTTON_CANCEL: "Appuyer pour annuler"
        },
        gH = {
            GALLERY_LINK: "Visiter la galerie",
            PLAY_AGAIN: "Rejouer\xA0?",
            BUTTON_SAME_PLAYERS: "Les m\xEAmes joueurs",
            BUTTON_NEW_PLAYERS: "De nouveaux joueurs"
        },
        mH = {
            AND: "ET",
            OR: "OU"
        },
        vH = {
            BUTTON_SKIP: "Passer",
            BUTTON_NEXT: "Suivant",
            BUTTON_DONE: "Allons-y\xA0!"
        },
        EH = {
            NAME: "SPECTATEURS"
        },
        _H = {
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
        yH = {
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
        bH = {
            ACTION: uH,
            ALT: fH,
            ERROR: dH,
            LOADING: hH,
            LOBBY: pH,
            POST_GAME: gH,
            SEPARATOR: mH,
            TUTORIAL: vH,
            AUDIENCE: EH,
            UGC: _H,
            TOAST: yH
        },
        TH = {
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
        SH = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "definizioni nascoste sui dispositivi dei giocatori",
                VISIBILITY_CONTROLLER_ON: "definizioni visualizzate sui dispositivi dei giocatori",
                VISIBILITY_SCREEN_OFF: "definizioni nascoste sullo schermo di gioco",
                VISIBILITY_SCREEN_ON: "definizioni visualizzate sullo schermo di gioco"
            }
        },
        OH = {
            DISCONNECTED: "\xC8 stata effettuata la disconnessione.",
            DRAWING_NOTHING: "Devi disegnare qualcosa!",
            PLAYER_KICKED: "Un moderatore ti ha cacciato dalla partita.",
            ROOM_DESTROYED: "Grazie per aver scelto di giocare con noi!",
            ROOM_DISCONNECTED: "Disconnessione effettuata",
            TEXT_NAUGHTY: "Purtroppo non puoi scrivere questa cosa. Abbi rispetto per gli altri giocatori.",
            TEXT_NOTHING: "Devi per forza inserire qualcosa!",
            TITLE: "Errore"
        },
        AH = "CARICAMENTO",
        IH = {
            JOINED_COUNT: "Sta partecipando 1 giocatore su {maxPlayers} | Stanno partecipando {count} giocatori su {maxPlayers}",
            PLAYERS_NEEDED: "Manca 1 giocatore per iniziare | Mancano {count} giocatori per iniziare",
            WAITING_FOR_VIP: "In attesa di {name} per iniziare la partita",
            WAITING_FOR_GAMEPAD: "In attesa d'iniziare la partita",
            GAME_STARTING: "La partita sta per iniziare",
            BUTTON_START: "Premi per avviare",
            BUTTON_CANCEL: "Premi per annullare"
        },
        wH = {
            GALLERY_LINK: "Visita la galleria",
            PLAY_AGAIN: "Vuoi giocare di nuovo?",
            BUTTON_SAME_PLAYERS: "Stessi giocatori",
            BUTTON_NEW_PLAYERS: "Nuovi giocatori"
        },
        CH = {
            AND: "E",
            OR: "O"
        },
        RH = {
            BUTTON_SKIP: "Salta",
            BUTTON_NEXT: "Avanti",
            BUTTON_DONE: "Iniziamo!"
        },
        NH = {
            NAME: "PUBBLICO"
        },
        LH = {
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
        $H = {
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
        PH = {
            ACTION: TH,
            ALT: SH,
            ERROR: OH,
            LOADING: AH,
            LOBBY: IH,
            POST_GAME: wH,
            SEPARATOR: CH,
            TUTORIAL: RH,
            AUDIENCE: NH,
            UGC: LH,
            TOAST: $H
        },
        DH = {
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
        kH = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "Prompts auf Spielerger\xE4ten verborgen",
                VISIBILITY_CONTROLLER_ON: "Prompts auf Spielerger\xE4ten angezeigt",
                VISIBILITY_SCREEN_OFF: "Prompts auf Spielbildschirm verborgen",
                VISIBILITY_SCREEN_ON: "Prompts auf Spielbildschirm angezeigt"
            }
        },
        MH = {
            DISCONNECTED: "Deine Verbindung wurde getrennt.",
            DRAWING_NOTHING: "Du musst irgendwas zeichnen!",
            PLAYER_KICKED: "Du wurdest von einem Moderator gekickt.",
            ROOM_DESTROYED: "Danke f\xFCrs Spielen!",
            ROOM_DISCONNECTED: "Verbindung getrennt",
            TEXT_NAUGHTY: "Das kannst du leider nicht schreiben. Bitte nimm R\xFCcksicht auf deine Mitspieler.",
            TEXT_NOTHING: "Du musst etwas eingeben!",
            TITLE: "Fehler"
        },
        xH = "LADE",
        UH = {
            JOINED_COUNT: "{count} von {maxPlayers} Spielern sind beigetreten",
            PLAYERS_NEEDED: "{count} Spieler zum Starten ben\xF6tigt",
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
        VH = {
            ACTION: DH,
            ALT: kH,
            ERROR: MH,
            LOADING: xH,
            LOBBY: UH,
            POST_GAME: FH,
            SEPARATOR: BH,
            TUTORIAL: GH,
            AUDIENCE: WH,
            UGC: jH,
            TOAST: HH
        },
        KH = {
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
            PLAYER_KICKED: "Un moderador te ha expulsado de la partida.",
            ROOM_DESTROYED: "\xA1Gracias por jugar!",
            ROOM_DISCONNECTED: "Desconectado",
            TEXT_NAUGHTY: "Lo siento, no puedes escribir eso. Hay que ser respetuoso con los dem\xE1s jugadores.",
            TEXT_NOTHING: "Tienes que escribir algo",
            TITLE: "Error"
        },
        zH = "CARGANDO",
        XH = {
            JOINED_COUNT: "Se han unido {count} de {maxPlayers} jugadores",
            PLAYERS_NEEDED: "Se necesita 1 jugador para empezar | Se necesitan {count} jugadores para empezar",
            WAITING_FOR_VIP: "Esperando a que {name} inicie la partida",
            WAITING_FOR_GAMEPAD: "Esperando a que empiece la partida",
            GAME_STARTING: "La partida va a empezar",
            BUTTON_START: "Pulsa para empezar",
            BUTTON_CANCEL: "Pulsa para cancelar"
        },
        JH = {
            GALLERY_LINK: "Visita la galer\xEDa",
            PLAY_AGAIN: "\xBFJugar otra vez?",
            BUTTON_SAME_PLAYERS: "Los mismos jugadores",
            BUTTON_NEW_PLAYERS: "Otros jugadores"
        },
        QH = {
            AND: "Y",
            OR: "O"
        },
        ZH = {
            BUTTON_SKIP: "Omitir",
            BUTTON_NEXT: "Siguiente",
            BUTTON_DONE: "\xA1Vamos!"
        },
        e8 = {
            NAME: "P\xDABLICO"
        },
        t8 = {
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
        n8 = {
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
        r8 = {
            ACTION: KH,
            ALT: YH,
            ERROR: qH,
            LOADING: zH,
            LOBBY: XH,
            POST_GAME: JH,
            SEPARATOR: QH,
            TUTORIAL: ZH,
            AUDIENCE: e8,
            UGC: t8,
            TOAST: n8
        },
        i8 = {
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
        s8 = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "indicaciones ocultas en los dispositivos de los jugadores",
                VISIBILITY_CONTROLLER_ON: "indicaciones presentes en los dispositivos de los jugadores",
                VISIBILITY_SCREEN_OFF: "indicaciones ocultas en la pantalla del juego",
                VISIBILITY_SCREEN_ON: "indicaciones presentes en la pantalla del juego"
            }
        },
        a8 = {
            DISCONNECTED: "Te desconectaste.",
            DRAWING_NOTHING: "\xA1Tienes que dibujar algo!",
            PLAYER_KICKED: "Un moderador te expuls\xF3 del juego.",
            ROOM_DESTROYED: "\xA1Gracias por jugar!",
            ROOM_DISCONNECTED: "Desconectado",
            TEXT_NAUGHTY: "Lo siento, no puedes escribir eso. Seamos respetuosos con los dem\xE1s jugadores.",
            TEXT_NOTHING: "\xA1Tienes que escribir algo!",
            TITLE: "Error"
        },
        o8 = "CARGANDO",
        c8 = {
            JOINED_COUNT: "Se unieron {count} de {maxPlayers} jugadores",
            PLAYERS_NEEDED: "Se necesita 1 jugador para empezar | Se necesitan {count} jugadores para empezar",
            WAITING_FOR_VIP: "Esperando a que {name} inicie la partida",
            WAITING_FOR_GAMEPAD: "Esperando a que empiece la partida",
            GAME_STARTING: "La partida va a empezar",
            BUTTON_START: "Pulsa para empezar",
            BUTTON_CANCEL: "Pulsa para cancelar"
        },
        l8 = {
            GALLERY_LINK: "Visita la galer\xEDa",
            PLAY_AGAIN: "\xBFJugar otra vez?",
            BUTTON_SAME_PLAYERS: "Los mismos jugadores",
            BUTTON_NEW_PLAYERS: "Otros jugadores"
        },
        u8 = {
            AND: "Y",
            OR: "O"
        },
        f8 = {
            BUTTON_SKIP: "Omitir",
            BUTTON_NEXT: "Siguiente",
            BUTTON_DONE: "\xA1Vamos!"
        },
        d8 = {
            NAME: "P\xDABLICO"
        },
        h8 = {
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
        p8 = {
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
        g8 = {
            ACTION: i8,
            ALT: s8,
            ERROR: a8,
            LOADING: o8,
            LOBBY: c8,
            POST_GAME: l8,
            SEPARATOR: u8,
            TUTORIAL: f8,
            AUDIENCE: d8,
            UGC: h8,
            TOAST: p8
        },
        m8 = {
            en: lH,
            fr: bH,
            it: PH,
            de: VH,
            es: r8,
            "es-XL": g8
        },
        v8 = ze({
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
        mt = (e, t) => {
            const n = e.__vccOpts || e;
            for (const [r, s] of t) n[r] = s;
            return n
        },
        E8 = {
            class: "choices"
        },
        _8 = {
            class: "constrain"
        },
        y8 = {
            key: 0
        },
        b8 = ["disabled", "onClick"];

    function T8(e, t, n, r, s, o) {
        const c = mn("bb");
        return z(), Z("div", E8, [Y("div", _8, [e.player.prompt ? je((z(), Z("p", y8, null, 512)), [
            [c, e.player.prompt]
        ]) : we("", !0), (z(!0), Z(ut, null, Cr(e.player.choices, (u, f) => (z(), Z("button", {
            key: f,
            class: Ye({
                selected: u.isSelected
            }),
            disabled: u.isDisabled,
            onClick: Gt(d => e.onChoiceClick(f), ["prevent"])
        }, Ie(u.text), 11, b8))), 128))])])
    }
    const S8 = mt(v8, [
            ["render", T8]
        ]),
        O8 = ze({
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
                const e = yi();
                if (!(e != null && e.appContext.directives.pointerbox)) throw new Error("Doodle.vue relies on PointerBoxPlugin. Please install it inside your main.ts file.")
            },
            mounted() {
                this.createCanvas()
            },
            methods: {
                createCanvas() {
                    const e = this.$refs.canvas;
                    this.canvas = dr(new W3(e, this.player.doodle, this.canvasOptions))
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
        A8 = {
            class: "doodle"
        },
        I8 = {
            ref: "canvas"
        },
        w8 = ["disabled"],
        C8 = ["disabled"];

    function R8(e, t, n, r, s, o) {
        const c = mn("pointerbox-translate"),
            u = mn("pointerbox"),
            f = mn("t");
        return z(), Z("div", A8, [je((z(), Z("div", {
            class: "stage",
            "onPointerbox:start": t[0] || (t[0] = (...d) => e.onPointerBoxStart && e.onPointerBoxStart(...d)),
            "onPointerbox:move": t[1] || (t[1] = (...d) => e.onPointerBoxMove && e.onPointerBoxMove(...d)),
            "onPointerbox:end": t[2] || (t[2] = (...d) => e.onPointerBoxEnd && e.onPointerBoxEnd(...d))
        }, [je(Y("canvas", I8, null, 512), [
            [c, {
                id: "doodleCanvas",
                width: e.pointerBoxWidth,
                height: e.pointerBoxHeight
            }]
        ])], 32)), [
            [u]
        ]), e.hideUndo ? we("", !0) : je((z(), Z("button", {
            key: 0,
            class: "doodle-action undo",
            disabled: !e.canSubmit,
            onClick: t[3] || (t[3] = Gt((...d) => e.onUndo && e.onUndo(...d), ["prevent"]))
        }, null, 8, w8)), [
            [f, "ACTION.UNDO"]
        ]), e.hideSubmit ? we("", !0) : je((z(), Z("button", {
            key: 1,
            class: "doodle-action submit",
            disabled: !e.canSubmit,
            onClick: t[4] || (t[4] = Gt((...d) => e.onSubmit && e.onSubmit(...d), ["prevent"]))
        }, null, 8, C8)), [
            [f, "ACTION.SUBMIT"]
        ])])
    }
    const N8 = mt(O8, [
        ["render", R8]
    ]);
    var Wd = {
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
                d = 500,
                g = "__lodash_placeholder__",
                _ = 1,
                b = 2,
                I = 4,
                R = 1,
                M = 2,
                W = 1,
                C = 2,
                V = 4,
                q = 8,
                j = 16,
                G = 32,
                se = 64,
                ce = 128,
                le = 256,
                ue = 512,
                Ce = 30,
                be = "...",
                fe = 800,
                Oe = 16,
                F = 1,
                re = 2,
                de = 3,
                Ee = 1 / 0,
                me = 9007199254740991,
                Se = 17976931348623157e292,
                Me = 0 / 0,
                Fe = 4294967295,
                Je = Fe - 1,
                At = Fe >>> 1,
                Ht = [
                    ["ary", ce],
                    ["bind", W],
                    ["bindKey", C],
                    ["curry", q],
                    ["curryRight", j],
                    ["flip", ue],
                    ["partial", G],
                    ["partialRight", se],
                    ["rearg", le]
                ],
                It = "[object Arguments]",
                Xt = "[object Array]",
                it = "[object AsyncFunction]",
                vt = "[object Boolean]",
                st = "[object Date]",
                Pt = "[object DOMException]",
                kt = "[object Error]",
                Lt = "[object Function]",
                m = "[object GeneratorFunction]",
                p = "[object Map]",
                O = "[object Number]",
                x = "[object Null]",
                B = "[object Object]",
                D = "[object Promise]",
                ae = "[object Proxy]",
                Q = "[object RegExp]",
                X = "[object Set]",
                N = "[object String]",
                H = "[object Symbol]",
                he = "[object Undefined]",
                pe = "[object WeakMap]",
                Ne = "[object WeakSet]",
                xe = "[object ArrayBuffer]",
                A = "[object DataView]",
                T = "[object Float32Array]",
                $ = "[object Float64Array]",
                S = "[object Int8Array]",
                P = "[object Int16Array]",
                ee = "[object Int32Array]",
                ie = "[object Uint8Array]",
                _e = "[object Uint8ClampedArray]",
                Te = "[object Uint16Array]",
                ht = "[object Uint32Array]",
                ln = /\b__p \+= '';/g,
                Ue = /\b(__p \+=) '' \+/g,
                Oa = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
                Wp = /&(?:amp|lt|gt|quot|#39);/g,
                jp = /[&<>"']/g,
                IA = RegExp(Wp.source),
                wA = RegExp(jp.source),
                CA = /<%-([\s\S]+?)%>/g,
                RA = /<%([\s\S]+?)%>/g,
                Hp = /<%=([\s\S]+?)%>/g,
                NA = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                LA = /^\w*$/,
                $A = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                iu = /[\\^$.*+?()[\]{}|]/g,
                PA = RegExp(iu.source),
                su = /^\s+/,
                DA = /\s/,
                kA = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
                MA = /\{\n\/\* \[wrapped with (.+)\] \*/,
                xA = /,? & /,
                UA = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
                FA = /[()=,{}\[\]\/\s]/,
                BA = /\\(\\)?/g,
                GA = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
                Vp = /\w*$/,
                WA = /^[-+]0x[0-9a-f]+$/i,
                jA = /^0b[01]+$/i,
                HA = /^\[object .+?Constructor\]$/,
                VA = /^0o[0-7]+$/i,
                KA = /^(?:0|[1-9]\d*)$/,
                YA = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
                Do = /($^)/,
                qA = /['\n\r\u2028\u2029\\]/g,
                ko = "\\ud800-\\udfff",
                zA = "\\u0300-\\u036f",
                XA = "\\ufe20-\\ufe2f",
                JA = "\\u20d0-\\u20ff",
                Kp = zA + XA + JA,
                Yp = "\\u2700-\\u27bf",
                qp = "a-z\\xdf-\\xf6\\xf8-\\xff",
                QA = "\\xac\\xb1\\xd7\\xf7",
                ZA = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
                eI = "\\u2000-\\u206f",
                tI = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
                zp = "A-Z\\xc0-\\xd6\\xd8-\\xde",
                Xp = "\\ufe0e\\ufe0f",
                Jp = QA + ZA + eI + tI,
                au = "['\u2019]",
                nI = "[" + ko + "]",
                Qp = "[" + Jp + "]",
                Mo = "[" + Kp + "]",
                Zp = "\\d+",
                rI = "[" + Yp + "]",
                eg = "[" + qp + "]",
                tg = "[^" + ko + Jp + Zp + Yp + qp + zp + "]",
                ou = "\\ud83c[\\udffb-\\udfff]",
                iI = "(?:" + Mo + "|" + ou + ")",
                ng = "[^" + ko + "]",
                cu = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                lu = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                vs = "[" + zp + "]",
                rg = "\\u200d",
                ig = "(?:" + eg + "|" + tg + ")",
                sI = "(?:" + vs + "|" + tg + ")",
                sg = "(?:" + au + "(?:d|ll|m|re|s|t|ve))?",
                ag = "(?:" + au + "(?:D|LL|M|RE|S|T|VE))?",
                og = iI + "?",
                cg = "[" + Xp + "]?",
                aI = "(?:" + rg + "(?:" + [ng, cu, lu].join("|") + ")" + cg + og + ")*",
                oI = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
                cI = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
                lg = cg + og + aI,
                lI = "(?:" + [rI, cu, lu].join("|") + ")" + lg,
                uI = "(?:" + [ng + Mo + "?", Mo, cu, lu, nI].join("|") + ")",
                fI = RegExp(au, "g"),
                dI = RegExp(Mo, "g"),
                uu = RegExp(ou + "(?=" + ou + ")|" + uI + lg, "g"),
                hI = RegExp([vs + "?" + eg + "+" + sg + "(?=" + [Qp, vs, "$"].join("|") + ")", sI + "+" + ag + "(?=" + [Qp, vs + ig, "$"].join("|") + ")", vs + "?" + ig + "+" + sg, vs + "+" + ag, cI, oI, Zp, lI].join("|"), "g"),
                pI = RegExp("[" + rg + ko + Kp + Xp + "]"),
                gI = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
                mI = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
                vI = -1,
                wt = {};
            wt[T] = wt[$] = wt[S] = wt[P] = wt[ee] = wt[ie] = wt[_e] = wt[Te] = wt[ht] = !0, wt[It] = wt[Xt] = wt[xe] = wt[vt] = wt[A] = wt[st] = wt[kt] = wt[Lt] = wt[p] = wt[O] = wt[B] = wt[Q] = wt[X] = wt[N] = wt[pe] = !1;
            var bt = {};
            bt[It] = bt[Xt] = bt[xe] = bt[A] = bt[vt] = bt[st] = bt[T] = bt[$] = bt[S] = bt[P] = bt[ee] = bt[p] = bt[O] = bt[B] = bt[Q] = bt[X] = bt[N] = bt[H] = bt[ie] = bt[_e] = bt[Te] = bt[ht] = !0, bt[kt] = bt[Lt] = bt[pe] = !1;
            var EI = {
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
                _I = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;"
                },
                yI = {
                    "&amp;": "&",
                    "&lt;": "<",
                    "&gt;": ">",
                    "&quot;": '"',
                    "&#39;": "'"
                },
                bI = {
                    "\\": "\\",
                    "'": "'",
                    "\n": "n",
                    "\r": "r",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                },
                TI = parseFloat,
                SI = parseInt,
                ug = typeof Ft == "object" && Ft && Ft.Object === Object && Ft,
                OI = typeof self == "object" && self && self.Object === Object && self,
                nn = ug || OI || Function("return this")(),
                fu = t && !t.nodeType && t,
                ki = fu && !0 && e && !e.nodeType && e,
                fg = ki && ki.exports === fu,
                du = fg && ug.process,
                Kn = function() {
                    try {
                        var k = ki && ki.require && ki.require("util").types;
                        return k || du && du.binding && du.binding("util")
                    } catch {}
                }(),
                dg = Kn && Kn.isArrayBuffer,
                hg = Kn && Kn.isDate,
                pg = Kn && Kn.isMap,
                gg = Kn && Kn.isRegExp,
                mg = Kn && Kn.isSet,
                vg = Kn && Kn.isTypedArray;

            function Pn(k, J, K) {
                switch (K.length) {
                    case 0:
                        return k.call(J);
                    case 1:
                        return k.call(J, K[0]);
                    case 2:
                        return k.call(J, K[0], K[1]);
                    case 3:
                        return k.call(J, K[0], K[1], K[2])
                }
                return k.apply(J, K)
            }

            function AI(k, J, K, ye) {
                for (var Be = -1, ct = k == null ? 0 : k.length; ++Be < ct;) {
                    var Vt = k[Be];
                    J(ye, Vt, K(Vt), k)
                }
                return ye
            }

            function Yn(k, J) {
                for (var K = -1, ye = k == null ? 0 : k.length; ++K < ye && J(k[K], K, k) !== !1;);
                return k
            }

            function II(k, J) {
                for (var K = k == null ? 0 : k.length; K-- && J(k[K], K, k) !== !1;);
                return k
            }

            function Eg(k, J) {
                for (var K = -1, ye = k == null ? 0 : k.length; ++K < ye;)
                    if (!J(k[K], K, k)) return !1;
                return !0
            }

            function zr(k, J) {
                for (var K = -1, ye = k == null ? 0 : k.length, Be = 0, ct = []; ++K < ye;) {
                    var Vt = k[K];
                    J(Vt, K, k) && (ct[Be++] = Vt)
                }
                return ct
            }

            function xo(k, J) {
                var K = k == null ? 0 : k.length;
                return !!K && Es(k, J, 0) > -1
            }

            function hu(k, J, K) {
                for (var ye = -1, Be = k == null ? 0 : k.length; ++ye < Be;)
                    if (K(J, k[ye])) return !0;
                return !1
            }

            function Rt(k, J) {
                for (var K = -1, ye = k == null ? 0 : k.length, Be = Array(ye); ++K < ye;) Be[K] = J(k[K], K, k);
                return Be
            }

            function Xr(k, J) {
                for (var K = -1, ye = J.length, Be = k.length; ++K < ye;) k[Be + K] = J[K];
                return k
            }

            function pu(k, J, K, ye) {
                var Be = -1,
                    ct = k == null ? 0 : k.length;
                for (ye && ct && (K = k[++Be]); ++Be < ct;) K = J(K, k[Be], Be, k);
                return K
            }

            function wI(k, J, K, ye) {
                var Be = k == null ? 0 : k.length;
                for (ye && Be && (K = k[--Be]); Be--;) K = J(K, k[Be], Be, k);
                return K
            }

            function gu(k, J) {
                for (var K = -1, ye = k == null ? 0 : k.length; ++K < ye;)
                    if (J(k[K], K, k)) return !0;
                return !1
            }
            var CI = mu("length");

            function RI(k) {
                return k.split("")
            }

            function NI(k) {
                return k.match(UA) || []
            }

            function _g(k, J, K) {
                var ye;
                return K(k, function(Be, ct, Vt) {
                    if (J(Be, ct, Vt)) return ye = ct, !1
                }), ye
            }

            function Uo(k, J, K, ye) {
                for (var Be = k.length, ct = K + (ye ? 1 : -1); ye ? ct-- : ++ct < Be;)
                    if (J(k[ct], ct, k)) return ct;
                return -1
            }

            function Es(k, J, K) {
                return J === J ? WI(k, J, K) : Uo(k, yg, K)
            }

            function LI(k, J, K, ye) {
                for (var Be = K - 1, ct = k.length; ++Be < ct;)
                    if (ye(k[Be], J)) return Be;
                return -1
            }

            function yg(k) {
                return k !== k
            }

            function bg(k, J) {
                var K = k == null ? 0 : k.length;
                return K ? Eu(k, J) / K : Me
            }

            function mu(k) {
                return function(J) {
                    return J == null ? n : J[k]
                }
            }

            function vu(k) {
                return function(J) {
                    return k == null ? n : k[J]
                }
            }

            function Tg(k, J, K, ye, Be) {
                return Be(k, function(ct, Vt, Et) {
                    K = ye ? (ye = !1, ct) : J(K, ct, Vt, Et)
                }), K
            }

            function $I(k, J) {
                var K = k.length;
                for (k.sort(J); K--;) k[K] = k[K].value;
                return k
            }

            function Eu(k, J) {
                for (var K, ye = -1, Be = k.length; ++ye < Be;) {
                    var ct = J(k[ye]);
                    ct !== n && (K = K === n ? ct : K + ct)
                }
                return K
            }

            function _u(k, J) {
                for (var K = -1, ye = Array(k); ++K < k;) ye[K] = J(K);
                return ye
            }

            function PI(k, J) {
                return Rt(J, function(K) {
                    return [K, k[K]]
                })
            }

            function Sg(k) {
                return k && k.slice(0, wg(k) + 1).replace(su, "")
            }

            function Dn(k) {
                return function(J) {
                    return k(J)
                }
            }

            function yu(k, J) {
                return Rt(J, function(K) {
                    return k[K]
                })
            }

            function Aa(k, J) {
                return k.has(J)
            }

            function Og(k, J) {
                for (var K = -1, ye = k.length; ++K < ye && Es(J, k[K], 0) > -1;);
                return K
            }

            function Ag(k, J) {
                for (var K = k.length; K-- && Es(J, k[K], 0) > -1;);
                return K
            }

            function DI(k, J) {
                for (var K = k.length, ye = 0; K--;) k[K] === J && ++ye;
                return ye
            }
            var kI = vu(EI),
                MI = vu(_I);

            function xI(k) {
                return "\\" + bI[k]
            }

            function UI(k, J) {
                return k == null ? n : k[J]
            }

            function _s(k) {
                return pI.test(k)
            }

            function FI(k) {
                return gI.test(k)
            }

            function BI(k) {
                for (var J, K = []; !(J = k.next()).done;) K.push(J.value);
                return K
            }

            function bu(k) {
                var J = -1,
                    K = Array(k.size);
                return k.forEach(function(ye, Be) {
                    K[++J] = [Be, ye]
                }), K
            }

            function Ig(k, J) {
                return function(K) {
                    return k(J(K))
                }
            }

            function Jr(k, J) {
                for (var K = -1, ye = k.length, Be = 0, ct = []; ++K < ye;) {
                    var Vt = k[K];
                    (Vt === J || Vt === g) && (k[K] = g, ct[Be++] = K)
                }
                return ct
            }

            function Fo(k) {
                var J = -1,
                    K = Array(k.size);
                return k.forEach(function(ye) {
                    K[++J] = ye
                }), K
            }

            function GI(k) {
                var J = -1,
                    K = Array(k.size);
                return k.forEach(function(ye) {
                    K[++J] = [ye, ye]
                }), K
            }

            function WI(k, J, K) {
                for (var ye = K - 1, Be = k.length; ++ye < Be;)
                    if (k[ye] === J) return ye;
                return -1
            }

            function jI(k, J, K) {
                for (var ye = K + 1; ye--;)
                    if (k[ye] === J) return ye;
                return ye
            }

            function ys(k) {
                return _s(k) ? VI(k) : CI(k)
            }

            function ir(k) {
                return _s(k) ? KI(k) : RI(k)
            }

            function wg(k) {
                for (var J = k.length; J-- && DA.test(k.charAt(J)););
                return J
            }
            var HI = vu(yI);

            function VI(k) {
                for (var J = uu.lastIndex = 0; uu.test(k);) ++J;
                return J
            }

            function KI(k) {
                return k.match(uu) || []
            }

            function YI(k) {
                return k.match(hI) || []
            }
            var qI = function k(J) {
                    J = J == null ? nn : bs.defaults(nn.Object(), J, bs.pick(nn, mI));
                    var K = J.Array,
                        ye = J.Date,
                        Be = J.Error,
                        ct = J.Function,
                        Vt = J.Math,
                        Et = J.Object,
                        Tu = J.RegExp,
                        zI = J.String,
                        qn = J.TypeError,
                        Bo = K.prototype,
                        XI = ct.prototype,
                        Ts = Et.prototype,
                        Go = J["__core-js_shared__"],
                        Wo = XI.toString,
                        pt = Ts.hasOwnProperty,
                        JI = 0,
                        Cg = function() {
                            var i = /[^.]+$/.exec(Go && Go.keys && Go.keys.IE_PROTO || "");
                            return i ? "Symbol(src)_1." + i : ""
                        }(),
                        jo = Ts.toString,
                        QI = Wo.call(Et),
                        ZI = nn._,
                        ew = Tu("^" + Wo.call(pt).replace(iu, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                        Ho = fg ? J.Buffer : n,
                        Qr = J.Symbol,
                        Vo = J.Uint8Array,
                        Rg = Ho ? Ho.allocUnsafe : n,
                        Ko = Ig(Et.getPrototypeOf, Et),
                        Ng = Et.create,
                        Lg = Ts.propertyIsEnumerable,
                        Yo = Bo.splice,
                        $g = Qr ? Qr.isConcatSpreadable : n,
                        Ia = Qr ? Qr.iterator : n,
                        Mi = Qr ? Qr.toStringTag : n,
                        qo = function() {
                            try {
                                var i = Gi(Et, "defineProperty");
                                return i({}, "", {}), i
                            } catch {}
                        }(),
                        tw = J.clearTimeout !== nn.clearTimeout && J.clearTimeout,
                        nw = ye && ye.now !== nn.Date.now && ye.now,
                        rw = J.setTimeout !== nn.setTimeout && J.setTimeout,
                        zo = Vt.ceil,
                        Xo = Vt.floor,
                        Su = Et.getOwnPropertySymbols,
                        iw = Ho ? Ho.isBuffer : n,
                        Pg = J.isFinite,
                        sw = Bo.join,
                        aw = Ig(Et.keys, Et),
                        Kt = Vt.max,
                        un = Vt.min,
                        ow = ye.now,
                        cw = J.parseInt,
                        Dg = Vt.random,
                        lw = Bo.reverse,
                        Ou = Gi(J, "DataView"),
                        wa = Gi(J, "Map"),
                        Au = Gi(J, "Promise"),
                        Ss = Gi(J, "Set"),
                        Ca = Gi(J, "WeakMap"),
                        Ra = Gi(Et, "create"),
                        Jo = Ca && new Ca,
                        Os = {},
                        uw = Wi(Ou),
                        fw = Wi(wa),
                        dw = Wi(Au),
                        hw = Wi(Ss),
                        pw = Wi(Ca),
                        Qo = Qr ? Qr.prototype : n,
                        Na = Qo ? Qo.valueOf : n,
                        kg = Qo ? Qo.toString : n;

                    function E(i) {
                        if (Dt(i) && !We(i) && !(i instanceof Qe)) {
                            if (i instanceof zn) return i;
                            if (pt.call(i, "__wrapped__")) return Mm(i)
                        }
                        return new zn(i)
                    }
                    var As = function() {
                        function i() {}
                        return function(a) {
                            if (!$t(a)) return {};
                            if (Ng) return Ng(a);
                            i.prototype = a;
                            var l = new i;
                            return i.prototype = n, l
                        }
                    }();

                    function Zo() {}

                    function zn(i, a) {
                        this.__wrapped__ = i, this.__actions__ = [], this.__chain__ = !!a, this.__index__ = 0, this.__values__ = n
                    }
                    E.templateSettings = {
                        escape: CA,
                        evaluate: RA,
                        interpolate: Hp,
                        variable: "",
                        imports: {
                            _: E
                        }
                    }, E.prototype = Zo.prototype, E.prototype.constructor = E, zn.prototype = As(Zo.prototype), zn.prototype.constructor = zn;

                    function Qe(i) {
                        this.__wrapped__ = i, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Fe, this.__views__ = []
                    }

                    function gw() {
                        var i = new Qe(this.__wrapped__);
                        return i.__actions__ = An(this.__actions__), i.__dir__ = this.__dir__, i.__filtered__ = this.__filtered__, i.__iteratees__ = An(this.__iteratees__), i.__takeCount__ = this.__takeCount__, i.__views__ = An(this.__views__), i
                    }

                    function mw() {
                        if (this.__filtered__) {
                            var i = new Qe(this);
                            i.__dir__ = -1, i.__filtered__ = !0
                        } else i = this.clone(), i.__dir__ *= -1;
                        return i
                    }

                    function vw() {
                        var i = this.__wrapped__.value(),
                            a = this.__dir__,
                            l = We(i),
                            h = a < 0,
                            v = l ? i.length : 0,
                            y = RC(0, v, this.__views__),
                            w = y.start,
                            L = y.end,
                            U = L - w,
                            te = h ? L : w - 1,
                            ne = this.__iteratees__,
                            oe = ne.length,
                            ge = 0,
                            Ae = un(U, this.__takeCount__);
                        if (!l || !h && v == U && Ae == U) return sm(i, this.__actions__);
                        var Pe = [];
                        e: for (; U-- && ge < Ae;) {
                            te += a;
                            for (var Ke = -1, De = i[te]; ++Ke < oe;) {
                                var Xe = ne[Ke],
                                    Ze = Xe.iteratee,
                                    xn = Xe.type,
                                    bn = Ze(De);
                                if (xn == re) De = bn;
                                else if (!bn) {
                                    if (xn == F) continue e;
                                    break e
                                }
                            }
                            Pe[ge++] = De
                        }
                        return Pe
                    }
                    Qe.prototype = As(Zo.prototype), Qe.prototype.constructor = Qe;

                    function xi(i) {
                        var a = -1,
                            l = i == null ? 0 : i.length;
                        for (this.clear(); ++a < l;) {
                            var h = i[a];
                            this.set(h[0], h[1])
                        }
                    }

                    function Ew() {
                        this.__data__ = Ra ? Ra(null) : {}, this.size = 0
                    }

                    function _w(i) {
                        var a = this.has(i) && delete this.__data__[i];
                        return this.size -= a ? 1 : 0, a
                    }

                    function yw(i) {
                        var a = this.__data__;
                        if (Ra) {
                            var l = a[i];
                            return l === f ? n : l
                        }
                        return pt.call(a, i) ? a[i] : n
                    }

                    function bw(i) {
                        var a = this.__data__;
                        return Ra ? a[i] !== n : pt.call(a, i)
                    }

                    function Tw(i, a) {
                        var l = this.__data__;
                        return this.size += this.has(i) ? 0 : 1, l[i] = Ra && a === n ? f : a, this
                    }
                    xi.prototype.clear = Ew, xi.prototype.delete = _w, xi.prototype.get = yw, xi.prototype.has = bw, xi.prototype.set = Tw;

                    function Nr(i) {
                        var a = -1,
                            l = i == null ? 0 : i.length;
                        for (this.clear(); ++a < l;) {
                            var h = i[a];
                            this.set(h[0], h[1])
                        }
                    }

                    function Sw() {
                        this.__data__ = [], this.size = 0
                    }

                    function Ow(i) {
                        var a = this.__data__,
                            l = ec(a, i);
                        if (l < 0) return !1;
                        var h = a.length - 1;
                        return l == h ? a.pop() : Yo.call(a, l, 1), --this.size, !0
                    }

                    function Aw(i) {
                        var a = this.__data__,
                            l = ec(a, i);
                        return l < 0 ? n : a[l][1]
                    }

                    function Iw(i) {
                        return ec(this.__data__, i) > -1
                    }

                    function ww(i, a) {
                        var l = this.__data__,
                            h = ec(l, i);
                        return h < 0 ? (++this.size, l.push([i, a])) : l[h][1] = a, this
                    }
                    Nr.prototype.clear = Sw, Nr.prototype.delete = Ow, Nr.prototype.get = Aw, Nr.prototype.has = Iw, Nr.prototype.set = ww;

                    function Lr(i) {
                        var a = -1,
                            l = i == null ? 0 : i.length;
                        for (this.clear(); ++a < l;) {
                            var h = i[a];
                            this.set(h[0], h[1])
                        }
                    }

                    function Cw() {
                        this.size = 0, this.__data__ = {
                            hash: new xi,
                            map: new(wa || Nr),
                            string: new xi
                        }
                    }

                    function Rw(i) {
                        var a = dc(this, i).delete(i);
                        return this.size -= a ? 1 : 0, a
                    }

                    function Nw(i) {
                        return dc(this, i).get(i)
                    }

                    function Lw(i) {
                        return dc(this, i).has(i)
                    }

                    function $w(i, a) {
                        var l = dc(this, i),
                            h = l.size;
                        return l.set(i, a), this.size += l.size == h ? 0 : 1, this
                    }
                    Lr.prototype.clear = Cw, Lr.prototype.delete = Rw, Lr.prototype.get = Nw, Lr.prototype.has = Lw, Lr.prototype.set = $w;

                    function Ui(i) {
                        var a = -1,
                            l = i == null ? 0 : i.length;
                        for (this.__data__ = new Lr; ++a < l;) this.add(i[a])
                    }

                    function Pw(i) {
                        return this.__data__.set(i, f), this
                    }

                    function Dw(i) {
                        return this.__data__.has(i)
                    }
                    Ui.prototype.add = Ui.prototype.push = Pw, Ui.prototype.has = Dw;

                    function sr(i) {
                        var a = this.__data__ = new Nr(i);
                        this.size = a.size
                    }

                    function kw() {
                        this.__data__ = new Nr, this.size = 0
                    }

                    function Mw(i) {
                        var a = this.__data__,
                            l = a.delete(i);
                        return this.size = a.size, l
                    }

                    function xw(i) {
                        return this.__data__.get(i)
                    }

                    function Uw(i) {
                        return this.__data__.has(i)
                    }

                    function Fw(i, a) {
                        var l = this.__data__;
                        if (l instanceof Nr) {
                            var h = l.__data__;
                            if (!wa || h.length < s - 1) return h.push([i, a]), this.size = ++l.size, this;
                            l = this.__data__ = new Lr(h)
                        }
                        return l.set(i, a), this.size = l.size, this
                    }
                    sr.prototype.clear = kw, sr.prototype.delete = Mw, sr.prototype.get = xw, sr.prototype.has = Uw, sr.prototype.set = Fw;

                    function Mg(i, a) {
                        var l = We(i),
                            h = !l && ji(i),
                            v = !l && !h && ri(i),
                            y = !l && !h && !v && Rs(i),
                            w = l || h || v || y,
                            L = w ? _u(i.length, zI) : [],
                            U = L.length;
                        for (var te in i)(a || pt.call(i, te)) && !(w && (te == "length" || v && (te == "offset" || te == "parent") || y && (te == "buffer" || te == "byteLength" || te == "byteOffset") || kr(te, U))) && L.push(te);
                        return L
                    }

                    function xg(i) {
                        var a = i.length;
                        return a ? i[Mu(0, a - 1)] : n
                    }

                    function Bw(i, a) {
                        return hc(An(i), Fi(a, 0, i.length))
                    }

                    function Gw(i) {
                        return hc(An(i))
                    }

                    function Iu(i, a, l) {
                        (l !== n && !ar(i[a], l) || l === n && !(a in i)) && $r(i, a, l)
                    }

                    function La(i, a, l) {
                        var h = i[a];
                        (!(pt.call(i, a) && ar(h, l)) || l === n && !(a in i)) && $r(i, a, l)
                    }

                    function ec(i, a) {
                        for (var l = i.length; l--;)
                            if (ar(i[l][0], a)) return l;
                        return -1
                    }

                    function Ww(i, a, l, h) {
                        return Zr(i, function(v, y, w) {
                            a(h, v, l(v), w)
                        }), h
                    }

                    function Ug(i, a) {
                        return i && mr(a, Jt(a), i)
                    }

                    function jw(i, a) {
                        return i && mr(a, wn(a), i)
                    }

                    function $r(i, a, l) {
                        a == "__proto__" && qo ? qo(i, a, {
                            configurable: !0,
                            enumerable: !0,
                            value: l,
                            writable: !0
                        }) : i[a] = l
                    }

                    function wu(i, a) {
                        for (var l = -1, h = a.length, v = K(h), y = i == null; ++l < h;) v[l] = y ? n : cf(i, a[l]);
                        return v
                    }

                    function Fi(i, a, l) {
                        return i === i && (l !== n && (i = i <= l ? i : l), a !== n && (i = i >= a ? i : a)), i
                    }

                    function Xn(i, a, l, h, v, y) {
                        var w, L = a & _,
                            U = a & b,
                            te = a & I;
                        if (l && (w = v ? l(i, h, v, y) : l(i)), w !== n) return w;
                        if (!$t(i)) return i;
                        var ne = We(i);
                        if (ne) {
                            if (w = LC(i), !L) return An(i, w)
                        } else {
                            var oe = fn(i),
                                ge = oe == Lt || oe == m;
                            if (ri(i)) return cm(i, L);
                            if (oe == B || oe == It || ge && !v) {
                                if (w = U || ge ? {} : wm(i), !L) return U ? yC(i, jw(w, i)) : _C(i, Ug(w, i))
                            } else {
                                if (!bt[oe]) return v ? i : {};
                                w = $C(i, oe, L)
                            }
                        }
                        y || (y = new sr);
                        var Ae = y.get(i);
                        if (Ae) return Ae;
                        y.set(i, w), nv(i) ? i.forEach(function(De) {
                            w.add(Xn(De, a, l, De, i, y))
                        }) : ev(i) && i.forEach(function(De, Xe) {
                            w.set(Xe, Xn(De, a, l, Xe, i, y))
                        });
                        var Pe = te ? U ? Yu : Ku : U ? wn : Jt,
                            Ke = ne ? n : Pe(i);
                        return Yn(Ke || i, function(De, Xe) {
                            Ke && (Xe = De, De = i[Xe]), La(w, Xe, Xn(De, a, l, Xe, i, y))
                        }), w
                    }

                    function Hw(i) {
                        var a = Jt(i);
                        return function(l) {
                            return Fg(l, i, a)
                        }
                    }

                    function Fg(i, a, l) {
                        var h = l.length;
                        if (i == null) return !h;
                        for (i = Et(i); h--;) {
                            var v = l[h],
                                y = a[v],
                                w = i[v];
                            if (w === n && !(v in i) || !y(w)) return !1
                        }
                        return !0
                    }

                    function Bg(i, a, l) {
                        if (typeof i != "function") throw new qn(c);
                        return Ua(function() {
                            i.apply(n, l)
                        }, a)
                    }

                    function $a(i, a, l, h) {
                        var v = -1,
                            y = xo,
                            w = !0,
                            L = i.length,
                            U = [],
                            te = a.length;
                        if (!L) return U;
                        l && (a = Rt(a, Dn(l))), h ? (y = hu, w = !1) : a.length >= s && (y = Aa, w = !1, a = new Ui(a));
                        e: for (; ++v < L;) {
                            var ne = i[v],
                                oe = l == null ? ne : l(ne);
                            if (ne = h || ne !== 0 ? ne : 0, w && oe === oe) {
                                for (var ge = te; ge--;)
                                    if (a[ge] === oe) continue e;
                                U.push(ne)
                            } else y(a, oe, h) || U.push(ne)
                        }
                        return U
                    }
                    var Zr = hm(gr),
                        Gg = hm(Ru, !0);

                    function Vw(i, a) {
                        var l = !0;
                        return Zr(i, function(h, v, y) {
                            return l = !!a(h, v, y), l
                        }), l
                    }

                    function tc(i, a, l) {
                        for (var h = -1, v = i.length; ++h < v;) {
                            var y = i[h],
                                w = a(y);
                            if (w != null && (L === n ? w === w && !Mn(w) : l(w, L))) var L = w,
                                U = y
                        }
                        return U
                    }

                    function Kw(i, a, l, h) {
                        var v = i.length;
                        for (l = He(l), l < 0 && (l = -l > v ? 0 : v + l), h = h === n || h > v ? v : He(h), h < 0 && (h += v), h = l > h ? 0 : iv(h); l < h;) i[l++] = a;
                        return i
                    }

                    function Wg(i, a) {
                        var l = [];
                        return Zr(i, function(h, v, y) {
                            a(h, v, y) && l.push(h)
                        }), l
                    }

                    function rn(i, a, l, h, v) {
                        var y = -1,
                            w = i.length;
                        for (l || (l = DC), v || (v = []); ++y < w;) {
                            var L = i[y];
                            a > 0 && l(L) ? a > 1 ? rn(L, a - 1, l, h, v) : Xr(v, L) : h || (v[v.length] = L)
                        }
                        return v
                    }
                    var Cu = pm(),
                        jg = pm(!0);

                    function gr(i, a) {
                        return i && Cu(i, a, Jt)
                    }

                    function Ru(i, a) {
                        return i && jg(i, a, Jt)
                    }

                    function nc(i, a) {
                        return zr(a, function(l) {
                            return Mr(i[l])
                        })
                    }

                    function Bi(i, a) {
                        a = ti(a, i);
                        for (var l = 0, h = a.length; i != null && l < h;) i = i[vr(a[l++])];
                        return l && l == h ? i : n
                    }

                    function Hg(i, a, l) {
                        var h = a(i);
                        return We(i) ? h : Xr(h, l(i))
                    }

                    function _n(i) {
                        return i == null ? i === n ? he : x : Mi && Mi in Et(i) ? CC(i) : GC(i)
                    }

                    function Nu(i, a) {
                        return i > a
                    }

                    function Yw(i, a) {
                        return i != null && pt.call(i, a)
                    }

                    function qw(i, a) {
                        return i != null && a in Et(i)
                    }

                    function zw(i, a, l) {
                        return i >= un(a, l) && i < Kt(a, l)
                    }

                    function Lu(i, a, l) {
                        for (var h = l ? hu : xo, v = i[0].length, y = i.length, w = y, L = K(y), U = 1 / 0, te = []; w--;) {
                            var ne = i[w];
                            w && a && (ne = Rt(ne, Dn(a))), U = un(ne.length, U), L[w] = !l && (a || v >= 120 && ne.length >= 120) ? new Ui(w && ne) : n
                        }
                        ne = i[0];
                        var oe = -1,
                            ge = L[0];
                        e: for (; ++oe < v && te.length < U;) {
                            var Ae = ne[oe],
                                Pe = a ? a(Ae) : Ae;
                            if (Ae = l || Ae !== 0 ? Ae : 0, !(ge ? Aa(ge, Pe) : h(te, Pe, l))) {
                                for (w = y; --w;) {
                                    var Ke = L[w];
                                    if (!(Ke ? Aa(Ke, Pe) : h(i[w], Pe, l))) continue e
                                }
                                ge && ge.push(Pe), te.push(Ae)
                            }
                        }
                        return te
                    }

                    function Xw(i, a, l, h) {
                        return gr(i, function(v, y, w) {
                            a(h, l(v), y, w)
                        }), h
                    }

                    function Pa(i, a, l) {
                        a = ti(a, i), i = Lm(i, a);
                        var h = i == null ? i : i[vr(Qn(a))];
                        return h == null ? n : Pn(h, i, l)
                    }

                    function Vg(i) {
                        return Dt(i) && _n(i) == It
                    }

                    function Jw(i) {
                        return Dt(i) && _n(i) == xe
                    }

                    function Qw(i) {
                        return Dt(i) && _n(i) == st
                    }

                    function Da(i, a, l, h, v) {
                        return i === a ? !0 : i == null || a == null || !Dt(i) && !Dt(a) ? i !== i && a !== a : Zw(i, a, l, h, Da, v)
                    }

                    function Zw(i, a, l, h, v, y) {
                        var w = We(i),
                            L = We(a),
                            U = w ? Xt : fn(i),
                            te = L ? Xt : fn(a);
                        U = U == It ? B : U, te = te == It ? B : te;
                        var ne = U == B,
                            oe = te == B,
                            ge = U == te;
                        if (ge && ri(i)) {
                            if (!ri(a)) return !1;
                            w = !0, ne = !1
                        }
                        if (ge && !ne) return y || (y = new sr), w || Rs(i) ? Om(i, a, l, h, v, y) : IC(i, a, U, l, h, v, y);
                        if (!(l & R)) {
                            var Ae = ne && pt.call(i, "__wrapped__"),
                                Pe = oe && pt.call(a, "__wrapped__");
                            if (Ae || Pe) {
                                var Ke = Ae ? i.value() : i,
                                    De = Pe ? a.value() : a;
                                return y || (y = new sr), v(Ke, De, l, h, y)
                            }
                        }
                        return ge ? (y || (y = new sr), wC(i, a, l, h, v, y)) : !1
                    }

                    function eC(i) {
                        return Dt(i) && fn(i) == p
                    }

                    function $u(i, a, l, h) {
                        var v = l.length,
                            y = v,
                            w = !h;
                        if (i == null) return !y;
                        for (i = Et(i); v--;) {
                            var L = l[v];
                            if (w && L[2] ? L[1] !== i[L[0]] : !(L[0] in i)) return !1
                        }
                        for (; ++v < y;) {
                            L = l[v];
                            var U = L[0],
                                te = i[U],
                                ne = L[1];
                            if (w && L[2]) {
                                if (te === n && !(U in i)) return !1
                            } else {
                                var oe = new sr;
                                if (h) var ge = h(te, ne, U, i, a, oe);
                                if (!(ge === n ? Da(ne, te, R | M, h, oe) : ge)) return !1
                            }
                        }
                        return !0
                    }

                    function Kg(i) {
                        if (!$t(i) || MC(i)) return !1;
                        var a = Mr(i) ? ew : HA;
                        return a.test(Wi(i))
                    }

                    function tC(i) {
                        return Dt(i) && _n(i) == Q
                    }

                    function nC(i) {
                        return Dt(i) && fn(i) == X
                    }

                    function rC(i) {
                        return Dt(i) && _c(i.length) && !!wt[_n(i)]
                    }

                    function Yg(i) {
                        return typeof i == "function" ? i : i == null ? Cn : typeof i == "object" ? We(i) ? Xg(i[0], i[1]) : zg(i) : gv(i)
                    }

                    function Pu(i) {
                        if (!xa(i)) return aw(i);
                        var a = [];
                        for (var l in Et(i)) pt.call(i, l) && l != "constructor" && a.push(l);
                        return a
                    }

                    function iC(i) {
                        if (!$t(i)) return BC(i);
                        var a = xa(i),
                            l = [];
                        for (var h in i) h == "constructor" && (a || !pt.call(i, h)) || l.push(h);
                        return l
                    }

                    function Du(i, a) {
                        return i < a
                    }

                    function qg(i, a) {
                        var l = -1,
                            h = In(i) ? K(i.length) : [];
                        return Zr(i, function(v, y, w) {
                            h[++l] = a(v, y, w)
                        }), h
                    }

                    function zg(i) {
                        var a = zu(i);
                        return a.length == 1 && a[0][2] ? Rm(a[0][0], a[0][1]) : function(l) {
                            return l === i || $u(l, i, a)
                        }
                    }

                    function Xg(i, a) {
                        return Ju(i) && Cm(a) ? Rm(vr(i), a) : function(l) {
                            var h = cf(l, i);
                            return h === n && h === a ? lf(l, i) : Da(a, h, R | M)
                        }
                    }

                    function rc(i, a, l, h, v) {
                        i !== a && Cu(a, function(y, w) {
                            if (v || (v = new sr), $t(y)) sC(i, a, w, l, rc, h, v);
                            else {
                                var L = h ? h(Zu(i, w), y, w + "", i, a, v) : n;
                                L === n && (L = y), Iu(i, w, L)
                            }
                        }, wn)
                    }

                    function sC(i, a, l, h, v, y, w) {
                        var L = Zu(i, l),
                            U = Zu(a, l),
                            te = w.get(U);
                        if (te) {
                            Iu(i, l, te);
                            return
                        }
                        var ne = y ? y(L, U, l + "", i, a, w) : n,
                            oe = ne === n;
                        if (oe) {
                            var ge = We(U),
                                Ae = !ge && ri(U),
                                Pe = !ge && !Ae && Rs(U);
                            ne = U, ge || Ae || Pe ? We(L) ? ne = L : Mt(L) ? ne = An(L) : Ae ? (oe = !1, ne = cm(U, !0)) : Pe ? (oe = !1, ne = lm(U, !0)) : ne = [] : Fa(U) || ji(U) ? (ne = L, ji(L) ? ne = sv(L) : (!$t(L) || Mr(L)) && (ne = wm(U))) : oe = !1
                        }
                        oe && (w.set(U, ne), v(ne, U, h, y, w), w.delete(U)), Iu(i, l, ne)
                    }

                    function Jg(i, a) {
                        var l = i.length;
                        if (!!l) return a += a < 0 ? l : 0, kr(a, l) ? i[a] : n
                    }

                    function Qg(i, a, l) {
                        a.length ? a = Rt(a, function(y) {
                            return We(y) ? function(w) {
                                return Bi(w, y.length === 1 ? y[0] : y)
                            } : y
                        }) : a = [Cn];
                        var h = -1;
                        a = Rt(a, Dn($e()));
                        var v = qg(i, function(y, w, L) {
                            var U = Rt(a, function(te) {
                                return te(y)
                            });
                            return {
                                criteria: U,
                                index: ++h,
                                value: y
                            }
                        });
                        return $I(v, function(y, w) {
                            return EC(y, w, l)
                        })
                    }

                    function aC(i, a) {
                        return Zg(i, a, function(l, h) {
                            return lf(i, h)
                        })
                    }

                    function Zg(i, a, l) {
                        for (var h = -1, v = a.length, y = {}; ++h < v;) {
                            var w = a[h],
                                L = Bi(i, w);
                            l(L, w) && ka(y, ti(w, i), L)
                        }
                        return y
                    }

                    function oC(i) {
                        return function(a) {
                            return Bi(a, i)
                        }
                    }

                    function ku(i, a, l, h) {
                        var v = h ? LI : Es,
                            y = -1,
                            w = a.length,
                            L = i;
                        for (i === a && (a = An(a)), l && (L = Rt(i, Dn(l))); ++y < w;)
                            for (var U = 0, te = a[y], ne = l ? l(te) : te;
                                (U = v(L, ne, U, h)) > -1;) L !== i && Yo.call(L, U, 1), Yo.call(i, U, 1);
                        return i
                    }

                    function em(i, a) {
                        for (var l = i ? a.length : 0, h = l - 1; l--;) {
                            var v = a[l];
                            if (l == h || v !== y) {
                                var y = v;
                                kr(v) ? Yo.call(i, v, 1) : Fu(i, v)
                            }
                        }
                        return i
                    }

                    function Mu(i, a) {
                        return i + Xo(Dg() * (a - i + 1))
                    }

                    function cC(i, a, l, h) {
                        for (var v = -1, y = Kt(zo((a - i) / (l || 1)), 0), w = K(y); y--;) w[h ? y : ++v] = i, i += l;
                        return w
                    }

                    function xu(i, a) {
                        var l = "";
                        if (!i || a < 1 || a > me) return l;
                        do a % 2 && (l += i), a = Xo(a / 2), a && (i += i); while (a);
                        return l
                    }

                    function qe(i, a) {
                        return ef(Nm(i, a, Cn), i + "")
                    }

                    function lC(i) {
                        return xg(Ns(i))
                    }

                    function uC(i, a) {
                        var l = Ns(i);
                        return hc(l, Fi(a, 0, l.length))
                    }

                    function ka(i, a, l, h) {
                        if (!$t(i)) return i;
                        a = ti(a, i);
                        for (var v = -1, y = a.length, w = y - 1, L = i; L != null && ++v < y;) {
                            var U = vr(a[v]),
                                te = l;
                            if (U === "__proto__" || U === "constructor" || U === "prototype") return i;
                            if (v != w) {
                                var ne = L[U];
                                te = h ? h(ne, U, L) : n, te === n && (te = $t(ne) ? ne : kr(a[v + 1]) ? [] : {})
                            }
                            La(L, U, te), L = L[U]
                        }
                        return i
                    }
                    var tm = Jo ? function(i, a) {
                            return Jo.set(i, a), i
                        } : Cn,
                        fC = qo ? function(i, a) {
                            return qo(i, "toString", {
                                configurable: !0,
                                enumerable: !1,
                                value: ff(a),
                                writable: !0
                            })
                        } : Cn;

                    function dC(i) {
                        return hc(Ns(i))
                    }

                    function Jn(i, a, l) {
                        var h = -1,
                            v = i.length;
                        a < 0 && (a = -a > v ? 0 : v + a), l = l > v ? v : l, l < 0 && (l += v), v = a > l ? 0 : l - a >>> 0, a >>>= 0;
                        for (var y = K(v); ++h < v;) y[h] = i[h + a];
                        return y
                    }

                    function hC(i, a) {
                        var l;
                        return Zr(i, function(h, v, y) {
                            return l = a(h, v, y), !l
                        }), !!l
                    }

                    function ic(i, a, l) {
                        var h = 0,
                            v = i == null ? h : i.length;
                        if (typeof a == "number" && a === a && v <= At) {
                            for (; h < v;) {
                                var y = h + v >>> 1,
                                    w = i[y];
                                w !== null && !Mn(w) && (l ? w <= a : w < a) ? h = y + 1 : v = y
                            }
                            return v
                        }
                        return Uu(i, a, Cn, l)
                    }

                    function Uu(i, a, l, h) {
                        var v = 0,
                            y = i == null ? 0 : i.length;
                        if (y === 0) return 0;
                        a = l(a);
                        for (var w = a !== a, L = a === null, U = Mn(a), te = a === n; v < y;) {
                            var ne = Xo((v + y) / 2),
                                oe = l(i[ne]),
                                ge = oe !== n,
                                Ae = oe === null,
                                Pe = oe === oe,
                                Ke = Mn(oe);
                            if (w) var De = h || Pe;
                            else te ? De = Pe && (h || ge) : L ? De = Pe && ge && (h || !Ae) : U ? De = Pe && ge && !Ae && (h || !Ke) : Ae || Ke ? De = !1 : De = h ? oe <= a : oe < a;
                            De ? v = ne + 1 : y = ne
                        }
                        return un(y, Je)
                    }

                    function nm(i, a) {
                        for (var l = -1, h = i.length, v = 0, y = []; ++l < h;) {
                            var w = i[l],
                                L = a ? a(w) : w;
                            if (!l || !ar(L, U)) {
                                var U = L;
                                y[v++] = w === 0 ? 0 : w
                            }
                        }
                        return y
                    }

                    function rm(i) {
                        return typeof i == "number" ? i : Mn(i) ? Me : +i
                    }

                    function kn(i) {
                        if (typeof i == "string") return i;
                        if (We(i)) return Rt(i, kn) + "";
                        if (Mn(i)) return kg ? kg.call(i) : "";
                        var a = i + "";
                        return a == "0" && 1 / i == -Ee ? "-0" : a
                    }

                    function ei(i, a, l) {
                        var h = -1,
                            v = xo,
                            y = i.length,
                            w = !0,
                            L = [],
                            U = L;
                        if (l) w = !1, v = hu;
                        else if (y >= s) {
                            var te = a ? null : OC(i);
                            if (te) return Fo(te);
                            w = !1, v = Aa, U = new Ui
                        } else U = a ? [] : L;
                        e: for (; ++h < y;) {
                            var ne = i[h],
                                oe = a ? a(ne) : ne;
                            if (ne = l || ne !== 0 ? ne : 0, w && oe === oe) {
                                for (var ge = U.length; ge--;)
                                    if (U[ge] === oe) continue e;
                                a && U.push(oe), L.push(ne)
                            } else v(U, oe, l) || (U !== L && U.push(oe), L.push(ne))
                        }
                        return L
                    }

                    function Fu(i, a) {
                        return a = ti(a, i), i = Lm(i, a), i == null || delete i[vr(Qn(a))]
                    }

                    function im(i, a, l, h) {
                        return ka(i, a, l(Bi(i, a)), h)
                    }

                    function sc(i, a, l, h) {
                        for (var v = i.length, y = h ? v : -1;
                            (h ? y-- : ++y < v) && a(i[y], y, i););
                        return l ? Jn(i, h ? 0 : y, h ? y + 1 : v) : Jn(i, h ? y + 1 : 0, h ? v : y)
                    }

                    function sm(i, a) {
                        var l = i;
                        return l instanceof Qe && (l = l.value()), pu(a, function(h, v) {
                            return v.func.apply(v.thisArg, Xr([h], v.args))
                        }, l)
                    }

                    function Bu(i, a, l) {
                        var h = i.length;
                        if (h < 2) return h ? ei(i[0]) : [];
                        for (var v = -1, y = K(h); ++v < h;)
                            for (var w = i[v], L = -1; ++L < h;) L != v && (y[v] = $a(y[v] || w, i[L], a, l));
                        return ei(rn(y, 1), a, l)
                    }

                    function am(i, a, l) {
                        for (var h = -1, v = i.length, y = a.length, w = {}; ++h < v;) {
                            var L = h < y ? a[h] : n;
                            l(w, i[h], L)
                        }
                        return w
                    }

                    function Gu(i) {
                        return Mt(i) ? i : []
                    }

                    function Wu(i) {
                        return typeof i == "function" ? i : Cn
                    }

                    function ti(i, a) {
                        return We(i) ? i : Ju(i, a) ? [i] : km(lt(i))
                    }
                    var pC = qe;

                    function ni(i, a, l) {
                        var h = i.length;
                        return l = l === n ? h : l, !a && l >= h ? i : Jn(i, a, l)
                    }
                    var om = tw || function(i) {
                        return nn.clearTimeout(i)
                    };

                    function cm(i, a) {
                        if (a) return i.slice();
                        var l = i.length,
                            h = Rg ? Rg(l) : new i.constructor(l);
                        return i.copy(h), h
                    }

                    function ju(i) {
                        var a = new i.constructor(i.byteLength);
                        return new Vo(a).set(new Vo(i)), a
                    }

                    function gC(i, a) {
                        var l = a ? ju(i.buffer) : i.buffer;
                        return new i.constructor(l, i.byteOffset, i.byteLength)
                    }

                    function mC(i) {
                        var a = new i.constructor(i.source, Vp.exec(i));
                        return a.lastIndex = i.lastIndex, a
                    }

                    function vC(i) {
                        return Na ? Et(Na.call(i)) : {}
                    }

                    function lm(i, a) {
                        var l = a ? ju(i.buffer) : i.buffer;
                        return new i.constructor(l, i.byteOffset, i.length)
                    }

                    function um(i, a) {
                        if (i !== a) {
                            var l = i !== n,
                                h = i === null,
                                v = i === i,
                                y = Mn(i),
                                w = a !== n,
                                L = a === null,
                                U = a === a,
                                te = Mn(a);
                            if (!L && !te && !y && i > a || y && w && U && !L && !te || h && w && U || !l && U || !v) return 1;
                            if (!h && !y && !te && i < a || te && l && v && !h && !y || L && l && v || !w && v || !U) return -1
                        }
                        return 0
                    }

                    function EC(i, a, l) {
                        for (var h = -1, v = i.criteria, y = a.criteria, w = v.length, L = l.length; ++h < w;) {
                            var U = um(v[h], y[h]);
                            if (U) {
                                if (h >= L) return U;
                                var te = l[h];
                                return U * (te == "desc" ? -1 : 1)
                            }
                        }
                        return i.index - a.index
                    }

                    function fm(i, a, l, h) {
                        for (var v = -1, y = i.length, w = l.length, L = -1, U = a.length, te = Kt(y - w, 0), ne = K(U + te), oe = !h; ++L < U;) ne[L] = a[L];
                        for (; ++v < w;)(oe || v < y) && (ne[l[v]] = i[v]);
                        for (; te--;) ne[L++] = i[v++];
                        return ne
                    }

                    function dm(i, a, l, h) {
                        for (var v = -1, y = i.length, w = -1, L = l.length, U = -1, te = a.length, ne = Kt(y - L, 0), oe = K(ne + te), ge = !h; ++v < ne;) oe[v] = i[v];
                        for (var Ae = v; ++U < te;) oe[Ae + U] = a[U];
                        for (; ++w < L;)(ge || v < y) && (oe[Ae + l[w]] = i[v++]);
                        return oe
                    }

                    function An(i, a) {
                        var l = -1,
                            h = i.length;
                        for (a || (a = K(h)); ++l < h;) a[l] = i[l];
                        return a
                    }

                    function mr(i, a, l, h) {
                        var v = !l;
                        l || (l = {});
                        for (var y = -1, w = a.length; ++y < w;) {
                            var L = a[y],
                                U = h ? h(l[L], i[L], L, l, i) : n;
                            U === n && (U = i[L]), v ? $r(l, L, U) : La(l, L, U)
                        }
                        return l
                    }

                    function _C(i, a) {
                        return mr(i, Xu(i), a)
                    }

                    function yC(i, a) {
                        return mr(i, Am(i), a)
                    }

                    function ac(i, a) {
                        return function(l, h) {
                            var v = We(l) ? AI : Ww,
                                y = a ? a() : {};
                            return v(l, i, $e(h, 2), y)
                        }
                    }

                    function Is(i) {
                        return qe(function(a, l) {
                            var h = -1,
                                v = l.length,
                                y = v > 1 ? l[v - 1] : n,
                                w = v > 2 ? l[2] : n;
                            for (y = i.length > 3 && typeof y == "function" ? (v--, y) : n, w && yn(l[0], l[1], w) && (y = v < 3 ? n : y, v = 1), a = Et(a); ++h < v;) {
                                var L = l[h];
                                L && i(a, L, h, y)
                            }
                            return a
                        })
                    }

                    function hm(i, a) {
                        return function(l, h) {
                            if (l == null) return l;
                            if (!In(l)) return i(l, h);
                            for (var v = l.length, y = a ? v : -1, w = Et(l);
                                (a ? y-- : ++y < v) && h(w[y], y, w) !== !1;);
                            return l
                        }
                    }

                    function pm(i) {
                        return function(a, l, h) {
                            for (var v = -1, y = Et(a), w = h(a), L = w.length; L--;) {
                                var U = w[i ? L : ++v];
                                if (l(y[U], U, y) === !1) break
                            }
                            return a
                        }
                    }

                    function bC(i, a, l) {
                        var h = a & W,
                            v = Ma(i);

                        function y() {
                            var w = this && this !== nn && this instanceof y ? v : i;
                            return w.apply(h ? l : this, arguments)
                        }
                        return y
                    }

                    function gm(i) {
                        return function(a) {
                            a = lt(a);
                            var l = _s(a) ? ir(a) : n,
                                h = l ? l[0] : a.charAt(0),
                                v = l ? ni(l, 1).join("") : a.slice(1);
                            return h[i]() + v
                        }
                    }

                    function ws(i) {
                        return function(a) {
                            return pu(hv(dv(a).replace(fI, "")), i, "")
                        }
                    }

                    function Ma(i) {
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
                            var l = As(i.prototype),
                                h = i.apply(l, a);
                            return $t(h) ? h : l
                        }
                    }

                    function TC(i, a, l) {
                        var h = Ma(i);

                        function v() {
                            for (var y = arguments.length, w = K(y), L = y, U = Cs(v); L--;) w[L] = arguments[L];
                            var te = y < 3 && w[0] !== U && w[y - 1] !== U ? [] : Jr(w, U);
                            if (y -= te.length, y < l) return ym(i, a, oc, v.placeholder, n, w, te, n, n, l - y);
                            var ne = this && this !== nn && this instanceof v ? h : i;
                            return Pn(ne, this, w)
                        }
                        return v
                    }

                    function mm(i) {
                        return function(a, l, h) {
                            var v = Et(a);
                            if (!In(a)) {
                                var y = $e(l, 3);
                                a = Jt(a), l = function(L) {
                                    return y(v[L], L, v)
                                }
                            }
                            var w = i(a, l, h);
                            return w > -1 ? v[y ? a[w] : w] : n
                        }
                    }

                    function vm(i) {
                        return Dr(function(a) {
                            var l = a.length,
                                h = l,
                                v = zn.prototype.thru;
                            for (i && a.reverse(); h--;) {
                                var y = a[h];
                                if (typeof y != "function") throw new qn(c);
                                if (v && !w && fc(y) == "wrapper") var w = new zn([], !0)
                            }
                            for (h = w ? h : l; ++h < l;) {
                                y = a[h];
                                var L = fc(y),
                                    U = L == "wrapper" ? qu(y) : n;
                                U && Qu(U[0]) && U[1] == (ce | q | G | le) && !U[4].length && U[9] == 1 ? w = w[fc(U[0])].apply(w, U[3]) : w = y.length == 1 && Qu(y) ? w[L]() : w.thru(y)
                            }
                            return function() {
                                var te = arguments,
                                    ne = te[0];
                                if (w && te.length == 1 && We(ne)) return w.plant(ne).value();
                                for (var oe = 0, ge = l ? a[oe].apply(this, te) : ne; ++oe < l;) ge = a[oe].call(this, ge);
                                return ge
                            }
                        })
                    }

                    function oc(i, a, l, h, v, y, w, L, U, te) {
                        var ne = a & ce,
                            oe = a & W,
                            ge = a & C,
                            Ae = a & (q | j),
                            Pe = a & ue,
                            Ke = ge ? n : Ma(i);

                        function De() {
                            for (var Xe = arguments.length, Ze = K(Xe), xn = Xe; xn--;) Ze[xn] = arguments[xn];
                            if (Ae) var bn = Cs(De),
                                Un = DI(Ze, bn);
                            if (h && (Ze = fm(Ze, h, v, Ae)), y && (Ze = dm(Ze, y, w, Ae)), Xe -= Un, Ae && Xe < te) {
                                var xt = Jr(Ze, bn);
                                return ym(i, a, oc, De.placeholder, l, Ze, xt, L, U, te - Xe)
                            }
                            var or = oe ? l : this,
                                Ur = ge ? or[i] : i;
                            return Xe = Ze.length, L ? Ze = WC(Ze, L) : Pe && Xe > 1 && Ze.reverse(), ne && U < Xe && (Ze.length = U), this && this !== nn && this instanceof De && (Ur = Ke || Ma(Ur)), Ur.apply(or, Ze)
                        }
                        return De
                    }

                    function Em(i, a) {
                        return function(l, h) {
                            return Xw(l, i, a(h), {})
                        }
                    }

                    function cc(i, a) {
                        return function(l, h) {
                            var v;
                            if (l === n && h === n) return a;
                            if (l !== n && (v = l), h !== n) {
                                if (v === n) return h;
                                typeof l == "string" || typeof h == "string" ? (l = kn(l), h = kn(h)) : (l = rm(l), h = rm(h)), v = i(l, h)
                            }
                            return v
                        }
                    }

                    function Hu(i) {
                        return Dr(function(a) {
                            return a = Rt(a, Dn($e())), qe(function(l) {
                                var h = this;
                                return i(a, function(v) {
                                    return Pn(v, h, l)
                                })
                            })
                        })
                    }

                    function lc(i, a) {
                        a = a === n ? " " : kn(a);
                        var l = a.length;
                        if (l < 2) return l ? xu(a, i) : a;
                        var h = xu(a, zo(i / ys(a)));
                        return _s(a) ? ni(ir(h), 0, i).join("") : h.slice(0, i)
                    }

                    function SC(i, a, l, h) {
                        var v = a & W,
                            y = Ma(i);

                        function w() {
                            for (var L = -1, U = arguments.length, te = -1, ne = h.length, oe = K(ne + U), ge = this && this !== nn && this instanceof w ? y : i; ++te < ne;) oe[te] = h[te];
                            for (; U--;) oe[te++] = arguments[++L];
                            return Pn(ge, v ? l : this, oe)
                        }
                        return w
                    }

                    function _m(i) {
                        return function(a, l, h) {
                            return h && typeof h != "number" && yn(a, l, h) && (l = h = n), a = xr(a), l === n ? (l = a, a = 0) : l = xr(l), h = h === n ? a < l ? 1 : -1 : xr(h), cC(a, l, h, i)
                        }
                    }

                    function uc(i) {
                        return function(a, l) {
                            return typeof a == "string" && typeof l == "string" || (a = Zn(a), l = Zn(l)), i(a, l)
                        }
                    }

                    function ym(i, a, l, h, v, y, w, L, U, te) {
                        var ne = a & q,
                            oe = ne ? w : n,
                            ge = ne ? n : w,
                            Ae = ne ? y : n,
                            Pe = ne ? n : y;
                        a |= ne ? G : se, a &= ~(ne ? se : G), a & V || (a &= ~(W | C));
                        var Ke = [i, a, v, Ae, oe, Pe, ge, L, U, te],
                            De = l.apply(n, Ke);
                        return Qu(i) && $m(De, Ke), De.placeholder = h, Pm(De, i, a)
                    }

                    function Vu(i) {
                        var a = Vt[i];
                        return function(l, h) {
                            if (l = Zn(l), h = h == null ? 0 : un(He(h), 292), h && Pg(l)) {
                                var v = (lt(l) + "e").split("e"),
                                    y = a(v[0] + "e" + (+v[1] + h));
                                return v = (lt(y) + "e").split("e"), +(v[0] + "e" + (+v[1] - h))
                            }
                            return a(l)
                        }
                    }
                    var OC = Ss && 1 / Fo(new Ss([, -0]))[1] == Ee ? function(i) {
                        return new Ss(i)
                    } : pf;

                    function bm(i) {
                        return function(a) {
                            var l = fn(a);
                            return l == p ? bu(a) : l == X ? GI(a) : PI(a, i(a))
                        }
                    }

                    function Pr(i, a, l, h, v, y, w, L) {
                        var U = a & C;
                        if (!U && typeof i != "function") throw new qn(c);
                        var te = h ? h.length : 0;
                        if (te || (a &= ~(G | se), h = v = n), w = w === n ? w : Kt(He(w), 0), L = L === n ? L : He(L), te -= v ? v.length : 0, a & se) {
                            var ne = h,
                                oe = v;
                            h = v = n
                        }
                        var ge = U ? n : qu(i),
                            Ae = [i, a, l, h, v, ne, oe, y, w, L];
                        if (ge && FC(Ae, ge), i = Ae[0], a = Ae[1], l = Ae[2], h = Ae[3], v = Ae[4], L = Ae[9] = Ae[9] === n ? U ? 0 : i.length : Kt(Ae[9] - te, 0), !L && a & (q | j) && (a &= ~(q | j)), !a || a == W) var Pe = bC(i, a, l);
                        else a == q || a == j ? Pe = TC(i, a, L) : (a == G || a == (W | G)) && !v.length ? Pe = SC(i, a, l, h) : Pe = oc.apply(n, Ae);
                        var Ke = ge ? tm : $m;
                        return Pm(Ke(Pe, Ae), i, a)
                    }

                    function Tm(i, a, l, h) {
                        return i === n || ar(i, Ts[l]) && !pt.call(h, l) ? a : i
                    }

                    function Sm(i, a, l, h, v, y) {
                        return $t(i) && $t(a) && (y.set(a, i), rc(i, a, n, Sm, y), y.delete(a)), i
                    }

                    function AC(i) {
                        return Fa(i) ? n : i
                    }

                    function Om(i, a, l, h, v, y) {
                        var w = l & R,
                            L = i.length,
                            U = a.length;
                        if (L != U && !(w && U > L)) return !1;
                        var te = y.get(i),
                            ne = y.get(a);
                        if (te && ne) return te == a && ne == i;
                        var oe = -1,
                            ge = !0,
                            Ae = l & M ? new Ui : n;
                        for (y.set(i, a), y.set(a, i); ++oe < L;) {
                            var Pe = i[oe],
                                Ke = a[oe];
                            if (h) var De = w ? h(Ke, Pe, oe, a, i, y) : h(Pe, Ke, oe, i, a, y);
                            if (De !== n) {
                                if (De) continue;
                                ge = !1;
                                break
                            }
                            if (Ae) {
                                if (!gu(a, function(Xe, Ze) {
                                        if (!Aa(Ae, Ze) && (Pe === Xe || v(Pe, Xe, l, h, y))) return Ae.push(Ze)
                                    })) {
                                    ge = !1;
                                    break
                                }
                            } else if (!(Pe === Ke || v(Pe, Ke, l, h, y))) {
                                ge = !1;
                                break
                            }
                        }
                        return y.delete(i), y.delete(a), ge
                    }

                    function IC(i, a, l, h, v, y, w) {
                        switch (l) {
                            case A:
                                if (i.byteLength != a.byteLength || i.byteOffset != a.byteOffset) return !1;
                                i = i.buffer, a = a.buffer;
                            case xe:
                                return !(i.byteLength != a.byteLength || !y(new Vo(i), new Vo(a)));
                            case vt:
                            case st:
                            case O:
                                return ar(+i, +a);
                            case kt:
                                return i.name == a.name && i.message == a.message;
                            case Q:
                            case N:
                                return i == a + "";
                            case p:
                                var L = bu;
                            case X:
                                var U = h & R;
                                if (L || (L = Fo), i.size != a.size && !U) return !1;
                                var te = w.get(i);
                                if (te) return te == a;
                                h |= M, w.set(i, a);
                                var ne = Om(L(i), L(a), h, v, y, w);
                                return w.delete(i), ne;
                            case H:
                                if (Na) return Na.call(i) == Na.call(a)
                        }
                        return !1
                    }

                    function wC(i, a, l, h, v, y) {
                        var w = l & R,
                            L = Ku(i),
                            U = L.length,
                            te = Ku(a),
                            ne = te.length;
                        if (U != ne && !w) return !1;
                        for (var oe = U; oe--;) {
                            var ge = L[oe];
                            if (!(w ? ge in a : pt.call(a, ge))) return !1
                        }
                        var Ae = y.get(i),
                            Pe = y.get(a);
                        if (Ae && Pe) return Ae == a && Pe == i;
                        var Ke = !0;
                        y.set(i, a), y.set(a, i);
                        for (var De = w; ++oe < U;) {
                            ge = L[oe];
                            var Xe = i[ge],
                                Ze = a[ge];
                            if (h) var xn = w ? h(Ze, Xe, ge, a, i, y) : h(Xe, Ze, ge, i, a, y);
                            if (!(xn === n ? Xe === Ze || v(Xe, Ze, l, h, y) : xn)) {
                                Ke = !1;
                                break
                            }
                            De || (De = ge == "constructor")
                        }
                        if (Ke && !De) {
                            var bn = i.constructor,
                                Un = a.constructor;
                            bn != Un && "constructor" in i && "constructor" in a && !(typeof bn == "function" && bn instanceof bn && typeof Un == "function" && Un instanceof Un) && (Ke = !1)
                        }
                        return y.delete(i), y.delete(a), Ke
                    }

                    function Dr(i) {
                        return ef(Nm(i, n, Fm), i + "")
                    }

                    function Ku(i) {
                        return Hg(i, Jt, Xu)
                    }

                    function Yu(i) {
                        return Hg(i, wn, Am)
                    }
                    var qu = Jo ? function(i) {
                        return Jo.get(i)
                    } : pf;

                    function fc(i) {
                        for (var a = i.name + "", l = Os[a], h = pt.call(Os, a) ? l.length : 0; h--;) {
                            var v = l[h],
                                y = v.func;
                            if (y == null || y == i) return v.name
                        }
                        return a
                    }

                    function Cs(i) {
                        var a = pt.call(E, "placeholder") ? E : i;
                        return a.placeholder
                    }

                    function $e() {
                        var i = E.iteratee || df;
                        return i = i === df ? Yg : i, arguments.length ? i(arguments[0], arguments[1]) : i
                    }

                    function dc(i, a) {
                        var l = i.__data__;
                        return kC(a) ? l[typeof a == "string" ? "string" : "hash"] : l.map
                    }

                    function zu(i) {
                        for (var a = Jt(i), l = a.length; l--;) {
                            var h = a[l],
                                v = i[h];
                            a[l] = [h, v, Cm(v)]
                        }
                        return a
                    }

                    function Gi(i, a) {
                        var l = UI(i, a);
                        return Kg(l) ? l : n
                    }

                    function CC(i) {
                        var a = pt.call(i, Mi),
                            l = i[Mi];
                        try {
                            i[Mi] = n;
                            var h = !0
                        } catch {}
                        var v = jo.call(i);
                        return h && (a ? i[Mi] = l : delete i[Mi]), v
                    }
                    var Xu = Su ? function(i) {
                            return i == null ? [] : (i = Et(i), zr(Su(i), function(a) {
                                return Lg.call(i, a)
                            }))
                        } : gf,
                        Am = Su ? function(i) {
                            for (var a = []; i;) Xr(a, Xu(i)), i = Ko(i);
                            return a
                        } : gf,
                        fn = _n;
                    (Ou && fn(new Ou(new ArrayBuffer(1))) != A || wa && fn(new wa) != p || Au && fn(Au.resolve()) != D || Ss && fn(new Ss) != X || Ca && fn(new Ca) != pe) && (fn = function(i) {
                        var a = _n(i),
                            l = a == B ? i.constructor : n,
                            h = l ? Wi(l) : "";
                        if (h) switch (h) {
                            case uw:
                                return A;
                            case fw:
                                return p;
                            case dw:
                                return D;
                            case hw:
                                return X;
                            case pw:
                                return pe
                        }
                        return a
                    });

                    function RC(i, a, l) {
                        for (var h = -1, v = l.length; ++h < v;) {
                            var y = l[h],
                                w = y.size;
                            switch (y.type) {
                                case "drop":
                                    i += w;
                                    break;
                                case "dropRight":
                                    a -= w;
                                    break;
                                case "take":
                                    a = un(a, i + w);
                                    break;
                                case "takeRight":
                                    i = Kt(i, a - w);
                                    break
                            }
                        }
                        return {
                            start: i,
                            end: a
                        }
                    }

                    function NC(i) {
                        var a = i.match(MA);
                        return a ? a[1].split(xA) : []
                    }

                    function Im(i, a, l) {
                        a = ti(a, i);
                        for (var h = -1, v = a.length, y = !1; ++h < v;) {
                            var w = vr(a[h]);
                            if (!(y = i != null && l(i, w))) break;
                            i = i[w]
                        }
                        return y || ++h != v ? y : (v = i == null ? 0 : i.length, !!v && _c(v) && kr(w, v) && (We(i) || ji(i)))
                    }

                    function LC(i) {
                        var a = i.length,
                            l = new i.constructor(a);
                        return a && typeof i[0] == "string" && pt.call(i, "index") && (l.index = i.index, l.input = i.input), l
                    }

                    function wm(i) {
                        return typeof i.constructor == "function" && !xa(i) ? As(Ko(i)) : {}
                    }

                    function $C(i, a, l) {
                        var h = i.constructor;
                        switch (a) {
                            case xe:
                                return ju(i);
                            case vt:
                            case st:
                                return new h(+i);
                            case A:
                                return gC(i, l);
                            case T:
                            case $:
                            case S:
                            case P:
                            case ee:
                            case ie:
                            case _e:
                            case Te:
                            case ht:
                                return lm(i, l);
                            case p:
                                return new h;
                            case O:
                            case N:
                                return new h(i);
                            case Q:
                                return mC(i);
                            case X:
                                return new h;
                            case H:
                                return vC(i)
                        }
                    }

                    function PC(i, a) {
                        var l = a.length;
                        if (!l) return i;
                        var h = l - 1;
                        return a[h] = (l > 1 ? "& " : "") + a[h], a = a.join(l > 2 ? ", " : " "), i.replace(kA, `{
/* [wrapped with ` + a + `] */
`)
                    }

                    function DC(i) {
                        return We(i) || ji(i) || !!($g && i && i[$g])
                    }

                    function kr(i, a) {
                        var l = typeof i;
                        return a = a == null ? me : a, !!a && (l == "number" || l != "symbol" && KA.test(i)) && i > -1 && i % 1 == 0 && i < a
                    }

                    function yn(i, a, l) {
                        if (!$t(l)) return !1;
                        var h = typeof a;
                        return (h == "number" ? In(l) && kr(a, l.length) : h == "string" && a in l) ? ar(l[a], i) : !1
                    }

                    function Ju(i, a) {
                        if (We(i)) return !1;
                        var l = typeof i;
                        return l == "number" || l == "symbol" || l == "boolean" || i == null || Mn(i) ? !0 : LA.test(i) || !NA.test(i) || a != null && i in Et(a)
                    }

                    function kC(i) {
                        var a = typeof i;
                        return a == "string" || a == "number" || a == "symbol" || a == "boolean" ? i !== "__proto__" : i === null
                    }

                    function Qu(i) {
                        var a = fc(i),
                            l = E[a];
                        if (typeof l != "function" || !(a in Qe.prototype)) return !1;
                        if (i === l) return !0;
                        var h = qu(l);
                        return !!h && i === h[0]
                    }

                    function MC(i) {
                        return !!Cg && Cg in i
                    }
                    var xC = Go ? Mr : mf;

                    function xa(i) {
                        var a = i && i.constructor,
                            l = typeof a == "function" && a.prototype || Ts;
                        return i === l
                    }

                    function Cm(i) {
                        return i === i && !$t(i)
                    }

                    function Rm(i, a) {
                        return function(l) {
                            return l == null ? !1 : l[i] === a && (a !== n || i in Et(l))
                        }
                    }

                    function UC(i) {
                        var a = vc(i, function(h) {
                                return l.size === d && l.clear(), h
                            }),
                            l = a.cache;
                        return a
                    }

                    function FC(i, a) {
                        var l = i[1],
                            h = a[1],
                            v = l | h,
                            y = v < (W | C | ce),
                            w = h == ce && l == q || h == ce && l == le && i[7].length <= a[8] || h == (ce | le) && a[7].length <= a[8] && l == q;
                        if (!(y || w)) return i;
                        h & W && (i[2] = a[2], v |= l & W ? 0 : V);
                        var L = a[3];
                        if (L) {
                            var U = i[3];
                            i[3] = U ? fm(U, L, a[4]) : L, i[4] = U ? Jr(i[3], g) : a[4]
                        }
                        return L = a[5], L && (U = i[5], i[5] = U ? dm(U, L, a[6]) : L, i[6] = U ? Jr(i[5], g) : a[6]), L = a[7], L && (i[7] = L), h & ce && (i[8] = i[8] == null ? a[8] : un(i[8], a[8])), i[9] == null && (i[9] = a[9]), i[0] = a[0], i[1] = v, i
                    }

                    function BC(i) {
                        var a = [];
                        if (i != null)
                            for (var l in Et(i)) a.push(l);
                        return a
                    }

                    function GC(i) {
                        return jo.call(i)
                    }

                    function Nm(i, a, l) {
                        return a = Kt(a === n ? i.length - 1 : a, 0),
                            function() {
                                for (var h = arguments, v = -1, y = Kt(h.length - a, 0), w = K(y); ++v < y;) w[v] = h[a + v];
                                v = -1;
                                for (var L = K(a + 1); ++v < a;) L[v] = h[v];
                                return L[a] = l(w), Pn(i, this, L)
                            }
                    }

                    function Lm(i, a) {
                        return a.length < 2 ? i : Bi(i, Jn(a, 0, -1))
                    }

                    function WC(i, a) {
                        for (var l = i.length, h = un(a.length, l), v = An(i); h--;) {
                            var y = a[h];
                            i[h] = kr(y, l) ? v[y] : n
                        }
                        return i
                    }

                    function Zu(i, a) {
                        if (!(a === "constructor" && typeof i[a] == "function") && a != "__proto__") return i[a]
                    }
                    var $m = Dm(tm),
                        Ua = rw || function(i, a) {
                            return nn.setTimeout(i, a)
                        },
                        ef = Dm(fC);

                    function Pm(i, a, l) {
                        var h = a + "";
                        return ef(i, PC(h, jC(NC(h), l)))
                    }

                    function Dm(i) {
                        var a = 0,
                            l = 0;
                        return function() {
                            var h = ow(),
                                v = Oe - (h - l);
                            if (l = h, v > 0) {
                                if (++a >= fe) return arguments[0]
                            } else a = 0;
                            return i.apply(n, arguments)
                        }
                    }

                    function hc(i, a) {
                        var l = -1,
                            h = i.length,
                            v = h - 1;
                        for (a = a === n ? h : a; ++l < a;) {
                            var y = Mu(l, v),
                                w = i[y];
                            i[y] = i[l], i[l] = w
                        }
                        return i.length = a, i
                    }
                    var km = UC(function(i) {
                        var a = [];
                        return i.charCodeAt(0) === 46 && a.push(""), i.replace($A, function(l, h, v, y) {
                            a.push(v ? y.replace(BA, "$1") : h || l)
                        }), a
                    });

                    function vr(i) {
                        if (typeof i == "string" || Mn(i)) return i;
                        var a = i + "";
                        return a == "0" && 1 / i == -Ee ? "-0" : a
                    }

                    function Wi(i) {
                        if (i != null) {
                            try {
                                return Wo.call(i)
                            } catch {}
                            try {
                                return i + ""
                            } catch {}
                        }
                        return ""
                    }

                    function jC(i, a) {
                        return Yn(Ht, function(l) {
                            var h = "_." + l[0];
                            a & l[1] && !xo(i, h) && i.push(h)
                        }), i.sort()
                    }

                    function Mm(i) {
                        if (i instanceof Qe) return i.clone();
                        var a = new zn(i.__wrapped__, i.__chain__);
                        return a.__actions__ = An(i.__actions__), a.__index__ = i.__index__, a.__values__ = i.__values__, a
                    }

                    function HC(i, a, l) {
                        (l ? yn(i, a, l) : a === n) ? a = 1: a = Kt(He(a), 0);
                        var h = i == null ? 0 : i.length;
                        if (!h || a < 1) return [];
                        for (var v = 0, y = 0, w = K(zo(h / a)); v < h;) w[y++] = Jn(i, v, v += a);
                        return w
                    }

                    function VC(i) {
                        for (var a = -1, l = i == null ? 0 : i.length, h = 0, v = []; ++a < l;) {
                            var y = i[a];
                            y && (v[h++] = y)
                        }
                        return v
                    }

                    function KC() {
                        var i = arguments.length;
                        if (!i) return [];
                        for (var a = K(i - 1), l = arguments[0], h = i; h--;) a[h - 1] = arguments[h];
                        return Xr(We(l) ? An(l) : [l], rn(a, 1))
                    }
                    var YC = qe(function(i, a) {
                            return Mt(i) ? $a(i, rn(a, 1, Mt, !0)) : []
                        }),
                        qC = qe(function(i, a) {
                            var l = Qn(a);
                            return Mt(l) && (l = n), Mt(i) ? $a(i, rn(a, 1, Mt, !0), $e(l, 2)) : []
                        }),
                        zC = qe(function(i, a) {
                            var l = Qn(a);
                            return Mt(l) && (l = n), Mt(i) ? $a(i, rn(a, 1, Mt, !0), n, l) : []
                        });

                    function XC(i, a, l) {
                        var h = i == null ? 0 : i.length;
                        return h ? (a = l || a === n ? 1 : He(a), Jn(i, a < 0 ? 0 : a, h)) : []
                    }

                    function JC(i, a, l) {
                        var h = i == null ? 0 : i.length;
                        return h ? (a = l || a === n ? 1 : He(a), a = h - a, Jn(i, 0, a < 0 ? 0 : a)) : []
                    }

                    function QC(i, a) {
                        return i && i.length ? sc(i, $e(a, 3), !0, !0) : []
                    }

                    function ZC(i, a) {
                        return i && i.length ? sc(i, $e(a, 3), !0) : []
                    }

                    function eR(i, a, l, h) {
                        var v = i == null ? 0 : i.length;
                        return v ? (l && typeof l != "number" && yn(i, a, l) && (l = 0, h = v), Kw(i, a, l, h)) : []
                    }

                    function xm(i, a, l) {
                        var h = i == null ? 0 : i.length;
                        if (!h) return -1;
                        var v = l == null ? 0 : He(l);
                        return v < 0 && (v = Kt(h + v, 0)), Uo(i, $e(a, 3), v)
                    }

                    function Um(i, a, l) {
                        var h = i == null ? 0 : i.length;
                        if (!h) return -1;
                        var v = h - 1;
                        return l !== n && (v = He(l), v = l < 0 ? Kt(h + v, 0) : un(v, h - 1)), Uo(i, $e(a, 3), v, !0)
                    }

                    function Fm(i) {
                        var a = i == null ? 0 : i.length;
                        return a ? rn(i, 1) : []
                    }

                    function tR(i) {
                        var a = i == null ? 0 : i.length;
                        return a ? rn(i, Ee) : []
                    }

                    function nR(i, a) {
                        var l = i == null ? 0 : i.length;
                        return l ? (a = a === n ? 1 : He(a), rn(i, a)) : []
                    }

                    function rR(i) {
                        for (var a = -1, l = i == null ? 0 : i.length, h = {}; ++a < l;) {
                            var v = i[a];
                            h[v[0]] = v[1]
                        }
                        return h
                    }

                    function Bm(i) {
                        return i && i.length ? i[0] : n
                    }

                    function iR(i, a, l) {
                        var h = i == null ? 0 : i.length;
                        if (!h) return -1;
                        var v = l == null ? 0 : He(l);
                        return v < 0 && (v = Kt(h + v, 0)), Es(i, a, v)
                    }

                    function sR(i) {
                        var a = i == null ? 0 : i.length;
                        return a ? Jn(i, 0, -1) : []
                    }
                    var aR = qe(function(i) {
                            var a = Rt(i, Gu);
                            return a.length && a[0] === i[0] ? Lu(a) : []
                        }),
                        oR = qe(function(i) {
                            var a = Qn(i),
                                l = Rt(i, Gu);
                            return a === Qn(l) ? a = n : l.pop(), l.length && l[0] === i[0] ? Lu(l, $e(a, 2)) : []
                        }),
                        cR = qe(function(i) {
                            var a = Qn(i),
                                l = Rt(i, Gu);
                            return a = typeof a == "function" ? a : n, a && l.pop(), l.length && l[0] === i[0] ? Lu(l, n, a) : []
                        });

                    function lR(i, a) {
                        return i == null ? "" : sw.call(i, a)
                    }

                    function Qn(i) {
                        var a = i == null ? 0 : i.length;
                        return a ? i[a - 1] : n
                    }

                    function uR(i, a, l) {
                        var h = i == null ? 0 : i.length;
                        if (!h) return -1;
                        var v = h;
                        return l !== n && (v = He(l), v = v < 0 ? Kt(h + v, 0) : un(v, h - 1)), a === a ? jI(i, a, v) : Uo(i, yg, v, !0)
                    }

                    function fR(i, a) {
                        return i && i.length ? Jg(i, He(a)) : n
                    }
                    var dR = qe(Gm);

                    function Gm(i, a) {
                        return i && i.length && a && a.length ? ku(i, a) : i
                    }

                    function hR(i, a, l) {
                        return i && i.length && a && a.length ? ku(i, a, $e(l, 2)) : i
                    }

                    function pR(i, a, l) {
                        return i && i.length && a && a.length ? ku(i, a, n, l) : i
                    }
                    var gR = Dr(function(i, a) {
                        var l = i == null ? 0 : i.length,
                            h = wu(i, a);
                        return em(i, Rt(a, function(v) {
                            return kr(v, l) ? +v : v
                        }).sort(um)), h
                    });

                    function mR(i, a) {
                        var l = [];
                        if (!(i && i.length)) return l;
                        var h = -1,
                            v = [],
                            y = i.length;
                        for (a = $e(a, 3); ++h < y;) {
                            var w = i[h];
                            a(w, h, i) && (l.push(w), v.push(h))
                        }
                        return em(i, v), l
                    }

                    function tf(i) {
                        return i == null ? i : lw.call(i)
                    }

                    function vR(i, a, l) {
                        var h = i == null ? 0 : i.length;
                        return h ? (l && typeof l != "number" && yn(i, a, l) ? (a = 0, l = h) : (a = a == null ? 0 : He(a), l = l === n ? h : He(l)), Jn(i, a, l)) : []
                    }

                    function ER(i, a) {
                        return ic(i, a)
                    }

                    function _R(i, a, l) {
                        return Uu(i, a, $e(l, 2))
                    }

                    function yR(i, a) {
                        var l = i == null ? 0 : i.length;
                        if (l) {
                            var h = ic(i, a);
                            if (h < l && ar(i[h], a)) return h
                        }
                        return -1
                    }

                    function bR(i, a) {
                        return ic(i, a, !0)
                    }

                    function TR(i, a, l) {
                        return Uu(i, a, $e(l, 2), !0)
                    }

                    function SR(i, a) {
                        var l = i == null ? 0 : i.length;
                        if (l) {
                            var h = ic(i, a, !0) - 1;
                            if (ar(i[h], a)) return h
                        }
                        return -1
                    }

                    function OR(i) {
                        return i && i.length ? nm(i) : []
                    }

                    function AR(i, a) {
                        return i && i.length ? nm(i, $e(a, 2)) : []
                    }

                    function IR(i) {
                        var a = i == null ? 0 : i.length;
                        return a ? Jn(i, 1, a) : []
                    }

                    function wR(i, a, l) {
                        return i && i.length ? (a = l || a === n ? 1 : He(a), Jn(i, 0, a < 0 ? 0 : a)) : []
                    }

                    function CR(i, a, l) {
                        var h = i == null ? 0 : i.length;
                        return h ? (a = l || a === n ? 1 : He(a), a = h - a, Jn(i, a < 0 ? 0 : a, h)) : []
                    }

                    function RR(i, a) {
                        return i && i.length ? sc(i, $e(a, 3), !1, !0) : []
                    }

                    function NR(i, a) {
                        return i && i.length ? sc(i, $e(a, 3)) : []
                    }
                    var LR = qe(function(i) {
                            return ei(rn(i, 1, Mt, !0))
                        }),
                        $R = qe(function(i) {
                            var a = Qn(i);
                            return Mt(a) && (a = n), ei(rn(i, 1, Mt, !0), $e(a, 2))
                        }),
                        PR = qe(function(i) {
                            var a = Qn(i);
                            return a = typeof a == "function" ? a : n, ei(rn(i, 1, Mt, !0), n, a)
                        });

                    function DR(i) {
                        return i && i.length ? ei(i) : []
                    }

                    function kR(i, a) {
                        return i && i.length ? ei(i, $e(a, 2)) : []
                    }

                    function MR(i, a) {
                        return a = typeof a == "function" ? a : n, i && i.length ? ei(i, n, a) : []
                    }

                    function nf(i) {
                        if (!(i && i.length)) return [];
                        var a = 0;
                        return i = zr(i, function(l) {
                            if (Mt(l)) return a = Kt(l.length, a), !0
                        }), _u(a, function(l) {
                            return Rt(i, mu(l))
                        })
                    }

                    function Wm(i, a) {
                        if (!(i && i.length)) return [];
                        var l = nf(i);
                        return a == null ? l : Rt(l, function(h) {
                            return Pn(a, n, h)
                        })
                    }
                    var xR = qe(function(i, a) {
                            return Mt(i) ? $a(i, a) : []
                        }),
                        UR = qe(function(i) {
                            return Bu(zr(i, Mt))
                        }),
                        FR = qe(function(i) {
                            var a = Qn(i);
                            return Mt(a) && (a = n), Bu(zr(i, Mt), $e(a, 2))
                        }),
                        BR = qe(function(i) {
                            var a = Qn(i);
                            return a = typeof a == "function" ? a : n, Bu(zr(i, Mt), n, a)
                        }),
                        GR = qe(nf);

                    function WR(i, a) {
                        return am(i || [], a || [], La)
                    }

                    function jR(i, a) {
                        return am(i || [], a || [], ka)
                    }
                    var HR = qe(function(i) {
                        var a = i.length,
                            l = a > 1 ? i[a - 1] : n;
                        return l = typeof l == "function" ? (i.pop(), l) : n, Wm(i, l)
                    });

                    function jm(i) {
                        var a = E(i);
                        return a.__chain__ = !0, a
                    }

                    function VR(i, a) {
                        return a(i), i
                    }

                    function pc(i, a) {
                        return a(i)
                    }
                    var KR = Dr(function(i) {
                        var a = i.length,
                            l = a ? i[0] : 0,
                            h = this.__wrapped__,
                            v = function(y) {
                                return wu(y, i)
                            };
                        return a > 1 || this.__actions__.length || !(h instanceof Qe) || !kr(l) ? this.thru(v) : (h = h.slice(l, +l + (a ? 1 : 0)), h.__actions__.push({
                            func: pc,
                            args: [v],
                            thisArg: n
                        }), new zn(h, this.__chain__).thru(function(y) {
                            return a && !y.length && y.push(n), y
                        }))
                    });

                    function YR() {
                        return jm(this)
                    }

                    function qR() {
                        return new zn(this.value(), this.__chain__)
                    }

                    function zR() {
                        this.__values__ === n && (this.__values__ = rv(this.value()));
                        var i = this.__index__ >= this.__values__.length,
                            a = i ? n : this.__values__[this.__index__++];
                        return {
                            done: i,
                            value: a
                        }
                    }

                    function XR() {
                        return this
                    }

                    function JR(i) {
                        for (var a, l = this; l instanceof Zo;) {
                            var h = Mm(l);
                            h.__index__ = 0, h.__values__ = n, a ? v.__wrapped__ = h : a = h;
                            var v = h;
                            l = l.__wrapped__
                        }
                        return v.__wrapped__ = i, a
                    }

                    function QR() {
                        var i = this.__wrapped__;
                        if (i instanceof Qe) {
                            var a = i;
                            return this.__actions__.length && (a = new Qe(this)), a = a.reverse(), a.__actions__.push({
                                func: pc,
                                args: [tf],
                                thisArg: n
                            }), new zn(a, this.__chain__)
                        }
                        return this.thru(tf)
                    }

                    function ZR() {
                        return sm(this.__wrapped__, this.__actions__)
                    }
                    var e0 = ac(function(i, a, l) {
                        pt.call(i, l) ? ++i[l] : $r(i, l, 1)
                    });

                    function t0(i, a, l) {
                        var h = We(i) ? Eg : Vw;
                        return l && yn(i, a, l) && (a = n), h(i, $e(a, 3))
                    }

                    function n0(i, a) {
                        var l = We(i) ? zr : Wg;
                        return l(i, $e(a, 3))
                    }
                    var r0 = mm(xm),
                        i0 = mm(Um);

                    function s0(i, a) {
                        return rn(gc(i, a), 1)
                    }

                    function a0(i, a) {
                        return rn(gc(i, a), Ee)
                    }

                    function o0(i, a, l) {
                        return l = l === n ? 1 : He(l), rn(gc(i, a), l)
                    }

                    function Hm(i, a) {
                        var l = We(i) ? Yn : Zr;
                        return l(i, $e(a, 3))
                    }

                    function Vm(i, a) {
                        var l = We(i) ? II : Gg;
                        return l(i, $e(a, 3))
                    }
                    var c0 = ac(function(i, a, l) {
                        pt.call(i, l) ? i[l].push(a) : $r(i, l, [a])
                    });

                    function l0(i, a, l, h) {
                        i = In(i) ? i : Ns(i), l = l && !h ? He(l) : 0;
                        var v = i.length;
                        return l < 0 && (l = Kt(v + l, 0)), yc(i) ? l <= v && i.indexOf(a, l) > -1 : !!v && Es(i, a, l) > -1
                    }
                    var u0 = qe(function(i, a, l) {
                            var h = -1,
                                v = typeof a == "function",
                                y = In(i) ? K(i.length) : [];
                            return Zr(i, function(w) {
                                y[++h] = v ? Pn(a, w, l) : Pa(w, a, l)
                            }), y
                        }),
                        f0 = ac(function(i, a, l) {
                            $r(i, l, a)
                        });

                    function gc(i, a) {
                        var l = We(i) ? Rt : qg;
                        return l(i, $e(a, 3))
                    }

                    function d0(i, a, l, h) {
                        return i == null ? [] : (We(a) || (a = a == null ? [] : [a]), l = h ? n : l, We(l) || (l = l == null ? [] : [l]), Qg(i, a, l))
                    }
                    var h0 = ac(function(i, a, l) {
                        i[l ? 0 : 1].push(a)
                    }, function() {
                        return [
                            [],
                            []
                        ]
                    });

                    function p0(i, a, l) {
                        var h = We(i) ? pu : Tg,
                            v = arguments.length < 3;
                        return h(i, $e(a, 4), l, v, Zr)
                    }

                    function g0(i, a, l) {
                        var h = We(i) ? wI : Tg,
                            v = arguments.length < 3;
                        return h(i, $e(a, 4), l, v, Gg)
                    }

                    function m0(i, a) {
                        var l = We(i) ? zr : Wg;
                        return l(i, Ec($e(a, 3)))
                    }

                    function v0(i) {
                        var a = We(i) ? xg : lC;
                        return a(i)
                    }

                    function E0(i, a, l) {
                        (l ? yn(i, a, l) : a === n) ? a = 1: a = He(a);
                        var h = We(i) ? Bw : uC;
                        return h(i, a)
                    }

                    function _0(i) {
                        var a = We(i) ? Gw : dC;
                        return a(i)
                    }

                    function y0(i) {
                        if (i == null) return 0;
                        if (In(i)) return yc(i) ? ys(i) : i.length;
                        var a = fn(i);
                        return a == p || a == X ? i.size : Pu(i).length
                    }

                    function b0(i, a, l) {
                        var h = We(i) ? gu : hC;
                        return l && yn(i, a, l) && (a = n), h(i, $e(a, 3))
                    }
                    var T0 = qe(function(i, a) {
                            if (i == null) return [];
                            var l = a.length;
                            return l > 1 && yn(i, a[0], a[1]) ? a = [] : l > 2 && yn(a[0], a[1], a[2]) && (a = [a[0]]), Qg(i, rn(a, 1), [])
                        }),
                        mc = nw || function() {
                            return nn.Date.now()
                        };

                    function S0(i, a) {
                        if (typeof a != "function") throw new qn(c);
                        return i = He(i),
                            function() {
                                if (--i < 1) return a.apply(this, arguments)
                            }
                    }

                    function Km(i, a, l) {
                        return a = l ? n : a, a = i && a == null ? i.length : a, Pr(i, ce, n, n, n, n, a)
                    }

                    function Ym(i, a) {
                        var l;
                        if (typeof a != "function") throw new qn(c);
                        return i = He(i),
                            function() {
                                return --i > 0 && (l = a.apply(this, arguments)), i <= 1 && (a = n), l
                            }
                    }
                    var rf = qe(function(i, a, l) {
                            var h = W;
                            if (l.length) {
                                var v = Jr(l, Cs(rf));
                                h |= G
                            }
                            return Pr(i, h, a, l, v)
                        }),
                        qm = qe(function(i, a, l) {
                            var h = W | C;
                            if (l.length) {
                                var v = Jr(l, Cs(qm));
                                h |= G
                            }
                            return Pr(a, h, i, l, v)
                        });

                    function zm(i, a, l) {
                        a = l ? n : a;
                        var h = Pr(i, q, n, n, n, n, n, a);
                        return h.placeholder = zm.placeholder, h
                    }

                    function Xm(i, a, l) {
                        a = l ? n : a;
                        var h = Pr(i, j, n, n, n, n, n, a);
                        return h.placeholder = Xm.placeholder, h
                    }

                    function Jm(i, a, l) {
                        var h, v, y, w, L, U, te = 0,
                            ne = !1,
                            oe = !1,
                            ge = !0;
                        if (typeof i != "function") throw new qn(c);
                        a = Zn(a) || 0, $t(l) && (ne = !!l.leading, oe = "maxWait" in l, y = oe ? Kt(Zn(l.maxWait) || 0, a) : y, ge = "trailing" in l ? !!l.trailing : ge);

                        function Ae(xt) {
                            var or = h,
                                Ur = v;
                            return h = v = n, te = xt, w = i.apply(Ur, or), w
                        }

                        function Pe(xt) {
                            return te = xt, L = Ua(Xe, a), ne ? Ae(xt) : w
                        }

                        function Ke(xt) {
                            var or = xt - U,
                                Ur = xt - te,
                                mv = a - or;
                            return oe ? un(mv, y - Ur) : mv
                        }

                        function De(xt) {
                            var or = xt - U,
                                Ur = xt - te;
                            return U === n || or >= a || or < 0 || oe && Ur >= y
                        }

                        function Xe() {
                            var xt = mc();
                            if (De(xt)) return Ze(xt);
                            L = Ua(Xe, Ke(xt))
                        }

                        function Ze(xt) {
                            return L = n, ge && h ? Ae(xt) : (h = v = n, w)
                        }

                        function xn() {
                            L !== n && om(L), te = 0, h = U = v = L = n
                        }

                        function bn() {
                            return L === n ? w : Ze(mc())
                        }

                        function Un() {
                            var xt = mc(),
                                or = De(xt);
                            if (h = arguments, v = this, U = xt, or) {
                                if (L === n) return Pe(U);
                                if (oe) return om(L), L = Ua(Xe, a), Ae(U)
                            }
                            return L === n && (L = Ua(Xe, a)), w
                        }
                        return Un.cancel = xn, Un.flush = bn, Un
                    }
                    var O0 = qe(function(i, a) {
                            return Bg(i, 1, a)
                        }),
                        A0 = qe(function(i, a, l) {
                            return Bg(i, Zn(a) || 0, l)
                        });

                    function I0(i) {
                        return Pr(i, ue)
                    }

                    function vc(i, a) {
                        if (typeof i != "function" || a != null && typeof a != "function") throw new qn(c);
                        var l = function() {
                            var h = arguments,
                                v = a ? a.apply(this, h) : h[0],
                                y = l.cache;
                            if (y.has(v)) return y.get(v);
                            var w = i.apply(this, h);
                            return l.cache = y.set(v, w) || y, w
                        };
                        return l.cache = new(vc.Cache || Lr), l
                    }
                    vc.Cache = Lr;

                    function Ec(i) {
                        if (typeof i != "function") throw new qn(c);
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

                    function w0(i) {
                        return Ym(2, i)
                    }
                    var C0 = pC(function(i, a) {
                            a = a.length == 1 && We(a[0]) ? Rt(a[0], Dn($e())) : Rt(rn(a, 1), Dn($e()));
                            var l = a.length;
                            return qe(function(h) {
                                for (var v = -1, y = un(h.length, l); ++v < y;) h[v] = a[v].call(this, h[v]);
                                return Pn(i, this, h)
                            })
                        }),
                        sf = qe(function(i, a) {
                            var l = Jr(a, Cs(sf));
                            return Pr(i, G, n, a, l)
                        }),
                        Qm = qe(function(i, a) {
                            var l = Jr(a, Cs(Qm));
                            return Pr(i, se, n, a, l)
                        }),
                        R0 = Dr(function(i, a) {
                            return Pr(i, le, n, n, n, a)
                        });

                    function N0(i, a) {
                        if (typeof i != "function") throw new qn(c);
                        return a = a === n ? a : He(a), qe(i, a)
                    }

                    function L0(i, a) {
                        if (typeof i != "function") throw new qn(c);
                        return a = a == null ? 0 : Kt(He(a), 0), qe(function(l) {
                            var h = l[a],
                                v = ni(l, 0, a);
                            return h && Xr(v, h), Pn(i, this, v)
                        })
                    }

                    function $0(i, a, l) {
                        var h = !0,
                            v = !0;
                        if (typeof i != "function") throw new qn(c);
                        return $t(l) && (h = "leading" in l ? !!l.leading : h, v = "trailing" in l ? !!l.trailing : v), Jm(i, a, {
                            leading: h,
                            maxWait: a,
                            trailing: v
                        })
                    }

                    function P0(i) {
                        return Km(i, 1)
                    }

                    function D0(i, a) {
                        return sf(Wu(a), i)
                    }

                    function k0() {
                        if (!arguments.length) return [];
                        var i = arguments[0];
                        return We(i) ? i : [i]
                    }

                    function M0(i) {
                        return Xn(i, I)
                    }

                    function x0(i, a) {
                        return a = typeof a == "function" ? a : n, Xn(i, I, a)
                    }

                    function U0(i) {
                        return Xn(i, _ | I)
                    }

                    function F0(i, a) {
                        return a = typeof a == "function" ? a : n, Xn(i, _ | I, a)
                    }

                    function B0(i, a) {
                        return a == null || Fg(i, a, Jt(a))
                    }

                    function ar(i, a) {
                        return i === a || i !== i && a !== a
                    }
                    var G0 = uc(Nu),
                        W0 = uc(function(i, a) {
                            return i >= a
                        }),
                        ji = Vg(function() {
                            return arguments
                        }()) ? Vg : function(i) {
                            return Dt(i) && pt.call(i, "callee") && !Lg.call(i, "callee")
                        },
                        We = K.isArray,
                        j0 = dg ? Dn(dg) : Jw;

                    function In(i) {
                        return i != null && _c(i.length) && !Mr(i)
                    }

                    function Mt(i) {
                        return Dt(i) && In(i)
                    }

                    function H0(i) {
                        return i === !0 || i === !1 || Dt(i) && _n(i) == vt
                    }
                    var ri = iw || mf,
                        V0 = hg ? Dn(hg) : Qw;

                    function K0(i) {
                        return Dt(i) && i.nodeType === 1 && !Fa(i)
                    }

                    function Y0(i) {
                        if (i == null) return !0;
                        if (In(i) && (We(i) || typeof i == "string" || typeof i.splice == "function" || ri(i) || Rs(i) || ji(i))) return !i.length;
                        var a = fn(i);
                        if (a == p || a == X) return !i.size;
                        if (xa(i)) return !Pu(i).length;
                        for (var l in i)
                            if (pt.call(i, l)) return !1;
                        return !0
                    }

                    function q0(i, a) {
                        return Da(i, a)
                    }

                    function z0(i, a, l) {
                        l = typeof l == "function" ? l : n;
                        var h = l ? l(i, a) : n;
                        return h === n ? Da(i, a, n, l) : !!h
                    }

                    function af(i) {
                        if (!Dt(i)) return !1;
                        var a = _n(i);
                        return a == kt || a == Pt || typeof i.message == "string" && typeof i.name == "string" && !Fa(i)
                    }

                    function X0(i) {
                        return typeof i == "number" && Pg(i)
                    }

                    function Mr(i) {
                        if (!$t(i)) return !1;
                        var a = _n(i);
                        return a == Lt || a == m || a == it || a == ae
                    }

                    function Zm(i) {
                        return typeof i == "number" && i == He(i)
                    }

                    function _c(i) {
                        return typeof i == "number" && i > -1 && i % 1 == 0 && i <= me
                    }

                    function $t(i) {
                        var a = typeof i;
                        return i != null && (a == "object" || a == "function")
                    }

                    function Dt(i) {
                        return i != null && typeof i == "object"
                    }
                    var ev = pg ? Dn(pg) : eC;

                    function J0(i, a) {
                        return i === a || $u(i, a, zu(a))
                    }

                    function Q0(i, a, l) {
                        return l = typeof l == "function" ? l : n, $u(i, a, zu(a), l)
                    }

                    function Z0(i) {
                        return tv(i) && i != +i
                    }

                    function e1(i) {
                        if (xC(i)) throw new Be(o);
                        return Kg(i)
                    }

                    function t1(i) {
                        return i === null
                    }

                    function n1(i) {
                        return i == null
                    }

                    function tv(i) {
                        return typeof i == "number" || Dt(i) && _n(i) == O
                    }

                    function Fa(i) {
                        if (!Dt(i) || _n(i) != B) return !1;
                        var a = Ko(i);
                        if (a === null) return !0;
                        var l = pt.call(a, "constructor") && a.constructor;
                        return typeof l == "function" && l instanceof l && Wo.call(l) == QI
                    }
                    var of = gg ? Dn(gg) : tC;

                    function r1(i) {
                        return Zm(i) && i >= -me && i <= me
                    }
                    var nv = mg ? Dn(mg) : nC;

                    function yc(i) {
                        return typeof i == "string" || !We(i) && Dt(i) && _n(i) == N
                    }

                    function Mn(i) {
                        return typeof i == "symbol" || Dt(i) && _n(i) == H
                    }
                    var Rs = vg ? Dn(vg) : rC;

                    function i1(i) {
                        return i === n
                    }

                    function s1(i) {
                        return Dt(i) && fn(i) == pe
                    }

                    function a1(i) {
                        return Dt(i) && _n(i) == Ne
                    }
                    var o1 = uc(Du),
                        c1 = uc(function(i, a) {
                            return i <= a
                        });

                    function rv(i) {
                        if (!i) return [];
                        if (In(i)) return yc(i) ? ir(i) : An(i);
                        if (Ia && i[Ia]) return BI(i[Ia]());
                        var a = fn(i),
                            l = a == p ? bu : a == X ? Fo : Ns;
                        return l(i)
                    }

                    function xr(i) {
                        if (!i) return i === 0 ? i : 0;
                        if (i = Zn(i), i === Ee || i === -Ee) {
                            var a = i < 0 ? -1 : 1;
                            return a * Se
                        }
                        return i === i ? i : 0
                    }

                    function He(i) {
                        var a = xr(i),
                            l = a % 1;
                        return a === a ? l ? a - l : a : 0
                    }

                    function iv(i) {
                        return i ? Fi(He(i), 0, Fe) : 0
                    }

                    function Zn(i) {
                        if (typeof i == "number") return i;
                        if (Mn(i)) return Me;
                        if ($t(i)) {
                            var a = typeof i.valueOf == "function" ? i.valueOf() : i;
                            i = $t(a) ? a + "" : a
                        }
                        if (typeof i != "string") return i === 0 ? i : +i;
                        i = Sg(i);
                        var l = jA.test(i);
                        return l || VA.test(i) ? SI(i.slice(2), l ? 2 : 8) : WA.test(i) ? Me : +i
                    }

                    function sv(i) {
                        return mr(i, wn(i))
                    }

                    function l1(i) {
                        return i ? Fi(He(i), -me, me) : i === 0 ? i : 0
                    }

                    function lt(i) {
                        return i == null ? "" : kn(i)
                    }
                    var u1 = Is(function(i, a) {
                            if (xa(a) || In(a)) {
                                mr(a, Jt(a), i);
                                return
                            }
                            for (var l in a) pt.call(a, l) && La(i, l, a[l])
                        }),
                        av = Is(function(i, a) {
                            mr(a, wn(a), i)
                        }),
                        bc = Is(function(i, a, l, h) {
                            mr(a, wn(a), i, h)
                        }),
                        f1 = Is(function(i, a, l, h) {
                            mr(a, Jt(a), i, h)
                        }),
                        d1 = Dr(wu);

                    function h1(i, a) {
                        var l = As(i);
                        return a == null ? l : Ug(l, a)
                    }
                    var p1 = qe(function(i, a) {
                            i = Et(i);
                            var l = -1,
                                h = a.length,
                                v = h > 2 ? a[2] : n;
                            for (v && yn(a[0], a[1], v) && (h = 1); ++l < h;)
                                for (var y = a[l], w = wn(y), L = -1, U = w.length; ++L < U;) {
                                    var te = w[L],
                                        ne = i[te];
                                    (ne === n || ar(ne, Ts[te]) && !pt.call(i, te)) && (i[te] = y[te])
                                }
                            return i
                        }),
                        g1 = qe(function(i) {
                            return i.push(n, Sm), Pn(ov, n, i)
                        });

                    function m1(i, a) {
                        return _g(i, $e(a, 3), gr)
                    }

                    function v1(i, a) {
                        return _g(i, $e(a, 3), Ru)
                    }

                    function E1(i, a) {
                        return i == null ? i : Cu(i, $e(a, 3), wn)
                    }

                    function _1(i, a) {
                        return i == null ? i : jg(i, $e(a, 3), wn)
                    }

                    function y1(i, a) {
                        return i && gr(i, $e(a, 3))
                    }

                    function b1(i, a) {
                        return i && Ru(i, $e(a, 3))
                    }

                    function T1(i) {
                        return i == null ? [] : nc(i, Jt(i))
                    }

                    function S1(i) {
                        return i == null ? [] : nc(i, wn(i))
                    }

                    function cf(i, a, l) {
                        var h = i == null ? n : Bi(i, a);
                        return h === n ? l : h
                    }

                    function O1(i, a) {
                        return i != null && Im(i, a, Yw)
                    }

                    function lf(i, a) {
                        return i != null && Im(i, a, qw)
                    }
                    var A1 = Em(function(i, a, l) {
                            a != null && typeof a.toString != "function" && (a = jo.call(a)), i[a] = l
                        }, ff(Cn)),
                        I1 = Em(function(i, a, l) {
                            a != null && typeof a.toString != "function" && (a = jo.call(a)), pt.call(i, a) ? i[a].push(l) : i[a] = [l]
                        }, $e),
                        w1 = qe(Pa);

                    function Jt(i) {
                        return In(i) ? Mg(i) : Pu(i)
                    }

                    function wn(i) {
                        return In(i) ? Mg(i, !0) : iC(i)
                    }

                    function C1(i, a) {
                        var l = {};
                        return a = $e(a, 3), gr(i, function(h, v, y) {
                            $r(l, a(h, v, y), h)
                        }), l
                    }

                    function R1(i, a) {
                        var l = {};
                        return a = $e(a, 3), gr(i, function(h, v, y) {
                            $r(l, v, a(h, v, y))
                        }), l
                    }
                    var N1 = Is(function(i, a, l) {
                            rc(i, a, l)
                        }),
                        ov = Is(function(i, a, l, h) {
                            rc(i, a, l, h)
                        }),
                        L1 = Dr(function(i, a) {
                            var l = {};
                            if (i == null) return l;
                            var h = !1;
                            a = Rt(a, function(y) {
                                return y = ti(y, i), h || (h = y.length > 1), y
                            }), mr(i, Yu(i), l), h && (l = Xn(l, _ | b | I, AC));
                            for (var v = a.length; v--;) Fu(l, a[v]);
                            return l
                        });

                    function $1(i, a) {
                        return cv(i, Ec($e(a)))
                    }
                    var P1 = Dr(function(i, a) {
                        return i == null ? {} : aC(i, a)
                    });

                    function cv(i, a) {
                        if (i == null) return {};
                        var l = Rt(Yu(i), function(h) {
                            return [h]
                        });
                        return a = $e(a), Zg(i, l, function(h, v) {
                            return a(h, v[0])
                        })
                    }

                    function D1(i, a, l) {
                        a = ti(a, i);
                        var h = -1,
                            v = a.length;
                        for (v || (v = 1, i = n); ++h < v;) {
                            var y = i == null ? n : i[vr(a[h])];
                            y === n && (h = v, y = l), i = Mr(y) ? y.call(i) : y
                        }
                        return i
                    }

                    function k1(i, a, l) {
                        return i == null ? i : ka(i, a, l)
                    }

                    function M1(i, a, l, h) {
                        return h = typeof h == "function" ? h : n, i == null ? i : ka(i, a, l, h)
                    }
                    var lv = bm(Jt),
                        uv = bm(wn);

                    function x1(i, a, l) {
                        var h = We(i),
                            v = h || ri(i) || Rs(i);
                        if (a = $e(a, 4), l == null) {
                            var y = i && i.constructor;
                            v ? l = h ? new y : [] : $t(i) ? l = Mr(y) ? As(Ko(i)) : {} : l = {}
                        }
                        return (v ? Yn : gr)(i, function(w, L, U) {
                            return a(l, w, L, U)
                        }), l
                    }

                    function U1(i, a) {
                        return i == null ? !0 : Fu(i, a)
                    }

                    function F1(i, a, l) {
                        return i == null ? i : im(i, a, Wu(l))
                    }

                    function B1(i, a, l, h) {
                        return h = typeof h == "function" ? h : n, i == null ? i : im(i, a, Wu(l), h)
                    }

                    function Ns(i) {
                        return i == null ? [] : yu(i, Jt(i))
                    }

                    function G1(i) {
                        return i == null ? [] : yu(i, wn(i))
                    }

                    function W1(i, a, l) {
                        return l === n && (l = a, a = n), l !== n && (l = Zn(l), l = l === l ? l : 0), a !== n && (a = Zn(a), a = a === a ? a : 0), Fi(Zn(i), a, l)
                    }

                    function j1(i, a, l) {
                        return a = xr(a), l === n ? (l = a, a = 0) : l = xr(l), i = Zn(i), zw(i, a, l)
                    }

                    function H1(i, a, l) {
                        if (l && typeof l != "boolean" && yn(i, a, l) && (a = l = n), l === n && (typeof a == "boolean" ? (l = a, a = n) : typeof i == "boolean" && (l = i, i = n)), i === n && a === n ? (i = 0, a = 1) : (i = xr(i), a === n ? (a = i, i = 0) : a = xr(a)), i > a) {
                            var h = i;
                            i = a, a = h
                        }
                        if (l || i % 1 || a % 1) {
                            var v = Dg();
                            return un(i + v * (a - i + TI("1e-" + ((v + "").length - 1))), a)
                        }
                        return Mu(i, a)
                    }
                    var V1 = ws(function(i, a, l) {
                        return a = a.toLowerCase(), i + (l ? fv(a) : a)
                    });

                    function fv(i) {
                        return uf(lt(i).toLowerCase())
                    }

                    function dv(i) {
                        return i = lt(i), i && i.replace(YA, kI).replace(dI, "")
                    }

                    function K1(i, a, l) {
                        i = lt(i), a = kn(a);
                        var h = i.length;
                        l = l === n ? h : Fi(He(l), 0, h);
                        var v = l;
                        return l -= a.length, l >= 0 && i.slice(l, v) == a
                    }

                    function Y1(i) {
                        return i = lt(i), i && wA.test(i) ? i.replace(jp, MI) : i
                    }

                    function q1(i) {
                        return i = lt(i), i && PA.test(i) ? i.replace(iu, "\\$&") : i
                    }
                    var z1 = ws(function(i, a, l) {
                            return i + (l ? "-" : "") + a.toLowerCase()
                        }),
                        X1 = ws(function(i, a, l) {
                            return i + (l ? " " : "") + a.toLowerCase()
                        }),
                        J1 = gm("toLowerCase");

                    function Q1(i, a, l) {
                        i = lt(i), a = He(a);
                        var h = a ? ys(i) : 0;
                        if (!a || h >= a) return i;
                        var v = (a - h) / 2;
                        return lc(Xo(v), l) + i + lc(zo(v), l)
                    }

                    function Z1(i, a, l) {
                        i = lt(i), a = He(a);
                        var h = a ? ys(i) : 0;
                        return a && h < a ? i + lc(a - h, l) : i
                    }

                    function eN(i, a, l) {
                        i = lt(i), a = He(a);
                        var h = a ? ys(i) : 0;
                        return a && h < a ? lc(a - h, l) + i : i
                    }

                    function tN(i, a, l) {
                        return l || a == null ? a = 0 : a && (a = +a), cw(lt(i).replace(su, ""), a || 0)
                    }

                    function nN(i, a, l) {
                        return (l ? yn(i, a, l) : a === n) ? a = 1 : a = He(a), xu(lt(i), a)
                    }

                    function rN() {
                        var i = arguments,
                            a = lt(i[0]);
                        return i.length < 3 ? a : a.replace(i[1], i[2])
                    }
                    var iN = ws(function(i, a, l) {
                        return i + (l ? "_" : "") + a.toLowerCase()
                    });

                    function sN(i, a, l) {
                        return l && typeof l != "number" && yn(i, a, l) && (a = l = n), l = l === n ? Fe : l >>> 0, l ? (i = lt(i), i && (typeof a == "string" || a != null && !of(a)) && (a = kn(a), !a && _s(i)) ? ni(ir(i), 0, l) : i.split(a, l)) : []
                    }
                    var aN = ws(function(i, a, l) {
                        return i + (l ? " " : "") + uf(a)
                    });

                    function oN(i, a, l) {
                        return i = lt(i), l = l == null ? 0 : Fi(He(l), 0, i.length), a = kn(a), i.slice(l, l + a.length) == a
                    }

                    function cN(i, a, l) {
                        var h = E.templateSettings;
                        l && yn(i, a, l) && (a = n), i = lt(i), a = bc({}, a, h, Tm);
                        var v = bc({}, a.imports, h.imports, Tm),
                            y = Jt(v),
                            w = yu(v, y),
                            L, U, te = 0,
                            ne = a.interpolate || Do,
                            oe = "__p += '",
                            ge = Tu((a.escape || Do).source + "|" + ne.source + "|" + (ne === Hp ? GA : Do).source + "|" + (a.evaluate || Do).source + "|$", "g"),
                            Ae = "//# sourceURL=" + (pt.call(a, "sourceURL") ? (a.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++vI + "]") + `
`;
                        i.replace(ge, function(De, Xe, Ze, xn, bn, Un) {
                            return Ze || (Ze = xn), oe += i.slice(te, Un).replace(qA, xI), Xe && (L = !0, oe += `' +
__e(` + Xe + `) +
'`), bn && (U = !0, oe += `';
` + bn + `;
__p += '`), Ze && (oe += `' +
((__t = (` + Ze + `)) == null ? '' : __t) +
'`), te = Un + De.length, De
                        }), oe += `';
`;
                        var Pe = pt.call(a, "variable") && a.variable;
                        if (!Pe) oe = `with (obj) {
` + oe + `
}
`;
                        else if (FA.test(Pe)) throw new Be(u);
                        oe = (U ? oe.replace(ln, "") : oe).replace(Ue, "$1").replace(Oa, "$1;"), oe = "function(" + (Pe || "obj") + `) {
` + (Pe ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (L ? ", __e = _.escape" : "") + (U ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + oe + `return __p
}`;
                        var Ke = pv(function() {
                            return ct(y, Ae + "return " + oe).apply(n, w)
                        });
                        if (Ke.source = oe, af(Ke)) throw Ke;
                        return Ke
                    }

                    function lN(i) {
                        return lt(i).toLowerCase()
                    }

                    function uN(i) {
                        return lt(i).toUpperCase()
                    }

                    function fN(i, a, l) {
                        if (i = lt(i), i && (l || a === n)) return Sg(i);
                        if (!i || !(a = kn(a))) return i;
                        var h = ir(i),
                            v = ir(a),
                            y = Og(h, v),
                            w = Ag(h, v) + 1;
                        return ni(h, y, w).join("")
                    }

                    function dN(i, a, l) {
                        if (i = lt(i), i && (l || a === n)) return i.slice(0, wg(i) + 1);
                        if (!i || !(a = kn(a))) return i;
                        var h = ir(i),
                            v = Ag(h, ir(a)) + 1;
                        return ni(h, 0, v).join("")
                    }

                    function hN(i, a, l) {
                        if (i = lt(i), i && (l || a === n)) return i.replace(su, "");
                        if (!i || !(a = kn(a))) return i;
                        var h = ir(i),
                            v = Og(h, ir(a));
                        return ni(h, v).join("")
                    }

                    function pN(i, a) {
                        var l = Ce,
                            h = be;
                        if ($t(a)) {
                            var v = "separator" in a ? a.separator : v;
                            l = "length" in a ? He(a.length) : l, h = "omission" in a ? kn(a.omission) : h
                        }
                        i = lt(i);
                        var y = i.length;
                        if (_s(i)) {
                            var w = ir(i);
                            y = w.length
                        }
                        if (l >= y) return i;
                        var L = l - ys(h);
                        if (L < 1) return h;
                        var U = w ? ni(w, 0, L).join("") : i.slice(0, L);
                        if (v === n) return U + h;
                        if (w && (L += U.length - L), of(v)) {
                            if (i.slice(L).search(v)) {
                                var te, ne = U;
                                for (v.global || (v = Tu(v.source, lt(Vp.exec(v)) + "g")), v.lastIndex = 0; te = v.exec(ne);) var oe = te.index;
                                U = U.slice(0, oe === n ? L : oe)
                            }
                        } else if (i.indexOf(kn(v), L) != L) {
                            var ge = U.lastIndexOf(v);
                            ge > -1 && (U = U.slice(0, ge))
                        }
                        return U + h
                    }

                    function gN(i) {
                        return i = lt(i), i && IA.test(i) ? i.replace(Wp, HI) : i
                    }
                    var mN = ws(function(i, a, l) {
                            return i + (l ? " " : "") + a.toUpperCase()
                        }),
                        uf = gm("toUpperCase");

                    function hv(i, a, l) {
                        return i = lt(i), a = l ? n : a, a === n ? FI(i) ? YI(i) : NI(i) : i.match(a) || []
                    }
                    var pv = qe(function(i, a) {
                            try {
                                return Pn(i, n, a)
                            } catch (l) {
                                return af(l) ? l : new Be(l)
                            }
                        }),
                        vN = Dr(function(i, a) {
                            return Yn(a, function(l) {
                                l = vr(l), $r(i, l, rf(i[l], i))
                            }), i
                        });

                    function EN(i) {
                        var a = i == null ? 0 : i.length,
                            l = $e();
                        return i = a ? Rt(i, function(h) {
                            if (typeof h[1] != "function") throw new qn(c);
                            return [l(h[0]), h[1]]
                        }) : [], qe(function(h) {
                            for (var v = -1; ++v < a;) {
                                var y = i[v];
                                if (Pn(y[0], this, h)) return Pn(y[1], this, h)
                            }
                        })
                    }

                    function _N(i) {
                        return Hw(Xn(i, _))
                    }

                    function ff(i) {
                        return function() {
                            return i
                        }
                    }

                    function yN(i, a) {
                        return i == null || i !== i ? a : i
                    }
                    var bN = vm(),
                        TN = vm(!0);

                    function Cn(i) {
                        return i
                    }

                    function df(i) {
                        return Yg(typeof i == "function" ? i : Xn(i, _))
                    }

                    function SN(i) {
                        return zg(Xn(i, _))
                    }

                    function ON(i, a) {
                        return Xg(i, Xn(a, _))
                    }
                    var AN = qe(function(i, a) {
                            return function(l) {
                                return Pa(l, i, a)
                            }
                        }),
                        IN = qe(function(i, a) {
                            return function(l) {
                                return Pa(i, l, a)
                            }
                        });

                    function hf(i, a, l) {
                        var h = Jt(a),
                            v = nc(a, h);
                        l == null && !($t(a) && (v.length || !h.length)) && (l = a, a = i, i = this, v = nc(a, Jt(a)));
                        var y = !($t(l) && "chain" in l) || !!l.chain,
                            w = Mr(i);
                        return Yn(v, function(L) {
                            var U = a[L];
                            i[L] = U, w && (i.prototype[L] = function() {
                                var te = this.__chain__;
                                if (y || te) {
                                    var ne = i(this.__wrapped__),
                                        oe = ne.__actions__ = An(this.__actions__);
                                    return oe.push({
                                        func: U,
                                        args: arguments,
                                        thisArg: i
                                    }), ne.__chain__ = te, ne
                                }
                                return U.apply(i, Xr([this.value()], arguments))
                            })
                        }), i
                    }

                    function wN() {
                        return nn._ === this && (nn._ = ZI), this
                    }

                    function pf() {}

                    function CN(i) {
                        return i = He(i), qe(function(a) {
                            return Jg(a, i)
                        })
                    }
                    var RN = Hu(Rt),
                        NN = Hu(Eg),
                        LN = Hu(gu);

                    function gv(i) {
                        return Ju(i) ? mu(vr(i)) : oC(i)
                    }

                    function $N(i) {
                        return function(a) {
                            return i == null ? n : Bi(i, a)
                        }
                    }
                    var PN = _m(),
                        DN = _m(!0);

                    function gf() {
                        return []
                    }

                    function mf() {
                        return !1
                    }

                    function kN() {
                        return {}
                    }

                    function MN() {
                        return ""
                    }

                    function xN() {
                        return !0
                    }

                    function UN(i, a) {
                        if (i = He(i), i < 1 || i > me) return [];
                        var l = Fe,
                            h = un(i, Fe);
                        a = $e(a), i -= Fe;
                        for (var v = _u(h, a); ++l < i;) a(l);
                        return v
                    }

                    function FN(i) {
                        return We(i) ? Rt(i, vr) : Mn(i) ? [i] : An(km(lt(i)))
                    }

                    function BN(i) {
                        var a = ++JI;
                        return lt(i) + a
                    }
                    var GN = cc(function(i, a) {
                            return i + a
                        }, 0),
                        WN = Vu("ceil"),
                        jN = cc(function(i, a) {
                            return i / a
                        }, 1),
                        HN = Vu("floor");

                    function VN(i) {
                        return i && i.length ? tc(i, Cn, Nu) : n
                    }

                    function KN(i, a) {
                        return i && i.length ? tc(i, $e(a, 2), Nu) : n
                    }

                    function YN(i) {
                        return bg(i, Cn)
                    }

                    function qN(i, a) {
                        return bg(i, $e(a, 2))
                    }

                    function zN(i) {
                        return i && i.length ? tc(i, Cn, Du) : n
                    }

                    function XN(i, a) {
                        return i && i.length ? tc(i, $e(a, 2), Du) : n
                    }
                    var JN = cc(function(i, a) {
                            return i * a
                        }, 1),
                        QN = Vu("round"),
                        ZN = cc(function(i, a) {
                            return i - a
                        }, 0);

                    function eL(i) {
                        return i && i.length ? Eu(i, Cn) : 0
                    }

                    function tL(i, a) {
                        return i && i.length ? Eu(i, $e(a, 2)) : 0
                    }
                    return E.after = S0, E.ary = Km, E.assign = u1, E.assignIn = av, E.assignInWith = bc, E.assignWith = f1, E.at = d1, E.before = Ym, E.bind = rf, E.bindAll = vN, E.bindKey = qm, E.castArray = k0, E.chain = jm, E.chunk = HC, E.compact = VC, E.concat = KC, E.cond = EN, E.conforms = _N, E.constant = ff, E.countBy = e0, E.create = h1, E.curry = zm, E.curryRight = Xm, E.debounce = Jm, E.defaults = p1, E.defaultsDeep = g1, E.defer = O0, E.delay = A0, E.difference = YC, E.differenceBy = qC, E.differenceWith = zC, E.drop = XC, E.dropRight = JC, E.dropRightWhile = QC, E.dropWhile = ZC, E.fill = eR, E.filter = n0, E.flatMap = s0, E.flatMapDeep = a0, E.flatMapDepth = o0, E.flatten = Fm, E.flattenDeep = tR, E.flattenDepth = nR, E.flip = I0, E.flow = bN, E.flowRight = TN, E.fromPairs = rR, E.functions = T1, E.functionsIn = S1, E.groupBy = c0, E.initial = sR, E.intersection = aR, E.intersectionBy = oR, E.intersectionWith = cR, E.invert = A1, E.invertBy = I1, E.invokeMap = u0, E.iteratee = df, E.keyBy = f0, E.keys = Jt, E.keysIn = wn, E.map = gc, E.mapKeys = C1, E.mapValues = R1, E.matches = SN, E.matchesProperty = ON, E.memoize = vc, E.merge = N1, E.mergeWith = ov, E.method = AN, E.methodOf = IN, E.mixin = hf, E.negate = Ec, E.nthArg = CN, E.omit = L1, E.omitBy = $1, E.once = w0, E.orderBy = d0, E.over = RN, E.overArgs = C0, E.overEvery = NN, E.overSome = LN, E.partial = sf, E.partialRight = Qm, E.partition = h0, E.pick = P1, E.pickBy = cv, E.property = gv, E.propertyOf = $N, E.pull = dR, E.pullAll = Gm, E.pullAllBy = hR, E.pullAllWith = pR, E.pullAt = gR, E.range = PN, E.rangeRight = DN, E.rearg = R0, E.reject = m0, E.remove = mR, E.rest = N0, E.reverse = tf, E.sampleSize = E0, E.set = k1, E.setWith = M1, E.shuffle = _0, E.slice = vR, E.sortBy = T0, E.sortedUniq = OR, E.sortedUniqBy = AR, E.split = sN, E.spread = L0, E.tail = IR, E.take = wR, E.takeRight = CR, E.takeRightWhile = RR, E.takeWhile = NR, E.tap = VR, E.throttle = $0, E.thru = pc, E.toArray = rv, E.toPairs = lv, E.toPairsIn = uv, E.toPath = FN, E.toPlainObject = sv, E.transform = x1, E.unary = P0, E.union = LR, E.unionBy = $R, E.unionWith = PR, E.uniq = DR, E.uniqBy = kR, E.uniqWith = MR, E.unset = U1, E.unzip = nf, E.unzipWith = Wm, E.update = F1, E.updateWith = B1, E.values = Ns, E.valuesIn = G1, E.without = xR, E.words = hv, E.wrap = D0, E.xor = UR, E.xorBy = FR, E.xorWith = BR, E.zip = GR, E.zipObject = WR, E.zipObjectDeep = jR, E.zipWith = HR, E.entries = lv, E.entriesIn = uv, E.extend = av, E.extendWith = bc, hf(E, E), E.add = GN, E.attempt = pv, E.camelCase = V1, E.capitalize = fv, E.ceil = WN, E.clamp = W1, E.clone = M0, E.cloneDeep = U0, E.cloneDeepWith = F0, E.cloneWith = x0, E.conformsTo = B0, E.deburr = dv, E.defaultTo = yN, E.divide = jN, E.endsWith = K1, E.eq = ar, E.escape = Y1, E.escapeRegExp = q1, E.every = t0, E.find = r0, E.findIndex = xm, E.findKey = m1, E.findLast = i0, E.findLastIndex = Um, E.findLastKey = v1, E.floor = HN, E.forEach = Hm, E.forEachRight = Vm, E.forIn = E1, E.forInRight = _1, E.forOwn = y1, E.forOwnRight = b1, E.get = cf, E.gt = G0, E.gte = W0, E.has = O1, E.hasIn = lf, E.head = Bm, E.identity = Cn, E.includes = l0, E.indexOf = iR, E.inRange = j1, E.invoke = w1, E.isArguments = ji, E.isArray = We, E.isArrayBuffer = j0, E.isArrayLike = In, E.isArrayLikeObject = Mt, E.isBoolean = H0, E.isBuffer = ri, E.isDate = V0, E.isElement = K0, E.isEmpty = Y0, E.isEqual = q0, E.isEqualWith = z0, E.isError = af, E.isFinite = X0, E.isFunction = Mr, E.isInteger = Zm, E.isLength = _c, E.isMap = ev, E.isMatch = J0, E.isMatchWith = Q0, E.isNaN = Z0, E.isNative = e1, E.isNil = n1, E.isNull = t1, E.isNumber = tv, E.isObject = $t, E.isObjectLike = Dt, E.isPlainObject = Fa, E.isRegExp = of, E.isSafeInteger = r1, E.isSet = nv, E.isString = yc, E.isSymbol = Mn, E.isTypedArray = Rs, E.isUndefined = i1, E.isWeakMap = s1, E.isWeakSet = a1, E.join = lR, E.kebabCase = z1, E.last = Qn, E.lastIndexOf = uR, E.lowerCase = X1, E.lowerFirst = J1, E.lt = o1, E.lte = c1, E.max = VN, E.maxBy = KN, E.mean = YN, E.meanBy = qN, E.min = zN, E.minBy = XN, E.stubArray = gf, E.stubFalse = mf, E.stubObject = kN, E.stubString = MN, E.stubTrue = xN, E.multiply = JN, E.nth = fR, E.noConflict = wN, E.noop = pf, E.now = mc, E.pad = Q1, E.padEnd = Z1, E.padStart = eN, E.parseInt = tN, E.random = H1, E.reduce = p0, E.reduceRight = g0, E.repeat = nN, E.replace = rN, E.result = D1, E.round = QN, E.runInContext = k, E.sample = v0, E.size = y0, E.snakeCase = iN, E.some = b0, E.sortedIndex = ER, E.sortedIndexBy = _R, E.sortedIndexOf = yR, E.sortedLastIndex = bR, E.sortedLastIndexBy = TR, E.sortedLastIndexOf = SR, E.startCase = aN, E.startsWith = oN, E.subtract = ZN, E.sum = eL, E.sumBy = tL, E.template = cN, E.times = UN, E.toFinite = xr, E.toInteger = He, E.toLength = iv, E.toLower = lN, E.toNumber = Zn, E.toSafeInteger = l1, E.toString = lt, E.toUpper = uN, E.trim = fN, E.trimEnd = dN, E.trimStart = hN, E.truncate = pN, E.unescape = gN, E.uniqueId = BN, E.upperCase = mN, E.upperFirst = uf, E.each = Hm, E.eachRight = Vm, E.first = Bm, hf(E, function() {
                        var i = {};
                        return gr(E, function(a, l) {
                            pt.call(E.prototype, l) || (i[l] = a)
                        }), i
                    }(), {
                        chain: !1
                    }), E.VERSION = r, Yn(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(i) {
                        E[i].placeholder = E
                    }), Yn(["drop", "take"], function(i, a) {
                        Qe.prototype[i] = function(l) {
                            l = l === n ? 1 : Kt(He(l), 0);
                            var h = this.__filtered__ && !a ? new Qe(this) : this.clone();
                            return h.__filtered__ ? h.__takeCount__ = un(l, h.__takeCount__) : h.__views__.push({
                                size: un(l, Fe),
                                type: i + (h.__dir__ < 0 ? "Right" : "")
                            }), h
                        }, Qe.prototype[i + "Right"] = function(l) {
                            return this.reverse()[i](l).reverse()
                        }
                    }), Yn(["filter", "map", "takeWhile"], function(i, a) {
                        var l = a + 1,
                            h = l == F || l == de;
                        Qe.prototype[i] = function(v) {
                            var y = this.clone();
                            return y.__iteratees__.push({
                                iteratee: $e(v, 3),
                                type: l
                            }), y.__filtered__ = y.__filtered__ || h, y
                        }
                    }), Yn(["head", "last"], function(i, a) {
                        var l = "take" + (a ? "Right" : "");
                        Qe.prototype[i] = function() {
                            return this[l](1).value()[0]
                        }
                    }), Yn(["initial", "tail"], function(i, a) {
                        var l = "drop" + (a ? "" : "Right");
                        Qe.prototype[i] = function() {
                            return this.__filtered__ ? new Qe(this) : this[l](1)
                        }
                    }), Qe.prototype.compact = function() {
                        return this.filter(Cn)
                    }, Qe.prototype.find = function(i) {
                        return this.filter(i).head()
                    }, Qe.prototype.findLast = function(i) {
                        return this.reverse().find(i)
                    }, Qe.prototype.invokeMap = qe(function(i, a) {
                        return typeof i == "function" ? new Qe(this) : this.map(function(l) {
                            return Pa(l, i, a)
                        })
                    }), Qe.prototype.reject = function(i) {
                        return this.filter(Ec($e(i)))
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
                            h = /^(?:head|last)$/.test(a),
                            v = E[h ? "take" + (a == "last" ? "Right" : "") : a],
                            y = h || /^find/.test(a);
                        !v || (E.prototype[a] = function() {
                            var w = this.__wrapped__,
                                L = h ? [1] : arguments,
                                U = w instanceof Qe,
                                te = L[0],
                                ne = U || We(w),
                                oe = function(Xe) {
                                    var Ze = v.apply(E, Xr([Xe], L));
                                    return h && ge ? Ze[0] : Ze
                                };
                            ne && l && typeof te == "function" && te.length != 1 && (U = ne = !1);
                            var ge = this.__chain__,
                                Ae = !!this.__actions__.length,
                                Pe = y && !ge,
                                Ke = U && !Ae;
                            if (!y && ne) {
                                w = Ke ? w : new Qe(this);
                                var De = i.apply(w, L);
                                return De.__actions__.push({
                                    func: pc,
                                    args: [oe],
                                    thisArg: n
                                }), new zn(De, ge)
                            }
                            return Pe && Ke ? i.apply(this, L) : (De = this.thru(oe), Pe ? h ? De.value()[0] : De.value() : De)
                        })
                    }), Yn(["pop", "push", "shift", "sort", "splice", "unshift"], function(i) {
                        var a = Bo[i],
                            l = /^(?:push|sort|unshift)$/.test(i) ? "tap" : "thru",
                            h = /^(?:pop|shift)$/.test(i);
                        E.prototype[i] = function() {
                            var v = arguments;
                            if (h && !this.__chain__) {
                                var y = this.value();
                                return a.apply(We(y) ? y : [], v)
                            }
                            return this[l](function(w) {
                                return a.apply(We(w) ? w : [], v)
                            })
                        }
                    }), gr(Qe.prototype, function(i, a) {
                        var l = E[a];
                        if (l) {
                            var h = l.name + "";
                            pt.call(Os, h) || (Os[h] = []), Os[h].push({
                                name: a,
                                func: l
                            })
                        }
                    }), Os[oc(n, C).name] = [{
                        name: "wrapper",
                        func: n
                    }], Qe.prototype.clone = gw, Qe.prototype.reverse = mw, Qe.prototype.value = vw, E.prototype.at = KR, E.prototype.chain = YR, E.prototype.commit = qR, E.prototype.next = zR, E.prototype.plant = JR, E.prototype.reverse = QR, E.prototype.toJSON = E.prototype.valueOf = E.prototype.value = ZR, E.prototype.first = E.prototype.head, Ia && (E.prototype[Ia] = XR), E
                },
                bs = qI();
            ki ? ((ki.exports = bs)._ = bs, fu._ = bs) : nn._ = bs
        }).call(Ft)
    })(Wd, Wd.exports);
    const L8 = ze({
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
                        d = Math.min(o / u, c / f),
                        g = u * d,
                        _ = f * d;
                    return {
                        width: `${g}px`,
                        height: `${_}px`
                    }
                }
            },
            mounted() {
                this.onResizeWithContext = Wd.exports.throttle(this.onResize.bind(this), 400), window.addEventListener("resize", this.onResizeWithContext), this.setupStage()
            },
            beforeUnmount() {
                window.removeEventListener("resize", this.onResizeWithContext), this.stage && this.stage.beforeDestroy()
            },
            methods: {
                setupStage() {
                    const e = this.$refs.stage,
                        t = {};
                    this.player.size && (t.width = this.player.size.width, t.height = this.player.size.height), this.player.thicknesses && (t.thickness = this.player.thicknesses[0]), this.player.colors && (t.color = this.player.colors[0]), this.player.maxPoints && (t.maxPoints = this.player.maxPoints);
                    const n = new H3(e, t);
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
        $8 = {
            class: "draw"
        },
        P8 = {
            ref: "content",
            class: "content"
        },
        D8 = {
            class: "constrain"
        },
        k8 = {
            key: 0
        };

    function M8(e, t, n, r, s, o) {
        const c = mn("bb");
        return z(), Z("div", $8, [Y("div", P8, [Y("div", D8, [e.player.prompt ? je((z(), Z("div", k8, null, 512)), [
            [c, e.player.prompt]
        ]) : we("", !0), Y("div", {
            ref: "stage",
            class: "stage",
            style: la(e.stageDimensions)
        }, null, 4), Y("button", {
            onClick: t[0] || (t[0] = Gt((...u) => e.onSubmitClick && e.onSubmitClick(...u), ["prevent"]))
        }, Ie(e.player.submitText || "SUBMIT"), 1)])], 512)])
    }
    const x8 = mt(L8, [
            ["render", M8]
        ]),
        U8 = ze({
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
        F8 = ["textContent"],
        B8 = ["textContent"],
        G8 = ["textContent"],
        W8 = ["textContent"];

    function j8(e, t, n, r, s, o) {
        const c = mn("t");
        return z(), Z("div", {
            class: Ye(["lobby-actions", {
                vip: e.player.hasControls
            }])
        }, [!e.messageLocation || e.messageLocation === "top" ? (z(), Z("p", {
            key: 0,
            class: Ye(e.localClasses.message),
            textContent: Ie(e.joinedCountText)
        }, null, 10, F8)) : we("", !0), e.player.hasControls ? (z(), Z(ut, {
            key: 1
        }, [e.player.status === "waitingForMore" ? (z(), Z("p", {
            key: 0,
            class: Ye(e.localClasses.status)
        }, Ie(e.neededText), 3)) : we("", !0), e.player.status === "canStart" ? (z(), Z("button", {
            key: 1,
            class: Ye(e.localClasses.action),
            onClick: t[0] || (t[0] = (...u) => e.onStartClick && e.onStartClick(...u)),
            textContent: Ie(e.startText || e.$t("LOBBY.BUTTON_START"))
        }, null, 10, B8)) : we("", !0), e.player.status === "countdown" ? (z(), Z("button", {
            key: 2,
            class: Ye(e.localClasses.action),
            onClick: t[1] || (t[1] = (...u) => e.onCancelClick && e.onCancelClick(...u)),
            textContent: Ie(e.cancelText || e.$t("LOBBY.BUTTON_CANCEL"))
        }, null, 10, G8)) : we("", !0)], 64)) : e.player.gamepadStart ? (z(), Z(ut, {
            key: 2
        }, [e.player.status === "waitingForMore" ? (z(), Z("p", {
            key: 0,
            class: Ye(e.localClasses.status)
        }, Ie(e.neededText), 3)) : we("", !0), e.player.status === "canStart" ? je((z(), Z("p", {
            key: 1,
            class: Ye(e.localClasses.status)
        }, null, 2)), [
            [c, "LOBBY.WAITING_FOR_GAMEPAD"]
        ]) : we("", !0), e.player.status === "countdown" ? je((z(), Z("p", {
            key: 2,
            class: Ye(e.localClasses.status)
        }, null, 2)), [
            [c, "LOBBY.GAME_STARTING"]
        ]) : we("", !0)], 64)) : (z(), Z(ut, {
            key: 3
        }, [e.player.status === "waitingForMore" ? (z(), Z("p", {
            key: 0,
            class: Ye(e.localClasses.status)
        }, Ie(e.neededText), 3)) : we("", !0), e.player.status === "canStart" ? (z(), Z("p", {
            key: 1,
            class: Ye(e.localClasses.status)
        }, Ie(e.waitingForVIPText), 3)) : we("", !0), e.player.status === "countdown" ? je((z(), Z("p", {
            key: 2,
            class: Ye(e.localClasses.status)
        }, null, 2)), [
            [c, "LOBBY.GAME_STARTING"]
        ]) : we("", !0)], 64)), e.messageLocation === "bottom" ? (z(), Z("p", {
            key: 4,
            class: Ye(e.localClasses.message),
            textContent: Ie(e.joinedCountText)
        }, null, 10, W8)) : we("", !0)], 2)
    }
    const H8 = mt(U8, [
            ["render", j8]
        ]),
        V8 = ze({
            components: {
                LobbyActions: H8
            },
            props: {
                player: Object
            }
        }),
        K8 = {
            class: "lobby"
        },
        Y8 = {
            class: "constrain"
        };

    function q8(e, t, n, r, s, o) {
        const c = Bt("LobbyActions");
        return z(), Z("div", K8, [Y("div", Y8, [ft(c, {
            player: e.player
        }, null, 8, ["player"])])])
    }
    const z8 = mt(V8, [
            ["render", q8]
        ]),
        X8 = ze({
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

    function J8(e, t, n, r, s, o) {
        const c = mn("t");
        return e.player && e.player.status ? (z(), Z("div", {
            key: 0,
            class: Ye(["post-game-actions", {
                vip: e.player.hasControls
            }])
        }, [!e.messageLocation || e.messageLocation === "top" ? je((z(), Z("p", {
            key: 0,
            class: Ye(e.localClasses.message)
        }, null, 2)), [
            [c, "POST_GAME.PLAY_AGAIN"]
        ]) : we("", !0), e.player.hasControls ? (z(), Z(ut, {
            key: 1
        }, [e.player.status === "waiting" ? je((z(), Z("button", {
            key: 0,
            class: Ye(e.localClasses.action),
            onClick: t[0] || (t[0] = (...u) => e.onSamePlayersClick && e.onSamePlayersClick(...u))
        }, null, 2)), [
            [c, "POST_GAME.BUTTON_SAME_PLAYERS"]
        ]) : we("", !0), e.player.status === "waiting" ? je((z(), Z("button", {
            key: 1,
            class: Ye(e.localClasses.action),
            onClick: t[1] || (t[1] = (...u) => e.onNewPlayersClick && e.onNewPlayersClick(...u))
        }, null, 2)), [
            [c, "POST_GAME.BUTTON_NEW_PLAYERS"]
        ]) : we("", !0), e.player.status === "countdown" ? je((z(), Z("button", {
            key: 2,
            class: Ye(e.localClasses.action),
            onClick: t[2] || (t[2] = (...u) => e.onCancelClick && e.onCancelClick(...u))
        }, null, 2)), [
            [c, "LOBBY.BUTTON_CANCEL"]
        ]) : we("", !0)], 64)) : e.player.gamepadStart ? je((z(), Z("p", {
            key: 2,
            class: Ye(e.localClasses.status)
        }, null, 2)), [
            [c, "LOBBY.WAITING_FOR_GAMEPAD"]
        ]) : (z(), Z("p", {
            key: 3,
            class: Ye(e.localClasses.status)
        }, Ie(e.waitingForVIPText), 3)), e.messageLocation === "bottom" ? je((z(), Z("p", {
            key: 4,
            class: Ye(e.localClasses.message)
        }, null, 2)), [
            [c, "POST_GAME.PLAY_AGAIN"]
        ]) : we("", !0)], 2)) : we("", !0)
    }
    const Q8 = mt(X8, [
            ["render", J8]
        ]),
        Z8 = ze({
            components: {
                PostGameActions: Q8
            },
            props: {
                player: Object
            }
        }),
        e4 = {
            class: "post-game"
        },
        t4 = {
            class: "constrain"
        };

    function n4(e, t, n, r, s, o) {
        const c = Bt("PostGameActions");
        return z(), Z("div", e4, [Y("div", t4, [ft(c, {
            player: e.player
        }, null, 8, ["player"])])])
    }
    const r4 = mt(Z8, [
            ["render", n4]
        ]),
        i4 = ze({
            props: {
                modelValue: String,
                sanitizers: Array
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
                    if (this.sanitizers && (t.value = VS.withTypes(t.value, [...this.sanitizers])), t.value.length > n) {
                        t.value = t.value.substring(0, n);
                        return
                    }
                    this.$emit("update:modelValue", t.value), await this.$nextTick(), t.value !== this.modelValue && (t.value = this.modelValue)
                }
            }
        }),
        s4 = ["value"];

    function a4(e, t, n, r, s, o) {
        return z(), Z("input", {
            ref: "input",
            value: e.modelValue,
            onInput: t[0] || (t[0] = (...c) => e.onInput && e.onInput(...c))
        }, null, 40, s4)
    }
    const YS = mt(i4, [
        ["render", a4]
    ]);
    var Yi, $c, Za = typeof Map == "function" ? new Map : (Yi = [], $c = [], {
            has: function(e) {
                return Yi.indexOf(e) > -1
            },
            get: function(e) {
                return $c[Yi.indexOf(e)]
            },
            set: function(e, t) {
                Yi.indexOf(e) === -1 && (Yi.push(e), $c.push(t))
            },
            delete: function(e) {
                var t = Yi.indexOf(e);
                t > -1 && (Yi.splice(t, 1), $c.splice(t, 1))
            }
        }),
        qS = function(e) {
            return new Event(e, {
                bubbles: !0
            })
        };
    try {
        new Event("test")
    } catch {
        qS = function(t) {
            var n = document.createEvent("Event");
            return n.initEvent(t, !0, !1), n
        }
    }

    function o4(e) {
        var t = Za.get(e);
        t && t.destroy()
    }

    function c4(e) {
        var t = Za.get(e);
        t && t.update()
    }
    var Ka = null;
    typeof window > "u" || typeof window.getComputedStyle != "function" ? ((Ka = function(e) {
        return e
    }).destroy = function(e) {
        return e
    }, Ka.update = function(e) {
        return e
    }) : ((Ka = function(e, t) {
        return e && Array.prototype.forEach.call(e.length ? e : [e], function(n) {
            return function(r) {
                if (r && r.nodeName && r.nodeName === "TEXTAREA" && !Za.has(r)) {
                    var s, o = null,
                        c = null,
                        u = null,
                        f = function() {
                            r.clientWidth !== c && b()
                        },
                        d = function(I) {
                            window.removeEventListener("resize", f, !1), r.removeEventListener("input", b, !1), r.removeEventListener("keyup", b, !1), r.removeEventListener("autosize:destroy", d, !1), r.removeEventListener("autosize:update", b, !1), Object.keys(I).forEach(function(R) {
                                r.style[R] = I[R]
                            }), Za.delete(r)
                        }.bind(r, {
                            height: r.style.height,
                            resize: r.style.resize,
                            overflowY: r.style.overflowY,
                            overflowX: r.style.overflowX,
                            wordWrap: r.style.wordWrap
                        });
                    r.addEventListener("autosize:destroy", d, !1), "onpropertychange" in r && "oninput" in r && r.addEventListener("keyup", b, !1), window.addEventListener("resize", f, !1), r.addEventListener("input", b, !1), r.addEventListener("autosize:update", b, !1), r.style.overflowX = "hidden", r.style.wordWrap = "break-word", Za.set(r, {
                        destroy: d,
                        update: b
                    }), (s = window.getComputedStyle(r, null)).resize === "vertical" ? r.style.resize = "none" : s.resize === "both" && (r.style.resize = "horizontal"), o = s.boxSizing === "content-box" ? -(parseFloat(s.paddingTop) + parseFloat(s.paddingBottom)) : parseFloat(s.borderTopWidth) + parseFloat(s.borderBottomWidth), isNaN(o) && (o = 0), b()
                }

                function g(I) {
                    var R = r.style.width;
                    r.style.width = "0px", r.style.width = R, r.style.overflowY = I
                }

                function _() {
                    if (r.scrollHeight !== 0) {
                        var I = function(M) {
                                for (var W = []; M && M.parentNode && M.parentNode instanceof Element;) M.parentNode.scrollTop && W.push({
                                    node: M.parentNode,
                                    scrollTop: M.parentNode.scrollTop
                                }), M = M.parentNode;
                                return W
                            }(r),
                            R = document.documentElement && document.documentElement.scrollTop;
                        r.style.height = "", r.style.height = r.scrollHeight + o + "px", c = r.clientWidth, I.forEach(function(M) {
                            M.node.scrollTop = M.scrollTop
                        }), R && (document.documentElement.scrollTop = R)
                    }
                }

                function b() {
                    _();
                    var I = Math.round(parseFloat(r.style.height)),
                        R = window.getComputedStyle(r, null),
                        M = R.boxSizing === "content-box" ? Math.round(parseFloat(R.height)) : r.offsetHeight;
                    if (M < I ? R.overflowY === "hidden" && (g("scroll"), _(), M = R.boxSizing === "content-box" ? Math.round(parseFloat(window.getComputedStyle(r, null).height)) : r.offsetHeight) : R.overflowY !== "hidden" && (g("hidden"), _(), M = R.boxSizing === "content-box" ? Math.round(parseFloat(window.getComputedStyle(r, null).height)) : r.offsetHeight), u !== M) {
                        u = M;
                        var W = qS("autosize:resized");
                        try {
                            r.dispatchEvent(W)
                        } catch {}
                    }
                }
            }(n)
        }), e
    }).destroy = function(e) {
        return e && Array.prototype.forEach.call(e.length ? e : [e], o4), e
    }, Ka.update = function(e) {
        return e && Array.prototype.forEach.call(e.length ? e : [e], c4), e
    });
    var l4 = Ka,
        u4 = {
            exports: {}
        },
        Pc = function(e) {
            return e && e.Math == Math && e
        },
        Hn = Pc(typeof globalThis == "object" && globalThis) || Pc(typeof window == "object" && window) || Pc(typeof self == "object" && self) || Pc(typeof Ft == "object" && Ft) || function() {
            return this
        }() || Function("return this")(),
        dp = {},
        Vn = function(e) {
            try {
                return !!e()
            } catch {
                return !0
            }
        },
        f4 = Vn,
        Li = !f4(function() {
            return Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1] != 7
        }),
        d4 = Vn,
        hp = !d4(function() {
            var e = function() {}.bind();
            return typeof e != "function" || e.hasOwnProperty("prototype")
        }),
        h4 = hp,
        Dc = Function.prototype.call,
        $i = h4 ? Dc.bind(Dc) : function() {
            return Dc.apply(Dc, arguments)
        },
        zS = {},
        XS = {}.propertyIsEnumerable,
        JS = Object.getOwnPropertyDescriptor,
        p4 = JS && !XS.call({
            1: 2
        }, 1);
    zS.f = p4 ? function(t) {
        var n = JS(this, t);
        return !!n && n.enumerable
    } : XS;
    var QS = function(e, t) {
            return {
                enumerable: !(e & 1),
                configurable: !(e & 2),
                writable: !(e & 4),
                value: t
            }
        },
        ZS = hp,
        eO = Function.prototype,
        g4 = eO.bind,
        jd = eO.call,
        m4 = ZS && g4.bind(jd, jd),
        En = ZS ? function(e) {
            return e && m4(e)
        } : function(e) {
            return e && function() {
                return jd.apply(e, arguments)
            }
        },
        tO = En,
        v4 = tO({}.toString),
        E4 = tO("".slice),
        jl = function(e) {
            return E4(v4(e), 8, -1)
        },
        _4 = En,
        y4 = Vn,
        b4 = jl,
        xf = Object,
        T4 = _4("".split),
        S4 = y4(function() {
            return !xf("z").propertyIsEnumerable(0)
        }) ? function(e) {
            return b4(e) == "String" ? T4(e, "") : xf(e)
        } : xf,
        O4 = TypeError,
        wo = function(e) {
            if (e == null) throw O4("Can't call method on " + e);
            return e
        },
        A4 = S4,
        I4 = wo,
        Hl = function(e) {
            return A4(I4(e))
        },
        $n = function(e) {
            return typeof e == "function"
        },
        w4 = $n,
        ba = function(e) {
            return typeof e == "object" ? e !== null : w4(e)
        },
        Uf = Hn,
        C4 = $n,
        R4 = function(e) {
            return C4(e) ? e : void 0
        },
        Vl = function(e, t) {
            return arguments.length < 2 ? R4(Uf[e]) : Uf[e] && Uf[e][t]
        },
        N4 = En,
        nO = N4({}.isPrototypeOf),
        L4 = Vl,
        $4 = L4("navigator", "userAgent") || "",
        rO = Hn,
        Ff = $4,
        v_ = rO.process,
        E_ = rO.Deno,
        __ = v_ && v_.versions || E_ && E_.version,
        y_ = __ && __.v8,
        cr, cl;
    y_ && (cr = y_.split("."), cl = cr[0] > 0 && cr[0] < 4 ? 1 : +(cr[0] + cr[1]));
    !cl && Ff && (cr = Ff.match(/Edge\/(\d+)/), (!cr || cr[1] >= 74) && (cr = Ff.match(/Chrome\/(\d+)/), cr && (cl = +cr[1])));
    var P4 = cl,
        b_ = P4,
        D4 = Vn,
        iO = !!Object.getOwnPropertySymbols && !D4(function() {
            var e = Symbol();
            return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && b_ && b_ < 41
        }),
        k4 = iO,
        sO = k4 && !Symbol.sham && typeof Symbol.iterator == "symbol",
        M4 = Vl,
        x4 = $n,
        U4 = nO,
        F4 = sO,
        B4 = Object,
        aO = F4 ? function(e) {
            return typeof e == "symbol"
        } : function(e) {
            var t = M4("Symbol");
            return x4(t) && U4(t.prototype, B4(e))
        },
        G4 = String,
        W4 = function(e) {
            try {
                return G4(e)
            } catch {
                return "Object"
            }
        },
        j4 = $n,
        H4 = W4,
        V4 = TypeError,
        K4 = function(e) {
            if (j4(e)) return e;
            throw V4(H4(e) + " is not a function")
        },
        Y4 = K4,
        pp = function(e, t) {
            var n = e[t];
            return n == null ? void 0 : Y4(n)
        },
        Bf = $i,
        Gf = $n,
        Wf = ba,
        q4 = TypeError,
        z4 = function(e, t) {
            var n, r;
            if (t === "string" && Gf(n = e.toString) && !Wf(r = Bf(n, e)) || Gf(n = e.valueOf) && !Wf(r = Bf(n, e)) || t !== "string" && Gf(n = e.toString) && !Wf(r = Bf(n, e))) return r;
            throw q4("Can't convert object to primitive value")
        },
        Kl = {
            exports: {}
        },
        T_ = Hn,
        X4 = Object.defineProperty,
        gp = function(e, t) {
            try {
                X4(T_, e, {
                    value: t,
                    configurable: !0,
                    writable: !0
                })
            } catch {
                T_[e] = t
            }
            return t
        },
        J4 = Hn,
        Q4 = gp,
        S_ = "__core-js_shared__",
        Z4 = J4[S_] || Q4(S_, {}),
        mp = Z4,
        O_ = mp;
    (Kl.exports = function(e, t) {
        return O_[e] || (O_[e] = t !== void 0 ? t : {})
    })("versions", []).push({
        version: "3.23.4",
        mode: "global",
        copyright: "\xA9 2014-2022 Denis Pushkarev (zloirock.ru)",
        license: "https://github.com/zloirock/core-js/blob/v3.23.4/LICENSE",
        source: "https://github.com/zloirock/core-js"
    });
    var e5 = wo,
        t5 = Object,
        oO = function(e) {
            return t5(e5(e))
        },
        n5 = En,
        r5 = oO,
        i5 = n5({}.hasOwnProperty),
        Pi = Object.hasOwn || function(t, n) {
            return i5(r5(t), n)
        },
        s5 = En,
        a5 = 0,
        o5 = Math.random(),
        c5 = s5(1 .toString),
        cO = function(e) {
            return "Symbol(" + (e === void 0 ? "" : e) + ")_" + c5(++a5 + o5, 36)
        },
        l5 = Hn,
        u5 = Kl.exports,
        A_ = Pi,
        f5 = cO,
        I_ = iO,
        lO = sO,
        $s = u5("wks"),
        us = l5.Symbol,
        w_ = us && us.for,
        d5 = lO ? us : us && us.withoutSetter || f5,
        gs = function(e) {
            if (!A_($s, e) || !(I_ || typeof $s[e] == "string")) {
                var t = "Symbol." + e;
                I_ && A_(us, e) ? $s[e] = us[e] : lO && w_ ? $s[e] = w_(t) : $s[e] = d5(t)
            }
            return $s[e]
        },
        h5 = $i,
        C_ = ba,
        R_ = aO,
        p5 = pp,
        g5 = z4,
        m5 = gs,
        v5 = TypeError,
        E5 = m5("toPrimitive"),
        _5 = function(e, t) {
            if (!C_(e) || R_(e)) return e;
            var n = p5(e, E5),
                r;
            if (n) {
                if (t === void 0 && (t = "default"), r = h5(n, e, t), !C_(r) || R_(r)) return r;
                throw v5("Can't convert object to primitive value")
            }
            return t === void 0 && (t = "number"), g5(e, t)
        },
        y5 = _5,
        b5 = aO,
        uO = function(e) {
            var t = y5(e, "string");
            return b5(t) ? t : t + ""
        },
        T5 = Hn,
        N_ = ba,
        Hd = T5.document,
        S5 = N_(Hd) && N_(Hd.createElement),
        fO = function(e) {
            return S5 ? Hd.createElement(e) : {}
        },
        O5 = Li,
        A5 = Vn,
        I5 = fO,
        dO = !O5 && !A5(function() {
            return Object.defineProperty(I5("div"), "a", {
                get: function() {
                    return 7
                }
            }).a != 7
        }),
        w5 = Li,
        C5 = $i,
        R5 = zS,
        N5 = QS,
        L5 = Hl,
        $5 = uO,
        P5 = Pi,
        D5 = dO,
        L_ = Object.getOwnPropertyDescriptor;
    dp.f = w5 ? L_ : function(t, n) {
        if (t = L5(t), n = $5(n), D5) try {
            return L_(t, n)
        } catch {}
        if (P5(t, n)) return N5(!C5(R5.f, t, n), t[n])
    };
    var Co = {},
        k5 = Li,
        M5 = Vn,
        hO = k5 && M5(function() {
            return Object.defineProperty(function() {}, "prototype", {
                value: 42,
                writable: !1
            }).prototype != 42
        }),
        x5 = ba,
        U5 = String,
        F5 = TypeError,
        ms = function(e) {
            if (x5(e)) return e;
            throw F5(U5(e) + " is not an object")
        },
        B5 = Li,
        G5 = dO,
        W5 = hO,
        kc = ms,
        $_ = uO,
        j5 = TypeError,
        jf = Object.defineProperty,
        H5 = Object.getOwnPropertyDescriptor,
        Hf = "enumerable",
        Vf = "configurable",
        Kf = "writable";
    Co.f = B5 ? W5 ? function(t, n, r) {
        if (kc(t), n = $_(n), kc(r), typeof t == "function" && n === "prototype" && "value" in r && Kf in r && !r[Kf]) {
            var s = H5(t, n);
            s && s[Kf] && (t[n] = r.value, r = {
                configurable: Vf in r ? r[Vf] : s[Vf],
                enumerable: Hf in r ? r[Hf] : s[Hf],
                writable: !1
            })
        }
        return jf(t, n, r)
    } : jf : function(t, n, r) {
        if (kc(t), n = $_(n), kc(r), G5) try {
            return jf(t, n, r)
        } catch {}
        if ("get" in r || "set" in r) throw j5("Accessors not supported");
        return "value" in r && (t[n] = r.value), t
    };
    var V5 = Li,
        K5 = Co,
        Y5 = QS,
        vp = V5 ? function(e, t, n) {
            return K5.f(e, t, Y5(1, n))
        } : function(e, t, n) {
            return e[t] = n, e
        },
        pO = {
            exports: {}
        },
        Vd = Li,
        q5 = Pi,
        gO = Function.prototype,
        z5 = Vd && Object.getOwnPropertyDescriptor,
        Ep = q5(gO, "name"),
        X5 = Ep && function() {}.name === "something",
        J5 = Ep && (!Vd || Vd && z5(gO, "name").configurable),
        Q5 = {
            EXISTS: Ep,
            PROPER: X5,
            CONFIGURABLE: J5
        },
        Z5 = En,
        eV = $n,
        Kd = mp,
        tV = Z5(Function.toString);
    eV(Kd.inspectSource) || (Kd.inspectSource = function(e) {
        return tV(e)
    });
    var mO = Kd.inspectSource,
        nV = Hn,
        rV = $n,
        iV = mO,
        P_ = nV.WeakMap,
        sV = rV(P_) && /native code/.test(iV(P_)),
        aV = Kl.exports,
        oV = cO,
        D_ = aV("keys"),
        vO = function(e) {
            return D_[e] || (D_[e] = oV(e))
        },
        _p = {},
        cV = sV,
        EO = Hn,
        Yf = En,
        lV = ba,
        uV = vp,
        qf = Pi,
        zf = mp,
        fV = vO,
        dV = _p,
        k_ = "Object already initialized",
        Yd = EO.TypeError,
        hV = EO.WeakMap,
        ll, go, ul, pV = function(e) {
            return ul(e) ? go(e) : ll(e, {})
        },
        gV = function(e) {
            return function(t) {
                var n;
                if (!lV(t) || (n = go(t)).type !== e) throw Yd("Incompatible receiver, " + e + " required");
                return n
            }
        };
    if (cV || zf.state) {
        var qi = zf.state || (zf.state = new hV),
            mV = Yf(qi.get),
            M_ = Yf(qi.has),
            vV = Yf(qi.set);
        ll = function(e, t) {
            if (M_(qi, e)) throw new Yd(k_);
            return t.facade = e, vV(qi, e, t), t
        }, go = function(e) {
            return mV(qi, e) || {}
        }, ul = function(e) {
            return M_(qi, e)
        }
    } else {
        var Ps = fV("state");
        dV[Ps] = !0, ll = function(e, t) {
            if (qf(e, Ps)) throw new Yd(k_);
            return t.facade = e, uV(e, Ps, t), t
        }, go = function(e) {
            return qf(e, Ps) ? e[Ps] : {}
        }, ul = function(e) {
            return qf(e, Ps)
        }
    }
    var _O = {
            set: ll,
            get: go,
            has: ul,
            enforce: pV,
            getterFor: gV
        },
        EV = Vn,
        _V = $n,
        Mc = Pi,
        qd = Li,
        yV = Q5.CONFIGURABLE,
        bV = mO,
        yO = _O,
        TV = yO.enforce,
        SV = yO.get,
        qc = Object.defineProperty,
        OV = qd && !EV(function() {
            return qc(function() {}, "length", {
                value: 8
            }).length !== 8
        }),
        AV = String(String).split("String"),
        IV = pO.exports = function(e, t, n) {
            String(t).slice(0, 7) === "Symbol(" && (t = "[" + String(t).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), n && n.getter && (t = "get " + t), n && n.setter && (t = "set " + t), (!Mc(e, "name") || yV && e.name !== t) && (qd ? qc(e, "name", {
                value: t,
                configurable: !0
            }) : e.name = t), OV && n && Mc(n, "arity") && e.length !== n.arity && qc(e, "length", {
                value: n.arity
            });
            try {
                n && Mc(n, "constructor") && n.constructor ? qd && qc(e, "prototype", {
                    writable: !1
                }) : e.prototype && (e.prototype = void 0)
            } catch {}
            var r = TV(e);
            return Mc(r, "source") || (r.source = AV.join(typeof t == "string" ? t : "")), e
        };
    Function.prototype.toString = IV(function() {
        return _V(this) && SV(this).source || bV(this)
    }, "toString");
    var wV = $n,
        CV = Co,
        RV = pO.exports,
        NV = gp,
        bO = function(e, t, n, r) {
            r || (r = {});
            var s = r.enumerable,
                o = r.name !== void 0 ? r.name : t;
            if (wV(n) && RV(n, o, r), r.global) s ? e[t] = n : NV(t, n);
            else {
                try {
                    r.unsafe ? e[t] && (s = !0) : delete e[t]
                } catch {}
                s ? e[t] = n : CV.f(e, t, {
                    value: n,
                    enumerable: !1,
                    configurable: !r.nonConfigurable,
                    writable: !r.nonWritable
                })
            }
            return e
        },
        TO = {},
        LV = Math.ceil,
        $V = Math.floor,
        PV = Math.trunc || function(t) {
            var n = +t;
            return (n > 0 ? $V : LV)(n)
        },
        DV = PV,
        Yl = function(e) {
            var t = +e;
            return t !== t || t === 0 ? 0 : DV(t)
        },
        kV = Yl,
        MV = Math.max,
        xV = Math.min,
        UV = function(e, t) {
            var n = kV(e);
            return n < 0 ? MV(n + t, 0) : xV(n, t)
        },
        FV = Yl,
        BV = Math.min,
        SO = function(e) {
            return e > 0 ? BV(FV(e), 9007199254740991) : 0
        },
        GV = SO,
        WV = function(e) {
            return GV(e.length)
        },
        jV = Hl,
        HV = UV,
        VV = WV,
        x_ = function(e) {
            return function(t, n, r) {
                var s = jV(t),
                    o = VV(s),
                    c = HV(r, o),
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
        KV = {
            includes: x_(!0),
            indexOf: x_(!1)
        },
        YV = En,
        Xf = Pi,
        qV = Hl,
        zV = KV.indexOf,
        XV = _p,
        U_ = YV([].push),
        OO = function(e, t) {
            var n = qV(e),
                r = 0,
                s = [],
                o;
            for (o in n) !Xf(XV, o) && Xf(n, o) && U_(s, o);
            for (; t.length > r;) Xf(n, o = t[r++]) && (~zV(s, o) || U_(s, o));
            return s
        },
        yp = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
        JV = OO,
        QV = yp,
        ZV = QV.concat("length", "prototype");
    TO.f = Object.getOwnPropertyNames || function(t) {
        return JV(t, ZV)
    };
    var AO = {};
    AO.f = Object.getOwnPropertySymbols;
    var eK = Vl,
        tK = En,
        nK = TO,
        rK = AO,
        iK = ms,
        sK = tK([].concat),
        aK = eK("Reflect", "ownKeys") || function(t) {
            var n = nK.f(iK(t)),
                r = rK.f;
            return r ? sK(n, r(t)) : n
        },
        F_ = Pi,
        oK = aK,
        cK = dp,
        lK = Co,
        uK = function(e, t, n) {
            for (var r = oK(t), s = lK.f, o = cK.f, c = 0; c < r.length; c++) {
                var u = r[c];
                !F_(e, u) && !(n && F_(n, u)) && s(e, u, o(t, u))
            }
        },
        fK = Vn,
        dK = $n,
        hK = /#|\.prototype\./,
        Ro = function(e, t) {
            var n = gK[pK(e)];
            return n == vK ? !0 : n == mK ? !1 : dK(t) ? fK(t) : !!t
        },
        pK = Ro.normalize = function(e) {
            return String(e).replace(hK, ".").toLowerCase()
        },
        gK = Ro.data = {},
        mK = Ro.NATIVE = "N",
        vK = Ro.POLYFILL = "P",
        EK = Ro,
        Jf = Hn,
        _K = dp.f,
        yK = vp,
        bK = bO,
        TK = gp,
        SK = uK,
        OK = EK,
        IO = function(e, t) {
            var n = e.target,
                r = e.global,
                s = e.stat,
                o, c, u, f, d, g;
            if (r ? c = Jf : s ? c = Jf[n] || TK(n, {}) : c = (Jf[n] || {}).prototype, c)
                for (u in t) {
                    if (d = t[u], e.dontCallGetSet ? (g = _K(c, u), f = g && g.value) : f = c[u], o = OK(r ? u : n + (s ? "." : "#") + u, e.forced), !o && f !== void 0) {
                        if (typeof d == typeof f) continue;
                        SK(d, f)
                    }(e.sham || f && f.sham) && yK(d, "sham", !0), bK(c, u, d, e)
                }
        },
        AK = ba,
        IK = jl,
        wK = gs,
        CK = wK("match"),
        RK = function(e) {
            var t;
            return AK(e) && ((t = e[CK]) !== void 0 ? !!t : IK(e) == "RegExp")
        },
        NK = gs,
        LK = NK("toStringTag"),
        wO = {};
    wO[LK] = "z";
    var $K = String(wO) === "[object z]",
        PK = $K,
        DK = $n,
        zc = jl,
        kK = gs,
        MK = kK("toStringTag"),
        xK = Object,
        UK = zc(function() {
            return arguments
        }()) == "Arguments",
        FK = function(e, t) {
            try {
                return e[t]
            } catch {}
        },
        BK = PK ? zc : function(e) {
            var t, n, r;
            return e === void 0 ? "Undefined" : e === null ? "Null" : typeof(n = FK(t = xK(e), MK)) == "string" ? n : UK ? zc(t) : (r = zc(t)) == "Object" && DK(t.callee) ? "Arguments" : r
        },
        GK = BK,
        WK = String,
        ql = function(e) {
            if (GK(e) === "Symbol") throw TypeError("Cannot convert a Symbol value to a string");
            return WK(e)
        },
        jK = ms,
        CO = function() {
            var e = jK(this),
                t = "";
            return e.hasIndices && (t += "d"), e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.unicodeSets && (t += "v"), e.sticky && (t += "y"), t
        },
        HK = $i,
        VK = Pi,
        KK = nO,
        YK = CO,
        B_ = RegExp.prototype,
        qK = function(e) {
            var t = e.flags;
            return t === void 0 && !("flags" in B_) && !VK(e, "flags") && KK(B_, e) ? HK(YK, e) : t
        },
        bp = En,
        zK = oO,
        XK = Math.floor,
        Qf = bp("".charAt),
        JK = bp("".replace),
        Zf = bp("".slice),
        QK = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
        ZK = /\$([$&'`]|\d{1,2})/g,
        RO = function(e, t, n, r, s, o) {
            var c = n + e.length,
                u = r.length,
                f = ZK;
            return s !== void 0 && (s = zK(s), f = QK), JK(o, f, function(d, g) {
                var _;
                switch (Qf(g, 0)) {
                    case "$":
                        return "$";
                    case "&":
                        return e;
                    case "`":
                        return Zf(t, 0, n);
                    case "'":
                        return Zf(t, c);
                    case "<":
                        _ = s[Zf(g, 1, -1)];
                        break;
                    default:
                        var b = +g;
                        if (b === 0) return d;
                        if (b > u) {
                            var I = XK(b / 10);
                            return I === 0 ? d : I <= u ? r[I - 1] === void 0 ? Qf(g, 1) : r[I - 1] + Qf(g, 1) : d
                        }
                        _ = r[b - 1]
                }
                return _ === void 0 ? "" : _
            })
        },
        e6 = IO,
        t6 = $i,
        Tp = En,
        G_ = wo,
        n6 = $n,
        r6 = RK,
        Ha = ql,
        i6 = pp,
        s6 = qK,
        a6 = RO,
        o6 = gs,
        c6 = o6("replace"),
        l6 = TypeError,
        NO = Tp("".indexOf);
    Tp("".replace);
    var W_ = Tp("".slice),
        u6 = Math.max,
        j_ = function(e, t, n) {
            return n > e.length ? -1 : t === "" ? n : NO(e, t, n)
        };
    e6({
        target: "String",
        proto: !0
    }, {
        replaceAll: function(t, n) {
            var r = G_(this),
                s, o, c, u, f, d, g, _, b, I = 0,
                R = 0,
                M = "";
            if (t != null) {
                if (s = r6(t), s && (o = Ha(G_(s6(t))), !~NO(o, "g"))) throw l6("`.replaceAll` does not allow non-global regexes");
                if (c = i6(t, c6), c) return t6(c, t, r, n)
            }
            for (u = Ha(r), f = Ha(t), d = n6(n), d || (n = Ha(n)), g = f.length, _ = u6(1, g), I = j_(u, f, 0); I !== -1;) b = d ? Ha(n(f, I, u)) : a6(f, u, I, [], void 0, n), M += W_(u, R, I) + b, R = I + g, I = j_(u, f, I + _);
            return R < u.length && (M += W_(u, R)), M
        }
    });
    var Sp = Vn,
        f6 = Hn,
        Op = f6.RegExp,
        Ap = Sp(function() {
            var e = Op("a", "y");
            return e.lastIndex = 2, e.exec("abcd") != null
        }),
        d6 = Ap || Sp(function() {
            return !Op("a", "y").sticky
        }),
        h6 = Ap || Sp(function() {
            var e = Op("^r", "gy");
            return e.lastIndex = 2, e.exec("str") != null
        }),
        p6 = {
            BROKEN_CARET: h6,
            MISSED_STICKY: d6,
            UNSUPPORTED_Y: Ap
        },
        LO = {},
        g6 = OO,
        m6 = yp,
        v6 = Object.keys || function(t) {
            return g6(t, m6)
        },
        E6 = Li,
        _6 = hO,
        y6 = Co,
        b6 = ms,
        T6 = Hl,
        S6 = v6;
    LO.f = E6 && !_6 ? Object.defineProperties : function(t, n) {
        b6(t);
        for (var r = T6(n), s = S6(n), o = s.length, c = 0, u; o > c;) y6.f(t, u = s[c++], r[u]);
        return t
    };
    var O6 = Vl,
        A6 = O6("document", "documentElement"),
        I6 = ms,
        w6 = LO,
        H_ = yp,
        C6 = _p,
        R6 = A6,
        N6 = fO,
        L6 = vO,
        V_ = ">",
        K_ = "<",
        zd = "prototype",
        Xd = "script",
        $O = L6("IE_PROTO"),
        ed = function() {},
        PO = function(e) {
            return K_ + Xd + V_ + e + K_ + "/" + Xd + V_
        },
        Y_ = function(e) {
            e.write(PO("")), e.close();
            var t = e.parentWindow.Object;
            return e = null, t
        },
        $6 = function() {
            var e = N6("iframe"),
                t = "java" + Xd + ":",
                n;
            return e.style.display = "none", R6.appendChild(e), e.src = String(t), n = e.contentWindow.document, n.open(), n.write(PO("document.F=Object")), n.close(), n.F
        },
        xc, Xc = function() {
            try {
                xc = new ActiveXObject("htmlfile")
            } catch {}
            Xc = typeof document < "u" ? document.domain && xc ? Y_(xc) : $6() : Y_(xc);
            for (var e = H_.length; e--;) delete Xc[zd][H_[e]];
            return Xc()
        };
    C6[$O] = !0;
    var P6 = Object.create || function(t, n) {
            var r;
            return t !== null ? (ed[zd] = I6(t), r = new ed, ed[zd] = null, r[$O] = t) : r = Xc(), n === void 0 ? r : w6.f(r, n)
        },
        D6 = Vn,
        k6 = Hn,
        M6 = k6.RegExp,
        x6 = D6(function() {
            var e = M6(".", "s");
            return !(e.dotAll && e.exec(`
`) && e.flags === "s")
        }),
        U6 = Vn,
        F6 = Hn,
        B6 = F6.RegExp,
        G6 = U6(function() {
            var e = B6("(?<a>b)", "g");
            return e.exec("b").groups.a !== "b" || "b".replace(e, "$<a>c") !== "bc"
        }),
        Fs = $i,
        zl = En,
        W6 = ql,
        j6 = CO,
        H6 = p6,
        V6 = Kl.exports,
        K6 = P6,
        Y6 = _O.get,
        q6 = x6,
        z6 = G6,
        X6 = V6("native-string-replace", String.prototype.replace),
        fl = RegExp.prototype.exec,
        Jd = fl,
        J6 = zl("".charAt),
        Q6 = zl("".indexOf),
        Z6 = zl("".replace),
        td = zl("".slice),
        Qd = function() {
            var e = /a/,
                t = /b*/g;
            return Fs(fl, e, "a"), Fs(fl, t, "a"), e.lastIndex !== 0 || t.lastIndex !== 0
        }(),
        DO = H6.BROKEN_CARET,
        Zd = /()??/.exec("")[1] !== void 0,
        eY = Qd || Zd || DO || q6 || z6;
    eY && (Jd = function(t) {
        var n = this,
            r = Y6(n),
            s = W6(t),
            o = r.raw,
            c, u, f, d, g, _, b;
        if (o) return o.lastIndex = n.lastIndex, c = Fs(Jd, o, s), n.lastIndex = o.lastIndex, c;
        var I = r.groups,
            R = DO && n.sticky,
            M = Fs(j6, n),
            W = n.source,
            C = 0,
            V = s;
        if (R && (M = Z6(M, "y", ""), Q6(M, "g") === -1 && (M += "g"), V = td(s, n.lastIndex), n.lastIndex > 0 && (!n.multiline || n.multiline && J6(s, n.lastIndex - 1) !== `
`) && (W = "(?: " + W + ")", V = " " + V, C++), u = new RegExp("^(?:" + W + ")", M)), Zd && (u = new RegExp("^" + W + "$(?!\\s)", M)), Qd && (f = n.lastIndex), d = Fs(fl, R ? u : n, V), R ? d ? (d.input = td(d.input, C), d[0] = td(d[0], C), d.index = n.lastIndex, n.lastIndex += d[0].length) : n.lastIndex = 0 : Qd && d && (n.lastIndex = n.global ? d.index + d[0].length : f), Zd && d && d.length > 1 && Fs(X6, d[0], u, function() {
                for (g = 1; g < arguments.length - 2; g++) arguments[g] === void 0 && (d[g] = void 0)
            }), d && I)
            for (d.groups = _ = K6(null), g = 0; g < I.length; g++) b = I[g], _[b[0]] = d[b[1]];
        return d
    });
    var Ip = Jd,
        tY = IO,
        q_ = Ip;
    tY({
        target: "RegExp",
        proto: !0,
        forced: /./.exec !== q_
    }, {
        exec: q_
    });
    var nY = hp,
        kO = Function.prototype,
        z_ = kO.apply,
        X_ = kO.call,
        rY = typeof Reflect == "object" && Reflect.apply || (nY ? X_.bind(z_) : function() {
            return X_.apply(z_, arguments)
        }),
        J_ = En,
        Q_ = bO,
        iY = Ip,
        Z_ = Vn,
        MO = gs,
        sY = vp,
        aY = MO("species"),
        nd = RegExp.prototype,
        oY = function(e, t, n, r) {
            var s = MO(e),
                o = !Z_(function() {
                    var d = {};
                    return d[s] = function() {
                        return 7
                    }, "" [e](d) != 7
                }),
                c = o && !Z_(function() {
                    var d = !1,
                        g = /a/;
                    return e === "split" && (g = {}, g.constructor = {}, g.constructor[aY] = function() {
                        return g
                    }, g.flags = "", g[s] = /./ [s]), g.exec = function() {
                        return d = !0, null
                    }, g[s](""), !d
                });
            if (!o || !c || n) {
                var u = J_(/./ [s]),
                    f = t(s, "" [e], function(d, g, _, b, I) {
                        var R = J_(d),
                            M = g.exec;
                        return M === iY || M === nd.exec ? o && !I ? {
                            done: !0,
                            value: u(g, _, b)
                        } : {
                            done: !0,
                            value: R(_, g, b)
                        } : {
                            done: !1
                        }
                    });
                Q_(String.prototype, e, f[0]), Q_(nd, s, f[1])
            }
            r && sY(nd[s], "sham", !0)
        },
        wp = En,
        cY = Yl,
        lY = ql,
        uY = wo,
        fY = wp("".charAt),
        ey = wp("".charCodeAt),
        dY = wp("".slice),
        ty = function(e) {
            return function(t, n) {
                var r = lY(uY(t)),
                    s = cY(n),
                    o = r.length,
                    c, u;
                return s < 0 || s >= o ? e ? "" : void 0 : (c = ey(r, s), c < 55296 || c > 56319 || s + 1 === o || (u = ey(r, s + 1)) < 56320 || u > 57343 ? e ? fY(r, s) : c : e ? dY(r, s, s + 2) : (c - 55296 << 10) + (u - 56320) + 65536)
            }
        },
        hY = {
            codeAt: ty(!1),
            charAt: ty(!0)
        },
        pY = hY.charAt,
        gY = function(e, t, n) {
            return t + (n ? pY(e, t).length : 1)
        },
        ny = $i,
        mY = ms,
        vY = $n,
        EY = jl,
        _Y = Ip,
        yY = TypeError,
        bY = function(e, t) {
            var n = e.exec;
            if (vY(n)) {
                var r = ny(n, e, t);
                return r !== null && mY(r), r
            }
            if (EY(e) === "RegExp") return ny(_Y, e, t);
            throw yY("RegExp#exec called on incompatible receiver")
        },
        TY = rY,
        ry = $i,
        Xl = En,
        SY = oY,
        OY = Vn,
        AY = ms,
        IY = $n,
        wY = Yl,
        CY = SO,
        Ds = ql,
        RY = wo,
        NY = gY,
        LY = pp,
        $Y = RO,
        PY = bY,
        DY = gs,
        eh = DY("replace"),
        kY = Math.max,
        MY = Math.min,
        xY = Xl([].concat),
        rd = Xl([].push),
        iy = Xl("".indexOf),
        sy = Xl("".slice),
        UY = function(e) {
            return e === void 0 ? e : String(e)
        },
        FY = function() {
            return "a".replace(/./, "$0") === "$0"
        }(),
        ay = function() {
            return /./ [eh] ? /./ [eh]("a", "$0") === "" : !1
        }(),
        BY = !OY(function() {
            var e = /./;
            return e.exec = function() {
                var t = [];
                return t.groups = {
                    a: "7"
                }, t
            }, "".replace(e, "$<a>") !== "7"
        });
    SY("replace", function(e, t, n) {
        var r = ay ? "$" : "$0";
        return [function(o, c) {
            var u = RY(this),
                f = o == null ? void 0 : LY(o, eh);
            return f ? ry(f, o, u, c) : ry(t, Ds(u), o, c)
        }, function(s, o) {
            var c = AY(this),
                u = Ds(s);
            if (typeof o == "string" && iy(o, r) === -1 && iy(o, "$<") === -1) {
                var f = n(t, c, u, o);
                if (f.done) return f.value
            }
            var d = IY(o);
            d || (o = Ds(o));
            var g = c.global;
            if (g) {
                var _ = c.unicode;
                c.lastIndex = 0
            }
            for (var b = [];;) {
                var I = PY(c, u);
                if (I === null || (rd(b, I), !g)) break;
                var R = Ds(I[0]);
                R === "" && (c.lastIndex = NY(u, CY(c.lastIndex), _))
            }
            for (var M = "", W = 0, C = 0; C < b.length; C++) {
                I = b[C];
                for (var V = Ds(I[0]), q = kY(MY(wY(I.index), u.length), 0), j = [], G = 1; G < I.length; G++) rd(j, UY(I[G]));
                var se = I.groups;
                if (d) {
                    var ce = xY([V], j, q, u);
                    se !== void 0 && rd(ce, se);
                    var le = Ds(TY(o, void 0, ce))
                } else le = $Y(V, u, q, j, se, o);
                q >= W && (M += sy(u, W, q) + le, W = q + V.length)
            }
            return M + sy(u, W)
        }]
    }, !BY || !FY || ay);
    var GY = Hn,
        WY = En,
        jY = function(e, t) {
            return WY(GY[e].prototype[t])
        },
        HY = jY,
        VY = HY("String", "replaceAll"),
        KY = VY,
        YY = KY,
        qY = YY,
        zY = qY,
        XY = zY,
        JY = XY;
    (function(e) {
        e.exports = JY
    })(u4);
    const QY = ze({
            props: {
                autosize: Boolean,
                modelValue: String,
                rows: {
                    type: Number,
                    default: 1
                },
                sanitizers: Array
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
                this.autosize && l4(this.$refs.textarea)
            },
            methods: {
                focus() {
                    this.$refs.textarea.focus()
                },
                async onInput(e) {
                    const t = e.target;
                    if ((t == null ? void 0 : t.value) == null) return;
                    const n = t.maxLength === -1 ? Number.MAX_SAFE_INTEGER : t.maxLength,
                        r = t.value.split(`
`);
                    if (r.length > this.rows) {
                        let s = "";
                        for (let o = 0; o < this.rows - 1; o++) s += `${r[o]}
`;
                        s += r.slice(this.rows - 1).join(" ").replaceAll(`
`, ""), t.value = s
                    }
                    if (this.sanitizers && (t.value = VS.withTypes(t.value, [...this.sanitizers])), t.value.length > n) {
                        t.value = t.value.substring(0, n);
                        return
                    }
                    this.$emit("update:modelValue", t.value), await this.$nextTick(), t.value !== this.modelValue && (t.value = this.modelValue)
                },
                onKeypressEnter(e) {
                    this.$emit("keypress", e)
                }
            }
        }),
        ZY = ["rows", "value"];

    function eq(e, t, n, r, s, o) {
        return z(), Z("textarea", {
            ref: "textarea",
            rows: e.rows,
            value: e.modelValue,
            onInput: t[0] || (t[0] = (...c) => e.onInput && e.onInput(...c)),
            onKeypress: t[1] || (t[1] = os((...c) => e.onKeypressEnter && e.onKeypressEnter(...c), ["enter"]))
        }, null, 40, ZY)
    }
    const tq = mt(QY, [
            ["render", eq]
        ]),
        nq = ze({
            components: {
                Input: YS,
                TextArea: tq
            },
            props: {
                player: Object
            },
            data() {
                return {
                    value: ""
                }
            },
            methods: {
                isObjectResponseKey() {
                    if (!this.player.responseType) {
                        const e = this.$ecast.entities[this.player.responseKey];
                        if (e && e instanceof fp.ObjectEntity) return !0
                    }
                    return this.player.responseType === "object"
                },
                send() {
                    if (this.isObjectResponseKey()) {
                        this.sendAsObject();
                        return
                    }
                    this.sendAsText()
                },
                async sendAsObject() {
                    const e = this.player.send || {
                        action: this.player.action || "input"
                    };
                    e[this.player.key || "value"] = this.value;
                    try {
                        await this.$ecast.updateObject(this.player.responseKey, e)
                    } catch (t) {
                        this.$handleEcastError(t)
                    }
                },
                async sendAsText() {
                    try {
                        await this.$ecast.updateText(this.player.responseKey, this.value)
                    } catch (e) {
                        this.$handleEcastError(e)
                    }
                },
                async onSubmit() {
                    var e;
                    if (this.send(), !((e = this.player) != null && e.preventResponseLock)) try {
                        await this.$ecast.lock(this.player.responseKey)
                    } catch (t) {
                        this.$handleEcastError(t)
                    }
                },
                onWrite(e) {
                    this.value = e, this.player.live && this.send()
                }
            }
        }),
        rq = {
            class: "single-text-entry"
        },
        iq = {
            class: "constrain"
        },
        sq = {
            key: 0
        },
        aq = {
            key: 1,
            for: "input"
        };

    function oq(e, t, n, r, s, o) {
        const c = Bt("TextArea"),
            u = Bt("Input"),
            f = mn("bb");
        return z(), Z("div", rq, [Y("div", iq, [e.player.prompt ? je((z(), Z("p", sq, null, 512)), [
            [f, e.player.prompt]
        ]) : we("", !0), e.player.label ? je((z(), Z("label", aq, null, 512)), [
            [f, e.player.label]
        ]) : we("", !0), e.player.isMultiline ? (z(), Ln(c, {
            key: 2,
            id: "input",
            disabled: e.player.isDisabled,
            "model-value": e.value,
            placeholder: e.player.placeholder,
            rows: e.player.lines || 2,
            "onUpdate:modelValue": e.onWrite
        }, null, 8, ["disabled", "model-value", "placeholder", "rows", "onUpdate:modelValue"])) : (z(), Ln(u, {
            key: 3,
            id: "input",
            type: "text",
            disabled: e.player.isDisabled,
            placeholder: e.player.placeholder,
            "model-value": e.value,
            "onUpdate:modelValue": e.onWrite
        }, null, 8, ["disabled", "placeholder", "model-value", "onUpdate:modelValue"])), je(Y("button", {
            onClick: t[0] || (t[0] = Gt((...d) => e.onSubmit && e.onSubmit(...d), ["prevent"]))
        }, null, 512), [
            [f, e.player.submitText || "SUBMIT"]
        ])])])
    }
    const cq = mt(nq, [
            ["render", oq]
        ]),
        lq = ze({
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
                        if (e && e instanceof fp.ObjectEntity) return !0
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
        uq = {
            class: "multi-text-entry"
        },
        fq = {
            class: "constrain"
        },
        dq = {
            key: 0
        },
        hq = ["for"],
        pq = ["id", "value", "rows", "placeholder", "disabled", "onInput"],
        gq = ["id", "value", "placeholder", "disabled", "onInput"];

    function mq(e, t, n, r, s, o) {
        const c = mn("bb");
        return z(), Z("div", uq, [Y("div", fq, [e.player.prompt ? je((z(), Z("p", dq, null, 512)), [
            [c, e.player.prompt]
        ]) : we("", !0), (z(!0), Z(ut, null, Cr(e.player.inputs, (u, f) => (z(), Z(ut, null, [u.label ? je((z(), Z("label", {
            key: `label-${u.key}`,
            for: `input-${f}`
        }, null, 8, hq)), [
            [c, u.label]
        ]) : we("", !0), u.isMultiline ? (z(), Z("textarea", {
            id: `input-${f}`,
            key: `input-${f}`,
            value: e.values[f],
            rows: u.lines || 2,
            placeholder: u.placeholder,
            disabled: u.isDisabled,
            onInput: d => e.onValueInput(d, f)
        }, null, 40, pq)) : (z(), Z("input", {
            id: `input-${f}`,
            key: `input-${u.key}`,
            type: "text",
            value: e.values[f],
            placeholder: u.placeholder,
            disabled: u.isDisabled,
            onInput: d => e.onValueInput(d, f)
        }, null, 40, gq))], 64))), 256)), je(Y("button", {
            onClick: t[0] || (t[0] = Gt((...u) => e.onSubmitClick && e.onSubmitClick(...u), ["prevent"]))
        }, null, 512), [
            [c, e.player.submitText || "SUBMIT"]
        ])])])
    }
    const vq = mt(lq, [
            ["render", mq]
        ]),
        Eq = ze({
            props: {
                player: Object
            }
        }),
        _q = {
            class: "waiting"
        },
        yq = {
            class: "constrain"
        },
        bq = {
            key: 0
        };

    function Tq(e, t, n, r, s, o) {
        const c = mn("bb");
        return z(), Z("div", _q, [Y("div", yq, [e.player.message ? je((z(), Z("p", bq, null, 512)), [
            [c, e.player.message]
        ]) : we("", !0)])])
    }
    const Sq = mt(Eq, [
        ["render", Tq]
    ]);
    ze({
        components: {
            Choices: S8,
            Doodle: N8,
            Draw: x8,
            Lobby: z8,
            PostGame: r4,
            SingleTextEntry: cq,
            MultiTextEntry: vq,
            Waiting: Sq
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
                Si.galleryClick(this.artifact.categoryId, "post_game"), ra.setAsViewed(0)
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
            const e = yi();
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
        Jl = {},
        xO = {},
        Ql = {},
        Cp = {};
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
    })(Cp);
    Object.defineProperty(Ql, "__esModule", {
        value: !0
    });
    Ql.Tokenizer = void 0;
    var oi = Cp,
        Oq = function() {
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
                    var d = n.tags[f.content],
                        g = !0;
                    !d && !o ? f.convertToTextToken() : o ? f.type === oi.Token.Type.endTag && f.content === c ? (o = !1, s.push(e.createTextToken(u))) : (f.convertToTextToken(), u += f.content, g = !1) : d.noNesting && f.type === oi.Token.Type.startTag && (o = !0, c = f.content, u = ""), g && s.push(f)
                }), s
            }, e.prototype.getTokens = function(t) {
                for (var n = '\\[(/\\w*)\\]|\\[(\\w*)+(=(["])' + e.valueChars + "*\\4)?( (" + e.nameChars + '+)?=(["])(' + e.valueChars + "+)\\7)*\\]", r = new RegExp(n, "g"), s = [], o = r.exec(t), c = 0; o;) {
                    var u = o.index - c;
                    u > 0 && s.push(e.createTextToken(t.substr(c, u))), s.push(e.createTagToken(o)), c = r.lastIndex, o = r.exec(t)
                }
                var f = t.length - c;
                return f > 0 && s.push(e.createTextToken(t.substr(c, f))), s
            }, e.createTextToken = function(t) {
                return new oi.Token(oi.Token.Type.text, t)
            }, e.createTagToken = function(t) {
                if (!t[1]) {
                    for (var n = t[2], r = {}, s = new RegExp("(" + e.nameChars + '+)?=(["])(' + e.valueChars + "+)\\2", "g"), o = t[0].substr(1 + n.length, t[0].length - 2 - n.length), c = s.exec(o); c;) c[1] ? r[c[1]] = c[3] : r[n] = c[3], c = s.exec(o);
                    return new oi.Token(oi.Token.Type.startTag, n, r, t[0])
                }
                return new oi.Token(oi.Token.Type.endTag, t[1].substr(1, t[1].length - 1))
            }, e.nameChars = "[a-zA-Z0-9\\.\\-_:;/]", e.valueChars = "[a-zA-Z0-9\\.\\-_:;#/\\s]", e
        }();
    Ql.Tokenizer = Oq;
    (function(e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.ParseTree = void 0;
        var t = Ql,
            n = Cp,
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
                        d = new s({
                            type: s.Type.root,
                            content: o
                        });
                    return this.buildTreeFromTokens(d, f.reverse())
                }, s.buildTreeFromTokens = function(o, c, u) {
                    if (u === void 0 && (u = ""), !o) return null;
                    if (!c.length) return o;
                    var f = c.pop();
                    if (!f) return null;
                    if (f.type === n.Token.Type.text) {
                        var d = new s({
                            type: s.Type.text,
                            content: f.content
                        });
                        o.subTrees.push(d)
                    }
                    if (f.type === n.Token.Type.startTag) {
                        var g = f.content,
                            d = new s({
                                type: s.Type.tag,
                                content: g,
                                attributes: f.attributes
                            }),
                            _ = s.buildTreeFromTokens(d, c, g);
                        if (!_) return null;
                        o.subTrees.push(_)
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
    })(xO);
    var No = {};
    Object.defineProperty(No, "__esModule", {
        value: !0
    });
    No.Tag = void 0;
    var Aq = function() {
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
    No.Tag = Aq;
    Object.defineProperty(Jl, "__esModule", {
        value: !0
    });
    Jl.BBCodeParser = void 0;
    var oy = xO,
        cy = No,
        Iq = function() {
            function e(t, n) {
                this.options = n, this.escapeHTML = !1, this.tags = t, n && (this.escapeHTML = n.escapeHTML)
            }
            return Object.defineProperty(e, "defaultTags", {
                get: function() {
                    return {
                        b: cy.Tag.create("b"),
                        i: cy.Tag.create("i")
                    }
                },
                enumerable: !1,
                configurable: !0
            }), e.prototype.parse = function(t, n, r, s) {
                n === void 0 && (n = !1), r === void 0 && (r = !0), s === void 0 && (s = !0);
                var o = oy.ParseTree.buildTree(t, this.tags);
                return !o || !o.isValid ? t : this.treeToHtml(o.subTrees, r, s, n)
            }, e.prototype.addTag = function(t, n) {
                this.tags[t] = n
            }, e.prototype.treeToHtml = function(t, n, r, s) {
                var o = this;
                s === void 0 && (s = !1);
                var c = "",
                    u = !1;
                return t.forEach(function(f) {
                    var d;
                    if (f.type === oy.ParseTree.Type.text) {
                        var g = f.content;
                        r && (g = o.escapeHTML ? e.escapeHTML(g) : g), n && !u && (g = g.replace(/(\r\n|\n|\r)/gm, "<br>"), u = !1), c += g
                    } else {
                        var _ = o.tags[f.content],
                            b = o.treeToHtml(f.subTrees, _.insertLineBreaks, r, s);
                        s ? c += b : c += _.markupGenerator(_, b, (d = f.attributes) !== null && d !== void 0 ? d : {}), u = _.suppressLineBreaks
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
    Jl.BBCodeParser = Iq;
    (function(e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.Tag = e.BBCodeParser = void 0;
        var t = Jl;
        Object.defineProperty(e, "BBCodeParser", {
            enumerable: !0,
            get: function() {
                return t.BBCodeParser
            }
        });
        var n = No;
        Object.defineProperty(e, "Tag", {
            enumerable: !0,
            get: function() {
                return n.Tag
            }
        })
    })(Ji);
    const wq = {
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
    var Cq = {
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
                    d = s.startY - s.stopY < 0 ? "dn" : "up",
                    g = c > u ? f : d;
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
    })(Cq);
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

    function Rq(e, t) {
        for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1;);
        return e
    }
    var Nq = Rq,
        Lq = TT,
        $q = Lq(Object.keys, Object),
        Pq = $q,
        Dq = Kh,
        kq = Pq,
        Mq = Object.prototype,
        xq = Mq.hasOwnProperty;

    function Uq(e) {
        if (!Dq(e)) return kq(e);
        var t = [];
        for (var n in Object(e)) xq.call(e, n) && n != "constructor" && t.push(n);
        return t
    }
    var Fq = Uq,
        Bq = $T,
        Gq = Fq,
        Wq = Fl;

    function jq(e) {
        return Wq(e) ? Bq(e) : Gq(e)
    }
    var Zl = jq,
        Hq = To,
        Vq = Zl;

    function Kq(e, t) {
        return e && Hq(t, Vq(t), e)
    }
    var Yq = Kq,
        qq = To,
        zq = So;

    function Xq(e, t) {
        return e && qq(t, zq(t), e)
    }
    var Jq = Xq;

    function Qq(e, t) {
        for (var n = -1, r = e == null ? 0 : e.length, s = 0, o = []; ++n < r;) {
            var c = e[n];
            t(c, n, e) && (o[s++] = c)
        }
        return o
    }
    var Zq = Qq;

    function e7() {
        return []
    }
    var UO = e7,
        t7 = Zq,
        n7 = UO,
        r7 = Object.prototype,
        i7 = r7.propertyIsEnumerable,
        ly = Object.getOwnPropertySymbols,
        s7 = ly ? function(e) {
            return e == null ? [] : (e = Object(e), t7(ly(e), function(t) {
                return i7.call(e, t)
            }))
        } : n7,
        Rp = s7,
        a7 = To,
        o7 = Rp;

    function c7(e, t) {
        return a7(e, o7(e), t)
    }
    var l7 = c7;

    function u7(e, t) {
        for (var n = -1, r = t.length, s = e.length; ++n < r;) e[s + n] = t[n];
        return e
    }
    var FO = u7,
        f7 = FO,
        d7 = Vh,
        h7 = Rp,
        p7 = UO,
        g7 = Object.getOwnPropertySymbols,
        m7 = g7 ? function(e) {
            for (var t = []; e;) f7(t, h7(e)), e = d7(e);
            return t
        } : p7,
        BO = m7,
        v7 = To,
        E7 = BO;

    function _7(e, t) {
        return v7(e, E7(e), t)
    }
    var y7 = _7,
        b7 = FO,
        T7 = Ri;

    function S7(e, t, n) {
        var r = t(e);
        return T7(e) ? r : b7(r, n(e))
    }
    var GO = S7,
        O7 = GO,
        A7 = Rp,
        I7 = Zl;

    function w7(e) {
        return O7(e, I7, A7)
    }
    var C7 = w7,
        R7 = GO,
        N7 = BO,
        L7 = So;

    function $7(e) {
        return R7(e, L7, N7)
    }
    var P7 = $7,
        D7 = ps,
        k7 = Rr,
        M7 = D7(k7, "DataView"),
        x7 = M7,
        U7 = ps,
        F7 = Rr,
        B7 = U7(F7, "Promise"),
        G7 = B7,
        W7 = ps,
        j7 = Rr,
        H7 = W7(j7, "Set"),
        V7 = H7,
        K7 = ps,
        Y7 = Rr,
        q7 = K7(Y7, "WeakMap"),
        z7 = q7,
        th = x7,
        nh = Wh,
        rh = G7,
        ih = V7,
        sh = z7,
        WO = ma,
        Ta = gT,
        uy = "[object Map]",
        X7 = "[object Object]",
        fy = "[object Promise]",
        dy = "[object Set]",
        hy = "[object WeakMap]",
        py = "[object DataView]",
        J7 = Ta(th),
        Q7 = Ta(nh),
        Z7 = Ta(rh),
        ez = Ta(ih),
        tz = Ta(sh),
        Qi = WO;
    (th && Qi(new th(new ArrayBuffer(1))) != py || nh && Qi(new nh) != uy || rh && Qi(rh.resolve()) != fy || ih && Qi(new ih) != dy || sh && Qi(new sh) != hy) && (Qi = function(e) {
        var t = WO(e),
            n = t == X7 ? e.constructor : void 0,
            r = n ? Ta(n) : "";
        if (r) switch (r) {
            case J7:
                return py;
            case Q7:
                return uy;
            case Z7:
                return fy;
            case ez:
                return dy;
            case tz:
                return hy
        }
        return t
    });
    var Np = Qi,
        nz = Object.prototype,
        rz = nz.hasOwnProperty;

    function iz(e) {
        var t = e.length,
            n = new e.constructor(t);
        return t && typeof e[0] == "string" && rz.call(e, "index") && (n.index = e.index, n.input = e.input), n
    }
    var sz = iz,
        az = Hh;

    function oz(e, t) {
        var n = t ? az(e.buffer) : e.buffer;
        return new e.constructor(n, e.byteOffset, e.byteLength)
    }
    var cz = oz,
        lz = /\w*$/;

    function uz(e) {
        var t = new e.constructor(e.source, lz.exec(e));
        return t.lastIndex = e.lastIndex, t
    }
    var fz = uz,
        gy = Ml,
        my = gy ? gy.prototype : void 0,
        vy = my ? my.valueOf : void 0;

    function dz(e) {
        return vy ? Object(vy.call(e)) : {}
    }
    var hz = dz,
        pz = Hh,
        gz = cz,
        mz = fz,
        vz = hz,
        Ez = yT,
        _z = "[object Boolean]",
        yz = "[object Date]",
        bz = "[object Map]",
        Tz = "[object Number]",
        Sz = "[object RegExp]",
        Oz = "[object Set]",
        Az = "[object String]",
        Iz = "[object Symbol]",
        wz = "[object ArrayBuffer]",
        Cz = "[object DataView]",
        Rz = "[object Float32Array]",
        Nz = "[object Float64Array]",
        Lz = "[object Int8Array]",
        $z = "[object Int16Array]",
        Pz = "[object Int32Array]",
        Dz = "[object Uint8Array]",
        kz = "[object Uint8ClampedArray]",
        Mz = "[object Uint16Array]",
        xz = "[object Uint32Array]";

    function Uz(e, t, n) {
        var r = e.constructor;
        switch (t) {
            case wz:
                return pz(e);
            case _z:
            case yz:
                return new r(+e);
            case Cz:
                return gz(e, n);
            case Rz:
            case Nz:
            case Lz:
            case $z:
            case Pz:
            case Dz:
            case kz:
            case Mz:
            case xz:
                return Ez(e, n);
            case bz:
                return new r;
            case Tz:
            case Az:
                return new r(e);
            case Sz:
                return mz(e);
            case Oz:
                return new r;
            case Iz:
                return vz(e)
        }
    }
    var Fz = Uz,
        Bz = Np,
        Gz = Ci,
        Wz = "[object Map]";

    function jz(e) {
        return Gz(e) && Bz(e) == Wz
    }
    var Hz = jz,
        Vz = Hz,
        Kz = Yh,
        Ey = po.exports,
        _y = Ey && Ey.isMap,
        Yz = _y ? Kz(_y) : Vz,
        qz = Yz,
        zz = Np,
        Xz = Ci,
        Jz = "[object Set]";

    function Qz(e) {
        return Xz(e) && zz(e) == Jz
    }
    var Zz = Qz,
        e9 = Zz,
        t9 = Yh,
        yy = po.exports,
        by = yy && yy.isSet,
        n9 = by ? t9(by) : e9,
        r9 = n9,
        i9 = vT,
        s9 = Nq,
        a9 = NT,
        o9 = Yq,
        c9 = Jq,
        l9 = rl.exports,
        u9 = bT,
        f9 = l7,
        d9 = y7,
        h9 = C7,
        p9 = P7,
        g9 = Np,
        m9 = sz,
        v9 = Fz,
        E9 = ST,
        _9 = Ri,
        y9 = ho.exports,
        b9 = qz,
        T9 = wi,
        S9 = r9,
        O9 = Zl,
        A9 = So,
        I9 = 1,
        w9 = 2,
        C9 = 4,
        jO = "[object Arguments]",
        R9 = "[object Array]",
        N9 = "[object Boolean]",
        L9 = "[object Date]",
        $9 = "[object Error]",
        HO = "[object Function]",
        P9 = "[object GeneratorFunction]",
        D9 = "[object Map]",
        k9 = "[object Number]",
        VO = "[object Object]",
        M9 = "[object RegExp]",
        x9 = "[object Set]",
        U9 = "[object String]",
        F9 = "[object Symbol]",
        B9 = "[object WeakMap]",
        G9 = "[object ArrayBuffer]",
        W9 = "[object DataView]",
        j9 = "[object Float32Array]",
        H9 = "[object Float64Array]",
        V9 = "[object Int8Array]",
        K9 = "[object Int16Array]",
        Y9 = "[object Int32Array]",
        q9 = "[object Uint8Array]",
        z9 = "[object Uint8ClampedArray]",
        X9 = "[object Uint16Array]",
        J9 = "[object Uint32Array]",
        Tt = {};
    Tt[jO] = Tt[R9] = Tt[G9] = Tt[W9] = Tt[N9] = Tt[L9] = Tt[j9] = Tt[H9] = Tt[V9] = Tt[K9] = Tt[Y9] = Tt[D9] = Tt[k9] = Tt[VO] = Tt[M9] = Tt[x9] = Tt[U9] = Tt[F9] = Tt[q9] = Tt[z9] = Tt[X9] = Tt[J9] = !0;
    Tt[$9] = Tt[HO] = Tt[B9] = !1;

    function Jc(e, t, n, r, s, o) {
        var c, u = t & I9,
            f = t & w9,
            d = t & C9;
        if (n && (c = s ? n(e, r, s, o) : n(e)), c !== void 0) return c;
        if (!T9(e)) return e;
        var g = _9(e);
        if (g) {
            if (c = m9(e), !u) return u9(e, c)
        } else {
            var _ = g9(e),
                b = _ == HO || _ == P9;
            if (y9(e)) return l9(e, u);
            if (_ == VO || _ == jO || b && !s) {
                if (c = f || b ? {} : E9(e), !u) return f ? d9(e, c9(c, e)) : f9(e, o9(c, e))
            } else {
                if (!Tt[_]) return s ? e : {};
                c = v9(e, _, u)
            }
        }
        o || (o = new i9);
        var I = o.get(e);
        if (I) return I;
        o.set(e, c), S9(e) ? e.forEach(function(W) {
            c.add(Jc(W, t, n, W, e, o))
        }) : b9(e) && e.forEach(function(W, C) {
            c.set(C, Jc(W, t, n, C, e, o))
        });
        var R = d ? f ? p9 : h9 : f ? A9 : O9,
            M = g ? void 0 : R(e);
        return s9(M || e, function(W, C) {
            M && (C = W, W = e[C]), a9(c, C, Jc(W, t, n, C, e, o))
        }), c
    }
    var Q9 = Jc,
        Z9 = Q9,
        eX = 1,
        tX = 4;

    function nX(e) {
        return Z9(e, eX | tX)
    }
    var rX = nX;
    const iX = ze({
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
                !e || (this.values = rX(this.$ecastValues), this.content = (r = m_.getPromptGuess(this.values, e)) != null ? r : null)
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
                    !this.$debugRecorder || (this.screen === "debug" && (await this.$debugRecorder.send(this.message), this.$emit("resolve")), this.screen === "feedback" && (await m_.send({
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
        KO = "main/@connect/assets/ad9172fc.png",
        YO = "main/@connect/assets/dc131b16.png",
        sX = "main/@connect/assets/38715b18.png",
        aX = "main/@connect/assets/b0d7c822.png",
        oX = "main/@connect/assets/06150f24.png",
        rr = e => (ha("data-v-c4b66a33"), e = e(), pa(), e),
        cX = {
            class: "jbg"
        },
        lX = {
            key: 0,
            class: "options"
        },
        uX = rr(() => Y("img", {
            src: KO,
            alt: "Leave Feedback"
        }, null, -1)),
        fX = rr(() => Y("span", null, [Gn("LEAVE"), Y("br"), Gn("FEEDBACK")], -1)),
        dX = [uX, fX],
        hX = rr(() => Y("img", {
            src: YO,
            alt: "Send Debug"
        }, null, -1)),
        pX = rr(() => Y("span", null, [Gn("SEND A"), Y("br"), Gn("DEBUG")], -1)),
        gX = [hX, pX],
        mX = {
            key: 1,
            class: "feedback"
        },
        vX = rr(() => Y("img", {
            class: "image",
            src: KO,
            alt: "Feedback"
        }, null, -1)),
        EX = rr(() => Y("h3", {
            class: "text"
        }, "Send Feedback", -1)),
        _X = rr(() => Y("p", {
            class: "cta"
        }, "CHOOSE A VIBE", -1)),
        yX = {
            class: "buttons"
        },
        bX = rr(() => Y("img", {
            src: sX,
            alt: "good"
        }, null, -1)),
        TX = [bX],
        SX = rr(() => Y("img", {
            src: aX,
            alt: "good"
        }, null, -1)),
        OX = [SX],
        AX = rr(() => Y("img", {
            src: oX,
            alt: "bad"
        }, null, -1)),
        IX = [AX],
        wX = {
            class: "actions"
        },
        CX = {
            key: 0,
            class: "content-guess"
        },
        RX = Gn("Feedback is about: "),
        NX = {
            key: 2,
            class: "debug"
        },
        LX = rr(() => Y("img", {
            class: "image",
            src: YO,
            alt: "Debug"
        }, null, -1)),
        $X = rr(() => Y("h3", {
            class: "text"
        }, "What is Happening?", -1)),
        PX = {
            class: "actions"
        };

    function DX(e, t, n, r, s, o) {
        return z(), Z("div", cX, [e.screen === "options" ? (z(), Z("div", lX, [Y("button", {
            class: "feedback-button",
            onClick: t[0] || (t[0] = (...c) => e.onFeedbackClick && e.onFeedbackClick(...c))
        }, dX), Y("button", {
            onClick: t[1] || (t[1] = (...c) => e.onDebugClick && e.onDebugClick(...c))
        }, gX)])) : e.screen === "feedback" ? (z(), Z("div", mX, [vX, EX, Y("div", {
            class: Ye(["vibes", {
                "has-selected": e.vibe
            }])
        }, [_X, Y("div", yX, [Y("button", {
            class: Ye({
                selected: e.vibe === "good"
            }),
            onClick: t[2] || (t[2] = c => e.onVibeClick("good"))
        }, TX, 2), Y("button", {
            class: Ye({
                selected: e.vibe === "meh"
            }),
            onClick: t[3] || (t[3] = c => e.onVibeClick("meh"))
        }, OX, 2), Y("button", {
            class: Ye({
                selected: e.vibe === "bad"
            }),
            onClick: t[4] || (t[4] = c => e.onVibeClick("bad"))
        }, IX, 2)])], 2), Y("div", wX, [e.content ? (z(), Z("div", CX, [je(Y("input", {
            "onUpdate:modelValue": t[5] || (t[5] = c => e.isContent = c),
            type: "checkbox"
        }, null, 512), [
            [CP, e.isContent]
        ]), Y("span", null, [RX, Y("em", null, Ie(e.content), 1)])])) : we("", !0), je(Y("textarea", {
            "onUpdate:modelValue": t[6] || (t[6] = c => e.message = c),
            rows: "3",
            placeholder: "(optional) more details",
            "aria-label": "Details"
        }, null, 512), [
            [Qv, e.message]
        ]), Y("button", {
            onClick: t[7] || (t[7] = Gt((...c) => e.onSubmitClick && e.onSubmitClick(...c), ["prevent"]))
        }, Ie(e.$t("ACTION.SUBMIT")), 1)])])) : e.screen === "debug" ? (z(), Z("div", NX, [LX, $X, Y("div", PX, [je(Y("textarea", {
            "onUpdate:modelValue": t[8] || (t[8] = c => e.message = c),
            rows: "3",
            placeholder: "Enter details",
            "aria-label": "Details"
        }, null, 512), [
            [Qv, e.message]
        ]), Y("button", {
            onClick: t[9] || (t[9] = Gt((...c) => e.onSubmitClick && e.onSubmitClick(...c), ["prevent"]))
        }, Ie(e.$t("ACTION.OK")), 1)])])) : we("", !0)])
    }
    const kX = mt(iX, [
        ["render", DX],
        ["__scopeId", "data-v-c4b66a33"]
    ]);
    ze({
        methods: {
            onFeedbackClick() {
                this.$showModal(kX)
            }
        }
    });
    var MX = ma,
        xX = Ci,
        UX = "[object Symbol]";

    function FX(e) {
        return typeof e == "symbol" || xX(e) && MX(e) == UX
    }
    var Lp = FX,
        BX = Ri,
        GX = Lp,
        WX = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        jX = /^\w*$/;

    function HX(e, t) {
        if (BX(e)) return !1;
        var n = typeof e;
        return n == "number" || n == "symbol" || n == "boolean" || e == null || GX(e) ? !0 : jX.test(e) || !WX.test(e) || t != null && e in Object(t)
    }
    var VX = HX,
        qO = mT,
        KX = "Expected a function";

    function $p(e, t) {
        if (typeof e != "function" || t != null && typeof t != "function") throw new TypeError(KX);
        var n = function() {
            var r = arguments,
                s = t ? t.apply(this, r) : r[0],
                o = n.cache;
            if (o.has(s)) return o.get(s);
            var c = e.apply(this, r);
            return n.cache = o.set(s, c) || o, c
        };
        return n.cache = new($p.Cache || qO), n
    }
    $p.Cache = qO;
    var YX = $p,
        qX = YX,
        zX = 500;

    function XX(e) {
        var t = qX(e, function(r) {
                return n.size === zX && n.clear(), r
            }),
            n = t.cache;
        return t
    }
    var JX = XX,
        QX = JX,
        ZX = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        eJ = /\\(\\)?/g,
        tJ = QX(function(e) {
            var t = [];
            return e.charCodeAt(0) === 46 && t.push(""), e.replace(ZX, function(n, r, s, o) {
                t.push(s ? o.replace(eJ, "$1") : r || n)
            }), t
        }),
        nJ = tJ;

    function rJ(e, t) {
        for (var n = -1, r = e == null ? 0 : e.length, s = Array(r); ++n < r;) s[n] = t(e[n], n, e);
        return s
    }
    var zO = rJ,
        Ty = Ml,
        iJ = zO,
        sJ = Ri,
        aJ = Lp,
        oJ = 1 / 0,
        Sy = Ty ? Ty.prototype : void 0,
        Oy = Sy ? Sy.toString : void 0;

    function XO(e) {
        if (typeof e == "string") return e;
        if (sJ(e)) return iJ(e, XO) + "";
        if (aJ(e)) return Oy ? Oy.call(e) : "";
        var t = e + "";
        return t == "0" && 1 / e == -oJ ? "-0" : t
    }
    var cJ = XO,
        lJ = cJ;

    function uJ(e) {
        return e == null ? "" : lJ(e)
    }
    var fJ = uJ,
        dJ = Ri,
        hJ = VX,
        pJ = nJ,
        gJ = fJ;

    function mJ(e, t) {
        return dJ(e) ? e : hJ(e, t) ? [e] : pJ(gJ(e))
    }
    var vJ = mJ,
        EJ = Lp,
        _J = 1 / 0;

    function yJ(e) {
        if (typeof e == "string" || EJ(e)) return e;
        var t = e + "";
        return t == "0" && 1 / e == -_J ? "-0" : t
    }
    var bJ = yJ;
    const Lo = {
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

    function TJ() {
        return typeof __SENTRY_BROWSER_BUNDLE__ < "u" && !!__SENTRY_BROWSER_BUNDLE__
    }

    function Pp() {
        return !TJ() && Object.prototype.toString.call(typeof process < "u" ? process : 0) === "[object process]"
    }

    function SJ(e, t) {
        return e.require(t)
    }
    var OJ = {};

    function tn() {
        return Pp() ? global : typeof window < "u" ? window : typeof self < "u" ? self : OJ
    }

    function Dp(e, t, n) {
        var r = n || tn(),
            s = r.__SENTRY__ = r.__SENTRY__ || {},
            o = s[e] || (s[e] = t());
        return o
    }
    var JO = Object.prototype.toString;

    function QO(e) {
        switch (JO.call(e)) {
            case "[object Error]":
            case "[object Exception]":
            case "[object DOMException]":
                return !0;
            default:
                return Di(e, Error)
        }
    }

    function Sa(e, t) {
        return JO.call(e) === `[object ${t}]`
    }

    function ZO(e) {
        return Sa(e, "ErrorEvent")
    }

    function Ay(e) {
        return Sa(e, "DOMError")
    }

    function AJ(e) {
        return Sa(e, "DOMException")
    }

    function oa(e) {
        return Sa(e, "String")
    }

    function IJ(e) {
        return e === null || typeof e != "object" && typeof e != "function"
    }

    function eu(e) {
        return Sa(e, "Object")
    }

    function kp(e) {
        return typeof Event < "u" && Di(e, Event)
    }

    function wJ(e) {
        return typeof Element < "u" && Di(e, Element)
    }

    function CJ(e) {
        return Sa(e, "RegExp")
    }

    function eA(e) {
        return Boolean(e && e.then && typeof e.then == "function")
    }

    function RJ(e) {
        return eu(e) && "nativeEvent" in e && "preventDefault" in e && "stopPropagation" in e
    }

    function NJ(e) {
        return typeof e == "number" && e !== e
    }

    function Di(e, t) {
        try {
            return e instanceof t
        } catch {
            return !1
        }
    }

    function ah(e, t) {
        try {
            let u = e;
            var n = 5,
                r = 80,
                s = [];
            let f = 0,
                d = 0;
            var o = " > ",
                c = o.length;
            let g;
            for (; u && f++ < n && (g = LJ(u, t), !(g === "html" || f > 1 && d + s.length * c + g.length >= r));) s.push(g), d += g.length, u = u.parentNode;
            return s.reverse().join(o)
        } catch {
            return "<unknown>"
        }
    }

    function LJ(e, t) {
        var n = e,
            r = [];
        let s, o, c, u, f;
        if (!n || !n.tagName) return "";
        r.push(n.tagName.toLowerCase());
        var d = t && t.length ? t.filter(_ => n.getAttribute(_)).map(_ => [_, n.getAttribute(_)]) : null;
        if (d && d.length) d.forEach(_ => {
            r.push(`[${_[0]}="${_[1]}"]`)
        });
        else if (n.id && r.push(`#${n.id}`), s = n.className, s && oa(s))
            for (o = s.split(/\s+/), f = 0; f < o.length; f++) r.push(`.${o[f]}`);
        var g = ["type", "name", "title", "alt"];
        for (f = 0; f < g.length; f++) c = g[f], u = n.getAttribute(c), u && r.push(`[${c}="${u}"]`);
        return r.join("")
    }

    function $J() {
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
    var PJ = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/;

    function DJ(e) {
        return e === "http" || e === "https"
    }

    function kJ(e, t = !1) {
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

    function MJ(e) {
        var t = PJ.exec(e);
        if (!t) throw new Ya(`Invalid Sentry Dsn: ${e}`);
        const [n, r, s = "", o, c = "", u] = t.slice(1);
        let f = "",
            d = u;
        var g = d.split("/");
        if (g.length > 1 && (f = g.slice(0, -1).join("/"), d = g.pop()), d) {
            var _ = d.match(/^\d+/);
            _ && (d = _[0])
        }
        return tA({
            host: o,
            pass: s,
            path: f,
            projectId: d,
            port: c,
            protocol: n,
            publicKey: r
        })
    }

    function tA(e) {
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

    function xJ(e) {
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
        if (!DJ(r)) throw new Ya(`Invalid Sentry Dsn: Invalid protocol ${r}`);
        if (t && isNaN(parseInt(t, 10))) throw new Ya(`Invalid Sentry Dsn: Invalid port ${t}`);
        return !0
    }

    function UJ(e) {
        var t = typeof e == "string" ? MJ(e) : tA(e);
        return xJ(t), t
    }
    var FJ = tn(),
        BJ = "Sentry Logger ",
        dl = ["debug", "info", "warn", "error", "log", "assert", "trace"];

    function nA(e) {
        var t = tn();
        if (!("console" in t)) return e();
        var n = t.console,
            r = {};
        dl.forEach(s => {
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

    function Iy() {
        let e = !1;
        var t = {
            enable: () => {
                e = !0
            },
            disable: () => {
                e = !1
            }
        };
        return typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__ ? dl.forEach(n => {
            t[n] = (...r) => {
                e && nA(() => {
                    FJ.console[n](`${BJ}[${n}]:`, ...r)
                })
            }
        }) : dl.forEach(n => {
            t[n] = () => {}
        }), t
    }
    let qt;
    typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__ ? qt = Dp("logger", Iy) : qt = Iy();

    function wy(e, t = 0) {
        return typeof e != "string" || t === 0 || e.length <= t ? e : `${e.substr(0,t)}...`
    }

    function Cy(e, t) {
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

    function Mp(e, t) {
        return oa(e) ? CJ(t) ? t.test(e) : typeof t == "string" ? e.indexOf(t) !== -1 : !1 : !1
    }

    function gn(e, t, n) {
        if (t in e) {
            var r = e[t],
                s = n(r);
            if (typeof s == "function") try {
                iA(s, r)
            } catch {}
            e[t] = s
        }
    }

    function rA(e, t, n) {
        Object.defineProperty(e, t, {
            value: n,
            writable: !0,
            configurable: !0
        })
    }

    function iA(e, t) {
        var n = t.prototype || {};
        e.prototype = t.prototype = n, rA(e, "__sentry_original__", t)
    }

    function xp(e) {
        return e.__sentry_original__
    }

    function sA(e) {
        if (QO(e)) return {
            message: e.message,
            name: e.name,
            stack: e.stack,
            ...Ny(e)
        };
        if (kp(e)) {
            var t = {
                type: e.type,
                target: Ry(e.target),
                currentTarget: Ry(e.currentTarget),
                ...Ny(e)
            };
            return typeof CustomEvent < "u" && Di(e, CustomEvent) && (t.detail = e.detail), t
        } else return e
    }

    function Ry(e) {
        try {
            return wJ(e) ? ah(e) : Object.prototype.toString.call(e)
        } catch {
            return "<unknown>"
        }
    }

    function Ny(e) {
        if (typeof e == "object" && e !== null) {
            var t = {};
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t
        } else return {}
    }

    function GJ(e, t = 40) {
        var n = Object.keys(sA(e));
        if (n.sort(), !n.length) return "[object has no keys]";
        if (n[0].length >= t) return wy(n[0], t);
        for (let s = n.length; s > 0; s--) {
            var r = n.slice(0, s).join(", ");
            if (!(r.length > t)) return s === n.length ? r : wy(r, t)
        }
        return ""
    }

    function WJ(e) {
        var t = new Map;
        return oh(e, t)
    }

    function oh(e, t) {
        if (eu(e)) {
            var n = t.get(e);
            if (n !== void 0) return n;
            var r = {};
            t.set(e, r);
            for (var s of Object.keys(e)) typeof e[s] < "u" && (r[s] = oh(e[s], t));
            return r
        }
        if (Array.isArray(e)) {
            var n = t.get(e);
            if (n !== void 0) return n;
            var r = [];
            return t.set(e, r), e.forEach(u => {
                r.push(oh(u, t))
            }), r
        }
        return e
    }
    var id = "<anonymous>";

    function Oi(e) {
        try {
            return !e || typeof e != "function" ? id : e.name || id
        } catch {
            return id
        }
    }

    function jJ() {
        if (!("fetch" in tn())) return !1;
        try {
            return new Headers, new Request(""), new Response, !0
        } catch {
            return !1
        }
    }

    function Ly(e) {
        return e && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())
    }

    function HJ() {
        if (!jJ()) return !1;
        var e = tn();
        if (Ly(e.fetch)) return !0;
        let t = !1;
        var n = e.document;
        if (n && typeof n.createElement == "function") try {
            var r = n.createElement("iframe");
            r.hidden = !0, n.head.appendChild(r), r.contentWindow && r.contentWindow.fetch && (t = Ly(r.contentWindow.fetch)), n.head.removeChild(r)
        } catch (s) {
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && qt.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", s)
        }
        return t
    }

    function VJ() {
        var e = tn(),
            t = e.chrome,
            n = t && t.app && t.app.runtime,
            r = "history" in e && !!e.history.pushState && !!e.history.replaceState;
        return !n && r
    }
    var Nt = tn(),
        eo = {},
        $y = {};

    function KJ(e) {
        if (!$y[e]) switch ($y[e] = !0, e) {
            case "console":
                YJ();
                break;
            case "dom":
                nQ();
                break;
            case "xhr":
                JJ();
                break;
            case "fetch":
                qJ();
                break;
            case "history":
                QJ();
                break;
            case "error":
                rQ();
                break;
            case "unhandledrejection":
                iQ();
                break;
            default:
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && qt.warn("unknown instrumentation type:", e);
                return
        }
    }

    function rs(e, t) {
        eo[e] = eo[e] || [], eo[e].push(t), KJ(e)
    }

    function pr(e, t) {
        if (!(!e || !eo[e]))
            for (var n of eo[e] || []) try {
                n(t)
            } catch (r) {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && qt.error(`Error while triggering instrumentation handler.
Type: ${e}
Name: ${Oi(n)}
Error:`, r)
            }
    }

    function YJ() {
        "console" in Nt && dl.forEach(function(e) {
            e in Nt.console && gn(Nt.console, e, function(t) {
                return function(...n) {
                    pr("console", {
                        args: n,
                        level: e
                    }), t && t.apply(Nt.console, n)
                }
            })
        })
    }

    function qJ() {
        !HJ() || gn(Nt, "fetch", function(e) {
            return function(...t) {
                var n = {
                    args: t,
                    fetchData: {
                        method: zJ(t),
                        url: XJ(t)
                    },
                    startTimestamp: Date.now()
                };
                return pr("fetch", {
                    ...n
                }), e.apply(Nt, t).then(r => (pr("fetch", {
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

    function zJ(e = []) {
        return "Request" in Nt && Di(e[0], Request) && e[0].method ? String(e[0].method).toUpperCase() : e[1] && e[1].method ? String(e[1].method).toUpperCase() : "GET"
    }

    function XJ(e = []) {
        return typeof e[0] == "string" ? e[0] : "Request" in Nt && Di(e[0], Request) ? e[0].url : String(e[0])
    }

    function JJ() {
        if ("XMLHttpRequest" in Nt) {
            var e = XMLHttpRequest.prototype;
            gn(e, "open", function(t) {
                return function(...n) {
                    var r = this,
                        s = n[1],
                        o = r.__sentry_xhr__ = {
                            method: oa(n[0]) ? n[0].toUpperCase() : n[0],
                            url: n[1]
                        };
                    oa(s) && o.method === "POST" && s.match(/sentry_key/) && (r.__sentry_own_request__ = !0);
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
                    return "onreadystatechange" in r && typeof r.onreadystatechange == "function" ? gn(r, "onreadystatechange", function(u) {
                        return function(...f) {
                            return c(), u.apply(r, f)
                        }
                    }) : r.addEventListener("readystatechange", c), t.apply(r, n)
                }
            }), gn(e, "send", function(t) {
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
    let Uc;

    function QJ() {
        if (!VJ()) return;
        var e = Nt.onpopstate;
        Nt.onpopstate = function(...n) {
            var r = Nt.location.href,
                s = Uc;
            if (Uc = r, pr("history", {
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
                    var o = Uc,
                        c = String(s);
                    Uc = c, pr("history", {
                        from: o,
                        to: c
                    })
                }
                return n.apply(this, r)
            }
        }
        gn(Nt.history, "pushState", t), gn(Nt.history, "replaceState", t)
    }
    var ZJ = 1e3;
    let Fc, Bc;

    function eQ(e, t) {
        if (!e || e.type !== t.type) return !0;
        try {
            if (e.target !== t.target) return !0
        } catch {}
        return !1
    }

    function tQ(e) {
        if (e.type !== "keypress") return !1;
        try {
            var t = e.target;
            if (!t || !t.tagName) return !0;
            if (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable) return !1
        } catch {}
        return !0
    }

    function Py(e, t = !1) {
        return n => {
            if (!(!n || Bc === n) && !tQ(n)) {
                var r = n.type === "keypress" ? "input" : n.type;
                Fc === void 0 ? (e({
                    event: n,
                    name: r,
                    global: t
                }), Bc = n) : eQ(Bc, n) && (e({
                    event: n,
                    name: r,
                    global: t
                }), Bc = n), clearTimeout(Fc), Fc = Nt.setTimeout(() => {
                    Fc = void 0
                }, ZJ)
            }
        }
    }

    function nQ() {
        if ("document" in Nt) {
            var e = pr.bind(null, "dom"),
                t = Py(e, !0);
            Nt.document.addEventListener("click", t, !1), Nt.document.addEventListener("keypress", t, !1), ["EventTarget", "Node"].forEach(n => {
                var r = Nt[n] && Nt[n].prototype;
                !r || !r.hasOwnProperty || !r.hasOwnProperty("addEventListener") || (gn(r, "addEventListener", function(s) {
                    return function(o, c, u) {
                        if (o === "click" || o == "keypress") try {
                            var f = this,
                                d = f.__sentry_instrumentation_handlers__ = f.__sentry_instrumentation_handlers__ || {},
                                g = d[o] = d[o] || {
                                    refCount: 0
                                };
                            if (!g.handler) {
                                var _ = Py(e);
                                g.handler = _, s.call(this, o, _, u)
                            }
                            g.refCount += 1
                        } catch {}
                        return s.call(this, o, c, u)
                    }
                }), gn(r, "removeEventListener", function(s) {
                    return function(o, c, u) {
                        if (o === "click" || o == "keypress") try {
                            var f = this,
                                d = f.__sentry_instrumentation_handlers__ || {},
                                g = d[o];
                            g && (g.refCount -= 1, g.refCount <= 0 && (s.call(this, o, g.handler, u), g.handler = void 0, delete d[o]), Object.keys(d).length === 0 && delete f.__sentry_instrumentation_handlers__)
                        } catch {}
                        return s.call(this, o, c, u)
                    }
                }))
            })
        }
    }
    let sd = null;

    function rQ() {
        sd = Nt.onerror, Nt.onerror = function(e, t, n, r, s) {
            return pr("error", {
                column: r,
                error: s,
                line: n,
                msg: e,
                url: t
            }), sd ? sd.apply(this, arguments) : !1
        }
    }
    let ad = null;

    function iQ() {
        ad = Nt.onunhandledrejection, Nt.onunhandledrejection = function(e) {
            return pr("unhandledrejection", e), ad ? ad.apply(this, arguments) : !0
        }
    }

    function sQ() {
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

    function to() {
        var e = tn(),
            t = e.crypto || e.msCrypto;
        if (t && t.randomUUID) return t.randomUUID().replace(/-/g, "");
        var n = t && t.getRandomValues ? () => t.getRandomValues(new Uint8Array(1))[0] : () => Math.random() * 16;
        return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, r => (r ^ (n() & 15) >> r / 4).toString(16))
    }

    function aA(e) {
        return e.exception && e.exception.values ? e.exception.values[0] : void 0
    }

    function Bs(e) {
        const {
            message: t,
            event_id: n
        } = e;
        if (t) return t;
        var r = aA(e);
        return r ? r.type && r.value ? `${r.type}: ${r.value}` : r.type || r.value || n || "<unknown>" : n || "<unknown>"
    }

    function ch(e, t, n) {
        var r = e.exception = e.exception || {},
            s = r.values = r.values || [],
            o = s[0] = s[0] || {};
        o.value || (o.value = t || ""), o.type || (o.type = n || "Error")
    }

    function hl(e, t) {
        var n = aA(e);
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

    function aQ(e, t = 1 / 0, n = 1 / 0) {
        try {
            return lh("", e, t, n)
        } catch (r) {
            return {
                ERROR: `**non-serializable** (${r})`
            }
        }
    }

    function oA(e, t = 3, n = 100 * 1024) {
        var r = aQ(e, t);
        return lQ(r) > n ? oA(e, t - 1, n) : r
    }

    function lh(e, t, n = 1 / 0, r = 1 / 0, s = sQ()) {
        const [o, c] = s;
        if (t === null || ["number", "boolean", "string"].includes(typeof t) && !NJ(t)) return t;
        var u = oQ(e, t);
        if (!u.startsWith("[object ")) return u;
        if (t.__sentry_skip_normalization__) return t;
        if (n === 0) return u.replace("object ", "");
        if (o(t)) return "[Circular ~]";
        var f = t;
        if (f && typeof f.toJSON == "function") try {
            var d = f.toJSON();
            return lh("", d, n - 1, r, s)
        } catch {}
        var g = Array.isArray(t) ? [] : {};
        let _ = 0;
        var b = sA(t);
        for (var I in b)
            if (!!Object.prototype.hasOwnProperty.call(b, I)) {
                if (_ >= r) {
                    g[I] = "[MaxProperties ~]";
                    break
                }
                var R = b[I];
                g[I] = lh(I, R, n - 1, r, s), _ += 1
            } return c(t), g
    }

    function oQ(e, t) {
        try {
            return e === "domain" && t && typeof t == "object" && t._events ? "[Domain]" : e === "domainEmitter" ? "[DomainEmitter]" : typeof global < "u" && t === global ? "[Global]" : typeof window < "u" && t === window ? "[Window]" : typeof document < "u" && t === document ? "[Document]" : RJ(t) ? "[SyntheticEvent]" : typeof t == "number" && t !== t ? "[NaN]" : t === void 0 ? "[undefined]" : typeof t == "function" ? `[Function: ${Oi(t)}]` : typeof t == "symbol" ? `[${String(t)}]` : typeof t == "bigint" ? `[BigInt: ${String(t)}]` : `[object ${Object.getPrototypeOf(t).constructor.name}]`
        } catch (n) {
            return `**non-serializable** (${n})`
        }
    }

    function cQ(e) {
        return ~-encodeURI(e).split(/%..|./).length
    }

    function lQ(e) {
        return cQ(JSON.stringify(e))
    }
    var jr;
    (function(e) {
        var t = 0;
        e[e.PENDING = t] = "PENDING";
        var n = 1;
        e[e.RESOLVED = n] = "RESOLVED";
        var r = 2;
        e[e.REJECTED = r] = "REJECTED"
    })(jr || (jr = {}));
    class Tr {
        __init() {
            this._state = jr.PENDING
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
                this._setResult(jr.RESOLVED, t)
            }
        }
        __init4() {
            this._reject = t => {
                this._setResult(jr.REJECTED, t)
            }
        }
        __init5() {
            this._setResult = (t, n) => {
                if (this._state === jr.PENDING) {
                    if (eA(n)) {
                        n.then(this._resolve, this._reject);
                        return
                    }
                    this._state = t, this._value = n, this._executeHandlers()
                }
            }
        }
        __init6() {
            this._executeHandlers = () => {
                if (this._state !== jr.PENDING) {
                    var t = this._handlers.slice();
                    this._handlers = [], t.forEach(n => {
                        n[0] || (this._state === jr.RESOLVED && n[1](this._value), this._state === jr.REJECTED && n[2](this._value), n[0] = !0)
                    })
                }
            }
        }
    }

    function od(e) {
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
    var uQ = ["fatal", "error", "warning", "log", "info", "debug"];

    function fQ(e) {
        return e === "warn" ? "warning" : uQ.includes(e) ? e : "log"
    }
    var uh = {
        nowSeconds: () => Date.now() / 1e3
    };

    function dQ() {
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

    function hQ() {
        try {
            var e = SJ(AA, "perf_hooks");
            return e.performance
        } catch {
            return
        }
    }
    var cd = Pp() ? hQ() : dQ(),
        Dy = cd === void 0 ? uh : {
            nowSeconds: () => (cd.timeOrigin + cd.now()) / 1e3
        },
        cA = uh.nowSeconds.bind(uh),
        lA = Dy.nowSeconds.bind(Dy);
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
                d = f < t;
            return o || d ? s <= f ? e.timeOrigin : c : r
        }
    })();

    function pQ(e) {
        var t = lA(),
            n = {
                sid: to(),
                init: !0,
                timestamp: t,
                started: t,
                duration: 0,
                status: "ok",
                errors: 0,
                ignoreDuration: !1,
                toJSON: () => mQ(n)
            };
        return e && tu(n, e), n
    }

    function tu(e, t = {}) {
        if (t.user && (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address), !e.did && !t.did && (e.did = t.user.id || t.user.email || t.user.username)), e.timestamp = t.timestamp || lA(), t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration), t.sid && (e.sid = t.sid.length === 32 ? t.sid : to()), t.init !== void 0 && (e.init = t.init), !e.did && t.did && (e.did = `${t.did}`), typeof t.started == "number" && (e.started = t.started), e.ignoreDuration) e.duration = void 0;
        else if (typeof t.duration == "number") e.duration = t.duration;
        else {
            var n = e.timestamp - e.started;
            e.duration = n >= 0 ? n : 0
        }
        t.release && (e.release = t.release), t.environment && (e.environment = t.environment), !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress), !e.userAgent && t.userAgent && (e.userAgent = t.userAgent), typeof t.errors == "number" && (e.errors = t.errors), t.status && (e.status = t.status)
    }

    function gQ(e, t) {
        let n = {};
        t ? n = {
            status: t
        } : e.status === "ok" && (n = {
            status: "exited"
        }), tu(e, n)
    }

    function mQ(e) {
        return WJ({
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
    var ky = 100;
    class fs {
        constructor() {
            this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}
        }
        static clone(t) {
            var n = new fs;
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
            return this._user = t || {}, this._session && tu(this._session, {
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
                return n instanceof fs ? n : this
            }
            return t instanceof fs ? (this._tags = {
                ...this._tags,
                ...t._tags
            }, this._extra = {
                ...this._extra,
                ...t._extra
            }, this._contexts = {
                ...this._contexts,
                ...t._contexts
            }, t._user && Object.keys(t._user).length && (this._user = t._user), t._level && (this._level = t._level), t._fingerprint && (this._fingerprint = t._fingerprint), t._requestSession && (this._requestSession = t._requestSession)) : eu(t) && (t = t, this._tags = {
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
            var r = typeof n == "number" ? Math.min(n, ky) : ky;
            if (r <= 0) return this;
            var s = {
                timestamp: cA(),
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
            }, this._notifyEventProcessors([...uA(), ...this._eventProcessors], t, n)
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
                    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && u.id && f === null && qt.log(`Event processor "${u.id}" dropped event`), eA(f) ? f.then(d => this._notifyEventProcessors(t, d, r, s + 1).then(o)).then(null, c) : this._notifyEventProcessors(t, f, r, s + 1).then(o).then(null, c)
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

    function uA() {
        return Dp("globalEventProcessors", () => [])
    }

    function fA(e) {
        uA().push(e)
    }
    var Up = 4,
        vQ = 100;
    class $o {
        __init() {
            this._stack = [{}]
        }
        constructor(t, n = new fs, r = Up) {
            this._version = r, $o.prototype.__init.call(this), this.getStackTop().scope = n, t && this.bindClient(t)
        }
        isOlderThan(t) {
            return this._version < t
        }
        bindClient(t) {
            var n = this.getStackTop();
            n.client = t, t && t.setupIntegrations && t.setupIntegrations()
        }
        pushScope() {
            var t = fs.clone(this.getScope());
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
            var r = this._lastEventId = n && n.event_id ? n.event_id : to(),
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
            var s = this._lastEventId = r && r.event_id ? r.event_id : to(),
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
            var r = n && n.event_id ? n.event_id : to();
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
                maxBreadcrumbs: c = vQ
            } = s.getOptions && s.getOptions() || {};
            if (!(c <= 0)) {
                var u = cA(),
                    f = {
                        timestamp: u,
                        ...t
                    },
                    d = o ? nA(() => o(f, n)) : f;
                d !== null && r.addBreadcrumb(d, c)
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
            var n = My(this);
            try {
                t(this)
            } finally {
                My(n)
            }
        }
        getIntegration(t) {
            var n = this.getClient();
            if (!n) return null;
            try {
                return n.getIntegration(t)
            } catch {
                return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && qt.warn(`Cannot retrieve integration ${t.id} from the current Hub`), null
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
            r && gQ(r), this._sendSessionUpdate(), n && n.setSession()
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
            var f = pQ({
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
                var d = n.getSession && n.getSession();
                d && d.status === "ok" && tu(d, {
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
            var r = nu(),
                s = r.__SENTRY__;
            if (s && s.extensions && typeof s.extensions[t] == "function") return s.extensions[t].apply(this, n);
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && qt.warn(`Extension method ${t} couldn't be found, doing nothing.`)
        }
    }

    function nu() {
        var e = tn();
        return e.__SENTRY__ = e.__SENTRY__ || {
            extensions: {},
            hub: void 0
        }, e
    }

    function My(e) {
        var t = nu(),
            n = di(t);
        return Fp(t, e), n
    }

    function jn() {
        var e = nu();
        return (!dA(e) || di(e).isOlderThan(Up)) && Fp(e, new $o), Pp() ? EQ(e) : di(e)
    }

    function EQ(e) {
        try {
            var t = nu().__SENTRY__,
                n = t && t.extensions && t.extensions.domain && t.extensions.domain.active;
            if (!n) return di(e);
            if (!dA(n) || di(n).isOlderThan(Up)) {
                var r = di(e).getStackTop();
                Fp(n, new $o(r.client, fs.clone(r.scope)))
            }
            return di(n)
        } catch {
            return di(e)
        }
    }

    function dA(e) {
        return !!(e && e.__SENTRY__ && e.__SENTRY__.hub)
    }

    function di(e) {
        return Dp("hub", () => new $o, e)
    }

    function Fp(e, t) {
        if (!e) return !1;
        var n = e.__SENTRY__ = e.__SENTRY__ || {};
        return n.hub = t, !0
    }

    function _Q(e, t) {
        return jn().captureException(e, {
            captureContext: t
        })
    }

    function yQ(e) {
        jn().withScope(e)
    }

    function bQ(e) {
        var t = e.protocol ? `${e.protocol}:` : "",
            n = e.port ? `:${e.port}` : "";
        return `${t}//${e.host}${n}${e.path?`/${e.path}`:""}/api/`
    }

    function TQ(e, t) {
        var n = UJ(e),
            r = `${bQ(n)}embed/error-page/`;
        let s = `dsn=${kJ(n)}`;
        for (var o in t)
            if (o !== "dsn")
                if (o === "user") {
                    var c = t.user;
                    if (!c) continue;
                    c.name && (s += `&name=${encodeURIComponent(c.name)}`), c.email && (s += `&email=${encodeURIComponent(c.email)}`)
                } else s += `&${encodeURIComponent(o)}=${encodeURIComponent(t[o])}`;
        return `${r}?${s}`
    }
    let xy;
    class mo {
        constructor() {
            mo.prototype.__init.call(this)
        }
        static __initStatic() {
            this.id = "FunctionToString"
        }
        __init() {
            this.name = mo.id
        }
        setupOnce() {
            xy = Function.prototype.toString, Function.prototype.toString = function(...t) {
                var n = xp(this) || this;
                return xy.apply(n, t)
            }
        }
    }
    mo.__initStatic();
    var SQ = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/];
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
                            d = OQ(c._options, f);
                        return AQ(s, d) ? null : s
                    }
                }
                return s
            };
            r.id = this.name, t(r)
        }
    }
    zs.__initStatic();

    function OQ(e = {}, t = {}) {
        return {
            allowUrls: [...e.allowUrls || [], ...t.allowUrls || []],
            denyUrls: [...e.denyUrls || [], ...t.denyUrls || []],
            ignoreErrors: [...e.ignoreErrors || [], ...t.ignoreErrors || [], ...SQ],
            ignoreInternal: e.ignoreInternal !== void 0 ? e.ignoreInternal : !0
        }
    }

    function AQ(e, t) {
        return t.ignoreInternal && NQ(e) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && qt.warn(`Event dropped due to being internal Sentry Error.
Event: ${Bs(e)}`), !0) : IQ(e, t.ignoreErrors) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && qt.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${Bs(e)}`), !0) : wQ(e, t.denyUrls) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && qt.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${Bs(e)}.
Url: ${pl(e)}`), !0) : CQ(e, t.allowUrls) ? !1 : ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && qt.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${Bs(e)}.
Url: ${pl(e)}`), !0)
    }

    function IQ(e, t) {
        return !t || !t.length ? !1 : RQ(e).some(n => t.some(r => Mp(n, r)))
    }

    function wQ(e, t) {
        if (!t || !t.length) return !1;
        var n = pl(e);
        return n ? t.some(r => Mp(n, r)) : !1
    }

    function CQ(e, t) {
        if (!t || !t.length) return !0;
        var n = pl(e);
        return n ? t.some(r => Mp(n, r)) : !0
    }

    function RQ(e) {
        if (e.message) return [e.message];
        if (e.exception) try {
            const {
                type: t = "",
                value: n = ""
            } = e.exception.values && e.exception.values[0] || {};
            return [`${n}`, `${t}: ${n}`]
        } catch {
            return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && qt.error(`Cannot extract message for event ${Bs(e)}`), []
        }
        return []
    }

    function NQ(e) {
        try {
            return e.exception.values[0].type === "SentryError"
        } catch {}
        return !1
    }

    function LQ(e = []) {
        for (let n = e.length - 1; n >= 0; n--) {
            var t = e[n];
            if (t && t.filename !== "<anonymous>" && t.filename !== "[native code]") return t.filename || null
        }
        return null
    }

    function pl(e) {
        try {
            let t;
            try {
                t = e.exception.values[0].stacktrace.frames
            } catch {}
            return t ? LQ(t) : null
        } catch {
            return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && qt.error(`Cannot extract url for event ${Bs(e)}`), null
        }
    }

    function hA(e, t) {
        var n = Bp(e, t),
            r = {
                type: t && t.name,
                value: kQ(t)
            };
        return n.length && (r.stacktrace = {
            frames: n
        }), r.type === void 0 && r.value === "" && (r.value = "Unrecoverable error caught"), r
    }

    function $Q(e, t, n, r) {
        var s = {
            exception: {
                values: [{
                    type: kp(t) ? t.constructor.name : r ? "UnhandledRejection" : "Error",
                    value: `Non-Error ${r?"promise rejection":"exception"} captured with keys: ${GJ(t)}`
                }]
            },
            extra: {
                __serialized__: oA(t)
            }
        };
        if (n) {
            var o = Bp(e, n);
            o.length && (s.exception.values[0].stacktrace = {
                frames: o
            })
        }
        return s
    }

    function ld(e, t) {
        return {
            exception: {
                values: [hA(e, t)]
            }
        }
    }

    function Bp(e, t) {
        var n = t.stacktrace || t.stack || "",
            r = DQ(t);
        try {
            return e(n, r)
        } catch {}
        return []
    }
    var PQ = /Minified React error #\d+;/i;

    function DQ(e) {
        if (e) {
            if (typeof e.framesToPop == "number") return e.framesToPop;
            if (PQ.test(e.message)) return 1
        }
        return 0
    }

    function kQ(e) {
        var t = e && e.message;
        return t ? t.error && typeof t.error.message == "string" ? t.error.message : t : "No error message"
    }

    function pA(e, t, n, r, s) {
        let o;
        if (ZO(t) && t.error) {
            var c = t;
            return ld(e, c.error)
        }
        if (Ay(t) || AJ(t)) {
            var u = t;
            if ("stack" in t) o = ld(e, t);
            else {
                var f = u.name || (Ay(u) ? "DOMError" : "DOMException"),
                    d = u.message ? `${f}: ${u.message}` : f;
                o = Uy(e, d, n, r), ch(o, d)
            }
            return "code" in u && (o.tags = {
                ...o.tags,
                "DOMException.code": `${u.code}`
            }), o
        }
        if (QO(t)) return ld(e, t);
        if (eu(t) || kp(t)) {
            var g = t;
            return o = $Q(e, g, n, s), hl(o, {
                synthetic: !0
            }), o
        }
        return o = Uy(e, t, n, r), ch(o, `${t}`, void 0), hl(o, {
            synthetic: !0
        }), o
    }

    function Uy(e, t, n, r) {
        var s = {
            message: t
        };
        if (r && n) {
            var o = Bp(e, n);
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
    var MQ = "Breadcrumbs";
    class vo {
        static __initStatic() {
            this.id = MQ
        }
        __init() {
            this.name = vo.id
        }
        constructor(t) {
            vo.prototype.__init.call(this), this.options = {
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
            this.options.console && rs("console", UQ), this.options.dom && rs("dom", xQ(this.options.dom)), this.options.xhr && rs("xhr", FQ), this.options.fetch && rs("fetch", BQ), this.options.history && rs("history", GQ)
        }
    }
    vo.__initStatic();

    function xQ(e) {
        function t(n) {
            let r, s = typeof e == "object" ? e.serializeAttribute : void 0;
            typeof s == "string" && (s = [s]);
            try {
                r = n.event.target ? ah(n.event.target, s) : ah(n.event, s)
            } catch {
                r = "<unknown>"
            }
            r.length !== 0 && jn().addBreadcrumb({
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

    function UQ(e) {
        var t = {
            category: "console",
            data: {
                arguments: e.args,
                logger: "console"
            },
            level: fQ(e.level),
            message: Cy(e.args, " ")
        };
        if (e.level === "assert")
            if (e.args[0] === !1) t.message = `Assertion failed: ${Cy(e.args.slice(1)," ")||"console.assert"}`, t.data.arguments = e.args.slice(1);
            else return;
        jn().addBreadcrumb(t, {
            input: e.args,
            level: e.level
        })
    }

    function FQ(e) {
        if (e.endTimestamp) {
            if (e.xhr.__sentry_own_request__) return;
            const {
                method: t,
                url: n,
                status_code: r,
                body: s
            } = e.xhr.__sentry_xhr__ || {};
            jn().addBreadcrumb({
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

    function BQ(e) {
        !e.endTimestamp || e.fetchData.url.match(/sentry_key/) && e.fetchData.method === "POST" || (e.error ? jn().addBreadcrumb({
            category: "fetch",
            data: e.fetchData,
            level: "error",
            type: "http"
        }, {
            data: e.error,
            input: e.args
        }) : jn().addBreadcrumb({
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

    function GQ(e) {
        var t = tn();
        let n = e.from,
            r = e.to;
        var s = od(t.location.href);
        let o = od(n);
        var c = od(r);
        o.path || (o = s), s.protocol === c.protocol && s.host === c.host && (r = c.relative), s.protocol === o.protocol && s.host === o.host && (n = o.relative), jn().addBreadcrumb({
            category: "navigation",
            data: {
                from: n,
                to: r
            }
        })
    }
    let fh = 0;

    function gA() {
        return fh > 0
    }

    function WQ() {
        fh += 1, setTimeout(() => {
            fh -= 1
        })
    }

    function ca(e, t = {}, n) {
        if (typeof e != "function") return e;
        try {
            var r = e.__sentry_wrapped__;
            if (r) return r;
            if (xp(e)) return e
        } catch {
            return e
        }
        var s = function() {
            var u = Array.prototype.slice.call(arguments);
            try {
                n && typeof n == "function" && n.apply(this, arguments);
                var f = u.map(d => ca(d, t));
                return e.apply(this, f)
            } catch (d) {
                throw WQ(), yQ(g => {
                    g.addEventProcessor(_ => (t.mechanism && (ch(_, void 0, void 0), hl(_, t.mechanism)), _.extra = {
                        ..._.extra,
                        arguments: u
                    }, _)), _Q(d)
                }), d
            }
        };
        try {
            for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (s[o] = e[o])
        } catch {}
        iA(s, e), rA(e, "__sentry_wrapped__", s);
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
                onerror: jQ,
                onunhandledrejection: HQ
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
                r && t[n] && (YQ(n), r(), this._installFunc[n] = void 0)
            }
        }
    }
    vi.__initStatic();

    function jQ() {
        rs("error", e => {
            const [t, n, r] = EA();
            if (!t.getIntegration(vi)) return;
            const {
                msg: s,
                url: o,
                line: c,
                column: u,
                error: f
            } = e;
            if (!(gA() || f && f.__sentry_own_request__)) {
                var d = f === void 0 && oa(s) ? KQ(s, o, c, u) : mA(pA(n, f || s, void 0, r, !1), o, c, u);
                d.level = "error", vA(t, f, d, "onerror")
            }
        })
    }

    function HQ() {
        rs("unhandledrejection", e => {
            const [t, n, r] = EA();
            if (!t.getIntegration(vi)) return;
            let s = e;
            try {
                "reason" in e ? s = e.reason : "detail" in e && "reason" in e.detail && (s = e.detail.reason)
            } catch {}
            if (gA() || s && s.__sentry_own_request__) return !0;
            var o = IJ(s) ? VQ(s) : pA(n, s, void 0, r, !0);
            o.level = "error", vA(t, s, o, "onunhandledrejection")
        })
    }

    function VQ(e) {
        return {
            exception: {
                values: [{
                    type: "UnhandledRejection",
                    value: `Non-Error promise rejection captured with value: ${String(e)}`
                }]
            }
        }
    }

    function KQ(e, t, n, r) {
        var s = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
        let o = ZO(e) ? e.message : e,
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
        return mA(f, t, n, r)
    }

    function mA(e, t, n, r) {
        var s = e.exception = e.exception || {},
            o = s.values = s.values || [],
            c = o[0] = o[0] || {},
            u = c.stacktrace = c.stacktrace || {},
            f = u.frames = u.frames || [],
            d = isNaN(parseInt(r, 10)) ? void 0 : r,
            g = isNaN(parseInt(n, 10)) ? void 0 : n,
            _ = oa(t) && t.length > 0 ? t : $J();
        return f.length === 0 && f.push({
            colno: d,
            filename: _,
            function: "?",
            in_app: !0,
            lineno: g
        }), e
    }

    function YQ(e) {
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && qt.log(`Global Handler attached: ${e}`)
    }

    function vA(e, t, n, r) {
        hl(n, {
            handled: !1,
            type: r
        }), e.captureEvent(n, {
            originalException: t
        })
    }

    function EA() {
        var e = jn(),
            t = e.getClient(),
            n = t && t.getOptions() || {
                stackParser: () => [],
                attachStacktrace: !1
            };
        return [e, n.stackParser, n.attachStacktrace]
    }
    var qQ = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"];
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
            this._options.setTimeout && gn(t, "setTimeout", Fy), this._options.setInterval && gn(t, "setInterval", Fy), this._options.requestAnimationFrame && gn(t, "requestAnimationFrame", zQ), this._options.XMLHttpRequest && "XMLHttpRequest" in t && gn(XMLHttpRequest.prototype, "send", XQ);
            var n = this._options.eventTarget;
            if (n) {
                var r = Array.isArray(n) ? n : qQ;
                r.forEach(JQ)
            }
        }
    }
    Eo.__initStatic();

    function Fy(e) {
        return function(...t) {
            var n = t[0];
            return t[0] = ca(n, {
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

    function zQ(e) {
        return function(t) {
            return e.apply(this, [ca(t, {
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

    function XQ(e) {
        return function(...t) {
            var n = this,
                r = ["onload", "onerror", "onprogress", "onreadystatechange"];
            return r.forEach(s => {
                s in n && typeof n[s] == "function" && gn(n, s, function(o) {
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
                        u = xp(o);
                    return u && (c.mechanism.data.handler = Oi(u)), ca(o, c)
                })
            }), e.apply(this, t)
        }
    }

    function JQ(e) {
        var t = tn(),
            n = t[e] && t[e].prototype;
        !n || !n.hasOwnProperty || !n.hasOwnProperty("addEventListener") || (gn(n, "addEventListener", function(r) {
            return function(s, o, c) {
                try {
                    typeof o.handleEvent == "function" && (o.handleEvent = ca(o.handleEvent, {
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
                return r.apply(this, [s, ca(o, {
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
        }), gn(n, "removeEventListener", function(r) {
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
    var QQ = "cause",
        ZQ = 5;
    class Xs {
        static __initStatic() {
            this.id = "LinkedErrors"
        }
        __init() {
            this.name = Xs.id
        }
        constructor(t = {}) {
            Xs.prototype.__init.call(this), this._key = t.key || QQ, this._limit = t.limit || ZQ
        }
        setupOnce() {
            var t = jn().getClient();
            !t || fA((n, r) => {
                var s = jn().getIntegration(Xs);
                return s ? eZ(t.getOptions().stackParser, s._key, s._limit, n, r) : n
            })
        }
    }
    Xs.__initStatic();

    function eZ(e, t, n, r, s) {
        if (!r.exception || !r.exception.values || !s || !Di(s.originalException, Error)) return r;
        var o = _A(e, n, s.originalException, t);
        return r.exception.values = [...o, ...r.exception.values], r
    }

    function _A(e, t, n, r, s = []) {
        if (!Di(n[r], Error) || s.length + 1 >= t) return s;
        var o = hA(e, n[r]);
        return _A(e, t, n[r], r, [o, ...s])
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
            fA(t => {
                if (jn().getIntegration(Js)) {
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
                        if (tZ(s, o._previousEvent)) return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && qt.warn("Event dropped due to being a duplicate of previously captured event."), null
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

    function tZ(e, t) {
        return t ? !!(nZ(e, t) || rZ(e, t)) : !1
    }

    function nZ(e, t) {
        var n = e.message,
            r = t.message;
        return !(!n && !r || n && !r || !n && r || n !== r || !bA(e, t) || !yA(e, t))
    }

    function rZ(e, t) {
        var n = By(t),
            r = By(e);
        return !(!n || !r || n.type !== r.type || n.value !== r.value || !bA(e, t) || !yA(e, t))
    }

    function yA(e, t) {
        let n = Gy(e),
            r = Gy(t);
        if (!n && !r) return !0;
        if (n && !r || !n && r || (n = n, r = r, r.length !== n.length)) return !1;
        for (let c = 0; c < r.length; c++) {
            var s = r[c],
                o = n[c];
            if (s.filename !== o.filename || s.lineno !== o.lineno || s.colno !== o.colno || s.function !== o.function) return !1
        }
        return !0
    }

    function bA(e, t) {
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

    function By(e) {
        return e.exception && e.exception.values && e.exception.values[0]
    }

    function Gy(e) {
        var t = e.exception;
        if (t) try {
            return t.values[0].stacktrace.frames
        } catch {
            return
        }
    }
    new zs, new mo, new Eo, new vo, new vi, new Xs, new Qs, new Js;

    function iZ(e = {}, t = jn()) {
        var n = tn();
        if (!n.document) {
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && qt.error("Global document not defined in showReportDialog call");
            return
        }
        const {
            client: r,
            scope: s
        } = t.getStackTop();
        var o = e.dsn || r && r.getDsn();
        if (!o) {
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && qt.error("DSN not configured for showReportDialog call");
            return
        }
        s && (e.user = {
            ...s.getUser(),
            ...e.user
        }), e.eventId || (e.eventId = t.lastEventId());
        var c = n.document.createElement("script");
        c.async = !0, c.src = TQ(o, e), e.onLoad && (c.onload = e.onLoad);
        var u = n.document.head || n.document.body;
        u ? u.appendChild(c) : (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && qt.error("Not injecting report dialog. No injection point found in HTML")
    }
    const sZ = ze({
            setup() {
                return {
                    fatalError: pn(Lo.fatal.error)
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
                    iZ({
                        id: (n = (t = (e = this.fatalError) == null ? void 0 : e.event) == null ? void 0 : t.event_id) != null ? n : "Unknown"
                    })
                }
            }
        }),
        Po = e => (ha("data-v-d0abff79"), e = e(), pa(), e),
        aZ = {
            class: "jbg fatal"
        },
        oZ = {
            class: "constrain"
        },
        cZ = Po(() => Y("a", {
            class: "logo",
            href: "/",
            "aria-label": "Jackbox Games Logo"
        }, null, -1)),
        lZ = {
            class: "content"
        },
        uZ = Po(() => Y("h1", null, "You have encountered an error", -1)),
        fZ = Po(() => Y("p", null, "Something went wrong! But don't worry, you can try a few things to get going.", -1)),
        dZ = Po(() => Y("ul", null, [Y("li", null, "Refresh the page"), Y("li", null, "Turn off adblockers or other browser extensions."), Y("li", null, "Check your connection to the Internet."), Y("li", null, "Make sure you're using an up-to-date browser."), Y("li", null, "If that doesn't work, let us know.")], -1)),
        hZ = Po(() => Y("hr", null, null, -1)),
        pZ = {
            class: "error"
        };

    function gZ(e, t, n, r, s, o) {
        return z(), Z("div", aZ, [Y("div", oZ, [cZ, Y("div", lZ, [uZ, fZ, dZ, Y("button", {
            onClick: t[0] || (t[0] = (...c) => e.onFeedbackClick && e.onFeedbackClick(...c))
        }, "Tell us what happened"), hZ, Y("pre", pZ, Ie(e.message), 1)])])])
    }
    const mZ = mt(sZ, [
            ["render", gZ],
            ["__scopeId", "data-v-d0abff79"]
        ]),
        Gc = dr({
            hasCrashed: !1
        }),
        vZ = {
            install: e => {
                if (e.config.globalProperties.$handleEcastError) return;
                e.provide(Lo.fatal.error, On(() => Gc));
                const t = (n, r) => {
                    var s, o;
                    if (n instanceof Bn.EcastEntityNotFound || n instanceof Bn.EcastFilterError || n instanceof Bn.EcastRateLimitExceeded || n instanceof Error && ((s = n.message) == null ? void 0 : s.includes("Socket not ready to send")) || n instanceof Error && ((o = n.message) == null ? void 0 : o.includes("No connection available"))) return console.warn(n);
                    throw r ? console.error(r, n) : console.error(n), n
                };
                window.tv.onError = async (n, r) => {
                    if (n.level === "error" && (Gc.hasCrashed = !0, Gc.event = n, Gc.hint = r), e.config.globalProperties.$debugRecorder) return await e.config.globalProperties.$debugRecorder.sendToEcast()
                }, e.component("Fatal", mZ), e.config.globalProperties.$handleEcastError = t
            }
        };
    var EZ = vJ,
        _Z = bJ;

    function yZ(e, t) {
        t = EZ(t, e);
        for (var n = 0, r = t.length; e != null && n < r;) e = e[_Z(t[n++])];
        return n && n == r ? e : void 0
    }
    var bZ = yZ,
        TZ = bZ;

    function SZ(e, t, n) {
        var r = e == null ? void 0 : TZ(e, t);
        return r === void 0 ? n : r
    }
    var OZ = SZ,
        AZ = Math.floor,
        IZ = Math.random;

    function wZ(e, t) {
        return e + AZ(IZ() * (t - e + 1))
    }
    var CZ = wZ,
        RZ = CZ;

    function NZ(e) {
        var t = e.length;
        return t ? e[RZ(0, t - 1)] : void 0
    }
    var TA = NZ,
        LZ = zO;

    function $Z(e, t) {
        return LZ(t, function(n) {
            return e[n]
        })
    }
    var PZ = $Z,
        DZ = PZ,
        kZ = Zl;

    function MZ(e) {
        return e == null ? [] : DZ(e, kZ(e))
    }
    var xZ = MZ,
        UZ = TA,
        FZ = xZ;

    function BZ(e) {
        return UZ(FZ(e))
    }
    var GZ = BZ,
        WZ = TA,
        jZ = GZ,
        HZ = Ri;

    function VZ(e) {
        var t = HZ(e) ? WZ : jZ;
        return t(e)
    }
    var KZ = VZ;

    function Wy(e, t) {
        const n = e.global.locale,
            r = e.global.messages[n],
            s = OZ(r, t);
        return Array.isArray(s) || console.warn(`[i18nPlugin] Translation with key ${t} is not an array`), KZ(s)
    }
    const YZ = {
            install: (e, t) => {
                e.directive("ts", (n, r) => {
                    const s = Wy(t.i18n, r.value);
                    n.textContent = s || ""
                }), e.config.globalProperties.$ts = function(r) {
                    return Wy(t.i18n, r) || ""
                }, e.config.globalProperties.$t = t.i18n.global.t, e.config.globalProperties.$tc = t.i18n.global.tc, e.config.globalProperties.$te = t.i18n.global.te, e.config.globalProperties.$tm = t.i18n.global.tm
            }
        },
        qZ = ze({
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
        zZ = "main/@connect/assets/928ef0da.png",
        XZ = "main/@connect/assets/0bb76a2d.png",
        JZ = "main/@connect/assets/ed4469b3.png",
        QZ = {
            key: 0,
            class: "image",
            src: zZ,
            alt: "Kicked"
        },
        ZZ = {
            key: 1,
            class: "image",
            src: XZ,
            alt: "Thank You"
        },
        eee = {
            key: 2,
            class: "image",
            src: JZ,
            alt: "Error"
        },
        tee = {
            class: "text"
        },
        nee = {
            key: 3,
            class: "subtext"
        },
        ree = {
            class: "actions"
        };

    function iee(e, t, n, r, s, o) {
        const c = mn("bb");
        return z(), Z("div", {
            class: Ye(["error-model", e.classes])
        }, [e.image === "tear" ? (z(), Z("img", QZ)) : e.image === "moon" ? (z(), Z("img", ZZ)) : (z(), Z("img", eee)), je(Y("h3", tee, null, 512), [
            [c, e.text]
        ]), e.subtext ? je((z(), Z("h3", nee, null, 512)), [
            [c, e.subtext]
        ]) : we("", !0), Y("div", ree, [je(Y("button", {
            onClick: t[0] || (t[0] = Gt(u => e.$emit("resolve"), ["prevent"]))
        }, null, 512), [
            [c, e.dismissText]
        ])])], 2)
    }
    const see = mt(qZ, [
            ["render", iee],
            ["__scopeId", "data-v-420dd700"]
        ]),
        aee = ze({
            props: {
                text: String,
                subtext: String,
                classes: {
                    type: [Array, String],
                    default: () => "jbg"
                },
                options: Array
            },
            emits: ["resolve"]
        }),
        oee = {
            class: "text"
        },
        cee = {
            key: 0,
            class: "subtext"
        },
        lee = {
            class: "actions"
        },
        uee = ["onClick"];

    function fee(e, t, n, r, s, o) {
        const c = mn("bb");
        return z(), Z("div", {
            class: Ye(["options-modal", e.classes])
        }, [je(Y("h3", oee, null, 512), [
            [c, e.text]
        ]), e.subtext ? je((z(), Z("h3", cee, null, 512)), [
            [c, e.subtext]
        ]) : we("", !0), Y("div", lee, [(z(!0), Z(ut, null, Cr(e.options, (u, f) => je((z(), Z("button", {
            key: f,
            class: Ye(u.classes),
            onClick: Gt(d => e.$emit("resolve", u.value), ["prevent"])
        }, null, 10, uee)), [
            [c, u.text]
        ])), 128))])], 2)
    }
    const dee = mt(aee, [
            ["render", fee],
            ["__scopeId", "data-v-db592987"]
        ]),
        hee = ze({
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
                    return this.props = t, this.classes = n.classes || "jbg", e === "Error" ? this.content = see : e === "Options" ? this.content = dee : this.content = e, new Promise(r => {
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

    function pee(e, t, n, r, s, o) {
        return z(), Ln(yo, {
            name: "modal-transition"
        }, {
            default: Kr(() => [e.props ? (z(), Z("div", {
                key: 0,
                class: Ye(["modal", e.classes]),
                onKeyup: t[0] || (t[0] = os((...c) => e.onBackgroundClick && e.onBackgroundClick(...c), ["esc"])),
                onClick: t[1] || (t[1] = Gt((...c) => e.onBackgroundClick && e.onBackgroundClick(...c), ["self"]))
            }, [e.content ? (z(), Ln(S$(e.content), Ph({
                key: 0,
                class: "content"
            }, e.props, {
                onResolve: e.onResolve
            }), null, 16, ["onResolve"])) : we("", !0)], 34)) : we("", !0)]),
            _: 1
        })
    }
    const gee = mt(hee, [
            ["render", pee],
            ["__scopeId", "data-v-e6feb9c0"]
        ]),
        mee = {
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
                e.component("Modal", gee), e.config.globalProperties.$showModal = n, e.config.globalProperties.$registerModal = r
            }
        };
    ze({
        setup() {
            return {
                announcment: pn(Lo.textDescriptions.announcement)
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
                fatalError: pn(Lo.fatal.error)
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
    const vee = {
            LABEL: "BRANCH",
            REFRESH_REQUIRED: "Refresh Required",
            PREFERRED: "PREFERRED BRANCH",
            SELECT: "Select a Branch",
            WAITING: "Waiting for Room"
        },
        Eee = {
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
        _ee = {
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
        yee = "Link to Jackbox Games Homepage",
        bee = {
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
        Tee = {
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
        See = {
            EMPTY: "No Past Games Yet",
            MANAGE: "MANAGE",
            TITLE: "YOUR PAST GAMES"
        },
        Oee = {
            TITLE: "RECENT GAMES",
            VIEW_ALL: {
                BUTTON: "VIEW ALL",
                LINK: "VIEW ALL PAST GAMES"
            }
        },
        Aee = {
            GAME_FULL: "Game is full",
            GAME_STARTED: "Game has started",
            ROOM_NOT_FOUND: "Room not found"
        },
        Iee = {
            GAME_FULL: "GAME IS FULL",
            GAME_STARTED: "GAME HAS STARTED",
            JOIN_AUDIENCE: "JOIN AUDIENCE",
            RECONNECT: "RECONNECT",
            TWITCH_LOGIN: "LOGIN WITH TWITCH"
        },
        wee = {
            CAMERA: "[b]HEADS UP:[/b] We\u2019re not detecting a camera, but you can still play the game without a photo. If this seems wrong, try joining with a different browser.",
            STYLE: "[b]HEADS UP:[/b] Your browser seems a bit outdated, and will have some issues displaying this game.",
            TOS: "By clicking {submit}, you agree to our [tos]Terms of Service[/tos]"
        },
        Cee = {
            BRANCH: vee,
            ERROR: Eee,
            FORM: _ee,
            HOMEPAGE_LINK: yee,
            MENU: bee,
            PAST_GAME: Tee,
            PAST_GAMES: See,
            RECENT_GAMES: Oee,
            STATUS: Aee,
            SUBMIT: Iee,
            WARNING: wee
        },
        Ree = {
            LABEL: "SECTION",
            REFRESH_REQUIRED: "Actualisation requise",
            PREFERRED: "SECTION PR\xC9F\xC9R\xC9E",
            SELECT: "Choisissez une section",
            WAITING: "En attente de la salle"
        },
        Nee = {
            UNSUPPORTED_BROWSER: "Le jeu n'est pas compatible avec votre navigateur. Allez sur '?' ou sur AIDE pour afficher une liste des navigateurs compatibles.",
            ROOM_IS_FULL: "La salle est pleine.",
            ROOM_NOT_FOUND: "Salle introuvable",
            AUDIENCE_IS_FULL: "Il n'y a plus de place dans le public.",
            UNABLE_TO_CONNECT: "Impossible de se connecter au serveur de Jackbox Games. Les bloqueurs de publicit\xE9 ou les modules de protection de la confidentialit\xE9 sont g\xE9n\xE9ralement \xE0 l'origine de ce probl\xE8me.",
            UNABLE_TO_PRELOAD: "Impossible de pr\xE9charger ce pack de jeux",
            KICKED: "Vous ne pouvez pas rejoindre la partie, parce que vous avez \xE9t\xE9 \xE9ject\xE9(e) par un mod\xE9rateur.",
            REQUIRES_TWITCH_LOGIN: "Ce jeu n\xE9cessite une connexion Twitch.",
            ROOM_IS_LOCKED: "La salle est ferm\xE9e.",
            INCORRECT_PASSWORD: "Mot de passe incorrect",
            GENERIC: "Erreur en rejoignant la salle",
            FILTER_NAME: "Le filtre anti-grossi\xE8ret\xE9 est activ\xE9 pour cette partie. Veuillez choisir un autre nom."
        },
        Lee = {
            NAME: "NOM",
            NAME_PLACEHOLDER: "INDIQUEZ VOTRE NOM",
            PASSWORD_PLACEHOLDER: "TAPEZ UN MOT DE PASSE \xC0 5\xA0CHIFFRES",
            PASSWORD_REQUIRED_TITLE: "Mot de passe requis",
            PASSWORD_REQUIRED_BODY: "Indiquez le mot de passe ou rejoignez la salle en tant que spectateur.",
            PASSWORD_JOIN_AS_PLAYER: "Rejoindre en tant que joueur",
            PASSWORD_JOIN_AS_AUDIENCE: "Rejoindre en tant que spectateur",
            ROOM_CODE: "CODE DE SALLE",
            ROOM_CODE_PLACEHOLDER: "TAPEZ LE CODE \xC0 4\xA0LETTRES"
        },
        $ee = "Lien vers la page d'accueil de Jackbox Games",
        Pee = {
            APPEARANCE: "APPARENCE",
            DARK: "sombre",
            HELP: "AIDE",
            TWITCH: "TWITCH",
            LIGHT: "clair",
            LOGOUT: "D\xC9CONNEXION",
            MERCH: "PRODUITS D\xC9RIV\xC9S",
            PAST_GAMES: "ANCIENNES PARTIES",
            MAILING_LIST: "LISTE DE DIFFUSION",
            MODERATOR: "MOD\xC9RATEUR"
        },
        Dee = {
            CALL_TO_ACTION: {
                SHOP: "VOIR LE JEU ET LA BOUTIQUE",
                VIEW: "VOIR CETTE PARTIE"
            },
            NEW: "NOUVEAU",
            PLAYED_ON: "JOU\xC9E LE",
            REMOVE: {
                CONFIRM: "\xCAtes-vous s\xFBr\xA0?",
                DESCRIPTION: `Cela supprimera d\xE9finitivement cette partie
de votre liste d'anciennes parties.`,
                MANAGE: "Supprimer la partie\xA0?",
                TITLE: "\xCAtes-vous s\xFBr\xA0?"
            }
        },
        kee = {
            EMPTY: "Aucune ancienne partie",
            MANAGE: "G\xC9RER",
            TITLE: "VOS ANCIENNES PARTIES"
        },
        Mee = {
            TITLE: "PARTIES R\xC9CENTES",
            VIEW_ALL: {
                BUTTON: "VOIR TOUT",
                LINK: "VOIR TOUTES LES ANCIENNES PARTIES"
            }
        },
        xee = {
            GAME_FULL: "La salle est pleine.",
            GAME_STARTED: "La partie a commenc\xE9.",
            ROOM_NOT_FOUND: "Salle introuvable"
        },
        Uee = {
            GAME_FULL: "LA SALLE EST PLEINE.",
            GAME_STARTED: "LA PARTIE A COMMENC\xC9.",
            JOIN_AUDIENCE: "REJOINDRE EN TANT QUE SPECTATEUR",
            RECONNECT: "SE RECONNECTER",
            TWITCH_LOGIN: "SE CONNECTER AVEC TWITCH"
        },
        Fee = {
            CAMERA: "[b]ATTENTION\xA0:[/b] Nous ne d\xE9tectons aucune cam\xE9ra, mais vous pouvez jouer sans afficher votre photo. Si vous pensez qu'il s'agit d'une erreur, essayez de rejoindre en utilisant un autre navigateur.",
            STYLE: "[b]ATTENTION\xA0:[/b] Votre navigateur semble obsol\xE8te. Vous risquez de rencontrer des probl\xE8mes d'affichage avec ce jeu.",
            TOS: "En cliquant sur {submit}, vous acceptez nos [tos]Conditions de service[/tos]."
        },
        Bee = {
            BRANCH: Ree,
            ERROR: Nee,
            FORM: Lee,
            HOMEPAGE_LINK: $ee,
            MENU: Pee,
            PAST_GAME: Dee,
            PAST_GAMES: kee,
            RECENT_GAMES: Mee,
            STATUS: xee,
            SUBMIT: Uee,
            WARNING: Fee
        },
        Gee = {
            LABEL: "BRANCH",
            REFRESH_REQUIRED: "Ricarica necessaria",
            PREFERRED: "BRANCH PREFERITA",
            SELECT: "Scegli una branch",
            WAITING: "In attesa di una stanza"
        },
        Wee = {
            UNSUPPORTED_BROWSER: "Il gioco non \xE8 supportato dal browser attualmente in uso. Clicca su '?' o AIUTO per visualizzare la lista dei browser compatibili.",
            ROOM_IS_FULL: "La partita \xE8 al completo",
            ROOM_NOT_FOUND: "Stanza non trovata",
            AUDIENCE_IS_FULL: "Il pubblico \xE8 al completo",
            UNABLE_TO_CONNECT: "Impossibile collegarsi al server Jackbox Games. Solitamente il problema \xE8 causato da adblocker o estensioni per la privacy.",
            UNABLE_TO_PRELOAD: "Impossibile pre-caricare questo bundle di giochi",
            KICKED: "Non puoi unirti perch\xE9 un moderatore ti ha cacciato",
            REQUIRES_TWITCH_LOGIN: "Questo gioco richiede l'accesso a Twitch",
            ROOM_IS_LOCKED: "La stanza \xE8 bloccata",
            INCORRECT_PASSWORD: "Password errata",
            GENERIC: "Impossibile entrare in questa stanza",
            FILTER_NAME: "Questa partita ha i filtri delle volgarit\xE0 attivi. Scegli un nome diverso."
        },
        jee = {
            NAME: "NOME",
            NAME_PLACEHOLDER: "INSERISCI IL TUO NOME",
            PASSWORD_PLACEHOLDER: "INSERISCI LA PASSWORD DI 5 CARATTERI",
            PASSWORD_REQUIRED_TITLE: "Password necessaria",
            PASSWORD_REQUIRED_BODY: "Inserisci la password o partecipa come pubblico",
            PASSWORD_JOIN_AS_PLAYER: "Partecipa come giocatore",
            PASSWORD_JOIN_AS_AUDIENCE: "Partecipa come pubblico",
            ROOM_CODE: "CODICE STANZA",
            ROOM_CODE_PLACEHOLDER: "INSERISCI IL CODICE DI 4 LETTERE"
        },
        Hee = "Link alla homepage di Jackbox Games",
        Vee = {
            APPEARANCE: "ASPETTO",
            DARK: "scuro",
            HELP: "AIUTO",
            TWITCH: "TWITCH",
            LIGHT: "chiaro",
            LOGOUT: "ESCI",
            MERCH: "NEGOZIO",
            PAST_GAMES: "PARTITE PRECEDENTI",
            MAILING_LIST: "NEWSLETTER",
            MODERATOR: "MODERATORE"
        },
        Kee = {
            CALL_TO_ACTION: {
                SHOP: "VISUALIZZA GIOCO E NEGOZIO",
                VIEW: "VISUALIZZA QUESTO GIOCO"
            },
            NEW: "NUOVO",
            PLAYED_ON: "GIOCATO IL",
            REMOVE: {
                CONFIRM: "Confermi?",
                DESCRIPTION: `Quest'azione rimuover\xE0 per sempre questo gioco
dalla lista dei giochi precedenti.`,
                MANAGE: "Rimuovere gioco?",
                TITLE: "Confermi?"
            }
        },
        Yee = {
            EMPTY: "Nessun gioco precedente",
            MANAGE: "GESTISCI",
            TITLE: "I TUOI GIOCHI PRECEDENTI"
        },
        qee = {
            TITLE: "GIOCHI RECENTI",
            VIEW_ALL: {
                BUTTON: "VISUALIZZA TUTTO",
                LINK: "VISUALIZZA TUTTI I GIOCHI RECENTI"
            }
        },
        zee = {
            GAME_FULL: "La partita \xE8 al completo",
            GAME_STARTED: "La partita \xE8 gi\xE0 iniziata",
            ROOM_NOT_FOUND: "Stanza non trovata"
        },
        Xee = {
            GAME_FULL: "LA PARTITA \xC8 AL COMPLETO",
            GAME_STARTED: "LA PARTITA \xC8 GI\xC0 INIZIATA",
            JOIN_AUDIENCE: "PARTECIPA COME PUBBLICO",
            RECONNECT: "RICOLLEGATI",
            TWITCH_LOGIN: "ACCEDI CON TWITCH"
        },
        Jee = {
            CAMERA: "[b]AVVISO:[/b] Non rileviamo la telecamera, ma puoi giocare anche senza aggiungere una foto. Se la cosa non ti torna, prova ad accedere usando un altro browser.",
            STYLE: "[b]AVVISO:[/b] Il tuo browser \xE8 obsoleto e avr\xE0 dei problemi a visualizzare il gioco.",
            TOS: "Selezionando {submit}, accetti le [tos]Condizioni del servizio[/tos]"
        },
        Qee = {
            BRANCH: Gee,
            ERROR: Wee,
            FORM: jee,
            HOMEPAGE_LINK: Hee,
            MENU: Vee,
            PAST_GAME: Kee,
            PAST_GAMES: Yee,
            RECENT_GAMES: qee,
            STATUS: zee,
            SUBMIT: Xee,
            WARNING: Jee
        },
        Zee = {
            LABEL: "ZWEIG",
            REFRESH_REQUIRED: "Refresh ben\xF6tigt",
            PREFERRED: "BEVORZUGTER ZWEIG",
            SELECT: "W\xE4hle deinen Zweig aus",
            WAITING: "Warte auf Raum"
        },
        ete = {
            UNSUPPORTED_BROWSER: "Dieses Spiel wird von diesem Browser nicht unterst\xFCtzt. Unter '?' und HILFE findest du eine vollst\xE4ndige Liste an kompatiblen Browsern.",
            ROOM_IS_FULL: "Das Spiel ist voll",
            ROOM_NOT_FOUND: "Raum wurde nicht gefunden.",
            AUDIENCE_IS_FULL: "Das Publikum ist voll",
            UNABLE_TO_CONNECT: "Es konnte keine Verbindung zum Server von Jackbox Games hergestellt werden. Dies wird h\xE4ufig durch Adblocker oder Privacy Extensions verursacht.",
            UNABLE_TO_PRELOAD: "Preload dieses Bundles ist nicht m\xF6glich",
            KICKED: "Du kannst nicht beitreten, weil du von einem Moderator gekickt wurdest",
            REQUIRES_TWITCH_LOGIN: "F\xFCr diesen Spiel ist Twitch erforderlich",
            ROOM_IS_LOCKED: "Spiel verschlossen",
            INCORRECT_PASSWORD: "Falsches Passwort",
            GENERIC: "Fehler beim Betreten des Spiels",
            FILTER_NAME: "Der Familientauglichkeits-Filter des Spiels ist aktiviert. W\xE4hle einen anderen Namen."
        },
        tte = {
            NAME: "NAME",
            NAME_PLACEHOLDER: "GIB DEINEN NAMEN EIN",
            PASSWORD_PLACEHOLDER: "F\xDCNFSTELLIGES PASSWORT EINGEBEN",
            PASSWORD_REQUIRED_TITLE: "Passwort ben\xF6tigt",
            PASSWORD_REQUIRED_BODY: "Bitte gib das Passwort ein oder setze dich ins Publikum",
            PASSWORD_JOIN_AS_PLAYER: "Als Spieler beitreten",
            PASSWORD_JOIN_AS_AUDIENCE: "Ins Publikum setzen",
            ROOM_CODE: "RAUMCODE",
            ROOM_CODE_PLACEHOLDER: "GIB DEN 4-STELLIGEN CODE EIN"
        },
        nte = "Link zur Homepage von Jackbox Games",
        rte = {
            APPEARANCE: "DARSTELLUNG",
            DARK: "Dunkel",
            HELP: "HILFE",
            TWITCH: "TWITCH",
            LIGHT: "Hell",
            LOGOUT: "ABMELDEN",
            MERCH: "MERCH",
            PAST_GAMES: "ANDERE SPIELE",
            MAILING_LIST: "MAILINGLISTE",
            MODERATOR: "MODERATOR"
        },
        ite = {
            CALL_TO_ACTION: {
                SHOP: "SPIEL UND SHOP ANSEHEN",
                VIEW: "DIESES SPIEL ANSEHEN"
            },
            NEW: "NEU",
            PLAYED_ON: "GESPIELT AM",
            REMOVE: {
                CONFIRM: "Bist du sicher?",
                DESCRIPTION: `Dies wird das Spiel dauerhaft aus der Liste
deiner bisherigen Spiele entfernen.`,
                MANAGE: "Spiel entfernen?",
                TITLE: "Bist du sicher?"
            }
        },
        ste = {
            EMPTY: "Noch keine bisherigen Spiele",
            MANAGE: "VERWALTEN",
            TITLE: "DEINE BISHERIGEN SPIELE"
        },
        ate = {
            TITLE: "AKTUELLE SPIELE",
            VIEW_ALL: {
                BUTTON: "ALLE ANSEHEN",
                LINK: "ALLE BISHERIGEN SPIELE ANSEHEN"
            }
        },
        ote = {
            GAME_FULL: "Spiel ist voll",
            GAME_STARTED: "Spiel hat bereits begonnen",
            ROOM_NOT_FOUND: "Raum wurde nicht gefunden."
        },
        cte = {
            GAME_FULL: "SPIEL IST VOLL",
            GAME_STARTED: "SPIEL HAT BEREITS BEGONNEN",
            JOIN_AUDIENCE: "INS PUBLIKUM SETZEN",
            RECONNECT: "NEU VERBINDEN",
            TWITCH_LOGIN: "MIT TWITCH ANMELDEN"
        },
        lte = {
            CAMERA: "[b]ACHTUNG:[/b] Es wurde keine Kamera erkannt, aber du kannst das Spiel auch ohne Foto spielen. Falls eine Kamera vorhanden ist, probiere es mit einem anderen Browser.",
            STYLE: "[b]ACHTUNG:[/b] Dein Browser scheint etwas veraltet zu sein. Es k\xF6nnte Probleme bei der Anzeige dieses Spiels geben.",
            TOS: "Wenn du auf {submit} klickst, erkl\xE4rst du dich mit unseren [tos]Nutzungsbedingungen[/tos] einverstanden"
        },
        ute = {
            BRANCH: Zee,
            ERROR: ete,
            FORM: tte,
            HOMEPAGE_LINK: nte,
            MENU: rte,
            PAST_GAME: ite,
            PAST_GAMES: ste,
            RECENT_GAMES: ate,
            STATUS: ote,
            SUBMIT: cte,
            WARNING: lte
        },
        fte = {
            LABEL: "RAMA",
            REFRESH_REQUIRED: "Actualizaci\xF3n requerida",
            PREFERRED: "RAMA PREFERIDA",
            SELECT: "Selecciona una rama",
            WAITING: "Esperando la sala"
        },
        dte = {
            UNSUPPORTED_BROWSER: "El juego no es compatible con este navegador. En '?' y AYUDA puedes ver la lista de navegadores compatibles.",
            ROOM_IS_FULL: "La sala est\xE1 llena",
            ROOM_NOT_FOUND: "No se encuentra la sala",
            AUDIENCE_IS_FULL: "El p\xFAblico est\xE1 completo",
            UNABLE_TO_CONNECT: "No ha podido establecerse conexi\xF3n con el servidor de Jackbox Games. Puede ser debido a los bloqueadores de anuncios o a las extensiones de privacidad.",
            UNABLE_TO_PRELOAD: "No se ha podido precargar este lote de juegos",
            KICKED: "No puedes unirte porque te ha expulsado un moderador",
            REQUIRES_TWITCH_LOGIN: "Este juego requiere un inicio de sesi\xF3n de Twitch",
            ROOM_IS_LOCKED: "El juego est\xE1 bloqueado",
            INCORRECT_PASSWORD: "Contrase\xF1a incorrecta",
            GENERIC: "Error al unirte al juego",
            FILTER_NAME: "Esta partida tiene activados los filtros de lenguaje malsonante. Elige un nombre diferente."
        },
        hte = {
            NAME: "NOMBRE",
            NAME_PLACEHOLDER: "INDICA TU NOMBRE",
            PASSWORD_PLACEHOLDER: "INTRODUCIR CONTRASE\xD1A DE 5 D\xCDGITOS",
            PASSWORD_REQUIRED_TITLE: "Hace falta una contrase\xF1a",
            PASSWORD_REQUIRED_BODY: "Introduce la contrase\xF1a o \xFAnete como p\xFAblico",
            PASSWORD_JOIN_AS_PLAYER: "Unirse como jugador",
            PASSWORD_JOIN_AS_AUDIENCE: "Unirse como p\xFAblico",
            ROOM_CODE: "C\xD3DIGO DE LA SALA",
            ROOM_CODE_PLACEHOLDER: "INTRODUCIR C\xD3DIGO DE 4 CARACTERES"
        },
        pte = "Enlace a la p\xE1gina inicial de Jackbox Games",
        gte = {
            APPEARANCE: "APARIENCIA",
            DARK: "oscura",
            HELP: "AYUDA",
            TWITCH: "TWITCH",
            LIGHT: "clara",
            LOGOUT: "CERRAR SESI\xD3N",
            MERCH: "MERCHANDISING",
            PAST_GAMES: "PARTIDAS ANTERIORES",
            MAILING_LIST: "LISTA DE CORREO",
            MODERATOR: "MODERADOR"
        },
        mte = {
            CALL_TO_ACTION: {
                SHOP: "VER JUEGO Y COMPRAR",
                VIEW: "VER ESTE JUEGO"
            },
            NEW: "NUEVO",
            PLAYED_ON: "SE JUEGA EN",
            REMOVE: {
                CONFIRM: "\xBFEst\xE1s seguro?",
                DESCRIPTION: `Esto eliminar\xE1 de forma permanente esta partida
de tu lista de partidas anteriores.`,
                MANAGE: "\xBFRetirar partida?",
                TITLE: "\xBFEst\xE1s seguro?"
            }
        },
        vte = {
            EMPTY: "Todav\xEDa no hay partidas anteriores",
            MANAGE: "ADMINISTRAR",
            TITLE: "PARTIDAS ANTERIORES"
        },
        Ete = {
            TITLE: "PARTIDAS RECIENTES",
            VIEW_ALL: {
                BUTTON: "VER TODO",
                LINK: "VER TODAS LAS PARTIDAS ANTERIORES"
            }
        },
        _te = {
            GAME_FULL: "La partida est\xE1 completa",
            GAME_STARTED: "La partida ha empezado",
            ROOM_NOT_FOUND: "No se encuentra la sala"
        },
        yte = {
            GAME_FULL: "LA PARTIDA EST\xC1 COMPLETA",
            GAME_STARTED: "LA PARTIDA HA EMPEZADO",
            JOIN_AUDIENCE: "UNIRSE COMO P\xDABLICO",
            RECONNECT: "RECONECTAR",
            TWITCH_LOGIN: "INICIAR SESI\xD3N CON TWITCH"
        },
        bte = {
            CAMERA: "[b]AVISO:[/b] No se detecta ninguna c\xE1mara, pero puedes jugar sin foto. Si crees que se trata de un error, cambia de navegador.",
            STYLE: "[b]AVISO:[/b] Tu navegador est\xE1 un poco desactualizado, as\xED que es posible que el juego no se vea del todo bien.",
            TOS: "Al hacer clic en {submit}, aceptas las [tos]Condiciones del servicio[/tos]"
        },
        Tte = {
            BRANCH: fte,
            ERROR: dte,
            FORM: hte,
            HOMEPAGE_LINK: pte,
            MENU: gte,
            PAST_GAME: mte,
            PAST_GAMES: vte,
            RECENT_GAMES: Ete,
            STATUS: _te,
            SUBMIT: yte,
            WARNING: bte
        },
        Ste = {
            LABEL: "RAMA",
            REFRESH_REQUIRED: "Requiere actualizar",
            PREFERRED: "RAMA PREFERIDA",
            SELECT: "Selecciona una rama",
            WAITING: "Esperando una sala"
        },
        Ote = {
            UNSUPPORTED_BROWSER: "El juego no es compatible con este navegador. En '?' o AYUDA puedes ver la lista de navegadores compatibles.",
            ROOM_IS_FULL: "La partida est\xE1 completa",
            ROOM_NOT_FOUND: "No se encuentra la sala",
            AUDIENCE_IS_FULL: "El p\xFAblico est\xE1 completo",
            UNABLE_TO_CONNECT: "No podemos conectarte a los servidores de Jackbox Games. Puede ser debido a los bloqueadores de anuncios y las extensiones de privacidad.",
            UNABLE_TO_PRELOAD: "No se puede precargar este paquete de juegos",
            KICKED: "No puedes unirte porque un moderador te expuls\xF3",
            REQUIRES_TWITCH_LOGIN: "Este juego requiere inicio de sesi\xF3n de Twitch",
            ROOM_IS_LOCKED: "La partida est\xE1 bloqueada",
            INCORRECT_PASSWORD: "Contrase\xF1a incorrecta",
            GENERIC: "Error al unirte a la partida",
            FILTER_NAME: "Esta partida tiene activados los filtros de lenguaje soez. Elige un nombre diferente."
        },
        Ate = {
            NAME: "NOMBRE",
            NAME_PLACEHOLDER: "ESCRIBE TU NOMBRE",
            PASSWORD_PLACEHOLDER: "INGRESA CONTRASE\xD1A DE 5 D\xCDGITOS",
            PASSWORD_REQUIRED_TITLE: "Requiere contrase\xF1a",
            PASSWORD_REQUIRED_BODY: "Ingresa la contrase\xF1a o \xFAnete como parte del p\xFAblico",
            PASSWORD_JOIN_AS_PLAYER: "Unirse como jugador",
            PASSWORD_JOIN_AS_AUDIENCE: "Unirse al p\xFAblico",
            ROOM_CODE: "C\xD3DIGO DE LA SALA",
            ROOM_CODE_PLACEHOLDER: "INGRESA EL C\xD3DIGO DE 4 CARACTERES"
        },
        Ite = "Enlace a la p\xE1gina de inicio de Jackbox Games",
        wte = {
            APPEARANCE: "APARIENCIA",
            DARK: "oscura",
            HELP: "AYUDA",
            TWITCH: "TWITCH",
            LIGHT: "clara",
            LOGOUT: "CERRAR SESI\xD3N",
            MERCH: "PRODUCTOS",
            PAST_GAMES: "PARTIDAS ANTERIORES",
            MAILING_LIST: "LISTA DE CORREO",
            MODERATOR: "MODERADOR"
        },
        Cte = {
            CALL_TO_ACTION: {
                SHOP: "VER JUEGO Y TIENDA",
                VIEW: "VER ESTE JUEGO"
            },
            NEW: "NUEVO",
            PLAYED_ON: "SE JUG\xD3 EN",
            REMOVE: {
                CONFIRM: "\xBFDe verdad?",
                DESCRIPTION: `Eliminar\xE1s permanentemente este juego
de tu lista de partidas anteriores.`,
                MANAGE: "\xBFEliminar juego?",
                TITLE: "\xBFDe verdad?"
            }
        },
        Rte = {
            EMPTY: "A\xFAn no hay partidas anteriores",
            MANAGE: "ADMINISTRAR",
            TITLE: "TUS PARTIDAS ANTERIORES"
        },
        Nte = {
            TITLE: "PARTIDAS RECIENTES",
            VIEW_ALL: {
                BUTTON: "VER TODOS",
                LINK: "VER TODAS LAS PARTIDAS ANTERIORES"
            }
        },
        Lte = {
            GAME_FULL: "La partida est\xE1 completa",
            GAME_STARTED: "La partida ha empezado",
            ROOM_NOT_FOUND: "No se encuentra la sala"
        },
        $te = {
            GAME_FULL: "LA PARTIDA EST\xC1 COMPLETA",
            GAME_STARTED: "LA PARTIDA HA EMPEZADO",
            JOIN_AUDIENCE: "UNIRSE AL P\xDABLICO",
            RECONNECT: "RECONECTAR",
            TWITCH_LOGIN: "INICIAR SESI\xD3N CON TWITCH"
        },
        Pte = {
            CAMERA: "[b]AVISO:[/b] No se detecta ninguna c\xE1mara, pero igual puedes jugar sin una foto. Si crees que se trata de un error, cambia de navegador.",
            STYLE: "[b]AVISO:[/b] Tu navegador est\xE1 un poco desactualizado, as\xED que es posible que el juego no se vea del todo bien.",
            TOS: "Al hacer clic en {submit}, aceptas las [tos]Condiciones del servicio[/tos]"
        },
        Dte = {
            BRANCH: Ste,
            ERROR: Ote,
            FORM: Ate,
            HOMEPAGE_LINK: Ite,
            MENU: wte,
            PAST_GAME: Cte,
            PAST_GAMES: Rte,
            RECENT_GAMES: Nte,
            STATUS: Lte,
            SUBMIT: $te,
            WARNING: Pte
        },
        kte = {
            en: Cee,
            fr: Bee,
            it: Qee,
            de: ute,
            es: Tte,
            "es-XL": Dte
        },
        Mte = ze({
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
        xte = "main/@connect/assets/a96a9236.png",
        SA = e => (ha("data-v-f058cb4c"), e = e(), pa(), e),
        Ute = {
            class: "jbg password"
        },
        Fte = SA(() => Y("img", {
            class: "image",
            src: xte,
            alt: "Enter Password"
        }, null, -1)),
        Bte = {
            class: "text"
        },
        Gte = {
            class: "subtext"
        },
        Wte = {
            class: "actions"
        },
        jte = ["value", "placeholder", "maxlength"],
        Hte = ["disabled"],
        Vte = SA(() => Y("hr", null, null, -1)),
        Kte = {
            class: "or"
        };

    function Yte(e, t, n, r, s, o) {
        const c = mn("bb");
        return z(), Z("div", Ute, [Fte, Y("h3", Bte, Ie(e.$t("FORM.PASSWORD_REQUIRED_TITLE")), 1), Y("p", Gte, Ie(e.$t("FORM.PASSWORD_REQUIRED_BODY")), 1), Y("div", Wte, [Y("input", {
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
        }, null, 40, jte), Y("button", {
            type: "submit",
            disabled: !e.canSubmit,
            onClick: t[1] || (t[1] = Gt(u => e.$emit("resolve", e.password), ["prevent"]))
        }, Ie(e.$t("FORM.PASSWORD_JOIN_AS_PLAYER")), 9, Hte), e.room.audienceEnabled ? (z(), Z(ut, {
            key: 0
        }, [Vte, Y("p", Kte, Ie(e.$t("SEPARATOR.OR")), 1), je(Y("button", {
            class: "audience",
            type: "submit",
            onClick: t[2] || (t[2] = Gt(u => e.$emit("resolve", !0), ["prevent"]))
        }, null, 512), [
            [c, e.$t("FORM.PASSWORD_JOIN_AS_AUDIENCE")]
        ])], 64)) : (z(), Z("button", {
            key: 1,
            class: "cancel",
            onClick: t[3] || (t[3] = Gt(u => e.$emit("resolve", !1), ["prevent"]))
        }, Ie(e.$t("ACTION.CANCEL")), 1))])])
    }
    const qte = mt(Mte, [
            ["render", Yte],
            ["__scopeId", "data-v-f058cb4c"]
        ]),
        zte = ze({
            components: {
                Input: YS
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
                    api: new fp.APIClient({
                        host: hn.serverUrl,
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
                    const e = (n = (t = Io(this.room.appTag)) == null ? void 0 : t.name) != null ? n : "???";
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
                    if (!ke.isSupported) return;
                    this.code = ((t = ke.get("code")) != null ? t : "").toUpperCase(), this.name = ((n = ke.get("name")) != null ? n : "").toUpperCase();
                    const e = (r = ke.get("reconnect")) != null ? r : "";
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
                    !this.code || (await this.getRoomInfo(), this.room || (this.code = "", ke.remove("code"), ke.remove("reconnect")))
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
                    const t = hn.sanitizeName(this.name);
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
                        n = [this.branch, (s = (r = this.match) == null ? void 0 : r.params) == null ? void 0 : s.branch, this.room.controllerBranch, "** hmr **", ke.get("preference:branch"), "** dist **", "main"];
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
                    const e = await this.$showModal(qte, {
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
                        this.room = e, this.warnings = await V3.warningsForAppTag(e.appTag), this.$i18n.locale = this.room.locale;
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
                    let n = hn.sanitizeName(this.name).trim();
                    n.length > this.nameLength && (n = `${n.substr(0,this.nameLength-1)}\u2026`);
                    let r = KS();
                    ke.isSupported && (r = (o = ke.get("uuid")) != null ? o : r, ke.set("uuid", r));
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
                        return ke.isSupported && (ke.set("name", t.name), ke.set("code", this.code), ke.set("branch", this.branch), ke.set("reconnect", `${o.id}:${e}:${o.secret}:${this.branch}`)), window.tv.mount({
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
                    if (e instanceof Bn.EcastRoomIsFull) return t === "audience" ? this.promptForRetry("ERROR.AUDIENCE_IS_FULL") : this.promptForRetry("ERROR.ROOM_IS_FULL");
                    if (e instanceof Bn.EcastRoomIsLocked) return this.promptForRetry("ERROR.ROOM_IS_LOCKED");
                    if (e instanceof Bn.EcastInvalidPassword) return await this.$showModal("Error", {
                        text: this.$t("ERROR.TITLE"),
                        subtext: this.$t("ERROR.INCORRECT_PASSWORD"),
                        dismissText: this.$t("ACTION.TRY_AGAIN")
                    }), this.password = "", this.connect("player");
                    if (e instanceof Bn.EcastRoomNotFound) return this.showError("ERROR.ROOM_NOT_FOUND");
                    if (e instanceof Bn.EcastTwitchLoginRequired) return this.showError("ERROR.REQUIRES_TWITCH_LOGIN");
                    if (e instanceof Bn.EcastPasswordRequired) return this.showError("FORM.PASSWORD_REQUIRED_TITLE");
                    if (e instanceof Bn.EcastFilterError) return this.showError("ERROR.FILTER_NAME");
                    if (e instanceof Bn.EcastPermissionDenied) return this.showError("ERROR.KICKED");
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
        Xte = e => (ha("data-v-43acb4dc"), e = e(), pa(), e),
        Jte = {
            for: "roomcode"
        },
        Qte = {
            key: 0,
            class: "status"
        },
        Zte = {
            key: 1,
            class: "status"
        },
        ene = {
            key: 0,
            class: "warnings"
        },
        tne = {
            for: "username"
        },
        nne = {
            class: "remaining"
        },
        rne = {
            for: "branch"
        },
        ine = {
            key: 0,
            class: "status date"
        },
        sne = ["disabled"],
        ane = {
            key: 0,
            value: "",
            disabled: ""
        },
        one = {
            key: 1,
            value: "",
            disabled: ""
        },
        cne = ["value"],
        lne = {
            key: 0,
            class: "details"
        },
        une = ["disabled"],
        fne = Xte(() => Y("div", {
            class: "loading"
        }, null, -1)),
        dne = {
            class: "tos",
            role: "complementary"
        };

    function hne(e, t, n, r, s, o) {
        const c = Bt("Input"),
            u = mn("t"),
            f = mn("bb");
        return z(), Z("form", {
            autocomplete: "off",
            onSubmit: t[3] || (t[3] = Gt((...d) => e.onFormSubmit && e.onFormSubmit(...d), ["prevent"]))
        }, [Y("fieldset", null, [Y("label", Jte, [Gn(Ie(e.$t("FORM.ROOM_CODE")) + " ", 1), e.state.statusKey ? je((z(), Z("span", Qte, null, 512)), [
            [u, e.state.statusKey]
        ]) : e.state.statusText ? (z(), Z("span", Zte, Ie(e.state.statusText), 1)) : we("", !0)]), ft(c, {
            id: "roomcode",
            modelValue: e.code,
            "onUpdate:modelValue": t[0] || (t[0] = d => e.code = d),
            type: "text",
            autocapitalize: "off",
            autocorrect: "off",
            autocomplete: "off",
            placeholder: e.$t("FORM.ROOM_CODE_PLACEHOLDER"),
            maxlength: e.codeLength,
            onInput: e.onCodeInput
        }, null, 8, ["modelValue", "placeholder", "maxlength", "onInput"]), e.room && e.warnings.length ? (z(), Z("div", ene, [(z(!0), Z(ut, null, Cr(e.warnings, d => (z(), Z(ut, null, [d === "flexbox" ? je((z(), Z("p", {
            key: d
        })), [
            [f, e.$t("WARNING.STYLE")]
        ]) : we("", !0), d === "canvas" ? je((z(), Z("p", {
            key: d
        })), [
            [f, e.$t("ERROR.UNSUPPORTED_BROWSER")]
        ]) : we("", !0), d === "camera" ? je((z(), Z("p", {
            key: d
        })), [
            [f, e.$t("WARNING.CAMERA")]
        ]) : we("", !0)], 64))), 256))])) : we("", !0), Y("label", tne, [Gn(Ie(e.$t("FORM.NAME")) + " ", 1), Y("span", nne, Ie(e.nameLength - e.name.length), 1)]), ft(c, {
            id: "username",
            modelValue: e.name,
            "onUpdate:modelValue": t[1] || (t[1] = d => e.name = d),
            type: "text",
            autocapitalize: "off",
            autocorrect: "off",
            autocomplete: "off",
            disabled: e.twitchUser !== void 0,
            placeholder: e.$t("FORM.NAME_PLACEHOLDER"),
            maxlength: e.nameLength,
            onInput: e.onNameInput
        }, null, 8, ["modelValue", "disabled", "placeholder", "maxlength", "onInput"]), e.shouldShowBranchOptions ? (z(), Z(ut, {
            key: 1
        }, [Y("label", rne, [Gn(Ie(e.$t("BRANCH.LABEL")) + " ", 1), e.selectedBranch ? (z(), Z("span", ine, Ie(e.displayBranchLastUpdated), 1)) : we("", !0)]), Y("div", {
            class: Ye(["select", {
                disabled: !e.room
            }])
        }, [je(Y("select", {
            id: "branch",
            "onUpdate:modelValue": t[2] || (t[2] = d => e.branch = d),
            class: Ye({
                "no-selection": !e.selectedBranch
            }),
            disabled: !e.room || e.isPreloading
        }, [e.room ? (z(), Z("option", one, Ie(e.$t("BRANCH.SELECT")), 1)) : (z(), Z("option", ane, Ie(e.$t("BRANCH.WAITING")), 1)), (z(!0), Z(ut, null, Cr(e.branchOptions, (d, g) => (z(), Z("option", {
            key: g,
            value: g
        }, Ie(g), 9, cne))), 128))], 10, sne), [
            [zb, e.branch]
        ]), e.selectedBranch ? (z(), Z("p", lne, Ie(e.displayBranchType) + " " + Ie(e.displayVersion), 1)) : we("", !0)], 2)], 64)) : we("", !0), Y("button", {
            id: "button-join",
            type: "submit",
            class: Ye({
                connecting: e.isConnecting,
                audience: e.state.joinAs === "audience"
            }),
            disabled: !e.state.canSubmit
        }, [Y("span", null, Ie(e.$t(e.state.submitKey)), 1), fne], 10, une)]), je(Y("p", dne, null, 512), [
            [f, e.$t("WARNING.TOS", {
                submit: e.$t(e.state.submitKey)
            })]
        ])], 32)
    }
    const pne = mt(zte, [
            ["render", hne],
            ["__scopeId", "data-v-43acb4dc"]
        ]),
        gne = ze({
            props: {
                pastGame: {
                    type: Object,
                    required: !0
                },
                isManaging: Boolean,
                index: Number,
                location: String
            },
            emits: {
                remove: e => !0
            },
            data() {
                return {
                    viewed: !1,
                    status: "loading",
                    showConfirm: !1
                }
            },
            computed: {
                cta() {
                    var e;
                    return (e = this.pastGame.game.shopItems) != null && e.length ? this.$t("PAST_GAME.CALL_TO_ACTION.SHOP") : this.$t("PAST_GAME.CALL_TO_ACTION.VIEW")
                },
                hasPreviews() {
                    var e, t;
                    return (t = (e = this.pastGame.game.features) == null ? void 0 : e.includes("previews")) != null ? t : !1
                },
                imageClasses() {
                    return this.status === "error" || !this.hasPreviews ? ["fallback", this.pastGame.artifact.gameName] : this.status === "success" ? ["preview"] : []
                },
                imageSrc() {
                    return `https://s3.amazonaws.com/jbg-blobcast-artifacts/${this.pastGame.artifact.gameName}/${this.pastGame.artifact.id}/preview.png`
                },
                name() {
                    var e;
                    return this.showConfirm ? this.$t("PAST_GAME.REMOVE.CONFIRM") : this.isManaging ? this.$t("PAST_GAME.REMOVE.MANAGE") : (e = this.pastGame.game.name) != null ? e : ""
                }
            },
            watch: {
                isManaging() {
                    this.showConfirm = !1
                }
            },
            mounted() {
                Si.galleryImpression(this.pastGame.artifact.categoryId, this.location)
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
                    ra.setAsViewed(this.index), this.viewed = !0, Si.galleryClick(this.pastGame.artifact.categoryId, this.location)
                },
                onCancelClick() {
                    this.showConfirm = !1
                }
            }
        }),
        ru = e => (ha("data-v-0d31969f"), e = e(), pa(), e),
        mne = ["href"],
        vne = ["src", "alt"],
        Ene = {
            class: "cta"
        },
        _ne = ru(() => Y("svg", {
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
        yne = {
            class: "content"
        },
        bne = {
            class: "name"
        },
        Tne = {
            class: "date"
        },
        Sne = {
            key: 0,
            class: "new"
        },
        One = {
            key: 0,
            class: "items"
        },
        Ane = {
            key: 0,
            viewBox: "0 0 200 200"
        },
        Ine = ru(() => Y("path", {
            d: `M187.4,47.8l-34.1-15.9V29c0-8.8-7.2-16-16-16H57.8c-8.8,0-16,7.2-16,16v18.9L13.6,61.1c-3.9,1.8-6.8,5-8.3,9
                    c-1.5,4-1.3,8.4,0.5,12.2l45,96.4c1.8,3.9,5,6.8,9,8.3c1.8,0.6,3.6,1,5.5,1c2.3,0,4.6-0.5,6.8-1.5l42.7-19.9l14.2,6.6
                    c2.2,1,4.5,1.5,6.7,1.5c6,0,11.8-3.4,14.5-9.2l45-96.4C198.9,61,195.4,51.5,187.4,47.8z M133.4,91.7L107,35.2
                    c-0.4-0.8-0.8-1.5-1.2-2.1h27.6V91.7z M61.8,33h12l-12,5.6V33z M67.2,166.7L25.7,77.5l64.9-30.3l41.6,89.2l-21.7,10.1
                    c0,0,0,0,0,0L67.2,166.7z M153.4,111.4V54l22,10.3L153.4,111.4z`
        }, null, -1)),
        wne = [Ine],
        Cne = {
            key: 1,
            viewBox: "0 0 200 200"
        },
        Rne = ru(() => Y("path", {
            d: `M164.7,52.2h-20.7V35.5c0-6.2-5-11.2-11.2-11.2H47.6c-6.2,0-11.2,5-11.2,11.2v118c0,12.8,10.4,23.2,23.2,23.2h61.3
                       c12.8,0,23.2-10.4,23.2-23.2v-16.2h20.7c14.3,0,25.9-11.6,25.9-25.9V78.1C190.7,63.8,179,52.2,164.7,52.2z
                       M174.2,111.4c0,5.2-4.3,9.5-9.5,9.5h-20.7V68.6h20.7c5.2,0,9.5,4.3,9.5,9.5V111.4z`
        }, null, -1)),
        Nne = [Rne],
        Lne = {
            key: 2,
            viewBox: "0 0 200 200"
        },
        $ne = ru(() => Y("path", {
            d: `M145.5,184.5H55.5c-4.1,0-7.5-3.4-7.5-7.5V95.2H29.6c-3.3,0-6.2-2.1-7.2-5.2L10,50.5c-1.2-3.7,0.7-7.7,4.3-9.2
                       L72.5,17c1.8-0.7,3.8-0.8,5.6-0.1c0.1,0,6.3,15.1,22.4,15.1S122.7,17,122.9,17c1.8-0.7,3.8-0.7,5.6,0.1l58.2,24.2
                       c3.6,1.5,5.4,5.5,4.3,9.2L178.5,90c-1,3.1-3.9,5.2-7.2,5.2H153V177C153,181.2,149.7,184.5,145.5,184.5z`
        }, null, -1)),
        Pne = [$ne],
        Dne = {
            key: 0,
            class: "confirm"
        },
        kne = {
            class: "contain"
        };

    function Mne(e, t, n, r, s, o) {
        return e.pastGame.game ? (z(), Z("div", {
            key: 0,
            class: Ye(["past-game", {
                managing: e.isManaging,
                confirming: e.showConfirm
            }])
        }, [Y("a", {
            class: "card",
            href: e.pastGame.artifact.url,
            target: "_blank",
            onClick: t[2] || (t[2] = (...c) => e.onClick && e.onClick(...c))
        }, [Y("div", {
            class: Ye(["image", e.imageClasses])
        }, [e.hasPreviews ? (z(), Z("img", {
            key: 0,
            ref: "image",
            src: e.imageSrc,
            alt: e.pastGame.artifact.gameName,
            onError: t[0] || (t[0] = (...c) => e.onImageError && e.onImageError(...c)),
            onLoad: t[1] || (t[1] = (...c) => e.onImageLoad && e.onImageLoad(...c))
        }, null, 40, vne)) : we("", !0)], 2), Y("p", Ene, [Gn(Ie(e.cta) + " ", 1), _ne]), Y("div", yne, [Y("p", bne, Ie(e.name), 1), Y("p", Tne, [Y("span", null, Ie(e.$t("PAST_GAME.PLAYED_ON")), 1), Gn(Ie(e.pastGame.artifact.date), 1)])]), !e.viewed && !e.pastGame.artifact.viewed ? (z(), Z("p", Sne, Ie(e.$t("PAST_GAME.NEW")), 1)) : we("", !0)], 8, mne), e.pastGame.game.shopItems && e.pastGame.game.shopItems.length ? (z(), Z("div", One, [(z(!0), Z(ut, null, Cr(e.pastGame.game.shopItems, c => (z(), Z("div", {
            key: c,
            class: "item"
        }, [c === "cards" ? (z(), Z("svg", Ane, wne)) : c === "mugs" ? (z(), Z("svg", Cne, Nne)) : c === "shirts" ? (z(), Z("svg", Lne, Pne)) : we("", !0)]))), 128))])) : we("", !0), ft(yo, {
            name: "fade-transition"
        }, {
            default: Kr(() => [e.showConfirm ? (z(), Z("div", Dne, [Y("div", kne, [Y("p", null, [Y("span", null, Ie(e.$t("PAST_GAME.REMOVE.TITLE")), 1), Gn(" " + Ie(e.$t("PAST_GAME.REMOVE.DESCRIPTION")), 1)]), Y("button", {
                class: "confirm-yes",
                onClick: t[3] || (t[3] = c => e.$emit("remove", e.index))
            }, Ie(e.$t("ACTION.REMOVE")), 1), Y("button", {
                class: "confirm-no",
                onClick: t[4] || (t[4] = (...c) => e.onCancelClick && e.onCancelClick(...c))
            }, Ie(e.$t("ACTION.CANCEL")), 1)])])) : we("", !0)]),
            _: 1
        })], 2)) : we("", !0)
    }
    const OA = mt(gne, [
            ["render", Mne],
            ["__scopeId", "data-v-0d31969f"]
        ]),
        xne = ze({
            components: {
                PastGame: OA
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
        Une = {
            key: 0,
            class: "recent"
        },
        Fne = {
            class: "constrain"
        },
        Bne = {
            class: "top-items"
        };

    function Gne(e, t, n, r, s, o) {
        const c = Bt("PastGame");
        return e.recentGames.length ? (z(), Z("div", Une, [Y("div", Fne, [Y("div", Bne, [Y("h3", null, Ie(e.$t("RECENT_GAMES.TITLE")), 1), Y("button", {
            class: "view-all",
            onClick: t[0] || (t[0] = Gt((...u) => e.onPastGamesClick && e.onPastGamesClick(...u), ["prevent"]))
        }, Ie(e.$t("RECENT_GAMES.VIEW_ALL.BUTTON")), 1)]), (z(!0), Z(ut, null, Cr(e.recentGames, u => (z(), Ln(c, {
            key: u.artifact.url,
            "past-game": u,
            class: "home",
            location: "recent_game"
        }, null, 8, ["past-game"]))), 128)), e.recentGames.length >= 3 ? (z(), Z("a", {
            key: 0,
            class: "more",
            href: "#",
            onClick: t[1] || (t[1] = Gt((...u) => e.onPastGamesClick && e.onPastGamesClick(...u), ["prevent"]))
        }, Ie(e.$t("RECENT_GAMES.VIEW_ALL.LINK")), 1)) : we("", !0)])])) : we("", !0)
    }
    const Wne = mt(xne, [
        ["render", Gne],
        ["__scopeId", "data-v-b57c3cb3"]
    ]);
    /**
     * Vue 3 Carousel 0.1.40
     * (c) 2022
     * @license MIT
     */
    const Fn = {
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

    function jne(e, t) {
        let n;
        return function(...r) {
            n && clearTimeout(n), n = setTimeout(() => {
                e(...r), n = null
            }, t)
        }
    }

    function Hne(e, t) {
        let n;
        return function(...r) {
            const s = this;
            n || (e.apply(s, r), n = !0, setTimeout(() => n = !1, t))
        }
    }

    function Vne(e) {
        var t, n, r;
        return e ? ((n = (t = e[0]) === null || t === void 0 ? void 0 : t.type) === null || n === void 0 ? void 0 : n.name) === "CarouselSlide" ? e : ((r = e[0]) === null || r === void 0 ? void 0 : r.children) || [] : []
    }

    function Kne(e, t) {
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

    function Yne(e) {
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

    function jy(e, t, n, r) {
        return e.wrapAround ? t : Math.min(Math.max(t, r), n)
    }

    function qne({
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
    var zne = ze({
            name: "Carousel",
            props: {
                itemsToShow: {
                    default: Fn.itemsToShow,
                    type: Number
                },
                itemsToScroll: {
                    default: Fn.itemsToScroll,
                    type: Number
                },
                wrapAround: {
                    default: Fn.wrapAround,
                    type: Boolean
                },
                snapAlign: {
                    default: Fn.snapAlign,
                    validator(e) {
                        return ["start", "end", "center", "center-even", "center-odd"].includes(e)
                    }
                },
                transition: {
                    default: Fn.transition,
                    type: Number
                },
                breakpoints: {
                    default: Fn.breakpoints,
                    type: Object
                },
                autoplay: {
                    default: Fn.autoplay,
                    type: Number
                },
                pauseAutoplayOnHover: {
                    default: Fn.pauseAutoplayOnHover,
                    type: Boolean
                },
                modelValue: {
                    default: void 0,
                    type: Number
                },
                mouseDrag: {
                    default: Fn.mouseDrag,
                    type: Boolean
                },
                touchDrag: {
                    default: Fn.touchDrag,
                    type: Boolean
                },
                dir: {
                    default: Fn.dir,
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
                    d = et(1),
                    g = et(null),
                    _ = et(null);
                let b = et({}),
                    I = Object.assign({}, Fn);
                const R = dr(Object.assign({}, I)),
                    M = et((s = R.modelValue) !== null && s !== void 0 ? s : 0),
                    W = et(0),
                    C = et(0),
                    V = et(0),
                    q = et(0);
                Br("config", R), Br("slidesBuffer", u), Br("slidesCount", d), Br("currentSlide", M), Br("maxSlide", V), Br("minSlide", q);

                function j() {
                    const D = Object.assign(Object.assign({}, e), e.settings);
                    b = et(Object.assign({}, D.breakpoints)), I = Object.assign(Object.assign({}, D), {
                        settings: void 0,
                        breakpoints: void 0
                    }), se(I)
                }

                function G() {
                    const D = Object.keys(b.value).map(Q => Number(Q)).sort((Q, X) => +X - +Q);
                    let ae = Object.assign({}, I);
                    D.some(Q => window.matchMedia(`(min-width: ${Q}px)`).matches ? (ae = Object.assign(Object.assign({}, ae), b.value[Q]), !0) : !1), se(ae)
                }

                function se(D) {
                    for (let ae in D) R[ae] = D[ae]
                }
                const ce = jne(() => {
                    b.value && (G(), ue()), le()
                }, 16);

                function le() {
                    if (!o.value) return;
                    const D = o.value.getBoundingClientRect();
                    f.value = D.width / R.itemsToShow
                }

                function ue() {
                    d.value = Math.max(c.value.length, 1), !(d.value <= 0) && (C.value = Math.ceil((d.value - 1) / 2), V.value = Kne(R, d.value), q.value = Yne(R), M.value = jy(R, M.value, V.value, q.value))
                }

                function Ce() {
                    const D = [...Array(d.value).keys()];
                    if (R.wrapAround && R.itemsToShow + 1 <= d.value) {
                        let X = (R.itemsToShow !== 1 ? Math.round((d.value - R.itemsToShow) / 2) : 0) - M.value;
                        if (R.snapAlign === "end" ? X += Math.floor(R.itemsToShow - 1) : (R.snapAlign === "center" || R.snapAlign === "center-odd") && X++, X < 0)
                            for (let N = X; N < 0; N++) D.push(Number(D.shift()));
                        else
                            for (let N = 0; N < X; N++) D.unshift(Number(D.pop()))
                    }
                    u.value = D
                }
                Ol(() => {
                    b.value && (G(), ue()), gb(() => setTimeout(le, 16)), R.autoplay && R.autoplay > 0 && Je(), window.addEventListener("resize", ce, {
                        passive: !0
                    })
                }), Al(() => {
                    _.value && clearTimeout(_.value), At(!1)
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
                    Ee = () => {
                        de.value = !0
                    },
                    me = () => {
                        de.value = !1
                    };

                function Se(D) {
                    be = D.type === "touchstart", !(!be && D.button !== 0 || Ht.value) && (re.value = !0, fe.x = be ? D.touches[0].clientX : D.clientX, fe.y = be ? D.touches[0].clientY : D.clientY, document.addEventListener(be ? "touchmove" : "mousemove", Me, !0), document.addEventListener(be ? "touchend" : "mouseup", Fe, !0))
                }
                const Me = Hne(D => {
                    Oe.x = be ? D.touches[0].clientX : D.clientX, Oe.y = be ? D.touches[0].clientY : D.clientY;
                    const ae = Oe.x - fe.x,
                        Q = Oe.y - fe.y;
                    F.y = Q, F.x = ae
                }, 16);

                function Fe() {
                    re.value = !1;
                    const D = R.dir === "rtl" ? -1 : 1,
                        ae = Math.sign(F.x) * .4,
                        Q = Math.round(F.x / f.value + ae) * D;
                    let X = jy(R, M.value - Q, V.value, q.value);
                    if (Q) {
                        const N = H => {
                            H.stopPropagation(), window.removeEventListener("click", N, !0)
                        };
                        window.addEventListener("click", N, !0)
                    }
                    It(X), F.x = 0, F.y = 0, document.removeEventListener(be ? "touchmove" : "mousemove", Me, !0), document.removeEventListener(be ? "touchend" : "mouseup", Fe, !0)
                }

                function Je() {
                    g.value = setInterval(() => {
                        R.pauseAutoplayOnHover && de.value || Xt()
                    }, R.autoplay)
                }

                function At(D = !0) {
                    !g.value || (clearInterval(g.value), D && Je())
                }
                const Ht = et(!1);

                function It(D, ae = !1) {
                    if (At(), M.value === D || Ht.value) return;
                    const Q = d.value - 1;
                    if (D > Q) return It(D - d.value);
                    if (D < 0) return It(D + d.value);
                    Ht.value = !0, W.value = M.value, M.value = D, ae || n("update:modelValue", M.value), _.value = setTimeout(() => {
                        R.wrapAround && Ce(), Ht.value = !1
                    }, R.transition)
                }

                function Xt() {
                    let D = M.value + R.itemsToScroll;
                    R.wrapAround || (D = Math.min(D, V.value)), It(D)
                }

                function it() {
                    let D = M.value - R.itemsToScroll;
                    R.wrapAround || (D = Math.max(D, q.value)), It(D)
                }
                const vt = {
                    slideTo: It,
                    next: Xt,
                    prev: it
                };
                Br("nav", vt);
                const st = On(() => qne({
                    slidesBuffer: u.value,
                    itemsToShow: R.itemsToShow,
                    snapAlign: R.snapAlign,
                    wrapAround: Boolean(R.wrapAround),
                    currentSlide: M.value,
                    slidesCount: d.value
                }));
                Br("slidesToScroll", st);
                const Pt = On(() => {
                    const D = R.dir === "rtl" ? -1 : 1,
                        ae = st.value * f.value * D;
                    return {
                        transform: `translateX(${F.x-ae}px)`,
                        transition: `${Ht.value?R.transition:0}ms`
                    }
                });

                function kt() {
                    j()
                }

                function Lt() {
                    j(), G(), ue(), Ce(), le()
                }

                function m() {
                    ue(), Ce()
                }
                mi(() => Object.values(e), Lt), kt(), f$(() => {
                    const D = d.value !== c.value.length;
                    e.modelValue !== void 0 && M.value !== e.modelValue && It(Number(e.modelValue), !0), D && m()
                });
                const p = {
                    config: R,
                    slidesBuffer: u,
                    slidesCount: d,
                    slideWidth: f,
                    currentSlide: M,
                    maxSlide: V,
                    minSlide: q,
                    middleSlide: C
                };
                r({
                    updateBreakpointsConfigs: G,
                    updateSlidesData: ue,
                    updateSlideWidth: le,
                    updateSlidesBuffer: Ce,
                    initCarousel: kt,
                    restartCarousel: Lt,
                    updateCarousel: m,
                    slideTo: It,
                    next: Xt,
                    prev: it,
                    nav: vt,
                    data: p
                });
                const O = t.default || t.slides,
                    x = t.addons,
                    B = dr(p);
                return () => {
                    const D = Vne(O == null ? void 0 : O(B)),
                        ae = (x == null ? void 0 : x(B)) || [];
                    c.value = D, D.forEach((N, H) => N.props.index = H);
                    const Q = Ir("ol", {
                            class: "carousel__track",
                            style: Pt.value,
                            onMousedown: R.mouseDrag ? Se : null,
                            onTouchstart: R.touchDrag ? Se : null
                        }, D),
                        X = Ir("div", {
                            class: "carousel__viewport"
                        }, Q);
                    return Ir("section", {
                        ref: o,
                        class: {
                            carousel: !0,
                            "carousel--rtl": R.dir === "rtl"
                        },
                        dir: R.dir,
                        "aria-label": "Gallery",
                        onMouseenter: Ee,
                        onMouseleave: me
                    }, [X, ae])
                }
            }
        }),
        Xne = ze({
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
                const n = pn("config", dr(Object.assign({}, Fn))),
                    r = pn("slidesBuffer", et([])),
                    s = pn("currentSlide", et(0)),
                    o = pn("slidesToScroll", et(0)),
                    c = et(e.index);
                n.wrapAround && (u(), mi(r, u));

                function u() {
                    c.value = r.value.indexOf(e.index)
                }
                const f = On(() => {
                        const I = n.itemsToShow;
                        return {
                            width: `${1/I*100}%`,
                            order: c.value.toString()
                        }
                    }),
                    d = () => e.index === s.value,
                    g = () => {
                        const I = Math.ceil(o.value),
                            R = Math.floor(o.value + n.itemsToShow);
                        return r.value.slice(I, R).includes(e.index)
                    },
                    _ = () => e.index === r.value[Math.ceil(o.value) - 1],
                    b = () => e.index === r.value[Math.floor(o.value + n.itemsToShow)];
                return () => {
                    var I;
                    return Ir("li", {
                        style: f.value,
                        class: {
                            carousel__slide: !0,
                            "carousel__slide--active": d(),
                            "carousel__slide--visible": g(),
                            "carousel__slide--prev": _(),
                            "carousel__slide--next": b()
                        }
                    }, (I = t.default) === null || I === void 0 ? void 0 : I.call(t))
                }
            }
        });
    const Jne = () => {
            const e = pn("maxSlide", et(1)),
                t = pn("minSlide", et(1)),
                n = pn("currentSlide", et(1)),
                r = pn("nav", {});

            function s(u) {
                r.slideTo(u)
            }
            const o = u => {
                    const f = n.value;
                    return f === u || f > e.value && u >= e.value || f < t.value && u <= t.value
                },
                c = [];
            for (let u = t.value; u < e.value + 1; u++) {
                const f = Ir("button", {
                        type: "button",
                        class: {
                            "carousel__pagination-button": !0,
                            "carousel__pagination-button--active": o(u)
                        },
                        "aria-label": `Navigate to slide ${u+1}`,
                        onClick: () => s(u)
                    }),
                    d = Ir("li", {
                        class: "carousel__pagination-item",
                        key: u
                    }, f);
                c.push(d)
            }
            return Ir("ol", {
                class: "carousel__pagination"
            }, c)
        },
        Qne = ze({
            components: {
                Carousel: zne,
                Pagination: Jne,
                Slide: Xne
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
                    if (ke.isSupported && e.tags) {
                        const s = (n = e.tags) != null ? n : [],
                            o = JSON.parse((r = ke.get("tags")) != null ? r : "[]");
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
        Zne = {
            class: "slide-banner"
        },
        ere = {
            key: 0,
            class: "loading"
        },
        tre = ["onClick"],
        nre = ["src"];

    function rre(e, t, n, r, s, o) {
        const c = Bt("Slide"),
            u = Bt("Pagination"),
            f = Bt("Carousel");
        return z(), Z("div", Zne, [e.isLoading ? (z(), Z("div", ere, Ie(e.$t("LOADING")), 1)) : we("", !0), !e.isLoading && e.banners.length ? (z(), Ln(f, uL(Ph({
            key: 1
        }, e.settings)), {
            addons: Kr(() => [ft(u, {
                class: "dots"
            })]),
            default: Kr(() => [(z(!0), Z(ut, null, Cr(e.banners, d => (z(), Ln(c, {
                key: d.url,
                class: "slide"
            }, {
                default: Kr(() => [Y("button", {
                    onClick: g => e.onClick(d)
                }, [Y("img", {
                    src: d.image,
                    draggable: "false",
                    alt: "Advert"
                }, null, 8, nre), Y("p", null, Ie(d.text), 1)], 8, tre)]),
                _: 2
            }, 1024))), 128))]),
            _: 1
        }, 16)) : we("", !0)])
    }
    const ire = mt(Qne, [
            ["render", rre],
            ["__scopeId", "data-v-08558975"]
        ]),
        sre = ze({
            data() {
                return {
                    value: ke.get("preference:theme") || "device"
                }
            },
            watch: {
                value(e) {
                    ke.set("preference:theme", e), window.dispatchEvent(new CustomEvent("themedidchange"))
                }
            }
        }),
        are = {
            class: "appearance"
        },
        ore = {
            for: "appearance"
        },
        cre = {
            id: "appearance"
        },
        lre = H$('<svg viewBox="0 0 340 85" data-v-727b0bbe><rect class="frame" x="87.5" width="165" height="85" rx="42.5" vector-effect="non-scaling-stroke" data-v-727b0bbe></rect><circle class="indicator" cx="170" cy="42.5" r="29.8" data-v-727b0bbe></circle><path class="celestial moon" d="M314.64,14.79A29.36,29.36,0,0,1,275,54.4a29.37,29.37,0,1,0,39.6-39.61Z" vector-effect="non-scaling-stroke" data-v-727b0bbe></path><circle class="celestial sun" cx="32.19" cy="42.72" r="13.05" vector-effect="non-scaling-stroke" data-v-727b0bbe></circle><line x1="32.19" y1="10.53" x2="32.19" y2="21.59" vector-effect="non-scaling-stroke" data-v-727b0bbe></line><line x1="32.19" y1="63.85" x2="32.19" y2="74.91" vector-effect="non-scaling-stroke" data-v-727b0bbe></line><line x1="0" y1="42.72" x2="11.06" y2="42.72" vector-effect="non-scaling-stroke" data-v-727b0bbe></line><line x1="53.32" y1="42.72" x2="64.38" y2="42.72" vector-effect="non-scaling-stroke" data-v-727b0bbe></line><line x1="12.01" y1="22.55" x2="17.25" y2="27.78" vector-effect="non-scaling-stroke" data-v-727b0bbe></line><line x1="47.13" y1="57.66" x2="52.36" y2="62.89" vector-effect="non-scaling-stroke" data-v-727b0bbe></line><line x1="12.01" y1="62.89" x2="17.25" y2="57.66" vector-effect="non-scaling-stroke" data-v-727b0bbe></line><line x1="47.13" y1="27.78" x2="52.36" y2="22.55" vector-effect="non-scaling-stroke" data-v-727b0bbe></line></svg>', 1),
        ure = ["aria-label"],
        fre = ["aria-label"];

    function dre(e, t, n, r, s, o) {
        const c = mn("t");
        return z(), Z("li", are, [je(Y("label", ore, null, 512), [
            [c, "MENU.APPEARANCE"]
        ]), Y("fieldset", cre, [lre, je(Y("input", {
            id: "light",
            "onUpdate:modelValue": t[0] || (t[0] = u => e.value = u),
            type: "radio",
            name: "theme",
            value: "light",
            "aria-label": e.$t("MENU.LIGHT")
        }, null, 8, ure), [
            [eE, e.value]
        ]), je(Y("input", {
            id: "dark",
            "onUpdate:modelValue": t[1] || (t[1] = u => e.value = u),
            type: "radio",
            name: "theme",
            value: "dark",
            "aria-label": e.$t("MENU.DARK")
        }, null, 8, fre), [
            [eE, e.value]
        ])])])
    }
    const hre = mt(sre, [
            ["render", dre],
            ["__scopeId", "data-v-727b0bbe"]
        ]),
        pre = ze({
            data() {
                const e = Object.keys(window.tv.manifest.branches);
                let t = "main";
                return e.includes("** hmr **") ? t = "** hmr **" : e.includes("** dist **") && (t = "** dist **"), {
                    branch: ke.get("preference:branch") || t,
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
                    t && t !== e && (ke.set("preference:branch", e), this.branchHasChanged = !0)
                }
            },
            methods: {
                reload() {
                    window.location.reload()
                }
            }
        }),
        gre = {
            key: 1,
            for: "branch"
        },
        mre = {
            class: "select"
        },
        vre = ["value"];

    function Ere(e, t, n, r, s, o) {
        return z(), Z("li", null, [e.branchHasChanged ? (z(), Z("label", {
            key: 0,
            for: "branch",
            class: "changed",
            onClick: t[0] || (t[0] = (...c) => e.reload && e.reload(...c)),
            onKeyup: t[1] || (t[1] = os((...c) => e.reload && e.reload(...c), ["enter"]))
        }, Ie(e.$t("BRANCH.REFRESH_REQUIRED")), 33)) : (z(), Z("label", gre, Ie(e.$t("BRANCH.PREFERRED")), 1)), Y("div", mre, [je(Y("select", {
            id: "branch",
            "onUpdate:modelValue": t[2] || (t[2] = c => e.branch = c)
        }, [(z(!0), Z(ut, null, Cr(e.branchOptions, c => (z(), Z("option", {
            key: c,
            value: c
        }, Ie(c), 9, vre))), 128))], 512), [
            [zb, e.branch]
        ])])])
    }
    const _re = mt(pre, [
            ["render", Ere],
            ["__scopeId", "data-v-70c01ceb"]
        ]),
        yre = ze({
            components: {
                AppearanceRadio: hre,
                PreferredBranch: _re
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
        bre = {
            class: "nav"
        },
        Tre = {
            key: 0,
            class: "twitch"
        },
        Sre = {
            href: "#"
        },
        Ore = {
            class: "moderator"
        },
        Are = {
            href: "/moderator"
        },
        Ire = {
            key: 0,
            class: "indicator"
        },
        wre = {
            class: "social"
        },
        Cre = {
            class: "version"
        },
        Rre = {
            href: "/manifest"
        };

    function Nre(e, t, n, r, s, o) {
        const c = Bt("AppearanceRadio"),
            u = Bt("PreferredBranch");
        return z(), Z("nav", bre, [Y("ul", null, [e.isTwitchAuthenticated ? (z(), Z("li", {
            key: 1,
            class: "twitch",
            onKeyup: t[2] || (t[2] = os((...f) => e.onTwitchLogoutClick && e.onTwitchLogoutClick(...f), ["enter"])),
            onClick: t[3] || (t[3] = Gt((...f) => e.onTwitchLogoutClick && e.onTwitchLogoutClick(...f), ["prevent"]))
        }, [Y("a", Sre, Ie(e.$t("MENU.LOGOUT")), 1)], 32)) : (z(), Z("li", Tre, [Y("a", {
            onKeyup: t[0] || (t[0] = os((...f) => e.onTwitchLoginClick && e.onTwitchLoginClick(...f), ["enter"])),
            onClick: t[1] || (t[1] = Gt((...f) => e.onTwitchLoginClick && e.onTwitchLoginClick(...f), ["prevent"]))
        }, Ie(e.$t("MENU.TWITCH")), 33)])), Y("li", Ore, [Y("a", Are, Ie(e.$t("MENU.MODERATOR")), 1)]), Y("li", null, [Y("a", {
            href: "http://help.jackboxgames.com",
            target: "_blank",
            onClick: t[4] || (t[4] = f => e.onLinkClick("help"))
        }, Ie(e.$t("MENU.HELP")), 1)]), Y("li", null, [Y("a", {
            href: "https://shop.jackboxgames.com",
            target: "_blank",
            onClick: t[5] || (t[5] = f => e.onLinkClick("merch"))
        }, Ie(e.$t("MENU.MERCH")), 1)]), Y("li", null, [Y("a", {
            onKeyup: t[6] || (t[6] = os((...f) => e.onPastGamesClick && e.onPastGamesClick(...f), ["enter"])),
            onClick: t[7] || (t[7] = Gt((...f) => e.onPastGamesClick && e.onPastGamesClick(...f), ["prevent"]))
        }, [Gn(Ie(e.$t("MENU.PAST_GAMES")) + " ", 1), e.hasUnseenGames ? (z(), Z("div", Ire)) : we("", !0)], 32)]), ft(c), e.shouldShowPreferredBranch ? (z(), Ln(u, {
            key: 2
        })) : we("", !0), Y("li", wre, [Y("a", {
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
        })]), Y("li", Cre, [Y("a", Rre, Ie(e.version), 1)])])])
    }
    const Lre = mt(yre, [
            ["render", Nre],
            ["__scopeId", "data-v-1e5a97d3"]
        ]),
        $re = ze({
            components: {
                PastGame: OA
            },
            props: {
                artifacts: Object,
                filter: String
            },
            data() {
                return {
                    isManaging: !1
                }
            },
            computed: {
                pastGames() {
                    var t;
                    return (t = this.artifacts) != null && t.artifacts ? this.artifacts.artifacts.map(n => ({
                        artifact: n,
                        game: Io(n.categoryId)
                    })).filter(n => n.game ? this.filter ? this.filter === n.game.tag || this.filter === n.game.categoryId : !0 : !1) : []
                }
            },
            methods: {
                onManage() {
                    this.isManaging = !this.isManaging
                },
                onRemove(e) {
                    this.artifacts.remove(e)
                }
            }
        }),
        Pre = {
            key: 0,
            class: "past-games"
        },
        Dre = {
            class: "constrain"
        },
        kre = {
            key: 0,
            class: "top-items"
        },
        Mre = {
            key: 1,
            class: "empty"
        };

    function xre(e, t, n, r, s, o) {
        const c = Bt("PastGame");
        return e.artifacts ? (z(), Z("div", Pre, [Y("div", Dre, [e.pastGames && e.pastGames.length ? (z(), Z("div", kre, [Y("h3", null, Ie(e.$t("PAST_GAMES.TITLE")), 1), Y("button", {
            class: "manage",
            onClick: t[0] || (t[0] = (...u) => e.onManage && e.onManage(...u))
        }, Ie(e.isManaging ? e.$t("ACTION.DONE") : e.$t("PAST_GAMES.MANAGE")), 1)])) : (z(), Z("p", Mre, Ie(e.$t("PAST_GAMES.EMPTY")), 1)), ft(qb, {
            name: "list-transition"
        }, {
            default: Kr(() => [(z(!0), Z(ut, null, Cr(e.pastGames, (u, f) => (z(), Ln(c, {
                key: u.artifact.url,
                "past-game": u,
                index: f,
                "is-managing": e.isManaging,
                location: "past_game",
                onRemove: e.onRemove
            }, null, 8, ["past-game", "index", "is-managing", "onRemove"]))), 128))]),
            _: 1
        })])])) : we("", !0)
    }
    const Ure = mt($re, [
            ["render", xre],
            ["__scopeId", "data-v-40ec1b21"]
        ]),
        Fre = ze({
            components: {
                Menu: Lre,
                PastGames: Ure
            },
            props: {
                artifacts: Object,
                twitch: Object
            },
            emits: ["twitchLoginWasClicked", "twitchLogoutWasClicked"],
            data() {
                return {
                    openedTo: null,
                    pastGamesFilter: null
                }
            },
            computed: {
                hasUnseenGames() {
                    return this.artifacts.artifacts.length ? this.artifacts.hasUnviewed : !1
                }
            },
            methods: {
                onHamburgerClick() {
                    this.openedTo = this.openedTo ? null : "menu", this.pastGamesFilter = null
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
        Bre = e => (ha("data-v-58d13316"), e = e(), pa(), e),
        Gre = {
            key: 0,
            class: "top-bar"
        },
        Wre = {
            class: "constrain"
        },
        jre = Bre(() => Y("div", {
            class: "logo"
        }, null, -1)),
        Hre = {
            key: 0,
            class: "indicator"
        };

    function Vre(e, t, n, r, s, o) {
        const c = Bt("PastGames"),
            u = Bt("Menu");
        return e.twitch ? (z(), Z("div", Gre, [Y("header", {
            class: "header",
            onKeyup: t[0] || (t[0] = os((...f) => e.onHamburgerClick && e.onHamburgerClick(...f), ["enter"])),
            onClick: t[1] || (t[1] = (...f) => e.onHamburgerClick && e.onHamburgerClick(...f))
        }, [Y("div", Wre, [jre, Y("div", {
            class: Ye(["hamburger", {
                close: e.openedTo !== null
            }])
        }, null, 2), !e.openedTo && e.hasUnseenGames ? (z(), Z("div", Hre)) : we("", !0), e.twitch.user ? (z(), Z("div", {
            key: 1,
            class: "avatar",
            style: la(`background-image: url(${e.twitch.user.profile_image_url});`)
        }, null, 4)) : we("", !0)])], 32), ft(yo, {
            name: "open-transition"
        }, {
            default: Kr(() => [e.openedTo ? (z(), Ln(qb, {
                key: 0,
                tag: "div",
                class: "screen-container",
                name: "screen-transition"
            }, {
                default: Kr(() => [e.openedTo === "pastGames" ? (z(), Ln(c, {
                    key: "pastGames",
                    class: "screen",
                    artifacts: e.artifacts,
                    filter: e.pastGamesFilter
                }, null, 8, ["artifacts", "filter"])) : we("", !0), e.openedTo === "menu" ? (z(), Ln(u, {
                    key: "menu",
                    class: "screen",
                    "has-unseen-games": e.hasUnseenGames,
                    twitch: e.twitch,
                    onPastGameWasClicked: e.onPastGamesClick,
                    onTwitchLoginWasClicked: e.onTwitchLoginClick,
                    onTwitchLogoutWasClicked: e.onTwitchLogoutClick
                }, null, 8, ["has-unseen-games", "twitch", "onPastGameWasClicked", "onTwitchLoginWasClicked", "onTwitchLogoutWasClicked"])) : we("", !0)]),
                _: 1
            })) : we("", !0)]),
            _: 1
        })])) : we("", !0)
    }
    const Kre = mt(Fre, [
            ["render", Vre],
            ["__scopeId", "data-v-58d13316"]
        ]),
        Yre = ze({
            name: "@connect",
            components: {
                Connect: pne,
                TopBar: Kre,
                RecentGames: Wne,
                SlideBanner: ire
            },
            props: {
                options: Object
            },
            setup() {
                return {
                    fatalError: pn(Lo.fatal.error)
                }
            },
            bb: {
                tos: (e, t) => `<a class="tosLink" href="https://jackboxgames.com/terms-of-service/" target="_blank">${t}</a>`
            },
            data() {
                return {
                    artifacts: new ra,
                    theme: ke.get("preference:theme") || "device",
                    twitch: new J3(this.options.match.hashString)
                }
            },
            computed: {
                classes() {
                    const e = [`locale-${this.$i18n.locale}`, `theme-${this.theme}`];
                    return this.recentGames.length && e.push("has-recent"), e
                },
                recentGames() {
                    var e, t;
                    return (t = (e = this.artifacts) == null ? void 0 : e.artifacts) == null ? void 0 : t.slice(0, 3).map(n => ({
                        artifact: n,
                        game: Io(n.categoryId)
                    })).filter(n => n.game)
                },
                shouldShowFatal() {
                    var e, t;
                    return (t = (e = this.fatalError) == null ? void 0 : e.hasCrashed) != null ? t : !1
                }
            },
            beforeMount() {
                this.setupTwitch(), window.addEventListener("themedidchange", this.onThemeChange)
            },
            mounted() {
                this.checkForPastGamesUrl()
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
                    this.theme = ke.get("preference:theme") || "device"
                },
                checkForPastGamesUrl() {
                    var n, r;
                    const e = (n = this.options) == null ? void 0 : n.match;
                    if (!e || !e.url.includes("past-games")) return;
                    const t = this.$refs.topBar;
                    (r = e.data) != null && r.game && (t.$data.pastGamesFilter = e.data.game), t.$data.openedTo = "pastGames"
                }
            }
        }),
        qre = {
            class: "form"
        },
        zre = {
            class: "constrain"
        },
        Xre = {
            key: 0,
            class: "bottom-logo",
            target: "_blank",
            href: "https://www.jackboxgames.com/?utm_source=jackboxtv&utm_medium=logo&utm_campaign=jackboxgames"
        };

    function Jre(e, t, n, r, s, o) {
        const c = Bt("Fatal"),
            u = Bt("TopBar"),
            f = Bt("Connect"),
            d = Bt("SlideBanner"),
            g = Bt("RecentGames"),
            _ = Bt("Modal");
        return e.shouldShowFatal ? (z(), Ln(c, {
            key: 0
        })) : (z(), Z("div", {
            key: 1,
            class: Ye(["jbg schemable sign-in", e.classes])
        }, [ft(u, {
            ref: "topBar",
            twitch: e.twitch,
            artifacts: e.artifacts,
            onTwitchLoginWasClicked: e.onTwitchLoginClick,
            onTwitchLogoutWasClicked: e.onTwitchLogoutClick
        }, null, 8, ["twitch", "artifacts", "onTwitchLoginWasClicked", "onTwitchLogoutWasClicked"]), Y("div", qre, [Y("div", zre, [ft(f, {
            match: e.options.match,
            "twitch-user": e.twitch.user,
            onTwitchLoginWasClicked: e.onTwitchLoginClick
        }, null, 8, ["match", "twitch-user", "onTwitchLoginWasClicked"]), ft(d), e.recentGames.length ? we("", !0) : (z(), Z("a", Xre, Ie(e.$t("HOMEPAGE_LINK")), 1))])]), ft(g, {
            "recent-games": e.recentGames,
            onPastGamesWasClicked: e.onPastGamesClick
        }, null, 8, ["recent-games", "onPastGamesWasClicked"]), ft(_)], 2))
    }
    const Qre = mt(Yre, [
        ["render", Jre],
        ["__scopeId", "data-v-9263413f"]
    ]);
    window.tv.register({
        mount: e => {
            var s, o;
            let t = DP(Qre, {
                options: e
            });
            t.config.unwrapInjectedRef = !0;
            let n;
            (o = (s = e.match) == null ? void 0 : s.params) != null && o.locale && (n = e.match.params.locale), Vs.set(n);
            const r = tk({
                fallbackLocale: "en",
                locale: Vs.locale,
                messages: Vs.mergeMessages(m8, kte)
            });
            return t.use(wq), t.use(vZ), t.use(r), t.use(YZ, {
                i18n: r
            }), t.use(mee), t.mount("#app"), () => {
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
export default Zre();
//# sourceMappingURL=997a1633.js.map