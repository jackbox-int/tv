var ZN = Object.defineProperty;
var eP = (e, t, r) => t in e ? ZN(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r;
var tP = (e, t) => () => (t || e((t = {
    exports: {}
}).exports, t), t.exports);
var ge = (e, t, r) => (eP(e, typeof t != "symbol" ? t + "" : t, r), r);
var Fne = tP((Une, Tw) => {
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
    const rP = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
        nP = uh(rP);

    function Kb(e) {
        return !!e || e === ""
    }

    function ac(e) {
        if (ke(e)) {
            const t = {};
            for (let r = 0; r < e.length; r++) {
                const n = e[r],
                    s = Wt(n) ? aP(n) : ac(n);
                if (s)
                    for (const o in s) t[o] = s[o]
            }
            return t
        } else {
            if (Wt(e)) return e;
            if (mt(e)) return e
        }
    }
    const iP = /;(?![^(]*\))/g,
        sP = /:(.+)/;

    function aP(e) {
        const t = {};
        return e.split(iP).forEach(r => {
            if (r) {
                const n = r.split(sP);
                n.length > 1 && (t[n[0].trim()] = n[1].trim())
            }
        }), t
    }

    function xe(e) {
        let t = "";
        if (Wt(e)) t = e;
        else if (ke(e))
            for (let r = 0; r < e.length; r++) {
                const n = xe(e[r]);
                n && (t += n + " ")
            } else if (mt(e))
                for (const r in e) e[r] && (t += r + " ");
        return t.trim()
    }

    function oP(e, t) {
        if (e.length !== t.length) return !1;
        let r = !0;
        for (let n = 0; r && n < e.length; n++) r = oc(e[n], t[n]);
        return r
    }

    function oc(e, t) {
        if (e === t) return !0;
        let r = mv(e),
            n = mv(t);
        if (r || n) return r && n ? e.getTime() === t.getTime() : !1;
        if (r = Va(e), n = Va(t), r || n) return e === t;
        if (r = ke(e), n = ke(t), r || n) return r && n ? oP(e, t) : !1;
        if (r = mt(e), n = mt(t), r || n) {
            if (!r || !n) return !1;
            const s = Object.keys(e).length,
                o = Object.keys(t).length;
            if (s !== o) return !1;
            for (const l in e) {
                const u = e.hasOwnProperty(l),
                    f = t.hasOwnProperty(l);
                if (u && !f || !u && f || !oc(e[l], t[l])) return !1
            }
        }
        return String(e) === String(t)
    }

    function Vb(e, t) {
        return e.findIndex(r => oc(r, t))
    }
    const nt = e => Wt(e) ? e : e == null ? "" : ke(e) || mt(e) && (e.toString === zb || !He(e.toString)) ? JSON.stringify(e, qb, 2) : String(e),
        qb = (e, t) => t && t.__v_isRef ? qb(e, t.value) : Ds(t) ? {
            [`Map(${t.size})`]: [...t.entries()].reduce((r, [n, s]) => (r[`${n} =>`] = s, r), {})
        } : cc(t) ? {
            [`Set(${t.size})`]: [...t.values()]
        } : mt(t) && !ke(t) && !Xb(t) ? String(t) : t,
        gt = {},
        xs = [],
        cn = () => {},
        lP = () => !1,
        cP = /^on[^a-z]/,
        lc = e => cP.test(e),
        fh = e => e.startsWith("onUpdate:"),
        rr = Object.assign,
        dh = (e, t) => {
            const r = e.indexOf(t);
            r > -1 && e.splice(r, 1)
        },
        uP = Object.prototype.hasOwnProperty,
        Ze = (e, t) => uP.call(e, t),
        ke = Array.isArray,
        Ds = e => ao(e) === "[object Map]",
        cc = e => ao(e) === "[object Set]",
        mv = e => ao(e) === "[object Date]",
        He = e => typeof e == "function",
        Wt = e => typeof e == "string",
        Va = e => typeof e == "symbol",
        mt = e => e !== null && typeof e == "object",
        Yb = e => mt(e) && He(e.then) && He(e.catch),
        zb = Object.prototype.toString,
        ao = e => zb.call(e),
        fP = e => ao(e).slice(8, -1),
        Xb = e => ao(e) === "[object Object]",
        hh = e => Wt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
        Nl = uh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
        uc = e => {
            const t = Object.create(null);
            return r => t[r] || (t[r] = e(r))
        },
        dP = /-(\w)/g,
        On = uc(e => e.replace(dP, (t, r) => r ? r.toUpperCase() : "")),
        hP = /\B([A-Z])/g,
        os = uc(e => e.replace(hP, "-$1").toLowerCase()),
        fc = uc(e => e.charAt(0).toUpperCase() + e.slice(1)),
        ff = uc(e => e ? `on${fc(e)}` : ""),
        qa = (e, t) => !Object.is(e, t),
        Pl = (e, t) => {
            for (let r = 0; r < e.length; r++) e[r](t)
        },
        Fl = (e, t, r) => {
            Object.defineProperty(e, t, {
                configurable: !0,
                enumerable: !1,
                value: r
            })
        },
        Bl = e => {
            const t = parseFloat(e);
            return isNaN(t) ? e : t
        };
    let vv;
    const pP = () => vv || (vv = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
    let _n;
    class Jb {
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

    function gP(e) {
        return new Jb(e)
    }

    function mP(e, t = _n) {
        t && t.active && t.effects.push(e)
    }
    const ph = e => {
            const t = new Set(e);
            return t.w = 0, t.n = 0, t
        },
        Qb = e => (e.w & fi) > 0,
        Zb = e => (e.n & fi) > 0,
        vP = ({
            deps: e
        }) => {
            if (e.length)
                for (let t = 0; t < e.length; t++) e[t].w |= fi
        },
        yP = e => {
            const {
                deps: t
            } = e;
            if (t.length) {
                let r = 0;
                for (let n = 0; n < t.length; n++) {
                    const s = t[n];
                    Qb(s) && !Zb(s) ? s.delete(e) : t[r++] = s, s.w &= ~fi, s.n &= ~fi
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
            this.fn = t, this.scheduler = r, this.active = !0, this.deps = [], this.parent = void 0, mP(this, n)
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
                return this.parent = an, an = this, li = !0, fi = 1 << ++ka, ka <= ad ? vP(this) : yv(this), this.fn()
            } finally {
                ka <= ad && yP(this), fi = 1 << --ka, an = this.parent, li = r, this.parent = void 0, this.deferStop && this.stop()
            }
        }
        stop() {
            an === this ? this.deferStop = !0 : this.active && (yv(this), this.onStop && this.onStop(), this.active = !1)
        }
    }

    function yv(e) {
        const {
            deps: t
        } = e;
        if (t.length) {
            for (let r = 0; r < t.length; r++) t[r].delete(e);
            t.length = 0
        }
    }
    let li = !0;
    const eE = [];

    function ta() {
        eE.push(li), li = !1
    }

    function ra() {
        const e = eE.pop();
        li = e === void 0 ? !0 : e
    }

    function xr(e, t, r) {
        if (li && an) {
            let n = sd.get(e);
            n || sd.set(e, n = new Map);
            let s = n.get(r);
            s || n.set(r, s = ph()), tE(s)
        }
    }

    function tE(e, t) {
        let r = !1;
        ka <= ad ? Zb(e) || (e.n |= fi, r = !Qb(e)) : r = !e.has(an), r && (e.add(an), an.deps.push(e))
    }

    function Bn(e, t, r, n, s, o) {
        const l = sd.get(e);
        if (!l) return;
        let u = [];
        if (t === "clear") u = [...l.values()];
        else if (r === "length" && ke(e)) l.forEach((f, h) => {
            (h === "length" || h >= n) && u.push(f)
        });
        else switch (r !== void 0 && u.push(l.get(r)), t) {
            case "add":
                ke(e) ? hh(r) && u.push(l.get("length")) : (u.push(l.get(Ji)), Ds(e) && u.push(l.get(od)));
                break;
            case "delete":
                ke(e) || (u.push(l.get(Ji)), Ds(e) && u.push(l.get(od)));
                break;
            case "set":
                Ds(e) && u.push(l.get(Ji));
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
        for (const n of r) n.computed && _v(n);
        for (const n of r) n.computed || _v(n)
    }

    function _v(e, t) {
        (e !== an || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run())
    }
    const _P = uh("__proto__,__v_isRef,__isVue"),
        rE = new Set(Object.getOwnPropertyNames(Symbol).filter(e => e !== "arguments" && e !== "caller").map(e => Symbol[e]).filter(Va)),
        bP = mh(),
        EP = mh(!1, !0),
        TP = mh(!0),
        bv = SP();

    function SP() {
        const e = {};
        return ["includes", "indexOf", "lastIndexOf"].forEach(t => {
            e[t] = function(...r) {
                const n = st(this);
                for (let o = 0, l = this.length; o < l; o++) xr(n, "get", o + "");
                const s = n[t](...r);
                return s === -1 || s === !1 ? n[t](...r.map(st)) : s
            }
        }), ["push", "pop", "shift", "unshift", "splice"].forEach(t => {
            e[t] = function(...r) {
                ta();
                const n = st(this)[t].apply(this, r);
                return ra(), n
            }
        }), e
    }

    function mh(e = !1, t = !1) {
        return function(n, s, o) {
            if (s === "__v_isReactive") return !e;
            if (s === "__v_isReadonly") return e;
            if (s === "__v_isShallow") return t;
            if (s === "__v_raw" && o === (e ? t ? BP : oE : t ? aE : sE).get(n)) return n;
            const l = ke(n);
            if (!e && l && Ze(bv, s)) return Reflect.get(bv, s, o);
            const u = Reflect.get(n, s, o);
            return (Va(s) ? rE.has(s) : _P(s)) || (e || xr(n, "get", s), t) ? u : er(u) ? l && hh(s) ? u : u.value : mt(u) ? e ? lE(u) : Un(u) : u
        }
    }
    const OP = nE(),
        wP = nE(!0);

    function nE(e = !1) {
        return function(r, n, s, o) {
            let l = r[n];
            if (qs(l) && er(l) && !er(s)) return !1;
            if (!e && (!Ul(s) && !qs(s) && (l = st(l), s = st(s)), !ke(r) && er(l) && !er(s))) return l.value = s, !0;
            const u = ke(r) && hh(n) ? Number(n) < r.length : Ze(r, n),
                f = Reflect.set(r, n, s, o);
            return r === st(o) && (u ? qa(s, l) && Bn(r, "set", n, s) : Bn(r, "add", n, s)), f
        }
    }

    function $P(e, t) {
        const r = Ze(e, t);
        e[t];
        const n = Reflect.deleteProperty(e, t);
        return n && r && Bn(e, "delete", t, void 0), n
    }

    function CP(e, t) {
        const r = Reflect.has(e, t);
        return (!Va(t) || !rE.has(t)) && xr(e, "has", t), r
    }

    function IP(e) {
        return xr(e, "iterate", ke(e) ? "length" : Ji), Reflect.ownKeys(e)
    }
    const iE = {
            get: bP,
            set: OP,
            deleteProperty: $P,
            has: CP,
            ownKeys: IP
        },
        AP = {
            get: TP,
            set(e, t) {
                return !0
            },
            deleteProperty(e, t) {
                return !0
            }
        },
        NP = rr({}, iE, {
            get: EP,
            set: wP
        }),
        vh = e => e,
        dc = e => Reflect.getPrototypeOf(e);

    function fl(e, t, r = !1, n = !1) {
        e = e.__v_raw;
        const s = st(e),
            o = st(t);
        r || (t !== o && xr(s, "get", t), xr(s, "get", o));
        const {
            has: l
        } = dc(s), u = n ? vh : r ? bh : Ya;
        if (l.call(s, t)) return u(e.get(t));
        if (l.call(s, o)) return u(e.get(o));
        e !== s && e.get(t)
    }

    function dl(e, t = !1) {
        const r = this.__v_raw,
            n = st(r),
            s = st(e);
        return t || (e !== s && xr(n, "has", e), xr(n, "has", s)), e === s ? r.has(e) : r.has(e) || r.has(s)
    }

    function hl(e, t = !1) {
        return e = e.__v_raw, !t && xr(st(e), "iterate", Ji), Reflect.get(e, "size", e)
    }

    function Ev(e) {
        e = st(e);
        const t = st(this);
        return dc(t).has.call(t, e) || (t.add(e), Bn(t, "add", e, e)), this
    }

    function Tv(e, t) {
        t = st(t);
        const r = st(this),
            {
                has: n,
                get: s
            } = dc(r);
        let o = n.call(r, e);
        o || (e = st(e), o = n.call(r, e));
        const l = s.call(r, e);
        return r.set(e, t), o ? qa(t, l) && Bn(r, "set", e, t) : Bn(r, "add", e, t), this
    }

    function Sv(e) {
        const t = st(this),
            {
                has: r,
                get: n
            } = dc(t);
        let s = r.call(t, e);
        s || (e = st(e), s = r.call(t, e)), n && n.call(t, e);
        const o = t.delete(e);
        return s && Bn(t, "delete", e, void 0), o
    }

    function Ov() {
        const e = st(this),
            t = e.size !== 0,
            r = e.clear();
        return t && Bn(e, "clear", void 0, void 0), r
    }

    function pl(e, t) {
        return function(n, s) {
            const o = this,
                l = o.__v_raw,
                u = st(l),
                f = t ? vh : e ? bh : Ya;
            return !e && xr(u, "iterate", Ji), l.forEach((h, g) => n.call(s, f(h), f(g), o))
        }
    }

    function gl(e, t, r) {
        return function(...n) {
            const s = this.__v_raw,
                o = st(s),
                l = Ds(o),
                u = e === "entries" || e === Symbol.iterator && l,
                f = e === "keys" && l,
                h = s[e](...n),
                g = r ? vh : t ? bh : Ya;
            return !t && xr(o, "iterate", f ? od : Ji), {
                next() {
                    const {
                        value: _,
                        done: E
                    } = h.next();
                    return E ? {
                        value: _,
                        done: E
                    } : {
                        value: u ? [g(_[0]), g(_[1])] : g(_),
                        done: E
                    }
                },
                [Symbol.iterator]() {
                    return this
                }
            }
        }
    }

    function Qn(e) {
        return function(...t) {
            return e === "delete" ? !1 : this
        }
    }

    function PP() {
        const e = {
                get(o) {
                    return fl(this, o)
                },
                get size() {
                    return hl(this)
                },
                has: dl,
                add: Ev,
                set: Tv,
                delete: Sv,
                clear: Ov,
                forEach: pl(!1, !1)
            },
            t = {
                get(o) {
                    return fl(this, o, !1, !0)
                },
                get size() {
                    return hl(this)
                },
                has: dl,
                add: Ev,
                set: Tv,
                delete: Sv,
                clear: Ov,
                forEach: pl(!1, !0)
            },
            r = {
                get(o) {
                    return fl(this, o, !0)
                },
                get size() {
                    return hl(this, !0)
                },
                has(o) {
                    return dl.call(this, o, !0)
                },
                add: Qn("add"),
                set: Qn("set"),
                delete: Qn("delete"),
                clear: Qn("clear"),
                forEach: pl(!0, !1)
            },
            n = {
                get(o) {
                    return fl(this, o, !0, !0)
                },
                get size() {
                    return hl(this, !0)
                },
                has(o) {
                    return dl.call(this, o, !0)
                },
                add: Qn("add"),
                set: Qn("set"),
                delete: Qn("delete"),
                clear: Qn("clear"),
                forEach: pl(!0, !0)
            };
        return ["keys", "values", "entries", Symbol.iterator].forEach(o => {
            e[o] = gl(o, !1, !1), r[o] = gl(o, !0, !1), t[o] = gl(o, !1, !0), n[o] = gl(o, !0, !0)
        }), [e, r, t, n]
    }
    const [RP, LP, kP, xP] = PP();

    function yh(e, t) {
        const r = t ? e ? xP : kP : e ? LP : RP;
        return (n, s, o) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? n : Reflect.get(Ze(r, s) && s in n ? r : n, s, o)
    }
    const DP = {
            get: yh(!1, !1)
        },
        MP = {
            get: yh(!1, !0)
        },
        FP = {
            get: yh(!0, !1)
        },
        sE = new WeakMap,
        aE = new WeakMap,
        oE = new WeakMap,
        BP = new WeakMap;

    function UP(e) {
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

    function jP(e) {
        return e.__v_skip || !Object.isExtensible(e) ? 0 : UP(fP(e))
    }

    function Un(e) {
        return qs(e) ? e : _h(e, !1, iE, DP, sE)
    }

    function GP(e) {
        return _h(e, !1, NP, MP, aE)
    }

    function lE(e) {
        return _h(e, !0, AP, FP, oE)
    }

    function _h(e, t, r, n, s) {
        if (!mt(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
        const o = s.get(e);
        if (o) return o;
        const l = jP(e);
        if (l === 0) return e;
        const u = new Proxy(e, l === 2 ? n : r);
        return s.set(e, u), u
    }

    function Ms(e) {
        return qs(e) ? Ms(e.__v_raw) : !!(e && e.__v_isReactive)
    }

    function qs(e) {
        return !!(e && e.__v_isReadonly)
    }

    function Ul(e) {
        return !!(e && e.__v_isShallow)
    }

    function cE(e) {
        return Ms(e) || qs(e)
    }

    function st(e) {
        const t = e && e.__v_raw;
        return t ? st(t) : e
    }

    function uE(e) {
        return Fl(e, "__v_skip", !0), e
    }
    const Ya = e => mt(e) ? Un(e) : e,
        bh = e => mt(e) ? lE(e) : e;

    function fE(e) {
        li && an && (e = st(e), tE(e.dep || (e.dep = ph())))
    }

    function dE(e, t) {
        e = st(e), e.dep && ld(e.dep)
    }

    function er(e) {
        return !!(e && e.__v_isRef === !0)
    }

    function on(e) {
        return hE(e, !1)
    }

    function WP(e) {
        return hE(e, !0)
    }

    function hE(e, t) {
        return er(e) ? e : new HP(e, t)
    }
    class HP {
        constructor(t, r) {
            this.__v_isShallow = r, this.dep = void 0, this.__v_isRef = !0, this._rawValue = r ? t : st(t), this._value = r ? t : Ya(t)
        }
        get value() {
            return fE(this), this._value
        }
        set value(t) {
            const r = this.__v_isShallow || Ul(t) || qs(t);
            t = r ? t : st(t), qa(t, this._rawValue) && (this._rawValue = t, this._value = r ? t : Ya(t), dE(this))
        }
    }

    function KP(e) {
        return er(e) ? e.value : e
    }
    const VP = {
        get: (e, t, r) => KP(Reflect.get(e, t, r)),
        set: (e, t, r, n) => {
            const s = e[t];
            return er(s) && !er(r) ? (s.value = r, !0) : Reflect.set(e, t, r, n)
        }
    };

    function pE(e) {
        return Ms(e) ? e : new Proxy(e, VP)
    }
    var gE;
    class qP {
        constructor(t, r, n, s) {
            this._setter = r, this.dep = void 0, this.__v_isRef = !0, this[gE] = !1, this._dirty = !0, this.effect = new gh(t, () => {
                this._dirty || (this._dirty = !0, dE(this))
            }), this.effect.computed = this, this.effect.active = this._cacheable = !s, this.__v_isReadonly = n
        }
        get value() {
            const t = st(this);
            return fE(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value
        }
        set value(t) {
            this._setter(t)
        }
    }
    gE = "__v_isReadonly";

    function YP(e, t, r = !1) {
        let n, s;
        const o = He(e);
        return o ? (n = e, s = cn) : (n = e.get, s = e.set), new qP(n, s, o || !s, r)
    }

    function ci(e, t, r, n) {
        let s;
        try {
            s = n ? e(...n) : e()
        } catch (o) {
            hc(o, t, r)
        }
        return s
    }

    function Jr(e, t, r, n) {
        if (He(e)) {
            const o = ci(e, t, r, n);
            return o && Yb(o) && o.catch(l => {
                hc(l, t, r)
            }), o
        }
        const s = [];
        for (let o = 0; o < e.length; o++) s.push(Jr(e[o], t, r, n));
        return s
    }

    function hc(e, t, r, n = !0) {
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
        zP(e, r, s, n)
    }

    function zP(e, t, r, n = !0) {
        console.error(e)
    }
    let za = !1,
        cd = !1;
    const or = [];
    let Sn = 0;
    const Fs = [];
    let Dn = null,
        Hi = 0;
    const mE = Promise.resolve();
    let Eh = null;

    function XP(e) {
        const t = Eh || mE;
        return e ? t.then(this ? e.bind(this) : e) : t
    }

    function JP(e) {
        let t = Sn + 1,
            r = or.length;
        for (; t < r;) {
            const n = t + r >>> 1;
            Xa(or[n]) < e ? t = n + 1 : r = n
        }
        return t
    }

    function Th(e) {
        (!or.length || !or.includes(e, za && e.allowRecurse ? Sn + 1 : Sn)) && (e.id == null ? or.push(e) : or.splice(JP(e.id), 0, e), vE())
    }

    function vE() {
        !za && !cd && (cd = !0, Eh = mE.then(_E))
    }

    function QP(e) {
        const t = or.indexOf(e);
        t > Sn && or.splice(t, 1)
    }

    function ZP(e) {
        ke(e) ? Fs.push(...e) : (!Dn || !Dn.includes(e, e.allowRecurse ? Hi + 1 : Hi)) && Fs.push(e), vE()
    }

    function wv(e, t = za ? Sn + 1 : 0) {
        for (; t < or.length; t++) {
            const r = or[t];
            r && r.pre && (or.splice(t, 1), t--, r())
        }
    }

    function yE(e) {
        if (Fs.length) {
            const t = [...new Set(Fs)];
            if (Fs.length = 0, Dn) {
                Dn.push(...t);
                return
            }
            for (Dn = t, Dn.sort((r, n) => Xa(r) - Xa(n)), Hi = 0; Hi < Dn.length; Hi++) Dn[Hi]();
            Dn = null, Hi = 0
        }
    }
    const Xa = e => e.id == null ? 1 / 0 : e.id,
        eR = (e, t) => {
            const r = Xa(e) - Xa(t);
            if (r === 0) {
                if (e.pre && !t.pre) return -1;
                if (t.pre && !e.pre) return 1
            }
            return r
        };

    function _E(e) {
        cd = !1, za = !0, or.sort(eR);
        const t = cn;
        try {
            for (Sn = 0; Sn < or.length; Sn++) {
                const r = or[Sn];
                r && r.active !== !1 && ci(r, null, 14)
            }
        } finally {
            Sn = 0, or.length = 0, yE(), za = !1, Eh = null, (or.length || Fs.length) && _E()
        }
    }

    function tR(e, t, ...r) {
        if (e.isUnmounted) return;
        const n = e.vnode.props || gt;
        let s = r;
        const o = t.startsWith("update:"),
            l = o && t.slice(7);
        if (l && l in n) {
            const g = `${l==="modelValue"?"model":l}Modifiers`,
                {
                    number: _,
                    trim: E
                } = n[g] || gt;
            E && (s = r.map($ => $.trim())), _ && (s = r.map(Bl))
        }
        let u, f = n[u = ff(t)] || n[u = ff(On(t))];
        !f && o && (f = n[u = ff(os(t))]), f && Jr(f, e, 6, s);
        const h = n[u + "Once"];
        if (h) {
            if (!e.emitted) e.emitted = {};
            else if (e.emitted[u]) return;
            e.emitted[u] = !0, Jr(h, e, 6, s)
        }
    }

    function bE(e, t, r = !1) {
        const n = t.emitsCache,
            s = n.get(e);
        if (s !== void 0) return s;
        const o = e.emits;
        let l = {},
            u = !1;
        if (!He(e)) {
            const f = h => {
                const g = bE(h, t, !0);
                g && (u = !0, rr(l, g))
            };
            !r && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f)
        }
        return !o && !u ? (mt(e) && n.set(e, null), null) : (ke(o) ? o.forEach(f => l[f] = null) : rr(l, o), mt(e) && n.set(e, l), l)
    }

    function pc(e, t) {
        return !e || !lc(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Ze(e, t[0].toLowerCase() + t.slice(1)) || Ze(e, os(t)) || Ze(e, t))
    }
    let lr = null,
        gc = null;

    function jl(e) {
        const t = lr;
        return lr = e, gc = e && e.type.__scopeId || null, t
    }

    function oo(e) {
        gc = e
    }

    function lo() {
        gc = null
    }

    function Sh(e, t = lr, r) {
        if (!t || e._n) return e;
        const n = (...s) => {
            n._d && Dv(-1);
            const o = jl(t),
                l = e(...s);
            return jl(o), n._d && Dv(1), l
        };
        return n._n = !0, n._c = !0, n._d = !0, n
    }

    function df(e) {
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
            renderCache: _,
            data: E,
            setupState: $,
            ctx: R,
            inheritAttrs: M
        } = e;
        let U, C;
        const V = jl(e);
        try {
            if (r.shapeFlag & 4) {
                const W = s || n;
                U = En(g.call(W, W, _, o, $, E, R)), C = f
            } else {
                const W = t;
                U = En(W.length > 1 ? W(o, {
                    attrs: f,
                    slots: u,
                    emit: h
                }) : W(o, null)), C = t.props ? f : rR(f)
            }
        } catch (W) {
            Fa.length = 0, hc(W, e, 1), U = $t(Qr)
        }
        let X = U;
        if (C && M !== !1) {
            const W = Object.keys(C),
                {
                    shapeFlag: j
                } = X;
            W.length && j & 7 && (l && W.some(fh) && (C = nR(C, l)), X = di(X, C))
        }
        return r.dirs && (X = di(X), X.dirs = X.dirs ? X.dirs.concat(r.dirs) : r.dirs), r.transition && (X.transition = r.transition), U = X, jl(V), U
    }
    const rR = e => {
            let t;
            for (const r in e)(r === "class" || r === "style" || lc(r)) && ((t || (t = {}))[r] = e[r]);
            return t
        },
        nR = (e, t) => {
            const r = {};
            for (const n in e)(!fh(n) || !(n.slice(9) in t)) && (r[n] = e[n]);
            return r
        };

    function iR(e, t, r) {
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
            if (f & 16) return n ? $v(n, l, h) : !!l;
            if (f & 8) {
                const g = t.dynamicProps;
                for (let _ = 0; _ < g.length; _++) {
                    const E = g[_];
                    if (l[E] !== n[E] && !pc(h, E)) return !0
                }
            }
        } else return (s || u) && (!u || !u.$stable) ? !0 : n === l ? !1 : n ? l ? $v(n, l, h) : !0 : !!l;
        return !1
    }

    function $v(e, t, r) {
        const n = Object.keys(t);
        if (n.length !== Object.keys(e).length) return !0;
        for (let s = 0; s < n.length; s++) {
            const o = n[s];
            if (t[o] !== e[o] && !pc(r, o)) return !0
        }
        return !1
    }

    function sR({
        vnode: e,
        parent: t
    }, r) {
        for (; t && t.subTree === e;)(e = t.vnode).el = r, t = t.parent
    }
    const aR = e => e.__isSuspense;

    function oR(e, t) {
        t && t.pendingBranch ? ke(e) ? t.effects.push(...e) : t.effects.push(e) : ZP(e)
    }

    function lR(e, t) {
        if (qt) {
            let r = qt.provides;
            const n = qt.parent && qt.parent.provides;
            n === r && (r = qt.provides = Object.create(n)), r[e] = t
        }
    }

    function Qi(e, t, r = !1) {
        const n = qt || lr;
        if (n) {
            const s = n.parent == null ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides;
            if (s && e in s) return s[e];
            if (arguments.length > 1) return r && He(t) ? t.call(n.proxy) : t
        }
    }
    const Cv = {};

    function Zi(e, t, r) {
        return EE(e, t, r)
    }

    function EE(e, t, {
        immediate: r,
        deep: n,
        flush: s,
        onTrack: o,
        onTrigger: l
    } = gt) {
        const u = qt;
        let f, h = !1,
            g = !1;
        if (er(e) ? (f = () => e.value, h = Ul(e)) : Ms(e) ? (f = () => e, n = !0) : ke(e) ? (g = !0, h = e.some(C => Ms(C) || Ul(C)), f = () => e.map(C => {
                if (er(C)) return C.value;
                if (Ms(C)) return Xi(C);
                if (He(C)) return ci(C, u, 2)
            })) : He(e) ? t ? f = () => ci(e, u, 2) : f = () => {
                if (!(u && u.isUnmounted)) return _ && _(), Jr(e, u, 3, [E])
            } : f = cn, t && n) {
            const C = f;
            f = () => Xi(C())
        }
        let _, E = C => {
            _ = U.onStop = () => {
                ci(C, u, 4)
            }
        };
        if (Qa) return E = cn, t ? r && Jr(t, u, 3, [f(), g ? [] : void 0, E]) : f(), cn;
        let $ = g ? [] : Cv;
        const R = () => {
            if (!!U.active)
                if (t) {
                    const C = U.run();
                    (n || h || (g ? C.some((V, X) => qa(V, $[X])) : qa(C, $))) && (_ && _(), Jr(t, u, 3, [C, $ === Cv ? void 0 : $, E]), $ = C)
                } else U.run()
        };
        R.allowRecurse = !!t;
        let M;
        s === "sync" ? M = R : s === "post" ? M = () => Sr(R, u && u.suspense) : (R.pre = !0, u && (R.id = u.uid), M = () => Th(R));
        const U = new gh(f, M);
        return t ? r ? R() : $ = U.run() : s === "post" ? Sr(U.run.bind(U), u && u.suspense) : U.run(), () => {
            U.stop(), u && u.scope && dh(u.scope.effects, U)
        }
    }

    function cR(e, t, r) {
        const n = this.proxy,
            s = Wt(e) ? e.includes(".") ? TE(n, e) : () => n[e] : e.bind(n, n);
        let o;
        He(t) ? o = t : (o = t.handler, r = t);
        const l = qt;
        Ys(this);
        const u = EE(s, o.bind(n), r);
        return l ? Ys(l) : es(), u
    }

    function TE(e, t) {
        const r = t.split(".");
        return () => {
            let n = e;
            for (let s = 0; s < r.length && n; s++) n = n[r[s]];
            return n
        }
    }

    function Xi(e, t) {
        if (!mt(e) || e.__v_skip || (t = t || new Set, t.has(e))) return e;
        if (t.add(e), er(e)) Xi(e.value, t);
        else if (ke(e))
            for (let r = 0; r < e.length; r++) Xi(e[r], t);
        else if (cc(e) || Ds(e)) e.forEach(r => {
            Xi(r, t)
        });
        else if (Xb(e))
            for (const r in e) Xi(e[r], t);
        return e
    }

    function uR() {
        const e = {
            isMounted: !1,
            isLeaving: !1,
            isUnmounting: !1,
            leavingVNodes: new Map
        };
        return Oh(() => {
            e.isMounted = !0
        }), IE(() => {
            e.isUnmounting = !0
        }), e
    }
    const qr = [Function, Array],
        fR = {
            name: "BaseTransition",
            props: {
                mode: String,
                appear: Boolean,
                persisted: Boolean,
                onBeforeEnter: qr,
                onEnter: qr,
                onAfterEnter: qr,
                onEnterCancelled: qr,
                onBeforeLeave: qr,
                onLeave: qr,
                onAfterLeave: qr,
                onLeaveCancelled: qr,
                onBeforeAppear: qr,
                onAppear: qr,
                onAfterAppear: qr,
                onAppearCancelled: qr
            },
            setup(e, {
                slots: t
            }) {
                const r = as(),
                    n = uR();
                let s;
                return () => {
                    const o = t.default && wE(t.default(), !0);
                    if (!o || !o.length) return;
                    let l = o[0];
                    if (o.length > 1) {
                        for (const M of o)
                            if (M.type !== Qr) {
                                l = M;
                                break
                            }
                    }
                    const u = st(e),
                        {
                            mode: f
                        } = u;
                    if (n.isLeaving) return hf(l);
                    const h = Iv(l);
                    if (!h) return hf(l);
                    const g = ud(h, u, n, r);
                    fd(h, g);
                    const _ = r.subTree,
                        E = _ && Iv(_);
                    let $ = !1;
                    const {
                        getTransitionKey: R
                    } = h.type;
                    if (R) {
                        const M = R();
                        s === void 0 ? s = M : M !== s && (s = M, $ = !0)
                    }
                    if (E && E.type !== Qr && (!Ki(h, E) || $)) {
                        const M = ud(E, u, n, r);
                        if (fd(E, M), f === "out-in") return n.isLeaving = !0, M.afterLeave = () => {
                            n.isLeaving = !1, r.update()
                        }, hf(l);
                        f === "in-out" && h.type !== Qr && (M.delayLeave = (U, C, V) => {
                            const X = OE(n, E);
                            X[String(E.key)] = E, U._leaveCb = () => {
                                C(), U._leaveCb = void 0, delete g.delayedLeave
                            }, g.delayedLeave = V
                        })
                    }
                    return l
                }
            }
        },
        SE = fR;

    function OE(e, t) {
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
            onBeforeLeave: _,
            onLeave: E,
            onAfterLeave: $,
            onLeaveCancelled: R,
            onBeforeAppear: M,
            onAppear: U,
            onAfterAppear: C,
            onAppearCancelled: V
        } = t, X = String(e.key), W = OE(r, e), j = (le, ue) => {
            le && Jr(le, n, 9, ue)
        }, Q = (le, ue) => {
            const Ae = ue[1];
            j(le, ue), ke(le) ? le.every(Ce => Ce.length <= 1) && Ae() : le.length <= 1 && Ae()
        }, oe = {
            mode: o,
            persisted: l,
            beforeEnter(le) {
                let ue = u;
                if (!r.isMounted)
                    if (s) ue = M || u;
                    else return;
                le._leaveCb && le._leaveCb(!0);
                const Ae = W[X];
                Ae && Ki(e, Ae) && Ae.el._leaveCb && Ae.el._leaveCb(), j(ue, [le])
            },
            enter(le) {
                let ue = f,
                    Ae = h,
                    Ce = g;
                if (!r.isMounted)
                    if (s) ue = U || f, Ae = C || h, Ce = V || g;
                    else return;
                let fe = !1;
                const $e = le._enterCb = F => {
                    fe || (fe = !0, F ? j(Ce, [le]) : j(Ae, [le]), oe.delayedLeave && oe.delayedLeave(), le._enterCb = void 0)
                };
                ue ? Q(ue, [le, $e]) : $e()
            },
            leave(le, ue) {
                const Ae = String(e.key);
                if (le._enterCb && le._enterCb(!0), r.isUnmounting) return ue();
                j(_, [le]);
                let Ce = !1;
                const fe = le._leaveCb = $e => {
                    Ce || (Ce = !0, ue(), $e ? j(R, [le]) : j($, [le]), le._leaveCb = void 0, W[Ae] === e && delete W[Ae])
                };
                W[Ae] = e, E ? Q(E, [le, fe]) : fe()
            },
            clone(le) {
                return ud(le, t, r, n)
            }
        };
        return oe
    }

    function hf(e) {
        if (mc(e)) return e = di(e), e.children = null, e
    }

    function Iv(e) {
        return mc(e) ? e.children ? e.children[0] : void 0 : e
    }

    function fd(e, t) {
        e.shapeFlag & 6 && e.component ? fd(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
    }

    function wE(e, t = !1, r) {
        let n = [],
            s = 0;
        for (let o = 0; o < e.length; o++) {
            let l = e[o];
            const u = r == null ? l.key : String(r) + String(l.key != null ? l.key : o);
            l.type === ze ? (l.patchFlag & 128 && s++, n = n.concat(wE(l.children, t, u))) : (t || l.type !== Qr) && n.push(u != null ? di(l, {
                key: u
            }) : l)
        }
        if (s > 1)
            for (let o = 0; o < n.length; o++) n[o].patchFlag = -2;
        return n
    }

    function et(e) {
        return He(e) ? {
            setup: e,
            name: e.name
        } : e
    }
    const Ma = e => !!e.type.__asyncLoader,
        mc = e => e.type.__isKeepAlive;

    function dR(e, t) {
        $E(e, "a", t)
    }

    function hR(e, t) {
        $E(e, "da", t)
    }

    function $E(e, t, r = qt) {
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
            for (; s && s.parent;) mc(s.parent.vnode) && pR(n, t, r, s), s = s.parent
        }
    }

    function pR(e, t, r, n) {
        const s = vc(t, e, n, !0);
        wh(() => {
            dh(n[t], s)
        }, r)
    }

    function vc(e, t, r = qt, n = !1) {
        if (r) {
            const s = r[e] || (r[e] = []),
                o = t.__weh || (t.__weh = (...l) => {
                    if (r.isUnmounted) return;
                    ta(), Ys(r);
                    const u = Jr(t, r, e, l);
                    return es(), ra(), u
                });
            return n ? s.unshift(o) : s.push(o), o
        }
    }
    const jn = e => (t, r = qt) => (!Qa || e === "sp") && vc(e, t, r),
        CE = jn("bm"),
        Oh = jn("m"),
        gR = jn("bu"),
        mR = jn("u"),
        IE = jn("bum"),
        wh = jn("um"),
        vR = jn("sp"),
        yR = jn("rtg"),
        _R = jn("rtc");

    function bR(e, t = qt) {
        vc("ec", e, t)
    }

    function Ie(e, t) {
        const r = lr;
        if (r === null) return e;
        const n = bc(r) || r.proxy,
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
            f && (ta(), Jr(f, r, 8, [e.el, u, e, t]), ra())
        }
    }
    const $h = "components",
        ER = "directives";

    function Xr(e, t) {
        return Ih($h, e, !0, t) || e
    }
    const AE = Symbol();

    function Ch(e) {
        return Wt(e) ? Ih($h, e, !1) || e : e || AE
    }

    function Dt(e) {
        return Ih(ER, e)
    }

    function Ih(e, t, r = !0, n = !1) {
        const s = lr || qt;
        if (s) {
            const o = s.type;
            if (e === $h) {
                const u = XR(o, !1);
                if (u && (u === t || u === On(t) || u === fc(On(t)))) return o
            }
            const l = Av(s[e] || o[e], t) || Av(s.appContext[e], t);
            return !l && n ? o : l
        }
    }

    function Av(e, t) {
        return e && (e[t] || e[On(t)] || e[fc(On(t))])
    }

    function wr(e, t, r, n) {
        let s;
        const o = r && r[n];
        if (ke(e) || Wt(e)) {
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

    function TR(e, t, r = {}, n, s) {
        if (lr.isCE || lr.parent && Ma(lr.parent) && lr.parent.isCE) return $t("slot", t === "default" ? null : {
            name: t
        }, n && n());
        let o = e[t];
        o && o._c && (o._d = !1), G();
        const l = o && NE(o(r)),
            u = wn(ze, {
                key: r.key || l && l.key || `_${t}`
            }, l || (n ? n() : []), l && e._ === 1 ? 64 : -2);
        return !s && u.scopeId && (u.slotScopeIds = [u.scopeId + "-s"]), o && o._c && (o._d = !0), u
    }

    function NE(e) {
        return e.some(t => Hl(t) ? !(t.type === Qr || t.type === ze && !NE(t.children)) : !0) ? e : null
    }
    const dd = e => e ? jE(e) ? bc(e) || e.proxy : dd(e.parent) : null,
        Gl = rr(Object.create(null), {
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
            $options: e => Ah(e),
            $forceUpdate: e => e.f || (e.f = () => Th(e.update)),
            $nextTick: e => e.n || (e.n = XP.bind(e.proxy)),
            $watch: e => cR.bind(e)
        }),
        SR = {
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
                    const $ = l[t];
                    if ($ !== void 0) switch ($) {
                        case 1:
                            return n[t];
                        case 2:
                            return s[t];
                        case 4:
                            return r[t];
                        case 3:
                            return o[t]
                    } else {
                        if (n !== gt && Ze(n, t)) return l[t] = 1, n[t];
                        if (s !== gt && Ze(s, t)) return l[t] = 2, s[t];
                        if ((h = e.propsOptions[0]) && Ze(h, t)) return l[t] = 3, o[t];
                        if (r !== gt && Ze(r, t)) return l[t] = 4, r[t];
                        hd && (l[t] = 0)
                    }
                }
                const g = Gl[t];
                let _, E;
                if (g) return t === "$attrs" && xr(e, "get", t), g(e);
                if ((_ = u.__cssModules) && (_ = _[t])) return _;
                if (r !== gt && Ze(r, t)) return l[t] = 4, r[t];
                if (E = f.config.globalProperties, Ze(E, t)) return E[t]
            },
            set({
                _: e
            }, t, r) {
                const {
                    data: n,
                    setupState: s,
                    ctx: o
                } = e;
                return s !== gt && Ze(s, t) ? (s[t] = r, !0) : n !== gt && Ze(n, t) ? (n[t] = r, !0) : Ze(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = r, !0)
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
                return !!r[l] || e !== gt && Ze(e, l) || t !== gt && Ze(t, l) || (u = o[0]) && Ze(u, l) || Ze(n, l) || Ze(Gl, l) || Ze(s.config.globalProperties, l)
            },
            defineProperty(e, t, r) {
                return r.get != null ? e._.accessCache[t] = 0 : Ze(r, "value") && this.set(e, t, r.value, null), Reflect.defineProperty(e, t, r)
            }
        };
    let hd = !0;

    function OR(e) {
        const t = Ah(e),
            r = e.proxy,
            n = e.ctx;
        hd = !1, t.beforeCreate && Nv(t.beforeCreate, e, "bc");
        const {
            data: s,
            computed: o,
            methods: l,
            watch: u,
            provide: f,
            inject: h,
            created: g,
            beforeMount: _,
            mounted: E,
            beforeUpdate: $,
            updated: R,
            activated: M,
            deactivated: U,
            beforeDestroy: C,
            beforeUnmount: V,
            destroyed: X,
            unmounted: W,
            render: j,
            renderTracked: Q,
            renderTriggered: oe,
            errorCaptured: le,
            serverPrefetch: ue,
            expose: Ae,
            inheritAttrs: Ce,
            components: fe,
            directives: $e,
            filters: F
        } = t;
        if (h && wR(h, n, null, e.appContext.config.unwrapInjectedRef), l)
            for (const be in l) {
                const ve = l[be];
                He(ve) && (n[be] = ve.bind(r))
            }
        if (s) {
            const be = s.call(r, r);
            mt(be) && (e.data = Un(be))
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
            for (const be in u) PE(u[be], n, r, be);
        if (f) {
            const be = He(f) ? f.call(r) : f;
            Reflect.ownKeys(be).forEach(ve => {
                lR(ve, be[ve])
            })
        }
        g && Nv(g, e, "c");

        function de(be, ve) {
            ke(ve) ? ve.forEach(Oe => be(Oe.bind(r))) : ve && be(ve.bind(r))
        }
        if (de(CE, _), de(Oh, E), de(gR, $), de(mR, R), de(dR, M), de(hR, U), de(bR, le), de(_R, Q), de(yR, oe), de(IE, V), de(wh, W), de(vR, ue), ke(Ae))
            if (Ae.length) {
                const be = e.exposed || (e.exposed = {});
                Ae.forEach(ve => {
                    Object.defineProperty(be, ve, {
                        get: () => r[ve],
                        set: Oe => r[ve] = Oe
                    })
                })
            } else e.exposed || (e.exposed = {});
        j && e.render === cn && (e.render = j), Ce != null && (e.inheritAttrs = Ce), fe && (e.components = fe), $e && (e.directives = $e)
    }

    function wR(e, t, r = cn, n = !1) {
        ke(e) && (e = pd(e));
        for (const s in e) {
            const o = e[s];
            let l;
            mt(o) ? "default" in o ? l = Qi(o.from || s, o.default, !0) : l = Qi(o.from || s) : l = Qi(o), er(l) && n ? Object.defineProperty(t, s, {
                enumerable: !0,
                configurable: !0,
                get: () => l.value,
                set: u => l.value = u
            }) : t[s] = l
        }
    }

    function Nv(e, t, r) {
        Jr(ke(e) ? e.map(n => n.bind(t.proxy)) : e.bind(t.proxy), t, r)
    }

    function PE(e, t, r, n) {
        const s = n.includes(".") ? TE(r, n) : () => r[n];
        if (Wt(e)) {
            const o = t[e];
            He(o) && Zi(s, o)
        } else if (He(e)) Zi(s, e.bind(r));
        else if (mt(e))
            if (ke(e)) e.forEach(o => PE(o, t, r, n));
            else {
                const o = He(e.handler) ? e.handler.bind(r) : t[e.handler];
                He(o) && Zi(s, o, e)
            }
    }

    function Ah(e) {
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
        return u ? f = u : !s.length && !r && !n ? f = t : (f = {}, s.length && s.forEach(h => Wl(f, h, l, !0)), Wl(f, t, l)), mt(t) && o.set(t, f), f
    }

    function Wl(e, t, r, n = !1) {
        const {
            mixins: s,
            extends: o
        } = t;
        o && Wl(e, o, r, !0), s && s.forEach(l => Wl(e, l, r, !0));
        for (const l in t)
            if (!(n && l === "expose")) {
                const u = $R[l] || r && r[l];
                e[l] = u ? u(e[l], t[l]) : t[l]
            } return e
    }
    const $R = {
        data: Pv,
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
        watch: IR,
        provide: Pv,
        inject: CR
    };

    function Pv(e, t) {
        return t ? e ? function() {
            return rr(He(e) ? e.call(this, this) : e, He(t) ? t.call(this, this) : t)
        } : t : e
    }

    function CR(e, t) {
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
        return e ? rr(rr(Object.create(null), e), t) : t
    }

    function IR(e, t) {
        if (!e) return t;
        if (!t) return e;
        const r = rr(Object.create(null), e);
        for (const n in t) r[n] = gr(e[n], t[n]);
        return r
    }

    function AR(e, t, r, n = !1) {
        const s = {},
            o = {};
        Fl(o, _c, 1), e.propsDefaults = Object.create(null), RE(e, t, s, o);
        for (const l in e.propsOptions[0]) l in s || (s[l] = void 0);
        r ? e.props = n ? s : GP(s) : e.type.props ? e.props = s : e.props = o, e.attrs = o
    }

    function NR(e, t, r, n) {
        const {
            props: s,
            attrs: o,
            vnode: {
                patchFlag: l
            }
        } = e, u = st(s), [f] = e.propsOptions;
        let h = !1;
        if ((n || l > 0) && !(l & 16)) {
            if (l & 8) {
                const g = e.vnode.dynamicProps;
                for (let _ = 0; _ < g.length; _++) {
                    let E = g[_];
                    if (pc(e.emitsOptions, E)) continue;
                    const $ = t[E];
                    if (f)
                        if (Ze(o, E)) $ !== o[E] && (o[E] = $, h = !0);
                        else {
                            const R = On(E);
                            s[R] = gd(f, u, R, $, e, !1)
                        }
                    else $ !== o[E] && (o[E] = $, h = !0)
                }
            }
        } else {
            RE(e, t, s, o) && (h = !0);
            let g;
            for (const _ in u)(!t || !Ze(t, _) && ((g = os(_)) === _ || !Ze(t, g))) && (f ? r && (r[_] !== void 0 || r[g] !== void 0) && (s[_] = gd(f, u, _, void 0, e, !0)) : delete s[_]);
            if (o !== u)
                for (const _ in o)(!t || !Ze(t, _) && !0) && (delete o[_], h = !0)
        }
        h && Bn(e, "set", "$attrs")
    }

    function RE(e, t, r, n) {
        const [s, o] = e.propsOptions;
        let l = !1,
            u;
        if (t)
            for (let f in t) {
                if (Nl(f)) continue;
                const h = t[f];
                let g;
                s && Ze(s, g = On(f)) ? !o || !o.includes(g) ? r[g] = h : (u || (u = {}))[g] = h : pc(e.emitsOptions, f) || (!(f in n) || h !== n[f]) && (n[f] = h, l = !0)
            }
        if (o) {
            const f = st(r),
                h = u || gt;
            for (let g = 0; g < o.length; g++) {
                const _ = o[g];
                r[_] = gd(s, f, _, h[_], e, !Ze(h, _))
            }
        }
        return l
    }

    function gd(e, t, r, n, s, o) {
        const l = e[r];
        if (l != null) {
            const u = Ze(l, "default");
            if (u && n === void 0) {
                const f = l.default;
                if (l.type !== Function && He(f)) {
                    const {
                        propsDefaults: h
                    } = s;
                    r in h ? n = h[r] : (Ys(s), n = h[r] = f.call(null, t), es())
                } else n = f
            }
            l[0] && (o && !u ? n = !1 : l[1] && (n === "" || n === os(r)) && (n = !0))
        }
        return n
    }

    function LE(e, t, r = !1) {
        const n = t.propsCache,
            s = n.get(e);
        if (s) return s;
        const o = e.props,
            l = {},
            u = [];
        let f = !1;
        if (!He(e)) {
            const g = _ => {
                f = !0;
                const [E, $] = LE(_, t, !0);
                rr(l, E), $ && u.push(...$)
            };
            !r && t.mixins.length && t.mixins.forEach(g), e.extends && g(e.extends), e.mixins && e.mixins.forEach(g)
        }
        if (!o && !f) return mt(e) && n.set(e, xs), xs;
        if (ke(o))
            for (let g = 0; g < o.length; g++) {
                const _ = On(o[g]);
                Rv(_) && (l[_] = gt)
            } else if (o)
                for (const g in o) {
                    const _ = On(g);
                    if (Rv(_)) {
                        const E = o[g],
                            $ = l[_] = ke(E) || He(E) ? {
                                type: E
                            } : E;
                        if ($) {
                            const R = xv(Boolean, $.type),
                                M = xv(String, $.type);
                            $[0] = R > -1, $[1] = M < 0 || R < M, (R > -1 || Ze($, "default")) && u.push(_)
                        }
                    }
                }
        const h = [l, u];
        return mt(e) && n.set(e, h), h
    }

    function Rv(e) {
        return e[0] !== "$"
    }

    function Lv(e) {
        const t = e && e.toString().match(/^\s*function (\w+)/);
        return t ? t[1] : e === null ? "null" : ""
    }

    function kv(e, t) {
        return Lv(e) === Lv(t)
    }

    function xv(e, t) {
        return ke(t) ? t.findIndex(r => kv(r, e)) : He(t) && kv(t, e) ? 0 : -1
    }
    const kE = e => e[0] === "_" || e === "$stable",
        Nh = e => ke(e) ? e.map(En) : [En(e)],
        PR = (e, t, r) => {
            if (t._n) return t;
            const n = Sh((...s) => Nh(t(...s)), r);
            return n._c = !1, n
        },
        xE = (e, t, r) => {
            const n = e._ctx;
            for (const s in e) {
                if (kE(s)) continue;
                const o = e[s];
                if (He(o)) t[s] = PR(s, o, n);
                else if (o != null) {
                    const l = Nh(o);
                    t[s] = () => l
                }
            }
        },
        DE = (e, t) => {
            const r = Nh(t);
            e.slots.default = () => r
        },
        RR = (e, t) => {
            if (e.vnode.shapeFlag & 32) {
                const r = t._;
                r ? (e.slots = st(t), Fl(t, "_", r)) : xE(t, e.slots = {})
            } else e.slots = {}, t && DE(e, t);
            Fl(e.slots, _c, 1)
        },
        LR = (e, t, r) => {
            const {
                vnode: n,
                slots: s
            } = e;
            let o = !0,
                l = gt;
            if (n.shapeFlag & 32) {
                const u = t._;
                u ? r && u === 1 ? o = !1 : (rr(s, t), !r && u === 1 && delete s._) : (o = !t.$stable, xE(t, s)), l = t
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
                isNativeTag: lP,
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
    let kR = 0;

    function xR(e, t) {
        return function(n, s = null) {
            He(n) || (n = Object.assign({}, n)), s != null && !mt(s) && (s = null);
            const o = ME(),
                l = new Set;
            let u = !1;
            const f = o.app = {
                _uid: kR++,
                _component: n,
                _props: s,
                _container: null,
                _context: o,
                _instance: null,
                version: QR,
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
                mount(h, g, _) {
                    if (!u) {
                        const E = $t(n, s);
                        return E.appContext = o, g && t ? t(E, h) : e(E, h, _), u = !0, f._container = h, h.__vue_app__ = f, bc(E.component) || E.component.proxy
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
            e.forEach((E, $) => md(E, t && (ke(t) ? t[$] : t), r, n, s));
            return
        }
        if (Ma(n) && !s) return;
        const o = n.shapeFlag & 4 ? bc(n.component) || n.component.proxy : n.el,
            l = s ? null : o,
            {
                i: u,
                r: f
            } = e,
            h = t && t.r,
            g = u.refs === gt ? u.refs = {} : u.refs,
            _ = u.setupState;
        if (h != null && h !== f && (Wt(h) ? (g[h] = null, Ze(_, h) && (_[h] = null)) : er(h) && (h.value = null)), He(f)) ci(f, u, 12, [l, g]);
        else {
            const E = Wt(f),
                $ = er(f);
            if (E || $) {
                const R = () => {
                    if (e.f) {
                        const M = E ? g[f] : f.value;
                        s ? ke(M) && dh(M, o) : ke(M) ? M.includes(o) || M.push(o) : E ? (g[f] = [o], Ze(_, f) && (_[f] = g[f])) : (f.value = [o], e.k && (g[e.k] = f.value))
                    } else E ? (g[f] = l, Ze(_, f) && (_[f] = l)) : $ && (f.value = l, e.k && (g[e.k] = l))
                };
                l ? (R.id = -1, Sr(R, r)) : R()
            }
        }
    }
    const Sr = oR;

    function DR(e) {
        return MR(e)
    }

    function MR(e, t) {
        const r = pP();
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
            parentNode: _,
            nextSibling: E,
            setScopeId: $ = cn,
            cloneNode: R,
            insertStaticContent: M
        } = e, U = (m, p, O, D = null, B = null, z = null, ce = !1, se = null, re = !!p.dynamicChildren) => {
            if (m === p) return;
            m && !Ki(m, p) && (D = St(m), It(m, B, z, !0), m = null), p.patchFlag === -2 && (re = !1, p.dynamicChildren = null);
            const {
                type: A,
                ref: K,
                shapeFlag: he
            } = p;
            switch (A) {
                case yc:
                    C(m, p, O, D);
                    break;
                case Qr:
                    V(m, p, O, D);
                    break;
                case pf:
                    m == null && X(p, O, D, ce);
                    break;
                case ze:
                    $e(m, p, O, D, B, z, ce, se, re);
                    break;
                default:
                    he & 1 ? Q(m, p, O, D, B, z, ce, se, re) : he & 6 ? F(m, p, O, D, B, z, ce, se, re) : (he & 64 || he & 128) && A.process(m, p, O, D, B, z, ce, se, re, kt)
            }
            K != null && B && md(K, m && m.ref, z, p || m, !p)
        }, C = (m, p, O, D) => {
            if (m == null) n(p.el = u(p.children), O, D);
            else {
                const B = p.el = m.el;
                p.children !== m.children && h(B, p.children)
            }
        }, V = (m, p, O, D) => {
            m == null ? n(p.el = f(p.children || ""), O, D) : p.el = m.el
        }, X = (m, p, O, D) => {
            [m.el, m.anchor] = M(m.children, p, O, D, m.el, m.anchor)
        }, W = ({
            el: m,
            anchor: p
        }, O, D) => {
            let B;
            for (; m && m !== p;) B = E(m), n(m, O, D), m = B;
            n(p, O, D)
        }, j = ({
            el: m,
            anchor: p
        }) => {
            let O;
            for (; m && m !== p;) O = E(m), s(m), m = O;
            s(p)
        }, Q = (m, p, O, D, B, z, ce, se, re) => {
            ce = ce || p.type === "svg", m == null ? oe(p, O, D, B, z, ce, se, re) : Ae(m, p, B, z, ce, se, re)
        }, oe = (m, p, O, D, B, z, ce, se) => {
            let re, A;
            const {
                type: K,
                props: he,
                shapeFlag: pe,
                transition: Ne,
                patchFlag: De,
                dirs: w
            } = m;
            if (m.el && R !== void 0 && De === -1) re = m.el = R(m.el);
            else {
                if (re = m.el = l(m.type, z, he && he.is, he), pe & 8 ? g(re, m.children) : pe & 16 && ue(m.children, re, null, D, B, z && K !== "foreignObject", ce, se), w && ki(m, null, D, "created"), he) {
                    for (const P in he) P !== "value" && !Nl(P) && o(re, P, null, he[P], z, m.children, D, B, at);
                    "value" in he && o(re, "value", null, he.value), (A = he.onVnodeBeforeMount) && mn(A, D, m)
                }
                le(re, m, m.scopeId, ce, D)
            }
            w && ki(m, null, D, "beforeMount");
            const T = (!B || B && !B.pendingBranch) && Ne && !Ne.persisted;
            T && Ne.beforeEnter(re), n(re, p, O), ((A = he && he.onVnodeMounted) || T || w) && Sr(() => {
                A && mn(A, D, m), T && Ne.enter(re), w && ki(m, null, D, "mounted")
            }, B)
        }, le = (m, p, O, D, B) => {
            if (O && $(m, O), D)
                for (let z = 0; z < D.length; z++) $(m, D[z]);
            if (B) {
                let z = B.subTree;
                if (p === z) {
                    const ce = B.vnode;
                    le(m, ce, ce.scopeId, ce.slotScopeIds, B.parent)
                }
            }
        }, ue = (m, p, O, D, B, z, ce, se, re = 0) => {
            for (let A = re; A < m.length; A++) {
                const K = m[A] = se ? ni(m[A]) : En(m[A]);
                U(null, K, p, O, D, B, z, ce, se)
            }
        }, Ae = (m, p, O, D, B, z, ce) => {
            const se = p.el = m.el;
            let {
                patchFlag: re,
                dynamicChildren: A,
                dirs: K
            } = p;
            re |= m.patchFlag & 16;
            const he = m.props || gt,
                pe = p.props || gt;
            let Ne;
            O && xi(O, !1), (Ne = pe.onVnodeBeforeUpdate) && mn(Ne, O, p, m), K && ki(p, m, O, "beforeUpdate"), O && xi(O, !0);
            const De = B && p.type !== "foreignObject";
            if (A ? Ce(m.dynamicChildren, A, se, O, D, De, z) : ce || Oe(m, p, se, null, O, D, De, z, !1), re > 0) {
                if (re & 16) fe(se, p, he, pe, O, D, B);
                else if (re & 2 && he.class !== pe.class && o(se, "class", null, pe.class, B), re & 4 && o(se, "style", he.style, pe.style, B), re & 8) {
                    const w = p.dynamicProps;
                    for (let T = 0; T < w.length; T++) {
                        const P = w[T],
                            S = he[P],
                            L = pe[P];
                        (L !== S || P === "value") && o(se, P, S, L, B, m.children, O, D, at)
                    }
                }
                re & 1 && m.children !== p.children && g(se, p.children)
            } else !ce && A == null && fe(se, p, he, pe, O, D, B);
            ((Ne = pe.onVnodeUpdated) || K) && Sr(() => {
                Ne && mn(Ne, O, p, m), K && ki(p, m, O, "updated")
            }, D)
        }, Ce = (m, p, O, D, B, z, ce) => {
            for (let se = 0; se < p.length; se++) {
                const re = m[se],
                    A = p[se],
                    K = re.el && (re.type === ze || !Ki(re, A) || re.shapeFlag & 70) ? _(re.el) : O;
                U(re, A, K, null, D, B, z, ce, !0)
            }
        }, fe = (m, p, O, D, B, z, ce) => {
            if (O !== D) {
                for (const se in D) {
                    if (Nl(se)) continue;
                    const re = D[se],
                        A = O[se];
                    re !== A && se !== "value" && o(m, se, A, re, ce, p.children, B, z, at)
                }
                if (O !== gt)
                    for (const se in O) !Nl(se) && !(se in D) && o(m, se, O[se], null, ce, p.children, B, z, at);
                "value" in D && o(m, "value", O.value, D.value)
            }
        }, $e = (m, p, O, D, B, z, ce, se, re) => {
            const A = p.el = m ? m.el : u(""),
                K = p.anchor = m ? m.anchor : u("");
            let {
                patchFlag: he,
                dynamicChildren: pe,
                slotScopeIds: Ne
            } = p;
            Ne && (se = se ? se.concat(Ne) : Ne), m == null ? (n(A, O, D), n(K, O, D), ue(p.children, O, K, B, z, ce, se, re)) : he > 0 && he & 64 && pe && m.dynamicChildren ? (Ce(m.dynamicChildren, pe, O, B, z, ce, se), (p.key != null || B && p === B.subTree) && FE(m, p, !0)) : Oe(m, p, O, K, B, z, ce, se, re)
        }, F = (m, p, O, D, B, z, ce, se, re) => {
            p.slotScopeIds = se, m == null ? p.shapeFlag & 512 ? B.ctx.activate(p, O, D, ce, re) : ie(p, O, D, B, z, ce, re) : de(m, p, re)
        }, ie = (m, p, O, D, B, z, ce) => {
            const se = m.component = KR(m, D, B);
            if (mc(m) && (se.ctx.renderer = kt), VR(se), se.asyncDep) {
                if (B && B.registerDep(se, be), !m.el) {
                    const re = se.subTree = $t(Qr);
                    V(null, re, p, O)
                }
                return
            }
            be(se, m, p, O, B, z, ce)
        }, de = (m, p, O) => {
            const D = p.component = m.component;
            if (iR(m, p, O))
                if (D.asyncDep && !D.asyncResolved) {
                    ve(D, p, O);
                    return
                } else D.next = p, QP(D.update), D.update();
            else p.el = m.el, D.vnode = p
        }, be = (m, p, O, D, B, z, ce) => {
            const se = () => {
                    if (m.isMounted) {
                        let {
                            next: K,
                            bu: he,
                            u: pe,
                            parent: Ne,
                            vnode: De
                        } = m, w = K, T;
                        xi(m, !1), K ? (K.el = De.el, ve(m, K, ce)) : K = De, he && Pl(he), (T = K.props && K.props.onVnodeBeforeUpdate) && mn(T, Ne, K, De), xi(m, !0);
                        const P = df(m),
                            S = m.subTree;
                        m.subTree = P, U(S, P, _(S.el), St(S), m, B, z), K.el = P.el, w === null && sR(m, P.el), pe && Sr(pe, B), (T = K.props && K.props.onVnodeUpdated) && Sr(() => mn(T, Ne, K, De), B)
                    } else {
                        let K;
                        const {
                            el: he,
                            props: pe
                        } = p, {
                            bm: Ne,
                            m: De,
                            parent: w
                        } = m, T = Ma(p);
                        if (xi(m, !1), Ne && Pl(Ne), !T && (K = pe && pe.onVnodeBeforeMount) && mn(K, w, p), xi(m, !0), he && xt) {
                            const P = () => {
                                m.subTree = df(m), xt(he, m.subTree, m, B, null)
                            };
                            T ? p.type.__asyncLoader().then(() => !m.isUnmounted && P()) : P()
                        } else {
                            const P = m.subTree = df(m);
                            U(null, P, O, D, m, B, z), p.el = P.el
                        }
                        if (De && Sr(De, B), !T && (K = pe && pe.onVnodeMounted)) {
                            const P = p;
                            Sr(() => mn(K, w, P), B)
                        }(p.shapeFlag & 256 || w && Ma(w.vnode) && w.vnode.shapeFlag & 256) && m.a && Sr(m.a, B), m.isMounted = !0, p = O = D = null
                    }
                },
                re = m.effect = new gh(se, () => Th(A), m.scope),
                A = m.update = () => re.run();
            A.id = m.uid, xi(m, !0), A()
        }, ve = (m, p, O) => {
            p.component = m;
            const D = m.vnode.props;
            m.vnode = p, m.next = null, NR(m, p.props, D, O), LR(m, p.children, O), ta(), wv(), ra()
        }, Oe = (m, p, O, D, B, z, ce, se, re = !1) => {
            const A = m && m.children,
                K = m ? m.shapeFlag : 0,
                he = p.children,
                {
                    patchFlag: pe,
                    shapeFlag: Ne
                } = p;
            if (pe > 0) {
                if (pe & 128) {
                    Ge(A, he, O, D, B, z, ce, se, re);
                    return
                } else if (pe & 256) {
                    Fe(A, he, O, D, B, z, ce, se, re);
                    return
                }
            }
            Ne & 8 ? (K & 16 && at(A, B, z), he !== A && g(O, he)) : K & 16 ? Ne & 16 ? Ge(A, he, O, D, B, z, ce, se, re) : at(A, B, z, !0) : (K & 8 && g(O, ""), Ne & 16 && ue(he, O, D, B, z, ce, se, re))
        }, Fe = (m, p, O, D, B, z, ce, se, re) => {
            m = m || xs, p = p || xs;
            const A = m.length,
                K = p.length,
                he = Math.min(A, K);
            let pe;
            for (pe = 0; pe < he; pe++) {
                const Ne = p[pe] = re ? ni(p[pe]) : En(p[pe]);
                U(m[pe], Ne, O, null, B, z, ce, se, re)
            }
            A > K ? at(m, B, z, !0, !1, he) : ue(p, O, D, B, z, ce, se, re, he)
        }, Ge = (m, p, O, D, B, z, ce, se, re) => {
            let A = 0;
            const K = p.length;
            let he = m.length - 1,
                pe = K - 1;
            for (; A <= he && A <= pe;) {
                const Ne = m[A],
                    De = p[A] = re ? ni(p[A]) : En(p[A]);
                if (Ki(Ne, De)) U(Ne, De, O, null, B, z, ce, se, re);
                else break;
                A++
            }
            for (; A <= he && A <= pe;) {
                const Ne = m[he],
                    De = p[pe] = re ? ni(p[pe]) : En(p[pe]);
                if (Ki(Ne, De)) U(Ne, De, O, null, B, z, ce, se, re);
                else break;
                he--, pe--
            }
            if (A > he) {
                if (A <= pe) {
                    const Ne = pe + 1,
                        De = Ne < K ? p[Ne].el : D;
                    for (; A <= pe;) U(null, p[A] = re ? ni(p[A]) : En(p[A]), O, De, B, z, ce, se, re), A++
                }
            } else if (A > pe)
                for (; A <= he;) It(m[A], B, z, !0), A++;
            else {
                const Ne = A,
                    De = A,
                    w = new Map;
                for (A = De; A <= pe; A++) {
                    const Te = p[A] = re ? ni(p[A]) : En(p[A]);
                    Te.key != null && w.set(Te.key, A)
                }
                let T, P = 0;
                const S = pe - De + 1;
                let L = !1,
                    Z = 0;
                const ne = new Array(S);
                for (A = 0; A < S; A++) ne[A] = 0;
                for (A = Ne; A <= he; A++) {
                    const Te = m[A];
                    if (P >= S) {
                        It(Te, B, z, !0);
                        continue
                    }
                    let ft;
                    if (Te.key != null) ft = w.get(Te.key);
                    else
                        for (T = De; T <= pe; T++)
                            if (ne[T - De] === 0 && Ki(Te, p[T])) {
                                ft = T;
                                break
                            } ft === void 0 ? It(Te, B, z, !0) : (ne[ft - De] = A + 1, ft >= Z ? Z = ft : L = !0, U(Te, p[ft], O, null, B, z, ce, se, re), P++)
                }
                const _e = L ? FR(ne) : xs;
                for (T = _e.length - 1, A = S - 1; A >= 0; A--) {
                    const Te = De + A,
                        ft = p[Te],
                        ir = Te + 1 < K ? p[Te + 1].el : D;
                    ne[A] === 0 ? U(null, ft, O, ir, B, z, ce, se, re) : L && (T < 0 || A !== _e[T] ? tt(ft, O, ir, 2) : T--)
                }
            }
        }, tt = (m, p, O, D, B = null) => {
            const {
                el: z,
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
                ce.move(m, p, O, kt);
                return
            }
            if (ce === ze) {
                n(z, p, O);
                for (let he = 0; he < re.length; he++) tt(re[he], p, O, D);
                n(m.anchor, p, O);
                return
            }
            if (ce === pf) {
                W(m, p, O);
                return
            }
            if (D !== 2 && A & 1 && se)
                if (D === 0) se.beforeEnter(z), n(z, p, O), Sr(() => se.enter(z), B);
                else {
                    const {
                        leave: he,
                        delayLeave: pe,
                        afterLeave: Ne
                    } = se, De = () => n(z, p, O), w = () => {
                        he(z, () => {
                            De(), Ne && Ne()
                        })
                    };
                    pe ? pe(z, De, w) : w()
                }
            else n(z, p, O)
        }, It = (m, p, O, D = !1, B = !1) => {
            const {
                type: z,
                props: ce,
                ref: se,
                children: re,
                dynamicChildren: A,
                shapeFlag: K,
                patchFlag: he,
                dirs: pe
            } = m;
            if (se != null && md(se, null, O, m, !0), K & 256) {
                p.ctx.deactivate(m);
                return
            }
            const Ne = K & 1 && pe,
                De = !Ma(m);
            let w;
            if (De && (w = ce && ce.onVnodeBeforeUnmount) && mn(w, p, m), K & 6) vr(m.component, O, D);
            else {
                if (K & 128) {
                    m.suspense.unmount(O, D);
                    return
                }
                Ne && ki(m, null, p, "beforeUnmount"), K & 64 ? m.type.remove(m, p, O, B, kt, D) : A && (z !== ze || he > 0 && he & 64) ? at(A, p, O, !1, !0) : (z === ze && he & 384 || !B && K & 16) && at(re, p, O), D && Cr(m)
            }(De && (w = ce && ce.onVnodeUnmounted) || Ne) && Sr(() => {
                w && mn(w, p, m), Ne && ki(m, null, p, "unmounted")
            }, O)
        }, Cr = m => {
            const {
                type: p,
                el: O,
                anchor: D,
                transition: B
            } = m;
            if (p === ze) {
                nr(O, D);
                return
            }
            if (p === pf) {
                j(m);
                return
            }
            const z = () => {
                s(O), B && !B.persisted && B.afterLeave && B.afterLeave()
            };
            if (m.shapeFlag & 1 && B && !B.persisted) {
                const {
                    leave: ce,
                    delayLeave: se
                } = B, re = () => ce(O, z);
                se ? se(m.el, z, re) : re()
            } else z()
        }, nr = (m, p) => {
            let O;
            for (; m !== p;) O = E(m), s(m), m = O;
            s(p)
        }, vr = (m, p, O) => {
            const {
                bum: D,
                scope: B,
                update: z,
                subTree: ce,
                um: se
            } = m;
            D && Pl(D), B.stop(), z && (z.active = !1, It(ce, m, p, O)), se && Sr(se, p), Sr(() => {
                m.isUnmounted = !0
            }, p), p && p.pendingBranch && !p.isUnmounted && m.asyncDep && !m.asyncResolved && m.suspenseId === p.pendingId && (p.deps--, p.deps === 0 && p.resolve())
        }, at = (m, p, O, D = !1, B = !1, z = 0) => {
            for (let ce = z; ce < m.length; ce++) It(m[ce], p, O, D, B)
        }, St = m => m.shapeFlag & 6 ? St(m.component.subTree) : m.shapeFlag & 128 ? m.suspense.next() : E(m.anchor || m.el), ot = (m, p, O) => {
            m == null ? p._vnode && It(p._vnode, null, null, !0) : U(p._vnode || null, m, p, null, null, null, O), wv(), yE(), p._vnode = m
        }, kt = {
            p: U,
            um: It,
            m: tt,
            r: Cr,
            mt: ie,
            mc: ue,
            pc: Oe,
            pbc: Ce,
            n: St,
            o: e
        };
        let Ht, xt;
        return t && ([Ht, xt] = t(kt)), {
            render: ot,
            hydrate: Ht,
            createApp: xR(ot, Ht)
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

    function FR(e) {
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
    const BR = e => e.__isTeleport,
        ze = Symbol(void 0),
        yc = Symbol(void 0),
        Qr = Symbol(void 0),
        pf = Symbol(void 0),
        Fa = [];
    let ln = null;

    function G(e = !1) {
        Fa.push(ln = e ? null : [])
    }

    function UR() {
        Fa.pop(), ln = Fa[Fa.length - 1] || null
    }
    let Ja = 1;

    function Dv(e) {
        Ja += e
    }

    function BE(e) {
        return e.dynamicChildren = Ja > 0 ? ln || xs : null, UR(), Ja > 0 && ln && ln.push(e), e
    }

    function Y(e, t, r, n, s, o) {
        return BE(H(e, t, r, n, s, o, !0))
    }

    function wn(e, t, r, n, s) {
        return BE($t(e, t, r, n, s, !0))
    }

    function Hl(e) {
        return e ? e.__v_isVNode === !0 : !1
    }

    function Ki(e, t) {
        return e.type === t.type && e.key === t.key
    }
    const _c = "__vInternal",
        UE = ({
            key: e
        }) => e != null ? e : null,
        Rl = ({
            ref: e,
            ref_key: t,
            ref_for: r
        }) => e != null ? Wt(e) || er(e) || He(e) ? {
            i: lr,
            r: e,
            k: t,
            f: !!r
        } : e : null;

    function H(e, t = null, r = null, n = 0, s = null, o = e === ze ? 0 : 1, l = !1, u = !1) {
        const f = {
            __v_isVNode: !0,
            __v_skip: !0,
            type: e,
            props: t,
            key: t && UE(t),
            ref: t && Rl(t),
            scopeId: gc,
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
        return u ? (Ph(f, r), o & 128 && e.normalize(f)) : r && (f.shapeFlag |= Wt(r) ? 8 : 16), Ja > 0 && !l && ln && (f.patchFlag > 0 || o & 6) && f.patchFlag !== 32 && ln.push(f), f
    }
    const $t = jR;

    function jR(e, t = null, r = null, n = 0, s = null, o = !1) {
        if ((!e || e === AE) && (e = Qr), Hl(e)) {
            const u = di(e, t, !0);
            return r && Ph(u, r), Ja > 0 && !o && ln && (u.shapeFlag & 6 ? ln[ln.indexOf(e)] = u : ln.push(u)), u.patchFlag |= -2, u
        }
        if (JR(e) && (e = e.__vccOpts), t) {
            t = GR(t);
            let {
                class: u,
                style: f
            } = t;
            u && !Wt(u) && (t.class = xe(u)), mt(f) && (cE(f) && !ke(f) && (f = rr({}, f)), t.style = ac(f))
        }
        const l = Wt(e) ? 1 : aR(e) ? 128 : BR(e) ? 64 : mt(e) ? 4 : He(e) ? 2 : 0;
        return H(e, t, r, n, s, l, o, !0)
    }

    function GR(e) {
        return e ? cE(e) || _c in e ? rr({}, e) : e : null
    }

    function di(e, t, r = !1) {
        const {
            props: n,
            ref: s,
            patchFlag: o,
            children: l
        } = e, u = t ? co(n || {}, t) : n;
        return {
            __v_isVNode: !0,
            __v_skip: !0,
            type: e.type,
            props: u,
            key: u && UE(u),
            ref: t && t.ref ? r && s ? ke(s) ? s.concat(Rl(t)) : [s, Rl(t)] : Rl(t) : s,
            scopeId: e.scopeId,
            slotScopeIds: e.slotScopeIds,
            children: l,
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
            ssContent: e.ssContent && di(e.ssContent),
            ssFallback: e.ssFallback && di(e.ssFallback),
            el: e.el,
            anchor: e.anchor
        }
    }

    function hi(e = " ", t = 0) {
        return $t(yc, null, e, t)
    }

    function Se(e = "", t = !1) {
        return t ? (G(), wn(Qr, null, e)) : $t(Qr, null, e)
    }

    function En(e) {
        return e == null || typeof e == "boolean" ? $t(Qr) : ke(e) ? $t(ze, null, e.slice()) : typeof e == "object" ? ni(e) : $t(yc, null, String(e))
    }

    function ni(e) {
        return e.el === null || e.memo ? e : di(e)
    }

    function Ph(e, t) {
        let r = 0;
        const {
            shapeFlag: n
        } = e;
        if (t == null) t = null;
        else if (ke(t)) r = 16;
        else if (typeof t == "object")
            if (n & 65) {
                const s = t.default;
                s && (s._c && (s._d = !1), Ph(e, s()), s._c && (s._d = !0));
                return
            } else {
                r = 32;
                const s = t._;
                !s && !(_c in t) ? t._ctx = lr : s === 3 && lr && (lr.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024))
            }
        else He(t) ? (t = {
            default: t,
            _ctx: lr
        }, r = 32) : (t = String(t), n & 64 ? (r = 16, t = [hi(t)]) : r = 8);
        e.children = t, e.shapeFlag |= r
    }

    function co(...e) {
        const t = {};
        for (let r = 0; r < e.length; r++) {
            const n = e[r];
            for (const s in n)
                if (s === "class") t.class !== n.class && (t.class = xe([t.class, n.class]));
                else if (s === "style") t.style = ac([t.style, n.style]);
            else if (lc(s)) {
                const o = t[s],
                    l = n[s];
                l && o !== l && !(ke(o) && o.includes(l)) && (t[s] = o ? [].concat(o, l) : l)
            } else s !== "" && (t[s] = n[s])
        }
        return t
    }

    function mn(e, t, r, n = null) {
        Jr(e, t, 7, [r, n])
    }
    const WR = ME();
    let HR = 0;

    function KR(e, t, r) {
        const n = e.type,
            s = (t ? t.appContext : e.appContext) || WR,
            o = {
                uid: HR++,
                vnode: e,
                type: n,
                parent: t,
                appContext: s,
                root: null,
                next: null,
                subTree: null,
                effect: null,
                update: null,
                scope: new Jb(!0),
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
                propsOptions: LE(n, s),
                emitsOptions: bE(n, s),
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
        }, o.root = t ? t.root : o, o.emit = tR.bind(null, o), e.ce && e.ce(o), o
    }
    let qt = null;
    const as = () => qt || lr,
        Ys = e => {
            qt = e, e.scope.on()
        },
        es = () => {
            qt && qt.scope.off(), qt = null
        };

    function jE(e) {
        return e.vnode.shapeFlag & 4
    }
    let Qa = !1;

    function VR(e, t = !1) {
        Qa = t;
        const {
            props: r,
            children: n
        } = e.vnode, s = jE(e);
        AR(e, r, s, t), RR(e, n);
        const o = s ? qR(e, t) : void 0;
        return Qa = !1, o
    }

    function qR(e, t) {
        const r = e.type;
        e.accessCache = Object.create(null), e.proxy = uE(new Proxy(e.ctx, SR));
        const {
            setup: n
        } = r;
        if (n) {
            const s = e.setupContext = n.length > 1 ? zR(e) : null;
            Ys(e), ta();
            const o = ci(n, e, 0, [e.props, s]);
            if (ra(), es(), Yb(o)) {
                if (o.then(es, es), t) return o.then(l => {
                    Mv(e, l, t)
                }).catch(l => {
                    hc(l, e, 0)
                });
                e.asyncDep = o
            } else Mv(e, o, t)
        } else GE(e, t)
    }

    function Mv(e, t, r) {
        He(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : mt(t) && (e.setupState = pE(t)), GE(e, r)
    }
    let Fv;

    function GE(e, t, r) {
        const n = e.type;
        if (!e.render) {
            if (!t && Fv && !n.render) {
                const s = n.template || Ah(e).template;
                if (s) {
                    const {
                        isCustomElement: o,
                        compilerOptions: l
                    } = e.appContext.config, {
                        delimiters: u,
                        compilerOptions: f
                    } = n, h = rr(rr({
                        isCustomElement: o,
                        delimiters: u
                    }, l), f);
                    n.render = Fv(s, h)
                }
            }
            e.render = n.render || cn
        }
        Ys(e), ta(), OR(e), ra(), es()
    }

    function YR(e) {
        return new Proxy(e.attrs, {
            get(t, r) {
                return xr(e, "get", "$attrs"), t[r]
            }
        })
    }

    function zR(e) {
        const t = n => {
            e.exposed = n || {}
        };
        let r;
        return {
            get attrs() {
                return r || (r = YR(e))
            },
            slots: e.slots,
            emit: e.emit,
            expose: t
        }
    }

    function bc(e) {
        if (e.exposed) return e.exposeProxy || (e.exposeProxy = new Proxy(pE(uE(e.exposed)), {
            get(t, r) {
                if (r in t) return t[r];
                if (r in Gl) return Gl[r](e)
            }
        }))
    }

    function XR(e, t = !0) {
        return He(e) ? e.displayName || e.name : e.name || t && e.__name
    }

    function JR(e) {
        return He(e) && "__vccOpts" in e
    }
    const kr = (e, t) => YP(e, t, Qa);

    function Rh(e, t, r) {
        const n = arguments.length;
        return n === 2 ? mt(t) && !ke(t) ? Hl(t) ? $t(e, null, [t]) : $t(e, t) : $t(e, null, t) : (n > 3 ? r = Array.prototype.slice.call(arguments, 2) : n === 3 && Hl(r) && (r = [r]), $t(e, t, r))
    }
    const QR = "3.2.39",
        ZR = "http://www.w3.org/2000/svg",
        Vi = typeof document < "u" ? document : null,
        Bv = Vi && Vi.createElement("template"),
        eL = {
            insert: (e, t, r) => {
                t.insertBefore(e, r || null)
            },
            remove: e => {
                const t = e.parentNode;
                t && t.removeChild(e)
            },
            createElement: (e, t, r, n) => {
                const s = t ? Vi.createElementNS(ZR, e) : Vi.createElement(e, r ? {
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
                const l = r ? r.previousSibling : t.lastChild;
                if (s && (s === o || s.nextSibling))
                    for (; t.insertBefore(s.cloneNode(!0), r), !(s === o || !(s = s.nextSibling)););
                else {
                    Bv.innerHTML = n ? `<svg>${e}</svg>` : e;
                    const u = Bv.content;
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

    function tL(e, t, r) {
        const n = e._vtc;
        n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : r ? e.setAttribute("class", t) : e.className = t
    }

    function rL(e, t, r) {
        const n = e.style,
            s = Wt(r);
        if (r && !s) {
            for (const o in r) vd(n, o, r[o]);
            if (t && !Wt(t))
                for (const o in t) r[o] == null && vd(n, o, "")
        } else {
            const o = n.display;
            s ? t !== r && (n.cssText = r) : t && e.removeAttribute("style"), "_vod" in e && (n.display = o)
        }
    }
    const Uv = /\s*!important$/;

    function vd(e, t, r) {
        if (ke(r)) r.forEach(n => vd(e, t, n));
        else if (r == null && (r = ""), t.startsWith("--")) e.setProperty(t, r);
        else {
            const n = nL(e, t);
            Uv.test(r) ? e.setProperty(os(n), r.replace(Uv, ""), "important") : e[n] = r
        }
    }
    const jv = ["Webkit", "Moz", "ms"],
        gf = {};

    function nL(e, t) {
        const r = gf[t];
        if (r) return r;
        let n = On(t);
        if (n !== "filter" && n in e) return gf[t] = n;
        n = fc(n);
        for (let s = 0; s < jv.length; s++) {
            const o = jv[s] + n;
            if (o in e) return gf[t] = o
        }
        return t
    }
    const Gv = "http://www.w3.org/1999/xlink";

    function iL(e, t, r, n, s) {
        if (n && t.startsWith("xlink:")) r == null ? e.removeAttributeNS(Gv, t.slice(6, t.length)) : e.setAttributeNS(Gv, t, r);
        else {
            const o = nP(t);
            r == null || o && !Kb(r) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : r)
        }
    }

    function sL(e, t, r, n, s, o, l) {
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
            f === "boolean" ? r = Kb(r) : r == null && f === "string" ? (r = "", u = !0) : f === "number" && (r = 0, u = !0)
        }
        try {
            e[t] = r
        } catch {}
        u && e.removeAttribute(t)
    }
    const [WE, aL] = (() => {
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
    const oL = Promise.resolve(),
        lL = () => {
            yd = 0
        },
        cL = () => yd || (oL.then(lL), yd = WE());

    function qi(e, t, r, n) {
        e.addEventListener(t, r, n)
    }

    function uL(e, t, r, n) {
        e.removeEventListener(t, r, n)
    }

    function fL(e, t, r, n, s = null) {
        const o = e._vei || (e._vei = {}),
            l = o[t];
        if (n && l) l.value = n;
        else {
            const [u, f] = dL(t);
            if (n) {
                const h = o[t] = hL(n, s);
                qi(e, u, h, f)
            } else l && (uL(e, u, l, f), o[t] = void 0)
        }
    }
    const Wv = /(?:Once|Passive|Capture)$/;

    function dL(e) {
        let t;
        if (Wv.test(e)) {
            t = {};
            let n;
            for (; n = e.match(Wv);) e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0
        }
        return [e[2] === ":" ? e.slice(3) : os(e.slice(2)), t]
    }

    function hL(e, t) {
        const r = n => {
            const s = n.timeStamp || WE();
            (aL || s >= r.attached - 1) && Jr(pL(n, r.value), t, 5, [n])
        };
        return r.value = e, r.attached = cL(), r
    }

    function pL(e, t) {
        if (ke(t)) {
            const r = e.stopImmediatePropagation;
            return e.stopImmediatePropagation = () => {
                r.call(e), e._stopped = !0
            }, t.map(n => s => !s._stopped && n && n(s))
        } else return t
    }
    const Hv = /^on[a-z]/,
        gL = (e, t, r, n, s = !1, o, l, u, f) => {
            t === "class" ? tL(e, n, s) : t === "style" ? rL(e, r, n) : lc(t) ? fh(t) || fL(e, t, r, n, l) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : mL(e, t, n, s)) ? sL(e, t, n, o, l, u, f) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), iL(e, t, n, s))
        };

    function mL(e, t, r, n) {
        return n ? !!(t === "innerHTML" || t === "textContent" || t in e && Hv.test(t) && He(r)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || Hv.test(t) && Wt(r) ? !1 : t in e
    }
    const Zn = "transition",
        Ia = "animation",
        Ec = (e, {
            slots: t
        }) => Rh(SE, vL(e), t);
    Ec.displayName = "Transition";
    const HE = {
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
    Ec.props = rr({}, SE.props, HE);
    const Di = (e, t = []) => {
            ke(e) ? e.forEach(r => r(...t)) : e && e(...t)
        },
        Kv = e => e ? ke(e) ? e.some(t => t.length > 1) : e.length > 1 : !1;

    function vL(e) {
        const t = {};
        for (const fe in e) fe in HE || (t[fe] = e[fe]);
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
            leaveFromClass: _ = `${r}-leave-from`,
            leaveActiveClass: E = `${r}-leave-active`,
            leaveToClass: $ = `${r}-leave-to`
        } = e, R = yL(s), M = R && R[0], U = R && R[1], {
            onBeforeEnter: C,
            onEnter: V,
            onEnterCancelled: X,
            onLeave: W,
            onLeaveCancelled: j,
            onBeforeAppear: Q = C,
            onAppear: oe = V,
            onAppearCancelled: le = X
        } = t, ue = (fe, $e, F) => {
            Mi(fe, $e ? g : u), Mi(fe, $e ? h : l), F && F()
        }, Ae = (fe, $e) => {
            fe._isLeaving = !1, Mi(fe, _), Mi(fe, $), Mi(fe, E), $e && $e()
        }, Ce = fe => ($e, F) => {
            const ie = fe ? oe : V,
                de = () => ue($e, fe, F);
            Di(ie, [$e, de]), Vv(() => {
                Mi($e, fe ? f : o), ei($e, fe ? g : u), Kv(ie) || qv($e, n, M, de)
            })
        };
        return rr(t, {
            onBeforeEnter(fe) {
                Di(C, [fe]), ei(fe, o), ei(fe, l)
            },
            onBeforeAppear(fe) {
                Di(Q, [fe]), ei(fe, f), ei(fe, h)
            },
            onEnter: Ce(!1),
            onAppear: Ce(!0),
            onLeave(fe, $e) {
                fe._isLeaving = !0;
                const F = () => Ae(fe, $e);
                ei(fe, _), EL(), ei(fe, E), Vv(() => {
                    !fe._isLeaving || (Mi(fe, _), ei(fe, $), Kv(W) || qv(fe, n, U, F))
                }), Di(W, [fe, F])
            },
            onEnterCancelled(fe) {
                ue(fe, !1), Di(X, [fe])
            },
            onAppearCancelled(fe) {
                ue(fe, !0), Di(le, [fe])
            },
            onLeaveCancelled(fe) {
                Ae(fe), Di(j, [fe])
            }
        })
    }

    function yL(e) {
        if (e == null) return null;
        if (mt(e)) return [mf(e.enter), mf(e.leave)]; {
            const t = mf(e);
            return [t, t]
        }
    }

    function mf(e) {
        return Bl(e)
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

    function Vv(e) {
        requestAnimationFrame(() => {
            requestAnimationFrame(e)
        })
    }
    let _L = 0;

    function qv(e, t, r, n) {
        const s = e._endId = ++_L,
            o = () => {
                s === e._endId && n()
            };
        if (r) return setTimeout(o, r);
        const {
            type: l,
            timeout: u,
            propCount: f
        } = bL(e, t);
        if (!l) return n();
        const h = l + "end";
        let g = 0;
        const _ = () => {
                e.removeEventListener(h, E), o()
            },
            E = $ => {
                $.target === e && ++g >= f && _()
            };
        setTimeout(() => {
            g < f && _()
        }, u + 1), e.addEventListener(h, E)
    }

    function bL(e, t) {
        const r = window.getComputedStyle(e),
            n = R => (r[R] || "").split(", "),
            s = n(Zn + "Delay"),
            o = n(Zn + "Duration"),
            l = Yv(s, o),
            u = n(Ia + "Delay"),
            f = n(Ia + "Duration"),
            h = Yv(u, f);
        let g = null,
            _ = 0,
            E = 0;
        t === Zn ? l > 0 && (g = Zn, _ = l, E = o.length) : t === Ia ? h > 0 && (g = Ia, _ = h, E = f.length) : (_ = Math.max(l, h), g = _ > 0 ? l > h ? Zn : Ia : null, E = g ? g === Zn ? o.length : f.length : 0);
        const $ = g === Zn && /\b(transform|all)(,|$)/.test(r[Zn + "Property"]);
        return {
            type: g,
            timeout: _,
            propCount: E,
            hasTransform: $
        }
    }

    function Yv(e, t) {
        for (; e.length < t.length;) e = e.concat(e);
        return Math.max(...t.map((r, n) => zv(r) + zv(e[n])))
    }

    function zv(e) {
        return Number(e.slice(0, -1).replace(",", ".")) * 1e3
    }

    function EL() {
        return document.body.offsetHeight
    }
    const Kl = e => {
        const t = e.props["onUpdate:modelValue"] || !1;
        return ke(t) ? r => Pl(t, r) : t
    };

    function TL(e) {
        e.target.composing = !0
    }

    function Xv(e) {
        const t = e.target;
        t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")))
    }
    const _d = {
            created(e, {
                modifiers: {
                    lazy: t,
                    trim: r,
                    number: n
                }
            }, s) {
                e._assign = Kl(s);
                const o = n || s.props && s.props.type === "number";
                qi(e, t ? "change" : "input", l => {
                    if (l.target.composing) return;
                    let u = e.value;
                    r && (u = u.trim()), o && (u = Bl(u)), e._assign(u)
                }), r && qi(e, "change", () => {
                    e.value = e.value.trim()
                }), t || (qi(e, "compositionstart", TL), qi(e, "compositionend", Xv), qi(e, "change", Xv))
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
                if (e._assign = Kl(o), e.composing || document.activeElement === e && e.type !== "range" && (r || n && e.value.trim() === t || (s || e.type === "number") && Bl(e.value) === t)) return;
                const l = t == null ? "" : t;
                e.value !== l && (e.value = l)
            }
        },
        SL = {
            deep: !0,
            created(e, t, r) {
                e._assign = Kl(r), qi(e, "change", () => {
                    const n = e._modelValue,
                        s = OL(e),
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
                    } else if (cc(n)) {
                        const u = new Set(n);
                        o ? u.add(s) : u.delete(s), l(u)
                    } else l(KE(e, o))
                })
            },
            mounted: Jv,
            beforeUpdate(e, t, r) {
                e._assign = Kl(r), Jv(e, t, r)
            }
        };

    function Jv(e, {
        value: t,
        oldValue: r
    }, n) {
        e._modelValue = t, ke(t) ? e.checked = Vb(t, n.props.value) > -1 : cc(t) ? e.checked = t.has(n.props.value) : t !== r && (e.checked = oc(t, KE(e, !0)))
    }

    function OL(e) {
        return "_value" in e ? e._value : e.value
    }

    function KE(e, t) {
        const r = t ? "_trueValue" : "_falseValue";
        return r in e ? e[r] : t
    }
    const wL = ["ctrl", "shift", "alt", "meta"],
        $L = {
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
            exact: (e, t) => wL.some(r => e[`${r}Key`] && !t.includes(r))
        },
        zt = (e, t) => (r, ...n) => {
            for (let s = 0; s < t.length; s++) {
                const o = $L[t[s]];
                if (o && o(r, t)) return
            }
            return e(r, ...n)
        },
        CL = {
            esc: "escape",
            space: " ",
            up: "arrow-up",
            left: "arrow-left",
            right: "arrow-right",
            down: "arrow-down",
            delete: "backspace"
        },
        Tc = (e, t) => r => {
            if (!("key" in r)) return;
            const n = os(r.key);
            if (t.some(s => s === n || CL[s] === n)) return e(r)
        },
        VE = {
            beforeMount(e, {
                value: t
            }, {
                transition: r
            }) {
                e._vod = e.style.display === "none" ? "" : e.style.display, r && t ? r.beforeEnter(e) : Aa(e, t)
            },
            mounted(e, {
                value: t
            }, {
                transition: r
            }) {
                r && t && r.enter(e)
            },
            updated(e, {
                value: t,
                oldValue: r
            }, {
                transition: n
            }) {
                !t != !r && (n ? t ? (n.beforeEnter(e), Aa(e, !0), n.enter(e)) : n.leave(e, () => {
                    Aa(e, !1)
                }) : Aa(e, t))
            },
            beforeUnmount(e, {
                value: t
            }) {
                Aa(e, t)
            }
        };

    function Aa(e, t) {
        e.style.display = t ? e._vod : "none"
    }
    const IL = rr({
        patchProp: gL
    }, eL);
    let Qv;

    function AL() {
        return Qv || (Qv = DR(IL))
    }
    const NL = (...e) => {
        const t = AL().createApp(...e),
            {
                mount: r
            } = t;
        return t.mount = n => {
            const s = PL(n);
            if (!s) return;
            const o = t._component;
            !He(o) && !o.render && !o.template && (o.template = s.innerHTML), s.innerHTML = "";
            const l = r(s, !1, s instanceof SVGElement);
            return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), l
        }, t
    };

    function PL(e) {
        return Wt(e) ? document.querySelector(e) : e
    }
    const RL = et({
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
        ct = (e, t) => {
            const r = e.__vccOpts || e;
            for (const [n, s] of t) r[n] = s;
            return r
        },
        LL = {
            class: "choices"
        },
        kL = {
            class: "constrain"
        },
        xL = {
            key: 0
        },
        DL = ["disabled", "onClick"];

    function ML(e, t, r, n, s, o) {
        const l = Dt("bb");
        return G(), Y("div", LL, [H("div", kL, [e.player.prompt ? Ie((G(), Y("p", xL, null, 512)), [
            [l, e.player.prompt]
        ]) : Se("", !0), (G(!0), Y(ze, null, wr(e.player.choices, (u, f) => (G(), Y("button", {
            key: f,
            class: xe({
                selected: u.isSelected
            }),
            disabled: u.isDisabled,
            onClick: zt(h => e.onChoiceClick(f), ["prevent"])
        }, nt(u.text), 11, DL))), 128))])])
    }
    const FL = ct(RL, [
        ["render", ML]
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
    var Lt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

    function BL(e) {
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

    function UL() {
        this.__data__ = [], this.size = 0
    }
    var jL = UL;

    function GL(e, t) {
        return e === t || e !== e && t !== t
    }
    var Sc = GL,
        WL = Sc;

    function HL(e, t) {
        for (var r = e.length; r--;)
            if (WL(e[r][0], t)) return r;
        return -1
    }
    var Oc = HL,
        KL = Oc,
        VL = Array.prototype,
        qL = VL.splice;

    function YL(e) {
        var t = this.__data__,
            r = KL(t, e);
        if (r < 0) return !1;
        var n = t.length - 1;
        return r == n ? t.pop() : qL.call(t, r, 1), --this.size, !0
    }
    var zL = YL,
        XL = Oc;

    function JL(e) {
        var t = this.__data__,
            r = XL(t, e);
        return r < 0 ? void 0 : t[r][1]
    }
    var QL = JL,
        ZL = Oc;

    function ek(e) {
        return ZL(this.__data__, e) > -1
    }
    var tk = ek,
        rk = Oc;

    function nk(e, t) {
        var r = this.__data__,
            n = rk(r, e);
        return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this
    }
    var ik = nk,
        sk = jL,
        ak = zL,
        ok = QL,
        lk = tk,
        ck = ik;

    function na(e) {
        var t = -1,
            r = e == null ? 0 : e.length;
        for (this.clear(); ++t < r;) {
            var n = e[t];
            this.set(n[0], n[1])
        }
    }
    na.prototype.clear = sk;
    na.prototype.delete = ak;
    na.prototype.get = ok;
    na.prototype.has = lk;
    na.prototype.set = ck;
    var wc = na,
        uk = wc;

    function fk() {
        this.__data__ = new uk, this.size = 0
    }
    var dk = fk;

    function hk(e) {
        var t = this.__data__,
            r = t.delete(e);
        return this.size = t.size, r
    }
    var pk = hk;

    function gk(e) {
        return this.__data__.get(e)
    }
    var mk = gk;

    function vk(e) {
        return this.__data__.has(e)
    }
    var yk = vk,
        _k = typeof Lt == "object" && Lt && Lt.Object === Object && Lt,
        qE = _k,
        bk = qE,
        Ek = typeof self == "object" && self && self.Object === Object && self,
        Tk = bk || Ek || Function("return this")(),
        fn = Tk,
        Sk = fn,
        Ok = Sk.Symbol,
        $c = Ok,
        Zv = $c,
        YE = Object.prototype,
        wk = YE.hasOwnProperty,
        $k = YE.toString,
        Na = Zv ? Zv.toStringTag : void 0;

    function Ck(e) {
        var t = wk.call(e, Na),
            r = e[Na];
        try {
            e[Na] = void 0;
            var n = !0
        } catch {}
        var s = $k.call(e);
        return n && (t ? e[Na] = r : delete e[Na]), s
    }
    var Ik = Ck,
        Ak = Object.prototype,
        Nk = Ak.toString;

    function Pk(e) {
        return Nk.call(e)
    }
    var Rk = Pk,
        ey = $c,
        Lk = Ik,
        kk = Rk,
        xk = "[object Null]",
        Dk = "[object Undefined]",
        ty = ey ? ey.toStringTag : void 0;

    function Mk(e) {
        return e == null ? e === void 0 ? Dk : xk : ty && ty in Object(e) ? Lk(e) : kk(e)
    }
    var ia = Mk;

    function Fk(e) {
        var t = typeof e;
        return e != null && (t == "object" || t == "function")
    }
    var dn = Fk,
        Bk = ia,
        Uk = dn,
        jk = "[object AsyncFunction]",
        Gk = "[object Function]",
        Wk = "[object GeneratorFunction]",
        Hk = "[object Proxy]";

    function Kk(e) {
        if (!Uk(e)) return !1;
        var t = Bk(e);
        return t == Gk || t == Wk || t == jk || t == Hk
    }
    var Lh = Kk,
        Vk = fn,
        qk = Vk["__core-js_shared__"],
        Yk = qk,
        vf = Yk,
        ry = function() {
            var e = /[^.]+$/.exec(vf && vf.keys && vf.keys.IE_PROTO || "");
            return e ? "Symbol(src)_1." + e : ""
        }();

    function zk(e) {
        return !!ry && ry in e
    }
    var Xk = zk,
        Jk = Function.prototype,
        Qk = Jk.toString;

    function Zk(e) {
        if (e != null) {
            try {
                return Qk.call(e)
            } catch {}
            try {
                return e + ""
            } catch {}
        }
        return ""
    }
    var zE = Zk,
        ex = Lh,
        tx = Xk,
        rx = dn,
        nx = zE,
        ix = /[\\^$.*+?()[\]{}|]/g,
        sx = /^\[object .+?Constructor\]$/,
        ax = Function.prototype,
        ox = Object.prototype,
        lx = ax.toString,
        cx = ox.hasOwnProperty,
        ux = RegExp("^" + lx.call(cx).replace(ix, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

    function fx(e) {
        if (!rx(e) || tx(e)) return !1;
        var t = ex(e) ? ux : sx;
        return t.test(nx(e))
    }
    var dx = fx;

    function hx(e, t) {
        return e == null ? void 0 : e[t]
    }
    var px = hx,
        gx = dx,
        mx = px;

    function vx(e, t) {
        var r = mx(e, t);
        return gx(r) ? r : void 0
    }
    var ls = vx,
        yx = ls,
        _x = fn,
        bx = yx(_x, "Map"),
        kh = bx,
        Ex = ls,
        Tx = Ex(Object, "create"),
        Cc = Tx,
        ny = Cc;

    function Sx() {
        this.__data__ = ny ? ny(null) : {}, this.size = 0
    }
    var Ox = Sx;

    function wx(e) {
        var t = this.has(e) && delete this.__data__[e];
        return this.size -= t ? 1 : 0, t
    }
    var $x = wx,
        Cx = Cc,
        Ix = "__lodash_hash_undefined__",
        Ax = Object.prototype,
        Nx = Ax.hasOwnProperty;

    function Px(e) {
        var t = this.__data__;
        if (Cx) {
            var r = t[e];
            return r === Ix ? void 0 : r
        }
        return Nx.call(t, e) ? t[e] : void 0
    }
    var Rx = Px,
        Lx = Cc,
        kx = Object.prototype,
        xx = kx.hasOwnProperty;

    function Dx(e) {
        var t = this.__data__;
        return Lx ? t[e] !== void 0 : xx.call(t, e)
    }
    var Mx = Dx,
        Fx = Cc,
        Bx = "__lodash_hash_undefined__";

    function Ux(e, t) {
        var r = this.__data__;
        return this.size += this.has(e) ? 0 : 1, r[e] = Fx && t === void 0 ? Bx : t, this
    }
    var jx = Ux,
        Gx = Ox,
        Wx = $x,
        Hx = Rx,
        Kx = Mx,
        Vx = jx;

    function sa(e) {
        var t = -1,
            r = e == null ? 0 : e.length;
        for (this.clear(); ++t < r;) {
            var n = e[t];
            this.set(n[0], n[1])
        }
    }
    sa.prototype.clear = Gx;
    sa.prototype.delete = Wx;
    sa.prototype.get = Hx;
    sa.prototype.has = Kx;
    sa.prototype.set = Vx;
    var qx = sa,
        iy = qx,
        Yx = wc,
        zx = kh;

    function Xx() {
        this.size = 0, this.__data__ = {
            hash: new iy,
            map: new(zx || Yx),
            string: new iy
        }
    }
    var Jx = Xx;

    function Qx(e) {
        var t = typeof e;
        return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
    }
    var Zx = Qx,
        eD = Zx;

    function tD(e, t) {
        var r = e.__data__;
        return eD(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map
    }
    var Ic = tD,
        rD = Ic;

    function nD(e) {
        var t = rD(this, e).delete(e);
        return this.size -= t ? 1 : 0, t
    }
    var iD = nD,
        sD = Ic;

    function aD(e) {
        return sD(this, e).get(e)
    }
    var oD = aD,
        lD = Ic;

    function cD(e) {
        return lD(this, e).has(e)
    }
    var uD = cD,
        fD = Ic;

    function dD(e, t) {
        var r = fD(this, e),
            n = r.size;
        return r.set(e, t), this.size += r.size == n ? 0 : 1, this
    }
    var hD = dD,
        pD = Jx,
        gD = iD,
        mD = oD,
        vD = uD,
        yD = hD;

    function aa(e) {
        var t = -1,
            r = e == null ? 0 : e.length;
        for (this.clear(); ++t < r;) {
            var n = e[t];
            this.set(n[0], n[1])
        }
    }
    aa.prototype.clear = pD;
    aa.prototype.delete = gD;
    aa.prototype.get = mD;
    aa.prototype.has = vD;
    aa.prototype.set = yD;
    var XE = aa,
        _D = wc,
        bD = kh,
        ED = XE,
        TD = 200;

    function SD(e, t) {
        var r = this.__data__;
        if (r instanceof _D) {
            var n = r.__data__;
            if (!bD || n.length < TD - 1) return n.push([e, t]), this.size = ++r.size, this;
            r = this.__data__ = new ED(n)
        }
        return r.set(e, t), this.size = r.size, this
    }
    var OD = SD,
        wD = wc,
        $D = dk,
        CD = pk,
        ID = mk,
        AD = yk,
        ND = OD;

    function oa(e) {
        var t = this.__data__ = new wD(e);
        this.size = t.size
    }
    oa.prototype.clear = $D;
    oa.prototype.delete = CD;
    oa.prototype.get = ID;
    oa.prototype.has = AD;
    oa.prototype.set = ND;
    var JE = oa,
        PD = ls,
        RD = function() {
            try {
                var e = PD(Object, "defineProperty");
                return e({}, "", {}), e
            } catch {}
        }(),
        QE = RD,
        sy = QE;

    function LD(e, t, r) {
        t == "__proto__" && sy ? sy(e, t, {
            configurable: !0,
            enumerable: !0,
            value: r,
            writable: !0
        }) : e[t] = r
    }
    var xh = LD,
        kD = xh,
        xD = Sc;

    function DD(e, t, r) {
        (r !== void 0 && !xD(e[t], r) || r === void 0 && !(t in e)) && kD(e, t, r)
    }
    var ZE = DD;

    function MD(e) {
        return function(t, r, n) {
            for (var s = -1, o = Object(t), l = n(t), u = l.length; u--;) {
                var f = l[e ? u : ++s];
                if (r(o[f], f, o) === !1) break
            }
            return t
        }
    }
    var FD = MD,
        BD = FD,
        UD = BD(),
        jD = UD,
        ql = {
            exports: {}
        };
    (function(e, t) {
        var r = fn,
            n = t && !t.nodeType && t,
            s = n && !0 && e && !e.nodeType && e,
            o = s && s.exports === n,
            l = o ? r.Buffer : void 0,
            u = l ? l.allocUnsafe : void 0;

        function f(h, g) {
            if (g) return h.slice();
            var _ = h.length,
                E = u ? u(_) : new h.constructor(_);
            return h.copy(E), E
        }
        e.exports = f
    })(ql, ql.exports);
    var GD = fn,
        WD = GD.Uint8Array,
        HD = WD,
        ay = HD;

    function KD(e) {
        var t = new e.constructor(e.byteLength);
        return new ay(t).set(new ay(e)), t
    }
    var Dh = KD,
        VD = Dh;

    function qD(e, t) {
        var r = t ? VD(e.buffer) : e.buffer;
        return new e.constructor(r, e.byteOffset, e.length)
    }
    var eT = qD;

    function YD(e, t) {
        var r = -1,
            n = e.length;
        for (t || (t = Array(n)); ++r < n;) t[r] = e[r];
        return t
    }
    var tT = YD,
        zD = dn,
        oy = Object.create,
        XD = function() {
            function e() {}
            return function(t) {
                if (!zD(t)) return {};
                if (oy) return oy(t);
                e.prototype = t;
                var r = new e;
                return e.prototype = void 0, r
            }
        }(),
        JD = XD;

    function QD(e, t) {
        return function(r) {
            return e(t(r))
        }
    }
    var rT = QD,
        ZD = rT,
        eM = ZD(Object.getPrototypeOf, Object),
        Mh = eM,
        tM = Object.prototype;

    function rM(e) {
        var t = e && e.constructor,
            r = typeof t == "function" && t.prototype || tM;
        return e === r
    }
    var Fh = rM,
        nM = JD,
        iM = Mh,
        sM = Fh;

    function aM(e) {
        return typeof e.constructor == "function" && !sM(e) ? nM(iM(e)) : {}
    }
    var nT = aM;

    function oM(e) {
        return e != null && typeof e == "object"
    }
    var mi = oM,
        lM = ia,
        cM = mi,
        uM = "[object Arguments]";

    function fM(e) {
        return cM(e) && lM(e) == uM
    }
    var dM = fM,
        ly = dM,
        hM = mi,
        iT = Object.prototype,
        pM = iT.hasOwnProperty,
        gM = iT.propertyIsEnumerable,
        mM = ly(function() {
            return arguments
        }()) ? ly : function(e) {
            return hM(e) && pM.call(e, "callee") && !gM.call(e, "callee")
        },
        sT = mM,
        vM = Array.isArray,
        vi = vM,
        yM = 9007199254740991;

    function _M(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= yM
    }
    var aT = _M,
        bM = Lh,
        EM = aT;

    function TM(e) {
        return e != null && EM(e.length) && !bM(e)
    }
    var Ac = TM,
        SM = Ac,
        OM = mi;

    function wM(e) {
        return OM(e) && SM(e)
    }
    var $M = wM,
        Za = {
            exports: {}
        };

    function CM() {
        return !1
    }
    var IM = CM;
    (function(e, t) {
        var r = fn,
            n = IM,
            s = t && !t.nodeType && t,
            o = s && !0 && e && !e.nodeType && e,
            l = o && o.exports === s,
            u = l ? r.Buffer : void 0,
            f = u ? u.isBuffer : void 0,
            h = f || n;
        e.exports = h
    })(Za, Za.exports);
    var AM = ia,
        NM = Mh,
        PM = mi,
        RM = "[object Object]",
        LM = Function.prototype,
        kM = Object.prototype,
        oT = LM.toString,
        xM = kM.hasOwnProperty,
        DM = oT.call(Object);

    function MM(e) {
        if (!PM(e) || AM(e) != RM) return !1;
        var t = NM(e);
        if (t === null) return !0;
        var r = xM.call(t, "constructor") && t.constructor;
        return typeof r == "function" && r instanceof r && oT.call(r) == DM
    }
    var FM = MM,
        BM = ia,
        UM = aT,
        jM = mi,
        GM = "[object Arguments]",
        WM = "[object Array]",
        HM = "[object Boolean]",
        KM = "[object Date]",
        VM = "[object Error]",
        qM = "[object Function]",
        YM = "[object Map]",
        zM = "[object Number]",
        XM = "[object Object]",
        JM = "[object RegExp]",
        QM = "[object Set]",
        ZM = "[object String]",
        e2 = "[object WeakMap]",
        t2 = "[object ArrayBuffer]",
        r2 = "[object DataView]",
        n2 = "[object Float32Array]",
        i2 = "[object Float64Array]",
        s2 = "[object Int8Array]",
        a2 = "[object Int16Array]",
        o2 = "[object Int32Array]",
        l2 = "[object Uint8Array]",
        c2 = "[object Uint8ClampedArray]",
        u2 = "[object Uint16Array]",
        f2 = "[object Uint32Array]",
        Tt = {};
    Tt[n2] = Tt[i2] = Tt[s2] = Tt[a2] = Tt[o2] = Tt[l2] = Tt[c2] = Tt[u2] = Tt[f2] = !0;
    Tt[GM] = Tt[WM] = Tt[t2] = Tt[HM] = Tt[r2] = Tt[KM] = Tt[VM] = Tt[qM] = Tt[YM] = Tt[zM] = Tt[XM] = Tt[JM] = Tt[QM] = Tt[ZM] = Tt[e2] = !1;

    function d2(e) {
        return jM(e) && UM(e.length) && !!Tt[BM(e)]
    }
    var h2 = d2;

    function p2(e) {
        return function(t) {
            return e(t)
        }
    }
    var Bh = p2,
        eo = {
            exports: {}
        };
    (function(e, t) {
        var r = qE,
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
    })(eo, eo.exports);
    var g2 = h2,
        m2 = Bh,
        cy = eo.exports,
        uy = cy && cy.isTypedArray,
        v2 = uy ? m2(uy) : g2,
        lT = v2;

    function y2(e, t) {
        if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__") return e[t]
    }
    var cT = y2,
        _2 = xh,
        b2 = Sc,
        E2 = Object.prototype,
        T2 = E2.hasOwnProperty;

    function S2(e, t, r) {
        var n = e[t];
        (!(T2.call(e, t) && b2(n, r)) || r === void 0 && !(t in e)) && _2(e, t, r)
    }
    var Uh = S2,
        O2 = Uh,
        w2 = xh;

    function $2(e, t, r, n) {
        var s = !r;
        r || (r = {});
        for (var o = -1, l = t.length; ++o < l;) {
            var u = t[o],
                f = n ? n(r[u], e[u], u, r, e) : void 0;
            f === void 0 && (f = e[u]), s ? w2(r, u, f) : O2(r, u, f)
        }
        return r
    }
    var uo = $2;

    function C2(e, t) {
        for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
        return n
    }
    var I2 = C2,
        A2 = 9007199254740991,
        N2 = /^(?:0|[1-9]\d*)$/;

    function P2(e, t) {
        var r = typeof e;
        return t = t == null ? A2 : t, !!t && (r == "number" || r != "symbol" && N2.test(e)) && e > -1 && e % 1 == 0 && e < t
    }
    var jh = P2,
        R2 = I2,
        L2 = sT,
        k2 = vi,
        x2 = Za.exports,
        D2 = jh,
        M2 = lT,
        F2 = Object.prototype,
        B2 = F2.hasOwnProperty;

    function U2(e, t) {
        var r = k2(e),
            n = !r && L2(e),
            s = !r && !n && x2(e),
            o = !r && !n && !s && M2(e),
            l = r || n || s || o,
            u = l ? R2(e.length, String) : [],
            f = u.length;
        for (var h in e)(t || B2.call(e, h)) && !(l && (h == "length" || s && (h == "offset" || h == "parent") || o && (h == "buffer" || h == "byteLength" || h == "byteOffset") || D2(h, f))) && u.push(h);
        return u
    }
    var uT = U2;

    function j2(e) {
        var t = [];
        if (e != null)
            for (var r in Object(e)) t.push(r);
        return t
    }
    var G2 = j2,
        W2 = dn,
        H2 = Fh,
        K2 = G2,
        V2 = Object.prototype,
        q2 = V2.hasOwnProperty;

    function Y2(e) {
        if (!W2(e)) return K2(e);
        var t = H2(e),
            r = [];
        for (var n in e) n == "constructor" && (t || !q2.call(e, n)) || r.push(n);
        return r
    }
    var z2 = Y2,
        X2 = uT,
        J2 = z2,
        Q2 = Ac;

    function Z2(e) {
        return Q2(e) ? X2(e, !0) : J2(e)
    }
    var fo = Z2,
        eF = uo,
        tF = fo;

    function rF(e) {
        return eF(e, tF(e))
    }
    var nF = rF,
        fy = ZE,
        iF = ql.exports,
        sF = eT,
        aF = tT,
        oF = nT,
        dy = sT,
        hy = vi,
        lF = $M,
        cF = Za.exports,
        uF = Lh,
        fF = dn,
        dF = FM,
        hF = lT,
        py = cT,
        pF = nF;

    function gF(e, t, r, n, s, o, l) {
        var u = py(e, r),
            f = py(t, r),
            h = l.get(f);
        if (h) {
            fy(e, r, h);
            return
        }
        var g = o ? o(u, f, r + "", e, t, l) : void 0,
            _ = g === void 0;
        if (_) {
            var E = hy(f),
                $ = !E && cF(f),
                R = !E && !$ && hF(f);
            g = f, E || $ || R ? hy(u) ? g = u : lF(u) ? g = aF(u) : $ ? (_ = !1, g = iF(f, !0)) : R ? (_ = !1, g = sF(f, !0)) : g = [] : dF(f) || dy(f) ? (g = u, dy(u) ? g = pF(u) : (!fF(u) || uF(u)) && (g = oF(f))) : _ = !1
        }
        _ && (l.set(f, g), s(g, f, n, o, l), l.delete(f)), fy(e, r, g)
    }
    var mF = gF,
        vF = JE,
        yF = ZE,
        _F = jD,
        bF = mF,
        EF = dn,
        TF = fo,
        SF = cT;

    function fT(e, t, r, n, s) {
        e !== t && _F(t, function(o, l) {
            if (s || (s = new vF), EF(o)) bF(e, t, l, r, fT, n, s);
            else {
                var u = n ? n(SF(e, l), o, l + "", e, t, s) : void 0;
                u === void 0 && (u = o), yF(e, l, u)
            }
        }, TF)
    }
    var OF = fT;

    function wF(e) {
        return e
    }
    var dT = wF;

    function $F(e, t, r) {
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
    var CF = $F,
        IF = CF,
        gy = Math.max;

    function AF(e, t, r) {
        return t = gy(t === void 0 ? e.length - 1 : t, 0),
            function() {
                for (var n = arguments, s = -1, o = gy(n.length - t, 0), l = Array(o); ++s < o;) l[s] = n[t + s];
                s = -1;
                for (var u = Array(t + 1); ++s < t;) u[s] = n[s];
                return u[t] = r(l), IF(e, this, u)
            }
    }
    var NF = AF;

    function PF(e) {
        return function() {
            return e
        }
    }
    var RF = PF,
        LF = RF,
        my = QE,
        kF = dT,
        xF = my ? function(e, t) {
            return my(e, "toString", {
                configurable: !0,
                enumerable: !1,
                value: LF(t),
                writable: !0
            })
        } : kF,
        DF = xF,
        MF = 800,
        FF = 16,
        BF = Date.now;

    function UF(e) {
        var t = 0,
            r = 0;
        return function() {
            var n = BF(),
                s = FF - (n - r);
            if (r = n, s > 0) {
                if (++t >= MF) return arguments[0]
            } else t = 0;
            return e.apply(void 0, arguments)
        }
    }
    var jF = UF,
        GF = DF,
        WF = jF,
        HF = WF(GF),
        KF = HF,
        VF = dT,
        qF = NF,
        YF = KF;

    function zF(e, t) {
        return YF(qF(e, t, VF), e + "")
    }
    var XF = zF,
        JF = Sc,
        QF = Ac,
        ZF = jh,
        eB = dn;

    function tB(e, t, r) {
        if (!eB(r)) return !1;
        var n = typeof t;
        return (n == "number" ? QF(r) && ZF(t, r.length) : n == "string" && t in r) ? JF(r[t], e) : !1
    }
    var rB = tB,
        nB = XF,
        iB = rB;

    function sB(e) {
        return nB(function(t, r) {
            var n = -1,
                s = r.length,
                o = s > 1 ? r[s - 1] : void 0,
                l = s > 2 ? r[2] : void 0;
            for (o = e.length > 3 && typeof o == "function" ? (s--, o) : void 0, l && iB(r[0], r[1], l) && (o = s < 3 ? void 0 : o, s = 1), t = Object(t); ++n < s;) {
                var u = r[n];
                u && e(t, u, n, o)
            }
            return t
        })
    }
    var aB = sB,
        oB = OF,
        lB = aB,
        cB = lB(function(e, t, r) {
            oB(e, t, r)
        }),
        uB = cB;
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
            return uB(t[0], ...t)
        }
    }
    ge(Bs, "locale"), ge(Bs, "supported", ["en", "fr", "it", "de", "es", "es-XL"]);
    const Up = class {
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
    let Yt = Up;
    ge(Yt, "queryParams", new URLSearchParams(window.location.search)), ge(Yt, "getQueryParam", t => Up.queryParams.get(t)), ge(Yt, "sleep", t => new Promise(r => {
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
                namespace: (s = (n = Yt.getQueryParam("namespace")) != null ? n : Yt.getQueryParam("ns")) != null ? s : this.defaultNamespace,
                isDisabled: Yt.queryParams.has("incognito") || Yt.queryParams.has("nc")
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
    class to {
        constructor() {
            ge(this, "artifacts");
            this.artifacts = this.list()
        }
        get hasUnviewed() {
            return this.artifacts.some(t => !t.viewed)
        }
        add(t, r) {
            to.add(t, r), this.artifacts = this.list()
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
            to.setAsViewed(t), this.artifacts = this.list()
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
    var bd = {
        exports: {}
    };
    (function(e, t) {
        var r = typeof self < "u" ? self : Lt,
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

                function _(F) {
                    if (typeof F != "string" && (F = String(F)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(F)) throw new TypeError("Invalid character in header field name");
                    return F.toLowerCase()
                }

                function E(F) {
                    return typeof F != "string" && (F = String(F)), F
                }

                function $(F) {
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

                function R(F) {
                    this.map = {}, F instanceof R ? F.forEach(function(ie, de) {
                        this.append(de, ie)
                    }, this) : Array.isArray(F) ? F.forEach(function(ie) {
                        this.append(ie[0], ie[1])
                    }, this) : F && Object.getOwnPropertyNames(F).forEach(function(ie) {
                        this.append(ie, F[ie])
                    }, this)
                }
                R.prototype.append = function(F, ie) {
                    F = _(F), ie = E(ie);
                    var de = this.map[F];
                    this.map[F] = de ? de + ", " + ie : ie
                }, R.prototype.delete = function(F) {
                    delete this.map[_(F)]
                }, R.prototype.get = function(F) {
                    return F = _(F), this.has(F) ? this.map[F] : null
                }, R.prototype.has = function(F) {
                    return this.map.hasOwnProperty(_(F))
                }, R.prototype.set = function(F, ie) {
                    this.map[_(F)] = E(ie)
                }, R.prototype.forEach = function(F, ie) {
                    for (var de in this.map) this.map.hasOwnProperty(de) && F.call(ie, this.map[de], de, this)
                }, R.prototype.keys = function() {
                    var F = [];
                    return this.forEach(function(ie, de) {
                        F.push(de)
                    }), $(F)
                }, R.prototype.values = function() {
                    var F = [];
                    return this.forEach(function(ie) {
                        F.push(ie)
                    }), $(F)
                }, R.prototype.entries = function() {
                    var F = [];
                    return this.forEach(function(ie, de) {
                        F.push([de, ie])
                    }), $(F)
                }, u.iterable && (R.prototype[Symbol.iterator] = R.prototype.entries);

                function M(F) {
                    if (F.bodyUsed) return Promise.reject(new TypeError("Already read"));
                    F.bodyUsed = !0
                }

                function U(F) {
                    return new Promise(function(ie, de) {
                        F.onload = function() {
                            ie(F.result)
                        }, F.onerror = function() {
                            de(F.error)
                        }
                    })
                }

                function C(F) {
                    var ie = new FileReader,
                        de = U(ie);
                    return ie.readAsArrayBuffer(F), de
                }

                function V(F) {
                    var ie = new FileReader,
                        de = U(ie);
                    return ie.readAsText(F), de
                }

                function X(F) {
                    for (var ie = new Uint8Array(F), de = new Array(ie.length), be = 0; be < ie.length; be++) de[be] = String.fromCharCode(ie[be]);
                    return de.join("")
                }

                function W(F) {
                    if (F.slice) return F.slice(0);
                    var ie = new Uint8Array(F.byteLength);
                    return ie.set(new Uint8Array(F)), ie.buffer
                }

                function j() {
                    return this.bodyUsed = !1, this._initBody = function(F) {
                        this._bodyInit = F, F ? typeof F == "string" ? this._bodyText = F : u.blob && Blob.prototype.isPrototypeOf(F) ? this._bodyBlob = F : u.formData && FormData.prototype.isPrototypeOf(F) ? this._bodyFormData = F : u.searchParams && URLSearchParams.prototype.isPrototypeOf(F) ? this._bodyText = F.toString() : u.arrayBuffer && u.blob && f(F) ? (this._bodyArrayBuffer = W(F.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : u.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(F) || g(F)) ? this._bodyArrayBuffer = W(F) : this._bodyText = F = Object.prototype.toString.call(F) : this._bodyText = "", this.headers.get("content-type") || (typeof F == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : u.searchParams && URLSearchParams.prototype.isPrototypeOf(F) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
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
                        if (this._bodyArrayBuffer) return Promise.resolve(X(this._bodyArrayBuffer));
                        if (this._bodyFormData) throw new Error("could not read FormData body as text");
                        return Promise.resolve(this._bodyText)
                    }, u.formData && (this.formData = function() {
                        return this.text().then(ue)
                    }), this.json = function() {
                        return this.text().then(JSON.parse)
                    }, this
                }
                var Q = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

                function oe(F) {
                    var ie = F.toUpperCase();
                    return Q.indexOf(ie) > -1 ? ie : F
                }

                function le(F, ie) {
                    ie = ie || {};
                    var de = ie.body;
                    if (F instanceof le) {
                        if (F.bodyUsed) throw new TypeError("Already read");
                        this.url = F.url, this.credentials = F.credentials, ie.headers || (this.headers = new R(F.headers)), this.method = F.method, this.mode = F.mode, this.signal = F.signal, !de && F._bodyInit != null && (de = F._bodyInit, F.bodyUsed = !0)
                    } else this.url = String(F);
                    if (this.credentials = ie.credentials || this.credentials || "same-origin", (ie.headers || !this.headers) && (this.headers = new R(ie.headers)), this.method = oe(ie.method || this.method || "GET"), this.mode = ie.mode || this.mode || null, this.signal = ie.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && de) throw new TypeError("Body not allowed for GET or HEAD requests");
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
                    var ie = new R,
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

                function Ce(F, ie) {
                    ie || (ie = {}), this.type = "default", this.status = ie.status === void 0 ? 200 : ie.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in ie ? ie.statusText : "OK", this.headers = new R(ie.headers), this.url = ie.url || "", this._initBody(F)
                }
                j.call(Ce.prototype), Ce.prototype.clone = function() {
                    return new Ce(this._bodyInit, {
                        status: this.status,
                        statusText: this.statusText,
                        headers: new R(this.headers),
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
                Ce.redirect = function(F, ie) {
                    if (fe.indexOf(ie) === -1) throw new RangeError("Invalid status code");
                    return new Ce(null, {
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

                function $e(F, ie) {
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
                            de(new Ce(tt, Ge))
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
                return $e.polyfill = !0, o.fetch || (o.fetch = $e, o.Headers = R, o.Request = le, o.Response = Ce), l.Headers = R, l.Request = le, l.Response = Ce, l.fetch = $e, Object.defineProperty(l, "__esModule", {
                    value: !0
                }), l
            })({})
        })(n), n.fetch.ponyfill = !0, delete n.fetch.polyfill;
        var s = n;
        t = s.fetch, t.default = s.fetch, t.fetch = s.fetch, t.Headers = s.Headers, t.Request = s.Request, t.Response = s.Response, e.exports = t
    })(bd, bd.exports);
    var fB = function() {
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
        vy = typeof Symbol < "u" && Symbol,
        dB = fB,
        hB = function() {
            return typeof vy != "function" || typeof Symbol != "function" || typeof vy("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : dB()
        },
        pB = "Function.prototype.bind called on incompatible ",
        yf = Array.prototype.slice,
        gB = Object.prototype.toString,
        mB = "[object Function]",
        vB = function(t) {
            var r = this;
            if (typeof r != "function" || gB.call(r) !== mB) throw new TypeError(pB + r);
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
        yB = vB,
        Gh = Function.prototype.bind || yB,
        _B = Gh,
        bB = _B.call(Function.call, Object.prototype.hasOwnProperty),
        Qe, zs = SyntaxError,
        hT = Function,
        Us = TypeError,
        _f = function(e) {
            try {
                return hT('"use strict"; return (' + e + ").constructor;")()
            } catch {}
        },
        ts = Object.getOwnPropertyDescriptor;
    if (ts) try {
        ts({}, "")
    } catch {
        ts = null
    }
    var bf = function() {
            throw new Us
        },
        EB = ts ? function() {
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
        ws = hB(),
        ii = Object.getPrototypeOf || function(e) {
            return e.__proto__
        },
        As = {},
        TB = typeof Uint8Array > "u" ? Qe : ii(Uint8Array),
        js = {
            "%AggregateError%": typeof AggregateError > "u" ? Qe : AggregateError,
            "%Array%": Array,
            "%ArrayBuffer%": typeof ArrayBuffer > "u" ? Qe : ArrayBuffer,
            "%ArrayIteratorPrototype%": ws ? ii([][Symbol.iterator]()) : Qe,
            "%AsyncFromSyncIteratorPrototype%": Qe,
            "%AsyncFunction%": As,
            "%AsyncGenerator%": As,
            "%AsyncGeneratorFunction%": As,
            "%AsyncIteratorPrototype%": As,
            "%Atomics%": typeof Atomics > "u" ? Qe : Atomics,
            "%BigInt%": typeof BigInt > "u" ? Qe : BigInt,
            "%Boolean%": Boolean,
            "%DataView%": typeof DataView > "u" ? Qe : DataView,
            "%Date%": Date,
            "%decodeURI%": decodeURI,
            "%decodeURIComponent%": decodeURIComponent,
            "%encodeURI%": encodeURI,
            "%encodeURIComponent%": encodeURIComponent,
            "%Error%": Error,
            "%eval%": eval,
            "%EvalError%": EvalError,
            "%Float32Array%": typeof Float32Array > "u" ? Qe : Float32Array,
            "%Float64Array%": typeof Float64Array > "u" ? Qe : Float64Array,
            "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? Qe : FinalizationRegistry,
            "%Function%": hT,
            "%GeneratorFunction%": As,
            "%Int8Array%": typeof Int8Array > "u" ? Qe : Int8Array,
            "%Int16Array%": typeof Int16Array > "u" ? Qe : Int16Array,
            "%Int32Array%": typeof Int32Array > "u" ? Qe : Int32Array,
            "%isFinite%": isFinite,
            "%isNaN%": isNaN,
            "%IteratorPrototype%": ws ? ii(ii([][Symbol.iterator]())) : Qe,
            "%JSON%": typeof JSON == "object" ? JSON : Qe,
            "%Map%": typeof Map > "u" ? Qe : Map,
            "%MapIteratorPrototype%": typeof Map > "u" || !ws ? Qe : ii(new Map()[Symbol.iterator]()),
            "%Math%": Math,
            "%Number%": Number,
            "%Object%": Object,
            "%parseFloat%": parseFloat,
            "%parseInt%": parseInt,
            "%Promise%": typeof Promise > "u" ? Qe : Promise,
            "%Proxy%": typeof Proxy > "u" ? Qe : Proxy,
            "%RangeError%": RangeError,
            "%ReferenceError%": ReferenceError,
            "%Reflect%": typeof Reflect > "u" ? Qe : Reflect,
            "%RegExp%": RegExp,
            "%Set%": typeof Set > "u" ? Qe : Set,
            "%SetIteratorPrototype%": typeof Set > "u" || !ws ? Qe : ii(new Set()[Symbol.iterator]()),
            "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? Qe : SharedArrayBuffer,
            "%String%": String,
            "%StringIteratorPrototype%": ws ? ii("" [Symbol.iterator]()) : Qe,
            "%Symbol%": ws ? Symbol : Qe,
            "%SyntaxError%": zs,
            "%ThrowTypeError%": EB,
            "%TypedArray%": TB,
            "%TypeError%": Us,
            "%Uint8Array%": typeof Uint8Array > "u" ? Qe : Uint8Array,
            "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? Qe : Uint8ClampedArray,
            "%Uint16Array%": typeof Uint16Array > "u" ? Qe : Uint16Array,
            "%Uint32Array%": typeof Uint32Array > "u" ? Qe : Uint32Array,
            "%URIError%": URIError,
            "%WeakMap%": typeof WeakMap > "u" ? Qe : WeakMap,
            "%WeakRef%": typeof WeakRef > "u" ? Qe : WeakRef,
            "%WeakSet%": typeof WeakSet > "u" ? Qe : WeakSet
        },
        SB = function e(t) {
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
            return js[t] = r, r
        },
        yy = {
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
        ho = Gh,
        Yl = bB,
        OB = ho.call(Function.call, Array.prototype.concat),
        wB = ho.call(Function.apply, Array.prototype.splice),
        _y = ho.call(Function.call, String.prototype.replace),
        zl = ho.call(Function.call, String.prototype.slice),
        $B = ho.call(Function.call, RegExp.prototype.exec),
        CB = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
        IB = /\\(\\)?/g,
        AB = function(t) {
            var r = zl(t, 0, 1),
                n = zl(t, -1);
            if (r === "%" && n !== "%") throw new zs("invalid intrinsic syntax, expected closing `%`");
            if (n === "%" && r !== "%") throw new zs("invalid intrinsic syntax, expected opening `%`");
            var s = [];
            return _y(t, CB, function(o, l, u, f) {
                s[s.length] = u ? _y(f, IB, "$1") : l || o
            }), s
        },
        NB = function(t, r) {
            var n = t,
                s;
            if (Yl(yy, n) && (s = yy[n], n = "%" + s[0] + "%"), Yl(js, n)) {
                var o = js[n];
                if (o === As && (o = SB(n)), typeof o > "u" && !r) throw new Us("intrinsic " + t + " exists, but is not available. Please file an issue!");
                return {
                    alias: s,
                    name: n,
                    value: o
                }
            }
            throw new zs("intrinsic " + t + " does not exist!")
        },
        Wh = function(t, r) {
            if (typeof t != "string" || t.length === 0) throw new Us("intrinsic name must be a non-empty string");
            if (arguments.length > 1 && typeof r != "boolean") throw new Us('"allowMissing" argument must be a boolean');
            if ($B(/^%?[^%]*%?$/g, t) === null) throw new zs("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
            var n = AB(t),
                s = n.length > 0 ? n[0] : "",
                o = NB("%" + s + "%", r),
                l = o.name,
                u = o.value,
                f = !1,
                h = o.alias;
            h && (s = h[0], wB(n, OB([0, 1], h)));
            for (var g = 1, _ = !0; g < n.length; g += 1) {
                var E = n[g],
                    $ = zl(E, 0, 1),
                    R = zl(E, -1);
                if (($ === '"' || $ === "'" || $ === "`" || R === '"' || R === "'" || R === "`") && $ !== R) throw new zs("property names with quotes must have matching quotes");
                if ((E === "constructor" || !_) && (f = !0), s += "." + E, l = "%" + s + "%", Yl(js, l)) u = js[l];
                else if (u != null) {
                    if (!(E in u)) {
                        if (!r) throw new Us("base intrinsic for " + t + " exists, but the property is not available.");
                        return
                    }
                    if (ts && g + 1 >= n.length) {
                        var M = ts(u, E);
                        _ = !!M, _ && "get" in M && !("originalValue" in M.get) ? u = M.get : u = u[E]
                    } else _ = Yl(u, E), u = u[E];
                    _ && !f && (js[l] = u)
                }
            }
            return u
        },
        pT = {
            exports: {}
        };
    (function(e) {
        var t = Gh,
            r = Wh,
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
        e.exports = function(_) {
            var E = o(t, s, arguments);
            if (l && u) {
                var $ = l(E, "length");
                $.configurable && u(E, "length", {
                    value: 1 + f(0, _.length - (arguments.length - 1))
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
    })(pT);
    var gT = Wh,
        mT = pT.exports,
        PB = mT(gT("String.prototype.indexOf")),
        RB = function(t, r) {
            var n = gT(t, !!r);
            return typeof n == "function" && PB(t, ".prototype.") > -1 ? mT(n) : n
        };
    const LB = {},
        kB = Object.freeze(Object.defineProperty({
            __proto__: null,
            default: LB
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        xB = BL(kB);
    var Hh = typeof Map == "function" && Map.prototype,
        Ef = Object.getOwnPropertyDescriptor && Hh ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null,
        Xl = Hh && Ef && typeof Ef.get == "function" ? Ef.get : null,
        DB = Hh && Map.prototype.forEach,
        Kh = typeof Set == "function" && Set.prototype,
        Tf = Object.getOwnPropertyDescriptor && Kh ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null,
        Jl = Kh && Tf && typeof Tf.get == "function" ? Tf.get : null,
        MB = Kh && Set.prototype.forEach,
        FB = typeof WeakMap == "function" && WeakMap.prototype,
        Ba = FB ? WeakMap.prototype.has : null,
        BB = typeof WeakSet == "function" && WeakSet.prototype,
        Ua = BB ? WeakSet.prototype.has : null,
        UB = typeof WeakRef == "function" && WeakRef.prototype,
        by = UB ? WeakRef.prototype.deref : null,
        jB = Boolean.prototype.valueOf,
        GB = Object.prototype.toString,
        WB = Function.prototype.toString,
        HB = String.prototype.match,
        Vh = String.prototype.slice,
        oi = String.prototype.replace,
        KB = String.prototype.toUpperCase,
        Ey = String.prototype.toLowerCase,
        vT = RegExp.prototype.test,
        Ty = Array.prototype.concat,
        Tn = Array.prototype.join,
        VB = Array.prototype.slice,
        Sy = Math.floor,
        Ed = typeof BigInt == "function" ? BigInt.prototype.valueOf : null,
        Sf = Object.getOwnPropertySymbols,
        Td = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null,
        Xs = typeof Symbol == "function" && typeof Symbol.iterator == "object",
        ur = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === Xs ? "object" : "symbol") ? Symbol.toStringTag : null,
        yT = Object.prototype.propertyIsEnumerable,
        Oy = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(e) {
            return e.__proto__
        } : null);

    function wy(e, t) {
        if (e === 1 / 0 || e === -1 / 0 || e !== e || e && e > -1e3 && e < 1e3 || vT.call(/e/, t)) return t;
        var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
        if (typeof e == "number") {
            var n = e < 0 ? -Sy(-e) : Sy(e);
            if (n !== e) {
                var s = String(n),
                    o = Vh.call(t, s.length + 1);
                return oi.call(s, r, "$&_") + "." + oi.call(oi.call(o, /([0-9]{3})/g, "$&_"), /_$/, "")
            }
        }
        return oi.call(t, r, "$&_")
    }
    var Sd = xB,
        $y = Sd.custom,
        Cy = bT($y) ? $y : null,
        qB = function e(t, r, n, s) {
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
            if (typeof t == "string") return TT(t, o);
            if (typeof t == "number") {
                if (t === 0) return 1 / 0 / t > 0 ? "0" : "-0";
                var f = String(t);
                return u ? wy(t, f) : f
            }
            if (typeof t == "bigint") {
                var h = String(t) + "n";
                return u ? wy(t, h) : h
            }
            var g = typeof o.depth > "u" ? 5 : o.depth;
            if (typeof n > "u" && (n = 0), n >= g && g > 0 && typeof t == "object") return Od(t) ? "[Array]" : "[Object]";
            var _ = fU(o, n);
            if (typeof s > "u") s = [];
            else if (ET(s, t) >= 0) return "[Circular]";

            function E($e, F, ie) {
                if (F && (s = VB.call(s), s.push(F)), ie) {
                    var de = {
                        depth: o.depth
                    };
                    return si(o, "quoteStyle") && (de.quoteStyle = o.quoteStyle), e($e, de, n + 1, s)
                }
                return e($e, o, n + 1, s)
            }
            if (typeof t == "function" && !Iy(t)) {
                var $ = rU(t),
                    R = ml(t, E);
                return "[Function" + ($ ? ": " + $ : " (anonymous)") + "]" + (R.length > 0 ? " { " + Tn.call(R, ", ") + " }" : "")
            }
            if (bT(t)) {
                var M = Xs ? oi.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : Td.call(t);
                return typeof t == "object" && !Xs ? Pa(M) : M
            }
            if (lU(t)) {
                for (var U = "<" + Ey.call(String(t.nodeName)), C = t.attributes || [], V = 0; V < C.length; V++) U += " " + C[V].name + "=" + _T(YB(C[V].value), "double", o);
                return U += ">", t.childNodes && t.childNodes.length && (U += "..."), U += "</" + Ey.call(String(t.nodeName)) + ">", U
            }
            if (Od(t)) {
                if (t.length === 0) return "[]";
                var X = ml(t, E);
                return _ && !uU(X) ? "[" + wd(X, _) + "]" : "[ " + Tn.call(X, ", ") + " ]"
            }
            if (XB(t)) {
                var W = ml(t, E);
                return !("cause" in Error.prototype) && "cause" in t && !yT.call(t, "cause") ? "{ [" + String(t) + "] " + Tn.call(Ty.call("[cause]: " + E(t.cause), W), ", ") + " }" : W.length === 0 ? "[" + String(t) + "]" : "{ [" + String(t) + "] " + Tn.call(W, ", ") + " }"
            }
            if (typeof t == "object" && l) {
                if (Cy && typeof t[Cy] == "function" && Sd) return Sd(t, {
                    depth: g - n
                });
                if (l !== "symbol" && typeof t.inspect == "function") return t.inspect()
            }
            if (nU(t)) {
                var j = [];
                return DB.call(t, function($e, F) {
                    j.push(E(F, t, !0) + " => " + E($e, t))
                }), Ay("Map", Xl.call(t), j, _)
            }
            if (aU(t)) {
                var Q = [];
                return MB.call(t, function($e) {
                    Q.push(E($e, t))
                }), Ay("Set", Jl.call(t), Q, _)
            }
            if (iU(t)) return Of("WeakMap");
            if (oU(t)) return Of("WeakSet");
            if (sU(t)) return Of("WeakRef");
            if (QB(t)) return Pa(E(Number(t)));
            if (eU(t)) return Pa(E(Ed.call(t)));
            if (ZB(t)) return Pa(jB.call(t));
            if (JB(t)) return Pa(E(String(t)));
            if (!zB(t) && !Iy(t)) {
                var oe = ml(t, E),
                    le = Oy ? Oy(t) === Object.prototype : t instanceof Object || t.constructor === Object,
                    ue = t instanceof Object ? "" : "null prototype",
                    Ae = !le && ur && Object(t) === t && ur in t ? Vh.call(yi(t), 8, -1) : ue ? "Object" : "",
                    Ce = le || typeof t.constructor != "function" ? "" : t.constructor.name ? t.constructor.name + " " : "",
                    fe = Ce + (Ae || ue ? "[" + Tn.call(Ty.call([], Ae || [], ue || []), ": ") + "] " : "");
                return oe.length === 0 ? fe + "{}" : _ ? fe + "{" + wd(oe, _) + "}" : fe + "{ " + Tn.call(oe, ", ") + " }"
            }
            return String(t)
        };

    function _T(e, t, r) {
        var n = (r.quoteStyle || t) === "double" ? '"' : "'";
        return n + e + n
    }

    function YB(e) {
        return oi.call(String(e), /"/g, "&quot;")
    }

    function Od(e) {
        return yi(e) === "[object Array]" && (!ur || !(typeof e == "object" && ur in e))
    }

    function zB(e) {
        return yi(e) === "[object Date]" && (!ur || !(typeof e == "object" && ur in e))
    }

    function Iy(e) {
        return yi(e) === "[object RegExp]" && (!ur || !(typeof e == "object" && ur in e))
    }

    function XB(e) {
        return yi(e) === "[object Error]" && (!ur || !(typeof e == "object" && ur in e))
    }

    function JB(e) {
        return yi(e) === "[object String]" && (!ur || !(typeof e == "object" && ur in e))
    }

    function QB(e) {
        return yi(e) === "[object Number]" && (!ur || !(typeof e == "object" && ur in e))
    }

    function ZB(e) {
        return yi(e) === "[object Boolean]" && (!ur || !(typeof e == "object" && ur in e))
    }

    function bT(e) {
        if (Xs) return e && typeof e == "object" && e instanceof Symbol;
        if (typeof e == "symbol") return !0;
        if (!e || typeof e != "object" || !Td) return !1;
        try {
            return Td.call(e), !0
        } catch {}
        return !1
    }

    function eU(e) {
        if (!e || typeof e != "object" || !Ed) return !1;
        try {
            return Ed.call(e), !0
        } catch {}
        return !1
    }
    var tU = Object.prototype.hasOwnProperty || function(e) {
        return e in this
    };

    function si(e, t) {
        return tU.call(e, t)
    }

    function yi(e) {
        return GB.call(e)
    }

    function rU(e) {
        if (e.name) return e.name;
        var t = HB.call(WB.call(e), /^function\s*([\w$]+)/);
        return t ? t[1] : null
    }

    function ET(e, t) {
        if (e.indexOf) return e.indexOf(t);
        for (var r = 0, n = e.length; r < n; r++)
            if (e[r] === t) return r;
        return -1
    }

    function nU(e) {
        if (!Xl || !e || typeof e != "object") return !1;
        try {
            Xl.call(e);
            try {
                Jl.call(e)
            } catch {
                return !0
            }
            return e instanceof Map
        } catch {}
        return !1
    }

    function iU(e) {
        if (!Ba || !e || typeof e != "object") return !1;
        try {
            Ba.call(e, Ba);
            try {
                Ua.call(e, Ua)
            } catch {
                return !0
            }
            return e instanceof WeakMap
        } catch {}
        return !1
    }

    function sU(e) {
        if (!by || !e || typeof e != "object") return !1;
        try {
            return by.call(e), !0
        } catch {}
        return !1
    }

    function aU(e) {
        if (!Jl || !e || typeof e != "object") return !1;
        try {
            Jl.call(e);
            try {
                Xl.call(e)
            } catch {
                return !0
            }
            return e instanceof Set
        } catch {}
        return !1
    }

    function oU(e) {
        if (!Ua || !e || typeof e != "object") return !1;
        try {
            Ua.call(e, Ua);
            try {
                Ba.call(e, Ba)
            } catch {
                return !0
            }
            return e instanceof WeakSet
        } catch {}
        return !1
    }

    function lU(e) {
        return !e || typeof e != "object" ? !1 : typeof HTMLElement < "u" && e instanceof HTMLElement ? !0 : typeof e.nodeName == "string" && typeof e.getAttribute == "function"
    }

    function TT(e, t) {
        if (e.length > t.maxStringLength) {
            var r = e.length - t.maxStringLength,
                n = "... " + r + " more character" + (r > 1 ? "s" : "");
            return TT(Vh.call(e, 0, t.maxStringLength), t) + n
        }
        var s = oi.call(oi.call(e, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, cU);
        return _T(s, "single", t)
    }

    function cU(e) {
        var t = e.charCodeAt(0),
            r = {
                8: "b",
                9: "t",
                10: "n",
                12: "f",
                13: "r"
            } [t];
        return r ? "\\" + r : "\\x" + (t < 16 ? "0" : "") + KB.call(t.toString(16))
    }

    function Pa(e) {
        return "Object(" + e + ")"
    }

    function Of(e) {
        return e + " { ? }"
    }

    function Ay(e, t, r, n) {
        var s = n ? wd(r, n) : Tn.call(r, ", ");
        return e + " (" + t + ") {" + s + "}"
    }

    function uU(e) {
        for (var t = 0; t < e.length; t++)
            if (ET(e[t], `
`) >= 0) return !1;
        return !0
    }

    function fU(e, t) {
        var r;
        if (e.indent === "	") r = "	";
        else if (typeof e.indent == "number" && e.indent > 0) r = Tn.call(Array(e.indent + 1), " ");
        else return null;
        return {
            base: r,
            prev: Tn.call(Array(t + 1), r)
        }
    }

    function wd(e, t) {
        if (e.length === 0) return "";
        var r = `
` + t.prev + t.base;
        return r + Tn.call(e, "," + r) + `
` + t.prev
    }

    function ml(e, t) {
        var r = Od(e),
            n = [];
        if (r) {
            n.length = e.length;
            for (var s = 0; s < e.length; s++) n[s] = si(e, s) ? t(e[s], e) : ""
        }
        var o = typeof Sf == "function" ? Sf(e) : [],
            l;
        if (Xs) {
            l = {};
            for (var u = 0; u < o.length; u++) l["$" + o[u]] = o[u]
        }
        for (var f in e) !si(e, f) || r && String(Number(f)) === f && f < e.length || Xs && l["$" + f] instanceof Symbol || (vT.call(/[^\w$]/, f) ? n.push(t(f, e) + ": " + t(e[f], e)) : n.push(f + ": " + t(e[f], e)));
        if (typeof Sf == "function")
            for (var h = 0; h < o.length; h++) yT.call(e, o[h]) && n.push("[" + t(o[h]) + "]: " + t(e[o[h]], e));
        return n
    }
    var qh = Wh,
        la = RB,
        dU = qB,
        hU = qh("%TypeError%"),
        vl = qh("%WeakMap%", !0),
        yl = qh("%Map%", !0),
        pU = la("WeakMap.prototype.get", !0),
        gU = la("WeakMap.prototype.set", !0),
        mU = la("WeakMap.prototype.has", !0),
        vU = la("Map.prototype.get", !0),
        yU = la("Map.prototype.set", !0),
        _U = la("Map.prototype.has", !0),
        Yh = function(e, t) {
            for (var r = e, n;
                (n = r.next) !== null; r = n)
                if (n.key === t) return r.next = n.next, n.next = e.next, e.next = n, n
        },
        bU = function(e, t) {
            var r = Yh(e, t);
            return r && r.value
        },
        EU = function(e, t, r) {
            var n = Yh(e, t);
            n ? n.value = r : e.next = {
                key: t,
                next: e.next,
                value: r
            }
        },
        TU = function(e, t) {
            return !!Yh(e, t)
        },
        SU = function() {
            var t, r, n, s = {
                assert: function(o) {
                    if (!s.has(o)) throw new hU("Side channel does not contain " + dU(o))
                },
                get: function(o) {
                    if (vl && o && (typeof o == "object" || typeof o == "function")) {
                        if (t) return pU(t, o)
                    } else if (yl) {
                        if (r) return vU(r, o)
                    } else if (n) return bU(n, o)
                },
                has: function(o) {
                    if (vl && o && (typeof o == "object" || typeof o == "function")) {
                        if (t) return mU(t, o)
                    } else if (yl) {
                        if (r) return _U(r, o)
                    } else if (n) return TU(n, o);
                    return !1
                },
                set: function(o, l) {
                    vl && o && (typeof o == "object" || typeof o == "function") ? (t || (t = new vl), gU(t, o, l)) : yl ? (r || (r = new yl), yU(r, o, l)) : (n || (n = {
                        key: {},
                        next: null
                    }), EU(n, o, l))
                }
            };
            return s
        },
        OU = String.prototype.replace,
        wU = /%20/g,
        wf = {
            RFC1738: "RFC1738",
            RFC3986: "RFC3986"
        },
        zh = {
            default: wf.RFC3986,
            formatters: {
                RFC1738: function(e) {
                    return OU.call(e, wU, "+")
                },
                RFC3986: function(e) {
                    return String(e)
                }
            },
            RFC1738: wf.RFC1738,
            RFC3986: wf.RFC3986
        },
        $U = zh,
        $f = Object.prototype.hasOwnProperty,
        Yi = Array.isArray,
        vn = function() {
            for (var e = [], t = 0; t < 256; ++t) e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
            return e
        }(),
        CU = function(t) {
            for (; t.length > 1;) {
                var r = t.pop(),
                    n = r.obj[r.prop];
                if (Yi(n)) {
                    for (var s = [], o = 0; o < n.length; ++o) typeof n[o] < "u" && s.push(n[o]);
                    r.obj[r.prop] = s
                }
            }
        },
        ST = function(t, r) {
            for (var n = r && r.plainObjects ? Object.create(null) : {}, s = 0; s < t.length; ++s) typeof t[s] < "u" && (n[s] = t[s]);
            return n
        },
        IU = function e(t, r, n) {
            if (!r) return t;
            if (typeof r != "object") {
                if (Yi(t)) t.push(r);
                else if (t && typeof t == "object")(n && (n.plainObjects || n.allowPrototypes) || !$f.call(Object.prototype, r)) && (t[r] = !0);
                else return [t, r];
                return t
            }
            if (!t || typeof t != "object") return [t].concat(r);
            var s = t;
            return Yi(t) && !Yi(r) && (s = ST(t, n)), Yi(t) && Yi(r) ? (r.forEach(function(o, l) {
                if ($f.call(t, l)) {
                    var u = t[l];
                    u && typeof u == "object" && o && typeof o == "object" ? t[l] = e(u, o, n) : t.push(o)
                } else t[l] = o
            }), t) : Object.keys(r).reduce(function(o, l) {
                var u = r[l];
                return $f.call(o, l) ? o[l] = e(o[l], u, n) : o[l] = u, o
            }, s)
        },
        AU = function(t, r) {
            return Object.keys(r).reduce(function(n, s) {
                return n[s] = r[s], n
            }, t)
        },
        NU = function(e, t, r) {
            var n = e.replace(/\+/g, " ");
            if (r === "iso-8859-1") return n.replace(/%[0-9a-f]{2}/gi, unescape);
            try {
                return decodeURIComponent(n)
            } catch {
                return n
            }
        },
        PU = function(t, r, n, s, o) {
            if (t.length === 0) return t;
            var l = t;
            if (typeof t == "symbol" ? l = Symbol.prototype.toString.call(t) : typeof t != "string" && (l = String(t)), n === "iso-8859-1") return escape(l).replace(/%u[0-9a-f]{4}/gi, function(g) {
                return "%26%23" + parseInt(g.slice(2), 16) + "%3B"
            });
            for (var u = "", f = 0; f < l.length; ++f) {
                var h = l.charCodeAt(f);
                if (h === 45 || h === 46 || h === 95 || h === 126 || h >= 48 && h <= 57 || h >= 65 && h <= 90 || h >= 97 && h <= 122 || o === $U.RFC1738 && (h === 40 || h === 41)) {
                    u += l.charAt(f);
                    continue
                }
                if (h < 128) {
                    u = u + vn[h];
                    continue
                }
                if (h < 2048) {
                    u = u + (vn[192 | h >> 6] + vn[128 | h & 63]);
                    continue
                }
                if (h < 55296 || h >= 57344) {
                    u = u + (vn[224 | h >> 12] + vn[128 | h >> 6 & 63] + vn[128 | h & 63]);
                    continue
                }
                f += 1, h = 65536 + ((h & 1023) << 10 | l.charCodeAt(f) & 1023), u += vn[240 | h >> 18] + vn[128 | h >> 12 & 63] + vn[128 | h >> 6 & 63] + vn[128 | h & 63]
            }
            return u
        },
        RU = function(t) {
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
            return CU(r), t
        },
        LU = function(t) {
            return Object.prototype.toString.call(t) === "[object RegExp]"
        },
        kU = function(t) {
            return !t || typeof t != "object" ? !1 : !!(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t))
        },
        xU = function(t, r) {
            return [].concat(t, r)
        },
        DU = function(t, r) {
            if (Yi(t)) {
                for (var n = [], s = 0; s < t.length; s += 1) n.push(r(t[s]));
                return n
            }
            return r(t)
        },
        OT = {
            arrayToObject: ST,
            assign: AU,
            combine: xU,
            compact: RU,
            decode: NU,
            encode: PU,
            isBuffer: kU,
            isRegExp: LU,
            maybeMap: DU,
            merge: IU
        },
        wT = SU,
        $d = OT,
        ja = zh,
        MU = Object.prototype.hasOwnProperty,
        Ny = {
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
        FU = String.prototype.split,
        BU = Array.prototype.push,
        $T = function(e, t) {
            BU.apply(e, Fn(t) ? t : [t])
        },
        UU = Date.prototype.toISOString,
        Py = ja.default,
        Zt = {
            addQueryPrefix: !1,
            allowDots: !1,
            charset: "utf-8",
            charsetSentinel: !1,
            delimiter: "&",
            encode: !0,
            encoder: $d.encode,
            encodeValuesOnly: !1,
            format: Py,
            formatter: ja.formatters[Py],
            indices: !1,
            serializeDate: function(t) {
                return UU.call(t)
            },
            skipNulls: !1,
            strictNullHandling: !1
        },
        jU = function(t) {
            return typeof t == "string" || typeof t == "number" || typeof t == "boolean" || typeof t == "symbol" || typeof t == "bigint"
        },
        Cf = {},
        GU = function e(t, r, n, s, o, l, u, f, h, g, _, E, $, R, M, U) {
            for (var C = t, V = U, X = 0, W = !1;
                (V = V.get(Cf)) !== void 0 && !W;) {
                var j = V.get(t);
                if (X += 1, typeof j < "u") {
                    if (j === X) throw new RangeError("Cyclic object value");
                    W = !0
                }
                typeof V.get(Cf) > "u" && (X = 0)
            }
            if (typeof f == "function" ? C = f(r, C) : C instanceof Date ? C = _(C) : n === "comma" && Fn(C) && (C = $d.maybeMap(C, function(Oe) {
                    return Oe instanceof Date ? _(Oe) : Oe
                })), C === null) {
                if (o) return u && !R ? u(r, Zt.encoder, M, "key", E) : r;
                C = ""
            }
            if (jU(C) || $d.isBuffer(C)) {
                if (u) {
                    var Q = R ? r : u(r, Zt.encoder, M, "key", E);
                    if (n === "comma" && R) {
                        for (var oe = FU.call(String(C), ","), le = "", ue = 0; ue < oe.length; ++ue) le += (ue === 0 ? "" : ",") + $(u(oe[ue], Zt.encoder, M, "value", E));
                        return [$(Q) + (s && Fn(C) && oe.length === 1 ? "[]" : "") + "=" + le]
                    }
                    return [$(Q) + "=" + $(u(C, Zt.encoder, M, "value", E))]
                }
                return [$(r) + "=" + $(String(C))]
            }
            var Ae = [];
            if (typeof C > "u") return Ae;
            var Ce;
            if (n === "comma" && Fn(C)) Ce = [{
                value: C.length > 0 ? C.join(",") || null : void 0
            }];
            else if (Fn(f)) Ce = f;
            else {
                var fe = Object.keys(C);
                Ce = h ? fe.sort(h) : fe
            }
            for (var $e = s && Fn(C) && C.length === 1 ? r + "[]" : r, F = 0; F < Ce.length; ++F) {
                var ie = Ce[F],
                    de = typeof ie == "object" && typeof ie.value < "u" ? ie.value : C[ie];
                if (!(l && de === null)) {
                    var be = Fn(C) ? typeof n == "function" ? n($e, ie) : $e : $e + (g ? "." + ie : "[" + ie + "]");
                    U.set(t, X);
                    var ve = wT();
                    ve.set(Cf, U), $T(Ae, e(de, be, n, s, o, l, u, f, h, g, _, E, $, R, M, ve))
                }
            }
            return Ae
        },
        WU = function(t) {
            if (!t) return Zt;
            if (t.encoder !== null && typeof t.encoder < "u" && typeof t.encoder != "function") throw new TypeError("Encoder has to be a function.");
            var r = t.charset || Zt.charset;
            if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
            var n = ja.default;
            if (typeof t.format < "u") {
                if (!MU.call(ja.formatters, t.format)) throw new TypeError("Unknown format option provided.");
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
        HU = function(e, t) {
            var r = e,
                n = WU(t),
                s, o;
            typeof n.filter == "function" ? (o = n.filter, r = o("", r)) : Fn(n.filter) && (o = n.filter, s = o);
            var l = [];
            if (typeof r != "object" || r === null) return "";
            var u;
            t && t.arrayFormat in Ny ? u = t.arrayFormat : t && "indices" in t ? u = t.indices ? "indices" : "repeat" : u = "indices";
            var f = Ny[u];
            if (t && "commaRoundTrip" in t && typeof t.commaRoundTrip != "boolean") throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
            var h = f === "comma" && t && t.commaRoundTrip;
            s || (s = Object.keys(r)), n.sort && s.sort(n.sort);
            for (var g = wT(), _ = 0; _ < s.length; ++_) {
                var E = s[_];
                n.skipNulls && r[E] === null || $T(l, GU(r[E], E, f, h, n.strictNullHandling, n.skipNulls, n.encode ? n.encoder : null, n.filter, n.sort, n.allowDots, n.serializeDate, n.format, n.formatter, n.encodeValuesOnly, n.charset, g))
            }
            var $ = l.join(n.delimiter),
                R = n.addQueryPrefix === !0 ? "?" : "";
            return n.charsetSentinel && (n.charset === "iso-8859-1" ? R += "utf8=%26%2310003%3B&" : R += "utf8=%E2%9C%93&"), $.length > 0 ? R + $ : ""
        },
        Js = OT,
        Cd = Object.prototype.hasOwnProperty,
        KU = Array.isArray,
        Vt = {
            allowDots: !1,
            allowPrototypes: !1,
            allowSparse: !1,
            arrayLimit: 20,
            charset: "utf-8",
            charsetSentinel: !1,
            comma: !1,
            decoder: Js.decode,
            delimiter: "&",
            depth: 5,
            ignoreQueryPrefix: !1,
            interpretNumericEntities: !1,
            parameterLimit: 1e3,
            parseArrays: !0,
            plainObjects: !1,
            strictNullHandling: !1
        },
        VU = function(e) {
            return e.replace(/&#(\d+);/g, function(t, r) {
                return String.fromCharCode(parseInt(r, 10))
            })
        },
        CT = function(e, t) {
            return e && typeof e == "string" && t.comma && e.indexOf(",") > -1 ? e.split(",") : e
        },
        qU = "utf8=%26%2310003%3B",
        YU = "utf8=%E2%9C%93",
        zU = function(t, r) {
            var n = {},
                s = r.ignoreQueryPrefix ? t.replace(/^\?/, "") : t,
                o = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit,
                l = s.split(r.delimiter, o),
                u = -1,
                f, h = r.charset;
            if (r.charsetSentinel)
                for (f = 0; f < l.length; ++f) l[f].indexOf("utf8=") === 0 && (l[f] === YU ? h = "utf-8" : l[f] === qU && (h = "iso-8859-1"), u = f, f = l.length);
            for (f = 0; f < l.length; ++f)
                if (f !== u) {
                    var g = l[f],
                        _ = g.indexOf("]="),
                        E = _ === -1 ? g.indexOf("=") : _ + 1,
                        $, R;
                    E === -1 ? ($ = r.decoder(g, Vt.decoder, h, "key"), R = r.strictNullHandling ? null : "") : ($ = r.decoder(g.slice(0, E), Vt.decoder, h, "key"), R = Js.maybeMap(CT(g.slice(E + 1), r), function(M) {
                        return r.decoder(M, Vt.decoder, h, "value")
                    })), R && r.interpretNumericEntities && h === "iso-8859-1" && (R = VU(R)), g.indexOf("[]=") > -1 && (R = KU(R) ? [R] : R), Cd.call(n, $) ? n[$] = Js.combine(n[$], R) : n[$] = R
                } return n
        },
        XU = function(e, t, r, n) {
            for (var s = n ? t : CT(t, r), o = e.length - 1; o >= 0; --o) {
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
        JU = function(t, r, n, s) {
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
                for (var _ = 0; n.depth > 0 && (f = u.exec(o)) !== null && _ < n.depth;) {
                    if (_ += 1, !n.plainObjects && Cd.call(Object.prototype, f[1].slice(1, -1)) && !n.allowPrototypes) return;
                    g.push(f[1])
                }
                return f && g.push("[" + o.slice(f.index) + "]"), XU(g, r, n, s)
            }
        },
        QU = function(t) {
            if (!t) return Vt;
            if (t.decoder !== null && t.decoder !== void 0 && typeof t.decoder != "function") throw new TypeError("Decoder has to be a function.");
            if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
            var r = typeof t.charset > "u" ? Vt.charset : t.charset;
            return {
                allowDots: typeof t.allowDots > "u" ? Vt.allowDots : !!t.allowDots,
                allowPrototypes: typeof t.allowPrototypes == "boolean" ? t.allowPrototypes : Vt.allowPrototypes,
                allowSparse: typeof t.allowSparse == "boolean" ? t.allowSparse : Vt.allowSparse,
                arrayLimit: typeof t.arrayLimit == "number" ? t.arrayLimit : Vt.arrayLimit,
                charset: r,
                charsetSentinel: typeof t.charsetSentinel == "boolean" ? t.charsetSentinel : Vt.charsetSentinel,
                comma: typeof t.comma == "boolean" ? t.comma : Vt.comma,
                decoder: typeof t.decoder == "function" ? t.decoder : Vt.decoder,
                delimiter: typeof t.delimiter == "string" || Js.isRegExp(t.delimiter) ? t.delimiter : Vt.delimiter,
                depth: typeof t.depth == "number" || t.depth === !1 ? +t.depth : Vt.depth,
                ignoreQueryPrefix: t.ignoreQueryPrefix === !0,
                interpretNumericEntities: typeof t.interpretNumericEntities == "boolean" ? t.interpretNumericEntities : Vt.interpretNumericEntities,
                parameterLimit: typeof t.parameterLimit == "number" ? t.parameterLimit : Vt.parameterLimit,
                parseArrays: t.parseArrays !== !1,
                plainObjects: typeof t.plainObjects == "boolean" ? t.plainObjects : Vt.plainObjects,
                strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : Vt.strictNullHandling
            }
        },
        ZU = function(e, t) {
            var r = QU(t);
            if (e === "" || e === null || typeof e > "u") return r.plainObjects ? Object.create(null) : {};
            for (var n = typeof e == "string" ? zU(e, r) : e, s = r.plainObjects ? Object.create(null) : {}, o = Object.keys(n), l = 0; l < o.length; ++l) {
                var u = o[l],
                    f = JU(u, n[u], r, typeof e == "string");
                s = Js.merge(s, f, r)
            }
            return r.allowSparse === !0 ? s : Js.compact(s)
        },
        ej = HU,
        tj = ZU,
        rj = zh,
        IT = {
            formats: rj,
            parse: tj,
            stringify: ej
        };
    class nj {
        constructor(t) {
            this.code = t.code, this.token = t.token, this.host = t.host
        }
    }
    class ij {
        constructor(t) {
            this.appId = t.appId, this.appTag = t.appTag, this.audienceEnabled = t.audienceEnabled, this.code = t.code, this.host = t.host, this.audienceHost = t.audienceHost, this.locked = t.locked, this.full = t.full, this.moderationEnabled = t.moderationEnabled, this.passwordRequired = t.passwordRequired, this.twitchLocked = t.twitchLocked, this.locale = t.locale, this.keepalive = t.keepalive, this.controllerBranch = t.controllerBranch
        }
    }
    class sj {
        constructor(t) {
            this.connections = t.connections
        }
    }
    class aj {
        constructor(t) {
            this.cause = t.cause
        }
        whenReceived(t) {
            t.disconnect()
        }
    }
    class oj {}
    var Nc = {
        CreateRoomReply: nj,
        GetRoomReply: ij,
        GetAudienceReply: sj,
        RoomExit: aj,
        RoomLock: oj
    };
    const Ry = bd.exports,
        lj = IT,
        {
            CreateRoomReply: cj,
            GetRoomReply: uj
        } = Nc;
    class fj {
        constructor(t) {
            if (!t.host) throw new Error("unable to create ecast APIClient: no host provided");
            if (this.host = t.host, !t.scheme) throw new Error("unable to create ecast APIClient: no scheme provided");
            this.scheme = t.scheme
        }
        url(t, r) {
            if (r) {
                let n = lj.stringify(r);
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
                l = await (await Ry(n, {
                    method: "POST"
                })).json();
            if (!l.ok) throw new Error(`failed to create room: ${l.error}`);
            let u = l.body;
            return new cj({
                code: u.code,
                token: u.token,
                host: u.host
            })
        }
        async getRoom(t) {
            let r = this.url(`/rooms/${t.code}`),
                s = await (await Ry(r)).json();
            if (!s.ok) throw new Error(`unable to get room with options ${JSON.stringify(t)}: ${s.error}`);
            let o = s.body;
            return new uj({
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
    var dj = {
            APIClient: fj
        },
        Ns = null;
    typeof WebSocket < "u" ? Ns = WebSocket : typeof MozWebSocket < "u" ? Ns = MozWebSocket : typeof Lt < "u" ? Ns = Lt.WebSocket || Lt.MozWebSocket : typeof window < "u" ? Ns = window.WebSocket || window.MozWebSocket : typeof self < "u" && (Ns = self.WebSocket || self.MozWebSocket);
    var hj = Ns,
        Xh = {
            exports: {}
        },
        Gs = typeof Reflect == "object" ? Reflect : null,
        Ly = Gs && typeof Gs.apply == "function" ? Gs.apply : function(t, r, n) {
            return Function.prototype.apply.call(t, r, n)
        },
        Ll;
    Gs && typeof Gs.ownKeys == "function" ? Ll = Gs.ownKeys : Object.getOwnPropertySymbols ? Ll = function(t) {
        return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))
    } : Ll = function(t) {
        return Object.getOwnPropertyNames(t)
    };

    function pj(e) {
        console && console.warn && console.warn(e)
    }
    var AT = Number.isNaN || function(t) {
        return t !== t
    };

    function ht() {
        ht.init.call(this)
    }
    Xh.exports = ht;
    Xh.exports.once = yj;
    ht.EventEmitter = ht;
    ht.prototype._events = void 0;
    ht.prototype._eventsCount = 0;
    ht.prototype._maxListeners = void 0;
    var ky = 10;

    function Pc(e) {
        if (typeof e != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e)
    }
    Object.defineProperty(ht, "defaultMaxListeners", {
        enumerable: !0,
        get: function() {
            return ky
        },
        set: function(e) {
            if (typeof e != "number" || e < 0 || AT(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
            ky = e
        }
    });
    ht.init = function() {
        (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
    };
    ht.prototype.setMaxListeners = function(t) {
        if (typeof t != "number" || t < 0 || AT(t)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
        return this._maxListeners = t, this
    };

    function NT(e) {
        return e._maxListeners === void 0 ? ht.defaultMaxListeners : e._maxListeners
    }
    ht.prototype.getMaxListeners = function() {
        return NT(this)
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
            for (var h = f.length, g = xT(f, h), n = 0; n < h; ++n) Ly(g[n], this, r);
        return !0
    };

    function PT(e, t, r, n) {
        var s, o, l;
        if (Pc(r), o = e._events, o === void 0 ? (o = e._events = Object.create(null), e._eventsCount = 0) : (o.newListener !== void 0 && (e.emit("newListener", t, r.listener ? r.listener : r), o = e._events), l = o[t]), l === void 0) l = o[t] = r, ++e._eventsCount;
        else if (typeof l == "function" ? l = o[t] = n ? [r, l] : [l, r] : n ? l.unshift(r) : l.push(r), s = NT(e), s > 0 && l.length > s && !l.warned) {
            l.warned = !0;
            var u = new Error("Possible EventEmitter memory leak detected. " + l.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
            u.name = "MaxListenersExceededWarning", u.emitter = e, u.type = t, u.count = l.length, pj(u)
        }
        return e
    }
    ht.prototype.addListener = function(t, r) {
        return PT(this, t, r, !1)
    };
    ht.prototype.on = ht.prototype.addListener;
    ht.prototype.prependListener = function(t, r) {
        return PT(this, t, r, !0)
    };

    function gj() {
        if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
    }

    function RT(e, t, r) {
        var n = {
                fired: !1,
                wrapFn: void 0,
                target: e,
                type: t,
                listener: r
            },
            s = gj.bind(n);
        return s.listener = r, n.wrapFn = s, s
    }
    ht.prototype.once = function(t, r) {
        return Pc(r), this.on(t, RT(this, t, r)), this
    };
    ht.prototype.prependOnceListener = function(t, r) {
        return Pc(r), this.prependListener(t, RT(this, t, r)), this
    };
    ht.prototype.removeListener = function(t, r) {
        var n, s, o, l, u;
        if (Pc(r), s = this._events, s === void 0) return this;
        if (n = s[t], n === void 0) return this;
        if (n === r || n.listener === r) --this._eventsCount === 0 ? this._events = Object.create(null) : (delete s[t], s.removeListener && this.emit("removeListener", t, n.listener || r));
        else if (typeof n != "function") {
            for (o = -1, l = n.length - 1; l >= 0; l--)
                if (n[l] === r || n[l].listener === r) {
                    u = n[l].listener, o = l;
                    break
                } if (o < 0) return this;
            o === 0 ? n.shift() : mj(n, o), n.length === 1 && (s[t] = n[0]), s.removeListener !== void 0 && this.emit("removeListener", t, u || r)
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

    function LT(e, t, r) {
        var n = e._events;
        if (n === void 0) return [];
        var s = n[t];
        return s === void 0 ? [] : typeof s == "function" ? r ? [s.listener || s] : [s] : r ? vj(s) : xT(s, s.length)
    }
    ht.prototype.listeners = function(t) {
        return LT(this, t, !0)
    };
    ht.prototype.rawListeners = function(t) {
        return LT(this, t, !1)
    };
    ht.listenerCount = function(e, t) {
        return typeof e.listenerCount == "function" ? e.listenerCount(t) : kT.call(e, t)
    };
    ht.prototype.listenerCount = kT;

    function kT(e) {
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

    function xT(e, t) {
        for (var r = new Array(t), n = 0; n < t; ++n) r[n] = e[n];
        return r
    }

    function mj(e, t) {
        for (; t + 1 < e.length; t++) e[t] = e[t + 1];
        e.pop()
    }

    function vj(e) {
        for (var t = new Array(e.length), r = 0; r < t.length; ++r) t[r] = e[r].listener || e[r];
        return t
    }

    function yj(e, t) {
        return new Promise(function(r, n) {
            function s(l) {
                e.removeListener(t, o), n(l)
            }

            function o() {
                typeof e.removeListener == "function" && e.removeListener("error", s), r([].slice.call(arguments))
            }
            DT(e, t, o, {
                once: !0
            }), t !== "error" && _j(e, s, {
                once: !0
            })
        })
    }

    function _j(e, t, r) {
        typeof e.on == "function" && DT(e, "error", t, r)
    }

    function DT(e, t, r, n) {
        if (typeof e.on == "function") n.once ? e.once(t, r) : e.on(t, r);
        else if (typeof e.addEventListener == "function") e.addEventListener(t, function s(o) {
            n.once && e.removeEventListener(t, s), r(o)
        });
        else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e)
    }
    class bj {
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
    class Rc extends Error {
        constructor(t) {
            super(t), t && (this.code = t.code, this.message = t.message)
        }
    }
    class po extends Rc {
        constructor(t) {
            super(t), this.code = 1e3, this.message = t && t.message ? t.message : "ecast server error"
        }
    }
    class MT extends po {
        constructor(t) {
            super(t), this.code = 1001, this.message = t && t.message ? t.message : "create room failed"
        }
    }
    class FT extends po {
        constructor(t) {
            super(t), this.code = 1002, this.message = t && t.message ? t.message : "unable to connect to room"
        }
    }
    class BT extends po {
        constructor(t) {
            super(t), this.code = 1003, this.message = t && t.message ? t.message : "server is shutting down"
        }
    }
    class ut extends Rc {
        constructor(t) {
            super(t), this.code = 2e3, this.message = t && t.message ? t.message : "ecast client error"
        }
    }
    class UT extends ut {
        constructor(t) {
            super(t), this.code = 2001, this.message = t && t.message ? t.message : "parse error in ecast protocol"
        }
    }
    class jT extends ut {
        constructor(t) {
            super(t), this.code = 2002, this.message = t && t.message ? t.message : "missing opcode"
        }
    }
    class GT extends ut {
        constructor(t) {
            super(t), this.code = 2003, this.message = t && t.message ? t.message : "invalid opcode"
        }
    }
    class WT extends ut {
        constructor(t) {
            super(t), this.code = 2004, this.message = t && t.message ? t.message : "invalid arguments"
        }
    }
    class HT extends ut {
        constructor(t) {
            super(t), this.code = 2005, this.message = t && t.message ? t.message : "entity not found"
        }
    }
    class KT extends ut {
        constructor(t) {
            super(t), this.code = 2006, this.message = t && t.message ? t.message : "an entity already exists with that key"
        }
    }
    class VT extends ut {
        constructor(t) {
            super(t), this.code = 2007, this.message = t && t.message ? t.message : "the entity is not of the expected type"
        }
    }
    class qT extends ut {
        constructor(t) {
            super(t), this.code = 2008, this.message = t && t.message ? t.message : "no such client"
        }
    }
    class YT extends ut {
        constructor(t) {
            super(t), this.code = 2009, this.message = t && t.message ? t.message : "room is locked"
        }
    }
    class zT extends ut {
        constructor(t) {
            super(t), this.code = 2010, this.message = t && t.message ? t.message : "room is full"
        }
    }
    class XT extends ut {
        constructor(t) {
            super(t), this.code = 2011, this.message = t && t.message ? t.message : "no such license"
        }
    }
    class JT extends ut {
        constructor(t) {
            super(t), this.code = 2012, this.message = t && t.message ? t.message : "invalid license"
        }
    }
    class QT extends ut {
        constructor(t) {
            super(t), this.code = 2013, this.message = t && t.message ? t.message : "room not found"
        }
    }
    class ZT extends ut {
        constructor(t) {
            super(t), this.code = 2014, this.message = t && t.message ? t.message : "requested role does not exist"
        }
    }
    class eS extends ut {
        constructor(t) {
            super(t), this.code = 2015, this.message = t && t.message ? t.message : "twitch login required"
        }
    }
    class tS extends ut {
        constructor(t) {
            super(t), this.code = 2016, this.message = t && t.message ? t.message : "no such option"
        }
    }
    class rS extends ut {
        constructor(t) {
            super(t), this.code = 2017, this.message = t && t.message ? t.message : "password required"
        }
    }
    class nS extends ut {
        constructor(t) {
            super(t), this.code = 2018, this.message = t && t.message ? t.message : "invalid room password"
        }
    }
    class iS extends ut {
        constructor(t) {
            super(t), this.code = 2019, this.message = t && t.message ? t.message : "missing name"
        }
    }
    class sS extends ut {
        constructor(t) {
            super(t), this.code = 2021, this.message = t && t.message ? t.message : "text did not pass text filters"
        }
    }
    class aS extends ut {
        constructor(t) {
            super(t), this.code = 2022, this.message = t && t.message ? t.message : "no such filter"
        }
    }
    class oS extends ut {
        constructor(t) {
            super(t), this.code = 2023, this.message = t && t.message ? t.message : "permission denied"
        }
    }
    class lS extends ut {
        constructor(t) {
            super(t), this.code = 2024, this.message = t && t.message ? t.message : "not connected to a room"
        }
    }
    class cS extends ut {
        constructor(t) {
            super(t), this.code = 2025, this.message = t && t.message ? t.message : "illegal operation"
        }
    }
    class uS extends ut {
        constructor(t) {
            super(t), this.code = 2026, this.message = t && t.message ? t.message : "invalid ACL change"
        }
    }
    class fS extends ut {
        constructor(t) {
            super(t), this.code = 2027, this.message = t && t.message ? t.message : "room has already ended"
        }
    }
    class dS extends ut {
        constructor(t) {
            super(t), this.code = 2028, this.message = t && t.message ? t.message : "the entity is locked"
        }
    }
    class hS extends ut {
        constructor(t) {
            super(t), this.code = 2420, this.message = t && t.message ? t.message : "rate limit exceeded"
        }
    }

    function Ej({
        code: e,
        message: t
    }) {
        const r = Tj[e];
        return r ? new r({
            message: t
        }) : new Rc({
            message: t
        })
    }
    var rs = {
        createError: Ej,
        CallError: Rc,
        EcastServerError: po,
        EcastCreateRoomFailed: MT,
        EcastDialRoomFailed: FT,
        EcastServerIsShuttingDown: BT,
        EcastClientError: ut,
        EcastParseError: UT,
        EcastRequestIsMissingOpcode: jT,
        EcastRequestHasInvalidOpcode: GT,
        EcastRequestHasInvalidArguments: WT,
        EcastEntityNotFound: HT,
        EcastEntityAlreadyExists: KT,
        EcastEntityTypeError: VT,
        EcastNoSuchClient: qT,
        EcastRoomIsLocked: YT,
        EcastRoomIsFull: zT,
        EcastLicenseNotFound: XT,
        EcastLicenseCheckFailed: JT,
        EcastRoomNotFound: QT,
        EcastInvalidRole: ZT,
        EcastTwitchLoginRequired: eS,
        EcastInvalidOption: tS,
        EcastPasswordRequired: rS,
        EcastInvalidPassword: nS,
        EcastNameRequired: iS,
        EcastFilterError: sS,
        EcastNoSuchFilter: aS,
        EcastPermissionDenied: oS,
        EcastNotConnected: lS,
        EcastIllegalOperation: cS,
        EcastACLChangeDenied: uS,
        EcastRoomHasEnded: fS,
        EcastEntityLocked: dS,
        EcastRateLimitExceeded: hS,
        ObservedError: bj
    };
    const Tj = {
        1e3: po,
        1001: MT,
        1002: FT,
        1003: BT,
        2e3: ut,
        2001: UT,
        2002: jT,
        2003: GT,
        2004: WT,
        2005: HT,
        2006: KT,
        2007: VT,
        2008: qT,
        2009: YT,
        2010: zT,
        2011: XT,
        2012: JT,
        2013: QT,
        2014: ZT,
        2015: eS,
        2016: tS,
        2017: rS,
        2018: nS,
        2019: iS,
        2021: sS,
        2022: aS,
        2023: oS,
        2024: lS,
        2025: cS,
        2026: uS,
        2027: fS,
        2028: dS,
        2420: hS
    };
    class Sj {
        constructor(t) {
            this.id = t.id, this.deviceId = t.deviceId, this.name = t.name, this.secret = t.secret, this.reconnect = t.reconnect, this.entities = t.entities, this.here = t.here, this.profile = t.profile, this.replayEnd = t.replayEnd
        }
    }
    class Oj {
        constructor(t) {
            this.id = t.id, this.userId = t.userId, this.name = t.name, this.role = t.role, this.reconnect = t.reconnect
        }
    }
    class wj {
        constructor(t) {
            this.id = t.id, this.role = t.role
        }
    }
    class $j {
        constructor(t) {
            this.to = t.to, this.from = t.from, this.body = t.body, this.userId = t.userId
        }
    }
    class Cj {
        constructor(t) {
            this.id = t.id, this.banned = t.banned, this.reason = t.reason
        }
    }
    var Jh = {
        ClientConnected: Oj,
        ClientDisconnected: wj,
        ClientKicked: Cj,
        ClientSend: $j,
        ClientWelcome: Sj
    };
    class Ij {
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
    var Qh = {
        CountGroup: Ij
    };
    class Aj {
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
    var Zh = {
        GCounter: Aj
    };
    class Nj {
        constructor(t) {
            this.pc = t.pc, this.opcode = t.opcode, this.result = t.result
        }
    }
    var pS = {
        Notification: Nj
    };
    class Pj {
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
    class Rj {
        constructor(t) {
            this.message = t.message
        }
        toString() {
            return `ObjectEcho{message: ${this.message}}`
        }
    }
    var ep = {
        ObjectEntity: Pj,
        ObjectEcho: Rj
    };
    class Lj {
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
    var tp = {
        PNCounter: Lj
    };
    class kj {
        constructor(t) {
            this.pc = t.pc, this.re = t.re, this.opcode = t.opcode, this.result = t.result
        }
    }
    var gS = {
        Reply: kj
    };
    class xj {
        constructor(t) {
            this.seq = t.seq, this.opcode = t.opcode, this.params = t.params
        }
    }
    var Dj = {
        Request: xj
    };
    class Mj {
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
    class Fj {
        constructor(t) {
            this.message = t.message
        }
        toString() {
            return `TextEcho{message: ${this.message}
}`
        }
    }
    var rp = {
        TextEntity: Mj,
        TextEcho: Fj
    };
    class Bj {
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
    var np = {
        TextRing: Bj
    };
    class Uj {
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
    var mS = {
        ArtifactEntity: Uj
    };
    class jj {
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
    class Gj {
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
    class Wj {
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
    var ip = {
        DoodleEntity: jj,
        DoodleLine: Gj,
        DoodleLineRemoved: Wj
    };
    class Hj {
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
    class Kj {
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
    class Vj {
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
    var vS = {
        StackEntity: Hj,
        StackElement: Kj,
        StackElements: Vj
    };
    class qj {
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
    var yS = {
        DropEntity: qj
    };
    class Yj {
        constructor(t) {
            this.message = t.message
        }
        toString() {
            return `Echo{message: ${this.message}
}`
        }
    }
    var zj = {
        Echo: Yj
    };
    class Xj {
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
    var Jj = {
        LockEntity: Xj
    };
    class Qj {
        constructor() {}
        toString() {
            return "OK"
        }
    }
    var _S = {
        OK: Qj
    };
    class Zj {
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
    var bS = {
        NumberEntity: Zj
    };
    const {
        ArtifactEntity: eG
    } = mS, {
        ClientWelcome: tG,
        ClientConnected: rG,
        ClientDisconnected: nG,
        ClientKicked: iG,
        ClientSend: sG
    } = Jh, {
        CountGroup: aG
    } = Qh, {
        DoodleEntity: oG,
        DoodleLine: lG,
        DoodleLineRemoved: cG
    } = ip, {
        StackEntity: uG,
        StackElement: fG,
        StackElements: dG
    } = vS, {
        DropEntity: hG
    } = yS, {
        Echo: pG
    } = zj, {
        LockEntity: gG
    } = Jj, {
        GCounter: mG
    } = Zh, {
        GetAudienceReply: vG,
        RoomExit: yG,
        RoomLock: _G
    } = Nc, {
        Notification: bG
    } = pS, {
        OK: EG
    } = _S, {
        NumberEntity: TG
    } = bS, {
        ObjectEcho: SG,
        ObjectEntity: OG
    } = ep, {
        PNCounter: xy
    } = tp, {
        Reply: wG
    } = gS, {
        TextEcho: $G,
        TextEntity: CG
    } = rp, {
        TextRing: IG
    } = np, {
        createError: Dy,
        ObservedError: AG
    } = rs;

    function Id(e, t, r) {
        switch (e) {
            case "ok":
                return new EG;
            case "echo":
                return new pG({
                    message: t.message
                });
            case "lock":
                return new gG({
                    key: t.key,
                    from: t.from
                });
            case "error":
                return Dy({
                    code: t.code,
                    message: t.msg
                });
            case "error/observed":
                return new AG({
                    to: t.to,
                    error: Dy({
                        code: t.error.code,
                        message: t.error.msg
                    })
                });
            case "string":
                return t;
            case "text":
                return new CG({
                    from: t.from,
                    key: t.key,
                    text: t.val,
                    version: t.version,
                    meta: r,
                    acl: t.acl
                });
            case "text/echo":
                return new $G({
                    message: t.message
                });
            case "object":
                return new OG({
                    from: t.from,
                    key: t.key,
                    val: t.val,
                    meta: r,
                    acl: t.acl
                });
            case "object/echo":
                return new SG({
                    message: t.message
                });
            case "drop":
                return new hG({
                    key: t.key
                });
            case "artifact":
                return new eG({
                    key: t.key,
                    artifactId: t.artifactId,
                    categoryId: t.categoryId,
                    rootId: t.rootId,
                    meta: r
                });
            case "client/connected":
                return new rG({
                    id: t.id,
                    userId: t.userId,
                    name: t.name,
                    role: t.role,
                    reconnect: t.reconnect
                });
            case "client/disconnected":
                return new nG({
                    id: t.id,
                    role: t.role
                });
            case "client/kicked":
                return new iG({
                    id: t.id,
                    banned: t.banned,
                    reason: t.reason
                });
            case "client/send":
                return new sG({
                    to: t.to,
                    from: t.from,
                    body: t.body,
                    userId: t.userID
                });
            case "client/welcome": {
                let n = new tG({
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
                        s[o] = Id(l[0], l[1], l[2])
                    }), n.entities = s
                }
                return n
            }
            case "doodle":
                return new oG({
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
                return new lG({
                    key: t.key,
                    line: t.val
                });
            case "doodle/line/removed":
                return new cG({
                    key: t.key,
                    index: t.index
                });
            case "stack":
                return new uG({
                    key: t.key,
                    size: t.size,
                    from: t.from,
                    version: t.version,
                    meta: t.meta,
                    acl: t.acl
                });
            case "stack/element":
                return new fG({
                    key: t.key,
                    val: t.val
                });
            case "stack/elements":
                return new dG({
                    key: t.key,
                    vals: t.vals
                });
            case "number":
                return new TG({
                    key: t.key,
                    val: t.val,
                    restrictions: t.restrictions,
                    from: t.from,
                    version: t.version,
                    meta: r,
                    acl: t.acl
                });
            case "room/exit":
                return new yG({
                    cause: t.cause
                });
            case "room/lock":
                return new _G;
            case "room/get-audience":
                return new vG({
                    connections: t.connections
                });
            case "audience":
                return new xy({
                    key: e,
                    count: t[1]
                });
            case "audience/count-group":
                return new aG({
                    key: t.key,
                    choices: t.choices,
                    meta: r
                });
            case "audience/text-ring":
                return new IG({
                    key: t.key,
                    elements: t.elements,
                    meta: r
                });
            case "audience/g-counter":
                return new mG({
                    key: t.key,
                    count: t.count,
                    meta: r
                });
            case "audience/pn-counter":
                return new xy({
                    key: t.key,
                    count: t.count,
                    meta: r
                });
            default:
                return console.error(`failed to parse result of type ${e}: ${JSON.stringify(t,null,2)}`), t
        }
    }

    function NG(e) {
        let t = JSON.parse(e.data),
            r = t.opcode || t.type;
        return t.re ? new wG({
            pc: t.pc,
            re: t.re,
            opcode: r,
            result: Id(r, t.result)
        }) : new bG({
            pc: t.pc,
            opcode: r,
            result: Id(r, t.result)
        })
    }
    var PG = {
        parseResponseMessage: NG
    };
    const My = hj,
        RG = IT,
        LG = Xh.exports,
        {
            CallError: kG
        } = rs,
        {
            ClientWelcome: xG
        } = Jh,
        {
            CountGroup: DG
        } = Qh,
        {
            GCounter: MG
        } = Zh,
        {
            Notification: Fy
        } = pS,
        {
            ObjectEntity: If
        } = ep,
        {
            PNCounter: FG
        } = tp,
        {
            Reply: BG
        } = gS,
        {
            Request: UG
        } = Dj,
        {
            TextEntity: Af
        } = rp,
        {
            TextRing: jG
        } = np,
        {
            parseResponseMessage: GG
        } = PG,
        {
            DoodleEntity: WG
        } = ip,
        {
            StackEntity: HG
        } = vS,
        KG = 1e3 + Math.floor(Math.random() * 500),
        By = 13e3;
    class VG extends LG {
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
            const r = RG.stringify(t),
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
                this.conn = new My(n, "ecast-v0"), this.conn.onmessage = g => {
                    this.debugLog(`recv <- ${JSON.stringify(JSON.parse(g.data),null,2)}`);
                    const _ = GG(g);
                    if (_ instanceof BG) this.onReply(_);
                    else if (_ instanceof Fy) {
                        if (_.result instanceof xG) u = !0, this.id = _.result.id, this.deviceId = _.result.deviceId, this.entities = _.result.entities, this.secret = _.result.secret, _.result.name && (this.name = _.result.name), f(_.result);
                        else if (!l) {
                            h(_.result);
                            return
                        }
                        this.onNotification(_)
                    } else console.error(`failed to parse response messsage: ${_}`)
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
                r = KG;
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
                if (r >= By) {
                    this.debugLog("reconnect failed!", n), this.emit("socketClose", n);
                    return
                }
                t += 1, this.debugLog("waiting", r), this.emit("connection", {
                    status: "waiting",
                    attempt: t
                }), await this.sleep(r), r = Math.min(By, r * 2)
            }
        }
        disconnect() {
            !this.conn || (this.conn.close(), this.conn.onmessage = null, this.conn.onerror = null, this.conn.onopen = null, this.conn.onclose = null, this.conn = null)
        }
        onReply(t) {
            const r = t.re,
                n = this.pending[r];
            if (!n) {
                const s = new Fy(t);
                s.re = r, this.emit("notification", s);
                return
            }
            delete this.pending[r], t.result instanceof kG ? n.reject(t.result) : n.resolve(t.result)
        }
        onNotification(t) {
            typeof t.result.whenReceived == "function" && t.result.whenReceived(this), this.emit("notification", t), this.emit(t.opcode, t.result)
        }
        send(t, r = {}) {
            if (!this.conn) throw new Error("No connection available");
            if (this.conn.readyState !== My.OPEN) throw new Error(`Socket not ready to send, readyState is ${this.conn.readyState}`);
            const n = ++this.seq,
                s = new UG({
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
            return this.entities[t] = new WG({
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
            return this.entities[t] = new HG({
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
            return this.entities[t] = new DG({
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
            return this.entities[t] = new MG({
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
            return this.entities[t] = new FG({
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
            return this.entities[t] = new jG({
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
    var qG = {
        WSClient: VG
    };
    const {
        APIClient: YG
    } = dj, {
        WSClient: zG
    } = qG, {
        CreateRoomReply: XG,
        GetRoomReply: JG
    } = Nc, {
        ClientWelcome: QG,
        ClientDisconnected: ZG
    } = Jh, {
        ArtifactEntity: e3
    } = mS, {
        GCounter: t3
    } = Zh, {
        NumberEntity: r3
    } = bS, {
        TextEntity: n3
    } = rp, {
        DoodleEntity: i3
    } = ip, {
        ObjectEntity: s3
    } = ep, {
        CountGroup: a3
    } = Qh, {
        DropEntity: o3
    } = yS, {
        OK: l3
    } = _S, {
        RoomExit: c3
    } = Nc, {
        TextRing: u3
    } = np, {
        PNCounter: f3
    } = tp;
    var Or = {
        APIClient: YG,
        WSClient: zG,
        ClientWelcome: QG,
        CreateRoomReply: XG,
        DropEntity: o3,
        GetRoomReply: JG,
        ClientDisconnected: ZG,
        RoomExit: c3,
        OK: l3,
        ArtifactEntity: e3,
        DoodleEntity: i3,
        NumberEntity: r3,
        CountGroup: a3,
        GCounter: t3,
        ObjectEntity: s3,
        PNCounter: f3,
        TextEntity: n3,
        TextRing: u3
    };
    const d3 = [{
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
        Ad = e => d3.find(t => t.tag === e || t.categoryId === e);

    function Nd(...e) {
        console.log(...e)
    }
    class h3 {
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
            Nd("[Debug] pushEntity", t), t instanceof Or.ArtifactEntity ? this.items.push({
                type: "artifact",
                ...t
            }) : t instanceof Or.DoodleEntity ? this.items.push({
                type: "doodle",
                ...t
            }) : t instanceof Or.DropEntity ? this.items.push({
                key: t.key,
                type: "drop"
            }) : t instanceof Or.NumberEntity ? this.items.push({
                key: t.key,
                type: "number",
                value: t.val,
                meta: t.meta,
                restrictions: t.restrictions
            }) : t instanceof Or.ObjectEntity ? (t.val.kind && (this.automarkPendingLabel = t.val.kind), this.items.push({
                key: t.key,
                type: "object",
                value: t.val,
                meta: t.meta
            })) : t instanceof Or.TextEntity && this.items.push({
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
            const n = Ad(this.room.appTag),
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
                    _ = `*${(f=n==null?void 0:n.name)!=null?f:this.room.appTag} :${this.room.appTag}:* (${o}, ${l}) 

 From: ${this.client.name},
${r}`,
                    E = [{
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
                    $ = {
                        unfurl_links: !1,
                        blocks: E
                    };
                if (this.room) {
                    $.icon_emoji = this.room.appTag;
                    const U = Ad(this.room.appTag);
                    $.username = `DebugRecorder ${U?U.name:this.room.appTag}`
                }
                const M = await (await fetch(h, {
                    method: "POST",
                    body: JSON.stringify($)
                })).text();
                Nd("[Debug] sendToSlack", M)
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

    function p3(e) {
        throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
    }
    var Uy = {
        exports: {}
    };
    (function(e, t) {
        (function(r, n) {
            n(t)
        })(Lt, function(r) {
            var n = typeof window < "u" ? window : typeof Lt < "u" ? Lt : typeof self < "u" ? self : {},
                s = function(T, P) {
                    if (P = P.split(":")[0], T = +T, !T) return !1;
                    switch (P) {
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
                for (var T = /([^=?#&]+)=?([^&]*)/g, P = {}, S; S = T.exec(w);) {
                    var L = u(S[1]),
                        Z = u(S[2]);
                    L === null || Z === null || L in P || (P[L] = Z)
                }
                return P
            }

            function g(w, T) {
                T = T || "";
                var P = [],
                    S, L;
                typeof T != "string" && (T = "?");
                for (L in w)
                    if (o.call(w, L)) {
                        if (S = w[L], !S && (S === null || S === l || isNaN(S)) && (S = ""), L = f(L), S = f(S), L === null || S === null) continue;
                        P.push(L + "=" + S)
                    } return P.length ? T + P.join("&") : ""
            }
            var _ = g,
                E = h,
                $ = {
                    stringify: _,
                    parse: E
                },
                R = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
                M = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,
                U = "[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]",
                C = new RegExp("^" + U + "+");

            function V(w) {
                return (w || "").toString().replace(C, "")
            }
            var X = [
                    ["#", "hash"],
                    ["?", "query"],
                    function(T, P) {
                        return Q(P.protocol) ? T.replace(/\\/g, "/") : T
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

            function j(w) {
                var T;
                typeof window < "u" ? T = window : typeof n < "u" ? T = n : typeof self < "u" ? T = self : T = {};
                var P = T.location || {};
                w = w || P;
                var S = {},
                    L = typeof w,
                    Z;
                if (w.protocol === "blob:") S = new ue(unescape(w.pathname), {});
                else if (L === "string") {
                    S = new ue(w, {});
                    for (Z in W) delete S[Z]
                } else if (L === "object") {
                    for (Z in w) Z in W || (S[Z] = w[Z]);
                    S.slashes === void 0 && (S.slashes = R.test(w.href))
                }
                return S
            }

            function Q(w) {
                return w === "file:" || w === "ftp:" || w === "http:" || w === "https:" || w === "ws:" || w === "wss:"
            }

            function oe(w, T) {
                w = V(w), T = T || {};
                var P = M.exec(w),
                    S = P[1] ? P[1].toLowerCase() : "",
                    L = !!P[2],
                    Z = !!P[3],
                    ne = 0,
                    _e;
                return L ? Z ? (_e = P[2] + P[3] + P[4], ne = P[2].length + P[3].length) : (_e = P[2] + P[4], ne = P[2].length) : Z ? (_e = P[3] + P[4], ne = P[3].length) : _e = P[4], S === "file:" ? ne >= 2 && (_e = _e.slice(2)) : Q(S) ? _e = P[4] : S ? L && (_e = _e.slice(2)) : ne >= 2 && Q(T.protocol) && (_e = P[4]), {
                    protocol: S,
                    slashes: L || Q(S),
                    slashesCount: ne,
                    rest: _e
                }
            }

            function le(w, T) {
                if (w === "") return T;
                for (var P = (T || "/").split("/").slice(0, -1).concat(w.split("/")), S = P.length, L = P[S - 1], Z = !1, ne = 0; S--;) P[S] === "." ? P.splice(S, 1) : P[S] === ".." ? (P.splice(S, 1), ne++) : ne && (S === 0 && (Z = !0), P.splice(S, 1), ne--);
                return Z && P.unshift(""), (L === "." || L === "..") && P.push(""), P.join("/")
            }

            function ue(w, T, P) {
                if (w = V(w), !(this instanceof ue)) return new ue(w, T, P);
                var S, L, Z, ne, _e, Te, ft = X.slice(),
                    ir = typeof T,
                    Me = this,
                    da = 0;
                for (ir !== "object" && ir !== "string" && (P = T, T = null), P && typeof P != "function" && (P = $.parse), T = j(T), L = oe(w || "", T), S = !L.protocol && !L.slashes, Me.slashes = L.slashes || S && T.slashes, Me.protocol = L.protocol || T.protocol || "", w = L.rest, (Me.protocol === "file:" || !L.slashes && (L.protocol || L.slashesCount < 2 || !Q(Me.protocol))) && (ft[3] = [/(.*)/, "pathname"]); da < ft.length; da++) {
                    if (ne = ft[da], typeof ne == "function") {
                        w = ne(w, Me);
                        continue
                    }
                    Z = ne[0], Te = ne[1], Z !== Z ? Me[Te] = w : typeof Z == "string" ? ~(_e = w.indexOf(Z)) && (typeof ne[2] == "number" ? (Me[Te] = w.slice(0, _e), w = w.slice(_e + ne[2])) : (Me[Te] = w.slice(_e), w = w.slice(0, _e))) : (_e = Z.exec(w)) && (Me[Te] = _e[1], w = w.slice(0, _e.index)), Me[Te] = Me[Te] || S && ne[3] && T[Te] || "", ne[4] && (Me[Te] = Me[Te].toLowerCase())
                }
                P && (Me.query = P(Me.query)), S && T.slashes && Me.pathname.charAt(0) !== "/" && (Me.pathname !== "" || T.pathname !== "") && (Me.pathname = le(Me.pathname, T.pathname)), Me.pathname.charAt(0) !== "/" && Q(Me.protocol) && (Me.pathname = "/" + Me.pathname), s(Me.port, Me.protocol) || (Me.host = Me.hostname, Me.port = ""), Me.username = Me.password = "", Me.auth && (ne = Me.auth.split(":"), Me.username = ne[0] || "", Me.password = ne[1] || ""), Me.origin = Me.protocol !== "file:" && Q(Me.protocol) && Me.host ? Me.protocol + "//" + Me.host : "null", Me.href = Me.toString()
            }

            function Ae(w, T, P) {
                var S = this;
                switch (w) {
                    case "query":
                        typeof T == "string" && T.length && (T = (P || $.parse)(T)), S[w] = T;
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
                        S.protocol = T.toLowerCase(), S.slashes = !P;
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
                for (var Z = 0; Z < X.length; Z++) {
                    var ne = X[Z];
                    ne[4] && (S[ne[1]] = S[ne[1]].toLowerCase())
                }
                return S.origin = S.protocol !== "file:" && Q(S.protocol) && S.host ? S.protocol + "//" + S.host : "null", S.href = S.toString(), S
            }

            function Ce(w) {
                (!w || typeof w != "function") && (w = $.stringify);
                var T, P = this,
                    S = P.protocol;
                S && S.charAt(S.length - 1) !== ":" && (S += ":");
                var L = S + (P.slashes || Q(P.protocol) ? "//" : "");
                return P.username && (L += P.username, P.password && (L += ":" + P.password), L += "@"), L += P.host + P.pathname, T = typeof P.query == "object" ? w(P.query) : P.query, T && (L += T.charAt(0) !== "?" ? "?" + T : T), P.hash && (L += P.hash), L
            }
            ue.prototype = {
                set: Ae,
                toString: Ce
            }, ue.extractProtocol = oe, ue.location = j, ue.trimLeft = V, ue.qs = $;
            var fe = ue;

            function $e(w, T) {
                setTimeout(function(P) {
                    return w.call(P)
                }, 4, T)
            }

            function F(w, T) {
                typeof process < "u" && console[w].call(null, T)
            }

            function ie(w, T) {
                w === void 0 && (w = []);
                var P = [];
                return w.forEach(function(S) {
                    T(S) || P.push(S)
                }), P
            }

            function de(w, T) {
                w === void 0 && (w = []);
                var P = [];
                return w.forEach(function(S) {
                    T(S) && P.push(S)
                }), P
            }
            var be = function() {
                this.listeners = {}
            };
            be.prototype.addEventListener = function(T, P) {
                typeof P == "function" && (Array.isArray(this.listeners[T]) || (this.listeners[T] = []), de(this.listeners[T], function(S) {
                    return S === P
                }).length === 0 && this.listeners[T].push(P))
            }, be.prototype.removeEventListener = function(T, P) {
                var S = this.listeners[T];
                this.listeners[T] = ie(S, function(L) {
                    return L === P
                })
            }, be.prototype.dispatchEvent = function(T) {
                for (var P = this, S = [], L = arguments.length - 1; L-- > 0;) S[L] = arguments[L + 1];
                var Z = T.type,
                    ne = this.listeners[Z];
                return Array.isArray(ne) ? (ne.forEach(function(_e) {
                    S.length > 0 ? _e.apply(P, S) : _e.call(P, T)
                }), !0) : !1
            };

            function ve(w) {
                var T = w.indexOf("?");
                return T >= 0 ? w.slice(0, T) : w
            }
            var Oe = function() {
                this.urlMap = {}
            };
            Oe.prototype.attachWebSocket = function(T, P) {
                var S = ve(P),
                    L = this.urlMap[S];
                if (L && L.server && L.websockets.indexOf(T) === -1) return L.websockets.push(T), L.server
            }, Oe.prototype.addMembershipToRoom = function(T, P) {
                var S = this.urlMap[ve(T.url)];
                S && S.server && S.websockets.indexOf(T) !== -1 && (S.roomMemberships[P] || (S.roomMemberships[P] = []), S.roomMemberships[P].push(T))
            }, Oe.prototype.attachServer = function(T, P) {
                var S = ve(P),
                    L = this.urlMap[S];
                if (!L) return this.urlMap[S] = {
                    server: T,
                    websockets: [],
                    roomMemberships: {}
                }, T
            }, Oe.prototype.serverLookup = function(T) {
                var P = ve(T),
                    S = this.urlMap[P];
                if (S) return S.server
            }, Oe.prototype.websocketsLookup = function(T, P, S) {
                var L = ve(T),
                    Z, ne = this.urlMap[L];
                if (Z = ne ? ne.websockets : [], P) {
                    var _e = ne.roomMemberships[P];
                    Z = _e || []
                }
                return S ? Z.filter(function(Te) {
                    return Te !== S
                }) : Z
            }, Oe.prototype.removeServer = function(T) {
                delete this.urlMap[ve(T)]
            }, Oe.prototype.removeWebSocket = function(T, P) {
                var S = ve(P),
                    L = this.urlMap[S];
                L && (L.websockets = ie(L.websockets, function(Z) {
                    return Z === T
                }))
            }, Oe.prototype.removeMembershipFromRoom = function(T, P) {
                var S = this.urlMap[ve(T.url)],
                    L = S.roomMemberships[P];
                S && L !== null && (S.roomMemberships[P] = ie(L, function(Z) {
                    return Z === T
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
            It.prototype.stopPropagation = function() {}, It.prototype.stopImmediatePropagation = function() {}, It.prototype.initEvent = function(T, P, S) {
                T === void 0 && (T = "undefined"), P === void 0 && (P = !1), S === void 0 && (S = !1), this.type = "" + T, this.bubbles = Boolean(P), this.cancelable = Boolean(S)
            };
            var Cr = function(w) {
                    function T(P, S) {
                        if (S === void 0 && (S = {}), w.call(this), !P) throw new TypeError(tt.EVENT_ERROR + " 1 argument required, but only 0 present.");
                        if (typeof S != "object") throw new TypeError(tt.EVENT_ERROR + " parameter 2 ('eventInitDict') is not an object.");
                        var L = S.bubbles,
                            Z = S.cancelable;
                        this.type = "" + P, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = Z ? Boolean(Z) : !1, this.cancelBubble = !1, this.bubbles = L ? Boolean(L) : !1
                    }
                    return w && (T.__proto__ = w), T.prototype = Object.create(w && w.prototype), T.prototype.constructor = T, T
                }(It),
                nr = function(w) {
                    function T(P, S) {
                        if (S === void 0 && (S = {}), w.call(this), !P) throw new TypeError(tt.EVENT.MESSAGE + " 1 argument required, but only 0 present.");
                        if (typeof S != "object") throw new TypeError(tt.EVENT.MESSAGE + " parameter 2 ('eventInitDict') is not an object");
                        var L = S.bubbles,
                            Z = S.cancelable,
                            ne = S.data,
                            _e = S.origin,
                            Te = S.lastEventId,
                            ft = S.ports;
                        this.type = "" + P, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = Z ? Boolean(Z) : !1, this.canncelBubble = !1, this.bubbles = L ? Boolean(L) : !1, this.origin = "" + _e, this.ports = typeof ft > "u" ? null : ft, this.data = typeof ne > "u" ? null : ne, this.lastEventId = "" + (Te || "")
                    }
                    return w && (T.__proto__ = w), T.prototype = Object.create(w && w.prototype), T.prototype.constructor = T, T
                }(It),
                vr = function(w) {
                    function T(P, S) {
                        if (S === void 0 && (S = {}), w.call(this), !P) throw new TypeError(tt.EVENT.CLOSE + " 1 argument required, but only 0 present.");
                        if (typeof S != "object") throw new TypeError(tt.EVENT.CLOSE + " parameter 2 ('eventInitDict') is not an object");
                        var L = S.bubbles,
                            Z = S.cancelable,
                            ne = S.code,
                            _e = S.reason,
                            Te = S.wasClean;
                        this.type = "" + P, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = Z ? Boolean(Z) : !1, this.cancelBubble = !1, this.bubbles = L ? Boolean(L) : !1, this.code = typeof ne == "number" ? parseInt(ne, 10) : 0, this.reason = "" + (_e || ""), this.wasClean = Te ? Boolean(Te) : !1
                    }
                    return w && (T.__proto__ = w), T.prototype = Object.create(w && w.prototype), T.prototype.constructor = T, T
                }(It);

            function at(w) {
                var T = w.type,
                    P = w.target,
                    S = new Cr(T);
                return P && (S.target = P, S.srcElement = P, S.currentTarget = P), S
            }

            function St(w) {
                var T = w.type,
                    P = w.origin,
                    S = w.data,
                    L = w.target,
                    Z = new nr(T, {
                        data: S,
                        origin: P
                    });
                return L && (Z.target = L, Z.srcElement = L, Z.currentTarget = L), Z
            }

            function ot(w) {
                var T = w.code,
                    P = w.reason,
                    S = w.type,
                    L = w.target,
                    Z = w.wasClean;
                Z || (Z = T === Ge.CLOSE_NORMAL || T === Ge.CLOSE_NO_STATUS);
                var ne = new vr(S, {
                    code: T,
                    reason: P,
                    wasClean: Z
                });
                return L && (ne.target = L, ne.srcElement = L, ne.currentTarget = L), ne
            }

            function kt(w, T, P) {
                w.readyState = z.CLOSING;
                var S = Fe.serverLookup(w.url),
                    L = ot({
                        type: "close",
                        target: w.target,
                        code: T,
                        reason: P
                    }),
                    Z = ot({
                        type: "server::close",
                        target: w,
                        code: T,
                        reason: P
                    });
                $e(function() {
                    Fe.removeWebSocket(w, w.url), w.readyState = z.CLOSED, w.dispatchEvent(L), w.dispatchEvent(Z), S && S.dispatchEvent(L, S)
                }, w)
            }

            function Ht(w, T, P) {
                w.readyState = z.CLOSING;
                var S = Fe.serverLookup(w.url),
                    L = ot({
                        type: "close",
                        target: w.target,
                        code: T,
                        reason: P,
                        wasClean: !1
                    }),
                    Z = ot({
                        type: "server::close",
                        target: w,
                        code: T,
                        reason: P,
                        wasClean: !1
                    }),
                    ne = at({
                        type: "error",
                        target: w.target
                    });
                $e(function() {
                    Fe.removeWebSocket(w, w.url), w.readyState = z.CLOSED, w.dispatchEvent(ne), w.dispatchEvent(L), w.dispatchEvent(Z), S && S.dispatchEvent(L, S)
                }, w)
            }

            function xt(w) {
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
                            kt(T, _e, Te)
                        } : L === "send" ? function(ne) {
                            ne = xt(ne), w.dispatchEvent(St({
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
                    P = T.pathname,
                    S = T.protocol,
                    L = T.hash;
                if (!w) throw new TypeError(tt.CONSTRUCTOR_ERROR + " 1 argument required, but only 0 present.");
                if (P || (T.pathname = "/"), S === "") throw new SyntaxError(tt.CONSTRUCTOR_ERROR + " The URL '" + T.toString() + "' is invalid.");
                if (S !== "ws:" && S !== "wss:") throw new SyntaxError(tt.CONSTRUCTOR_ERROR + " The URL's scheme must be either 'ws' or 'wss'. '" + S + "' is not allowed.");
                if (L !== "") throw new SyntaxError(tt.CONSTRUCTOR_ERROR + " The URL contains a fragment identifier ('" + L + "'). Fragment identifiers are not allowed in WebSocket URLs.");
                return T.toString()
            }

            function B(w) {
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
                    P = Object.keys(T).filter(function(S) {
                        return T[S] > 1
                    });
                if (P.length > 0) throw new SyntaxError(tt.CONSTRUCTOR_ERROR + " The subprotocol '" + P[0] + "' is duplicated.");
                return w
            }
            var z = function(w) {
                function T(S, L) {
                    w.call(this), this._onopen = null, this._onmessage = null, this._onerror = null, this._onclose = null, this.url = D(S), L = B(L), this.protocol = L[0] || "", this.binaryType = "blob", this.readyState = T.CONNECTING;
                    var Z = p(this),
                        ne = Fe.attachWebSocket(Z, this.url);
                    $e(function() {
                        if (ne)
                            if (ne.options.verifyClient && typeof ne.options.verifyClient == "function" && !ne.options.verifyClient()) this.readyState = T.CLOSED, F("error", "WebSocket connection to '" + this.url + "' failed: HTTP Authentication failed; no valid credentials available"), Fe.removeWebSocket(Z, this.url), this.dispatchEvent(at({
                                type: "error",
                                target: this
                            })), this.dispatchEvent(ot({
                                type: "close",
                                target: this,
                                code: Ge.CLOSE_NORMAL
                            }));
                            else {
                                if (ne.options.selectProtocol && typeof ne.options.selectProtocol == "function") {
                                    var Te = ne.options.selectProtocol(L),
                                        ft = Te !== "",
                                        ir = L.indexOf(Te) !== -1;
                                    if (ft && !ir) {
                                        this.readyState = T.CLOSED, F("error", "WebSocket connection to '" + this.url + "' failed: Invalid Sub-Protocol"), Fe.removeWebSocket(Z, this.url), this.dispatchEvent(at({
                                            type: "error",
                                            target: this
                                        })), this.dispatchEvent(ot({
                                            type: "close",
                                            target: this,
                                            code: Ge.CLOSE_NORMAL
                                        }));
                                        return
                                    }
                                    this.protocol = Te
                                }
                                this.readyState = T.OPEN, this.dispatchEvent(at({
                                    type: "open",
                                    target: this
                                })), ne.dispatchEvent(at({
                                    type: "connection"
                                }), Z)
                            }
                        else this.readyState = T.CLOSED, this.dispatchEvent(at({
                            type: "error",
                            target: this
                        })), this.dispatchEvent(ot({
                            type: "close",
                            target: this,
                            code: Ge.CLOSE_NORMAL
                        })), F("error", "WebSocket connection to '" + this.url + "' failed")
                    }, this)
                }
                w && (T.__proto__ = w), T.prototype = Object.create(w && w.prototype), T.prototype.constructor = T;
                var P = {
                    onopen: {},
                    onmessage: {},
                    onclose: {},
                    onerror: {}
                };
                return P.onopen.get = function() {
                    return this._onopen
                }, P.onmessage.get = function() {
                    return this._onmessage
                }, P.onclose.get = function() {
                    return this._onclose
                }, P.onerror.get = function() {
                    return this._onerror
                }, P.onopen.set = function(S) {
                    this.removeEventListener("open", this._onopen), this._onopen = S, this.addEventListener("open", S)
                }, P.onmessage.set = function(S) {
                    this.removeEventListener("message", this._onmessage), this._onmessage = S, this.addEventListener("message", S)
                }, P.onclose.set = function(S) {
                    this.removeEventListener("close", this._onclose), this._onclose = S, this.addEventListener("close", S)
                }, P.onerror.set = function(S) {
                    this.removeEventListener("error", this._onerror), this._onerror = S, this.addEventListener("error", S)
                }, T.prototype.send = function(L) {
                    var Z = this;
                    if (this.readyState === T.CLOSING || this.readyState === T.CLOSED) throw new Error("WebSocket is already in CLOSING or CLOSED state");
                    var ne = St({
                            type: "server::message",
                            origin: this.url,
                            data: xt(L)
                        }),
                        _e = Fe.serverLookup(this.url);
                    _e && $e(function() {
                        Z.dispatchEvent(ne, L)
                    }, _e)
                }, T.prototype.close = function(L, Z) {
                    if (L !== void 0 && (typeof L != "number" || L !== 1e3 && (L < 3e3 || L > 4999))) throw new TypeError(tt.CLOSE_ERROR + " The code must be either 1000, or between 3000 and 4999. " + L + " is neither.");
                    if (Z !== void 0) {
                        var ne = O(Z);
                        if (ne > 123) throw new SyntaxError(tt.CLOSE_ERROR + " The message must not be greater than 123 bytes.")
                    }
                    if (!(this.readyState === T.CLOSING || this.readyState === T.CLOSED)) {
                        var _e = p(this);
                        this.readyState === T.CONNECTING ? Ht(_e, L || Ge.CLOSE_ABNORMAL, Z) : kt(_e, L || Ge.CLOSE_NO_STATUS, Z)
                    }
                }, Object.defineProperties(T.prototype, P), T
            }(be);
            z.CONNECTING = 0, z.prototype.CONNECTING = z.CONNECTING, z.OPEN = 1, z.prototype.OPEN = z.OPEN, z.CLOSING = 2, z.prototype.CLOSING = z.CLOSING, z.CLOSED = 3, z.prototype.CLOSED = z.CLOSED;
            var ce = function(w) {
                return w.reduce(function(T, P) {
                    return T.indexOf(P) > -1 ? T : T.concat(P)
                }, [])
            };

            function se() {
                return typeof window < "u" ? window : typeof process == "object" && typeof p3 == "function" && typeof Lt == "object" ? Lt : this
            }
            var re = {
                    mock: !0,
                    verifyClient: null,
                    selectProtocol: null
                },
                A = function(w) {
                    function T(P, S) {
                        S === void 0 && (S = re), w.call(this);
                        var L = new fe(P);
                        L.pathname || (L.pathname = "/"), this.url = L.toString(), this.originalWebSocket = null;
                        var Z = Fe.attachServer(this, this.url);
                        if (!Z) throw this.dispatchEvent(at({
                            type: "error"
                        })), new Error("A mock server is already listening on this url");
                        this.options = Object.assign({}, re, S), this.options.mock && this.mockWebsocket()
                    }
                    return w && (T.__proto__ = w), T.prototype = Object.create(w && w.prototype), T.prototype.constructor = T, T.prototype.mockWebsocket = function() {
                        var S = se();
                        this.originalWebSocket = S.WebSocket, S.WebSocket = z
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
                            Z = S.reason,
                            ne = S.wasClean,
                            _e = Fe.websocketsLookup(this.url);
                        Fe.removeServer(this.url), _e.forEach(function(Te) {
                            Te.readyState = z.CLOSED, Te.dispatchEvent(ot({
                                type: "close",
                                target: Te.target,
                                code: L || Ge.CLOSE_NORMAL,
                                reason: Z || "",
                                wasClean: ne
                            }))
                        }), this.dispatchEvent(ot({
                            type: "close"
                        }), this)
                    }, T.prototype.emit = function(S, L, Z) {
                        var ne = this;
                        Z === void 0 && (Z = {});
                        var _e = Z.websockets;
                        _e || (_e = Fe.websocketsLookup(this.url)), typeof Z != "object" || arguments.length > 3 ? (L = Array.prototype.slice.call(arguments, 1, arguments.length), L = L.map(function(Te) {
                            return xt(Te)
                        })) : L = xt(L), _e.forEach(function(Te) {
                            Array.isArray(L) ? Te.dispatchEvent.apply(Te, [St({
                                type: S,
                                data: L,
                                origin: ne.url,
                                target: Te.target
                            })].concat(L)) : Te.dispatchEvent(St({
                                type: S,
                                data: L,
                                origin: ne.url,
                                target: Te.target
                            }))
                        })
                    }, T.prototype.clients = function() {
                        return Fe.websocketsLookup(this.url)
                    }, T.prototype.to = function(S, L, Z) {
                        var ne = this;
                        Z === void 0 && (Z = []);
                        var _e = this,
                            Te = ce(Z.concat(Fe.websocketsLookup(this.url, S, L)));
                        return {
                            to: function(ft, ir) {
                                return ne.to.call(ne, ft, ir, Te)
                            },
                            emit: function(ir, Me) {
                                _e.emit(ir, Me, {
                                    websockets: Te
                                })
                            }
                        }
                    }, T.prototype.in = function() {
                        for (var S = [], L = arguments.length; L--;) S[L] = arguments[L];
                        return this.to.apply(null, S)
                    }, T.prototype.simulate = function(S) {
                        var L = Fe.websocketsLookup(this.url);
                        S === "error" && L.forEach(function(Z) {
                            Z.readyState = z.CLOSED, Z.dispatchEvent(at({
                                type: "error"
                            }))
                        })
                    }, T
                }(be);
            A.of = function(T) {
                return new A(T)
            };
            var K = function(w) {
                function T(S, L) {
                    var Z = this;
                    S === void 0 && (S = "socket.io"), L === void 0 && (L = ""), w.call(this), this.binaryType = "blob";
                    var ne = new fe(S);
                    ne.pathname || (ne.pathname = "/"), this.url = ne.toString(), this.readyState = T.CONNECTING, this.protocol = "", this.target = this, typeof L == "string" || typeof L == "object" && L !== null ? this.protocol = L : Array.isArray(L) && L.length > 0 && (this.protocol = L[0]);
                    var _e = Fe.attachWebSocket(this, this.url);
                    $e(function() {
                        _e ? (this.readyState = T.OPEN, _e.dispatchEvent(at({
                            type: "connection"
                        }), _e, this), _e.dispatchEvent(at({
                            type: "connect"
                        }), _e, this), this.dispatchEvent(at({
                            type: "connect",
                            target: this
                        }))) : (this.readyState = T.CLOSED, this.dispatchEvent(at({
                            type: "error",
                            target: this
                        })), this.dispatchEvent(ot({
                            type: "close",
                            target: this,
                            code: Ge.CLOSE_NORMAL
                        })), F("error", "Socket.io connection to '" + this.url + "' failed"))
                    }, this), this.addEventListener("close", function(Te) {
                        Z.dispatchEvent(ot({
                            type: "disconnect",
                            target: Te.target,
                            code: Te.code
                        }))
                    })
                }
                w && (T.__proto__ = w), T.prototype = Object.create(w && w.prototype), T.prototype.constructor = T;
                var P = {
                    broadcast: {}
                };
                return T.prototype.close = function() {
                    if (this.readyState === T.OPEN) {
                        var L = Fe.serverLookup(this.url);
                        return Fe.removeWebSocket(this, this.url), this.readyState = T.CLOSED, this.dispatchEvent(ot({
                            type: "close",
                            target: this,
                            code: Ge.CLOSE_NORMAL
                        })), L && L.dispatchEvent(ot({
                            type: "disconnect",
                            target: this,
                            code: Ge.CLOSE_NORMAL
                        }), L), this
                    }
                }, T.prototype.disconnect = function() {
                    return this.close()
                }, T.prototype.emit = function(L) {
                    for (var Z = [], ne = arguments.length - 1; ne-- > 0;) Z[ne] = arguments[ne + 1];
                    if (this.readyState !== T.OPEN) throw new Error("SocketIO is already in CLOSING or CLOSED state");
                    var _e = St({
                            type: L,
                            origin: this.url,
                            data: Z
                        }),
                        Te = Fe.serverLookup(this.url);
                    return Te && Te.dispatchEvent.apply(Te, [_e].concat(Z)), this
                }, T.prototype.send = function(L) {
                    return this.emit("message", L), this
                }, P.broadcast.get = function() {
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
                }, T.prototype.on = function(L, Z) {
                    return this.addEventListener(L, Z), this
                }, T.prototype.off = function(L, Z) {
                    this.removeEventListener(L, Z)
                }, T.prototype.hasListeners = function(L) {
                    var Z = this.listeners[L];
                    return Array.isArray(Z) ? !!Z.length : !1
                }, T.prototype.join = function(L) {
                    Fe.addMembershipToRoom(this, L)
                }, T.prototype.leave = function(L) {
                    Fe.removeMembershipFromRoom(this, L)
                }, T.prototype.to = function(L) {
                    return this.broadcast.to(L)
                }, T.prototype.in = function() {
                    return this.to.apply(null, arguments)
                }, T.prototype.dispatchEvent = function(L) {
                    for (var Z = this, ne = [], _e = arguments.length - 1; _e-- > 0;) ne[_e] = arguments[_e + 1];
                    var Te = L.type,
                        ft = this.listeners[Te];
                    if (!Array.isArray(ft)) return !1;
                    ft.forEach(function(ir) {
                        ne.length > 0 ? ir.apply(Z, ne) : ir.call(Z, L.data ? L.data : L)
                    })
                }, Object.defineProperties(T.prototype, P), T
            }(be);
            K.CONNECTING = 0, K.OPEN = 1, K.CLOSING = 2, K.CLOSED = 3;
            var he = function(T, P) {
                return new K(T, P)
            };
            he.connect = function(T, P) {
                return he(T, P)
            };
            var pe = A,
                Ne = z,
                De = he;
            r.Server = pe, r.WebSocket = Ne, r.SocketIO = De, Object.defineProperty(r, "__esModule", {
                value: !0
            })
        })
    })(Uy, Uy.exports);
    var ES = {
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
                    E = h.x - g,
                    $ = h.y - _;
                if (E !== 0 || $ !== 0) {
                    var R = ((u.x - g) * E + (u.y - _) * $) / (E * E + $ * $);
                    R > 1 ? (g = h.x, _ = h.y) : R > 0 && (g += E * R, _ += $ * R)
                }
                return E = u.x - g, $ = u.y - _, E * E + $ * $
            }

            function n(u, f) {
                for (var h = u[0], g = [h], _, E = 1, $ = u.length; E < $; E++) _ = u[E], t(_, h) > f && (g.push(_), h = _);
                return h !== _ && g.push(_), g
            }

            function s(u, f, h, g, _) {
                for (var E = g, $, R = f + 1; R < h; R++) {
                    var M = r(u[R], u[f], u[h]);
                    M > E && ($ = R, E = M)
                }
                E > g && ($ - f > 1 && s(u, f, $, g, _), _.push(u[$]), h - $ > 1 && s(u, $, h, g, _))
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
    })(ES);
    const TS = ES.exports;
    class g3 {
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
                x: Yt.toPrecision(n.x, this.precision),
                y: Yt.toPrecision(n.y, this.precision)
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
                points: TS(this.points, .5).map(r => ({
                    x: Yt.toPrecision(r.x, this.precision),
                    y: Yt.toPrecision(r.y, this.precision)
                })),
                weight: this.weight
            };
            return this.isInteracting = !1, this.points = [], t
        }
    }
    class m3 {
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
                n = TS(this.currentLine.points);
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
    class v3 {
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
            r.width && (this.width = r.width), r.height && (this.height = r.height), this.stageElement = t, this.setupElements(), this.setupEvents(), r.InteractCanvas ? this.interactCanvas = new r.InteractCanvas(t, this.width, this.height, r) : this.interactCanvas = new m3(t, this.width, this.height, r)
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
    class jy {
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
            var _;
            const n = Ad(r.room.appTag),
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
                    BASE_URL: "https://bundles.jackbox.tv/main/pp9-antique-freak/",
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
                const $ = await (await fetch(s, {
                    method: "POST",
                    body: JSON.stringify(g)
                })).text();
                Nd("[Feedback] sendToSlack", $)
            } catch (E) {
                console.error("[Feedback] sendToSlack", E)
            }
        }
    }
    const y3 = {
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
        _3 = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "prompts hidden on players\u2019 devices",
                VISIBILITY_CONTROLLER_ON: "prompts shown on players\u2019 devices",
                VISIBILITY_SCREEN_OFF: "prompts hidden on game screen",
                VISIBILITY_SCREEN_ON: "prompts shown on game screen"
            }
        },
        b3 = {
            DISCONNECTED: "Deine Verbindung wurde getrennt.",
            DRAWING_NOTHING: "Du musst etwas zeichnen!",
            PLAYER_KICKED: "Du wurdest aus dem Spiel von einem Moderator gekickt.",
            ROOM_DESTROYED: "Danke für's spielen!",
            ROOM_DISCONNECTED: "Verbindung getrennt",
            TEXT_NAUGHTY: "I\u2019m afraid you can\u2019t write that. Please be respectful of other players.",
            TEXT_NOTHING: "You can\u2019t enter nothing!",
            TITLE: "Error"
        },
        E3 = "LOADING",
        T3 = {
            JOINED_COUNT: "x | {count} of {maxPlayers} players joined | {count} of {maxPlayers} players joined",
            PLAYERS_NEEDED: "x | {count} player needed to start | {count} players needed to start",
            WAITING_FOR_VIP: "Waiting for {name} to start the game",
            WAITING_FOR_GAMEPAD: "Waiting for the game to start",
            GAME_STARTING: "Game is starting",
            BUTTON_START: "Press to Start",
            BUTTON_CANCEL: "Press to Cancel"
        },
        S3 = {
            GALLERY_LINK: "Visit the Gallery",
            PLAY_AGAIN: "Play again?",
            BUTTON_SAME_PLAYERS: "Same Players",
            BUTTON_NEW_PLAYERS: "New Players"
        },
        O3 = {
            AND: "AND",
            OR: "OR"
        },
        w3 = {
            BUTTON_SKIP: "Skip",
            BUTTON_NEXT: "Next",
            BUTTON_DONE: "Let\u2019s Go!"
        },
        $3 = {
            NAME: "AUDIENCE"
        },
        C3 = {
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
        I3 = {
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
        A3 = {
            ACTION: y3,
            ALT: _3,
            ERROR: b3,
            LOADING: E3,
            LOBBY: T3,
            POST_GAME: S3,
            SEPARATOR: O3,
            TUTORIAL: w3,
            AUDIENCE: $3,
            UGC: C3,
            TOAST: I3
        },
        N3 = {
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
        P3 = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "sujets non affich\xE9s sur les appareils des joueurs",
                VISIBILITY_CONTROLLER_ON: "sujets affich\xE9s sur les appareils des joueurs",
                VISIBILITY_SCREEN_OFF: "sujets non affich\xE9s sur l'\xE9cran de jeu",
                VISIBILITY_SCREEN_ON: "sujets affich\xE9s sur l'\xE9cran de jeu"
            }
        },
        R3 = {
            DISCONNECTED: "Vous avez \xE9t\xE9 d\xE9connect\xE9.",
            DRAWING_NOTHING: "Vous devez dessiner quelque chose\xA0!",
            ROOM_DESTROYED: "Merci d'avoir jou\xE9\xA0!",
            ROOM_DISCONNECTED: "D\xE9connexion",
            TEXT_NAUGHTY: "Je crains que vous ne puissiez pas \xE9crire \xE7a. Soyez respectueux des autres joueurs.",
            TEXT_NOTHING: "Vous ne pouvez rien entrer\xA0!",
            TITLE: "Erreur"
        },
        L3 = {
            JOINED_COUNT: "x | {count} joueur sur {maxPlayers} \xE0 rejoint la partie | {count} joueurs sur {maxPlayers} ont rejoint la partie",
            PLAYERS_NEEDED: "x | {count} joueur n\xE9cessaire pour commencer | {count} joueurs n\xE9cessaires pour commencer",
            WAITING_FOR_VIP: "En attente de {name} pour commencer la partie",
            WAITING_FOR_GAMEPAD: "En attente du d\xE9but de la partie",
            GAME_STARTING: "La partie commence",
            BUTTON_START: "Appuyer pour commencer",
            BUTTON_CANCEL: "Appuyer pour annuler"
        },
        k3 = {
            GALLERY_LINK: "Visiter la galerie",
            PLAY_AGAIN: "Rejouer\xA0?",
            BUTTON_SAME_PLAYERS: "Les m\xEAmes joueurs",
            BUTTON_NEW_PLAYERS: "De nouveaux joueurs"
        },
        x3 = {
            AND: "ET",
            OR: "OU"
        },
        D3 = {
            BUTTON_SKIP: "Passer",
            BUTTON_NEXT: "Suivant",
            BUTTON_DONE: "Allons-y\xA0!"
        },
        M3 = {
            NAME: "SPECTATEURS"
        },
        F3 = {
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
        B3 = {
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
        U3 = {
            ACTION: N3,
            ALT: P3,
            ERROR: R3,
            LOBBY: L3,
            POST_GAME: k3,
            SEPARATOR: x3,
            TUTORIAL: D3,
            AUDIENCE: M3,
            UGC: F3,
            TOAST: B3
        },
        j3 = {
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
        G3 = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "definizioni nascoste sui dispositivi dei giocatori",
                VISIBILITY_CONTROLLER_ON: "definizioni visualizzate sui dispositivi dei giocatori",
                VISIBILITY_SCREEN_OFF: "definizioni nascoste sullo schermo di gioco",
                VISIBILITY_SCREEN_ON: "definizioni visualizzate sullo schermo di gioco"
            }
        },
        W3 = {
            DISCONNECTED: "\xC8 stata effettuata la disconnessione.",
            DRAWING_NOTHING: "Devi disegnare qualcosa!",
            ROOM_DESTROYED: "Grazie per aver scelto di giocare con noi!",
            ROOM_DISCONNECTED: "Disconnessione effettuata",
            TEXT_NAUGHTY: "Purtroppo non puoi scrivere questa cosa. Abbi rispetto per gli altri giocatori.",
            TEXT_NOTHING: "Devi per forza inserire qualcosa!",
            TITLE: "Errore"
        },
        H3 = {
            JOINED_COUNT: "x | Sta partecipando {count} giocatore su {maxPlayers} | Stanno partecipando {count} giocatori su {maxPlayers}",
            PLAYERS_NEEDED: "x | Manca {count} giocatore per iniziare | Mancano {count} giocatori per iniziare",
            WAITING_FOR_VIP: "In attesa di {name} per iniziare la partita",
            WAITING_FOR_GAMEPAD: "In attesa d'iniziare la partita",
            GAME_STARTING: "La partita sta per iniziare",
            BUTTON_START: "Premi per avviare",
            BUTTON_CANCEL: "Premi per annullare"
        },
        K3 = {
            GALLERY_LINK: "Visita la galleria",
            PLAY_AGAIN: "Vuoi giocare di nuovo?",
            BUTTON_SAME_PLAYERS: "Stessi giocatori",
            BUTTON_NEW_PLAYERS: "Nuovi giocatori"
        },
        V3 = {
            AND: "E",
            OR: "O"
        },
        q3 = {
            BUTTON_SKIP: "Salta",
            BUTTON_NEXT: "Avanti",
            BUTTON_DONE: "Iniziamo!"
        },
        Y3 = {
            NAME: "PUBBLICO"
        },
        z3 = {
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
        X3 = {
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
        J3 = {
            ACTION: j3,
            ALT: G3,
            ERROR: W3,
            LOBBY: H3,
            POST_GAME: K3,
            SEPARATOR: V3,
            TUTORIAL: q3,
            AUDIENCE: Y3,
            UGC: z3,
            TOAST: X3
        },
        Q3 = {
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
        Z3 = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "Prompts auf Spielerger\xE4ten verborgen",
                VISIBILITY_CONTROLLER_ON: "Prompts auf Spielerger\xE4ten angezeigt",
                VISIBILITY_SCREEN_OFF: "Prompts auf Spielbildschirm verborgen",
                VISIBILITY_SCREEN_ON: "Prompts auf Spielbildschirm angezeigt"
            }
        },
        eW = {
            DISCONNECTED: "Deine Verbindung wurde getrennt.",
            DRAWING_NOTHING: "Du musst irgendwas zeichnen!",
            ROOM_DESTROYED: "Danke f\xFCrs Spielen!",
            ROOM_DISCONNECTED: "Verbindung getrennt",
            TEXT_NAUGHTY: "Das kannst du leider nicht schreiben. Bitte nimm R\xFCcksicht auf deine Mitspieler.",
            TEXT_NOTHING: "Du musst etwas eingeben!",
            TITLE: "Fehler"
        },
        tW = {
            JOINED_COUNT: "x | {count} von {maxPlayers} Spielern sind beigetreten | {count} von {maxPlayers} Spielern sind beigetreten",
            PLAYERS_NEEDED: "x | {count} Spieler zum Starten ben\xF6tigt | {count} Spieler zum Starten ben\xF6tigt",
            WAITING_FOR_VIP: "Warten, bis {name} das Spiel startet",
            WAITING_FOR_GAMEPAD: "Warten, bis das Spiel startet",
            GAME_STARTING: "Das Spiel beginnt",
            BUTTON_START: "Zum Starten dr\xFCcken",
            BUTTON_CANCEL: "Zum Abbrechen dr\xFCcken"
        },
        rW = {
            GALLERY_LINK: "Galerie besuchen",
            PLAY_AGAIN: "Erneut spielen?",
            BUTTON_SAME_PLAYERS: "Selbe Spieler",
            BUTTON_NEW_PLAYERS: "Neue Spieler"
        },
        nW = {
            AND: "UND",
            OR: "ODER"
        },
        iW = {
            BUTTON_SKIP: "\xDCberspringen",
            BUTTON_NEXT: "Weiter",
            BUTTON_DONE: "Los geht's!"
        },
        sW = {
            NAME: "PUBLIKUM"
        },
        aW = {
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
        oW = {
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
        lW = {
            ACTION: Q3,
            ALT: Z3,
            ERROR: eW,
            LOBBY: tW,
            POST_GAME: rW,
            SEPARATOR: nW,
            TUTORIAL: iW,
            AUDIENCE: sW,
            UGC: aW,
            TOAST: oW
        },
        cW = {
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
        uW = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "los enunciados no se muestran en el dispositivo del jugador",
                VISIBILITY_CONTROLLER_ON: "los enunciados se muestran en el dispositivo del jugador",
                VISIBILITY_SCREEN_OFF: "los enunciados no se muestran en la pantalla",
                VISIBILITY_SCREEN_ON: "los enunciados se muestran en la pantalla"
            }
        },
        fW = {
            DISCONNECTED: "Te has desconectado.",
            DRAWING_NOTHING: "\xA1Tienes que dibujar algo!",
            ROOM_DESTROYED: "\xA1Gracias por jugar!",
            ROOM_DISCONNECTED: "Desconectado",
            TEXT_NAUGHTY: "Lo siento, no puedes escribir eso. Hay que ser respetuoso con los dem\xE1s jugadores.",
            TEXT_NOTHING: "Tienes que escribir algo",
            TITLE: "Error"
        },
        dW = {
            JOINED_COUNT: "x | Se ha unido {count} de {maxPlayers} jugadores | Se han unido {count} de {maxPlayers} jugadores",
            PLAYERS_NEEDED: "x | Se necesita {count} jugador para empezar | Se necesitan {count} jugadores para empezar",
            WAITING_FOR_VIP: "Esperando a que {name} inicie la partida",
            WAITING_FOR_GAMEPAD: "Esperando a que empiece la partida",
            GAME_STARTING: "La partida va a empezar",
            BUTTON_START: "Pulsa para empezar",
            BUTTON_CANCEL: "Pulsa para cancelar"
        },
        hW = {
            GALLERY_LINK: "Visita la galer\xEDa",
            PLAY_AGAIN: "\xBFJugar otra vez?",
            BUTTON_SAME_PLAYERS: "Los mismos jugadores",
            BUTTON_NEW_PLAYERS: "Otros jugadores"
        },
        pW = {
            AND: "Y",
            OR: "O"
        },
        gW = {
            BUTTON_SKIP: "Omitir",
            BUTTON_NEXT: "Siguiente",
            BUTTON_DONE: "\xA1Vamos!"
        },
        mW = {
            NAME: "P\xDABLICO"
        },
        vW = {
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
        yW = {
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
        _W = {
            ACTION: cW,
            ALT: uW,
            ERROR: fW,
            LOBBY: dW,
            POST_GAME: hW,
            SEPARATOR: pW,
            TUTORIAL: gW,
            AUDIENCE: mW,
            UGC: vW,
            TOAST: yW
        },
        bW = {
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
        EW = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "indicaciones ocultas en los dispositivos de los jugadores",
                VISIBILITY_CONTROLLER_ON: "indicaciones se muestran en los dispositivos de los jugadores",
                VISIBILITY_SCREEN_OFF: "indicaciones ocultas en la pantalla del juego",
                VISIBILITY_SCREEN_ON: "indicaciones se muestran en la pantalla del juego"
            }
        },
        TW = {
            DISCONNECTED: "Te has desconectado.",
            DRAWING_NOTHING: "\xA1Tienes que dibujar algo!",
            ROOM_DESTROYED: "\xA1Gracias por jugar!",
            ROOM_DISCONNECTED: "Desconectado",
            TEXT_NAUGHTY: "Lo siento, no puedes escribir eso. Seamos respetuosos con los dem\xE1s jugadores.",
            TEXT_NOTHING: "Tienes que escribir algo",
            TITLE: "Error"
        },
        SW = {
            JOINED_COUNT: "x | Se ha unido {count} de {maxPlayers} jugadores | Se han unido {count} de {maxPlayers} jugadores",
            PLAYERS_NEEDED: "x | Se necesita {count} jugador para empezar | Se necesitan {count} jugadores para empezar",
            WAITING_FOR_VIP: "Esperando a que {name} inicie la partida",
            WAITING_FOR_GAMEPAD: "Esperando a que empiece la partida",
            GAME_STARTING: "La partida va a empezar",
            BUTTON_START: "Pulsa para empezar",
            BUTTON_CANCEL: "Pulsa para cancelar"
        },
        OW = {
            GALLERY_LINK: "Visita la galer\xEDa",
            PLAY_AGAIN: "\xBFJugar otra vez?",
            BUTTON_SAME_PLAYERS: "Los mismos jugadores",
            BUTTON_NEW_PLAYERS: "Otros jugadores"
        },
        wW = {
            AND: "Y",
            OR: "O"
        },
        $W = {
            BUTTON_SKIP: "Omitir",
            BUTTON_NEXT: "Siguiente",
            BUTTON_DONE: "\xA1Vamos!"
        },
        CW = {
            NAME: "P\xDABLICO"
        },
        IW = {
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
        AW = {
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
        NW = {
            ACTION: bW,
            ALT: EW,
            ERROR: TW,
            LOBBY: SW,
            POST_GAME: OW,
            SEPARATOR: wW,
            TUTORIAL: $W,
            AUDIENCE: CW,
            UGC: IW,
            TOAST: AW
        },
        PW = {
            en: A3,
            fr: U3,
            it: J3,
            de: lW,
            es: _W,
            "es-XL": NW
        },
        RW = et({
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
                const e = as();
                if (!(e != null && e.appContext.directives.pointerbox)) throw new Error("Doodle.vue relies on PointerBoxPlugin. Please install it inside your main.ts file.")
            },
            mounted() {
                this.createCanvas()
            },
            methods: {
                createCanvas() {
                    const e = this.$refs.canvas;
                    this.canvas = Un(new g3(e, this.player.doodle, this.canvasOptions))
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
        LW = {
            class: "doodle"
        },
        kW = {
            ref: "canvas"
        },
        xW = ["disabled"],
        DW = ["disabled"];

    function MW(e, t, r, n, s, o) {
        const l = Dt("pointerbox-translate"),
            u = Dt("pointerbox"),
            f = Dt("t");
        return G(), Y("div", LW, [Ie((G(), Y("div", {
            class: "stage",
            "onPointerbox:start": t[0] || (t[0] = (...h) => e.onPointerBoxStart && e.onPointerBoxStart(...h)),
            "onPointerbox:move": t[1] || (t[1] = (...h) => e.onPointerBoxMove && e.onPointerBoxMove(...h)),
            "onPointerbox:end": t[2] || (t[2] = (...h) => e.onPointerBoxEnd && e.onPointerBoxEnd(...h))
        }, [Ie(H("canvas", kW, null, 512), [
            [l, {
                id: "doodleCanvas",
                width: e.pointerBoxWidth,
                height: e.pointerBoxHeight
            }]
        ])], 32)), [
            [u]
        ]), e.hideUndo ? Se("", !0) : Ie((G(), Y("button", {
            key: 0,
            class: "doodle-action undo",
            disabled: !e.canSubmit,
            onClick: t[3] || (t[3] = zt((...h) => e.onUndo && e.onUndo(...h), ["prevent"]))
        }, null, 8, xW)), [
            [f, "ACTION.UNDO"]
        ]), e.hideSubmit ? Se("", !0) : Ie((G(), Y("button", {
            key: 1,
            class: "doodle-action submit",
            disabled: !e.canSubmit,
            onClick: t[4] || (t[4] = zt((...h) => e.onSubmit && e.onSubmit(...h), ["prevent"]))
        }, null, 8, DW)), [
            [f, "ACTION.SUBMIT"]
        ])])
    }
    const FW = ct(RW, [
        ["render", MW]
    ]);
    var Ql = {
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
                _ = 1,
                E = 2,
                $ = 4,
                R = 1,
                M = 2,
                U = 1,
                C = 2,
                V = 4,
                X = 8,
                W = 16,
                j = 32,
                Q = 64,
                oe = 128,
                le = 256,
                ue = 512,
                Ae = 30,
                Ce = "...",
                fe = 800,
                $e = 16,
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
                Cr = [
                    ["ary", oe],
                    ["bind", U],
                    ["bindKey", C],
                    ["curry", X],
                    ["curryRight", W],
                    ["flip", ue],
                    ["partial", j],
                    ["partialRight", Q],
                    ["rearg", le]
                ],
                nr = "[object Arguments]",
                vr = "[object Array]",
                at = "[object AsyncFunction]",
                St = "[object Boolean]",
                ot = "[object Date]",
                kt = "[object DOMException]",
                Ht = "[object Error]",
                xt = "[object Function]",
                m = "[object GeneratorFunction]",
                p = "[object Map]",
                O = "[object Number]",
                D = "[object Null]",
                B = "[object Object]",
                z = "[object Promise]",
                ce = "[object Proxy]",
                se = "[object RegExp]",
                re = "[object Set]",
                A = "[object String]",
                K = "[object Symbol]",
                he = "[object Undefined]",
                pe = "[object WeakMap]",
                Ne = "[object WeakSet]",
                De = "[object ArrayBuffer]",
                w = "[object DataView]",
                T = "[object Float32Array]",
                P = "[object Float64Array]",
                S = "[object Int8Array]",
                L = "[object Int16Array]",
                Z = "[object Int32Array]",
                ne = "[object Uint8Array]",
                _e = "[object Uint8ClampedArray]",
                Te = "[object Uint16Array]",
                ft = "[object Uint32Array]",
                ir = /\b__p \+= '';/g,
                Me = /\b(__p \+=) '' \+/g,
                da = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
                jp = /&(?:amp|lt|gt|quot|#39);/g,
                Gp = /[&<>"']/g,
                Sw = RegExp(jp.source),
                Ow = RegExp(Gp.source),
                ww = /<%-([\s\S]+?)%>/g,
                $w = /<%([\s\S]+?)%>/g,
                Wp = /<%=([\s\S]+?)%>/g,
                Cw = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                Iw = /^\w*$/,
                Aw = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                Qc = /[\\^$.*+?()[\]{}|]/g,
                Nw = RegExp(Qc.source),
                Zc = /^\s+/,
                Pw = /\s/,
                Rw = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
                Lw = /\{\n\/\* \[wrapped with (.+)\] \*/,
                kw = /,? & /,
                xw = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
                Dw = /[()=,{}\[\]\/\s]/,
                Mw = /\\(\\)?/g,
                Fw = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
                Hp = /\w*$/,
                Bw = /^[-+]0x[0-9a-f]+$/i,
                Uw = /^0b[01]+$/i,
                jw = /^\[object .+?Constructor\]$/,
                Gw = /^0o[0-7]+$/i,
                Ww = /^(?:0|[1-9]\d*)$/,
                Hw = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
                So = /($^)/,
                Kw = /['\n\r\u2028\u2029\\]/g,
                Oo = "\\ud800-\\udfff",
                Vw = "\\u0300-\\u036f",
                qw = "\\ufe20-\\ufe2f",
                Yw = "\\u20d0-\\u20ff",
                Kp = Vw + qw + Yw,
                Vp = "\\u2700-\\u27bf",
                qp = "a-z\\xdf-\\xf6\\xf8-\\xff",
                zw = "\\xac\\xb1\\xd7\\xf7",
                Xw = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
                Jw = "\\u2000-\\u206f",
                Qw = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
                Yp = "A-Z\\xc0-\\xd6\\xd8-\\xde",
                zp = "\\ufe0e\\ufe0f",
                Xp = zw + Xw + Jw + Qw,
                eu = "['\u2019]",
                Zw = "[" + Oo + "]",
                Jp = "[" + Xp + "]",
                wo = "[" + Kp + "]",
                Qp = "\\d+",
                e0 = "[" + Vp + "]",
                Zp = "[" + qp + "]",
                eg = "[^" + Oo + Xp + Qp + Vp + qp + Yp + "]",
                tu = "\\ud83c[\\udffb-\\udfff]",
                t0 = "(?:" + wo + "|" + tu + ")",
                tg = "[^" + Oo + "]",
                ru = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                nu = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                fs = "[" + Yp + "]",
                rg = "\\u200d",
                ng = "(?:" + Zp + "|" + eg + ")",
                r0 = "(?:" + fs + "|" + eg + ")",
                ig = "(?:" + eu + "(?:d|ll|m|re|s|t|ve))?",
                sg = "(?:" + eu + "(?:D|LL|M|RE|S|T|VE))?",
                ag = t0 + "?",
                og = "[" + zp + "]?",
                n0 = "(?:" + rg + "(?:" + [tg, ru, nu].join("|") + ")" + og + ag + ")*",
                i0 = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
                s0 = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
                lg = og + ag + n0,
                a0 = "(?:" + [e0, ru, nu].join("|") + ")" + lg,
                o0 = "(?:" + [tg + wo + "?", wo, ru, nu, Zw].join("|") + ")",
                l0 = RegExp(eu, "g"),
                c0 = RegExp(wo, "g"),
                iu = RegExp(tu + "(?=" + tu + ")|" + o0 + lg, "g"),
                u0 = RegExp([fs + "?" + Zp + "+" + ig + "(?=" + [Jp, fs, "$"].join("|") + ")", r0 + "+" + sg + "(?=" + [Jp, fs + ng, "$"].join("|") + ")", fs + "?" + ng + "+" + ig, fs + "+" + sg, s0, i0, Qp, a0].join("|"), "g"),
                f0 = RegExp("[" + rg + Oo + Kp + zp + "]"),
                d0 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
                h0 = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
                p0 = -1,
                Et = {};
            Et[T] = Et[P] = Et[S] = Et[L] = Et[Z] = Et[ne] = Et[_e] = Et[Te] = Et[ft] = !0, Et[nr] = Et[vr] = Et[De] = Et[St] = Et[w] = Et[ot] = Et[Ht] = Et[xt] = Et[p] = Et[O] = Et[B] = Et[se] = Et[re] = Et[A] = Et[pe] = !1;
            var vt = {};
            vt[nr] = vt[vr] = vt[De] = vt[w] = vt[St] = vt[ot] = vt[T] = vt[P] = vt[S] = vt[L] = vt[Z] = vt[p] = vt[O] = vt[B] = vt[se] = vt[re] = vt[A] = vt[K] = vt[ne] = vt[_e] = vt[Te] = vt[ft] = !0, vt[Ht] = vt[xt] = vt[pe] = !1;
            var g0 = {
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
                m0 = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;"
                },
                v0 = {
                    "&amp;": "&",
                    "&lt;": "<",
                    "&gt;": ">",
                    "&quot;": '"',
                    "&#39;": "'"
                },
                y0 = {
                    "\\": "\\",
                    "'": "'",
                    "\n": "n",
                    "\r": "r",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                },
                _0 = parseFloat,
                b0 = parseInt,
                cg = typeof Lt == "object" && Lt && Lt.Object === Object && Lt,
                E0 = typeof self == "object" && self && self.Object === Object && self,
                Jt = cg || E0 || Function("return this")(),
                su = t && !t.nodeType && t,
                wi = su && !0 && e && !e.nodeType && e,
                ug = wi && wi.exports === su,
                au = ug && cg.process,
                Br = function() {
                    try {
                        var k = wi && wi.require && wi.require("util").types;
                        return k || au && au.binding && au.binding("util")
                    } catch {}
                }(),
                fg = Br && Br.isArrayBuffer,
                dg = Br && Br.isDate,
                hg = Br && Br.isMap,
                pg = Br && Br.isRegExp,
                gg = Br && Br.isSet,
                mg = Br && Br.isTypedArray;

            function Ir(k, J, q) {
                switch (q.length) {
                    case 0:
                        return k.call(J);
                    case 1:
                        return k.call(J, q[0]);
                    case 2:
                        return k.call(J, q[0], q[1]);
                    case 3:
                        return k.call(J, q[0], q[1], q[2])
                }
                return k.apply(J, q)
            }

            function T0(k, J, q, Ee) {
                for (var Be = -1, it = k == null ? 0 : k.length; ++Be < it;) {
                    var Ft = k[Be];
                    J(Ee, Ft, q(Ft), k)
                }
                return Ee
            }

            function Ur(k, J) {
                for (var q = -1, Ee = k == null ? 0 : k.length; ++q < Ee && J(k[q], q, k) !== !1;);
                return k
            }

            function S0(k, J) {
                for (var q = k == null ? 0 : k.length; q-- && J(k[q], q, k) !== !1;);
                return k
            }

            function vg(k, J) {
                for (var q = -1, Ee = k == null ? 0 : k.length; ++q < Ee;)
                    if (!J(k[q], q, k)) return !1;
                return !0
            }

            function Wn(k, J) {
                for (var q = -1, Ee = k == null ? 0 : k.length, Be = 0, it = []; ++q < Ee;) {
                    var Ft = k[q];
                    J(Ft, q, k) && (it[Be++] = Ft)
                }
                return it
            }

            function $o(k, J) {
                var q = k == null ? 0 : k.length;
                return !!q && ds(k, J, 0) > -1
            }

            function ou(k, J, q) {
                for (var Ee = -1, Be = k == null ? 0 : k.length; ++Ee < Be;)
                    if (q(J, k[Ee])) return !0;
                return !1
            }

            function Ot(k, J) {
                for (var q = -1, Ee = k == null ? 0 : k.length, Be = Array(Ee); ++q < Ee;) Be[q] = J(k[q], q, k);
                return Be
            }

            function Hn(k, J) {
                for (var q = -1, Ee = J.length, Be = k.length; ++q < Ee;) k[Be + q] = J[q];
                return k
            }

            function lu(k, J, q, Ee) {
                var Be = -1,
                    it = k == null ? 0 : k.length;
                for (Ee && it && (q = k[++Be]); ++Be < it;) q = J(q, k[Be], Be, k);
                return q
            }

            function O0(k, J, q, Ee) {
                var Be = k == null ? 0 : k.length;
                for (Ee && Be && (q = k[--Be]); Be--;) q = J(q, k[Be], Be, k);
                return q
            }

            function cu(k, J) {
                for (var q = -1, Ee = k == null ? 0 : k.length; ++q < Ee;)
                    if (J(k[q], q, k)) return !0;
                return !1
            }
            var w0 = uu("length");

            function $0(k) {
                return k.split("")
            }

            function C0(k) {
                return k.match(xw) || []
            }

            function yg(k, J, q) {
                var Ee;
                return q(k, function(Be, it, Ft) {
                    if (J(Be, it, Ft)) return Ee = it, !1
                }), Ee
            }

            function Co(k, J, q, Ee) {
                for (var Be = k.length, it = q + (Ee ? 1 : -1); Ee ? it-- : ++it < Be;)
                    if (J(k[it], it, k)) return it;
                return -1
            }

            function ds(k, J, q) {
                return J === J ? B0(k, J, q) : Co(k, _g, q)
            }

            function I0(k, J, q, Ee) {
                for (var Be = q - 1, it = k.length; ++Be < it;)
                    if (Ee(k[Be], J)) return Be;
                return -1
            }

            function _g(k) {
                return k !== k
            }

            function bg(k, J) {
                var q = k == null ? 0 : k.length;
                return q ? du(k, J) / q : Fe
            }

            function uu(k) {
                return function(J) {
                    return J == null ? r : J[k]
                }
            }

            function fu(k) {
                return function(J) {
                    return k == null ? r : k[J]
                }
            }

            function Eg(k, J, q, Ee, Be) {
                return Be(k, function(it, Ft, pt) {
                    q = Ee ? (Ee = !1, it) : J(q, it, Ft, pt)
                }), q
            }

            function A0(k, J) {
                var q = k.length;
                for (k.sort(J); q--;) k[q] = k[q].value;
                return k
            }

            function du(k, J) {
                for (var q, Ee = -1, Be = k.length; ++Ee < Be;) {
                    var it = J(k[Ee]);
                    it !== r && (q = q === r ? it : q + it)
                }
                return q
            }

            function hu(k, J) {
                for (var q = -1, Ee = Array(k); ++q < k;) Ee[q] = J(q);
                return Ee
            }

            function N0(k, J) {
                return Ot(J, function(q) {
                    return [q, k[q]]
                })
            }

            function Tg(k) {
                return k && k.slice(0, $g(k) + 1).replace(Zc, "")
            }

            function Ar(k) {
                return function(J) {
                    return k(J)
                }
            }

            function pu(k, J) {
                return Ot(J, function(q) {
                    return k[q]
                })
            }

            function ha(k, J) {
                return k.has(J)
            }

            function Sg(k, J) {
                for (var q = -1, Ee = k.length; ++q < Ee && ds(J, k[q], 0) > -1;);
                return q
            }

            function Og(k, J) {
                for (var q = k.length; q-- && ds(J, k[q], 0) > -1;);
                return q
            }

            function P0(k, J) {
                for (var q = k.length, Ee = 0; q--;) k[q] === J && ++Ee;
                return Ee
            }
            var R0 = fu(g0),
                L0 = fu(m0);

            function k0(k) {
                return "\\" + y0[k]
            }

            function x0(k, J) {
                return k == null ? r : k[J]
            }

            function hs(k) {
                return f0.test(k)
            }

            function D0(k) {
                return d0.test(k)
            }

            function M0(k) {
                for (var J, q = []; !(J = k.next()).done;) q.push(J.value);
                return q
            }

            function gu(k) {
                var J = -1,
                    q = Array(k.size);
                return k.forEach(function(Ee, Be) {
                    q[++J] = [Be, Ee]
                }), q
            }

            function wg(k, J) {
                return function(q) {
                    return k(J(q))
                }
            }

            function Kn(k, J) {
                for (var q = -1, Ee = k.length, Be = 0, it = []; ++q < Ee;) {
                    var Ft = k[q];
                    (Ft === J || Ft === g) && (k[q] = g, it[Be++] = q)
                }
                return it
            }

            function Io(k) {
                var J = -1,
                    q = Array(k.size);
                return k.forEach(function(Ee) {
                    q[++J] = Ee
                }), q
            }

            function F0(k) {
                var J = -1,
                    q = Array(k.size);
                return k.forEach(function(Ee) {
                    q[++J] = [Ee, Ee]
                }), q
            }

            function B0(k, J, q) {
                for (var Ee = q - 1, Be = k.length; ++Ee < Be;)
                    if (k[Ee] === J) return Ee;
                return -1
            }

            function U0(k, J, q) {
                for (var Ee = q + 1; Ee--;)
                    if (k[Ee] === J) return Ee;
                return Ee
            }

            function ps(k) {
                return hs(k) ? G0(k) : w0(k)
            }

            function en(k) {
                return hs(k) ? W0(k) : $0(k)
            }

            function $g(k) {
                for (var J = k.length; J-- && Pw.test(k.charAt(J)););
                return J
            }
            var j0 = fu(v0);

            function G0(k) {
                for (var J = iu.lastIndex = 0; iu.test(k);) ++J;
                return J
            }

            function W0(k) {
                return k.match(iu) || []
            }

            function H0(k) {
                return k.match(u0) || []
            }
            var K0 = function k(J) {
                    J = J == null ? Jt : gs.defaults(Jt.Object(), J, gs.pick(Jt, h0));
                    var q = J.Array,
                        Ee = J.Date,
                        Be = J.Error,
                        it = J.Function,
                        Ft = J.Math,
                        pt = J.Object,
                        mu = J.RegExp,
                        V0 = J.String,
                        jr = J.TypeError,
                        Ao = q.prototype,
                        q0 = it.prototype,
                        ms = pt.prototype,
                        No = J["__core-js_shared__"],
                        Po = q0.toString,
                        dt = ms.hasOwnProperty,
                        Y0 = 0,
                        Cg = function() {
                            var i = /[^.]+$/.exec(No && No.keys && No.keys.IE_PROTO || "");
                            return i ? "Symbol(src)_1." + i : ""
                        }(),
                        Ro = ms.toString,
                        z0 = Po.call(pt),
                        X0 = Jt._,
                        J0 = mu("^" + Po.call(dt).replace(Qc, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                        Lo = ug ? J.Buffer : r,
                        Vn = J.Symbol,
                        ko = J.Uint8Array,
                        Ig = Lo ? Lo.allocUnsafe : r,
                        xo = wg(pt.getPrototypeOf, pt),
                        Ag = pt.create,
                        Ng = ms.propertyIsEnumerable,
                        Do = Ao.splice,
                        Pg = Vn ? Vn.isConcatSpreadable : r,
                        pa = Vn ? Vn.iterator : r,
                        $i = Vn ? Vn.toStringTag : r,
                        Mo = function() {
                            try {
                                var i = Pi(pt, "defineProperty");
                                return i({}, "", {}), i
                            } catch {}
                        }(),
                        Q0 = J.clearTimeout !== Jt.clearTimeout && J.clearTimeout,
                        Z0 = Ee && Ee.now !== Jt.Date.now && Ee.now,
                        e1 = J.setTimeout !== Jt.setTimeout && J.setTimeout,
                        Fo = Ft.ceil,
                        Bo = Ft.floor,
                        vu = pt.getOwnPropertySymbols,
                        t1 = Lo ? Lo.isBuffer : r,
                        Rg = J.isFinite,
                        r1 = Ao.join,
                        n1 = wg(pt.keys, pt),
                        Bt = Ft.max,
                        sr = Ft.min,
                        i1 = Ee.now,
                        s1 = J.parseInt,
                        Lg = Ft.random,
                        a1 = Ao.reverse,
                        yu = Pi(J, "DataView"),
                        ga = Pi(J, "Map"),
                        _u = Pi(J, "Promise"),
                        vs = Pi(J, "Set"),
                        ma = Pi(J, "WeakMap"),
                        va = Pi(pt, "create"),
                        Uo = ma && new ma,
                        ys = {},
                        o1 = Ri(yu),
                        l1 = Ri(ga),
                        c1 = Ri(_u),
                        u1 = Ri(vs),
                        f1 = Ri(ma),
                        jo = Vn ? Vn.prototype : r,
                        ya = jo ? jo.valueOf : r,
                        kg = jo ? jo.toString : r;

                    function y(i) {
                        if (At(i) && !je(i) && !(i instanceof Ye)) {
                            if (i instanceof Gr) return i;
                            if (dt.call(i, "__wrapped__")) return xm(i)
                        }
                        return new Gr(i)
                    }
                    var _s = function() {
                        function i() {}
                        return function(a) {
                            if (!Ct(a)) return {};
                            if (Ag) return Ag(a);
                            i.prototype = a;
                            var c = new i;
                            return i.prototype = r, c
                        }
                    }();

                    function Go() {}

                    function Gr(i, a) {
                        this.__wrapped__ = i, this.__actions__ = [], this.__chain__ = !!a, this.__index__ = 0, this.__values__ = r
                    }
                    y.templateSettings = {
                        escape: ww,
                        evaluate: $w,
                        interpolate: Wp,
                        variable: "",
                        imports: {
                            _: y
                        }
                    }, y.prototype = Go.prototype, y.prototype.constructor = y, Gr.prototype = _s(Go.prototype), Gr.prototype.constructor = Gr;

                    function Ye(i) {
                        this.__wrapped__ = i, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Ge, this.__views__ = []
                    }

                    function d1() {
                        var i = new Ye(this.__wrapped__);
                        return i.__actions__ = yr(this.__actions__), i.__dir__ = this.__dir__, i.__filtered__ = this.__filtered__, i.__iteratees__ = yr(this.__iteratees__), i.__takeCount__ = this.__takeCount__, i.__views__ = yr(this.__views__), i
                    }

                    function h1() {
                        if (this.__filtered__) {
                            var i = new Ye(this);
                            i.__dir__ = -1, i.__filtered__ = !0
                        } else i = this.clone(), i.__dir__ *= -1;
                        return i
                    }

                    function p1() {
                        var i = this.__wrapped__.value(),
                            a = this.__dir__,
                            c = je(i),
                            d = a < 0,
                            v = c ? i.length : 0,
                            b = $$(0, v, this.__views__),
                            I = b.start,
                            N = b.end,
                            x = N - I,
                            ee = d ? N : I - 1,
                            te = this.__iteratees__,
                            ae = te.length,
                            me = 0,
                            we = sr(x, this.__takeCount__);
                        if (!c || !d && v == x && we == x) return im(i, this.__actions__);
                        var Re = [];
                        e: for (; x-- && me < we;) {
                            ee += a;
                            for (var Ke = -1, Le = i[ee]; ++Ke < ae;) {
                                var qe = te[Ke],
                                    Xe = qe.iteratee,
                                    Rr = qe.type,
                                    pr = Xe(Le);
                                if (Rr == ie) Le = pr;
                                else if (!pr) {
                                    if (Rr == F) continue e;
                                    break e
                                }
                            }
                            Re[me++] = Le
                        }
                        return Re
                    }
                    Ye.prototype = _s(Go.prototype), Ye.prototype.constructor = Ye;

                    function Ci(i) {
                        var a = -1,
                            c = i == null ? 0 : i.length;
                        for (this.clear(); ++a < c;) {
                            var d = i[a];
                            this.set(d[0], d[1])
                        }
                    }

                    function g1() {
                        this.__data__ = va ? va(null) : {}, this.size = 0
                    }

                    function m1(i) {
                        var a = this.has(i) && delete this.__data__[i];
                        return this.size -= a ? 1 : 0, a
                    }

                    function v1(i) {
                        var a = this.__data__;
                        if (va) {
                            var c = a[i];
                            return c === f ? r : c
                        }
                        return dt.call(a, i) ? a[i] : r
                    }

                    function y1(i) {
                        var a = this.__data__;
                        return va ? a[i] !== r : dt.call(a, i)
                    }

                    function _1(i, a) {
                        var c = this.__data__;
                        return this.size += this.has(i) ? 0 : 1, c[i] = va && a === r ? f : a, this
                    }
                    Ci.prototype.clear = g1, Ci.prototype.delete = m1, Ci.prototype.get = v1, Ci.prototype.has = y1, Ci.prototype.set = _1;

                    function $n(i) {
                        var a = -1,
                            c = i == null ? 0 : i.length;
                        for (this.clear(); ++a < c;) {
                            var d = i[a];
                            this.set(d[0], d[1])
                        }
                    }

                    function b1() {
                        this.__data__ = [], this.size = 0
                    }

                    function E1(i) {
                        var a = this.__data__,
                            c = Wo(a, i);
                        if (c < 0) return !1;
                        var d = a.length - 1;
                        return c == d ? a.pop() : Do.call(a, c, 1), --this.size, !0
                    }

                    function T1(i) {
                        var a = this.__data__,
                            c = Wo(a, i);
                        return c < 0 ? r : a[c][1]
                    }

                    function S1(i) {
                        return Wo(this.__data__, i) > -1
                    }

                    function O1(i, a) {
                        var c = this.__data__,
                            d = Wo(c, i);
                        return d < 0 ? (++this.size, c.push([i, a])) : c[d][1] = a, this
                    }
                    $n.prototype.clear = b1, $n.prototype.delete = E1, $n.prototype.get = T1, $n.prototype.has = S1, $n.prototype.set = O1;

                    function Cn(i) {
                        var a = -1,
                            c = i == null ? 0 : i.length;
                        for (this.clear(); ++a < c;) {
                            var d = i[a];
                            this.set(d[0], d[1])
                        }
                    }

                    function w1() {
                        this.size = 0, this.__data__ = {
                            hash: new Ci,
                            map: new(ga || $n),
                            string: new Ci
                        }
                    }

                    function $1(i) {
                        var a = tl(this, i).delete(i);
                        return this.size -= a ? 1 : 0, a
                    }

                    function C1(i) {
                        return tl(this, i).get(i)
                    }

                    function I1(i) {
                        return tl(this, i).has(i)
                    }

                    function A1(i, a) {
                        var c = tl(this, i),
                            d = c.size;
                        return c.set(i, a), this.size += c.size == d ? 0 : 1, this
                    }
                    Cn.prototype.clear = w1, Cn.prototype.delete = $1, Cn.prototype.get = C1, Cn.prototype.has = I1, Cn.prototype.set = A1;

                    function Ii(i) {
                        var a = -1,
                            c = i == null ? 0 : i.length;
                        for (this.__data__ = new Cn; ++a < c;) this.add(i[a])
                    }

                    function N1(i) {
                        return this.__data__.set(i, f), this
                    }

                    function P1(i) {
                        return this.__data__.has(i)
                    }
                    Ii.prototype.add = Ii.prototype.push = N1, Ii.prototype.has = P1;

                    function tn(i) {
                        var a = this.__data__ = new $n(i);
                        this.size = a.size
                    }

                    function R1() {
                        this.__data__ = new $n, this.size = 0
                    }

                    function L1(i) {
                        var a = this.__data__,
                            c = a.delete(i);
                        return this.size = a.size, c
                    }

                    function k1(i) {
                        return this.__data__.get(i)
                    }

                    function x1(i) {
                        return this.__data__.has(i)
                    }

                    function D1(i, a) {
                        var c = this.__data__;
                        if (c instanceof $n) {
                            var d = c.__data__;
                            if (!ga || d.length < s - 1) return d.push([i, a]), this.size = ++c.size, this;
                            c = this.__data__ = new Cn(d)
                        }
                        return c.set(i, a), this.size = c.size, this
                    }
                    tn.prototype.clear = R1, tn.prototype.delete = L1, tn.prototype.get = k1, tn.prototype.has = x1, tn.prototype.set = D1;

                    function xg(i, a) {
                        var c = je(i),
                            d = !c && Li(i),
                            v = !c && !d && Jn(i),
                            b = !c && !d && !v && Ss(i),
                            I = c || d || v || b,
                            N = I ? hu(i.length, V0) : [],
                            x = N.length;
                        for (var ee in i)(a || dt.call(i, ee)) && !(I && (ee == "length" || v && (ee == "offset" || ee == "parent") || b && (ee == "buffer" || ee == "byteLength" || ee == "byteOffset") || Pn(ee, x))) && N.push(ee);
                        return N
                    }

                    function Dg(i) {
                        var a = i.length;
                        return a ? i[Nu(0, a - 1)] : r
                    }

                    function M1(i, a) {
                        return rl(yr(i), Ai(a, 0, i.length))
                    }

                    function F1(i) {
                        return rl(yr(i))
                    }

                    function bu(i, a, c) {
                        (c !== r && !rn(i[a], c) || c === r && !(a in i)) && In(i, a, c)
                    }

                    function _a(i, a, c) {
                        var d = i[a];
                        (!(dt.call(i, a) && rn(d, c)) || c === r && !(a in i)) && In(i, a, c)
                    }

                    function Wo(i, a) {
                        for (var c = i.length; c--;)
                            if (rn(i[c][0], a)) return c;
                        return -1
                    }

                    function B1(i, a, c, d) {
                        return qn(i, function(v, b, I) {
                            a(d, v, c(v), I)
                        }), d
                    }

                    function Mg(i, a) {
                        return i && pn(a, Kt(a), i)
                    }

                    function U1(i, a) {
                        return i && pn(a, br(a), i)
                    }

                    function In(i, a, c) {
                        a == "__proto__" && Mo ? Mo(i, a, {
                            configurable: !0,
                            enumerable: !0,
                            value: c,
                            writable: !0
                        }) : i[a] = c
                    }

                    function Eu(i, a) {
                        for (var c = -1, d = a.length, v = q(d), b = i == null; ++c < d;) v[c] = b ? r : tf(i, a[c]);
                        return v
                    }

                    function Ai(i, a, c) {
                        return i === i && (c !== r && (i = i <= c ? i : c), a !== r && (i = i >= a ? i : a)), i
                    }

                    function Wr(i, a, c, d, v, b) {
                        var I, N = a & _,
                            x = a & E,
                            ee = a & $;
                        if (c && (I = v ? c(i, d, v, b) : c(i)), I !== r) return I;
                        if (!Ct(i)) return i;
                        var te = je(i);
                        if (te) {
                            if (I = I$(i), !N) return yr(i, I)
                        } else {
                            var ae = ar(i),
                                me = ae == xt || ae == m;
                            if (Jn(i)) return om(i, N);
                            if (ae == B || ae == nr || me && !v) {
                                if (I = x || me ? {} : $m(i), !N) return x ? v$(i, U1(I, i)) : m$(i, Mg(I, i))
                            } else {
                                if (!vt[ae]) return v ? i : {};
                                I = A$(i, ae, N)
                            }
                        }
                        b || (b = new tn);
                        var we = b.get(i);
                        if (we) return we;
                        b.set(i, I), tv(i) ? i.forEach(function(Le) {
                            I.add(Wr(Le, a, c, Le, i, b))
                        }) : Zm(i) && i.forEach(function(Le, qe) {
                            I.set(qe, Wr(Le, a, c, qe, i, b))
                        });
                        var Re = ee ? x ? ju : Uu : x ? br : Kt,
                            Ke = te ? r : Re(i);
                        return Ur(Ke || i, function(Le, qe) {
                            Ke && (qe = Le, Le = i[qe]), _a(I, qe, Wr(Le, a, c, qe, i, b))
                        }), I
                    }

                    function j1(i) {
                        var a = Kt(i);
                        return function(c) {
                            return Fg(c, i, a)
                        }
                    }

                    function Fg(i, a, c) {
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

                    function Bg(i, a, c) {
                        if (typeof i != "function") throw new jr(l);
                        return $a(function() {
                            i.apply(r, c)
                        }, a)
                    }

                    function ba(i, a, c, d) {
                        var v = -1,
                            b = $o,
                            I = !0,
                            N = i.length,
                            x = [],
                            ee = a.length;
                        if (!N) return x;
                        c && (a = Ot(a, Ar(c))), d ? (b = ou, I = !1) : a.length >= s && (b = ha, I = !1, a = new Ii(a));
                        e: for (; ++v < N;) {
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
                    var qn = dm(hn),
                        Ug = dm(Su, !0);

                    function G1(i, a) {
                        var c = !0;
                        return qn(i, function(d, v, b) {
                            return c = !!a(d, v, b), c
                        }), c
                    }

                    function Ho(i, a, c) {
                        for (var d = -1, v = i.length; ++d < v;) {
                            var b = i[d],
                                I = a(b);
                            if (I != null && (N === r ? I === I && !Pr(I) : c(I, N))) var N = I,
                                x = b
                        }
                        return x
                    }

                    function W1(i, a, c, d) {
                        var v = i.length;
                        for (c = We(c), c < 0 && (c = -c > v ? 0 : v + c), d = d === r || d > v ? v : We(d), d < 0 && (d += v), d = c > d ? 0 : nv(d); c < d;) i[c++] = a;
                        return i
                    }

                    function jg(i, a) {
                        var c = [];
                        return qn(i, function(d, v, b) {
                            a(d, v, b) && c.push(d)
                        }), c
                    }

                    function Qt(i, a, c, d, v) {
                        var b = -1,
                            I = i.length;
                        for (c || (c = P$), v || (v = []); ++b < I;) {
                            var N = i[b];
                            a > 0 && c(N) ? a > 1 ? Qt(N, a - 1, c, d, v) : Hn(v, N) : d || (v[v.length] = N)
                        }
                        return v
                    }
                    var Tu = hm(),
                        Gg = hm(!0);

                    function hn(i, a) {
                        return i && Tu(i, a, Kt)
                    }

                    function Su(i, a) {
                        return i && Gg(i, a, Kt)
                    }

                    function Ko(i, a) {
                        return Wn(a, function(c) {
                            return Rn(i[c])
                        })
                    }

                    function Ni(i, a) {
                        a = zn(a, i);
                        for (var c = 0, d = a.length; i != null && c < d;) i = i[gn(a[c++])];
                        return c && c == d ? i : r
                    }

                    function Wg(i, a, c) {
                        var d = a(i);
                        return je(i) ? d : Hn(d, c(i))
                    }

                    function dr(i) {
                        return i == null ? i === r ? he : D : $i && $i in pt(i) ? w$(i) : F$(i)
                    }

                    function Ou(i, a) {
                        return i > a
                    }

                    function H1(i, a) {
                        return i != null && dt.call(i, a)
                    }

                    function K1(i, a) {
                        return i != null && a in pt(i)
                    }

                    function V1(i, a, c) {
                        return i >= sr(a, c) && i < Bt(a, c)
                    }

                    function wu(i, a, c) {
                        for (var d = c ? ou : $o, v = i[0].length, b = i.length, I = b, N = q(b), x = 1 / 0, ee = []; I--;) {
                            var te = i[I];
                            I && a && (te = Ot(te, Ar(a))), x = sr(te.length, x), N[I] = !c && (a || v >= 120 && te.length >= 120) ? new Ii(I && te) : r
                        }
                        te = i[0];
                        var ae = -1,
                            me = N[0];
                        e: for (; ++ae < v && ee.length < x;) {
                            var we = te[ae],
                                Re = a ? a(we) : we;
                            if (we = c || we !== 0 ? we : 0, !(me ? ha(me, Re) : d(ee, Re, c))) {
                                for (I = b; --I;) {
                                    var Ke = N[I];
                                    if (!(Ke ? ha(Ke, Re) : d(i[I], Re, c))) continue e
                                }
                                me && me.push(Re), ee.push(we)
                            }
                        }
                        return ee
                    }

                    function q1(i, a, c, d) {
                        return hn(i, function(v, b, I) {
                            a(d, c(v), b, I)
                        }), d
                    }

                    function Ea(i, a, c) {
                        a = zn(a, i), i = Nm(i, a);
                        var d = i == null ? i : i[gn(Kr(a))];
                        return d == null ? r : Ir(d, i, c)
                    }

                    function Hg(i) {
                        return At(i) && dr(i) == nr
                    }

                    function Y1(i) {
                        return At(i) && dr(i) == De
                    }

                    function z1(i) {
                        return At(i) && dr(i) == ot
                    }

                    function Ta(i, a, c, d, v) {
                        return i === a ? !0 : i == null || a == null || !At(i) && !At(a) ? i !== i && a !== a : X1(i, a, c, d, Ta, v)
                    }

                    function X1(i, a, c, d, v, b) {
                        var I = je(i),
                            N = je(a),
                            x = I ? vr : ar(i),
                            ee = N ? vr : ar(a);
                        x = x == nr ? B : x, ee = ee == nr ? B : ee;
                        var te = x == B,
                            ae = ee == B,
                            me = x == ee;
                        if (me && Jn(i)) {
                            if (!Jn(a)) return !1;
                            I = !0, te = !1
                        }
                        if (me && !te) return b || (b = new tn), I || Ss(i) ? Sm(i, a, c, d, v, b) : S$(i, a, x, c, d, v, b);
                        if (!(c & R)) {
                            var we = te && dt.call(i, "__wrapped__"),
                                Re = ae && dt.call(a, "__wrapped__");
                            if (we || Re) {
                                var Ke = we ? i.value() : i,
                                    Le = Re ? a.value() : a;
                                return b || (b = new tn), v(Ke, Le, c, d, b)
                            }
                        }
                        return me ? (b || (b = new tn), O$(i, a, c, d, v, b)) : !1
                    }

                    function J1(i) {
                        return At(i) && ar(i) == p
                    }

                    function $u(i, a, c, d) {
                        var v = c.length,
                            b = v,
                            I = !d;
                        if (i == null) return !b;
                        for (i = pt(i); v--;) {
                            var N = c[v];
                            if (I && N[2] ? N[1] !== i[N[0]] : !(N[0] in i)) return !1
                        }
                        for (; ++v < b;) {
                            N = c[v];
                            var x = N[0],
                                ee = i[x],
                                te = N[1];
                            if (I && N[2]) {
                                if (ee === r && !(x in i)) return !1
                            } else {
                                var ae = new tn;
                                if (d) var me = d(ee, te, x, i, a, ae);
                                if (!(me === r ? Ta(te, ee, R | M, d, ae) : me)) return !1
                            }
                        }
                        return !0
                    }

                    function Kg(i) {
                        if (!Ct(i) || L$(i)) return !1;
                        var a = Rn(i) ? J0 : jw;
                        return a.test(Ri(i))
                    }

                    function Q1(i) {
                        return At(i) && dr(i) == se
                    }

                    function Z1(i) {
                        return At(i) && ar(i) == re
                    }

                    function e$(i) {
                        return At(i) && ll(i.length) && !!Et[dr(i)]
                    }

                    function Vg(i) {
                        return typeof i == "function" ? i : i == null ? Er : typeof i == "object" ? je(i) ? zg(i[0], i[1]) : Yg(i) : pv(i)
                    }

                    function Cu(i) {
                        if (!wa(i)) return n1(i);
                        var a = [];
                        for (var c in pt(i)) dt.call(i, c) && c != "constructor" && a.push(c);
                        return a
                    }

                    function t$(i) {
                        if (!Ct(i)) return M$(i);
                        var a = wa(i),
                            c = [];
                        for (var d in i) d == "constructor" && (a || !dt.call(i, d)) || c.push(d);
                        return c
                    }

                    function Iu(i, a) {
                        return i < a
                    }

                    function qg(i, a) {
                        var c = -1,
                            d = _r(i) ? q(i.length) : [];
                        return qn(i, function(v, b, I) {
                            d[++c] = a(v, b, I)
                        }), d
                    }

                    function Yg(i) {
                        var a = Wu(i);
                        return a.length == 1 && a[0][2] ? Im(a[0][0], a[0][1]) : function(c) {
                            return c === i || $u(c, i, a)
                        }
                    }

                    function zg(i, a) {
                        return Ku(i) && Cm(a) ? Im(gn(i), a) : function(c) {
                            var d = tf(c, i);
                            return d === r && d === a ? rf(c, i) : Ta(a, d, R | M)
                        }
                    }

                    function Vo(i, a, c, d, v) {
                        i !== a && Tu(a, function(b, I) {
                            if (v || (v = new tn), Ct(b)) r$(i, a, I, c, Vo, d, v);
                            else {
                                var N = d ? d(qu(i, I), b, I + "", i, a, v) : r;
                                N === r && (N = b), bu(i, I, N)
                            }
                        }, br)
                    }

                    function r$(i, a, c, d, v, b, I) {
                        var N = qu(i, c),
                            x = qu(a, c),
                            ee = I.get(x);
                        if (ee) {
                            bu(i, c, ee);
                            return
                        }
                        var te = b ? b(N, x, c + "", i, a, I) : r,
                            ae = te === r;
                        if (ae) {
                            var me = je(x),
                                we = !me && Jn(x),
                                Re = !me && !we && Ss(x);
                            te = x, me || we || Re ? je(N) ? te = N : Nt(N) ? te = yr(N) : we ? (ae = !1, te = om(x, !0)) : Re ? (ae = !1, te = lm(x, !0)) : te = [] : Ca(x) || Li(x) ? (te = N, Li(N) ? te = iv(N) : (!Ct(N) || Rn(N)) && (te = $m(x))) : ae = !1
                        }
                        ae && (I.set(x, te), v(te, x, d, b, I), I.delete(x)), bu(i, c, te)
                    }

                    function Xg(i, a) {
                        var c = i.length;
                        if (!!c) return a += a < 0 ? c : 0, Pn(a, c) ? i[a] : r
                    }

                    function Jg(i, a, c) {
                        a.length ? a = Ot(a, function(b) {
                            return je(b) ? function(I) {
                                return Ni(I, b.length === 1 ? b[0] : b)
                            } : b
                        }) : a = [Er];
                        var d = -1;
                        a = Ot(a, Ar(Pe()));
                        var v = qg(i, function(b, I, N) {
                            var x = Ot(a, function(ee) {
                                return ee(b)
                            });
                            return {
                                criteria: x,
                                index: ++d,
                                value: b
                            }
                        });
                        return A0(v, function(b, I) {
                            return g$(b, I, c)
                        })
                    }

                    function n$(i, a) {
                        return Qg(i, a, function(c, d) {
                            return rf(i, d)
                        })
                    }

                    function Qg(i, a, c) {
                        for (var d = -1, v = a.length, b = {}; ++d < v;) {
                            var I = a[d],
                                N = Ni(i, I);
                            c(N, I) && Sa(b, zn(I, i), N)
                        }
                        return b
                    }

                    function i$(i) {
                        return function(a) {
                            return Ni(a, i)
                        }
                    }

                    function Au(i, a, c, d) {
                        var v = d ? I0 : ds,
                            b = -1,
                            I = a.length,
                            N = i;
                        for (i === a && (a = yr(a)), c && (N = Ot(i, Ar(c))); ++b < I;)
                            for (var x = 0, ee = a[b], te = c ? c(ee) : ee;
                                (x = v(N, te, x, d)) > -1;) N !== i && Do.call(N, x, 1), Do.call(i, x, 1);
                        return i
                    }

                    function Zg(i, a) {
                        for (var c = i ? a.length : 0, d = c - 1; c--;) {
                            var v = a[c];
                            if (c == d || v !== b) {
                                var b = v;
                                Pn(v) ? Do.call(i, v, 1) : Lu(i, v)
                            }
                        }
                        return i
                    }

                    function Nu(i, a) {
                        return i + Bo(Lg() * (a - i + 1))
                    }

                    function s$(i, a, c, d) {
                        for (var v = -1, b = Bt(Fo((a - i) / (c || 1)), 0), I = q(b); b--;) I[d ? b : ++v] = i, i += c;
                        return I
                    }

                    function Pu(i, a) {
                        var c = "";
                        if (!i || a < 1 || a > ve) return c;
                        do a % 2 && (c += i), a = Bo(a / 2), a && (i += i); while (a);
                        return c
                    }

                    function Ve(i, a) {
                        return Yu(Am(i, a, Er), i + "")
                    }

                    function a$(i) {
                        return Dg(Os(i))
                    }

                    function o$(i, a) {
                        var c = Os(i);
                        return rl(c, Ai(a, 0, c.length))
                    }

                    function Sa(i, a, c, d) {
                        if (!Ct(i)) return i;
                        a = zn(a, i);
                        for (var v = -1, b = a.length, I = b - 1, N = i; N != null && ++v < b;) {
                            var x = gn(a[v]),
                                ee = c;
                            if (x === "__proto__" || x === "constructor" || x === "prototype") return i;
                            if (v != I) {
                                var te = N[x];
                                ee = d ? d(te, x, N) : r, ee === r && (ee = Ct(te) ? te : Pn(a[v + 1]) ? [] : {})
                            }
                            _a(N, x, ee), N = N[x]
                        }
                        return i
                    }
                    var em = Uo ? function(i, a) {
                            return Uo.set(i, a), i
                        } : Er,
                        l$ = Mo ? function(i, a) {
                            return Mo(i, "toString", {
                                configurable: !0,
                                enumerable: !1,
                                value: sf(a),
                                writable: !0
                            })
                        } : Er;

                    function c$(i) {
                        return rl(Os(i))
                    }

                    function Hr(i, a, c) {
                        var d = -1,
                            v = i.length;
                        a < 0 && (a = -a > v ? 0 : v + a), c = c > v ? v : c, c < 0 && (c += v), v = a > c ? 0 : c - a >>> 0, a >>>= 0;
                        for (var b = q(v); ++d < v;) b[d] = i[d + a];
                        return b
                    }

                    function u$(i, a) {
                        var c;
                        return qn(i, function(d, v, b) {
                            return c = a(d, v, b), !c
                        }), !!c
                    }

                    function qo(i, a, c) {
                        var d = 0,
                            v = i == null ? d : i.length;
                        if (typeof a == "number" && a === a && v <= It) {
                            for (; d < v;) {
                                var b = d + v >>> 1,
                                    I = i[b];
                                I !== null && !Pr(I) && (c ? I <= a : I < a) ? d = b + 1 : v = b
                            }
                            return v
                        }
                        return Ru(i, a, Er, c)
                    }

                    function Ru(i, a, c, d) {
                        var v = 0,
                            b = i == null ? 0 : i.length;
                        if (b === 0) return 0;
                        a = c(a);
                        for (var I = a !== a, N = a === null, x = Pr(a), ee = a === r; v < b;) {
                            var te = Bo((v + b) / 2),
                                ae = c(i[te]),
                                me = ae !== r,
                                we = ae === null,
                                Re = ae === ae,
                                Ke = Pr(ae);
                            if (I) var Le = d || Re;
                            else ee ? Le = Re && (d || me) : N ? Le = Re && me && (d || !we) : x ? Le = Re && me && !we && (d || !Ke) : we || Ke ? Le = !1 : Le = d ? ae <= a : ae < a;
                            Le ? v = te + 1 : b = te
                        }
                        return sr(b, tt)
                    }

                    function tm(i, a) {
                        for (var c = -1, d = i.length, v = 0, b = []; ++c < d;) {
                            var I = i[c],
                                N = a ? a(I) : I;
                            if (!c || !rn(N, x)) {
                                var x = N;
                                b[v++] = I === 0 ? 0 : I
                            }
                        }
                        return b
                    }

                    function rm(i) {
                        return typeof i == "number" ? i : Pr(i) ? Fe : +i
                    }

                    function Nr(i) {
                        if (typeof i == "string") return i;
                        if (je(i)) return Ot(i, Nr) + "";
                        if (Pr(i)) return kg ? kg.call(i) : "";
                        var a = i + "";
                        return a == "0" && 1 / i == -be ? "-0" : a
                    }

                    function Yn(i, a, c) {
                        var d = -1,
                            v = $o,
                            b = i.length,
                            I = !0,
                            N = [],
                            x = N;
                        if (c) I = !1, v = ou;
                        else if (b >= s) {
                            var ee = a ? null : E$(i);
                            if (ee) return Io(ee);
                            I = !1, v = ha, x = new Ii
                        } else x = a ? [] : N;
                        e: for (; ++d < b;) {
                            var te = i[d],
                                ae = a ? a(te) : te;
                            if (te = c || te !== 0 ? te : 0, I && ae === ae) {
                                for (var me = x.length; me--;)
                                    if (x[me] === ae) continue e;
                                a && x.push(ae), N.push(te)
                            } else v(x, ae, c) || (x !== N && x.push(ae), N.push(te))
                        }
                        return N
                    }

                    function Lu(i, a) {
                        return a = zn(a, i), i = Nm(i, a), i == null || delete i[gn(Kr(a))]
                    }

                    function nm(i, a, c, d) {
                        return Sa(i, a, c(Ni(i, a)), d)
                    }

                    function Yo(i, a, c, d) {
                        for (var v = i.length, b = d ? v : -1;
                            (d ? b-- : ++b < v) && a(i[b], b, i););
                        return c ? Hr(i, d ? 0 : b, d ? b + 1 : v) : Hr(i, d ? b + 1 : 0, d ? v : b)
                    }

                    function im(i, a) {
                        var c = i;
                        return c instanceof Ye && (c = c.value()), lu(a, function(d, v) {
                            return v.func.apply(v.thisArg, Hn([d], v.args))
                        }, c)
                    }

                    function ku(i, a, c) {
                        var d = i.length;
                        if (d < 2) return d ? Yn(i[0]) : [];
                        for (var v = -1, b = q(d); ++v < d;)
                            for (var I = i[v], N = -1; ++N < d;) N != v && (b[v] = ba(b[v] || I, i[N], a, c));
                        return Yn(Qt(b, 1), a, c)
                    }

                    function sm(i, a, c) {
                        for (var d = -1, v = i.length, b = a.length, I = {}; ++d < v;) {
                            var N = d < b ? a[d] : r;
                            c(I, i[d], N)
                        }
                        return I
                    }

                    function xu(i) {
                        return Nt(i) ? i : []
                    }

                    function Du(i) {
                        return typeof i == "function" ? i : Er
                    }

                    function zn(i, a) {
                        return je(i) ? i : Ku(i, a) ? [i] : km(lt(i))
                    }
                    var f$ = Ve;

                    function Xn(i, a, c) {
                        var d = i.length;
                        return c = c === r ? d : c, !a && c >= d ? i : Hr(i, a, c)
                    }
                    var am = Q0 || function(i) {
                        return Jt.clearTimeout(i)
                    };

                    function om(i, a) {
                        if (a) return i.slice();
                        var c = i.length,
                            d = Ig ? Ig(c) : new i.constructor(c);
                        return i.copy(d), d
                    }

                    function Mu(i) {
                        var a = new i.constructor(i.byteLength);
                        return new ko(a).set(new ko(i)), a
                    }

                    function d$(i, a) {
                        var c = a ? Mu(i.buffer) : i.buffer;
                        return new i.constructor(c, i.byteOffset, i.byteLength)
                    }

                    function h$(i) {
                        var a = new i.constructor(i.source, Hp.exec(i));
                        return a.lastIndex = i.lastIndex, a
                    }

                    function p$(i) {
                        return ya ? pt(ya.call(i)) : {}
                    }

                    function lm(i, a) {
                        var c = a ? Mu(i.buffer) : i.buffer;
                        return new i.constructor(c, i.byteOffset, i.length)
                    }

                    function cm(i, a) {
                        if (i !== a) {
                            var c = i !== r,
                                d = i === null,
                                v = i === i,
                                b = Pr(i),
                                I = a !== r,
                                N = a === null,
                                x = a === a,
                                ee = Pr(a);
                            if (!N && !ee && !b && i > a || b && I && x && !N && !ee || d && I && x || !c && x || !v) return 1;
                            if (!d && !b && !ee && i < a || ee && c && v && !d && !b || N && c && v || !I && v || !x) return -1
                        }
                        return 0
                    }

                    function g$(i, a, c) {
                        for (var d = -1, v = i.criteria, b = a.criteria, I = v.length, N = c.length; ++d < I;) {
                            var x = cm(v[d], b[d]);
                            if (x) {
                                if (d >= N) return x;
                                var ee = c[d];
                                return x * (ee == "desc" ? -1 : 1)
                            }
                        }
                        return i.index - a.index
                    }

                    function um(i, a, c, d) {
                        for (var v = -1, b = i.length, I = c.length, N = -1, x = a.length, ee = Bt(b - I, 0), te = q(x + ee), ae = !d; ++N < x;) te[N] = a[N];
                        for (; ++v < I;)(ae || v < b) && (te[c[v]] = i[v]);
                        for (; ee--;) te[N++] = i[v++];
                        return te
                    }

                    function fm(i, a, c, d) {
                        for (var v = -1, b = i.length, I = -1, N = c.length, x = -1, ee = a.length, te = Bt(b - N, 0), ae = q(te + ee), me = !d; ++v < te;) ae[v] = i[v];
                        for (var we = v; ++x < ee;) ae[we + x] = a[x];
                        for (; ++I < N;)(me || v < b) && (ae[we + c[I]] = i[v++]);
                        return ae
                    }

                    function yr(i, a) {
                        var c = -1,
                            d = i.length;
                        for (a || (a = q(d)); ++c < d;) a[c] = i[c];
                        return a
                    }

                    function pn(i, a, c, d) {
                        var v = !c;
                        c || (c = {});
                        for (var b = -1, I = a.length; ++b < I;) {
                            var N = a[b],
                                x = d ? d(c[N], i[N], N, c, i) : r;
                            x === r && (x = i[N]), v ? In(c, N, x) : _a(c, N, x)
                        }
                        return c
                    }

                    function m$(i, a) {
                        return pn(i, Hu(i), a)
                    }

                    function v$(i, a) {
                        return pn(i, Om(i), a)
                    }

                    function zo(i, a) {
                        return function(c, d) {
                            var v = je(c) ? T0 : B1,
                                b = a ? a() : {};
                            return v(c, i, Pe(d, 2), b)
                        }
                    }

                    function bs(i) {
                        return Ve(function(a, c) {
                            var d = -1,
                                v = c.length,
                                b = v > 1 ? c[v - 1] : r,
                                I = v > 2 ? c[2] : r;
                            for (b = i.length > 3 && typeof b == "function" ? (v--, b) : r, I && hr(c[0], c[1], I) && (b = v < 3 ? r : b, v = 1), a = pt(a); ++d < v;) {
                                var N = c[d];
                                N && i(a, N, d, b)
                            }
                            return a
                        })
                    }

                    function dm(i, a) {
                        return function(c, d) {
                            if (c == null) return c;
                            if (!_r(c)) return i(c, d);
                            for (var v = c.length, b = a ? v : -1, I = pt(c);
                                (a ? b-- : ++b < v) && d(I[b], b, I) !== !1;);
                            return c
                        }
                    }

                    function hm(i) {
                        return function(a, c, d) {
                            for (var v = -1, b = pt(a), I = d(a), N = I.length; N--;) {
                                var x = I[i ? N : ++v];
                                if (c(b[x], x, b) === !1) break
                            }
                            return a
                        }
                    }

                    function y$(i, a, c) {
                        var d = a & U,
                            v = Oa(i);

                        function b() {
                            var I = this && this !== Jt && this instanceof b ? v : i;
                            return I.apply(d ? c : this, arguments)
                        }
                        return b
                    }

                    function pm(i) {
                        return function(a) {
                            a = lt(a);
                            var c = hs(a) ? en(a) : r,
                                d = c ? c[0] : a.charAt(0),
                                v = c ? Xn(c, 1).join("") : a.slice(1);
                            return d[i]() + v
                        }
                    }

                    function Es(i) {
                        return function(a) {
                            return lu(dv(fv(a).replace(l0, "")), i, "")
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
                            var c = _s(i.prototype),
                                d = i.apply(c, a);
                            return Ct(d) ? d : c
                        }
                    }

                    function _$(i, a, c) {
                        var d = Oa(i);

                        function v() {
                            for (var b = arguments.length, I = q(b), N = b, x = Ts(v); N--;) I[N] = arguments[N];
                            var ee = b < 3 && I[0] !== x && I[b - 1] !== x ? [] : Kn(I, x);
                            if (b -= ee.length, b < c) return _m(i, a, Xo, v.placeholder, r, I, ee, r, r, c - b);
                            var te = this && this !== Jt && this instanceof v ? d : i;
                            return Ir(te, this, I)
                        }
                        return v
                    }

                    function gm(i) {
                        return function(a, c, d) {
                            var v = pt(a);
                            if (!_r(a)) {
                                var b = Pe(c, 3);
                                a = Kt(a), c = function(N) {
                                    return b(v[N], N, v)
                                }
                            }
                            var I = i(a, c, d);
                            return I > -1 ? v[b ? a[I] : I] : r
                        }
                    }

                    function mm(i) {
                        return Nn(function(a) {
                            var c = a.length,
                                d = c,
                                v = Gr.prototype.thru;
                            for (i && a.reverse(); d--;) {
                                var b = a[d];
                                if (typeof b != "function") throw new jr(l);
                                if (v && !I && el(b) == "wrapper") var I = new Gr([], !0)
                            }
                            for (d = I ? d : c; ++d < c;) {
                                b = a[d];
                                var N = el(b),
                                    x = N == "wrapper" ? Gu(b) : r;
                                x && Vu(x[0]) && x[1] == (oe | X | j | le) && !x[4].length && x[9] == 1 ? I = I[el(x[0])].apply(I, x[3]) : I = b.length == 1 && Vu(b) ? I[N]() : I.thru(b)
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

                    function Xo(i, a, c, d, v, b, I, N, x, ee) {
                        var te = a & oe,
                            ae = a & U,
                            me = a & C,
                            we = a & (X | W),
                            Re = a & ue,
                            Ke = me ? r : Oa(i);

                        function Le() {
                            for (var qe = arguments.length, Xe = q(qe), Rr = qe; Rr--;) Xe[Rr] = arguments[Rr];
                            if (we) var pr = Ts(Le),
                                Lr = P0(Xe, pr);
                            if (d && (Xe = um(Xe, d, v, we)), b && (Xe = fm(Xe, b, I, we)), qe -= Lr, we && qe < ee) {
                                var Pt = Kn(Xe, pr);
                                return _m(i, a, Xo, Le.placeholder, c, Xe, Pt, N, x, ee - qe)
                            }
                            var nn = ae ? c : this,
                                kn = me ? nn[i] : i;
                            return qe = Xe.length, N ? Xe = B$(Xe, N) : Re && qe > 1 && Xe.reverse(), te && x < qe && (Xe.length = x), this && this !== Jt && this instanceof Le && (kn = Ke || Oa(kn)), kn.apply(nn, Xe)
                        }
                        return Le
                    }

                    function vm(i, a) {
                        return function(c, d) {
                            return q1(c, i, a(d), {})
                        }
                    }

                    function Jo(i, a) {
                        return function(c, d) {
                            var v;
                            if (c === r && d === r) return a;
                            if (c !== r && (v = c), d !== r) {
                                if (v === r) return d;
                                typeof c == "string" || typeof d == "string" ? (c = Nr(c), d = Nr(d)) : (c = rm(c), d = rm(d)), v = i(c, d)
                            }
                            return v
                        }
                    }

                    function Fu(i) {
                        return Nn(function(a) {
                            return a = Ot(a, Ar(Pe())), Ve(function(c) {
                                var d = this;
                                return i(a, function(v) {
                                    return Ir(v, d, c)
                                })
                            })
                        })
                    }

                    function Qo(i, a) {
                        a = a === r ? " " : Nr(a);
                        var c = a.length;
                        if (c < 2) return c ? Pu(a, i) : a;
                        var d = Pu(a, Fo(i / ps(a)));
                        return hs(a) ? Xn(en(d), 0, i).join("") : d.slice(0, i)
                    }

                    function b$(i, a, c, d) {
                        var v = a & U,
                            b = Oa(i);

                        function I() {
                            for (var N = -1, x = arguments.length, ee = -1, te = d.length, ae = q(te + x), me = this && this !== Jt && this instanceof I ? b : i; ++ee < te;) ae[ee] = d[ee];
                            for (; x--;) ae[ee++] = arguments[++N];
                            return Ir(me, v ? c : this, ae)
                        }
                        return I
                    }

                    function ym(i) {
                        return function(a, c, d) {
                            return d && typeof d != "number" && hr(a, c, d) && (c = d = r), a = Ln(a), c === r ? (c = a, a = 0) : c = Ln(c), d = d === r ? a < c ? 1 : -1 : Ln(d), s$(a, c, d, i)
                        }
                    }

                    function Zo(i) {
                        return function(a, c) {
                            return typeof a == "string" && typeof c == "string" || (a = Vr(a), c = Vr(c)), i(a, c)
                        }
                    }

                    function _m(i, a, c, d, v, b, I, N, x, ee) {
                        var te = a & X,
                            ae = te ? I : r,
                            me = te ? r : I,
                            we = te ? b : r,
                            Re = te ? r : b;
                        a |= te ? j : Q, a &= ~(te ? Q : j), a & V || (a &= ~(U | C));
                        var Ke = [i, a, v, we, ae, Re, me, N, x, ee],
                            Le = c.apply(r, Ke);
                        return Vu(i) && Pm(Le, Ke), Le.placeholder = d, Rm(Le, i, a)
                    }

                    function Bu(i) {
                        var a = Ft[i];
                        return function(c, d) {
                            if (c = Vr(c), d = d == null ? 0 : sr(We(d), 292), d && Rg(c)) {
                                var v = (lt(c) + "e").split("e"),
                                    b = a(v[0] + "e" + (+v[1] + d));
                                return v = (lt(b) + "e").split("e"), +(v[0] + "e" + (+v[1] - d))
                            }
                            return a(c)
                        }
                    }
                    var E$ = vs && 1 / Io(new vs([, -0]))[1] == be ? function(i) {
                        return new vs(i)
                    } : lf;

                    function bm(i) {
                        return function(a) {
                            var c = ar(a);
                            return c == p ? gu(a) : c == re ? F0(a) : N0(a, i(a))
                        }
                    }

                    function An(i, a, c, d, v, b, I, N) {
                        var x = a & C;
                        if (!x && typeof i != "function") throw new jr(l);
                        var ee = d ? d.length : 0;
                        if (ee || (a &= ~(j | Q), d = v = r), I = I === r ? I : Bt(We(I), 0), N = N === r ? N : We(N), ee -= v ? v.length : 0, a & Q) {
                            var te = d,
                                ae = v;
                            d = v = r
                        }
                        var me = x ? r : Gu(i),
                            we = [i, a, c, d, v, te, ae, b, I, N];
                        if (me && D$(we, me), i = we[0], a = we[1], c = we[2], d = we[3], v = we[4], N = we[9] = we[9] === r ? x ? 0 : i.length : Bt(we[9] - ee, 0), !N && a & (X | W) && (a &= ~(X | W)), !a || a == U) var Re = y$(i, a, c);
                        else a == X || a == W ? Re = _$(i, a, N) : (a == j || a == (U | j)) && !v.length ? Re = b$(i, a, c, d) : Re = Xo.apply(r, we);
                        var Ke = me ? em : Pm;
                        return Rm(Ke(Re, we), i, a)
                    }

                    function Em(i, a, c, d) {
                        return i === r || rn(i, ms[c]) && !dt.call(d, c) ? a : i
                    }

                    function Tm(i, a, c, d, v, b) {
                        return Ct(i) && Ct(a) && (b.set(a, i), Vo(i, a, r, Tm, b), b.delete(a)), i
                    }

                    function T$(i) {
                        return Ca(i) ? r : i
                    }

                    function Sm(i, a, c, d, v, b) {
                        var I = c & R,
                            N = i.length,
                            x = a.length;
                        if (N != x && !(I && x > N)) return !1;
                        var ee = b.get(i),
                            te = b.get(a);
                        if (ee && te) return ee == a && te == i;
                        var ae = -1,
                            me = !0,
                            we = c & M ? new Ii : r;
                        for (b.set(i, a), b.set(a, i); ++ae < N;) {
                            var Re = i[ae],
                                Ke = a[ae];
                            if (d) var Le = I ? d(Ke, Re, ae, a, i, b) : d(Re, Ke, ae, i, a, b);
                            if (Le !== r) {
                                if (Le) continue;
                                me = !1;
                                break
                            }
                            if (we) {
                                if (!cu(a, function(qe, Xe) {
                                        if (!ha(we, Xe) && (Re === qe || v(Re, qe, c, d, b))) return we.push(Xe)
                                    })) {
                                    me = !1;
                                    break
                                }
                            } else if (!(Re === Ke || v(Re, Ke, c, d, b))) {
                                me = !1;
                                break
                            }
                        }
                        return b.delete(i), b.delete(a), me
                    }

                    function S$(i, a, c, d, v, b, I) {
                        switch (c) {
                            case w:
                                if (i.byteLength != a.byteLength || i.byteOffset != a.byteOffset) return !1;
                                i = i.buffer, a = a.buffer;
                            case De:
                                return !(i.byteLength != a.byteLength || !b(new ko(i), new ko(a)));
                            case St:
                            case ot:
                            case O:
                                return rn(+i, +a);
                            case Ht:
                                return i.name == a.name && i.message == a.message;
                            case se:
                            case A:
                                return i == a + "";
                            case p:
                                var N = gu;
                            case re:
                                var x = d & R;
                                if (N || (N = Io), i.size != a.size && !x) return !1;
                                var ee = I.get(i);
                                if (ee) return ee == a;
                                d |= M, I.set(i, a);
                                var te = Sm(N(i), N(a), d, v, b, I);
                                return I.delete(i), te;
                            case K:
                                if (ya) return ya.call(i) == ya.call(a)
                        }
                        return !1
                    }

                    function O$(i, a, c, d, v, b) {
                        var I = c & R,
                            N = Uu(i),
                            x = N.length,
                            ee = Uu(a),
                            te = ee.length;
                        if (x != te && !I) return !1;
                        for (var ae = x; ae--;) {
                            var me = N[ae];
                            if (!(I ? me in a : dt.call(a, me))) return !1
                        }
                        var we = b.get(i),
                            Re = b.get(a);
                        if (we && Re) return we == a && Re == i;
                        var Ke = !0;
                        b.set(i, a), b.set(a, i);
                        for (var Le = I; ++ae < x;) {
                            me = N[ae];
                            var qe = i[me],
                                Xe = a[me];
                            if (d) var Rr = I ? d(Xe, qe, me, a, i, b) : d(qe, Xe, me, i, a, b);
                            if (!(Rr === r ? qe === Xe || v(qe, Xe, c, d, b) : Rr)) {
                                Ke = !1;
                                break
                            }
                            Le || (Le = me == "constructor")
                        }
                        if (Ke && !Le) {
                            var pr = i.constructor,
                                Lr = a.constructor;
                            pr != Lr && "constructor" in i && "constructor" in a && !(typeof pr == "function" && pr instanceof pr && typeof Lr == "function" && Lr instanceof Lr) && (Ke = !1)
                        }
                        return b.delete(i), b.delete(a), Ke
                    }

                    function Nn(i) {
                        return Yu(Am(i, r, Fm), i + "")
                    }

                    function Uu(i) {
                        return Wg(i, Kt, Hu)
                    }

                    function ju(i) {
                        return Wg(i, br, Om)
                    }
                    var Gu = Uo ? function(i) {
                        return Uo.get(i)
                    } : lf;

                    function el(i) {
                        for (var a = i.name + "", c = ys[a], d = dt.call(ys, a) ? c.length : 0; d--;) {
                            var v = c[d],
                                b = v.func;
                            if (b == null || b == i) return v.name
                        }
                        return a
                    }

                    function Ts(i) {
                        var a = dt.call(y, "placeholder") ? y : i;
                        return a.placeholder
                    }

                    function Pe() {
                        var i = y.iteratee || af;
                        return i = i === af ? Vg : i, arguments.length ? i(arguments[0], arguments[1]) : i
                    }

                    function tl(i, a) {
                        var c = i.__data__;
                        return R$(a) ? c[typeof a == "string" ? "string" : "hash"] : c.map
                    }

                    function Wu(i) {
                        for (var a = Kt(i), c = a.length; c--;) {
                            var d = a[c],
                                v = i[d];
                            a[c] = [d, v, Cm(v)]
                        }
                        return a
                    }

                    function Pi(i, a) {
                        var c = x0(i, a);
                        return Kg(c) ? c : r
                    }

                    function w$(i) {
                        var a = dt.call(i, $i),
                            c = i[$i];
                        try {
                            i[$i] = r;
                            var d = !0
                        } catch {}
                        var v = Ro.call(i);
                        return d && (a ? i[$i] = c : delete i[$i]), v
                    }
                    var Hu = vu ? function(i) {
                            return i == null ? [] : (i = pt(i), Wn(vu(i), function(a) {
                                return Ng.call(i, a)
                            }))
                        } : cf,
                        Om = vu ? function(i) {
                            for (var a = []; i;) Hn(a, Hu(i)), i = xo(i);
                            return a
                        } : cf,
                        ar = dr;
                    (yu && ar(new yu(new ArrayBuffer(1))) != w || ga && ar(new ga) != p || _u && ar(_u.resolve()) != z || vs && ar(new vs) != re || ma && ar(new ma) != pe) && (ar = function(i) {
                        var a = dr(i),
                            c = a == B ? i.constructor : r,
                            d = c ? Ri(c) : "";
                        if (d) switch (d) {
                            case o1:
                                return w;
                            case l1:
                                return p;
                            case c1:
                                return z;
                            case u1:
                                return re;
                            case f1:
                                return pe
                        }
                        return a
                    });

                    function $$(i, a, c) {
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
                                    a = sr(a, i + I);
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

                    function C$(i) {
                        var a = i.match(Lw);
                        return a ? a[1].split(kw) : []
                    }

                    function wm(i, a, c) {
                        a = zn(a, i);
                        for (var d = -1, v = a.length, b = !1; ++d < v;) {
                            var I = gn(a[d]);
                            if (!(b = i != null && c(i, I))) break;
                            i = i[I]
                        }
                        return b || ++d != v ? b : (v = i == null ? 0 : i.length, !!v && ll(v) && Pn(I, v) && (je(i) || Li(i)))
                    }

                    function I$(i) {
                        var a = i.length,
                            c = new i.constructor(a);
                        return a && typeof i[0] == "string" && dt.call(i, "index") && (c.index = i.index, c.input = i.input), c
                    }

                    function $m(i) {
                        return typeof i.constructor == "function" && !wa(i) ? _s(xo(i)) : {}
                    }

                    function A$(i, a, c) {
                        var d = i.constructor;
                        switch (a) {
                            case De:
                                return Mu(i);
                            case St:
                            case ot:
                                return new d(+i);
                            case w:
                                return d$(i, c);
                            case T:
                            case P:
                            case S:
                            case L:
                            case Z:
                            case ne:
                            case _e:
                            case Te:
                            case ft:
                                return lm(i, c);
                            case p:
                                return new d;
                            case O:
                            case A:
                                return new d(i);
                            case se:
                                return h$(i);
                            case re:
                                return new d;
                            case K:
                                return p$(i)
                        }
                    }

                    function N$(i, a) {
                        var c = a.length;
                        if (!c) return i;
                        var d = c - 1;
                        return a[d] = (c > 1 ? "& " : "") + a[d], a = a.join(c > 2 ? ", " : " "), i.replace(Rw, `{
/* [wrapped with ` + a + `] */
`)
                    }

                    function P$(i) {
                        return je(i) || Li(i) || !!(Pg && i && i[Pg])
                    }

                    function Pn(i, a) {
                        var c = typeof i;
                        return a = a == null ? ve : a, !!a && (c == "number" || c != "symbol" && Ww.test(i)) && i > -1 && i % 1 == 0 && i < a
                    }

                    function hr(i, a, c) {
                        if (!Ct(c)) return !1;
                        var d = typeof a;
                        return (d == "number" ? _r(c) && Pn(a, c.length) : d == "string" && a in c) ? rn(c[a], i) : !1
                    }

                    function Ku(i, a) {
                        if (je(i)) return !1;
                        var c = typeof i;
                        return c == "number" || c == "symbol" || c == "boolean" || i == null || Pr(i) ? !0 : Iw.test(i) || !Cw.test(i) || a != null && i in pt(a)
                    }

                    function R$(i) {
                        var a = typeof i;
                        return a == "string" || a == "number" || a == "symbol" || a == "boolean" ? i !== "__proto__" : i === null
                    }

                    function Vu(i) {
                        var a = el(i),
                            c = y[a];
                        if (typeof c != "function" || !(a in Ye.prototype)) return !1;
                        if (i === c) return !0;
                        var d = Gu(c);
                        return !!d && i === d[0]
                    }

                    function L$(i) {
                        return !!Cg && Cg in i
                    }
                    var k$ = No ? Rn : uf;

                    function wa(i) {
                        var a = i && i.constructor,
                            c = typeof a == "function" && a.prototype || ms;
                        return i === c
                    }

                    function Cm(i) {
                        return i === i && !Ct(i)
                    }

                    function Im(i, a) {
                        return function(c) {
                            return c == null ? !1 : c[i] === a && (a !== r || i in pt(c))
                        }
                    }

                    function x$(i) {
                        var a = al(i, function(d) {
                                return c.size === h && c.clear(), d
                            }),
                            c = a.cache;
                        return a
                    }

                    function D$(i, a) {
                        var c = i[1],
                            d = a[1],
                            v = c | d,
                            b = v < (U | C | oe),
                            I = d == oe && c == X || d == oe && c == le && i[7].length <= a[8] || d == (oe | le) && a[7].length <= a[8] && c == X;
                        if (!(b || I)) return i;
                        d & U && (i[2] = a[2], v |= c & U ? 0 : V);
                        var N = a[3];
                        if (N) {
                            var x = i[3];
                            i[3] = x ? um(x, N, a[4]) : N, i[4] = x ? Kn(i[3], g) : a[4]
                        }
                        return N = a[5], N && (x = i[5], i[5] = x ? fm(x, N, a[6]) : N, i[6] = x ? Kn(i[5], g) : a[6]), N = a[7], N && (i[7] = N), d & oe && (i[8] = i[8] == null ? a[8] : sr(i[8], a[8])), i[9] == null && (i[9] = a[9]), i[0] = a[0], i[1] = v, i
                    }

                    function M$(i) {
                        var a = [];
                        if (i != null)
                            for (var c in pt(i)) a.push(c);
                        return a
                    }

                    function F$(i) {
                        return Ro.call(i)
                    }

                    function Am(i, a, c) {
                        return a = Bt(a === r ? i.length - 1 : a, 0),
                            function() {
                                for (var d = arguments, v = -1, b = Bt(d.length - a, 0), I = q(b); ++v < b;) I[v] = d[a + v];
                                v = -1;
                                for (var N = q(a + 1); ++v < a;) N[v] = d[v];
                                return N[a] = c(I), Ir(i, this, N)
                            }
                    }

                    function Nm(i, a) {
                        return a.length < 2 ? i : Ni(i, Hr(a, 0, -1))
                    }

                    function B$(i, a) {
                        for (var c = i.length, d = sr(a.length, c), v = yr(i); d--;) {
                            var b = a[d];
                            i[d] = Pn(b, c) ? v[b] : r
                        }
                        return i
                    }

                    function qu(i, a) {
                        if (!(a === "constructor" && typeof i[a] == "function") && a != "__proto__") return i[a]
                    }
                    var Pm = Lm(em),
                        $a = e1 || function(i, a) {
                            return Jt.setTimeout(i, a)
                        },
                        Yu = Lm(l$);

                    function Rm(i, a, c) {
                        var d = a + "";
                        return Yu(i, N$(d, U$(C$(d), c)))
                    }

                    function Lm(i) {
                        var a = 0,
                            c = 0;
                        return function() {
                            var d = i1(),
                                v = $e - (d - c);
                            if (c = d, v > 0) {
                                if (++a >= fe) return arguments[0]
                            } else a = 0;
                            return i.apply(r, arguments)
                        }
                    }

                    function rl(i, a) {
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
                    var km = x$(function(i) {
                        var a = [];
                        return i.charCodeAt(0) === 46 && a.push(""), i.replace(Aw, function(c, d, v, b) {
                            a.push(v ? b.replace(Mw, "$1") : d || c)
                        }), a
                    });

                    function gn(i) {
                        if (typeof i == "string" || Pr(i)) return i;
                        var a = i + "";
                        return a == "0" && 1 / i == -be ? "-0" : a
                    }

                    function Ri(i) {
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

                    function U$(i, a) {
                        return Ur(Cr, function(c) {
                            var d = "_." + c[0];
                            a & c[1] && !$o(i, d) && i.push(d)
                        }), i.sort()
                    }

                    function xm(i) {
                        if (i instanceof Ye) return i.clone();
                        var a = new Gr(i.__wrapped__, i.__chain__);
                        return a.__actions__ = yr(i.__actions__), a.__index__ = i.__index__, a.__values__ = i.__values__, a
                    }

                    function j$(i, a, c) {
                        (c ? hr(i, a, c) : a === r) ? a = 1: a = Bt(We(a), 0);
                        var d = i == null ? 0 : i.length;
                        if (!d || a < 1) return [];
                        for (var v = 0, b = 0, I = q(Fo(d / a)); v < d;) I[b++] = Hr(i, v, v += a);
                        return I
                    }

                    function G$(i) {
                        for (var a = -1, c = i == null ? 0 : i.length, d = 0, v = []; ++a < c;) {
                            var b = i[a];
                            b && (v[d++] = b)
                        }
                        return v
                    }

                    function W$() {
                        var i = arguments.length;
                        if (!i) return [];
                        for (var a = q(i - 1), c = arguments[0], d = i; d--;) a[d - 1] = arguments[d];
                        return Hn(je(c) ? yr(c) : [c], Qt(a, 1))
                    }
                    var H$ = Ve(function(i, a) {
                            return Nt(i) ? ba(i, Qt(a, 1, Nt, !0)) : []
                        }),
                        K$ = Ve(function(i, a) {
                            var c = Kr(a);
                            return Nt(c) && (c = r), Nt(i) ? ba(i, Qt(a, 1, Nt, !0), Pe(c, 2)) : []
                        }),
                        V$ = Ve(function(i, a) {
                            var c = Kr(a);
                            return Nt(c) && (c = r), Nt(i) ? ba(i, Qt(a, 1, Nt, !0), r, c) : []
                        });

                    function q$(i, a, c) {
                        var d = i == null ? 0 : i.length;
                        return d ? (a = c || a === r ? 1 : We(a), Hr(i, a < 0 ? 0 : a, d)) : []
                    }

                    function Y$(i, a, c) {
                        var d = i == null ? 0 : i.length;
                        return d ? (a = c || a === r ? 1 : We(a), a = d - a, Hr(i, 0, a < 0 ? 0 : a)) : []
                    }

                    function z$(i, a) {
                        return i && i.length ? Yo(i, Pe(a, 3), !0, !0) : []
                    }

                    function X$(i, a) {
                        return i && i.length ? Yo(i, Pe(a, 3), !0) : []
                    }

                    function J$(i, a, c, d) {
                        var v = i == null ? 0 : i.length;
                        return v ? (c && typeof c != "number" && hr(i, a, c) && (c = 0, d = v), W1(i, a, c, d)) : []
                    }

                    function Dm(i, a, c) {
                        var d = i == null ? 0 : i.length;
                        if (!d) return -1;
                        var v = c == null ? 0 : We(c);
                        return v < 0 && (v = Bt(d + v, 0)), Co(i, Pe(a, 3), v)
                    }

                    function Mm(i, a, c) {
                        var d = i == null ? 0 : i.length;
                        if (!d) return -1;
                        var v = d - 1;
                        return c !== r && (v = We(c), v = c < 0 ? Bt(d + v, 0) : sr(v, d - 1)), Co(i, Pe(a, 3), v, !0)
                    }

                    function Fm(i) {
                        var a = i == null ? 0 : i.length;
                        return a ? Qt(i, 1) : []
                    }

                    function Q$(i) {
                        var a = i == null ? 0 : i.length;
                        return a ? Qt(i, be) : []
                    }

                    function Z$(i, a) {
                        var c = i == null ? 0 : i.length;
                        return c ? (a = a === r ? 1 : We(a), Qt(i, a)) : []
                    }

                    function eC(i) {
                        for (var a = -1, c = i == null ? 0 : i.length, d = {}; ++a < c;) {
                            var v = i[a];
                            d[v[0]] = v[1]
                        }
                        return d
                    }

                    function Bm(i) {
                        return i && i.length ? i[0] : r
                    }

                    function tC(i, a, c) {
                        var d = i == null ? 0 : i.length;
                        if (!d) return -1;
                        var v = c == null ? 0 : We(c);
                        return v < 0 && (v = Bt(d + v, 0)), ds(i, a, v)
                    }

                    function rC(i) {
                        var a = i == null ? 0 : i.length;
                        return a ? Hr(i, 0, -1) : []
                    }
                    var nC = Ve(function(i) {
                            var a = Ot(i, xu);
                            return a.length && a[0] === i[0] ? wu(a) : []
                        }),
                        iC = Ve(function(i) {
                            var a = Kr(i),
                                c = Ot(i, xu);
                            return a === Kr(c) ? a = r : c.pop(), c.length && c[0] === i[0] ? wu(c, Pe(a, 2)) : []
                        }),
                        sC = Ve(function(i) {
                            var a = Kr(i),
                                c = Ot(i, xu);
                            return a = typeof a == "function" ? a : r, a && c.pop(), c.length && c[0] === i[0] ? wu(c, r, a) : []
                        });

                    function aC(i, a) {
                        return i == null ? "" : r1.call(i, a)
                    }

                    function Kr(i) {
                        var a = i == null ? 0 : i.length;
                        return a ? i[a - 1] : r
                    }

                    function oC(i, a, c) {
                        var d = i == null ? 0 : i.length;
                        if (!d) return -1;
                        var v = d;
                        return c !== r && (v = We(c), v = v < 0 ? Bt(d + v, 0) : sr(v, d - 1)), a === a ? U0(i, a, v) : Co(i, _g, v, !0)
                    }

                    function lC(i, a) {
                        return i && i.length ? Xg(i, We(a)) : r
                    }
                    var cC = Ve(Um);

                    function Um(i, a) {
                        return i && i.length && a && a.length ? Au(i, a) : i
                    }

                    function uC(i, a, c) {
                        return i && i.length && a && a.length ? Au(i, a, Pe(c, 2)) : i
                    }

                    function fC(i, a, c) {
                        return i && i.length && a && a.length ? Au(i, a, r, c) : i
                    }
                    var dC = Nn(function(i, a) {
                        var c = i == null ? 0 : i.length,
                            d = Eu(i, a);
                        return Zg(i, Ot(a, function(v) {
                            return Pn(v, c) ? +v : v
                        }).sort(cm)), d
                    });

                    function hC(i, a) {
                        var c = [];
                        if (!(i && i.length)) return c;
                        var d = -1,
                            v = [],
                            b = i.length;
                        for (a = Pe(a, 3); ++d < b;) {
                            var I = i[d];
                            a(I, d, i) && (c.push(I), v.push(d))
                        }
                        return Zg(i, v), c
                    }

                    function zu(i) {
                        return i == null ? i : a1.call(i)
                    }

                    function pC(i, a, c) {
                        var d = i == null ? 0 : i.length;
                        return d ? (c && typeof c != "number" && hr(i, a, c) ? (a = 0, c = d) : (a = a == null ? 0 : We(a), c = c === r ? d : We(c)), Hr(i, a, c)) : []
                    }

                    function gC(i, a) {
                        return qo(i, a)
                    }

                    function mC(i, a, c) {
                        return Ru(i, a, Pe(c, 2))
                    }

                    function vC(i, a) {
                        var c = i == null ? 0 : i.length;
                        if (c) {
                            var d = qo(i, a);
                            if (d < c && rn(i[d], a)) return d
                        }
                        return -1
                    }

                    function yC(i, a) {
                        return qo(i, a, !0)
                    }

                    function _C(i, a, c) {
                        return Ru(i, a, Pe(c, 2), !0)
                    }

                    function bC(i, a) {
                        var c = i == null ? 0 : i.length;
                        if (c) {
                            var d = qo(i, a, !0) - 1;
                            if (rn(i[d], a)) return d
                        }
                        return -1
                    }

                    function EC(i) {
                        return i && i.length ? tm(i) : []
                    }

                    function TC(i, a) {
                        return i && i.length ? tm(i, Pe(a, 2)) : []
                    }

                    function SC(i) {
                        var a = i == null ? 0 : i.length;
                        return a ? Hr(i, 1, a) : []
                    }

                    function OC(i, a, c) {
                        return i && i.length ? (a = c || a === r ? 1 : We(a), Hr(i, 0, a < 0 ? 0 : a)) : []
                    }

                    function wC(i, a, c) {
                        var d = i == null ? 0 : i.length;
                        return d ? (a = c || a === r ? 1 : We(a), a = d - a, Hr(i, a < 0 ? 0 : a, d)) : []
                    }

                    function $C(i, a) {
                        return i && i.length ? Yo(i, Pe(a, 3), !1, !0) : []
                    }

                    function CC(i, a) {
                        return i && i.length ? Yo(i, Pe(a, 3)) : []
                    }
                    var IC = Ve(function(i) {
                            return Yn(Qt(i, 1, Nt, !0))
                        }),
                        AC = Ve(function(i) {
                            var a = Kr(i);
                            return Nt(a) && (a = r), Yn(Qt(i, 1, Nt, !0), Pe(a, 2))
                        }),
                        NC = Ve(function(i) {
                            var a = Kr(i);
                            return a = typeof a == "function" ? a : r, Yn(Qt(i, 1, Nt, !0), r, a)
                        });

                    function PC(i) {
                        return i && i.length ? Yn(i) : []
                    }

                    function RC(i, a) {
                        return i && i.length ? Yn(i, Pe(a, 2)) : []
                    }

                    function LC(i, a) {
                        return a = typeof a == "function" ? a : r, i && i.length ? Yn(i, r, a) : []
                    }

                    function Xu(i) {
                        if (!(i && i.length)) return [];
                        var a = 0;
                        return i = Wn(i, function(c) {
                            if (Nt(c)) return a = Bt(c.length, a), !0
                        }), hu(a, function(c) {
                            return Ot(i, uu(c))
                        })
                    }

                    function jm(i, a) {
                        if (!(i && i.length)) return [];
                        var c = Xu(i);
                        return a == null ? c : Ot(c, function(d) {
                            return Ir(a, r, d)
                        })
                    }
                    var kC = Ve(function(i, a) {
                            return Nt(i) ? ba(i, a) : []
                        }),
                        xC = Ve(function(i) {
                            return ku(Wn(i, Nt))
                        }),
                        DC = Ve(function(i) {
                            var a = Kr(i);
                            return Nt(a) && (a = r), ku(Wn(i, Nt), Pe(a, 2))
                        }),
                        MC = Ve(function(i) {
                            var a = Kr(i);
                            return a = typeof a == "function" ? a : r, ku(Wn(i, Nt), r, a)
                        }),
                        FC = Ve(Xu);

                    function BC(i, a) {
                        return sm(i || [], a || [], _a)
                    }

                    function UC(i, a) {
                        return sm(i || [], a || [], Sa)
                    }
                    var jC = Ve(function(i) {
                        var a = i.length,
                            c = a > 1 ? i[a - 1] : r;
                        return c = typeof c == "function" ? (i.pop(), c) : r, jm(i, c)
                    });

                    function Gm(i) {
                        var a = y(i);
                        return a.__chain__ = !0, a
                    }

                    function GC(i, a) {
                        return a(i), i
                    }

                    function nl(i, a) {
                        return a(i)
                    }
                    var WC = Nn(function(i) {
                        var a = i.length,
                            c = a ? i[0] : 0,
                            d = this.__wrapped__,
                            v = function(b) {
                                return Eu(b, i)
                            };
                        return a > 1 || this.__actions__.length || !(d instanceof Ye) || !Pn(c) ? this.thru(v) : (d = d.slice(c, +c + (a ? 1 : 0)), d.__actions__.push({
                            func: nl,
                            args: [v],
                            thisArg: r
                        }), new Gr(d, this.__chain__).thru(function(b) {
                            return a && !b.length && b.push(r), b
                        }))
                    });

                    function HC() {
                        return Gm(this)
                    }

                    function KC() {
                        return new Gr(this.value(), this.__chain__)
                    }

                    function VC() {
                        this.__values__ === r && (this.__values__ = rv(this.value()));
                        var i = this.__index__ >= this.__values__.length,
                            a = i ? r : this.__values__[this.__index__++];
                        return {
                            done: i,
                            value: a
                        }
                    }

                    function qC() {
                        return this
                    }

                    function YC(i) {
                        for (var a, c = this; c instanceof Go;) {
                            var d = xm(c);
                            d.__index__ = 0, d.__values__ = r, a ? v.__wrapped__ = d : a = d;
                            var v = d;
                            c = c.__wrapped__
                        }
                        return v.__wrapped__ = i, a
                    }

                    function zC() {
                        var i = this.__wrapped__;
                        if (i instanceof Ye) {
                            var a = i;
                            return this.__actions__.length && (a = new Ye(this)), a = a.reverse(), a.__actions__.push({
                                func: nl,
                                args: [zu],
                                thisArg: r
                            }), new Gr(a, this.__chain__)
                        }
                        return this.thru(zu)
                    }

                    function XC() {
                        return im(this.__wrapped__, this.__actions__)
                    }
                    var JC = zo(function(i, a, c) {
                        dt.call(i, c) ? ++i[c] : In(i, c, 1)
                    });

                    function QC(i, a, c) {
                        var d = je(i) ? vg : G1;
                        return c && hr(i, a, c) && (a = r), d(i, Pe(a, 3))
                    }

                    function ZC(i, a) {
                        var c = je(i) ? Wn : jg;
                        return c(i, Pe(a, 3))
                    }
                    var eI = gm(Dm),
                        tI = gm(Mm);

                    function rI(i, a) {
                        return Qt(il(i, a), 1)
                    }

                    function nI(i, a) {
                        return Qt(il(i, a), be)
                    }

                    function iI(i, a, c) {
                        return c = c === r ? 1 : We(c), Qt(il(i, a), c)
                    }

                    function Wm(i, a) {
                        var c = je(i) ? Ur : qn;
                        return c(i, Pe(a, 3))
                    }

                    function Hm(i, a) {
                        var c = je(i) ? S0 : Ug;
                        return c(i, Pe(a, 3))
                    }
                    var sI = zo(function(i, a, c) {
                        dt.call(i, c) ? i[c].push(a) : In(i, c, [a])
                    });

                    function aI(i, a, c, d) {
                        i = _r(i) ? i : Os(i), c = c && !d ? We(c) : 0;
                        var v = i.length;
                        return c < 0 && (c = Bt(v + c, 0)), cl(i) ? c <= v && i.indexOf(a, c) > -1 : !!v && ds(i, a, c) > -1
                    }
                    var oI = Ve(function(i, a, c) {
                            var d = -1,
                                v = typeof a == "function",
                                b = _r(i) ? q(i.length) : [];
                            return qn(i, function(I) {
                                b[++d] = v ? Ir(a, I, c) : Ea(I, a, c)
                            }), b
                        }),
                        lI = zo(function(i, a, c) {
                            In(i, c, a)
                        });

                    function il(i, a) {
                        var c = je(i) ? Ot : qg;
                        return c(i, Pe(a, 3))
                    }

                    function cI(i, a, c, d) {
                        return i == null ? [] : (je(a) || (a = a == null ? [] : [a]), c = d ? r : c, je(c) || (c = c == null ? [] : [c]), Jg(i, a, c))
                    }
                    var uI = zo(function(i, a, c) {
                        i[c ? 0 : 1].push(a)
                    }, function() {
                        return [
                            [],
                            []
                        ]
                    });

                    function fI(i, a, c) {
                        var d = je(i) ? lu : Eg,
                            v = arguments.length < 3;
                        return d(i, Pe(a, 4), c, v, qn)
                    }

                    function dI(i, a, c) {
                        var d = je(i) ? O0 : Eg,
                            v = arguments.length < 3;
                        return d(i, Pe(a, 4), c, v, Ug)
                    }

                    function hI(i, a) {
                        var c = je(i) ? Wn : jg;
                        return c(i, ol(Pe(a, 3)))
                    }

                    function pI(i) {
                        var a = je(i) ? Dg : a$;
                        return a(i)
                    }

                    function gI(i, a, c) {
                        (c ? hr(i, a, c) : a === r) ? a = 1: a = We(a);
                        var d = je(i) ? M1 : o$;
                        return d(i, a)
                    }

                    function mI(i) {
                        var a = je(i) ? F1 : c$;
                        return a(i)
                    }

                    function vI(i) {
                        if (i == null) return 0;
                        if (_r(i)) return cl(i) ? ps(i) : i.length;
                        var a = ar(i);
                        return a == p || a == re ? i.size : Cu(i).length
                    }

                    function yI(i, a, c) {
                        var d = je(i) ? cu : u$;
                        return c && hr(i, a, c) && (a = r), d(i, Pe(a, 3))
                    }
                    var _I = Ve(function(i, a) {
                            if (i == null) return [];
                            var c = a.length;
                            return c > 1 && hr(i, a[0], a[1]) ? a = [] : c > 2 && hr(a[0], a[1], a[2]) && (a = [a[0]]), Jg(i, Qt(a, 1), [])
                        }),
                        sl = Z0 || function() {
                            return Jt.Date.now()
                        };

                    function bI(i, a) {
                        if (typeof a != "function") throw new jr(l);
                        return i = We(i),
                            function() {
                                if (--i < 1) return a.apply(this, arguments)
                            }
                    }

                    function Km(i, a, c) {
                        return a = c ? r : a, a = i && a == null ? i.length : a, An(i, oe, r, r, r, r, a)
                    }

                    function Vm(i, a) {
                        var c;
                        if (typeof a != "function") throw new jr(l);
                        return i = We(i),
                            function() {
                                return --i > 0 && (c = a.apply(this, arguments)), i <= 1 && (a = r), c
                            }
                    }
                    var Ju = Ve(function(i, a, c) {
                            var d = U;
                            if (c.length) {
                                var v = Kn(c, Ts(Ju));
                                d |= j
                            }
                            return An(i, d, a, c, v)
                        }),
                        qm = Ve(function(i, a, c) {
                            var d = U | C;
                            if (c.length) {
                                var v = Kn(c, Ts(qm));
                                d |= j
                            }
                            return An(a, d, i, c, v)
                        });

                    function Ym(i, a, c) {
                        a = c ? r : a;
                        var d = An(i, X, r, r, r, r, r, a);
                        return d.placeholder = Ym.placeholder, d
                    }

                    function zm(i, a, c) {
                        a = c ? r : a;
                        var d = An(i, W, r, r, r, r, r, a);
                        return d.placeholder = zm.placeholder, d
                    }

                    function Xm(i, a, c) {
                        var d, v, b, I, N, x, ee = 0,
                            te = !1,
                            ae = !1,
                            me = !0;
                        if (typeof i != "function") throw new jr(l);
                        a = Vr(a) || 0, Ct(c) && (te = !!c.leading, ae = "maxWait" in c, b = ae ? Bt(Vr(c.maxWait) || 0, a) : b, me = "trailing" in c ? !!c.trailing : me);

                        function we(Pt) {
                            var nn = d,
                                kn = v;
                            return d = v = r, ee = Pt, I = i.apply(kn, nn), I
                        }

                        function Re(Pt) {
                            return ee = Pt, N = $a(qe, a), te ? we(Pt) : I
                        }

                        function Ke(Pt) {
                            var nn = Pt - x,
                                kn = Pt - ee,
                                gv = a - nn;
                            return ae ? sr(gv, b - kn) : gv
                        }

                        function Le(Pt) {
                            var nn = Pt - x,
                                kn = Pt - ee;
                            return x === r || nn >= a || nn < 0 || ae && kn >= b
                        }

                        function qe() {
                            var Pt = sl();
                            if (Le(Pt)) return Xe(Pt);
                            N = $a(qe, Ke(Pt))
                        }

                        function Xe(Pt) {
                            return N = r, me && d ? we(Pt) : (d = v = r, I)
                        }

                        function Rr() {
                            N !== r && am(N), ee = 0, d = x = v = N = r
                        }

                        function pr() {
                            return N === r ? I : Xe(sl())
                        }

                        function Lr() {
                            var Pt = sl(),
                                nn = Le(Pt);
                            if (d = arguments, v = this, x = Pt, nn) {
                                if (N === r) return Re(x);
                                if (ae) return am(N), N = $a(qe, a), we(x)
                            }
                            return N === r && (N = $a(qe, a)), I
                        }
                        return Lr.cancel = Rr, Lr.flush = pr, Lr
                    }
                    var EI = Ve(function(i, a) {
                            return Bg(i, 1, a)
                        }),
                        TI = Ve(function(i, a, c) {
                            return Bg(i, Vr(a) || 0, c)
                        });

                    function SI(i) {
                        return An(i, ue)
                    }

                    function al(i, a) {
                        if (typeof i != "function" || a != null && typeof a != "function") throw new jr(l);
                        var c = function() {
                            var d = arguments,
                                v = a ? a.apply(this, d) : d[0],
                                b = c.cache;
                            if (b.has(v)) return b.get(v);
                            var I = i.apply(this, d);
                            return c.cache = b.set(v, I) || b, I
                        };
                        return c.cache = new(al.Cache || Cn), c
                    }
                    al.Cache = Cn;

                    function ol(i) {
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

                    function OI(i) {
                        return Vm(2, i)
                    }
                    var wI = f$(function(i, a) {
                            a = a.length == 1 && je(a[0]) ? Ot(a[0], Ar(Pe())) : Ot(Qt(a, 1), Ar(Pe()));
                            var c = a.length;
                            return Ve(function(d) {
                                for (var v = -1, b = sr(d.length, c); ++v < b;) d[v] = a[v].call(this, d[v]);
                                return Ir(i, this, d)
                            })
                        }),
                        Qu = Ve(function(i, a) {
                            var c = Kn(a, Ts(Qu));
                            return An(i, j, r, a, c)
                        }),
                        Jm = Ve(function(i, a) {
                            var c = Kn(a, Ts(Jm));
                            return An(i, Q, r, a, c)
                        }),
                        $I = Nn(function(i, a) {
                            return An(i, le, r, r, r, a)
                        });

                    function CI(i, a) {
                        if (typeof i != "function") throw new jr(l);
                        return a = a === r ? a : We(a), Ve(i, a)
                    }

                    function II(i, a) {
                        if (typeof i != "function") throw new jr(l);
                        return a = a == null ? 0 : Bt(We(a), 0), Ve(function(c) {
                            var d = c[a],
                                v = Xn(c, 0, a);
                            return d && Hn(v, d), Ir(i, this, v)
                        })
                    }

                    function AI(i, a, c) {
                        var d = !0,
                            v = !0;
                        if (typeof i != "function") throw new jr(l);
                        return Ct(c) && (d = "leading" in c ? !!c.leading : d, v = "trailing" in c ? !!c.trailing : v), Xm(i, a, {
                            leading: d,
                            maxWait: a,
                            trailing: v
                        })
                    }

                    function NI(i) {
                        return Km(i, 1)
                    }

                    function PI(i, a) {
                        return Qu(Du(a), i)
                    }

                    function RI() {
                        if (!arguments.length) return [];
                        var i = arguments[0];
                        return je(i) ? i : [i]
                    }

                    function LI(i) {
                        return Wr(i, $)
                    }

                    function kI(i, a) {
                        return a = typeof a == "function" ? a : r, Wr(i, $, a)
                    }

                    function xI(i) {
                        return Wr(i, _ | $)
                    }

                    function DI(i, a) {
                        return a = typeof a == "function" ? a : r, Wr(i, _ | $, a)
                    }

                    function MI(i, a) {
                        return a == null || Fg(i, a, Kt(a))
                    }

                    function rn(i, a) {
                        return i === a || i !== i && a !== a
                    }
                    var FI = Zo(Ou),
                        BI = Zo(function(i, a) {
                            return i >= a
                        }),
                        Li = Hg(function() {
                            return arguments
                        }()) ? Hg : function(i) {
                            return At(i) && dt.call(i, "callee") && !Ng.call(i, "callee")
                        },
                        je = q.isArray,
                        UI = fg ? Ar(fg) : Y1;

                    function _r(i) {
                        return i != null && ll(i.length) && !Rn(i)
                    }

                    function Nt(i) {
                        return At(i) && _r(i)
                    }

                    function jI(i) {
                        return i === !0 || i === !1 || At(i) && dr(i) == St
                    }
                    var Jn = t1 || uf,
                        GI = dg ? Ar(dg) : z1;

                    function WI(i) {
                        return At(i) && i.nodeType === 1 && !Ca(i)
                    }

                    function HI(i) {
                        if (i == null) return !0;
                        if (_r(i) && (je(i) || typeof i == "string" || typeof i.splice == "function" || Jn(i) || Ss(i) || Li(i))) return !i.length;
                        var a = ar(i);
                        if (a == p || a == re) return !i.size;
                        if (wa(i)) return !Cu(i).length;
                        for (var c in i)
                            if (dt.call(i, c)) return !1;
                        return !0
                    }

                    function KI(i, a) {
                        return Ta(i, a)
                    }

                    function VI(i, a, c) {
                        c = typeof c == "function" ? c : r;
                        var d = c ? c(i, a) : r;
                        return d === r ? Ta(i, a, r, c) : !!d
                    }

                    function Zu(i) {
                        if (!At(i)) return !1;
                        var a = dr(i);
                        return a == Ht || a == kt || typeof i.message == "string" && typeof i.name == "string" && !Ca(i)
                    }

                    function qI(i) {
                        return typeof i == "number" && Rg(i)
                    }

                    function Rn(i) {
                        if (!Ct(i)) return !1;
                        var a = dr(i);
                        return a == xt || a == m || a == at || a == ce
                    }

                    function Qm(i) {
                        return typeof i == "number" && i == We(i)
                    }

                    function ll(i) {
                        return typeof i == "number" && i > -1 && i % 1 == 0 && i <= ve
                    }

                    function Ct(i) {
                        var a = typeof i;
                        return i != null && (a == "object" || a == "function")
                    }

                    function At(i) {
                        return i != null && typeof i == "object"
                    }
                    var Zm = hg ? Ar(hg) : J1;

                    function YI(i, a) {
                        return i === a || $u(i, a, Wu(a))
                    }

                    function zI(i, a, c) {
                        return c = typeof c == "function" ? c : r, $u(i, a, Wu(a), c)
                    }

                    function XI(i) {
                        return ev(i) && i != +i
                    }

                    function JI(i) {
                        if (k$(i)) throw new Be(o);
                        return Kg(i)
                    }

                    function QI(i) {
                        return i === null
                    }

                    function ZI(i) {
                        return i == null
                    }

                    function ev(i) {
                        return typeof i == "number" || At(i) && dr(i) == O
                    }

                    function Ca(i) {
                        if (!At(i) || dr(i) != B) return !1;
                        var a = xo(i);
                        if (a === null) return !0;
                        var c = dt.call(a, "constructor") && a.constructor;
                        return typeof c == "function" && c instanceof c && Po.call(c) == z0
                    }
                    var ef = pg ? Ar(pg) : Q1;

                    function eA(i) {
                        return Qm(i) && i >= -ve && i <= ve
                    }
                    var tv = gg ? Ar(gg) : Z1;

                    function cl(i) {
                        return typeof i == "string" || !je(i) && At(i) && dr(i) == A
                    }

                    function Pr(i) {
                        return typeof i == "symbol" || At(i) && dr(i) == K
                    }
                    var Ss = mg ? Ar(mg) : e$;

                    function tA(i) {
                        return i === r
                    }

                    function rA(i) {
                        return At(i) && ar(i) == pe
                    }

                    function nA(i) {
                        return At(i) && dr(i) == Ne
                    }
                    var iA = Zo(Iu),
                        sA = Zo(function(i, a) {
                            return i <= a
                        });

                    function rv(i) {
                        if (!i) return [];
                        if (_r(i)) return cl(i) ? en(i) : yr(i);
                        if (pa && i[pa]) return M0(i[pa]());
                        var a = ar(i),
                            c = a == p ? gu : a == re ? Io : Os;
                        return c(i)
                    }

                    function Ln(i) {
                        if (!i) return i === 0 ? i : 0;
                        if (i = Vr(i), i === be || i === -be) {
                            var a = i < 0 ? -1 : 1;
                            return a * Oe
                        }
                        return i === i ? i : 0
                    }

                    function We(i) {
                        var a = Ln(i),
                            c = a % 1;
                        return a === a ? c ? a - c : a : 0
                    }

                    function nv(i) {
                        return i ? Ai(We(i), 0, Ge) : 0
                    }

                    function Vr(i) {
                        if (typeof i == "number") return i;
                        if (Pr(i)) return Fe;
                        if (Ct(i)) {
                            var a = typeof i.valueOf == "function" ? i.valueOf() : i;
                            i = Ct(a) ? a + "" : a
                        }
                        if (typeof i != "string") return i === 0 ? i : +i;
                        i = Tg(i);
                        var c = Uw.test(i);
                        return c || Gw.test(i) ? b0(i.slice(2), c ? 2 : 8) : Bw.test(i) ? Fe : +i
                    }

                    function iv(i) {
                        return pn(i, br(i))
                    }

                    function aA(i) {
                        return i ? Ai(We(i), -ve, ve) : i === 0 ? i : 0
                    }

                    function lt(i) {
                        return i == null ? "" : Nr(i)
                    }
                    var oA = bs(function(i, a) {
                            if (wa(a) || _r(a)) {
                                pn(a, Kt(a), i);
                                return
                            }
                            for (var c in a) dt.call(a, c) && _a(i, c, a[c])
                        }),
                        sv = bs(function(i, a) {
                            pn(a, br(a), i)
                        }),
                        ul = bs(function(i, a, c, d) {
                            pn(a, br(a), i, d)
                        }),
                        lA = bs(function(i, a, c, d) {
                            pn(a, Kt(a), i, d)
                        }),
                        cA = Nn(Eu);

                    function uA(i, a) {
                        var c = _s(i);
                        return a == null ? c : Mg(c, a)
                    }
                    var fA = Ve(function(i, a) {
                            i = pt(i);
                            var c = -1,
                                d = a.length,
                                v = d > 2 ? a[2] : r;
                            for (v && hr(a[0], a[1], v) && (d = 1); ++c < d;)
                                for (var b = a[c], I = br(b), N = -1, x = I.length; ++N < x;) {
                                    var ee = I[N],
                                        te = i[ee];
                                    (te === r || rn(te, ms[ee]) && !dt.call(i, ee)) && (i[ee] = b[ee])
                                }
                            return i
                        }),
                        dA = Ve(function(i) {
                            return i.push(r, Tm), Ir(av, r, i)
                        });

                    function hA(i, a) {
                        return yg(i, Pe(a, 3), hn)
                    }

                    function pA(i, a) {
                        return yg(i, Pe(a, 3), Su)
                    }

                    function gA(i, a) {
                        return i == null ? i : Tu(i, Pe(a, 3), br)
                    }

                    function mA(i, a) {
                        return i == null ? i : Gg(i, Pe(a, 3), br)
                    }

                    function vA(i, a) {
                        return i && hn(i, Pe(a, 3))
                    }

                    function yA(i, a) {
                        return i && Su(i, Pe(a, 3))
                    }

                    function _A(i) {
                        return i == null ? [] : Ko(i, Kt(i))
                    }

                    function bA(i) {
                        return i == null ? [] : Ko(i, br(i))
                    }

                    function tf(i, a, c) {
                        var d = i == null ? r : Ni(i, a);
                        return d === r ? c : d
                    }

                    function EA(i, a) {
                        return i != null && wm(i, a, H1)
                    }

                    function rf(i, a) {
                        return i != null && wm(i, a, K1)
                    }
                    var TA = vm(function(i, a, c) {
                            a != null && typeof a.toString != "function" && (a = Ro.call(a)), i[a] = c
                        }, sf(Er)),
                        SA = vm(function(i, a, c) {
                            a != null && typeof a.toString != "function" && (a = Ro.call(a)), dt.call(i, a) ? i[a].push(c) : i[a] = [c]
                        }, Pe),
                        OA = Ve(Ea);

                    function Kt(i) {
                        return _r(i) ? xg(i) : Cu(i)
                    }

                    function br(i) {
                        return _r(i) ? xg(i, !0) : t$(i)
                    }

                    function wA(i, a) {
                        var c = {};
                        return a = Pe(a, 3), hn(i, function(d, v, b) {
                            In(c, a(d, v, b), d)
                        }), c
                    }

                    function $A(i, a) {
                        var c = {};
                        return a = Pe(a, 3), hn(i, function(d, v, b) {
                            In(c, v, a(d, v, b))
                        }), c
                    }
                    var CA = bs(function(i, a, c) {
                            Vo(i, a, c)
                        }),
                        av = bs(function(i, a, c, d) {
                            Vo(i, a, c, d)
                        }),
                        IA = Nn(function(i, a) {
                            var c = {};
                            if (i == null) return c;
                            var d = !1;
                            a = Ot(a, function(b) {
                                return b = zn(b, i), d || (d = b.length > 1), b
                            }), pn(i, ju(i), c), d && (c = Wr(c, _ | E | $, T$));
                            for (var v = a.length; v--;) Lu(c, a[v]);
                            return c
                        });

                    function AA(i, a) {
                        return ov(i, ol(Pe(a)))
                    }
                    var NA = Nn(function(i, a) {
                        return i == null ? {} : n$(i, a)
                    });

                    function ov(i, a) {
                        if (i == null) return {};
                        var c = Ot(ju(i), function(d) {
                            return [d]
                        });
                        return a = Pe(a), Qg(i, c, function(d, v) {
                            return a(d, v[0])
                        })
                    }

                    function PA(i, a, c) {
                        a = zn(a, i);
                        var d = -1,
                            v = a.length;
                        for (v || (v = 1, i = r); ++d < v;) {
                            var b = i == null ? r : i[gn(a[d])];
                            b === r && (d = v, b = c), i = Rn(b) ? b.call(i) : b
                        }
                        return i
                    }

                    function RA(i, a, c) {
                        return i == null ? i : Sa(i, a, c)
                    }

                    function LA(i, a, c, d) {
                        return d = typeof d == "function" ? d : r, i == null ? i : Sa(i, a, c, d)
                    }
                    var lv = bm(Kt),
                        cv = bm(br);

                    function kA(i, a, c) {
                        var d = je(i),
                            v = d || Jn(i) || Ss(i);
                        if (a = Pe(a, 4), c == null) {
                            var b = i && i.constructor;
                            v ? c = d ? new b : [] : Ct(i) ? c = Rn(b) ? _s(xo(i)) : {} : c = {}
                        }
                        return (v ? Ur : hn)(i, function(I, N, x) {
                            return a(c, I, N, x)
                        }), c
                    }

                    function xA(i, a) {
                        return i == null ? !0 : Lu(i, a)
                    }

                    function DA(i, a, c) {
                        return i == null ? i : nm(i, a, Du(c))
                    }

                    function MA(i, a, c, d) {
                        return d = typeof d == "function" ? d : r, i == null ? i : nm(i, a, Du(c), d)
                    }

                    function Os(i) {
                        return i == null ? [] : pu(i, Kt(i))
                    }

                    function FA(i) {
                        return i == null ? [] : pu(i, br(i))
                    }

                    function BA(i, a, c) {
                        return c === r && (c = a, a = r), c !== r && (c = Vr(c), c = c === c ? c : 0), a !== r && (a = Vr(a), a = a === a ? a : 0), Ai(Vr(i), a, c)
                    }

                    function UA(i, a, c) {
                        return a = Ln(a), c === r ? (c = a, a = 0) : c = Ln(c), i = Vr(i), V1(i, a, c)
                    }

                    function jA(i, a, c) {
                        if (c && typeof c != "boolean" && hr(i, a, c) && (a = c = r), c === r && (typeof a == "boolean" ? (c = a, a = r) : typeof i == "boolean" && (c = i, i = r)), i === r && a === r ? (i = 0, a = 1) : (i = Ln(i), a === r ? (a = i, i = 0) : a = Ln(a)), i > a) {
                            var d = i;
                            i = a, a = d
                        }
                        if (c || i % 1 || a % 1) {
                            var v = Lg();
                            return sr(i + v * (a - i + _0("1e-" + ((v + "").length - 1))), a)
                        }
                        return Nu(i, a)
                    }
                    var GA = Es(function(i, a, c) {
                        return a = a.toLowerCase(), i + (c ? uv(a) : a)
                    });

                    function uv(i) {
                        return nf(lt(i).toLowerCase())
                    }

                    function fv(i) {
                        return i = lt(i), i && i.replace(Hw, R0).replace(c0, "")
                    }

                    function WA(i, a, c) {
                        i = lt(i), a = Nr(a);
                        var d = i.length;
                        c = c === r ? d : Ai(We(c), 0, d);
                        var v = c;
                        return c -= a.length, c >= 0 && i.slice(c, v) == a
                    }

                    function HA(i) {
                        return i = lt(i), i && Ow.test(i) ? i.replace(Gp, L0) : i
                    }

                    function KA(i) {
                        return i = lt(i), i && Nw.test(i) ? i.replace(Qc, "\\$&") : i
                    }
                    var VA = Es(function(i, a, c) {
                            return i + (c ? "-" : "") + a.toLowerCase()
                        }),
                        qA = Es(function(i, a, c) {
                            return i + (c ? " " : "") + a.toLowerCase()
                        }),
                        YA = pm("toLowerCase");

                    function zA(i, a, c) {
                        i = lt(i), a = We(a);
                        var d = a ? ps(i) : 0;
                        if (!a || d >= a) return i;
                        var v = (a - d) / 2;
                        return Qo(Bo(v), c) + i + Qo(Fo(v), c)
                    }

                    function XA(i, a, c) {
                        i = lt(i), a = We(a);
                        var d = a ? ps(i) : 0;
                        return a && d < a ? i + Qo(a - d, c) : i
                    }

                    function JA(i, a, c) {
                        i = lt(i), a = We(a);
                        var d = a ? ps(i) : 0;
                        return a && d < a ? Qo(a - d, c) + i : i
                    }

                    function QA(i, a, c) {
                        return c || a == null ? a = 0 : a && (a = +a), s1(lt(i).replace(Zc, ""), a || 0)
                    }

                    function ZA(i, a, c) {
                        return (c ? hr(i, a, c) : a === r) ? a = 1 : a = We(a), Pu(lt(i), a)
                    }

                    function eN() {
                        var i = arguments,
                            a = lt(i[0]);
                        return i.length < 3 ? a : a.replace(i[1], i[2])
                    }
                    var tN = Es(function(i, a, c) {
                        return i + (c ? "_" : "") + a.toLowerCase()
                    });

                    function rN(i, a, c) {
                        return c && typeof c != "number" && hr(i, a, c) && (a = c = r), c = c === r ? Ge : c >>> 0, c ? (i = lt(i), i && (typeof a == "string" || a != null && !ef(a)) && (a = Nr(a), !a && hs(i)) ? Xn(en(i), 0, c) : i.split(a, c)) : []
                    }
                    var nN = Es(function(i, a, c) {
                        return i + (c ? " " : "") + nf(a)
                    });

                    function iN(i, a, c) {
                        return i = lt(i), c = c == null ? 0 : Ai(We(c), 0, i.length), a = Nr(a), i.slice(c, c + a.length) == a
                    }

                    function sN(i, a, c) {
                        var d = y.templateSettings;
                        c && hr(i, a, c) && (a = r), i = lt(i), a = ul({}, a, d, Em);
                        var v = ul({}, a.imports, d.imports, Em),
                            b = Kt(v),
                            I = pu(v, b),
                            N, x, ee = 0,
                            te = a.interpolate || So,
                            ae = "__p += '",
                            me = mu((a.escape || So).source + "|" + te.source + "|" + (te === Wp ? Fw : So).source + "|" + (a.evaluate || So).source + "|$", "g"),
                            we = "//# sourceURL=" + (dt.call(a, "sourceURL") ? (a.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++p0 + "]") + `
`;
                        i.replace(me, function(Le, qe, Xe, Rr, pr, Lr) {
                            return Xe || (Xe = Rr), ae += i.slice(ee, Lr).replace(Kw, k0), qe && (N = !0, ae += `' +
__e(` + qe + `) +
'`), pr && (x = !0, ae += `';
` + pr + `;
__p += '`), Xe && (ae += `' +
((__t = (` + Xe + `)) == null ? '' : __t) +
'`), ee = Lr + Le.length, Le
                        }), ae += `';
`;
                        var Re = dt.call(a, "variable") && a.variable;
                        if (!Re) ae = `with (obj) {
` + ae + `
}
`;
                        else if (Dw.test(Re)) throw new Be(u);
                        ae = (x ? ae.replace(ir, "") : ae).replace(Me, "$1").replace(da, "$1;"), ae = "function(" + (Re || "obj") + `) {
` + (Re ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (N ? ", __e = _.escape" : "") + (x ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + ae + `return __p
}`;
                        var Ke = hv(function() {
                            return it(b, we + "return " + ae).apply(r, I)
                        });
                        if (Ke.source = ae, Zu(Ke)) throw Ke;
                        return Ke
                    }

                    function aN(i) {
                        return lt(i).toLowerCase()
                    }

                    function oN(i) {
                        return lt(i).toUpperCase()
                    }

                    function lN(i, a, c) {
                        if (i = lt(i), i && (c || a === r)) return Tg(i);
                        if (!i || !(a = Nr(a))) return i;
                        var d = en(i),
                            v = en(a),
                            b = Sg(d, v),
                            I = Og(d, v) + 1;
                        return Xn(d, b, I).join("")
                    }

                    function cN(i, a, c) {
                        if (i = lt(i), i && (c || a === r)) return i.slice(0, $g(i) + 1);
                        if (!i || !(a = Nr(a))) return i;
                        var d = en(i),
                            v = Og(d, en(a)) + 1;
                        return Xn(d, 0, v).join("")
                    }

                    function uN(i, a, c) {
                        if (i = lt(i), i && (c || a === r)) return i.replace(Zc, "");
                        if (!i || !(a = Nr(a))) return i;
                        var d = en(i),
                            v = Sg(d, en(a));
                        return Xn(d, v).join("")
                    }

                    function fN(i, a) {
                        var c = Ae,
                            d = Ce;
                        if (Ct(a)) {
                            var v = "separator" in a ? a.separator : v;
                            c = "length" in a ? We(a.length) : c, d = "omission" in a ? Nr(a.omission) : d
                        }
                        i = lt(i);
                        var b = i.length;
                        if (hs(i)) {
                            var I = en(i);
                            b = I.length
                        }
                        if (c >= b) return i;
                        var N = c - ps(d);
                        if (N < 1) return d;
                        var x = I ? Xn(I, 0, N).join("") : i.slice(0, N);
                        if (v === r) return x + d;
                        if (I && (N += x.length - N), ef(v)) {
                            if (i.slice(N).search(v)) {
                                var ee, te = x;
                                for (v.global || (v = mu(v.source, lt(Hp.exec(v)) + "g")), v.lastIndex = 0; ee = v.exec(te);) var ae = ee.index;
                                x = x.slice(0, ae === r ? N : ae)
                            }
                        } else if (i.indexOf(Nr(v), N) != N) {
                            var me = x.lastIndexOf(v);
                            me > -1 && (x = x.slice(0, me))
                        }
                        return x + d
                    }

                    function dN(i) {
                        return i = lt(i), i && Sw.test(i) ? i.replace(jp, j0) : i
                    }
                    var hN = Es(function(i, a, c) {
                            return i + (c ? " " : "") + a.toUpperCase()
                        }),
                        nf = pm("toUpperCase");

                    function dv(i, a, c) {
                        return i = lt(i), a = c ? r : a, a === r ? D0(i) ? H0(i) : C0(i) : i.match(a) || []
                    }
                    var hv = Ve(function(i, a) {
                            try {
                                return Ir(i, r, a)
                            } catch (c) {
                                return Zu(c) ? c : new Be(c)
                            }
                        }),
                        pN = Nn(function(i, a) {
                            return Ur(a, function(c) {
                                c = gn(c), In(i, c, Ju(i[c], i))
                            }), i
                        });

                    function gN(i) {
                        var a = i == null ? 0 : i.length,
                            c = Pe();
                        return i = a ? Ot(i, function(d) {
                            if (typeof d[1] != "function") throw new jr(l);
                            return [c(d[0]), d[1]]
                        }) : [], Ve(function(d) {
                            for (var v = -1; ++v < a;) {
                                var b = i[v];
                                if (Ir(b[0], this, d)) return Ir(b[1], this, d)
                            }
                        })
                    }

                    function mN(i) {
                        return j1(Wr(i, _))
                    }

                    function sf(i) {
                        return function() {
                            return i
                        }
                    }

                    function vN(i, a) {
                        return i == null || i !== i ? a : i
                    }
                    var yN = mm(),
                        _N = mm(!0);

                    function Er(i) {
                        return i
                    }

                    function af(i) {
                        return Vg(typeof i == "function" ? i : Wr(i, _))
                    }

                    function bN(i) {
                        return Yg(Wr(i, _))
                    }

                    function EN(i, a) {
                        return zg(i, Wr(a, _))
                    }
                    var TN = Ve(function(i, a) {
                            return function(c) {
                                return Ea(c, i, a)
                            }
                        }),
                        SN = Ve(function(i, a) {
                            return function(c) {
                                return Ea(i, c, a)
                            }
                        });

                    function of(i, a, c) {
                        var d = Kt(a),
                            v = Ko(a, d);
                        c == null && !(Ct(a) && (v.length || !d.length)) && (c = a, a = i, i = this, v = Ko(a, Kt(a)));
                        var b = !(Ct(c) && "chain" in c) || !!c.chain,
                            I = Rn(i);
                        return Ur(v, function(N) {
                            var x = a[N];
                            i[N] = x, I && (i.prototype[N] = function() {
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
                                return x.apply(i, Hn([this.value()], arguments))
                            })
                        }), i
                    }

                    function ON() {
                        return Jt._ === this && (Jt._ = X0), this
                    }

                    function lf() {}

                    function wN(i) {
                        return i = We(i), Ve(function(a) {
                            return Xg(a, i)
                        })
                    }
                    var $N = Fu(Ot),
                        CN = Fu(vg),
                        IN = Fu(cu);

                    function pv(i) {
                        return Ku(i) ? uu(gn(i)) : i$(i)
                    }

                    function AN(i) {
                        return function(a) {
                            return i == null ? r : Ni(i, a)
                        }
                    }
                    var NN = ym(),
                        PN = ym(!0);

                    function cf() {
                        return []
                    }

                    function uf() {
                        return !1
                    }

                    function RN() {
                        return {}
                    }

                    function LN() {
                        return ""
                    }

                    function kN() {
                        return !0
                    }

                    function xN(i, a) {
                        if (i = We(i), i < 1 || i > ve) return [];
                        var c = Ge,
                            d = sr(i, Ge);
                        a = Pe(a), i -= Ge;
                        for (var v = hu(d, a); ++c < i;) a(c);
                        return v
                    }

                    function DN(i) {
                        return je(i) ? Ot(i, gn) : Pr(i) ? [i] : yr(km(lt(i)))
                    }

                    function MN(i) {
                        var a = ++Y0;
                        return lt(i) + a
                    }
                    var FN = Jo(function(i, a) {
                            return i + a
                        }, 0),
                        BN = Bu("ceil"),
                        UN = Jo(function(i, a) {
                            return i / a
                        }, 1),
                        jN = Bu("floor");

                    function GN(i) {
                        return i && i.length ? Ho(i, Er, Ou) : r
                    }

                    function WN(i, a) {
                        return i && i.length ? Ho(i, Pe(a, 2), Ou) : r
                    }

                    function HN(i) {
                        return bg(i, Er)
                    }

                    function KN(i, a) {
                        return bg(i, Pe(a, 2))
                    }

                    function VN(i) {
                        return i && i.length ? Ho(i, Er, Iu) : r
                    }

                    function qN(i, a) {
                        return i && i.length ? Ho(i, Pe(a, 2), Iu) : r
                    }
                    var YN = Jo(function(i, a) {
                            return i * a
                        }, 1),
                        zN = Bu("round"),
                        XN = Jo(function(i, a) {
                            return i - a
                        }, 0);

                    function JN(i) {
                        return i && i.length ? du(i, Er) : 0
                    }

                    function QN(i, a) {
                        return i && i.length ? du(i, Pe(a, 2)) : 0
                    }
                    return y.after = bI, y.ary = Km, y.assign = oA, y.assignIn = sv, y.assignInWith = ul, y.assignWith = lA, y.at = cA, y.before = Vm, y.bind = Ju, y.bindAll = pN, y.bindKey = qm, y.castArray = RI, y.chain = Gm, y.chunk = j$, y.compact = G$, y.concat = W$, y.cond = gN, y.conforms = mN, y.constant = sf, y.countBy = JC, y.create = uA, y.curry = Ym, y.curryRight = zm, y.debounce = Xm, y.defaults = fA, y.defaultsDeep = dA, y.defer = EI, y.delay = TI, y.difference = H$, y.differenceBy = K$, y.differenceWith = V$, y.drop = q$, y.dropRight = Y$, y.dropRightWhile = z$, y.dropWhile = X$, y.fill = J$, y.filter = ZC, y.flatMap = rI, y.flatMapDeep = nI, y.flatMapDepth = iI, y.flatten = Fm, y.flattenDeep = Q$, y.flattenDepth = Z$, y.flip = SI, y.flow = yN, y.flowRight = _N, y.fromPairs = eC, y.functions = _A, y.functionsIn = bA, y.groupBy = sI, y.initial = rC, y.intersection = nC, y.intersectionBy = iC, y.intersectionWith = sC, y.invert = TA, y.invertBy = SA, y.invokeMap = oI, y.iteratee = af, y.keyBy = lI, y.keys = Kt, y.keysIn = br, y.map = il, y.mapKeys = wA, y.mapValues = $A, y.matches = bN, y.matchesProperty = EN, y.memoize = al, y.merge = CA, y.mergeWith = av, y.method = TN, y.methodOf = SN, y.mixin = of, y.negate = ol, y.nthArg = wN, y.omit = IA, y.omitBy = AA, y.once = OI, y.orderBy = cI, y.over = $N, y.overArgs = wI, y.overEvery = CN, y.overSome = IN, y.partial = Qu, y.partialRight = Jm, y.partition = uI, y.pick = NA, y.pickBy = ov, y.property = pv, y.propertyOf = AN, y.pull = cC, y.pullAll = Um, y.pullAllBy = uC, y.pullAllWith = fC, y.pullAt = dC, y.range = NN, y.rangeRight = PN, y.rearg = $I, y.reject = hI, y.remove = hC, y.rest = CI, y.reverse = zu, y.sampleSize = gI, y.set = RA, y.setWith = LA, y.shuffle = mI, y.slice = pC, y.sortBy = _I, y.sortedUniq = EC, y.sortedUniqBy = TC, y.split = rN, y.spread = II, y.tail = SC, y.take = OC, y.takeRight = wC, y.takeRightWhile = $C, y.takeWhile = CC, y.tap = GC, y.throttle = AI, y.thru = nl, y.toArray = rv, y.toPairs = lv, y.toPairsIn = cv, y.toPath = DN, y.toPlainObject = iv, y.transform = kA, y.unary = NI, y.union = IC, y.unionBy = AC, y.unionWith = NC, y.uniq = PC, y.uniqBy = RC, y.uniqWith = LC, y.unset = xA, y.unzip = Xu, y.unzipWith = jm, y.update = DA, y.updateWith = MA, y.values = Os, y.valuesIn = FA, y.without = kC, y.words = dv, y.wrap = PI, y.xor = xC, y.xorBy = DC, y.xorWith = MC, y.zip = FC, y.zipObject = BC, y.zipObjectDeep = UC, y.zipWith = jC, y.entries = lv, y.entriesIn = cv, y.extend = sv, y.extendWith = ul, of(y, y), y.add = FN, y.attempt = hv, y.camelCase = GA, y.capitalize = uv, y.ceil = BN, y.clamp = BA, y.clone = LI, y.cloneDeep = xI, y.cloneDeepWith = DI, y.cloneWith = kI, y.conformsTo = MI, y.deburr = fv, y.defaultTo = vN, y.divide = UN, y.endsWith = WA, y.eq = rn, y.escape = HA, y.escapeRegExp = KA, y.every = QC, y.find = eI, y.findIndex = Dm, y.findKey = hA, y.findLast = tI, y.findLastIndex = Mm, y.findLastKey = pA, y.floor = jN, y.forEach = Wm, y.forEachRight = Hm, y.forIn = gA, y.forInRight = mA, y.forOwn = vA, y.forOwnRight = yA, y.get = tf, y.gt = FI, y.gte = BI, y.has = EA, y.hasIn = rf, y.head = Bm, y.identity = Er, y.includes = aI, y.indexOf = tC, y.inRange = UA, y.invoke = OA, y.isArguments = Li, y.isArray = je, y.isArrayBuffer = UI, y.isArrayLike = _r, y.isArrayLikeObject = Nt, y.isBoolean = jI, y.isBuffer = Jn, y.isDate = GI, y.isElement = WI, y.isEmpty = HI, y.isEqual = KI, y.isEqualWith = VI, y.isError = Zu, y.isFinite = qI, y.isFunction = Rn, y.isInteger = Qm, y.isLength = ll, y.isMap = Zm, y.isMatch = YI, y.isMatchWith = zI, y.isNaN = XI, y.isNative = JI, y.isNil = ZI, y.isNull = QI, y.isNumber = ev, y.isObject = Ct, y.isObjectLike = At, y.isPlainObject = Ca, y.isRegExp = ef, y.isSafeInteger = eA, y.isSet = tv, y.isString = cl, y.isSymbol = Pr, y.isTypedArray = Ss, y.isUndefined = tA, y.isWeakMap = rA, y.isWeakSet = nA, y.join = aC, y.kebabCase = VA, y.last = Kr, y.lastIndexOf = oC, y.lowerCase = qA, y.lowerFirst = YA, y.lt = iA, y.lte = sA, y.max = GN, y.maxBy = WN, y.mean = HN, y.meanBy = KN, y.min = VN, y.minBy = qN, y.stubArray = cf, y.stubFalse = uf, y.stubObject = RN, y.stubString = LN, y.stubTrue = kN, y.multiply = YN, y.nth = lC, y.noConflict = ON, y.noop = lf, y.now = sl, y.pad = zA, y.padEnd = XA, y.padStart = JA, y.parseInt = QA, y.random = jA, y.reduce = fI, y.reduceRight = dI, y.repeat = ZA, y.replace = eN, y.result = PA, y.round = zN, y.runInContext = k, y.sample = pI, y.size = vI, y.snakeCase = tN, y.some = yI, y.sortedIndex = gC, y.sortedIndexBy = mC, y.sortedIndexOf = vC, y.sortedLastIndex = yC, y.sortedLastIndexBy = _C, y.sortedLastIndexOf = bC, y.startCase = nN, y.startsWith = iN, y.subtract = XN, y.sum = JN, y.sumBy = QN, y.template = sN, y.times = xN, y.toFinite = Ln, y.toInteger = We, y.toLength = nv, y.toLower = aN, y.toNumber = Vr, y.toSafeInteger = aA, y.toString = lt, y.toUpper = oN, y.trim = lN, y.trimEnd = cN, y.trimStart = uN, y.truncate = fN, y.unescape = dN, y.uniqueId = MN, y.upperCase = hN, y.upperFirst = nf, y.each = Wm, y.eachRight = Hm, y.first = Bm, of(y, function() {
                        var i = {};
                        return hn(y, function(a, c) {
                            dt.call(y.prototype, c) || (i[c] = a)
                        }), i
                    }(), {
                        chain: !1
                    }), y.VERSION = n, Ur(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(i) {
                        y[i].placeholder = y
                    }), Ur(["drop", "take"], function(i, a) {
                        Ye.prototype[i] = function(c) {
                            c = c === r ? 1 : Bt(We(c), 0);
                            var d = this.__filtered__ && !a ? new Ye(this) : this.clone();
                            return d.__filtered__ ? d.__takeCount__ = sr(c, d.__takeCount__) : d.__views__.push({
                                size: sr(c, Ge),
                                type: i + (d.__dir__ < 0 ? "Right" : "")
                            }), d
                        }, Ye.prototype[i + "Right"] = function(c) {
                            return this.reverse()[i](c).reverse()
                        }
                    }), Ur(["filter", "map", "takeWhile"], function(i, a) {
                        var c = a + 1,
                            d = c == F || c == de;
                        Ye.prototype[i] = function(v) {
                            var b = this.clone();
                            return b.__iteratees__.push({
                                iteratee: Pe(v, 3),
                                type: c
                            }), b.__filtered__ = b.__filtered__ || d, b
                        }
                    }), Ur(["head", "last"], function(i, a) {
                        var c = "take" + (a ? "Right" : "");
                        Ye.prototype[i] = function() {
                            return this[c](1).value()[0]
                        }
                    }), Ur(["initial", "tail"], function(i, a) {
                        var c = "drop" + (a ? "" : "Right");
                        Ye.prototype[i] = function() {
                            return this.__filtered__ ? new Ye(this) : this[c](1)
                        }
                    }), Ye.prototype.compact = function() {
                        return this.filter(Er)
                    }, Ye.prototype.find = function(i) {
                        return this.filter(i).head()
                    }, Ye.prototype.findLast = function(i) {
                        return this.reverse().find(i)
                    }, Ye.prototype.invokeMap = Ve(function(i, a) {
                        return typeof i == "function" ? new Ye(this) : this.map(function(c) {
                            return Ea(c, i, a)
                        })
                    }), Ye.prototype.reject = function(i) {
                        return this.filter(ol(Pe(i)))
                    }, Ye.prototype.slice = function(i, a) {
                        i = We(i);
                        var c = this;
                        return c.__filtered__ && (i > 0 || a < 0) ? new Ye(c) : (i < 0 ? c = c.takeRight(-i) : i && (c = c.drop(i)), a !== r && (a = We(a), c = a < 0 ? c.dropRight(-a) : c.take(a - i)), c)
                    }, Ye.prototype.takeRightWhile = function(i) {
                        return this.reverse().takeWhile(i).reverse()
                    }, Ye.prototype.toArray = function() {
                        return this.take(Ge)
                    }, hn(Ye.prototype, function(i, a) {
                        var c = /^(?:filter|find|map|reject)|While$/.test(a),
                            d = /^(?:head|last)$/.test(a),
                            v = y[d ? "take" + (a == "last" ? "Right" : "") : a],
                            b = d || /^find/.test(a);
                        !v || (y.prototype[a] = function() {
                            var I = this.__wrapped__,
                                N = d ? [1] : arguments,
                                x = I instanceof Ye,
                                ee = N[0],
                                te = x || je(I),
                                ae = function(qe) {
                                    var Xe = v.apply(y, Hn([qe], N));
                                    return d && me ? Xe[0] : Xe
                                };
                            te && c && typeof ee == "function" && ee.length != 1 && (x = te = !1);
                            var me = this.__chain__,
                                we = !!this.__actions__.length,
                                Re = b && !me,
                                Ke = x && !we;
                            if (!b && te) {
                                I = Ke ? I : new Ye(this);
                                var Le = i.apply(I, N);
                                return Le.__actions__.push({
                                    func: nl,
                                    args: [ae],
                                    thisArg: r
                                }), new Gr(Le, me)
                            }
                            return Re && Ke ? i.apply(this, N) : (Le = this.thru(ae), Re ? d ? Le.value()[0] : Le.value() : Le)
                        })
                    }), Ur(["pop", "push", "shift", "sort", "splice", "unshift"], function(i) {
                        var a = Ao[i],
                            c = /^(?:push|sort|unshift)$/.test(i) ? "tap" : "thru",
                            d = /^(?:pop|shift)$/.test(i);
                        y.prototype[i] = function() {
                            var v = arguments;
                            if (d && !this.__chain__) {
                                var b = this.value();
                                return a.apply(je(b) ? b : [], v)
                            }
                            return this[c](function(I) {
                                return a.apply(je(I) ? I : [], v)
                            })
                        }
                    }), hn(Ye.prototype, function(i, a) {
                        var c = y[a];
                        if (c) {
                            var d = c.name + "";
                            dt.call(ys, d) || (ys[d] = []), ys[d].push({
                                name: a,
                                func: c
                            })
                        }
                    }), ys[Xo(r, C).name] = [{
                        name: "wrapper",
                        func: r
                    }], Ye.prototype.clone = d1, Ye.prototype.reverse = h1, Ye.prototype.value = p1, y.prototype.at = WC, y.prototype.chain = HC, y.prototype.commit = KC, y.prototype.next = VC, y.prototype.plant = YC, y.prototype.reverse = zC, y.prototype.toJSON = y.prototype.valueOf = y.prototype.value = XC, y.prototype.first = y.prototype.head, pa && (y.prototype[pa] = qC), y
                },
                gs = K0();
            wi ? ((wi.exports = gs)._ = gs, su._ = gs) : Jt._ = gs
        }).call(Lt)
    })(Ql, Ql.exports);
    const BW = et({
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
                        _ = f * h;
                    return {
                        width: `${g}px`,
                        height: `${_}px`
                    }
                }
            },
            mounted() {
                this.onResizeWithContext = Ql.exports.throttle(this.onResize.bind(this), 400), window.addEventListener("resize", this.onResizeWithContext), this.setupStage()
            },
            beforeUnmount() {
                window.removeEventListener("resize", this.onResizeWithContext), this.stage && this.stage.beforeDestroy()
            },
            methods: {
                setupStage() {
                    const e = this.$refs.stage,
                        t = {};
                    this.player.size && (t.width = this.player.size.width, t.height = this.player.size.height), this.player.thicknesses && (t.thickness = this.player.thicknesses[0]), this.player.colors && (t.color = this.player.colors[0]), this.player.maxPoints && (t.maxPoints = this.player.maxPoints);
                    const r = new v3(e, t);
                    r.canvas.lines = Un([]), r.canvas.lines2 = Un([]), this.stage = r, this.stage.on("up", () => {
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
        UW = {
            class: "draw"
        },
        jW = {
            ref: "content",
            class: "content"
        },
        GW = {
            class: "constrain"
        },
        WW = {
            key: 0
        };

    function HW(e, t, r, n, s, o) {
        const l = Dt("bb");
        return G(), Y("div", UW, [H("div", jW, [H("div", GW, [e.player.prompt ? Ie((G(), Y("div", WW, null, 512)), [
            [l, e.player.prompt]
        ]) : Se("", !0), H("div", {
            ref: "stage",
            class: "stage",
            style: ac(e.stageDimensions)
        }, null, 4), H("button", {
            onClick: t[0] || (t[0] = zt((...u) => e.onSubmitClick && e.onSubmitClick(...u), ["prevent"]))
        }, nt(e.player.submitText || "SUBMIT"), 1)])], 512)])
    }
    const KW = ct(BW, [
            ["render", HW]
        ]),
        VW = et({
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
        qW = ["textContent"],
        YW = ["textContent"],
        zW = ["textContent"],
        XW = ["textContent"];

    function JW(e, t, r, n, s, o) {
        const l = Dt("t");
        return G(), Y("div", {
            class: xe(["lobby-actions", {
                vip: e.player.hasControls
            }])
        }, [!e.messageLocation || e.messageLocation === "top" ? (G(), Y("p", {
            key: 0,
            class: xe(e.localClasses.message),
            textContent: nt(e.joinedCountText)
        }, null, 10, qW)) : Se("", !0), e.player.hasControls ? (G(), Y(ze, {
            key: 1
        }, [e.player.status === "waitingForMore" ? (G(), Y("p", {
            key: 0,
            class: xe(e.localClasses.status)
        }, nt(e.neededText), 3)) : Se("", !0), e.player.status === "canStart" ? (G(), Y("button", {
            key: 1,
            class: xe(e.localClasses.action),
            onClick: t[0] || (t[0] = (...u) => e.onStartClick && e.onStartClick(...u)),
            textContent: nt(e.startText || e.$t("LOBBY.BUTTON_START"))
        }, null, 10, YW)) : Se("", !0), e.player.status === "countdown" ? (G(), Y("button", {
            key: 2,
            class: xe(e.localClasses.action),
            onClick: t[1] || (t[1] = (...u) => e.onCancelClick && e.onCancelClick(...u)),
            textContent: nt(e.cancelText || e.$t("LOBBY.BUTTON_CANCEL"))
        }, null, 10, zW)) : Se("", !0)], 64)) : e.player.gamepadStart ? (G(), Y(ze, {
            key: 2
        }, [e.player.status === "waitingForMore" ? (G(), Y("p", {
            key: 0,
            class: xe(e.localClasses.status)
        }, nt(e.neededText), 3)) : Se("", !0), e.player.status === "canStart" ? Ie((G(), Y("p", {
            key: 1,
            class: xe(e.localClasses.status)
        }, null, 2)), [
            [l, "LOBBY.WAITING_FOR_GAMEPAD"]
        ]) : Se("", !0), e.player.status === "countdown" ? Ie((G(), Y("p", {
            key: 2,
            class: xe(e.localClasses.status)
        }, null, 2)), [
            [l, "LOBBY.GAME_STARTING"]
        ]) : Se("", !0)], 64)) : (G(), Y(ze, {
            key: 3
        }, [e.player.status === "waitingForMore" ? (G(), Y("p", {
            key: 0,
            class: xe(e.localClasses.status)
        }, nt(e.neededText), 3)) : Se("", !0), e.player.status === "canStart" ? (G(), Y("p", {
            key: 1,
            class: xe(e.localClasses.status)
        }, nt(e.waitingForVIPText), 3)) : Se("", !0), e.player.status === "countdown" ? Ie((G(), Y("p", {
            key: 2,
            class: xe(e.localClasses.status)
        }, null, 2)), [
            [l, "LOBBY.GAME_STARTING"]
        ]) : Se("", !0)], 64)), e.messageLocation === "bottom" ? (G(), Y("p", {
            key: 4,
            class: xe(e.localClasses.message),
            textContent: nt(e.joinedCountText)
        }, null, 10, XW)) : Se("", !0)], 2)
    }
    const SS = ct(VW, [
            ["render", JW]
        ]),
        QW = et({
            components: {
                LobbyActions: SS
            },
            props: {
                player: Object
            }
        }),
        ZW = {
            class: "lobby"
        },
        eH = {
            class: "constrain"
        };

    function tH(e, t, r, n, s, o) {
        const l = Xr("LobbyActions");
        return G(), Y("div", ZW, [H("div", eH, [$t(l, {
            player: e.player
        }, null, 8, ["player"])])])
    }
    const rH = ct(QW, [
            ["render", tH]
        ]),
        nH = et({
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

    function iH(e, t, r, n, s, o) {
        const l = Dt("t");
        return e.player && e.player.status ? (G(), Y("div", {
            key: 0,
            class: xe(["post-game-actions", {
                vip: e.player.hasControls
            }])
        }, [!e.messageLocation || e.messageLocation === "top" ? Ie((G(), Y("p", {
            key: 0,
            class: xe(e.localClasses.message)
        }, null, 2)), [
            [l, "POST_GAME.PLAY_AGAIN"]
        ]) : Se("", !0), e.player.hasControls ? (G(), Y(ze, {
            key: 1
        }, [e.player.status === "waiting" ? Ie((G(), Y("button", {
            key: 0,
            class: xe(e.localClasses.action),
            onClick: t[0] || (t[0] = (...u) => e.onSamePlayersClick && e.onSamePlayersClick(...u))
        }, null, 2)), [
            [l, "POST_GAME.BUTTON_SAME_PLAYERS"]
        ]) : Se("", !0), e.player.status === "waiting" ? Ie((G(), Y("button", {
            key: 1,
            class: xe(e.localClasses.action),
            onClick: t[1] || (t[1] = (...u) => e.onNewPlayersClick && e.onNewPlayersClick(...u))
        }, null, 2)), [
            [l, "POST_GAME.BUTTON_NEW_PLAYERS"]
        ]) : Se("", !0), e.player.status === "countdown" ? Ie((G(), Y("button", {
            key: 2,
            class: xe(e.localClasses.action),
            onClick: t[2] || (t[2] = (...u) => e.onCancelClick && e.onCancelClick(...u))
        }, null, 2)), [
            [l, "LOBBY.BUTTON_CANCEL"]
        ]) : Se("", !0)], 64)) : e.player.gamepadStart ? Ie((G(), Y("p", {
            key: 2,
            class: xe(e.localClasses.status)
        }, null, 2)), [
            [l, "LOBBY.WAITING_FOR_GAMEPAD"]
        ]) : (G(), Y("p", {
            key: 3,
            class: xe(e.localClasses.status)
        }, nt(e.waitingForVIPText), 3)), e.messageLocation === "bottom" ? Ie((G(), Y("p", {
            key: 4,
            class: xe(e.localClasses.message)
        }, null, 2)), [
            [l, "POST_GAME.PLAY_AGAIN"]
        ]) : Se("", !0)], 2)) : Se("", !0)
    }
    const OS = ct(nH, [
            ["render", iH]
        ]),
        sH = et({
            components: {
                PostGameActions: OS
            },
            props: {
                player: Object
            }
        }),
        aH = {
            class: "post-game"
        },
        oH = {
            class: "constrain"
        };

    function lH(e, t, r, n, s, o) {
        const l = Xr("PostGameActions");
        return G(), Y("div", aH, [H("div", oH, [$t(l, {
            player: e.player
        }, null, 8, ["player"])])])
    }
    const cH = ct(sH, [
            ["render", lH]
        ]),
        uH = et({
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
                        if (e && e instanceof Or.ObjectEntity) return !0
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
        fH = {
            class: "single-text-entry"
        },
        dH = {
            class: "constrain"
        },
        hH = {
            key: 0
        },
        pH = {
            key: 1,
            for: "input"
        },
        gH = ["value", "rows", "placeholder", "disabled"],
        mH = ["value", "placeholder", "disabled"];

    function vH(e, t, r, n, s, o) {
        const l = Dt("bb");
        return G(), Y("div", fH, [H("div", dH, [e.player.prompt ? Ie((G(), Y("p", hH, null, 512)), [
            [l, e.player.prompt]
        ]) : Se("", !0), e.player.label ? Ie((G(), Y("label", pH, null, 512)), [
            [l, e.player.label]
        ]) : Se("", !0), e.player.isMultiline ? (G(), Y("textarea", {
            key: 2,
            id: "input",
            value: e.value,
            rows: e.player.lines || 2,
            placeholder: e.player.placeholder,
            disabled: e.player.isDisabled,
            onInput: t[0] || (t[0] = (...u) => e.onValueInput && e.onValueInput(...u))
        }, null, 40, gH)) : (G(), Y("input", {
            key: 3,
            id: "input",
            type: "text",
            value: e.value,
            placeholder: e.player.placeholder,
            disabled: e.player.isDisabled,
            onInput: t[1] || (t[1] = (...u) => e.onValueInput && e.onValueInput(...u))
        }, null, 40, mH)), Ie(H("button", {
            onClick: t[2] || (t[2] = zt((...u) => e.onSubmitClick && e.onSubmitClick(...u), ["prevent"]))
        }, null, 512), [
            [l, e.player.submitText || "SUBMIT"]
        ])])])
    }
    const yH = ct(uH, [
            ["render", vH]
        ]),
        _H = et({
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
                        if (e && e instanceof Or.ObjectEntity) return !0
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
        bH = {
            class: "multi-text-entry"
        },
        EH = {
            class: "constrain"
        },
        TH = {
            key: 0
        },
        SH = ["for"],
        OH = ["id", "value", "rows", "placeholder", "disabled", "onInput"],
        wH = ["id", "value", "placeholder", "disabled", "onInput"];

    function $H(e, t, r, n, s, o) {
        const l = Dt("bb");
        return G(), Y("div", bH, [H("div", EH, [e.player.prompt ? Ie((G(), Y("p", TH, null, 512)), [
            [l, e.player.prompt]
        ]) : Se("", !0), (G(!0), Y(ze, null, wr(e.player.inputs, (u, f) => (G(), Y(ze, null, [u.label ? Ie((G(), Y("label", {
            key: `label-${u.key}`,
            for: `input-${f}`
        }, null, 8, SH)), [
            [l, u.label]
        ]) : Se("", !0), u.isMultiline ? (G(), Y("textarea", {
            id: `input-${f}`,
            key: `input-${f}`,
            value: e.values[f],
            rows: u.lines || 2,
            placeholder: u.placeholder,
            disabled: u.isDisabled,
            onInput: h => e.onValueInput(h, f)
        }, null, 40, OH)) : (G(), Y("input", {
            id: `input-${f}`,
            key: `input-${u.key}`,
            type: "text",
            value: e.values[f],
            placeholder: u.placeholder,
            disabled: u.isDisabled,
            onInput: h => e.onValueInput(h, f)
        }, null, 40, wH))], 64))), 256)), Ie(H("button", {
            onClick: t[0] || (t[0] = zt((...u) => e.onSubmitClick && e.onSubmitClick(...u), ["prevent"]))
        }, null, 512), [
            [l, e.player.submitText || "SUBMIT"]
        ])])])
    }
    const CH = ct(_H, [
            ["render", $H]
        ]),
        IH = et({
            props: {
                player: Object
            }
        }),
        AH = {
            class: "waiting"
        },
        NH = {
            class: "constrain"
        },
        PH = {
            key: 0
        };

    function RH(e, t, r, n, s, o) {
        const l = Dt("bb");
        return G(), Y("div", AH, [H("div", NH, [e.player.message ? Ie((G(), Y("p", PH, null, 512)), [
            [l, e.player.message]
        ]) : Se("", !0)])])
    }
    const wS = ct(IH, [
        ["render", RH]
    ]);
    et({
        components: {
            Choices: FL,
            Doodle: FW,
            Draw: KW,
            Lobby: rH,
            PostGame: cH,
            SingleTextEntry: yH,
            MultiTextEntry: CH,
            Waiting: wS
        },
        props: {
            applyStyling: {
                type: Boolean,
                default: !0
            },
            player: Object
        }
    });
    const LH = et({
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
                    Vl.galleryClick(this.artifact.categoryId, "post_game"), to.setAsViewed(0)
                }
            }
        }),
        kH = ["href", "aria-label"];

    function xH(e, t, r, n, s, o) {
        return e.link ? (G(), Y("a", {
            key: 0,
            class: xe([{
                "no-content": !e.hasProvidedContent
            }, "artifact-link"]),
            target: "_blank",
            href: e.link,
            "aria-label": e.$t("POST_GAME.GALLERY_LINK"),
            onClick: t[0] || (t[0] = (...l) => e.onLinkClick && e.onLinkClick(...l))
        }, [TR(e.$slots, "default")], 10, kH)) : Se("", !0)
    }
    const DH = ct(LH, [
        ["render", xH]
    ]);
    et({
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
    });
    var Fi, _l, Ga = typeof Map == "function" ? new Map : (Fi = [], _l = [], {
            has: function(e) {
                return Fi.indexOf(e) > -1
            },
            get: function(e) {
                return _l[Fi.indexOf(e)]
            },
            set: function(e, t) {
                Fi.indexOf(e) === -1 && (Fi.push(e), _l.push(t))
            },
            delete: function(e) {
                var t = Fi.indexOf(e);
                t > -1 && (Fi.splice(t, 1), _l.splice(t, 1))
            }
        }),
        $S = function(e) {
            return new Event(e, {
                bubbles: !0
            })
        };
    try {
        new Event("test")
    } catch {
        $S = function(t) {
            var r = document.createEvent("Event");
            return r.initEvent(t, !0, !1), r
        }
    }

    function MH(e) {
        var t = Ga.get(e);
        t && t.destroy()
    }

    function FH(e) {
        var t = Ga.get(e);
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
                if (n && n.nodeName && n.nodeName === "TEXTAREA" && !Ga.has(n)) {
                    var s, o = null,
                        l = null,
                        u = null,
                        f = function() {
                            n.clientWidth !== l && E()
                        },
                        h = function($) {
                            window.removeEventListener("resize", f, !1), n.removeEventListener("input", E, !1), n.removeEventListener("keyup", E, !1), n.removeEventListener("autosize:destroy", h, !1), n.removeEventListener("autosize:update", E, !1), Object.keys($).forEach(function(R) {
                                n.style[R] = $[R]
                            }), Ga.delete(n)
                        }.bind(n, {
                            height: n.style.height,
                            resize: n.style.resize,
                            overflowY: n.style.overflowY,
                            overflowX: n.style.overflowX,
                            wordWrap: n.style.wordWrap
                        });
                    n.addEventListener("autosize:destroy", h, !1), "onpropertychange" in n && "oninput" in n && n.addEventListener("keyup", E, !1), window.addEventListener("resize", f, !1), n.addEventListener("input", E, !1), n.addEventListener("autosize:update", E, !1), n.style.overflowX = "hidden", n.style.wordWrap = "break-word", Ga.set(n, {
                        destroy: h,
                        update: E
                    }), (s = window.getComputedStyle(n, null)).resize === "vertical" ? n.style.resize = "none" : s.resize === "both" && (n.style.resize = "horizontal"), o = s.boxSizing === "content-box" ? -(parseFloat(s.paddingTop) + parseFloat(s.paddingBottom)) : parseFloat(s.borderTopWidth) + parseFloat(s.borderBottomWidth), isNaN(o) && (o = 0), E()
                }

                function g($) {
                    var R = n.style.width;
                    n.style.width = "0px", n.style.width = R, n.style.overflowY = $
                }

                function _() {
                    if (n.scrollHeight !== 0) {
                        var $ = function(M) {
                                for (var U = []; M && M.parentNode && M.parentNode instanceof Element;) M.parentNode.scrollTop && U.push({
                                    node: M.parentNode,
                                    scrollTop: M.parentNode.scrollTop
                                }), M = M.parentNode;
                                return U
                            }(n),
                            R = document.documentElement && document.documentElement.scrollTop;
                        n.style.height = "", n.style.height = n.scrollHeight + o + "px", l = n.clientWidth, $.forEach(function(M) {
                            M.node.scrollTop = M.scrollTop
                        }), R && (document.documentElement.scrollTop = R)
                    }
                }

                function E() {
                    _();
                    var $ = Math.round(parseFloat(n.style.height)),
                        R = window.getComputedStyle(n, null),
                        M = R.boxSizing === "content-box" ? Math.round(parseFloat(R.height)) : n.offsetHeight;
                    if (M < $ ? R.overflowY === "hidden" && (g("scroll"), _(), M = R.boxSizing === "content-box" ? Math.round(parseFloat(window.getComputedStyle(n, null).height)) : n.offsetHeight) : R.overflowY !== "hidden" && (g("hidden"), _(), M = R.boxSizing === "content-box" ? Math.round(parseFloat(window.getComputedStyle(n, null).height)) : n.offsetHeight), u !== M) {
                        u = M;
                        var U = $S("autosize:resized");
                        try {
                            n.dispatchEvent(U)
                        } catch {}
                    }
                }
            }(r)
        }), e
    }).destroy = function(e) {
        return e && Array.prototype.forEach.call(e.length ? e : [e], MH), e
    }, xa.update = function(e) {
        return e && Array.prototype.forEach.call(e.length ? e : [e], FH), e
    });
    var BH = xa,
        UH = {
            exports: {}
        },
        bl = function(e) {
            return e && e.Math == Math && e
        },
        Mr = bl(typeof globalThis == "object" && globalThis) || bl(typeof window == "object" && window) || bl(typeof self == "object" && self) || bl(typeof Lt == "object" && Lt) || function() {
            return this
        }() || Function("return this")(),
        sp = {},
        Fr = function(e) {
            try {
                return !!e()
            } catch {
                return !0
            }
        },
        jH = Fr,
        _i = !jH(function() {
            return Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1] != 7
        }),
        GH = Fr,
        ap = !GH(function() {
            var e = function() {}.bind();
            return typeof e != "function" || e.hasOwnProperty("prototype")
        }),
        WH = ap,
        El = Function.prototype.call,
        bi = WH ? El.bind(El) : function() {
            return El.apply(El, arguments)
        },
        CS = {},
        IS = {}.propertyIsEnumerable,
        AS = Object.getOwnPropertyDescriptor,
        HH = AS && !IS.call({
            1: 2
        }, 1);
    CS.f = HH ? function(t) {
        var r = AS(this, t);
        return !!r && r.enumerable
    } : IS;
    var NS = function(e, t) {
            return {
                enumerable: !(e & 1),
                configurable: !(e & 2),
                writable: !(e & 4),
                value: t
            }
        },
        PS = ap,
        RS = Function.prototype,
        KH = RS.bind,
        Pd = RS.call,
        VH = PS && KH.bind(Pd, Pd),
        fr = PS ? function(e) {
            return e && VH(e)
        } : function(e) {
            return e && function() {
                return Pd.apply(e, arguments)
            }
        },
        LS = fr,
        qH = LS({}.toString),
        YH = LS("".slice),
        Lc = function(e) {
            return YH(qH(e), 8, -1)
        },
        zH = fr,
        XH = Fr,
        JH = Lc,
        Nf = Object,
        QH = zH("".split),
        ZH = XH(function() {
            return !Nf("z").propertyIsEnumerable(0)
        }) ? function(e) {
            return JH(e) == "String" ? QH(e, "") : Nf(e)
        } : Nf,
        e8 = TypeError,
        go = function(e) {
            if (e == null) throw e8("Can't call method on " + e);
            return e
        },
        t8 = ZH,
        r8 = go,
        kc = function(e) {
            return t8(r8(e))
        },
        $r = function(e) {
            return typeof e == "function"
        },
        n8 = $r,
        ca = function(e) {
            return typeof e == "object" ? e !== null : n8(e)
        },
        Pf = Mr,
        i8 = $r,
        s8 = function(e) {
            return i8(e) ? e : void 0
        },
        xc = function(e, t) {
            return arguments.length < 2 ? s8(Pf[e]) : Pf[e] && Pf[e][t]
        },
        a8 = fr,
        kS = a8({}.isPrototypeOf),
        o8 = xc,
        l8 = o8("navigator", "userAgent") || "",
        xS = Mr,
        Rf = l8,
        Gy = xS.process,
        Wy = xS.Deno,
        Hy = Gy && Gy.versions || Wy && Wy.version,
        Ky = Hy && Hy.v8,
        sn, Zl;
    Ky && (sn = Ky.split("."), Zl = sn[0] > 0 && sn[0] < 4 ? 1 : +(sn[0] + sn[1]));
    !Zl && Rf && (sn = Rf.match(/Edge\/(\d+)/), (!sn || sn[1] >= 74) && (sn = Rf.match(/Chrome\/(\d+)/), sn && (Zl = +sn[1])));
    var c8 = Zl,
        Vy = c8,
        u8 = Fr,
        DS = !!Object.getOwnPropertySymbols && !u8(function() {
            var e = Symbol();
            return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && Vy && Vy < 41
        }),
        f8 = DS,
        MS = f8 && !Symbol.sham && typeof Symbol.iterator == "symbol",
        d8 = xc,
        h8 = $r,
        p8 = kS,
        g8 = MS,
        m8 = Object,
        FS = g8 ? function(e) {
            return typeof e == "symbol"
        } : function(e) {
            var t = d8("Symbol");
            return h8(t) && p8(t.prototype, m8(e))
        },
        v8 = String,
        y8 = function(e) {
            try {
                return v8(e)
            } catch {
                return "Object"
            }
        },
        _8 = $r,
        b8 = y8,
        E8 = TypeError,
        T8 = function(e) {
            if (_8(e)) return e;
            throw E8(b8(e) + " is not a function")
        },
        S8 = T8,
        op = function(e, t) {
            var r = e[t];
            return r == null ? void 0 : S8(r)
        },
        Lf = bi,
        kf = $r,
        xf = ca,
        O8 = TypeError,
        w8 = function(e, t) {
            var r, n;
            if (t === "string" && kf(r = e.toString) && !xf(n = Lf(r, e)) || kf(r = e.valueOf) && !xf(n = Lf(r, e)) || t !== "string" && kf(r = e.toString) && !xf(n = Lf(r, e))) return n;
            throw O8("Can't convert object to primitive value")
        },
        Dc = {
            exports: {}
        },
        qy = Mr,
        $8 = Object.defineProperty,
        lp = function(e, t) {
            try {
                $8(qy, e, {
                    value: t,
                    configurable: !0,
                    writable: !0
                })
            } catch {
                qy[e] = t
            }
            return t
        },
        C8 = Mr,
        I8 = lp,
        Yy = "__core-js_shared__",
        A8 = C8[Yy] || I8(Yy, {}),
        cp = A8,
        zy = cp;
    (Dc.exports = function(e, t) {
        return zy[e] || (zy[e] = t !== void 0 ? t : {})
    })("versions", []).push({
        version: "3.23.4",
        mode: "global",
        copyright: "\xA9 2014-2022 Denis Pushkarev (zloirock.ru)",
        license: "https://github.com/zloirock/core-js/blob/v3.23.4/LICENSE",
        source: "https://github.com/zloirock/core-js"
    });
    var N8 = go,
        P8 = Object,
        BS = function(e) {
            return P8(N8(e))
        },
        R8 = fr,
        L8 = BS,
        k8 = R8({}.hasOwnProperty),
        Ei = Object.hasOwn || function(t, r) {
            return k8(L8(t), r)
        },
        x8 = fr,
        D8 = 0,
        M8 = Math.random(),
        F8 = x8(1 .toString),
        US = function(e) {
            return "Symbol(" + (e === void 0 ? "" : e) + ")_" + F8(++D8 + M8, 36)
        },
        B8 = Mr,
        U8 = Dc.exports,
        Xy = Ei,
        j8 = US,
        Jy = DS,
        jS = MS,
        $s = U8("wks"),
        ns = B8.Symbol,
        Qy = ns && ns.for,
        G8 = jS ? ns : ns && ns.withoutSetter || j8,
        cs = function(e) {
            if (!Xy($s, e) || !(Jy || typeof $s[e] == "string")) {
                var t = "Symbol." + e;
                Jy && Xy(ns, e) ? $s[e] = ns[e] : jS && Qy ? $s[e] = Qy(t) : $s[e] = G8(t)
            }
            return $s[e]
        },
        W8 = bi,
        Zy = ca,
        e_ = FS,
        H8 = op,
        K8 = w8,
        V8 = cs,
        q8 = TypeError,
        Y8 = V8("toPrimitive"),
        z8 = function(e, t) {
            if (!Zy(e) || e_(e)) return e;
            var r = H8(e, Y8),
                n;
            if (r) {
                if (t === void 0 && (t = "default"), n = W8(r, e, t), !Zy(n) || e_(n)) return n;
                throw q8("Can't convert object to primitive value")
            }
            return t === void 0 && (t = "number"), K8(e, t)
        },
        X8 = z8,
        J8 = FS,
        GS = function(e) {
            var t = X8(e, "string");
            return J8(t) ? t : t + ""
        },
        Q8 = Mr,
        t_ = ca,
        Rd = Q8.document,
        Z8 = t_(Rd) && t_(Rd.createElement),
        WS = function(e) {
            return Z8 ? Rd.createElement(e) : {}
        },
        eK = _i,
        tK = Fr,
        rK = WS,
        HS = !eK && !tK(function() {
            return Object.defineProperty(rK("div"), "a", {
                get: function() {
                    return 7
                }
            }).a != 7
        }),
        nK = _i,
        iK = bi,
        sK = CS,
        aK = NS,
        oK = kc,
        lK = GS,
        cK = Ei,
        uK = HS,
        r_ = Object.getOwnPropertyDescriptor;
    sp.f = nK ? r_ : function(t, r) {
        if (t = oK(t), r = lK(r), uK) try {
            return r_(t, r)
        } catch {}
        if (cK(t, r)) return aK(!iK(sK.f, t, r), t[r])
    };
    var mo = {},
        fK = _i,
        dK = Fr,
        KS = fK && dK(function() {
            return Object.defineProperty(function() {}, "prototype", {
                value: 42,
                writable: !1
            }).prototype != 42
        }),
        hK = ca,
        pK = String,
        gK = TypeError,
        us = function(e) {
            if (hK(e)) return e;
            throw gK(pK(e) + " is not an object")
        },
        mK = _i,
        vK = HS,
        yK = KS,
        Tl = us,
        n_ = GS,
        _K = TypeError,
        Df = Object.defineProperty,
        bK = Object.getOwnPropertyDescriptor,
        Mf = "enumerable",
        Ff = "configurable",
        Bf = "writable";
    mo.f = mK ? yK ? function(t, r, n) {
        if (Tl(t), r = n_(r), Tl(n), typeof t == "function" && r === "prototype" && "value" in n && Bf in n && !n[Bf]) {
            var s = bK(t, r);
            s && s[Bf] && (t[r] = n.value, n = {
                configurable: Ff in n ? n[Ff] : s[Ff],
                enumerable: Mf in n ? n[Mf] : s[Mf],
                writable: !1
            })
        }
        return Df(t, r, n)
    } : Df : function(t, r, n) {
        if (Tl(t), r = n_(r), Tl(n), vK) try {
            return Df(t, r, n)
        } catch {}
        if ("get" in n || "set" in n) throw _K("Accessors not supported");
        return "value" in n && (t[r] = n.value), t
    };
    var EK = _i,
        TK = mo,
        SK = NS,
        up = EK ? function(e, t, r) {
            return TK.f(e, t, SK(1, r))
        } : function(e, t, r) {
            return e[t] = r, e
        },
        VS = {
            exports: {}
        },
        Ld = _i,
        OK = Ei,
        qS = Function.prototype,
        wK = Ld && Object.getOwnPropertyDescriptor,
        fp = OK(qS, "name"),
        $K = fp && function() {}.name === "something",
        CK = fp && (!Ld || Ld && wK(qS, "name").configurable),
        IK = {
            EXISTS: fp,
            PROPER: $K,
            CONFIGURABLE: CK
        },
        AK = fr,
        NK = $r,
        kd = cp,
        PK = AK(Function.toString);
    NK(kd.inspectSource) || (kd.inspectSource = function(e) {
        return PK(e)
    });
    var YS = kd.inspectSource,
        RK = Mr,
        LK = $r,
        kK = YS,
        i_ = RK.WeakMap,
        xK = LK(i_) && /native code/.test(kK(i_)),
        DK = Dc.exports,
        MK = US,
        s_ = DK("keys"),
        zS = function(e) {
            return s_[e] || (s_[e] = MK(e))
        },
        dp = {},
        FK = xK,
        XS = Mr,
        Uf = fr,
        BK = ca,
        UK = up,
        jf = Ei,
        Gf = cp,
        jK = zS,
        GK = dp,
        a_ = "Object already initialized",
        xd = XS.TypeError,
        WK = XS.WeakMap,
        ec, ro, tc, HK = function(e) {
            return tc(e) ? ro(e) : ec(e, {})
        },
        KK = function(e) {
            return function(t) {
                var r;
                if (!BK(t) || (r = ro(t)).type !== e) throw xd("Incompatible receiver, " + e + " required");
                return r
            }
        };
    if (FK || Gf.state) {
        var Bi = Gf.state || (Gf.state = new WK),
            VK = Uf(Bi.get),
            o_ = Uf(Bi.has),
            qK = Uf(Bi.set);
        ec = function(e, t) {
            if (o_(Bi, e)) throw new xd(a_);
            return t.facade = e, qK(Bi, e, t), t
        }, ro = function(e) {
            return VK(Bi, e) || {}
        }, tc = function(e) {
            return o_(Bi, e)
        }
    } else {
        var Cs = jK("state");
        GK[Cs] = !0, ec = function(e, t) {
            if (jf(e, Cs)) throw new xd(a_);
            return t.facade = e, UK(e, Cs, t), t
        }, ro = function(e) {
            return jf(e, Cs) ? e[Cs] : {}
        }, tc = function(e) {
            return jf(e, Cs)
        }
    }
    var JS = {
            set: ec,
            get: ro,
            has: tc,
            enforce: HK,
            getterFor: KK
        },
        YK = Fr,
        zK = $r,
        Sl = Ei,
        Dd = _i,
        XK = IK.CONFIGURABLE,
        JK = YS,
        QS = JS,
        QK = QS.enforce,
        ZK = QS.get,
        kl = Object.defineProperty,
        e4 = Dd && !YK(function() {
            return kl(function() {}, "length", {
                value: 8
            }).length !== 8
        }),
        t4 = String(String).split("String"),
        r4 = VS.exports = function(e, t, r) {
            String(t).slice(0, 7) === "Symbol(" && (t = "[" + String(t).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), r && r.getter && (t = "get " + t), r && r.setter && (t = "set " + t), (!Sl(e, "name") || XK && e.name !== t) && (Dd ? kl(e, "name", {
                value: t,
                configurable: !0
            }) : e.name = t), e4 && r && Sl(r, "arity") && e.length !== r.arity && kl(e, "length", {
                value: r.arity
            });
            try {
                r && Sl(r, "constructor") && r.constructor ? Dd && kl(e, "prototype", {
                    writable: !1
                }) : e.prototype && (e.prototype = void 0)
            } catch {}
            var n = QK(e);
            return Sl(n, "source") || (n.source = t4.join(typeof t == "string" ? t : "")), e
        };
    Function.prototype.toString = r4(function() {
        return zK(this) && ZK(this).source || JK(this)
    }, "toString");
    var n4 = $r,
        i4 = mo,
        s4 = VS.exports,
        a4 = lp,
        ZS = function(e, t, r, n) {
            n || (n = {});
            var s = n.enumerable,
                o = n.name !== void 0 ? n.name : t;
            if (n4(r) && s4(r, o, n), n.global) s ? e[t] = r : a4(t, r);
            else {
                try {
                    n.unsafe ? e[t] && (s = !0) : delete e[t]
                } catch {}
                s ? e[t] = r : i4.f(e, t, {
                    value: r,
                    enumerable: !1,
                    configurable: !n.nonConfigurable,
                    writable: !n.nonWritable
                })
            }
            return e
        },
        eO = {},
        o4 = Math.ceil,
        l4 = Math.floor,
        c4 = Math.trunc || function(t) {
            var r = +t;
            return (r > 0 ? l4 : o4)(r)
        },
        u4 = c4,
        Mc = function(e) {
            var t = +e;
            return t !== t || t === 0 ? 0 : u4(t)
        },
        f4 = Mc,
        d4 = Math.max,
        h4 = Math.min,
        p4 = function(e, t) {
            var r = f4(e);
            return r < 0 ? d4(r + t, 0) : h4(r, t)
        },
        g4 = Mc,
        m4 = Math.min,
        tO = function(e) {
            return e > 0 ? m4(g4(e), 9007199254740991) : 0
        },
        v4 = tO,
        y4 = function(e) {
            return v4(e.length)
        },
        _4 = kc,
        b4 = p4,
        E4 = y4,
        l_ = function(e) {
            return function(t, r, n) {
                var s = _4(t),
                    o = E4(s),
                    l = b4(n, o),
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
        T4 = {
            includes: l_(!0),
            indexOf: l_(!1)
        },
        S4 = fr,
        Wf = Ei,
        O4 = kc,
        w4 = T4.indexOf,
        $4 = dp,
        c_ = S4([].push),
        rO = function(e, t) {
            var r = O4(e),
                n = 0,
                s = [],
                o;
            for (o in r) !Wf($4, o) && Wf(r, o) && c_(s, o);
            for (; t.length > n;) Wf(r, o = t[n++]) && (~w4(s, o) || c_(s, o));
            return s
        },
        hp = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
        C4 = rO,
        I4 = hp,
        A4 = I4.concat("length", "prototype");
    eO.f = Object.getOwnPropertyNames || function(t) {
        return C4(t, A4)
    };
    var nO = {};
    nO.f = Object.getOwnPropertySymbols;
    var N4 = xc,
        P4 = fr,
        R4 = eO,
        L4 = nO,
        k4 = us,
        x4 = P4([].concat),
        D4 = N4("Reflect", "ownKeys") || function(t) {
            var r = R4.f(k4(t)),
                n = L4.f;
            return n ? x4(r, n(t)) : r
        },
        u_ = Ei,
        M4 = D4,
        F4 = sp,
        B4 = mo,
        U4 = function(e, t, r) {
            for (var n = M4(t), s = B4.f, o = F4.f, l = 0; l < n.length; l++) {
                var u = n[l];
                !u_(e, u) && !(r && u_(r, u)) && s(e, u, o(t, u))
            }
        },
        j4 = Fr,
        G4 = $r,
        W4 = /#|\.prototype\./,
        vo = function(e, t) {
            var r = K4[H4(e)];
            return r == q4 ? !0 : r == V4 ? !1 : G4(t) ? j4(t) : !!t
        },
        H4 = vo.normalize = function(e) {
            return String(e).replace(W4, ".").toLowerCase()
        },
        K4 = vo.data = {},
        V4 = vo.NATIVE = "N",
        q4 = vo.POLYFILL = "P",
        Y4 = vo,
        Hf = Mr,
        z4 = sp.f,
        X4 = up,
        J4 = ZS,
        Q4 = lp,
        Z4 = U4,
        eV = Y4,
        iO = function(e, t) {
            var r = e.target,
                n = e.global,
                s = e.stat,
                o, l, u, f, h, g;
            if (n ? l = Hf : s ? l = Hf[r] || Q4(r, {}) : l = (Hf[r] || {}).prototype, l)
                for (u in t) {
                    if (h = t[u], e.dontCallGetSet ? (g = z4(l, u), f = g && g.value) : f = l[u], o = eV(n ? u : r + (s ? "." : "#") + u, e.forced), !o && f !== void 0) {
                        if (typeof h == typeof f) continue;
                        Z4(h, f)
                    }(e.sham || f && f.sham) && X4(h, "sham", !0), J4(l, u, h, e)
                }
        },
        tV = ca,
        rV = Lc,
        nV = cs,
        iV = nV("match"),
        sV = function(e) {
            var t;
            return tV(e) && ((t = e[iV]) !== void 0 ? !!t : rV(e) == "RegExp")
        },
        aV = cs,
        oV = aV("toStringTag"),
        sO = {};
    sO[oV] = "z";
    var lV = String(sO) === "[object z]",
        cV = lV,
        uV = $r,
        xl = Lc,
        fV = cs,
        dV = fV("toStringTag"),
        hV = Object,
        pV = xl(function() {
            return arguments
        }()) == "Arguments",
        gV = function(e, t) {
            try {
                return e[t]
            } catch {}
        },
        mV = cV ? xl : function(e) {
            var t, r, n;
            return e === void 0 ? "Undefined" : e === null ? "Null" : typeof(r = gV(t = hV(e), dV)) == "string" ? r : pV ? xl(t) : (n = xl(t)) == "Object" && uV(t.callee) ? "Arguments" : n
        },
        vV = mV,
        yV = String,
        Fc = function(e) {
            if (vV(e) === "Symbol") throw TypeError("Cannot convert a Symbol value to a string");
            return yV(e)
        },
        _V = us,
        aO = function() {
            var e = _V(this),
                t = "";
            return e.hasIndices && (t += "d"), e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.unicodeSets && (t += "v"), e.sticky && (t += "y"), t
        },
        bV = bi,
        EV = Ei,
        TV = kS,
        SV = aO,
        f_ = RegExp.prototype,
        OV = function(e) {
            var t = e.flags;
            return t === void 0 && !("flags" in f_) && !EV(e, "flags") && TV(f_, e) ? bV(SV, e) : t
        },
        pp = fr,
        wV = BS,
        $V = Math.floor,
        Kf = pp("".charAt),
        CV = pp("".replace),
        Vf = pp("".slice),
        IV = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
        AV = /\$([$&'`]|\d{1,2})/g,
        oO = function(e, t, r, n, s, o) {
            var l = r + e.length,
                u = n.length,
                f = AV;
            return s !== void 0 && (s = wV(s), f = IV), CV(o, f, function(h, g) {
                var _;
                switch (Kf(g, 0)) {
                    case "$":
                        return "$";
                    case "&":
                        return e;
                    case "`":
                        return Vf(t, 0, r);
                    case "'":
                        return Vf(t, l);
                    case "<":
                        _ = s[Vf(g, 1, -1)];
                        break;
                    default:
                        var E = +g;
                        if (E === 0) return h;
                        if (E > u) {
                            var $ = $V(E / 10);
                            return $ === 0 ? h : $ <= u ? n[$ - 1] === void 0 ? Kf(g, 1) : n[$ - 1] + Kf(g, 1) : h
                        }
                        _ = n[E - 1]
                }
                return _ === void 0 ? "" : _
            })
        },
        NV = iO,
        PV = bi,
        gp = fr,
        d_ = go,
        RV = $r,
        LV = sV,
        Ra = Fc,
        kV = op,
        xV = OV,
        DV = oO,
        MV = cs,
        FV = MV("replace"),
        BV = TypeError,
        lO = gp("".indexOf);
    gp("".replace);
    var h_ = gp("".slice),
        UV = Math.max,
        p_ = function(e, t, r) {
            return r > e.length ? -1 : t === "" ? r : lO(e, t, r)
        };
    NV({
        target: "String",
        proto: !0
    }, {
        replaceAll: function(t, r) {
            var n = d_(this),
                s, o, l, u, f, h, g, _, E, $ = 0,
                R = 0,
                M = "";
            if (t != null) {
                if (s = LV(t), s && (o = Ra(d_(xV(t))), !~lO(o, "g"))) throw BV("`.replaceAll` does not allow non-global regexes");
                if (l = kV(t, FV), l) return PV(l, t, n, r)
            }
            for (u = Ra(n), f = Ra(t), h = RV(r), h || (r = Ra(r)), g = f.length, _ = UV(1, g), $ = p_(u, f, 0); $ !== -1;) E = h ? Ra(r(f, $, u)) : DV(f, u, $, [], void 0, r), M += h_(u, R, $) + E, R = $ + g, $ = p_(u, f, $ + _);
            return R < u.length && (M += h_(u, R)), M
        }
    });
    var mp = Fr,
        jV = Mr,
        vp = jV.RegExp,
        yp = mp(function() {
            var e = vp("a", "y");
            return e.lastIndex = 2, e.exec("abcd") != null
        }),
        GV = yp || mp(function() {
            return !vp("a", "y").sticky
        }),
        WV = yp || mp(function() {
            var e = vp("^r", "gy");
            return e.lastIndex = 2, e.exec("str") != null
        }),
        HV = {
            BROKEN_CARET: WV,
            MISSED_STICKY: GV,
            UNSUPPORTED_Y: yp
        },
        cO = {},
        KV = rO,
        VV = hp,
        qV = Object.keys || function(t) {
            return KV(t, VV)
        },
        YV = _i,
        zV = KS,
        XV = mo,
        JV = us,
        QV = kc,
        ZV = qV;
    cO.f = YV && !zV ? Object.defineProperties : function(t, r) {
        JV(t);
        for (var n = QV(r), s = ZV(r), o = s.length, l = 0, u; o > l;) XV.f(t, u = s[l++], n[u]);
        return t
    };
    var eq = xc,
        tq = eq("document", "documentElement"),
        rq = us,
        nq = cO,
        g_ = hp,
        iq = dp,
        sq = tq,
        aq = WS,
        oq = zS,
        m_ = ">",
        v_ = "<",
        Md = "prototype",
        Fd = "script",
        uO = oq("IE_PROTO"),
        qf = function() {},
        fO = function(e) {
            return v_ + Fd + m_ + e + v_ + "/" + Fd + m_
        },
        y_ = function(e) {
            e.write(fO("")), e.close();
            var t = e.parentWindow.Object;
            return e = null, t
        },
        lq = function() {
            var e = aq("iframe"),
                t = "java" + Fd + ":",
                r;
            return e.style.display = "none", sq.appendChild(e), e.src = String(t), r = e.contentWindow.document, r.open(), r.write(fO("document.F=Object")), r.close(), r.F
        },
        Ol, Dl = function() {
            try {
                Ol = new ActiveXObject("htmlfile")
            } catch {}
            Dl = typeof document < "u" ? document.domain && Ol ? y_(Ol) : lq() : y_(Ol);
            for (var e = g_.length; e--;) delete Dl[Md][g_[e]];
            return Dl()
        };
    iq[uO] = !0;
    var cq = Object.create || function(t, r) {
            var n;
            return t !== null ? (qf[Md] = rq(t), n = new qf, qf[Md] = null, n[uO] = t) : n = Dl(), r === void 0 ? n : nq.f(n, r)
        },
        uq = Fr,
        fq = Mr,
        dq = fq.RegExp,
        hq = uq(function() {
            var e = dq(".", "s");
            return !(e.dotAll && e.exec(`
`) && e.flags === "s")
        }),
        pq = Fr,
        gq = Mr,
        mq = gq.RegExp,
        vq = pq(function() {
            var e = mq("(?<a>b)", "g");
            return e.exec("b").groups.a !== "b" || "b".replace(e, "$<a>c") !== "bc"
        }),
        Ps = bi,
        Bc = fr,
        yq = Fc,
        _q = aO,
        bq = HV,
        Eq = Dc.exports,
        Tq = cq,
        Sq = JS.get,
        Oq = hq,
        wq = vq,
        $q = Eq("native-string-replace", String.prototype.replace),
        rc = RegExp.prototype.exec,
        Bd = rc,
        Cq = Bc("".charAt),
        Iq = Bc("".indexOf),
        Aq = Bc("".replace),
        Yf = Bc("".slice),
        Ud = function() {
            var e = /a/,
                t = /b*/g;
            return Ps(rc, e, "a"), Ps(rc, t, "a"), e.lastIndex !== 0 || t.lastIndex !== 0
        }(),
        dO = bq.BROKEN_CARET,
        jd = /()??/.exec("")[1] !== void 0,
        Nq = Ud || jd || dO || Oq || wq;
    Nq && (Bd = function(t) {
        var r = this,
            n = Sq(r),
            s = yq(t),
            o = n.raw,
            l, u, f, h, g, _, E;
        if (o) return o.lastIndex = r.lastIndex, l = Ps(Bd, o, s), r.lastIndex = o.lastIndex, l;
        var $ = n.groups,
            R = dO && r.sticky,
            M = Ps(_q, r),
            U = r.source,
            C = 0,
            V = s;
        if (R && (M = Aq(M, "y", ""), Iq(M, "g") === -1 && (M += "g"), V = Yf(s, r.lastIndex), r.lastIndex > 0 && (!r.multiline || r.multiline && Cq(s, r.lastIndex - 1) !== `
`) && (U = "(?: " + U + ")", V = " " + V, C++), u = new RegExp("^(?:" + U + ")", M)), jd && (u = new RegExp("^" + U + "$(?!\\s)", M)), Ud && (f = r.lastIndex), h = Ps(rc, R ? u : r, V), R ? h ? (h.input = Yf(h.input, C), h[0] = Yf(h[0], C), h.index = r.lastIndex, r.lastIndex += h[0].length) : r.lastIndex = 0 : Ud && h && (r.lastIndex = r.global ? h.index + h[0].length : f), jd && h && h.length > 1 && Ps($q, h[0], u, function() {
                for (g = 1; g < arguments.length - 2; g++) arguments[g] === void 0 && (h[g] = void 0)
            }), h && $)
            for (h.groups = _ = Tq(null), g = 0; g < $.length; g++) E = $[g], _[E[0]] = h[E[1]];
        return h
    });
    var _p = Bd,
        Pq = iO,
        __ = _p;
    Pq({
        target: "RegExp",
        proto: !0,
        forced: /./.exec !== __
    }, {
        exec: __
    });
    var Rq = ap,
        hO = Function.prototype,
        b_ = hO.apply,
        E_ = hO.call,
        Lq = typeof Reflect == "object" && Reflect.apply || (Rq ? E_.bind(b_) : function() {
            return E_.apply(b_, arguments)
        }),
        T_ = fr,
        S_ = ZS,
        kq = _p,
        O_ = Fr,
        pO = cs,
        xq = up,
        Dq = pO("species"),
        zf = RegExp.prototype,
        Mq = function(e, t, r, n) {
            var s = pO(e),
                o = !O_(function() {
                    var h = {};
                    return h[s] = function() {
                        return 7
                    }, "" [e](h) != 7
                }),
                l = o && !O_(function() {
                    var h = !1,
                        g = /a/;
                    return e === "split" && (g = {}, g.constructor = {}, g.constructor[Dq] = function() {
                        return g
                    }, g.flags = "", g[s] = /./ [s]), g.exec = function() {
                        return h = !0, null
                    }, g[s](""), !h
                });
            if (!o || !l || r) {
                var u = T_(/./ [s]),
                    f = t(s, "" [e], function(h, g, _, E, $) {
                        var R = T_(h),
                            M = g.exec;
                        return M === kq || M === zf.exec ? o && !$ ? {
                            done: !0,
                            value: u(g, _, E)
                        } : {
                            done: !0,
                            value: R(_, g, E)
                        } : {
                            done: !1
                        }
                    });
                S_(String.prototype, e, f[0]), S_(zf, s, f[1])
            }
            n && xq(zf[s], "sham", !0)
        },
        bp = fr,
        Fq = Mc,
        Bq = Fc,
        Uq = go,
        jq = bp("".charAt),
        w_ = bp("".charCodeAt),
        Gq = bp("".slice),
        $_ = function(e) {
            return function(t, r) {
                var n = Bq(Uq(t)),
                    s = Fq(r),
                    o = n.length,
                    l, u;
                return s < 0 || s >= o ? e ? "" : void 0 : (l = w_(n, s), l < 55296 || l > 56319 || s + 1 === o || (u = w_(n, s + 1)) < 56320 || u > 57343 ? e ? jq(n, s) : l : e ? Gq(n, s, s + 2) : (l - 55296 << 10) + (u - 56320) + 65536)
            }
        },
        Wq = {
            codeAt: $_(!1),
            charAt: $_(!0)
        },
        Hq = Wq.charAt,
        Kq = function(e, t, r) {
            return t + (r ? Hq(e, t).length : 1)
        },
        C_ = bi,
        Vq = us,
        qq = $r,
        Yq = Lc,
        zq = _p,
        Xq = TypeError,
        Jq = function(e, t) {
            var r = e.exec;
            if (qq(r)) {
                var n = C_(r, e, t);
                return n !== null && Vq(n), n
            }
            if (Yq(e) === "RegExp") return C_(zq, e, t);
            throw Xq("RegExp#exec called on incompatible receiver")
        },
        Qq = Lq,
        I_ = bi,
        Uc = fr,
        Zq = Mq,
        eY = Fr,
        tY = us,
        rY = $r,
        nY = Mc,
        iY = tO,
        Is = Fc,
        sY = go,
        aY = Kq,
        oY = op,
        lY = oO,
        cY = Jq,
        uY = cs,
        Gd = uY("replace"),
        fY = Math.max,
        dY = Math.min,
        hY = Uc([].concat),
        Xf = Uc([].push),
        A_ = Uc("".indexOf),
        N_ = Uc("".slice),
        pY = function(e) {
            return e === void 0 ? e : String(e)
        },
        gY = function() {
            return "a".replace(/./, "$0") === "$0"
        }(),
        P_ = function() {
            return /./ [Gd] ? /./ [Gd]("a", "$0") === "" : !1
        }(),
        mY = !eY(function() {
            var e = /./;
            return e.exec = function() {
                var t = [];
                return t.groups = {
                    a: "7"
                }, t
            }, "".replace(e, "$<a>") !== "7"
        });
    Zq("replace", function(e, t, r) {
        var n = P_ ? "$" : "$0";
        return [function(o, l) {
            var u = sY(this),
                f = o == null ? void 0 : oY(o, Gd);
            return f ? I_(f, o, u, l) : I_(t, Is(u), o, l)
        }, function(s, o) {
            var l = tY(this),
                u = Is(s);
            if (typeof o == "string" && A_(o, n) === -1 && A_(o, "$<") === -1) {
                var f = r(t, l, u, o);
                if (f.done) return f.value
            }
            var h = rY(o);
            h || (o = Is(o));
            var g = l.global;
            if (g) {
                var _ = l.unicode;
                l.lastIndex = 0
            }
            for (var E = [];;) {
                var $ = cY(l, u);
                if ($ === null || (Xf(E, $), !g)) break;
                var R = Is($[0]);
                R === "" && (l.lastIndex = aY(u, iY(l.lastIndex), _))
            }
            for (var M = "", U = 0, C = 0; C < E.length; C++) {
                $ = E[C];
                for (var V = Is($[0]), X = fY(dY(nY($.index), u.length), 0), W = [], j = 1; j < $.length; j++) Xf(W, pY($[j]));
                var Q = $.groups;
                if (h) {
                    var oe = hY([V], W, X, u);
                    Q !== void 0 && Xf(oe, Q);
                    var le = Is(Qq(o, void 0, oe))
                } else le = lY(V, u, X, W, Q, o);
                X >= U && (M += N_(u, U, X) + le, U = X + V.length)
            }
            return M + N_(u, U)
        }]
    }, !mY || !gY || P_);
    var vY = Mr,
        yY = fr,
        _Y = function(e, t) {
            return yY(vY[e].prototype[t])
        },
        bY = _Y,
        EY = bY("String", "replaceAll"),
        TY = EY,
        SY = TY,
        OY = SY,
        wY = OY,
        $Y = wY,
        CY = $Y;
    (function(e) {
        e.exports = CY
    })(UH);
    et({
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
            this.autosize && BH(this.$refs.textarea)
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
    et({
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
            const e = as();
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
        jc = {},
        gO = {},
        Gc = {},
        Ep = {};
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
    })(Ep);
    Object.defineProperty(Gc, "__esModule", {
        value: !0
    });
    Gc.Tokenizer = void 0;
    var ti = Ep,
        IY = function() {
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
    Gc.Tokenizer = IY;
    (function(e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.ParseTree = void 0;
        var t = Gc,
            r = Ep,
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
                            _ = s.buildTreeFromTokens(h, l, g);
                        if (!_) return null;
                        o.subTrees.push(_)
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
    })(gO);
    var yo = {};
    Object.defineProperty(yo, "__esModule", {
        value: !0
    });
    yo.Tag = void 0;
    var AY = function() {
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
    yo.Tag = AY;
    Object.defineProperty(jc, "__esModule", {
        value: !0
    });
    jc.BBCodeParser = void 0;
    var R_ = gO,
        L_ = yo,
        NY = function() {
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
                var o = R_.ParseTree.buildTree(t, this.tags);
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
                    if (f.type === R_.ParseTree.Type.text) {
                        var g = f.content;
                        n && (g = o.escapeHTML ? e.escapeHTML(g) : g), r && !u && (g = g.replace(/(\r\n|\n|\r)/gm, "<br>"), u = !1), l += g
                    } else {
                        var _ = o.tags[f.content],
                            E = o.treeToHtml(f.subTrees, _.insertLineBreaks, n, s);
                        s ? l += E : l += _.markupGenerator(_, E, (h = f.attributes) !== null && h !== void 0 ? h : {}), u = _.suppressLineBreaks
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
    jc.BBCodeParser = NY;
    (function(e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.Tag = e.BBCodeParser = void 0;
        var t = jc;
        Object.defineProperty(e, "BBCodeParser", {
            enumerable: !0,
            get: function() {
                return t.BBCodeParser
            }
        });
        var r = yo;
        Object.defineProperty(e, "Tag", {
            enumerable: !0,
            get: function() {
                return r.Tag
            }
        })
    })(Gi);
    const PY = {
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
    var mO = {
        exports: {}
    };
    (function(e) {
        (function(t, r) {
            var n = t.KonamiCode,
                s = t.KonamiCode = r;
            s.noConflict = function() {
                return t.KonamiCode = n, s
            }, e.exports && (e.exports = r)
        })(Lt, function t(r) {
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
    })(mO);
    const RY = mO.exports,
        LY = et({
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
        Gn = e => (oo("data-v-220ec4c0"), e = e(), lo(), e),
        kY = {
            key: 0,
            ref: "debugNav",
            class: "debug-nav",
            tabindex: "0"
        },
        xY = {
            key: 0,
            class: "power-nav"
        },
        DY = Gn(() => H("p", null, "MARKERS", -1)),
        MY = ["onClick"],
        FY = hi("KILL"),
        BY = Gn(() => H("br", null, null, -1)),
        UY = hi("ROOM"),
        jY = [FY, BY, UY],
        GY = Gn(() => H("p", {
            class: "title blurred"
        }, "DEBUG", -1)),
        WY = {
            key: 1,
            class: "title focused"
        },
        HY = {
            key: 2,
            class: "title focused"
        },
        KY = Gn(() => H("svg", {
            viewBox: "0 0 20 10"
        }, [H("polygon", {
            points: "0,10 10,0 20,10"
        })], -1)),
        VY = Gn(() => H("div", {
            class: "visually-hidden"
        }, "Open debug menu", -1)),
        qY = [KY, VY],
        YY = Gn(() => H("svg", {
            viewBox: "0 0 60 50"
        }, [H("polygon", {
            class: "outline",
            points: "40,35.6 20,25 40,14.4"
        }), H("polygon", {
            points: "40,35.6 20,25 40,14.4"
        })], -1)),
        zY = Gn(() => H("div", {
            class: "visually-hidden"
        }, "Previous", -1)),
        XY = [YY, zY],
        JY = Gn(() => H("svg", {
            viewBox: "0 0 60 50"
        }, [H("polygon", {
            class: "outline",
            points: "40,35.6 20,25 40,14.4"
        }), H("polygon", {
            points: "40,35.6 20,25 40,14.4"
        })], -1)),
        QY = Gn(() => H("div", {
            class: "visually-hidden"
        }, "Next", -1)),
        ZY = [JY, QY];

    function e6(e, t, r, n, s, o) {
        return e.replayer ? (G(), Y("div", kY, [e.showPowerNav ? (G(), Y("div", xY, [H("button", {
            class: "close",
            onClick: t[0] || (t[0] = (...l) => e.onClosePowerNavClick && e.onClosePowerNavClick(...l))
        }, "X"), DY, H("ul", null, [(G(!0), Y(ze, null, wr(e.replayer.markerMap, (l, u) => (G(), Y("li", {
            key: u,
            class: xe({
                active: u === e.replayer.currentMarkerItemIndex
            }),
            onClick: f => e.onMarkerClick(u)
        }, nt(l[1].marker), 11, MY))), 128))]), H("button", {
            class: "option",
            onClick: t[1] || (t[1] = (...l) => e.onKillClick && e.onKillClick(...l))
        }, jY), H("button", {
            class: "option",
            onClick: t[2] || (t[2] = (...l) => e.onDisconnectClick && e.onDisconnectClick(...l))
        }, "DISCONNECT")])) : Se("", !0), GY, e.replayer.markerMap.length ? (G(), Y("p", HY, nt(e.replayer.currentMarkerItemIndex) + " : " + nt(e.replayer.currentMarkerItem[1].marker) + " (" + nt(e.replayer.currentEntityItemIndex) + ") ", 1)) : (G(), Y("p", WY, "Item #" + nt(e.replayer.currentEntityItemIndex), 1)), e.showPowerNav ? Se("", !0) : (G(), Y("button", {
            key: 3,
            class: "open-power-nav",
            onClick: t[3] || (t[3] = (...l) => e.onOpenPowerNavClick && e.onOpenPowerNavClick(...l))
        }, qY)), H("button", {
            class: "direction previous",
            onClick: t[4] || (t[4] = (...l) => e.onPreviousClick && e.onPreviousClick(...l))
        }, XY), H("button", {
            class: "direction next",
            onClick: t[5] || (t[5] = (...l) => e.onNextClick && e.onNextClick(...l))
        }, ZY)], 512)) : Se("", !0)
    }
    const t6 = ct(LY, [
        ["render", e6],
        ["__scopeId", "data-v-220ec4c0"]
    ]);

    function r6(e, t) {
        for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1;);
        return e
    }
    var n6 = r6,
        i6 = rT,
        s6 = i6(Object.keys, Object),
        a6 = s6,
        o6 = Fh,
        l6 = a6,
        c6 = Object.prototype,
        u6 = c6.hasOwnProperty;

    function f6(e) {
        if (!o6(e)) return l6(e);
        var t = [];
        for (var r in Object(e)) u6.call(e, r) && r != "constructor" && t.push(r);
        return t
    }
    var d6 = f6,
        h6 = uT,
        p6 = d6,
        g6 = Ac;

    function m6(e) {
        return g6(e) ? h6(e) : p6(e)
    }
    var Wc = m6,
        v6 = uo,
        y6 = Wc;

    function _6(e, t) {
        return e && v6(t, y6(t), e)
    }
    var b6 = _6,
        E6 = uo,
        T6 = fo;

    function S6(e, t) {
        return e && E6(t, T6(t), e)
    }
    var O6 = S6;

    function w6(e, t) {
        for (var r = -1, n = e == null ? 0 : e.length, s = 0, o = []; ++r < n;) {
            var l = e[r];
            t(l, r, e) && (o[s++] = l)
        }
        return o
    }
    var $6 = w6;

    function C6() {
        return []
    }
    var vO = C6,
        I6 = $6,
        A6 = vO,
        N6 = Object.prototype,
        P6 = N6.propertyIsEnumerable,
        k_ = Object.getOwnPropertySymbols,
        R6 = k_ ? function(e) {
            return e == null ? [] : (e = Object(e), I6(k_(e), function(t) {
                return P6.call(e, t)
            }))
        } : A6,
        Tp = R6,
        L6 = uo,
        k6 = Tp;

    function x6(e, t) {
        return L6(e, k6(e), t)
    }
    var D6 = x6;

    function M6(e, t) {
        for (var r = -1, n = t.length, s = e.length; ++r < n;) e[s + r] = t[r];
        return e
    }
    var yO = M6,
        F6 = yO,
        B6 = Mh,
        U6 = Tp,
        j6 = vO,
        G6 = Object.getOwnPropertySymbols,
        W6 = G6 ? function(e) {
            for (var t = []; e;) F6(t, U6(e)), e = B6(e);
            return t
        } : j6,
        _O = W6,
        H6 = uo,
        K6 = _O;

    function V6(e, t) {
        return H6(e, K6(e), t)
    }
    var q6 = V6,
        Y6 = yO,
        z6 = vi;

    function X6(e, t, r) {
        var n = t(e);
        return z6(e) ? n : Y6(n, r(e))
    }
    var bO = X6,
        J6 = bO,
        Q6 = Tp,
        Z6 = Wc;

    function e5(e) {
        return J6(e, Z6, Q6)
    }
    var t5 = e5,
        r5 = bO,
        n5 = _O,
        i5 = fo;

    function s5(e) {
        return r5(e, i5, n5)
    }
    var a5 = s5,
        o5 = ls,
        l5 = fn,
        c5 = o5(l5, "DataView"),
        u5 = c5,
        f5 = ls,
        d5 = fn,
        h5 = f5(d5, "Promise"),
        p5 = h5,
        g5 = ls,
        m5 = fn,
        v5 = g5(m5, "Set"),
        y5 = v5,
        _5 = ls,
        b5 = fn,
        E5 = _5(b5, "WeakMap"),
        T5 = E5,
        Wd = u5,
        Hd = kh,
        Kd = p5,
        Vd = y5,
        qd = T5,
        EO = ia,
        ua = zE,
        x_ = "[object Map]",
        S5 = "[object Object]",
        D_ = "[object Promise]",
        M_ = "[object Set]",
        F_ = "[object WeakMap]",
        B_ = "[object DataView]",
        O5 = ua(Wd),
        w5 = ua(Hd),
        $5 = ua(Kd),
        C5 = ua(Vd),
        I5 = ua(qd),
        Wi = EO;
    (Wd && Wi(new Wd(new ArrayBuffer(1))) != B_ || Hd && Wi(new Hd) != x_ || Kd && Wi(Kd.resolve()) != D_ || Vd && Wi(new Vd) != M_ || qd && Wi(new qd) != F_) && (Wi = function(e) {
        var t = EO(e),
            r = t == S5 ? e.constructor : void 0,
            n = r ? ua(r) : "";
        if (n) switch (n) {
            case O5:
                return B_;
            case w5:
                return x_;
            case $5:
                return D_;
            case C5:
                return M_;
            case I5:
                return F_
        }
        return t
    });
    var Sp = Wi,
        A5 = Object.prototype,
        N5 = A5.hasOwnProperty;

    function P5(e) {
        var t = e.length,
            r = new e.constructor(t);
        return t && typeof e[0] == "string" && N5.call(e, "index") && (r.index = e.index, r.input = e.input), r
    }
    var R5 = P5,
        L5 = Dh;

    function k5(e, t) {
        var r = t ? L5(e.buffer) : e.buffer;
        return new e.constructor(r, e.byteOffset, e.byteLength)
    }
    var x5 = k5,
        D5 = /\w*$/;

    function M5(e) {
        var t = new e.constructor(e.source, D5.exec(e));
        return t.lastIndex = e.lastIndex, t
    }
    var F5 = M5,
        U_ = $c,
        j_ = U_ ? U_.prototype : void 0,
        G_ = j_ ? j_.valueOf : void 0;

    function B5(e) {
        return G_ ? Object(G_.call(e)) : {}
    }
    var U5 = B5,
        j5 = Dh,
        G5 = x5,
        W5 = F5,
        H5 = U5,
        K5 = eT,
        V5 = "[object Boolean]",
        q5 = "[object Date]",
        Y5 = "[object Map]",
        z5 = "[object Number]",
        X5 = "[object RegExp]",
        J5 = "[object Set]",
        Q5 = "[object String]",
        Z5 = "[object Symbol]",
        ez = "[object ArrayBuffer]",
        tz = "[object DataView]",
        rz = "[object Float32Array]",
        nz = "[object Float64Array]",
        iz = "[object Int8Array]",
        sz = "[object Int16Array]",
        az = "[object Int32Array]",
        oz = "[object Uint8Array]",
        lz = "[object Uint8ClampedArray]",
        cz = "[object Uint16Array]",
        uz = "[object Uint32Array]";

    function fz(e, t, r) {
        var n = e.constructor;
        switch (t) {
            case ez:
                return j5(e);
            case V5:
            case q5:
                return new n(+e);
            case tz:
                return G5(e, r);
            case rz:
            case nz:
            case iz:
            case sz:
            case az:
            case oz:
            case lz:
            case cz:
            case uz:
                return K5(e, r);
            case Y5:
                return new n;
            case z5:
            case Q5:
                return new n(e);
            case X5:
                return W5(e);
            case J5:
                return new n;
            case Z5:
                return H5(e)
        }
    }
    var dz = fz,
        hz = Sp,
        pz = mi,
        gz = "[object Map]";

    function mz(e) {
        return pz(e) && hz(e) == gz
    }
    var vz = mz,
        yz = vz,
        _z = Bh,
        W_ = eo.exports,
        H_ = W_ && W_.isMap,
        bz = H_ ? _z(H_) : yz,
        Ez = bz,
        Tz = Sp,
        Sz = mi,
        Oz = "[object Set]";

    function wz(e) {
        return Sz(e) && Tz(e) == Oz
    }
    var $z = wz,
        Cz = $z,
        Iz = Bh,
        K_ = eo.exports,
        V_ = K_ && K_.isSet,
        Az = V_ ? Iz(V_) : Cz,
        Nz = Az,
        Pz = JE,
        Rz = n6,
        Lz = Uh,
        kz = b6,
        xz = O6,
        Dz = ql.exports,
        Mz = tT,
        Fz = D6,
        Bz = q6,
        Uz = t5,
        jz = a5,
        Gz = Sp,
        Wz = R5,
        Hz = dz,
        Kz = nT,
        Vz = vi,
        qz = Za.exports,
        Yz = Ez,
        zz = dn,
        Xz = Nz,
        Jz = Wc,
        Qz = fo,
        Zz = 1,
        e9 = 2,
        t9 = 4,
        TO = "[object Arguments]",
        r9 = "[object Array]",
        n9 = "[object Boolean]",
        i9 = "[object Date]",
        s9 = "[object Error]",
        SO = "[object Function]",
        a9 = "[object GeneratorFunction]",
        o9 = "[object Map]",
        l9 = "[object Number]",
        OO = "[object Object]",
        c9 = "[object RegExp]",
        u9 = "[object Set]",
        f9 = "[object String]",
        d9 = "[object Symbol]",
        h9 = "[object WeakMap]",
        p9 = "[object ArrayBuffer]",
        g9 = "[object DataView]",
        m9 = "[object Float32Array]",
        v9 = "[object Float64Array]",
        y9 = "[object Int8Array]",
        _9 = "[object Int16Array]",
        b9 = "[object Int32Array]",
        E9 = "[object Uint8Array]",
        T9 = "[object Uint8ClampedArray]",
        S9 = "[object Uint16Array]",
        O9 = "[object Uint32Array]",
        yt = {};
    yt[TO] = yt[r9] = yt[p9] = yt[g9] = yt[n9] = yt[i9] = yt[m9] = yt[v9] = yt[y9] = yt[_9] = yt[b9] = yt[o9] = yt[l9] = yt[OO] = yt[c9] = yt[u9] = yt[f9] = yt[d9] = yt[E9] = yt[T9] = yt[S9] = yt[O9] = !0;
    yt[s9] = yt[SO] = yt[h9] = !1;

    function Ml(e, t, r, n, s, o) {
        var l, u = t & Zz,
            f = t & e9,
            h = t & t9;
        if (r && (l = s ? r(e, n, s, o) : r(e)), l !== void 0) return l;
        if (!zz(e)) return e;
        var g = Vz(e);
        if (g) {
            if (l = Wz(e), !u) return Mz(e, l)
        } else {
            var _ = Gz(e),
                E = _ == SO || _ == a9;
            if (qz(e)) return Dz(e, u);
            if (_ == OO || _ == TO || E && !s) {
                if (l = f || E ? {} : Kz(e), !u) return f ? Bz(e, xz(l, e)) : Fz(e, kz(l, e))
            } else {
                if (!yt[_]) return s ? e : {};
                l = Hz(e, _, u)
            }
        }
        o || (o = new Pz);
        var $ = o.get(e);
        if ($) return $;
        o.set(e, l), Xz(e) ? e.forEach(function(U) {
            l.add(Ml(U, t, r, U, e, o))
        }) : Yz(e) && e.forEach(function(U, C) {
            l.set(C, Ml(U, t, r, C, e, o))
        });
        var R = h ? f ? jz : Uz : f ? Qz : Jz,
            M = g ? void 0 : R(e);
        return Rz(M || e, function(U, C) {
            M && (C = U, U = e[C]), Lz(l, C, Ml(U, t, r, C, e, o))
        }), l
    }
    var w9 = Ml,
        $9 = w9,
        C9 = 1,
        I9 = 4;

    function A9(e) {
        return $9(e, C9 | I9)
    }
    var wO = A9;
    const N9 = et({
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
                !e || (this.values = wO(this.$ecastValues), this.content = (n = jy.getPromptGuess(this.values, e)) != null ? n : null)
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
                    !this.$debugRecorder || (this.screen === "debug" && (await this.$debugRecorder.send(this.message), this.$emit("resolve")), this.screen === "feedback" && (await jy.send({
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
        $O = "main/pp9/antique-freak/assets/ad9172fc.png",
        CO = "main/pp9/antique-freak/assets/dc131b16.png",
        P9 = "main/pp9/antique-freak/assets/38715b18.png",
        R9 = "main/pp9/antique-freak/assets/b0d7c822.png",
        L9 = "main/pp9/antique-freak/assets/06150f24.png",
        Zr = e => (oo("data-v-2c53389f"), e = e(), lo(), e),
        k9 = {
            class: "jbg"
        },
        x9 = {
            key: 0,
            class: "options"
        },
        D9 = Zr(() => H("img", {
            src: $O,
            alt: "Leave Feedback"
        }, null, -1)),
        M9 = Zr(() => H("span", null, [hi("LEAVE"), H("br"), hi("FEEDBACK")], -1)),
        F9 = [D9, M9],
        B9 = Zr(() => H("img", {
            src: CO,
            alt: "Send Debug"
        }, null, -1)),
        U9 = Zr(() => H("span", null, [hi("SEND A"), H("br"), hi("DEBUG")], -1)),
        j9 = [B9, U9],
        G9 = {
            key: 1,
            class: "feedback"
        },
        W9 = Zr(() => H("img", {
            class: "image",
            src: $O,
            alt: "Feedback"
        }, null, -1)),
        H9 = Zr(() => H("h3", {
            class: "text"
        }, "Send Feedback", -1)),
        K9 = Zr(() => H("p", {
            class: "cta"
        }, "CHOOSE A VIBE", -1)),
        V9 = {
            class: "buttons"
        },
        q9 = Zr(() => H("img", {
            src: P9,
            alt: "good"
        }, null, -1)),
        Y9 = [q9],
        z9 = Zr(() => H("img", {
            src: R9,
            alt: "good"
        }, null, -1)),
        X9 = [z9],
        J9 = Zr(() => H("img", {
            src: L9,
            alt: "bad"
        }, null, -1)),
        Q9 = [J9],
        Z9 = {
            class: "actions"
        },
        eX = {
            key: 0,
            class: "content-guess"
        },
        tX = hi("Feedback is about: "),
        rX = {
            key: 2,
            class: "debug"
        },
        nX = Zr(() => H("img", {
            class: "image",
            src: CO,
            alt: "Debug"
        }, null, -1)),
        iX = Zr(() => H("h3", {
            class: "text"
        }, "What is Happening?", -1)),
        sX = {
            class: "actions"
        };

    function aX(e, t, r, n, s, o) {
        return G(), Y("div", k9, [e.screen === "options" ? (G(), Y("div", x9, [H("button", {
            class: "feedback-button",
            onClick: t[0] || (t[0] = (...l) => e.onFeedbackClick && e.onFeedbackClick(...l))
        }, F9), H("button", {
            onClick: t[1] || (t[1] = (...l) => e.onDebugClick && e.onDebugClick(...l))
        }, j9)])) : e.screen === "feedback" ? (G(), Y("div", G9, [W9, H9, H("div", {
            class: xe(["vibes", {
                "has-selected": e.vibe
            }])
        }, [K9, H("div", V9, [H("button", {
            class: xe({
                selected: e.vibe === "good"
            }),
            onClick: t[2] || (t[2] = l => e.onVibeClick("good"))
        }, Y9, 2), H("button", {
            class: xe({
                selected: e.vibe === "meh"
            }),
            onClick: t[3] || (t[3] = l => e.onVibeClick("meh"))
        }, X9, 2), H("button", {
            class: xe({
                selected: e.vibe === "bad"
            }),
            onClick: t[4] || (t[4] = l => e.onVibeClick("bad"))
        }, Q9, 2)])], 2), H("div", Z9, [e.content ? (G(), Y("div", eX, [Ie(H("input", {
            "onUpdate:modelValue": t[5] || (t[5] = l => e.isContent = l),
            type: "checkbox"
        }, null, 512), [
            [SL, e.isContent]
        ]), H("span", null, [tX, H("em", null, nt(e.content), 1)])])) : Se("", !0), Ie(H("textarea", {
            "onUpdate:modelValue": t[6] || (t[6] = l => e.message = l),
            rows: "3",
            placeholder: "(optional) more details",
            "aria-label": "Details"
        }, null, 512), [
            [_d, e.message]
        ]), H("button", {
            onClick: t[7] || (t[7] = zt((...l) => e.onSubmitClick && e.onSubmitClick(...l), ["prevent"]))
        }, nt(e.$t("ACTION.SUBMIT")), 1)])])) : e.screen === "debug" ? (G(), Y("div", rX, [nX, iX, H("div", sX, [Ie(H("textarea", {
            "onUpdate:modelValue": t[8] || (t[8] = l => e.message = l),
            rows: "3",
            placeholder: "Enter details",
            "aria-label": "Details"
        }, null, 512), [
            [_d, e.message]
        ]), H("button", {
            onClick: t[9] || (t[9] = zt((...l) => e.onSubmitClick && e.onSubmitClick(...l), ["prevent"]))
        }, nt(e.$t("ACTION.OK")), 1)])])) : Se("", !0)])
    }
    const IO = ct(N9, [
            ["render", aX],
            ["__scopeId", "data-v-2c53389f"]
        ]),
        oX = et({
            methods: {
                onFeedbackClick() {
                    this.$showModal(IO)
                }
            }
        });

    function lX(e, t, r, n, s, o) {
        return G(), Y("div", {
            class: "feedback-button",
            onClick: t[0] || (t[0] = (...l) => e.onFeedbackClick && e.onFeedbackClick(...l))
        }, "SEND FEEDBACK")
    }
    const cX = ct(oX, [
            ["render", lX],
            ["__scopeId", "data-v-6f2f1788"]
        ]),
        uX = {
            install: (e, t) => {
                if (!e.config.globalProperties.$debugRecorder && !e.config.globalProperties.$debugReplayer) {
                    if (t.replayer) {
                        e.config.globalProperties.$debugReplayer = t.replayer, e.component("Debug", t6);
                        return
                    }
                    if (e.config.globalProperties.$debugRecorder = new h3(t.client, t.room), !e.config.globalProperties.$showModal) {
                        console.warn("[debugPlugin] Sending debug and feedback messages is disabled be the modalPlugin is not used.");
                        return
                    }(!Yt.isProduction || Yt.getQueryParam("feedback")) && e.component("Debug", cX), new RY(() => {
                        e.config.globalProperties.$showModal(IO)
                    })
                }
            }
        };
    var fX = fn,
        dX = function() {
            return fX.Date.now()
        },
        hX = dX,
        pX = /\s/;

    function gX(e) {
        for (var t = e.length; t-- && pX.test(e.charAt(t)););
        return t
    }
    var mX = gX,
        vX = mX,
        yX = /^\s+/;

    function _X(e) {
        return e && e.slice(0, vX(e) + 1).replace(yX, "")
    }
    var bX = _X,
        EX = ia,
        TX = mi,
        SX = "[object Symbol]";

    function OX(e) {
        return typeof e == "symbol" || TX(e) && EX(e) == SX
    }
    var Hc = OX,
        wX = bX,
        q_ = dn,
        $X = Hc,
        Y_ = 0 / 0,
        CX = /^[-+]0x[0-9a-f]+$/i,
        IX = /^0b[01]+$/i,
        AX = /^0o[0-7]+$/i,
        NX = parseInt;

    function PX(e) {
        if (typeof e == "number") return e;
        if ($X(e)) return Y_;
        if (q_(e)) {
            var t = typeof e.valueOf == "function" ? e.valueOf() : e;
            e = q_(t) ? t + "" : t
        }
        if (typeof e != "string") return e === 0 ? e : +e;
        e = wX(e);
        var r = IX.test(e);
        return r || AX.test(e) ? NX(e.slice(2), r ? 2 : 8) : CX.test(e) ? Y_ : +e
    }
    var RX = PX,
        LX = dn,
        Jf = hX,
        z_ = RX,
        kX = "Expected a function",
        xX = Math.max,
        DX = Math.min;

    function MX(e, t, r) {
        var n, s, o, l, u, f, h = 0,
            g = !1,
            _ = !1,
            E = !0;
        if (typeof e != "function") throw new TypeError(kX);
        t = z_(t) || 0, LX(r) && (g = !!r.leading, _ = "maxWait" in r, o = _ ? xX(z_(r.maxWait) || 0, t) : o, E = "trailing" in r ? !!r.trailing : E);

        function $(Q) {
            var oe = n,
                le = s;
            return n = s = void 0, h = Q, l = e.apply(le, oe), l
        }

        function R(Q) {
            return h = Q, u = setTimeout(C, t), g ? $(Q) : l
        }

        function M(Q) {
            var oe = Q - f,
                le = Q - h,
                ue = t - oe;
            return _ ? DX(ue, o - le) : ue
        }

        function U(Q) {
            var oe = Q - f,
                le = Q - h;
            return f === void 0 || oe >= t || oe < 0 || _ && le >= o
        }

        function C() {
            var Q = Jf();
            if (U(Q)) return V(Q);
            u = setTimeout(C, M(Q))
        }

        function V(Q) {
            return u = void 0, E && n ? $(Q) : (n = s = void 0, l)
        }

        function X() {
            u !== void 0 && clearTimeout(u), h = 0, n = f = s = u = void 0
        }

        function W() {
            return u === void 0 ? l : V(Jf())
        }

        function j() {
            var Q = Jf(),
                oe = U(Q);
            if (n = arguments, s = this, f = Q, oe) {
                if (u === void 0) return R(f);
                if (_) return clearTimeout(u), u = setTimeout(C, t), $(f)
            }
            return u === void 0 && (u = setTimeout(C, t)), l
        }
        return j.cancel = X, j.flush = W, j
    }
    var FX = MX,
        BX = vi,
        UX = Hc,
        jX = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        GX = /^\w*$/;

    function WX(e, t) {
        if (BX(e)) return !1;
        var r = typeof e;
        return r == "number" || r == "symbol" || r == "boolean" || e == null || UX(e) ? !0 : GX.test(e) || !jX.test(e) || t != null && e in Object(t)
    }
    var HX = WX,
        AO = XE,
        KX = "Expected a function";

    function Op(e, t) {
        if (typeof e != "function" || t != null && typeof t != "function") throw new TypeError(KX);
        var r = function() {
            var n = arguments,
                s = t ? t.apply(this, n) : n[0],
                o = r.cache;
            if (o.has(s)) return o.get(s);
            var l = e.apply(this, n);
            return r.cache = o.set(s, l) || o, l
        };
        return r.cache = new(Op.Cache || AO), r
    }
    Op.Cache = AO;
    var VX = Op,
        qX = VX,
        YX = 500;

    function zX(e) {
        var t = qX(e, function(n) {
                return r.size === YX && r.clear(), n
            }),
            r = t.cache;
        return t
    }
    var XX = zX,
        JX = XX,
        QX = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        ZX = /\\(\\)?/g,
        e7 = JX(function(e) {
            var t = [];
            return e.charCodeAt(0) === 46 && t.push(""), e.replace(QX, function(r, n, s, o) {
                t.push(s ? o.replace(ZX, "$1") : n || r)
            }), t
        }),
        t7 = e7;

    function r7(e, t) {
        for (var r = -1, n = e == null ? 0 : e.length, s = Array(n); ++r < n;) s[r] = t(e[r], r, e);
        return s
    }
    var NO = r7,
        X_ = $c,
        n7 = NO,
        i7 = vi,
        s7 = Hc,
        a7 = 1 / 0,
        J_ = X_ ? X_.prototype : void 0,
        Q_ = J_ ? J_.toString : void 0;

    function PO(e) {
        if (typeof e == "string") return e;
        if (i7(e)) return n7(e, PO) + "";
        if (s7(e)) return Q_ ? Q_.call(e) : "";
        var t = e + "";
        return t == "0" && 1 / e == -a7 ? "-0" : t
    }
    var o7 = PO,
        l7 = o7;

    function c7(e) {
        return e == null ? "" : l7(e)
    }
    var u7 = c7,
        f7 = vi,
        d7 = HX,
        h7 = t7,
        p7 = u7;

    function g7(e, t) {
        return f7(e) ? e : d7(e, t) ? [e] : h7(p7(e))
    }
    var RO = g7,
        m7 = Hc,
        v7 = 1 / 0;

    function y7(e) {
        if (typeof e == "string" || m7(e)) return e;
        var t = e + "";
        return t == "0" && 1 / e == -v7 ? "-0" : t
    }
    var LO = y7,
        _7 = Uh,
        b7 = RO,
        E7 = jh,
        Z_ = dn,
        T7 = LO;

    function S7(e, t, r, n) {
        if (!Z_(e)) return e;
        t = b7(t, e);
        for (var s = -1, o = t.length, l = o - 1, u = e; u != null && ++s < o;) {
            var f = T7(t[s]),
                h = r;
            if (f === "__proto__" || f === "constructor" || f === "prototype") return e;
            if (s != l) {
                var g = u[f];
                h = n ? n(g, f, u) : void 0, h === void 0 && (h = Z_(g) ? g : E7(t[s + 1]) ? [] : {})
            }
            _7(u, f, h), u = u[f]
        }
        return e
    }
    var O7 = S7,
        w7 = O7;

    function $7(e, t, r) {
        return e == null ? e : w7(e, t, r)
    }
    var C7 = $7;
    class I7 {
        constructor() {
            ge(this, "wsClient");
            ge(this, "keyMap");
            ge(this, "providerMap");
            ge(this, "mappedValues", Un({}));
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
            ge(this, "sync", FX(() => {
                !this.wsClient || !this.keyMap && !this.providerMap || this.pausedKeys && !this.pausedKeys.length || (this.hotValues = {}, this.newValues = {}, this.normalize().mapKeysToValues().mapProvidersToValues().deleteDropped().hydrateRefs().syncExisting(), delete this.hotValues, delete this.newValues)
            }, 50))
        }
        setWSClient(t) {
            this.wsClient = t, this.setupWatcher()
        }
        setupWatcher() {
            this.wsClient.entities = Un(this.wsClient.entities), Zi(this.wsClient.entities, (t, r) => {
                this.sync()
            })
        }
        valueForEntity(t) {
            return t instanceof Or.ArtifactEntity || t instanceof Or.DoodleEntity ? t : t instanceof Or.ObjectEntity ? wO(t.val) : t instanceof Or.TextEntity ? t.text : t instanceof Or.NumberEntity ? t.val : null
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
                    C7(this.newValues, n, u)
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
    const Yr = new I7,
        A7 = {
            install: (e, t) => {
                e.config.globalProperties.$setupEcast = r => {
                    Yr.setWSClient(r.wsClient), r.wsClient.on("artifact", n => to.add(n)), r.wsClient.on("connection", n => {
                        n.status === "connected" && Yr.setupWatcher()
                    }), Yr.sync(), e.config.globalProperties.$ecast = Yr.wsClient, e.config.globalProperties.$ecastValues = Yr.mappedValues, e.config.globalProperties.$ecastRoom = r.room, e.config.globalProperties.$ecastWelcome = r.welcome, e.config.globalProperties.$syncEcast = Yr.sync, e.config.globalProperties.$pauseEcastUpdates = Yr.pause, e.config.globalProperties.$resumeEcastUpdates = Yr.resume, e.mixin({
                        beforeCreate() {
                            this.$options.ecastKeys && Yr.addKeys(this.$options.ecastKeys), this.$options.ecastProviders && Yr.addProviders(this.$options.ecastProviders)
                        },
                        beforeDestroy() {
                            this.$options.ecastKeys && Yr.purgeKeys(this.$options.ecastKeys), this.$options.ecastProviders && Yr.purgeProviders(this.$options.ecastProviders)
                        }
                    })
                }, t != null && t.wsClient && e.config.globalProperties.$setupEcast(t)
            }
        },
        _o = {
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

    function wp() {
        return !N7() && Object.prototype.toString.call(typeof process < "u" ? process : 0) === "[object process]"
    }

    function P7(e, t) {
        return e.require(t)
    }
    var R7 = {};

    function Xt() {
        return wp() ? global : typeof window < "u" ? window : typeof self < "u" ? self : R7
    }

    function $p(e, t, r) {
        var n = r || Xt(),
            s = n.__SENTRY__ = n.__SENTRY__ || {},
            o = s[e] || (s[e] = t());
        return o
    }
    var kO = Object.prototype.toString;

    function xO(e) {
        switch (kO.call(e)) {
            case "[object Error]":
            case "[object Exception]":
            case "[object DOMException]":
                return !0;
            default:
                return Ti(e, Error)
        }
    }

    function fa(e, t) {
        return kO.call(e) === `[object ${t}]`
    }

    function DO(e) {
        return fa(e, "ErrorEvent")
    }

    function eb(e) {
        return fa(e, "DOMError")
    }

    function L7(e) {
        return fa(e, "DOMException")
    }

    function Qs(e) {
        return fa(e, "String")
    }

    function k7(e) {
        return e === null || typeof e != "object" && typeof e != "function"
    }

    function Kc(e) {
        return fa(e, "Object")
    }

    function Cp(e) {
        return typeof Event < "u" && Ti(e, Event)
    }

    function x7(e) {
        return typeof Element < "u" && Ti(e, Element)
    }

    function D7(e) {
        return fa(e, "RegExp")
    }

    function MO(e) {
        return Boolean(e && e.then && typeof e.then == "function")
    }

    function M7(e) {
        return Kc(e) && "nativeEvent" in e && "preventDefault" in e && "stopPropagation" in e
    }

    function F7(e) {
        return typeof e == "number" && e !== e
    }

    function Ti(e, t) {
        try {
            return e instanceof t
        } catch {
            return !1
        }
    }

    function Yd(e, t) {
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
            for (; u && f++ < r && (g = B7(u, t), !(g === "html" || f > 1 && h + s.length * l + g.length >= n));) s.push(g), h += g.length, u = u.parentNode;
            return s.reverse().join(o)
        } catch {
            return "<unknown>"
        }
    }

    function B7(e, t) {
        var r = e,
            n = [];
        let s, o, l, u, f;
        if (!r || !r.tagName) return "";
        n.push(r.tagName.toLowerCase());
        var h = t && t.length ? t.filter(_ => r.getAttribute(_)).map(_ => [_, r.getAttribute(_)]) : null;
        if (h && h.length) h.forEach(_ => {
            n.push(`[${_[0]}="${_[1]}"]`)
        });
        else if (r.id && n.push(`#${r.id}`), s = r.className, s && Qs(s))
            for (o = s.split(/\s+/), f = 0; f < o.length; f++) n.push(`.${o[f]}`);
        var g = ["type", "name", "title", "alt"];
        for (f = 0; f < g.length; f++) l = g[f], u = r.getAttribute(l), u && n.push(`[${l}="${u}"]`);
        return n.join("")
    }

    function U7() {
        var e = Xt();
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
    var j7 = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/;

    function G7(e) {
        return e === "http" || e === "https"
    }

    function W7(e, t = !1) {
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

    function H7(e) {
        var t = j7.exec(e);
        if (!t) throw new Da(`Invalid Sentry Dsn: ${e}`);
        const [r, n, s = "", o, l = "", u] = t.slice(1);
        let f = "",
            h = u;
        var g = h.split("/");
        if (g.length > 1 && (f = g.slice(0, -1).join("/"), h = g.pop()), h) {
            var _ = h.match(/^\d+/);
            _ && (h = _[0])
        }
        return FO({
            host: o,
            pass: s,
            path: f,
            projectId: h,
            port: l,
            protocol: r,
            publicKey: n
        })
    }

    function FO(e) {
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

    function K7(e) {
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
        if (!G7(n)) throw new Da(`Invalid Sentry Dsn: Invalid protocol ${n}`);
        if (t && isNaN(parseInt(t, 10))) throw new Da(`Invalid Sentry Dsn: Invalid port ${t}`);
        return !0
    }

    function V7(e) {
        var t = typeof e == "string" ? H7(e) : FO(e);
        return K7(t), t
    }
    var q7 = Xt(),
        Y7 = "Sentry Logger ",
        nc = ["debug", "info", "warn", "error", "log", "assert", "trace"];

    function BO(e) {
        var t = Xt();
        if (!("console" in t)) return e();
        var r = t.console,
            n = {};
        nc.forEach(s => {
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

    function tb() {
        let e = !1;
        var t = {
            enable: () => {
                e = !0
            },
            disable: () => {
                e = !1
            }
        };
        return typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__ ? nc.forEach(r => {
            t[r] = (...n) => {
                e && BO(() => {
                    q7.console[r](`${Y7}[${r}]:`, ...n)
                })
            }
        }) : nc.forEach(r => {
            t[r] = () => {}
        }), t
    }
    let jt;
    typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__ ? jt = $p("logger", tb) : jt = tb();

    function rb(e, t = 0) {
        return typeof e != "string" || t === 0 || e.length <= t ? e : `${e.substr(0,t)}...`
    }

    function nb(e, t) {
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

    function Ip(e, t) {
        return Qs(e) ? D7(t) ? t.test(e) : typeof t == "string" ? e.indexOf(t) !== -1 : !1 : !1
    }

    function cr(e, t, r) {
        if (t in e) {
            var n = e[t],
                s = r(n);
            if (typeof s == "function") try {
                jO(s, n)
            } catch {}
            e[t] = s
        }
    }

    function UO(e, t, r) {
        Object.defineProperty(e, t, {
            value: r,
            writable: !0,
            configurable: !0
        })
    }

    function jO(e, t) {
        var r = t.prototype || {};
        e.prototype = t.prototype = r, UO(e, "__sentry_original__", t)
    }

    function Ap(e) {
        return e.__sentry_original__
    }

    function GO(e) {
        if (xO(e)) return {
            message: e.message,
            name: e.name,
            stack: e.stack,
            ...sb(e)
        };
        if (Cp(e)) {
            var t = {
                type: e.type,
                target: ib(e.target),
                currentTarget: ib(e.currentTarget),
                ...sb(e)
            };
            return typeof CustomEvent < "u" && Ti(e, CustomEvent) && (t.detail = e.detail), t
        } else return e
    }

    function ib(e) {
        try {
            return x7(e) ? Yd(e) : Object.prototype.toString.call(e)
        } catch {
            return "<unknown>"
        }
    }

    function sb(e) {
        if (typeof e == "object" && e !== null) {
            var t = {};
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t
        } else return {}
    }

    function z7(e, t = 40) {
        var r = Object.keys(GO(e));
        if (r.sort(), !r.length) return "[object has no keys]";
        if (r[0].length >= t) return rb(r[0], t);
        for (let s = r.length; s > 0; s--) {
            var n = r.slice(0, s).join(", ");
            if (!(n.length > t)) return s === r.length ? n : rb(n, t)
        }
        return ""
    }

    function X7(e) {
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
    var Qf = "<anonymous>";

    function pi(e) {
        try {
            return !e || typeof e != "function" ? Qf : e.name || Qf
        } catch {
            return Qf
        }
    }

    function J7() {
        if (!("fetch" in Xt())) return !1;
        try {
            return new Headers, new Request(""), new Response, !0
        } catch {
            return !1
        }
    }

    function ab(e) {
        return e && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())
    }

    function Q7() {
        if (!J7()) return !1;
        var e = Xt();
        if (ab(e.fetch)) return !0;
        let t = !1;
        var r = e.document;
        if (r && typeof r.createElement == "function") try {
            var n = r.createElement("iframe");
            n.hidden = !0, r.head.appendChild(n), n.contentWindow && n.contentWindow.fetch && (t = ab(n.contentWindow.fetch)), r.head.removeChild(n)
        } catch (s) {
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && jt.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", s)
        }
        return t
    }

    function Z7() {
        var e = Xt(),
            t = e.chrome,
            r = t && t.app && t.app.runtime,
            n = "history" in e && !!e.history.pushState && !!e.history.replaceState;
        return !r && n
    }
    var wt = Xt(),
        Wa = {},
        ob = {};

    function eJ(e) {
        if (!ob[e]) switch (ob[e] = !0, e) {
            case "console":
                tJ();
                break;
            case "dom":
                uJ();
                break;
            case "xhr":
                sJ();
                break;
            case "fetch":
                rJ();
                break;
            case "history":
                aJ();
                break;
            case "error":
                fJ();
                break;
            case "unhandledrejection":
                dJ();
                break;
            default:
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && jt.warn("unknown instrumentation type:", e);
                return
        }
    }

    function zi(e, t) {
        Wa[e] = Wa[e] || [], Wa[e].push(t), eJ(e)
    }

    function un(e, t) {
        if (!(!e || !Wa[e]))
            for (var r of Wa[e] || []) try {
                r(t)
            } catch (n) {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && jt.error(`Error while triggering instrumentation handler.
Type: ${e}
Name: ${pi(r)}
Error:`, n)
            }
    }

    function tJ() {
        "console" in wt && nc.forEach(function(e) {
            e in wt.console && cr(wt.console, e, function(t) {
                return function(...r) {
                    un("console", {
                        args: r,
                        level: e
                    }), t && t.apply(wt.console, r)
                }
            })
        })
    }

    function rJ() {
        !Q7() || cr(wt, "fetch", function(e) {
            return function(...t) {
                var r = {
                    args: t,
                    fetchData: {
                        method: nJ(t),
                        url: iJ(t)
                    },
                    startTimestamp: Date.now()
                };
                return un("fetch", {
                    ...r
                }), e.apply(wt, t).then(n => (un("fetch", {
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

    function nJ(e = []) {
        return "Request" in wt && Ti(e[0], Request) && e[0].method ? String(e[0].method).toUpperCase() : e[1] && e[1].method ? String(e[1].method).toUpperCase() : "GET"
    }

    function iJ(e = []) {
        return typeof e[0] == "string" ? e[0] : "Request" in wt && Ti(e[0], Request) ? e[0].url : String(e[0])
    }

    function sJ() {
        if ("XMLHttpRequest" in wt) {
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
                            un("xhr", {
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
                    return this.__sentry_xhr__ && r[0] !== void 0 && (this.__sentry_xhr__.body = r[0]), un("xhr", {
                        args: r,
                        startTimestamp: Date.now(),
                        xhr: this
                    }), t.apply(this, r)
                }
            })
        }
    }
    let wl;

    function aJ() {
        if (!Z7()) return;
        var e = wt.onpopstate;
        wt.onpopstate = function(...r) {
            var n = wt.location.href,
                s = wl;
            if (wl = n, un("history", {
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
                    var o = wl,
                        l = String(s);
                    wl = l, un("history", {
                        from: o,
                        to: l
                    })
                }
                return r.apply(this, n)
            }
        }
        cr(wt.history, "pushState", t), cr(wt.history, "replaceState", t)
    }
    var oJ = 1e3;
    let $l, Cl;

    function lJ(e, t) {
        if (!e || e.type !== t.type) return !0;
        try {
            if (e.target !== t.target) return !0
        } catch {}
        return !1
    }

    function cJ(e) {
        if (e.type !== "keypress") return !1;
        try {
            var t = e.target;
            if (!t || !t.tagName) return !0;
            if (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable) return !1
        } catch {}
        return !0
    }

    function lb(e, t = !1) {
        return r => {
            if (!(!r || Cl === r) && !cJ(r)) {
                var n = r.type === "keypress" ? "input" : r.type;
                $l === void 0 ? (e({
                    event: r,
                    name: n,
                    global: t
                }), Cl = r) : lJ(Cl, r) && (e({
                    event: r,
                    name: n,
                    global: t
                }), Cl = r), clearTimeout($l), $l = wt.setTimeout(() => {
                    $l = void 0
                }, oJ)
            }
        }
    }

    function uJ() {
        if ("document" in wt) {
            var e = un.bind(null, "dom"),
                t = lb(e, !0);
            wt.document.addEventListener("click", t, !1), wt.document.addEventListener("keypress", t, !1), ["EventTarget", "Node"].forEach(r => {
                var n = wt[r] && wt[r].prototype;
                !n || !n.hasOwnProperty || !n.hasOwnProperty("addEventListener") || (cr(n, "addEventListener", function(s) {
                    return function(o, l, u) {
                        if (o === "click" || o == "keypress") try {
                            var f = this,
                                h = f.__sentry_instrumentation_handlers__ = f.__sentry_instrumentation_handlers__ || {},
                                g = h[o] = h[o] || {
                                    refCount: 0
                                };
                            if (!g.handler) {
                                var _ = lb(e);
                                g.handler = _, s.call(this, o, _, u)
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
    let Zf = null;

    function fJ() {
        Zf = wt.onerror, wt.onerror = function(e, t, r, n, s) {
            return un("error", {
                column: n,
                error: s,
                line: r,
                msg: e,
                url: t
            }), Zf ? Zf.apply(this, arguments) : !1
        }
    }
    let ed = null;

    function dJ() {
        ed = wt.onunhandledrejection, wt.onunhandledrejection = function(e) {
            return un("unhandledrejection", e), ed ? ed.apply(this, arguments) : !0
        }
    }

    function hJ() {
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

    function Ha() {
        var e = Xt(),
            t = e.crypto || e.msCrypto;
        if (t && t.randomUUID) return t.randomUUID().replace(/-/g, "");
        var r = t && t.getRandomValues ? () => t.getRandomValues(new Uint8Array(1))[0] : () => Math.random() * 16;
        return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, n => (n ^ (r() & 15) >> n / 4).toString(16))
    }

    function WO(e) {
        return e.exception && e.exception.values ? e.exception.values[0] : void 0
    }

    function Rs(e) {
        const {
            message: t,
            event_id: r
        } = e;
        if (t) return t;
        var n = WO(e);
        return n ? n.type && n.value ? `${n.type}: ${n.value}` : n.type || n.value || r || "<unknown>" : r || "<unknown>"
    }

    function Xd(e, t, r) {
        var n = e.exception = e.exception || {},
            s = n.values = n.values || [],
            o = s[0] = s[0] || {};
        o.value || (o.value = t || ""), o.type || (o.type = r || "Error")
    }

    function ic(e, t) {
        var r = WO(e);
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

    function pJ(e, t = 1 / 0, r = 1 / 0) {
        try {
            return Jd("", e, t, r)
        } catch (n) {
            return {
                ERROR: `**non-serializable** (${n})`
            }
        }
    }

    function HO(e, t = 3, r = 100 * 1024) {
        var n = pJ(e, t);
        return vJ(n) > r ? HO(e, t - 1, r) : n
    }

    function Jd(e, t, r = 1 / 0, n = 1 / 0, s = hJ()) {
        const [o, l] = s;
        if (t === null || ["number", "boolean", "string"].includes(typeof t) && !F7(t)) return t;
        var u = gJ(e, t);
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
        let _ = 0;
        var E = GO(t);
        for (var $ in E)
            if (!!Object.prototype.hasOwnProperty.call(E, $)) {
                if (_ >= n) {
                    g[$] = "[MaxProperties ~]";
                    break
                }
                var R = E[$];
                g[$] = Jd($, R, r - 1, n, s), _ += 1
            } return l(t), g
    }

    function gJ(e, t) {
        try {
            return e === "domain" && t && typeof t == "object" && t._events ? "[Domain]" : e === "domainEmitter" ? "[DomainEmitter]" : typeof global < "u" && t === global ? "[Global]" : typeof window < "u" && t === window ? "[Window]" : typeof document < "u" && t === document ? "[Document]" : M7(t) ? "[SyntheticEvent]" : typeof t == "number" && t !== t ? "[NaN]" : t === void 0 ? "[undefined]" : typeof t == "function" ? `[Function: ${pi(t)}]` : typeof t == "symbol" ? `[${String(t)}]` : typeof t == "bigint" ? `[BigInt: ${String(t)}]` : `[object ${Object.getPrototypeOf(t).constructor.name}]`
        } catch (r) {
            return `**non-serializable** (${r})`
        }
    }

    function mJ(e) {
        return ~-encodeURI(e).split(/%..|./).length
    }

    function vJ(e) {
        return mJ(JSON.stringify(e))
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
    class bn {
        __init() {
            this._state = Mn.PENDING
        }
        __init2() {
            this._handlers = []
        }
        constructor(t) {
            bn.prototype.__init.call(this), bn.prototype.__init2.call(this), bn.prototype.__init3.call(this), bn.prototype.__init4.call(this), bn.prototype.__init5.call(this), bn.prototype.__init6.call(this);
            try {
                t(this._resolve, this._reject)
            } catch (r) {
                this._reject(r)
            }
        }
        then(t, r) {
            return new bn((n, s) => {
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
            return new bn((r, n) => {
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
                    if (MO(r)) {
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
    var yJ = ["fatal", "error", "warning", "log", "info", "debug"];

    function _J(e) {
        return e === "warn" ? "warning" : yJ.includes(e) ? e : "log"
    }
    var Qd = {
        nowSeconds: () => Date.now() / 1e3
    };

    function bJ() {
        const {
            performance: e
        } = Xt();
        if (!(!e || !e.now)) {
            var t = Date.now() - e.now();
            return {
                now: () => e.now(),
                timeOrigin: t
            }
        }
    }

    function EJ() {
        try {
            var e = P7(Tw, "perf_hooks");
            return e.performance
        } catch {
            return
        }
    }
    var rd = wp() ? EJ() : bJ(),
        cb = rd === void 0 ? Qd : {
            nowSeconds: () => (rd.timeOrigin + rd.now()) / 1e3
        },
        KO = Qd.nowSeconds.bind(Qd),
        VO = cb.nowSeconds.bind(cb);
    (() => {
        const {
            performance: e
        } = Xt();
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

    function TJ(e) {
        var t = VO(),
            r = {
                sid: Ha(),
                init: !0,
                timestamp: t,
                started: t,
                duration: 0,
                status: "ok",
                errors: 0,
                ignoreDuration: !1,
                toJSON: () => OJ(r)
            };
        return e && Vc(r, e), r
    }

    function Vc(e, t = {}) {
        if (t.user && (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address), !e.did && !t.did && (e.did = t.user.id || t.user.email || t.user.username)), e.timestamp = t.timestamp || VO(), t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration), t.sid && (e.sid = t.sid.length === 32 ? t.sid : Ha()), t.init !== void 0 && (e.init = t.init), !e.did && t.did && (e.did = `${t.did}`), typeof t.started == "number" && (e.started = t.started), e.ignoreDuration) e.duration = void 0;
        else if (typeof t.duration == "number") e.duration = t.duration;
        else {
            var r = e.timestamp - e.started;
            e.duration = r >= 0 ? r : 0
        }
        t.release && (e.release = t.release), t.environment && (e.environment = t.environment), !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress), !e.userAgent && t.userAgent && (e.userAgent = t.userAgent), typeof t.errors == "number" && (e.errors = t.errors), t.status && (e.status = t.status)
    }

    function SJ(e, t) {
        let r = {};
        t ? r = {
            status: t
        } : e.status === "ok" && (r = {
            status: "exited"
        }), Vc(e, r)
    }

    function OJ(e) {
        return X7({
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
    var ub = 100;
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
            return this._user = t || {}, this._session && Vc(this._session, {
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
            var n = typeof r == "number" ? Math.min(r, ub) : ub;
            if (n <= 0) return this;
            var s = {
                timestamp: KO(),
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
            }, this._notifyEventProcessors([...qO(), ...this._eventProcessors], t, r)
        }
        setSDKProcessingMetadata(t) {
            return this._sdkProcessingMetadata = {
                ...this._sdkProcessingMetadata,
                ...t
            }, this
        }
        _notifyEventProcessors(t, r, n, s = 0) {
            return new bn((o, l) => {
                var u = t[s];
                if (r === null || typeof u != "function") o(r);
                else {
                    var f = u({
                        ...r
                    }, n);
                    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && u.id && f === null && jt.log(`Event processor "${u.id}" dropped event`), MO(f) ? f.then(h => this._notifyEventProcessors(t, h, n, s + 1).then(o)).then(null, l) : this._notifyEventProcessors(t, f, n, s + 1).then(o).then(null, l)
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

    function qO() {
        return $p("globalEventProcessors", () => [])
    }

    function YO(e) {
        qO().push(e)
    }
    var Np = 4,
        wJ = 100;
    class bo {
        __init() {
            this._stack = [{}]
        }
        constructor(t, r = new is, n = Np) {
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
            var n = this._lastEventId = r && r.event_id ? r.event_id : Ha(),
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
            var s = this._lastEventId = n && n.event_id ? n.event_id : Ha(),
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
                maxBreadcrumbs: l = wJ
            } = s.getOptions && s.getOptions() || {};
            if (!(l <= 0)) {
                var u = KO(),
                    f = {
                        timestamp: u,
                        ...t
                    },
                    h = o ? BO(() => o(f, r)) : f;
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
            var r = fb(this);
            try {
                t(this)
            } finally {
                fb(r)
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
            n && SJ(n), this._sendSessionUpdate(), r && r.setSession()
        }
        startSession(t) {
            const {
                scope: r,
                client: n
            } = this.getStackTop(), {
                release: s,
                environment: o
            } = n && n.getOptions() || {};
            var l = Xt();
            const {
                userAgent: u
            } = l.navigator || {};
            var f = TJ({
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
                h && h.status === "ok" && Vc(h, {
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
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && jt.warn(`Extension method ${t} couldn't be found, doing nothing.`)
        }
    }

    function qc() {
        var e = Xt();
        return e.__SENTRY__ = e.__SENTRY__ || {
            extensions: {},
            hub: void 0
        }, e
    }

    function fb(e) {
        var t = qc(),
            r = ai(t);
        return Pp(t, e), r
    }

    function Dr() {
        var e = qc();
        return (!zO(e) || ai(e).isOlderThan(Np)) && Pp(e, new bo), wp() ? $J(e) : ai(e)
    }

    function $J(e) {
        try {
            var t = qc().__SENTRY__,
                r = t && t.extensions && t.extensions.domain && t.extensions.domain.active;
            if (!r) return ai(e);
            if (!zO(r) || ai(r).isOlderThan(Np)) {
                var n = ai(e).getStackTop();
                Pp(r, new bo(n.client, is.clone(n.scope)))
            }
            return ai(r)
        } catch {
            return ai(e)
        }
    }

    function zO(e) {
        return !!(e && e.__SENTRY__ && e.__SENTRY__.hub)
    }

    function ai(e) {
        return $p("hub", () => new bo, e)
    }

    function Pp(e, t) {
        if (!e) return !1;
        var r = e.__SENTRY__ = e.__SENTRY__ || {};
        return r.hub = t, !0
    }

    function CJ(e, t) {
        return Dr().captureException(e, {
            captureContext: t
        })
    }

    function IJ(e) {
        Dr().withScope(e)
    }

    function AJ(e) {
        var t = e.protocol ? `${e.protocol}:` : "",
            r = e.port ? `:${e.port}` : "";
        return `${t}//${e.host}${r}${e.path?`/${e.path}`:""}/api/`
    }

    function NJ(e, t) {
        var r = V7(e),
            n = `${AJ(r)}embed/error-page/`;
        let s = `dsn=${W7(r)}`;
        for (var o in t)
            if (o !== "dsn")
                if (o === "user") {
                    var l = t.user;
                    if (!l) continue;
                    l.name && (s += `&name=${encodeURIComponent(l.name)}`), l.email && (s += `&email=${encodeURIComponent(l.email)}`)
                } else s += `&${encodeURIComponent(o)}=${encodeURIComponent(t[o])}`;
        return `${n}?${s}`
    }
    let db;
    class no {
        constructor() {
            no.prototype.__init.call(this)
        }
        static __initStatic() {
            this.id = "FunctionToString"
        }
        __init() {
            this.name = no.id
        }
        setupOnce() {
            db = Function.prototype.toString, Function.prototype.toString = function(...t) {
                var r = Ap(this) || this;
                return db.apply(r, t)
            }
        }
    }
    no.__initStatic();
    var PJ = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/];
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
                    var l = o.getIntegration(Ws);
                    if (l) {
                        var u = o.getClient(),
                            f = u ? u.getOptions() : {},
                            h = RJ(l._options, f);
                        return LJ(s, h) ? null : s
                    }
                }
                return s
            };
            n.id = this.name, t(n)
        }
    }
    Ws.__initStatic();

    function RJ(e = {}, t = {}) {
        return {
            allowUrls: [...e.allowUrls || [], ...t.allowUrls || []],
            denyUrls: [...e.denyUrls || [], ...t.denyUrls || []],
            ignoreErrors: [...e.ignoreErrors || [], ...t.ignoreErrors || [], ...PJ],
            ignoreInternal: e.ignoreInternal !== void 0 ? e.ignoreInternal : !0
        }
    }

    function LJ(e, t) {
        return t.ignoreInternal && FJ(e) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && jt.warn(`Event dropped due to being internal Sentry Error.
Event: ${Rs(e)}`), !0) : kJ(e, t.ignoreErrors) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && jt.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${Rs(e)}`), !0) : xJ(e, t.denyUrls) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && jt.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${Rs(e)}.
Url: ${sc(e)}`), !0) : DJ(e, t.allowUrls) ? !1 : ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && jt.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${Rs(e)}.
Url: ${sc(e)}`), !0)
    }

    function kJ(e, t) {
        return !t || !t.length ? !1 : MJ(e).some(r => t.some(n => Ip(r, n)))
    }

    function xJ(e, t) {
        if (!t || !t.length) return !1;
        var r = sc(e);
        return r ? t.some(n => Ip(r, n)) : !1
    }

    function DJ(e, t) {
        if (!t || !t.length) return !0;
        var r = sc(e);
        return r ? t.some(n => Ip(r, n)) : !0
    }

    function MJ(e) {
        if (e.message) return [e.message];
        if (e.exception) try {
            const {
                type: t = "",
                value: r = ""
            } = e.exception.values && e.exception.values[0] || {};
            return [`${r}`, `${t}: ${r}`]
        } catch {
            return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && jt.error(`Cannot extract message for event ${Rs(e)}`), []
        }
        return []
    }

    function FJ(e) {
        try {
            return e.exception.values[0].type === "SentryError"
        } catch {}
        return !1
    }

    function BJ(e = []) {
        for (let r = e.length - 1; r >= 0; r--) {
            var t = e[r];
            if (t && t.filename !== "<anonymous>" && t.filename !== "[native code]") return t.filename || null
        }
        return null
    }

    function sc(e) {
        try {
            let t;
            try {
                t = e.exception.values[0].stacktrace.frames
            } catch {}
            return t ? BJ(t) : null
        } catch {
            return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && jt.error(`Cannot extract url for event ${Rs(e)}`), null
        }
    }

    function XO(e, t) {
        var r = Rp(e, t),
            n = {
                type: t && t.name,
                value: WJ(t)
            };
        return r.length && (n.stacktrace = {
            frames: r
        }), n.type === void 0 && n.value === "" && (n.value = "Unrecoverable error caught"), n
    }

    function UJ(e, t, r, n) {
        var s = {
            exception: {
                values: [{
                    type: Cp(t) ? t.constructor.name : n ? "UnhandledRejection" : "Error",
                    value: `Non-Error ${n?"promise rejection":"exception"} captured with keys: ${z7(t)}`
                }]
            },
            extra: {
                __serialized__: HO(t)
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
                values: [XO(e, t)]
            }
        }
    }

    function Rp(e, t) {
        var r = t.stacktrace || t.stack || "",
            n = GJ(t);
        try {
            return e(r, n)
        } catch {}
        return []
    }
    var jJ = /Minified React error #\d+;/i;

    function GJ(e) {
        if (e) {
            if (typeof e.framesToPop == "number") return e.framesToPop;
            if (jJ.test(e.message)) return 1
        }
        return 0
    }

    function WJ(e) {
        var t = e && e.message;
        return t ? t.error && typeof t.error.message == "string" ? t.error.message : t : "No error message"
    }

    function JO(e, t, r, n, s) {
        let o;
        if (DO(t) && t.error) {
            var l = t;
            return nd(e, l.error)
        }
        if (eb(t) || L7(t)) {
            var u = t;
            if ("stack" in t) o = nd(e, t);
            else {
                var f = u.name || (eb(u) ? "DOMError" : "DOMException"),
                    h = u.message ? `${f}: ${u.message}` : f;
                o = hb(e, h, r, n), Xd(o, h)
            }
            return "code" in u && (o.tags = {
                ...o.tags,
                "DOMException.code": `${u.code}`
            }), o
        }
        if (xO(t)) return nd(e, t);
        if (Kc(t) || Cp(t)) {
            var g = t;
            return o = UJ(e, g, r, s), ic(o, {
                synthetic: !0
            }), o
        }
        return o = hb(e, t, r, n), Xd(o, `${t}`, void 0), ic(o, {
            synthetic: !0
        }), o
    }

    function hb(e, t, r, n) {
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
    var HJ = "Breadcrumbs";
    class io {
        static __initStatic() {
            this.id = HJ
        }
        __init() {
            this.name = io.id
        }
        constructor(t) {
            io.prototype.__init.call(this), this.options = {
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
            this.options.console && zi("console", VJ), this.options.dom && zi("dom", KJ(this.options.dom)), this.options.xhr && zi("xhr", qJ), this.options.fetch && zi("fetch", YJ), this.options.history && zi("history", zJ)
        }
    }
    io.__initStatic();

    function KJ(e) {
        function t(r) {
            let n, s = typeof e == "object" ? e.serializeAttribute : void 0;
            typeof s == "string" && (s = [s]);
            try {
                n = r.event.target ? Yd(r.event.target, s) : Yd(r.event, s)
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

    function VJ(e) {
        var t = {
            category: "console",
            data: {
                arguments: e.args,
                logger: "console"
            },
            level: _J(e.level),
            message: nb(e.args, " ")
        };
        if (e.level === "assert")
            if (e.args[0] === !1) t.message = `Assertion failed: ${nb(e.args.slice(1)," ")||"console.assert"}`, t.data.arguments = e.args.slice(1);
            else return;
        Dr().addBreadcrumb(t, {
            input: e.args,
            level: e.level
        })
    }

    function qJ(e) {
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

    function YJ(e) {
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

    function zJ(e) {
        var t = Xt();
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
    let Zd = 0;

    function QO() {
        return Zd > 0
    }

    function XJ() {
        Zd += 1, setTimeout(() => {
            Zd -= 1
        })
    }

    function Zs(e, t = {}, r) {
        if (typeof e != "function") return e;
        try {
            var n = e.__sentry_wrapped__;
            if (n) return n;
            if (Ap(e)) return e
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
                throw XJ(), IJ(g => {
                    g.addEventProcessor(_ => (t.mechanism && (Xd(_, void 0, void 0), ic(_, t.mechanism)), _.extra = {
                        ..._.extra,
                        arguments: u
                    }, _)), CJ(h)
                }), h
            }
        };
        try {
            for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (s[o] = e[o])
        } catch {}
        jO(s, e), UO(e, "__sentry_wrapped__", s);
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
                onerror: JJ,
                onunhandledrejection: QJ
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
                n && t[r] && (tQ(r), n(), this._installFunc[r] = void 0)
            }
        }
    }
    ui.__initStatic();

    function JJ() {
        zi("error", e => {
            const [t, r, n] = tw();
            if (!t.getIntegration(ui)) return;
            const {
                msg: s,
                url: o,
                line: l,
                column: u,
                error: f
            } = e;
            if (!(QO() || f && f.__sentry_own_request__)) {
                var h = f === void 0 && Qs(s) ? eQ(s, o, l, u) : ZO(JO(r, f || s, void 0, n, !1), o, l, u);
                h.level = "error", ew(t, f, h, "onerror")
            }
        })
    }

    function QJ() {
        zi("unhandledrejection", e => {
            const [t, r, n] = tw();
            if (!t.getIntegration(ui)) return;
            let s = e;
            try {
                "reason" in e ? s = e.reason : "detail" in e && "reason" in e.detail && (s = e.detail.reason)
            } catch {}
            if (QO() || s && s.__sentry_own_request__) return !0;
            var o = k7(s) ? ZJ(s) : JO(r, s, void 0, n, !0);
            o.level = "error", ew(t, s, o, "onunhandledrejection")
        })
    }

    function ZJ(e) {
        return {
            exception: {
                values: [{
                    type: "UnhandledRejection",
                    value: `Non-Error promise rejection captured with value: ${String(e)}`
                }]
            }
        }
    }

    function eQ(e, t, r, n) {
        var s = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
        let o = DO(e) ? e.message : e,
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
        return ZO(f, t, r, n)
    }

    function ZO(e, t, r, n) {
        var s = e.exception = e.exception || {},
            o = s.values = s.values || [],
            l = o[0] = o[0] || {},
            u = l.stacktrace = l.stacktrace || {},
            f = u.frames = u.frames || [],
            h = isNaN(parseInt(n, 10)) ? void 0 : n,
            g = isNaN(parseInt(r, 10)) ? void 0 : r,
            _ = Qs(t) && t.length > 0 ? t : U7();
        return f.length === 0 && f.push({
            colno: h,
            filename: _,
            function: "?",
            in_app: !0,
            lineno: g
        }), e
    }

    function tQ(e) {
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && jt.log(`Global Handler attached: ${e}`)
    }

    function ew(e, t, r, n) {
        ic(r, {
            handled: !1,
            type: n
        }), e.captureEvent(r, {
            originalException: t
        })
    }

    function tw() {
        var e = Dr(),
            t = e.getClient(),
            r = t && t.getOptions() || {
                stackParser: () => [],
                attachStacktrace: !1
            };
        return [e, r.stackParser, r.attachStacktrace]
    }
    var rQ = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"];
    class so {
        static __initStatic() {
            this.id = "TryCatch"
        }
        __init() {
            this.name = so.id
        }
        constructor(t) {
            so.prototype.__init.call(this), this._options = {
                XMLHttpRequest: !0,
                eventTarget: !0,
                requestAnimationFrame: !0,
                setInterval: !0,
                setTimeout: !0,
                ...t
            }
        }
        setupOnce() {
            var t = Xt();
            this._options.setTimeout && cr(t, "setTimeout", pb), this._options.setInterval && cr(t, "setInterval", pb), this._options.requestAnimationFrame && cr(t, "requestAnimationFrame", nQ), this._options.XMLHttpRequest && "XMLHttpRequest" in t && cr(XMLHttpRequest.prototype, "send", iQ);
            var r = this._options.eventTarget;
            if (r) {
                var n = Array.isArray(r) ? r : rQ;
                n.forEach(sQ)
            }
        }
    }
    so.__initStatic();

    function pb(e) {
        return function(...t) {
            var r = t[0];
            return t[0] = Zs(r, {
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

    function nQ(e) {
        return function(t) {
            return e.apply(this, [Zs(t, {
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

    function iQ(e) {
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
                        u = Ap(o);
                    return u && (l.mechanism.data.handler = pi(u)), Zs(o, l)
                })
            }), e.apply(this, t)
        }
    }

    function sQ(e) {
        var t = Xt(),
            r = t[e] && t[e].prototype;
        !r || !r.hasOwnProperty || !r.hasOwnProperty("addEventListener") || (cr(r, "addEventListener", function(n) {
            return function(s, o, l) {
                try {
                    typeof o.handleEvent == "function" && (o.handleEvent = Zs(o.handleEvent, {
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
                return n.apply(this, [s, Zs(o, {
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
    var aQ = "cause",
        oQ = 5;
    class Hs {
        static __initStatic() {
            this.id = "LinkedErrors"
        }
        __init() {
            this.name = Hs.id
        }
        constructor(t = {}) {
            Hs.prototype.__init.call(this), this._key = t.key || aQ, this._limit = t.limit || oQ
        }
        setupOnce() {
            var t = Dr().getClient();
            !t || YO((r, n) => {
                var s = Dr().getIntegration(Hs);
                return s ? lQ(t.getOptions().stackParser, s._key, s._limit, r, n) : r
            })
        }
    }
    Hs.__initStatic();

    function lQ(e, t, r, n, s) {
        if (!n.exception || !n.exception.values || !s || !Ti(s.originalException, Error)) return n;
        var o = rw(e, r, s.originalException, t);
        return n.exception.values = [...o, ...n.exception.values], n
    }

    function rw(e, t, r, n, s = []) {
        if (!Ti(r[n], Error) || s.length + 1 >= t) return s;
        var o = XO(e, r[n]);
        return rw(e, t, r[n], n, [o, ...s])
    }
    var Ui = Xt();
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
            YO(t => {
                if (Dr().getIntegration(Ks)) {
                    if (!Ui.navigator && !Ui.location && !Ui.document) return t;
                    var r = t.request && t.request.url || Ui.location && Ui.location.href;
                    const {
                        referrer: o
                    } = Ui.document || {}, {
                        userAgent: l
                    } = Ui.navigator || {};
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
                        if (cQ(s, o._previousEvent)) return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && jt.warn("Event dropped due to being a duplicate of previously captured event."), null
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

    function cQ(e, t) {
        return t ? !!(uQ(e, t) || fQ(e, t)) : !1
    }

    function uQ(e, t) {
        var r = e.message,
            n = t.message;
        return !(!r && !n || r && !n || !r && n || r !== n || !iw(e, t) || !nw(e, t))
    }

    function fQ(e, t) {
        var r = gb(t),
            n = gb(e);
        return !(!r || !n || r.type !== n.type || r.value !== n.value || !iw(e, t) || !nw(e, t))
    }

    function nw(e, t) {
        let r = mb(e),
            n = mb(t);
        if (!r && !n) return !0;
        if (r && !n || !r && n || (r = r, n = n, n.length !== r.length)) return !1;
        for (let l = 0; l < n.length; l++) {
            var s = n[l],
                o = r[l];
            if (s.filename !== o.filename || s.lineno !== o.lineno || s.colno !== o.colno || s.function !== o.function) return !1
        }
        return !0
    }

    function iw(e, t) {
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

    function gb(e) {
        return e.exception && e.exception.values && e.exception.values[0]
    }

    function mb(e) {
        var t = e.exception;
        if (t) try {
            return t.values[0].stacktrace.frames
        } catch {
            return
        }
    }
    new Ws, new no, new so, new io, new ui, new Hs, new Vs, new Ks;

    function dQ(e = {}, t = Dr()) {
        var r = Xt();
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
        var l = r.document.createElement("script");
        l.async = !0, l.src = NJ(o, e), e.onLoad && (l.onload = e.onLoad);
        var u = r.document.head || r.document.body;
        u ? u.appendChild(l) : (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && jt.error("Not injecting report dialog. No injection point found in HTML")
    }
    const hQ = et({
            setup() {
                return {
                    fatalError: Qi(_o.fatal.error)
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
                    dQ({
                        id: (r = (t = (e = this.fatalError) == null ? void 0 : e.event) == null ? void 0 : t.event_id) != null ? r : "Unknown"
                    })
                }
            }
        }),
        Eo = e => (oo("data-v-a7272d53"), e = e(), lo(), e),
        pQ = {
            class: "jbg fatal"
        },
        gQ = {
            class: "constrain"
        },
        mQ = Eo(() => H("a", {
            class: "logo",
            href: "/",
            "aria-label": "Jackbox Games Logo"
        }, null, -1)),
        vQ = {
            class: "content"
        },
        yQ = Eo(() => H("h1", null, "You have encountered an error", -1)),
        _Q = Eo(() => H("p", null, "Something went wrong! But don't worry, you can try a few things to get going.", -1)),
        bQ = Eo(() => H("ul", null, [H("li", null, "Refresh the page"), H("li", null, "Turn off adblockers or other browser extensions."), H("li", null, "Check your connection to the Internet."), H("li", null, "Make sure you're using an up-to-date browser."), H("li", null, "If that doesn't work, let us know.")], -1)),
        EQ = Eo(() => H("hr", null, null, -1)),
        TQ = {
            class: "error"
        };

    function SQ(e, t, r, n, s, o) {
        return G(), Y("div", pQ, [H("div", gQ, [mQ, H("div", vQ, [yQ, _Q, bQ, H("button", {
            onClick: t[0] || (t[0] = (...l) => e.onFeedbackClick && e.onFeedbackClick(...l))
        }, "Tell us what happened"), EQ, H("pre", TQ, nt(e.message), 1)])])])
    }
    const OQ = ct(hQ, [
            ["render", SQ],
            ["__scopeId", "data-v-a7272d53"]
        ]),
        Il = Un({
            hasCrashed: !1
        }),
        wQ = {
            install: e => {
                if (e.config.globalProperties.$handleEcastError) return;
                e.provide(_o.fatal.error, kr(() => Il));
                const t = (r, n) => {
                    var s, o;
                    if (r instanceof rs.EcastEntityNotFound || r instanceof rs.EcastFilterError || r instanceof rs.EcastRateLimitExceeded || r instanceof Error && ((s = r.message) == null ? void 0 : s.includes("Socket not ready to send")) || r instanceof Error && ((o = r.message) == null ? void 0 : o.includes("No connection available"))) return console.warn(r);
                    throw n ? console.error(n, r) : console.error(r), r
                };
                window.tv.onError = async (r, n) => {
                    if (r.level === "error" && (Il.hasCrashed = !0, Il.event = r, Il.hint = n), e.config.globalProperties.$debugRecorder) return await e.config.globalProperties.$debugRecorder.sendToEcast()
                }, e.component("Fatal", OQ), e.config.globalProperties.$handleEcastError = t
            }
        };
    var $Q = RO,
        CQ = LO;

    function IQ(e, t) {
        t = $Q(t, e);
        for (var r = 0, n = t.length; e != null && r < n;) e = e[CQ(t[r++])];
        return r && r == n ? e : void 0
    }
    var AQ = IQ,
        NQ = AQ;

    function PQ(e, t, r) {
        var n = e == null ? void 0 : NQ(e, t);
        return n === void 0 ? r : n
    }
    var RQ = PQ,
        LQ = Math.floor,
        kQ = Math.random;

    function xQ(e, t) {
        return e + LQ(kQ() * (t - e + 1))
    }
    var DQ = xQ,
        MQ = DQ;

    function FQ(e) {
        var t = e.length;
        return t ? e[MQ(0, t - 1)] : void 0
    }
    var sw = FQ,
        BQ = NO;

    function UQ(e, t) {
        return BQ(t, function(r) {
            return e[r]
        })
    }
    var jQ = UQ,
        GQ = jQ,
        WQ = Wc;

    function HQ(e) {
        return e == null ? [] : GQ(e, WQ(e))
    }
    var KQ = HQ,
        VQ = sw,
        qQ = KQ;

    function YQ(e) {
        return VQ(qQ(e))
    }
    var zQ = YQ,
        XQ = sw,
        JQ = zQ,
        QQ = vi;

    function ZQ(e) {
        var t = QQ(e) ? XQ : JQ;
        return t(e)
    }
    var eZ = ZQ;

    function vb(e, t) {
        const r = e.global.locale,
            n = e.global.messages[r],
            s = RQ(n, t);
        return Array.isArray(s) || console.warn(`[i18nPlugin] Translation with key ${t} is not an array`), eZ(s)
    }
    const tZ = {
            install: (e, t) => {
                e.directive("ts", (r, n) => {
                    const s = vb(t.i18n, n.value);
                    r.textContent = s || ""
                }), e.config.globalProperties.$ts = function(n) {
                    return vb(t.i18n, n) || ""
                }, e.config.globalProperties.$t = t.i18n.global.t, e.config.globalProperties.$tc = t.i18n.global.tc, e.config.globalProperties.$te = t.i18n.global.te, e.config.globalProperties.$tm = t.i18n.global.tm
            }
        },
        rZ = et({
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
        nZ = "main/pp9/antique-freak/assets/928ef0da.png",
        iZ = "main/pp9/antique-freak/assets/0bb76a2d.png",
        sZ = "main/pp9/antique-freak/assets/ed4469b3.png",
        aZ = {
            key: 0,
            class: "image",
            src: nZ,
            alt: "Kicked"
        },
        oZ = {
            key: 1,
            class: "image",
            src: iZ,
            alt: "Thank You"
        },
        lZ = {
            key: 2,
            class: "image",
            src: sZ,
            alt: "Error"
        },
        cZ = {
            class: "text"
        },
        uZ = {
            key: 3,
            class: "subtext"
        },
        fZ = {
            class: "actions"
        };

    function dZ(e, t, r, n, s, o) {
        const l = Dt("bb");
        return G(), Y("div", {
            class: xe(["error-model", e.classes])
        }, [e.image === "tear" ? (G(), Y("img", aZ)) : e.image === "moon" ? (G(), Y("img", oZ)) : (G(), Y("img", lZ)), Ie(H("h3", cZ, null, 512), [
            [l, e.text]
        ]), e.subtext ? Ie((G(), Y("h3", uZ, null, 512)), [
            [l, e.subtext]
        ]) : Se("", !0), H("div", fZ, [Ie(H("button", {
            onClick: t[0] || (t[0] = zt(u => e.$emit("resolve"), ["prevent"]))
        }, null, 512), [
            [l, e.dismissText]
        ])])], 2)
    }
    const hZ = ct(rZ, [
            ["render", dZ],
            ["__scopeId", "data-v-39debcb6"]
        ]),
        pZ = et({
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
        gZ = {
            class: "text"
        },
        mZ = {
            key: 0,
            class: "subtext"
        },
        vZ = {
            class: "actions"
        },
        yZ = ["onClick"];

    function _Z(e, t, r, n, s, o) {
        const l = Dt("bb");
        return G(), Y("div", {
            class: xe(["options-modal", e.classes])
        }, [Ie(H("h3", gZ, null, 512), [
            [l, e.text]
        ]), e.subtext ? Ie((G(), Y("h3", mZ, null, 512)), [
            [l, e.subtext]
        ]) : Se("", !0), H("div", vZ, [(G(!0), Y(ze, null, wr(e.options, (u, f) => Ie((G(), Y("button", {
            key: f,
            class: xe(u.classes),
            onClick: zt(h => e.$emit("resolve", u.value), ["prevent"])
        }, null, 10, yZ)), [
            [l, u.text]
        ])), 128))])], 2)
    }
    const bZ = ct(pZ, [
            ["render", _Z],
            ["__scopeId", "data-v-fdbdeb06"]
        ]),
        EZ = et({
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
                    return this.props = t, this.classes = r.classes || "jbg", e === "Error" ? this.content = hZ : e === "Options" ? this.content = bZ : this.content = e, new Promise(n => {
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

    function TZ(e, t, r, n, s, o) {
        return G(), wn(Ec, {
            name: "modal-transition"
        }, {
            default: Sh(() => [e.props ? (G(), Y("div", {
                key: 0,
                class: xe(["modal", e.classes]),
                onKeyup: t[0] || (t[0] = Tc((...l) => e.onBackgroundClick && e.onBackgroundClick(...l), ["esc"])),
                onClick: t[1] || (t[1] = zt((...l) => e.onBackgroundClick && e.onBackgroundClick(...l), ["self"]))
            }, [e.content ? (G(), wn(Ch(e.content), co({
                key: 0,
                class: "content"
            }, e.props, {
                onResolve: e.onResolve
            }), null, 16, ["onResolve"])) : Se("", !0)], 34)) : Se("", !0)]),
            _: 1
        })
    }
    const SZ = ct(EZ, [
            ["render", TZ],
            ["__scopeId", "data-v-dc92e8d3"]
        ]),
        OZ = {
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
                e.component("Modal", SZ), e.config.globalProperties.$showModal = r, e.config.globalProperties.$registerModal = n
            }
        },
        wZ = et({
            setup() {
                return {
                    announcment: Qi(_o.textDescriptions.announcement)
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
        $Z = {
            class: "text-descriptions",
            role: "log",
            "aria-atomic": "false",
            "aria-relevant": "additions",
            "aria-live": "polite"
        };

    function CZ(e, t, r, n, s, o) {
        return G(), Y("div", $Z, [(G(!0), Y(ze, null, wr(e.lines, l => (G(), Y("p", {
            key: l.id
        }, nt(l.text), 1))), 128))])
    }
    const IZ = ct(wZ, [
            ["render", CZ]
        ]),
        yb = on(""),
        AZ = {
            install: e => {
                if (e.config.globalProperties.$announce) return;
                e.provide(_o.textDescriptions.announcement, kr(() => yb.value));
                const t = r => {
                    yb.value = r
                };
                e.component("TextDescriptions", IZ), e.config.globalProperties.$announce = t
            }
        },
        NZ = {
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
        PZ = {
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
        RZ = typeof Symbol == "function" && typeof Symbol.toStringTag == "symbol",
        Si = e => RZ ? Symbol(e) : e,
        LZ = (e, t, r) => kZ({
            l: e,
            k: t,
            s: r
        }),
        kZ = e => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"),
        Ut = e => typeof e == "number" && isFinite(e),
        xZ = e => kp(e) === "[object Date]",
        gi = e => kp(e) === "[object RegExp]",
        Yc = e => Ue(e) && Object.keys(e).length === 0;

    function DZ(e, t) {
        typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack))
    }
    const tr = Object.assign;

    function _b(e) {
        return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
    }
    const MZ = Object.prototype.hasOwnProperty;

    function Lp(e, t) {
        return MZ.call(e, t)
    }
    const _t = Array.isArray,
        Rt = e => typeof e == "function",
        ye = e => typeof e == "string",
        Je = e => typeof e == "boolean",
        bt = e => e !== null && typeof e == "object",
        aw = Object.prototype.toString,
        kp = e => aw.call(e),
        Ue = e => kp(e) === "[object Object]",
        FZ = e => e == null ? "" : _t(e) || Ue(e) && e.toString === aw ? JSON.stringify(e, null, 2) : String(e);
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

    function zc(e, t, r = {}) {
        const {
            domain: n,
            messages: s,
            args: o
        } = r, l = e, u = new SyntaxError(String(l));
        return u.code = e, t && (u.location = t), u.domain = n, u
    }

    function BZ(e) {
        throw e
    }

    function UZ(e, t, r) {
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
        jZ = "\r",
        mr = `
`,
        GZ = String.fromCharCode(8232),
        WZ = String.fromCharCode(8233);

    function HZ(e) {
        const t = e;
        let r = 0,
            n = 1,
            s = 1,
            o = 0;
        const l = oe => t[oe] === jZ && t[oe + 1] === mr,
            u = oe => t[oe] === mr,
            f = oe => t[oe] === WZ,
            h = oe => t[oe] === GZ,
            g = oe => l(oe) || u(oe) || f(oe) || h(oe),
            _ = () => r,
            E = () => n,
            $ = () => s,
            R = () => o,
            M = oe => l(oe) || f(oe) || h(oe) ? mr : t[oe],
            U = () => M(r),
            C = () => M(r + o);

        function V() {
            return o = 0, g(r) && (n++, s = 0), l(r) && r++, r++, s++, t[r]
        }

        function X() {
            return l(r + o) && o++, o++, t[r + o]
        }

        function W() {
            r = 0, n = 1, s = 1, o = 0
        }

        function j(oe = 0) {
            o = oe
        }

        function Q() {
            const oe = r + o;
            for (; oe !== r;) V();
            o = 0
        }
        return {
            index: _,
            line: E,
            column: $,
            peekOffset: R,
            charAt: M,
            currentChar: U,
            currentPeek: C,
            next: V,
            peek: X,
            reset: W,
            resetPeek: j,
            skipToPeek: Q
        }
    }
    const ri = void 0,
        bb = "'",
        KZ = "tokenizer";

    function VZ(e, t = {}) {
        const r = t.location !== !1,
            n = HZ(e),
            s = () => n.index(),
            o = () => UZ(n.line(), n.column(), n.index()),
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

        function _(m, p, O, ...D) {
            const B = h();
            if (p.column += O, p.offset += O, g) {
                const z = th(B.startLoc, p),
                    ce = zc(m, z, {
                        domain: KZ,
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
        const $ = m => E(m, 14);

        function R(m, p) {
            return m.currentChar() === p ? (m.next(), p) : (_(rt.EXPECTED_TOKEN, o(), 0, p), "")
        }

        function M(m) {
            let p = "";
            for (; m.currentPeek() === xn || m.currentPeek() === mr;) p += m.currentPeek(), m.peek();
            return p
        }

        function U(m) {
            const p = M(m);
            return m.skipToPeek(), p
        }

        function C(m) {
            if (m === ri) return !1;
            const p = m.charCodeAt(0);
            return p >= 97 && p <= 122 || p >= 65 && p <= 90 || p === 95
        }

        function V(m) {
            if (m === ri) return !1;
            const p = m.charCodeAt(0);
            return p >= 48 && p <= 57
        }

        function X(m, p) {
            const {
                currentType: O
            } = p;
            if (O !== 2) return !1;
            M(m);
            const D = C(m.currentPeek());
            return m.resetPeek(), D
        }

        function W(m, p) {
            const {
                currentType: O
            } = p;
            if (O !== 2) return !1;
            M(m);
            const D = m.currentPeek() === "-" ? m.peek() : m.currentPeek(),
                B = V(D);
            return m.resetPeek(), B
        }

        function j(m, p) {
            const {
                currentType: O
            } = p;
            if (O !== 2) return !1;
            M(m);
            const D = m.currentPeek() === bb;
            return m.resetPeek(), D
        }

        function Q(m, p) {
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
            const D = C(m.currentPeek());
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
                    const z = m.currentPeek();
                    return z === "{" ? C(m.peek()) : z === "@" || z === "%" || z === "|" || z === ":" || z === "." || z === xn || !z ? !1 : z === mr ? (m.peek(), D()) : C(z)
                },
                B = D();
            return m.resetPeek(), B
        }

        function Ae(m) {
            M(m);
            const p = m.currentPeek() === "|";
            return m.resetPeek(), p
        }

        function Ce(m) {
            const p = M(m),
                O = m.currentPeek() === "%" && m.peek() === "{";
            return m.resetPeek(), {
                isModulo: O,
                hasSpace: p.length > 0
            }
        }

        function fe(m, p = !0) {
            const O = (B = !1, z = "", ce = !1) => {
                    const se = m.currentPeek();
                    return se === "{" ? z === "%" ? !1 : B : se === "@" || !se ? z === "%" ? !0 : B : se === "%" ? (m.peek(), O(B, "%", !0)) : se === "|" ? z === "%" || ce ? !0 : !(z === xn || z === mr) : se === xn ? (m.peek(), O(!0, xn, ce)) : se === mr ? (m.peek(), O(!0, mr, ce)) : !0
                },
                D = O();
            return p && m.resetPeek(), D
        }

        function $e(m, p) {
            const O = m.currentChar();
            return O === ri ? ri : p(O) ? (m.next(), O) : null
        }

        function F(m) {
            return $e(m, O => {
                const D = O.charCodeAt(0);
                return D >= 97 && D <= 122 || D >= 65 && D <= 90 || D >= 48 && D <= 57 || D === 95 || D === 36
            })
        }

        function ie(m) {
            return $e(m, O => {
                const D = O.charCodeAt(0);
                return D >= 48 && D <= 57
            })
        }

        function de(m) {
            return $e(m, O => {
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
            U(m);
            const p = m.currentChar();
            return p !== "%" && _(rt.EXPECTED_TOKEN, o(), 0, p), m.next(), "%"
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
            U(m);
            let p = "",
                O = "";
            for (; p = F(m);) O += p;
            return m.currentChar() === ri && _(rt.UNTERMINATED_CLOSING_BRACE, o(), 0), O
        }

        function Ge(m) {
            U(m);
            let p = "";
            return m.currentChar() === "-" ? (m.next(), p += `-${be(m)}`) : p += be(m), m.currentChar() === ri && _(rt.UNTERMINATED_CLOSING_BRACE, o(), 0), p
        }

        function tt(m) {
            U(m), R(m, "'");
            let p = "",
                O = "";
            const D = z => z !== bb && z !== mr;
            for (; p = $e(m, D);) p === "\\" ? O += It(m) : O += p;
            const B = m.currentChar();
            return B === mr || B === ri ? (_(rt.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, o(), 0), B === mr && (m.next(), R(m, "'")), O) : (R(m, "'"), O)
        }

        function It(m) {
            const p = m.currentChar();
            switch (p) {
                case "\\":
                case "'":
                    return m.next(), `\\${p}`;
                case "u":
                    return Cr(m, p, 4);
                case "U":
                    return Cr(m, p, 6);
                default:
                    return _(rt.UNKNOWN_ESCAPE_SEQUENCE, o(), 0, p), ""
            }
        }

        function Cr(m, p, O) {
            R(m, p);
            let D = "";
            for (let B = 0; B < O; B++) {
                const z = de(m);
                if (!z) {
                    _(rt.INVALID_UNICODE_ESCAPE_SEQUENCE, o(), 0, `\\${p}${D}${m.currentChar()}`);
                    break
                }
                D += z
            }
            return `\\${p}${D}`
        }

        function nr(m) {
            U(m);
            let p = "",
                O = "";
            const D = B => B !== "{" && B !== "}" && B !== xn && B !== mr;
            for (; p = $e(m, D);) O += p;
            return O
        }

        function vr(m) {
            let p = "",
                O = "";
            for (; p = F(m);) O += p;
            return O
        }

        function at(m) {
            const p = (O = !1, D) => {
                const B = m.currentChar();
                return B === "{" || B === "%" || B === "@" || B === "|" || !B || B === xn ? D : B === mr ? (D += B, m.next(), p(O, D)) : (D += B, m.next(), p(!0, D))
            };
            return p(!1, "")
        }

        function St(m) {
            U(m);
            const p = R(m, "|");
            return U(m), p
        }

        function ot(m, p) {
            let O = null;
            switch (m.currentChar()) {
                case "{":
                    return p.braceNest >= 1 && _(rt.NOT_ALLOW_NEST_PLACEHOLDER, o(), 0), m.next(), O = E(p, 2, "{"), U(m), p.braceNest++, O;
                case "}":
                    return p.braceNest > 0 && p.currentType === 2 && _(rt.EMPTY_PLACEHOLDER, o(), 0), m.next(), O = E(p, 3, "}"), p.braceNest--, p.braceNest > 0 && U(m), p.inLinked && p.braceNest === 0 && (p.inLinked = !1), O;
                case "@":
                    return p.braceNest > 0 && _(rt.UNTERMINATED_CLOSING_BRACE, o(), 0), O = kt(m, p) || $(p), p.braceNest = 0, O;
                default:
                    let B = !0,
                        z = !0,
                        ce = !0;
                    if (Ae(m)) return p.braceNest > 0 && _(rt.UNTERMINATED_CLOSING_BRACE, o(), 0), O = E(p, 1, St(m)), p.braceNest = 0, p.inLinked = !1, O;
                    if (p.braceNest > 0 && (p.currentType === 5 || p.currentType === 6 || p.currentType === 7)) return _(rt.UNTERMINATED_CLOSING_BRACE, o(), 0), p.braceNest = 0, Ht(m, p);
                    if (B = X(m, p)) return O = E(p, 5, Fe(m)), U(m), O;
                    if (z = W(m, p)) return O = E(p, 6, Ge(m)), U(m), O;
                    if (ce = j(m, p)) return O = E(p, 7, tt(m)), U(m), O;
                    if (!B && !z && !ce) return O = E(p, 13, nr(m)), _(rt.INVALID_TOKEN_IN_PLACEHOLDER, o(), 0, O.value), U(m), O;
                    break
            }
            return O
        }

        function kt(m, p) {
            const {
                currentType: O
            } = p;
            let D = null;
            const B = m.currentChar();
            switch ((O === 8 || O === 9 || O === 12 || O === 10) && (B === mr || B === xn) && _(rt.INVALID_LINKED_FORMAT, o(), 0), B) {
                case "@":
                    return m.next(), D = E(p, 8, "@"), p.inLinked = !0, D;
                case ".":
                    return U(m), m.next(), E(p, 9, ".");
                case ":":
                    return U(m), m.next(), E(p, 10, ":");
                default:
                    return Ae(m) ? (D = E(p, 1, St(m)), p.braceNest = 0, p.inLinked = !1, D) : Q(m, p) || le(m, p) ? (U(m), kt(m, p)) : oe(m, p) ? (U(m), E(p, 12, vr(m))) : ue(m, p) ? (U(m), B === "{" ? ot(m, p) || D : E(p, 11, at(m))) : (O === 8 && _(rt.INVALID_LINKED_FORMAT, o(), 0), p.braceNest = 0, p.inLinked = !1, Ht(m, p))
            }
        }

        function Ht(m, p) {
            let O = {
                type: 14
            };
            if (p.braceNest > 0) return ot(m, p) || $(p);
            if (p.inLinked) return kt(m, p) || $(p);
            switch (m.currentChar()) {
                case "{":
                    return ot(m, p) || $(p);
                case "}":
                    return _(rt.UNBALANCED_CLOSING_BRACE, o(), 0), m.next(), E(p, 3, "}");
                case "@":
                    return kt(m, p) || $(p);
                default:
                    if (Ae(m)) return O = E(p, 1, St(m)), p.braceNest = 0, p.inLinked = !1, O;
                    const {
                        isModulo: B, hasSpace: z
                    } = Ce(m);
                    if (B) return z ? E(p, 0, Oe(m)) : E(p, 4, ve(m));
                    if (fe(m)) return E(p, 0, Oe(m));
                    break
            }
            return O
        }

        function xt() {
            const {
                currentType: m,
                offset: p,
                startLoc: O,
                endLoc: D
            } = f;
            return f.lastType = m, f.lastOffset = p, f.lastStartLoc = O, f.lastEndLoc = D, f.offset = s(), f.startLoc = o(), n.currentChar() === ri ? E(f, 14) : Ht(n, f)
        }
        return {
            nextToken: xt,
            currentOffset: s,
            currentPosition: o,
            context: h
        }
    }
    const qZ = "parser",
        YZ = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;

    function zZ(e, t, r) {
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

    function XZ(e = {}) {
        const t = e.location !== !1,
            {
                onError: r
            } = e;

        function n(C, V, X, W, ...j) {
            const Q = C.currentPosition();
            if (Q.offset += W, Q.column += W, r) {
                const oe = th(X, Q),
                    le = zc(V, oe, {
                        domain: qZ,
                        args: j
                    });
                r(le)
            }
        }

        function s(C, V, X) {
            const W = {
                type: C,
                start: V,
                end: V
            };
            return t && (W.loc = {
                start: X,
                end: X
            }), W
        }

        function o(C, V, X, W) {
            C.end = V, W && (C.type = W), t && C.loc && (C.loc.end = X)
        }

        function l(C, V) {
            const X = C.context(),
                W = s(3, X.offset, X.startLoc);
            return W.value = V, o(W, C.currentOffset(), C.currentPosition()), W
        }

        function u(C, V) {
            const X = C.context(),
                {
                    lastOffset: W,
                    lastStartLoc: j
                } = X,
                Q = s(5, W, j);
            return Q.index = parseInt(V, 10), C.nextToken(), o(Q, C.currentOffset(), C.currentPosition()), Q
        }

        function f(C, V) {
            const X = C.context(),
                {
                    lastOffset: W,
                    lastStartLoc: j
                } = X,
                Q = s(4, W, j);
            return Q.key = V, C.nextToken(), o(Q, C.currentOffset(), C.currentPosition()), Q
        }

        function h(C, V) {
            const X = C.context(),
                {
                    lastOffset: W,
                    lastStartLoc: j
                } = X,
                Q = s(9, W, j);
            return Q.value = V.replace(YZ, zZ), C.nextToken(), o(Q, C.currentOffset(), C.currentPosition()), Q
        }

        function g(C) {
            const V = C.nextToken(),
                X = C.context(),
                {
                    lastOffset: W,
                    lastStartLoc: j
                } = X,
                Q = s(8, W, j);
            return V.type !== 12 ? (n(C, rt.UNEXPECTED_EMPTY_LINKED_MODIFIER, X.lastStartLoc, 0), Q.value = "", o(Q, W, j), {
                nextConsumeToken: V,
                node: Q
            }) : (V.value == null && n(C, rt.UNEXPECTED_LEXICAL_ANALYSIS, X.lastStartLoc, 0, yn(V)), Q.value = V.value || "", o(Q, C.currentOffset(), C.currentPosition()), {
                node: Q
            })
        }

        function _(C, V) {
            const X = C.context(),
                W = s(7, X.offset, X.startLoc);
            return W.value = V, o(W, C.currentOffset(), C.currentPosition()), W
        }

        function E(C) {
            const V = C.context(),
                X = s(6, V.offset, V.startLoc);
            let W = C.nextToken();
            if (W.type === 9) {
                const j = g(C);
                X.modifier = j.node, W = j.nextConsumeToken || C.nextToken()
            }
            switch (W.type !== 10 && n(C, rt.UNEXPECTED_LEXICAL_ANALYSIS, V.lastStartLoc, 0, yn(W)), W = C.nextToken(), W.type === 2 && (W = C.nextToken()), W.type) {
                case 11:
                    W.value == null && n(C, rt.UNEXPECTED_LEXICAL_ANALYSIS, V.lastStartLoc, 0, yn(W)), X.key = _(C, W.value || "");
                    break;
                case 5:
                    W.value == null && n(C, rt.UNEXPECTED_LEXICAL_ANALYSIS, V.lastStartLoc, 0, yn(W)), X.key = f(C, W.value || "");
                    break;
                case 6:
                    W.value == null && n(C, rt.UNEXPECTED_LEXICAL_ANALYSIS, V.lastStartLoc, 0, yn(W)), X.key = u(C, W.value || "");
                    break;
                case 7:
                    W.value == null && n(C, rt.UNEXPECTED_LEXICAL_ANALYSIS, V.lastStartLoc, 0, yn(W)), X.key = h(C, W.value || "");
                    break;
                default:
                    n(C, rt.UNEXPECTED_EMPTY_LINKED_KEY, V.lastStartLoc, 0);
                    const j = C.context(),
                        Q = s(7, j.offset, j.startLoc);
                    return Q.value = "", o(Q, j.offset, j.startLoc), X.key = Q, o(X, j.offset, j.startLoc), {
                        nextConsumeToken: W,
                        node: X
                    }
            }
            return o(X, C.currentOffset(), C.currentPosition()), {
                node: X
            }
        }

        function $(C) {
            const V = C.context(),
                X = V.currentType === 1 ? C.currentOffset() : V.offset,
                W = V.currentType === 1 ? V.endLoc : V.startLoc,
                j = s(2, X, W);
            j.items = [];
            let Q = null;
            do {
                const ue = Q || C.nextToken();
                switch (Q = null, ue.type) {
                    case 0:
                        ue.value == null && n(C, rt.UNEXPECTED_LEXICAL_ANALYSIS, V.lastStartLoc, 0, yn(ue)), j.items.push(l(C, ue.value || ""));
                        break;
                    case 6:
                        ue.value == null && n(C, rt.UNEXPECTED_LEXICAL_ANALYSIS, V.lastStartLoc, 0, yn(ue)), j.items.push(u(C, ue.value || ""));
                        break;
                    case 5:
                        ue.value == null && n(C, rt.UNEXPECTED_LEXICAL_ANALYSIS, V.lastStartLoc, 0, yn(ue)), j.items.push(f(C, ue.value || ""));
                        break;
                    case 7:
                        ue.value == null && n(C, rt.UNEXPECTED_LEXICAL_ANALYSIS, V.lastStartLoc, 0, yn(ue)), j.items.push(h(C, ue.value || ""));
                        break;
                    case 8:
                        const Ae = E(C);
                        j.items.push(Ae.node), Q = Ae.nextConsumeToken || null;
                        break
                }
            } while (V.currentType !== 14 && V.currentType !== 1);
            const oe = V.currentType === 1 ? V.lastOffset : C.currentOffset(),
                le = V.currentType === 1 ? V.lastEndLoc : C.currentPosition();
            return o(j, oe, le), j
        }

        function R(C, V, X, W) {
            const j = C.context();
            let Q = W.items.length === 0;
            const oe = s(1, V, X);
            oe.cases = [], oe.cases.push(W);
            do {
                const le = $(C);
                Q || (Q = le.items.length === 0), oe.cases.push(le)
            } while (j.currentType !== 14);
            return Q && n(C, rt.MUST_HAVE_MESSAGES_IN_PLURAL, X, 0), o(oe, C.currentOffset(), C.currentPosition()), oe
        }

        function M(C) {
            const V = C.context(),
                {
                    offset: X,
                    startLoc: W
                } = V,
                j = $(C);
            return V.currentType === 14 ? j : R(C, X, W, j)
        }

        function U(C) {
            const V = VZ(C, tr({}, e)),
                X = V.context(),
                W = s(0, X.offset, X.startLoc);
            return t && W.loc && (W.loc.source = C), W.body = M(V), X.currentType !== 14 && n(V, rt.UNEXPECTED_LEXICAL_ANALYSIS, X.lastStartLoc, 0, C[X.offset] || ""), o(W, V.currentOffset(), V.currentPosition()), W
        }
        return {
            parse: U
        }
    }

    function yn(e) {
        if (e.type === 14) return "EOF";
        const t = (e.value || "").replace(/\r?\n/gu, "\\n");
        return t.length > 10 ? t.slice(0, 9) + "\u2026" : t
    }

    function JZ(e, t = {}) {
        const r = {
            ast: e,
            helpers: new Set
        };
        return {
            context: () => r,
            helper: o => (r.helpers.add(o), o)
        }
    }

    function Eb(e, t) {
        for (let r = 0; r < e.length; r++) xp(e[r], t)
    }

    function xp(e, t) {
        switch (e.type) {
            case 1:
                Eb(e.cases, t), t.helper("plural");
                break;
            case 2:
                Eb(e.items, t);
                break;
            case 6:
                xp(e.key, t), t.helper("linked"), t.helper("type");
                break;
            case 5:
                t.helper("interpolate"), t.helper("list");
                break;
            case 4:
                t.helper("interpolate"), t.helper("named");
                break
        }
    }

    function QZ(e, t = {}) {
        const r = JZ(e);
        r.helper("normalize"), e.body && xp(e.body, r);
        const n = r.context();
        e.helpers = Array.from(n.helpers)
    }

    function ZZ(e, t) {
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

        function f(M, U) {
            l.code += M
        }

        function h(M, U = !0) {
            const C = U ? s : "";
            f(o ? C + "  ".repeat(M) : C)
        }

        function g(M = !0) {
            const U = ++l.indentLevel;
            M && h(U)
        }

        function _(M = !0) {
            const U = --l.indentLevel;
            M && h(U)
        }

        function E() {
            h(l.indentLevel)
        }
        return {
            context: u,
            push: f,
            indent: g,
            deindent: _,
            newline: E,
            helper: M => `_${M}`,
            needIndent: () => l.needIndent
        }
    }

    function eee(e, t) {
        const {
            helper: r
        } = e;
        e.push(`${r("linked")}(`), ea(e, t.key), t.modifier ? (e.push(", "), ea(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")")
    }

    function tee(e, t) {
        const {
            helper: r,
            needIndent: n
        } = e;
        e.push(`${r("normalize")}([`), e.indent(n());
        const s = t.items.length;
        for (let o = 0; o < s && (ea(e, t.items[o]), o !== s - 1); o++) e.push(", ");
        e.deindent(n()), e.push("])")
    }

    function ree(e, t) {
        const {
            helper: r,
            needIndent: n
        } = e;
        if (t.cases.length > 1) {
            e.push(`${r("plural")}([`), e.indent(n());
            const s = t.cases.length;
            for (let o = 0; o < s && (ea(e, t.cases[o]), o !== s - 1); o++) e.push(", ");
            e.deindent(n()), e.push("])")
        }
    }

    function nee(e, t) {
        t.body ? ea(e, t.body) : e.push("null")
    }

    function ea(e, t) {
        const {
            helper: r
        } = e;
        switch (t.type) {
            case 0:
                nee(e, t);
                break;
            case 1:
                ree(e, t);
                break;
            case 2:
                tee(e, t);
                break;
            case 6:
                eee(e, t);
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
    const iee = (e, t = {}) => {
        const r = ye(t.mode) ? t.mode : "normal",
            n = ye(t.filename) ? t.filename : "message.intl",
            s = !!t.sourceMap,
            o = t.breakLineCode != null ? t.breakLineCode : r === "arrow" ? ";" : `
`,
            l = t.needIndent ? t.needIndent : r !== "arrow",
            u = e.helpers || [],
            f = ZZ(e, {
                mode: r,
                filename: n,
                sourceMap: s,
                breakLineCode: o,
                needIndent: l
            });
        f.push(r === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), f.indent(l), u.length > 0 && (f.push(`const { ${u.map(_=>`${_}: _${_}`).join(", ")} } = ctx`), f.newline()), f.push("return "), ea(f, e), f.deindent(l), f.push("}");
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

    function see(e, t = {}) {
        const r = tr({}, t),
            s = XZ(r).parse(e);
        return QZ(s, r), iee(s, r)
    }
    /*!
     * devtools-if v9.2.2
     * (c) 2022 kazuya kawaguchi
     * Released under the MIT License.
     */
    const aee = {
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
    const oee = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;

    function lee(e) {
        return oee.test(e)
    }

    function cee(e) {
        const t = e.charCodeAt(0),
            r = e.charCodeAt(e.length - 1);
        return t === r && (t === 34 || t === 39) ? e.slice(1, -1) : e
    }

    function uee(e) {
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

    function fee(e) {
        const t = e.trim();
        return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : lee(t) ? cee(t) : "*" + t
    }

    function dee(e) {
        const t = [];
        let r = -1,
            n = 0,
            s = 0,
            o, l, u, f, h, g, _;
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
                if (s = 0, l === void 0 || (l = fee(l), l === !1)) return !1;
                E[1]()
            }
        };

        function $() {
            const R = e[r + 1];
            if (n === 5 && R === "'" || n === 6 && R === '"') return r++, u = "\\" + R, E[0](), !0
        }
        for (; n !== null;)
            if (r++, o = e[r], !(o === "\\" && $())) {
                if (f = uee(o), _ = Oi[n], h = _[f] || _.l || 8, h === 8 || (n = h[0], h[1] !== void 0 && (g = E[h[1]], g && (u = o, g() === !1)))) return;
                if (n === 7) return t
            }
    }
    const Tb = new Map;

    function hee(e, t) {
        return bt(e) ? e[t] : null
    }

    function pee(e, t) {
        if (!bt(e)) return null;
        let r = Tb.get(t);
        if (r || (r = dee(t), r && Tb.set(t, r)), !r) return null;
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
    const gee = e => e,
        mee = e => "",
        vee = "text",
        yee = e => e.length === 0 ? "" : e.join(""),
        _ee = FZ;

    function Sb(e, t) {
        return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0
    }

    function bee(e) {
        const t = Ut(e.pluralIndex) ? e.pluralIndex : -1;
        return e.named && (Ut(e.named.count) || Ut(e.named.n)) ? Ut(e.named.count) ? e.named.count : Ut(e.named.n) ? e.named.n : t : t
    }

    function Eee(e, t) {
        t.count || (t.count = e), t.n || (t.n = e)
    }

    function Tee(e = {}) {
        const t = e.locale,
            r = bee(e),
            n = bt(e.pluralRules) && ye(t) && Rt(e.pluralRules[t]) ? e.pluralRules[t] : Sb,
            s = bt(e.pluralRules) && ye(t) && Rt(e.pluralRules[t]) ? Sb : void 0,
            o = C => C[n(r, C.length, s)],
            l = e.list || [],
            u = C => l[C],
            f = e.named || {};
        Ut(e.pluralIndex) && Eee(r, f);
        const h = C => f[C];

        function g(C) {
            const V = Rt(e.messages) ? e.messages(C) : bt(e.messages) ? e.messages[C] : !1;
            return V || (e.parent ? e.parent.message(C) : mee)
        }
        const _ = C => e.modifiers ? e.modifiers[C] : gee,
            E = Ue(e.processor) && Rt(e.processor.normalize) ? e.processor.normalize : yee,
            $ = Ue(e.processor) && Rt(e.processor.interpolate) ? e.processor.interpolate : _ee,
            R = Ue(e.processor) && ye(e.processor.type) ? e.processor.type : vee,
            U = {
                list: u,
                named: h,
                plural: o,
                linked: (C, ...V) => {
                    const [X, W] = V;
                    let j = "text",
                        Q = "";
                    V.length === 1 ? bt(X) ? (Q = X.modifier || Q, j = X.type || j) : ye(X) && (Q = X || Q) : V.length === 2 && (ye(X) && (Q = X || Q), ye(W) && (j = W || j));
                    let oe = g(C)(U);
                    return j === "vnode" && _t(oe) && Q && (oe = oe[0]), Q ? _(Q)(oe, j) : oe
                },
                message: g,
                type: R,
                interpolate: $,
                normalize: E
            };
        return U
    }
    let See = null;
    aee.FunctionTranslate;

    function Oee(e) {
        return t => See
    }
    const wee = {
        NOT_FOUND_KEY: 1,
        FALLBACK_TO_TRANSLATE: 2,
        CANNOT_FORMAT_NUMBER: 3,
        FALLBACK_TO_NUMBER_FORMAT: 4,
        CANNOT_FORMAT_DATE: 5,
        FALLBACK_TO_DATE_FORMAT: 6,
        __EXTEND_POINT__: 7
    };

    function $ee(e, t, r) {
        return [...new Set([r, ..._t(t) ? t : bt(t) ? Object.keys(t) : ye(t) ? [t] : [r]])]
    }

    function ow(e, t, r) {
        const n = ye(r) ? r : To,
            s = e;
        s.__localeChainCache || (s.__localeChainCache = new Map);
        let o = s.__localeChainCache.get(n);
        if (!o) {
            o = [];
            let l = [r];
            for (; _t(l);) l = Ob(o, l, t);
            const u = _t(t) || !Ue(t) ? t : t.default ? t.default : null;
            l = ye(u) ? [u] : u, _t(l) && Ob(o, l, !1), s.__localeChainCache.set(n, o)
        }
        return o
    }

    function Ob(e, t, r) {
        let n = !0;
        for (let s = 0; s < t.length && Je(n); s++) {
            const o = t[s];
            ye(o) && (n = Cee(e, t[s], r))
        }
        return n
    }

    function Cee(e, t, r) {
        let n;
        const s = t.split("-");
        do {
            const o = s.join("-");
            n = Iee(e, o, r), s.splice(-1, 1)
        } while (s.length && n === !0);
        return n
    }

    function Iee(e, t, r) {
        let n = !1;
        if (!e.includes(t) && (n = !0, t)) {
            n = t[t.length - 1] !== "!";
            const s = t.replace(/!/g, "");
            e.push(s), (_t(r) || Ue(r)) && r[s] && (n = r[s])
        }
        return n
    }
    const Aee = "9.2.2",
        Xc = -1,
        To = "en-US",
        wb = "",
        $b = e => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;

    function Nee() {
        return {
            upper: (e, t) => t === "text" && ye(e) ? e.toUpperCase() : t === "vnode" && bt(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
            lower: (e, t) => t === "text" && ye(e) ? e.toLowerCase() : t === "vnode" && bt(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
            capitalize: (e, t) => t === "text" && ye(e) ? $b(e) : t === "vnode" && bt(e) && "__v_isVNode" in e ? $b(e.children) : e
        }
    }
    let lw;

    function Pee(e) {
        lw = e
    }
    let cw;

    function Ree(e) {
        cw = e
    }
    let uw;

    function Lee(e) {
        uw = e
    }
    let Cb = 0;

    function kee(e = {}) {
        const t = ye(e.version) ? e.version : Aee,
            r = ye(e.locale) ? e.locale : To,
            n = _t(e.fallbackLocale) || Ue(e.fallbackLocale) || ye(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : r,
            s = Ue(e.messages) ? e.messages : {
                [r]: {}
            },
            o = Ue(e.datetimeFormats) ? e.datetimeFormats : {
                [r]: {}
            },
            l = Ue(e.numberFormats) ? e.numberFormats : {
                [r]: {}
            },
            u = tr({}, e.modifiers || {}, Nee()),
            f = e.pluralRules || {},
            h = Rt(e.missing) ? e.missing : null,
            g = Je(e.missingWarn) || gi(e.missingWarn) ? e.missingWarn : !0,
            _ = Je(e.fallbackWarn) || gi(e.fallbackWarn) ? e.fallbackWarn : !0,
            E = !!e.fallbackFormat,
            $ = !!e.unresolving,
            R = Rt(e.postTranslation) ? e.postTranslation : null,
            M = Ue(e.processor) ? e.processor : null,
            U = Je(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
            C = !!e.escapeParameter,
            V = Rt(e.messageCompiler) ? e.messageCompiler : lw,
            X = Rt(e.messageResolver) ? e.messageResolver : cw || hee,
            W = Rt(e.localeFallbacker) ? e.localeFallbacker : uw || $ee,
            j = bt(e.fallbackContext) ? e.fallbackContext : void 0,
            Q = Rt(e.onWarn) ? e.onWarn : DZ,
            oe = e,
            le = bt(oe.__datetimeFormatters) ? oe.__datetimeFormatters : new Map,
            ue = bt(oe.__numberFormatters) ? oe.__numberFormatters : new Map,
            Ae = bt(oe.__meta) ? oe.__meta : {};
        Cb++;
        const Ce = {
            version: t,
            cid: Cb,
            locale: r,
            fallbackLocale: n,
            messages: s,
            modifiers: u,
            pluralRules: f,
            missing: h,
            missingWarn: g,
            fallbackWarn: _,
            fallbackFormat: E,
            unresolving: $,
            postTranslation: R,
            processor: M,
            warnHtmlMessage: U,
            escapeParameter: C,
            messageCompiler: V,
            messageResolver: X,
            localeFallbacker: W,
            fallbackContext: j,
            onWarn: Q,
            __meta: Ae
        };
        return Ce.datetimeFormats = o, Ce.numberFormats = l, Ce.__datetimeFormatters = le, Ce.__numberFormatters = ue, Ce
    }

    function Dp(e, t, r, n, s) {
        const {
            missing: o,
            onWarn: l
        } = e;
        if (o !== null) {
            const u = o(e, r, t, s);
            return ye(u) ? u : t
        } else return t
    }

    function La(e, t, r) {
        const n = e;
        n.__localeChainCache = new Map, e.localeFallbacker(e, r, t)
    }
    const xee = e => e;
    let Ib = Object.create(null);

    function Dee(e, t = {}) {
        {
            const n = (t.onCacheKey || xee)(e),
                s = Ib[n];
            if (s) return s;
            let o = !1;
            const l = t.onError || BZ;
            t.onError = h => {
                o = !0, l(h)
            };
            const {
                code: u
            } = see(e, t), f = new Function(`return ${u}`)();
            return o ? f : Ib[n] = f
        }
    }
    let fw = rt.__EXTEND_POINT__;
    const id = () => ++fw,
        Ls = {
            INVALID_ARGUMENT: fw,
            INVALID_DATE_ARGUMENT: id(),
            INVALID_ISO_DATE_ARGUMENT: id(),
            __EXTEND_POINT__: id()
        };

    function ks(e) {
        return zc(e, null, void 0)
    }
    const Ab = () => "",
        ss = e => Rt(e);

    function Nb(e, ...t) {
        const {
            fallbackFormat: r,
            postTranslation: n,
            unresolving: s,
            messageCompiler: o,
            fallbackLocale: l,
            messages: u
        } = e, [f, h] = rh(...t), g = Je(h.missingWarn) ? h.missingWarn : e.missingWarn, _ = Je(h.fallbackWarn) ? h.fallbackWarn : e.fallbackWarn, E = Je(h.escapeParameter) ? h.escapeParameter : e.escapeParameter, $ = !!h.resolvedMessage, R = ye(h.default) || Je(h.default) ? Je(h.default) ? o ? f : () => f : h.default : r ? o ? f : () => f : "", M = r || R !== "", U = ye(h.locale) ? h.locale : e.locale;
        E && Mee(h);
        let [C, V, X] = $ ? [f, U, u[U] || {}] : dw(e, f, U, l, _, g), W = C, j = f;
        if (!$ && !(ye(W) || ss(W)) && M && (W = R, j = W), !$ && (!(ye(W) || ss(W)) || !ye(V))) return s ? Xc : f;
        let Q = !1;
        const oe = () => {
                Q = !0
            },
            le = ss(W) ? W : hw(e, f, V, W, j, oe);
        if (Q) return W;
        const ue = Uee(e, V, X, h),
            Ae = Tee(ue),
            Ce = Fee(e, le, Ae);
        return n ? n(Ce, f) : Ce
    }

    function Mee(e) {
        _t(e.list) ? e.list = e.list.map(t => ye(t) ? _b(t) : t) : bt(e.named) && Object.keys(e.named).forEach(t => {
            ye(e.named[t]) && (e.named[t] = _b(e.named[t]))
        })
    }

    function dw(e, t, r, n, s, o) {
        const {
            messages: l,
            onWarn: u,
            messageResolver: f,
            localeFallbacker: h
        } = e, g = h(e, n, r);
        let _ = {},
            E, $ = null;
        const R = "translate";
        for (let M = 0; M < g.length && (E = g[M], _ = l[E] || {}, ($ = f(_, t)) === null && ($ = _[t]), !(ye($) || Rt($))); M++) {
            const U = Dp(e, t, E, o, R);
            U !== t && ($ = U)
        }
        return [$, E, _]
    }

    function hw(e, t, r, n, s, o) {
        const {
            messageCompiler: l,
            warnHtmlMessage: u
        } = e;
        if (ss(n)) {
            const h = n;
            return h.locale = h.locale || r, h.key = h.key || t, h
        }
        if (l == null) {
            const h = () => n;
            return h.locale = r, h.key = t, h
        }
        const f = l(n, Bee(e, r, s, n, u, o));
        return f.locale = r, f.key = t, f.source = n, f
    }

    function Fee(e, t, r) {
        return t(r)
    }

    function rh(...e) {
        const [t, r, n] = e, s = {};
        if (!ye(t) && !Ut(t) && !ss(t)) throw ks(Ls.INVALID_ARGUMENT);
        const o = Ut(t) ? String(t) : (ss(t), t);
        return Ut(r) ? s.plural = r : ye(r) ? s.default = r : Ue(r) && !Yc(r) ? s.named = r : _t(r) && (s.list = r), Ut(n) ? s.plural = n : ye(n) ? s.default = n : Ue(n) && tr(s, n), [o, s]
    }

    function Bee(e, t, r, n, s, o) {
        return {
            warnHtmlMessage: s,
            onError: l => {
                throw o && o(l), l
            },
            onCacheKey: l => LZ(t, r, l)
        }
    }

    function Uee(e, t, r, n) {
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
            messages: $ => {
                let R = l(r, $);
                if (R == null && g) {
                    const [, , M] = dw(g, $, t, u, f, h);
                    R = l(M, $)
                }
                if (ye(R)) {
                    let M = !1;
                    const C = hw(e, $, t, R, $, () => {
                        M = !0
                    });
                    return M ? Ab : C
                } else return ss(R) ? R : Ab
            }
        };
        return e.processor && (E.processor = e.processor), n.list && (E.list = n.list), n.named && (E.named = n.named), Ut(n.plural) && (E.pluralIndex = n.plural), E
    }

    function Pb(e, ...t) {
        const {
            datetimeFormats: r,
            unresolving: n,
            fallbackLocale: s,
            onWarn: o,
            localeFallbacker: l
        } = e, {
            __datetimeFormatters: u
        } = e, [f, h, g, _] = nh(...t), E = Je(g.missingWarn) ? g.missingWarn : e.missingWarn;
        Je(g.fallbackWarn) ? g.fallbackWarn : e.fallbackWarn;
        const $ = !!g.part,
            R = ye(g.locale) ? g.locale : e.locale,
            M = l(e, s, R);
        if (!ye(f) || f === "") return new Intl.DateTimeFormat(R, _).format(h);
        let U = {},
            C, V = null;
        const X = "datetime format";
        for (let Q = 0; Q < M.length && (C = M[Q], U = r[C] || {}, V = U[f], !Ue(V)); Q++) Dp(e, f, C, E, X);
        if (!Ue(V) || !ye(C)) return n ? Xc : f;
        let W = `${C}__${f}`;
        Yc(_) || (W = `${W}__${JSON.stringify(_)}`);
        let j = u.get(W);
        return j || (j = new Intl.DateTimeFormat(C, tr({}, V, _)), u.set(W, j)), $ ? j.formatToParts(h) : j.format(h)
    }
    const pw = ["localeMatcher", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "formatMatcher", "hour12", "timeZone", "dateStyle", "timeStyle", "calendar", "dayPeriod", "numberingSystem", "hourCycle", "fractionalSecondDigits"];

    function nh(...e) {
        const [t, r, n, s] = e, o = {};
        let l = {},
            u;
        if (ye(t)) {
            const f = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
            if (!f) throw ks(Ls.INVALID_ISO_DATE_ARGUMENT);
            const h = f[3] ? f[3].trim().startsWith("T") ? `${f[1].trim()}${f[3].trim()}` : `${f[1].trim()}T${f[3].trim()}` : f[1].trim();
            u = new Date(h);
            try {
                u.toISOString()
            } catch {
                throw ks(Ls.INVALID_ISO_DATE_ARGUMENT)
            }
        } else if (xZ(t)) {
            if (isNaN(t.getTime())) throw ks(Ls.INVALID_DATE_ARGUMENT);
            u = t
        } else if (Ut(t)) u = t;
        else throw ks(Ls.INVALID_ARGUMENT);
        return ye(r) ? o.key = r : Ue(r) && Object.keys(r).forEach(f => {
            pw.includes(f) ? l[f] = r[f] : o[f] = r[f]
        }), ye(n) ? o.locale = n : Ue(n) && (l = n), Ue(s) && (l = s), [o.key || "", u, o, l]
    }

    function Rb(e, t, r) {
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
        } = e, [f, h, g, _] = ih(...t), E = Je(g.missingWarn) ? g.missingWarn : e.missingWarn;
        Je(g.fallbackWarn) ? g.fallbackWarn : e.fallbackWarn;
        const $ = !!g.part,
            R = ye(g.locale) ? g.locale : e.locale,
            M = l(e, s, R);
        if (!ye(f) || f === "") return new Intl.NumberFormat(R, _).format(h);
        let U = {},
            C, V = null;
        const X = "number format";
        for (let Q = 0; Q < M.length && (C = M[Q], U = r[C] || {}, V = U[f], !Ue(V)); Q++) Dp(e, f, C, E, X);
        if (!Ue(V) || !ye(C)) return n ? Xc : f;
        let W = `${C}__${f}`;
        Yc(_) || (W = `${W}__${JSON.stringify(_)}`);
        let j = u.get(W);
        return j || (j = new Intl.NumberFormat(C, tr({}, V, _)), u.set(W, j)), $ ? j.formatToParts(h) : j.format(h)
    }
    const gw = ["localeMatcher", "style", "currency", "currencyDisplay", "currencySign", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "notation", "signDisplay", "unit", "unitDisplay", "roundingMode", "roundingPriority", "roundingIncrement", "trailingZeroDisplay"];

    function ih(...e) {
        const [t, r, n, s] = e, o = {};
        let l = {};
        if (!Ut(t)) throw ks(Ls.INVALID_ARGUMENT);
        const u = t;
        return ye(r) ? o.key = r : Ue(r) && Object.keys(r).forEach(f => {
            gw.includes(f) ? l[f] = r[f] : o[f] = r[f]
        }), ye(n) ? o.locale = n : Ue(n) && (l = n), Ue(s) && (l = s), [o.key || "", u, o, l]
    }

    function kb(e, t, r) {
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
    const jee = "9.2.2";
    wee.__EXTEND_POINT__;
    let mw = rt.__EXTEND_POINT__;
    const Tr = () => ++mw,
        Mt = {
            UNEXPECTED_RETURN_TYPE: mw,
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

    function Gt(e, ...t) {
        return zc(e, null, void 0)
    }
    const sh = Si("__transrateVNode"),
        ah = Si("__datetimeParts"),
        oh = Si("__numberParts"),
        vw = Si("__setPluralRules");
    Si("__intlifyMeta");
    const yw = Si("__injectWithOption");

    function lh(e) {
        if (!bt(e)) return e;
        for (const t in e)
            if (!!Lp(e, t))
                if (!t.includes(".")) bt(e[t]) && lh(e[t]);
                else {
                    const r = t.split("."),
                        n = r.length - 1;
                    let s = e;
                    for (let o = 0; o < n; o++) r[o] in s || (s[r[o]] = {}), s = s[r[o]];
                    s[r[n]] = e[t], delete e[t], bt(s[r[n]]) && lh(s[r[n]])
                } return e
    }

    function Jc(e, t) {
        const {
            messages: r,
            __i18n: n,
            messageResolver: s,
            flatJson: o
        } = t, l = Ue(r) ? r : _t(n) ? {} : {
            [e]: {}
        };
        if (_t(n) && n.forEach(u => {
                if ("locale" in u && "resource" in u) {
                    const {
                        locale: f,
                        resource: h
                    } = u;
                    f ? (l[f] = l[f] || {}, Ka(h, l[f])) : Ka(h, l)
                } else ye(u) && Ka(JSON.parse(u), l)
            }), s == null && o)
            for (const u in l) Lp(l, u) && lh(l[u]);
        return l
    }
    const Al = e => !bt(e) || _t(e);

    function Ka(e, t) {
        if (Al(e) || Al(t)) throw Gt(Mt.INVALID_VALUE);
        for (const r in e) Lp(e, r) && (Al(e[r]) || Al(t[r]) ? t[r] = e[r] : Ka(e[r], t[r]))
    }

    function Gee(e) {
        return e.type
    }

    function _w(e, t, r) {
        let n = bt(t.messages) ? t.messages : {};
        "__i18nGlobal" in r && (n = Jc(e.locale.value, {
            messages: n,
            __i18n: r.__i18nGlobal
        }));
        const s = Object.keys(n);
        s.length && s.forEach(o => {
            e.mergeLocaleMessage(o, n[o])
        }); {
            if (bt(t.datetimeFormats)) {
                const o = Object.keys(t.datetimeFormats);
                o.length && o.forEach(l => {
                    e.mergeDateTimeFormat(l, t.datetimeFormats[l])
                })
            }
            if (bt(t.numberFormats)) {
                const o = Object.keys(t.numberFormats);
                o.length && o.forEach(l => {
                    e.mergeNumberFormat(l, t.numberFormats[l])
                })
            }
        }
    }

    function xb(e) {
        return $t(yc, null, e, 0)
    }
    let Db = 0;

    function Mb(e) {
        return (t, r, n, s) => e(r, n, as() || void 0, s)
    }

    function Mp(e = {}, t) {
        const {
            __root: r
        } = e, n = r === void 0;
        let s = Je(e.inheritLocale) ? e.inheritLocale : !0;
        const o = on(r && s ? r.locale.value : ye(e.locale) ? e.locale : To),
            l = on(r && s ? r.fallbackLocale.value : ye(e.fallbackLocale) || _t(e.fallbackLocale) || Ue(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : o.value),
            u = on(Jc(o.value, e)),
            f = on(Ue(e.datetimeFormats) ? e.datetimeFormats : {
                [o.value]: {}
            }),
            h = on(Ue(e.numberFormats) ? e.numberFormats : {
                [o.value]: {}
            });
        let g = r ? r.missingWarn : Je(e.missingWarn) || gi(e.missingWarn) ? e.missingWarn : !0,
            _ = r ? r.fallbackWarn : Je(e.fallbackWarn) || gi(e.fallbackWarn) ? e.fallbackWarn : !0,
            E = r ? r.fallbackRoot : Je(e.fallbackRoot) ? e.fallbackRoot : !0,
            $ = !!e.fallbackFormat,
            R = Rt(e.missing) ? e.missing : null,
            M = Rt(e.missing) ? Mb(e.missing) : null,
            U = Rt(e.postTranslation) ? e.postTranslation : null,
            C = r ? r.warnHtmlMessage : Je(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
            V = !!e.escapeParameter;
        const X = r ? r.modifiers : Ue(e.modifiers) ? e.modifiers : {};
        let W = e.pluralRules || r && r.pluralRules,
            j;
        j = (() => {
            const A = {
                version: jee,
                locale: o.value,
                fallbackLocale: l.value,
                messages: u.value,
                modifiers: X,
                pluralRules: W,
                missing: M === null ? void 0 : M,
                missingWarn: g,
                fallbackWarn: _,
                fallbackFormat: $,
                unresolving: !0,
                postTranslation: U === null ? void 0 : U,
                warnHtmlMessage: C,
                escapeParameter: V,
                messageResolver: e.messageResolver,
                __meta: {
                    framework: "vue"
                }
            };
            return A.datetimeFormats = f.value, A.numberFormats = h.value, A.__datetimeFormatters = Ue(j) ? j.__datetimeFormatters : void 0, A.__numberFormatters = Ue(j) ? j.__numberFormatters : void 0, kee(A)
        })(), La(j, o.value, l.value);

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
                    l.value = A, j.fallbackLocale = l.value, La(j, o.value, A)
                }
            }),
            Ae = kr(() => u.value),
            Ce = kr(() => f.value),
            fe = kr(() => h.value);

        function $e() {
            return Rt(U) ? U : null
        }

        function F(A) {
            U = A, j.postTranslation = A
        }

        function ie() {
            return R
        }

        function de(A) {
            A !== null && (M = Mb(A)), R = A, j.missing = M
        }
        const be = (A, K, he, pe, Ne, De) => {
            oe();
            let w;
            if (w = A(j), Ut(w) && w === Xc) {
                const [T, P] = K();
                return r && E ? pe(r) : Ne(T)
            } else {
                if (De(w)) return w;
                throw Gt(Mt.UNEXPECTED_RETURN_TYPE)
            }
        };

        function ve(...A) {
            return be(K => Reflect.apply(Nb, null, [K, ...A]), () => rh(...A), "translate", K => Reflect.apply(K.t, K, [...A]), K => K, K => ye(K))
        }

        function Oe(...A) {
            const [K, he, pe] = A;
            if (pe && !bt(pe)) throw Gt(Mt.INVALID_ARGUMENT);
            return ve(K, he, tr({
                resolvedMessage: !0
            }, pe || {}))
        }

        function Fe(...A) {
            return be(K => Reflect.apply(Pb, null, [K, ...A]), () => nh(...A), "datetime format", K => Reflect.apply(K.d, K, [...A]), () => wb, K => ye(K))
        }

        function Ge(...A) {
            return be(K => Reflect.apply(Lb, null, [K, ...A]), () => ih(...A), "number format", K => Reflect.apply(K.n, K, [...A]), () => wb, K => ye(K))
        }

        function tt(A) {
            return A.map(K => ye(K) || Ut(K) || Je(K) ? xb(String(K)) : K)
        }
        const Cr = {
            normalize: tt,
            interpolate: A => A,
            type: "vnode"
        };

        function nr(...A) {
            return be(K => {
                let he;
                const pe = K;
                try {
                    pe.processor = Cr, he = Reflect.apply(Nb, null, [pe, ...A])
                } finally {
                    pe.processor = null
                }
                return he
            }, () => rh(...A), "translate", K => K[sh](...A), K => [xb(K)], K => _t(K))
        }

        function vr(...A) {
            return be(K => Reflect.apply(Lb, null, [K, ...A]), () => ih(...A), "number format", K => K[oh](...A), () => [], K => ye(K) || _t(K))
        }

        function at(...A) {
            return be(K => Reflect.apply(Pb, null, [K, ...A]), () => nh(...A), "datetime format", K => K[ah](...A), () => [], K => ye(K) || _t(K))
        }

        function St(A) {
            W = A, j.pluralRules = W
        }

        function ot(A, K) {
            const he = ye(K) ? K : o.value,
                pe = xt(he);
            return j.messageResolver(pe, A) !== null
        }

        function kt(A) {
            let K = null;
            const he = ow(j, l.value, o.value);
            for (let pe = 0; pe < he.length; pe++) {
                const Ne = u.value[he[pe]] || {},
                    De = j.messageResolver(Ne, A);
                if (De != null) {
                    K = De;
                    break
                }
            }
            return K
        }

        function Ht(A) {
            const K = kt(A);
            return K != null ? K : r ? r.tm(A) || {} : {}
        }

        function xt(A) {
            return u.value[A] || {}
        }

        function m(A, K) {
            u.value[A] = K, j.messages = u.value
        }

        function p(A, K) {
            u.value[A] = u.value[A] || {}, Ka(K, u.value[A]), j.messages = u.value
        }

        function O(A) {
            return f.value[A] || {}
        }

        function D(A, K) {
            f.value[A] = K, j.datetimeFormats = f.value, Rb(j, A, K)
        }

        function B(A, K) {
            f.value[A] = tr(f.value[A] || {}, K), j.datetimeFormats = f.value, Rb(j, A, K)
        }

        function z(A) {
            return h.value[A] || {}
        }

        function ce(A, K) {
            h.value[A] = K, j.numberFormats = h.value, kb(j, A, K)
        }

        function se(A, K) {
            h.value[A] = tr(h.value[A] || {}, K), j.numberFormats = h.value, kb(j, A, K)
        }
        Db++, r && eh && (Zi(r.locale, A => {
            s && (o.value = A, j.locale = A, La(j, o.value, l.value))
        }), Zi(r.fallbackLocale, A => {
            s && (l.value = A, j.fallbackLocale = A, La(j, o.value, l.value))
        }));
        const re = {
            id: Db,
            locale: le,
            fallbackLocale: ue,
            get inheritLocale() {
                return s
            },
            set inheritLocale(A) {
                s = A, A && r && (o.value = r.locale.value, l.value = r.fallbackLocale.value, La(j, o.value, l.value))
            },
            get availableLocales() {
                return Object.keys(u.value).sort()
            },
            messages: Ae,
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
                return g
            },
            set missingWarn(A) {
                g = A, j.missingWarn = g
            },
            get fallbackWarn() {
                return _
            },
            set fallbackWarn(A) {
                _ = A, j.fallbackWarn = _
            },
            get fallbackRoot() {
                return E
            },
            set fallbackRoot(A) {
                E = A
            },
            get fallbackFormat() {
                return $
            },
            set fallbackFormat(A) {
                $ = A, j.fallbackFormat = $
            },
            get warnHtmlMessage() {
                return C
            },
            set warnHtmlMessage(A) {
                C = A, j.warnHtmlMessage = A
            },
            get escapeParameter() {
                return V
            },
            set escapeParameter(A) {
                V = A, j.escapeParameter = A
            },
            t: ve,
            getLocaleMessage: xt,
            setLocaleMessage: m,
            mergeLocaleMessage: p,
            getPostTranslationHandler: $e,
            setPostTranslationHandler: F,
            getMissingHandler: ie,
            setMissingHandler: de,
            [vw]: St
        };
        return re.datetimeFormats = Ce, re.numberFormats = fe, re.rt = Oe, re.te = ot, re.tm = Ht, re.d = Fe, re.n = Ge, re.getDateTimeFormat = O, re.setDateTimeFormat = D, re.mergeDateTimeFormat = B, re.getNumberFormat = z, re.setNumberFormat = ce, re.mergeNumberFormat = se, re[yw] = e.__injectWithOption, re[sh] = nr, re[ah] = at, re[oh] = vr, re
    }

    function Wee(e) {
        const t = ye(e.locale) ? e.locale : To,
            r = ye(e.fallbackLocale) || _t(e.fallbackLocale) || Ue(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : t,
            n = Rt(e.missing) ? e.missing : void 0,
            s = Je(e.silentTranslationWarn) || gi(e.silentTranslationWarn) ? !e.silentTranslationWarn : !0,
            o = Je(e.silentFallbackWarn) || gi(e.silentFallbackWarn) ? !e.silentFallbackWarn : !0,
            l = Je(e.fallbackRoot) ? e.fallbackRoot : !0,
            u = !!e.formatFallbackMessages,
            f = Ue(e.modifiers) ? e.modifiers : {},
            h = e.pluralizationRules,
            g = Rt(e.postTranslation) ? e.postTranslation : void 0,
            _ = ye(e.warnHtmlInMessage) ? e.warnHtmlInMessage !== "off" : !0,
            E = !!e.escapeParameterHtml,
            $ = Je(e.sync) ? e.sync : !0;
        let R = e.messages;
        if (Ue(e.sharedMessages)) {
            const j = e.sharedMessages;
            R = Object.keys(j).reduce((oe, le) => {
                const ue = oe[le] || (oe[le] = {});
                return tr(ue, j[le]), oe
            }, R || {})
        }
        const {
            __i18n: M,
            __root: U,
            __injectWithOption: C
        } = e, V = e.datetimeFormats, X = e.numberFormats, W = e.flatJson;
        return {
            locale: t,
            fallbackLocale: r,
            messages: R,
            flatJson: W,
            datetimeFormats: V,
            numberFormats: X,
            missing: n,
            missingWarn: s,
            fallbackWarn: o,
            fallbackRoot: l,
            fallbackFormat: u,
            modifiers: f,
            pluralRules: h,
            postTranslation: g,
            warnHtmlMessage: _,
            escapeParameter: E,
            messageResolver: e.messageResolver,
            inheritLocale: $,
            __i18n: M,
            __root: U,
            __injectWithOption: C
        }
    }

    function ch(e = {}, t) {
        {
            const r = Mp(Wee(e)),
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
                        if (!ye(o)) throw Gt(Mt.INVALID_ARGUMENT);
                        const _ = o;
                        return ye(l) ? f.locale = l : _t(l) ? h = l : Ue(l) && (g = l), _t(u) ? h = u : Ue(u) && (g = u), Reflect.apply(r.t, r, [_, h || g || {}, f])
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
                        if (!ye(o)) throw Gt(Mt.INVALID_ARGUMENT);
                        const _ = o;
                        return ye(l) ? f.locale = l : Ut(l) ? f.plural = l : _t(l) ? h = l : Ue(l) && (g = l), ye(u) ? f.locale = u : _t(u) ? h = u : Ue(u) && (g = u), Reflect.apply(r.t, r, [_, h || g || {}, f])
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
    const Fp = {
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

    function Hee({
        slots: e
    }, t) {
        return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((n, s) => n = [...n, ..._t(s.children) ? s.children : [s]], []) : t.reduce((r, n) => {
            const s = e[n];
            return s && (r[n] = s()), r
        }, {})
    }

    function bw(e) {
        return ze
    }
    const Fb = {
        name: "i18n-t",
        props: tr({
            keypath: {
                type: String,
                required: !0
            },
            plural: {
                type: [Number, String],
                validator: e => Ut(e) || !isNaN(e)
            }
        }, Fp),
        setup(e, t) {
            const {
                slots: r,
                attrs: n
            } = t, s = e.i18n || Bp({
                useScope: e.scope,
                __useComponent: !0
            });
            return () => {
                const o = Object.keys(r).filter(_ => _ !== "_"),
                    l = {};
                e.locale && (l.locale = e.locale), e.plural !== void 0 && (l.plural = ye(e.plural) ? +e.plural : e.plural);
                const u = Hee(t, o),
                    f = s[sh](e.keypath, u, l),
                    h = tr({}, n),
                    g = ye(e.tag) || bt(e.tag) ? e.tag : bw();
                return Rh(g, h, f)
            }
        }
    };

    function Kee(e) {
        return _t(e) && !ye(e[0])
    }

    function Ew(e, t, r, n) {
        const {
            slots: s,
            attrs: o
        } = t;
        return () => {
            const l = {
                part: !0
            };
            let u = {};
            e.locale && (l.locale = e.locale), ye(e.format) ? l.key = e.format : bt(e.format) && (ye(e.format.key) && (l.key = e.format.key), u = Object.keys(e.format).reduce((E, $) => r.includes($) ? tr({}, E, {
                [$]: e.format[$]
            }) : E, {}));
            const f = n(e.value, l, u);
            let h = [l.key];
            _t(f) ? h = f.map((E, $) => {
                const R = s[E.type],
                    M = R ? R({
                        [E.type]: E.value,
                        index: $,
                        parts: f
                    }) : [E.value];
                return Kee(M) && (M[0].key = `${E.type}-${$}`), M
            }) : ye(f) && (h = [f]);
            const g = tr({}, o),
                _ = ye(e.tag) || bt(e.tag) ? e.tag : bw();
            return Rh(_, g, h)
        }
    }
    const Bb = {
            name: "i18n-n",
            props: tr({
                value: {
                    type: Number,
                    required: !0
                },
                format: {
                    type: [String, Object]
                }
            }, Fp),
            setup(e, t) {
                const r = e.i18n || Bp({
                    useScope: "parent",
                    __useComponent: !0
                });
                return Ew(e, t, gw, (...n) => r[oh](...n))
            }
        },
        Ub = {
            name: "i18n-d",
            props: tr({
                value: {
                    type: [Number, Date],
                    required: !0
                },
                format: {
                    type: [String, Object]
                }
            }, Fp),
            setup(e, t) {
                const r = e.i18n || Bp({
                    useScope: "parent",
                    __useComponent: !0
                });
                return Ew(e, t, pw, (...n) => r[ah](...n))
            }
        };

    function Vee(e, t) {
        const r = e;
        if (e.mode === "composition") return r.__getInstance(t) || e.global; {
            const n = r.__getInstance(t);
            return n != null ? n.__composer : e.global.__composer
        }
    }

    function qee(e) {
        const t = l => {
            const {
                instance: u,
                modifiers: f,
                value: h
            } = l;
            if (!u || !u.$) throw Gt(Mt.UNEXPECTED_ERROR);
            const g = Vee(e, u.$),
                _ = jb(h);
            return [Reflect.apply(g.t, g, [...Gb(_)]), g]
        };
        return {
            created: (l, u) => {
                const [f, h] = t(u);
                eh && e.global === h && (l.__i18nWatcher = Zi(h.locale, () => {
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
                        h = jb(u);
                    l.textContent = Reflect.apply(f.t, f, [...Gb(h)])
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

    function jb(e) {
        if (ye(e)) return {
            path: e
        };
        if (Ue(e)) {
            if (!("path" in e)) throw Gt(Mt.REQUIRED_VALUE, "path");
            return e
        } else throw Gt(Mt.INVALID_VALUE)
    }

    function Gb(e) {
        const {
            path: t,
            locale: r,
            args: n,
            choice: s,
            plural: o
        } = e, l = {}, u = n || {};
        return ye(r) && (l.locale = r), Ut(s) && (l.plural = s), Ut(o) && (l.plural = o), [t, u, l]
    }

    function Yee(e, t, ...r) {
        const n = Ue(r[0]) ? r[0] : {},
            s = !!n.useI18nComponentName;
        (Je(n.globalInstall) ? n.globalInstall : !0) && (e.component(s ? "i18n" : Fb.name, Fb), e.component(Bb.name, Bb), e.component(Ub.name, Ub)), e.directive("t", qee(t))
    }

    function zee(e, t, r) {
        return {
            beforeCreate() {
                const n = as();
                if (!n) throw Gt(Mt.UNEXPECTED_ERROR);
                const s = this.$options;
                if (s.i18n) {
                    const o = s.i18n;
                    s.__i18n && (o.__i18n = s.__i18n), o.__root = t, this === this.$root ? this.$i18n = Wb(e, o) : (o.__injectWithOption = !0, this.$i18n = ch(o))
                } else s.__i18n ? this === this.$root ? this.$i18n = Wb(e, s) : this.$i18n = ch({
                    __i18n: s.__i18n,
                    __injectWithOption: !0,
                    __root: t
                }) : this.$i18n = e;
                s.__i18nGlobal && _w(t, s, s), e.__onComponentInstanceCreated(this.$i18n), r.__setInstance(n, this.$i18n), this.$t = (...o) => this.$i18n.t(...o), this.$rt = (...o) => this.$i18n.rt(...o), this.$tc = (...o) => this.$i18n.tc(...o), this.$te = (o, l) => this.$i18n.te(o, l), this.$d = (...o) => this.$i18n.d(...o), this.$n = (...o) => this.$i18n.n(...o), this.$tm = o => this.$i18n.tm(o)
            },
            mounted() {},
            unmounted() {
                const n = as();
                if (!n) throw Gt(Mt.UNEXPECTED_ERROR);
                delete this.$t, delete this.$rt, delete this.$tc, delete this.$te, delete this.$d, delete this.$n, delete this.$tm, r.__deleteInstance(n), delete this.$i18n
            }
        }
    }

    function Wb(e, t) {
        e.locale = t.locale || e.locale, e.fallbackLocale = t.fallbackLocale || e.fallbackLocale, e.missing = t.missing || e.missing, e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn, e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn, e.formatFallbackMessages = t.formatFallbackMessages || e.formatFallbackMessages, e.postTranslation = t.postTranslation || e.postTranslation, e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage, e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml, e.sync = t.sync || e.sync, e.__composer[vw](t.pluralizationRules || e.pluralizationRules);
        const r = Jc(e.locale, {
            messages: t.messages,
            __i18n: t.__i18n
        });
        return Object.keys(r).forEach(n => e.mergeLocaleMessage(n, r[n])), t.datetimeFormats && Object.keys(t.datetimeFormats).forEach(n => e.mergeDateTimeFormat(n, t.datetimeFormats[n])), t.numberFormats && Object.keys(t.numberFormats).forEach(n => e.mergeNumberFormat(n, t.numberFormats[n])), e
    }
    const Xee = Si("global-vue-i18n");

    function Jee(e = {}, t) {
        const r = Je(e.legacy) ? e.legacy : !0,
            n = Je(e.globalInjection) ? e.globalInjection : !0,
            s = r ? !!e.allowComposition : !0,
            o = new Map,
            [l, u] = Qee(e, r),
            f = Si("");

        function h(E) {
            return o.get(E) || null
        }

        function g(E, $) {
            o.set(E, $)
        }

        function _(E) {
            o.delete(E)
        } {
            const E = {
                get mode() {
                    return r ? "legacy" : "composition"
                },
                get allowComposition() {
                    return s
                },
                async install($, ...R) {
                    $.__VUE_I18N_SYMBOL__ = f, $.provide($.__VUE_I18N_SYMBOL__, E), !r && n && ote($, E.global), Yee($, E, ...R), r && $.mixin(zee(u, u.__composer, E));
                    const M = $.unmount;
                    $.unmount = () => {
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
                __deleteInstance: _
            };
            return E
        }
    }

    function Bp(e = {}) {
        const t = as();
        if (t == null) throw Gt(Mt.MUST_BE_CALL_SETUP_TOP);
        if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__) throw Gt(Mt.NOT_INSLALLED);
        const r = Zee(t),
            n = tte(r),
            s = Gee(t),
            o = ete(e, s);
        if (r.mode === "legacy" && !e.__useComponent) {
            if (!r.allowComposition) throw Gt(Mt.NOT_AVAILABLE_IN_LEGACY_MODE);
            return ite(t, o, n, e)
        }
        if (o === "global") return _w(n, e, s), n;
        if (o === "parent") {
            let f = rte(r, t, e.__useComponent);
            return f == null && (f = n), f
        }
        const l = r;
        let u = l.__getInstance(t);
        if (u == null) {
            const f = tr({}, e);
            "__i18n" in s && (f.__i18n = s.__i18n), n && (f.__root = n), u = Mp(f), nte(l, t), l.__setInstance(t, u)
        }
        return u
    }

    function Qee(e, t, r) {
        const n = gP(); {
            const s = t ? n.run(() => ch(e)) : n.run(() => Mp(e));
            if (s == null) throw Gt(Mt.UNEXPECTED_ERROR);
            return [n, s]
        }
    }

    function Zee(e) {
        {
            const t = Qi(e.isCE ? Xee : e.appContext.app.__VUE_I18N_SYMBOL__);
            if (!t) throw Gt(e.isCE ? Mt.NOT_INSLALLED_WITH_PROVIDE : Mt.UNEXPECTED_ERROR);
            return t
        }
    }

    function ete(e, t) {
        return Yc(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local"
    }

    function tte(e) {
        return e.mode === "composition" ? e.global : e.global.__composer
    }

    function rte(e, t, r = !1) {
        let n = null;
        const s = t.root;
        let o = t.parent;
        for (; o != null;) {
            const l = e;
            if (e.mode === "composition") n = l.__getInstance(o);
            else {
                const u = l.__getInstance(o);
                u != null && (n = u.__composer, r && n && !n[yw] && (n = null))
            }
            if (n != null || s === o) break;
            o = o.parent
        }
        return n
    }

    function nte(e, t, r) {
        Oh(() => {}, t), wh(() => {
            e.__deleteInstance(t)
        }, t)
    }

    function ite(e, t, r, n = {}) {
        const s = t === "local",
            o = WP(null);
        if (s && e.proxy && !(e.proxy.$options.i18n || e.proxy.$options.__i18n)) throw Gt(Mt.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
        const l = Je(n.inheritLocale) ? n.inheritLocale : !0,
            u = on(s && l ? r.locale.value : ye(n.locale) ? n.locale : To),
            f = on(s && l ? r.fallbackLocale.value : ye(n.fallbackLocale) || _t(n.fallbackLocale) || Ue(n.fallbackLocale) || n.fallbackLocale === !1 ? n.fallbackLocale : u.value),
            h = on(Jc(u.value, n)),
            g = on(Ue(n.datetimeFormats) ? n.datetimeFormats : {
                [u.value]: {}
            }),
            _ = on(Ue(n.numberFormats) ? n.numberFormats : {
                [u.value]: {}
            }),
            E = s ? r.missingWarn : Je(n.missingWarn) || gi(n.missingWarn) ? n.missingWarn : !0,
            $ = s ? r.fallbackWarn : Je(n.fallbackWarn) || gi(n.fallbackWarn) ? n.fallbackWarn : !0,
            R = s ? r.fallbackRoot : Je(n.fallbackRoot) ? n.fallbackRoot : !0,
            M = !!n.fallbackFormat,
            U = Rt(n.missing) ? n.missing : null,
            C = Rt(n.postTranslation) ? n.postTranslation : null,
            V = s ? r.warnHtmlMessage : Je(n.warnHtmlMessage) ? n.warnHtmlMessage : !0,
            X = !!n.escapeParameter,
            W = s ? r.modifiers : Ue(n.modifiers) ? n.modifiers : {},
            j = n.pluralRules || s && r.pluralRules;

        function Q() {
            return [u.value, f.value, h.value, g.value, _.value]
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
            Ce = kr(() => _.value);

        function fe() {
            return o.value ? o.value.getPostTranslationHandler() : C
        }

        function $e(p) {
            o.value && o.value.setPostTranslationHandler(p)
        }

        function F() {
            return o.value ? o.value.getMissingHandler() : U
        }

        function ie(p) {
            o.value && o.value.setMissingHandler(p)
        }

        function de(p) {
            return Q(), p()
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

        function Cr(p, O) {
            o.value && (o.value.setLocaleMessage(p, O), h.value[p] = O)
        }

        function nr(p, O) {
            o.value && o.value.mergeLocaleMessage(p, O)
        }

        function vr(p) {
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

        function Ht(p, O) {
            o.value && o.value.mergeNumberFormat(p, O)
        }
        const xt = {
            get id() {
                return o.value ? o.value.id : -1
            },
            locale: oe,
            fallbackLocale: le,
            messages: ue,
            datetimeFormats: Ae,
            numberFormats: Ce,
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
                return o.value ? o.value.modifiers : W
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
                return o.value ? o.value.fallbackWarn : $
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
                return o.value ? o.value.escapeParameter : X
            },
            set escapeParameter(p) {
                o.value && (o.value.escapeParameter = p)
            },
            t: be,
            getPostTranslationHandler: fe,
            setPostTranslationHandler: $e,
            getMissingHandler: F,
            setMissingHandler: ie,
            rt: ve,
            d: Oe,
            n: Fe,
            tm: Ge,
            te: tt,
            getLocaleMessage: It,
            setLocaleMessage: Cr,
            mergeLocaleMessage: nr,
            getDateTimeFormat: vr,
            setDateTimeFormat: at,
            mergeDateTimeFormat: St,
            getNumberFormat: ot,
            setNumberFormat: kt,
            mergeNumberFormat: Ht
        };

        function m(p) {
            p.locale.value = u.value, p.fallbackLocale.value = f.value, Object.keys(h.value).forEach(O => {
                p.mergeLocaleMessage(O, h.value[O])
            }), Object.keys(g.value).forEach(O => {
                p.mergeDateTimeFormat(O, g.value[O])
            }), Object.keys(_.value).forEach(O => {
                p.mergeNumberFormat(O, _.value[O])
            }), p.escapeParameter = X, p.fallbackFormat = M, p.fallbackRoot = R, p.fallbackWarn = $, p.missingWarn = E, p.warnHtmlMessage = V
        }
        return CE(() => {
            if (e.proxy == null || e.proxy.$i18n == null) throw Gt(Mt.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
            const p = o.value = e.proxy.$i18n.__composer;
            t === "global" ? (u.value = p.locale.value, f.value = p.fallbackLocale.value, h.value = p.messages.value, g.value = p.datetimeFormats.value, _.value = p.numberFormats.value) : s && m(p)
        }), xt
    }
    const ste = ["locale", "fallbackLocale", "availableLocales"],
        ate = ["t", "rt", "d", "n", "tm"];

    function ote(e, t) {
        const r = Object.create(null);
        ste.forEach(n => {
            const s = Object.getOwnPropertyDescriptor(t, n);
            if (!s) throw Gt(Mt.UNEXPECTED_ERROR);
            const o = er(s.value) ? {
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
        }), e.config.globalProperties.$i18n = r, ate.forEach(n => {
            const s = Object.getOwnPropertyDescriptor(t, n);
            if (!s || !s.value) throw Gt(Mt.UNEXPECTED_ERROR);
            Object.defineProperty(e.config.globalProperties, `$${n}`, s)
        })
    }
    Pee(Dee);
    Ree(pee);
    Lee(ow);
    const lte = et({
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
        cte = "main/pp9/antique-freak/assets/c8afd972.svg",
        ute = {
            class: "constrain"
        },
        fte = {
            class: "text"
        },
        dte = {
            class: "subtext"
        },
        hte = {
            key: 0,
            class: "warning"
        },
        pte = {
            key: 1,
            class: "spinner"
        };

    function gte(e, t, r, n, s, o) {
        return G(), wn(Ec, {
            name: "toast-transition"
        }, {
            default: Sh(() => [e.isVisible && e.options ? (G(), Y("div", {
                key: 0,
                class: xe([e.options.type, "jbg toast"])
            }, [H("div", ute, [H("img", {
                class: "close",
                alt: "close",
                src: cte,
                onClick: t[0] || (t[0] = (...l) => e.hide && e.hide(...l)),
                onKeydown: t[1] || (t[1] = Tc((...l) => e.hide && e.hide(...l), ["esc"]))
            }, null, 32), H("p", fte, nt(e.options.text), 1), H("p", dte, nt(e.options.subtext), 1), e.options.warning ? (G(), Y("p", hte, nt(e.options.warning), 1)) : Se("", !0), e.options.type === "reconnecting" ? (G(), Y("div", pte)) : Se("", !0)])], 2)) : Se("", !0)]),
            _: 1
        })
    }
    const mte = ct(lte, [
            ["render", gte],
            ["__scopeId", "data-v-0a136edf"]
        ]),
        vte = {
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
                e.component("Toast", mte), e.config.globalProperties.$showToast = r, e.config.globalProperties.$hideToast = n, e.config.globalProperties.$registerToast = s
            }
        },
        yte = et({
            props: {
                options: Object,
                mainView: Object
            },
            setup() {
                return {
                    fatalError: Qi(_o.fatal.error)
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

    function _te(e, t, r, n, s, o) {
        const l = Xr("Fatal"),
            u = Xr("TextDescriptions"),
            f = Xr("Debug"),
            h = Xr("Modal"),
            g = Xr("Toast");
        return e.shouldShowFatal ? (G(), wn(l, {
            key: 0
        })) : (G(), Y(ze, {
            key: 1
        }, [$t(u), (G(), wn(Ch(e.mainView), co({
            id: "game",
            class: e.classes
        }, e.ecastValues), null, 16, ["class"])), $t(f), $t(h), $t(g)], 64))
    }
    const Hb = ct(yte, [
            ["render", _te]
        ]),
        bte = e => {
            let t;
            window.tv.register({
                connect: r => (t = new Or.WSClient(r), t.connect()),
                mount: r => {
                    var l, u, f, h;
                    Hb.name = r.app;
                    let n = NL(Hb, {
                        options: r,
                        mainView: e.MainView
                    });
                    r.client && (t = r.client);
                    let s;
                    (l = r.room) != null && l.locale && (s = r.room.locale), (f = (u = r.match) == null ? void 0 : u.params) != null && f.locale && (s = r.match.params.locale), Bs.set(s);
                    const o = Jee({
                        fallbackLocale: "en",
                        locale: Bs.locale,
                        messages: Bs.mergeMessages(PW, (h = e.messages) != null ? h : {})
                    });
                    if (n.use(PY), n.use(OZ), n.use(uX, {
                            replayer: r.replayer,
                            client: t,
                            room: r.room
                        }), n.use(A7, {
                            wsClient: t,
                            room: r.room,
                            welcome: r.welcome
                        }), n.use(wQ), n.use(o), n.use(tZ, {
                            i18n: o
                        }), n.use(AZ), n.use(NZ), n.use(vte), n.use(PZ), e.plugins) {
                        const g = _ => _.plugin === void 0;
                        e.plugins.forEach(_ => {
                            if (g(_)) {
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
        Ete = {
            AUDIENCE_THANKS: "Thanks!"
        },
        Tte = {
            INFO: "Fact {current}/{max}",
            PLACEHOLDER: "write here",
            WRITE_SOMETHING: "You need to write something!"
        },
        Ste = {
            AVATAR_SELECT_PROMPT: "Choose your accessory!",
            PRESENTATION_CHOICE_YES: "Manually Present",
            PRESENTATION_CHOICE_NO: "Auto-Present",
            PRESENTATION_MODE: "Presentation Mode:",
            PRESENTATION_PROMPT: "How does your group want to showcase their writing?",
            ON: "On",
            OFF: "Off"
        },
        Ote = {
            UP_NEXT: "Up next"
        },
        wte = {
            CHOOSING: Ete,
            FACT: Tte,
            LOBBY: Ste,
            RANKING: Ote
        },
        $te = {
            en: wte
        },
        Cte = et({
            props: {
                player: {
                    type: Object,
                    required: !0
                },
                haggleClose: {
                    type: Function,
                    required: !0
                },
                clickHaggleChoice: {
                    type: Function,
                    required: !0
                }
            }
        }),
        Ite = {
            class: "haggleOverlay"
        },
        Ate = {
            key: 0,
            class: "haggleDialog constrain"
        },
        Nte = {
            class: "prompt"
        },
        Pte = {
            class: "choices"
        },
        Rte = ["onClick"],
        Lte = {
            class: "text"
        };

    function kte(e, t, r, n, s, o) {
        const l = Dt("bb");
        return G(), Y("div", Ite, [e.player.haggle ? (G(), Y("div", Ate, [H("button", {
            class: "haggleClose",
            onClick: t[0] || (t[0] = zt((...u) => e.haggleClose && e.haggleClose(...u), ["prevent"]))
        }), Ie(H("div", Nte, null, 512), [
            [l, e.player.haggle.prompt]
        ]), H("div", Pte, [(G(!0), Y(ze, null, wr(e.player.haggle.choices, (u, f) => (G(), Y("button", {
            key: `haggle_${e.player.choiceId}_${f}`,
            class: "choice gold-button",
            onClick: h => e.clickHaggleChoice(h, f)
        }, [Ie(H("span", Lte, null, 512), [
            [l, u.text]
        ])], 8, Rte))), 128))])])) : Se("", !0)])
    }
    const xte = ct(Cte, [
            ["render", kte]
        ]),
        Dte = et({
            components: {
                HaggleDialog: xte
            },
            props: {
                audience: Boolean,
                info: Object,
                player: {
                    type: Object,
                    required: !0
                }
            },
            data() {
                return {
                    chosenIndex: -1,
                    isSubmitting: !1,
                    showHaggle: !1
                }
            },
            computed: {
                isShopping() {
                    return this.player.responseKey ? this.player.responseKey.startsWith("shopping") && this.player.choices.length === 3 : !1
                },
                isPresenting() {
                    return this.player.choices.length === 4
                },
                isPrePresenting() {
                    return this.player.choices.length === 2 && !this.player.choices[0].photo && !this.player.price
                }
            },
            watch: {
                "player.choiceId": "resetData"
            },
            methods: {
                getItemImage(e) {
                    var r;
                    if (!e) return "";
                    const t = (r = e.type) != null ? r : "png";
                    return `https://s3.amazonaws.com/static.jackboxgames.com/game-images/antique-game/${e.id}.${t}`
                },
                resetData() {
                    this.isSubmitting = !1, this.showHaggle = !1, this.chosenIndex = -1
                },
                clickChoice(e, t) {
                    if (e.target instanceof HTMLElement && e.target.blur(), this.player.choices[t].category === "haggle") {
                        this.showHaggle = !0;
                        return
                    }
                    this.chosenIndex = t, this.audience ? this.submitAudienceChoice(`${this.player.choices[this.chosenIndex].key}`) : this.submitPlayerChoice(this.player.choices[this.chosenIndex].key)
                },
                choiceCategoryIcon(e) {
                    return ["thumbsUp", "thumbsDown", "presentationModeOn", "presentationModeOff"].includes(e)
                },
                clickHaggleChoice(e, t) {
                    e.target instanceof HTMLElement && e.target.blur(), this.chosenIndex = t, this.showHaggle = !1, this.audience ? this.submitAudienceChoice(`${this.player.haggle.choices[this.chosenIndex].key}`) : this.submitPlayerChoice(this.player.haggle.choices[this.chosenIndex].key)
                },
                haggleClose() {
                    this.showHaggle = !1
                },
                async submitPlayerChoice(e) {
                    this.player.responseKey || console.error("Missing response entity for vote session");
                    try {
                        const t = {
                            action: "choose",
                            choice: e
                        };
                        await this.$ecast.updateObject(this.player.responseKey, t)
                    } catch (t) {
                        this.$handleEcastError(t), this.isSubmitting = !1, this.showHaggle = !1
                    }
                },
                async submitAudienceChoice(e) {
                    this.player.countGroupName || console.error("Missing count group name");
                    try {
                        const t = e.toString(),
                            r = this.player.countGroupName;
                        await this.$ecast.incrementCountGroupCounter(r, t)
                    } catch (t) {
                        if (t instanceof rs.EcastServerError && t.message.startsWith("no entity found")) return this.isSubmitting = !1, console.warn("unhandled ecast error: ", t);
                        this.$handleEcastError(t), this.isSubmitting = !1
                    }
                }
            }
        }),
        Mte = {
            class: "choosing scrollable"
        },
        Fte = ["disabled"],
        Bte = {
            class: "prompt-text"
        },
        Ute = H("div", {
            class: "hr"
        }, null, -1),
        jte = {
            key: 0,
            class: "prompt"
        },
        Gte = {
            class: "photo-banner"
        },
        Wte = ["alt", "src"],
        Hte = ["disabled", "onClick"],
        Kte = ["alt", "src"],
        Vte = {
            key: 1
        },
        qte = ["alt", "src"],
        Yte = {
            key: 2
        };

    function zte(e, t, r, n, s, o) {
        const l = Xr("HaggleDialog"),
            u = Dt("bb"),
            f = Dt("t");
        return G(), Y("div", Mte, [H("div", {
            class: xe(["constrain content", e.isShopping ? "shopping" : ""])
        }, [H("fieldset", {
            disabled: e.isSubmitting || e.chosenIndex !== -1
        }, [Ie(H("div", Bte, null, 512), [
            [u, e.player.prompt]
        ]), Ute, e.player.photo ? (G(), Y("div", jte, [H("div", Gte, [H("img", {
            class: "photo",
            alt: e.player.photo.alt,
            src: e.getItemImage(e.player.photo)
        }, null, 8, Wte)])])) : Se("", !0), e.player.price ? Ie((G(), Y("div", {
            key: 1,
            class: xe(["price-tag", e.player.price.category])
        }, null, 2)), [
            [u, e.player.price.text]
        ]) : Se("", !0), Ie(H("div", {
            class: xe(["choices", e.isPrePresenting && "pre-presenting"])
        }, [(G(!0), Y(ze, null, wr(e.player.choices, (h, g) => (G(), Y("button", {
            key: `choice_${e.player.choiceId}_${g}`,
            class: xe(["choice", [{
                chosen: e.chosenIndex === g,
                "photo-button": h.photo,
                "gold-button": !h.photo,
                selected: h.selected,
                disabled: h.disabled,
                "collection-banner": h.photo && Array.isArray(h.photo),
                "fact-button": !e.audience && e.isPresenting && g !== 3
            }, h.category]]),
            disabled: h.disabled,
            onClick: _ => e.clickChoice(_, g)
        }, [h.photo && !Array.isArray(h.photo) ? (G(), Y("img", {
            key: 0,
            class: "photo",
            alt: `${h.photo.alt}`,
            src: e.getItemImage(h.photo)
        }, null, 8, Kte)) : Se("", !0), h.photo && Array.isArray(h.photo) ? (G(), Y("span", Vte, [(G(!0), Y(ze, null, wr(h.photo, (_, E) => (G(), Y("img", {
            key: `photo_${g}_${E}`,
            class: "photo half",
            alt: `${_.alt}`,
            src: e.getItemImage(_)
        }, null, 8, qte))), 128))])) : Se("", !0), Ie(H("span", null, null, 512), [
            [u, h.text]
        ])], 10, Hte))), 128))], 2), [
            [VE, !(e.audience && e.chosenIndex !== -1)]
        ]), e.audience && e.chosenIndex !== -1 ? Ie((G(), Y("div", Yte, null, 512)), [
            [f, "CHOOSING.AUDIENCE_THANKS"]
        ]) : Se("", !0)], 8, Fte)], 2), e.showHaggle ? (G(), wn(l, {
            key: 0,
            player: e.player,
            "haggle-close": e.haggleClose,
            "click-haggle-choice": e.clickHaggleChoice
        }, null, 8, ["player", "haggle-close", "click-haggle-choice"])) : Se("", !0)])
    }
    const Xte = ct(Dte, [
            ["render", zte]
        ]),
        Jte = et({
            props: {
                info: {
                    type: Object,
                    required: !0
                },
                player: {
                    type: Object,
                    required: !0
                },
                writing: Boolean
            },
            data() {
                return {
                    answer: "",
                    autoSubmitter: null,
                    chosenIndex: null,
                    filterError: !1,
                    isSubmitting: !1,
                    validationError: ""
                }
            },
            computed: {
                hasPhoto() {
                    return this.player.photo && !Array.isArray(this.player.photo)
                },
                hasPhotos() {
                    return this.player.photo && Array.isArray(this.player.photo)
                },
                sanitizedAnswer() {
                    return this.answer ? Yt.sanitizeInput(this.answer).trim() : ""
                },
                remainingCharacters() {
                    return this.player.maxLength ? this.answer ? `${this.player.maxLength-this.answer.length}` : `${this.player.maxLength}` : ""
                },
                canSubmit() {
                    return !(!this.sanitizedAnswer || this.player.maxLength && this.sanitizedAnswer.length > this.player.maxLength)
                },
                inputPrompt() {
                    return this.writing && this.player.prompt ? this.player.prompt : this.chosenIndex === null || !this.player.choices || !this.player.choices[this.chosenIndex] ? "" : this.player.choices[this.chosenIndex].text
                },
                showInput() {
                    return !!(this.writing || this.chosenIndex !== null)
                }
            },
            watch: {
                "player.factIndex": function() {
                    this.answer = "", this.chosenIndex = null, this.isSubmitting = !1, this.resizeTextArea(this.$refs.textarea)
                }
            },
            mounted() {
                this.autoSubmitter = Ql.exports.throttle(this.autoSubmit.bind(this), 400), this.player.textKey && this.restoreText()
            },
            beforeUnmount() {
                var e;
                (e = this.autoSubmitter) == null || e.cancel()
            },
            methods: {
                getItemImage(e) {
                    if (!e) return "";
                    const t = e.type ? e.type : "png";
                    return `https://s3.amazonaws.com/static.jackboxgames.com/game-images/antique-game/${e.id}.${t}`
                },
                async restoreText() {
                    const e = await this.$ecast.getText(this.player.textKey);
                    this.answer = e.text
                },
                async autoSubmit() {
                    if (!this.isSubmitting) try {
                        await this.$ecast.updateText(this.player.textKey, this.sanitizedAnswer)
                    } catch (e) {
                        e instanceof rs.EcastFilterError || this.$handleEcastError(e), await this.$ecast.updateText(this.player.textKey, "")
                    }
                },
                onKeypress(e) {
                    e.key === "Enter" && this.onSubmit()
                },
                onInput(e) {
                    const t = e.target;
                    this.answer = Yt.sanitizeInput(t.value), this.filterError = !1, this.resizeTextArea(t), this.autoSubmitter && this.autoSubmitter()
                },
                resizeTextArea(e) {
                    if (e.style.height = "0", e.style.height = `${50}px`, this.answer) {
                        const r = this.$refs.textarea;
                        e.clientHeight < r.scrollHeight && (e.style.height = `${e.scrollHeight}px`)
                    }
                },
                async voteClicked(e, t) {
                    t !== null && (this.chosenIndex = t), this.player.responseKey && await this.$ecast.updateObject(this.player.responseKey, {
                        choiceIndex: this.chosenIndex
                    })
                },
                async onSubmit() {
                    var e;
                    if (!this.isSubmitting) {
                        if (this.isSubmitting = !0, (e = this.autoSubmitter) == null || e.cancel(), !this.sanitizedAnswer || this.sanitizedAnswer.length === 0) {
                            this.validationError = this.$t("FACT.WRITE_SOMETHING"), this.isSubmitting = !1;
                            return
                        }
                        try {
                            await this.$ecast.updateText(this.player.textKey, this.sanitizedAnswer), this.filterError = !1, await this.$ecast.lock(this.player.textKey), this.player.responseKey && !this.writing && await this.$ecast.updateObject(this.player.responseKey, {
                                choiceIndex: this.chosenIndex
                            })
                        } catch (t) {
                            this.isSubmitting = !1, this.$handleEcastError(t), this.filterError = !0, setTimeout(() => {
                                this.$refs.textarea instanceof HTMLTextAreaElement && this.$refs.textarea.focus()
                            }, 0)
                        }
                    }
                }
            }
        }),
        Qte = {
            class: "fact-view scrollable"
        },
        Zte = {
            class: "constrain content"
        },
        ere = {
            for: "textinput"
        },
        tre = {
            class: "prompt"
        },
        rre = {
            class: "input-container"
        },
        nre = ["textContent"],
        ire = ["maxlength", "placeholder"],
        sre = {
            key: 1,
            class: "prompt"
        },
        are = {
            class: "photo-banner"
        },
        ore = ["alt", "src"],
        lre = {
            key: 2,
            class: "prompt"
        },
        cre = {
            class: "photoBanner"
        },
        ure = ["alt", "src"],
        fre = {
            key: 3,
            class: "inputLine"
        },
        dre = ["disabled"],
        hre = {
            key: 4
        },
        pre = {
            class: "choices"
        },
        gre = ["disabled", "onClick"],
        mre = {
            class: "text"
        },
        vre = {
            key: 5,
            class: "fact-info"
        };

    function yre(e, t, r, n, s, o) {
        const l = Dt("bb");
        return G(), Y("div", Qte, [H("div", Zte, [H("form", {
            autocomplete: "off",
            onSubmit: t[3] || (t[3] = zt((...u) => e.onSubmit && e.onSubmit(...u), ["prevent"]))
        }, [e.showInput ? Se("", !0) : Ie((G(), Y("div", {
            key: 0,
            class: xe(["prompt", !e.writing && "item-title"])
        }, null, 2)), [
            [l, e.player.prompt]
        ]), H("label", ere, [Ie(H("div", tre, null, 512), [
            [l, e.inputPrompt]
        ])]), Ie(H("div", rre, [H("div", {
            class: xe(["character-count", {
                "too-long": e.player.maxLength - e.sanitizedAnswer.length < 0
            }]),
            textContent: nt(e.remainingCharacters)
        }, null, 10, nre), Ie(H("textarea", {
            id: "textinput",
            ref: "textarea",
            "onUpdate:modelValue": t[0] || (t[0] = u => e.answer = u),
            enterkeyhint: "done",
            autocapitalize: "off",
            maxlength: e.player.maxLength,
            placeholder: e.$t("FACT.PLACEHOLDER"),
            rows: "1",
            onInput: t[1] || (t[1] = (...u) => e.onInput && e.onInput(...u)),
            onKeydown: t[2] || (t[2] = Tc(zt((...u) => e.onSubmit && e.onSubmit(...u), ["prevent"]), ["enter"]))
        }, null, 40, ire), [
            [_d, e.answer]
        ])], 512), [
            [VE, e.showInput]
        ]), e.hasPhoto ? (G(), Y("div", sre, [H("div", are, [H("img", {
            class: "photo",
            alt: `${e.player.photo.alt}`,
            src: e.getItemImage(e.player.photo)
        }, null, 8, ore)])])) : Se("", !0), e.hasPhotos ? (G(), Y("div", lre, [H("div", cre, [(G(!0), Y(ze, null, wr(e.player.photo, (u, f) => (G(), Y("img", {
            key: `photo_${e.player.choiceId}_${f}`,
            class: "photo half",
            alt: u.alt,
            src: e.getItemImage(u)
        }, null, 8, ure))), 128))])])) : Se("", !0), e.showInput ? (G(), Y("div", fre, [H("button", {
            class: "submit gold-button",
            type: "submit",
            value: "Submit",
            disabled: !e.canSubmit
        }, nt(e.$t("ACTION.SUBMIT")), 9, dre)])) : (G(), Y("div", hre, [H("div", pre, [(G(!0), Y(ze, null, wr(e.player.choices, (u, f) => (G(), Y("button", {
            key: `choice_${e.player.choiceId}_${f}`,
            class: xe(["choice gold-button", {
                chosen: e.chosenIndex === f,
                selected: u.selected,
                disabled: u.disabled
            }]),
            disabled: u.disabled,
            onClick: zt(h => e.voteClicked(h, f), ["prevent"])
        }, [Ie(H("span", mre, null, 512), [
            [l, u.text]
        ])], 10, gre))), 128))])])), e.writing && !!e.player.factIndex ? (G(), Y("div", vre, nt(e.$t("FACT.INFO", {
            current: e.player.factIndex + 1,
            max: e.player.factCount
        })), 1)) : Se("", !0)], 32)])])
    }
    const _re = ct(Jte, [
            ["render", yre]
        ]),
        bre = et({
            name: "Switch",
            props: {
                checked: {
                    type: Boolean,
                    required: !0
                }
            }
        }),
        Ere = e => (oo("data-v-e61fc9b8"), e = e(), lo(), e),
        Tre = {
            id: "toggleMode",
            class: "switchContainer"
        },
        Sre = ["checked"],
        Ore = Ere(() => H("span", {
            class: "switch"
        }, null, -1));

    function wre(e, t, r, n, s, o) {
        return G(), Y("label", Tre, [H("input", co(e.$attrs, {
            class: "input",
            type: "checkbox",
            checked: e.checked,
            onChange: t[0] || (t[0] = l => e.$emit("update:checked", l.target.checked))
        }), null, 16, Sre), Ore])
    }
    const $re = ct(bre, [
            ["render", wre],
            ["__scopeId", "data-v-e61fc9b8"]
        ]),
        Cre = et({
            components: {
                LobbyActions: SS,
                Switch: $re
            },
            props: {
                info: Object,
                player: {
                    type: Object,
                    required: !0
                }
            },
            data() {
                return {
                    activeIndex: -1
                }
            },
            watch: {
                "player.avatars": "avatarsUpdated"
            },
            methods: {
                avatarsUpdated() {
                    this.activeIndex = -1
                },
                async onAvatarClick(e, t) {
                    if (!this.player || !this.player.responseKey || t === this.activeIndex) return;
                    const r = this.player.avatars[t];
                    this.activeIndex = t, await this.$ecast.updateObject(this.player.responseKey, {
                        avatarName: r.name
                    })
                },
                async onModeClick(e) {
                    !this.player || !this.player.responseKey || await this.$ecast.updateObject(this.player.responseKey, {
                        presentationModeOn: e
                    })
                },
                async onModeToggle() {
                    !this.player || !this.player.responseKey || await this.$ecast.updateObject(this.player.responseKey, {
                        presentationModeOn: !this.player.presentationModeOn
                    })
                }
            }
        }),
        Ire = {
            class: "lobby scrollable"
        },
        Are = {
            class: "constrain content"
        },
        Nre = {
            class: "prompt"
        },
        Pre = H("div", {
            class: "hr"
        }, null, -1),
        Rre = {
            class: "mode-choice"
        },
        Lre = {
            class: "avatar-prompt prompt"
        },
        kre = H("div", {
            class: "hr"
        }, null, -1),
        xre = {
            class: "avatars"
        },
        Dre = ["aria-label", "disabled", "onClick"],
        Mre = {
            key: 0,
            class: "toggle-action"
        },
        Fre = {
            class: "current-mode"
        },
        Bre = {
            for: "toggleMode"
        },
        Ure = {
            key: 0
        },
        jre = {
            key: 1
        };

    function Gre(e, t, r, n, s, o) {
        var h, g, _, E;
        const l = Xr("Switch"),
            u = Xr("LobbyActions"),
            f = Dt("t");
        return G(), Y("div", Ire, [H("div", Are, [e.player && e.player.canChooseMode && e.player.presentationModeOn === void 0 ? (G(), Y(ze, {
            key: 0
        }, [H("div", Nre, nt(e.$t("LOBBY.PRESENTATION_PROMPT")), 1), Pre, H("div", Rre, [H("button", {
            class: "gold-button modeButton",
            onClick: t[0] || (t[0] = zt($ => e.onModeClick(!1), ["prevent"]))
        }, nt(e.$t("LOBBY.PRESENTATION_CHOICE_NO")), 1), H("button", {
            class: "gold-button modeButton manual",
            onClick: t[1] || (t[1] = zt($ => e.onModeClick(!0), ["prevent"]))
        }, nt(e.$t("LOBBY.PRESENTATION_CHOICE_YES")), 1)])], 64)) : e.info && !e.info.avatarName ? (G(), Y(ze, {
            key: 1
        }, [Ie(H("div", Lre, null, 512), [
            [f, "LOBBY.AVATAR_SELECT_PROMPT"]
        ]), kre, H("div", xre, [(G(!0), Y(ze, null, wr(e.player.avatars, ($, R) => (G(), Y("div", {
            key: $.name,
            class: "avatarContainer"
        }, [H("button", {
            "aria-label": $.alt,
            disabled: !$.available || e.info.avatarName === $.name,
            class: xe(["avatar", `avatar_${$.name}`, {
                active: parseInt(R) === e.activeIndex,
                chosen: !$.available,
                selected: e.info && $.available && e.info.avatarName === $.name
            }]),
            onClick: zt(M => e.onAvatarClick(M, parseInt(R)), ["prevent"])
        }, null, 10, Dre)]))), 128))])], 64)) : (G(), Y(ze, {
            key: 2
        }, [e.player.canChooseMode ? (G(), Y("div", Mre, [H("div", Fre, [Ie(H("label", Bre, null, 512), [
            [f, "LOBBY.PRESENTATION_MODE"]
        ]), (h = e.player) != null && h.presentationModeOn ? (G(), Y("span", Ure, nt(e.$t("LOBBY.ON")), 1)) : (G(), Y("span", jre, nt(e.$t("LOBBY.OFF")), 1))]), H("div", {
            class: xe(["modeIcon", {
                manual: (g = e.player) == null ? void 0 : g.presentationModeOn
            }])
        }, null, 2), $t(l, {
            checked: (_ = e.player) == null ? void 0 : _.presentationModeOn,
            "onUpdate:checked": e.onModeToggle
        }, null, 8, ["checked", "onUpdate:checked"])])) : Se("", !0), H("div", {
            class: xe(["hr", (E = e.player) != null && E.canChooseMode ? "" : "top"])
        }, null, 2), $t(u, {
            player: e.player,
            classes: {
                message: "message",
                action: "action gold-button",
                status: "status"
            }
        }, null, 8, ["player"])], 64))])])
    }
    const Wre = ct(Cre, [
            ["render", Gre]
        ]),
        Hre = et({
            components: {
                GalleryLink: DH,
                PostGameActions: OS
            },
            props: {
                artifact: Object,
                player: {
                    type: Object,
                    required: !0
                }
            }
        }),
        Kre = e => (oo("data-v-422acc4f"), e = e(), lo(), e),
        Vre = {
            class: "post-game scrollable"
        },
        qre = {
            class: "constrain"
        },
        Yre = Kre(() => H("div", {
            class: "hr"
        }, null, -1));

    function zre(e, t, r, n, s, o) {
        const l = Xr("PostGameActions"),
            u = Xr("GalleryLink");
        return G(), Y("div", Vre, [H("div", qre, [$t(l, {
            player: e.player,
            classes: {
                message: "message",
                action: "action gold-button",
                status: "status"
            }
        }, null, 8, ["player"]), Yre, e.artifact ? (G(), wn(u, {
            key: 0,
            artifact: e.artifact
        }, null, 8, ["artifact"])) : Se("", !0)])])
    }
    const Xre = ct(Hre, [
            ["render", zre],
            ["__scopeId", "data-v-422acc4f"]
        ]),
        Jre = et({
            props: {
                audience: Boolean,
                info: {
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
                    doneChoosing: !1,
                    isSubmitting: !1,
                    questionsDone: !1,
                    questionIndex: 0,
                    responses: []
                }
            },
            computed: {
                currentQuestion() {
                    return this.player.questions[this.questionIndex]
                },
                nextPhotos() {
                    return this.questionIndex >= this.player.questions.length - 1 ? null : this.player.questions[this.questionIndex + 1].choices
                }
            },
            watch: {
                "player.choiceId": "resetData"
            },
            methods: {
                getItemImage(e) {
                    if (!e) return "";
                    const t = e.type ? e.type : "png";
                    return `https://s3.amazonaws.com/static.jackboxgames.com/game-images/antique-game/${e.id}.${t}`
                },
                resetData() {
                    this.isSubmitting = !1, this.questionIndex = 0, this.responses = []
                },
                clickChoice(e, t) {
                    e.target instanceof HTMLElement && e.target.blur(), this.audience ? this.submitAudienceChoice(t) : this.submitPlayerChoice(t)
                },
                async submitPlayerChoice(e) {
                    this.player.responseKey || console.error("Missing response entity for vote session");
                    const t = this.player.questions[this.questionIndex].choices[e].key;
                    this.responses.push(t);
                    const r = this.responses.length === this.player.questions.length;
                    try {
                        const n = {
                            done: r,
                            choices: this.responses
                        };
                        await this.$ecast.updateObject(this.player.responseKey, n), this.questionIndex === this.player.questions.length - 1 ? this.questionsDone = !0 : this.questionIndex += 1
                    } catch (n) {
                        this.$handleEcastError(n), this.isSubmitting = !1
                    }
                },
                async submitAudienceChoice(e) {
                    this.player.questions[this.questionIndex].countGroupName || console.error("Missing count group name");
                    try {
                        const t = this.player.questions[this.questionIndex].choices[e].countGroupKey,
                            r = this.player.questions[this.questionIndex].countGroupName;
                        await this.$ecast.incrementCountGroupCounter(r, t), this.questionIndex += 1, this.questionIndex >= this.player.questions.length && (this.questionsDone = !0)
                    } catch (t) {
                        this.$handleEcastError(t), this.isSubmitting = !1
                    }
                }
            }
        }),
        Qre = {
            class: "ranking scrollable"
        },
        Zre = {
            class: "constrain content"
        },
        ene = {
            class: "prompt"
        },
        tne = {
            key: 0
        },
        rne = ["disabled"],
        nne = {
            key: 0
        },
        ine = {
            class: "prompt"
        },
        sne = H("div", {
            class: "hr"
        }, null, -1),
        ane = {
            class: "choices"
        },
        one = ["disabled", "aria-labelledby", "onClick"],
        lne = ["alt", "src"],
        cne = ["id"],
        une = {
            key: 0,
            class: "up-next"
        },
        fne = {
            class: "up-next-header"
        },
        dne = ["alt", "src"],
        hne = {
            key: 0,
            class: "footer"
        },
        pne = {
            class: "constrain"
        };

    function gne(e, t, r, n, s, o) {
        const l = Dt("bb"),
            u = Dt("t");
        return G(), Y("div", Qre, [H("div", Zre, [Ie(H("div", ene, null, 512), [
            [l, e.player.prompt]
        ]), e.audience && e.questionsDone ? Ie((G(), Y("div", tne, null, 512)), [
            [u, "CHOOSING.AUDIENCE_THANKS"]
        ]) : Se("", !0), H("fieldset", {
            disabled: e.isSubmitting || e.questionsDone
        }, [e.currentQuestion ? (G(), Y("div", nne, [Ie(H("div", ine, null, 512), [
            [l, e.currentQuestion.prompt]
        ]), sne, H("div", ane, [(G(!0), Y(ze, null, wr(e.currentQuestion.choices, (f, h) => (G(), Y("div", {
            key: `choice_${e.currentQuestion.choiceId}_${h}`,
            class: "choice"
        }, [H("button", {
            class: xe({
                "photo-button": f.photo,
                selected: f.selected,
                disabled: f.disabled
            }),
            disabled: f.disabled,
            "aria-labelledby": `title_${e.questionIndex}_${h}`,
            onClick: g => e.clickChoice(g, h)
        }, [f.photo ? (G(), Y("img", {
            key: 0,
            class: "photo",
            alt: f.photo.alt,
            src: e.getItemImage(f.photo)
        }, null, 8, lne)) : Se("", !0)], 10, one), Ie(H("span", {
            id: `title_${e.questionIndex}_${h}`,
            class: "text"
        }, null, 8, cne), [
            [l, f.text]
        ])]))), 128))]), e.nextPhotos ? (G(), Y("div", une, [H("div", fne, [Ie(H("span", null, null, 512), [
            [u, "RANKING.UP_NEXT"]
        ])]), (G(!0), Y(ze, null, wr(e.nextPhotos, (f, h) => (G(), Y("div", {
            key: `choice_${h}`,
            class: "choice photo-banner half"
        }, [f.photo ? (G(), Y("img", {
            key: 0,
            class: "photo",
            alt: f.photo.alt,
            src: e.getItemImage(f.photo)
        }, null, 8, dne)) : Se("", !0)]))), 128))])) : Se("", !0)])) : Se("", !0)], 8, rne)]), e.player.footer ? (G(), Y("div", hne, [H("div", pne, [Ie(H("span", null, null, 512), [
            [l, e.player.footer]
        ])])])) : Se("", !0)])
    }
    const mne = ct(Jre, [
            ["render", gne]
        ]),
        vne = et({
            extends: wS,
            props: {
                artifact: Object,
                audience: Boolean,
                player: {
                    type: Object,
                    required: !0
                }
            },
            data() {
                return {
                    flyBuzzing: !1,
                    bumpLogo: !1
                }
            },
            computed: {
                hasPhoto() {
                    return this.player.photo && !Array.isArray(this.player.photo)
                },
                hasPhotos() {
                    return this.player.photo && Array.isArray(this.player.photo)
                }
            },
            methods: {
                buzzFly() {
                    this.flyBuzzing || (this.flyBuzzing = !0, this.bumpLogo = !0, setTimeout(() => {
                        this.flyBuzzing = !1, this.bumpLogo = !1
                    }, 2e3))
                },
                getPromptClass() {
                    return this.player.price ? this.player.price.category ? this.player.price.category : "empty" : ""
                },
                getItemImage(e) {
                    if (!e) return "";
                    const t = e.type ? e.type : "png";
                    return `https://s3.amazonaws.com/static.jackboxgames.com/game-images/antique-game/${e.id}.${t}`
                }
            }
        }),
        yne = "main/pp9/antique-freak/assets/d288368c.svg",
        _ne = "main/pp9/antique-freak/assets/0808df59.png",
        bne = "main/pp9/antique-freak/assets/2be78b61.png",
        Ene = {
            class: "waiting scrollable"
        },
        Tne = {
            class: "constrain content"
        },
        Sne = {
            key: 1,
            class: "hr"
        },
        One = {
            key: 2,
            class: "prompt"
        },
        wne = {
            class: "photo-banner"
        },
        $ne = ["alt", "src"],
        Cne = {
            key: 3,
            class: "prompt"
        },
        Ine = {
            class: "collection-banner"
        },
        Ane = ["alt", "src"],
        Nne = {
            key: 0,
            src: _ne,
            class: "logo-fly buzz",
            alt: "The fly is hovering!"
        },
        Pne = {
            key: 1,
            src: bne,
            class: "logo-fly",
            alt: "A fly, minding its business."
        };

    function Rne(e, t, r, n, s, o) {
        const l = Dt("bb");
        return G(), Y("div", Ene, [H("div", Tne, [e.player.message ? Ie((G(), Y("p", {
            key: 0,
            class: xe(["prompt", e.getPromptClass()])
        }, null, 2)), [
            [l, e.player.message]
        ]) : Se("", !0), e.hasPhoto ? (G(), Y("div", Sne)) : Se("", !0), e.hasPhoto ? (G(), Y("div", One, [H("div", wne, [H("img", {
            class: "photo",
            alt: e.player.photo.alt,
            src: e.getItemImage(e.player.photo)
        }, null, 8, $ne)])])) : Se("", !0), e.hasPhotos ? (G(), Y("div", Cne, [H("div", Ine, [(G(!0), Y(ze, null, wr(e.player.photo, (u, f) => (G(), Y("img", {
            key: `photo_${e.player.choiceId}_${f}`,
            class: "photo half",
            alt: u.alt,
            src: e.getItemImage(u)
        }, null, 8, Ane))), 128))])])) : Se("", !0), e.player.price ? Ie((G(), Y("div", {
            key: 4,
            class: xe(`${e.player.price.category} price-tag`)
        }, null, 2)), [
            [l, e.player.price.text]
        ]) : Se("", !0), e.player.photo ? Se("", !0) : (G(), Y("div", {
            key: 5,
            class: "logo-interactive",
            tabIndex: "0",
            onClick: t[0] || (t[0] = (...u) => e.buzzFly && e.buzzFly(...u)),
            onKeypress: t[1] || (t[1] = Tc((...u) => e.buzzFly && e.buzzFly(...u), ["enter"]))
        }, [H("img", {
            src: yne,
            class: xe(["logo-body", e.bumpLogo && "bump"]),
            alt: "The word 'Junktopia'. The 'K' wears a wizard hat. The 'i' is dotted with a fly."
        }, null, 2), e.flyBuzzing ? (G(), Y("img", Nne)) : (G(), Y("img", Pne))], 32))])])
    }
    const Lne = ct(vne, [
            ["render", Rne]
        ]),
        kne = et({
            bb: {
                blank: (e, t, r) => '<span class="blank">___</span>',
                fact: {
                    generator: (e, t) => `<span class="fact">${t}</span>`,
                    options: {
                        noNesting: !0
                    }
                },
                failure: (e, t, r) => `<div class="${r.line?`${r.line} failure`:"failure"}">${t}</div>`,
                line: (e, t, r) => `<div class="${r.line?`${r.line} line`:"line"}">${t}</div>`,
                price: (e, t, r) => `<div class="price ${r.line?`${r.line} price`:"price"}">${t}</div>`,
                success: (e, t, r) => `<div class="${r.line?`${r.line} success`:"success"}">${t}</div>`,
                title: {
                    generator: (e, t) => `<span class="title">${t}</span>`,
                    options: {
                        noNesting: !0
                    }
                }
            },
            themeColor: "#dbd182",
            components: {
                Choosing: Xte,
                Fact: _re,
                Lobby: Wre,
                PostGame: Xre,
                Ranking: mne,
                Waiting: Lne
            },
            ecastKeys: {
                audience: "audiencePlayer",
                info: ({
                    id: e
                }) => `info:${e}`,
                player: ({
                    id: e
                }) => `player:${e}`,
                timer: "timer"
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
                player: Object
            },
            data() {
                return {
                    windowHeight: 1920
                }
            },
            computed: {
                isReady() {
                    return !(!this.player && !this.audience || this.player && !this.info)
                },
                screen() {
                    if (this.audience) switch (this.audience.kind) {
                        case "choosing":
                            return ["Choosing", {
                                player: this.audience,
                                audience: !0
                            }];
                        case "ranking":
                            return ["Ranking", {
                                player: this.audience,
                                audience: !0
                            }];
                        case "postGame":
                            return ["PostGame", {
                                player: this.player,
                                artifact: this.artifact,
                                audience: !0
                            }];
                        default:
                            return ["Waiting", {
                                player: this.audience,
                                audience: !0
                            }]
                    }
                    if (this.player) switch (this.player.kind) {
                        case "ranking":
                            return ["Ranking", {
                                player: this.player,
                                info: this.info
                            }];
                        case "choosing":
                            return ["Choosing", {
                                player: this.player,
                                info: this.info
                            }];
                        case "lobby":
                            return ["Lobby", {
                                player: this.player,
                                info: this.info
                            }];
                        case "postGame":
                            return ["PostGame", {
                                player: this.player,
                                info: this.info,
                                artifact: this.artifact
                            }];
                        case "fact":
                            return ["Fact", {
                                player: this.player,
                                info: this.info
                            }];
                        case "writing":
                            return ["Fact", {
                                player: this.player,
                                writing: !0,
                                info: this.info
                            }];
                        default:
                            return ["Waiting", {
                                player: this.player,
                                info: this.info
                            }]
                    }
                    return ["Waiting", {}]
                }
            },
            mounted() {
                this.handleResize()
            },
            beforeUnmount() {},
            methods: {
                leave: async (e, t) => {
                    e.classList.contains("hasTransition") && await Yt.sleep(600), t()
                },
                handleResize() {
                    this.windowHeight = window.innerHeight
                }
            }
        }),
        xne = {
            class: "antiquegame"
        };

    function Dne(e, t, r, n, s, o) {
        return G(), Y("div", xne, [e.isReady && e.screen ? (G(), wn(Ch(e.screen[0]), co({
            key: 0,
            role: "main"
        }, e.screen[1]), null, 16)) : Se("", !0)])
    }
    const Mne = ct(kne, [
        ["render", Dne]
    ]);
    bte({
        MainView: Mne,
        messages: $te
    })
});
export default Fne();
//# sourceMappingURL=ed2c1ae8.js.map