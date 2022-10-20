var rN = Object.defineProperty;
var nN = (e, t, r) => t in e ? rN(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r;
var iN = (e, t) => () => (t || e((t = {
    exports: {}
}).exports, t), t.exports);
var ge = (e, t, r) => (nN(e, typeof t != "symbol" ? t + "" : t, r), r);
var Wne = iN((Vne, wS) => {
    (function() {
        const t = document.createElement("link").relList;
        if (t && t.supports && t.supports("modulepreload")) return;
        for (const s of document.querySelectorAll('link[rel="modulepreload"]')) n(s);
        new MutationObserver(s => {
            for (const o of s)
                if (o.type === "childList")
                    for (const l of o.addedNodes) l.tagName === "LINK" && l.rel === "modulepreload" && n(l)
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

    function uh(e, t) {
        const r = Object.create(null),
            n = e.split(",");
        for (let s = 0; s < n.length; s++) r[n[s]] = !0;
        return t ? s => !!r[s.toLowerCase()] : s => !!r[s]
    }
    const sN = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
        aN = uh(sN);

    function Hb(e) {
        return !!e || e === ""
    }

    function ic(e) {
        if (ke(e)) {
            const t = {};
            for (let r = 0; r < e.length; r++) {
                const n = e[r],
                    s = Ht(n) ? cN(n) : ic(n);
                if (s)
                    for (const o in s) t[o] = s[o]
            }
            return t
        } else {
            if (Ht(e)) return e;
            if (mt(e)) return e
        }
    }
    const oN = /;(?![^(]*\))/g,
        lN = /:(.+)/;

    function cN(e) {
        const t = {};
        return e.split(oN).forEach(r => {
            if (r) {
                const n = r.split(lN);
                n.length > 1 && (t[n[0].trim()] = n[1].trim())
            }
        }), t
    }

    function Me(e) {
        let t = "";
        if (Ht(e)) t = e;
        else if (ke(e))
            for (let r = 0; r < e.length; r++) {
                const n = Me(e[r]);
                n && (t += n + " ")
            } else if (mt(e))
                for (const r in e) e[r] && (t += r + " ");
        return t.trim()
    }

    function uN(e, t) {
        if (e.length !== t.length) return !1;
        let r = !0;
        for (let n = 0; r && n < e.length; n++) r = sc(e[n], t[n]);
        return r
    }

    function sc(e, t) {
        if (e === t) return !0;
        let r = pv(e),
            n = pv(t);
        if (r || n) return r && n ? e.getTime() === t.getTime() : !1;
        if (r = Ya(e), n = Ya(t), r || n) return e === t;
        if (r = ke(e), n = ke(t), r || n) return r && n ? uN(e, t) : !1;
        if (r = mt(e), n = mt(t), r || n) {
            if (!r || !n) return !1;
            const s = Object.keys(e).length,
                o = Object.keys(t).length;
            if (s !== o) return !1;
            for (const l in e) {
                const u = e.hasOwnProperty(l),
                    f = t.hasOwnProperty(l);
                if (u && !f || !u && f || !sc(e[l], t[l])) return !1
            }
        }
        return String(e) === String(t)
    }

    function Vb(e, t) {
        return e.findIndex(r => sc(r, t))
    }
    const _t = e => Ht(e) ? e : e == null ? "" : ke(e) || mt(e) && (e.toString === qb || !He(e.toString)) ? JSON.stringify(e, Kb, 2) : String(e),
        Kb = (e, t) => t && t.__v_isRef ? Kb(e, t.value) : xs(t) ? {
            [`Map(${t.size})`]: [...t.entries()].reduce((r, [n, s]) => (r[`${n} =>`] = s, r), {})
        } : oc(t) ? {
            [`Set(${t.size})`]: [...t.values()]
        } : mt(t) && !ke(t) && !zb(t) ? String(t) : t,
        gt = {},
        ks = [],
        cn = () => {},
        fN = () => !1,
        dN = /^on[^a-z]/,
        ac = e => dN.test(e),
        fh = e => e.startsWith("onUpdate:"),
        tr = Object.assign,
        dh = (e, t) => {
            const r = e.indexOf(t);
            r > -1 && e.splice(r, 1)
        },
        hN = Object.prototype.hasOwnProperty,
        Qe = (e, t) => hN.call(e, t),
        ke = Array.isArray,
        xs = e => oo(e) === "[object Map]",
        oc = e => oo(e) === "[object Set]",
        pv = e => oo(e) === "[object Date]",
        He = e => typeof e == "function",
        Ht = e => typeof e == "string",
        Ya = e => typeof e == "symbol",
        mt = e => e !== null && typeof e == "object",
        Yb = e => mt(e) && He(e.then) && He(e.catch),
        qb = Object.prototype.toString,
        oo = e => qb.call(e),
        pN = e => oo(e).slice(8, -1),
        zb = e => oo(e) === "[object Object]",
        hh = e => Ht(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
        Il = uh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
        lc = e => {
            const t = Object.create(null);
            return r => t[r] || (t[r] = e(r))
        },
        gN = /-(\w)/g,
        wn = lc(e => e.replace(gN, (t, r) => r ? r.toUpperCase() : "")),
        mN = /\B([A-Z])/g,
        as = lc(e => e.replace(mN, "-$1").toLowerCase()),
        cc = lc(e => e.charAt(0).toUpperCase() + e.slice(1)),
        df = lc(e => e ? `on${cc(e)}` : ""),
        qa = (e, t) => !Object.is(e, t),
        Al = (e, t) => {
            for (let r = 0; r < e.length; r++) e[r](t)
        },
        Ml = (e, t, r) => {
            Object.defineProperty(e, t, {
                configurable: !0,
                enumerable: !1,
                value: r
            })
        },
        Fl = e => {
            const t = parseFloat(e);
            return isNaN(t) ? e : t
        };
    let gv;
    const vN = () => gv || (gv = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
    let bn;
    class Xb {
        constructor(t = !1) {
            this.active = !0, this.effects = [], this.cleanups = [], !t && bn && (this.parent = bn, this.index = (bn.scopes || (bn.scopes = [])).push(this) - 1)
        }
        run(t) {
            if (this.active) {
                const r = bn;
                try {
                    return bn = this, t()
                } finally {
                    bn = r
                }
            }
        }
        on() {
            bn = this
        }
        off() {
            bn = this.parent
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

    function yN(e) {
        return new Xb(e)
    }

    function _N(e, t = bn) {
        t && t.active && t.effects.push(e)
    }
    const ph = e => {
            const t = new Set(e);
            return t.w = 0, t.n = 0, t
        },
        Jb = e => (e.w & fi) > 0,
        Zb = e => (e.n & fi) > 0,
        bN = ({
            deps: e
        }) => {
            if (e.length)
                for (let t = 0; t < e.length; t++) e[t].w |= fi
        },
        EN = e => {
            const {
                deps: t
            } = e;
            if (t.length) {
                let r = 0;
                for (let n = 0; n < t.length; n++) {
                    const s = t[n];
                    Jb(s) && !Zb(s) ? s.delete(e) : t[r++] = s, s.w &= ~fi, s.n &= ~fi
                }
                t.length = r
            }
        },
        sd = new WeakMap;
    let ka = 0,
        fi = 1;
    const ad = 30;
    let an;
    const Ji = Symbol(""),
        od = Symbol("");
    class gh {
        constructor(t, r = null, n) {
            this.fn = t, this.scheduler = r, this.active = !0, this.deps = [], this.parent = void 0, _N(this, n)
        }
        run() {
            if (!this.active) return this.fn();
            let t = an,
                r = li;
            for (; t;) {
                if (t === this) return;
                t = t.parent
            }
            try {
                return this.parent = an, an = this, li = !0, fi = 1 << ++ka, ka <= ad ? bN(this) : mv(this), this.fn()
            } finally {
                ka <= ad && EN(this), fi = 1 << --ka, an = this.parent, li = r, this.parent = void 0, this.deferStop && this.stop()
            }
        }
        stop() {
            an === this ? this.deferStop = !0 : this.active && (mv(this), this.onStop && this.onStop(), this.active = !1)
        }
    }

    function mv(e) {
        const {
            deps: t
        } = e;
        if (t.length) {
            for (let r = 0; r < t.length; r++) t[r].delete(e);
            t.length = 0
        }
    }
    let li = !0;
    const Qb = [];

    function ra() {
        Qb.push(li), li = !1
    }

    function na() {
        const e = Qb.pop();
        li = e === void 0 ? !0 : e
    }

    function xr(e, t, r) {
        if (li && an) {
            let n = sd.get(e);
            n || sd.set(e, n = new Map);
            let s = n.get(r);
            s || n.set(r, s = ph()), eE(s)
        }
    }

    function eE(e, t) {
        let r = !1;
        ka <= ad ? Zb(e) || (e.n |= fi, r = !Jb(e)) : r = !e.has(an), r && (e.add(an), an.deps.push(e))
    }

    function Un(e, t, r, n, s, o) {
        const l = sd.get(e);
        if (!l) return;
        let u = [];
        if (t === "clear") u = [...l.values()];
        else if (r === "length" && ke(e)) l.forEach((f, h) => {
            (h === "length" || h >= n) && u.push(f)
        });
        else switch (r !== void 0 && u.push(l.get(r)), t) {
            case "add":
                ke(e) ? hh(r) && u.push(l.get("length")) : (u.push(l.get(Ji)), xs(e) && u.push(l.get(od)));
                break;
            case "delete":
                ke(e) || (u.push(l.get(Ji)), xs(e) && u.push(l.get(od)));
                break;
            case "set":
                xs(e) && u.push(l.get(Ji));
                break
        }
        if (u.length === 1) u[0] && ld(u[0]);
        else {
            const f = [];
            for (const h of u) h && f.push(...h);
            ld(ph(f))
        }
    }

    function ld(e, t) {
        const r = ke(e) ? e : [...e];
        for (const n of r) n.computed && vv(n);
        for (const n of r) n.computed || vv(n)
    }

    function vv(e, t) {
        (e !== an || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run())
    }
    const TN = uh("__proto__,__v_isRef,__isVue"),
        tE = new Set(Object.getOwnPropertyNames(Symbol).filter(e => e !== "arguments" && e !== "caller").map(e => Symbol[e]).filter(Ya)),
        SN = mh(),
        ON = mh(!1, !0),
        wN = mh(!0),
        yv = CN();

    function CN() {
        const e = {};
        return ["includes", "indexOf", "lastIndexOf"].forEach(t => {
            e[t] = function(...r) {
                const n = at(this);
                for (let o = 0, l = this.length; o < l; o++) xr(n, "get", o + "");
                const s = n[t](...r);
                return s === -1 || s === !1 ? n[t](...r.map(at)) : s
            }
        }), ["push", "pop", "shift", "unshift", "splice"].forEach(t => {
            e[t] = function(...r) {
                ra();
                const n = at(this)[t].apply(this, r);
                return na(), n
            }
        }), e
    }

    function mh(e = !1, t = !1) {
        return function(n, s, o) {
            if (s === "__v_isReactive") return !e;
            if (s === "__v_isReadonly") return e;
            if (s === "__v_isShallow") return t;
            if (s === "__v_raw" && o === (e ? t ? GN : aE : t ? sE : iE).get(n)) return n;
            const l = ke(n);
            if (!e && l && Qe(yv, s)) return Reflect.get(yv, s, o);
            const u = Reflect.get(n, s, o);
            return (Ya(s) ? tE.has(s) : TN(s)) || (e || xr(n, "get", s), t) ? u : Qt(u) ? l && hh(s) ? u : u.value : mt(u) ? e ? oE(u) : Bn(u) : u
        }
    }
    const $N = rE(),
        IN = rE(!0);

    function rE(e = !1) {
        return function(r, n, s, o) {
            let l = r[n];
            if (qs(l) && Qt(l) && !Qt(s)) return !1;
            if (!e && (!Ul(s) && !qs(s) && (l = at(l), s = at(s)), !ke(r) && Qt(l) && !Qt(s))) return l.value = s, !0;
            const u = ke(r) && hh(n) ? Number(n) < r.length : Qe(r, n),
                f = Reflect.set(r, n, s, o);
            return r === at(o) && (u ? qa(s, l) && Un(r, "set", n, s) : Un(r, "add", n, s)), f
        }
    }

    function AN(e, t) {
        const r = Qe(e, t);
        e[t];
        const n = Reflect.deleteProperty(e, t);
        return n && r && Un(e, "delete", t, void 0), n
    }

    function RN(e, t) {
        const r = Reflect.has(e, t);
        return (!Ya(t) || !tE.has(t)) && xr(e, "has", t), r
    }

    function NN(e) {
        return xr(e, "iterate", ke(e) ? "length" : Ji), Reflect.ownKeys(e)
    }
    const nE = {
            get: SN,
            set: $N,
            deleteProperty: AN,
            has: RN,
            ownKeys: NN
        },
        LN = {
            get: wN,
            set(e, t) {
                return !0
            },
            deleteProperty(e, t) {
                return !0
            }
        },
        PN = tr({}, nE, {
            get: ON,
            set: IN
        }),
        vh = e => e,
        uc = e => Reflect.getPrototypeOf(e);

    function cl(e, t, r = !1, n = !1) {
        e = e.__v_raw;
        const s = at(e),
            o = at(t);
        r || (t !== o && xr(s, "get", t), xr(s, "get", o));
        const {
            has: l
        } = uc(s), u = n ? vh : r ? bh : za;
        if (l.call(s, t)) return u(e.get(t));
        if (l.call(s, o)) return u(e.get(o));
        e !== s && e.get(t)
    }

    function ul(e, t = !1) {
        const r = this.__v_raw,
            n = at(r),
            s = at(e);
        return t || (e !== s && xr(n, "has", e), xr(n, "has", s)), e === s ? r.has(e) : r.has(e) || r.has(s)
    }

    function fl(e, t = !1) {
        return e = e.__v_raw, !t && xr(at(e), "iterate", Ji), Reflect.get(e, "size", e)
    }

    function _v(e) {
        e = at(e);
        const t = at(this);
        return uc(t).has.call(t, e) || (t.add(e), Un(t, "add", e, e)), this
    }

    function bv(e, t) {
        t = at(t);
        const r = at(this),
            {
                has: n,
                get: s
            } = uc(r);
        let o = n.call(r, e);
        o || (e = at(e), o = n.call(r, e));
        const l = s.call(r, e);
        return r.set(e, t), o ? qa(t, l) && Un(r, "set", e, t) : Un(r, "add", e, t), this
    }

    function Ev(e) {
        const t = at(this),
            {
                has: r,
                get: n
            } = uc(t);
        let s = r.call(t, e);
        s || (e = at(e), s = r.call(t, e)), n && n.call(t, e);
        const o = t.delete(e);
        return s && Un(t, "delete", e, void 0), o
    }

    function Tv() {
        const e = at(this),
            t = e.size !== 0,
            r = e.clear();
        return t && Un(e, "clear", void 0, void 0), r
    }

    function dl(e, t) {
        return function(n, s) {
            const o = this,
                l = o.__v_raw,
                u = at(l),
                f = t ? vh : e ? bh : za;
            return !e && xr(u, "iterate", Ji), l.forEach((h, g) => n.call(s, f(h), f(g), o))
        }
    }

    function hl(e, t, r) {
        return function(...n) {
            const s = this.__v_raw,
                o = at(s),
                l = xs(o),
                u = e === "entries" || e === Symbol.iterator && l,
                f = e === "keys" && l,
                h = s[e](...n),
                g = r ? vh : t ? bh : za;
            return !t && xr(o, "iterate", f ? od : Ji), {
                next() {
                    const {
                        value: y,
                        done: E
                    } = h.next();
                    return E ? {
                        value: y,
                        done: E
                    } : {
                        value: u ? [g(y[0]), g(y[1])] : g(y),
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

    function kN() {
        const e = {
                get(o) {
                    return cl(this, o)
                },
                get size() {
                    return fl(this)
                },
                has: ul,
                add: _v,
                set: bv,
                delete: Ev,
                clear: Tv,
                forEach: dl(!1, !1)
            },
            t = {
                get(o) {
                    return cl(this, o, !1, !0)
                },
                get size() {
                    return fl(this)
                },
                has: ul,
                add: _v,
                set: bv,
                delete: Ev,
                clear: Tv,
                forEach: dl(!1, !0)
            },
            r = {
                get(o) {
                    return cl(this, o, !0)
                },
                get size() {
                    return fl(this, !0)
                },
                has(o) {
                    return ul.call(this, o, !0)
                },
                add: Zn("add"),
                set: Zn("set"),
                delete: Zn("delete"),
                clear: Zn("clear"),
                forEach: dl(!0, !1)
            },
            n = {
                get(o) {
                    return cl(this, o, !0, !0)
                },
                get size() {
                    return fl(this, !0)
                },
                has(o) {
                    return ul.call(this, o, !0)
                },
                add: Zn("add"),
                set: Zn("set"),
                delete: Zn("delete"),
                clear: Zn("clear"),
                forEach: dl(!0, !0)
            };
        return ["keys", "values", "entries", Symbol.iterator].forEach(o => {
            e[o] = hl(o, !1, !1), r[o] = hl(o, !0, !1), t[o] = hl(o, !1, !0), n[o] = hl(o, !0, !0)
        }), [e, r, t, n]
    }
    const [xN, DN, MN, FN] = kN();

    function yh(e, t) {
        const r = t ? e ? FN : MN : e ? DN : xN;
        return (n, s, o) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? n : Reflect.get(Qe(r, s) && s in n ? r : n, s, o)
    }
    const UN = {
            get: yh(!1, !1)
        },
        BN = {
            get: yh(!1, !0)
        },
        jN = {
            get: yh(!0, !1)
        },
        iE = new WeakMap,
        sE = new WeakMap,
        aE = new WeakMap,
        GN = new WeakMap;

    function WN(e) {
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

    function HN(e) {
        return e.__v_skip || !Object.isExtensible(e) ? 0 : WN(pN(e))
    }

    function Bn(e) {
        return qs(e) ? e : _h(e, !1, nE, UN, iE)
    }

    function VN(e) {
        return _h(e, !1, PN, BN, sE)
    }

    function oE(e) {
        return _h(e, !0, LN, jN, aE)
    }

    function _h(e, t, r, n, s) {
        if (!mt(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
        const o = s.get(e);
        if (o) return o;
        const l = HN(e);
        if (l === 0) return e;
        const u = new Proxy(e, l === 2 ? n : r);
        return s.set(e, u), u
    }

    function Ds(e) {
        return qs(e) ? Ds(e.__v_raw) : !!(e && e.__v_isReactive)
    }

    function qs(e) {
        return !!(e && e.__v_isReadonly)
    }

    function Ul(e) {
        return !!(e && e.__v_isShallow)
    }

    function lE(e) {
        return Ds(e) || qs(e)
    }

    function at(e) {
        const t = e && e.__v_raw;
        return t ? at(t) : e
    }

    function cE(e) {
        return Ml(e, "__v_skip", !0), e
    }
    const za = e => mt(e) ? Bn(e) : e,
        bh = e => mt(e) ? oE(e) : e;

    function uE(e) {
        li && an && (e = at(e), eE(e.dep || (e.dep = ph())))
    }

    function fE(e, t) {
        e = at(e), e.dep && ld(e.dep)
    }

    function Qt(e) {
        return !!(e && e.__v_isRef === !0)
    }

    function on(e) {
        return dE(e, !1)
    }

    function KN(e) {
        return dE(e, !0)
    }

    function dE(e, t) {
        return Qt(e) ? e : new YN(e, t)
    }
    class YN {
        constructor(t, r) {
            this.__v_isShallow = r, this.dep = void 0, this.__v_isRef = !0, this._rawValue = r ? t : at(t), this._value = r ? t : za(t)
        }
        get value() {
            return uE(this), this._value
        }
        set value(t) {
            const r = this.__v_isShallow || Ul(t) || qs(t);
            t = r ? t : at(t), qa(t, this._rawValue) && (this._rawValue = t, this._value = r ? t : za(t), fE(this))
        }
    }

    function qN(e) {
        return Qt(e) ? e.value : e
    }
    const zN = {
        get: (e, t, r) => qN(Reflect.get(e, t, r)),
        set: (e, t, r, n) => {
            const s = e[t];
            return Qt(s) && !Qt(r) ? (s.value = r, !0) : Reflect.set(e, t, r, n)
        }
    };

    function hE(e) {
        return Ds(e) ? e : new Proxy(e, zN)
    }
    var pE;
    class XN {
        constructor(t, r, n, s) {
            this._setter = r, this.dep = void 0, this.__v_isRef = !0, this[pE] = !1, this._dirty = !0, this.effect = new gh(t, () => {
                this._dirty || (this._dirty = !0, fE(this))
            }), this.effect.computed = this, this.effect.active = this._cacheable = !s, this.__v_isReadonly = n
        }
        get value() {
            const t = at(this);
            return uE(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value
        }
        set value(t) {
            this._setter(t)
        }
    }
    pE = "__v_isReadonly";

    function JN(e, t, r = !1) {
        let n, s;
        const o = He(e);
        return o ? (n = e, s = cn) : (n = e.get, s = e.set), new XN(n, s, o || !s, r)
    }

    function ci(e, t, r, n) {
        let s;
        try {
            s = n ? e(...n) : e()
        } catch (o) {
            fc(o, t, r)
        }
        return s
    }

    function Xr(e, t, r, n) {
        if (He(e)) {
            const o = ci(e, t, r, n);
            return o && Yb(o) && o.catch(l => {
                fc(l, t, r)
            }), o
        }
        const s = [];
        for (let o = 0; o < e.length; o++) s.push(Xr(e[o], t, r, n));
        return s
    }

    function fc(e, t, r, n = !0) {
        const s = t ? t.vnode : null;
        if (t) {
            let o = t.parent;
            const l = t.proxy,
                u = r;
            for (; o;) {
                const h = o.ec;
                if (h) {
                    for (let g = 0; g < h.length; g++)
                        if (h[g](e, l, u) === !1) return
                }
                o = o.parent
            }
            const f = t.appContext.config.errorHandler;
            if (f) {
                ci(f, null, 10, [e, l, u]);
                return
            }
        }
        ZN(e, r, s, n)
    }

    function ZN(e, t, r, n = !0) {
        console.error(e)
    }
    let Xa = !1,
        cd = !1;
    const ar = [];
    let On = 0;
    const Ms = [];
    let Dn = null,
        Hi = 0;
    const gE = Promise.resolve();
    let Eh = null;

    function QN(e) {
        const t = Eh || gE;
        return e ? t.then(this ? e.bind(this) : e) : t
    }

    function eL(e) {
        let t = On + 1,
            r = ar.length;
        for (; t < r;) {
            const n = t + r >>> 1;
            Ja(ar[n]) < e ? t = n + 1 : r = n
        }
        return t
    }

    function Th(e) {
        (!ar.length || !ar.includes(e, Xa && e.allowRecurse ? On + 1 : On)) && (e.id == null ? ar.push(e) : ar.splice(eL(e.id), 0, e), mE())
    }

    function mE() {
        !Xa && !cd && (cd = !0, Eh = gE.then(yE))
    }

    function tL(e) {
        const t = ar.indexOf(e);
        t > On && ar.splice(t, 1)
    }

    function rL(e) {
        ke(e) ? Ms.push(...e) : (!Dn || !Dn.includes(e, e.allowRecurse ? Hi + 1 : Hi)) && Ms.push(e), mE()
    }

    function Sv(e, t = Xa ? On + 1 : 0) {
        for (; t < ar.length; t++) {
            const r = ar[t];
            r && r.pre && (ar.splice(t, 1), t--, r())
        }
    }

    function vE(e) {
        if (Ms.length) {
            const t = [...new Set(Ms)];
            if (Ms.length = 0, Dn) {
                Dn.push(...t);
                return
            }
            for (Dn = t, Dn.sort((r, n) => Ja(r) - Ja(n)), Hi = 0; Hi < Dn.length; Hi++) Dn[Hi]();
            Dn = null, Hi = 0
        }
    }
    const Ja = e => e.id == null ? 1 / 0 : e.id,
        nL = (e, t) => {
            const r = Ja(e) - Ja(t);
            if (r === 0) {
                if (e.pre && !t.pre) return -1;
                if (t.pre && !e.pre) return 1
            }
            return r
        };

    function yE(e) {
        cd = !1, Xa = !0, ar.sort(nL);
        const t = cn;
        try {
            for (On = 0; On < ar.length; On++) {
                const r = ar[On];
                r && r.active !== !1 && ci(r, null, 14)
            }
        } finally {
            On = 0, ar.length = 0, vE(), Xa = !1, Eh = null, (ar.length || Ms.length) && yE()
        }
    }

    function iL(e, t, ...r) {
        if (e.isUnmounted) return;
        const n = e.vnode.props || gt;
        let s = r;
        const o = t.startsWith("update:"),
            l = o && t.slice(7);
        if (l && l in n) {
            const g = `${l==="modelValue"?"model":l}Modifiers`,
                {
                    number: y,
                    trim: E
                } = n[g] || gt;
            E && (s = r.map(C => C.trim())), y && (s = r.map(Fl))
        }
        let u, f = n[u = df(t)] || n[u = df(wn(t))];
        !f && o && (f = n[u = df(as(t))]), f && Xr(f, e, 6, s);
        const h = n[u + "Once"];
        if (h) {
            if (!e.emitted) e.emitted = {};
            else if (e.emitted[u]) return;
            e.emitted[u] = !0, Xr(h, e, 6, s)
        }
    }

    function _E(e, t, r = !1) {
        const n = t.emitsCache,
            s = n.get(e);
        if (s !== void 0) return s;
        const o = e.emits;
        let l = {},
            u = !1;
        if (!He(e)) {
            const f = h => {
                const g = _E(h, t, !0);
                g && (u = !0, tr(l, g))
            };
            !r && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f)
        }
        return !o && !u ? (mt(e) && n.set(e, null), null) : (ke(o) ? o.forEach(f => l[f] = null) : tr(l, o), mt(e) && n.set(e, l), l)
    }

    function dc(e, t) {
        return !e || !ac(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Qe(e, t[0].toLowerCase() + t.slice(1)) || Qe(e, as(t)) || Qe(e, t))
    }
    let or = null,
        hc = null;

    function Bl(e) {
        const t = or;
        return or = e, hc = e && e.type.__scopeId || null, t
    }

    function pc(e) {
        hc = e
    }

    function gc() {
        hc = null
    }

    function Fs(e, t = or, r) {
        if (!t || e._n) return e;
        const n = (...s) => {
            n._d && kv(-1);
            const o = Bl(t),
                l = e(...s);
            return Bl(o), n._d && kv(1), l
        };
        return n._n = !0, n._c = !0, n._d = !0, n
    }

    function hf(e) {
        const {
            type: t,
            vnode: r,
            proxy: n,
            withProxy: s,
            props: o,
            propsOptions: [l],
            slots: u,
            attrs: f,
            emit: h,
            render: g,
            renderCache: y,
            data: E,
            setupState: C,
            ctx: P,
            inheritAttrs: M
        } = e;
        let B, $;
        const V = Bl(e);
        try {
            if (r.shapeFlag & 4) {
                const G = s || n;
                B = Tn(g.call(G, G, y, o, C, E, P)), $ = f
            } else {
                const G = t;
                B = Tn(G.length > 1 ? G(o, {
                    attrs: f,
                    slots: u,
                    emit: h
                }) : G(o, null)), $ = t.props ? f : sL(f)
            }
        } catch (G) {
            Fa.length = 0, fc(G, e, 1), B = nt(Jr)
        }
        let q = B;
        if ($ && M !== !1) {
            const G = Object.keys($),
                {
                    shapeFlag: j
                } = q;
            G.length && j & 7 && (l && G.some(fh) && ($ = aL($, l)), q = di(q, $))
        }
        return r.dirs && (q = di(q), q.dirs = q.dirs ? q.dirs.concat(r.dirs) : r.dirs), r.transition && (q.transition = r.transition), B = q, Bl(V), B
    }
    const sL = e => {
            let t;
            for (const r in e)(r === "class" || r === "style" || ac(r)) && ((t || (t = {}))[r] = e[r]);
            return t
        },
        aL = (e, t) => {
            const r = {};
            for (const n in e)(!fh(n) || !(n.slice(9) in t)) && (r[n] = e[n]);
            return r
        };

    function oL(e, t, r) {
        const {
            props: n,
            children: s,
            component: o
        } = e, {
            props: l,
            children: u,
            patchFlag: f
        } = t, h = o.emitsOptions;
        if (t.dirs || t.transition) return !0;
        if (r && f >= 0) {
            if (f & 1024) return !0;
            if (f & 16) return n ? Ov(n, l, h) : !!l;
            if (f & 8) {
                const g = t.dynamicProps;
                for (let y = 0; y < g.length; y++) {
                    const E = g[y];
                    if (l[E] !== n[E] && !dc(h, E)) return !0
                }
            }
        } else return (s || u) && (!u || !u.$stable) ? !0 : n === l ? !1 : n ? l ? Ov(n, l, h) : !0 : !!l;
        return !1
    }

    function Ov(e, t, r) {
        const n = Object.keys(t);
        if (n.length !== Object.keys(e).length) return !0;
        for (let s = 0; s < n.length; s++) {
            const o = n[s];
            if (t[o] !== e[o] && !dc(r, o)) return !0
        }
        return !1
    }

    function lL({
        vnode: e,
        parent: t
    }, r) {
        for (; t && t.subTree === e;)(e = t.vnode).el = r, t = t.parent
    }
    const cL = e => e.__isSuspense;

    function uL(e, t) {
        t && t.pendingBranch ? ke(e) ? t.effects.push(...e) : t.effects.push(e) : rL(e)
    }

    function fL(e, t) {
        if (qt) {
            let r = qt.provides;
            const n = qt.parent && qt.parent.provides;
            n === r && (r = qt.provides = Object.create(n)), r[e] = t
        }
    }

    function Zi(e, t, r = !1) {
        const n = qt || or;
        if (n) {
            const s = n.parent == null ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides;
            if (s && e in s) return s[e];
            if (arguments.length > 1) return r && He(t) ? t.call(n.proxy) : t
        }
    }
    const wv = {};

    function Qi(e, t, r) {
        return bE(e, t, r)
    }

    function bE(e, t, {
        immediate: r,
        deep: n,
        flush: s,
        onTrack: o,
        onTrigger: l
    } = gt) {
        const u = qt;
        let f, h = !1,
            g = !1;
        if (Qt(e) ? (f = () => e.value, h = Ul(e)) : Ds(e) ? (f = () => e, n = !0) : ke(e) ? (g = !0, h = e.some($ => Ds($) || Ul($)), f = () => e.map($ => {
                if (Qt($)) return $.value;
                if (Ds($)) return Xi($);
                if (He($)) return ci($, u, 2)
            })) : He(e) ? t ? f = () => ci(e, u, 2) : f = () => {
                if (!(u && u.isUnmounted)) return y && y(), Xr(e, u, 3, [E])
            } : f = cn, t && n) {
            const $ = f;
            f = () => Xi($())
        }
        let y, E = $ => {
            y = B.onStop = () => {
                ci($, u, 4)
            }
        };
        if (Qa) return E = cn, t ? r && Xr(t, u, 3, [f(), g ? [] : void 0, E]) : f(), cn;
        let C = g ? [] : wv;
        const P = () => {
            if (!!B.active)
                if (t) {
                    const $ = B.run();
                    (n || h || (g ? $.some((V, q) => qa(V, C[q])) : qa($, C))) && (y && y(), Xr(t, u, 3, [$, C === wv ? void 0 : C, E]), C = $)
                } else B.run()
        };
        P.allowRecurse = !!t;
        let M;
        s === "sync" ? M = P : s === "post" ? M = () => Or(P, u && u.suspense) : (P.pre = !0, u && (P.id = u.uid), M = () => Th(P));
        const B = new gh(f, M);
        return t ? r ? P() : C = B.run() : s === "post" ? Or(B.run.bind(B), u && u.suspense) : B.run(), () => {
            B.stop(), u && u.scope && dh(u.scope.effects, B)
        }
    }

    function dL(e, t, r) {
        const n = this.proxy,
            s = Ht(e) ? e.includes(".") ? EE(n, e) : () => n[e] : e.bind(n, n);
        let o;
        He(t) ? o = t : (o = t.handler, r = t);
        const l = qt;
        zs(this);
        const u = bE(s, o.bind(n), r);
        return l ? zs(l) : es(), u
    }

    function EE(e, t) {
        const r = t.split(".");
        return () => {
            let n = e;
            for (let s = 0; s < r.length && n; s++) n = n[r[s]];
            return n
        }
    }

    function Xi(e, t) {
        if (!mt(e) || e.__v_skip || (t = t || new Set, t.has(e))) return e;
        if (t.add(e), Qt(e)) Xi(e.value, t);
        else if (ke(e))
            for (let r = 0; r < e.length; r++) Xi(e[r], t);
        else if (oc(e) || xs(e)) e.forEach(r => {
            Xi(r, t)
        });
        else if (zb(e))
            for (const r in e) Xi(e[r], t);
        return e
    }

    function hL() {
        const e = {
            isMounted: !1,
            isLeaving: !1,
            isUnmounting: !1,
            leavingVNodes: new Map
        };
        return Sh(() => {
            e.isMounted = !0
        }), $E(() => {
            e.isUnmounting = !0
        }), e
    }
    const Yr = [Function, Array],
        pL = {
            name: "BaseTransition",
            props: {
                mode: String,
                appear: Boolean,
                persisted: Boolean,
                onBeforeEnter: Yr,
                onEnter: Yr,
                onAfterEnter: Yr,
                onEnterCancelled: Yr,
                onBeforeLeave: Yr,
                onLeave: Yr,
                onAfterLeave: Yr,
                onLeaveCancelled: Yr,
                onBeforeAppear: Yr,
                onAppear: Yr,
                onAfterAppear: Yr,
                onAppearCancelled: Yr
            },
            setup(e, {
                slots: t
            }) {
                const r = ss(),
                    n = hL();
                let s;
                return () => {
                    const o = t.default && OE(t.default(), !0);
                    if (!o || !o.length) return;
                    let l = o[0];
                    if (o.length > 1) {
                        for (const M of o)
                            if (M.type !== Jr) {
                                l = M;
                                break
                            }
                    }
                    const u = at(e),
                        {
                            mode: f
                        } = u;
                    if (n.isLeaving) return pf(l);
                    const h = Cv(l);
                    if (!h) return pf(l);
                    const g = ud(h, u, n, r);
                    fd(h, g);
                    const y = r.subTree,
                        E = y && Cv(y);
                    let C = !1;
                    const {
                        getTransitionKey: P
                    } = h.type;
                    if (P) {
                        const M = P();
                        s === void 0 ? s = M : M !== s && (s = M, C = !0)
                    }
                    if (E && E.type !== Jr && (!Vi(h, E) || C)) {
                        const M = ud(E, u, n, r);
                        if (fd(E, M), f === "out-in") return n.isLeaving = !0, M.afterLeave = () => {
                            n.isLeaving = !1, r.update()
                        }, pf(l);
                        f === "in-out" && h.type !== Jr && (M.delayLeave = (B, $, V) => {
                            const q = SE(n, E);
                            q[String(E.key)] = E, B._leaveCb = () => {
                                $(), B._leaveCb = void 0, delete g.delayedLeave
                            }, g.delayedLeave = V
                        })
                    }
                    return l
                }
            }
        },
        TE = pL;

    function SE(e, t) {
        const {
            leavingVNodes: r
        } = e;
        let n = r.get(t.type);
        return n || (n = Object.create(null), r.set(t.type, n)), n
    }

    function ud(e, t, r, n) {
        const {
            appear: s,
            mode: o,
            persisted: l = !1,
            onBeforeEnter: u,
            onEnter: f,
            onAfterEnter: h,
            onEnterCancelled: g,
            onBeforeLeave: y,
            onLeave: E,
            onAfterLeave: C,
            onLeaveCancelled: P,
            onBeforeAppear: M,
            onAppear: B,
            onAfterAppear: $,
            onAppearCancelled: V
        } = t, q = String(e.key), G = SE(r, e), j = (le, ue) => {
            le && Xr(le, n, 9, ue)
        }, J = (le, ue) => {
            const Ae = ue[1];
            j(le, ue), ke(le) ? le.every($e => $e.length <= 1) && Ae() : le.length <= 1 && Ae()
        }, oe = {
            mode: o,
            persisted: l,
            beforeEnter(le) {
                let ue = u;
                if (!r.isMounted)
                    if (s) ue = M || u;
                    else return;
                le._leaveCb && le._leaveCb(!0);
                const Ae = G[q];
                Ae && Vi(e, Ae) && Ae.el._leaveCb && Ae.el._leaveCb(), j(ue, [le])
            },
            enter(le) {
                let ue = f,
                    Ae = h,
                    $e = g;
                if (!r.isMounted)
                    if (s) ue = B || f, Ae = $ || h, $e = V || g;
                    else return;
                let fe = !1;
                const Ce = le._enterCb = F => {
                    fe || (fe = !0, F ? j($e, [le]) : j(Ae, [le]), oe.delayedLeave && oe.delayedLeave(), le._enterCb = void 0)
                };
                ue ? J(ue, [le, Ce]) : Ce()
            },
            leave(le, ue) {
                const Ae = String(e.key);
                if (le._enterCb && le._enterCb(!0), r.isUnmounting) return ue();
                j(y, [le]);
                let $e = !1;
                const fe = le._leaveCb = Ce => {
                    $e || ($e = !0, ue(), Ce ? j(P, [le]) : j(C, [le]), le._leaveCb = void 0, G[Ae] === e && delete G[Ae])
                };
                G[Ae] = e, E ? J(E, [le, fe]) : fe()
            },
            clone(le) {
                return ud(le, t, r, n)
            }
        };
        return oe
    }

    function pf(e) {
        if (mc(e)) return e = di(e), e.children = null, e
    }

    function Cv(e) {
        return mc(e) ? e.children ? e.children[0] : void 0 : e
    }

    function fd(e, t) {
        e.shapeFlag & 6 && e.component ? fd(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
    }

    function OE(e, t = !1, r) {
        let n = [],
            s = 0;
        for (let o = 0; o < e.length; o++) {
            let l = e[o];
            const u = r == null ? l.key : String(r) + String(l.key != null ? l.key : o);
            l.type === et ? (l.patchFlag & 128 && s++, n = n.concat(OE(l.children, t, u))) : (t || l.type !== Jr) && n.push(u != null ? di(l, {
                key: u
            }) : l)
        }
        if (s > 1)
            for (let o = 0; o < n.length; o++) n[o].patchFlag = -2;
        return n
    }

    function it(e) {
        return He(e) ? {
            setup: e,
            name: e.name
        } : e
    }
    const Ma = e => !!e.type.__asyncLoader,
        mc = e => e.type.__isKeepAlive;

    function gL(e, t) {
        wE(e, "a", t)
    }

    function mL(e, t) {
        wE(e, "da", t)
    }

    function wE(e, t, r = qt) {
        const n = e.__wdc || (e.__wdc = () => {
            let s = r;
            for (; s;) {
                if (s.isDeactivated) return;
                s = s.parent
            }
            return e()
        });
        if (vc(t, n, r), r) {
            let s = r.parent;
            for (; s && s.parent;) mc(s.parent.vnode) && vL(n, t, r, s), s = s.parent
        }
    }

    function vL(e, t, r, n) {
        const s = vc(t, e, n, !0);
        Oh(() => {
            dh(n[t], s)
        }, r)
    }

    function vc(e, t, r = qt, n = !1) {
        if (r) {
            const s = r[e] || (r[e] = []),
                o = t.__weh || (t.__weh = (...l) => {
                    if (r.isUnmounted) return;
                    ra(), zs(r);
                    const u = Xr(t, r, e, l);
                    return es(), na(), u
                });
            return n ? s.unshift(o) : s.push(o), o
        }
    }
    const jn = e => (t, r = qt) => (!Qa || e === "sp") && vc(e, t, r),
        CE = jn("bm"),
        Sh = jn("m"),
        yL = jn("bu"),
        _L = jn("u"),
        $E = jn("bum"),
        Oh = jn("um"),
        bL = jn("sp"),
        EL = jn("rtg"),
        TL = jn("rtc");

    function SL(e, t = qt) {
        vc("ec", e, t)
    }

    function Ie(e, t) {
        const r = or;
        if (r === null) return e;
        const n = Tc(r) || r.proxy,
            s = e.dirs || (e.dirs = []);
        for (let o = 0; o < t.length; o++) {
            let [l, u, f, h = gt] = t[o];
            He(l) && (l = {
                mounted: l,
                updated: l
            }), l.deep && Xi(u), s.push({
                dir: l,
                instance: n,
                value: u,
                oldValue: void 0,
                arg: f,
                modifiers: h
            })
        }
        return e
    }

    function ki(e, t, r, n) {
        const s = e.dirs,
            o = t && t.dirs;
        for (let l = 0; l < s.length; l++) {
            const u = s[l];
            o && (u.oldValue = o[l].value);
            let f = u.dir[n];
            f && (ra(), Xr(f, r, 8, [e.el, u, e, t]), na())
        }
    }
    const wh = "components",
        OL = "directives";

    function Mt(e, t) {
        return Ch(wh, e, !0, t) || e
    }
    const IE = Symbol();

    function yc(e) {
        return Ht(e) ? Ch(wh, e, !1) || e : e || IE
    }

    function Rt(e) {
        return Ch(OL, e)
    }

    function Ch(e, t, r = !0, n = !1) {
        const s = or || qt;
        if (s) {
            const o = s.type;
            if (e === wh) {
                const u = ZL(o, !1);
                if (u && (u === t || u === wn(t) || u === cc(wn(t)))) return o
            }
            const l = $v(s[e] || o[e], t) || $v(s.appContext[e], t);
            return !l && n ? o : l
        }
    }

    function $v(e, t) {
        return e && (e[t] || e[wn(t)] || e[cc(wn(t))])
    }

    function un(e, t, r, n) {
        let s;
        const o = r && r[n];
        if (ke(e) || Ht(e)) {
            s = new Array(e.length);
            for (let l = 0, u = e.length; l < u; l++) s[l] = t(e[l], l, void 0, o && o[l])
        } else if (typeof e == "number") {
            s = new Array(e);
            for (let l = 0; l < e; l++) s[l] = t(l + 1, l, void 0, o && o[l])
        } else if (mt(e))
            if (e[Symbol.iterator]) s = Array.from(e, (l, u) => t(l, u, void 0, o && o[u]));
            else {
                const l = Object.keys(e);
                s = new Array(l.length);
                for (let u = 0, f = l.length; u < f; u++) {
                    const h = l[u];
                    s[u] = t(e[h], h, u, o && o[u])
                }
            }
        else s = [];
        return r && (r[n] = s), s
    }

    function AE(e, t, r = {}, n, s) {
        if (or.isCE || or.parent && Ma(or.parent) && or.parent.isCE) return nt("slot", t === "default" ? null : {
            name: t
        }, n && n());
        let o = e[t];
        o && o._c && (o._d = !1), H();
        const l = o && RE(o(r)),
            u = lr(et, {
                key: r.key || l && l.key || `_${t}`
            }, l || (n ? n() : []), l && e._ === 1 ? 64 : -2);
        return !s && u.scopeId && (u.slotScopeIds = [u.scopeId + "-s"]), o && o._c && (o._d = !0), u
    }

    function RE(e) {
        return e.some(t => Wl(t) ? !(t.type === Jr || t.type === et && !RE(t.children)) : !0) ? e : null
    }
    const dd = e => e ? GE(e) ? Tc(e) || e.proxy : dd(e.parent) : null,
        jl = tr(Object.create(null), {
            $: e => e,
            $el: e => e.vnode.el,
            $data: e => e.data,
            $props: e => e.props,
            $attrs: e => e.attrs,
            $slots: e => e.slots,
            $refs: e => e.refs,
            $parent: e => dd(e.parent),
            $root: e => dd(e.root),
            $emit: e => e.emit,
            $options: e => $h(e),
            $forceUpdate: e => e.f || (e.f = () => Th(e.update)),
            $nextTick: e => e.n || (e.n = QN.bind(e.proxy)),
            $watch: e => dL.bind(e)
        }),
        wL = {
            get({
                _: e
            }, t) {
                const {
                    ctx: r,
                    setupState: n,
                    data: s,
                    props: o,
                    accessCache: l,
                    type: u,
                    appContext: f
                } = e;
                let h;
                if (t[0] !== "$") {
                    const C = l[t];
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
                        if (n !== gt && Qe(n, t)) return l[t] = 1, n[t];
                        if (s !== gt && Qe(s, t)) return l[t] = 2, s[t];
                        if ((h = e.propsOptions[0]) && Qe(h, t)) return l[t] = 3, o[t];
                        if (r !== gt && Qe(r, t)) return l[t] = 4, r[t];
                        hd && (l[t] = 0)
                    }
                }
                const g = jl[t];
                let y, E;
                if (g) return t === "$attrs" && xr(e, "get", t), g(e);
                if ((y = u.__cssModules) && (y = y[t])) return y;
                if (r !== gt && Qe(r, t)) return l[t] = 4, r[t];
                if (E = f.config.globalProperties, Qe(E, t)) return E[t]
            },
            set({
                _: e
            }, t, r) {
                const {
                    data: n,
                    setupState: s,
                    ctx: o
                } = e;
                return s !== gt && Qe(s, t) ? (s[t] = r, !0) : n !== gt && Qe(n, t) ? (n[t] = r, !0) : Qe(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = r, !0)
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
            }, l) {
                let u;
                return !!r[l] || e !== gt && Qe(e, l) || t !== gt && Qe(t, l) || (u = o[0]) && Qe(u, l) || Qe(n, l) || Qe(jl, l) || Qe(s.config.globalProperties, l)
            },
            defineProperty(e, t, r) {
                return r.get != null ? e._.accessCache[t] = 0 : Qe(r, "value") && this.set(e, t, r.value, null), Reflect.defineProperty(e, t, r)
            }
        };
    let hd = !0;

    function CL(e) {
        const t = $h(e),
            r = e.proxy,
            n = e.ctx;
        hd = !1, t.beforeCreate && Iv(t.beforeCreate, e, "bc");
        const {
            data: s,
            computed: o,
            methods: l,
            watch: u,
            provide: f,
            inject: h,
            created: g,
            beforeMount: y,
            mounted: E,
            beforeUpdate: C,
            updated: P,
            activated: M,
            deactivated: B,
            beforeDestroy: $,
            beforeUnmount: V,
            destroyed: q,
            unmounted: G,
            render: j,
            renderTracked: J,
            renderTriggered: oe,
            errorCaptured: le,
            serverPrefetch: ue,
            expose: Ae,
            inheritAttrs: $e,
            components: fe,
            directives: Ce,
            filters: F
        } = t;
        if (h && $L(h, n, null, e.appContext.config.unwrapInjectedRef), l)
            for (const be in l) {
                const ve = l[be];
                He(ve) && (n[be] = ve.bind(r))
            }
        if (s) {
            const be = s.call(r, r);
            mt(be) && (e.data = Bn(be))
        }
        if (hd = !0, o)
            for (const be in o) {
                const ve = o[be],
                    Oe = He(ve) ? ve.bind(r, r) : He(ve.get) ? ve.get.bind(r, r) : cn,
                    Fe = !He(ve) && He(ve.set) ? ve.set.bind(r) : cn,
                    Ge = kr({
                        get: Oe,
                        set: Fe
                    });
                Object.defineProperty(n, be, {
                    enumerable: !0,
                    configurable: !0,
                    get: () => Ge.value,
                    set: tt => Ge.value = tt
                })
            }
        if (u)
            for (const be in u) NE(u[be], n, r, be);
        if (f) {
            const be = He(f) ? f.call(r) : f;
            Reflect.ownKeys(be).forEach(ve => {
                fL(ve, be[ve])
            })
        }
        g && Iv(g, e, "c");

        function de(be, ve) {
            ke(ve) ? ve.forEach(Oe => be(Oe.bind(r))) : ve && be(ve.bind(r))
        }
        if (de(CE, y), de(Sh, E), de(yL, C), de(_L, P), de(gL, M), de(mL, B), de(SL, le), de(TL, J), de(EL, oe), de($E, V), de(Oh, G), de(bL, ue), ke(Ae))
            if (Ae.length) {
                const be = e.exposed || (e.exposed = {});
                Ae.forEach(ve => {
                    Object.defineProperty(be, ve, {
                        get: () => r[ve],
                        set: Oe => r[ve] = Oe
                    })
                })
            } else e.exposed || (e.exposed = {});
        j && e.render === cn && (e.render = j), $e != null && (e.inheritAttrs = $e), fe && (e.components = fe), Ce && (e.directives = Ce)
    }

    function $L(e, t, r = cn, n = !1) {
        ke(e) && (e = pd(e));
        for (const s in e) {
            const o = e[s];
            let l;
            mt(o) ? "default" in o ? l = Zi(o.from || s, o.default, !0) : l = Zi(o.from || s) : l = Zi(o), Qt(l) && n ? Object.defineProperty(t, s, {
                enumerable: !0,
                configurable: !0,
                get: () => l.value,
                set: u => l.value = u
            }) : t[s] = l
        }
    }

    function Iv(e, t, r) {
        Xr(ke(e) ? e.map(n => n.bind(t.proxy)) : e.bind(t.proxy), t, r)
    }

    function NE(e, t, r, n) {
        const s = n.includes(".") ? EE(r, n) : () => r[n];
        if (Ht(e)) {
            const o = t[e];
            He(o) && Qi(s, o)
        } else if (He(e)) Qi(s, e.bind(r));
        else if (mt(e))
            if (ke(e)) e.forEach(o => NE(o, t, r, n));
            else {
                const o = He(e.handler) ? e.handler.bind(r) : t[e.handler];
                He(o) && Qi(s, o, e)
            }
    }

    function $h(e) {
        const t = e.type,
            {
                mixins: r,
                extends: n
            } = t,
            {
                mixins: s,
                optionsCache: o,
                config: {
                    optionMergeStrategies: l
                }
            } = e.appContext,
            u = o.get(t);
        let f;
        return u ? f = u : !s.length && !r && !n ? f = t : (f = {}, s.length && s.forEach(h => Gl(f, h, l, !0)), Gl(f, t, l)), mt(t) && o.set(t, f), f
    }

    function Gl(e, t, r, n = !1) {
        const {
            mixins: s,
            extends: o
        } = t;
        o && Gl(e, o, r, !0), s && s.forEach(l => Gl(e, l, r, !0));
        for (const l in t)
            if (!(n && l === "expose")) {
                const u = IL[l] || r && r[l];
                e[l] = u ? u(e[l], t[l]) : t[l]
            } return e
    }
    const IL = {
        data: Av,
        props: ji,
        emits: ji,
        methods: ji,
        computed: ji,
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
        components: ji,
        directives: ji,
        watch: RL,
        provide: Av,
        inject: AL
    };

    function Av(e, t) {
        return t ? e ? function() {
            return tr(He(e) ? e.call(this, this) : e, He(t) ? t.call(this, this) : t)
        } : t : e
    }

    function AL(e, t) {
        return ji(pd(e), pd(t))
    }

    function pd(e) {
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

    function ji(e, t) {
        return e ? tr(tr(Object.create(null), e), t) : t
    }

    function RL(e, t) {
        if (!e) return t;
        if (!t) return e;
        const r = tr(Object.create(null), e);
        for (const n in t) r[n] = gr(e[n], t[n]);
        return r
    }

    function NL(e, t, r, n = !1) {
        const s = {},
            o = {};
        Ml(o, bc, 1), e.propsDefaults = Object.create(null), LE(e, t, s, o);
        for (const l in e.propsOptions[0]) l in s || (s[l] = void 0);
        r ? e.props = n ? s : VN(s) : e.type.props ? e.props = s : e.props = o, e.attrs = o
    }

    function LL(e, t, r, n) {
        const {
            props: s,
            attrs: o,
            vnode: {
                patchFlag: l
            }
        } = e, u = at(s), [f] = e.propsOptions;
        let h = !1;
        if ((n || l > 0) && !(l & 16)) {
            if (l & 8) {
                const g = e.vnode.dynamicProps;
                for (let y = 0; y < g.length; y++) {
                    let E = g[y];
                    if (dc(e.emitsOptions, E)) continue;
                    const C = t[E];
                    if (f)
                        if (Qe(o, E)) C !== o[E] && (o[E] = C, h = !0);
                        else {
                            const P = wn(E);
                            s[P] = gd(f, u, P, C, e, !1)
                        }
                    else C !== o[E] && (o[E] = C, h = !0)
                }
            }
        } else {
            LE(e, t, s, o) && (h = !0);
            let g;
            for (const y in u)(!t || !Qe(t, y) && ((g = as(y)) === y || !Qe(t, g))) && (f ? r && (r[y] !== void 0 || r[g] !== void 0) && (s[y] = gd(f, u, y, void 0, e, !0)) : delete s[y]);
            if (o !== u)
                for (const y in o)(!t || !Qe(t, y) && !0) && (delete o[y], h = !0)
        }
        h && Un(e, "set", "$attrs")
    }

    function LE(e, t, r, n) {
        const [s, o] = e.propsOptions;
        let l = !1,
            u;
        if (t)
            for (let f in t) {
                if (Il(f)) continue;
                const h = t[f];
                let g;
                s && Qe(s, g = wn(f)) ? !o || !o.includes(g) ? r[g] = h : (u || (u = {}))[g] = h : dc(e.emitsOptions, f) || (!(f in n) || h !== n[f]) && (n[f] = h, l = !0)
            }
        if (o) {
            const f = at(r),
                h = u || gt;
            for (let g = 0; g < o.length; g++) {
                const y = o[g];
                r[y] = gd(s, f, y, h[y], e, !Qe(h, y))
            }
        }
        return l
    }

    function gd(e, t, r, n, s, o) {
        const l = e[r];
        if (l != null) {
            const u = Qe(l, "default");
            if (u && n === void 0) {
                const f = l.default;
                if (l.type !== Function && He(f)) {
                    const {
                        propsDefaults: h
                    } = s;
                    r in h ? n = h[r] : (zs(s), n = h[r] = f.call(null, t), es())
                } else n = f
            }
            l[0] && (o && !u ? n = !1 : l[1] && (n === "" || n === as(r)) && (n = !0))
        }
        return n
    }

    function PE(e, t, r = !1) {
        const n = t.propsCache,
            s = n.get(e);
        if (s) return s;
        const o = e.props,
            l = {},
            u = [];
        let f = !1;
        if (!He(e)) {
            const g = y => {
                f = !0;
                const [E, C] = PE(y, t, !0);
                tr(l, E), C && u.push(...C)
            };
            !r && t.mixins.length && t.mixins.forEach(g), e.extends && g(e.extends), e.mixins && e.mixins.forEach(g)
        }
        if (!o && !f) return mt(e) && n.set(e, ks), ks;
        if (ke(o))
            for (let g = 0; g < o.length; g++) {
                const y = wn(o[g]);
                Rv(y) && (l[y] = gt)
            } else if (o)
                for (const g in o) {
                    const y = wn(g);
                    if (Rv(y)) {
                        const E = o[g],
                            C = l[y] = ke(E) || He(E) ? {
                                type: E
                            } : E;
                        if (C) {
                            const P = Pv(Boolean, C.type),
                                M = Pv(String, C.type);
                            C[0] = P > -1, C[1] = M < 0 || P < M, (P > -1 || Qe(C, "default")) && u.push(y)
                        }
                    }
                }
        const h = [l, u];
        return mt(e) && n.set(e, h), h
    }

    function Rv(e) {
        return e[0] !== "$"
    }

    function Nv(e) {
        const t = e && e.toString().match(/^\s*function (\w+)/);
        return t ? t[1] : e === null ? "null" : ""
    }

    function Lv(e, t) {
        return Nv(e) === Nv(t)
    }

    function Pv(e, t) {
        return ke(t) ? t.findIndex(r => Lv(r, e)) : He(t) && Lv(t, e) ? 0 : -1
    }
    const kE = e => e[0] === "_" || e === "$stable",
        Ih = e => ke(e) ? e.map(Tn) : [Tn(e)],
        PL = (e, t, r) => {
            if (t._n) return t;
            const n = Fs((...s) => Ih(t(...s)), r);
            return n._c = !1, n
        },
        xE = (e, t, r) => {
            const n = e._ctx;
            for (const s in e) {
                if (kE(s)) continue;
                const o = e[s];
                if (He(o)) t[s] = PL(s, o, n);
                else if (o != null) {
                    const l = Ih(o);
                    t[s] = () => l
                }
            }
        },
        DE = (e, t) => {
            const r = Ih(t);
            e.slots.default = () => r
        },
        kL = (e, t) => {
            if (e.vnode.shapeFlag & 32) {
                const r = t._;
                r ? (e.slots = at(t), Ml(t, "_", r)) : xE(t, e.slots = {})
            } else e.slots = {}, t && DE(e, t);
            Ml(e.slots, bc, 1)
        },
        xL = (e, t, r) => {
            const {
                vnode: n,
                slots: s
            } = e;
            let o = !0,
                l = gt;
            if (n.shapeFlag & 32) {
                const u = t._;
                u ? r && u === 1 ? o = !1 : (tr(s, t), !r && u === 1 && delete s._) : (o = !t.$stable, xE(t, s)), l = t
            } else t && (DE(e, t), l = {
                default: 1
            });
            if (o)
                for (const u in s) !kE(u) && !(u in l) && delete s[u]
        };

    function ME() {
        return {
            app: null,
            config: {
                isNativeTag: fN,
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
    let DL = 0;

    function ML(e, t) {
        return function(n, s = null) {
            He(n) || (n = Object.assign({}, n)), s != null && !mt(s) && (s = null);
            const o = ME(),
                l = new Set;
            let u = !1;
            const f = o.app = {
                _uid: DL++,
                _component: n,
                _props: s,
                _container: null,
                _context: o,
                _instance: null,
                version: e2,
                get config() {
                    return o.config
                },
                set config(h) {},
                use(h, ...g) {
                    return l.has(h) || (h && He(h.install) ? (l.add(h), h.install(f, ...g)) : He(h) && (l.add(h), h(f, ...g))), f
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
                        const E = nt(n, s);
                        return E.appContext = o, g && t ? t(E, h) : e(E, h, y), u = !0, f._container = h, h.__vue_app__ = f, Tc(E.component) || E.component.proxy
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

    function md(e, t, r, n, s = !1) {
        if (ke(e)) {
            e.forEach((E, C) => md(E, t && (ke(t) ? t[C] : t), r, n, s));
            return
        }
        if (Ma(n) && !s) return;
        const o = n.shapeFlag & 4 ? Tc(n.component) || n.component.proxy : n.el,
            l = s ? null : o,
            {
                i: u,
                r: f
            } = e,
            h = t && t.r,
            g = u.refs === gt ? u.refs = {} : u.refs,
            y = u.setupState;
        if (h != null && h !== f && (Ht(h) ? (g[h] = null, Qe(y, h) && (y[h] = null)) : Qt(h) && (h.value = null)), He(f)) ci(f, u, 12, [l, g]);
        else {
            const E = Ht(f),
                C = Qt(f);
            if (E || C) {
                const P = () => {
                    if (e.f) {
                        const M = E ? g[f] : f.value;
                        s ? ke(M) && dh(M, o) : ke(M) ? M.includes(o) || M.push(o) : E ? (g[f] = [o], Qe(y, f) && (y[f] = g[f])) : (f.value = [o], e.k && (g[e.k] = f.value))
                    } else E ? (g[f] = l, Qe(y, f) && (y[f] = l)) : C && (f.value = l, e.k && (g[e.k] = l))
                };
                l ? (P.id = -1, Or(P, r)) : P()
            }
        }
    }
    const Or = uL;

    function FL(e) {
        return UL(e)
    }

    function UL(e, t) {
        const r = vN();
        r.__VUE__ = !0;
        const {
            insert: n,
            remove: s,
            patchProp: o,
            createElement: l,
            createText: u,
            createComment: f,
            setText: h,
            setElementText: g,
            parentNode: y,
            nextSibling: E,
            setScopeId: C = cn,
            cloneNode: P,
            insertStaticContent: M
        } = e, B = (m, p, O, D = null, U = null, Y = null, ce = !1, se = null, re = !!p.dynamicChildren) => {
            if (m === p) return;
            m && !Vi(m, p) && (D = Ot(m), It(m, U, Y, !0), m = null), p.patchFlag === -2 && (re = !1, p.dynamicChildren = null);
            const {
                type: A,
                ref: W,
                shapeFlag: he
            } = p;
            switch (A) {
                case _c:
                    $(m, p, O, D);
                    break;
                case Jr:
                    V(m, p, O, D);
                    break;
                case Rl:
                    m == null && q(p, O, D, ce);
                    break;
                case et:
                    Ce(m, p, O, D, U, Y, ce, se, re);
                    break;
                default:
                    he & 1 ? J(m, p, O, D, U, Y, ce, se, re) : he & 6 ? F(m, p, O, D, U, Y, ce, se, re) : (he & 64 || he & 128) && A.process(m, p, O, D, U, Y, ce, se, re, xt)
            }
            W != null && U && md(W, m && m.ref, Y, p || m, !p)
        }, $ = (m, p, O, D) => {
            if (m == null) n(p.el = u(p.children), O, D);
            else {
                const U = p.el = m.el;
                p.children !== m.children && h(U, p.children)
            }
        }, V = (m, p, O, D) => {
            m == null ? n(p.el = f(p.children || ""), O, D) : p.el = m.el
        }, q = (m, p, O, D) => {
            [m.el, m.anchor] = M(m.children, p, O, D, m.el, m.anchor)
        }, G = ({
            el: m,
            anchor: p
        }, O, D) => {
            let U;
            for (; m && m !== p;) U = E(m), n(m, O, D), m = U;
            n(p, O, D)
        }, j = ({
            el: m,
            anchor: p
        }) => {
            let O;
            for (; m && m !== p;) O = E(m), s(m), m = O;
            s(p)
        }, J = (m, p, O, D, U, Y, ce, se, re) => {
            ce = ce || p.type === "svg", m == null ? oe(p, O, D, U, Y, ce, se, re) : Ae(m, p, U, Y, ce, se, re)
        }, oe = (m, p, O, D, U, Y, ce, se) => {
            let re, A;
            const {
                type: W,
                props: he,
                shapeFlag: pe,
                transition: Re,
                patchFlag: xe,
                dirs: w
            } = m;
            if (m.el && P !== void 0 && xe === -1) re = m.el = P(m.el);
            else {
                if (re = m.el = l(m.type, Y, he && he.is, he), pe & 8 ? g(re, m.children) : pe & 16 && ue(m.children, re, null, D, U, Y && W !== "foreignObject", ce, se), w && ki(m, null, D, "created"), he) {
                    for (const N in he) N !== "value" && !Il(N) && o(re, N, null, he[N], Y, m.children, D, U, ot);
                    "value" in he && o(re, "value", null, he.value), (A = he.onVnodeBeforeMount) && vn(A, D, m)
                }
                le(re, m, m.scopeId, ce, D)
            }
            w && ki(m, null, D, "beforeMount");
            const T = (!U || U && !U.pendingBranch) && Re && !Re.persisted;
            T && Re.beforeEnter(re), n(re, p, O), ((A = he && he.onVnodeMounted) || T || w) && Or(() => {
                A && vn(A, D, m), T && Re.enter(re), w && ki(m, null, D, "mounted")
            }, U)
        }, le = (m, p, O, D, U) => {
            if (O && C(m, O), D)
                for (let Y = 0; Y < D.length; Y++) C(m, D[Y]);
            if (U) {
                let Y = U.subTree;
                if (p === Y) {
                    const ce = U.vnode;
                    le(m, ce, ce.scopeId, ce.slotScopeIds, U.parent)
                }
            }
        }, ue = (m, p, O, D, U, Y, ce, se, re = 0) => {
            for (let A = re; A < m.length; A++) {
                const W = m[A] = se ? ni(m[A]) : Tn(m[A]);
                B(null, W, p, O, D, U, Y, ce, se)
            }
        }, Ae = (m, p, O, D, U, Y, ce) => {
            const se = p.el = m.el;
            let {
                patchFlag: re,
                dynamicChildren: A,
                dirs: W
            } = p;
            re |= m.patchFlag & 16;
            const he = m.props || gt,
                pe = p.props || gt;
            let Re;
            O && xi(O, !1), (Re = pe.onVnodeBeforeUpdate) && vn(Re, O, p, m), W && ki(p, m, O, "beforeUpdate"), O && xi(O, !0);
            const xe = U && p.type !== "foreignObject";
            if (A ? $e(m.dynamicChildren, A, se, O, D, xe, Y) : ce || Oe(m, p, se, null, O, D, xe, Y, !1), re > 0) {
                if (re & 16) fe(se, p, he, pe, O, D, U);
                else if (re & 2 && he.class !== pe.class && o(se, "class", null, pe.class, U), re & 4 && o(se, "style", he.style, pe.style, U), re & 8) {
                    const w = p.dynamicProps;
                    for (let T = 0; T < w.length; T++) {
                        const N = w[T],
                            S = he[N],
                            L = pe[N];
                        (L !== S || N === "value") && o(se, N, S, L, U, m.children, O, D, ot)
                    }
                }
                re & 1 && m.children !== p.children && g(se, p.children)
            } else !ce && A == null && fe(se, p, he, pe, O, D, U);
            ((Re = pe.onVnodeUpdated) || W) && Or(() => {
                Re && vn(Re, O, p, m), W && ki(p, m, O, "updated")
            }, D)
        }, $e = (m, p, O, D, U, Y, ce) => {
            for (let se = 0; se < p.length; se++) {
                const re = m[se],
                    A = p[se],
                    W = re.el && (re.type === et || !Vi(re, A) || re.shapeFlag & 70) ? y(re.el) : O;
                B(re, A, W, null, D, U, Y, ce, !0)
            }
        }, fe = (m, p, O, D, U, Y, ce) => {
            if (O !== D) {
                for (const se in D) {
                    if (Il(se)) continue;
                    const re = D[se],
                        A = O[se];
                    re !== A && se !== "value" && o(m, se, A, re, ce, p.children, U, Y, ot)
                }
                if (O !== gt)
                    for (const se in O) !Il(se) && !(se in D) && o(m, se, O[se], null, ce, p.children, U, Y, ot);
                "value" in D && o(m, "value", O.value, D.value)
            }
        }, Ce = (m, p, O, D, U, Y, ce, se, re) => {
            const A = p.el = m ? m.el : u(""),
                W = p.anchor = m ? m.anchor : u("");
            let {
                patchFlag: he,
                dynamicChildren: pe,
                slotScopeIds: Re
            } = p;
            Re && (se = se ? se.concat(Re) : Re), m == null ? (n(A, O, D), n(W, O, D), ue(p.children, O, W, U, Y, ce, se, re)) : he > 0 && he & 64 && pe && m.dynamicChildren ? ($e(m.dynamicChildren, pe, O, U, Y, ce, se), (p.key != null || U && p === U.subTree) && FE(m, p, !0)) : Oe(m, p, O, W, U, Y, ce, se, re)
        }, F = (m, p, O, D, U, Y, ce, se, re) => {
            p.slotScopeIds = se, m == null ? p.shapeFlag & 512 ? U.ctx.activate(p, O, D, ce, re) : ie(p, O, D, U, Y, ce, re) : de(m, p, re)
        }, ie = (m, p, O, D, U, Y, ce) => {
            const se = m.component = YL(m, D, U);
            if (mc(m) && (se.ctx.renderer = xt), qL(se), se.asyncDep) {
                if (U && U.registerDep(se, be), !m.el) {
                    const re = se.subTree = nt(Jr);
                    V(null, re, p, O)
                }
                return
            }
            be(se, m, p, O, U, Y, ce)
        }, de = (m, p, O) => {
            const D = p.component = m.component;
            if (oL(m, p, O))
                if (D.asyncDep && !D.asyncResolved) {
                    ve(D, p, O);
                    return
                } else D.next = p, tL(D.update), D.update();
            else p.el = m.el, D.vnode = p
        }, be = (m, p, O, D, U, Y, ce) => {
            const se = () => {
                    if (m.isMounted) {
                        let {
                            next: W,
                            bu: he,
                            u: pe,
                            parent: Re,
                            vnode: xe
                        } = m, w = W, T;
                        xi(m, !1), W ? (W.el = xe.el, ve(m, W, ce)) : W = xe, he && Al(he), (T = W.props && W.props.onVnodeBeforeUpdate) && vn(T, Re, W, xe), xi(m, !0);
                        const N = hf(m),
                            S = m.subTree;
                        m.subTree = N, B(S, N, y(S.el), Ot(S), m, U, Y), W.el = N.el, w === null && lL(m, N.el), pe && Or(pe, U), (T = W.props && W.props.onVnodeUpdated) && Or(() => vn(T, Re, W, xe), U)
                    } else {
                        let W;
                        const {
                            el: he,
                            props: pe
                        } = p, {
                            bm: Re,
                            m: xe,
                            parent: w
                        } = m, T = Ma(p);
                        if (xi(m, !1), Re && Al(Re), !T && (W = pe && pe.onVnodeBeforeMount) && vn(W, w, p), xi(m, !0), he && Dt) {
                            const N = () => {
                                m.subTree = hf(m), Dt(he, m.subTree, m, U, null)
                            };
                            T ? p.type.__asyncLoader().then(() => !m.isUnmounted && N()) : N()
                        } else {
                            const N = m.subTree = hf(m);
                            B(null, N, O, D, m, U, Y), p.el = N.el
                        }
                        if (xe && Or(xe, U), !T && (W = pe && pe.onVnodeMounted)) {
                            const N = p;
                            Or(() => vn(W, w, N), U)
                        }(p.shapeFlag & 256 || w && Ma(w.vnode) && w.vnode.shapeFlag & 256) && m.a && Or(m.a, U), m.isMounted = !0, p = O = D = null
                    }
                },
                re = m.effect = new gh(se, () => Th(A), m.scope),
                A = m.update = () => re.run();
            A.id = m.uid, xi(m, !0), A()
        }, ve = (m, p, O) => {
            p.component = m;
            const D = m.vnode.props;
            m.vnode = p, m.next = null, LL(m, p.props, D, O), xL(m, p.children, O), ra(), Sv(), na()
        }, Oe = (m, p, O, D, U, Y, ce, se, re = !1) => {
            const A = m && m.children,
                W = m ? m.shapeFlag : 0,
                he = p.children,
                {
                    patchFlag: pe,
                    shapeFlag: Re
                } = p;
            if (pe > 0) {
                if (pe & 128) {
                    Ge(A, he, O, D, U, Y, ce, se, re);
                    return
                } else if (pe & 256) {
                    Fe(A, he, O, D, U, Y, ce, se, re);
                    return
                }
            }
            Re & 8 ? (W & 16 && ot(A, U, Y), he !== A && g(O, he)) : W & 16 ? Re & 16 ? Ge(A, he, O, D, U, Y, ce, se, re) : ot(A, U, Y, !0) : (W & 8 && g(O, ""), Re & 16 && ue(he, O, D, U, Y, ce, se, re))
        }, Fe = (m, p, O, D, U, Y, ce, se, re) => {
            m = m || ks, p = p || ks;
            const A = m.length,
                W = p.length,
                he = Math.min(A, W);
            let pe;
            for (pe = 0; pe < he; pe++) {
                const Re = p[pe] = re ? ni(p[pe]) : Tn(p[pe]);
                B(m[pe], Re, O, null, U, Y, ce, se, re)
            }
            A > W ? ot(m, U, Y, !0, !1, he) : ue(p, O, D, U, Y, ce, se, re, he)
        }, Ge = (m, p, O, D, U, Y, ce, se, re) => {
            let A = 0;
            const W = p.length;
            let he = m.length - 1,
                pe = W - 1;
            for (; A <= he && A <= pe;) {
                const Re = m[A],
                    xe = p[A] = re ? ni(p[A]) : Tn(p[A]);
                if (Vi(Re, xe)) B(Re, xe, O, null, U, Y, ce, se, re);
                else break;
                A++
            }
            for (; A <= he && A <= pe;) {
                const Re = m[he],
                    xe = p[pe] = re ? ni(p[pe]) : Tn(p[pe]);
                if (Vi(Re, xe)) B(Re, xe, O, null, U, Y, ce, se, re);
                else break;
                he--, pe--
            }
            if (A > he) {
                if (A <= pe) {
                    const Re = pe + 1,
                        xe = Re < W ? p[Re].el : D;
                    for (; A <= pe;) B(null, p[A] = re ? ni(p[A]) : Tn(p[A]), O, xe, U, Y, ce, se, re), A++
                }
            } else if (A > pe)
                for (; A <= he;) It(m[A], U, Y, !0), A++;
            else {
                const Re = A,
                    xe = A,
                    w = new Map;
                for (A = xe; A <= pe; A++) {
                    const Te = p[A] = re ? ni(p[A]) : Tn(p[A]);
                    Te.key != null && w.set(Te.key, A)
                }
                let T, N = 0;
                const S = pe - xe + 1;
                let L = !1,
                    Q = 0;
                const ne = new Array(S);
                for (A = 0; A < S; A++) ne[A] = 0;
                for (A = Re; A <= he; A++) {
                    const Te = m[A];
                    if (N >= S) {
                        It(Te, U, Y, !0);
                        continue
                    }
                    let ft;
                    if (Te.key != null) ft = w.get(Te.key);
                    else
                        for (T = xe; T <= pe; T++)
                            if (ne[T - xe] === 0 && Vi(Te, p[T])) {
                                ft = T;
                                break
                            } ft === void 0 ? It(Te, U, Y, !0) : (ne[ft - xe] = A + 1, ft >= Q ? Q = ft : L = !0, B(Te, p[ft], O, null, U, Y, ce, se, re), N++)
                }
                const _e = L ? BL(ne) : ks;
                for (T = _e.length - 1, A = S - 1; A >= 0; A--) {
                    const Te = xe + A,
                        ft = p[Te],
                        nr = Te + 1 < W ? p[Te + 1].el : D;
                    ne[A] === 0 ? B(null, ft, O, nr, U, Y, ce, se, re) : L && (T < 0 || A !== _e[T] ? tt(ft, O, nr, 2) : T--)
                }
            }
        }, tt = (m, p, O, D, U = null) => {
            const {
                el: Y,
                type: ce,
                transition: se,
                children: re,
                shapeFlag: A
            } = m;
            if (A & 6) {
                tt(m.component.subTree, p, O, D);
                return
            }
            if (A & 128) {
                m.suspense.move(p, O, D);
                return
            }
            if (A & 64) {
                ce.move(m, p, O, xt);
                return
            }
            if (ce === et) {
                n(Y, p, O);
                for (let he = 0; he < re.length; he++) tt(re[he], p, O, D);
                n(m.anchor, p, O);
                return
            }
            if (ce === Rl) {
                G(m, p, O);
                return
            }
            if (D !== 2 && A & 1 && se)
                if (D === 0) se.beforeEnter(Y), n(Y, p, O), Or(() => se.enter(Y), U);
                else {
                    const {
                        leave: he,
                        delayLeave: pe,
                        afterLeave: Re
                    } = se, xe = () => n(Y, p, O), w = () => {
                        he(Y, () => {
                            xe(), Re && Re()
                        })
                    };
                    pe ? pe(Y, xe, w) : w()
                }
            else n(Y, p, O)
        }, It = (m, p, O, D = !1, U = !1) => {
            const {
                type: Y,
                props: ce,
                ref: se,
                children: re,
                dynamicChildren: A,
                shapeFlag: W,
                patchFlag: he,
                dirs: pe
            } = m;
            if (se != null && md(se, null, O, m, !0), W & 256) {
                p.ctx.deactivate(m);
                return
            }
            const Re = W & 1 && pe,
                xe = !Ma(m);
            let w;
            if (xe && (w = ce && ce.onVnodeBeforeUnmount) && vn(w, p, m), W & 6) yr(m.component, O, D);
            else {
                if (W & 128) {
                    m.suspense.unmount(O, D);
                    return
                }
                Re && ki(m, null, p, "beforeUnmount"), W & 64 ? m.type.remove(m, p, O, U, xt, D) : A && (Y !== et || he > 0 && he & 64) ? ot(A, p, O, !1, !0) : (Y === et && he & 384 || !U && W & 16) && ot(re, p, O), D && $r(m)
            }(xe && (w = ce && ce.onVnodeUnmounted) || Re) && Or(() => {
                w && vn(w, p, m), Re && ki(m, null, p, "unmounted")
            }, O)
        }, $r = m => {
            const {
                type: p,
                el: O,
                anchor: D,
                transition: U
            } = m;
            if (p === et) {
                rr(O, D);
                return
            }
            if (p === Rl) {
                j(m);
                return
            }
            const Y = () => {
                s(O), U && !U.persisted && U.afterLeave && U.afterLeave()
            };
            if (m.shapeFlag & 1 && U && !U.persisted) {
                const {
                    leave: ce,
                    delayLeave: se
                } = U, re = () => ce(O, Y);
                se ? se(m.el, Y, re) : re()
            } else Y()
        }, rr = (m, p) => {
            let O;
            for (; m !== p;) O = E(m), s(m), m = O;
            s(p)
        }, yr = (m, p, O) => {
            const {
                bum: D,
                scope: U,
                update: Y,
                subTree: ce,
                um: se
            } = m;
            D && Al(D), U.stop(), Y && (Y.active = !1, It(ce, m, p, O)), se && Or(se, p), Or(() => {
                m.isUnmounted = !0
            }, p), p && p.pendingBranch && !p.isUnmounted && m.asyncDep && !m.asyncResolved && m.suspenseId === p.pendingId && (p.deps--, p.deps === 0 && p.resolve())
        }, ot = (m, p, O, D = !1, U = !1, Y = 0) => {
            for (let ce = Y; ce < m.length; ce++) It(m[ce], p, O, D, U)
        }, Ot = m => m.shapeFlag & 6 ? Ot(m.component.subTree) : m.shapeFlag & 128 ? m.suspense.next() : E(m.anchor || m.el), lt = (m, p, O) => {
            m == null ? p._vnode && It(p._vnode, null, null, !0) : B(p._vnode || null, m, p, null, null, null, O), Sv(), vE(), p._vnode = m
        }, xt = {
            p: B,
            um: It,
            m: tt,
            r: $r,
            mt: ie,
            mc: ue,
            pc: Oe,
            pbc: $e,
            n: Ot,
            o: e
        };
        let Vt, Dt;
        return t && ([Vt, Dt] = t(xt)), {
            render: lt,
            hydrate: Vt,
            createApp: ML(lt, Vt)
        }
    }

    function xi({
        effect: e,
        update: t
    }, r) {
        e.allowRecurse = t.allowRecurse = r
    }

    function FE(e, t, r = !1) {
        const n = e.children,
            s = t.children;
        if (ke(n) && ke(s))
            for (let o = 0; o < n.length; o++) {
                const l = n[o];
                let u = s[o];
                u.shapeFlag & 1 && !u.dynamicChildren && ((u.patchFlag <= 0 || u.patchFlag === 32) && (u = s[o] = ni(s[o]), u.el = l.el), r || FE(l, u))
            }
    }

    function BL(e) {
        const t = e.slice(),
            r = [0];
        let n, s, o, l, u;
        const f = e.length;
        for (n = 0; n < f; n++) {
            const h = e[n];
            if (h !== 0) {
                if (s = r[r.length - 1], e[s] < h) {
                    t[n] = s, r.push(n);
                    continue
                }
                for (o = 0, l = r.length - 1; o < l;) u = o + l >> 1, e[r[u]] < h ? o = u + 1 : l = u;
                h < e[r[o]] && (o > 0 && (t[n] = r[o - 1]), r[o] = n)
            }
        }
        for (o = r.length, l = r[o - 1]; o-- > 0;) r[o] = l, l = t[l];
        return r
    }
    const jL = e => e.__isTeleport,
        et = Symbol(void 0),
        _c = Symbol(void 0),
        Jr = Symbol(void 0),
        Rl = Symbol(void 0),
        Fa = [];
    let ln = null;

    function H(e = !1) {
        Fa.push(ln = e ? null : [])
    }

    function GL() {
        Fa.pop(), ln = Fa[Fa.length - 1] || null
    }
    let Za = 1;

    function kv(e) {
        Za += e
    }

    function UE(e) {
        return e.dynamicChildren = Za > 0 ? ln || ks : null, GL(), Za > 0 && ln && ln.push(e), e
    }

    function z(e, t, r, n, s, o) {
        return UE(Z(e, t, r, n, s, o, !0))
    }

    function lr(e, t, r, n, s) {
        return UE(nt(e, t, r, n, s, !0))
    }

    function Wl(e) {
        return e ? e.__v_isVNode === !0 : !1
    }

    function Vi(e, t) {
        return e.type === t.type && e.key === t.key
    }
    const bc = "__vInternal",
        BE = ({
            key: e
        }) => e != null ? e : null,
        Nl = ({
            ref: e,
            ref_key: t,
            ref_for: r
        }) => e != null ? Ht(e) || Qt(e) || He(e) ? {
            i: or,
            r: e,
            k: t,
            f: !!r
        } : e : null;

    function Z(e, t = null, r = null, n = 0, s = null, o = e === et ? 0 : 1, l = !1, u = !1) {
        const f = {
            __v_isVNode: !0,
            __v_skip: !0,
            type: e,
            props: t,
            key: t && BE(t),
            ref: t && Nl(t),
            scopeId: hc,
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
        return u ? (Ah(f, r), o & 128 && e.normalize(f)) : r && (f.shapeFlag |= Ht(r) ? 8 : 16), Za > 0 && !l && ln && (f.patchFlag > 0 || o & 6) && f.patchFlag !== 32 && ln.push(f), f
    }
    const nt = WL;

    function WL(e, t = null, r = null, n = 0, s = null, o = !1) {
        if ((!e || e === IE) && (e = Jr), Wl(e)) {
            const u = di(e, t, !0);
            return r && Ah(u, r), Za > 0 && !o && ln && (u.shapeFlag & 6 ? ln[ln.indexOf(e)] = u : ln.push(u)), u.patchFlag |= -2, u
        }
        if (QL(e) && (e = e.__vccOpts), t) {
            t = HL(t);
            let {
                class: u,
                style: f
            } = t;
            u && !Ht(u) && (t.class = Me(u)), mt(f) && (lE(f) && !ke(f) && (f = tr({}, f)), t.style = ic(f))
        }
        const l = Ht(e) ? 1 : cL(e) ? 128 : jL(e) ? 64 : mt(e) ? 4 : He(e) ? 2 : 0;
        return Z(e, t, r, n, s, l, o, !0)
    }

    function HL(e) {
        return e ? lE(e) || bc in e ? tr({}, e) : e : null
    }

    function di(e, t, r = !1) {
        const {
            props: n,
            ref: s,
            patchFlag: o,
            children: l
        } = e, u = t ? Ec(n || {}, t) : n;
        return {
            __v_isVNode: !0,
            __v_skip: !0,
            type: e.type,
            props: u,
            key: u && BE(u),
            ref: t && t.ref ? r && s ? ke(s) ? s.concat(Nl(t)) : [s, Nl(t)] : Nl(t) : s,
            scopeId: e.scopeId,
            slotScopeIds: e.slotScopeIds,
            children: l,
            target: e.target,
            targetAnchor: e.targetAnchor,
            staticCount: e.staticCount,
            shapeFlag: e.shapeFlag,
            patchFlag: t && e.type !== et ? o === -1 ? 16 : o | 16 : o,
            dynamicProps: e.dynamicProps,
            dynamicChildren: e.dynamicChildren,
            appContext: e.appContext,
            dirs: e.dirs,
            transition: e.transition,
            component: e.component,
            suspense: e.suspense,
            ssContent: e.ssContent && di(e.ssContent),
            ssFallback: e.ssFallback && di(e.ssFallback),
            el: e.el,
            anchor: e.anchor
        }
    }

    function hi(e = " ", t = 0) {
        return nt(_c, null, e, t)
    }

    function jE(e, t) {
        const r = nt(Rl, null, e);
        return r.staticCount = t, r
    }

    function Se(e = "", t = !1) {
        return t ? (H(), lr(Jr, null, e)) : nt(Jr, null, e)
    }

    function Tn(e) {
        return e == null || typeof e == "boolean" ? nt(Jr) : ke(e) ? nt(et, null, e.slice()) : typeof e == "object" ? ni(e) : nt(_c, null, String(e))
    }

    function ni(e) {
        return e.el === null || e.memo ? e : di(e)
    }

    function Ah(e, t) {
        let r = 0;
        const {
            shapeFlag: n
        } = e;
        if (t == null) t = null;
        else if (ke(t)) r = 16;
        else if (typeof t == "object")
            if (n & 65) {
                const s = t.default;
                s && (s._c && (s._d = !1), Ah(e, s()), s._c && (s._d = !0));
                return
            } else {
                r = 32;
                const s = t._;
                !s && !(bc in t) ? t._ctx = or : s === 3 && or && (or.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024))
            }
        else He(t) ? (t = {
            default: t,
            _ctx: or
        }, r = 32) : (t = String(t), n & 64 ? (r = 16, t = [hi(t)]) : r = 8);
        e.children = t, e.shapeFlag |= r
    }

    function Ec(...e) {
        const t = {};
        for (let r = 0; r < e.length; r++) {
            const n = e[r];
            for (const s in n)
                if (s === "class") t.class !== n.class && (t.class = Me([t.class, n.class]));
                else if (s === "style") t.style = ic([t.style, n.style]);
            else if (ac(s)) {
                const o = t[s],
                    l = n[s];
                l && o !== l && !(ke(o) && o.includes(l)) && (t[s] = o ? [].concat(o, l) : l)
            } else s !== "" && (t[s] = n[s])
        }
        return t
    }

    function vn(e, t, r, n = null) {
        Xr(e, t, 7, [r, n])
    }
    const VL = ME();
    let KL = 0;

    function YL(e, t, r) {
        const n = e.type,
            s = (t ? t.appContext : e.appContext) || VL,
            o = {
                uid: KL++,
                vnode: e,
                type: n,
                parent: t,
                appContext: s,
                root: null,
                next: null,
                subTree: null,
                effect: null,
                update: null,
                scope: new Xb(!0),
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
                propsOptions: PE(n, s),
                emitsOptions: _E(n, s),
                emit: null,
                emitted: null,
                propsDefaults: gt,
                inheritAttrs: n.inheritAttrs,
                ctx: gt,
                data: gt,
                props: gt,
                attrs: gt,
                slots: gt,
                refs: gt,
                setupState: gt,
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
        }, o.root = t ? t.root : o, o.emit = iL.bind(null, o), e.ce && e.ce(o), o
    }
    let qt = null;
    const ss = () => qt || or,
        zs = e => {
            qt = e, e.scope.on()
        },
        es = () => {
            qt && qt.scope.off(), qt = null
        };

    function GE(e) {
        return e.vnode.shapeFlag & 4
    }
    let Qa = !1;

    function qL(e, t = !1) {
        Qa = t;
        const {
            props: r,
            children: n
        } = e.vnode, s = GE(e);
        NL(e, r, s, t), kL(e, n);
        const o = s ? zL(e, t) : void 0;
        return Qa = !1, o
    }

    function zL(e, t) {
        const r = e.type;
        e.accessCache = Object.create(null), e.proxy = cE(new Proxy(e.ctx, wL));
        const {
            setup: n
        } = r;
        if (n) {
            const s = e.setupContext = n.length > 1 ? JL(e) : null;
            zs(e), ra();
            const o = ci(n, e, 0, [e.props, s]);
            if (na(), es(), Yb(o)) {
                if (o.then(es, es), t) return o.then(l => {
                    xv(e, l, t)
                }).catch(l => {
                    fc(l, e, 0)
                });
                e.asyncDep = o
            } else xv(e, o, t)
        } else WE(e, t)
    }

    function xv(e, t, r) {
        He(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : mt(t) && (e.setupState = hE(t)), WE(e, r)
    }
    let Dv;

    function WE(e, t, r) {
        const n = e.type;
        if (!e.render) {
            if (!t && Dv && !n.render) {
                const s = n.template || $h(e).template;
                if (s) {
                    const {
                        isCustomElement: o,
                        compilerOptions: l
                    } = e.appContext.config, {
                        delimiters: u,
                        compilerOptions: f
                    } = n, h = tr(tr({
                        isCustomElement: o,
                        delimiters: u
                    }, l), f);
                    n.render = Dv(s, h)
                }
            }
            e.render = n.render || cn
        }
        zs(e), ra(), CL(e), na(), es()
    }

    function XL(e) {
        return new Proxy(e.attrs, {
            get(t, r) {
                return xr(e, "get", "$attrs"), t[r]
            }
        })
    }

    function JL(e) {
        const t = n => {
            e.exposed = n || {}
        };
        let r;
        return {
            get attrs() {
                return r || (r = XL(e))
            },
            slots: e.slots,
            emit: e.emit,
            expose: t
        }
    }

    function Tc(e) {
        if (e.exposed) return e.exposeProxy || (e.exposeProxy = new Proxy(hE(cE(e.exposed)), {
            get(t, r) {
                if (r in t) return t[r];
                if (r in jl) return jl[r](e)
            }
        }))
    }

    function ZL(e, t = !0) {
        return He(e) ? e.displayName || e.name : e.name || t && e.__name
    }

    function QL(e) {
        return He(e) && "__vccOpts" in e
    }
    const kr = (e, t) => JN(e, t, Qa);

    function Rh(e, t, r) {
        const n = arguments.length;
        return n === 2 ? mt(t) && !ke(t) ? Wl(t) ? nt(e, null, [t]) : nt(e, t) : nt(e, null, t) : (n > 3 ? r = Array.prototype.slice.call(arguments, 2) : n === 3 && Wl(r) && (r = [r]), nt(e, t, r))
    }
    const e2 = "3.2.39",
        t2 = "http://www.w3.org/2000/svg",
        Ki = typeof document < "u" ? document : null,
        Mv = Ki && Ki.createElement("template"),
        r2 = {
            insert: (e, t, r) => {
                t.insertBefore(e, r || null)
            },
            remove: e => {
                const t = e.parentNode;
                t && t.removeChild(e)
            },
            createElement: (e, t, r, n) => {
                const s = t ? Ki.createElementNS(t2, e) : Ki.createElement(e, r ? {
                    is: r
                } : void 0);
                return e === "select" && n && n.multiple != null && s.setAttribute("multiple", n.multiple), s
            },
            createText: e => Ki.createTextNode(e),
            createComment: e => Ki.createComment(e),
            setText: (e, t) => {
                e.nodeValue = t
            },
            setElementText: (e, t) => {
                e.textContent = t
            },
            parentNode: e => e.parentNode,
            nextSibling: e => e.nextSibling,
            querySelector: e => Ki.querySelector(e),
            setScopeId(e, t) {
                e.setAttribute(t, "")
            },
            cloneNode(e) {
                const t = e.cloneNode(!0);
                return "_value" in e && (t._value = e._value), t
            },
            insertStaticContent(e, t, r, n, s, o) {
                const l = r ? r.previousSibling : t.lastChild;
                if (s && (s === o || s.nextSibling))
                    for (; t.insertBefore(s.cloneNode(!0), r), !(s === o || !(s = s.nextSibling)););
                else {
                    Mv.innerHTML = n ? `<svg>${e}</svg>` : e;
                    const u = Mv.content;
                    if (n) {
                        const f = u.firstChild;
                        for (; f.firstChild;) u.appendChild(f.firstChild);
                        u.removeChild(f)
                    }
                    t.insertBefore(u, r)
                }
                return [l ? l.nextSibling : t.firstChild, r ? r.previousSibling : t.lastChild]
            }
        };

    function n2(e, t, r) {
        const n = e._vtc;
        n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : r ? e.setAttribute("class", t) : e.className = t
    }

    function i2(e, t, r) {
        const n = e.style,
            s = Ht(r);
        if (r && !s) {
            for (const o in r) vd(n, o, r[o]);
            if (t && !Ht(t))
                for (const o in t) r[o] == null && vd(n, o, "")
        } else {
            const o = n.display;
            s ? t !== r && (n.cssText = r) : t && e.removeAttribute("style"), "_vod" in e && (n.display = o)
        }
    }
    const Fv = /\s*!important$/;

    function vd(e, t, r) {
        if (ke(r)) r.forEach(n => vd(e, t, n));
        else if (r == null && (r = ""), t.startsWith("--")) e.setProperty(t, r);
        else {
            const n = s2(e, t);
            Fv.test(r) ? e.setProperty(as(n), r.replace(Fv, ""), "important") : e[n] = r
        }
    }
    const Uv = ["Webkit", "Moz", "ms"],
        gf = {};

    function s2(e, t) {
        const r = gf[t];
        if (r) return r;
        let n = wn(t);
        if (n !== "filter" && n in e) return gf[t] = n;
        n = cc(n);
        for (let s = 0; s < Uv.length; s++) {
            const o = Uv[s] + n;
            if (o in e) return gf[t] = o
        }
        return t
    }
    const Bv = "http://www.w3.org/1999/xlink";

    function a2(e, t, r, n, s) {
        if (n && t.startsWith("xlink:")) r == null ? e.removeAttributeNS(Bv, t.slice(6, t.length)) : e.setAttributeNS(Bv, t, r);
        else {
            const o = aN(t);
            r == null || o && !Hb(r) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : r)
        }
    }

    function o2(e, t, r, n, s, o, l) {
        if (t === "innerHTML" || t === "textContent") {
            n && l(n, s, o), e[t] = r == null ? "" : r;
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
            f === "boolean" ? r = Hb(r) : r == null && f === "string" ? (r = "", u = !0) : f === "number" && (r = 0, u = !0)
        }
        try {
            e[t] = r
        } catch {}
        u && e.removeAttribute(t)
    }
    const [HE, l2] = (() => {
        let e = Date.now,
            t = !1;
        if (typeof window < "u") {
            Date.now() > document.createEvent("Event").timeStamp && (e = performance.now.bind(performance));
            const r = navigator.userAgent.match(/firefox\/(\d+)/i);
            t = !!(r && Number(r[1]) <= 53)
        }
        return [e, t]
    })();
    let yd = 0;
    const c2 = Promise.resolve(),
        u2 = () => {
            yd = 0
        },
        f2 = () => yd || (c2.then(u2), yd = HE());

    function Yi(e, t, r, n) {
        e.addEventListener(t, r, n)
    }

    function d2(e, t, r, n) {
        e.removeEventListener(t, r, n)
    }

    function h2(e, t, r, n, s = null) {
        const o = e._vei || (e._vei = {}),
            l = o[t];
        if (n && l) l.value = n;
        else {
            const [u, f] = p2(t);
            if (n) {
                const h = o[t] = g2(n, s);
                Yi(e, u, h, f)
            } else l && (d2(e, u, l, f), o[t] = void 0)
        }
    }
    const jv = /(?:Once|Passive|Capture)$/;

    function p2(e) {
        let t;
        if (jv.test(e)) {
            t = {};
            let n;
            for (; n = e.match(jv);) e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0
        }
        return [e[2] === ":" ? e.slice(3) : as(e.slice(2)), t]
    }

    function g2(e, t) {
        const r = n => {
            const s = n.timeStamp || HE();
            (l2 || s >= r.attached - 1) && Xr(m2(n, r.value), t, 5, [n])
        };
        return r.value = e, r.attached = f2(), r
    }

    function m2(e, t) {
        if (ke(t)) {
            const r = e.stopImmediatePropagation;
            return e.stopImmediatePropagation = () => {
                r.call(e), e._stopped = !0
            }, t.map(n => s => !s._stopped && n && n(s))
        } else return t
    }
    const Gv = /^on[a-z]/,
        v2 = (e, t, r, n, s = !1, o, l, u, f) => {
            t === "class" ? n2(e, n, s) : t === "style" ? i2(e, r, n) : ac(t) ? fh(t) || h2(e, t, r, n, l) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : y2(e, t, n, s)) ? o2(e, t, n, o, l, u, f) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), a2(e, t, n, s))
        };

    function y2(e, t, r, n) {
        return n ? !!(t === "innerHTML" || t === "textContent" || t in e && Gv.test(t) && He(r)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || Gv.test(t) && Ht(r) ? !1 : t in e
    }
    const Qn = "transition",
        Aa = "animation",
        Sc = (e, {
            slots: t
        }) => Rh(TE, _2(e), t);
    Sc.displayName = "Transition";
    const VE = {
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
    Sc.props = tr({}, TE.props, VE);
    const Di = (e, t = []) => {
            ke(e) ? e.forEach(r => r(...t)) : e && e(...t)
        },
        Wv = e => e ? ke(e) ? e.some(t => t.length > 1) : e.length > 1 : !1;

    function _2(e) {
        const t = {};
        for (const fe in e) fe in VE || (t[fe] = e[fe]);
        if (e.css === !1) return t;
        const {
            name: r = "v",
            type: n,
            duration: s,
            enterFromClass: o = `${r}-enter-from`,
            enterActiveClass: l = `${r}-enter-active`,
            enterToClass: u = `${r}-enter-to`,
            appearFromClass: f = o,
            appearActiveClass: h = l,
            appearToClass: g = u,
            leaveFromClass: y = `${r}-leave-from`,
            leaveActiveClass: E = `${r}-leave-active`,
            leaveToClass: C = `${r}-leave-to`
        } = e, P = b2(s), M = P && P[0], B = P && P[1], {
            onBeforeEnter: $,
            onEnter: V,
            onEnterCancelled: q,
            onLeave: G,
            onLeaveCancelled: j,
            onBeforeAppear: J = $,
            onAppear: oe = V,
            onAppearCancelled: le = q
        } = t, ue = (fe, Ce, F) => {
            Mi(fe, Ce ? g : u), Mi(fe, Ce ? h : l), F && F()
        }, Ae = (fe, Ce) => {
            fe._isLeaving = !1, Mi(fe, y), Mi(fe, C), Mi(fe, E), Ce && Ce()
        }, $e = fe => (Ce, F) => {
            const ie = fe ? oe : V,
                de = () => ue(Ce, fe, F);
            Di(ie, [Ce, de]), Hv(() => {
                Mi(Ce, fe ? f : o), ei(Ce, fe ? g : u), Wv(ie) || Vv(Ce, n, M, de)
            })
        };
        return tr(t, {
            onBeforeEnter(fe) {
                Di($, [fe]), ei(fe, o), ei(fe, l)
            },
            onBeforeAppear(fe) {
                Di(J, [fe]), ei(fe, f), ei(fe, h)
            },
            onEnter: $e(!1),
            onAppear: $e(!0),
            onLeave(fe, Ce) {
                fe._isLeaving = !0;
                const F = () => Ae(fe, Ce);
                ei(fe, y), S2(), ei(fe, E), Hv(() => {
                    !fe._isLeaving || (Mi(fe, y), ei(fe, C), Wv(G) || Vv(fe, n, B, F))
                }), Di(G, [fe, F])
            },
            onEnterCancelled(fe) {
                ue(fe, !1), Di(q, [fe])
            },
            onAppearCancelled(fe) {
                ue(fe, !0), Di(le, [fe])
            },
            onLeaveCancelled(fe) {
                Ae(fe), Di(j, [fe])
            }
        })
    }

    function b2(e) {
        if (e == null) return null;
        if (mt(e)) return [mf(e.enter), mf(e.leave)]; {
            const t = mf(e);
            return [t, t]
        }
    }

    function mf(e) {
        return Fl(e)
    }

    function ei(e, t) {
        t.split(/\s+/).forEach(r => r && e.classList.add(r)), (e._vtc || (e._vtc = new Set)).add(t)
    }

    function Mi(e, t) {
        t.split(/\s+/).forEach(n => n && e.classList.remove(n));
        const {
            _vtc: r
        } = e;
        r && (r.delete(t), r.size || (e._vtc = void 0))
    }

    function Hv(e) {
        requestAnimationFrame(() => {
            requestAnimationFrame(e)
        })
    }
    let E2 = 0;

    function Vv(e, t, r, n) {
        const s = e._endId = ++E2,
            o = () => {
                s === e._endId && n()
            };
        if (r) return setTimeout(o, r);
        const {
            type: l,
            timeout: u,
            propCount: f
        } = T2(e, t);
        if (!l) return n();
        const h = l + "end";
        let g = 0;
        const y = () => {
                e.removeEventListener(h, E), o()
            },
            E = C => {
                C.target === e && ++g >= f && y()
            };
        setTimeout(() => {
            g < f && y()
        }, u + 1), e.addEventListener(h, E)
    }

    function T2(e, t) {
        const r = window.getComputedStyle(e),
            n = P => (r[P] || "").split(", "),
            s = n(Qn + "Delay"),
            o = n(Qn + "Duration"),
            l = Kv(s, o),
            u = n(Aa + "Delay"),
            f = n(Aa + "Duration"),
            h = Kv(u, f);
        let g = null,
            y = 0,
            E = 0;
        t === Qn ? l > 0 && (g = Qn, y = l, E = o.length) : t === Aa ? h > 0 && (g = Aa, y = h, E = f.length) : (y = Math.max(l, h), g = y > 0 ? l > h ? Qn : Aa : null, E = g ? g === Qn ? o.length : f.length : 0);
        const C = g === Qn && /\b(transform|all)(,|$)/.test(r[Qn + "Property"]);
        return {
            type: g,
            timeout: y,
            propCount: E,
            hasTransform: C
        }
    }

    function Kv(e, t) {
        for (; e.length < t.length;) e = e.concat(e);
        return Math.max(...t.map((r, n) => Yv(r) + Yv(e[n])))
    }

    function Yv(e) {
        return Number(e.slice(0, -1).replace(",", ".")) * 1e3
    }

    function S2() {
        return document.body.offsetHeight
    }
    const Hl = e => {
        const t = e.props["onUpdate:modelValue"] || !1;
        return ke(t) ? r => Al(t, r) : t
    };

    function O2(e) {
        e.target.composing = !0
    }

    function qv(e) {
        const t = e.target;
        t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")))
    }
    const zv = {
            created(e, {
                modifiers: {
                    lazy: t,
                    trim: r,
                    number: n
                }
            }, s) {
                e._assign = Hl(s);
                const o = n || s.props && s.props.type === "number";
                Yi(e, t ? "change" : "input", l => {
                    if (l.target.composing) return;
                    let u = e.value;
                    r && (u = u.trim()), o && (u = Fl(u)), e._assign(u)
                }), r && Yi(e, "change", () => {
                    e.value = e.value.trim()
                }), t || (Yi(e, "compositionstart", O2), Yi(e, "compositionend", qv), Yi(e, "change", qv))
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
                if (e._assign = Hl(o), e.composing || document.activeElement === e && e.type !== "range" && (r || n && e.value.trim() === t || (s || e.type === "number") && Fl(e.value) === t)) return;
                const l = t == null ? "" : t;
                e.value !== l && (e.value = l)
            }
        },
        w2 = {
            deep: !0,
            created(e, t, r) {
                e._assign = Hl(r), Yi(e, "change", () => {
                    const n = e._modelValue,
                        s = C2(e),
                        o = e.checked,
                        l = e._assign;
                    if (ke(n)) {
                        const u = Vb(n, s),
                            f = u !== -1;
                        if (o && !f) l(n.concat(s));
                        else if (!o && f) {
                            const h = [...n];
                            h.splice(u, 1), l(h)
                        }
                    } else if (oc(n)) {
                        const u = new Set(n);
                        o ? u.add(s) : u.delete(s), l(u)
                    } else l(KE(e, o))
                })
            },
            mounted: Xv,
            beforeUpdate(e, t, r) {
                e._assign = Hl(r), Xv(e, t, r)
            }
        };

    function Xv(e, {
        value: t,
        oldValue: r
    }, n) {
        e._modelValue = t, ke(t) ? e.checked = Vb(t, n.props.value) > -1 : oc(t) ? e.checked = t.has(n.props.value) : t !== r && (e.checked = sc(t, KE(e, !0)))
    }

    function C2(e) {
        return "_value" in e ? e._value : e.value
    }

    function KE(e, t) {
        const r = t ? "_trueValue" : "_falseValue";
        return r in e ? e[r] : t
    }
    const $2 = ["ctrl", "shift", "alt", "meta"],
        I2 = {
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
            exact: (e, t) => $2.some(r => e[`${r}Key`] && !t.includes(r))
        },
        Zr = (e, t) => (r, ...n) => {
            for (let s = 0; s < t.length; s++) {
                const o = I2[t[s]];
                if (o && o(r, t)) return
            }
            return e(r, ...n)
        },
        A2 = {
            esc: "escape",
            space: " ",
            up: "arrow-up",
            left: "arrow-left",
            right: "arrow-right",
            down: "arrow-down",
            delete: "backspace"
        },
        Us = (e, t) => r => {
            if (!("key" in r)) return;
            const n = as(r.key);
            if (t.some(s => s === n || A2[s] === n)) return e(r)
        },
        R2 = tr({
            patchProp: v2
        }, r2);
    let Jv;

    function N2() {
        return Jv || (Jv = FL(R2))
    }
    const L2 = (...e) => {
        const t = N2().createApp(...e),
            {
                mount: r
            } = t;
        return t.mount = n => {
            const s = P2(n);
            if (!s) return;
            const o = t._component;
            !He(o) && !o.render && !o.template && (o.template = s.innerHTML), s.innerHTML = "";
            const l = r(s, !1, s instanceof SVGElement);
            return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), l
        }, t
    };

    function P2(e) {
        return Ht(e) ? document.querySelector(e) : e
    }
    const k2 = it({
            props: {
                player: Object
            },
            methods: {
                onChoiceClick(e) {
                    var l, u, f;
                    const t = this.player.choices[e];
                    if (t.send) {
                        this.$ecast.updateObject(this.player.responseKey, t.send).catch(this.$handleEcastError);
                        return
                    }
                    const r = (l = this.player.action) != null ? l : "choice",
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
        ze = (e, t) => {
            const r = e.__vccOpts || e;
            for (const [n, s] of t) r[n] = s;
            return r
        },
        x2 = {
            class: "choices"
        },
        D2 = {
            class: "constrain"
        },
        M2 = {
            key: 0
        },
        F2 = ["disabled", "onClick"];

    function U2(e, t, r, n, s, o) {
        const l = Rt("bb");
        return H(), z("div", x2, [Z("div", D2, [e.player.prompt ? Ie((H(), z("p", M2, null, 512)), [
            [l, e.player.prompt]
        ]) : Se("", !0), (H(!0), z(et, null, un(e.player.choices, (u, f) => (H(), z("button", {
            key: f,
            class: Me({
                selected: u.isSelected
            }),
            disabled: u.isDisabled,
            onClick: Zr(h => e.onChoiceClick(f), ["prevent"])
        }, _t(u.text), 11, F2))), 128))])])
    }
    const B2 = ze(k2, [
        ["render", U2]
    ]);
    class Vl {
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
    var kt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

    function j2(e) {
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

    function G2() {
        this.__data__ = [], this.size = 0
    }
    var W2 = G2;

    function H2(e, t) {
        return e === t || e !== e && t !== t
    }
    var Oc = H2,
        V2 = Oc;

    function K2(e, t) {
        for (var r = e.length; r--;)
            if (V2(e[r][0], t)) return r;
        return -1
    }
    var wc = K2,
        Y2 = wc,
        q2 = Array.prototype,
        z2 = q2.splice;

    function X2(e) {
        var t = this.__data__,
            r = Y2(t, e);
        if (r < 0) return !1;
        var n = t.length - 1;
        return r == n ? t.pop() : z2.call(t, r, 1), --this.size, !0
    }
    var J2 = X2,
        Z2 = wc;

    function Q2(e) {
        var t = this.__data__,
            r = Z2(t, e);
        return r < 0 ? void 0 : t[r][1]
    }
    var eP = Q2,
        tP = wc;

    function rP(e) {
        return tP(this.__data__, e) > -1
    }
    var nP = rP,
        iP = wc;

    function sP(e, t) {
        var r = this.__data__,
            n = iP(r, e);
        return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this
    }
    var aP = sP,
        oP = W2,
        lP = J2,
        cP = eP,
        uP = nP,
        fP = aP;

    function ia(e) {
        var t = -1,
            r = e == null ? 0 : e.length;
        for (this.clear(); ++t < r;) {
            var n = e[t];
            this.set(n[0], n[1])
        }
    }
    ia.prototype.clear = oP;
    ia.prototype.delete = lP;
    ia.prototype.get = cP;
    ia.prototype.has = uP;
    ia.prototype.set = fP;
    var Cc = ia,
        dP = Cc;

    function hP() {
        this.__data__ = new dP, this.size = 0
    }
    var pP = hP;

    function gP(e) {
        var t = this.__data__,
            r = t.delete(e);
        return this.size = t.size, r
    }
    var mP = gP;

    function vP(e) {
        return this.__data__.get(e)
    }
    var yP = vP;

    function _P(e) {
        return this.__data__.has(e)
    }
    var bP = _P,
        EP = typeof kt == "object" && kt && kt.Object === Object && kt,
        YE = EP,
        TP = YE,
        SP = typeof self == "object" && self && self.Object === Object && self,
        OP = TP || SP || Function("return this")(),
        dn = OP,
        wP = dn,
        CP = wP.Symbol,
        $c = CP,
        Zv = $c,
        qE = Object.prototype,
        $P = qE.hasOwnProperty,
        IP = qE.toString,
        Ra = Zv ? Zv.toStringTag : void 0;

    function AP(e) {
        var t = $P.call(e, Ra),
            r = e[Ra];
        try {
            e[Ra] = void 0;
            var n = !0
        } catch {}
        var s = IP.call(e);
        return n && (t ? e[Ra] = r : delete e[Ra]), s
    }
    var RP = AP,
        NP = Object.prototype,
        LP = NP.toString;

    function PP(e) {
        return LP.call(e)
    }
    var kP = PP,
        Qv = $c,
        xP = RP,
        DP = kP,
        MP = "[object Null]",
        FP = "[object Undefined]",
        ey = Qv ? Qv.toStringTag : void 0;

    function UP(e) {
        return e == null ? e === void 0 ? FP : MP : ey && ey in Object(e) ? xP(e) : DP(e)
    }
    var sa = UP;

    function BP(e) {
        var t = typeof e;
        return e != null && (t == "object" || t == "function")
    }
    var hn = BP,
        jP = sa,
        GP = hn,
        WP = "[object AsyncFunction]",
        HP = "[object Function]",
        VP = "[object GeneratorFunction]",
        KP = "[object Proxy]";

    function YP(e) {
        if (!GP(e)) return !1;
        var t = jP(e);
        return t == HP || t == VP || t == WP || t == KP
    }
    var Nh = YP,
        qP = dn,
        zP = qP["__core-js_shared__"],
        XP = zP,
        vf = XP,
        ty = function() {
            var e = /[^.]+$/.exec(vf && vf.keys && vf.keys.IE_PROTO || "");
            return e ? "Symbol(src)_1." + e : ""
        }();

    function JP(e) {
        return !!ty && ty in e
    }
    var ZP = JP,
        QP = Function.prototype,
        ek = QP.toString;

    function tk(e) {
        if (e != null) {
            try {
                return ek.call(e)
            } catch {}
            try {
                return e + ""
            } catch {}
        }
        return ""
    }
    var zE = tk,
        rk = Nh,
        nk = ZP,
        ik = hn,
        sk = zE,
        ak = /[\\^$.*+?()[\]{}|]/g,
        ok = /^\[object .+?Constructor\]$/,
        lk = Function.prototype,
        ck = Object.prototype,
        uk = lk.toString,
        fk = ck.hasOwnProperty,
        dk = RegExp("^" + uk.call(fk).replace(ak, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

    function hk(e) {
        if (!ik(e) || nk(e)) return !1;
        var t = rk(e) ? dk : ok;
        return t.test(sk(e))
    }
    var pk = hk;

    function gk(e, t) {
        return e == null ? void 0 : e[t]
    }
    var mk = gk,
        vk = pk,
        yk = mk;

    function _k(e, t) {
        var r = yk(e, t);
        return vk(r) ? r : void 0
    }
    var os = _k,
        bk = os,
        Ek = dn,
        Tk = bk(Ek, "Map"),
        Lh = Tk,
        Sk = os,
        Ok = Sk(Object, "create"),
        Ic = Ok,
        ry = Ic;

    function wk() {
        this.__data__ = ry ? ry(null) : {}, this.size = 0
    }
    var Ck = wk;

    function $k(e) {
        var t = this.has(e) && delete this.__data__[e];
        return this.size -= t ? 1 : 0, t
    }
    var Ik = $k,
        Ak = Ic,
        Rk = "__lodash_hash_undefined__",
        Nk = Object.prototype,
        Lk = Nk.hasOwnProperty;

    function Pk(e) {
        var t = this.__data__;
        if (Ak) {
            var r = t[e];
            return r === Rk ? void 0 : r
        }
        return Lk.call(t, e) ? t[e] : void 0
    }
    var kk = Pk,
        xk = Ic,
        Dk = Object.prototype,
        Mk = Dk.hasOwnProperty;

    function Fk(e) {
        var t = this.__data__;
        return xk ? t[e] !== void 0 : Mk.call(t, e)
    }
    var Uk = Fk,
        Bk = Ic,
        jk = "__lodash_hash_undefined__";

    function Gk(e, t) {
        var r = this.__data__;
        return this.size += this.has(e) ? 0 : 1, r[e] = Bk && t === void 0 ? jk : t, this
    }
    var Wk = Gk,
        Hk = Ck,
        Vk = Ik,
        Kk = kk,
        Yk = Uk,
        qk = Wk;

    function aa(e) {
        var t = -1,
            r = e == null ? 0 : e.length;
        for (this.clear(); ++t < r;) {
            var n = e[t];
            this.set(n[0], n[1])
        }
    }
    aa.prototype.clear = Hk;
    aa.prototype.delete = Vk;
    aa.prototype.get = Kk;
    aa.prototype.has = Yk;
    aa.prototype.set = qk;
    var zk = aa,
        ny = zk,
        Xk = Cc,
        Jk = Lh;

    function Zk() {
        this.size = 0, this.__data__ = {
            hash: new ny,
            map: new(Jk || Xk),
            string: new ny
        }
    }
    var Qk = Zk;

    function ex(e) {
        var t = typeof e;
        return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
    }
    var tx = ex,
        rx = tx;

    function nx(e, t) {
        var r = e.__data__;
        return rx(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map
    }
    var Ac = nx,
        ix = Ac;

    function sx(e) {
        var t = ix(this, e).delete(e);
        return this.size -= t ? 1 : 0, t
    }
    var ax = sx,
        ox = Ac;

    function lx(e) {
        return ox(this, e).get(e)
    }
    var cx = lx,
        ux = Ac;

    function fx(e) {
        return ux(this, e).has(e)
    }
    var dx = fx,
        hx = Ac;

    function px(e, t) {
        var r = hx(this, e),
            n = r.size;
        return r.set(e, t), this.size += r.size == n ? 0 : 1, this
    }
    var gx = px,
        mx = Qk,
        vx = ax,
        yx = cx,
        _x = dx,
        bx = gx;

    function oa(e) {
        var t = -1,
            r = e == null ? 0 : e.length;
        for (this.clear(); ++t < r;) {
            var n = e[t];
            this.set(n[0], n[1])
        }
    }
    oa.prototype.clear = mx;
    oa.prototype.delete = vx;
    oa.prototype.get = yx;
    oa.prototype.has = _x;
    oa.prototype.set = bx;
    var XE = oa,
        Ex = Cc,
        Tx = Lh,
        Sx = XE,
        Ox = 200;

    function wx(e, t) {
        var r = this.__data__;
        if (r instanceof Ex) {
            var n = r.__data__;
            if (!Tx || n.length < Ox - 1) return n.push([e, t]), this.size = ++r.size, this;
            r = this.__data__ = new Sx(n)
        }
        return r.set(e, t), this.size = r.size, this
    }
    var Cx = wx,
        $x = Cc,
        Ix = pP,
        Ax = mP,
        Rx = yP,
        Nx = bP,
        Lx = Cx;

    function la(e) {
        var t = this.__data__ = new $x(e);
        this.size = t.size
    }
    la.prototype.clear = Ix;
    la.prototype.delete = Ax;
    la.prototype.get = Rx;
    la.prototype.has = Nx;
    la.prototype.set = Lx;
    var JE = la,
        Px = os,
        kx = function() {
            try {
                var e = Px(Object, "defineProperty");
                return e({}, "", {}), e
            } catch {}
        }(),
        ZE = kx,
        iy = ZE;

    function xx(e, t, r) {
        t == "__proto__" && iy ? iy(e, t, {
            configurable: !0,
            enumerable: !0,
            value: r,
            writable: !0
        }) : e[t] = r
    }
    var Ph = xx,
        Dx = Ph,
        Mx = Oc;

    function Fx(e, t, r) {
        (r !== void 0 && !Mx(e[t], r) || r === void 0 && !(t in e)) && Dx(e, t, r)
    }
    var QE = Fx;

    function Ux(e) {
        return function(t, r, n) {
            for (var s = -1, o = Object(t), l = n(t), u = l.length; u--;) {
                var f = l[e ? u : ++s];
                if (r(o[f], f, o) === !1) break
            }
            return t
        }
    }
    var Bx = Ux,
        jx = Bx,
        Gx = jx(),
        Wx = Gx,
        Kl = {
            exports: {}
        };
    (function(e, t) {
        var r = dn,
            n = t && !t.nodeType && t,
            s = n && !0 && e && !e.nodeType && e,
            o = s && s.exports === n,
            l = o ? r.Buffer : void 0,
            u = l ? l.allocUnsafe : void 0;

        function f(h, g) {
            if (g) return h.slice();
            var y = h.length,
                E = u ? u(y) : new h.constructor(y);
            return h.copy(E), E
        }
        e.exports = f
    })(Kl, Kl.exports);
    var Hx = dn,
        Vx = Hx.Uint8Array,
        Kx = Vx,
        sy = Kx;

    function Yx(e) {
        var t = new e.constructor(e.byteLength);
        return new sy(t).set(new sy(e)), t
    }
    var kh = Yx,
        qx = kh;

    function zx(e, t) {
        var r = t ? qx(e.buffer) : e.buffer;
        return new e.constructor(r, e.byteOffset, e.length)
    }
    var e1 = zx;

    function Xx(e, t) {
        var r = -1,
            n = e.length;
        for (t || (t = Array(n)); ++r < n;) t[r] = e[r];
        return t
    }
    var t1 = Xx,
        Jx = hn,
        ay = Object.create,
        Zx = function() {
            function e() {}
            return function(t) {
                if (!Jx(t)) return {};
                if (ay) return ay(t);
                e.prototype = t;
                var r = new e;
                return e.prototype = void 0, r
            }
        }(),
        Qx = Zx;

    function eD(e, t) {
        return function(r) {
            return e(t(r))
        }
    }
    var r1 = eD,
        tD = r1,
        rD = tD(Object.getPrototypeOf, Object),
        xh = rD,
        nD = Object.prototype;

    function iD(e) {
        var t = e && e.constructor,
            r = typeof t == "function" && t.prototype || nD;
        return e === r
    }
    var Dh = iD,
        sD = Qx,
        aD = xh,
        oD = Dh;

    function lD(e) {
        return typeof e.constructor == "function" && !oD(e) ? sD(aD(e)) : {}
    }
    var n1 = lD;

    function cD(e) {
        return e != null && typeof e == "object"
    }
    var mi = cD,
        uD = sa,
        fD = mi,
        dD = "[object Arguments]";

    function hD(e) {
        return fD(e) && uD(e) == dD
    }
    var pD = hD,
        oy = pD,
        gD = mi,
        i1 = Object.prototype,
        mD = i1.hasOwnProperty,
        vD = i1.propertyIsEnumerable,
        yD = oy(function() {
            return arguments
        }()) ? oy : function(e) {
            return gD(e) && mD.call(e, "callee") && !vD.call(e, "callee")
        },
        s1 = yD,
        _D = Array.isArray,
        vi = _D,
        bD = 9007199254740991;

    function ED(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= bD
    }
    var a1 = ED,
        TD = Nh,
        SD = a1;

    function OD(e) {
        return e != null && SD(e.length) && !TD(e)
    }
    var Rc = OD,
        wD = Rc,
        CD = mi;

    function $D(e) {
        return CD(e) && wD(e)
    }
    var ID = $D,
        eo = {
            exports: {}
        };

    function AD() {
        return !1
    }
    var RD = AD;
    (function(e, t) {
        var r = dn,
            n = RD,
            s = t && !t.nodeType && t,
            o = s && !0 && e && !e.nodeType && e,
            l = o && o.exports === s,
            u = l ? r.Buffer : void 0,
            f = u ? u.isBuffer : void 0,
            h = f || n;
        e.exports = h
    })(eo, eo.exports);
    var ND = sa,
        LD = xh,
        PD = mi,
        kD = "[object Object]",
        xD = Function.prototype,
        DD = Object.prototype,
        o1 = xD.toString,
        MD = DD.hasOwnProperty,
        FD = o1.call(Object);

    function UD(e) {
        if (!PD(e) || ND(e) != kD) return !1;
        var t = LD(e);
        if (t === null) return !0;
        var r = MD.call(t, "constructor") && t.constructor;
        return typeof r == "function" && r instanceof r && o1.call(r) == FD
    }
    var BD = UD,
        jD = sa,
        GD = a1,
        WD = mi,
        HD = "[object Arguments]",
        VD = "[object Array]",
        KD = "[object Boolean]",
        YD = "[object Date]",
        qD = "[object Error]",
        zD = "[object Function]",
        XD = "[object Map]",
        JD = "[object Number]",
        ZD = "[object Object]",
        QD = "[object RegExp]",
        e3 = "[object Set]",
        t3 = "[object String]",
        r3 = "[object WeakMap]",
        n3 = "[object ArrayBuffer]",
        i3 = "[object DataView]",
        s3 = "[object Float32Array]",
        a3 = "[object Float64Array]",
        o3 = "[object Int8Array]",
        l3 = "[object Int16Array]",
        c3 = "[object Int32Array]",
        u3 = "[object Uint8Array]",
        f3 = "[object Uint8ClampedArray]",
        d3 = "[object Uint16Array]",
        h3 = "[object Uint32Array]",
        St = {};
    St[s3] = St[a3] = St[o3] = St[l3] = St[c3] = St[u3] = St[f3] = St[d3] = St[h3] = !0;
    St[HD] = St[VD] = St[n3] = St[KD] = St[i3] = St[YD] = St[qD] = St[zD] = St[XD] = St[JD] = St[ZD] = St[QD] = St[e3] = St[t3] = St[r3] = !1;

    function p3(e) {
        return WD(e) && GD(e.length) && !!St[jD(e)]
    }
    var g3 = p3;

    function m3(e) {
        return function(t) {
            return e(t)
        }
    }
    var Mh = m3,
        to = {
            exports: {}
        };
    (function(e, t) {
        var r = YE,
            n = t && !t.nodeType && t,
            s = n && !0 && e && !e.nodeType && e,
            o = s && s.exports === n,
            l = o && r.process,
            u = function() {
                try {
                    var f = s && s.require && s.require("util").types;
                    return f || l && l.binding && l.binding("util")
                } catch {}
            }();
        e.exports = u
    })(to, to.exports);
    var v3 = g3,
        y3 = Mh,
        ly = to.exports,
        cy = ly && ly.isTypedArray,
        _3 = cy ? y3(cy) : v3,
        l1 = _3;

    function b3(e, t) {
        if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__") return e[t]
    }
    var c1 = b3,
        E3 = Ph,
        T3 = Oc,
        S3 = Object.prototype,
        O3 = S3.hasOwnProperty;

    function w3(e, t, r) {
        var n = e[t];
        (!(O3.call(e, t) && T3(n, r)) || r === void 0 && !(t in e)) && E3(e, t, r)
    }
    var Fh = w3,
        C3 = Fh,
        $3 = Ph;

    function I3(e, t, r, n) {
        var s = !r;
        r || (r = {});
        for (var o = -1, l = t.length; ++o < l;) {
            var u = t[o],
                f = n ? n(r[u], e[u], u, r, e) : void 0;
            f === void 0 && (f = e[u]), s ? $3(r, u, f) : C3(r, u, f)
        }
        return r
    }
    var lo = I3;

    function A3(e, t) {
        for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
        return n
    }
    var R3 = A3,
        N3 = 9007199254740991,
        L3 = /^(?:0|[1-9]\d*)$/;

    function P3(e, t) {
        var r = typeof e;
        return t = t == null ? N3 : t, !!t && (r == "number" || r != "symbol" && L3.test(e)) && e > -1 && e % 1 == 0 && e < t
    }
    var Uh = P3,
        k3 = R3,
        x3 = s1,
        D3 = vi,
        M3 = eo.exports,
        F3 = Uh,
        U3 = l1,
        B3 = Object.prototype,
        j3 = B3.hasOwnProperty;

    function G3(e, t) {
        var r = D3(e),
            n = !r && x3(e),
            s = !r && !n && M3(e),
            o = !r && !n && !s && U3(e),
            l = r || n || s || o,
            u = l ? k3(e.length, String) : [],
            f = u.length;
        for (var h in e)(t || j3.call(e, h)) && !(l && (h == "length" || s && (h == "offset" || h == "parent") || o && (h == "buffer" || h == "byteLength" || h == "byteOffset") || F3(h, f))) && u.push(h);
        return u
    }
    var u1 = G3;

    function W3(e) {
        var t = [];
        if (e != null)
            for (var r in Object(e)) t.push(r);
        return t
    }
    var H3 = W3,
        V3 = hn,
        K3 = Dh,
        Y3 = H3,
        q3 = Object.prototype,
        z3 = q3.hasOwnProperty;

    function X3(e) {
        if (!V3(e)) return Y3(e);
        var t = K3(e),
            r = [];
        for (var n in e) n == "constructor" && (t || !z3.call(e, n)) || r.push(n);
        return r
    }
    var J3 = X3,
        Z3 = u1,
        Q3 = J3,
        eM = Rc;

    function tM(e) {
        return eM(e) ? Z3(e, !0) : Q3(e)
    }
    var co = tM,
        rM = lo,
        nM = co;

    function iM(e) {
        return rM(e, nM(e))
    }
    var sM = iM,
        uy = QE,
        aM = Kl.exports,
        oM = e1,
        lM = t1,
        cM = n1,
        fy = s1,
        dy = vi,
        uM = ID,
        fM = eo.exports,
        dM = Nh,
        hM = hn,
        pM = BD,
        gM = l1,
        hy = c1,
        mM = sM;

    function vM(e, t, r, n, s, o, l) {
        var u = hy(e, r),
            f = hy(t, r),
            h = l.get(f);
        if (h) {
            uy(e, r, h);
            return
        }
        var g = o ? o(u, f, r + "", e, t, l) : void 0,
            y = g === void 0;
        if (y) {
            var E = dy(f),
                C = !E && fM(f),
                P = !E && !C && gM(f);
            g = f, E || C || P ? dy(u) ? g = u : uM(u) ? g = lM(u) : C ? (y = !1, g = aM(f, !0)) : P ? (y = !1, g = oM(f, !0)) : g = [] : pM(f) || fy(f) ? (g = u, fy(u) ? g = mM(u) : (!hM(u) || dM(u)) && (g = cM(f))) : y = !1
        }
        y && (l.set(f, g), s(g, f, n, o, l), l.delete(f)), uy(e, r, g)
    }
    var yM = vM,
        _M = JE,
        bM = QE,
        EM = Wx,
        TM = yM,
        SM = hn,
        OM = co,
        wM = c1;

    function f1(e, t, r, n, s) {
        e !== t && EM(t, function(o, l) {
            if (s || (s = new _M), SM(o)) TM(e, t, l, r, f1, n, s);
            else {
                var u = n ? n(wM(e, l), o, l + "", e, t, s) : void 0;
                u === void 0 && (u = o), bM(e, l, u)
            }
        }, OM)
    }
    var CM = f1;

    function $M(e) {
        return e
    }
    var d1 = $M;

    function IM(e, t, r) {
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
    var AM = IM,
        RM = AM,
        py = Math.max;

    function NM(e, t, r) {
        return t = py(t === void 0 ? e.length - 1 : t, 0),
            function() {
                for (var n = arguments, s = -1, o = py(n.length - t, 0), l = Array(o); ++s < o;) l[s] = n[t + s];
                s = -1;
                for (var u = Array(t + 1); ++s < t;) u[s] = n[s];
                return u[t] = r(l), RM(e, this, u)
            }
    }
    var LM = NM;

    function PM(e) {
        return function() {
            return e
        }
    }
    var kM = PM,
        xM = kM,
        gy = ZE,
        DM = d1,
        MM = gy ? function(e, t) {
            return gy(e, "toString", {
                configurable: !0,
                enumerable: !1,
                value: xM(t),
                writable: !0
            })
        } : DM,
        FM = MM,
        UM = 800,
        BM = 16,
        jM = Date.now;

    function GM(e) {
        var t = 0,
            r = 0;
        return function() {
            var n = jM(),
                s = BM - (n - r);
            if (r = n, s > 0) {
                if (++t >= UM) return arguments[0]
            } else t = 0;
            return e.apply(void 0, arguments)
        }
    }
    var WM = GM,
        HM = FM,
        VM = WM,
        KM = VM(HM),
        YM = KM,
        qM = d1,
        zM = LM,
        XM = YM;

    function JM(e, t) {
        return XM(zM(e, t, qM), e + "")
    }
    var ZM = JM,
        QM = Oc,
        eF = Rc,
        tF = Uh,
        rF = hn;

    function nF(e, t, r) {
        if (!rF(r)) return !1;
        var n = typeof t;
        return (n == "number" ? eF(r) && tF(t, r.length) : n == "string" && t in r) ? QM(r[t], e) : !1
    }
    var iF = nF,
        sF = ZM,
        aF = iF;

    function oF(e) {
        return sF(function(t, r) {
            var n = -1,
                s = r.length,
                o = s > 1 ? r[s - 1] : void 0,
                l = s > 2 ? r[2] : void 0;
            for (o = e.length > 3 && typeof o == "function" ? (s--, o) : void 0, l && aF(r[0], r[1], l) && (o = s < 3 ? void 0 : o, s = 1), t = Object(t); ++n < s;) {
                var u = r[n];
                u && e(t, u, n, o)
            }
            return t
        })
    }
    var lF = oF,
        cF = CM,
        uF = lF,
        fF = uF(function(e, t, r) {
            cF(e, t, r)
        }),
        dF = fF;
    class Bs {
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
            return dF(t[0], ...t)
        }
    }
    ge(Bs, "locale"), ge(Bs, "supported", ["en", "fr", "it", "de", "es", "es-XL"]);
    const Fp = class {
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
                l = Math.min(Math.max(0, (o >> 16) * r), 255),
                u = Math.min(Math.max(0, (o >> 8 & 255) * r), 255);
            let h = (Math.min(Math.max(0, (o & 255) * r), 255) | u << 8 | l << 16).toString(16);
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
    let vr = Fp;
    ge(vr, "queryParams", new URLSearchParams(window.location.search)), ge(vr, "getQueryParam", t => Fp.queryParams.get(t)), ge(vr, "sleep", t => new Promise(r => {
        window.setTimeout(r, t)
    }));
    class zr {
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
                namespace: (s = (n = vr.getQueryParam("namespace")) != null ? n : vr.getQueryParam("ns")) != null ? s : this.defaultNamespace,
                isDisabled: vr.queryParams.has("incognito") || vr.queryParams.has("nc")
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
            var l;
            const r = t.toLowerCase(),
                n = (l = this.get("tags")) != null ? l : "[]",
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
    ge(zr, "defaultNamespace", "tv");
    class ro {
        constructor() {
            ge(this, "artifacts");
            this.artifacts = this.list()
        }
        get hasUnviewed() {
            return this.artifacts.some(t => !t.viewed)
        }
        add(t, r) {
            ro.add(t, r), this.artifacts = this.list()
        }
        static add(t, r) {
            if (!zr.isSupported) return;
            const n = this.isTestArtifact(t) ? "http" : "https",
                s = this.isTestArtifact(t) ? "games-test.jackbox.tv" : "games.jackbox.tv",
                o = `${n}://${s}/artifact/${t.categoryId}/${t.artifactId}/`,
                l = zr.get("galleries") || "[]";
            try {
                const u = JSON.parse(l) || [];
                if (u.some(f => f.url === o)) return;
                u.unshift({
                    url: o,
                    time: new Date().getTime(),
                    categoryId: t.categoryId,
                    viewed: !1
                }), zr.set("galleries", JSON.stringify(u.slice(0, 40)))
            } catch {
                console.warn("[Artifacts] Unable to add artifact to local storage")
            }
        }
        remove(t) {
            if (!zr.isSupported) return;
            const r = zr.get("galleries") || "[]";
            try {
                const n = JSON.parse(r) || [];
                n.splice(t, 1), zr.set("galleries", JSON.stringify(n)), this.artifacts = this.list()
            } catch {
                console.warn("[Artifacts] Unable to remove artifact")
            }
        }
        setAsViewed(t) {
            ro.setAsViewed(t), this.artifacts = this.list()
        }
        static setAsViewed(t) {
            if (!zr.isSupported) return;
            const r = zr.get("galleries") || "[]";
            try {
                const n = JSON.parse(r) || [];
                n.length && (n[t].viewed = !0), zr.set("galleries", JSON.stringify(n))
            } catch {
                console.warn(`[Artifacts] Unable to mark artifact ${t} as viewed`)
            }
        }
        static isTestArtifact(t) {
            var r;
            return ((r = t == null ? void 0 : t.rootId) == null ? void 0 : r.indexOf("test")) !== -1
        }
        list() {
            if (!zr.isSupported) return [];
            const t = new Intl.DateTimeFormat(Bs.locale, {
                    year: "numeric",
                    month: "short",
                    day: "numeric"
                }),
                r = zr.get("galleries") || "[]",
                n = Date.now();
            try {
                return (JSON.parse(r) || []).filter(o => n - o.time < 525600 * 60 * 1e3).map(o => {
                    const l = new Date(o.time),
                        u = t.format(l),
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
    var _d = {
        exports: {}
    };
    (function(e, t) {
        var r = typeof self < "u" ? self : kt,
            n = function() {
                function o() {
                    this.fetch = !1, this.DOMException = r.DOMException
                }
                return o.prototype = r, new o
            }();
        (function(o) {
            (function(l) {
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

                function E(F) {
                    return typeof F != "string" && (F = String(F)), F
                }

                function C(F) {
                    var ie = {
                        next: function() {
                            var de = F.shift();
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

                function P(F) {
                    this.map = {}, F instanceof P ? F.forEach(function(ie, de) {
                        this.append(de, ie)
                    }, this) : Array.isArray(F) ? F.forEach(function(ie) {
                        this.append(ie[0], ie[1])
                    }, this) : F && Object.getOwnPropertyNames(F).forEach(function(ie) {
                        this.append(ie, F[ie])
                    }, this)
                }
                P.prototype.append = function(F, ie) {
                    F = y(F), ie = E(ie);
                    var de = this.map[F];
                    this.map[F] = de ? de + ", " + ie : ie
                }, P.prototype.delete = function(F) {
                    delete this.map[y(F)]
                }, P.prototype.get = function(F) {
                    return F = y(F), this.has(F) ? this.map[F] : null
                }, P.prototype.has = function(F) {
                    return this.map.hasOwnProperty(y(F))
                }, P.prototype.set = function(F, ie) {
                    this.map[y(F)] = E(ie)
                }, P.prototype.forEach = function(F, ie) {
                    for (var de in this.map) this.map.hasOwnProperty(de) && F.call(ie, this.map[de], de, this)
                }, P.prototype.keys = function() {
                    var F = [];
                    return this.forEach(function(ie, de) {
                        F.push(de)
                    }), C(F)
                }, P.prototype.values = function() {
                    var F = [];
                    return this.forEach(function(ie) {
                        F.push(ie)
                    }), C(F)
                }, P.prototype.entries = function() {
                    var F = [];
                    return this.forEach(function(ie, de) {
                        F.push([de, ie])
                    }), C(F)
                }, u.iterable && (P.prototype[Symbol.iterator] = P.prototype.entries);

                function M(F) {
                    if (F.bodyUsed) return Promise.reject(new TypeError("Already read"));
                    F.bodyUsed = !0
                }

                function B(F) {
                    return new Promise(function(ie, de) {
                        F.onload = function() {
                            ie(F.result)
                        }, F.onerror = function() {
                            de(F.error)
                        }
                    })
                }

                function $(F) {
                    var ie = new FileReader,
                        de = B(ie);
                    return ie.readAsArrayBuffer(F), de
                }

                function V(F) {
                    var ie = new FileReader,
                        de = B(ie);
                    return ie.readAsText(F), de
                }

                function q(F) {
                    for (var ie = new Uint8Array(F), de = new Array(ie.length), be = 0; be < ie.length; be++) de[be] = String.fromCharCode(ie[be]);
                    return de.join("")
                }

                function G(F) {
                    if (F.slice) return F.slice(0);
                    var ie = new Uint8Array(F.byteLength);
                    return ie.set(new Uint8Array(F)), ie.buffer
                }

                function j() {
                    return this.bodyUsed = !1, this._initBody = function(F) {
                        this._bodyInit = F, F ? typeof F == "string" ? this._bodyText = F : u.blob && Blob.prototype.isPrototypeOf(F) ? this._bodyBlob = F : u.formData && FormData.prototype.isPrototypeOf(F) ? this._bodyFormData = F : u.searchParams && URLSearchParams.prototype.isPrototypeOf(F) ? this._bodyText = F.toString() : u.arrayBuffer && u.blob && f(F) ? (this._bodyArrayBuffer = G(F.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : u.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(F) || g(F)) ? this._bodyArrayBuffer = G(F) : this._bodyText = F = Object.prototype.toString.call(F) : this._bodyText = "", this.headers.get("content-type") || (typeof F == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : u.searchParams && URLSearchParams.prototype.isPrototypeOf(F) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                    }, u.blob && (this.blob = function() {
                        var F = M(this);
                        if (F) return F;
                        if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                        if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                        if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                        return Promise.resolve(new Blob([this._bodyText]))
                    }, this.arrayBuffer = function() {
                        return this._bodyArrayBuffer ? M(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then($)
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
                var J = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

                function oe(F) {
                    var ie = F.toUpperCase();
                    return J.indexOf(ie) > -1 ? ie : F
                }

                function le(F, ie) {
                    ie = ie || {};
                    var de = ie.body;
                    if (F instanceof le) {
                        if (F.bodyUsed) throw new TypeError("Already read");
                        this.url = F.url, this.credentials = F.credentials, ie.headers || (this.headers = new P(F.headers)), this.method = F.method, this.mode = F.mode, this.signal = F.signal, !de && F._bodyInit != null && (de = F._bodyInit, F.bodyUsed = !0)
                    } else this.url = String(F);
                    if (this.credentials = ie.credentials || this.credentials || "same-origin", (ie.headers || !this.headers) && (this.headers = new P(ie.headers)), this.method = oe(ie.method || this.method || "GET"), this.mode = ie.mode || this.mode || null, this.signal = ie.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && de) throw new TypeError("Body not allowed for GET or HEAD requests");
                    this._initBody(de)
                }
                le.prototype.clone = function() {
                    return new le(this, {
                        body: this._bodyInit
                    })
                };

                function ue(F) {
                    var ie = new FormData;
                    return F.trim().split("&").forEach(function(de) {
                        if (de) {
                            var be = de.split("="),
                                ve = be.shift().replace(/\+/g, " "),
                                Oe = be.join("=").replace(/\+/g, " ");
                            ie.append(decodeURIComponent(ve), decodeURIComponent(Oe))
                        }
                    }), ie
                }

                function Ae(F) {
                    var ie = new P,
                        de = F.replace(/\r?\n[\t ]+/g, " ");
                    return de.split(/\r?\n/).forEach(function(be) {
                        var ve = be.split(":"),
                            Oe = ve.shift().trim();
                        if (Oe) {
                            var Fe = ve.join(":").trim();
                            ie.append(Oe, Fe)
                        }
                    }), ie
                }
                j.call(le.prototype);

                function $e(F, ie) {
                    ie || (ie = {}), this.type = "default", this.status = ie.status === void 0 ? 200 : ie.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in ie ? ie.statusText : "OK", this.headers = new P(ie.headers), this.url = ie.url || "", this._initBody(F)
                }
                j.call($e.prototype), $e.prototype.clone = function() {
                    return new $e(this._bodyInit, {
                        status: this.status,
                        statusText: this.statusText,
                        headers: new P(this.headers),
                        url: this.url
                    })
                }, $e.error = function() {
                    var F = new $e(null, {
                        status: 0,
                        statusText: ""
                    });
                    return F.type = "error", F
                };
                var fe = [301, 302, 303, 307, 308];
                $e.redirect = function(F, ie) {
                    if (fe.indexOf(ie) === -1) throw new RangeError("Invalid status code");
                    return new $e(null, {
                        status: ie,
                        headers: {
                            location: F
                        }
                    })
                }, l.DOMException = o.DOMException;
                try {
                    new l.DOMException
                } catch {
                    l.DOMException = function(ie, de) {
                        this.message = ie, this.name = de;
                        var be = Error(ie);
                        this.stack = be.stack
                    }, l.DOMException.prototype = Object.create(Error.prototype), l.DOMException.prototype.constructor = l.DOMException
                }

                function Ce(F, ie) {
                    return new Promise(function(de, be) {
                        var ve = new le(F, ie);
                        if (ve.signal && ve.signal.aborted) return be(new l.DOMException("Aborted", "AbortError"));
                        var Oe = new XMLHttpRequest;

                        function Fe() {
                            Oe.abort()
                        }
                        Oe.onload = function() {
                            var Ge = {
                                status: Oe.status,
                                statusText: Oe.statusText,
                                headers: Ae(Oe.getAllResponseHeaders() || "")
                            };
                            Ge.url = "responseURL" in Oe ? Oe.responseURL : Ge.headers.get("X-Request-URL");
                            var tt = "response" in Oe ? Oe.response : Oe.responseText;
                            de(new $e(tt, Ge))
                        }, Oe.onerror = function() {
                            be(new TypeError("Network request failed"))
                        }, Oe.ontimeout = function() {
                            be(new TypeError("Network request failed"))
                        }, Oe.onabort = function() {
                            be(new l.DOMException("Aborted", "AbortError"))
                        }, Oe.open(ve.method, ve.url, !0), ve.credentials === "include" ? Oe.withCredentials = !0 : ve.credentials === "omit" && (Oe.withCredentials = !1), "responseType" in Oe && u.blob && (Oe.responseType = "blob"), ve.headers.forEach(function(Ge, tt) {
                            Oe.setRequestHeader(tt, Ge)
                        }), ve.signal && (ve.signal.addEventListener("abort", Fe), Oe.onreadystatechange = function() {
                            Oe.readyState === 4 && ve.signal.removeEventListener("abort", Fe)
                        }), Oe.send(typeof ve._bodyInit > "u" ? null : ve._bodyInit)
                    })
                }
                return Ce.polyfill = !0, o.fetch || (o.fetch = Ce, o.Headers = P, o.Request = le, o.Response = $e), l.Headers = P, l.Request = le, l.Response = $e, l.fetch = Ce, Object.defineProperty(l, "__esModule", {
                    value: !0
                }), l
            })({})
        })(n), n.fetch.ponyfill = !0, delete n.fetch.polyfill;
        var s = n;
        t = s.fetch, t.default = s.fetch, t.fetch = s.fetch, t.Headers = s.Headers, t.Request = s.Request, t.Response = s.Response, e.exports = t
    })(_d, _d.exports);
    var hF = function() {
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
                var l = Object.getOwnPropertyDescriptor(t, r);
                if (l.value !== s || l.enumerable !== !0) return !1
            }
            return !0
        },
        my = typeof Symbol < "u" && Symbol,
        pF = hF,
        gF = function() {
            return typeof my != "function" || typeof Symbol != "function" || typeof my("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : pF()
        },
        mF = "Function.prototype.bind called on incompatible ",
        yf = Array.prototype.slice,
        vF = Object.prototype.toString,
        yF = "[object Function]",
        _F = function(t) {
            var r = this;
            if (typeof r != "function" || vF.call(r) !== yF) throw new TypeError(mF + r);
            for (var n = yf.call(arguments, 1), s, o = function() {
                    if (this instanceof s) {
                        var g = r.apply(this, n.concat(yf.call(arguments)));
                        return Object(g) === g ? g : this
                    } else return r.apply(t, n.concat(yf.call(arguments)))
                }, l = Math.max(0, r.length - n.length), u = [], f = 0; f < l; f++) u.push("$" + f);
            if (s = Function("binder", "return function (" + u.join(",") + "){ return binder.apply(this,arguments); }")(o), r.prototype) {
                var h = function() {};
                h.prototype = r.prototype, s.prototype = new h, h.prototype = null
            }
            return s
        },
        bF = _F,
        Bh = Function.prototype.bind || bF,
        EF = Bh,
        TF = EF.call(Function.call, Object.prototype.hasOwnProperty),
        Ze, Xs = SyntaxError,
        h1 = Function,
        js = TypeError,
        _f = function(e) {
            try {
                return h1('"use strict"; return (' + e + ").constructor;")()
            } catch {}
        },
        ts = Object.getOwnPropertyDescriptor;
    if (ts) try {
        ts({}, "")
    } catch {
        ts = null
    }
    var bf = function() {
            throw new js
        },
        SF = ts ? function() {
            try {
                return arguments.callee, bf
            } catch {
                try {
                    return ts(arguments, "callee").get
                } catch {
                    return bf
                }
            }
        }() : bf,
        Os = gF(),
        ii = Object.getPrototypeOf || function(e) {
            return e.__proto__
        },
        Is = {},
        OF = typeof Uint8Array > "u" ? Ze : ii(Uint8Array),
        Gs = {
            "%AggregateError%": typeof AggregateError > "u" ? Ze : AggregateError,
            "%Array%": Array,
            "%ArrayBuffer%": typeof ArrayBuffer > "u" ? Ze : ArrayBuffer,
            "%ArrayIteratorPrototype%": Os ? ii([][Symbol.iterator]()) : Ze,
            "%AsyncFromSyncIteratorPrototype%": Ze,
            "%AsyncFunction%": Is,
            "%AsyncGenerator%": Is,
            "%AsyncGeneratorFunction%": Is,
            "%AsyncIteratorPrototype%": Is,
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
            "%Function%": h1,
            "%GeneratorFunction%": Is,
            "%Int8Array%": typeof Int8Array > "u" ? Ze : Int8Array,
            "%Int16Array%": typeof Int16Array > "u" ? Ze : Int16Array,
            "%Int32Array%": typeof Int32Array > "u" ? Ze : Int32Array,
            "%isFinite%": isFinite,
            "%isNaN%": isNaN,
            "%IteratorPrototype%": Os ? ii(ii([][Symbol.iterator]())) : Ze,
            "%JSON%": typeof JSON == "object" ? JSON : Ze,
            "%Map%": typeof Map > "u" ? Ze : Map,
            "%MapIteratorPrototype%": typeof Map > "u" || !Os ? Ze : ii(new Map()[Symbol.iterator]()),
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
            "%SetIteratorPrototype%": typeof Set > "u" || !Os ? Ze : ii(new Set()[Symbol.iterator]()),
            "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? Ze : SharedArrayBuffer,
            "%String%": String,
            "%StringIteratorPrototype%": Os ? ii("" [Symbol.iterator]()) : Ze,
            "%Symbol%": Os ? Symbol : Ze,
            "%SyntaxError%": Xs,
            "%ThrowTypeError%": SF,
            "%TypedArray%": OF,
            "%TypeError%": js,
            "%Uint8Array%": typeof Uint8Array > "u" ? Ze : Uint8Array,
            "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? Ze : Uint8ClampedArray,
            "%Uint16Array%": typeof Uint16Array > "u" ? Ze : Uint16Array,
            "%Uint32Array%": typeof Uint32Array > "u" ? Ze : Uint32Array,
            "%URIError%": URIError,
            "%WeakMap%": typeof WeakMap > "u" ? Ze : WeakMap,
            "%WeakRef%": typeof WeakRef > "u" ? Ze : WeakRef,
            "%WeakSet%": typeof WeakSet > "u" ? Ze : WeakSet
        },
        wF = function e(t) {
            var r;
            if (t === "%AsyncFunction%") r = _f("async function () {}");
            else if (t === "%GeneratorFunction%") r = _f("function* () {}");
            else if (t === "%AsyncGeneratorFunction%") r = _f("async function* () {}");
            else if (t === "%AsyncGenerator%") {
                var n = e("%AsyncGeneratorFunction%");
                n && (r = n.prototype)
            } else if (t === "%AsyncIteratorPrototype%") {
                var s = e("%AsyncGenerator%");
                s && (r = ii(s.prototype))
            }
            return Gs[t] = r, r
        },
        vy = {
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
        uo = Bh,
        Yl = TF,
        CF = uo.call(Function.call, Array.prototype.concat),
        $F = uo.call(Function.apply, Array.prototype.splice),
        yy = uo.call(Function.call, String.prototype.replace),
        ql = uo.call(Function.call, String.prototype.slice),
        IF = uo.call(Function.call, RegExp.prototype.exec),
        AF = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
        RF = /\\(\\)?/g,
        NF = function(t) {
            var r = ql(t, 0, 1),
                n = ql(t, -1);
            if (r === "%" && n !== "%") throw new Xs("invalid intrinsic syntax, expected closing `%`");
            if (n === "%" && r !== "%") throw new Xs("invalid intrinsic syntax, expected opening `%`");
            var s = [];
            return yy(t, AF, function(o, l, u, f) {
                s[s.length] = u ? yy(f, RF, "$1") : l || o
            }), s
        },
        LF = function(t, r) {
            var n = t,
                s;
            if (Yl(vy, n) && (s = vy[n], n = "%" + s[0] + "%"), Yl(Gs, n)) {
                var o = Gs[n];
                if (o === Is && (o = wF(n)), typeof o > "u" && !r) throw new js("intrinsic " + t + " exists, but is not available. Please file an issue!");
                return {
                    alias: s,
                    name: n,
                    value: o
                }
            }
            throw new Xs("intrinsic " + t + " does not exist!")
        },
        jh = function(t, r) {
            if (typeof t != "string" || t.length === 0) throw new js("intrinsic name must be a non-empty string");
            if (arguments.length > 1 && typeof r != "boolean") throw new js('"allowMissing" argument must be a boolean');
            if (IF(/^%?[^%]*%?$/g, t) === null) throw new Xs("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
            var n = NF(t),
                s = n.length > 0 ? n[0] : "",
                o = LF("%" + s + "%", r),
                l = o.name,
                u = o.value,
                f = !1,
                h = o.alias;
            h && (s = h[0], $F(n, CF([0, 1], h)));
            for (var g = 1, y = !0; g < n.length; g += 1) {
                var E = n[g],
                    C = ql(E, 0, 1),
                    P = ql(E, -1);
                if ((C === '"' || C === "'" || C === "`" || P === '"' || P === "'" || P === "`") && C !== P) throw new Xs("property names with quotes must have matching quotes");
                if ((E === "constructor" || !y) && (f = !0), s += "." + E, l = "%" + s + "%", Yl(Gs, l)) u = Gs[l];
                else if (u != null) {
                    if (!(E in u)) {
                        if (!r) throw new js("base intrinsic for " + t + " exists, but the property is not available.");
                        return
                    }
                    if (ts && g + 1 >= n.length) {
                        var M = ts(u, E);
                        y = !!M, y && "get" in M && !("originalValue" in M.get) ? u = M.get : u = u[E]
                    } else y = Yl(u, E), u = u[E];
                    y && !f && (Gs[l] = u)
                }
            }
            return u
        },
        p1 = {
            exports: {}
        };
    (function(e) {
        var t = Bh,
            r = jh,
            n = r("%Function.prototype.apply%"),
            s = r("%Function.prototype.call%"),
            o = r("%Reflect.apply%", !0) || t.call(s, n),
            l = r("%Object.getOwnPropertyDescriptor%", !0),
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
            if (l && u) {
                var C = l(E, "length");
                C.configurable && u(E, "length", {
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
    })(p1);
    var g1 = jh,
        m1 = p1.exports,
        PF = m1(g1("String.prototype.indexOf")),
        kF = function(t, r) {
            var n = g1(t, !!r);
            return typeof n == "function" && PF(t, ".prototype.") > -1 ? m1(n) : n
        };
    const xF = {},
        DF = Object.freeze(Object.defineProperty({
            __proto__: null,
            default: xF
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        MF = j2(DF);
    var Gh = typeof Map == "function" && Map.prototype,
        Ef = Object.getOwnPropertyDescriptor && Gh ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null,
        zl = Gh && Ef && typeof Ef.get == "function" ? Ef.get : null,
        FF = Gh && Map.prototype.forEach,
        Wh = typeof Set == "function" && Set.prototype,
        Tf = Object.getOwnPropertyDescriptor && Wh ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null,
        Xl = Wh && Tf && typeof Tf.get == "function" ? Tf.get : null,
        UF = Wh && Set.prototype.forEach,
        BF = typeof WeakMap == "function" && WeakMap.prototype,
        Ua = BF ? WeakMap.prototype.has : null,
        jF = typeof WeakSet == "function" && WeakSet.prototype,
        Ba = jF ? WeakSet.prototype.has : null,
        GF = typeof WeakRef == "function" && WeakRef.prototype,
        _y = GF ? WeakRef.prototype.deref : null,
        WF = Boolean.prototype.valueOf,
        HF = Object.prototype.toString,
        VF = Function.prototype.toString,
        KF = String.prototype.match,
        Hh = String.prototype.slice,
        oi = String.prototype.replace,
        YF = String.prototype.toUpperCase,
        by = String.prototype.toLowerCase,
        v1 = RegExp.prototype.test,
        Ey = Array.prototype.concat,
        Sn = Array.prototype.join,
        qF = Array.prototype.slice,
        Ty = Math.floor,
        bd = typeof BigInt == "function" ? BigInt.prototype.valueOf : null,
        Sf = Object.getOwnPropertySymbols,
        Ed = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null,
        Js = typeof Symbol == "function" && typeof Symbol.iterator == "object",
        ur = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === Js ? "object" : "symbol") ? Symbol.toStringTag : null,
        y1 = Object.prototype.propertyIsEnumerable,
        Sy = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(e) {
            return e.__proto__
        } : null);

    function Oy(e, t) {
        if (e === 1 / 0 || e === -1 / 0 || e !== e || e && e > -1e3 && e < 1e3 || v1.call(/e/, t)) return t;
        var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
        if (typeof e == "number") {
            var n = e < 0 ? -Ty(-e) : Ty(e);
            if (n !== e) {
                var s = String(n),
                    o = Hh.call(t, s.length + 1);
                return oi.call(s, r, "$&_") + "." + oi.call(oi.call(o, /([0-9]{3})/g, "$&_"), /_$/, "")
            }
        }
        return oi.call(t, r, "$&_")
    }
    var Td = MF,
        wy = Td.custom,
        Cy = b1(wy) ? wy : null,
        zF = function e(t, r, n, s) {
            var o = r || {};
            if (si(o, "quoteStyle") && o.quoteStyle !== "single" && o.quoteStyle !== "double") throw new TypeError('option "quoteStyle" must be "single" or "double"');
            if (si(o, "maxStringLength") && (typeof o.maxStringLength == "number" ? o.maxStringLength < 0 && o.maxStringLength !== 1 / 0 : o.maxStringLength !== null)) throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
            var l = si(o, "customInspect") ? o.customInspect : !0;
            if (typeof l != "boolean" && l !== "symbol") throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
            if (si(o, "indent") && o.indent !== null && o.indent !== "	" && !(parseInt(o.indent, 10) === o.indent && o.indent > 0)) throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
            if (si(o, "numericSeparator") && typeof o.numericSeparator != "boolean") throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
            var u = o.numericSeparator;
            if (typeof t > "u") return "undefined";
            if (t === null) return "null";
            if (typeof t == "boolean") return t ? "true" : "false";
            if (typeof t == "string") return T1(t, o);
            if (typeof t == "number") {
                if (t === 0) return 1 / 0 / t > 0 ? "0" : "-0";
                var f = String(t);
                return u ? Oy(t, f) : f
            }
            if (typeof t == "bigint") {
                var h = String(t) + "n";
                return u ? Oy(t, h) : h
            }
            var g = typeof o.depth > "u" ? 5 : o.depth;
            if (typeof n > "u" && (n = 0), n >= g && g > 0 && typeof t == "object") return Sd(t) ? "[Array]" : "[Object]";
            var y = h4(o, n);
            if (typeof s > "u") s = [];
            else if (E1(s, t) >= 0) return "[Circular]";

            function E(Ce, F, ie) {
                if (F && (s = qF.call(s), s.push(F)), ie) {
                    var de = {
                        depth: o.depth
                    };
                    return si(o, "quoteStyle") && (de.quoteStyle = o.quoteStyle), e(Ce, de, n + 1, s)
                }
                return e(Ce, o, n + 1, s)
            }
            if (typeof t == "function" && !$y(t)) {
                var C = i4(t),
                    P = pl(t, E);
                return "[Function" + (C ? ": " + C : " (anonymous)") + "]" + (P.length > 0 ? " { " + Sn.call(P, ", ") + " }" : "")
            }
            if (b1(t)) {
                var M = Js ? oi.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : Ed.call(t);
                return typeof t == "object" && !Js ? Na(M) : M
            }
            if (u4(t)) {
                for (var B = "<" + by.call(String(t.nodeName)), $ = t.attributes || [], V = 0; V < $.length; V++) B += " " + $[V].name + "=" + _1(XF($[V].value), "double", o);
                return B += ">", t.childNodes && t.childNodes.length && (B += "..."), B += "</" + by.call(String(t.nodeName)) + ">", B
            }
            if (Sd(t)) {
                if (t.length === 0) return "[]";
                var q = pl(t, E);
                return y && !d4(q) ? "[" + Od(q, y) + "]" : "[ " + Sn.call(q, ", ") + " ]"
            }
            if (ZF(t)) {
                var G = pl(t, E);
                return !("cause" in Error.prototype) && "cause" in t && !y1.call(t, "cause") ? "{ [" + String(t) + "] " + Sn.call(Ey.call("[cause]: " + E(t.cause), G), ", ") + " }" : G.length === 0 ? "[" + String(t) + "]" : "{ [" + String(t) + "] " + Sn.call(G, ", ") + " }"
            }
            if (typeof t == "object" && l) {
                if (Cy && typeof t[Cy] == "function" && Td) return Td(t, {
                    depth: g - n
                });
                if (l !== "symbol" && typeof t.inspect == "function") return t.inspect()
            }
            if (s4(t)) {
                var j = [];
                return FF.call(t, function(Ce, F) {
                    j.push(E(F, t, !0) + " => " + E(Ce, t))
                }), Iy("Map", zl.call(t), j, y)
            }
            if (l4(t)) {
                var J = [];
                return UF.call(t, function(Ce) {
                    J.push(E(Ce, t))
                }), Iy("Set", Xl.call(t), J, y)
            }
            if (a4(t)) return Of("WeakMap");
            if (c4(t)) return Of("WeakSet");
            if (o4(t)) return Of("WeakRef");
            if (e4(t)) return Na(E(Number(t)));
            if (r4(t)) return Na(E(bd.call(t)));
            if (t4(t)) return Na(WF.call(t));
            if (QF(t)) return Na(E(String(t)));
            if (!JF(t) && !$y(t)) {
                var oe = pl(t, E),
                    le = Sy ? Sy(t) === Object.prototype : t instanceof Object || t.constructor === Object,
                    ue = t instanceof Object ? "" : "null prototype",
                    Ae = !le && ur && Object(t) === t && ur in t ? Hh.call(yi(t), 8, -1) : ue ? "Object" : "",
                    $e = le || typeof t.constructor != "function" ? "" : t.constructor.name ? t.constructor.name + " " : "",
                    fe = $e + (Ae || ue ? "[" + Sn.call(Ey.call([], Ae || [], ue || []), ": ") + "] " : "");
                return oe.length === 0 ? fe + "{}" : y ? fe + "{" + Od(oe, y) + "}" : fe + "{ " + Sn.call(oe, ", ") + " }"
            }
            return String(t)
        };

    function _1(e, t, r) {
        var n = (r.quoteStyle || t) === "double" ? '"' : "'";
        return n + e + n
    }

    function XF(e) {
        return oi.call(String(e), /"/g, "&quot;")
    }

    function Sd(e) {
        return yi(e) === "[object Array]" && (!ur || !(typeof e == "object" && ur in e))
    }

    function JF(e) {
        return yi(e) === "[object Date]" && (!ur || !(typeof e == "object" && ur in e))
    }

    function $y(e) {
        return yi(e) === "[object RegExp]" && (!ur || !(typeof e == "object" && ur in e))
    }

    function ZF(e) {
        return yi(e) === "[object Error]" && (!ur || !(typeof e == "object" && ur in e))
    }

    function QF(e) {
        return yi(e) === "[object String]" && (!ur || !(typeof e == "object" && ur in e))
    }

    function e4(e) {
        return yi(e) === "[object Number]" && (!ur || !(typeof e == "object" && ur in e))
    }

    function t4(e) {
        return yi(e) === "[object Boolean]" && (!ur || !(typeof e == "object" && ur in e))
    }

    function b1(e) {
        if (Js) return e && typeof e == "object" && e instanceof Symbol;
        if (typeof e == "symbol") return !0;
        if (!e || typeof e != "object" || !Ed) return !1;
        try {
            return Ed.call(e), !0
        } catch {}
        return !1
    }

    function r4(e) {
        if (!e || typeof e != "object" || !bd) return !1;
        try {
            return bd.call(e), !0
        } catch {}
        return !1
    }
    var n4 = Object.prototype.hasOwnProperty || function(e) {
        return e in this
    };

    function si(e, t) {
        return n4.call(e, t)
    }

    function yi(e) {
        return HF.call(e)
    }

    function i4(e) {
        if (e.name) return e.name;
        var t = KF.call(VF.call(e), /^function\s*([\w$]+)/);
        return t ? t[1] : null
    }

    function E1(e, t) {
        if (e.indexOf) return e.indexOf(t);
        for (var r = 0, n = e.length; r < n; r++)
            if (e[r] === t) return r;
        return -1
    }

    function s4(e) {
        if (!zl || !e || typeof e != "object") return !1;
        try {
            zl.call(e);
            try {
                Xl.call(e)
            } catch {
                return !0
            }
            return e instanceof Map
        } catch {}
        return !1
    }

    function a4(e) {
        if (!Ua || !e || typeof e != "object") return !1;
        try {
            Ua.call(e, Ua);
            try {
                Ba.call(e, Ba)
            } catch {
                return !0
            }
            return e instanceof WeakMap
        } catch {}
        return !1
    }

    function o4(e) {
        if (!_y || !e || typeof e != "object") return !1;
        try {
            return _y.call(e), !0
        } catch {}
        return !1
    }

    function l4(e) {
        if (!Xl || !e || typeof e != "object") return !1;
        try {
            Xl.call(e);
            try {
                zl.call(e)
            } catch {
                return !0
            }
            return e instanceof Set
        } catch {}
        return !1
    }

    function c4(e) {
        if (!Ba || !e || typeof e != "object") return !1;
        try {
            Ba.call(e, Ba);
            try {
                Ua.call(e, Ua)
            } catch {
                return !0
            }
            return e instanceof WeakSet
        } catch {}
        return !1
    }

    function u4(e) {
        return !e || typeof e != "object" ? !1 : typeof HTMLElement < "u" && e instanceof HTMLElement ? !0 : typeof e.nodeName == "string" && typeof e.getAttribute == "function"
    }

    function T1(e, t) {
        if (e.length > t.maxStringLength) {
            var r = e.length - t.maxStringLength,
                n = "... " + r + " more character" + (r > 1 ? "s" : "");
            return T1(Hh.call(e, 0, t.maxStringLength), t) + n
        }
        var s = oi.call(oi.call(e, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, f4);
        return _1(s, "single", t)
    }

    function f4(e) {
        var t = e.charCodeAt(0),
            r = {
                8: "b",
                9: "t",
                10: "n",
                12: "f",
                13: "r"
            } [t];
        return r ? "\\" + r : "\\x" + (t < 16 ? "0" : "") + YF.call(t.toString(16))
    }

    function Na(e) {
        return "Object(" + e + ")"
    }

    function Of(e) {
        return e + " { ? }"
    }

    function Iy(e, t, r, n) {
        var s = n ? Od(r, n) : Sn.call(r, ", ");
        return e + " (" + t + ") {" + s + "}"
    }

    function d4(e) {
        for (var t = 0; t < e.length; t++)
            if (E1(e[t], `
`) >= 0) return !1;
        return !0
    }

    function h4(e, t) {
        var r;
        if (e.indent === "	") r = "	";
        else if (typeof e.indent == "number" && e.indent > 0) r = Sn.call(Array(e.indent + 1), " ");
        else return null;
        return {
            base: r,
            prev: Sn.call(Array(t + 1), r)
        }
    }

    function Od(e, t) {
        if (e.length === 0) return "";
        var r = `
` + t.prev + t.base;
        return r + Sn.call(e, "," + r) + `
` + t.prev
    }

    function pl(e, t) {
        var r = Sd(e),
            n = [];
        if (r) {
            n.length = e.length;
            for (var s = 0; s < e.length; s++) n[s] = si(e, s) ? t(e[s], e) : ""
        }
        var o = typeof Sf == "function" ? Sf(e) : [],
            l;
        if (Js) {
            l = {};
            for (var u = 0; u < o.length; u++) l["$" + o[u]] = o[u]
        }
        for (var f in e) !si(e, f) || r && String(Number(f)) === f && f < e.length || Js && l["$" + f] instanceof Symbol || (v1.call(/[^\w$]/, f) ? n.push(t(f, e) + ": " + t(e[f], e)) : n.push(f + ": " + t(e[f], e)));
        if (typeof Sf == "function")
            for (var h = 0; h < o.length; h++) y1.call(e, o[h]) && n.push("[" + t(o[h]) + "]: " + t(e[o[h]], e));
        return n
    }
    var Vh = jh,
        ca = kF,
        p4 = zF,
        g4 = Vh("%TypeError%"),
        gl = Vh("%WeakMap%", !0),
        ml = Vh("%Map%", !0),
        m4 = ca("WeakMap.prototype.get", !0),
        v4 = ca("WeakMap.prototype.set", !0),
        y4 = ca("WeakMap.prototype.has", !0),
        _4 = ca("Map.prototype.get", !0),
        b4 = ca("Map.prototype.set", !0),
        E4 = ca("Map.prototype.has", !0),
        Kh = function(e, t) {
            for (var r = e, n;
                (n = r.next) !== null; r = n)
                if (n.key === t) return r.next = n.next, n.next = e.next, e.next = n, n
        },
        T4 = function(e, t) {
            var r = Kh(e, t);
            return r && r.value
        },
        S4 = function(e, t, r) {
            var n = Kh(e, t);
            n ? n.value = r : e.next = {
                key: t,
                next: e.next,
                value: r
            }
        },
        O4 = function(e, t) {
            return !!Kh(e, t)
        },
        w4 = function() {
            var t, r, n, s = {
                assert: function(o) {
                    if (!s.has(o)) throw new g4("Side channel does not contain " + p4(o))
                },
                get: function(o) {
                    if (gl && o && (typeof o == "object" || typeof o == "function")) {
                        if (t) return m4(t, o)
                    } else if (ml) {
                        if (r) return _4(r, o)
                    } else if (n) return T4(n, o)
                },
                has: function(o) {
                    if (gl && o && (typeof o == "object" || typeof o == "function")) {
                        if (t) return y4(t, o)
                    } else if (ml) {
                        if (r) return E4(r, o)
                    } else if (n) return O4(n, o);
                    return !1
                },
                set: function(o, l) {
                    gl && o && (typeof o == "object" || typeof o == "function") ? (t || (t = new gl), v4(t, o, l)) : ml ? (r || (r = new ml), b4(r, o, l)) : (n || (n = {
                        key: {},
                        next: null
                    }), S4(n, o, l))
                }
            };
            return s
        },
        C4 = String.prototype.replace,
        $4 = /%20/g,
        wf = {
            RFC1738: "RFC1738",
            RFC3986: "RFC3986"
        },
        Yh = {
            default: wf.RFC3986,
            formatters: {
                RFC1738: function(e) {
                    return C4.call(e, $4, "+")
                },
                RFC3986: function(e) {
                    return String(e)
                }
            },
            RFC1738: wf.RFC1738,
            RFC3986: wf.RFC3986
        },
        I4 = Yh,
        Cf = Object.prototype.hasOwnProperty,
        qi = Array.isArray,
        yn = function() {
            for (var e = [], t = 0; t < 256; ++t) e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
            return e
        }(),
        A4 = function(t) {
            for (; t.length > 1;) {
                var r = t.pop(),
                    n = r.obj[r.prop];
                if (qi(n)) {
                    for (var s = [], o = 0; o < n.length; ++o) typeof n[o] < "u" && s.push(n[o]);
                    r.obj[r.prop] = s
                }
            }
        },
        S1 = function(t, r) {
            for (var n = r && r.plainObjects ? Object.create(null) : {}, s = 0; s < t.length; ++s) typeof t[s] < "u" && (n[s] = t[s]);
            return n
        },
        R4 = function e(t, r, n) {
            if (!r) return t;
            if (typeof r != "object") {
                if (qi(t)) t.push(r);
                else if (t && typeof t == "object")(n && (n.plainObjects || n.allowPrototypes) || !Cf.call(Object.prototype, r)) && (t[r] = !0);
                else return [t, r];
                return t
            }
            if (!t || typeof t != "object") return [t].concat(r);
            var s = t;
            return qi(t) && !qi(r) && (s = S1(t, n)), qi(t) && qi(r) ? (r.forEach(function(o, l) {
                if (Cf.call(t, l)) {
                    var u = t[l];
                    u && typeof u == "object" && o && typeof o == "object" ? t[l] = e(u, o, n) : t.push(o)
                } else t[l] = o
            }), t) : Object.keys(r).reduce(function(o, l) {
                var u = r[l];
                return Cf.call(o, l) ? o[l] = e(o[l], u, n) : o[l] = u, o
            }, s)
        },
        N4 = function(t, r) {
            return Object.keys(r).reduce(function(n, s) {
                return n[s] = r[s], n
            }, t)
        },
        L4 = function(e, t, r) {
            var n = e.replace(/\+/g, " ");
            if (r === "iso-8859-1") return n.replace(/%[0-9a-f]{2}/gi, unescape);
            try {
                return decodeURIComponent(n)
            } catch {
                return n
            }
        },
        P4 = function(t, r, n, s, o) {
            if (t.length === 0) return t;
            var l = t;
            if (typeof t == "symbol" ? l = Symbol.prototype.toString.call(t) : typeof t != "string" && (l = String(t)), n === "iso-8859-1") return escape(l).replace(/%u[0-9a-f]{4}/gi, function(g) {
                return "%26%23" + parseInt(g.slice(2), 16) + "%3B"
            });
            for (var u = "", f = 0; f < l.length; ++f) {
                var h = l.charCodeAt(f);
                if (h === 45 || h === 46 || h === 95 || h === 126 || h >= 48 && h <= 57 || h >= 65 && h <= 90 || h >= 97 && h <= 122 || o === I4.RFC1738 && (h === 40 || h === 41)) {
                    u += l.charAt(f);
                    continue
                }
                if (h < 128) {
                    u = u + yn[h];
                    continue
                }
                if (h < 2048) {
                    u = u + (yn[192 | h >> 6] + yn[128 | h & 63]);
                    continue
                }
                if (h < 55296 || h >= 57344) {
                    u = u + (yn[224 | h >> 12] + yn[128 | h >> 6 & 63] + yn[128 | h & 63]);
                    continue
                }
                f += 1, h = 65536 + ((h & 1023) << 10 | l.charCodeAt(f) & 1023), u += yn[240 | h >> 18] + yn[128 | h >> 12 & 63] + yn[128 | h >> 6 & 63] + yn[128 | h & 63]
            }
            return u
        },
        k4 = function(t) {
            for (var r = [{
                    obj: {
                        o: t
                    },
                    prop: "o"
                }], n = [], s = 0; s < r.length; ++s)
                for (var o = r[s], l = o.obj[o.prop], u = Object.keys(l), f = 0; f < u.length; ++f) {
                    var h = u[f],
                        g = l[h];
                    typeof g == "object" && g !== null && n.indexOf(g) === -1 && (r.push({
                        obj: l,
                        prop: h
                    }), n.push(g))
                }
            return A4(r), t
        },
        x4 = function(t) {
            return Object.prototype.toString.call(t) === "[object RegExp]"
        },
        D4 = function(t) {
            return !t || typeof t != "object" ? !1 : !!(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t))
        },
        M4 = function(t, r) {
            return [].concat(t, r)
        },
        F4 = function(t, r) {
            if (qi(t)) {
                for (var n = [], s = 0; s < t.length; s += 1) n.push(r(t[s]));
                return n
            }
            return r(t)
        },
        O1 = {
            arrayToObject: S1,
            assign: N4,
            combine: M4,
            compact: k4,
            decode: L4,
            encode: P4,
            isBuffer: D4,
            isRegExp: x4,
            maybeMap: F4,
            merge: R4
        },
        w1 = w4,
        wd = O1,
        ja = Yh,
        U4 = Object.prototype.hasOwnProperty,
        Ay = {
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
        Fn = Array.isArray,
        B4 = String.prototype.split,
        j4 = Array.prototype.push,
        C1 = function(e, t) {
            j4.apply(e, Fn(t) ? t : [t])
        },
        G4 = Date.prototype.toISOString,
        Ry = ja.default,
        Zt = {
            addQueryPrefix: !1,
            allowDots: !1,
            charset: "utf-8",
            charsetSentinel: !1,
            delimiter: "&",
            encode: !0,
            encoder: wd.encode,
            encodeValuesOnly: !1,
            format: Ry,
            formatter: ja.formatters[Ry],
            indices: !1,
            serializeDate: function(t) {
                return G4.call(t)
            },
            skipNulls: !1,
            strictNullHandling: !1
        },
        W4 = function(t) {
            return typeof t == "string" || typeof t == "number" || typeof t == "boolean" || typeof t == "symbol" || typeof t == "bigint"
        },
        $f = {},
        H4 = function e(t, r, n, s, o, l, u, f, h, g, y, E, C, P, M, B) {
            for (var $ = t, V = B, q = 0, G = !1;
                (V = V.get($f)) !== void 0 && !G;) {
                var j = V.get(t);
                if (q += 1, typeof j < "u") {
                    if (j === q) throw new RangeError("Cyclic object value");
                    G = !0
                }
                typeof V.get($f) > "u" && (q = 0)
            }
            if (typeof f == "function" ? $ = f(r, $) : $ instanceof Date ? $ = y($) : n === "comma" && Fn($) && ($ = wd.maybeMap($, function(Oe) {
                    return Oe instanceof Date ? y(Oe) : Oe
                })), $ === null) {
                if (o) return u && !P ? u(r, Zt.encoder, M, "key", E) : r;
                $ = ""
            }
            if (W4($) || wd.isBuffer($)) {
                if (u) {
                    var J = P ? r : u(r, Zt.encoder, M, "key", E);
                    if (n === "comma" && P) {
                        for (var oe = B4.call(String($), ","), le = "", ue = 0; ue < oe.length; ++ue) le += (ue === 0 ? "" : ",") + C(u(oe[ue], Zt.encoder, M, "value", E));
                        return [C(J) + (s && Fn($) && oe.length === 1 ? "[]" : "") + "=" + le]
                    }
                    return [C(J) + "=" + C(u($, Zt.encoder, M, "value", E))]
                }
                return [C(r) + "=" + C(String($))]
            }
            var Ae = [];
            if (typeof $ > "u") return Ae;
            var $e;
            if (n === "comma" && Fn($)) $e = [{
                value: $.length > 0 ? $.join(",") || null : void 0
            }];
            else if (Fn(f)) $e = f;
            else {
                var fe = Object.keys($);
                $e = h ? fe.sort(h) : fe
            }
            for (var Ce = s && Fn($) && $.length === 1 ? r + "[]" : r, F = 0; F < $e.length; ++F) {
                var ie = $e[F],
                    de = typeof ie == "object" && typeof ie.value < "u" ? ie.value : $[ie];
                if (!(l && de === null)) {
                    var be = Fn($) ? typeof n == "function" ? n(Ce, ie) : Ce : Ce + (g ? "." + ie : "[" + ie + "]");
                    B.set(t, q);
                    var ve = w1();
                    ve.set($f, B), C1(Ae, e(de, be, n, s, o, l, u, f, h, g, y, E, C, P, M, ve))
                }
            }
            return Ae
        },
        V4 = function(t) {
            if (!t) return Zt;
            if (t.encoder !== null && typeof t.encoder < "u" && typeof t.encoder != "function") throw new TypeError("Encoder has to be a function.");
            var r = t.charset || Zt.charset;
            if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
            var n = ja.default;
            if (typeof t.format < "u") {
                if (!U4.call(ja.formatters, t.format)) throw new TypeError("Unknown format option provided.");
                n = t.format
            }
            var s = ja.formatters[n],
                o = Zt.filter;
            return (typeof t.filter == "function" || Fn(t.filter)) && (o = t.filter), {
                addQueryPrefix: typeof t.addQueryPrefix == "boolean" ? t.addQueryPrefix : Zt.addQueryPrefix,
                allowDots: typeof t.allowDots > "u" ? Zt.allowDots : !!t.allowDots,
                charset: r,
                charsetSentinel: typeof t.charsetSentinel == "boolean" ? t.charsetSentinel : Zt.charsetSentinel,
                delimiter: typeof t.delimiter > "u" ? Zt.delimiter : t.delimiter,
                encode: typeof t.encode == "boolean" ? t.encode : Zt.encode,
                encoder: typeof t.encoder == "function" ? t.encoder : Zt.encoder,
                encodeValuesOnly: typeof t.encodeValuesOnly == "boolean" ? t.encodeValuesOnly : Zt.encodeValuesOnly,
                filter: o,
                format: n,
                formatter: s,
                serializeDate: typeof t.serializeDate == "function" ? t.serializeDate : Zt.serializeDate,
                skipNulls: typeof t.skipNulls == "boolean" ? t.skipNulls : Zt.skipNulls,
                sort: typeof t.sort == "function" ? t.sort : null,
                strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : Zt.strictNullHandling
            }
        },
        K4 = function(e, t) {
            var r = e,
                n = V4(t),
                s, o;
            typeof n.filter == "function" ? (o = n.filter, r = o("", r)) : Fn(n.filter) && (o = n.filter, s = o);
            var l = [];
            if (typeof r != "object" || r === null) return "";
            var u;
            t && t.arrayFormat in Ay ? u = t.arrayFormat : t && "indices" in t ? u = t.indices ? "indices" : "repeat" : u = "indices";
            var f = Ay[u];
            if (t && "commaRoundTrip" in t && typeof t.commaRoundTrip != "boolean") throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
            var h = f === "comma" && t && t.commaRoundTrip;
            s || (s = Object.keys(r)), n.sort && s.sort(n.sort);
            for (var g = w1(), y = 0; y < s.length; ++y) {
                var E = s[y];
                n.skipNulls && r[E] === null || C1(l, H4(r[E], E, f, h, n.strictNullHandling, n.skipNulls, n.encode ? n.encoder : null, n.filter, n.sort, n.allowDots, n.serializeDate, n.format, n.formatter, n.encodeValuesOnly, n.charset, g))
            }
            var C = l.join(n.delimiter),
                P = n.addQueryPrefix === !0 ? "?" : "";
            return n.charsetSentinel && (n.charset === "iso-8859-1" ? P += "utf8=%26%2310003%3B&" : P += "utf8=%E2%9C%93&"), C.length > 0 ? P + C : ""
        },
        Zs = O1,
        Cd = Object.prototype.hasOwnProperty,
        Y4 = Array.isArray,
        Yt = {
            allowDots: !1,
            allowPrototypes: !1,
            allowSparse: !1,
            arrayLimit: 20,
            charset: "utf-8",
            charsetSentinel: !1,
            comma: !1,
            decoder: Zs.decode,
            delimiter: "&",
            depth: 5,
            ignoreQueryPrefix: !1,
            interpretNumericEntities: !1,
            parameterLimit: 1e3,
            parseArrays: !0,
            plainObjects: !1,
            strictNullHandling: !1
        },
        q4 = function(e) {
            return e.replace(/&#(\d+);/g, function(t, r) {
                return String.fromCharCode(parseInt(r, 10))
            })
        },
        $1 = function(e, t) {
            return e && typeof e == "string" && t.comma && e.indexOf(",") > -1 ? e.split(",") : e
        },
        z4 = "utf8=%26%2310003%3B",
        X4 = "utf8=%E2%9C%93",
        J4 = function(t, r) {
            var n = {},
                s = r.ignoreQueryPrefix ? t.replace(/^\?/, "") : t,
                o = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit,
                l = s.split(r.delimiter, o),
                u = -1,
                f, h = r.charset;
            if (r.charsetSentinel)
                for (f = 0; f < l.length; ++f) l[f].indexOf("utf8=") === 0 && (l[f] === X4 ? h = "utf-8" : l[f] === z4 && (h = "iso-8859-1"), u = f, f = l.length);
            for (f = 0; f < l.length; ++f)
                if (f !== u) {
                    var g = l[f],
                        y = g.indexOf("]="),
                        E = y === -1 ? g.indexOf("=") : y + 1,
                        C, P;
                    E === -1 ? (C = r.decoder(g, Yt.decoder, h, "key"), P = r.strictNullHandling ? null : "") : (C = r.decoder(g.slice(0, E), Yt.decoder, h, "key"), P = Zs.maybeMap($1(g.slice(E + 1), r), function(M) {
                        return r.decoder(M, Yt.decoder, h, "value")
                    })), P && r.interpretNumericEntities && h === "iso-8859-1" && (P = q4(P)), g.indexOf("[]=") > -1 && (P = Y4(P) ? [P] : P), Cd.call(n, C) ? n[C] = Zs.combine(n[C], P) : n[C] = P
                } return n
        },
        Z4 = function(e, t, r, n) {
            for (var s = n ? t : $1(t, r), o = e.length - 1; o >= 0; --o) {
                var l, u = e[o];
                if (u === "[]" && r.parseArrays) l = [].concat(s);
                else {
                    l = r.plainObjects ? Object.create(null) : {};
                    var f = u.charAt(0) === "[" && u.charAt(u.length - 1) === "]" ? u.slice(1, -1) : u,
                        h = parseInt(f, 10);
                    !r.parseArrays && f === "" ? l = {
                        0: s
                    } : !isNaN(h) && u !== f && String(h) === f && h >= 0 && r.parseArrays && h <= r.arrayLimit ? (l = [], l[h] = s) : f !== "__proto__" && (l[f] = s)
                }
                s = l
            }
            return s
        },
        Q4 = function(t, r, n, s) {
            if (!!t) {
                var o = n.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t,
                    l = /(\[[^[\]]*])/,
                    u = /(\[[^[\]]*])/g,
                    f = n.depth > 0 && l.exec(o),
                    h = f ? o.slice(0, f.index) : o,
                    g = [];
                if (h) {
                    if (!n.plainObjects && Cd.call(Object.prototype, h) && !n.allowPrototypes) return;
                    g.push(h)
                }
                for (var y = 0; n.depth > 0 && (f = u.exec(o)) !== null && y < n.depth;) {
                    if (y += 1, !n.plainObjects && Cd.call(Object.prototype, f[1].slice(1, -1)) && !n.allowPrototypes) return;
                    g.push(f[1])
                }
                return f && g.push("[" + o.slice(f.index) + "]"), Z4(g, r, n, s)
            }
        },
        e8 = function(t) {
            if (!t) return Yt;
            if (t.decoder !== null && t.decoder !== void 0 && typeof t.decoder != "function") throw new TypeError("Decoder has to be a function.");
            if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
            var r = typeof t.charset > "u" ? Yt.charset : t.charset;
            return {
                allowDots: typeof t.allowDots > "u" ? Yt.allowDots : !!t.allowDots,
                allowPrototypes: typeof t.allowPrototypes == "boolean" ? t.allowPrototypes : Yt.allowPrototypes,
                allowSparse: typeof t.allowSparse == "boolean" ? t.allowSparse : Yt.allowSparse,
                arrayLimit: typeof t.arrayLimit == "number" ? t.arrayLimit : Yt.arrayLimit,
                charset: r,
                charsetSentinel: typeof t.charsetSentinel == "boolean" ? t.charsetSentinel : Yt.charsetSentinel,
                comma: typeof t.comma == "boolean" ? t.comma : Yt.comma,
                decoder: typeof t.decoder == "function" ? t.decoder : Yt.decoder,
                delimiter: typeof t.delimiter == "string" || Zs.isRegExp(t.delimiter) ? t.delimiter : Yt.delimiter,
                depth: typeof t.depth == "number" || t.depth === !1 ? +t.depth : Yt.depth,
                ignoreQueryPrefix: t.ignoreQueryPrefix === !0,
                interpretNumericEntities: typeof t.interpretNumericEntities == "boolean" ? t.interpretNumericEntities : Yt.interpretNumericEntities,
                parameterLimit: typeof t.parameterLimit == "number" ? t.parameterLimit : Yt.parameterLimit,
                parseArrays: t.parseArrays !== !1,
                plainObjects: typeof t.plainObjects == "boolean" ? t.plainObjects : Yt.plainObjects,
                strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : Yt.strictNullHandling
            }
        },
        t8 = function(e, t) {
            var r = e8(t);
            if (e === "" || e === null || typeof e > "u") return r.plainObjects ? Object.create(null) : {};
            for (var n = typeof e == "string" ? J4(e, r) : e, s = r.plainObjects ? Object.create(null) : {}, o = Object.keys(n), l = 0; l < o.length; ++l) {
                var u = o[l],
                    f = Q4(u, n[u], r, typeof e == "string");
                s = Zs.merge(s, f, r)
            }
            return r.allowSparse === !0 ? s : Zs.compact(s)
        },
        r8 = K4,
        n8 = t8,
        i8 = Yh,
        I1 = {
            formats: i8,
            parse: n8,
            stringify: r8
        };
    class s8 {
        constructor(t) {
            this.code = t.code, this.token = t.token, this.host = t.host
        }
    }
    class a8 {
        constructor(t) {
            this.appId = t.appId, this.appTag = t.appTag, this.audienceEnabled = t.audienceEnabled, this.code = t.code, this.host = t.host, this.audienceHost = t.audienceHost, this.locked = t.locked, this.full = t.full, this.moderationEnabled = t.moderationEnabled, this.passwordRequired = t.passwordRequired, this.twitchLocked = t.twitchLocked, this.locale = t.locale, this.keepalive = t.keepalive, this.controllerBranch = t.controllerBranch
        }
    }
    class o8 {
        constructor(t) {
            this.connections = t.connections
        }
    }
    class l8 {
        constructor(t) {
            this.cause = t.cause
        }
        whenReceived(t) {
            t.disconnect()
        }
    }
    class c8 {}
    var Nc = {
        CreateRoomReply: s8,
        GetRoomReply: a8,
        GetAudienceReply: o8,
        RoomExit: l8,
        RoomLock: c8
    };
    const Ny = _d.exports,
        u8 = I1,
        {
            CreateRoomReply: f8,
            GetRoomReply: d8
        } = Nc;
    class h8 {
        constructor(t) {
            if (!t.host) throw new Error("unable to create ecast APIClient: no host provided");
            if (this.host = t.host, !t.scheme) throw new Error("unable to create ecast APIClient: no scheme provided");
            this.scheme = t.scheme
        }
        url(t, r) {
            if (r) {
                let n = u8.stringify(r);
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
                l = await (await Ny(n, {
                    method: "POST"
                })).json();
            if (!l.ok) throw new Error(`failed to create room: ${l.error}`);
            let u = l.body;
            return new f8({
                code: u.code,
                token: u.token,
                host: u.host
            })
        }
        async getRoom(t) {
            let r = this.url(`/rooms/${t.code}`),
                s = await (await Ny(r)).json();
            if (!s.ok) throw new Error(`unable to get room with options ${JSON.stringify(t)}: ${s.error}`);
            let o = s.body;
            return new d8({
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
    var p8 = {
            APIClient: h8
        },
        As = null;
    typeof WebSocket < "u" ? As = WebSocket : typeof MozWebSocket < "u" ? As = MozWebSocket : typeof kt < "u" ? As = kt.WebSocket || kt.MozWebSocket : typeof window < "u" ? As = window.WebSocket || window.MozWebSocket : typeof self < "u" && (As = self.WebSocket || self.MozWebSocket);
    var g8 = As,
        qh = {
            exports: {}
        },
        Ws = typeof Reflect == "object" ? Reflect : null,
        Ly = Ws && typeof Ws.apply == "function" ? Ws.apply : function(t, r, n) {
            return Function.prototype.apply.call(t, r, n)
        },
        Ll;
    Ws && typeof Ws.ownKeys == "function" ? Ll = Ws.ownKeys : Object.getOwnPropertySymbols ? Ll = function(t) {
        return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))
    } : Ll = function(t) {
        return Object.getOwnPropertyNames(t)
    };

    function m8(e) {
        console && console.warn && console.warn(e)
    }
    var A1 = Number.isNaN || function(t) {
        return t !== t
    };

    function ht() {
        ht.init.call(this)
    }
    qh.exports = ht;
    qh.exports.once = b8;
    ht.EventEmitter = ht;
    ht.prototype._events = void 0;
    ht.prototype._eventsCount = 0;
    ht.prototype._maxListeners = void 0;
    var Py = 10;

    function Lc(e) {
        if (typeof e != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e)
    }
    Object.defineProperty(ht, "defaultMaxListeners", {
        enumerable: !0,
        get: function() {
            return Py
        },
        set: function(e) {
            if (typeof e != "number" || e < 0 || A1(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
            Py = e
        }
    });
    ht.init = function() {
        (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
    };
    ht.prototype.setMaxListeners = function(t) {
        if (typeof t != "number" || t < 0 || A1(t)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
        return this._maxListeners = t, this
    };

    function R1(e) {
        return e._maxListeners === void 0 ? ht.defaultMaxListeners : e._maxListeners
    }
    ht.prototype.getMaxListeners = function() {
        return R1(this)
    };
    ht.prototype.emit = function(t) {
        for (var r = [], n = 1; n < arguments.length; n++) r.push(arguments[n]);
        var s = t === "error",
            o = this._events;
        if (o !== void 0) s = s && o.error === void 0;
        else if (!s) return !1;
        if (s) {
            var l;
            if (r.length > 0 && (l = r[0]), l instanceof Error) throw l;
            var u = new Error("Unhandled error." + (l ? " (" + l.message + ")" : ""));
            throw u.context = l, u
        }
        var f = o[t];
        if (f === void 0) return !1;
        if (typeof f == "function") Ly(f, this, r);
        else
            for (var h = f.length, g = x1(f, h), n = 0; n < h; ++n) Ly(g[n], this, r);
        return !0
    };

    function N1(e, t, r, n) {
        var s, o, l;
        if (Lc(r), o = e._events, o === void 0 ? (o = e._events = Object.create(null), e._eventsCount = 0) : (o.newListener !== void 0 && (e.emit("newListener", t, r.listener ? r.listener : r), o = e._events), l = o[t]), l === void 0) l = o[t] = r, ++e._eventsCount;
        else if (typeof l == "function" ? l = o[t] = n ? [r, l] : [l, r] : n ? l.unshift(r) : l.push(r), s = R1(e), s > 0 && l.length > s && !l.warned) {
            l.warned = !0;
            var u = new Error("Possible EventEmitter memory leak detected. " + l.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
            u.name = "MaxListenersExceededWarning", u.emitter = e, u.type = t, u.count = l.length, m8(u)
        }
        return e
    }
    ht.prototype.addListener = function(t, r) {
        return N1(this, t, r, !1)
    };
    ht.prototype.on = ht.prototype.addListener;
    ht.prototype.prependListener = function(t, r) {
        return N1(this, t, r, !0)
    };

    function v8() {
        if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
    }

    function L1(e, t, r) {
        var n = {
                fired: !1,
                wrapFn: void 0,
                target: e,
                type: t,
                listener: r
            },
            s = v8.bind(n);
        return s.listener = r, n.wrapFn = s, s
    }
    ht.prototype.once = function(t, r) {
        return Lc(r), this.on(t, L1(this, t, r)), this
    };
    ht.prototype.prependOnceListener = function(t, r) {
        return Lc(r), this.prependListener(t, L1(this, t, r)), this
    };
    ht.prototype.removeListener = function(t, r) {
        var n, s, o, l, u;
        if (Lc(r), s = this._events, s === void 0) return this;
        if (n = s[t], n === void 0) return this;
        if (n === r || n.listener === r) --this._eventsCount === 0 ? this._events = Object.create(null) : (delete s[t], s.removeListener && this.emit("removeListener", t, n.listener || r));
        else if (typeof n != "function") {
            for (o = -1, l = n.length - 1; l >= 0; l--)
                if (n[l] === r || n[l].listener === r) {
                    u = n[l].listener, o = l;
                    break
                } if (o < 0) return this;
            o === 0 ? n.shift() : y8(n, o), n.length === 1 && (s[t] = n[0]), s.removeListener !== void 0 && this.emit("removeListener", t, u || r)
        }
        return this
    };
    ht.prototype.off = ht.prototype.removeListener;
    ht.prototype.removeAllListeners = function(t) {
        var r, n, s;
        if (n = this._events, n === void 0) return this;
        if (n.removeListener === void 0) return arguments.length === 0 ? (this._events = Object.create(null), this._eventsCount = 0) : n[t] !== void 0 && (--this._eventsCount === 0 ? this._events = Object.create(null) : delete n[t]), this;
        if (arguments.length === 0) {
            var o = Object.keys(n),
                l;
            for (s = 0; s < o.length; ++s) l = o[s], l !== "removeListener" && this.removeAllListeners(l);
            return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
        }
        if (r = n[t], typeof r == "function") this.removeListener(t, r);
        else if (r !== void 0)
            for (s = r.length - 1; s >= 0; s--) this.removeListener(t, r[s]);
        return this
    };

    function P1(e, t, r) {
        var n = e._events;
        if (n === void 0) return [];
        var s = n[t];
        return s === void 0 ? [] : typeof s == "function" ? r ? [s.listener || s] : [s] : r ? _8(s) : x1(s, s.length)
    }
    ht.prototype.listeners = function(t) {
        return P1(this, t, !0)
    };
    ht.prototype.rawListeners = function(t) {
        return P1(this, t, !1)
    };
    ht.listenerCount = function(e, t) {
        return typeof e.listenerCount == "function" ? e.listenerCount(t) : k1.call(e, t)
    };
    ht.prototype.listenerCount = k1;

    function k1(e) {
        var t = this._events;
        if (t !== void 0) {
            var r = t[e];
            if (typeof r == "function") return 1;
            if (r !== void 0) return r.length
        }
        return 0
    }
    ht.prototype.eventNames = function() {
        return this._eventsCount > 0 ? Ll(this._events) : []
    };

    function x1(e, t) {
        for (var r = new Array(t), n = 0; n < t; ++n) r[n] = e[n];
        return r
    }

    function y8(e, t) {
        for (; t + 1 < e.length; t++) e[t] = e[t + 1];
        e.pop()
    }

    function _8(e) {
        for (var t = new Array(e.length), r = 0; r < t.length; ++r) t[r] = e[r].listener || e[r];
        return t
    }

    function b8(e, t) {
        return new Promise(function(r, n) {
            function s(l) {
                e.removeListener(t, o), n(l)
            }

            function o() {
                typeof e.removeListener == "function" && e.removeListener("error", s), r([].slice.call(arguments))
            }
            D1(e, t, o, {
                once: !0
            }), t !== "error" && E8(e, s, {
                once: !0
            })
        })
    }

    function E8(e, t, r) {
        typeof e.on == "function" && D1(e, "error", t, r)
    }

    function D1(e, t, r, n) {
        if (typeof e.on == "function") n.once ? e.once(t, r) : e.on(t, r);
        else if (typeof e.addEventListener == "function") e.addEventListener(t, function s(o) {
            n.once && e.removeEventListener(t, s), r(o)
        });
        else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e)
    }
    class T8 {
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
    class Pc extends Error {
        constructor(t) {
            super(t), t && (this.code = t.code, this.message = t.message)
        }
    }
    class fo extends Pc {
        constructor(t) {
            super(t), this.code = 1e3, this.message = t && t.message ? t.message : "ecast server error"
        }
    }
    class M1 extends fo {
        constructor(t) {
            super(t), this.code = 1001, this.message = t && t.message ? t.message : "create room failed"
        }
    }
    class F1 extends fo {
        constructor(t) {
            super(t), this.code = 1002, this.message = t && t.message ? t.message : "unable to connect to room"
        }
    }
    class U1 extends fo {
        constructor(t) {
            super(t), this.code = 1003, this.message = t && t.message ? t.message : "server is shutting down"
        }
    }
    class ut extends Pc {
        constructor(t) {
            super(t), this.code = 2e3, this.message = t && t.message ? t.message : "ecast client error"
        }
    }
    class B1 extends ut {
        constructor(t) {
            super(t), this.code = 2001, this.message = t && t.message ? t.message : "parse error in ecast protocol"
        }
    }
    class j1 extends ut {
        constructor(t) {
            super(t), this.code = 2002, this.message = t && t.message ? t.message : "missing opcode"
        }
    }
    class G1 extends ut {
        constructor(t) {
            super(t), this.code = 2003, this.message = t && t.message ? t.message : "invalid opcode"
        }
    }
    class W1 extends ut {
        constructor(t) {
            super(t), this.code = 2004, this.message = t && t.message ? t.message : "invalid arguments"
        }
    }
    class H1 extends ut {
        constructor(t) {
            super(t), this.code = 2005, this.message = t && t.message ? t.message : "entity not found"
        }
    }
    class V1 extends ut {
        constructor(t) {
            super(t), this.code = 2006, this.message = t && t.message ? t.message : "an entity already exists with that key"
        }
    }
    class K1 extends ut {
        constructor(t) {
            super(t), this.code = 2007, this.message = t && t.message ? t.message : "the entity is not of the expected type"
        }
    }
    class Y1 extends ut {
        constructor(t) {
            super(t), this.code = 2008, this.message = t && t.message ? t.message : "no such client"
        }
    }
    class q1 extends ut {
        constructor(t) {
            super(t), this.code = 2009, this.message = t && t.message ? t.message : "room is locked"
        }
    }
    class z1 extends ut {
        constructor(t) {
            super(t), this.code = 2010, this.message = t && t.message ? t.message : "room is full"
        }
    }
    class X1 extends ut {
        constructor(t) {
            super(t), this.code = 2011, this.message = t && t.message ? t.message : "no such license"
        }
    }
    class J1 extends ut {
        constructor(t) {
            super(t), this.code = 2012, this.message = t && t.message ? t.message : "invalid license"
        }
    }
    class Z1 extends ut {
        constructor(t) {
            super(t), this.code = 2013, this.message = t && t.message ? t.message : "room not found"
        }
    }
    class Q1 extends ut {
        constructor(t) {
            super(t), this.code = 2014, this.message = t && t.message ? t.message : "requested role does not exist"
        }
    }
    class eT extends ut {
        constructor(t) {
            super(t), this.code = 2015, this.message = t && t.message ? t.message : "twitch login required"
        }
    }
    class tT extends ut {
        constructor(t) {
            super(t), this.code = 2016, this.message = t && t.message ? t.message : "no such option"
        }
    }
    class rT extends ut {
        constructor(t) {
            super(t), this.code = 2017, this.message = t && t.message ? t.message : "password required"
        }
    }
    class nT extends ut {
        constructor(t) {
            super(t), this.code = 2018, this.message = t && t.message ? t.message : "invalid room password"
        }
    }
    class iT extends ut {
        constructor(t) {
            super(t), this.code = 2019, this.message = t && t.message ? t.message : "missing name"
        }
    }
    class sT extends ut {
        constructor(t) {
            super(t), this.code = 2021, this.message = t && t.message ? t.message : "text did not pass text filters"
        }
    }
    class aT extends ut {
        constructor(t) {
            super(t), this.code = 2022, this.message = t && t.message ? t.message : "no such filter"
        }
    }
    class oT extends ut {
        constructor(t) {
            super(t), this.code = 2023, this.message = t && t.message ? t.message : "permission denied"
        }
    }
    class lT extends ut {
        constructor(t) {
            super(t), this.code = 2024, this.message = t && t.message ? t.message : "not connected to a room"
        }
    }
    class cT extends ut {
        constructor(t) {
            super(t), this.code = 2025, this.message = t && t.message ? t.message : "illegal operation"
        }
    }
    class uT extends ut {
        constructor(t) {
            super(t), this.code = 2026, this.message = t && t.message ? t.message : "invalid ACL change"
        }
    }
    class fT extends ut {
        constructor(t) {
            super(t), this.code = 2027, this.message = t && t.message ? t.message : "room has already ended"
        }
    }
    class dT extends ut {
        constructor(t) {
            super(t), this.code = 2028, this.message = t && t.message ? t.message : "the entity is locked"
        }
    }
    class hT extends ut {
        constructor(t) {
            super(t), this.code = 2420, this.message = t && t.message ? t.message : "rate limit exceeded"
        }
    }

    function S8({
        code: e,
        message: t
    }) {
        const r = O8[e];
        return r ? new r({
            message: t
        }) : new Pc({
            message: t
        })
    }
    var Ga = {
        createError: S8,
        CallError: Pc,
        EcastServerError: fo,
        EcastCreateRoomFailed: M1,
        EcastDialRoomFailed: F1,
        EcastServerIsShuttingDown: U1,
        EcastClientError: ut,
        EcastParseError: B1,
        EcastRequestIsMissingOpcode: j1,
        EcastRequestHasInvalidOpcode: G1,
        EcastRequestHasInvalidArguments: W1,
        EcastEntityNotFound: H1,
        EcastEntityAlreadyExists: V1,
        EcastEntityTypeError: K1,
        EcastNoSuchClient: Y1,
        EcastRoomIsLocked: q1,
        EcastRoomIsFull: z1,
        EcastLicenseNotFound: X1,
        EcastLicenseCheckFailed: J1,
        EcastRoomNotFound: Z1,
        EcastInvalidRole: Q1,
        EcastTwitchLoginRequired: eT,
        EcastInvalidOption: tT,
        EcastPasswordRequired: rT,
        EcastInvalidPassword: nT,
        EcastNameRequired: iT,
        EcastFilterError: sT,
        EcastNoSuchFilter: aT,
        EcastPermissionDenied: oT,
        EcastNotConnected: lT,
        EcastIllegalOperation: cT,
        EcastACLChangeDenied: uT,
        EcastRoomHasEnded: fT,
        EcastEntityLocked: dT,
        EcastRateLimitExceeded: hT,
        ObservedError: T8
    };
    const O8 = {
        1e3: fo,
        1001: M1,
        1002: F1,
        1003: U1,
        2e3: ut,
        2001: B1,
        2002: j1,
        2003: G1,
        2004: W1,
        2005: H1,
        2006: V1,
        2007: K1,
        2008: Y1,
        2009: q1,
        2010: z1,
        2011: X1,
        2012: J1,
        2013: Z1,
        2014: Q1,
        2015: eT,
        2016: tT,
        2017: rT,
        2018: nT,
        2019: iT,
        2021: sT,
        2022: aT,
        2023: oT,
        2024: lT,
        2025: cT,
        2026: uT,
        2027: fT,
        2028: dT,
        2420: hT
    };
    class w8 {
        constructor(t) {
            this.id = t.id, this.deviceId = t.deviceId, this.name = t.name, this.secret = t.secret, this.reconnect = t.reconnect, this.entities = t.entities, this.here = t.here, this.profile = t.profile, this.replayEnd = t.replayEnd
        }
    }
    class C8 {
        constructor(t) {
            this.id = t.id, this.userId = t.userId, this.name = t.name, this.role = t.role, this.reconnect = t.reconnect
        }
    }
    class $8 {
        constructor(t) {
            this.id = t.id, this.role = t.role
        }
    }
    class I8 {
        constructor(t) {
            this.to = t.to, this.from = t.from, this.body = t.body, this.userId = t.userId
        }
    }
    class A8 {
        constructor(t) {
            this.id = t.id, this.banned = t.banned, this.reason = t.reason
        }
    }
    var zh = {
        ClientConnected: C8,
        ClientDisconnected: $8,
        ClientKicked: A8,
        ClientSend: I8,
        ClientWelcome: w8
    };
    class R8 {
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
    var Xh = {
        CountGroup: R8
    };
    class N8 {
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
    var Jh = {
        GCounter: N8
    };
    class L8 {
        constructor(t) {
            this.pc = t.pc, this.opcode = t.opcode, this.result = t.result
        }
    }
    var pT = {
        Notification: L8
    };
    class P8 {
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
    class k8 {
        constructor(t) {
            this.message = t.message
        }
        toString() {
            return `ObjectEcho{message: ${this.message}}`
        }
    }
    var Zh = {
        ObjectEntity: P8,
        ObjectEcho: k8
    };
    class x8 {
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
    var Qh = {
        PNCounter: x8
    };
    class D8 {
        constructor(t) {
            this.pc = t.pc, this.re = t.re, this.opcode = t.opcode, this.result = t.result
        }
    }
    var gT = {
        Reply: D8
    };
    class M8 {
        constructor(t) {
            this.seq = t.seq, this.opcode = t.opcode, this.params = t.params
        }
    }
    var F8 = {
        Request: M8
    };
    class U8 {
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
    class B8 {
        constructor(t) {
            this.message = t.message
        }
        toString() {
            return `TextEcho{message: ${this.message}
}`
        }
    }
    var ep = {
        TextEntity: U8,
        TextEcho: B8
    };
    class j8 {
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
    var tp = {
        TextRing: j8
    };
    class G8 {
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
    var mT = {
        ArtifactEntity: G8
    };
    class W8 {
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
    class H8 {
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
    class V8 {
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
    var rp = {
        DoodleEntity: W8,
        DoodleLine: H8,
        DoodleLineRemoved: V8
    };
    class K8 {
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
    class Y8 {
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
    class q8 {
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
    var vT = {
        StackEntity: K8,
        StackElement: Y8,
        StackElements: q8
    };
    class z8 {
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
    var yT = {
        DropEntity: z8
    };
    class X8 {
        constructor(t) {
            this.message = t.message
        }
        toString() {
            return `Echo{message: ${this.message}
}`
        }
    }
    var J8 = {
        Echo: X8
    };
    class Z8 {
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
    var Q8 = {
        LockEntity: Z8
    };
    class eU {
        constructor() {}
        toString() {
            return "OK"
        }
    }
    var _T = {
        OK: eU
    };
    class tU {
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
    var bT = {
        NumberEntity: tU
    };
    const {
        ArtifactEntity: rU
    } = mT, {
        ClientWelcome: nU,
        ClientConnected: iU,
        ClientDisconnected: sU,
        ClientKicked: aU,
        ClientSend: oU
    } = zh, {
        CountGroup: lU
    } = Xh, {
        DoodleEntity: cU,
        DoodleLine: uU,
        DoodleLineRemoved: fU
    } = rp, {
        StackEntity: dU,
        StackElement: hU,
        StackElements: pU
    } = vT, {
        DropEntity: gU
    } = yT, {
        Echo: mU
    } = J8, {
        LockEntity: vU
    } = Q8, {
        GCounter: yU
    } = Jh, {
        GetAudienceReply: _U,
        RoomExit: bU,
        RoomLock: EU
    } = Nc, {
        Notification: TU
    } = pT, {
        OK: SU
    } = _T, {
        NumberEntity: OU
    } = bT, {
        ObjectEcho: wU,
        ObjectEntity: CU
    } = Zh, {
        PNCounter: ky
    } = Qh, {
        Reply: $U
    } = gT, {
        TextEcho: IU,
        TextEntity: AU
    } = ep, {
        TextRing: RU
    } = tp, {
        createError: xy,
        ObservedError: NU
    } = Ga;

    function $d(e, t, r) {
        switch (e) {
            case "ok":
                return new SU;
            case "echo":
                return new mU({
                    message: t.message
                });
            case "lock":
                return new vU({
                    key: t.key,
                    from: t.from
                });
            case "error":
                return xy({
                    code: t.code,
                    message: t.msg
                });
            case "error/observed":
                return new NU({
                    to: t.to,
                    error: xy({
                        code: t.error.code,
                        message: t.error.msg
                    })
                });
            case "string":
                return t;
            case "text":
                return new AU({
                    from: t.from,
                    key: t.key,
                    text: t.val,
                    version: t.version,
                    meta: r,
                    acl: t.acl
                });
            case "text/echo":
                return new IU({
                    message: t.message
                });
            case "object":
                return new CU({
                    from: t.from,
                    key: t.key,
                    val: t.val,
                    meta: r,
                    acl: t.acl
                });
            case "object/echo":
                return new wU({
                    message: t.message
                });
            case "drop":
                return new gU({
                    key: t.key
                });
            case "artifact":
                return new rU({
                    key: t.key,
                    artifactId: t.artifactId,
                    categoryId: t.categoryId,
                    rootId: t.rootId,
                    meta: r
                });
            case "client/connected":
                return new iU({
                    id: t.id,
                    userId: t.userId,
                    name: t.name,
                    role: t.role,
                    reconnect: t.reconnect
                });
            case "client/disconnected":
                return new sU({
                    id: t.id,
                    role: t.role
                });
            case "client/kicked":
                return new aU({
                    id: t.id,
                    banned: t.banned,
                    reason: t.reason
                });
            case "client/send":
                return new oU({
                    to: t.to,
                    from: t.from,
                    body: t.body,
                    userId: t.userID
                });
            case "client/welcome": {
                let n = new nU({
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
                    Object.entries(t.entities).forEach(([o, l]) => {
                        s[o] = $d(l[0], l[1], l[2])
                    }), n.entities = s
                }
                return n
            }
            case "doodle":
                return new cU({
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
                return new uU({
                    key: t.key,
                    line: t.val
                });
            case "doodle/line/removed":
                return new fU({
                    key: t.key,
                    index: t.index
                });
            case "stack":
                return new dU({
                    key: t.key,
                    size: t.size,
                    from: t.from,
                    version: t.version,
                    meta: t.meta,
                    acl: t.acl
                });
            case "stack/element":
                return new hU({
                    key: t.key,
                    val: t.val
                });
            case "stack/elements":
                return new pU({
                    key: t.key,
                    vals: t.vals
                });
            case "number":
                return new OU({
                    key: t.key,
                    val: t.val,
                    restrictions: t.restrictions,
                    from: t.from,
                    version: t.version,
                    meta: r,
                    acl: t.acl
                });
            case "room/exit":
                return new bU({
                    cause: t.cause
                });
            case "room/lock":
                return new EU;
            case "room/get-audience":
                return new _U({
                    connections: t.connections
                });
            case "audience":
                return new ky({
                    key: e,
                    count: t[1]
                });
            case "audience/count-group":
                return new lU({
                    key: t.key,
                    choices: t.choices,
                    meta: r
                });
            case "audience/text-ring":
                return new RU({
                    key: t.key,
                    elements: t.elements,
                    meta: r
                });
            case "audience/g-counter":
                return new yU({
                    key: t.key,
                    count: t.count,
                    meta: r
                });
            case "audience/pn-counter":
                return new ky({
                    key: t.key,
                    count: t.count,
                    meta: r
                });
            default:
                return console.error(`failed to parse result of type ${e}: ${JSON.stringify(t,null,2)}`), t
        }
    }

    function LU(e) {
        let t = JSON.parse(e.data),
            r = t.opcode || t.type;
        return t.re ? new $U({
            pc: t.pc,
            re: t.re,
            opcode: r,
            result: $d(r, t.result)
        }) : new TU({
            pc: t.pc,
            opcode: r,
            result: $d(r, t.result)
        })
    }
    var PU = {
        parseResponseMessage: LU
    };
    const Dy = g8,
        kU = I1,
        xU = qh.exports,
        {
            CallError: DU
        } = Ga,
        {
            ClientWelcome: MU
        } = zh,
        {
            CountGroup: FU
        } = Xh,
        {
            GCounter: UU
        } = Jh,
        {
            Notification: My
        } = pT,
        {
            ObjectEntity: If
        } = Zh,
        {
            PNCounter: BU
        } = Qh,
        {
            Reply: jU
        } = gT,
        {
            Request: GU
        } = F8,
        {
            TextEntity: Af
        } = ep,
        {
            TextRing: WU
        } = tp,
        {
            parseResponseMessage: HU
        } = PU,
        {
            DoodleEntity: VU
        } = rp,
        {
            StackEntity: KU
        } = vT,
        YU = 1e3 + Math.floor(Math.random() * 500),
        Fy = 13e3;
    class qU extends xU {
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
            const r = kU.stringify(t),
                n = this.role === "audience" || this.id > 1e7 ? `${this.scheme}://${this.host}/api/v2/audience/${this.code}/play?${r}` : `${this.scheme}://${this.host}/api/v2/rooms/${this.code}/play?${r}`;
            return new Promise((s, o) => {
                let l = !1,
                    u = !1,
                    f = g => {
                        s(g), l = !0
                    },
                    h = g => {
                        o(g), l = !0
                    };
                this.conn = new Dy(n, "ecast-v0"), this.conn.onmessage = g => {
                    this.debugLog(`recv <- ${JSON.stringify(JSON.parse(g.data),null,2)}`);
                    const y = HU(g);
                    if (y instanceof jU) this.onReply(y);
                    else if (y instanceof My) {
                        if (y.result instanceof MU) u = !0, this.id = y.result.id, this.deviceId = y.result.deviceId, this.entities = y.result.entities, this.secret = y.result.secret, y.result.name && (this.name = y.result.name), f(y.result);
                        else if (!l) {
                            h(y.result);
                            return
                        }
                        this.onNotification(y)
                    } else console.error(`failed to parse response messsage: ${y}`)
                }, this.conn.onerror = g => {
                    l ? this.emit("socketError", g) : h(g)
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
                r = YU;
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
                if (r >= Fy) {
                    this.debugLog("reconnect failed!", n), this.emit("socketClose", n);
                    return
                }
                t += 1, this.debugLog("waiting", r), this.emit("connection", {
                    status: "waiting",
                    attempt: t
                }), await this.sleep(r), r = Math.min(Fy, r * 2)
            }
        }
        disconnect() {
            !this.conn || (this.conn.close(), this.conn.onmessage = null, this.conn.onerror = null, this.conn.onopen = null, this.conn.onclose = null, this.conn = null)
        }
        onReply(t) {
            const r = t.re,
                n = this.pending[r];
            if (!n) {
                const s = new My(t);
                s.re = r, this.emit("notification", s);
                return
            }
            delete this.pending[r], t.result instanceof DU ? n.reject(t.result) : n.resolve(t.result)
        }
        onNotification(t) {
            typeof t.result.whenReceived == "function" && t.result.whenReceived(this), this.emit("notification", t), this.emit(t.opcode, t.result)
        }
        send(t, r = {}) {
            if (!this.conn) throw new Error("No connection available");
            if (this.conn.readyState !== Dy.OPEN) throw new Error(`Socket not ready to send, readyState is ${this.conn.readyState}`);
            const n = ++this.seq,
                s = new GU({
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
                l = JSON.stringify(s);
            return this.debugLog(`send -> ${l}`), this.conn.send(l), o
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
                    accept: l,
                    reject: u
                } = n;
            o && (s.acl = o), l && (s.accept = l), u && (s.reject = u);
            const f = await this.send("text/create", s);
            return this.entities[t] = new Af({
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
            return this.entities[t] = new Af({
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
            return this.entities[t] = new Af({
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
                live: l,
                maxPoints: u,
                size: f,
                weights: h
            } = r;
            s && (n.acl = s), o && (n.colors = o), n.live = l, u != null && (n.maxPoints = u), f && (n.size = f), h && (n.weights = h);
            const g = await this.send("doodle/create", n);
            return this.entities[t] = new VU({
                key: t,
                colors: o,
                lines: [],
                live: l,
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
                points: l
            } = r, u = await this.send("doodle/stroke", {
                key: t,
                layer: n,
                color: s,
                weight: o,
                points: l
            }), f = {
                layer: n,
                color: s,
                weight: o,
                points: l
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
            return this.entities[t] = new KU({
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
            return this.entities[t] = new FU({
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
            return this.entities[t] = new UU({
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
            return this.entities[t] = new BU({
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
                    reject: l
                } = r;
            s && (n.limit = s), o && (n.accept = o), l && (n.reject = l);
            const u = await this.send("audience/text-ring/create", n);
            return this.entities[t] = new WU({
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
    var zU = {
        WSClient: qU
    };
    const {
        APIClient: XU
    } = p8, {
        WSClient: JU
    } = zU, {
        CreateRoomReply: ZU,
        GetRoomReply: QU
    } = Nc, {
        ClientWelcome: e5,
        ClientDisconnected: t5
    } = zh, {
        ArtifactEntity: r5
    } = mT, {
        GCounter: n5
    } = Jh, {
        NumberEntity: i5
    } = bT, {
        TextEntity: s5
    } = ep, {
        DoodleEntity: a5
    } = rp, {
        ObjectEntity: o5
    } = Zh, {
        CountGroup: l5
    } = Xh, {
        DropEntity: c5
    } = yT, {
        OK: u5
    } = _T, {
        RoomExit: f5
    } = Nc, {
        TextRing: d5
    } = tp, {
        PNCounter: h5
    } = Qh;
    var wr = {
        APIClient: XU,
        WSClient: JU,
        ClientWelcome: e5,
        CreateRoomReply: ZU,
        DropEntity: c5,
        GetRoomReply: QU,
        ClientDisconnected: t5,
        RoomExit: f5,
        OK: u5,
        ArtifactEntity: r5,
        DoodleEntity: a5,
        NumberEntity: i5,
        CountGroup: l5,
        GCounter: n5,
        ObjectEntity: o5,
        PNCounter: h5,
        TextEntity: s5,
        TextRing: d5
    };
    const p5 = [{
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
        Id = e => p5.find(t => t.tag === e || t.categoryId === e);

    function Ad(...e) {
        console.log(...e)
    }
    class g5 {
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
            Ad("[Debug] pushEntity", t), t instanceof wr.ArtifactEntity ? this.items.push({
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
                    l = s[s.length - 2];
                return {
                    json: n.body.url,
                    dev: `https://dev.jackbox.tv/debug/cloud/${l}/${o}/`,
                    local: `http://localhost:9090/debug/cloud/${l}/${o}/`
                }
            } catch (r) {
                return console.error("[Debug] sendToEcast", r), null
            }
        }
        async sendToSlack(t, r) {
            var f;
            if (!this.room || !this.client) return;
            const n = Id(this.room.appTag),
                s = this.items.length - this.markerCount,
                o = `${this.markerCount} ${this.markerCount===1?"marker":"markers"}`,
                l = `${s} ${s===1?"entity":"entities"}`,
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
                    y = `*${(f=n==null?void 0:n.name)!=null?f:this.room.appTag} :${this.room.appTag}:* (${o}, ${l}) 

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
                    C = {
                        unfurl_links: !1,
                        blocks: E
                    };
                if (this.room) {
                    C.icon_emoji = this.room.appTag;
                    const B = Id(this.room.appTag);
                    C.username = `DebugRecorder ${B?B.name:this.room.appTag}`
                }
                const M = await (await fetch(h, {
                    method: "POST",
                    body: JSON.stringify(C)
                })).text();
                Ad("[Debug] sendToSlack", M)
            } catch (h) {
                console.error("[Debug] sendToSlack", h)
            }
        }
        download(t) {
            var l, u;
            const r = t != null ? t : `${(u=(l=this.room)==null?void 0:l.appTag)!=null?u:"unknown"}-debug`,
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

    function m5(e) {
        throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
    }
    var Uy = {
        exports: {}
    };
    (function(e, t) {
        (function(r, n) {
            n(t)
        })(kt, function(r) {
            var n = typeof window < "u" ? window : typeof kt < "u" ? kt : typeof self < "u" ? self : {},
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
                l;

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
                    var L = u(S[1]),
                        Q = u(S[2]);
                    L === null || Q === null || L in N || (N[L] = Q)
                }
                return N
            }

            function g(w, T) {
                T = T || "";
                var N = [],
                    S, L;
                typeof T != "string" && (T = "?");
                for (L in w)
                    if (o.call(w, L)) {
                        if (S = w[L], !S && (S === null || S === l || isNaN(S)) && (S = ""), L = f(L), S = f(S), L === null || S === null) continue;
                        N.push(L + "=" + S)
                    } return N.length ? T + N.join("&") : ""
            }
            var y = g,
                E = h,
                C = {
                    stringify: y,
                    parse: E
                },
                P = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
                M = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,
                B = "[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]",
                $ = new RegExp("^" + B + "+");

            function V(w) {
                return (w || "").toString().replace($, "")
            }
            var q = [
                    ["#", "hash"],
                    ["?", "query"],
                    function(T, N) {
                        return J(N.protocol) ? T.replace(/\\/g, "/") : T
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
                    L = typeof w,
                    Q;
                if (w.protocol === "blob:") S = new ue(unescape(w.pathname), {});
                else if (L === "string") {
                    S = new ue(w, {});
                    for (Q in G) delete S[Q]
                } else if (L === "object") {
                    for (Q in w) Q in G || (S[Q] = w[Q]);
                    S.slashes === void 0 && (S.slashes = P.test(w.href))
                }
                return S
            }

            function J(w) {
                return w === "file:" || w === "ftp:" || w === "http:" || w === "https:" || w === "ws:" || w === "wss:"
            }

            function oe(w, T) {
                w = V(w), T = T || {};
                var N = M.exec(w),
                    S = N[1] ? N[1].toLowerCase() : "",
                    L = !!N[2],
                    Q = !!N[3],
                    ne = 0,
                    _e;
                return L ? Q ? (_e = N[2] + N[3] + N[4], ne = N[2].length + N[3].length) : (_e = N[2] + N[4], ne = N[2].length) : Q ? (_e = N[3] + N[4], ne = N[3].length) : _e = N[4], S === "file:" ? ne >= 2 && (_e = _e.slice(2)) : J(S) ? _e = N[4] : S ? L && (_e = _e.slice(2)) : ne >= 2 && J(T.protocol) && (_e = N[4]), {
                    protocol: S,
                    slashes: L || J(S),
                    slashesCount: ne,
                    rest: _e
                }
            }

            function le(w, T) {
                if (w === "") return T;
                for (var N = (T || "/").split("/").slice(0, -1).concat(w.split("/")), S = N.length, L = N[S - 1], Q = !1, ne = 0; S--;) N[S] === "." ? N.splice(S, 1) : N[S] === ".." ? (N.splice(S, 1), ne++) : ne && (S === 0 && (Q = !0), N.splice(S, 1), ne--);
                return Q && N.unshift(""), (L === "." || L === "..") && N.push(""), N.join("/")
            }

            function ue(w, T, N) {
                if (w = V(w), !(this instanceof ue)) return new ue(w, T, N);
                var S, L, Q, ne, _e, Te, ft = q.slice(),
                    nr = typeof T,
                    De = this,
                    ha = 0;
                for (nr !== "object" && nr !== "string" && (N = T, T = null), N && typeof N != "function" && (N = C.parse), T = j(T), L = oe(w || "", T), S = !L.protocol && !L.slashes, De.slashes = L.slashes || S && T.slashes, De.protocol = L.protocol || T.protocol || "", w = L.rest, (De.protocol === "file:" || !L.slashes && (L.protocol || L.slashesCount < 2 || !J(De.protocol))) && (ft[3] = [/(.*)/, "pathname"]); ha < ft.length; ha++) {
                    if (ne = ft[ha], typeof ne == "function") {
                        w = ne(w, De);
                        continue
                    }
                    Q = ne[0], Te = ne[1], Q !== Q ? De[Te] = w : typeof Q == "string" ? ~(_e = w.indexOf(Q)) && (typeof ne[2] == "number" ? (De[Te] = w.slice(0, _e), w = w.slice(_e + ne[2])) : (De[Te] = w.slice(_e), w = w.slice(0, _e))) : (_e = Q.exec(w)) && (De[Te] = _e[1], w = w.slice(0, _e.index)), De[Te] = De[Te] || S && ne[3] && T[Te] || "", ne[4] && (De[Te] = De[Te].toLowerCase())
                }
                N && (De.query = N(De.query)), S && T.slashes && De.pathname.charAt(0) !== "/" && (De.pathname !== "" || T.pathname !== "") && (De.pathname = le(De.pathname, T.pathname)), De.pathname.charAt(0) !== "/" && J(De.protocol) && (De.pathname = "/" + De.pathname), s(De.port, De.protocol) || (De.host = De.hostname, De.port = ""), De.username = De.password = "", De.auth && (ne = De.auth.split(":"), De.username = ne[0] || "", De.password = ne[1] || ""), De.origin = De.protocol !== "file:" && J(De.protocol) && De.host ? De.protocol + "//" + De.host : "null", De.href = De.toString()
            }

            function Ae(w, T, N) {
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
                            var L = w === "pathname" ? "/" : "#";
                            S[w] = T.charAt(0) !== L ? L + T : T
                        } else S[w] = T;
                        break;
                    default:
                        S[w] = T
                }
                for (var Q = 0; Q < q.length; Q++) {
                    var ne = q[Q];
                    ne[4] && (S[ne[1]] = S[ne[1]].toLowerCase())
                }
                return S.origin = S.protocol !== "file:" && J(S.protocol) && S.host ? S.protocol + "//" + S.host : "null", S.href = S.toString(), S
            }

            function $e(w) {
                (!w || typeof w != "function") && (w = C.stringify);
                var T, N = this,
                    S = N.protocol;
                S && S.charAt(S.length - 1) !== ":" && (S += ":");
                var L = S + (N.slashes || J(N.protocol) ? "//" : "");
                return N.username && (L += N.username, N.password && (L += ":" + N.password), L += "@"), L += N.host + N.pathname, T = typeof N.query == "object" ? w(N.query) : N.query, T && (L += T.charAt(0) !== "?" ? "?" + T : T), N.hash && (L += N.hash), L
            }
            ue.prototype = {
                set: Ae,
                toString: $e
            }, ue.extractProtocol = oe, ue.location = j, ue.trimLeft = V, ue.qs = C;
            var fe = ue;

            function Ce(w, T) {
                setTimeout(function(N) {
                    return w.call(N)
                }, 4, T)
            }

            function F(w, T) {
                typeof process < "u" && console[w].call(null, T)
            }

            function ie(w, T) {
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

            function ve(w) {
                var T = w.indexOf("?");
                return T >= 0 ? w.slice(0, T) : w
            }
            var Oe = function() {
                this.urlMap = {}
            };
            Oe.prototype.attachWebSocket = function(T, N) {
                var S = ve(N),
                    L = this.urlMap[S];
                if (L && L.server && L.websockets.indexOf(T) === -1) return L.websockets.push(T), L.server
            }, Oe.prototype.addMembershipToRoom = function(T, N) {
                var S = this.urlMap[ve(T.url)];
                S && S.server && S.websockets.indexOf(T) !== -1 && (S.roomMemberships[N] || (S.roomMemberships[N] = []), S.roomMemberships[N].push(T))
            }, Oe.prototype.attachServer = function(T, N) {
                var S = ve(N),
                    L = this.urlMap[S];
                if (!L) return this.urlMap[S] = {
                    server: T,
                    websockets: [],
                    roomMemberships: {}
                }, T
            }, Oe.prototype.serverLookup = function(T) {
                var N = ve(T),
                    S = this.urlMap[N];
                if (S) return S.server
            }, Oe.prototype.websocketsLookup = function(T, N, S) {
                var L = ve(T),
                    Q, ne = this.urlMap[L];
                if (Q = ne ? ne.websockets : [], N) {
                    var _e = ne.roomMemberships[N];
                    Q = _e || []
                }
                return S ? Q.filter(function(Te) {
                    return Te !== S
                }) : Q
            }, Oe.prototype.removeServer = function(T) {
                delete this.urlMap[ve(T)]
            }, Oe.prototype.removeWebSocket = function(T, N) {
                var S = ve(N),
                    L = this.urlMap[S];
                L && (L.websockets = ie(L.websockets, function(Q) {
                    return Q === T
                }))
            }, Oe.prototype.removeMembershipFromRoom = function(T, N) {
                var S = this.urlMap[ve(T.url)],
                    L = S.roomMemberships[N];
                S && L !== null && (S.roomMemberships[N] = ie(L, function(Q) {
                    return Q === T
                }))
            };
            var Fe = new Oe,
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
                tt = {
                    CONSTRUCTOR_ERROR: "Failed to construct 'WebSocket':",
                    CLOSE_ERROR: "Failed to execute 'close' on 'WebSocket':",
                    EVENT: {
                        CONSTRUCT: "Failed to construct 'Event':",
                        MESSAGE: "Failed to construct 'MessageEvent':",
                        CLOSE: "Failed to construct 'CloseEvent':"
                    }
                },
                It = function() {};
            It.prototype.stopPropagation = function() {}, It.prototype.stopImmediatePropagation = function() {}, It.prototype.initEvent = function(T, N, S) {
                T === void 0 && (T = "undefined"), N === void 0 && (N = !1), S === void 0 && (S = !1), this.type = "" + T, this.bubbles = Boolean(N), this.cancelable = Boolean(S)
            };
            var $r = function(w) {
                    function T(N, S) {
                        if (S === void 0 && (S = {}), w.call(this), !N) throw new TypeError(tt.EVENT_ERROR + " 1 argument required, but only 0 present.");
                        if (typeof S != "object") throw new TypeError(tt.EVENT_ERROR + " parameter 2 ('eventInitDict') is not an object.");
                        var L = S.bubbles,
                            Q = S.cancelable;
                        this.type = "" + N, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = Q ? Boolean(Q) : !1, this.cancelBubble = !1, this.bubbles = L ? Boolean(L) : !1
                    }
                    return w && (T.__proto__ = w), T.prototype = Object.create(w && w.prototype), T.prototype.constructor = T, T
                }(It),
                rr = function(w) {
                    function T(N, S) {
                        if (S === void 0 && (S = {}), w.call(this), !N) throw new TypeError(tt.EVENT.MESSAGE + " 1 argument required, but only 0 present.");
                        if (typeof S != "object") throw new TypeError(tt.EVENT.MESSAGE + " parameter 2 ('eventInitDict') is not an object");
                        var L = S.bubbles,
                            Q = S.cancelable,
                            ne = S.data,
                            _e = S.origin,
                            Te = S.lastEventId,
                            ft = S.ports;
                        this.type = "" + N, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = Q ? Boolean(Q) : !1, this.canncelBubble = !1, this.bubbles = L ? Boolean(L) : !1, this.origin = "" + _e, this.ports = typeof ft > "u" ? null : ft, this.data = typeof ne > "u" ? null : ne, this.lastEventId = "" + (Te || "")
                    }
                    return w && (T.__proto__ = w), T.prototype = Object.create(w && w.prototype), T.prototype.constructor = T, T
                }(It),
                yr = function(w) {
                    function T(N, S) {
                        if (S === void 0 && (S = {}), w.call(this), !N) throw new TypeError(tt.EVENT.CLOSE + " 1 argument required, but only 0 present.");
                        if (typeof S != "object") throw new TypeError(tt.EVENT.CLOSE + " parameter 2 ('eventInitDict') is not an object");
                        var L = S.bubbles,
                            Q = S.cancelable,
                            ne = S.code,
                            _e = S.reason,
                            Te = S.wasClean;
                        this.type = "" + N, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = Q ? Boolean(Q) : !1, this.cancelBubble = !1, this.bubbles = L ? Boolean(L) : !1, this.code = typeof ne == "number" ? parseInt(ne, 10) : 0, this.reason = "" + (_e || ""), this.wasClean = Te ? Boolean(Te) : !1
                    }
                    return w && (T.__proto__ = w), T.prototype = Object.create(w && w.prototype), T.prototype.constructor = T, T
                }(It);

            function ot(w) {
                var T = w.type,
                    N = w.target,
                    S = new $r(T);
                return N && (S.target = N, S.srcElement = N, S.currentTarget = N), S
            }

            function Ot(w) {
                var T = w.type,
                    N = w.origin,
                    S = w.data,
                    L = w.target,
                    Q = new rr(T, {
                        data: S,
                        origin: N
                    });
                return L && (Q.target = L, Q.srcElement = L, Q.currentTarget = L), Q
            }

            function lt(w) {
                var T = w.code,
                    N = w.reason,
                    S = w.type,
                    L = w.target,
                    Q = w.wasClean;
                Q || (Q = T === Ge.CLOSE_NORMAL || T === Ge.CLOSE_NO_STATUS);
                var ne = new yr(S, {
                    code: T,
                    reason: N,
                    wasClean: Q
                });
                return L && (ne.target = L, ne.srcElement = L, ne.currentTarget = L), ne
            }

            function xt(w, T, N) {
                w.readyState = Y.CLOSING;
                var S = Fe.serverLookup(w.url),
                    L = lt({
                        type: "close",
                        target: w.target,
                        code: T,
                        reason: N
                    }),
                    Q = lt({
                        type: "server::close",
                        target: w,
                        code: T,
                        reason: N
                    });
                Ce(function() {
                    Fe.removeWebSocket(w, w.url), w.readyState = Y.CLOSED, w.dispatchEvent(L), w.dispatchEvent(Q), S && S.dispatchEvent(L, S)
                }, w)
            }

            function Vt(w, T, N) {
                w.readyState = Y.CLOSING;
                var S = Fe.serverLookup(w.url),
                    L = lt({
                        type: "close",
                        target: w.target,
                        code: T,
                        reason: N,
                        wasClean: !1
                    }),
                    Q = lt({
                        type: "server::close",
                        target: w,
                        code: T,
                        reason: N,
                        wasClean: !1
                    }),
                    ne = ot({
                        type: "error",
                        target: w.target
                    });
                Ce(function() {
                    Fe.removeWebSocket(w, w.url), w.readyState = Y.CLOSED, w.dispatchEvent(ne), w.dispatchEvent(L), w.dispatchEvent(Q), S && S.dispatchEvent(L, S)
                }, w)
            }

            function Dt(w) {
                return Object.prototype.toString.call(w) !== "[object Blob]" && !(w instanceof ArrayBuffer) && (w = String(w)), w
            }
            var m = new WeakMap;

            function p(w) {
                if (m.has(w)) return m.get(w);
                var T = new Proxy(w, {
                    get: function(S, L) {
                        return L === "close" ? function(ne) {
                            ne === void 0 && (ne = {});
                            var _e = ne.code || Ge.CLOSE_NORMAL,
                                Te = ne.reason || "";
                            xt(T, _e, Te)
                        } : L === "send" ? function(ne) {
                            ne = Dt(ne), w.dispatchEvent(Ot({
                                type: "message",
                                data: ne,
                                origin: this.url,
                                target: w
                            }))
                        } : L === "on" ? function(ne, _e) {
                            w.addEventListener("server::" + ne, _e)
                        } : L === "target" ? w : S[L]
                    }
                });
                return m.set(w, T), T
            }

            function O(w) {
                var T = encodeURIComponent(w).match(/%[89ABab]/g);
                return w.length + (T ? T.length : 0)
            }

            function D(w) {
                var T = new fe(w),
                    N = T.pathname,
                    S = T.protocol,
                    L = T.hash;
                if (!w) throw new TypeError(tt.CONSTRUCTOR_ERROR + " 1 argument required, but only 0 present.");
                if (N || (T.pathname = "/"), S === "") throw new SyntaxError(tt.CONSTRUCTOR_ERROR + " The URL '" + T.toString() + "' is invalid.");
                if (S !== "ws:" && S !== "wss:") throw new SyntaxError(tt.CONSTRUCTOR_ERROR + " The URL's scheme must be either 'ws' or 'wss'. '" + S + "' is not allowed.");
                if (L !== "") throw new SyntaxError(tt.CONSTRUCTOR_ERROR + " The URL contains a fragment identifier ('" + L + "'). Fragment identifiers are not allowed in WebSocket URLs.");
                return T.toString()
            }

            function U(w) {
                if (w === void 0 && (w = []), !Array.isArray(w) && typeof w != "string") throw new SyntaxError(tt.CONSTRUCTOR_ERROR + " The subprotocol '" + w.toString() + "' is invalid.");
                typeof w == "string" && (w = [w]);
                var T = w.map(function(S) {
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
                if (N.length > 0) throw new SyntaxError(tt.CONSTRUCTOR_ERROR + " The subprotocol '" + N[0] + "' is duplicated.");
                return w
            }
            var Y = function(w) {
                function T(S, L) {
                    w.call(this), this._onopen = null, this._onmessage = null, this._onerror = null, this._onclose = null, this.url = D(S), L = U(L), this.protocol = L[0] || "", this.binaryType = "blob", this.readyState = T.CONNECTING;
                    var Q = p(this),
                        ne = Fe.attachWebSocket(Q, this.url);
                    Ce(function() {
                        if (ne)
                            if (ne.options.verifyClient && typeof ne.options.verifyClient == "function" && !ne.options.verifyClient()) this.readyState = T.CLOSED, F("error", "WebSocket connection to '" + this.url + "' failed: HTTP Authentication failed; no valid credentials available"), Fe.removeWebSocket(Q, this.url), this.dispatchEvent(ot({
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
                                        ft = Te !== "",
                                        nr = L.indexOf(Te) !== -1;
                                    if (ft && !nr) {
                                        this.readyState = T.CLOSED, F("error", "WebSocket connection to '" + this.url + "' failed: Invalid Sub-Protocol"), Fe.removeWebSocket(Q, this.url), this.dispatchEvent(ot({
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
                                this.readyState = T.OPEN, this.dispatchEvent(ot({
                                    type: "open",
                                    target: this
                                })), ne.dispatchEvent(ot({
                                    type: "connection"
                                }), Q)
                            }
                        else this.readyState = T.CLOSED, this.dispatchEvent(ot({
                            type: "error",
                            target: this
                        })), this.dispatchEvent(lt({
                            type: "close",
                            target: this,
                            code: Ge.CLOSE_NORMAL
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
                }, T.prototype.send = function(L) {
                    var Q = this;
                    if (this.readyState === T.CLOSING || this.readyState === T.CLOSED) throw new Error("WebSocket is already in CLOSING or CLOSED state");
                    var ne = Ot({
                            type: "server::message",
                            origin: this.url,
                            data: Dt(L)
                        }),
                        _e = Fe.serverLookup(this.url);
                    _e && Ce(function() {
                        Q.dispatchEvent(ne, L)
                    }, _e)
                }, T.prototype.close = function(L, Q) {
                    if (L !== void 0 && (typeof L != "number" || L !== 1e3 && (L < 3e3 || L > 4999))) throw new TypeError(tt.CLOSE_ERROR + " The code must be either 1000, or between 3000 and 4999. " + L + " is neither.");
                    if (Q !== void 0) {
                        var ne = O(Q);
                        if (ne > 123) throw new SyntaxError(tt.CLOSE_ERROR + " The message must not be greater than 123 bytes.")
                    }
                    if (!(this.readyState === T.CLOSING || this.readyState === T.CLOSED)) {
                        var _e = p(this);
                        this.readyState === T.CONNECTING ? Vt(_e, L || Ge.CLOSE_ABNORMAL, Q) : xt(_e, L || Ge.CLOSE_NO_STATUS, Q)
                    }
                }, Object.defineProperties(T.prototype, N), T
            }(be);
            Y.CONNECTING = 0, Y.prototype.CONNECTING = Y.CONNECTING, Y.OPEN = 1, Y.prototype.OPEN = Y.OPEN, Y.CLOSING = 2, Y.prototype.CLOSING = Y.CLOSING, Y.CLOSED = 3, Y.prototype.CLOSED = Y.CLOSED;
            var ce = function(w) {
                return w.reduce(function(T, N) {
                    return T.indexOf(N) > -1 ? T : T.concat(N)
                }, [])
            };

            function se() {
                return typeof window < "u" ? window : typeof process == "object" && typeof m5 == "function" && typeof kt == "object" ? kt : this
            }
            var re = {
                    mock: !0,
                    verifyClient: null,
                    selectProtocol: null
                },
                A = function(w) {
                    function T(N, S) {
                        S === void 0 && (S = re), w.call(this);
                        var L = new fe(N);
                        L.pathname || (L.pathname = "/"), this.url = L.toString(), this.originalWebSocket = null;
                        var Q = Fe.attachServer(this, this.url);
                        if (!Q) throw this.dispatchEvent(ot({
                            type: "error"
                        })), new Error("A mock server is already listening on this url");
                        this.options = Object.assign({}, re, S), this.options.mock && this.mockWebsocket()
                    }
                    return w && (T.__proto__ = w), T.prototype = Object.create(w && w.prototype), T.prototype.constructor = T, T.prototype.mockWebsocket = function() {
                        var S = se();
                        this.originalWebSocket = S.WebSocket, S.WebSocket = Y
                    }, T.prototype.restoreWebsocket = function() {
                        var S = se();
                        this.originalWebSocket !== null && (S.WebSocket = this.originalWebSocket), this.originalWebSocket = null
                    }, T.prototype.stop = function(S) {
                        S === void 0 && (S = function() {}), this.options.mock && this.restoreWebsocket(), Fe.removeServer(this.url), typeof S == "function" && S()
                    }, T.prototype.on = function(S, L) {
                        this.addEventListener(S, L)
                    }, T.prototype.close = function(S) {
                        S === void 0 && (S = {});
                        var L = S.code,
                            Q = S.reason,
                            ne = S.wasClean,
                            _e = Fe.websocketsLookup(this.url);
                        Fe.removeServer(this.url), _e.forEach(function(Te) {
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
                        _e || (_e = Fe.websocketsLookup(this.url)), typeof Q != "object" || arguments.length > 3 ? (L = Array.prototype.slice.call(arguments, 1, arguments.length), L = L.map(function(Te) {
                            return Dt(Te)
                        })) : L = Dt(L), _e.forEach(function(Te) {
                            Array.isArray(L) ? Te.dispatchEvent.apply(Te, [Ot({
                                type: S,
                                data: L,
                                origin: ne.url,
                                target: Te.target
                            })].concat(L)) : Te.dispatchEvent(Ot({
                                type: S,
                                data: L,
                                origin: ne.url,
                                target: Te.target
                            }))
                        })
                    }, T.prototype.clients = function() {
                        return Fe.websocketsLookup(this.url)
                    }, T.prototype.to = function(S, L, Q) {
                        var ne = this;
                        Q === void 0 && (Q = []);
                        var _e = this,
                            Te = ce(Q.concat(Fe.websocketsLookup(this.url, S, L)));
                        return {
                            to: function(ft, nr) {
                                return ne.to.call(ne, ft, nr, Te)
                            },
                            emit: function(nr, De) {
                                _e.emit(nr, De, {
                                    websockets: Te
                                })
                            }
                        }
                    }, T.prototype.in = function() {
                        for (var S = [], L = arguments.length; L--;) S[L] = arguments[L];
                        return this.to.apply(null, S)
                    }, T.prototype.simulate = function(S) {
                        var L = Fe.websocketsLookup(this.url);
                        S === "error" && L.forEach(function(Q) {
                            Q.readyState = Y.CLOSED, Q.dispatchEvent(ot({
                                type: "error"
                            }))
                        })
                    }, T
                }(be);
            A.of = function(T) {
                return new A(T)
            };
            var W = function(w) {
                function T(S, L) {
                    var Q = this;
                    S === void 0 && (S = "socket.io"), L === void 0 && (L = ""), w.call(this), this.binaryType = "blob";
                    var ne = new fe(S);
                    ne.pathname || (ne.pathname = "/"), this.url = ne.toString(), this.readyState = T.CONNECTING, this.protocol = "", this.target = this, typeof L == "string" || typeof L == "object" && L !== null ? this.protocol = L : Array.isArray(L) && L.length > 0 && (this.protocol = L[0]);
                    var _e = Fe.attachWebSocket(this, this.url);
                    Ce(function() {
                        _e ? (this.readyState = T.OPEN, _e.dispatchEvent(ot({
                            type: "connection"
                        }), _e, this), _e.dispatchEvent(ot({
                            type: "connect"
                        }), _e, this), this.dispatchEvent(ot({
                            type: "connect",
                            target: this
                        }))) : (this.readyState = T.CLOSED, this.dispatchEvent(ot({
                            type: "error",
                            target: this
                        })), this.dispatchEvent(lt({
                            type: "close",
                            target: this,
                            code: Ge.CLOSE_NORMAL
                        })), F("error", "Socket.io connection to '" + this.url + "' failed"))
                    }, this), this.addEventListener("close", function(Te) {
                        Q.dispatchEvent(lt({
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
                        var L = Fe.serverLookup(this.url);
                        return Fe.removeWebSocket(this, this.url), this.readyState = T.CLOSED, this.dispatchEvent(lt({
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
                    var _e = Ot({
                            type: L,
                            origin: this.url,
                            data: Q
                        }),
                        Te = Fe.serverLookup(this.url);
                    return Te && Te.dispatchEvent.apply(Te, [_e].concat(Q)), this
                }, T.prototype.send = function(L) {
                    return this.emit("message", L), this
                }, N.broadcast.get = function() {
                    if (this.readyState !== T.OPEN) throw new Error("SocketIO is already in CLOSING or CLOSED state");
                    var S = this,
                        L = Fe.serverLookup(this.url);
                    if (!L) throw new Error("SocketIO can not find a server at the specified URL (" + this.url + ")");
                    return {
                        emit: function(ne, _e) {
                            return L.emit(ne, _e, {
                                websockets: Fe.websocketsLookup(S.url, null, S)
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
                    Fe.addMembershipToRoom(this, L)
                }, T.prototype.leave = function(L) {
                    Fe.removeMembershipFromRoom(this, L)
                }, T.prototype.to = function(L) {
                    return this.broadcast.to(L)
                }, T.prototype.in = function() {
                    return this.to.apply(null, arguments)
                }, T.prototype.dispatchEvent = function(L) {
                    for (var Q = this, ne = [], _e = arguments.length - 1; _e-- > 0;) ne[_e] = arguments[_e + 1];
                    var Te = L.type,
                        ft = this.listeners[Te];
                    if (!Array.isArray(ft)) return !1;
                    ft.forEach(function(nr) {
                        ne.length > 0 ? nr.apply(Q, ne) : nr.call(Q, L.data ? L.data : L)
                    })
                }, Object.defineProperties(T.prototype, N), T
            }(be);
            W.CONNECTING = 0, W.OPEN = 1, W.CLOSING = 2, W.CLOSED = 3;
            var he = function(T, N) {
                return new W(T, N)
            };
            he.connect = function(T, N) {
                return he(T, N)
            };
            var pe = A,
                Re = Y,
                xe = he;
            r.Server = pe, r.WebSocket = Re, r.SocketIO = xe, Object.defineProperty(r, "__esModule", {
                value: !0
            })
        })
    })(Uy, Uy.exports);
    var ET = {
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
                    y = f.y,
                    E = h.x - g,
                    C = h.y - y;
                if (E !== 0 || C !== 0) {
                    var P = ((u.x - g) * E + (u.y - y) * C) / (E * E + C * C);
                    P > 1 ? (g = h.x, y = h.y) : P > 0 && (g += E * P, y += C * P)
                }
                return E = u.x - g, C = u.y - y, E * E + C * C
            }

            function n(u, f) {
                for (var h = u[0], g = [h], y, E = 1, C = u.length; E < C; E++) y = u[E], t(y, h) > f && (g.push(y), h = y);
                return h !== y && g.push(y), g
            }

            function s(u, f, h, g, y) {
                for (var E = g, C, P = f + 1; P < h; P++) {
                    var M = r(u[P], u[f], u[h]);
                    M > E && (C = P, E = M)
                }
                E > g && (C - f > 1 && s(u, f, C, g, y), y.push(u[C]), h - C > 1 && s(u, C, h, g, y))
            }

            function o(u, f) {
                var h = u.length - 1,
                    g = [u[0]];
                return s(u, 0, h, f, g), g.push(u[h]), g
            }

            function l(u, f, h) {
                if (u.length <= 2) return u;
                var g = f !== void 0 ? f * f : 1;
                return u = h ? u : n(u, g), u = o(u, g), u
            }
            e.exports = l, e.exports.default = l
        })()
    })(ET);
    const TT = ET.exports;
    class v5 {
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
            var s, o, l, u, f;
            n != null && n.color && (this.color = n.color), n != null && n.layer && (this.layer = n.layer), n != null && n.layers && (this.layers = n.layers), n != null && n.maxPoints && (this.maxPoints = n.maxPoints), n != null && n.precision && (this.precision = n.precision), n != null && n.scale && (this.scale = n.scale), n != null && n.weight && (this.weight = n.weight), n != null && n.weightScale && (this.weightScale = n.weightScale), t.width = ((o = (s = r.size) == null ? void 0 : s.width) != null ? o : this.DEFAULT_WIDTH) * this.scale.width, t.height = ((u = (l = r.size) == null ? void 0 : l.height) != null ? u : this.DEFAULT_HEIGHT) * this.scale.height, this.canvas = t, this.ctx = t.getContext("2d"), (f = this.ctx) == null || f.scale(this.scale.width, this.scale.height), this.doodle = r, this.drawLines()
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
                x: vr.toPrecision(n.x, this.precision),
                y: vr.toPrecision(n.y, this.precision)
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
                const l = (o - n) / o,
                    u = {
                        x: s.x * l,
                        y: s.y * l
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
                points: TT(this.points, .5).map(r => ({
                    x: vr.toPrecision(r.x, this.precision),
                    y: vr.toPrecision(r.y, this.precision)
                })),
                weight: this.weight
            };
            return this.isInteracting = !1, this.points = [], t
        }
    }
    class y5 {
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
                const l = (o - n) / o,
                    u = {
                        x: s.x * l,
                        y: s.y * l
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
                n = TT(this.currentLine.points);
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
                return typeof s.points == "string" ? o = s.points.split("|").map(l => {
                    const [u, f] = l.split(",");
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
    class _5 {
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
            r.width && (this.width = r.width), r.height && (this.height = r.height), this.stageElement = t, this.setupElements(), this.setupEvents(), r.InteractCanvas ? this.interactCanvas = new r.InteractCanvas(t, this.width, this.height, r) : this.interactCanvas = new y5(t, this.width, this.height, r)
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
                l = parseFloat(s[3]),
                u = (this.getPropValue(r, "border-left-width") + this.getPropValue(r, "border-right-width")) * o,
                f = (this.getPropValue(r, "border-top-width") + this.getPropValue(r, "border-bottom-width")) * l,
                h = (this.getPropValue(r, "padding-left") + this.getPropValue(r, "padding-right")) * o,
                g = (this.getPropValue(r, "padding-top") + this.getPropValue(r, "padding-bottom")) * l;
            return {
                scaleX: (n.width - u - h) / t.width,
                scaleY: (n.height - f - g) / t.height,
                offsetX: n.left + (this.getPropValue(r, "border-left-width") + this.getPropValue(r, "padding-left")) * o,
                offsetY: n.top + (this.getPropValue(r, "border-top-width") + this.getPropValue(r, "padding-top")) * l
            }
        }
        getEventPoint(t) {
            const {
                scaleX: r,
                scaleY: n,
                offsetX: s,
                offsetY: o
            } = this.getCanvasOffset(), l = t.clientX, u = t.clientY;
            let f = (l - s) / r,
                h = (u - o) / n;
            return f = Math.max(0, Math.min(this.width, f)), h = Math.max(0, Math.min(this.height, h)), f = Math.round(f), h = Math.round(h), {
                x: f,
                y: h
            }
        }
    }
    class By {
        static getPromptGuess(t, r) {
            var n, s, o;
            if ((n = t.player) != null && n.prompt) return t.player.prompt;
            if ((s = t.audience) != null && s.prompt) return t.audience.prompt;
            if ((o = t.audiencePlayer) != null && o.prompt) return t.audiencePlayer.prompt;
            if (t.prompt) return t.prompt;
            if (r === "range-game") return this.getRangeGameGuess(t)
        }
        static getRangeGameGuess(t) {
            var r, n, s, o, l, u, f, h;
            if ((n = (r = t.player) == null ? void 0 : r.content) != null && n.text) return (o = (s = t.player) == null ? void 0 : s.content) == null ? void 0 : o.text;
            if ((u = (l = t.content) == null ? void 0 : l.content) != null && u.text) return (h = (f = t.content) == null ? void 0 : f.content) == null ? void 0 : h.text
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
            const n = Id(r.room.appTag),
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
                    BASE_URL: "https://bundles.jackbox.tv/main/pp9-fourbage/",
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
                Ad("[Feedback] sendToSlack", C)
            } catch (E) {
                console.error("[Feedback] sendToSlack", E)
            }
        }
    }
    class ST {
        static withTypes(t, r) {
            let n = t;
            return r.forEach(s => {
                s === "html" && (n = this.html(n)), s === "username" && (n = this.username(n)), s === "emoji" && (n = this.emoji(n)), s === "input" && (n = this.input(n))
            }), n
        }
        static html(t) {
            if (String(t).match(/<fart>/g)) {
                const n = new Audio(new URL("main/pp9/fourbage/assets/4af6cbea.wav", self.location).href);
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
    const b5 = {
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
        E5 = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "prompts hidden on players\u2019 devices",
                VISIBILITY_CONTROLLER_ON: "prompts shown on players\u2019 devices",
                VISIBILITY_SCREEN_OFF: "prompts hidden on game screen",
                VISIBILITY_SCREEN_ON: "prompts shown on game screen"
            }
        },
        T5 = {
            DISCONNECTED: "You have been disconnected.",
            DRAWING_NOTHING: "You have to draw something!",
            PLAYER_KICKED: "You have been kicked from the game by a moderator.",
            ROOM_DESTROYED: "Thanks for playing!",
            ROOM_DISCONNECTED: "Disconnected",
            TEXT_NAUGHTY: "I\u2019m afraid you can\u2019t write that. Please be respectful of other players.",
            TEXT_NOTHING: "You can\u2019t enter nothing!",
            TITLE: "Error"
        },
        S5 = "LOADING",
        O5 = {
            JOINED_COUNT: "x | {count} of {maxPlayers} players joined | {count} of {maxPlayers} players joined",
            PLAYERS_NEEDED: "x | {count} player needed to start | {count} players needed to start",
            WAITING_FOR_VIP: "Waiting for {name} to start the game",
            WAITING_FOR_GAMEPAD: "Waiting for the game to start",
            GAME_STARTING: "Game is starting",
            BUTTON_START: "Press to Start",
            BUTTON_CANCEL: "Press to Cancel"
        },
        w5 = {
            GALLERY_LINK: "Visit the Gallery",
            PLAY_AGAIN: "Play again?",
            BUTTON_SAME_PLAYERS: "Same Players",
            BUTTON_NEW_PLAYERS: "New Players"
        },
        C5 = {
            AND: "AND",
            OR: "OR"
        },
        $5 = {
            BUTTON_SKIP: "Skip",
            BUTTON_NEXT: "Next",
            BUTTON_DONE: "Let\u2019s Go!"
        },
        I5 = {
            NAME: "AUDIENCE"
        },
        A5 = {
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
        R5 = {
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
        N5 = {
            ACTION: b5,
            ALT: E5,
            ERROR: T5,
            LOADING: S5,
            LOBBY: O5,
            POST_GAME: w5,
            SEPARATOR: C5,
            TUTORIAL: $5,
            AUDIENCE: I5,
            UGC: A5,
            TOAST: R5
        },
        L5 = {
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
        P5 = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "sujets non affich\xE9s sur les appareils des joueurs",
                VISIBILITY_CONTROLLER_ON: "sujets affich\xE9s sur les appareils des joueurs",
                VISIBILITY_SCREEN_OFF: "sujets non affich\xE9s sur l'\xE9cran de jeu",
                VISIBILITY_SCREEN_ON: "sujets affich\xE9s sur l'\xE9cran de jeu"
            }
        },
        k5 = {
            DISCONNECTED: "Vous avez \xE9t\xE9 d\xE9connect\xE9.",
            DRAWING_NOTHING: "Vous devez dessiner quelque chose\xA0!",
            ROOM_DESTROYED: "Merci d'avoir jou\xE9\xA0!",
            ROOM_DISCONNECTED: "D\xE9connexion",
            TEXT_NAUGHTY: "Je crains que vous ne puissiez pas \xE9crire \xE7a. Soyez respectueux des autres joueurs.",
            TEXT_NOTHING: "Vous ne pouvez rien entrer\xA0!",
            TITLE: "Erreur"
        },
        x5 = {
            JOINED_COUNT: "x | {count} joueur sur {maxPlayers} \xE0 rejoint la partie | {count} joueurs sur {maxPlayers} ont rejoint la partie",
            PLAYERS_NEEDED: "x | {count} joueur n\xE9cessaire pour commencer | {count} joueurs n\xE9cessaires pour commencer",
            WAITING_FOR_VIP: "En attente de {name} pour commencer la partie",
            WAITING_FOR_GAMEPAD: "En attente du d\xE9but de la partie",
            GAME_STARTING: "La partie commence",
            BUTTON_START: "Appuyer pour commencer",
            BUTTON_CANCEL: "Appuyer pour annuler"
        },
        D5 = {
            GALLERY_LINK: "Visiter la galerie",
            PLAY_AGAIN: "Rejouer\xA0?",
            BUTTON_SAME_PLAYERS: "Les m\xEAmes joueurs",
            BUTTON_NEW_PLAYERS: "De nouveaux joueurs"
        },
        M5 = {
            AND: "ET",
            OR: "OU"
        },
        F5 = {
            BUTTON_SKIP: "Passer",
            BUTTON_NEXT: "Suivant",
            BUTTON_DONE: "Allons-y\xA0!"
        },
        U5 = {
            NAME: "SPECTATEURS"
        },
        B5 = {
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
        j5 = {
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
        G5 = {
            ACTION: L5,
            ALT: P5,
            ERROR: k5,
            LOBBY: x5,
            POST_GAME: D5,
            SEPARATOR: M5,
            TUTORIAL: F5,
            AUDIENCE: U5,
            UGC: B5,
            TOAST: j5
        },
        W5 = {
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
        H5 = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "definizioni nascoste sui dispositivi dei giocatori",
                VISIBILITY_CONTROLLER_ON: "definizioni visualizzate sui dispositivi dei giocatori",
                VISIBILITY_SCREEN_OFF: "definizioni nascoste sullo schermo di gioco",
                VISIBILITY_SCREEN_ON: "definizioni visualizzate sullo schermo di gioco"
            }
        },
        V5 = {
            DISCONNECTED: "\xC8 stata effettuata la disconnessione.",
            DRAWING_NOTHING: "Devi disegnare qualcosa!",
            ROOM_DESTROYED: "Grazie per aver scelto di giocare con noi!",
            ROOM_DISCONNECTED: "Disconnessione effettuata",
            TEXT_NAUGHTY: "Purtroppo non puoi scrivere questa cosa. Abbi rispetto per gli altri giocatori.",
            TEXT_NOTHING: "Devi per forza inserire qualcosa!",
            TITLE: "Errore"
        },
        K5 = {
            JOINED_COUNT: "x | Sta partecipando {count} giocatore su {maxPlayers} | Stanno partecipando {count} giocatori su {maxPlayers}",
            PLAYERS_NEEDED: "x | Manca {count} giocatore per iniziare | Mancano {count} giocatori per iniziare",
            WAITING_FOR_VIP: "In attesa di {name} per iniziare la partita",
            WAITING_FOR_GAMEPAD: "In attesa d'iniziare la partita",
            GAME_STARTING: "La partita sta per iniziare",
            BUTTON_START: "Premi per avviare",
            BUTTON_CANCEL: "Premi per annullare"
        },
        Y5 = {
            GALLERY_LINK: "Visita la galleria",
            PLAY_AGAIN: "Vuoi giocare di nuovo?",
            BUTTON_SAME_PLAYERS: "Stessi giocatori",
            BUTTON_NEW_PLAYERS: "Nuovi giocatori"
        },
        q5 = {
            AND: "E",
            OR: "O"
        },
        z5 = {
            BUTTON_SKIP: "Salta",
            BUTTON_NEXT: "Avanti",
            BUTTON_DONE: "Iniziamo!"
        },
        X5 = {
            NAME: "PUBBLICO"
        },
        J5 = {
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
        Z5 = {
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
        Q5 = {
            ACTION: W5,
            ALT: H5,
            ERROR: V5,
            LOBBY: K5,
            POST_GAME: Y5,
            SEPARATOR: q5,
            TUTORIAL: z5,
            AUDIENCE: X5,
            UGC: J5,
            TOAST: Z5
        },
        eB = {
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
        tB = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "Prompts auf Spielerger\xE4ten verborgen",
                VISIBILITY_CONTROLLER_ON: "Prompts auf Spielerger\xE4ten angezeigt",
                VISIBILITY_SCREEN_OFF: "Prompts auf Spielbildschirm verborgen",
                VISIBILITY_SCREEN_ON: "Prompts auf Spielbildschirm angezeigt"
            }
        },
        rB = {
            DISCONNECTED: "Deine Verbindung wurde getrennt.",
            DRAWING_NOTHING: "Du musst irgendwas zeichnen!",
            ROOM_DESTROYED: "Danke f\xFCrs Spielen!",
            ROOM_DISCONNECTED: "Verbindung getrennt",
            TEXT_NAUGHTY: "Das kannst du leider nicht schreiben. Bitte nimm R\xFCcksicht auf deine Mitspieler.",
            TEXT_NOTHING: "Du musst etwas eingeben!",
            TITLE: "Fehler"
        },
        nB = {
            JOINED_COUNT: "x | {count} von {maxPlayers} Spielern sind beigetreten | {count} von {maxPlayers} Spielern sind beigetreten",
            PLAYERS_NEEDED: "x | {count} Spieler zum Starten ben\xF6tigt | {count} Spieler zum Starten ben\xF6tigt",
            WAITING_FOR_VIP: "Warten, bis {name} das Spiel startet",
            WAITING_FOR_GAMEPAD: "Warten, bis das Spiel startet",
            GAME_STARTING: "Das Spiel beginnt",
            BUTTON_START: "Zum Starten dr\xFCcken",
            BUTTON_CANCEL: "Zum Abbrechen dr\xFCcken"
        },
        iB = {
            GALLERY_LINK: "Galerie besuchen",
            PLAY_AGAIN: "Erneut spielen?",
            BUTTON_SAME_PLAYERS: "Selbe Spieler",
            BUTTON_NEW_PLAYERS: "Neue Spieler"
        },
        sB = {
            AND: "UND",
            OR: "ODER"
        },
        aB = {
            BUTTON_SKIP: "\xDCberspringen",
            BUTTON_NEXT: "Weiter",
            BUTTON_DONE: "Los geht's!"
        },
        oB = {
            NAME: "PUBLIKUM"
        },
        lB = {
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
        cB = {
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
        uB = {
            ACTION: eB,
            ALT: tB,
            ERROR: rB,
            LOBBY: nB,
            POST_GAME: iB,
            SEPARATOR: sB,
            TUTORIAL: aB,
            AUDIENCE: oB,
            UGC: lB,
            TOAST: cB
        },
        fB = {
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
        dB = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "los enunciados no se muestran en el dispositivo del jugador",
                VISIBILITY_CONTROLLER_ON: "los enunciados se muestran en el dispositivo del jugador",
                VISIBILITY_SCREEN_OFF: "los enunciados no se muestran en la pantalla",
                VISIBILITY_SCREEN_ON: "los enunciados se muestran en la pantalla"
            }
        },
        hB = {
            DISCONNECTED: "Te has desconectado.",
            DRAWING_NOTHING: "\xA1Tienes que dibujar algo!",
            ROOM_DESTROYED: "\xA1Gracias por jugar!",
            ROOM_DISCONNECTED: "Desconectado",
            TEXT_NAUGHTY: "Lo siento, no puedes escribir eso. Hay que ser respetuoso con los dem\xE1s jugadores.",
            TEXT_NOTHING: "Tienes que escribir algo",
            TITLE: "Error"
        },
        pB = {
            JOINED_COUNT: "x | Se ha unido {count} de {maxPlayers} jugadores | Se han unido {count} de {maxPlayers} jugadores",
            PLAYERS_NEEDED: "x | Se necesita {count} jugador para empezar | Se necesitan {count} jugadores para empezar",
            WAITING_FOR_VIP: "Esperando a que {name} inicie la partida",
            WAITING_FOR_GAMEPAD: "Esperando a que empiece la partida",
            GAME_STARTING: "La partida va a empezar",
            BUTTON_START: "Pulsa para empezar",
            BUTTON_CANCEL: "Pulsa para cancelar"
        },
        gB = {
            GALLERY_LINK: "Visita la galer\xEDa",
            PLAY_AGAIN: "\xBFJugar otra vez?",
            BUTTON_SAME_PLAYERS: "Los mismos jugadores",
            BUTTON_NEW_PLAYERS: "Otros jugadores"
        },
        mB = {
            AND: "Y",
            OR: "O"
        },
        vB = {
            BUTTON_SKIP: "Omitir",
            BUTTON_NEXT: "Siguiente",
            BUTTON_DONE: "\xA1Vamos!"
        },
        yB = {
            NAME: "P\xDABLICO"
        },
        _B = {
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
        bB = {
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
        EB = {
            ACTION: fB,
            ALT: dB,
            ERROR: hB,
            LOBBY: pB,
            POST_GAME: gB,
            SEPARATOR: mB,
            TUTORIAL: vB,
            AUDIENCE: yB,
            UGC: _B,
            TOAST: bB
        },
        TB = {
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
        SB = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "indicaciones ocultas en los dispositivos de los jugadores",
                VISIBILITY_CONTROLLER_ON: "indicaciones se muestran en los dispositivos de los jugadores",
                VISIBILITY_SCREEN_OFF: "indicaciones ocultas en la pantalla del juego",
                VISIBILITY_SCREEN_ON: "indicaciones se muestran en la pantalla del juego"
            }
        },
        OB = {
            DISCONNECTED: "Te has desconectado.",
            DRAWING_NOTHING: "\xA1Tienes que dibujar algo!",
            ROOM_DESTROYED: "\xA1Gracias por jugar!",
            ROOM_DISCONNECTED: "Desconectado",
            TEXT_NAUGHTY: "Lo siento, no puedes escribir eso. Seamos respetuosos con los dem\xE1s jugadores.",
            TEXT_NOTHING: "Tienes que escribir algo",
            TITLE: "Error"
        },
        wB = {
            JOINED_COUNT: "x | Se ha unido {count} de {maxPlayers} jugadores | Se han unido {count} de {maxPlayers} jugadores",
            PLAYERS_NEEDED: "x | Se necesita {count} jugador para empezar | Se necesitan {count} jugadores para empezar",
            WAITING_FOR_VIP: "Esperando a que {name} inicie la partida",
            WAITING_FOR_GAMEPAD: "Esperando a que empiece la partida",
            GAME_STARTING: "La partida va a empezar",
            BUTTON_START: "Pulsa para empezar",
            BUTTON_CANCEL: "Pulsa para cancelar"
        },
        CB = {
            GALLERY_LINK: "Visita la galer\xEDa",
            PLAY_AGAIN: "\xBFJugar otra vez?",
            BUTTON_SAME_PLAYERS: "Los mismos jugadores",
            BUTTON_NEW_PLAYERS: "Otros jugadores"
        },
        $B = {
            AND: "Y",
            OR: "O"
        },
        IB = {
            BUTTON_SKIP: "Omitir",
            BUTTON_NEXT: "Siguiente",
            BUTTON_DONE: "\xA1Vamos!"
        },
        AB = {
            NAME: "P\xDABLICO"
        },
        RB = {
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
        NB = {
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
        LB = {
            ACTION: TB,
            ALT: SB,
            ERROR: OB,
            LOBBY: wB,
            POST_GAME: CB,
            SEPARATOR: $B,
            TUTORIAL: IB,
            AUDIENCE: AB,
            UGC: RB,
            TOAST: NB
        },
        PB = {
            en: N5,
            fr: G5,
            it: Q5,
            de: uB,
            es: EB,
            "es-XL": LB
        },
        kB = it({
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
                    var r, n, s, o, l, u, f;
                    !this.canvas || (this.canvas.color = (r = t.color) != null ? r : "#000000", this.canvas.layer = (n = t.layer) != null ? n : 0, this.canvas.layers = (s = t.layers) != null ? s : 1, this.canvas.maxPoints = (o = t.maxPoints) != null ? o : Number.MAX_SAFE_INTEGER, this.canvas.precision = (l = t.precision) != null ? l : 2, this.canvas.scale = (u = t.scale) != null ? u : {
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
                const e = ss();
                if (!(e != null && e.appContext.directives.pointerbox)) throw new Error("Doodle.vue relies on PointerBoxPlugin. Please install it inside your main.ts file.")
            },
            mounted() {
                this.createCanvas()
            },
            methods: {
                createCanvas() {
                    const e = this.$refs.canvas;
                    this.canvas = Bn(new v5(e, this.player.doodle, this.canvasOptions))
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
        xB = {
            class: "doodle"
        },
        DB = {
            ref: "canvas"
        },
        MB = ["disabled"],
        FB = ["disabled"];

    function UB(e, t, r, n, s, o) {
        const l = Rt("pointerbox-translate"),
            u = Rt("pointerbox"),
            f = Rt("t");
        return H(), z("div", xB, [Ie((H(), z("div", {
            class: "stage",
            "onPointerbox:start": t[0] || (t[0] = (...h) => e.onPointerBoxStart && e.onPointerBoxStart(...h)),
            "onPointerbox:move": t[1] || (t[1] = (...h) => e.onPointerBoxMove && e.onPointerBoxMove(...h)),
            "onPointerbox:end": t[2] || (t[2] = (...h) => e.onPointerBoxEnd && e.onPointerBoxEnd(...h))
        }, [Ie(Z("canvas", DB, null, 512), [
            [l, {
                id: "doodleCanvas",
                width: e.pointerBoxWidth,
                height: e.pointerBoxHeight
            }]
        ])], 32)), [
            [u]
        ]), e.hideUndo ? Se("", !0) : Ie((H(), z("button", {
            key: 0,
            class: "doodle-action undo",
            disabled: !e.canSubmit,
            onClick: t[3] || (t[3] = Zr((...h) => e.onUndo && e.onUndo(...h), ["prevent"]))
        }, null, 8, MB)), [
            [f, "ACTION.UNDO"]
        ]), e.hideSubmit ? Se("", !0) : Ie((H(), z("button", {
            key: 1,
            class: "doodle-action submit",
            disabled: !e.canSubmit,
            onClick: t[4] || (t[4] = Zr((...h) => e.onSubmit && e.onSubmit(...h), ["prevent"]))
        }, null, 8, FB)), [
            [f, "ACTION.SUBMIT"]
        ])])
    }
    const BB = ze(kB, [
        ["render", UB]
    ]);
    var Rd = {
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
                l = "Expected a function",
                u = "Invalid `variable` option passed into `_.template`",
                f = "__lodash_hash_undefined__",
                h = 500,
                g = "__lodash_placeholder__",
                y = 1,
                E = 2,
                C = 4,
                P = 1,
                M = 2,
                B = 1,
                $ = 2,
                V = 4,
                q = 8,
                G = 16,
                j = 32,
                J = 64,
                oe = 128,
                le = 256,
                ue = 512,
                Ae = 30,
                $e = "...",
                fe = 800,
                Ce = 16,
                F = 1,
                ie = 2,
                de = 3,
                be = 1 / 0,
                ve = 9007199254740991,
                Oe = 17976931348623157e292,
                Fe = 0 / 0,
                Ge = 4294967295,
                tt = Ge - 1,
                It = Ge >>> 1,
                $r = [
                    ["ary", oe],
                    ["bind", B],
                    ["bindKey", $],
                    ["curry", q],
                    ["curryRight", G],
                    ["flip", ue],
                    ["partial", j],
                    ["partialRight", J],
                    ["rearg", le]
                ],
                rr = "[object Arguments]",
                yr = "[object Array]",
                ot = "[object AsyncFunction]",
                Ot = "[object Boolean]",
                lt = "[object Date]",
                xt = "[object DOMException]",
                Vt = "[object Error]",
                Dt = "[object Function]",
                m = "[object GeneratorFunction]",
                p = "[object Map]",
                O = "[object Number]",
                D = "[object Null]",
                U = "[object Object]",
                Y = "[object Promise]",
                ce = "[object Proxy]",
                se = "[object RegExp]",
                re = "[object Set]",
                A = "[object String]",
                W = "[object Symbol]",
                he = "[object Undefined]",
                pe = "[object WeakMap]",
                Re = "[object WeakSet]",
                xe = "[object ArrayBuffer]",
                w = "[object DataView]",
                T = "[object Float32Array]",
                N = "[object Float64Array]",
                S = "[object Int8Array]",
                L = "[object Int16Array]",
                Q = "[object Int32Array]",
                ne = "[object Uint8Array]",
                _e = "[object Uint8ClampedArray]",
                Te = "[object Uint16Array]",
                ft = "[object Uint32Array]",
                nr = /\b__p \+= '';/g,
                De = /\b(__p \+=) '' \+/g,
                ha = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
                Up = /&(?:amp|lt|gt|quot|#39);/g,
                Bp = /[&<>"']/g,
                CS = RegExp(Up.source),
                $S = RegExp(Bp.source),
                IS = /<%-([\s\S]+?)%>/g,
                AS = /<%([\s\S]+?)%>/g,
                jp = /<%=([\s\S]+?)%>/g,
                RS = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                NS = /^\w*$/,
                LS = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                Qc = /[\\^$.*+?()[\]{}|]/g,
                PS = RegExp(Qc.source),
                eu = /^\s+/,
                kS = /\s/,
                xS = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
                DS = /\{\n\/\* \[wrapped with (.+)\] \*/,
                MS = /,? & /,
                FS = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
                US = /[()=,{}\[\]\/\s]/,
                BS = /\\(\\)?/g,
                jS = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
                Gp = /\w*$/,
                GS = /^[-+]0x[0-9a-f]+$/i,
                WS = /^0b[01]+$/i,
                HS = /^\[object .+?Constructor\]$/,
                VS = /^0o[0-7]+$/i,
                KS = /^(?:0|[1-9]\d*)$/,
                YS = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
                Eo = /($^)/,
                qS = /['\n\r\u2028\u2029\\]/g,
                To = "\\ud800-\\udfff",
                zS = "\\u0300-\\u036f",
                XS = "\\ufe20-\\ufe2f",
                JS = "\\u20d0-\\u20ff",
                Wp = zS + XS + JS,
                Hp = "\\u2700-\\u27bf",
                Vp = "a-z\\xdf-\\xf6\\xf8-\\xff",
                ZS = "\\xac\\xb1\\xd7\\xf7",
                QS = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
                eO = "\\u2000-\\u206f",
                tO = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
                Kp = "A-Z\\xc0-\\xd6\\xd8-\\xde",
                Yp = "\\ufe0e\\ufe0f",
                qp = ZS + QS + eO + tO,
                tu = "['\u2019]",
                rO = "[" + To + "]",
                zp = "[" + qp + "]",
                So = "[" + Wp + "]",
                Xp = "\\d+",
                nO = "[" + Hp + "]",
                Jp = "[" + Vp + "]",
                Zp = "[^" + To + qp + Xp + Hp + Vp + Kp + "]",
                ru = "\\ud83c[\\udffb-\\udfff]",
                iO = "(?:" + So + "|" + ru + ")",
                Qp = "[^" + To + "]",
                nu = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                iu = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                us = "[" + Kp + "]",
                eg = "\\u200d",
                tg = "(?:" + Jp + "|" + Zp + ")",
                sO = "(?:" + us + "|" + Zp + ")",
                rg = "(?:" + tu + "(?:d|ll|m|re|s|t|ve))?",
                ng = "(?:" + tu + "(?:D|LL|M|RE|S|T|VE))?",
                ig = iO + "?",
                sg = "[" + Yp + "]?",
                aO = "(?:" + eg + "(?:" + [Qp, nu, iu].join("|") + ")" + sg + ig + ")*",
                oO = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
                lO = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
                ag = sg + ig + aO,
                cO = "(?:" + [nO, nu, iu].join("|") + ")" + ag,
                uO = "(?:" + [Qp + So + "?", So, nu, iu, rO].join("|") + ")",
                fO = RegExp(tu, "g"),
                dO = RegExp(So, "g"),
                su = RegExp(ru + "(?=" + ru + ")|" + uO + ag, "g"),
                hO = RegExp([us + "?" + Jp + "+" + rg + "(?=" + [zp, us, "$"].join("|") + ")", sO + "+" + ng + "(?=" + [zp, us + tg, "$"].join("|") + ")", us + "?" + tg + "+" + rg, us + "+" + ng, lO, oO, Xp, cO].join("|"), "g"),
                pO = RegExp("[" + eg + To + Wp + Yp + "]"),
                gO = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
                mO = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
                vO = -1,
                Tt = {};
            Tt[T] = Tt[N] = Tt[S] = Tt[L] = Tt[Q] = Tt[ne] = Tt[_e] = Tt[Te] = Tt[ft] = !0, Tt[rr] = Tt[yr] = Tt[xe] = Tt[Ot] = Tt[w] = Tt[lt] = Tt[Vt] = Tt[Dt] = Tt[p] = Tt[O] = Tt[U] = Tt[se] = Tt[re] = Tt[A] = Tt[pe] = !1;
            var vt = {};
            vt[rr] = vt[yr] = vt[xe] = vt[w] = vt[Ot] = vt[lt] = vt[T] = vt[N] = vt[S] = vt[L] = vt[Q] = vt[p] = vt[O] = vt[U] = vt[se] = vt[re] = vt[A] = vt[W] = vt[ne] = vt[_e] = vt[Te] = vt[ft] = !0, vt[Vt] = vt[Dt] = vt[pe] = !1;
            var yO = {
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
                _O = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;"
                },
                bO = {
                    "&amp;": "&",
                    "&lt;": "<",
                    "&gt;": ">",
                    "&quot;": '"',
                    "&#39;": "'"
                },
                EO = {
                    "\\": "\\",
                    "'": "'",
                    "\n": "n",
                    "\r": "r",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                },
                TO = parseFloat,
                SO = parseInt,
                og = typeof kt == "object" && kt && kt.Object === Object && kt,
                OO = typeof self == "object" && self && self.Object === Object && self,
                Xt = og || OO || Function("return this")(),
                au = t && !t.nodeType && t,
                wi = au && !0 && e && !e.nodeType && e,
                lg = wi && wi.exports === au,
                ou = lg && og.process,
                Ur = function() {
                    try {
                        var k = wi && wi.require && wi.require("util").types;
                        return k || ou && ou.binding && ou.binding("util")
                    } catch {}
                }(),
                cg = Ur && Ur.isArrayBuffer,
                ug = Ur && Ur.isDate,
                fg = Ur && Ur.isMap,
                dg = Ur && Ur.isRegExp,
                hg = Ur && Ur.isSet,
                pg = Ur && Ur.isTypedArray;

            function Ir(k, X, K) {
                switch (K.length) {
                    case 0:
                        return k.call(X);
                    case 1:
                        return k.call(X, K[0]);
                    case 2:
                        return k.call(X, K[0], K[1]);
                    case 3:
                        return k.call(X, K[0], K[1], K[2])
                }
                return k.apply(X, K)
            }

            function wO(k, X, K, Ee) {
                for (var Ue = -1, st = k == null ? 0 : k.length; ++Ue < st;) {
                    var Ut = k[Ue];
                    X(Ee, Ut, K(Ut), k)
                }
                return Ee
            }

            function Br(k, X) {
                for (var K = -1, Ee = k == null ? 0 : k.length; ++K < Ee && X(k[K], K, k) !== !1;);
                return k
            }

            function CO(k, X) {
                for (var K = k == null ? 0 : k.length; K-- && X(k[K], K, k) !== !1;);
                return k
            }

            function gg(k, X) {
                for (var K = -1, Ee = k == null ? 0 : k.length; ++K < Ee;)
                    if (!X(k[K], K, k)) return !1;
                return !0
            }

            function Wn(k, X) {
                for (var K = -1, Ee = k == null ? 0 : k.length, Ue = 0, st = []; ++K < Ee;) {
                    var Ut = k[K];
                    X(Ut, K, k) && (st[Ue++] = Ut)
                }
                return st
            }

            function Oo(k, X) {
                var K = k == null ? 0 : k.length;
                return !!K && fs(k, X, 0) > -1
            }

            function lu(k, X, K) {
                for (var Ee = -1, Ue = k == null ? 0 : k.length; ++Ee < Ue;)
                    if (K(X, k[Ee])) return !0;
                return !1
            }

            function wt(k, X) {
                for (var K = -1, Ee = k == null ? 0 : k.length, Ue = Array(Ee); ++K < Ee;) Ue[K] = X(k[K], K, k);
                return Ue
            }

            function Hn(k, X) {
                for (var K = -1, Ee = X.length, Ue = k.length; ++K < Ee;) k[Ue + K] = X[K];
                return k
            }

            function cu(k, X, K, Ee) {
                var Ue = -1,
                    st = k == null ? 0 : k.length;
                for (Ee && st && (K = k[++Ue]); ++Ue < st;) K = X(K, k[Ue], Ue, k);
                return K
            }

            function $O(k, X, K, Ee) {
                var Ue = k == null ? 0 : k.length;
                for (Ee && Ue && (K = k[--Ue]); Ue--;) K = X(K, k[Ue], Ue, k);
                return K
            }

            function uu(k, X) {
                for (var K = -1, Ee = k == null ? 0 : k.length; ++K < Ee;)
                    if (X(k[K], K, k)) return !0;
                return !1
            }
            var IO = fu("length");

            function AO(k) {
                return k.split("")
            }

            function RO(k) {
                return k.match(FS) || []
            }

            function mg(k, X, K) {
                var Ee;
                return K(k, function(Ue, st, Ut) {
                    if (X(Ue, st, Ut)) return Ee = st, !1
                }), Ee
            }

            function wo(k, X, K, Ee) {
                for (var Ue = k.length, st = K + (Ee ? 1 : -1); Ee ? st-- : ++st < Ue;)
                    if (X(k[st], st, k)) return st;
                return -1
            }

            function fs(k, X, K) {
                return X === X ? GO(k, X, K) : wo(k, vg, K)
            }

            function NO(k, X, K, Ee) {
                for (var Ue = K - 1, st = k.length; ++Ue < st;)
                    if (Ee(k[Ue], X)) return Ue;
                return -1
            }

            function vg(k) {
                return k !== k
            }

            function yg(k, X) {
                var K = k == null ? 0 : k.length;
                return K ? hu(k, X) / K : Fe
            }

            function fu(k) {
                return function(X) {
                    return X == null ? r : X[k]
                }
            }

            function du(k) {
                return function(X) {
                    return k == null ? r : k[X]
                }
            }

            function _g(k, X, K, Ee, Ue) {
                return Ue(k, function(st, Ut, pt) {
                    K = Ee ? (Ee = !1, st) : X(K, st, Ut, pt)
                }), K
            }

            function LO(k, X) {
                var K = k.length;
                for (k.sort(X); K--;) k[K] = k[K].value;
                return k
            }

            function hu(k, X) {
                for (var K, Ee = -1, Ue = k.length; ++Ee < Ue;) {
                    var st = X(k[Ee]);
                    st !== r && (K = K === r ? st : K + st)
                }
                return K
            }

            function pu(k, X) {
                for (var K = -1, Ee = Array(k); ++K < k;) Ee[K] = X(K);
                return Ee
            }

            function PO(k, X) {
                return wt(X, function(K) {
                    return [K, k[K]]
                })
            }

            function bg(k) {
                return k && k.slice(0, Og(k) + 1).replace(eu, "")
            }

            function Ar(k) {
                return function(X) {
                    return k(X)
                }
            }

            function gu(k, X) {
                return wt(X, function(K) {
                    return k[K]
                })
            }

            function pa(k, X) {
                return k.has(X)
            }

            function Eg(k, X) {
                for (var K = -1, Ee = k.length; ++K < Ee && fs(X, k[K], 0) > -1;);
                return K
            }

            function Tg(k, X) {
                for (var K = k.length; K-- && fs(X, k[K], 0) > -1;);
                return K
            }

            function kO(k, X) {
                for (var K = k.length, Ee = 0; K--;) k[K] === X && ++Ee;
                return Ee
            }
            var xO = du(yO),
                DO = du(_O);

            function MO(k) {
                return "\\" + EO[k]
            }

            function FO(k, X) {
                return k == null ? r : k[X]
            }

            function ds(k) {
                return pO.test(k)
            }

            function UO(k) {
                return gO.test(k)
            }

            function BO(k) {
                for (var X, K = []; !(X = k.next()).done;) K.push(X.value);
                return K
            }

            function mu(k) {
                var X = -1,
                    K = Array(k.size);
                return k.forEach(function(Ee, Ue) {
                    K[++X] = [Ue, Ee]
                }), K
            }

            function Sg(k, X) {
                return function(K) {
                    return k(X(K))
                }
            }

            function Vn(k, X) {
                for (var K = -1, Ee = k.length, Ue = 0, st = []; ++K < Ee;) {
                    var Ut = k[K];
                    (Ut === X || Ut === g) && (k[K] = g, st[Ue++] = K)
                }
                return st
            }

            function Co(k) {
                var X = -1,
                    K = Array(k.size);
                return k.forEach(function(Ee) {
                    K[++X] = Ee
                }), K
            }

            function jO(k) {
                var X = -1,
                    K = Array(k.size);
                return k.forEach(function(Ee) {
                    K[++X] = [Ee, Ee]
                }), K
            }

            function GO(k, X, K) {
                for (var Ee = K - 1, Ue = k.length; ++Ee < Ue;)
                    if (k[Ee] === X) return Ee;
                return -1
            }

            function WO(k, X, K) {
                for (var Ee = K + 1; Ee--;)
                    if (k[Ee] === X) return Ee;
                return Ee
            }

            function hs(k) {
                return ds(k) ? VO(k) : IO(k)
            }

            function en(k) {
                return ds(k) ? KO(k) : AO(k)
            }

            function Og(k) {
                for (var X = k.length; X-- && kS.test(k.charAt(X)););
                return X
            }
            var HO = du(bO);

            function VO(k) {
                for (var X = su.lastIndex = 0; su.test(k);) ++X;
                return X
            }

            function KO(k) {
                return k.match(su) || []
            }

            function YO(k) {
                return k.match(hO) || []
            }
            var qO = function k(X) {
                    X = X == null ? Xt : ps.defaults(Xt.Object(), X, ps.pick(Xt, mO));
                    var K = X.Array,
                        Ee = X.Date,
                        Ue = X.Error,
                        st = X.Function,
                        Ut = X.Math,
                        pt = X.Object,
                        vu = X.RegExp,
                        zO = X.String,
                        jr = X.TypeError,
                        $o = K.prototype,
                        XO = st.prototype,
                        gs = pt.prototype,
                        Io = X["__core-js_shared__"],
                        Ao = XO.toString,
                        dt = gs.hasOwnProperty,
                        JO = 0,
                        wg = function() {
                            var i = /[^.]+$/.exec(Io && Io.keys && Io.keys.IE_PROTO || "");
                            return i ? "Symbol(src)_1." + i : ""
                        }(),
                        Ro = gs.toString,
                        ZO = Ao.call(pt),
                        QO = Xt._,
                        ew = vu("^" + Ao.call(dt).replace(Qc, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                        No = lg ? X.Buffer : r,
                        Kn = X.Symbol,
                        Lo = X.Uint8Array,
                        Cg = No ? No.allocUnsafe : r,
                        Po = Sg(pt.getPrototypeOf, pt),
                        $g = pt.create,
                        Ig = gs.propertyIsEnumerable,
                        ko = $o.splice,
                        Ag = Kn ? Kn.isConcatSpreadable : r,
                        ga = Kn ? Kn.iterator : r,
                        Ci = Kn ? Kn.toStringTag : r,
                        xo = function() {
                            try {
                                var i = Ni(pt, "defineProperty");
                                return i({}, "", {}), i
                            } catch {}
                        }(),
                        tw = X.clearTimeout !== Xt.clearTimeout && X.clearTimeout,
                        rw = Ee && Ee.now !== Xt.Date.now && Ee.now,
                        nw = X.setTimeout !== Xt.setTimeout && X.setTimeout,
                        Do = Ut.ceil,
                        Mo = Ut.floor,
                        yu = pt.getOwnPropertySymbols,
                        iw = No ? No.isBuffer : r,
                        Rg = X.isFinite,
                        sw = $o.join,
                        aw = Sg(pt.keys, pt),
                        Bt = Ut.max,
                        ir = Ut.min,
                        ow = Ee.now,
                        lw = X.parseInt,
                        Ng = Ut.random,
                        cw = $o.reverse,
                        _u = Ni(X, "DataView"),
                        ma = Ni(X, "Map"),
                        bu = Ni(X, "Promise"),
                        ms = Ni(X, "Set"),
                        va = Ni(X, "WeakMap"),
                        ya = Ni(pt, "create"),
                        Fo = va && new va,
                        vs = {},
                        uw = Li(_u),
                        fw = Li(ma),
                        dw = Li(bu),
                        hw = Li(ms),
                        pw = Li(va),
                        Uo = Kn ? Kn.prototype : r,
                        _a = Uo ? Uo.valueOf : r,
                        Lg = Uo ? Uo.toString : r;

                    function _(i) {
                        if (At(i) && !je(i) && !(i instanceof qe)) {
                            if (i instanceof Gr) return i;
                            if (dt.call(i, "__wrapped__")) return Pm(i)
                        }
                        return new Gr(i)
                    }
                    var ys = function() {
                        function i() {}
                        return function(a) {
                            if (!$t(a)) return {};
                            if ($g) return $g(a);
                            i.prototype = a;
                            var c = new i;
                            return i.prototype = r, c
                        }
                    }();

                    function Bo() {}

                    function Gr(i, a) {
                        this.__wrapped__ = i, this.__actions__ = [], this.__chain__ = !!a, this.__index__ = 0, this.__values__ = r
                    }
                    _.templateSettings = {
                        escape: IS,
                        evaluate: AS,
                        interpolate: jp,
                        variable: "",
                        imports: {
                            _
                        }
                    }, _.prototype = Bo.prototype, _.prototype.constructor = _, Gr.prototype = ys(Bo.prototype), Gr.prototype.constructor = Gr;

                    function qe(i) {
                        this.__wrapped__ = i, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Ge, this.__views__ = []
                    }

                    function gw() {
                        var i = new qe(this.__wrapped__);
                        return i.__actions__ = _r(this.__actions__), i.__dir__ = this.__dir__, i.__filtered__ = this.__filtered__, i.__iteratees__ = _r(this.__iteratees__), i.__takeCount__ = this.__takeCount__, i.__views__ = _r(this.__views__), i
                    }

                    function mw() {
                        if (this.__filtered__) {
                            var i = new qe(this);
                            i.__dir__ = -1, i.__filtered__ = !0
                        } else i = this.clone(), i.__dir__ *= -1;
                        return i
                    }

                    function vw() {
                        var i = this.__wrapped__.value(),
                            a = this.__dir__,
                            c = je(i),
                            d = a < 0,
                            v = c ? i.length : 0,
                            b = AC(0, v, this.__views__),
                            I = b.start,
                            R = b.end,
                            x = R - I,
                            ee = d ? R : I - 1,
                            te = this.__iteratees__,
                            ae = te.length,
                            me = 0,
                            we = ir(x, this.__takeCount__);
                        if (!c || !d && v == x && we == x) return rm(i, this.__actions__);
                        var Le = [];
                        e: for (; x-- && me < we;) {
                            ee += a;
                            for (var Ve = -1, Pe = i[ee]; ++Ve < ae;) {
                                var Ye = te[Ve],
                                    Xe = Ye.iteratee,
                                    Lr = Ye.type,
                                    pr = Xe(Pe);
                                if (Lr == ie) Pe = pr;
                                else if (!pr) {
                                    if (Lr == F) continue e;
                                    break e
                                }
                            }
                            Le[me++] = Pe
                        }
                        return Le
                    }
                    qe.prototype = ys(Bo.prototype), qe.prototype.constructor = qe;

                    function $i(i) {
                        var a = -1,
                            c = i == null ? 0 : i.length;
                        for (this.clear(); ++a < c;) {
                            var d = i[a];
                            this.set(d[0], d[1])
                        }
                    }

                    function yw() {
                        this.__data__ = ya ? ya(null) : {}, this.size = 0
                    }

                    function _w(i) {
                        var a = this.has(i) && delete this.__data__[i];
                        return this.size -= a ? 1 : 0, a
                    }

                    function bw(i) {
                        var a = this.__data__;
                        if (ya) {
                            var c = a[i];
                            return c === f ? r : c
                        }
                        return dt.call(a, i) ? a[i] : r
                    }

                    function Ew(i) {
                        var a = this.__data__;
                        return ya ? a[i] !== r : dt.call(a, i)
                    }

                    function Tw(i, a) {
                        var c = this.__data__;
                        return this.size += this.has(i) ? 0 : 1, c[i] = ya && a === r ? f : a, this
                    }
                    $i.prototype.clear = yw, $i.prototype.delete = _w, $i.prototype.get = bw, $i.prototype.has = Ew, $i.prototype.set = Tw;

                    function Cn(i) {
                        var a = -1,
                            c = i == null ? 0 : i.length;
                        for (this.clear(); ++a < c;) {
                            var d = i[a];
                            this.set(d[0], d[1])
                        }
                    }

                    function Sw() {
                        this.__data__ = [], this.size = 0
                    }

                    function Ow(i) {
                        var a = this.__data__,
                            c = jo(a, i);
                        if (c < 0) return !1;
                        var d = a.length - 1;
                        return c == d ? a.pop() : ko.call(a, c, 1), --this.size, !0
                    }

                    function ww(i) {
                        var a = this.__data__,
                            c = jo(a, i);
                        return c < 0 ? r : a[c][1]
                    }

                    function Cw(i) {
                        return jo(this.__data__, i) > -1
                    }

                    function $w(i, a) {
                        var c = this.__data__,
                            d = jo(c, i);
                        return d < 0 ? (++this.size, c.push([i, a])) : c[d][1] = a, this
                    }
                    Cn.prototype.clear = Sw, Cn.prototype.delete = Ow, Cn.prototype.get = ww, Cn.prototype.has = Cw, Cn.prototype.set = $w;

                    function $n(i) {
                        var a = -1,
                            c = i == null ? 0 : i.length;
                        for (this.clear(); ++a < c;) {
                            var d = i[a];
                            this.set(d[0], d[1])
                        }
                    }

                    function Iw() {
                        this.size = 0, this.__data__ = {
                            hash: new $i,
                            map: new(ma || Cn),
                            string: new $i
                        }
                    }

                    function Aw(i) {
                        var a = Qo(this, i).delete(i);
                        return this.size -= a ? 1 : 0, a
                    }

                    function Rw(i) {
                        return Qo(this, i).get(i)
                    }

                    function Nw(i) {
                        return Qo(this, i).has(i)
                    }

                    function Lw(i, a) {
                        var c = Qo(this, i),
                            d = c.size;
                        return c.set(i, a), this.size += c.size == d ? 0 : 1, this
                    }
                    $n.prototype.clear = Iw, $n.prototype.delete = Aw, $n.prototype.get = Rw, $n.prototype.has = Nw, $n.prototype.set = Lw;

                    function Ii(i) {
                        var a = -1,
                            c = i == null ? 0 : i.length;
                        for (this.__data__ = new $n; ++a < c;) this.add(i[a])
                    }

                    function Pw(i) {
                        return this.__data__.set(i, f), this
                    }

                    function kw(i) {
                        return this.__data__.has(i)
                    }
                    Ii.prototype.add = Ii.prototype.push = Pw, Ii.prototype.has = kw;

                    function tn(i) {
                        var a = this.__data__ = new Cn(i);
                        this.size = a.size
                    }

                    function xw() {
                        this.__data__ = new Cn, this.size = 0
                    }

                    function Dw(i) {
                        var a = this.__data__,
                            c = a.delete(i);
                        return this.size = a.size, c
                    }

                    function Mw(i) {
                        return this.__data__.get(i)
                    }

                    function Fw(i) {
                        return this.__data__.has(i)
                    }

                    function Uw(i, a) {
                        var c = this.__data__;
                        if (c instanceof Cn) {
                            var d = c.__data__;
                            if (!ma || d.length < s - 1) return d.push([i, a]), this.size = ++c.size, this;
                            c = this.__data__ = new $n(d)
                        }
                        return c.set(i, a), this.size = c.size, this
                    }
                    tn.prototype.clear = xw, tn.prototype.delete = Dw, tn.prototype.get = Mw, tn.prototype.has = Fw, tn.prototype.set = Uw;

                    function Pg(i, a) {
                        var c = je(i),
                            d = !c && Pi(i),
                            v = !c && !d && Jn(i),
                            b = !c && !d && !v && Ts(i),
                            I = c || d || v || b,
                            R = I ? pu(i.length, zO) : [],
                            x = R.length;
                        for (var ee in i)(a || dt.call(i, ee)) && !(I && (ee == "length" || v && (ee == "offset" || ee == "parent") || b && (ee == "buffer" || ee == "byteLength" || ee == "byteOffset") || Nn(ee, x))) && R.push(ee);
                        return R
                    }

                    function kg(i) {
                        var a = i.length;
                        return a ? i[Nu(0, a - 1)] : r
                    }

                    function Bw(i, a) {
                        return el(_r(i), Ai(a, 0, i.length))
                    }

                    function jw(i) {
                        return el(_r(i))
                    }

                    function Eu(i, a, c) {
                        (c !== r && !rn(i[a], c) || c === r && !(a in i)) && In(i, a, c)
                    }

                    function ba(i, a, c) {
                        var d = i[a];
                        (!(dt.call(i, a) && rn(d, c)) || c === r && !(a in i)) && In(i, a, c)
                    }

                    function jo(i, a) {
                        for (var c = i.length; c--;)
                            if (rn(i[c][0], a)) return c;
                        return -1
                    }

                    function Gw(i, a, c, d) {
                        return Yn(i, function(v, b, I) {
                            a(d, v, c(v), I)
                        }), d
                    }

                    function xg(i, a) {
                        return i && gn(a, Kt(a), i)
                    }

                    function Ww(i, a) {
                        return i && gn(a, Er(a), i)
                    }

                    function In(i, a, c) {
                        a == "__proto__" && xo ? xo(i, a, {
                            configurable: !0,
                            enumerable: !0,
                            value: c,
                            writable: !0
                        }) : i[a] = c
                    }

                    function Tu(i, a) {
                        for (var c = -1, d = a.length, v = K(d), b = i == null; ++c < d;) v[c] = b ? r : rf(i, a[c]);
                        return v
                    }

                    function Ai(i, a, c) {
                        return i === i && (c !== r && (i = i <= c ? i : c), a !== r && (i = i >= a ? i : a)), i
                    }

                    function Wr(i, a, c, d, v, b) {
                        var I, R = a & y,
                            x = a & E,
                            ee = a & C;
                        if (c && (I = v ? c(i, d, v, b) : c(i)), I !== r) return I;
                        if (!$t(i)) return i;
                        var te = je(i);
                        if (te) {
                            if (I = NC(i), !R) return _r(i, I)
                        } else {
                            var ae = sr(i),
                                me = ae == Dt || ae == m;
                            if (Jn(i)) return sm(i, R);
                            if (ae == U || ae == rr || me && !v) {
                                if (I = x || me ? {} : Om(i), !R) return x ? bC(i, Ww(I, i)) : _C(i, xg(I, i))
                            } else {
                                if (!vt[ae]) return v ? i : {};
                                I = LC(i, ae, R)
                            }
                        }
                        b || (b = new tn);
                        var we = b.get(i);
                        if (we) return we;
                        b.set(i, I), Qm(i) ? i.forEach(function(Pe) {
                            I.add(Wr(Pe, a, c, Pe, i, b))
                        }) : Jm(i) && i.forEach(function(Pe, Ye) {
                            I.set(Ye, Wr(Pe, a, c, Ye, i, b))
                        });
                        var Le = ee ? x ? Gu : ju : x ? Er : Kt,
                            Ve = te ? r : Le(i);
                        return Br(Ve || i, function(Pe, Ye) {
                            Ve && (Ye = Pe, Pe = i[Ye]), ba(I, Ye, Wr(Pe, a, c, Ye, i, b))
                        }), I
                    }

                    function Hw(i) {
                        var a = Kt(i);
                        return function(c) {
                            return Dg(c, i, a)
                        }
                    }

                    function Dg(i, a, c) {
                        var d = c.length;
                        if (i == null) return !d;
                        for (i = pt(i); d--;) {
                            var v = c[d],
                                b = a[v],
                                I = i[v];
                            if (I === r && !(v in i) || !b(I)) return !1
                        }
                        return !0
                    }

                    function Mg(i, a, c) {
                        if (typeof i != "function") throw new jr(l);
                        return $a(function() {
                            i.apply(r, c)
                        }, a)
                    }

                    function Ea(i, a, c, d) {
                        var v = -1,
                            b = Oo,
                            I = !0,
                            R = i.length,
                            x = [],
                            ee = a.length;
                        if (!R) return x;
                        c && (a = wt(a, Ar(c))), d ? (b = lu, I = !1) : a.length >= s && (b = pa, I = !1, a = new Ii(a));
                        e: for (; ++v < R;) {
                            var te = i[v],
                                ae = c == null ? te : c(te);
                            if (te = d || te !== 0 ? te : 0, I && ae === ae) {
                                for (var me = ee; me--;)
                                    if (a[me] === ae) continue e;
                                x.push(te)
                            } else b(a, ae, d) || x.push(te)
                        }
                        return x
                    }
                    var Yn = um(pn),
                        Fg = um(Ou, !0);

                    function Vw(i, a) {
                        var c = !0;
                        return Yn(i, function(d, v, b) {
                            return c = !!a(d, v, b), c
                        }), c
                    }

                    function Go(i, a, c) {
                        for (var d = -1, v = i.length; ++d < v;) {
                            var b = i[d],
                                I = a(b);
                            if (I != null && (R === r ? I === I && !Nr(I) : c(I, R))) var R = I,
                                x = b
                        }
                        return x
                    }

                    function Kw(i, a, c, d) {
                        var v = i.length;
                        for (c = We(c), c < 0 && (c = -c > v ? 0 : v + c), d = d === r || d > v ? v : We(d), d < 0 && (d += v), d = c > d ? 0 : tv(d); c < d;) i[c++] = a;
                        return i
                    }

                    function Ug(i, a) {
                        var c = [];
                        return Yn(i, function(d, v, b) {
                            a(d, v, b) && c.push(d)
                        }), c
                    }

                    function Jt(i, a, c, d, v) {
                        var b = -1,
                            I = i.length;
                        for (c || (c = kC), v || (v = []); ++b < I;) {
                            var R = i[b];
                            a > 0 && c(R) ? a > 1 ? Jt(R, a - 1, c, d, v) : Hn(v, R) : d || (v[v.length] = R)
                        }
                        return v
                    }
                    var Su = fm(),
                        Bg = fm(!0);

                    function pn(i, a) {
                        return i && Su(i, a, Kt)
                    }

                    function Ou(i, a) {
                        return i && Bg(i, a, Kt)
                    }

                    function Wo(i, a) {
                        return Wn(a, function(c) {
                            return Ln(i[c])
                        })
                    }

                    function Ri(i, a) {
                        a = zn(a, i);
                        for (var c = 0, d = a.length; i != null && c < d;) i = i[mn(a[c++])];
                        return c && c == d ? i : r
                    }

                    function jg(i, a, c) {
                        var d = a(i);
                        return je(i) ? d : Hn(d, c(i))
                    }

                    function dr(i) {
                        return i == null ? i === r ? he : D : Ci && Ci in pt(i) ? IC(i) : jC(i)
                    }

                    function wu(i, a) {
                        return i > a
                    }

                    function Yw(i, a) {
                        return i != null && dt.call(i, a)
                    }

                    function qw(i, a) {
                        return i != null && a in pt(i)
                    }

                    function zw(i, a, c) {
                        return i >= ir(a, c) && i < Bt(a, c)
                    }

                    function Cu(i, a, c) {
                        for (var d = c ? lu : Oo, v = i[0].length, b = i.length, I = b, R = K(b), x = 1 / 0, ee = []; I--;) {
                            var te = i[I];
                            I && a && (te = wt(te, Ar(a))), x = ir(te.length, x), R[I] = !c && (a || v >= 120 && te.length >= 120) ? new Ii(I && te) : r
                        }
                        te = i[0];
                        var ae = -1,
                            me = R[0];
                        e: for (; ++ae < v && ee.length < x;) {
                            var we = te[ae],
                                Le = a ? a(we) : we;
                            if (we = c || we !== 0 ? we : 0, !(me ? pa(me, Le) : d(ee, Le, c))) {
                                for (I = b; --I;) {
                                    var Ve = R[I];
                                    if (!(Ve ? pa(Ve, Le) : d(i[I], Le, c))) continue e
                                }
                                me && me.push(Le), ee.push(we)
                            }
                        }
                        return ee
                    }

                    function Xw(i, a, c, d) {
                        return pn(i, function(v, b, I) {
                            a(d, c(v), b, I)
                        }), d
                    }

                    function Ta(i, a, c) {
                        a = zn(a, i), i = Im(i, a);
                        var d = i == null ? i : i[mn(Vr(a))];
                        return d == null ? r : Ir(d, i, c)
                    }

                    function Gg(i) {
                        return At(i) && dr(i) == rr
                    }

                    function Jw(i) {
                        return At(i) && dr(i) == xe
                    }

                    function Zw(i) {
                        return At(i) && dr(i) == lt
                    }

                    function Sa(i, a, c, d, v) {
                        return i === a ? !0 : i == null || a == null || !At(i) && !At(a) ? i !== i && a !== a : Qw(i, a, c, d, Sa, v)
                    }

                    function Qw(i, a, c, d, v, b) {
                        var I = je(i),
                            R = je(a),
                            x = I ? yr : sr(i),
                            ee = R ? yr : sr(a);
                        x = x == rr ? U : x, ee = ee == rr ? U : ee;
                        var te = x == U,
                            ae = ee == U,
                            me = x == ee;
                        if (me && Jn(i)) {
                            if (!Jn(a)) return !1;
                            I = !0, te = !1
                        }
                        if (me && !te) return b || (b = new tn), I || Ts(i) ? Em(i, a, c, d, v, b) : CC(i, a, x, c, d, v, b);
                        if (!(c & P)) {
                            var we = te && dt.call(i, "__wrapped__"),
                                Le = ae && dt.call(a, "__wrapped__");
                            if (we || Le) {
                                var Ve = we ? i.value() : i,
                                    Pe = Le ? a.value() : a;
                                return b || (b = new tn), v(Ve, Pe, c, d, b)
                            }
                        }
                        return me ? (b || (b = new tn), $C(i, a, c, d, v, b)) : !1
                    }

                    function eC(i) {
                        return At(i) && sr(i) == p
                    }

                    function $u(i, a, c, d) {
                        var v = c.length,
                            b = v,
                            I = !d;
                        if (i == null) return !b;
                        for (i = pt(i); v--;) {
                            var R = c[v];
                            if (I && R[2] ? R[1] !== i[R[0]] : !(R[0] in i)) return !1
                        }
                        for (; ++v < b;) {
                            R = c[v];
                            var x = R[0],
                                ee = i[x],
                                te = R[1];
                            if (I && R[2]) {
                                if (ee === r && !(x in i)) return !1
                            } else {
                                var ae = new tn;
                                if (d) var me = d(ee, te, x, i, a, ae);
                                if (!(me === r ? Sa(te, ee, P | M, d, ae) : me)) return !1
                            }
                        }
                        return !0
                    }

                    function Wg(i) {
                        if (!$t(i) || DC(i)) return !1;
                        var a = Ln(i) ? ew : HS;
                        return a.test(Li(i))
                    }

                    function tC(i) {
                        return At(i) && dr(i) == se
                    }

                    function rC(i) {
                        return At(i) && sr(i) == re
                    }

                    function nC(i) {
                        return At(i) && al(i.length) && !!Tt[dr(i)]
                    }

                    function Hg(i) {
                        return typeof i == "function" ? i : i == null ? Tr : typeof i == "object" ? je(i) ? Yg(i[0], i[1]) : Kg(i) : dv(i)
                    }

                    function Iu(i) {
                        if (!Ca(i)) return aw(i);
                        var a = [];
                        for (var c in pt(i)) dt.call(i, c) && c != "constructor" && a.push(c);
                        return a
                    }

                    function iC(i) {
                        if (!$t(i)) return BC(i);
                        var a = Ca(i),
                            c = [];
                        for (var d in i) d == "constructor" && (a || !dt.call(i, d)) || c.push(d);
                        return c
                    }

                    function Au(i, a) {
                        return i < a
                    }

                    function Vg(i, a) {
                        var c = -1,
                            d = br(i) ? K(i.length) : [];
                        return Yn(i, function(v, b, I) {
                            d[++c] = a(v, b, I)
                        }), d
                    }

                    function Kg(i) {
                        var a = Hu(i);
                        return a.length == 1 && a[0][2] ? Cm(a[0][0], a[0][1]) : function(c) {
                            return c === i || $u(c, i, a)
                        }
                    }

                    function Yg(i, a) {
                        return Ku(i) && wm(a) ? Cm(mn(i), a) : function(c) {
                            var d = rf(c, i);
                            return d === r && d === a ? nf(c, i) : Sa(a, d, P | M)
                        }
                    }

                    function Ho(i, a, c, d, v) {
                        i !== a && Su(a, function(b, I) {
                            if (v || (v = new tn), $t(b)) sC(i, a, I, c, Ho, d, v);
                            else {
                                var R = d ? d(qu(i, I), b, I + "", i, a, v) : r;
                                R === r && (R = b), Eu(i, I, R)
                            }
                        }, Er)
                    }

                    function sC(i, a, c, d, v, b, I) {
                        var R = qu(i, c),
                            x = qu(a, c),
                            ee = I.get(x);
                        if (ee) {
                            Eu(i, c, ee);
                            return
                        }
                        var te = b ? b(R, x, c + "", i, a, I) : r,
                            ae = te === r;
                        if (ae) {
                            var me = je(x),
                                we = !me && Jn(x),
                                Le = !me && !we && Ts(x);
                            te = x, me || we || Le ? je(R) ? te = R : Nt(R) ? te = _r(R) : we ? (ae = !1, te = sm(x, !0)) : Le ? (ae = !1, te = am(x, !0)) : te = [] : Ia(x) || Pi(x) ? (te = R, Pi(R) ? te = rv(R) : (!$t(R) || Ln(R)) && (te = Om(x))) : ae = !1
                        }
                        ae && (I.set(x, te), v(te, x, d, b, I), I.delete(x)), Eu(i, c, te)
                    }

                    function qg(i, a) {
                        var c = i.length;
                        if (!!c) return a += a < 0 ? c : 0, Nn(a, c) ? i[a] : r
                    }

                    function zg(i, a, c) {
                        a.length ? a = wt(a, function(b) {
                            return je(b) ? function(I) {
                                return Ri(I, b.length === 1 ? b[0] : b)
                            } : b
                        }) : a = [Tr];
                        var d = -1;
                        a = wt(a, Ar(Ne()));
                        var v = Vg(i, function(b, I, R) {
                            var x = wt(a, function(ee) {
                                return ee(b)
                            });
                            return {
                                criteria: x,
                                index: ++d,
                                value: b
                            }
                        });
                        return LO(v, function(b, I) {
                            return yC(b, I, c)
                        })
                    }

                    function aC(i, a) {
                        return Xg(i, a, function(c, d) {
                            return nf(i, d)
                        })
                    }

                    function Xg(i, a, c) {
                        for (var d = -1, v = a.length, b = {}; ++d < v;) {
                            var I = a[d],
                                R = Ri(i, I);
                            c(R, I) && Oa(b, zn(I, i), R)
                        }
                        return b
                    }

                    function oC(i) {
                        return function(a) {
                            return Ri(a, i)
                        }
                    }

                    function Ru(i, a, c, d) {
                        var v = d ? NO : fs,
                            b = -1,
                            I = a.length,
                            R = i;
                        for (i === a && (a = _r(a)), c && (R = wt(i, Ar(c))); ++b < I;)
                            for (var x = 0, ee = a[b], te = c ? c(ee) : ee;
                                (x = v(R, te, x, d)) > -1;) R !== i && ko.call(R, x, 1), ko.call(i, x, 1);
                        return i
                    }

                    function Jg(i, a) {
                        for (var c = i ? a.length : 0, d = c - 1; c--;) {
                            var v = a[c];
                            if (c == d || v !== b) {
                                var b = v;
                                Nn(v) ? ko.call(i, v, 1) : ku(i, v)
                            }
                        }
                        return i
                    }

                    function Nu(i, a) {
                        return i + Mo(Ng() * (a - i + 1))
                    }

                    function lC(i, a, c, d) {
                        for (var v = -1, b = Bt(Do((a - i) / (c || 1)), 0), I = K(b); b--;) I[d ? b : ++v] = i, i += c;
                        return I
                    }

                    function Lu(i, a) {
                        var c = "";
                        if (!i || a < 1 || a > ve) return c;
                        do a % 2 && (c += i), a = Mo(a / 2), a && (i += i); while (a);
                        return c
                    }

                    function Ke(i, a) {
                        return zu($m(i, a, Tr), i + "")
                    }

                    function cC(i) {
                        return kg(Ss(i))
                    }

                    function uC(i, a) {
                        var c = Ss(i);
                        return el(c, Ai(a, 0, c.length))
                    }

                    function Oa(i, a, c, d) {
                        if (!$t(i)) return i;
                        a = zn(a, i);
                        for (var v = -1, b = a.length, I = b - 1, R = i; R != null && ++v < b;) {
                            var x = mn(a[v]),
                                ee = c;
                            if (x === "__proto__" || x === "constructor" || x === "prototype") return i;
                            if (v != I) {
                                var te = R[x];
                                ee = d ? d(te, x, R) : r, ee === r && (ee = $t(te) ? te : Nn(a[v + 1]) ? [] : {})
                            }
                            ba(R, x, ee), R = R[x]
                        }
                        return i
                    }
                    var Zg = Fo ? function(i, a) {
                            return Fo.set(i, a), i
                        } : Tr,
                        fC = xo ? function(i, a) {
                            return xo(i, "toString", {
                                configurable: !0,
                                enumerable: !1,
                                value: af(a),
                                writable: !0
                            })
                        } : Tr;

                    function dC(i) {
                        return el(Ss(i))
                    }

                    function Hr(i, a, c) {
                        var d = -1,
                            v = i.length;
                        a < 0 && (a = -a > v ? 0 : v + a), c = c > v ? v : c, c < 0 && (c += v), v = a > c ? 0 : c - a >>> 0, a >>>= 0;
                        for (var b = K(v); ++d < v;) b[d] = i[d + a];
                        return b
                    }

                    function hC(i, a) {
                        var c;
                        return Yn(i, function(d, v, b) {
                            return c = a(d, v, b), !c
                        }), !!c
                    }

                    function Vo(i, a, c) {
                        var d = 0,
                            v = i == null ? d : i.length;
                        if (typeof a == "number" && a === a && v <= It) {
                            for (; d < v;) {
                                var b = d + v >>> 1,
                                    I = i[b];
                                I !== null && !Nr(I) && (c ? I <= a : I < a) ? d = b + 1 : v = b
                            }
                            return v
                        }
                        return Pu(i, a, Tr, c)
                    }

                    function Pu(i, a, c, d) {
                        var v = 0,
                            b = i == null ? 0 : i.length;
                        if (b === 0) return 0;
                        a = c(a);
                        for (var I = a !== a, R = a === null, x = Nr(a), ee = a === r; v < b;) {
                            var te = Mo((v + b) / 2),
                                ae = c(i[te]),
                                me = ae !== r,
                                we = ae === null,
                                Le = ae === ae,
                                Ve = Nr(ae);
                            if (I) var Pe = d || Le;
                            else ee ? Pe = Le && (d || me) : R ? Pe = Le && me && (d || !we) : x ? Pe = Le && me && !we && (d || !Ve) : we || Ve ? Pe = !1 : Pe = d ? ae <= a : ae < a;
                            Pe ? v = te + 1 : b = te
                        }
                        return ir(b, tt)
                    }

                    function Qg(i, a) {
                        for (var c = -1, d = i.length, v = 0, b = []; ++c < d;) {
                            var I = i[c],
                                R = a ? a(I) : I;
                            if (!c || !rn(R, x)) {
                                var x = R;
                                b[v++] = I === 0 ? 0 : I
                            }
                        }
                        return b
                    }

                    function em(i) {
                        return typeof i == "number" ? i : Nr(i) ? Fe : +i
                    }

                    function Rr(i) {
                        if (typeof i == "string") return i;
                        if (je(i)) return wt(i, Rr) + "";
                        if (Nr(i)) return Lg ? Lg.call(i) : "";
                        var a = i + "";
                        return a == "0" && 1 / i == -be ? "-0" : a
                    }

                    function qn(i, a, c) {
                        var d = -1,
                            v = Oo,
                            b = i.length,
                            I = !0,
                            R = [],
                            x = R;
                        if (c) I = !1, v = lu;
                        else if (b >= s) {
                            var ee = a ? null : OC(i);
                            if (ee) return Co(ee);
                            I = !1, v = pa, x = new Ii
                        } else x = a ? [] : R;
                        e: for (; ++d < b;) {
                            var te = i[d],
                                ae = a ? a(te) : te;
                            if (te = c || te !== 0 ? te : 0, I && ae === ae) {
                                for (var me = x.length; me--;)
                                    if (x[me] === ae) continue e;
                                a && x.push(ae), R.push(te)
                            } else v(x, ae, c) || (x !== R && x.push(ae), R.push(te))
                        }
                        return R
                    }

                    function ku(i, a) {
                        return a = zn(a, i), i = Im(i, a), i == null || delete i[mn(Vr(a))]
                    }

                    function tm(i, a, c, d) {
                        return Oa(i, a, c(Ri(i, a)), d)
                    }

                    function Ko(i, a, c, d) {
                        for (var v = i.length, b = d ? v : -1;
                            (d ? b-- : ++b < v) && a(i[b], b, i););
                        return c ? Hr(i, d ? 0 : b, d ? b + 1 : v) : Hr(i, d ? b + 1 : 0, d ? v : b)
                    }

                    function rm(i, a) {
                        var c = i;
                        return c instanceof qe && (c = c.value()), cu(a, function(d, v) {
                            return v.func.apply(v.thisArg, Hn([d], v.args))
                        }, c)
                    }

                    function xu(i, a, c) {
                        var d = i.length;
                        if (d < 2) return d ? qn(i[0]) : [];
                        for (var v = -1, b = K(d); ++v < d;)
                            for (var I = i[v], R = -1; ++R < d;) R != v && (b[v] = Ea(b[v] || I, i[R], a, c));
                        return qn(Jt(b, 1), a, c)
                    }

                    function nm(i, a, c) {
                        for (var d = -1, v = i.length, b = a.length, I = {}; ++d < v;) {
                            var R = d < b ? a[d] : r;
                            c(I, i[d], R)
                        }
                        return I
                    }

                    function Du(i) {
                        return Nt(i) ? i : []
                    }

                    function Mu(i) {
                        return typeof i == "function" ? i : Tr
                    }

                    function zn(i, a) {
                        return je(i) ? i : Ku(i, a) ? [i] : Lm(ct(i))
                    }
                    var pC = Ke;

                    function Xn(i, a, c) {
                        var d = i.length;
                        return c = c === r ? d : c, !a && c >= d ? i : Hr(i, a, c)
                    }
                    var im = tw || function(i) {
                        return Xt.clearTimeout(i)
                    };

                    function sm(i, a) {
                        if (a) return i.slice();
                        var c = i.length,
                            d = Cg ? Cg(c) : new i.constructor(c);
                        return i.copy(d), d
                    }

                    function Fu(i) {
                        var a = new i.constructor(i.byteLength);
                        return new Lo(a).set(new Lo(i)), a
                    }

                    function gC(i, a) {
                        var c = a ? Fu(i.buffer) : i.buffer;
                        return new i.constructor(c, i.byteOffset, i.byteLength)
                    }

                    function mC(i) {
                        var a = new i.constructor(i.source, Gp.exec(i));
                        return a.lastIndex = i.lastIndex, a
                    }

                    function vC(i) {
                        return _a ? pt(_a.call(i)) : {}
                    }

                    function am(i, a) {
                        var c = a ? Fu(i.buffer) : i.buffer;
                        return new i.constructor(c, i.byteOffset, i.length)
                    }

                    function om(i, a) {
                        if (i !== a) {
                            var c = i !== r,
                                d = i === null,
                                v = i === i,
                                b = Nr(i),
                                I = a !== r,
                                R = a === null,
                                x = a === a,
                                ee = Nr(a);
                            if (!R && !ee && !b && i > a || b && I && x && !R && !ee || d && I && x || !c && x || !v) return 1;
                            if (!d && !b && !ee && i < a || ee && c && v && !d && !b || R && c && v || !I && v || !x) return -1
                        }
                        return 0
                    }

                    function yC(i, a, c) {
                        for (var d = -1, v = i.criteria, b = a.criteria, I = v.length, R = c.length; ++d < I;) {
                            var x = om(v[d], b[d]);
                            if (x) {
                                if (d >= R) return x;
                                var ee = c[d];
                                return x * (ee == "desc" ? -1 : 1)
                            }
                        }
                        return i.index - a.index
                    }

                    function lm(i, a, c, d) {
                        for (var v = -1, b = i.length, I = c.length, R = -1, x = a.length, ee = Bt(b - I, 0), te = K(x + ee), ae = !d; ++R < x;) te[R] = a[R];
                        for (; ++v < I;)(ae || v < b) && (te[c[v]] = i[v]);
                        for (; ee--;) te[R++] = i[v++];
                        return te
                    }

                    function cm(i, a, c, d) {
                        for (var v = -1, b = i.length, I = -1, R = c.length, x = -1, ee = a.length, te = Bt(b - R, 0), ae = K(te + ee), me = !d; ++v < te;) ae[v] = i[v];
                        for (var we = v; ++x < ee;) ae[we + x] = a[x];
                        for (; ++I < R;)(me || v < b) && (ae[we + c[I]] = i[v++]);
                        return ae
                    }

                    function _r(i, a) {
                        var c = -1,
                            d = i.length;
                        for (a || (a = K(d)); ++c < d;) a[c] = i[c];
                        return a
                    }

                    function gn(i, a, c, d) {
                        var v = !c;
                        c || (c = {});
                        for (var b = -1, I = a.length; ++b < I;) {
                            var R = a[b],
                                x = d ? d(c[R], i[R], R, c, i) : r;
                            x === r && (x = i[R]), v ? In(c, R, x) : ba(c, R, x)
                        }
                        return c
                    }

                    function _C(i, a) {
                        return gn(i, Vu(i), a)
                    }

                    function bC(i, a) {
                        return gn(i, Tm(i), a)
                    }

                    function Yo(i, a) {
                        return function(c, d) {
                            var v = je(c) ? wO : Gw,
                                b = a ? a() : {};
                            return v(c, i, Ne(d, 2), b)
                        }
                    }

                    function _s(i) {
                        return Ke(function(a, c) {
                            var d = -1,
                                v = c.length,
                                b = v > 1 ? c[v - 1] : r,
                                I = v > 2 ? c[2] : r;
                            for (b = i.length > 3 && typeof b == "function" ? (v--, b) : r, I && hr(c[0], c[1], I) && (b = v < 3 ? r : b, v = 1), a = pt(a); ++d < v;) {
                                var R = c[d];
                                R && i(a, R, d, b)
                            }
                            return a
                        })
                    }

                    function um(i, a) {
                        return function(c, d) {
                            if (c == null) return c;
                            if (!br(c)) return i(c, d);
                            for (var v = c.length, b = a ? v : -1, I = pt(c);
                                (a ? b-- : ++b < v) && d(I[b], b, I) !== !1;);
                            return c
                        }
                    }

                    function fm(i) {
                        return function(a, c, d) {
                            for (var v = -1, b = pt(a), I = d(a), R = I.length; R--;) {
                                var x = I[i ? R : ++v];
                                if (c(b[x], x, b) === !1) break
                            }
                            return a
                        }
                    }

                    function EC(i, a, c) {
                        var d = a & B,
                            v = wa(i);

                        function b() {
                            var I = this && this !== Xt && this instanceof b ? v : i;
                            return I.apply(d ? c : this, arguments)
                        }
                        return b
                    }

                    function dm(i) {
                        return function(a) {
                            a = ct(a);
                            var c = ds(a) ? en(a) : r,
                                d = c ? c[0] : a.charAt(0),
                                v = c ? Xn(c, 1).join("") : a.slice(1);
                            return d[i]() + v
                        }
                    }

                    function bs(i) {
                        return function(a) {
                            return cu(uv(cv(a).replace(fO, "")), i, "")
                        }
                    }

                    function wa(i) {
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
                            var c = ys(i.prototype),
                                d = i.apply(c, a);
                            return $t(d) ? d : c
                        }
                    }

                    function TC(i, a, c) {
                        var d = wa(i);

                        function v() {
                            for (var b = arguments.length, I = K(b), R = b, x = Es(v); R--;) I[R] = arguments[R];
                            var ee = b < 3 && I[0] !== x && I[b - 1] !== x ? [] : Vn(I, x);
                            if (b -= ee.length, b < c) return vm(i, a, qo, v.placeholder, r, I, ee, r, r, c - b);
                            var te = this && this !== Xt && this instanceof v ? d : i;
                            return Ir(te, this, I)
                        }
                        return v
                    }

                    function hm(i) {
                        return function(a, c, d) {
                            var v = pt(a);
                            if (!br(a)) {
                                var b = Ne(c, 3);
                                a = Kt(a), c = function(R) {
                                    return b(v[R], R, v)
                                }
                            }
                            var I = i(a, c, d);
                            return I > -1 ? v[b ? a[I] : I] : r
                        }
                    }

                    function pm(i) {
                        return Rn(function(a) {
                            var c = a.length,
                                d = c,
                                v = Gr.prototype.thru;
                            for (i && a.reverse(); d--;) {
                                var b = a[d];
                                if (typeof b != "function") throw new jr(l);
                                if (v && !I && Zo(b) == "wrapper") var I = new Gr([], !0)
                            }
                            for (d = I ? d : c; ++d < c;) {
                                b = a[d];
                                var R = Zo(b),
                                    x = R == "wrapper" ? Wu(b) : r;
                                x && Yu(x[0]) && x[1] == (oe | q | j | le) && !x[4].length && x[9] == 1 ? I = I[Zo(x[0])].apply(I, x[3]) : I = b.length == 1 && Yu(b) ? I[R]() : I.thru(b)
                            }
                            return function() {
                                var ee = arguments,
                                    te = ee[0];
                                if (I && ee.length == 1 && je(te)) return I.plant(te).value();
                                for (var ae = 0, me = c ? a[ae].apply(this, ee) : te; ++ae < c;) me = a[ae].call(this, me);
                                return me
                            }
                        })
                    }

                    function qo(i, a, c, d, v, b, I, R, x, ee) {
                        var te = a & oe,
                            ae = a & B,
                            me = a & $,
                            we = a & (q | G),
                            Le = a & ue,
                            Ve = me ? r : wa(i);

                        function Pe() {
                            for (var Ye = arguments.length, Xe = K(Ye), Lr = Ye; Lr--;) Xe[Lr] = arguments[Lr];
                            if (we) var pr = Es(Pe),
                                Pr = kO(Xe, pr);
                            if (d && (Xe = lm(Xe, d, v, we)), b && (Xe = cm(Xe, b, I, we)), Ye -= Pr, we && Ye < ee) {
                                var Lt = Vn(Xe, pr);
                                return vm(i, a, qo, Pe.placeholder, c, Xe, Lt, R, x, ee - Ye)
                            }
                            var nn = ae ? c : this,
                                kn = me ? nn[i] : i;
                            return Ye = Xe.length, R ? Xe = GC(Xe, R) : Le && Ye > 1 && Xe.reverse(), te && x < Ye && (Xe.length = x), this && this !== Xt && this instanceof Pe && (kn = Ve || wa(kn)), kn.apply(nn, Xe)
                        }
                        return Pe
                    }

                    function gm(i, a) {
                        return function(c, d) {
                            return Xw(c, i, a(d), {})
                        }
                    }

                    function zo(i, a) {
                        return function(c, d) {
                            var v;
                            if (c === r && d === r) return a;
                            if (c !== r && (v = c), d !== r) {
                                if (v === r) return d;
                                typeof c == "string" || typeof d == "string" ? (c = Rr(c), d = Rr(d)) : (c = em(c), d = em(d)), v = i(c, d)
                            }
                            return v
                        }
                    }

                    function Uu(i) {
                        return Rn(function(a) {
                            return a = wt(a, Ar(Ne())), Ke(function(c) {
                                var d = this;
                                return i(a, function(v) {
                                    return Ir(v, d, c)
                                })
                            })
                        })
                    }

                    function Xo(i, a) {
                        a = a === r ? " " : Rr(a);
                        var c = a.length;
                        if (c < 2) return c ? Lu(a, i) : a;
                        var d = Lu(a, Do(i / hs(a)));
                        return ds(a) ? Xn(en(d), 0, i).join("") : d.slice(0, i)
                    }

                    function SC(i, a, c, d) {
                        var v = a & B,
                            b = wa(i);

                        function I() {
                            for (var R = -1, x = arguments.length, ee = -1, te = d.length, ae = K(te + x), me = this && this !== Xt && this instanceof I ? b : i; ++ee < te;) ae[ee] = d[ee];
                            for (; x--;) ae[ee++] = arguments[++R];
                            return Ir(me, v ? c : this, ae)
                        }
                        return I
                    }

                    function mm(i) {
                        return function(a, c, d) {
                            return d && typeof d != "number" && hr(a, c, d) && (c = d = r), a = Pn(a), c === r ? (c = a, a = 0) : c = Pn(c), d = d === r ? a < c ? 1 : -1 : Pn(d), lC(a, c, d, i)
                        }
                    }

                    function Jo(i) {
                        return function(a, c) {
                            return typeof a == "string" && typeof c == "string" || (a = Kr(a), c = Kr(c)), i(a, c)
                        }
                    }

                    function vm(i, a, c, d, v, b, I, R, x, ee) {
                        var te = a & q,
                            ae = te ? I : r,
                            me = te ? r : I,
                            we = te ? b : r,
                            Le = te ? r : b;
                        a |= te ? j : J, a &= ~(te ? J : j), a & V || (a &= ~(B | $));
                        var Ve = [i, a, v, we, ae, Le, me, R, x, ee],
                            Pe = c.apply(r, Ve);
                        return Yu(i) && Am(Pe, Ve), Pe.placeholder = d, Rm(Pe, i, a)
                    }

                    function Bu(i) {
                        var a = Ut[i];
                        return function(c, d) {
                            if (c = Kr(c), d = d == null ? 0 : ir(We(d), 292), d && Rg(c)) {
                                var v = (ct(c) + "e").split("e"),
                                    b = a(v[0] + "e" + (+v[1] + d));
                                return v = (ct(b) + "e").split("e"), +(v[0] + "e" + (+v[1] - d))
                            }
                            return a(c)
                        }
                    }
                    var OC = ms && 1 / Co(new ms([, -0]))[1] == be ? function(i) {
                        return new ms(i)
                    } : cf;

                    function ym(i) {
                        return function(a) {
                            var c = sr(a);
                            return c == p ? mu(a) : c == re ? jO(a) : PO(a, i(a))
                        }
                    }

                    function An(i, a, c, d, v, b, I, R) {
                        var x = a & $;
                        if (!x && typeof i != "function") throw new jr(l);
                        var ee = d ? d.length : 0;
                        if (ee || (a &= ~(j | J), d = v = r), I = I === r ? I : Bt(We(I), 0), R = R === r ? R : We(R), ee -= v ? v.length : 0, a & J) {
                            var te = d,
                                ae = v;
                            d = v = r
                        }
                        var me = x ? r : Wu(i),
                            we = [i, a, c, d, v, te, ae, b, I, R];
                        if (me && UC(we, me), i = we[0], a = we[1], c = we[2], d = we[3], v = we[4], R = we[9] = we[9] === r ? x ? 0 : i.length : Bt(we[9] - ee, 0), !R && a & (q | G) && (a &= ~(q | G)), !a || a == B) var Le = EC(i, a, c);
                        else a == q || a == G ? Le = TC(i, a, R) : (a == j || a == (B | j)) && !v.length ? Le = SC(i, a, c, d) : Le = qo.apply(r, we);
                        var Ve = me ? Zg : Am;
                        return Rm(Ve(Le, we), i, a)
                    }

                    function _m(i, a, c, d) {
                        return i === r || rn(i, gs[c]) && !dt.call(d, c) ? a : i
                    }

                    function bm(i, a, c, d, v, b) {
                        return $t(i) && $t(a) && (b.set(a, i), Ho(i, a, r, bm, b), b.delete(a)), i
                    }

                    function wC(i) {
                        return Ia(i) ? r : i
                    }

                    function Em(i, a, c, d, v, b) {
                        var I = c & P,
                            R = i.length,
                            x = a.length;
                        if (R != x && !(I && x > R)) return !1;
                        var ee = b.get(i),
                            te = b.get(a);
                        if (ee && te) return ee == a && te == i;
                        var ae = -1,
                            me = !0,
                            we = c & M ? new Ii : r;
                        for (b.set(i, a), b.set(a, i); ++ae < R;) {
                            var Le = i[ae],
                                Ve = a[ae];
                            if (d) var Pe = I ? d(Ve, Le, ae, a, i, b) : d(Le, Ve, ae, i, a, b);
                            if (Pe !== r) {
                                if (Pe) continue;
                                me = !1;
                                break
                            }
                            if (we) {
                                if (!uu(a, function(Ye, Xe) {
                                        if (!pa(we, Xe) && (Le === Ye || v(Le, Ye, c, d, b))) return we.push(Xe)
                                    })) {
                                    me = !1;
                                    break
                                }
                            } else if (!(Le === Ve || v(Le, Ve, c, d, b))) {
                                me = !1;
                                break
                            }
                        }
                        return b.delete(i), b.delete(a), me
                    }

                    function CC(i, a, c, d, v, b, I) {
                        switch (c) {
                            case w:
                                if (i.byteLength != a.byteLength || i.byteOffset != a.byteOffset) return !1;
                                i = i.buffer, a = a.buffer;
                            case xe:
                                return !(i.byteLength != a.byteLength || !b(new Lo(i), new Lo(a)));
                            case Ot:
                            case lt:
                            case O:
                                return rn(+i, +a);
                            case Vt:
                                return i.name == a.name && i.message == a.message;
                            case se:
                            case A:
                                return i == a + "";
                            case p:
                                var R = mu;
                            case re:
                                var x = d & P;
                                if (R || (R = Co), i.size != a.size && !x) return !1;
                                var ee = I.get(i);
                                if (ee) return ee == a;
                                d |= M, I.set(i, a);
                                var te = Em(R(i), R(a), d, v, b, I);
                                return I.delete(i), te;
                            case W:
                                if (_a) return _a.call(i) == _a.call(a)
                        }
                        return !1
                    }

                    function $C(i, a, c, d, v, b) {
                        var I = c & P,
                            R = ju(i),
                            x = R.length,
                            ee = ju(a),
                            te = ee.length;
                        if (x != te && !I) return !1;
                        for (var ae = x; ae--;) {
                            var me = R[ae];
                            if (!(I ? me in a : dt.call(a, me))) return !1
                        }
                        var we = b.get(i),
                            Le = b.get(a);
                        if (we && Le) return we == a && Le == i;
                        var Ve = !0;
                        b.set(i, a), b.set(a, i);
                        for (var Pe = I; ++ae < x;) {
                            me = R[ae];
                            var Ye = i[me],
                                Xe = a[me];
                            if (d) var Lr = I ? d(Xe, Ye, me, a, i, b) : d(Ye, Xe, me, i, a, b);
                            if (!(Lr === r ? Ye === Xe || v(Ye, Xe, c, d, b) : Lr)) {
                                Ve = !1;
                                break
                            }
                            Pe || (Pe = me == "constructor")
                        }
                        if (Ve && !Pe) {
                            var pr = i.constructor,
                                Pr = a.constructor;
                            pr != Pr && "constructor" in i && "constructor" in a && !(typeof pr == "function" && pr instanceof pr && typeof Pr == "function" && Pr instanceof Pr) && (Ve = !1)
                        }
                        return b.delete(i), b.delete(a), Ve
                    }

                    function Rn(i) {
                        return zu($m(i, r, Dm), i + "")
                    }

                    function ju(i) {
                        return jg(i, Kt, Vu)
                    }

                    function Gu(i) {
                        return jg(i, Er, Tm)
                    }
                    var Wu = Fo ? function(i) {
                        return Fo.get(i)
                    } : cf;

                    function Zo(i) {
                        for (var a = i.name + "", c = vs[a], d = dt.call(vs, a) ? c.length : 0; d--;) {
                            var v = c[d],
                                b = v.func;
                            if (b == null || b == i) return v.name
                        }
                        return a
                    }

                    function Es(i) {
                        var a = dt.call(_, "placeholder") ? _ : i;
                        return a.placeholder
                    }

                    function Ne() {
                        var i = _.iteratee || of;
                        return i = i === of ? Hg : i, arguments.length ? i(arguments[0], arguments[1]) : i
                    }

                    function Qo(i, a) {
                        var c = i.__data__;
                        return xC(a) ? c[typeof a == "string" ? "string" : "hash"] : c.map
                    }

                    function Hu(i) {
                        for (var a = Kt(i), c = a.length; c--;) {
                            var d = a[c],
                                v = i[d];
                            a[c] = [d, v, wm(v)]
                        }
                        return a
                    }

                    function Ni(i, a) {
                        var c = FO(i, a);
                        return Wg(c) ? c : r
                    }

                    function IC(i) {
                        var a = dt.call(i, Ci),
                            c = i[Ci];
                        try {
                            i[Ci] = r;
                            var d = !0
                        } catch {}
                        var v = Ro.call(i);
                        return d && (a ? i[Ci] = c : delete i[Ci]), v
                    }
                    var Vu = yu ? function(i) {
                            return i == null ? [] : (i = pt(i), Wn(yu(i), function(a) {
                                return Ig.call(i, a)
                            }))
                        } : uf,
                        Tm = yu ? function(i) {
                            for (var a = []; i;) Hn(a, Vu(i)), i = Po(i);
                            return a
                        } : uf,
                        sr = dr;
                    (_u && sr(new _u(new ArrayBuffer(1))) != w || ma && sr(new ma) != p || bu && sr(bu.resolve()) != Y || ms && sr(new ms) != re || va && sr(new va) != pe) && (sr = function(i) {
                        var a = dr(i),
                            c = a == U ? i.constructor : r,
                            d = c ? Li(c) : "";
                        if (d) switch (d) {
                            case uw:
                                return w;
                            case fw:
                                return p;
                            case dw:
                                return Y;
                            case hw:
                                return re;
                            case pw:
                                return pe
                        }
                        return a
                    });

                    function AC(i, a, c) {
                        for (var d = -1, v = c.length; ++d < v;) {
                            var b = c[d],
                                I = b.size;
                            switch (b.type) {
                                case "drop":
                                    i += I;
                                    break;
                                case "dropRight":
                                    a -= I;
                                    break;
                                case "take":
                                    a = ir(a, i + I);
                                    break;
                                case "takeRight":
                                    i = Bt(i, a - I);
                                    break
                            }
                        }
                        return {
                            start: i,
                            end: a
                        }
                    }

                    function RC(i) {
                        var a = i.match(DS);
                        return a ? a[1].split(MS) : []
                    }

                    function Sm(i, a, c) {
                        a = zn(a, i);
                        for (var d = -1, v = a.length, b = !1; ++d < v;) {
                            var I = mn(a[d]);
                            if (!(b = i != null && c(i, I))) break;
                            i = i[I]
                        }
                        return b || ++d != v ? b : (v = i == null ? 0 : i.length, !!v && al(v) && Nn(I, v) && (je(i) || Pi(i)))
                    }

                    function NC(i) {
                        var a = i.length,
                            c = new i.constructor(a);
                        return a && typeof i[0] == "string" && dt.call(i, "index") && (c.index = i.index, c.input = i.input), c
                    }

                    function Om(i) {
                        return typeof i.constructor == "function" && !Ca(i) ? ys(Po(i)) : {}
                    }

                    function LC(i, a, c) {
                        var d = i.constructor;
                        switch (a) {
                            case xe:
                                return Fu(i);
                            case Ot:
                            case lt:
                                return new d(+i);
                            case w:
                                return gC(i, c);
                            case T:
                            case N:
                            case S:
                            case L:
                            case Q:
                            case ne:
                            case _e:
                            case Te:
                            case ft:
                                return am(i, c);
                            case p:
                                return new d;
                            case O:
                            case A:
                                return new d(i);
                            case se:
                                return mC(i);
                            case re:
                                return new d;
                            case W:
                                return vC(i)
                        }
                    }

                    function PC(i, a) {
                        var c = a.length;
                        if (!c) return i;
                        var d = c - 1;
                        return a[d] = (c > 1 ? "& " : "") + a[d], a = a.join(c > 2 ? ", " : " "), i.replace(xS, `{
/* [wrapped with ` + a + `] */
`)
                    }

                    function kC(i) {
                        return je(i) || Pi(i) || !!(Ag && i && i[Ag])
                    }

                    function Nn(i, a) {
                        var c = typeof i;
                        return a = a == null ? ve : a, !!a && (c == "number" || c != "symbol" && KS.test(i)) && i > -1 && i % 1 == 0 && i < a
                    }

                    function hr(i, a, c) {
                        if (!$t(c)) return !1;
                        var d = typeof a;
                        return (d == "number" ? br(c) && Nn(a, c.length) : d == "string" && a in c) ? rn(c[a], i) : !1
                    }

                    function Ku(i, a) {
                        if (je(i)) return !1;
                        var c = typeof i;
                        return c == "number" || c == "symbol" || c == "boolean" || i == null || Nr(i) ? !0 : NS.test(i) || !RS.test(i) || a != null && i in pt(a)
                    }

                    function xC(i) {
                        var a = typeof i;
                        return a == "string" || a == "number" || a == "symbol" || a == "boolean" ? i !== "__proto__" : i === null
                    }

                    function Yu(i) {
                        var a = Zo(i),
                            c = _[a];
                        if (typeof c != "function" || !(a in qe.prototype)) return !1;
                        if (i === c) return !0;
                        var d = Wu(c);
                        return !!d && i === d[0]
                    }

                    function DC(i) {
                        return !!wg && wg in i
                    }
                    var MC = Io ? Ln : ff;

                    function Ca(i) {
                        var a = i && i.constructor,
                            c = typeof a == "function" && a.prototype || gs;
                        return i === c
                    }

                    function wm(i) {
                        return i === i && !$t(i)
                    }

                    function Cm(i, a) {
                        return function(c) {
                            return c == null ? !1 : c[i] === a && (a !== r || i in pt(c))
                        }
                    }

                    function FC(i) {
                        var a = il(i, function(d) {
                                return c.size === h && c.clear(), d
                            }),
                            c = a.cache;
                        return a
                    }

                    function UC(i, a) {
                        var c = i[1],
                            d = a[1],
                            v = c | d,
                            b = v < (B | $ | oe),
                            I = d == oe && c == q || d == oe && c == le && i[7].length <= a[8] || d == (oe | le) && a[7].length <= a[8] && c == q;
                        if (!(b || I)) return i;
                        d & B && (i[2] = a[2], v |= c & B ? 0 : V);
                        var R = a[3];
                        if (R) {
                            var x = i[3];
                            i[3] = x ? lm(x, R, a[4]) : R, i[4] = x ? Vn(i[3], g) : a[4]
                        }
                        return R = a[5], R && (x = i[5], i[5] = x ? cm(x, R, a[6]) : R, i[6] = x ? Vn(i[5], g) : a[6]), R = a[7], R && (i[7] = R), d & oe && (i[8] = i[8] == null ? a[8] : ir(i[8], a[8])), i[9] == null && (i[9] = a[9]), i[0] = a[0], i[1] = v, i
                    }

                    function BC(i) {
                        var a = [];
                        if (i != null)
                            for (var c in pt(i)) a.push(c);
                        return a
                    }

                    function jC(i) {
                        return Ro.call(i)
                    }

                    function $m(i, a, c) {
                        return a = Bt(a === r ? i.length - 1 : a, 0),
                            function() {
                                for (var d = arguments, v = -1, b = Bt(d.length - a, 0), I = K(b); ++v < b;) I[v] = d[a + v];
                                v = -1;
                                for (var R = K(a + 1); ++v < a;) R[v] = d[v];
                                return R[a] = c(I), Ir(i, this, R)
                            }
                    }

                    function Im(i, a) {
                        return a.length < 2 ? i : Ri(i, Hr(a, 0, -1))
                    }

                    function GC(i, a) {
                        for (var c = i.length, d = ir(a.length, c), v = _r(i); d--;) {
                            var b = a[d];
                            i[d] = Nn(b, c) ? v[b] : r
                        }
                        return i
                    }

                    function qu(i, a) {
                        if (!(a === "constructor" && typeof i[a] == "function") && a != "__proto__") return i[a]
                    }
                    var Am = Nm(Zg),
                        $a = nw || function(i, a) {
                            return Xt.setTimeout(i, a)
                        },
                        zu = Nm(fC);

                    function Rm(i, a, c) {
                        var d = a + "";
                        return zu(i, PC(d, WC(RC(d), c)))
                    }

                    function Nm(i) {
                        var a = 0,
                            c = 0;
                        return function() {
                            var d = ow(),
                                v = Ce - (d - c);
                            if (c = d, v > 0) {
                                if (++a >= fe) return arguments[0]
                            } else a = 0;
                            return i.apply(r, arguments)
                        }
                    }

                    function el(i, a) {
                        var c = -1,
                            d = i.length,
                            v = d - 1;
                        for (a = a === r ? d : a; ++c < a;) {
                            var b = Nu(c, v),
                                I = i[b];
                            i[b] = i[c], i[c] = I
                        }
                        return i.length = a, i
                    }
                    var Lm = FC(function(i) {
                        var a = [];
                        return i.charCodeAt(0) === 46 && a.push(""), i.replace(LS, function(c, d, v, b) {
                            a.push(v ? b.replace(BS, "$1") : d || c)
                        }), a
                    });

                    function mn(i) {
                        if (typeof i == "string" || Nr(i)) return i;
                        var a = i + "";
                        return a == "0" && 1 / i == -be ? "-0" : a
                    }

                    function Li(i) {
                        if (i != null) {
                            try {
                                return Ao.call(i)
                            } catch {}
                            try {
                                return i + ""
                            } catch {}
                        }
                        return ""
                    }

                    function WC(i, a) {
                        return Br($r, function(c) {
                            var d = "_." + c[0];
                            a & c[1] && !Oo(i, d) && i.push(d)
                        }), i.sort()
                    }

                    function Pm(i) {
                        if (i instanceof qe) return i.clone();
                        var a = new Gr(i.__wrapped__, i.__chain__);
                        return a.__actions__ = _r(i.__actions__), a.__index__ = i.__index__, a.__values__ = i.__values__, a
                    }

                    function HC(i, a, c) {
                        (c ? hr(i, a, c) : a === r) ? a = 1: a = Bt(We(a), 0);
                        var d = i == null ? 0 : i.length;
                        if (!d || a < 1) return [];
                        for (var v = 0, b = 0, I = K(Do(d / a)); v < d;) I[b++] = Hr(i, v, v += a);
                        return I
                    }

                    function VC(i) {
                        for (var a = -1, c = i == null ? 0 : i.length, d = 0, v = []; ++a < c;) {
                            var b = i[a];
                            b && (v[d++] = b)
                        }
                        return v
                    }

                    function KC() {
                        var i = arguments.length;
                        if (!i) return [];
                        for (var a = K(i - 1), c = arguments[0], d = i; d--;) a[d - 1] = arguments[d];
                        return Hn(je(c) ? _r(c) : [c], Jt(a, 1))
                    }
                    var YC = Ke(function(i, a) {
                            return Nt(i) ? Ea(i, Jt(a, 1, Nt, !0)) : []
                        }),
                        qC = Ke(function(i, a) {
                            var c = Vr(a);
                            return Nt(c) && (c = r), Nt(i) ? Ea(i, Jt(a, 1, Nt, !0), Ne(c, 2)) : []
                        }),
                        zC = Ke(function(i, a) {
                            var c = Vr(a);
                            return Nt(c) && (c = r), Nt(i) ? Ea(i, Jt(a, 1, Nt, !0), r, c) : []
                        });

                    function XC(i, a, c) {
                        var d = i == null ? 0 : i.length;
                        return d ? (a = c || a === r ? 1 : We(a), Hr(i, a < 0 ? 0 : a, d)) : []
                    }

                    function JC(i, a, c) {
                        var d = i == null ? 0 : i.length;
                        return d ? (a = c || a === r ? 1 : We(a), a = d - a, Hr(i, 0, a < 0 ? 0 : a)) : []
                    }

                    function ZC(i, a) {
                        return i && i.length ? Ko(i, Ne(a, 3), !0, !0) : []
                    }

                    function QC(i, a) {
                        return i && i.length ? Ko(i, Ne(a, 3), !0) : []
                    }

                    function e$(i, a, c, d) {
                        var v = i == null ? 0 : i.length;
                        return v ? (c && typeof c != "number" && hr(i, a, c) && (c = 0, d = v), Kw(i, a, c, d)) : []
                    }

                    function km(i, a, c) {
                        var d = i == null ? 0 : i.length;
                        if (!d) return -1;
                        var v = c == null ? 0 : We(c);
                        return v < 0 && (v = Bt(d + v, 0)), wo(i, Ne(a, 3), v)
                    }

                    function xm(i, a, c) {
                        var d = i == null ? 0 : i.length;
                        if (!d) return -1;
                        var v = d - 1;
                        return c !== r && (v = We(c), v = c < 0 ? Bt(d + v, 0) : ir(v, d - 1)), wo(i, Ne(a, 3), v, !0)
                    }

                    function Dm(i) {
                        var a = i == null ? 0 : i.length;
                        return a ? Jt(i, 1) : []
                    }

                    function t$(i) {
                        var a = i == null ? 0 : i.length;
                        return a ? Jt(i, be) : []
                    }

                    function r$(i, a) {
                        var c = i == null ? 0 : i.length;
                        return c ? (a = a === r ? 1 : We(a), Jt(i, a)) : []
                    }

                    function n$(i) {
                        for (var a = -1, c = i == null ? 0 : i.length, d = {}; ++a < c;) {
                            var v = i[a];
                            d[v[0]] = v[1]
                        }
                        return d
                    }

                    function Mm(i) {
                        return i && i.length ? i[0] : r
                    }

                    function i$(i, a, c) {
                        var d = i == null ? 0 : i.length;
                        if (!d) return -1;
                        var v = c == null ? 0 : We(c);
                        return v < 0 && (v = Bt(d + v, 0)), fs(i, a, v)
                    }

                    function s$(i) {
                        var a = i == null ? 0 : i.length;
                        return a ? Hr(i, 0, -1) : []
                    }
                    var a$ = Ke(function(i) {
                            var a = wt(i, Du);
                            return a.length && a[0] === i[0] ? Cu(a) : []
                        }),
                        o$ = Ke(function(i) {
                            var a = Vr(i),
                                c = wt(i, Du);
                            return a === Vr(c) ? a = r : c.pop(), c.length && c[0] === i[0] ? Cu(c, Ne(a, 2)) : []
                        }),
                        l$ = Ke(function(i) {
                            var a = Vr(i),
                                c = wt(i, Du);
                            return a = typeof a == "function" ? a : r, a && c.pop(), c.length && c[0] === i[0] ? Cu(c, r, a) : []
                        });

                    function c$(i, a) {
                        return i == null ? "" : sw.call(i, a)
                    }

                    function Vr(i) {
                        var a = i == null ? 0 : i.length;
                        return a ? i[a - 1] : r
                    }

                    function u$(i, a, c) {
                        var d = i == null ? 0 : i.length;
                        if (!d) return -1;
                        var v = d;
                        return c !== r && (v = We(c), v = v < 0 ? Bt(d + v, 0) : ir(v, d - 1)), a === a ? WO(i, a, v) : wo(i, vg, v, !0)
                    }

                    function f$(i, a) {
                        return i && i.length ? qg(i, We(a)) : r
                    }
                    var d$ = Ke(Fm);

                    function Fm(i, a) {
                        return i && i.length && a && a.length ? Ru(i, a) : i
                    }

                    function h$(i, a, c) {
                        return i && i.length && a && a.length ? Ru(i, a, Ne(c, 2)) : i
                    }

                    function p$(i, a, c) {
                        return i && i.length && a && a.length ? Ru(i, a, r, c) : i
                    }
                    var g$ = Rn(function(i, a) {
                        var c = i == null ? 0 : i.length,
                            d = Tu(i, a);
                        return Jg(i, wt(a, function(v) {
                            return Nn(v, c) ? +v : v
                        }).sort(om)), d
                    });

                    function m$(i, a) {
                        var c = [];
                        if (!(i && i.length)) return c;
                        var d = -1,
                            v = [],
                            b = i.length;
                        for (a = Ne(a, 3); ++d < b;) {
                            var I = i[d];
                            a(I, d, i) && (c.push(I), v.push(d))
                        }
                        return Jg(i, v), c
                    }

                    function Xu(i) {
                        return i == null ? i : cw.call(i)
                    }

                    function v$(i, a, c) {
                        var d = i == null ? 0 : i.length;
                        return d ? (c && typeof c != "number" && hr(i, a, c) ? (a = 0, c = d) : (a = a == null ? 0 : We(a), c = c === r ? d : We(c)), Hr(i, a, c)) : []
                    }

                    function y$(i, a) {
                        return Vo(i, a)
                    }

                    function _$(i, a, c) {
                        return Pu(i, a, Ne(c, 2))
                    }

                    function b$(i, a) {
                        var c = i == null ? 0 : i.length;
                        if (c) {
                            var d = Vo(i, a);
                            if (d < c && rn(i[d], a)) return d
                        }
                        return -1
                    }

                    function E$(i, a) {
                        return Vo(i, a, !0)
                    }

                    function T$(i, a, c) {
                        return Pu(i, a, Ne(c, 2), !0)
                    }

                    function S$(i, a) {
                        var c = i == null ? 0 : i.length;
                        if (c) {
                            var d = Vo(i, a, !0) - 1;
                            if (rn(i[d], a)) return d
                        }
                        return -1
                    }

                    function O$(i) {
                        return i && i.length ? Qg(i) : []
                    }

                    function w$(i, a) {
                        return i && i.length ? Qg(i, Ne(a, 2)) : []
                    }

                    function C$(i) {
                        var a = i == null ? 0 : i.length;
                        return a ? Hr(i, 1, a) : []
                    }

                    function $$(i, a, c) {
                        return i && i.length ? (a = c || a === r ? 1 : We(a), Hr(i, 0, a < 0 ? 0 : a)) : []
                    }

                    function I$(i, a, c) {
                        var d = i == null ? 0 : i.length;
                        return d ? (a = c || a === r ? 1 : We(a), a = d - a, Hr(i, a < 0 ? 0 : a, d)) : []
                    }

                    function A$(i, a) {
                        return i && i.length ? Ko(i, Ne(a, 3), !1, !0) : []
                    }

                    function R$(i, a) {
                        return i && i.length ? Ko(i, Ne(a, 3)) : []
                    }
                    var N$ = Ke(function(i) {
                            return qn(Jt(i, 1, Nt, !0))
                        }),
                        L$ = Ke(function(i) {
                            var a = Vr(i);
                            return Nt(a) && (a = r), qn(Jt(i, 1, Nt, !0), Ne(a, 2))
                        }),
                        P$ = Ke(function(i) {
                            var a = Vr(i);
                            return a = typeof a == "function" ? a : r, qn(Jt(i, 1, Nt, !0), r, a)
                        });

                    function k$(i) {
                        return i && i.length ? qn(i) : []
                    }

                    function x$(i, a) {
                        return i && i.length ? qn(i, Ne(a, 2)) : []
                    }

                    function D$(i, a) {
                        return a = typeof a == "function" ? a : r, i && i.length ? qn(i, r, a) : []
                    }

                    function Ju(i) {
                        if (!(i && i.length)) return [];
                        var a = 0;
                        return i = Wn(i, function(c) {
                            if (Nt(c)) return a = Bt(c.length, a), !0
                        }), pu(a, function(c) {
                            return wt(i, fu(c))
                        })
                    }

                    function Um(i, a) {
                        if (!(i && i.length)) return [];
                        var c = Ju(i);
                        return a == null ? c : wt(c, function(d) {
                            return Ir(a, r, d)
                        })
                    }
                    var M$ = Ke(function(i, a) {
                            return Nt(i) ? Ea(i, a) : []
                        }),
                        F$ = Ke(function(i) {
                            return xu(Wn(i, Nt))
                        }),
                        U$ = Ke(function(i) {
                            var a = Vr(i);
                            return Nt(a) && (a = r), xu(Wn(i, Nt), Ne(a, 2))
                        }),
                        B$ = Ke(function(i) {
                            var a = Vr(i);
                            return a = typeof a == "function" ? a : r, xu(Wn(i, Nt), r, a)
                        }),
                        j$ = Ke(Ju);

                    function G$(i, a) {
                        return nm(i || [], a || [], ba)
                    }

                    function W$(i, a) {
                        return nm(i || [], a || [], Oa)
                    }
                    var H$ = Ke(function(i) {
                        var a = i.length,
                            c = a > 1 ? i[a - 1] : r;
                        return c = typeof c == "function" ? (i.pop(), c) : r, Um(i, c)
                    });

                    function Bm(i) {
                        var a = _(i);
                        return a.__chain__ = !0, a
                    }

                    function V$(i, a) {
                        return a(i), i
                    }

                    function tl(i, a) {
                        return a(i)
                    }
                    var K$ = Rn(function(i) {
                        var a = i.length,
                            c = a ? i[0] : 0,
                            d = this.__wrapped__,
                            v = function(b) {
                                return Tu(b, i)
                            };
                        return a > 1 || this.__actions__.length || !(d instanceof qe) || !Nn(c) ? this.thru(v) : (d = d.slice(c, +c + (a ? 1 : 0)), d.__actions__.push({
                            func: tl,
                            args: [v],
                            thisArg: r
                        }), new Gr(d, this.__chain__).thru(function(b) {
                            return a && !b.length && b.push(r), b
                        }))
                    });

                    function Y$() {
                        return Bm(this)
                    }

                    function q$() {
                        return new Gr(this.value(), this.__chain__)
                    }

                    function z$() {
                        this.__values__ === r && (this.__values__ = ev(this.value()));
                        var i = this.__index__ >= this.__values__.length,
                            a = i ? r : this.__values__[this.__index__++];
                        return {
                            done: i,
                            value: a
                        }
                    }

                    function X$() {
                        return this
                    }

                    function J$(i) {
                        for (var a, c = this; c instanceof Bo;) {
                            var d = Pm(c);
                            d.__index__ = 0, d.__values__ = r, a ? v.__wrapped__ = d : a = d;
                            var v = d;
                            c = c.__wrapped__
                        }
                        return v.__wrapped__ = i, a
                    }

                    function Z$() {
                        var i = this.__wrapped__;
                        if (i instanceof qe) {
                            var a = i;
                            return this.__actions__.length && (a = new qe(this)), a = a.reverse(), a.__actions__.push({
                                func: tl,
                                args: [Xu],
                                thisArg: r
                            }), new Gr(a, this.__chain__)
                        }
                        return this.thru(Xu)
                    }

                    function Q$() {
                        return rm(this.__wrapped__, this.__actions__)
                    }
                    var eI = Yo(function(i, a, c) {
                        dt.call(i, c) ? ++i[c] : In(i, c, 1)
                    });

                    function tI(i, a, c) {
                        var d = je(i) ? gg : Vw;
                        return c && hr(i, a, c) && (a = r), d(i, Ne(a, 3))
                    }

                    function rI(i, a) {
                        var c = je(i) ? Wn : Ug;
                        return c(i, Ne(a, 3))
                    }
                    var nI = hm(km),
                        iI = hm(xm);

                    function sI(i, a) {
                        return Jt(rl(i, a), 1)
                    }

                    function aI(i, a) {
                        return Jt(rl(i, a), be)
                    }

                    function oI(i, a, c) {
                        return c = c === r ? 1 : We(c), Jt(rl(i, a), c)
                    }

                    function jm(i, a) {
                        var c = je(i) ? Br : Yn;
                        return c(i, Ne(a, 3))
                    }

                    function Gm(i, a) {
                        var c = je(i) ? CO : Fg;
                        return c(i, Ne(a, 3))
                    }
                    var lI = Yo(function(i, a, c) {
                        dt.call(i, c) ? i[c].push(a) : In(i, c, [a])
                    });

                    function cI(i, a, c, d) {
                        i = br(i) ? i : Ss(i), c = c && !d ? We(c) : 0;
                        var v = i.length;
                        return c < 0 && (c = Bt(v + c, 0)), ol(i) ? c <= v && i.indexOf(a, c) > -1 : !!v && fs(i, a, c) > -1
                    }
                    var uI = Ke(function(i, a, c) {
                            var d = -1,
                                v = typeof a == "function",
                                b = br(i) ? K(i.length) : [];
                            return Yn(i, function(I) {
                                b[++d] = v ? Ir(a, I, c) : Ta(I, a, c)
                            }), b
                        }),
                        fI = Yo(function(i, a, c) {
                            In(i, c, a)
                        });

                    function rl(i, a) {
                        var c = je(i) ? wt : Vg;
                        return c(i, Ne(a, 3))
                    }

                    function dI(i, a, c, d) {
                        return i == null ? [] : (je(a) || (a = a == null ? [] : [a]), c = d ? r : c, je(c) || (c = c == null ? [] : [c]), zg(i, a, c))
                    }
                    var hI = Yo(function(i, a, c) {
                        i[c ? 0 : 1].push(a)
                    }, function() {
                        return [
                            [],
                            []
                        ]
                    });

                    function pI(i, a, c) {
                        var d = je(i) ? cu : _g,
                            v = arguments.length < 3;
                        return d(i, Ne(a, 4), c, v, Yn)
                    }

                    function gI(i, a, c) {
                        var d = je(i) ? $O : _g,
                            v = arguments.length < 3;
                        return d(i, Ne(a, 4), c, v, Fg)
                    }

                    function mI(i, a) {
                        var c = je(i) ? Wn : Ug;
                        return c(i, sl(Ne(a, 3)))
                    }

                    function vI(i) {
                        var a = je(i) ? kg : cC;
                        return a(i)
                    }

                    function yI(i, a, c) {
                        (c ? hr(i, a, c) : a === r) ? a = 1: a = We(a);
                        var d = je(i) ? Bw : uC;
                        return d(i, a)
                    }

                    function _I(i) {
                        var a = je(i) ? jw : dC;
                        return a(i)
                    }

                    function bI(i) {
                        if (i == null) return 0;
                        if (br(i)) return ol(i) ? hs(i) : i.length;
                        var a = sr(i);
                        return a == p || a == re ? i.size : Iu(i).length
                    }

                    function EI(i, a, c) {
                        var d = je(i) ? uu : hC;
                        return c && hr(i, a, c) && (a = r), d(i, Ne(a, 3))
                    }
                    var TI = Ke(function(i, a) {
                            if (i == null) return [];
                            var c = a.length;
                            return c > 1 && hr(i, a[0], a[1]) ? a = [] : c > 2 && hr(a[0], a[1], a[2]) && (a = [a[0]]), zg(i, Jt(a, 1), [])
                        }),
                        nl = rw || function() {
                            return Xt.Date.now()
                        };

                    function SI(i, a) {
                        if (typeof a != "function") throw new jr(l);
                        return i = We(i),
                            function() {
                                if (--i < 1) return a.apply(this, arguments)
                            }
                    }

                    function Wm(i, a, c) {
                        return a = c ? r : a, a = i && a == null ? i.length : a, An(i, oe, r, r, r, r, a)
                    }

                    function Hm(i, a) {
                        var c;
                        if (typeof a != "function") throw new jr(l);
                        return i = We(i),
                            function() {
                                return --i > 0 && (c = a.apply(this, arguments)), i <= 1 && (a = r), c
                            }
                    }
                    var Zu = Ke(function(i, a, c) {
                            var d = B;
                            if (c.length) {
                                var v = Vn(c, Es(Zu));
                                d |= j
                            }
                            return An(i, d, a, c, v)
                        }),
                        Vm = Ke(function(i, a, c) {
                            var d = B | $;
                            if (c.length) {
                                var v = Vn(c, Es(Vm));
                                d |= j
                            }
                            return An(a, d, i, c, v)
                        });

                    function Km(i, a, c) {
                        a = c ? r : a;
                        var d = An(i, q, r, r, r, r, r, a);
                        return d.placeholder = Km.placeholder, d
                    }

                    function Ym(i, a, c) {
                        a = c ? r : a;
                        var d = An(i, G, r, r, r, r, r, a);
                        return d.placeholder = Ym.placeholder, d
                    }

                    function qm(i, a, c) {
                        var d, v, b, I, R, x, ee = 0,
                            te = !1,
                            ae = !1,
                            me = !0;
                        if (typeof i != "function") throw new jr(l);
                        a = Kr(a) || 0, $t(c) && (te = !!c.leading, ae = "maxWait" in c, b = ae ? Bt(Kr(c.maxWait) || 0, a) : b, me = "trailing" in c ? !!c.trailing : me);

                        function we(Lt) {
                            var nn = d,
                                kn = v;
                            return d = v = r, ee = Lt, I = i.apply(kn, nn), I
                        }

                        function Le(Lt) {
                            return ee = Lt, R = $a(Ye, a), te ? we(Lt) : I
                        }

                        function Ve(Lt) {
                            var nn = Lt - x,
                                kn = Lt - ee,
                                hv = a - nn;
                            return ae ? ir(hv, b - kn) : hv
                        }

                        function Pe(Lt) {
                            var nn = Lt - x,
                                kn = Lt - ee;
                            return x === r || nn >= a || nn < 0 || ae && kn >= b
                        }

                        function Ye() {
                            var Lt = nl();
                            if (Pe(Lt)) return Xe(Lt);
                            R = $a(Ye, Ve(Lt))
                        }

                        function Xe(Lt) {
                            return R = r, me && d ? we(Lt) : (d = v = r, I)
                        }

                        function Lr() {
                            R !== r && im(R), ee = 0, d = x = v = R = r
                        }

                        function pr() {
                            return R === r ? I : Xe(nl())
                        }

                        function Pr() {
                            var Lt = nl(),
                                nn = Pe(Lt);
                            if (d = arguments, v = this, x = Lt, nn) {
                                if (R === r) return Le(x);
                                if (ae) return im(R), R = $a(Ye, a), we(x)
                            }
                            return R === r && (R = $a(Ye, a)), I
                        }
                        return Pr.cancel = Lr, Pr.flush = pr, Pr
                    }
                    var OI = Ke(function(i, a) {
                            return Mg(i, 1, a)
                        }),
                        wI = Ke(function(i, a, c) {
                            return Mg(i, Kr(a) || 0, c)
                        });

                    function CI(i) {
                        return An(i, ue)
                    }

                    function il(i, a) {
                        if (typeof i != "function" || a != null && typeof a != "function") throw new jr(l);
                        var c = function() {
                            var d = arguments,
                                v = a ? a.apply(this, d) : d[0],
                                b = c.cache;
                            if (b.has(v)) return b.get(v);
                            var I = i.apply(this, d);
                            return c.cache = b.set(v, I) || b, I
                        };
                        return c.cache = new(il.Cache || $n), c
                    }
                    il.Cache = $n;

                    function sl(i) {
                        if (typeof i != "function") throw new jr(l);
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

                    function $I(i) {
                        return Hm(2, i)
                    }
                    var II = pC(function(i, a) {
                            a = a.length == 1 && je(a[0]) ? wt(a[0], Ar(Ne())) : wt(Jt(a, 1), Ar(Ne()));
                            var c = a.length;
                            return Ke(function(d) {
                                for (var v = -1, b = ir(d.length, c); ++v < b;) d[v] = a[v].call(this, d[v]);
                                return Ir(i, this, d)
                            })
                        }),
                        Qu = Ke(function(i, a) {
                            var c = Vn(a, Es(Qu));
                            return An(i, j, r, a, c)
                        }),
                        zm = Ke(function(i, a) {
                            var c = Vn(a, Es(zm));
                            return An(i, J, r, a, c)
                        }),
                        AI = Rn(function(i, a) {
                            return An(i, le, r, r, r, a)
                        });

                    function RI(i, a) {
                        if (typeof i != "function") throw new jr(l);
                        return a = a === r ? a : We(a), Ke(i, a)
                    }

                    function NI(i, a) {
                        if (typeof i != "function") throw new jr(l);
                        return a = a == null ? 0 : Bt(We(a), 0), Ke(function(c) {
                            var d = c[a],
                                v = Xn(c, 0, a);
                            return d && Hn(v, d), Ir(i, this, v)
                        })
                    }

                    function LI(i, a, c) {
                        var d = !0,
                            v = !0;
                        if (typeof i != "function") throw new jr(l);
                        return $t(c) && (d = "leading" in c ? !!c.leading : d, v = "trailing" in c ? !!c.trailing : v), qm(i, a, {
                            leading: d,
                            maxWait: a,
                            trailing: v
                        })
                    }

                    function PI(i) {
                        return Wm(i, 1)
                    }

                    function kI(i, a) {
                        return Qu(Mu(a), i)
                    }

                    function xI() {
                        if (!arguments.length) return [];
                        var i = arguments[0];
                        return je(i) ? i : [i]
                    }

                    function DI(i) {
                        return Wr(i, C)
                    }

                    function MI(i, a) {
                        return a = typeof a == "function" ? a : r, Wr(i, C, a)
                    }

                    function FI(i) {
                        return Wr(i, y | C)
                    }

                    function UI(i, a) {
                        return a = typeof a == "function" ? a : r, Wr(i, y | C, a)
                    }

                    function BI(i, a) {
                        return a == null || Dg(i, a, Kt(a))
                    }

                    function rn(i, a) {
                        return i === a || i !== i && a !== a
                    }
                    var jI = Jo(wu),
                        GI = Jo(function(i, a) {
                            return i >= a
                        }),
                        Pi = Gg(function() {
                            return arguments
                        }()) ? Gg : function(i) {
                            return At(i) && dt.call(i, "callee") && !Ig.call(i, "callee")
                        },
                        je = K.isArray,
                        WI = cg ? Ar(cg) : Jw;

                    function br(i) {
                        return i != null && al(i.length) && !Ln(i)
                    }

                    function Nt(i) {
                        return At(i) && br(i)
                    }

                    function HI(i) {
                        return i === !0 || i === !1 || At(i) && dr(i) == Ot
                    }
                    var Jn = iw || ff,
                        VI = ug ? Ar(ug) : Zw;

                    function KI(i) {
                        return At(i) && i.nodeType === 1 && !Ia(i)
                    }

                    function YI(i) {
                        if (i == null) return !0;
                        if (br(i) && (je(i) || typeof i == "string" || typeof i.splice == "function" || Jn(i) || Ts(i) || Pi(i))) return !i.length;
                        var a = sr(i);
                        if (a == p || a == re) return !i.size;
                        if (Ca(i)) return !Iu(i).length;
                        for (var c in i)
                            if (dt.call(i, c)) return !1;
                        return !0
                    }

                    function qI(i, a) {
                        return Sa(i, a)
                    }

                    function zI(i, a, c) {
                        c = typeof c == "function" ? c : r;
                        var d = c ? c(i, a) : r;
                        return d === r ? Sa(i, a, r, c) : !!d
                    }

                    function ef(i) {
                        if (!At(i)) return !1;
                        var a = dr(i);
                        return a == Vt || a == xt || typeof i.message == "string" && typeof i.name == "string" && !Ia(i)
                    }

                    function XI(i) {
                        return typeof i == "number" && Rg(i)
                    }

                    function Ln(i) {
                        if (!$t(i)) return !1;
                        var a = dr(i);
                        return a == Dt || a == m || a == ot || a == ce
                    }

                    function Xm(i) {
                        return typeof i == "number" && i == We(i)
                    }

                    function al(i) {
                        return typeof i == "number" && i > -1 && i % 1 == 0 && i <= ve
                    }

                    function $t(i) {
                        var a = typeof i;
                        return i != null && (a == "object" || a == "function")
                    }

                    function At(i) {
                        return i != null && typeof i == "object"
                    }
                    var Jm = fg ? Ar(fg) : eC;

                    function JI(i, a) {
                        return i === a || $u(i, a, Hu(a))
                    }

                    function ZI(i, a, c) {
                        return c = typeof c == "function" ? c : r, $u(i, a, Hu(a), c)
                    }

                    function QI(i) {
                        return Zm(i) && i != +i
                    }

                    function eA(i) {
                        if (MC(i)) throw new Ue(o);
                        return Wg(i)
                    }

                    function tA(i) {
                        return i === null
                    }

                    function rA(i) {
                        return i == null
                    }

                    function Zm(i) {
                        return typeof i == "number" || At(i) && dr(i) == O
                    }

                    function Ia(i) {
                        if (!At(i) || dr(i) != U) return !1;
                        var a = Po(i);
                        if (a === null) return !0;
                        var c = dt.call(a, "constructor") && a.constructor;
                        return typeof c == "function" && c instanceof c && Ao.call(c) == ZO
                    }
                    var tf = dg ? Ar(dg) : tC;

                    function nA(i) {
                        return Xm(i) && i >= -ve && i <= ve
                    }
                    var Qm = hg ? Ar(hg) : rC;

                    function ol(i) {
                        return typeof i == "string" || !je(i) && At(i) && dr(i) == A
                    }

                    function Nr(i) {
                        return typeof i == "symbol" || At(i) && dr(i) == W
                    }
                    var Ts = pg ? Ar(pg) : nC;

                    function iA(i) {
                        return i === r
                    }

                    function sA(i) {
                        return At(i) && sr(i) == pe
                    }

                    function aA(i) {
                        return At(i) && dr(i) == Re
                    }
                    var oA = Jo(Au),
                        lA = Jo(function(i, a) {
                            return i <= a
                        });

                    function ev(i) {
                        if (!i) return [];
                        if (br(i)) return ol(i) ? en(i) : _r(i);
                        if (ga && i[ga]) return BO(i[ga]());
                        var a = sr(i),
                            c = a == p ? mu : a == re ? Co : Ss;
                        return c(i)
                    }

                    function Pn(i) {
                        if (!i) return i === 0 ? i : 0;
                        if (i = Kr(i), i === be || i === -be) {
                            var a = i < 0 ? -1 : 1;
                            return a * Oe
                        }
                        return i === i ? i : 0
                    }

                    function We(i) {
                        var a = Pn(i),
                            c = a % 1;
                        return a === a ? c ? a - c : a : 0
                    }

                    function tv(i) {
                        return i ? Ai(We(i), 0, Ge) : 0
                    }

                    function Kr(i) {
                        if (typeof i == "number") return i;
                        if (Nr(i)) return Fe;
                        if ($t(i)) {
                            var a = typeof i.valueOf == "function" ? i.valueOf() : i;
                            i = $t(a) ? a + "" : a
                        }
                        if (typeof i != "string") return i === 0 ? i : +i;
                        i = bg(i);
                        var c = WS.test(i);
                        return c || VS.test(i) ? SO(i.slice(2), c ? 2 : 8) : GS.test(i) ? Fe : +i
                    }

                    function rv(i) {
                        return gn(i, Er(i))
                    }

                    function cA(i) {
                        return i ? Ai(We(i), -ve, ve) : i === 0 ? i : 0
                    }

                    function ct(i) {
                        return i == null ? "" : Rr(i)
                    }
                    var uA = _s(function(i, a) {
                            if (Ca(a) || br(a)) {
                                gn(a, Kt(a), i);
                                return
                            }
                            for (var c in a) dt.call(a, c) && ba(i, c, a[c])
                        }),
                        nv = _s(function(i, a) {
                            gn(a, Er(a), i)
                        }),
                        ll = _s(function(i, a, c, d) {
                            gn(a, Er(a), i, d)
                        }),
                        fA = _s(function(i, a, c, d) {
                            gn(a, Kt(a), i, d)
                        }),
                        dA = Rn(Tu);

                    function hA(i, a) {
                        var c = ys(i);
                        return a == null ? c : xg(c, a)
                    }
                    var pA = Ke(function(i, a) {
                            i = pt(i);
                            var c = -1,
                                d = a.length,
                                v = d > 2 ? a[2] : r;
                            for (v && hr(a[0], a[1], v) && (d = 1); ++c < d;)
                                for (var b = a[c], I = Er(b), R = -1, x = I.length; ++R < x;) {
                                    var ee = I[R],
                                        te = i[ee];
                                    (te === r || rn(te, gs[ee]) && !dt.call(i, ee)) && (i[ee] = b[ee])
                                }
                            return i
                        }),
                        gA = Ke(function(i) {
                            return i.push(r, bm), Ir(iv, r, i)
                        });

                    function mA(i, a) {
                        return mg(i, Ne(a, 3), pn)
                    }

                    function vA(i, a) {
                        return mg(i, Ne(a, 3), Ou)
                    }

                    function yA(i, a) {
                        return i == null ? i : Su(i, Ne(a, 3), Er)
                    }

                    function _A(i, a) {
                        return i == null ? i : Bg(i, Ne(a, 3), Er)
                    }

                    function bA(i, a) {
                        return i && pn(i, Ne(a, 3))
                    }

                    function EA(i, a) {
                        return i && Ou(i, Ne(a, 3))
                    }

                    function TA(i) {
                        return i == null ? [] : Wo(i, Kt(i))
                    }

                    function SA(i) {
                        return i == null ? [] : Wo(i, Er(i))
                    }

                    function rf(i, a, c) {
                        var d = i == null ? r : Ri(i, a);
                        return d === r ? c : d
                    }

                    function OA(i, a) {
                        return i != null && Sm(i, a, Yw)
                    }

                    function nf(i, a) {
                        return i != null && Sm(i, a, qw)
                    }
                    var wA = gm(function(i, a, c) {
                            a != null && typeof a.toString != "function" && (a = Ro.call(a)), i[a] = c
                        }, af(Tr)),
                        CA = gm(function(i, a, c) {
                            a != null && typeof a.toString != "function" && (a = Ro.call(a)), dt.call(i, a) ? i[a].push(c) : i[a] = [c]
                        }, Ne),
                        $A = Ke(Ta);

                    function Kt(i) {
                        return br(i) ? Pg(i) : Iu(i)
                    }

                    function Er(i) {
                        return br(i) ? Pg(i, !0) : iC(i)
                    }

                    function IA(i, a) {
                        var c = {};
                        return a = Ne(a, 3), pn(i, function(d, v, b) {
                            In(c, a(d, v, b), d)
                        }), c
                    }

                    function AA(i, a) {
                        var c = {};
                        return a = Ne(a, 3), pn(i, function(d, v, b) {
                            In(c, v, a(d, v, b))
                        }), c
                    }
                    var RA = _s(function(i, a, c) {
                            Ho(i, a, c)
                        }),
                        iv = _s(function(i, a, c, d) {
                            Ho(i, a, c, d)
                        }),
                        NA = Rn(function(i, a) {
                            var c = {};
                            if (i == null) return c;
                            var d = !1;
                            a = wt(a, function(b) {
                                return b = zn(b, i), d || (d = b.length > 1), b
                            }), gn(i, Gu(i), c), d && (c = Wr(c, y | E | C, wC));
                            for (var v = a.length; v--;) ku(c, a[v]);
                            return c
                        });

                    function LA(i, a) {
                        return sv(i, sl(Ne(a)))
                    }
                    var PA = Rn(function(i, a) {
                        return i == null ? {} : aC(i, a)
                    });

                    function sv(i, a) {
                        if (i == null) return {};
                        var c = wt(Gu(i), function(d) {
                            return [d]
                        });
                        return a = Ne(a), Xg(i, c, function(d, v) {
                            return a(d, v[0])
                        })
                    }

                    function kA(i, a, c) {
                        a = zn(a, i);
                        var d = -1,
                            v = a.length;
                        for (v || (v = 1, i = r); ++d < v;) {
                            var b = i == null ? r : i[mn(a[d])];
                            b === r && (d = v, b = c), i = Ln(b) ? b.call(i) : b
                        }
                        return i
                    }

                    function xA(i, a, c) {
                        return i == null ? i : Oa(i, a, c)
                    }

                    function DA(i, a, c, d) {
                        return d = typeof d == "function" ? d : r, i == null ? i : Oa(i, a, c, d)
                    }
                    var av = ym(Kt),
                        ov = ym(Er);

                    function MA(i, a, c) {
                        var d = je(i),
                            v = d || Jn(i) || Ts(i);
                        if (a = Ne(a, 4), c == null) {
                            var b = i && i.constructor;
                            v ? c = d ? new b : [] : $t(i) ? c = Ln(b) ? ys(Po(i)) : {} : c = {}
                        }
                        return (v ? Br : pn)(i, function(I, R, x) {
                            return a(c, I, R, x)
                        }), c
                    }

                    function FA(i, a) {
                        return i == null ? !0 : ku(i, a)
                    }

                    function UA(i, a, c) {
                        return i == null ? i : tm(i, a, Mu(c))
                    }

                    function BA(i, a, c, d) {
                        return d = typeof d == "function" ? d : r, i == null ? i : tm(i, a, Mu(c), d)
                    }

                    function Ss(i) {
                        return i == null ? [] : gu(i, Kt(i))
                    }

                    function jA(i) {
                        return i == null ? [] : gu(i, Er(i))
                    }

                    function GA(i, a, c) {
                        return c === r && (c = a, a = r), c !== r && (c = Kr(c), c = c === c ? c : 0), a !== r && (a = Kr(a), a = a === a ? a : 0), Ai(Kr(i), a, c)
                    }

                    function WA(i, a, c) {
                        return a = Pn(a), c === r ? (c = a, a = 0) : c = Pn(c), i = Kr(i), zw(i, a, c)
                    }

                    function HA(i, a, c) {
                        if (c && typeof c != "boolean" && hr(i, a, c) && (a = c = r), c === r && (typeof a == "boolean" ? (c = a, a = r) : typeof i == "boolean" && (c = i, i = r)), i === r && a === r ? (i = 0, a = 1) : (i = Pn(i), a === r ? (a = i, i = 0) : a = Pn(a)), i > a) {
                            var d = i;
                            i = a, a = d
                        }
                        if (c || i % 1 || a % 1) {
                            var v = Ng();
                            return ir(i + v * (a - i + TO("1e-" + ((v + "").length - 1))), a)
                        }
                        return Nu(i, a)
                    }
                    var VA = bs(function(i, a, c) {
                        return a = a.toLowerCase(), i + (c ? lv(a) : a)
                    });

                    function lv(i) {
                        return sf(ct(i).toLowerCase())
                    }

                    function cv(i) {
                        return i = ct(i), i && i.replace(YS, xO).replace(dO, "")
                    }

                    function KA(i, a, c) {
                        i = ct(i), a = Rr(a);
                        var d = i.length;
                        c = c === r ? d : Ai(We(c), 0, d);
                        var v = c;
                        return c -= a.length, c >= 0 && i.slice(c, v) == a
                    }

                    function YA(i) {
                        return i = ct(i), i && $S.test(i) ? i.replace(Bp, DO) : i
                    }

                    function qA(i) {
                        return i = ct(i), i && PS.test(i) ? i.replace(Qc, "\\$&") : i
                    }
                    var zA = bs(function(i, a, c) {
                            return i + (c ? "-" : "") + a.toLowerCase()
                        }),
                        XA = bs(function(i, a, c) {
                            return i + (c ? " " : "") + a.toLowerCase()
                        }),
                        JA = dm("toLowerCase");

                    function ZA(i, a, c) {
                        i = ct(i), a = We(a);
                        var d = a ? hs(i) : 0;
                        if (!a || d >= a) return i;
                        var v = (a - d) / 2;
                        return Xo(Mo(v), c) + i + Xo(Do(v), c)
                    }

                    function QA(i, a, c) {
                        i = ct(i), a = We(a);
                        var d = a ? hs(i) : 0;
                        return a && d < a ? i + Xo(a - d, c) : i
                    }

                    function eR(i, a, c) {
                        i = ct(i), a = We(a);
                        var d = a ? hs(i) : 0;
                        return a && d < a ? Xo(a - d, c) + i : i
                    }

                    function tR(i, a, c) {
                        return c || a == null ? a = 0 : a && (a = +a), lw(ct(i).replace(eu, ""), a || 0)
                    }

                    function rR(i, a, c) {
                        return (c ? hr(i, a, c) : a === r) ? a = 1 : a = We(a), Lu(ct(i), a)
                    }

                    function nR() {
                        var i = arguments,
                            a = ct(i[0]);
                        return i.length < 3 ? a : a.replace(i[1], i[2])
                    }
                    var iR = bs(function(i, a, c) {
                        return i + (c ? "_" : "") + a.toLowerCase()
                    });

                    function sR(i, a, c) {
                        return c && typeof c != "number" && hr(i, a, c) && (a = c = r), c = c === r ? Ge : c >>> 0, c ? (i = ct(i), i && (typeof a == "string" || a != null && !tf(a)) && (a = Rr(a), !a && ds(i)) ? Xn(en(i), 0, c) : i.split(a, c)) : []
                    }
                    var aR = bs(function(i, a, c) {
                        return i + (c ? " " : "") + sf(a)
                    });

                    function oR(i, a, c) {
                        return i = ct(i), c = c == null ? 0 : Ai(We(c), 0, i.length), a = Rr(a), i.slice(c, c + a.length) == a
                    }

                    function lR(i, a, c) {
                        var d = _.templateSettings;
                        c && hr(i, a, c) && (a = r), i = ct(i), a = ll({}, a, d, _m);
                        var v = ll({}, a.imports, d.imports, _m),
                            b = Kt(v),
                            I = gu(v, b),
                            R, x, ee = 0,
                            te = a.interpolate || Eo,
                            ae = "__p += '",
                            me = vu((a.escape || Eo).source + "|" + te.source + "|" + (te === jp ? jS : Eo).source + "|" + (a.evaluate || Eo).source + "|$", "g"),
                            we = "//# sourceURL=" + (dt.call(a, "sourceURL") ? (a.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++vO + "]") + `
`;
                        i.replace(me, function(Pe, Ye, Xe, Lr, pr, Pr) {
                            return Xe || (Xe = Lr), ae += i.slice(ee, Pr).replace(qS, MO), Ye && (R = !0, ae += `' +
__e(` + Ye + `) +
'`), pr && (x = !0, ae += `';
` + pr + `;
__p += '`), Xe && (ae += `' +
((__t = (` + Xe + `)) == null ? '' : __t) +
'`), ee = Pr + Pe.length, Pe
                        }), ae += `';
`;
                        var Le = dt.call(a, "variable") && a.variable;
                        if (!Le) ae = `with (obj) {
` + ae + `
}
`;
                        else if (US.test(Le)) throw new Ue(u);
                        ae = (x ? ae.replace(nr, "") : ae).replace(De, "$1").replace(ha, "$1;"), ae = "function(" + (Le || "obj") + `) {
` + (Le ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (R ? ", __e = _.escape" : "") + (x ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + ae + `return __p
}`;
                        var Ve = fv(function() {
                            return st(b, we + "return " + ae).apply(r, I)
                        });
                        if (Ve.source = ae, ef(Ve)) throw Ve;
                        return Ve
                    }

                    function cR(i) {
                        return ct(i).toLowerCase()
                    }

                    function uR(i) {
                        return ct(i).toUpperCase()
                    }

                    function fR(i, a, c) {
                        if (i = ct(i), i && (c || a === r)) return bg(i);
                        if (!i || !(a = Rr(a))) return i;
                        var d = en(i),
                            v = en(a),
                            b = Eg(d, v),
                            I = Tg(d, v) + 1;
                        return Xn(d, b, I).join("")
                    }

                    function dR(i, a, c) {
                        if (i = ct(i), i && (c || a === r)) return i.slice(0, Og(i) + 1);
                        if (!i || !(a = Rr(a))) return i;
                        var d = en(i),
                            v = Tg(d, en(a)) + 1;
                        return Xn(d, 0, v).join("")
                    }

                    function hR(i, a, c) {
                        if (i = ct(i), i && (c || a === r)) return i.replace(eu, "");
                        if (!i || !(a = Rr(a))) return i;
                        var d = en(i),
                            v = Eg(d, en(a));
                        return Xn(d, v).join("")
                    }

                    function pR(i, a) {
                        var c = Ae,
                            d = $e;
                        if ($t(a)) {
                            var v = "separator" in a ? a.separator : v;
                            c = "length" in a ? We(a.length) : c, d = "omission" in a ? Rr(a.omission) : d
                        }
                        i = ct(i);
                        var b = i.length;
                        if (ds(i)) {
                            var I = en(i);
                            b = I.length
                        }
                        if (c >= b) return i;
                        var R = c - hs(d);
                        if (R < 1) return d;
                        var x = I ? Xn(I, 0, R).join("") : i.slice(0, R);
                        if (v === r) return x + d;
                        if (I && (R += x.length - R), tf(v)) {
                            if (i.slice(R).search(v)) {
                                var ee, te = x;
                                for (v.global || (v = vu(v.source, ct(Gp.exec(v)) + "g")), v.lastIndex = 0; ee = v.exec(te);) var ae = ee.index;
                                x = x.slice(0, ae === r ? R : ae)
                            }
                        } else if (i.indexOf(Rr(v), R) != R) {
                            var me = x.lastIndexOf(v);
                            me > -1 && (x = x.slice(0, me))
                        }
                        return x + d
                    }

                    function gR(i) {
                        return i = ct(i), i && CS.test(i) ? i.replace(Up, HO) : i
                    }
                    var mR = bs(function(i, a, c) {
                            return i + (c ? " " : "") + a.toUpperCase()
                        }),
                        sf = dm("toUpperCase");

                    function uv(i, a, c) {
                        return i = ct(i), a = c ? r : a, a === r ? UO(i) ? YO(i) : RO(i) : i.match(a) || []
                    }
                    var fv = Ke(function(i, a) {
                            try {
                                return Ir(i, r, a)
                            } catch (c) {
                                return ef(c) ? c : new Ue(c)
                            }
                        }),
                        vR = Rn(function(i, a) {
                            return Br(a, function(c) {
                                c = mn(c), In(i, c, Zu(i[c], i))
                            }), i
                        });

                    function yR(i) {
                        var a = i == null ? 0 : i.length,
                            c = Ne();
                        return i = a ? wt(i, function(d) {
                            if (typeof d[1] != "function") throw new jr(l);
                            return [c(d[0]), d[1]]
                        }) : [], Ke(function(d) {
                            for (var v = -1; ++v < a;) {
                                var b = i[v];
                                if (Ir(b[0], this, d)) return Ir(b[1], this, d)
                            }
                        })
                    }

                    function _R(i) {
                        return Hw(Wr(i, y))
                    }

                    function af(i) {
                        return function() {
                            return i
                        }
                    }

                    function bR(i, a) {
                        return i == null || i !== i ? a : i
                    }
                    var ER = pm(),
                        TR = pm(!0);

                    function Tr(i) {
                        return i
                    }

                    function of(i) {
                        return Hg(typeof i == "function" ? i : Wr(i, y))
                    }

                    function SR(i) {
                        return Kg(Wr(i, y))
                    }

                    function OR(i, a) {
                        return Yg(i, Wr(a, y))
                    }
                    var wR = Ke(function(i, a) {
                            return function(c) {
                                return Ta(c, i, a)
                            }
                        }),
                        CR = Ke(function(i, a) {
                            return function(c) {
                                return Ta(i, c, a)
                            }
                        });

                    function lf(i, a, c) {
                        var d = Kt(a),
                            v = Wo(a, d);
                        c == null && !($t(a) && (v.length || !d.length)) && (c = a, a = i, i = this, v = Wo(a, Kt(a)));
                        var b = !($t(c) && "chain" in c) || !!c.chain,
                            I = Ln(i);
                        return Br(v, function(R) {
                            var x = a[R];
                            i[R] = x, I && (i.prototype[R] = function() {
                                var ee = this.__chain__;
                                if (b || ee) {
                                    var te = i(this.__wrapped__),
                                        ae = te.__actions__ = _r(this.__actions__);
                                    return ae.push({
                                        func: x,
                                        args: arguments,
                                        thisArg: i
                                    }), te.__chain__ = ee, te
                                }
                                return x.apply(i, Hn([this.value()], arguments))
                            })
                        }), i
                    }

                    function $R() {
                        return Xt._ === this && (Xt._ = QO), this
                    }

                    function cf() {}

                    function IR(i) {
                        return i = We(i), Ke(function(a) {
                            return qg(a, i)
                        })
                    }
                    var AR = Uu(wt),
                        RR = Uu(gg),
                        NR = Uu(uu);

                    function dv(i) {
                        return Ku(i) ? fu(mn(i)) : oC(i)
                    }

                    function LR(i) {
                        return function(a) {
                            return i == null ? r : Ri(i, a)
                        }
                    }
                    var PR = mm(),
                        kR = mm(!0);

                    function uf() {
                        return []
                    }

                    function ff() {
                        return !1
                    }

                    function xR() {
                        return {}
                    }

                    function DR() {
                        return ""
                    }

                    function MR() {
                        return !0
                    }

                    function FR(i, a) {
                        if (i = We(i), i < 1 || i > ve) return [];
                        var c = Ge,
                            d = ir(i, Ge);
                        a = Ne(a), i -= Ge;
                        for (var v = pu(d, a); ++c < i;) a(c);
                        return v
                    }

                    function UR(i) {
                        return je(i) ? wt(i, mn) : Nr(i) ? [i] : _r(Lm(ct(i)))
                    }

                    function BR(i) {
                        var a = ++JO;
                        return ct(i) + a
                    }
                    var jR = zo(function(i, a) {
                            return i + a
                        }, 0),
                        GR = Bu("ceil"),
                        WR = zo(function(i, a) {
                            return i / a
                        }, 1),
                        HR = Bu("floor");

                    function VR(i) {
                        return i && i.length ? Go(i, Tr, wu) : r
                    }

                    function KR(i, a) {
                        return i && i.length ? Go(i, Ne(a, 2), wu) : r
                    }

                    function YR(i) {
                        return yg(i, Tr)
                    }

                    function qR(i, a) {
                        return yg(i, Ne(a, 2))
                    }

                    function zR(i) {
                        return i && i.length ? Go(i, Tr, Au) : r
                    }

                    function XR(i, a) {
                        return i && i.length ? Go(i, Ne(a, 2), Au) : r
                    }
                    var JR = zo(function(i, a) {
                            return i * a
                        }, 1),
                        ZR = Bu("round"),
                        QR = zo(function(i, a) {
                            return i - a
                        }, 0);

                    function eN(i) {
                        return i && i.length ? hu(i, Tr) : 0
                    }

                    function tN(i, a) {
                        return i && i.length ? hu(i, Ne(a, 2)) : 0
                    }
                    return _.after = SI, _.ary = Wm, _.assign = uA, _.assignIn = nv, _.assignInWith = ll, _.assignWith = fA, _.at = dA, _.before = Hm, _.bind = Zu, _.bindAll = vR, _.bindKey = Vm, _.castArray = xI, _.chain = Bm, _.chunk = HC, _.compact = VC, _.concat = KC, _.cond = yR, _.conforms = _R, _.constant = af, _.countBy = eI, _.create = hA, _.curry = Km, _.curryRight = Ym, _.debounce = qm, _.defaults = pA, _.defaultsDeep = gA, _.defer = OI, _.delay = wI, _.difference = YC, _.differenceBy = qC, _.differenceWith = zC, _.drop = XC, _.dropRight = JC, _.dropRightWhile = ZC, _.dropWhile = QC, _.fill = e$, _.filter = rI, _.flatMap = sI, _.flatMapDeep = aI, _.flatMapDepth = oI, _.flatten = Dm, _.flattenDeep = t$, _.flattenDepth = r$, _.flip = CI, _.flow = ER, _.flowRight = TR, _.fromPairs = n$, _.functions = TA, _.functionsIn = SA, _.groupBy = lI, _.initial = s$, _.intersection = a$, _.intersectionBy = o$, _.intersectionWith = l$, _.invert = wA, _.invertBy = CA, _.invokeMap = uI, _.iteratee = of, _.keyBy = fI, _.keys = Kt, _.keysIn = Er, _.map = rl, _.mapKeys = IA, _.mapValues = AA, _.matches = SR, _.matchesProperty = OR, _.memoize = il, _.merge = RA, _.mergeWith = iv, _.method = wR, _.methodOf = CR, _.mixin = lf, _.negate = sl, _.nthArg = IR, _.omit = NA, _.omitBy = LA, _.once = $I, _.orderBy = dI, _.over = AR, _.overArgs = II, _.overEvery = RR, _.overSome = NR, _.partial = Qu, _.partialRight = zm, _.partition = hI, _.pick = PA, _.pickBy = sv, _.property = dv, _.propertyOf = LR, _.pull = d$, _.pullAll = Fm, _.pullAllBy = h$, _.pullAllWith = p$, _.pullAt = g$, _.range = PR, _.rangeRight = kR, _.rearg = AI, _.reject = mI, _.remove = m$, _.rest = RI, _.reverse = Xu, _.sampleSize = yI, _.set = xA, _.setWith = DA, _.shuffle = _I, _.slice = v$, _.sortBy = TI, _.sortedUniq = O$, _.sortedUniqBy = w$, _.split = sR, _.spread = NI, _.tail = C$, _.take = $$, _.takeRight = I$, _.takeRightWhile = A$, _.takeWhile = R$, _.tap = V$, _.throttle = LI, _.thru = tl, _.toArray = ev, _.toPairs = av, _.toPairsIn = ov, _.toPath = UR, _.toPlainObject = rv, _.transform = MA, _.unary = PI, _.union = N$, _.unionBy = L$, _.unionWith = P$, _.uniq = k$, _.uniqBy = x$, _.uniqWith = D$, _.unset = FA, _.unzip = Ju, _.unzipWith = Um, _.update = UA, _.updateWith = BA, _.values = Ss, _.valuesIn = jA, _.without = M$, _.words = uv, _.wrap = kI, _.xor = F$, _.xorBy = U$, _.xorWith = B$, _.zip = j$, _.zipObject = G$, _.zipObjectDeep = W$, _.zipWith = H$, _.entries = av, _.entriesIn = ov, _.extend = nv, _.extendWith = ll, lf(_, _), _.add = jR, _.attempt = fv, _.camelCase = VA, _.capitalize = lv, _.ceil = GR, _.clamp = GA, _.clone = DI, _.cloneDeep = FI, _.cloneDeepWith = UI, _.cloneWith = MI, _.conformsTo = BI, _.deburr = cv, _.defaultTo = bR, _.divide = WR, _.endsWith = KA, _.eq = rn, _.escape = YA, _.escapeRegExp = qA, _.every = tI, _.find = nI, _.findIndex = km, _.findKey = mA, _.findLast = iI, _.findLastIndex = xm, _.findLastKey = vA, _.floor = HR, _.forEach = jm, _.forEachRight = Gm, _.forIn = yA, _.forInRight = _A, _.forOwn = bA, _.forOwnRight = EA, _.get = rf, _.gt = jI, _.gte = GI, _.has = OA, _.hasIn = nf, _.head = Mm, _.identity = Tr, _.includes = cI, _.indexOf = i$, _.inRange = WA, _.invoke = $A, _.isArguments = Pi, _.isArray = je, _.isArrayBuffer = WI, _.isArrayLike = br, _.isArrayLikeObject = Nt, _.isBoolean = HI, _.isBuffer = Jn, _.isDate = VI, _.isElement = KI, _.isEmpty = YI, _.isEqual = qI, _.isEqualWith = zI, _.isError = ef, _.isFinite = XI, _.isFunction = Ln, _.isInteger = Xm, _.isLength = al, _.isMap = Jm, _.isMatch = JI, _.isMatchWith = ZI, _.isNaN = QI, _.isNative = eA, _.isNil = rA, _.isNull = tA, _.isNumber = Zm, _.isObject = $t, _.isObjectLike = At, _.isPlainObject = Ia, _.isRegExp = tf, _.isSafeInteger = nA, _.isSet = Qm, _.isString = ol, _.isSymbol = Nr, _.isTypedArray = Ts, _.isUndefined = iA, _.isWeakMap = sA, _.isWeakSet = aA, _.join = c$, _.kebabCase = zA, _.last = Vr, _.lastIndexOf = u$, _.lowerCase = XA, _.lowerFirst = JA, _.lt = oA, _.lte = lA, _.max = VR, _.maxBy = KR, _.mean = YR, _.meanBy = qR, _.min = zR, _.minBy = XR, _.stubArray = uf, _.stubFalse = ff, _.stubObject = xR, _.stubString = DR, _.stubTrue = MR, _.multiply = JR, _.nth = f$, _.noConflict = $R, _.noop = cf, _.now = nl, _.pad = ZA, _.padEnd = QA, _.padStart = eR, _.parseInt = tR, _.random = HA, _.reduce = pI, _.reduceRight = gI, _.repeat = rR, _.replace = nR, _.result = kA, _.round = ZR, _.runInContext = k, _.sample = vI, _.size = bI, _.snakeCase = iR, _.some = EI, _.sortedIndex = y$, _.sortedIndexBy = _$, _.sortedIndexOf = b$, _.sortedLastIndex = E$, _.sortedLastIndexBy = T$, _.sortedLastIndexOf = S$, _.startCase = aR, _.startsWith = oR, _.subtract = QR, _.sum = eN, _.sumBy = tN, _.template = lR, _.times = FR, _.toFinite = Pn, _.toInteger = We, _.toLength = tv, _.toLower = cR, _.toNumber = Kr, _.toSafeInteger = cA, _.toString = ct, _.toUpper = uR, _.trim = fR, _.trimEnd = dR, _.trimStart = hR, _.truncate = pR, _.unescape = gR, _.uniqueId = BR, _.upperCase = mR, _.upperFirst = sf, _.each = jm, _.eachRight = Gm, _.first = Mm, lf(_, function() {
                        var i = {};
                        return pn(_, function(a, c) {
                            dt.call(_.prototype, c) || (i[c] = a)
                        }), i
                    }(), {
                        chain: !1
                    }), _.VERSION = n, Br(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(i) {
                        _[i].placeholder = _
                    }), Br(["drop", "take"], function(i, a) {
                        qe.prototype[i] = function(c) {
                            c = c === r ? 1 : Bt(We(c), 0);
                            var d = this.__filtered__ && !a ? new qe(this) : this.clone();
                            return d.__filtered__ ? d.__takeCount__ = ir(c, d.__takeCount__) : d.__views__.push({
                                size: ir(c, Ge),
                                type: i + (d.__dir__ < 0 ? "Right" : "")
                            }), d
                        }, qe.prototype[i + "Right"] = function(c) {
                            return this.reverse()[i](c).reverse()
                        }
                    }), Br(["filter", "map", "takeWhile"], function(i, a) {
                        var c = a + 1,
                            d = c == F || c == de;
                        qe.prototype[i] = function(v) {
                            var b = this.clone();
                            return b.__iteratees__.push({
                                iteratee: Ne(v, 3),
                                type: c
                            }), b.__filtered__ = b.__filtered__ || d, b
                        }
                    }), Br(["head", "last"], function(i, a) {
                        var c = "take" + (a ? "Right" : "");
                        qe.prototype[i] = function() {
                            return this[c](1).value()[0]
                        }
                    }), Br(["initial", "tail"], function(i, a) {
                        var c = "drop" + (a ? "" : "Right");
                        qe.prototype[i] = function() {
                            return this.__filtered__ ? new qe(this) : this[c](1)
                        }
                    }), qe.prototype.compact = function() {
                        return this.filter(Tr)
                    }, qe.prototype.find = function(i) {
                        return this.filter(i).head()
                    }, qe.prototype.findLast = function(i) {
                        return this.reverse().find(i)
                    }, qe.prototype.invokeMap = Ke(function(i, a) {
                        return typeof i == "function" ? new qe(this) : this.map(function(c) {
                            return Ta(c, i, a)
                        })
                    }), qe.prototype.reject = function(i) {
                        return this.filter(sl(Ne(i)))
                    }, qe.prototype.slice = function(i, a) {
                        i = We(i);
                        var c = this;
                        return c.__filtered__ && (i > 0 || a < 0) ? new qe(c) : (i < 0 ? c = c.takeRight(-i) : i && (c = c.drop(i)), a !== r && (a = We(a), c = a < 0 ? c.dropRight(-a) : c.take(a - i)), c)
                    }, qe.prototype.takeRightWhile = function(i) {
                        return this.reverse().takeWhile(i).reverse()
                    }, qe.prototype.toArray = function() {
                        return this.take(Ge)
                    }, pn(qe.prototype, function(i, a) {
                        var c = /^(?:filter|find|map|reject)|While$/.test(a),
                            d = /^(?:head|last)$/.test(a),
                            v = _[d ? "take" + (a == "last" ? "Right" : "") : a],
                            b = d || /^find/.test(a);
                        !v || (_.prototype[a] = function() {
                            var I = this.__wrapped__,
                                R = d ? [1] : arguments,
                                x = I instanceof qe,
                                ee = R[0],
                                te = x || je(I),
                                ae = function(Ye) {
                                    var Xe = v.apply(_, Hn([Ye], R));
                                    return d && me ? Xe[0] : Xe
                                };
                            te && c && typeof ee == "function" && ee.length != 1 && (x = te = !1);
                            var me = this.__chain__,
                                we = !!this.__actions__.length,
                                Le = b && !me,
                                Ve = x && !we;
                            if (!b && te) {
                                I = Ve ? I : new qe(this);
                                var Pe = i.apply(I, R);
                                return Pe.__actions__.push({
                                    func: tl,
                                    args: [ae],
                                    thisArg: r
                                }), new Gr(Pe, me)
                            }
                            return Le && Ve ? i.apply(this, R) : (Pe = this.thru(ae), Le ? d ? Pe.value()[0] : Pe.value() : Pe)
                        })
                    }), Br(["pop", "push", "shift", "sort", "splice", "unshift"], function(i) {
                        var a = $o[i],
                            c = /^(?:push|sort|unshift)$/.test(i) ? "tap" : "thru",
                            d = /^(?:pop|shift)$/.test(i);
                        _.prototype[i] = function() {
                            var v = arguments;
                            if (d && !this.__chain__) {
                                var b = this.value();
                                return a.apply(je(b) ? b : [], v)
                            }
                            return this[c](function(I) {
                                return a.apply(je(I) ? I : [], v)
                            })
                        }
                    }), pn(qe.prototype, function(i, a) {
                        var c = _[a];
                        if (c) {
                            var d = c.name + "";
                            dt.call(vs, d) || (vs[d] = []), vs[d].push({
                                name: a,
                                func: c
                            })
                        }
                    }), vs[qo(r, $).name] = [{
                        name: "wrapper",
                        func: r
                    }], qe.prototype.clone = gw, qe.prototype.reverse = mw, qe.prototype.value = vw, _.prototype.at = K$, _.prototype.chain = Y$, _.prototype.commit = q$, _.prototype.next = z$, _.prototype.plant = J$, _.prototype.reverse = Z$, _.prototype.toJSON = _.prototype.valueOf = _.prototype.value = Q$, _.prototype.first = _.prototype.head, ga && (_.prototype[ga] = X$), _
                },
                ps = qO();
            wi ? ((wi.exports = ps)._ = ps, au._ = ps) : Xt._ = ps
        }).call(kt)
    })(Rd, Rd.exports);
    const jB = it({
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
                        l = Math.max(this.windowHeight - t.height + n.height, 240),
                        u = this.stage.canvas.width,
                        f = this.stage.canvas.height,
                        h = Math.min(o / u, l / f),
                        g = u * h,
                        y = f * h;
                    return {
                        width: `${g}px`,
                        height: `${y}px`
                    }
                }
            },
            mounted() {
                this.onResizeWithContext = Rd.exports.throttle(this.onResize.bind(this), 400), window.addEventListener("resize", this.onResizeWithContext), this.setupStage()
            },
            beforeUnmount() {
                window.removeEventListener("resize", this.onResizeWithContext), this.stage && this.stage.beforeDestroy()
            },
            methods: {
                setupStage() {
                    const e = this.$refs.stage,
                        t = {};
                    this.player.size && (t.width = this.player.size.width, t.height = this.player.size.height), this.player.thicknesses && (t.thickness = this.player.thicknesses[0]), this.player.colors && (t.color = this.player.colors[0]), this.player.maxPoints && (t.maxPoints = this.player.maxPoints);
                    const r = new _5(e, t);
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
        GB = {
            class: "draw"
        },
        WB = {
            ref: "content",
            class: "content"
        },
        HB = {
            class: "constrain"
        },
        VB = {
            key: 0
        };

    function KB(e, t, r, n, s, o) {
        const l = Rt("bb");
        return H(), z("div", GB, [Z("div", WB, [Z("div", HB, [e.player.prompt ? Ie((H(), z("div", VB, null, 512)), [
            [l, e.player.prompt]
        ]) : Se("", !0), Z("div", {
            ref: "stage",
            class: "stage",
            style: ic(e.stageDimensions)
        }, null, 4), Z("button", {
            onClick: t[0] || (t[0] = Zr((...u) => e.onSubmitClick && e.onSubmitClick(...u), ["prevent"]))
        }, _t(e.player.submitText || "SUBMIT"), 1)])], 512)])
    }
    const YB = ze(jB, [
            ["render", KB]
        ]),
        qB = it({
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
                            e.numberOfPlayer = this.player.joinedPlayers, e.locale = this.$ecastRoom.locale, Vl.gameStarted(this.$ecastRoom.appTag, e)
                        }
                    } catch (e) {
                        this.$handleEcastError(e)
                    }
                }
            }
        }),
        zB = ["textContent"],
        XB = ["textContent"],
        JB = ["textContent"],
        ZB = ["textContent"];

    function QB(e, t, r, n, s, o) {
        const l = Rt("t");
        return H(), z("div", {
            class: Me(["lobby-actions", {
                vip: e.player.hasControls
            }])
        }, [!e.messageLocation || e.messageLocation === "top" ? (H(), z("p", {
            key: 0,
            class: Me(e.localClasses.message),
            textContent: _t(e.joinedCountText)
        }, null, 10, zB)) : Se("", !0), e.player.hasControls ? (H(), z(et, {
            key: 1
        }, [e.player.status === "waitingForMore" ? (H(), z("p", {
            key: 0,
            class: Me(e.localClasses.status)
        }, _t(e.neededText), 3)) : Se("", !0), e.player.status === "canStart" ? (H(), z("button", {
            key: 1,
            class: Me(e.localClasses.action),
            onClick: t[0] || (t[0] = (...u) => e.onStartClick && e.onStartClick(...u)),
            textContent: _t(e.startText || e.$t("LOBBY.BUTTON_START"))
        }, null, 10, XB)) : Se("", !0), e.player.status === "countdown" ? (H(), z("button", {
            key: 2,
            class: Me(e.localClasses.action),
            onClick: t[1] || (t[1] = (...u) => e.onCancelClick && e.onCancelClick(...u)),
            textContent: _t(e.cancelText || e.$t("LOBBY.BUTTON_CANCEL"))
        }, null, 10, JB)) : Se("", !0)], 64)) : e.player.gamepadStart ? (H(), z(et, {
            key: 2
        }, [e.player.status === "waitingForMore" ? (H(), z("p", {
            key: 0,
            class: Me(e.localClasses.status)
        }, _t(e.neededText), 3)) : Se("", !0), e.player.status === "canStart" ? Ie((H(), z("p", {
            key: 1,
            class: Me(e.localClasses.status)
        }, null, 2)), [
            [l, "LOBBY.WAITING_FOR_GAMEPAD"]
        ]) : Se("", !0), e.player.status === "countdown" ? Ie((H(), z("p", {
            key: 2,
            class: Me(e.localClasses.status)
        }, null, 2)), [
            [l, "LOBBY.GAME_STARTING"]
        ]) : Se("", !0)], 64)) : (H(), z(et, {
            key: 3
        }, [e.player.status === "waitingForMore" ? (H(), z("p", {
            key: 0,
            class: Me(e.localClasses.status)
        }, _t(e.neededText), 3)) : Se("", !0), e.player.status === "canStart" ? (H(), z("p", {
            key: 1,
            class: Me(e.localClasses.status)
        }, _t(e.waitingForVIPText), 3)) : Se("", !0), e.player.status === "countdown" ? Ie((H(), z("p", {
            key: 2,
            class: Me(e.localClasses.status)
        }, null, 2)), [
            [l, "LOBBY.GAME_STARTING"]
        ]) : Se("", !0)], 64)), e.messageLocation === "bottom" ? (H(), z("p", {
            key: 4,
            class: Me(e.localClasses.message),
            textContent: _t(e.joinedCountText)
        }, null, 10, ZB)) : Se("", !0)], 2)
    }
    const OT = ze(qB, [
            ["render", QB]
        ]),
        e6 = it({
            components: {
                LobbyActions: OT
            },
            props: {
                player: Object
            }
        }),
        t6 = {
            class: "lobby"
        },
        r6 = {
            class: "constrain"
        };

    function n6(e, t, r, n, s, o) {
        const l = Mt("LobbyActions");
        return H(), z("div", t6, [Z("div", r6, [nt(l, {
            player: e.player
        }, null, 8, ["player"])])])
    }
    const i6 = ze(e6, [
            ["render", n6]
        ]),
        s6 = it({
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
                            e.isSequal = !0, e.locale = this.$ecastRoom.locale, Vl.gameStarted(this.$ecastRoom.appTag, e)
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

    function a6(e, t, r, n, s, o) {
        const l = Rt("t");
        return e.player && e.player.status ? (H(), z("div", {
            key: 0,
            class: Me(["post-game-actions", {
                vip: e.player.hasControls
            }])
        }, [!e.messageLocation || e.messageLocation === "top" ? Ie((H(), z("p", {
            key: 0,
            class: Me(e.localClasses.message)
        }, null, 2)), [
            [l, "POST_GAME.PLAY_AGAIN"]
        ]) : Se("", !0), e.player.hasControls ? (H(), z(et, {
            key: 1
        }, [e.player.status === "waiting" ? Ie((H(), z("button", {
            key: 0,
            class: Me(e.localClasses.action),
            onClick: t[0] || (t[0] = (...u) => e.onSamePlayersClick && e.onSamePlayersClick(...u))
        }, null, 2)), [
            [l, "POST_GAME.BUTTON_SAME_PLAYERS"]
        ]) : Se("", !0), e.player.status === "waiting" ? Ie((H(), z("button", {
            key: 1,
            class: Me(e.localClasses.action),
            onClick: t[1] || (t[1] = (...u) => e.onNewPlayersClick && e.onNewPlayersClick(...u))
        }, null, 2)), [
            [l, "POST_GAME.BUTTON_NEW_PLAYERS"]
        ]) : Se("", !0), e.player.status === "countdown" ? Ie((H(), z("button", {
            key: 2,
            class: Me(e.localClasses.action),
            onClick: t[2] || (t[2] = (...u) => e.onCancelClick && e.onCancelClick(...u))
        }, null, 2)), [
            [l, "LOBBY.BUTTON_CANCEL"]
        ]) : Se("", !0)], 64)) : e.player.gamepadStart ? Ie((H(), z("p", {
            key: 2,
            class: Me(e.localClasses.status)
        }, null, 2)), [
            [l, "LOBBY.WAITING_FOR_GAMEPAD"]
        ]) : (H(), z("p", {
            key: 3,
            class: Me(e.localClasses.status)
        }, _t(e.waitingForVIPText), 3)), e.messageLocation === "bottom" ? Ie((H(), z("p", {
            key: 4,
            class: Me(e.localClasses.message)
        }, null, 2)), [
            [l, "POST_GAME.PLAY_AGAIN"]
        ]) : Se("", !0)], 2)) : Se("", !0)
    }
    const wT = ze(s6, [
            ["render", a6]
        ]),
        o6 = it({
            components: {
                PostGameActions: wT
            },
            props: {
                player: Object
            }
        }),
        l6 = {
            class: "post-game"
        },
        c6 = {
            class: "constrain"
        };

    function u6(e, t, r, n, s, o) {
        const l = Mt("PostGameActions");
        return H(), z("div", l6, [Z("div", c6, [nt(l, {
            player: e.player
        }, null, 8, ["player"])])])
    }
    const f6 = ze(o6, [
            ["render", u6]
        ]),
        d6 = it({
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
        h6 = {
            class: "single-text-entry"
        },
        p6 = {
            class: "constrain"
        },
        g6 = {
            key: 0
        },
        m6 = {
            key: 1,
            for: "input"
        },
        v6 = ["value", "rows", "placeholder", "disabled"],
        y6 = ["value", "placeholder", "disabled"];

    function _6(e, t, r, n, s, o) {
        const l = Rt("bb");
        return H(), z("div", h6, [Z("div", p6, [e.player.prompt ? Ie((H(), z("p", g6, null, 512)), [
            [l, e.player.prompt]
        ]) : Se("", !0), e.player.label ? Ie((H(), z("label", m6, null, 512)), [
            [l, e.player.label]
        ]) : Se("", !0), e.player.isMultiline ? (H(), z("textarea", {
            key: 2,
            id: "input",
            value: e.value,
            rows: e.player.lines || 2,
            placeholder: e.player.placeholder,
            disabled: e.player.isDisabled,
            onInput: t[0] || (t[0] = (...u) => e.onValueInput && e.onValueInput(...u))
        }, null, 40, v6)) : (H(), z("input", {
            key: 3,
            id: "input",
            type: "text",
            value: e.value,
            placeholder: e.player.placeholder,
            disabled: e.player.isDisabled,
            onInput: t[1] || (t[1] = (...u) => e.onValueInput && e.onValueInput(...u))
        }, null, 40, y6)), Ie(Z("button", {
            onClick: t[2] || (t[2] = Zr((...u) => e.onSubmitClick && e.onSubmitClick(...u), ["prevent"]))
        }, null, 512), [
            [l, e.player.submitText || "SUBMIT"]
        ])])])
    }
    const b6 = ze(d6, [
            ["render", _6]
        ]),
        E6 = it({
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
        T6 = {
            class: "multi-text-entry"
        },
        S6 = {
            class: "constrain"
        },
        O6 = {
            key: 0
        },
        w6 = ["for"],
        C6 = ["id", "value", "rows", "placeholder", "disabled", "onInput"],
        $6 = ["id", "value", "placeholder", "disabled", "onInput"];

    function I6(e, t, r, n, s, o) {
        const l = Rt("bb");
        return H(), z("div", T6, [Z("div", S6, [e.player.prompt ? Ie((H(), z("p", O6, null, 512)), [
            [l, e.player.prompt]
        ]) : Se("", !0), (H(!0), z(et, null, un(e.player.inputs, (u, f) => (H(), z(et, null, [u.label ? Ie((H(), z("label", {
            key: `label-${u.key}`,
            for: `input-${f}`
        }, null, 8, w6)), [
            [l, u.label]
        ]) : Se("", !0), u.isMultiline ? (H(), z("textarea", {
            id: `input-${f}`,
            key: `input-${f}`,
            value: e.values[f],
            rows: u.lines || 2,
            placeholder: u.placeholder,
            disabled: u.isDisabled,
            onInput: h => e.onValueInput(h, f)
        }, null, 40, C6)) : (H(), z("input", {
            id: `input-${f}`,
            key: `input-${u.key}`,
            type: "text",
            value: e.values[f],
            placeholder: u.placeholder,
            disabled: u.isDisabled,
            onInput: h => e.onValueInput(h, f)
        }, null, 40, $6))], 64))), 256)), Ie(Z("button", {
            onClick: t[0] || (t[0] = Zr((...u) => e.onSubmitClick && e.onSubmitClick(...u), ["prevent"]))
        }, null, 512), [
            [l, e.player.submitText || "SUBMIT"]
        ])])])
    }
    const A6 = ze(E6, [
            ["render", I6]
        ]),
        R6 = it({
            props: {
                player: Object
            }
        }),
        N6 = {
            class: "waiting"
        },
        L6 = {
            class: "constrain"
        },
        P6 = {
            key: 0
        };

    function k6(e, t, r, n, s, o) {
        const l = Rt("bb");
        return H(), z("div", N6, [Z("div", L6, [e.player.message ? Ie((H(), z("p", P6, null, 512)), [
            [l, e.player.message]
        ]) : Se("", !0)])])
    }
    const x6 = ze(R6, [
            ["render", k6]
        ]),
        D6 = it({
            components: {
                Choices: B2,
                Doodle: BB,
                Draw: YB,
                Lobby: i6,
                PostGame: f6,
                SingleTextEntry: b6,
                MultiTextEntry: A6,
                Waiting: x6
            },
            props: {
                applyStyling: {
                    type: Boolean,
                    default: !0
                },
                player: Object
            }
        });

    function M6(e, t, r, n, s, o) {
        return e.player ? (H(), lr(yc(e.player.kind), {
            key: 0,
            player: e.player,
            class: Me({
                fallback: e.applyStyling
            })
        }, null, 8, ["player", "class"])) : Se("", !0)
    }
    const F6 = ze(D6, [
            ["render", M6]
        ]),
        U6 = it({
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
                Vl.galleryImpression(this.artifact.categoryId, "post_game")
            },
            methods: {
                onLinkClick() {
                    Vl.galleryClick(this.artifact.categoryId, "post_game"), ro.setAsViewed(0)
                }
            }
        }),
        B6 = ["href", "aria-label"];

    function j6(e, t, r, n, s, o) {
        return e.link ? (H(), z("a", {
            key: 0,
            class: Me([{
                "no-content": !e.hasProvidedContent
            }, "artifact-link"]),
            target: "_blank",
            href: e.link,
            "aria-label": e.$t("POST_GAME.GALLERY_LINK"),
            onClick: t[0] || (t[0] = (...l) => e.onLinkClick && e.onLinkClick(...l))
        }, [AE(e.$slots, "default")], 10, B6)) : Se("", !0)
    }
    const G6 = ze(U6, [
            ["render", j6]
        ]),
        W6 = it({
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
                    if (this.sanitizers && (t.value = ST.withTypes(t.value, [...this.sanitizers])), t.value.length > r) {
                        t.value = t.value.substring(0, r);
                        return
                    }
                    this.$emit("update:modelValue", t.value), await this.$nextTick(), t.value !== this.modelValue && (t.value = this.modelValue)
                }
            }
        }),
        H6 = ["value"];

    function V6(e, t, r, n, s, o) {
        return H(), z("input", {
            ref: "input",
            value: e.modelValue,
            onInput: t[0] || (t[0] = (...l) => e.onInput && e.onInput(...l))
        }, null, 40, H6)
    }
    const CT = ze(W6, [
        ["render", V6]
    ]);
    var Fi, vl, Wa = typeof Map == "function" ? new Map : (Fi = [], vl = [], {
            has: function(e) {
                return Fi.indexOf(e) > -1
            },
            get: function(e) {
                return vl[Fi.indexOf(e)]
            },
            set: function(e, t) {
                Fi.indexOf(e) === -1 && (Fi.push(e), vl.push(t))
            },
            delete: function(e) {
                var t = Fi.indexOf(e);
                t > -1 && (Fi.splice(t, 1), vl.splice(t, 1))
            }
        }),
        $T = function(e) {
            return new Event(e, {
                bubbles: !0
            })
        };
    try {
        new Event("test")
    } catch {
        $T = function(t) {
            var r = document.createEvent("Event");
            return r.initEvent(t, !0, !1), r
        }
    }

    function K6(e) {
        var t = Wa.get(e);
        t && t.destroy()
    }

    function Y6(e) {
        var t = Wa.get(e);
        t && t.update()
    }
    var xa = null;
    typeof window > "u" || typeof window.getComputedStyle != "function" ? ((xa = function(e) {
        return e
    }).destroy = function(e) {
        return e
    }, xa.update = function(e) {
        return e
    }) : ((xa = function(e, t) {
        return e && Array.prototype.forEach.call(e.length ? e : [e], function(r) {
            return function(n) {
                if (n && n.nodeName && n.nodeName === "TEXTAREA" && !Wa.has(n)) {
                    var s, o = null,
                        l = null,
                        u = null,
                        f = function() {
                            n.clientWidth !== l && E()
                        },
                        h = function(C) {
                            window.removeEventListener("resize", f, !1), n.removeEventListener("input", E, !1), n.removeEventListener("keyup", E, !1), n.removeEventListener("autosize:destroy", h, !1), n.removeEventListener("autosize:update", E, !1), Object.keys(C).forEach(function(P) {
                                n.style[P] = C[P]
                            }), Wa.delete(n)
                        }.bind(n, {
                            height: n.style.height,
                            resize: n.style.resize,
                            overflowY: n.style.overflowY,
                            overflowX: n.style.overflowX,
                            wordWrap: n.style.wordWrap
                        });
                    n.addEventListener("autosize:destroy", h, !1), "onpropertychange" in n && "oninput" in n && n.addEventListener("keyup", E, !1), window.addEventListener("resize", f, !1), n.addEventListener("input", E, !1), n.addEventListener("autosize:update", E, !1), n.style.overflowX = "hidden", n.style.wordWrap = "break-word", Wa.set(n, {
                        destroy: h,
                        update: E
                    }), (s = window.getComputedStyle(n, null)).resize === "vertical" ? n.style.resize = "none" : s.resize === "both" && (n.style.resize = "horizontal"), o = s.boxSizing === "content-box" ? -(parseFloat(s.paddingTop) + parseFloat(s.paddingBottom)) : parseFloat(s.borderTopWidth) + parseFloat(s.borderBottomWidth), isNaN(o) && (o = 0), E()
                }

                function g(C) {
                    var P = n.style.width;
                    n.style.width = "0px", n.style.width = P, n.style.overflowY = C
                }

                function y() {
                    if (n.scrollHeight !== 0) {
                        var C = function(M) {
                                for (var B = []; M && M.parentNode && M.parentNode instanceof Element;) M.parentNode.scrollTop && B.push({
                                    node: M.parentNode,
                                    scrollTop: M.parentNode.scrollTop
                                }), M = M.parentNode;
                                return B
                            }(n),
                            P = document.documentElement && document.documentElement.scrollTop;
                        n.style.height = "", n.style.height = n.scrollHeight + o + "px", l = n.clientWidth, C.forEach(function(M) {
                            M.node.scrollTop = M.scrollTop
                        }), P && (document.documentElement.scrollTop = P)
                    }
                }

                function E() {
                    y();
                    var C = Math.round(parseFloat(n.style.height)),
                        P = window.getComputedStyle(n, null),
                        M = P.boxSizing === "content-box" ? Math.round(parseFloat(P.height)) : n.offsetHeight;
                    if (M < C ? P.overflowY === "hidden" && (g("scroll"), y(), M = P.boxSizing === "content-box" ? Math.round(parseFloat(window.getComputedStyle(n, null).height)) : n.offsetHeight) : P.overflowY !== "hidden" && (g("hidden"), y(), M = P.boxSizing === "content-box" ? Math.round(parseFloat(window.getComputedStyle(n, null).height)) : n.offsetHeight), u !== M) {
                        u = M;
                        var B = $T("autosize:resized");
                        try {
                            n.dispatchEvent(B)
                        } catch {}
                    }
                }
            }(r)
        }), e
    }).destroy = function(e) {
        return e && Array.prototype.forEach.call(e.length ? e : [e], K6), e
    }, xa.update = function(e) {
        return e && Array.prototype.forEach.call(e.length ? e : [e], Y6), e
    });
    var q6 = xa,
        z6 = {
            exports: {}
        },
        yl = function(e) {
            return e && e.Math == Math && e
        },
        Mr = yl(typeof globalThis == "object" && globalThis) || yl(typeof window == "object" && window) || yl(typeof self == "object" && self) || yl(typeof kt == "object" && kt) || function() {
            return this
        }() || Function("return this")(),
        np = {},
        Fr = function(e) {
            try {
                return !!e()
            } catch {
                return !0
            }
        },
        X6 = Fr,
        _i = !X6(function() {
            return Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1] != 7
        }),
        J6 = Fr,
        ip = !J6(function() {
            var e = function() {}.bind();
            return typeof e != "function" || e.hasOwnProperty("prototype")
        }),
        Z6 = ip,
        _l = Function.prototype.call,
        bi = Z6 ? _l.bind(_l) : function() {
            return _l.apply(_l, arguments)
        },
        IT = {},
        AT = {}.propertyIsEnumerable,
        RT = Object.getOwnPropertyDescriptor,
        Q6 = RT && !AT.call({
            1: 2
        }, 1);
    IT.f = Q6 ? function(t) {
        var r = RT(this, t);
        return !!r && r.enumerable
    } : AT;
    var NT = function(e, t) {
            return {
                enumerable: !(e & 1),
                configurable: !(e & 2),
                writable: !(e & 4),
                value: t
            }
        },
        LT = ip,
        PT = Function.prototype,
        e7 = PT.bind,
        Nd = PT.call,
        t7 = LT && e7.bind(Nd, Nd),
        fr = LT ? function(e) {
            return e && t7(e)
        } : function(e) {
            return e && function() {
                return Nd.apply(e, arguments)
            }
        },
        kT = fr,
        r7 = kT({}.toString),
        n7 = kT("".slice),
        kc = function(e) {
            return n7(r7(e), 8, -1)
        },
        i7 = fr,
        s7 = Fr,
        a7 = kc,
        Rf = Object,
        o7 = i7("".split),
        l7 = s7(function() {
            return !Rf("z").propertyIsEnumerable(0)
        }) ? function(e) {
            return a7(e) == "String" ? o7(e, "") : Rf(e)
        } : Rf,
        c7 = TypeError,
        ho = function(e) {
            if (e == null) throw c7("Can't call method on " + e);
            return e
        },
        u7 = l7,
        f7 = ho,
        xc = function(e) {
            return u7(f7(e))
        },
        Cr = function(e) {
            return typeof e == "function"
        },
        d7 = Cr,
        ua = function(e) {
            return typeof e == "object" ? e !== null : d7(e)
        },
        Nf = Mr,
        h7 = Cr,
        p7 = function(e) {
            return h7(e) ? e : void 0
        },
        Dc = function(e, t) {
            return arguments.length < 2 ? p7(Nf[e]) : Nf[e] && Nf[e][t]
        },
        g7 = fr,
        xT = g7({}.isPrototypeOf),
        m7 = Dc,
        v7 = m7("navigator", "userAgent") || "",
        DT = Mr,
        Lf = v7,
        jy = DT.process,
        Gy = DT.Deno,
        Wy = jy && jy.versions || Gy && Gy.version,
        Hy = Wy && Wy.v8,
        sn, Jl;
    Hy && (sn = Hy.split("."), Jl = sn[0] > 0 && sn[0] < 4 ? 1 : +(sn[0] + sn[1]));
    !Jl && Lf && (sn = Lf.match(/Edge\/(\d+)/), (!sn || sn[1] >= 74) && (sn = Lf.match(/Chrome\/(\d+)/), sn && (Jl = +sn[1])));
    var y7 = Jl,
        Vy = y7,
        _7 = Fr,
        MT = !!Object.getOwnPropertySymbols && !_7(function() {
            var e = Symbol();
            return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && Vy && Vy < 41
        }),
        b7 = MT,
        FT = b7 && !Symbol.sham && typeof Symbol.iterator == "symbol",
        E7 = Dc,
        T7 = Cr,
        S7 = xT,
        O7 = FT,
        w7 = Object,
        UT = O7 ? function(e) {
            return typeof e == "symbol"
        } : function(e) {
            var t = E7("Symbol");
            return T7(t) && S7(t.prototype, w7(e))
        },
        C7 = String,
        $7 = function(e) {
            try {
                return C7(e)
            } catch {
                return "Object"
            }
        },
        I7 = Cr,
        A7 = $7,
        R7 = TypeError,
        N7 = function(e) {
            if (I7(e)) return e;
            throw R7(A7(e) + " is not a function")
        },
        L7 = N7,
        sp = function(e, t) {
            var r = e[t];
            return r == null ? void 0 : L7(r)
        },
        Pf = bi,
        kf = Cr,
        xf = ua,
        P7 = TypeError,
        k7 = function(e, t) {
            var r, n;
            if (t === "string" && kf(r = e.toString) && !xf(n = Pf(r, e)) || kf(r = e.valueOf) && !xf(n = Pf(r, e)) || t !== "string" && kf(r = e.toString) && !xf(n = Pf(r, e))) return n;
            throw P7("Can't convert object to primitive value")
        },
        Mc = {
            exports: {}
        },
        Ky = Mr,
        x7 = Object.defineProperty,
        ap = function(e, t) {
            try {
                x7(Ky, e, {
                    value: t,
                    configurable: !0,
                    writable: !0
                })
            } catch {
                Ky[e] = t
            }
            return t
        },
        D7 = Mr,
        M7 = ap,
        Yy = "__core-js_shared__",
        F7 = D7[Yy] || M7(Yy, {}),
        op = F7,
        qy = op;
    (Mc.exports = function(e, t) {
        return qy[e] || (qy[e] = t !== void 0 ? t : {})
    })("versions", []).push({
        version: "3.23.4",
        mode: "global",
        copyright: "\xA9 2014-2022 Denis Pushkarev (zloirock.ru)",
        license: "https://github.com/zloirock/core-js/blob/v3.23.4/LICENSE",
        source: "https://github.com/zloirock/core-js"
    });
    var U7 = ho,
        B7 = Object,
        BT = function(e) {
            return B7(U7(e))
        },
        j7 = fr,
        G7 = BT,
        W7 = j7({}.hasOwnProperty),
        Ei = Object.hasOwn || function(t, r) {
            return W7(G7(t), r)
        },
        H7 = fr,
        V7 = 0,
        K7 = Math.random(),
        Y7 = H7(1 .toString),
        jT = function(e) {
            return "Symbol(" + (e === void 0 ? "" : e) + ")_" + Y7(++V7 + K7, 36)
        },
        q7 = Mr,
        z7 = Mc.exports,
        zy = Ei,
        X7 = jT,
        Xy = MT,
        GT = FT,
        ws = z7("wks"),
        rs = q7.Symbol,
        Jy = rs && rs.for,
        J7 = GT ? rs : rs && rs.withoutSetter || X7,
        ls = function(e) {
            if (!zy(ws, e) || !(Xy || typeof ws[e] == "string")) {
                var t = "Symbol." + e;
                Xy && zy(rs, e) ? ws[e] = rs[e] : GT && Jy ? ws[e] = Jy(t) : ws[e] = J7(t)
            }
            return ws[e]
        },
        Z7 = bi,
        Zy = ua,
        Qy = UT,
        Q7 = sp,
        ej = k7,
        tj = ls,
        rj = TypeError,
        nj = tj("toPrimitive"),
        ij = function(e, t) {
            if (!Zy(e) || Qy(e)) return e;
            var r = Q7(e, nj),
                n;
            if (r) {
                if (t === void 0 && (t = "default"), n = Z7(r, e, t), !Zy(n) || Qy(n)) return n;
                throw rj("Can't convert object to primitive value")
            }
            return t === void 0 && (t = "number"), ej(e, t)
        },
        sj = ij,
        aj = UT,
        WT = function(e) {
            var t = sj(e, "string");
            return aj(t) ? t : t + ""
        },
        oj = Mr,
        e_ = ua,
        Ld = oj.document,
        lj = e_(Ld) && e_(Ld.createElement),
        HT = function(e) {
            return lj ? Ld.createElement(e) : {}
        },
        cj = _i,
        uj = Fr,
        fj = HT,
        VT = !cj && !uj(function() {
            return Object.defineProperty(fj("div"), "a", {
                get: function() {
                    return 7
                }
            }).a != 7
        }),
        dj = _i,
        hj = bi,
        pj = IT,
        gj = NT,
        mj = xc,
        vj = WT,
        yj = Ei,
        _j = VT,
        t_ = Object.getOwnPropertyDescriptor;
    np.f = dj ? t_ : function(t, r) {
        if (t = mj(t), r = vj(r), _j) try {
            return t_(t, r)
        } catch {}
        if (yj(t, r)) return gj(!hj(pj.f, t, r), t[r])
    };
    var po = {},
        bj = _i,
        Ej = Fr,
        KT = bj && Ej(function() {
            return Object.defineProperty(function() {}, "prototype", {
                value: 42,
                writable: !1
            }).prototype != 42
        }),
        Tj = ua,
        Sj = String,
        Oj = TypeError,
        cs = function(e) {
            if (Tj(e)) return e;
            throw Oj(Sj(e) + " is not an object")
        },
        wj = _i,
        Cj = VT,
        $j = KT,
        bl = cs,
        r_ = WT,
        Ij = TypeError,
        Df = Object.defineProperty,
        Aj = Object.getOwnPropertyDescriptor,
        Mf = "enumerable",
        Ff = "configurable",
        Uf = "writable";
    po.f = wj ? $j ? function(t, r, n) {
        if (bl(t), r = r_(r), bl(n), typeof t == "function" && r === "prototype" && "value" in n && Uf in n && !n[Uf]) {
            var s = Aj(t, r);
            s && s[Uf] && (t[r] = n.value, n = {
                configurable: Ff in n ? n[Ff] : s[Ff],
                enumerable: Mf in n ? n[Mf] : s[Mf],
                writable: !1
            })
        }
        return Df(t, r, n)
    } : Df : function(t, r, n) {
        if (bl(t), r = r_(r), bl(n), Cj) try {
            return Df(t, r, n)
        } catch {}
        if ("get" in n || "set" in n) throw Ij("Accessors not supported");
        return "value" in n && (t[r] = n.value), t
    };
    var Rj = _i,
        Nj = po,
        Lj = NT,
        lp = Rj ? function(e, t, r) {
            return Nj.f(e, t, Lj(1, r))
        } : function(e, t, r) {
            return e[t] = r, e
        },
        YT = {
            exports: {}
        },
        Pd = _i,
        Pj = Ei,
        qT = Function.prototype,
        kj = Pd && Object.getOwnPropertyDescriptor,
        cp = Pj(qT, "name"),
        xj = cp && function() {}.name === "something",
        Dj = cp && (!Pd || Pd && kj(qT, "name").configurable),
        Mj = {
            EXISTS: cp,
            PROPER: xj,
            CONFIGURABLE: Dj
        },
        Fj = fr,
        Uj = Cr,
        kd = op,
        Bj = Fj(Function.toString);
    Uj(kd.inspectSource) || (kd.inspectSource = function(e) {
        return Bj(e)
    });
    var zT = kd.inspectSource,
        jj = Mr,
        Gj = Cr,
        Wj = zT,
        n_ = jj.WeakMap,
        Hj = Gj(n_) && /native code/.test(Wj(n_)),
        Vj = Mc.exports,
        Kj = jT,
        i_ = Vj("keys"),
        XT = function(e) {
            return i_[e] || (i_[e] = Kj(e))
        },
        up = {},
        Yj = Hj,
        JT = Mr,
        Bf = fr,
        qj = ua,
        zj = lp,
        jf = Ei,
        Gf = op,
        Xj = XT,
        Jj = up,
        s_ = "Object already initialized",
        xd = JT.TypeError,
        Zj = JT.WeakMap,
        Zl, no, Ql, Qj = function(e) {
            return Ql(e) ? no(e) : Zl(e, {})
        },
        eG = function(e) {
            return function(t) {
                var r;
                if (!qj(t) || (r = no(t)).type !== e) throw xd("Incompatible receiver, " + e + " required");
                return r
            }
        };
    if (Yj || Gf.state) {
        var Ui = Gf.state || (Gf.state = new Zj),
            tG = Bf(Ui.get),
            a_ = Bf(Ui.has),
            rG = Bf(Ui.set);
        Zl = function(e, t) {
            if (a_(Ui, e)) throw new xd(s_);
            return t.facade = e, rG(Ui, e, t), t
        }, no = function(e) {
            return tG(Ui, e) || {}
        }, Ql = function(e) {
            return a_(Ui, e)
        }
    } else {
        var Cs = Xj("state");
        Jj[Cs] = !0, Zl = function(e, t) {
            if (jf(e, Cs)) throw new xd(s_);
            return t.facade = e, zj(e, Cs, t), t
        }, no = function(e) {
            return jf(e, Cs) ? e[Cs] : {}
        }, Ql = function(e) {
            return jf(e, Cs)
        }
    }
    var ZT = {
            set: Zl,
            get: no,
            has: Ql,
            enforce: Qj,
            getterFor: eG
        },
        nG = Fr,
        iG = Cr,
        El = Ei,
        Dd = _i,
        sG = Mj.CONFIGURABLE,
        aG = zT,
        QT = ZT,
        oG = QT.enforce,
        lG = QT.get,
        Pl = Object.defineProperty,
        cG = Dd && !nG(function() {
            return Pl(function() {}, "length", {
                value: 8
            }).length !== 8
        }),
        uG = String(String).split("String"),
        fG = YT.exports = function(e, t, r) {
            String(t).slice(0, 7) === "Symbol(" && (t = "[" + String(t).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), r && r.getter && (t = "get " + t), r && r.setter && (t = "set " + t), (!El(e, "name") || sG && e.name !== t) && (Dd ? Pl(e, "name", {
                value: t,
                configurable: !0
            }) : e.name = t), cG && r && El(r, "arity") && e.length !== r.arity && Pl(e, "length", {
                value: r.arity
            });
            try {
                r && El(r, "constructor") && r.constructor ? Dd && Pl(e, "prototype", {
                    writable: !1
                }) : e.prototype && (e.prototype = void 0)
            } catch {}
            var n = oG(e);
            return El(n, "source") || (n.source = uG.join(typeof t == "string" ? t : "")), e
        };
    Function.prototype.toString = fG(function() {
        return iG(this) && lG(this).source || aG(this)
    }, "toString");
    var dG = Cr,
        hG = po,
        pG = YT.exports,
        gG = ap,
        e0 = function(e, t, r, n) {
            n || (n = {});
            var s = n.enumerable,
                o = n.name !== void 0 ? n.name : t;
            if (dG(r) && pG(r, o, n), n.global) s ? e[t] = r : gG(t, r);
            else {
                try {
                    n.unsafe ? e[t] && (s = !0) : delete e[t]
                } catch {}
                s ? e[t] = r : hG.f(e, t, {
                    value: r,
                    enumerable: !1,
                    configurable: !n.nonConfigurable,
                    writable: !n.nonWritable
                })
            }
            return e
        },
        t0 = {},
        mG = Math.ceil,
        vG = Math.floor,
        yG = Math.trunc || function(t) {
            var r = +t;
            return (r > 0 ? vG : mG)(r)
        },
        _G = yG,
        Fc = function(e) {
            var t = +e;
            return t !== t || t === 0 ? 0 : _G(t)
        },
        bG = Fc,
        EG = Math.max,
        TG = Math.min,
        SG = function(e, t) {
            var r = bG(e);
            return r < 0 ? EG(r + t, 0) : TG(r, t)
        },
        OG = Fc,
        wG = Math.min,
        r0 = function(e) {
            return e > 0 ? wG(OG(e), 9007199254740991) : 0
        },
        CG = r0,
        $G = function(e) {
            return CG(e.length)
        },
        IG = xc,
        AG = SG,
        RG = $G,
        o_ = function(e) {
            return function(t, r, n) {
                var s = IG(t),
                    o = RG(s),
                    l = AG(n, o),
                    u;
                if (e && r != r) {
                    for (; o > l;)
                        if (u = s[l++], u != u) return !0
                } else
                    for (; o > l; l++)
                        if ((e || l in s) && s[l] === r) return e || l || 0;
                return !e && -1
            }
        },
        NG = {
            includes: o_(!0),
            indexOf: o_(!1)
        },
        LG = fr,
        Wf = Ei,
        PG = xc,
        kG = NG.indexOf,
        xG = up,
        l_ = LG([].push),
        n0 = function(e, t) {
            var r = PG(e),
                n = 0,
                s = [],
                o;
            for (o in r) !Wf(xG, o) && Wf(r, o) && l_(s, o);
            for (; t.length > n;) Wf(r, o = t[n++]) && (~kG(s, o) || l_(s, o));
            return s
        },
        fp = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
        DG = n0,
        MG = fp,
        FG = MG.concat("length", "prototype");
    t0.f = Object.getOwnPropertyNames || function(t) {
        return DG(t, FG)
    };
    var i0 = {};
    i0.f = Object.getOwnPropertySymbols;
    var UG = Dc,
        BG = fr,
        jG = t0,
        GG = i0,
        WG = cs,
        HG = BG([].concat),
        VG = UG("Reflect", "ownKeys") || function(t) {
            var r = jG.f(WG(t)),
                n = GG.f;
            return n ? HG(r, n(t)) : r
        },
        c_ = Ei,
        KG = VG,
        YG = np,
        qG = po,
        zG = function(e, t, r) {
            for (var n = KG(t), s = qG.f, o = YG.f, l = 0; l < n.length; l++) {
                var u = n[l];
                !c_(e, u) && !(r && c_(r, u)) && s(e, u, o(t, u))
            }
        },
        XG = Fr,
        JG = Cr,
        ZG = /#|\.prototype\./,
        go = function(e, t) {
            var r = e9[QG(e)];
            return r == r9 ? !0 : r == t9 ? !1 : JG(t) ? XG(t) : !!t
        },
        QG = go.normalize = function(e) {
            return String(e).replace(ZG, ".").toLowerCase()
        },
        e9 = go.data = {},
        t9 = go.NATIVE = "N",
        r9 = go.POLYFILL = "P",
        n9 = go,
        Hf = Mr,
        i9 = np.f,
        s9 = lp,
        a9 = e0,
        o9 = ap,
        l9 = zG,
        c9 = n9,
        s0 = function(e, t) {
            var r = e.target,
                n = e.global,
                s = e.stat,
                o, l, u, f, h, g;
            if (n ? l = Hf : s ? l = Hf[r] || o9(r, {}) : l = (Hf[r] || {}).prototype, l)
                for (u in t) {
                    if (h = t[u], e.dontCallGetSet ? (g = i9(l, u), f = g && g.value) : f = l[u], o = c9(n ? u : r + (s ? "." : "#") + u, e.forced), !o && f !== void 0) {
                        if (typeof h == typeof f) continue;
                        l9(h, f)
                    }(e.sham || f && f.sham) && s9(h, "sham", !0), a9(l, u, h, e)
                }
        },
        u9 = ua,
        f9 = kc,
        d9 = ls,
        h9 = d9("match"),
        p9 = function(e) {
            var t;
            return u9(e) && ((t = e[h9]) !== void 0 ? !!t : f9(e) == "RegExp")
        },
        g9 = ls,
        m9 = g9("toStringTag"),
        a0 = {};
    a0[m9] = "z";
    var v9 = String(a0) === "[object z]",
        y9 = v9,
        _9 = Cr,
        kl = kc,
        b9 = ls,
        E9 = b9("toStringTag"),
        T9 = Object,
        S9 = kl(function() {
            return arguments
        }()) == "Arguments",
        O9 = function(e, t) {
            try {
                return e[t]
            } catch {}
        },
        w9 = y9 ? kl : function(e) {
            var t, r, n;
            return e === void 0 ? "Undefined" : e === null ? "Null" : typeof(r = O9(t = T9(e), E9)) == "string" ? r : S9 ? kl(t) : (n = kl(t)) == "Object" && _9(t.callee) ? "Arguments" : n
        },
        C9 = w9,
        $9 = String,
        Uc = function(e) {
            if (C9(e) === "Symbol") throw TypeError("Cannot convert a Symbol value to a string");
            return $9(e)
        },
        I9 = cs,
        o0 = function() {
            var e = I9(this),
                t = "";
            return e.hasIndices && (t += "d"), e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.unicodeSets && (t += "v"), e.sticky && (t += "y"), t
        },
        A9 = bi,
        R9 = Ei,
        N9 = xT,
        L9 = o0,
        u_ = RegExp.prototype,
        P9 = function(e) {
            var t = e.flags;
            return t === void 0 && !("flags" in u_) && !R9(e, "flags") && N9(u_, e) ? A9(L9, e) : t
        },
        dp = fr,
        k9 = BT,
        x9 = Math.floor,
        Vf = dp("".charAt),
        D9 = dp("".replace),
        Kf = dp("".slice),
        M9 = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
        F9 = /\$([$&'`]|\d{1,2})/g,
        l0 = function(e, t, r, n, s, o) {
            var l = r + e.length,
                u = n.length,
                f = F9;
            return s !== void 0 && (s = k9(s), f = M9), D9(o, f, function(h, g) {
                var y;
                switch (Vf(g, 0)) {
                    case "$":
                        return "$";
                    case "&":
                        return e;
                    case "`":
                        return Kf(t, 0, r);
                    case "'":
                        return Kf(t, l);
                    case "<":
                        y = s[Kf(g, 1, -1)];
                        break;
                    default:
                        var E = +g;
                        if (E === 0) return h;
                        if (E > u) {
                            var C = x9(E / 10);
                            return C === 0 ? h : C <= u ? n[C - 1] === void 0 ? Vf(g, 1) : n[C - 1] + Vf(g, 1) : h
                        }
                        y = n[E - 1]
                }
                return y === void 0 ? "" : y
            })
        },
        U9 = s0,
        B9 = bi,
        hp = fr,
        f_ = ho,
        j9 = Cr,
        G9 = p9,
        La = Uc,
        W9 = sp,
        H9 = P9,
        V9 = l0,
        K9 = ls,
        Y9 = K9("replace"),
        q9 = TypeError,
        c0 = hp("".indexOf);
    hp("".replace);
    var d_ = hp("".slice),
        z9 = Math.max,
        h_ = function(e, t, r) {
            return r > e.length ? -1 : t === "" ? r : c0(e, t, r)
        };
    U9({
        target: "String",
        proto: !0
    }, {
        replaceAll: function(t, r) {
            var n = f_(this),
                s, o, l, u, f, h, g, y, E, C = 0,
                P = 0,
                M = "";
            if (t != null) {
                if (s = G9(t), s && (o = La(f_(H9(t))), !~c0(o, "g"))) throw q9("`.replaceAll` does not allow non-global regexes");
                if (l = W9(t, Y9), l) return B9(l, t, n, r)
            }
            for (u = La(n), f = La(t), h = j9(r), h || (r = La(r)), g = f.length, y = z9(1, g), C = h_(u, f, 0); C !== -1;) E = h ? La(r(f, C, u)) : V9(f, u, C, [], void 0, r), M += d_(u, P, C) + E, P = C + g, C = h_(u, f, C + y);
            return P < u.length && (M += d_(u, P)), M
        }
    });
    var pp = Fr,
        X9 = Mr,
        gp = X9.RegExp,
        mp = pp(function() {
            var e = gp("a", "y");
            return e.lastIndex = 2, e.exec("abcd") != null
        }),
        J9 = mp || pp(function() {
            return !gp("a", "y").sticky
        }),
        Z9 = mp || pp(function() {
            var e = gp("^r", "gy");
            return e.lastIndex = 2, e.exec("str") != null
        }),
        Q9 = {
            BROKEN_CARET: Z9,
            MISSED_STICKY: J9,
            UNSUPPORTED_Y: mp
        },
        u0 = {},
        eW = n0,
        tW = fp,
        rW = Object.keys || function(t) {
            return eW(t, tW)
        },
        nW = _i,
        iW = KT,
        sW = po,
        aW = cs,
        oW = xc,
        lW = rW;
    u0.f = nW && !iW ? Object.defineProperties : function(t, r) {
        aW(t);
        for (var n = oW(r), s = lW(r), o = s.length, l = 0, u; o > l;) sW.f(t, u = s[l++], n[u]);
        return t
    };
    var cW = Dc,
        uW = cW("document", "documentElement"),
        fW = cs,
        dW = u0,
        p_ = fp,
        hW = up,
        pW = uW,
        gW = HT,
        mW = XT,
        g_ = ">",
        m_ = "<",
        Md = "prototype",
        Fd = "script",
        f0 = mW("IE_PROTO"),
        Yf = function() {},
        d0 = function(e) {
            return m_ + Fd + g_ + e + m_ + "/" + Fd + g_
        },
        v_ = function(e) {
            e.write(d0("")), e.close();
            var t = e.parentWindow.Object;
            return e = null, t
        },
        vW = function() {
            var e = gW("iframe"),
                t = "java" + Fd + ":",
                r;
            return e.style.display = "none", pW.appendChild(e), e.src = String(t), r = e.contentWindow.document, r.open(), r.write(d0("document.F=Object")), r.close(), r.F
        },
        Tl, xl = function() {
            try {
                Tl = new ActiveXObject("htmlfile")
            } catch {}
            xl = typeof document < "u" ? document.domain && Tl ? v_(Tl) : vW() : v_(Tl);
            for (var e = p_.length; e--;) delete xl[Md][p_[e]];
            return xl()
        };
    hW[f0] = !0;
    var yW = Object.create || function(t, r) {
            var n;
            return t !== null ? (Yf[Md] = fW(t), n = new Yf, Yf[Md] = null, n[f0] = t) : n = xl(), r === void 0 ? n : dW.f(n, r)
        },
        _W = Fr,
        bW = Mr,
        EW = bW.RegExp,
        TW = _W(function() {
            var e = EW(".", "s");
            return !(e.dotAll && e.exec(`
`) && e.flags === "s")
        }),
        SW = Fr,
        OW = Mr,
        wW = OW.RegExp,
        CW = SW(function() {
            var e = wW("(?<a>b)", "g");
            return e.exec("b").groups.a !== "b" || "b".replace(e, "$<a>c") !== "bc"
        }),
        Rs = bi,
        Bc = fr,
        $W = Uc,
        IW = o0,
        AW = Q9,
        RW = Mc.exports,
        NW = yW,
        LW = ZT.get,
        PW = TW,
        kW = CW,
        xW = RW("native-string-replace", String.prototype.replace),
        ec = RegExp.prototype.exec,
        Ud = ec,
        DW = Bc("".charAt),
        MW = Bc("".indexOf),
        FW = Bc("".replace),
        qf = Bc("".slice),
        Bd = function() {
            var e = /a/,
                t = /b*/g;
            return Rs(ec, e, "a"), Rs(ec, t, "a"), e.lastIndex !== 0 || t.lastIndex !== 0
        }(),
        h0 = AW.BROKEN_CARET,
        jd = /()??/.exec("")[1] !== void 0,
        UW = Bd || jd || h0 || PW || kW;
    UW && (Ud = function(t) {
        var r = this,
            n = LW(r),
            s = $W(t),
            o = n.raw,
            l, u, f, h, g, y, E;
        if (o) return o.lastIndex = r.lastIndex, l = Rs(Ud, o, s), r.lastIndex = o.lastIndex, l;
        var C = n.groups,
            P = h0 && r.sticky,
            M = Rs(IW, r),
            B = r.source,
            $ = 0,
            V = s;
        if (P && (M = FW(M, "y", ""), MW(M, "g") === -1 && (M += "g"), V = qf(s, r.lastIndex), r.lastIndex > 0 && (!r.multiline || r.multiline && DW(s, r.lastIndex - 1) !== `
`) && (B = "(?: " + B + ")", V = " " + V, $++), u = new RegExp("^(?:" + B + ")", M)), jd && (u = new RegExp("^" + B + "$(?!\\s)", M)), Bd && (f = r.lastIndex), h = Rs(ec, P ? u : r, V), P ? h ? (h.input = qf(h.input, $), h[0] = qf(h[0], $), h.index = r.lastIndex, r.lastIndex += h[0].length) : r.lastIndex = 0 : Bd && h && (r.lastIndex = r.global ? h.index + h[0].length : f), jd && h && h.length > 1 && Rs(xW, h[0], u, function() {
                for (g = 1; g < arguments.length - 2; g++) arguments[g] === void 0 && (h[g] = void 0)
            }), h && C)
            for (h.groups = y = NW(null), g = 0; g < C.length; g++) E = C[g], y[E[0]] = h[E[1]];
        return h
    });
    var vp = Ud,
        BW = s0,
        y_ = vp;
    BW({
        target: "RegExp",
        proto: !0,
        forced: /./.exec !== y_
    }, {
        exec: y_
    });
    var jW = ip,
        p0 = Function.prototype,
        __ = p0.apply,
        b_ = p0.call,
        GW = typeof Reflect == "object" && Reflect.apply || (jW ? b_.bind(__) : function() {
            return b_.apply(__, arguments)
        }),
        E_ = fr,
        T_ = e0,
        WW = vp,
        S_ = Fr,
        g0 = ls,
        HW = lp,
        VW = g0("species"),
        zf = RegExp.prototype,
        KW = function(e, t, r, n) {
            var s = g0(e),
                o = !S_(function() {
                    var h = {};
                    return h[s] = function() {
                        return 7
                    }, "" [e](h) != 7
                }),
                l = o && !S_(function() {
                    var h = !1,
                        g = /a/;
                    return e === "split" && (g = {}, g.constructor = {}, g.constructor[VW] = function() {
                        return g
                    }, g.flags = "", g[s] = /./ [s]), g.exec = function() {
                        return h = !0, null
                    }, g[s](""), !h
                });
            if (!o || !l || r) {
                var u = E_(/./ [s]),
                    f = t(s, "" [e], function(h, g, y, E, C) {
                        var P = E_(h),
                            M = g.exec;
                        return M === WW || M === zf.exec ? o && !C ? {
                            done: !0,
                            value: u(g, y, E)
                        } : {
                            done: !0,
                            value: P(y, g, E)
                        } : {
                            done: !1
                        }
                    });
                T_(String.prototype, e, f[0]), T_(zf, s, f[1])
            }
            n && HW(zf[s], "sham", !0)
        },
        yp = fr,
        YW = Fc,
        qW = Uc,
        zW = ho,
        XW = yp("".charAt),
        O_ = yp("".charCodeAt),
        JW = yp("".slice),
        w_ = function(e) {
            return function(t, r) {
                var n = qW(zW(t)),
                    s = YW(r),
                    o = n.length,
                    l, u;
                return s < 0 || s >= o ? e ? "" : void 0 : (l = O_(n, s), l < 55296 || l > 56319 || s + 1 === o || (u = O_(n, s + 1)) < 56320 || u > 57343 ? e ? XW(n, s) : l : e ? JW(n, s, s + 2) : (l - 55296 << 10) + (u - 56320) + 65536)
            }
        },
        ZW = {
            codeAt: w_(!1),
            charAt: w_(!0)
        },
        QW = ZW.charAt,
        eH = function(e, t, r) {
            return t + (r ? QW(e, t).length : 1)
        },
        C_ = bi,
        tH = cs,
        rH = Cr,
        nH = kc,
        iH = vp,
        sH = TypeError,
        aH = function(e, t) {
            var r = e.exec;
            if (rH(r)) {
                var n = C_(r, e, t);
                return n !== null && tH(n), n
            }
            if (nH(e) === "RegExp") return C_(iH, e, t);
            throw sH("RegExp#exec called on incompatible receiver")
        },
        oH = GW,
        $_ = bi,
        jc = fr,
        lH = KW,
        cH = Fr,
        uH = cs,
        fH = Cr,
        dH = Fc,
        hH = r0,
        $s = Uc,
        pH = ho,
        gH = eH,
        mH = sp,
        vH = l0,
        yH = aH,
        _H = ls,
        Gd = _H("replace"),
        bH = Math.max,
        EH = Math.min,
        TH = jc([].concat),
        Xf = jc([].push),
        I_ = jc("".indexOf),
        A_ = jc("".slice),
        SH = function(e) {
            return e === void 0 ? e : String(e)
        },
        OH = function() {
            return "a".replace(/./, "$0") === "$0"
        }(),
        R_ = function() {
            return /./ [Gd] ? /./ [Gd]("a", "$0") === "" : !1
        }(),
        wH = !cH(function() {
            var e = /./;
            return e.exec = function() {
                var t = [];
                return t.groups = {
                    a: "7"
                }, t
            }, "".replace(e, "$<a>") !== "7"
        });
    lH("replace", function(e, t, r) {
        var n = R_ ? "$" : "$0";
        return [function(o, l) {
            var u = pH(this),
                f = o == null ? void 0 : mH(o, Gd);
            return f ? $_(f, o, u, l) : $_(t, $s(u), o, l)
        }, function(s, o) {
            var l = uH(this),
                u = $s(s);
            if (typeof o == "string" && I_(o, n) === -1 && I_(o, "$<") === -1) {
                var f = r(t, l, u, o);
                if (f.done) return f.value
            }
            var h = fH(o);
            h || (o = $s(o));
            var g = l.global;
            if (g) {
                var y = l.unicode;
                l.lastIndex = 0
            }
            for (var E = [];;) {
                var C = yH(l, u);
                if (C === null || (Xf(E, C), !g)) break;
                var P = $s(C[0]);
                P === "" && (l.lastIndex = gH(u, hH(l.lastIndex), y))
            }
            for (var M = "", B = 0, $ = 0; $ < E.length; $++) {
                C = E[$];
                for (var V = $s(C[0]), q = bH(EH(dH(C.index), u.length), 0), G = [], j = 1; j < C.length; j++) Xf(G, SH(C[j]));
                var J = C.groups;
                if (h) {
                    var oe = TH([V], G, q, u);
                    J !== void 0 && Xf(oe, J);
                    var le = $s(oH(o, void 0, oe))
                } else le = vH(V, u, q, G, J, o);
                q >= B && (M += A_(u, B, q) + le, B = q + V.length)
            }
            return M + A_(u, B)
        }]
    }, !wH || !OH || R_);
    var CH = Mr,
        $H = fr,
        IH = function(e, t) {
            return $H(CH[e].prototype[t])
        },
        AH = IH,
        RH = AH("String", "replaceAll"),
        NH = RH,
        LH = NH,
        PH = LH,
        kH = PH,
        xH = kH,
        DH = xH;
    (function(e) {
        e.exports = DH
    })(z6);
    it({
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
            this.autosize && q6(this.$refs.textarea)
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
`, ""), this.sanitizers && (t.value = ST.withTypes(t.value, [...this.sanitizers])), t.value.length > r) {
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
    it({
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
            const e = ss();
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
    var Gi = {},
        Gc = {},
        m0 = {},
        Wc = {},
        _p = {};
    (function(e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.Token = void 0;
        var t = function() {
            function r(n, s, o, l) {
                this.type = n, this.content = s, this.attributes = o, this.text = l
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
    })(_p);
    Object.defineProperty(Wc, "__esModule", {
        value: !0
    });
    Wc.Tokenizer = void 0;
    var ti = _p,
        MH = function() {
            function e(t) {
                this.tags = t
            }
            return e.prototype.tokenizeString = function(t) {
                var r = this,
                    n = this.getTokens(t),
                    s = [],
                    o = !1,
                    l = "",
                    u = "";
                return n.forEach(function(f) {
                    var h = r.tags[f.content],
                        g = !0;
                    !h && !o ? f.convertToTextToken() : o ? f.type === ti.Token.Type.endTag && f.content === l ? (o = !1, s.push(e.createTextToken(u))) : (f.convertToTextToken(), u += f.content, g = !1) : h.noNesting && f.type === ti.Token.Type.startTag && (o = !0, l = f.content, u = ""), g && s.push(f)
                }), s
            }, e.prototype.getTokens = function(t) {
                for (var r = '\\[(/\\w*)\\]|\\[(\\w*)+(=(["])' + e.valueChars + "*\\4)?( (" + e.nameChars + '+)?=(["])(' + e.valueChars + "+)\\7)*\\]", n = new RegExp(r, "g"), s = [], o = n.exec(t), l = 0; o;) {
                    var u = o.index - l;
                    u > 0 && s.push(e.createTextToken(t.substr(l, u))), s.push(e.createTagToken(o)), l = n.lastIndex, o = n.exec(t)
                }
                var f = t.length - l;
                return f > 0 && s.push(e.createTextToken(t.substr(l, f))), s
            }, e.createTextToken = function(t) {
                return new ti.Token(ti.Token.Type.text, t)
            }, e.createTagToken = function(t) {
                if (!t[1]) {
                    for (var r = t[2], n = {}, s = new RegExp("(" + e.nameChars + '+)?=(["])(' + e.valueChars + "+)\\2", "g"), o = t[0].substr(1 + r.length, t[0].length - 2 - r.length), l = s.exec(o); l;) l[1] ? n[l[1]] = l[3] : n[r] = l[3], l = s.exec(o);
                    return new ti.Token(ti.Token.Type.startTag, r, n, t[0])
                }
                return new ti.Token(ti.Token.Type.endTag, t[1].substr(1, t[1].length - 1))
            }, e.nameChars = "[a-zA-Z0-9\\.\\-_:;/]", e.valueChars = "[a-zA-Z0-9\\.\\-_:;#/\\s]", e
        }();
    Wc.Tokenizer = MH;
    (function(e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.ParseTree = void 0;
        var t = Wc,
            r = _p,
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
                }, s.buildTree = function(o, l) {
                    var u = new t.Tokenizer(l),
                        f = u.tokenizeString(o),
                        h = new s({
                            type: s.Type.root,
                            content: o
                        });
                    return this.buildTreeFromTokens(h, f.reverse())
                }, s.buildTreeFromTokens = function(o, l, u) {
                    if (u === void 0 && (u = ""), !o) return null;
                    if (!l.length) return o;
                    var f = l.pop();
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
                            y = s.buildTreeFromTokens(h, l, g);
                        if (!y) return null;
                        o.subTrees.push(y)
                    }
                    if (f.type === r.Token.Type.endTag) {
                        var g = f.content;
                        return g === u ? o : null
                    }
                    return !l.length && u !== "" ? null : this.buildTreeFromTokens(o, l, u)
                }, s
            }();
        e.ParseTree = n,
            function(s) {
                (function(o) {
                    o[o.root = 0] = "root", o[o.text = 1] = "text", o[o.tag = 2] = "tag"
                })(s.Type || (s.Type = {}))
            }(n = e.ParseTree || (e.ParseTree = {})), e.ParseTree = n
    })(m0);
    var mo = {};
    Object.defineProperty(mo, "__esModule", {
        value: !0
    });
    mo.Tag = void 0;
    var FH = function() {
        function e(t) {
            var r;
            this.tagName = t.tagName, this.insertLineBreaks = t.insertLineBreaks, this.suppressLineBreaks = t.suppressLineBreaks, this.noNesting = t.noNesting, this.markupGenerator = (r = t.markupGenerator) !== null && r !== void 0 ? r : function(n, s) {
                return "<" + n.tagName + ">" + s + "</" + n.tagName + ">"
            }
        }
        return e.create = function(t, r, n) {
            var s, o, l;
            return n === void 0 && (n = {}), new e({
                tagName: t,
                insertLineBreaks: (s = n.insertLineBreaks) !== null && s !== void 0 ? s : !0,
                suppressLineBreaks: (o = n.suppressLineBreaks) !== null && o !== void 0 ? o : !1,
                noNesting: (l = n.noNesting) !== null && l !== void 0 ? l : !1,
                markupGenerator: r
            })
        }, e
    }();
    mo.Tag = FH;
    Object.defineProperty(Gc, "__esModule", {
        value: !0
    });
    Gc.BBCodeParser = void 0;
    var N_ = m0,
        L_ = mo,
        UH = function() {
            function e(t, r) {
                this.options = r, this.escapeHTML = !1, this.tags = t, r && (this.escapeHTML = r.escapeHTML)
            }
            return Object.defineProperty(e, "defaultTags", {
                get: function() {
                    return {
                        b: L_.Tag.create("b"),
                        i: L_.Tag.create("i")
                    }
                },
                enumerable: !1,
                configurable: !0
            }), e.prototype.parse = function(t, r, n, s) {
                r === void 0 && (r = !1), n === void 0 && (n = !0), s === void 0 && (s = !0);
                var o = N_.ParseTree.buildTree(t, this.tags);
                return !o || !o.isValid ? t : this.treeToHtml(o.subTrees, n, s, r)
            }, e.prototype.addTag = function(t, r) {
                this.tags[t] = r
            }, e.prototype.treeToHtml = function(t, r, n, s) {
                var o = this;
                s === void 0 && (s = !1);
                var l = "",
                    u = !1;
                return t.forEach(function(f) {
                    var h;
                    if (f.type === N_.ParseTree.Type.text) {
                        var g = f.content;
                        n && (g = o.escapeHTML ? e.escapeHTML(g) : g), r && !u && (g = g.replace(/(\r\n|\n|\r)/gm, "<br>"), u = !1), l += g
                    } else {
                        var y = o.tags[f.content],
                            E = o.treeToHtml(f.subTrees, y.insertLineBreaks, n, s);
                        s ? l += E : l += y.markupGenerator(y, E, (h = f.attributes) !== null && h !== void 0 ? h : {}), u = y.suppressLineBreaks
                    }
                }), l
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
    Gc.BBCodeParser = UH;
    (function(e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.Tag = e.BBCodeParser = void 0;
        var t = Gc;
        Object.defineProperty(e, "BBCodeParser", {
            enumerable: !0,
            get: function() {
                return t.BBCodeParser
            }
        });
        var r = mo;
        Object.defineProperty(e, "Tag", {
            enumerable: !0,
            get: function() {
                return r.Tag
            }
        })
    })(Gi);
    const BH = {
        install: e => {
            const t = {
                section: Gi.Tag.create("section", (o, l, {
                    section: u
                }) => `<div ${u?`class="section ${u}"`:'class="section"'}>${l}</div>`)
            };
            ["b", "bold", "B"].forEach(o => {
                t[o] = Gi.Tag.create(o, (l, u) => `<strong>${u}</strong>`)
            }), ["i", "italic", "I"].forEach(o => {
                t[o] = Gi.Tag.create(o, (l, u) => `<em>${u}</em>`)
            });
            const s = new Gi.BBCodeParser(t);
            e.directive("bb", {
                mounted(o, l) {
                    const u = document.createElement("div");
                    u.textContent = l.value, o.innerHTML = s.parse(u.innerHTML)
                },
                updated(o, l) {
                    const u = document.createElement("div");
                    u.textContent = l.value, o.innerHTML = s.parse(u.innerHTML)
                }
            }), e.mixin({
                beforeCreate() {
                    !this.$options.bb || Object.keys(this.$options.bb).forEach(o => {
                        const l = this.$options.bb[o];
                        if (l instanceof Function) {
                            s.addTag(o, Gi.Tag.create(o, l));
                            return
                        }
                        s.addTag(o, Gi.Tag.create(o, l.generator, l.options))
                    })
                }
            }), e.config.globalProperties.$bb = o => (typeof o != "string" && console.warn(`[BBCodePlugin] Received unexpected ${typeof o} with value ${o};converting to string before parsing.`), s.parse(String(o)))
        }
    };
    var v0 = {
        exports: {}
    };
    (function(e) {
        (function(t, r) {
            var n = t.KonamiCode,
                s = t.KonamiCode = r;
            s.noConflict = function() {
                return t.KonamiCode = n, s
            }, e.exports && (e.exports = r)
        })(kt, function t(r) {
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
            }, n.setListener = function(l) {
                return s.stopCodeCharSequence(), s.stopCodeGestureSequence(), s.listener = l || document, s.listenCodeCharSequence(), s.listenCodeGestureSequence(), s.debug && s.debug("Listener changed.", l), n
            }, n.setCallback = function(l) {
                return s.afterCodeSequenceCallback = typeof l == "function" && l || s.defaultCallback, s.debug && s.debug("Callback changed.", l), n
            }, n.setOptions = function(l) {
                return s.initOptions(l), n
            }, s.keptLastCodeChar = function() {
                s.input.length > s.konamiCodeChar.length && (s.input = s.input.substr(s.input.length - s.konamiCodeChar.length))
            }, s.defaultCallback = function() {
                s.debug && s.debug("Konami Code Sequence Entered. There is no action defined.")
            }, s.checkIfCodeCharIsValid = function() {
                s.input === s.konamiCodeChar && s.afterCodeSequenceCallback(n)
            }, s.codeSequenceEventKeyDown = function(l) {
                s.input += l.keyCode, s.keptLastCodeChar(), s.checkIfCodeCharIsValid()
            }, s.codeSequenceEventTouchMove = function(l) {
                var u;
                l.touches.length === 1 && s.capture === !0 && (u = l.touches[0], s.stopX = u.pageX, s.stopY = u.pageY, s.tap = !1, s.capture = !1, s.checkIfCodeGestureIsValid())
            }, s.codeSequenceEventTouchEnd = function() {
                s.tap === !0 && s.checkIfCodeGestureIsValid()
            }, s.codeSequenceEventTouchStart = function(l) {
                s.startX = l.changedTouches[0].pageX, s.startY = l.changedTouches[0].pageY, s.tap = !0, s.capture = !0
            }, s.stopCodeCharSequence = function() {
                s.listener.removeEventListener("keydown", s.codeSequenceEventKeyDown)
            }, s.stopCodeGestureSequence = function() {
                s.listener.removeEventListener("touchstart", s.codeSequenceEventTouchStart), s.listener.removeEventListener("touchmove", s.codeSequenceEventTouchMove), s.listener.removeEventListener("touchend", s.codeSequenceEventTouchEnd)
            }, s.listenCodeCharSequence = function() {
                s.stopCodeCharSequence(), s.listener.addEventListener("keydown", s.codeSequenceEventKeyDown)
            }, s.listenCodeGestureSequence = function() {
                s.originalCodeGesture = s.konamiCodeGesture, s.stopCodeGestureSequence(), s.listener.addEventListener("touchstart", s.codeSequenceEventTouchStart), s.listener.addEventListener("touchmove", s.codeSequenceEventTouchMove), s.listener.addEventListener("touchend", s.codeSequenceEventTouchEnd, !1)
            }, s.checkIfCodeGestureIsValid = function() {
                var l = Math.abs(s.startX - s.stopX),
                    u = Math.abs(s.startY - s.stopY),
                    f = s.startX - s.stopX < 0 ? "rt" : "lt",
                    h = s.startY - s.stopY < 0 ? "dn" : "up",
                    g = l > u ? f : h;
                g = s.tap === !0 ? "tp" : g, g === s.konamiCodeGesture.substr(0, 2) ? s.konamiCodeGesture = s.konamiCodeGesture.substr(2, s.konamiCodeGesture.length - 2) : s.konamiCodeGesture = s.originalCodeGesture, s.konamiCodeGesture.length === 0 && (s.konamiCodeGesture = s.originalCodeGesture, s.afterCodeSequenceCallback(n))
            }, s.checkDebugMode = function(l) {
                l && l.debug === !0 ? (s.debug = function(u, f) {
                    f !== void 0 ? console.log(u, f) : console.log(u)
                }, s.debug && s.debug("Debug Mode On.")) : s.debug = !1
            }, s.initOptions = function(l) {
                s.checkDebugMode(l), s.listener = l && l.listener || document, s.afterCodeSequenceCallback = typeof l == "function" && l || l && typeof l.callback == "function" && l.callback || s.defaultCallback
            }, s.init = function() {
                s.input = "", s.konamiCodeChar = "38384040373937396665", s.konamiCodeGesture = "upupdndnltrtltrttptp", s.startX = 0, s.startY = 0, s.stopX = 0, s.stopY = 0, s.tap = !1, s.capture = !1, o._numberOfInstance = o._numberOfInstance ? o._numberOfInstance + 1 : 1, s.initOptions(r), s.listenCodeCharSequence(), s.listenCodeGestureSequence()
            }, s.init()
        })
    })(v0);
    const jH = v0.exports,
        GH = it({
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
        Gn = e => (pc("data-v-220ec4c0"), e = e(), gc(), e),
        WH = {
            key: 0,
            ref: "debugNav",
            class: "debug-nav",
            tabindex: "0"
        },
        HH = {
            key: 0,
            class: "power-nav"
        },
        VH = Gn(() => Z("p", null, "MARKERS", -1)),
        KH = ["onClick"],
        YH = hi("KILL"),
        qH = Gn(() => Z("br", null, null, -1)),
        zH = hi("ROOM"),
        XH = [YH, qH, zH],
        JH = Gn(() => Z("p", {
            class: "title blurred"
        }, "DEBUG", -1)),
        ZH = {
            key: 1,
            class: "title focused"
        },
        QH = {
            key: 2,
            class: "title focused"
        },
        eV = Gn(() => Z("svg", {
            viewBox: "0 0 20 10"
        }, [Z("polygon", {
            points: "0,10 10,0 20,10"
        })], -1)),
        tV = Gn(() => Z("div", {
            class: "visually-hidden"
        }, "Open debug menu", -1)),
        rV = [eV, tV],
        nV = Gn(() => Z("svg", {
            viewBox: "0 0 60 50"
        }, [Z("polygon", {
            class: "outline",
            points: "40,35.6 20,25 40,14.4"
        }), Z("polygon", {
            points: "40,35.6 20,25 40,14.4"
        })], -1)),
        iV = Gn(() => Z("div", {
            class: "visually-hidden"
        }, "Previous", -1)),
        sV = [nV, iV],
        aV = Gn(() => Z("svg", {
            viewBox: "0 0 60 50"
        }, [Z("polygon", {
            class: "outline",
            points: "40,35.6 20,25 40,14.4"
        }), Z("polygon", {
            points: "40,35.6 20,25 40,14.4"
        })], -1)),
        oV = Gn(() => Z("div", {
            class: "visually-hidden"
        }, "Next", -1)),
        lV = [aV, oV];

    function cV(e, t, r, n, s, o) {
        return e.replayer ? (H(), z("div", WH, [e.showPowerNav ? (H(), z("div", HH, [Z("button", {
            class: "close",
            onClick: t[0] || (t[0] = (...l) => e.onClosePowerNavClick && e.onClosePowerNavClick(...l))
        }, "X"), VH, Z("ul", null, [(H(!0), z(et, null, un(e.replayer.markerMap, (l, u) => (H(), z("li", {
            key: u,
            class: Me({
                active: u === e.replayer.currentMarkerItemIndex
            }),
            onClick: f => e.onMarkerClick(u)
        }, _t(l[1].marker), 11, KH))), 128))]), Z("button", {
            class: "option",
            onClick: t[1] || (t[1] = (...l) => e.onKillClick && e.onKillClick(...l))
        }, XH), Z("button", {
            class: "option",
            onClick: t[2] || (t[2] = (...l) => e.onDisconnectClick && e.onDisconnectClick(...l))
        }, "DISCONNECT")])) : Se("", !0), JH, e.replayer.markerMap.length ? (H(), z("p", QH, _t(e.replayer.currentMarkerItemIndex) + " : " + _t(e.replayer.currentMarkerItem[1].marker) + " (" + _t(e.replayer.currentEntityItemIndex) + ") ", 1)) : (H(), z("p", ZH, "Item #" + _t(e.replayer.currentEntityItemIndex), 1)), e.showPowerNav ? Se("", !0) : (H(), z("button", {
            key: 3,
            class: "open-power-nav",
            onClick: t[3] || (t[3] = (...l) => e.onOpenPowerNavClick && e.onOpenPowerNavClick(...l))
        }, rV)), Z("button", {
            class: "direction previous",
            onClick: t[4] || (t[4] = (...l) => e.onPreviousClick && e.onPreviousClick(...l))
        }, sV), Z("button", {
            class: "direction next",
            onClick: t[5] || (t[5] = (...l) => e.onNextClick && e.onNextClick(...l))
        }, lV)], 512)) : Se("", !0)
    }
    const uV = ze(GH, [
        ["render", cV],
        ["__scopeId", "data-v-220ec4c0"]
    ]);

    function fV(e, t) {
        for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1;);
        return e
    }
    var dV = fV,
        hV = r1,
        pV = hV(Object.keys, Object),
        gV = pV,
        mV = Dh,
        vV = gV,
        yV = Object.prototype,
        _V = yV.hasOwnProperty;

    function bV(e) {
        if (!mV(e)) return vV(e);
        var t = [];
        for (var r in Object(e)) _V.call(e, r) && r != "constructor" && t.push(r);
        return t
    }
    var EV = bV,
        TV = u1,
        SV = EV,
        OV = Rc;

    function wV(e) {
        return OV(e) ? TV(e) : SV(e)
    }
    var Hc = wV,
        CV = lo,
        $V = Hc;

    function IV(e, t) {
        return e && CV(t, $V(t), e)
    }
    var AV = IV,
        RV = lo,
        NV = co;

    function LV(e, t) {
        return e && RV(t, NV(t), e)
    }
    var PV = LV;

    function kV(e, t) {
        for (var r = -1, n = e == null ? 0 : e.length, s = 0, o = []; ++r < n;) {
            var l = e[r];
            t(l, r, e) && (o[s++] = l)
        }
        return o
    }
    var xV = kV;

    function DV() {
        return []
    }
    var y0 = DV,
        MV = xV,
        FV = y0,
        UV = Object.prototype,
        BV = UV.propertyIsEnumerable,
        P_ = Object.getOwnPropertySymbols,
        jV = P_ ? function(e) {
            return e == null ? [] : (e = Object(e), MV(P_(e), function(t) {
                return BV.call(e, t)
            }))
        } : FV,
        bp = jV,
        GV = lo,
        WV = bp;

    function HV(e, t) {
        return GV(e, WV(e), t)
    }
    var VV = HV;

    function KV(e, t) {
        for (var r = -1, n = t.length, s = e.length; ++r < n;) e[s + r] = t[r];
        return e
    }
    var _0 = KV,
        YV = _0,
        qV = xh,
        zV = bp,
        XV = y0,
        JV = Object.getOwnPropertySymbols,
        ZV = JV ? function(e) {
            for (var t = []; e;) YV(t, zV(e)), e = qV(e);
            return t
        } : XV,
        b0 = ZV,
        QV = lo,
        eK = b0;

    function tK(e, t) {
        return QV(e, eK(e), t)
    }
    var rK = tK,
        nK = _0,
        iK = vi;

    function sK(e, t, r) {
        var n = t(e);
        return iK(e) ? n : nK(n, r(e))
    }
    var E0 = sK,
        aK = E0,
        oK = bp,
        lK = Hc;

    function cK(e) {
        return aK(e, lK, oK)
    }
    var uK = cK,
        fK = E0,
        dK = b0,
        hK = co;

    function pK(e) {
        return fK(e, hK, dK)
    }
    var gK = pK,
        mK = os,
        vK = dn,
        yK = mK(vK, "DataView"),
        _K = yK,
        bK = os,
        EK = dn,
        TK = bK(EK, "Promise"),
        SK = TK,
        OK = os,
        wK = dn,
        CK = OK(wK, "Set"),
        $K = CK,
        IK = os,
        AK = dn,
        RK = IK(AK, "WeakMap"),
        NK = RK,
        Wd = _K,
        Hd = Lh,
        Vd = SK,
        Kd = $K,
        Yd = NK,
        T0 = sa,
        fa = zE,
        k_ = "[object Map]",
        LK = "[object Object]",
        x_ = "[object Promise]",
        D_ = "[object Set]",
        M_ = "[object WeakMap]",
        F_ = "[object DataView]",
        PK = fa(Wd),
        kK = fa(Hd),
        xK = fa(Vd),
        DK = fa(Kd),
        MK = fa(Yd),
        Wi = T0;
    (Wd && Wi(new Wd(new ArrayBuffer(1))) != F_ || Hd && Wi(new Hd) != k_ || Vd && Wi(Vd.resolve()) != x_ || Kd && Wi(new Kd) != D_ || Yd && Wi(new Yd) != M_) && (Wi = function(e) {
        var t = T0(e),
            r = t == LK ? e.constructor : void 0,
            n = r ? fa(r) : "";
        if (n) switch (n) {
            case PK:
                return F_;
            case kK:
                return k_;
            case xK:
                return x_;
            case DK:
                return D_;
            case MK:
                return M_
        }
        return t
    });
    var Ep = Wi,
        FK = Object.prototype,
        UK = FK.hasOwnProperty;

    function BK(e) {
        var t = e.length,
            r = new e.constructor(t);
        return t && typeof e[0] == "string" && UK.call(e, "index") && (r.index = e.index, r.input = e.input), r
    }
    var jK = BK,
        GK = kh;

    function WK(e, t) {
        var r = t ? GK(e.buffer) : e.buffer;
        return new e.constructor(r, e.byteOffset, e.byteLength)
    }
    var HK = WK,
        VK = /\w*$/;

    function KK(e) {
        var t = new e.constructor(e.source, VK.exec(e));
        return t.lastIndex = e.lastIndex, t
    }
    var YK = KK,
        U_ = $c,
        B_ = U_ ? U_.prototype : void 0,
        j_ = B_ ? B_.valueOf : void 0;

    function qK(e) {
        return j_ ? Object(j_.call(e)) : {}
    }
    var zK = qK,
        XK = kh,
        JK = HK,
        ZK = YK,
        QK = zK,
        eY = e1,
        tY = "[object Boolean]",
        rY = "[object Date]",
        nY = "[object Map]",
        iY = "[object Number]",
        sY = "[object RegExp]",
        aY = "[object Set]",
        oY = "[object String]",
        lY = "[object Symbol]",
        cY = "[object ArrayBuffer]",
        uY = "[object DataView]",
        fY = "[object Float32Array]",
        dY = "[object Float64Array]",
        hY = "[object Int8Array]",
        pY = "[object Int16Array]",
        gY = "[object Int32Array]",
        mY = "[object Uint8Array]",
        vY = "[object Uint8ClampedArray]",
        yY = "[object Uint16Array]",
        _Y = "[object Uint32Array]";

    function bY(e, t, r) {
        var n = e.constructor;
        switch (t) {
            case cY:
                return XK(e);
            case tY:
            case rY:
                return new n(+e);
            case uY:
                return JK(e, r);
            case fY:
            case dY:
            case hY:
            case pY:
            case gY:
            case mY:
            case vY:
            case yY:
            case _Y:
                return eY(e, r);
            case nY:
                return new n;
            case iY:
            case oY:
                return new n(e);
            case sY:
                return ZK(e);
            case aY:
                return new n;
            case lY:
                return QK(e)
        }
    }
    var EY = bY,
        TY = Ep,
        SY = mi,
        OY = "[object Map]";

    function wY(e) {
        return SY(e) && TY(e) == OY
    }
    var CY = wY,
        $Y = CY,
        IY = Mh,
        G_ = to.exports,
        W_ = G_ && G_.isMap,
        AY = W_ ? IY(W_) : $Y,
        RY = AY,
        NY = Ep,
        LY = mi,
        PY = "[object Set]";

    function kY(e) {
        return LY(e) && NY(e) == PY
    }
    var xY = kY,
        DY = xY,
        MY = Mh,
        H_ = to.exports,
        V_ = H_ && H_.isSet,
        FY = V_ ? MY(V_) : DY,
        UY = FY,
        BY = JE,
        jY = dV,
        GY = Fh,
        WY = AV,
        HY = PV,
        VY = Kl.exports,
        KY = t1,
        YY = VV,
        qY = rK,
        zY = uK,
        XY = gK,
        JY = Ep,
        ZY = jK,
        QY = EY,
        eq = n1,
        tq = vi,
        rq = eo.exports,
        nq = RY,
        iq = hn,
        sq = UY,
        aq = Hc,
        oq = co,
        lq = 1,
        cq = 2,
        uq = 4,
        S0 = "[object Arguments]",
        fq = "[object Array]",
        dq = "[object Boolean]",
        hq = "[object Date]",
        pq = "[object Error]",
        O0 = "[object Function]",
        gq = "[object GeneratorFunction]",
        mq = "[object Map]",
        vq = "[object Number]",
        w0 = "[object Object]",
        yq = "[object RegExp]",
        _q = "[object Set]",
        bq = "[object String]",
        Eq = "[object Symbol]",
        Tq = "[object WeakMap]",
        Sq = "[object ArrayBuffer]",
        Oq = "[object DataView]",
        wq = "[object Float32Array]",
        Cq = "[object Float64Array]",
        $q = "[object Int8Array]",
        Iq = "[object Int16Array]",
        Aq = "[object Int32Array]",
        Rq = "[object Uint8Array]",
        Nq = "[object Uint8ClampedArray]",
        Lq = "[object Uint16Array]",
        Pq = "[object Uint32Array]",
        yt = {};
    yt[S0] = yt[fq] = yt[Sq] = yt[Oq] = yt[dq] = yt[hq] = yt[wq] = yt[Cq] = yt[$q] = yt[Iq] = yt[Aq] = yt[mq] = yt[vq] = yt[w0] = yt[yq] = yt[_q] = yt[bq] = yt[Eq] = yt[Rq] = yt[Nq] = yt[Lq] = yt[Pq] = !0;
    yt[pq] = yt[O0] = yt[Tq] = !1;

    function Dl(e, t, r, n, s, o) {
        var l, u = t & lq,
            f = t & cq,
            h = t & uq;
        if (r && (l = s ? r(e, n, s, o) : r(e)), l !== void 0) return l;
        if (!iq(e)) return e;
        var g = tq(e);
        if (g) {
            if (l = ZY(e), !u) return KY(e, l)
        } else {
            var y = JY(e),
                E = y == O0 || y == gq;
            if (rq(e)) return VY(e, u);
            if (y == w0 || y == S0 || E && !s) {
                if (l = f || E ? {} : eq(e), !u) return f ? qY(e, HY(l, e)) : YY(e, WY(l, e))
            } else {
                if (!yt[y]) return s ? e : {};
                l = QY(e, y, u)
            }
        }
        o || (o = new BY);
        var C = o.get(e);
        if (C) return C;
        o.set(e, l), sq(e) ? e.forEach(function(B) {
            l.add(Dl(B, t, r, B, e, o))
        }) : nq(e) && e.forEach(function(B, $) {
            l.set($, Dl(B, t, r, $, e, o))
        });
        var P = h ? f ? XY : zY : f ? oq : aq,
            M = g ? void 0 : P(e);
        return jY(M || e, function(B, $) {
            M && ($ = B, B = e[$]), GY(l, $, Dl(B, t, r, $, e, o))
        }), l
    }
    var kq = Dl,
        xq = kq,
        Dq = 1,
        Mq = 4;

    function Fq(e) {
        return xq(e, Dq | Mq)
    }
    var C0 = Fq;
    const Uq = it({
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
                !e || (this.values = C0(this.$ecastValues), this.content = (n = By.getPromptGuess(this.values, e)) != null ? n : null)
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
                    !this.$debugRecorder || (this.screen === "debug" && (await this.$debugRecorder.send(this.message), this.$emit("resolve")), this.screen === "feedback" && (await By.send({
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
        $0 = "main/pp9/fourbage/assets/ad9172fc.png",
        I0 = "main/pp9/fourbage/assets/dc131b16.png",
        Bq = "main/pp9/fourbage/assets/38715b18.png",
        jq = "main/pp9/fourbage/assets/b0d7c822.png",
        Gq = "main/pp9/fourbage/assets/06150f24.png",
        Qr = e => (pc("data-v-2c53389f"), e = e(), gc(), e),
        Wq = {
            class: "jbg"
        },
        Hq = {
            key: 0,
            class: "options"
        },
        Vq = Qr(() => Z("img", {
            src: $0,
            alt: "Leave Feedback"
        }, null, -1)),
        Kq = Qr(() => Z("span", null, [hi("LEAVE"), Z("br"), hi("FEEDBACK")], -1)),
        Yq = [Vq, Kq],
        qq = Qr(() => Z("img", {
            src: I0,
            alt: "Send Debug"
        }, null, -1)),
        zq = Qr(() => Z("span", null, [hi("SEND A"), Z("br"), hi("DEBUG")], -1)),
        Xq = [qq, zq],
        Jq = {
            key: 1,
            class: "feedback"
        },
        Zq = Qr(() => Z("img", {
            class: "image",
            src: $0,
            alt: "Feedback"
        }, null, -1)),
        Qq = Qr(() => Z("h3", {
            class: "text"
        }, "Send Feedback", -1)),
        ez = Qr(() => Z("p", {
            class: "cta"
        }, "CHOOSE A VIBE", -1)),
        tz = {
            class: "buttons"
        },
        rz = Qr(() => Z("img", {
            src: Bq,
            alt: "good"
        }, null, -1)),
        nz = [rz],
        iz = Qr(() => Z("img", {
            src: jq,
            alt: "good"
        }, null, -1)),
        sz = [iz],
        az = Qr(() => Z("img", {
            src: Gq,
            alt: "bad"
        }, null, -1)),
        oz = [az],
        lz = {
            class: "actions"
        },
        cz = {
            key: 0,
            class: "content-guess"
        },
        uz = hi("Feedback is about: "),
        fz = {
            key: 2,
            class: "debug"
        },
        dz = Qr(() => Z("img", {
            class: "image",
            src: I0,
            alt: "Debug"
        }, null, -1)),
        hz = Qr(() => Z("h3", {
            class: "text"
        }, "What is Happening?", -1)),
        pz = {
            class: "actions"
        };

    function gz(e, t, r, n, s, o) {
        return H(), z("div", Wq, [e.screen === "options" ? (H(), z("div", Hq, [Z("button", {
            class: "feedback-button",
            onClick: t[0] || (t[0] = (...l) => e.onFeedbackClick && e.onFeedbackClick(...l))
        }, Yq), Z("button", {
            onClick: t[1] || (t[1] = (...l) => e.onDebugClick && e.onDebugClick(...l))
        }, Xq)])) : e.screen === "feedback" ? (H(), z("div", Jq, [Zq, Qq, Z("div", {
            class: Me(["vibes", {
                "has-selected": e.vibe
            }])
        }, [ez, Z("div", tz, [Z("button", {
            class: Me({
                selected: e.vibe === "good"
            }),
            onClick: t[2] || (t[2] = l => e.onVibeClick("good"))
        }, nz, 2), Z("button", {
            class: Me({
                selected: e.vibe === "meh"
            }),
            onClick: t[3] || (t[3] = l => e.onVibeClick("meh"))
        }, sz, 2), Z("button", {
            class: Me({
                selected: e.vibe === "bad"
            }),
            onClick: t[4] || (t[4] = l => e.onVibeClick("bad"))
        }, oz, 2)])], 2), Z("div", lz, [e.content ? (H(), z("div", cz, [Ie(Z("input", {
            "onUpdate:modelValue": t[5] || (t[5] = l => e.isContent = l),
            type: "checkbox"
        }, null, 512), [
            [w2, e.isContent]
        ]), Z("span", null, [uz, Z("em", null, _t(e.content), 1)])])) : Se("", !0), Ie(Z("textarea", {
            "onUpdate:modelValue": t[6] || (t[6] = l => e.message = l),
            rows: "3",
            placeholder: "(optional) more details",
            "aria-label": "Details"
        }, null, 512), [
            [zv, e.message]
        ]), Z("button", {
            onClick: t[7] || (t[7] = Zr((...l) => e.onSubmitClick && e.onSubmitClick(...l), ["prevent"]))
        }, _t(e.$t("ACTION.SUBMIT")), 1)])])) : e.screen === "debug" ? (H(), z("div", fz, [dz, hz, Z("div", pz, [Ie(Z("textarea", {
            "onUpdate:modelValue": t[8] || (t[8] = l => e.message = l),
            rows: "3",
            placeholder: "Enter details",
            "aria-label": "Details"
        }, null, 512), [
            [zv, e.message]
        ]), Z("button", {
            onClick: t[9] || (t[9] = Zr((...l) => e.onSubmitClick && e.onSubmitClick(...l), ["prevent"]))
        }, _t(e.$t("ACTION.OK")), 1)])])) : Se("", !0)])
    }
    const A0 = ze(Uq, [
            ["render", gz],
            ["__scopeId", "data-v-2c53389f"]
        ]),
        mz = it({
            methods: {
                onFeedbackClick() {
                    this.$showModal(A0)
                }
            }
        });

    function vz(e, t, r, n, s, o) {
        return H(), z("div", {
            class: "feedback-button",
            onClick: t[0] || (t[0] = (...l) => e.onFeedbackClick && e.onFeedbackClick(...l))
        }, "SEND FEEDBACK")
    }
    const yz = ze(mz, [
            ["render", vz],
            ["__scopeId", "data-v-6f2f1788"]
        ]),
        _z = {
            install: (e, t) => {
                if (!e.config.globalProperties.$debugRecorder && !e.config.globalProperties.$debugReplayer) {
                    if (t.replayer) {
                        e.config.globalProperties.$debugReplayer = t.replayer, e.component("Debug", uV);
                        return
                    }
                    if (e.config.globalProperties.$debugRecorder = new g5(t.client, t.room), !e.config.globalProperties.$showModal) {
                        console.warn("[debugPlugin] Sending debug and feedback messages is disabled be the modalPlugin is not used.");
                        return
                    }(!vr.isProduction || vr.getQueryParam("feedback")) && e.component("Debug", yz), new jH(() => {
                        e.config.globalProperties.$showModal(A0)
                    })
                }
            }
        };
    var bz = dn,
        Ez = function() {
            return bz.Date.now()
        },
        Tz = Ez,
        Sz = /\s/;

    function Oz(e) {
        for (var t = e.length; t-- && Sz.test(e.charAt(t)););
        return t
    }
    var wz = Oz,
        Cz = wz,
        $z = /^\s+/;

    function Iz(e) {
        return e && e.slice(0, Cz(e) + 1).replace($z, "")
    }
    var Az = Iz,
        Rz = sa,
        Nz = mi,
        Lz = "[object Symbol]";

    function Pz(e) {
        return typeof e == "symbol" || Nz(e) && Rz(e) == Lz
    }
    var Vc = Pz,
        kz = Az,
        K_ = hn,
        xz = Vc,
        Y_ = 0 / 0,
        Dz = /^[-+]0x[0-9a-f]+$/i,
        Mz = /^0b[01]+$/i,
        Fz = /^0o[0-7]+$/i,
        Uz = parseInt;

    function Bz(e) {
        if (typeof e == "number") return e;
        if (xz(e)) return Y_;
        if (K_(e)) {
            var t = typeof e.valueOf == "function" ? e.valueOf() : e;
            e = K_(t) ? t + "" : t
        }
        if (typeof e != "string") return e === 0 ? e : +e;
        e = kz(e);
        var r = Mz.test(e);
        return r || Fz.test(e) ? Uz(e.slice(2), r ? 2 : 8) : Dz.test(e) ? Y_ : +e
    }
    var jz = Bz,
        Gz = hn,
        Jf = Tz,
        q_ = jz,
        Wz = "Expected a function",
        Hz = Math.max,
        Vz = Math.min;

    function Kz(e, t, r) {
        var n, s, o, l, u, f, h = 0,
            g = !1,
            y = !1,
            E = !0;
        if (typeof e != "function") throw new TypeError(Wz);
        t = q_(t) || 0, Gz(r) && (g = !!r.leading, y = "maxWait" in r, o = y ? Hz(q_(r.maxWait) || 0, t) : o, E = "trailing" in r ? !!r.trailing : E);

        function C(J) {
            var oe = n,
                le = s;
            return n = s = void 0, h = J, l = e.apply(le, oe), l
        }

        function P(J) {
            return h = J, u = setTimeout($, t), g ? C(J) : l
        }

        function M(J) {
            var oe = J - f,
                le = J - h,
                ue = t - oe;
            return y ? Vz(ue, o - le) : ue
        }

        function B(J) {
            var oe = J - f,
                le = J - h;
            return f === void 0 || oe >= t || oe < 0 || y && le >= o
        }

        function $() {
            var J = Jf();
            if (B(J)) return V(J);
            u = setTimeout($, M(J))
        }

        function V(J) {
            return u = void 0, E && n ? C(J) : (n = s = void 0, l)
        }

        function q() {
            u !== void 0 && clearTimeout(u), h = 0, n = f = s = u = void 0
        }

        function G() {
            return u === void 0 ? l : V(Jf())
        }

        function j() {
            var J = Jf(),
                oe = B(J);
            if (n = arguments, s = this, f = J, oe) {
                if (u === void 0) return P(f);
                if (y) return clearTimeout(u), u = setTimeout($, t), C(f)
            }
            return u === void 0 && (u = setTimeout($, t)), l
        }
        return j.cancel = q, j.flush = G, j
    }
    var Yz = Kz,
        qz = vi,
        zz = Vc,
        Xz = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        Jz = /^\w*$/;

    function Zz(e, t) {
        if (qz(e)) return !1;
        var r = typeof e;
        return r == "number" || r == "symbol" || r == "boolean" || e == null || zz(e) ? !0 : Jz.test(e) || !Xz.test(e) || t != null && e in Object(t)
    }
    var Qz = Zz,
        R0 = XE,
        eX = "Expected a function";

    function Tp(e, t) {
        if (typeof e != "function" || t != null && typeof t != "function") throw new TypeError(eX);
        var r = function() {
            var n = arguments,
                s = t ? t.apply(this, n) : n[0],
                o = r.cache;
            if (o.has(s)) return o.get(s);
            var l = e.apply(this, n);
            return r.cache = o.set(s, l) || o, l
        };
        return r.cache = new(Tp.Cache || R0), r
    }
    Tp.Cache = R0;
    var tX = Tp,
        rX = tX,
        nX = 500;

    function iX(e) {
        var t = rX(e, function(n) {
                return r.size === nX && r.clear(), n
            }),
            r = t.cache;
        return t
    }
    var sX = iX,
        aX = sX,
        oX = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        lX = /\\(\\)?/g,
        cX = aX(function(e) {
            var t = [];
            return e.charCodeAt(0) === 46 && t.push(""), e.replace(oX, function(r, n, s, o) {
                t.push(s ? o.replace(lX, "$1") : n || r)
            }), t
        }),
        uX = cX;

    function fX(e, t) {
        for (var r = -1, n = e == null ? 0 : e.length, s = Array(n); ++r < n;) s[r] = t(e[r], r, e);
        return s
    }
    var N0 = fX,
        z_ = $c,
        dX = N0,
        hX = vi,
        pX = Vc,
        gX = 1 / 0,
        X_ = z_ ? z_.prototype : void 0,
        J_ = X_ ? X_.toString : void 0;

    function L0(e) {
        if (typeof e == "string") return e;
        if (hX(e)) return dX(e, L0) + "";
        if (pX(e)) return J_ ? J_.call(e) : "";
        var t = e + "";
        return t == "0" && 1 / e == -gX ? "-0" : t
    }
    var mX = L0,
        vX = mX;

    function yX(e) {
        return e == null ? "" : vX(e)
    }
    var _X = yX,
        bX = vi,
        EX = Qz,
        TX = uX,
        SX = _X;

    function OX(e, t) {
        return bX(e) ? e : EX(e, t) ? [e] : TX(SX(e))
    }
    var P0 = OX,
        wX = Vc,
        CX = 1 / 0;

    function $X(e) {
        if (typeof e == "string" || wX(e)) return e;
        var t = e + "";
        return t == "0" && 1 / e == -CX ? "-0" : t
    }
    var k0 = $X,
        IX = Fh,
        AX = P0,
        RX = Uh,
        Z_ = hn,
        NX = k0;

    function LX(e, t, r, n) {
        if (!Z_(e)) return e;
        t = AX(t, e);
        for (var s = -1, o = t.length, l = o - 1, u = e; u != null && ++s < o;) {
            var f = NX(t[s]),
                h = r;
            if (f === "__proto__" || f === "constructor" || f === "prototype") return e;
            if (s != l) {
                var g = u[f];
                h = n ? n(g, f, u) : void 0, h === void 0 && (h = Z_(g) ? g : RX(t[s + 1]) ? [] : {})
            }
            IX(u, f, h), u = u[f]
        }
        return e
    }
    var PX = LX,
        kX = PX;

    function xX(e, t, r) {
        return e == null ? e : kX(e, t, r)
    }
    var DX = xX;
    class MX {
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
            ge(this, "sync", Yz(() => {
                !this.wsClient || !this.keyMap && !this.providerMap || this.pausedKeys && !this.pausedKeys.length || (this.hotValues = {}, this.newValues = {}, this.normalize().mapKeysToValues().mapProvidersToValues().deleteDropped().hydrateRefs().syncExisting(), delete this.hotValues, delete this.newValues)
            }, 50))
        }
        setWSClient(t) {
            this.wsClient = t, this.setupWatcher()
        }
        setupWatcher() {
            this.wsClient.entities = Bn(this.wsClient.entities), Qi(this.wsClient.entities, (t, r) => {
                this.sync()
            })
        }
        valueForEntity(t) {
            return t instanceof wr.ArtifactEntity || t instanceof wr.DoodleEntity ? t : t instanceof wr.ObjectEntity ? C0(t.val) : t instanceof wr.TextEntity ? t.text : t instanceof wr.NumberEntity ? t.val : null
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
                        const l = s.split(":");
                        if (l[0] === "bc")
                            if (l[1] === "customer") {
                                if (l[2] !== `${this.wsClient.id}`) continue;
                                s = "player"
                            } else l[1] === "room" && (s = "room")
                    }
                    this.hotValues[s] = o
                }
            }
            return this
        }
        hydrateRefs() {
            const t = (r, n, s = !1) => {
                var l;
                const o = (l = r.$ref) != null ? l : r.ref;
                if (o) {
                    const u = this.hotValues[o];
                    if (u === void 0) throw new Error(`[ecastPlugin] entity "${n}" referenced entity "${o}" but it does not exist`);
                    DX(this.newValues, n, u)
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
    const qr = new MX,
        FX = {
            install: (e, t) => {
                e.config.globalProperties.$setupEcast = r => {
                    qr.setWSClient(r.wsClient), r.wsClient.on("artifact", n => ro.add(n)), r.wsClient.on("connection", n => {
                        n.status === "connected" && qr.setupWatcher()
                    }), qr.sync(), e.config.globalProperties.$ecast = qr.wsClient, e.config.globalProperties.$ecastValues = qr.mappedValues, e.config.globalProperties.$ecastRoom = r.room, e.config.globalProperties.$ecastWelcome = r.welcome, e.config.globalProperties.$syncEcast = qr.sync, e.config.globalProperties.$pauseEcastUpdates = qr.pause, e.config.globalProperties.$resumeEcastUpdates = qr.resume, e.mixin({
                        beforeCreate() {
                            this.$options.ecastKeys && qr.addKeys(this.$options.ecastKeys), this.$options.ecastProviders && qr.addProviders(this.$options.ecastProviders)
                        },
                        beforeDestroy() {
                            this.$options.ecastKeys && qr.purgeKeys(this.$options.ecastKeys), this.$options.ecastProviders && qr.purgeProviders(this.$options.ecastProviders)
                        }
                    })
                }, t != null && t.wsClient && e.config.globalProperties.$setupEcast(t)
            }
        },
        vo = {
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

    function UX() {
        return typeof __SENTRY_BROWSER_BUNDLE__ < "u" && !!__SENTRY_BROWSER_BUNDLE__
    }

    function Sp() {
        return !UX() && Object.prototype.toString.call(typeof process < "u" ? process : 0) === "[object process]"
    }

    function BX(e, t) {
        return e.require(t)
    }
    var jX = {};

    function zt() {
        return Sp() ? global : typeof window < "u" ? window : typeof self < "u" ? self : jX
    }

    function Op(e, t, r) {
        var n = r || zt(),
            s = n.__SENTRY__ = n.__SENTRY__ || {},
            o = s[e] || (s[e] = t());
        return o
    }
    var x0 = Object.prototype.toString;

    function D0(e) {
        switch (x0.call(e)) {
            case "[object Error]":
            case "[object Exception]":
            case "[object DOMException]":
                return !0;
            default:
                return Ti(e, Error)
        }
    }

    function da(e, t) {
        return x0.call(e) === `[object ${t}]`
    }

    function M0(e) {
        return da(e, "ErrorEvent")
    }

    function Q_(e) {
        return da(e, "DOMError")
    }

    function GX(e) {
        return da(e, "DOMException")
    }

    function Qs(e) {
        return da(e, "String")
    }

    function WX(e) {
        return e === null || typeof e != "object" && typeof e != "function"
    }

    function Kc(e) {
        return da(e, "Object")
    }

    function wp(e) {
        return typeof Event < "u" && Ti(e, Event)
    }

    function HX(e) {
        return typeof Element < "u" && Ti(e, Element)
    }

    function VX(e) {
        return da(e, "RegExp")
    }

    function F0(e) {
        return Boolean(e && e.then && typeof e.then == "function")
    }

    function KX(e) {
        return Kc(e) && "nativeEvent" in e && "preventDefault" in e && "stopPropagation" in e
    }

    function YX(e) {
        return typeof e == "number" && e !== e
    }

    function Ti(e, t) {
        try {
            return e instanceof t
        } catch {
            return !1
        }
    }

    function qd(e, t) {
        try {
            let u = e;
            var r = 5,
                n = 80,
                s = [];
            let f = 0,
                h = 0;
            var o = " > ",
                l = o.length;
            let g;
            for (; u && f++ < r && (g = qX(u, t), !(g === "html" || f > 1 && h + s.length * l + g.length >= n));) s.push(g), h += g.length, u = u.parentNode;
            return s.reverse().join(o)
        } catch {
            return "<unknown>"
        }
    }

    function qX(e, t) {
        var r = e,
            n = [];
        let s, o, l, u, f;
        if (!r || !r.tagName) return "";
        n.push(r.tagName.toLowerCase());
        var h = t && t.length ? t.filter(y => r.getAttribute(y)).map(y => [y, r.getAttribute(y)]) : null;
        if (h && h.length) h.forEach(y => {
            n.push(`[${y[0]}="${y[1]}"]`)
        });
        else if (r.id && n.push(`#${r.id}`), s = r.className, s && Qs(s))
            for (o = s.split(/\s+/), f = 0; f < o.length; f++) n.push(`.${o[f]}`);
        var g = ["type", "name", "title", "alt"];
        for (f = 0; f < g.length; f++) l = g[f], u = r.getAttribute(l), u && n.push(`[${l}="${u}"]`);
        return n.join("")
    }

    function zX() {
        var e = zt();
        try {
            return e.document.location.href
        } catch {
            return ""
        }
    }
    class Da extends Error {
        constructor(t, r = "warn") {
            super(t), this.message = t, this.name = new.target.prototype.constructor.name, Object.setPrototypeOf(this, new.target.prototype), this.logLevel = r
        }
    }
    var XX = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/;

    function JX(e) {
        return e === "http" || e === "https"
    }

    function ZX(e, t = !1) {
        const {
            host: r,
            path: n,
            pass: s,
            port: o,
            projectId: l,
            protocol: u,
            publicKey: f
        } = e;
        return `${u}://${f}${t&&s?`:${s}`:""}@${r}${o?`:${o}`:""}/${n&&`${n}/`}${l}`
    }

    function QX(e) {
        var t = XX.exec(e);
        if (!t) throw new Da(`Invalid Sentry Dsn: ${e}`);
        const [r, n, s = "", o, l = "", u] = t.slice(1);
        let f = "",
            h = u;
        var g = h.split("/");
        if (g.length > 1 && (f = g.slice(0, -1).join("/"), h = g.pop()), h) {
            var y = h.match(/^\d+/);
            y && (h = y[0])
        }
        return U0({
            host: o,
            pass: s,
            path: f,
            projectId: h,
            port: l,
            protocol: r,
            publicKey: n
        })
    }

    function U0(e) {
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

    function eJ(e) {
        if (!(typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__)) return;
        const {
            port: t,
            projectId: r,
            protocol: n
        } = e;
        var s = ["protocol", "publicKey", "host", "projectId"];
        if (s.forEach(o => {
                if (!e[o]) throw new Da(`Invalid Sentry Dsn: ${o} missing`)
            }), !r.match(/^\d+$/)) throw new Da(`Invalid Sentry Dsn: Invalid projectId ${r}`);
        if (!JX(n)) throw new Da(`Invalid Sentry Dsn: Invalid protocol ${n}`);
        if (t && isNaN(parseInt(t, 10))) throw new Da(`Invalid Sentry Dsn: Invalid port ${t}`);
        return !0
    }

    function tJ(e) {
        var t = typeof e == "string" ? QX(e) : U0(e);
        return eJ(t), t
    }
    var rJ = zt(),
        nJ = "Sentry Logger ",
        tc = ["debug", "info", "warn", "error", "log", "assert", "trace"];

    function B0(e) {
        var t = zt();
        if (!("console" in t)) return e();
        var r = t.console,
            n = {};
        tc.forEach(s => {
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

    function eb() {
        let e = !1;
        var t = {
            enable: () => {
                e = !0
            },
            disable: () => {
                e = !1
            }
        };
        return typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__ ? tc.forEach(r => {
            t[r] = (...n) => {
                e && B0(() => {
                    rJ.console[r](`${nJ}[${r}]:`, ...n)
                })
            }
        }) : tc.forEach(r => {
            t[r] = () => {}
        }), t
    }
    let Gt;
    typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__ ? Gt = Op("logger", eb) : Gt = eb();

    function tb(e, t = 0) {
        return typeof e != "string" || t === 0 || e.length <= t ? e : `${e.substr(0,t)}...`
    }

    function rb(e, t) {
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

    function Cp(e, t) {
        return Qs(e) ? VX(t) ? t.test(e) : typeof t == "string" ? e.indexOf(t) !== -1 : !1 : !1
    }

    function cr(e, t, r) {
        if (t in e) {
            var n = e[t],
                s = r(n);
            if (typeof s == "function") try {
                G0(s, n)
            } catch {}
            e[t] = s
        }
    }

    function j0(e, t, r) {
        Object.defineProperty(e, t, {
            value: r,
            writable: !0,
            configurable: !0
        })
    }

    function G0(e, t) {
        var r = t.prototype || {};
        e.prototype = t.prototype = r, j0(e, "__sentry_original__", t)
    }

    function $p(e) {
        return e.__sentry_original__
    }

    function W0(e) {
        if (D0(e)) return {
            message: e.message,
            name: e.name,
            stack: e.stack,
            ...ib(e)
        };
        if (wp(e)) {
            var t = {
                type: e.type,
                target: nb(e.target),
                currentTarget: nb(e.currentTarget),
                ...ib(e)
            };
            return typeof CustomEvent < "u" && Ti(e, CustomEvent) && (t.detail = e.detail), t
        } else return e
    }

    function nb(e) {
        try {
            return HX(e) ? qd(e) : Object.prototype.toString.call(e)
        } catch {
            return "<unknown>"
        }
    }

    function ib(e) {
        if (typeof e == "object" && e !== null) {
            var t = {};
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t
        } else return {}
    }

    function iJ(e, t = 40) {
        var r = Object.keys(W0(e));
        if (r.sort(), !r.length) return "[object has no keys]";
        if (r[0].length >= t) return tb(r[0], t);
        for (let s = r.length; s > 0; s--) {
            var n = r.slice(0, s).join(", ");
            if (!(n.length > t)) return s === r.length ? n : tb(n, t)
        }
        return ""
    }

    function sJ(e) {
        var t = new Map;
        return zd(e, t)
    }

    function zd(e, t) {
        if (Kc(e)) {
            var r = t.get(e);
            if (r !== void 0) return r;
            var n = {};
            t.set(e, n);
            for (var s of Object.keys(e)) typeof e[s] < "u" && (n[s] = zd(e[s], t));
            return n
        }
        if (Array.isArray(e)) {
            var r = t.get(e);
            if (r !== void 0) return r;
            var n = [];
            return t.set(e, n), e.forEach(u => {
                n.push(zd(u, t))
            }), n
        }
        return e
    }
    var Zf = "<anonymous>";

    function pi(e) {
        try {
            return !e || typeof e != "function" ? Zf : e.name || Zf
        } catch {
            return Zf
        }
    }

    function aJ() {
        if (!("fetch" in zt())) return !1;
        try {
            return new Headers, new Request(""), new Response, !0
        } catch {
            return !1
        }
    }

    function sb(e) {
        return e && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())
    }

    function oJ() {
        if (!aJ()) return !1;
        var e = zt();
        if (sb(e.fetch)) return !0;
        let t = !1;
        var r = e.document;
        if (r && typeof r.createElement == "function") try {
            var n = r.createElement("iframe");
            n.hidden = !0, r.head.appendChild(n), n.contentWindow && n.contentWindow.fetch && (t = sb(n.contentWindow.fetch)), r.head.removeChild(n)
        } catch (s) {
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Gt.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", s)
        }
        return t
    }

    function lJ() {
        var e = zt(),
            t = e.chrome,
            r = t && t.app && t.app.runtime,
            n = "history" in e && !!e.history.pushState && !!e.history.replaceState;
        return !r && n
    }
    var Ct = zt(),
        Ha = {},
        ab = {};

    function cJ(e) {
        if (!ab[e]) switch (ab[e] = !0, e) {
            case "console":
                uJ();
                break;
            case "dom":
                _J();
                break;
            case "xhr":
                pJ();
                break;
            case "fetch":
                fJ();
                break;
            case "history":
                gJ();
                break;
            case "error":
                bJ();
                break;
            case "unhandledrejection":
                EJ();
                break;
            default:
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Gt.warn("unknown instrumentation type:", e);
                return
        }
    }

    function zi(e, t) {
        Ha[e] = Ha[e] || [], Ha[e].push(t), cJ(e)
    }

    function fn(e, t) {
        if (!(!e || !Ha[e]))
            for (var r of Ha[e] || []) try {
                r(t)
            } catch (n) {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Gt.error(`Error while triggering instrumentation handler.
Type: ${e}
Name: ${pi(r)}
Error:`, n)
            }
    }

    function uJ() {
        "console" in Ct && tc.forEach(function(e) {
            e in Ct.console && cr(Ct.console, e, function(t) {
                return function(...r) {
                    fn("console", {
                        args: r,
                        level: e
                    }), t && t.apply(Ct.console, r)
                }
            })
        })
    }

    function fJ() {
        !oJ() || cr(Ct, "fetch", function(e) {
            return function(...t) {
                var r = {
                    args: t,
                    fetchData: {
                        method: dJ(t),
                        url: hJ(t)
                    },
                    startTimestamp: Date.now()
                };
                return fn("fetch", {
                    ...r
                }), e.apply(Ct, t).then(n => (fn("fetch", {
                    ...r,
                    endTimestamp: Date.now(),
                    response: n
                }), n), n => {
                    throw fn("fetch", {
                        ...r,
                        endTimestamp: Date.now(),
                        error: n
                    }), n
                })
            }
        })
    }

    function dJ(e = []) {
        return "Request" in Ct && Ti(e[0], Request) && e[0].method ? String(e[0].method).toUpperCase() : e[1] && e[1].method ? String(e[1].method).toUpperCase() : "GET"
    }

    function hJ(e = []) {
        return typeof e[0] == "string" ? e[0] : "Request" in Ct && Ti(e[0], Request) ? e[0].url : String(e[0])
    }

    function pJ() {
        if ("XMLHttpRequest" in Ct) {
            var e = XMLHttpRequest.prototype;
            cr(e, "open", function(t) {
                return function(...r) {
                    var n = this,
                        s = r[1],
                        o = n.__sentry_xhr__ = {
                            method: Qs(r[0]) ? r[0].toUpperCase() : r[0],
                            url: r[1]
                        };
                    Qs(s) && o.method === "POST" && s.match(/sentry_key/) && (n.__sentry_own_request__ = !0);
                    var l = function() {
                        if (n.readyState === 4) {
                            try {
                                o.status_code = n.status
                            } catch {}
                            fn("xhr", {
                                args: r,
                                endTimestamp: Date.now(),
                                startTimestamp: Date.now(),
                                xhr: n
                            })
                        }
                    };
                    return "onreadystatechange" in n && typeof n.onreadystatechange == "function" ? cr(n, "onreadystatechange", function(u) {
                        return function(...f) {
                            return l(), u.apply(n, f)
                        }
                    }) : n.addEventListener("readystatechange", l), t.apply(n, r)
                }
            }), cr(e, "send", function(t) {
                return function(...r) {
                    return this.__sentry_xhr__ && r[0] !== void 0 && (this.__sentry_xhr__.body = r[0]), fn("xhr", {
                        args: r,
                        startTimestamp: Date.now(),
                        xhr: this
                    }), t.apply(this, r)
                }
            })
        }
    }
    let Sl;

    function gJ() {
        if (!lJ()) return;
        var e = Ct.onpopstate;
        Ct.onpopstate = function(...r) {
            var n = Ct.location.href,
                s = Sl;
            if (Sl = n, fn("history", {
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
                    var o = Sl,
                        l = String(s);
                    Sl = l, fn("history", {
                        from: o,
                        to: l
                    })
                }
                return r.apply(this, n)
            }
        }
        cr(Ct.history, "pushState", t), cr(Ct.history, "replaceState", t)
    }
    var mJ = 1e3;
    let Ol, wl;

    function vJ(e, t) {
        if (!e || e.type !== t.type) return !0;
        try {
            if (e.target !== t.target) return !0
        } catch {}
        return !1
    }

    function yJ(e) {
        if (e.type !== "keypress") return !1;
        try {
            var t = e.target;
            if (!t || !t.tagName) return !0;
            if (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable) return !1
        } catch {}
        return !0
    }

    function ob(e, t = !1) {
        return r => {
            if (!(!r || wl === r) && !yJ(r)) {
                var n = r.type === "keypress" ? "input" : r.type;
                Ol === void 0 ? (e({
                    event: r,
                    name: n,
                    global: t
                }), wl = r) : vJ(wl, r) && (e({
                    event: r,
                    name: n,
                    global: t
                }), wl = r), clearTimeout(Ol), Ol = Ct.setTimeout(() => {
                    Ol = void 0
                }, mJ)
            }
        }
    }

    function _J() {
        if ("document" in Ct) {
            var e = fn.bind(null, "dom"),
                t = ob(e, !0);
            Ct.document.addEventListener("click", t, !1), Ct.document.addEventListener("keypress", t, !1), ["EventTarget", "Node"].forEach(r => {
                var n = Ct[r] && Ct[r].prototype;
                !n || !n.hasOwnProperty || !n.hasOwnProperty("addEventListener") || (cr(n, "addEventListener", function(s) {
                    return function(o, l, u) {
                        if (o === "click" || o == "keypress") try {
                            var f = this,
                                h = f.__sentry_instrumentation_handlers__ = f.__sentry_instrumentation_handlers__ || {},
                                g = h[o] = h[o] || {
                                    refCount: 0
                                };
                            if (!g.handler) {
                                var y = ob(e);
                                g.handler = y, s.call(this, o, y, u)
                            }
                            g.refCount += 1
                        } catch {}
                        return s.call(this, o, l, u)
                    }
                }), cr(n, "removeEventListener", function(s) {
                    return function(o, l, u) {
                        if (o === "click" || o == "keypress") try {
                            var f = this,
                                h = f.__sentry_instrumentation_handlers__ || {},
                                g = h[o];
                            g && (g.refCount -= 1, g.refCount <= 0 && (s.call(this, o, g.handler, u), g.handler = void 0, delete h[o]), Object.keys(h).length === 0 && delete f.__sentry_instrumentation_handlers__)
                        } catch {}
                        return s.call(this, o, l, u)
                    }
                }))
            })
        }
    }
    let Qf = null;

    function bJ() {
        Qf = Ct.onerror, Ct.onerror = function(e, t, r, n, s) {
            return fn("error", {
                column: n,
                error: s,
                line: r,
                msg: e,
                url: t
            }), Qf ? Qf.apply(this, arguments) : !1
        }
    }
    let ed = null;

    function EJ() {
        ed = Ct.onunhandledrejection, Ct.onunhandledrejection = function(e) {
            return fn("unhandledrejection", e), ed ? ed.apply(this, arguments) : !0
        }
    }

    function TJ() {
        var e = typeof WeakSet == "function",
            t = e ? new WeakSet : [];

        function r(s) {
            if (e) return t.has(s) ? !0 : (t.add(s), !1);
            for (let l = 0; l < t.length; l++) {
                var o = t[l];
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
        var e = zt(),
            t = e.crypto || e.msCrypto;
        if (t && t.randomUUID) return t.randomUUID().replace(/-/g, "");
        var r = t && t.getRandomValues ? () => t.getRandomValues(new Uint8Array(1))[0] : () => Math.random() * 16;
        return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, n => (n ^ (r() & 15) >> n / 4).toString(16))
    }

    function H0(e) {
        return e.exception && e.exception.values ? e.exception.values[0] : void 0
    }

    function Ns(e) {
        const {
            message: t,
            event_id: r
        } = e;
        if (t) return t;
        var n = H0(e);
        return n ? n.type && n.value ? `${n.type}: ${n.value}` : n.type || n.value || r || "<unknown>" : r || "<unknown>"
    }

    function Xd(e, t, r) {
        var n = e.exception = e.exception || {},
            s = n.values = n.values || [],
            o = s[0] = s[0] || {};
        o.value || (o.value = t || ""), o.type || (o.type = r || "Error")
    }

    function rc(e, t) {
        var r = H0(e);
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

    function SJ(e, t = 1 / 0, r = 1 / 0) {
        try {
            return Jd("", e, t, r)
        } catch (n) {
            return {
                ERROR: `**non-serializable** (${n})`
            }
        }
    }

    function V0(e, t = 3, r = 100 * 1024) {
        var n = SJ(e, t);
        return CJ(n) > r ? V0(e, t - 1, r) : n
    }

    function Jd(e, t, r = 1 / 0, n = 1 / 0, s = TJ()) {
        const [o, l] = s;
        if (t === null || ["number", "boolean", "string"].includes(typeof t) && !YX(t)) return t;
        var u = OJ(e, t);
        if (!u.startsWith("[object ")) return u;
        if (t.__sentry_skip_normalization__) return t;
        if (r === 0) return u.replace("object ", "");
        if (o(t)) return "[Circular ~]";
        var f = t;
        if (f && typeof f.toJSON == "function") try {
            var h = f.toJSON();
            return Jd("", h, r - 1, n, s)
        } catch {}
        var g = Array.isArray(t) ? [] : {};
        let y = 0;
        var E = W0(t);
        for (var C in E)
            if (!!Object.prototype.hasOwnProperty.call(E, C)) {
                if (y >= n) {
                    g[C] = "[MaxProperties ~]";
                    break
                }
                var P = E[C];
                g[C] = Jd(C, P, r - 1, n, s), y += 1
            } return l(t), g
    }

    function OJ(e, t) {
        try {
            return e === "domain" && t && typeof t == "object" && t._events ? "[Domain]" : e === "domainEmitter" ? "[DomainEmitter]" : typeof global < "u" && t === global ? "[Global]" : typeof window < "u" && t === window ? "[Window]" : typeof document < "u" && t === document ? "[Document]" : KX(t) ? "[SyntheticEvent]" : typeof t == "number" && t !== t ? "[NaN]" : t === void 0 ? "[undefined]" : typeof t == "function" ? `[Function: ${pi(t)}]` : typeof t == "symbol" ? `[${String(t)}]` : typeof t == "bigint" ? `[BigInt: ${String(t)}]` : `[object ${Object.getPrototypeOf(t).constructor.name}]`
        } catch (r) {
            return `**non-serializable** (${r})`
        }
    }

    function wJ(e) {
        return ~-encodeURI(e).split(/%..|./).length
    }

    function CJ(e) {
        return wJ(JSON.stringify(e))
    }
    var Mn;
    (function(e) {
        var t = 0;
        e[e.PENDING = t] = "PENDING";
        var r = 1;
        e[e.RESOLVED = r] = "RESOLVED";
        var n = 2;
        e[e.REJECTED = n] = "REJECTED"
    })(Mn || (Mn = {}));
    class En {
        __init() {
            this._state = Mn.PENDING
        }
        __init2() {
            this._handlers = []
        }
        constructor(t) {
            En.prototype.__init.call(this), En.prototype.__init2.call(this), En.prototype.__init3.call(this), En.prototype.__init4.call(this), En.prototype.__init5.call(this), En.prototype.__init6.call(this);
            try {
                t(this._resolve, this._reject)
            } catch (r) {
                this._reject(r)
            }
        }
        then(t, r) {
            return new En((n, s) => {
                this._handlers.push([!1, o => {
                    if (!t) n(o);
                    else try {
                        n(t(o))
                    } catch (l) {
                        s(l)
                    }
                }, o => {
                    if (!r) s(o);
                    else try {
                        n(r(o))
                    } catch (l) {
                        s(l)
                    }
                }]), this._executeHandlers()
            })
        } catch (t) {
            return this.then(r => r, t)
        } finally(t) {
            return new En((r, n) => {
                let s, o;
                return this.then(l => {
                    o = !1, s = l, t && t()
                }, l => {
                    o = !0, s = l, t && t()
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
                this._setResult(Mn.RESOLVED, t)
            }
        }
        __init4() {
            this._reject = t => {
                this._setResult(Mn.REJECTED, t)
            }
        }
        __init5() {
            this._setResult = (t, r) => {
                if (this._state === Mn.PENDING) {
                    if (F0(r)) {
                        r.then(this._resolve, this._reject);
                        return
                    }
                    this._state = t, this._value = r, this._executeHandlers()
                }
            }
        }
        __init6() {
            this._executeHandlers = () => {
                if (this._state !== Mn.PENDING) {
                    var t = this._handlers.slice();
                    this._handlers = [], t.forEach(r => {
                        r[0] || (this._state === Mn.RESOLVED && r[1](this._value), this._state === Mn.REJECTED && r[2](this._value), r[0] = !0)
                    })
                }
            }
        }
    }

    function td(e) {
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
    var $J = ["fatal", "error", "warning", "log", "info", "debug"];

    function IJ(e) {
        return e === "warn" ? "warning" : $J.includes(e) ? e : "log"
    }
    var Zd = {
        nowSeconds: () => Date.now() / 1e3
    };

    function AJ() {
        const {
            performance: e
        } = zt();
        if (!(!e || !e.now)) {
            var t = Date.now() - e.now();
            return {
                now: () => e.now(),
                timeOrigin: t
            }
        }
    }

    function RJ() {
        try {
            var e = BX(wS, "perf_hooks");
            return e.performance
        } catch {
            return
        }
    }
    var rd = Sp() ? RJ() : AJ(),
        lb = rd === void 0 ? Zd : {
            nowSeconds: () => (rd.timeOrigin + rd.now()) / 1e3
        },
        K0 = Zd.nowSeconds.bind(Zd),
        Y0 = lb.nowSeconds.bind(lb);
    (() => {
        const {
            performance: e
        } = zt();
        if (!(!e || !e.now)) {
            var t = 3600 * 1e3,
                r = e.now(),
                n = Date.now(),
                s = e.timeOrigin ? Math.abs(e.timeOrigin + r - n) : t,
                o = s < t,
                l = e.timing && e.timing.navigationStart,
                u = typeof l == "number",
                f = u ? Math.abs(l + r - n) : t,
                h = f < t;
            return o || h ? s <= f ? e.timeOrigin : l : n
        }
    })();

    function NJ(e) {
        var t = Y0(),
            r = {
                sid: Va(),
                init: !0,
                timestamp: t,
                started: t,
                duration: 0,
                status: "ok",
                errors: 0,
                ignoreDuration: !1,
                toJSON: () => PJ(r)
            };
        return e && Yc(r, e), r
    }

    function Yc(e, t = {}) {
        if (t.user && (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address), !e.did && !t.did && (e.did = t.user.id || t.user.email || t.user.username)), e.timestamp = t.timestamp || Y0(), t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration), t.sid && (e.sid = t.sid.length === 32 ? t.sid : Va()), t.init !== void 0 && (e.init = t.init), !e.did && t.did && (e.did = `${t.did}`), typeof t.started == "number" && (e.started = t.started), e.ignoreDuration) e.duration = void 0;
        else if (typeof t.duration == "number") e.duration = t.duration;
        else {
            var r = e.timestamp - e.started;
            e.duration = r >= 0 ? r : 0
        }
        t.release && (e.release = t.release), t.environment && (e.environment = t.environment), !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress), !e.userAgent && t.userAgent && (e.userAgent = t.userAgent), typeof t.errors == "number" && (e.errors = t.errors), t.status && (e.status = t.status)
    }

    function LJ(e, t) {
        let r = {};
        t ? r = {
            status: t
        } : e.status === "ok" && (r = {
            status: "exited"
        }), Yc(e, r)
    }

    function PJ(e) {
        return sJ({
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
    var cb = 100;
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
            return this._user = t || {}, this._session && Yc(this._session, {
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
            }, t._user && Object.keys(t._user).length && (this._user = t._user), t._level && (this._level = t._level), t._fingerprint && (this._fingerprint = t._fingerprint), t._requestSession && (this._requestSession = t._requestSession)) : Kc(t) && (t = t, this._tags = {
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
            var n = typeof r == "number" ? Math.min(r, cb) : cb;
            if (n <= 0) return this;
            var s = {
                timestamp: K0(),
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
            }, this._notifyEventProcessors([...q0(), ...this._eventProcessors], t, r)
        }
        setSDKProcessingMetadata(t) {
            return this._sdkProcessingMetadata = {
                ...this._sdkProcessingMetadata,
                ...t
            }, this
        }
        _notifyEventProcessors(t, r, n, s = 0) {
            return new En((o, l) => {
                var u = t[s];
                if (r === null || typeof u != "function") o(r);
                else {
                    var f = u({
                        ...r
                    }, n);
                    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && u.id && f === null && Gt.log(`Event processor "${u.id}" dropped event`), F0(f) ? f.then(h => this._notifyEventProcessors(t, h, n, s + 1).then(o)).then(null, l) : this._notifyEventProcessors(t, f, n, s + 1).then(o).then(null, l)
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

    function q0() {
        return Op("globalEventProcessors", () => [])
    }

    function z0(e) {
        q0().push(e)
    }
    var Ip = 4,
        kJ = 100;
    class yo {
        __init() {
            this._stack = [{}]
        }
        constructor(t, r = new ns, n = Ip) {
            this._version = n, yo.prototype.__init.call(this), this.getStackTop().scope = r, t && this.bindClient(t)
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
            var n = this._lastEventId = r && r.event_id ? r.event_id : Va(),
                s = new Error("Sentry syntheticException");
            return this._withClient((o, l) => {
                o.captureException(t, {
                    originalException: t,
                    syntheticException: s,
                    ...r,
                    event_id: n
                }, l)
            }), n
        }
        captureMessage(t, r, n) {
            var s = this._lastEventId = n && n.event_id ? n.event_id : Va(),
                o = new Error(t);
            return this._withClient((l, u) => {
                l.captureMessage(t, r, {
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
                maxBreadcrumbs: l = kJ
            } = s.getOptions && s.getOptions() || {};
            if (!(l <= 0)) {
                var u = K0(),
                    f = {
                        timestamp: u,
                        ...t
                    },
                    h = o ? B0(() => o(f, r)) : f;
                h !== null && n.addBreadcrumb(h, l)
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
            var r = ub(this);
            try {
                t(this)
            } finally {
                ub(r)
            }
        }
        getIntegration(t) {
            var r = this.getClient();
            if (!r) return null;
            try {
                return r.getIntegration(t)
            } catch {
                return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Gt.warn(`Cannot retrieve integration ${t.id} from the current Hub`), null
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
            n && LJ(n), this._sendSessionUpdate(), r && r.setSession()
        }
        startSession(t) {
            const {
                scope: r,
                client: n
            } = this.getStackTop(), {
                release: s,
                environment: o
            } = n && n.getOptions() || {};
            var l = zt();
            const {
                userAgent: u
            } = l.navigator || {};
            var f = NJ({
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
                h && h.status === "ok" && Yc(h, {
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
            var n = qc(),
                s = n.__SENTRY__;
            if (s && s.extensions && typeof s.extensions[t] == "function") return s.extensions[t].apply(this, r);
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Gt.warn(`Extension method ${t} couldn't be found, doing nothing.`)
        }
    }

    function qc() {
        var e = zt();
        return e.__SENTRY__ = e.__SENTRY__ || {
            extensions: {},
            hub: void 0
        }, e
    }

    function ub(e) {
        var t = qc(),
            r = ai(t);
        return Ap(t, e), r
    }

    function Dr() {
        var e = qc();
        return (!X0(e) || ai(e).isOlderThan(Ip)) && Ap(e, new yo), Sp() ? xJ(e) : ai(e)
    }

    function xJ(e) {
        try {
            var t = qc().__SENTRY__,
                r = t && t.extensions && t.extensions.domain && t.extensions.domain.active;
            if (!r) return ai(e);
            if (!X0(r) || ai(r).isOlderThan(Ip)) {
                var n = ai(e).getStackTop();
                Ap(r, new yo(n.client, ns.clone(n.scope)))
            }
            return ai(r)
        } catch {
            return ai(e)
        }
    }

    function X0(e) {
        return !!(e && e.__SENTRY__ && e.__SENTRY__.hub)
    }

    function ai(e) {
        return Op("hub", () => new yo, e)
    }

    function Ap(e, t) {
        if (!e) return !1;
        var r = e.__SENTRY__ = e.__SENTRY__ || {};
        return r.hub = t, !0
    }

    function DJ(e, t) {
        return Dr().captureException(e, {
            captureContext: t
        })
    }

    function MJ(e) {
        Dr().withScope(e)
    }

    function FJ(e) {
        var t = e.protocol ? `${e.protocol}:` : "",
            r = e.port ? `:${e.port}` : "";
        return `${t}//${e.host}${r}${e.path?`/${e.path}`:""}/api/`
    }

    function UJ(e, t) {
        var r = tJ(e),
            n = `${FJ(r)}embed/error-page/`;
        let s = `dsn=${ZX(r)}`;
        for (var o in t)
            if (o !== "dsn")
                if (o === "user") {
                    var l = t.user;
                    if (!l) continue;
                    l.name && (s += `&name=${encodeURIComponent(l.name)}`), l.email && (s += `&email=${encodeURIComponent(l.email)}`)
                } else s += `&${encodeURIComponent(o)}=${encodeURIComponent(t[o])}`;
        return `${n}?${s}`
    }
    let fb;
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
            fb = Function.prototype.toString, Function.prototype.toString = function(...t) {
                var r = $p(this) || this;
                return fb.apply(r, t)
            }
        }
    }
    io.__initStatic();
    var BJ = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/];
    class Hs {
        static __initStatic() {
            this.id = "InboundFilters"
        }
        __init() {
            this.name = Hs.id
        }
        constructor(t = {}) {
            this._options = t, Hs.prototype.__init.call(this)
        }
        setupOnce(t, r) {
            var n = s => {
                var o = r();
                if (o) {
                    var l = o.getIntegration(Hs);
                    if (l) {
                        var u = o.getClient(),
                            f = u ? u.getOptions() : {},
                            h = jJ(l._options, f);
                        return GJ(s, h) ? null : s
                    }
                }
                return s
            };
            n.id = this.name, t(n)
        }
    }
    Hs.__initStatic();

    function jJ(e = {}, t = {}) {
        return {
            allowUrls: [...e.allowUrls || [], ...t.allowUrls || []],
            denyUrls: [...e.denyUrls || [], ...t.denyUrls || []],
            ignoreErrors: [...e.ignoreErrors || [], ...t.ignoreErrors || [], ...BJ],
            ignoreInternal: e.ignoreInternal !== void 0 ? e.ignoreInternal : !0
        }
    }

    function GJ(e, t) {
        return t.ignoreInternal && YJ(e) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Gt.warn(`Event dropped due to being internal Sentry Error.
Event: ${Ns(e)}`), !0) : WJ(e, t.ignoreErrors) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Gt.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${Ns(e)}`), !0) : HJ(e, t.denyUrls) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Gt.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${Ns(e)}.
Url: ${nc(e)}`), !0) : VJ(e, t.allowUrls) ? !1 : ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Gt.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${Ns(e)}.
Url: ${nc(e)}`), !0)
    }

    function WJ(e, t) {
        return !t || !t.length ? !1 : KJ(e).some(r => t.some(n => Cp(r, n)))
    }

    function HJ(e, t) {
        if (!t || !t.length) return !1;
        var r = nc(e);
        return r ? t.some(n => Cp(r, n)) : !1
    }

    function VJ(e, t) {
        if (!t || !t.length) return !0;
        var r = nc(e);
        return r ? t.some(n => Cp(r, n)) : !0
    }

    function KJ(e) {
        if (e.message) return [e.message];
        if (e.exception) try {
            const {
                type: t = "",
                value: r = ""
            } = e.exception.values && e.exception.values[0] || {};
            return [`${r}`, `${t}: ${r}`]
        } catch {
            return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Gt.error(`Cannot extract message for event ${Ns(e)}`), []
        }
        return []
    }

    function YJ(e) {
        try {
            return e.exception.values[0].type === "SentryError"
        } catch {}
        return !1
    }

    function qJ(e = []) {
        for (let r = e.length - 1; r >= 0; r--) {
            var t = e[r];
            if (t && t.filename !== "<anonymous>" && t.filename !== "[native code]") return t.filename || null
        }
        return null
    }

    function nc(e) {
        try {
            let t;
            try {
                t = e.exception.values[0].stacktrace.frames
            } catch {}
            return t ? qJ(t) : null
        } catch {
            return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Gt.error(`Cannot extract url for event ${Ns(e)}`), null
        }
    }

    function J0(e, t) {
        var r = Rp(e, t),
            n = {
                type: t && t.name,
                value: ZJ(t)
            };
        return r.length && (n.stacktrace = {
            frames: r
        }), n.type === void 0 && n.value === "" && (n.value = "Unrecoverable error caught"), n
    }

    function zJ(e, t, r, n) {
        var s = {
            exception: {
                values: [{
                    type: wp(t) ? t.constructor.name : n ? "UnhandledRejection" : "Error",
                    value: `Non-Error ${n?"promise rejection":"exception"} captured with keys: ${iJ(t)}`
                }]
            },
            extra: {
                __serialized__: V0(t)
            }
        };
        if (r) {
            var o = Rp(e, r);
            o.length && (s.exception.values[0].stacktrace = {
                frames: o
            })
        }
        return s
    }

    function nd(e, t) {
        return {
            exception: {
                values: [J0(e, t)]
            }
        }
    }

    function Rp(e, t) {
        var r = t.stacktrace || t.stack || "",
            n = JJ(t);
        try {
            return e(r, n)
        } catch {}
        return []
    }
    var XJ = /Minified React error #\d+;/i;

    function JJ(e) {
        if (e) {
            if (typeof e.framesToPop == "number") return e.framesToPop;
            if (XJ.test(e.message)) return 1
        }
        return 0
    }

    function ZJ(e) {
        var t = e && e.message;
        return t ? t.error && typeof t.error.message == "string" ? t.error.message : t : "No error message"
    }

    function Z0(e, t, r, n, s) {
        let o;
        if (M0(t) && t.error) {
            var l = t;
            return nd(e, l.error)
        }
        if (Q_(t) || GX(t)) {
            var u = t;
            if ("stack" in t) o = nd(e, t);
            else {
                var f = u.name || (Q_(u) ? "DOMError" : "DOMException"),
                    h = u.message ? `${f}: ${u.message}` : f;
                o = db(e, h, r, n), Xd(o, h)
            }
            return "code" in u && (o.tags = {
                ...o.tags,
                "DOMException.code": `${u.code}`
            }), o
        }
        if (D0(t)) return nd(e, t);
        if (Kc(t) || wp(t)) {
            var g = t;
            return o = zJ(e, g, r, s), rc(o, {
                synthetic: !0
            }), o
        }
        return o = db(e, t, r, n), Xd(o, `${t}`, void 0), rc(o, {
            synthetic: !0
        }), o
    }

    function db(e, t, r, n) {
        var s = {
            message: t
        };
        if (n && r) {
            var o = Rp(e, r);
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
    var QJ = "Breadcrumbs";
    class so {
        static __initStatic() {
            this.id = QJ
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
            this.options.console && zi("console", tZ), this.options.dom && zi("dom", eZ(this.options.dom)), this.options.xhr && zi("xhr", rZ), this.options.fetch && zi("fetch", nZ), this.options.history && zi("history", iZ)
        }
    }
    so.__initStatic();

    function eZ(e) {
        function t(r) {
            let n, s = typeof e == "object" ? e.serializeAttribute : void 0;
            typeof s == "string" && (s = [s]);
            try {
                n = r.event.target ? qd(r.event.target, s) : qd(r.event, s)
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

    function tZ(e) {
        var t = {
            category: "console",
            data: {
                arguments: e.args,
                logger: "console"
            },
            level: IJ(e.level),
            message: rb(e.args, " ")
        };
        if (e.level === "assert")
            if (e.args[0] === !1) t.message = `Assertion failed: ${rb(e.args.slice(1)," ")||"console.assert"}`, t.data.arguments = e.args.slice(1);
            else return;
        Dr().addBreadcrumb(t, {
            input: e.args,
            level: e.level
        })
    }

    function rZ(e) {
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

    function nZ(e) {
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

    function iZ(e) {
        var t = zt();
        let r = e.from,
            n = e.to;
        var s = td(t.location.href);
        let o = td(r);
        var l = td(n);
        o.path || (o = s), s.protocol === l.protocol && s.host === l.host && (n = l.relative), s.protocol === o.protocol && s.host === o.host && (r = o.relative), Dr().addBreadcrumb({
            category: "navigation",
            data: {
                from: r,
                to: n
            }
        })
    }
    let Qd = 0;

    function Q0() {
        return Qd > 0
    }

    function sZ() {
        Qd += 1, setTimeout(() => {
            Qd -= 1
        })
    }

    function ea(e, t = {}, r) {
        if (typeof e != "function") return e;
        try {
            var n = e.__sentry_wrapped__;
            if (n) return n;
            if ($p(e)) return e
        } catch {
            return e
        }
        var s = function() {
            var u = Array.prototype.slice.call(arguments);
            try {
                r && typeof r == "function" && r.apply(this, arguments);
                var f = u.map(h => ea(h, t));
                return e.apply(this, f)
            } catch (h) {
                throw sZ(), MJ(g => {
                    g.addEventProcessor(y => (t.mechanism && (Xd(y, void 0, void 0), rc(y, t.mechanism)), y.extra = {
                        ...y.extra,
                        arguments: u
                    }, y)), DJ(h)
                }), h
            }
        };
        try {
            for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (s[o] = e[o])
        } catch {}
        G0(s, e), j0(e, "__sentry_wrapped__", s);
        try {
            var l = Object.getOwnPropertyDescriptor(s, "name");
            l.configurable && Object.defineProperty(s, "name", {
                get() {
                    return e.name
                }
            })
        } catch {}
        return s
    }
    class ui {
        static __initStatic() {
            this.id = "GlobalHandlers"
        }
        __init() {
            this.name = ui.id
        }
        __init2() {
            this._installFunc = {
                onerror: aZ,
                onunhandledrejection: oZ
            }
        }
        constructor(t) {
            ui.prototype.__init.call(this), ui.prototype.__init2.call(this), this._options = {
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
                n && t[r] && (uZ(r), n(), this._installFunc[r] = void 0)
            }
        }
    }
    ui.__initStatic();

    function aZ() {
        zi("error", e => {
            const [t, r, n] = rS();
            if (!t.getIntegration(ui)) return;
            const {
                msg: s,
                url: o,
                line: l,
                column: u,
                error: f
            } = e;
            if (!(Q0() || f && f.__sentry_own_request__)) {
                var h = f === void 0 && Qs(s) ? cZ(s, o, l, u) : eS(Z0(r, f || s, void 0, n, !1), o, l, u);
                h.level = "error", tS(t, f, h, "onerror")
            }
        })
    }

    function oZ() {
        zi("unhandledrejection", e => {
            const [t, r, n] = rS();
            if (!t.getIntegration(ui)) return;
            let s = e;
            try {
                "reason" in e ? s = e.reason : "detail" in e && "reason" in e.detail && (s = e.detail.reason)
            } catch {}
            if (Q0() || s && s.__sentry_own_request__) return !0;
            var o = WX(s) ? lZ(s) : Z0(r, s, void 0, n, !0);
            o.level = "error", tS(t, s, o, "onunhandledrejection")
        })
    }

    function lZ(e) {
        return {
            exception: {
                values: [{
                    type: "UnhandledRejection",
                    value: `Non-Error promise rejection captured with value: ${String(e)}`
                }]
            }
        }
    }

    function cZ(e, t, r, n) {
        var s = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
        let o = M0(e) ? e.message : e,
            l = "Error";
        var u = o.match(s);
        u && (l = u[1], o = u[2]);
        var f = {
            exception: {
                values: [{
                    type: l,
                    value: o
                }]
            }
        };
        return eS(f, t, r, n)
    }

    function eS(e, t, r, n) {
        var s = e.exception = e.exception || {},
            o = s.values = s.values || [],
            l = o[0] = o[0] || {},
            u = l.stacktrace = l.stacktrace || {},
            f = u.frames = u.frames || [],
            h = isNaN(parseInt(n, 10)) ? void 0 : n,
            g = isNaN(parseInt(r, 10)) ? void 0 : r,
            y = Qs(t) && t.length > 0 ? t : zX();
        return f.length === 0 && f.push({
            colno: h,
            filename: y,
            function: "?",
            in_app: !0,
            lineno: g
        }), e
    }

    function uZ(e) {
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Gt.log(`Global Handler attached: ${e}`)
    }

    function tS(e, t, r, n) {
        rc(r, {
            handled: !1,
            type: n
        }), e.captureEvent(r, {
            originalException: t
        })
    }

    function rS() {
        var e = Dr(),
            t = e.getClient(),
            r = t && t.getOptions() || {
                stackParser: () => [],
                attachStacktrace: !1
            };
        return [e, r.stackParser, r.attachStacktrace]
    }
    var fZ = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"];
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
            var t = zt();
            this._options.setTimeout && cr(t, "setTimeout", hb), this._options.setInterval && cr(t, "setInterval", hb), this._options.requestAnimationFrame && cr(t, "requestAnimationFrame", dZ), this._options.XMLHttpRequest && "XMLHttpRequest" in t && cr(XMLHttpRequest.prototype, "send", hZ);
            var r = this._options.eventTarget;
            if (r) {
                var n = Array.isArray(r) ? r : fZ;
                n.forEach(pZ)
            }
        }
    }
    ao.__initStatic();

    function hb(e) {
        return function(...t) {
            var r = t[0];
            return t[0] = ea(r, {
                mechanism: {
                    data: {
                        function: pi(e)
                    },
                    handled: !0,
                    type: "instrument"
                }
            }), e.apply(this, t)
        }
    }

    function dZ(e) {
        return function(t) {
            return e.apply(this, [ea(t, {
                mechanism: {
                    data: {
                        function: "requestAnimationFrame",
                        handler: pi(e)
                    },
                    handled: !0,
                    type: "instrument"
                }
            })])
        }
    }

    function hZ(e) {
        return function(...t) {
            var r = this,
                n = ["onload", "onerror", "onprogress", "onreadystatechange"];
            return n.forEach(s => {
                s in r && typeof r[s] == "function" && cr(r, s, function(o) {
                    var l = {
                            mechanism: {
                                data: {
                                    function: s,
                                    handler: pi(o)
                                },
                                handled: !0,
                                type: "instrument"
                            }
                        },
                        u = $p(o);
                    return u && (l.mechanism.data.handler = pi(u)), ea(o, l)
                })
            }), e.apply(this, t)
        }
    }

    function pZ(e) {
        var t = zt(),
            r = t[e] && t[e].prototype;
        !r || !r.hasOwnProperty || !r.hasOwnProperty("addEventListener") || (cr(r, "addEventListener", function(n) {
            return function(s, o, l) {
                try {
                    typeof o.handleEvent == "function" && (o.handleEvent = ea(o.handleEvent, {
                        mechanism: {
                            data: {
                                function: "handleEvent",
                                handler: pi(o),
                                target: e
                            },
                            handled: !0,
                            type: "instrument"
                        }
                    }))
                } catch {}
                return n.apply(this, [s, ea(o, {
                    mechanism: {
                        data: {
                            function: "addEventListener",
                            handler: pi(o),
                            target: e
                        },
                        handled: !0,
                        type: "instrument"
                    }
                }), l])
            }
        }), cr(r, "removeEventListener", function(n) {
            return function(s, o, l) {
                var u = o;
                try {
                    var f = u && u.__sentry_wrapped__;
                    f && n.call(this, s, f, l)
                } catch {}
                return n.call(this, s, u, l)
            }
        }))
    }
    var gZ = "cause",
        mZ = 5;
    class Vs {
        static __initStatic() {
            this.id = "LinkedErrors"
        }
        __init() {
            this.name = Vs.id
        }
        constructor(t = {}) {
            Vs.prototype.__init.call(this), this._key = t.key || gZ, this._limit = t.limit || mZ
        }
        setupOnce() {
            var t = Dr().getClient();
            !t || z0((r, n) => {
                var s = Dr().getIntegration(Vs);
                return s ? vZ(t.getOptions().stackParser, s._key, s._limit, r, n) : r
            })
        }
    }
    Vs.__initStatic();

    function vZ(e, t, r, n, s) {
        if (!n.exception || !n.exception.values || !s || !Ti(s.originalException, Error)) return n;
        var o = nS(e, r, s.originalException, t);
        return n.exception.values = [...o, ...n.exception.values], n
    }

    function nS(e, t, r, n, s = []) {
        if (!Ti(r[n], Error) || s.length + 1 >= t) return s;
        var o = J0(e, r[n]);
        return nS(e, t, r[n], n, [o, ...s])
    }
    var Bi = zt();
    class Ks {
        constructor() {
            Ks.prototype.__init.call(this)
        }
        static __initStatic() {
            this.id = "HttpContext"
        }
        __init() {
            this.name = Ks.id
        }
        setupOnce() {
            z0(t => {
                if (Dr().getIntegration(Ks)) {
                    if (!Bi.navigator && !Bi.location && !Bi.document) return t;
                    var r = t.request && t.request.url || Bi.location && Bi.location.href;
                    const {
                        referrer: o
                    } = Bi.document || {}, {
                        userAgent: l
                    } = Bi.navigator || {};
                    var n = {
                            ...t.request && t.request.headers,
                            ...o && {
                                Referer: o
                            },
                            ...l && {
                                "User-Agent": l
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
    Ks.__initStatic();
    class Ys {
        constructor() {
            Ys.prototype.__init.call(this)
        }
        static __initStatic() {
            this.id = "Dedupe"
        }
        __init() {
            this.name = Ys.id
        }
        setupOnce(t, r) {
            var n = s => {
                var o = r().getIntegration(Ys);
                if (o) {
                    try {
                        if (yZ(s, o._previousEvent)) return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Gt.warn("Event dropped due to being a duplicate of previously captured event."), null
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
    Ys.__initStatic();

    function yZ(e, t) {
        return t ? !!(_Z(e, t) || bZ(e, t)) : !1
    }

    function _Z(e, t) {
        var r = e.message,
            n = t.message;
        return !(!r && !n || r && !n || !r && n || r !== n || !sS(e, t) || !iS(e, t))
    }

    function bZ(e, t) {
        var r = pb(t),
            n = pb(e);
        return !(!r || !n || r.type !== n.type || r.value !== n.value || !sS(e, t) || !iS(e, t))
    }

    function iS(e, t) {
        let r = gb(e),
            n = gb(t);
        if (!r && !n) return !0;
        if (r && !n || !r && n || (r = r, n = n, n.length !== r.length)) return !1;
        for (let l = 0; l < n.length; l++) {
            var s = n[l],
                o = r[l];
            if (s.filename !== o.filename || s.lineno !== o.lineno || s.colno !== o.colno || s.function !== o.function) return !1
        }
        return !0
    }

    function sS(e, t) {
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

    function pb(e) {
        return e.exception && e.exception.values && e.exception.values[0]
    }

    function gb(e) {
        var t = e.exception;
        if (t) try {
            return t.values[0].stacktrace.frames
        } catch {
            return
        }
    }
    new Hs, new io, new ao, new so, new ui, new Vs, new Ys, new Ks;

    function EZ(e = {}, t = Dr()) {
        var r = zt();
        if (!r.document) {
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Gt.error("Global document not defined in showReportDialog call");
            return
        }
        const {
            client: n,
            scope: s
        } = t.getStackTop();
        var o = e.dsn || n && n.getDsn();
        if (!o) {
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Gt.error("DSN not configured for showReportDialog call");
            return
        }
        s && (e.user = {
            ...s.getUser(),
            ...e.user
        }), e.eventId || (e.eventId = t.lastEventId());
        var l = r.document.createElement("script");
        l.async = !0, l.src = UJ(o, e), e.onLoad && (l.onload = e.onLoad);
        var u = r.document.head || r.document.body;
        u ? u.appendChild(l) : (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Gt.error("Not injecting report dialog. No injection point found in HTML")
    }
    const TZ = it({
            setup() {
                return {
                    fatalError: Zi(vo.fatal.error)
                }
            },
            computed: {
                message() {
                    var n, s, o, l, u;
                    const e = (o = (s = (n = this.fatalError) == null ? void 0 : n.event) == null ? void 0 : s.event_id) != null ? o : "Unknown";
                    let t = "";
                    const r = (u = (l = this.fatalError) == null ? void 0 : l.hint) == null ? void 0 : u.originalException;
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
                    EZ({
                        id: (r = (t = (e = this.fatalError) == null ? void 0 : e.event) == null ? void 0 : t.event_id) != null ? r : "Unknown"
                    })
                }
            }
        }),
        _o = e => (pc("data-v-a7272d53"), e = e(), gc(), e),
        SZ = {
            class: "jbg fatal"
        },
        OZ = {
            class: "constrain"
        },
        wZ = _o(() => Z("a", {
            class: "logo",
            href: "/",
            "aria-label": "Jackbox Games Logo"
        }, null, -1)),
        CZ = {
            class: "content"
        },
        $Z = _o(() => Z("h1", null, "You have encountered an error", -1)),
        IZ = _o(() => Z("p", null, "Something went wrong! But don't worry, you can try a few things to get going.", -1)),
        AZ = _o(() => Z("ul", null, [Z("li", null, "Refresh the page"), Z("li", null, "Turn off adblockers or other browser extensions."), Z("li", null, "Check your connection to the Internet."), Z("li", null, "Make sure you're using an up-to-date browser."), Z("li", null, "If that doesn't work, let us know.")], -1)),
        RZ = _o(() => Z("hr", null, null, -1)),
        NZ = {
            class: "error"
        };

    function LZ(e, t, r, n, s, o) {
        return H(), z("div", SZ, [Z("div", OZ, [wZ, Z("div", CZ, [$Z, IZ, AZ, Z("button", {
            onClick: t[0] || (t[0] = (...l) => e.onFeedbackClick && e.onFeedbackClick(...l))
        }, "Tell us what happened"), RZ, Z("pre", NZ, _t(e.message), 1)])])])
    }
    const PZ = ze(TZ, [
            ["render", LZ],
            ["__scopeId", "data-v-a7272d53"]
        ]),
        Cl = Bn({
            hasCrashed: !1
        }),
        kZ = {
            install: e => {
                if (e.config.globalProperties.$handleEcastError) return;
                e.provide(vo.fatal.error, kr(() => Cl));
                const t = (r, n) => {
                    var s, o;
                    if (r instanceof Ga.EcastEntityNotFound || r instanceof Ga.EcastFilterError || r instanceof Ga.EcastRateLimitExceeded || r instanceof Error && ((s = r.message) == null ? void 0 : s.includes("Socket not ready to send")) || r instanceof Error && ((o = r.message) == null ? void 0 : o.includes("No connection available"))) return console.warn(r);
                    throw n ? console.error(n, r) : console.error(r), r
                };
                window.tv.onError = async (r, n) => {
                    if (r.level === "error" && (Cl.hasCrashed = !0, Cl.event = r, Cl.hint = n), e.config.globalProperties.$debugRecorder) return await e.config.globalProperties.$debugRecorder.sendToEcast()
                }, e.component("Fatal", PZ), e.config.globalProperties.$handleEcastError = t
            }
        };
    var xZ = P0,
        DZ = k0;

    function MZ(e, t) {
        t = xZ(t, e);
        for (var r = 0, n = t.length; e != null && r < n;) e = e[DZ(t[r++])];
        return r && r == n ? e : void 0
    }
    var FZ = MZ,
        UZ = FZ;

    function BZ(e, t, r) {
        var n = e == null ? void 0 : UZ(e, t);
        return n === void 0 ? r : n
    }
    var jZ = BZ,
        GZ = Math.floor,
        WZ = Math.random;

    function HZ(e, t) {
        return e + GZ(WZ() * (t - e + 1))
    }
    var VZ = HZ,
        KZ = VZ;

    function YZ(e) {
        var t = e.length;
        return t ? e[KZ(0, t - 1)] : void 0
    }
    var aS = YZ,
        qZ = N0;

    function zZ(e, t) {
        return qZ(t, function(r) {
            return e[r]
        })
    }
    var XZ = zZ,
        JZ = XZ,
        ZZ = Hc;

    function QZ(e) {
        return e == null ? [] : JZ(e, ZZ(e))
    }
    var eQ = QZ,
        tQ = aS,
        rQ = eQ;

    function nQ(e) {
        return tQ(rQ(e))
    }
    var iQ = nQ,
        sQ = aS,
        aQ = iQ,
        oQ = vi;

    function lQ(e) {
        var t = oQ(e) ? sQ : aQ;
        return t(e)
    }
    var cQ = lQ;

    function mb(e, t) {
        const r = e.global.locale,
            n = e.global.messages[r],
            s = jZ(n, t);
        return Array.isArray(s) || console.warn(`[i18nPlugin] Translation with key ${t} is not an array`), cQ(s)
    }
    const uQ = {
            install: (e, t) => {
                e.directive("ts", (r, n) => {
                    const s = mb(t.i18n, n.value);
                    r.textContent = s || ""
                }), e.config.globalProperties.$ts = function(n) {
                    return mb(t.i18n, n) || ""
                }, e.config.globalProperties.$t = t.i18n.global.t, e.config.globalProperties.$tc = t.i18n.global.tc, e.config.globalProperties.$te = t.i18n.global.te, e.config.globalProperties.$tm = t.i18n.global.tm
            }
        },
        fQ = it({
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
        dQ = "main/pp9/fourbage/assets/928ef0da.png",
        hQ = "main/pp9/fourbage/assets/0bb76a2d.png",
        pQ = "main/pp9/fourbage/assets/ed4469b3.png",
        gQ = {
            key: 0,
            class: "image",
            src: dQ,
            alt: "Kicked"
        },
        mQ = {
            key: 1,
            class: "image",
            src: hQ,
            alt: "Thank You"
        },
        vQ = {
            key: 2,
            class: "image",
            src: pQ,
            alt: "Error"
        },
        yQ = {
            class: "text"
        },
        _Q = {
            key: 3,
            class: "subtext"
        },
        bQ = {
            class: "actions"
        };

    function EQ(e, t, r, n, s, o) {
        const l = Rt("bb");
        return H(), z("div", {
            class: Me(["error-model", e.classes])
        }, [e.image === "tear" ? (H(), z("img", gQ)) : e.image === "moon" ? (H(), z("img", mQ)) : (H(), z("img", vQ)), Ie(Z("h3", yQ, null, 512), [
            [l, e.text]
        ]), e.subtext ? Ie((H(), z("h3", _Q, null, 512)), [
            [l, e.subtext]
        ]) : Se("", !0), Z("div", bQ, [Ie(Z("button", {
            onClick: t[0] || (t[0] = Zr(u => e.$emit("resolve"), ["prevent"]))
        }, null, 512), [
            [l, e.dismissText]
        ])])], 2)
    }
    const TQ = ze(fQ, [
            ["render", EQ],
            ["__scopeId", "data-v-39debcb6"]
        ]),
        SQ = it({
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
        OQ = {
            class: "text"
        },
        wQ = {
            key: 0,
            class: "subtext"
        },
        CQ = {
            class: "actions"
        },
        $Q = ["onClick"];

    function IQ(e, t, r, n, s, o) {
        const l = Rt("bb");
        return H(), z("div", {
            class: Me(["options-modal", e.classes])
        }, [Ie(Z("h3", OQ, null, 512), [
            [l, e.text]
        ]), e.subtext ? Ie((H(), z("h3", wQ, null, 512)), [
            [l, e.subtext]
        ]) : Se("", !0), Z("div", CQ, [(H(!0), z(et, null, un(e.options, (u, f) => Ie((H(), z("button", {
            key: f,
            class: Me(u.classes),
            onClick: Zr(h => e.$emit("resolve", u.value), ["prevent"])
        }, null, 10, $Q)), [
            [l, u.text]
        ])), 128))])], 2)
    }
    const AQ = ze(SQ, [
            ["render", IQ],
            ["__scopeId", "data-v-fdbdeb06"]
        ]),
        RQ = it({
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
                    return this.props = t, this.classes = r.classes || "jbg", e === "Error" ? this.content = TQ : e === "Options" ? this.content = AQ : this.content = e, new Promise(n => {
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

    function NQ(e, t, r, n, s, o) {
        return H(), lr(Sc, {
            name: "modal-transition"
        }, {
            default: Fs(() => [e.props ? (H(), z("div", {
                key: 0,
                class: Me(["modal", e.classes]),
                onKeyup: t[0] || (t[0] = Us((...l) => e.onBackgroundClick && e.onBackgroundClick(...l), ["esc"])),
                onClick: t[1] || (t[1] = Zr((...l) => e.onBackgroundClick && e.onBackgroundClick(...l), ["self"]))
            }, [e.content ? (H(), lr(yc(e.content), Ec({
                key: 0,
                class: "content"
            }, e.props, {
                onResolve: e.onResolve
            }), null, 16, ["onResolve"])) : Se("", !0)], 34)) : Se("", !0)]),
            _: 1
        })
    }
    const LQ = ze(RQ, [
            ["render", NQ],
            ["__scopeId", "data-v-dc92e8d3"]
        ]),
        PQ = {
            install: e => {
                if (e.config.globalProperties.$showModal) return;
                let t;
                const r = (s, o, l) => {
                        if (!t) throw new Error("No ModalComponent is registered");
                        return t.show(s, o, l)
                    },
                    n = s => {
                        t = s
                    };
                e.component("Modal", LQ), e.config.globalProperties.$showModal = r, e.config.globalProperties.$registerModal = n
            }
        },
        kQ = it({
            setup() {
                return {
                    announcment: Zi(vo.textDescriptions.announcement)
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
        xQ = {
            class: "text-descriptions",
            role: "log",
            "aria-atomic": "false",
            "aria-relevant": "additions",
            "aria-live": "polite"
        };

    function DQ(e, t, r, n, s, o) {
        return H(), z("div", xQ, [(H(!0), z(et, null, un(e.lines, l => (H(), z("p", {
            key: l.id
        }, _t(l.text), 1))), 128))])
    }
    const MQ = ze(kQ, [
            ["render", DQ]
        ]),
        vb = on(""),
        FQ = {
            install: e => {
                if (e.config.globalProperties.$announce) return;
                e.provide(vo.textDescriptions.announcement, kr(() => vb.value));
                const t = r => {
                    vb.value = r
                };
                e.component("TextDescriptions", MQ), e.config.globalProperties.$announce = t
            }
        },
        UQ = {
            install: e => {
                let t = "",
                    r = "";
                const n = o => o instanceof Function ? o() : o,
                    s = o => {
                        const l = document.querySelector('meta[name="theme-color"]');
                        !l || (document.body && (document.body.style.background = o), l.setAttribute("content", o), r = o)
                    };
                e.config.globalProperties.$setThemeColor = function(l) {
                    this.$options.themeColor = l, s(l)
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
        BQ = {
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
    const eh = typeof window < "u",
        jQ = typeof Symbol == "function" && typeof Symbol.toStringTag == "symbol",
        Si = e => jQ ? Symbol(e) : e,
        GQ = (e, t, r) => WQ({
            l: e,
            k: t,
            s: r
        }),
        WQ = e => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"),
        jt = e => typeof e == "number" && isFinite(e),
        HQ = e => Lp(e) === "[object Date]",
        gi = e => Lp(e) === "[object RegExp]",
        zc = e => Be(e) && Object.keys(e).length === 0;

    function VQ(e, t) {
        typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack))
    }
    const er = Object.assign;

    function yb(e) {
        return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
    }
    const KQ = Object.prototype.hasOwnProperty;

    function Np(e, t) {
        return KQ.call(e, t)
    }
    const bt = Array.isArray,
        Pt = e => typeof e == "function",
        ye = e => typeof e == "string",
        Je = e => typeof e == "boolean",
        Et = e => e !== null && typeof e == "object",
        oS = Object.prototype.toString,
        Lp = e => oS.call(e),
        Be = e => Lp(e) === "[object Object]",
        YQ = e => e == null ? "" : bt(e) || Be(e) && e.toString === oS ? JSON.stringify(e, null, 2) : String(e);
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

    function Xc(e, t, r = {}) {
        const {
            domain: n,
            messages: s,
            args: o
        } = r, l = e, u = new SyntaxError(String(l));
        return u.code = e, t && (u.location = t), u.domain = n, u
    }

    function qQ(e) {
        throw e
    }

    function zQ(e, t, r) {
        return {
            line: e,
            column: t,
            offset: r
        }
    }

    function th(e, t, r) {
        const n = {
            start: e,
            end: t
        };
        return r != null && (n.source = r), n
    }
    const xn = " ",
        XQ = "\r",
        mr = `
`,
        JQ = String.fromCharCode(8232),
        ZQ = String.fromCharCode(8233);

    function QQ(e) {
        const t = e;
        let r = 0,
            n = 1,
            s = 1,
            o = 0;
        const l = oe => t[oe] === XQ && t[oe + 1] === mr,
            u = oe => t[oe] === mr,
            f = oe => t[oe] === ZQ,
            h = oe => t[oe] === JQ,
            g = oe => l(oe) || u(oe) || f(oe) || h(oe),
            y = () => r,
            E = () => n,
            C = () => s,
            P = () => o,
            M = oe => l(oe) || f(oe) || h(oe) ? mr : t[oe],
            B = () => M(r),
            $ = () => M(r + o);

        function V() {
            return o = 0, g(r) && (n++, s = 0), l(r) && r++, r++, s++, t[r]
        }

        function q() {
            return l(r + o) && o++, o++, t[r + o]
        }

        function G() {
            r = 0, n = 1, s = 1, o = 0
        }

        function j(oe = 0) {
            o = oe
        }

        function J() {
            const oe = r + o;
            for (; oe !== r;) V();
            o = 0
        }
        return {
            index: y,
            line: E,
            column: C,
            peekOffset: P,
            charAt: M,
            currentChar: B,
            currentPeek: $,
            next: V,
            peek: q,
            reset: G,
            resetPeek: j,
            skipToPeek: J
        }
    }
    const ri = void 0,
        _b = "'",
        eee = "tokenizer";

    function tee(e, t = {}) {
        const r = t.location !== !1,
            n = QQ(e),
            s = () => n.index(),
            o = () => zQ(n.line(), n.column(), n.index()),
            l = o(),
            u = s(),
            f = {
                currentType: 14,
                offset: u,
                startLoc: l,
                endLoc: l,
                lastType: 14,
                lastOffset: u,
                lastStartLoc: l,
                lastEndLoc: l,
                braceNest: 0,
                inLinked: !1,
                text: ""
            },
            h = () => f,
            {
                onError: g
            } = t;

        function y(m, p, O, ...D) {
            const U = h();
            if (p.column += O, p.offset += O, g) {
                const Y = th(U.startLoc, p),
                    ce = Xc(m, Y, {
                        domain: eee,
                        args: D
                    });
                g(ce)
            }
        }

        function E(m, p, O) {
            m.endLoc = o(), m.currentType = p;
            const D = {
                type: p
            };
            return r && (D.loc = th(m.startLoc, m.endLoc)), O != null && (D.value = O), D
        }
        const C = m => E(m, 14);

        function P(m, p) {
            return m.currentChar() === p ? (m.next(), p) : (y(rt.EXPECTED_TOKEN, o(), 0, p), "")
        }

        function M(m) {
            let p = "";
            for (; m.currentPeek() === xn || m.currentPeek() === mr;) p += m.currentPeek(), m.peek();
            return p
        }

        function B(m) {
            const p = M(m);
            return m.skipToPeek(), p
        }

        function $(m) {
            if (m === ri) return !1;
            const p = m.charCodeAt(0);
            return p >= 97 && p <= 122 || p >= 65 && p <= 90 || p === 95
        }

        function V(m) {
            if (m === ri) return !1;
            const p = m.charCodeAt(0);
            return p >= 48 && p <= 57
        }

        function q(m, p) {
            const {
                currentType: O
            } = p;
            if (O !== 2) return !1;
            M(m);
            const D = $(m.currentPeek());
            return m.resetPeek(), D
        }

        function G(m, p) {
            const {
                currentType: O
            } = p;
            if (O !== 2) return !1;
            M(m);
            const D = m.currentPeek() === "-" ? m.peek() : m.currentPeek(),
                U = V(D);
            return m.resetPeek(), U
        }

        function j(m, p) {
            const {
                currentType: O
            } = p;
            if (O !== 2) return !1;
            M(m);
            const D = m.currentPeek() === _b;
            return m.resetPeek(), D
        }

        function J(m, p) {
            const {
                currentType: O
            } = p;
            if (O !== 8) return !1;
            M(m);
            const D = m.currentPeek() === ".";
            return m.resetPeek(), D
        }

        function oe(m, p) {
            const {
                currentType: O
            } = p;
            if (O !== 9) return !1;
            M(m);
            const D = $(m.currentPeek());
            return m.resetPeek(), D
        }

        function le(m, p) {
            const {
                currentType: O
            } = p;
            if (!(O === 8 || O === 12)) return !1;
            M(m);
            const D = m.currentPeek() === ":";
            return m.resetPeek(), D
        }

        function ue(m, p) {
            const {
                currentType: O
            } = p;
            if (O !== 10) return !1;
            const D = () => {
                    const Y = m.currentPeek();
                    return Y === "{" ? $(m.peek()) : Y === "@" || Y === "%" || Y === "|" || Y === ":" || Y === "." || Y === xn || !Y ? !1 : Y === mr ? (m.peek(), D()) : $(Y)
                },
                U = D();
            return m.resetPeek(), U
        }

        function Ae(m) {
            M(m);
            const p = m.currentPeek() === "|";
            return m.resetPeek(), p
        }

        function $e(m) {
            const p = M(m),
                O = m.currentPeek() === "%" && m.peek() === "{";
            return m.resetPeek(), {
                isModulo: O,
                hasSpace: p.length > 0
            }
        }

        function fe(m, p = !0) {
            const O = (U = !1, Y = "", ce = !1) => {
                    const se = m.currentPeek();
                    return se === "{" ? Y === "%" ? !1 : U : se === "@" || !se ? Y === "%" ? !0 : U : se === "%" ? (m.peek(), O(U, "%", !0)) : se === "|" ? Y === "%" || ce ? !0 : !(Y === xn || Y === mr) : se === xn ? (m.peek(), O(!0, xn, ce)) : se === mr ? (m.peek(), O(!0, mr, ce)) : !0
                },
                D = O();
            return p && m.resetPeek(), D
        }

        function Ce(m, p) {
            const O = m.currentChar();
            return O === ri ? ri : p(O) ? (m.next(), O) : null
        }

        function F(m) {
            return Ce(m, O => {
                const D = O.charCodeAt(0);
                return D >= 97 && D <= 122 || D >= 65 && D <= 90 || D >= 48 && D <= 57 || D === 95 || D === 36
            })
        }

        function ie(m) {
            return Ce(m, O => {
                const D = O.charCodeAt(0);
                return D >= 48 && D <= 57
            })
        }

        function de(m) {
            return Ce(m, O => {
                const D = O.charCodeAt(0);
                return D >= 48 && D <= 57 || D >= 65 && D <= 70 || D >= 97 && D <= 102
            })
        }

        function be(m) {
            let p = "",
                O = "";
            for (; p = ie(m);) O += p;
            return O
        }

        function ve(m) {
            B(m);
            const p = m.currentChar();
            return p !== "%" && y(rt.EXPECTED_TOKEN, o(), 0, p), m.next(), "%"
        }

        function Oe(m) {
            let p = "";
            for (;;) {
                const O = m.currentChar();
                if (O === "{" || O === "}" || O === "@" || O === "|" || !O) break;
                if (O === "%")
                    if (fe(m)) p += O, m.next();
                    else break;
                else if (O === xn || O === mr)
                    if (fe(m)) p += O, m.next();
                    else {
                        if (Ae(m)) break;
                        p += O, m.next()
                    }
                else p += O, m.next()
            }
            return p
        }

        function Fe(m) {
            B(m);
            let p = "",
                O = "";
            for (; p = F(m);) O += p;
            return m.currentChar() === ri && y(rt.UNTERMINATED_CLOSING_BRACE, o(), 0), O
        }

        function Ge(m) {
            B(m);
            let p = "";
            return m.currentChar() === "-" ? (m.next(), p += `-${be(m)}`) : p += be(m), m.currentChar() === ri && y(rt.UNTERMINATED_CLOSING_BRACE, o(), 0), p
        }

        function tt(m) {
            B(m), P(m, "'");
            let p = "",
                O = "";
            const D = Y => Y !== _b && Y !== mr;
            for (; p = Ce(m, D);) p === "\\" ? O += It(m) : O += p;
            const U = m.currentChar();
            return U === mr || U === ri ? (y(rt.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, o(), 0), U === mr && (m.next(), P(m, "'")), O) : (P(m, "'"), O)
        }

        function It(m) {
            const p = m.currentChar();
            switch (p) {
                case "\\":
                case "'":
                    return m.next(), `\\${p}`;
                case "u":
                    return $r(m, p, 4);
                case "U":
                    return $r(m, p, 6);
                default:
                    return y(rt.UNKNOWN_ESCAPE_SEQUENCE, o(), 0, p), ""
            }
        }

        function $r(m, p, O) {
            P(m, p);
            let D = "";
            for (let U = 0; U < O; U++) {
                const Y = de(m);
                if (!Y) {
                    y(rt.INVALID_UNICODE_ESCAPE_SEQUENCE, o(), 0, `\\${p}${D}${m.currentChar()}`);
                    break
                }
                D += Y
            }
            return `\\${p}${D}`
        }

        function rr(m) {
            B(m);
            let p = "",
                O = "";
            const D = U => U !== "{" && U !== "}" && U !== xn && U !== mr;
            for (; p = Ce(m, D);) O += p;
            return O
        }

        function yr(m) {
            let p = "",
                O = "";
            for (; p = F(m);) O += p;
            return O
        }

        function ot(m) {
            const p = (O = !1, D) => {
                const U = m.currentChar();
                return U === "{" || U === "%" || U === "@" || U === "|" || !U || U === xn ? D : U === mr ? (D += U, m.next(), p(O, D)) : (D += U, m.next(), p(!0, D))
            };
            return p(!1, "")
        }

        function Ot(m) {
            B(m);
            const p = P(m, "|");
            return B(m), p
        }

        function lt(m, p) {
            let O = null;
            switch (m.currentChar()) {
                case "{":
                    return p.braceNest >= 1 && y(rt.NOT_ALLOW_NEST_PLACEHOLDER, o(), 0), m.next(), O = E(p, 2, "{"), B(m), p.braceNest++, O;
                case "}":
                    return p.braceNest > 0 && p.currentType === 2 && y(rt.EMPTY_PLACEHOLDER, o(), 0), m.next(), O = E(p, 3, "}"), p.braceNest--, p.braceNest > 0 && B(m), p.inLinked && p.braceNest === 0 && (p.inLinked = !1), O;
                case "@":
                    return p.braceNest > 0 && y(rt.UNTERMINATED_CLOSING_BRACE, o(), 0), O = xt(m, p) || C(p), p.braceNest = 0, O;
                default:
                    let U = !0,
                        Y = !0,
                        ce = !0;
                    if (Ae(m)) return p.braceNest > 0 && y(rt.UNTERMINATED_CLOSING_BRACE, o(), 0), O = E(p, 1, Ot(m)), p.braceNest = 0, p.inLinked = !1, O;
                    if (p.braceNest > 0 && (p.currentType === 5 || p.currentType === 6 || p.currentType === 7)) return y(rt.UNTERMINATED_CLOSING_BRACE, o(), 0), p.braceNest = 0, Vt(m, p);
                    if (U = q(m, p)) return O = E(p, 5, Fe(m)), B(m), O;
                    if (Y = G(m, p)) return O = E(p, 6, Ge(m)), B(m), O;
                    if (ce = j(m, p)) return O = E(p, 7, tt(m)), B(m), O;
                    if (!U && !Y && !ce) return O = E(p, 13, rr(m)), y(rt.INVALID_TOKEN_IN_PLACEHOLDER, o(), 0, O.value), B(m), O;
                    break
            }
            return O
        }

        function xt(m, p) {
            const {
                currentType: O
            } = p;
            let D = null;
            const U = m.currentChar();
            switch ((O === 8 || O === 9 || O === 12 || O === 10) && (U === mr || U === xn) && y(rt.INVALID_LINKED_FORMAT, o(), 0), U) {
                case "@":
                    return m.next(), D = E(p, 8, "@"), p.inLinked = !0, D;
                case ".":
                    return B(m), m.next(), E(p, 9, ".");
                case ":":
                    return B(m), m.next(), E(p, 10, ":");
                default:
                    return Ae(m) ? (D = E(p, 1, Ot(m)), p.braceNest = 0, p.inLinked = !1, D) : J(m, p) || le(m, p) ? (B(m), xt(m, p)) : oe(m, p) ? (B(m), E(p, 12, yr(m))) : ue(m, p) ? (B(m), U === "{" ? lt(m, p) || D : E(p, 11, ot(m))) : (O === 8 && y(rt.INVALID_LINKED_FORMAT, o(), 0), p.braceNest = 0, p.inLinked = !1, Vt(m, p))
            }
        }

        function Vt(m, p) {
            let O = {
                type: 14
            };
            if (p.braceNest > 0) return lt(m, p) || C(p);
            if (p.inLinked) return xt(m, p) || C(p);
            switch (m.currentChar()) {
                case "{":
                    return lt(m, p) || C(p);
                case "}":
                    return y(rt.UNBALANCED_CLOSING_BRACE, o(), 0), m.next(), E(p, 3, "}");
                case "@":
                    return xt(m, p) || C(p);
                default:
                    if (Ae(m)) return O = E(p, 1, Ot(m)), p.braceNest = 0, p.inLinked = !1, O;
                    const {
                        isModulo: U, hasSpace: Y
                    } = $e(m);
                    if (U) return Y ? E(p, 0, Oe(m)) : E(p, 4, ve(m));
                    if (fe(m)) return E(p, 0, Oe(m));
                    break
            }
            return O
        }

        function Dt() {
            const {
                currentType: m,
                offset: p,
                startLoc: O,
                endLoc: D
            } = f;
            return f.lastType = m, f.lastOffset = p, f.lastStartLoc = O, f.lastEndLoc = D, f.offset = s(), f.startLoc = o(), n.currentChar() === ri ? E(f, 14) : Vt(n, f)
        }
        return {
            nextToken: Dt,
            currentOffset: s,
            currentPosition: o,
            context: h
        }
    }
    const ree = "parser",
        nee = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;

    function iee(e, t, r) {
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

    function see(e = {}) {
        const t = e.location !== !1,
            {
                onError: r
            } = e;

        function n($, V, q, G, ...j) {
            const J = $.currentPosition();
            if (J.offset += G, J.column += G, r) {
                const oe = th(q, J),
                    le = Xc(V, oe, {
                        domain: ree,
                        args: j
                    });
                r(le)
            }
        }

        function s($, V, q) {
            const G = {
                type: $,
                start: V,
                end: V
            };
            return t && (G.loc = {
                start: q,
                end: q
            }), G
        }

        function o($, V, q, G) {
            $.end = V, G && ($.type = G), t && $.loc && ($.loc.end = q)
        }

        function l($, V) {
            const q = $.context(),
                G = s(3, q.offset, q.startLoc);
            return G.value = V, o(G, $.currentOffset(), $.currentPosition()), G
        }

        function u($, V) {
            const q = $.context(),
                {
                    lastOffset: G,
                    lastStartLoc: j
                } = q,
                J = s(5, G, j);
            return J.index = parseInt(V, 10), $.nextToken(), o(J, $.currentOffset(), $.currentPosition()), J
        }

        function f($, V) {
            const q = $.context(),
                {
                    lastOffset: G,
                    lastStartLoc: j
                } = q,
                J = s(4, G, j);
            return J.key = V, $.nextToken(), o(J, $.currentOffset(), $.currentPosition()), J
        }

        function h($, V) {
            const q = $.context(),
                {
                    lastOffset: G,
                    lastStartLoc: j
                } = q,
                J = s(9, G, j);
            return J.value = V.replace(nee, iee), $.nextToken(), o(J, $.currentOffset(), $.currentPosition()), J
        }

        function g($) {
            const V = $.nextToken(),
                q = $.context(),
                {
                    lastOffset: G,
                    lastStartLoc: j
                } = q,
                J = s(8, G, j);
            return V.type !== 12 ? (n($, rt.UNEXPECTED_EMPTY_LINKED_MODIFIER, q.lastStartLoc, 0), J.value = "", o(J, G, j), {
                nextConsumeToken: V,
                node: J
            }) : (V.value == null && n($, rt.UNEXPECTED_LEXICAL_ANALYSIS, q.lastStartLoc, 0, _n(V)), J.value = V.value || "", o(J, $.currentOffset(), $.currentPosition()), {
                node: J
            })
        }

        function y($, V) {
            const q = $.context(),
                G = s(7, q.offset, q.startLoc);
            return G.value = V, o(G, $.currentOffset(), $.currentPosition()), G
        }

        function E($) {
            const V = $.context(),
                q = s(6, V.offset, V.startLoc);
            let G = $.nextToken();
            if (G.type === 9) {
                const j = g($);
                q.modifier = j.node, G = j.nextConsumeToken || $.nextToken()
            }
            switch (G.type !== 10 && n($, rt.UNEXPECTED_LEXICAL_ANALYSIS, V.lastStartLoc, 0, _n(G)), G = $.nextToken(), G.type === 2 && (G = $.nextToken()), G.type) {
                case 11:
                    G.value == null && n($, rt.UNEXPECTED_LEXICAL_ANALYSIS, V.lastStartLoc, 0, _n(G)), q.key = y($, G.value || "");
                    break;
                case 5:
                    G.value == null && n($, rt.UNEXPECTED_LEXICAL_ANALYSIS, V.lastStartLoc, 0, _n(G)), q.key = f($, G.value || "");
                    break;
                case 6:
                    G.value == null && n($, rt.UNEXPECTED_LEXICAL_ANALYSIS, V.lastStartLoc, 0, _n(G)), q.key = u($, G.value || "");
                    break;
                case 7:
                    G.value == null && n($, rt.UNEXPECTED_LEXICAL_ANALYSIS, V.lastStartLoc, 0, _n(G)), q.key = h($, G.value || "");
                    break;
                default:
                    n($, rt.UNEXPECTED_EMPTY_LINKED_KEY, V.lastStartLoc, 0);
                    const j = $.context(),
                        J = s(7, j.offset, j.startLoc);
                    return J.value = "", o(J, j.offset, j.startLoc), q.key = J, o(q, j.offset, j.startLoc), {
                        nextConsumeToken: G,
                        node: q
                    }
            }
            return o(q, $.currentOffset(), $.currentPosition()), {
                node: q
            }
        }

        function C($) {
            const V = $.context(),
                q = V.currentType === 1 ? $.currentOffset() : V.offset,
                G = V.currentType === 1 ? V.endLoc : V.startLoc,
                j = s(2, q, G);
            j.items = [];
            let J = null;
            do {
                const ue = J || $.nextToken();
                switch (J = null, ue.type) {
                    case 0:
                        ue.value == null && n($, rt.UNEXPECTED_LEXICAL_ANALYSIS, V.lastStartLoc, 0, _n(ue)), j.items.push(l($, ue.value || ""));
                        break;
                    case 6:
                        ue.value == null && n($, rt.UNEXPECTED_LEXICAL_ANALYSIS, V.lastStartLoc, 0, _n(ue)), j.items.push(u($, ue.value || ""));
                        break;
                    case 5:
                        ue.value == null && n($, rt.UNEXPECTED_LEXICAL_ANALYSIS, V.lastStartLoc, 0, _n(ue)), j.items.push(f($, ue.value || ""));
                        break;
                    case 7:
                        ue.value == null && n($, rt.UNEXPECTED_LEXICAL_ANALYSIS, V.lastStartLoc, 0, _n(ue)), j.items.push(h($, ue.value || ""));
                        break;
                    case 8:
                        const Ae = E($);
                        j.items.push(Ae.node), J = Ae.nextConsumeToken || null;
                        break
                }
            } while (V.currentType !== 14 && V.currentType !== 1);
            const oe = V.currentType === 1 ? V.lastOffset : $.currentOffset(),
                le = V.currentType === 1 ? V.lastEndLoc : $.currentPosition();
            return o(j, oe, le), j
        }

        function P($, V, q, G) {
            const j = $.context();
            let J = G.items.length === 0;
            const oe = s(1, V, q);
            oe.cases = [], oe.cases.push(G);
            do {
                const le = C($);
                J || (J = le.items.length === 0), oe.cases.push(le)
            } while (j.currentType !== 14);
            return J && n($, rt.MUST_HAVE_MESSAGES_IN_PLURAL, q, 0), o(oe, $.currentOffset(), $.currentPosition()), oe
        }

        function M($) {
            const V = $.context(),
                {
                    offset: q,
                    startLoc: G
                } = V,
                j = C($);
            return V.currentType === 14 ? j : P($, q, G, j)
        }

        function B($) {
            const V = tee($, er({}, e)),
                q = V.context(),
                G = s(0, q.offset, q.startLoc);
            return t && G.loc && (G.loc.source = $), G.body = M(V), q.currentType !== 14 && n(V, rt.UNEXPECTED_LEXICAL_ANALYSIS, q.lastStartLoc, 0, $[q.offset] || ""), o(G, V.currentOffset(), V.currentPosition()), G
        }
        return {
            parse: B
        }
    }

    function _n(e) {
        if (e.type === 14) return "EOF";
        const t = (e.value || "").replace(/\r?\n/gu, "\\n");
        return t.length > 10 ? t.slice(0, 9) + "\u2026" : t
    }

    function aee(e, t = {}) {
        const r = {
            ast: e,
            helpers: new Set
        };
        return {
            context: () => r,
            helper: o => (r.helpers.add(o), o)
        }
    }

    function bb(e, t) {
        for (let r = 0; r < e.length; r++) Pp(e[r], t)
    }

    function Pp(e, t) {
        switch (e.type) {
            case 1:
                bb(e.cases, t), t.helper("plural");
                break;
            case 2:
                bb(e.items, t);
                break;
            case 6:
                Pp(e.key, t), t.helper("linked"), t.helper("type");
                break;
            case 5:
                t.helper("interpolate"), t.helper("list");
                break;
            case 4:
                t.helper("interpolate"), t.helper("named");
                break
        }
    }

    function oee(e, t = {}) {
        const r = aee(e);
        r.helper("normalize"), e.body && Pp(e.body, r);
        const n = r.context();
        e.helpers = Array.from(n.helpers)
    }

    function lee(e, t) {
        const {
            sourceMap: r,
            filename: n,
            breakLineCode: s,
            needIndent: o
        } = t, l = {
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
        }, u = () => l;

        function f(M, B) {
            l.code += M
        }

        function h(M, B = !0) {
            const $ = B ? s : "";
            f(o ? $ + "  ".repeat(M) : $)
        }

        function g(M = !0) {
            const B = ++l.indentLevel;
            M && h(B)
        }

        function y(M = !0) {
            const B = --l.indentLevel;
            M && h(B)
        }

        function E() {
            h(l.indentLevel)
        }
        return {
            context: u,
            push: f,
            indent: g,
            deindent: y,
            newline: E,
            helper: M => `_${M}`,
            needIndent: () => l.needIndent
        }
    }

    function cee(e, t) {
        const {
            helper: r
        } = e;
        e.push(`${r("linked")}(`), ta(e, t.key), t.modifier ? (e.push(", "), ta(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")")
    }

    function uee(e, t) {
        const {
            helper: r,
            needIndent: n
        } = e;
        e.push(`${r("normalize")}([`), e.indent(n());
        const s = t.items.length;
        for (let o = 0; o < s && (ta(e, t.items[o]), o !== s - 1); o++) e.push(", ");
        e.deindent(n()), e.push("])")
    }

    function fee(e, t) {
        const {
            helper: r,
            needIndent: n
        } = e;
        if (t.cases.length > 1) {
            e.push(`${r("plural")}([`), e.indent(n());
            const s = t.cases.length;
            for (let o = 0; o < s && (ta(e, t.cases[o]), o !== s - 1); o++) e.push(", ");
            e.deindent(n()), e.push("])")
        }
    }

    function dee(e, t) {
        t.body ? ta(e, t.body) : e.push("null")
    }

    function ta(e, t) {
        const {
            helper: r
        } = e;
        switch (t.type) {
            case 0:
                dee(e, t);
                break;
            case 1:
                fee(e, t);
                break;
            case 2:
                uee(e, t);
                break;
            case 6:
                cee(e, t);
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
    const hee = (e, t = {}) => {
        const r = ye(t.mode) ? t.mode : "normal",
            n = ye(t.filename) ? t.filename : "message.intl",
            s = !!t.sourceMap,
            o = t.breakLineCode != null ? t.breakLineCode : r === "arrow" ? ";" : `
`,
            l = t.needIndent ? t.needIndent : r !== "arrow",
            u = e.helpers || [],
            f = lee(e, {
                mode: r,
                filename: n,
                sourceMap: s,
                breakLineCode: o,
                needIndent: l
            });
        f.push(r === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), f.indent(l), u.length > 0 && (f.push(`const { ${u.map(y=>`${y}: _${y}`).join(", ")} } = ctx`), f.newline()), f.push("return "), ta(f, e), f.deindent(l), f.push("}");
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

    function pee(e, t = {}) {
        const r = er({}, t),
            s = see(r).parse(e);
        return oee(s, r), hee(s, r)
    }
    /*!
     * devtools-if v9.2.2
     * (c) 2022 kazuya kawaguchi
     * Released under the MIT License.
     */
    const gee = {
        I18nInit: "i18n:init",
        FunctionTranslate: "function:translate"
    };
    /*!
     * core-base v9.2.2
     * (c) 2022 kazuya kawaguchi
     * Released under the MIT License.
     */
    const Oi = [];
    Oi[0] = {
        w: [0],
        i: [3, 0],
        ["["]: [4],
        o: [7]
    };
    Oi[1] = {
        w: [1],
        ["."]: [2],
        ["["]: [4],
        o: [7]
    };
    Oi[2] = {
        w: [2],
        i: [3, 0],
        [0]: [3, 0]
    };
    Oi[3] = {
        i: [3, 0],
        [0]: [3, 0],
        w: [1, 1],
        ["."]: [2, 1],
        ["["]: [4, 1],
        o: [7, 1]
    };
    Oi[4] = {
        ["'"]: [5, 0],
        ['"']: [6, 0],
        ["["]: [4, 2],
        ["]"]: [1, 3],
        o: 8,
        l: [4, 0]
    };
    Oi[5] = {
        ["'"]: [4, 0],
        o: 8,
        l: [5, 0]
    };
    Oi[6] = {
        ['"']: [4, 0],
        o: 8,
        l: [6, 0]
    };
    const mee = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;

    function vee(e) {
        return mee.test(e)
    }

    function yee(e) {
        const t = e.charCodeAt(0),
            r = e.charCodeAt(e.length - 1);
        return t === r && (t === 34 || t === 39) ? e.slice(1, -1) : e
    }

    function _ee(e) {
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

    function bee(e) {
        const t = e.trim();
        return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : vee(t) ? yee(t) : "*" + t
    }

    function Eee(e) {
        const t = [];
        let r = -1,
            n = 0,
            s = 0,
            o, l, u, f, h, g, y;
        const E = [];
        E[0] = () => {
            l === void 0 ? l = u : l += u
        }, E[1] = () => {
            l !== void 0 && (t.push(l), l = void 0)
        }, E[2] = () => {
            E[0](), s++
        }, E[3] = () => {
            if (s > 0) s--, n = 4, E[0]();
            else {
                if (s = 0, l === void 0 || (l = bee(l), l === !1)) return !1;
                E[1]()
            }
        };

        function C() {
            const P = e[r + 1];
            if (n === 5 && P === "'" || n === 6 && P === '"') return r++, u = "\\" + P, E[0](), !0
        }
        for (; n !== null;)
            if (r++, o = e[r], !(o === "\\" && C())) {
                if (f = _ee(o), y = Oi[n], h = y[f] || y.l || 8, h === 8 || (n = h[0], h[1] !== void 0 && (g = E[h[1]], g && (u = o, g() === !1)))) return;
                if (n === 7) return t
            }
    }
    const Eb = new Map;

    function Tee(e, t) {
        return Et(e) ? e[t] : null
    }

    function See(e, t) {
        if (!Et(e)) return null;
        let r = Eb.get(t);
        if (r || (r = Eee(t), r && Eb.set(t, r)), !r) return null;
        const n = r.length;
        let s = e,
            o = 0;
        for (; o < n;) {
            const l = s[r[o]];
            if (l === void 0) return null;
            s = l, o++
        }
        return s
    }
    const Oee = e => e,
        wee = e => "",
        Cee = "text",
        $ee = e => e.length === 0 ? "" : e.join(""),
        Iee = YQ;

    function Tb(e, t) {
        return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0
    }

    function Aee(e) {
        const t = jt(e.pluralIndex) ? e.pluralIndex : -1;
        return e.named && (jt(e.named.count) || jt(e.named.n)) ? jt(e.named.count) ? e.named.count : jt(e.named.n) ? e.named.n : t : t
    }

    function Ree(e, t) {
        t.count || (t.count = e), t.n || (t.n = e)
    }

    function Nee(e = {}) {
        const t = e.locale,
            r = Aee(e),
            n = Et(e.pluralRules) && ye(t) && Pt(e.pluralRules[t]) ? e.pluralRules[t] : Tb,
            s = Et(e.pluralRules) && ye(t) && Pt(e.pluralRules[t]) ? Tb : void 0,
            o = $ => $[n(r, $.length, s)],
            l = e.list || [],
            u = $ => l[$],
            f = e.named || {};
        jt(e.pluralIndex) && Ree(r, f);
        const h = $ => f[$];

        function g($) {
            const V = Pt(e.messages) ? e.messages($) : Et(e.messages) ? e.messages[$] : !1;
            return V || (e.parent ? e.parent.message($) : wee)
        }
        const y = $ => e.modifiers ? e.modifiers[$] : Oee,
            E = Be(e.processor) && Pt(e.processor.normalize) ? e.processor.normalize : $ee,
            C = Be(e.processor) && Pt(e.processor.interpolate) ? e.processor.interpolate : Iee,
            P = Be(e.processor) && ye(e.processor.type) ? e.processor.type : Cee,
            B = {
                list: u,
                named: h,
                plural: o,
                linked: ($, ...V) => {
                    const [q, G] = V;
                    let j = "text",
                        J = "";
                    V.length === 1 ? Et(q) ? (J = q.modifier || J, j = q.type || j) : ye(q) && (J = q || J) : V.length === 2 && (ye(q) && (J = q || J), ye(G) && (j = G || j));
                    let oe = g($)(B);
                    return j === "vnode" && bt(oe) && J && (oe = oe[0]), J ? y(J)(oe, j) : oe
                },
                message: g,
                type: P,
                interpolate: C,
                normalize: E
            };
        return B
    }
    let Lee = null;
    gee.FunctionTranslate;

    function Pee(e) {
        return t => Lee
    }
    const kee = {
        NOT_FOUND_KEY: 1,
        FALLBACK_TO_TRANSLATE: 2,
        CANNOT_FORMAT_NUMBER: 3,
        FALLBACK_TO_NUMBER_FORMAT: 4,
        CANNOT_FORMAT_DATE: 5,
        FALLBACK_TO_DATE_FORMAT: 6,
        __EXTEND_POINT__: 7
    };

    function xee(e, t, r) {
        return [...new Set([r, ...bt(t) ? t : Et(t) ? Object.keys(t) : ye(t) ? [t] : [r]])]
    }

    function lS(e, t, r) {
        const n = ye(r) ? r : bo,
            s = e;
        s.__localeChainCache || (s.__localeChainCache = new Map);
        let o = s.__localeChainCache.get(n);
        if (!o) {
            o = [];
            let l = [r];
            for (; bt(l);) l = Sb(o, l, t);
            const u = bt(t) || !Be(t) ? t : t.default ? t.default : null;
            l = ye(u) ? [u] : u, bt(l) && Sb(o, l, !1), s.__localeChainCache.set(n, o)
        }
        return o
    }

    function Sb(e, t, r) {
        let n = !0;
        for (let s = 0; s < t.length && Je(n); s++) {
            const o = t[s];
            ye(o) && (n = Dee(e, t[s], r))
        }
        return n
    }

    function Dee(e, t, r) {
        let n;
        const s = t.split("-");
        do {
            const o = s.join("-");
            n = Mee(e, o, r), s.splice(-1, 1)
        } while (s.length && n === !0);
        return n
    }

    function Mee(e, t, r) {
        let n = !1;
        if (!e.includes(t) && (n = !0, t)) {
            n = t[t.length - 1] !== "!";
            const s = t.replace(/!/g, "");
            e.push(s), (bt(r) || Be(r)) && r[s] && (n = r[s])
        }
        return n
    }
    const Fee = "9.2.2",
        Jc = -1,
        bo = "en-US",
        Ob = "",
        wb = e => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;

    function Uee() {
        return {
            upper: (e, t) => t === "text" && ye(e) ? e.toUpperCase() : t === "vnode" && Et(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
            lower: (e, t) => t === "text" && ye(e) ? e.toLowerCase() : t === "vnode" && Et(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
            capitalize: (e, t) => t === "text" && ye(e) ? wb(e) : t === "vnode" && Et(e) && "__v_isVNode" in e ? wb(e.children) : e
        }
    }
    let cS;

    function Bee(e) {
        cS = e
    }
    let uS;

    function jee(e) {
        uS = e
    }
    let fS;

    function Gee(e) {
        fS = e
    }
    let Cb = 0;

    function Wee(e = {}) {
        const t = ye(e.version) ? e.version : Fee,
            r = ye(e.locale) ? e.locale : bo,
            n = bt(e.fallbackLocale) || Be(e.fallbackLocale) || ye(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : r,
            s = Be(e.messages) ? e.messages : {
                [r]: {}
            },
            o = Be(e.datetimeFormats) ? e.datetimeFormats : {
                [r]: {}
            },
            l = Be(e.numberFormats) ? e.numberFormats : {
                [r]: {}
            },
            u = er({}, e.modifiers || {}, Uee()),
            f = e.pluralRules || {},
            h = Pt(e.missing) ? e.missing : null,
            g = Je(e.missingWarn) || gi(e.missingWarn) ? e.missingWarn : !0,
            y = Je(e.fallbackWarn) || gi(e.fallbackWarn) ? e.fallbackWarn : !0,
            E = !!e.fallbackFormat,
            C = !!e.unresolving,
            P = Pt(e.postTranslation) ? e.postTranslation : null,
            M = Be(e.processor) ? e.processor : null,
            B = Je(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
            $ = !!e.escapeParameter,
            V = Pt(e.messageCompiler) ? e.messageCompiler : cS,
            q = Pt(e.messageResolver) ? e.messageResolver : uS || Tee,
            G = Pt(e.localeFallbacker) ? e.localeFallbacker : fS || xee,
            j = Et(e.fallbackContext) ? e.fallbackContext : void 0,
            J = Pt(e.onWarn) ? e.onWarn : VQ,
            oe = e,
            le = Et(oe.__datetimeFormatters) ? oe.__datetimeFormatters : new Map,
            ue = Et(oe.__numberFormatters) ? oe.__numberFormatters : new Map,
            Ae = Et(oe.__meta) ? oe.__meta : {};
        Cb++;
        const $e = {
            version: t,
            cid: Cb,
            locale: r,
            fallbackLocale: n,
            messages: s,
            modifiers: u,
            pluralRules: f,
            missing: h,
            missingWarn: g,
            fallbackWarn: y,
            fallbackFormat: E,
            unresolving: C,
            postTranslation: P,
            processor: M,
            warnHtmlMessage: B,
            escapeParameter: $,
            messageCompiler: V,
            messageResolver: q,
            localeFallbacker: G,
            fallbackContext: j,
            onWarn: J,
            __meta: Ae
        };
        return $e.datetimeFormats = o, $e.numberFormats = l, $e.__datetimeFormatters = le, $e.__numberFormatters = ue, $e
    }

    function kp(e, t, r, n, s) {
        const {
            missing: o,
            onWarn: l
        } = e;
        if (o !== null) {
            const u = o(e, r, t, s);
            return ye(u) ? u : t
        } else return t
    }

    function Pa(e, t, r) {
        const n = e;
        n.__localeChainCache = new Map, e.localeFallbacker(e, r, t)
    }
    const Hee = e => e;
    let $b = Object.create(null);

    function Vee(e, t = {}) {
        {
            const n = (t.onCacheKey || Hee)(e),
                s = $b[n];
            if (s) return s;
            let o = !1;
            const l = t.onError || qQ;
            t.onError = h => {
                o = !0, l(h)
            };
            const {
                code: u
            } = pee(e, t), f = new Function(`return ${u}`)();
            return o ? f : $b[n] = f
        }
    }
    let dS = rt.__EXTEND_POINT__;
    const id = () => ++dS,
        Ls = {
            INVALID_ARGUMENT: dS,
            INVALID_DATE_ARGUMENT: id(),
            INVALID_ISO_DATE_ARGUMENT: id(),
            __EXTEND_POINT__: id()
        };

    function Ps(e) {
        return Xc(e, null, void 0)
    }
    const Ib = () => "",
        is = e => Pt(e);

    function Ab(e, ...t) {
        const {
            fallbackFormat: r,
            postTranslation: n,
            unresolving: s,
            messageCompiler: o,
            fallbackLocale: l,
            messages: u
        } = e, [f, h] = rh(...t), g = Je(h.missingWarn) ? h.missingWarn : e.missingWarn, y = Je(h.fallbackWarn) ? h.fallbackWarn : e.fallbackWarn, E = Je(h.escapeParameter) ? h.escapeParameter : e.escapeParameter, C = !!h.resolvedMessage, P = ye(h.default) || Je(h.default) ? Je(h.default) ? o ? f : () => f : h.default : r ? o ? f : () => f : "", M = r || P !== "", B = ye(h.locale) ? h.locale : e.locale;
        E && Kee(h);
        let [$, V, q] = C ? [f, B, u[B] || {}] : hS(e, f, B, l, y, g), G = $, j = f;
        if (!C && !(ye(G) || is(G)) && M && (G = P, j = G), !C && (!(ye(G) || is(G)) || !ye(V))) return s ? Jc : f;
        let J = !1;
        const oe = () => {
                J = !0
            },
            le = is(G) ? G : pS(e, f, V, G, j, oe);
        if (J) return G;
        const ue = zee(e, V, q, h),
            Ae = Nee(ue),
            $e = Yee(e, le, Ae);
        return n ? n($e, f) : $e
    }

    function Kee(e) {
        bt(e.list) ? e.list = e.list.map(t => ye(t) ? yb(t) : t) : Et(e.named) && Object.keys(e.named).forEach(t => {
            ye(e.named[t]) && (e.named[t] = yb(e.named[t]))
        })
    }

    function hS(e, t, r, n, s, o) {
        const {
            messages: l,
            onWarn: u,
            messageResolver: f,
            localeFallbacker: h
        } = e, g = h(e, n, r);
        let y = {},
            E, C = null;
        const P = "translate";
        for (let M = 0; M < g.length && (E = g[M], y = l[E] || {}, (C = f(y, t)) === null && (C = y[t]), !(ye(C) || Pt(C))); M++) {
            const B = kp(e, t, E, o, P);
            B !== t && (C = B)
        }
        return [C, E, y]
    }

    function pS(e, t, r, n, s, o) {
        const {
            messageCompiler: l,
            warnHtmlMessage: u
        } = e;
        if (is(n)) {
            const h = n;
            return h.locale = h.locale || r, h.key = h.key || t, h
        }
        if (l == null) {
            const h = () => n;
            return h.locale = r, h.key = t, h
        }
        const f = l(n, qee(e, r, s, n, u, o));
        return f.locale = r, f.key = t, f.source = n, f
    }

    function Yee(e, t, r) {
        return t(r)
    }

    function rh(...e) {
        const [t, r, n] = e, s = {};
        if (!ye(t) && !jt(t) && !is(t)) throw Ps(Ls.INVALID_ARGUMENT);
        const o = jt(t) ? String(t) : (is(t), t);
        return jt(r) ? s.plural = r : ye(r) ? s.default = r : Be(r) && !zc(r) ? s.named = r : bt(r) && (s.list = r), jt(n) ? s.plural = n : ye(n) ? s.default = n : Be(n) && er(s, n), [o, s]
    }

    function qee(e, t, r, n, s, o) {
        return {
            warnHtmlMessage: s,
            onError: l => {
                throw o && o(l), l
            },
            onCacheKey: l => GQ(t, r, l)
        }
    }

    function zee(e, t, r, n) {
        const {
            modifiers: s,
            pluralRules: o,
            messageResolver: l,
            fallbackLocale: u,
            fallbackWarn: f,
            missingWarn: h,
            fallbackContext: g
        } = e, E = {
            locale: t,
            modifiers: s,
            pluralRules: o,
            messages: C => {
                let P = l(r, C);
                if (P == null && g) {
                    const [, , M] = hS(g, C, t, u, f, h);
                    P = l(M, C)
                }
                if (ye(P)) {
                    let M = !1;
                    const $ = pS(e, C, t, P, C, () => {
                        M = !0
                    });
                    return M ? Ib : $
                } else return is(P) ? P : Ib
            }
        };
        return e.processor && (E.processor = e.processor), n.list && (E.list = n.list), n.named && (E.named = n.named), jt(n.plural) && (E.pluralIndex = n.plural), E
    }

    function Rb(e, ...t) {
        const {
            datetimeFormats: r,
            unresolving: n,
            fallbackLocale: s,
            onWarn: o,
            localeFallbacker: l
        } = e, {
            __datetimeFormatters: u
        } = e, [f, h, g, y] = nh(...t), E = Je(g.missingWarn) ? g.missingWarn : e.missingWarn;
        Je(g.fallbackWarn) ? g.fallbackWarn : e.fallbackWarn;
        const C = !!g.part,
            P = ye(g.locale) ? g.locale : e.locale,
            M = l(e, s, P);
        if (!ye(f) || f === "") return new Intl.DateTimeFormat(P, y).format(h);
        let B = {},
            $, V = null;
        const q = "datetime format";
        for (let J = 0; J < M.length && ($ = M[J], B = r[$] || {}, V = B[f], !Be(V)); J++) kp(e, f, $, E, q);
        if (!Be(V) || !ye($)) return n ? Jc : f;
        let G = `${$}__${f}`;
        zc(y) || (G = `${G}__${JSON.stringify(y)}`);
        let j = u.get(G);
        return j || (j = new Intl.DateTimeFormat($, er({}, V, y)), u.set(G, j)), C ? j.formatToParts(h) : j.format(h)
    }
    const gS = ["localeMatcher", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "formatMatcher", "hour12", "timeZone", "dateStyle", "timeStyle", "calendar", "dayPeriod", "numberingSystem", "hourCycle", "fractionalSecondDigits"];

    function nh(...e) {
        const [t, r, n, s] = e, o = {};
        let l = {},
            u;
        if (ye(t)) {
            const f = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
            if (!f) throw Ps(Ls.INVALID_ISO_DATE_ARGUMENT);
            const h = f[3] ? f[3].trim().startsWith("T") ? `${f[1].trim()}${f[3].trim()}` : `${f[1].trim()}T${f[3].trim()}` : f[1].trim();
            u = new Date(h);
            try {
                u.toISOString()
            } catch {
                throw Ps(Ls.INVALID_ISO_DATE_ARGUMENT)
            }
        } else if (HQ(t)) {
            if (isNaN(t.getTime())) throw Ps(Ls.INVALID_DATE_ARGUMENT);
            u = t
        } else if (jt(t)) u = t;
        else throw Ps(Ls.INVALID_ARGUMENT);
        return ye(r) ? o.key = r : Be(r) && Object.keys(r).forEach(f => {
            gS.includes(f) ? l[f] = r[f] : o[f] = r[f]
        }), ye(n) ? o.locale = n : Be(n) && (l = n), Be(s) && (l = s), [o.key || "", u, o, l]
    }

    function Nb(e, t, r) {
        const n = e;
        for (const s in r) {
            const o = `${t}__${s}`;
            !n.__datetimeFormatters.has(o) || n.__datetimeFormatters.delete(o)
        }
    }

    function Lb(e, ...t) {
        const {
            numberFormats: r,
            unresolving: n,
            fallbackLocale: s,
            onWarn: o,
            localeFallbacker: l
        } = e, {
            __numberFormatters: u
        } = e, [f, h, g, y] = ih(...t), E = Je(g.missingWarn) ? g.missingWarn : e.missingWarn;
        Je(g.fallbackWarn) ? g.fallbackWarn : e.fallbackWarn;
        const C = !!g.part,
            P = ye(g.locale) ? g.locale : e.locale,
            M = l(e, s, P);
        if (!ye(f) || f === "") return new Intl.NumberFormat(P, y).format(h);
        let B = {},
            $, V = null;
        const q = "number format";
        for (let J = 0; J < M.length && ($ = M[J], B = r[$] || {}, V = B[f], !Be(V)); J++) kp(e, f, $, E, q);
        if (!Be(V) || !ye($)) return n ? Jc : f;
        let G = `${$}__${f}`;
        zc(y) || (G = `${G}__${JSON.stringify(y)}`);
        let j = u.get(G);
        return j || (j = new Intl.NumberFormat($, er({}, V, y)), u.set(G, j)), C ? j.formatToParts(h) : j.format(h)
    }
    const mS = ["localeMatcher", "style", "currency", "currencyDisplay", "currencySign", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "notation", "signDisplay", "unit", "unitDisplay", "roundingMode", "roundingPriority", "roundingIncrement", "trailingZeroDisplay"];

    function ih(...e) {
        const [t, r, n, s] = e, o = {};
        let l = {};
        if (!jt(t)) throw Ps(Ls.INVALID_ARGUMENT);
        const u = t;
        return ye(r) ? o.key = r : Be(r) && Object.keys(r).forEach(f => {
            mS.includes(f) ? l[f] = r[f] : o[f] = r[f]
        }), ye(n) ? o.locale = n : Be(n) && (l = n), Be(s) && (l = s), [o.key || "", u, o, l]
    }

    function Pb(e, t, r) {
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
    const Xee = "9.2.2";
    kee.__EXTEND_POINT__;
    let vS = rt.__EXTEND_POINT__;
    const Sr = () => ++vS,
        Ft = {
            UNEXPECTED_RETURN_TYPE: vS,
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

    function Wt(e, ...t) {
        return Xc(e, null, void 0)
    }
    const sh = Si("__transrateVNode"),
        ah = Si("__datetimeParts"),
        oh = Si("__numberParts"),
        yS = Si("__setPluralRules");
    Si("__intlifyMeta");
    const _S = Si("__injectWithOption");

    function lh(e) {
        if (!Et(e)) return e;
        for (const t in e)
            if (!!Np(e, t))
                if (!t.includes(".")) Et(e[t]) && lh(e[t]);
                else {
                    const r = t.split("."),
                        n = r.length - 1;
                    let s = e;
                    for (let o = 0; o < n; o++) r[o] in s || (s[r[o]] = {}), s = s[r[o]];
                    s[r[n]] = e[t], delete e[t], Et(s[r[n]]) && lh(s[r[n]])
                } return e
    }

    function Zc(e, t) {
        const {
            messages: r,
            __i18n: n,
            messageResolver: s,
            flatJson: o
        } = t, l = Be(r) ? r : bt(n) ? {} : {
            [e]: {}
        };
        if (bt(n) && n.forEach(u => {
                if ("locale" in u && "resource" in u) {
                    const {
                        locale: f,
                        resource: h
                    } = u;
                    f ? (l[f] = l[f] || {}, Ka(h, l[f])) : Ka(h, l)
                } else ye(u) && Ka(JSON.parse(u), l)
            }), s == null && o)
            for (const u in l) Np(l, u) && lh(l[u]);
        return l
    }
    const $l = e => !Et(e) || bt(e);

    function Ka(e, t) {
        if ($l(e) || $l(t)) throw Wt(Ft.INVALID_VALUE);
        for (const r in e) Np(e, r) && ($l(e[r]) || $l(t[r]) ? t[r] = e[r] : Ka(e[r], t[r]))
    }

    function Jee(e) {
        return e.type
    }

    function bS(e, t, r) {
        let n = Et(t.messages) ? t.messages : {};
        "__i18nGlobal" in r && (n = Zc(e.locale.value, {
            messages: n,
            __i18n: r.__i18nGlobal
        }));
        const s = Object.keys(n);
        s.length && s.forEach(o => {
            e.mergeLocaleMessage(o, n[o])
        }); {
            if (Et(t.datetimeFormats)) {
                const o = Object.keys(t.datetimeFormats);
                o.length && o.forEach(l => {
                    e.mergeDateTimeFormat(l, t.datetimeFormats[l])
                })
            }
            if (Et(t.numberFormats)) {
                const o = Object.keys(t.numberFormats);
                o.length && o.forEach(l => {
                    e.mergeNumberFormat(l, t.numberFormats[l])
                })
            }
        }
    }

    function kb(e) {
        return nt(_c, null, e, 0)
    }
    let xb = 0;

    function Db(e) {
        return (t, r, n, s) => e(r, n, ss() || void 0, s)
    }

    function xp(e = {}, t) {
        const {
            __root: r
        } = e, n = r === void 0;
        let s = Je(e.inheritLocale) ? e.inheritLocale : !0;
        const o = on(r && s ? r.locale.value : ye(e.locale) ? e.locale : bo),
            l = on(r && s ? r.fallbackLocale.value : ye(e.fallbackLocale) || bt(e.fallbackLocale) || Be(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : o.value),
            u = on(Zc(o.value, e)),
            f = on(Be(e.datetimeFormats) ? e.datetimeFormats : {
                [o.value]: {}
            }),
            h = on(Be(e.numberFormats) ? e.numberFormats : {
                [o.value]: {}
            });
        let g = r ? r.missingWarn : Je(e.missingWarn) || gi(e.missingWarn) ? e.missingWarn : !0,
            y = r ? r.fallbackWarn : Je(e.fallbackWarn) || gi(e.fallbackWarn) ? e.fallbackWarn : !0,
            E = r ? r.fallbackRoot : Je(e.fallbackRoot) ? e.fallbackRoot : !0,
            C = !!e.fallbackFormat,
            P = Pt(e.missing) ? e.missing : null,
            M = Pt(e.missing) ? Db(e.missing) : null,
            B = Pt(e.postTranslation) ? e.postTranslation : null,
            $ = r ? r.warnHtmlMessage : Je(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
            V = !!e.escapeParameter;
        const q = r ? r.modifiers : Be(e.modifiers) ? e.modifiers : {};
        let G = e.pluralRules || r && r.pluralRules,
            j;
        j = (() => {
            const A = {
                version: Xee,
                locale: o.value,
                fallbackLocale: l.value,
                messages: u.value,
                modifiers: q,
                pluralRules: G,
                missing: M === null ? void 0 : M,
                missingWarn: g,
                fallbackWarn: y,
                fallbackFormat: C,
                unresolving: !0,
                postTranslation: B === null ? void 0 : B,
                warnHtmlMessage: $,
                escapeParameter: V,
                messageResolver: e.messageResolver,
                __meta: {
                    framework: "vue"
                }
            };
            return A.datetimeFormats = f.value, A.numberFormats = h.value, A.__datetimeFormatters = Be(j) ? j.__datetimeFormatters : void 0, A.__numberFormatters = Be(j) ? j.__numberFormatters : void 0, Wee(A)
        })(), Pa(j, o.value, l.value);

        function oe() {
            return [o.value, l.value, u.value, f.value, h.value]
        }
        const le = kr({
                get: () => o.value,
                set: A => {
                    o.value = A, j.locale = o.value
                }
            }),
            ue = kr({
                get: () => l.value,
                set: A => {
                    l.value = A, j.fallbackLocale = l.value, Pa(j, o.value, A)
                }
            }),
            Ae = kr(() => u.value),
            $e = kr(() => f.value),
            fe = kr(() => h.value);

        function Ce() {
            return Pt(B) ? B : null
        }

        function F(A) {
            B = A, j.postTranslation = A
        }

        function ie() {
            return P
        }

        function de(A) {
            A !== null && (M = Db(A)), P = A, j.missing = M
        }
        const be = (A, W, he, pe, Re, xe) => {
            oe();
            let w;
            if (w = A(j), jt(w) && w === Jc) {
                const [T, N] = W();
                return r && E ? pe(r) : Re(T)
            } else {
                if (xe(w)) return w;
                throw Wt(Ft.UNEXPECTED_RETURN_TYPE)
            }
        };

        function ve(...A) {
            return be(W => Reflect.apply(Ab, null, [W, ...A]), () => rh(...A), "translate", W => Reflect.apply(W.t, W, [...A]), W => W, W => ye(W))
        }

        function Oe(...A) {
            const [W, he, pe] = A;
            if (pe && !Et(pe)) throw Wt(Ft.INVALID_ARGUMENT);
            return ve(W, he, er({
                resolvedMessage: !0
            }, pe || {}))
        }

        function Fe(...A) {
            return be(W => Reflect.apply(Rb, null, [W, ...A]), () => nh(...A), "datetime format", W => Reflect.apply(W.d, W, [...A]), () => Ob, W => ye(W))
        }

        function Ge(...A) {
            return be(W => Reflect.apply(Lb, null, [W, ...A]), () => ih(...A), "number format", W => Reflect.apply(W.n, W, [...A]), () => Ob, W => ye(W))
        }

        function tt(A) {
            return A.map(W => ye(W) || jt(W) || Je(W) ? kb(String(W)) : W)
        }
        const $r = {
            normalize: tt,
            interpolate: A => A,
            type: "vnode"
        };

        function rr(...A) {
            return be(W => {
                let he;
                const pe = W;
                try {
                    pe.processor = $r, he = Reflect.apply(Ab, null, [pe, ...A])
                } finally {
                    pe.processor = null
                }
                return he
            }, () => rh(...A), "translate", W => W[sh](...A), W => [kb(W)], W => bt(W))
        }

        function yr(...A) {
            return be(W => Reflect.apply(Lb, null, [W, ...A]), () => ih(...A), "number format", W => W[oh](...A), () => [], W => ye(W) || bt(W))
        }

        function ot(...A) {
            return be(W => Reflect.apply(Rb, null, [W, ...A]), () => nh(...A), "datetime format", W => W[ah](...A), () => [], W => ye(W) || bt(W))
        }

        function Ot(A) {
            G = A, j.pluralRules = G
        }

        function lt(A, W) {
            const he = ye(W) ? W : o.value,
                pe = Dt(he);
            return j.messageResolver(pe, A) !== null
        }

        function xt(A) {
            let W = null;
            const he = lS(j, l.value, o.value);
            for (let pe = 0; pe < he.length; pe++) {
                const Re = u.value[he[pe]] || {},
                    xe = j.messageResolver(Re, A);
                if (xe != null) {
                    W = xe;
                    break
                }
            }
            return W
        }

        function Vt(A) {
            const W = xt(A);
            return W != null ? W : r ? r.tm(A) || {} : {}
        }

        function Dt(A) {
            return u.value[A] || {}
        }

        function m(A, W) {
            u.value[A] = W, j.messages = u.value
        }

        function p(A, W) {
            u.value[A] = u.value[A] || {}, Ka(W, u.value[A]), j.messages = u.value
        }

        function O(A) {
            return f.value[A] || {}
        }

        function D(A, W) {
            f.value[A] = W, j.datetimeFormats = f.value, Nb(j, A, W)
        }

        function U(A, W) {
            f.value[A] = er(f.value[A] || {}, W), j.datetimeFormats = f.value, Nb(j, A, W)
        }

        function Y(A) {
            return h.value[A] || {}
        }

        function ce(A, W) {
            h.value[A] = W, j.numberFormats = h.value, Pb(j, A, W)
        }

        function se(A, W) {
            h.value[A] = er(h.value[A] || {}, W), j.numberFormats = h.value, Pb(j, A, W)
        }
        xb++, r && eh && (Qi(r.locale, A => {
            s && (o.value = A, j.locale = A, Pa(j, o.value, l.value))
        }), Qi(r.fallbackLocale, A => {
            s && (l.value = A, j.fallbackLocale = A, Pa(j, o.value, l.value))
        }));
        const re = {
            id: xb,
            locale: le,
            fallbackLocale: ue,
            get inheritLocale() {
                return s
            },
            set inheritLocale(A) {
                s = A, A && r && (o.value = r.locale.value, l.value = r.fallbackLocale.value, Pa(j, o.value, l.value))
            },
            get availableLocales() {
                return Object.keys(u.value).sort()
            },
            messages: Ae,
            get modifiers() {
                return q
            },
            get pluralRules() {
                return G || {}
            },
            get isGlobal() {
                return n
            },
            get missingWarn() {
                return g
            },
            set missingWarn(A) {
                g = A, j.missingWarn = g
            },
            get fallbackWarn() {
                return y
            },
            set fallbackWarn(A) {
                y = A, j.fallbackWarn = y
            },
            get fallbackRoot() {
                return E
            },
            set fallbackRoot(A) {
                E = A
            },
            get fallbackFormat() {
                return C
            },
            set fallbackFormat(A) {
                C = A, j.fallbackFormat = C
            },
            get warnHtmlMessage() {
                return $
            },
            set warnHtmlMessage(A) {
                $ = A, j.warnHtmlMessage = A
            },
            get escapeParameter() {
                return V
            },
            set escapeParameter(A) {
                V = A, j.escapeParameter = A
            },
            t: ve,
            getLocaleMessage: Dt,
            setLocaleMessage: m,
            mergeLocaleMessage: p,
            getPostTranslationHandler: Ce,
            setPostTranslationHandler: F,
            getMissingHandler: ie,
            setMissingHandler: de,
            [yS]: Ot
        };
        return re.datetimeFormats = $e, re.numberFormats = fe, re.rt = Oe, re.te = lt, re.tm = Vt, re.d = Fe, re.n = Ge, re.getDateTimeFormat = O, re.setDateTimeFormat = D, re.mergeDateTimeFormat = U, re.getNumberFormat = Y, re.setNumberFormat = ce, re.mergeNumberFormat = se, re[_S] = e.__injectWithOption, re[sh] = rr, re[ah] = ot, re[oh] = yr, re
    }

    function Zee(e) {
        const t = ye(e.locale) ? e.locale : bo,
            r = ye(e.fallbackLocale) || bt(e.fallbackLocale) || Be(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : t,
            n = Pt(e.missing) ? e.missing : void 0,
            s = Je(e.silentTranslationWarn) || gi(e.silentTranslationWarn) ? !e.silentTranslationWarn : !0,
            o = Je(e.silentFallbackWarn) || gi(e.silentFallbackWarn) ? !e.silentFallbackWarn : !0,
            l = Je(e.fallbackRoot) ? e.fallbackRoot : !0,
            u = !!e.formatFallbackMessages,
            f = Be(e.modifiers) ? e.modifiers : {},
            h = e.pluralizationRules,
            g = Pt(e.postTranslation) ? e.postTranslation : void 0,
            y = ye(e.warnHtmlInMessage) ? e.warnHtmlInMessage !== "off" : !0,
            E = !!e.escapeParameterHtml,
            C = Je(e.sync) ? e.sync : !0;
        let P = e.messages;
        if (Be(e.sharedMessages)) {
            const j = e.sharedMessages;
            P = Object.keys(j).reduce((oe, le) => {
                const ue = oe[le] || (oe[le] = {});
                return er(ue, j[le]), oe
            }, P || {})
        }
        const {
            __i18n: M,
            __root: B,
            __injectWithOption: $
        } = e, V = e.datetimeFormats, q = e.numberFormats, G = e.flatJson;
        return {
            locale: t,
            fallbackLocale: r,
            messages: P,
            flatJson: G,
            datetimeFormats: V,
            numberFormats: q,
            missing: n,
            missingWarn: s,
            fallbackWarn: o,
            fallbackRoot: l,
            fallbackFormat: u,
            modifiers: f,
            pluralRules: h,
            postTranslation: g,
            warnHtmlMessage: y,
            escapeParameter: E,
            messageResolver: e.messageResolver,
            inheritLocale: C,
            __i18n: M,
            __root: B,
            __injectWithOption: $
        }
    }

    function ch(e = {}, t) {
        {
            const r = xp(Zee(e)),
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
                        const [o, l, u] = s, f = {};
                        let h = null,
                            g = null;
                        if (!ye(o)) throw Wt(Ft.INVALID_ARGUMENT);
                        const y = o;
                        return ye(l) ? f.locale = l : bt(l) ? h = l : Be(l) && (g = l), bt(u) ? h = u : Be(u) && (g = u), Reflect.apply(r.t, r, [y, h || g || {}, f])
                    },
                    rt(...s) {
                        return Reflect.apply(r.rt, r, [...s])
                    },
                    tc(...s) {
                        const [o, l, u] = s, f = {
                            plural: 1
                        };
                        let h = null,
                            g = null;
                        if (!ye(o)) throw Wt(Ft.INVALID_ARGUMENT);
                        const y = o;
                        return ye(l) ? f.locale = l : jt(l) ? f.plural = l : bt(l) ? h = l : Be(l) && (g = l), ye(u) ? f.locale = u : bt(u) ? h = u : Be(u) && (g = u), Reflect.apply(r.t, r, [y, h || g || {}, f])
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
    const Dp = {
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

    function Qee({
        slots: e
    }, t) {
        return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((n, s) => n = [...n, ...bt(s.children) ? s.children : [s]], []) : t.reduce((r, n) => {
            const s = e[n];
            return s && (r[n] = s()), r
        }, {})
    }

    function ES(e) {
        return et
    }
    const Mb = {
        name: "i18n-t",
        props: er({
            keypath: {
                type: String,
                required: !0
            },
            plural: {
                type: [Number, String],
                validator: e => jt(e) || !isNaN(e)
            }
        }, Dp),
        setup(e, t) {
            const {
                slots: r,
                attrs: n
            } = t, s = e.i18n || Mp({
                useScope: e.scope,
                __useComponent: !0
            });
            return () => {
                const o = Object.keys(r).filter(y => y !== "_"),
                    l = {};
                e.locale && (l.locale = e.locale), e.plural !== void 0 && (l.plural = ye(e.plural) ? +e.plural : e.plural);
                const u = Qee(t, o),
                    f = s[sh](e.keypath, u, l),
                    h = er({}, n),
                    g = ye(e.tag) || Et(e.tag) ? e.tag : ES();
                return Rh(g, h, f)
            }
        }
    };

    function ete(e) {
        return bt(e) && !ye(e[0])
    }

    function TS(e, t, r, n) {
        const {
            slots: s,
            attrs: o
        } = t;
        return () => {
            const l = {
                part: !0
            };
            let u = {};
            e.locale && (l.locale = e.locale), ye(e.format) ? l.key = e.format : Et(e.format) && (ye(e.format.key) && (l.key = e.format.key), u = Object.keys(e.format).reduce((E, C) => r.includes(C) ? er({}, E, {
                [C]: e.format[C]
            }) : E, {}));
            const f = n(e.value, l, u);
            let h = [l.key];
            bt(f) ? h = f.map((E, C) => {
                const P = s[E.type],
                    M = P ? P({
                        [E.type]: E.value,
                        index: C,
                        parts: f
                    }) : [E.value];
                return ete(M) && (M[0].key = `${E.type}-${C}`), M
            }) : ye(f) && (h = [f]);
            const g = er({}, o),
                y = ye(e.tag) || Et(e.tag) ? e.tag : ES();
            return Rh(y, g, h)
        }
    }
    const Fb = {
            name: "i18n-n",
            props: er({
                value: {
                    type: Number,
                    required: !0
                },
                format: {
                    type: [String, Object]
                }
            }, Dp),
            setup(e, t) {
                const r = e.i18n || Mp({
                    useScope: "parent",
                    __useComponent: !0
                });
                return TS(e, t, mS, (...n) => r[oh](...n))
            }
        },
        Ub = {
            name: "i18n-d",
            props: er({
                value: {
                    type: [Number, Date],
                    required: !0
                },
                format: {
                    type: [String, Object]
                }
            }, Dp),
            setup(e, t) {
                const r = e.i18n || Mp({
                    useScope: "parent",
                    __useComponent: !0
                });
                return TS(e, t, gS, (...n) => r[ah](...n))
            }
        };

    function tte(e, t) {
        const r = e;
        if (e.mode === "composition") return r.__getInstance(t) || e.global; {
            const n = r.__getInstance(t);
            return n != null ? n.__composer : e.global.__composer
        }
    }

    function rte(e) {
        const t = l => {
            const {
                instance: u,
                modifiers: f,
                value: h
            } = l;
            if (!u || !u.$) throw Wt(Ft.UNEXPECTED_ERROR);
            const g = tte(e, u.$),
                y = Bb(h);
            return [Reflect.apply(g.t, g, [...jb(y)]), g]
        };
        return {
            created: (l, u) => {
                const [f, h] = t(u);
                eh && e.global === h && (l.__i18nWatcher = Qi(h.locale, () => {
                    u.instance && u.instance.$forceUpdate()
                })), l.__composer = h, l.textContent = f
            },
            unmounted: l => {
                eh && l.__i18nWatcher && (l.__i18nWatcher(), l.__i18nWatcher = void 0, delete l.__i18nWatcher), l.__composer && (l.__composer = void 0, delete l.__composer)
            },
            beforeUpdate: (l, {
                value: u
            }) => {
                if (l.__composer) {
                    const f = l.__composer,
                        h = Bb(u);
                    l.textContent = Reflect.apply(f.t, f, [...jb(h)])
                }
            },
            getSSRProps: l => {
                const [u] = t(l);
                return {
                    textContent: u
                }
            }
        }
    }

    function Bb(e) {
        if (ye(e)) return {
            path: e
        };
        if (Be(e)) {
            if (!("path" in e)) throw Wt(Ft.REQUIRED_VALUE, "path");
            return e
        } else throw Wt(Ft.INVALID_VALUE)
    }

    function jb(e) {
        const {
            path: t,
            locale: r,
            args: n,
            choice: s,
            plural: o
        } = e, l = {}, u = n || {};
        return ye(r) && (l.locale = r), jt(s) && (l.plural = s), jt(o) && (l.plural = o), [t, u, l]
    }

    function nte(e, t, ...r) {
        const n = Be(r[0]) ? r[0] : {},
            s = !!n.useI18nComponentName;
        (Je(n.globalInstall) ? n.globalInstall : !0) && (e.component(s ? "i18n" : Mb.name, Mb), e.component(Fb.name, Fb), e.component(Ub.name, Ub)), e.directive("t", rte(t))
    }

    function ite(e, t, r) {
        return {
            beforeCreate() {
                const n = ss();
                if (!n) throw Wt(Ft.UNEXPECTED_ERROR);
                const s = this.$options;
                if (s.i18n) {
                    const o = s.i18n;
                    s.__i18n && (o.__i18n = s.__i18n), o.__root = t, this === this.$root ? this.$i18n = Gb(e, o) : (o.__injectWithOption = !0, this.$i18n = ch(o))
                } else s.__i18n ? this === this.$root ? this.$i18n = Gb(e, s) : this.$i18n = ch({
                    __i18n: s.__i18n,
                    __injectWithOption: !0,
                    __root: t
                }) : this.$i18n = e;
                s.__i18nGlobal && bS(t, s, s), e.__onComponentInstanceCreated(this.$i18n), r.__setInstance(n, this.$i18n), this.$t = (...o) => this.$i18n.t(...o), this.$rt = (...o) => this.$i18n.rt(...o), this.$tc = (...o) => this.$i18n.tc(...o), this.$te = (o, l) => this.$i18n.te(o, l), this.$d = (...o) => this.$i18n.d(...o), this.$n = (...o) => this.$i18n.n(...o), this.$tm = o => this.$i18n.tm(o)
            },
            mounted() {},
            unmounted() {
                const n = ss();
                if (!n) throw Wt(Ft.UNEXPECTED_ERROR);
                delete this.$t, delete this.$rt, delete this.$tc, delete this.$te, delete this.$d, delete this.$n, delete this.$tm, r.__deleteInstance(n), delete this.$i18n
            }
        }
    }

    function Gb(e, t) {
        e.locale = t.locale || e.locale, e.fallbackLocale = t.fallbackLocale || e.fallbackLocale, e.missing = t.missing || e.missing, e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn, e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn, e.formatFallbackMessages = t.formatFallbackMessages || e.formatFallbackMessages, e.postTranslation = t.postTranslation || e.postTranslation, e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage, e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml, e.sync = t.sync || e.sync, e.__composer[yS](t.pluralizationRules || e.pluralizationRules);
        const r = Zc(e.locale, {
            messages: t.messages,
            __i18n: t.__i18n
        });
        return Object.keys(r).forEach(n => e.mergeLocaleMessage(n, r[n])), t.datetimeFormats && Object.keys(t.datetimeFormats).forEach(n => e.mergeDateTimeFormat(n, t.datetimeFormats[n])), t.numberFormats && Object.keys(t.numberFormats).forEach(n => e.mergeNumberFormat(n, t.numberFormats[n])), e
    }
    const ste = Si("global-vue-i18n");

    function ate(e = {}, t) {
        const r = Je(e.legacy) ? e.legacy : !0,
            n = Je(e.globalInjection) ? e.globalInjection : !0,
            s = r ? !!e.allowComposition : !0,
            o = new Map,
            [l, u] = ote(e, r),
            f = Si("");

        function h(E) {
            return o.get(E) || null
        }

        function g(E, C) {
            o.set(E, C)
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
                async install(C, ...P) {
                    C.__VUE_I18N_SYMBOL__ = f, C.provide(C.__VUE_I18N_SYMBOL__, E), !r && n && mte(C, E.global), nte(C, E, ...P), r && C.mixin(ite(u, u.__composer, E));
                    const M = C.unmount;
                    C.unmount = () => {
                        E.dispose(), M()
                    }
                },
                get global() {
                    return u
                },
                dispose() {
                    l.stop()
                },
                __instances: o,
                __getInstance: h,
                __setInstance: g,
                __deleteInstance: y
            };
            return E
        }
    }

    function Mp(e = {}) {
        const t = ss();
        if (t == null) throw Wt(Ft.MUST_BE_CALL_SETUP_TOP);
        if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__) throw Wt(Ft.NOT_INSLALLED);
        const r = lte(t),
            n = ute(r),
            s = Jee(t),
            o = cte(e, s);
        if (r.mode === "legacy" && !e.__useComponent) {
            if (!r.allowComposition) throw Wt(Ft.NOT_AVAILABLE_IN_LEGACY_MODE);
            return hte(t, o, n, e)
        }
        if (o === "global") return bS(n, e, s), n;
        if (o === "parent") {
            let f = fte(r, t, e.__useComponent);
            return f == null && (f = n), f
        }
        const l = r;
        let u = l.__getInstance(t);
        if (u == null) {
            const f = er({}, e);
            "__i18n" in s && (f.__i18n = s.__i18n), n && (f.__root = n), u = xp(f), dte(l, t), l.__setInstance(t, u)
        }
        return u
    }

    function ote(e, t, r) {
        const n = yN(); {
            const s = t ? n.run(() => ch(e)) : n.run(() => xp(e));
            if (s == null) throw Wt(Ft.UNEXPECTED_ERROR);
            return [n, s]
        }
    }

    function lte(e) {
        {
            const t = Zi(e.isCE ? ste : e.appContext.app.__VUE_I18N_SYMBOL__);
            if (!t) throw Wt(e.isCE ? Ft.NOT_INSLALLED_WITH_PROVIDE : Ft.UNEXPECTED_ERROR);
            return t
        }
    }

    function cte(e, t) {
        return zc(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local"
    }

    function ute(e) {
        return e.mode === "composition" ? e.global : e.global.__composer
    }

    function fte(e, t, r = !1) {
        let n = null;
        const s = t.root;
        let o = t.parent;
        for (; o != null;) {
            const l = e;
            if (e.mode === "composition") n = l.__getInstance(o);
            else {
                const u = l.__getInstance(o);
                u != null && (n = u.__composer, r && n && !n[_S] && (n = null))
            }
            if (n != null || s === o) break;
            o = o.parent
        }
        return n
    }

    function dte(e, t, r) {
        Sh(() => {}, t), Oh(() => {
            e.__deleteInstance(t)
        }, t)
    }

    function hte(e, t, r, n = {}) {
        const s = t === "local",
            o = KN(null);
        if (s && e.proxy && !(e.proxy.$options.i18n || e.proxy.$options.__i18n)) throw Wt(Ft.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
        const l = Je(n.inheritLocale) ? n.inheritLocale : !0,
            u = on(s && l ? r.locale.value : ye(n.locale) ? n.locale : bo),
            f = on(s && l ? r.fallbackLocale.value : ye(n.fallbackLocale) || bt(n.fallbackLocale) || Be(n.fallbackLocale) || n.fallbackLocale === !1 ? n.fallbackLocale : u.value),
            h = on(Zc(u.value, n)),
            g = on(Be(n.datetimeFormats) ? n.datetimeFormats : {
                [u.value]: {}
            }),
            y = on(Be(n.numberFormats) ? n.numberFormats : {
                [u.value]: {}
            }),
            E = s ? r.missingWarn : Je(n.missingWarn) || gi(n.missingWarn) ? n.missingWarn : !0,
            C = s ? r.fallbackWarn : Je(n.fallbackWarn) || gi(n.fallbackWarn) ? n.fallbackWarn : !0,
            P = s ? r.fallbackRoot : Je(n.fallbackRoot) ? n.fallbackRoot : !0,
            M = !!n.fallbackFormat,
            B = Pt(n.missing) ? n.missing : null,
            $ = Pt(n.postTranslation) ? n.postTranslation : null,
            V = s ? r.warnHtmlMessage : Je(n.warnHtmlMessage) ? n.warnHtmlMessage : !0,
            q = !!n.escapeParameter,
            G = s ? r.modifiers : Be(n.modifiers) ? n.modifiers : {},
            j = n.pluralRules || s && r.pluralRules;

        function J() {
            return [u.value, f.value, h.value, g.value, y.value]
        }
        const oe = kr({
                get: () => o.value ? o.value.locale.value : u.value,
                set: p => {
                    o.value && (o.value.locale.value = p), u.value = p
                }
            }),
            le = kr({
                get: () => o.value ? o.value.fallbackLocale.value : f.value,
                set: p => {
                    o.value && (o.value.fallbackLocale.value = p), f.value = p
                }
            }),
            ue = kr(() => o.value ? o.value.messages.value : h.value),
            Ae = kr(() => g.value),
            $e = kr(() => y.value);

        function fe() {
            return o.value ? o.value.getPostTranslationHandler() : $
        }

        function Ce(p) {
            o.value && o.value.setPostTranslationHandler(p)
        }

        function F() {
            return o.value ? o.value.getMissingHandler() : B
        }

        function ie(p) {
            o.value && o.value.setMissingHandler(p)
        }

        function de(p) {
            return J(), p()
        }

        function be(...p) {
            return o.value ? de(() => Reflect.apply(o.value.t, null, [...p])) : de(() => "")
        }

        function ve(...p) {
            return o.value ? Reflect.apply(o.value.rt, null, [...p]) : ""
        }

        function Oe(...p) {
            return o.value ? de(() => Reflect.apply(o.value.d, null, [...p])) : de(() => "")
        }

        function Fe(...p) {
            return o.value ? de(() => Reflect.apply(o.value.n, null, [...p])) : de(() => "")
        }

        function Ge(p) {
            return o.value ? o.value.tm(p) : {}
        }

        function tt(p, O) {
            return o.value ? o.value.te(p, O) : !1
        }

        function It(p) {
            return o.value ? o.value.getLocaleMessage(p) : {}
        }

        function $r(p, O) {
            o.value && (o.value.setLocaleMessage(p, O), h.value[p] = O)
        }

        function rr(p, O) {
            o.value && o.value.mergeLocaleMessage(p, O)
        }

        function yr(p) {
            return o.value ? o.value.getDateTimeFormat(p) : {}
        }

        function ot(p, O) {
            o.value && (o.value.setDateTimeFormat(p, O), g.value[p] = O)
        }

        function Ot(p, O) {
            o.value && o.value.mergeDateTimeFormat(p, O)
        }

        function lt(p) {
            return o.value ? o.value.getNumberFormat(p) : {}
        }

        function xt(p, O) {
            o.value && (o.value.setNumberFormat(p, O), y.value[p] = O)
        }

        function Vt(p, O) {
            o.value && o.value.mergeNumberFormat(p, O)
        }
        const Dt = {
            get id() {
                return o.value ? o.value.id : -1
            },
            locale: oe,
            fallbackLocale: le,
            messages: ue,
            datetimeFormats: Ae,
            numberFormats: $e,
            get inheritLocale() {
                return o.value ? o.value.inheritLocale : l
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
                return o.value ? o.value.missingWarn : E
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
            t: be,
            getPostTranslationHandler: fe,
            setPostTranslationHandler: Ce,
            getMissingHandler: F,
            setMissingHandler: ie,
            rt: ve,
            d: Oe,
            n: Fe,
            tm: Ge,
            te: tt,
            getLocaleMessage: It,
            setLocaleMessage: $r,
            mergeLocaleMessage: rr,
            getDateTimeFormat: yr,
            setDateTimeFormat: ot,
            mergeDateTimeFormat: Ot,
            getNumberFormat: lt,
            setNumberFormat: xt,
            mergeNumberFormat: Vt
        };

        function m(p) {
            p.locale.value = u.value, p.fallbackLocale.value = f.value, Object.keys(h.value).forEach(O => {
                p.mergeLocaleMessage(O, h.value[O])
            }), Object.keys(g.value).forEach(O => {
                p.mergeDateTimeFormat(O, g.value[O])
            }), Object.keys(y.value).forEach(O => {
                p.mergeNumberFormat(O, y.value[O])
            }), p.escapeParameter = q, p.fallbackFormat = M, p.fallbackRoot = P, p.fallbackWarn = C, p.missingWarn = E, p.warnHtmlMessage = V
        }
        return CE(() => {
            if (e.proxy == null || e.proxy.$i18n == null) throw Wt(Ft.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
            const p = o.value = e.proxy.$i18n.__composer;
            t === "global" ? (u.value = p.locale.value, f.value = p.fallbackLocale.value, h.value = p.messages.value, g.value = p.datetimeFormats.value, y.value = p.numberFormats.value) : s && m(p)
        }), Dt
    }
    const pte = ["locale", "fallbackLocale", "availableLocales"],
        gte = ["t", "rt", "d", "n", "tm"];

    function mte(e, t) {
        const r = Object.create(null);
        pte.forEach(n => {
            const s = Object.getOwnPropertyDescriptor(t, n);
            if (!s) throw Wt(Ft.UNEXPECTED_ERROR);
            const o = Qt(s.value) ? {
                get() {
                    return s.value.value
                },
                set(l) {
                    s.value.value = l
                }
            } : {
                get() {
                    return s.get && s.get()
                }
            };
            Object.defineProperty(r, n, o)
        }), e.config.globalProperties.$i18n = r, gte.forEach(n => {
            const s = Object.getOwnPropertyDescriptor(t, n);
            if (!s || !s.value) throw Wt(Ft.UNEXPECTED_ERROR);
            Object.defineProperty(e.config.globalProperties, `$${n}`, s)
        })
    }
    Bee(Vee);
    jee(See);
    Gee(lS);
    const vte = it({
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
        yte = "main/pp9/fourbage/assets/c8afd972.svg",
        _te = {
            class: "constrain"
        },
        bte = {
            class: "text"
        },
        Ete = {
            class: "subtext"
        },
        Tte = {
            key: 0,
            class: "warning"
        },
        Ste = {
            key: 1,
            class: "spinner"
        };

    function Ote(e, t, r, n, s, o) {
        return H(), lr(Sc, {
            name: "toast-transition"
        }, {
            default: Fs(() => [e.isVisible && e.options ? (H(), z("div", {
                key: 0,
                class: Me([e.options.type, "jbg toast"])
            }, [Z("div", _te, [Z("img", {
                class: "close",
                alt: "close",
                src: yte,
                onClick: t[0] || (t[0] = (...l) => e.hide && e.hide(...l)),
                onKeydown: t[1] || (t[1] = Us((...l) => e.hide && e.hide(...l), ["esc"]))
            }, null, 32), Z("p", bte, _t(e.options.text), 1), Z("p", Ete, _t(e.options.subtext), 1), e.options.warning ? (H(), z("p", Tte, _t(e.options.warning), 1)) : Se("", !0), e.options.type === "reconnecting" ? (H(), z("div", Ste)) : Se("", !0)])], 2)) : Se("", !0)]),
            _: 1
        })
    }
    const wte = ze(vte, [
            ["render", Ote],
            ["__scopeId", "data-v-0a136edf"]
        ]),
        Cte = {
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
                e.component("Toast", wte), e.config.globalProperties.$showToast = r, e.config.globalProperties.$hideToast = n, e.config.globalProperties.$registerToast = s
            }
        },
        $te = it({
            props: {
                options: Object,
                mainView: Object
            },
            setup() {
                return {
                    fatalError: Zi(vo.fatal.error)
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

    function Ite(e, t, r, n, s, o) {
        const l = Mt("Fatal"),
            u = Mt("TextDescriptions"),
            f = Mt("Debug"),
            h = Mt("Modal"),
            g = Mt("Toast");
        return e.shouldShowFatal ? (H(), lr(l, {
            key: 0
        })) : (H(), z(et, {
            key: 1
        }, [nt(u), (H(), lr(yc(e.mainView), Ec({
            id: "game",
            class: e.classes
        }, e.ecastValues), null, 16, ["class"])), nt(f), nt(h), nt(g)], 64))
    }
    const Wb = ze($te, [
            ["render", Ite]
        ]),
        Ate = e => {
            let t;
            window.tv.register({
                connect: r => (t = new wr.WSClient(r), t.connect()),
                mount: r => {
                    var l, u, f, h;
                    Wb.name = r.app;
                    let n = L2(Wb, {
                        options: r,
                        mainView: e.MainView
                    });
                    r.client && (t = r.client);
                    let s;
                    (l = r.room) != null && l.locale && (s = r.room.locale), (f = (u = r.match) == null ? void 0 : u.params) != null && f.locale && (s = r.match.params.locale), Bs.set(s);
                    const o = ate({
                        fallbackLocale: "en",
                        locale: Bs.locale,
                        messages: Bs.mergeMessages(PB, (h = e.messages) != null ? h : {})
                    });
                    if (n.use(BH), n.use(PQ), n.use(_z, {
                            replayer: r.replayer,
                            client: t,
                            room: r.room
                        }), n.use(FX, {
                            wsClient: t,
                            room: r.room,
                            welcome: r.welcome
                        }), n.use(kZ), n.use(o), n.use(uQ, {
                            i18n: o
                        }), n.use(FQ), n.use(UQ), n.use(Cte), n.use(BQ), e.plugins) {
                        const g = y => y.plugin === void 0;
                        e.plugins.forEach(y => {
                            if (g(y)) {
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
        Rte = {
            AVATAR0_OFF: "hedgehog snail avatar - unavailable",
            AVATAR0_ON: "hedgehog snail avatar - available",
            AVATAR1_OFF: "tortise goose avatar - unavailable",
            AVATAR1_ON: "tortise goose avatar - available",
            AVATAR2_OFF: "cat skull avatar - unavailable",
            AVATAR2_ON: "cat skull avatar - available",
            AVATAR3_OFF: "crab moth avatar - unavailable",
            AVATAR3_ON: "crab moth avatar - available",
            AVATAR4_OFF: "bird pufferfish avatar - unavailable",
            AVATAR4_ON: "bird pufferfish avatar - available",
            AVATAR5_OFF: "shoebill stork cat avatar - unavailable",
            AVATAR5_ON: "shoebill stork cat avatar - available",
            AVATAR6_OFF: "frog bat avatar - unavailable",
            AVATAR6_ON: "frot bat avatar - available",
            AVATAR7_OFF: "eyeball avatar - unavailable",
            AVATAR7_ON: "eyeball avatar - available",
            CHAMELEON: "a furitive-looking chameleon",
            RABBIT: "an image of manmade horrors beyond comprehension"
        },
        Nte = {
            CHOICE_BUTTON: "choice button",
            LIE_BUTTON: "lie for me button",
            LIE_INPUT_1: "lie entry box",
            LIE_INPUT_2: "second lie entry box",
            NAME_ENTRY: "name entry box",
            NAME_SUBMIT: "name submit button",
            SUBMIT_BUTTON: "submit button"
        },
        Lte = {
            AVATAR_INSTRUCTION: "PICK YOUR CREATURE",
            PLAYER_NAME_INSTRUCTION: "Fibbage Enough About You works best if you use your real name. Feel free to change it here.",
            SUBMIT_NAME: "SUBMIT NAME",
            START_TEXT: "START THE GAME"
        },
        Pte = {
            SINGLE_INSTRUCTION: "ENTER A LIE",
            DOUBLE_INSTRUCTION: "ENTER A LIE FOR EACH",
            FINALROUND_INSTRUCTION: "ENTER A LIE THAT FITS BOTH",
            LIE_FOR_ME_INSTRUCTION: "PICK A LIE",
            LIE_FOR_ME: "LIE FOR ME",
            SEPARATOR: "&",
            PROHIBITED_LANGUAGE: "Your entry contains prohibited language. Try again!"
        },
        kte = {
            PICK_TRUTH: "PICK THE TRUTH",
            PICK_CATEGORY: "PICK A CATEGORY",
            AWARD_LIKES: "AWARD LIKES"
        },
        xte = "WAITING",
        Dte = {
            VOTE_INSTRUCTION: "VOTE FOR YOUR FAVORITE",
            LIKE_INSTRUCTION: "AWARD A LIKE"
        },
        Mte = {
            ALT: Rte,
            ARIA: Nte,
            LOBBY: Lte,
            WRITING: Pte,
            CHOOSING: kte,
            WAITING: xte,
            VOTING: Dte
        },
        Fte = {
            en: Mte
        },
        Ute = {},
        Bte = {
            viewBox: "0 0 299 58",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        },
        jte = jE('<path d="M51.0001 56.64V2.89375H51.9608C58.6312 2.89375 65.2999 2.83284 71.9738 2.9303C74.0301 2.94923 76.0762 3.22398 78.0647 3.74822C82.2779 4.89332 84.9979 7.72472 86.1656 11.9275C87.1297 15.408 87.2446 18.9042 85.9637 22.3534C85.0797 24.7341 83.6927 26.704 81.1502 27.9222C81.7575 28.0667 82.1682 28.1624 82.5789 28.2703C88.1077 29.6277 91.0853 33.0838 91.8267 38.9642C92.1956 41.8878 91.8754 44.7558 90.7268 47.4915C88.8874 51.8212 85.4156 54.2419 81.0753 55.5976C78.8598 56.2944 76.5516 56.6517 74.2291 56.6574C66.7193 56.6748 59.2089 56.6806 51.698 56.6748C51.4978 56.6748 51.296 56.6557 51.0001 56.64ZM64.9675 45.7982C66.0743 45.7982 67.1097 45.8191 68.1435 45.7982C70.3414 45.7442 72.5533 45.7529 74.6538 44.9629C76.8239 44.1449 77.8872 42.4499 77.8089 40.0014C77.7271 37.4171 76.6394 35.7986 74.3945 35.1408C71.3159 34.2376 68.1522 34.6066 64.9675 34.5352V45.7982ZM64.9675 24.0745C66.257 24.0745 67.4508 24.1598 68.622 24.0466C69.5706 23.9652 70.5016 23.7417 71.3838 23.3836C73.2389 22.604 74.036 21.0395 74.0795 19.0973C74.123 17.1552 73.6079 15.4654 71.7493 14.4978C69.5966 13.3788 67.282 13.6625 64.9622 13.6851L64.9675 24.0745Z" fill="white"></path><path d="M142.193 2.67622H157.471C164.2 20.5499 170.936 38.4485 177.677 56.372H162.756L159.471 47.4358H139.952C138.751 50.4151 137.542 53.4101 136.346 56.3755H121.589C128.47 38.4369 135.321 20.5853 142.193 2.67622ZM149.711 19.3532L143.854 36.6931H155.731C153.735 30.9381 151.767 25.2718 149.711 19.3532Z" fill="white"></path><path d="M89.4547 28.9055V3.07126C89.6202 3.02397 89.7898 2.99193 89.9611 2.97555C97.4982 2.99817 105.039 2.94596 112.574 3.09041C116.082 3.15654 119.286 4.32077 121.797 6.93987C123.901 9.12738 124.839 11.8387 125.174 14.771C125.539 17.9644 125.28 21.0795 123.714 23.9805C122.854 25.5746 121.716 26.8902 120.09 27.7395C119.974 27.8004 119.869 27.8857 119.662 28.0266C123.038 28.6879 125.976 29.8904 128.035 32.7497C125.102 40.3895 122.17 48.0292 119.159 55.8952C117.52 56.1388 115.79 56.5756 114.05 56.6209C109.038 56.7497 104.021 56.727 99.0053 56.7514C96.1652 56.7653 93.3233 56.7514 90.478 56.7514H89.4808V53.652C96.0503 47.6046 96.0068 34.5004 89.4547 28.9055ZM103.441 45.7529C105.436 45.7529 107.376 45.8208 109.308 45.7268C110.462 45.6665 111.605 45.4697 112.713 45.1404C115.183 44.4129 116.356 42.6501 116.265 40.0362C116.171 37.2866 114.962 35.6977 112.4 35.0782C109.466 34.3681 106.474 34.617 103.438 34.5561L103.441 45.7529ZM103.431 24.1406C105.519 24.1041 107.545 24.3738 109.497 23.6185C111.575 22.8163 112.616 21.1369 112.55 18.6849C112.489 16.4069 111.377 14.8563 109.297 14.1776C107.383 13.5529 105.436 13.6834 103.431 13.7199V24.1406Z" fill="white"></path><path d="M189.212 24.7532L215.766 32.7584C215.629 33.2091 215.512 33.6164 215.382 34.0184C213.816 38.8754 211.886 43.5724 208.421 47.4184C202.781 53.6694 195.733 56.5426 187.289 55.8412C184.619 55.6202 182.038 54.9937 179.442 54.1462C174.329 40.5617 169.21 26.9604 164.086 13.3423C165.914 10.1568 168.375 7.37962 171.318 5.1822C177.127 0.882012 183.674 -0.60069 190.785 0.213753C196.018 0.814144 200.878 2.47609 205.318 5.34231C211.297 9.21265 214.367 14.9329 215.716 21.7443C215.747 21.9983 215.764 22.254 215.765 22.51L201.646 23.9022C201.314 22.6301 201.098 21.398 200.673 20.2477C197.607 11.884 187.78 10.5231 182.132 14.4126C177.82 17.3832 175.41 21.612 174.507 26.7023C173.861 30.3394 174.332 33.8374 176.073 37.1647C179.143 43.0538 186.963 45.0307 191.182 43.6037C193.773 42.7336 196.133 40.7149 196.935 38.463L186.079 35.1791C187.122 31.6968 188.152 28.272 189.212 24.7532Z" fill="white"></path><path d="M217.686 56.607V2.94074H248.141V14.7154H231.658V23.709H247.251V35.5306H231.653V44.8097H248.165V56.607H217.686Z" fill="white"></path><path d="M0.00173665 3.22614H30.6895V15.0077H13.9743V23.9405H29.1685V35.7969H13.9221V56.9028H0L0.00173665 3.22614Z" fill="white"></path><path d="M48.5237 56.1301L41.775 57.3083C38.6808 39.6342 35.597 22.0245 32.5011 4.33469L46.2352 1.92965C46.5294 3.56376 46.8148 5.11955 47.0862 6.67534C47.5213 9.15696 47.9564 11.6386 48.3688 14.1237C48.4672 14.7231 48.516 15.3296 48.515 15.937C48.5231 29.0969 48.5231 42.2579 48.515 55.4201L48.5237 56.1301Z" fill="white"></path><path d="M292.242 35.7812H298.747V46.4752H292.235V56.607H279.37V46.4752H253.405V37.5511L274.07 2.97555H292.242V35.7812ZM279.376 35.7812V13.9114L266.753 35.7812H279.376Z" fill="#4EFF94"></path>', 8),
        Gte = [jte];

    function Wte(e, t) {
        return H(), z("svg", Bte, Gte)
    }
    const SS = ze(Ute, [
            ["render", Wte]
        ]),
        Hte = it({
            components: {
                FourbageLogo: SS,
                Input: CT,
                LobbyActions: OT
            },
            props: {
                player: {
                    type: Object,
                    required: !0
                },
                info: {
                    type: Object,
                    required: !0
                }
            },
            data() {
                return {
                    isSubmitting: !1,
                    isSubmittingName: !1,
                    selectedIndex: -1,
                    prevSelectedIndex: -1,
                    showNameChange: !0,
                    images: {
                        avatar0Off: {
                            alt: this.$t("ALT.AVATAR0_OFF"),
                            src: new URL("main/pp9/fourbage/assets/aa3bd5a9.png", self.location).href
                        },
                        avatar0On: {
                            alt: this.$t("ALT.AVATAR0_ON"),
                            src: new URL("main/pp9/fourbage/assets/f724b7dc.png", self.location).href
                        },
                        avatar1Off: {
                            alt: this.$t("ALT.AVATAR1_OFF"),
                            src: new URL("main/pp9/fourbage/assets/93fad546.png", self.location).href
                        },
                        avatar1On: {
                            alt: this.$t("ALT.AVATAR1_ON"),
                            src: new URL("main/pp9/fourbage/assets/d5ed5179.png", self.location).href
                        },
                        avatar2Off: {
                            alt: this.$t("ALT.AVATAR2_OFF"),
                            src: new URL("main/pp9/fourbage/assets/1916a249.png", self.location).href
                        },
                        avatar2On: {
                            alt: this.$t("ALT.AVATAR2_ON"),
                            src: new URL("main/pp9/fourbage/assets/fa1fe56e.png", self.location).href
                        },
                        avatar3Off: {
                            alt: this.$t("ALT.AVATAR3_OFF"),
                            src: new URL("main/pp9/fourbage/assets/92156ead.png", self.location).href
                        },
                        avatar3On: {
                            alt: this.$t("ALT.AVATAR3_ON"),
                            src: new URL("main/pp9/fourbage/assets/3de50393.png", self.location).href
                        },
                        avatar4Off: {
                            alt: this.$t("ALT.AVATAR4_OFF"),
                            src: new URL("main/pp9/fourbage/assets/5a4875a3.png", self.location).href
                        },
                        avatar4On: {
                            alt: this.$t("ALT.AVATAR4_ON"),
                            src: new URL("main/pp9/fourbage/assets/2dffecc0.png", self.location).href
                        },
                        avatar5Off: {
                            alt: this.$t("ALT.AVATAR5_OFF"),
                            src: new URL("main/pp9/fourbage/assets/db5a7b05.png", self.location).href
                        },
                        avatar5On: {
                            alt: this.$t("ALT.AVATAR5_ON"),
                            src: new URL("main/pp9/fourbage/assets/5b579e8f.png", self.location).href
                        },
                        avatar6Off: {
                            alt: this.$t("ALT.AVATAR6_OFF"),
                            src: new URL("main/pp9/fourbage/assets/7bef2910.png", self.location).href
                        },
                        avatar6On: {
                            alt: this.$t("ALT.AVATAR6_ON"),
                            src: new URL("main/pp9/fourbage/assets/11c8e0d5.png", self.location).href
                        },
                        avatar7Off: {
                            alt: this.$t("ALT.AVATAR7_OFF"),
                            src: new URL("main/pp9/fourbage/assets/9075881f.png", self.location).href
                        },
                        avatar7On: {
                            alt: this.$t("ALT.AVATAR7_ON"),
                            src: new URL("main/pp9/fourbage/assets/4e062e95.png", self.location).href
                        }
                    },
                    playerName: ""
                }
            },
            watch: {
                async playerName() {
                    try {
                        this.player.playerNameTextKey && await this.$ecast.updateText(this.player.playerNameTextKey, this.playerName.toUpperCase())
                    } catch (e) {
                        this.$handleEcastError(e)
                    }
                },
                "info.avatar": function() {
                    this.selectedIndex = this.info.avatar
                },
                "player.avatars": function() {
                    var e;
                    (e = this.player.avatars[this.prevSelectedIndex]) != null && e.available && (this.prevSelectedIndex = -1)
                }
            },
            mounted() {
                this.selectedIndex = this.info.avatar
            },
            methods: {
                async submitName() {
                    if (!this.player.responseKey || !this.player.playerNameTextKey) console.error("missing response key or keys");
                    else if (!this.isSubmittingName) {
                        this.showNameChange = !1, this.isSubmittingName = !0;
                        try {
                            await this.$ecast.lock(this.player.playerNameTextKey).then(async () => {
                                await this.$ecast.updateObject(this.player.responseKey, {
                                    action: "name"
                                })
                            })
                        } catch (e) {
                            this.showNameChange = !0, this.$handleEcastError(e)
                        }
                    }
                },
                async submitAvatar(e) {
                    var t;
                    if (!this.player.responseKey) console.error("missing response key");
                    else if (!this.isSubmitting && ((t = this.player.avatars.find(r => r.name.toLowerCase() === `avatar${e}`.toLowerCase())) == null ? void 0 : t.available)) {
                        this.isSubmitting = !0, this.prevSelectedIndex = this.selectedIndex, this.selectedIndex = e;
                        try {
                            await this.$ecast.updateObject(this.player.responseKey, {
                                action: "avatar",
                                avatar: `avatar${e}`
                            }).finally(() => {
                                this.isSubmitting = !1
                            })
                        } catch (r) {
                            this.$handleEcastError(r), this.isSubmitting = !1
                        }
                    }
                }
            }
        }),
        Vte = e => (pc("data-v-daa09643"), e = e(), gc(), e),
        Kte = {
            class: "lobby"
        },
        Yte = {
            class: "lobby-content"
        },
        qte = {
            key: 0,
            class: "instruction eay-instruction"
        },
        zte = {
            key: 1,
            class: "eay-name-change-container"
        },
        Xte = ["disabled", "aria-label"],
        Jte = {
            class: "instruction avatar-instruction"
        },
        Zte = {
            key: 2,
            class: "avatar-container"
        },
        Qte = {
            class: "avatar-row"
        },
        ere = ["onClick"],
        tre = ["src", "alt"],
        rre = ["src", "alt"],
        nre = {
            class: "avatar-row"
        },
        ire = ["onClick"],
        sre = ["src", "alt"],
        are = ["src", "alt"],
        ore = {
            class: "avatar-row"
        },
        lre = ["onClick"],
        cre = ["src", "alt"],
        ure = ["src", "alt"],
        fre = Vte(() => Z("div", {
            class: "fader"
        }, null, -1));

    function dre(e, t, r, n, s, o) {
        const l = Mt("FourbageLogo"),
            u = Mt("Input"),
            f = Mt("LobbyActions"),
            h = Rt("t");
        return H(), z("div", Kte, [Z("div", Yte, [nt(l, {
            class: "logo lobby-logo"
        }), e.player.playerNameTextKey && e.showNameChange ? Ie((H(), z("span", qte, null, 512)), [
            [h, "LOBBY.PLAYER_NAME_INSTRUCTION"]
        ]) : Se("", !0), e.player.playerNameTextKey && e.showNameChange ? (H(), z("div", zte, [nt(u, {
            modelValue: e.playerName,
            "onUpdate:modelValue": t[0] || (t[0] = g => e.playerName = g),
            maxlength: 12,
            class: "eay-name-box",
            disabled: e.isSubmittingName,
            "aria-label": e.$t("ARIA.NAME_ENTRY"),
            sanitizers: ["html", "emoji"],
            onKeypress: t[1] || (t[1] = Us(g => e.submitName(), ["enter"]))
        }, null, 8, ["modelValue", "disabled", "aria-label"]), Ie(Z("button", {
            class: "primary-button eay-name-submit",
            disabled: e.isSubmittingName || e.playerName.length <= 0,
            "aria-label": e.$t("ARIA.NAME_SUBMIT"),
            onClick: t[2] || (t[2] = g => e.submitName())
        }, null, 8, Xte), [
            [h, "ACTION.SUBMIT"]
        ])])) : Se("", !0), Ie(Z("span", Jte, null, 512), [
            [h, "LOBBY.AVATAR_INSTRUCTION"]
        ]), e.player.avatars ? (H(), z("div", Zte, [Z("div", Qte, [(H(), z(et, null, un(3, (g, y) => {
            var E;
            return Z("button", {
                key: `button${y}`,
                class: Me(["avatar-button", y === e.selectedIndex ? "selected" : ""]),
                onClick: C => e.submitAvatar(y)
            }, [e.images[`avatar${y}On`] && (((E = e.player.avatars.find(C => C.name.toLowerCase() === `avatar${y}`.toLowerCase())) == null ? void 0 : E.available) || e.selectedIndex === y || e.prevSelectedIndex === y) ? (H(), z("img", {
                key: 0,
                class: Me(["avatar-image", y === e.selectedIndex ? "selected" : ""]),
                src: e.images[`avatar${y}On`].src,
                alt: e.images[`avatar${y}On`].alt
            }, null, 10, tre)) : e.images[`avatar${y}Off`] ? (H(), z("img", {
                key: 1,
                class: "avatar-image unavailable",
                src: e.images[`avatar${y}Off`].src,
                alt: e.images[`avatar${y}Off`].alt
            }, null, 8, rre)) : Se("", !0)], 10, ere)
        }), 64))]), Z("div", nre, [(H(), z(et, null, un(2, (g, y) => {
            var E;
            return Z("button", {
                key: `button${y+3}`,
                class: Me(["avatar-button", y + 3 === e.selectedIndex ? "selected" : ""]),
                onClick: C => e.submitAvatar(y + 3)
            }, [e.images[`avatar${y+3}On`] && (((E = e.player.avatars.find(C => C.name.toLowerCase() === `avatar${y+3}`.toLowerCase())) == null ? void 0 : E.available) || e.selectedIndex === y + 3 || e.prevSelectedIndex === y + 3) ? (H(), z("img", {
                key: 0,
                class: Me(["avatar-image", y + 3 === e.selectedIndex ? "selected" : ""]),
                src: e.images[`avatar${y+3}On`].src,
                alt: e.images[`avatar${y+3}On`].alt
            }, null, 10, sre)) : e.images[`avatar${y+3}Off`] ? (H(), z("img", {
                key: 1,
                class: "avatar-image unavailable",
                src: e.images[`avatar${y+3}Off`].src,
                alt: e.images[`avatar${y+3}Off`].alt
            }, null, 8, are)) : Se("", !0)], 10, ire)
        }), 64))]), Z("div", ore, [(H(), z(et, null, un(3, (g, y) => {
            var E;
            return Z("button", {
                key: `button${y+5}`,
                class: Me(["avatar-button", y + 5 === e.selectedIndex ? "selected" : ""]),
                onClick: C => e.submitAvatar(y + 5)
            }, [e.images[`avatar${y+5}On`] && (((E = e.player.avatars.find(C => C.name.toLowerCase() === `avatar${y+5}`.toLowerCase())) == null ? void 0 : E.available) || e.selectedIndex === y + 5 || e.prevSelectedIndex === y + 5) ? (H(), z("img", {
                key: 0,
                class: Me(["avatar-image", y + 5 === e.selectedIndex ? "selected" : ""]),
                src: e.images[`avatar${y+5}On`].src,
                alt: e.images[`avatar${y+5}On`].alt
            }, null, 10, cre)) : e.images[`avatar${y+5}Off`] ? (H(), z("img", {
                key: 1,
                class: "avatar-image unavailable",
                src: e.images[`avatar${y+5}Off`].src,
                alt: e.images[`avatar${y+5}Off`].alt
            }, null, 8, ure)) : Se("", !0)], 10, lre)
        }), 64))])])) : Se("", !0)]), fre, nt(f, {
            player: e.player,
            class: "controls",
            "start-text": e.$t("LOBBY.START_TEXT")
        }, null, 8, ["player", "start-text"])])
    }
    const hre = ze(Hte, [
            ["render", dre],
            ["__scopeId", "data-v-daa09643"]
        ]),
        pre = it({
            components: {
                GalleryLink: G6,
                PostGameActions: wT
            },
            props: {
                artifact: {
                    type: Object,
                    required: !0
                },
                player: {
                    type: Object,
                    required: !0
                }
            },
            data() {
                return {
                    images: {
                        chameleon: {
                            alt: this.$t("ALT.CHAMELEON"),
                            src: new URL("main/pp9/fourbage/assets/54968da2.png", self.location).href
                        }
                    }
                }
            }
        }),
        gre = {
            class: "post-game"
        },
        mre = ["src", "alt"];

    function vre(e, t, r, n, s, o) {
        const l = Mt("PostGameActions"),
            u = Mt("GalleryLink");
        return H(), z("div", gre, [nt(l, {
            player: e.player,
            class: "postgame-controls"
        }, null, 8, ["player"]), nt(u, {
            artifact: e.artifact
        }, null, 8, ["artifact"]), e.images.chameleon ? (H(), z("img", {
            key: 0,
            class: "flavor-image",
            src: e.images.chameleon.src,
            alt: e.images.chameleon.alt
        }, null, 8, mre)) : Se("", !0)])
    }
    const yre = ze(pre, [
            ["render", vre],
            ["__scopeId", "data-v-50e222ba"]
        ]),
        _re = it({
            components: {
                FourbageLogo: SS
            },
            props: {
                player: {
                    type: Object,
                    required: !1
                }
            },
            data() {
                return {
                    images: {
                        rabbitWaiting: {
                            alt: this.$t("ALT.RABBIT"),
                            src: new URL("main/pp9/fourbage/assets/713863da.png", self.location).href
                        }
                    }
                }
            }
        }),
        bre = {
            class: "waiting"
        },
        Ere = ["src", "alt"],
        Tre = {
            class: "waiting-text"
        };

    function Sre(e, t, r, n, s, o) {
        const l = Mt("FourbageLogo"),
            u = Rt("t");
        return H(), z("div", bre, [nt(l, {
            class: "logo waiting-logo"
        }), e.images.rabbitWaiting ? (H(), z("img", {
            key: 0,
            class: "bg-image",
            src: e.images.rabbitWaiting.src,
            alt: e.images.rabbitWaiting.alt
        }, null, 8, Ere)) : Se("", !0), Ie(Z("span", Tre, null, 512), [
            [u, "WAITING"]
        ])])
    }
    const OS = ze(_re, [
            ["render", Sre]
        ]),
        Ore = {},
        wre = {
            width: "27",
            height: "33",
            viewBox: "0 0 27 33",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        },
        Cre = jE('<path fill-rule="evenodd" clip-rule="evenodd" d="M23.7302 13.9775H17.0561C16.1749 13.9775 15.4606 14.6919 15.4606 15.573C15.4606 16.4542 16.1749 17.1686 17.0561 17.1686H23.7302C24.6114 17.1686 25.3257 16.4542 25.3257 15.573C25.3257 14.6919 24.6114 13.9775 23.7302 13.9775Z" fill="#000000"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M24.8427 18.7978H18.5394C17.6582 18.7978 16.9438 19.5121 16.9438 20.3933C16.9438 21.2744 17.6582 21.9888 18.5394 21.9888H24.8427C25.7239 21.9888 26.4382 21.2744 26.4382 20.3933C26.4382 19.5121 25.7239 18.7978 24.8427 18.7978Z" fill="#000000"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M23.5448 23.618H17.2415C16.2579 23.618 15.4606 24.4153 15.4606 25.3989C15.4606 26.3825 16.2579 27.1798 17.2415 27.1798H23.5448C24.5284 27.1798 25.3257 26.3825 25.3257 25.3989C25.3257 24.4153 24.5284 23.618 23.5448 23.618Z" fill="#000000"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M22.2471 28.809H15.9438C15.0626 28.809 14.3483 29.5233 14.3483 30.4045C14.3483 31.2857 15.0626 32 15.9438 32H22.2471C23.1283 32 23.8427 31.2857 23.8427 30.4045C23.8427 29.5233 23.1283 28.809 22.2471 28.809Z" fill="#000000"></path><path d="M15.2396 13.7191H14.2978C13.5209 13.7191 13.0156 12.9015 13.363 12.2065L15.59 7.7527C16.0665 6.79958 16.3146 5.7486 16.3146 4.68298V2.87364C16.3146 1.28657 15.028 0 13.441 0C13.3838 0 13.3311 0.0310026 13.3033 0.0809906L12.2017 2.06391C10.5143 5.10118 8.18761 7.73585 5.38233 9.78587L2.4599 11.9215C0.913917 13.0512 0 14.851 0 16.7658V26.8146C0 30.1283 2.68629 32.8146 6 32.8146H14.9786C14.0231 32.4316 13.3483 31.4969 13.3483 30.4045C13.3483 29.0005 14.463 27.8569 15.8557 27.8105C15.0219 27.3303 14.4606 26.4302 14.4606 25.3989C14.4606 23.8762 15.6843 22.6393 17.2021 22.6183C16.4481 22.1642 15.9438 21.3376 15.9438 20.3933C15.9438 19.4491 16.4479 18.6227 17.2017 18.1686H17.056C15.6226 18.1686 14.4606 17.0065 14.4606 15.573C14.4606 14.8468 14.7588 14.1902 15.2396 13.7191Z" fill="#000000"></path>', 5),
        $re = [Cre];

    function Ire(e, t) {
        return H(), z("svg", wre, $re)
    }
    const Are = ze(Ore, [
            ["render", Ire]
        ]),
        Rre = {},
        Nre = {
            width: "22",
            height: "22",
            viewBox: "0 0 22 22",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        },
        Lre = Z("circle", {
            cx: "11.3872",
            cy: "10.5772",
            r: "9",
            transform: "rotate(-0.181627 11.3872 10.5772)",
            stroke: "black",
            "stroke-width": "3"
        }, null, -1),
        Pre = [Lre];

    function kre(e, t) {
        return H(), z("svg", Nre, Pre)
    }
    const xre = ze(Rre, [
            ["render", kre]
        ]),
        Dre = it({
            components: {
                FullLike: Are,
                EmptyLike: xre
            },
            props: {
                player: {
                    type: Object,
                    required: !0
                }
            },
            data() {
                return {
                    isSubmitting: !1,
                    selected: [],
                    hasInteracted: !1
                }
            },
            computed: {
                instruction() {
                    return this.player.context === "pick-likes" ? "CHOOSING.AWARD_LIKES" : this.player.context === "pick-category" ? "CHOOSING.PICK_CATEGORY" : "CHOOSING.PICK_TRUTH"
                }
            },
            watch: {
                "player.prompt": function() {
                    this.isSubmitting = !1, this.selected = [], this.hasInteracted = !1
                },
                "player.context": function() {
                    this.isSubmitting = !1, this.selected = [], this.hasInteracted = !1
                }
            },
            methods: {
                async submitChoices() {
                    if (!this.player.responseKey) console.error("missing response key");
                    else {
                        this.isSubmitting = !0;
                        try {
                            await this.$ecast.updateObject(this.player.responseKey, {
                                action: "submit"
                            }).finally(() => {
                                this.isSubmitting = !1
                            })
                        } catch (e) {
                            this.$handleEcastError(e), this.isSubmitting = !1
                        }
                    }
                },
                async chooseOption(e) {
                    this.isSubmitting = !0, this.hasInteracted = !0;
                    let t;
                    const r = this.selected.indexOf(e);
                    r === -1 ? (this.player.context === "pick-likes" ? this.selected.push(e) : this.selected = [e], t = "select") : (this.selected.splice(r, 1), t = "unselect");
                    try {
                        await this.$ecast.updateObject(this.player.responseKey, {
                            action: t,
                            choice: e
                        }).finally(() => {
                            this.isSubmitting = !1
                        })
                    } catch (n) {
                        this.$handleEcastError(n), this.isSubmitting = !1
                    }
                }
            }
        }),
        Mre = {
            class: "choosing"
        },
        Fre = {
            class: "instruction"
        },
        Ure = {
            key: 0,
            class: "prompt"
        },
        Bre = ["disabled", "aria-label", "onClick"],
        jre = {
            class: "choice-text"
        };

    function Gre(e, t, r, n, s, o) {
        const l = Mt("FullLike"),
            u = Mt("EmptyLike"),
            f = Rt("t"),
            h = Rt("bb");
        return H(), z("div", Mre, [Ie(Z("span", Fre, null, 512), [
            [f, e.instruction]
        ]), e.player.context !== "pick-likes" ? Ie((H(), z("span", Ure, null, 512)), [
            [h, e.player.prompt]
        ]) : Se("", !0), (H(!0), z(et, null, un(e.player.choices, (g, y) => (H(), z("button", {
            key: `${e.player.context}-${y}`,
            class: Me([{
                disabled: g.disabled,
                "like-button": e.player.context === "pick-likes",
                selected: e.selected.indexOf(y) !== -1 && e.player.context !== "pick-likes",
                unselected: e.selected.length > 0 && e.selected.indexOf(y) === -1 && e.player.context !== "pick-likes"
            }, "primary-button choice-button"]),
            disabled: g.disabled,
            "aria-label": g.text,
            onClick: E => e.chooseOption(y)
        }, [Z("span", jre, _t(e.$bb(g.text)), 1), e.player.context === "pick-likes" ? (H(), z(et, {
            key: 0
        }, [e.selected.indexOf(y) !== -1 ? (H(), lr(l, {
            key: 0,
            class: "like-image full-like"
        })) : (H(), lr(u, {
            key: 1,
            class: "like-image empty-like"
        }))], 64)) : Se("", !0)], 10, Bre))), 128))])
    }
    const Wre = ze(Dre, [
            ["render", Gre],
            ["__scopeId", "data-v-404f1f35"]
        ]),
        Hre = it({
            components: {
                Waiting: OS
            },
            props: {
                player: {
                    type: Object,
                    required: !0
                }
            },
            data() {
                return {
                    hasSubmitted: !1,
                    selection: "",
                    state: "voting"
                }
            },
            watch: {
                "player.prompt": function() {
                    this.hasSubmitted = !1, this.selection = "", this.state = "voting"
                }
            },
            mounted() {
                this.player.context === "pick-likes" && (this.state = "liking")
            },
            methods: {
                async submitVote(e) {
                    if (!this.player.voteCountGroup) console.error("missing count group name");
                    else {
                        let t;
                        if (this.state === "voting" || this.player.context === "pick-likes" ? (t = this.player.voteCountGroup, this.player.likesCountGroup ? this.state = "liking" : this.state = "waiting") : (this.selection = e.key, t = this.player.likesCountGroup, this.state = "waiting"), this.hasSubmitted = !0, t) try {
                            await this.$ecast.incrementCountGroupCounter(t, e.key).finally(() => {
                                this.hasSubmitted = !1
                            })
                        } catch (r) {
                            this.$handleEcastError(r), this.hasSubmitted = !1
                        }
                    }
                }
            }
        }),
        Vre = {
            class: "voting"
        },
        Kre = {
            class: "instruction"
        },
        Yre = {
            key: 0,
            class: "prompt"
        },
        qre = ["aria-label", "onClick"],
        zre = {
            class: "choice-text"
        };

    function Xre(e, t, r, n, s, o) {
        const l = Mt("Waiting"),
            u = Rt("t"),
            f = Rt("bb");
        return H(), z("div", Vre, [e.state !== "waiting" ? (H(), z(et, {
            key: 0
        }, [Ie(Z("span", Kre, null, 512), [
            [u, e.state === "liking" ? "VOTING.LIKE_INSTRUCTION" : "VOTING.VOTE_INSTRUCTION"]
        ]), !e.hasSubmitted && e.state !== "liking" ? Ie((H(), z("span", Yre, null, 512)), [
            [f, e.player.prompt]
        ]) : Se("", !0), e.hasSubmitted ? Se("", !0) : (H(!0), z(et, {
            key: 1
        }, un(e.player.choices, (h, g) => (H(), z("button", {
            key: `${e.state}-${g}`,
            class: Me([{
                "like-button": e.state === "liking",
                selected: e.selection === h.key
            }, "primary-button choice-button"]),
            "aria-label": h.text,
            onClick: y => e.submitVote(h)
        }, [Ie(Z("span", zre, null, 512), [
            [f, h.text]
        ])], 10, qre))), 128))], 64)) : (H(), lr(l, {
            key: 1
        }))])
    }
    const Jre = ze(Hre, [
            ["render", Xre]
        ]),
        Zre = {},
        Qre = {
            viewBox: "0 0 305 96",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        },
        ene = Z("path", {
            d: "M41 21V2L55.4762 21H267C287.435 21 304 37.5655 304 58C304 78.4345 287.435 95 267 95H38C17.5655 95 1 78.4345 1 58C1 37.5655 17.5655 21 38 21H41Z",
            fill: "black",
            stroke: "black"
        }, null, -1),
        tne = {
            width: "305",
            height: "76",
            y: "20"
        };

    function rne(e, t) {
        return H(), z("svg", Qre, [ene, (H(), z("foreignObject", tne, [AE(e.$slots, "default")]))])
    }
    const nne = ze(Zre, [
            ["render", rne]
        ]),
        ine = {},
        sne = {
            viewBox: "0 0 56 50",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        },
        ane = Z("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M52.442 43.1411L30.095 4.43507C29.1639 2.82231 26.8361 2.82232 25.905 4.43507L3.55803 43.1411C2.6269 44.7539 3.79081 46.7698 5.65305 46.7698L50.3469 46.7698C52.2092 46.7698 53.3731 44.7539 52.442 43.1411ZM32.8884 2.82231C30.7158 -0.940771 25.2842 -0.940772 23.1116 2.82231L0.764659 41.5284C-1.40796 45.2914 1.30781 49.9953 5.65305 49.9953L50.3469 49.9953C54.6922 49.9953 57.4079 45.2914 55.2353 41.5283L32.8884 2.82231Z",
            fill: "#FF3E4E"
        }, null, -1),
        one = Z("path", {
            d: "M28.4032 16.1275C26.4656 16.1275 24.9565 17.8088 25.1651 19.7351L26.5117 32.1701C26.6163 33.1359 27.4317 33.8678 28.4032 33.8678V33.8678C29.3746 33.8678 30.19 33.1359 30.2946 32.1701L31.6412 19.7351C31.8498 17.8088 30.3407 16.1275 28.4032 16.1275V16.1275Z",
            fill: "#FF3E4E"
        }, null, -1),
        lne = Z("circle", {
            cx: "28.4032",
            cy: "38.3028",
            r: "2.82231",
            fill: "#FF3E4E"
        }, null, -1),
        cne = [ane, one, lne];

    function une(e, t) {
        return H(), z("svg", sne, cne)
    }
    const fne = ze(ine, [
            ["render", une]
        ]),
        dne = {},
        hne = {
            viewBox: "0 0 37 37",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        },
        pne = Z("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M18.5 37C28.7173 37 37 28.7173 37 18.5C37 8.28275 28.7173 0 18.5 0C8.28273 0 0 8.28275 0 18.5C0 28.7173 8.28273 37 18.5 37ZM11.5 11C12.8807 11 14 12.1193 14 13.5C14 14.8807 12.8807 16 11.5 16C10.1193 16 9 14.8807 9 13.5C9 12.1193 10.1193 11 11.5 11ZM27 13.5C27 12.1193 25.8807 11 24.5 11C23.1193 11 22 12.1193 22 13.5C22 14.8807 23.1193 16 24.5 16C25.8807 16 27 14.8807 27 13.5ZM18.5 21C21.5376 21 24 23.2386 24 26C24 28.7614 21.5376 30 18.5 30C15.4624 30 13 28.7614 13 26C13 23.2386 15.4624 21 18.5 21Z",
            fill: "#FFD233"
        }, null, -1),
        gne = [pne];

    function mne(e, t) {
        return H(), z("svg", hne, gne)
    }
    const vne = ze(dne, [
            ["render", mne]
        ]),
        yne = it({
            components: {
                Input: CT,
                SadFace: vne,
                SpeechBubble: nne,
                WarningSymbol: fne
            },
            props: {
                player: {
                    type: Object,
                    required: !0
                }
            },
            data() {
                return {
                    isSubmitting: !1,
                    isLieForMe: !1,
                    isTruthError: !1,
                    isProfanityError1: !1,
                    isProfanityError2: !1,
                    currentText1: "",
                    currentText2: ""
                }
            },
            computed: {
                instruction() {
                    return this.player.instruction && this.player.instruction !== "" ? this.player.instruction : this.player.context === "final-round" ? "WRITING.FINALROUND_INSTRUCTION" : this.player.context === "double-blankie" ? "WRITING.DOUBLE_INSTRUCTION" : this.isLieForMe ? "WRITING.LIE_FOR_ME_INSTRUCTION" : "WRITING.SINGLE_INSTRUCTION"
                }
            },
            watch: {
                async currentText1() {
                    this.isTruthError = !1, this.isProfanityError1 = !1;
                    try {
                        await this.$ecast.updateText(this.player.textKey1, this.currentText1)
                    } catch (e) {
                        this.isProfanityError1 = !0, this.$handleEcastError(e)
                    }
                },
                async currentText2() {
                    if (this.player.textKey2) {
                        this.isTruthError = !1, this.isProfanityError2 = !1;
                        try {
                            await this.$ecast.updateText(this.player.textKey2, this.currentText2)
                        } catch (e) {
                            this.isProfanityError2 = !0, this.$handleEcastError(e)
                        }
                    }
                },
                "player.prompt1": function() {
                    this.isSubmitting = !1, this.currentText1 = "", this.currentText2 = ""
                },
                "player.error": function() {
                    this.player.error ? (this.isSubmitting = !1, this.isTruthError = !0) : this.isTruthError = !1
                }
            },
            methods: {
                async onSubmit() {
                    if (!this.player.responseKey) console.error("missing response key");
                    else if (this.isProfanityError1 || this.isProfanityError2 || this.isTruthError) console.error("can't submit disallowed text");
                    else if (this.currentText1.length <= 0 || this.player.textKey2 && this.currentText2.length <= 0) console.error("cant submit blanks text");
                    else if (!this.isSubmitting) {
                        this.isSubmitting = !0;
                        try {
                            await this.$ecast.updateObject(this.player.responseKey, {
                                action: this.isLieForMe ? "lieForMe" : "answer"
                            })
                        } catch (e) {
                            this.$handleEcastError(e), this.isSubmitting = !1
                        }
                    }
                },
                lieForMe() {
                    this.isLieForMe = !0
                },
                async parseAndSubmitLie(e) {
                    this.isSubmitting = !0;
                    const t = e.split("|"),
                        r = [];
                    r.push(this.$ecast.updateText(this.player.textKey1, t[0])), t.length > 1 && this.player.textKey2 && r.push(this.$ecast.updateText(this.player.textKey2, t[1]));
                    try {
                        await Promise.all(r)
                    } catch (n) {
                        this.$handleEcastError(n)
                    } finally {
                        this.isSubmitting = !1
                    }
                    await this.onSubmit()
                }
            }
        }),
        _ne = {
            class: "writing"
        },
        bne = {
            class: "instruction"
        },
        Ene = {
            class: "prompt"
        },
        Tne = {
            key: 0,
            class: "separator"
        },
        Sne = {
            key: 1,
            class: "prompt"
        },
        One = {
            class: "error-container"
        },
        wne = {
            class: "error-text profanity-error"
        },
        Cne = {
            class: "error-container"
        },
        $ne = {
            class: "error-text truth-error"
        },
        Ine = {
            key: 2,
            class: "joiner"
        },
        Ane = {
            class: "error-container"
        },
        Rne = {
            class: "error-text profanity-error"
        },
        Nne = ["disabled", "aria-label"],
        Lne = {
            class: "button-separator"
        },
        Pne = ["disabled", "aria-label"],
        kne = ["disabled", "aria-label", "onClick"];

    function xne(e, t, r, n, s, o) {
        const l = Mt("Input"),
            u = Mt("WarningSymbol"),
            f = Mt("SpeechBubble"),
            h = Mt("SadFace"),
            g = Rt("t"),
            y = Rt("bb");
        return H(), z("div", _ne, [Ie(Z("span", bne, null, 512), [
            [g, e.instruction]
        ]), Ie(Z("span", Ene, null, 512), [
            [y, e.player.prompt1]
        ]), e.player.prompt2 ? Ie((H(), z("span", Tne, null, 512)), [
            [g, "WRITING.SEPARATOR"]
        ]) : Se("", !0), e.player.prompt2 ? Ie((H(), z("span", Sne, null, 512)), [
            [y, e.player.prompt2]
        ]) : Se("", !0), e.isLieForMe ? (H(!0), z(et, {
            key: 3
        }, un(e.player.suggestions, (E, C) => Ie((H(), z("button", {
            key: `lie-${C}`,
            class: "primary-button",
            disabled: e.isSubmitting,
            "aria-label": e.$t("ARIA.CHOICE_BUTTON"),
            onClick: P => e.parseAndSubmitLie(E)
        }, null, 8, kne)), [
            [y, E.replace("|", " " + e.player.joiningPhrase + " ")]
        ])), 128)) : (H(), z(et, {
            key: 2
        }, [nt(l, {
            modelValue: e.currentText1,
            "onUpdate:modelValue": t[0] || (t[0] = E => e.currentText1 = E),
            placeholder: e.player.placeholder,
            maxlength: e.player.maxLength,
            class: "answer-box",
            disabled: e.isSubmitting,
            "aria-label": e.$t("ARIA.LIE_INPUT_1"),
            sanitizers: ["html", "emoji"],
            onKeypress: t[1] || (t[1] = Us(E => e.onSubmit(), ["enter"]))
        }, null, 8, ["modelValue", "placeholder", "maxlength", "disabled", "aria-label"]), e.isProfanityError1 ? (H(), lr(f, {
            key: 0,
            class: "error-bubble"
        }, {
            default: Fs(() => [Z("div", One, [nt(u, {
                class: "warning-icon"
            }), Ie(Z("span", wne, null, 512), [
                [g, "WRITING.PROHIBITED_LANGUAGE"]
            ])])]),
            _: 1
        })) : e.isTruthError ? (H(), lr(f, {
            key: 1,
            class: "error-bubble"
        }, {
            default: Fs(() => [Z("div", Cne, [nt(h, {
                class: "warning-icon"
            }), Z("span", $ne, _t(e.player.error), 1)])]),
            _: 1
        })) : Se("", !0), e.player.textKey2 && e.player.joiningPhrase ? Ie((H(), z("span", Ine, null, 512)), [
            [g, e.player.joiningPhrase.toUpperCase()]
        ]) : Se("", !0), e.player.textKey2 ? (H(), lr(l, {
            key: 3,
            modelValue: e.currentText2,
            "onUpdate:modelValue": t[2] || (t[2] = E => e.currentText2 = E),
            placeholder: e.player.placeholder,
            maxlength: e.player.maxLength,
            class: "answer-box",
            disabled: e.isSubmitting,
            "aria-label": e.$t("ARIA.LIE_INPUT_2"),
            sanitizers: ["html", "emoji"],
            onKeypress: Us(Zr(e.onSubmit, ["prevent"]), ["enter"])
        }, null, 8, ["modelValue", "placeholder", "maxlength", "disabled", "aria-label", "onKeypress"])) : Se("", !0), e.isProfanityError2 ? (H(), lr(f, {
            key: 4,
            class: "error-bubble"
        }, {
            default: Fs(() => [Z("div", Ane, [nt(u, {
                class: "warning-icon"
            }), Ie(Z("span", Rne, null, 512), [
                [g, "WRITING.PROHIBITED_LANGUAGE"]
            ])])]),
            _: 1
        })) : Se("", !0), Ie(Z("button", {
            class: "primary-button",
            disabled: e.currentText1.length <= 0 || e.player.textKey2 && e.currentText2.length <= 0 || e.isSubmitting || e.isTruthError || e.isProfanityError1 || e.isProfanityError2,
            "aria-label": e.$t("ARIA.SUBMIT_BUTTON"),
            onClick: t[3] || (t[3] = E => e.onSubmit()),
            onKeydownCapture: t[4] || (t[4] = Us(E => e.onSubmit(), ["enter"]))
        }, null, 40, Nne), [
            [g, "ACTION.SUBMIT"]
        ]), e.player.suggestions && e.player.suggestions.length > 0 ? (H(), z(et, {
            key: 5
        }, [Ie(Z("span", Lne, null, 512), [
            [g, "SEPARATOR.OR"]
        ]), Ie(Z("button", {
            class: "secondary-button",
            disabled: e.isSubmitting,
            "aria-label": e.$t("ARIA.LIE_BUTTON"),
            onClick: t[5] || (t[5] = E => e.lieForMe())
        }, null, 8, Pne), [
            [g, "WRITING.LIE_FOR_ME"]
        ])], 64)) : Se("", !0)], 64))])
    }
    const Dne = ze(yne, [
            ["render", xne],
            ["__scopeId", "data-v-6fb6f179"]
        ]),
        Mne = it({
            bb: {
                blank: (e, t, r) => '<span class="blank">________</span>'
            },
            components: {
                Lobby: hre,
                Postgame: yre,
                Waiting: OS,
                Choosing: Wre,
                Writing: Dne,
                Voting: Jre,
                Fallbacks: F6
            },
            themeColor: "#000000",
            ecastKeys: {
                audience: "audiencePlayer",
                info: ({
                    id: e
                }) => `info:${e}`,
                player: ({
                    id: e
                }) => `player:${e}`,
                text: ({
                    id: e
                }) => `text:${e}`
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
            props: {
                artifact: Object,
                audience: Object,
                info: Object,
                player: Object,
                text: String
            },
            computed: {
                alternateBackgroundClass() {
                    if (this.player && this.player.kind === "choosing") {
                        if (this.player.context === "pick-likes") return "likes-screen";
                        if (this.player.context === "final-round-2") return "final-round-2-screen"
                    }
                    return ""
                },
                screen() {
                    if (this.audience) switch (this.audience.kind) {
                        case "voting":
                            return ["Voting", {
                                player: this.audience
                            }];
                        case "waiting":
                            return ["Waiting", {
                                player: this.audience
                            }];
                        case "postGame":
                            return ["Postgame", {
                                player: this.audience,
                                artifact: this.artifact
                            }]
                    }
                    if (this.player) switch (this.player.kind) {
                        case "lobby":
                            return ["Lobby", {
                                player: this.player,
                                info: this.info
                            }];
                        case "postGame":
                            return ["Postgame", {
                                player: this.player,
                                artifact: this.artifact
                            }];
                        case "waiting":
                            return ["Waiting", {
                                player: this.player
                            }];
                        case "choosing":
                            return ["Choosing", {
                                player: this.player
                            }];
                        case "writing":
                            return ["Writing", {
                                player: this.player
                            }];
                        case "voting":
                            return ["Voting", {
                                player: this.player
                            }];
                        default:
                            return ["Fallbacks", {
                                player: this.player
                            }]
                    }
                    return ["Waiting", {}]
                }
            }
        }),
        Fne = {
            class: "constrain"
        },
        Une = {
            key: 0,
            class: "name-header"
        },
        Bne = {
            key: 1,
            class: "name-header"
        };

    function jne(e, t, r, n, s, o) {
        const l = Rt("bb"),
            u = Rt("t");
        return H(), z("div", {
            class: Me([e.alternateBackgroundClass, "fourbage"])
        }, [Z("div", Fne, [e.screen ? (H(), lr(yc(e.screen[0]), Ec({
            key: 0,
            role: "main"
        }, e.screen[1]), null, 16)) : Se("", !0)]), e.info ? Ie((H(), z("span", Une, null, 512)), [
            [l, e.info.name]
        ]) : Se("", !0), e.audience ? Ie((H(), z("span", Bne, null, 512)), [
            [u, "AUDIENCE.NAME"]
        ]) : Se("", !0)], 2)
    }
    const Gne = ze(Mne, [
        ["render", jne]
    ]);
    Ate({
        MainView: Gne,
        messages: Fte
    })
});
export default Wne();
//# sourceMappingURL=c14f551e.js.map