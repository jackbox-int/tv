var ZN = Object.defineProperty;
var QN = (e, t, r) => t in e ? ZN(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r;
var eL = (e, t) => () => (t || e((t = {
    exports: {}
}).exports, t), t.exports);
var ye = (e, t, r) => (QN(e, typeof t != "symbol" ? t + "" : t, r), r);
var Nie = eL(($ie, bA) => {
    (function() {
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
    })();

    function ih(e, t) {
        const r = Object.create(null),
            n = e.split(",");
        for (let s = 0; s < n.length; s++) r[n[s]] = !0;
        return t ? s => !!r[s.toLowerCase()] : s => !!r[s]
    }
    const tL = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
        rL = ih(tL);

    function Gy(e) {
        return !!e || e === ""
    }

    function oo(e) {
        if ($e(e)) {
            const t = {};
            for (let r = 0; r < e.length; r++) {
                const n = e[r],
                    s = Vt(n) ? sL(n) : oo(n);
                if (s)
                    for (const o in s) t[o] = s[o]
            }
            return t
        } else {
            if (Vt(e)) return e;
            if (gt(e)) return e
        }
    }
    const nL = /;(?![^(]*\))/g,
        iL = /:(.+)/;

    function sL(e) {
        const t = {};
        return e.split(nL).forEach(r => {
            if (r) {
                const n = r.split(iL);
                n.length > 1 && (t[n[0].trim()] = n[1].trim())
            }
        }), t
    }

    function Ge(e) {
        let t = "";
        if (Vt(e)) t = e;
        else if ($e(e))
            for (let r = 0; r < e.length; r++) {
                const n = Ge(e[r]);
                n && (t += n + " ")
            } else if (gt(e))
                for (const r in e) e[r] && (t += r + " ");
        return t.trim()
    }

    function aL(e, t) {
        if (e.length !== t.length) return !1;
        let r = !0;
        for (let n = 0; r && n < e.length; n++) r = al(e[n], t[n]);
        return r
    }

    function al(e, t) {
        if (e === t) return !0;
        let r = hv(e),
            n = hv(t);
        if (r || n) return r && n ? e.getTime() === t.getTime() : !1;
        if (r = Ka(e), n = Ka(t), r || n) return e === t;
        if (r = $e(e), n = $e(t), r || n) return r && n ? aL(e, t) : !1;
        if (r = gt(e), n = gt(t), r || n) {
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

    function Wy(e, t) {
        return e.findIndex(r => al(r, t))
    }
    const Xe = e => Vt(e) ? e : e == null ? "" : $e(e) || gt(e) && (e.toString === Ky || !je(e.toString)) ? JSON.stringify(e, jy, 2) : String(e),
        jy = (e, t) => t && t.__v_isRef ? jy(e, t.value) : Ds(t) ? {
            [`Map(${t.size})`]: [...t.entries()].reduce((r, [n, s]) => (r[`${n} =>`] = s, r), {})
        } : cl(t) ? {
            [`Set(${t.size})`]: [...t.values()]
        } : gt(t) && !$e(t) && !Vy(t) ? String(t) : t,
        pt = {},
        Ps = [],
        cn = () => {},
        oL = () => !1,
        cL = /^on[^a-z]/,
        ol = e => cL.test(e),
        sh = e => e.startsWith("onUpdate:"),
        Jt = Object.assign,
        ah = (e, t) => {
            const r = e.indexOf(t);
            r > -1 && e.splice(r, 1)
        },
        lL = Object.prototype.hasOwnProperty,
        Qe = (e, t) => lL.call(e, t),
        $e = Array.isArray,
        Ds = e => co(e) === "[object Map]",
        cl = e => co(e) === "[object Set]",
        hv = e => co(e) === "[object Date]",
        je = e => typeof e == "function",
        Vt = e => typeof e == "string",
        Ka = e => typeof e == "symbol",
        gt = e => e !== null && typeof e == "object",
        Hy = e => gt(e) && je(e.then) && je(e.catch),
        Ky = Object.prototype.toString,
        co = e => Ky.call(e),
        uL = e => co(e).slice(8, -1),
        Vy = e => co(e) === "[object Object]",
        oh = e => Vt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
        $c = ih(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
        ll = e => {
            const t = Object.create(null);
            return r => t[r] || (t[r] = e(r))
        },
        fL = /-(\w)/g,
        On = ll(e => e.replace(fL, (t, r) => r ? r.toUpperCase() : "")),
        dL = /\B([A-Z])/g,
        ss = ll(e => e.replace(dL, "-$1").toLowerCase()),
        ul = ll(e => e.charAt(0).toUpperCase() + e.slice(1)),
        cf = ll(e => e ? `on${ul(e)}` : ""),
        Va = (e, t) => !Object.is(e, t),
        Pc = (e, t) => {
            for (let r = 0; r < e.length; r++) e[r](t)
        },
        Gc = (e, t, r) => {
            Object.defineProperty(e, t, {
                configurable: !0,
                enumerable: !1,
                value: r
            })
        },
        Wc = e => {
            const t = parseFloat(e);
            return isNaN(t) ? e : t
        };
    let pv;
    const hL = () => pv || (pv = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
    let _n;
    class Yy {
        constructor(t = !1) {
            this.active = !0, this.effects = [], this.cleanups = [], !t && _n && (this.parent = _n, this.index = (_n.scopes || (_n.scopes = [])).push(this) - 1)
        }
        run(t) {
            if (this.active) {
                const r = _n;
                try {
                    return _n = this, t()
                } finally {
                    _n = r
                }
            }
        }
        on() {
            _n = this
        }
        off() {
            _n = this.parent
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

    function pL(e) {
        return new Yy(e)
    }

    function gL(e, t = _n) {
        t && t.active && t.effects.push(e)
    }
    const ch = e => {
            const t = new Set(e);
            return t.w = 0, t.n = 0, t
        },
        qy = e => (e.w & di) > 0,
        zy = e => (e.n & di) > 0,
        mL = ({
            deps: e
        }) => {
            if (e.length)
                for (let t = 0; t < e.length; t++) e[t].w |= di
        },
        vL = e => {
            const {
                deps: t
            } = e;
            if (t.length) {
                let r = 0;
                for (let n = 0; n < t.length; n++) {
                    const s = t[n];
                    qy(s) && !zy(s) ? s.delete(e) : t[r++] = s, s.w &= ~di, s.n &= ~di
                }
                t.length = r
            }
        },
        rd = new WeakMap;
    let Pa = 0,
        di = 1;
    const nd = 30;
    let sn;
    const Ji = Symbol(""),
        id = Symbol("");
    class lh {
        constructor(t, r = null, n) {
            this.fn = t, this.scheduler = r, this.active = !0, this.deps = [], this.parent = void 0, gL(this, n)
        }
        run() {
            if (!this.active) return this.fn();
            let t = sn,
                r = ci;
            for (; t;) {
                if (t === this) return;
                t = t.parent
            }
            try {
                return this.parent = sn, sn = this, ci = !0, di = 1 << ++Pa, Pa <= nd ? mL(this) : gv(this), this.fn()
            } finally {
                Pa <= nd && vL(this), di = 1 << --Pa, sn = this.parent, ci = r, this.parent = void 0, this.deferStop && this.stop()
            }
        }
        stop() {
            sn === this ? this.deferStop = !0 : this.active && (gv(this), this.onStop && this.onStop(), this.active = !1)
        }
    }

    function gv(e) {
        const {
            deps: t
        } = e;
        if (t.length) {
            for (let r = 0; r < t.length; r++) t[r].delete(e);
            t.length = 0
        }
    }
    let ci = !0;
    const Xy = [];

    function Qs() {
        Xy.push(ci), ci = !1
    }

    function ea() {
        const e = Xy.pop();
        ci = e === void 0 ? !0 : e
    }

    function Pr(e, t, r) {
        if (ci && sn) {
            let n = rd.get(e);
            n || rd.set(e, n = new Map);
            let s = n.get(r);
            s || n.set(r, s = ch()), Jy(s)
        }
    }

    function Jy(e, t) {
        let r = !1;
        Pa <= nd ? zy(e) || (e.n |= di, r = !qy(e)) : r = !e.has(sn), r && (e.add(sn), sn.deps.push(e))
    }

    function Bn(e, t, r, n, s, o) {
        const c = rd.get(e);
        if (!c) return;
        let u = [];
        if (t === "clear") u = [...c.values()];
        else if (r === "length" && $e(e)) c.forEach((f, h) => {
            (h === "length" || h >= n) && u.push(f)
        });
        else switch (r !== void 0 && u.push(c.get(r)), t) {
            case "add":
                $e(e) ? oh(r) && u.push(c.get("length")) : (u.push(c.get(Ji)), Ds(e) && u.push(c.get(id)));
                break;
            case "delete":
                $e(e) || (u.push(c.get(Ji)), Ds(e) && u.push(c.get(id)));
                break;
            case "set":
                Ds(e) && u.push(c.get(Ji));
                break
        }
        if (u.length === 1) u[0] && sd(u[0]);
        else {
            const f = [];
            for (const h of u) h && f.push(...h);
            sd(ch(f))
        }
    }

    function sd(e, t) {
        const r = $e(e) ? e : [...e];
        for (const n of r) n.computed && mv(n);
        for (const n of r) n.computed || mv(n)
    }

    function mv(e, t) {
        (e !== sn || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run())
    }
    const EL = ih("__proto__,__v_isRef,__isVue"),
        Zy = new Set(Object.getOwnPropertyNames(Symbol).filter(e => e !== "arguments" && e !== "caller").map(e => Symbol[e]).filter(Ka)),
        _L = uh(),
        yL = uh(!1, !0),
        bL = uh(!0),
        vv = TL();

    function TL() {
        const e = {};
        return ["includes", "indexOf", "lastIndexOf"].forEach(t => {
            e[t] = function(...r) {
                const n = nt(this);
                for (let o = 0, c = this.length; o < c; o++) Pr(n, "get", o + "");
                const s = n[t](...r);
                return s === -1 || s === !1 ? n[t](...r.map(nt)) : s
            }
        }), ["push", "pop", "shift", "unshift", "splice"].forEach(t => {
            e[t] = function(...r) {
                Qs();
                const n = nt(this)[t].apply(this, r);
                return ea(), n
            }
        }), e
    }

    function uh(e = !1, t = !1) {
        return function(n, s, o) {
            if (s === "__v_isReactive") return !e;
            if (s === "__v_isReadonly") return e;
            if (s === "__v_isShallow") return t;
            if (s === "__v_raw" && o === (e ? t ? UL : nb : t ? rb : tb).get(n)) return n;
            const c = $e(n);
            if (!e && c && Qe(vv, s)) return Reflect.get(vv, s, o);
            const u = Reflect.get(n, s, o);
            return (Ka(s) ? Zy.has(s) : EL(s)) || (e || Pr(n, "get", s), t) ? u : rr(u) ? c && oh(s) ? u : u.value : gt(u) ? e ? ib(u) : Gn(u) : u
        }
    }
    const SL = Qy(),
        OL = Qy(!0);

    function Qy(e = !1) {
        return function(r, n, s, o) {
            let c = r[n];
            if (Ks(c) && rr(c) && !rr(s)) return !1;
            if (!e && (!jc(s) && !Ks(s) && (c = nt(c), s = nt(s)), !$e(r) && rr(c) && !rr(s))) return c.value = s, !0;
            const u = $e(r) && oh(n) ? Number(n) < r.length : Qe(r, n),
                f = Reflect.set(r, n, s, o);
            return r === nt(o) && (u ? Va(s, c) && Bn(r, "set", n, s) : Bn(r, "add", n, s)), f
        }
    }

    function AL(e, t) {
        const r = Qe(e, t);
        e[t];
        const n = Reflect.deleteProperty(e, t);
        return n && r && Bn(e, "delete", t, void 0), n
    }

    function IL(e, t) {
        const r = Reflect.has(e, t);
        return (!Ka(t) || !Zy.has(t)) && Pr(e, "has", t), r
    }

    function RL(e) {
        return Pr(e, "iterate", $e(e) ? "length" : Ji), Reflect.ownKeys(e)
    }
    const eb = {
            get: _L,
            set: SL,
            deleteProperty: AL,
            has: IL,
            ownKeys: RL
        },
        CL = {
            get: bL,
            set(e, t) {
                return !0
            },
            deleteProperty(e, t) {
                return !0
            }
        },
        wL = Jt({}, eb, {
            get: yL,
            set: OL
        }),
        fh = e => e,
        fl = e => Reflect.getPrototypeOf(e);

    function hc(e, t, r = !1, n = !1) {
        e = e.__v_raw;
        const s = nt(e),
            o = nt(t);
        r || (t !== o && Pr(s, "get", t), Pr(s, "get", o));
        const {
            has: c
        } = fl(s), u = n ? fh : r ? ph : Ya;
        if (c.call(s, t)) return u(e.get(t));
        if (c.call(s, o)) return u(e.get(o));
        e !== s && e.get(t)
    }

    function pc(e, t = !1) {
        const r = this.__v_raw,
            n = nt(r),
            s = nt(e);
        return t || (e !== s && Pr(n, "has", e), Pr(n, "has", s)), e === s ? r.has(e) : r.has(e) || r.has(s)
    }

    function gc(e, t = !1) {
        return e = e.__v_raw, !t && Pr(nt(e), "iterate", Ji), Reflect.get(e, "size", e)
    }

    function Ev(e) {
        e = nt(e);
        const t = nt(this);
        return fl(t).has.call(t, e) || (t.add(e), Bn(t, "add", e, e)), this
    }

    function _v(e, t) {
        t = nt(t);
        const r = nt(this),
            {
                has: n,
                get: s
            } = fl(r);
        let o = n.call(r, e);
        o || (e = nt(e), o = n.call(r, e));
        const c = s.call(r, e);
        return r.set(e, t), o ? Va(t, c) && Bn(r, "set", e, t) : Bn(r, "add", e, t), this
    }

    function yv(e) {
        const t = nt(this),
            {
                has: r,
                get: n
            } = fl(t);
        let s = r.call(t, e);
        s || (e = nt(e), s = r.call(t, e)), n && n.call(t, e);
        const o = t.delete(e);
        return s && Bn(t, "delete", e, void 0), o
    }

    function bv() {
        const e = nt(this),
            t = e.size !== 0,
            r = e.clear();
        return t && Bn(e, "clear", void 0, void 0), r
    }

    function mc(e, t) {
        return function(n, s) {
            const o = this,
                c = o.__v_raw,
                u = nt(c),
                f = t ? fh : e ? ph : Ya;
            return !e && Pr(u, "iterate", Ji), c.forEach((h, g) => n.call(s, f(h), f(g), o))
        }
    }

    function vc(e, t, r) {
        return function(...n) {
            const s = this.__v_raw,
                o = nt(s),
                c = Ds(o),
                u = e === "entries" || e === Symbol.iterator && c,
                f = e === "keys" && c,
                h = s[e](...n),
                g = r ? fh : t ? ph : Ya;
            return !t && Pr(o, "iterate", f ? id : Ji), {
                next() {
                    const {
                        value: _,
                        done: b
                    } = h.next();
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

    function Zn(e) {
        return function(...t) {
            return e === "delete" ? !1 : this
        }
    }

    function NL() {
        const e = {
                get(o) {
                    return hc(this, o)
                },
                get size() {
                    return gc(this)
                },
                has: pc,
                add: Ev,
                set: _v,
                delete: yv,
                clear: bv,
                forEach: mc(!1, !1)
            },
            t = {
                get(o) {
                    return hc(this, o, !1, !0)
                },
                get size() {
                    return gc(this)
                },
                has: pc,
                add: Ev,
                set: _v,
                delete: yv,
                clear: bv,
                forEach: mc(!1, !0)
            },
            r = {
                get(o) {
                    return hc(this, o, !0)
                },
                get size() {
                    return gc(this, !0)
                },
                has(o) {
                    return pc.call(this, o, !0)
                },
                add: Zn("add"),
                set: Zn("set"),
                delete: Zn("delete"),
                clear: Zn("clear"),
                forEach: mc(!0, !1)
            },
            n = {
                get(o) {
                    return hc(this, o, !0, !0)
                },
                get size() {
                    return gc(this, !0)
                },
                has(o) {
                    return pc.call(this, o, !0)
                },
                add: Zn("add"),
                set: Zn("set"),
                delete: Zn("delete"),
                clear: Zn("clear"),
                forEach: mc(!0, !0)
            };
        return ["keys", "values", "entries", Symbol.iterator].forEach(o => {
            e[o] = vc(o, !1, !1), r[o] = vc(o, !0, !1), t[o] = vc(o, !1, !0), n[o] = vc(o, !0, !0)
        }), [e, r, t, n]
    }
    const [LL, $L, PL, DL] = NL();

    function dh(e, t) {
        const r = t ? e ? DL : PL : e ? $L : LL;
        return (n, s, o) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? n : Reflect.get(Qe(r, s) && s in n ? r : n, s, o)
    }
    const ML = {
            get: dh(!1, !1)
        },
        kL = {
            get: dh(!1, !0)
        },
        xL = {
            get: dh(!0, !1)
        },
        tb = new WeakMap,
        rb = new WeakMap,
        nb = new WeakMap,
        UL = new WeakMap;

    function FL(e) {
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

    function BL(e) {
        return e.__v_skip || !Object.isExtensible(e) ? 0 : FL(uL(e))
    }

    function Gn(e) {
        return Ks(e) ? e : hh(e, !1, eb, ML, tb)
    }

    function GL(e) {
        return hh(e, !1, wL, kL, rb)
    }

    function ib(e) {
        return hh(e, !0, CL, xL, nb)
    }

    function hh(e, t, r, n, s) {
        if (!gt(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
        const o = s.get(e);
        if (o) return o;
        const c = BL(e);
        if (c === 0) return e;
        const u = new Proxy(e, c === 2 ? n : r);
        return s.set(e, u), u
    }

    function Ms(e) {
        return Ks(e) ? Ms(e.__v_raw) : !!(e && e.__v_isReactive)
    }

    function Ks(e) {
        return !!(e && e.__v_isReadonly)
    }

    function jc(e) {
        return !!(e && e.__v_isShallow)
    }

    function sb(e) {
        return Ms(e) || Ks(e)
    }

    function nt(e) {
        const t = e && e.__v_raw;
        return t ? nt(t) : e
    }

    function ab(e) {
        return Gc(e, "__v_skip", !0), e
    }
    const Ya = e => gt(e) ? Gn(e) : e,
        ph = e => gt(e) ? ib(e) : e;

    function ob(e) {
        ci && sn && (e = nt(e), Jy(e.dep || (e.dep = ch())))
    }

    function cb(e, t) {
        e = nt(e), e.dep && sd(e.dep)
    }

    function rr(e) {
        return !!(e && e.__v_isRef === !0)
    }

    function an(e) {
        return lb(e, !1)
    }

    function WL(e) {
        return lb(e, !0)
    }

    function lb(e, t) {
        return rr(e) ? e : new jL(e, t)
    }
    class jL {
        constructor(t, r) {
            this.__v_isShallow = r, this.dep = void 0, this.__v_isRef = !0, this._rawValue = r ? t : nt(t), this._value = r ? t : Ya(t)
        }
        get value() {
            return ob(this), this._value
        }
        set value(t) {
            const r = this.__v_isShallow || jc(t) || Ks(t);
            t = r ? t : nt(t), Va(t, this._rawValue) && (this._rawValue = t, this._value = r ? t : Ya(t), cb(this))
        }
    }

    function HL(e) {
        return rr(e) ? e.value : e
    }
    const KL = {
        get: (e, t, r) => HL(Reflect.get(e, t, r)),
        set: (e, t, r, n) => {
            const s = e[t];
            return rr(s) && !rr(r) ? (s.value = r, !0) : Reflect.set(e, t, r, n)
        }
    };

    function ub(e) {
        return Ms(e) ? e : new Proxy(e, KL)
    }
    var fb;
    class VL {
        constructor(t, r, n, s) {
            this._setter = r, this.dep = void 0, this.__v_isRef = !0, this[fb] = !1, this._dirty = !0, this.effect = new lh(t, () => {
                this._dirty || (this._dirty = !0, cb(this))
            }), this.effect.computed = this, this.effect.active = this._cacheable = !s, this.__v_isReadonly = n
        }
        get value() {
            const t = nt(this);
            return ob(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value
        }
        set value(t) {
            this._setter(t)
        }
    }
    fb = "__v_isReadonly";

    function YL(e, t, r = !1) {
        let n, s;
        const o = je(e);
        return o ? (n = e, s = cn) : (n = e.get, s = e.set), new VL(n, s, o || !s, r)
    }

    function li(e, t, r, n) {
        let s;
        try {
            s = n ? e(...n) : e()
        } catch (o) {
            dl(o, t, r)
        }
        return s
    }

    function Xr(e, t, r, n) {
        if (je(e)) {
            const o = li(e, t, r, n);
            return o && Hy(o) && o.catch(c => {
                dl(c, t, r)
            }), o
        }
        const s = [];
        for (let o = 0; o < e.length; o++) s.push(Xr(e[o], t, r, n));
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
                    for (let g = 0; g < h.length; g++)
                        if (h[g](e, c, u) === !1) return
                }
                o = o.parent
            }
            const f = t.appContext.config.errorHandler;
            if (f) {
                li(f, null, 10, [e, c, u]);
                return
            }
        }
        qL(e, r, s, n)
    }

    function qL(e, t, r, n = !0) {
        console.error(e)
    }
    let qa = !1,
        ad = !1;
    const cr = [];
    let Sn = 0;
    const ks = [];
    let kn = null,
        Hi = 0;
    const db = Promise.resolve();
    let gh = null;

    function zL(e) {
        const t = gh || db;
        return e ? t.then(this ? e.bind(this) : e) : t
    }

    function XL(e) {
        let t = Sn + 1,
            r = cr.length;
        for (; t < r;) {
            const n = t + r >>> 1;
            za(cr[n]) < e ? t = n + 1 : r = n
        }
        return t
    }

    function mh(e) {
        (!cr.length || !cr.includes(e, qa && e.allowRecurse ? Sn + 1 : Sn)) && (e.id == null ? cr.push(e) : cr.splice(XL(e.id), 0, e), hb())
    }

    function hb() {
        !qa && !ad && (ad = !0, gh = db.then(gb))
    }

    function JL(e) {
        const t = cr.indexOf(e);
        t > Sn && cr.splice(t, 1)
    }

    function ZL(e) {
        $e(e) ? ks.push(...e) : (!kn || !kn.includes(e, e.allowRecurse ? Hi + 1 : Hi)) && ks.push(e), hb()
    }

    function Tv(e, t = qa ? Sn + 1 : 0) {
        for (; t < cr.length; t++) {
            const r = cr[t];
            r && r.pre && (cr.splice(t, 1), t--, r())
        }
    }

    function pb(e) {
        if (ks.length) {
            const t = [...new Set(ks)];
            if (ks.length = 0, kn) {
                kn.push(...t);
                return
            }
            for (kn = t, kn.sort((r, n) => za(r) - za(n)), Hi = 0; Hi < kn.length; Hi++) kn[Hi]();
            kn = null, Hi = 0
        }
    }
    const za = e => e.id == null ? 1 / 0 : e.id,
        QL = (e, t) => {
            const r = za(e) - za(t);
            if (r === 0) {
                if (e.pre && !t.pre) return -1;
                if (t.pre && !e.pre) return 1
            }
            return r
        };

    function gb(e) {
        ad = !1, qa = !0, cr.sort(QL);
        const t = cn;
        try {
            for (Sn = 0; Sn < cr.length; Sn++) {
                const r = cr[Sn];
                r && r.active !== !1 && li(r, null, 14)
            }
        } finally {
            Sn = 0, cr.length = 0, pb(), qa = !1, gh = null, (cr.length || ks.length) && gb()
        }
    }

    function e$(e, t, ...r) {
        if (e.isUnmounted) return;
        const n = e.vnode.props || pt;
        let s = r;
        const o = t.startsWith("update:"),
            c = o && t.slice(7);
        if (c && c in n) {
            const g = `${c==="modelValue"?"model":c}Modifiers`,
                {
                    number: _,
                    trim: b
                } = n[g] || pt;
            b && (s = r.map(C => C.trim())), _ && (s = r.map(Wc))
        }
        let u, f = n[u = cf(t)] || n[u = cf(On(t))];
        !f && o && (f = n[u = cf(ss(t))]), f && Xr(f, e, 6, s);
        const h = n[u + "Once"];
        if (h) {
            if (!e.emitted) e.emitted = {};
            else if (e.emitted[u]) return;
            e.emitted[u] = !0, Xr(h, e, 6, s)
        }
    }

    function mb(e, t, r = !1) {
        const n = t.emitsCache,
            s = n.get(e);
        if (s !== void 0) return s;
        const o = e.emits;
        let c = {},
            u = !1;
        if (!je(e)) {
            const f = h => {
                const g = mb(h, t, !0);
                g && (u = !0, Jt(c, g))
            };
            !r && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f)
        }
        return !o && !u ? (gt(e) && n.set(e, null), null) : ($e(o) ? o.forEach(f => c[f] = null) : Jt(c, o), gt(e) && n.set(e, c), c)
    }

    function hl(e, t) {
        return !e || !ol(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Qe(e, t[0].toLowerCase() + t.slice(1)) || Qe(e, ss(t)) || Qe(e, t))
    }
    let zr = null,
        pl = null;

    function Hc(e) {
        const t = zr;
        return zr = e, pl = e && e.type.__scopeId || null, t
    }

    function ta(e) {
        pl = e
    }

    function ra() {
        pl = null
    }

    function vh(e, t = zr, r) {
        if (!t || e._n) return e;
        const n = (...s) => {
            n._d && Pv(-1);
            const o = Hc(t),
                c = e(...s);
            return Hc(o), n._d && Pv(1), c
        };
        return n._n = !0, n._c = !0, n._d = !0, n
    }

    function lf(e) {
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
            render: g,
            renderCache: _,
            data: b,
            setupState: C,
            ctx: P,
            inheritAttrs: x
        } = e;
        let U, I;
        const H = Hc(e);
        try {
            if (r.shapeFlag & 4) {
                const W = s || n;
                U = bn(g.call(W, W, _, o, C, b, P)), I = f
            } else {
                const W = t;
                U = bn(W.length > 1 ? W(o, {
                    attrs: f,
                    slots: u,
                    emit: h
                }) : W(o, null)), I = t.props ? f : t$(f)
            }
        } catch (W) {
            ka.length = 0, dl(W, e, 1), U = st(ln)
        }
        let Y = U;
        if (I && x !== !1) {
            const W = Object.keys(I),
                {
                    shapeFlag: G
                } = Y;
            W.length && G & 7 && (c && W.some(sh) && (I = r$(I, c)), Y = hi(Y, I))
        }
        return r.dirs && (Y = hi(Y), Y.dirs = Y.dirs ? Y.dirs.concat(r.dirs) : r.dirs), r.transition && (Y.transition = r.transition), U = Y, Hc(H), U
    }
    const t$ = e => {
            let t;
            for (const r in e)(r === "class" || r === "style" || ol(r)) && ((t || (t = {}))[r] = e[r]);
            return t
        },
        r$ = (e, t) => {
            const r = {};
            for (const n in e)(!sh(n) || !(n.slice(9) in t)) && (r[n] = e[n]);
            return r
        };

    function n$(e, t, r) {
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
            if (f & 16) return n ? Sv(n, c, h) : !!c;
            if (f & 8) {
                const g = t.dynamicProps;
                for (let _ = 0; _ < g.length; _++) {
                    const b = g[_];
                    if (c[b] !== n[b] && !hl(h, b)) return !0
                }
            }
        } else return (s || u) && (!u || !u.$stable) ? !0 : n === c ? !1 : n ? c ? Sv(n, c, h) : !0 : !!c;
        return !1
    }

    function Sv(e, t, r) {
        const n = Object.keys(t);
        if (n.length !== Object.keys(e).length) return !0;
        for (let s = 0; s < n.length; s++) {
            const o = n[s];
            if (t[o] !== e[o] && !hl(r, o)) return !0
        }
        return !1
    }

    function i$({
        vnode: e,
        parent: t
    }, r) {
        for (; t && t.subTree === e;)(e = t.vnode).el = r, t = t.parent
    }
    const s$ = e => e.__isSuspense;

    function a$(e, t) {
        t && t.pendingBranch ? $e(e) ? t.effects.push(...e) : t.effects.push(e) : ZL(e)
    }

    function o$(e, t) {
        if (Xt) {
            let r = Xt.provides;
            const n = Xt.parent && Xt.parent.provides;
            n === r && (r = Xt.provides = Object.create(n)), r[e] = t
        }
    }

    function ui(e, t, r = !1) {
        const n = Xt || zr;
        if (n) {
            const s = n.parent == null ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides;
            if (s && e in s) return s[e];
            if (arguments.length > 1) return r && je(t) ? t.call(n.proxy) : t
        }
    }
    const Ov = {};

    function Zi(e, t, r) {
        return vb(e, t, r)
    }

    function vb(e, t, {
        immediate: r,
        deep: n,
        flush: s,
        onTrack: o,
        onTrigger: c
    } = pt) {
        const u = Xt;
        let f, h = !1,
            g = !1;
        if (rr(e) ? (f = () => e.value, h = jc(e)) : Ms(e) ? (f = () => e, n = !0) : $e(e) ? (g = !0, h = e.some(I => Ms(I) || jc(I)), f = () => e.map(I => {
                if (rr(I)) return I.value;
                if (Ms(I)) return Xi(I);
                if (je(I)) return li(I, u, 2)
            })) : je(e) ? t ? f = () => li(e, u, 2) : f = () => {
                if (!(u && u.isUnmounted)) return _ && _(), Xr(e, u, 3, [b])
            } : f = cn, t && n) {
            const I = f;
            f = () => Xi(I())
        }
        let _, b = I => {
            _ = U.onStop = () => {
                li(I, u, 4)
            }
        };
        if (Qa) return b = cn, t ? r && Xr(t, u, 3, [f(), g ? [] : void 0, b]) : f(), cn;
        let C = g ? [] : Ov;
        const P = () => {
            if (!!U.active)
                if (t) {
                    const I = U.run();
                    (n || h || (g ? I.some((H, Y) => Va(H, C[Y])) : Va(I, C))) && (_ && _(), Xr(t, u, 3, [I, C === Ov ? void 0 : C, b]), C = I)
                } else U.run()
        };
        P.allowRecurse = !!t;
        let x;
        s === "sync" ? x = P : s === "post" ? x = () => Or(P, u && u.suspense) : (P.pre = !0, u && (P.id = u.uid), x = () => mh(P));
        const U = new lh(f, x);
        return t ? r ? P() : C = U.run() : s === "post" ? Or(U.run.bind(U), u && u.suspense) : U.run(), () => {
            U.stop(), u && u.scope && ah(u.scope.effects, U)
        }
    }

    function c$(e, t, r) {
        const n = this.proxy,
            s = Vt(e) ? e.includes(".") ? Eb(n, e) : () => n[e] : e.bind(n, n);
        let o;
        je(t) ? o = t : (o = t.handler, r = t);
        const c = Xt;
        Vs(this);
        const u = vb(s, o.bind(n), r);
        return c ? Vs(c) : Qi(), u
    }

    function Eb(e, t) {
        const r = t.split(".");
        return () => {
            let n = e;
            for (let s = 0; s < r.length && n; s++) n = n[r[s]];
            return n
        }
    }

    function Xi(e, t) {
        if (!gt(e) || e.__v_skip || (t = t || new Set, t.has(e))) return e;
        if (t.add(e), rr(e)) Xi(e.value, t);
        else if ($e(e))
            for (let r = 0; r < e.length; r++) Xi(e[r], t);
        else if (cl(e) || Ds(e)) e.forEach(r => {
            Xi(r, t)
        });
        else if (Vy(e))
            for (const r in e) Xi(e[r], t);
        return e
    }

    function _b() {
        const e = {
            isMounted: !1,
            isLeaving: !1,
            isUnmounting: !1,
            leavingVNodes: new Map
        };
        return _h(() => {
            e.isMounted = !0
        }), Ab(() => {
            e.isUnmounting = !0
        }), e
    }
    const Kr = [Function, Array],
        l$ = {
            name: "BaseTransition",
            props: {
                mode: String,
                appear: Boolean,
                persisted: Boolean,
                onBeforeEnter: Kr,
                onEnter: Kr,
                onAfterEnter: Kr,
                onEnterCancelled: Kr,
                onBeforeLeave: Kr,
                onLeave: Kr,
                onAfterLeave: Kr,
                onLeaveCancelled: Kr,
                onBeforeAppear: Kr,
                onAppear: Kr,
                onAfterAppear: Kr,
                onAppearCancelled: Kr
            },
            setup(e, {
                slots: t
            }) {
                const r = pi(),
                    n = _b();
                let s;
                return () => {
                    const o = t.default && Eh(t.default(), !0);
                    if (!o || !o.length) return;
                    let c = o[0];
                    if (o.length > 1) {
                        for (const x of o)
                            if (x.type !== ln) {
                                c = x;
                                break
                            }
                    }
                    const u = nt(e),
                        {
                            mode: f
                        } = u;
                    if (n.isLeaving) return uf(c);
                    const h = Av(c);
                    if (!h) return uf(c);
                    const g = Xa(h, u, n, r);
                    Ja(h, g);
                    const _ = r.subTree,
                        b = _ && Av(_);
                    let C = !1;
                    const {
                        getTransitionKey: P
                    } = h.type;
                    if (P) {
                        const x = P();
                        s === void 0 ? s = x : x !== s && (s = x, C = !0)
                    }
                    if (b && b.type !== ln && (!Ki(h, b) || C)) {
                        const x = Xa(b, u, n, r);
                        if (Ja(b, x), f === "out-in") return n.isLeaving = !0, x.afterLeave = () => {
                            n.isLeaving = !1, r.update()
                        }, uf(c);
                        f === "in-out" && h.type !== ln && (x.delayLeave = (U, I, H) => {
                            const Y = bb(n, b);
                            Y[String(b.key)] = b, U._leaveCb = () => {
                                I(), U._leaveCb = void 0, delete g.delayedLeave
                            }, g.delayedLeave = H
                        })
                    }
                    return c
                }
            }
        },
        yb = l$;

    function bb(e, t) {
        const {
            leavingVNodes: r
        } = e;
        let n = r.get(t.type);
        return n || (n = Object.create(null), r.set(t.type, n)), n
    }

    function Xa(e, t, r, n) {
        const {
            appear: s,
            mode: o,
            persisted: c = !1,
            onBeforeEnter: u,
            onEnter: f,
            onAfterEnter: h,
            onEnterCancelled: g,
            onBeforeLeave: _,
            onLeave: b,
            onAfterLeave: C,
            onLeaveCancelled: P,
            onBeforeAppear: x,
            onAppear: U,
            onAfterAppear: I,
            onAppearCancelled: H
        } = t, Y = String(e.key), W = bb(r, e), G = (ce, ue) => {
            ce && Xr(ce, n, 9, ue)
        }, z = (ce, ue) => {
            const Re = ue[1];
            G(ce, ue), $e(ce) ? ce.every(Ie => Ie.length <= 1) && Re() : ce.length <= 1 && Re()
        }, ae = {
            mode: o,
            persisted: c,
            beforeEnter(ce) {
                let ue = u;
                if (!r.isMounted)
                    if (s) ue = x || u;
                    else return;
                ce._leaveCb && ce._leaveCb(!0);
                const Re = W[Y];
                Re && Ki(e, Re) && Re.el._leaveCb && Re.el._leaveCb(), G(ue, [ce])
            },
            enter(ce) {
                let ue = f,
                    Re = h,
                    Ie = g;
                if (!r.isMounted)
                    if (s) ue = U || f, Re = I || h, Ie = H || g;
                    else return;
                let fe = !1;
                const Ae = ce._enterCb = F => {
                    fe || (fe = !0, F ? G(Ie, [ce]) : G(Re, [ce]), ae.delayedLeave && ae.delayedLeave(), ce._enterCb = void 0)
                };
                ue ? z(ue, [ce, Ae]) : Ae()
            },
            leave(ce, ue) {
                const Re = String(e.key);
                if (ce._enterCb && ce._enterCb(!0), r.isUnmounting) return ue();
                G(_, [ce]);
                let Ie = !1;
                const fe = ce._leaveCb = Ae => {
                    Ie || (Ie = !0, ue(), Ae ? G(P, [ce]) : G(C, [ce]), ce._leaveCb = void 0, W[Re] === e && delete W[Re])
                };
                W[Re] = e, b ? z(b, [ce, fe]) : fe()
            },
            clone(ce) {
                return Xa(ce, t, r, n)
            }
        };
        return ae
    }

    function uf(e) {
        if (gl(e)) return e = hi(e), e.children = null, e
    }

    function Av(e) {
        return gl(e) ? e.children ? e.children[0] : void 0 : e
    }

    function Ja(e, t) {
        e.shapeFlag & 6 && e.component ? Ja(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
    }

    function Eh(e, t = !1, r) {
        let n = [],
            s = 0;
        for (let o = 0; o < e.length; o++) {
            let c = e[o];
            const u = r == null ? c.key : String(r) + String(c.key != null ? c.key : o);
            c.type === At ? (c.patchFlag & 128 && s++, n = n.concat(Eh(c.children, t, u))) : (t || c.type !== ln) && n.push(u != null ? hi(c, {
                key: u
            }) : c)
        }
        if (s > 1)
            for (let o = 0; o < n.length; o++) n[o].patchFlag = -2;
        return n
    }

    function tt(e) {
        return je(e) ? {
            setup: e,
            name: e.name
        } : e
    }
    const Dc = e => !!e.type.__asyncLoader,
        gl = e => e.type.__isKeepAlive;

    function u$(e, t) {
        Tb(e, "a", t)
    }

    function f$(e, t) {
        Tb(e, "da", t)
    }

    function Tb(e, t, r = Xt) {
        const n = e.__wdc || (e.__wdc = () => {
            let s = r;
            for (; s;) {
                if (s.isDeactivated) return;
                s = s.parent
            }
            return e()
        });
        if (ml(t, n, r), r) {
            let s = r.parent;
            for (; s && s.parent;) gl(s.parent.vnode) && d$(n, t, r, s), s = s.parent
        }
    }

    function d$(e, t, r, n) {
        const s = ml(t, e, n, !0);
        yh(() => {
            ah(n[t], s)
        }, r)
    }

    function ml(e, t, r = Xt, n = !1) {
        if (r) {
            const s = r[e] || (r[e] = []),
                o = t.__weh || (t.__weh = (...c) => {
                    if (r.isUnmounted) return;
                    Qs(), Vs(r);
                    const u = Xr(t, r, e, c);
                    return Qi(), ea(), u
                });
            return n ? s.unshift(o) : s.push(o), o
        }
    }
    const Wn = e => (t, r = Xt) => (!Qa || e === "sp") && ml(e, t, r),
        Sb = Wn("bm"),
        _h = Wn("m"),
        h$ = Wn("bu"),
        Ob = Wn("u"),
        Ab = Wn("bum"),
        yh = Wn("um"),
        p$ = Wn("sp"),
        g$ = Wn("rtg"),
        m$ = Wn("rtc");

    function v$(e, t = Xt) {
        ml("ec", e, t)
    }

    function Ke(e, t) {
        const r = zr;
        if (r === null) return e;
        const n = _l(r) || r.proxy,
            s = e.dirs || (e.dirs = []);
        for (let o = 0; o < t.length; o++) {
            let [c, u, f, h = pt] = t[o];
            je(c) && (c = {
                mounted: c,
                updated: c
            }), c.deep && Xi(u), s.push({
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

    function Mi(e, t, r, n) {
        const s = e.dirs,
            o = t && t.dirs;
        for (let c = 0; c < s.length; c++) {
            const u = s[c];
            o && (u.oldValue = o[c].value);
            let f = u.dir[n];
            f && (Qs(), Xr(f, r, 8, [e.el, u, e, t]), ea())
        }
    }
    const bh = "components",
        E$ = "directives";

    function wt(e, t) {
        return Th(bh, e, !0, t) || e
    }
    const Ib = Symbol();

    function _$(e) {
        return Vt(e) ? Th(bh, e, !1) || e : e || Ib
    }

    function Ht(e) {
        return Th(E$, e)
    }

    function Th(e, t, r = !0, n = !1) {
        const s = zr || Xt;
        if (s) {
            const o = s.type;
            if (e === bh) {
                const u = Y$(o, !1);
                if (u && (u === t || u === On(t) || u === ul(On(t)))) return o
            }
            const c = Iv(s[e] || o[e], t) || Iv(s.appContext[e], t);
            return !c && n ? o : c
        }
    }

    function Iv(e, t) {
        return e && (e[t] || e[On(t)] || e[ul(On(t))])
    }

    function lo(e, t, r, n) {
        let s;
        const o = r && r[n];
        if ($e(e) || Vt(e)) {
            s = new Array(e.length);
            for (let c = 0, u = e.length; c < u; c++) s[c] = t(e[c], c, void 0, o && o[c])
        } else if (typeof e == "number") {
            s = new Array(e);
            for (let c = 0; c < e; c++) s[c] = t(c + 1, c, void 0, o && o[c])
        } else if (gt(e))
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
    const od = e => e ? xb(e) ? _l(e) || e.proxy : od(e.parent) : null,
        Kc = Jt(Object.create(null), {
            $: e => e,
            $el: e => e.vnode.el,
            $data: e => e.data,
            $props: e => e.props,
            $attrs: e => e.attrs,
            $slots: e => e.slots,
            $refs: e => e.refs,
            $parent: e => od(e.parent),
            $root: e => od(e.root),
            $emit: e => e.emit,
            $options: e => Sh(e),
            $forceUpdate: e => e.f || (e.f = () => mh(e.update)),
            $nextTick: e => e.n || (e.n = zL.bind(e.proxy)),
            $watch: e => c$.bind(e)
        }),
        y$ = {
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
                    const C = c[t];
                    if (C !== void 0) switch (C) {
                        case 1:
                            return n[t];
                        case 2:
                            return s[t];
                        case 4:
                            return r[t];
                        case 3:
                            return o[t]
                    } else {
                        if (n !== pt && Qe(n, t)) return c[t] = 1, n[t];
                        if (s !== pt && Qe(s, t)) return c[t] = 2, s[t];
                        if ((h = e.propsOptions[0]) && Qe(h, t)) return c[t] = 3, o[t];
                        if (r !== pt && Qe(r, t)) return c[t] = 4, r[t];
                        cd && (c[t] = 0)
                    }
                }
                const g = Kc[t];
                let _, b;
                if (g) return t === "$attrs" && Pr(e, "get", t), g(e);
                if ((_ = u.__cssModules) && (_ = _[t])) return _;
                if (r !== pt && Qe(r, t)) return c[t] = 4, r[t];
                if (b = f.config.globalProperties, Qe(b, t)) return b[t]
            },
            set({
                _: e
            }, t, r) {
                const {
                    data: n,
                    setupState: s,
                    ctx: o
                } = e;
                return s !== pt && Qe(s, t) ? (s[t] = r, !0) : n !== pt && Qe(n, t) ? (n[t] = r, !0) : Qe(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = r, !0)
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
                return !!r[c] || e !== pt && Qe(e, c) || t !== pt && Qe(t, c) || (u = o[0]) && Qe(u, c) || Qe(n, c) || Qe(Kc, c) || Qe(s.config.globalProperties, c)
            },
            defineProperty(e, t, r) {
                return r.get != null ? e._.accessCache[t] = 0 : Qe(r, "value") && this.set(e, t, r.value, null), Reflect.defineProperty(e, t, r)
            }
        };
    let cd = !0;

    function b$(e) {
        const t = Sh(e),
            r = e.proxy,
            n = e.ctx;
        cd = !1, t.beforeCreate && Rv(t.beforeCreate, e, "bc");
        const {
            data: s,
            computed: o,
            methods: c,
            watch: u,
            provide: f,
            inject: h,
            created: g,
            beforeMount: _,
            mounted: b,
            beforeUpdate: C,
            updated: P,
            activated: x,
            deactivated: U,
            beforeDestroy: I,
            beforeUnmount: H,
            destroyed: Y,
            unmounted: W,
            render: G,
            renderTracked: z,
            renderTriggered: ae,
            errorCaptured: ce,
            serverPrefetch: ue,
            expose: Re,
            inheritAttrs: Ie,
            components: fe,
            directives: Ae,
            filters: F
        } = t;
        if (h && T$(h, n, null, e.appContext.config.unwrapInjectedRef), c)
            for (const _e in c) {
                const me = c[_e];
                je(me) && (n[_e] = me.bind(r))
            }
        if (s) {
            const _e = s.call(r, r);
            gt(_e) && (e.data = Gn(_e))
        }
        if (cd = !0, o)
            for (const _e in o) {
                const me = o[_e],
                    Se = je(me) ? me.bind(r, r) : je(me.get) ? me.get.bind(r, r) : cn,
                    Me = !je(me) && je(me.set) ? me.set.bind(r) : cn,
                    Fe = qr({
                        get: Se,
                        set: Me
                    });
                Object.defineProperty(n, _e, {
                    enumerable: !0,
                    configurable: !0,
                    get: () => Fe.value,
                    set: et => Fe.value = et
                })
            }
        if (u)
            for (const _e in u) Rb(u[_e], n, r, _e);
        if (f) {
            const _e = je(f) ? f.call(r) : f;
            Reflect.ownKeys(_e).forEach(me => {
                o$(me, _e[me])
            })
        }
        g && Rv(g, e, "c");

        function de(_e, me) {
            $e(me) ? me.forEach(Se => _e(Se.bind(r))) : me && _e(me.bind(r))
        }
        if (de(Sb, _), de(_h, b), de(h$, C), de(Ob, P), de(u$, x), de(f$, U), de(v$, ce), de(m$, z), de(g$, ae), de(Ab, H), de(yh, W), de(p$, ue), $e(Re))
            if (Re.length) {
                const _e = e.exposed || (e.exposed = {});
                Re.forEach(me => {
                    Object.defineProperty(_e, me, {
                        get: () => r[me],
                        set: Se => r[me] = Se
                    })
                })
            } else e.exposed || (e.exposed = {});
        G && e.render === cn && (e.render = G), Ie != null && (e.inheritAttrs = Ie), fe && (e.components = fe), Ae && (e.directives = Ae)
    }

    function T$(e, t, r = cn, n = !1) {
        $e(e) && (e = ld(e));
        for (const s in e) {
            const o = e[s];
            let c;
            gt(o) ? "default" in o ? c = ui(o.from || s, o.default, !0) : c = ui(o.from || s) : c = ui(o), rr(c) && n ? Object.defineProperty(t, s, {
                enumerable: !0,
                configurable: !0,
                get: () => c.value,
                set: u => c.value = u
            }) : t[s] = c
        }
    }

    function Rv(e, t, r) {
        Xr($e(e) ? e.map(n => n.bind(t.proxy)) : e.bind(t.proxy), t, r)
    }

    function Rb(e, t, r, n) {
        const s = n.includes(".") ? Eb(r, n) : () => r[n];
        if (Vt(e)) {
            const o = t[e];
            je(o) && Zi(s, o)
        } else if (je(e)) Zi(s, e.bind(r));
        else if (gt(e))
            if ($e(e)) e.forEach(o => Rb(o, t, r, n));
            else {
                const o = je(e.handler) ? e.handler.bind(r) : t[e.handler];
                je(o) && Zi(s, o, e)
            }
    }

    function Sh(e) {
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
        return u ? f = u : !s.length && !r && !n ? f = t : (f = {}, s.length && s.forEach(h => Vc(f, h, c, !0)), Vc(f, t, c)), gt(t) && o.set(t, f), f
    }

    function Vc(e, t, r, n = !1) {
        const {
            mixins: s,
            extends: o
        } = t;
        o && Vc(e, o, r, !0), s && s.forEach(c => Vc(e, c, r, !0));
        for (const c in t)
            if (!(n && c === "expose")) {
                const u = S$[c] || r && r[c];
                e[c] = u ? u(e[c], t[c]) : t[c]
            } return e
    }
    const S$ = {
        data: Cv,
        props: Gi,
        emits: Gi,
        methods: Gi,
        computed: Gi,
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
        components: Gi,
        directives: Gi,
        watch: A$,
        provide: Cv,
        inject: O$
    };

    function Cv(e, t) {
        return t ? e ? function() {
            return Jt(je(e) ? e.call(this, this) : e, je(t) ? t.call(this, this) : t)
        } : t : e
    }

    function O$(e, t) {
        return Gi(ld(e), ld(t))
    }

    function ld(e) {
        if ($e(e)) {
            const t = {};
            for (let r = 0; r < e.length; r++) t[e[r]] = e[r];
            return t
        }
        return e
    }

    function gr(e, t) {
        return e ? [...new Set([].concat(e, t))] : t
    }

    function Gi(e, t) {
        return e ? Jt(Jt(Object.create(null), e), t) : t
    }

    function A$(e, t) {
        if (!e) return t;
        if (!t) return e;
        const r = Jt(Object.create(null), e);
        for (const n in t) r[n] = gr(e[n], t[n]);
        return r
    }

    function I$(e, t, r, n = !1) {
        const s = {},
            o = {};
        Gc(o, El, 1), e.propsDefaults = Object.create(null), Cb(e, t, s, o);
        for (const c in e.propsOptions[0]) c in s || (s[c] = void 0);
        r ? e.props = n ? s : GL(s) : e.type.props ? e.props = s : e.props = o, e.attrs = o
    }

    function R$(e, t, r, n) {
        const {
            props: s,
            attrs: o,
            vnode: {
                patchFlag: c
            }
        } = e, u = nt(s), [f] = e.propsOptions;
        let h = !1;
        if ((n || c > 0) && !(c & 16)) {
            if (c & 8) {
                const g = e.vnode.dynamicProps;
                for (let _ = 0; _ < g.length; _++) {
                    let b = g[_];
                    if (hl(e.emitsOptions, b)) continue;
                    const C = t[b];
                    if (f)
                        if (Qe(o, b)) C !== o[b] && (o[b] = C, h = !0);
                        else {
                            const P = On(b);
                            s[P] = ud(f, u, P, C, e, !1)
                        }
                    else C !== o[b] && (o[b] = C, h = !0)
                }
            }
        } else {
            Cb(e, t, s, o) && (h = !0);
            let g;
            for (const _ in u)(!t || !Qe(t, _) && ((g = ss(_)) === _ || !Qe(t, g))) && (f ? r && (r[_] !== void 0 || r[g] !== void 0) && (s[_] = ud(f, u, _, void 0, e, !0)) : delete s[_]);
            if (o !== u)
                for (const _ in o)(!t || !Qe(t, _) && !0) && (delete o[_], h = !0)
        }
        h && Bn(e, "set", "$attrs")
    }

    function Cb(e, t, r, n) {
        const [s, o] = e.propsOptions;
        let c = !1,
            u;
        if (t)
            for (let f in t) {
                if ($c(f)) continue;
                const h = t[f];
                let g;
                s && Qe(s, g = On(f)) ? !o || !o.includes(g) ? r[g] = h : (u || (u = {}))[g] = h : hl(e.emitsOptions, f) || (!(f in n) || h !== n[f]) && (n[f] = h, c = !0)
            }
        if (o) {
            const f = nt(r),
                h = u || pt;
            for (let g = 0; g < o.length; g++) {
                const _ = o[g];
                r[_] = ud(s, f, _, h[_], e, !Qe(h, _))
            }
        }
        return c
    }

    function ud(e, t, r, n, s, o) {
        const c = e[r];
        if (c != null) {
            const u = Qe(c, "default");
            if (u && n === void 0) {
                const f = c.default;
                if (c.type !== Function && je(f)) {
                    const {
                        propsDefaults: h
                    } = s;
                    r in h ? n = h[r] : (Vs(s), n = h[r] = f.call(null, t), Qi())
                } else n = f
            }
            c[0] && (o && !u ? n = !1 : c[1] && (n === "" || n === ss(r)) && (n = !0))
        }
        return n
    }

    function wb(e, t, r = !1) {
        const n = t.propsCache,
            s = n.get(e);
        if (s) return s;
        const o = e.props,
            c = {},
            u = [];
        let f = !1;
        if (!je(e)) {
            const g = _ => {
                f = !0;
                const [b, C] = wb(_, t, !0);
                Jt(c, b), C && u.push(...C)
            };
            !r && t.mixins.length && t.mixins.forEach(g), e.extends && g(e.extends), e.mixins && e.mixins.forEach(g)
        }
        if (!o && !f) return gt(e) && n.set(e, Ps), Ps;
        if ($e(o))
            for (let g = 0; g < o.length; g++) {
                const _ = On(o[g]);
                wv(_) && (c[_] = pt)
            } else if (o)
                for (const g in o) {
                    const _ = On(g);
                    if (wv(_)) {
                        const b = o[g],
                            C = c[_] = $e(b) || je(b) ? {
                                type: b
                            } : b;
                        if (C) {
                            const P = $v(Boolean, C.type),
                                x = $v(String, C.type);
                            C[0] = P > -1, C[1] = x < 0 || P < x, (P > -1 || Qe(C, "default")) && u.push(_)
                        }
                    }
                }
        const h = [c, u];
        return gt(e) && n.set(e, h), h
    }

    function wv(e) {
        return e[0] !== "$"
    }

    function Nv(e) {
        const t = e && e.toString().match(/^\s*function (\w+)/);
        return t ? t[1] : e === null ? "null" : ""
    }

    function Lv(e, t) {
        return Nv(e) === Nv(t)
    }

    function $v(e, t) {
        return $e(t) ? t.findIndex(r => Lv(r, e)) : je(t) && Lv(t, e) ? 0 : -1
    }
    const Nb = e => e[0] === "_" || e === "$stable",
        Oh = e => $e(e) ? e.map(bn) : [bn(e)],
        C$ = (e, t, r) => {
            if (t._n) return t;
            const n = vh((...s) => Oh(t(...s)), r);
            return n._c = !1, n
        },
        Lb = (e, t, r) => {
            const n = e._ctx;
            for (const s in e) {
                if (Nb(s)) continue;
                const o = e[s];
                if (je(o)) t[s] = C$(s, o, n);
                else if (o != null) {
                    const c = Oh(o);
                    t[s] = () => c
                }
            }
        },
        $b = (e, t) => {
            const r = Oh(t);
            e.slots.default = () => r
        },
        w$ = (e, t) => {
            if (e.vnode.shapeFlag & 32) {
                const r = t._;
                r ? (e.slots = nt(t), Gc(t, "_", r)) : Lb(t, e.slots = {})
            } else e.slots = {}, t && $b(e, t);
            Gc(e.slots, El, 1)
        },
        N$ = (e, t, r) => {
            const {
                vnode: n,
                slots: s
            } = e;
            let o = !0,
                c = pt;
            if (n.shapeFlag & 32) {
                const u = t._;
                u ? r && u === 1 ? o = !1 : (Jt(s, t), !r && u === 1 && delete s._) : (o = !t.$stable, Lb(t, s)), c = t
            } else t && ($b(e, t), c = {
                default: 1
            });
            if (o)
                for (const u in s) !Nb(u) && !(u in c) && delete s[u]
        };

    function Pb() {
        return {
            app: null,
            config: {
                isNativeTag: oL,
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
    let L$ = 0;

    function $$(e, t) {
        return function(n, s = null) {
            je(n) || (n = Object.assign({}, n)), s != null && !gt(s) && (s = null);
            const o = Pb(),
                c = new Set;
            let u = !1;
            const f = o.app = {
                _uid: L$++,
                _component: n,
                _props: s,
                _container: null,
                _context: o,
                _instance: null,
                version: z$,
                get config() {
                    return o.config
                },
                set config(h) {},
                use(h, ...g) {
                    return c.has(h) || (h && je(h.install) ? (c.add(h), h.install(f, ...g)) : je(h) && (c.add(h), h(f, ...g))), f
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
                mount(h, g, _) {
                    if (!u) {
                        const b = st(n, s);
                        return b.appContext = o, g && t ? t(b, h) : e(b, h, _), u = !0, f._container = h, h.__vue_app__ = f, _l(b.component) || b.component.proxy
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

    function fd(e, t, r, n, s = !1) {
        if ($e(e)) {
            e.forEach((b, C) => fd(b, t && ($e(t) ? t[C] : t), r, n, s));
            return
        }
        if (Dc(n) && !s) return;
        const o = n.shapeFlag & 4 ? _l(n.component) || n.component.proxy : n.el,
            c = s ? null : o,
            {
                i: u,
                r: f
            } = e,
            h = t && t.r,
            g = u.refs === pt ? u.refs = {} : u.refs,
            _ = u.setupState;
        if (h != null && h !== f && (Vt(h) ? (g[h] = null, Qe(_, h) && (_[h] = null)) : rr(h) && (h.value = null)), je(f)) li(f, u, 12, [c, g]);
        else {
            const b = Vt(f),
                C = rr(f);
            if (b || C) {
                const P = () => {
                    if (e.f) {
                        const x = b ? g[f] : f.value;
                        s ? $e(x) && ah(x, o) : $e(x) ? x.includes(o) || x.push(o) : b ? (g[f] = [o], Qe(_, f) && (_[f] = g[f])) : (f.value = [o], e.k && (g[e.k] = f.value))
                    } else b ? (g[f] = c, Qe(_, f) && (_[f] = c)) : C && (f.value = c, e.k && (g[e.k] = c))
                };
                c ? (P.id = -1, Or(P, r)) : P()
            }
        }
    }
    const Or = a$;

    function P$(e) {
        return D$(e)
    }

    function D$(e, t) {
        const r = hL();
        r.__VUE__ = !0;
        const {
            insert: n,
            remove: s,
            patchProp: o,
            createElement: c,
            createText: u,
            createComment: f,
            setText: h,
            setElementText: g,
            parentNode: _,
            nextSibling: b,
            setScopeId: C = cn,
            cloneNode: P,
            insertStaticContent: x
        } = e, U = (m, p, O, k = null, B = null, V = null, le = !1, ie = null, ee = !!p.dynamicChildren) => {
            if (m === p) return;
            m && !Ki(m, p) && (k = St(m), Nt(m, B, V, !0), m = null), p.patchFlag === -2 && (ee = !1, p.dynamicChildren = null);
            const {
                type: w,
                ref: j,
                shapeFlag: he
            } = p;
            switch (w) {
                case vl:
                    I(m, p, O, k);
                    break;
                case ln:
                    H(m, p, O, k);
                    break;
                case ff:
                    m == null && Y(p, O, k, le);
                    break;
                case At:
                    Ae(m, p, O, k, B, V, le, ie, ee);
                    break;
                default:
                    he & 1 ? z(m, p, O, k, B, V, le, ie, ee) : he & 6 ? F(m, p, O, k, B, V, le, ie, ee) : (he & 64 || he & 128) && w.process(m, p, O, k, B, V, le, ie, ee, kt)
            }
            j != null && B && fd(j, m && m.ref, V, p || m, !p)
        }, I = (m, p, O, k) => {
            if (m == null) n(p.el = u(p.children), O, k);
            else {
                const B = p.el = m.el;
                p.children !== m.children && h(B, p.children)
            }
        }, H = (m, p, O, k) => {
            m == null ? n(p.el = f(p.children || ""), O, k) : p.el = m.el
        }, Y = (m, p, O, k) => {
            [m.el, m.anchor] = x(m.children, p, O, k, m.el, m.anchor)
        }, W = ({
            el: m,
            anchor: p
        }, O, k) => {
            let B;
            for (; m && m !== p;) B = b(m), n(m, O, k), m = B;
            n(p, O, k)
        }, G = ({
            el: m,
            anchor: p
        }) => {
            let O;
            for (; m && m !== p;) O = b(m), s(m), m = O;
            s(p)
        }, z = (m, p, O, k, B, V, le, ie, ee) => {
            le = le || p.type === "svg", m == null ? ae(p, O, k, B, V, le, ie, ee) : Re(m, p, B, V, le, ie, ee)
        }, ae = (m, p, O, k, B, V, le, ie) => {
            let ee, w;
            const {
                type: j,
                props: he,
                shapeFlag: pe,
                transition: Ce,
                patchFlag: Pe,
                dirs: A
            } = m;
            if (m.el && P !== void 0 && Pe === -1) ee = m.el = P(m.el);
            else {
                if (ee = m.el = c(m.type, V, he && he.is, he), pe & 8 ? g(ee, m.children) : pe & 16 && ue(m.children, ee, null, k, B, V && j !== "foreignObject", le, ie), A && Mi(m, null, k, "created"), he) {
                    for (const L in he) L !== "value" && !$c(L) && o(ee, L, null, he[L], V, m.children, k, B, at);
                    "value" in he && o(ee, "value", null, he.value), (w = he.onVnodeBeforeMount) && mn(w, k, m)
                }
                ce(ee, m, m.scopeId, le, k)
            }
            A && Mi(m, null, k, "beforeMount");
            const T = (!B || B && !B.pendingBranch) && Ce && !Ce.persisted;
            T && Ce.beforeEnter(ee), n(ee, p, O), ((w = he && he.onVnodeMounted) || T || A) && Or(() => {
                w && mn(w, k, m), T && Ce.enter(ee), A && Mi(m, null, k, "mounted")
            }, B)
        }, ce = (m, p, O, k, B) => {
            if (O && C(m, O), k)
                for (let V = 0; V < k.length; V++) C(m, k[V]);
            if (B) {
                let V = B.subTree;
                if (p === V) {
                    const le = B.vnode;
                    ce(m, le, le.scopeId, le.slotScopeIds, B.parent)
                }
            }
        }, ue = (m, p, O, k, B, V, le, ie, ee = 0) => {
            for (let w = ee; w < m.length; w++) {
                const j = m[w] = ie ? ni(m[w]) : bn(m[w]);
                U(null, j, p, O, k, B, V, le, ie)
            }
        }, Re = (m, p, O, k, B, V, le) => {
            const ie = p.el = m.el;
            let {
                patchFlag: ee,
                dynamicChildren: w,
                dirs: j
            } = p;
            ee |= m.patchFlag & 16;
            const he = m.props || pt,
                pe = p.props || pt;
            let Ce;
            O && ki(O, !1), (Ce = pe.onVnodeBeforeUpdate) && mn(Ce, O, p, m), j && Mi(p, m, O, "beforeUpdate"), O && ki(O, !0);
            const Pe = B && p.type !== "foreignObject";
            if (w ? Ie(m.dynamicChildren, w, ie, O, k, Pe, V) : le || Se(m, p, ie, null, O, k, Pe, V, !1), ee > 0) {
                if (ee & 16) fe(ie, p, he, pe, O, k, B);
                else if (ee & 2 && he.class !== pe.class && o(ie, "class", null, pe.class, B), ee & 4 && o(ie, "style", he.style, pe.style, B), ee & 8) {
                    const A = p.dynamicProps;
                    for (let T = 0; T < A.length; T++) {
                        const L = A[T],
                            S = he[L],
                            $ = pe[L];
                        ($ !== S || L === "value") && o(ie, L, S, $, B, m.children, O, k, at)
                    }
                }
                ee & 1 && m.children !== p.children && g(ie, p.children)
            } else !le && w == null && fe(ie, p, he, pe, O, k, B);
            ((Ce = pe.onVnodeUpdated) || j) && Or(() => {
                Ce && mn(Ce, O, p, m), j && Mi(p, m, O, "updated")
            }, k)
        }, Ie = (m, p, O, k, B, V, le) => {
            for (let ie = 0; ie < p.length; ie++) {
                const ee = m[ie],
                    w = p[ie],
                    j = ee.el && (ee.type === At || !Ki(ee, w) || ee.shapeFlag & 70) ? _(ee.el) : O;
                U(ee, w, j, null, k, B, V, le, !0)
            }
        }, fe = (m, p, O, k, B, V, le) => {
            if (O !== k) {
                for (const ie in k) {
                    if ($c(ie)) continue;
                    const ee = k[ie],
                        w = O[ie];
                    ee !== w && ie !== "value" && o(m, ie, w, ee, le, p.children, B, V, at)
                }
                if (O !== pt)
                    for (const ie in O) !$c(ie) && !(ie in k) && o(m, ie, O[ie], null, le, p.children, B, V, at);
                "value" in k && o(m, "value", O.value, k.value)
            }
        }, Ae = (m, p, O, k, B, V, le, ie, ee) => {
            const w = p.el = m ? m.el : u(""),
                j = p.anchor = m ? m.anchor : u("");
            let {
                patchFlag: he,
                dynamicChildren: pe,
                slotScopeIds: Ce
            } = p;
            Ce && (ie = ie ? ie.concat(Ce) : Ce), m == null ? (n(w, O, k), n(j, O, k), ue(p.children, O, j, B, V, le, ie, ee)) : he > 0 && he & 64 && pe && m.dynamicChildren ? (Ie(m.dynamicChildren, pe, O, B, V, le, ie), (p.key != null || B && p === B.subTree) && Db(m, p, !0)) : Se(m, p, O, j, B, V, le, ie, ee)
        }, F = (m, p, O, k, B, V, le, ie, ee) => {
            p.slotScopeIds = ie, m == null ? p.shapeFlag & 512 ? B.ctx.activate(p, O, k, le, ee) : re(p, O, k, B, V, le, ee) : de(m, p, ee)
        }, re = (m, p, O, k, B, V, le) => {
            const ie = m.component = W$(m, k, B);
            if (gl(m) && (ie.ctx.renderer = kt), j$(ie), ie.asyncDep) {
                if (B && B.registerDep(ie, _e), !m.el) {
                    const ee = ie.subTree = st(ln);
                    H(null, ee, p, O)
                }
                return
            }
            _e(ie, m, p, O, B, V, le)
        }, de = (m, p, O) => {
            const k = p.component = m.component;
            if (n$(m, p, O))
                if (k.asyncDep && !k.asyncResolved) {
                    me(k, p, O);
                    return
                } else k.next = p, JL(k.update), k.update();
            else p.el = m.el, k.vnode = p
        }, _e = (m, p, O, k, B, V, le) => {
            const ie = () => {
                    if (m.isMounted) {
                        let {
                            next: j,
                            bu: he,
                            u: pe,
                            parent: Ce,
                            vnode: Pe
                        } = m, A = j, T;
                        ki(m, !1), j ? (j.el = Pe.el, me(m, j, le)) : j = Pe, he && Pc(he), (T = j.props && j.props.onVnodeBeforeUpdate) && mn(T, Ce, j, Pe), ki(m, !0);
                        const L = lf(m),
                            S = m.subTree;
                        m.subTree = L, U(S, L, _(S.el), St(S), m, B, V), j.el = L.el, A === null && i$(m, L.el), pe && Or(pe, B), (T = j.props && j.props.onVnodeUpdated) && Or(() => mn(T, Ce, j, Pe), B)
                    } else {
                        let j;
                        const {
                            el: he,
                            props: pe
                        } = p, {
                            bm: Ce,
                            m: Pe,
                            parent: A
                        } = m, T = Dc(p);
                        if (ki(m, !1), Ce && Pc(Ce), !T && (j = pe && pe.onVnodeBeforeMount) && mn(j, A, p), ki(m, !0), he && xt) {
                            const L = () => {
                                m.subTree = lf(m), xt(he, m.subTree, m, B, null)
                            };
                            T ? p.type.__asyncLoader().then(() => !m.isUnmounted && L()) : L()
                        } else {
                            const L = m.subTree = lf(m);
                            U(null, L, O, k, m, B, V), p.el = L.el
                        }
                        if (Pe && Or(Pe, B), !T && (j = pe && pe.onVnodeMounted)) {
                            const L = p;
                            Or(() => mn(j, A, L), B)
                        }(p.shapeFlag & 256 || A && Dc(A.vnode) && A.vnode.shapeFlag & 256) && m.a && Or(m.a, B), m.isMounted = !0, p = O = k = null
                    }
                },
                ee = m.effect = new lh(ie, () => mh(w), m.scope),
                w = m.update = () => ee.run();
            w.id = m.uid, ki(m, !0), w()
        }, me = (m, p, O) => {
            p.component = m;
            const k = m.vnode.props;
            m.vnode = p, m.next = null, R$(m, p.props, k, O), N$(m, p.children, O), Qs(), Tv(), ea()
        }, Se = (m, p, O, k, B, V, le, ie, ee = !1) => {
            const w = m && m.children,
                j = m ? m.shapeFlag : 0,
                he = p.children,
                {
                    patchFlag: pe,
                    shapeFlag: Ce
                } = p;
            if (pe > 0) {
                if (pe & 128) {
                    Fe(w, he, O, k, B, V, le, ie, ee);
                    return
                } else if (pe & 256) {
                    Me(w, he, O, k, B, V, le, ie, ee);
                    return
                }
            }
            Ce & 8 ? (j & 16 && at(w, B, V), he !== w && g(O, he)) : j & 16 ? Ce & 16 ? Fe(w, he, O, k, B, V, le, ie, ee) : at(w, B, V, !0) : (j & 8 && g(O, ""), Ce & 16 && ue(he, O, k, B, V, le, ie, ee))
        }, Me = (m, p, O, k, B, V, le, ie, ee) => {
            m = m || Ps, p = p || Ps;
            const w = m.length,
                j = p.length,
                he = Math.min(w, j);
            let pe;
            for (pe = 0; pe < he; pe++) {
                const Ce = p[pe] = ee ? ni(p[pe]) : bn(p[pe]);
                U(m[pe], Ce, O, null, B, V, le, ie, ee)
            }
            w > j ? at(m, B, V, !0, !1, he) : ue(p, O, k, B, V, le, ie, ee, he)
        }, Fe = (m, p, O, k, B, V, le, ie, ee) => {
            let w = 0;
            const j = p.length;
            let he = m.length - 1,
                pe = j - 1;
            for (; w <= he && w <= pe;) {
                const Ce = m[w],
                    Pe = p[w] = ee ? ni(p[w]) : bn(p[w]);
                if (Ki(Ce, Pe)) U(Ce, Pe, O, null, B, V, le, ie, ee);
                else break;
                w++
            }
            for (; w <= he && w <= pe;) {
                const Ce = m[he],
                    Pe = p[pe] = ee ? ni(p[pe]) : bn(p[pe]);
                if (Ki(Ce, Pe)) U(Ce, Pe, O, null, B, V, le, ie, ee);
                else break;
                he--, pe--
            }
            if (w > he) {
                if (w <= pe) {
                    const Ce = pe + 1,
                        Pe = Ce < j ? p[Ce].el : k;
                    for (; w <= pe;) U(null, p[w] = ee ? ni(p[w]) : bn(p[w]), O, Pe, B, V, le, ie, ee), w++
                }
            } else if (w > pe)
                for (; w <= he;) Nt(m[w], B, V, !0), w++;
            else {
                const Ce = w,
                    Pe = w,
                    A = new Map;
                for (w = Pe; w <= pe; w++) {
                    const Te = p[w] = ee ? ni(p[w]) : bn(p[w]);
                    Te.key != null && A.set(Te.key, w)
                }
                let T, L = 0;
                const S = pe - Pe + 1;
                let $ = !1,
                    J = 0;
                const te = new Array(S);
                for (w = 0; w < S; w++) te[w] = 0;
                for (w = Ce; w <= he; w++) {
                    const Te = m[w];
                    if (L >= S) {
                        Nt(Te, B, V, !0);
                        continue
                    }
                    let ut;
                    if (Te.key != null) ut = A.get(Te.key);
                    else
                        for (T = Pe; T <= pe; T++)
                            if (te[T - Pe] === 0 && Ki(Te, p[T])) {
                                ut = T;
                                break
                            } ut === void 0 ? Nt(Te, B, V, !0) : (te[ut - Pe] = w + 1, ut >= J ? J = ut : $ = !0, U(Te, p[ut], O, null, B, V, le, ie, ee), L++)
                }
                const Ee = $ ? M$(te) : Ps;
                for (T = Ee.length - 1, w = S - 1; w >= 0; w--) {
                    const Te = Pe + w,
                        ut = p[Te],
                        sr = Te + 1 < j ? p[Te + 1].el : k;
                    te[w] === 0 ? U(null, ut, O, sr, B, V, le, ie, ee) : $ && (T < 0 || w !== Ee[T] ? et(ut, O, sr, 2) : T--)
                }
            }
        }, et = (m, p, O, k, B = null) => {
            const {
                el: V,
                type: le,
                transition: ie,
                children: ee,
                shapeFlag: w
            } = m;
            if (w & 6) {
                et(m.component.subTree, p, O, k);
                return
            }
            if (w & 128) {
                m.suspense.move(p, O, k);
                return
            }
            if (w & 64) {
                le.move(m, p, O, kt);
                return
            }
            if (le === At) {
                n(V, p, O);
                for (let he = 0; he < ee.length; he++) et(ee[he], p, O, k);
                n(m.anchor, p, O);
                return
            }
            if (le === ff) {
                W(m, p, O);
                return
            }
            if (k !== 2 && w & 1 && ie)
                if (k === 0) ie.beforeEnter(V), n(V, p, O), Or(() => ie.enter(V), B);
                else {
                    const {
                        leave: he,
                        delayLeave: pe,
                        afterLeave: Ce
                    } = ie, Pe = () => n(V, p, O), A = () => {
                        he(V, () => {
                            Pe(), Ce && Ce()
                        })
                    };
                    pe ? pe(V, Pe, A) : A()
                }
            else n(V, p, O)
        }, Nt = (m, p, O, k = !1, B = !1) => {
            const {
                type: V,
                props: le,
                ref: ie,
                children: ee,
                dynamicChildren: w,
                shapeFlag: j,
                patchFlag: he,
                dirs: pe
            } = m;
            if (ie != null && fd(ie, null, O, m, !0), j & 256) {
                p.ctx.deactivate(m);
                return
            }
            const Ce = j & 1 && pe,
                Pe = !Dc(m);
            let A;
            if (Pe && (A = le && le.onVnodeBeforeUnmount) && mn(A, p, m), j & 6) Er(m.component, O, k);
            else {
                if (j & 128) {
                    m.suspense.unmount(O, k);
                    return
                }
                Ce && Mi(m, null, p, "beforeUnmount"), j & 64 ? m.type.remove(m, p, O, B, kt, k) : w && (V !== At || he > 0 && he & 64) ? at(w, p, O, !1, !0) : (V === At && he & 384 || !B && j & 16) && at(ee, p, O), k && Ir(m)
            }(Pe && (A = le && le.onVnodeUnmounted) || Ce) && Or(() => {
                A && mn(A, p, m), Ce && Mi(m, null, p, "unmounted")
            }, O)
        }, Ir = m => {
            const {
                type: p,
                el: O,
                anchor: k,
                transition: B
            } = m;
            if (p === At) {
                ir(O, k);
                return
            }
            if (p === ff) {
                G(m);
                return
            }
            const V = () => {
                s(O), B && !B.persisted && B.afterLeave && B.afterLeave()
            };
            if (m.shapeFlag & 1 && B && !B.persisted) {
                const {
                    leave: le,
                    delayLeave: ie
                } = B, ee = () => le(O, V);
                ie ? ie(m.el, V, ee) : ee()
            } else V()
        }, ir = (m, p) => {
            let O;
            for (; m !== p;) O = b(m), s(m), m = O;
            s(p)
        }, Er = (m, p, O) => {
            const {
                bum: k,
                scope: B,
                update: V,
                subTree: le,
                um: ie
            } = m;
            k && Pc(k), B.stop(), V && (V.active = !1, Nt(le, m, p, O)), ie && Or(ie, p), Or(() => {
                m.isUnmounted = !0
            }, p), p && p.pendingBranch && !p.isUnmounted && m.asyncDep && !m.asyncResolved && m.suspenseId === p.pendingId && (p.deps--, p.deps === 0 && p.resolve())
        }, at = (m, p, O, k = !1, B = !1, V = 0) => {
            for (let le = V; le < m.length; le++) Nt(m[le], p, O, k, B)
        }, St = m => m.shapeFlag & 6 ? St(m.component.subTree) : m.shapeFlag & 128 ? m.suspense.next() : b(m.anchor || m.el), ot = (m, p, O) => {
            m == null ? p._vnode && Nt(p._vnode, null, null, !0) : U(p._vnode || null, m, p, null, null, null, O), Tv(), pb(), p._vnode = m
        }, kt = {
            p: U,
            um: Nt,
            m: et,
            r: Ir,
            mt: re,
            mc: ue,
            pc: Se,
            pbc: Ie,
            n: St,
            o: e
        };
        let Yt, xt;
        return t && ([Yt, xt] = t(kt)), {
            render: ot,
            hydrate: Yt,
            createApp: $$(ot, Yt)
        }
    }

    function ki({
        effect: e,
        update: t
    }, r) {
        e.allowRecurse = t.allowRecurse = r
    }

    function Db(e, t, r = !1) {
        const n = e.children,
            s = t.children;
        if ($e(n) && $e(s))
            for (let o = 0; o < n.length; o++) {
                const c = n[o];
                let u = s[o];
                u.shapeFlag & 1 && !u.dynamicChildren && ((u.patchFlag <= 0 || u.patchFlag === 32) && (u = s[o] = ni(s[o]), u.el = c.el), r || Db(c, u))
            }
    }

    function M$(e) {
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
    const k$ = e => e.__isTeleport,
        At = Symbol(void 0),
        vl = Symbol(void 0),
        ln = Symbol(void 0),
        ff = Symbol(void 0),
        ka = [];
    let on = null;

    function ne(e = !1) {
        ka.push(on = e ? null : [])
    }

    function x$() {
        ka.pop(), on = ka[ka.length - 1] || null
    }
    let Za = 1;

    function Pv(e) {
        Za += e
    }

    function Mb(e) {
        return e.dynamicChildren = Za > 0 ? on || Ps : null, x$(), Za > 0 && on && on.push(e), e
    }

    function oe(e, t, r, n, s, o) {
        return Mb(X(e, t, r, n, s, o, !0))
    }

    function Yr(e, t, r, n, s) {
        return Mb(st(e, t, r, n, s, !0))
    }

    function dd(e) {
        return e ? e.__v_isVNode === !0 : !1
    }

    function Ki(e, t) {
        return e.type === t.type && e.key === t.key
    }
    const El = "__vInternal",
        kb = ({
            key: e
        }) => e != null ? e : null,
        Mc = ({
            ref: e,
            ref_key: t,
            ref_for: r
        }) => e != null ? Vt(e) || rr(e) || je(e) ? {
            i: zr,
            r: e,
            k: t,
            f: !!r
        } : e : null;

    function X(e, t = null, r = null, n = 0, s = null, o = e === At ? 0 : 1, c = !1, u = !1) {
        const f = {
            __v_isVNode: !0,
            __v_skip: !0,
            type: e,
            props: t,
            key: t && kb(t),
            ref: t && Mc(t),
            scopeId: pl,
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
        return u ? (Ah(f, r), o & 128 && e.normalize(f)) : r && (f.shapeFlag |= Vt(r) ? 8 : 16), Za > 0 && !c && on && (f.patchFlag > 0 || o & 6) && f.patchFlag !== 32 && on.push(f), f
    }
    const st = U$;

    function U$(e, t = null, r = null, n = 0, s = null, o = !1) {
        if ((!e || e === Ib) && (e = ln), dd(e)) {
            const u = hi(e, t, !0);
            return r && Ah(u, r), Za > 0 && !o && on && (u.shapeFlag & 6 ? on[on.indexOf(e)] = u : on.push(u)), u.patchFlag |= -2, u
        }
        if (q$(e) && (e = e.__vccOpts), t) {
            t = F$(t);
            let {
                class: u,
                style: f
            } = t;
            u && !Vt(u) && (t.class = Ge(u)), gt(f) && (sb(f) && !$e(f) && (f = Jt({}, f)), t.style = oo(f))
        }
        const c = Vt(e) ? 1 : s$(e) ? 128 : k$(e) ? 64 : gt(e) ? 4 : je(e) ? 2 : 0;
        return X(e, t, r, n, s, c, o, !0)
    }

    function F$(e) {
        return e ? sb(e) || El in e ? Jt({}, e) : e : null
    }

    function hi(e, t, r = !1) {
        const {
            props: n,
            ref: s,
            patchFlag: o,
            children: c
        } = e, u = t ? Ih(n || {}, t) : n;
        return {
            __v_isVNode: !0,
            __v_skip: !0,
            type: e.type,
            props: u,
            key: u && kb(u),
            ref: t && t.ref ? r && s ? $e(s) ? s.concat(Mc(t)) : [s, Mc(t)] : Mc(t) : s,
            scopeId: e.scopeId,
            slotScopeIds: e.slotScopeIds,
            children: c,
            target: e.target,
            targetAnchor: e.targetAnchor,
            staticCount: e.staticCount,
            shapeFlag: e.shapeFlag,
            patchFlag: t && e.type !== At ? o === -1 ? 16 : o | 16 : o,
            dynamicProps: e.dynamicProps,
            dynamicChildren: e.dynamicChildren,
            appContext: e.appContext,
            dirs: e.dirs,
            transition: e.transition,
            component: e.component,
            suspense: e.suspense,
            ssContent: e.ssContent && hi(e.ssContent),
            ssFallback: e.ssFallback && hi(e.ssFallback),
            el: e.el,
            anchor: e.anchor
        }
    }

    function vr(e = " ", t = 0) {
        return st(vl, null, e, t)
    }

    function We(e = "", t = !1) {
        return t ? (ne(), Yr(ln, null, e)) : st(ln, null, e)
    }

    function bn(e) {
        return e == null || typeof e == "boolean" ? st(ln) : $e(e) ? st(At, null, e.slice()) : typeof e == "object" ? ni(e) : st(vl, null, String(e))
    }

    function ni(e) {
        return e.el === null || e.memo ? e : hi(e)
    }

    function Ah(e, t) {
        let r = 0;
        const {
            shapeFlag: n
        } = e;
        if (t == null) t = null;
        else if ($e(t)) r = 16;
        else if (typeof t == "object")
            if (n & 65) {
                const s = t.default;
                s && (s._c && (s._d = !1), Ah(e, s()), s._c && (s._d = !0));
                return
            } else {
                r = 32;
                const s = t._;
                !s && !(El in t) ? t._ctx = zr : s === 3 && zr && (zr.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024))
            }
        else je(t) ? (t = {
            default: t,
            _ctx: zr
        }, r = 32) : (t = String(t), n & 64 ? (r = 16, t = [vr(t)]) : r = 8);
        e.children = t, e.shapeFlag |= r
    }

    function Ih(...e) {
        const t = {};
        for (let r = 0; r < e.length; r++) {
            const n = e[r];
            for (const s in n)
                if (s === "class") t.class !== n.class && (t.class = Ge([t.class, n.class]));
                else if (s === "style") t.style = oo([t.style, n.style]);
            else if (ol(s)) {
                const o = t[s],
                    c = n[s];
                c && o !== c && !($e(o) && o.includes(c)) && (t[s] = o ? [].concat(o, c) : c)
            } else s !== "" && (t[s] = n[s])
        }
        return t
    }

    function mn(e, t, r, n = null) {
        Xr(e, t, 7, [r, n])
    }
    const B$ = Pb();
    let G$ = 0;

    function W$(e, t, r) {
        const n = e.type,
            s = (t ? t.appContext : e.appContext) || B$,
            o = {
                uid: G$++,
                vnode: e,
                type: n,
                parent: t,
                appContext: s,
                root: null,
                next: null,
                subTree: null,
                effect: null,
                update: null,
                scope: new Yy(!0),
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
                propsOptions: wb(n, s),
                emitsOptions: mb(n, s),
                emit: null,
                emitted: null,
                propsDefaults: pt,
                inheritAttrs: n.inheritAttrs,
                ctx: pt,
                data: pt,
                props: pt,
                attrs: pt,
                slots: pt,
                refs: pt,
                setupState: pt,
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
        }, o.root = t ? t.root : o, o.emit = e$.bind(null, o), e.ce && e.ce(o), o
    }
    let Xt = null;
    const pi = () => Xt || zr,
        Vs = e => {
            Xt = e, e.scope.on()
        },
        Qi = () => {
            Xt && Xt.scope.off(), Xt = null
        };

    function xb(e) {
        return e.vnode.shapeFlag & 4
    }
    let Qa = !1;

    function j$(e, t = !1) {
        Qa = t;
        const {
            props: r,
            children: n
        } = e.vnode, s = xb(e);
        I$(e, r, s, t), w$(e, n);
        const o = s ? H$(e, t) : void 0;
        return Qa = !1, o
    }

    function H$(e, t) {
        const r = e.type;
        e.accessCache = Object.create(null), e.proxy = ab(new Proxy(e.ctx, y$));
        const {
            setup: n
        } = r;
        if (n) {
            const s = e.setupContext = n.length > 1 ? V$(e) : null;
            Vs(e), Qs();
            const o = li(n, e, 0, [e.props, s]);
            if (ea(), Qi(), Hy(o)) {
                if (o.then(Qi, Qi), t) return o.then(c => {
                    Dv(e, c, t)
                }).catch(c => {
                    dl(c, e, 0)
                });
                e.asyncDep = o
            } else Dv(e, o, t)
        } else Ub(e, t)
    }

    function Dv(e, t, r) {
        je(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : gt(t) && (e.setupState = ub(t)), Ub(e, r)
    }
    let Mv;

    function Ub(e, t, r) {
        const n = e.type;
        if (!e.render) {
            if (!t && Mv && !n.render) {
                const s = n.template || Sh(e).template;
                if (s) {
                    const {
                        isCustomElement: o,
                        compilerOptions: c
                    } = e.appContext.config, {
                        delimiters: u,
                        compilerOptions: f
                    } = n, h = Jt(Jt({
                        isCustomElement: o,
                        delimiters: u
                    }, c), f);
                    n.render = Mv(s, h)
                }
            }
            e.render = n.render || cn
        }
        Vs(e), Qs(), b$(e), ea(), Qi()
    }

    function K$(e) {
        return new Proxy(e.attrs, {
            get(t, r) {
                return Pr(e, "get", "$attrs"), t[r]
            }
        })
    }

    function V$(e) {
        const t = n => {
            e.exposed = n || {}
        };
        let r;
        return {
            get attrs() {
                return r || (r = K$(e))
            },
            slots: e.slots,
            emit: e.emit,
            expose: t
        }
    }

    function _l(e) {
        if (e.exposed) return e.exposeProxy || (e.exposeProxy = new Proxy(ub(ab(e.exposed)), {
            get(t, r) {
                if (r in t) return t[r];
                if (r in Kc) return Kc[r](e)
            }
        }))
    }

    function Y$(e, t = !0) {
        return je(e) ? e.displayName || e.name : e.name || t && e.__name
    }

    function q$(e) {
        return je(e) && "__vccOpts" in e
    }
    const qr = (e, t) => YL(e, t, Qa);

    function Rh(e, t, r) {
        const n = arguments.length;
        return n === 2 ? gt(t) && !$e(t) ? dd(t) ? st(e, null, [t]) : st(e, t) : st(e, null, t) : (n > 3 ? r = Array.prototype.slice.call(arguments, 2) : n === 3 && dd(r) && (r = [r]), st(e, t, r))
    }
    const z$ = "3.2.39",
        X$ = "http://www.w3.org/2000/svg",
        Vi = typeof document < "u" ? document : null,
        kv = Vi && Vi.createElement("template"),
        J$ = {
            insert: (e, t, r) => {
                t.insertBefore(e, r || null)
            },
            remove: e => {
                const t = e.parentNode;
                t && t.removeChild(e)
            },
            createElement: (e, t, r, n) => {
                const s = t ? Vi.createElementNS(X$, e) : Vi.createElement(e, r ? {
                    is: r
                } : void 0);
                return e === "select" && n && n.multiple != null && s.setAttribute("multiple", n.multiple), s
            },
            createText: e => Vi.createTextNode(e),
            createComment: e => Vi.createComment(e),
            setText: (e, t) => {
                e.nodeValue = t
            },
            setElementText: (e, t) => {
                e.textContent = t
            },
            parentNode: e => e.parentNode,
            nextSibling: e => e.nextSibling,
            querySelector: e => Vi.querySelector(e),
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
                    kv.innerHTML = n ? `<svg>${e}</svg>` : e;
                    const u = kv.content;
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

    function Z$(e, t, r) {
        const n = e._vtc;
        n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : r ? e.setAttribute("class", t) : e.className = t
    }

    function Q$(e, t, r) {
        const n = e.style,
            s = Vt(r);
        if (r && !s) {
            for (const o in r) hd(n, o, r[o]);
            if (t && !Vt(t))
                for (const o in t) r[o] == null && hd(n, o, "")
        } else {
            const o = n.display;
            s ? t !== r && (n.cssText = r) : t && e.removeAttribute("style"), "_vod" in e && (n.display = o)
        }
    }
    const xv = /\s*!important$/;

    function hd(e, t, r) {
        if ($e(r)) r.forEach(n => hd(e, t, n));
        else if (r == null && (r = ""), t.startsWith("--")) e.setProperty(t, r);
        else {
            const n = eP(e, t);
            xv.test(r) ? e.setProperty(ss(n), r.replace(xv, ""), "important") : e[n] = r
        }
    }
    const Uv = ["Webkit", "Moz", "ms"],
        df = {};

    function eP(e, t) {
        const r = df[t];
        if (r) return r;
        let n = On(t);
        if (n !== "filter" && n in e) return df[t] = n;
        n = ul(n);
        for (let s = 0; s < Uv.length; s++) {
            const o = Uv[s] + n;
            if (o in e) return df[t] = o
        }
        return t
    }
    const Fv = "http://www.w3.org/1999/xlink";

    function tP(e, t, r, n, s) {
        if (n && t.startsWith("xlink:")) r == null ? e.removeAttributeNS(Fv, t.slice(6, t.length)) : e.setAttributeNS(Fv, t, r);
        else {
            const o = rL(t);
            r == null || o && !Gy(r) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : r)
        }
    }

    function rP(e, t, r, n, s, o, c) {
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
            f === "boolean" ? r = Gy(r) : r == null && f === "string" ? (r = "", u = !0) : f === "number" && (r = 0, u = !0)
        }
        try {
            e[t] = r
        } catch {}
        u && e.removeAttribute(t)
    }
    const [Fb, nP] = (() => {
        let e = Date.now,
            t = !1;
        if (typeof window < "u") {
            Date.now() > document.createEvent("Event").timeStamp && (e = performance.now.bind(performance));
            const r = navigator.userAgent.match(/firefox\/(\d+)/i);
            t = !!(r && Number(r[1]) <= 53)
        }
        return [e, t]
    })();
    let pd = 0;
    const iP = Promise.resolve(),
        sP = () => {
            pd = 0
        },
        aP = () => pd || (iP.then(sP), pd = Fb());

    function Yi(e, t, r, n) {
        e.addEventListener(t, r, n)
    }

    function oP(e, t, r, n) {
        e.removeEventListener(t, r, n)
    }

    function cP(e, t, r, n, s = null) {
        const o = e._vei || (e._vei = {}),
            c = o[t];
        if (n && c) c.value = n;
        else {
            const [u, f] = lP(t);
            if (n) {
                const h = o[t] = uP(n, s);
                Yi(e, u, h, f)
            } else c && (oP(e, u, c, f), o[t] = void 0)
        }
    }
    const Bv = /(?:Once|Passive|Capture)$/;

    function lP(e) {
        let t;
        if (Bv.test(e)) {
            t = {};
            let n;
            for (; n = e.match(Bv);) e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0
        }
        return [e[2] === ":" ? e.slice(3) : ss(e.slice(2)), t]
    }

    function uP(e, t) {
        const r = n => {
            const s = n.timeStamp || Fb();
            (nP || s >= r.attached - 1) && Xr(fP(n, r.value), t, 5, [n])
        };
        return r.value = e, r.attached = aP(), r
    }

    function fP(e, t) {
        if ($e(t)) {
            const r = e.stopImmediatePropagation;
            return e.stopImmediatePropagation = () => {
                r.call(e), e._stopped = !0
            }, t.map(n => s => !s._stopped && n && n(s))
        } else return t
    }
    const Gv = /^on[a-z]/,
        dP = (e, t, r, n, s = !1, o, c, u, f) => {
            t === "class" ? Z$(e, n, s) : t === "style" ? Q$(e, r, n) : ol(t) ? sh(t) || cP(e, t, r, n, c) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : hP(e, t, n, s)) ? rP(e, t, n, o, c, u, f) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), tP(e, t, n, s))
        };

    function hP(e, t, r, n) {
        return n ? !!(t === "innerHTML" || t === "textContent" || t in e && Gv.test(t) && je(r)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || Gv.test(t) && Vt(r) ? !1 : t in e
    }
    const Qn = "transition",
        Ca = "animation",
        Ch = (e, {
            slots: t
        }) => Rh(yb, Gb(e), t);
    Ch.displayName = "Transition";
    const Bb = {
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
        pP = Ch.props = Jt({}, yb.props, Bb),
        xi = (e, t = []) => {
            $e(e) ? e.forEach(r => r(...t)) : e && e(...t)
        },
        Wv = e => e ? $e(e) ? e.some(t => t.length > 1) : e.length > 1 : !1;

    function Gb(e) {
        const t = {};
        for (const fe in e) fe in Bb || (t[fe] = e[fe]);
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
            appearToClass: g = u,
            leaveFromClass: _ = `${r}-leave-from`,
            leaveActiveClass: b = `${r}-leave-active`,
            leaveToClass: C = `${r}-leave-to`
        } = e, P = gP(s), x = P && P[0], U = P && P[1], {
            onBeforeEnter: I,
            onEnter: H,
            onEnterCancelled: Y,
            onLeave: W,
            onLeaveCancelled: G,
            onBeforeAppear: z = I,
            onAppear: ae = H,
            onAppearCancelled: ce = Y
        } = t, ue = (fe, Ae, F) => {
            ri(fe, Ae ? g : u), ri(fe, Ae ? h : c), F && F()
        }, Re = (fe, Ae) => {
            fe._isLeaving = !1, ri(fe, _), ri(fe, C), ri(fe, b), Ae && Ae()
        }, Ie = fe => (Ae, F) => {
            const re = fe ? ae : H,
                de = () => ue(Ae, fe, F);
            xi(re, [Ae, de]), jv(() => {
                ri(Ae, fe ? f : o), Mn(Ae, fe ? g : u), Wv(re) || Hv(Ae, n, x, de)
            })
        };
        return Jt(t, {
            onBeforeEnter(fe) {
                xi(I, [fe]), Mn(fe, o), Mn(fe, c)
            },
            onBeforeAppear(fe) {
                xi(z, [fe]), Mn(fe, f), Mn(fe, h)
            },
            onEnter: Ie(!1),
            onAppear: Ie(!0),
            onLeave(fe, Ae) {
                fe._isLeaving = !0;
                const F = () => Re(fe, Ae);
                Mn(fe, _), jb(), Mn(fe, b), jv(() => {
                    !fe._isLeaving || (ri(fe, _), Mn(fe, C), Wv(W) || Hv(fe, n, U, F))
                }), xi(W, [fe, F])
            },
            onEnterCancelled(fe) {
                ue(fe, !1), xi(Y, [fe])
            },
            onAppearCancelled(fe) {
                ue(fe, !0), xi(ce, [fe])
            },
            onLeaveCancelled(fe) {
                Re(fe), xi(G, [fe])
            }
        })
    }

    function gP(e) {
        if (e == null) return null;
        if (gt(e)) return [hf(e.enter), hf(e.leave)]; {
            const t = hf(e);
            return [t, t]
        }
    }

    function hf(e) {
        return Wc(e)
    }

    function Mn(e, t) {
        t.split(/\s+/).forEach(r => r && e.classList.add(r)), (e._vtc || (e._vtc = new Set)).add(t)
    }

    function ri(e, t) {
        t.split(/\s+/).forEach(n => n && e.classList.remove(n));
        const {
            _vtc: r
        } = e;
        r && (r.delete(t), r.size || (e._vtc = void 0))
    }

    function jv(e) {
        requestAnimationFrame(() => {
            requestAnimationFrame(e)
        })
    }
    let mP = 0;

    function Hv(e, t, r, n) {
        const s = e._endId = ++mP,
            o = () => {
                s === e._endId && n()
            };
        if (r) return setTimeout(o, r);
        const {
            type: c,
            timeout: u,
            propCount: f
        } = Wb(e, t);
        if (!c) return n();
        const h = c + "end";
        let g = 0;
        const _ = () => {
                e.removeEventListener(h, b), o()
            },
            b = C => {
                C.target === e && ++g >= f && _()
            };
        setTimeout(() => {
            g < f && _()
        }, u + 1), e.addEventListener(h, b)
    }

    function Wb(e, t) {
        const r = window.getComputedStyle(e),
            n = P => (r[P] || "").split(", "),
            s = n(Qn + "Delay"),
            o = n(Qn + "Duration"),
            c = Kv(s, o),
            u = n(Ca + "Delay"),
            f = n(Ca + "Duration"),
            h = Kv(u, f);
        let g = null,
            _ = 0,
            b = 0;
        t === Qn ? c > 0 && (g = Qn, _ = c, b = o.length) : t === Ca ? h > 0 && (g = Ca, _ = h, b = f.length) : (_ = Math.max(c, h), g = _ > 0 ? c > h ? Qn : Ca : null, b = g ? g === Qn ? o.length : f.length : 0);
        const C = g === Qn && /\b(transform|all)(,|$)/.test(r[Qn + "Property"]);
        return {
            type: g,
            timeout: _,
            propCount: b,
            hasTransform: C
        }
    }

    function Kv(e, t) {
        for (; e.length < t.length;) e = e.concat(e);
        return Math.max(...t.map((r, n) => Vv(r) + Vv(e[n])))
    }

    function Vv(e) {
        return Number(e.slice(0, -1).replace(",", ".")) * 1e3
    }

    function jb() {
        return document.body.offsetHeight
    }
    const Hb = new WeakMap,
        Kb = new WeakMap,
        vP = {
            name: "TransitionGroup",
            props: Jt({}, pP, {
                tag: String,
                moveClass: String
            }),
            setup(e, {
                slots: t
            }) {
                const r = pi(),
                    n = _b();
                let s, o;
                return Ob(() => {
                    if (!s.length) return;
                    const c = e.moveClass || `${e.name||"v"}-move`;
                    if (!TP(s[0].el, r.vnode.el, c)) return;
                    s.forEach(_P), s.forEach(yP);
                    const u = s.filter(bP);
                    jb(), u.forEach(f => {
                        const h = f.el,
                            g = h.style;
                        Mn(h, c), g.transform = g.webkitTransform = g.transitionDuration = "";
                        const _ = h._moveCb = b => {
                            b && b.target !== h || (!b || /transform$/.test(b.propertyName)) && (h.removeEventListener("transitionend", _), h._moveCb = null, ri(h, c))
                        };
                        h.addEventListener("transitionend", _)
                    })
                }), () => {
                    const c = nt(e),
                        u = Gb(c);
                    let f = c.tag || At;
                    s = o, o = t.default ? Eh(t.default()) : [];
                    for (let h = 0; h < o.length; h++) {
                        const g = o[h];
                        g.key != null && Ja(g, Xa(g, u, n, r))
                    }
                    if (s)
                        for (let h = 0; h < s.length; h++) {
                            const g = s[h];
                            Ja(g, Xa(g, u, n, r)), Hb.set(g, g.el.getBoundingClientRect())
                        }
                    return st(f, null, o)
                }
            }
        },
        EP = vP;

    function _P(e) {
        const t = e.el;
        t._moveCb && t._moveCb(), t._enterCb && t._enterCb()
    }

    function yP(e) {
        Kb.set(e, e.el.getBoundingClientRect())
    }

    function bP(e) {
        const t = Hb.get(e),
            r = Kb.get(e),
            n = t.left - r.left,
            s = t.top - r.top;
        if (n || s) {
            const o = e.el.style;
            return o.transform = o.webkitTransform = `translate(${n}px,${s}px)`, o.transitionDuration = "0s", e
        }
    }

    function TP(e, t, r) {
        const n = e.cloneNode();
        e._vtc && e._vtc.forEach(c => {
            c.split(/\s+/).forEach(u => u && n.classList.remove(u))
        }), r.split(/\s+/).forEach(c => c && n.classList.add(c)), n.style.display = "none";
        const s = t.nodeType === 1 ? t : t.parentNode;
        s.appendChild(n);
        const {
            hasTransform: o
        } = Wb(n);
        return s.removeChild(n), o
    }
    const Yc = e => {
        const t = e.props["onUpdate:modelValue"] || !1;
        return $e(t) ? r => Pc(t, r) : t
    };

    function SP(e) {
        e.target.composing = !0
    }

    function Yv(e) {
        const t = e.target;
        t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")))
    }
    const qv = {
            created(e, {
                modifiers: {
                    lazy: t,
                    trim: r,
                    number: n
                }
            }, s) {
                e._assign = Yc(s);
                const o = n || s.props && s.props.type === "number";
                Yi(e, t ? "change" : "input", c => {
                    if (c.target.composing) return;
                    let u = e.value;
                    r && (u = u.trim()), o && (u = Wc(u)), e._assign(u)
                }), r && Yi(e, "change", () => {
                    e.value = e.value.trim()
                }), t || (Yi(e, "compositionstart", SP), Yi(e, "compositionend", Yv), Yi(e, "change", Yv))
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
                if (e._assign = Yc(o), e.composing || document.activeElement === e && e.type !== "range" && (r || n && e.value.trim() === t || (s || e.type === "number") && Wc(e.value) === t)) return;
                const c = t == null ? "" : t;
                e.value !== c && (e.value = c)
            }
        },
        OP = {
            deep: !0,
            created(e, t, r) {
                e._assign = Yc(r), Yi(e, "change", () => {
                    const n = e._modelValue,
                        s = AP(e),
                        o = e.checked,
                        c = e._assign;
                    if ($e(n)) {
                        const u = Wy(n, s),
                            f = u !== -1;
                        if (o && !f) c(n.concat(s));
                        else if (!o && f) {
                            const h = [...n];
                            h.splice(u, 1), c(h)
                        }
                    } else if (cl(n)) {
                        const u = new Set(n);
                        o ? u.add(s) : u.delete(s), c(u)
                    } else c(Vb(e, o))
                })
            },
            mounted: zv,
            beforeUpdate(e, t, r) {
                e._assign = Yc(r), zv(e, t, r)
            }
        };

    function zv(e, {
        value: t,
        oldValue: r
    }, n) {
        e._modelValue = t, $e(t) ? e.checked = Wy(t, n.props.value) > -1 : cl(t) ? e.checked = t.has(n.props.value) : t !== r && (e.checked = al(t, Vb(e, !0)))
    }

    function AP(e) {
        return "_value" in e ? e._value : e.value
    }

    function Vb(e, t) {
        const r = t ? "_trueValue" : "_falseValue";
        return r in e ? e[r] : t
    }
    const IP = ["ctrl", "shift", "alt", "meta"],
        RP = {
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
            exact: (e, t) => IP.some(r => e[`${r}Key`] && !t.includes(r))
        },
        Jr = (e, t) => (r, ...n) => {
            for (let s = 0; s < t.length; s++) {
                const o = RP[t[s]];
                if (o && o(r, t)) return
            }
            return e(r, ...n)
        },
        CP = {
            esc: "escape",
            space: " ",
            up: "arrow-up",
            left: "arrow-left",
            right: "arrow-right",
            down: "arrow-down",
            delete: "backspace"
        },
        wP = (e, t) => r => {
            if (!("key" in r)) return;
            const n = ss(r.key);
            if (t.some(s => s === n || CP[s] === n)) return e(r)
        },
        NP = Jt({
            patchProp: dP
        }, J$);
    let Xv;

    function LP() {
        return Xv || (Xv = P$(NP))
    }
    const $P = (...e) => {
        const t = LP().createApp(...e),
            {
                mount: r
            } = t;
        return t.mount = n => {
            const s = PP(n);
            if (!s) return;
            const o = t._component;
            !je(o) && !o.render && !o.template && (o.template = s.innerHTML), s.innerHTML = "";
            const c = r(s, !1, s instanceof SVGElement);
            return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), c
        }, t
    };

    function PP(e) {
        return Vt(e) ? document.querySelector(e) : e
    }
    /*!
     * shared v9.2.2
     * (c) 2022 kazuya kawaguchi
     * Released under the MIT License.
     */
    const gd = typeof window < "u",
        DP = typeof Symbol == "function" && typeof Symbol.toStringTag == "symbol",
        vi = e => DP ? Symbol(e) : e,
        MP = (e, t, r) => kP({
            l: e,
            k: t,
            s: r
        }),
        kP = e => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"),
        Gt = e => typeof e == "number" && isFinite(e),
        xP = e => Nh(e) === "[object Date]",
        gi = e => Nh(e) === "[object RegExp]",
        yl = e => xe(e) && Object.keys(e).length === 0;

    function UP(e, t) {
        typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack))
    }
    const nr = Object.assign;

    function Jv(e) {
        return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
    }
    const FP = Object.prototype.hasOwnProperty;

    function wh(e, t) {
        return FP.call(e, t)
    }
    const _t = Array.isArray,
        Dt = e => typeof e == "function",
        ve = e => typeof e == "string",
        Je = e => typeof e == "boolean",
        yt = e => e !== null && typeof e == "object",
        Yb = Object.prototype.toString,
        Nh = e => Yb.call(e),
        xe = e => Nh(e) === "[object Object]",
        BP = e => e == null ? "" : _t(e) || xe(e) && e.toString === Yb ? JSON.stringify(e, null, 2) : String(e);
    /*!
     * message-compiler v9.2.2
     * (c) 2022 kazuya kawaguchi
     * Released under the MIT License.
     */
    const rt = {
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

    function bl(e, t, r = {}) {
        const {
            domain: n,
            messages: s,
            args: o
        } = r, c = e, u = new SyntaxError(String(c));
        return u.code = e, t && (u.location = t), u.domain = n, u
    }

    function GP(e) {
        throw e
    }

    function WP(e, t, r) {
        return {
            line: e,
            column: t,
            offset: r
        }
    }

    function md(e, t, r) {
        const n = {
            start: e,
            end: t
        };
        return r != null && (n.source = r), n
    }
    const Dn = " ",
        jP = "\r",
        mr = `
`,
        HP = String.fromCharCode(8232),
        KP = String.fromCharCode(8233);

    function VP(e) {
        const t = e;
        let r = 0,
            n = 1,
            s = 1,
            o = 0;
        const c = ae => t[ae] === jP && t[ae + 1] === mr,
            u = ae => t[ae] === mr,
            f = ae => t[ae] === KP,
            h = ae => t[ae] === HP,
            g = ae => c(ae) || u(ae) || f(ae) || h(ae),
            _ = () => r,
            b = () => n,
            C = () => s,
            P = () => o,
            x = ae => c(ae) || f(ae) || h(ae) ? mr : t[ae],
            U = () => x(r),
            I = () => x(r + o);

        function H() {
            return o = 0, g(r) && (n++, s = 0), c(r) && r++, r++, s++, t[r]
        }

        function Y() {
            return c(r + o) && o++, o++, t[r + o]
        }

        function W() {
            r = 0, n = 1, s = 1, o = 0
        }

        function G(ae = 0) {
            o = ae
        }

        function z() {
            const ae = r + o;
            for (; ae !== r;) H();
            o = 0
        }
        return {
            index: _,
            line: b,
            column: C,
            peekOffset: P,
            charAt: x,
            currentChar: U,
            currentPeek: I,
            next: H,
            peek: Y,
            reset: W,
            resetPeek: G,
            skipToPeek: z
        }
    }
    const ei = void 0,
        Zv = "'",
        YP = "tokenizer";

    function qP(e, t = {}) {
        const r = t.location !== !1,
            n = VP(e),
            s = () => n.index(),
            o = () => WP(n.line(), n.column(), n.index()),
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

        function _(m, p, O, ...k) {
            const B = h();
            if (p.column += O, p.offset += O, g) {
                const V = md(B.startLoc, p),
                    le = bl(m, V, {
                        domain: YP,
                        args: k
                    });
                g(le)
            }
        }

        function b(m, p, O) {
            m.endLoc = o(), m.currentType = p;
            const k = {
                type: p
            };
            return r && (k.loc = md(m.startLoc, m.endLoc)), O != null && (k.value = O), k
        }
        const C = m => b(m, 14);

        function P(m, p) {
            return m.currentChar() === p ? (m.next(), p) : (_(rt.EXPECTED_TOKEN, o(), 0, p), "")
        }

        function x(m) {
            let p = "";
            for (; m.currentPeek() === Dn || m.currentPeek() === mr;) p += m.currentPeek(), m.peek();
            return p
        }

        function U(m) {
            const p = x(m);
            return m.skipToPeek(), p
        }

        function I(m) {
            if (m === ei) return !1;
            const p = m.charCodeAt(0);
            return p >= 97 && p <= 122 || p >= 65 && p <= 90 || p === 95
        }

        function H(m) {
            if (m === ei) return !1;
            const p = m.charCodeAt(0);
            return p >= 48 && p <= 57
        }

        function Y(m, p) {
            const {
                currentType: O
            } = p;
            if (O !== 2) return !1;
            x(m);
            const k = I(m.currentPeek());
            return m.resetPeek(), k
        }

        function W(m, p) {
            const {
                currentType: O
            } = p;
            if (O !== 2) return !1;
            x(m);
            const k = m.currentPeek() === "-" ? m.peek() : m.currentPeek(),
                B = H(k);
            return m.resetPeek(), B
        }

        function G(m, p) {
            const {
                currentType: O
            } = p;
            if (O !== 2) return !1;
            x(m);
            const k = m.currentPeek() === Zv;
            return m.resetPeek(), k
        }

        function z(m, p) {
            const {
                currentType: O
            } = p;
            if (O !== 8) return !1;
            x(m);
            const k = m.currentPeek() === ".";
            return m.resetPeek(), k
        }

        function ae(m, p) {
            const {
                currentType: O
            } = p;
            if (O !== 9) return !1;
            x(m);
            const k = I(m.currentPeek());
            return m.resetPeek(), k
        }

        function ce(m, p) {
            const {
                currentType: O
            } = p;
            if (!(O === 8 || O === 12)) return !1;
            x(m);
            const k = m.currentPeek() === ":";
            return m.resetPeek(), k
        }

        function ue(m, p) {
            const {
                currentType: O
            } = p;
            if (O !== 10) return !1;
            const k = () => {
                    const V = m.currentPeek();
                    return V === "{" ? I(m.peek()) : V === "@" || V === "%" || V === "|" || V === ":" || V === "." || V === Dn || !V ? !1 : V === mr ? (m.peek(), k()) : I(V)
                },
                B = k();
            return m.resetPeek(), B
        }

        function Re(m) {
            x(m);
            const p = m.currentPeek() === "|";
            return m.resetPeek(), p
        }

        function Ie(m) {
            const p = x(m),
                O = m.currentPeek() === "%" && m.peek() === "{";
            return m.resetPeek(), {
                isModulo: O,
                hasSpace: p.length > 0
            }
        }

        function fe(m, p = !0) {
            const O = (B = !1, V = "", le = !1) => {
                    const ie = m.currentPeek();
                    return ie === "{" ? V === "%" ? !1 : B : ie === "@" || !ie ? V === "%" ? !0 : B : ie === "%" ? (m.peek(), O(B, "%", !0)) : ie === "|" ? V === "%" || le ? !0 : !(V === Dn || V === mr) : ie === Dn ? (m.peek(), O(!0, Dn, le)) : ie === mr ? (m.peek(), O(!0, mr, le)) : !0
                },
                k = O();
            return p && m.resetPeek(), k
        }

        function Ae(m, p) {
            const O = m.currentChar();
            return O === ei ? ei : p(O) ? (m.next(), O) : null
        }

        function F(m) {
            return Ae(m, O => {
                const k = O.charCodeAt(0);
                return k >= 97 && k <= 122 || k >= 65 && k <= 90 || k >= 48 && k <= 57 || k === 95 || k === 36
            })
        }

        function re(m) {
            return Ae(m, O => {
                const k = O.charCodeAt(0);
                return k >= 48 && k <= 57
            })
        }

        function de(m) {
            return Ae(m, O => {
                const k = O.charCodeAt(0);
                return k >= 48 && k <= 57 || k >= 65 && k <= 70 || k >= 97 && k <= 102
            })
        }

        function _e(m) {
            let p = "",
                O = "";
            for (; p = re(m);) O += p;
            return O
        }

        function me(m) {
            U(m);
            const p = m.currentChar();
            return p !== "%" && _(rt.EXPECTED_TOKEN, o(), 0, p), m.next(), "%"
        }

        function Se(m) {
            let p = "";
            for (;;) {
                const O = m.currentChar();
                if (O === "{" || O === "}" || O === "@" || O === "|" || !O) break;
                if (O === "%")
                    if (fe(m)) p += O, m.next();
                    else break;
                else if (O === Dn || O === mr)
                    if (fe(m)) p += O, m.next();
                    else {
                        if (Re(m)) break;
                        p += O, m.next()
                    }
                else p += O, m.next()
            }
            return p
        }

        function Me(m) {
            U(m);
            let p = "",
                O = "";
            for (; p = F(m);) O += p;
            return m.currentChar() === ei && _(rt.UNTERMINATED_CLOSING_BRACE, o(), 0), O
        }

        function Fe(m) {
            U(m);
            let p = "";
            return m.currentChar() === "-" ? (m.next(), p += `-${_e(m)}`) : p += _e(m), m.currentChar() === ei && _(rt.UNTERMINATED_CLOSING_BRACE, o(), 0), p
        }

        function et(m) {
            U(m), P(m, "'");
            let p = "",
                O = "";
            const k = V => V !== Zv && V !== mr;
            for (; p = Ae(m, k);) p === "\\" ? O += Nt(m) : O += p;
            const B = m.currentChar();
            return B === mr || B === ei ? (_(rt.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, o(), 0), B === mr && (m.next(), P(m, "'")), O) : (P(m, "'"), O)
        }

        function Nt(m) {
            const p = m.currentChar();
            switch (p) {
                case "\\":
                case "'":
                    return m.next(), `\\${p}`;
                case "u":
                    return Ir(m, p, 4);
                case "U":
                    return Ir(m, p, 6);
                default:
                    return _(rt.UNKNOWN_ESCAPE_SEQUENCE, o(), 0, p), ""
            }
        }

        function Ir(m, p, O) {
            P(m, p);
            let k = "";
            for (let B = 0; B < O; B++) {
                const V = de(m);
                if (!V) {
                    _(rt.INVALID_UNICODE_ESCAPE_SEQUENCE, o(), 0, `\\${p}${k}${m.currentChar()}`);
                    break
                }
                k += V
            }
            return `\\${p}${k}`
        }

        function ir(m) {
            U(m);
            let p = "",
                O = "";
            const k = B => B !== "{" && B !== "}" && B !== Dn && B !== mr;
            for (; p = Ae(m, k);) O += p;
            return O
        }

        function Er(m) {
            let p = "",
                O = "";
            for (; p = F(m);) O += p;
            return O
        }

        function at(m) {
            const p = (O = !1, k) => {
                const B = m.currentChar();
                return B === "{" || B === "%" || B === "@" || B === "|" || !B || B === Dn ? k : B === mr ? (k += B, m.next(), p(O, k)) : (k += B, m.next(), p(!0, k))
            };
            return p(!1, "")
        }

        function St(m) {
            U(m);
            const p = P(m, "|");
            return U(m), p
        }

        function ot(m, p) {
            let O = null;
            switch (m.currentChar()) {
                case "{":
                    return p.braceNest >= 1 && _(rt.NOT_ALLOW_NEST_PLACEHOLDER, o(), 0), m.next(), O = b(p, 2, "{"), U(m), p.braceNest++, O;
                case "}":
                    return p.braceNest > 0 && p.currentType === 2 && _(rt.EMPTY_PLACEHOLDER, o(), 0), m.next(), O = b(p, 3, "}"), p.braceNest--, p.braceNest > 0 && U(m), p.inLinked && p.braceNest === 0 && (p.inLinked = !1), O;
                case "@":
                    return p.braceNest > 0 && _(rt.UNTERMINATED_CLOSING_BRACE, o(), 0), O = kt(m, p) || C(p), p.braceNest = 0, O;
                default:
                    let B = !0,
                        V = !0,
                        le = !0;
                    if (Re(m)) return p.braceNest > 0 && _(rt.UNTERMINATED_CLOSING_BRACE, o(), 0), O = b(p, 1, St(m)), p.braceNest = 0, p.inLinked = !1, O;
                    if (p.braceNest > 0 && (p.currentType === 5 || p.currentType === 6 || p.currentType === 7)) return _(rt.UNTERMINATED_CLOSING_BRACE, o(), 0), p.braceNest = 0, Yt(m, p);
                    if (B = Y(m, p)) return O = b(p, 5, Me(m)), U(m), O;
                    if (V = W(m, p)) return O = b(p, 6, Fe(m)), U(m), O;
                    if (le = G(m, p)) return O = b(p, 7, et(m)), U(m), O;
                    if (!B && !V && !le) return O = b(p, 13, ir(m)), _(rt.INVALID_TOKEN_IN_PLACEHOLDER, o(), 0, O.value), U(m), O;
                    break
            }
            return O
        }

        function kt(m, p) {
            const {
                currentType: O
            } = p;
            let k = null;
            const B = m.currentChar();
            switch ((O === 8 || O === 9 || O === 12 || O === 10) && (B === mr || B === Dn) && _(rt.INVALID_LINKED_FORMAT, o(), 0), B) {
                case "@":
                    return m.next(), k = b(p, 8, "@"), p.inLinked = !0, k;
                case ".":
                    return U(m), m.next(), b(p, 9, ".");
                case ":":
                    return U(m), m.next(), b(p, 10, ":");
                default:
                    return Re(m) ? (k = b(p, 1, St(m)), p.braceNest = 0, p.inLinked = !1, k) : z(m, p) || ce(m, p) ? (U(m), kt(m, p)) : ae(m, p) ? (U(m), b(p, 12, Er(m))) : ue(m, p) ? (U(m), B === "{" ? ot(m, p) || k : b(p, 11, at(m))) : (O === 8 && _(rt.INVALID_LINKED_FORMAT, o(), 0), p.braceNest = 0, p.inLinked = !1, Yt(m, p))
            }
        }

        function Yt(m, p) {
            let O = {
                type: 14
            };
            if (p.braceNest > 0) return ot(m, p) || C(p);
            if (p.inLinked) return kt(m, p) || C(p);
            switch (m.currentChar()) {
                case "{":
                    return ot(m, p) || C(p);
                case "}":
                    return _(rt.UNBALANCED_CLOSING_BRACE, o(), 0), m.next(), b(p, 3, "}");
                case "@":
                    return kt(m, p) || C(p);
                default:
                    if (Re(m)) return O = b(p, 1, St(m)), p.braceNest = 0, p.inLinked = !1, O;
                    const {
                        isModulo: B, hasSpace: V
                    } = Ie(m);
                    if (B) return V ? b(p, 0, Se(m)) : b(p, 4, me(m));
                    if (fe(m)) return b(p, 0, Se(m));
                    break
            }
            return O
        }

        function xt() {
            const {
                currentType: m,
                offset: p,
                startLoc: O,
                endLoc: k
            } = f;
            return f.lastType = m, f.lastOffset = p, f.lastStartLoc = O, f.lastEndLoc = k, f.offset = s(), f.startLoc = o(), n.currentChar() === ei ? b(f, 14) : Yt(n, f)
        }
        return {
            nextToken: xt,
            currentOffset: s,
            currentPosition: o,
            context: h
        }
    }
    const zP = "parser",
        XP = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;

    function JP(e, t, r) {
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

    function ZP(e = {}) {
        const t = e.location !== !1,
            {
                onError: r
            } = e;

        function n(I, H, Y, W, ...G) {
            const z = I.currentPosition();
            if (z.offset += W, z.column += W, r) {
                const ae = md(Y, z),
                    ce = bl(H, ae, {
                        domain: zP,
                        args: G
                    });
                r(ce)
            }
        }

        function s(I, H, Y) {
            const W = {
                type: I,
                start: H,
                end: H
            };
            return t && (W.loc = {
                start: Y,
                end: Y
            }), W
        }

        function o(I, H, Y, W) {
            I.end = H, W && (I.type = W), t && I.loc && (I.loc.end = Y)
        }

        function c(I, H) {
            const Y = I.context(),
                W = s(3, Y.offset, Y.startLoc);
            return W.value = H, o(W, I.currentOffset(), I.currentPosition()), W
        }

        function u(I, H) {
            const Y = I.context(),
                {
                    lastOffset: W,
                    lastStartLoc: G
                } = Y,
                z = s(5, W, G);
            return z.index = parseInt(H, 10), I.nextToken(), o(z, I.currentOffset(), I.currentPosition()), z
        }

        function f(I, H) {
            const Y = I.context(),
                {
                    lastOffset: W,
                    lastStartLoc: G
                } = Y,
                z = s(4, W, G);
            return z.key = H, I.nextToken(), o(z, I.currentOffset(), I.currentPosition()), z
        }

        function h(I, H) {
            const Y = I.context(),
                {
                    lastOffset: W,
                    lastStartLoc: G
                } = Y,
                z = s(9, W, G);
            return z.value = H.replace(XP, JP), I.nextToken(), o(z, I.currentOffset(), I.currentPosition()), z
        }

        function g(I) {
            const H = I.nextToken(),
                Y = I.context(),
                {
                    lastOffset: W,
                    lastStartLoc: G
                } = Y,
                z = s(8, W, G);
            return H.type !== 12 ? (n(I, rt.UNEXPECTED_EMPTY_LINKED_MODIFIER, Y.lastStartLoc, 0), z.value = "", o(z, W, G), {
                nextConsumeToken: H,
                node: z
            }) : (H.value == null && n(I, rt.UNEXPECTED_LEXICAL_ANALYSIS, Y.lastStartLoc, 0, vn(H)), z.value = H.value || "", o(z, I.currentOffset(), I.currentPosition()), {
                node: z
            })
        }

        function _(I, H) {
            const Y = I.context(),
                W = s(7, Y.offset, Y.startLoc);
            return W.value = H, o(W, I.currentOffset(), I.currentPosition()), W
        }

        function b(I) {
            const H = I.context(),
                Y = s(6, H.offset, H.startLoc);
            let W = I.nextToken();
            if (W.type === 9) {
                const G = g(I);
                Y.modifier = G.node, W = G.nextConsumeToken || I.nextToken()
            }
            switch (W.type !== 10 && n(I, rt.UNEXPECTED_LEXICAL_ANALYSIS, H.lastStartLoc, 0, vn(W)), W = I.nextToken(), W.type === 2 && (W = I.nextToken()), W.type) {
                case 11:
                    W.value == null && n(I, rt.UNEXPECTED_LEXICAL_ANALYSIS, H.lastStartLoc, 0, vn(W)), Y.key = _(I, W.value || "");
                    break;
                case 5:
                    W.value == null && n(I, rt.UNEXPECTED_LEXICAL_ANALYSIS, H.lastStartLoc, 0, vn(W)), Y.key = f(I, W.value || "");
                    break;
                case 6:
                    W.value == null && n(I, rt.UNEXPECTED_LEXICAL_ANALYSIS, H.lastStartLoc, 0, vn(W)), Y.key = u(I, W.value || "");
                    break;
                case 7:
                    W.value == null && n(I, rt.UNEXPECTED_LEXICAL_ANALYSIS, H.lastStartLoc, 0, vn(W)), Y.key = h(I, W.value || "");
                    break;
                default:
                    n(I, rt.UNEXPECTED_EMPTY_LINKED_KEY, H.lastStartLoc, 0);
                    const G = I.context(),
                        z = s(7, G.offset, G.startLoc);
                    return z.value = "", o(z, G.offset, G.startLoc), Y.key = z, o(Y, G.offset, G.startLoc), {
                        nextConsumeToken: W,
                        node: Y
                    }
            }
            return o(Y, I.currentOffset(), I.currentPosition()), {
                node: Y
            }
        }

        function C(I) {
            const H = I.context(),
                Y = H.currentType === 1 ? I.currentOffset() : H.offset,
                W = H.currentType === 1 ? H.endLoc : H.startLoc,
                G = s(2, Y, W);
            G.items = [];
            let z = null;
            do {
                const ue = z || I.nextToken();
                switch (z = null, ue.type) {
                    case 0:
                        ue.value == null && n(I, rt.UNEXPECTED_LEXICAL_ANALYSIS, H.lastStartLoc, 0, vn(ue)), G.items.push(c(I, ue.value || ""));
                        break;
                    case 6:
                        ue.value == null && n(I, rt.UNEXPECTED_LEXICAL_ANALYSIS, H.lastStartLoc, 0, vn(ue)), G.items.push(u(I, ue.value || ""));
                        break;
                    case 5:
                        ue.value == null && n(I, rt.UNEXPECTED_LEXICAL_ANALYSIS, H.lastStartLoc, 0, vn(ue)), G.items.push(f(I, ue.value || ""));
                        break;
                    case 7:
                        ue.value == null && n(I, rt.UNEXPECTED_LEXICAL_ANALYSIS, H.lastStartLoc, 0, vn(ue)), G.items.push(h(I, ue.value || ""));
                        break;
                    case 8:
                        const Re = b(I);
                        G.items.push(Re.node), z = Re.nextConsumeToken || null;
                        break
                }
            } while (H.currentType !== 14 && H.currentType !== 1);
            const ae = H.currentType === 1 ? H.lastOffset : I.currentOffset(),
                ce = H.currentType === 1 ? H.lastEndLoc : I.currentPosition();
            return o(G, ae, ce), G
        }

        function P(I, H, Y, W) {
            const G = I.context();
            let z = W.items.length === 0;
            const ae = s(1, H, Y);
            ae.cases = [], ae.cases.push(W);
            do {
                const ce = C(I);
                z || (z = ce.items.length === 0), ae.cases.push(ce)
            } while (G.currentType !== 14);
            return z && n(I, rt.MUST_HAVE_MESSAGES_IN_PLURAL, Y, 0), o(ae, I.currentOffset(), I.currentPosition()), ae
        }

        function x(I) {
            const H = I.context(),
                {
                    offset: Y,
                    startLoc: W
                } = H,
                G = C(I);
            return H.currentType === 14 ? G : P(I, Y, W, G)
        }

        function U(I) {
            const H = qP(I, nr({}, e)),
                Y = H.context(),
                W = s(0, Y.offset, Y.startLoc);
            return t && W.loc && (W.loc.source = I), W.body = x(H), Y.currentType !== 14 && n(H, rt.UNEXPECTED_LEXICAL_ANALYSIS, Y.lastStartLoc, 0, I[Y.offset] || ""), o(W, H.currentOffset(), H.currentPosition()), W
        }
        return {
            parse: U
        }
    }

    function vn(e) {
        if (e.type === 14) return "EOF";
        const t = (e.value || "").replace(/\r?\n/gu, "\\n");
        return t.length > 10 ? t.slice(0, 9) + "\u2026" : t
    }

    function QP(e, t = {}) {
        const r = {
            ast: e,
            helpers: new Set
        };
        return {
            context: () => r,
            helper: o => (r.helpers.add(o), o)
        }
    }

    function Qv(e, t) {
        for (let r = 0; r < e.length; r++) Lh(e[r], t)
    }

    function Lh(e, t) {
        switch (e.type) {
            case 1:
                Qv(e.cases, t), t.helper("plural");
                break;
            case 2:
                Qv(e.items, t);
                break;
            case 6:
                Lh(e.key, t), t.helper("linked"), t.helper("type");
                break;
            case 5:
                t.helper("interpolate"), t.helper("list");
                break;
            case 4:
                t.helper("interpolate"), t.helper("named");
                break
        }
    }

    function eD(e, t = {}) {
        const r = QP(e);
        r.helper("normalize"), e.body && Lh(e.body, r);
        const n = r.context();
        e.helpers = Array.from(n.helpers)
    }

    function tD(e, t) {
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

        function f(x, U) {
            c.code += x
        }

        function h(x, U = !0) {
            const I = U ? s : "";
            f(o ? I + "  ".repeat(x) : I)
        }

        function g(x = !0) {
            const U = ++c.indentLevel;
            x && h(U)
        }

        function _(x = !0) {
            const U = --c.indentLevel;
            x && h(U)
        }

        function b() {
            h(c.indentLevel)
        }
        return {
            context: u,
            push: f,
            indent: g,
            deindent: _,
            newline: b,
            helper: x => `_${x}`,
            needIndent: () => c.needIndent
        }
    }

    function rD(e, t) {
        const {
            helper: r
        } = e;
        e.push(`${r("linked")}(`), Ys(e, t.key), t.modifier ? (e.push(", "), Ys(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")")
    }

    function nD(e, t) {
        const {
            helper: r,
            needIndent: n
        } = e;
        e.push(`${r("normalize")}([`), e.indent(n());
        const s = t.items.length;
        for (let o = 0; o < s && (Ys(e, t.items[o]), o !== s - 1); o++) e.push(", ");
        e.deindent(n()), e.push("])")
    }

    function iD(e, t) {
        const {
            helper: r,
            needIndent: n
        } = e;
        if (t.cases.length > 1) {
            e.push(`${r("plural")}([`), e.indent(n());
            const s = t.cases.length;
            for (let o = 0; o < s && (Ys(e, t.cases[o]), o !== s - 1); o++) e.push(", ");
            e.deindent(n()), e.push("])")
        }
    }

    function sD(e, t) {
        t.body ? Ys(e, t.body) : e.push("null")
    }

    function Ys(e, t) {
        const {
            helper: r
        } = e;
        switch (t.type) {
            case 0:
                sD(e, t);
                break;
            case 1:
                iD(e, t);
                break;
            case 2:
                nD(e, t);
                break;
            case 6:
                rD(e, t);
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
    const aD = (e, t = {}) => {
        const r = ve(t.mode) ? t.mode : "normal",
            n = ve(t.filename) ? t.filename : "message.intl",
            s = !!t.sourceMap,
            o = t.breakLineCode != null ? t.breakLineCode : r === "arrow" ? ";" : `
`,
            c = t.needIndent ? t.needIndent : r !== "arrow",
            u = e.helpers || [],
            f = tD(e, {
                mode: r,
                filename: n,
                sourceMap: s,
                breakLineCode: o,
                needIndent: c
            });
        f.push(r === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), f.indent(c), u.length > 0 && (f.push(`const { ${u.map(_=>`${_}: _${_}`).join(", ")} } = ctx`), f.newline()), f.push("return "), Ys(f, e), f.deindent(c), f.push("}");
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

    function oD(e, t = {}) {
        const r = nr({}, t),
            s = ZP(r).parse(e);
        return eD(s, r), aD(s, r)
    }
    /*!
     * devtools-if v9.2.2
     * (c) 2022 kazuya kawaguchi
     * Released under the MIT License.
     */
    const cD = {
        I18nInit: "i18n:init",
        FunctionTranslate: "function:translate"
    };
    /*!
     * core-base v9.2.2
     * (c) 2022 kazuya kawaguchi
     * Released under the MIT License.
     */
    const Ei = [];
    Ei[0] = {
        w: [0],
        i: [3, 0],
        ["["]: [4],
        o: [7]
    };
    Ei[1] = {
        w: [1],
        ["."]: [2],
        ["["]: [4],
        o: [7]
    };
    Ei[2] = {
        w: [2],
        i: [3, 0],
        [0]: [3, 0]
    };
    Ei[3] = {
        i: [3, 0],
        [0]: [3, 0],
        w: [1, 1],
        ["."]: [2, 1],
        ["["]: [4, 1],
        o: [7, 1]
    };
    Ei[4] = {
        ["'"]: [5, 0],
        ['"']: [6, 0],
        ["["]: [4, 2],
        ["]"]: [1, 3],
        o: 8,
        l: [4, 0]
    };
    Ei[5] = {
        ["'"]: [4, 0],
        o: 8,
        l: [5, 0]
    };
    Ei[6] = {
        ['"']: [4, 0],
        o: 8,
        l: [6, 0]
    };
    const lD = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;

    function uD(e) {
        return lD.test(e)
    }

    function fD(e) {
        const t = e.charCodeAt(0),
            r = e.charCodeAt(e.length - 1);
        return t === r && (t === 34 || t === 39) ? e.slice(1, -1) : e
    }

    function dD(e) {
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

    function hD(e) {
        const t = e.trim();
        return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : uD(t) ? fD(t) : "*" + t
    }

    function pD(e) {
        const t = [];
        let r = -1,
            n = 0,
            s = 0,
            o, c, u, f, h, g, _;
        const b = [];
        b[0] = () => {
            c === void 0 ? c = u : c += u
        }, b[1] = () => {
            c !== void 0 && (t.push(c), c = void 0)
        }, b[2] = () => {
            b[0](), s++
        }, b[3] = () => {
            if (s > 0) s--, n = 4, b[0]();
            else {
                if (s = 0, c === void 0 || (c = hD(c), c === !1)) return !1;
                b[1]()
            }
        };

        function C() {
            const P = e[r + 1];
            if (n === 5 && P === "'" || n === 6 && P === '"') return r++, u = "\\" + P, b[0](), !0
        }
        for (; n !== null;)
            if (r++, o = e[r], !(o === "\\" && C())) {
                if (f = dD(o), _ = Ei[n], h = _[f] || _.l || 8, h === 8 || (n = h[0], h[1] !== void 0 && (g = b[h[1]], g && (u = o, g() === !1)))) return;
                if (n === 7) return t
            }
    }
    const eE = new Map;

    function gD(e, t) {
        return yt(e) ? e[t] : null
    }

    function mD(e, t) {
        if (!yt(e)) return null;
        let r = eE.get(t);
        if (r || (r = pD(t), r && eE.set(t, r)), !r) return null;
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
    const vD = e => e,
        ED = e => "",
        _D = "text",
        yD = e => e.length === 0 ? "" : e.join(""),
        bD = BP;

    function tE(e, t) {
        return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0
    }

    function TD(e) {
        const t = Gt(e.pluralIndex) ? e.pluralIndex : -1;
        return e.named && (Gt(e.named.count) || Gt(e.named.n)) ? Gt(e.named.count) ? e.named.count : Gt(e.named.n) ? e.named.n : t : t
    }

    function SD(e, t) {
        t.count || (t.count = e), t.n || (t.n = e)
    }

    function OD(e = {}) {
        const t = e.locale,
            r = TD(e),
            n = yt(e.pluralRules) && ve(t) && Dt(e.pluralRules[t]) ? e.pluralRules[t] : tE,
            s = yt(e.pluralRules) && ve(t) && Dt(e.pluralRules[t]) ? tE : void 0,
            o = I => I[n(r, I.length, s)],
            c = e.list || [],
            u = I => c[I],
            f = e.named || {};
        Gt(e.pluralIndex) && SD(r, f);
        const h = I => f[I];

        function g(I) {
            const H = Dt(e.messages) ? e.messages(I) : yt(e.messages) ? e.messages[I] : !1;
            return H || (e.parent ? e.parent.message(I) : ED)
        }
        const _ = I => e.modifiers ? e.modifiers[I] : vD,
            b = xe(e.processor) && Dt(e.processor.normalize) ? e.processor.normalize : yD,
            C = xe(e.processor) && Dt(e.processor.interpolate) ? e.processor.interpolate : bD,
            P = xe(e.processor) && ve(e.processor.type) ? e.processor.type : _D,
            U = {
                list: u,
                named: h,
                plural: o,
                linked: (I, ...H) => {
                    const [Y, W] = H;
                    let G = "text",
                        z = "";
                    H.length === 1 ? yt(Y) ? (z = Y.modifier || z, G = Y.type || G) : ve(Y) && (z = Y || z) : H.length === 2 && (ve(Y) && (z = Y || z), ve(W) && (G = W || G));
                    let ae = g(I)(U);
                    return G === "vnode" && _t(ae) && z && (ae = ae[0]), z ? _(z)(ae, G) : ae
                },
                message: g,
                type: P,
                interpolate: C,
                normalize: b
            };
        return U
    }
    let AD = null;
    cD.FunctionTranslate;

    function ID(e) {
        return t => AD
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

    function CD(e, t, r) {
        return [...new Set([r, ..._t(t) ? t : yt(t) ? Object.keys(t) : ve(t) ? [t] : [r]])]
    }

    function qb(e, t, r) {
        const n = ve(r) ? r : uo,
            s = e;
        s.__localeChainCache || (s.__localeChainCache = new Map);
        let o = s.__localeChainCache.get(n);
        if (!o) {
            o = [];
            let c = [r];
            for (; _t(c);) c = rE(o, c, t);
            const u = _t(t) || !xe(t) ? t : t.default ? t.default : null;
            c = ve(u) ? [u] : u, _t(c) && rE(o, c, !1), s.__localeChainCache.set(n, o)
        }
        return o
    }

    function rE(e, t, r) {
        let n = !0;
        for (let s = 0; s < t.length && Je(n); s++) {
            const o = t[s];
            ve(o) && (n = wD(e, t[s], r))
        }
        return n
    }

    function wD(e, t, r) {
        let n;
        const s = t.split("-");
        do {
            const o = s.join("-");
            n = ND(e, o, r), s.splice(-1, 1)
        } while (s.length && n === !0);
        return n
    }

    function ND(e, t, r) {
        let n = !1;
        if (!e.includes(t) && (n = !0, t)) {
            n = t[t.length - 1] !== "!";
            const s = t.replace(/!/g, "");
            e.push(s), (_t(r) || xe(r)) && r[s] && (n = r[s])
        }
        return n
    }
    const LD = "9.2.2",
        Tl = -1,
        uo = "en-US",
        nE = "",
        iE = e => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;

    function $D() {
        return {
            upper: (e, t) => t === "text" && ve(e) ? e.toUpperCase() : t === "vnode" && yt(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
            lower: (e, t) => t === "text" && ve(e) ? e.toLowerCase() : t === "vnode" && yt(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
            capitalize: (e, t) => t === "text" && ve(e) ? iE(e) : t === "vnode" && yt(e) && "__v_isVNode" in e ? iE(e.children) : e
        }
    }
    let zb;

    function PD(e) {
        zb = e
    }
    let Xb;

    function DD(e) {
        Xb = e
    }
    let Jb;

    function MD(e) {
        Jb = e
    }
    let sE = 0;

    function kD(e = {}) {
        const t = ve(e.version) ? e.version : LD,
            r = ve(e.locale) ? e.locale : uo,
            n = _t(e.fallbackLocale) || xe(e.fallbackLocale) || ve(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : r,
            s = xe(e.messages) ? e.messages : {
                [r]: {}
            },
            o = xe(e.datetimeFormats) ? e.datetimeFormats : {
                [r]: {}
            },
            c = xe(e.numberFormats) ? e.numberFormats : {
                [r]: {}
            },
            u = nr({}, e.modifiers || {}, $D()),
            f = e.pluralRules || {},
            h = Dt(e.missing) ? e.missing : null,
            g = Je(e.missingWarn) || gi(e.missingWarn) ? e.missingWarn : !0,
            _ = Je(e.fallbackWarn) || gi(e.fallbackWarn) ? e.fallbackWarn : !0,
            b = !!e.fallbackFormat,
            C = !!e.unresolving,
            P = Dt(e.postTranslation) ? e.postTranslation : null,
            x = xe(e.processor) ? e.processor : null,
            U = Je(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
            I = !!e.escapeParameter,
            H = Dt(e.messageCompiler) ? e.messageCompiler : zb,
            Y = Dt(e.messageResolver) ? e.messageResolver : Xb || gD,
            W = Dt(e.localeFallbacker) ? e.localeFallbacker : Jb || CD,
            G = yt(e.fallbackContext) ? e.fallbackContext : void 0,
            z = Dt(e.onWarn) ? e.onWarn : UP,
            ae = e,
            ce = yt(ae.__datetimeFormatters) ? ae.__datetimeFormatters : new Map,
            ue = yt(ae.__numberFormatters) ? ae.__numberFormatters : new Map,
            Re = yt(ae.__meta) ? ae.__meta : {};
        sE++;
        const Ie = {
            version: t,
            cid: sE,
            locale: r,
            fallbackLocale: n,
            messages: s,
            modifiers: u,
            pluralRules: f,
            missing: h,
            missingWarn: g,
            fallbackWarn: _,
            fallbackFormat: b,
            unresolving: C,
            postTranslation: P,
            processor: x,
            warnHtmlMessage: U,
            escapeParameter: I,
            messageCompiler: H,
            messageResolver: Y,
            localeFallbacker: W,
            fallbackContext: G,
            onWarn: z,
            __meta: Re
        };
        return Ie.datetimeFormats = o, Ie.numberFormats = c, Ie.__datetimeFormatters = ce, Ie.__numberFormatters = ue, Ie
    }

    function $h(e, t, r, n, s) {
        const {
            missing: o,
            onWarn: c
        } = e;
        if (o !== null) {
            const u = o(e, r, t, s);
            return ve(u) ? u : t
        } else return t
    }

    function wa(e, t, r) {
        const n = e;
        n.__localeChainCache = new Map, e.localeFallbacker(e, r, t)
    }
    const xD = e => e;
    let aE = Object.create(null);

    function UD(e, t = {}) {
        {
            const n = (t.onCacheKey || xD)(e),
                s = aE[n];
            if (s) return s;
            let o = !1;
            const c = t.onError || GP;
            t.onError = h => {
                o = !0, c(h)
            };
            const {
                code: u
            } = oD(e, t), f = new Function(`return ${u}`)();
            return o ? f : aE[n] = f
        }
    }
    let Zb = rt.__EXTEND_POINT__;
    const pf = () => ++Zb,
        ws = {
            INVALID_ARGUMENT: Zb,
            INVALID_DATE_ARGUMENT: pf(),
            INVALID_ISO_DATE_ARGUMENT: pf(),
            __EXTEND_POINT__: pf()
        };

    function Ns(e) {
        return bl(e, null, void 0)
    }
    const oE = () => "",
        es = e => Dt(e);

    function cE(e, ...t) {
        const {
            fallbackFormat: r,
            postTranslation: n,
            unresolving: s,
            messageCompiler: o,
            fallbackLocale: c,
            messages: u
        } = e, [f, h] = vd(...t), g = Je(h.missingWarn) ? h.missingWarn : e.missingWarn, _ = Je(h.fallbackWarn) ? h.fallbackWarn : e.fallbackWarn, b = Je(h.escapeParameter) ? h.escapeParameter : e.escapeParameter, C = !!h.resolvedMessage, P = ve(h.default) || Je(h.default) ? Je(h.default) ? o ? f : () => f : h.default : r ? o ? f : () => f : "", x = r || P !== "", U = ve(h.locale) ? h.locale : e.locale;
        b && FD(h);
        let [I, H, Y] = C ? [f, U, u[U] || {}] : Qb(e, f, U, c, _, g), W = I, G = f;
        if (!C && !(ve(W) || es(W)) && x && (W = P, G = W), !C && (!(ve(W) || es(W)) || !ve(H))) return s ? Tl : f;
        let z = !1;
        const ae = () => {
                z = !0
            },
            ce = es(W) ? W : eT(e, f, H, W, G, ae);
        if (z) return W;
        const ue = WD(e, H, Y, h),
            Re = OD(ue),
            Ie = BD(e, ce, Re);
        return n ? n(Ie, f) : Ie
    }

    function FD(e) {
        _t(e.list) ? e.list = e.list.map(t => ve(t) ? Jv(t) : t) : yt(e.named) && Object.keys(e.named).forEach(t => {
            ve(e.named[t]) && (e.named[t] = Jv(e.named[t]))
        })
    }

    function Qb(e, t, r, n, s, o) {
        const {
            messages: c,
            onWarn: u,
            messageResolver: f,
            localeFallbacker: h
        } = e, g = h(e, n, r);
        let _ = {},
            b, C = null;
        const P = "translate";
        for (let x = 0; x < g.length && (b = g[x], _ = c[b] || {}, (C = f(_, t)) === null && (C = _[t]), !(ve(C) || Dt(C))); x++) {
            const U = $h(e, t, b, o, P);
            U !== t && (C = U)
        }
        return [C, b, _]
    }

    function eT(e, t, r, n, s, o) {
        const {
            messageCompiler: c,
            warnHtmlMessage: u
        } = e;
        if (es(n)) {
            const h = n;
            return h.locale = h.locale || r, h.key = h.key || t, h
        }
        if (c == null) {
            const h = () => n;
            return h.locale = r, h.key = t, h
        }
        const f = c(n, GD(e, r, s, n, u, o));
        return f.locale = r, f.key = t, f.source = n, f
    }

    function BD(e, t, r) {
        return t(r)
    }

    function vd(...e) {
        const [t, r, n] = e, s = {};
        if (!ve(t) && !Gt(t) && !es(t)) throw Ns(ws.INVALID_ARGUMENT);
        const o = Gt(t) ? String(t) : (es(t), t);
        return Gt(r) ? s.plural = r : ve(r) ? s.default = r : xe(r) && !yl(r) ? s.named = r : _t(r) && (s.list = r), Gt(n) ? s.plural = n : ve(n) ? s.default = n : xe(n) && nr(s, n), [o, s]
    }

    function GD(e, t, r, n, s, o) {
        return {
            warnHtmlMessage: s,
            onError: c => {
                throw o && o(c), c
            },
            onCacheKey: c => MP(t, r, c)
        }
    }

    function WD(e, t, r, n) {
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
                let P = c(r, C);
                if (P == null && g) {
                    const [, , x] = Qb(g, C, t, u, f, h);
                    P = c(x, C)
                }
                if (ve(P)) {
                    let x = !1;
                    const I = eT(e, C, t, P, C, () => {
                        x = !0
                    });
                    return x ? oE : I
                } else return es(P) ? P : oE
            }
        };
        return e.processor && (b.processor = e.processor), n.list && (b.list = n.list), n.named && (b.named = n.named), Gt(n.plural) && (b.pluralIndex = n.plural), b
    }

    function lE(e, ...t) {
        const {
            datetimeFormats: r,
            unresolving: n,
            fallbackLocale: s,
            onWarn: o,
            localeFallbacker: c
        } = e, {
            __datetimeFormatters: u
        } = e, [f, h, g, _] = Ed(...t), b = Je(g.missingWarn) ? g.missingWarn : e.missingWarn;
        Je(g.fallbackWarn) ? g.fallbackWarn : e.fallbackWarn;
        const C = !!g.part,
            P = ve(g.locale) ? g.locale : e.locale,
            x = c(e, s, P);
        if (!ve(f) || f === "") return new Intl.DateTimeFormat(P, _).format(h);
        let U = {},
            I, H = null;
        const Y = "datetime format";
        for (let z = 0; z < x.length && (I = x[z], U = r[I] || {}, H = U[f], !xe(H)); z++) $h(e, f, I, b, Y);
        if (!xe(H) || !ve(I)) return n ? Tl : f;
        let W = `${I}__${f}`;
        yl(_) || (W = `${W}__${JSON.stringify(_)}`);
        let G = u.get(W);
        return G || (G = new Intl.DateTimeFormat(I, nr({}, H, _)), u.set(W, G)), C ? G.formatToParts(h) : G.format(h)
    }
    const tT = ["localeMatcher", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "formatMatcher", "hour12", "timeZone", "dateStyle", "timeStyle", "calendar", "dayPeriod", "numberingSystem", "hourCycle", "fractionalSecondDigits"];

    function Ed(...e) {
        const [t, r, n, s] = e, o = {};
        let c = {},
            u;
        if (ve(t)) {
            const f = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
            if (!f) throw Ns(ws.INVALID_ISO_DATE_ARGUMENT);
            const h = f[3] ? f[3].trim().startsWith("T") ? `${f[1].trim()}${f[3].trim()}` : `${f[1].trim()}T${f[3].trim()}` : f[1].trim();
            u = new Date(h);
            try {
                u.toISOString()
            } catch {
                throw Ns(ws.INVALID_ISO_DATE_ARGUMENT)
            }
        } else if (xP(t)) {
            if (isNaN(t.getTime())) throw Ns(ws.INVALID_DATE_ARGUMENT);
            u = t
        } else if (Gt(t)) u = t;
        else throw Ns(ws.INVALID_ARGUMENT);
        return ve(r) ? o.key = r : xe(r) && Object.keys(r).forEach(f => {
            tT.includes(f) ? c[f] = r[f] : o[f] = r[f]
        }), ve(n) ? o.locale = n : xe(n) && (c = n), xe(s) && (c = s), [o.key || "", u, o, c]
    }

    function uE(e, t, r) {
        const n = e;
        for (const s in r) {
            const o = `${t}__${s}`;
            !n.__datetimeFormatters.has(o) || n.__datetimeFormatters.delete(o)
        }
    }

    function fE(e, ...t) {
        const {
            numberFormats: r,
            unresolving: n,
            fallbackLocale: s,
            onWarn: o,
            localeFallbacker: c
        } = e, {
            __numberFormatters: u
        } = e, [f, h, g, _] = _d(...t), b = Je(g.missingWarn) ? g.missingWarn : e.missingWarn;
        Je(g.fallbackWarn) ? g.fallbackWarn : e.fallbackWarn;
        const C = !!g.part,
            P = ve(g.locale) ? g.locale : e.locale,
            x = c(e, s, P);
        if (!ve(f) || f === "") return new Intl.NumberFormat(P, _).format(h);
        let U = {},
            I, H = null;
        const Y = "number format";
        for (let z = 0; z < x.length && (I = x[z], U = r[I] || {}, H = U[f], !xe(H)); z++) $h(e, f, I, b, Y);
        if (!xe(H) || !ve(I)) return n ? Tl : f;
        let W = `${I}__${f}`;
        yl(_) || (W = `${W}__${JSON.stringify(_)}`);
        let G = u.get(W);
        return G || (G = new Intl.NumberFormat(I, nr({}, H, _)), u.set(W, G)), C ? G.formatToParts(h) : G.format(h)
    }
    const rT = ["localeMatcher", "style", "currency", "currencyDisplay", "currencySign", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "notation", "signDisplay", "unit", "unitDisplay", "roundingMode", "roundingPriority", "roundingIncrement", "trailingZeroDisplay"];

    function _d(...e) {
        const [t, r, n, s] = e, o = {};
        let c = {};
        if (!Gt(t)) throw Ns(ws.INVALID_ARGUMENT);
        const u = t;
        return ve(r) ? o.key = r : xe(r) && Object.keys(r).forEach(f => {
            rT.includes(f) ? c[f] = r[f] : o[f] = r[f]
        }), ve(n) ? o.locale = n : xe(n) && (c = n), xe(s) && (c = s), [o.key || "", u, o, c]
    }

    function dE(e, t, r) {
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
    const jD = "9.2.2";
    RD.__EXTEND_POINT__;
    let nT = rt.__EXTEND_POINT__;
    const Sr = () => ++nT,
        Ut = {
            UNEXPECTED_RETURN_TYPE: nT,
            INVALID_ARGUMENT: Sr(),
            MUST_BE_CALL_SETUP_TOP: Sr(),
            NOT_INSLALLED: Sr(),
            NOT_AVAILABLE_IN_LEGACY_MODE: Sr(),
            REQUIRED_VALUE: Sr(),
            INVALID_VALUE: Sr(),
            CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: Sr(),
            NOT_INSLALLED_WITH_PROVIDE: Sr(),
            UNEXPECTED_ERROR: Sr(),
            NOT_COMPATIBLE_LEGACY_VUE_I18N: Sr(),
            BRIDGE_SUPPORT_VUE_2_ONLY: Sr(),
            MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: Sr(),
            NOT_AVAILABLE_COMPOSITION_IN_LEGACY: Sr(),
            __EXTEND_POINT__: Sr()
        };

    function Kt(e, ...t) {
        return bl(e, null, void 0)
    }
    const yd = vi("__transrateVNode"),
        bd = vi("__datetimeParts"),
        Td = vi("__numberParts"),
        iT = vi("__setPluralRules");
    vi("__intlifyMeta");
    const sT = vi("__injectWithOption");

    function Sd(e) {
        if (!yt(e)) return e;
        for (const t in e)
            if (!!wh(e, t))
                if (!t.includes(".")) yt(e[t]) && Sd(e[t]);
                else {
                    const r = t.split("."),
                        n = r.length - 1;
                    let s = e;
                    for (let o = 0; o < n; o++) r[o] in s || (s[r[o]] = {}), s = s[r[o]];
                    s[r[n]] = e[t], delete e[t], yt(s[r[n]]) && Sd(s[r[n]])
                } return e
    }

    function Sl(e, t) {
        const {
            messages: r,
            __i18n: n,
            messageResolver: s,
            flatJson: o
        } = t, c = xe(r) ? r : _t(n) ? {} : {
            [e]: {}
        };
        if (_t(n) && n.forEach(u => {
                if ("locale" in u && "resource" in u) {
                    const {
                        locale: f,
                        resource: h
                    } = u;
                    f ? (c[f] = c[f] || {}, xa(h, c[f])) : xa(h, c)
                } else ve(u) && xa(JSON.parse(u), c)
            }), s == null && o)
            for (const u in c) wh(c, u) && Sd(c[u]);
        return c
    }
    const Ec = e => !yt(e) || _t(e);

    function xa(e, t) {
        if (Ec(e) || Ec(t)) throw Kt(Ut.INVALID_VALUE);
        for (const r in e) wh(e, r) && (Ec(e[r]) || Ec(t[r]) ? t[r] = e[r] : xa(e[r], t[r]))
    }

    function HD(e) {
        return e.type
    }

    function aT(e, t, r) {
        let n = yt(t.messages) ? t.messages : {};
        "__i18nGlobal" in r && (n = Sl(e.locale.value, {
            messages: n,
            __i18n: r.__i18nGlobal
        }));
        const s = Object.keys(n);
        s.length && s.forEach(o => {
            e.mergeLocaleMessage(o, n[o])
        }); {
            if (yt(t.datetimeFormats)) {
                const o = Object.keys(t.datetimeFormats);
                o.length && o.forEach(c => {
                    e.mergeDateTimeFormat(c, t.datetimeFormats[c])
                })
            }
            if (yt(t.numberFormats)) {
                const o = Object.keys(t.numberFormats);
                o.length && o.forEach(c => {
                    e.mergeNumberFormat(c, t.numberFormats[c])
                })
            }
        }
    }

    function hE(e) {
        return st(vl, null, e, 0)
    }
    let pE = 0;

    function gE(e) {
        return (t, r, n, s) => e(r, n, pi() || void 0, s)
    }

    function Ph(e = {}, t) {
        const {
            __root: r
        } = e, n = r === void 0;
        let s = Je(e.inheritLocale) ? e.inheritLocale : !0;
        const o = an(r && s ? r.locale.value : ve(e.locale) ? e.locale : uo),
            c = an(r && s ? r.fallbackLocale.value : ve(e.fallbackLocale) || _t(e.fallbackLocale) || xe(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : o.value),
            u = an(Sl(o.value, e)),
            f = an(xe(e.datetimeFormats) ? e.datetimeFormats : {
                [o.value]: {}
            }),
            h = an(xe(e.numberFormats) ? e.numberFormats : {
                [o.value]: {}
            });
        let g = r ? r.missingWarn : Je(e.missingWarn) || gi(e.missingWarn) ? e.missingWarn : !0,
            _ = r ? r.fallbackWarn : Je(e.fallbackWarn) || gi(e.fallbackWarn) ? e.fallbackWarn : !0,
            b = r ? r.fallbackRoot : Je(e.fallbackRoot) ? e.fallbackRoot : !0,
            C = !!e.fallbackFormat,
            P = Dt(e.missing) ? e.missing : null,
            x = Dt(e.missing) ? gE(e.missing) : null,
            U = Dt(e.postTranslation) ? e.postTranslation : null,
            I = r ? r.warnHtmlMessage : Je(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
            H = !!e.escapeParameter;
        const Y = r ? r.modifiers : xe(e.modifiers) ? e.modifiers : {};
        let W = e.pluralRules || r && r.pluralRules,
            G;
        G = (() => {
            const w = {
                version: jD,
                locale: o.value,
                fallbackLocale: c.value,
                messages: u.value,
                modifiers: Y,
                pluralRules: W,
                missing: x === null ? void 0 : x,
                missingWarn: g,
                fallbackWarn: _,
                fallbackFormat: C,
                unresolving: !0,
                postTranslation: U === null ? void 0 : U,
                warnHtmlMessage: I,
                escapeParameter: H,
                messageResolver: e.messageResolver,
                __meta: {
                    framework: "vue"
                }
            };
            return w.datetimeFormats = f.value, w.numberFormats = h.value, w.__datetimeFormatters = xe(G) ? G.__datetimeFormatters : void 0, w.__numberFormatters = xe(G) ? G.__numberFormatters : void 0, kD(w)
        })(), wa(G, o.value, c.value);

        function ae() {
            return [o.value, c.value, u.value, f.value, h.value]
        }
        const ce = qr({
                get: () => o.value,
                set: w => {
                    o.value = w, G.locale = o.value
                }
            }),
            ue = qr({
                get: () => c.value,
                set: w => {
                    c.value = w, G.fallbackLocale = c.value, wa(G, o.value, w)
                }
            }),
            Re = qr(() => u.value),
            Ie = qr(() => f.value),
            fe = qr(() => h.value);

        function Ae() {
            return Dt(U) ? U : null
        }

        function F(w) {
            U = w, G.postTranslation = w
        }

        function re() {
            return P
        }

        function de(w) {
            w !== null && (x = gE(w)), P = w, G.missing = x
        }
        const _e = (w, j, he, pe, Ce, Pe) => {
            ae();
            let A;
            if (A = w(G), Gt(A) && A === Tl) {
                const [T, L] = j();
                return r && b ? pe(r) : Ce(T)
            } else {
                if (Pe(A)) return A;
                throw Kt(Ut.UNEXPECTED_RETURN_TYPE)
            }
        };

        function me(...w) {
            return _e(j => Reflect.apply(cE, null, [j, ...w]), () => vd(...w), "translate", j => Reflect.apply(j.t, j, [...w]), j => j, j => ve(j))
        }

        function Se(...w) {
            const [j, he, pe] = w;
            if (pe && !yt(pe)) throw Kt(Ut.INVALID_ARGUMENT);
            return me(j, he, nr({
                resolvedMessage: !0
            }, pe || {}))
        }

        function Me(...w) {
            return _e(j => Reflect.apply(lE, null, [j, ...w]), () => Ed(...w), "datetime format", j => Reflect.apply(j.d, j, [...w]), () => nE, j => ve(j))
        }

        function Fe(...w) {
            return _e(j => Reflect.apply(fE, null, [j, ...w]), () => _d(...w), "number format", j => Reflect.apply(j.n, j, [...w]), () => nE, j => ve(j))
        }

        function et(w) {
            return w.map(j => ve(j) || Gt(j) || Je(j) ? hE(String(j)) : j)
        }
        const Ir = {
            normalize: et,
            interpolate: w => w,
            type: "vnode"
        };

        function ir(...w) {
            return _e(j => {
                let he;
                const pe = j;
                try {
                    pe.processor = Ir, he = Reflect.apply(cE, null, [pe, ...w])
                } finally {
                    pe.processor = null
                }
                return he
            }, () => vd(...w), "translate", j => j[yd](...w), j => [hE(j)], j => _t(j))
        }

        function Er(...w) {
            return _e(j => Reflect.apply(fE, null, [j, ...w]), () => _d(...w), "number format", j => j[Td](...w), () => [], j => ve(j) || _t(j))
        }

        function at(...w) {
            return _e(j => Reflect.apply(lE, null, [j, ...w]), () => Ed(...w), "datetime format", j => j[bd](...w), () => [], j => ve(j) || _t(j))
        }

        function St(w) {
            W = w, G.pluralRules = W
        }

        function ot(w, j) {
            const he = ve(j) ? j : o.value,
                pe = xt(he);
            return G.messageResolver(pe, w) !== null
        }

        function kt(w) {
            let j = null;
            const he = qb(G, c.value, o.value);
            for (let pe = 0; pe < he.length; pe++) {
                const Ce = u.value[he[pe]] || {},
                    Pe = G.messageResolver(Ce, w);
                if (Pe != null) {
                    j = Pe;
                    break
                }
            }
            return j
        }

        function Yt(w) {
            const j = kt(w);
            return j != null ? j : r ? r.tm(w) || {} : {}
        }

        function xt(w) {
            return u.value[w] || {}
        }

        function m(w, j) {
            u.value[w] = j, G.messages = u.value
        }

        function p(w, j) {
            u.value[w] = u.value[w] || {}, xa(j, u.value[w]), G.messages = u.value
        }

        function O(w) {
            return f.value[w] || {}
        }

        function k(w, j) {
            f.value[w] = j, G.datetimeFormats = f.value, uE(G, w, j)
        }

        function B(w, j) {
            f.value[w] = nr(f.value[w] || {}, j), G.datetimeFormats = f.value, uE(G, w, j)
        }

        function V(w) {
            return h.value[w] || {}
        }

        function le(w, j) {
            h.value[w] = j, G.numberFormats = h.value, dE(G, w, j)
        }

        function ie(w, j) {
            h.value[w] = nr(h.value[w] || {}, j), G.numberFormats = h.value, dE(G, w, j)
        }
        pE++, r && gd && (Zi(r.locale, w => {
            s && (o.value = w, G.locale = w, wa(G, o.value, c.value))
        }), Zi(r.fallbackLocale, w => {
            s && (c.value = w, G.fallbackLocale = w, wa(G, o.value, c.value))
        }));
        const ee = {
            id: pE,
            locale: ce,
            fallbackLocale: ue,
            get inheritLocale() {
                return s
            },
            set inheritLocale(w) {
                s = w, w && r && (o.value = r.locale.value, c.value = r.fallbackLocale.value, wa(G, o.value, c.value))
            },
            get availableLocales() {
                return Object.keys(u.value).sort()
            },
            messages: Re,
            get modifiers() {
                return Y
            },
            get pluralRules() {
                return W || {}
            },
            get isGlobal() {
                return n
            },
            get missingWarn() {
                return g
            },
            set missingWarn(w) {
                g = w, G.missingWarn = g
            },
            get fallbackWarn() {
                return _
            },
            set fallbackWarn(w) {
                _ = w, G.fallbackWarn = _
            },
            get fallbackRoot() {
                return b
            },
            set fallbackRoot(w) {
                b = w
            },
            get fallbackFormat() {
                return C
            },
            set fallbackFormat(w) {
                C = w, G.fallbackFormat = C
            },
            get warnHtmlMessage() {
                return I
            },
            set warnHtmlMessage(w) {
                I = w, G.warnHtmlMessage = w
            },
            get escapeParameter() {
                return H
            },
            set escapeParameter(w) {
                H = w, G.escapeParameter = w
            },
            t: me,
            getLocaleMessage: xt,
            setLocaleMessage: m,
            mergeLocaleMessage: p,
            getPostTranslationHandler: Ae,
            setPostTranslationHandler: F,
            getMissingHandler: re,
            setMissingHandler: de,
            [iT]: St
        };
        return ee.datetimeFormats = Ie, ee.numberFormats = fe, ee.rt = Se, ee.te = ot, ee.tm = Yt, ee.d = Me, ee.n = Fe, ee.getDateTimeFormat = O, ee.setDateTimeFormat = k, ee.mergeDateTimeFormat = B, ee.getNumberFormat = V, ee.setNumberFormat = le, ee.mergeNumberFormat = ie, ee[sT] = e.__injectWithOption, ee[yd] = ir, ee[bd] = at, ee[Td] = Er, ee
    }

    function KD(e) {
        const t = ve(e.locale) ? e.locale : uo,
            r = ve(e.fallbackLocale) || _t(e.fallbackLocale) || xe(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : t,
            n = Dt(e.missing) ? e.missing : void 0,
            s = Je(e.silentTranslationWarn) || gi(e.silentTranslationWarn) ? !e.silentTranslationWarn : !0,
            o = Je(e.silentFallbackWarn) || gi(e.silentFallbackWarn) ? !e.silentFallbackWarn : !0,
            c = Je(e.fallbackRoot) ? e.fallbackRoot : !0,
            u = !!e.formatFallbackMessages,
            f = xe(e.modifiers) ? e.modifiers : {},
            h = e.pluralizationRules,
            g = Dt(e.postTranslation) ? e.postTranslation : void 0,
            _ = ve(e.warnHtmlInMessage) ? e.warnHtmlInMessage !== "off" : !0,
            b = !!e.escapeParameterHtml,
            C = Je(e.sync) ? e.sync : !0;
        let P = e.messages;
        if (xe(e.sharedMessages)) {
            const G = e.sharedMessages;
            P = Object.keys(G).reduce((ae, ce) => {
                const ue = ae[ce] || (ae[ce] = {});
                return nr(ue, G[ce]), ae
            }, P || {})
        }
        const {
            __i18n: x,
            __root: U,
            __injectWithOption: I
        } = e, H = e.datetimeFormats, Y = e.numberFormats, W = e.flatJson;
        return {
            locale: t,
            fallbackLocale: r,
            messages: P,
            flatJson: W,
            datetimeFormats: H,
            numberFormats: Y,
            missing: n,
            missingWarn: s,
            fallbackWarn: o,
            fallbackRoot: c,
            fallbackFormat: u,
            modifiers: f,
            pluralRules: h,
            postTranslation: g,
            warnHtmlMessage: _,
            escapeParameter: b,
            messageResolver: e.messageResolver,
            inheritLocale: C,
            __i18n: x,
            __root: U,
            __injectWithOption: I
        }
    }

    function Od(e = {}, t) {
        {
            const r = Ph(KD(e)),
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
                        return Je(r.missingWarn) ? !r.missingWarn : r.missingWarn
                    },
                    set silentTranslationWarn(s) {
                        r.missingWarn = Je(s) ? !s : s
                    },
                    get silentFallbackWarn() {
                        return Je(r.fallbackWarn) ? !r.fallbackWarn : r.fallbackWarn
                    },
                    set silentFallbackWarn(s) {
                        r.fallbackWarn = Je(s) ? !s : s
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
                            g = null;
                        if (!ve(o)) throw Kt(Ut.INVALID_ARGUMENT);
                        const _ = o;
                        return ve(c) ? f.locale = c : _t(c) ? h = c : xe(c) && (g = c), _t(u) ? h = u : xe(u) && (g = u), Reflect.apply(r.t, r, [_, h || g || {}, f])
                    },
                    rt(...s) {
                        return Reflect.apply(r.rt, r, [...s])
                    },
                    tc(...s) {
                        const [o, c, u] = s, f = {
                            plural: 1
                        };
                        let h = null,
                            g = null;
                        if (!ve(o)) throw Kt(Ut.INVALID_ARGUMENT);
                        const _ = o;
                        return ve(c) ? f.locale = c : Gt(c) ? f.plural = c : _t(c) ? h = c : xe(c) && (g = c), ve(u) ? f.locale = u : _t(u) ? h = u : xe(u) && (g = u), Reflect.apply(r.t, r, [_, h || g || {}, f])
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
    const Dh = {
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

    function VD({
        slots: e
    }, t) {
        return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((n, s) => n = [...n, ..._t(s.children) ? s.children : [s]], []) : t.reduce((r, n) => {
            const s = e[n];
            return s && (r[n] = s()), r
        }, {})
    }

    function oT(e) {
        return At
    }
    const mE = {
        name: "i18n-t",
        props: nr({
            keypath: {
                type: String,
                required: !0
            },
            plural: {
                type: [Number, String],
                validator: e => Gt(e) || !isNaN(e)
            }
        }, Dh),
        setup(e, t) {
            const {
                slots: r,
                attrs: n
            } = t, s = e.i18n || Mh({
                useScope: e.scope,
                __useComponent: !0
            });
            return () => {
                const o = Object.keys(r).filter(_ => _ !== "_"),
                    c = {};
                e.locale && (c.locale = e.locale), e.plural !== void 0 && (c.plural = ve(e.plural) ? +e.plural : e.plural);
                const u = VD(t, o),
                    f = s[yd](e.keypath, u, c),
                    h = nr({}, n),
                    g = ve(e.tag) || yt(e.tag) ? e.tag : oT();
                return Rh(g, h, f)
            }
        }
    };

    function YD(e) {
        return _t(e) && !ve(e[0])
    }

    function cT(e, t, r, n) {
        const {
            slots: s,
            attrs: o
        } = t;
        return () => {
            const c = {
                part: !0
            };
            let u = {};
            e.locale && (c.locale = e.locale), ve(e.format) ? c.key = e.format : yt(e.format) && (ve(e.format.key) && (c.key = e.format.key), u = Object.keys(e.format).reduce((b, C) => r.includes(C) ? nr({}, b, {
                [C]: e.format[C]
            }) : b, {}));
            const f = n(e.value, c, u);
            let h = [c.key];
            _t(f) ? h = f.map((b, C) => {
                const P = s[b.type],
                    x = P ? P({
                        [b.type]: b.value,
                        index: C,
                        parts: f
                    }) : [b.value];
                return YD(x) && (x[0].key = `${b.type}-${C}`), x
            }) : ve(f) && (h = [f]);
            const g = nr({}, o),
                _ = ve(e.tag) || yt(e.tag) ? e.tag : oT();
            return Rh(_, g, h)
        }
    }
    const vE = {
            name: "i18n-n",
            props: nr({
                value: {
                    type: Number,
                    required: !0
                },
                format: {
                    type: [String, Object]
                }
            }, Dh),
            setup(e, t) {
                const r = e.i18n || Mh({
                    useScope: "parent",
                    __useComponent: !0
                });
                return cT(e, t, rT, (...n) => r[Td](...n))
            }
        },
        EE = {
            name: "i18n-d",
            props: nr({
                value: {
                    type: [Number, Date],
                    required: !0
                },
                format: {
                    type: [String, Object]
                }
            }, Dh),
            setup(e, t) {
                const r = e.i18n || Mh({
                    useScope: "parent",
                    __useComponent: !0
                });
                return cT(e, t, tT, (...n) => r[bd](...n))
            }
        };

    function qD(e, t) {
        const r = e;
        if (e.mode === "composition") return r.__getInstance(t) || e.global; {
            const n = r.__getInstance(t);
            return n != null ? n.__composer : e.global.__composer
        }
    }

    function zD(e) {
        const t = c => {
            const {
                instance: u,
                modifiers: f,
                value: h
            } = c;
            if (!u || !u.$) throw Kt(Ut.UNEXPECTED_ERROR);
            const g = qD(e, u.$),
                _ = _E(h);
            return [Reflect.apply(g.t, g, [...yE(_)]), g]
        };
        return {
            created: (c, u) => {
                const [f, h] = t(u);
                gd && e.global === h && (c.__i18nWatcher = Zi(h.locale, () => {
                    u.instance && u.instance.$forceUpdate()
                })), c.__composer = h, c.textContent = f
            },
            unmounted: c => {
                gd && c.__i18nWatcher && (c.__i18nWatcher(), c.__i18nWatcher = void 0, delete c.__i18nWatcher), c.__composer && (c.__composer = void 0, delete c.__composer)
            },
            beforeUpdate: (c, {
                value: u
            }) => {
                if (c.__composer) {
                    const f = c.__composer,
                        h = _E(u);
                    c.textContent = Reflect.apply(f.t, f, [...yE(h)])
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

    function _E(e) {
        if (ve(e)) return {
            path: e
        };
        if (xe(e)) {
            if (!("path" in e)) throw Kt(Ut.REQUIRED_VALUE, "path");
            return e
        } else throw Kt(Ut.INVALID_VALUE)
    }

    function yE(e) {
        const {
            path: t,
            locale: r,
            args: n,
            choice: s,
            plural: o
        } = e, c = {}, u = n || {};
        return ve(r) && (c.locale = r), Gt(s) && (c.plural = s), Gt(o) && (c.plural = o), [t, u, c]
    }

    function XD(e, t, ...r) {
        const n = xe(r[0]) ? r[0] : {},
            s = !!n.useI18nComponentName;
        (Je(n.globalInstall) ? n.globalInstall : !0) && (e.component(s ? "i18n" : mE.name, mE), e.component(vE.name, vE), e.component(EE.name, EE)), e.directive("t", zD(t))
    }

    function JD(e, t, r) {
        return {
            beforeCreate() {
                const n = pi();
                if (!n) throw Kt(Ut.UNEXPECTED_ERROR);
                const s = this.$options;
                if (s.i18n) {
                    const o = s.i18n;
                    s.__i18n && (o.__i18n = s.__i18n), o.__root = t, this === this.$root ? this.$i18n = bE(e, o) : (o.__injectWithOption = !0, this.$i18n = Od(o))
                } else s.__i18n ? this === this.$root ? this.$i18n = bE(e, s) : this.$i18n = Od({
                    __i18n: s.__i18n,
                    __injectWithOption: !0,
                    __root: t
                }) : this.$i18n = e;
                s.__i18nGlobal && aT(t, s, s), e.__onComponentInstanceCreated(this.$i18n), r.__setInstance(n, this.$i18n), this.$t = (...o) => this.$i18n.t(...o), this.$rt = (...o) => this.$i18n.rt(...o), this.$tc = (...o) => this.$i18n.tc(...o), this.$te = (o, c) => this.$i18n.te(o, c), this.$d = (...o) => this.$i18n.d(...o), this.$n = (...o) => this.$i18n.n(...o), this.$tm = o => this.$i18n.tm(o)
            },
            mounted() {},
            unmounted() {
                const n = pi();
                if (!n) throw Kt(Ut.UNEXPECTED_ERROR);
                delete this.$t, delete this.$rt, delete this.$tc, delete this.$te, delete this.$d, delete this.$n, delete this.$tm, r.__deleteInstance(n), delete this.$i18n
            }
        }
    }

    function bE(e, t) {
        e.locale = t.locale || e.locale, e.fallbackLocale = t.fallbackLocale || e.fallbackLocale, e.missing = t.missing || e.missing, e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn, e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn, e.formatFallbackMessages = t.formatFallbackMessages || e.formatFallbackMessages, e.postTranslation = t.postTranslation || e.postTranslation, e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage, e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml, e.sync = t.sync || e.sync, e.__composer[iT](t.pluralizationRules || e.pluralizationRules);
        const r = Sl(e.locale, {
            messages: t.messages,
            __i18n: t.__i18n
        });
        return Object.keys(r).forEach(n => e.mergeLocaleMessage(n, r[n])), t.datetimeFormats && Object.keys(t.datetimeFormats).forEach(n => e.mergeDateTimeFormat(n, t.datetimeFormats[n])), t.numberFormats && Object.keys(t.numberFormats).forEach(n => e.mergeNumberFormat(n, t.numberFormats[n])), e
    }
    const ZD = vi("global-vue-i18n");

    function QD(e = {}, t) {
        const r = Je(e.legacy) ? e.legacy : !0,
            n = Je(e.globalInjection) ? e.globalInjection : !0,
            s = r ? !!e.allowComposition : !0,
            o = new Map,
            [c, u] = eM(e, r),
            f = vi("");

        function h(b) {
            return o.get(b) || null
        }

        function g(b, C) {
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
                async install(C, ...P) {
                    C.__VUE_I18N_SYMBOL__ = f, C.provide(C.__VUE_I18N_SYMBOL__, b), !r && n && lM(C, b.global), XD(C, b, ...P), r && C.mixin(JD(u, u.__composer, b));
                    const x = C.unmount;
                    C.unmount = () => {
                        b.dispose(), x()
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
                __deleteInstance: _
            };
            return b
        }
    }

    function Mh(e = {}) {
        const t = pi();
        if (t == null) throw Kt(Ut.MUST_BE_CALL_SETUP_TOP);
        if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__) throw Kt(Ut.NOT_INSLALLED);
        const r = tM(t),
            n = nM(r),
            s = HD(t),
            o = rM(e, s);
        if (r.mode === "legacy" && !e.__useComponent) {
            if (!r.allowComposition) throw Kt(Ut.NOT_AVAILABLE_IN_LEGACY_MODE);
            return aM(t, o, n, e)
        }
        if (o === "global") return aT(n, e, s), n;
        if (o === "parent") {
            let f = iM(r, t, e.__useComponent);
            return f == null && (f = n), f
        }
        const c = r;
        let u = c.__getInstance(t);
        if (u == null) {
            const f = nr({}, e);
            "__i18n" in s && (f.__i18n = s.__i18n), n && (f.__root = n), u = Ph(f), sM(c, t), c.__setInstance(t, u)
        }
        return u
    }

    function eM(e, t, r) {
        const n = pL(); {
            const s = t ? n.run(() => Od(e)) : n.run(() => Ph(e));
            if (s == null) throw Kt(Ut.UNEXPECTED_ERROR);
            return [n, s]
        }
    }

    function tM(e) {
        {
            const t = ui(e.isCE ? ZD : e.appContext.app.__VUE_I18N_SYMBOL__);
            if (!t) throw Kt(e.isCE ? Ut.NOT_INSLALLED_WITH_PROVIDE : Ut.UNEXPECTED_ERROR);
            return t
        }
    }

    function rM(e, t) {
        return yl(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local"
    }

    function nM(e) {
        return e.mode === "composition" ? e.global : e.global.__composer
    }

    function iM(e, t, r = !1) {
        let n = null;
        const s = t.root;
        let o = t.parent;
        for (; o != null;) {
            const c = e;
            if (e.mode === "composition") n = c.__getInstance(o);
            else {
                const u = c.__getInstance(o);
                u != null && (n = u.__composer, r && n && !n[sT] && (n = null))
            }
            if (n != null || s === o) break;
            o = o.parent
        }
        return n
    }

    function sM(e, t, r) {
        _h(() => {}, t), yh(() => {
            e.__deleteInstance(t)
        }, t)
    }

    function aM(e, t, r, n = {}) {
        const s = t === "local",
            o = WL(null);
        if (s && e.proxy && !(e.proxy.$options.i18n || e.proxy.$options.__i18n)) throw Kt(Ut.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
        const c = Je(n.inheritLocale) ? n.inheritLocale : !0,
            u = an(s && c ? r.locale.value : ve(n.locale) ? n.locale : uo),
            f = an(s && c ? r.fallbackLocale.value : ve(n.fallbackLocale) || _t(n.fallbackLocale) || xe(n.fallbackLocale) || n.fallbackLocale === !1 ? n.fallbackLocale : u.value),
            h = an(Sl(u.value, n)),
            g = an(xe(n.datetimeFormats) ? n.datetimeFormats : {
                [u.value]: {}
            }),
            _ = an(xe(n.numberFormats) ? n.numberFormats : {
                [u.value]: {}
            }),
            b = s ? r.missingWarn : Je(n.missingWarn) || gi(n.missingWarn) ? n.missingWarn : !0,
            C = s ? r.fallbackWarn : Je(n.fallbackWarn) || gi(n.fallbackWarn) ? n.fallbackWarn : !0,
            P = s ? r.fallbackRoot : Je(n.fallbackRoot) ? n.fallbackRoot : !0,
            x = !!n.fallbackFormat,
            U = Dt(n.missing) ? n.missing : null,
            I = Dt(n.postTranslation) ? n.postTranslation : null,
            H = s ? r.warnHtmlMessage : Je(n.warnHtmlMessage) ? n.warnHtmlMessage : !0,
            Y = !!n.escapeParameter,
            W = s ? r.modifiers : xe(n.modifiers) ? n.modifiers : {},
            G = n.pluralRules || s && r.pluralRules;

        function z() {
            return [u.value, f.value, h.value, g.value, _.value]
        }
        const ae = qr({
                get: () => o.value ? o.value.locale.value : u.value,
                set: p => {
                    o.value && (o.value.locale.value = p), u.value = p
                }
            }),
            ce = qr({
                get: () => o.value ? o.value.fallbackLocale.value : f.value,
                set: p => {
                    o.value && (o.value.fallbackLocale.value = p), f.value = p
                }
            }),
            ue = qr(() => o.value ? o.value.messages.value : h.value),
            Re = qr(() => g.value),
            Ie = qr(() => _.value);

        function fe() {
            return o.value ? o.value.getPostTranslationHandler() : I
        }

        function Ae(p) {
            o.value && o.value.setPostTranslationHandler(p)
        }

        function F() {
            return o.value ? o.value.getMissingHandler() : U
        }

        function re(p) {
            o.value && o.value.setMissingHandler(p)
        }

        function de(p) {
            return z(), p()
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

        function et(p, O) {
            return o.value ? o.value.te(p, O) : !1
        }

        function Nt(p) {
            return o.value ? o.value.getLocaleMessage(p) : {}
        }

        function Ir(p, O) {
            o.value && (o.value.setLocaleMessage(p, O), h.value[p] = O)
        }

        function ir(p, O) {
            o.value && o.value.mergeLocaleMessage(p, O)
        }

        function Er(p) {
            return o.value ? o.value.getDateTimeFormat(p) : {}
        }

        function at(p, O) {
            o.value && (o.value.setDateTimeFormat(p, O), g.value[p] = O)
        }

        function St(p, O) {
            o.value && o.value.mergeDateTimeFormat(p, O)
        }

        function ot(p) {
            return o.value ? o.value.getNumberFormat(p) : {}
        }

        function kt(p, O) {
            o.value && (o.value.setNumberFormat(p, O), _.value[p] = O)
        }

        function Yt(p, O) {
            o.value && o.value.mergeNumberFormat(p, O)
        }
        const xt = {
            get id() {
                return o.value ? o.value.id : -1
            },
            locale: ae,
            fallbackLocale: ce,
            messages: ue,
            datetimeFormats: Re,
            numberFormats: Ie,
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
                return o.value ? o.value.fallbackRoot : P
            },
            set fallbackRoot(p) {
                o.value && (o.value.fallbackRoot = p)
            },
            get fallbackFormat() {
                return o.value ? o.value.fallbackFormat : x
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
                return o.value ? o.value.escapeParameter : Y
            },
            set escapeParameter(p) {
                o.value && (o.value.escapeParameter = p)
            },
            t: _e,
            getPostTranslationHandler: fe,
            setPostTranslationHandler: Ae,
            getMissingHandler: F,
            setMissingHandler: re,
            rt: me,
            d: Se,
            n: Me,
            tm: Fe,
            te: et,
            getLocaleMessage: Nt,
            setLocaleMessage: Ir,
            mergeLocaleMessage: ir,
            getDateTimeFormat: Er,
            setDateTimeFormat: at,
            mergeDateTimeFormat: St,
            getNumberFormat: ot,
            setNumberFormat: kt,
            mergeNumberFormat: Yt
        };

        function m(p) {
            p.locale.value = u.value, p.fallbackLocale.value = f.value, Object.keys(h.value).forEach(O => {
                p.mergeLocaleMessage(O, h.value[O])
            }), Object.keys(g.value).forEach(O => {
                p.mergeDateTimeFormat(O, g.value[O])
            }), Object.keys(_.value).forEach(O => {
                p.mergeNumberFormat(O, _.value[O])
            }), p.escapeParameter = Y, p.fallbackFormat = x, p.fallbackRoot = P, p.fallbackWarn = C, p.missingWarn = b, p.warnHtmlMessage = H
        }
        return Sb(() => {
            if (e.proxy == null || e.proxy.$i18n == null) throw Kt(Ut.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
            const p = o.value = e.proxy.$i18n.__composer;
            t === "global" ? (u.value = p.locale.value, f.value = p.fallbackLocale.value, h.value = p.messages.value, g.value = p.datetimeFormats.value, _.value = p.numberFormats.value) : s && m(p)
        }), xt
    }
    const oM = ["locale", "fallbackLocale", "availableLocales"],
        cM = ["t", "rt", "d", "n", "tm"];

    function lM(e, t) {
        const r = Object.create(null);
        oM.forEach(n => {
            const s = Object.getOwnPropertyDescriptor(t, n);
            if (!s) throw Kt(Ut.UNEXPECTED_ERROR);
            const o = rr(s.value) ? {
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
        }), e.config.globalProperties.$i18n = r, cM.forEach(n => {
            const s = Object.getOwnPropertyDescriptor(t, n);
            if (!s || !s.value) throw Kt(Ut.UNEXPECTED_ERROR);
            Object.defineProperty(e.config.globalProperties, `$${n}`, s)
        })
    }
    PD(UD);
    DD(mD);
    MD(qb);
    class is {
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
    var Mt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

    function uM(e) {
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

    function fM() {
        this.__data__ = [], this.size = 0
    }
    var dM = fM;

    function hM(e, t) {
        return e === t || e !== e && t !== t
    }
    var Ol = hM,
        pM = Ol;

    function gM(e, t) {
        for (var r = e.length; r--;)
            if (pM(e[r][0], t)) return r;
        return -1
    }
    var Al = gM,
        mM = Al,
        vM = Array.prototype,
        EM = vM.splice;

    function _M(e) {
        var t = this.__data__,
            r = mM(t, e);
        if (r < 0) return !1;
        var n = t.length - 1;
        return r == n ? t.pop() : EM.call(t, r, 1), --this.size, !0
    }
    var yM = _M,
        bM = Al;

    function TM(e) {
        var t = this.__data__,
            r = bM(t, e);
        return r < 0 ? void 0 : t[r][1]
    }
    var SM = TM,
        OM = Al;

    function AM(e) {
        return OM(this.__data__, e) > -1
    }
    var IM = AM,
        RM = Al;

    function CM(e, t) {
        var r = this.__data__,
            n = RM(r, e);
        return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this
    }
    var wM = CM,
        NM = dM,
        LM = yM,
        $M = SM,
        PM = IM,
        DM = wM;

    function na(e) {
        var t = -1,
            r = e == null ? 0 : e.length;
        for (this.clear(); ++t < r;) {
            var n = e[t];
            this.set(n[0], n[1])
        }
    }
    na.prototype.clear = NM;
    na.prototype.delete = LM;
    na.prototype.get = $M;
    na.prototype.has = PM;
    na.prototype.set = DM;
    var Il = na,
        MM = Il;

    function kM() {
        this.__data__ = new MM, this.size = 0
    }
    var xM = kM;

    function UM(e) {
        var t = this.__data__,
            r = t.delete(e);
        return this.size = t.size, r
    }
    var FM = UM;

    function BM(e) {
        return this.__data__.get(e)
    }
    var GM = BM;

    function WM(e) {
        return this.__data__.has(e)
    }
    var jM = WM,
        HM = typeof Mt == "object" && Mt && Mt.Object === Object && Mt,
        lT = HM,
        KM = lT,
        VM = typeof self == "object" && self && self.Object === Object && self,
        YM = KM || VM || Function("return this")(),
        fn = YM,
        qM = fn,
        zM = qM.Symbol,
        Rl = zM,
        TE = Rl,
        uT = Object.prototype,
        XM = uT.hasOwnProperty,
        JM = uT.toString,
        Na = TE ? TE.toStringTag : void 0;

    function ZM(e) {
        var t = XM.call(e, Na),
            r = e[Na];
        try {
            e[Na] = void 0;
            var n = !0
        } catch {}
        var s = JM.call(e);
        return n && (t ? e[Na] = r : delete e[Na]), s
    }
    var QM = ZM,
        ek = Object.prototype,
        tk = ek.toString;

    function rk(e) {
        return tk.call(e)
    }
    var nk = rk,
        SE = Rl,
        ik = QM,
        sk = nk,
        ak = "[object Null]",
        ok = "[object Undefined]",
        OE = SE ? SE.toStringTag : void 0;

    function ck(e) {
        return e == null ? e === void 0 ? ok : ak : OE && OE in Object(e) ? ik(e) : sk(e)
    }
    var ia = ck;

    function lk(e) {
        var t = typeof e;
        return e != null && (t == "object" || t == "function")
    }
    var dn = lk,
        uk = ia,
        fk = dn,
        dk = "[object AsyncFunction]",
        hk = "[object Function]",
        pk = "[object GeneratorFunction]",
        gk = "[object Proxy]";

    function mk(e) {
        if (!fk(e)) return !1;
        var t = uk(e);
        return t == hk || t == pk || t == dk || t == gk
    }
    var kh = mk,
        vk = fn,
        Ek = vk["__core-js_shared__"],
        _k = Ek,
        gf = _k,
        AE = function() {
            var e = /[^.]+$/.exec(gf && gf.keys && gf.keys.IE_PROTO || "");
            return e ? "Symbol(src)_1." + e : ""
        }();

    function yk(e) {
        return !!AE && AE in e
    }
    var bk = yk,
        Tk = Function.prototype,
        Sk = Tk.toString;

    function Ok(e) {
        if (e != null) {
            try {
                return Sk.call(e)
            } catch {}
            try {
                return e + ""
            } catch {}
        }
        return ""
    }
    var fT = Ok,
        Ak = kh,
        Ik = bk,
        Rk = dn,
        Ck = fT,
        wk = /[\\^$.*+?()[\]{}|]/g,
        Nk = /^\[object .+?Constructor\]$/,
        Lk = Function.prototype,
        $k = Object.prototype,
        Pk = Lk.toString,
        Dk = $k.hasOwnProperty,
        Mk = RegExp("^" + Pk.call(Dk).replace(wk, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

    function kk(e) {
        if (!Rk(e) || Ik(e)) return !1;
        var t = Ak(e) ? Mk : Nk;
        return t.test(Ck(e))
    }
    var xk = kk;

    function Uk(e, t) {
        return e == null ? void 0 : e[t]
    }
    var Fk = Uk,
        Bk = xk,
        Gk = Fk;

    function Wk(e, t) {
        var r = Gk(e, t);
        return Bk(r) ? r : void 0
    }
    var as = Wk,
        jk = as,
        Hk = fn,
        Kk = jk(Hk, "Map"),
        xh = Kk,
        Vk = as,
        Yk = Vk(Object, "create"),
        Cl = Yk,
        IE = Cl;

    function qk() {
        this.__data__ = IE ? IE(null) : {}, this.size = 0
    }
    var zk = qk;

    function Xk(e) {
        var t = this.has(e) && delete this.__data__[e];
        return this.size -= t ? 1 : 0, t
    }
    var Jk = Xk,
        Zk = Cl,
        Qk = "__lodash_hash_undefined__",
        ex = Object.prototype,
        tx = ex.hasOwnProperty;

    function rx(e) {
        var t = this.__data__;
        if (Zk) {
            var r = t[e];
            return r === Qk ? void 0 : r
        }
        return tx.call(t, e) ? t[e] : void 0
    }
    var nx = rx,
        ix = Cl,
        sx = Object.prototype,
        ax = sx.hasOwnProperty;

    function ox(e) {
        var t = this.__data__;
        return ix ? t[e] !== void 0 : ax.call(t, e)
    }
    var cx = ox,
        lx = Cl,
        ux = "__lodash_hash_undefined__";

    function fx(e, t) {
        var r = this.__data__;
        return this.size += this.has(e) ? 0 : 1, r[e] = lx && t === void 0 ? ux : t, this
    }
    var dx = fx,
        hx = zk,
        px = Jk,
        gx = nx,
        mx = cx,
        vx = dx;

    function sa(e) {
        var t = -1,
            r = e == null ? 0 : e.length;
        for (this.clear(); ++t < r;) {
            var n = e[t];
            this.set(n[0], n[1])
        }
    }
    sa.prototype.clear = hx;
    sa.prototype.delete = px;
    sa.prototype.get = gx;
    sa.prototype.has = mx;
    sa.prototype.set = vx;
    var Ex = sa,
        RE = Ex,
        _x = Il,
        yx = xh;

    function bx() {
        this.size = 0, this.__data__ = {
            hash: new RE,
            map: new(yx || _x),
            string: new RE
        }
    }
    var Tx = bx;

    function Sx(e) {
        var t = typeof e;
        return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
    }
    var Ox = Sx,
        Ax = Ox;

    function Ix(e, t) {
        var r = e.__data__;
        return Ax(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map
    }
    var wl = Ix,
        Rx = wl;

    function Cx(e) {
        var t = Rx(this, e).delete(e);
        return this.size -= t ? 1 : 0, t
    }
    var wx = Cx,
        Nx = wl;

    function Lx(e) {
        return Nx(this, e).get(e)
    }
    var $x = Lx,
        Px = wl;

    function Dx(e) {
        return Px(this, e).has(e)
    }
    var Mx = Dx,
        kx = wl;

    function xx(e, t) {
        var r = kx(this, e),
            n = r.size;
        return r.set(e, t), this.size += r.size == n ? 0 : 1, this
    }
    var Ux = xx,
        Fx = Tx,
        Bx = wx,
        Gx = $x,
        Wx = Mx,
        jx = Ux;

    function aa(e) {
        var t = -1,
            r = e == null ? 0 : e.length;
        for (this.clear(); ++t < r;) {
            var n = e[t];
            this.set(n[0], n[1])
        }
    }
    aa.prototype.clear = Fx;
    aa.prototype.delete = Bx;
    aa.prototype.get = Gx;
    aa.prototype.has = Wx;
    aa.prototype.set = jx;
    var dT = aa,
        Hx = Il,
        Kx = xh,
        Vx = dT,
        Yx = 200;

    function qx(e, t) {
        var r = this.__data__;
        if (r instanceof Hx) {
            var n = r.__data__;
            if (!Kx || n.length < Yx - 1) return n.push([e, t]), this.size = ++r.size, this;
            r = this.__data__ = new Vx(n)
        }
        return r.set(e, t), this.size = r.size, this
    }
    var zx = qx,
        Xx = Il,
        Jx = xM,
        Zx = FM,
        Qx = GM,
        e2 = jM,
        t2 = zx;

    function oa(e) {
        var t = this.__data__ = new Xx(e);
        this.size = t.size
    }
    oa.prototype.clear = Jx;
    oa.prototype.delete = Zx;
    oa.prototype.get = Qx;
    oa.prototype.has = e2;
    oa.prototype.set = t2;
    var hT = oa,
        r2 = as,
        n2 = function() {
            try {
                var e = r2(Object, "defineProperty");
                return e({}, "", {}), e
            } catch {}
        }(),
        pT = n2,
        CE = pT;

    function i2(e, t, r) {
        t == "__proto__" && CE ? CE(e, t, {
            configurable: !0,
            enumerable: !0,
            value: r,
            writable: !0
        }) : e[t] = r
    }
    var Uh = i2,
        s2 = Uh,
        a2 = Ol;

    function o2(e, t, r) {
        (r !== void 0 && !a2(e[t], r) || r === void 0 && !(t in e)) && s2(e, t, r)
    }
    var gT = o2;

    function c2(e) {
        return function(t, r, n) {
            for (var s = -1, o = Object(t), c = n(t), u = c.length; u--;) {
                var f = c[e ? u : ++s];
                if (r(o[f], f, o) === !1) break
            }
            return t
        }
    }
    var l2 = c2,
        u2 = l2,
        f2 = u2(),
        d2 = f2,
        qc = {
            exports: {}
        };
    (function(e, t) {
        var r = fn,
            n = t && !t.nodeType && t,
            s = n && !0 && e && !e.nodeType && e,
            o = s && s.exports === n,
            c = o ? r.Buffer : void 0,
            u = c ? c.allocUnsafe : void 0;

        function f(h, g) {
            if (g) return h.slice();
            var _ = h.length,
                b = u ? u(_) : new h.constructor(_);
            return h.copy(b), b
        }
        e.exports = f
    })(qc, qc.exports);
    var h2 = fn,
        p2 = h2.Uint8Array,
        g2 = p2,
        wE = g2;

    function m2(e) {
        var t = new e.constructor(e.byteLength);
        return new wE(t).set(new wE(e)), t
    }
    var Fh = m2,
        v2 = Fh;

    function E2(e, t) {
        var r = t ? v2(e.buffer) : e.buffer;
        return new e.constructor(r, e.byteOffset, e.length)
    }
    var mT = E2;

    function _2(e, t) {
        var r = -1,
            n = e.length;
        for (t || (t = Array(n)); ++r < n;) t[r] = e[r];
        return t
    }
    var vT = _2,
        y2 = dn,
        NE = Object.create,
        b2 = function() {
            function e() {}
            return function(t) {
                if (!y2(t)) return {};
                if (NE) return NE(t);
                e.prototype = t;
                var r = new e;
                return e.prototype = void 0, r
            }
        }(),
        T2 = b2;

    function S2(e, t) {
        return function(r) {
            return e(t(r))
        }
    }
    var ET = S2,
        O2 = ET,
        A2 = O2(Object.getPrototypeOf, Object),
        Bh = A2,
        I2 = Object.prototype;

    function R2(e) {
        var t = e && e.constructor,
            r = typeof t == "function" && t.prototype || I2;
        return e === r
    }
    var Gh = R2,
        C2 = T2,
        w2 = Bh,
        N2 = Gh;

    function L2(e) {
        return typeof e.constructor == "function" && !N2(e) ? C2(w2(e)) : {}
    }
    var _T = L2;

    function $2(e) {
        return e != null && typeof e == "object"
    }
    var _i = $2,
        P2 = ia,
        D2 = _i,
        M2 = "[object Arguments]";

    function k2(e) {
        return D2(e) && P2(e) == M2
    }
    var x2 = k2,
        LE = x2,
        U2 = _i,
        yT = Object.prototype,
        F2 = yT.hasOwnProperty,
        B2 = yT.propertyIsEnumerable,
        G2 = LE(function() {
            return arguments
        }()) ? LE : function(e) {
            return U2(e) && F2.call(e, "callee") && !B2.call(e, "callee")
        },
        bT = G2,
        W2 = Array.isArray,
        yi = W2,
        j2 = 9007199254740991;

    function H2(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= j2
    }
    var TT = H2,
        K2 = kh,
        V2 = TT;

    function Y2(e) {
        return e != null && V2(e.length) && !K2(e)
    }
    var Nl = Y2,
        q2 = Nl,
        z2 = _i;

    function X2(e) {
        return z2(e) && q2(e)
    }
    var J2 = X2,
        eo = {
            exports: {}
        };

    function Z2() {
        return !1
    }
    var Q2 = Z2;
    (function(e, t) {
        var r = fn,
            n = Q2,
            s = t && !t.nodeType && t,
            o = s && !0 && e && !e.nodeType && e,
            c = o && o.exports === s,
            u = c ? r.Buffer : void 0,
            f = u ? u.isBuffer : void 0,
            h = f || n;
        e.exports = h
    })(eo, eo.exports);
    var eU = ia,
        tU = Bh,
        rU = _i,
        nU = "[object Object]",
        iU = Function.prototype,
        sU = Object.prototype,
        ST = iU.toString,
        aU = sU.hasOwnProperty,
        oU = ST.call(Object);

    function cU(e) {
        if (!rU(e) || eU(e) != nU) return !1;
        var t = tU(e);
        if (t === null) return !0;
        var r = aU.call(t, "constructor") && t.constructor;
        return typeof r == "function" && r instanceof r && ST.call(r) == oU
    }
    var lU = cU,
        uU = ia,
        fU = TT,
        dU = _i,
        hU = "[object Arguments]",
        pU = "[object Array]",
        gU = "[object Boolean]",
        mU = "[object Date]",
        vU = "[object Error]",
        EU = "[object Function]",
        _U = "[object Map]",
        yU = "[object Number]",
        bU = "[object Object]",
        TU = "[object RegExp]",
        SU = "[object Set]",
        OU = "[object String]",
        AU = "[object WeakMap]",
        IU = "[object ArrayBuffer]",
        RU = "[object DataView]",
        CU = "[object Float32Array]",
        wU = "[object Float64Array]",
        NU = "[object Int8Array]",
        LU = "[object Int16Array]",
        $U = "[object Int32Array]",
        PU = "[object Uint8Array]",
        DU = "[object Uint8ClampedArray]",
        MU = "[object Uint16Array]",
        kU = "[object Uint32Array]",
        Tt = {};
    Tt[CU] = Tt[wU] = Tt[NU] = Tt[LU] = Tt[$U] = Tt[PU] = Tt[DU] = Tt[MU] = Tt[kU] = !0;
    Tt[hU] = Tt[pU] = Tt[IU] = Tt[gU] = Tt[RU] = Tt[mU] = Tt[vU] = Tt[EU] = Tt[_U] = Tt[yU] = Tt[bU] = Tt[TU] = Tt[SU] = Tt[OU] = Tt[AU] = !1;

    function xU(e) {
        return dU(e) && fU(e.length) && !!Tt[uU(e)]
    }
    var UU = xU;

    function FU(e) {
        return function(t) {
            return e(t)
        }
    }
    var Wh = FU,
        to = {
            exports: {}
        };
    (function(e, t) {
        var r = lT,
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
    })(to, to.exports);
    var BU = UU,
        GU = Wh,
        $E = to.exports,
        PE = $E && $E.isTypedArray,
        WU = PE ? GU(PE) : BU,
        OT = WU;

    function jU(e, t) {
        if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__") return e[t]
    }
    var AT = jU,
        HU = Uh,
        KU = Ol,
        VU = Object.prototype,
        YU = VU.hasOwnProperty;

    function qU(e, t, r) {
        var n = e[t];
        (!(YU.call(e, t) && KU(n, r)) || r === void 0 && !(t in e)) && HU(e, t, r)
    }
    var jh = qU,
        zU = jh,
        XU = Uh;

    function JU(e, t, r, n) {
        var s = !r;
        r || (r = {});
        for (var o = -1, c = t.length; ++o < c;) {
            var u = t[o],
                f = n ? n(r[u], e[u], u, r, e) : void 0;
            f === void 0 && (f = e[u]), s ? XU(r, u, f) : zU(r, u, f)
        }
        return r
    }
    var fo = JU;

    function ZU(e, t) {
        for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
        return n
    }
    var QU = ZU,
        eF = 9007199254740991,
        tF = /^(?:0|[1-9]\d*)$/;

    function rF(e, t) {
        var r = typeof e;
        return t = t == null ? eF : t, !!t && (r == "number" || r != "symbol" && tF.test(e)) && e > -1 && e % 1 == 0 && e < t
    }
    var Hh = rF,
        nF = QU,
        iF = bT,
        sF = yi,
        aF = eo.exports,
        oF = Hh,
        cF = OT,
        lF = Object.prototype,
        uF = lF.hasOwnProperty;

    function fF(e, t) {
        var r = sF(e),
            n = !r && iF(e),
            s = !r && !n && aF(e),
            o = !r && !n && !s && cF(e),
            c = r || n || s || o,
            u = c ? nF(e.length, String) : [],
            f = u.length;
        for (var h in e)(t || uF.call(e, h)) && !(c && (h == "length" || s && (h == "offset" || h == "parent") || o && (h == "buffer" || h == "byteLength" || h == "byteOffset") || oF(h, f))) && u.push(h);
        return u
    }
    var IT = fF;

    function dF(e) {
        var t = [];
        if (e != null)
            for (var r in Object(e)) t.push(r);
        return t
    }
    var hF = dF,
        pF = dn,
        gF = Gh,
        mF = hF,
        vF = Object.prototype,
        EF = vF.hasOwnProperty;

    function _F(e) {
        if (!pF(e)) return mF(e);
        var t = gF(e),
            r = [];
        for (var n in e) n == "constructor" && (t || !EF.call(e, n)) || r.push(n);
        return r
    }
    var yF = _F,
        bF = IT,
        TF = yF,
        SF = Nl;

    function OF(e) {
        return SF(e) ? bF(e, !0) : TF(e)
    }
    var ho = OF,
        AF = fo,
        IF = ho;

    function RF(e) {
        return AF(e, IF(e))
    }
    var CF = RF,
        DE = gT,
        wF = qc.exports,
        NF = mT,
        LF = vT,
        $F = _T,
        ME = bT,
        kE = yi,
        PF = J2,
        DF = eo.exports,
        MF = kh,
        kF = dn,
        xF = lU,
        UF = OT,
        xE = AT,
        FF = CF;

    function BF(e, t, r, n, s, o, c) {
        var u = xE(e, r),
            f = xE(t, r),
            h = c.get(f);
        if (h) {
            DE(e, r, h);
            return
        }
        var g = o ? o(u, f, r + "", e, t, c) : void 0,
            _ = g === void 0;
        if (_) {
            var b = kE(f),
                C = !b && DF(f),
                P = !b && !C && UF(f);
            g = f, b || C || P ? kE(u) ? g = u : PF(u) ? g = LF(u) : C ? (_ = !1, g = wF(f, !0)) : P ? (_ = !1, g = NF(f, !0)) : g = [] : xF(f) || ME(f) ? (g = u, ME(u) ? g = FF(u) : (!kF(u) || MF(u)) && (g = $F(f))) : _ = !1
        }
        _ && (c.set(f, g), s(g, f, n, o, c), c.delete(f)), DE(e, r, g)
    }
    var GF = BF,
        WF = hT,
        jF = gT,
        HF = d2,
        KF = GF,
        VF = dn,
        YF = ho,
        qF = AT;

    function RT(e, t, r, n, s) {
        e !== t && HF(t, function(o, c) {
            if (s || (s = new WF), VF(o)) KF(e, t, c, r, RT, n, s);
            else {
                var u = n ? n(qF(e, c), o, c + "", e, t, s) : void 0;
                u === void 0 && (u = o), jF(e, c, u)
            }
        }, YF)
    }
    var zF = RT;

    function XF(e) {
        return e
    }
    var CT = XF;

    function JF(e, t, r) {
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
    var ZF = JF,
        QF = ZF,
        UE = Math.max;

    function eB(e, t, r) {
        return t = UE(t === void 0 ? e.length - 1 : t, 0),
            function() {
                for (var n = arguments, s = -1, o = UE(n.length - t, 0), c = Array(o); ++s < o;) c[s] = n[t + s];
                s = -1;
                for (var u = Array(t + 1); ++s < t;) u[s] = n[s];
                return u[t] = r(c), QF(e, this, u)
            }
    }
    var tB = eB;

    function rB(e) {
        return function() {
            return e
        }
    }
    var nB = rB,
        iB = nB,
        FE = pT,
        sB = CT,
        aB = FE ? function(e, t) {
            return FE(e, "toString", {
                configurable: !0,
                enumerable: !1,
                value: iB(t),
                writable: !0
            })
        } : sB,
        oB = aB,
        cB = 800,
        lB = 16,
        uB = Date.now;

    function fB(e) {
        var t = 0,
            r = 0;
        return function() {
            var n = uB(),
                s = lB - (n - r);
            if (r = n, s > 0) {
                if (++t >= cB) return arguments[0]
            } else t = 0;
            return e.apply(void 0, arguments)
        }
    }
    var dB = fB,
        hB = oB,
        pB = dB,
        gB = pB(hB),
        mB = gB,
        vB = CT,
        EB = tB,
        _B = mB;

    function yB(e, t) {
        return _B(EB(e, t, vB), e + "")
    }
    var bB = yB,
        TB = Ol,
        SB = Nl,
        OB = Hh,
        AB = dn;

    function IB(e, t, r) {
        if (!AB(r)) return !1;
        var n = typeof t;
        return (n == "number" ? SB(r) && OB(t, r.length) : n == "string" && t in r) ? TB(r[t], e) : !1
    }
    var RB = IB,
        CB = bB,
        wB = RB;

    function NB(e) {
        return CB(function(t, r) {
            var n = -1,
                s = r.length,
                o = s > 1 ? r[s - 1] : void 0,
                c = s > 2 ? r[2] : void 0;
            for (o = e.length > 3 && typeof o == "function" ? (s--, o) : void 0, c && wB(r[0], r[1], c) && (o = s < 3 ? void 0 : o, s = 1), t = Object(t); ++n < s;) {
                var u = r[n];
                u && e(t, u, n, o)
            }
            return t
        })
    }
    var LB = NB,
        $B = zF,
        PB = LB,
        DB = PB(function(e, t, r) {
            $B(e, t, r)
        }),
        MB = DB;
    class xs {
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
            return MB(t[0], ...t)
        }
    }
    ye(xs, "locale"), ye(xs, "supported", ["en", "fr", "it", "de", "es", "es-XL"]);
    const xp = class {
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
            const r = this.sanitizeInput(t).replace(/'/g, "\u2019");
            return this.htmlEscape(r).trim()
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
    let Wt = xp;
    ye(Wt, "queryParams", new URLSearchParams(window.location.search)), ye(Wt, "getQueryParam", t => xp.queryParams.get(t)), ye(Wt, "sleep", t => new Promise(r => {
        window.setTimeout(r, t)
    }));
    class Ct {
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
                namespace: (s = (n = Wt.getQueryParam("namespace")) != null ? n : Wt.getQueryParam("ns")) != null ? s : this.defaultNamespace,
                isDisabled: Wt.queryParams.has("incognito") || Wt.queryParams.has("nc")
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
    ye(Ct, "defaultNamespace", "tv");
    class ro {
        constructor() {
            ye(this, "artifacts");
            this.artifacts = this.list()
        }
        get hasUnviewed() {
            return this.artifacts.some(t => !t.viewed)
        }
        add(t, r) {
            ro.add(t, r), this.artifacts = this.list()
        }
        static add(t, r) {
            if (!Ct.isSupported) return;
            const n = this.isTestArtifact(t) ? "http" : "https",
                s = this.isTestArtifact(t) ? "games-test.jackbox.tv" : "games.jackbox.tv",
                o = `${n}://${s}/artifact/${t.categoryId}/${t.artifactId}/`,
                c = Ct.get("galleries") || "[]";
            try {
                const u = JSON.parse(c) || [];
                if (u.some(f => f.url === o)) return;
                u.unshift({
                    url: o,
                    time: new Date().getTime(),
                    categoryId: t.categoryId,
                    viewed: !1
                }), Ct.set("galleries", JSON.stringify(u.slice(0, 40)))
            } catch {
                console.warn("[Artifacts] Unable to add artifact to local storage")
            }
        }
        remove(t) {
            if (!Ct.isSupported) return;
            const r = Ct.get("galleries") || "[]";
            try {
                const n = JSON.parse(r) || [];
                n.splice(t, 1), Ct.set("galleries", JSON.stringify(n)), this.artifacts = this.list()
            } catch {
                console.warn("[Artifacts] Unable to remove artifact")
            }
        }
        setAsViewed(t) {
            ro.setAsViewed(t), this.artifacts = this.list()
        }
        static setAsViewed(t) {
            if (!Ct.isSupported) return;
            const r = Ct.get("galleries") || "[]";
            try {
                const n = JSON.parse(r) || [];
                n.length && (n[t].viewed = !0), Ct.set("galleries", JSON.stringify(n))
            } catch {
                console.warn(`[Artifacts] Unable to mark artifact ${t} as viewed`)
            }
        }
        static isTestArtifact(t) {
            var r;
            return ((r = t == null ? void 0 : t.rootId) == null ? void 0 : r.indexOf("test")) !== -1
        }
        list() {
            if (!Ct.isSupported) return [];
            const t = new Intl.DateTimeFormat(xs.locale, {
                    year: "numeric",
                    month: "short",
                    day: "numeric"
                }),
                r = Ct.get("galleries") || "[]",
                n = Date.now();
            try {
                return (JSON.parse(r) || []).filter(o => n - o.time < 525600 * 60 * 1e3).map(o => {
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
    var Ad = {
        exports: {}
    };
    (function(e, t) {
        var r = typeof self < "u" ? self : Mt,
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
                    g = ArrayBuffer.isView || function(F) {
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

                function P(F) {
                    this.map = {}, F instanceof P ? F.forEach(function(re, de) {
                        this.append(de, re)
                    }, this) : Array.isArray(F) ? F.forEach(function(re) {
                        this.append(re[0], re[1])
                    }, this) : F && Object.getOwnPropertyNames(F).forEach(function(re) {
                        this.append(re, F[re])
                    }, this)
                }
                P.prototype.append = function(F, re) {
                    F = _(F), re = b(re);
                    var de = this.map[F];
                    this.map[F] = de ? de + ", " + re : re
                }, P.prototype.delete = function(F) {
                    delete this.map[_(F)]
                }, P.prototype.get = function(F) {
                    return F = _(F), this.has(F) ? this.map[F] : null
                }, P.prototype.has = function(F) {
                    return this.map.hasOwnProperty(_(F))
                }, P.prototype.set = function(F, re) {
                    this.map[_(F)] = b(re)
                }, P.prototype.forEach = function(F, re) {
                    for (var de in this.map) this.map.hasOwnProperty(de) && F.call(re, this.map[de], de, this)
                }, P.prototype.keys = function() {
                    var F = [];
                    return this.forEach(function(re, de) {
                        F.push(de)
                    }), C(F)
                }, P.prototype.values = function() {
                    var F = [];
                    return this.forEach(function(re) {
                        F.push(re)
                    }), C(F)
                }, P.prototype.entries = function() {
                    var F = [];
                    return this.forEach(function(re, de) {
                        F.push([de, re])
                    }), C(F)
                }, u.iterable && (P.prototype[Symbol.iterator] = P.prototype.entries);

                function x(F) {
                    if (F.bodyUsed) return Promise.reject(new TypeError("Already read"));
                    F.bodyUsed = !0
                }

                function U(F) {
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
                        de = U(re);
                    return re.readAsArrayBuffer(F), de
                }

                function H(F) {
                    var re = new FileReader,
                        de = U(re);
                    return re.readAsText(F), de
                }

                function Y(F) {
                    for (var re = new Uint8Array(F), de = new Array(re.length), _e = 0; _e < re.length; _e++) de[_e] = String.fromCharCode(re[_e]);
                    return de.join("")
                }

                function W(F) {
                    if (F.slice) return F.slice(0);
                    var re = new Uint8Array(F.byteLength);
                    return re.set(new Uint8Array(F)), re.buffer
                }

                function G() {
                    return this.bodyUsed = !1, this._initBody = function(F) {
                        this._bodyInit = F, F ? typeof F == "string" ? this._bodyText = F : u.blob && Blob.prototype.isPrototypeOf(F) ? this._bodyBlob = F : u.formData && FormData.prototype.isPrototypeOf(F) ? this._bodyFormData = F : u.searchParams && URLSearchParams.prototype.isPrototypeOf(F) ? this._bodyText = F.toString() : u.arrayBuffer && u.blob && f(F) ? (this._bodyArrayBuffer = W(F.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : u.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(F) || g(F)) ? this._bodyArrayBuffer = W(F) : this._bodyText = F = Object.prototype.toString.call(F) : this._bodyText = "", this.headers.get("content-type") || (typeof F == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : u.searchParams && URLSearchParams.prototype.isPrototypeOf(F) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                    }, u.blob && (this.blob = function() {
                        var F = x(this);
                        if (F) return F;
                        if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                        if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                        if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                        return Promise.resolve(new Blob([this._bodyText]))
                    }, this.arrayBuffer = function() {
                        return this._bodyArrayBuffer ? x(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(I)
                    }), this.text = function() {
                        var F = x(this);
                        if (F) return F;
                        if (this._bodyBlob) return H(this._bodyBlob);
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

                function ae(F) {
                    var re = F.toUpperCase();
                    return z.indexOf(re) > -1 ? re : F
                }

                function ce(F, re) {
                    re = re || {};
                    var de = re.body;
                    if (F instanceof ce) {
                        if (F.bodyUsed) throw new TypeError("Already read");
                        this.url = F.url, this.credentials = F.credentials, re.headers || (this.headers = new P(F.headers)), this.method = F.method, this.mode = F.mode, this.signal = F.signal, !de && F._bodyInit != null && (de = F._bodyInit, F.bodyUsed = !0)
                    } else this.url = String(F);
                    if (this.credentials = re.credentials || this.credentials || "same-origin", (re.headers || !this.headers) && (this.headers = new P(re.headers)), this.method = ae(re.method || this.method || "GET"), this.mode = re.mode || this.mode || null, this.signal = re.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && de) throw new TypeError("Body not allowed for GET or HEAD requests");
                    this._initBody(de)
                }
                ce.prototype.clone = function() {
                    return new ce(this, {
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

                function Re(F) {
                    var re = new P,
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
                G.call(ce.prototype);

                function Ie(F, re) {
                    re || (re = {}), this.type = "default", this.status = re.status === void 0 ? 200 : re.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in re ? re.statusText : "OK", this.headers = new P(re.headers), this.url = re.url || "", this._initBody(F)
                }
                G.call(Ie.prototype), Ie.prototype.clone = function() {
                    return new Ie(this._bodyInit, {
                        status: this.status,
                        statusText: this.statusText,
                        headers: new P(this.headers),
                        url: this.url
                    })
                }, Ie.error = function() {
                    var F = new Ie(null, {
                        status: 0,
                        statusText: ""
                    });
                    return F.type = "error", F
                };
                var fe = [301, 302, 303, 307, 308];
                Ie.redirect = function(F, re) {
                    if (fe.indexOf(re) === -1) throw new RangeError("Invalid status code");
                    return new Ie(null, {
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

                function Ae(F, re) {
                    return new Promise(function(de, _e) {
                        var me = new ce(F, re);
                        if (me.signal && me.signal.aborted) return _e(new c.DOMException("Aborted", "AbortError"));
                        var Se = new XMLHttpRequest;

                        function Me() {
                            Se.abort()
                        }
                        Se.onload = function() {
                            var Fe = {
                                status: Se.status,
                                statusText: Se.statusText,
                                headers: Re(Se.getAllResponseHeaders() || "")
                            };
                            Fe.url = "responseURL" in Se ? Se.responseURL : Fe.headers.get("X-Request-URL");
                            var et = "response" in Se ? Se.response : Se.responseText;
                            de(new Ie(et, Fe))
                        }, Se.onerror = function() {
                            _e(new TypeError("Network request failed"))
                        }, Se.ontimeout = function() {
                            _e(new TypeError("Network request failed"))
                        }, Se.onabort = function() {
                            _e(new c.DOMException("Aborted", "AbortError"))
                        }, Se.open(me.method, me.url, !0), me.credentials === "include" ? Se.withCredentials = !0 : me.credentials === "omit" && (Se.withCredentials = !1), "responseType" in Se && u.blob && (Se.responseType = "blob"), me.headers.forEach(function(Fe, et) {
                            Se.setRequestHeader(et, Fe)
                        }), me.signal && (me.signal.addEventListener("abort", Me), Se.onreadystatechange = function() {
                            Se.readyState === 4 && me.signal.removeEventListener("abort", Me)
                        }), Se.send(typeof me._bodyInit > "u" ? null : me._bodyInit)
                    })
                }
                return Ae.polyfill = !0, o.fetch || (o.fetch = Ae, o.Headers = P, o.Request = ce, o.Response = Ie), c.Headers = P, c.Request = ce, c.Response = Ie, c.fetch = Ae, Object.defineProperty(c, "__esModule", {
                    value: !0
                }), c
            })({})
        })(n), n.fetch.ponyfill = !0, delete n.fetch.polyfill;
        var s = n;
        t = s.fetch, t.default = s.fetch, t.fetch = s.fetch, t.Headers = s.Headers, t.Request = s.Request, t.Response = s.Response, e.exports = t
    })(Ad, Ad.exports);
    var kB = function() {
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
        BE = typeof Symbol < "u" && Symbol,
        xB = kB,
        UB = function() {
            return typeof BE != "function" || typeof Symbol != "function" || typeof BE("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : xB()
        },
        FB = "Function.prototype.bind called on incompatible ",
        mf = Array.prototype.slice,
        BB = Object.prototype.toString,
        GB = "[object Function]",
        WB = function(t) {
            var r = this;
            if (typeof r != "function" || BB.call(r) !== GB) throw new TypeError(FB + r);
            for (var n = mf.call(arguments, 1), s, o = function() {
                    if (this instanceof s) {
                        var g = r.apply(this, n.concat(mf.call(arguments)));
                        return Object(g) === g ? g : this
                    } else return r.apply(t, n.concat(mf.call(arguments)))
                }, c = Math.max(0, r.length - n.length), u = [], f = 0; f < c; f++) u.push("$" + f);
            if (s = Function("binder", "return function (" + u.join(",") + "){ return binder.apply(this,arguments); }")(o), r.prototype) {
                var h = function() {};
                h.prototype = r.prototype, s.prototype = new h, h.prototype = null
            }
            return s
        },
        jB = WB,
        Kh = Function.prototype.bind || jB,
        HB = Kh,
        KB = HB.call(Function.call, Object.prototype.hasOwnProperty),
        Ze, qs = SyntaxError,
        wT = Function,
        Us = TypeError,
        vf = function(e) {
            try {
                return wT('"use strict"; return (' + e + ").constructor;")()
            } catch {}
        },
        ts = Object.getOwnPropertyDescriptor;
    if (ts) try {
        ts({}, "")
    } catch {
        ts = null
    }
    var Ef = function() {
            throw new Us
        },
        VB = ts ? function() {
            try {
                return arguments.callee, Ef
            } catch {
                try {
                    return ts(arguments, "callee").get
                } catch {
                    return Ef
                }
            }
        }() : Ef,
        Ss = UB(),
        ii = Object.getPrototypeOf || function(e) {
            return e.__proto__
        },
        Rs = {},
        YB = typeof Uint8Array > "u" ? Ze : ii(Uint8Array),
        Fs = {
            "%AggregateError%": typeof AggregateError > "u" ? Ze : AggregateError,
            "%Array%": Array,
            "%ArrayBuffer%": typeof ArrayBuffer > "u" ? Ze : ArrayBuffer,
            "%ArrayIteratorPrototype%": Ss ? ii([][Symbol.iterator]()) : Ze,
            "%AsyncFromSyncIteratorPrototype%": Ze,
            "%AsyncFunction%": Rs,
            "%AsyncGenerator%": Rs,
            "%AsyncGeneratorFunction%": Rs,
            "%AsyncIteratorPrototype%": Rs,
            "%Atomics%": typeof Atomics > "u" ? Ze : Atomics,
            "%BigInt%": typeof BigInt > "u" ? Ze : BigInt,
            "%Boolean%": Boolean,
            "%DataView%": typeof DataView > "u" ? Ze : DataView,
            "%Date%": Date,
            "%decodeURI%": decodeURI,
            "%decodeURIComponent%": decodeURIComponent,
            "%encodeURI%": encodeURI,
            "%encodeURIComponent%": encodeURIComponent,
            "%Error%": Error,
            "%eval%": eval,
            "%EvalError%": EvalError,
            "%Float32Array%": typeof Float32Array > "u" ? Ze : Float32Array,
            "%Float64Array%": typeof Float64Array > "u" ? Ze : Float64Array,
            "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? Ze : FinalizationRegistry,
            "%Function%": wT,
            "%GeneratorFunction%": Rs,
            "%Int8Array%": typeof Int8Array > "u" ? Ze : Int8Array,
            "%Int16Array%": typeof Int16Array > "u" ? Ze : Int16Array,
            "%Int32Array%": typeof Int32Array > "u" ? Ze : Int32Array,
            "%isFinite%": isFinite,
            "%isNaN%": isNaN,
            "%IteratorPrototype%": Ss ? ii(ii([][Symbol.iterator]())) : Ze,
            "%JSON%": typeof JSON == "object" ? JSON : Ze,
            "%Map%": typeof Map > "u" ? Ze : Map,
            "%MapIteratorPrototype%": typeof Map > "u" || !Ss ? Ze : ii(new Map()[Symbol.iterator]()),
            "%Math%": Math,
            "%Number%": Number,
            "%Object%": Object,
            "%parseFloat%": parseFloat,
            "%parseInt%": parseInt,
            "%Promise%": typeof Promise > "u" ? Ze : Promise,
            "%Proxy%": typeof Proxy > "u" ? Ze : Proxy,
            "%RangeError%": RangeError,
            "%ReferenceError%": ReferenceError,
            "%Reflect%": typeof Reflect > "u" ? Ze : Reflect,
            "%RegExp%": RegExp,
            "%Set%": typeof Set > "u" ? Ze : Set,
            "%SetIteratorPrototype%": typeof Set > "u" || !Ss ? Ze : ii(new Set()[Symbol.iterator]()),
            "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? Ze : SharedArrayBuffer,
            "%String%": String,
            "%StringIteratorPrototype%": Ss ? ii("" [Symbol.iterator]()) : Ze,
            "%Symbol%": Ss ? Symbol : Ze,
            "%SyntaxError%": qs,
            "%ThrowTypeError%": VB,
            "%TypedArray%": YB,
            "%TypeError%": Us,
            "%Uint8Array%": typeof Uint8Array > "u" ? Ze : Uint8Array,
            "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? Ze : Uint8ClampedArray,
            "%Uint16Array%": typeof Uint16Array > "u" ? Ze : Uint16Array,
            "%Uint32Array%": typeof Uint32Array > "u" ? Ze : Uint32Array,
            "%URIError%": URIError,
            "%WeakMap%": typeof WeakMap > "u" ? Ze : WeakMap,
            "%WeakRef%": typeof WeakRef > "u" ? Ze : WeakRef,
            "%WeakSet%": typeof WeakSet > "u" ? Ze : WeakSet
        },
        qB = function e(t) {
            var r;
            if (t === "%AsyncFunction%") r = vf("async function () {}");
            else if (t === "%GeneratorFunction%") r = vf("function* () {}");
            else if (t === "%AsyncGeneratorFunction%") r = vf("async function* () {}");
            else if (t === "%AsyncGenerator%") {
                var n = e("%AsyncGeneratorFunction%");
                n && (r = n.prototype)
            } else if (t === "%AsyncIteratorPrototype%") {
                var s = e("%AsyncGenerator%");
                s && (r = ii(s.prototype))
            }
            return Fs[t] = r, r
        },
        GE = {
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
        po = Kh,
        zc = KB,
        zB = po.call(Function.call, Array.prototype.concat),
        XB = po.call(Function.apply, Array.prototype.splice),
        WE = po.call(Function.call, String.prototype.replace),
        Xc = po.call(Function.call, String.prototype.slice),
        JB = po.call(Function.call, RegExp.prototype.exec),
        ZB = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
        QB = /\\(\\)?/g,
        eG = function(t) {
            var r = Xc(t, 0, 1),
                n = Xc(t, -1);
            if (r === "%" && n !== "%") throw new qs("invalid intrinsic syntax, expected closing `%`");
            if (n === "%" && r !== "%") throw new qs("invalid intrinsic syntax, expected opening `%`");
            var s = [];
            return WE(t, ZB, function(o, c, u, f) {
                s[s.length] = u ? WE(f, QB, "$1") : c || o
            }), s
        },
        tG = function(t, r) {
            var n = t,
                s;
            if (zc(GE, n) && (s = GE[n], n = "%" + s[0] + "%"), zc(Fs, n)) {
                var o = Fs[n];
                if (o === Rs && (o = qB(n)), typeof o > "u" && !r) throw new Us("intrinsic " + t + " exists, but is not available. Please file an issue!");
                return {
                    alias: s,
                    name: n,
                    value: o
                }
            }
            throw new qs("intrinsic " + t + " does not exist!")
        },
        Vh = function(t, r) {
            if (typeof t != "string" || t.length === 0) throw new Us("intrinsic name must be a non-empty string");
            if (arguments.length > 1 && typeof r != "boolean") throw new Us('"allowMissing" argument must be a boolean');
            if (JB(/^%?[^%]*%?$/g, t) === null) throw new qs("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
            var n = eG(t),
                s = n.length > 0 ? n[0] : "",
                o = tG("%" + s + "%", r),
                c = o.name,
                u = o.value,
                f = !1,
                h = o.alias;
            h && (s = h[0], XB(n, zB([0, 1], h)));
            for (var g = 1, _ = !0; g < n.length; g += 1) {
                var b = n[g],
                    C = Xc(b, 0, 1),
                    P = Xc(b, -1);
                if ((C === '"' || C === "'" || C === "`" || P === '"' || P === "'" || P === "`") && C !== P) throw new qs("property names with quotes must have matching quotes");
                if ((b === "constructor" || !_) && (f = !0), s += "." + b, c = "%" + s + "%", zc(Fs, c)) u = Fs[c];
                else if (u != null) {
                    if (!(b in u)) {
                        if (!r) throw new Us("base intrinsic for " + t + " exists, but the property is not available.");
                        return
                    }
                    if (ts && g + 1 >= n.length) {
                        var x = ts(u, b);
                        _ = !!x, _ && "get" in x && !("originalValue" in x.get) ? u = x.get : u = u[b]
                    } else _ = zc(u, b), u = u[b];
                    _ && !f && (Fs[c] = u)
                }
            }
            return u
        },
        NT = {
            exports: {}
        };
    (function(e) {
        var t = Kh,
            r = Vh,
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
        e.exports = function(_) {
            var b = o(t, s, arguments);
            if (c && u) {
                var C = c(b, "length");
                C.configurable && u(b, "length", {
                    value: 1 + f(0, _.length - (arguments.length - 1))
                })
            }
            return b
        };
        var h = function() {
            return o(t, n, arguments)
        };
        u ? u(e.exports, "apply", {
            value: h
        }) : e.exports.apply = h
    })(NT);
    var LT = Vh,
        $T = NT.exports,
        rG = $T(LT("String.prototype.indexOf")),
        nG = function(t, r) {
            var n = LT(t, !!r);
            return typeof n == "function" && rG(t, ".prototype.") > -1 ? $T(n) : n
        };
    const iG = {},
        sG = Object.freeze(Object.defineProperty({
            __proto__: null,
            default: iG
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        aG = uM(sG);
    var Yh = typeof Map == "function" && Map.prototype,
        _f = Object.getOwnPropertyDescriptor && Yh ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null,
        Jc = Yh && _f && typeof _f.get == "function" ? _f.get : null,
        oG = Yh && Map.prototype.forEach,
        qh = typeof Set == "function" && Set.prototype,
        yf = Object.getOwnPropertyDescriptor && qh ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null,
        Zc = qh && yf && typeof yf.get == "function" ? yf.get : null,
        cG = qh && Set.prototype.forEach,
        lG = typeof WeakMap == "function" && WeakMap.prototype,
        Ua = lG ? WeakMap.prototype.has : null,
        uG = typeof WeakSet == "function" && WeakSet.prototype,
        Fa = uG ? WeakSet.prototype.has : null,
        fG = typeof WeakRef == "function" && WeakRef.prototype,
        jE = fG ? WeakRef.prototype.deref : null,
        dG = Boolean.prototype.valueOf,
        hG = Object.prototype.toString,
        pG = Function.prototype.toString,
        gG = String.prototype.match,
        zh = String.prototype.slice,
        oi = String.prototype.replace,
        mG = String.prototype.toUpperCase,
        HE = String.prototype.toLowerCase,
        PT = RegExp.prototype.test,
        KE = Array.prototype.concat,
        Tn = Array.prototype.join,
        vG = Array.prototype.slice,
        VE = Math.floor,
        Id = typeof BigInt == "function" ? BigInt.prototype.valueOf : null,
        bf = Object.getOwnPropertySymbols,
        Rd = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null,
        zs = typeof Symbol == "function" && typeof Symbol.iterator == "object",
        ur = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === zs ? "object" : "symbol") ? Symbol.toStringTag : null,
        DT = Object.prototype.propertyIsEnumerable,
        YE = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(e) {
            return e.__proto__
        } : null);

    function qE(e, t) {
        if (e === 1 / 0 || e === -1 / 0 || e !== e || e && e > -1e3 && e < 1e3 || PT.call(/e/, t)) return t;
        var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
        if (typeof e == "number") {
            var n = e < 0 ? -VE(-e) : VE(e);
            if (n !== e) {
                var s = String(n),
                    o = zh.call(t, s.length + 1);
                return oi.call(s, r, "$&_") + "." + oi.call(oi.call(o, /([0-9]{3})/g, "$&_"), /_$/, "")
            }
        }
        return oi.call(t, r, "$&_")
    }
    var Cd = aG,
        zE = Cd.custom,
        XE = kT(zE) ? zE : null,
        EG = function e(t, r, n, s) {
            var o = r || {};
            if (si(o, "quoteStyle") && o.quoteStyle !== "single" && o.quoteStyle !== "double") throw new TypeError('option "quoteStyle" must be "single" or "double"');
            if (si(o, "maxStringLength") && (typeof o.maxStringLength == "number" ? o.maxStringLength < 0 && o.maxStringLength !== 1 / 0 : o.maxStringLength !== null)) throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
            var c = si(o, "customInspect") ? o.customInspect : !0;
            if (typeof c != "boolean" && c !== "symbol") throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
            if (si(o, "indent") && o.indent !== null && o.indent !== "	" && !(parseInt(o.indent, 10) === o.indent && o.indent > 0)) throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
            if (si(o, "numericSeparator") && typeof o.numericSeparator != "boolean") throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
            var u = o.numericSeparator;
            if (typeof t > "u") return "undefined";
            if (t === null) return "null";
            if (typeof t == "boolean") return t ? "true" : "false";
            if (typeof t == "string") return UT(t, o);
            if (typeof t == "number") {
                if (t === 0) return 1 / 0 / t > 0 ? "0" : "-0";
                var f = String(t);
                return u ? qE(t, f) : f
            }
            if (typeof t == "bigint") {
                var h = String(t) + "n";
                return u ? qE(t, h) : h
            }
            var g = typeof o.depth > "u" ? 5 : o.depth;
            if (typeof n > "u" && (n = 0), n >= g && g > 0 && typeof t == "object") return wd(t) ? "[Array]" : "[Object]";
            var _ = kG(o, n);
            if (typeof s > "u") s = [];
            else if (xT(s, t) >= 0) return "[Circular]";

            function b(Ae, F, re) {
                if (F && (s = vG.call(s), s.push(F)), re) {
                    var de = {
                        depth: o.depth
                    };
                    return si(o, "quoteStyle") && (de.quoteStyle = o.quoteStyle), e(Ae, de, n + 1, s)
                }
                return e(Ae, o, n + 1, s)
            }
            if (typeof t == "function" && !JE(t)) {
                var C = RG(t),
                    P = _c(t, b);
                return "[Function" + (C ? ": " + C : " (anonymous)") + "]" + (P.length > 0 ? " { " + Tn.call(P, ", ") + " }" : "")
            }
            if (kT(t)) {
                var x = zs ? oi.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : Rd.call(t);
                return typeof t == "object" && !zs ? La(x) : x
            }
            if (PG(t)) {
                for (var U = "<" + HE.call(String(t.nodeName)), I = t.attributes || [], H = 0; H < I.length; H++) U += " " + I[H].name + "=" + MT(_G(I[H].value), "double", o);
                return U += ">", t.childNodes && t.childNodes.length && (U += "..."), U += "</" + HE.call(String(t.nodeName)) + ">", U
            }
            if (wd(t)) {
                if (t.length === 0) return "[]";
                var Y = _c(t, b);
                return _ && !MG(Y) ? "[" + Nd(Y, _) + "]" : "[ " + Tn.call(Y, ", ") + " ]"
            }
            if (bG(t)) {
                var W = _c(t, b);
                return !("cause" in Error.prototype) && "cause" in t && !DT.call(t, "cause") ? "{ [" + String(t) + "] " + Tn.call(KE.call("[cause]: " + b(t.cause), W), ", ") + " }" : W.length === 0 ? "[" + String(t) + "]" : "{ [" + String(t) + "] " + Tn.call(W, ", ") + " }"
            }
            if (typeof t == "object" && c) {
                if (XE && typeof t[XE] == "function" && Cd) return Cd(t, {
                    depth: g - n
                });
                if (c !== "symbol" && typeof t.inspect == "function") return t.inspect()
            }
            if (CG(t)) {
                var G = [];
                return oG.call(t, function(Ae, F) {
                    G.push(b(F, t, !0) + " => " + b(Ae, t))
                }), ZE("Map", Jc.call(t), G, _)
            }
            if (LG(t)) {
                var z = [];
                return cG.call(t, function(Ae) {
                    z.push(b(Ae, t))
                }), ZE("Set", Zc.call(t), z, _)
            }
            if (wG(t)) return Tf("WeakMap");
            if ($G(t)) return Tf("WeakSet");
            if (NG(t)) return Tf("WeakRef");
            if (SG(t)) return La(b(Number(t)));
            if (AG(t)) return La(b(Id.call(t)));
            if (OG(t)) return La(dG.call(t));
            if (TG(t)) return La(b(String(t)));
            if (!yG(t) && !JE(t)) {
                var ae = _c(t, b),
                    ce = YE ? YE(t) === Object.prototype : t instanceof Object || t.constructor === Object,
                    ue = t instanceof Object ? "" : "null prototype",
                    Re = !ce && ur && Object(t) === t && ur in t ? zh.call(bi(t), 8, -1) : ue ? "Object" : "",
                    Ie = ce || typeof t.constructor != "function" ? "" : t.constructor.name ? t.constructor.name + " " : "",
                    fe = Ie + (Re || ue ? "[" + Tn.call(KE.call([], Re || [], ue || []), ": ") + "] " : "");
                return ae.length === 0 ? fe + "{}" : _ ? fe + "{" + Nd(ae, _) + "}" : fe + "{ " + Tn.call(ae, ", ") + " }"
            }
            return String(t)
        };

    function MT(e, t, r) {
        var n = (r.quoteStyle || t) === "double" ? '"' : "'";
        return n + e + n
    }

    function _G(e) {
        return oi.call(String(e), /"/g, "&quot;")
    }

    function wd(e) {
        return bi(e) === "[object Array]" && (!ur || !(typeof e == "object" && ur in e))
    }

    function yG(e) {
        return bi(e) === "[object Date]" && (!ur || !(typeof e == "object" && ur in e))
    }

    function JE(e) {
        return bi(e) === "[object RegExp]" && (!ur || !(typeof e == "object" && ur in e))
    }

    function bG(e) {
        return bi(e) === "[object Error]" && (!ur || !(typeof e == "object" && ur in e))
    }

    function TG(e) {
        return bi(e) === "[object String]" && (!ur || !(typeof e == "object" && ur in e))
    }

    function SG(e) {
        return bi(e) === "[object Number]" && (!ur || !(typeof e == "object" && ur in e))
    }

    function OG(e) {
        return bi(e) === "[object Boolean]" && (!ur || !(typeof e == "object" && ur in e))
    }

    function kT(e) {
        if (zs) return e && typeof e == "object" && e instanceof Symbol;
        if (typeof e == "symbol") return !0;
        if (!e || typeof e != "object" || !Rd) return !1;
        try {
            return Rd.call(e), !0
        } catch {}
        return !1
    }

    function AG(e) {
        if (!e || typeof e != "object" || !Id) return !1;
        try {
            return Id.call(e), !0
        } catch {}
        return !1
    }
    var IG = Object.prototype.hasOwnProperty || function(e) {
        return e in this
    };

    function si(e, t) {
        return IG.call(e, t)
    }

    function bi(e) {
        return hG.call(e)
    }

    function RG(e) {
        if (e.name) return e.name;
        var t = gG.call(pG.call(e), /^function\s*([\w$]+)/);
        return t ? t[1] : null
    }

    function xT(e, t) {
        if (e.indexOf) return e.indexOf(t);
        for (var r = 0, n = e.length; r < n; r++)
            if (e[r] === t) return r;
        return -1
    }

    function CG(e) {
        if (!Jc || !e || typeof e != "object") return !1;
        try {
            Jc.call(e);
            try {
                Zc.call(e)
            } catch {
                return !0
            }
            return e instanceof Map
        } catch {}
        return !1
    }

    function wG(e) {
        if (!Ua || !e || typeof e != "object") return !1;
        try {
            Ua.call(e, Ua);
            try {
                Fa.call(e, Fa)
            } catch {
                return !0
            }
            return e instanceof WeakMap
        } catch {}
        return !1
    }

    function NG(e) {
        if (!jE || !e || typeof e != "object") return !1;
        try {
            return jE.call(e), !0
        } catch {}
        return !1
    }

    function LG(e) {
        if (!Zc || !e || typeof e != "object") return !1;
        try {
            Zc.call(e);
            try {
                Jc.call(e)
            } catch {
                return !0
            }
            return e instanceof Set
        } catch {}
        return !1
    }

    function $G(e) {
        if (!Fa || !e || typeof e != "object") return !1;
        try {
            Fa.call(e, Fa);
            try {
                Ua.call(e, Ua)
            } catch {
                return !0
            }
            return e instanceof WeakSet
        } catch {}
        return !1
    }

    function PG(e) {
        return !e || typeof e != "object" ? !1 : typeof HTMLElement < "u" && e instanceof HTMLElement ? !0 : typeof e.nodeName == "string" && typeof e.getAttribute == "function"
    }

    function UT(e, t) {
        if (e.length > t.maxStringLength) {
            var r = e.length - t.maxStringLength,
                n = "... " + r + " more character" + (r > 1 ? "s" : "");
            return UT(zh.call(e, 0, t.maxStringLength), t) + n
        }
        var s = oi.call(oi.call(e, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, DG);
        return MT(s, "single", t)
    }

    function DG(e) {
        var t = e.charCodeAt(0),
            r = {
                8: "b",
                9: "t",
                10: "n",
                12: "f",
                13: "r"
            } [t];
        return r ? "\\" + r : "\\x" + (t < 16 ? "0" : "") + mG.call(t.toString(16))
    }

    function La(e) {
        return "Object(" + e + ")"
    }

    function Tf(e) {
        return e + " { ? }"
    }

    function ZE(e, t, r, n) {
        var s = n ? Nd(r, n) : Tn.call(r, ", ");
        return e + " (" + t + ") {" + s + "}"
    }

    function MG(e) {
        for (var t = 0; t < e.length; t++)
            if (xT(e[t], `
`) >= 0) return !1;
        return !0
    }

    function kG(e, t) {
        var r;
        if (e.indent === "	") r = "	";
        else if (typeof e.indent == "number" && e.indent > 0) r = Tn.call(Array(e.indent + 1), " ");
        else return null;
        return {
            base: r,
            prev: Tn.call(Array(t + 1), r)
        }
    }

    function Nd(e, t) {
        if (e.length === 0) return "";
        var r = `
` + t.prev + t.base;
        return r + Tn.call(e, "," + r) + `
` + t.prev
    }

    function _c(e, t) {
        var r = wd(e),
            n = [];
        if (r) {
            n.length = e.length;
            for (var s = 0; s < e.length; s++) n[s] = si(e, s) ? t(e[s], e) : ""
        }
        var o = typeof bf == "function" ? bf(e) : [],
            c;
        if (zs) {
            c = {};
            for (var u = 0; u < o.length; u++) c["$" + o[u]] = o[u]
        }
        for (var f in e) !si(e, f) || r && String(Number(f)) === f && f < e.length || zs && c["$" + f] instanceof Symbol || (PT.call(/[^\w$]/, f) ? n.push(t(f, e) + ": " + t(e[f], e)) : n.push(f + ": " + t(e[f], e)));
        if (typeof bf == "function")
            for (var h = 0; h < o.length; h++) DT.call(e, o[h]) && n.push("[" + t(o[h]) + "]: " + t(e[o[h]], e));
        return n
    }
    var Xh = Vh,
        ca = nG,
        xG = EG,
        UG = Xh("%TypeError%"),
        yc = Xh("%WeakMap%", !0),
        bc = Xh("%Map%", !0),
        FG = ca("WeakMap.prototype.get", !0),
        BG = ca("WeakMap.prototype.set", !0),
        GG = ca("WeakMap.prototype.has", !0),
        WG = ca("Map.prototype.get", !0),
        jG = ca("Map.prototype.set", !0),
        HG = ca("Map.prototype.has", !0),
        Jh = function(e, t) {
            for (var r = e, n;
                (n = r.next) !== null; r = n)
                if (n.key === t) return r.next = n.next, n.next = e.next, e.next = n, n
        },
        KG = function(e, t) {
            var r = Jh(e, t);
            return r && r.value
        },
        VG = function(e, t, r) {
            var n = Jh(e, t);
            n ? n.value = r : e.next = {
                key: t,
                next: e.next,
                value: r
            }
        },
        YG = function(e, t) {
            return !!Jh(e, t)
        },
        qG = function() {
            var t, r, n, s = {
                assert: function(o) {
                    if (!s.has(o)) throw new UG("Side channel does not contain " + xG(o))
                },
                get: function(o) {
                    if (yc && o && (typeof o == "object" || typeof o == "function")) {
                        if (t) return FG(t, o)
                    } else if (bc) {
                        if (r) return WG(r, o)
                    } else if (n) return KG(n, o)
                },
                has: function(o) {
                    if (yc && o && (typeof o == "object" || typeof o == "function")) {
                        if (t) return GG(t, o)
                    } else if (bc) {
                        if (r) return HG(r, o)
                    } else if (n) return YG(n, o);
                    return !1
                },
                set: function(o, c) {
                    yc && o && (typeof o == "object" || typeof o == "function") ? (t || (t = new yc), BG(t, o, c)) : bc ? (r || (r = new bc), jG(r, o, c)) : (n || (n = {
                        key: {},
                        next: null
                    }), VG(n, o, c))
                }
            };
            return s
        },
        zG = String.prototype.replace,
        XG = /%20/g,
        Sf = {
            RFC1738: "RFC1738",
            RFC3986: "RFC3986"
        },
        Zh = {
            default: Sf.RFC3986,
            formatters: {
                RFC1738: function(e) {
                    return zG.call(e, XG, "+")
                },
                RFC3986: function(e) {
                    return String(e)
                }
            },
            RFC1738: Sf.RFC1738,
            RFC3986: Sf.RFC3986
        },
        JG = Zh,
        Of = Object.prototype.hasOwnProperty,
        qi = Array.isArray,
        En = function() {
            for (var e = [], t = 0; t < 256; ++t) e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
            return e
        }(),
        ZG = function(t) {
            for (; t.length > 1;) {
                var r = t.pop(),
                    n = r.obj[r.prop];
                if (qi(n)) {
                    for (var s = [], o = 0; o < n.length; ++o) typeof n[o] < "u" && s.push(n[o]);
                    r.obj[r.prop] = s
                }
            }
        },
        FT = function(t, r) {
            for (var n = r && r.plainObjects ? Object.create(null) : {}, s = 0; s < t.length; ++s) typeof t[s] < "u" && (n[s] = t[s]);
            return n
        },
        QG = function e(t, r, n) {
            if (!r) return t;
            if (typeof r != "object") {
                if (qi(t)) t.push(r);
                else if (t && typeof t == "object")(n && (n.plainObjects || n.allowPrototypes) || !Of.call(Object.prototype, r)) && (t[r] = !0);
                else return [t, r];
                return t
            }
            if (!t || typeof t != "object") return [t].concat(r);
            var s = t;
            return qi(t) && !qi(r) && (s = FT(t, n)), qi(t) && qi(r) ? (r.forEach(function(o, c) {
                if (Of.call(t, c)) {
                    var u = t[c];
                    u && typeof u == "object" && o && typeof o == "object" ? t[c] = e(u, o, n) : t.push(o)
                } else t[c] = o
            }), t) : Object.keys(r).reduce(function(o, c) {
                var u = r[c];
                return Of.call(o, c) ? o[c] = e(o[c], u, n) : o[c] = u, o
            }, s)
        },
        e3 = function(t, r) {
            return Object.keys(r).reduce(function(n, s) {
                return n[s] = r[s], n
            }, t)
        },
        t3 = function(e, t, r) {
            var n = e.replace(/\+/g, " ");
            if (r === "iso-8859-1") return n.replace(/%[0-9a-f]{2}/gi, unescape);
            try {
                return decodeURIComponent(n)
            } catch {
                return n
            }
        },
        r3 = function(t, r, n, s, o) {
            if (t.length === 0) return t;
            var c = t;
            if (typeof t == "symbol" ? c = Symbol.prototype.toString.call(t) : typeof t != "string" && (c = String(t)), n === "iso-8859-1") return escape(c).replace(/%u[0-9a-f]{4}/gi, function(g) {
                return "%26%23" + parseInt(g.slice(2), 16) + "%3B"
            });
            for (var u = "", f = 0; f < c.length; ++f) {
                var h = c.charCodeAt(f);
                if (h === 45 || h === 46 || h === 95 || h === 126 || h >= 48 && h <= 57 || h >= 65 && h <= 90 || h >= 97 && h <= 122 || o === JG.RFC1738 && (h === 40 || h === 41)) {
                    u += c.charAt(f);
                    continue
                }
                if (h < 128) {
                    u = u + En[h];
                    continue
                }
                if (h < 2048) {
                    u = u + (En[192 | h >> 6] + En[128 | h & 63]);
                    continue
                }
                if (h < 55296 || h >= 57344) {
                    u = u + (En[224 | h >> 12] + En[128 | h >> 6 & 63] + En[128 | h & 63]);
                    continue
                }
                f += 1, h = 65536 + ((h & 1023) << 10 | c.charCodeAt(f) & 1023), u += En[240 | h >> 18] + En[128 | h >> 12 & 63] + En[128 | h >> 6 & 63] + En[128 | h & 63]
            }
            return u
        },
        n3 = function(t) {
            for (var r = [{
                    obj: {
                        o: t
                    },
                    prop: "o"
                }], n = [], s = 0; s < r.length; ++s)
                for (var o = r[s], c = o.obj[o.prop], u = Object.keys(c), f = 0; f < u.length; ++f) {
                    var h = u[f],
                        g = c[h];
                    typeof g == "object" && g !== null && n.indexOf(g) === -1 && (r.push({
                        obj: c,
                        prop: h
                    }), n.push(g))
                }
            return ZG(r), t
        },
        i3 = function(t) {
            return Object.prototype.toString.call(t) === "[object RegExp]"
        },
        s3 = function(t) {
            return !t || typeof t != "object" ? !1 : !!(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t))
        },
        a3 = function(t, r) {
            return [].concat(t, r)
        },
        o3 = function(t, r) {
            if (qi(t)) {
                for (var n = [], s = 0; s < t.length; s += 1) n.push(r(t[s]));
                return n
            }
            return r(t)
        },
        BT = {
            arrayToObject: FT,
            assign: e3,
            combine: a3,
            compact: n3,
            decode: t3,
            encode: r3,
            isBuffer: s3,
            isRegExp: i3,
            maybeMap: o3,
            merge: QG
        },
        GT = qG,
        Ld = BT,
        Ba = Zh,
        c3 = Object.prototype.hasOwnProperty,
        QE = {
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
        Un = Array.isArray,
        l3 = String.prototype.split,
        u3 = Array.prototype.push,
        WT = function(e, t) {
            u3.apply(e, Un(t) ? t : [t])
        },
        f3 = Date.prototype.toISOString,
        e_ = Ba.default,
        tr = {
            addQueryPrefix: !1,
            allowDots: !1,
            charset: "utf-8",
            charsetSentinel: !1,
            delimiter: "&",
            encode: !0,
            encoder: Ld.encode,
            encodeValuesOnly: !1,
            format: e_,
            formatter: Ba.formatters[e_],
            indices: !1,
            serializeDate: function(t) {
                return f3.call(t)
            },
            skipNulls: !1,
            strictNullHandling: !1
        },
        d3 = function(t) {
            return typeof t == "string" || typeof t == "number" || typeof t == "boolean" || typeof t == "symbol" || typeof t == "bigint"
        },
        Af = {},
        h3 = function e(t, r, n, s, o, c, u, f, h, g, _, b, C, P, x, U) {
            for (var I = t, H = U, Y = 0, W = !1;
                (H = H.get(Af)) !== void 0 && !W;) {
                var G = H.get(t);
                if (Y += 1, typeof G < "u") {
                    if (G === Y) throw new RangeError("Cyclic object value");
                    W = !0
                }
                typeof H.get(Af) > "u" && (Y = 0)
            }
            if (typeof f == "function" ? I = f(r, I) : I instanceof Date ? I = _(I) : n === "comma" && Un(I) && (I = Ld.maybeMap(I, function(Se) {
                    return Se instanceof Date ? _(Se) : Se
                })), I === null) {
                if (o) return u && !P ? u(r, tr.encoder, x, "key", b) : r;
                I = ""
            }
            if (d3(I) || Ld.isBuffer(I)) {
                if (u) {
                    var z = P ? r : u(r, tr.encoder, x, "key", b);
                    if (n === "comma" && P) {
                        for (var ae = l3.call(String(I), ","), ce = "", ue = 0; ue < ae.length; ++ue) ce += (ue === 0 ? "" : ",") + C(u(ae[ue], tr.encoder, x, "value", b));
                        return [C(z) + (s && Un(I) && ae.length === 1 ? "[]" : "") + "=" + ce]
                    }
                    return [C(z) + "=" + C(u(I, tr.encoder, x, "value", b))]
                }
                return [C(r) + "=" + C(String(I))]
            }
            var Re = [];
            if (typeof I > "u") return Re;
            var Ie;
            if (n === "comma" && Un(I)) Ie = [{
                value: I.length > 0 ? I.join(",") || null : void 0
            }];
            else if (Un(f)) Ie = f;
            else {
                var fe = Object.keys(I);
                Ie = h ? fe.sort(h) : fe
            }
            for (var Ae = s && Un(I) && I.length === 1 ? r + "[]" : r, F = 0; F < Ie.length; ++F) {
                var re = Ie[F],
                    de = typeof re == "object" && typeof re.value < "u" ? re.value : I[re];
                if (!(c && de === null)) {
                    var _e = Un(I) ? typeof n == "function" ? n(Ae, re) : Ae : Ae + (g ? "." + re : "[" + re + "]");
                    U.set(t, Y);
                    var me = GT();
                    me.set(Af, U), WT(Re, e(de, _e, n, s, o, c, u, f, h, g, _, b, C, P, x, me))
                }
            }
            return Re
        },
        p3 = function(t) {
            if (!t) return tr;
            if (t.encoder !== null && typeof t.encoder < "u" && typeof t.encoder != "function") throw new TypeError("Encoder has to be a function.");
            var r = t.charset || tr.charset;
            if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
            var n = Ba.default;
            if (typeof t.format < "u") {
                if (!c3.call(Ba.formatters, t.format)) throw new TypeError("Unknown format option provided.");
                n = t.format
            }
            var s = Ba.formatters[n],
                o = tr.filter;
            return (typeof t.filter == "function" || Un(t.filter)) && (o = t.filter), {
                addQueryPrefix: typeof t.addQueryPrefix == "boolean" ? t.addQueryPrefix : tr.addQueryPrefix,
                allowDots: typeof t.allowDots > "u" ? tr.allowDots : !!t.allowDots,
                charset: r,
                charsetSentinel: typeof t.charsetSentinel == "boolean" ? t.charsetSentinel : tr.charsetSentinel,
                delimiter: typeof t.delimiter > "u" ? tr.delimiter : t.delimiter,
                encode: typeof t.encode == "boolean" ? t.encode : tr.encode,
                encoder: typeof t.encoder == "function" ? t.encoder : tr.encoder,
                encodeValuesOnly: typeof t.encodeValuesOnly == "boolean" ? t.encodeValuesOnly : tr.encodeValuesOnly,
                filter: o,
                format: n,
                formatter: s,
                serializeDate: typeof t.serializeDate == "function" ? t.serializeDate : tr.serializeDate,
                skipNulls: typeof t.skipNulls == "boolean" ? t.skipNulls : tr.skipNulls,
                sort: typeof t.sort == "function" ? t.sort : null,
                strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : tr.strictNullHandling
            }
        },
        g3 = function(e, t) {
            var r = e,
                n = p3(t),
                s, o;
            typeof n.filter == "function" ? (o = n.filter, r = o("", r)) : Un(n.filter) && (o = n.filter, s = o);
            var c = [];
            if (typeof r != "object" || r === null) return "";
            var u;
            t && t.arrayFormat in QE ? u = t.arrayFormat : t && "indices" in t ? u = t.indices ? "indices" : "repeat" : u = "indices";
            var f = QE[u];
            if (t && "commaRoundTrip" in t && typeof t.commaRoundTrip != "boolean") throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
            var h = f === "comma" && t && t.commaRoundTrip;
            s || (s = Object.keys(r)), n.sort && s.sort(n.sort);
            for (var g = GT(), _ = 0; _ < s.length; ++_) {
                var b = s[_];
                n.skipNulls && r[b] === null || WT(c, h3(r[b], b, f, h, n.strictNullHandling, n.skipNulls, n.encode ? n.encoder : null, n.filter, n.sort, n.allowDots, n.serializeDate, n.format, n.formatter, n.encodeValuesOnly, n.charset, g))
            }
            var C = c.join(n.delimiter),
                P = n.addQueryPrefix === !0 ? "?" : "";
            return n.charsetSentinel && (n.charset === "iso-8859-1" ? P += "utf8=%26%2310003%3B&" : P += "utf8=%E2%9C%93&"), C.length > 0 ? P + C : ""
        },
        Xs = BT,
        $d = Object.prototype.hasOwnProperty,
        m3 = Array.isArray,
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
        v3 = function(e) {
            return e.replace(/&#(\d+);/g, function(t, r) {
                return String.fromCharCode(parseInt(r, 10))
            })
        },
        jT = function(e, t) {
            return e && typeof e == "string" && t.comma && e.indexOf(",") > -1 ? e.split(",") : e
        },
        E3 = "utf8=%26%2310003%3B",
        _3 = "utf8=%E2%9C%93",
        y3 = function(t, r) {
            var n = {},
                s = r.ignoreQueryPrefix ? t.replace(/^\?/, "") : t,
                o = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit,
                c = s.split(r.delimiter, o),
                u = -1,
                f, h = r.charset;
            if (r.charsetSentinel)
                for (f = 0; f < c.length; ++f) c[f].indexOf("utf8=") === 0 && (c[f] === _3 ? h = "utf-8" : c[f] === E3 && (h = "iso-8859-1"), u = f, f = c.length);
            for (f = 0; f < c.length; ++f)
                if (f !== u) {
                    var g = c[f],
                        _ = g.indexOf("]="),
                        b = _ === -1 ? g.indexOf("=") : _ + 1,
                        C, P;
                    b === -1 ? (C = r.decoder(g, zt.decoder, h, "key"), P = r.strictNullHandling ? null : "") : (C = r.decoder(g.slice(0, b), zt.decoder, h, "key"), P = Xs.maybeMap(jT(g.slice(b + 1), r), function(x) {
                        return r.decoder(x, zt.decoder, h, "value")
                    })), P && r.interpretNumericEntities && h === "iso-8859-1" && (P = v3(P)), g.indexOf("[]=") > -1 && (P = m3(P) ? [P] : P), $d.call(n, C) ? n[C] = Xs.combine(n[C], P) : n[C] = P
                } return n
        },
        b3 = function(e, t, r, n) {
            for (var s = n ? t : jT(t, r), o = e.length - 1; o >= 0; --o) {
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
        T3 = function(t, r, n, s) {
            if (!!t) {
                var o = n.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t,
                    c = /(\[[^[\]]*])/,
                    u = /(\[[^[\]]*])/g,
                    f = n.depth > 0 && c.exec(o),
                    h = f ? o.slice(0, f.index) : o,
                    g = [];
                if (h) {
                    if (!n.plainObjects && $d.call(Object.prototype, h) && !n.allowPrototypes) return;
                    g.push(h)
                }
                for (var _ = 0; n.depth > 0 && (f = u.exec(o)) !== null && _ < n.depth;) {
                    if (_ += 1, !n.plainObjects && $d.call(Object.prototype, f[1].slice(1, -1)) && !n.allowPrototypes) return;
                    g.push(f[1])
                }
                return f && g.push("[" + o.slice(f.index) + "]"), b3(g, r, n, s)
            }
        },
        S3 = function(t) {
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
        O3 = function(e, t) {
            var r = S3(t);
            if (e === "" || e === null || typeof e > "u") return r.plainObjects ? Object.create(null) : {};
            for (var n = typeof e == "string" ? y3(e, r) : e, s = r.plainObjects ? Object.create(null) : {}, o = Object.keys(n), c = 0; c < o.length; ++c) {
                var u = o[c],
                    f = T3(u, n[u], r, typeof e == "string");
                s = Xs.merge(s, f, r)
            }
            return r.allowSparse === !0 ? s : Xs.compact(s)
        },
        A3 = g3,
        I3 = O3,
        R3 = Zh,
        HT = {
            formats: R3,
            parse: I3,
            stringify: A3
        };
    class C3 {
        constructor(t) {
            this.code = t.code, this.token = t.token, this.host = t.host
        }
    }
    class w3 {
        constructor(t) {
            this.appId = t.appId, this.appTag = t.appTag, this.audienceEnabled = t.audienceEnabled, this.code = t.code, this.host = t.host, this.audienceHost = t.audienceHost, this.locked = t.locked, this.full = t.full, this.moderationEnabled = t.moderationEnabled, this.passwordRequired = t.passwordRequired, this.twitchLocked = t.twitchLocked, this.locale = t.locale, this.keepalive = t.keepalive, this.controllerBranch = t.controllerBranch
        }
    }
    class N3 {
        constructor(t) {
            this.connections = t.connections
        }
    }
    class L3 {
        constructor(t) {
            this.cause = t.cause
        }
        whenReceived(t) {
            t.disconnect()
        }
    }
    class $3 {}
    var Ll = {
        CreateRoomReply: C3,
        GetRoomReply: w3,
        GetAudienceReply: N3,
        RoomExit: L3,
        RoomLock: $3
    };
    const t_ = Ad.exports,
        P3 = HT,
        {
            CreateRoomReply: D3,
            GetRoomReply: M3
        } = Ll;
    class k3 {
        constructor(t) {
            if (!t.host) throw new Error("unable to create ecast APIClient: no host provided");
            if (this.host = t.host, !t.scheme) throw new Error("unable to create ecast APIClient: no scheme provided");
            this.scheme = t.scheme
        }
        url(t, r) {
            if (r) {
                let n = P3.stringify(r);
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
                c = await (await t_(n, {
                    method: "POST"
                })).json();
            if (!c.ok) throw new Error(`failed to create room: ${c.error}`);
            let u = c.body;
            return new D3({
                code: u.code,
                token: u.token,
                host: u.host
            })
        }
        async getRoom(t) {
            let r = this.url(`/rooms/${t.code}`),
                s = await (await t_(r)).json();
            if (!s.ok) throw new Error(`unable to get room with options ${JSON.stringify(t)}: ${s.error}`);
            let o = s.body;
            return new M3({
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
    var x3 = {
            APIClient: k3
        },
        Cs = null;
    typeof WebSocket < "u" ? Cs = WebSocket : typeof MozWebSocket < "u" ? Cs = MozWebSocket : typeof Mt < "u" ? Cs = Mt.WebSocket || Mt.MozWebSocket : typeof window < "u" ? Cs = window.WebSocket || window.MozWebSocket : typeof self < "u" && (Cs = self.WebSocket || self.MozWebSocket);
    var U3 = Cs,
        Qh = {
            exports: {}
        },
        Bs = typeof Reflect == "object" ? Reflect : null,
        r_ = Bs && typeof Bs.apply == "function" ? Bs.apply : function(t, r, n) {
            return Function.prototype.apply.call(t, r, n)
        },
        kc;
    Bs && typeof Bs.ownKeys == "function" ? kc = Bs.ownKeys : Object.getOwnPropertySymbols ? kc = function(t) {
        return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))
    } : kc = function(t) {
        return Object.getOwnPropertyNames(t)
    };

    function F3(e) {
        console && console.warn && console.warn(e)
    }
    var KT = Number.isNaN || function(t) {
        return t !== t
    };

    function dt() {
        dt.init.call(this)
    }
    Qh.exports = dt;
    Qh.exports.once = j3;
    dt.EventEmitter = dt;
    dt.prototype._events = void 0;
    dt.prototype._eventsCount = 0;
    dt.prototype._maxListeners = void 0;
    var n_ = 10;

    function $l(e) {
        if (typeof e != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e)
    }
    Object.defineProperty(dt, "defaultMaxListeners", {
        enumerable: !0,
        get: function() {
            return n_
        },
        set: function(e) {
            if (typeof e != "number" || e < 0 || KT(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
            n_ = e
        }
    });
    dt.init = function() {
        (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
    };
    dt.prototype.setMaxListeners = function(t) {
        if (typeof t != "number" || t < 0 || KT(t)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
        return this._maxListeners = t, this
    };

    function VT(e) {
        return e._maxListeners === void 0 ? dt.defaultMaxListeners : e._maxListeners
    }
    dt.prototype.getMaxListeners = function() {
        return VT(this)
    };
    dt.prototype.emit = function(t) {
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
        if (typeof f == "function") r_(f, this, r);
        else
            for (var h = f.length, g = JT(f, h), n = 0; n < h; ++n) r_(g[n], this, r);
        return !0
    };

    function YT(e, t, r, n) {
        var s, o, c;
        if ($l(r), o = e._events, o === void 0 ? (o = e._events = Object.create(null), e._eventsCount = 0) : (o.newListener !== void 0 && (e.emit("newListener", t, r.listener ? r.listener : r), o = e._events), c = o[t]), c === void 0) c = o[t] = r, ++e._eventsCount;
        else if (typeof c == "function" ? c = o[t] = n ? [r, c] : [c, r] : n ? c.unshift(r) : c.push(r), s = VT(e), s > 0 && c.length > s && !c.warned) {
            c.warned = !0;
            var u = new Error("Possible EventEmitter memory leak detected. " + c.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
            u.name = "MaxListenersExceededWarning", u.emitter = e, u.type = t, u.count = c.length, F3(u)
        }
        return e
    }
    dt.prototype.addListener = function(t, r) {
        return YT(this, t, r, !1)
    };
    dt.prototype.on = dt.prototype.addListener;
    dt.prototype.prependListener = function(t, r) {
        return YT(this, t, r, !0)
    };

    function B3() {
        if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
    }

    function qT(e, t, r) {
        var n = {
                fired: !1,
                wrapFn: void 0,
                target: e,
                type: t,
                listener: r
            },
            s = B3.bind(n);
        return s.listener = r, n.wrapFn = s, s
    }
    dt.prototype.once = function(t, r) {
        return $l(r), this.on(t, qT(this, t, r)), this
    };
    dt.prototype.prependOnceListener = function(t, r) {
        return $l(r), this.prependListener(t, qT(this, t, r)), this
    };
    dt.prototype.removeListener = function(t, r) {
        var n, s, o, c, u;
        if ($l(r), s = this._events, s === void 0) return this;
        if (n = s[t], n === void 0) return this;
        if (n === r || n.listener === r) --this._eventsCount === 0 ? this._events = Object.create(null) : (delete s[t], s.removeListener && this.emit("removeListener", t, n.listener || r));
        else if (typeof n != "function") {
            for (o = -1, c = n.length - 1; c >= 0; c--)
                if (n[c] === r || n[c].listener === r) {
                    u = n[c].listener, o = c;
                    break
                } if (o < 0) return this;
            o === 0 ? n.shift() : G3(n, o), n.length === 1 && (s[t] = n[0]), s.removeListener !== void 0 && this.emit("removeListener", t, u || r)
        }
        return this
    };
    dt.prototype.off = dt.prototype.removeListener;
    dt.prototype.removeAllListeners = function(t) {
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

    function zT(e, t, r) {
        var n = e._events;
        if (n === void 0) return [];
        var s = n[t];
        return s === void 0 ? [] : typeof s == "function" ? r ? [s.listener || s] : [s] : r ? W3(s) : JT(s, s.length)
    }
    dt.prototype.listeners = function(t) {
        return zT(this, t, !0)
    };
    dt.prototype.rawListeners = function(t) {
        return zT(this, t, !1)
    };
    dt.listenerCount = function(e, t) {
        return typeof e.listenerCount == "function" ? e.listenerCount(t) : XT.call(e, t)
    };
    dt.prototype.listenerCount = XT;

    function XT(e) {
        var t = this._events;
        if (t !== void 0) {
            var r = t[e];
            if (typeof r == "function") return 1;
            if (r !== void 0) return r.length
        }
        return 0
    }
    dt.prototype.eventNames = function() {
        return this._eventsCount > 0 ? kc(this._events) : []
    };

    function JT(e, t) {
        for (var r = new Array(t), n = 0; n < t; ++n) r[n] = e[n];
        return r
    }

    function G3(e, t) {
        for (; t + 1 < e.length; t++) e[t] = e[t + 1];
        e.pop()
    }

    function W3(e) {
        for (var t = new Array(e.length), r = 0; r < t.length; ++r) t[r] = e[r].listener || e[r];
        return t
    }

    function j3(e, t) {
        return new Promise(function(r, n) {
            function s(c) {
                e.removeListener(t, o), n(c)
            }

            function o() {
                typeof e.removeListener == "function" && e.removeListener("error", s), r([].slice.call(arguments))
            }
            ZT(e, t, o, {
                once: !0
            }), t !== "error" && H3(e, s, {
                once: !0
            })
        })
    }

    function H3(e, t, r) {
        typeof e.on == "function" && ZT(e, "error", t, r)
    }

    function ZT(e, t, r, n) {
        if (typeof e.on == "function") n.once ? e.once(t, r) : e.on(t, r);
        else if (typeof e.addEventListener == "function") e.addEventListener(t, function s(o) {
            n.once && e.removeEventListener(t, s), r(o)
        });
        else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e)
    }
    class K3 {
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
    class Pl extends Error {
        constructor(t) {
            super(t), t && (this.code = t.code, this.message = t.message)
        }
    }
    class go extends Pl {
        constructor(t) {
            super(t), this.code = 1e3, this.message = t && t.message ? t.message : "ecast server error"
        }
    }
    class QT extends go {
        constructor(t) {
            super(t), this.code = 1001, this.message = t && t.message ? t.message : "create room failed"
        }
    }
    class eS extends go {
        constructor(t) {
            super(t), this.code = 1002, this.message = t && t.message ? t.message : "unable to connect to room"
        }
    }
    class tS extends go {
        constructor(t) {
            super(t), this.code = 1003, this.message = t && t.message ? t.message : "server is shutting down"
        }
    }
    class lt extends Pl {
        constructor(t) {
            super(t), this.code = 2e3, this.message = t && t.message ? t.message : "ecast client error"
        }
    }
    class rS extends lt {
        constructor(t) {
            super(t), this.code = 2001, this.message = t && t.message ? t.message : "parse error in ecast protocol"
        }
    }
    class nS extends lt {
        constructor(t) {
            super(t), this.code = 2002, this.message = t && t.message ? t.message : "missing opcode"
        }
    }
    class iS extends lt {
        constructor(t) {
            super(t), this.code = 2003, this.message = t && t.message ? t.message : "invalid opcode"
        }
    }
    class sS extends lt {
        constructor(t) {
            super(t), this.code = 2004, this.message = t && t.message ? t.message : "invalid arguments"
        }
    }
    class aS extends lt {
        constructor(t) {
            super(t), this.code = 2005, this.message = t && t.message ? t.message : "entity not found"
        }
    }
    class oS extends lt {
        constructor(t) {
            super(t), this.code = 2006, this.message = t && t.message ? t.message : "an entity already exists with that key"
        }
    }
    class cS extends lt {
        constructor(t) {
            super(t), this.code = 2007, this.message = t && t.message ? t.message : "the entity is not of the expected type"
        }
    }
    class lS extends lt {
        constructor(t) {
            super(t), this.code = 2008, this.message = t && t.message ? t.message : "no such client"
        }
    }
    class uS extends lt {
        constructor(t) {
            super(t), this.code = 2009, this.message = t && t.message ? t.message : "room is locked"
        }
    }
    class fS extends lt {
        constructor(t) {
            super(t), this.code = 2010, this.message = t && t.message ? t.message : "room is full"
        }
    }
    class dS extends lt {
        constructor(t) {
            super(t), this.code = 2011, this.message = t && t.message ? t.message : "no such license"
        }
    }
    class hS extends lt {
        constructor(t) {
            super(t), this.code = 2012, this.message = t && t.message ? t.message : "invalid license"
        }
    }
    class pS extends lt {
        constructor(t) {
            super(t), this.code = 2013, this.message = t && t.message ? t.message : "room not found"
        }
    }
    class gS extends lt {
        constructor(t) {
            super(t), this.code = 2014, this.message = t && t.message ? t.message : "requested role does not exist"
        }
    }
    class mS extends lt {
        constructor(t) {
            super(t), this.code = 2015, this.message = t && t.message ? t.message : "twitch login required"
        }
    }
    class vS extends lt {
        constructor(t) {
            super(t), this.code = 2016, this.message = t && t.message ? t.message : "no such option"
        }
    }
    class ES extends lt {
        constructor(t) {
            super(t), this.code = 2017, this.message = t && t.message ? t.message : "password required"
        }
    }
    class _S extends lt {
        constructor(t) {
            super(t), this.code = 2018, this.message = t && t.message ? t.message : "invalid room password"
        }
    }
    class yS extends lt {
        constructor(t) {
            super(t), this.code = 2019, this.message = t && t.message ? t.message : "missing name"
        }
    }
    class bS extends lt {
        constructor(t) {
            super(t), this.code = 2021, this.message = t && t.message ? t.message : "text did not pass text filters"
        }
    }
    class TS extends lt {
        constructor(t) {
            super(t), this.code = 2022, this.message = t && t.message ? t.message : "no such filter"
        }
    }
    class SS extends lt {
        constructor(t) {
            super(t), this.code = 2023, this.message = t && t.message ? t.message : "permission denied"
        }
    }
    class OS extends lt {
        constructor(t) {
            super(t), this.code = 2024, this.message = t && t.message ? t.message : "not connected to a room"
        }
    }
    class AS extends lt {
        constructor(t) {
            super(t), this.code = 2025, this.message = t && t.message ? t.message : "illegal operation"
        }
    }
    class IS extends lt {
        constructor(t) {
            super(t), this.code = 2026, this.message = t && t.message ? t.message : "invalid ACL change"
        }
    }
    class RS extends lt {
        constructor(t) {
            super(t), this.code = 2027, this.message = t && t.message ? t.message : "room has already ended"
        }
    }
    class CS extends lt {
        constructor(t) {
            super(t), this.code = 2028, this.message = t && t.message ? t.message : "the entity is locked"
        }
    }
    class wS extends lt {
        constructor(t) {
            super(t), this.code = 2420, this.message = t && t.message ? t.message : "rate limit exceeded"
        }
    }

    function V3({
        code: e,
        message: t
    }) {
        const r = Y3[e];
        return r ? new r({
            message: t
        }) : new Pl({
            message: t
        })
    }
    var Ga = {
        createError: V3,
        CallError: Pl,
        EcastServerError: go,
        EcastCreateRoomFailed: QT,
        EcastDialRoomFailed: eS,
        EcastServerIsShuttingDown: tS,
        EcastClientError: lt,
        EcastParseError: rS,
        EcastRequestIsMissingOpcode: nS,
        EcastRequestHasInvalidOpcode: iS,
        EcastRequestHasInvalidArguments: sS,
        EcastEntityNotFound: aS,
        EcastEntityAlreadyExists: oS,
        EcastEntityTypeError: cS,
        EcastNoSuchClient: lS,
        EcastRoomIsLocked: uS,
        EcastRoomIsFull: fS,
        EcastLicenseNotFound: dS,
        EcastLicenseCheckFailed: hS,
        EcastRoomNotFound: pS,
        EcastInvalidRole: gS,
        EcastTwitchLoginRequired: mS,
        EcastInvalidOption: vS,
        EcastPasswordRequired: ES,
        EcastInvalidPassword: _S,
        EcastNameRequired: yS,
        EcastFilterError: bS,
        EcastNoSuchFilter: TS,
        EcastPermissionDenied: SS,
        EcastNotConnected: OS,
        EcastIllegalOperation: AS,
        EcastACLChangeDenied: IS,
        EcastRoomHasEnded: RS,
        EcastEntityLocked: CS,
        EcastRateLimitExceeded: wS,
        ObservedError: K3
    };
    const Y3 = {
        1e3: go,
        1001: QT,
        1002: eS,
        1003: tS,
        2e3: lt,
        2001: rS,
        2002: nS,
        2003: iS,
        2004: sS,
        2005: aS,
        2006: oS,
        2007: cS,
        2008: lS,
        2009: uS,
        2010: fS,
        2011: dS,
        2012: hS,
        2013: pS,
        2014: gS,
        2015: mS,
        2016: vS,
        2017: ES,
        2018: _S,
        2019: yS,
        2021: bS,
        2022: TS,
        2023: SS,
        2024: OS,
        2025: AS,
        2026: IS,
        2027: RS,
        2028: CS,
        2420: wS
    };
    class q3 {
        constructor(t) {
            this.id = t.id, this.deviceId = t.deviceId, this.name = t.name, this.secret = t.secret, this.reconnect = t.reconnect, this.entities = t.entities, this.here = t.here, this.profile = t.profile, this.replayEnd = t.replayEnd
        }
    }
    class z3 {
        constructor(t) {
            this.id = t.id, this.userId = t.userId, this.name = t.name, this.role = t.role, this.reconnect = t.reconnect
        }
    }
    class X3 {
        constructor(t) {
            this.id = t.id, this.role = t.role
        }
    }
    class J3 {
        constructor(t) {
            this.to = t.to, this.from = t.from, this.body = t.body, this.userId = t.userId
        }
    }
    class Z3 {
        constructor(t) {
            this.id = t.id, this.banned = t.banned, this.reason = t.reason
        }
    }
    var ep = {
        ClientConnected: z3,
        ClientDisconnected: X3,
        ClientKicked: Z3,
        ClientSend: J3,
        ClientWelcome: q3
    };
    class Q3 {
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
    var tp = {
        CountGroup: Q3
    };
    class eW {
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
    var rp = {
        GCounter: eW
    };
    class tW {
        constructor(t) {
            this.pc = t.pc, this.opcode = t.opcode, this.result = t.result
        }
    }
    var NS = {
        Notification: tW
    };
    class rW {
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
    class nW {
        constructor(t) {
            this.message = t.message
        }
        toString() {
            return `ObjectEcho{message: ${this.message}}`
        }
    }
    var np = {
        ObjectEntity: rW,
        ObjectEcho: nW
    };
    class iW {
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
    var ip = {
        PNCounter: iW
    };
    class sW {
        constructor(t) {
            this.pc = t.pc, this.re = t.re, this.opcode = t.opcode, this.result = t.result
        }
    }
    var LS = {
        Reply: sW
    };
    class aW {
        constructor(t) {
            this.seq = t.seq, this.opcode = t.opcode, this.params = t.params
        }
    }
    var oW = {
        Request: aW
    };
    class cW {
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
    class lW {
        constructor(t) {
            this.message = t.message
        }
        toString() {
            return `TextEcho{message: ${this.message}
}`
        }
    }
    var sp = {
        TextEntity: cW,
        TextEcho: lW
    };
    class uW {
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
    var ap = {
        TextRing: uW
    };
    class fW {
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
    var $S = {
        ArtifactEntity: fW
    };
    class dW {
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
    class hW {
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
    class pW {
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
    var op = {
        DoodleEntity: dW,
        DoodleLine: hW,
        DoodleLineRemoved: pW
    };
    class gW {
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
    class mW {
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
    class vW {
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
    var PS = {
        StackEntity: gW,
        StackElement: mW,
        StackElements: vW
    };
    class EW {
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
    var DS = {
        DropEntity: EW
    };
    class _W {
        constructor(t) {
            this.message = t.message
        }
        toString() {
            return `Echo{message: ${this.message}
}`
        }
    }
    var yW = {
        Echo: _W
    };
    class bW {
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
    var TW = {
        LockEntity: bW
    };
    class SW {
        constructor() {}
        toString() {
            return "OK"
        }
    }
    var MS = {
        OK: SW
    };
    class OW {
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
    var kS = {
        NumberEntity: OW
    };
    const {
        ArtifactEntity: AW
    } = $S, {
        ClientWelcome: IW,
        ClientConnected: RW,
        ClientDisconnected: CW,
        ClientKicked: wW,
        ClientSend: NW
    } = ep, {
        CountGroup: LW
    } = tp, {
        DoodleEntity: $W,
        DoodleLine: PW,
        DoodleLineRemoved: DW
    } = op, {
        StackEntity: MW,
        StackElement: kW,
        StackElements: xW
    } = PS, {
        DropEntity: UW
    } = DS, {
        Echo: FW
    } = yW, {
        LockEntity: BW
    } = TW, {
        GCounter: GW
    } = rp, {
        GetAudienceReply: WW,
        RoomExit: jW,
        RoomLock: HW
    } = Ll, {
        Notification: KW
    } = NS, {
        OK: VW
    } = MS, {
        NumberEntity: YW
    } = kS, {
        ObjectEcho: qW,
        ObjectEntity: zW
    } = np, {
        PNCounter: i_
    } = ip, {
        Reply: XW
    } = LS, {
        TextEcho: JW,
        TextEntity: ZW
    } = sp, {
        TextRing: QW
    } = ap, {
        createError: s_,
        ObservedError: ej
    } = Ga;

    function Pd(e, t, r) {
        switch (e) {
            case "ok":
                return new VW;
            case "echo":
                return new FW({
                    message: t.message
                });
            case "lock":
                return new BW({
                    key: t.key,
                    from: t.from
                });
            case "error":
                return s_({
                    code: t.code,
                    message: t.msg
                });
            case "error/observed":
                return new ej({
                    to: t.to,
                    error: s_({
                        code: t.error.code,
                        message: t.error.msg
                    })
                });
            case "string":
                return t;
            case "text":
                return new ZW({
                    from: t.from,
                    key: t.key,
                    text: t.val,
                    version: t.version,
                    meta: r,
                    acl: t.acl
                });
            case "text/echo":
                return new JW({
                    message: t.message
                });
            case "object":
                return new zW({
                    from: t.from,
                    key: t.key,
                    val: t.val,
                    meta: r,
                    acl: t.acl
                });
            case "object/echo":
                return new qW({
                    message: t.message
                });
            case "drop":
                return new UW({
                    key: t.key
                });
            case "artifact":
                return new AW({
                    key: t.key,
                    artifactId: t.artifactId,
                    categoryId: t.categoryId,
                    rootId: t.rootId,
                    meta: r
                });
            case "client/connected":
                return new RW({
                    id: t.id,
                    userId: t.userId,
                    name: t.name,
                    role: t.role,
                    reconnect: t.reconnect
                });
            case "client/disconnected":
                return new CW({
                    id: t.id,
                    role: t.role
                });
            case "client/kicked":
                return new wW({
                    id: t.id,
                    banned: t.banned,
                    reason: t.reason
                });
            case "client/send":
                return new NW({
                    to: t.to,
                    from: t.from,
                    body: t.body,
                    userId: t.userID
                });
            case "client/welcome": {
                let n = new IW({
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
                        s[o] = Pd(c[0], c[1], c[2])
                    }), n.entities = s
                }
                return n
            }
            case "doodle":
                return new $W({
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
                return new PW({
                    key: t.key,
                    line: t.val
                });
            case "doodle/line/removed":
                return new DW({
                    key: t.key,
                    index: t.index
                });
            case "stack":
                return new MW({
                    key: t.key,
                    size: t.size,
                    from: t.from,
                    version: t.version,
                    meta: t.meta,
                    acl: t.acl
                });
            case "stack/element":
                return new kW({
                    key: t.key,
                    val: t.val
                });
            case "stack/elements":
                return new xW({
                    key: t.key,
                    vals: t.vals
                });
            case "number":
                return new YW({
                    key: t.key,
                    val: t.val,
                    restrictions: t.restrictions,
                    from: t.from,
                    version: t.version,
                    meta: r,
                    acl: t.acl
                });
            case "room/exit":
                return new jW({
                    cause: t.cause
                });
            case "room/lock":
                return new HW;
            case "room/get-audience":
                return new WW({
                    connections: t.connections
                });
            case "audience":
                return new i_({
                    key: e,
                    count: t[1]
                });
            case "audience/count-group":
                return new LW({
                    key: t.key,
                    choices: t.choices,
                    meta: r
                });
            case "audience/text-ring":
                return new QW({
                    key: t.key,
                    elements: t.elements,
                    meta: r
                });
            case "audience/g-counter":
                return new GW({
                    key: t.key,
                    count: t.count,
                    meta: r
                });
            case "audience/pn-counter":
                return new i_({
                    key: t.key,
                    count: t.count,
                    meta: r
                });
            default:
                return console.error(`failed to parse result of type ${e}: ${JSON.stringify(t,null,2)}`), t
        }
    }

    function tj(e) {
        let t = JSON.parse(e.data),
            r = t.opcode || t.type;
        return t.re ? new XW({
            pc: t.pc,
            re: t.re,
            opcode: r,
            result: Pd(r, t.result)
        }) : new KW({
            pc: t.pc,
            opcode: r,
            result: Pd(r, t.result)
        })
    }
    var rj = {
        parseResponseMessage: tj
    };
    const a_ = U3,
        nj = HT,
        ij = Qh.exports,
        {
            CallError: sj
        } = Ga,
        {
            ClientWelcome: aj
        } = ep,
        {
            CountGroup: oj
        } = tp,
        {
            GCounter: cj
        } = rp,
        {
            Notification: o_
        } = NS,
        {
            ObjectEntity: If
        } = np,
        {
            PNCounter: lj
        } = ip,
        {
            Reply: uj
        } = LS,
        {
            Request: fj
        } = oW,
        {
            TextEntity: Rf
        } = sp,
        {
            TextRing: dj
        } = ap,
        {
            parseResponseMessage: hj
        } = rj,
        {
            DoodleEntity: pj
        } = op,
        {
            StackEntity: gj
        } = PS,
        mj = 1e3 + Math.floor(Math.random() * 500),
        c_ = 13e3;
    class vj extends ij {
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
            const r = nj.stringify(t),
                n = this.role === "audience" || this.id > 1e7 ? `${this.scheme}://${this.host}/api/v2/audience/${this.code}/play?${r}` : `${this.scheme}://${this.host}/api/v2/rooms/${this.code}/play?${r}`;
            return new Promise((s, o) => {
                let c = !1,
                    u = !1,
                    f = g => {
                        s(g), c = !0
                    },
                    h = g => {
                        o(g), c = !0
                    };
                this.conn = new a_(n, "ecast-v0"), this.conn.onmessage = g => {
                    this.debugLog(`recv <- ${JSON.stringify(JSON.parse(g.data),null,2)}`);
                    const _ = hj(g);
                    if (_ instanceof uj) this.onReply(_);
                    else if (_ instanceof o_) {
                        if (_.result instanceof aj) u = !0, this.id = _.result.id, this.deviceId = _.result.deviceId, this.entities = _.result.entities, this.secret = _.result.secret, _.result.name && (this.name = _.result.name), f(_.result);
                        else if (!c) {
                            h(_.result);
                            return
                        }
                        this.onNotification(_)
                    } else console.error(`failed to parse response messsage: ${_}`)
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
            return new Promise(r => setTimeout(r, t))
        }
        debugLog(...t) {
            !this.debug || console.log(`%c[WSClient:${this.name}]`, "background-color:blue;color:white;", ...t)
        }
        async reconnect() {
            this.disconnect(), this.debugLog("Attempting to reconnect");
            let t = 1,
                r = mj;
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
                if (r >= c_) {
                    this.debugLog("reconnect failed!", n), this.emit("socketClose", n);
                    return
                }
                t += 1, this.debugLog("waiting", r), this.emit("connection", {
                    status: "waiting",
                    attempt: t
                }), await this.sleep(r), r = Math.min(c_, r * 2)
            }
        }
        disconnect() {
            !this.conn || (this.conn.close(), this.conn.onmessage = null, this.conn.onerror = null, this.conn.onopen = null, this.conn.onclose = null, this.conn = null)
        }
        onReply(t) {
            const r = t.re,
                n = this.pending[r];
            if (!n) {
                const s = new o_(t);
                s.re = r, this.emit("notification", s);
                return
            }
            delete this.pending[r], t.result instanceof sj ? n.reject(t.result) : n.resolve(t.result)
        }
        onNotification(t) {
            typeof t.result.whenReceived == "function" && t.result.whenReceived(this), this.emit("notification", t), this.emit(t.opcode, t.result)
        }
        send(t, r = {}) {
            if (!this.conn) throw new Error("No connection available");
            if (this.conn.readyState !== a_.OPEN) throw new Error(`Socket not ready to send, readyState is ${this.conn.readyState}`);
            const n = ++this.seq,
                s = new fj({
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
            return this.entities[t] = new If({
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
            return this.entities[t] = new If({
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
            return this.entities[t] = new If({
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
            return this.entities[t] = new Rf({
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
            return this.entities[t] = new Rf({
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
            return this.entities[t] = new Rf({
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
            const g = await this.send("doodle/create", n);
            return this.entities[t] = new pj({
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
            }), g
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
            return this.entities[t] = new gj({
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
            return this.entities[t] = new oj({
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
            return this.entities[t] = new cj({
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
            return this.entities[t] = new lj({
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
            return this.entities[t] = new dj({
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
    var Ej = {
        WSClient: vj
    };
    const {
        APIClient: _j
    } = x3, {
        WSClient: yj
    } = Ej, {
        CreateRoomReply: bj,
        GetRoomReply: Tj
    } = Ll, {
        ClientWelcome: Sj,
        ClientDisconnected: Oj
    } = ep, {
        ArtifactEntity: Aj
    } = $S, {
        GCounter: Ij
    } = rp, {
        NumberEntity: Rj
    } = kS, {
        TextEntity: Cj
    } = sp, {
        DoodleEntity: wj
    } = op, {
        ObjectEntity: Nj
    } = np, {
        CountGroup: Lj
    } = tp, {
        DropEntity: $j
    } = DS, {
        OK: Pj
    } = MS, {
        RoomExit: Dj
    } = Ll, {
        TextRing: Mj
    } = ap, {
        PNCounter: kj
    } = ip;
    var Fn = {
        APIClient: _j,
        WSClient: yj,
        ClientWelcome: Sj,
        CreateRoomReply: bj,
        DropEntity: $j,
        GetRoomReply: Tj,
        ClientDisconnected: Oj,
        RoomExit: Dj,
        OK: Pj,
        ArtifactEntity: Aj,
        DoodleEntity: wj,
        NumberEntity: Rj,
        CountGroup: Lj,
        GCounter: Ij,
        ObjectEntity: Nj,
        PNCounter: kj,
        TextEntity: Cj,
        TextRing: Mj
    };
    const xj = [{
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
            name: "Crowdplay de Espiadivinos",
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
            name: "Papa Palabra",
            tag: "wordspud",
            wrapper: "marionette",
            isPublic: !0,
            directory: "pp1/wordspud"
        }, {
            name: "Mata Mentiras",
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
            name: "Subastardos",
            tag: "auction",
            wrapper: "marionette",
            isPublic: !0,
            directory: "pp2/auction"
        }, {
            name: "Bomba S.A.",
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
            name: "Engáñame",
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
            name: "Espiadivinos",
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
            name: "Sobrevive al Internet",
            tag: "survivetheinternet",
            wrapper: "marionette",
            isPublic: !0,
            directory: "pp4/survivetheinternet",
            categoryId: "STIGame"
        }, {
            name: "Monstruo Busca Monstruo",
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
            name: "Garabato Cívico",
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
            name: "Divide la Sala",
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
            name: "Patentes Dementes",
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
            name: "Modelo a Seguir",
            tag: "rolemodels",
            wrapper: "marionette",
            isPublic: !0,
            features: ["camera"],
            directory: "pp6/rolemodels",
            categoryId: "RoleModelsGame",
            shopItems: ["shirts"]
        }, {
            name: "Crucero Cómico",
            tag: "jokeboat",
            wrapper: "marionette",
            isPublic: !0,
            directory: "pp6/jokeboat",
            categoryId: "JokeboatGame"
        }, {
            name: "Diccionarium",
            tag: "ridictionary",
            wrapper: "marionette",
            isPublic: !0,
            directory: "pp6/ridictionary",
            categoryId: "RidictionaryGame"
        }, {
            name: "Pulsa el Botón",
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
            name: "La Familia es un Infierno",
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
            name: "Balbuceando Juntos",
            tag: "blanky-blank",
            wrapper: "marionette",
            isPublic: !0,
            directory: "pp7/blanky-blank",
            categoryId: "BlankyBlankGame"
        }, {
            name: "Bajo Trabajo",
            tag: "apply-yourself",
            wrapper: "vue",
            isPublic: !0,
            directory: "pp8/apply-yourself",
            categoryId: "JobGameGame",
            features: ["moderation", "previews"]
        }, {
            name: "Drawful Animado",
            tag: "drawful-animate",
            wrapper: "vue",
            isPublic: !0,
            directory: "pp8/drawful-animate",
            categoryId: "DrawfulAnimateGame",
            features: ["moderation"]
        }, {
            name: "La Ruleta de Enormes Proporciones",
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
            name: "Trazo del Crimen",
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
        xS = e => xj.find(t => t.tag === e || t.categoryId === e);

    function Uj(...e) {
        console.log(...e)
    }

    function Fj(e) {
        throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
    }
    var l_ = {
        exports: {}
    };
    (function(e, t) {
        (function(r, n) {
            n(t)
        })(Mt, function(r) {
            var n = typeof window < "u" ? window : typeof Mt < "u" ? Mt : typeof self < "u" ? self : {},
                s = function(T, L) {
                    if (L = L.split(":")[0], T = +T, !T) return !1;
                    switch (L) {
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

            function h(A) {
                for (var T = /([^=?#&]+)=?([^&]*)/g, L = {}, S; S = T.exec(A);) {
                    var $ = u(S[1]),
                        J = u(S[2]);
                    $ === null || J === null || $ in L || (L[$] = J)
                }
                return L
            }

            function g(A, T) {
                T = T || "";
                var L = [],
                    S, $;
                typeof T != "string" && (T = "?");
                for ($ in A)
                    if (o.call(A, $)) {
                        if (S = A[$], !S && (S === null || S === c || isNaN(S)) && (S = ""), $ = f($), S = f(S), $ === null || S === null) continue;
                        L.push($ + "=" + S)
                    } return L.length ? T + L.join("&") : ""
            }
            var _ = g,
                b = h,
                C = {
                    stringify: _,
                    parse: b
                },
                P = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
                x = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,
                U = "[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]",
                I = new RegExp("^" + U + "+");

            function H(A) {
                return (A || "").toString().replace(I, "")
            }
            var Y = [
                    ["#", "hash"],
                    ["?", "query"],
                    function(T, L) {
                        return z(L.protocol) ? T.replace(/\\/g, "/") : T
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

            function G(A) {
                var T;
                typeof window < "u" ? T = window : typeof n < "u" ? T = n : typeof self < "u" ? T = self : T = {};
                var L = T.location || {};
                A = A || L;
                var S = {},
                    $ = typeof A,
                    J;
                if (A.protocol === "blob:") S = new ue(unescape(A.pathname), {});
                else if ($ === "string") {
                    S = new ue(A, {});
                    for (J in W) delete S[J]
                } else if ($ === "object") {
                    for (J in A) J in W || (S[J] = A[J]);
                    S.slashes === void 0 && (S.slashes = P.test(A.href))
                }
                return S
            }

            function z(A) {
                return A === "file:" || A === "ftp:" || A === "http:" || A === "https:" || A === "ws:" || A === "wss:"
            }

            function ae(A, T) {
                A = H(A), T = T || {};
                var L = x.exec(A),
                    S = L[1] ? L[1].toLowerCase() : "",
                    $ = !!L[2],
                    J = !!L[3],
                    te = 0,
                    Ee;
                return $ ? J ? (Ee = L[2] + L[3] + L[4], te = L[2].length + L[3].length) : (Ee = L[2] + L[4], te = L[2].length) : J ? (Ee = L[3] + L[4], te = L[3].length) : Ee = L[4], S === "file:" ? te >= 2 && (Ee = Ee.slice(2)) : z(S) ? Ee = L[4] : S ? $ && (Ee = Ee.slice(2)) : te >= 2 && z(T.protocol) && (Ee = L[4]), {
                    protocol: S,
                    slashes: $ || z(S),
                    slashesCount: te,
                    rest: Ee
                }
            }

            function ce(A, T) {
                if (A === "") return T;
                for (var L = (T || "/").split("/").slice(0, -1).concat(A.split("/")), S = L.length, $ = L[S - 1], J = !1, te = 0; S--;) L[S] === "." ? L.splice(S, 1) : L[S] === ".." ? (L.splice(S, 1), te++) : te && (S === 0 && (J = !0), L.splice(S, 1), te--);
                return J && L.unshift(""), ($ === "." || $ === "..") && L.push(""), L.join("/")
            }

            function ue(A, T, L) {
                if (A = H(A), !(this instanceof ue)) return new ue(A, T, L);
                var S, $, J, te, Ee, Te, ut = Y.slice(),
                    sr = typeof T,
                    De = this,
                    da = 0;
                for (sr !== "object" && sr !== "string" && (L = T, T = null), L && typeof L != "function" && (L = C.parse), T = G(T), $ = ae(A || "", T), S = !$.protocol && !$.slashes, De.slashes = $.slashes || S && T.slashes, De.protocol = $.protocol || T.protocol || "", A = $.rest, (De.protocol === "file:" || !$.slashes && ($.protocol || $.slashesCount < 2 || !z(De.protocol))) && (ut[3] = [/(.*)/, "pathname"]); da < ut.length; da++) {
                    if (te = ut[da], typeof te == "function") {
                        A = te(A, De);
                        continue
                    }
                    J = te[0], Te = te[1], J !== J ? De[Te] = A : typeof J == "string" ? ~(Ee = A.indexOf(J)) && (typeof te[2] == "number" ? (De[Te] = A.slice(0, Ee), A = A.slice(Ee + te[2])) : (De[Te] = A.slice(Ee), A = A.slice(0, Ee))) : (Ee = J.exec(A)) && (De[Te] = Ee[1], A = A.slice(0, Ee.index)), De[Te] = De[Te] || S && te[3] && T[Te] || "", te[4] && (De[Te] = De[Te].toLowerCase())
                }
                L && (De.query = L(De.query)), S && T.slashes && De.pathname.charAt(0) !== "/" && (De.pathname !== "" || T.pathname !== "") && (De.pathname = ce(De.pathname, T.pathname)), De.pathname.charAt(0) !== "/" && z(De.protocol) && (De.pathname = "/" + De.pathname), s(De.port, De.protocol) || (De.host = De.hostname, De.port = ""), De.username = De.password = "", De.auth && (te = De.auth.split(":"), De.username = te[0] || "", De.password = te[1] || ""), De.origin = De.protocol !== "file:" && z(De.protocol) && De.host ? De.protocol + "//" + De.host : "null", De.href = De.toString()
            }

            function Re(A, T, L) {
                var S = this;
                switch (A) {
                    case "query":
                        typeof T == "string" && T.length && (T = (L || C.parse)(T)), S[A] = T;
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
                        S.protocol = T.toLowerCase(), S.slashes = !L;
                        break;
                    case "pathname":
                    case "hash":
                        if (T) {
                            var $ = A === "pathname" ? "/" : "#";
                            S[A] = T.charAt(0) !== $ ? $ + T : T
                        } else S[A] = T;
                        break;
                    default:
                        S[A] = T
                }
                for (var J = 0; J < Y.length; J++) {
                    var te = Y[J];
                    te[4] && (S[te[1]] = S[te[1]].toLowerCase())
                }
                return S.origin = S.protocol !== "file:" && z(S.protocol) && S.host ? S.protocol + "//" + S.host : "null", S.href = S.toString(), S
            }

            function Ie(A) {
                (!A || typeof A != "function") && (A = C.stringify);
                var T, L = this,
                    S = L.protocol;
                S && S.charAt(S.length - 1) !== ":" && (S += ":");
                var $ = S + (L.slashes || z(L.protocol) ? "//" : "");
                return L.username && ($ += L.username, L.password && ($ += ":" + L.password), $ += "@"), $ += L.host + L.pathname, T = typeof L.query == "object" ? A(L.query) : L.query, T && ($ += T.charAt(0) !== "?" ? "?" + T : T), L.hash && ($ += L.hash), $
            }
            ue.prototype = {
                set: Re,
                toString: Ie
            }, ue.extractProtocol = ae, ue.location = G, ue.trimLeft = H, ue.qs = C;
            var fe = ue;

            function Ae(A, T) {
                setTimeout(function(L) {
                    return A.call(L)
                }, 4, T)
            }

            function F(A, T) {
                typeof process < "u" && console[A].call(null, T)
            }

            function re(A, T) {
                A === void 0 && (A = []);
                var L = [];
                return A.forEach(function(S) {
                    T(S) || L.push(S)
                }), L
            }

            function de(A, T) {
                A === void 0 && (A = []);
                var L = [];
                return A.forEach(function(S) {
                    T(S) && L.push(S)
                }), L
            }
            var _e = function() {
                this.listeners = {}
            };
            _e.prototype.addEventListener = function(T, L) {
                typeof L == "function" && (Array.isArray(this.listeners[T]) || (this.listeners[T] = []), de(this.listeners[T], function(S) {
                    return S === L
                }).length === 0 && this.listeners[T].push(L))
            }, _e.prototype.removeEventListener = function(T, L) {
                var S = this.listeners[T];
                this.listeners[T] = re(S, function($) {
                    return $ === L
                })
            }, _e.prototype.dispatchEvent = function(T) {
                for (var L = this, S = [], $ = arguments.length - 1; $-- > 0;) S[$] = arguments[$ + 1];
                var J = T.type,
                    te = this.listeners[J];
                return Array.isArray(te) ? (te.forEach(function(Ee) {
                    S.length > 0 ? Ee.apply(L, S) : Ee.call(L, T)
                }), !0) : !1
            };

            function me(A) {
                var T = A.indexOf("?");
                return T >= 0 ? A.slice(0, T) : A
            }
            var Se = function() {
                this.urlMap = {}
            };
            Se.prototype.attachWebSocket = function(T, L) {
                var S = me(L),
                    $ = this.urlMap[S];
                if ($ && $.server && $.websockets.indexOf(T) === -1) return $.websockets.push(T), $.server
            }, Se.prototype.addMembershipToRoom = function(T, L) {
                var S = this.urlMap[me(T.url)];
                S && S.server && S.websockets.indexOf(T) !== -1 && (S.roomMemberships[L] || (S.roomMemberships[L] = []), S.roomMemberships[L].push(T))
            }, Se.prototype.attachServer = function(T, L) {
                var S = me(L),
                    $ = this.urlMap[S];
                if (!$) return this.urlMap[S] = {
                    server: T,
                    websockets: [],
                    roomMemberships: {}
                }, T
            }, Se.prototype.serverLookup = function(T) {
                var L = me(T),
                    S = this.urlMap[L];
                if (S) return S.server
            }, Se.prototype.websocketsLookup = function(T, L, S) {
                var $ = me(T),
                    J, te = this.urlMap[$];
                if (J = te ? te.websockets : [], L) {
                    var Ee = te.roomMemberships[L];
                    J = Ee || []
                }
                return S ? J.filter(function(Te) {
                    return Te !== S
                }) : J
            }, Se.prototype.removeServer = function(T) {
                delete this.urlMap[me(T)]
            }, Se.prototype.removeWebSocket = function(T, L) {
                var S = me(L),
                    $ = this.urlMap[S];
                $ && ($.websockets = re($.websockets, function(J) {
                    return J === T
                }))
            }, Se.prototype.removeMembershipFromRoom = function(T, L) {
                var S = this.urlMap[me(T.url)],
                    $ = S.roomMemberships[L];
                S && $ !== null && (S.roomMemberships[L] = re($, function(J) {
                    return J === T
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
                et = {
                    CONSTRUCTOR_ERROR: "Failed to construct 'WebSocket':",
                    CLOSE_ERROR: "Failed to execute 'close' on 'WebSocket':",
                    EVENT: {
                        CONSTRUCT: "Failed to construct 'Event':",
                        MESSAGE: "Failed to construct 'MessageEvent':",
                        CLOSE: "Failed to construct 'CloseEvent':"
                    }
                },
                Nt = function() {};
            Nt.prototype.stopPropagation = function() {}, Nt.prototype.stopImmediatePropagation = function() {}, Nt.prototype.initEvent = function(T, L, S) {
                T === void 0 && (T = "undefined"), L === void 0 && (L = !1), S === void 0 && (S = !1), this.type = "" + T, this.bubbles = Boolean(L), this.cancelable = Boolean(S)
            };
            var Ir = function(A) {
                    function T(L, S) {
                        if (S === void 0 && (S = {}), A.call(this), !L) throw new TypeError(et.EVENT_ERROR + " 1 argument required, but only 0 present.");
                        if (typeof S != "object") throw new TypeError(et.EVENT_ERROR + " parameter 2 ('eventInitDict') is not an object.");
                        var $ = S.bubbles,
                            J = S.cancelable;
                        this.type = "" + L, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = J ? Boolean(J) : !1, this.cancelBubble = !1, this.bubbles = $ ? Boolean($) : !1
                    }
                    return A && (T.__proto__ = A), T.prototype = Object.create(A && A.prototype), T.prototype.constructor = T, T
                }(Nt),
                ir = function(A) {
                    function T(L, S) {
                        if (S === void 0 && (S = {}), A.call(this), !L) throw new TypeError(et.EVENT.MESSAGE + " 1 argument required, but only 0 present.");
                        if (typeof S != "object") throw new TypeError(et.EVENT.MESSAGE + " parameter 2 ('eventInitDict') is not an object");
                        var $ = S.bubbles,
                            J = S.cancelable,
                            te = S.data,
                            Ee = S.origin,
                            Te = S.lastEventId,
                            ut = S.ports;
                        this.type = "" + L, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = J ? Boolean(J) : !1, this.canncelBubble = !1, this.bubbles = $ ? Boolean($) : !1, this.origin = "" + Ee, this.ports = typeof ut > "u" ? null : ut, this.data = typeof te > "u" ? null : te, this.lastEventId = "" + (Te || "")
                    }
                    return A && (T.__proto__ = A), T.prototype = Object.create(A && A.prototype), T.prototype.constructor = T, T
                }(Nt),
                Er = function(A) {
                    function T(L, S) {
                        if (S === void 0 && (S = {}), A.call(this), !L) throw new TypeError(et.EVENT.CLOSE + " 1 argument required, but only 0 present.");
                        if (typeof S != "object") throw new TypeError(et.EVENT.CLOSE + " parameter 2 ('eventInitDict') is not an object");
                        var $ = S.bubbles,
                            J = S.cancelable,
                            te = S.code,
                            Ee = S.reason,
                            Te = S.wasClean;
                        this.type = "" + L, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = J ? Boolean(J) : !1, this.cancelBubble = !1, this.bubbles = $ ? Boolean($) : !1, this.code = typeof te == "number" ? parseInt(te, 10) : 0, this.reason = "" + (Ee || ""), this.wasClean = Te ? Boolean(Te) : !1
                    }
                    return A && (T.__proto__ = A), T.prototype = Object.create(A && A.prototype), T.prototype.constructor = T, T
                }(Nt);

            function at(A) {
                var T = A.type,
                    L = A.target,
                    S = new Ir(T);
                return L && (S.target = L, S.srcElement = L, S.currentTarget = L), S
            }

            function St(A) {
                var T = A.type,
                    L = A.origin,
                    S = A.data,
                    $ = A.target,
                    J = new ir(T, {
                        data: S,
                        origin: L
                    });
                return $ && (J.target = $, J.srcElement = $, J.currentTarget = $), J
            }

            function ot(A) {
                var T = A.code,
                    L = A.reason,
                    S = A.type,
                    $ = A.target,
                    J = A.wasClean;
                J || (J = T === Fe.CLOSE_NORMAL || T === Fe.CLOSE_NO_STATUS);
                var te = new Er(S, {
                    code: T,
                    reason: L,
                    wasClean: J
                });
                return $ && (te.target = $, te.srcElement = $, te.currentTarget = $), te
            }

            function kt(A, T, L) {
                A.readyState = V.CLOSING;
                var S = Me.serverLookup(A.url),
                    $ = ot({
                        type: "close",
                        target: A.target,
                        code: T,
                        reason: L
                    }),
                    J = ot({
                        type: "server::close",
                        target: A,
                        code: T,
                        reason: L
                    });
                Ae(function() {
                    Me.removeWebSocket(A, A.url), A.readyState = V.CLOSED, A.dispatchEvent($), A.dispatchEvent(J), S && S.dispatchEvent($, S)
                }, A)
            }

            function Yt(A, T, L) {
                A.readyState = V.CLOSING;
                var S = Me.serverLookup(A.url),
                    $ = ot({
                        type: "close",
                        target: A.target,
                        code: T,
                        reason: L,
                        wasClean: !1
                    }),
                    J = ot({
                        type: "server::close",
                        target: A,
                        code: T,
                        reason: L,
                        wasClean: !1
                    }),
                    te = at({
                        type: "error",
                        target: A.target
                    });
                Ae(function() {
                    Me.removeWebSocket(A, A.url), A.readyState = V.CLOSED, A.dispatchEvent(te), A.dispatchEvent($), A.dispatchEvent(J), S && S.dispatchEvent($, S)
                }, A)
            }

            function xt(A) {
                return Object.prototype.toString.call(A) !== "[object Blob]" && !(A instanceof ArrayBuffer) && (A = String(A)), A
            }
            var m = new WeakMap;

            function p(A) {
                if (m.has(A)) return m.get(A);
                var T = new Proxy(A, {
                    get: function(S, $) {
                        return $ === "close" ? function(te) {
                            te === void 0 && (te = {});
                            var Ee = te.code || Fe.CLOSE_NORMAL,
                                Te = te.reason || "";
                            kt(T, Ee, Te)
                        } : $ === "send" ? function(te) {
                            te = xt(te), A.dispatchEvent(St({
                                type: "message",
                                data: te,
                                origin: this.url,
                                target: A
                            }))
                        } : $ === "on" ? function(te, Ee) {
                            A.addEventListener("server::" + te, Ee)
                        } : $ === "target" ? A : S[$]
                    }
                });
                return m.set(A, T), T
            }

            function O(A) {
                var T = encodeURIComponent(A).match(/%[89ABab]/g);
                return A.length + (T ? T.length : 0)
            }

            function k(A) {
                var T = new fe(A),
                    L = T.pathname,
                    S = T.protocol,
                    $ = T.hash;
                if (!A) throw new TypeError(et.CONSTRUCTOR_ERROR + " 1 argument required, but only 0 present.");
                if (L || (T.pathname = "/"), S === "") throw new SyntaxError(et.CONSTRUCTOR_ERROR + " The URL '" + T.toString() + "' is invalid.");
                if (S !== "ws:" && S !== "wss:") throw new SyntaxError(et.CONSTRUCTOR_ERROR + " The URL's scheme must be either 'ws' or 'wss'. '" + S + "' is not allowed.");
                if ($ !== "") throw new SyntaxError(et.CONSTRUCTOR_ERROR + " The URL contains a fragment identifier ('" + $ + "'). Fragment identifiers are not allowed in WebSocket URLs.");
                return T.toString()
            }

            function B(A) {
                if (A === void 0 && (A = []), !Array.isArray(A) && typeof A != "string") throw new SyntaxError(et.CONSTRUCTOR_ERROR + " The subprotocol '" + A.toString() + "' is invalid.");
                typeof A == "string" && (A = [A]);
                var T = A.map(function(S) {
                        return {
                            count: 1,
                            protocol: S
                        }
                    }).reduce(function(S, $) {
                        return S[$.protocol] = (S[$.protocol] || 0) + $.count, S
                    }, {}),
                    L = Object.keys(T).filter(function(S) {
                        return T[S] > 1
                    });
                if (L.length > 0) throw new SyntaxError(et.CONSTRUCTOR_ERROR + " The subprotocol '" + L[0] + "' is duplicated.");
                return A
            }
            var V = function(A) {
                function T(S, $) {
                    A.call(this), this._onopen = null, this._onmessage = null, this._onerror = null, this._onclose = null, this.url = k(S), $ = B($), this.protocol = $[0] || "", this.binaryType = "blob", this.readyState = T.CONNECTING;
                    var J = p(this),
                        te = Me.attachWebSocket(J, this.url);
                    Ae(function() {
                        if (te)
                            if (te.options.verifyClient && typeof te.options.verifyClient == "function" && !te.options.verifyClient()) this.readyState = T.CLOSED, F("error", "WebSocket connection to '" + this.url + "' failed: HTTP Authentication failed; no valid credentials available"), Me.removeWebSocket(J, this.url), this.dispatchEvent(at({
                                type: "error",
                                target: this
                            })), this.dispatchEvent(ot({
                                type: "close",
                                target: this,
                                code: Fe.CLOSE_NORMAL
                            }));
                            else {
                                if (te.options.selectProtocol && typeof te.options.selectProtocol == "function") {
                                    var Te = te.options.selectProtocol($),
                                        ut = Te !== "",
                                        sr = $.indexOf(Te) !== -1;
                                    if (ut && !sr) {
                                        this.readyState = T.CLOSED, F("error", "WebSocket connection to '" + this.url + "' failed: Invalid Sub-Protocol"), Me.removeWebSocket(J, this.url), this.dispatchEvent(at({
                                            type: "error",
                                            target: this
                                        })), this.dispatchEvent(ot({
                                            type: "close",
                                            target: this,
                                            code: Fe.CLOSE_NORMAL
                                        }));
                                        return
                                    }
                                    this.protocol = Te
                                }
                                this.readyState = T.OPEN, this.dispatchEvent(at({
                                    type: "open",
                                    target: this
                                })), te.dispatchEvent(at({
                                    type: "connection"
                                }), J)
                            }
                        else this.readyState = T.CLOSED, this.dispatchEvent(at({
                            type: "error",
                            target: this
                        })), this.dispatchEvent(ot({
                            type: "close",
                            target: this,
                            code: Fe.CLOSE_NORMAL
                        })), F("error", "WebSocket connection to '" + this.url + "' failed")
                    }, this)
                }
                A && (T.__proto__ = A), T.prototype = Object.create(A && A.prototype), T.prototype.constructor = T;
                var L = {
                    onopen: {},
                    onmessage: {},
                    onclose: {},
                    onerror: {}
                };
                return L.onopen.get = function() {
                    return this._onopen
                }, L.onmessage.get = function() {
                    return this._onmessage
                }, L.onclose.get = function() {
                    return this._onclose
                }, L.onerror.get = function() {
                    return this._onerror
                }, L.onopen.set = function(S) {
                    this.removeEventListener("open", this._onopen), this._onopen = S, this.addEventListener("open", S)
                }, L.onmessage.set = function(S) {
                    this.removeEventListener("message", this._onmessage), this._onmessage = S, this.addEventListener("message", S)
                }, L.onclose.set = function(S) {
                    this.removeEventListener("close", this._onclose), this._onclose = S, this.addEventListener("close", S)
                }, L.onerror.set = function(S) {
                    this.removeEventListener("error", this._onerror), this._onerror = S, this.addEventListener("error", S)
                }, T.prototype.send = function($) {
                    var J = this;
                    if (this.readyState === T.CLOSING || this.readyState === T.CLOSED) throw new Error("WebSocket is already in CLOSING or CLOSED state");
                    var te = St({
                            type: "server::message",
                            origin: this.url,
                            data: xt($)
                        }),
                        Ee = Me.serverLookup(this.url);
                    Ee && Ae(function() {
                        J.dispatchEvent(te, $)
                    }, Ee)
                }, T.prototype.close = function($, J) {
                    if ($ !== void 0 && (typeof $ != "number" || $ !== 1e3 && ($ < 3e3 || $ > 4999))) throw new TypeError(et.CLOSE_ERROR + " The code must be either 1000, or between 3000 and 4999. " + $ + " is neither.");
                    if (J !== void 0) {
                        var te = O(J);
                        if (te > 123) throw new SyntaxError(et.CLOSE_ERROR + " The message must not be greater than 123 bytes.")
                    }
                    if (!(this.readyState === T.CLOSING || this.readyState === T.CLOSED)) {
                        var Ee = p(this);
                        this.readyState === T.CONNECTING ? Yt(Ee, $ || Fe.CLOSE_ABNORMAL, J) : kt(Ee, $ || Fe.CLOSE_NO_STATUS, J)
                    }
                }, Object.defineProperties(T.prototype, L), T
            }(_e);
            V.CONNECTING = 0, V.prototype.CONNECTING = V.CONNECTING, V.OPEN = 1, V.prototype.OPEN = V.OPEN, V.CLOSING = 2, V.prototype.CLOSING = V.CLOSING, V.CLOSED = 3, V.prototype.CLOSED = V.CLOSED;
            var le = function(A) {
                return A.reduce(function(T, L) {
                    return T.indexOf(L) > -1 ? T : T.concat(L)
                }, [])
            };

            function ie() {
                return typeof window < "u" ? window : typeof process == "object" && typeof Fj == "function" && typeof Mt == "object" ? Mt : this
            }
            var ee = {
                    mock: !0,
                    verifyClient: null,
                    selectProtocol: null
                },
                w = function(A) {
                    function T(L, S) {
                        S === void 0 && (S = ee), A.call(this);
                        var $ = new fe(L);
                        $.pathname || ($.pathname = "/"), this.url = $.toString(), this.originalWebSocket = null;
                        var J = Me.attachServer(this, this.url);
                        if (!J) throw this.dispatchEvent(at({
                            type: "error"
                        })), new Error("A mock server is already listening on this url");
                        this.options = Object.assign({}, ee, S), this.options.mock && this.mockWebsocket()
                    }
                    return A && (T.__proto__ = A), T.prototype = Object.create(A && A.prototype), T.prototype.constructor = T, T.prototype.mockWebsocket = function() {
                        var S = ie();
                        this.originalWebSocket = S.WebSocket, S.WebSocket = V
                    }, T.prototype.restoreWebsocket = function() {
                        var S = ie();
                        this.originalWebSocket !== null && (S.WebSocket = this.originalWebSocket), this.originalWebSocket = null
                    }, T.prototype.stop = function(S) {
                        S === void 0 && (S = function() {}), this.options.mock && this.restoreWebsocket(), Me.removeServer(this.url), typeof S == "function" && S()
                    }, T.prototype.on = function(S, $) {
                        this.addEventListener(S, $)
                    }, T.prototype.close = function(S) {
                        S === void 0 && (S = {});
                        var $ = S.code,
                            J = S.reason,
                            te = S.wasClean,
                            Ee = Me.websocketsLookup(this.url);
                        Me.removeServer(this.url), Ee.forEach(function(Te) {
                            Te.readyState = V.CLOSED, Te.dispatchEvent(ot({
                                type: "close",
                                target: Te.target,
                                code: $ || Fe.CLOSE_NORMAL,
                                reason: J || "",
                                wasClean: te
                            }))
                        }), this.dispatchEvent(ot({
                            type: "close"
                        }), this)
                    }, T.prototype.emit = function(S, $, J) {
                        var te = this;
                        J === void 0 && (J = {});
                        var Ee = J.websockets;
                        Ee || (Ee = Me.websocketsLookup(this.url)), typeof J != "object" || arguments.length > 3 ? ($ = Array.prototype.slice.call(arguments, 1, arguments.length), $ = $.map(function(Te) {
                            return xt(Te)
                        })) : $ = xt($), Ee.forEach(function(Te) {
                            Array.isArray($) ? Te.dispatchEvent.apply(Te, [St({
                                type: S,
                                data: $,
                                origin: te.url,
                                target: Te.target
                            })].concat($)) : Te.dispatchEvent(St({
                                type: S,
                                data: $,
                                origin: te.url,
                                target: Te.target
                            }))
                        })
                    }, T.prototype.clients = function() {
                        return Me.websocketsLookup(this.url)
                    }, T.prototype.to = function(S, $, J) {
                        var te = this;
                        J === void 0 && (J = []);
                        var Ee = this,
                            Te = le(J.concat(Me.websocketsLookup(this.url, S, $)));
                        return {
                            to: function(ut, sr) {
                                return te.to.call(te, ut, sr, Te)
                            },
                            emit: function(sr, De) {
                                Ee.emit(sr, De, {
                                    websockets: Te
                                })
                            }
                        }
                    }, T.prototype.in = function() {
                        for (var S = [], $ = arguments.length; $--;) S[$] = arguments[$];
                        return this.to.apply(null, S)
                    }, T.prototype.simulate = function(S) {
                        var $ = Me.websocketsLookup(this.url);
                        S === "error" && $.forEach(function(J) {
                            J.readyState = V.CLOSED, J.dispatchEvent(at({
                                type: "error"
                            }))
                        })
                    }, T
                }(_e);
            w.of = function(T) {
                return new w(T)
            };
            var j = function(A) {
                function T(S, $) {
                    var J = this;
                    S === void 0 && (S = "socket.io"), $ === void 0 && ($ = ""), A.call(this), this.binaryType = "blob";
                    var te = new fe(S);
                    te.pathname || (te.pathname = "/"), this.url = te.toString(), this.readyState = T.CONNECTING, this.protocol = "", this.target = this, typeof $ == "string" || typeof $ == "object" && $ !== null ? this.protocol = $ : Array.isArray($) && $.length > 0 && (this.protocol = $[0]);
                    var Ee = Me.attachWebSocket(this, this.url);
                    Ae(function() {
                        Ee ? (this.readyState = T.OPEN, Ee.dispatchEvent(at({
                            type: "connection"
                        }), Ee, this), Ee.dispatchEvent(at({
                            type: "connect"
                        }), Ee, this), this.dispatchEvent(at({
                            type: "connect",
                            target: this
                        }))) : (this.readyState = T.CLOSED, this.dispatchEvent(at({
                            type: "error",
                            target: this
                        })), this.dispatchEvent(ot({
                            type: "close",
                            target: this,
                            code: Fe.CLOSE_NORMAL
                        })), F("error", "Socket.io connection to '" + this.url + "' failed"))
                    }, this), this.addEventListener("close", function(Te) {
                        J.dispatchEvent(ot({
                            type: "disconnect",
                            target: Te.target,
                            code: Te.code
                        }))
                    })
                }
                A && (T.__proto__ = A), T.prototype = Object.create(A && A.prototype), T.prototype.constructor = T;
                var L = {
                    broadcast: {}
                };
                return T.prototype.close = function() {
                    if (this.readyState === T.OPEN) {
                        var $ = Me.serverLookup(this.url);
                        return Me.removeWebSocket(this, this.url), this.readyState = T.CLOSED, this.dispatchEvent(ot({
                            type: "close",
                            target: this,
                            code: Fe.CLOSE_NORMAL
                        })), $ && $.dispatchEvent(ot({
                            type: "disconnect",
                            target: this,
                            code: Fe.CLOSE_NORMAL
                        }), $), this
                    }
                }, T.prototype.disconnect = function() {
                    return this.close()
                }, T.prototype.emit = function($) {
                    for (var J = [], te = arguments.length - 1; te-- > 0;) J[te] = arguments[te + 1];
                    if (this.readyState !== T.OPEN) throw new Error("SocketIO is already in CLOSING or CLOSED state");
                    var Ee = St({
                            type: $,
                            origin: this.url,
                            data: J
                        }),
                        Te = Me.serverLookup(this.url);
                    return Te && Te.dispatchEvent.apply(Te, [Ee].concat(J)), this
                }, T.prototype.send = function($) {
                    return this.emit("message", $), this
                }, L.broadcast.get = function() {
                    if (this.readyState !== T.OPEN) throw new Error("SocketIO is already in CLOSING or CLOSED state");
                    var S = this,
                        $ = Me.serverLookup(this.url);
                    if (!$) throw new Error("SocketIO can not find a server at the specified URL (" + this.url + ")");
                    return {
                        emit: function(te, Ee) {
                            return $.emit(te, Ee, {
                                websockets: Me.websocketsLookup(S.url, null, S)
                            }), S
                        },
                        to: function(te) {
                            return $.to(te, S)
                        },
                        in: function(te) {
                            return $.in(te, S)
                        }
                    }
                }, T.prototype.on = function($, J) {
                    return this.addEventListener($, J), this
                }, T.prototype.off = function($, J) {
                    this.removeEventListener($, J)
                }, T.prototype.hasListeners = function($) {
                    var J = this.listeners[$];
                    return Array.isArray(J) ? !!J.length : !1
                }, T.prototype.join = function($) {
                    Me.addMembershipToRoom(this, $)
                }, T.prototype.leave = function($) {
                    Me.removeMembershipFromRoom(this, $)
                }, T.prototype.to = function($) {
                    return this.broadcast.to($)
                }, T.prototype.in = function() {
                    return this.to.apply(null, arguments)
                }, T.prototype.dispatchEvent = function($) {
                    for (var J = this, te = [], Ee = arguments.length - 1; Ee-- > 0;) te[Ee] = arguments[Ee + 1];
                    var Te = $.type,
                        ut = this.listeners[Te];
                    if (!Array.isArray(ut)) return !1;
                    ut.forEach(function(sr) {
                        te.length > 0 ? sr.apply(J, te) : sr.call(J, $.data ? $.data : $)
                    })
                }, Object.defineProperties(T.prototype, L), T
            }(_e);
            j.CONNECTING = 0, j.OPEN = 1, j.CLOSING = 2, j.CLOSED = 3;
            var he = function(T, L) {
                return new j(T, L)
            };
            he.connect = function(T, L) {
                return he(T, L)
            };
            var pe = w,
                Ce = V,
                Pe = he;
            r.Server = pe, r.WebSocket = Ce, r.SocketIO = Pe, Object.defineProperty(r, "__esModule", {
                value: !0
            })
        })
    })(l_, l_.exports);
    var US = {
        exports: {}
    };
    (function(e) {
        (function() {
            function t(u, f) {
                var h = u.x - f.x,
                    g = u.y - f.y;
                return h * h + g * g
            }

            function r(u, f, h) {
                var g = f.x,
                    _ = f.y,
                    b = h.x - g,
                    C = h.y - _;
                if (b !== 0 || C !== 0) {
                    var P = ((u.x - g) * b + (u.y - _) * C) / (b * b + C * C);
                    P > 1 ? (g = h.x, _ = h.y) : P > 0 && (g += b * P, _ += C * P)
                }
                return b = u.x - g, C = u.y - _, b * b + C * C
            }

            function n(u, f) {
                for (var h = u[0], g = [h], _, b = 1, C = u.length; b < C; b++) _ = u[b], t(_, h) > f && (g.push(_), h = _);
                return h !== _ && g.push(_), g
            }

            function s(u, f, h, g, _) {
                for (var b = g, C, P = f + 1; P < h; P++) {
                    var x = r(u[P], u[f], u[h]);
                    x > b && (C = P, b = x)
                }
                b > g && (C - f > 1 && s(u, f, C, g, _), _.push(u[C]), h - C > 1 && s(u, C, h, g, _))
            }

            function o(u, f) {
                var h = u.length - 1,
                    g = [u[0]];
                return s(u, 0, h, f, g), g.push(u[h]), g
            }

            function c(u, f, h) {
                if (u.length <= 2) return u;
                var g = f !== void 0 ? f * f : 1;
                return u = h ? u : n(u, g), u = o(u, g), u
            }
            e.exports = c, e.exports.default = c
        })()
    })(US);
    const FS = US.exports;
    class BS {
        constructor(t, r, n) {
            ye(this, "DEFAULT_WIDTH", 400);
            ye(this, "DEFAULT_HEIGHT", 400);
            ye(this, "canvas");
            ye(this, "ctx");
            ye(this, "doodle");
            ye(this, "color", "#000");
            ye(this, "layer", 0);
            ye(this, "layers", 1);
            ye(this, "maxPoints", Number.MAX_SAFE_INTEGER);
            ye(this, "points", []);
            ye(this, "precision", 2);
            ye(this, "scale", {
                width: 1,
                height: 1
            });
            ye(this, "weight", 4);
            ye(this, "weightScale", 1);
            ye(this, "isInteracting", !1);
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
                x: Wt.toPrecision(n.x, this.precision),
                y: Wt.toPrecision(n.y, this.precision)
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
                points: FS(this.points, .5).map(r => ({
                    x: Wt.toPrecision(r.x, this.precision),
                    y: Wt.toPrecision(r.y, this.precision)
                })),
                weight: this.weight
            };
            return this.isInteracting = !1, this.points = [], t
        }
    }
    class Bj {
        constructor(t, r, n, s) {
            ye(this, "renderCanvas");
            ye(this, "canvases", []);
            ye(this, "maxPoints", Number.MAX_SAFE_INTEGER);
            ye(this, "tolerance", 1);
            ye(this, "lines", []);
            ye(this, "lines2", []);
            ye(this, "currentLine", {
                color: "#000",
                thickness: 0,
                points: []
            });
            ye(this, "isSubmitting", !1);
            ye(this, "isInteracting", !1);
            ye(this, "currentColor", "#000");
            ye(this, "currentThickness", 4);
            ye(this, "currentFrame", 0);
            ye(this, "width", 400);
            ye(this, "height", 400);
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
                n = FS(this.currentLine.points);
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
    class cp {
        constructor(t, r) {
            ye(this, "stageElement");
            ye(this, "width", 400);
            ye(this, "height", 400);
            ye(this, "interactCanvas");
            ye(this, "isDrawing", !1);
            ye(this, "callbacks", {});
            ye(this, "capturedPointer");
            ye(this, "onPointerDown", t => {
                if (t.preventDefault(), !t.isPrimary || this.capturedPointer) return;
                const r = this.getEventPoint(t);
                this.interactCanvas.onDown(r), this.stageElement.setPointerCapture(t.pointerId), this.capturedPointer = {
                    pointerId: t.pointerId,
                    pointerType: t.pointerType
                }
            });
            ye(this, "onPointerMove", t => {
                if (t.preventDefault(), !this.capturedPointer || !t.isPrimary || t.pointerType !== this.capturedPointer.pointerType) return;
                const r = this.getEventPoint(t);
                this.interactCanvas.onMove(r)
            });
            ye(this, "onLostPointerCapture", t => {
                if (t.preventDefault(), !this.capturedPointer || !t.isPrimary || t.pointerType !== this.capturedPointer.pointerType) return;
                this.interactCanvas.onUp(), this.emit("up");
                const r = this.capturedPointer.pointerId;
                this.stageElement.hasPointerCapture(r) && this.stageElement.releasePointerCapture(r), this.capturedPointer = void 0
            });
            ye(this, "onPointerEnd", t => {
                if (t.preventDefault(), !this.capturedPointer || !t.isPrimary || t.pointerType !== this.capturedPointer.pointerType) return;
                this.interactCanvas.onUp(), this.emit("up");
                const r = this.capturedPointer.pointerId;
                this.stageElement.hasPointerCapture(r) && this.stageElement.releasePointerCapture(r), this.capturedPointer = void 0
            });
            ye(this, "onMouseDown", t => {
                t.preventDefault();
                const r = this.getEventPoint(t);
                this.interactCanvas.onDown(r), this.isDrawing = !0
            });
            ye(this, "onMouseMove", t => {
                if (t.preventDefault(), !this.isDrawing) return;
                const r = this.getEventPoint(t);
                this.interactCanvas.onMove(r)
            });
            ye(this, "onMouseUp", t => {
                t.preventDefault(), this.interactCanvas.onUp(), this.isDrawing = !1, this.emit("up")
            });
            ye(this, "onTouchStart", t => {
                t.preventDefault();
                const r = this.getEventPoint(t.touches[0]);
                this.interactCanvas.onDown(r), this.isDrawing = !0
            });
            ye(this, "onTouchMove", t => {
                if (t.preventDefault(), !this.isDrawing) return;
                const r = this.getEventPoint(t.touches[0]);
                this.interactCanvas.onMove(r)
            });
            ye(this, "onTouchCancel", t => {
                t.preventDefault(), this.interactCanvas.onUp(), this.isDrawing = !1, this.emit("up")
            });
            ye(this, "onTouchEnd", t => {
                t.preventDefault(), this.interactCanvas.onUp(), this.isDrawing = !1, this.emit("up")
            });
            r.width && (this.width = r.width), r.height && (this.height = r.height), this.stageElement = t, this.setupElements(), this.setupEvents(), r.InteractCanvas ? this.interactCanvas = new r.InteractCanvas(t, this.width, this.height, r) : this.interactCanvas = new Bj(t, this.width, this.height, r)
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
                g = (this.getPropValue(r, "padding-top") + this.getPropValue(r, "padding-bottom")) * c;
            return {
                scaleX: (n.width - u - h) / t.width,
                scaleY: (n.height - f - g) / t.height,
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
    class u_ {
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
            var _;
            const n = xS(r.room.appTag),
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
                    TV_TWITCH_CLIENT_ID: "kevtapj8zlyw5lh8ulpwyuj967hdqu",
                    BASE_URL: "https://bundles.jackbox.tv/main/@moderator/",
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
                Uj("[Feedback] sendToSlack", C)
            } catch (b) {
                console.error("[Feedback] sendToSlack", b)
            }
        }
    }
    class GS {
        static withTypes(t, r) {
            let n = t;
            return r.forEach(s => {
                s === "html" && (n = this.html(n)), s === "username" && (n = this.username(n)), s === "emoji" && (n = this.emoji(n)), s === "input" && (n = this.input(n))
            }), n
        }
        static html(t) {
            if (String(t).match(/<fart>/g)) {
                const n = new Audio(new URL("main/@moderator/assets/4af6cbea.wav", self.location).href);
                n.volume = .1, n.play()
            }
            const r = /<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g;
            return String(t).replace(r, "")
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
    const Gj = {
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
            REMOVE: "Remover",
            RESET: "Reiniciar",
            SUBMIT: "Enviar",
            TRY_AGAIN: "Volver a intentarlo",
            UNDO: "Deshacer",
            YES: "S\xED"
        },
        Wj = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "indicaciones ocultas en los dispositivos de los jugadores",
                VISIBILITY_CONTROLLER_ON: "indicaciones se muestran en los dispositivos de los jugadores",
                VISIBILITY_SCREEN_OFF: "indicaciones ocultas en la pantalla del juego",
                VISIBILITY_SCREEN_ON: "indicaciones se muestran en la pantalla del juego"
            }
        },
        jj = {
            DISCONNECTED: "Te has desconectado.",
            DRAWING_NOTHING: "\xA1Tienes que dibujar algo!",
            PLAYER_KICKED: "Has sido echado de la partida por un moderador.",
            ROOM_DESTROYED: "\xA1Gracias por jugar!",
            ROOM_DISCONNECTED: "Desconectado",
            TEXT_NAUGHTY: "Lo siento, no puedes escribir eso. Seamos respetuosos con los dem\xE1s jugadores.",
            TEXT_NOTHING: "Tienes que escribir algo",
            TITLE: "Error"
        },
        Hj = "CARGANDO",
        Kj = {
            JOINED_COUNT: "x | Se ha unido {count} de {maxPlayers} jugadores | Se han unido {count} de {maxPlayers} jugadores",
            PLAYERS_NEEDED: "x | Se necesita {count} jugador para empezar | Se necesitan {count} jugadores para empezar",
            WAITING_FOR_VIP: "Esperando a que {name} inicie la partida",
            WAITING_FOR_GAMEPAD: "Esperando a que empiece la partida",
            GAME_STARTING: "La partida va a empezar",
            BUTTON_START: "Pulsa para empezar",
            BUTTON_CANCEL: "Pulsa para cancelar"
        },
        Vj = {
            GALLERY_LINK: "Visita la galer\xEDa",
            PLAY_AGAIN: "\xBFJugar otra vez?",
            BUTTON_SAME_PLAYERS: "Mismos jugadores",
            BUTTON_NEW_PLAYERS: "Nuevos jugadores"
        },
        Yj = {
            AND: "Y",
            OR: "OR"
        },
        qj = {
            BUTTON_SKIP: "Omitir",
            BUTTON_NEXT: "Siguiente",
            BUTTON_DONE: "\xA1Vamos!"
        },
        zj = {
            NAME: "P\xDABLICO"
        },
        Xj = {
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
        Jj = {
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
        Zj = {
            ACTION: Gj,
            ALT: Wj,
            ERROR: jj,
            LOADING: Hj,
            LOBBY: Kj,
            POST_GAME: Vj,
            SEPARATOR: Yj,
            TUTORIAL: qj,
            AUDIENCE: zj,
            UGC: Xj,
            TOAST: Jj
        },
        Qj = {
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
        e8 = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "sujets non affich\xE9s sur les appareils des joueurs",
                VISIBILITY_CONTROLLER_ON: "sujets affich\xE9s sur les appareils des joueurs",
                VISIBILITY_SCREEN_OFF: "sujets non affich\xE9s sur l'\xE9cran de jeu",
                VISIBILITY_SCREEN_ON: "sujets affich\xE9s sur l'\xE9cran de jeu"
            }
        },
        t8 = {
            DISCONNECTED: "Vous avez \xE9t\xE9 d\xE9connect\xE9(e).",
            DRAWING_NOTHING: "Vous devez dessiner quelque chose\xA0!",
            PLAYER_KICKED: "Vous avez \xE9t\xE9 \xE9ject\xE9(e) de la partie par un mod\xE9rateur.",
            ROOM_DESTROYED: "Merci d'avoir jou\xE9\xA0!",
            ROOM_DISCONNECTED: "D\xE9connexion",
            TEXT_NAUGHTY: "Je crains que vous ne puissiez pas \xE9crire \xE7a. Respectez les autres joueurs.",
            TEXT_NOTHING: "Vous ne pouvez pas ne rien entrer",
            TITLE: "Erreur"
        },
        r8 = "CHARGEMENT",
        n8 = {
            JOINED_COUNT: "x | {count}\xA0joueur sur {maxPlayers} a rejoint la partie | {count}\xA0joueurs sur {maxPlayers} ont rejoint la partie",
            PLAYERS_NEEDED: "x | {count}\xA0joueur n\xE9cessaire pour commencer | {count}\xA0joueurs n\xE9cessaires pour commencer",
            WAITING_FOR_VIP: "En attente de {name} pour commencer la partie",
            WAITING_FOR_GAMEPAD: "En attente du d\xE9but de la partie",
            GAME_STARTING: "La partie commence",
            BUTTON_START: "Appuyer pour commencer",
            BUTTON_CANCEL: "Appuyer pour annuler"
        },
        i8 = {
            GALLERY_LINK: "Visiter la galerie",
            PLAY_AGAIN: "Rejouer\xA0?",
            BUTTON_SAME_PLAYERS: "Les m\xEAmes joueurs",
            BUTTON_NEW_PLAYERS: "De nouveaux joueurs"
        },
        s8 = {
            AND: "ET",
            OR: "OU"
        },
        a8 = {
            BUTTON_SKIP: "Passer",
            BUTTON_NEXT: "Suivant",
            BUTTON_DONE: "Allons-y\xA0!"
        },
        o8 = {
            NAME: "SPECTATEURS"
        },
        c8 = {
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
        l8 = {
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
        u8 = {
            ACTION: Qj,
            ALT: e8,
            ERROR: t8,
            LOADING: r8,
            LOBBY: n8,
            POST_GAME: i8,
            SEPARATOR: s8,
            TUTORIAL: a8,
            AUDIENCE: o8,
            UGC: c8,
            TOAST: l8
        },
        f8 = {
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
        d8 = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "definizioni nascoste sui dispositivi dei giocatori",
                VISIBILITY_CONTROLLER_ON: "definizioni visualizzate sui dispositivi dei giocatori",
                VISIBILITY_SCREEN_OFF: "definizioni nascoste sullo schermo di gioco",
                VISIBILITY_SCREEN_ON: "definizioni visualizzate sullo schermo di gioco"
            }
        },
        h8 = {
            DISCONNECTED: "\xC8 stata effettuata la disconnessione.",
            DRAWING_NOTHING: "Devi disegnare qualcosa!",
            PLAYER_KICKED: "Un moderatore ti ha cacciato dalla partita.",
            ROOM_DESTROYED: "Grazie per aver scelto di giocare con noi!",
            ROOM_DISCONNECTED: "Disconnessione effettuata",
            TEXT_NAUGHTY: "Purtroppo non puoi scrivere questa cosa. Abbi rispetto per gli altri giocatori.",
            TEXT_NOTHING: "Devi per forza inserire qualcosa!",
            TITLE: "Errore"
        },
        p8 = "CARICAMENTO",
        g8 = {
            JOINED_COUNT: "x | Sta partecipando {count} giocatore su {maxPlayers} | Stanno partecipando {count} giocatori su {maxPlayers}",
            PLAYERS_NEEDED: "x | Manca {count} giocatore per iniziare | Mancano {count} giocatori per iniziare",
            WAITING_FOR_VIP: "In attesa di {name} per iniziare la partita",
            WAITING_FOR_GAMEPAD: "In attesa d'iniziare la partita",
            GAME_STARTING: "La partita sta per iniziare",
            BUTTON_START: "Premi per avviare",
            BUTTON_CANCEL: "Premi per annullare"
        },
        m8 = {
            GALLERY_LINK: "Visita la galleria",
            PLAY_AGAIN: "Vuoi giocare di nuovo?",
            BUTTON_SAME_PLAYERS: "Stessi giocatori",
            BUTTON_NEW_PLAYERS: "Nuovi giocatori"
        },
        v8 = {
            AND: "E",
            OR: "O"
        },
        E8 = {
            BUTTON_SKIP: "Salta",
            BUTTON_NEXT: "Avanti",
            BUTTON_DONE: "Iniziamo!"
        },
        _8 = {
            NAME: "PUBBLICO"
        },
        y8 = {
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
        b8 = {
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
        T8 = {
            ACTION: f8,
            ALT: d8,
            ERROR: h8,
            LOADING: p8,
            LOBBY: g8,
            POST_GAME: m8,
            SEPARATOR: v8,
            TUTORIAL: E8,
            AUDIENCE: _8,
            UGC: y8,
            TOAST: b8
        },
        S8 = {
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
        O8 = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "Prompts auf Spielerger\xE4ten verborgen",
                VISIBILITY_CONTROLLER_ON: "Prompts auf Spielerger\xE4ten angezeigt",
                VISIBILITY_SCREEN_OFF: "Prompts auf Spielbildschirm verborgen",
                VISIBILITY_SCREEN_ON: "Prompts auf Spielbildschirm angezeigt"
            }
        },
        A8 = {
            DISCONNECTED: "Deine Verbindung wurde getrennt.",
            DRAWING_NOTHING: "Du musst irgendwas zeichnen!",
            PLAYER_KICKED: "Du wurdest von einem Moderator gekickt.",
            ROOM_DESTROYED: "Danke f\xFCrs Spielen!",
            ROOM_DISCONNECTED: "Verbindung getrennt",
            TEXT_NAUGHTY: "Das kannst du leider nicht schreiben. Bitte nimm R\xFCcksicht auf deine Mitspieler.",
            TEXT_NOTHING: "Du musst etwas eingeben!",
            TITLE: "Fehler"
        },
        I8 = "LADE",
        R8 = {
            JOINED_COUNT: "x | {count} von {maxPlayers} Spielern sind beigetreten | {count} von {maxPlayers} Spielern sind beigetreten",
            PLAYERS_NEEDED: "x | {count} Spieler zum Starten ben\xF6tigt | {count} Spieler zum Starten ben\xF6tigt",
            WAITING_FOR_VIP: "Warten, bis {name} das Spiel startet",
            WAITING_FOR_GAMEPAD: "Warten, bis das Spiel startet",
            GAME_STARTING: "Das Spiel beginnt",
            BUTTON_START: "Zum Starten dr\xFCcken",
            BUTTON_CANCEL: "Zum Abbrechen dr\xFCcken"
        },
        C8 = {
            GALLERY_LINK: "Galerie besuchen",
            PLAY_AGAIN: "Erneut spielen?",
            BUTTON_SAME_PLAYERS: "Selbe Spieler",
            BUTTON_NEW_PLAYERS: "Neue Spieler"
        },
        w8 = {
            AND: "UND",
            OR: "ODER"
        },
        N8 = {
            BUTTON_SKIP: "\xDCberspringen",
            BUTTON_NEXT: "Weiter",
            BUTTON_DONE: "Los geht's!"
        },
        L8 = {
            NAME: "PUBLIKUM"
        },
        $8 = {
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
        P8 = {
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
        D8 = {
            ACTION: S8,
            ALT: O8,
            ERROR: A8,
            LOADING: I8,
            LOBBY: R8,
            POST_GAME: C8,
            SEPARATOR: w8,
            TUTORIAL: N8,
            AUDIENCE: L8,
            UGC: $8,
            TOAST: P8
        },
        M8 = {
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
        k8 = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "los enunciados no se muestran en el dispositivo del jugador",
                VISIBILITY_CONTROLLER_ON: "los enunciados se muestran en el dispositivo del jugador",
                VISIBILITY_SCREEN_OFF: "los enunciados no se muestran en la pantalla",
                VISIBILITY_SCREEN_ON: "los enunciados se muestran en la pantalla"
            }
        },
        x8 = {
            DISCONNECTED: "Te has desconectado.",
            DRAWING_NOTHING: "\xA1Tienes que dibujar algo!",
            PLAYER_KICKED: "Un moderador te ha expulsado de la partida.",
            ROOM_DESTROYED: "\xA1Gracias por jugar!",
            ROOM_DISCONNECTED: "Desconectado",
            TEXT_NAUGHTY: "Lo siento, no puedes escribir eso. Hay que ser respetuoso con los dem\xE1s jugadores.",
            TEXT_NOTHING: "Tienes que escribir algo",
            TITLE: "Error"
        },
        U8 = "CARGANDO",
        F8 = {
            JOINED_COUNT: "x | Se ha unido {count} de {maxPlayers} jugadores | Se han unido {count} de {maxPlayers} jugadores",
            PLAYERS_NEEDED: "x | Se necesita {count} jugador para empezar | Se necesitan {count} jugadores para empezar",
            WAITING_FOR_VIP: "Esperando a que {name} inicie la partida",
            WAITING_FOR_GAMEPAD: "Esperando a que empiece la partida",
            GAME_STARTING: "La partida va a empezar",
            BUTTON_START: "Pulsa para empezar",
            BUTTON_CANCEL: "Pulsa para cancelar"
        },
        B8 = {
            GALLERY_LINK: "Visita la galer\xEDa",
            PLAY_AGAIN: "\xBFJugar otra vez?",
            BUTTON_SAME_PLAYERS: "Los mismos jugadores",
            BUTTON_NEW_PLAYERS: "Otros jugadores"
        },
        G8 = {
            AND: "Y",
            OR: "O"
        },
        W8 = {
            BUTTON_SKIP: "Omitir",
            BUTTON_NEXT: "Siguiente",
            BUTTON_DONE: "\xA1Vamos!"
        },
        j8 = {
            NAME: "P\xDABLICO"
        },
        H8 = {
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
        K8 = {
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
        V8 = {
            ACTION: M8,
            ALT: k8,
            ERROR: x8,
            LOADING: U8,
            LOBBY: F8,
            POST_GAME: B8,
            SEPARATOR: G8,
            TUTORIAL: W8,
            AUDIENCE: j8,
            UGC: H8,
            TOAST: K8
        },
        Y8 = {
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
        q8 = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "indicaciones ocultas en los dispositivos de los jugadores",
                VISIBILITY_CONTROLLER_ON: "indicaciones presentes en los dispositivos de los jugadores",
                VISIBILITY_SCREEN_OFF: "indicaciones ocultas en la pantalla del juego",
                VISIBILITY_SCREEN_ON: "indicaciones presentes en la pantalla del juego"
            }
        },
        z8 = {
            DISCONNECTED: "Te desconectaste.",
            DRAWING_NOTHING: "\xA1Tienes que dibujar algo!",
            PLAYER_KICKED: "Un moderador te expuls\xF3 del juego.",
            ROOM_DESTROYED: "\xA1Gracias por jugar!",
            ROOM_DISCONNECTED: "Desconectado",
            TEXT_NAUGHTY: "Lo siento, no puedes escribir eso. Seamos respetuosos con los dem\xE1s jugadores.",
            TEXT_NOTHING: "\xA1Tienes que escribir algo!",
            TITLE: "Error"
        },
        X8 = "CARGANDO",
        J8 = {
            JOINED_COUNT: "x | Se unieron {count} de {maxPlayers} jugadores | Se unieron {count} de {maxPlayers} jugadores",
            PLAYERS_NEEDED: "x | Se necesita {count} jugador para empezar | Se necesitan {count} jugadores para empezar",
            WAITING_FOR_VIP: "Esperando a que {name} inicie la partida",
            WAITING_FOR_GAMEPAD: "Esperando a que empiece la partida",
            GAME_STARTING: "La partida va a empezar",
            BUTTON_START: "Pulsa para empezar",
            BUTTON_CANCEL: "Pulsa para cancelar"
        },
        Z8 = {
            GALLERY_LINK: "Visita la galer\xEDa",
            PLAY_AGAIN: "\xBFJugar otra vez?",
            BUTTON_SAME_PLAYERS: "Los mismos jugadores",
            BUTTON_NEW_PLAYERS: "Otros jugadores"
        },
        Q8 = {
            AND: "Y",
            OR: "O"
        },
        e4 = {
            BUTTON_SKIP: "Omitir",
            BUTTON_NEXT: "Siguiente",
            BUTTON_DONE: "\xA1Vamos!"
        },
        t4 = {
            NAME: "P\xDABLICO"
        },
        r4 = {
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
        n4 = {
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
        i4 = {
            ACTION: Y8,
            ALT: q8,
            ERROR: z8,
            LOADING: X8,
            LOBBY: J8,
            POST_GAME: Z8,
            SEPARATOR: Q8,
            TUTORIAL: e4,
            AUDIENCE: t4,
            UGC: r4,
            TOAST: n4
        },
        s4 = {
            en: Zj,
            fr: u8,
            it: T8,
            de: D8,
            es: V8,
            "es-XL": i4
        },
        a4 = {
            LABEL: "RAMA",
            REFRESH_REQUIRED: "Se requiere recargar",
            PREFERRED: "RAMA PREFERIDA",
            SELECT: "Selecciona una rama",
            WAITING: "Esperando una sala"
        },
        o4 = {
            UNSUPPORTED_BROWSER: "El juego no es compatible con este navegador. En '?' y AYUDA puedes ver la lista de navegadores compatibles.",
            ROOM_IS_FULL: "La sala est\xE1 llena",
            ROOM_NOT_FOUND: "No se encuentra la sala",
            AUDIENCE_IS_FULL: "El p\xFAblico est\xE1 completo",
            UNABLE_TO_CONNECT: "No podemos conectarte a los servidores de Jackbox Games. Puede ser debido a los bloqueadores de anuncios y las extensiones de privacidad.",
            UNABLE_TO_PRELOAD: "No se ha podido precargar este lote de juegos",
            KICKED: "No puedes unirte porque te ha expulsado un moderador",
            REQUIRES_TWITCH_LOGIN: "Este juego requiere inicio de sesi\xF3n de Twitch",
            ROOM_IS_LOCKED: "La sala est\xE1 bloqueada",
            INCORRECT_PASSWORD: "Contrase\xF1a incorrecta",
            GENERIC: "Error al unirte a la sala",
            FILTER_NAME: "Esta partida tiene activados los filtros de lenguaje vulgar. Elige un nombre diferente."
        },
        c4 = {
            NAME: "NOMBRE",
            NAME_PLACEHOLDER: "INDICA TU NOMBRE",
            PASSWORD_PLACEHOLDER: "INTRODUCE CONTRASE\xD1A DE 5 D\xCDGITOS",
            PASSWORD_REQUIRED_TITLE: "Requiere contrase\xF1a",
            PASSWORD_REQUIRED_BODY: "Introduce la contrase\xF1a o \xFAnete como p\xFAblico",
            PASSWORD_JOIN_AS_PLAYER: "Unirse como jugador",
            PASSWORD_JOIN_AS_AUDIENCE: "Unirse como p\xFAblico",
            ROOM_CODE: "C\xD3DIGO DE SALA",
            ROOM_CODE_PLACEHOLDER: "INTRODUCE EL C\xD3DIGO DE 4 CARACTERES"
        },
        l4 = "Enlace a la p\xE1gina principal de Jackbox Games",
        u4 = {
            APPEARANCE: "APARIENCIA",
            DARK: "oscuro",
            HELP: "AYUDA",
            TWITCH: "TWITCH",
            LIGHT: "claro",
            LOGOUT: "CERRAR SESI\xD3N",
            MERCH: "MERCHANDISING",
            PAST_GAMES: "PARTIDAS ANTERIORES",
            MAILING_LIST: "LISTA DE CORREO",
            MODERATOR: "MODERADOR"
        },
        f4 = {
            CALL_TO_ACTION: {
                SHOP: "VER PARTIDA Y TIENDA",
                VIEW: "VER ESTA PARTIDA"
            },
            NEW: "NUEVO",
            PLAYED_ON: "JUGADO EL",
            REMOVE: {
                CONFIRM: "\xBFSeguro?",
                DESCRIPTION: `Esto remover\xE1 permanentemente esta partida
de tu lista de partidas anteriores.`,
                MANAGE: "\xBFRemover partida?",
                TITLE: "\xBFSeguro?"
            }
        },
        d4 = {
            EMPTY: "A\xFAn no hay partidas recientes",
            MANAGE: "ADMINISTRAR",
            TITLE: "TUS PARTIDAS ANTERIORES"
        },
        h4 = {
            TITLE: "PARTIDAS RECIENTES",
            VIEW_ALL: {
                BUTTON: "VER TODAS",
                LINK: "VER TODAS LAS PARTIDAS ANTERIORES"
            }
        },
        p4 = {
            GAME_FULL: "La partida est\xE1 completa",
            GAME_STARTED: "La partida ha empezado",
            ROOM_NOT_FOUND: "No se encuentra la sala"
        },
        g4 = {
            GAME_FULL: "LA PARTIDA EST\xC1 COMPLETA",
            GAME_STARTED: "LA PARTIDA HA EMPEZADO",
            JOIN_AUDIENCE: "UNIRSE AL P\xDABLICO",
            RECONNECT: "RECONECTAR",
            TWITCH_LOGIN: "INICIAR SESI\xD3N CON TWITCH"
        },
        m4 = {
            CAMERA: "[b]AVISO:[/b] No se detecta ninguna c\xE1mara, pero puedes jugar sin hacerte una foto. Si crees que se trata de un error, cambia de navegador.",
            STYLE: "[b]AVISO:[/b] Tu navegador est\xE1 un poco desactualizado, as\xED que es posible que el juego no se vea del todo bien.",
            TOS: "Traducción al español hecha por la comunidad. No afiliada con Jackbox Games. Al hacer clic en {submit}, aceptas las [tos]Condiciones del servicio[/tos]"
        },
        v4 = {
            BRANCH: a4,
            ERROR: o4,
            FORM: c4,
            HOMEPAGE_LINK: l4,
            MENU: u4,
            PAST_GAME: f4,
            PAST_GAMES: d4,
            RECENT_GAMES: h4,
            STATUS: p4,
            SUBMIT: g4,
            WARNING: m4
        },
        E4 = {
            LABEL: "SECTION",
            REFRESH_REQUIRED: "Actualisation requise",
            PREFERRED: "SECTION PR\xC9F\xC9R\xC9E",
            SELECT: "Choisissez une section",
            WAITING: "En attente de la salle"
        },
        _4 = {
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
        y4 = {
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
        b4 = "Lien vers la page d'accueil de Jackbox Games",
        T4 = {
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
        S4 = {
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
        O4 = {
            EMPTY: "Aucune ancienne partie",
            MANAGE: "G\xC9RER",
            TITLE: "VOS ANCIENNES PARTIES"
        },
        A4 = {
            TITLE: "PARTIES R\xC9CENTES",
            VIEW_ALL: {
                BUTTON: "VOIR TOUT",
                LINK: "VOIR TOUTES LES ANCIENNES PARTIES"
            }
        },
        I4 = {
            GAME_FULL: "La salle est pleine.",
            GAME_STARTED: "La partie a commenc\xE9.",
            ROOM_NOT_FOUND: "Salle introuvable"
        },
        R4 = {
            GAME_FULL: "LA SALLE EST PLEINE.",
            GAME_STARTED: "LA PARTIE A COMMENC\xC9.",
            JOIN_AUDIENCE: "REJOINDRE EN TANT QUE SPECTATEUR",
            RECONNECT: "SE RECONNECTER",
            TWITCH_LOGIN: "SE CONNECTER AVEC TWITCH"
        },
        C4 = {
            CAMERA: "[b]ATTENTION\xA0:[/b] Nous ne d\xE9tectons aucune cam\xE9ra, mais vous pouvez jouer sans afficher votre photo. Si vous pensez qu'il s'agit d'une erreur, essayez de rejoindre en utilisant un autre navigateur.",
            STYLE: "[b]ATTENTION\xA0:[/b] Votre navigateur semble obsol\xE8te. Vous risquez de rencontrer des probl\xE8mes d'affichage avec ce jeu.",
            TOS: "En cliquant sur {submit}, vous acceptez nos [tos]Conditions de service[/tos]."
        },
        w4 = {
            BRANCH: E4,
            ERROR: _4,
            FORM: y4,
            HOMEPAGE_LINK: b4,
            MENU: T4,
            PAST_GAME: S4,
            PAST_GAMES: O4,
            RECENT_GAMES: A4,
            STATUS: I4,
            SUBMIT: R4,
            WARNING: C4
        },
        N4 = {
            LABEL: "BRANCH",
            REFRESH_REQUIRED: "Ricarica necessaria",
            PREFERRED: "BRANCH PREFERITA",
            SELECT: "Scegli una branch",
            WAITING: "In attesa di una stanza"
        },
        L4 = {
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
        $4 = {
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
        P4 = "Link alla homepage di Jackbox Games",
        D4 = {
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
        M4 = {
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
        k4 = {
            EMPTY: "Nessun gioco precedente",
            MANAGE: "GESTISCI",
            TITLE: "I TUOI GIOCHI PRECEDENTI"
        },
        x4 = {
            TITLE: "GIOCHI RECENTI",
            VIEW_ALL: {
                BUTTON: "VISUALIZZA TUTTO",
                LINK: "VISUALIZZA TUTTI I GIOCHI RECENTI"
            }
        },
        U4 = {
            GAME_FULL: "La partita \xE8 al completo",
            GAME_STARTED: "La partita \xE8 gi\xE0 iniziata",
            ROOM_NOT_FOUND: "Stanza non trovata"
        },
        F4 = {
            GAME_FULL: "LA PARTITA \xC8 AL COMPLETO",
            GAME_STARTED: "LA PARTITA \xC8 GI\xC0 INIZIATA",
            JOIN_AUDIENCE: "PARTECIPA COME PUBBLICO",
            RECONNECT: "RICOLLEGATI",
            TWITCH_LOGIN: "ACCEDI CON TWITCH"
        },
        B4 = {
            CAMERA: "[b]AVVISO:[/b] Non rileviamo la telecamera, ma puoi giocare anche senza aggiungere una foto. Se la cosa non ti torna, prova ad accedere usando un altro browser.",
            STYLE: "[b]AVVISO:[/b] Il tuo browser \xE8 obsoleto e avr\xE0 dei problemi a visualizzare il gioco.",
            TOS: "Selezionando {submit}, accetti le [tos]Condizioni del servizio[/tos]"
        },
        G4 = {
            BRANCH: N4,
            ERROR: L4,
            FORM: $4,
            HOMEPAGE_LINK: P4,
            MENU: D4,
            PAST_GAME: M4,
            PAST_GAMES: k4,
            RECENT_GAMES: x4,
            STATUS: U4,
            SUBMIT: F4,
            WARNING: B4
        },
        W4 = {
            LABEL: "ZWEIG",
            REFRESH_REQUIRED: "Refresh ben\xF6tigt",
            PREFERRED: "BEVORZUGTER ZWEIG",
            SELECT: "W\xE4hle deinen Zweig aus",
            WAITING: "Warte auf Raum"
        },
        j4 = {
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
        H4 = {
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
        K4 = "Link zur Homepage von Jackbox Games",
        V4 = {
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
        Y4 = {
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
        q4 = {
            EMPTY: "Noch keine bisherigen Spiele",
            MANAGE: "VERWALTEN",
            TITLE: "DEINE BISHERIGEN SPIELE"
        },
        z4 = {
            TITLE: "AKTUELLE SPIELE",
            VIEW_ALL: {
                BUTTON: "ALLE ANSEHEN",
                LINK: "ALLE BISHERIGEN SPIELE ANSEHEN"
            }
        },
        X4 = {
            GAME_FULL: "Spiel ist voll",
            GAME_STARTED: "Spiel hat bereits begonnen",
            ROOM_NOT_FOUND: "Raum wurde nicht gefunden."
        },
        J4 = {
            GAME_FULL: "SPIEL IST VOLL",
            GAME_STARTED: "SPIEL HAT BEREITS BEGONNEN",
            JOIN_AUDIENCE: "INS PUBLIKUM SETZEN",
            RECONNECT: "NEU VERBINDEN",
            TWITCH_LOGIN: "MIT TWITCH ANMELDEN"
        },
        Z4 = {
            CAMERA: "[b]ACHTUNG:[/b] Es wurde keine Kamera erkannt, aber du kannst das Spiel auch ohne Foto spielen. Falls eine Kamera vorhanden ist, probiere es mit einem anderen Browser.",
            STYLE: "[b]ACHTUNG:[/b] Dein Browser scheint etwas veraltet zu sein. Es k\xF6nnte Probleme bei der Anzeige dieses Spiels geben.",
            TOS: "Wenn du auf {submit} klickst, erkl\xE4rst du dich mit unseren [tos]Nutzungsbedingungen[/tos] einverstanden"
        },
        Q4 = {
            BRANCH: W4,
            ERROR: j4,
            FORM: H4,
            HOMEPAGE_LINK: K4,
            MENU: V4,
            PAST_GAME: Y4,
            PAST_GAMES: q4,
            RECENT_GAMES: z4,
            STATUS: X4,
            SUBMIT: J4,
            WARNING: Z4
        },
        eH = {
            LABEL: "RAMA",
            REFRESH_REQUIRED: "Actualizaci\xF3n requerida",
            PREFERRED: "RAMA PREFERIDA",
            SELECT: "Selecciona una rama",
            WAITING: "Esperando la sala"
        },
        tH = {
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
        rH = {
            NAME: "NOMBRE",
            NAME_PLACEHOLDER: "INDICA TU NOMBRE",
            PASSWORD_PLACEHOLDER: "INTRODUCIR CONTRASE\xD1A DE 5 D\xCDGITOS",
            PASSWORD_REQUIRED_TITLE: "Hace falta una contrase\xF1a",
            PASSWORD_REQUIRED_BODY: "Introduce la contrase\xF1a o \xFAnete como p\xFAblico",
            PASSWORD_JOIN_AS_PLAYER: "Unirse como jugador",
            PASSWORD_JOIN_AS_AUDIENCE: "Unirse como p\xFAblico",
            ROOM_CODE: "C\xD3DIGO DE SALA",
            ROOM_CODE_PLACEHOLDER: "INTRODUCIR C\xD3DIGO DE 4 CARACTERES"
        },
        nH = "Enlace a la p\xE1gina principal de Jackbox Games",
        iH = {
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
        sH = {
            CALL_TO_ACTION: {
                SHOP: "VER PARTIDA Y TIENDA",
                VIEW: "VER ESTA PARTIDA"
            },
            NEW: "NUEVO",
            PLAYED_ON: "JUGADO EL",
            REMOVE: {
                CONFIRM: "\xBFSeguro?",
                DESCRIPTION: `Esto remover\xE1 permanentemente esta partida
de tu lista de partidas anteriores.`,
                MANAGE: "\xBFRemover partida?",
                TITLE: "\xBFSeguro?"
            }
        },
        aH = {
            EMPTY: "A\xFAn no hay partidas recientes",
            MANAGE: "ADMINISTRAR",
            TITLE: "TUS PARTIDAS ANTERIORES"
        },
        oH = {
            TITLE: "PARTIDAS RECIENTES",
            VIEW_ALL: {
                BUTTON: "VER TODAS",
                LINK: "VER TODAS LAS PARTIDAS ANTERIORES"
            }
        },
        cH = {
            GAME_FULL: "La partida est\xE1 completa",
            GAME_STARTED: "La partida ha empezado",
            ROOM_NOT_FOUND: "No se encuentra la sala"
        },
        lH = {
            GAME_FULL: "LA PARTIDA EST\xC1 COMPLETA",
            GAME_STARTED: "LA PARTIDA HA EMPEZADO",
            JOIN_AUDIENCE: "UNIRSE COMO P\xDABLICO",
            RECONNECT: "RECONECTAR",
            TWITCH_LOGIN: "INICIAR SESI\xD3N CON TWITCH"
        },
        uH = {
            CAMERA: "[b]AVISO:[/b] No se detecta ninguna c\xE1mara, pero puedes jugar sin foto. Si crees que se trata de un error, cambia de navegador.",
            STYLE: "[b]AVISO:[/b] Tu navegador est\xE1 un poco desactualizado, as\xED que es posible que el juego no se vea del todo bien.",
            TOS: "Traducción al español hecha por la comunidad. No afiliada con Jackbox Games. Al hacer clic en {submit}, aceptas las [tos]Condiciones del servicio[/tos]"
        },
        fH = {
            BRANCH: eH,
            ERROR: tH,
            FORM: rH,
            HOMEPAGE_LINK: nH,
            MENU: iH,
            PAST_GAME: sH,
            PAST_GAMES: aH,
            RECENT_GAMES: oH,
            STATUS: cH,
            SUBMIT: lH,
            WARNING: uH
        },
        dH = {
            LABEL: "RAMA",
            REFRESH_REQUIRED: "Requiere actualizar",
            PREFERRED: "RAMA PREFERIDA",
            SELECT: "Selecciona una rama",
            WAITING: "Esperando una sala"
        },
        hH = {
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
        pH = {
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
        gH = "Enlace a la p\xE1gina de inicio de Jackbox Games",
        mH = {
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
        vH = {
            CALL_TO_ACTION: {
                SHOP: "VER PARTIDA Y TIENDA",
                VIEW: "VER ESTA PARTIDA"
            },
            NEW: "NUEVO",
            PLAYED_ON: "JUGADO EL",
            REMOVE: {
                CONFIRM: "\xBFSeguro?",
                DESCRIPTION: `Esto remover\xE1 permanentemente esta partida
de tu lista de partidas anteriores.`,
                MANAGE: "\xBFRemover partida?",
                TITLE: "\xBFSeguro?"
            }
        },
        EH = {
            EMPTY: "A\xFAn no hay partidas recientes",
            MANAGE: "ADMINISTRAR",
            TITLE: "TUS PARTIDAS ANTERIORES"
        },
        _H = {
            TITLE: "PARTIDAS RECIENTES",
            VIEW_ALL: {
                BUTTON: "VER TODAS",
                LINK: "VER TODAS LAS PARTIDAS ANTERIORES"
            }
        },
        yH = {
            GAME_FULL: "La partida est\xE1 completa",
            GAME_STARTED: "La partida ha empezado",
            ROOM_NOT_FOUND: "No se encuentra la sala"
        },
        bH = {
            GAME_FULL: "LA PARTIDA EST\xC1 COMPLETA",
            GAME_STARTED: "LA PARTIDA HA EMPEZADO",
            JOIN_AUDIENCE: "UNIRSE AL P\xDABLICO",
            RECONNECT: "RECONECTAR",
            TWITCH_LOGIN: "INICIAR SESI\xD3N CON TWITCH"
        },
        TH = {
            CAMERA: "[b]AVISO:[/b] No se detecta ninguna c\xE1mara, pero igual puedes jugar sin una foto. Si crees que se trata de un error, cambia de navegador.",
            STYLE: "[b]AVISO:[/b] Tu navegador est\xE1 un poco desactualizado, as\xED que es posible que el juego no se vea del todo bien.",
            TOS: "Traducción al español hecha por la comunidad. No afiliada con Jackbox Games. Al hacer clic en {submit}, aceptas las [tos]Condiciones del servicio[/tos]"
        },
        SH = {
            BRANCH: dH,
            ERROR: hH,
            FORM: pH,
            HOMEPAGE_LINK: gH,
            MENU: mH,
            PAST_GAME: vH,
            PAST_GAMES: EH,
            RECENT_GAMES: _H,
            STATUS: yH,
            SUBMIT: bH,
            WARNING: TH
        },
        OH = {
            en: v4,
            fr: w4,
            it: G4,
            de: Q4,
            es: fH,
            "es-XL": SH
        },
        AH = tt({
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
        mt = (e, t) => {
            const r = e.__vccOpts || e;
            for (const [n, s] of t) r[n] = s;
            return r
        },
        IH = {
            class: "choices"
        },
        RH = {
            class: "constrain"
        },
        CH = {
            key: 0
        },
        wH = ["disabled", "onClick"];

    function NH(e, t, r, n, s, o) {
        const c = Ht("bb");
        return ne(), oe("div", IH, [X("div", RH, [e.player.prompt ? Ke((ne(), oe("p", CH, null, 512)), [
            [c, e.player.prompt]
        ]) : We("", !0), (ne(!0), oe(At, null, lo(e.player.choices, (u, f) => (ne(), oe("button", {
            key: f,
            class: Ge({
                selected: u.isSelected
            }),
            disabled: u.isDisabled,
            onClick: Jr(h => e.onChoiceClick(f), ["prevent"])
        }, Xe(u.text), 11, wH))), 128))])])
    }
    const LH = mt(AH, [
            ["render", NH]
        ]),
        $H = tt({
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
                const e = pi();
                if (!(e != null && e.appContext.directives.pointerbox)) throw new Error("Doodle.vue relies on PointerBoxPlugin. Please install it inside your main.ts file.")
            },
            mounted() {
                this.createCanvas()
            },
            methods: {
                createCanvas() {
                    const e = this.$refs.canvas;
                    this.canvas = Gn(new BS(e, this.player.doodle, this.canvasOptions))
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
        PH = {
            class: "doodle"
        },
        DH = {
            ref: "canvas"
        },
        MH = ["disabled"],
        kH = ["disabled"];

    function xH(e, t, r, n, s, o) {
        const c = Ht("pointerbox-translate"),
            u = Ht("pointerbox"),
            f = Ht("t");
        return ne(), oe("div", PH, [Ke((ne(), oe("div", {
            class: "stage",
            "onPointerbox:start": t[0] || (t[0] = (...h) => e.onPointerBoxStart && e.onPointerBoxStart(...h)),
            "onPointerbox:move": t[1] || (t[1] = (...h) => e.onPointerBoxMove && e.onPointerBoxMove(...h)),
            "onPointerbox:end": t[2] || (t[2] = (...h) => e.onPointerBoxEnd && e.onPointerBoxEnd(...h))
        }, [Ke(X("canvas", DH, null, 512), [
            [c, {
                id: "doodleCanvas",
                width: e.pointerBoxWidth,
                height: e.pointerBoxHeight
            }]
        ])], 32)), [
            [u]
        ]), e.hideUndo ? We("", !0) : Ke((ne(), oe("button", {
            key: 0,
            class: "doodle-action undo",
            disabled: !e.canSubmit,
            onClick: t[3] || (t[3] = Jr((...h) => e.onUndo && e.onUndo(...h), ["prevent"]))
        }, null, 8, MH)), [
            [f, "ACTION.UNDO"]
        ]), e.hideSubmit ? We("", !0) : Ke((ne(), oe("button", {
            key: 1,
            class: "doodle-action submit",
            disabled: !e.canSubmit,
            onClick: t[4] || (t[4] = Jr((...h) => e.onSubmit && e.onSubmit(...h), ["prevent"]))
        }, null, 8, kH)), [
            [f, "ACTION.SUBMIT"]
        ])])
    }
    const UH = mt($H, [
        ["render", xH]
    ]);
    var Dd = {
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
                g = "__lodash_placeholder__",
                _ = 1,
                b = 2,
                C = 4,
                P = 1,
                x = 2,
                U = 1,
                I = 2,
                H = 4,
                Y = 8,
                W = 16,
                G = 32,
                z = 64,
                ae = 128,
                ce = 256,
                ue = 512,
                Re = 30,
                Ie = "...",
                fe = 800,
                Ae = 16,
                F = 1,
                re = 2,
                de = 3,
                _e = 1 / 0,
                me = 9007199254740991,
                Se = 17976931348623157e292,
                Me = 0 / 0,
                Fe = 4294967295,
                et = Fe - 1,
                Nt = Fe >>> 1,
                Ir = [
                    ["ary", ae],
                    ["bind", U],
                    ["bindKey", I],
                    ["curry", Y],
                    ["curryRight", W],
                    ["flip", ue],
                    ["partial", G],
                    ["partialRight", z],
                    ["rearg", ce]
                ],
                ir = "[object Arguments]",
                Er = "[object Array]",
                at = "[object AsyncFunction]",
                St = "[object Boolean]",
                ot = "[object Date]",
                kt = "[object DOMException]",
                Yt = "[object Error]",
                xt = "[object Function]",
                m = "[object GeneratorFunction]",
                p = "[object Map]",
                O = "[object Number]",
                k = "[object Null]",
                B = "[object Object]",
                V = "[object Promise]",
                le = "[object Proxy]",
                ie = "[object RegExp]",
                ee = "[object Set]",
                w = "[object String]",
                j = "[object Symbol]",
                he = "[object Undefined]",
                pe = "[object WeakMap]",
                Ce = "[object WeakSet]",
                Pe = "[object ArrayBuffer]",
                A = "[object DataView]",
                T = "[object Float32Array]",
                L = "[object Float64Array]",
                S = "[object Int8Array]",
                $ = "[object Int16Array]",
                J = "[object Int32Array]",
                te = "[object Uint8Array]",
                Ee = "[object Uint8ClampedArray]",
                Te = "[object Uint16Array]",
                ut = "[object Uint32Array]",
                sr = /\b__p \+= '';/g,
                De = /\b(__p \+=) '' \+/g,
                da = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
                Up = /&(?:amp|lt|gt|quot|#39);/g,
                Fp = /[&<>"']/g,
                TA = RegExp(Up.source),
                SA = RegExp(Fp.source),
                OA = /<%-([\s\S]+?)%>/g,
                AA = /<%([\s\S]+?)%>/g,
                Bp = /<%=([\s\S]+?)%>/g,
                IA = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                RA = /^\w*$/,
                CA = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                zl = /[\\^$.*+?()[\]{}|]/g,
                wA = RegExp(zl.source),
                Xl = /^\s+/,
                NA = /\s/,
                LA = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
                $A = /\{\n\/\* \[wrapped with (.+)\] \*/,
                PA = /,? & /,
                DA = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
                MA = /[()=,{}\[\]\/\s]/,
                kA = /\\(\\)?/g,
                xA = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
                Gp = /\w*$/,
                UA = /^[-+]0x[0-9a-f]+$/i,
                FA = /^0b[01]+$/i,
                BA = /^\[object .+?Constructor\]$/,
                GA = /^0o[0-7]+$/i,
                WA = /^(?:0|[1-9]\d*)$/,
                jA = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
                Ao = /($^)/,
                HA = /['\n\r\u2028\u2029\\]/g,
                Io = "\\ud800-\\udfff",
                KA = "\\u0300-\\u036f",
                VA = "\\ufe20-\\ufe2f",
                YA = "\\u20d0-\\u20ff",
                Wp = KA + VA + YA,
                jp = "\\u2700-\\u27bf",
                Hp = "a-z\\xdf-\\xf6\\xf8-\\xff",
                qA = "\\xac\\xb1\\xd7\\xf7",
                zA = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
                XA = "\\u2000-\\u206f",
                JA = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
                Kp = "A-Z\\xc0-\\xd6\\xd8-\\xde",
                Vp = "\\ufe0e\\ufe0f",
                Yp = qA + zA + XA + JA,
                Jl = "['\u2019]",
                ZA = "[" + Io + "]",
                qp = "[" + Yp + "]",
                Ro = "[" + Wp + "]",
                zp = "\\d+",
                QA = "[" + jp + "]",
                Xp = "[" + Hp + "]",
                Jp = "[^" + Io + Yp + zp + jp + Hp + Kp + "]",
                Zl = "\\ud83c[\\udffb-\\udfff]",
                eI = "(?:" + Ro + "|" + Zl + ")",
                Zp = "[^" + Io + "]",
                Ql = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                eu = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                ls = "[" + Kp + "]",
                Qp = "\\u200d",
                eg = "(?:" + Xp + "|" + Jp + ")",
                tI = "(?:" + ls + "|" + Jp + ")",
                tg = "(?:" + Jl + "(?:d|ll|m|re|s|t|ve))?",
                rg = "(?:" + Jl + "(?:D|LL|M|RE|S|T|VE))?",
                ng = eI + "?",
                ig = "[" + Vp + "]?",
                rI = "(?:" + Qp + "(?:" + [Zp, Ql, eu].join("|") + ")" + ig + ng + ")*",
                nI = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
                iI = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
                sg = ig + ng + rI,
                sI = "(?:" + [QA, Ql, eu].join("|") + ")" + sg,
                aI = "(?:" + [Zp + Ro + "?", Ro, Ql, eu, ZA].join("|") + ")",
                oI = RegExp(Jl, "g"),
                cI = RegExp(Ro, "g"),
                tu = RegExp(Zl + "(?=" + Zl + ")|" + aI + sg, "g"),
                lI = RegExp([ls + "?" + Xp + "+" + tg + "(?=" + [qp, ls, "$"].join("|") + ")", tI + "+" + rg + "(?=" + [qp, ls + eg, "$"].join("|") + ")", ls + "?" + eg + "+" + tg, ls + "+" + rg, iI, nI, zp, sI].join("|"), "g"),
                uI = RegExp("[" + Qp + Io + Wp + Vp + "]"),
                fI = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
                dI = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
                hI = -1,
                bt = {};
            bt[T] = bt[L] = bt[S] = bt[$] = bt[J] = bt[te] = bt[Ee] = bt[Te] = bt[ut] = !0, bt[ir] = bt[Er] = bt[Pe] = bt[St] = bt[A] = bt[ot] = bt[Yt] = bt[xt] = bt[p] = bt[O] = bt[B] = bt[ie] = bt[ee] = bt[w] = bt[pe] = !1;
            var vt = {};
            vt[ir] = vt[Er] = vt[Pe] = vt[A] = vt[St] = vt[ot] = vt[T] = vt[L] = vt[S] = vt[$] = vt[J] = vt[p] = vt[O] = vt[B] = vt[ie] = vt[ee] = vt[w] = vt[j] = vt[te] = vt[Ee] = vt[Te] = vt[ut] = !0, vt[Yt] = vt[xt] = vt[pe] = !1;
            var pI = {
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
                gI = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;"
                },
                mI = {
                    "&amp;": "&",
                    "&lt;": "<",
                    "&gt;": ">",
                    "&quot;": '"',
                    "&#39;": "'"
                },
                vI = {
                    "\\": "\\",
                    "'": "'",
                    "\n": "n",
                    "\r": "r",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                },
                EI = parseFloat,
                _I = parseInt,
                ag = typeof Mt == "object" && Mt && Mt.Object === Object && Mt,
                yI = typeof self == "object" && self && self.Object === Object && self,
                Qt = ag || yI || Function("return this")(),
                ru = t && !t.nodeType && t,
                Ii = ru && !0 && e && !e.nodeType && e,
                og = Ii && Ii.exports === ru,
                nu = og && ag.process,
                xr = function() {
                    try {
                        var D = Ii && Ii.require && Ii.require("util").types;
                        return D || nu && nu.binding && nu.binding("util")
                    } catch {}
                }(),
                cg = xr && xr.isArrayBuffer,
                lg = xr && xr.isDate,
                ug = xr && xr.isMap,
                fg = xr && xr.isRegExp,
                dg = xr && xr.isSet,
                hg = xr && xr.isTypedArray;

            function Rr(D, q, K) {
                switch (K.length) {
                    case 0:
                        return D.call(q);
                    case 1:
                        return D.call(q, K[0]);
                    case 2:
                        return D.call(q, K[0], K[1]);
                    case 3:
                        return D.call(q, K[0], K[1], K[2])
                }
                return D.apply(q, K)
            }

            function bI(D, q, K, be) {
                for (var ke = -1, it = D == null ? 0 : D.length; ++ke < it;) {
                    var Ft = D[ke];
                    q(be, Ft, K(Ft), D)
                }
                return be
            }

            function Ur(D, q) {
                for (var K = -1, be = D == null ? 0 : D.length; ++K < be && q(D[K], K, D) !== !1;);
                return D
            }

            function TI(D, q) {
                for (var K = D == null ? 0 : D.length; K-- && q(D[K], K, D) !== !1;);
                return D
            }

            function pg(D, q) {
                for (var K = -1, be = D == null ? 0 : D.length; ++K < be;)
                    if (!q(D[K], K, D)) return !1;
                return !0
            }

            function jn(D, q) {
                for (var K = -1, be = D == null ? 0 : D.length, ke = 0, it = []; ++K < be;) {
                    var Ft = D[K];
                    q(Ft, K, D) && (it[ke++] = Ft)
                }
                return it
            }

            function Co(D, q) {
                var K = D == null ? 0 : D.length;
                return !!K && us(D, q, 0) > -1
            }

            function iu(D, q, K) {
                for (var be = -1, ke = D == null ? 0 : D.length; ++be < ke;)
                    if (K(q, D[be])) return !0;
                return !1
            }

            function Ot(D, q) {
                for (var K = -1, be = D == null ? 0 : D.length, ke = Array(be); ++K < be;) ke[K] = q(D[K], K, D);
                return ke
            }

            function Hn(D, q) {
                for (var K = -1, be = q.length, ke = D.length; ++K < be;) D[ke + K] = q[K];
                return D
            }

            function su(D, q, K, be) {
                var ke = -1,
                    it = D == null ? 0 : D.length;
                for (be && it && (K = D[++ke]); ++ke < it;) K = q(K, D[ke], ke, D);
                return K
            }

            function SI(D, q, K, be) {
                var ke = D == null ? 0 : D.length;
                for (be && ke && (K = D[--ke]); ke--;) K = q(K, D[ke], ke, D);
                return K
            }

            function au(D, q) {
                for (var K = -1, be = D == null ? 0 : D.length; ++K < be;)
                    if (q(D[K], K, D)) return !0;
                return !1
            }
            var OI = ou("length");

            function AI(D) {
                return D.split("")
            }

            function II(D) {
                return D.match(DA) || []
            }

            function gg(D, q, K) {
                var be;
                return K(D, function(ke, it, Ft) {
                    if (q(ke, it, Ft)) return be = it, !1
                }), be
            }

            function wo(D, q, K, be) {
                for (var ke = D.length, it = K + (be ? 1 : -1); be ? it-- : ++it < ke;)
                    if (q(D[it], it, D)) return it;
                return -1
            }

            function us(D, q, K) {
                return q === q ? UI(D, q, K) : wo(D, mg, K)
            }

            function RI(D, q, K, be) {
                for (var ke = K - 1, it = D.length; ++ke < it;)
                    if (be(D[ke], q)) return ke;
                return -1
            }

            function mg(D) {
                return D !== D
            }

            function vg(D, q) {
                var K = D == null ? 0 : D.length;
                return K ? lu(D, q) / K : Me
            }

            function ou(D) {
                return function(q) {
                    return q == null ? r : q[D]
                }
            }

            function cu(D) {
                return function(q) {
                    return D == null ? r : D[q]
                }
            }

            function Eg(D, q, K, be, ke) {
                return ke(D, function(it, Ft, ht) {
                    K = be ? (be = !1, it) : q(K, it, Ft, ht)
                }), K
            }

            function CI(D, q) {
                var K = D.length;
                for (D.sort(q); K--;) D[K] = D[K].value;
                return D
            }

            function lu(D, q) {
                for (var K, be = -1, ke = D.length; ++be < ke;) {
                    var it = q(D[be]);
                    it !== r && (K = K === r ? it : K + it)
                }
                return K
            }

            function uu(D, q) {
                for (var K = -1, be = Array(D); ++K < D;) be[K] = q(K);
                return be
            }

            function wI(D, q) {
                return Ot(q, function(K) {
                    return [K, D[K]]
                })
            }

            function _g(D) {
                return D && D.slice(0, Sg(D) + 1).replace(Xl, "")
            }

            function Cr(D) {
                return function(q) {
                    return D(q)
                }
            }

            function fu(D, q) {
                return Ot(q, function(K) {
                    return D[K]
                })
            }

            function ha(D, q) {
                return D.has(q)
            }

            function yg(D, q) {
                for (var K = -1, be = D.length; ++K < be && us(q, D[K], 0) > -1;);
                return K
            }

            function bg(D, q) {
                for (var K = D.length; K-- && us(q, D[K], 0) > -1;);
                return K
            }

            function NI(D, q) {
                for (var K = D.length, be = 0; K--;) D[K] === q && ++be;
                return be
            }
            var LI = cu(pI),
                $I = cu(gI);

            function PI(D) {
                return "\\" + vI[D]
            }

            function DI(D, q) {
                return D == null ? r : D[q]
            }

            function fs(D) {
                return uI.test(D)
            }

            function MI(D) {
                return fI.test(D)
            }

            function kI(D) {
                for (var q, K = []; !(q = D.next()).done;) K.push(q.value);
                return K
            }

            function du(D) {
                var q = -1,
                    K = Array(D.size);
                return D.forEach(function(be, ke) {
                    K[++q] = [ke, be]
                }), K
            }

            function Tg(D, q) {
                return function(K) {
                    return D(q(K))
                }
            }

            function Kn(D, q) {
                for (var K = -1, be = D.length, ke = 0, it = []; ++K < be;) {
                    var Ft = D[K];
                    (Ft === q || Ft === g) && (D[K] = g, it[ke++] = K)
                }
                return it
            }

            function No(D) {
                var q = -1,
                    K = Array(D.size);
                return D.forEach(function(be) {
                    K[++q] = be
                }), K
            }

            function xI(D) {
                var q = -1,
                    K = Array(D.size);
                return D.forEach(function(be) {
                    K[++q] = [be, be]
                }), K
            }

            function UI(D, q, K) {
                for (var be = K - 1, ke = D.length; ++be < ke;)
                    if (D[be] === q) return be;
                return -1
            }

            function FI(D, q, K) {
                for (var be = K + 1; be--;)
                    if (D[be] === q) return be;
                return be
            }

            function ds(D) {
                return fs(D) ? GI(D) : OI(D)
            }

            function Qr(D) {
                return fs(D) ? WI(D) : AI(D)
            }

            function Sg(D) {
                for (var q = D.length; q-- && NA.test(D.charAt(q)););
                return q
            }
            var BI = cu(mI);

            function GI(D) {
                for (var q = tu.lastIndex = 0; tu.test(D);) ++q;
                return q
            }

            function WI(D) {
                return D.match(tu) || []
            }

            function jI(D) {
                return D.match(lI) || []
            }
            var HI = function D(q) {
                    q = q == null ? Qt : hs.defaults(Qt.Object(), q, hs.pick(Qt, dI));
                    var K = q.Array,
                        be = q.Date,
                        ke = q.Error,
                        it = q.Function,
                        Ft = q.Math,
                        ht = q.Object,
                        hu = q.RegExp,
                        KI = q.String,
                        Fr = q.TypeError,
                        Lo = K.prototype,
                        VI = it.prototype,
                        ps = ht.prototype,
                        $o = q["__core-js_shared__"],
                        Po = VI.toString,
                        ft = ps.hasOwnProperty,
                        YI = 0,
                        Og = function() {
                            var i = /[^.]+$/.exec($o && $o.keys && $o.keys.IE_PROTO || "");
                            return i ? "Symbol(src)_1." + i : ""
                        }(),
                        Do = ps.toString,
                        qI = Po.call(ht),
                        zI = Qt._,
                        XI = hu("^" + Po.call(ft).replace(zl, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                        Mo = og ? q.Buffer : r,
                        Vn = q.Symbol,
                        ko = q.Uint8Array,
                        Ag = Mo ? Mo.allocUnsafe : r,
                        xo = Tg(ht.getPrototypeOf, ht),
                        Ig = ht.create,
                        Rg = ps.propertyIsEnumerable,
                        Uo = Lo.splice,
                        Cg = Vn ? Vn.isConcatSpreadable : r,
                        pa = Vn ? Vn.iterator : r,
                        Ri = Vn ? Vn.toStringTag : r,
                        Fo = function() {
                            try {
                                var i = $i(ht, "defineProperty");
                                return i({}, "", {}), i
                            } catch {}
                        }(),
                        JI = q.clearTimeout !== Qt.clearTimeout && q.clearTimeout,
                        ZI = be && be.now !== Qt.Date.now && be.now,
                        QI = q.setTimeout !== Qt.setTimeout && q.setTimeout,
                        Bo = Ft.ceil,
                        Go = Ft.floor,
                        pu = ht.getOwnPropertySymbols,
                        eR = Mo ? Mo.isBuffer : r,
                        wg = q.isFinite,
                        tR = Lo.join,
                        rR = Tg(ht.keys, ht),
                        Bt = Ft.max,
                        ar = Ft.min,
                        nR = be.now,
                        iR = q.parseInt,
                        Ng = Ft.random,
                        sR = Lo.reverse,
                        gu = $i(q, "DataView"),
                        ga = $i(q, "Map"),
                        mu = $i(q, "Promise"),
                        gs = $i(q, "Set"),
                        ma = $i(q, "WeakMap"),
                        va = $i(ht, "create"),
                        Wo = ma && new ma,
                        ms = {},
                        aR = Pi(gu),
                        oR = Pi(ga),
                        cR = Pi(mu),
                        lR = Pi(gs),
                        uR = Pi(ma),
                        jo = Vn ? Vn.prototype : r,
                        Ea = jo ? jo.valueOf : r,
                        Lg = jo ? jo.toString : r;

                    function E(i) {
                        if (Lt(i) && !Ue(i) && !(i instanceof qe)) {
                            if (i instanceof Br) return i;
                            if (ft.call(i, "__wrapped__")) return $m(i)
                        }
                        return new Br(i)
                    }
                    var vs = function() {
                        function i() {}
                        return function(a) {
                            if (!Rt(a)) return {};
                            if (Ig) return Ig(a);
                            i.prototype = a;
                            var l = new i;
                            return i.prototype = r, l
                        }
                    }();

                    function Ho() {}

                    function Br(i, a) {
                        this.__wrapped__ = i, this.__actions__ = [], this.__chain__ = !!a, this.__index__ = 0, this.__values__ = r
                    }
                    E.templateSettings = {
                        escape: OA,
                        evaluate: AA,
                        interpolate: Bp,
                        variable: "",
                        imports: {
                            _: E
                        }
                    }, E.prototype = Ho.prototype, E.prototype.constructor = E, Br.prototype = vs(Ho.prototype), Br.prototype.constructor = Br;

                    function qe(i) {
                        this.__wrapped__ = i, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Fe, this.__views__ = []
                    }

                    function fR() {
                        var i = new qe(this.__wrapped__);
                        return i.__actions__ = _r(this.__actions__), i.__dir__ = this.__dir__, i.__filtered__ = this.__filtered__, i.__iteratees__ = _r(this.__iteratees__), i.__takeCount__ = this.__takeCount__, i.__views__ = _r(this.__views__), i
                    }

                    function dR() {
                        if (this.__filtered__) {
                            var i = new qe(this);
                            i.__dir__ = -1, i.__filtered__ = !0
                        } else i = this.clone(), i.__dir__ *= -1;
                        return i
                    }

                    function hR() {
                        var i = this.__wrapped__.value(),
                            a = this.__dir__,
                            l = Ue(i),
                            d = a < 0,
                            v = l ? i.length : 0,
                            y = AC(0, v, this.__views__),
                            R = y.start,
                            N = y.end,
                            M = N - R,
                            Z = d ? N : R - 1,
                            Q = this.__iteratees__,
                            se = Q.length,
                            ge = 0,
                            Oe = ar(M, this.__takeCount__);
                        if (!l || !d && v == M && Oe == M) return tm(i, this.__actions__);
                        var Ne = [];
                        e: for (; M-- && ge < Oe;) {
                            Z += a;
                            for (var He = -1, Le = i[Z]; ++He < se;) {
                                var Ye = Q[He],
                                    ze = Ye.iteratee,
                                    Lr = Ye.type,
                                    pr = ze(Le);
                                if (Lr == re) Le = pr;
                                else if (!pr) {
                                    if (Lr == F) continue e;
                                    break e
                                }
                            }
                            Ne[ge++] = Le
                        }
                        return Ne
                    }
                    qe.prototype = vs(Ho.prototype), qe.prototype.constructor = qe;

                    function Ci(i) {
                        var a = -1,
                            l = i == null ? 0 : i.length;
                        for (this.clear(); ++a < l;) {
                            var d = i[a];
                            this.set(d[0], d[1])
                        }
                    }

                    function pR() {
                        this.__data__ = va ? va(null) : {}, this.size = 0
                    }

                    function gR(i) {
                        var a = this.has(i) && delete this.__data__[i];
                        return this.size -= a ? 1 : 0, a
                    }

                    function mR(i) {
                        var a = this.__data__;
                        if (va) {
                            var l = a[i];
                            return l === f ? r : l
                        }
                        return ft.call(a, i) ? a[i] : r
                    }

                    function vR(i) {
                        var a = this.__data__;
                        return va ? a[i] !== r : ft.call(a, i)
                    }

                    function ER(i, a) {
                        var l = this.__data__;
                        return this.size += this.has(i) ? 0 : 1, l[i] = va && a === r ? f : a, this
                    }
                    Ci.prototype.clear = pR, Ci.prototype.delete = gR, Ci.prototype.get = mR, Ci.prototype.has = vR, Ci.prototype.set = ER;

                    function An(i) {
                        var a = -1,
                            l = i == null ? 0 : i.length;
                        for (this.clear(); ++a < l;) {
                            var d = i[a];
                            this.set(d[0], d[1])
                        }
                    }

                    function _R() {
                        this.__data__ = [], this.size = 0
                    }

                    function yR(i) {
                        var a = this.__data__,
                            l = Ko(a, i);
                        if (l < 0) return !1;
                        var d = a.length - 1;
                        return l == d ? a.pop() : Uo.call(a, l, 1), --this.size, !0
                    }

                    function bR(i) {
                        var a = this.__data__,
                            l = Ko(a, i);
                        return l < 0 ? r : a[l][1]
                    }

                    function TR(i) {
                        return Ko(this.__data__, i) > -1
                    }

                    function SR(i, a) {
                        var l = this.__data__,
                            d = Ko(l, i);
                        return d < 0 ? (++this.size, l.push([i, a])) : l[d][1] = a, this
                    }
                    An.prototype.clear = _R, An.prototype.delete = yR, An.prototype.get = bR, An.prototype.has = TR, An.prototype.set = SR;

                    function In(i) {
                        var a = -1,
                            l = i == null ? 0 : i.length;
                        for (this.clear(); ++a < l;) {
                            var d = i[a];
                            this.set(d[0], d[1])
                        }
                    }

                    function OR() {
                        this.size = 0, this.__data__ = {
                            hash: new Ci,
                            map: new(ga || An),
                            string: new Ci
                        }
                    }

                    function AR(i) {
                        var a = nc(this, i).delete(i);
                        return this.size -= a ? 1 : 0, a
                    }

                    function IR(i) {
                        return nc(this, i).get(i)
                    }

                    function RR(i) {
                        return nc(this, i).has(i)
                    }

                    function CR(i, a) {
                        var l = nc(this, i),
                            d = l.size;
                        return l.set(i, a), this.size += l.size == d ? 0 : 1, this
                    }
                    In.prototype.clear = OR, In.prototype.delete = AR, In.prototype.get = IR, In.prototype.has = RR, In.prototype.set = CR;

                    function wi(i) {
                        var a = -1,
                            l = i == null ? 0 : i.length;
                        for (this.__data__ = new In; ++a < l;) this.add(i[a])
                    }

                    function wR(i) {
                        return this.__data__.set(i, f), this
                    }

                    function NR(i) {
                        return this.__data__.has(i)
                    }
                    wi.prototype.add = wi.prototype.push = wR, wi.prototype.has = NR;

                    function en(i) {
                        var a = this.__data__ = new An(i);
                        this.size = a.size
                    }

                    function LR() {
                        this.__data__ = new An, this.size = 0
                    }

                    function $R(i) {
                        var a = this.__data__,
                            l = a.delete(i);
                        return this.size = a.size, l
                    }

                    function PR(i) {
                        return this.__data__.get(i)
                    }

                    function DR(i) {
                        return this.__data__.has(i)
                    }

                    function MR(i, a) {
                        var l = this.__data__;
                        if (l instanceof An) {
                            var d = l.__data__;
                            if (!ga || d.length < s - 1) return d.push([i, a]), this.size = ++l.size, this;
                            l = this.__data__ = new In(d)
                        }
                        return l.set(i, a), this.size = l.size, this
                    }
                    en.prototype.clear = LR, en.prototype.delete = $R, en.prototype.get = PR, en.prototype.has = DR, en.prototype.set = MR;

                    function $g(i, a) {
                        var l = Ue(i),
                            d = !l && Di(i),
                            v = !l && !d && Jn(i),
                            y = !l && !d && !v && bs(i),
                            R = l || d || v || y,
                            N = R ? uu(i.length, KI) : [],
                            M = N.length;
                        for (var Z in i)(a || ft.call(i, Z)) && !(R && (Z == "length" || v && (Z == "offset" || Z == "parent") || y && (Z == "buffer" || Z == "byteLength" || Z == "byteOffset") || Nn(Z, M))) && N.push(Z);
                        return N
                    }

                    function Pg(i) {
                        var a = i.length;
                        return a ? i[Ru(0, a - 1)] : r
                    }

                    function kR(i, a) {
                        return ic(_r(i), Ni(a, 0, i.length))
                    }

                    function xR(i) {
                        return ic(_r(i))
                    }

                    function vu(i, a, l) {
                        (l !== r && !tn(i[a], l) || l === r && !(a in i)) && Rn(i, a, l)
                    }

                    function _a(i, a, l) {
                        var d = i[a];
                        (!(ft.call(i, a) && tn(d, l)) || l === r && !(a in i)) && Rn(i, a, l)
                    }

                    function Ko(i, a) {
                        for (var l = i.length; l--;)
                            if (tn(i[l][0], a)) return l;
                        return -1
                    }

                    function UR(i, a, l, d) {
                        return Yn(i, function(v, y, R) {
                            a(d, v, l(v), R)
                        }), d
                    }

                    function Dg(i, a) {
                        return i && pn(a, qt(a), i)
                    }

                    function FR(i, a) {
                        return i && pn(a, br(a), i)
                    }

                    function Rn(i, a, l) {
                        a == "__proto__" && Fo ? Fo(i, a, {
                            configurable: !0,
                            enumerable: !0,
                            value: l,
                            writable: !0
                        }) : i[a] = l
                    }

                    function Eu(i, a) {
                        for (var l = -1, d = a.length, v = K(d), y = i == null; ++l < d;) v[l] = y ? r : Zu(i, a[l]);
                        return v
                    }

                    function Ni(i, a, l) {
                        return i === i && (l !== r && (i = i <= l ? i : l), a !== r && (i = i >= a ? i : a)), i
                    }

                    function Gr(i, a, l, d, v, y) {
                        var R, N = a & _,
                            M = a & b,
                            Z = a & C;
                        if (l && (R = v ? l(i, d, v, y) : l(i)), R !== r) return R;
                        if (!Rt(i)) return i;
                        var Q = Ue(i);
                        if (Q) {
                            if (R = RC(i), !N) return _r(i, R)
                        } else {
                            var se = or(i),
                                ge = se == xt || se == m;
                            if (Jn(i)) return im(i, N);
                            if (se == B || se == ir || ge && !v) {
                                if (R = M || ge ? {} : Sm(i), !N) return M ? mC(i, FR(R, i)) : gC(i, Dg(R, i))
                            } else {
                                if (!vt[se]) return v ? i : {};
                                R = CC(i, se, N)
                            }
                        }
                        y || (y = new en);
                        var Oe = y.get(i);
                        if (Oe) return Oe;
                        y.set(i, R), Zm(i) ? i.forEach(function(Le) {
                            R.add(Gr(Le, a, l, Le, i, y))
                        }) : Xm(i) && i.forEach(function(Le, Ye) {
                            R.set(Ye, Gr(Le, a, l, Ye, i, y))
                        });
                        var Ne = Z ? M ? Uu : xu : M ? br : qt,
                            He = Q ? r : Ne(i);
                        return Ur(He || i, function(Le, Ye) {
                            He && (Ye = Le, Le = i[Ye]), _a(R, Ye, Gr(Le, a, l, Ye, i, y))
                        }), R
                    }

                    function BR(i) {
                        var a = qt(i);
                        return function(l) {
                            return Mg(l, i, a)
                        }
                    }

                    function Mg(i, a, l) {
                        var d = l.length;
                        if (i == null) return !d;
                        for (i = ht(i); d--;) {
                            var v = l[d],
                                y = a[v],
                                R = i[v];
                            if (R === r && !(v in i) || !y(R)) return !1
                        }
                        return !0
                    }

                    function kg(i, a, l) {
                        if (typeof i != "function") throw new Fr(c);
                        return Ia(function() {
                            i.apply(r, l)
                        }, a)
                    }

                    function ya(i, a, l, d) {
                        var v = -1,
                            y = Co,
                            R = !0,
                            N = i.length,
                            M = [],
                            Z = a.length;
                        if (!N) return M;
                        l && (a = Ot(a, Cr(l))), d ? (y = iu, R = !1) : a.length >= s && (y = ha, R = !1, a = new wi(a));
                        e: for (; ++v < N;) {
                            var Q = i[v],
                                se = l == null ? Q : l(Q);
                            if (Q = d || Q !== 0 ? Q : 0, R && se === se) {
                                for (var ge = Z; ge--;)
                                    if (a[ge] === se) continue e;
                                M.push(Q)
                            } else y(a, se, d) || M.push(Q)
                        }
                        return M
                    }
                    var Yn = lm(hn),
                        xg = lm(yu, !0);

                    function GR(i, a) {
                        var l = !0;
                        return Yn(i, function(d, v, y) {
                            return l = !!a(d, v, y), l
                        }), l
                    }

                    function Vo(i, a, l) {
                        for (var d = -1, v = i.length; ++d < v;) {
                            var y = i[d],
                                R = a(y);
                            if (R != null && (N === r ? R === R && !Nr(R) : l(R, N))) var N = R,
                                M = y
                        }
                        return M
                    }

                    function WR(i, a, l, d) {
                        var v = i.length;
                        for (l = Be(l), l < 0 && (l = -l > v ? 0 : v + l), d = d === r || d > v ? v : Be(d), d < 0 && (d += v), d = l > d ? 0 : ev(d); l < d;) i[l++] = a;
                        return i
                    }

                    function Ug(i, a) {
                        var l = [];
                        return Yn(i, function(d, v, y) {
                            a(d, v, y) && l.push(d)
                        }), l
                    }

                    function er(i, a, l, d, v) {
                        var y = -1,
                            R = i.length;
                        for (l || (l = NC), v || (v = []); ++y < R;) {
                            var N = i[y];
                            a > 0 && l(N) ? a > 1 ? er(N, a - 1, l, d, v) : Hn(v, N) : d || (v[v.length] = N)
                        }
                        return v
                    }
                    var _u = um(),
                        Fg = um(!0);

                    function hn(i, a) {
                        return i && _u(i, a, qt)
                    }

                    function yu(i, a) {
                        return i && Fg(i, a, qt)
                    }

                    function Yo(i, a) {
                        return jn(a, function(l) {
                            return Ln(i[l])
                        })
                    }

                    function Li(i, a) {
                        a = zn(a, i);
                        for (var l = 0, d = a.length; i != null && l < d;) i = i[gn(a[l++])];
                        return l && l == d ? i : r
                    }

                    function Bg(i, a, l) {
                        var d = a(i);
                        return Ue(i) ? d : Hn(d, l(i))
                    }

                    function dr(i) {
                        return i == null ? i === r ? he : k : Ri && Ri in ht(i) ? OC(i) : xC(i)
                    }

                    function bu(i, a) {
                        return i > a
                    }

                    function jR(i, a) {
                        return i != null && ft.call(i, a)
                    }

                    function HR(i, a) {
                        return i != null && a in ht(i)
                    }

                    function KR(i, a, l) {
                        return i >= ar(a, l) && i < Bt(a, l)
                    }

                    function Tu(i, a, l) {
                        for (var d = l ? iu : Co, v = i[0].length, y = i.length, R = y, N = K(y), M = 1 / 0, Z = []; R--;) {
                            var Q = i[R];
                            R && a && (Q = Ot(Q, Cr(a))), M = ar(Q.length, M), N[R] = !l && (a || v >= 120 && Q.length >= 120) ? new wi(R && Q) : r
                        }
                        Q = i[0];
                        var se = -1,
                            ge = N[0];
                        e: for (; ++se < v && Z.length < M;) {
                            var Oe = Q[se],
                                Ne = a ? a(Oe) : Oe;
                            if (Oe = l || Oe !== 0 ? Oe : 0, !(ge ? ha(ge, Ne) : d(Z, Ne, l))) {
                                for (R = y; --R;) {
                                    var He = N[R];
                                    if (!(He ? ha(He, Ne) : d(i[R], Ne, l))) continue e
                                }
                                ge && ge.push(Ne), Z.push(Oe)
                            }
                        }
                        return Z
                    }

                    function VR(i, a, l, d) {
                        return hn(i, function(v, y, R) {
                            a(d, l(v), y, R)
                        }), d
                    }

                    function ba(i, a, l) {
                        a = zn(a, i), i = Rm(i, a);
                        var d = i == null ? i : i[gn(jr(a))];
                        return d == null ? r : Rr(d, i, l)
                    }

                    function Gg(i) {
                        return Lt(i) && dr(i) == ir
                    }

                    function YR(i) {
                        return Lt(i) && dr(i) == Pe
                    }

                    function qR(i) {
                        return Lt(i) && dr(i) == ot
                    }

                    function Ta(i, a, l, d, v) {
                        return i === a ? !0 : i == null || a == null || !Lt(i) && !Lt(a) ? i !== i && a !== a : zR(i, a, l, d, Ta, v)
                    }

                    function zR(i, a, l, d, v, y) {
                        var R = Ue(i),
                            N = Ue(a),
                            M = R ? Er : or(i),
                            Z = N ? Er : or(a);
                        M = M == ir ? B : M, Z = Z == ir ? B : Z;
                        var Q = M == B,
                            se = Z == B,
                            ge = M == Z;
                        if (ge && Jn(i)) {
                            if (!Jn(a)) return !1;
                            R = !0, Q = !1
                        }
                        if (ge && !Q) return y || (y = new en), R || bs(i) ? ym(i, a, l, d, v, y) : TC(i, a, M, l, d, v, y);
                        if (!(l & P)) {
                            var Oe = Q && ft.call(i, "__wrapped__"),
                                Ne = se && ft.call(a, "__wrapped__");
                            if (Oe || Ne) {
                                var He = Oe ? i.value() : i,
                                    Le = Ne ? a.value() : a;
                                return y || (y = new en), v(He, Le, l, d, y)
                            }
                        }
                        return ge ? (y || (y = new en), SC(i, a, l, d, v, y)) : !1
                    }

                    function XR(i) {
                        return Lt(i) && or(i) == p
                    }

                    function Su(i, a, l, d) {
                        var v = l.length,
                            y = v,
                            R = !d;
                        if (i == null) return !y;
                        for (i = ht(i); v--;) {
                            var N = l[v];
                            if (R && N[2] ? N[1] !== i[N[0]] : !(N[0] in i)) return !1
                        }
                        for (; ++v < y;) {
                            N = l[v];
                            var M = N[0],
                                Z = i[M],
                                Q = N[1];
                            if (R && N[2]) {
                                if (Z === r && !(M in i)) return !1
                            } else {
                                var se = new en;
                                if (d) var ge = d(Z, Q, M, i, a, se);
                                if (!(ge === r ? Ta(Q, Z, P | x, d, se) : ge)) return !1
                            }
                        }
                        return !0
                    }

                    function Wg(i) {
                        if (!Rt(i) || $C(i)) return !1;
                        var a = Ln(i) ? XI : BA;
                        return a.test(Pi(i))
                    }

                    function JR(i) {
                        return Lt(i) && dr(i) == ie
                    }

                    function ZR(i) {
                        return Lt(i) && or(i) == ee
                    }

                    function QR(i) {
                        return Lt(i) && uc(i.length) && !!bt[dr(i)]
                    }

                    function jg(i) {
                        return typeof i == "function" ? i : i == null ? Tr : typeof i == "object" ? Ue(i) ? Vg(i[0], i[1]) : Kg(i) : fv(i)
                    }

                    function Ou(i) {
                        if (!Aa(i)) return rR(i);
                        var a = [];
                        for (var l in ht(i)) ft.call(i, l) && l != "constructor" && a.push(l);
                        return a
                    }

                    function eC(i) {
                        if (!Rt(i)) return kC(i);
                        var a = Aa(i),
                            l = [];
                        for (var d in i) d == "constructor" && (a || !ft.call(i, d)) || l.push(d);
                        return l
                    }

                    function Au(i, a) {
                        return i < a
                    }

                    function Hg(i, a) {
                        var l = -1,
                            d = yr(i) ? K(i.length) : [];
                        return Yn(i, function(v, y, R) {
                            d[++l] = a(v, y, R)
                        }), d
                    }

                    function Kg(i) {
                        var a = Bu(i);
                        return a.length == 1 && a[0][2] ? Am(a[0][0], a[0][1]) : function(l) {
                            return l === i || Su(l, i, a)
                        }
                    }

                    function Vg(i, a) {
                        return Wu(i) && Om(a) ? Am(gn(i), a) : function(l) {
                            var d = Zu(l, i);
                            return d === r && d === a ? Qu(l, i) : Ta(a, d, P | x)
                        }
                    }

                    function qo(i, a, l, d, v) {
                        i !== a && _u(a, function(y, R) {
                            if (v || (v = new en), Rt(y)) tC(i, a, R, l, qo, d, v);
                            else {
                                var N = d ? d(Hu(i, R), y, R + "", i, a, v) : r;
                                N === r && (N = y), vu(i, R, N)
                            }
                        }, br)
                    }

                    function tC(i, a, l, d, v, y, R) {
                        var N = Hu(i, l),
                            M = Hu(a, l),
                            Z = R.get(M);
                        if (Z) {
                            vu(i, l, Z);
                            return
                        }
                        var Q = y ? y(N, M, l + "", i, a, R) : r,
                            se = Q === r;
                        if (se) {
                            var ge = Ue(M),
                                Oe = !ge && Jn(M),
                                Ne = !ge && !Oe && bs(M);
                            Q = M, ge || Oe || Ne ? Ue(N) ? Q = N : $t(N) ? Q = _r(N) : Oe ? (se = !1, Q = im(M, !0)) : Ne ? (se = !1, Q = sm(M, !0)) : Q = [] : Ra(M) || Di(M) ? (Q = N, Di(N) ? Q = tv(N) : (!Rt(N) || Ln(N)) && (Q = Sm(M))) : se = !1
                        }
                        se && (R.set(M, Q), v(Q, M, d, y, R), R.delete(M)), vu(i, l, Q)
                    }

                    function Yg(i, a) {
                        var l = i.length;
                        if (!!l) return a += a < 0 ? l : 0, Nn(a, l) ? i[a] : r
                    }

                    function qg(i, a, l) {
                        a.length ? a = Ot(a, function(y) {
                            return Ue(y) ? function(R) {
                                return Li(R, y.length === 1 ? y[0] : y)
                            } : y
                        }) : a = [Tr];
                        var d = -1;
                        a = Ot(a, Cr(we()));
                        var v = Hg(i, function(y, R, N) {
                            var M = Ot(a, function(Z) {
                                return Z(y)
                            });
                            return {
                                criteria: M,
                                index: ++d,
                                value: y
                            }
                        });
                        return CI(v, function(y, R) {
                            return pC(y, R, l)
                        })
                    }

                    function rC(i, a) {
                        return zg(i, a, function(l, d) {
                            return Qu(i, d)
                        })
                    }

                    function zg(i, a, l) {
                        for (var d = -1, v = a.length, y = {}; ++d < v;) {
                            var R = a[d],
                                N = Li(i, R);
                            l(N, R) && Sa(y, zn(R, i), N)
                        }
                        return y
                    }

                    function nC(i) {
                        return function(a) {
                            return Li(a, i)
                        }
                    }

                    function Iu(i, a, l, d) {
                        var v = d ? RI : us,
                            y = -1,
                            R = a.length,
                            N = i;
                        for (i === a && (a = _r(a)), l && (N = Ot(i, Cr(l))); ++y < R;)
                            for (var M = 0, Z = a[y], Q = l ? l(Z) : Z;
                                (M = v(N, Q, M, d)) > -1;) N !== i && Uo.call(N, M, 1), Uo.call(i, M, 1);
                        return i
                    }

                    function Xg(i, a) {
                        for (var l = i ? a.length : 0, d = l - 1; l--;) {
                            var v = a[l];
                            if (l == d || v !== y) {
                                var y = v;
                                Nn(v) ? Uo.call(i, v, 1) : Nu(i, v)
                            }
                        }
                        return i
                    }

                    function Ru(i, a) {
                        return i + Go(Ng() * (a - i + 1))
                    }

                    function iC(i, a, l, d) {
                        for (var v = -1, y = Bt(Bo((a - i) / (l || 1)), 0), R = K(y); y--;) R[d ? y : ++v] = i, i += l;
                        return R
                    }

                    function Cu(i, a) {
                        var l = "";
                        if (!i || a < 1 || a > me) return l;
                        do a % 2 && (l += i), a = Go(a / 2), a && (i += i); while (a);
                        return l
                    }

                    function Ve(i, a) {
                        return Ku(Im(i, a, Tr), i + "")
                    }

                    function sC(i) {
                        return Pg(Ts(i))
                    }

                    function aC(i, a) {
                        var l = Ts(i);
                        return ic(l, Ni(a, 0, l.length))
                    }

                    function Sa(i, a, l, d) {
                        if (!Rt(i)) return i;
                        a = zn(a, i);
                        for (var v = -1, y = a.length, R = y - 1, N = i; N != null && ++v < y;) {
                            var M = gn(a[v]),
                                Z = l;
                            if (M === "__proto__" || M === "constructor" || M === "prototype") return i;
                            if (v != R) {
                                var Q = N[M];
                                Z = d ? d(Q, M, N) : r, Z === r && (Z = Rt(Q) ? Q : Nn(a[v + 1]) ? [] : {})
                            }
                            _a(N, M, Z), N = N[M]
                        }
                        return i
                    }
                    var Jg = Wo ? function(i, a) {
                            return Wo.set(i, a), i
                        } : Tr,
                        oC = Fo ? function(i, a) {
                            return Fo(i, "toString", {
                                configurable: !0,
                                enumerable: !1,
                                value: tf(a),
                                writable: !0
                            })
                        } : Tr;

                    function cC(i) {
                        return ic(Ts(i))
                    }

                    function Wr(i, a, l) {
                        var d = -1,
                            v = i.length;
                        a < 0 && (a = -a > v ? 0 : v + a), l = l > v ? v : l, l < 0 && (l += v), v = a > l ? 0 : l - a >>> 0, a >>>= 0;
                        for (var y = K(v); ++d < v;) y[d] = i[d + a];
                        return y
                    }

                    function lC(i, a) {
                        var l;
                        return Yn(i, function(d, v, y) {
                            return l = a(d, v, y), !l
                        }), !!l
                    }

                    function zo(i, a, l) {
                        var d = 0,
                            v = i == null ? d : i.length;
                        if (typeof a == "number" && a === a && v <= Nt) {
                            for (; d < v;) {
                                var y = d + v >>> 1,
                                    R = i[y];
                                R !== null && !Nr(R) && (l ? R <= a : R < a) ? d = y + 1 : v = y
                            }
                            return v
                        }
                        return wu(i, a, Tr, l)
                    }

                    function wu(i, a, l, d) {
                        var v = 0,
                            y = i == null ? 0 : i.length;
                        if (y === 0) return 0;
                        a = l(a);
                        for (var R = a !== a, N = a === null, M = Nr(a), Z = a === r; v < y;) {
                            var Q = Go((v + y) / 2),
                                se = l(i[Q]),
                                ge = se !== r,
                                Oe = se === null,
                                Ne = se === se,
                                He = Nr(se);
                            if (R) var Le = d || Ne;
                            else Z ? Le = Ne && (d || ge) : N ? Le = Ne && ge && (d || !Oe) : M ? Le = Ne && ge && !Oe && (d || !He) : Oe || He ? Le = !1 : Le = d ? se <= a : se < a;
                            Le ? v = Q + 1 : y = Q
                        }
                        return ar(y, et)
                    }

                    function Zg(i, a) {
                        for (var l = -1, d = i.length, v = 0, y = []; ++l < d;) {
                            var R = i[l],
                                N = a ? a(R) : R;
                            if (!l || !tn(N, M)) {
                                var M = N;
                                y[v++] = R === 0 ? 0 : R
                            }
                        }
                        return y
                    }

                    function Qg(i) {
                        return typeof i == "number" ? i : Nr(i) ? Me : +i
                    }

                    function wr(i) {
                        if (typeof i == "string") return i;
                        if (Ue(i)) return Ot(i, wr) + "";
                        if (Nr(i)) return Lg ? Lg.call(i) : "";
                        var a = i + "";
                        return a == "0" && 1 / i == -_e ? "-0" : a
                    }

                    function qn(i, a, l) {
                        var d = -1,
                            v = Co,
                            y = i.length,
                            R = !0,
                            N = [],
                            M = N;
                        if (l) R = !1, v = iu;
                        else if (y >= s) {
                            var Z = a ? null : yC(i);
                            if (Z) return No(Z);
                            R = !1, v = ha, M = new wi
                        } else M = a ? [] : N;
                        e: for (; ++d < y;) {
                            var Q = i[d],
                                se = a ? a(Q) : Q;
                            if (Q = l || Q !== 0 ? Q : 0, R && se === se) {
                                for (var ge = M.length; ge--;)
                                    if (M[ge] === se) continue e;
                                a && M.push(se), N.push(Q)
                            } else v(M, se, l) || (M !== N && M.push(se), N.push(Q))
                        }
                        return N
                    }

                    function Nu(i, a) {
                        return a = zn(a, i), i = Rm(i, a), i == null || delete i[gn(jr(a))]
                    }

                    function em(i, a, l, d) {
                        return Sa(i, a, l(Li(i, a)), d)
                    }

                    function Xo(i, a, l, d) {
                        for (var v = i.length, y = d ? v : -1;
                            (d ? y-- : ++y < v) && a(i[y], y, i););
                        return l ? Wr(i, d ? 0 : y, d ? y + 1 : v) : Wr(i, d ? y + 1 : 0, d ? v : y)
                    }

                    function tm(i, a) {
                        var l = i;
                        return l instanceof qe && (l = l.value()), su(a, function(d, v) {
                            return v.func.apply(v.thisArg, Hn([d], v.args))
                        }, l)
                    }

                    function Lu(i, a, l) {
                        var d = i.length;
                        if (d < 2) return d ? qn(i[0]) : [];
                        for (var v = -1, y = K(d); ++v < d;)
                            for (var R = i[v], N = -1; ++N < d;) N != v && (y[v] = ya(y[v] || R, i[N], a, l));
                        return qn(er(y, 1), a, l)
                    }

                    function rm(i, a, l) {
                        for (var d = -1, v = i.length, y = a.length, R = {}; ++d < v;) {
                            var N = d < y ? a[d] : r;
                            l(R, i[d], N)
                        }
                        return R
                    }

                    function $u(i) {
                        return $t(i) ? i : []
                    }

                    function Pu(i) {
                        return typeof i == "function" ? i : Tr
                    }

                    function zn(i, a) {
                        return Ue(i) ? i : Wu(i, a) ? [i] : Lm(ct(i))
                    }
                    var uC = Ve;

                    function Xn(i, a, l) {
                        var d = i.length;
                        return l = l === r ? d : l, !a && l >= d ? i : Wr(i, a, l)
                    }
                    var nm = JI || function(i) {
                        return Qt.clearTimeout(i)
                    };

                    function im(i, a) {
                        if (a) return i.slice();
                        var l = i.length,
                            d = Ag ? Ag(l) : new i.constructor(l);
                        return i.copy(d), d
                    }

                    function Du(i) {
                        var a = new i.constructor(i.byteLength);
                        return new ko(a).set(new ko(i)), a
                    }

                    function fC(i, a) {
                        var l = a ? Du(i.buffer) : i.buffer;
                        return new i.constructor(l, i.byteOffset, i.byteLength)
                    }

                    function dC(i) {
                        var a = new i.constructor(i.source, Gp.exec(i));
                        return a.lastIndex = i.lastIndex, a
                    }

                    function hC(i) {
                        return Ea ? ht(Ea.call(i)) : {}
                    }

                    function sm(i, a) {
                        var l = a ? Du(i.buffer) : i.buffer;
                        return new i.constructor(l, i.byteOffset, i.length)
                    }

                    function am(i, a) {
                        if (i !== a) {
                            var l = i !== r,
                                d = i === null,
                                v = i === i,
                                y = Nr(i),
                                R = a !== r,
                                N = a === null,
                                M = a === a,
                                Z = Nr(a);
                            if (!N && !Z && !y && i > a || y && R && M && !N && !Z || d && R && M || !l && M || !v) return 1;
                            if (!d && !y && !Z && i < a || Z && l && v && !d && !y || N && l && v || !R && v || !M) return -1
                        }
                        return 0
                    }

                    function pC(i, a, l) {
                        for (var d = -1, v = i.criteria, y = a.criteria, R = v.length, N = l.length; ++d < R;) {
                            var M = am(v[d], y[d]);
                            if (M) {
                                if (d >= N) return M;
                                var Z = l[d];
                                return M * (Z == "desc" ? -1 : 1)
                            }
                        }
                        return i.index - a.index
                    }

                    function om(i, a, l, d) {
                        for (var v = -1, y = i.length, R = l.length, N = -1, M = a.length, Z = Bt(y - R, 0), Q = K(M + Z), se = !d; ++N < M;) Q[N] = a[N];
                        for (; ++v < R;)(se || v < y) && (Q[l[v]] = i[v]);
                        for (; Z--;) Q[N++] = i[v++];
                        return Q
                    }

                    function cm(i, a, l, d) {
                        for (var v = -1, y = i.length, R = -1, N = l.length, M = -1, Z = a.length, Q = Bt(y - N, 0), se = K(Q + Z), ge = !d; ++v < Q;) se[v] = i[v];
                        for (var Oe = v; ++M < Z;) se[Oe + M] = a[M];
                        for (; ++R < N;)(ge || v < y) && (se[Oe + l[R]] = i[v++]);
                        return se
                    }

                    function _r(i, a) {
                        var l = -1,
                            d = i.length;
                        for (a || (a = K(d)); ++l < d;) a[l] = i[l];
                        return a
                    }

                    function pn(i, a, l, d) {
                        var v = !l;
                        l || (l = {});
                        for (var y = -1, R = a.length; ++y < R;) {
                            var N = a[y],
                                M = d ? d(l[N], i[N], N, l, i) : r;
                            M === r && (M = i[N]), v ? Rn(l, N, M) : _a(l, N, M)
                        }
                        return l
                    }

                    function gC(i, a) {
                        return pn(i, Gu(i), a)
                    }

                    function mC(i, a) {
                        return pn(i, bm(i), a)
                    }

                    function Jo(i, a) {
                        return function(l, d) {
                            var v = Ue(l) ? bI : UR,
                                y = a ? a() : {};
                            return v(l, i, we(d, 2), y)
                        }
                    }

                    function Es(i) {
                        return Ve(function(a, l) {
                            var d = -1,
                                v = l.length,
                                y = v > 1 ? l[v - 1] : r,
                                R = v > 2 ? l[2] : r;
                            for (y = i.length > 3 && typeof y == "function" ? (v--, y) : r, R && hr(l[0], l[1], R) && (y = v < 3 ? r : y, v = 1), a = ht(a); ++d < v;) {
                                var N = l[d];
                                N && i(a, N, d, y)
                            }
                            return a
                        })
                    }

                    function lm(i, a) {
                        return function(l, d) {
                            if (l == null) return l;
                            if (!yr(l)) return i(l, d);
                            for (var v = l.length, y = a ? v : -1, R = ht(l);
                                (a ? y-- : ++y < v) && d(R[y], y, R) !== !1;);
                            return l
                        }
                    }

                    function um(i) {
                        return function(a, l, d) {
                            for (var v = -1, y = ht(a), R = d(a), N = R.length; N--;) {
                                var M = R[i ? N : ++v];
                                if (l(y[M], M, y) === !1) break
                            }
                            return a
                        }
                    }

                    function vC(i, a, l) {
                        var d = a & U,
                            v = Oa(i);

                        function y() {
                            var R = this && this !== Qt && this instanceof y ? v : i;
                            return R.apply(d ? l : this, arguments)
                        }
                        return y
                    }

                    function fm(i) {
                        return function(a) {
                            a = ct(a);
                            var l = fs(a) ? Qr(a) : r,
                                d = l ? l[0] : a.charAt(0),
                                v = l ? Xn(l, 1).join("") : a.slice(1);
                            return d[i]() + v
                        }
                    }

                    function _s(i) {
                        return function(a) {
                            return su(lv(cv(a).replace(oI, "")), i, "")
                        }
                    }

                    function Oa(i) {
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
                            return Rt(d) ? d : l
                        }
                    }

                    function EC(i, a, l) {
                        var d = Oa(i);

                        function v() {
                            for (var y = arguments.length, R = K(y), N = y, M = ys(v); N--;) R[N] = arguments[N];
                            var Z = y < 3 && R[0] !== M && R[y - 1] !== M ? [] : Kn(R, M);
                            if (y -= Z.length, y < l) return mm(i, a, Zo, v.placeholder, r, R, Z, r, r, l - y);
                            var Q = this && this !== Qt && this instanceof v ? d : i;
                            return Rr(Q, this, R)
                        }
                        return v
                    }

                    function dm(i) {
                        return function(a, l, d) {
                            var v = ht(a);
                            if (!yr(a)) {
                                var y = we(l, 3);
                                a = qt(a), l = function(N) {
                                    return y(v[N], N, v)
                                }
                            }
                            var R = i(a, l, d);
                            return R > -1 ? v[y ? a[R] : R] : r
                        }
                    }

                    function hm(i) {
                        return wn(function(a) {
                            var l = a.length,
                                d = l,
                                v = Br.prototype.thru;
                            for (i && a.reverse(); d--;) {
                                var y = a[d];
                                if (typeof y != "function") throw new Fr(c);
                                if (v && !R && rc(y) == "wrapper") var R = new Br([], !0)
                            }
                            for (d = R ? d : l; ++d < l;) {
                                y = a[d];
                                var N = rc(y),
                                    M = N == "wrapper" ? Fu(y) : r;
                                M && ju(M[0]) && M[1] == (ae | Y | G | ce) && !M[4].length && M[9] == 1 ? R = R[rc(M[0])].apply(R, M[3]) : R = y.length == 1 && ju(y) ? R[N]() : R.thru(y)
                            }
                            return function() {
                                var Z = arguments,
                                    Q = Z[0];
                                if (R && Z.length == 1 && Ue(Q)) return R.plant(Q).value();
                                for (var se = 0, ge = l ? a[se].apply(this, Z) : Q; ++se < l;) ge = a[se].call(this, ge);
                                return ge
                            }
                        })
                    }

                    function Zo(i, a, l, d, v, y, R, N, M, Z) {
                        var Q = a & ae,
                            se = a & U,
                            ge = a & I,
                            Oe = a & (Y | W),
                            Ne = a & ue,
                            He = ge ? r : Oa(i);

                        function Le() {
                            for (var Ye = arguments.length, ze = K(Ye), Lr = Ye; Lr--;) ze[Lr] = arguments[Lr];
                            if (Oe) var pr = ys(Le),
                                $r = NI(ze, pr);
                            if (d && (ze = om(ze, d, v, Oe)), y && (ze = cm(ze, y, R, Oe)), Ye -= $r, Oe && Ye < Z) {
                                var Pt = Kn(ze, pr);
                                return mm(i, a, Zo, Le.placeholder, l, ze, Pt, N, M, Z - Ye)
                            }
                            var rn = se ? l : this,
                                Pn = ge ? rn[i] : i;
                            return Ye = ze.length, N ? ze = UC(ze, N) : Ne && Ye > 1 && ze.reverse(), Q && M < Ye && (ze.length = M), this && this !== Qt && this instanceof Le && (Pn = He || Oa(Pn)), Pn.apply(rn, ze)
                        }
                        return Le
                    }

                    function pm(i, a) {
                        return function(l, d) {
                            return VR(l, i, a(d), {})
                        }
                    }

                    function Qo(i, a) {
                        return function(l, d) {
                            var v;
                            if (l === r && d === r) return a;
                            if (l !== r && (v = l), d !== r) {
                                if (v === r) return d;
                                typeof l == "string" || typeof d == "string" ? (l = wr(l), d = wr(d)) : (l = Qg(l), d = Qg(d)), v = i(l, d)
                            }
                            return v
                        }
                    }

                    function Mu(i) {
                        return wn(function(a) {
                            return a = Ot(a, Cr(we())), Ve(function(l) {
                                var d = this;
                                return i(a, function(v) {
                                    return Rr(v, d, l)
                                })
                            })
                        })
                    }

                    function ec(i, a) {
                        a = a === r ? " " : wr(a);
                        var l = a.length;
                        if (l < 2) return l ? Cu(a, i) : a;
                        var d = Cu(a, Bo(i / ds(a)));
                        return fs(a) ? Xn(Qr(d), 0, i).join("") : d.slice(0, i)
                    }

                    function _C(i, a, l, d) {
                        var v = a & U,
                            y = Oa(i);

                        function R() {
                            for (var N = -1, M = arguments.length, Z = -1, Q = d.length, se = K(Q + M), ge = this && this !== Qt && this instanceof R ? y : i; ++Z < Q;) se[Z] = d[Z];
                            for (; M--;) se[Z++] = arguments[++N];
                            return Rr(ge, v ? l : this, se)
                        }
                        return R
                    }

                    function gm(i) {
                        return function(a, l, d) {
                            return d && typeof d != "number" && hr(a, l, d) && (l = d = r), a = $n(a), l === r ? (l = a, a = 0) : l = $n(l), d = d === r ? a < l ? 1 : -1 : $n(d), iC(a, l, d, i)
                        }
                    }

                    function tc(i) {
                        return function(a, l) {
                            return typeof a == "string" && typeof l == "string" || (a = Hr(a), l = Hr(l)), i(a, l)
                        }
                    }

                    function mm(i, a, l, d, v, y, R, N, M, Z) {
                        var Q = a & Y,
                            se = Q ? R : r,
                            ge = Q ? r : R,
                            Oe = Q ? y : r,
                            Ne = Q ? r : y;
                        a |= Q ? G : z, a &= ~(Q ? z : G), a & H || (a &= ~(U | I));
                        var He = [i, a, v, Oe, se, Ne, ge, N, M, Z],
                            Le = l.apply(r, He);
                        return ju(i) && Cm(Le, He), Le.placeholder = d, wm(Le, i, a)
                    }

                    function ku(i) {
                        var a = Ft[i];
                        return function(l, d) {
                            if (l = Hr(l), d = d == null ? 0 : ar(Be(d), 292), d && wg(l)) {
                                var v = (ct(l) + "e").split("e"),
                                    y = a(v[0] + "e" + (+v[1] + d));
                                return v = (ct(y) + "e").split("e"), +(v[0] + "e" + (+v[1] - d))
                            }
                            return a(l)
                        }
                    }
                    var yC = gs && 1 / No(new gs([, -0]))[1] == _e ? function(i) {
                        return new gs(i)
                    } : sf;

                    function vm(i) {
                        return function(a) {
                            var l = or(a);
                            return l == p ? du(a) : l == ee ? xI(a) : wI(a, i(a))
                        }
                    }

                    function Cn(i, a, l, d, v, y, R, N) {
                        var M = a & I;
                        if (!M && typeof i != "function") throw new Fr(c);
                        var Z = d ? d.length : 0;
                        if (Z || (a &= ~(G | z), d = v = r), R = R === r ? R : Bt(Be(R), 0), N = N === r ? N : Be(N), Z -= v ? v.length : 0, a & z) {
                            var Q = d,
                                se = v;
                            d = v = r
                        }
                        var ge = M ? r : Fu(i),
                            Oe = [i, a, l, d, v, Q, se, y, R, N];
                        if (ge && MC(Oe, ge), i = Oe[0], a = Oe[1], l = Oe[2], d = Oe[3], v = Oe[4], N = Oe[9] = Oe[9] === r ? M ? 0 : i.length : Bt(Oe[9] - Z, 0), !N && a & (Y | W) && (a &= ~(Y | W)), !a || a == U) var Ne = vC(i, a, l);
                        else a == Y || a == W ? Ne = EC(i, a, N) : (a == G || a == (U | G)) && !v.length ? Ne = _C(i, a, l, d) : Ne = Zo.apply(r, Oe);
                        var He = ge ? Jg : Cm;
                        return wm(He(Ne, Oe), i, a)
                    }

                    function Em(i, a, l, d) {
                        return i === r || tn(i, ps[l]) && !ft.call(d, l) ? a : i
                    }

                    function _m(i, a, l, d, v, y) {
                        return Rt(i) && Rt(a) && (y.set(a, i), qo(i, a, r, _m, y), y.delete(a)), i
                    }

                    function bC(i) {
                        return Ra(i) ? r : i
                    }

                    function ym(i, a, l, d, v, y) {
                        var R = l & P,
                            N = i.length,
                            M = a.length;
                        if (N != M && !(R && M > N)) return !1;
                        var Z = y.get(i),
                            Q = y.get(a);
                        if (Z && Q) return Z == a && Q == i;
                        var se = -1,
                            ge = !0,
                            Oe = l & x ? new wi : r;
                        for (y.set(i, a), y.set(a, i); ++se < N;) {
                            var Ne = i[se],
                                He = a[se];
                            if (d) var Le = R ? d(He, Ne, se, a, i, y) : d(Ne, He, se, i, a, y);
                            if (Le !== r) {
                                if (Le) continue;
                                ge = !1;
                                break
                            }
                            if (Oe) {
                                if (!au(a, function(Ye, ze) {
                                        if (!ha(Oe, ze) && (Ne === Ye || v(Ne, Ye, l, d, y))) return Oe.push(ze)
                                    })) {
                                    ge = !1;
                                    break
                                }
                            } else if (!(Ne === He || v(Ne, He, l, d, y))) {
                                ge = !1;
                                break
                            }
                        }
                        return y.delete(i), y.delete(a), ge
                    }

                    function TC(i, a, l, d, v, y, R) {
                        switch (l) {
                            case A:
                                if (i.byteLength != a.byteLength || i.byteOffset != a.byteOffset) return !1;
                                i = i.buffer, a = a.buffer;
                            case Pe:
                                return !(i.byteLength != a.byteLength || !y(new ko(i), new ko(a)));
                            case St:
                            case ot:
                            case O:
                                return tn(+i, +a);
                            case Yt:
                                return i.name == a.name && i.message == a.message;
                            case ie:
                            case w:
                                return i == a + "";
                            case p:
                                var N = du;
                            case ee:
                                var M = d & P;
                                if (N || (N = No), i.size != a.size && !M) return !1;
                                var Z = R.get(i);
                                if (Z) return Z == a;
                                d |= x, R.set(i, a);
                                var Q = ym(N(i), N(a), d, v, y, R);
                                return R.delete(i), Q;
                            case j:
                                if (Ea) return Ea.call(i) == Ea.call(a)
                        }
                        return !1
                    }

                    function SC(i, a, l, d, v, y) {
                        var R = l & P,
                            N = xu(i),
                            M = N.length,
                            Z = xu(a),
                            Q = Z.length;
                        if (M != Q && !R) return !1;
                        for (var se = M; se--;) {
                            var ge = N[se];
                            if (!(R ? ge in a : ft.call(a, ge))) return !1
                        }
                        var Oe = y.get(i),
                            Ne = y.get(a);
                        if (Oe && Ne) return Oe == a && Ne == i;
                        var He = !0;
                        y.set(i, a), y.set(a, i);
                        for (var Le = R; ++se < M;) {
                            ge = N[se];
                            var Ye = i[ge],
                                ze = a[ge];
                            if (d) var Lr = R ? d(ze, Ye, ge, a, i, y) : d(Ye, ze, ge, i, a, y);
                            if (!(Lr === r ? Ye === ze || v(Ye, ze, l, d, y) : Lr)) {
                                He = !1;
                                break
                            }
                            Le || (Le = ge == "constructor")
                        }
                        if (He && !Le) {
                            var pr = i.constructor,
                                $r = a.constructor;
                            pr != $r && "constructor" in i && "constructor" in a && !(typeof pr == "function" && pr instanceof pr && typeof $r == "function" && $r instanceof $r) && (He = !1)
                        }
                        return y.delete(i), y.delete(a), He
                    }

                    function wn(i) {
                        return Ku(Im(i, r, Mm), i + "")
                    }

                    function xu(i) {
                        return Bg(i, qt, Gu)
                    }

                    function Uu(i) {
                        return Bg(i, br, bm)
                    }
                    var Fu = Wo ? function(i) {
                        return Wo.get(i)
                    } : sf;

                    function rc(i) {
                        for (var a = i.name + "", l = ms[a], d = ft.call(ms, a) ? l.length : 0; d--;) {
                            var v = l[d],
                                y = v.func;
                            if (y == null || y == i) return v.name
                        }
                        return a
                    }

                    function ys(i) {
                        var a = ft.call(E, "placeholder") ? E : i;
                        return a.placeholder
                    }

                    function we() {
                        var i = E.iteratee || rf;
                        return i = i === rf ? jg : i, arguments.length ? i(arguments[0], arguments[1]) : i
                    }

                    function nc(i, a) {
                        var l = i.__data__;
                        return LC(a) ? l[typeof a == "string" ? "string" : "hash"] : l.map
                    }

                    function Bu(i) {
                        for (var a = qt(i), l = a.length; l--;) {
                            var d = a[l],
                                v = i[d];
                            a[l] = [d, v, Om(v)]
                        }
                        return a
                    }

                    function $i(i, a) {
                        var l = DI(i, a);
                        return Wg(l) ? l : r
                    }

                    function OC(i) {
                        var a = ft.call(i, Ri),
                            l = i[Ri];
                        try {
                            i[Ri] = r;
                            var d = !0
                        } catch {}
                        var v = Do.call(i);
                        return d && (a ? i[Ri] = l : delete i[Ri]), v
                    }
                    var Gu = pu ? function(i) {
                            return i == null ? [] : (i = ht(i), jn(pu(i), function(a) {
                                return Rg.call(i, a)
                            }))
                        } : af,
                        bm = pu ? function(i) {
                            for (var a = []; i;) Hn(a, Gu(i)), i = xo(i);
                            return a
                        } : af,
                        or = dr;
                    (gu && or(new gu(new ArrayBuffer(1))) != A || ga && or(new ga) != p || mu && or(mu.resolve()) != V || gs && or(new gs) != ee || ma && or(new ma) != pe) && (or = function(i) {
                        var a = dr(i),
                            l = a == B ? i.constructor : r,
                            d = l ? Pi(l) : "";
                        if (d) switch (d) {
                            case aR:
                                return A;
                            case oR:
                                return p;
                            case cR:
                                return V;
                            case lR:
                                return ee;
                            case uR:
                                return pe
                        }
                        return a
                    });

                    function AC(i, a, l) {
                        for (var d = -1, v = l.length; ++d < v;) {
                            var y = l[d],
                                R = y.size;
                            switch (y.type) {
                                case "drop":
                                    i += R;
                                    break;
                                case "dropRight":
                                    a -= R;
                                    break;
                                case "take":
                                    a = ar(a, i + R);
                                    break;
                                case "takeRight":
                                    i = Bt(i, a - R);
                                    break
                            }
                        }
                        return {
                            start: i,
                            end: a
                        }
                    }

                    function IC(i) {
                        var a = i.match($A);
                        return a ? a[1].split(PA) : []
                    }

                    function Tm(i, a, l) {
                        a = zn(a, i);
                        for (var d = -1, v = a.length, y = !1; ++d < v;) {
                            var R = gn(a[d]);
                            if (!(y = i != null && l(i, R))) break;
                            i = i[R]
                        }
                        return y || ++d != v ? y : (v = i == null ? 0 : i.length, !!v && uc(v) && Nn(R, v) && (Ue(i) || Di(i)))
                    }

                    function RC(i) {
                        var a = i.length,
                            l = new i.constructor(a);
                        return a && typeof i[0] == "string" && ft.call(i, "index") && (l.index = i.index, l.input = i.input), l
                    }

                    function Sm(i) {
                        return typeof i.constructor == "function" && !Aa(i) ? vs(xo(i)) : {}
                    }

                    function CC(i, a, l) {
                        var d = i.constructor;
                        switch (a) {
                            case Pe:
                                return Du(i);
                            case St:
                            case ot:
                                return new d(+i);
                            case A:
                                return fC(i, l);
                            case T:
                            case L:
                            case S:
                            case $:
                            case J:
                            case te:
                            case Ee:
                            case Te:
                            case ut:
                                return sm(i, l);
                            case p:
                                return new d;
                            case O:
                            case w:
                                return new d(i);
                            case ie:
                                return dC(i);
                            case ee:
                                return new d;
                            case j:
                                return hC(i)
                        }
                    }

                    function wC(i, a) {
                        var l = a.length;
                        if (!l) return i;
                        var d = l - 1;
                        return a[d] = (l > 1 ? "& " : "") + a[d], a = a.join(l > 2 ? ", " : " "), i.replace(LA, `{
/* [wrapped with ` + a + `] */
`)
                    }

                    function NC(i) {
                        return Ue(i) || Di(i) || !!(Cg && i && i[Cg])
                    }

                    function Nn(i, a) {
                        var l = typeof i;
                        return a = a == null ? me : a, !!a && (l == "number" || l != "symbol" && WA.test(i)) && i > -1 && i % 1 == 0 && i < a
                    }

                    function hr(i, a, l) {
                        if (!Rt(l)) return !1;
                        var d = typeof a;
                        return (d == "number" ? yr(l) && Nn(a, l.length) : d == "string" && a in l) ? tn(l[a], i) : !1
                    }

                    function Wu(i, a) {
                        if (Ue(i)) return !1;
                        var l = typeof i;
                        return l == "number" || l == "symbol" || l == "boolean" || i == null || Nr(i) ? !0 : RA.test(i) || !IA.test(i) || a != null && i in ht(a)
                    }

                    function LC(i) {
                        var a = typeof i;
                        return a == "string" || a == "number" || a == "symbol" || a == "boolean" ? i !== "__proto__" : i === null
                    }

                    function ju(i) {
                        var a = rc(i),
                            l = E[a];
                        if (typeof l != "function" || !(a in qe.prototype)) return !1;
                        if (i === l) return !0;
                        var d = Fu(l);
                        return !!d && i === d[0]
                    }

                    function $C(i) {
                        return !!Og && Og in i
                    }
                    var PC = $o ? Ln : of;

                    function Aa(i) {
                        var a = i && i.constructor,
                            l = typeof a == "function" && a.prototype || ps;
                        return i === l
                    }

                    function Om(i) {
                        return i === i && !Rt(i)
                    }

                    function Am(i, a) {
                        return function(l) {
                            return l == null ? !1 : l[i] === a && (a !== r || i in ht(l))
                        }
                    }

                    function DC(i) {
                        var a = cc(i, function(d) {
                                return l.size === h && l.clear(), d
                            }),
                            l = a.cache;
                        return a
                    }

                    function MC(i, a) {
                        var l = i[1],
                            d = a[1],
                            v = l | d,
                            y = v < (U | I | ae),
                            R = d == ae && l == Y || d == ae && l == ce && i[7].length <= a[8] || d == (ae | ce) && a[7].length <= a[8] && l == Y;
                        if (!(y || R)) return i;
                        d & U && (i[2] = a[2], v |= l & U ? 0 : H);
                        var N = a[3];
                        if (N) {
                            var M = i[3];
                            i[3] = M ? om(M, N, a[4]) : N, i[4] = M ? Kn(i[3], g) : a[4]
                        }
                        return N = a[5], N && (M = i[5], i[5] = M ? cm(M, N, a[6]) : N, i[6] = M ? Kn(i[5], g) : a[6]), N = a[7], N && (i[7] = N), d & ae && (i[8] = i[8] == null ? a[8] : ar(i[8], a[8])), i[9] == null && (i[9] = a[9]), i[0] = a[0], i[1] = v, i
                    }

                    function kC(i) {
                        var a = [];
                        if (i != null)
                            for (var l in ht(i)) a.push(l);
                        return a
                    }

                    function xC(i) {
                        return Do.call(i)
                    }

                    function Im(i, a, l) {
                        return a = Bt(a === r ? i.length - 1 : a, 0),
                            function() {
                                for (var d = arguments, v = -1, y = Bt(d.length - a, 0), R = K(y); ++v < y;) R[v] = d[a + v];
                                v = -1;
                                for (var N = K(a + 1); ++v < a;) N[v] = d[v];
                                return N[a] = l(R), Rr(i, this, N)
                            }
                    }

                    function Rm(i, a) {
                        return a.length < 2 ? i : Li(i, Wr(a, 0, -1))
                    }

                    function UC(i, a) {
                        for (var l = i.length, d = ar(a.length, l), v = _r(i); d--;) {
                            var y = a[d];
                            i[d] = Nn(y, l) ? v[y] : r
                        }
                        return i
                    }

                    function Hu(i, a) {
                        if (!(a === "constructor" && typeof i[a] == "function") && a != "__proto__") return i[a]
                    }
                    var Cm = Nm(Jg),
                        Ia = QI || function(i, a) {
                            return Qt.setTimeout(i, a)
                        },
                        Ku = Nm(oC);

                    function wm(i, a, l) {
                        var d = a + "";
                        return Ku(i, wC(d, FC(IC(d), l)))
                    }

                    function Nm(i) {
                        var a = 0,
                            l = 0;
                        return function() {
                            var d = nR(),
                                v = Ae - (d - l);
                            if (l = d, v > 0) {
                                if (++a >= fe) return arguments[0]
                            } else a = 0;
                            return i.apply(r, arguments)
                        }
                    }

                    function ic(i, a) {
                        var l = -1,
                            d = i.length,
                            v = d - 1;
                        for (a = a === r ? d : a; ++l < a;) {
                            var y = Ru(l, v),
                                R = i[y];
                            i[y] = i[l], i[l] = R
                        }
                        return i.length = a, i
                    }
                    var Lm = DC(function(i) {
                        var a = [];
                        return i.charCodeAt(0) === 46 && a.push(""), i.replace(CA, function(l, d, v, y) {
                            a.push(v ? y.replace(kA, "$1") : d || l)
                        }), a
                    });

                    function gn(i) {
                        if (typeof i == "string" || Nr(i)) return i;
                        var a = i + "";
                        return a == "0" && 1 / i == -_e ? "-0" : a
                    }

                    function Pi(i) {
                        if (i != null) {
                            try {
                                return Po.call(i)
                            } catch {}
                            try {
                                return i + ""
                            } catch {}
                        }
                        return ""
                    }

                    function FC(i, a) {
                        return Ur(Ir, function(l) {
                            var d = "_." + l[0];
                            a & l[1] && !Co(i, d) && i.push(d)
                        }), i.sort()
                    }

                    function $m(i) {
                        if (i instanceof qe) return i.clone();
                        var a = new Br(i.__wrapped__, i.__chain__);
                        return a.__actions__ = _r(i.__actions__), a.__index__ = i.__index__, a.__values__ = i.__values__, a
                    }

                    function BC(i, a, l) {
                        (l ? hr(i, a, l) : a === r) ? a = 1: a = Bt(Be(a), 0);
                        var d = i == null ? 0 : i.length;
                        if (!d || a < 1) return [];
                        for (var v = 0, y = 0, R = K(Bo(d / a)); v < d;) R[y++] = Wr(i, v, v += a);
                        return R
                    }

                    function GC(i) {
                        for (var a = -1, l = i == null ? 0 : i.length, d = 0, v = []; ++a < l;) {
                            var y = i[a];
                            y && (v[d++] = y)
                        }
                        return v
                    }

                    function WC() {
                        var i = arguments.length;
                        if (!i) return [];
                        for (var a = K(i - 1), l = arguments[0], d = i; d--;) a[d - 1] = arguments[d];
                        return Hn(Ue(l) ? _r(l) : [l], er(a, 1))
                    }
                    var jC = Ve(function(i, a) {
                            return $t(i) ? ya(i, er(a, 1, $t, !0)) : []
                        }),
                        HC = Ve(function(i, a) {
                            var l = jr(a);
                            return $t(l) && (l = r), $t(i) ? ya(i, er(a, 1, $t, !0), we(l, 2)) : []
                        }),
                        KC = Ve(function(i, a) {
                            var l = jr(a);
                            return $t(l) && (l = r), $t(i) ? ya(i, er(a, 1, $t, !0), r, l) : []
                        });

                    function VC(i, a, l) {
                        var d = i == null ? 0 : i.length;
                        return d ? (a = l || a === r ? 1 : Be(a), Wr(i, a < 0 ? 0 : a, d)) : []
                    }

                    function YC(i, a, l) {
                        var d = i == null ? 0 : i.length;
                        return d ? (a = l || a === r ? 1 : Be(a), a = d - a, Wr(i, 0, a < 0 ? 0 : a)) : []
                    }

                    function qC(i, a) {
                        return i && i.length ? Xo(i, we(a, 3), !0, !0) : []
                    }

                    function zC(i, a) {
                        return i && i.length ? Xo(i, we(a, 3), !0) : []
                    }

                    function XC(i, a, l, d) {
                        var v = i == null ? 0 : i.length;
                        return v ? (l && typeof l != "number" && hr(i, a, l) && (l = 0, d = v), WR(i, a, l, d)) : []
                    }

                    function Pm(i, a, l) {
                        var d = i == null ? 0 : i.length;
                        if (!d) return -1;
                        var v = l == null ? 0 : Be(l);
                        return v < 0 && (v = Bt(d + v, 0)), wo(i, we(a, 3), v)
                    }

                    function Dm(i, a, l) {
                        var d = i == null ? 0 : i.length;
                        if (!d) return -1;
                        var v = d - 1;
                        return l !== r && (v = Be(l), v = l < 0 ? Bt(d + v, 0) : ar(v, d - 1)), wo(i, we(a, 3), v, !0)
                    }

                    function Mm(i) {
                        var a = i == null ? 0 : i.length;
                        return a ? er(i, 1) : []
                    }

                    function JC(i) {
                        var a = i == null ? 0 : i.length;
                        return a ? er(i, _e) : []
                    }

                    function ZC(i, a) {
                        var l = i == null ? 0 : i.length;
                        return l ? (a = a === r ? 1 : Be(a), er(i, a)) : []
                    }

                    function QC(i) {
                        for (var a = -1, l = i == null ? 0 : i.length, d = {}; ++a < l;) {
                            var v = i[a];
                            d[v[0]] = v[1]
                        }
                        return d
                    }

                    function km(i) {
                        return i && i.length ? i[0] : r
                    }

                    function e1(i, a, l) {
                        var d = i == null ? 0 : i.length;
                        if (!d) return -1;
                        var v = l == null ? 0 : Be(l);
                        return v < 0 && (v = Bt(d + v, 0)), us(i, a, v)
                    }

                    function t1(i) {
                        var a = i == null ? 0 : i.length;
                        return a ? Wr(i, 0, -1) : []
                    }
                    var r1 = Ve(function(i) {
                            var a = Ot(i, $u);
                            return a.length && a[0] === i[0] ? Tu(a) : []
                        }),
                        n1 = Ve(function(i) {
                            var a = jr(i),
                                l = Ot(i, $u);
                            return a === jr(l) ? a = r : l.pop(), l.length && l[0] === i[0] ? Tu(l, we(a, 2)) : []
                        }),
                        i1 = Ve(function(i) {
                            var a = jr(i),
                                l = Ot(i, $u);
                            return a = typeof a == "function" ? a : r, a && l.pop(), l.length && l[0] === i[0] ? Tu(l, r, a) : []
                        });

                    function s1(i, a) {
                        return i == null ? "" : tR.call(i, a)
                    }

                    function jr(i) {
                        var a = i == null ? 0 : i.length;
                        return a ? i[a - 1] : r
                    }

                    function a1(i, a, l) {
                        var d = i == null ? 0 : i.length;
                        if (!d) return -1;
                        var v = d;
                        return l !== r && (v = Be(l), v = v < 0 ? Bt(d + v, 0) : ar(v, d - 1)), a === a ? FI(i, a, v) : wo(i, mg, v, !0)
                    }

                    function o1(i, a) {
                        return i && i.length ? Yg(i, Be(a)) : r
                    }
                    var c1 = Ve(xm);

                    function xm(i, a) {
                        return i && i.length && a && a.length ? Iu(i, a) : i
                    }

                    function l1(i, a, l) {
                        return i && i.length && a && a.length ? Iu(i, a, we(l, 2)) : i
                    }

                    function u1(i, a, l) {
                        return i && i.length && a && a.length ? Iu(i, a, r, l) : i
                    }
                    var f1 = wn(function(i, a) {
                        var l = i == null ? 0 : i.length,
                            d = Eu(i, a);
                        return Xg(i, Ot(a, function(v) {
                            return Nn(v, l) ? +v : v
                        }).sort(am)), d
                    });

                    function d1(i, a) {
                        var l = [];
                        if (!(i && i.length)) return l;
                        var d = -1,
                            v = [],
                            y = i.length;
                        for (a = we(a, 3); ++d < y;) {
                            var R = i[d];
                            a(R, d, i) && (l.push(R), v.push(d))
                        }
                        return Xg(i, v), l
                    }

                    function Vu(i) {
                        return i == null ? i : sR.call(i)
                    }

                    function h1(i, a, l) {
                        var d = i == null ? 0 : i.length;
                        return d ? (l && typeof l != "number" && hr(i, a, l) ? (a = 0, l = d) : (a = a == null ? 0 : Be(a), l = l === r ? d : Be(l)), Wr(i, a, l)) : []
                    }

                    function p1(i, a) {
                        return zo(i, a)
                    }

                    function g1(i, a, l) {
                        return wu(i, a, we(l, 2))
                    }

                    function m1(i, a) {
                        var l = i == null ? 0 : i.length;
                        if (l) {
                            var d = zo(i, a);
                            if (d < l && tn(i[d], a)) return d
                        }
                        return -1
                    }

                    function v1(i, a) {
                        return zo(i, a, !0)
                    }

                    function E1(i, a, l) {
                        return wu(i, a, we(l, 2), !0)
                    }

                    function _1(i, a) {
                        var l = i == null ? 0 : i.length;
                        if (l) {
                            var d = zo(i, a, !0) - 1;
                            if (tn(i[d], a)) return d
                        }
                        return -1
                    }

                    function y1(i) {
                        return i && i.length ? Zg(i) : []
                    }

                    function b1(i, a) {
                        return i && i.length ? Zg(i, we(a, 2)) : []
                    }

                    function T1(i) {
                        var a = i == null ? 0 : i.length;
                        return a ? Wr(i, 1, a) : []
                    }

                    function S1(i, a, l) {
                        return i && i.length ? (a = l || a === r ? 1 : Be(a), Wr(i, 0, a < 0 ? 0 : a)) : []
                    }

                    function O1(i, a, l) {
                        var d = i == null ? 0 : i.length;
                        return d ? (a = l || a === r ? 1 : Be(a), a = d - a, Wr(i, a < 0 ? 0 : a, d)) : []
                    }

                    function A1(i, a) {
                        return i && i.length ? Xo(i, we(a, 3), !1, !0) : []
                    }

                    function I1(i, a) {
                        return i && i.length ? Xo(i, we(a, 3)) : []
                    }
                    var R1 = Ve(function(i) {
                            return qn(er(i, 1, $t, !0))
                        }),
                        C1 = Ve(function(i) {
                            var a = jr(i);
                            return $t(a) && (a = r), qn(er(i, 1, $t, !0), we(a, 2))
                        }),
                        w1 = Ve(function(i) {
                            var a = jr(i);
                            return a = typeof a == "function" ? a : r, qn(er(i, 1, $t, !0), r, a)
                        });

                    function N1(i) {
                        return i && i.length ? qn(i) : []
                    }

                    function L1(i, a) {
                        return i && i.length ? qn(i, we(a, 2)) : []
                    }

                    function $1(i, a) {
                        return a = typeof a == "function" ? a : r, i && i.length ? qn(i, r, a) : []
                    }

                    function Yu(i) {
                        if (!(i && i.length)) return [];
                        var a = 0;
                        return i = jn(i, function(l) {
                            if ($t(l)) return a = Bt(l.length, a), !0
                        }), uu(a, function(l) {
                            return Ot(i, ou(l))
                        })
                    }

                    function Um(i, a) {
                        if (!(i && i.length)) return [];
                        var l = Yu(i);
                        return a == null ? l : Ot(l, function(d) {
                            return Rr(a, r, d)
                        })
                    }
                    var P1 = Ve(function(i, a) {
                            return $t(i) ? ya(i, a) : []
                        }),
                        D1 = Ve(function(i) {
                            return Lu(jn(i, $t))
                        }),
                        M1 = Ve(function(i) {
                            var a = jr(i);
                            return $t(a) && (a = r), Lu(jn(i, $t), we(a, 2))
                        }),
                        k1 = Ve(function(i) {
                            var a = jr(i);
                            return a = typeof a == "function" ? a : r, Lu(jn(i, $t), r, a)
                        }),
                        x1 = Ve(Yu);

                    function U1(i, a) {
                        return rm(i || [], a || [], _a)
                    }

                    function F1(i, a) {
                        return rm(i || [], a || [], Sa)
                    }
                    var B1 = Ve(function(i) {
                        var a = i.length,
                            l = a > 1 ? i[a - 1] : r;
                        return l = typeof l == "function" ? (i.pop(), l) : r, Um(i, l)
                    });

                    function Fm(i) {
                        var a = E(i);
                        return a.__chain__ = !0, a
                    }

                    function G1(i, a) {
                        return a(i), i
                    }

                    function sc(i, a) {
                        return a(i)
                    }
                    var W1 = wn(function(i) {
                        var a = i.length,
                            l = a ? i[0] : 0,
                            d = this.__wrapped__,
                            v = function(y) {
                                return Eu(y, i)
                            };
                        return a > 1 || this.__actions__.length || !(d instanceof qe) || !Nn(l) ? this.thru(v) : (d = d.slice(l, +l + (a ? 1 : 0)), d.__actions__.push({
                            func: sc,
                            args: [v],
                            thisArg: r
                        }), new Br(d, this.__chain__).thru(function(y) {
                            return a && !y.length && y.push(r), y
                        }))
                    });

                    function j1() {
                        return Fm(this)
                    }

                    function H1() {
                        return new Br(this.value(), this.__chain__)
                    }

                    function K1() {
                        this.__values__ === r && (this.__values__ = Qm(this.value()));
                        var i = this.__index__ >= this.__values__.length,
                            a = i ? r : this.__values__[this.__index__++];
                        return {
                            done: i,
                            value: a
                        }
                    }

                    function V1() {
                        return this
                    }

                    function Y1(i) {
                        for (var a, l = this; l instanceof Ho;) {
                            var d = $m(l);
                            d.__index__ = 0, d.__values__ = r, a ? v.__wrapped__ = d : a = d;
                            var v = d;
                            l = l.__wrapped__
                        }
                        return v.__wrapped__ = i, a
                    }

                    function q1() {
                        var i = this.__wrapped__;
                        if (i instanceof qe) {
                            var a = i;
                            return this.__actions__.length && (a = new qe(this)), a = a.reverse(), a.__actions__.push({
                                func: sc,
                                args: [Vu],
                                thisArg: r
                            }), new Br(a, this.__chain__)
                        }
                        return this.thru(Vu)
                    }

                    function z1() {
                        return tm(this.__wrapped__, this.__actions__)
                    }
                    var X1 = Jo(function(i, a, l) {
                        ft.call(i, l) ? ++i[l] : Rn(i, l, 1)
                    });

                    function J1(i, a, l) {
                        var d = Ue(i) ? pg : GR;
                        return l && hr(i, a, l) && (a = r), d(i, we(a, 3))
                    }

                    function Z1(i, a) {
                        var l = Ue(i) ? jn : Ug;
                        return l(i, we(a, 3))
                    }
                    var Q1 = dm(Pm),
                        e0 = dm(Dm);

                    function t0(i, a) {
                        return er(ac(i, a), 1)
                    }

                    function r0(i, a) {
                        return er(ac(i, a), _e)
                    }

                    function n0(i, a, l) {
                        return l = l === r ? 1 : Be(l), er(ac(i, a), l)
                    }

                    function Bm(i, a) {
                        var l = Ue(i) ? Ur : Yn;
                        return l(i, we(a, 3))
                    }

                    function Gm(i, a) {
                        var l = Ue(i) ? TI : xg;
                        return l(i, we(a, 3))
                    }
                    var i0 = Jo(function(i, a, l) {
                        ft.call(i, l) ? i[l].push(a) : Rn(i, l, [a])
                    });

                    function s0(i, a, l, d) {
                        i = yr(i) ? i : Ts(i), l = l && !d ? Be(l) : 0;
                        var v = i.length;
                        return l < 0 && (l = Bt(v + l, 0)), fc(i) ? l <= v && i.indexOf(a, l) > -1 : !!v && us(i, a, l) > -1
                    }
                    var a0 = Ve(function(i, a, l) {
                            var d = -1,
                                v = typeof a == "function",
                                y = yr(i) ? K(i.length) : [];
                            return Yn(i, function(R) {
                                y[++d] = v ? Rr(a, R, l) : ba(R, a, l)
                            }), y
                        }),
                        o0 = Jo(function(i, a, l) {
                            Rn(i, l, a)
                        });

                    function ac(i, a) {
                        var l = Ue(i) ? Ot : Hg;
                        return l(i, we(a, 3))
                    }

                    function c0(i, a, l, d) {
                        return i == null ? [] : (Ue(a) || (a = a == null ? [] : [a]), l = d ? r : l, Ue(l) || (l = l == null ? [] : [l]), qg(i, a, l))
                    }
                    var l0 = Jo(function(i, a, l) {
                        i[l ? 0 : 1].push(a)
                    }, function() {
                        return [
                            [],
                            []
                        ]
                    });

                    function u0(i, a, l) {
                        var d = Ue(i) ? su : Eg,
                            v = arguments.length < 3;
                        return d(i, we(a, 4), l, v, Yn)
                    }

                    function f0(i, a, l) {
                        var d = Ue(i) ? SI : Eg,
                            v = arguments.length < 3;
                        return d(i, we(a, 4), l, v, xg)
                    }

                    function d0(i, a) {
                        var l = Ue(i) ? jn : Ug;
                        return l(i, lc(we(a, 3)))
                    }

                    function h0(i) {
                        var a = Ue(i) ? Pg : sC;
                        return a(i)
                    }

                    function p0(i, a, l) {
                        (l ? hr(i, a, l) : a === r) ? a = 1: a = Be(a);
                        var d = Ue(i) ? kR : aC;
                        return d(i, a)
                    }

                    function g0(i) {
                        var a = Ue(i) ? xR : cC;
                        return a(i)
                    }

                    function m0(i) {
                        if (i == null) return 0;
                        if (yr(i)) return fc(i) ? ds(i) : i.length;
                        var a = or(i);
                        return a == p || a == ee ? i.size : Ou(i).length
                    }

                    function v0(i, a, l) {
                        var d = Ue(i) ? au : lC;
                        return l && hr(i, a, l) && (a = r), d(i, we(a, 3))
                    }
                    var E0 = Ve(function(i, a) {
                            if (i == null) return [];
                            var l = a.length;
                            return l > 1 && hr(i, a[0], a[1]) ? a = [] : l > 2 && hr(a[0], a[1], a[2]) && (a = [a[0]]), qg(i, er(a, 1), [])
                        }),
                        oc = ZI || function() {
                            return Qt.Date.now()
                        };

                    function _0(i, a) {
                        if (typeof a != "function") throw new Fr(c);
                        return i = Be(i),
                            function() {
                                if (--i < 1) return a.apply(this, arguments)
                            }
                    }

                    function Wm(i, a, l) {
                        return a = l ? r : a, a = i && a == null ? i.length : a, Cn(i, ae, r, r, r, r, a)
                    }

                    function jm(i, a) {
                        var l;
                        if (typeof a != "function") throw new Fr(c);
                        return i = Be(i),
                            function() {
                                return --i > 0 && (l = a.apply(this, arguments)), i <= 1 && (a = r), l
                            }
                    }
                    var qu = Ve(function(i, a, l) {
                            var d = U;
                            if (l.length) {
                                var v = Kn(l, ys(qu));
                                d |= G
                            }
                            return Cn(i, d, a, l, v)
                        }),
                        Hm = Ve(function(i, a, l) {
                            var d = U | I;
                            if (l.length) {
                                var v = Kn(l, ys(Hm));
                                d |= G
                            }
                            return Cn(a, d, i, l, v)
                        });

                    function Km(i, a, l) {
                        a = l ? r : a;
                        var d = Cn(i, Y, r, r, r, r, r, a);
                        return d.placeholder = Km.placeholder, d
                    }

                    function Vm(i, a, l) {
                        a = l ? r : a;
                        var d = Cn(i, W, r, r, r, r, r, a);
                        return d.placeholder = Vm.placeholder, d
                    }

                    function Ym(i, a, l) {
                        var d, v, y, R, N, M, Z = 0,
                            Q = !1,
                            se = !1,
                            ge = !0;
                        if (typeof i != "function") throw new Fr(c);
                        a = Hr(a) || 0, Rt(l) && (Q = !!l.leading, se = "maxWait" in l, y = se ? Bt(Hr(l.maxWait) || 0, a) : y, ge = "trailing" in l ? !!l.trailing : ge);

                        function Oe(Pt) {
                            var rn = d,
                                Pn = v;
                            return d = v = r, Z = Pt, R = i.apply(Pn, rn), R
                        }

                        function Ne(Pt) {
                            return Z = Pt, N = Ia(Ye, a), Q ? Oe(Pt) : R
                        }

                        function He(Pt) {
                            var rn = Pt - M,
                                Pn = Pt - Z,
                                dv = a - rn;
                            return se ? ar(dv, y - Pn) : dv
                        }

                        function Le(Pt) {
                            var rn = Pt - M,
                                Pn = Pt - Z;
                            return M === r || rn >= a || rn < 0 || se && Pn >= y
                        }

                        function Ye() {
                            var Pt = oc();
                            if (Le(Pt)) return ze(Pt);
                            N = Ia(Ye, He(Pt))
                        }

                        function ze(Pt) {
                            return N = r, ge && d ? Oe(Pt) : (d = v = r, R)
                        }

                        function Lr() {
                            N !== r && nm(N), Z = 0, d = M = v = N = r
                        }

                        function pr() {
                            return N === r ? R : ze(oc())
                        }

                        function $r() {
                            var Pt = oc(),
                                rn = Le(Pt);
                            if (d = arguments, v = this, M = Pt, rn) {
                                if (N === r) return Ne(M);
                                if (se) return nm(N), N = Ia(Ye, a), Oe(M)
                            }
                            return N === r && (N = Ia(Ye, a)), R
                        }
                        return $r.cancel = Lr, $r.flush = pr, $r
                    }
                    var y0 = Ve(function(i, a) {
                            return kg(i, 1, a)
                        }),
                        b0 = Ve(function(i, a, l) {
                            return kg(i, Hr(a) || 0, l)
                        });

                    function T0(i) {
                        return Cn(i, ue)
                    }

                    function cc(i, a) {
                        if (typeof i != "function" || a != null && typeof a != "function") throw new Fr(c);
                        var l = function() {
                            var d = arguments,
                                v = a ? a.apply(this, d) : d[0],
                                y = l.cache;
                            if (y.has(v)) return y.get(v);
                            var R = i.apply(this, d);
                            return l.cache = y.set(v, R) || y, R
                        };
                        return l.cache = new(cc.Cache || In), l
                    }
                    cc.Cache = In;

                    function lc(i) {
                        if (typeof i != "function") throw new Fr(c);
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

                    function S0(i) {
                        return jm(2, i)
                    }
                    var O0 = uC(function(i, a) {
                            a = a.length == 1 && Ue(a[0]) ? Ot(a[0], Cr(we())) : Ot(er(a, 1), Cr(we()));
                            var l = a.length;
                            return Ve(function(d) {
                                for (var v = -1, y = ar(d.length, l); ++v < y;) d[v] = a[v].call(this, d[v]);
                                return Rr(i, this, d)
                            })
                        }),
                        zu = Ve(function(i, a) {
                            var l = Kn(a, ys(zu));
                            return Cn(i, G, r, a, l)
                        }),
                        qm = Ve(function(i, a) {
                            var l = Kn(a, ys(qm));
                            return Cn(i, z, r, a, l)
                        }),
                        A0 = wn(function(i, a) {
                            return Cn(i, ce, r, r, r, a)
                        });

                    function I0(i, a) {
                        if (typeof i != "function") throw new Fr(c);
                        return a = a === r ? a : Be(a), Ve(i, a)
                    }

                    function R0(i, a) {
                        if (typeof i != "function") throw new Fr(c);
                        return a = a == null ? 0 : Bt(Be(a), 0), Ve(function(l) {
                            var d = l[a],
                                v = Xn(l, 0, a);
                            return d && Hn(v, d), Rr(i, this, v)
                        })
                    }

                    function C0(i, a, l) {
                        var d = !0,
                            v = !0;
                        if (typeof i != "function") throw new Fr(c);
                        return Rt(l) && (d = "leading" in l ? !!l.leading : d, v = "trailing" in l ? !!l.trailing : v), Ym(i, a, {
                            leading: d,
                            maxWait: a,
                            trailing: v
                        })
                    }

                    function w0(i) {
                        return Wm(i, 1)
                    }

                    function N0(i, a) {
                        return zu(Pu(a), i)
                    }

                    function L0() {
                        if (!arguments.length) return [];
                        var i = arguments[0];
                        return Ue(i) ? i : [i]
                    }

                    function $0(i) {
                        return Gr(i, C)
                    }

                    function P0(i, a) {
                        return a = typeof a == "function" ? a : r, Gr(i, C, a)
                    }

                    function D0(i) {
                        return Gr(i, _ | C)
                    }

                    function M0(i, a) {
                        return a = typeof a == "function" ? a : r, Gr(i, _ | C, a)
                    }

                    function k0(i, a) {
                        return a == null || Mg(i, a, qt(a))
                    }

                    function tn(i, a) {
                        return i === a || i !== i && a !== a
                    }
                    var x0 = tc(bu),
                        U0 = tc(function(i, a) {
                            return i >= a
                        }),
                        Di = Gg(function() {
                            return arguments
                        }()) ? Gg : function(i) {
                            return Lt(i) && ft.call(i, "callee") && !Rg.call(i, "callee")
                        },
                        Ue = K.isArray,
                        F0 = cg ? Cr(cg) : YR;

                    function yr(i) {
                        return i != null && uc(i.length) && !Ln(i)
                    }

                    function $t(i) {
                        return Lt(i) && yr(i)
                    }

                    function B0(i) {
                        return i === !0 || i === !1 || Lt(i) && dr(i) == St
                    }
                    var Jn = eR || of,
                        G0 = lg ? Cr(lg) : qR;

                    function W0(i) {
                        return Lt(i) && i.nodeType === 1 && !Ra(i)
                    }

                    function j0(i) {
                        if (i == null) return !0;
                        if (yr(i) && (Ue(i) || typeof i == "string" || typeof i.splice == "function" || Jn(i) || bs(i) || Di(i))) return !i.length;
                        var a = or(i);
                        if (a == p || a == ee) return !i.size;
                        if (Aa(i)) return !Ou(i).length;
                        for (var l in i)
                            if (ft.call(i, l)) return !1;
                        return !0
                    }

                    function H0(i, a) {
                        return Ta(i, a)
                    }

                    function K0(i, a, l) {
                        l = typeof l == "function" ? l : r;
                        var d = l ? l(i, a) : r;
                        return d === r ? Ta(i, a, r, l) : !!d
                    }

                    function Xu(i) {
                        if (!Lt(i)) return !1;
                        var a = dr(i);
                        return a == Yt || a == kt || typeof i.message == "string" && typeof i.name == "string" && !Ra(i)
                    }

                    function V0(i) {
                        return typeof i == "number" && wg(i)
                    }

                    function Ln(i) {
                        if (!Rt(i)) return !1;
                        var a = dr(i);
                        return a == xt || a == m || a == at || a == le
                    }

                    function zm(i) {
                        return typeof i == "number" && i == Be(i)
                    }

                    function uc(i) {
                        return typeof i == "number" && i > -1 && i % 1 == 0 && i <= me
                    }

                    function Rt(i) {
                        var a = typeof i;
                        return i != null && (a == "object" || a == "function")
                    }

                    function Lt(i) {
                        return i != null && typeof i == "object"
                    }
                    var Xm = ug ? Cr(ug) : XR;

                    function Y0(i, a) {
                        return i === a || Su(i, a, Bu(a))
                    }

                    function q0(i, a, l) {
                        return l = typeof l == "function" ? l : r, Su(i, a, Bu(a), l)
                    }

                    function z0(i) {
                        return Jm(i) && i != +i
                    }

                    function X0(i) {
                        if (PC(i)) throw new ke(o);
                        return Wg(i)
                    }

                    function J0(i) {
                        return i === null
                    }

                    function Z0(i) {
                        return i == null
                    }

                    function Jm(i) {
                        return typeof i == "number" || Lt(i) && dr(i) == O
                    }

                    function Ra(i) {
                        if (!Lt(i) || dr(i) != B) return !1;
                        var a = xo(i);
                        if (a === null) return !0;
                        var l = ft.call(a, "constructor") && a.constructor;
                        return typeof l == "function" && l instanceof l && Po.call(l) == qI
                    }
                    var Ju = fg ? Cr(fg) : JR;

                    function Q0(i) {
                        return zm(i) && i >= -me && i <= me
                    }
                    var Zm = dg ? Cr(dg) : ZR;

                    function fc(i) {
                        return typeof i == "string" || !Ue(i) && Lt(i) && dr(i) == w
                    }

                    function Nr(i) {
                        return typeof i == "symbol" || Lt(i) && dr(i) == j
                    }
                    var bs = hg ? Cr(hg) : QR;

                    function ew(i) {
                        return i === r
                    }

                    function tw(i) {
                        return Lt(i) && or(i) == pe
                    }

                    function rw(i) {
                        return Lt(i) && dr(i) == Ce
                    }
                    var nw = tc(Au),
                        iw = tc(function(i, a) {
                            return i <= a
                        });

                    function Qm(i) {
                        if (!i) return [];
                        if (yr(i)) return fc(i) ? Qr(i) : _r(i);
                        if (pa && i[pa]) return kI(i[pa]());
                        var a = or(i),
                            l = a == p ? du : a == ee ? No : Ts;
                        return l(i)
                    }

                    function $n(i) {
                        if (!i) return i === 0 ? i : 0;
                        if (i = Hr(i), i === _e || i === -_e) {
                            var a = i < 0 ? -1 : 1;
                            return a * Se
                        }
                        return i === i ? i : 0
                    }

                    function Be(i) {
                        var a = $n(i),
                            l = a % 1;
                        return a === a ? l ? a - l : a : 0
                    }

                    function ev(i) {
                        return i ? Ni(Be(i), 0, Fe) : 0
                    }

                    function Hr(i) {
                        if (typeof i == "number") return i;
                        if (Nr(i)) return Me;
                        if (Rt(i)) {
                            var a = typeof i.valueOf == "function" ? i.valueOf() : i;
                            i = Rt(a) ? a + "" : a
                        }
                        if (typeof i != "string") return i === 0 ? i : +i;
                        i = _g(i);
                        var l = FA.test(i);
                        return l || GA.test(i) ? _I(i.slice(2), l ? 2 : 8) : UA.test(i) ? Me : +i
                    }

                    function tv(i) {
                        return pn(i, br(i))
                    }

                    function sw(i) {
                        return i ? Ni(Be(i), -me, me) : i === 0 ? i : 0
                    }

                    function ct(i) {
                        return i == null ? "" : wr(i)
                    }
                    var aw = Es(function(i, a) {
                            if (Aa(a) || yr(a)) {
                                pn(a, qt(a), i);
                                return
                            }
                            for (var l in a) ft.call(a, l) && _a(i, l, a[l])
                        }),
                        rv = Es(function(i, a) {
                            pn(a, br(a), i)
                        }),
                        dc = Es(function(i, a, l, d) {
                            pn(a, br(a), i, d)
                        }),
                        ow = Es(function(i, a, l, d) {
                            pn(a, qt(a), i, d)
                        }),
                        cw = wn(Eu);

                    function lw(i, a) {
                        var l = vs(i);
                        return a == null ? l : Dg(l, a)
                    }
                    var uw = Ve(function(i, a) {
                            i = ht(i);
                            var l = -1,
                                d = a.length,
                                v = d > 2 ? a[2] : r;
                            for (v && hr(a[0], a[1], v) && (d = 1); ++l < d;)
                                for (var y = a[l], R = br(y), N = -1, M = R.length; ++N < M;) {
                                    var Z = R[N],
                                        Q = i[Z];
                                    (Q === r || tn(Q, ps[Z]) && !ft.call(i, Z)) && (i[Z] = y[Z])
                                }
                            return i
                        }),
                        fw = Ve(function(i) {
                            return i.push(r, _m), Rr(nv, r, i)
                        });

                    function dw(i, a) {
                        return gg(i, we(a, 3), hn)
                    }

                    function hw(i, a) {
                        return gg(i, we(a, 3), yu)
                    }

                    function pw(i, a) {
                        return i == null ? i : _u(i, we(a, 3), br)
                    }

                    function gw(i, a) {
                        return i == null ? i : Fg(i, we(a, 3), br)
                    }

                    function mw(i, a) {
                        return i && hn(i, we(a, 3))
                    }

                    function vw(i, a) {
                        return i && yu(i, we(a, 3))
                    }

                    function Ew(i) {
                        return i == null ? [] : Yo(i, qt(i))
                    }

                    function _w(i) {
                        return i == null ? [] : Yo(i, br(i))
                    }

                    function Zu(i, a, l) {
                        var d = i == null ? r : Li(i, a);
                        return d === r ? l : d
                    }

                    function yw(i, a) {
                        return i != null && Tm(i, a, jR)
                    }

                    function Qu(i, a) {
                        return i != null && Tm(i, a, HR)
                    }
                    var bw = pm(function(i, a, l) {
                            a != null && typeof a.toString != "function" && (a = Do.call(a)), i[a] = l
                        }, tf(Tr)),
                        Tw = pm(function(i, a, l) {
                            a != null && typeof a.toString != "function" && (a = Do.call(a)), ft.call(i, a) ? i[a].push(l) : i[a] = [l]
                        }, we),
                        Sw = Ve(ba);

                    function qt(i) {
                        return yr(i) ? $g(i) : Ou(i)
                    }

                    function br(i) {
                        return yr(i) ? $g(i, !0) : eC(i)
                    }

                    function Ow(i, a) {
                        var l = {};
                        return a = we(a, 3), hn(i, function(d, v, y) {
                            Rn(l, a(d, v, y), d)
                        }), l
                    }

                    function Aw(i, a) {
                        var l = {};
                        return a = we(a, 3), hn(i, function(d, v, y) {
                            Rn(l, v, a(d, v, y))
                        }), l
                    }
                    var Iw = Es(function(i, a, l) {
                            qo(i, a, l)
                        }),
                        nv = Es(function(i, a, l, d) {
                            qo(i, a, l, d)
                        }),
                        Rw = wn(function(i, a) {
                            var l = {};
                            if (i == null) return l;
                            var d = !1;
                            a = Ot(a, function(y) {
                                return y = zn(y, i), d || (d = y.length > 1), y
                            }), pn(i, Uu(i), l), d && (l = Gr(l, _ | b | C, bC));
                            for (var v = a.length; v--;) Nu(l, a[v]);
                            return l
                        });

                    function Cw(i, a) {
                        return iv(i, lc(we(a)))
                    }
                    var ww = wn(function(i, a) {
                        return i == null ? {} : rC(i, a)
                    });

                    function iv(i, a) {
                        if (i == null) return {};
                        var l = Ot(Uu(i), function(d) {
                            return [d]
                        });
                        return a = we(a), zg(i, l, function(d, v) {
                            return a(d, v[0])
                        })
                    }

                    function Nw(i, a, l) {
                        a = zn(a, i);
                        var d = -1,
                            v = a.length;
                        for (v || (v = 1, i = r); ++d < v;) {
                            var y = i == null ? r : i[gn(a[d])];
                            y === r && (d = v, y = l), i = Ln(y) ? y.call(i) : y
                        }
                        return i
                    }

                    function Lw(i, a, l) {
                        return i == null ? i : Sa(i, a, l)
                    }

                    function $w(i, a, l, d) {
                        return d = typeof d == "function" ? d : r, i == null ? i : Sa(i, a, l, d)
                    }
                    var sv = vm(qt),
                        av = vm(br);

                    function Pw(i, a, l) {
                        var d = Ue(i),
                            v = d || Jn(i) || bs(i);
                        if (a = we(a, 4), l == null) {
                            var y = i && i.constructor;
                            v ? l = d ? new y : [] : Rt(i) ? l = Ln(y) ? vs(xo(i)) : {} : l = {}
                        }
                        return (v ? Ur : hn)(i, function(R, N, M) {
                            return a(l, R, N, M)
                        }), l
                    }

                    function Dw(i, a) {
                        return i == null ? !0 : Nu(i, a)
                    }

                    function Mw(i, a, l) {
                        return i == null ? i : em(i, a, Pu(l))
                    }

                    function kw(i, a, l, d) {
                        return d = typeof d == "function" ? d : r, i == null ? i : em(i, a, Pu(l), d)
                    }

                    function Ts(i) {
                        return i == null ? [] : fu(i, qt(i))
                    }

                    function xw(i) {
                        return i == null ? [] : fu(i, br(i))
                    }

                    function Uw(i, a, l) {
                        return l === r && (l = a, a = r), l !== r && (l = Hr(l), l = l === l ? l : 0), a !== r && (a = Hr(a), a = a === a ? a : 0), Ni(Hr(i), a, l)
                    }

                    function Fw(i, a, l) {
                        return a = $n(a), l === r ? (l = a, a = 0) : l = $n(l), i = Hr(i), KR(i, a, l)
                    }

                    function Bw(i, a, l) {
                        if (l && typeof l != "boolean" && hr(i, a, l) && (a = l = r), l === r && (typeof a == "boolean" ? (l = a, a = r) : typeof i == "boolean" && (l = i, i = r)), i === r && a === r ? (i = 0, a = 1) : (i = $n(i), a === r ? (a = i, i = 0) : a = $n(a)), i > a) {
                            var d = i;
                            i = a, a = d
                        }
                        if (l || i % 1 || a % 1) {
                            var v = Ng();
                            return ar(i + v * (a - i + EI("1e-" + ((v + "").length - 1))), a)
                        }
                        return Ru(i, a)
                    }
                    var Gw = _s(function(i, a, l) {
                        return a = a.toLowerCase(), i + (l ? ov(a) : a)
                    });

                    function ov(i) {
                        return ef(ct(i).toLowerCase())
                    }

                    function cv(i) {
                        return i = ct(i), i && i.replace(jA, LI).replace(cI, "")
                    }

                    function Ww(i, a, l) {
                        i = ct(i), a = wr(a);
                        var d = i.length;
                        l = l === r ? d : Ni(Be(l), 0, d);
                        var v = l;
                        return l -= a.length, l >= 0 && i.slice(l, v) == a
                    }

                    function jw(i) {
                        return i = ct(i), i && SA.test(i) ? i.replace(Fp, $I) : i
                    }

                    function Hw(i) {
                        return i = ct(i), i && wA.test(i) ? i.replace(zl, "\\$&") : i
                    }
                    var Kw = _s(function(i, a, l) {
                            return i + (l ? "-" : "") + a.toLowerCase()
                        }),
                        Vw = _s(function(i, a, l) {
                            return i + (l ? " " : "") + a.toLowerCase()
                        }),
                        Yw = fm("toLowerCase");

                    function qw(i, a, l) {
                        i = ct(i), a = Be(a);
                        var d = a ? ds(i) : 0;
                        if (!a || d >= a) return i;
                        var v = (a - d) / 2;
                        return ec(Go(v), l) + i + ec(Bo(v), l)
                    }

                    function zw(i, a, l) {
                        i = ct(i), a = Be(a);
                        var d = a ? ds(i) : 0;
                        return a && d < a ? i + ec(a - d, l) : i
                    }

                    function Xw(i, a, l) {
                        i = ct(i), a = Be(a);
                        var d = a ? ds(i) : 0;
                        return a && d < a ? ec(a - d, l) + i : i
                    }

                    function Jw(i, a, l) {
                        return l || a == null ? a = 0 : a && (a = +a), iR(ct(i).replace(Xl, ""), a || 0)
                    }

                    function Zw(i, a, l) {
                        return (l ? hr(i, a, l) : a === r) ? a = 1 : a = Be(a), Cu(ct(i), a)
                    }

                    function Qw() {
                        var i = arguments,
                            a = ct(i[0]);
                        return i.length < 3 ? a : a.replace(i[1], i[2])
                    }
                    var eN = _s(function(i, a, l) {
                        return i + (l ? "_" : "") + a.toLowerCase()
                    });

                    function tN(i, a, l) {
                        return l && typeof l != "number" && hr(i, a, l) && (a = l = r), l = l === r ? Fe : l >>> 0, l ? (i = ct(i), i && (typeof a == "string" || a != null && !Ju(a)) && (a = wr(a), !a && fs(i)) ? Xn(Qr(i), 0, l) : i.split(a, l)) : []
                    }
                    var rN = _s(function(i, a, l) {
                        return i + (l ? " " : "") + ef(a)
                    });

                    function nN(i, a, l) {
                        return i = ct(i), l = l == null ? 0 : Ni(Be(l), 0, i.length), a = wr(a), i.slice(l, l + a.length) == a
                    }

                    function iN(i, a, l) {
                        var d = E.templateSettings;
                        l && hr(i, a, l) && (a = r), i = ct(i), a = dc({}, a, d, Em);
                        var v = dc({}, a.imports, d.imports, Em),
                            y = qt(v),
                            R = fu(v, y),
                            N, M, Z = 0,
                            Q = a.interpolate || Ao,
                            se = "__p += '",
                            ge = hu((a.escape || Ao).source + "|" + Q.source + "|" + (Q === Bp ? xA : Ao).source + "|" + (a.evaluate || Ao).source + "|$", "g"),
                            Oe = "//# sourceURL=" + (ft.call(a, "sourceURL") ? (a.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++hI + "]") + `
`;
                        i.replace(ge, function(Le, Ye, ze, Lr, pr, $r) {
                            return ze || (ze = Lr), se += i.slice(Z, $r).replace(HA, PI), Ye && (N = !0, se += `' +
__e(` + Ye + `) +
'`), pr && (M = !0, se += `';
` + pr + `;
__p += '`), ze && (se += `' +
((__t = (` + ze + `)) == null ? '' : __t) +
'`), Z = $r + Le.length, Le
                        }), se += `';
`;
                        var Ne = ft.call(a, "variable") && a.variable;
                        if (!Ne) se = `with (obj) {
` + se + `
}
`;
                        else if (MA.test(Ne)) throw new ke(u);
                        se = (M ? se.replace(sr, "") : se).replace(De, "$1").replace(da, "$1;"), se = "function(" + (Ne || "obj") + `) {
` + (Ne ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (N ? ", __e = _.escape" : "") + (M ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + se + `return __p
}`;
                        var He = uv(function() {
                            return it(y, Oe + "return " + se).apply(r, R)
                        });
                        if (He.source = se, Xu(He)) throw He;
                        return He
                    }

                    function sN(i) {
                        return ct(i).toLowerCase()
                    }

                    function aN(i) {
                        return ct(i).toUpperCase()
                    }

                    function oN(i, a, l) {
                        if (i = ct(i), i && (l || a === r)) return _g(i);
                        if (!i || !(a = wr(a))) return i;
                        var d = Qr(i),
                            v = Qr(a),
                            y = yg(d, v),
                            R = bg(d, v) + 1;
                        return Xn(d, y, R).join("")
                    }

                    function cN(i, a, l) {
                        if (i = ct(i), i && (l || a === r)) return i.slice(0, Sg(i) + 1);
                        if (!i || !(a = wr(a))) return i;
                        var d = Qr(i),
                            v = bg(d, Qr(a)) + 1;
                        return Xn(d, 0, v).join("")
                    }

                    function lN(i, a, l) {
                        if (i = ct(i), i && (l || a === r)) return i.replace(Xl, "");
                        if (!i || !(a = wr(a))) return i;
                        var d = Qr(i),
                            v = yg(d, Qr(a));
                        return Xn(d, v).join("")
                    }

                    function uN(i, a) {
                        var l = Re,
                            d = Ie;
                        if (Rt(a)) {
                            var v = "separator" in a ? a.separator : v;
                            l = "length" in a ? Be(a.length) : l, d = "omission" in a ? wr(a.omission) : d
                        }
                        i = ct(i);
                        var y = i.length;
                        if (fs(i)) {
                            var R = Qr(i);
                            y = R.length
                        }
                        if (l >= y) return i;
                        var N = l - ds(d);
                        if (N < 1) return d;
                        var M = R ? Xn(R, 0, N).join("") : i.slice(0, N);
                        if (v === r) return M + d;
                        if (R && (N += M.length - N), Ju(v)) {
                            if (i.slice(N).search(v)) {
                                var Z, Q = M;
                                for (v.global || (v = hu(v.source, ct(Gp.exec(v)) + "g")), v.lastIndex = 0; Z = v.exec(Q);) var se = Z.index;
                                M = M.slice(0, se === r ? N : se)
                            }
                        } else if (i.indexOf(wr(v), N) != N) {
                            var ge = M.lastIndexOf(v);
                            ge > -1 && (M = M.slice(0, ge))
                        }
                        return M + d
                    }

                    function fN(i) {
                        return i = ct(i), i && TA.test(i) ? i.replace(Up, BI) : i
                    }
                    var dN = _s(function(i, a, l) {
                            return i + (l ? " " : "") + a.toUpperCase()
                        }),
                        ef = fm("toUpperCase");

                    function lv(i, a, l) {
                        return i = ct(i), a = l ? r : a, a === r ? MI(i) ? jI(i) : II(i) : i.match(a) || []
                    }
                    var uv = Ve(function(i, a) {
                            try {
                                return Rr(i, r, a)
                            } catch (l) {
                                return Xu(l) ? l : new ke(l)
                            }
                        }),
                        hN = wn(function(i, a) {
                            return Ur(a, function(l) {
                                l = gn(l), Rn(i, l, qu(i[l], i))
                            }), i
                        });

                    function pN(i) {
                        var a = i == null ? 0 : i.length,
                            l = we();
                        return i = a ? Ot(i, function(d) {
                            if (typeof d[1] != "function") throw new Fr(c);
                            return [l(d[0]), d[1]]
                        }) : [], Ve(function(d) {
                            for (var v = -1; ++v < a;) {
                                var y = i[v];
                                if (Rr(y[0], this, d)) return Rr(y[1], this, d)
                            }
                        })
                    }

                    function gN(i) {
                        return BR(Gr(i, _))
                    }

                    function tf(i) {
                        return function() {
                            return i
                        }
                    }

                    function mN(i, a) {
                        return i == null || i !== i ? a : i
                    }
                    var vN = hm(),
                        EN = hm(!0);

                    function Tr(i) {
                        return i
                    }

                    function rf(i) {
                        return jg(typeof i == "function" ? i : Gr(i, _))
                    }

                    function _N(i) {
                        return Kg(Gr(i, _))
                    }

                    function yN(i, a) {
                        return Vg(i, Gr(a, _))
                    }
                    var bN = Ve(function(i, a) {
                            return function(l) {
                                return ba(l, i, a)
                            }
                        }),
                        TN = Ve(function(i, a) {
                            return function(l) {
                                return ba(i, l, a)
                            }
                        });

                    function nf(i, a, l) {
                        var d = qt(a),
                            v = Yo(a, d);
                        l == null && !(Rt(a) && (v.length || !d.length)) && (l = a, a = i, i = this, v = Yo(a, qt(a)));
                        var y = !(Rt(l) && "chain" in l) || !!l.chain,
                            R = Ln(i);
                        return Ur(v, function(N) {
                            var M = a[N];
                            i[N] = M, R && (i.prototype[N] = function() {
                                var Z = this.__chain__;
                                if (y || Z) {
                                    var Q = i(this.__wrapped__),
                                        se = Q.__actions__ = _r(this.__actions__);
                                    return se.push({
                                        func: M,
                                        args: arguments,
                                        thisArg: i
                                    }), Q.__chain__ = Z, Q
                                }
                                return M.apply(i, Hn([this.value()], arguments))
                            })
                        }), i
                    }

                    function SN() {
                        return Qt._ === this && (Qt._ = zI), this
                    }

                    function sf() {}

                    function ON(i) {
                        return i = Be(i), Ve(function(a) {
                            return Yg(a, i)
                        })
                    }
                    var AN = Mu(Ot),
                        IN = Mu(pg),
                        RN = Mu(au);

                    function fv(i) {
                        return Wu(i) ? ou(gn(i)) : nC(i)
                    }

                    function CN(i) {
                        return function(a) {
                            return i == null ? r : Li(i, a)
                        }
                    }
                    var wN = gm(),
                        NN = gm(!0);

                    function af() {
                        return []
                    }

                    function of() {
                        return !1
                    }

                    function LN() {
                        return {}
                    }

                    function $N() {
                        return ""
                    }

                    function PN() {
                        return !0
                    }

                    function DN(i, a) {
                        if (i = Be(i), i < 1 || i > me) return [];
                        var l = Fe,
                            d = ar(i, Fe);
                        a = we(a), i -= Fe;
                        for (var v = uu(d, a); ++l < i;) a(l);
                        return v
                    }

                    function MN(i) {
                        return Ue(i) ? Ot(i, gn) : Nr(i) ? [i] : _r(Lm(ct(i)))
                    }

                    function kN(i) {
                        var a = ++YI;
                        return ct(i) + a
                    }
                    var xN = Qo(function(i, a) {
                            return i + a
                        }, 0),
                        UN = ku("ceil"),
                        FN = Qo(function(i, a) {
                            return i / a
                        }, 1),
                        BN = ku("floor");

                    function GN(i) {
                        return i && i.length ? Vo(i, Tr, bu) : r
                    }

                    function WN(i, a) {
                        return i && i.length ? Vo(i, we(a, 2), bu) : r
                    }

                    function jN(i) {
                        return vg(i, Tr)
                    }

                    function HN(i, a) {
                        return vg(i, we(a, 2))
                    }

                    function KN(i) {
                        return i && i.length ? Vo(i, Tr, Au) : r
                    }

                    function VN(i, a) {
                        return i && i.length ? Vo(i, we(a, 2), Au) : r
                    }
                    var YN = Qo(function(i, a) {
                            return i * a
                        }, 1),
                        qN = ku("round"),
                        zN = Qo(function(i, a) {
                            return i - a
                        }, 0);

                    function XN(i) {
                        return i && i.length ? lu(i, Tr) : 0
                    }

                    function JN(i, a) {
                        return i && i.length ? lu(i, we(a, 2)) : 0
                    }
                    return E.after = _0, E.ary = Wm, E.assign = aw, E.assignIn = rv, E.assignInWith = dc, E.assignWith = ow, E.at = cw, E.before = jm, E.bind = qu, E.bindAll = hN, E.bindKey = Hm, E.castArray = L0, E.chain = Fm, E.chunk = BC, E.compact = GC, E.concat = WC, E.cond = pN, E.conforms = gN, E.constant = tf, E.countBy = X1, E.create = lw, E.curry = Km, E.curryRight = Vm, E.debounce = Ym, E.defaults = uw, E.defaultsDeep = fw, E.defer = y0, E.delay = b0, E.difference = jC, E.differenceBy = HC, E.differenceWith = KC, E.drop = VC, E.dropRight = YC, E.dropRightWhile = qC, E.dropWhile = zC, E.fill = XC, E.filter = Z1, E.flatMap = t0, E.flatMapDeep = r0, E.flatMapDepth = n0, E.flatten = Mm, E.flattenDeep = JC, E.flattenDepth = ZC, E.flip = T0, E.flow = vN, E.flowRight = EN, E.fromPairs = QC, E.functions = Ew, E.functionsIn = _w, E.groupBy = i0, E.initial = t1, E.intersection = r1, E.intersectionBy = n1, E.intersectionWith = i1, E.invert = bw, E.invertBy = Tw, E.invokeMap = a0, E.iteratee = rf, E.keyBy = o0, E.keys = qt, E.keysIn = br, E.map = ac, E.mapKeys = Ow, E.mapValues = Aw, E.matches = _N, E.matchesProperty = yN, E.memoize = cc, E.merge = Iw, E.mergeWith = nv, E.method = bN, E.methodOf = TN, E.mixin = nf, E.negate = lc, E.nthArg = ON, E.omit = Rw, E.omitBy = Cw, E.once = S0, E.orderBy = c0, E.over = AN, E.overArgs = O0, E.overEvery = IN, E.overSome = RN, E.partial = zu, E.partialRight = qm, E.partition = l0, E.pick = ww, E.pickBy = iv, E.property = fv, E.propertyOf = CN, E.pull = c1, E.pullAll = xm, E.pullAllBy = l1, E.pullAllWith = u1, E.pullAt = f1, E.range = wN, E.rangeRight = NN, E.rearg = A0, E.reject = d0, E.remove = d1, E.rest = I0, E.reverse = Vu, E.sampleSize = p0, E.set = Lw, E.setWith = $w, E.shuffle = g0, E.slice = h1, E.sortBy = E0, E.sortedUniq = y1, E.sortedUniqBy = b1, E.split = tN, E.spread = R0, E.tail = T1, E.take = S1, E.takeRight = O1, E.takeRightWhile = A1, E.takeWhile = I1, E.tap = G1, E.throttle = C0, E.thru = sc, E.toArray = Qm, E.toPairs = sv, E.toPairsIn = av, E.toPath = MN, E.toPlainObject = tv, E.transform = Pw, E.unary = w0, E.union = R1, E.unionBy = C1, E.unionWith = w1, E.uniq = N1, E.uniqBy = L1, E.uniqWith = $1, E.unset = Dw, E.unzip = Yu, E.unzipWith = Um, E.update = Mw, E.updateWith = kw, E.values = Ts, E.valuesIn = xw, E.without = P1, E.words = lv, E.wrap = N0, E.xor = D1, E.xorBy = M1, E.xorWith = k1, E.zip = x1, E.zipObject = U1, E.zipObjectDeep = F1, E.zipWith = B1, E.entries = sv, E.entriesIn = av, E.extend = rv, E.extendWith = dc, nf(E, E), E.add = xN, E.attempt = uv, E.camelCase = Gw, E.capitalize = ov, E.ceil = UN, E.clamp = Uw, E.clone = $0, E.cloneDeep = D0, E.cloneDeepWith = M0, E.cloneWith = P0, E.conformsTo = k0, E.deburr = cv, E.defaultTo = mN, E.divide = FN, E.endsWith = Ww, E.eq = tn, E.escape = jw, E.escapeRegExp = Hw, E.every = J1, E.find = Q1, E.findIndex = Pm, E.findKey = dw, E.findLast = e0, E.findLastIndex = Dm, E.findLastKey = hw, E.floor = BN, E.forEach = Bm, E.forEachRight = Gm, E.forIn = pw, E.forInRight = gw, E.forOwn = mw, E.forOwnRight = vw, E.get = Zu, E.gt = x0, E.gte = U0, E.has = yw, E.hasIn = Qu, E.head = km, E.identity = Tr, E.includes = s0, E.indexOf = e1, E.inRange = Fw, E.invoke = Sw, E.isArguments = Di, E.isArray = Ue, E.isArrayBuffer = F0, E.isArrayLike = yr, E.isArrayLikeObject = $t, E.isBoolean = B0, E.isBuffer = Jn, E.isDate = G0, E.isElement = W0, E.isEmpty = j0, E.isEqual = H0, E.isEqualWith = K0, E.isError = Xu, E.isFinite = V0, E.isFunction = Ln, E.isInteger = zm, E.isLength = uc, E.isMap = Xm, E.isMatch = Y0, E.isMatchWith = q0, E.isNaN = z0, E.isNative = X0, E.isNil = Z0, E.isNull = J0, E.isNumber = Jm, E.isObject = Rt, E.isObjectLike = Lt, E.isPlainObject = Ra, E.isRegExp = Ju, E.isSafeInteger = Q0, E.isSet = Zm, E.isString = fc, E.isSymbol = Nr, E.isTypedArray = bs, E.isUndefined = ew, E.isWeakMap = tw, E.isWeakSet = rw, E.join = s1, E.kebabCase = Kw, E.last = jr, E.lastIndexOf = a1, E.lowerCase = Vw, E.lowerFirst = Yw, E.lt = nw, E.lte = iw, E.max = GN, E.maxBy = WN, E.mean = jN, E.meanBy = HN, E.min = KN, E.minBy = VN, E.stubArray = af, E.stubFalse = of, E.stubObject = LN, E.stubString = $N, E.stubTrue = PN, E.multiply = YN, E.nth = o1, E.noConflict = SN, E.noop = sf, E.now = oc, E.pad = qw, E.padEnd = zw, E.padStart = Xw, E.parseInt = Jw, E.random = Bw, E.reduce = u0, E.reduceRight = f0, E.repeat = Zw, E.replace = Qw, E.result = Nw, E.round = qN, E.runInContext = D, E.sample = h0, E.size = m0, E.snakeCase = eN, E.some = v0, E.sortedIndex = p1, E.sortedIndexBy = g1, E.sortedIndexOf = m1, E.sortedLastIndex = v1, E.sortedLastIndexBy = E1, E.sortedLastIndexOf = _1, E.startCase = rN, E.startsWith = nN, E.subtract = zN, E.sum = XN, E.sumBy = JN, E.template = iN, E.times = DN, E.toFinite = $n, E.toInteger = Be, E.toLength = ev, E.toLower = sN, E.toNumber = Hr, E.toSafeInteger = sw, E.toString = ct, E.toUpper = aN, E.trim = oN, E.trimEnd = cN, E.trimStart = lN, E.truncate = uN, E.unescape = fN, E.uniqueId = kN, E.upperCase = dN, E.upperFirst = ef, E.each = Bm, E.eachRight = Gm, E.first = km, nf(E, function() {
                        var i = {};
                        return hn(E, function(a, l) {
                            ft.call(E.prototype, l) || (i[l] = a)
                        }), i
                    }(), {
                        chain: !1
                    }), E.VERSION = n, Ur(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(i) {
                        E[i].placeholder = E
                    }), Ur(["drop", "take"], function(i, a) {
                        qe.prototype[i] = function(l) {
                            l = l === r ? 1 : Bt(Be(l), 0);
                            var d = this.__filtered__ && !a ? new qe(this) : this.clone();
                            return d.__filtered__ ? d.__takeCount__ = ar(l, d.__takeCount__) : d.__views__.push({
                                size: ar(l, Fe),
                                type: i + (d.__dir__ < 0 ? "Right" : "")
                            }), d
                        }, qe.prototype[i + "Right"] = function(l) {
                            return this.reverse()[i](l).reverse()
                        }
                    }), Ur(["filter", "map", "takeWhile"], function(i, a) {
                        var l = a + 1,
                            d = l == F || l == de;
                        qe.prototype[i] = function(v) {
                            var y = this.clone();
                            return y.__iteratees__.push({
                                iteratee: we(v, 3),
                                type: l
                            }), y.__filtered__ = y.__filtered__ || d, y
                        }
                    }), Ur(["head", "last"], function(i, a) {
                        var l = "take" + (a ? "Right" : "");
                        qe.prototype[i] = function() {
                            return this[l](1).value()[0]
                        }
                    }), Ur(["initial", "tail"], function(i, a) {
                        var l = "drop" + (a ? "" : "Right");
                        qe.prototype[i] = function() {
                            return this.__filtered__ ? new qe(this) : this[l](1)
                        }
                    }), qe.prototype.compact = function() {
                        return this.filter(Tr)
                    }, qe.prototype.find = function(i) {
                        return this.filter(i).head()
                    }, qe.prototype.findLast = function(i) {
                        return this.reverse().find(i)
                    }, qe.prototype.invokeMap = Ve(function(i, a) {
                        return typeof i == "function" ? new qe(this) : this.map(function(l) {
                            return ba(l, i, a)
                        })
                    }), qe.prototype.reject = function(i) {
                        return this.filter(lc(we(i)))
                    }, qe.prototype.slice = function(i, a) {
                        i = Be(i);
                        var l = this;
                        return l.__filtered__ && (i > 0 || a < 0) ? new qe(l) : (i < 0 ? l = l.takeRight(-i) : i && (l = l.drop(i)), a !== r && (a = Be(a), l = a < 0 ? l.dropRight(-a) : l.take(a - i)), l)
                    }, qe.prototype.takeRightWhile = function(i) {
                        return this.reverse().takeWhile(i).reverse()
                    }, qe.prototype.toArray = function() {
                        return this.take(Fe)
                    }, hn(qe.prototype, function(i, a) {
                        var l = /^(?:filter|find|map|reject)|While$/.test(a),
                            d = /^(?:head|last)$/.test(a),
                            v = E[d ? "take" + (a == "last" ? "Right" : "") : a],
                            y = d || /^find/.test(a);
                        !v || (E.prototype[a] = function() {
                            var R = this.__wrapped__,
                                N = d ? [1] : arguments,
                                M = R instanceof qe,
                                Z = N[0],
                                Q = M || Ue(R),
                                se = function(Ye) {
                                    var ze = v.apply(E, Hn([Ye], N));
                                    return d && ge ? ze[0] : ze
                                };
                            Q && l && typeof Z == "function" && Z.length != 1 && (M = Q = !1);
                            var ge = this.__chain__,
                                Oe = !!this.__actions__.length,
                                Ne = y && !ge,
                                He = M && !Oe;
                            if (!y && Q) {
                                R = He ? R : new qe(this);
                                var Le = i.apply(R, N);
                                return Le.__actions__.push({
                                    func: sc,
                                    args: [se],
                                    thisArg: r
                                }), new Br(Le, ge)
                            }
                            return Ne && He ? i.apply(this, N) : (Le = this.thru(se), Ne ? d ? Le.value()[0] : Le.value() : Le)
                        })
                    }), Ur(["pop", "push", "shift", "sort", "splice", "unshift"], function(i) {
                        var a = Lo[i],
                            l = /^(?:push|sort|unshift)$/.test(i) ? "tap" : "thru",
                            d = /^(?:pop|shift)$/.test(i);
                        E.prototype[i] = function() {
                            var v = arguments;
                            if (d && !this.__chain__) {
                                var y = this.value();
                                return a.apply(Ue(y) ? y : [], v)
                            }
                            return this[l](function(R) {
                                return a.apply(Ue(R) ? R : [], v)
                            })
                        }
                    }), hn(qe.prototype, function(i, a) {
                        var l = E[a];
                        if (l) {
                            var d = l.name + "";
                            ft.call(ms, d) || (ms[d] = []), ms[d].push({
                                name: a,
                                func: l
                            })
                        }
                    }), ms[Zo(r, I).name] = [{
                        name: "wrapper",
                        func: r
                    }], qe.prototype.clone = fR, qe.prototype.reverse = dR, qe.prototype.value = hR, E.prototype.at = W1, E.prototype.chain = j1, E.prototype.commit = H1, E.prototype.next = K1, E.prototype.plant = Y1, E.prototype.reverse = q1, E.prototype.toJSON = E.prototype.valueOf = E.prototype.value = z1, E.prototype.first = E.prototype.head, pa && (E.prototype[pa] = V1), E
                },
                hs = HI();
            Ii ? ((Ii.exports = hs)._ = hs, ru._ = hs) : Qt._ = hs
        }).call(Mt)
    })(Dd, Dd.exports);
    const FH = tt({
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
                        g = u * h,
                        _ = f * h;
                    return {
                        width: `${g}px`,
                        height: `${_}px`
                    }
                }
            },
            mounted() {
                this.onResizeWithContext = Dd.exports.throttle(this.onResize.bind(this), 400), window.addEventListener("resize", this.onResizeWithContext), this.setupStage()
            },
            beforeUnmount() {
                window.removeEventListener("resize", this.onResizeWithContext), this.stage && this.stage.beforeDestroy()
            },
            methods: {
                setupStage() {
                    const e = this.$refs.stage,
                        t = {};
                    this.player.size && (t.width = this.player.size.width, t.height = this.player.size.height), this.player.thicknesses && (t.thickness = this.player.thicknesses[0]), this.player.colors && (t.color = this.player.colors[0]), this.player.maxPoints && (t.maxPoints = this.player.maxPoints);
                    const r = new cp(e, t);
                    r.canvas.lines = Gn([]), r.canvas.lines2 = Gn([]), this.stage = r, this.stage.on("up", () => {
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
        BH = {
            class: "draw"
        },
        GH = {
            ref: "content",
            class: "content"
        },
        WH = {
            class: "constrain"
        },
        jH = {
            key: 0
        };

    function HH(e, t, r, n, s, o) {
        const c = Ht("bb");
        return ne(), oe("div", BH, [X("div", GH, [X("div", WH, [e.player.prompt ? Ke((ne(), oe("div", jH, null, 512)), [
            [c, e.player.prompt]
        ]) : We("", !0), X("div", {
            ref: "stage",
            class: "stage",
            style: oo(e.stageDimensions)
        }, null, 4), X("button", {
            onClick: t[0] || (t[0] = Jr((...u) => e.onSubmitClick && e.onSubmitClick(...u), ["prevent"]))
        }, Xe(e.player.submitText || "SUBMIT"), 1)])], 512)])
    }
    const KH = mt(FH, [
            ["render", HH]
        ]),
        VH = tt({
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
                            e.numberOfPlayer = this.player.joinedPlayers, e.locale = this.$ecastRoom.locale, is.gameStarted(this.$ecastRoom.appTag, e)
                        }
                    } catch (e) {
                        this.$handleEcastError(e)
                    }
                }
            }
        }),
        YH = ["textContent"],
        qH = ["textContent"],
        zH = ["textContent"],
        XH = ["textContent"];

    function JH(e, t, r, n, s, o) {
        const c = Ht("t");
        return ne(), oe("div", {
            class: Ge(["lobby-actions", {
                vip: e.player.hasControls
            }])
        }, [!e.messageLocation || e.messageLocation === "top" ? (ne(), oe("p", {
            key: 0,
            class: Ge(e.localClasses.message),
            textContent: Xe(e.joinedCountText)
        }, null, 10, YH)) : We("", !0), e.player.hasControls ? (ne(), oe(At, {
            key: 1
        }, [e.player.status === "waitingForMore" ? (ne(), oe("p", {
            key: 0,
            class: Ge(e.localClasses.status)
        }, Xe(e.neededText), 3)) : We("", !0), e.player.status === "canStart" ? (ne(), oe("button", {
            key: 1,
            class: Ge(e.localClasses.action),
            onClick: t[0] || (t[0] = (...u) => e.onStartClick && e.onStartClick(...u)),
            textContent: Xe(e.startText || e.$t("LOBBY.BUTTON_START"))
        }, null, 10, qH)) : We("", !0), e.player.status === "countdown" ? (ne(), oe("button", {
            key: 2,
            class: Ge(e.localClasses.action),
            onClick: t[1] || (t[1] = (...u) => e.onCancelClick && e.onCancelClick(...u)),
            textContent: Xe(e.cancelText || e.$t("LOBBY.BUTTON_CANCEL"))
        }, null, 10, zH)) : We("", !0)], 64)) : e.player.gamepadStart ? (ne(), oe(At, {
            key: 2
        }, [e.player.status === "waitingForMore" ? (ne(), oe("p", {
            key: 0,
            class: Ge(e.localClasses.status)
        }, Xe(e.neededText), 3)) : We("", !0), e.player.status === "canStart" ? Ke((ne(), oe("p", {
            key: 1,
            class: Ge(e.localClasses.status)
        }, null, 2)), [
            [c, "LOBBY.WAITING_FOR_GAMEPAD"]
        ]) : We("", !0), e.player.status === "countdown" ? Ke((ne(), oe("p", {
            key: 2,
            class: Ge(e.localClasses.status)
        }, null, 2)), [
            [c, "LOBBY.GAME_STARTING"]
        ]) : We("", !0)], 64)) : (ne(), oe(At, {
            key: 3
        }, [e.player.status === "waitingForMore" ? (ne(), oe("p", {
            key: 0,
            class: Ge(e.localClasses.status)
        }, Xe(e.neededText), 3)) : We("", !0), e.player.status === "canStart" ? (ne(), oe("p", {
            key: 1,
            class: Ge(e.localClasses.status)
        }, Xe(e.waitingForVIPText), 3)) : We("", !0), e.player.status === "countdown" ? Ke((ne(), oe("p", {
            key: 2,
            class: Ge(e.localClasses.status)
        }, null, 2)), [
            [c, "LOBBY.GAME_STARTING"]
        ]) : We("", !0)], 64)), e.messageLocation === "bottom" ? (ne(), oe("p", {
            key: 4,
            class: Ge(e.localClasses.message),
            textContent: Xe(e.joinedCountText)
        }, null, 10, XH)) : We("", !0)], 2)
    }
    const ZH = mt(VH, [
            ["render", JH]
        ]),
        QH = tt({
            components: {
                LobbyActions: ZH
            },
            props: {
                player: Object
            }
        }),
        eK = {
            class: "lobby"
        },
        tK = {
            class: "constrain"
        };

    function rK(e, t, r, n, s, o) {
        const c = wt("LobbyActions");
        return ne(), oe("div", eK, [X("div", tK, [st(c, {
            player: e.player
        }, null, 8, ["player"])])])
    }
    const nK = mt(QH, [
            ["render", rK]
        ]),
        iK = tt({
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
                            e.isSequal = !0, e.locale = this.$ecastRoom.locale, is.gameStarted(this.$ecastRoom.appTag, e)
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

    function sK(e, t, r, n, s, o) {
        const c = Ht("t");
        return e.player && e.player.status ? (ne(), oe("div", {
            key: 0,
            class: Ge(["post-game-actions", {
                vip: e.player.hasControls
            }])
        }, [!e.messageLocation || e.messageLocation === "top" ? Ke((ne(), oe("p", {
            key: 0,
            class: Ge(e.localClasses.message)
        }, null, 2)), [
            [c, "POST_GAME.PLAY_AGAIN"]
        ]) : We("", !0), e.player.hasControls ? (ne(), oe(At, {
            key: 1
        }, [e.player.status === "waiting" ? Ke((ne(), oe("button", {
            key: 0,
            class: Ge(e.localClasses.action),
            onClick: t[0] || (t[0] = (...u) => e.onSamePlayersClick && e.onSamePlayersClick(...u))
        }, null, 2)), [
            [c, "POST_GAME.BUTTON_SAME_PLAYERS"]
        ]) : We("", !0), e.player.status === "waiting" ? Ke((ne(), oe("button", {
            key: 1,
            class: Ge(e.localClasses.action),
            onClick: t[1] || (t[1] = (...u) => e.onNewPlayersClick && e.onNewPlayersClick(...u))
        }, null, 2)), [
            [c, "POST_GAME.BUTTON_NEW_PLAYERS"]
        ]) : We("", !0), e.player.status === "countdown" ? Ke((ne(), oe("button", {
            key: 2,
            class: Ge(e.localClasses.action),
            onClick: t[2] || (t[2] = (...u) => e.onCancelClick && e.onCancelClick(...u))
        }, null, 2)), [
            [c, "LOBBY.BUTTON_CANCEL"]
        ]) : We("", !0)], 64)) : e.player.gamepadStart ? Ke((ne(), oe("p", {
            key: 2,
            class: Ge(e.localClasses.status)
        }, null, 2)), [
            [c, "LOBBY.WAITING_FOR_GAMEPAD"]
        ]) : (ne(), oe("p", {
            key: 3,
            class: Ge(e.localClasses.status)
        }, Xe(e.waitingForVIPText), 3)), e.messageLocation === "bottom" ? Ke((ne(), oe("p", {
            key: 4,
            class: Ge(e.localClasses.message)
        }, null, 2)), [
            [c, "POST_GAME.PLAY_AGAIN"]
        ]) : We("", !0)], 2)) : We("", !0)
    }
    const aK = mt(iK, [
            ["render", sK]
        ]),
        oK = tt({
            components: {
                PostGameActions: aK
            },
            props: {
                player: Object
            }
        }),
        cK = {
            class: "post-game"
        },
        lK = {
            class: "constrain"
        };

    function uK(e, t, r, n, s, o) {
        const c = wt("PostGameActions");
        return ne(), oe("div", cK, [X("div", lK, [st(c, {
            player: e.player
        }, null, 8, ["player"])])])
    }
    const fK = mt(oK, [
            ["render", uK]
        ]),
        dK = tt({
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
                        if (e && e instanceof Fn.ObjectEntity) return !0
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
        hK = {
            class: "single-text-entry"
        },
        pK = {
            class: "constrain"
        },
        gK = {
            key: 0
        },
        mK = {
            key: 1,
            for: "input"
        },
        vK = ["value", "rows", "placeholder", "disabled"],
        EK = ["value", "placeholder", "disabled"];

    function _K(e, t, r, n, s, o) {
        const c = Ht("bb");
        return ne(), oe("div", hK, [X("div", pK, [e.player.prompt ? Ke((ne(), oe("p", gK, null, 512)), [
            [c, e.player.prompt]
        ]) : We("", !0), e.player.label ? Ke((ne(), oe("label", mK, null, 512)), [
            [c, e.player.label]
        ]) : We("", !0), e.player.isMultiline ? (ne(), oe("textarea", {
            key: 2,
            id: "input",
            value: e.value,
            rows: e.player.lines || 2,
            placeholder: e.player.placeholder,
            disabled: e.player.isDisabled,
            onInput: t[0] || (t[0] = (...u) => e.onValueInput && e.onValueInput(...u))
        }, null, 40, vK)) : (ne(), oe("input", {
            key: 3,
            id: "input",
            type: "text",
            value: e.value,
            placeholder: e.player.placeholder,
            disabled: e.player.isDisabled,
            onInput: t[1] || (t[1] = (...u) => e.onValueInput && e.onValueInput(...u))
        }, null, 40, EK)), Ke(X("button", {
            onClick: t[2] || (t[2] = Jr((...u) => e.onSubmitClick && e.onSubmitClick(...u), ["prevent"]))
        }, null, 512), [
            [c, e.player.submitText || "SUBMIT"]
        ])])])
    }
    const yK = mt(dK, [
            ["render", _K]
        ]),
        bK = tt({
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
                        if (e && e instanceof Fn.ObjectEntity) return !0
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
        TK = {
            class: "multi-text-entry"
        },
        SK = {
            class: "constrain"
        },
        OK = {
            key: 0
        },
        AK = ["for"],
        IK = ["id", "value", "rows", "placeholder", "disabled", "onInput"],
        RK = ["id", "value", "placeholder", "disabled", "onInput"];

    function CK(e, t, r, n, s, o) {
        const c = Ht("bb");
        return ne(), oe("div", TK, [X("div", SK, [e.player.prompt ? Ke((ne(), oe("p", OK, null, 512)), [
            [c, e.player.prompt]
        ]) : We("", !0), (ne(!0), oe(At, null, lo(e.player.inputs, (u, f) => (ne(), oe(At, null, [u.label ? Ke((ne(), oe("label", {
            key: `label-${u.key}`,
            for: `input-${f}`
        }, null, 8, AK)), [
            [c, u.label]
        ]) : We("", !0), u.isMultiline ? (ne(), oe("textarea", {
            id: `input-${f}`,
            key: `input-${f}`,
            value: e.values[f],
            rows: u.lines || 2,
            placeholder: u.placeholder,
            disabled: u.isDisabled,
            onInput: h => e.onValueInput(h, f)
        }, null, 40, IK)) : (ne(), oe("input", {
            id: `input-${f}`,
            key: `input-${u.key}`,
            type: "text",
            value: e.values[f],
            placeholder: u.placeholder,
            disabled: u.isDisabled,
            onInput: h => e.onValueInput(h, f)
        }, null, 40, RK))], 64))), 256)), Ke(X("button", {
            onClick: t[0] || (t[0] = Jr((...u) => e.onSubmitClick && e.onSubmitClick(...u), ["prevent"]))
        }, null, 512), [
            [c, e.player.submitText || "SUBMIT"]
        ])])])
    }
    const wK = mt(bK, [
            ["render", CK]
        ]),
        NK = tt({
            props: {
                player: Object
            }
        }),
        LK = {
            class: "waiting"
        },
        $K = {
            class: "constrain"
        },
        PK = {
            key: 0
        };

    function DK(e, t, r, n, s, o) {
        const c = Ht("bb");
        return ne(), oe("div", LK, [X("div", $K, [e.player.message ? Ke((ne(), oe("p", PK, null, 512)), [
            [c, e.player.message]
        ]) : We("", !0)])])
    }
    const MK = mt(NK, [
        ["render", DK]
    ]);
    tt({
        components: {
            Choices: LH,
            Doodle: UH,
            Draw: KH,
            Lobby: nK,
            PostGame: fK,
            SingleTextEntry: yK,
            MultiTextEntry: wK,
            Waiting: MK
        },
        props: {
            applyStyling: {
                type: Boolean,
                default: !0
            },
            player: Object
        }
    });
    tt({
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
            is.galleryImpression(this.artifact.categoryId, "post_game")
        },
        methods: {
            onLinkClick() {
                is.galleryClick(this.artifact.categoryId, "post_game"), ro.setAsViewed(0)
            }
        }
    });
    const kK = tt({
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
                        const r = this.$refs.input;
                        r.value = e
                    }
                }
            },
            methods: {
                async onInput(e) {
                    const t = e.target,
                        r = t.maxLength === -1 ? Number.MAX_SAFE_INTEGER : t.maxLength;
                    if (this.sanitizers && (t.value = GS.withTypes(t.value, [...this.sanitizers])), t.value.length > r) {
                        t.value = t.value.substring(0, r);
                        return
                    }
                    this.$emit("update:modelValue", t.value), await this.$nextTick(), t.value !== this.modelValue && (t.value = this.modelValue)
                }
            }
        }),
        xK = ["value"];

    function UK(e, t, r, n, s, o) {
        return ne(), oe("input", {
            ref: "input",
            value: e.modelValue,
            onInput: t[0] || (t[0] = (...c) => e.onInput && e.onInput(...c))
        }, null, 40, xK)
    }
    const FK = mt(kK, [
        ["render", UK]
    ]);
    var Ui, Tc, Wa = typeof Map == "function" ? new Map : (Ui = [], Tc = [], {
            has: function(e) {
                return Ui.indexOf(e) > -1
            },
            get: function(e) {
                return Tc[Ui.indexOf(e)]
            },
            set: function(e, t) {
                Ui.indexOf(e) === -1 && (Ui.push(e), Tc.push(t))
            },
            delete: function(e) {
                var t = Ui.indexOf(e);
                t > -1 && (Ui.splice(t, 1), Tc.splice(t, 1))
            }
        }),
        WS = function(e) {
            return new Event(e, {
                bubbles: !0
            })
        };
    try {
        new Event("test")
    } catch {
        WS = function(t) {
            var r = document.createEvent("Event");
            return r.initEvent(t, !0, !1), r
        }
    }

    function BK(e) {
        var t = Wa.get(e);
        t && t.destroy()
    }

    function GK(e) {
        var t = Wa.get(e);
        t && t.update()
    }
    var Da = null;
    typeof window > "u" || typeof window.getComputedStyle != "function" ? ((Da = function(e) {
        return e
    }).destroy = function(e) {
        return e
    }, Da.update = function(e) {
        return e
    }) : ((Da = function(e, t) {
        return e && Array.prototype.forEach.call(e.length ? e : [e], function(r) {
            return function(n) {
                if (n && n.nodeName && n.nodeName === "TEXTAREA" && !Wa.has(n)) {
                    var s, o = null,
                        c = null,
                        u = null,
                        f = function() {
                            n.clientWidth !== c && b()
                        },
                        h = function(C) {
                            window.removeEventListener("resize", f, !1), n.removeEventListener("input", b, !1), n.removeEventListener("keyup", b, !1), n.removeEventListener("autosize:destroy", h, !1), n.removeEventListener("autosize:update", b, !1), Object.keys(C).forEach(function(P) {
                                n.style[P] = C[P]
                            }), Wa.delete(n)
                        }.bind(n, {
                            height: n.style.height,
                            resize: n.style.resize,
                            overflowY: n.style.overflowY,
                            overflowX: n.style.overflowX,
                            wordWrap: n.style.wordWrap
                        });
                    n.addEventListener("autosize:destroy", h, !1), "onpropertychange" in n && "oninput" in n && n.addEventListener("keyup", b, !1), window.addEventListener("resize", f, !1), n.addEventListener("input", b, !1), n.addEventListener("autosize:update", b, !1), n.style.overflowX = "hidden", n.style.wordWrap = "break-word", Wa.set(n, {
                        destroy: h,
                        update: b
                    }), (s = window.getComputedStyle(n, null)).resize === "vertical" ? n.style.resize = "none" : s.resize === "both" && (n.style.resize = "horizontal"), o = s.boxSizing === "content-box" ? -(parseFloat(s.paddingTop) + parseFloat(s.paddingBottom)) : parseFloat(s.borderTopWidth) + parseFloat(s.borderBottomWidth), isNaN(o) && (o = 0), b()
                }

                function g(C) {
                    var P = n.style.width;
                    n.style.width = "0px", n.style.width = P, n.style.overflowY = C
                }

                function _() {
                    if (n.scrollHeight !== 0) {
                        var C = function(x) {
                                for (var U = []; x && x.parentNode && x.parentNode instanceof Element;) x.parentNode.scrollTop && U.push({
                                    node: x.parentNode,
                                    scrollTop: x.parentNode.scrollTop
                                }), x = x.parentNode;
                                return U
                            }(n),
                            P = document.documentElement && document.documentElement.scrollTop;
                        n.style.height = "", n.style.height = n.scrollHeight + o + "px", c = n.clientWidth, C.forEach(function(x) {
                            x.node.scrollTop = x.scrollTop
                        }), P && (document.documentElement.scrollTop = P)
                    }
                }

                function b() {
                    _();
                    var C = Math.round(parseFloat(n.style.height)),
                        P = window.getComputedStyle(n, null),
                        x = P.boxSizing === "content-box" ? Math.round(parseFloat(P.height)) : n.offsetHeight;
                    if (x < C ? P.overflowY === "hidden" && (g("scroll"), _(), x = P.boxSizing === "content-box" ? Math.round(parseFloat(window.getComputedStyle(n, null).height)) : n.offsetHeight) : P.overflowY !== "hidden" && (g("hidden"), _(), x = P.boxSizing === "content-box" ? Math.round(parseFloat(window.getComputedStyle(n, null).height)) : n.offsetHeight), u !== x) {
                        u = x;
                        var U = WS("autosize:resized");
                        try {
                            n.dispatchEvent(U)
                        } catch {}
                    }
                }
            }(r)
        }), e
    }).destroy = function(e) {
        return e && Array.prototype.forEach.call(e.length ? e : [e], BK), e
    }, Da.update = function(e) {
        return e && Array.prototype.forEach.call(e.length ? e : [e], GK), e
    });
    var WK = Da,
        jK = {
            exports: {}
        },
        Sc = function(e) {
            return e && e.Math == Math && e
        },
        Mr = Sc(typeof globalThis == "object" && globalThis) || Sc(typeof window == "object" && window) || Sc(typeof self == "object" && self) || Sc(typeof Mt == "object" && Mt) || function() {
            return this
        }() || Function("return this")(),
        lp = {},
        kr = function(e) {
            try {
                return !!e()
            } catch {
                return !0
            }
        },
        HK = kr,
        Ti = !HK(function() {
            return Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1] != 7
        }),
        KK = kr,
        up = !KK(function() {
            var e = function() {}.bind();
            return typeof e != "function" || e.hasOwnProperty("prototype")
        }),
        VK = up,
        Oc = Function.prototype.call,
        Si = VK ? Oc.bind(Oc) : function() {
            return Oc.apply(Oc, arguments)
        },
        jS = {},
        HS = {}.propertyIsEnumerable,
        KS = Object.getOwnPropertyDescriptor,
        YK = KS && !HS.call({
            1: 2
        }, 1);
    jS.f = YK ? function(t) {
        var r = KS(this, t);
        return !!r && r.enumerable
    } : HS;
    var VS = function(e, t) {
            return {
                enumerable: !(e & 1),
                configurable: !(e & 2),
                writable: !(e & 4),
                value: t
            }
        },
        YS = up,
        qS = Function.prototype,
        qK = qS.bind,
        Md = qS.call,
        zK = YS && qK.bind(Md, Md),
        fr = YS ? function(e) {
            return e && zK(e)
        } : function(e) {
            return e && function() {
                return Md.apply(e, arguments)
            }
        },
        zS = fr,
        XK = zS({}.toString),
        JK = zS("".slice),
        Dl = function(e) {
            return JK(XK(e), 8, -1)
        },
        ZK = fr,
        QK = kr,
        e5 = Dl,
        Cf = Object,
        t5 = ZK("".split),
        r5 = QK(function() {
            return !Cf("z").propertyIsEnumerable(0)
        }) ? function(e) {
            return e5(e) == "String" ? t5(e, "") : Cf(e)
        } : Cf,
        n5 = TypeError,
        mo = function(e) {
            if (e == null) throw n5("Can't call method on " + e);
            return e
        },
        i5 = r5,
        s5 = mo,
        Ml = function(e) {
            return i5(s5(e))
        },
        Ar = function(e) {
            return typeof e == "function"
        },
        a5 = Ar,
        la = function(e) {
            return typeof e == "object" ? e !== null : a5(e)
        },
        wf = Mr,
        o5 = Ar,
        c5 = function(e) {
            return o5(e) ? e : void 0
        },
        kl = function(e, t) {
            return arguments.length < 2 ? c5(wf[e]) : wf[e] && wf[e][t]
        },
        l5 = fr,
        XS = l5({}.isPrototypeOf),
        u5 = kl,
        f5 = u5("navigator", "userAgent") || "",
        JS = Mr,
        Nf = f5,
        f_ = JS.process,
        d_ = JS.Deno,
        h_ = f_ && f_.versions || d_ && d_.version,
        p_ = h_ && h_.v8,
        nn, Qc;
    p_ && (nn = p_.split("."), Qc = nn[0] > 0 && nn[0] < 4 ? 1 : +(nn[0] + nn[1]));
    !Qc && Nf && (nn = Nf.match(/Edge\/(\d+)/), (!nn || nn[1] >= 74) && (nn = Nf.match(/Chrome\/(\d+)/), nn && (Qc = +nn[1])));
    var d5 = Qc,
        g_ = d5,
        h5 = kr,
        ZS = !!Object.getOwnPropertySymbols && !h5(function() {
            var e = Symbol();
            return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && g_ && g_ < 41
        }),
        p5 = ZS,
        QS = p5 && !Symbol.sham && typeof Symbol.iterator == "symbol",
        g5 = kl,
        m5 = Ar,
        v5 = XS,
        E5 = QS,
        _5 = Object,
        eO = E5 ? function(e) {
            return typeof e == "symbol"
        } : function(e) {
            var t = g5("Symbol");
            return m5(t) && v5(t.prototype, _5(e))
        },
        y5 = String,
        b5 = function(e) {
            try {
                return y5(e)
            } catch {
                return "Object"
            }
        },
        T5 = Ar,
        S5 = b5,
        O5 = TypeError,
        A5 = function(e) {
            if (T5(e)) return e;
            throw O5(S5(e) + " is not a function")
        },
        I5 = A5,
        fp = function(e, t) {
            var r = e[t];
            return r == null ? void 0 : I5(r)
        },
        Lf = Si,
        $f = Ar,
        Pf = la,
        R5 = TypeError,
        C5 = function(e, t) {
            var r, n;
            if (t === "string" && $f(r = e.toString) && !Pf(n = Lf(r, e)) || $f(r = e.valueOf) && !Pf(n = Lf(r, e)) || t !== "string" && $f(r = e.toString) && !Pf(n = Lf(r, e))) return n;
            throw R5("Can't convert object to primitive value")
        },
        xl = {
            exports: {}
        },
        m_ = Mr,
        w5 = Object.defineProperty,
        dp = function(e, t) {
            try {
                w5(m_, e, {
                    value: t,
                    configurable: !0,
                    writable: !0
                })
            } catch {
                m_[e] = t
            }
            return t
        },
        N5 = Mr,
        L5 = dp,
        v_ = "__core-js_shared__",
        $5 = N5[v_] || L5(v_, {}),
        hp = $5,
        E_ = hp;
    (xl.exports = function(e, t) {
        return E_[e] || (E_[e] = t !== void 0 ? t : {})
    })("versions", []).push({
        version: "3.23.4",
        mode: "global",
        copyright: "\xA9 2014-2022 Denis Pushkarev (zloirock.ru)",
        license: "https://github.com/zloirock/core-js/blob/v3.23.4/LICENSE",
        source: "https://github.com/zloirock/core-js"
    });
    var P5 = mo,
        D5 = Object,
        tO = function(e) {
            return D5(P5(e))
        },
        M5 = fr,
        k5 = tO,
        x5 = M5({}.hasOwnProperty),
        Oi = Object.hasOwn || function(t, r) {
            return x5(k5(t), r)
        },
        U5 = fr,
        F5 = 0,
        B5 = Math.random(),
        G5 = U5(1 .toString),
        rO = function(e) {
            return "Symbol(" + (e === void 0 ? "" : e) + ")_" + G5(++F5 + B5, 36)
        },
        W5 = Mr,
        j5 = xl.exports,
        __ = Oi,
        H5 = rO,
        y_ = ZS,
        nO = QS,
        Os = j5("wks"),
        rs = W5.Symbol,
        b_ = rs && rs.for,
        K5 = nO ? rs : rs && rs.withoutSetter || H5,
        os = function(e) {
            if (!__(Os, e) || !(y_ || typeof Os[e] == "string")) {
                var t = "Symbol." + e;
                y_ && __(rs, e) ? Os[e] = rs[e] : nO && b_ ? Os[e] = b_(t) : Os[e] = K5(t)
            }
            return Os[e]
        },
        V5 = Si,
        T_ = la,
        S_ = eO,
        Y5 = fp,
        q5 = C5,
        z5 = os,
        X5 = TypeError,
        J5 = z5("toPrimitive"),
        Z5 = function(e, t) {
            if (!T_(e) || S_(e)) return e;
            var r = Y5(e, J5),
                n;
            if (r) {
                if (t === void 0 && (t = "default"), n = V5(r, e, t), !T_(n) || S_(n)) return n;
                throw X5("Can't convert object to primitive value")
            }
            return t === void 0 && (t = "number"), q5(e, t)
        },
        Q5 = Z5,
        e6 = eO,
        iO = function(e) {
            var t = Q5(e, "string");
            return e6(t) ? t : t + ""
        },
        t6 = Mr,
        O_ = la,
        kd = t6.document,
        r6 = O_(kd) && O_(kd.createElement),
        sO = function(e) {
            return r6 ? kd.createElement(e) : {}
        },
        n6 = Ti,
        i6 = kr,
        s6 = sO,
        aO = !n6 && !i6(function() {
            return Object.defineProperty(s6("div"), "a", {
                get: function() {
                    return 7
                }
            }).a != 7
        }),
        a6 = Ti,
        o6 = Si,
        c6 = jS,
        l6 = VS,
        u6 = Ml,
        f6 = iO,
        d6 = Oi,
        h6 = aO,
        A_ = Object.getOwnPropertyDescriptor;
    lp.f = a6 ? A_ : function(t, r) {
        if (t = u6(t), r = f6(r), h6) try {
            return A_(t, r)
        } catch {}
        if (d6(t, r)) return l6(!o6(c6.f, t, r), t[r])
    };
    var vo = {},
        p6 = Ti,
        g6 = kr,
        oO = p6 && g6(function() {
            return Object.defineProperty(function() {}, "prototype", {
                value: 42,
                writable: !1
            }).prototype != 42
        }),
        m6 = la,
        v6 = String,
        E6 = TypeError,
        cs = function(e) {
            if (m6(e)) return e;
            throw E6(v6(e) + " is not an object")
        },
        _6 = Ti,
        y6 = aO,
        b6 = oO,
        Ac = cs,
        I_ = iO,
        T6 = TypeError,
        Df = Object.defineProperty,
        S6 = Object.getOwnPropertyDescriptor,
        Mf = "enumerable",
        kf = "configurable",
        xf = "writable";
    vo.f = _6 ? b6 ? function(t, r, n) {
        if (Ac(t), r = I_(r), Ac(n), typeof t == "function" && r === "prototype" && "value" in n && xf in n && !n[xf]) {
            var s = S6(t, r);
            s && s[xf] && (t[r] = n.value, n = {
                configurable: kf in n ? n[kf] : s[kf],
                enumerable: Mf in n ? n[Mf] : s[Mf],
                writable: !1
            })
        }
        return Df(t, r, n)
    } : Df : function(t, r, n) {
        if (Ac(t), r = I_(r), Ac(n), y6) try {
            return Df(t, r, n)
        } catch {}
        if ("get" in n || "set" in n) throw T6("Accessors not supported");
        return "value" in n && (t[r] = n.value), t
    };
    var O6 = Ti,
        A6 = vo,
        I6 = VS,
        pp = O6 ? function(e, t, r) {
            return A6.f(e, t, I6(1, r))
        } : function(e, t, r) {
            return e[t] = r, e
        },
        cO = {
            exports: {}
        },
        xd = Ti,
        R6 = Oi,
        lO = Function.prototype,
        C6 = xd && Object.getOwnPropertyDescriptor,
        gp = R6(lO, "name"),
        w6 = gp && function() {}.name === "something",
        N6 = gp && (!xd || xd && C6(lO, "name").configurable),
        L6 = {
            EXISTS: gp,
            PROPER: w6,
            CONFIGURABLE: N6
        },
        $6 = fr,
        P6 = Ar,
        Ud = hp,
        D6 = $6(Function.toString);
    P6(Ud.inspectSource) || (Ud.inspectSource = function(e) {
        return D6(e)
    });
    var uO = Ud.inspectSource,
        M6 = Mr,
        k6 = Ar,
        x6 = uO,
        R_ = M6.WeakMap,
        U6 = k6(R_) && /native code/.test(x6(R_)),
        F6 = xl.exports,
        B6 = rO,
        C_ = F6("keys"),
        fO = function(e) {
            return C_[e] || (C_[e] = B6(e))
        },
        mp = {},
        G6 = U6,
        dO = Mr,
        Uf = fr,
        W6 = la,
        j6 = pp,
        Ff = Oi,
        Bf = hp,
        H6 = fO,
        K6 = mp,
        w_ = "Object already initialized",
        Fd = dO.TypeError,
        V6 = dO.WeakMap,
        el, no, tl, Y6 = function(e) {
            return tl(e) ? no(e) : el(e, {})
        },
        q6 = function(e) {
            return function(t) {
                var r;
                if (!W6(t) || (r = no(t)).type !== e) throw Fd("Incompatible receiver, " + e + " required");
                return r
            }
        };
    if (G6 || Bf.state) {
        var Fi = Bf.state || (Bf.state = new V6),
            z6 = Uf(Fi.get),
            N_ = Uf(Fi.has),
            X6 = Uf(Fi.set);
        el = function(e, t) {
            if (N_(Fi, e)) throw new Fd(w_);
            return t.facade = e, X6(Fi, e, t), t
        }, no = function(e) {
            return z6(Fi, e) || {}
        }, tl = function(e) {
            return N_(Fi, e)
        }
    } else {
        var As = H6("state");
        K6[As] = !0, el = function(e, t) {
            if (Ff(e, As)) throw new Fd(w_);
            return t.facade = e, j6(e, As, t), t
        }, no = function(e) {
            return Ff(e, As) ? e[As] : {}
        }, tl = function(e) {
            return Ff(e, As)
        }
    }
    var hO = {
            set: el,
            get: no,
            has: tl,
            enforce: Y6,
            getterFor: q6
        },
        J6 = kr,
        Z6 = Ar,
        Ic = Oi,
        Bd = Ti,
        Q6 = L6.CONFIGURABLE,
        eV = uO,
        pO = hO,
        tV = pO.enforce,
        rV = pO.get,
        xc = Object.defineProperty,
        nV = Bd && !J6(function() {
            return xc(function() {}, "length", {
                value: 8
            }).length !== 8
        }),
        iV = String(String).split("String"),
        sV = cO.exports = function(e, t, r) {
            String(t).slice(0, 7) === "Symbol(" && (t = "[" + String(t).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), r && r.getter && (t = "get " + t), r && r.setter && (t = "set " + t), (!Ic(e, "name") || Q6 && e.name !== t) && (Bd ? xc(e, "name", {
                value: t,
                configurable: !0
            }) : e.name = t), nV && r && Ic(r, "arity") && e.length !== r.arity && xc(e, "length", {
                value: r.arity
            });
            try {
                r && Ic(r, "constructor") && r.constructor ? Bd && xc(e, "prototype", {
                    writable: !1
                }) : e.prototype && (e.prototype = void 0)
            } catch {}
            var n = tV(e);
            return Ic(n, "source") || (n.source = iV.join(typeof t == "string" ? t : "")), e
        };
    Function.prototype.toString = sV(function() {
        return Z6(this) && rV(this).source || eV(this)
    }, "toString");
    var aV = Ar,
        oV = vo,
        cV = cO.exports,
        lV = dp,
        gO = function(e, t, r, n) {
            n || (n = {});
            var s = n.enumerable,
                o = n.name !== void 0 ? n.name : t;
            if (aV(r) && cV(r, o, n), n.global) s ? e[t] = r : lV(t, r);
            else {
                try {
                    n.unsafe ? e[t] && (s = !0) : delete e[t]
                } catch {}
                s ? e[t] = r : oV.f(e, t, {
                    value: r,
                    enumerable: !1,
                    configurable: !n.nonConfigurable,
                    writable: !n.nonWritable
                })
            }
            return e
        },
        mO = {},
        uV = Math.ceil,
        fV = Math.floor,
        dV = Math.trunc || function(t) {
            var r = +t;
            return (r > 0 ? fV : uV)(r)
        },
        hV = dV,
        Ul = function(e) {
            var t = +e;
            return t !== t || t === 0 ? 0 : hV(t)
        },
        pV = Ul,
        gV = Math.max,
        mV = Math.min,
        vV = function(e, t) {
            var r = pV(e);
            return r < 0 ? gV(r + t, 0) : mV(r, t)
        },
        EV = Ul,
        _V = Math.min,
        vO = function(e) {
            return e > 0 ? _V(EV(e), 9007199254740991) : 0
        },
        yV = vO,
        bV = function(e) {
            return yV(e.length)
        },
        TV = Ml,
        SV = vV,
        OV = bV,
        L_ = function(e) {
            return function(t, r, n) {
                var s = TV(t),
                    o = OV(s),
                    c = SV(n, o),
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
        AV = {
            includes: L_(!0),
            indexOf: L_(!1)
        },
        IV = fr,
        Gf = Oi,
        RV = Ml,
        CV = AV.indexOf,
        wV = mp,
        $_ = IV([].push),
        EO = function(e, t) {
            var r = RV(e),
                n = 0,
                s = [],
                o;
            for (o in r) !Gf(wV, o) && Gf(r, o) && $_(s, o);
            for (; t.length > n;) Gf(r, o = t[n++]) && (~CV(s, o) || $_(s, o));
            return s
        },
        vp = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
        NV = EO,
        LV = vp,
        $V = LV.concat("length", "prototype");
    mO.f = Object.getOwnPropertyNames || function(t) {
        return NV(t, $V)
    };
    var _O = {};
    _O.f = Object.getOwnPropertySymbols;
    var PV = kl,
        DV = fr,
        MV = mO,
        kV = _O,
        xV = cs,
        UV = DV([].concat),
        FV = PV("Reflect", "ownKeys") || function(t) {
            var r = MV.f(xV(t)),
                n = kV.f;
            return n ? UV(r, n(t)) : r
        },
        P_ = Oi,
        BV = FV,
        GV = lp,
        WV = vo,
        jV = function(e, t, r) {
            for (var n = BV(t), s = WV.f, o = GV.f, c = 0; c < n.length; c++) {
                var u = n[c];
                !P_(e, u) && !(r && P_(r, u)) && s(e, u, o(t, u))
            }
        },
        HV = kr,
        KV = Ar,
        VV = /#|\.prototype\./,
        Eo = function(e, t) {
            var r = qV[YV(e)];
            return r == XV ? !0 : r == zV ? !1 : KV(t) ? HV(t) : !!t
        },
        YV = Eo.normalize = function(e) {
            return String(e).replace(VV, ".").toLowerCase()
        },
        qV = Eo.data = {},
        zV = Eo.NATIVE = "N",
        XV = Eo.POLYFILL = "P",
        JV = Eo,
        Wf = Mr,
        ZV = lp.f,
        QV = pp,
        e7 = gO,
        t7 = dp,
        r7 = jV,
        n7 = JV,
        yO = function(e, t) {
            var r = e.target,
                n = e.global,
                s = e.stat,
                o, c, u, f, h, g;
            if (n ? c = Wf : s ? c = Wf[r] || t7(r, {}) : c = (Wf[r] || {}).prototype, c)
                for (u in t) {
                    if (h = t[u], e.dontCallGetSet ? (g = ZV(c, u), f = g && g.value) : f = c[u], o = n7(n ? u : r + (s ? "." : "#") + u, e.forced), !o && f !== void 0) {
                        if (typeof h == typeof f) continue;
                        r7(h, f)
                    }(e.sham || f && f.sham) && QV(h, "sham", !0), e7(c, u, h, e)
                }
        },
        i7 = la,
        s7 = Dl,
        a7 = os,
        o7 = a7("match"),
        c7 = function(e) {
            var t;
            return i7(e) && ((t = e[o7]) !== void 0 ? !!t : s7(e) == "RegExp")
        },
        l7 = os,
        u7 = l7("toStringTag"),
        bO = {};
    bO[u7] = "z";
    var f7 = String(bO) === "[object z]",
        d7 = f7,
        h7 = Ar,
        Uc = Dl,
        p7 = os,
        g7 = p7("toStringTag"),
        m7 = Object,
        v7 = Uc(function() {
            return arguments
        }()) == "Arguments",
        E7 = function(e, t) {
            try {
                return e[t]
            } catch {}
        },
        _7 = d7 ? Uc : function(e) {
            var t, r, n;
            return e === void 0 ? "Undefined" : e === null ? "Null" : typeof(r = E7(t = m7(e), g7)) == "string" ? r : v7 ? Uc(t) : (n = Uc(t)) == "Object" && h7(t.callee) ? "Arguments" : n
        },
        y7 = _7,
        b7 = String,
        Fl = function(e) {
            if (y7(e) === "Symbol") throw TypeError("Cannot convert a Symbol value to a string");
            return b7(e)
        },
        T7 = cs,
        TO = function() {
            var e = T7(this),
                t = "";
            return e.hasIndices && (t += "d"), e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.unicodeSets && (t += "v"), e.sticky && (t += "y"), t
        },
        S7 = Si,
        O7 = Oi,
        A7 = XS,
        I7 = TO,
        D_ = RegExp.prototype,
        R7 = function(e) {
            var t = e.flags;
            return t === void 0 && !("flags" in D_) && !O7(e, "flags") && A7(D_, e) ? S7(I7, e) : t
        },
        Ep = fr,
        C7 = tO,
        w7 = Math.floor,
        jf = Ep("".charAt),
        N7 = Ep("".replace),
        Hf = Ep("".slice),
        L7 = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
        $7 = /\$([$&'`]|\d{1,2})/g,
        SO = function(e, t, r, n, s, o) {
            var c = r + e.length,
                u = n.length,
                f = $7;
            return s !== void 0 && (s = C7(s), f = L7), N7(o, f, function(h, g) {
                var _;
                switch (jf(g, 0)) {
                    case "$":
                        return "$";
                    case "&":
                        return e;
                    case "`":
                        return Hf(t, 0, r);
                    case "'":
                        return Hf(t, c);
                    case "<":
                        _ = s[Hf(g, 1, -1)];
                        break;
                    default:
                        var b = +g;
                        if (b === 0) return h;
                        if (b > u) {
                            var C = w7(b / 10);
                            return C === 0 ? h : C <= u ? n[C - 1] === void 0 ? jf(g, 1) : n[C - 1] + jf(g, 1) : h
                        }
                        _ = n[b - 1]
                }
                return _ === void 0 ? "" : _
            })
        },
        P7 = yO,
        D7 = Si,
        _p = fr,
        M_ = mo,
        M7 = Ar,
        k7 = c7,
        $a = Fl,
        x7 = fp,
        U7 = R7,
        F7 = SO,
        B7 = os,
        G7 = B7("replace"),
        W7 = TypeError,
        OO = _p("".indexOf);
    _p("".replace);
    var k_ = _p("".slice),
        j7 = Math.max,
        x_ = function(e, t, r) {
            return r > e.length ? -1 : t === "" ? r : OO(e, t, r)
        };
    P7({
        target: "String",
        proto: !0
    }, {
        replaceAll: function(t, r) {
            var n = M_(this),
                s, o, c, u, f, h, g, _, b, C = 0,
                P = 0,
                x = "";
            if (t != null) {
                if (s = k7(t), s && (o = $a(M_(U7(t))), !~OO(o, "g"))) throw W7("`.replaceAll` does not allow non-global regexes");
                if (c = x7(t, G7), c) return D7(c, t, n, r)
            }
            for (u = $a(n), f = $a(t), h = M7(r), h || (r = $a(r)), g = f.length, _ = j7(1, g), C = x_(u, f, 0); C !== -1;) b = h ? $a(r(f, C, u)) : F7(f, u, C, [], void 0, r), x += k_(u, P, C) + b, P = C + g, C = x_(u, f, C + _);
            return P < u.length && (x += k_(u, P)), x
        }
    });
    var yp = kr,
        H7 = Mr,
        bp = H7.RegExp,
        Tp = yp(function() {
            var e = bp("a", "y");
            return e.lastIndex = 2, e.exec("abcd") != null
        }),
        K7 = Tp || yp(function() {
            return !bp("a", "y").sticky
        }),
        V7 = Tp || yp(function() {
            var e = bp("^r", "gy");
            return e.lastIndex = 2, e.exec("str") != null
        }),
        Y7 = {
            BROKEN_CARET: V7,
            MISSED_STICKY: K7,
            UNSUPPORTED_Y: Tp
        },
        AO = {},
        q7 = EO,
        z7 = vp,
        X7 = Object.keys || function(t) {
            return q7(t, z7)
        },
        J7 = Ti,
        Z7 = oO,
        Q7 = vo,
        eY = cs,
        tY = Ml,
        rY = X7;
    AO.f = J7 && !Z7 ? Object.defineProperties : function(t, r) {
        eY(t);
        for (var n = tY(r), s = rY(r), o = s.length, c = 0, u; o > c;) Q7.f(t, u = s[c++], n[u]);
        return t
    };
    var nY = kl,
        iY = nY("document", "documentElement"),
        sY = cs,
        aY = AO,
        U_ = vp,
        oY = mp,
        cY = iY,
        lY = sO,
        uY = fO,
        F_ = ">",
        B_ = "<",
        Gd = "prototype",
        Wd = "script",
        IO = uY("IE_PROTO"),
        Kf = function() {},
        RO = function(e) {
            return B_ + Wd + F_ + e + B_ + "/" + Wd + F_
        },
        G_ = function(e) {
            e.write(RO("")), e.close();
            var t = e.parentWindow.Object;
            return e = null, t
        },
        fY = function() {
            var e = lY("iframe"),
                t = "java" + Wd + ":",
                r;
            return e.style.display = "none", cY.appendChild(e), e.src = String(t), r = e.contentWindow.document, r.open(), r.write(RO("document.F=Object")), r.close(), r.F
        },
        Rc, Fc = function() {
            try {
                Rc = new ActiveXObject("htmlfile")
            } catch {}
            Fc = typeof document < "u" ? document.domain && Rc ? G_(Rc) : fY() : G_(Rc);
            for (var e = U_.length; e--;) delete Fc[Gd][U_[e]];
            return Fc()
        };
    oY[IO] = !0;
    var dY = Object.create || function(t, r) {
            var n;
            return t !== null ? (Kf[Gd] = sY(t), n = new Kf, Kf[Gd] = null, n[IO] = t) : n = Fc(), r === void 0 ? n : aY.f(n, r)
        },
        hY = kr,
        pY = Mr,
        gY = pY.RegExp,
        mY = hY(function() {
            var e = gY(".", "s");
            return !(e.dotAll && e.exec(`
`) && e.flags === "s")
        }),
        vY = kr,
        EY = Mr,
        _Y = EY.RegExp,
        yY = vY(function() {
            var e = _Y("(?<a>b)", "g");
            return e.exec("b").groups.a !== "b" || "b".replace(e, "$<a>c") !== "bc"
        }),
        Ls = Si,
        Bl = fr,
        bY = Fl,
        TY = TO,
        SY = Y7,
        OY = xl.exports,
        AY = dY,
        IY = hO.get,
        RY = mY,
        CY = yY,
        wY = OY("native-string-replace", String.prototype.replace),
        rl = RegExp.prototype.exec,
        jd = rl,
        NY = Bl("".charAt),
        LY = Bl("".indexOf),
        $Y = Bl("".replace),
        Vf = Bl("".slice),
        Hd = function() {
            var e = /a/,
                t = /b*/g;
            return Ls(rl, e, "a"), Ls(rl, t, "a"), e.lastIndex !== 0 || t.lastIndex !== 0
        }(),
        CO = SY.BROKEN_CARET,
        Kd = /()??/.exec("")[1] !== void 0,
        PY = Hd || Kd || CO || RY || CY;
    PY && (jd = function(t) {
        var r = this,
            n = IY(r),
            s = bY(t),
            o = n.raw,
            c, u, f, h, g, _, b;
        if (o) return o.lastIndex = r.lastIndex, c = Ls(jd, o, s), r.lastIndex = o.lastIndex, c;
        var C = n.groups,
            P = CO && r.sticky,
            x = Ls(TY, r),
            U = r.source,
            I = 0,
            H = s;
        if (P && (x = $Y(x, "y", ""), LY(x, "g") === -1 && (x += "g"), H = Vf(s, r.lastIndex), r.lastIndex > 0 && (!r.multiline || r.multiline && NY(s, r.lastIndex - 1) !== `
`) && (U = "(?: " + U + ")", H = " " + H, I++), u = new RegExp("^(?:" + U + ")", x)), Kd && (u = new RegExp("^" + U + "$(?!\\s)", x)), Hd && (f = r.lastIndex), h = Ls(rl, P ? u : r, H), P ? h ? (h.input = Vf(h.input, I), h[0] = Vf(h[0], I), h.index = r.lastIndex, r.lastIndex += h[0].length) : r.lastIndex = 0 : Hd && h && (r.lastIndex = r.global ? h.index + h[0].length : f), Kd && h && h.length > 1 && Ls(wY, h[0], u, function() {
                for (g = 1; g < arguments.length - 2; g++) arguments[g] === void 0 && (h[g] = void 0)
            }), h && C)
            for (h.groups = _ = AY(null), g = 0; g < C.length; g++) b = C[g], _[b[0]] = h[b[1]];
        return h
    });
    var Sp = jd,
        DY = yO,
        W_ = Sp;
    DY({
        target: "RegExp",
        proto: !0,
        forced: /./.exec !== W_
    }, {
        exec: W_
    });
    var MY = up,
        wO = Function.prototype,
        j_ = wO.apply,
        H_ = wO.call,
        kY = typeof Reflect == "object" && Reflect.apply || (MY ? H_.bind(j_) : function() {
            return H_.apply(j_, arguments)
        }),
        K_ = fr,
        V_ = gO,
        xY = Sp,
        Y_ = kr,
        NO = os,
        UY = pp,
        FY = NO("species"),
        Yf = RegExp.prototype,
        BY = function(e, t, r, n) {
            var s = NO(e),
                o = !Y_(function() {
                    var h = {};
                    return h[s] = function() {
                        return 7
                    }, "" [e](h) != 7
                }),
                c = o && !Y_(function() {
                    var h = !1,
                        g = /a/;
                    return e === "split" && (g = {}, g.constructor = {}, g.constructor[FY] = function() {
                        return g
                    }, g.flags = "", g[s] = /./ [s]), g.exec = function() {
                        return h = !0, null
                    }, g[s](""), !h
                });
            if (!o || !c || r) {
                var u = K_(/./ [s]),
                    f = t(s, "" [e], function(h, g, _, b, C) {
                        var P = K_(h),
                            x = g.exec;
                        return x === xY || x === Yf.exec ? o && !C ? {
                            done: !0,
                            value: u(g, _, b)
                        } : {
                            done: !0,
                            value: P(_, g, b)
                        } : {
                            done: !1
                        }
                    });
                V_(String.prototype, e, f[0]), V_(Yf, s, f[1])
            }
            n && UY(Yf[s], "sham", !0)
        },
        Op = fr,
        GY = Ul,
        WY = Fl,
        jY = mo,
        HY = Op("".charAt),
        q_ = Op("".charCodeAt),
        KY = Op("".slice),
        z_ = function(e) {
            return function(t, r) {
                var n = WY(jY(t)),
                    s = GY(r),
                    o = n.length,
                    c, u;
                return s < 0 || s >= o ? e ? "" : void 0 : (c = q_(n, s), c < 55296 || c > 56319 || s + 1 === o || (u = q_(n, s + 1)) < 56320 || u > 57343 ? e ? HY(n, s) : c : e ? KY(n, s, s + 2) : (c - 55296 << 10) + (u - 56320) + 65536)
            }
        },
        VY = {
            codeAt: z_(!1),
            charAt: z_(!0)
        },
        YY = VY.charAt,
        qY = function(e, t, r) {
            return t + (r ? YY(e, t).length : 1)
        },
        X_ = Si,
        zY = cs,
        XY = Ar,
        JY = Dl,
        ZY = Sp,
        QY = TypeError,
        eq = function(e, t) {
            var r = e.exec;
            if (XY(r)) {
                var n = X_(r, e, t);
                return n !== null && zY(n), n
            }
            if (JY(e) === "RegExp") return X_(ZY, e, t);
            throw QY("RegExp#exec called on incompatible receiver")
        },
        tq = kY,
        J_ = Si,
        Gl = fr,
        rq = BY,
        nq = kr,
        iq = cs,
        sq = Ar,
        aq = Ul,
        oq = vO,
        Is = Fl,
        cq = mo,
        lq = qY,
        uq = fp,
        fq = SO,
        dq = eq,
        hq = os,
        Vd = hq("replace"),
        pq = Math.max,
        gq = Math.min,
        mq = Gl([].concat),
        qf = Gl([].push),
        Z_ = Gl("".indexOf),
        Q_ = Gl("".slice),
        vq = function(e) {
            return e === void 0 ? e : String(e)
        },
        Eq = function() {
            return "a".replace(/./, "$0") === "$0"
        }(),
        ey = function() {
            return /./ [Vd] ? /./ [Vd]("a", "$0") === "" : !1
        }(),
        _q = !nq(function() {
            var e = /./;
            return e.exec = function() {
                var t = [];
                return t.groups = {
                    a: "7"
                }, t
            }, "".replace(e, "$<a>") !== "7"
        });
    rq("replace", function(e, t, r) {
        var n = ey ? "$" : "$0";
        return [function(o, c) {
            var u = cq(this),
                f = o == null ? void 0 : uq(o, Vd);
            return f ? J_(f, o, u, c) : J_(t, Is(u), o, c)
        }, function(s, o) {
            var c = iq(this),
                u = Is(s);
            if (typeof o == "string" && Z_(o, n) === -1 && Z_(o, "$<") === -1) {
                var f = r(t, c, u, o);
                if (f.done) return f.value
            }
            var h = sq(o);
            h || (o = Is(o));
            var g = c.global;
            if (g) {
                var _ = c.unicode;
                c.lastIndex = 0
            }
            for (var b = [];;) {
                var C = dq(c, u);
                if (C === null || (qf(b, C), !g)) break;
                var P = Is(C[0]);
                P === "" && (c.lastIndex = lq(u, oq(c.lastIndex), _))
            }
            for (var x = "", U = 0, I = 0; I < b.length; I++) {
                C = b[I];
                for (var H = Is(C[0]), Y = pq(gq(aq(C.index), u.length), 0), W = [], G = 1; G < C.length; G++) qf(W, vq(C[G]));
                var z = C.groups;
                if (h) {
                    var ae = mq([H], W, Y, u);
                    z !== void 0 && qf(ae, z);
                    var ce = Is(tq(o, void 0, ae))
                } else ce = fq(H, u, Y, W, z, o);
                Y >= U && (x += Q_(u, U, Y) + ce, U = Y + H.length)
            }
            return x + Q_(u, U)
        }]
    }, !_q || !Eq || ey);
    var yq = Mr,
        bq = fr,
        Tq = function(e, t) {
            return bq(yq[e].prototype[t])
        },
        Sq = Tq,
        Oq = Sq("String", "replaceAll"),
        Aq = Oq,
        Iq = Aq,
        Rq = Iq,
        Cq = Rq,
        wq = Cq,
        Nq = wq;
    (function(e) {
        e.exports = Nq
    })(jK);
    tt({
        props: {
            autosize: Boolean,
            modelValue: String,
            sanitizers: Array
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
            this.autosize && WK(this.$refs.textarea)
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
`, ""), this.sanitizers && (t.value = GS.withTypes(t.value, [...this.sanitizers])), t.value.length > r) {
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
    tt({
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
            const e = pi();
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
    var Wi = {},
        Wl = {},
        LO = {},
        jl = {},
        Ap = {};
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
    })(Ap);
    Object.defineProperty(jl, "__esModule", {
        value: !0
    });
    jl.Tokenizer = void 0;
    var ti = Ap,
        Lq = function() {
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
                        g = !0;
                    !h && !o ? f.convertToTextToken() : o ? f.type === ti.Token.Type.endTag && f.content === c ? (o = !1, s.push(e.createTextToken(u))) : (f.convertToTextToken(), u += f.content, g = !1) : h.noNesting && f.type === ti.Token.Type.startTag && (o = !0, c = f.content, u = ""), g && s.push(f)
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
    jl.Tokenizer = Lq;
    (function(e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.ParseTree = void 0;
        var t = jl,
            r = Ap,
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
                        var g = f.content,
                            h = new s({
                                type: s.Type.tag,
                                content: g,
                                attributes: f.attributes
                            }),
                            _ = s.buildTreeFromTokens(h, c, g);
                        if (!_) return null;
                        o.subTrees.push(_)
                    }
                    if (f.type === r.Token.Type.endTag) {
                        var g = f.content;
                        return g === u ? o : null
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
    })(LO);
    var _o = {};
    Object.defineProperty(_o, "__esModule", {
        value: !0
    });
    _o.Tag = void 0;
    var $q = function() {
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
    _o.Tag = $q;
    Object.defineProperty(Wl, "__esModule", {
        value: !0
    });
    Wl.BBCodeParser = void 0;
    var ty = LO,
        ry = _o,
        Pq = function() {
            function e(t, r) {
                this.options = r, this.escapeHTML = !1, this.tags = t, r && (this.escapeHTML = r.escapeHTML)
            }
            return Object.defineProperty(e, "defaultTags", {
                get: function() {
                    return {
                        b: ry.Tag.create("b"),
                        i: ry.Tag.create("i")
                    }
                },
                enumerable: !1,
                configurable: !0
            }), e.prototype.parse = function(t, r, n, s) {
                r === void 0 && (r = !1), n === void 0 && (n = !0), s === void 0 && (s = !0);
                var o = ty.ParseTree.buildTree(t, this.tags);
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
                    if (f.type === ty.ParseTree.Type.text) {
                        var g = f.content;
                        n && (g = o.escapeHTML ? e.escapeHTML(g) : g), r && !u && (g = g.replace(/(\r\n|\n|\r)/gm, "<br>"), u = !1), c += g
                    } else {
                        var _ = o.tags[f.content],
                            b = o.treeToHtml(f.subTrees, _.insertLineBreaks, n, s);
                        s ? c += b : c += _.markupGenerator(_, b, (h = f.attributes) !== null && h !== void 0 ? h : {}), u = _.suppressLineBreaks
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
    Wl.BBCodeParser = Pq;
    (function(e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.Tag = e.BBCodeParser = void 0;
        var t = Wl;
        Object.defineProperty(e, "BBCodeParser", {
            enumerable: !0,
            get: function() {
                return t.BBCodeParser
            }
        });
        var r = _o;
        Object.defineProperty(e, "Tag", {
            enumerable: !0,
            get: function() {
                return r.Tag
            }
        })
    })(Wi);
    const Dq = {
        install: e => {
            const t = {
                section: Wi.Tag.create("section", (o, c, {
                    section: u
                }) => `<div ${u?`class="section ${u}"`:'class="section"'}>${c}</div>`)
            };
            ["b", "bold", "B"].forEach(o => {
                t[o] = Wi.Tag.create(o, (c, u) => `<strong>${u}</strong>`)
            }), ["i", "italic", "I"].forEach(o => {
                t[o] = Wi.Tag.create(o, (c, u) => `<em>${u}</em>`)
            });
            const s = new Wi.BBCodeParser(t);
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
                            s.addTag(o, Wi.Tag.create(o, c));
                            return
                        }
                        s.addTag(o, Wi.Tag.create(o, c.generator, c.options))
                    })
                }
            }), e.config.globalProperties.$bb = o => (typeof o != "string" && console.warn(`[BBCodePlugin] Received unexpected ${typeof o} with value ${o};converting to string before parsing.`), s.parse(String(o)))
        }
    };
    var Mq = {
        exports: {}
    };
    (function(e) {
        (function(t, r) {
            var n = t.KonamiCode,
                s = t.KonamiCode = r;
            s.noConflict = function() {
                return t.KonamiCode = n, s
            }, e.exports && (e.exports = r)
        })(Mt, function t(r) {
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
                    g = c > u ? f : h;
                g = s.tap === !0 ? "tp" : g, g === s.konamiCodeGesture.substr(0, 2) ? s.konamiCodeGesture = s.konamiCodeGesture.substr(2, s.konamiCodeGesture.length - 2) : s.konamiCodeGesture = s.originalCodeGesture, s.konamiCodeGesture.length === 0 && (s.konamiCodeGesture = s.originalCodeGesture, s.afterCodeSequenceCallback(n))
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
    })(Mq);
    tt({
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
    });

    function kq(e, t) {
        for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1;);
        return e
    }
    var xq = kq,
        Uq = ET,
        Fq = Uq(Object.keys, Object),
        Bq = Fq,
        Gq = Gh,
        Wq = Bq,
        jq = Object.prototype,
        Hq = jq.hasOwnProperty;

    function Kq(e) {
        if (!Gq(e)) return Wq(e);
        var t = [];
        for (var r in Object(e)) Hq.call(e, r) && r != "constructor" && t.push(r);
        return t
    }
    var Vq = Kq,
        Yq = IT,
        qq = Vq,
        zq = Nl;

    function Xq(e) {
        return zq(e) ? Yq(e) : qq(e)
    }
    var Hl = Xq,
        Jq = fo,
        Zq = Hl;

    function Qq(e, t) {
        return e && Jq(t, Zq(t), e)
    }
    var e9 = Qq,
        t9 = fo,
        r9 = ho;

    function n9(e, t) {
        return e && t9(t, r9(t), e)
    }
    var i9 = n9;

    function s9(e, t) {
        for (var r = -1, n = e == null ? 0 : e.length, s = 0, o = []; ++r < n;) {
            var c = e[r];
            t(c, r, e) && (o[s++] = c)
        }
        return o
    }
    var a9 = s9;

    function o9() {
        return []
    }
    var $O = o9,
        c9 = a9,
        l9 = $O,
        u9 = Object.prototype,
        f9 = u9.propertyIsEnumerable,
        ny = Object.getOwnPropertySymbols,
        d9 = ny ? function(e) {
            return e == null ? [] : (e = Object(e), c9(ny(e), function(t) {
                return f9.call(e, t)
            }))
        } : l9,
        Ip = d9,
        h9 = fo,
        p9 = Ip;

    function g9(e, t) {
        return h9(e, p9(e), t)
    }
    var m9 = g9;

    function v9(e, t) {
        for (var r = -1, n = t.length, s = e.length; ++r < n;) e[s + r] = t[r];
        return e
    }
    var PO = v9,
        E9 = PO,
        _9 = Bh,
        y9 = Ip,
        b9 = $O,
        T9 = Object.getOwnPropertySymbols,
        S9 = T9 ? function(e) {
            for (var t = []; e;) E9(t, y9(e)), e = _9(e);
            return t
        } : b9,
        DO = S9,
        O9 = fo,
        A9 = DO;

    function I9(e, t) {
        return O9(e, A9(e), t)
    }
    var R9 = I9,
        C9 = PO,
        w9 = yi;

    function N9(e, t, r) {
        var n = t(e);
        return w9(e) ? n : C9(n, r(e))
    }
    var MO = N9,
        L9 = MO,
        $9 = Ip,
        P9 = Hl;

    function D9(e) {
        return L9(e, P9, $9)
    }
    var M9 = D9,
        k9 = MO,
        x9 = DO,
        U9 = ho;

    function F9(e) {
        return k9(e, U9, x9)
    }
    var B9 = F9,
        G9 = as,
        W9 = fn,
        j9 = G9(W9, "DataView"),
        H9 = j9,
        K9 = as,
        V9 = fn,
        Y9 = K9(V9, "Promise"),
        q9 = Y9,
        z9 = as,
        X9 = fn,
        J9 = z9(X9, "Set"),
        Z9 = J9,
        Q9 = as,
        ez = fn,
        tz = Q9(ez, "WeakMap"),
        rz = tz,
        Yd = H9,
        qd = xh,
        zd = q9,
        Xd = Z9,
        Jd = rz,
        kO = ia,
        ua = fT,
        iy = "[object Map]",
        nz = "[object Object]",
        sy = "[object Promise]",
        ay = "[object Set]",
        oy = "[object WeakMap]",
        cy = "[object DataView]",
        iz = ua(Yd),
        sz = ua(qd),
        az = ua(zd),
        oz = ua(Xd),
        cz = ua(Jd),
        ji = kO;
    (Yd && ji(new Yd(new ArrayBuffer(1))) != cy || qd && ji(new qd) != iy || zd && ji(zd.resolve()) != sy || Xd && ji(new Xd) != ay || Jd && ji(new Jd) != oy) && (ji = function(e) {
        var t = kO(e),
            r = t == nz ? e.constructor : void 0,
            n = r ? ua(r) : "";
        if (n) switch (n) {
            case iz:
                return cy;
            case sz:
                return iy;
            case az:
                return sy;
            case oz:
                return ay;
            case cz:
                return oy
        }
        return t
    });
    var Rp = ji,
        lz = Object.prototype,
        uz = lz.hasOwnProperty;

    function fz(e) {
        var t = e.length,
            r = new e.constructor(t);
        return t && typeof e[0] == "string" && uz.call(e, "index") && (r.index = e.index, r.input = e.input), r
    }
    var dz = fz,
        hz = Fh;

    function pz(e, t) {
        var r = t ? hz(e.buffer) : e.buffer;
        return new e.constructor(r, e.byteOffset, e.byteLength)
    }
    var gz = pz,
        mz = /\w*$/;

    function vz(e) {
        var t = new e.constructor(e.source, mz.exec(e));
        return t.lastIndex = e.lastIndex, t
    }
    var Ez = vz,
        ly = Rl,
        uy = ly ? ly.prototype : void 0,
        fy = uy ? uy.valueOf : void 0;

    function _z(e) {
        return fy ? Object(fy.call(e)) : {}
    }
    var yz = _z,
        bz = Fh,
        Tz = gz,
        Sz = Ez,
        Oz = yz,
        Az = mT,
        Iz = "[object Boolean]",
        Rz = "[object Date]",
        Cz = "[object Map]",
        wz = "[object Number]",
        Nz = "[object RegExp]",
        Lz = "[object Set]",
        $z = "[object String]",
        Pz = "[object Symbol]",
        Dz = "[object ArrayBuffer]",
        Mz = "[object DataView]",
        kz = "[object Float32Array]",
        xz = "[object Float64Array]",
        Uz = "[object Int8Array]",
        Fz = "[object Int16Array]",
        Bz = "[object Int32Array]",
        Gz = "[object Uint8Array]",
        Wz = "[object Uint8ClampedArray]",
        jz = "[object Uint16Array]",
        Hz = "[object Uint32Array]";

    function Kz(e, t, r) {
        var n = e.constructor;
        switch (t) {
            case Dz:
                return bz(e);
            case Iz:
            case Rz:
                return new n(+e);
            case Mz:
                return Tz(e, r);
            case kz:
            case xz:
            case Uz:
            case Fz:
            case Bz:
            case Gz:
            case Wz:
            case jz:
            case Hz:
                return Az(e, r);
            case Cz:
                return new n;
            case wz:
            case $z:
                return new n(e);
            case Nz:
                return Sz(e);
            case Lz:
                return new n;
            case Pz:
                return Oz(e)
        }
    }
    var Vz = Kz,
        Yz = Rp,
        qz = _i,
        zz = "[object Map]";

    function Xz(e) {
        return qz(e) && Yz(e) == zz
    }
    var Jz = Xz,
        Zz = Jz,
        Qz = Wh,
        dy = to.exports,
        hy = dy && dy.isMap,
        eX = hy ? Qz(hy) : Zz,
        tX = eX,
        rX = Rp,
        nX = _i,
        iX = "[object Set]";

    function sX(e) {
        return nX(e) && rX(e) == iX
    }
    var aX = sX,
        oX = aX,
        cX = Wh,
        py = to.exports,
        gy = py && py.isSet,
        lX = gy ? cX(gy) : oX,
        uX = lX,
        fX = hT,
        dX = xq,
        hX = jh,
        pX = e9,
        gX = i9,
        mX = qc.exports,
        vX = vT,
        EX = m9,
        _X = R9,
        yX = M9,
        bX = B9,
        TX = Rp,
        SX = dz,
        OX = Vz,
        AX = _T,
        IX = yi,
        RX = eo.exports,
        CX = tX,
        wX = dn,
        NX = uX,
        LX = Hl,
        $X = ho,
        PX = 1,
        DX = 2,
        MX = 4,
        xO = "[object Arguments]",
        kX = "[object Array]",
        xX = "[object Boolean]",
        UX = "[object Date]",
        FX = "[object Error]",
        UO = "[object Function]",
        BX = "[object GeneratorFunction]",
        GX = "[object Map]",
        WX = "[object Number]",
        FO = "[object Object]",
        jX = "[object RegExp]",
        HX = "[object Set]",
        KX = "[object String]",
        VX = "[object Symbol]",
        YX = "[object WeakMap]",
        qX = "[object ArrayBuffer]",
        zX = "[object DataView]",
        XX = "[object Float32Array]",
        JX = "[object Float64Array]",
        ZX = "[object Int8Array]",
        QX = "[object Int16Array]",
        eJ = "[object Int32Array]",
        tJ = "[object Uint8Array]",
        rJ = "[object Uint8ClampedArray]",
        nJ = "[object Uint16Array]",
        iJ = "[object Uint32Array]",
        Et = {};
    Et[xO] = Et[kX] = Et[qX] = Et[zX] = Et[xX] = Et[UX] = Et[XX] = Et[JX] = Et[ZX] = Et[QX] = Et[eJ] = Et[GX] = Et[WX] = Et[FO] = Et[jX] = Et[HX] = Et[KX] = Et[VX] = Et[tJ] = Et[rJ] = Et[nJ] = Et[iJ] = !0;
    Et[FX] = Et[UO] = Et[YX] = !1;

    function Bc(e, t, r, n, s, o) {
        var c, u = t & PX,
            f = t & DX,
            h = t & MX;
        if (r && (c = s ? r(e, n, s, o) : r(e)), c !== void 0) return c;
        if (!wX(e)) return e;
        var g = IX(e);
        if (g) {
            if (c = SX(e), !u) return vX(e, c)
        } else {
            var _ = TX(e),
                b = _ == UO || _ == BX;
            if (RX(e)) return mX(e, u);
            if (_ == FO || _ == xO || b && !s) {
                if (c = f || b ? {} : AX(e), !u) return f ? _X(e, gX(c, e)) : EX(e, pX(c, e))
            } else {
                if (!Et[_]) return s ? e : {};
                c = OX(e, _, u)
            }
        }
        o || (o = new fX);
        var C = o.get(e);
        if (C) return C;
        o.set(e, c), NX(e) ? e.forEach(function(U) {
            c.add(Bc(U, t, r, U, e, o))
        }) : CX(e) && e.forEach(function(U, I) {
            c.set(I, Bc(U, t, r, I, e, o))
        });
        var P = h ? f ? bX : yX : f ? $X : LX,
            x = g ? void 0 : P(e);
        return dX(x || e, function(U, I) {
            x && (I = U, U = e[I]), hX(c, I, Bc(U, t, r, I, e, o))
        }), c
    }
    var sJ = Bc,
        aJ = sJ,
        oJ = 1,
        cJ = 4;

    function lJ(e) {
        return aJ(e, oJ | cJ)
    }
    var BO = lJ;
    const uJ = tt({
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
                !e || (this.values = BO(this.$ecastValues), this.content = (n = u_.getPromptGuess(this.values, e)) != null ? n : null)
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
                    !this.$debugRecorder || (this.screen === "debug" && (await this.$debugRecorder.send(this.message), this.$emit("resolve")), this.screen === "feedback" && (await u_.send({
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
        GO = "main/@moderator/assets/ad9172fc.png",
        WO = "main/@moderator/assets/dc131b16.png",
        fJ = "main/@moderator/assets/38715b18.png",
        dJ = "main/@moderator/assets/b0d7c822.png",
        hJ = "main/@moderator/assets/06150f24.png",
        Zr = e => (ta("data-v-c4b66a33"), e = e(), ra(), e),
        pJ = {
            class: "jbg"
        },
        gJ = {
            key: 0,
            class: "options"
        },
        mJ = Zr(() => X("img", {
            src: GO,
            alt: "Leave Feedback"
        }, null, -1)),
        vJ = Zr(() => X("span", null, [vr("LEAVE"), X("br"), vr("FEEDBACK")], -1)),
        EJ = [mJ, vJ],
        _J = Zr(() => X("img", {
            src: WO,
            alt: "Send Debug"
        }, null, -1)),
        yJ = Zr(() => X("span", null, [vr("SEND A"), X("br"), vr("DEBUG")], -1)),
        bJ = [_J, yJ],
        TJ = {
            key: 1,
            class: "feedback"
        },
        SJ = Zr(() => X("img", {
            class: "image",
            src: GO,
            alt: "Feedback"
        }, null, -1)),
        OJ = Zr(() => X("h3", {
            class: "text"
        }, "Send Feedback", -1)),
        AJ = Zr(() => X("p", {
            class: "cta"
        }, "CHOOSE A VIBE", -1)),
        IJ = {
            class: "buttons"
        },
        RJ = Zr(() => X("img", {
            src: fJ,
            alt: "good"
        }, null, -1)),
        CJ = [RJ],
        wJ = Zr(() => X("img", {
            src: dJ,
            alt: "good"
        }, null, -1)),
        NJ = [wJ],
        LJ = Zr(() => X("img", {
            src: hJ,
            alt: "bad"
        }, null, -1)),
        $J = [LJ],
        PJ = {
            class: "actions"
        },
        DJ = {
            key: 0,
            class: "content-guess"
        },
        MJ = vr("Feedback is about: "),
        kJ = {
            key: 2,
            class: "debug"
        },
        xJ = Zr(() => X("img", {
            class: "image",
            src: WO,
            alt: "Debug"
        }, null, -1)),
        UJ = Zr(() => X("h3", {
            class: "text"
        }, "What is Happening?", -1)),
        FJ = {
            class: "actions"
        };

    function BJ(e, t, r, n, s, o) {
        return ne(), oe("div", pJ, [e.screen === "options" ? (ne(), oe("div", gJ, [X("button", {
            class: "feedback-button",
            onClick: t[0] || (t[0] = (...c) => e.onFeedbackClick && e.onFeedbackClick(...c))
        }, EJ), X("button", {
            onClick: t[1] || (t[1] = (...c) => e.onDebugClick && e.onDebugClick(...c))
        }, bJ)])) : e.screen === "feedback" ? (ne(), oe("div", TJ, [SJ, OJ, X("div", {
            class: Ge(["vibes", {
                "has-selected": e.vibe
            }])
        }, [AJ, X("div", IJ, [X("button", {
            class: Ge({
                selected: e.vibe === "good"
            }),
            onClick: t[2] || (t[2] = c => e.onVibeClick("good"))
        }, CJ, 2), X("button", {
            class: Ge({
                selected: e.vibe === "meh"
            }),
            onClick: t[3] || (t[3] = c => e.onVibeClick("meh"))
        }, NJ, 2), X("button", {
            class: Ge({
                selected: e.vibe === "bad"
            }),
            onClick: t[4] || (t[4] = c => e.onVibeClick("bad"))
        }, $J, 2)])], 2), X("div", PJ, [e.content ? (ne(), oe("div", DJ, [Ke(X("input", {
            "onUpdate:modelValue": t[5] || (t[5] = c => e.isContent = c),
            type: "checkbox"
        }, null, 512), [
            [OP, e.isContent]
        ]), X("span", null, [MJ, X("em", null, Xe(e.content), 1)])])) : We("", !0), Ke(X("textarea", {
            "onUpdate:modelValue": t[6] || (t[6] = c => e.message = c),
            rows: "3",
            placeholder: "(optional) more details",
            "aria-label": "Details"
        }, null, 512), [
            [qv, e.message]
        ]), X("button", {
            onClick: t[7] || (t[7] = Jr((...c) => e.onSubmitClick && e.onSubmitClick(...c), ["prevent"]))
        }, Xe(e.$t("ACTION.SUBMIT")), 1)])])) : e.screen === "debug" ? (ne(), oe("div", kJ, [xJ, UJ, X("div", FJ, [Ke(X("textarea", {
            "onUpdate:modelValue": t[8] || (t[8] = c => e.message = c),
            rows: "3",
            placeholder: "Enter details",
            "aria-label": "Details"
        }, null, 512), [
            [qv, e.message]
        ]), X("button", {
            onClick: t[9] || (t[9] = Jr((...c) => e.onSubmitClick && e.onSubmitClick(...c), ["prevent"]))
        }, Xe(e.$t("ACTION.OK")), 1)])])) : We("", !0)])
    }
    const GJ = mt(uJ, [
        ["render", BJ],
        ["__scopeId", "data-v-c4b66a33"]
    ]);
    tt({
        methods: {
            onFeedbackClick() {
                this.$showModal(GJ)
            }
        }
    });
    var WJ = fn,
        jJ = function() {
            return WJ.Date.now()
        },
        HJ = jJ,
        KJ = /\s/;

    function VJ(e) {
        for (var t = e.length; t-- && KJ.test(e.charAt(t)););
        return t
    }
    var YJ = VJ,
        qJ = YJ,
        zJ = /^\s+/;

    function XJ(e) {
        return e && e.slice(0, qJ(e) + 1).replace(zJ, "")
    }
    var JJ = XJ,
        ZJ = ia,
        QJ = _i,
        eZ = "[object Symbol]";

    function tZ(e) {
        return typeof e == "symbol" || QJ(e) && ZJ(e) == eZ
    }
    var Kl = tZ,
        rZ = JJ,
        my = dn,
        nZ = Kl,
        vy = 0 / 0,
        iZ = /^[-+]0x[0-9a-f]+$/i,
        sZ = /^0b[01]+$/i,
        aZ = /^0o[0-7]+$/i,
        oZ = parseInt;

    function cZ(e) {
        if (typeof e == "number") return e;
        if (nZ(e)) return vy;
        if (my(e)) {
            var t = typeof e.valueOf == "function" ? e.valueOf() : e;
            e = my(t) ? t + "" : t
        }
        if (typeof e != "string") return e === 0 ? e : +e;
        e = rZ(e);
        var r = sZ.test(e);
        return r || aZ.test(e) ? oZ(e.slice(2), r ? 2 : 8) : iZ.test(e) ? vy : +e
    }
    var lZ = cZ,
        uZ = dn,
        zf = HJ,
        Ey = lZ,
        fZ = "Expected a function",
        dZ = Math.max,
        hZ = Math.min;

    function pZ(e, t, r) {
        var n, s, o, c, u, f, h = 0,
            g = !1,
            _ = !1,
            b = !0;
        if (typeof e != "function") throw new TypeError(fZ);
        t = Ey(t) || 0, uZ(r) && (g = !!r.leading, _ = "maxWait" in r, o = _ ? dZ(Ey(r.maxWait) || 0, t) : o, b = "trailing" in r ? !!r.trailing : b);

        function C(z) {
            var ae = n,
                ce = s;
            return n = s = void 0, h = z, c = e.apply(ce, ae), c
        }

        function P(z) {
            return h = z, u = setTimeout(I, t), g ? C(z) : c
        }

        function x(z) {
            var ae = z - f,
                ce = z - h,
                ue = t - ae;
            return _ ? hZ(ue, o - ce) : ue
        }

        function U(z) {
            var ae = z - f,
                ce = z - h;
            return f === void 0 || ae >= t || ae < 0 || _ && ce >= o
        }

        function I() {
            var z = zf();
            if (U(z)) return H(z);
            u = setTimeout(I, x(z))
        }

        function H(z) {
            return u = void 0, b && n ? C(z) : (n = s = void 0, c)
        }

        function Y() {
            u !== void 0 && clearTimeout(u), h = 0, n = f = s = u = void 0
        }

        function W() {
            return u === void 0 ? c : H(zf())
        }

        function G() {
            var z = zf(),
                ae = U(z);
            if (n = arguments, s = this, f = z, ae) {
                if (u === void 0) return P(f);
                if (_) return clearTimeout(u), u = setTimeout(I, t), C(f)
            }
            return u === void 0 && (u = setTimeout(I, t)), c
        }
        return G.cancel = Y, G.flush = W, G
    }
    var gZ = pZ,
        mZ = yi,
        vZ = Kl,
        EZ = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        _Z = /^\w*$/;

    function yZ(e, t) {
        if (mZ(e)) return !1;
        var r = typeof e;
        return r == "number" || r == "symbol" || r == "boolean" || e == null || vZ(e) ? !0 : _Z.test(e) || !EZ.test(e) || t != null && e in Object(t)
    }
    var bZ = yZ,
        jO = dT,
        TZ = "Expected a function";

    function Cp(e, t) {
        if (typeof e != "function" || t != null && typeof t != "function") throw new TypeError(TZ);
        var r = function() {
            var n = arguments,
                s = t ? t.apply(this, n) : n[0],
                o = r.cache;
            if (o.has(s)) return o.get(s);
            var c = e.apply(this, n);
            return r.cache = o.set(s, c) || o, c
        };
        return r.cache = new(Cp.Cache || jO), r
    }
    Cp.Cache = jO;
    var SZ = Cp,
        OZ = SZ,
        AZ = 500;

    function IZ(e) {
        var t = OZ(e, function(n) {
                return r.size === AZ && r.clear(), n
            }),
            r = t.cache;
        return t
    }
    var RZ = IZ,
        CZ = RZ,
        wZ = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        NZ = /\\(\\)?/g,
        LZ = CZ(function(e) {
            var t = [];
            return e.charCodeAt(0) === 46 && t.push(""), e.replace(wZ, function(r, n, s, o) {
                t.push(s ? o.replace(NZ, "$1") : n || r)
            }), t
        }),
        $Z = LZ;

    function PZ(e, t) {
        for (var r = -1, n = e == null ? 0 : e.length, s = Array(n); ++r < n;) s[r] = t(e[r], r, e);
        return s
    }
    var HO = PZ,
        _y = Rl,
        DZ = HO,
        MZ = yi,
        kZ = Kl,
        xZ = 1 / 0,
        yy = _y ? _y.prototype : void 0,
        by = yy ? yy.toString : void 0;

    function KO(e) {
        if (typeof e == "string") return e;
        if (MZ(e)) return DZ(e, KO) + "";
        if (kZ(e)) return by ? by.call(e) : "";
        var t = e + "";
        return t == "0" && 1 / e == -xZ ? "-0" : t
    }
    var UZ = KO,
        FZ = UZ;

    function BZ(e) {
        return e == null ? "" : FZ(e)
    }
    var GZ = BZ,
        WZ = yi,
        jZ = bZ,
        HZ = $Z,
        KZ = GZ;

    function VZ(e, t) {
        return WZ(e) ? e : jZ(e, t) ? [e] : HZ(KZ(e))
    }
    var VO = VZ,
        YZ = Kl,
        qZ = 1 / 0;

    function zZ(e) {
        if (typeof e == "string" || YZ(e)) return e;
        var t = e + "";
        return t == "0" && 1 / e == -qZ ? "-0" : t
    }
    var YO = zZ,
        XZ = jh,
        JZ = VO,
        ZZ = Hh,
        Ty = dn,
        QZ = YO;

    function eQ(e, t, r, n) {
        if (!Ty(e)) return e;
        t = JZ(t, e);
        for (var s = -1, o = t.length, c = o - 1, u = e; u != null && ++s < o;) {
            var f = QZ(t[s]),
                h = r;
            if (f === "__proto__" || f === "constructor" || f === "prototype") return e;
            if (s != c) {
                var g = u[f];
                h = n ? n(g, f, u) : void 0, h === void 0 && (h = Ty(g) ? g : ZZ(t[s + 1]) ? [] : {})
            }
            XZ(u, f, h), u = u[f]
        }
        return e
    }
    var tQ = eQ,
        rQ = tQ;

    function nQ(e, t, r) {
        return e == null ? e : rQ(e, t, r)
    }
    var iQ = nQ;
    class sQ {
        constructor() {
            ye(this, "wsClient");
            ye(this, "keyMap");
            ye(this, "providerMap");
            ye(this, "mappedValues", Gn({}));
            ye(this, "shouldParseBlobcast", !1);
            ye(this, "pausedKeys", null);
            ye(this, "keyMapKeys");
            ye(this, "providerMapKeys");
            ye(this, "hotValues");
            ye(this, "newValues");
            ye(this, "pause", (t = []) => {
                this.pausedKeys = t
            });
            ye(this, "resume", () => {
                this.pausedKeys = null, this.sync()
            });
            ye(this, "sync", gZ(() => {
                !this.wsClient || !this.keyMap && !this.providerMap || this.pausedKeys && !this.pausedKeys.length || (this.hotValues = {}, this.newValues = {}, this.normalize().mapKeysToValues().mapProvidersToValues().deleteDropped().hydrateRefs().syncExisting(), delete this.hotValues, delete this.newValues)
            }, 50))
        }
        setWSClient(t) {
            this.wsClient = t, this.setupWatcher()
        }
        setupWatcher() {
            this.wsClient.entities = Gn(this.wsClient.entities), Zi(this.wsClient.entities, (t, r) => {
                this.sync()
            })
        }
        valueForEntity(t) {
            return t instanceof Fn.ArtifactEntity || t instanceof Fn.DoodleEntity ? t : t instanceof Fn.ObjectEntity ? BO(t.val) : t instanceof Fn.TextEntity ? t.text : t instanceof Fn.NumberEntity ? t.val : null
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
                    iQ(this.newValues, n, u)
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
    const Vr = new sQ,
        aQ = {
            install: (e, t) => {
                e.config.globalProperties.$setupEcast = r => {
                    Vr.setWSClient(r.wsClient), r.wsClient.on("artifact", n => ro.add(n)), r.wsClient.on("connection", n => {
                        n.status === "connected" && Vr.setupWatcher()
                    }), Vr.sync(), e.config.globalProperties.$ecast = Vr.wsClient, e.config.globalProperties.$ecastValues = Vr.mappedValues, e.config.globalProperties.$ecastRoom = r.room, e.config.globalProperties.$ecastWelcome = r.welcome, e.config.globalProperties.$syncEcast = Vr.sync, e.config.globalProperties.$pauseEcastUpdates = Vr.pause, e.config.globalProperties.$resumeEcastUpdates = Vr.resume, e.mixin({
                        beforeCreate() {
                            this.$options.ecastKeys && Vr.addKeys(this.$options.ecastKeys), this.$options.ecastProviders && Vr.addProviders(this.$options.ecastProviders)
                        },
                        beforeDestroy() {
                            this.$options.ecastKeys && Vr.purgeKeys(this.$options.ecastKeys), this.$options.ecastProviders && Vr.purgeProviders(this.$options.ecastProviders)
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

    function oQ() {
        return typeof __SENTRY_BROWSER_BUNDLE__ < "u" && !!__SENTRY_BROWSER_BUNDLE__
    }

    function wp() {
        return !oQ() && Object.prototype.toString.call(typeof process < "u" ? process : 0) === "[object process]"
    }

    function cQ(e, t) {
        return e.require(t)
    }
    var lQ = {};

    function Zt() {
        return wp() ? global : typeof window < "u" ? window : typeof self < "u" ? self : lQ
    }

    function Np(e, t, r) {
        var n = r || Zt(),
            s = n.__SENTRY__ = n.__SENTRY__ || {},
            o = s[e] || (s[e] = t());
        return o
    }
    var qO = Object.prototype.toString;

    function zO(e) {
        switch (qO.call(e)) {
            case "[object Error]":
            case "[object Exception]":
            case "[object DOMException]":
                return !0;
            default:
                return Ai(e, Error)
        }
    }

    function fa(e, t) {
        return qO.call(e) === `[object ${t}]`
    }

    function XO(e) {
        return fa(e, "ErrorEvent")
    }

    function Sy(e) {
        return fa(e, "DOMError")
    }

    function uQ(e) {
        return fa(e, "DOMException")
    }

    function Js(e) {
        return fa(e, "String")
    }

    function fQ(e) {
        return e === null || typeof e != "object" && typeof e != "function"
    }

    function Vl(e) {
        return fa(e, "Object")
    }

    function Lp(e) {
        return typeof Event < "u" && Ai(e, Event)
    }

    function dQ(e) {
        return typeof Element < "u" && Ai(e, Element)
    }

    function hQ(e) {
        return fa(e, "RegExp")
    }

    function JO(e) {
        return Boolean(e && e.then && typeof e.then == "function")
    }

    function pQ(e) {
        return Vl(e) && "nativeEvent" in e && "preventDefault" in e && "stopPropagation" in e
    }

    function gQ(e) {
        return typeof e == "number" && e !== e
    }

    function Ai(e, t) {
        try {
            return e instanceof t
        } catch {
            return !1
        }
    }

    function Zd(e, t) {
        try {
            let u = e;
            var r = 5,
                n = 80,
                s = [];
            let f = 0,
                h = 0;
            var o = " > ",
                c = o.length;
            let g;
            for (; u && f++ < r && (g = mQ(u, t), !(g === "html" || f > 1 && h + s.length * c + g.length >= n));) s.push(g), h += g.length, u = u.parentNode;
            return s.reverse().join(o)
        } catch {
            return "<unknown>"
        }
    }

    function mQ(e, t) {
        var r = e,
            n = [];
        let s, o, c, u, f;
        if (!r || !r.tagName) return "";
        n.push(r.tagName.toLowerCase());
        var h = t && t.length ? t.filter(_ => r.getAttribute(_)).map(_ => [_, r.getAttribute(_)]) : null;
        if (h && h.length) h.forEach(_ => {
            n.push(`[${_[0]}="${_[1]}"]`)
        });
        else if (r.id && n.push(`#${r.id}`), s = r.className, s && Js(s))
            for (o = s.split(/\s+/), f = 0; f < o.length; f++) n.push(`.${o[f]}`);
        var g = ["type", "name", "title", "alt"];
        for (f = 0; f < g.length; f++) c = g[f], u = r.getAttribute(c), u && n.push(`[${c}="${u}"]`);
        return n.join("")
    }

    function vQ() {
        var e = Zt();
        try {
            return e.document.location.href
        } catch {
            return ""
        }
    }
    class Ma extends Error {
        constructor(t, r = "warn") {
            super(t), this.message = t, this.name = new.target.prototype.constructor.name, Object.setPrototypeOf(this, new.target.prototype), this.logLevel = r
        }
    }
    var EQ = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/;

    function _Q(e) {
        return e === "http" || e === "https"
    }

    function yQ(e, t = !1) {
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

    function bQ(e) {
        var t = EQ.exec(e);
        if (!t) throw new Ma(`Invalid Sentry Dsn: ${e}`);
        const [r, n, s = "", o, c = "", u] = t.slice(1);
        let f = "",
            h = u;
        var g = h.split("/");
        if (g.length > 1 && (f = g.slice(0, -1).join("/"), h = g.pop()), h) {
            var _ = h.match(/^\d+/);
            _ && (h = _[0])
        }
        return ZO({
            host: o,
            pass: s,
            path: f,
            projectId: h,
            port: c,
            protocol: r,
            publicKey: n
        })
    }

    function ZO(e) {
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

    function TQ(e) {
        if (!(typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__)) return;
        const {
            port: t,
            projectId: r,
            protocol: n
        } = e;
        var s = ["protocol", "publicKey", "host", "projectId"];
        if (s.forEach(o => {
                if (!e[o]) throw new Ma(`Invalid Sentry Dsn: ${o} missing`)
            }), !r.match(/^\d+$/)) throw new Ma(`Invalid Sentry Dsn: Invalid projectId ${r}`);
        if (!_Q(n)) throw new Ma(`Invalid Sentry Dsn: Invalid protocol ${n}`);
        if (t && isNaN(parseInt(t, 10))) throw new Ma(`Invalid Sentry Dsn: Invalid port ${t}`);
        return !0
    }

    function SQ(e) {
        var t = typeof e == "string" ? bQ(e) : ZO(e);
        return TQ(t), t
    }
    var OQ = Zt(),
        AQ = "Sentry Logger ",
        nl = ["debug", "info", "warn", "error", "log", "assert", "trace"];

    function QO(e) {
        var t = Zt();
        if (!("console" in t)) return e();
        var r = t.console,
            n = {};
        nl.forEach(s => {
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

    function Oy() {
        let e = !1;
        var t = {
            enable: () => {
                e = !0
            },
            disable: () => {
                e = !1
            }
        };
        return typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__ ? nl.forEach(r => {
            t[r] = (...n) => {
                e && QO(() => {
                    OQ.console[r](`${AQ}[${r}]:`, ...n)
                })
            }
        }) : nl.forEach(r => {
            t[r] = () => {}
        }), t
    }
    let jt;
    typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__ ? jt = Np("logger", Oy) : jt = Oy();

    function Ay(e, t = 0) {
        return typeof e != "string" || t === 0 || e.length <= t ? e : `${e.substr(0,t)}...`
    }

    function Iy(e, t) {
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

    function $p(e, t) {
        return Js(e) ? hQ(t) ? t.test(e) : typeof t == "string" ? e.indexOf(t) !== -1 : !1 : !1
    }

    function lr(e, t, r) {
        if (t in e) {
            var n = e[t],
                s = r(n);
            if (typeof s == "function") try {
                tA(s, n)
            } catch {}
            e[t] = s
        }
    }

    function eA(e, t, r) {
        Object.defineProperty(e, t, {
            value: r,
            writable: !0,
            configurable: !0
        })
    }

    function tA(e, t) {
        var r = t.prototype || {};
        e.prototype = t.prototype = r, eA(e, "__sentry_original__", t)
    }

    function Pp(e) {
        return e.__sentry_original__
    }

    function rA(e) {
        if (zO(e)) return {
            message: e.message,
            name: e.name,
            stack: e.stack,
            ...Cy(e)
        };
        if (Lp(e)) {
            var t = {
                type: e.type,
                target: Ry(e.target),
                currentTarget: Ry(e.currentTarget),
                ...Cy(e)
            };
            return typeof CustomEvent < "u" && Ai(e, CustomEvent) && (t.detail = e.detail), t
        } else return e
    }

    function Ry(e) {
        try {
            return dQ(e) ? Zd(e) : Object.prototype.toString.call(e)
        } catch {
            return "<unknown>"
        }
    }

    function Cy(e) {
        if (typeof e == "object" && e !== null) {
            var t = {};
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t
        } else return {}
    }

    function IQ(e, t = 40) {
        var r = Object.keys(rA(e));
        if (r.sort(), !r.length) return "[object has no keys]";
        if (r[0].length >= t) return Ay(r[0], t);
        for (let s = r.length; s > 0; s--) {
            var n = r.slice(0, s).join(", ");
            if (!(n.length > t)) return s === r.length ? n : Ay(n, t)
        }
        return ""
    }

    function RQ(e) {
        var t = new Map;
        return Qd(e, t)
    }

    function Qd(e, t) {
        if (Vl(e)) {
            var r = t.get(e);
            if (r !== void 0) return r;
            var n = {};
            t.set(e, n);
            for (var s of Object.keys(e)) typeof e[s] < "u" && (n[s] = Qd(e[s], t));
            return n
        }
        if (Array.isArray(e)) {
            var r = t.get(e);
            if (r !== void 0) return r;
            var n = [];
            return t.set(e, n), e.forEach(u => {
                n.push(Qd(u, t))
            }), n
        }
        return e
    }
    var Xf = "<anonymous>";

    function mi(e) {
        try {
            return !e || typeof e != "function" ? Xf : e.name || Xf
        } catch {
            return Xf
        }
    }

    function CQ() {
        if (!("fetch" in Zt())) return !1;
        try {
            return new Headers, new Request(""), new Response, !0
        } catch {
            return !1
        }
    }

    function wy(e) {
        return e && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())
    }

    function wQ() {
        if (!CQ()) return !1;
        var e = Zt();
        if (wy(e.fetch)) return !0;
        let t = !1;
        var r = e.document;
        if (r && typeof r.createElement == "function") try {
            var n = r.createElement("iframe");
            n.hidden = !0, r.head.appendChild(n), n.contentWindow && n.contentWindow.fetch && (t = wy(n.contentWindow.fetch)), r.head.removeChild(n)
        } catch (s) {
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && jt.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", s)
        }
        return t
    }

    function NQ() {
        var e = Zt(),
            t = e.chrome,
            r = t && t.app && t.app.runtime,
            n = "history" in e && !!e.history.pushState && !!e.history.replaceState;
        return !r && n
    }
    var It = Zt(),
        ja = {},
        Ny = {};

    function LQ(e) {
        if (!Ny[e]) switch (Ny[e] = !0, e) {
            case "console":
                $Q();
                break;
            case "dom":
                GQ();
                break;
            case "xhr":
                kQ();
                break;
            case "fetch":
                PQ();
                break;
            case "history":
                xQ();
                break;
            case "error":
                WQ();
                break;
            case "unhandledrejection":
                jQ();
                break;
            default:
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && jt.warn("unknown instrumentation type:", e);
                return
        }
    }

    function zi(e, t) {
        ja[e] = ja[e] || [], ja[e].push(t), LQ(e)
    }

    function un(e, t) {
        if (!(!e || !ja[e]))
            for (var r of ja[e] || []) try {
                r(t)
            } catch (n) {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && jt.error(`Error while triggering instrumentation handler.
Type: ${e}
Name: ${mi(r)}
Error:`, n)
            }
    }

    function $Q() {
        "console" in It && nl.forEach(function(e) {
            e in It.console && lr(It.console, e, function(t) {
                return function(...r) {
                    un("console", {
                        args: r,
                        level: e
                    }), t && t.apply(It.console, r)
                }
            })
        })
    }

    function PQ() {
        !wQ() || lr(It, "fetch", function(e) {
            return function(...t) {
                var r = {
                    args: t,
                    fetchData: {
                        method: DQ(t),
                        url: MQ(t)
                    },
                    startTimestamp: Date.now()
                };
                return un("fetch", {
                    ...r
                }), e.apply(It, t).then(n => (un("fetch", {
                    ...r,
                    endTimestamp: Date.now(),
                    response: n
                }), n), n => {
                    throw un("fetch", {
                        ...r,
                        endTimestamp: Date.now(),
                        error: n
                    }), n
                })
            }
        })
    }

    function DQ(e = []) {
        return "Request" in It && Ai(e[0], Request) && e[0].method ? String(e[0].method).toUpperCase() : e[1] && e[1].method ? String(e[1].method).toUpperCase() : "GET"
    }

    function MQ(e = []) {
        return typeof e[0] == "string" ? e[0] : "Request" in It && Ai(e[0], Request) ? e[0].url : String(e[0])
    }

    function kQ() {
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
                            un("xhr", {
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
                    return this.__sentry_xhr__ && r[0] !== void 0 && (this.__sentry_xhr__.body = r[0]), un("xhr", {
                        args: r,
                        startTimestamp: Date.now(),
                        xhr: this
                    }), t.apply(this, r)
                }
            })
        }
    }
    let Cc;

    function xQ() {
        if (!NQ()) return;
        var e = It.onpopstate;
        It.onpopstate = function(...r) {
            var n = It.location.href,
                s = Cc;
            if (Cc = n, un("history", {
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
                    var o = Cc,
                        c = String(s);
                    Cc = c, un("history", {
                        from: o,
                        to: c
                    })
                }
                return r.apply(this, n)
            }
        }
        lr(It.history, "pushState", t), lr(It.history, "replaceState", t)
    }
    var UQ = 1e3;
    let wc, Nc;

    function FQ(e, t) {
        if (!e || e.type !== t.type) return !0;
        try {
            if (e.target !== t.target) return !0
        } catch {}
        return !1
    }

    function BQ(e) {
        if (e.type !== "keypress") return !1;
        try {
            var t = e.target;
            if (!t || !t.tagName) return !0;
            if (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable) return !1
        } catch {}
        return !0
    }

    function Ly(e, t = !1) {
        return r => {
            if (!(!r || Nc === r) && !BQ(r)) {
                var n = r.type === "keypress" ? "input" : r.type;
                wc === void 0 ? (e({
                    event: r,
                    name: n,
                    global: t
                }), Nc = r) : FQ(Nc, r) && (e({
                    event: r,
                    name: n,
                    global: t
                }), Nc = r), clearTimeout(wc), wc = It.setTimeout(() => {
                    wc = void 0
                }, UQ)
            }
        }
    }

    function GQ() {
        if ("document" in It) {
            var e = un.bind(null, "dom"),
                t = Ly(e, !0);
            It.document.addEventListener("click", t, !1), It.document.addEventListener("keypress", t, !1), ["EventTarget", "Node"].forEach(r => {
                var n = It[r] && It[r].prototype;
                !n || !n.hasOwnProperty || !n.hasOwnProperty("addEventListener") || (lr(n, "addEventListener", function(s) {
                    return function(o, c, u) {
                        if (o === "click" || o == "keypress") try {
                            var f = this,
                                h = f.__sentry_instrumentation_handlers__ = f.__sentry_instrumentation_handlers__ || {},
                                g = h[o] = h[o] || {
                                    refCount: 0
                                };
                            if (!g.handler) {
                                var _ = Ly(e);
                                g.handler = _, s.call(this, o, _, u)
                            }
                            g.refCount += 1
                        } catch {}
                        return s.call(this, o, c, u)
                    }
                }), lr(n, "removeEventListener", function(s) {
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
    let Jf = null;

    function WQ() {
        Jf = It.onerror, It.onerror = function(e, t, r, n, s) {
            return un("error", {
                column: n,
                error: s,
                line: r,
                msg: e,
                url: t
            }), Jf ? Jf.apply(this, arguments) : !1
        }
    }
    let Zf = null;

    function jQ() {
        Zf = It.onunhandledrejection, It.onunhandledrejection = function(e) {
            return un("unhandledrejection", e), Zf ? Zf.apply(this, arguments) : !0
        }
    }

    function HQ() {
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

    function Ha() {
        var e = Zt(),
            t = e.crypto || e.msCrypto;
        if (t && t.randomUUID) return t.randomUUID().replace(/-/g, "");
        var r = t && t.getRandomValues ? () => t.getRandomValues(new Uint8Array(1))[0] : () => Math.random() * 16;
        return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, n => (n ^ (r() & 15) >> n / 4).toString(16))
    }

    function nA(e) {
        return e.exception && e.exception.values ? e.exception.values[0] : void 0
    }

    function $s(e) {
        const {
            message: t,
            event_id: r
        } = e;
        if (t) return t;
        var n = nA(e);
        return n ? n.type && n.value ? `${n.type}: ${n.value}` : n.type || n.value || r || "<unknown>" : r || "<unknown>"
    }

    function eh(e, t, r) {
        var n = e.exception = e.exception || {},
            s = n.values = n.values || [],
            o = s[0] = s[0] || {};
        o.value || (o.value = t || ""), o.type || (o.type = r || "Error")
    }

    function il(e, t) {
        var r = nA(e);
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

    function KQ(e, t = 1 / 0, r = 1 / 0) {
        try {
            return th("", e, t, r)
        } catch (n) {
            return {
                ERROR: `**non-serializable** (${n})`
            }
        }
    }

    function iA(e, t = 3, r = 100 * 1024) {
        var n = KQ(e, t);
        return qQ(n) > r ? iA(e, t - 1, r) : n
    }

    function th(e, t, r = 1 / 0, n = 1 / 0, s = HQ()) {
        const [o, c] = s;
        if (t === null || ["number", "boolean", "string"].includes(typeof t) && !gQ(t)) return t;
        var u = VQ(e, t);
        if (!u.startsWith("[object ")) return u;
        if (t.__sentry_skip_normalization__) return t;
        if (r === 0) return u.replace("object ", "");
        if (o(t)) return "[Circular ~]";
        var f = t;
        if (f && typeof f.toJSON == "function") try {
            var h = f.toJSON();
            return th("", h, r - 1, n, s)
        } catch {}
        var g = Array.isArray(t) ? [] : {};
        let _ = 0;
        var b = rA(t);
        for (var C in b)
            if (!!Object.prototype.hasOwnProperty.call(b, C)) {
                if (_ >= n) {
                    g[C] = "[MaxProperties ~]";
                    break
                }
                var P = b[C];
                g[C] = th(C, P, r - 1, n, s), _ += 1
            } return c(t), g
    }

    function VQ(e, t) {
        try {
            return e === "domain" && t && typeof t == "object" && t._events ? "[Domain]" : e === "domainEmitter" ? "[DomainEmitter]" : typeof global < "u" && t === global ? "[Global]" : typeof window < "u" && t === window ? "[Window]" : typeof document < "u" && t === document ? "[Document]" : pQ(t) ? "[SyntheticEvent]" : typeof t == "number" && t !== t ? "[NaN]" : t === void 0 ? "[undefined]" : typeof t == "function" ? `[Function: ${mi(t)}]` : typeof t == "symbol" ? `[${String(t)}]` : typeof t == "bigint" ? `[BigInt: ${String(t)}]` : `[object ${Object.getPrototypeOf(t).constructor.name}]`
        } catch (r) {
            return `**non-serializable** (${r})`
        }
    }

    function YQ(e) {
        return ~-encodeURI(e).split(/%..|./).length
    }

    function qQ(e) {
        return YQ(JSON.stringify(e))
    }
    var xn;
    (function(e) {
        var t = 0;
        e[e.PENDING = t] = "PENDING";
        var r = 1;
        e[e.RESOLVED = r] = "RESOLVED";
        var n = 2;
        e[e.REJECTED = n] = "REJECTED"
    })(xn || (xn = {}));
    class yn {
        __init() {
            this._state = xn.PENDING
        }
        __init2() {
            this._handlers = []
        }
        constructor(t) {
            yn.prototype.__init.call(this), yn.prototype.__init2.call(this), yn.prototype.__init3.call(this), yn.prototype.__init4.call(this), yn.prototype.__init5.call(this), yn.prototype.__init6.call(this);
            try {
                t(this._resolve, this._reject)
            } catch (r) {
                this._reject(r)
            }
        }
        then(t, r) {
            return new yn((n, s) => {
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
            return new yn((r, n) => {
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
                this._setResult(xn.RESOLVED, t)
            }
        }
        __init4() {
            this._reject = t => {
                this._setResult(xn.REJECTED, t)
            }
        }
        __init5() {
            this._setResult = (t, r) => {
                if (this._state === xn.PENDING) {
                    if (JO(r)) {
                        r.then(this._resolve, this._reject);
                        return
                    }
                    this._state = t, this._value = r, this._executeHandlers()
                }
            }
        }
        __init6() {
            this._executeHandlers = () => {
                if (this._state !== xn.PENDING) {
                    var t = this._handlers.slice();
                    this._handlers = [], t.forEach(r => {
                        r[0] || (this._state === xn.RESOLVED && r[1](this._value), this._state === xn.REJECTED && r[2](this._value), r[0] = !0)
                    })
                }
            }
        }
    }

    function Qf(e) {
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
    var zQ = ["fatal", "error", "warning", "log", "info", "debug"];

    function XQ(e) {
        return e === "warn" ? "warning" : zQ.includes(e) ? e : "log"
    }
    var rh = {
        nowSeconds: () => Date.now() / 1e3
    };

    function JQ() {
        const {
            performance: e
        } = Zt();
        if (!(!e || !e.now)) {
            var t = Date.now() - e.now();
            return {
                now: () => e.now(),
                timeOrigin: t
            }
        }
    }

    function ZQ() {
        try {
            var e = cQ(bA, "perf_hooks");
            return e.performance
        } catch {
            return
        }
    }
    var ed = wp() ? ZQ() : JQ(),
        $y = ed === void 0 ? rh : {
            nowSeconds: () => (ed.timeOrigin + ed.now()) / 1e3
        },
        sA = rh.nowSeconds.bind(rh),
        aA = $y.nowSeconds.bind($y);
    (() => {
        const {
            performance: e
        } = Zt();
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

    function QQ(e) {
        var t = aA(),
            r = {
                sid: Ha(),
                init: !0,
                timestamp: t,
                started: t,
                duration: 0,
                status: "ok",
                errors: 0,
                ignoreDuration: !1,
                toJSON: () => tee(r)
            };
        return e && Yl(r, e), r
    }

    function Yl(e, t = {}) {
        if (t.user && (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address), !e.did && !t.did && (e.did = t.user.id || t.user.email || t.user.username)), e.timestamp = t.timestamp || aA(), t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration), t.sid && (e.sid = t.sid.length === 32 ? t.sid : Ha()), t.init !== void 0 && (e.init = t.init), !e.did && t.did && (e.did = `${t.did}`), typeof t.started == "number" && (e.started = t.started), e.ignoreDuration) e.duration = void 0;
        else if (typeof t.duration == "number") e.duration = t.duration;
        else {
            var r = e.timestamp - e.started;
            e.duration = r >= 0 ? r : 0
        }
        t.release && (e.release = t.release), t.environment && (e.environment = t.environment), !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress), !e.userAgent && t.userAgent && (e.userAgent = t.userAgent), typeof t.errors == "number" && (e.errors = t.errors), t.status && (e.status = t.status)
    }

    function eee(e, t) {
        let r = {};
        t ? r = {
            status: t
        } : e.status === "ok" && (r = {
            status: "exited"
        }), Yl(e, r)
    }

    function tee(e) {
        return RQ({
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
    var Py = 100;
    class ns {
        constructor() {
            this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}
        }
        static clone(t) {
            var r = new ns;
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
            return this._user = t || {}, this._session && Yl(this._session, {
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
                return r instanceof ns ? r : this
            }
            return t instanceof ns ? (this._tags = {
                ...this._tags,
                ...t._tags
            }, this._extra = {
                ...this._extra,
                ...t._extra
            }, this._contexts = {
                ...this._contexts,
                ...t._contexts
            }, t._user && Object.keys(t._user).length && (this._user = t._user), t._level && (this._level = t._level), t._fingerprint && (this._fingerprint = t._fingerprint), t._requestSession && (this._requestSession = t._requestSession)) : Vl(t) && (t = t, this._tags = {
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
            var n = typeof r == "number" ? Math.min(r, Py) : Py;
            if (n <= 0) return this;
            var s = {
                timestamp: sA(),
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
            }, this._notifyEventProcessors([...oA(), ...this._eventProcessors], t, r)
        }
        setSDKProcessingMetadata(t) {
            return this._sdkProcessingMetadata = {
                ...this._sdkProcessingMetadata,
                ...t
            }, this
        }
        _notifyEventProcessors(t, r, n, s = 0) {
            return new yn((o, c) => {
                var u = t[s];
                if (r === null || typeof u != "function") o(r);
                else {
                    var f = u({
                        ...r
                    }, n);
                    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && u.id && f === null && jt.log(`Event processor "${u.id}" dropped event`), JO(f) ? f.then(h => this._notifyEventProcessors(t, h, n, s + 1).then(o)).then(null, c) : this._notifyEventProcessors(t, f, n, s + 1).then(o).then(null, c)
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

    function oA() {
        return Np("globalEventProcessors", () => [])
    }

    function cA(e) {
        oA().push(e)
    }
    var Dp = 4,
        ree = 100;
    class bo {
        __init() {
            this._stack = [{}]
        }
        constructor(t, r = new ns, n = Dp) {
            this._version = n, bo.prototype.__init.call(this), this.getStackTop().scope = r, t && this.bindClient(t)
        }
        isOlderThan(t) {
            return this._version < t
        }
        bindClient(t) {
            var r = this.getStackTop();
            r.client = t, t && t.setupIntegrations && t.setupIntegrations()
        }
        pushScope() {
            var t = ns.clone(this.getScope());
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
            var n = this._lastEventId = r && r.event_id ? r.event_id : Ha(),
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
            var s = this._lastEventId = n && n.event_id ? n.event_id : Ha(),
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
            var n = r && r.event_id ? r.event_id : Ha();
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
                maxBreadcrumbs: c = ree
            } = s.getOptions && s.getOptions() || {};
            if (!(c <= 0)) {
                var u = sA(),
                    f = {
                        timestamp: u,
                        ...t
                    },
                    h = o ? QO(() => o(f, r)) : f;
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
            var r = Dy(this);
            try {
                t(this)
            } finally {
                Dy(r)
            }
        }
        getIntegration(t) {
            var r = this.getClient();
            if (!r) return null;
            try {
                return r.getIntegration(t)
            } catch {
                return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && jt.warn(`Cannot retrieve integration ${t.id} from the current Hub`), null
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
            n && eee(n), this._sendSessionUpdate(), r && r.setSession()
        }
        startSession(t) {
            const {
                scope: r,
                client: n
            } = this.getStackTop(), {
                release: s,
                environment: o
            } = n && n.getOptions() || {};
            var c = Zt();
            const {
                userAgent: u
            } = c.navigator || {};
            var f = QQ({
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
                h && h.status === "ok" && Yl(h, {
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
            var n = ql(),
                s = n.__SENTRY__;
            if (s && s.extensions && typeof s.extensions[t] == "function") return s.extensions[t].apply(this, r);
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && jt.warn(`Extension method ${t} couldn't be found, doing nothing.`)
        }
    }

    function ql() {
        var e = Zt();
        return e.__SENTRY__ = e.__SENTRY__ || {
            extensions: {},
            hub: void 0
        }, e
    }

    function Dy(e) {
        var t = ql(),
            r = ai(t);
        return Mp(t, e), r
    }

    function Dr() {
        var e = ql();
        return (!lA(e) || ai(e).isOlderThan(Dp)) && Mp(e, new bo), wp() ? nee(e) : ai(e)
    }

    function nee(e) {
        try {
            var t = ql().__SENTRY__,
                r = t && t.extensions && t.extensions.domain && t.extensions.domain.active;
            if (!r) return ai(e);
            if (!lA(r) || ai(r).isOlderThan(Dp)) {
                var n = ai(e).getStackTop();
                Mp(r, new bo(n.client, ns.clone(n.scope)))
            }
            return ai(r)
        } catch {
            return ai(e)
        }
    }

    function lA(e) {
        return !!(e && e.__SENTRY__ && e.__SENTRY__.hub)
    }

    function ai(e) {
        return Np("hub", () => new bo, e)
    }

    function Mp(e, t) {
        if (!e) return !1;
        var r = e.__SENTRY__ = e.__SENTRY__ || {};
        return r.hub = t, !0
    }

    function iee(e, t) {
        return Dr().captureException(e, {
            captureContext: t
        })
    }

    function see(e) {
        Dr().withScope(e)
    }

    function aee(e) {
        var t = e.protocol ? `${e.protocol}:` : "",
            r = e.port ? `:${e.port}` : "";
        return `${t}//${e.host}${r}${e.path?`/${e.path}`:""}/api/`
    }

    function oee(e, t) {
        var r = SQ(e),
            n = `${aee(r)}embed/error-page/`;
        let s = `dsn=${yQ(r)}`;
        for (var o in t)
            if (o !== "dsn")
                if (o === "user") {
                    var c = t.user;
                    if (!c) continue;
                    c.name && (s += `&name=${encodeURIComponent(c.name)}`), c.email && (s += `&email=${encodeURIComponent(c.email)}`)
                } else s += `&${encodeURIComponent(o)}=${encodeURIComponent(t[o])}`;
        return `${n}?${s}`
    }
    let My;
    class io {
        constructor() {
            io.prototype.__init.call(this)
        }
        static __initStatic() {
            this.id = "FunctionToString"
        }
        __init() {
            this.name = io.id
        }
        setupOnce() {
            My = Function.prototype.toString, Function.prototype.toString = function(...t) {
                var r = Pp(this) || this;
                return My.apply(r, t)
            }
        }
    }
    io.__initStatic();
    var cee = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/];
    class Gs {
        static __initStatic() {
            this.id = "InboundFilters"
        }
        __init() {
            this.name = Gs.id
        }
        constructor(t = {}) {
            this._options = t, Gs.prototype.__init.call(this)
        }
        setupOnce(t, r) {
            var n = s => {
                var o = r();
                if (o) {
                    var c = o.getIntegration(Gs);
                    if (c) {
                        var u = o.getClient(),
                            f = u ? u.getOptions() : {},
                            h = lee(c._options, f);
                        return uee(s, h) ? null : s
                    }
                }
                return s
            };
            n.id = this.name, t(n)
        }
    }
    Gs.__initStatic();

    function lee(e = {}, t = {}) {
        return {
            allowUrls: [...e.allowUrls || [], ...t.allowUrls || []],
            denyUrls: [...e.denyUrls || [], ...t.denyUrls || []],
            ignoreErrors: [...e.ignoreErrors || [], ...t.ignoreErrors || [], ...cee],
            ignoreInternal: e.ignoreInternal !== void 0 ? e.ignoreInternal : !0
        }
    }

    function uee(e, t) {
        return t.ignoreInternal && gee(e) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && jt.warn(`Event dropped due to being internal Sentry Error.
Event: ${$s(e)}`), !0) : fee(e, t.ignoreErrors) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && jt.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${$s(e)}`), !0) : dee(e, t.denyUrls) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && jt.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${$s(e)}.
Url: ${sl(e)}`), !0) : hee(e, t.allowUrls) ? !1 : ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && jt.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${$s(e)}.
Url: ${sl(e)}`), !0)
    }

    function fee(e, t) {
        return !t || !t.length ? !1 : pee(e).some(r => t.some(n => $p(r, n)))
    }

    function dee(e, t) {
        if (!t || !t.length) return !1;
        var r = sl(e);
        return r ? t.some(n => $p(r, n)) : !1
    }

    function hee(e, t) {
        if (!t || !t.length) return !0;
        var r = sl(e);
        return r ? t.some(n => $p(r, n)) : !0
    }

    function pee(e) {
        if (e.message) return [e.message];
        if (e.exception) try {
            const {
                type: t = "",
                value: r = ""
            } = e.exception.values && e.exception.values[0] || {};
            return [`${r}`, `${t}: ${r}`]
        } catch {
            return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && jt.error(`Cannot extract message for event ${$s(e)}`), []
        }
        return []
    }

    function gee(e) {
        try {
            return e.exception.values[0].type === "SentryError"
        } catch {}
        return !1
    }

    function mee(e = []) {
        for (let r = e.length - 1; r >= 0; r--) {
            var t = e[r];
            if (t && t.filename !== "<anonymous>" && t.filename !== "[native code]") return t.filename || null
        }
        return null
    }

    function sl(e) {
        try {
            let t;
            try {
                t = e.exception.values[0].stacktrace.frames
            } catch {}
            return t ? mee(t) : null
        } catch {
            return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && jt.error(`Cannot extract url for event ${$s(e)}`), null
        }
    }

    function uA(e, t) {
        var r = kp(e, t),
            n = {
                type: t && t.name,
                value: yee(t)
            };
        return r.length && (n.stacktrace = {
            frames: r
        }), n.type === void 0 && n.value === "" && (n.value = "Unrecoverable error caught"), n
    }

    function vee(e, t, r, n) {
        var s = {
            exception: {
                values: [{
                    type: Lp(t) ? t.constructor.name : n ? "UnhandledRejection" : "Error",
                    value: `Non-Error ${n?"promise rejection":"exception"} captured with keys: ${IQ(t)}`
                }]
            },
            extra: {
                __serialized__: iA(t)
            }
        };
        if (r) {
            var o = kp(e, r);
            o.length && (s.exception.values[0].stacktrace = {
                frames: o
            })
        }
        return s
    }

    function td(e, t) {
        return {
            exception: {
                values: [uA(e, t)]
            }
        }
    }

    function kp(e, t) {
        var r = t.stacktrace || t.stack || "",
            n = _ee(t);
        try {
            return e(r, n)
        } catch {}
        return []
    }
    var Eee = /Minified React error #\d+;/i;

    function _ee(e) {
        if (e) {
            if (typeof e.framesToPop == "number") return e.framesToPop;
            if (Eee.test(e.message)) return 1
        }
        return 0
    }

    function yee(e) {
        var t = e && e.message;
        return t ? t.error && typeof t.error.message == "string" ? t.error.message : t : "No error message"
    }

    function fA(e, t, r, n, s) {
        let o;
        if (XO(t) && t.error) {
            var c = t;
            return td(e, c.error)
        }
        if (Sy(t) || uQ(t)) {
            var u = t;
            if ("stack" in t) o = td(e, t);
            else {
                var f = u.name || (Sy(u) ? "DOMError" : "DOMException"),
                    h = u.message ? `${f}: ${u.message}` : f;
                o = ky(e, h, r, n), eh(o, h)
            }
            return "code" in u && (o.tags = {
                ...o.tags,
                "DOMException.code": `${u.code}`
            }), o
        }
        if (zO(t)) return td(e, t);
        if (Vl(t) || Lp(t)) {
            var g = t;
            return o = vee(e, g, r, s), il(o, {
                synthetic: !0
            }), o
        }
        return o = ky(e, t, r, n), eh(o, `${t}`, void 0), il(o, {
            synthetic: !0
        }), o
    }

    function ky(e, t, r, n) {
        var s = {
            message: t
        };
        if (n && r) {
            var o = kp(e, r);
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
    var bee = "Breadcrumbs";
    class so {
        static __initStatic() {
            this.id = bee
        }
        __init() {
            this.name = so.id
        }
        constructor(t) {
            so.prototype.__init.call(this), this.options = {
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
            this.options.console && zi("console", See), this.options.dom && zi("dom", Tee(this.options.dom)), this.options.xhr && zi("xhr", Oee), this.options.fetch && zi("fetch", Aee), this.options.history && zi("history", Iee)
        }
    }
    so.__initStatic();

    function Tee(e) {
        function t(r) {
            let n, s = typeof e == "object" ? e.serializeAttribute : void 0;
            typeof s == "string" && (s = [s]);
            try {
                n = r.event.target ? Zd(r.event.target, s) : Zd(r.event, s)
            } catch {
                n = "<unknown>"
            }
            n.length !== 0 && Dr().addBreadcrumb({
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

    function See(e) {
        var t = {
            category: "console",
            data: {
                arguments: e.args,
                logger: "console"
            },
            level: XQ(e.level),
            message: Iy(e.args, " ")
        };
        if (e.level === "assert")
            if (e.args[0] === !1) t.message = `Assertion failed: ${Iy(e.args.slice(1)," ")||"console.assert"}`, t.data.arguments = e.args.slice(1);
            else return;
        Dr().addBreadcrumb(t, {
            input: e.args,
            level: e.level
        })
    }

    function Oee(e) {
        if (e.endTimestamp) {
            if (e.xhr.__sentry_own_request__) return;
            const {
                method: t,
                url: r,
                status_code: n,
                body: s
            } = e.xhr.__sentry_xhr__ || {};
            Dr().addBreadcrumb({
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

    function Aee(e) {
        !e.endTimestamp || e.fetchData.url.match(/sentry_key/) && e.fetchData.method === "POST" || (e.error ? Dr().addBreadcrumb({
            category: "fetch",
            data: e.fetchData,
            level: "error",
            type: "http"
        }, {
            data: e.error,
            input: e.args
        }) : Dr().addBreadcrumb({
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

    function Iee(e) {
        var t = Zt();
        let r = e.from,
            n = e.to;
        var s = Qf(t.location.href);
        let o = Qf(r);
        var c = Qf(n);
        o.path || (o = s), s.protocol === c.protocol && s.host === c.host && (n = c.relative), s.protocol === o.protocol && s.host === o.host && (r = o.relative), Dr().addBreadcrumb({
            category: "navigation",
            data: {
                from: r,
                to: n
            }
        })
    }
    let nh = 0;

    function dA() {
        return nh > 0
    }

    function Ree() {
        nh += 1, setTimeout(() => {
            nh -= 1
        })
    }

    function Zs(e, t = {}, r) {
        if (typeof e != "function") return e;
        try {
            var n = e.__sentry_wrapped__;
            if (n) return n;
            if (Pp(e)) return e
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
                throw Ree(), see(g => {
                    g.addEventProcessor(_ => (t.mechanism && (eh(_, void 0, void 0), il(_, t.mechanism)), _.extra = {
                        ..._.extra,
                        arguments: u
                    }, _)), iee(h)
                }), h
            }
        };
        try {
            for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (s[o] = e[o])
        } catch {}
        tA(s, e), eA(e, "__sentry_wrapped__", s);
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
    class fi {
        static __initStatic() {
            this.id = "GlobalHandlers"
        }
        __init() {
            this.name = fi.id
        }
        __init2() {
            this._installFunc = {
                onerror: Cee,
                onunhandledrejection: wee
            }
        }
        constructor(t) {
            fi.prototype.__init.call(this), fi.prototype.__init2.call(this), this._options = {
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
                n && t[r] && ($ee(r), n(), this._installFunc[r] = void 0)
            }
        }
    }
    fi.__initStatic();

    function Cee() {
        zi("error", e => {
            const [t, r, n] = gA();
            if (!t.getIntegration(fi)) return;
            const {
                msg: s,
                url: o,
                line: c,
                column: u,
                error: f
            } = e;
            if (!(dA() || f && f.__sentry_own_request__)) {
                var h = f === void 0 && Js(s) ? Lee(s, o, c, u) : hA(fA(r, f || s, void 0, n, !1), o, c, u);
                h.level = "error", pA(t, f, h, "onerror")
            }
        })
    }

    function wee() {
        zi("unhandledrejection", e => {
            const [t, r, n] = gA();
            if (!t.getIntegration(fi)) return;
            let s = e;
            try {
                "reason" in e ? s = e.reason : "detail" in e && "reason" in e.detail && (s = e.detail.reason)
            } catch {}
            if (dA() || s && s.__sentry_own_request__) return !0;
            var o = fQ(s) ? Nee(s) : fA(r, s, void 0, n, !0);
            o.level = "error", pA(t, s, o, "onunhandledrejection")
        })
    }

    function Nee(e) {
        return {
            exception: {
                values: [{
                    type: "UnhandledRejection",
                    value: `Non-Error promise rejection captured with value: ${String(e)}`
                }]
            }
        }
    }

    function Lee(e, t, r, n) {
        var s = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
        let o = XO(e) ? e.message : e,
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
        return hA(f, t, r, n)
    }

    function hA(e, t, r, n) {
        var s = e.exception = e.exception || {},
            o = s.values = s.values || [],
            c = o[0] = o[0] || {},
            u = c.stacktrace = c.stacktrace || {},
            f = u.frames = u.frames || [],
            h = isNaN(parseInt(n, 10)) ? void 0 : n,
            g = isNaN(parseInt(r, 10)) ? void 0 : r,
            _ = Js(t) && t.length > 0 ? t : vQ();
        return f.length === 0 && f.push({
            colno: h,
            filename: _,
            function: "?",
            in_app: !0,
            lineno: g
        }), e
    }

    function $ee(e) {
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && jt.log(`Global Handler attached: ${e}`)
    }

    function pA(e, t, r, n) {
        il(r, {
            handled: !1,
            type: n
        }), e.captureEvent(r, {
            originalException: t
        })
    }

    function gA() {
        var e = Dr(),
            t = e.getClient(),
            r = t && t.getOptions() || {
                stackParser: () => [],
                attachStacktrace: !1
            };
        return [e, r.stackParser, r.attachStacktrace]
    }
    var Pee = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"];
    class ao {
        static __initStatic() {
            this.id = "TryCatch"
        }
        __init() {
            this.name = ao.id
        }
        constructor(t) {
            ao.prototype.__init.call(this), this._options = {
                XMLHttpRequest: !0,
                eventTarget: !0,
                requestAnimationFrame: !0,
                setInterval: !0,
                setTimeout: !0,
                ...t
            }
        }
        setupOnce() {
            var t = Zt();
            this._options.setTimeout && lr(t, "setTimeout", xy), this._options.setInterval && lr(t, "setInterval", xy), this._options.requestAnimationFrame && lr(t, "requestAnimationFrame", Dee), this._options.XMLHttpRequest && "XMLHttpRequest" in t && lr(XMLHttpRequest.prototype, "send", Mee);
            var r = this._options.eventTarget;
            if (r) {
                var n = Array.isArray(r) ? r : Pee;
                n.forEach(kee)
            }
        }
    }
    ao.__initStatic();

    function xy(e) {
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

    function Dee(e) {
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

    function Mee(e) {
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
                        u = Pp(o);
                    return u && (c.mechanism.data.handler = mi(u)), Zs(o, c)
                })
            }), e.apply(this, t)
        }
    }

    function kee(e) {
        var t = Zt(),
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
    var xee = "cause",
        Uee = 5;
    class Ws {
        static __initStatic() {
            this.id = "LinkedErrors"
        }
        __init() {
            this.name = Ws.id
        }
        constructor(t = {}) {
            Ws.prototype.__init.call(this), this._key = t.key || xee, this._limit = t.limit || Uee
        }
        setupOnce() {
            var t = Dr().getClient();
            !t || cA((r, n) => {
                var s = Dr().getIntegration(Ws);
                return s ? Fee(t.getOptions().stackParser, s._key, s._limit, r, n) : r
            })
        }
    }
    Ws.__initStatic();

    function Fee(e, t, r, n, s) {
        if (!n.exception || !n.exception.values || !s || !Ai(s.originalException, Error)) return n;
        var o = mA(e, r, s.originalException, t);
        return n.exception.values = [...o, ...n.exception.values], n
    }

    function mA(e, t, r, n, s = []) {
        if (!Ai(r[n], Error) || s.length + 1 >= t) return s;
        var o = uA(e, r[n]);
        return mA(e, t, r[n], n, [o, ...s])
    }
    var Bi = Zt();
    class js {
        constructor() {
            js.prototype.__init.call(this)
        }
        static __initStatic() {
            this.id = "HttpContext"
        }
        __init() {
            this.name = js.id
        }
        setupOnce() {
            cA(t => {
                if (Dr().getIntegration(js)) {
                    if (!Bi.navigator && !Bi.location && !Bi.document) return t;
                    var r = t.request && t.request.url || Bi.location && Bi.location.href;
                    const {
                        referrer: o
                    } = Bi.document || {}, {
                        userAgent: c
                    } = Bi.navigator || {};
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
    js.__initStatic();
    class Hs {
        constructor() {
            Hs.prototype.__init.call(this)
        }
        static __initStatic() {
            this.id = "Dedupe"
        }
        __init() {
            this.name = Hs.id
        }
        setupOnce(t, r) {
            var n = s => {
                var o = r().getIntegration(Hs);
                if (o) {
                    try {
                        if (Bee(s, o._previousEvent)) return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && jt.warn("Event dropped due to being a duplicate of previously captured event."), null
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
    Hs.__initStatic();

    function Bee(e, t) {
        return t ? !!(Gee(e, t) || Wee(e, t)) : !1
    }

    function Gee(e, t) {
        var r = e.message,
            n = t.message;
        return !(!r && !n || r && !n || !r && n || r !== n || !EA(e, t) || !vA(e, t))
    }

    function Wee(e, t) {
        var r = Uy(t),
            n = Uy(e);
        return !(!r || !n || r.type !== n.type || r.value !== n.value || !EA(e, t) || !vA(e, t))
    }

    function vA(e, t) {
        let r = Fy(e),
            n = Fy(t);
        if (!r && !n) return !0;
        if (r && !n || !r && n || (r = r, n = n, n.length !== r.length)) return !1;
        for (let c = 0; c < n.length; c++) {
            var s = n[c],
                o = r[c];
            if (s.filename !== o.filename || s.lineno !== o.lineno || s.colno !== o.colno || s.function !== o.function) return !1
        }
        return !0
    }

    function EA(e, t) {
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

    function Uy(e) {
        return e.exception && e.exception.values && e.exception.values[0]
    }

    function Fy(e) {
        var t = e.exception;
        if (t) try {
            return t.values[0].stacktrace.frames
        } catch {
            return
        }
    }
    new Gs, new io, new ao, new so, new fi, new Ws, new Hs, new js;

    function jee(e = {}, t = Dr()) {
        var r = Zt();
        if (!r.document) {
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && jt.error("Global document not defined in showReportDialog call");
            return
        }
        const {
            client: n,
            scope: s
        } = t.getStackTop();
        var o = e.dsn || n && n.getDsn();
        if (!o) {
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && jt.error("DSN not configured for showReportDialog call");
            return
        }
        s && (e.user = {
            ...s.getUser(),
            ...e.user
        }), e.eventId || (e.eventId = t.lastEventId());
        var c = r.document.createElement("script");
        c.async = !0, c.src = oee(o, e), e.onLoad && (c.onload = e.onLoad);
        var u = r.document.head || r.document.body;
        u ? u.appendChild(c) : (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && jt.error("Not injecting report dialog. No injection point found in HTML")
    }
    const Hee = tt({
            setup() {
                return {
                    fatalError: ui(yo.fatal.error)
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
                    jee({
                        id: (r = (t = (e = this.fatalError) == null ? void 0 : e.event) == null ? void 0 : t.event_id) != null ? r : "Unknown"
                    })
                }
            }
        }),
        To = e => (ta("data-v-d0abff79"), e = e(), ra(), e),
        Kee = {
            class: "jbg fatal"
        },
        Vee = {
            class: "constrain"
        },
        Yee = To(() => X("a", {
            class: "logo",
            href: "/",
            "aria-label": "Jackbox Games Logo"
        }, null, -1)),
        qee = {
            class: "content"
        },
        zee = To(() => X("h1", null, "You have encountered an error", -1)),
        Xee = To(() => X("p", null, "Something went wrong! But don't worry, you can try a few things to get going.", -1)),
        Jee = To(() => X("ul", null, [X("li", null, "Refresh the page"), X("li", null, "Turn off adblockers or other browser extensions."), X("li", null, "Check your connection to the Internet."), X("li", null, "Make sure you're using an up-to-date browser."), X("li", null, "If that doesn't work, let us know.")], -1)),
        Zee = To(() => X("hr", null, null, -1)),
        Qee = {
            class: "error"
        };

    function ete(e, t, r, n, s, o) {
        return ne(), oe("div", Kee, [X("div", Vee, [Yee, X("div", qee, [zee, Xee, Jee, X("button", {
            onClick: t[0] || (t[0] = (...c) => e.onFeedbackClick && e.onFeedbackClick(...c))
        }, "Tell us what happened"), Zee, X("pre", Qee, Xe(e.message), 1)])])])
    }
    const tte = mt(Hee, [
            ["render", ete],
            ["__scopeId", "data-v-d0abff79"]
        ]),
        Lc = Gn({
            hasCrashed: !1
        }),
        rte = {
            install: e => {
                if (e.config.globalProperties.$handleEcastError) return;
                e.provide(yo.fatal.error, qr(() => Lc));
                const t = (r, n) => {
                    var s, o;
                    if (r instanceof Ga.EcastEntityNotFound || r instanceof Ga.EcastFilterError || r instanceof Ga.EcastRateLimitExceeded || r instanceof Error && ((s = r.message) == null ? void 0 : s.includes("Socket not ready to send")) || r instanceof Error && ((o = r.message) == null ? void 0 : o.includes("No connection available"))) return console.warn(r);
                    throw n ? console.error(n, r) : console.error(r), r
                };
                window.tv.onError = async (r, n) => {
                    if (r.level === "error" && (Lc.hasCrashed = !0, Lc.event = r, Lc.hint = n), e.config.globalProperties.$debugRecorder) return await e.config.globalProperties.$debugRecorder.sendToEcast()
                }, e.component("Fatal", tte), e.config.globalProperties.$handleEcastError = t
            }
        };
    var nte = VO,
        ite = YO;

    function ste(e, t) {
        t = nte(t, e);
        for (var r = 0, n = t.length; e != null && r < n;) e = e[ite(t[r++])];
        return r && r == n ? e : void 0
    }
    var ate = ste,
        ote = ate;

    function cte(e, t, r) {
        var n = e == null ? void 0 : ote(e, t);
        return n === void 0 ? r : n
    }
    var lte = cte,
        ute = Math.floor,
        fte = Math.random;

    function dte(e, t) {
        return e + ute(fte() * (t - e + 1))
    }
    var hte = dte,
        pte = hte;

    function gte(e) {
        var t = e.length;
        return t ? e[pte(0, t - 1)] : void 0
    }
    var _A = gte,
        mte = HO;

    function vte(e, t) {
        return mte(t, function(r) {
            return e[r]
        })
    }
    var Ete = vte,
        _te = Ete,
        yte = Hl;

    function bte(e) {
        return e == null ? [] : _te(e, yte(e))
    }
    var Tte = bte,
        Ste = _A,
        Ote = Tte;

    function Ate(e) {
        return Ste(Ote(e))
    }
    var Ite = Ate,
        Rte = _A,
        Cte = Ite,
        wte = yi;

    function Nte(e) {
        var t = wte(e) ? Rte : Cte;
        return t(e)
    }
    var Lte = Nte;

    function By(e, t) {
        const r = e.global.locale,
            n = e.global.messages[r],
            s = lte(n, t);
        return Array.isArray(s) || console.warn(`[i18nPlugin] Translation with key ${t} is not an array`), Lte(s)
    }
    const $te = {
            install: (e, t) => {
                e.directive("ts", (r, n) => {
                    const s = By(t.i18n, n.value);
                    r.textContent = s || ""
                }), e.config.globalProperties.$ts = function(n) {
                    return By(t.i18n, n) || ""
                }, e.config.globalProperties.$t = t.i18n.global.t, e.config.globalProperties.$tc = t.i18n.global.tc, e.config.globalProperties.$te = t.i18n.global.te, e.config.globalProperties.$tm = t.i18n.global.tm
            }
        },
        Pte = tt({
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
        Dte = "main/@moderator/assets/928ef0da.png",
        Mte = "main/@moderator/assets/0bb76a2d.png",
        kte = "main/@moderator/assets/ed4469b3.png",
        xte = {
            key: 0,
            class: "image",
            src: Dte,
            alt: "Kicked"
        },
        Ute = {
            key: 1,
            class: "image",
            src: Mte,
            alt: "Thank You"
        },
        Fte = {
            key: 2,
            class: "image",
            src: kte,
            alt: "Error"
        },
        Bte = {
            class: "text"
        },
        Gte = {
            key: 3,
            class: "subtext"
        },
        Wte = {
            class: "actions"
        };

    function jte(e, t, r, n, s, o) {
        const c = Ht("bb");
        return ne(), oe("div", {
            class: Ge(["error-model", e.classes])
        }, [e.image === "tear" ? (ne(), oe("img", xte)) : e.image === "moon" ? (ne(), oe("img", Ute)) : (ne(), oe("img", Fte)), Ke(X("h3", Bte, null, 512), [
            [c, e.text]
        ]), e.subtext ? Ke((ne(), oe("h3", Gte, null, 512)), [
            [c, e.subtext]
        ]) : We("", !0), X("div", Wte, [Ke(X("button", {
            onClick: t[0] || (t[0] = Jr(u => e.$emit("resolve"), ["prevent"]))
        }, null, 512), [
            [c, e.dismissText]
        ])])], 2)
    }
    const Hte = mt(Pte, [
            ["render", jte],
            ["__scopeId", "data-v-420dd700"]
        ]),
        Kte = tt({
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
        Vte = {
            class: "text"
        },
        Yte = {
            key: 0,
            class: "subtext"
        },
        qte = {
            class: "actions"
        },
        zte = ["onClick"];

    function Xte(e, t, r, n, s, o) {
        const c = Ht("bb");
        return ne(), oe("div", {
            class: Ge(["options-modal", e.classes])
        }, [Ke(X("h3", Vte, null, 512), [
            [c, e.text]
        ]), e.subtext ? Ke((ne(), oe("h3", Yte, null, 512)), [
            [c, e.subtext]
        ]) : We("", !0), X("div", qte, [(ne(!0), oe(At, null, lo(e.options, (u, f) => Ke((ne(), oe("button", {
            key: f,
            class: Ge(u.classes),
            onClick: Jr(h => e.$emit("resolve", u.value), ["prevent"])
        }, null, 10, zte)), [
            [c, u.text]
        ])), 128))])], 2)
    }
    const Jte = mt(Kte, [
            ["render", Xte],
            ["__scopeId", "data-v-f5303469"]
        ]),
        Zte = tt({
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
                    return this.props = t, this.classes = r.classes || "jbg", e === "Error" ? this.content = Hte : e === "Options" ? this.content = Jte : this.content = e, new Promise(n => {
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

    function Qte(e, t, r, n, s, o) {
        return ne(), Yr(Ch, {
            name: "modal-transition"
        }, {
            default: vh(() => [e.props ? (ne(), oe("div", {
                key: 0,
                class: Ge(["modal", e.classes]),
                onKeyup: t[0] || (t[0] = wP((...c) => e.onBackgroundClick && e.onBackgroundClick(...c), ["esc"])),
                onClick: t[1] || (t[1] = Jr((...c) => e.onBackgroundClick && e.onBackgroundClick(...c), ["self"]))
            }, [e.content ? (ne(), Yr(_$(e.content), Ih({
                key: 0,
                class: "content"
            }, e.props, {
                onResolve: e.onResolve
            }), null, 16, ["onResolve"])) : We("", !0)], 34)) : We("", !0)]),
            _: 1
        })
    }
    const ere = mt(Zte, [
            ["render", Qte],
            ["__scopeId", "data-v-e6feb9c0"]
        ]),
        tre = {
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
                e.component("Modal", ere), e.config.globalProperties.$showModal = r, e.config.globalProperties.$registerModal = n
            }
        };
    tt({
        setup() {
            return {
                announcment: ui(yo.textDescriptions.announcement)
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
    });
    an("");
    tt({
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
    tt({
        props: {
            options: Object,
            mainView: Object
        },
        setup() {
            return {
                fatalError: ui(yo.fatal.error)
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
    const rre = {
            GAME: "Juego",
            PASSWORD: "CONTRASE\xD1A"
        },
        nre = {
            KICK: "\xBFExpulsar?",
            KICK_PLAYERS: "EXPULSAR JUGADORES",
            MODERATE: "Moderar",
            APPROVE_ALL: "Aprobar todo",
            REJECT_ALL: "Rechazar todo"
        },
        ire = {
            ROOM_DESTROYED: "\xA1Gracias por ayudar!"
        },
        sre = {
            DISABLED: "Moderaci\xF3n deshabilitada",
            KICKED: "EXPULSADO",
            UNSUPPORTED: "Moderaci\xF3n no soportada",
            WAITING_FOR_SUBMISSIONS: "Esperando aportaciones"
        },
        are = {
            DISABLED: "La moderaci\xF3n para esta partida est\xE1 desactivada. Act\xEDvala y reinicia el juego para moderar el contenido.",
            UNSUPPORTED: "{gameName} no tiene nada que moderar, pero \xA1gracias por querer ayudar!"
        },
        ore = "Enviado por:",
        cre = {
            FORM: rre,
            ACTION: nre,
            ERROR: ire,
            STATUS: sre,
            WARNING: are,
            SUBMITTED_BY: ore
        },
        lre = {
            GAME: "Jeu",
            PASSWORD: "MOT DE PASSE"
        },
        ure = {
            KICK: "\xC9jecter\xA0?",
            KICK_PLAYERS: "\xC9JECTER DES JOUEURS",
            MODERATE: "Mod\xE9r\xE9",
            APPROVE_ALL: "Tout accepter",
            REJECT_ALL: "Tout refuser"
        },
        fre = {
            ROOM_DESTROYED: "Merci pour votre aide\xA0!"
        },
        dre = {
            DISABLED: "Mod\xE9ration d\xE9sactiv\xE9e",
            KICKED: "\xC9JECT\xC9",
            UNSUPPORTED: "Mod\xE9ration impossible",
            WAITING_FOR_SUBMISSIONS: "En attente de propositions"
        },
        hre = {
            DISABLED: "Le param\xE8tre de mod\xE9ration est d\xE9sactiv\xE9 pour ce jeu. Activez-le et relancez le jeu pour mod\xE9rer le contenu.",
            UNSUPPORTED: "Il n'y a rien \xE0 mod\xE9rer dans {gameName}, mais merci d'avoir voulu aider\xA0!"
        },
        pre = "Envoy\xE9 par\xA0:",
        gre = {
            FORM: lre,
            ACTION: ure,
            ERROR: fre,
            STATUS: dre,
            WARNING: hre,
            SUBMITTED_BY: pre
        },
        mre = {
            GAME: "Gioco",
            PASSWORD: "PASSWORD"
        },
        vre = {
            KICK: "Cacciare?",
            KICK_PLAYERS: "CACCIA GIOCATORI",
            MODERATE: "Modera",
            APPROVE_ALL: "Approva tutto",
            REJECT_ALL: "Rifiuta tutto"
        },
        Ere = {
            ROOM_DESTROYED: "Grazie per l'aiuto!"
        },
        _re = {
            DISABLED: "Moderazione disabilitata",
            KICKED: "CACCIATO/A",
            UNSUPPORTED: "Moderazione non supportata",
            WAITING_FOR_SUBMISSIONS: "In attesa di invii"
        },
        yre = {
            DISABLED: "La moderazione \xE8 disattivata per questo gioco. Per moderare i contenuti, attivala e riavvia il gioco.",
            UNSUPPORTED: "{gameName} non ha nulla da moderare, ma grazie per l'aiuto!"
        },
        bre = "Inviato da:",
        Tre = {
            FORM: mre,
            ACTION: vre,
            ERROR: Ere,
            STATUS: _re,
            WARNING: yre,
            SUBMITTED_BY: bre
        },
        Sre = {
            GAME: "Spiel",
            PASSWORD: "PASSWORT"
        },
        Ore = {
            KICK: "Kicken?",
            KICK_PLAYERS: "SPIELER KICKEN",
            MODERATE: "Moderieren",
            APPROVE_ALL: "Alles erlauben",
            REJECT_ALL: "Alles zur\xFCckweisen"
        },
        Are = {
            ROOM_DESTROYED: "Danke f\xFCrs Helfen!"
        },
        Ire = {
            DISABLED: "Moderation deaktiviert",
            KICKED: "GEKICKT",
            UNSUPPORTED: "Moderation nicht unterst\xFCtzt",
            WAITING_FOR_SUBMISSIONS: "Warte auf Einreichungen"
        },
        Rre = {
            DISABLED: "Moderation f\xFCr dieses Spiel ist ausgeschaltet Schalte sie ein und starte das Spiel erneut, um Inhalte moderieren zu k\xF6nnen.",
            UNSUPPORTED: "{gameName} hat keine zu moderierenden Inhalte, aber danke, dass du helfen wolltest!"
        },
        Cre = "Gesendet von:",
        wre = {
            FORM: Sre,
            ACTION: Ore,
            ERROR: Are,
            STATUS: Ire,
            WARNING: Rre,
            SUBMITTED_BY: Cre
        },
        Nre = {
            GAME: "Juego",
            PASSWORD: "CONTRASE\xD1A"
        },
        Lre = {
            KICK: "\xBFExpulsar?",
            KICK_PLAYERS: "EXPULSAR JUGADORES",
            MODERATE: "Moderar",
            APPROVE_ALL: "Aprobar todo",
            REJECT_ALL: "Rechazar todo"
        },
        $re = {
            ROOM_DESTROYED: "\xA1Gracias por ayudar!"
        },
        Pre = {
            DISABLED: "Moderaci\xF3n deshabilitada",
            KICKED: "EXPULSADO",
            UNSUPPORTED: "Moderaci\xF3n no soportada",
            WAITING_FOR_SUBMISSIONS: "Esperando aportaciones"
        },
        Dre = {
            DISABLED: "La moderaci\xF3n para este juego est\xE1 desactivada. Act\xEDvala y reinicia el juego para moderar el contenido.",
            UNSUPPORTED: "{gameName} no tiene nada que moderar, \xA1pero \xA1gracias por querer ayudar!"
        },
        Mre = "Enviado por:",
        kre = {
            FORM: Nre,
            ACTION: Lre,
            ERROR: $re,
            STATUS: Pre,
            WARNING: Dre,
            SUBMITTED_BY: Mre
        },
        xre = {
            GAME: "Juego",
            PASSWORD: "CONTRASE\xD1A"
        },
        Ure = {
            KICK: "\xBFExpulsar?",
            KICK_PLAYERS: "EXPULSAR JUGADORES",
            MODERATE: "Moderar",
            APPROVE_ALL: "Aprobar todo",
            REJECT_ALL: "Rechazar todo"
        },
        Fre = {
            ROOM_DESTROYED: "\xA1Gracias por tu ayuda!"
        },
        Bre = {
            DISABLED: "Moderaci\xF3n desactivada",
            KICKED: "EXPULSADO",
            UNSUPPORTED: "Moderaci\xF3n no soportada",
            WAITING_FOR_SUBMISSIONS: "Esperando aportaciones"
        },
        Gre = {
            DISABLED: "La moderaci\xF3n para esta partida est\xE1 desactivada. Act\xEDvala y reinicia el juego para moderar el contenido.",
            UNSUPPORTED: "{gameName} no tiene nada que moderar, \xA1pero gracias por querer ayudar!"
        },
        Wre = "Enviado por:",
        jre = {
            FORM: xre,
            ACTION: Ure,
            ERROR: Fre,
            STATUS: Bre,
            WARNING: Gre,
            SUBMITTED_BY: Wre
        },
        Hre = {
            en: cre,
            fr: gre,
            it: Tre,
            de: wre,
            es: kre,
            "es-XL": jre
        },
        Kre = tt({
            components: {
                Input: FK
            },
            props: {
                game: Object,
                room: Object
            },
            emits: {
                connectionDidChange: e => !0,
                roomDidChange: e => !0
            },
            data() {
                return {
                    codeLength: 4,
                    code: "",
                    passwordLength: 5,
                    password: "",
                    isConnecting: !1,
                    api: new Fn.APIClient({
                        host: Wt.serverUrl,
                        scheme: "https"
                    }),
                    roomNotFound: !1
                }
            },
            computed: {
                hasFormData() {
                    return !(this.code.length !== this.codeLength || this.password.length !== this.passwordLength)
                },
                state() {
                    var n, s, o, c;
                    if (!this.room) {
                        const u = this.code.length === this.codeLength && this.roomNotFound;
                        return {
                            canSubmit: !1,
                            isEnabled: !1,
                            isSupported: !1,
                            statusKey: u ? "STATUS.ROOM_NOT_FOUND" : ""
                        }
                    }
                    const e = (s = (n = this.game) == null ? void 0 : n.features) != null ? s : [],
                        t = e.includes("moderation") || e.includes("kicking"),
                        r = this.room.moderationEnabled;
                    return t ? r ? {
                        canSubmit: this.hasFormData,
                        isEnabled: r,
                        isSupported: t,
                        statusText: (c = (o = this.game) == null ? void 0 : o.name) != null ? c : "???"
                    } : {
                        canSubmit: !1,
                        isEnabled: r,
                        isSupported: t,
                        statusKey: "STATUS.DISABLED"
                    } : {
                        canSubmit: !1,
                        isEnabled: r,
                        isSupported: t,
                        statusKey: "STATUS.UNSUPPORTED"
                    }
                }
            },
            beforeMount() {
                this.populateFromStorage()
            },
            methods: {
                async populateFromStorage() {
                    var e, t;
                    !Ct.isSupported || (this.code = ((e = Ct.get("moderator-code")) != null ? e : "").toUpperCase(), this.password = ((t = Ct.get("moderator-password")) != null ? t : "").toUpperCase(), this.code && await this.getRoomInfo(), this.room || (this.code = "", this.password = "", Ct.remove("moderator-code"), Ct.remove("moderator-password")))
                },
                onCodeInput() {
                    const e = /\s/g;
                    if (this.code = this.code.replace(e, "").trim().toUpperCase(), this.code.length !== this.codeLength) {
                        this.$emit("roomDidChange", null);
                        return
                    }
                    this.getRoomInfo()
                },
                onPasswordInput() {
                    const e = /\s/g;
                    this.password = this.password.replace(e, "").trim()
                },
                async onFormSubmit() {
                    await this.connect()
                },
                async getRoomInfo() {
                    this.roomNotFound = !1;
                    try {
                        const e = await this.api.getRoom({
                            code: this.code
                        });
                        this.$emit("roomDidChange", e), this.$i18n.locale = e.locale
                    } catch (e) {
                        console.warn(e), this.$emit("roomDidChange", null), this.roomNotFound = !0
                    }
                },
                async connect() {
                    if (this.isConnecting || !this.state.canSubmit) return;
                    if (await this.getRoomInfo(), !this.room) return this.showError("ERROR.ROOM_NOT_FOUND");
                    const e = {
                            host: this.room.host,
                            code: this.code.toUpperCase(),
                            name: "moderator",
                            password: this.password,
                            role: "moderator",
                            debug: "false"
                        },
                        t = new Fn.WSClient(e);
                    try {
                        this.isConnecting = !0;
                        const r = await t.connect();
                        this.$setupEcast({
                            room: this.room,
                            wsClient: t,
                            welcome: r
                        }), Ct.set("moderator-code", this.code), Ct.set("moderator-password", this.password), is.moderatorConnected(this.room.appTag), this.$emit("connectionDidChange", !0)
                    } catch (r) {
                        console.error("[moderator]", r), this.onConnectionError()
                    }
                    this.isConnecting = !1
                },
                onConnectionError() {
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
        Vre = e => (ta("data-v-aab5a2d0"), e = e(), ra(), e),
        Yre = {
            class: "constrain"
        },
        qre = {
            for: "roomcode"
        },
        zre = {
            key: 0,
            class: "status"
        },
        Xre = {
            key: 1,
            class: "status"
        },
        Jre = {
            for: "password"
        },
        Zre = ["disabled"],
        Qre = Vre(() => X("div", {
            class: "loading"
        }, null, -1)),
        ene = {
            key: 0,
            class: "warning"
        },
        tne = {
            key: 1,
            class: "warning"
        };

    function rne(e, t, r, n, s, o) {
        var f, h;
        const c = wt("Input"),
            u = Ht("t");
        return ne(), oe("div", Yre, [X("form", {
            autocomplete: "off",
            onSubmit: t[2] || (t[2] = Jr((...g) => e.onFormSubmit && e.onFormSubmit(...g), ["prevent"]))
        }, [X("fieldset", null, [X("label", qre, [vr(Xe(e.$t("FORM.ROOM_CODE")) + " ", 1), e.state.statusKey ? Ke((ne(), oe("span", zre, null, 512)), [
            [u, e.state.statusKey]
        ]) : e.state.statusText ? (ne(), oe("span", Xre, Xe(e.state.statusText), 1)) : We("", !0)]), st(c, {
            id: "roomcode",
            modelValue: e.code,
            "onUpdate:modelValue": t[0] || (t[0] = g => e.code = g),
            type: "text",
            autocapitalize: "off",
            autocorrect: "off",
            autocomplete: "off",
            placeholder: e.$t("FORM.ROOM_CODE_PLACEHOLDER"),
            maxlength: e.codeLength,
            onInput: e.onCodeInput
        }, null, 8, ["modelValue", "placeholder", "maxlength", "onInput"]), Ke(X("label", Jre, null, 512), [
            [u, "FORM.PASSWORD"]
        ]), st(c, {
            id: "password",
            modelValue: e.password,
            "onUpdate:modelValue": t[1] || (t[1] = g => e.password = g),
            type: "text",
            inputmode: "numeric",
            autocapitalize: "off",
            autocorrect: "off",
            autocomplete: "off",
            placeholder: e.$t("FORM.PASSWORD_PLACEHOLDER"),
            maxlength: e.passwordLength,
            onInput: e.onPasswordInput
        }, null, 8, ["modelValue", "placeholder", "maxlength", "onInput"]), X("button", {
            type: "submit",
            class: Ge({
                connecting: e.isConnecting
            }),
            disabled: !e.state.canSubmit
        }, [Ke(X("span", null, null, 512), [
            [u, "ACTION.MODERATE"]
        ]), Qre], 10, Zre)])], 32), e.room && !e.state.isSupported ? (ne(), oe("p", ene, Xe(e.$t("WARNING.UNSUPPORTED", {
            gameName: (h = (f = e.game) == null ? void 0 : f.name) != null ? h : "This game"
        })), 1)) : e.room && !e.state.isEnabled ? (ne(), oe("p", tne, Xe(e.$t("WARNING.DISABLED")), 1)) : We("", !0)])
    }
    const nne = mt(Kre, [
            ["render", rne],
            ["__scopeId", "data-v-aab5a2d0"]
        ]),
        ine = {},
        sne = {
            viewBox: "0 0 250 250"
        },
        ane = X("path", {
            class: "blast",
            d: `M66.19,181a5.82,5.82,0,0,0-3-11.16l-24.4,3.66,11.34-27.75-26.6-13.83L49,116.09,35.61,89.27l29.9,2.21L70.44,61.9
           l22.9,19.37,21.37-21,5.87,24a5.82,5.82,0,1,0,11.3-2.77L121.13,37.6,92.74,65.53,62.33,39.81,55.78,79.1,16.07,76.16
           l17.79,35.63L0,132.76l35.34,18.37L20.27,188l44.64-6.7A5.36,5.36,0,0,0,66.19,181Z`
        }, null, -1),
        one = X("path", {
            class: "boot",
            d: `M175.43,180l-51.6-15.27a35,35,0,0,1-17.69-12l-24.2-30.81-8.41,6.61a6.2,6.2,0,0,0-1,8.71L96.7,168.08
           a41.34,41.34,0,0,0,20.7,14.08c10.7,3.2,26.15,7.67,38,10.57,10.15,2.47,17.14-.26,21.59-3.59A5.17,5.17,0,0,0,175.43,180Z
           m74.19-40.48c-27.16-3.78-37.67-21.22-41.74-33.73A10.37,10.37,0,0,0,192.77,100l-7.45,4.37,11.59,16.33
           a5.17,5.17,0,0,1-1.23,7.21,4.81,4.81,0,0,1-1.09.59,5.17,5.17,0,0,1-6.12-1.81l-12.11-17.06-8.22,4.83,9.77,13.77
           a5.16,5.16,0,0,1-1.22,7.21,5,5,0,0,1-1.09.59,5.17,5.17,0,0,1-6.12-1.81l-10.3-14.51L153,123.36
           c-25.15-32-58.39-10.82-64.48-6.5l24.18,30.78a26.78,26.78,0,0,0,13.52,9.18L241.85,191
           C252.6,165.67,249.62,139.54,249.62,139.54Zm-64.75,56.8a4.13,4.13,0,0,0,2.79,5c7.38,2.23,20,6.13,37.08,10.84
           a5.2,5.2,0,0,0,5.37-1.67,74.42,74.42,0,0,0,8.1-11.95l-50-14.92Z`
        }, null, -1),
        cne = [ane, one];

    function lne(e, t) {
        return ne(), oe("svg", sne, cne)
    }
    const une = mt(ine, [
            ["render", lne]
        ]),
        fne = tt({
            components: {
                KickSVG: une
            },
            props: {
                hasStarted: Boolean
            },
            data() {
                return {
                    shouldShow: !1,
                    players: []
                }
            },
            beforeMount() {
                this.processWelcomeMessage(), this.bindConnectedEvent(), this.bindKickedEvent()
            },
            methods: {
                processWelcomeMessage() {
                    Object.values(this.$ecastWelcome.here).forEach(e => {
                        !e.roles.player || this.players.push({
                            name: e.roles.player.name,
                            id: e.id,
                            isKicked: e.roles.kicked
                        })
                    })
                },
                bindConnectedEvent() {
                    this.$ecast.on("client/connected", e => {
                        e.role !== "player" || this.players.find(r => r.id === e.id) || this.players.push({
                            name: e.name,
                            id: e.id,
                            isKicked: !1
                        })
                    })
                },
                bindKickedEvent() {
                    this.$ecast.on("client/kicked", e => {
                        this.setKicked(e.id, !0)
                    })
                },
                setKicked(e, t) {
                    const r = this.players.find(n => n.id === e);
                    !r || (r.isKicked = t)
                },
                onKickToggleClick() {
                    this.shouldShow = !this.shouldShow
                },
                async onKickClick(e) {
                    e.isKicked = !0;
                    try {
                        await this.$ecast.kick(e.id, !0), is.playerKicked(this.$ecastRoom.appTag, !this.hasStarted)
                    } catch (t) {
                        e.isKicked = !1, this.$handleEcastError(t)
                    }
                }
            }
        }),
        yA = e => (ta("data-v-23c5a82b"), e = e(), ra(), e),
        dne = ["disabled"],
        hne = yA(() => X("svg", {
            viewBox: "0 0 23 40",
            class: "tab left"
        }, [X("path", {
            "vector-effect": "non-scaling-stroke",
            d: "M23,0A16.41,16.41,0,0,0,7.18,12.08L0,40"
        })], -1)),
        pne = yA(() => X("svg", {
            viewBox: "0 0 23 40",
            class: "tab right"
        }, [X("path", {
            "vector-effect": "non-scaling-stroke",
            d: "M23,0A16.41,16.41,0,0,0,7.18,12.08L0,40"
        })], -1)),
        gne = {
            class: "players"
        },
        mne = {
            class: "name"
        },
        vne = ["onClick"],
        Ene = {
            key: 1,
            class: "kick-message"
        };

    function _ne(e, t, r, n, s, o) {
        const c = wt("KickSVG"),
            u = Ht("t");
        return ne(), oe("div", {
            class: Ge(["kicking", {
                showing: e.shouldShow
            }])
        }, [X("button", {
            class: "kick-toggle",
            disabled: !e.players.length,
            onClick: t[0] || (t[0] = (...f) => e.onKickToggleClick && e.onKickToggleClick(...f))
        }, [hne, st(c, {
            class: "icon"
        }), vr(" " + Xe(e.$t("ACTION.KICK_PLAYERS")) + " ", 1), pne], 8, dne), X("div", gne, [(ne(!0), oe(At, null, lo(e.players, f => (ne(), oe("div", {
            key: f.id,
            class: Ge(["player", {
                kicked: f.isKicked
            }])
        }, [X("span", mne, Xe(f.name), 1), f.isKicked ? Ke((ne(), oe("span", Ene, null, 512)), [
            [u, "STATUS.KICKED"]
        ]) : (ne(), oe("button", {
            key: 0,
            class: "kick-button",
            onClick: h => e.onKickClick(f)
        }, Xe(e.$t("ACTION.KICK")), 9, vne))], 2))), 128))])], 2)
    }
    const yne = mt(fne, [
            ["render", _ne],
            ["__scopeId", "data-v-23c5a82b"]
        ]),
        bne = {},
        Tne = {
            viewBox: "0 0 180 180"
        },
        Sne = X("path", {
            d: `M117.12,75.42c-11.42,2-18.38,14.83-10.11,24.06,12.27,8.19,40.38,6,53.76,3h0c10.55-1.73,16.29-14.82,9.27-23.15C157.27,
           69.89,132.14,72.54,117.12,75.42Zm-16.5,68.29c0-5.8,1.39-10.22,4.33-13.46-6.5-5.1-6.62-19.81-.7-25.51-14.2-12.23-4.1-33.27,
           13.21-35.48-10.8-7.93-.89-25.71-.89-40.06,0-10.95-9.33-29.2-26.16-29.2-24.14,0-9,18.16-9,40.87,0,19.64-19.87,25.38-30.12,
           43.44h0A43.87,43.87,0,0,0,46.66,96a3.14,3.14,0,0,1-3.47,2.41c-6.22-2.13.35-11.1,1.61-14.61l-23.15-2.7S6.24,89.35,6.24,
           121.75c0,42.53,21.9,44.33,21.9,44.33l25.92-6a47.93,47.93,0,0,1-6.94-8.7c-2.59-4.08,4-7.89,6.27-3.64a48,48,0,0,0,8.45,11
           h0c9,8.7,22.8,15.31,44.07,17.15-4-5.07-3.2-15.46.35-20.14A15.14,15.14,0,0,1,100.62,143.71Zm68-.77
           c.09-3.78-1-7.83-4.35-10-10.41,3-44,2.87-52.31-.87-10,6.84-6.18,20.92,5.87,23h0C128.47,157.22,169.5,163.23,168.64,142.94Z
           m5-26.29c.32-5.15-2.16-10.07-7.08-12.15-10.5,5.63-43.64,5.5-55.2,1.72-10.61,7.52-5.93,23,7.26,23.59h0c8.07,1.64,30.09,1.72,
           39.13.39h0C165.52,129.58,174.77,125.93,173.67,116.65Zm-16.94,43.26c-13.36,2.08-31.35,2.34-44-2.48-11.35,13.94,3.9,22.29,
           18.17,22.21C144,181.28,166.76,177.74,156.73,159.91Z`
        }, null, -1),
        One = [Sne];

    function Ane(e, t) {
        return ne(), oe("svg", Tne, One)
    }
    const So = mt(bne, [
            ["render", Ane]
        ]),
        Ine = {},
        Rne = {
            viewBox: "0 0 180 180"
        },
        Cne = X("path", {
            d: `M170,100.64c7-8.33,1.28-21.42-9.27-23.15h0c-13.38-3-41.49-5.16-53.76,3-8.27,9.23-1.31,22.11,10.11,24.06
           C132.14,107.46,157.27,110.11,170,100.64ZM106.26,24.25c-3.55-4.68-4.37-15.07-.35-20.14C84.64,6,70.82,12.56,61.84,21.26
           h0a48,48,0,0,0-8.45,11c-2.29,4.25-8.86.44-6.27-3.64a47.93,47.93,0,0,1,6.94-8.7l-25.92-6s-21.9,1.8-21.9,44.33
           c0,32.4,15.41,40.63,15.41,40.63l23.15-2.7C43.54,92.67,37,83.7,43.19,81.57A3.14,3.14,0,0,1,46.66,84a43.87,43.87,0,0,0,4.58,
           11.71h0c10.25,18.06,30.12,23.8,30.12,43.44,0,22.71-15.1,40.87,9,40.87,16.83,0,26.16-18.25,26.16-29.2,
           0-14.35-9.91-32.13.89-40.06-17.31-2.21-27.41-23.25-13.21-35.48-5.92-5.7-5.8-20.41.7-25.51-2.94-3.24-4.33-7.66-4.33-13.46
           A15.14,15.14,0,0,1,106.26,24.25Zm11.59.7h0C105.8,27,102,41.08,112,47.92c8.35-3.74,41.9-3.84,52.31-.87,3.38-2.16,4.44-6.21,
           4.35-10C169.5,16.77,128.47,22.78,117.85,25ZM157.78,49.8h0c-9-1.33-31.06-1.25-39.13.39h0c-13.19.56-17.87,16.07-7.26,23.59,
           11.56-3.78,44.7-3.91,55.2,1.72,4.92-2.08,7.4-7,7.08-12.15C174.77,54.07,165.52,50.42,157.78,49.8ZM130.88.36c-14.27-.08-29.52,
           8.27-18.17,22.21,12.67-4.82,30.66-4.56,44-2.48C166.76,2.26,144-1.28,130.88.36Z`
        }, null, -1),
        wne = [Cne];

    function Nne(e, t) {
        return ne(), oe("svg", Rne, wne)
    }
    const Oo = mt(Ine, [
            ["render", Nne]
        ]),
        Lne = tt({
            components: {
                ApproveSVG: So,
                RejectSVG: Oo
            },
            props: {
                item: Object
            },
            emits: {
                acceptWasClicked: e => !0,
                rejectWasClicked: e => !0
            },
            mounted() {
                const e = this.$refs.stage,
                    t = this.item.value.size.width,
                    r = this.item.value.frames || [],
                    n = new cp(e, {
                        width: this.item.value.size.width * r.length,
                        height: this.item.value.size.height
                    }),
                    s = n.canvas.renderCanvas.getContext("2d");
                !s || r.forEach((o, c) => {
                    s.save(), s.translate(t * c, 0), n.canvas.parseLines(o).forEach(f => n.canvas.drawLine(s, f)), s.restore()
                })
            },
            methods: {
                htmlUnescape(e) {
                    return Wt.htmlUnescape(e)
                }
            }
        }),
        $ne = {
            key: 0,
            class: "context"
        },
        Pne = {
            ref: "stage",
            class: "stage"
        },
        Dne = {
            class: "name"
        },
        Mne = {
            class: "item-buttons"
        },
        kne = ["disabled"],
        xne = ["disabled"];

    function Une(e, t, r, n, s, o) {
        const c = wt("ApproveSVG"),
            u = wt("RejectSVG"),
            f = Ht("bb");
        return ne(), oe("div", {
            class: Ge(["item text", e.item.status])
        }, [e.item.context ? Ke((ne(), oe("p", $ne, null, 512)), [
            [f, e.htmlUnescape(e.item.context)]
        ]) : We("", !0), X("div", Pne, null, 512), X("p", Dne, [vr(Xe(e.$t("SUBMITTED_BY")) + " ", 1), X("span", null, Xe(e.item.name), 1)]), X("div", Mne, [X("button", {
            "aria-label": "accept",
            class: "accept",
            disabled: e.item.status !== "pending",
            onClick: t[0] || (t[0] = h => e.$emit("acceptWasClicked", e.item))
        }, [st(c, {
            class: "icon"
        })], 8, kne), X("button", {
            "aria-label": "reject",
            class: "reject",
            disabled: e.item.status === "rejected",
            onClick: t[1] || (t[1] = h => e.$emit("rejectWasClicked", e.item))
        }, [st(u, {
            class: "icon"
        })], 8, xne)])], 2)
    }
    const Fne = mt(Lne, [
            ["render", Une],
            ["__scopeId", "data-v-81255e80"]
        ]),
        Bne = tt({
            components: {
                ApproveSVG: So,
                RejectSVG: Oo
            },
            props: {
                item: Object
            },
            emits: {
                acceptWasClicked: e => !0,
                rejectWasClicked: e => !0
            },
            data() {
                return {
                    canvas: null
                }
            },
            computed: {
                itemSrc() {
                    return this.canvas ? this.canvas.renderImage() : ""
                }
            },
            mounted() {
                this.canvas = new BS(document.createElement("canvas"), this.item.value.doodle)
            },
            methods: {
                htmlUnescape(e) {
                    return Wt.htmlUnescape(e)
                }
            }
        }),
        Gne = {
            key: 0,
            class: "context"
        },
        Wne = ["src"],
        jne = {
            class: "name"
        },
        Hne = {
            class: "item-buttons"
        },
        Kne = ["disabled"],
        Vne = ["disabled"];

    function Yne(e, t, r, n, s, o) {
        const c = wt("ApproveSVG"),
            u = wt("RejectSVG"),
            f = Ht("bb");
        return ne(), oe("div", {
            class: Ge(["item text", e.item.status])
        }, [e.item.context ? Ke((ne(), oe("p", Gne, null, 512)), [
            [f, e.htmlUnescape(e.item.context)]
        ]) : We("", !0), X("div", {
            class: "stage",
            style: oo({
                background: e.item.value.background
            })
        }, [X("img", {
            src: e.itemSrc,
            alt: ""
        }, null, 8, Wne)], 4), X("p", jne, [vr(Xe(e.$t("SUBMITTED_BY")) + " ", 1), X("span", null, Xe(e.item.name), 1)]), X("div", Hne, [X("button", {
            "aria-label": "accept",
            class: "accept",
            disabled: e.item.status !== "pending",
            onClick: t[0] || (t[0] = h => e.$emit("acceptWasClicked", e.item))
        }, [st(c, {
            class: "icon"
        })], 8, Kne), X("button", {
            "aria-label": "reject",
            class: "reject",
            disabled: e.item.status === "rejected",
            onClick: t[1] || (t[1] = h => e.$emit("rejectWasClicked", e.item))
        }, [st(u, {
            class: "icon"
        })], 8, Vne)])], 2)
    }
    const qne = mt(Bne, [
            ["render", Yne],
            ["__scopeId", "data-v-be2bdc64"]
        ]),
        zne = tt({
            components: {
                ApproveSVG: So,
                RejectSVG: Oo
            },
            props: {
                item: Object
            },
            emits: {
                acceptWasClicked: e => !0,
                rejectWasClicked: e => !0
            },
            mounted() {
                const e = this.$refs.stage,
                    t = new cp(e, {
                        width: this.item.value.size.width,
                        height: this.item.value.size.height
                    }),
                    r = t.canvas.parseLines(this.item.value.lines),
                    n = t.canvas.renderCanvas.getContext("2d");
                !n || r.forEach(s => t.canvas.drawLine(n, s))
            },
            methods: {
                htmlUnescape(e) {
                    return Wt.htmlUnescape(e)
                }
            }
        }),
        Xne = {
            key: 0,
            class: "context"
        },
        Jne = {
            ref: "stage",
            class: "stage"
        },
        Zne = {
            class: "name"
        },
        Qne = {
            class: "item-buttons"
        },
        eie = ["disabled"],
        tie = ["disabled"];

    function rie(e, t, r, n, s, o) {
        const c = wt("ApproveSVG"),
            u = wt("RejectSVG"),
            f = Ht("bb");
        return ne(), oe("div", {
            class: Ge(["item text", e.item.status])
        }, [e.item.context ? Ke((ne(), oe("p", Xne, null, 512)), [
            [f, e.htmlUnescape(e.item.context)]
        ]) : We("", !0), X("div", Jne, null, 512), X("p", Zne, [vr(Xe(e.$t("SUBMITTED_BY")) + " ", 1), X("span", null, Xe(e.item.name), 1)]), X("div", Qne, [X("button", {
            "aria-label": "accept",
            class: "accept",
            disabled: e.item.status !== "pending",
            onClick: t[0] || (t[0] = h => e.$emit("acceptWasClicked", e.item))
        }, [st(c, {
            class: "icon"
        })], 8, eie), X("button", {
            "aria-label": "reject",
            class: "reject",
            disabled: e.item.status === "rejected",
            onClick: t[1] || (t[1] = h => e.$emit("rejectWasClicked", e.item))
        }, [st(u, {
            class: "icon"
        })], 8, tie)])], 2)
    }
    const nie = mt(zne, [
            ["render", rie],
            ["__scopeId", "data-v-77cd0c4a"]
        ]),
        iie = tt({
            components: {
                ApproveSVG: So,
                RejectSVG: Oo
            },
            props: {
                item: Object
            },
            emits: {
                acceptWasClicked: e => !0,
                rejectWasClicked: e => !0
            },
            methods: {
                htmlUnescape(e) {
                    return Wt.htmlUnescape(e)
                }
            }
        }),
        sie = {
            key: 0,
            class: "context"
        },
        aie = {
            class: "value"
        },
        oie = {
            class: "name"
        },
        cie = {
            class: "item-buttons"
        },
        lie = ["disabled"],
        uie = ["disabled"];

    function fie(e, t, r, n, s, o) {
        const c = wt("ApproveSVG"),
            u = wt("RejectSVG"),
            f = Ht("bb");
        return ne(), oe("div", {
            class: Ge(["item text", e.item.status])
        }, [e.item.context ? Ke((ne(), oe("p", sie, null, 512)), [
            [f, e.htmlUnescape(e.item.context)]
        ]) : We("", !0), X("p", aie, Xe(e.htmlUnescape(e.item.value)), 1), X("p", oie, [vr(Xe(e.$t("SUBMITTED_BY")) + " ", 1), X("span", null, Xe(e.item.name), 1)]), X("div", cie, [X("button", {
            "aria-label": "accept",
            class: "accept",
            disabled: e.item.status !== "pending",
            onClick: t[0] || (t[0] = h => e.$emit("acceptWasClicked", e.item))
        }, [st(c, {
            class: "icon"
        })], 8, lie), X("button", {
            "aria-label": "reject",
            class: "reject",
            disabled: e.item.status === "rejected",
            onClick: t[1] || (t[1] = h => e.$emit("rejectWasClicked", e.item))
        }, [st(u, {
            class: "icon"
        })], 8, uie)])], 2)
    }
    const die = mt(iie, [
            ["render", fie]
        ]),
        hie = tt({
            components: {
                Kicking: yne,
                AnimationItem: Fne,
                DoodleItem: qne,
                DrawingItem: nie,
                TextItem: die,
                ApproveSVG: So,
                RejectSVG: Oo
            },
            props: {
                items: {
                    default () {
                        return []
                    },
                    type: Array
                },
                isConnected: Boolean,
                hasStarted: Boolean,
                game: Object,
                room: Object
            },
            ecastProviders: {
                items: {
                    hasDeepRefs: !0,
                    fn: e => {
                        const t = [];
                        return Object.keys(e).forEach(r => {
                            const n = r.split(":");
                            if (n[0] !== "moderate") return;
                            const s = n[1];
                            if (!["animation", "doodle", "drawing", "text"].includes(s)) return;
                            const o = {
                                key: r,
                                type: s,
                                status: e[r].status,
                                name: e[r].name,
                                value: e[r].value,
                                context: ""
                            };
                            e[r].context && (e[r].context.bb ? o.context = e[r].context.bb : e[r].context.html ? o.context = Wt.htmlTagsToBBCode(e[r].context.html, [
                                ["i", "i"]
                            ]) : e[r].context.text ? o.context = e[r].context.text : typeof e[r].context == "string" && (o.context = e[r].context)), t.push(o)
                        }), t
                    }
                }
            },
            data() {
                return {}
            },
            computed: {
                hasKicking() {
                    var e;
                    return (e = this.game) != null && e.features ? this.game.features.includes("kicking") : !1
                },
                hasModeration() {
                    var e;
                    return (e = this.game) != null && e.features ? this.game.features.includes("moderation") : !0
                },
                pendingItems() {
                    return this.items.filter(e => e.status === "pending")
                }
            },
            methods: {
                onAcceptAllClick() {
                    this.updateStatus(this.pendingItems, "accepted")
                },
                onRejectAllClick() {
                    this.updateStatus(this.pendingItems, "rejected")
                },
                onAcceptClick(e) {
                    e.status === "pending" && this.updateStatus([e], "accepted")
                },
                onRejectClick(e) {
                    e.status !== "rejected" && this.updateStatus([e], "rejected")
                },
                async updateStatus(e, t) {
                    try {
                        const r = e.map(n => {
                            const s = this.$ecast.entities[n.key].val;
                            return s.status = t, this.$ecast.updateObject(n.key, s)
                        });
                        await Promise.all(r)
                    } catch (r) {
                        console.error("[Moderation] unable to update moderation entities", r)
                    }
                    try {
                        await this.$ecast.mail(1, {
                            id: e.map(r => r.key),
                            status: t
                        })
                    } catch (r) {
                        console.error("[Moderation] unable to notify host by mail", r)
                    }
                    e.forEach(() => {
                        is.itemModerated(this.room.appTag, t === "rejected")
                    }), this.$syncEcast()
                }
            }
        }),
        pie = e => (ta("data-v-1d96aa57"), e = e(), ra(), e),
        gie = {
            class: "constrain"
        },
        mie = {
            class: "top"
        },
        vie = {
            class: "alls"
        },
        Eie = ["disabled"],
        _ie = ["disabled"],
        yie = {
            key: 0,
            class: "empty"
        },
        bie = {
            class: "empty-text"
        },
        Tie = pie(() => X("div", {
            class: "loading disabled"
        }, null, -1));

    function Sie(e, t, r, n, s, o) {
        var P, x;
        const c = wt("Kicking"),
            u = wt("ApproveSVG"),
            f = wt("RejectSVG"),
            h = wt("AnimationItem"),
            g = wt("DoodleItem"),
            _ = wt("DrawingItem"),
            b = wt("TextItem"),
            C = Ht("t");
        return ne(), oe("div", gie, [X("div", mie, [X("p", null, [X("span", null, Xe(e.$t("FORM.GAME")) + ":", 1), vr(Xe((x = (P = e.game) == null ? void 0 : P.name) != null ? x : "???"), 1)])]), e.hasKicking ? (ne(), Yr(c, {
            key: 0,
            class: Ge({
                expand: !e.hasModeration
            }),
            "has-started": e.hasStarted
        }, null, 8, ["class", "has-started"])) : We("", !0), e.hasModeration ? (ne(), oe(At, {
            key: 1
        }, [X("div", vie, [X("button", {
            class: "all accept",
            disabled: !e.pendingItems.length,
            onClick: t[0] || (t[0] = (...U) => e.onAcceptAllClick && e.onAcceptAllClick(...U))
        }, [st(u, {
            class: "icon"
        }), vr(" " + Xe(e.$t("ACTION.APPROVE_ALL")), 1)], 8, Eie), X("button", {
            class: "all reject",
            disabled: !e.pendingItems.length,
            onClick: t[1] || (t[1] = (...U) => e.onRejectAllClick && e.onRejectAllClick(...U))
        }, [st(f, {
            class: "icon"
        }), vr(" " + Xe(e.$t("ACTION.REJECT_ALL")), 1)], 8, _ie)]), e.items.length ? (ne(), Yr(EP, {
            key: 1,
            name: "items",
            tag: "div",
            class: "items"
        }, {
            default: vh(() => [(ne(!0), oe(At, null, lo(e.items, U => (ne(), oe(At, null, [U.type === "animation" ? (ne(), Yr(h, {
                key: `animation-${U.key}`,
                item: U,
                onAcceptWasClicked: e.onAcceptClick,
                onRejectWasClicked: e.onRejectClick
            }, null, 8, ["item", "onAcceptWasClicked", "onRejectWasClicked"])) : U.type === "doodle" ? (ne(), Yr(g, {
                key: `doodle-${U.key}`,
                item: U,
                onAcceptWasClicked: e.onAcceptClick,
                onRejectWasClicked: e.onRejectClick
            }, null, 8, ["item", "onAcceptWasClicked", "onRejectWasClicked"])) : U.type === "drawing" ? (ne(), Yr(_, {
                key: `drawing-${U.key}`,
                item: U,
                onAcceptWasClicked: e.onAcceptClick,
                onRejectWasClicked: e.onRejectClick
            }, null, 8, ["item", "onAcceptWasClicked", "onRejectWasClicked"])) : U.type === "text" ? (ne(), Yr(b, {
                key: `text-${U.key}`,
                item: U,
                onAcceptWasClicked: e.onAcceptClick,
                onRejectWasClicked: e.onRejectClick
            }, null, 8, ["item", "onAcceptWasClicked", "onRejectWasClicked"])) : We("", !0)], 64))), 256))]),
            _: 1
        })) : (ne(), oe("div", yie, [Ke(X("p", bie, null, 512), [
            [C, "STATUS.WAITING_FOR_SUBMISSIONS"]
        ]), Tie]))], 64)) : We("", !0)])
    }
    const Oie = mt(hie, [
            ["render", Sie],
            ["__scopeId", "data-v-1d96aa57"]
        ]),
        Aie = tt({
            name: "@moderator",
            components: {
                Connect: nne,
                Moderate: Oie
            },
            props: {
                items: {
                    default: () => [],
                    type: Array
                }
            },
            setup() {
                return {
                    fatalError: ui(yo.fatal.error)
                }
            },
            data() {
                return {
                    isConnected: !1,
                    hasConnected: !1,
                    hasStarted: !1,
                    theme: Ct.get("preference:theme") || "device",
                    room: null
                }
            },
            computed: {
                ecastValues() {
                    return this.$ecastValues ? this.$ecastValues : null
                },
                classes() {
                    return [`locale-${this.$i18n.locale}`, `theme-${this.theme}`]
                },
                game() {
                    var e;
                    return this.room && (e = xS(this.room.appTag)) != null ? e : null
                },
                shouldShowFatal() {
                    var e, t;
                    return (t = (e = this.fatalError) == null ? void 0 : e.hasCrashed) != null ? t : !1
                }
            },
            beforeMount() {
                window.addEventListener("storage", this.onStorageChange)
            },
            beforeUnmount() {
                window.removeEventListener("storage", this.onStorageChange)
            },
            methods: {
                onStorageChange(e) {
                    e.key === "tv:preference:theme" && (this.theme = Ct.get("preference:theme") || "device")
                },
                onConnectionDidChange(e) {
                    !this.hasConnected && e && (this.hasConnected = !0, this.$ecast.on("room/exit", () => {
                        this.onRoomExit()
                    }), this.$ecast.on("socketClose", () => {
                        this.onSocketClose()
                    }), this.$ecast.on("room/lock", () => {
                        this.onRoomLock()
                    }), this.hasStarted = this.$ecastRoom.locked), this.isConnected = e
                },
                onRoomDidChange(e) {
                    this.room = e
                },
                async onRoomExit() {
                    Ct.remove("moderator-code"), await this.$showModal("Error", {
                        text: this.$t("ERROR.ROOM_DISCONNECTED"),
                        subtext: this.$t("ERROR.ROOM_DESTROYED"),
                        dismissText: this.$t("ACTION.OK")
                    }), window.location.reload()
                },
                async onSocketClose() {
                    Ct.remove("moderator-code"), await this.$showModal("Error", {
                        text: this.$t("ERROR.DISCONNECTED"),
                        dismissText: this.$t("ACTION.OK")
                    }), window.location.reload()
                },
                onRoomLock() {
                    this.hasStarted = !0
                }
            }
        }),
        Iie = e => (ta("data-v-fd5cfd89"), e = e(), ra(), e),
        Rie = Iie(() => X("header", {
            class: "header"
        }, [X("div", {
            class: "logo"
        })], -1));

    function Cie(e, t, r, n, s, o) {
        const c = wt("Fatal"),
            u = wt("Connect"),
            f = wt("Moderate"),
            h = wt("Modal");
        return e.shouldShowFatal ? (ne(), Yr(c, {
            key: 0
        })) : (ne(), oe("div", {
            key: 1,
            class: Ge(["jbg schemable moderator", e.classes])
        }, [Rie, e.hasConnected ? (ne(), Yr(f, Ih({
            key: 1
        }, e.ecastValues, {
            game: e.game,
            room: e.room,
            "is-connected": e.isConnected,
            "has-started": e.hasStarted
        }), null, 16, ["game", "room", "is-connected", "has-started"])) : (ne(), Yr(u, {
            key: 0,
            game: e.game,
            room: e.room,
            onConnectionDidChange: e.onConnectionDidChange,
            onRoomDidChange: e.onRoomDidChange
        }, null, 8, ["game", "room", "onConnectionDidChange", "onRoomDidChange"])), st(h)], 2))
    }
    const wie = mt(Aie, [
        ["render", Cie],
        ["__scopeId", "data-v-fd5cfd89"]
    ]);
    window.tv.register({
        mount: e => {
            var s, o, c;
            let t = $P(wie);
            t.config.unwrapInjectedRef = !0;
            let r;
            (s = e.room) != null && s.locale && (r = e.room.locale), (c = (o = e.match) == null ? void 0 : o.params) != null && c.locale && (r = e.match.params.locale), xs.set(r);
            const n = QD({
                fallbackLocale: "en",
                locale: xs.locale,
                messages: xs.mergeMessages(s4, Hre, OH)
            });
            return t.use(Dq), t.use(aQ), t.use(rte), t.use(n), t.use($te, {
                i18n: n
            }), t.use(tre), t.mount("#app"), () => {
                t.unmount(), t = null
            }
        },
        info: e => ({
            tag: "@moderator",
            version: e.version,
            type: e.type,
            branch: e.branch
        })
    })
});
export default Nie();
//# sourceMappingURL=bee362d9.js.map