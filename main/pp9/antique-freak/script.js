var iP = Object.defineProperty;
var sP = (e, t, r) => t in e ? iP(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r;
var aP = (e, t) => () => (t || e((t = {
    exports: {}
}).exports, t), t.exports);
var ge = (e, t, r) => (sP(e, typeof t != "symbol" ? t + "" : t, r), r);
var Bne = aP((jne, Cw) => {
    const oP = function() {
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
    };
    oP();

    function mh(e, t) {
        const r = Object.create(null),
            n = e.split(",");
        for (let s = 0; s < n.length; s++) r[n[s]] = !0;
        return t ? s => !!r[s.toLowerCase()] : s => !!r[s]
    }
    const lP = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
        cP = mh(lP);

    function qb(e) {
        return !!e || e === ""
    }

    function lc(e) {
        if (ke(e)) {
            const t = {};
            for (let r = 0; r < e.length; r++) {
                const n = e[r],
                    s = Wt(n) ? dP(n) : lc(n);
                if (s)
                    for (const o in s) t[o] = s[o]
            }
            return t
        } else {
            if (Wt(e)) return e;
            if (At(e)) return e
        }
    }
    const uP = /;(?![^(]*\))/g,
        fP = /:(.+)/;

    function dP(e) {
        const t = {};
        return e.split(uP).forEach(r => {
            if (r) {
                const n = r.split(fP);
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
            } else if (At(e))
                for (const r in e) e[r] && (t += r + " ");
        return t.trim()
    }

    function hP(e, t) {
        if (e.length !== t.length) return !1;
        let r = !0;
        for (let n = 0; r && n < e.length; n++) r = cc(e[n], t[n]);
        return r
    }

    function cc(e, t) {
        if (e === t) return !0;
        let r = _v(e),
            n = _v(t);
        if (r || n) return r && n ? e.getTime() === t.getTime() : !1;
        if (r = Ya(e), n = Ya(t), r || n) return e === t;
        if (r = ke(e), n = ke(t), r || n) return r && n ? hP(e, t) : !1;
        if (r = At(e), n = At(t), r || n) {
            if (!r || !n) return !1;
            const s = Object.keys(e).length,
                o = Object.keys(t).length;
            if (s !== o) return !1;
            for (const l in e) {
                const u = e.hasOwnProperty(l),
                    f = t.hasOwnProperty(l);
                if (u && !f || !u && f || !cc(e[l], t[l])) return !1
            }
        }
        return String(e) === String(t)
    }

    function Yb(e, t) {
        return e.findIndex(r => cc(r, t))
    }
    const rt = e => Wt(e) ? e : e == null ? "" : ke(e) || At(e) && (e.toString === Jb || !He(e.toString)) ? JSON.stringify(e, zb, 2) : String(e),
        zb = (e, t) => t && t.__v_isRef ? zb(e, t.value) : Ms(t) ? {
            [`Map(${t.size})`]: [...t.entries()].reduce((r, [n, s]) => (r[`${n} =>`] = s, r), {})
        } : fc(t) ? {
            [`Set(${t.size})`]: [...t.values()]
        } : At(t) && !ke(t) && !Qb(t) ? String(t) : t,
        gt = {},
        Ds = [],
        cn = () => {},
        pP = () => !1,
        gP = /^on[^a-z]/,
        uc = e => gP.test(e),
        vh = e => e.startsWith("onUpdate:"),
        tr = Object.assign,
        yh = (e, t) => {
            const r = e.indexOf(t);
            r > -1 && e.splice(r, 1)
        },
        mP = Object.prototype.hasOwnProperty,
        Ze = (e, t) => mP.call(e, t),
        ke = Array.isArray,
        Ms = e => lo(e) === "[object Map]",
        fc = e => lo(e) === "[object Set]",
        _v = e => lo(e) === "[object Date]",
        He = e => typeof e == "function",
        Wt = e => typeof e == "string",
        Ya = e => typeof e == "symbol",
        At = e => e !== null && typeof e == "object",
        Xb = e => At(e) && He(e.then) && He(e.catch),
        Jb = Object.prototype.toString,
        lo = e => Jb.call(e),
        vP = e => lo(e).slice(8, -1),
        Qb = e => lo(e) === "[object Object]",
        _h = e => Wt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
        Rl = mh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
        dc = e => {
            const t = Object.create(null);
            return r => t[r] || (t[r] = e(r))
        },
        yP = /-(\w)/g,
        On = dc(e => e.replace(yP, (t, r) => r ? r.toUpperCase() : "")),
        _P = /\B([A-Z])/g,
        as = dc(e => e.replace(_P, "-$1").toLowerCase()),
        hc = dc(e => e.charAt(0).toUpperCase() + e.slice(1)),
        pf = dc(e => e ? `on${hc(e)}` : ""),
        za = (e, t) => !Object.is(e, t),
        Ll = (e, t) => {
            for (let r = 0; r < e.length; r++) e[r](t)
        },
        Ul = (e, t, r) => {
            Object.defineProperty(e, t, {
                configurable: !0,
                enumerable: !1,
                value: r
            })
        },
        jl = e => {
            const t = parseFloat(e);
            return isNaN(t) ? e : t
        };
    let bv;
    const bP = () => bv || (bv = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
    let bn;
    class Zb {
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

    function EP(e) {
        return new Zb(e)
    }

    function TP(e, t = bn) {
        t && t.active && t.effects.push(e)
    }
    const bh = e => {
            const t = new Set(e);
            return t.w = 0, t.n = 0, t
        },
        eE = e => (e.w & fi) > 0,
        tE = e => (e.n & fi) > 0,
        SP = ({
            deps: e
        }) => {
            if (e.length)
                for (let t = 0; t < e.length; t++) e[t].w |= fi
        },
        OP = e => {
            const {
                deps: t
            } = e;
            if (t.length) {
                let r = 0;
                for (let n = 0; n < t.length; n++) {
                    const s = t[n];
                    eE(s) && !tE(s) ? s.delete(e) : t[r++] = s, s.w &= ~fi, s.n &= ~fi
                }
                t.length = r
            }
        },
        ld = new WeakMap;
    let La = 0,
        fi = 1;
    const cd = 30;
    let an;
    const Xi = Symbol(""),
        ud = Symbol("");
    class Eh {
        constructor(t, r = null, n) {
            this.fn = t, this.scheduler = r, this.active = !0, this.deps = [], this.parent = void 0, TP(this, n)
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
                return this.parent = an, an = this, li = !0, fi = 1 << ++La, La <= cd ? SP(this) : Ev(this), this.fn()
            } finally {
                La <= cd && OP(this), fi = 1 << --La, an = this.parent, li = r, this.parent = void 0, this.deferStop && this.stop()
            }
        }
        stop() {
            an === this ? this.deferStop = !0 : this.active && (Ev(this), this.onStop && this.onStop(), this.active = !1)
        }
    }

    function Ev(e) {
        const {
            deps: t
        } = e;
        if (t.length) {
            for (let r = 0; r < t.length; r++) t[r].delete(e);
            t.length = 0
        }
    }
    let li = !0;
    const rE = [];

    function ea() {
        rE.push(li), li = !1
    }

    function ta() {
        const e = rE.pop();
        li = e === void 0 ? !0 : e
    }

    function xr(e, t, r) {
        if (li && an) {
            let n = ld.get(e);
            n || ld.set(e, n = new Map);
            let s = n.get(r);
            s || n.set(r, s = bh()), nE(s)
        }
    }

    function nE(e, t) {
        let r = !1;
        La <= cd ? tE(e) || (e.n |= fi, r = !eE(e)) : r = !e.has(an), r && (e.add(an), an.deps.push(e))
    }

    function Fn(e, t, r, n, s, o) {
        const l = ld.get(e);
        if (!l) return;
        let u = [];
        if (t === "clear") u = [...l.values()];
        else if (r === "length" && ke(e)) l.forEach((f, h) => {
            (h === "length" || h >= n) && u.push(f)
        });
        else switch (r !== void 0 && u.push(l.get(r)), t) {
            case "add":
                ke(e) ? _h(r) && u.push(l.get("length")) : (u.push(l.get(Xi)), Ms(e) && u.push(l.get(ud)));
                break;
            case "delete":
                ke(e) || (u.push(l.get(Xi)), Ms(e) && u.push(l.get(ud)));
                break;
            case "set":
                Ms(e) && u.push(l.get(Xi));
                break
        }
        if (u.length === 1) u[0] && fd(u[0]);
        else {
            const f = [];
            for (const h of u) h && f.push(...h);
            fd(bh(f))
        }
    }

    function fd(e, t) {
        const r = ke(e) ? e : [...e];
        for (const n of r) n.computed && Tv(n);
        for (const n of r) n.computed || Tv(n)
    }

    function Tv(e, t) {
        (e !== an || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run())
    }
    const wP = mh("__proto__,__v_isRef,__isVue"),
        iE = new Set(Object.getOwnPropertyNames(Symbol).filter(e => e !== "arguments" && e !== "caller").map(e => Symbol[e]).filter(Ya)),
        $P = Th(),
        CP = Th(!1, !0),
        IP = Th(!0),
        Sv = AP();

    function AP() {
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
                ea();
                const n = st(this)[t].apply(this, r);
                return ta(), n
            }
        }), e
    }

    function Th(e = !1, t = !1) {
        return function(n, s, o) {
            if (s === "__v_isReactive") return !e;
            if (s === "__v_isReadonly") return e;
            if (s === "__v_isShallow") return t;
            if (s === "__v_raw" && o === (e ? t ? KP : cE : t ? lE : oE).get(n)) return n;
            const l = ke(n);
            if (!e && l && Ze(Sv, s)) return Reflect.get(Sv, s, o);
            const u = Reflect.get(n, s, o);
            return (Ya(s) ? iE.has(s) : wP(s)) || (e || xr(n, "get", s), t) ? u : Qt(u) ? l && _h(s) ? u : u.value : At(u) ? e ? uE(u) : Bn(u) : u
        }
    }
    const NP = sE(),
        PP = sE(!0);

    function sE(e = !1) {
        return function(r, n, s, o) {
            let l = r[n];
            if (Xa(l) && Qt(l) && !Qt(s)) return !1;
            if (!e && !Xa(s) && (dd(s) || (s = st(s), l = st(l)), !ke(r) && Qt(l) && !Qt(s))) return l.value = s, !0;
            const u = ke(r) && _h(n) ? Number(n) < r.length : Ze(r, n),
                f = Reflect.set(r, n, s, o);
            return r === st(o) && (u ? za(s, l) && Fn(r, "set", n, s) : Fn(r, "add", n, s)), f
        }
    }

    function RP(e, t) {
        const r = Ze(e, t);
        e[t];
        const n = Reflect.deleteProperty(e, t);
        return n && r && Fn(e, "delete", t, void 0), n
    }

    function LP(e, t) {
        const r = Reflect.has(e, t);
        return (!Ya(t) || !iE.has(t)) && xr(e, "has", t), r
    }

    function kP(e) {
        return xr(e, "iterate", ke(e) ? "length" : Xi), Reflect.ownKeys(e)
    }
    const aE = {
            get: $P,
            set: NP,
            deleteProperty: RP,
            has: LP,
            ownKeys: kP
        },
        xP = {
            get: IP,
            set(e, t) {
                return !0
            },
            deleteProperty(e, t) {
                return !0
            }
        },
        DP = tr({}, aE, {
            get: CP,
            set: PP
        }),
        Sh = e => e,
        pc = e => Reflect.getPrototypeOf(e);

    function hl(e, t, r = !1, n = !1) {
        e = e.__v_raw;
        const s = st(e),
            o = st(t);
        r || (t !== o && xr(s, "get", t), xr(s, "get", o));
        const {
            has: l
        } = pc(s), u = n ? Sh : r ? $h : Ja;
        if (l.call(s, t)) return u(e.get(t));
        if (l.call(s, o)) return u(e.get(o));
        e !== s && e.get(t)
    }

    function pl(e, t = !1) {
        const r = this.__v_raw,
            n = st(r),
            s = st(e);
        return t || (e !== s && xr(n, "has", e), xr(n, "has", s)), e === s ? r.has(e) : r.has(e) || r.has(s)
    }

    function gl(e, t = !1) {
        return e = e.__v_raw, !t && xr(st(e), "iterate", Xi), Reflect.get(e, "size", e)
    }

    function Ov(e) {
        e = st(e);
        const t = st(this);
        return pc(t).has.call(t, e) || (t.add(e), Fn(t, "add", e, e)), this
    }

    function wv(e, t) {
        t = st(t);
        const r = st(this),
            {
                has: n,
                get: s
            } = pc(r);
        let o = n.call(r, e);
        o || (e = st(e), o = n.call(r, e));
        const l = s.call(r, e);
        return r.set(e, t), o ? za(t, l) && Fn(r, "set", e, t) : Fn(r, "add", e, t), this
    }

    function $v(e) {
        const t = st(this),
            {
                has: r,
                get: n
            } = pc(t);
        let s = r.call(t, e);
        s || (e = st(e), s = r.call(t, e)), n && n.call(t, e);
        const o = t.delete(e);
        return s && Fn(t, "delete", e, void 0), o
    }

    function Cv() {
        const e = st(this),
            t = e.size !== 0,
            r = e.clear();
        return t && Fn(e, "clear", void 0, void 0), r
    }

    function ml(e, t) {
        return function(n, s) {
            const o = this,
                l = o.__v_raw,
                u = st(l),
                f = t ? Sh : e ? $h : Ja;
            return !e && xr(u, "iterate", Xi), l.forEach((h, g) => n.call(s, f(h), f(g), o))
        }
    }

    function vl(e, t, r) {
        return function(...n) {
            const s = this.__v_raw,
                o = st(s),
                l = Ms(o),
                u = e === "entries" || e === Symbol.iterator && l,
                f = e === "keys" && l,
                h = s[e](...n),
                g = r ? Sh : t ? $h : Ja;
            return !t && xr(o, "iterate", f ? ud : Xi), {
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

    function Jn(e) {
        return function(...t) {
            return e === "delete" ? !1 : this
        }
    }

    function MP() {
        const e = {
                get(o) {
                    return hl(this, o)
                },
                get size() {
                    return gl(this)
                },
                has: pl,
                add: Ov,
                set: wv,
                delete: $v,
                clear: Cv,
                forEach: ml(!1, !1)
            },
            t = {
                get(o) {
                    return hl(this, o, !1, !0)
                },
                get size() {
                    return gl(this)
                },
                has: pl,
                add: Ov,
                set: wv,
                delete: $v,
                clear: Cv,
                forEach: ml(!1, !0)
            },
            r = {
                get(o) {
                    return hl(this, o, !0)
                },
                get size() {
                    return gl(this, !0)
                },
                has(o) {
                    return pl.call(this, o, !0)
                },
                add: Jn("add"),
                set: Jn("set"),
                delete: Jn("delete"),
                clear: Jn("clear"),
                forEach: ml(!0, !1)
            },
            n = {
                get(o) {
                    return hl(this, o, !0, !0)
                },
                get size() {
                    return gl(this, !0)
                },
                has(o) {
                    return pl.call(this, o, !0)
                },
                add: Jn("add"),
                set: Jn("set"),
                delete: Jn("delete"),
                clear: Jn("clear"),
                forEach: ml(!0, !0)
            };
        return ["keys", "values", "entries", Symbol.iterator].forEach(o => {
            e[o] = vl(o, !1, !1), r[o] = vl(o, !0, !1), t[o] = vl(o, !1, !0), n[o] = vl(o, !0, !0)
        }), [e, r, t, n]
    }
    const [FP, BP, UP, jP] = MP();

    function Oh(e, t) {
        const r = t ? e ? jP : UP : e ? BP : FP;
        return (n, s, o) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? n : Reflect.get(Ze(r, s) && s in n ? r : n, s, o)
    }
    const GP = {
            get: Oh(!1, !1)
        },
        WP = {
            get: Oh(!1, !0)
        },
        HP = {
            get: Oh(!0, !1)
        },
        oE = new WeakMap,
        lE = new WeakMap,
        cE = new WeakMap,
        KP = new WeakMap;

    function VP(e) {
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

    function qP(e) {
        return e.__v_skip || !Object.isExtensible(e) ? 0 : VP(vP(e))
    }

    function Bn(e) {
        return Xa(e) ? e : wh(e, !1, aE, GP, oE)
    }

    function YP(e) {
        return wh(e, !1, DP, WP, lE)
    }

    function uE(e) {
        return wh(e, !0, xP, HP, cE)
    }

    function wh(e, t, r, n, s) {
        if (!At(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
        const o = s.get(e);
        if (o) return o;
        const l = qP(e);
        if (l === 0) return e;
        const u = new Proxy(e, l === 2 ? n : r);
        return s.set(e, u), u
    }

    function Fs(e) {
        return Xa(e) ? Fs(e.__v_raw) : !!(e && e.__v_isReactive)
    }

    function Xa(e) {
        return !!(e && e.__v_isReadonly)
    }

    function dd(e) {
        return !!(e && e.__v_isShallow)
    }

    function fE(e) {
        return Fs(e) || Xa(e)
    }

    function st(e) {
        const t = e && e.__v_raw;
        return t ? st(t) : e
    }

    function dE(e) {
        return Ul(e, "__v_skip", !0), e
    }
    const Ja = e => At(e) ? Bn(e) : e,
        $h = e => At(e) ? uE(e) : e;

    function hE(e) {
        li && an && (e = st(e), nE(e.dep || (e.dep = bh())))
    }

    function pE(e, t) {
        e = st(e), e.dep && fd(e.dep)
    }

    function Qt(e) {
        return !!(e && e.__v_isRef === !0)
    }

    function on(e) {
        return gE(e, !1)
    }

    function zP(e) {
        return gE(e, !0)
    }

    function gE(e, t) {
        return Qt(e) ? e : new XP(e, t)
    }
    class XP {
        constructor(t, r) {
            this.__v_isShallow = r, this.dep = void 0, this.__v_isRef = !0, this._rawValue = r ? t : st(t), this._value = r ? t : Ja(t)
        }
        get value() {
            return hE(this), this._value
        }
        set value(t) {
            t = this.__v_isShallow ? t : st(t), za(t, this._rawValue) && (this._rawValue = t, this._value = this.__v_isShallow ? t : Ja(t), pE(this))
        }
    }

    function JP(e) {
        return Qt(e) ? e.value : e
    }
    const QP = {
        get: (e, t, r) => JP(Reflect.get(e, t, r)),
        set: (e, t, r, n) => {
            const s = e[t];
            return Qt(s) && !Qt(r) ? (s.value = r, !0) : Reflect.set(e, t, r, n)
        }
    };

    function mE(e) {
        return Fs(e) ? e : new Proxy(e, QP)
    }
    class ZP {
        constructor(t, r, n, s) {
            this._setter = r, this.dep = void 0, this.__v_isRef = !0, this._dirty = !0, this.effect = new Eh(t, () => {
                this._dirty || (this._dirty = !0, pE(this))
            }), this.effect.computed = this, this.effect.active = this._cacheable = !s, this.__v_isReadonly = n
        }
        get value() {
            const t = st(this);
            return hE(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value
        }
        set value(t) {
            this._setter(t)
        }
    }

    function eR(e, t, r = !1) {
        let n, s;
        const o = He(e);
        return o ? (n = e, s = cn) : (n = e.get, s = e.set), new ZP(n, s, o || !s, r)
    }

    function ci(e, t, r, n) {
        let s;
        try {
            s = n ? e(...n) : e()
        } catch (o) {
            gc(o, t, r)
        }
        return s
    }

    function Jr(e, t, r, n) {
        if (He(e)) {
            const o = ci(e, t, r, n);
            return o && Xb(o) && o.catch(l => {
                gc(l, t, r)
            }), o
        }
        const s = [];
        for (let o = 0; o < e.length; o++) s.push(Jr(e[o], t, r, n));
        return s
    }

    function gc(e, t, r, n = !0) {
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
        tR(e, r, s, n)
    }

    function tR(e, t, r, n = !0) {
        console.error(e)
    }
    let Gl = !1,
        hd = !1;
    const Lr = [];
    let Mn = 0;
    const Ma = [];
    let ka = null,
        Is = 0;
    const Fa = [];
    let ri = null,
        As = 0;
    const vE = Promise.resolve();
    let Ch = null,
        pd = null;

    function rR(e) {
        const t = Ch || vE;
        return e ? t.then(this ? e.bind(this) : e) : t
    }

    function nR(e) {
        let t = Mn + 1,
            r = Lr.length;
        for (; t < r;) {
            const n = t + r >>> 1;
            Qa(Lr[n]) < e ? t = n + 1 : r = n
        }
        return t
    }

    function yE(e) {
        (!Lr.length || !Lr.includes(e, Gl && e.allowRecurse ? Mn + 1 : Mn)) && e !== pd && (e.id == null ? Lr.push(e) : Lr.splice(nR(e.id), 0, e), _E())
    }

    function _E() {
        !Gl && !hd && (hd = !0, Ch = vE.then(TE))
    }

    function iR(e) {
        const t = Lr.indexOf(e);
        t > Mn && Lr.splice(t, 1)
    }

    function bE(e, t, r, n) {
        ke(e) ? r.push(...e) : (!t || !t.includes(e, e.allowRecurse ? n + 1 : n)) && r.push(e), _E()
    }

    function sR(e) {
        bE(e, ka, Ma, Is)
    }

    function aR(e) {
        bE(e, ri, Fa, As)
    }

    function mc(e, t = null) {
        if (Ma.length) {
            for (pd = t, ka = [...new Set(Ma)], Ma.length = 0, Is = 0; Is < ka.length; Is++) ka[Is]();
            ka = null, Is = 0, pd = null, mc(e, t)
        }
    }

    function EE(e) {
        if (mc(), Fa.length) {
            const t = [...new Set(Fa)];
            if (Fa.length = 0, ri) {
                ri.push(...t);
                return
            }
            for (ri = t, ri.sort((r, n) => Qa(r) - Qa(n)), As = 0; As < ri.length; As++) ri[As]();
            ri = null, As = 0
        }
    }
    const Qa = e => e.id == null ? 1 / 0 : e.id;

    function TE(e) {
        hd = !1, Gl = !0, mc(e), Lr.sort((r, n) => Qa(r) - Qa(n));
        const t = cn;
        try {
            for (Mn = 0; Mn < Lr.length; Mn++) {
                const r = Lr[Mn];
                r && r.active !== !1 && ci(r, null, 14)
            }
        } finally {
            Mn = 0, Lr.length = 0, EE(), Gl = !1, Ch = null, (Lr.length || Ma.length || Fa.length) && TE(e)
        }
    }

    function oR(e, t, ...r) {
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
            E && (s = r.map($ => $.trim())), _ && (s = r.map(jl))
        }
        let u, f = n[u = pf(t)] || n[u = pf(On(t))];
        !f && o && (f = n[u = pf(as(t))]), f && Jr(f, e, 6, s);
        const h = n[u + "Once"];
        if (h) {
            if (!e.emitted) e.emitted = {};
            else if (e.emitted[u]) return;
            e.emitted[u] = !0, Jr(h, e, 6, s)
        }
    }

    function SE(e, t, r = !1) {
        const n = t.emitsCache,
            s = n.get(e);
        if (s !== void 0) return s;
        const o = e.emits;
        let l = {},
            u = !1;
        if (!He(e)) {
            const f = h => {
                const g = SE(h, t, !0);
                g && (u = !0, tr(l, g))
            };
            !r && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f)
        }
        return !o && !u ? (n.set(e, null), null) : (ke(o) ? o.forEach(f => l[f] = null) : tr(l, o), n.set(e, l), l)
    }

    function vc(e, t) {
        return !e || !uc(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Ze(e, t[0].toLowerCase() + t.slice(1)) || Ze(e, as(t)) || Ze(e, t))
    }
    let or = null,
        yc = null;

    function Wl(e) {
        const t = or;
        return or = e, yc = e && e.type.__scopeId || null, t
    }

    function co(e) {
        yc = e
    }

    function uo() {
        yc = null
    }

    function Ih(e, t = or, r) {
        if (!t || e._n) return e;
        const n = (...s) => {
            n._d && Fv(-1);
            const o = Wl(t),
                l = e(...s);
            return Wl(o), n._d && Fv(1), l
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
            propsOptions: [l],
            slots: u,
            attrs: f,
            emit: h,
            render: g,
            renderCache: _,
            data: E,
            setupState: $,
            ctx: L,
            inheritAttrs: M
        } = e;
        let U, C;
        const V = Wl(e);
        try {
            if (r.shapeFlag & 4) {
                const G = s || n;
                U = Tn(g.call(G, G, _, o, $, E, L)), C = f
            } else {
                const G = t;
                U = Tn(G.length > 1 ? G(o, {
                    attrs: f,
                    slots: u,
                    emit: h
                }) : G(o, null)), C = t.props ? f : lR(f)
            }
        } catch (G) {
            Ua.length = 0, gc(G, e, 1), U = wt(Qr)
        }
        let X = U;
        if (C && M !== !1) {
            const G = Object.keys(C),
                {
                    shapeFlag: j
                } = X;
            G.length && j & 7 && (l && G.some(vh) && (C = cR(C, l)), X = di(X, C))
        }
        return r.dirs && (X = di(X), X.dirs = X.dirs ? X.dirs.concat(r.dirs) : r.dirs), r.transition && (X.transition = r.transition), U = X, Wl(V), U
    }
    const lR = e => {
            let t;
            for (const r in e)(r === "class" || r === "style" || uc(r)) && ((t || (t = {}))[r] = e[r]);
            return t
        },
        cR = (e, t) => {
            const r = {};
            for (const n in e)(!vh(n) || !(n.slice(9) in t)) && (r[n] = e[n]);
            return r
        };

    function uR(e, t, r) {
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
            if (f & 16) return n ? Iv(n, l, h) : !!l;
            if (f & 8) {
                const g = t.dynamicProps;
                for (let _ = 0; _ < g.length; _++) {
                    const E = g[_];
                    if (l[E] !== n[E] && !vc(h, E)) return !0
                }
            }
        } else return (s || u) && (!u || !u.$stable) ? !0 : n === l ? !1 : n ? l ? Iv(n, l, h) : !0 : !!l;
        return !1
    }

    function Iv(e, t, r) {
        const n = Object.keys(t);
        if (n.length !== Object.keys(e).length) return !0;
        for (let s = 0; s < n.length; s++) {
            const o = n[s];
            if (t[o] !== e[o] && !vc(r, o)) return !0
        }
        return !1
    }

    function fR({
        vnode: e,
        parent: t
    }, r) {
        for (; t && t.subTree === e;)(e = t.vnode).el = r, t = t.parent
    }
    const dR = e => e.__isSuspense;

    function hR(e, t) {
        t && t.pendingBranch ? ke(e) ? t.effects.push(...e) : t.effects.push(e) : aR(e)
    }

    function pR(e, t) {
        if (qt) {
            let r = qt.provides;
            const n = qt.parent && qt.parent.provides;
            n === r && (r = qt.provides = Object.create(n)), r[e] = t
        }
    }

    function Ji(e, t, r = !1) {
        const n = qt || or;
        if (n) {
            const s = n.parent == null ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides;
            if (s && e in s) return s[e];
            if (arguments.length > 1) return r && He(t) ? t.call(n.proxy) : t
        }
    }
    const Av = {};

    function Qi(e, t, r) {
        return OE(e, t, r)
    }

    function OE(e, t, {
        immediate: r,
        deep: n,
        flush: s,
        onTrack: o,
        onTrigger: l
    } = gt) {
        const u = qt;
        let f, h = !1,
            g = !1;
        if (Qt(e) ? (f = () => e.value, h = dd(e)) : Fs(e) ? (f = () => e, n = !0) : ke(e) ? (g = !0, h = e.some(C => Fs(C) || dd(C)), f = () => e.map(C => {
                if (Qt(C)) return C.value;
                if (Fs(C)) return zi(C);
                if (He(C)) return ci(C, u, 2)
            })) : He(e) ? t ? f = () => ci(e, u, 2) : f = () => {
                if (!(u && u.isUnmounted)) return _ && _(), Jr(e, u, 3, [E])
            } : f = cn, t && n) {
            const C = f;
            f = () => zi(C())
        }
        let _, E = C => {
            _ = U.onStop = () => {
                ci(C, u, 4)
            }
        };
        if (eo) return E = cn, t ? r && Jr(t, u, 3, [f(), g ? [] : void 0, E]) : f(), cn;
        let $ = g ? [] : Av;
        const L = () => {
            if (!!U.active)
                if (t) {
                    const C = U.run();
                    (n || h || (g ? C.some((V, X) => za(V, $[X])) : za(C, $))) && (_ && _(), Jr(t, u, 3, [C, $ === Av ? void 0 : $, E]), $ = C)
                } else U.run()
        };
        L.allowRecurse = !!t;
        let M;
        s === "sync" ? M = L : s === "post" ? M = () => Tr(L, u && u.suspense) : M = () => sR(L);
        const U = new Eh(f, M);
        return t ? r ? L() : $ = U.run() : s === "post" ? Tr(U.run.bind(U), u && u.suspense) : U.run(), () => {
            U.stop(), u && u.scope && yh(u.scope.effects, U)
        }
    }

    function gR(e, t, r) {
        const n = this.proxy,
            s = Wt(e) ? e.includes(".") ? wE(n, e) : () => n[e] : e.bind(n, n);
        let o;
        He(t) ? o = t : (o = t.handler, r = t);
        const l = qt;
        qs(this);
        const u = OE(s, o.bind(n), r);
        return l ? qs(l) : Zi(), u
    }

    function wE(e, t) {
        const r = t.split(".");
        return () => {
            let n = e;
            for (let s = 0; s < r.length && n; s++) n = n[r[s]];
            return n
        }
    }

    function zi(e, t) {
        if (!At(e) || e.__v_skip || (t = t || new Set, t.has(e))) return e;
        if (t.add(e), Qt(e)) zi(e.value, t);
        else if (ke(e))
            for (let r = 0; r < e.length; r++) zi(e[r], t);
        else if (fc(e) || Ms(e)) e.forEach(r => {
            zi(r, t)
        });
        else if (Qb(e))
            for (const r in e) zi(e[r], t);
        return e
    }

    function mR() {
        const e = {
            isMounted: !1,
            isLeaving: !1,
            isUnmounting: !1,
            leavingVNodes: new Map
        };
        return Ah(() => {
            e.isMounted = !0
        }), PE(() => {
            e.isUnmounting = !0
        }), e
    }
    const qr = [Function, Array],
        vR = {
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
                const r = ss(),
                    n = mR();
                let s;
                return () => {
                    const o = t.default && IE(t.default(), !0);
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
                    if (n.isLeaving) return mf(l);
                    const h = Nv(l);
                    if (!h) return mf(l);
                    const g = gd(h, u, n, r);
                    md(h, g);
                    const _ = r.subTree,
                        E = _ && Nv(_);
                    let $ = !1;
                    const {
                        getTransitionKey: L
                    } = h.type;
                    if (L) {
                        const M = L();
                        s === void 0 ? s = M : M !== s && (s = M, $ = !0)
                    }
                    if (E && E.type !== Qr && (!Hi(h, E) || $)) {
                        const M = gd(E, u, n, r);
                        if (md(E, M), f === "out-in") return n.isLeaving = !0, M.afterLeave = () => {
                            n.isLeaving = !1, r.update()
                        }, mf(l);
                        f === "in-out" && h.type !== Qr && (M.delayLeave = (U, C, V) => {
                            const X = CE(n, E);
                            X[String(E.key)] = E, U._leaveCb = () => {
                                C(), U._leaveCb = void 0, delete g.delayedLeave
                            }, g.delayedLeave = V
                        })
                    }
                    return l
                }
            }
        },
        $E = vR;

    function CE(e, t) {
        const {
            leavingVNodes: r
        } = e;
        let n = r.get(t.type);
        return n || (n = Object.create(null), r.set(t.type, n)), n
    }

    function gd(e, t, r, n) {
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
            onLeaveCancelled: L,
            onBeforeAppear: M,
            onAppear: U,
            onAfterAppear: C,
            onAppearCancelled: V
        } = t, X = String(e.key), G = CE(r, e), j = (le, ue) => {
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
                const Ae = G[X];
                Ae && Hi(e, Ae) && Ae.el._leaveCb && Ae.el._leaveCb(), j(ue, [le])
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
                    Ce || (Ce = !0, ue(), $e ? j(L, [le]) : j($, [le]), le._leaveCb = void 0, G[Ae] === e && delete G[Ae])
                };
                G[Ae] = e, E ? Q(E, [le, fe]) : fe()
            },
            clone(le) {
                return gd(le, t, r, n)
            }
        };
        return oe
    }

    function mf(e) {
        if (_c(e)) return e = di(e), e.children = null, e
    }

    function Nv(e) {
        return _c(e) ? e.children ? e.children[0] : void 0 : e
    }

    function md(e, t) {
        e.shapeFlag & 6 && e.component ? md(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
    }

    function IE(e, t = !1, r) {
        let n = [],
            s = 0;
        for (let o = 0; o < e.length; o++) {
            let l = e[o];
            const u = r == null ? l.key : String(r) + String(l.key != null ? l.key : o);
            l.type === ze ? (l.patchFlag & 128 && s++, n = n.concat(IE(l.children, t, u))) : (t || l.type !== Qr) && n.push(u != null ? di(l, {
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
    const Ba = e => !!e.type.__asyncLoader,
        _c = e => e.type.__isKeepAlive;

    function yR(e, t) {
        AE(e, "a", t)
    }

    function _R(e, t) {
        AE(e, "da", t)
    }

    function AE(e, t, r = qt) {
        const n = e.__wdc || (e.__wdc = () => {
            let s = r;
            for (; s;) {
                if (s.isDeactivated) return;
                s = s.parent
            }
            return e()
        });
        if (bc(t, n, r), r) {
            let s = r.parent;
            for (; s && s.parent;) _c(s.parent.vnode) && bR(n, t, r, s), s = s.parent
        }
    }

    function bR(e, t, r, n) {
        const s = bc(t, e, n, !0);
        Nh(() => {
            yh(n[t], s)
        }, r)
    }

    function bc(e, t, r = qt, n = !1) {
        if (r) {
            const s = r[e] || (r[e] = []),
                o = t.__weh || (t.__weh = (...l) => {
                    if (r.isUnmounted) return;
                    ea(), qs(r);
                    const u = Jr(t, r, e, l);
                    return Zi(), ta(), u
                });
            return n ? s.unshift(o) : s.push(o), o
        }
    }
    const Un = e => (t, r = qt) => (!eo || e === "sp") && bc(e, t, r),
        NE = Un("bm"),
        Ah = Un("m"),
        ER = Un("bu"),
        TR = Un("u"),
        PE = Un("bum"),
        Nh = Un("um"),
        SR = Un("sp"),
        OR = Un("rtg"),
        wR = Un("rtc");

    function $R(e, t = qt) {
        bc("ec", e, t)
    }

    function Ie(e, t) {
        const r = or;
        if (r === null) return e;
        const n = Oc(r) || r.proxy,
            s = e.dirs || (e.dirs = []);
        for (let o = 0; o < t.length; o++) {
            let [l, u, f, h = gt] = t[o];
            He(l) && (l = {
                mounted: l,
                updated: l
            }), l.deep && zi(u), s.push({
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
            f && (ea(), Jr(f, r, 8, [e.el, u, e, t]), ta())
        }
    }
    const Ph = "components",
        CR = "directives";

    function Xr(e, t) {
        return Rh(Ph, e, !0, t) || e
    }
    const RE = Symbol();

    function Ec(e) {
        return Wt(e) ? Rh(Ph, e, !1) || e : e || RE
    }

    function Dt(e) {
        return Rh(CR, e)
    }

    function Rh(e, t, r = !0, n = !1) {
        const s = or || qt;
        if (s) {
            const o = s.type;
            if (e === Ph) {
                const u = rL(o, !1);
                if (u && (u === t || u === On(t) || u === hc(On(t)))) return o
            }
            const l = Pv(s[e] || o[e], t) || Pv(s.appContext[e], t);
            return !l && n ? o : l
        }
    }

    function Pv(e, t) {
        return e && (e[t] || e[On(t)] || e[hc(On(t))])
    }

    function Or(e, t, r, n) {
        let s;
        const o = r && r[n];
        if (ke(e) || Wt(e)) {
            s = new Array(e.length);
            for (let l = 0, u = e.length; l < u; l++) s[l] = t(e[l], l, void 0, o && o[l])
        } else if (typeof e == "number") {
            s = new Array(e);
            for (let l = 0; l < e; l++) s[l] = t(l + 1, l, void 0, o && o[l])
        } else if (At(e))
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

    function IR(e, t, r = {}, n, s) {
        if (or.isCE || or.parent && Ba(or.parent) && or.parent.isCE) return wt("slot", t === "default" ? null : {
            name: t
        }, n && n());
        let o = e[t];
        o && o._c && (o._d = !1), W();
        const l = o && LE(o(r)),
            u = fn(ze, {
                key: r.key || `_${t}`
            }, l || (n ? n() : []), l && e._ === 1 ? 64 : -2);
        return !s && u.scopeId && (u.slotScopeIds = [u.scopeId + "-s"]), o && o._c && (o._d = !0), u
    }

    function LE(e) {
        return e.some(t => Vl(t) ? !(t.type === Qr || t.type === ze && !LE(t.children)) : !0) ? e : null
    }
    const vd = e => e ? KE(e) ? Oc(e) || e.proxy : vd(e.parent) : null,
        Hl = tr(Object.create(null), {
            $: e => e,
            $el: e => e.vnode.el,
            $data: e => e.data,
            $props: e => e.props,
            $attrs: e => e.attrs,
            $slots: e => e.slots,
            $refs: e => e.refs,
            $parent: e => vd(e.parent),
            $root: e => vd(e.root),
            $emit: e => e.emit,
            $options: e => xE(e),
            $forceUpdate: e => e.f || (e.f = () => yE(e.update)),
            $nextTick: e => e.n || (e.n = rR.bind(e.proxy)),
            $watch: e => gR.bind(e)
        }),
        AR = {
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
                        yd && (l[t] = 0)
                    }
                }
                const g = Hl[t];
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
                return !!r[l] || e !== gt && Ze(e, l) || t !== gt && Ze(t, l) || (u = o[0]) && Ze(u, l) || Ze(n, l) || Ze(Hl, l) || Ze(s.config.globalProperties, l)
            },
            defineProperty(e, t, r) {
                return r.get != null ? e._.accessCache[t] = 0 : Ze(r, "value") && this.set(e, t, r.value, null), Reflect.defineProperty(e, t, r)
            }
        };
    let yd = !0;

    function NR(e) {
        const t = xE(e),
            r = e.proxy,
            n = e.ctx;
        yd = !1, t.beforeCreate && Rv(t.beforeCreate, e, "bc");
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
            updated: L,
            activated: M,
            deactivated: U,
            beforeDestroy: C,
            beforeUnmount: V,
            destroyed: X,
            unmounted: G,
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
        if (h && PR(h, n, null, e.appContext.config.unwrapInjectedRef), l)
            for (const be in l) {
                const ve = l[be];
                He(ve) && (n[be] = ve.bind(r))
            }
        if (s) {
            const be = s.call(r, r);
            At(be) && (e.data = Bn(be))
        }
        if (yd = !0, o)
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
            for (const be in u) kE(u[be], n, r, be);
        if (f) {
            const be = He(f) ? f.call(r) : f;
            Reflect.ownKeys(be).forEach(ve => {
                pR(ve, be[ve])
            })
        }
        g && Rv(g, e, "c");

        function de(be, ve) {
            ke(ve) ? ve.forEach(Oe => be(Oe.bind(r))) : ve && be(ve.bind(r))
        }
        if (de(NE, _), de(Ah, E), de(ER, $), de(TR, L), de(yR, M), de(_R, U), de($R, le), de(wR, Q), de(OR, oe), de(PE, V), de(Nh, G), de(SR, ue), ke(Ae))
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

    function PR(e, t, r = cn, n = !1) {
        ke(e) && (e = _d(e));
        for (const s in e) {
            const o = e[s];
            let l;
            At(o) ? "default" in o ? l = Ji(o.from || s, o.default, !0) : l = Ji(o.from || s) : l = Ji(o), Qt(l) && n ? Object.defineProperty(t, s, {
                enumerable: !0,
                configurable: !0,
                get: () => l.value,
                set: u => l.value = u
            }) : t[s] = l
        }
    }

    function Rv(e, t, r) {
        Jr(ke(e) ? e.map(n => n.bind(t.proxy)) : e.bind(t.proxy), t, r)
    }

    function kE(e, t, r, n) {
        const s = n.includes(".") ? wE(r, n) : () => r[n];
        if (Wt(e)) {
            const o = t[e];
            He(o) && Qi(s, o)
        } else if (He(e)) Qi(s, e.bind(r));
        else if (At(e))
            if (ke(e)) e.forEach(o => kE(o, t, r, n));
            else {
                const o = He(e.handler) ? e.handler.bind(r) : t[e.handler];
                He(o) && Qi(s, o, e)
            }
    }

    function xE(e) {
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
        return u ? f = u : !s.length && !r && !n ? f = t : (f = {}, s.length && s.forEach(h => Kl(f, h, l, !0)), Kl(f, t, l)), o.set(t, f), f
    }

    function Kl(e, t, r, n = !1) {
        const {
            mixins: s,
            extends: o
        } = t;
        o && Kl(e, o, r, !0), s && s.forEach(l => Kl(e, l, r, !0));
        for (const l in t)
            if (!(n && l === "expose")) {
                const u = RR[l] || r && r[l];
                e[l] = u ? u(e[l], t[l]) : t[l]
            } return e
    }
    const RR = {
        data: Lv,
        props: ji,
        emits: ji,
        methods: ji,
        computed: ji,
        beforeCreate: pr,
        created: pr,
        beforeMount: pr,
        mounted: pr,
        beforeUpdate: pr,
        updated: pr,
        beforeDestroy: pr,
        beforeUnmount: pr,
        destroyed: pr,
        unmounted: pr,
        activated: pr,
        deactivated: pr,
        errorCaptured: pr,
        serverPrefetch: pr,
        components: ji,
        directives: ji,
        watch: kR,
        provide: Lv,
        inject: LR
    };

    function Lv(e, t) {
        return t ? e ? function() {
            return tr(He(e) ? e.call(this, this) : e, He(t) ? t.call(this, this) : t)
        } : t : e
    }

    function LR(e, t) {
        return ji(_d(e), _d(t))
    }

    function _d(e) {
        if (ke(e)) {
            const t = {};
            for (let r = 0; r < e.length; r++) t[e[r]] = e[r];
            return t
        }
        return e
    }

    function pr(e, t) {
        return e ? [...new Set([].concat(e, t))] : t
    }

    function ji(e, t) {
        return e ? tr(tr(Object.create(null), e), t) : t
    }

    function kR(e, t) {
        if (!e) return t;
        if (!t) return e;
        const r = tr(Object.create(null), e);
        for (const n in t) r[n] = pr(e[n], t[n]);
        return r
    }

    function xR(e, t, r, n = !1) {
        const s = {},
            o = {};
        Ul(o, Sc, 1), e.propsDefaults = Object.create(null), DE(e, t, s, o);
        for (const l in e.propsOptions[0]) l in s || (s[l] = void 0);
        r ? e.props = n ? s : YP(s) : e.type.props ? e.props = s : e.props = o, e.attrs = o
    }

    function DR(e, t, r, n) {
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
                    if (vc(e.emitsOptions, E)) continue;
                    const $ = t[E];
                    if (f)
                        if (Ze(o, E)) $ !== o[E] && (o[E] = $, h = !0);
                        else {
                            const L = On(E);
                            s[L] = bd(f, u, L, $, e, !1)
                        }
                    else $ !== o[E] && (o[E] = $, h = !0)
                }
            }
        } else {
            DE(e, t, s, o) && (h = !0);
            let g;
            for (const _ in u)(!t || !Ze(t, _) && ((g = as(_)) === _ || !Ze(t, g))) && (f ? r && (r[_] !== void 0 || r[g] !== void 0) && (s[_] = bd(f, u, _, void 0, e, !0)) : delete s[_]);
            if (o !== u)
                for (const _ in o)(!t || !Ze(t, _) && !0) && (delete o[_], h = !0)
        }
        h && Fn(e, "set", "$attrs")
    }

    function DE(e, t, r, n) {
        const [s, o] = e.propsOptions;
        let l = !1,
            u;
        if (t)
            for (let f in t) {
                if (Rl(f)) continue;
                const h = t[f];
                let g;
                s && Ze(s, g = On(f)) ? !o || !o.includes(g) ? r[g] = h : (u || (u = {}))[g] = h : vc(e.emitsOptions, f) || (!(f in n) || h !== n[f]) && (n[f] = h, l = !0)
            }
        if (o) {
            const f = st(r),
                h = u || gt;
            for (let g = 0; g < o.length; g++) {
                const _ = o[g];
                r[_] = bd(s, f, _, h[_], e, !Ze(h, _))
            }
        }
        return l
    }

    function bd(e, t, r, n, s, o) {
        const l = e[r];
        if (l != null) {
            const u = Ze(l, "default");
            if (u && n === void 0) {
                const f = l.default;
                if (l.type !== Function && He(f)) {
                    const {
                        propsDefaults: h
                    } = s;
                    r in h ? n = h[r] : (qs(s), n = h[r] = f.call(null, t), Zi())
                } else n = f
            }
            l[0] && (o && !u ? n = !1 : l[1] && (n === "" || n === as(r)) && (n = !0))
        }
        return n
    }

    function ME(e, t, r = !1) {
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
                const [E, $] = ME(_, t, !0);
                tr(l, E), $ && u.push(...$)
            };
            !r && t.mixins.length && t.mixins.forEach(g), e.extends && g(e.extends), e.mixins && e.mixins.forEach(g)
        }
        if (!o && !f) return n.set(e, Ds), Ds;
        if (ke(o))
            for (let g = 0; g < o.length; g++) {
                const _ = On(o[g]);
                kv(_) && (l[_] = gt)
            } else if (o)
                for (const g in o) {
                    const _ = On(g);
                    if (kv(_)) {
                        const E = o[g],
                            $ = l[_] = ke(E) || He(E) ? {
                                type: E
                            } : E;
                        if ($) {
                            const L = Mv(Boolean, $.type),
                                M = Mv(String, $.type);
                            $[0] = L > -1, $[1] = M < 0 || L < M, (L > -1 || Ze($, "default")) && u.push(_)
                        }
                    }
                }
        const h = [l, u];
        return n.set(e, h), h
    }

    function kv(e) {
        return e[0] !== "$"
    }

    function xv(e) {
        const t = e && e.toString().match(/^\s*function (\w+)/);
        return t ? t[1] : e === null ? "null" : ""
    }

    function Dv(e, t) {
        return xv(e) === xv(t)
    }

    function Mv(e, t) {
        return ke(t) ? t.findIndex(r => Dv(r, e)) : He(t) && Dv(t, e) ? 0 : -1
    }
    const FE = e => e[0] === "_" || e === "$stable",
        Lh = e => ke(e) ? e.map(Tn) : [Tn(e)],
        MR = (e, t, r) => {
            if (t._n) return t;
            const n = Ih((...s) => Lh(t(...s)), r);
            return n._c = !1, n
        },
        BE = (e, t, r) => {
            const n = e._ctx;
            for (const s in e) {
                if (FE(s)) continue;
                const o = e[s];
                if (He(o)) t[s] = MR(s, o, n);
                else if (o != null) {
                    const l = Lh(o);
                    t[s] = () => l
                }
            }
        },
        UE = (e, t) => {
            const r = Lh(t);
            e.slots.default = () => r
        },
        FR = (e, t) => {
            if (e.vnode.shapeFlag & 32) {
                const r = t._;
                r ? (e.slots = st(t), Ul(t, "_", r)) : BE(t, e.slots = {})
            } else e.slots = {}, t && UE(e, t);
            Ul(e.slots, Sc, 1)
        },
        BR = (e, t, r) => {
            const {
                vnode: n,
                slots: s
            } = e;
            let o = !0,
                l = gt;
            if (n.shapeFlag & 32) {
                const u = t._;
                u ? r && u === 1 ? o = !1 : (tr(s, t), !r && u === 1 && delete s._) : (o = !t.$stable, BE(t, s)), l = t
            } else t && (UE(e, t), l = {
                default: 1
            });
            if (o)
                for (const u in s) !FE(u) && !(u in l) && delete s[u]
        };

    function jE() {
        return {
            app: null,
            config: {
                isNativeTag: pP,
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
    let UR = 0;

    function jR(e, t) {
        return function(n, s = null) {
            He(n) || (n = Object.assign({}, n)), s != null && !At(s) && (s = null);
            const o = jE(),
                l = new Set;
            let u = !1;
            const f = o.app = {
                _uid: UR++,
                _component: n,
                _props: s,
                _container: null,
                _context: o,
                _instance: null,
                version: iL,
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
                        const E = wt(n, s);
                        return E.appContext = o, g && t ? t(E, h) : e(E, h, _), u = !0, f._container = h, h.__vue_app__ = f, Oc(E.component) || E.component.proxy
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

    function Ed(e, t, r, n, s = !1) {
        if (ke(e)) {
            e.forEach((E, $) => Ed(E, t && (ke(t) ? t[$] : t), r, n, s));
            return
        }
        if (Ba(n) && !s) return;
        const o = n.shapeFlag & 4 ? Oc(n.component) || n.component.proxy : n.el,
            l = s ? null : o,
            {
                i: u,
                r: f
            } = e,
            h = t && t.r,
            g = u.refs === gt ? u.refs = {} : u.refs,
            _ = u.setupState;
        if (h != null && h !== f && (Wt(h) ? (g[h] = null, Ze(_, h) && (_[h] = null)) : Qt(h) && (h.value = null)), He(f)) ci(f, u, 12, [l, g]);
        else {
            const E = Wt(f),
                $ = Qt(f);
            if (E || $) {
                const L = () => {
                    if (e.f) {
                        const M = E ? g[f] : f.value;
                        s ? ke(M) && yh(M, o) : ke(M) ? M.includes(o) || M.push(o) : E ? (g[f] = [o], Ze(_, f) && (_[f] = g[f])) : (f.value = [o], e.k && (g[e.k] = f.value))
                    } else E ? (g[f] = l, Ze(_, f) && (_[f] = l)) : $ && (f.value = l, e.k && (g[e.k] = l))
                };
                l ? (L.id = -1, Tr(L, r)) : L()
            }
        }
    }
    const Tr = hR;

    function GR(e) {
        return WR(e)
    }

    function WR(e, t) {
        const r = bP();
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
            cloneNode: L,
            insertStaticContent: M
        } = e, U = (m, p, O, D = null, B = null, Y = null, ce = !1, se = null, re = !!p.dynamicChildren) => {
            if (m === p) return;
            m && !Hi(m, p) && (D = Tt(m), Ct(m, B, Y, !0), m = null), p.patchFlag === -2 && (re = !1, p.dynamicChildren = null);
            const {
                type: A,
                ref: K,
                shapeFlag: he
            } = p;
            switch (A) {
                case Tc:
                    C(m, p, O, D);
                    break;
                case Qr:
                    V(m, p, O, D);
                    break;
                case vf:
                    m == null && X(p, O, D, ce);
                    break;
                case ze:
                    $e(m, p, O, D, B, Y, ce, se, re);
                    break;
                default:
                    he & 1 ? Q(m, p, O, D, B, Y, ce, se, re) : he & 6 ? F(m, p, O, D, B, Y, ce, se, re) : (he & 64 || he & 128) && A.process(m, p, O, D, B, Y, ce, se, re, kt)
            }
            K != null && B && Ed(K, m && m.ref, Y, p || m, !p)
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
        }, G = ({
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
        }, Q = (m, p, O, D, B, Y, ce, se, re) => {
            ce = ce || p.type === "svg", m == null ? oe(p, O, D, B, Y, ce, se, re) : Ae(m, p, B, Y, ce, se, re)
        }, oe = (m, p, O, D, B, Y, ce, se) => {
            let re, A;
            const {
                type: K,
                props: he,
                shapeFlag: pe,
                transition: Ne,
                patchFlag: De,
                dirs: w
            } = m;
            if (m.el && L !== void 0 && De === -1) re = m.el = L(m.el);
            else {
                if (re = m.el = l(m.type, Y, he && he.is, he), pe & 8 ? g(re, m.children) : pe & 16 && ue(m.children, re, null, D, B, Y && K !== "foreignObject", ce, se), w && ki(m, null, D, "created"), he) {
                    for (const P in he) P !== "value" && !Rl(P) && o(re, P, null, he[P], Y, m.children, D, B, at);
                    "value" in he && o(re, "value", null, he.value), (A = he.onVnodeBeforeMount) && vn(A, D, m)
                }
                le(re, m, m.scopeId, ce, D)
            }
            w && ki(m, null, D, "beforeMount");
            const T = (!B || B && !B.pendingBranch) && Ne && !Ne.persisted;
            T && Ne.beforeEnter(re), n(re, p, O), ((A = he && he.onVnodeMounted) || T || w) && Tr(() => {
                A && vn(A, D, m), T && Ne.enter(re), w && ki(m, null, D, "mounted")
            }, B)
        }, le = (m, p, O, D, B) => {
            if (O && $(m, O), D)
                for (let Y = 0; Y < D.length; Y++) $(m, D[Y]);
            if (B) {
                let Y = B.subTree;
                if (p === Y) {
                    const ce = B.vnode;
                    le(m, ce, ce.scopeId, ce.slotScopeIds, B.parent)
                }
            }
        }, ue = (m, p, O, D, B, Y, ce, se, re = 0) => {
            for (let A = re; A < m.length; A++) {
                const K = m[A] = se ? ni(m[A]) : Tn(m[A]);
                U(null, K, p, O, D, B, Y, ce, se)
            }
        }, Ae = (m, p, O, D, B, Y, ce) => {
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
            O && xi(O, !1), (Ne = pe.onVnodeBeforeUpdate) && vn(Ne, O, p, m), K && ki(p, m, O, "beforeUpdate"), O && xi(O, !0);
            const De = B && p.type !== "foreignObject";
            if (A ? Ce(m.dynamicChildren, A, se, O, D, De, Y) : ce || Oe(m, p, se, null, O, D, De, Y, !1), re > 0) {
                if (re & 16) fe(se, p, he, pe, O, D, B);
                else if (re & 2 && he.class !== pe.class && o(se, "class", null, pe.class, B), re & 4 && o(se, "style", he.style, pe.style, B), re & 8) {
                    const w = p.dynamicProps;
                    for (let T = 0; T < w.length; T++) {
                        const P = w[T],
                            S = he[P],
                            R = pe[P];
                        (R !== S || P === "value") && o(se, P, S, R, B, m.children, O, D, at)
                    }
                }
                re & 1 && m.children !== p.children && g(se, p.children)
            } else !ce && A == null && fe(se, p, he, pe, O, D, B);
            ((Ne = pe.onVnodeUpdated) || K) && Tr(() => {
                Ne && vn(Ne, O, p, m), K && ki(p, m, O, "updated")
            }, D)
        }, Ce = (m, p, O, D, B, Y, ce) => {
            for (let se = 0; se < p.length; se++) {
                const re = m[se],
                    A = p[se],
                    K = re.el && (re.type === ze || !Hi(re, A) || re.shapeFlag & 70) ? _(re.el) : O;
                U(re, A, K, null, D, B, Y, ce, !0)
            }
        }, fe = (m, p, O, D, B, Y, ce) => {
            if (O !== D) {
                for (const se in D) {
                    if (Rl(se)) continue;
                    const re = D[se],
                        A = O[se];
                    re !== A && se !== "value" && o(m, se, A, re, ce, p.children, B, Y, at)
                }
                if (O !== gt)
                    for (const se in O) !Rl(se) && !(se in D) && o(m, se, O[se], null, ce, p.children, B, Y, at);
                "value" in D && o(m, "value", O.value, D.value)
            }
        }, $e = (m, p, O, D, B, Y, ce, se, re) => {
            const A = p.el = m ? m.el : u(""),
                K = p.anchor = m ? m.anchor : u("");
            let {
                patchFlag: he,
                dynamicChildren: pe,
                slotScopeIds: Ne
            } = p;
            Ne && (se = se ? se.concat(Ne) : Ne), m == null ? (n(A, O, D), n(K, O, D), ue(p.children, O, K, B, Y, ce, se, re)) : he > 0 && he & 64 && pe && m.dynamicChildren ? (Ce(m.dynamicChildren, pe, O, B, Y, ce, se), (p.key != null || B && p === B.subTree) && GE(m, p, !0)) : Oe(m, p, O, K, B, Y, ce, se, re)
        }, F = (m, p, O, D, B, Y, ce, se, re) => {
            p.slotScopeIds = se, m == null ? p.shapeFlag & 512 ? B.ctx.activate(p, O, D, ce, re) : ie(p, O, D, B, Y, ce, re) : de(m, p, re)
        }, ie = (m, p, O, D, B, Y, ce) => {
            const se = m.component = JR(m, D, B);
            if (_c(m) && (se.ctx.renderer = kt), QR(se), se.asyncDep) {
                if (B && B.registerDep(se, be), !m.el) {
                    const re = se.subTree = wt(Qr);
                    V(null, re, p, O)
                }
                return
            }
            be(se, m, p, O, B, Y, ce)
        }, de = (m, p, O) => {
            const D = p.component = m.component;
            if (uR(m, p, O))
                if (D.asyncDep && !D.asyncResolved) {
                    ve(D, p, O);
                    return
                } else D.next = p, iR(D.update), D.update();
            else p.el = m.el, D.vnode = p
        }, be = (m, p, O, D, B, Y, ce) => {
            const se = () => {
                    if (m.isMounted) {
                        let {
                            next: K,
                            bu: he,
                            u: pe,
                            parent: Ne,
                            vnode: De
                        } = m, w = K, T;
                        xi(m, !1), K ? (K.el = De.el, ve(m, K, ce)) : K = De, he && Ll(he), (T = K.props && K.props.onVnodeBeforeUpdate) && vn(T, Ne, K, De), xi(m, !0);
                        const P = gf(m),
                            S = m.subTree;
                        m.subTree = P, U(S, P, _(S.el), Tt(S), m, B, Y), K.el = P.el, w === null && fR(m, P.el), pe && Tr(pe, B), (T = K.props && K.props.onVnodeUpdated) && Tr(() => vn(T, Ne, K, De), B)
                    } else {
                        let K;
                        const {
                            el: he,
                            props: pe
                        } = p, {
                            bm: Ne,
                            m: De,
                            parent: w
                        } = m, T = Ba(p);
                        if (xi(m, !1), Ne && Ll(Ne), !T && (K = pe && pe.onVnodeBeforeMount) && vn(K, w, p), xi(m, !0), he && xt) {
                            const P = () => {
                                m.subTree = gf(m), xt(he, m.subTree, m, B, null)
                            };
                            T ? p.type.__asyncLoader().then(() => !m.isUnmounted && P()) : P()
                        } else {
                            const P = m.subTree = gf(m);
                            U(null, P, O, D, m, B, Y), p.el = P.el
                        }
                        if (De && Tr(De, B), !T && (K = pe && pe.onVnodeMounted)) {
                            const P = p;
                            Tr(() => vn(K, w, P), B)
                        }(p.shapeFlag & 256 || w && Ba(w.vnode) && w.vnode.shapeFlag & 256) && m.a && Tr(m.a, B), m.isMounted = !0, p = O = D = null
                    }
                },
                re = m.effect = new Eh(se, () => yE(A), m.scope),
                A = m.update = () => re.run();
            A.id = m.uid, xi(m, !0), A()
        }, ve = (m, p, O) => {
            p.component = m;
            const D = m.vnode.props;
            m.vnode = p, m.next = null, DR(m, p.props, D, O), BR(m, p.children, O), ea(), mc(void 0, m.update), ta()
        }, Oe = (m, p, O, D, B, Y, ce, se, re = !1) => {
            const A = m && m.children,
                K = m ? m.shapeFlag : 0,
                he = p.children,
                {
                    patchFlag: pe,
                    shapeFlag: Ne
                } = p;
            if (pe > 0) {
                if (pe & 128) {
                    Ge(A, he, O, D, B, Y, ce, se, re);
                    return
                } else if (pe & 256) {
                    Fe(A, he, O, D, B, Y, ce, se, re);
                    return
                }
            }
            Ne & 8 ? (K & 16 && at(A, B, Y), he !== A && g(O, he)) : K & 16 ? Ne & 16 ? Ge(A, he, O, D, B, Y, ce, se, re) : at(A, B, Y, !0) : (K & 8 && g(O, ""), Ne & 16 && ue(he, O, D, B, Y, ce, se, re))
        }, Fe = (m, p, O, D, B, Y, ce, se, re) => {
            m = m || Ds, p = p || Ds;
            const A = m.length,
                K = p.length,
                he = Math.min(A, K);
            let pe;
            for (pe = 0; pe < he; pe++) {
                const Ne = p[pe] = re ? ni(p[pe]) : Tn(p[pe]);
                U(m[pe], Ne, O, null, B, Y, ce, se, re)
            }
            A > K ? at(m, B, Y, !0, !1, he) : ue(p, O, D, B, Y, ce, se, re, he)
        }, Ge = (m, p, O, D, B, Y, ce, se, re) => {
            let A = 0;
            const K = p.length;
            let he = m.length - 1,
                pe = K - 1;
            for (; A <= he && A <= pe;) {
                const Ne = m[A],
                    De = p[A] = re ? ni(p[A]) : Tn(p[A]);
                if (Hi(Ne, De)) U(Ne, De, O, null, B, Y, ce, se, re);
                else break;
                A++
            }
            for (; A <= he && A <= pe;) {
                const Ne = m[he],
                    De = p[pe] = re ? ni(p[pe]) : Tn(p[pe]);
                if (Hi(Ne, De)) U(Ne, De, O, null, B, Y, ce, se, re);
                else break;
                he--, pe--
            }
            if (A > he) {
                if (A <= pe) {
                    const Ne = pe + 1,
                        De = Ne < K ? p[Ne].el : D;
                    for (; A <= pe;) U(null, p[A] = re ? ni(p[A]) : Tn(p[A]), O, De, B, Y, ce, se, re), A++
                }
            } else if (A > pe)
                for (; A <= he;) Ct(m[A], B, Y, !0), A++;
            else {
                const Ne = A,
                    De = A,
                    w = new Map;
                for (A = De; A <= pe; A++) {
                    const Te = p[A] = re ? ni(p[A]) : Tn(p[A]);
                    Te.key != null && w.set(Te.key, A)
                }
                let T, P = 0;
                const S = pe - De + 1;
                let R = !1,
                    Z = 0;
                const ne = new Array(S);
                for (A = 0; A < S; A++) ne[A] = 0;
                for (A = Ne; A <= he; A++) {
                    const Te = m[A];
                    if (P >= S) {
                        Ct(Te, B, Y, !0);
                        continue
                    }
                    let ft;
                    if (Te.key != null) ft = w.get(Te.key);
                    else
                        for (T = De; T <= pe; T++)
                            if (ne[T - De] === 0 && Hi(Te, p[T])) {
                                ft = T;
                                break
                            } ft === void 0 ? Ct(Te, B, Y, !0) : (ne[ft - De] = A + 1, ft >= Z ? Z = ft : R = !0, U(Te, p[ft], O, null, B, Y, ce, se, re), P++)
                }
                const _e = R ? HR(ne) : Ds;
                for (T = _e.length - 1, A = S - 1; A >= 0; A--) {
                    const Te = De + A,
                        ft = p[Te],
                        nr = Te + 1 < K ? p[Te + 1].el : D;
                    ne[A] === 0 ? U(null, ft, O, nr, B, Y, ce, se, re) : R && (T < 0 || A !== _e[T] ? tt(ft, O, nr, 2) : T--)
                }
            }
        }, tt = (m, p, O, D, B = null) => {
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
                ce.move(m, p, O, kt);
                return
            }
            if (ce === ze) {
                n(Y, p, O);
                for (let he = 0; he < re.length; he++) tt(re[he], p, O, D);
                n(m.anchor, p, O);
                return
            }
            if (ce === vf) {
                G(m, p, O);
                return
            }
            if (D !== 2 && A & 1 && se)
                if (D === 0) se.beforeEnter(Y), n(Y, p, O), Tr(() => se.enter(Y), B);
                else {
                    const {
                        leave: he,
                        delayLeave: pe,
                        afterLeave: Ne
                    } = se, De = () => n(Y, p, O), w = () => {
                        he(Y, () => {
                            De(), Ne && Ne()
                        })
                    };
                    pe ? pe(Y, De, w) : w()
                }
            else n(Y, p, O)
        }, Ct = (m, p, O, D = !1, B = !1) => {
            const {
                type: Y,
                props: ce,
                ref: se,
                children: re,
                dynamicChildren: A,
                shapeFlag: K,
                patchFlag: he,
                dirs: pe
            } = m;
            if (se != null && Ed(se, null, O, m, !0), K & 256) {
                p.ctx.deactivate(m);
                return
            }
            const Ne = K & 1 && pe,
                De = !Ba(m);
            let w;
            if (De && (w = ce && ce.onVnodeBeforeUnmount) && vn(w, p, m), K & 6) mr(m.component, O, D);
            else {
                if (K & 128) {
                    m.suspense.unmount(O, D);
                    return
                }
                Ne && ki(m, null, p, "beforeUnmount"), K & 64 ? m.type.remove(m, p, O, B, kt, D) : A && (Y !== ze || he > 0 && he & 64) ? at(A, p, O, !1, !0) : (Y === ze && he & 384 || !B && K & 16) && at(re, p, O), D && $r(m)
            }(De && (w = ce && ce.onVnodeUnmounted) || Ne) && Tr(() => {
                w && vn(w, p, m), Ne && ki(m, null, p, "unmounted")
            }, O)
        }, $r = m => {
            const {
                type: p,
                el: O,
                anchor: D,
                transition: B
            } = m;
            if (p === ze) {
                rr(O, D);
                return
            }
            if (p === vf) {
                j(m);
                return
            }
            const Y = () => {
                s(O), B && !B.persisted && B.afterLeave && B.afterLeave()
            };
            if (m.shapeFlag & 1 && B && !B.persisted) {
                const {
                    leave: ce,
                    delayLeave: se
                } = B, re = () => ce(O, Y);
                se ? se(m.el, Y, re) : re()
            } else Y()
        }, rr = (m, p) => {
            let O;
            for (; m !== p;) O = E(m), s(m), m = O;
            s(p)
        }, mr = (m, p, O) => {
            const {
                bum: D,
                scope: B,
                update: Y,
                subTree: ce,
                um: se
            } = m;
            D && Ll(D), B.stop(), Y && (Y.active = !1, Ct(ce, m, p, O)), se && Tr(se, p), Tr(() => {
                m.isUnmounted = !0
            }, p), p && p.pendingBranch && !p.isUnmounted && m.asyncDep && !m.asyncResolved && m.suspenseId === p.pendingId && (p.deps--, p.deps === 0 && p.resolve())
        }, at = (m, p, O, D = !1, B = !1, Y = 0) => {
            for (let ce = Y; ce < m.length; ce++) Ct(m[ce], p, O, D, B)
        }, Tt = m => m.shapeFlag & 6 ? Tt(m.component.subTree) : m.shapeFlag & 128 ? m.suspense.next() : E(m.anchor || m.el), ot = (m, p, O) => {
            m == null ? p._vnode && Ct(p._vnode, null, null, !0) : U(p._vnode || null, m, p, null, null, null, O), EE(), p._vnode = m
        }, kt = {
            p: U,
            um: Ct,
            m: tt,
            r: $r,
            mt: ie,
            mc: ue,
            pc: Oe,
            pbc: Ce,
            n: Tt,
            o: e
        };
        let Ht, xt;
        return t && ([Ht, xt] = t(kt)), {
            render: ot,
            hydrate: Ht,
            createApp: jR(ot, Ht)
        }
    }

    function xi({
        effect: e,
        update: t
    }, r) {
        e.allowRecurse = t.allowRecurse = r
    }

    function GE(e, t, r = !1) {
        const n = e.children,
            s = t.children;
        if (ke(n) && ke(s))
            for (let o = 0; o < n.length; o++) {
                const l = n[o];
                let u = s[o];
                u.shapeFlag & 1 && !u.dynamicChildren && ((u.patchFlag <= 0 || u.patchFlag === 32) && (u = s[o] = ni(s[o]), u.el = l.el), r || GE(l, u))
            }
    }

    function HR(e) {
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
    const KR = e => e.__isTeleport,
        ze = Symbol(void 0),
        Tc = Symbol(void 0),
        Qr = Symbol(void 0),
        vf = Symbol(void 0),
        Ua = [];
    let ln = null;

    function W(e = !1) {
        Ua.push(ln = e ? null : [])
    }

    function VR() {
        Ua.pop(), ln = Ua[Ua.length - 1] || null
    }
    let Za = 1;

    function Fv(e) {
        Za += e
    }

    function WE(e) {
        return e.dynamicChildren = Za > 0 ? ln || Ds : null, VR(), Za > 0 && ln && ln.push(e), e
    }

    function z(e, t, r, n, s, o) {
        return WE(H(e, t, r, n, s, o, !0))
    }

    function fn(e, t, r, n, s) {
        return WE(wt(e, t, r, n, s, !0))
    }

    function Vl(e) {
        return e ? e.__v_isVNode === !0 : !1
    }

    function Hi(e, t) {
        return e.type === t.type && e.key === t.key
    }
    const Sc = "__vInternal",
        HE = ({
            key: e
        }) => e != null ? e : null,
        kl = ({
            ref: e,
            ref_key: t,
            ref_for: r
        }) => e != null ? Wt(e) || Qt(e) || He(e) ? {
            i: or,
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
            key: t && HE(t),
            ref: t && kl(t),
            scopeId: yc,
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
        return u ? (kh(f, r), o & 128 && e.normalize(f)) : r && (f.shapeFlag |= Wt(r) ? 8 : 16), Za > 0 && !l && ln && (f.patchFlag > 0 || o & 6) && f.patchFlag !== 32 && ln.push(f), f
    }
    const wt = qR;

    function qR(e, t = null, r = null, n = 0, s = null, o = !1) {
        if ((!e || e === RE) && (e = Qr), Vl(e)) {
            const u = di(e, t, !0);
            return r && kh(u, r), Za > 0 && !o && ln && (u.shapeFlag & 6 ? ln[ln.indexOf(e)] = u : ln.push(u)), u.patchFlag |= -2, u
        }
        if (nL(e) && (e = e.__vccOpts), t) {
            t = YR(t);
            let {
                class: u,
                style: f
            } = t;
            u && !Wt(u) && (t.class = xe(u)), At(f) && (fE(f) && !ke(f) && (f = tr({}, f)), t.style = lc(f))
        }
        const l = Wt(e) ? 1 : dR(e) ? 128 : KR(e) ? 64 : At(e) ? 4 : He(e) ? 2 : 0;
        return H(e, t, r, n, s, l, o, !0)
    }

    function YR(e) {
        return e ? fE(e) || Sc in e ? tr({}, e) : e : null
    }

    function di(e, t, r = !1) {
        const {
            props: n,
            ref: s,
            patchFlag: o,
            children: l
        } = e, u = t ? fo(n || {}, t) : n;
        return {
            __v_isVNode: !0,
            __v_skip: !0,
            type: e.type,
            props: u,
            key: u && HE(u),
            ref: t && t.ref ? r && s ? ke(s) ? s.concat(kl(t)) : [s, kl(t)] : kl(t) : s,
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
        return wt(Tc, null, e, t)
    }

    function Se(e = "", t = !1) {
        return t ? (W(), fn(Qr, null, e)) : wt(Qr, null, e)
    }

    function Tn(e) {
        return e == null || typeof e == "boolean" ? wt(Qr) : ke(e) ? wt(ze, null, e.slice()) : typeof e == "object" ? ni(e) : wt(Tc, null, String(e))
    }

    function ni(e) {
        return e.el === null || e.memo ? e : di(e)
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
                !s && !(Sc in t) ? t._ctx = or : s === 3 && or && (or.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024))
            }
        else He(t) ? (t = {
            default: t,
            _ctx: or
        }, r = 32) : (t = String(t), n & 64 ? (r = 16, t = [hi(t)]) : r = 8);
        e.children = t, e.shapeFlag |= r
    }

    function fo(...e) {
        const t = {};
        for (let r = 0; r < e.length; r++) {
            const n = e[r];
            for (const s in n)
                if (s === "class") t.class !== n.class && (t.class = xe([t.class, n.class]));
                else if (s === "style") t.style = lc([t.style, n.style]);
            else if (uc(s)) {
                const o = t[s],
                    l = n[s];
                l && o !== l && !(ke(o) && o.includes(l)) && (t[s] = o ? [].concat(o, l) : l)
            } else s !== "" && (t[s] = n[s])
        }
        return t
    }

    function vn(e, t, r, n = null) {
        Jr(e, t, 7, [r, n])
    }
    const zR = jE();
    let XR = 0;

    function JR(e, t, r) {
        const n = e.type,
            s = (t ? t.appContext : e.appContext) || zR,
            o = {
                uid: XR++,
                vnode: e,
                type: n,
                parent: t,
                appContext: s,
                root: null,
                next: null,
                subTree: null,
                effect: null,
                update: null,
                scope: new Zb(!0),
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
                propsOptions: ME(n, s),
                emitsOptions: SE(n, s),
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
        }, o.root = t ? t.root : o, o.emit = oR.bind(null, o), e.ce && e.ce(o), o
    }
    let qt = null;
    const ss = () => qt || or,
        qs = e => {
            qt = e, e.scope.on()
        },
        Zi = () => {
            qt && qt.scope.off(), qt = null
        };

    function KE(e) {
        return e.vnode.shapeFlag & 4
    }
    let eo = !1;

    function QR(e, t = !1) {
        eo = t;
        const {
            props: r,
            children: n
        } = e.vnode, s = KE(e);
        xR(e, r, s, t), FR(e, n);
        const o = s ? ZR(e, t) : void 0;
        return eo = !1, o
    }

    function ZR(e, t) {
        const r = e.type;
        e.accessCache = Object.create(null), e.proxy = dE(new Proxy(e.ctx, AR));
        const {
            setup: n
        } = r;
        if (n) {
            const s = e.setupContext = n.length > 1 ? tL(e) : null;
            qs(e), ea();
            const o = ci(n, e, 0, [e.props, s]);
            if (ta(), Zi(), Xb(o)) {
                if (o.then(Zi, Zi), t) return o.then(l => {
                    Bv(e, l, t)
                }).catch(l => {
                    gc(l, e, 0)
                });
                e.asyncDep = o
            } else Bv(e, o, t)
        } else VE(e, t)
    }

    function Bv(e, t, r) {
        He(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : At(t) && (e.setupState = mE(t)), VE(e, r)
    }
    let Uv;

    function VE(e, t, r) {
        const n = e.type;
        if (!e.render) {
            if (!t && Uv && !n.render) {
                const s = n.template;
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
                    n.render = Uv(s, h)
                }
            }
            e.render = n.render || cn
        }
        qs(e), ea(), NR(e), ta(), Zi()
    }

    function eL(e) {
        return new Proxy(e.attrs, {
            get(t, r) {
                return xr(e, "get", "$attrs"), t[r]
            }
        })
    }

    function tL(e) {
        const t = n => {
            e.exposed = n || {}
        };
        let r;
        return {
            get attrs() {
                return r || (r = eL(e))
            },
            slots: e.slots,
            emit: e.emit,
            expose: t
        }
    }

    function Oc(e) {
        if (e.exposed) return e.exposeProxy || (e.exposeProxy = new Proxy(mE(dE(e.exposed)), {
            get(t, r) {
                if (r in t) return t[r];
                if (r in Hl) return Hl[r](e)
            }
        }))
    }

    function rL(e, t = !0) {
        return He(e) ? e.displayName || e.name : e.name || t && e.__name
    }

    function nL(e) {
        return He(e) && "__vccOpts" in e
    }
    const kr = (e, t) => eR(e, t, eo);

    function xh(e, t, r) {
        const n = arguments.length;
        return n === 2 ? At(t) && !ke(t) ? Vl(t) ? wt(e, null, [t]) : wt(e, t) : wt(e, null, t) : (n > 3 ? r = Array.prototype.slice.call(arguments, 2) : n === 3 && Vl(r) && (r = [r]), wt(e, t, r))
    }
    const iL = "3.2.37",
        sL = "http://www.w3.org/2000/svg",
        Ki = typeof document < "u" ? document : null,
        jv = Ki && Ki.createElement("template"),
        aL = {
            insert: (e, t, r) => {
                t.insertBefore(e, r || null)
            },
            remove: e => {
                const t = e.parentNode;
                t && t.removeChild(e)
            },
            createElement: (e, t, r, n) => {
                const s = t ? Ki.createElementNS(sL, e) : Ki.createElement(e, r ? {
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
                    jv.innerHTML = n ? `<svg>${e}</svg>` : e;
                    const u = jv.content;
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

    function oL(e, t, r) {
        const n = e._vtc;
        n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : r ? e.setAttribute("class", t) : e.className = t
    }

    function lL(e, t, r) {
        const n = e.style,
            s = Wt(r);
        if (r && !s) {
            for (const o in r) Td(n, o, r[o]);
            if (t && !Wt(t))
                for (const o in t) r[o] == null && Td(n, o, "")
        } else {
            const o = n.display;
            s ? t !== r && (n.cssText = r) : t && e.removeAttribute("style"), "_vod" in e && (n.display = o)
        }
    }
    const Gv = /\s*!important$/;

    function Td(e, t, r) {
        if (ke(r)) r.forEach(n => Td(e, t, n));
        else if (r == null && (r = ""), t.startsWith("--")) e.setProperty(t, r);
        else {
            const n = cL(e, t);
            Gv.test(r) ? e.setProperty(as(n), r.replace(Gv, ""), "important") : e[n] = r
        }
    }
    const Wv = ["Webkit", "Moz", "ms"],
        yf = {};

    function cL(e, t) {
        const r = yf[t];
        if (r) return r;
        let n = On(t);
        if (n !== "filter" && n in e) return yf[t] = n;
        n = hc(n);
        for (let s = 0; s < Wv.length; s++) {
            const o = Wv[s] + n;
            if (o in e) return yf[t] = o
        }
        return t
    }
    const Hv = "http://www.w3.org/1999/xlink";

    function uL(e, t, r, n, s) {
        if (n && t.startsWith("xlink:")) r == null ? e.removeAttributeNS(Hv, t.slice(6, t.length)) : e.setAttributeNS(Hv, t, r);
        else {
            const o = cP(t);
            r == null || o && !qb(r) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : r)
        }
    }

    function fL(e, t, r, n, s, o, l) {
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
            f === "boolean" ? r = qb(r) : r == null && f === "string" ? (r = "", u = !0) : f === "number" && (r = 0, u = !0)
        }
        try {
            e[t] = r
        } catch {}
        u && e.removeAttribute(t)
    }
    const [qE, dL] = (() => {
        let e = Date.now,
            t = !1;
        if (typeof window < "u") {
            Date.now() > document.createEvent("Event").timeStamp && (e = performance.now.bind(performance));
            const r = navigator.userAgent.match(/firefox\/(\d+)/i);
            t = !!(r && Number(r[1]) <= 53)
        }
        return [e, t]
    })();
    let Sd = 0;
    const hL = Promise.resolve(),
        pL = () => {
            Sd = 0
        },
        gL = () => Sd || (hL.then(pL), Sd = qE());

    function Vi(e, t, r, n) {
        e.addEventListener(t, r, n)
    }

    function mL(e, t, r, n) {
        e.removeEventListener(t, r, n)
    }

    function vL(e, t, r, n, s = null) {
        const o = e._vei || (e._vei = {}),
            l = o[t];
        if (n && l) l.value = n;
        else {
            const [u, f] = yL(t);
            if (n) {
                const h = o[t] = _L(n, s);
                Vi(e, u, h, f)
            } else l && (mL(e, u, l, f), o[t] = void 0)
        }
    }
    const Kv = /(?:Once|Passive|Capture)$/;

    function yL(e) {
        let t;
        if (Kv.test(e)) {
            t = {};
            let r;
            for (; r = e.match(Kv);) e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0
        }
        return [as(e.slice(2)), t]
    }

    function _L(e, t) {
        const r = n => {
            const s = n.timeStamp || qE();
            (dL || s >= r.attached - 1) && Jr(bL(n, r.value), t, 5, [n])
        };
        return r.value = e, r.attached = gL(), r
    }

    function bL(e, t) {
        if (ke(t)) {
            const r = e.stopImmediatePropagation;
            return e.stopImmediatePropagation = () => {
                r.call(e), e._stopped = !0
            }, t.map(n => s => !s._stopped && n && n(s))
        } else return t
    }
    const Vv = /^on[a-z]/,
        EL = (e, t, r, n, s = !1, o, l, u, f) => {
            t === "class" ? oL(e, n, s) : t === "style" ? lL(e, r, n) : uc(t) ? vh(t) || vL(e, t, r, n, l) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : TL(e, t, n, s)) ? fL(e, t, n, o, l, u, f) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), uL(e, t, n, s))
        };

    function TL(e, t, r, n) {
        return n ? !!(t === "innerHTML" || t === "textContent" || t in e && Vv.test(t) && He(r)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || Vv.test(t) && Wt(r) ? !1 : t in e
    }
    const Qn = "transition",
        Ca = "animation",
        wc = (e, {
            slots: t
        }) => xh($E, SL(e), t);
    wc.displayName = "Transition";
    const YE = {
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
    wc.props = tr({}, $E.props, YE);
    const Di = (e, t = []) => {
            ke(e) ? e.forEach(r => r(...t)) : e && e(...t)
        },
        qv = e => e ? ke(e) ? e.some(t => t.length > 1) : e.length > 1 : !1;

    function SL(e) {
        const t = {};
        for (const fe in e) fe in YE || (t[fe] = e[fe]);
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
        } = e, L = OL(s), M = L && L[0], U = L && L[1], {
            onBeforeEnter: C,
            onEnter: V,
            onEnterCancelled: X,
            onLeave: G,
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
            Di(ie, [$e, de]), Yv(() => {
                Mi($e, fe ? f : o), Zn($e, fe ? g : u), qv(ie) || zv($e, n, M, de)
            })
        };
        return tr(t, {
            onBeforeEnter(fe) {
                Di(C, [fe]), Zn(fe, o), Zn(fe, l)
            },
            onBeforeAppear(fe) {
                Di(Q, [fe]), Zn(fe, f), Zn(fe, h)
            },
            onEnter: Ce(!1),
            onAppear: Ce(!0),
            onLeave(fe, $e) {
                fe._isLeaving = !0;
                const F = () => Ae(fe, $e);
                Zn(fe, _), CL(), Zn(fe, E), Yv(() => {
                    !fe._isLeaving || (Mi(fe, _), Zn(fe, $), qv(G) || zv(fe, n, U, F))
                }), Di(G, [fe, F])
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

    function OL(e) {
        if (e == null) return null;
        if (At(e)) return [_f(e.enter), _f(e.leave)]; {
            const t = _f(e);
            return [t, t]
        }
    }

    function _f(e) {
        return jl(e)
    }

    function Zn(e, t) {
        t.split(/\s+/).forEach(r => r && e.classList.add(r)), (e._vtc || (e._vtc = new Set)).add(t)
    }

    function Mi(e, t) {
        t.split(/\s+/).forEach(n => n && e.classList.remove(n));
        const {
            _vtc: r
        } = e;
        r && (r.delete(t), r.size || (e._vtc = void 0))
    }

    function Yv(e) {
        requestAnimationFrame(() => {
            requestAnimationFrame(e)
        })
    }
    let wL = 0;

    function zv(e, t, r, n) {
        const s = e._endId = ++wL,
            o = () => {
                s === e._endId && n()
            };
        if (r) return setTimeout(o, r);
        const {
            type: l,
            timeout: u,
            propCount: f
        } = $L(e, t);
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

    function $L(e, t) {
        const r = window.getComputedStyle(e),
            n = L => (r[L] || "").split(", "),
            s = n(Qn + "Delay"),
            o = n(Qn + "Duration"),
            l = Xv(s, o),
            u = n(Ca + "Delay"),
            f = n(Ca + "Duration"),
            h = Xv(u, f);
        let g = null,
            _ = 0,
            E = 0;
        t === Qn ? l > 0 && (g = Qn, _ = l, E = o.length) : t === Ca ? h > 0 && (g = Ca, _ = h, E = f.length) : (_ = Math.max(l, h), g = _ > 0 ? l > h ? Qn : Ca : null, E = g ? g === Qn ? o.length : f.length : 0);
        const $ = g === Qn && /\b(transform|all)(,|$)/.test(r[Qn + "Property"]);
        return {
            type: g,
            timeout: _,
            propCount: E,
            hasTransform: $
        }
    }

    function Xv(e, t) {
        for (; e.length < t.length;) e = e.concat(e);
        return Math.max(...t.map((r, n) => Jv(r) + Jv(e[n])))
    }

    function Jv(e) {
        return Number(e.slice(0, -1).replace(",", ".")) * 1e3
    }

    function CL() {
        return document.body.offsetHeight
    }
    const ql = e => {
        const t = e.props["onUpdate:modelValue"] || !1;
        return ke(t) ? r => Ll(t, r) : t
    };

    function IL(e) {
        e.target.composing = !0
    }

    function Qv(e) {
        const t = e.target;
        t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")))
    }
    const Od = {
            created(e, {
                modifiers: {
                    lazy: t,
                    trim: r,
                    number: n
                }
            }, s) {
                e._assign = ql(s);
                const o = n || s.props && s.props.type === "number";
                Vi(e, t ? "change" : "input", l => {
                    if (l.target.composing) return;
                    let u = e.value;
                    r && (u = u.trim()), o && (u = jl(u)), e._assign(u)
                }), r && Vi(e, "change", () => {
                    e.value = e.value.trim()
                }), t || (Vi(e, "compositionstart", IL), Vi(e, "compositionend", Qv), Vi(e, "change", Qv))
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
                if (e._assign = ql(o), e.composing || document.activeElement === e && e.type !== "range" && (r || n && e.value.trim() === t || (s || e.type === "number") && jl(e.value) === t)) return;
                const l = t == null ? "" : t;
                e.value !== l && (e.value = l)
            }
        },
        AL = {
            deep: !0,
            created(e, t, r) {
                e._assign = ql(r), Vi(e, "change", () => {
                    const n = e._modelValue,
                        s = NL(e),
                        o = e.checked,
                        l = e._assign;
                    if (ke(n)) {
                        const u = Yb(n, s),
                            f = u !== -1;
                        if (o && !f) l(n.concat(s));
                        else if (!o && f) {
                            const h = [...n];
                            h.splice(u, 1), l(h)
                        }
                    } else if (fc(n)) {
                        const u = new Set(n);
                        o ? u.add(s) : u.delete(s), l(u)
                    } else l(zE(e, o))
                })
            },
            mounted: Zv,
            beforeUpdate(e, t, r) {
                e._assign = ql(r), Zv(e, t, r)
            }
        };

    function Zv(e, {
        value: t,
        oldValue: r
    }, n) {
        e._modelValue = t, ke(t) ? e.checked = Yb(t, n.props.value) > -1 : fc(t) ? e.checked = t.has(n.props.value) : t !== r && (e.checked = cc(t, zE(e, !0)))
    }

    function NL(e) {
        return "_value" in e ? e._value : e.value
    }

    function zE(e, t) {
        const r = t ? "_trueValue" : "_falseValue";
        return r in e ? e[r] : t
    }
    const PL = ["ctrl", "shift", "alt", "meta"],
        RL = {
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
            exact: (e, t) => PL.some(r => e[`${r}Key`] && !t.includes(r))
        },
        Zt = (e, t) => (r, ...n) => {
            for (let s = 0; s < t.length; s++) {
                const o = RL[t[s]];
                if (o && o(r, t)) return
            }
            return e(r, ...n)
        },
        LL = {
            esc: "escape",
            space: " ",
            up: "arrow-up",
            left: "arrow-left",
            right: "arrow-right",
            down: "arrow-down",
            delete: "backspace"
        },
        XE = (e, t) => r => {
            if (!("key" in r)) return;
            const n = as(r.key);
            if (t.some(s => s === n || LL[s] === n)) return e(r)
        },
        JE = {
            beforeMount(e, {
                value: t
            }, {
                transition: r
            }) {
                e._vod = e.style.display === "none" ? "" : e.style.display, r && t ? r.beforeEnter(e) : Ia(e, t)
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
                !t != !r && (n ? t ? (n.beforeEnter(e), Ia(e, !0), n.enter(e)) : n.leave(e, () => {
                    Ia(e, !1)
                }) : Ia(e, t))
            },
            beforeUnmount(e, {
                value: t
            }) {
                Ia(e, t)
            }
        };

    function Ia(e, t) {
        e.style.display = t ? e._vod : "none"
    }
    const kL = tr({
        patchProp: EL
    }, aL);
    let ey;

    function xL() {
        return ey || (ey = GR(kL))
    }
    const DL = (...e) => {
        const t = xL().createApp(...e),
            {
                mount: r
            } = t;
        return t.mount = n => {
            const s = ML(n);
            if (!s) return;
            const o = t._component;
            !He(o) && !o.render && !o.template && (o.template = s.innerHTML), s.innerHTML = "";
            const l = r(s, !1, s instanceof SVGElement);
            return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), l
        }, t
    };

    function ML(e) {
        return Wt(e) ? document.querySelector(e) : e
    }
    const FL = et({
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
        BL = {
            class: "choices"
        },
        UL = {
            class: "constrain"
        },
        jL = {
            key: 0
        },
        GL = ["disabled", "onClick"];

    function WL(e, t, r, n, s, o) {
        const l = Dt("bb");
        return W(), z("div", BL, [H("div", UL, [e.player.prompt ? Ie((W(), z("p", jL, null, 512)), [
            [l, e.player.prompt]
        ]) : Se("", !0), (W(!0), z(ze, null, Or(e.player.choices, (u, f) => (W(), z("button", {
            key: f,
            class: xe({
                selected: u.isSelected
            }),
            disabled: u.isDisabled,
            onClick: Zt(h => e.onChoiceClick(f), ["prevent"])
        }, rt(u.text), 11, GL))), 128))])])
    }
    const HL = ct(FL, [
        ["render", WL]
    ]);
    class Yl {
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

    function KL(e) {
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

    function VL() {
        this.__data__ = [], this.size = 0
    }
    var qL = VL;

    function YL(e, t) {
        return e === t || e !== e && t !== t
    }
    var $c = YL,
        zL = $c;

    function XL(e, t) {
        for (var r = e.length; r--;)
            if (zL(e[r][0], t)) return r;
        return -1
    }
    var Cc = XL,
        JL = Cc,
        QL = Array.prototype,
        ZL = QL.splice;

    function ek(e) {
        var t = this.__data__,
            r = JL(t, e);
        if (r < 0) return !1;
        var n = t.length - 1;
        return r == n ? t.pop() : ZL.call(t, r, 1), --this.size, !0
    }
    var tk = ek,
        rk = Cc;

    function nk(e) {
        var t = this.__data__,
            r = rk(t, e);
        return r < 0 ? void 0 : t[r][1]
    }
    var ik = nk,
        sk = Cc;

    function ak(e) {
        return sk(this.__data__, e) > -1
    }
    var ok = ak,
        lk = Cc;

    function ck(e, t) {
        var r = this.__data__,
            n = lk(r, e);
        return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this
    }
    var uk = ck,
        fk = qL,
        dk = tk,
        hk = ik,
        pk = ok,
        gk = uk;

    function ra(e) {
        var t = -1,
            r = e == null ? 0 : e.length;
        for (this.clear(); ++t < r;) {
            var n = e[t];
            this.set(n[0], n[1])
        }
    }
    ra.prototype.clear = fk;
    ra.prototype.delete = dk;
    ra.prototype.get = hk;
    ra.prototype.has = pk;
    ra.prototype.set = gk;
    var Ic = ra,
        mk = Ic;

    function vk() {
        this.__data__ = new mk, this.size = 0
    }
    var yk = vk;

    function _k(e) {
        var t = this.__data__,
            r = t.delete(e);
        return this.size = t.size, r
    }
    var bk = _k;

    function Ek(e) {
        return this.__data__.get(e)
    }
    var Tk = Ek;

    function Sk(e) {
        return this.__data__.has(e)
    }
    var Ok = Sk,
        wk = typeof Lt == "object" && Lt && Lt.Object === Object && Lt,
        QE = wk,
        $k = QE,
        Ck = typeof self == "object" && self && self.Object === Object && self,
        Ik = $k || Ck || Function("return this")(),
        dn = Ik,
        Ak = dn,
        Nk = Ak.Symbol,
        Ac = Nk,
        ty = Ac,
        ZE = Object.prototype,
        Pk = ZE.hasOwnProperty,
        Rk = ZE.toString,
        Aa = ty ? ty.toStringTag : void 0;

    function Lk(e) {
        var t = Pk.call(e, Aa),
            r = e[Aa];
        try {
            e[Aa] = void 0;
            var n = !0
        } catch {}
        var s = Rk.call(e);
        return n && (t ? e[Aa] = r : delete e[Aa]), s
    }
    var kk = Lk,
        xk = Object.prototype,
        Dk = xk.toString;

    function Mk(e) {
        return Dk.call(e)
    }
    var Fk = Mk,
        ry = Ac,
        Bk = kk,
        Uk = Fk,
        jk = "[object Null]",
        Gk = "[object Undefined]",
        ny = ry ? ry.toStringTag : void 0;

    function Wk(e) {
        return e == null ? e === void 0 ? Gk : jk : ny && ny in Object(e) ? Bk(e) : Uk(e)
    }
    var na = Wk;

    function Hk(e) {
        var t = typeof e;
        return e != null && (t == "object" || t == "function")
    }
    var hn = Hk,
        Kk = na,
        Vk = hn,
        qk = "[object AsyncFunction]",
        Yk = "[object Function]",
        zk = "[object GeneratorFunction]",
        Xk = "[object Proxy]";

    function Jk(e) {
        if (!Vk(e)) return !1;
        var t = Kk(e);
        return t == Yk || t == zk || t == qk || t == Xk
    }
    var Dh = Jk,
        Qk = dn,
        Zk = Qk["__core-js_shared__"],
        ex = Zk,
        bf = ex,
        iy = function() {
            var e = /[^.]+$/.exec(bf && bf.keys && bf.keys.IE_PROTO || "");
            return e ? "Symbol(src)_1." + e : ""
        }();

    function tx(e) {
        return !!iy && iy in e
    }
    var rx = tx,
        nx = Function.prototype,
        ix = nx.toString;

    function sx(e) {
        if (e != null) {
            try {
                return ix.call(e)
            } catch {}
            try {
                return e + ""
            } catch {}
        }
        return ""
    }
    var eT = sx,
        ax = Dh,
        ox = rx,
        lx = hn,
        cx = eT,
        ux = /[\\^$.*+?()[\]{}|]/g,
        fx = /^\[object .+?Constructor\]$/,
        dx = Function.prototype,
        hx = Object.prototype,
        px = dx.toString,
        gx = hx.hasOwnProperty,
        mx = RegExp("^" + px.call(gx).replace(ux, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

    function vx(e) {
        if (!lx(e) || ox(e)) return !1;
        var t = ax(e) ? mx : fx;
        return t.test(cx(e))
    }
    var yx = vx;

    function _x(e, t) {
        return e == null ? void 0 : e[t]
    }
    var bx = _x,
        Ex = yx,
        Tx = bx;

    function Sx(e, t) {
        var r = Tx(e, t);
        return Ex(r) ? r : void 0
    }
    var os = Sx,
        Ox = os,
        wx = dn,
        $x = Ox(wx, "Map"),
        Mh = $x,
        Cx = os,
        Ix = Cx(Object, "create"),
        Nc = Ix,
        sy = Nc;

    function Ax() {
        this.__data__ = sy ? sy(null) : {}, this.size = 0
    }
    var Nx = Ax;

    function Px(e) {
        var t = this.has(e) && delete this.__data__[e];
        return this.size -= t ? 1 : 0, t
    }
    var Rx = Px,
        Lx = Nc,
        kx = "__lodash_hash_undefined__",
        xx = Object.prototype,
        Dx = xx.hasOwnProperty;

    function Mx(e) {
        var t = this.__data__;
        if (Lx) {
            var r = t[e];
            return r === kx ? void 0 : r
        }
        return Dx.call(t, e) ? t[e] : void 0
    }
    var Fx = Mx,
        Bx = Nc,
        Ux = Object.prototype,
        jx = Ux.hasOwnProperty;

    function Gx(e) {
        var t = this.__data__;
        return Bx ? t[e] !== void 0 : jx.call(t, e)
    }
    var Wx = Gx,
        Hx = Nc,
        Kx = "__lodash_hash_undefined__";

    function Vx(e, t) {
        var r = this.__data__;
        return this.size += this.has(e) ? 0 : 1, r[e] = Hx && t === void 0 ? Kx : t, this
    }
    var qx = Vx,
        Yx = Nx,
        zx = Rx,
        Xx = Fx,
        Jx = Wx,
        Qx = qx;

    function ia(e) {
        var t = -1,
            r = e == null ? 0 : e.length;
        for (this.clear(); ++t < r;) {
            var n = e[t];
            this.set(n[0], n[1])
        }
    }
    ia.prototype.clear = Yx;
    ia.prototype.delete = zx;
    ia.prototype.get = Xx;
    ia.prototype.has = Jx;
    ia.prototype.set = Qx;
    var Zx = ia,
        ay = Zx,
        eD = Ic,
        tD = Mh;

    function rD() {
        this.size = 0, this.__data__ = {
            hash: new ay,
            map: new(tD || eD),
            string: new ay
        }
    }
    var nD = rD;

    function iD(e) {
        var t = typeof e;
        return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
    }
    var sD = iD,
        aD = sD;

    function oD(e, t) {
        var r = e.__data__;
        return aD(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map
    }
    var Pc = oD,
        lD = Pc;

    function cD(e) {
        var t = lD(this, e).delete(e);
        return this.size -= t ? 1 : 0, t
    }
    var uD = cD,
        fD = Pc;

    function dD(e) {
        return fD(this, e).get(e)
    }
    var hD = dD,
        pD = Pc;

    function gD(e) {
        return pD(this, e).has(e)
    }
    var mD = gD,
        vD = Pc;

    function yD(e, t) {
        var r = vD(this, e),
            n = r.size;
        return r.set(e, t), this.size += r.size == n ? 0 : 1, this
    }
    var _D = yD,
        bD = nD,
        ED = uD,
        TD = hD,
        SD = mD,
        OD = _D;

    function sa(e) {
        var t = -1,
            r = e == null ? 0 : e.length;
        for (this.clear(); ++t < r;) {
            var n = e[t];
            this.set(n[0], n[1])
        }
    }
    sa.prototype.clear = bD;
    sa.prototype.delete = ED;
    sa.prototype.get = TD;
    sa.prototype.has = SD;
    sa.prototype.set = OD;
    var tT = sa,
        wD = Ic,
        $D = Mh,
        CD = tT,
        ID = 200;

    function AD(e, t) {
        var r = this.__data__;
        if (r instanceof wD) {
            var n = r.__data__;
            if (!$D || n.length < ID - 1) return n.push([e, t]), this.size = ++r.size, this;
            r = this.__data__ = new CD(n)
        }
        return r.set(e, t), this.size = r.size, this
    }
    var ND = AD,
        PD = Ic,
        RD = yk,
        LD = bk,
        kD = Tk,
        xD = Ok,
        DD = ND;

    function aa(e) {
        var t = this.__data__ = new PD(e);
        this.size = t.size
    }
    aa.prototype.clear = RD;
    aa.prototype.delete = LD;
    aa.prototype.get = kD;
    aa.prototype.has = xD;
    aa.prototype.set = DD;
    var rT = aa,
        MD = os,
        FD = function() {
            try {
                var e = MD(Object, "defineProperty");
                return e({}, "", {}), e
            } catch {}
        }(),
        nT = FD,
        oy = nT;

    function BD(e, t, r) {
        t == "__proto__" && oy ? oy(e, t, {
            configurable: !0,
            enumerable: !0,
            value: r,
            writable: !0
        }) : e[t] = r
    }
    var Fh = BD,
        UD = Fh,
        jD = $c;

    function GD(e, t, r) {
        (r !== void 0 && !jD(e[t], r) || r === void 0 && !(t in e)) && UD(e, t, r)
    }
    var iT = GD;

    function WD(e) {
        return function(t, r, n) {
            for (var s = -1, o = Object(t), l = n(t), u = l.length; u--;) {
                var f = l[e ? u : ++s];
                if (r(o[f], f, o) === !1) break
            }
            return t
        }
    }
    var HD = WD,
        KD = HD,
        VD = KD(),
        qD = VD,
        zl = {
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
            var _ = h.length,
                E = u ? u(_) : new h.constructor(_);
            return h.copy(E), E
        }
        e.exports = f
    })(zl, zl.exports);
    var YD = dn,
        zD = YD.Uint8Array,
        XD = zD,
        ly = XD;

    function JD(e) {
        var t = new e.constructor(e.byteLength);
        return new ly(t).set(new ly(e)), t
    }
    var Bh = JD,
        QD = Bh;

    function ZD(e, t) {
        var r = t ? QD(e.buffer) : e.buffer;
        return new e.constructor(r, e.byteOffset, e.length)
    }
    var sT = ZD;

    function eM(e, t) {
        var r = -1,
            n = e.length;
        for (t || (t = Array(n)); ++r < n;) t[r] = e[r];
        return t
    }
    var aT = eM,
        tM = hn,
        cy = Object.create,
        rM = function() {
            function e() {}
            return function(t) {
                if (!tM(t)) return {};
                if (cy) return cy(t);
                e.prototype = t;
                var r = new e;
                return e.prototype = void 0, r
            }
        }(),
        nM = rM;

    function iM(e, t) {
        return function(r) {
            return e(t(r))
        }
    }
    var oT = iM,
        sM = oT,
        aM = sM(Object.getPrototypeOf, Object),
        Uh = aM,
        oM = Object.prototype;

    function lM(e) {
        var t = e && e.constructor,
            r = typeof t == "function" && t.prototype || oM;
        return e === r
    }
    var jh = lM,
        cM = nM,
        uM = Uh,
        fM = jh;

    function dM(e) {
        return typeof e.constructor == "function" && !fM(e) ? cM(uM(e)) : {}
    }
    var lT = dM;

    function hM(e) {
        return e != null && typeof e == "object"
    }
    var mi = hM,
        pM = na,
        gM = mi,
        mM = "[object Arguments]";

    function vM(e) {
        return gM(e) && pM(e) == mM
    }
    var yM = vM,
        uy = yM,
        _M = mi,
        cT = Object.prototype,
        bM = cT.hasOwnProperty,
        EM = cT.propertyIsEnumerable,
        TM = uy(function() {
            return arguments
        }()) ? uy : function(e) {
            return _M(e) && bM.call(e, "callee") && !EM.call(e, "callee")
        },
        uT = TM,
        SM = Array.isArray,
        vi = SM,
        OM = 9007199254740991;

    function wM(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= OM
    }
    var fT = wM,
        $M = Dh,
        CM = fT;

    function IM(e) {
        return e != null && CM(e.length) && !$M(e)
    }
    var Rc = IM,
        AM = Rc,
        NM = mi;

    function PM(e) {
        return NM(e) && AM(e)
    }
    var RM = PM,
        to = {
            exports: {}
        };

    function LM() {
        return !1
    }
    var kM = LM;
    (function(e, t) {
        var r = dn,
            n = kM,
            s = t && !t.nodeType && t,
            o = s && !0 && e && !e.nodeType && e,
            l = o && o.exports === s,
            u = l ? r.Buffer : void 0,
            f = u ? u.isBuffer : void 0,
            h = f || n;
        e.exports = h
    })(to, to.exports);
    var xM = na,
        DM = Uh,
        MM = mi,
        FM = "[object Object]",
        BM = Function.prototype,
        UM = Object.prototype,
        dT = BM.toString,
        jM = UM.hasOwnProperty,
        GM = dT.call(Object);

    function WM(e) {
        if (!MM(e) || xM(e) != FM) return !1;
        var t = DM(e);
        if (t === null) return !0;
        var r = jM.call(t, "constructor") && t.constructor;
        return typeof r == "function" && r instanceof r && dT.call(r) == GM
    }
    var HM = WM,
        KM = na,
        VM = fT,
        qM = mi,
        YM = "[object Arguments]",
        zM = "[object Array]",
        XM = "[object Boolean]",
        JM = "[object Date]",
        QM = "[object Error]",
        ZM = "[object Function]",
        e2 = "[object Map]",
        t2 = "[object Number]",
        r2 = "[object Object]",
        n2 = "[object RegExp]",
        i2 = "[object Set]",
        s2 = "[object String]",
        a2 = "[object WeakMap]",
        o2 = "[object ArrayBuffer]",
        l2 = "[object DataView]",
        c2 = "[object Float32Array]",
        u2 = "[object Float64Array]",
        f2 = "[object Int8Array]",
        d2 = "[object Int16Array]",
        h2 = "[object Int32Array]",
        p2 = "[object Uint8Array]",
        g2 = "[object Uint8ClampedArray]",
        m2 = "[object Uint16Array]",
        v2 = "[object Uint32Array]",
        Et = {};
    Et[c2] = Et[u2] = Et[f2] = Et[d2] = Et[h2] = Et[p2] = Et[g2] = Et[m2] = Et[v2] = !0;
    Et[YM] = Et[zM] = Et[o2] = Et[XM] = Et[l2] = Et[JM] = Et[QM] = Et[ZM] = Et[e2] = Et[t2] = Et[r2] = Et[n2] = Et[i2] = Et[s2] = Et[a2] = !1;

    function y2(e) {
        return qM(e) && VM(e.length) && !!Et[KM(e)]
    }
    var _2 = y2;

    function b2(e) {
        return function(t) {
            return e(t)
        }
    }
    var Gh = b2,
        ro = {
            exports: {}
        };
    (function(e, t) {
        var r = QE,
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
    })(ro, ro.exports);
    var E2 = _2,
        T2 = Gh,
        fy = ro.exports,
        dy = fy && fy.isTypedArray,
        S2 = dy ? T2(dy) : E2,
        hT = S2;

    function O2(e, t) {
        if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__") return e[t]
    }
    var pT = O2,
        w2 = Fh,
        $2 = $c,
        C2 = Object.prototype,
        I2 = C2.hasOwnProperty;

    function A2(e, t, r) {
        var n = e[t];
        (!(I2.call(e, t) && $2(n, r)) || r === void 0 && !(t in e)) && w2(e, t, r)
    }
    var Wh = A2,
        N2 = Wh,
        P2 = Fh;

    function R2(e, t, r, n) {
        var s = !r;
        r || (r = {});
        for (var o = -1, l = t.length; ++o < l;) {
            var u = t[o],
                f = n ? n(r[u], e[u], u, r, e) : void 0;
            f === void 0 && (f = e[u]), s ? P2(r, u, f) : N2(r, u, f)
        }
        return r
    }
    var ho = R2;

    function L2(e, t) {
        for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
        return n
    }
    var k2 = L2,
        x2 = 9007199254740991,
        D2 = /^(?:0|[1-9]\d*)$/;

    function M2(e, t) {
        var r = typeof e;
        return t = t == null ? x2 : t, !!t && (r == "number" || r != "symbol" && D2.test(e)) && e > -1 && e % 1 == 0 && e < t
    }
    var Hh = M2,
        F2 = k2,
        B2 = uT,
        U2 = vi,
        j2 = to.exports,
        G2 = Hh,
        W2 = hT,
        H2 = Object.prototype,
        K2 = H2.hasOwnProperty;

    function V2(e, t) {
        var r = U2(e),
            n = !r && B2(e),
            s = !r && !n && j2(e),
            o = !r && !n && !s && W2(e),
            l = r || n || s || o,
            u = l ? F2(e.length, String) : [],
            f = u.length;
        for (var h in e)(t || K2.call(e, h)) && !(l && (h == "length" || s && (h == "offset" || h == "parent") || o && (h == "buffer" || h == "byteLength" || h == "byteOffset") || G2(h, f))) && u.push(h);
        return u
    }
    var gT = V2;

    function q2(e) {
        var t = [];
        if (e != null)
            for (var r in Object(e)) t.push(r);
        return t
    }
    var Y2 = q2,
        z2 = hn,
        X2 = jh,
        J2 = Y2,
        Q2 = Object.prototype,
        Z2 = Q2.hasOwnProperty;

    function eF(e) {
        if (!z2(e)) return J2(e);
        var t = X2(e),
            r = [];
        for (var n in e) n == "constructor" && (t || !Z2.call(e, n)) || r.push(n);
        return r
    }
    var tF = eF,
        rF = gT,
        nF = tF,
        iF = Rc;

    function sF(e) {
        return iF(e) ? rF(e, !0) : nF(e)
    }
    var po = sF,
        aF = ho,
        oF = po;

    function lF(e) {
        return aF(e, oF(e))
    }
    var cF = lF,
        hy = iT,
        uF = zl.exports,
        fF = sT,
        dF = aT,
        hF = lT,
        py = uT,
        gy = vi,
        pF = RM,
        gF = to.exports,
        mF = Dh,
        vF = hn,
        yF = HM,
        _F = hT,
        my = pT,
        bF = cF;

    function EF(e, t, r, n, s, o, l) {
        var u = my(e, r),
            f = my(t, r),
            h = l.get(f);
        if (h) {
            hy(e, r, h);
            return
        }
        var g = o ? o(u, f, r + "", e, t, l) : void 0,
            _ = g === void 0;
        if (_) {
            var E = gy(f),
                $ = !E && gF(f),
                L = !E && !$ && _F(f);
            g = f, E || $ || L ? gy(u) ? g = u : pF(u) ? g = dF(u) : $ ? (_ = !1, g = uF(f, !0)) : L ? (_ = !1, g = fF(f, !0)) : g = [] : yF(f) || py(f) ? (g = u, py(u) ? g = bF(u) : (!vF(u) || mF(u)) && (g = hF(f))) : _ = !1
        }
        _ && (l.set(f, g), s(g, f, n, o, l), l.delete(f)), hy(e, r, g)
    }
    var TF = EF,
        SF = rT,
        OF = iT,
        wF = qD,
        $F = TF,
        CF = hn,
        IF = po,
        AF = pT;

    function mT(e, t, r, n, s) {
        e !== t && wF(t, function(o, l) {
            if (s || (s = new SF), CF(o)) $F(e, t, l, r, mT, n, s);
            else {
                var u = n ? n(AF(e, l), o, l + "", e, t, s) : void 0;
                u === void 0 && (u = o), OF(e, l, u)
            }
        }, IF)
    }
    var NF = mT;

    function PF(e) {
        return e
    }
    var vT = PF;

    function RF(e, t, r) {
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
    var LF = RF,
        kF = LF,
        vy = Math.max;

    function xF(e, t, r) {
        return t = vy(t === void 0 ? e.length - 1 : t, 0),
            function() {
                for (var n = arguments, s = -1, o = vy(n.length - t, 0), l = Array(o); ++s < o;) l[s] = n[t + s];
                s = -1;
                for (var u = Array(t + 1); ++s < t;) u[s] = n[s];
                return u[t] = r(l), kF(e, this, u)
            }
    }
    var DF = xF;

    function MF(e) {
        return function() {
            return e
        }
    }
    var FF = MF,
        BF = FF,
        yy = nT,
        UF = vT,
        jF = yy ? function(e, t) {
            return yy(e, "toString", {
                configurable: !0,
                enumerable: !1,
                value: BF(t),
                writable: !0
            })
        } : UF,
        GF = jF,
        WF = 800,
        HF = 16,
        KF = Date.now;

    function VF(e) {
        var t = 0,
            r = 0;
        return function() {
            var n = KF(),
                s = HF - (n - r);
            if (r = n, s > 0) {
                if (++t >= WF) return arguments[0]
            } else t = 0;
            return e.apply(void 0, arguments)
        }
    }
    var qF = VF,
        YF = GF,
        zF = qF,
        XF = zF(YF),
        JF = XF,
        QF = vT,
        ZF = DF,
        eB = JF;

    function tB(e, t) {
        return eB(ZF(e, t, QF), e + "")
    }
    var rB = tB,
        nB = $c,
        iB = Rc,
        sB = Hh,
        aB = hn;

    function oB(e, t, r) {
        if (!aB(r)) return !1;
        var n = typeof t;
        return (n == "number" ? iB(r) && sB(t, r.length) : n == "string" && t in r) ? nB(r[t], e) : !1
    }
    var lB = oB,
        cB = rB,
        uB = lB;

    function fB(e) {
        return cB(function(t, r) {
            var n = -1,
                s = r.length,
                o = s > 1 ? r[s - 1] : void 0,
                l = s > 2 ? r[2] : void 0;
            for (o = e.length > 3 && typeof o == "function" ? (s--, o) : void 0, l && uB(r[0], r[1], l) && (o = s < 3 ? void 0 : o, s = 1), t = Object(t); ++n < s;) {
                var u = r[n];
                u && e(t, u, n, o)
            }
            return t
        })
    }
    var dB = fB,
        hB = NF,
        pB = dB,
        gB = pB(function(e, t, r) {
            hB(e, t, r)
        }),
        mB = gB;
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
            return mB(t[0], ...t)
        }
    }
    ge(Bs, "locale"), ge(Bs, "supported", ["en", "fr", "it", "de", "es", "es-XL"]);
    const Wp = class {
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
    let ar = Wp;
    ge(ar, "queryParams", new URLSearchParams(window.location.search)), ge(ar, "getQueryParam", t => Wp.queryParams.get(t)), ge(ar, "sleep", t => new Promise(r => {
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
                namespace: (s = (n = ar.getQueryParam("namespace")) != null ? n : ar.getQueryParam("ns")) != null ? s : this.defaultNamespace,
                isDisabled: ar.queryParams.has("incognito") || ar.queryParams.has("nc")
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
            no.setAsViewed(t), this.artifacts = this.list()
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
    var wd = {
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

                function L(F) {
                    this.map = {}, F instanceof L ? F.forEach(function(ie, de) {
                        this.append(de, ie)
                    }, this) : Array.isArray(F) ? F.forEach(function(ie) {
                        this.append(ie[0], ie[1])
                    }, this) : F && Object.getOwnPropertyNames(F).forEach(function(ie) {
                        this.append(ie, F[ie])
                    }, this)
                }
                L.prototype.append = function(F, ie) {
                    F = _(F), ie = E(ie);
                    var de = this.map[F];
                    this.map[F] = de ? de + ", " + ie : ie
                }, L.prototype.delete = function(F) {
                    delete this.map[_(F)]
                }, L.prototype.get = function(F) {
                    return F = _(F), this.has(F) ? this.map[F] : null
                }, L.prototype.has = function(F) {
                    return this.map.hasOwnProperty(_(F))
                }, L.prototype.set = function(F, ie) {
                    this.map[_(F)] = E(ie)
                }, L.prototype.forEach = function(F, ie) {
                    for (var de in this.map) this.map.hasOwnProperty(de) && F.call(ie, this.map[de], de, this)
                }, L.prototype.keys = function() {
                    var F = [];
                    return this.forEach(function(ie, de) {
                        F.push(de)
                    }), $(F)
                }, L.prototype.values = function() {
                    var F = [];
                    return this.forEach(function(ie) {
                        F.push(ie)
                    }), $(F)
                }, L.prototype.entries = function() {
                    var F = [];
                    return this.forEach(function(ie, de) {
                        F.push([de, ie])
                    }), $(F)
                }, u.iterable && (L.prototype[Symbol.iterator] = L.prototype.entries);

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
                        this.url = F.url, this.credentials = F.credentials, ie.headers || (this.headers = new L(F.headers)), this.method = F.method, this.mode = F.mode, this.signal = F.signal, !de && F._bodyInit != null && (de = F._bodyInit, F.bodyUsed = !0)
                    } else this.url = String(F);
                    if (this.credentials = ie.credentials || this.credentials || "same-origin", (ie.headers || !this.headers) && (this.headers = new L(ie.headers)), this.method = oe(ie.method || this.method || "GET"), this.mode = ie.mode || this.mode || null, this.signal = ie.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && de) throw new TypeError("Body not allowed for GET or HEAD requests");
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
                    var ie = new L,
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
                    ie || (ie = {}), this.type = "default", this.status = ie.status === void 0 ? 200 : ie.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in ie ? ie.statusText : "OK", this.headers = new L(ie.headers), this.url = ie.url || "", this._initBody(F)
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
                return $e.polyfill = !0, o.fetch || (o.fetch = $e, o.Headers = L, o.Request = le, o.Response = Ce), l.Headers = L, l.Request = le, l.Response = Ce, l.fetch = $e, Object.defineProperty(l, "__esModule", {
                    value: !0
                }), l
            })({})
        })(n), n.fetch.ponyfill = !0, delete n.fetch.polyfill;
        var s = n;
        t = s.fetch, t.default = s.fetch, t.fetch = s.fetch, t.Headers = s.Headers, t.Request = s.Request, t.Response = s.Response, e.exports = t
    })(wd, wd.exports);
    var vB = function() {
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
        _y = typeof Symbol < "u" && Symbol,
        yB = vB,
        _B = function() {
            return typeof _y != "function" || typeof Symbol != "function" || typeof _y("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : yB()
        },
        bB = "Function.prototype.bind called on incompatible ",
        Ef = Array.prototype.slice,
        EB = Object.prototype.toString,
        TB = "[object Function]",
        SB = function(t) {
            var r = this;
            if (typeof r != "function" || EB.call(r) !== TB) throw new TypeError(bB + r);
            for (var n = Ef.call(arguments, 1), s, o = function() {
                    if (this instanceof s) {
                        var g = r.apply(this, n.concat(Ef.call(arguments)));
                        return Object(g) === g ? g : this
                    } else return r.apply(t, n.concat(Ef.call(arguments)))
                }, l = Math.max(0, r.length - n.length), u = [], f = 0; f < l; f++) u.push("$" + f);
            if (s = Function("binder", "return function (" + u.join(",") + "){ return binder.apply(this,arguments); }")(o), r.prototype) {
                var h = function() {};
                h.prototype = r.prototype, s.prototype = new h, h.prototype = null
            }
            return s
        },
        OB = SB,
        Kh = Function.prototype.bind || OB,
        wB = Kh,
        $B = wB.call(Function.call, Object.prototype.hasOwnProperty),
        Qe, Ys = SyntaxError,
        yT = Function,
        Us = TypeError,
        Tf = function(e) {
            try {
                return yT('"use strict"; return (' + e + ").constructor;")()
            } catch {}
        },
        es = Object.getOwnPropertyDescriptor;
    if (es) try {
        es({}, "")
    } catch {
        es = null
    }
    var Sf = function() {
            throw new Us
        },
        CB = es ? function() {
            try {
                return arguments.callee, Sf
            } catch {
                try {
                    return es(arguments, "callee").get
                } catch {
                    return Sf
                }
            }
        }() : Sf,
        Os = _B(),
        ii = Object.getPrototypeOf || function(e) {
            return e.__proto__
        },
        Ns = {},
        IB = typeof Uint8Array > "u" ? Qe : ii(Uint8Array),
        js = {
            "%AggregateError%": typeof AggregateError > "u" ? Qe : AggregateError,
            "%Array%": Array,
            "%ArrayBuffer%": typeof ArrayBuffer > "u" ? Qe : ArrayBuffer,
            "%ArrayIteratorPrototype%": Os ? ii([][Symbol.iterator]()) : Qe,
            "%AsyncFromSyncIteratorPrototype%": Qe,
            "%AsyncFunction%": Ns,
            "%AsyncGenerator%": Ns,
            "%AsyncGeneratorFunction%": Ns,
            "%AsyncIteratorPrototype%": Ns,
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
            "%Function%": yT,
            "%GeneratorFunction%": Ns,
            "%Int8Array%": typeof Int8Array > "u" ? Qe : Int8Array,
            "%Int16Array%": typeof Int16Array > "u" ? Qe : Int16Array,
            "%Int32Array%": typeof Int32Array > "u" ? Qe : Int32Array,
            "%isFinite%": isFinite,
            "%isNaN%": isNaN,
            "%IteratorPrototype%": Os ? ii(ii([][Symbol.iterator]())) : Qe,
            "%JSON%": typeof JSON == "object" ? JSON : Qe,
            "%Map%": typeof Map > "u" ? Qe : Map,
            "%MapIteratorPrototype%": typeof Map > "u" || !Os ? Qe : ii(new Map()[Symbol.iterator]()),
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
            "%SetIteratorPrototype%": typeof Set > "u" || !Os ? Qe : ii(new Set()[Symbol.iterator]()),
            "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? Qe : SharedArrayBuffer,
            "%String%": String,
            "%StringIteratorPrototype%": Os ? ii("" [Symbol.iterator]()) : Qe,
            "%Symbol%": Os ? Symbol : Qe,
            "%SyntaxError%": Ys,
            "%ThrowTypeError%": CB,
            "%TypedArray%": IB,
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
        AB = function e(t) {
            var r;
            if (t === "%AsyncFunction%") r = Tf("async function () {}");
            else if (t === "%GeneratorFunction%") r = Tf("function* () {}");
            else if (t === "%AsyncGeneratorFunction%") r = Tf("async function* () {}");
            else if (t === "%AsyncGenerator%") {
                var n = e("%AsyncGeneratorFunction%");
                n && (r = n.prototype)
            } else if (t === "%AsyncIteratorPrototype%") {
                var s = e("%AsyncGenerator%");
                s && (r = ii(s.prototype))
            }
            return js[t] = r, r
        },
        by = {
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
        go = Kh,
        Xl = $B,
        NB = go.call(Function.call, Array.prototype.concat),
        PB = go.call(Function.apply, Array.prototype.splice),
        Ey = go.call(Function.call, String.prototype.replace),
        Jl = go.call(Function.call, String.prototype.slice),
        RB = go.call(Function.call, RegExp.prototype.exec),
        LB = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
        kB = /\\(\\)?/g,
        xB = function(t) {
            var r = Jl(t, 0, 1),
                n = Jl(t, -1);
            if (r === "%" && n !== "%") throw new Ys("invalid intrinsic syntax, expected closing `%`");
            if (n === "%" && r !== "%") throw new Ys("invalid intrinsic syntax, expected opening `%`");
            var s = [];
            return Ey(t, LB, function(o, l, u, f) {
                s[s.length] = u ? Ey(f, kB, "$1") : l || o
            }), s
        },
        DB = function(t, r) {
            var n = t,
                s;
            if (Xl(by, n) && (s = by[n], n = "%" + s[0] + "%"), Xl(js, n)) {
                var o = js[n];
                if (o === Ns && (o = AB(n)), typeof o > "u" && !r) throw new Us("intrinsic " + t + " exists, but is not available. Please file an issue!");
                return {
                    alias: s,
                    name: n,
                    value: o
                }
            }
            throw new Ys("intrinsic " + t + " does not exist!")
        },
        Vh = function(t, r) {
            if (typeof t != "string" || t.length === 0) throw new Us("intrinsic name must be a non-empty string");
            if (arguments.length > 1 && typeof r != "boolean") throw new Us('"allowMissing" argument must be a boolean');
            if (RB(/^%?[^%]*%?$/g, t) === null) throw new Ys("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
            var n = xB(t),
                s = n.length > 0 ? n[0] : "",
                o = DB("%" + s + "%", r),
                l = o.name,
                u = o.value,
                f = !1,
                h = o.alias;
            h && (s = h[0], PB(n, NB([0, 1], h)));
            for (var g = 1, _ = !0; g < n.length; g += 1) {
                var E = n[g],
                    $ = Jl(E, 0, 1),
                    L = Jl(E, -1);
                if (($ === '"' || $ === "'" || $ === "`" || L === '"' || L === "'" || L === "`") && $ !== L) throw new Ys("property names with quotes must have matching quotes");
                if ((E === "constructor" || !_) && (f = !0), s += "." + E, l = "%" + s + "%", Xl(js, l)) u = js[l];
                else if (u != null) {
                    if (!(E in u)) {
                        if (!r) throw new Us("base intrinsic for " + t + " exists, but the property is not available.");
                        return
                    }
                    if (es && g + 1 >= n.length) {
                        var M = es(u, E);
                        _ = !!M, _ && "get" in M && !("originalValue" in M.get) ? u = M.get : u = u[E]
                    } else _ = Xl(u, E), u = u[E];
                    _ && !f && (js[l] = u)
                }
            }
            return u
        },
        _T = {
            exports: {}
        };
    (function(e) {
        var t = Kh,
            r = Vh,
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
    })(_T);
    var bT = Vh,
        ET = _T.exports,
        MB = ET(bT("String.prototype.indexOf")),
        FB = function(t, r) {
            var n = bT(t, !!r);
            return typeof n == "function" && MB(t, ".prototype.") > -1 ? ET(n) : n
        };
    const BB = {},
        UB = Object.freeze(Object.defineProperty({
            __proto__: null,
            default: BB
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        jB = KL(UB);
    var qh = typeof Map == "function" && Map.prototype,
        Of = Object.getOwnPropertyDescriptor && qh ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null,
        Ql = qh && Of && typeof Of.get == "function" ? Of.get : null,
        GB = qh && Map.prototype.forEach,
        Yh = typeof Set == "function" && Set.prototype,
        wf = Object.getOwnPropertyDescriptor && Yh ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null,
        Zl = Yh && wf && typeof wf.get == "function" ? wf.get : null,
        WB = Yh && Set.prototype.forEach,
        HB = typeof WeakMap == "function" && WeakMap.prototype,
        ja = HB ? WeakMap.prototype.has : null,
        KB = typeof WeakSet == "function" && WeakSet.prototype,
        Ga = KB ? WeakSet.prototype.has : null,
        VB = typeof WeakRef == "function" && WeakRef.prototype,
        Ty = VB ? WeakRef.prototype.deref : null,
        qB = Boolean.prototype.valueOf,
        YB = Object.prototype.toString,
        zB = Function.prototype.toString,
        XB = String.prototype.match,
        zh = String.prototype.slice,
        oi = String.prototype.replace,
        JB = String.prototype.toUpperCase,
        Sy = String.prototype.toLowerCase,
        TT = RegExp.prototype.test,
        Oy = Array.prototype.concat,
        Sn = Array.prototype.join,
        QB = Array.prototype.slice,
        wy = Math.floor,
        $d = typeof BigInt == "function" ? BigInt.prototype.valueOf : null,
        $f = Object.getOwnPropertySymbols,
        Cd = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null,
        zs = typeof Symbol == "function" && typeof Symbol.iterator == "object",
        cr = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === zs ? "object" : "symbol") ? Symbol.toStringTag : null,
        ST = Object.prototype.propertyIsEnumerable,
        $y = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(e) {
            return e.__proto__
        } : null);

    function Cy(e, t) {
        if (e === 1 / 0 || e === -1 / 0 || e !== e || e && e > -1e3 && e < 1e3 || TT.call(/e/, t)) return t;
        var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
        if (typeof e == "number") {
            var n = e < 0 ? -wy(-e) : wy(e);
            if (n !== e) {
                var s = String(n),
                    o = zh.call(t, s.length + 1);
                return oi.call(s, r, "$&_") + "." + oi.call(oi.call(o, /([0-9]{3})/g, "$&_"), /_$/, "")
            }
        }
        return oi.call(t, r, "$&_")
    }
    var Id = jB,
        Iy = Id.custom,
        Ay = wT(Iy) ? Iy : null,
        ZB = function e(t, r, n, s) {
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
            if (typeof t == "string") return CT(t, o);
            if (typeof t == "number") {
                if (t === 0) return 1 / 0 / t > 0 ? "0" : "-0";
                var f = String(t);
                return u ? Cy(t, f) : f
            }
            if (typeof t == "bigint") {
                var h = String(t) + "n";
                return u ? Cy(t, h) : h
            }
            var g = typeof o.depth > "u" ? 5 : o.depth;
            if (typeof n > "u" && (n = 0), n >= g && g > 0 && typeof t == "object") return Ad(t) ? "[Array]" : "[Object]";
            var _ = vU(o, n);
            if (typeof s > "u") s = [];
            else if ($T(s, t) >= 0) return "[Circular]";

            function E($e, F, ie) {
                if (F && (s = QB.call(s), s.push(F)), ie) {
                    var de = {
                        depth: o.depth
                    };
                    return si(o, "quoteStyle") && (de.quoteStyle = o.quoteStyle), e($e, de, n + 1, s)
                }
                return e($e, o, n + 1, s)
            }
            if (typeof t == "function" && !Ny(t)) {
                var $ = lU(t),
                    L = yl(t, E);
                return "[Function" + ($ ? ": " + $ : " (anonymous)") + "]" + (L.length > 0 ? " { " + Sn.call(L, ", ") + " }" : "")
            }
            if (wT(t)) {
                var M = zs ? oi.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : Cd.call(t);
                return typeof t == "object" && !zs ? Na(M) : M
            }
            if (pU(t)) {
                for (var U = "<" + Sy.call(String(t.nodeName)), C = t.attributes || [], V = 0; V < C.length; V++) U += " " + C[V].name + "=" + OT(eU(C[V].value), "double", o);
                return U += ">", t.childNodes && t.childNodes.length && (U += "..."), U += "</" + Sy.call(String(t.nodeName)) + ">", U
            }
            if (Ad(t)) {
                if (t.length === 0) return "[]";
                var X = yl(t, E);
                return _ && !mU(X) ? "[" + Nd(X, _) + "]" : "[ " + Sn.call(X, ", ") + " ]"
            }
            if (rU(t)) {
                var G = yl(t, E);
                return !("cause" in Error.prototype) && "cause" in t && !ST.call(t, "cause") ? "{ [" + String(t) + "] " + Sn.call(Oy.call("[cause]: " + E(t.cause), G), ", ") + " }" : G.length === 0 ? "[" + String(t) + "]" : "{ [" + String(t) + "] " + Sn.call(G, ", ") + " }"
            }
            if (typeof t == "object" && l) {
                if (Ay && typeof t[Ay] == "function" && Id) return Id(t, {
                    depth: g - n
                });
                if (l !== "symbol" && typeof t.inspect == "function") return t.inspect()
            }
            if (cU(t)) {
                var j = [];
                return GB.call(t, function($e, F) {
                    j.push(E(F, t, !0) + " => " + E($e, t))
                }), Py("Map", Ql.call(t), j, _)
            }
            if (dU(t)) {
                var Q = [];
                return WB.call(t, function($e) {
                    Q.push(E($e, t))
                }), Py("Set", Zl.call(t), Q, _)
            }
            if (uU(t)) return Cf("WeakMap");
            if (hU(t)) return Cf("WeakSet");
            if (fU(t)) return Cf("WeakRef");
            if (iU(t)) return Na(E(Number(t)));
            if (aU(t)) return Na(E($d.call(t)));
            if (sU(t)) return Na(qB.call(t));
            if (nU(t)) return Na(E(String(t)));
            if (!tU(t) && !Ny(t)) {
                var oe = yl(t, E),
                    le = $y ? $y(t) === Object.prototype : t instanceof Object || t.constructor === Object,
                    ue = t instanceof Object ? "" : "null prototype",
                    Ae = !le && cr && Object(t) === t && cr in t ? zh.call(yi(t), 8, -1) : ue ? "Object" : "",
                    Ce = le || typeof t.constructor != "function" ? "" : t.constructor.name ? t.constructor.name + " " : "",
                    fe = Ce + (Ae || ue ? "[" + Sn.call(Oy.call([], Ae || [], ue || []), ": ") + "] " : "");
                return oe.length === 0 ? fe + "{}" : _ ? fe + "{" + Nd(oe, _) + "}" : fe + "{ " + Sn.call(oe, ", ") + " }"
            }
            return String(t)
        };

    function OT(e, t, r) {
        var n = (r.quoteStyle || t) === "double" ? '"' : "'";
        return n + e + n
    }

    function eU(e) {
        return oi.call(String(e), /"/g, "&quot;")
    }

    function Ad(e) {
        return yi(e) === "[object Array]" && (!cr || !(typeof e == "object" && cr in e))
    }

    function tU(e) {
        return yi(e) === "[object Date]" && (!cr || !(typeof e == "object" && cr in e))
    }

    function Ny(e) {
        return yi(e) === "[object RegExp]" && (!cr || !(typeof e == "object" && cr in e))
    }

    function rU(e) {
        return yi(e) === "[object Error]" && (!cr || !(typeof e == "object" && cr in e))
    }

    function nU(e) {
        return yi(e) === "[object String]" && (!cr || !(typeof e == "object" && cr in e))
    }

    function iU(e) {
        return yi(e) === "[object Number]" && (!cr || !(typeof e == "object" && cr in e))
    }

    function sU(e) {
        return yi(e) === "[object Boolean]" && (!cr || !(typeof e == "object" && cr in e))
    }

    function wT(e) {
        if (zs) return e && typeof e == "object" && e instanceof Symbol;
        if (typeof e == "symbol") return !0;
        if (!e || typeof e != "object" || !Cd) return !1;
        try {
            return Cd.call(e), !0
        } catch {}
        return !1
    }

    function aU(e) {
        if (!e || typeof e != "object" || !$d) return !1;
        try {
            return $d.call(e), !0
        } catch {}
        return !1
    }
    var oU = Object.prototype.hasOwnProperty || function(e) {
        return e in this
    };

    function si(e, t) {
        return oU.call(e, t)
    }

    function yi(e) {
        return YB.call(e)
    }

    function lU(e) {
        if (e.name) return e.name;
        var t = XB.call(zB.call(e), /^function\s*([\w$]+)/);
        return t ? t[1] : null
    }

    function $T(e, t) {
        if (e.indexOf) return e.indexOf(t);
        for (var r = 0, n = e.length; r < n; r++)
            if (e[r] === t) return r;
        return -1
    }

    function cU(e) {
        if (!Ql || !e || typeof e != "object") return !1;
        try {
            Ql.call(e);
            try {
                Zl.call(e)
            } catch {
                return !0
            }
            return e instanceof Map
        } catch {}
        return !1
    }

    function uU(e) {
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

    function fU(e) {
        if (!Ty || !e || typeof e != "object") return !1;
        try {
            return Ty.call(e), !0
        } catch {}
        return !1
    }

    function dU(e) {
        if (!Zl || !e || typeof e != "object") return !1;
        try {
            Zl.call(e);
            try {
                Ql.call(e)
            } catch {
                return !0
            }
            return e instanceof Set
        } catch {}
        return !1
    }

    function hU(e) {
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

    function pU(e) {
        return !e || typeof e != "object" ? !1 : typeof HTMLElement < "u" && e instanceof HTMLElement ? !0 : typeof e.nodeName == "string" && typeof e.getAttribute == "function"
    }

    function CT(e, t) {
        if (e.length > t.maxStringLength) {
            var r = e.length - t.maxStringLength,
                n = "... " + r + " more character" + (r > 1 ? "s" : "");
            return CT(zh.call(e, 0, t.maxStringLength), t) + n
        }
        var s = oi.call(oi.call(e, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, gU);
        return OT(s, "single", t)
    }

    function gU(e) {
        var t = e.charCodeAt(0),
            r = {
                8: "b",
                9: "t",
                10: "n",
                12: "f",
                13: "r"
            } [t];
        return r ? "\\" + r : "\\x" + (t < 16 ? "0" : "") + JB.call(t.toString(16))
    }

    function Na(e) {
        return "Object(" + e + ")"
    }

    function Cf(e) {
        return e + " { ? }"
    }

    function Py(e, t, r, n) {
        var s = n ? Nd(r, n) : Sn.call(r, ", ");
        return e + " (" + t + ") {" + s + "}"
    }

    function mU(e) {
        for (var t = 0; t < e.length; t++)
            if ($T(e[t], `
`) >= 0) return !1;
        return !0
    }

    function vU(e, t) {
        var r;
        if (e.indent === "	") r = "	";
        else if (typeof e.indent == "number" && e.indent > 0) r = Sn.call(Array(e.indent + 1), " ");
        else return null;
        return {
            base: r,
            prev: Sn.call(Array(t + 1), r)
        }
    }

    function Nd(e, t) {
        if (e.length === 0) return "";
        var r = `
` + t.prev + t.base;
        return r + Sn.call(e, "," + r) + `
` + t.prev
    }

    function yl(e, t) {
        var r = Ad(e),
            n = [];
        if (r) {
            n.length = e.length;
            for (var s = 0; s < e.length; s++) n[s] = si(e, s) ? t(e[s], e) : ""
        }
        var o = typeof $f == "function" ? $f(e) : [],
            l;
        if (zs) {
            l = {};
            for (var u = 0; u < o.length; u++) l["$" + o[u]] = o[u]
        }
        for (var f in e) !si(e, f) || r && String(Number(f)) === f && f < e.length || zs && l["$" + f] instanceof Symbol || (TT.call(/[^\w$]/, f) ? n.push(t(f, e) + ": " + t(e[f], e)) : n.push(f + ": " + t(e[f], e)));
        if (typeof $f == "function")
            for (var h = 0; h < o.length; h++) ST.call(e, o[h]) && n.push("[" + t(o[h]) + "]: " + t(e[o[h]], e));
        return n
    }
    var Xh = Vh,
        oa = FB,
        yU = ZB,
        _U = Xh("%TypeError%"),
        _l = Xh("%WeakMap%", !0),
        bl = Xh("%Map%", !0),
        bU = oa("WeakMap.prototype.get", !0),
        EU = oa("WeakMap.prototype.set", !0),
        TU = oa("WeakMap.prototype.has", !0),
        SU = oa("Map.prototype.get", !0),
        OU = oa("Map.prototype.set", !0),
        wU = oa("Map.prototype.has", !0),
        Jh = function(e, t) {
            for (var r = e, n;
                (n = r.next) !== null; r = n)
                if (n.key === t) return r.next = n.next, n.next = e.next, e.next = n, n
        },
        $U = function(e, t) {
            var r = Jh(e, t);
            return r && r.value
        },
        CU = function(e, t, r) {
            var n = Jh(e, t);
            n ? n.value = r : e.next = {
                key: t,
                next: e.next,
                value: r
            }
        },
        IU = function(e, t) {
            return !!Jh(e, t)
        },
        AU = function() {
            var t, r, n, s = {
                assert: function(o) {
                    if (!s.has(o)) throw new _U("Side channel does not contain " + yU(o))
                },
                get: function(o) {
                    if (_l && o && (typeof o == "object" || typeof o == "function")) {
                        if (t) return bU(t, o)
                    } else if (bl) {
                        if (r) return SU(r, o)
                    } else if (n) return $U(n, o)
                },
                has: function(o) {
                    if (_l && o && (typeof o == "object" || typeof o == "function")) {
                        if (t) return TU(t, o)
                    } else if (bl) {
                        if (r) return wU(r, o)
                    } else if (n) return IU(n, o);
                    return !1
                },
                set: function(o, l) {
                    _l && o && (typeof o == "object" || typeof o == "function") ? (t || (t = new _l), EU(t, o, l)) : bl ? (r || (r = new bl), OU(r, o, l)) : (n || (n = {
                        key: {},
                        next: null
                    }), CU(n, o, l))
                }
            };
            return s
        },
        NU = String.prototype.replace,
        PU = /%20/g,
        If = {
            RFC1738: "RFC1738",
            RFC3986: "RFC3986"
        },
        Qh = {
            default: If.RFC3986,
            formatters: {
                RFC1738: function(e) {
                    return NU.call(e, PU, "+")
                },
                RFC3986: function(e) {
                    return String(e)
                }
            },
            RFC1738: If.RFC1738,
            RFC3986: If.RFC3986
        },
        RU = Qh,
        Af = Object.prototype.hasOwnProperty,
        qi = Array.isArray,
        yn = function() {
            for (var e = [], t = 0; t < 256; ++t) e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
            return e
        }(),
        LU = function(t) {
            for (; t.length > 1;) {
                var r = t.pop(),
                    n = r.obj[r.prop];
                if (qi(n)) {
                    for (var s = [], o = 0; o < n.length; ++o) typeof n[o] < "u" && s.push(n[o]);
                    r.obj[r.prop] = s
                }
            }
        },
        IT = function(t, r) {
            for (var n = r && r.plainObjects ? Object.create(null) : {}, s = 0; s < t.length; ++s) typeof t[s] < "u" && (n[s] = t[s]);
            return n
        },
        kU = function e(t, r, n) {
            if (!r) return t;
            if (typeof r != "object") {
                if (qi(t)) t.push(r);
                else if (t && typeof t == "object")(n && (n.plainObjects || n.allowPrototypes) || !Af.call(Object.prototype, r)) && (t[r] = !0);
                else return [t, r];
                return t
            }
            if (!t || typeof t != "object") return [t].concat(r);
            var s = t;
            return qi(t) && !qi(r) && (s = IT(t, n)), qi(t) && qi(r) ? (r.forEach(function(o, l) {
                if (Af.call(t, l)) {
                    var u = t[l];
                    u && typeof u == "object" && o && typeof o == "object" ? t[l] = e(u, o, n) : t.push(o)
                } else t[l] = o
            }), t) : Object.keys(r).reduce(function(o, l) {
                var u = r[l];
                return Af.call(o, l) ? o[l] = e(o[l], u, n) : o[l] = u, o
            }, s)
        },
        xU = function(t, r) {
            return Object.keys(r).reduce(function(n, s) {
                return n[s] = r[s], n
            }, t)
        },
        DU = function(e, t, r) {
            var n = e.replace(/\+/g, " ");
            if (r === "iso-8859-1") return n.replace(/%[0-9a-f]{2}/gi, unescape);
            try {
                return decodeURIComponent(n)
            } catch {
                return n
            }
        },
        MU = function(t, r, n, s, o) {
            if (t.length === 0) return t;
            var l = t;
            if (typeof t == "symbol" ? l = Symbol.prototype.toString.call(t) : typeof t != "string" && (l = String(t)), n === "iso-8859-1") return escape(l).replace(/%u[0-9a-f]{4}/gi, function(g) {
                return "%26%23" + parseInt(g.slice(2), 16) + "%3B"
            });
            for (var u = "", f = 0; f < l.length; ++f) {
                var h = l.charCodeAt(f);
                if (h === 45 || h === 46 || h === 95 || h === 126 || h >= 48 && h <= 57 || h >= 65 && h <= 90 || h >= 97 && h <= 122 || o === RU.RFC1738 && (h === 40 || h === 41)) {
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
        FU = function(t) {
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
            return LU(r), t
        },
        BU = function(t) {
            return Object.prototype.toString.call(t) === "[object RegExp]"
        },
        UU = function(t) {
            return !t || typeof t != "object" ? !1 : !!(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t))
        },
        jU = function(t, r) {
            return [].concat(t, r)
        },
        GU = function(t, r) {
            if (qi(t)) {
                for (var n = [], s = 0; s < t.length; s += 1) n.push(r(t[s]));
                return n
            }
            return r(t)
        },
        AT = {
            arrayToObject: IT,
            assign: xU,
            combine: jU,
            compact: FU,
            decode: DU,
            encode: MU,
            isBuffer: UU,
            isRegExp: BU,
            maybeMap: GU,
            merge: kU
        },
        NT = AU,
        Pd = AT,
        Wa = Qh,
        WU = Object.prototype.hasOwnProperty,
        Ry = {
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
        Dn = Array.isArray,
        HU = String.prototype.split,
        KU = Array.prototype.push,
        PT = function(e, t) {
            KU.apply(e, Dn(t) ? t : [t])
        },
        VU = Date.prototype.toISOString,
        Ly = Wa.default,
        Jt = {
            addQueryPrefix: !1,
            allowDots: !1,
            charset: "utf-8",
            charsetSentinel: !1,
            delimiter: "&",
            encode: !0,
            encoder: Pd.encode,
            encodeValuesOnly: !1,
            format: Ly,
            formatter: Wa.formatters[Ly],
            indices: !1,
            serializeDate: function(t) {
                return VU.call(t)
            },
            skipNulls: !1,
            strictNullHandling: !1
        },
        qU = function(t) {
            return typeof t == "string" || typeof t == "number" || typeof t == "boolean" || typeof t == "symbol" || typeof t == "bigint"
        },
        Nf = {},
        YU = function e(t, r, n, s, o, l, u, f, h, g, _, E, $, L, M, U) {
            for (var C = t, V = U, X = 0, G = !1;
                (V = V.get(Nf)) !== void 0 && !G;) {
                var j = V.get(t);
                if (X += 1, typeof j < "u") {
                    if (j === X) throw new RangeError("Cyclic object value");
                    G = !0
                }
                typeof V.get(Nf) > "u" && (X = 0)
            }
            if (typeof f == "function" ? C = f(r, C) : C instanceof Date ? C = _(C) : n === "comma" && Dn(C) && (C = Pd.maybeMap(C, function(Oe) {
                    return Oe instanceof Date ? _(Oe) : Oe
                })), C === null) {
                if (o) return u && !L ? u(r, Jt.encoder, M, "key", E) : r;
                C = ""
            }
            if (qU(C) || Pd.isBuffer(C)) {
                if (u) {
                    var Q = L ? r : u(r, Jt.encoder, M, "key", E);
                    if (n === "comma" && L) {
                        for (var oe = HU.call(String(C), ","), le = "", ue = 0; ue < oe.length; ++ue) le += (ue === 0 ? "" : ",") + $(u(oe[ue], Jt.encoder, M, "value", E));
                        return [$(Q) + (s && Dn(C) && oe.length === 1 ? "[]" : "") + "=" + le]
                    }
                    return [$(Q) + "=" + $(u(C, Jt.encoder, M, "value", E))]
                }
                return [$(r) + "=" + $(String(C))]
            }
            var Ae = [];
            if (typeof C > "u") return Ae;
            var Ce;
            if (n === "comma" && Dn(C)) Ce = [{
                value: C.length > 0 ? C.join(",") || null : void 0
            }];
            else if (Dn(f)) Ce = f;
            else {
                var fe = Object.keys(C);
                Ce = h ? fe.sort(h) : fe
            }
            for (var $e = s && Dn(C) && C.length === 1 ? r + "[]" : r, F = 0; F < Ce.length; ++F) {
                var ie = Ce[F],
                    de = typeof ie == "object" && typeof ie.value < "u" ? ie.value : C[ie];
                if (!(l && de === null)) {
                    var be = Dn(C) ? typeof n == "function" ? n($e, ie) : $e : $e + (g ? "." + ie : "[" + ie + "]");
                    U.set(t, X);
                    var ve = NT();
                    ve.set(Nf, U), PT(Ae, e(de, be, n, s, o, l, u, f, h, g, _, E, $, L, M, ve))
                }
            }
            return Ae
        },
        zU = function(t) {
            if (!t) return Jt;
            if (t.encoder !== null && typeof t.encoder < "u" && typeof t.encoder != "function") throw new TypeError("Encoder has to be a function.");
            var r = t.charset || Jt.charset;
            if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
            var n = Wa.default;
            if (typeof t.format < "u") {
                if (!WU.call(Wa.formatters, t.format)) throw new TypeError("Unknown format option provided.");
                n = t.format
            }
            var s = Wa.formatters[n],
                o = Jt.filter;
            return (typeof t.filter == "function" || Dn(t.filter)) && (o = t.filter), {
                addQueryPrefix: typeof t.addQueryPrefix == "boolean" ? t.addQueryPrefix : Jt.addQueryPrefix,
                allowDots: typeof t.allowDots > "u" ? Jt.allowDots : !!t.allowDots,
                charset: r,
                charsetSentinel: typeof t.charsetSentinel == "boolean" ? t.charsetSentinel : Jt.charsetSentinel,
                delimiter: typeof t.delimiter > "u" ? Jt.delimiter : t.delimiter,
                encode: typeof t.encode == "boolean" ? t.encode : Jt.encode,
                encoder: typeof t.encoder == "function" ? t.encoder : Jt.encoder,
                encodeValuesOnly: typeof t.encodeValuesOnly == "boolean" ? t.encodeValuesOnly : Jt.encodeValuesOnly,
                filter: o,
                format: n,
                formatter: s,
                serializeDate: typeof t.serializeDate == "function" ? t.serializeDate : Jt.serializeDate,
                skipNulls: typeof t.skipNulls == "boolean" ? t.skipNulls : Jt.skipNulls,
                sort: typeof t.sort == "function" ? t.sort : null,
                strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : Jt.strictNullHandling
            }
        },
        XU = function(e, t) {
            var r = e,
                n = zU(t),
                s, o;
            typeof n.filter == "function" ? (o = n.filter, r = o("", r)) : Dn(n.filter) && (o = n.filter, s = o);
            var l = [];
            if (typeof r != "object" || r === null) return "";
            var u;
            t && t.arrayFormat in Ry ? u = t.arrayFormat : t && "indices" in t ? u = t.indices ? "indices" : "repeat" : u = "indices";
            var f = Ry[u];
            if (t && "commaRoundTrip" in t && typeof t.commaRoundTrip != "boolean") throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
            var h = f === "comma" && t && t.commaRoundTrip;
            s || (s = Object.keys(r)), n.sort && s.sort(n.sort);
            for (var g = NT(), _ = 0; _ < s.length; ++_) {
                var E = s[_];
                n.skipNulls && r[E] === null || PT(l, YU(r[E], E, f, h, n.strictNullHandling, n.skipNulls, n.encode ? n.encoder : null, n.filter, n.sort, n.allowDots, n.serializeDate, n.format, n.formatter, n.encodeValuesOnly, n.charset, g))
            }
            var $ = l.join(n.delimiter),
                L = n.addQueryPrefix === !0 ? "?" : "";
            return n.charsetSentinel && (n.charset === "iso-8859-1" ? L += "utf8=%26%2310003%3B&" : L += "utf8=%E2%9C%93&"), $.length > 0 ? L + $ : ""
        },
        Xs = AT,
        Rd = Object.prototype.hasOwnProperty,
        JU = Array.isArray,
        Vt = {
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
        QU = function(e) {
            return e.replace(/&#(\d+);/g, function(t, r) {
                return String.fromCharCode(parseInt(r, 10))
            })
        },
        RT = function(e, t) {
            return e && typeof e == "string" && t.comma && e.indexOf(",") > -1 ? e.split(",") : e
        },
        ZU = "utf8=%26%2310003%3B",
        ej = "utf8=%E2%9C%93",
        tj = function(t, r) {
            var n = {},
                s = r.ignoreQueryPrefix ? t.replace(/^\?/, "") : t,
                o = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit,
                l = s.split(r.delimiter, o),
                u = -1,
                f, h = r.charset;
            if (r.charsetSentinel)
                for (f = 0; f < l.length; ++f) l[f].indexOf("utf8=") === 0 && (l[f] === ej ? h = "utf-8" : l[f] === ZU && (h = "iso-8859-1"), u = f, f = l.length);
            for (f = 0; f < l.length; ++f)
                if (f !== u) {
                    var g = l[f],
                        _ = g.indexOf("]="),
                        E = _ === -1 ? g.indexOf("=") : _ + 1,
                        $, L;
                    E === -1 ? ($ = r.decoder(g, Vt.decoder, h, "key"), L = r.strictNullHandling ? null : "") : ($ = r.decoder(g.slice(0, E), Vt.decoder, h, "key"), L = Xs.maybeMap(RT(g.slice(E + 1), r), function(M) {
                        return r.decoder(M, Vt.decoder, h, "value")
                    })), L && r.interpretNumericEntities && h === "iso-8859-1" && (L = QU(L)), g.indexOf("[]=") > -1 && (L = JU(L) ? [L] : L), Rd.call(n, $) ? n[$] = Xs.combine(n[$], L) : n[$] = L
                } return n
        },
        rj = function(e, t, r, n) {
            for (var s = n ? t : RT(t, r), o = e.length - 1; o >= 0; --o) {
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
        nj = function(t, r, n, s) {
            if (!!t) {
                var o = n.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t,
                    l = /(\[[^[\]]*])/,
                    u = /(\[[^[\]]*])/g,
                    f = n.depth > 0 && l.exec(o),
                    h = f ? o.slice(0, f.index) : o,
                    g = [];
                if (h) {
                    if (!n.plainObjects && Rd.call(Object.prototype, h) && !n.allowPrototypes) return;
                    g.push(h)
                }
                for (var _ = 0; n.depth > 0 && (f = u.exec(o)) !== null && _ < n.depth;) {
                    if (_ += 1, !n.plainObjects && Rd.call(Object.prototype, f[1].slice(1, -1)) && !n.allowPrototypes) return;
                    g.push(f[1])
                }
                return f && g.push("[" + o.slice(f.index) + "]"), rj(g, r, n, s)
            }
        },
        ij = function(t) {
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
                delimiter: typeof t.delimiter == "string" || Xs.isRegExp(t.delimiter) ? t.delimiter : Vt.delimiter,
                depth: typeof t.depth == "number" || t.depth === !1 ? +t.depth : Vt.depth,
                ignoreQueryPrefix: t.ignoreQueryPrefix === !0,
                interpretNumericEntities: typeof t.interpretNumericEntities == "boolean" ? t.interpretNumericEntities : Vt.interpretNumericEntities,
                parameterLimit: typeof t.parameterLimit == "number" ? t.parameterLimit : Vt.parameterLimit,
                parseArrays: t.parseArrays !== !1,
                plainObjects: typeof t.plainObjects == "boolean" ? t.plainObjects : Vt.plainObjects,
                strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : Vt.strictNullHandling
            }
        },
        sj = function(e, t) {
            var r = ij(t);
            if (e === "" || e === null || typeof e > "u") return r.plainObjects ? Object.create(null) : {};
            for (var n = typeof e == "string" ? tj(e, r) : e, s = r.plainObjects ? Object.create(null) : {}, o = Object.keys(n), l = 0; l < o.length; ++l) {
                var u = o[l],
                    f = nj(u, n[u], r, typeof e == "string");
                s = Xs.merge(s, f, r)
            }
            return r.allowSparse === !0 ? s : Xs.compact(s)
        },
        aj = XU,
        oj = sj,
        lj = Qh,
        LT = {
            formats: lj,
            parse: oj,
            stringify: aj
        };
    class cj {
        constructor(t) {
            this.code = t.code, this.token = t.token, this.host = t.host
        }
    }
    class uj {
        constructor(t) {
            this.appId = t.appId, this.appTag = t.appTag, this.audienceEnabled = t.audienceEnabled, this.code = t.code, this.host = t.host, this.audienceHost = t.audienceHost, this.locked = t.locked, this.full = t.full, this.moderationEnabled = t.moderationEnabled, this.passwordRequired = t.passwordRequired, this.twitchLocked = t.twitchLocked, this.locale = t.locale, this.keepalive = t.keepalive, this.controllerBranch = t.controllerBranch
        }
    }
    class fj {
        constructor(t) {
            this.connections = t.connections
        }
    }
    class dj {
        constructor(t) {
            this.cause = t.cause
        }
        whenReceived(t) {
            t.disconnect()
        }
    }
    class hj {}
    var Lc = {
        CreateRoomReply: cj,
        GetRoomReply: uj,
        GetAudienceReply: fj,
        RoomExit: dj,
        RoomLock: hj
    };
    const ky = wd.exports,
        pj = LT,
        {
            CreateRoomReply: gj,
            GetRoomReply: mj
        } = Lc;
    class vj {
        constructor(t) {
            if (!t.host) throw new Error("unable to create ecast APIClient: no host provided");
            if (this.host = t.host, !t.scheme) throw new Error("unable to create ecast APIClient: no scheme provided");
            this.scheme = t.scheme
        }
        url(t, r) {
            if (r) {
                let n = pj.stringify(r);
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
                l = await (await ky(n, {
                    method: "POST"
                })).json();
            if (!l.ok) throw new Error(`failed to create room: ${l.error}`);
            let u = l.body;
            return new gj({
                code: u.code,
                token: u.token,
                host: u.host
            })
        }
        async getRoom(t) {
            let r = this.url(`/rooms/${t.code}`),
                s = await (await ky(r)).json();
            if (!s.ok) throw new Error(`unable to get room with options ${JSON.stringify(t)}: ${s.error}`);
            let o = s.body;
            return new mj({
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
    var yj = {
            APIClient: vj
        },
        Ps = null;
    typeof WebSocket < "u" ? Ps = WebSocket : typeof MozWebSocket < "u" ? Ps = MozWebSocket : typeof Lt < "u" ? Ps = Lt.WebSocket || Lt.MozWebSocket : typeof window < "u" ? Ps = window.WebSocket || window.MozWebSocket : typeof self < "u" && (Ps = self.WebSocket || self.MozWebSocket);
    var _j = Ps,
        Zh = {
            exports: {}
        },
        Gs = typeof Reflect == "object" ? Reflect : null,
        xy = Gs && typeof Gs.apply == "function" ? Gs.apply : function(t, r, n) {
            return Function.prototype.apply.call(t, r, n)
        },
        xl;
    Gs && typeof Gs.ownKeys == "function" ? xl = Gs.ownKeys : Object.getOwnPropertySymbols ? xl = function(t) {
        return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))
    } : xl = function(t) {
        return Object.getOwnPropertyNames(t)
    };

    function bj(e) {
        console && console.warn && console.warn(e)
    }
    var kT = Number.isNaN || function(t) {
        return t !== t
    };

    function ht() {
        ht.init.call(this)
    }
    Zh.exports = ht;
    Zh.exports.once = Oj;
    ht.EventEmitter = ht;
    ht.prototype._events = void 0;
    ht.prototype._eventsCount = 0;
    ht.prototype._maxListeners = void 0;
    var Dy = 10;

    function kc(e) {
        if (typeof e != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e)
    }
    Object.defineProperty(ht, "defaultMaxListeners", {
        enumerable: !0,
        get: function() {
            return Dy
        },
        set: function(e) {
            if (typeof e != "number" || e < 0 || kT(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
            Dy = e
        }
    });
    ht.init = function() {
        (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
    };
    ht.prototype.setMaxListeners = function(t) {
        if (typeof t != "number" || t < 0 || kT(t)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
        return this._maxListeners = t, this
    };

    function xT(e) {
        return e._maxListeners === void 0 ? ht.defaultMaxListeners : e._maxListeners
    }
    ht.prototype.getMaxListeners = function() {
        return xT(this)
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
        if (typeof f == "function") xy(f, this, r);
        else
            for (var h = f.length, g = UT(f, h), n = 0; n < h; ++n) xy(g[n], this, r);
        return !0
    };

    function DT(e, t, r, n) {
        var s, o, l;
        if (kc(r), o = e._events, o === void 0 ? (o = e._events = Object.create(null), e._eventsCount = 0) : (o.newListener !== void 0 && (e.emit("newListener", t, r.listener ? r.listener : r), o = e._events), l = o[t]), l === void 0) l = o[t] = r, ++e._eventsCount;
        else if (typeof l == "function" ? l = o[t] = n ? [r, l] : [l, r] : n ? l.unshift(r) : l.push(r), s = xT(e), s > 0 && l.length > s && !l.warned) {
            l.warned = !0;
            var u = new Error("Possible EventEmitter memory leak detected. " + l.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
            u.name = "MaxListenersExceededWarning", u.emitter = e, u.type = t, u.count = l.length, bj(u)
        }
        return e
    }
    ht.prototype.addListener = function(t, r) {
        return DT(this, t, r, !1)
    };
    ht.prototype.on = ht.prototype.addListener;
    ht.prototype.prependListener = function(t, r) {
        return DT(this, t, r, !0)
    };

    function Ej() {
        if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
    }

    function MT(e, t, r) {
        var n = {
                fired: !1,
                wrapFn: void 0,
                target: e,
                type: t,
                listener: r
            },
            s = Ej.bind(n);
        return s.listener = r, n.wrapFn = s, s
    }
    ht.prototype.once = function(t, r) {
        return kc(r), this.on(t, MT(this, t, r)), this
    };
    ht.prototype.prependOnceListener = function(t, r) {
        return kc(r), this.prependListener(t, MT(this, t, r)), this
    };
    ht.prototype.removeListener = function(t, r) {
        var n, s, o, l, u;
        if (kc(r), s = this._events, s === void 0) return this;
        if (n = s[t], n === void 0) return this;
        if (n === r || n.listener === r) --this._eventsCount === 0 ? this._events = Object.create(null) : (delete s[t], s.removeListener && this.emit("removeListener", t, n.listener || r));
        else if (typeof n != "function") {
            for (o = -1, l = n.length - 1; l >= 0; l--)
                if (n[l] === r || n[l].listener === r) {
                    u = n[l].listener, o = l;
                    break
                } if (o < 0) return this;
            o === 0 ? n.shift() : Tj(n, o), n.length === 1 && (s[t] = n[0]), s.removeListener !== void 0 && this.emit("removeListener", t, u || r)
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

    function FT(e, t, r) {
        var n = e._events;
        if (n === void 0) return [];
        var s = n[t];
        return s === void 0 ? [] : typeof s == "function" ? r ? [s.listener || s] : [s] : r ? Sj(s) : UT(s, s.length)
    }
    ht.prototype.listeners = function(t) {
        return FT(this, t, !0)
    };
    ht.prototype.rawListeners = function(t) {
        return FT(this, t, !1)
    };
    ht.listenerCount = function(e, t) {
        return typeof e.listenerCount == "function" ? e.listenerCount(t) : BT.call(e, t)
    };
    ht.prototype.listenerCount = BT;

    function BT(e) {
        var t = this._events;
        if (t !== void 0) {
            var r = t[e];
            if (typeof r == "function") return 1;
            if (r !== void 0) return r.length
        }
        return 0
    }
    ht.prototype.eventNames = function() {
        return this._eventsCount > 0 ? xl(this._events) : []
    };

    function UT(e, t) {
        for (var r = new Array(t), n = 0; n < t; ++n) r[n] = e[n];
        return r
    }

    function Tj(e, t) {
        for (; t + 1 < e.length; t++) e[t] = e[t + 1];
        e.pop()
    }

    function Sj(e) {
        for (var t = new Array(e.length), r = 0; r < t.length; ++r) t[r] = e[r].listener || e[r];
        return t
    }

    function Oj(e, t) {
        return new Promise(function(r, n) {
            function s(l) {
                e.removeListener(t, o), n(l)
            }

            function o() {
                typeof e.removeListener == "function" && e.removeListener("error", s), r([].slice.call(arguments))
            }
            jT(e, t, o, {
                once: !0
            }), t !== "error" && wj(e, s, {
                once: !0
            })
        })
    }

    function wj(e, t, r) {
        typeof e.on == "function" && jT(e, "error", t, r)
    }

    function jT(e, t, r, n) {
        if (typeof e.on == "function") n.once ? e.once(t, r) : e.on(t, r);
        else if (typeof e.addEventListener == "function") e.addEventListener(t, function s(o) {
            n.once && e.removeEventListener(t, s), r(o)
        });
        else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e)
    }
    class $j {
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
    class xc extends Error {
        constructor(t) {
            super(t), t && (this.code = t.code, this.message = t.message)
        }
    }
    class mo extends xc {
        constructor(t) {
            super(t), this.code = 1e3, this.message = t && t.message ? t.message : "ecast server error"
        }
    }
    class GT extends mo {
        constructor(t) {
            super(t), this.code = 1001, this.message = t && t.message ? t.message : "create room failed"
        }
    }
    class WT extends mo {
        constructor(t) {
            super(t), this.code = 1002, this.message = t && t.message ? t.message : "unable to connect to room"
        }
    }
    class HT extends mo {
        constructor(t) {
            super(t), this.code = 1003, this.message = t && t.message ? t.message : "server is shutting down"
        }
    }
    class ut extends xc {
        constructor(t) {
            super(t), this.code = 2e3, this.message = t && t.message ? t.message : "ecast client error"
        }
    }
    class KT extends ut {
        constructor(t) {
            super(t), this.code = 2001, this.message = t && t.message ? t.message : "parse error in ecast protocol"
        }
    }
    class VT extends ut {
        constructor(t) {
            super(t), this.code = 2002, this.message = t && t.message ? t.message : "missing opcode"
        }
    }
    class qT extends ut {
        constructor(t) {
            super(t), this.code = 2003, this.message = t && t.message ? t.message : "invalid opcode"
        }
    }
    class YT extends ut {
        constructor(t) {
            super(t), this.code = 2004, this.message = t && t.message ? t.message : "invalid arguments"
        }
    }
    class zT extends ut {
        constructor(t) {
            super(t), this.code = 2005, this.message = t && t.message ? t.message : "entity not found"
        }
    }
    class XT extends ut {
        constructor(t) {
            super(t), this.code = 2006, this.message = t && t.message ? t.message : "an entity already exists with that key"
        }
    }
    class JT extends ut {
        constructor(t) {
            super(t), this.code = 2007, this.message = t && t.message ? t.message : "the entity is not of the expected type"
        }
    }
    class QT extends ut {
        constructor(t) {
            super(t), this.code = 2008, this.message = t && t.message ? t.message : "no such client"
        }
    }
    class ZT extends ut {
        constructor(t) {
            super(t), this.code = 2009, this.message = t && t.message ? t.message : "room is locked"
        }
    }
    class eS extends ut {
        constructor(t) {
            super(t), this.code = 2010, this.message = t && t.message ? t.message : "room is full"
        }
    }
    class tS extends ut {
        constructor(t) {
            super(t), this.code = 2011, this.message = t && t.message ? t.message : "no such license"
        }
    }
    class rS extends ut {
        constructor(t) {
            super(t), this.code = 2012, this.message = t && t.message ? t.message : "invalid license"
        }
    }
    class nS extends ut {
        constructor(t) {
            super(t), this.code = 2013, this.message = t && t.message ? t.message : "room not found"
        }
    }
    class iS extends ut {
        constructor(t) {
            super(t), this.code = 2014, this.message = t && t.message ? t.message : "requested role does not exist"
        }
    }
    class sS extends ut {
        constructor(t) {
            super(t), this.code = 2015, this.message = t && t.message ? t.message : "twitch login required"
        }
    }
    class aS extends ut {
        constructor(t) {
            super(t), this.code = 2016, this.message = t && t.message ? t.message : "no such option"
        }
    }
    class oS extends ut {
        constructor(t) {
            super(t), this.code = 2017, this.message = t && t.message ? t.message : "password required"
        }
    }
    class lS extends ut {
        constructor(t) {
            super(t), this.code = 2018, this.message = t && t.message ? t.message : "invalid room password"
        }
    }
    class cS extends ut {
        constructor(t) {
            super(t), this.code = 2019, this.message = t && t.message ? t.message : "missing name"
        }
    }
    class uS extends ut {
        constructor(t) {
            super(t), this.code = 2021, this.message = t && t.message ? t.message : "text did not pass text filters"
        }
    }
    class fS extends ut {
        constructor(t) {
            super(t), this.code = 2022, this.message = t && t.message ? t.message : "no such filter"
        }
    }
    class dS extends ut {
        constructor(t) {
            super(t), this.code = 2023, this.message = t && t.message ? t.message : "permission denied"
        }
    }
    class hS extends ut {
        constructor(t) {
            super(t), this.code = 2024, this.message = t && t.message ? t.message : "not connected to a room"
        }
    }
    class pS extends ut {
        constructor(t) {
            super(t), this.code = 2025, this.message = t && t.message ? t.message : "illegal operation"
        }
    }
    class gS extends ut {
        constructor(t) {
            super(t), this.code = 2026, this.message = t && t.message ? t.message : "invalid ACL change"
        }
    }
    class mS extends ut {
        constructor(t) {
            super(t), this.code = 2027, this.message = t && t.message ? t.message : "room has already ended"
        }
    }
    class vS extends ut {
        constructor(t) {
            super(t), this.code = 2028, this.message = t && t.message ? t.message : "the entity is locked"
        }
    }
    class yS extends ut {
        constructor(t) {
            super(t), this.code = 2420, this.message = t && t.message ? t.message : "rate limit exceeded"
        }
    }

    function Cj({
        code: e,
        message: t
    }) {
        const r = Ij[e];
        return r ? new r({
            message: t
        }) : new xc({
            message: t
        })
    }
    var ts = {
        createError: Cj,
        CallError: xc,
        EcastServerError: mo,
        EcastCreateRoomFailed: GT,
        EcastDialRoomFailed: WT,
        EcastServerIsShuttingDown: HT,
        EcastClientError: ut,
        EcastParseError: KT,
        EcastRequestIsMissingOpcode: VT,
        EcastRequestHasInvalidOpcode: qT,
        EcastRequestHasInvalidArguments: YT,
        EcastEntityNotFound: zT,
        EcastEntityAlreadyExists: XT,
        EcastEntityTypeError: JT,
        EcastNoSuchClient: QT,
        EcastRoomIsLocked: ZT,
        EcastRoomIsFull: eS,
        EcastLicenseNotFound: tS,
        EcastLicenseCheckFailed: rS,
        EcastRoomNotFound: nS,
        EcastInvalidRole: iS,
        EcastTwitchLoginRequired: sS,
        EcastInvalidOption: aS,
        EcastPasswordRequired: oS,
        EcastInvalidPassword: lS,
        EcastNameRequired: cS,
        EcastFilterError: uS,
        EcastNoSuchFilter: fS,
        EcastPermissionDenied: dS,
        EcastNotConnected: hS,
        EcastIllegalOperation: pS,
        EcastACLChangeDenied: gS,
        EcastRoomHasEnded: mS,
        EcastEntityLocked: vS,
        EcastRateLimitExceeded: yS,
        ObservedError: $j
    };
    const Ij = {
        1e3: mo,
        1001: GT,
        1002: WT,
        1003: HT,
        2e3: ut,
        2001: KT,
        2002: VT,
        2003: qT,
        2004: YT,
        2005: zT,
        2006: XT,
        2007: JT,
        2008: QT,
        2009: ZT,
        2010: eS,
        2011: tS,
        2012: rS,
        2013: nS,
        2014: iS,
        2015: sS,
        2016: aS,
        2017: oS,
        2018: lS,
        2019: cS,
        2021: uS,
        2022: fS,
        2023: dS,
        2024: hS,
        2025: pS,
        2026: gS,
        2027: mS,
        2028: vS,
        2420: yS
    };
    class Aj {
        constructor(t) {
            this.id = t.id, this.deviceId = t.deviceId, this.name = t.name, this.secret = t.secret, this.reconnect = t.reconnect, this.entities = t.entities, this.here = t.here, this.profile = t.profile, this.replayEnd = t.replayEnd
        }
    }
    class Nj {
        constructor(t) {
            this.id = t.id, this.userId = t.userId, this.name = t.name, this.role = t.role, this.reconnect = t.reconnect
        }
    }
    class Pj {
        constructor(t) {
            this.id = t.id, this.role = t.role
        }
    }
    class Rj {
        constructor(t) {
            this.to = t.to, this.from = t.from, this.body = t.body, this.userId = t.userId
        }
    }
    class Lj {
        constructor(t) {
            this.id = t.id, this.banned = t.banned, this.reason = t.reason
        }
    }
    var ep = {
        ClientConnected: Nj,
        ClientDisconnected: Pj,
        ClientKicked: Lj,
        ClientSend: Rj,
        ClientWelcome: Aj
    };
    class kj {
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
        CountGroup: kj
    };
    class xj {
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
        GCounter: xj
    };
    class Dj {
        constructor(t) {
            this.pc = t.pc, this.opcode = t.opcode, this.result = t.result
        }
    }
    var _S = {
        Notification: Dj
    };
    class Mj {
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
    class Fj {
        constructor(t) {
            this.message = t.message
        }
        toString() {
            return `ObjectEcho{message: ${this.message}}`
        }
    }
    var np = {
        ObjectEntity: Mj,
        ObjectEcho: Fj
    };
    class Bj {
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
        PNCounter: Bj
    };
    class Uj {
        constructor(t) {
            this.pc = t.pc, this.re = t.re, this.opcode = t.opcode, this.result = t.result
        }
    }
    var bS = {
        Reply: Uj
    };
    class jj {
        constructor(t) {
            this.seq = t.seq, this.opcode = t.opcode, this.params = t.params
        }
    }
    var Gj = {
        Request: jj
    };
    class Wj {
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
    class Hj {
        constructor(t) {
            this.message = t.message
        }
        toString() {
            return `TextEcho{message: ${this.message}
}`
        }
    }
    var sp = {
        TextEntity: Wj,
        TextEcho: Hj
    };
    class Kj {
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
        TextRing: Kj
    };
    class Vj {
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
    var ES = {
        ArtifactEntity: Vj
    };
    class qj {
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
    class Yj {
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
    class zj {
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
        DoodleEntity: qj,
        DoodleLine: Yj,
        DoodleLineRemoved: zj
    };
    class Xj {
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
    class Jj {
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
    class Qj {
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
    var TS = {
        StackEntity: Xj,
        StackElement: Jj,
        StackElements: Qj
    };
    class Zj {
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
    var SS = {
        DropEntity: Zj
    };
    class eG {
        constructor(t) {
            this.message = t.message
        }
        toString() {
            return `Echo{message: ${this.message}
}`
        }
    }
    var tG = {
        Echo: eG
    };
    class rG {
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
    var nG = {
        LockEntity: rG
    };
    class iG {
        constructor() {}
        toString() {
            return "OK"
        }
    }
    var OS = {
        OK: iG
    };
    class sG {
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
    var wS = {
        NumberEntity: sG
    };
    const {
        ArtifactEntity: aG
    } = ES, {
        ClientWelcome: oG,
        ClientConnected: lG,
        ClientDisconnected: cG,
        ClientKicked: uG,
        ClientSend: fG
    } = ep, {
        CountGroup: dG
    } = tp, {
        DoodleEntity: hG,
        DoodleLine: pG,
        DoodleLineRemoved: gG
    } = op, {
        StackEntity: mG,
        StackElement: vG,
        StackElements: yG
    } = TS, {
        DropEntity: _G
    } = SS, {
        Echo: bG
    } = tG, {
        LockEntity: EG
    } = nG, {
        GCounter: TG
    } = rp, {
        GetAudienceReply: SG,
        RoomExit: OG,
        RoomLock: wG
    } = Lc, {
        Notification: $G
    } = _S, {
        OK: CG
    } = OS, {
        NumberEntity: IG
    } = wS, {
        ObjectEcho: AG,
        ObjectEntity: NG
    } = np, {
        PNCounter: My
    } = ip, {
        Reply: PG
    } = bS, {
        TextEcho: RG,
        TextEntity: LG
    } = sp, {
        TextRing: kG
    } = ap, {
        createError: Fy,
        ObservedError: xG
    } = ts;

    function Ld(e, t, r) {
        switch (e) {
            case "ok":
                return new CG;
            case "echo":
                return new bG({
                    message: t.message
                });
            case "lock":
                return new EG({
                    key: t.key,
                    from: t.from
                });
            case "error":
                return Fy({
                    code: t.code,
                    message: t.msg
                });
            case "error/observed":
                return new xG({
                    to: t.to,
                    error: Fy({
                        code: t.error.code,
                        message: t.error.msg
                    })
                });
            case "string":
                return t;
            case "text":
                return new LG({
                    from: t.from,
                    key: t.key,
                    text: t.val,
                    version: t.version,
                    meta: r,
                    acl: t.acl
                });
            case "text/echo":
                return new RG({
                    message: t.message
                });
            case "object":
                return new NG({
                    from: t.from,
                    key: t.key,
                    val: t.val,
                    meta: r,
                    acl: t.acl
                });
            case "object/echo":
                return new AG({
                    message: t.message
                });
            case "drop":
                return new _G({
                    key: t.key
                });
            case "artifact":
                return new aG({
                    key: t.key,
                    artifactId: t.artifactId,
                    categoryId: t.categoryId,
                    rootId: t.rootId,
                    meta: r
                });
            case "client/connected":
                return new lG({
                    id: t.id,
                    userId: t.userId,
                    name: t.name,
                    role: t.role,
                    reconnect: t.reconnect
                });
            case "client/disconnected":
                return new cG({
                    id: t.id,
                    role: t.role
                });
            case "client/kicked":
                return new uG({
                    id: t.id,
                    banned: t.banned,
                    reason: t.reason
                });
            case "client/send":
                return new fG({
                    to: t.to,
                    from: t.from,
                    body: t.body,
                    userId: t.userID
                });
            case "client/welcome": {
                let n = new oG({
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
                        s[o] = Ld(l[0], l[1], l[2])
                    }), n.entities = s
                }
                return n
            }
            case "doodle":
                return new hG({
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
                return new pG({
                    key: t.key,
                    line: t.val
                });
            case "doodle/line/removed":
                return new gG({
                    key: t.key,
                    index: t.index
                });
            case "stack":
                return new mG({
                    key: t.key,
                    size: t.size,
                    from: t.from,
                    version: t.version,
                    meta: t.meta,
                    acl: t.acl
                });
            case "stack/element":
                return new vG({
                    key: t.key,
                    val: t.val
                });
            case "stack/elements":
                return new yG({
                    key: t.key,
                    vals: t.vals
                });
            case "number":
                return new IG({
                    key: t.key,
                    val: t.val,
                    restrictions: t.restrictions,
                    from: t.from,
                    version: t.version,
                    meta: r,
                    acl: t.acl
                });
            case "room/exit":
                return new OG({
                    cause: t.cause
                });
            case "room/lock":
                return new wG;
            case "room/get-audience":
                return new SG({
                    connections: t.connections
                });
            case "audience":
                return new My({
                    key: e,
                    count: t[1]
                });
            case "audience/count-group":
                return new dG({
                    key: t.key,
                    choices: t.choices,
                    meta: r
                });
            case "audience/text-ring":
                return new kG({
                    key: t.key,
                    elements: t.elements,
                    meta: r
                });
            case "audience/g-counter":
                return new TG({
                    key: t.key,
                    count: t.count,
                    meta: r
                });
            case "audience/pn-counter":
                return new My({
                    key: t.key,
                    count: t.count,
                    meta: r
                });
            default:
                return console.error(`failed to parse result of type ${e}: ${JSON.stringify(t,null,2)}`), t
        }
    }

    function DG(e) {
        let t = JSON.parse(e.data),
            r = t.opcode || t.type;
        return t.re ? new PG({
            pc: t.pc,
            re: t.re,
            opcode: r,
            result: Ld(r, t.result)
        }) : new $G({
            pc: t.pc,
            opcode: r,
            result: Ld(r, t.result)
        })
    }
    var MG = {
        parseResponseMessage: DG
    };
    const By = _j,
        FG = LT,
        BG = Zh.exports,
        {
            CallError: UG
        } = ts,
        {
            ClientWelcome: jG
        } = ep,
        {
            CountGroup: GG
        } = tp,
        {
            GCounter: WG
        } = rp,
        {
            Notification: Uy
        } = _S,
        {
            ObjectEntity: Pf
        } = np,
        {
            PNCounter: HG
        } = ip,
        {
            Reply: KG
        } = bS,
        {
            Request: VG
        } = Gj,
        {
            TextEntity: Rf
        } = sp,
        {
            TextRing: qG
        } = ap,
        {
            parseResponseMessage: YG
        } = MG,
        {
            DoodleEntity: zG
        } = op,
        {
            StackEntity: XG
        } = TS,
        JG = 1e3 + Math.floor(Math.random() * 500),
        jy = 13e3;
    class QG extends BG {
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
            const r = FG.stringify(t),
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
                this.conn = new By(n, "ecast-v0"), this.conn.onmessage = g => {
                    this.debugLog(`recv <- ${JSON.stringify(JSON.parse(g.data),null,2)}`);
                    const _ = YG(g);
                    if (_ instanceof KG) this.onReply(_);
                    else if (_ instanceof Uy) {
                        if (_.result instanceof jG) u = !0, this.id = _.result.id, this.deviceId = _.result.deviceId, this.entities = _.result.entities, this.secret = _.result.secret, _.result.name && (this.name = _.result.name), f(_.result);
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
                r = JG;
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
                if (r >= jy) {
                    this.debugLog("reconnect failed!", n), this.emit("socketClose", n);
                    return
                }
                t += 1, this.debugLog("waiting", r), this.emit("connection", {
                    status: "waiting",
                    attempt: t
                }), await this.sleep(r), r = Math.min(jy, r * 2)
            }
        }
        disconnect() {
            !this.conn || (this.conn.close(), this.conn.onmessage = null, this.conn.onerror = null, this.conn.onopen = null, this.conn.onclose = null, this.conn = null)
        }
        onReply(t) {
            const r = t.re,
                n = this.pending[r];
            if (!n) {
                const s = new Uy(t);
                s.re = r, this.emit("notification", s);
                return
            }
            delete this.pending[r], t.result instanceof UG ? n.reject(t.result) : n.resolve(t.result)
        }
        onNotification(t) {
            typeof t.result.whenReceived == "function" && t.result.whenReceived(this), this.emit("notification", t), this.emit(t.opcode, t.result)
        }
        send(t, r = {}) {
            if (!this.conn) throw new Error("No connection available");
            if (this.conn.readyState !== By.OPEN) throw new Error(`Socket not ready to send, readyState is ${this.conn.readyState}`);
            const n = ++this.seq,
                s = new VG({
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
            return this.entities[t] = new Pf({
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
            return this.entities[t] = new Pf({
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
            return this.entities[t] = new Pf({
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
                live: l,
                maxPoints: u,
                size: f,
                weights: h
            } = r;
            s && (n.acl = s), o && (n.colors = o), n.live = l, u != null && (n.maxPoints = u), f && (n.size = f), h && (n.weights = h);
            const g = await this.send("doodle/create", n);
            return this.entities[t] = new zG({
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
            return this.entities[t] = new XG({
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
            return this.entities[t] = new GG({
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
            return this.entities[t] = new WG({
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
            return this.entities[t] = new HG({
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
            return this.entities[t] = new qG({
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
    var ZG = {
        WSClient: QG
    };
    const {
        APIClient: e3
    } = yj, {
        WSClient: t3
    } = ZG, {
        CreateRoomReply: r3,
        GetRoomReply: n3
    } = Lc, {
        ClientWelcome: i3,
        ClientDisconnected: s3
    } = ep, {
        ArtifactEntity: a3
    } = ES, {
        GCounter: o3
    } = rp, {
        NumberEntity: l3
    } = wS, {
        TextEntity: c3
    } = sp, {
        DoodleEntity: u3
    } = op, {
        ObjectEntity: f3
    } = np, {
        CountGroup: d3
    } = tp, {
        DropEntity: h3
    } = SS, {
        OK: p3
    } = OS, {
        RoomExit: g3
    } = Lc, {
        TextRing: m3
    } = ap, {
        PNCounter: v3
    } = ip;
    var Sr = {
        APIClient: e3,
        WSClient: t3,
        ClientWelcome: i3,
        CreateRoomReply: r3,
        DropEntity: h3,
        GetRoomReply: n3,
        ClientDisconnected: s3,
        RoomExit: g3,
        OK: p3,
        ArtifactEntity: a3,
        DoodleEntity: u3,
        NumberEntity: l3,
        CountGroup: d3,
        GCounter: o3,
        ObjectEntity: f3,
        PNCounter: v3,
        TextEntity: c3,
        TextRing: m3
    };
    const y3 = [{
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
        kd = e => y3.find(t => t.tag === e || t.categoryId === e);

    function xd(...e) {
        console.log(...e)
    }
    class _3 {
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
            xd("[Debug] pushEntity", t), t instanceof Sr.ArtifactEntity ? this.items.push({
                type: "artifact",
                ...t
            }) : t instanceof Sr.DoodleEntity ? this.items.push({
                type: "doodle",
                ...t
            }) : t instanceof Sr.DropEntity ? this.items.push({
                key: t.key,
                type: "drop"
            }) : t instanceof Sr.NumberEntity ? this.items.push({
                key: t.key,
                type: "number",
                value: t.val,
                meta: t.meta,
                restrictions: t.restrictions
            }) : t instanceof Sr.ObjectEntity ? (t.val.kind && (this.automarkPendingLabel = t.val.kind), this.items.push({
                key: t.key,
                type: "object",
                value: t.val,
                meta: t.meta
            })) : t instanceof Sr.TextEntity && this.items.push({
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
            const n = kd(this.room.appTag),
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
                    const U = kd(this.room.appTag);
                    $.username = `DebugRecorder ${U?U.name:this.room.appTag}`
                }
                const M = await (await fetch(h, {
                    method: "POST",
                    body: JSON.stringify($)
                })).text();
                xd("[Debug] sendToSlack", M)
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
            <iframe src="main/pp9/antique-freak/assets/48157c05.false" frameborder="0" style="border:0;
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

    function b3(e) {
        throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
    }
    var Gy = {
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
                    var R = u(S[1]),
                        Z = u(S[2]);
                    R === null || Z === null || R in P || (P[R] = Z)
                }
                return P
            }

            function g(w, T) {
                T = T || "";
                var P = [],
                    S, R;
                typeof T != "string" && (T = "?");
                for (R in w)
                    if (o.call(w, R)) {
                        if (S = w[R], !S && (S === null || S === l || isNaN(S)) && (S = ""), R = f(R), S = f(S), R === null || S === null) continue;
                        P.push(R + "=" + S)
                    } return P.length ? T + P.join("&") : ""
            }
            var _ = g,
                E = h,
                $ = {
                    stringify: _,
                    parse: E
                },
                L = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
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
                G = {
                    hash: 1,
                    query: 1
                };

            function j(w) {
                var T;
                typeof window < "u" ? T = window : typeof n < "u" ? T = n : typeof self < "u" ? T = self : T = {};
                var P = T.location || {};
                w = w || P;
                var S = {},
                    R = typeof w,
                    Z;
                if (w.protocol === "blob:") S = new ue(unescape(w.pathname), {});
                else if (R === "string") {
                    S = new ue(w, {});
                    for (Z in G) delete S[Z]
                } else if (R === "object") {
                    for (Z in w) Z in G || (S[Z] = w[Z]);
                    S.slashes === void 0 && (S.slashes = L.test(w.href))
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
                    R = !!P[2],
                    Z = !!P[3],
                    ne = 0,
                    _e;
                return R ? Z ? (_e = P[2] + P[3] + P[4], ne = P[2].length + P[3].length) : (_e = P[2] + P[4], ne = P[2].length) : Z ? (_e = P[3] + P[4], ne = P[3].length) : _e = P[4], S === "file:" ? ne >= 2 && (_e = _e.slice(2)) : Q(S) ? _e = P[4] : S ? R && (_e = _e.slice(2)) : ne >= 2 && Q(T.protocol) && (_e = P[4]), {
                    protocol: S,
                    slashes: R || Q(S),
                    slashesCount: ne,
                    rest: _e
                }
            }

            function le(w, T) {
                if (w === "") return T;
                for (var P = (T || "/").split("/").slice(0, -1).concat(w.split("/")), S = P.length, R = P[S - 1], Z = !1, ne = 0; S--;) P[S] === "." ? P.splice(S, 1) : P[S] === ".." ? (P.splice(S, 1), ne++) : ne && (S === 0 && (Z = !0), P.splice(S, 1), ne--);
                return Z && P.unshift(""), (R === "." || R === "..") && P.push(""), P.join("/")
            }

            function ue(w, T, P) {
                if (w = V(w), !(this instanceof ue)) return new ue(w, T, P);
                var S, R, Z, ne, _e, Te, ft = X.slice(),
                    nr = typeof T,
                    Me = this,
                    fa = 0;
                for (nr !== "object" && nr !== "string" && (P = T, T = null), P && typeof P != "function" && (P = $.parse), T = j(T), R = oe(w || "", T), S = !R.protocol && !R.slashes, Me.slashes = R.slashes || S && T.slashes, Me.protocol = R.protocol || T.protocol || "", w = R.rest, (Me.protocol === "file:" || !R.slashes && (R.protocol || R.slashesCount < 2 || !Q(Me.protocol))) && (ft[3] = [/(.*)/, "pathname"]); fa < ft.length; fa++) {
                    if (ne = ft[fa], typeof ne == "function") {
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
                            var R = w === "pathname" ? "/" : "#";
                            S[w] = T.charAt(0) !== R ? R + T : T
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
                var R = S + (P.slashes || Q(P.protocol) ? "//" : "");
                return P.username && (R += P.username, P.password && (R += ":" + P.password), R += "@"), R += P.host + P.pathname, T = typeof P.query == "object" ? w(P.query) : P.query, T && (R += T.charAt(0) !== "?" ? "?" + T : T), P.hash && (R += P.hash), R
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
                this.listeners[T] = ie(S, function(R) {
                    return R === P
                })
            }, be.prototype.dispatchEvent = function(T) {
                for (var P = this, S = [], R = arguments.length - 1; R-- > 0;) S[R] = arguments[R + 1];
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
                    R = this.urlMap[S];
                if (R && R.server && R.websockets.indexOf(T) === -1) return R.websockets.push(T), R.server
            }, Oe.prototype.addMembershipToRoom = function(T, P) {
                var S = this.urlMap[ve(T.url)];
                S && S.server && S.websockets.indexOf(T) !== -1 && (S.roomMemberships[P] || (S.roomMemberships[P] = []), S.roomMemberships[P].push(T))
            }, Oe.prototype.attachServer = function(T, P) {
                var S = ve(P),
                    R = this.urlMap[S];
                if (!R) return this.urlMap[S] = {
                    server: T,
                    websockets: [],
                    roomMemberships: {}
                }, T
            }, Oe.prototype.serverLookup = function(T) {
                var P = ve(T),
                    S = this.urlMap[P];
                if (S) return S.server
            }, Oe.prototype.websocketsLookup = function(T, P, S) {
                var R = ve(T),
                    Z, ne = this.urlMap[R];
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
                    R = this.urlMap[S];
                R && (R.websockets = ie(R.websockets, function(Z) {
                    return Z === T
                }))
            }, Oe.prototype.removeMembershipFromRoom = function(T, P) {
                var S = this.urlMap[ve(T.url)],
                    R = S.roomMemberships[P];
                S && R !== null && (S.roomMemberships[P] = ie(R, function(Z) {
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
                Ct = function() {};
            Ct.prototype.stopPropagation = function() {}, Ct.prototype.stopImmediatePropagation = function() {}, Ct.prototype.initEvent = function(T, P, S) {
                T === void 0 && (T = "undefined"), P === void 0 && (P = !1), S === void 0 && (S = !1), this.type = "" + T, this.bubbles = Boolean(P), this.cancelable = Boolean(S)
            };
            var $r = function(w) {
                    function T(P, S) {
                        if (S === void 0 && (S = {}), w.call(this), !P) throw new TypeError(tt.EVENT_ERROR + " 1 argument required, but only 0 present.");
                        if (typeof S != "object") throw new TypeError(tt.EVENT_ERROR + " parameter 2 ('eventInitDict') is not an object.");
                        var R = S.bubbles,
                            Z = S.cancelable;
                        this.type = "" + P, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = Z ? Boolean(Z) : !1, this.cancelBubble = !1, this.bubbles = R ? Boolean(R) : !1
                    }
                    return w && (T.__proto__ = w), T.prototype = Object.create(w && w.prototype), T.prototype.constructor = T, T
                }(Ct),
                rr = function(w) {
                    function T(P, S) {
                        if (S === void 0 && (S = {}), w.call(this), !P) throw new TypeError(tt.EVENT.MESSAGE + " 1 argument required, but only 0 present.");
                        if (typeof S != "object") throw new TypeError(tt.EVENT.MESSAGE + " parameter 2 ('eventInitDict') is not an object");
                        var R = S.bubbles,
                            Z = S.cancelable,
                            ne = S.data,
                            _e = S.origin,
                            Te = S.lastEventId,
                            ft = S.ports;
                        this.type = "" + P, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = Z ? Boolean(Z) : !1, this.canncelBubble = !1, this.bubbles = R ? Boolean(R) : !1, this.origin = "" + _e, this.ports = typeof ft > "u" ? null : ft, this.data = typeof ne > "u" ? null : ne, this.lastEventId = "" + (Te || "")
                    }
                    return w && (T.__proto__ = w), T.prototype = Object.create(w && w.prototype), T.prototype.constructor = T, T
                }(Ct),
                mr = function(w) {
                    function T(P, S) {
                        if (S === void 0 && (S = {}), w.call(this), !P) throw new TypeError(tt.EVENT.CLOSE + " 1 argument required, but only 0 present.");
                        if (typeof S != "object") throw new TypeError(tt.EVENT.CLOSE + " parameter 2 ('eventInitDict') is not an object");
                        var R = S.bubbles,
                            Z = S.cancelable,
                            ne = S.code,
                            _e = S.reason,
                            Te = S.wasClean;
                        this.type = "" + P, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = Z ? Boolean(Z) : !1, this.cancelBubble = !1, this.bubbles = R ? Boolean(R) : !1, this.code = typeof ne == "number" ? parseInt(ne, 10) : 0, this.reason = "" + (_e || ""), this.wasClean = Te ? Boolean(Te) : !1
                    }
                    return w && (T.__proto__ = w), T.prototype = Object.create(w && w.prototype), T.prototype.constructor = T, T
                }(Ct);

            function at(w) {
                var T = w.type,
                    P = w.target,
                    S = new $r(T);
                return P && (S.target = P, S.srcElement = P, S.currentTarget = P), S
            }

            function Tt(w) {
                var T = w.type,
                    P = w.origin,
                    S = w.data,
                    R = w.target,
                    Z = new rr(T, {
                        data: S,
                        origin: P
                    });
                return R && (Z.target = R, Z.srcElement = R, Z.currentTarget = R), Z
            }

            function ot(w) {
                var T = w.code,
                    P = w.reason,
                    S = w.type,
                    R = w.target,
                    Z = w.wasClean;
                Z || (Z = T === Ge.CLOSE_NORMAL || T === Ge.CLOSE_NO_STATUS);
                var ne = new mr(S, {
                    code: T,
                    reason: P,
                    wasClean: Z
                });
                return R && (ne.target = R, ne.srcElement = R, ne.currentTarget = R), ne
            }

            function kt(w, T, P) {
                w.readyState = Y.CLOSING;
                var S = Fe.serverLookup(w.url),
                    R = ot({
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
                    Fe.removeWebSocket(w, w.url), w.readyState = Y.CLOSED, w.dispatchEvent(R), w.dispatchEvent(Z), S && S.dispatchEvent(R, S)
                }, w)
            }

            function Ht(w, T, P) {
                w.readyState = Y.CLOSING;
                var S = Fe.serverLookup(w.url),
                    R = ot({
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
                    Fe.removeWebSocket(w, w.url), w.readyState = Y.CLOSED, w.dispatchEvent(ne), w.dispatchEvent(R), w.dispatchEvent(Z), S && S.dispatchEvent(R, S)
                }, w)
            }

            function xt(w) {
                return Object.prototype.toString.call(w) !== "[object Blob]" && !(w instanceof ArrayBuffer) && (w = String(w)), w
            }
            var m = new WeakMap;

            function p(w) {
                if (m.has(w)) return m.get(w);
                var T = new Proxy(w, {
                    get: function(S, R) {
                        return R === "close" ? function(ne) {
                            ne === void 0 && (ne = {});
                            var _e = ne.code || Ge.CLOSE_NORMAL,
                                Te = ne.reason || "";
                            kt(T, _e, Te)
                        } : R === "send" ? function(ne) {
                            ne = xt(ne), w.dispatchEvent(Tt({
                                type: "message",
                                data: ne,
                                origin: this.url,
                                target: w
                            }))
                        } : R === "on" ? function(ne, _e) {
                            w.addEventListener("server::" + ne, _e)
                        } : R === "target" ? w : S[R]
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
                    R = T.hash;
                if (!w) throw new TypeError(tt.CONSTRUCTOR_ERROR + " 1 argument required, but only 0 present.");
                if (P || (T.pathname = "/"), S === "") throw new SyntaxError(tt.CONSTRUCTOR_ERROR + " The URL '" + T.toString() + "' is invalid.");
                if (S !== "ws:" && S !== "wss:") throw new SyntaxError(tt.CONSTRUCTOR_ERROR + " The URL's scheme must be either 'ws' or 'wss'. '" + S + "' is not allowed.");
                if (R !== "") throw new SyntaxError(tt.CONSTRUCTOR_ERROR + " The URL contains a fragment identifier ('" + R + "'). Fragment identifiers are not allowed in WebSocket URLs.");
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
                    }).reduce(function(S, R) {
                        return S[R.protocol] = (S[R.protocol] || 0) + R.count, S
                    }, {}),
                    P = Object.keys(T).filter(function(S) {
                        return T[S] > 1
                    });
                if (P.length > 0) throw new SyntaxError(tt.CONSTRUCTOR_ERROR + " The subprotocol '" + P[0] + "' is duplicated.");
                return w
            }
            var Y = function(w) {
                function T(S, R) {
                    w.call(this), this._onopen = null, this._onmessage = null, this._onerror = null, this._onclose = null, this.url = D(S), R = B(R), this.protocol = R[0] || "", this.binaryType = "blob", this.readyState = T.CONNECTING;
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
                                    var Te = ne.options.selectProtocol(R),
                                        ft = Te !== "",
                                        nr = R.indexOf(Te) !== -1;
                                    if (ft && !nr) {
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
                }, T.prototype.send = function(R) {
                    var Z = this;
                    if (this.readyState === T.CLOSING || this.readyState === T.CLOSED) throw new Error("WebSocket is already in CLOSING or CLOSED state");
                    var ne = Tt({
                            type: "server::message",
                            origin: this.url,
                            data: xt(R)
                        }),
                        _e = Fe.serverLookup(this.url);
                    _e && $e(function() {
                        Z.dispatchEvent(ne, R)
                    }, _e)
                }, T.prototype.close = function(R, Z) {
                    if (R !== void 0 && (typeof R != "number" || R !== 1e3 && (R < 3e3 || R > 4999))) throw new TypeError(tt.CLOSE_ERROR + " The code must be either 1000, or between 3000 and 4999. " + R + " is neither.");
                    if (Z !== void 0) {
                        var ne = O(Z);
                        if (ne > 123) throw new SyntaxError(tt.CLOSE_ERROR + " The message must not be greater than 123 bytes.")
                    }
                    if (!(this.readyState === T.CLOSING || this.readyState === T.CLOSED)) {
                        var _e = p(this);
                        this.readyState === T.CONNECTING ? Ht(_e, R || Ge.CLOSE_ABNORMAL, Z) : kt(_e, R || Ge.CLOSE_NO_STATUS, Z)
                    }
                }, Object.defineProperties(T.prototype, P), T
            }(be);
            Y.CONNECTING = 0, Y.prototype.CONNECTING = Y.CONNECTING, Y.OPEN = 1, Y.prototype.OPEN = Y.OPEN, Y.CLOSING = 2, Y.prototype.CLOSING = Y.CLOSING, Y.CLOSED = 3, Y.prototype.CLOSED = Y.CLOSED;
            var ce = function(w) {
                return w.reduce(function(T, P) {
                    return T.indexOf(P) > -1 ? T : T.concat(P)
                }, [])
            };

            function se() {
                return typeof window < "u" ? window : typeof process == "object" && typeof b3 == "function" && typeof Lt == "object" ? Lt : this
            }
            var re = {
                    mock: !0,
                    verifyClient: null,
                    selectProtocol: null
                },
                A = function(w) {
                    function T(P, S) {
                        S === void 0 && (S = re), w.call(this);
                        var R = new fe(P);
                        R.pathname || (R.pathname = "/"), this.url = R.toString(), this.originalWebSocket = null;
                        var Z = Fe.attachServer(this, this.url);
                        if (!Z) throw this.dispatchEvent(at({
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
                    }, T.prototype.on = function(S, R) {
                        this.addEventListener(S, R)
                    }, T.prototype.close = function(S) {
                        S === void 0 && (S = {});
                        var R = S.code,
                            Z = S.reason,
                            ne = S.wasClean,
                            _e = Fe.websocketsLookup(this.url);
                        Fe.removeServer(this.url), _e.forEach(function(Te) {
                            Te.readyState = Y.CLOSED, Te.dispatchEvent(ot({
                                type: "close",
                                target: Te.target,
                                code: R || Ge.CLOSE_NORMAL,
                                reason: Z || "",
                                wasClean: ne
                            }))
                        }), this.dispatchEvent(ot({
                            type: "close"
                        }), this)
                    }, T.prototype.emit = function(S, R, Z) {
                        var ne = this;
                        Z === void 0 && (Z = {});
                        var _e = Z.websockets;
                        _e || (_e = Fe.websocketsLookup(this.url)), typeof Z != "object" || arguments.length > 3 ? (R = Array.prototype.slice.call(arguments, 1, arguments.length), R = R.map(function(Te) {
                            return xt(Te)
                        })) : R = xt(R), _e.forEach(function(Te) {
                            Array.isArray(R) ? Te.dispatchEvent.apply(Te, [Tt({
                                type: S,
                                data: R,
                                origin: ne.url,
                                target: Te.target
                            })].concat(R)) : Te.dispatchEvent(Tt({
                                type: S,
                                data: R,
                                origin: ne.url,
                                target: Te.target
                            }))
                        })
                    }, T.prototype.clients = function() {
                        return Fe.websocketsLookup(this.url)
                    }, T.prototype.to = function(S, R, Z) {
                        var ne = this;
                        Z === void 0 && (Z = []);
                        var _e = this,
                            Te = ce(Z.concat(Fe.websocketsLookup(this.url, S, R)));
                        return {
                            to: function(ft, nr) {
                                return ne.to.call(ne, ft, nr, Te)
                            },
                            emit: function(nr, Me) {
                                _e.emit(nr, Me, {
                                    websockets: Te
                                })
                            }
                        }
                    }, T.prototype.in = function() {
                        for (var S = [], R = arguments.length; R--;) S[R] = arguments[R];
                        return this.to.apply(null, S)
                    }, T.prototype.simulate = function(S) {
                        var R = Fe.websocketsLookup(this.url);
                        S === "error" && R.forEach(function(Z) {
                            Z.readyState = Y.CLOSED, Z.dispatchEvent(at({
                                type: "error"
                            }))
                        })
                    }, T
                }(be);
            A.of = function(T) {
                return new A(T)
            };
            var K = function(w) {
                function T(S, R) {
                    var Z = this;
                    S === void 0 && (S = "socket.io"), R === void 0 && (R = ""), w.call(this), this.binaryType = "blob";
                    var ne = new fe(S);
                    ne.pathname || (ne.pathname = "/"), this.url = ne.toString(), this.readyState = T.CONNECTING, this.protocol = "", this.target = this, typeof R == "string" || typeof R == "object" && R !== null ? this.protocol = R : Array.isArray(R) && R.length > 0 && (this.protocol = R[0]);
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
                        var R = Fe.serverLookup(this.url);
                        return Fe.removeWebSocket(this, this.url), this.readyState = T.CLOSED, this.dispatchEvent(ot({
                            type: "close",
                            target: this,
                            code: Ge.CLOSE_NORMAL
                        })), R && R.dispatchEvent(ot({
                            type: "disconnect",
                            target: this,
                            code: Ge.CLOSE_NORMAL
                        }), R), this
                    }
                }, T.prototype.disconnect = function() {
                    return this.close()
                }, T.prototype.emit = function(R) {
                    for (var Z = [], ne = arguments.length - 1; ne-- > 0;) Z[ne] = arguments[ne + 1];
                    if (this.readyState !== T.OPEN) throw new Error("SocketIO is already in CLOSING or CLOSED state");
                    var _e = Tt({
                            type: R,
                            origin: this.url,
                            data: Z
                        }),
                        Te = Fe.serverLookup(this.url);
                    return Te && Te.dispatchEvent.apply(Te, [_e].concat(Z)), this
                }, T.prototype.send = function(R) {
                    return this.emit("message", R), this
                }, P.broadcast.get = function() {
                    if (this.readyState !== T.OPEN) throw new Error("SocketIO is already in CLOSING or CLOSED state");
                    var S = this,
                        R = Fe.serverLookup(this.url);
                    if (!R) throw new Error("SocketIO can not find a server at the specified URL (" + this.url + ")");
                    return {
                        emit: function(ne, _e) {
                            return R.emit(ne, _e, {
                                websockets: Fe.websocketsLookup(S.url, null, S)
                            }), S
                        },
                        to: function(ne) {
                            return R.to(ne, S)
                        },
                        in: function(ne) {
                            return R.in(ne, S)
                        }
                    }
                }, T.prototype.on = function(R, Z) {
                    return this.addEventListener(R, Z), this
                }, T.prototype.off = function(R, Z) {
                    this.removeEventListener(R, Z)
                }, T.prototype.hasListeners = function(R) {
                    var Z = this.listeners[R];
                    return Array.isArray(Z) ? !!Z.length : !1
                }, T.prototype.join = function(R) {
                    Fe.addMembershipToRoom(this, R)
                }, T.prototype.leave = function(R) {
                    Fe.removeMembershipFromRoom(this, R)
                }, T.prototype.to = function(R) {
                    return this.broadcast.to(R)
                }, T.prototype.in = function() {
                    return this.to.apply(null, arguments)
                }, T.prototype.dispatchEvent = function(R) {
                    for (var Z = this, ne = [], _e = arguments.length - 1; _e-- > 0;) ne[_e] = arguments[_e + 1];
                    var Te = R.type,
                        ft = this.listeners[Te];
                    if (!Array.isArray(ft)) return !1;
                    ft.forEach(function(nr) {
                        ne.length > 0 ? nr.apply(Z, ne) : nr.call(Z, R.data ? R.data : R)
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
                Ne = Y,
                De = he;
            r.Server = pe, r.WebSocket = Ne, r.SocketIO = De, Object.defineProperty(r, "__esModule", {
                value: !0
            })
        })
    })(Gy, Gy.exports);
    var $S = {
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
                    var L = ((u.x - g) * E + (u.y - _) * $) / (E * E + $ * $);
                    L > 1 ? (g = h.x, _ = h.y) : L > 0 && (g += E * L, _ += $ * L)
                }
                return E = u.x - g, $ = u.y - _, E * E + $ * $
            }

            function n(u, f) {
                for (var h = u[0], g = [h], _, E = 1, $ = u.length; E < $; E++) _ = u[E], t(_, h) > f && (g.push(_), h = _);
                return h !== _ && g.push(_), g
            }

            function s(u, f, h, g, _) {
                for (var E = g, $, L = f + 1; L < h; L++) {
                    var M = r(u[L], u[f], u[h]);
                    M > E && ($ = L, E = M)
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
    })($S);
    const CS = $S.exports;
    class E3 {
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
                x: ar.toPrecision(n.x, this.precision),
                y: ar.toPrecision(n.y, this.precision)
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
                points: CS(this.points, .5).map(r => ({
                    x: ar.toPrecision(r.x, this.precision),
                    y: ar.toPrecision(r.y, this.precision)
                })),
                weight: this.weight
            };
            return this.isInteracting = !1, this.points = [], t
        }
    }
    class T3 {
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
                n = CS(this.currentLine.points);
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
    class S3 {
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
            r.width && (this.width = r.width), r.height && (this.height = r.height), this.stageElement = t, this.setupElements(), this.setupEvents(), r.InteractCanvas ? this.interactCanvas = new r.InteractCanvas(t, this.width, this.height, r) : this.interactCanvas = new T3(t, this.width, this.height, r)
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
    class Wy {
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
                xd("[Feedback] sendToSlack", $)
            } catch (E) {
                console.error("[Feedback] sendToSlack", E)
            }
        }
    }
    const O3 = {
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
        w3 = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "prompts hidden on players\u2019 devices",
                VISIBILITY_CONTROLLER_ON: "prompts shown on players\u2019 devices",
                VISIBILITY_SCREEN_OFF: "prompts hidden on game screen",
                VISIBILITY_SCREEN_ON: "prompts shown on game screen"
            }
        },
        $3 = {
            DISCONNECTED: "You have been disconnected.",
            DRAWING_NOTHING: "You have to draw something!",
            PLAYER_KICKED: "You have been kicked from the game by a moderator.",
            ROOM_DESTROYED: "Thanks for playing!",
            ROOM_DISCONNECTED: "Disconnected",
            TEXT_NAUGHTY: "I\u2019m afraid you can\u2019t write that. Please be respectful of other players.",
            TEXT_NOTHING: "You can\u2019t enter nothing!",
            TITLE: "Error"
        },
        C3 = "LOADING",
        I3 = {
            JOINED_COUNT: "x | {count} of {maxPlayers} players joined | {count} of {maxPlayers} players joined",
            PLAYERS_NEEDED: "x | {count} player needed to start | {count} players needed to start",
            WAITING_FOR_VIP: "Waiting for {name} to start the game",
            WAITING_FOR_GAMEPAD: "Waiting for the game to start",
            GAME_STARTING: "Game is starting",
            BUTTON_START: "Press to Start",
            BUTTON_CANCEL: "Press to Cancel"
        },
        A3 = {
            GALLERY_LINK: "Visit the Gallery",
            PLAY_AGAIN: "Play again?",
            BUTTON_SAME_PLAYERS: "Same Players",
            BUTTON_NEW_PLAYERS: "New Players"
        },
        N3 = {
            AND: "AND",
            OR: "OR"
        },
        P3 = {
            BUTTON_SKIP: "Skip",
            BUTTON_NEXT: "Next",
            BUTTON_DONE: "Let\u2019s Go!"
        },
        R3 = {
            NAME: "AUDIENCE"
        },
        L3 = {
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
        k3 = {
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
        x3 = {
            ACTION: O3,
            ALT: w3,
            ERROR: $3,
            LOADING: C3,
            LOBBY: I3,
            POST_GAME: A3,
            SEPARATOR: N3,
            TUTORIAL: P3,
            AUDIENCE: R3,
            UGC: L3,
            TOAST: k3
        },
        D3 = {
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
        M3 = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "sujets non affich\xE9s sur les appareils des joueurs",
                VISIBILITY_CONTROLLER_ON: "sujets affich\xE9s sur les appareils des joueurs",
                VISIBILITY_SCREEN_OFF: "sujets non affich\xE9s sur l'\xE9cran de jeu",
                VISIBILITY_SCREEN_ON: "sujets affich\xE9s sur l'\xE9cran de jeu"
            }
        },
        F3 = {
            DISCONNECTED: "Vous avez \xE9t\xE9 d\xE9connect\xE9.",
            DRAWING_NOTHING: "Vous devez dessiner quelque chose\xA0!",
            ROOM_DESTROYED: "Merci d'avoir jou\xE9\xA0!",
            ROOM_DISCONNECTED: "D\xE9connexion",
            TEXT_NAUGHTY: "Je crains que vous ne puissiez pas \xE9crire \xE7a. Soyez respectueux des autres joueurs.",
            TEXT_NOTHING: "Vous ne pouvez rien entrer\xA0!",
            TITLE: "Erreur"
        },
        B3 = {
            JOINED_COUNT: "x | {count} joueur sur {maxPlayers} \xE0 rejoint la partie | {count} joueurs sur {maxPlayers} ont rejoint la partie",
            PLAYERS_NEEDED: "x | {count} joueur n\xE9cessaire pour commencer | {count} joueurs n\xE9cessaires pour commencer",
            WAITING_FOR_VIP: "En attente de {name} pour commencer la partie",
            WAITING_FOR_GAMEPAD: "En attente du d\xE9but de la partie",
            GAME_STARTING: "La partie commence",
            BUTTON_START: "Appuyer pour commencer",
            BUTTON_CANCEL: "Appuyer pour annuler"
        },
        U3 = {
            GALLERY_LINK: "Visiter la galerie",
            PLAY_AGAIN: "Rejouer\xA0?",
            BUTTON_SAME_PLAYERS: "Les m\xEAmes joueurs",
            BUTTON_NEW_PLAYERS: "De nouveaux joueurs"
        },
        j3 = {
            AND: "ET",
            OR: "OU"
        },
        G3 = {
            BUTTON_SKIP: "Passer",
            BUTTON_NEXT: "Suivant",
            BUTTON_DONE: "Allons-y\xA0!"
        },
        W3 = {
            NAME: "SPECTATEURS"
        },
        H3 = {
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
        K3 = {
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
        V3 = {
            ACTION: D3,
            ALT: M3,
            ERROR: F3,
            LOBBY: B3,
            POST_GAME: U3,
            SEPARATOR: j3,
            TUTORIAL: G3,
            AUDIENCE: W3,
            UGC: H3,
            TOAST: K3
        },
        q3 = {
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
        Y3 = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "definizioni nascoste sui dispositivi dei giocatori",
                VISIBILITY_CONTROLLER_ON: "definizioni visualizzate sui dispositivi dei giocatori",
                VISIBILITY_SCREEN_OFF: "definizioni nascoste sullo schermo di gioco",
                VISIBILITY_SCREEN_ON: "definizioni visualizzate sullo schermo di gioco"
            }
        },
        z3 = {
            DISCONNECTED: "\xC8 stata effettuata la disconnessione.",
            DRAWING_NOTHING: "Devi disegnare qualcosa!",
            ROOM_DESTROYED: "Grazie per aver scelto di giocare con noi!",
            ROOM_DISCONNECTED: "Disconnessione effettuata",
            TEXT_NAUGHTY: "Purtroppo non puoi scrivere questa cosa. Abbi rispetto per gli altri giocatori.",
            TEXT_NOTHING: "Devi per forza inserire qualcosa!",
            TITLE: "Errore"
        },
        X3 = {
            JOINED_COUNT: "x | Sta partecipando {count} giocatore su {maxPlayers} | Stanno partecipando {count} giocatori su {maxPlayers}",
            PLAYERS_NEEDED: "x | Manca {count} giocatore per iniziare | Mancano {count} giocatori per iniziare",
            WAITING_FOR_VIP: "In attesa di {name} per iniziare la partita",
            WAITING_FOR_GAMEPAD: "In attesa d'iniziare la partita",
            GAME_STARTING: "La partita sta per iniziare",
            BUTTON_START: "Premi per avviare",
            BUTTON_CANCEL: "Premi per annullare"
        },
        J3 = {
            GALLERY_LINK: "Visita la galleria",
            PLAY_AGAIN: "Vuoi giocare di nuovo?",
            BUTTON_SAME_PLAYERS: "Stessi giocatori",
            BUTTON_NEW_PLAYERS: "Nuovi giocatori"
        },
        Q3 = {
            AND: "E",
            OR: "O"
        },
        Z3 = {
            BUTTON_SKIP: "Salta",
            BUTTON_NEXT: "Avanti",
            BUTTON_DONE: "Iniziamo!"
        },
        eW = {
            NAME: "PUBBLICO"
        },
        tW = {
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
        rW = {
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
        nW = {
            ACTION: q3,
            ALT: Y3,
            ERROR: z3,
            LOBBY: X3,
            POST_GAME: J3,
            SEPARATOR: Q3,
            TUTORIAL: Z3,
            AUDIENCE: eW,
            UGC: tW,
            TOAST: rW
        },
        iW = {
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
        sW = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "Prompts auf Spielerger\xE4ten verborgen",
                VISIBILITY_CONTROLLER_ON: "Prompts auf Spielerger\xE4ten angezeigt",
                VISIBILITY_SCREEN_OFF: "Prompts auf Spielbildschirm verborgen",
                VISIBILITY_SCREEN_ON: "Prompts auf Spielbildschirm angezeigt"
            }
        },
        aW = {
            DISCONNECTED: "Deine Verbindung wurde getrennt.",
            DRAWING_NOTHING: "Du musst irgendwas zeichnen!",
            ROOM_DESTROYED: "Danke f\xFCrs Spielen!",
            ROOM_DISCONNECTED: "Verbindung getrennt",
            TEXT_NAUGHTY: "Das kannst du leider nicht schreiben. Bitte nimm R\xFCcksicht auf deine Mitspieler.",
            TEXT_NOTHING: "Du musst etwas eingeben!",
            TITLE: "Fehler"
        },
        oW = {
            JOINED_COUNT: "x | {count} von {maxPlayers} Spielern sind beigetreten | {count} von {maxPlayers} Spielern sind beigetreten",
            PLAYERS_NEEDED: "x | {count} Spieler zum Starten ben\xF6tigt | {count} Spieler zum Starten ben\xF6tigt",
            WAITING_FOR_VIP: "Warten, bis {name} das Spiel startet",
            WAITING_FOR_GAMEPAD: "Warten, bis das Spiel startet",
            GAME_STARTING: "Das Spiel beginnt",
            BUTTON_START: "Zum Starten dr\xFCcken",
            BUTTON_CANCEL: "Zum Abbrechen dr\xFCcken"
        },
        lW = {
            GALLERY_LINK: "Galerie besuchen",
            PLAY_AGAIN: "Erneut spielen?",
            BUTTON_SAME_PLAYERS: "Selbe Spieler",
            BUTTON_NEW_PLAYERS: "Neue Spieler"
        },
        cW = {
            AND: "UND",
            OR: "ODER"
        },
        uW = {
            BUTTON_SKIP: "\xDCberspringen",
            BUTTON_NEXT: "Weiter",
            BUTTON_DONE: "Los geht's!"
        },
        fW = {
            NAME: "PUBLIKUM"
        },
        dW = {
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
        hW = {
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
        pW = {
            ACTION: iW,
            ALT: sW,
            ERROR: aW,
            LOBBY: oW,
            POST_GAME: lW,
            SEPARATOR: cW,
            TUTORIAL: uW,
            AUDIENCE: fW,
            UGC: dW,
            TOAST: hW
        },
        gW = {
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
        mW = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "los enunciados no se muestran en el dispositivo del jugador",
                VISIBILITY_CONTROLLER_ON: "los enunciados se muestran en el dispositivo del jugador",
                VISIBILITY_SCREEN_OFF: "los enunciados no se muestran en la pantalla",
                VISIBILITY_SCREEN_ON: "los enunciados se muestran en la pantalla"
            }
        },
        vW = {
            DISCONNECTED: "Te has desconectado.",
            DRAWING_NOTHING: "\xA1Tienes que dibujar algo!",
            ROOM_DESTROYED: "\xA1Gracias por jugar!",
            ROOM_DISCONNECTED: "Desconectado",
            TEXT_NAUGHTY: "Lo siento, no puedes escribir eso. Hay que ser respetuoso con los dem\xE1s jugadores.",
            TEXT_NOTHING: "Tienes que escribir algo",
            TITLE: "Error"
        },
        yW = {
            JOINED_COUNT: "x | Se ha unido {count} de {maxPlayers} jugadores | Se han unido {count} de {maxPlayers} jugadores",
            PLAYERS_NEEDED: "x | Se necesita {count} jugador para empezar | Se necesitan {count} jugadores para empezar",
            WAITING_FOR_VIP: "Esperando a que {name} inicie la partida",
            WAITING_FOR_GAMEPAD: "Esperando a que empiece la partida",
            GAME_STARTING: "La partida va a empezar",
            BUTTON_START: "Pulsa para empezar",
            BUTTON_CANCEL: "Pulsa para cancelar"
        },
        _W = {
            GALLERY_LINK: "Visita la galer\xEDa",
            PLAY_AGAIN: "\xBFJugar otra vez?",
            BUTTON_SAME_PLAYERS: "Los mismos jugadores",
            BUTTON_NEW_PLAYERS: "Otros jugadores"
        },
        bW = {
            AND: "Y",
            OR: "O"
        },
        EW = {
            BUTTON_SKIP: "Omitir",
            BUTTON_NEXT: "Siguiente",
            BUTTON_DONE: "\xA1Vamos!"
        },
        TW = {
            NAME: "P\xDABLICO"
        },
        SW = {
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
        OW = {
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
        wW = {
            ACTION: gW,
            ALT: mW,
            ERROR: vW,
            LOBBY: yW,
            POST_GAME: _W,
            SEPARATOR: bW,
            TUTORIAL: EW,
            AUDIENCE: TW,
            UGC: SW,
            TOAST: OW
        },
        $W = {
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
        CW = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "indicaciones ocultas en los dispositivos de los jugadores",
                VISIBILITY_CONTROLLER_ON: "indicaciones se muestran en los dispositivos de los jugadores",
                VISIBILITY_SCREEN_OFF: "indicaciones ocultas en la pantalla del juego",
                VISIBILITY_SCREEN_ON: "indicaciones se muestran en la pantalla del juego"
            }
        },
        IW = {
            DISCONNECTED: "Te has desconectado.",
            DRAWING_NOTHING: "\xA1Tienes que dibujar algo!",
            ROOM_DESTROYED: "\xA1Gracias por jugar!",
            ROOM_DISCONNECTED: "Desconectado",
            TEXT_NAUGHTY: "Lo siento, no puedes escribir eso. Seamos respetuosos con los dem\xE1s jugadores.",
            TEXT_NOTHING: "Tienes que escribir algo",
            TITLE: "Error"
        },
        AW = {
            JOINED_COUNT: "x | Se ha unido {count} de {maxPlayers} jugadores | Se han unido {count} de {maxPlayers} jugadores",
            PLAYERS_NEEDED: "x | Se necesita {count} jugador para empezar | Se necesitan {count} jugadores para empezar",
            WAITING_FOR_VIP: "Esperando a que {name} inicie la partida",
            WAITING_FOR_GAMEPAD: "Esperando a que empiece la partida",
            GAME_STARTING: "La partida va a empezar",
            BUTTON_START: "Pulsa para empezar",
            BUTTON_CANCEL: "Pulsa para cancelar"
        },
        NW = {
            GALLERY_LINK: "Visita la galer\xEDa",
            PLAY_AGAIN: "\xBFJugar otra vez?",
            BUTTON_SAME_PLAYERS: "Los mismos jugadores",
            BUTTON_NEW_PLAYERS: "Otros jugadores"
        },
        PW = {
            AND: "Y",
            OR: "O"
        },
        RW = {
            BUTTON_SKIP: "Omitir",
            BUTTON_NEXT: "Siguiente",
            BUTTON_DONE: "\xA1Vamos!"
        },
        LW = {
            NAME: "P\xDABLICO"
        },
        kW = {
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
        xW = {
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
        DW = {
            ACTION: $W,
            ALT: CW,
            ERROR: IW,
            LOBBY: AW,
            POST_GAME: NW,
            SEPARATOR: PW,
            TUTORIAL: RW,
            AUDIENCE: LW,
            UGC: kW,
            TOAST: xW
        },
        MW = {
            en: x3,
            fr: V3,
            it: nW,
            de: pW,
            es: wW,
            "es-XL": DW
        },
        FW = et({
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
                    this.canvas = Bn(new E3(e, this.player.doodle, this.canvasOptions))
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
        BW = {
            class: "doodle"
        },
        UW = {
            ref: "canvas"
        },
        jW = ["disabled"],
        GW = ["disabled"];

    function WW(e, t, r, n, s, o) {
        const l = Dt("pointerbox-translate"),
            u = Dt("pointerbox"),
            f = Dt("t");
        return W(), z("div", BW, [Ie((W(), z("div", {
            class: "stage",
            "onPointerbox:start": t[0] || (t[0] = (...h) => e.onPointerBoxStart && e.onPointerBoxStart(...h)),
            "onPointerbox:move": t[1] || (t[1] = (...h) => e.onPointerBoxMove && e.onPointerBoxMove(...h)),
            "onPointerbox:end": t[2] || (t[2] = (...h) => e.onPointerBoxEnd && e.onPointerBoxEnd(...h))
        }, [Ie(H("canvas", UW, null, 512), [
            [l, {
                id: "doodleCanvas",
                width: e.pointerBoxWidth,
                height: e.pointerBoxHeight
            }]
        ])], 32)), [
            [u]
        ]), e.hideUndo ? Se("", !0) : Ie((W(), z("button", {
            key: 0,
            class: "doodle-action undo",
            disabled: !e.canSubmit,
            onClick: t[3] || (t[3] = Zt((...h) => e.onUndo && e.onUndo(...h), ["prevent"]))
        }, null, 8, jW)), [
            [f, "ACTION.UNDO"]
        ]), e.hideSubmit ? Se("", !0) : Ie((W(), z("button", {
            key: 1,
            class: "doodle-action submit",
            disabled: !e.canSubmit,
            onClick: t[4] || (t[4] = Zt((...h) => e.onSubmit && e.onSubmit(...h), ["prevent"]))
        }, null, 8, GW)), [
            [f, "ACTION.SUBMIT"]
        ])])
    }
    const HW = ct(FW, [
        ["render", WW]
    ]);
    var ec = {
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
                L = 1,
                M = 2,
                U = 1,
                C = 2,
                V = 4,
                X = 8,
                G = 16,
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
                Ct = Ge >>> 1,
                $r = [
                    ["ary", oe],
                    ["bind", U],
                    ["bindKey", C],
                    ["curry", X],
                    ["curryRight", G],
                    ["flip", ue],
                    ["partial", j],
                    ["partialRight", Q],
                    ["rearg", le]
                ],
                rr = "[object Arguments]",
                mr = "[object Array]",
                at = "[object AsyncFunction]",
                Tt = "[object Boolean]",
                ot = "[object Date]",
                kt = "[object DOMException]",
                Ht = "[object Error]",
                xt = "[object Function]",
                m = "[object GeneratorFunction]",
                p = "[object Map]",
                O = "[object Number]",
                D = "[object Null]",
                B = "[object Object]",
                Y = "[object Promise]",
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
                R = "[object Int16Array]",
                Z = "[object Int32Array]",
                ne = "[object Uint8Array]",
                _e = "[object Uint8ClampedArray]",
                Te = "[object Uint16Array]",
                ft = "[object Uint32Array]",
                nr = /\b__p \+= '';/g,
                Me = /\b(__p \+=) '' \+/g,
                fa = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
                Hp = /&(?:amp|lt|gt|quot|#39);/g,
                Kp = /[&<>"']/g,
                Iw = RegExp(Hp.source),
                Aw = RegExp(Kp.source),
                Nw = /<%-([\s\S]+?)%>/g,
                Pw = /<%([\s\S]+?)%>/g,
                Vp = /<%=([\s\S]+?)%>/g,
                Rw = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                Lw = /^\w*$/,
                kw = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                tu = /[\\^$.*+?()[\]{}|]/g,
                xw = RegExp(tu.source),
                ru = /^\s+/,
                Dw = /\s/,
                Mw = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
                Fw = /\{\n\/\* \[wrapped with (.+)\] \*/,
                Bw = /,? & /,
                Uw = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
                jw = /[()=,{}\[\]\/\s]/,
                Gw = /\\(\\)?/g,
                Ww = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
                qp = /\w*$/,
                Hw = /^[-+]0x[0-9a-f]+$/i,
                Kw = /^0b[01]+$/i,
                Vw = /^\[object .+?Constructor\]$/,
                qw = /^0o[0-7]+$/i,
                Yw = /^(?:0|[1-9]\d*)$/,
                zw = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
                wo = /($^)/,
                Xw = /['\n\r\u2028\u2029\\]/g,
                $o = "\\ud800-\\udfff",
                Jw = "\\u0300-\\u036f",
                Qw = "\\ufe20-\\ufe2f",
                Zw = "\\u20d0-\\u20ff",
                Yp = Jw + Qw + Zw,
                zp = "\\u2700-\\u27bf",
                Xp = "a-z\\xdf-\\xf6\\xf8-\\xff",
                e0 = "\\xac\\xb1\\xd7\\xf7",
                t0 = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
                r0 = "\\u2000-\\u206f",
                n0 = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
                Jp = "A-Z\\xc0-\\xd6\\xd8-\\xde",
                Qp = "\\ufe0e\\ufe0f",
                Zp = e0 + t0 + r0 + n0,
                nu = "['\u2019]",
                i0 = "[" + $o + "]",
                eg = "[" + Zp + "]",
                Co = "[" + Yp + "]",
                tg = "\\d+",
                s0 = "[" + zp + "]",
                rg = "[" + Xp + "]",
                ng = "[^" + $o + Zp + tg + zp + Xp + Jp + "]",
                iu = "\\ud83c[\\udffb-\\udfff]",
                a0 = "(?:" + Co + "|" + iu + ")",
                ig = "[^" + $o + "]",
                su = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                au = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                us = "[" + Jp + "]",
                sg = "\\u200d",
                ag = "(?:" + rg + "|" + ng + ")",
                o0 = "(?:" + us + "|" + ng + ")",
                og = "(?:" + nu + "(?:d|ll|m|re|s|t|ve))?",
                lg = "(?:" + nu + "(?:D|LL|M|RE|S|T|VE))?",
                cg = a0 + "?",
                ug = "[" + Qp + "]?",
                l0 = "(?:" + sg + "(?:" + [ig, su, au].join("|") + ")" + ug + cg + ")*",
                c0 = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
                u0 = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
                fg = ug + cg + l0,
                f0 = "(?:" + [s0, su, au].join("|") + ")" + fg,
                d0 = "(?:" + [ig + Co + "?", Co, su, au, i0].join("|") + ")",
                h0 = RegExp(nu, "g"),
                p0 = RegExp(Co, "g"),
                ou = RegExp(iu + "(?=" + iu + ")|" + d0 + fg, "g"),
                g0 = RegExp([us + "?" + rg + "+" + og + "(?=" + [eg, us, "$"].join("|") + ")", o0 + "+" + lg + "(?=" + [eg, us + ag, "$"].join("|") + ")", us + "?" + ag + "+" + og, us + "+" + lg, u0, c0, tg, f0].join("|"), "g"),
                m0 = RegExp("[" + sg + $o + Yp + Qp + "]"),
                v0 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
                y0 = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
                _0 = -1,
                bt = {};
            bt[T] = bt[P] = bt[S] = bt[R] = bt[Z] = bt[ne] = bt[_e] = bt[Te] = bt[ft] = !0, bt[rr] = bt[mr] = bt[De] = bt[Tt] = bt[w] = bt[ot] = bt[Ht] = bt[xt] = bt[p] = bt[O] = bt[B] = bt[se] = bt[re] = bt[A] = bt[pe] = !1;
            var mt = {};
            mt[rr] = mt[mr] = mt[De] = mt[w] = mt[Tt] = mt[ot] = mt[T] = mt[P] = mt[S] = mt[R] = mt[Z] = mt[p] = mt[O] = mt[B] = mt[se] = mt[re] = mt[A] = mt[K] = mt[ne] = mt[_e] = mt[Te] = mt[ft] = !0, mt[Ht] = mt[xt] = mt[pe] = !1;
            var b0 = {
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
                E0 = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;"
                },
                T0 = {
                    "&amp;": "&",
                    "&lt;": "<",
                    "&gt;": ">",
                    "&quot;": '"',
                    "&#39;": "'"
                },
                S0 = {
                    "\\": "\\",
                    "'": "'",
                    "\n": "n",
                    "\r": "r",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                },
                O0 = parseFloat,
                w0 = parseInt,
                dg = typeof Lt == "object" && Lt && Lt.Object === Object && Lt,
                $0 = typeof self == "object" && self && self.Object === Object && self,
                zt = dg || $0 || Function("return this")(),
                lu = t && !t.nodeType && t,
                wi = lu && !0 && e && !e.nodeType && e,
                hg = wi && wi.exports === lu,
                cu = hg && dg.process,
                Br = function() {
                    try {
                        var k = wi && wi.require && wi.require("util").types;
                        return k || cu && cu.binding && cu.binding("util")
                    } catch {}
                }(),
                pg = Br && Br.isArrayBuffer,
                gg = Br && Br.isDate,
                mg = Br && Br.isMap,
                vg = Br && Br.isRegExp,
                yg = Br && Br.isSet,
                _g = Br && Br.isTypedArray;

            function Cr(k, J, q) {
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

            function C0(k, J, q, Ee) {
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

            function I0(k, J) {
                for (var q = k == null ? 0 : k.length; q-- && J(k[q], q, k) !== !1;);
                return k
            }

            function bg(k, J) {
                for (var q = -1, Ee = k == null ? 0 : k.length; ++q < Ee;)
                    if (!J(k[q], q, k)) return !1;
                return !0
            }

            function Gn(k, J) {
                for (var q = -1, Ee = k == null ? 0 : k.length, Be = 0, it = []; ++q < Ee;) {
                    var Ft = k[q];
                    J(Ft, q, k) && (it[Be++] = Ft)
                }
                return it
            }

            function Io(k, J) {
                var q = k == null ? 0 : k.length;
                return !!q && fs(k, J, 0) > -1
            }

            function uu(k, J, q) {
                for (var Ee = -1, Be = k == null ? 0 : k.length; ++Ee < Be;)
                    if (q(J, k[Ee])) return !0;
                return !1
            }

            function St(k, J) {
                for (var q = -1, Ee = k == null ? 0 : k.length, Be = Array(Ee); ++q < Ee;) Be[q] = J(k[q], q, k);
                return Be
            }

            function Wn(k, J) {
                for (var q = -1, Ee = J.length, Be = k.length; ++q < Ee;) k[Be + q] = J[q];
                return k
            }

            function fu(k, J, q, Ee) {
                var Be = -1,
                    it = k == null ? 0 : k.length;
                for (Ee && it && (q = k[++Be]); ++Be < it;) q = J(q, k[Be], Be, k);
                return q
            }

            function A0(k, J, q, Ee) {
                var Be = k == null ? 0 : k.length;
                for (Ee && Be && (q = k[--Be]); Be--;) q = J(q, k[Be], Be, k);
                return q
            }

            function du(k, J) {
                for (var q = -1, Ee = k == null ? 0 : k.length; ++q < Ee;)
                    if (J(k[q], q, k)) return !0;
                return !1
            }
            var N0 = hu("length");

            function P0(k) {
                return k.split("")
            }

            function R0(k) {
                return k.match(Uw) || []
            }

            function Eg(k, J, q) {
                var Ee;
                return q(k, function(Be, it, Ft) {
                    if (J(Be, it, Ft)) return Ee = it, !1
                }), Ee
            }

            function Ao(k, J, q, Ee) {
                for (var Be = k.length, it = q + (Ee ? 1 : -1); Ee ? it-- : ++it < Be;)
                    if (J(k[it], it, k)) return it;
                return -1
            }

            function fs(k, J, q) {
                return J === J ? H0(k, J, q) : Ao(k, Tg, q)
            }

            function L0(k, J, q, Ee) {
                for (var Be = q - 1, it = k.length; ++Be < it;)
                    if (Ee(k[Be], J)) return Be;
                return -1
            }

            function Tg(k) {
                return k !== k
            }

            function Sg(k, J) {
                var q = k == null ? 0 : k.length;
                return q ? gu(k, J) / q : Fe
            }

            function hu(k) {
                return function(J) {
                    return J == null ? r : J[k]
                }
            }

            function pu(k) {
                return function(J) {
                    return k == null ? r : k[J]
                }
            }

            function Og(k, J, q, Ee, Be) {
                return Be(k, function(it, Ft, pt) {
                    q = Ee ? (Ee = !1, it) : J(q, it, Ft, pt)
                }), q
            }

            function k0(k, J) {
                var q = k.length;
                for (k.sort(J); q--;) k[q] = k[q].value;
                return k
            }

            function gu(k, J) {
                for (var q, Ee = -1, Be = k.length; ++Ee < Be;) {
                    var it = J(k[Ee]);
                    it !== r && (q = q === r ? it : q + it)
                }
                return q
            }

            function mu(k, J) {
                for (var q = -1, Ee = Array(k); ++q < k;) Ee[q] = J(q);
                return Ee
            }

            function x0(k, J) {
                return St(J, function(q) {
                    return [q, k[q]]
                })
            }

            function wg(k) {
                return k && k.slice(0, Ag(k) + 1).replace(ru, "")
            }

            function Ir(k) {
                return function(J) {
                    return k(J)
                }
            }

            function vu(k, J) {
                return St(J, function(q) {
                    return k[q]
                })
            }

            function da(k, J) {
                return k.has(J)
            }

            function $g(k, J) {
                for (var q = -1, Ee = k.length; ++q < Ee && fs(J, k[q], 0) > -1;);
                return q
            }

            function Cg(k, J) {
                for (var q = k.length; q-- && fs(J, k[q], 0) > -1;);
                return q
            }

            function D0(k, J) {
                for (var q = k.length, Ee = 0; q--;) k[q] === J && ++Ee;
                return Ee
            }
            var M0 = pu(b0),
                F0 = pu(E0);

            function B0(k) {
                return "\\" + S0[k]
            }

            function U0(k, J) {
                return k == null ? r : k[J]
            }

            function ds(k) {
                return m0.test(k)
            }

            function j0(k) {
                return v0.test(k)
            }

            function G0(k) {
                for (var J, q = []; !(J = k.next()).done;) q.push(J.value);
                return q
            }

            function yu(k) {
                var J = -1,
                    q = Array(k.size);
                return k.forEach(function(Ee, Be) {
                    q[++J] = [Be, Ee]
                }), q
            }

            function Ig(k, J) {
                return function(q) {
                    return k(J(q))
                }
            }

            function Hn(k, J) {
                for (var q = -1, Ee = k.length, Be = 0, it = []; ++q < Ee;) {
                    var Ft = k[q];
                    (Ft === J || Ft === g) && (k[q] = g, it[Be++] = q)
                }
                return it
            }

            function No(k) {
                var J = -1,
                    q = Array(k.size);
                return k.forEach(function(Ee) {
                    q[++J] = Ee
                }), q
            }

            function W0(k) {
                var J = -1,
                    q = Array(k.size);
                return k.forEach(function(Ee) {
                    q[++J] = [Ee, Ee]
                }), q
            }

            function H0(k, J, q) {
                for (var Ee = q - 1, Be = k.length; ++Ee < Be;)
                    if (k[Ee] === J) return Ee;
                return -1
            }

            function K0(k, J, q) {
                for (var Ee = q + 1; Ee--;)
                    if (k[Ee] === J) return Ee;
                return Ee
            }

            function hs(k) {
                return ds(k) ? q0(k) : N0(k)
            }

            function en(k) {
                return ds(k) ? Y0(k) : P0(k)
            }

            function Ag(k) {
                for (var J = k.length; J-- && Dw.test(k.charAt(J)););
                return J
            }
            var V0 = pu(T0);

            function q0(k) {
                for (var J = ou.lastIndex = 0; ou.test(k);) ++J;
                return J
            }

            function Y0(k) {
                return k.match(ou) || []
            }

            function z0(k) {
                return k.match(g0) || []
            }
            var X0 = function k(J) {
                    J = J == null ? zt : ps.defaults(zt.Object(), J, ps.pick(zt, y0));
                    var q = J.Array,
                        Ee = J.Date,
                        Be = J.Error,
                        it = J.Function,
                        Ft = J.Math,
                        pt = J.Object,
                        _u = J.RegExp,
                        J0 = J.String,
                        jr = J.TypeError,
                        Po = q.prototype,
                        Q0 = it.prototype,
                        gs = pt.prototype,
                        Ro = J["__core-js_shared__"],
                        Lo = Q0.toString,
                        dt = gs.hasOwnProperty,
                        Z0 = 0,
                        Ng = function() {
                            var i = /[^.]+$/.exec(Ro && Ro.keys && Ro.keys.IE_PROTO || "");
                            return i ? "Symbol(src)_1." + i : ""
                        }(),
                        ko = gs.toString,
                        e1 = Lo.call(pt),
                        t1 = zt._,
                        r1 = _u("^" + Lo.call(dt).replace(tu, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                        xo = hg ? J.Buffer : r,
                        Kn = J.Symbol,
                        Do = J.Uint8Array,
                        Pg = xo ? xo.allocUnsafe : r,
                        Mo = Ig(pt.getPrototypeOf, pt),
                        Rg = pt.create,
                        Lg = gs.propertyIsEnumerable,
                        Fo = Po.splice,
                        kg = Kn ? Kn.isConcatSpreadable : r,
                        ha = Kn ? Kn.iterator : r,
                        $i = Kn ? Kn.toStringTag : r,
                        Bo = function() {
                            try {
                                var i = Pi(pt, "defineProperty");
                                return i({}, "", {}), i
                            } catch {}
                        }(),
                        n1 = J.clearTimeout !== zt.clearTimeout && J.clearTimeout,
                        i1 = Ee && Ee.now !== zt.Date.now && Ee.now,
                        s1 = J.setTimeout !== zt.setTimeout && J.setTimeout,
                        Uo = Ft.ceil,
                        jo = Ft.floor,
                        bu = pt.getOwnPropertySymbols,
                        a1 = xo ? xo.isBuffer : r,
                        xg = J.isFinite,
                        o1 = Po.join,
                        l1 = Ig(pt.keys, pt),
                        Bt = Ft.max,
                        ir = Ft.min,
                        c1 = Ee.now,
                        u1 = J.parseInt,
                        Dg = Ft.random,
                        f1 = Po.reverse,
                        Eu = Pi(J, "DataView"),
                        pa = Pi(J, "Map"),
                        Tu = Pi(J, "Promise"),
                        ms = Pi(J, "Set"),
                        ga = Pi(J, "WeakMap"),
                        ma = Pi(pt, "create"),
                        Go = ga && new ga,
                        vs = {},
                        d1 = Ri(Eu),
                        h1 = Ri(pa),
                        p1 = Ri(Tu),
                        g1 = Ri(ms),
                        m1 = Ri(ga),
                        Wo = Kn ? Kn.prototype : r,
                        va = Wo ? Wo.valueOf : r,
                        Mg = Wo ? Wo.toString : r;

                    function y(i) {
                        if (It(i) && !je(i) && !(i instanceof Ye)) {
                            if (i instanceof Gr) return i;
                            if (dt.call(i, "__wrapped__")) return Fm(i)
                        }
                        return new Gr(i)
                    }
                    var ys = function() {
                        function i() {}
                        return function(a) {
                            if (!$t(a)) return {};
                            if (Rg) return Rg(a);
                            i.prototype = a;
                            var c = new i;
                            return i.prototype = r, c
                        }
                    }();

                    function Ho() {}

                    function Gr(i, a) {
                        this.__wrapped__ = i, this.__actions__ = [], this.__chain__ = !!a, this.__index__ = 0, this.__values__ = r
                    }
                    y.templateSettings = {
                        escape: Nw,
                        evaluate: Pw,
                        interpolate: Vp,
                        variable: "",
                        imports: {
                            _: y
                        }
                    }, y.prototype = Ho.prototype, y.prototype.constructor = y, Gr.prototype = ys(Ho.prototype), Gr.prototype.constructor = Gr;

                    function Ye(i) {
                        this.__wrapped__ = i, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Ge, this.__views__ = []
                    }

                    function v1() {
                        var i = new Ye(this.__wrapped__);
                        return i.__actions__ = vr(this.__actions__), i.__dir__ = this.__dir__, i.__filtered__ = this.__filtered__, i.__iteratees__ = vr(this.__iteratees__), i.__takeCount__ = this.__takeCount__, i.__views__ = vr(this.__views__), i
                    }

                    function y1() {
                        if (this.__filtered__) {
                            var i = new Ye(this);
                            i.__dir__ = -1, i.__filtered__ = !0
                        } else i = this.clone(), i.__dir__ *= -1;
                        return i
                    }

                    function _1() {
                        var i = this.__wrapped__.value(),
                            a = this.__dir__,
                            c = je(i),
                            d = a < 0,
                            v = c ? i.length : 0,
                            b = P$(0, v, this.__views__),
                            I = b.start,
                            N = b.end,
                            x = N - I,
                            ee = d ? N : I - 1,
                            te = this.__iteratees__,
                            ae = te.length,
                            me = 0,
                            we = ir(x, this.__takeCount__);
                        if (!c || !d && v == x && we == x) return om(i, this.__actions__);
                        var Re = [];
                        e: for (; x-- && me < we;) {
                            ee += a;
                            for (var Ke = -1, Le = i[ee]; ++Ke < ae;) {
                                var qe = te[Ke],
                                    Xe = qe.iteratee,
                                    Pr = qe.type,
                                    hr = Xe(Le);
                                if (Pr == ie) Le = hr;
                                else if (!hr) {
                                    if (Pr == F) continue e;
                                    break e
                                }
                            }
                            Re[me++] = Le
                        }
                        return Re
                    }
                    Ye.prototype = ys(Ho.prototype), Ye.prototype.constructor = Ye;

                    function Ci(i) {
                        var a = -1,
                            c = i == null ? 0 : i.length;
                        for (this.clear(); ++a < c;) {
                            var d = i[a];
                            this.set(d[0], d[1])
                        }
                    }

                    function b1() {
                        this.__data__ = ma ? ma(null) : {}, this.size = 0
                    }

                    function E1(i) {
                        var a = this.has(i) && delete this.__data__[i];
                        return this.size -= a ? 1 : 0, a
                    }

                    function T1(i) {
                        var a = this.__data__;
                        if (ma) {
                            var c = a[i];
                            return c === f ? r : c
                        }
                        return dt.call(a, i) ? a[i] : r
                    }

                    function S1(i) {
                        var a = this.__data__;
                        return ma ? a[i] !== r : dt.call(a, i)
                    }

                    function O1(i, a) {
                        var c = this.__data__;
                        return this.size += this.has(i) ? 0 : 1, c[i] = ma && a === r ? f : a, this
                    }
                    Ci.prototype.clear = b1, Ci.prototype.delete = E1, Ci.prototype.get = T1, Ci.prototype.has = S1, Ci.prototype.set = O1;

                    function wn(i) {
                        var a = -1,
                            c = i == null ? 0 : i.length;
                        for (this.clear(); ++a < c;) {
                            var d = i[a];
                            this.set(d[0], d[1])
                        }
                    }

                    function w1() {
                        this.__data__ = [], this.size = 0
                    }

                    function $1(i) {
                        var a = this.__data__,
                            c = Ko(a, i);
                        if (c < 0) return !1;
                        var d = a.length - 1;
                        return c == d ? a.pop() : Fo.call(a, c, 1), --this.size, !0
                    }

                    function C1(i) {
                        var a = this.__data__,
                            c = Ko(a, i);
                        return c < 0 ? r : a[c][1]
                    }

                    function I1(i) {
                        return Ko(this.__data__, i) > -1
                    }

                    function A1(i, a) {
                        var c = this.__data__,
                            d = Ko(c, i);
                        return d < 0 ? (++this.size, c.push([i, a])) : c[d][1] = a, this
                    }
                    wn.prototype.clear = w1, wn.prototype.delete = $1, wn.prototype.get = C1, wn.prototype.has = I1, wn.prototype.set = A1;

                    function $n(i) {
                        var a = -1,
                            c = i == null ? 0 : i.length;
                        for (this.clear(); ++a < c;) {
                            var d = i[a];
                            this.set(d[0], d[1])
                        }
                    }

                    function N1() {
                        this.size = 0, this.__data__ = {
                            hash: new Ci,
                            map: new(pa || wn),
                            string: new Ci
                        }
                    }

                    function P1(i) {
                        var a = nl(this, i).delete(i);
                        return this.size -= a ? 1 : 0, a
                    }

                    function R1(i) {
                        return nl(this, i).get(i)
                    }

                    function L1(i) {
                        return nl(this, i).has(i)
                    }

                    function k1(i, a) {
                        var c = nl(this, i),
                            d = c.size;
                        return c.set(i, a), this.size += c.size == d ? 0 : 1, this
                    }
                    $n.prototype.clear = N1, $n.prototype.delete = P1, $n.prototype.get = R1, $n.prototype.has = L1, $n.prototype.set = k1;

                    function Ii(i) {
                        var a = -1,
                            c = i == null ? 0 : i.length;
                        for (this.__data__ = new $n; ++a < c;) this.add(i[a])
                    }

                    function x1(i) {
                        return this.__data__.set(i, f), this
                    }

                    function D1(i) {
                        return this.__data__.has(i)
                    }
                    Ii.prototype.add = Ii.prototype.push = x1, Ii.prototype.has = D1;

                    function tn(i) {
                        var a = this.__data__ = new wn(i);
                        this.size = a.size
                    }

                    function M1() {
                        this.__data__ = new wn, this.size = 0
                    }

                    function F1(i) {
                        var a = this.__data__,
                            c = a.delete(i);
                        return this.size = a.size, c
                    }

                    function B1(i) {
                        return this.__data__.get(i)
                    }

                    function U1(i) {
                        return this.__data__.has(i)
                    }

                    function j1(i, a) {
                        var c = this.__data__;
                        if (c instanceof wn) {
                            var d = c.__data__;
                            if (!pa || d.length < s - 1) return d.push([i, a]), this.size = ++c.size, this;
                            c = this.__data__ = new $n(d)
                        }
                        return c.set(i, a), this.size = c.size, this
                    }
                    tn.prototype.clear = M1, tn.prototype.delete = F1, tn.prototype.get = B1, tn.prototype.has = U1, tn.prototype.set = j1;

                    function Fg(i, a) {
                        var c = je(i),
                            d = !c && Li(i),
                            v = !c && !d && Xn(i),
                            b = !c && !d && !v && Ts(i),
                            I = c || d || v || b,
                            N = I ? mu(i.length, J0) : [],
                            x = N.length;
                        for (var ee in i)(a || dt.call(i, ee)) && !(I && (ee == "length" || v && (ee == "offset" || ee == "parent") || b && (ee == "buffer" || ee == "byteLength" || ee == "byteOffset") || Nn(ee, x))) && N.push(ee);
                        return N
                    }

                    function Bg(i) {
                        var a = i.length;
                        return a ? i[Lu(0, a - 1)] : r
                    }

                    function G1(i, a) {
                        return il(vr(i), Ai(a, 0, i.length))
                    }

                    function W1(i) {
                        return il(vr(i))
                    }

                    function Su(i, a, c) {
                        (c !== r && !rn(i[a], c) || c === r && !(a in i)) && Cn(i, a, c)
                    }

                    function ya(i, a, c) {
                        var d = i[a];
                        (!(dt.call(i, a) && rn(d, c)) || c === r && !(a in i)) && Cn(i, a, c)
                    }

                    function Ko(i, a) {
                        for (var c = i.length; c--;)
                            if (rn(i[c][0], a)) return c;
                        return -1
                    }

                    function H1(i, a, c, d) {
                        return Vn(i, function(v, b, I) {
                            a(d, v, c(v), I)
                        }), d
                    }

                    function Ug(i, a) {
                        return i && gn(a, Kt(a), i)
                    }

                    function K1(i, a) {
                        return i && gn(a, _r(a), i)
                    }

                    function Cn(i, a, c) {
                        a == "__proto__" && Bo ? Bo(i, a, {
                            configurable: !0,
                            enumerable: !0,
                            value: c,
                            writable: !0
                        }) : i[a] = c
                    }

                    function Ou(i, a) {
                        for (var c = -1, d = a.length, v = q(d), b = i == null; ++c < d;) v[c] = b ? r : sf(i, a[c]);
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
                        if (!$t(i)) return i;
                        var te = je(i);
                        if (te) {
                            if (I = L$(i), !N) return vr(i, I)
                        } else {
                            var ae = sr(i),
                                me = ae == xt || ae == m;
                            if (Xn(i)) return um(i, N);
                            if (ae == B || ae == rr || me && !v) {
                                if (I = x || me ? {} : Am(i), !N) return x ? T$(i, K1(I, i)) : E$(i, Ug(I, i))
                            } else {
                                if (!mt[ae]) return v ? i : {};
                                I = k$(i, ae, N)
                            }
                        }
                        b || (b = new tn);
                        var we = b.get(i);
                        if (we) return we;
                        b.set(i, I), iv(i) ? i.forEach(function(Le) {
                            I.add(Wr(Le, a, c, Le, i, b))
                        }) : rv(i) && i.forEach(function(Le, qe) {
                            I.set(qe, Wr(Le, a, c, qe, i, b))
                        });
                        var Re = ee ? x ? Hu : Wu : x ? _r : Kt,
                            Ke = te ? r : Re(i);
                        return Ur(Ke || i, function(Le, qe) {
                            Ke && (qe = Le, Le = i[qe]), ya(I, qe, Wr(Le, a, c, qe, i, b))
                        }), I
                    }

                    function V1(i) {
                        var a = Kt(i);
                        return function(c) {
                            return jg(c, i, a)
                        }
                    }

                    function jg(i, a, c) {
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

                    function Gg(i, a, c) {
                        if (typeof i != "function") throw new jr(l);
                        return wa(function() {
                            i.apply(r, c)
                        }, a)
                    }

                    function _a(i, a, c, d) {
                        var v = -1,
                            b = Io,
                            I = !0,
                            N = i.length,
                            x = [],
                            ee = a.length;
                        if (!N) return x;
                        c && (a = St(a, Ir(c))), d ? (b = uu, I = !1) : a.length >= s && (b = da, I = !1, a = new Ii(a));
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
                    var Vn = gm(pn),
                        Wg = gm($u, !0);

                    function q1(i, a) {
                        var c = !0;
                        return Vn(i, function(d, v, b) {
                            return c = !!a(d, v, b), c
                        }), c
                    }

                    function Vo(i, a, c) {
                        for (var d = -1, v = i.length; ++d < v;) {
                            var b = i[d],
                                I = a(b);
                            if (I != null && (N === r ? I === I && !Nr(I) : c(I, N))) var N = I,
                                x = b
                        }
                        return x
                    }

                    function Y1(i, a, c, d) {
                        var v = i.length;
                        for (c = We(c), c < 0 && (c = -c > v ? 0 : v + c), d = d === r || d > v ? v : We(d), d < 0 && (d += v), d = c > d ? 0 : av(d); c < d;) i[c++] = a;
                        return i
                    }

                    function Hg(i, a) {
                        var c = [];
                        return Vn(i, function(d, v, b) {
                            a(d, v, b) && c.push(d)
                        }), c
                    }

                    function Xt(i, a, c, d, v) {
                        var b = -1,
                            I = i.length;
                        for (c || (c = D$), v || (v = []); ++b < I;) {
                            var N = i[b];
                            a > 0 && c(N) ? a > 1 ? Xt(N, a - 1, c, d, v) : Wn(v, N) : d || (v[v.length] = N)
                        }
                        return v
                    }
                    var wu = mm(),
                        Kg = mm(!0);

                    function pn(i, a) {
                        return i && wu(i, a, Kt)
                    }

                    function $u(i, a) {
                        return i && Kg(i, a, Kt)
                    }

                    function qo(i, a) {
                        return Gn(a, function(c) {
                            return Pn(i[c])
                        })
                    }

                    function Ni(i, a) {
                        a = Yn(a, i);
                        for (var c = 0, d = a.length; i != null && c < d;) i = i[mn(a[c++])];
                        return c && c == d ? i : r
                    }

                    function Vg(i, a, c) {
                        var d = a(i);
                        return je(i) ? d : Wn(d, c(i))
                    }

                    function fr(i) {
                        return i == null ? i === r ? he : D : $i && $i in pt(i) ? N$(i) : W$(i)
                    }

                    function Cu(i, a) {
                        return i > a
                    }

                    function z1(i, a) {
                        return i != null && dt.call(i, a)
                    }

                    function X1(i, a) {
                        return i != null && a in pt(i)
                    }

                    function J1(i, a, c) {
                        return i >= ir(a, c) && i < Bt(a, c)
                    }

                    function Iu(i, a, c) {
                        for (var d = c ? uu : Io, v = i[0].length, b = i.length, I = b, N = q(b), x = 1 / 0, ee = []; I--;) {
                            var te = i[I];
                            I && a && (te = St(te, Ir(a))), x = ir(te.length, x), N[I] = !c && (a || v >= 120 && te.length >= 120) ? new Ii(I && te) : r
                        }
                        te = i[0];
                        var ae = -1,
                            me = N[0];
                        e: for (; ++ae < v && ee.length < x;) {
                            var we = te[ae],
                                Re = a ? a(we) : we;
                            if (we = c || we !== 0 ? we : 0, !(me ? da(me, Re) : d(ee, Re, c))) {
                                for (I = b; --I;) {
                                    var Ke = N[I];
                                    if (!(Ke ? da(Ke, Re) : d(i[I], Re, c))) continue e
                                }
                                me && me.push(Re), ee.push(we)
                            }
                        }
                        return ee
                    }

                    function Q1(i, a, c, d) {
                        return pn(i, function(v, b, I) {
                            a(d, c(v), b, I)
                        }), d
                    }

                    function ba(i, a, c) {
                        a = Yn(a, i), i = Lm(i, a);
                        var d = i == null ? i : i[mn(Kr(a))];
                        return d == null ? r : Cr(d, i, c)
                    }

                    function qg(i) {
                        return It(i) && fr(i) == rr
                    }

                    function Z1(i) {
                        return It(i) && fr(i) == De
                    }

                    function e$(i) {
                        return It(i) && fr(i) == ot
                    }

                    function Ea(i, a, c, d, v) {
                        return i === a ? !0 : i == null || a == null || !It(i) && !It(a) ? i !== i && a !== a : t$(i, a, c, d, Ea, v)
                    }

                    function t$(i, a, c, d, v, b) {
                        var I = je(i),
                            N = je(a),
                            x = I ? mr : sr(i),
                            ee = N ? mr : sr(a);
                        x = x == rr ? B : x, ee = ee == rr ? B : ee;
                        var te = x == B,
                            ae = ee == B,
                            me = x == ee;
                        if (me && Xn(i)) {
                            if (!Xn(a)) return !1;
                            I = !0, te = !1
                        }
                        if (me && !te) return b || (b = new tn), I || Ts(i) ? $m(i, a, c, d, v, b) : I$(i, a, x, c, d, v, b);
                        if (!(c & L)) {
                            var we = te && dt.call(i, "__wrapped__"),
                                Re = ae && dt.call(a, "__wrapped__");
                            if (we || Re) {
                                var Ke = we ? i.value() : i,
                                    Le = Re ? a.value() : a;
                                return b || (b = new tn), v(Ke, Le, c, d, b)
                            }
                        }
                        return me ? (b || (b = new tn), A$(i, a, c, d, v, b)) : !1
                    }

                    function r$(i) {
                        return It(i) && sr(i) == p
                    }

                    function Au(i, a, c, d) {
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
                                if (!(me === r ? Ea(te, ee, L | M, d, ae) : me)) return !1
                            }
                        }
                        return !0
                    }

                    function Yg(i) {
                        if (!$t(i) || F$(i)) return !1;
                        var a = Pn(i) ? r1 : Vw;
                        return a.test(Ri(i))
                    }

                    function n$(i) {
                        return It(i) && fr(i) == se
                    }

                    function i$(i) {
                        return It(i) && sr(i) == re
                    }

                    function s$(i) {
                        return It(i) && ul(i.length) && !!bt[fr(i)]
                    }

                    function zg(i) {
                        return typeof i == "function" ? i : i == null ? br : typeof i == "object" ? je(i) ? Qg(i[0], i[1]) : Jg(i) : vv(i)
                    }

                    function Nu(i) {
                        if (!Oa(i)) return l1(i);
                        var a = [];
                        for (var c in pt(i)) dt.call(i, c) && c != "constructor" && a.push(c);
                        return a
                    }

                    function a$(i) {
                        if (!$t(i)) return G$(i);
                        var a = Oa(i),
                            c = [];
                        for (var d in i) d == "constructor" && (a || !dt.call(i, d)) || c.push(d);
                        return c
                    }

                    function Pu(i, a) {
                        return i < a
                    }

                    function Xg(i, a) {
                        var c = -1,
                            d = yr(i) ? q(i.length) : [];
                        return Vn(i, function(v, b, I) {
                            d[++c] = a(v, b, I)
                        }), d
                    }

                    function Jg(i) {
                        var a = Vu(i);
                        return a.length == 1 && a[0][2] ? Pm(a[0][0], a[0][1]) : function(c) {
                            return c === i || Au(c, i, a)
                        }
                    }

                    function Qg(i, a) {
                        return Yu(i) && Nm(a) ? Pm(mn(i), a) : function(c) {
                            var d = sf(c, i);
                            return d === r && d === a ? af(c, i) : Ea(a, d, L | M)
                        }
                    }

                    function Yo(i, a, c, d, v) {
                        i !== a && wu(a, function(b, I) {
                            if (v || (v = new tn), $t(b)) o$(i, a, I, c, Yo, d, v);
                            else {
                                var N = d ? d(Xu(i, I), b, I + "", i, a, v) : r;
                                N === r && (N = b), Su(i, I, N)
                            }
                        }, _r)
                    }

                    function o$(i, a, c, d, v, b, I) {
                        var N = Xu(i, c),
                            x = Xu(a, c),
                            ee = I.get(x);
                        if (ee) {
                            Su(i, c, ee);
                            return
                        }
                        var te = b ? b(N, x, c + "", i, a, I) : r,
                            ae = te === r;
                        if (ae) {
                            var me = je(x),
                                we = !me && Xn(x),
                                Re = !me && !we && Ts(x);
                            te = x, me || we || Re ? je(N) ? te = N : Nt(N) ? te = vr(N) : we ? (ae = !1, te = um(x, !0)) : Re ? (ae = !1, te = fm(x, !0)) : te = [] : $a(x) || Li(x) ? (te = N, Li(N) ? te = ov(N) : (!$t(N) || Pn(N)) && (te = Am(x))) : ae = !1
                        }
                        ae && (I.set(x, te), v(te, x, d, b, I), I.delete(x)), Su(i, c, te)
                    }

                    function Zg(i, a) {
                        var c = i.length;
                        if (!!c) return a += a < 0 ? c : 0, Nn(a, c) ? i[a] : r
                    }

                    function em(i, a, c) {
                        a.length ? a = St(a, function(b) {
                            return je(b) ? function(I) {
                                return Ni(I, b.length === 1 ? b[0] : b)
                            } : b
                        }) : a = [br];
                        var d = -1;
                        a = St(a, Ir(Pe()));
                        var v = Xg(i, function(b, I, N) {
                            var x = St(a, function(ee) {
                                return ee(b)
                            });
                            return {
                                criteria: x,
                                index: ++d,
                                value: b
                            }
                        });
                        return k0(v, function(b, I) {
                            return b$(b, I, c)
                        })
                    }

                    function l$(i, a) {
                        return tm(i, a, function(c, d) {
                            return af(i, d)
                        })
                    }

                    function tm(i, a, c) {
                        for (var d = -1, v = a.length, b = {}; ++d < v;) {
                            var I = a[d],
                                N = Ni(i, I);
                            c(N, I) && Ta(b, Yn(I, i), N)
                        }
                        return b
                    }

                    function c$(i) {
                        return function(a) {
                            return Ni(a, i)
                        }
                    }

                    function Ru(i, a, c, d) {
                        var v = d ? L0 : fs,
                            b = -1,
                            I = a.length,
                            N = i;
                        for (i === a && (a = vr(a)), c && (N = St(i, Ir(c))); ++b < I;)
                            for (var x = 0, ee = a[b], te = c ? c(ee) : ee;
                                (x = v(N, te, x, d)) > -1;) N !== i && Fo.call(N, x, 1), Fo.call(i, x, 1);
                        return i
                    }

                    function rm(i, a) {
                        for (var c = i ? a.length : 0, d = c - 1; c--;) {
                            var v = a[c];
                            if (c == d || v !== b) {
                                var b = v;
                                Nn(v) ? Fo.call(i, v, 1) : Du(i, v)
                            }
                        }
                        return i
                    }

                    function Lu(i, a) {
                        return i + jo(Dg() * (a - i + 1))
                    }

                    function u$(i, a, c, d) {
                        for (var v = -1, b = Bt(Uo((a - i) / (c || 1)), 0), I = q(b); b--;) I[d ? b : ++v] = i, i += c;
                        return I
                    }

                    function ku(i, a) {
                        var c = "";
                        if (!i || a < 1 || a > ve) return c;
                        do a % 2 && (c += i), a = jo(a / 2), a && (i += i); while (a);
                        return c
                    }

                    function Ve(i, a) {
                        return Ju(Rm(i, a, br), i + "")
                    }

                    function f$(i) {
                        return Bg(Ss(i))
                    }

                    function d$(i, a) {
                        var c = Ss(i);
                        return il(c, Ai(a, 0, c.length))
                    }

                    function Ta(i, a, c, d) {
                        if (!$t(i)) return i;
                        a = Yn(a, i);
                        for (var v = -1, b = a.length, I = b - 1, N = i; N != null && ++v < b;) {
                            var x = mn(a[v]),
                                ee = c;
                            if (x === "__proto__" || x === "constructor" || x === "prototype") return i;
                            if (v != I) {
                                var te = N[x];
                                ee = d ? d(te, x, N) : r, ee === r && (ee = $t(te) ? te : Nn(a[v + 1]) ? [] : {})
                            }
                            ya(N, x, ee), N = N[x]
                        }
                        return i
                    }
                    var nm = Go ? function(i, a) {
                            return Go.set(i, a), i
                        } : br,
                        h$ = Bo ? function(i, a) {
                            return Bo(i, "toString", {
                                configurable: !0,
                                enumerable: !1,
                                value: lf(a),
                                writable: !0
                            })
                        } : br;

                    function p$(i) {
                        return il(Ss(i))
                    }

                    function Hr(i, a, c) {
                        var d = -1,
                            v = i.length;
                        a < 0 && (a = -a > v ? 0 : v + a), c = c > v ? v : c, c < 0 && (c += v), v = a > c ? 0 : c - a >>> 0, a >>>= 0;
                        for (var b = q(v); ++d < v;) b[d] = i[d + a];
                        return b
                    }

                    function g$(i, a) {
                        var c;
                        return Vn(i, function(d, v, b) {
                            return c = a(d, v, b), !c
                        }), !!c
                    }

                    function zo(i, a, c) {
                        var d = 0,
                            v = i == null ? d : i.length;
                        if (typeof a == "number" && a === a && v <= Ct) {
                            for (; d < v;) {
                                var b = d + v >>> 1,
                                    I = i[b];
                                I !== null && !Nr(I) && (c ? I <= a : I < a) ? d = b + 1 : v = b
                            }
                            return v
                        }
                        return xu(i, a, br, c)
                    }

                    function xu(i, a, c, d) {
                        var v = 0,
                            b = i == null ? 0 : i.length;
                        if (b === 0) return 0;
                        a = c(a);
                        for (var I = a !== a, N = a === null, x = Nr(a), ee = a === r; v < b;) {
                            var te = jo((v + b) / 2),
                                ae = c(i[te]),
                                me = ae !== r,
                                we = ae === null,
                                Re = ae === ae,
                                Ke = Nr(ae);
                            if (I) var Le = d || Re;
                            else ee ? Le = Re && (d || me) : N ? Le = Re && me && (d || !we) : x ? Le = Re && me && !we && (d || !Ke) : we || Ke ? Le = !1 : Le = d ? ae <= a : ae < a;
                            Le ? v = te + 1 : b = te
                        }
                        return ir(b, tt)
                    }

                    function im(i, a) {
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

                    function sm(i) {
                        return typeof i == "number" ? i : Nr(i) ? Fe : +i
                    }

                    function Ar(i) {
                        if (typeof i == "string") return i;
                        if (je(i)) return St(i, Ar) + "";
                        if (Nr(i)) return Mg ? Mg.call(i) : "";
                        var a = i + "";
                        return a == "0" && 1 / i == -be ? "-0" : a
                    }

                    function qn(i, a, c) {
                        var d = -1,
                            v = Io,
                            b = i.length,
                            I = !0,
                            N = [],
                            x = N;
                        if (c) I = !1, v = uu;
                        else if (b >= s) {
                            var ee = a ? null : $$(i);
                            if (ee) return No(ee);
                            I = !1, v = da, x = new Ii
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

                    function Du(i, a) {
                        return a = Yn(a, i), i = Lm(i, a), i == null || delete i[mn(Kr(a))]
                    }

                    function am(i, a, c, d) {
                        return Ta(i, a, c(Ni(i, a)), d)
                    }

                    function Xo(i, a, c, d) {
                        for (var v = i.length, b = d ? v : -1;
                            (d ? b-- : ++b < v) && a(i[b], b, i););
                        return c ? Hr(i, d ? 0 : b, d ? b + 1 : v) : Hr(i, d ? b + 1 : 0, d ? v : b)
                    }

                    function om(i, a) {
                        var c = i;
                        return c instanceof Ye && (c = c.value()), fu(a, function(d, v) {
                            return v.func.apply(v.thisArg, Wn([d], v.args))
                        }, c)
                    }

                    function Mu(i, a, c) {
                        var d = i.length;
                        if (d < 2) return d ? qn(i[0]) : [];
                        for (var v = -1, b = q(d); ++v < d;)
                            for (var I = i[v], N = -1; ++N < d;) N != v && (b[v] = _a(b[v] || I, i[N], a, c));
                        return qn(Xt(b, 1), a, c)
                    }

                    function lm(i, a, c) {
                        for (var d = -1, v = i.length, b = a.length, I = {}; ++d < v;) {
                            var N = d < b ? a[d] : r;
                            c(I, i[d], N)
                        }
                        return I
                    }

                    function Fu(i) {
                        return Nt(i) ? i : []
                    }

                    function Bu(i) {
                        return typeof i == "function" ? i : br
                    }

                    function Yn(i, a) {
                        return je(i) ? i : Yu(i, a) ? [i] : Mm(lt(i))
                    }
                    var m$ = Ve;

                    function zn(i, a, c) {
                        var d = i.length;
                        return c = c === r ? d : c, !a && c >= d ? i : Hr(i, a, c)
                    }
                    var cm = n1 || function(i) {
                        return zt.clearTimeout(i)
                    };

                    function um(i, a) {
                        if (a) return i.slice();
                        var c = i.length,
                            d = Pg ? Pg(c) : new i.constructor(c);
                        return i.copy(d), d
                    }

                    function Uu(i) {
                        var a = new i.constructor(i.byteLength);
                        return new Do(a).set(new Do(i)), a
                    }

                    function v$(i, a) {
                        var c = a ? Uu(i.buffer) : i.buffer;
                        return new i.constructor(c, i.byteOffset, i.byteLength)
                    }

                    function y$(i) {
                        var a = new i.constructor(i.source, qp.exec(i));
                        return a.lastIndex = i.lastIndex, a
                    }

                    function _$(i) {
                        return va ? pt(va.call(i)) : {}
                    }

                    function fm(i, a) {
                        var c = a ? Uu(i.buffer) : i.buffer;
                        return new i.constructor(c, i.byteOffset, i.length)
                    }

                    function dm(i, a) {
                        if (i !== a) {
                            var c = i !== r,
                                d = i === null,
                                v = i === i,
                                b = Nr(i),
                                I = a !== r,
                                N = a === null,
                                x = a === a,
                                ee = Nr(a);
                            if (!N && !ee && !b && i > a || b && I && x && !N && !ee || d && I && x || !c && x || !v) return 1;
                            if (!d && !b && !ee && i < a || ee && c && v && !d && !b || N && c && v || !I && v || !x) return -1
                        }
                        return 0
                    }

                    function b$(i, a, c) {
                        for (var d = -1, v = i.criteria, b = a.criteria, I = v.length, N = c.length; ++d < I;) {
                            var x = dm(v[d], b[d]);
                            if (x) {
                                if (d >= N) return x;
                                var ee = c[d];
                                return x * (ee == "desc" ? -1 : 1)
                            }
                        }
                        return i.index - a.index
                    }

                    function hm(i, a, c, d) {
                        for (var v = -1, b = i.length, I = c.length, N = -1, x = a.length, ee = Bt(b - I, 0), te = q(x + ee), ae = !d; ++N < x;) te[N] = a[N];
                        for (; ++v < I;)(ae || v < b) && (te[c[v]] = i[v]);
                        for (; ee--;) te[N++] = i[v++];
                        return te
                    }

                    function pm(i, a, c, d) {
                        for (var v = -1, b = i.length, I = -1, N = c.length, x = -1, ee = a.length, te = Bt(b - N, 0), ae = q(te + ee), me = !d; ++v < te;) ae[v] = i[v];
                        for (var we = v; ++x < ee;) ae[we + x] = a[x];
                        for (; ++I < N;)(me || v < b) && (ae[we + c[I]] = i[v++]);
                        return ae
                    }

                    function vr(i, a) {
                        var c = -1,
                            d = i.length;
                        for (a || (a = q(d)); ++c < d;) a[c] = i[c];
                        return a
                    }

                    function gn(i, a, c, d) {
                        var v = !c;
                        c || (c = {});
                        for (var b = -1, I = a.length; ++b < I;) {
                            var N = a[b],
                                x = d ? d(c[N], i[N], N, c, i) : r;
                            x === r && (x = i[N]), v ? Cn(c, N, x) : ya(c, N, x)
                        }
                        return c
                    }

                    function E$(i, a) {
                        return gn(i, qu(i), a)
                    }

                    function T$(i, a) {
                        return gn(i, Cm(i), a)
                    }

                    function Jo(i, a) {
                        return function(c, d) {
                            var v = je(c) ? C0 : H1,
                                b = a ? a() : {};
                            return v(c, i, Pe(d, 2), b)
                        }
                    }

                    function _s(i) {
                        return Ve(function(a, c) {
                            var d = -1,
                                v = c.length,
                                b = v > 1 ? c[v - 1] : r,
                                I = v > 2 ? c[2] : r;
                            for (b = i.length > 3 && typeof b == "function" ? (v--, b) : r, I && dr(c[0], c[1], I) && (b = v < 3 ? r : b, v = 1), a = pt(a); ++d < v;) {
                                var N = c[d];
                                N && i(a, N, d, b)
                            }
                            return a
                        })
                    }

                    function gm(i, a) {
                        return function(c, d) {
                            if (c == null) return c;
                            if (!yr(c)) return i(c, d);
                            for (var v = c.length, b = a ? v : -1, I = pt(c);
                                (a ? b-- : ++b < v) && d(I[b], b, I) !== !1;);
                            return c
                        }
                    }

                    function mm(i) {
                        return function(a, c, d) {
                            for (var v = -1, b = pt(a), I = d(a), N = I.length; N--;) {
                                var x = I[i ? N : ++v];
                                if (c(b[x], x, b) === !1) break
                            }
                            return a
                        }
                    }

                    function S$(i, a, c) {
                        var d = a & U,
                            v = Sa(i);

                        function b() {
                            var I = this && this !== zt && this instanceof b ? v : i;
                            return I.apply(d ? c : this, arguments)
                        }
                        return b
                    }

                    function vm(i) {
                        return function(a) {
                            a = lt(a);
                            var c = ds(a) ? en(a) : r,
                                d = c ? c[0] : a.charAt(0),
                                v = c ? zn(c, 1).join("") : a.slice(1);
                            return d[i]() + v
                        }
                    }

                    function bs(i) {
                        return function(a) {
                            return fu(gv(pv(a).replace(h0, "")), i, "")
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
                            var c = ys(i.prototype),
                                d = i.apply(c, a);
                            return $t(d) ? d : c
                        }
                    }

                    function O$(i, a, c) {
                        var d = Sa(i);

                        function v() {
                            for (var b = arguments.length, I = q(b), N = b, x = Es(v); N--;) I[N] = arguments[N];
                            var ee = b < 3 && I[0] !== x && I[b - 1] !== x ? [] : Hn(I, x);
                            if (b -= ee.length, b < c) return Tm(i, a, Qo, v.placeholder, r, I, ee, r, r, c - b);
                            var te = this && this !== zt && this instanceof v ? d : i;
                            return Cr(te, this, I)
                        }
                        return v
                    }

                    function ym(i) {
                        return function(a, c, d) {
                            var v = pt(a);
                            if (!yr(a)) {
                                var b = Pe(c, 3);
                                a = Kt(a), c = function(N) {
                                    return b(v[N], N, v)
                                }
                            }
                            var I = i(a, c, d);
                            return I > -1 ? v[b ? a[I] : I] : r
                        }
                    }

                    function _m(i) {
                        return An(function(a) {
                            var c = a.length,
                                d = c,
                                v = Gr.prototype.thru;
                            for (i && a.reverse(); d--;) {
                                var b = a[d];
                                if (typeof b != "function") throw new jr(l);
                                if (v && !I && rl(b) == "wrapper") var I = new Gr([], !0)
                            }
                            for (d = I ? d : c; ++d < c;) {
                                b = a[d];
                                var N = rl(b),
                                    x = N == "wrapper" ? Ku(b) : r;
                                x && zu(x[0]) && x[1] == (oe | X | j | le) && !x[4].length && x[9] == 1 ? I = I[rl(x[0])].apply(I, x[3]) : I = b.length == 1 && zu(b) ? I[N]() : I.thru(b)
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

                    function Qo(i, a, c, d, v, b, I, N, x, ee) {
                        var te = a & oe,
                            ae = a & U,
                            me = a & C,
                            we = a & (X | G),
                            Re = a & ue,
                            Ke = me ? r : Sa(i);

                        function Le() {
                            for (var qe = arguments.length, Xe = q(qe), Pr = qe; Pr--;) Xe[Pr] = arguments[Pr];
                            if (we) var hr = Es(Le),
                                Rr = D0(Xe, hr);
                            if (d && (Xe = hm(Xe, d, v, we)), b && (Xe = pm(Xe, b, I, we)), qe -= Rr, we && qe < ee) {
                                var Pt = Hn(Xe, hr);
                                return Tm(i, a, Qo, Le.placeholder, c, Xe, Pt, N, x, ee - qe)
                            }
                            var nn = ae ? c : this,
                                Ln = me ? nn[i] : i;
                            return qe = Xe.length, N ? Xe = H$(Xe, N) : Re && qe > 1 && Xe.reverse(), te && x < qe && (Xe.length = x), this && this !== zt && this instanceof Le && (Ln = Ke || Sa(Ln)), Ln.apply(nn, Xe)
                        }
                        return Le
                    }

                    function bm(i, a) {
                        return function(c, d) {
                            return Q1(c, i, a(d), {})
                        }
                    }

                    function Zo(i, a) {
                        return function(c, d) {
                            var v;
                            if (c === r && d === r) return a;
                            if (c !== r && (v = c), d !== r) {
                                if (v === r) return d;
                                typeof c == "string" || typeof d == "string" ? (c = Ar(c), d = Ar(d)) : (c = sm(c), d = sm(d)), v = i(c, d)
                            }
                            return v
                        }
                    }

                    function ju(i) {
                        return An(function(a) {
                            return a = St(a, Ir(Pe())), Ve(function(c) {
                                var d = this;
                                return i(a, function(v) {
                                    return Cr(v, d, c)
                                })
                            })
                        })
                    }

                    function el(i, a) {
                        a = a === r ? " " : Ar(a);
                        var c = a.length;
                        if (c < 2) return c ? ku(a, i) : a;
                        var d = ku(a, Uo(i / hs(a)));
                        return ds(a) ? zn(en(d), 0, i).join("") : d.slice(0, i)
                    }

                    function w$(i, a, c, d) {
                        var v = a & U,
                            b = Sa(i);

                        function I() {
                            for (var N = -1, x = arguments.length, ee = -1, te = d.length, ae = q(te + x), me = this && this !== zt && this instanceof I ? b : i; ++ee < te;) ae[ee] = d[ee];
                            for (; x--;) ae[ee++] = arguments[++N];
                            return Cr(me, v ? c : this, ae)
                        }
                        return I
                    }

                    function Em(i) {
                        return function(a, c, d) {
                            return d && typeof d != "number" && dr(a, c, d) && (c = d = r), a = Rn(a), c === r ? (c = a, a = 0) : c = Rn(c), d = d === r ? a < c ? 1 : -1 : Rn(d), u$(a, c, d, i)
                        }
                    }

                    function tl(i) {
                        return function(a, c) {
                            return typeof a == "string" && typeof c == "string" || (a = Vr(a), c = Vr(c)), i(a, c)
                        }
                    }

                    function Tm(i, a, c, d, v, b, I, N, x, ee) {
                        var te = a & X,
                            ae = te ? I : r,
                            me = te ? r : I,
                            we = te ? b : r,
                            Re = te ? r : b;
                        a |= te ? j : Q, a &= ~(te ? Q : j), a & V || (a &= ~(U | C));
                        var Ke = [i, a, v, we, ae, Re, me, N, x, ee],
                            Le = c.apply(r, Ke);
                        return zu(i) && km(Le, Ke), Le.placeholder = d, xm(Le, i, a)
                    }

                    function Gu(i) {
                        var a = Ft[i];
                        return function(c, d) {
                            if (c = Vr(c), d = d == null ? 0 : ir(We(d), 292), d && xg(c)) {
                                var v = (lt(c) + "e").split("e"),
                                    b = a(v[0] + "e" + (+v[1] + d));
                                return v = (lt(b) + "e").split("e"), +(v[0] + "e" + (+v[1] - d))
                            }
                            return a(c)
                        }
                    }
                    var $$ = ms && 1 / No(new ms([, -0]))[1] == be ? function(i) {
                        return new ms(i)
                    } : ff;

                    function Sm(i) {
                        return function(a) {
                            var c = sr(a);
                            return c == p ? yu(a) : c == re ? W0(a) : x0(a, i(a))
                        }
                    }

                    function In(i, a, c, d, v, b, I, N) {
                        var x = a & C;
                        if (!x && typeof i != "function") throw new jr(l);
                        var ee = d ? d.length : 0;
                        if (ee || (a &= ~(j | Q), d = v = r), I = I === r ? I : Bt(We(I), 0), N = N === r ? N : We(N), ee -= v ? v.length : 0, a & Q) {
                            var te = d,
                                ae = v;
                            d = v = r
                        }
                        var me = x ? r : Ku(i),
                            we = [i, a, c, d, v, te, ae, b, I, N];
                        if (me && j$(we, me), i = we[0], a = we[1], c = we[2], d = we[3], v = we[4], N = we[9] = we[9] === r ? x ? 0 : i.length : Bt(we[9] - ee, 0), !N && a & (X | G) && (a &= ~(X | G)), !a || a == U) var Re = S$(i, a, c);
                        else a == X || a == G ? Re = O$(i, a, N) : (a == j || a == (U | j)) && !v.length ? Re = w$(i, a, c, d) : Re = Qo.apply(r, we);
                        var Ke = me ? nm : km;
                        return xm(Ke(Re, we), i, a)
                    }

                    function Om(i, a, c, d) {
                        return i === r || rn(i, gs[c]) && !dt.call(d, c) ? a : i
                    }

                    function wm(i, a, c, d, v, b) {
                        return $t(i) && $t(a) && (b.set(a, i), Yo(i, a, r, wm, b), b.delete(a)), i
                    }

                    function C$(i) {
                        return $a(i) ? r : i
                    }

                    function $m(i, a, c, d, v, b) {
                        var I = c & L,
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
                                if (!du(a, function(qe, Xe) {
                                        if (!da(we, Xe) && (Re === qe || v(Re, qe, c, d, b))) return we.push(Xe)
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

                    function I$(i, a, c, d, v, b, I) {
                        switch (c) {
                            case w:
                                if (i.byteLength != a.byteLength || i.byteOffset != a.byteOffset) return !1;
                                i = i.buffer, a = a.buffer;
                            case De:
                                return !(i.byteLength != a.byteLength || !b(new Do(i), new Do(a)));
                            case Tt:
                            case ot:
                            case O:
                                return rn(+i, +a);
                            case Ht:
                                return i.name == a.name && i.message == a.message;
                            case se:
                            case A:
                                return i == a + "";
                            case p:
                                var N = yu;
                            case re:
                                var x = d & L;
                                if (N || (N = No), i.size != a.size && !x) return !1;
                                var ee = I.get(i);
                                if (ee) return ee == a;
                                d |= M, I.set(i, a);
                                var te = $m(N(i), N(a), d, v, b, I);
                                return I.delete(i), te;
                            case K:
                                if (va) return va.call(i) == va.call(a)
                        }
                        return !1
                    }

                    function A$(i, a, c, d, v, b) {
                        var I = c & L,
                            N = Wu(i),
                            x = N.length,
                            ee = Wu(a),
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
                            if (d) var Pr = I ? d(Xe, qe, me, a, i, b) : d(qe, Xe, me, i, a, b);
                            if (!(Pr === r ? qe === Xe || v(qe, Xe, c, d, b) : Pr)) {
                                Ke = !1;
                                break
                            }
                            Le || (Le = me == "constructor")
                        }
                        if (Ke && !Le) {
                            var hr = i.constructor,
                                Rr = a.constructor;
                            hr != Rr && "constructor" in i && "constructor" in a && !(typeof hr == "function" && hr instanceof hr && typeof Rr == "function" && Rr instanceof Rr) && (Ke = !1)
                        }
                        return b.delete(i), b.delete(a), Ke
                    }

                    function An(i) {
                        return Ju(Rm(i, r, jm), i + "")
                    }

                    function Wu(i) {
                        return Vg(i, Kt, qu)
                    }

                    function Hu(i) {
                        return Vg(i, _r, Cm)
                    }
                    var Ku = Go ? function(i) {
                        return Go.get(i)
                    } : ff;

                    function rl(i) {
                        for (var a = i.name + "", c = vs[a], d = dt.call(vs, a) ? c.length : 0; d--;) {
                            var v = c[d],
                                b = v.func;
                            if (b == null || b == i) return v.name
                        }
                        return a
                    }

                    function Es(i) {
                        var a = dt.call(y, "placeholder") ? y : i;
                        return a.placeholder
                    }

                    function Pe() {
                        var i = y.iteratee || cf;
                        return i = i === cf ? zg : i, arguments.length ? i(arguments[0], arguments[1]) : i
                    }

                    function nl(i, a) {
                        var c = i.__data__;
                        return M$(a) ? c[typeof a == "string" ? "string" : "hash"] : c.map
                    }

                    function Vu(i) {
                        for (var a = Kt(i), c = a.length; c--;) {
                            var d = a[c],
                                v = i[d];
                            a[c] = [d, v, Nm(v)]
                        }
                        return a
                    }

                    function Pi(i, a) {
                        var c = U0(i, a);
                        return Yg(c) ? c : r
                    }

                    function N$(i) {
                        var a = dt.call(i, $i),
                            c = i[$i];
                        try {
                            i[$i] = r;
                            var d = !0
                        } catch {}
                        var v = ko.call(i);
                        return d && (a ? i[$i] = c : delete i[$i]), v
                    }
                    var qu = bu ? function(i) {
                            return i == null ? [] : (i = pt(i), Gn(bu(i), function(a) {
                                return Lg.call(i, a)
                            }))
                        } : df,
                        Cm = bu ? function(i) {
                            for (var a = []; i;) Wn(a, qu(i)), i = Mo(i);
                            return a
                        } : df,
                        sr = fr;
                    (Eu && sr(new Eu(new ArrayBuffer(1))) != w || pa && sr(new pa) != p || Tu && sr(Tu.resolve()) != Y || ms && sr(new ms) != re || ga && sr(new ga) != pe) && (sr = function(i) {
                        var a = fr(i),
                            c = a == B ? i.constructor : r,
                            d = c ? Ri(c) : "";
                        if (d) switch (d) {
                            case d1:
                                return w;
                            case h1:
                                return p;
                            case p1:
                                return Y;
                            case g1:
                                return re;
                            case m1:
                                return pe
                        }
                        return a
                    });

                    function P$(i, a, c) {
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

                    function R$(i) {
                        var a = i.match(Fw);
                        return a ? a[1].split(Bw) : []
                    }

                    function Im(i, a, c) {
                        a = Yn(a, i);
                        for (var d = -1, v = a.length, b = !1; ++d < v;) {
                            var I = mn(a[d]);
                            if (!(b = i != null && c(i, I))) break;
                            i = i[I]
                        }
                        return b || ++d != v ? b : (v = i == null ? 0 : i.length, !!v && ul(v) && Nn(I, v) && (je(i) || Li(i)))
                    }

                    function L$(i) {
                        var a = i.length,
                            c = new i.constructor(a);
                        return a && typeof i[0] == "string" && dt.call(i, "index") && (c.index = i.index, c.input = i.input), c
                    }

                    function Am(i) {
                        return typeof i.constructor == "function" && !Oa(i) ? ys(Mo(i)) : {}
                    }

                    function k$(i, a, c) {
                        var d = i.constructor;
                        switch (a) {
                            case De:
                                return Uu(i);
                            case Tt:
                            case ot:
                                return new d(+i);
                            case w:
                                return v$(i, c);
                            case T:
                            case P:
                            case S:
                            case R:
                            case Z:
                            case ne:
                            case _e:
                            case Te:
                            case ft:
                                return fm(i, c);
                            case p:
                                return new d;
                            case O:
                            case A:
                                return new d(i);
                            case se:
                                return y$(i);
                            case re:
                                return new d;
                            case K:
                                return _$(i)
                        }
                    }

                    function x$(i, a) {
                        var c = a.length;
                        if (!c) return i;
                        var d = c - 1;
                        return a[d] = (c > 1 ? "& " : "") + a[d], a = a.join(c > 2 ? ", " : " "), i.replace(Mw, `{
/* [wrapped with ` + a + `] */
`)
                    }

                    function D$(i) {
                        return je(i) || Li(i) || !!(kg && i && i[kg])
                    }

                    function Nn(i, a) {
                        var c = typeof i;
                        return a = a == null ? ve : a, !!a && (c == "number" || c != "symbol" && Yw.test(i)) && i > -1 && i % 1 == 0 && i < a
                    }

                    function dr(i, a, c) {
                        if (!$t(c)) return !1;
                        var d = typeof a;
                        return (d == "number" ? yr(c) && Nn(a, c.length) : d == "string" && a in c) ? rn(c[a], i) : !1
                    }

                    function Yu(i, a) {
                        if (je(i)) return !1;
                        var c = typeof i;
                        return c == "number" || c == "symbol" || c == "boolean" || i == null || Nr(i) ? !0 : Lw.test(i) || !Rw.test(i) || a != null && i in pt(a)
                    }

                    function M$(i) {
                        var a = typeof i;
                        return a == "string" || a == "number" || a == "symbol" || a == "boolean" ? i !== "__proto__" : i === null
                    }

                    function zu(i) {
                        var a = rl(i),
                            c = y[a];
                        if (typeof c != "function" || !(a in Ye.prototype)) return !1;
                        if (i === c) return !0;
                        var d = Ku(c);
                        return !!d && i === d[0]
                    }

                    function F$(i) {
                        return !!Ng && Ng in i
                    }
                    var B$ = Ro ? Pn : hf;

                    function Oa(i) {
                        var a = i && i.constructor,
                            c = typeof a == "function" && a.prototype || gs;
                        return i === c
                    }

                    function Nm(i) {
                        return i === i && !$t(i)
                    }

                    function Pm(i, a) {
                        return function(c) {
                            return c == null ? !1 : c[i] === a && (a !== r || i in pt(c))
                        }
                    }

                    function U$(i) {
                        var a = ll(i, function(d) {
                                return c.size === h && c.clear(), d
                            }),
                            c = a.cache;
                        return a
                    }

                    function j$(i, a) {
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
                            i[3] = x ? hm(x, N, a[4]) : N, i[4] = x ? Hn(i[3], g) : a[4]
                        }
                        return N = a[5], N && (x = i[5], i[5] = x ? pm(x, N, a[6]) : N, i[6] = x ? Hn(i[5], g) : a[6]), N = a[7], N && (i[7] = N), d & oe && (i[8] = i[8] == null ? a[8] : ir(i[8], a[8])), i[9] == null && (i[9] = a[9]), i[0] = a[0], i[1] = v, i
                    }

                    function G$(i) {
                        var a = [];
                        if (i != null)
                            for (var c in pt(i)) a.push(c);
                        return a
                    }

                    function W$(i) {
                        return ko.call(i)
                    }

                    function Rm(i, a, c) {
                        return a = Bt(a === r ? i.length - 1 : a, 0),
                            function() {
                                for (var d = arguments, v = -1, b = Bt(d.length - a, 0), I = q(b); ++v < b;) I[v] = d[a + v];
                                v = -1;
                                for (var N = q(a + 1); ++v < a;) N[v] = d[v];
                                return N[a] = c(I), Cr(i, this, N)
                            }
                    }

                    function Lm(i, a) {
                        return a.length < 2 ? i : Ni(i, Hr(a, 0, -1))
                    }

                    function H$(i, a) {
                        for (var c = i.length, d = ir(a.length, c), v = vr(i); d--;) {
                            var b = a[d];
                            i[d] = Nn(b, c) ? v[b] : r
                        }
                        return i
                    }

                    function Xu(i, a) {
                        if (!(a === "constructor" && typeof i[a] == "function") && a != "__proto__") return i[a]
                    }
                    var km = Dm(nm),
                        wa = s1 || function(i, a) {
                            return zt.setTimeout(i, a)
                        },
                        Ju = Dm(h$);

                    function xm(i, a, c) {
                        var d = a + "";
                        return Ju(i, x$(d, K$(R$(d), c)))
                    }

                    function Dm(i) {
                        var a = 0,
                            c = 0;
                        return function() {
                            var d = c1(),
                                v = $e - (d - c);
                            if (c = d, v > 0) {
                                if (++a >= fe) return arguments[0]
                            } else a = 0;
                            return i.apply(r, arguments)
                        }
                    }

                    function il(i, a) {
                        var c = -1,
                            d = i.length,
                            v = d - 1;
                        for (a = a === r ? d : a; ++c < a;) {
                            var b = Lu(c, v),
                                I = i[b];
                            i[b] = i[c], i[c] = I
                        }
                        return i.length = a, i
                    }
                    var Mm = U$(function(i) {
                        var a = [];
                        return i.charCodeAt(0) === 46 && a.push(""), i.replace(kw, function(c, d, v, b) {
                            a.push(v ? b.replace(Gw, "$1") : d || c)
                        }), a
                    });

                    function mn(i) {
                        if (typeof i == "string" || Nr(i)) return i;
                        var a = i + "";
                        return a == "0" && 1 / i == -be ? "-0" : a
                    }

                    function Ri(i) {
                        if (i != null) {
                            try {
                                return Lo.call(i)
                            } catch {}
                            try {
                                return i + ""
                            } catch {}
                        }
                        return ""
                    }

                    function K$(i, a) {
                        return Ur($r, function(c) {
                            var d = "_." + c[0];
                            a & c[1] && !Io(i, d) && i.push(d)
                        }), i.sort()
                    }

                    function Fm(i) {
                        if (i instanceof Ye) return i.clone();
                        var a = new Gr(i.__wrapped__, i.__chain__);
                        return a.__actions__ = vr(i.__actions__), a.__index__ = i.__index__, a.__values__ = i.__values__, a
                    }

                    function V$(i, a, c) {
                        (c ? dr(i, a, c) : a === r) ? a = 1: a = Bt(We(a), 0);
                        var d = i == null ? 0 : i.length;
                        if (!d || a < 1) return [];
                        for (var v = 0, b = 0, I = q(Uo(d / a)); v < d;) I[b++] = Hr(i, v, v += a);
                        return I
                    }

                    function q$(i) {
                        for (var a = -1, c = i == null ? 0 : i.length, d = 0, v = []; ++a < c;) {
                            var b = i[a];
                            b && (v[d++] = b)
                        }
                        return v
                    }

                    function Y$() {
                        var i = arguments.length;
                        if (!i) return [];
                        for (var a = q(i - 1), c = arguments[0], d = i; d--;) a[d - 1] = arguments[d];
                        return Wn(je(c) ? vr(c) : [c], Xt(a, 1))
                    }
                    var z$ = Ve(function(i, a) {
                            return Nt(i) ? _a(i, Xt(a, 1, Nt, !0)) : []
                        }),
                        X$ = Ve(function(i, a) {
                            var c = Kr(a);
                            return Nt(c) && (c = r), Nt(i) ? _a(i, Xt(a, 1, Nt, !0), Pe(c, 2)) : []
                        }),
                        J$ = Ve(function(i, a) {
                            var c = Kr(a);
                            return Nt(c) && (c = r), Nt(i) ? _a(i, Xt(a, 1, Nt, !0), r, c) : []
                        });

                    function Q$(i, a, c) {
                        var d = i == null ? 0 : i.length;
                        return d ? (a = c || a === r ? 1 : We(a), Hr(i, a < 0 ? 0 : a, d)) : []
                    }

                    function Z$(i, a, c) {
                        var d = i == null ? 0 : i.length;
                        return d ? (a = c || a === r ? 1 : We(a), a = d - a, Hr(i, 0, a < 0 ? 0 : a)) : []
                    }

                    function eC(i, a) {
                        return i && i.length ? Xo(i, Pe(a, 3), !0, !0) : []
                    }

                    function tC(i, a) {
                        return i && i.length ? Xo(i, Pe(a, 3), !0) : []
                    }

                    function rC(i, a, c, d) {
                        var v = i == null ? 0 : i.length;
                        return v ? (c && typeof c != "number" && dr(i, a, c) && (c = 0, d = v), Y1(i, a, c, d)) : []
                    }

                    function Bm(i, a, c) {
                        var d = i == null ? 0 : i.length;
                        if (!d) return -1;
                        var v = c == null ? 0 : We(c);
                        return v < 0 && (v = Bt(d + v, 0)), Ao(i, Pe(a, 3), v)
                    }

                    function Um(i, a, c) {
                        var d = i == null ? 0 : i.length;
                        if (!d) return -1;
                        var v = d - 1;
                        return c !== r && (v = We(c), v = c < 0 ? Bt(d + v, 0) : ir(v, d - 1)), Ao(i, Pe(a, 3), v, !0)
                    }

                    function jm(i) {
                        var a = i == null ? 0 : i.length;
                        return a ? Xt(i, 1) : []
                    }

                    function nC(i) {
                        var a = i == null ? 0 : i.length;
                        return a ? Xt(i, be) : []
                    }

                    function iC(i, a) {
                        var c = i == null ? 0 : i.length;
                        return c ? (a = a === r ? 1 : We(a), Xt(i, a)) : []
                    }

                    function sC(i) {
                        for (var a = -1, c = i == null ? 0 : i.length, d = {}; ++a < c;) {
                            var v = i[a];
                            d[v[0]] = v[1]
                        }
                        return d
                    }

                    function Gm(i) {
                        return i && i.length ? i[0] : r
                    }

                    function aC(i, a, c) {
                        var d = i == null ? 0 : i.length;
                        if (!d) return -1;
                        var v = c == null ? 0 : We(c);
                        return v < 0 && (v = Bt(d + v, 0)), fs(i, a, v)
                    }

                    function oC(i) {
                        var a = i == null ? 0 : i.length;
                        return a ? Hr(i, 0, -1) : []
                    }
                    var lC = Ve(function(i) {
                            var a = St(i, Fu);
                            return a.length && a[0] === i[0] ? Iu(a) : []
                        }),
                        cC = Ve(function(i) {
                            var a = Kr(i),
                                c = St(i, Fu);
                            return a === Kr(c) ? a = r : c.pop(), c.length && c[0] === i[0] ? Iu(c, Pe(a, 2)) : []
                        }),
                        uC = Ve(function(i) {
                            var a = Kr(i),
                                c = St(i, Fu);
                            return a = typeof a == "function" ? a : r, a && c.pop(), c.length && c[0] === i[0] ? Iu(c, r, a) : []
                        });

                    function fC(i, a) {
                        return i == null ? "" : o1.call(i, a)
                    }

                    function Kr(i) {
                        var a = i == null ? 0 : i.length;
                        return a ? i[a - 1] : r
                    }

                    function dC(i, a, c) {
                        var d = i == null ? 0 : i.length;
                        if (!d) return -1;
                        var v = d;
                        return c !== r && (v = We(c), v = v < 0 ? Bt(d + v, 0) : ir(v, d - 1)), a === a ? K0(i, a, v) : Ao(i, Tg, v, !0)
                    }

                    function hC(i, a) {
                        return i && i.length ? Zg(i, We(a)) : r
                    }
                    var pC = Ve(Wm);

                    function Wm(i, a) {
                        return i && i.length && a && a.length ? Ru(i, a) : i
                    }

                    function gC(i, a, c) {
                        return i && i.length && a && a.length ? Ru(i, a, Pe(c, 2)) : i
                    }

                    function mC(i, a, c) {
                        return i && i.length && a && a.length ? Ru(i, a, r, c) : i
                    }
                    var vC = An(function(i, a) {
                        var c = i == null ? 0 : i.length,
                            d = Ou(i, a);
                        return rm(i, St(a, function(v) {
                            return Nn(v, c) ? +v : v
                        }).sort(dm)), d
                    });

                    function yC(i, a) {
                        var c = [];
                        if (!(i && i.length)) return c;
                        var d = -1,
                            v = [],
                            b = i.length;
                        for (a = Pe(a, 3); ++d < b;) {
                            var I = i[d];
                            a(I, d, i) && (c.push(I), v.push(d))
                        }
                        return rm(i, v), c
                    }

                    function Qu(i) {
                        return i == null ? i : f1.call(i)
                    }

                    function _C(i, a, c) {
                        var d = i == null ? 0 : i.length;
                        return d ? (c && typeof c != "number" && dr(i, a, c) ? (a = 0, c = d) : (a = a == null ? 0 : We(a), c = c === r ? d : We(c)), Hr(i, a, c)) : []
                    }

                    function bC(i, a) {
                        return zo(i, a)
                    }

                    function EC(i, a, c) {
                        return xu(i, a, Pe(c, 2))
                    }

                    function TC(i, a) {
                        var c = i == null ? 0 : i.length;
                        if (c) {
                            var d = zo(i, a);
                            if (d < c && rn(i[d], a)) return d
                        }
                        return -1
                    }

                    function SC(i, a) {
                        return zo(i, a, !0)
                    }

                    function OC(i, a, c) {
                        return xu(i, a, Pe(c, 2), !0)
                    }

                    function wC(i, a) {
                        var c = i == null ? 0 : i.length;
                        if (c) {
                            var d = zo(i, a, !0) - 1;
                            if (rn(i[d], a)) return d
                        }
                        return -1
                    }

                    function $C(i) {
                        return i && i.length ? im(i) : []
                    }

                    function CC(i, a) {
                        return i && i.length ? im(i, Pe(a, 2)) : []
                    }

                    function IC(i) {
                        var a = i == null ? 0 : i.length;
                        return a ? Hr(i, 1, a) : []
                    }

                    function AC(i, a, c) {
                        return i && i.length ? (a = c || a === r ? 1 : We(a), Hr(i, 0, a < 0 ? 0 : a)) : []
                    }

                    function NC(i, a, c) {
                        var d = i == null ? 0 : i.length;
                        return d ? (a = c || a === r ? 1 : We(a), a = d - a, Hr(i, a < 0 ? 0 : a, d)) : []
                    }

                    function PC(i, a) {
                        return i && i.length ? Xo(i, Pe(a, 3), !1, !0) : []
                    }

                    function RC(i, a) {
                        return i && i.length ? Xo(i, Pe(a, 3)) : []
                    }
                    var LC = Ve(function(i) {
                            return qn(Xt(i, 1, Nt, !0))
                        }),
                        kC = Ve(function(i) {
                            var a = Kr(i);
                            return Nt(a) && (a = r), qn(Xt(i, 1, Nt, !0), Pe(a, 2))
                        }),
                        xC = Ve(function(i) {
                            var a = Kr(i);
                            return a = typeof a == "function" ? a : r, qn(Xt(i, 1, Nt, !0), r, a)
                        });

                    function DC(i) {
                        return i && i.length ? qn(i) : []
                    }

                    function MC(i, a) {
                        return i && i.length ? qn(i, Pe(a, 2)) : []
                    }

                    function FC(i, a) {
                        return a = typeof a == "function" ? a : r, i && i.length ? qn(i, r, a) : []
                    }

                    function Zu(i) {
                        if (!(i && i.length)) return [];
                        var a = 0;
                        return i = Gn(i, function(c) {
                            if (Nt(c)) return a = Bt(c.length, a), !0
                        }), mu(a, function(c) {
                            return St(i, hu(c))
                        })
                    }

                    function Hm(i, a) {
                        if (!(i && i.length)) return [];
                        var c = Zu(i);
                        return a == null ? c : St(c, function(d) {
                            return Cr(a, r, d)
                        })
                    }
                    var BC = Ve(function(i, a) {
                            return Nt(i) ? _a(i, a) : []
                        }),
                        UC = Ve(function(i) {
                            return Mu(Gn(i, Nt))
                        }),
                        jC = Ve(function(i) {
                            var a = Kr(i);
                            return Nt(a) && (a = r), Mu(Gn(i, Nt), Pe(a, 2))
                        }),
                        GC = Ve(function(i) {
                            var a = Kr(i);
                            return a = typeof a == "function" ? a : r, Mu(Gn(i, Nt), r, a)
                        }),
                        WC = Ve(Zu);

                    function HC(i, a) {
                        return lm(i || [], a || [], ya)
                    }

                    function KC(i, a) {
                        return lm(i || [], a || [], Ta)
                    }
                    var VC = Ve(function(i) {
                        var a = i.length,
                            c = a > 1 ? i[a - 1] : r;
                        return c = typeof c == "function" ? (i.pop(), c) : r, Hm(i, c)
                    });

                    function Km(i) {
                        var a = y(i);
                        return a.__chain__ = !0, a
                    }

                    function qC(i, a) {
                        return a(i), i
                    }

                    function sl(i, a) {
                        return a(i)
                    }
                    var YC = An(function(i) {
                        var a = i.length,
                            c = a ? i[0] : 0,
                            d = this.__wrapped__,
                            v = function(b) {
                                return Ou(b, i)
                            };
                        return a > 1 || this.__actions__.length || !(d instanceof Ye) || !Nn(c) ? this.thru(v) : (d = d.slice(c, +c + (a ? 1 : 0)), d.__actions__.push({
                            func: sl,
                            args: [v],
                            thisArg: r
                        }), new Gr(d, this.__chain__).thru(function(b) {
                            return a && !b.length && b.push(r), b
                        }))
                    });

                    function zC() {
                        return Km(this)
                    }

                    function XC() {
                        return new Gr(this.value(), this.__chain__)
                    }

                    function JC() {
                        this.__values__ === r && (this.__values__ = sv(this.value()));
                        var i = this.__index__ >= this.__values__.length,
                            a = i ? r : this.__values__[this.__index__++];
                        return {
                            done: i,
                            value: a
                        }
                    }

                    function QC() {
                        return this
                    }

                    function ZC(i) {
                        for (var a, c = this; c instanceof Ho;) {
                            var d = Fm(c);
                            d.__index__ = 0, d.__values__ = r, a ? v.__wrapped__ = d : a = d;
                            var v = d;
                            c = c.__wrapped__
                        }
                        return v.__wrapped__ = i, a
                    }

                    function eI() {
                        var i = this.__wrapped__;
                        if (i instanceof Ye) {
                            var a = i;
                            return this.__actions__.length && (a = new Ye(this)), a = a.reverse(), a.__actions__.push({
                                func: sl,
                                args: [Qu],
                                thisArg: r
                            }), new Gr(a, this.__chain__)
                        }
                        return this.thru(Qu)
                    }

                    function tI() {
                        return om(this.__wrapped__, this.__actions__)
                    }
                    var rI = Jo(function(i, a, c) {
                        dt.call(i, c) ? ++i[c] : Cn(i, c, 1)
                    });

                    function nI(i, a, c) {
                        var d = je(i) ? bg : q1;
                        return c && dr(i, a, c) && (a = r), d(i, Pe(a, 3))
                    }

                    function iI(i, a) {
                        var c = je(i) ? Gn : Hg;
                        return c(i, Pe(a, 3))
                    }
                    var sI = ym(Bm),
                        aI = ym(Um);

                    function oI(i, a) {
                        return Xt(al(i, a), 1)
                    }

                    function lI(i, a) {
                        return Xt(al(i, a), be)
                    }

                    function cI(i, a, c) {
                        return c = c === r ? 1 : We(c), Xt(al(i, a), c)
                    }

                    function Vm(i, a) {
                        var c = je(i) ? Ur : Vn;
                        return c(i, Pe(a, 3))
                    }

                    function qm(i, a) {
                        var c = je(i) ? I0 : Wg;
                        return c(i, Pe(a, 3))
                    }
                    var uI = Jo(function(i, a, c) {
                        dt.call(i, c) ? i[c].push(a) : Cn(i, c, [a])
                    });

                    function fI(i, a, c, d) {
                        i = yr(i) ? i : Ss(i), c = c && !d ? We(c) : 0;
                        var v = i.length;
                        return c < 0 && (c = Bt(v + c, 0)), fl(i) ? c <= v && i.indexOf(a, c) > -1 : !!v && fs(i, a, c) > -1
                    }
                    var dI = Ve(function(i, a, c) {
                            var d = -1,
                                v = typeof a == "function",
                                b = yr(i) ? q(i.length) : [];
                            return Vn(i, function(I) {
                                b[++d] = v ? Cr(a, I, c) : ba(I, a, c)
                            }), b
                        }),
                        hI = Jo(function(i, a, c) {
                            Cn(i, c, a)
                        });

                    function al(i, a) {
                        var c = je(i) ? St : Xg;
                        return c(i, Pe(a, 3))
                    }

                    function pI(i, a, c, d) {
                        return i == null ? [] : (je(a) || (a = a == null ? [] : [a]), c = d ? r : c, je(c) || (c = c == null ? [] : [c]), em(i, a, c))
                    }
                    var gI = Jo(function(i, a, c) {
                        i[c ? 0 : 1].push(a)
                    }, function() {
                        return [
                            [],
                            []
                        ]
                    });

                    function mI(i, a, c) {
                        var d = je(i) ? fu : Og,
                            v = arguments.length < 3;
                        return d(i, Pe(a, 4), c, v, Vn)
                    }

                    function vI(i, a, c) {
                        var d = je(i) ? A0 : Og,
                            v = arguments.length < 3;
                        return d(i, Pe(a, 4), c, v, Wg)
                    }

                    function yI(i, a) {
                        var c = je(i) ? Gn : Hg;
                        return c(i, cl(Pe(a, 3)))
                    }

                    function _I(i) {
                        var a = je(i) ? Bg : f$;
                        return a(i)
                    }

                    function bI(i, a, c) {
                        (c ? dr(i, a, c) : a === r) ? a = 1: a = We(a);
                        var d = je(i) ? G1 : d$;
                        return d(i, a)
                    }

                    function EI(i) {
                        var a = je(i) ? W1 : p$;
                        return a(i)
                    }

                    function TI(i) {
                        if (i == null) return 0;
                        if (yr(i)) return fl(i) ? hs(i) : i.length;
                        var a = sr(i);
                        return a == p || a == re ? i.size : Nu(i).length
                    }

                    function SI(i, a, c) {
                        var d = je(i) ? du : g$;
                        return c && dr(i, a, c) && (a = r), d(i, Pe(a, 3))
                    }
                    var OI = Ve(function(i, a) {
                            if (i == null) return [];
                            var c = a.length;
                            return c > 1 && dr(i, a[0], a[1]) ? a = [] : c > 2 && dr(a[0], a[1], a[2]) && (a = [a[0]]), em(i, Xt(a, 1), [])
                        }),
                        ol = i1 || function() {
                            return zt.Date.now()
                        };

                    function wI(i, a) {
                        if (typeof a != "function") throw new jr(l);
                        return i = We(i),
                            function() {
                                if (--i < 1) return a.apply(this, arguments)
                            }
                    }

                    function Ym(i, a, c) {
                        return a = c ? r : a, a = i && a == null ? i.length : a, In(i, oe, r, r, r, r, a)
                    }

                    function zm(i, a) {
                        var c;
                        if (typeof a != "function") throw new jr(l);
                        return i = We(i),
                            function() {
                                return --i > 0 && (c = a.apply(this, arguments)), i <= 1 && (a = r), c
                            }
                    }
                    var ef = Ve(function(i, a, c) {
                            var d = U;
                            if (c.length) {
                                var v = Hn(c, Es(ef));
                                d |= j
                            }
                            return In(i, d, a, c, v)
                        }),
                        Xm = Ve(function(i, a, c) {
                            var d = U | C;
                            if (c.length) {
                                var v = Hn(c, Es(Xm));
                                d |= j
                            }
                            return In(a, d, i, c, v)
                        });

                    function Jm(i, a, c) {
                        a = c ? r : a;
                        var d = In(i, X, r, r, r, r, r, a);
                        return d.placeholder = Jm.placeholder, d
                    }

                    function Qm(i, a, c) {
                        a = c ? r : a;
                        var d = In(i, G, r, r, r, r, r, a);
                        return d.placeholder = Qm.placeholder, d
                    }

                    function Zm(i, a, c) {
                        var d, v, b, I, N, x, ee = 0,
                            te = !1,
                            ae = !1,
                            me = !0;
                        if (typeof i != "function") throw new jr(l);
                        a = Vr(a) || 0, $t(c) && (te = !!c.leading, ae = "maxWait" in c, b = ae ? Bt(Vr(c.maxWait) || 0, a) : b, me = "trailing" in c ? !!c.trailing : me);

                        function we(Pt) {
                            var nn = d,
                                Ln = v;
                            return d = v = r, ee = Pt, I = i.apply(Ln, nn), I
                        }

                        function Re(Pt) {
                            return ee = Pt, N = wa(qe, a), te ? we(Pt) : I
                        }

                        function Ke(Pt) {
                            var nn = Pt - x,
                                Ln = Pt - ee,
                                yv = a - nn;
                            return ae ? ir(yv, b - Ln) : yv
                        }

                        function Le(Pt) {
                            var nn = Pt - x,
                                Ln = Pt - ee;
                            return x === r || nn >= a || nn < 0 || ae && Ln >= b
                        }

                        function qe() {
                            var Pt = ol();
                            if (Le(Pt)) return Xe(Pt);
                            N = wa(qe, Ke(Pt))
                        }

                        function Xe(Pt) {
                            return N = r, me && d ? we(Pt) : (d = v = r, I)
                        }

                        function Pr() {
                            N !== r && cm(N), ee = 0, d = x = v = N = r
                        }

                        function hr() {
                            return N === r ? I : Xe(ol())
                        }

                        function Rr() {
                            var Pt = ol(),
                                nn = Le(Pt);
                            if (d = arguments, v = this, x = Pt, nn) {
                                if (N === r) return Re(x);
                                if (ae) return cm(N), N = wa(qe, a), we(x)
                            }
                            return N === r && (N = wa(qe, a)), I
                        }
                        return Rr.cancel = Pr, Rr.flush = hr, Rr
                    }
                    var $I = Ve(function(i, a) {
                            return Gg(i, 1, a)
                        }),
                        CI = Ve(function(i, a, c) {
                            return Gg(i, Vr(a) || 0, c)
                        });

                    function II(i) {
                        return In(i, ue)
                    }

                    function ll(i, a) {
                        if (typeof i != "function" || a != null && typeof a != "function") throw new jr(l);
                        var c = function() {
                            var d = arguments,
                                v = a ? a.apply(this, d) : d[0],
                                b = c.cache;
                            if (b.has(v)) return b.get(v);
                            var I = i.apply(this, d);
                            return c.cache = b.set(v, I) || b, I
                        };
                        return c.cache = new(ll.Cache || $n), c
                    }
                    ll.Cache = $n;

                    function cl(i) {
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

                    function AI(i) {
                        return zm(2, i)
                    }
                    var NI = m$(function(i, a) {
                            a = a.length == 1 && je(a[0]) ? St(a[0], Ir(Pe())) : St(Xt(a, 1), Ir(Pe()));
                            var c = a.length;
                            return Ve(function(d) {
                                for (var v = -1, b = ir(d.length, c); ++v < b;) d[v] = a[v].call(this, d[v]);
                                return Cr(i, this, d)
                            })
                        }),
                        tf = Ve(function(i, a) {
                            var c = Hn(a, Es(tf));
                            return In(i, j, r, a, c)
                        }),
                        ev = Ve(function(i, a) {
                            var c = Hn(a, Es(ev));
                            return In(i, Q, r, a, c)
                        }),
                        PI = An(function(i, a) {
                            return In(i, le, r, r, r, a)
                        });

                    function RI(i, a) {
                        if (typeof i != "function") throw new jr(l);
                        return a = a === r ? a : We(a), Ve(i, a)
                    }

                    function LI(i, a) {
                        if (typeof i != "function") throw new jr(l);
                        return a = a == null ? 0 : Bt(We(a), 0), Ve(function(c) {
                            var d = c[a],
                                v = zn(c, 0, a);
                            return d && Wn(v, d), Cr(i, this, v)
                        })
                    }

                    function kI(i, a, c) {
                        var d = !0,
                            v = !0;
                        if (typeof i != "function") throw new jr(l);
                        return $t(c) && (d = "leading" in c ? !!c.leading : d, v = "trailing" in c ? !!c.trailing : v), Zm(i, a, {
                            leading: d,
                            maxWait: a,
                            trailing: v
                        })
                    }

                    function xI(i) {
                        return Ym(i, 1)
                    }

                    function DI(i, a) {
                        return tf(Bu(a), i)
                    }

                    function MI() {
                        if (!arguments.length) return [];
                        var i = arguments[0];
                        return je(i) ? i : [i]
                    }

                    function FI(i) {
                        return Wr(i, $)
                    }

                    function BI(i, a) {
                        return a = typeof a == "function" ? a : r, Wr(i, $, a)
                    }

                    function UI(i) {
                        return Wr(i, _ | $)
                    }

                    function jI(i, a) {
                        return a = typeof a == "function" ? a : r, Wr(i, _ | $, a)
                    }

                    function GI(i, a) {
                        return a == null || jg(i, a, Kt(a))
                    }

                    function rn(i, a) {
                        return i === a || i !== i && a !== a
                    }
                    var WI = tl(Cu),
                        HI = tl(function(i, a) {
                            return i >= a
                        }),
                        Li = qg(function() {
                            return arguments
                        }()) ? qg : function(i) {
                            return It(i) && dt.call(i, "callee") && !Lg.call(i, "callee")
                        },
                        je = q.isArray,
                        KI = pg ? Ir(pg) : Z1;

                    function yr(i) {
                        return i != null && ul(i.length) && !Pn(i)
                    }

                    function Nt(i) {
                        return It(i) && yr(i)
                    }

                    function VI(i) {
                        return i === !0 || i === !1 || It(i) && fr(i) == Tt
                    }
                    var Xn = a1 || hf,
                        qI = gg ? Ir(gg) : e$;

                    function YI(i) {
                        return It(i) && i.nodeType === 1 && !$a(i)
                    }

                    function zI(i) {
                        if (i == null) return !0;
                        if (yr(i) && (je(i) || typeof i == "string" || typeof i.splice == "function" || Xn(i) || Ts(i) || Li(i))) return !i.length;
                        var a = sr(i);
                        if (a == p || a == re) return !i.size;
                        if (Oa(i)) return !Nu(i).length;
                        for (var c in i)
                            if (dt.call(i, c)) return !1;
                        return !0
                    }

                    function XI(i, a) {
                        return Ea(i, a)
                    }

                    function JI(i, a, c) {
                        c = typeof c == "function" ? c : r;
                        var d = c ? c(i, a) : r;
                        return d === r ? Ea(i, a, r, c) : !!d
                    }

                    function rf(i) {
                        if (!It(i)) return !1;
                        var a = fr(i);
                        return a == Ht || a == kt || typeof i.message == "string" && typeof i.name == "string" && !$a(i)
                    }

                    function QI(i) {
                        return typeof i == "number" && xg(i)
                    }

                    function Pn(i) {
                        if (!$t(i)) return !1;
                        var a = fr(i);
                        return a == xt || a == m || a == at || a == ce
                    }

                    function tv(i) {
                        return typeof i == "number" && i == We(i)
                    }

                    function ul(i) {
                        return typeof i == "number" && i > -1 && i % 1 == 0 && i <= ve
                    }

                    function $t(i) {
                        var a = typeof i;
                        return i != null && (a == "object" || a == "function")
                    }

                    function It(i) {
                        return i != null && typeof i == "object"
                    }
                    var rv = mg ? Ir(mg) : r$;

                    function ZI(i, a) {
                        return i === a || Au(i, a, Vu(a))
                    }

                    function eA(i, a, c) {
                        return c = typeof c == "function" ? c : r, Au(i, a, Vu(a), c)
                    }

                    function tA(i) {
                        return nv(i) && i != +i
                    }

                    function rA(i) {
                        if (B$(i)) throw new Be(o);
                        return Yg(i)
                    }

                    function nA(i) {
                        return i === null
                    }

                    function iA(i) {
                        return i == null
                    }

                    function nv(i) {
                        return typeof i == "number" || It(i) && fr(i) == O
                    }

                    function $a(i) {
                        if (!It(i) || fr(i) != B) return !1;
                        var a = Mo(i);
                        if (a === null) return !0;
                        var c = dt.call(a, "constructor") && a.constructor;
                        return typeof c == "function" && c instanceof c && Lo.call(c) == e1
                    }
                    var nf = vg ? Ir(vg) : n$;

                    function sA(i) {
                        return tv(i) && i >= -ve && i <= ve
                    }
                    var iv = yg ? Ir(yg) : i$;

                    function fl(i) {
                        return typeof i == "string" || !je(i) && It(i) && fr(i) == A
                    }

                    function Nr(i) {
                        return typeof i == "symbol" || It(i) && fr(i) == K
                    }
                    var Ts = _g ? Ir(_g) : s$;

                    function aA(i) {
                        return i === r
                    }

                    function oA(i) {
                        return It(i) && sr(i) == pe
                    }

                    function lA(i) {
                        return It(i) && fr(i) == Ne
                    }
                    var cA = tl(Pu),
                        uA = tl(function(i, a) {
                            return i <= a
                        });

                    function sv(i) {
                        if (!i) return [];
                        if (yr(i)) return fl(i) ? en(i) : vr(i);
                        if (ha && i[ha]) return G0(i[ha]());
                        var a = sr(i),
                            c = a == p ? yu : a == re ? No : Ss;
                        return c(i)
                    }

                    function Rn(i) {
                        if (!i) return i === 0 ? i : 0;
                        if (i = Vr(i), i === be || i === -be) {
                            var a = i < 0 ? -1 : 1;
                            return a * Oe
                        }
                        return i === i ? i : 0
                    }

                    function We(i) {
                        var a = Rn(i),
                            c = a % 1;
                        return a === a ? c ? a - c : a : 0
                    }

                    function av(i) {
                        return i ? Ai(We(i), 0, Ge) : 0
                    }

                    function Vr(i) {
                        if (typeof i == "number") return i;
                        if (Nr(i)) return Fe;
                        if ($t(i)) {
                            var a = typeof i.valueOf == "function" ? i.valueOf() : i;
                            i = $t(a) ? a + "" : a
                        }
                        if (typeof i != "string") return i === 0 ? i : +i;
                        i = wg(i);
                        var c = Kw.test(i);
                        return c || qw.test(i) ? w0(i.slice(2), c ? 2 : 8) : Hw.test(i) ? Fe : +i
                    }

                    function ov(i) {
                        return gn(i, _r(i))
                    }

                    function fA(i) {
                        return i ? Ai(We(i), -ve, ve) : i === 0 ? i : 0
                    }

                    function lt(i) {
                        return i == null ? "" : Ar(i)
                    }
                    var dA = _s(function(i, a) {
                            if (Oa(a) || yr(a)) {
                                gn(a, Kt(a), i);
                                return
                            }
                            for (var c in a) dt.call(a, c) && ya(i, c, a[c])
                        }),
                        lv = _s(function(i, a) {
                            gn(a, _r(a), i)
                        }),
                        dl = _s(function(i, a, c, d) {
                            gn(a, _r(a), i, d)
                        }),
                        hA = _s(function(i, a, c, d) {
                            gn(a, Kt(a), i, d)
                        }),
                        pA = An(Ou);

                    function gA(i, a) {
                        var c = ys(i);
                        return a == null ? c : Ug(c, a)
                    }
                    var mA = Ve(function(i, a) {
                            i = pt(i);
                            var c = -1,
                                d = a.length,
                                v = d > 2 ? a[2] : r;
                            for (v && dr(a[0], a[1], v) && (d = 1); ++c < d;)
                                for (var b = a[c], I = _r(b), N = -1, x = I.length; ++N < x;) {
                                    var ee = I[N],
                                        te = i[ee];
                                    (te === r || rn(te, gs[ee]) && !dt.call(i, ee)) && (i[ee] = b[ee])
                                }
                            return i
                        }),
                        vA = Ve(function(i) {
                            return i.push(r, wm), Cr(cv, r, i)
                        });

                    function yA(i, a) {
                        return Eg(i, Pe(a, 3), pn)
                    }

                    function _A(i, a) {
                        return Eg(i, Pe(a, 3), $u)
                    }

                    function bA(i, a) {
                        return i == null ? i : wu(i, Pe(a, 3), _r)
                    }

                    function EA(i, a) {
                        return i == null ? i : Kg(i, Pe(a, 3), _r)
                    }

                    function TA(i, a) {
                        return i && pn(i, Pe(a, 3))
                    }

                    function SA(i, a) {
                        return i && $u(i, Pe(a, 3))
                    }

                    function OA(i) {
                        return i == null ? [] : qo(i, Kt(i))
                    }

                    function wA(i) {
                        return i == null ? [] : qo(i, _r(i))
                    }

                    function sf(i, a, c) {
                        var d = i == null ? r : Ni(i, a);
                        return d === r ? c : d
                    }

                    function $A(i, a) {
                        return i != null && Im(i, a, z1)
                    }

                    function af(i, a) {
                        return i != null && Im(i, a, X1)
                    }
                    var CA = bm(function(i, a, c) {
                            a != null && typeof a.toString != "function" && (a = ko.call(a)), i[a] = c
                        }, lf(br)),
                        IA = bm(function(i, a, c) {
                            a != null && typeof a.toString != "function" && (a = ko.call(a)), dt.call(i, a) ? i[a].push(c) : i[a] = [c]
                        }, Pe),
                        AA = Ve(ba);

                    function Kt(i) {
                        return yr(i) ? Fg(i) : Nu(i)
                    }

                    function _r(i) {
                        return yr(i) ? Fg(i, !0) : a$(i)
                    }

                    function NA(i, a) {
                        var c = {};
                        return a = Pe(a, 3), pn(i, function(d, v, b) {
                            Cn(c, a(d, v, b), d)
                        }), c
                    }

                    function PA(i, a) {
                        var c = {};
                        return a = Pe(a, 3), pn(i, function(d, v, b) {
                            Cn(c, v, a(d, v, b))
                        }), c
                    }
                    var RA = _s(function(i, a, c) {
                            Yo(i, a, c)
                        }),
                        cv = _s(function(i, a, c, d) {
                            Yo(i, a, c, d)
                        }),
                        LA = An(function(i, a) {
                            var c = {};
                            if (i == null) return c;
                            var d = !1;
                            a = St(a, function(b) {
                                return b = Yn(b, i), d || (d = b.length > 1), b
                            }), gn(i, Hu(i), c), d && (c = Wr(c, _ | E | $, C$));
                            for (var v = a.length; v--;) Du(c, a[v]);
                            return c
                        });

                    function kA(i, a) {
                        return uv(i, cl(Pe(a)))
                    }
                    var xA = An(function(i, a) {
                        return i == null ? {} : l$(i, a)
                    });

                    function uv(i, a) {
                        if (i == null) return {};
                        var c = St(Hu(i), function(d) {
                            return [d]
                        });
                        return a = Pe(a), tm(i, c, function(d, v) {
                            return a(d, v[0])
                        })
                    }

                    function DA(i, a, c) {
                        a = Yn(a, i);
                        var d = -1,
                            v = a.length;
                        for (v || (v = 1, i = r); ++d < v;) {
                            var b = i == null ? r : i[mn(a[d])];
                            b === r && (d = v, b = c), i = Pn(b) ? b.call(i) : b
                        }
                        return i
                    }

                    function MA(i, a, c) {
                        return i == null ? i : Ta(i, a, c)
                    }

                    function FA(i, a, c, d) {
                        return d = typeof d == "function" ? d : r, i == null ? i : Ta(i, a, c, d)
                    }
                    var fv = Sm(Kt),
                        dv = Sm(_r);

                    function BA(i, a, c) {
                        var d = je(i),
                            v = d || Xn(i) || Ts(i);
                        if (a = Pe(a, 4), c == null) {
                            var b = i && i.constructor;
                            v ? c = d ? new b : [] : $t(i) ? c = Pn(b) ? ys(Mo(i)) : {} : c = {}
                        }
                        return (v ? Ur : pn)(i, function(I, N, x) {
                            return a(c, I, N, x)
                        }), c
                    }

                    function UA(i, a) {
                        return i == null ? !0 : Du(i, a)
                    }

                    function jA(i, a, c) {
                        return i == null ? i : am(i, a, Bu(c))
                    }

                    function GA(i, a, c, d) {
                        return d = typeof d == "function" ? d : r, i == null ? i : am(i, a, Bu(c), d)
                    }

                    function Ss(i) {
                        return i == null ? [] : vu(i, Kt(i))
                    }

                    function WA(i) {
                        return i == null ? [] : vu(i, _r(i))
                    }

                    function HA(i, a, c) {
                        return c === r && (c = a, a = r), c !== r && (c = Vr(c), c = c === c ? c : 0), a !== r && (a = Vr(a), a = a === a ? a : 0), Ai(Vr(i), a, c)
                    }

                    function KA(i, a, c) {
                        return a = Rn(a), c === r ? (c = a, a = 0) : c = Rn(c), i = Vr(i), J1(i, a, c)
                    }

                    function VA(i, a, c) {
                        if (c && typeof c != "boolean" && dr(i, a, c) && (a = c = r), c === r && (typeof a == "boolean" ? (c = a, a = r) : typeof i == "boolean" && (c = i, i = r)), i === r && a === r ? (i = 0, a = 1) : (i = Rn(i), a === r ? (a = i, i = 0) : a = Rn(a)), i > a) {
                            var d = i;
                            i = a, a = d
                        }
                        if (c || i % 1 || a % 1) {
                            var v = Dg();
                            return ir(i + v * (a - i + O0("1e-" + ((v + "").length - 1))), a)
                        }
                        return Lu(i, a)
                    }
                    var qA = bs(function(i, a, c) {
                        return a = a.toLowerCase(), i + (c ? hv(a) : a)
                    });

                    function hv(i) {
                        return of(lt(i).toLowerCase())
                    }

                    function pv(i) {
                        return i = lt(i), i && i.replace(zw, M0).replace(p0, "")
                    }

                    function YA(i, a, c) {
                        i = lt(i), a = Ar(a);
                        var d = i.length;
                        c = c === r ? d : Ai(We(c), 0, d);
                        var v = c;
                        return c -= a.length, c >= 0 && i.slice(c, v) == a
                    }

                    function zA(i) {
                        return i = lt(i), i && Aw.test(i) ? i.replace(Kp, F0) : i
                    }

                    function XA(i) {
                        return i = lt(i), i && xw.test(i) ? i.replace(tu, "\\$&") : i
                    }
                    var JA = bs(function(i, a, c) {
                            return i + (c ? "-" : "") + a.toLowerCase()
                        }),
                        QA = bs(function(i, a, c) {
                            return i + (c ? " " : "") + a.toLowerCase()
                        }),
                        ZA = vm("toLowerCase");

                    function eN(i, a, c) {
                        i = lt(i), a = We(a);
                        var d = a ? hs(i) : 0;
                        if (!a || d >= a) return i;
                        var v = (a - d) / 2;
                        return el(jo(v), c) + i + el(Uo(v), c)
                    }

                    function tN(i, a, c) {
                        i = lt(i), a = We(a);
                        var d = a ? hs(i) : 0;
                        return a && d < a ? i + el(a - d, c) : i
                    }

                    function rN(i, a, c) {
                        i = lt(i), a = We(a);
                        var d = a ? hs(i) : 0;
                        return a && d < a ? el(a - d, c) + i : i
                    }

                    function nN(i, a, c) {
                        return c || a == null ? a = 0 : a && (a = +a), u1(lt(i).replace(ru, ""), a || 0)
                    }

                    function iN(i, a, c) {
                        return (c ? dr(i, a, c) : a === r) ? a = 1 : a = We(a), ku(lt(i), a)
                    }

                    function sN() {
                        var i = arguments,
                            a = lt(i[0]);
                        return i.length < 3 ? a : a.replace(i[1], i[2])
                    }
                    var aN = bs(function(i, a, c) {
                        return i + (c ? "_" : "") + a.toLowerCase()
                    });

                    function oN(i, a, c) {
                        return c && typeof c != "number" && dr(i, a, c) && (a = c = r), c = c === r ? Ge : c >>> 0, c ? (i = lt(i), i && (typeof a == "string" || a != null && !nf(a)) && (a = Ar(a), !a && ds(i)) ? zn(en(i), 0, c) : i.split(a, c)) : []
                    }
                    var lN = bs(function(i, a, c) {
                        return i + (c ? " " : "") + of(a)
                    });

                    function cN(i, a, c) {
                        return i = lt(i), c = c == null ? 0 : Ai(We(c), 0, i.length), a = Ar(a), i.slice(c, c + a.length) == a
                    }

                    function uN(i, a, c) {
                        var d = y.templateSettings;
                        c && dr(i, a, c) && (a = r), i = lt(i), a = dl({}, a, d, Om);
                        var v = dl({}, a.imports, d.imports, Om),
                            b = Kt(v),
                            I = vu(v, b),
                            N, x, ee = 0,
                            te = a.interpolate || wo,
                            ae = "__p += '",
                            me = _u((a.escape || wo).source + "|" + te.source + "|" + (te === Vp ? Ww : wo).source + "|" + (a.evaluate || wo).source + "|$", "g"),
                            we = "//# sourceURL=" + (dt.call(a, "sourceURL") ? (a.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++_0 + "]") + `
`;
                        i.replace(me, function(Le, qe, Xe, Pr, hr, Rr) {
                            return Xe || (Xe = Pr), ae += i.slice(ee, Rr).replace(Xw, B0), qe && (N = !0, ae += `' +
__e(` + qe + `) +
'`), hr && (x = !0, ae += `';
` + hr + `;
__p += '`), Xe && (ae += `' +
((__t = (` + Xe + `)) == null ? '' : __t) +
'`), ee = Rr + Le.length, Le
                        }), ae += `';
`;
                        var Re = dt.call(a, "variable") && a.variable;
                        if (!Re) ae = `with (obj) {
` + ae + `
}
`;
                        else if (jw.test(Re)) throw new Be(u);
                        ae = (x ? ae.replace(nr, "") : ae).replace(Me, "$1").replace(fa, "$1;"), ae = "function(" + (Re || "obj") + `) {
` + (Re ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (N ? ", __e = _.escape" : "") + (x ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + ae + `return __p
}`;
                        var Ke = mv(function() {
                            return it(b, we + "return " + ae).apply(r, I)
                        });
                        if (Ke.source = ae, rf(Ke)) throw Ke;
                        return Ke
                    }

                    function fN(i) {
                        return lt(i).toLowerCase()
                    }

                    function dN(i) {
                        return lt(i).toUpperCase()
                    }

                    function hN(i, a, c) {
                        if (i = lt(i), i && (c || a === r)) return wg(i);
                        if (!i || !(a = Ar(a))) return i;
                        var d = en(i),
                            v = en(a),
                            b = $g(d, v),
                            I = Cg(d, v) + 1;
                        return zn(d, b, I).join("")
                    }

                    function pN(i, a, c) {
                        if (i = lt(i), i && (c || a === r)) return i.slice(0, Ag(i) + 1);
                        if (!i || !(a = Ar(a))) return i;
                        var d = en(i),
                            v = Cg(d, en(a)) + 1;
                        return zn(d, 0, v).join("")
                    }

                    function gN(i, a, c) {
                        if (i = lt(i), i && (c || a === r)) return i.replace(ru, "");
                        if (!i || !(a = Ar(a))) return i;
                        var d = en(i),
                            v = $g(d, en(a));
                        return zn(d, v).join("")
                    }

                    function mN(i, a) {
                        var c = Ae,
                            d = Ce;
                        if ($t(a)) {
                            var v = "separator" in a ? a.separator : v;
                            c = "length" in a ? We(a.length) : c, d = "omission" in a ? Ar(a.omission) : d
                        }
                        i = lt(i);
                        var b = i.length;
                        if (ds(i)) {
                            var I = en(i);
                            b = I.length
                        }
                        if (c >= b) return i;
                        var N = c - hs(d);
                        if (N < 1) return d;
                        var x = I ? zn(I, 0, N).join("") : i.slice(0, N);
                        if (v === r) return x + d;
                        if (I && (N += x.length - N), nf(v)) {
                            if (i.slice(N).search(v)) {
                                var ee, te = x;
                                for (v.global || (v = _u(v.source, lt(qp.exec(v)) + "g")), v.lastIndex = 0; ee = v.exec(te);) var ae = ee.index;
                                x = x.slice(0, ae === r ? N : ae)
                            }
                        } else if (i.indexOf(Ar(v), N) != N) {
                            var me = x.lastIndexOf(v);
                            me > -1 && (x = x.slice(0, me))
                        }
                        return x + d
                    }

                    function vN(i) {
                        return i = lt(i), i && Iw.test(i) ? i.replace(Hp, V0) : i
                    }
                    var yN = bs(function(i, a, c) {
                            return i + (c ? " " : "") + a.toUpperCase()
                        }),
                        of = vm("toUpperCase");

                    function gv(i, a, c) {
                        return i = lt(i), a = c ? r : a, a === r ? j0(i) ? z0(i) : R0(i) : i.match(a) || []
                    }
                    var mv = Ve(function(i, a) {
                            try {
                                return Cr(i, r, a)
                            } catch (c) {
                                return rf(c) ? c : new Be(c)
                            }
                        }),
                        _N = An(function(i, a) {
                            return Ur(a, function(c) {
                                c = mn(c), Cn(i, c, ef(i[c], i))
                            }), i
                        });

                    function bN(i) {
                        var a = i == null ? 0 : i.length,
                            c = Pe();
                        return i = a ? St(i, function(d) {
                            if (typeof d[1] != "function") throw new jr(l);
                            return [c(d[0]), d[1]]
                        }) : [], Ve(function(d) {
                            for (var v = -1; ++v < a;) {
                                var b = i[v];
                                if (Cr(b[0], this, d)) return Cr(b[1], this, d)
                            }
                        })
                    }

                    function EN(i) {
                        return V1(Wr(i, _))
                    }

                    function lf(i) {
                        return function() {
                            return i
                        }
                    }

                    function TN(i, a) {
                        return i == null || i !== i ? a : i
                    }
                    var SN = _m(),
                        ON = _m(!0);

                    function br(i) {
                        return i
                    }

                    function cf(i) {
                        return zg(typeof i == "function" ? i : Wr(i, _))
                    }

                    function wN(i) {
                        return Jg(Wr(i, _))
                    }

                    function $N(i, a) {
                        return Qg(i, Wr(a, _))
                    }
                    var CN = Ve(function(i, a) {
                            return function(c) {
                                return ba(c, i, a)
                            }
                        }),
                        IN = Ve(function(i, a) {
                            return function(c) {
                                return ba(i, c, a)
                            }
                        });

                    function uf(i, a, c) {
                        var d = Kt(a),
                            v = qo(a, d);
                        c == null && !($t(a) && (v.length || !d.length)) && (c = a, a = i, i = this, v = qo(a, Kt(a)));
                        var b = !($t(c) && "chain" in c) || !!c.chain,
                            I = Pn(i);
                        return Ur(v, function(N) {
                            var x = a[N];
                            i[N] = x, I && (i.prototype[N] = function() {
                                var ee = this.__chain__;
                                if (b || ee) {
                                    var te = i(this.__wrapped__),
                                        ae = te.__actions__ = vr(this.__actions__);
                                    return ae.push({
                                        func: x,
                                        args: arguments,
                                        thisArg: i
                                    }), te.__chain__ = ee, te
                                }
                                return x.apply(i, Wn([this.value()], arguments))
                            })
                        }), i
                    }

                    function AN() {
                        return zt._ === this && (zt._ = t1), this
                    }

                    function ff() {}

                    function NN(i) {
                        return i = We(i), Ve(function(a) {
                            return Zg(a, i)
                        })
                    }
                    var PN = ju(St),
                        RN = ju(bg),
                        LN = ju(du);

                    function vv(i) {
                        return Yu(i) ? hu(mn(i)) : c$(i)
                    }

                    function kN(i) {
                        return function(a) {
                            return i == null ? r : Ni(i, a)
                        }
                    }
                    var xN = Em(),
                        DN = Em(!0);

                    function df() {
                        return []
                    }

                    function hf() {
                        return !1
                    }

                    function MN() {
                        return {}
                    }

                    function FN() {
                        return ""
                    }

                    function BN() {
                        return !0
                    }

                    function UN(i, a) {
                        if (i = We(i), i < 1 || i > ve) return [];
                        var c = Ge,
                            d = ir(i, Ge);
                        a = Pe(a), i -= Ge;
                        for (var v = mu(d, a); ++c < i;) a(c);
                        return v
                    }

                    function jN(i) {
                        return je(i) ? St(i, mn) : Nr(i) ? [i] : vr(Mm(lt(i)))
                    }

                    function GN(i) {
                        var a = ++Z0;
                        return lt(i) + a
                    }
                    var WN = Zo(function(i, a) {
                            return i + a
                        }, 0),
                        HN = Gu("ceil"),
                        KN = Zo(function(i, a) {
                            return i / a
                        }, 1),
                        VN = Gu("floor");

                    function qN(i) {
                        return i && i.length ? Vo(i, br, Cu) : r
                    }

                    function YN(i, a) {
                        return i && i.length ? Vo(i, Pe(a, 2), Cu) : r
                    }

                    function zN(i) {
                        return Sg(i, br)
                    }

                    function XN(i, a) {
                        return Sg(i, Pe(a, 2))
                    }

                    function JN(i) {
                        return i && i.length ? Vo(i, br, Pu) : r
                    }

                    function QN(i, a) {
                        return i && i.length ? Vo(i, Pe(a, 2), Pu) : r
                    }
                    var ZN = Zo(function(i, a) {
                            return i * a
                        }, 1),
                        eP = Gu("round"),
                        tP = Zo(function(i, a) {
                            return i - a
                        }, 0);

                    function rP(i) {
                        return i && i.length ? gu(i, br) : 0
                    }

                    function nP(i, a) {
                        return i && i.length ? gu(i, Pe(a, 2)) : 0
                    }
                    return y.after = wI, y.ary = Ym, y.assign = dA, y.assignIn = lv, y.assignInWith = dl, y.assignWith = hA, y.at = pA, y.before = zm, y.bind = ef, y.bindAll = _N, y.bindKey = Xm, y.castArray = MI, y.chain = Km, y.chunk = V$, y.compact = q$, y.concat = Y$, y.cond = bN, y.conforms = EN, y.constant = lf, y.countBy = rI, y.create = gA, y.curry = Jm, y.curryRight = Qm, y.debounce = Zm, y.defaults = mA, y.defaultsDeep = vA, y.defer = $I, y.delay = CI, y.difference = z$, y.differenceBy = X$, y.differenceWith = J$, y.drop = Q$, y.dropRight = Z$, y.dropRightWhile = eC, y.dropWhile = tC, y.fill = rC, y.filter = iI, y.flatMap = oI, y.flatMapDeep = lI, y.flatMapDepth = cI, y.flatten = jm, y.flattenDeep = nC, y.flattenDepth = iC, y.flip = II, y.flow = SN, y.flowRight = ON, y.fromPairs = sC, y.functions = OA, y.functionsIn = wA, y.groupBy = uI, y.initial = oC, y.intersection = lC, y.intersectionBy = cC, y.intersectionWith = uC, y.invert = CA, y.invertBy = IA, y.invokeMap = dI, y.iteratee = cf, y.keyBy = hI, y.keys = Kt, y.keysIn = _r, y.map = al, y.mapKeys = NA, y.mapValues = PA, y.matches = wN, y.matchesProperty = $N, y.memoize = ll, y.merge = RA, y.mergeWith = cv, y.method = CN, y.methodOf = IN, y.mixin = uf, y.negate = cl, y.nthArg = NN, y.omit = LA, y.omitBy = kA, y.once = AI, y.orderBy = pI, y.over = PN, y.overArgs = NI, y.overEvery = RN, y.overSome = LN, y.partial = tf, y.partialRight = ev, y.partition = gI, y.pick = xA, y.pickBy = uv, y.property = vv, y.propertyOf = kN, y.pull = pC, y.pullAll = Wm, y.pullAllBy = gC, y.pullAllWith = mC, y.pullAt = vC, y.range = xN, y.rangeRight = DN, y.rearg = PI, y.reject = yI, y.remove = yC, y.rest = RI, y.reverse = Qu, y.sampleSize = bI, y.set = MA, y.setWith = FA, y.shuffle = EI, y.slice = _C, y.sortBy = OI, y.sortedUniq = $C, y.sortedUniqBy = CC, y.split = oN, y.spread = LI, y.tail = IC, y.take = AC, y.takeRight = NC, y.takeRightWhile = PC, y.takeWhile = RC, y.tap = qC, y.throttle = kI, y.thru = sl, y.toArray = sv, y.toPairs = fv, y.toPairsIn = dv, y.toPath = jN, y.toPlainObject = ov, y.transform = BA, y.unary = xI, y.union = LC, y.unionBy = kC, y.unionWith = xC, y.uniq = DC, y.uniqBy = MC, y.uniqWith = FC, y.unset = UA, y.unzip = Zu, y.unzipWith = Hm, y.update = jA, y.updateWith = GA, y.values = Ss, y.valuesIn = WA, y.without = BC, y.words = gv, y.wrap = DI, y.xor = UC, y.xorBy = jC, y.xorWith = GC, y.zip = WC, y.zipObject = HC, y.zipObjectDeep = KC, y.zipWith = VC, y.entries = fv, y.entriesIn = dv, y.extend = lv, y.extendWith = dl, uf(y, y), y.add = WN, y.attempt = mv, y.camelCase = qA, y.capitalize = hv, y.ceil = HN, y.clamp = HA, y.clone = FI, y.cloneDeep = UI, y.cloneDeepWith = jI, y.cloneWith = BI, y.conformsTo = GI, y.deburr = pv, y.defaultTo = TN, y.divide = KN, y.endsWith = YA, y.eq = rn, y.escape = zA, y.escapeRegExp = XA, y.every = nI, y.find = sI, y.findIndex = Bm, y.findKey = yA, y.findLast = aI, y.findLastIndex = Um, y.findLastKey = _A, y.floor = VN, y.forEach = Vm, y.forEachRight = qm, y.forIn = bA, y.forInRight = EA, y.forOwn = TA, y.forOwnRight = SA, y.get = sf, y.gt = WI, y.gte = HI, y.has = $A, y.hasIn = af, y.head = Gm, y.identity = br, y.includes = fI, y.indexOf = aC, y.inRange = KA, y.invoke = AA, y.isArguments = Li, y.isArray = je, y.isArrayBuffer = KI, y.isArrayLike = yr, y.isArrayLikeObject = Nt, y.isBoolean = VI, y.isBuffer = Xn, y.isDate = qI, y.isElement = YI, y.isEmpty = zI, y.isEqual = XI, y.isEqualWith = JI, y.isError = rf, y.isFinite = QI, y.isFunction = Pn, y.isInteger = tv, y.isLength = ul, y.isMap = rv, y.isMatch = ZI, y.isMatchWith = eA, y.isNaN = tA, y.isNative = rA, y.isNil = iA, y.isNull = nA, y.isNumber = nv, y.isObject = $t, y.isObjectLike = It, y.isPlainObject = $a, y.isRegExp = nf, y.isSafeInteger = sA, y.isSet = iv, y.isString = fl, y.isSymbol = Nr, y.isTypedArray = Ts, y.isUndefined = aA, y.isWeakMap = oA, y.isWeakSet = lA, y.join = fC, y.kebabCase = JA, y.last = Kr, y.lastIndexOf = dC, y.lowerCase = QA, y.lowerFirst = ZA, y.lt = cA, y.lte = uA, y.max = qN, y.maxBy = YN, y.mean = zN, y.meanBy = XN, y.min = JN, y.minBy = QN, y.stubArray = df, y.stubFalse = hf, y.stubObject = MN, y.stubString = FN, y.stubTrue = BN, y.multiply = ZN, y.nth = hC, y.noConflict = AN, y.noop = ff, y.now = ol, y.pad = eN, y.padEnd = tN, y.padStart = rN, y.parseInt = nN, y.random = VA, y.reduce = mI, y.reduceRight = vI, y.repeat = iN, y.replace = sN, y.result = DA, y.round = eP, y.runInContext = k, y.sample = _I, y.size = TI, y.snakeCase = aN, y.some = SI, y.sortedIndex = bC, y.sortedIndexBy = EC, y.sortedIndexOf = TC, y.sortedLastIndex = SC, y.sortedLastIndexBy = OC, y.sortedLastIndexOf = wC, y.startCase = lN, y.startsWith = cN, y.subtract = tP, y.sum = rP, y.sumBy = nP, y.template = uN, y.times = UN, y.toFinite = Rn, y.toInteger = We, y.toLength = av, y.toLower = fN, y.toNumber = Vr, y.toSafeInteger = fA, y.toString = lt, y.toUpper = dN, y.trim = hN, y.trimEnd = pN, y.trimStart = gN, y.truncate = mN, y.unescape = vN, y.uniqueId = GN, y.upperCase = yN, y.upperFirst = of, y.each = Vm, y.eachRight = qm, y.first = Gm, uf(y, function() {
                        var i = {};
                        return pn(y, function(a, c) {
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
                            return d.__filtered__ ? d.__takeCount__ = ir(c, d.__takeCount__) : d.__views__.push({
                                size: ir(c, Ge),
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
                        return this.filter(br)
                    }, Ye.prototype.find = function(i) {
                        return this.filter(i).head()
                    }, Ye.prototype.findLast = function(i) {
                        return this.reverse().find(i)
                    }, Ye.prototype.invokeMap = Ve(function(i, a) {
                        return typeof i == "function" ? new Ye(this) : this.map(function(c) {
                            return ba(c, i, a)
                        })
                    }), Ye.prototype.reject = function(i) {
                        return this.filter(cl(Pe(i)))
                    }, Ye.prototype.slice = function(i, a) {
                        i = We(i);
                        var c = this;
                        return c.__filtered__ && (i > 0 || a < 0) ? new Ye(c) : (i < 0 ? c = c.takeRight(-i) : i && (c = c.drop(i)), a !== r && (a = We(a), c = a < 0 ? c.dropRight(-a) : c.take(a - i)), c)
                    }, Ye.prototype.takeRightWhile = function(i) {
                        return this.reverse().takeWhile(i).reverse()
                    }, Ye.prototype.toArray = function() {
                        return this.take(Ge)
                    }, pn(Ye.prototype, function(i, a) {
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
                                    var Xe = v.apply(y, Wn([qe], N));
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
                                    func: sl,
                                    args: [ae],
                                    thisArg: r
                                }), new Gr(Le, me)
                            }
                            return Re && Ke ? i.apply(this, N) : (Le = this.thru(ae), Re ? d ? Le.value()[0] : Le.value() : Le)
                        })
                    }), Ur(["pop", "push", "shift", "sort", "splice", "unshift"], function(i) {
                        var a = Po[i],
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
                    }), pn(Ye.prototype, function(i, a) {
                        var c = y[a];
                        if (c) {
                            var d = c.name + "";
                            dt.call(vs, d) || (vs[d] = []), vs[d].push({
                                name: a,
                                func: c
                            })
                        }
                    }), vs[Qo(r, C).name] = [{
                        name: "wrapper",
                        func: r
                    }], Ye.prototype.clone = v1, Ye.prototype.reverse = y1, Ye.prototype.value = _1, y.prototype.at = YC, y.prototype.chain = zC, y.prototype.commit = XC, y.prototype.next = JC, y.prototype.plant = ZC, y.prototype.reverse = eI, y.prototype.toJSON = y.prototype.valueOf = y.prototype.value = tI, y.prototype.first = y.prototype.head, ha && (y.prototype[ha] = QC), y
                },
                ps = X0();
            wi ? ((wi.exports = ps)._ = ps, lu._ = ps) : zt._ = ps
        }).call(Lt)
    })(ec, ec.exports);
    const KW = et({
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
                this.onResizeWithContext = ec.exports.throttle(this.onResize.bind(this), 400), window.addEventListener("resize", this.onResizeWithContext), this.setupStage()
            },
            beforeUnmount() {
                window.removeEventListener("resize", this.onResizeWithContext), this.stage && this.stage.beforeDestroy()
            },
            methods: {
                setupStage() {
                    const e = this.$refs.stage,
                        t = {};
                    this.player.size && (t.width = this.player.size.width, t.height = this.player.size.height), this.player.thicknesses && (t.thickness = this.player.thicknesses[0]), this.player.colors && (t.color = this.player.colors[0]), this.player.maxPoints && (t.maxPoints = this.player.maxPoints);
                    const r = new S3(e, t);
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
        VW = {
            class: "draw"
        },
        qW = {
            ref: "content",
            class: "content"
        },
        YW = {
            class: "constrain"
        },
        zW = {
            key: 0
        };

    function XW(e, t, r, n, s, o) {
        const l = Dt("bb");
        return W(), z("div", VW, [H("div", qW, [H("div", YW, [e.player.prompt ? Ie((W(), z("div", zW, null, 512)), [
            [l, e.player.prompt]
        ]) : Se("", !0), H("div", {
            ref: "stage",
            class: "stage",
            style: lc(e.stageDimensions)
        }, null, 4), H("button", {
            onClick: t[0] || (t[0] = Zt((...u) => e.onSubmitClick && e.onSubmitClick(...u), ["prevent"]))
        }, rt(e.player.submitText || "SUBMIT"), 1)])], 512)])
    }
    const JW = ct(KW, [
            ["render", XW]
        ]),
        QW = et({
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
                            e.numberOfPlayer = this.player.joinedPlayers, e.locale = this.$ecastRoom.locale, Yl.gameStarted(this.$ecastRoom.appTag, e)
                        }
                    } catch (e) {
                        this.$handleEcastError(e)
                    }
                }
            }
        }),
        ZW = ["textContent"],
        eH = ["textContent"],
        tH = ["textContent"],
        rH = ["textContent"];

    function nH(e, t, r, n, s, o) {
        const l = Dt("t");
        return W(), z("div", {
            class: xe(["lobby-actions", {
                vip: e.player.hasControls
            }])
        }, [!e.messageLocation || e.messageLocation === "top" ? (W(), z("p", {
            key: 0,
            class: xe(e.localClasses.message),
            textContent: rt(e.joinedCountText)
        }, null, 10, ZW)) : Se("", !0), e.player.hasControls ? (W(), z(ze, {
            key: 1
        }, [e.player.status === "waitingForMore" ? (W(), z("p", {
            key: 0,
            class: xe(e.localClasses.status)
        }, rt(e.neededText), 3)) : Se("", !0), e.player.status === "canStart" ? (W(), z("button", {
            key: 1,
            class: xe(e.localClasses.action),
            onClick: t[0] || (t[0] = (...u) => e.onStartClick && e.onStartClick(...u)),
            textContent: rt(e.startText || e.$t("LOBBY.BUTTON_START"))
        }, null, 10, eH)) : Se("", !0), e.player.status === "countdown" ? (W(), z("button", {
            key: 2,
            class: xe(e.localClasses.action),
            onClick: t[1] || (t[1] = (...u) => e.onCancelClick && e.onCancelClick(...u)),
            textContent: rt(e.cancelText || e.$t("LOBBY.BUTTON_CANCEL"))
        }, null, 10, tH)) : Se("", !0)], 64)) : e.player.gamepadStart ? (W(), z(ze, {
            key: 2
        }, [e.player.status === "waitingForMore" ? (W(), z("p", {
            key: 0,
            class: xe(e.localClasses.status)
        }, rt(e.neededText), 3)) : Se("", !0), e.player.status === "canStart" ? Ie((W(), z("p", {
            key: 1,
            class: xe(e.localClasses.status)
        }, null, 2)), [
            [l, "LOBBY.WAITING_FOR_GAMEPAD"]
        ]) : Se("", !0), e.player.status === "countdown" ? Ie((W(), z("p", {
            key: 2,
            class: xe(e.localClasses.status)
        }, null, 2)), [
            [l, "LOBBY.GAME_STARTING"]
        ]) : Se("", !0)], 64)) : (W(), z(ze, {
            key: 3
        }, [e.player.status === "waitingForMore" ? (W(), z("p", {
            key: 0,
            class: xe(e.localClasses.status)
        }, rt(e.neededText), 3)) : Se("", !0), e.player.status === "canStart" ? (W(), z("p", {
            key: 1,
            class: xe(e.localClasses.status)
        }, rt(e.waitingForVIPText), 3)) : Se("", !0), e.player.status === "countdown" ? Ie((W(), z("p", {
            key: 2,
            class: xe(e.localClasses.status)
        }, null, 2)), [
            [l, "LOBBY.GAME_STARTING"]
        ]) : Se("", !0)], 64)), e.messageLocation === "bottom" ? (W(), z("p", {
            key: 4,
            class: xe(e.localClasses.message),
            textContent: rt(e.joinedCountText)
        }, null, 10, rH)) : Se("", !0)], 2)
    }
    const IS = ct(QW, [
            ["render", nH]
        ]),
        iH = et({
            components: {
                LobbyActions: IS
            },
            props: {
                player: Object
            }
        }),
        sH = {
            class: "lobby"
        },
        aH = {
            class: "constrain"
        };

    function oH(e, t, r, n, s, o) {
        const l = Xr("LobbyActions");
        return W(), z("div", sH, [H("div", aH, [wt(l, {
            player: e.player
        }, null, 8, ["player"])])])
    }
    const lH = ct(iH, [
            ["render", oH]
        ]),
        cH = et({
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
                            e.isSequal = !0, e.locale = this.$ecastRoom.locale, Yl.gameStarted(this.$ecastRoom.appTag, e)
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

    function uH(e, t, r, n, s, o) {
        const l = Dt("t");
        return e.player && e.player.status ? (W(), z("div", {
            key: 0,
            class: xe(["post-game-actions", {
                vip: e.player.hasControls
            }])
        }, [!e.messageLocation || e.messageLocation === "top" ? Ie((W(), z("p", {
            key: 0,
            class: xe(e.localClasses.message)
        }, null, 2)), [
            [l, "POST_GAME.PLAY_AGAIN"]
        ]) : Se("", !0), e.player.hasControls ? (W(), z(ze, {
            key: 1
        }, [e.player.status === "waiting" ? Ie((W(), z("button", {
            key: 0,
            class: xe(e.localClasses.action),
            onClick: t[0] || (t[0] = (...u) => e.onSamePlayersClick && e.onSamePlayersClick(...u))
        }, null, 2)), [
            [l, "POST_GAME.BUTTON_SAME_PLAYERS"]
        ]) : Se("", !0), e.player.status === "waiting" ? Ie((W(), z("button", {
            key: 1,
            class: xe(e.localClasses.action),
            onClick: t[1] || (t[1] = (...u) => e.onNewPlayersClick && e.onNewPlayersClick(...u))
        }, null, 2)), [
            [l, "POST_GAME.BUTTON_NEW_PLAYERS"]
        ]) : Se("", !0), e.player.status === "countdown" ? Ie((W(), z("button", {
            key: 2,
            class: xe(e.localClasses.action),
            onClick: t[2] || (t[2] = (...u) => e.onCancelClick && e.onCancelClick(...u))
        }, null, 2)), [
            [l, "LOBBY.BUTTON_CANCEL"]
        ]) : Se("", !0)], 64)) : e.player.gamepadStart ? Ie((W(), z("p", {
            key: 2,
            class: xe(e.localClasses.status)
        }, null, 2)), [
            [l, "LOBBY.WAITING_FOR_GAMEPAD"]
        ]) : (W(), z("p", {
            key: 3,
            class: xe(e.localClasses.status)
        }, rt(e.waitingForVIPText), 3)), e.messageLocation === "bottom" ? Ie((W(), z("p", {
            key: 4,
            class: xe(e.localClasses.message)
        }, null, 2)), [
            [l, "POST_GAME.PLAY_AGAIN"]
        ]) : Se("", !0)], 2)) : Se("", !0)
    }
    const AS = ct(cH, [
            ["render", uH]
        ]),
        fH = et({
            components: {
                PostGameActions: AS
            },
            props: {
                player: Object
            }
        }),
        dH = {
            class: "post-game"
        },
        hH = {
            class: "constrain"
        };

    function pH(e, t, r, n, s, o) {
        const l = Xr("PostGameActions");
        return W(), z("div", dH, [H("div", hH, [wt(l, {
            player: e.player
        }, null, 8, ["player"])])])
    }
    const gH = ct(fH, [
            ["render", pH]
        ]),
        mH = et({
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
                        if (e && e instanceof Sr.ObjectEntity) return !0
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
        vH = {
            class: "single-text-entry"
        },
        yH = {
            class: "constrain"
        },
        _H = {
            key: 0
        },
        bH = {
            key: 1,
            for: "input"
        },
        EH = ["value", "rows", "placeholder", "disabled"],
        TH = ["value", "placeholder", "disabled"];

    function SH(e, t, r, n, s, o) {
        const l = Dt("bb");
        return W(), z("div", vH, [H("div", yH, [e.player.prompt ? Ie((W(), z("p", _H, null, 512)), [
            [l, e.player.prompt]
        ]) : Se("", !0), e.player.label ? Ie((W(), z("label", bH, null, 512)), [
            [l, e.player.label]
        ]) : Se("", !0), e.player.isMultiline ? (W(), z("textarea", {
            key: 2,
            id: "input",
            value: e.value,
            rows: e.player.lines || 2,
            placeholder: e.player.placeholder,
            disabled: e.player.isDisabled,
            onInput: t[0] || (t[0] = (...u) => e.onValueInput && e.onValueInput(...u))
        }, null, 40, EH)) : (W(), z("input", {
            key: 3,
            id: "input",
            type: "text",
            value: e.value,
            placeholder: e.player.placeholder,
            disabled: e.player.isDisabled,
            onInput: t[1] || (t[1] = (...u) => e.onValueInput && e.onValueInput(...u))
        }, null, 40, TH)), Ie(H("button", {
            onClick: t[2] || (t[2] = Zt((...u) => e.onSubmitClick && e.onSubmitClick(...u), ["prevent"]))
        }, null, 512), [
            [l, e.player.submitText || "SUBMIT"]
        ])])])
    }
    const OH = ct(mH, [
            ["render", SH]
        ]),
        wH = et({
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
                        if (e && e instanceof Sr.ObjectEntity) return !0
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
        $H = {
            class: "multi-text-entry"
        },
        CH = {
            class: "constrain"
        },
        IH = {
            key: 0
        },
        AH = ["for"],
        NH = ["id", "value", "rows", "placeholder", "disabled", "onInput"],
        PH = ["id", "value", "placeholder", "disabled", "onInput"];

    function RH(e, t, r, n, s, o) {
        const l = Dt("bb");
        return W(), z("div", $H, [H("div", CH, [e.player.prompt ? Ie((W(), z("p", IH, null, 512)), [
            [l, e.player.prompt]
        ]) : Se("", !0), (W(!0), z(ze, null, Or(e.player.inputs, (u, f) => (W(), z(ze, null, [u.label ? Ie((W(), z("label", {
            key: `label-${u.key}`,
            for: `input-${f}`
        }, null, 8, AH)), [
            [l, u.label]
        ]) : Se("", !0), u.isMultiline ? (W(), z("textarea", {
            id: `input-${f}`,
            key: `input-${f}`,
            value: e.values[f],
            rows: u.lines || 2,
            placeholder: u.placeholder,
            disabled: u.isDisabled,
            onInput: h => e.onValueInput(h, f)
        }, null, 40, NH)) : (W(), z("input", {
            id: `input-${f}`,
            key: `input-${u.key}`,
            type: "text",
            value: e.values[f],
            placeholder: u.placeholder,
            disabled: u.isDisabled,
            onInput: h => e.onValueInput(h, f)
        }, null, 40, PH))], 64))), 256)), Ie(H("button", {
            onClick: t[0] || (t[0] = Zt((...u) => e.onSubmitClick && e.onSubmitClick(...u), ["prevent"]))
        }, null, 512), [
            [l, e.player.submitText || "SUBMIT"]
        ])])])
    }
    const LH = ct(wH, [
            ["render", RH]
        ]),
        kH = et({
            props: {
                player: Object
            }
        }),
        xH = {
            class: "waiting"
        },
        DH = {
            class: "constrain"
        },
        MH = {
            key: 0
        };

    function FH(e, t, r, n, s, o) {
        const l = Dt("bb");
        return W(), z("div", xH, [H("div", DH, [e.player.message ? Ie((W(), z("p", MH, null, 512)), [
            [l, e.player.message]
        ]) : Se("", !0)])])
    }
    const NS = ct(kH, [
            ["render", FH]
        ]),
        BH = et({
            components: {
                Choices: HL,
                Doodle: HW,
                Draw: JW,
                Lobby: lH,
                PostGame: gH,
                SingleTextEntry: OH,
                MultiTextEntry: LH,
                Waiting: NS
            },
            props: {
                applyStyling: {
                    type: Boolean,
                    default: !0
                },
                player: Object
            }
        });

    function UH(e, t, r, n, s, o) {
        return e.player ? (W(), fn(Ec(e.player.kind), {
            key: 0,
            player: e.player,
            class: xe({
                fallback: e.applyStyling
            })
        }, null, 8, ["player", "class"])) : Se("", !0)
    }
    const jH = ct(BH, [
            ["render", UH]
        ]),
        GH = et({
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
                Yl.galleryImpression(this.artifact.categoryId, "post_game")
            },
            methods: {
                onLinkClick() {
                    Yl.galleryClick(this.artifact.categoryId, "post_game"), no.setAsViewed(0)
                }
            }
        }),
        WH = ["href", "aria-label"];

    function HH(e, t, r, n, s, o) {
        return e.link ? (W(), z("a", {
            key: 0,
            class: xe([{
                "no-content": !e.hasProvidedContent
            }, "artifact-link"]),
            target: "_blank",
            href: e.link,
            "aria-label": e.$t("POST_GAME.GALLERY_LINK"),
            onClick: t[0] || (t[0] = (...l) => e.onLinkClick && e.onLinkClick(...l))
        }, [IR(e.$slots, "default")], 10, WH)) : Se("", !0)
    }
    const KH = ct(GH, [
        ["render", HH]
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
    var Fi, El, Ha = typeof Map == "function" ? new Map : (Fi = [], El = [], {
            has: function(e) {
                return Fi.indexOf(e) > -1
            },
            get: function(e) {
                return El[Fi.indexOf(e)]
            },
            set: function(e, t) {
                Fi.indexOf(e) === -1 && (Fi.push(e), El.push(t))
            },
            delete: function(e) {
                var t = Fi.indexOf(e);
                t > -1 && (Fi.splice(t, 1), El.splice(t, 1))
            }
        }),
        PS = function(e) {
            return new Event(e, {
                bubbles: !0
            })
        };
    try {
        new Event("test")
    } catch {
        PS = function(t) {
            var r = document.createEvent("Event");
            return r.initEvent(t, !0, !1), r
        }
    }

    function VH(e) {
        var t = Ha.get(e);
        t && t.destroy()
    }

    function qH(e) {
        var t = Ha.get(e);
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
                if (n && n.nodeName && n.nodeName === "TEXTAREA" && !Ha.has(n)) {
                    var s, o = null,
                        l = null,
                        u = null,
                        f = function() {
                            n.clientWidth !== l && E()
                        },
                        h = function($) {
                            window.removeEventListener("resize", f, !1), n.removeEventListener("input", E, !1), n.removeEventListener("keyup", E, !1), n.removeEventListener("autosize:destroy", h, !1), n.removeEventListener("autosize:update", E, !1), Object.keys($).forEach(function(L) {
                                n.style[L] = $[L]
                            }), Ha.delete(n)
                        }.bind(n, {
                            height: n.style.height,
                            resize: n.style.resize,
                            overflowY: n.style.overflowY,
                            overflowX: n.style.overflowX,
                            wordWrap: n.style.wordWrap
                        });
                    n.addEventListener("autosize:destroy", h, !1), "onpropertychange" in n && "oninput" in n && n.addEventListener("keyup", E, !1), window.addEventListener("resize", f, !1), n.addEventListener("input", E, !1), n.addEventListener("autosize:update", E, !1), n.style.overflowX = "hidden", n.style.wordWrap = "break-word", Ha.set(n, {
                        destroy: h,
                        update: E
                    }), (s = window.getComputedStyle(n, null)).resize === "vertical" ? n.style.resize = "none" : s.resize === "both" && (n.style.resize = "horizontal"), o = s.boxSizing === "content-box" ? -(parseFloat(s.paddingTop) + parseFloat(s.paddingBottom)) : parseFloat(s.borderTopWidth) + parseFloat(s.borderBottomWidth), isNaN(o) && (o = 0), E()
                }

                function g($) {
                    var L = n.style.width;
                    n.style.width = "0px", n.style.width = L, n.style.overflowY = $
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
                            L = document.documentElement && document.documentElement.scrollTop;
                        n.style.height = "", n.style.height = n.scrollHeight + o + "px", l = n.clientWidth, $.forEach(function(M) {
                            M.node.scrollTop = M.scrollTop
                        }), L && (document.documentElement.scrollTop = L)
                    }
                }

                function E() {
                    _();
                    var $ = Math.round(parseFloat(n.style.height)),
                        L = window.getComputedStyle(n, null),
                        M = L.boxSizing === "content-box" ? Math.round(parseFloat(L.height)) : n.offsetHeight;
                    if (M < $ ? L.overflowY === "hidden" && (g("scroll"), _(), M = L.boxSizing === "content-box" ? Math.round(parseFloat(window.getComputedStyle(n, null).height)) : n.offsetHeight) : L.overflowY !== "hidden" && (g("hidden"), _(), M = L.boxSizing === "content-box" ? Math.round(parseFloat(window.getComputedStyle(n, null).height)) : n.offsetHeight), u !== M) {
                        u = M;
                        var U = PS("autosize:resized");
                        try {
                            n.dispatchEvent(U)
                        } catch {}
                    }
                }
            }(r)
        }), e
    }).destroy = function(e) {
        return e && Array.prototype.forEach.call(e.length ? e : [e], VH), e
    }, xa.update = function(e) {
        return e && Array.prototype.forEach.call(e.length ? e : [e], qH), e
    });
    var Dd = xa,
        YH = {
            exports: {}
        },
        Tl = function(e) {
            return e && e.Math == Math && e
        },
        Mr = Tl(typeof globalThis == "object" && globalThis) || Tl(typeof window == "object" && window) || Tl(typeof self == "object" && self) || Tl(typeof Lt == "object" && Lt) || function() {
            return this
        }() || Function("return this")(),
        lp = {},
        Fr = function(e) {
            try {
                return !!e()
            } catch {
                return !0
            }
        },
        zH = Fr,
        _i = !zH(function() {
            return Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1] != 7
        }),
        XH = Fr,
        cp = !XH(function() {
            var e = function() {}.bind();
            return typeof e != "function" || e.hasOwnProperty("prototype")
        }),
        JH = cp,
        Sl = Function.prototype.call,
        bi = JH ? Sl.bind(Sl) : function() {
            return Sl.apply(Sl, arguments)
        },
        RS = {},
        LS = {}.propertyIsEnumerable,
        kS = Object.getOwnPropertyDescriptor,
        QH = kS && !LS.call({
            1: 2
        }, 1);
    RS.f = QH ? function(t) {
        var r = kS(this, t);
        return !!r && r.enumerable
    } : LS;
    var xS = function(e, t) {
            return {
                enumerable: !(e & 1),
                configurable: !(e & 2),
                writable: !(e & 4),
                value: t
            }
        },
        DS = cp,
        MS = Function.prototype,
        ZH = MS.bind,
        Md = MS.call,
        e8 = DS && ZH.bind(Md, Md),
        ur = DS ? function(e) {
            return e && e8(e)
        } : function(e) {
            return e && function() {
                return Md.apply(e, arguments)
            }
        },
        FS = ur,
        t8 = FS({}.toString),
        r8 = FS("".slice),
        Dc = function(e) {
            return r8(t8(e), 8, -1)
        },
        n8 = ur,
        i8 = Fr,
        s8 = Dc,
        Lf = Object,
        a8 = n8("".split),
        o8 = i8(function() {
            return !Lf("z").propertyIsEnumerable(0)
        }) ? function(e) {
            return s8(e) == "String" ? a8(e, "") : Lf(e)
        } : Lf,
        l8 = TypeError,
        vo = function(e) {
            if (e == null) throw l8("Can't call method on " + e);
            return e
        },
        c8 = o8,
        u8 = vo,
        Mc = function(e) {
            return c8(u8(e))
        },
        wr = function(e) {
            return typeof e == "function"
        },
        f8 = wr,
        la = function(e) {
            return typeof e == "object" ? e !== null : f8(e)
        },
        kf = Mr,
        d8 = wr,
        h8 = function(e) {
            return d8(e) ? e : void 0
        },
        Fc = function(e, t) {
            return arguments.length < 2 ? h8(kf[e]) : kf[e] && kf[e][t]
        },
        p8 = ur,
        BS = p8({}.isPrototypeOf),
        g8 = Fc,
        m8 = g8("navigator", "userAgent") || "",
        US = Mr,
        xf = m8,
        Hy = US.process,
        Ky = US.Deno,
        Vy = Hy && Hy.versions || Ky && Ky.version,
        qy = Vy && Vy.v8,
        sn, tc;
    qy && (sn = qy.split("."), tc = sn[0] > 0 && sn[0] < 4 ? 1 : +(sn[0] + sn[1]));
    !tc && xf && (sn = xf.match(/Edge\/(\d+)/), (!sn || sn[1] >= 74) && (sn = xf.match(/Chrome\/(\d+)/), sn && (tc = +sn[1])));
    var v8 = tc,
        Yy = v8,
        y8 = Fr,
        jS = !!Object.getOwnPropertySymbols && !y8(function() {
            var e = Symbol();
            return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && Yy && Yy < 41
        }),
        _8 = jS,
        GS = _8 && !Symbol.sham && typeof Symbol.iterator == "symbol",
        b8 = Fc,
        E8 = wr,
        T8 = BS,
        S8 = GS,
        O8 = Object,
        WS = S8 ? function(e) {
            return typeof e == "symbol"
        } : function(e) {
            var t = b8("Symbol");
            return E8(t) && T8(t.prototype, O8(e))
        },
        w8 = String,
        $8 = function(e) {
            try {
                return w8(e)
            } catch {
                return "Object"
            }
        },
        C8 = wr,
        I8 = $8,
        A8 = TypeError,
        N8 = function(e) {
            if (C8(e)) return e;
            throw A8(I8(e) + " is not a function")
        },
        P8 = N8,
        up = function(e, t) {
            var r = e[t];
            return r == null ? void 0 : P8(r)
        },
        Df = bi,
        Mf = wr,
        Ff = la,
        R8 = TypeError,
        L8 = function(e, t) {
            var r, n;
            if (t === "string" && Mf(r = e.toString) && !Ff(n = Df(r, e)) || Mf(r = e.valueOf) && !Ff(n = Df(r, e)) || t !== "string" && Mf(r = e.toString) && !Ff(n = Df(r, e))) return n;
            throw R8("Can't convert object to primitive value")
        },
        Bc = {
            exports: {}
        },
        zy = Mr,
        k8 = Object.defineProperty,
        fp = function(e, t) {
            try {
                k8(zy, e, {
                    value: t,
                    configurable: !0,
                    writable: !0
                })
            } catch {
                zy[e] = t
            }
            return t
        },
        x8 = Mr,
        D8 = fp,
        Xy = "__core-js_shared__",
        M8 = x8[Xy] || D8(Xy, {}),
        dp = M8,
        Jy = dp;
    (Bc.exports = function(e, t) {
        return Jy[e] || (Jy[e] = t !== void 0 ? t : {})
    })("versions", []).push({
        version: "3.23.4",
        mode: "global",
        copyright: "\xA9 2014-2022 Denis Pushkarev (zloirock.ru)",
        license: "https://github.com/zloirock/core-js/blob/v3.23.4/LICENSE",
        source: "https://github.com/zloirock/core-js"
    });
    var F8 = vo,
        B8 = Object,
        HS = function(e) {
            return B8(F8(e))
        },
        U8 = ur,
        j8 = HS,
        G8 = U8({}.hasOwnProperty),
        Ei = Object.hasOwn || function(t, r) {
            return G8(j8(t), r)
        },
        W8 = ur,
        H8 = 0,
        K8 = Math.random(),
        V8 = W8(1 .toString),
        KS = function(e) {
            return "Symbol(" + (e === void 0 ? "" : e) + ")_" + V8(++H8 + K8, 36)
        },
        q8 = Mr,
        Y8 = Bc.exports,
        Qy = Ei,
        z8 = KS,
        Zy = jS,
        VS = GS,
        ws = Y8("wks"),
        rs = q8.Symbol,
        e_ = rs && rs.for,
        X8 = VS ? rs : rs && rs.withoutSetter || z8,
        ls = function(e) {
            if (!Qy(ws, e) || !(Zy || typeof ws[e] == "string")) {
                var t = "Symbol." + e;
                Zy && Qy(rs, e) ? ws[e] = rs[e] : VS && e_ ? ws[e] = e_(t) : ws[e] = X8(t)
            }
            return ws[e]
        },
        J8 = bi,
        t_ = la,
        r_ = WS,
        Q8 = up,
        Z8 = L8,
        eK = ls,
        tK = TypeError,
        rK = eK("toPrimitive"),
        nK = function(e, t) {
            if (!t_(e) || r_(e)) return e;
            var r = Q8(e, rK),
                n;
            if (r) {
                if (t === void 0 && (t = "default"), n = J8(r, e, t), !t_(n) || r_(n)) return n;
                throw tK("Can't convert object to primitive value")
            }
            return t === void 0 && (t = "number"), Z8(e, t)
        },
        iK = nK,
        sK = WS,
        qS = function(e) {
            var t = iK(e, "string");
            return sK(t) ? t : t + ""
        },
        aK = Mr,
        n_ = la,
        Fd = aK.document,
        oK = n_(Fd) && n_(Fd.createElement),
        YS = function(e) {
            return oK ? Fd.createElement(e) : {}
        },
        lK = _i,
        cK = Fr,
        uK = YS,
        zS = !lK && !cK(function() {
            return Object.defineProperty(uK("div"), "a", {
                get: function() {
                    return 7
                }
            }).a != 7
        }),
        fK = _i,
        dK = bi,
        hK = RS,
        pK = xS,
        gK = Mc,
        mK = qS,
        vK = Ei,
        yK = zS,
        i_ = Object.getOwnPropertyDescriptor;
    lp.f = fK ? i_ : function(t, r) {
        if (t = gK(t), r = mK(r), yK) try {
            return i_(t, r)
        } catch {}
        if (vK(t, r)) return pK(!dK(hK.f, t, r), t[r])
    };
    var yo = {},
        _K = _i,
        bK = Fr,
        XS = _K && bK(function() {
            return Object.defineProperty(function() {}, "prototype", {
                value: 42,
                writable: !1
            }).prototype != 42
        }),
        EK = la,
        TK = String,
        SK = TypeError,
        cs = function(e) {
            if (EK(e)) return e;
            throw SK(TK(e) + " is not an object")
        },
        OK = _i,
        wK = zS,
        $K = XS,
        Ol = cs,
        s_ = qS,
        CK = TypeError,
        Bf = Object.defineProperty,
        IK = Object.getOwnPropertyDescriptor,
        Uf = "enumerable",
        jf = "configurable",
        Gf = "writable";
    yo.f = OK ? $K ? function(t, r, n) {
        if (Ol(t), r = s_(r), Ol(n), typeof t == "function" && r === "prototype" && "value" in n && Gf in n && !n[Gf]) {
            var s = IK(t, r);
            s && s[Gf] && (t[r] = n.value, n = {
                configurable: jf in n ? n[jf] : s[jf],
                enumerable: Uf in n ? n[Uf] : s[Uf],
                writable: !1
            })
        }
        return Bf(t, r, n)
    } : Bf : function(t, r, n) {
        if (Ol(t), r = s_(r), Ol(n), wK) try {
            return Bf(t, r, n)
        } catch {}
        if ("get" in n || "set" in n) throw CK("Accessors not supported");
        return "value" in n && (t[r] = n.value), t
    };
    var AK = _i,
        NK = yo,
        PK = xS,
        hp = AK ? function(e, t, r) {
            return NK.f(e, t, PK(1, r))
        } : function(e, t, r) {
            return e[t] = r, e
        },
        JS = {
            exports: {}
        },
        Bd = _i,
        RK = Ei,
        QS = Function.prototype,
        LK = Bd && Object.getOwnPropertyDescriptor,
        pp = RK(QS, "name"),
        kK = pp && function() {}.name === "something",
        xK = pp && (!Bd || Bd && LK(QS, "name").configurable),
        DK = {
            EXISTS: pp,
            PROPER: kK,
            CONFIGURABLE: xK
        },
        MK = ur,
        FK = wr,
        Ud = dp,
        BK = MK(Function.toString);
    FK(Ud.inspectSource) || (Ud.inspectSource = function(e) {
        return BK(e)
    });
    var ZS = Ud.inspectSource,
        UK = Mr,
        jK = wr,
        GK = ZS,
        a_ = UK.WeakMap,
        WK = jK(a_) && /native code/.test(GK(a_)),
        HK = Bc.exports,
        KK = KS,
        o_ = HK("keys"),
        eO = function(e) {
            return o_[e] || (o_[e] = KK(e))
        },
        gp = {},
        VK = WK,
        tO = Mr,
        Wf = ur,
        qK = la,
        YK = hp,
        Hf = Ei,
        Kf = dp,
        zK = eO,
        XK = gp,
        l_ = "Object already initialized",
        jd = tO.TypeError,
        JK = tO.WeakMap,
        rc, io, nc, QK = function(e) {
            return nc(e) ? io(e) : rc(e, {})
        },
        ZK = function(e) {
            return function(t) {
                var r;
                if (!qK(t) || (r = io(t)).type !== e) throw jd("Incompatible receiver, " + e + " required");
                return r
            }
        };
    if (VK || Kf.state) {
        var Bi = Kf.state || (Kf.state = new JK),
            eV = Wf(Bi.get),
            c_ = Wf(Bi.has),
            tV = Wf(Bi.set);
        rc = function(e, t) {
            if (c_(Bi, e)) throw new jd(l_);
            return t.facade = e, tV(Bi, e, t), t
        }, io = function(e) {
            return eV(Bi, e) || {}
        }, nc = function(e) {
            return c_(Bi, e)
        }
    } else {
        var $s = zK("state");
        XK[$s] = !0, rc = function(e, t) {
            if (Hf(e, $s)) throw new jd(l_);
            return t.facade = e, YK(e, $s, t), t
        }, io = function(e) {
            return Hf(e, $s) ? e[$s] : {}
        }, nc = function(e) {
            return Hf(e, $s)
        }
    }
    var rO = {
            set: rc,
            get: io,
            has: nc,
            enforce: QK,
            getterFor: ZK
        },
        rV = Fr,
        nV = wr,
        wl = Ei,
        Gd = _i,
        iV = DK.CONFIGURABLE,
        sV = ZS,
        nO = rO,
        aV = nO.enforce,
        oV = nO.get,
        Dl = Object.defineProperty,
        lV = Gd && !rV(function() {
            return Dl(function() {}, "length", {
                value: 8
            }).length !== 8
        }),
        cV = String(String).split("String"),
        uV = JS.exports = function(e, t, r) {
            String(t).slice(0, 7) === "Symbol(" && (t = "[" + String(t).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), r && r.getter && (t = "get " + t), r && r.setter && (t = "set " + t), (!wl(e, "name") || iV && e.name !== t) && (Gd ? Dl(e, "name", {
                value: t,
                configurable: !0
            }) : e.name = t), lV && r && wl(r, "arity") && e.length !== r.arity && Dl(e, "length", {
                value: r.arity
            });
            try {
                r && wl(r, "constructor") && r.constructor ? Gd && Dl(e, "prototype", {
                    writable: !1
                }) : e.prototype && (e.prototype = void 0)
            } catch {}
            var n = aV(e);
            return wl(n, "source") || (n.source = cV.join(typeof t == "string" ? t : "")), e
        };
    Function.prototype.toString = uV(function() {
        return nV(this) && oV(this).source || sV(this)
    }, "toString");
    var fV = wr,
        dV = yo,
        hV = JS.exports,
        pV = fp,
        iO = function(e, t, r, n) {
            n || (n = {});
            var s = n.enumerable,
                o = n.name !== void 0 ? n.name : t;
            if (fV(r) && hV(r, o, n), n.global) s ? e[t] = r : pV(t, r);
            else {
                try {
                    n.unsafe ? e[t] && (s = !0) : delete e[t]
                } catch {}
                s ? e[t] = r : dV.f(e, t, {
                    value: r,
                    enumerable: !1,
                    configurable: !n.nonConfigurable,
                    writable: !n.nonWritable
                })
            }
            return e
        },
        sO = {},
        gV = Math.ceil,
        mV = Math.floor,
        vV = Math.trunc || function(t) {
            var r = +t;
            return (r > 0 ? mV : gV)(r)
        },
        yV = vV,
        Uc = function(e) {
            var t = +e;
            return t !== t || t === 0 ? 0 : yV(t)
        },
        _V = Uc,
        bV = Math.max,
        EV = Math.min,
        TV = function(e, t) {
            var r = _V(e);
            return r < 0 ? bV(r + t, 0) : EV(r, t)
        },
        SV = Uc,
        OV = Math.min,
        aO = function(e) {
            return e > 0 ? OV(SV(e), 9007199254740991) : 0
        },
        wV = aO,
        $V = function(e) {
            return wV(e.length)
        },
        CV = Mc,
        IV = TV,
        AV = $V,
        u_ = function(e) {
            return function(t, r, n) {
                var s = CV(t),
                    o = AV(s),
                    l = IV(n, o),
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
        NV = {
            includes: u_(!0),
            indexOf: u_(!1)
        },
        PV = ur,
        Vf = Ei,
        RV = Mc,
        LV = NV.indexOf,
        kV = gp,
        f_ = PV([].push),
        oO = function(e, t) {
            var r = RV(e),
                n = 0,
                s = [],
                o;
            for (o in r) !Vf(kV, o) && Vf(r, o) && f_(s, o);
            for (; t.length > n;) Vf(r, o = t[n++]) && (~LV(s, o) || f_(s, o));
            return s
        },
        mp = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
        xV = oO,
        DV = mp,
        MV = DV.concat("length", "prototype");
    sO.f = Object.getOwnPropertyNames || function(t) {
        return xV(t, MV)
    };
    var lO = {};
    lO.f = Object.getOwnPropertySymbols;
    var FV = Fc,
        BV = ur,
        UV = sO,
        jV = lO,
        GV = cs,
        WV = BV([].concat),
        HV = FV("Reflect", "ownKeys") || function(t) {
            var r = UV.f(GV(t)),
                n = jV.f;
            return n ? WV(r, n(t)) : r
        },
        d_ = Ei,
        KV = HV,
        VV = lp,
        qV = yo,
        YV = function(e, t, r) {
            for (var n = KV(t), s = qV.f, o = VV.f, l = 0; l < n.length; l++) {
                var u = n[l];
                !d_(e, u) && !(r && d_(r, u)) && s(e, u, o(t, u))
            }
        },
        zV = Fr,
        XV = wr,
        JV = /#|\.prototype\./,
        _o = function(e, t) {
            var r = ZV[QV(e)];
            return r == t4 ? !0 : r == e4 ? !1 : XV(t) ? zV(t) : !!t
        },
        QV = _o.normalize = function(e) {
            return String(e).replace(JV, ".").toLowerCase()
        },
        ZV = _o.data = {},
        e4 = _o.NATIVE = "N",
        t4 = _o.POLYFILL = "P",
        r4 = _o,
        qf = Mr,
        n4 = lp.f,
        i4 = hp,
        s4 = iO,
        a4 = fp,
        o4 = YV,
        l4 = r4,
        cO = function(e, t) {
            var r = e.target,
                n = e.global,
                s = e.stat,
                o, l, u, f, h, g;
            if (n ? l = qf : s ? l = qf[r] || a4(r, {}) : l = (qf[r] || {}).prototype, l)
                for (u in t) {
                    if (h = t[u], e.dontCallGetSet ? (g = n4(l, u), f = g && g.value) : f = l[u], o = l4(n ? u : r + (s ? "." : "#") + u, e.forced), !o && f !== void 0) {
                        if (typeof h == typeof f) continue;
                        o4(h, f)
                    }(e.sham || f && f.sham) && i4(h, "sham", !0), s4(l, u, h, e)
                }
        },
        c4 = la,
        u4 = Dc,
        f4 = ls,
        d4 = f4("match"),
        h4 = function(e) {
            var t;
            return c4(e) && ((t = e[d4]) !== void 0 ? !!t : u4(e) == "RegExp")
        },
        p4 = ls,
        g4 = p4("toStringTag"),
        uO = {};
    uO[g4] = "z";
    var m4 = String(uO) === "[object z]",
        v4 = m4,
        y4 = wr,
        Ml = Dc,
        _4 = ls,
        b4 = _4("toStringTag"),
        E4 = Object,
        T4 = Ml(function() {
            return arguments
        }()) == "Arguments",
        S4 = function(e, t) {
            try {
                return e[t]
            } catch {}
        },
        O4 = v4 ? Ml : function(e) {
            var t, r, n;
            return e === void 0 ? "Undefined" : e === null ? "Null" : typeof(r = S4(t = E4(e), b4)) == "string" ? r : T4 ? Ml(t) : (n = Ml(t)) == "Object" && y4(t.callee) ? "Arguments" : n
        },
        w4 = O4,
        $4 = String,
        jc = function(e) {
            if (w4(e) === "Symbol") throw TypeError("Cannot convert a Symbol value to a string");
            return $4(e)
        },
        C4 = cs,
        fO = function() {
            var e = C4(this),
                t = "";
            return e.hasIndices && (t += "d"), e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.unicodeSets && (t += "v"), e.sticky && (t += "y"), t
        },
        I4 = bi,
        A4 = Ei,
        N4 = BS,
        P4 = fO,
        h_ = RegExp.prototype,
        R4 = function(e) {
            var t = e.flags;
            return t === void 0 && !("flags" in h_) && !A4(e, "flags") && N4(h_, e) ? I4(P4, e) : t
        },
        vp = ur,
        L4 = HS,
        k4 = Math.floor,
        Yf = vp("".charAt),
        x4 = vp("".replace),
        zf = vp("".slice),
        D4 = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
        M4 = /\$([$&'`]|\d{1,2})/g,
        dO = function(e, t, r, n, s, o) {
            var l = r + e.length,
                u = n.length,
                f = M4;
            return s !== void 0 && (s = L4(s), f = D4), x4(o, f, function(h, g) {
                var _;
                switch (Yf(g, 0)) {
                    case "$":
                        return "$";
                    case "&":
                        return e;
                    case "`":
                        return zf(t, 0, r);
                    case "'":
                        return zf(t, l);
                    case "<":
                        _ = s[zf(g, 1, -1)];
                        break;
                    default:
                        var E = +g;
                        if (E === 0) return h;
                        if (E > u) {
                            var $ = k4(E / 10);
                            return $ === 0 ? h : $ <= u ? n[$ - 1] === void 0 ? Yf(g, 1) : n[$ - 1] + Yf(g, 1) : h
                        }
                        _ = n[E - 1]
                }
                return _ === void 0 ? "" : _
            })
        },
        F4 = cO,
        B4 = bi,
        yp = ur,
        p_ = vo,
        U4 = wr,
        j4 = h4,
        Pa = jc,
        G4 = up,
        W4 = R4,
        H4 = dO,
        K4 = ls,
        V4 = K4("replace"),
        q4 = TypeError,
        hO = yp("".indexOf);
    yp("".replace);
    var g_ = yp("".slice),
        Y4 = Math.max,
        m_ = function(e, t, r) {
            return r > e.length ? -1 : t === "" ? r : hO(e, t, r)
        };
    F4({
        target: "String",
        proto: !0
    }, {
        replaceAll: function(t, r) {
            var n = p_(this),
                s, o, l, u, f, h, g, _, E, $ = 0,
                L = 0,
                M = "";
            if (t != null) {
                if (s = j4(t), s && (o = Pa(p_(W4(t))), !~hO(o, "g"))) throw q4("`.replaceAll` does not allow non-global regexes");
                if (l = G4(t, V4), l) return B4(l, t, n, r)
            }
            for (u = Pa(n), f = Pa(t), h = U4(r), h || (r = Pa(r)), g = f.length, _ = Y4(1, g), $ = m_(u, f, 0); $ !== -1;) E = h ? Pa(r(f, $, u)) : H4(f, u, $, [], void 0, r), M += g_(u, L, $) + E, L = $ + g, $ = m_(u, f, $ + _);
            return L < u.length && (M += g_(u, L)), M
        }
    });
    var _p = Fr,
        z4 = Mr,
        bp = z4.RegExp,
        Ep = _p(function() {
            var e = bp("a", "y");
            return e.lastIndex = 2, e.exec("abcd") != null
        }),
        X4 = Ep || _p(function() {
            return !bp("a", "y").sticky
        }),
        J4 = Ep || _p(function() {
            var e = bp("^r", "gy");
            return e.lastIndex = 2, e.exec("str") != null
        }),
        Q4 = {
            BROKEN_CARET: J4,
            MISSED_STICKY: X4,
            UNSUPPORTED_Y: Ep
        },
        pO = {},
        Z4 = oO,
        eq = mp,
        tq = Object.keys || function(t) {
            return Z4(t, eq)
        },
        rq = _i,
        nq = XS,
        iq = yo,
        sq = cs,
        aq = Mc,
        oq = tq;
    pO.f = rq && !nq ? Object.defineProperties : function(t, r) {
        sq(t);
        for (var n = aq(r), s = oq(r), o = s.length, l = 0, u; o > l;) iq.f(t, u = s[l++], n[u]);
        return t
    };
    var lq = Fc,
        cq = lq("document", "documentElement"),
        uq = cs,
        fq = pO,
        v_ = mp,
        dq = gp,
        hq = cq,
        pq = YS,
        gq = eO,
        y_ = ">",
        __ = "<",
        Wd = "prototype",
        Hd = "script",
        gO = gq("IE_PROTO"),
        Xf = function() {},
        mO = function(e) {
            return __ + Hd + y_ + e + __ + "/" + Hd + y_
        },
        b_ = function(e) {
            e.write(mO("")), e.close();
            var t = e.parentWindow.Object;
            return e = null, t
        },
        mq = function() {
            var e = pq("iframe"),
                t = "java" + Hd + ":",
                r;
            return e.style.display = "none", hq.appendChild(e), e.src = String(t), r = e.contentWindow.document, r.open(), r.write(mO("document.F=Object")), r.close(), r.F
        },
        $l, Fl = function() {
            try {
                $l = new ActiveXObject("htmlfile")
            } catch {}
            Fl = typeof document < "u" ? document.domain && $l ? b_($l) : mq() : b_($l);
            for (var e = v_.length; e--;) delete Fl[Wd][v_[e]];
            return Fl()
        };
    dq[gO] = !0;
    var vq = Object.create || function(t, r) {
            var n;
            return t !== null ? (Xf[Wd] = uq(t), n = new Xf, Xf[Wd] = null, n[gO] = t) : n = Fl(), r === void 0 ? n : fq.f(n, r)
        },
        yq = Fr,
        _q = Mr,
        bq = _q.RegExp,
        Eq = yq(function() {
            var e = bq(".", "s");
            return !(e.dotAll && e.exec(`
`) && e.flags === "s")
        }),
        Tq = Fr,
        Sq = Mr,
        Oq = Sq.RegExp,
        wq = Tq(function() {
            var e = Oq("(?<a>b)", "g");
            return e.exec("b").groups.a !== "b" || "b".replace(e, "$<a>c") !== "bc"
        }),
        Rs = bi,
        Gc = ur,
        $q = jc,
        Cq = fO,
        Iq = Q4,
        Aq = Bc.exports,
        Nq = vq,
        Pq = rO.get,
        Rq = Eq,
        Lq = wq,
        kq = Aq("native-string-replace", String.prototype.replace),
        ic = RegExp.prototype.exec,
        Kd = ic,
        xq = Gc("".charAt),
        Dq = Gc("".indexOf),
        Mq = Gc("".replace),
        Jf = Gc("".slice),
        Vd = function() {
            var e = /a/,
                t = /b*/g;
            return Rs(ic, e, "a"), Rs(ic, t, "a"), e.lastIndex !== 0 || t.lastIndex !== 0
        }(),
        vO = Iq.BROKEN_CARET,
        qd = /()??/.exec("")[1] !== void 0,
        Fq = Vd || qd || vO || Rq || Lq;
    Fq && (Kd = function(t) {
        var r = this,
            n = Pq(r),
            s = $q(t),
            o = n.raw,
            l, u, f, h, g, _, E;
        if (o) return o.lastIndex = r.lastIndex, l = Rs(Kd, o, s), r.lastIndex = o.lastIndex, l;
        var $ = n.groups,
            L = vO && r.sticky,
            M = Rs(Cq, r),
            U = r.source,
            C = 0,
            V = s;
        if (L && (M = Mq(M, "y", ""), Dq(M, "g") === -1 && (M += "g"), V = Jf(s, r.lastIndex), r.lastIndex > 0 && (!r.multiline || r.multiline && xq(s, r.lastIndex - 1) !== `
`) && (U = "(?: " + U + ")", V = " " + V, C++), u = new RegExp("^(?:" + U + ")", M)), qd && (u = new RegExp("^" + U + "$(?!\\s)", M)), Vd && (f = r.lastIndex), h = Rs(ic, L ? u : r, V), L ? h ? (h.input = Jf(h.input, C), h[0] = Jf(h[0], C), h.index = r.lastIndex, r.lastIndex += h[0].length) : r.lastIndex = 0 : Vd && h && (r.lastIndex = r.global ? h.index + h[0].length : f), qd && h && h.length > 1 && Rs(kq, h[0], u, function() {
                for (g = 1; g < arguments.length - 2; g++) arguments[g] === void 0 && (h[g] = void 0)
            }), h && $)
            for (h.groups = _ = Nq(null), g = 0; g < $.length; g++) E = $[g], _[E[0]] = h[E[1]];
        return h
    });
    var Tp = Kd,
        Bq = cO,
        E_ = Tp;
    Bq({
        target: "RegExp",
        proto: !0,
        forced: /./.exec !== E_
    }, {
        exec: E_
    });
    var Uq = cp,
        yO = Function.prototype,
        T_ = yO.apply,
        S_ = yO.call,
        jq = typeof Reflect == "object" && Reflect.apply || (Uq ? S_.bind(T_) : function() {
            return S_.apply(T_, arguments)
        }),
        O_ = ur,
        w_ = iO,
        Gq = Tp,
        $_ = Fr,
        _O = ls,
        Wq = hp,
        Hq = _O("species"),
        Qf = RegExp.prototype,
        Kq = function(e, t, r, n) {
            var s = _O(e),
                o = !$_(function() {
                    var h = {};
                    return h[s] = function() {
                        return 7
                    }, "" [e](h) != 7
                }),
                l = o && !$_(function() {
                    var h = !1,
                        g = /a/;
                    return e === "split" && (g = {}, g.constructor = {}, g.constructor[Hq] = function() {
                        return g
                    }, g.flags = "", g[s] = /./ [s]), g.exec = function() {
                        return h = !0, null
                    }, g[s](""), !h
                });
            if (!o || !l || r) {
                var u = O_(/./ [s]),
                    f = t(s, "" [e], function(h, g, _, E, $) {
                        var L = O_(h),
                            M = g.exec;
                        return M === Gq || M === Qf.exec ? o && !$ ? {
                            done: !0,
                            value: u(g, _, E)
                        } : {
                            done: !0,
                            value: L(_, g, E)
                        } : {
                            done: !1
                        }
                    });
                w_(String.prototype, e, f[0]), w_(Qf, s, f[1])
            }
            n && Wq(Qf[s], "sham", !0)
        },
        Sp = ur,
        Vq = Uc,
        qq = jc,
        Yq = vo,
        zq = Sp("".charAt),
        C_ = Sp("".charCodeAt),
        Xq = Sp("".slice),
        I_ = function(e) {
            return function(t, r) {
                var n = qq(Yq(t)),
                    s = Vq(r),
                    o = n.length,
                    l, u;
                return s < 0 || s >= o ? e ? "" : void 0 : (l = C_(n, s), l < 55296 || l > 56319 || s + 1 === o || (u = C_(n, s + 1)) < 56320 || u > 57343 ? e ? zq(n, s) : l : e ? Xq(n, s, s + 2) : (l - 55296 << 10) + (u - 56320) + 65536)
            }
        },
        Jq = {
            codeAt: I_(!1),
            charAt: I_(!0)
        },
        Qq = Jq.charAt,
        Zq = function(e, t, r) {
            return t + (r ? Qq(e, t).length : 1)
        },
        A_ = bi,
        eY = cs,
        tY = wr,
        rY = Dc,
        nY = Tp,
        iY = TypeError,
        sY = function(e, t) {
            var r = e.exec;
            if (tY(r)) {
                var n = A_(r, e, t);
                return n !== null && eY(n), n
            }
            if (rY(e) === "RegExp") return A_(nY, e, t);
            throw iY("RegExp#exec called on incompatible receiver")
        },
        aY = jq,
        N_ = bi,
        Wc = ur,
        oY = Kq,
        lY = Fr,
        cY = cs,
        uY = wr,
        fY = Uc,
        dY = aO,
        Cs = jc,
        hY = vo,
        pY = Zq,
        gY = up,
        mY = dO,
        vY = sY,
        yY = ls,
        Yd = yY("replace"),
        _Y = Math.max,
        bY = Math.min,
        EY = Wc([].concat),
        Zf = Wc([].push),
        P_ = Wc("".indexOf),
        R_ = Wc("".slice),
        TY = function(e) {
            return e === void 0 ? e : String(e)
        },
        SY = function() {
            return "a".replace(/./, "$0") === "$0"
        }(),
        L_ = function() {
            return /./ [Yd] ? /./ [Yd]("a", "$0") === "" : !1
        }(),
        OY = !lY(function() {
            var e = /./;
            return e.exec = function() {
                var t = [];
                return t.groups = {
                    a: "7"
                }, t
            }, "".replace(e, "$<a>") !== "7"
        });
    oY("replace", function(e, t, r) {
        var n = L_ ? "$" : "$0";
        return [function(o, l) {
            var u = hY(this),
                f = o == null ? void 0 : gY(o, Yd);
            return f ? N_(f, o, u, l) : N_(t, Cs(u), o, l)
        }, function(s, o) {
            var l = cY(this),
                u = Cs(s);
            if (typeof o == "string" && P_(o, n) === -1 && P_(o, "$<") === -1) {
                var f = r(t, l, u, o);
                if (f.done) return f.value
            }
            var h = uY(o);
            h || (o = Cs(o));
            var g = l.global;
            if (g) {
                var _ = l.unicode;
                l.lastIndex = 0
            }
            for (var E = [];;) {
                var $ = vY(l, u);
                if ($ === null || (Zf(E, $), !g)) break;
                var L = Cs($[0]);
                L === "" && (l.lastIndex = pY(u, dY(l.lastIndex), _))
            }
            for (var M = "", U = 0, C = 0; C < E.length; C++) {
                $ = E[C];
                for (var V = Cs($[0]), X = _Y(bY(fY($.index), u.length), 0), G = [], j = 1; j < $.length; j++) Zf(G, TY($[j]));
                var Q = $.groups;
                if (h) {
                    var oe = EY([V], G, X, u);
                    Q !== void 0 && Zf(oe, Q);
                    var le = Cs(aY(o, void 0, oe))
                } else le = mY(V, u, X, G, Q, o);
                X >= U && (M += R_(u, U, X) + le, U = X + V.length)
            }
            return M + R_(u, U)
        }]
    }, !OY || !SY || L_);
    var wY = Mr,
        $Y = ur,
        CY = function(e, t) {
            return $Y(wY[e].prototype[t])
        },
        IY = CY,
        AY = IY("String", "replaceAll"),
        NY = AY,
        PY = NY,
        RY = PY,
        LY = RY,
        kY = LY,
        xY = kY;
    (function(e) {
        e.exports = xY
    })(YH);
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
            this.autosize && Dd(this.$refs.textarea)
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
        Hc = {},
        bO = {},
        Kc = {},
        Op = {};
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
    })(Op);
    Object.defineProperty(Kc, "__esModule", {
        value: !0
    });
    Kc.Tokenizer = void 0;
    var ei = Op,
        DY = function() {
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
                    !h && !o ? f.convertToTextToken() : o ? f.type === ei.Token.Type.endTag && f.content === l ? (o = !1, s.push(e.createTextToken(u))) : (f.convertToTextToken(), u += f.content, g = !1) : h.noNesting && f.type === ei.Token.Type.startTag && (o = !0, l = f.content, u = ""), g && s.push(f)
                }), s
            }, e.prototype.getTokens = function(t) {
                for (var r = '\\[(/\\w*)\\]|\\[(\\w*)+(=(["])' + e.valueChars + "*\\4)?( (" + e.nameChars + '+)?=(["])(' + e.valueChars + "+)\\7)*\\]", n = new RegExp(r, "g"), s = [], o = n.exec(t), l = 0; o;) {
                    var u = o.index - l;
                    u > 0 && s.push(e.createTextToken(t.substr(l, u))), s.push(e.createTagToken(o)), l = n.lastIndex, o = n.exec(t)
                }
                var f = t.length - l;
                return f > 0 && s.push(e.createTextToken(t.substr(l, f))), s
            }, e.createTextToken = function(t) {
                return new ei.Token(ei.Token.Type.text, t)
            }, e.createTagToken = function(t) {
                if (!t[1]) {
                    for (var r = t[2], n = {}, s = new RegExp("(" + e.nameChars + '+)?=(["])(' + e.valueChars + "+)\\2", "g"), o = t[0].substr(1 + r.length, t[0].length - 2 - r.length), l = s.exec(o); l;) l[1] ? n[l[1]] = l[3] : n[r] = l[3], l = s.exec(o);
                    return new ei.Token(ei.Token.Type.startTag, r, n, t[0])
                }
                return new ei.Token(ei.Token.Type.endTag, t[1].substr(1, t[1].length - 1))
            }, e.nameChars = "[a-zA-Z0-9\\.\\-_:;/]", e.valueChars = "[a-zA-Z0-9\\.\\-_:;#/\\s]", e
        }();
    Kc.Tokenizer = DY;
    (function(e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.ParseTree = void 0;
        var t = Kc,
            r = Op,
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
    })(bO);
    var bo = {};
    Object.defineProperty(bo, "__esModule", {
        value: !0
    });
    bo.Tag = void 0;
    var MY = function() {
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
    bo.Tag = MY;
    Object.defineProperty(Hc, "__esModule", {
        value: !0
    });
    Hc.BBCodeParser = void 0;
    var k_ = bO,
        x_ = bo,
        FY = function() {
            function e(t, r) {
                this.options = r, this.escapeHTML = !1, this.tags = t, r && (this.escapeHTML = r.escapeHTML)
            }
            return Object.defineProperty(e, "defaultTags", {
                get: function() {
                    return {
                        b: x_.Tag.create("b"),
                        i: x_.Tag.create("i")
                    }
                },
                enumerable: !1,
                configurable: !0
            }), e.prototype.parse = function(t, r, n, s) {
                r === void 0 && (r = !1), n === void 0 && (n = !0), s === void 0 && (s = !0);
                var o = k_.ParseTree.buildTree(t, this.tags);
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
                    if (f.type === k_.ParseTree.Type.text) {
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
    Hc.BBCodeParser = FY;
    (function(e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.Tag = e.BBCodeParser = void 0;
        var t = Hc;
        Object.defineProperty(e, "BBCodeParser", {
            enumerable: !0,
            get: function() {
                return t.BBCodeParser
            }
        });
        var r = bo;
        Object.defineProperty(e, "Tag", {
            enumerable: !0,
            get: function() {
                return r.Tag
            }
        })
    })(Gi);
    const BY = {
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
    var EO = {
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
    })(EO);
    const UY = EO.exports,
        jY = et({
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
        jn = e => (co("data-v-220ec4c0"), e = e(), uo(), e),
        GY = {
            key: 0,
            ref: "debugNav",
            class: "debug-nav",
            tabindex: "0"
        },
        WY = {
            key: 0,
            class: "power-nav"
        },
        HY = jn(() => H("p", null, "MARKERS", -1)),
        KY = ["onClick"],
        VY = hi("KILL"),
        qY = jn(() => H("br", null, null, -1)),
        YY = hi("ROOM"),
        zY = [VY, qY, YY],
        XY = jn(() => H("p", {
            class: "title blurred"
        }, "DEBUG", -1)),
        JY = {
            key: 1,
            class: "title focused"
        },
        QY = {
            key: 2,
            class: "title focused"
        },
        ZY = jn(() => H("svg", {
            viewBox: "0 0 20 10"
        }, [H("polygon", {
            points: "0,10 10,0 20,10"
        })], -1)),
        e6 = jn(() => H("div", {
            class: "visually-hidden"
        }, "Open debug menu", -1)),
        t6 = [ZY, e6],
        r6 = jn(() => H("svg", {
            viewBox: "0 0 60 50"
        }, [H("polygon", {
            class: "outline",
            points: "40,35.6 20,25 40,14.4"
        }), H("polygon", {
            points: "40,35.6 20,25 40,14.4"
        })], -1)),
        n6 = jn(() => H("div", {
            class: "visually-hidden"
        }, "Previous", -1)),
        i6 = [r6, n6],
        s6 = jn(() => H("svg", {
            viewBox: "0 0 60 50"
        }, [H("polygon", {
            class: "outline",
            points: "40,35.6 20,25 40,14.4"
        }), H("polygon", {
            points: "40,35.6 20,25 40,14.4"
        })], -1)),
        a6 = jn(() => H("div", {
            class: "visually-hidden"
        }, "Next", -1)),
        o6 = [s6, a6];

    function l6(e, t, r, n, s, o) {
        return e.replayer ? (W(), z("div", GY, [e.showPowerNav ? (W(), z("div", WY, [H("button", {
            class: "close",
            onClick: t[0] || (t[0] = (...l) => e.onClosePowerNavClick && e.onClosePowerNavClick(...l))
        }, "X"), HY, H("ul", null, [(W(!0), z(ze, null, Or(e.replayer.markerMap, (l, u) => (W(), z("li", {
            key: u,
            class: xe({
                active: u === e.replayer.currentMarkerItemIndex
            }),
            onClick: f => e.onMarkerClick(u)
        }, rt(l[1].marker), 11, KY))), 128))]), H("button", {
            class: "option",
            onClick: t[1] || (t[1] = (...l) => e.onKillClick && e.onKillClick(...l))
        }, zY), H("button", {
            class: "option",
            onClick: t[2] || (t[2] = (...l) => e.onDisconnectClick && e.onDisconnectClick(...l))
        }, "DISCONNECT")])) : Se("", !0), XY, e.replayer.markerMap.length ? (W(), z("p", QY, rt(e.replayer.currentMarkerItemIndex) + " : " + rt(e.replayer.currentMarkerItem[1].marker) + " (" + rt(e.replayer.currentEntityItemIndex) + ") ", 1)) : (W(), z("p", JY, "Item #" + rt(e.replayer.currentEntityItemIndex), 1)), e.showPowerNav ? Se("", !0) : (W(), z("button", {
            key: 3,
            class: "open-power-nav",
            onClick: t[3] || (t[3] = (...l) => e.onOpenPowerNavClick && e.onOpenPowerNavClick(...l))
        }, t6)), H("button", {
            class: "direction previous",
            onClick: t[4] || (t[4] = (...l) => e.onPreviousClick && e.onPreviousClick(...l))
        }, i6), H("button", {
            class: "direction next",
            onClick: t[5] || (t[5] = (...l) => e.onNextClick && e.onNextClick(...l))
        }, o6)], 512)) : Se("", !0)
    }
    const c6 = ct(jY, [
        ["render", l6],
        ["__scopeId", "data-v-220ec4c0"]
    ]);

    function u6(e, t) {
        for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1;);
        return e
    }
    var f6 = u6,
        d6 = oT,
        h6 = d6(Object.keys, Object),
        p6 = h6,
        g6 = jh,
        m6 = p6,
        v6 = Object.prototype,
        y6 = v6.hasOwnProperty;

    function _6(e) {
        if (!g6(e)) return m6(e);
        var t = [];
        for (var r in Object(e)) y6.call(e, r) && r != "constructor" && t.push(r);
        return t
    }
    var b6 = _6,
        E6 = gT,
        T6 = b6,
        S6 = Rc;

    function O6(e) {
        return S6(e) ? E6(e) : T6(e)
    }
    var Vc = O6,
        w6 = ho,
        $6 = Vc;

    function C6(e, t) {
        return e && w6(t, $6(t), e)
    }
    var I6 = C6,
        A6 = ho,
        N6 = po;

    function P6(e, t) {
        return e && A6(t, N6(t), e)
    }
    var R6 = P6;

    function L6(e, t) {
        for (var r = -1, n = e == null ? 0 : e.length, s = 0, o = []; ++r < n;) {
            var l = e[r];
            t(l, r, e) && (o[s++] = l)
        }
        return o
    }
    var k6 = L6;

    function x6() {
        return []
    }
    var TO = x6,
        D6 = k6,
        M6 = TO,
        F6 = Object.prototype,
        B6 = F6.propertyIsEnumerable,
        D_ = Object.getOwnPropertySymbols,
        U6 = D_ ? function(e) {
            return e == null ? [] : (e = Object(e), D6(D_(e), function(t) {
                return B6.call(e, t)
            }))
        } : M6,
        wp = U6,
        j6 = ho,
        G6 = wp;

    function W6(e, t) {
        return j6(e, G6(e), t)
    }
    var H6 = W6;

    function K6(e, t) {
        for (var r = -1, n = t.length, s = e.length; ++r < n;) e[s + r] = t[r];
        return e
    }
    var SO = K6,
        V6 = SO,
        q6 = Uh,
        Y6 = wp,
        z6 = TO,
        X6 = Object.getOwnPropertySymbols,
        J6 = X6 ? function(e) {
            for (var t = []; e;) V6(t, Y6(e)), e = q6(e);
            return t
        } : z6,
        OO = J6,
        Q6 = ho,
        Z6 = OO;

    function e5(e, t) {
        return Q6(e, Z6(e), t)
    }
    var t5 = e5,
        r5 = SO,
        n5 = vi;

    function i5(e, t, r) {
        var n = t(e);
        return n5(e) ? n : r5(n, r(e))
    }
    var wO = i5,
        s5 = wO,
        a5 = wp,
        o5 = Vc;

    function l5(e) {
        return s5(e, o5, a5)
    }
    var c5 = l5,
        u5 = wO,
        f5 = OO,
        d5 = po;

    function h5(e) {
        return u5(e, d5, f5)
    }
    var p5 = h5,
        g5 = os,
        m5 = dn,
        v5 = g5(m5, "DataView"),
        y5 = v5,
        _5 = os,
        b5 = dn,
        E5 = _5(b5, "Promise"),
        T5 = E5,
        S5 = os,
        O5 = dn,
        w5 = S5(O5, "Set"),
        $5 = w5,
        C5 = os,
        I5 = dn,
        A5 = C5(I5, "WeakMap"),
        N5 = A5,
        zd = y5,
        Xd = Mh,
        Jd = T5,
        Qd = $5,
        Zd = N5,
        $O = na,
        ca = eT,
        M_ = "[object Map]",
        P5 = "[object Object]",
        F_ = "[object Promise]",
        B_ = "[object Set]",
        U_ = "[object WeakMap]",
        j_ = "[object DataView]",
        R5 = ca(zd),
        L5 = ca(Xd),
        k5 = ca(Jd),
        x5 = ca(Qd),
        D5 = ca(Zd),
        Wi = $O;
    (zd && Wi(new zd(new ArrayBuffer(1))) != j_ || Xd && Wi(new Xd) != M_ || Jd && Wi(Jd.resolve()) != F_ || Qd && Wi(new Qd) != B_ || Zd && Wi(new Zd) != U_) && (Wi = function(e) {
        var t = $O(e),
            r = t == P5 ? e.constructor : void 0,
            n = r ? ca(r) : "";
        if (n) switch (n) {
            case R5:
                return j_;
            case L5:
                return M_;
            case k5:
                return F_;
            case x5:
                return B_;
            case D5:
                return U_
        }
        return t
    });
    var $p = Wi,
        M5 = Object.prototype,
        F5 = M5.hasOwnProperty;

    function B5(e) {
        var t = e.length,
            r = new e.constructor(t);
        return t && typeof e[0] == "string" && F5.call(e, "index") && (r.index = e.index, r.input = e.input), r
    }
    var U5 = B5,
        j5 = Bh;

    function G5(e, t) {
        var r = t ? j5(e.buffer) : e.buffer;
        return new e.constructor(r, e.byteOffset, e.byteLength)
    }
    var W5 = G5,
        H5 = /\w*$/;

    function K5(e) {
        var t = new e.constructor(e.source, H5.exec(e));
        return t.lastIndex = e.lastIndex, t
    }
    var V5 = K5,
        G_ = Ac,
        W_ = G_ ? G_.prototype : void 0,
        H_ = W_ ? W_.valueOf : void 0;

    function q5(e) {
        return H_ ? Object(H_.call(e)) : {}
    }
    var Y5 = q5,
        z5 = Bh,
        X5 = W5,
        J5 = V5,
        Q5 = Y5,
        Z5 = sT,
        ez = "[object Boolean]",
        tz = "[object Date]",
        rz = "[object Map]",
        nz = "[object Number]",
        iz = "[object RegExp]",
        sz = "[object Set]",
        az = "[object String]",
        oz = "[object Symbol]",
        lz = "[object ArrayBuffer]",
        cz = "[object DataView]",
        uz = "[object Float32Array]",
        fz = "[object Float64Array]",
        dz = "[object Int8Array]",
        hz = "[object Int16Array]",
        pz = "[object Int32Array]",
        gz = "[object Uint8Array]",
        mz = "[object Uint8ClampedArray]",
        vz = "[object Uint16Array]",
        yz = "[object Uint32Array]";

    function _z(e, t, r) {
        var n = e.constructor;
        switch (t) {
            case lz:
                return z5(e);
            case ez:
            case tz:
                return new n(+e);
            case cz:
                return X5(e, r);
            case uz:
            case fz:
            case dz:
            case hz:
            case pz:
            case gz:
            case mz:
            case vz:
            case yz:
                return Z5(e, r);
            case rz:
                return new n;
            case nz:
            case az:
                return new n(e);
            case iz:
                return J5(e);
            case sz:
                return new n;
            case oz:
                return Q5(e)
        }
    }
    var bz = _z,
        Ez = $p,
        Tz = mi,
        Sz = "[object Map]";

    function Oz(e) {
        return Tz(e) && Ez(e) == Sz
    }
    var wz = Oz,
        $z = wz,
        Cz = Gh,
        K_ = ro.exports,
        V_ = K_ && K_.isMap,
        Iz = V_ ? Cz(V_) : $z,
        Az = Iz,
        Nz = $p,
        Pz = mi,
        Rz = "[object Set]";

    function Lz(e) {
        return Pz(e) && Nz(e) == Rz
    }
    var kz = Lz,
        xz = kz,
        Dz = Gh,
        q_ = ro.exports,
        Y_ = q_ && q_.isSet,
        Mz = Y_ ? Dz(Y_) : xz,
        Fz = Mz,
        Bz = rT,
        Uz = f6,
        jz = Wh,
        Gz = I6,
        Wz = R6,
        Hz = zl.exports,
        Kz = aT,
        Vz = H6,
        qz = t5,
        Yz = c5,
        zz = p5,
        Xz = $p,
        Jz = U5,
        Qz = bz,
        Zz = lT,
        e9 = vi,
        t9 = to.exports,
        r9 = Az,
        n9 = hn,
        i9 = Fz,
        s9 = Vc,
        a9 = po,
        o9 = 1,
        l9 = 2,
        c9 = 4,
        CO = "[object Arguments]",
        u9 = "[object Array]",
        f9 = "[object Boolean]",
        d9 = "[object Date]",
        h9 = "[object Error]",
        IO = "[object Function]",
        p9 = "[object GeneratorFunction]",
        g9 = "[object Map]",
        m9 = "[object Number]",
        AO = "[object Object]",
        v9 = "[object RegExp]",
        y9 = "[object Set]",
        _9 = "[object String]",
        b9 = "[object Symbol]",
        E9 = "[object WeakMap]",
        T9 = "[object ArrayBuffer]",
        S9 = "[object DataView]",
        O9 = "[object Float32Array]",
        w9 = "[object Float64Array]",
        $9 = "[object Int8Array]",
        C9 = "[object Int16Array]",
        I9 = "[object Int32Array]",
        A9 = "[object Uint8Array]",
        N9 = "[object Uint8ClampedArray]",
        P9 = "[object Uint16Array]",
        R9 = "[object Uint32Array]",
        vt = {};
    vt[CO] = vt[u9] = vt[T9] = vt[S9] = vt[f9] = vt[d9] = vt[O9] = vt[w9] = vt[$9] = vt[C9] = vt[I9] = vt[g9] = vt[m9] = vt[AO] = vt[v9] = vt[y9] = vt[_9] = vt[b9] = vt[A9] = vt[N9] = vt[P9] = vt[R9] = !0;
    vt[h9] = vt[IO] = vt[E9] = !1;

    function Bl(e, t, r, n, s, o) {
        var l, u = t & o9,
            f = t & l9,
            h = t & c9;
        if (r && (l = s ? r(e, n, s, o) : r(e)), l !== void 0) return l;
        if (!n9(e)) return e;
        var g = e9(e);
        if (g) {
            if (l = Jz(e), !u) return Kz(e, l)
        } else {
            var _ = Xz(e),
                E = _ == IO || _ == p9;
            if (t9(e)) return Hz(e, u);
            if (_ == AO || _ == CO || E && !s) {
                if (l = f || E ? {} : Zz(e), !u) return f ? qz(e, Wz(l, e)) : Vz(e, Gz(l, e))
            } else {
                if (!vt[_]) return s ? e : {};
                l = Qz(e, _, u)
            }
        }
        o || (o = new Bz);
        var $ = o.get(e);
        if ($) return $;
        o.set(e, l), i9(e) ? e.forEach(function(U) {
            l.add(Bl(U, t, r, U, e, o))
        }) : r9(e) && e.forEach(function(U, C) {
            l.set(C, Bl(U, t, r, C, e, o))
        });
        var L = h ? f ? zz : Yz : f ? a9 : s9,
            M = g ? void 0 : L(e);
        return Uz(M || e, function(U, C) {
            M && (C = U, U = e[C]), jz(l, C, Bl(U, t, r, C, e, o))
        }), l
    }
    var L9 = Bl,
        k9 = L9,
        x9 = 1,
        D9 = 4;

    function M9(e) {
        return k9(e, x9 | D9)
    }
    var NO = M9;
    const F9 = et({
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
                !e || (this.values = NO(this.$ecastValues), this.content = (n = Wy.getPromptGuess(this.values, e)) != null ? n : null)
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
                    !this.$debugRecorder || (this.screen === "debug" && (await this.$debugRecorder.send(this.message), this.$emit("resolve")), this.screen === "feedback" && (await Wy.send({
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
        PO = "main/pp9/antique-freak/assets/ad9172fc.png",
        RO = "main/pp9/antique-freak/assets/dc131b16.png",
        B9 = "main/pp9/antique-freak/assets/38715b18.png",
        U9 = "main/pp9/antique-freak/assets/b0d7c822.png",
        j9 = "main/pp9/antique-freak/assets/06150f24.png",
        Zr = e => (co("data-v-2c53389f"), e = e(), uo(), e),
        G9 = {
            class: "jbg"
        },
        W9 = {
            key: 0,
            class: "options"
        },
        H9 = Zr(() => H("img", {
            src: PO,
            alt: "Leave Feedback"
        }, null, -1)),
        K9 = Zr(() => H("span", null, [hi("LEAVE"), H("br"), hi("FEEDBACK")], -1)),
        V9 = [H9, K9],
        q9 = Zr(() => H("img", {
            src: RO,
            alt: "Send Debug"
        }, null, -1)),
        Y9 = Zr(() => H("span", null, [hi("SEND A"), H("br"), hi("DEBUG")], -1)),
        z9 = [q9, Y9],
        X9 = {
            key: 1,
            class: "feedback"
        },
        J9 = Zr(() => H("img", {
            class: "image",
            src: PO,
            alt: "Feedback"
        }, null, -1)),
        Q9 = Zr(() => H("h3", {
            class: "text"
        }, "Send Feedback", -1)),
        Z9 = Zr(() => H("p", {
            class: "cta"
        }, "CHOOSE A VIBE", -1)),
        eX = {
            class: "buttons"
        },
        tX = Zr(() => H("img", {
            src: B9,
            alt: "good"
        }, null, -1)),
        rX = [tX],
        nX = Zr(() => H("img", {
            src: U9,
            alt: "good"
        }, null, -1)),
        iX = [nX],
        sX = Zr(() => H("img", {
            src: j9,
            alt: "bad"
        }, null, -1)),
        aX = [sX],
        oX = {
            class: "actions"
        },
        lX = {
            key: 0,
            class: "content-guess"
        },
        cX = hi("Feedback is about: "),
        uX = {
            key: 2,
            class: "debug"
        },
        fX = Zr(() => H("img", {
            class: "image",
            src: RO,
            alt: "Debug"
        }, null, -1)),
        dX = Zr(() => H("h3", {
            class: "text"
        }, "What is Happening?", -1)),
        hX = {
            class: "actions"
        };

    function pX(e, t, r, n, s, o) {
        return W(), z("div", G9, [e.screen === "options" ? (W(), z("div", W9, [H("button", {
            class: "feedback-button",
            onClick: t[0] || (t[0] = (...l) => e.onFeedbackClick && e.onFeedbackClick(...l))
        }, V9), H("button", {
            onClick: t[1] || (t[1] = (...l) => e.onDebugClick && e.onDebugClick(...l))
        }, z9)])) : e.screen === "feedback" ? (W(), z("div", X9, [J9, Q9, H("div", {
            class: xe(["vibes", {
                "has-selected": e.vibe
            }])
        }, [Z9, H("div", eX, [H("button", {
            class: xe({
                selected: e.vibe === "good"
            }),
            onClick: t[2] || (t[2] = l => e.onVibeClick("good"))
        }, rX, 2), H("button", {
            class: xe({
                selected: e.vibe === "meh"
            }),
            onClick: t[3] || (t[3] = l => e.onVibeClick("meh"))
        }, iX, 2), H("button", {
            class: xe({
                selected: e.vibe === "bad"
            }),
            onClick: t[4] || (t[4] = l => e.onVibeClick("bad"))
        }, aX, 2)])], 2), H("div", oX, [e.content ? (W(), z("div", lX, [Ie(H("input", {
            "onUpdate:modelValue": t[5] || (t[5] = l => e.isContent = l),
            type: "checkbox"
        }, null, 512), [
            [AL, e.isContent]
        ]), H("span", null, [cX, H("em", null, rt(e.content), 1)])])) : Se("", !0), Ie(H("textarea", {
            "onUpdate:modelValue": t[6] || (t[6] = l => e.message = l),
            rows: "3",
            placeholder: "(optional) more details",
            "aria-label": "Details"
        }, null, 512), [
            [Od, e.message]
        ]), H("button", {
            onClick: t[7] || (t[7] = Zt((...l) => e.onSubmitClick && e.onSubmitClick(...l), ["prevent"]))
        }, rt(e.$t("ACTION.SUBMIT")), 1)])])) : e.screen === "debug" ? (W(), z("div", uX, [fX, dX, H("div", hX, [Ie(H("textarea", {
            "onUpdate:modelValue": t[8] || (t[8] = l => e.message = l),
            rows: "3",
            placeholder: "Enter details",
            "aria-label": "Details"
        }, null, 512), [
            [Od, e.message]
        ]), H("button", {
            onClick: t[9] || (t[9] = Zt((...l) => e.onSubmitClick && e.onSubmitClick(...l), ["prevent"]))
        }, rt(e.$t("ACTION.OK")), 1)])])) : Se("", !0)])
    }
    const LO = ct(F9, [
        ["render", pX],
        ["__scopeId", "data-v-2c53389f"]
    ]);
    et({
        methods: {
            onFeedbackClick() {
                this.$showModal(LO)
            }
        }
    });
    const gX = {
        install: (e, t) => {
            if (!e.config.globalProperties.$debugRecorder && !e.config.globalProperties.$debugReplayer) {
                if (t.replayer) {
                    e.config.globalProperties.$debugReplayer = t.replayer, e.component("Debug", c6);
                    return
                }
                if (e.config.globalProperties.$debugRecorder = new _3(t.client, t.room), !e.config.globalProperties.$showModal) {
                    console.warn("[debugPlugin] Sending debug and feedback messages is disabled be the modalPlugin is not used.");
                    return
                }
                new UY(() => {
                    e.config.globalProperties.$showModal(LO)
                })
            }
        }
    };
    var mX = dn,
        vX = function() {
            return mX.Date.now()
        },
        yX = vX,
        _X = /\s/;

    function bX(e) {
        for (var t = e.length; t-- && _X.test(e.charAt(t)););
        return t
    }
    var EX = bX,
        TX = EX,
        SX = /^\s+/;

    function OX(e) {
        return e && e.slice(0, TX(e) + 1).replace(SX, "")
    }
    var wX = OX,
        $X = na,
        CX = mi,
        IX = "[object Symbol]";

    function AX(e) {
        return typeof e == "symbol" || CX(e) && $X(e) == IX
    }
    var qc = AX,
        NX = wX,
        z_ = hn,
        PX = qc,
        X_ = 0 / 0,
        RX = /^[-+]0x[0-9a-f]+$/i,
        LX = /^0b[01]+$/i,
        kX = /^0o[0-7]+$/i,
        xX = parseInt;

    function DX(e) {
        if (typeof e == "number") return e;
        if (PX(e)) return X_;
        if (z_(e)) {
            var t = typeof e.valueOf == "function" ? e.valueOf() : e;
            e = z_(t) ? t + "" : t
        }
        if (typeof e != "string") return e === 0 ? e : +e;
        e = NX(e);
        var r = LX.test(e);
        return r || kX.test(e) ? xX(e.slice(2), r ? 2 : 8) : RX.test(e) ? X_ : +e
    }
    var MX = DX,
        FX = hn,
        ed = yX,
        J_ = MX,
        BX = "Expected a function",
        UX = Math.max,
        jX = Math.min;

    function GX(e, t, r) {
        var n, s, o, l, u, f, h = 0,
            g = !1,
            _ = !1,
            E = !0;
        if (typeof e != "function") throw new TypeError(BX);
        t = J_(t) || 0, FX(r) && (g = !!r.leading, _ = "maxWait" in r, o = _ ? UX(J_(r.maxWait) || 0, t) : o, E = "trailing" in r ? !!r.trailing : E);

        function $(Q) {
            var oe = n,
                le = s;
            return n = s = void 0, h = Q, l = e.apply(le, oe), l
        }

        function L(Q) {
            return h = Q, u = setTimeout(C, t), g ? $(Q) : l
        }

        function M(Q) {
            var oe = Q - f,
                le = Q - h,
                ue = t - oe;
            return _ ? jX(ue, o - le) : ue
        }

        function U(Q) {
            var oe = Q - f,
                le = Q - h;
            return f === void 0 || oe >= t || oe < 0 || _ && le >= o
        }

        function C() {
            var Q = ed();
            if (U(Q)) return V(Q);
            u = setTimeout(C, M(Q))
        }

        function V(Q) {
            return u = void 0, E && n ? $(Q) : (n = s = void 0, l)
        }

        function X() {
            u !== void 0 && clearTimeout(u), h = 0, n = f = s = u = void 0
        }

        function G() {
            return u === void 0 ? l : V(ed())
        }

        function j() {
            var Q = ed(),
                oe = U(Q);
            if (n = arguments, s = this, f = Q, oe) {
                if (u === void 0) return L(f);
                if (_) return clearTimeout(u), u = setTimeout(C, t), $(f)
            }
            return u === void 0 && (u = setTimeout(C, t)), l
        }
        return j.cancel = X, j.flush = G, j
    }
    var WX = GX,
        HX = vi,
        KX = qc,
        VX = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        qX = /^\w*$/;

    function YX(e, t) {
        if (HX(e)) return !1;
        var r = typeof e;
        return r == "number" || r == "symbol" || r == "boolean" || e == null || KX(e) ? !0 : qX.test(e) || !VX.test(e) || t != null && e in Object(t)
    }
    var zX = YX,
        kO = tT,
        XX = "Expected a function";

    function Cp(e, t) {
        if (typeof e != "function" || t != null && typeof t != "function") throw new TypeError(XX);
        var r = function() {
            var n = arguments,
                s = t ? t.apply(this, n) : n[0],
                o = r.cache;
            if (o.has(s)) return o.get(s);
            var l = e.apply(this, n);
            return r.cache = o.set(s, l) || o, l
        };
        return r.cache = new(Cp.Cache || kO), r
    }
    Cp.Cache = kO;
    var JX = Cp,
        QX = JX,
        ZX = 500;

    function e7(e) {
        var t = QX(e, function(n) {
                return r.size === ZX && r.clear(), n
            }),
            r = t.cache;
        return t
    }
    var t7 = e7,
        r7 = t7,
        n7 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        i7 = /\\(\\)?/g,
        s7 = r7(function(e) {
            var t = [];
            return e.charCodeAt(0) === 46 && t.push(""), e.replace(n7, function(r, n, s, o) {
                t.push(s ? o.replace(i7, "$1") : n || r)
            }), t
        }),
        a7 = s7;

    function o7(e, t) {
        for (var r = -1, n = e == null ? 0 : e.length, s = Array(n); ++r < n;) s[r] = t(e[r], r, e);
        return s
    }
    var xO = o7,
        Q_ = Ac,
        l7 = xO,
        c7 = vi,
        u7 = qc,
        f7 = 1 / 0,
        Z_ = Q_ ? Q_.prototype : void 0,
        eb = Z_ ? Z_.toString : void 0;

    function DO(e) {
        if (typeof e == "string") return e;
        if (c7(e)) return l7(e, DO) + "";
        if (u7(e)) return eb ? eb.call(e) : "";
        var t = e + "";
        return t == "0" && 1 / e == -f7 ? "-0" : t
    }
    var d7 = DO,
        h7 = d7;

    function p7(e) {
        return e == null ? "" : h7(e)
    }
    var g7 = p7,
        m7 = vi,
        v7 = zX,
        y7 = a7,
        _7 = g7;

    function b7(e, t) {
        return m7(e) ? e : v7(e, t) ? [e] : y7(_7(e))
    }
    var MO = b7,
        E7 = qc,
        T7 = 1 / 0;

    function S7(e) {
        if (typeof e == "string" || E7(e)) return e;
        var t = e + "";
        return t == "0" && 1 / e == -T7 ? "-0" : t
    }
    var FO = S7,
        O7 = Wh,
        w7 = MO,
        $7 = Hh,
        tb = hn,
        C7 = FO;

    function I7(e, t, r, n) {
        if (!tb(e)) return e;
        t = w7(t, e);
        for (var s = -1, o = t.length, l = o - 1, u = e; u != null && ++s < o;) {
            var f = C7(t[s]),
                h = r;
            if (f === "__proto__" || f === "constructor" || f === "prototype") return e;
            if (s != l) {
                var g = u[f];
                h = n ? n(g, f, u) : void 0, h === void 0 && (h = tb(g) ? g : $7(t[s + 1]) ? [] : {})
            }
            O7(u, f, h), u = u[f]
        }
        return e
    }
    var A7 = I7,
        N7 = A7;

    function P7(e, t, r) {
        return e == null ? e : N7(e, t, r)
    }
    var R7 = P7;
    class L7 {
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
            ge(this, "sync", WX(() => {
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
            return t instanceof Sr.ArtifactEntity || t instanceof Sr.DoodleEntity ? t : t instanceof Sr.ObjectEntity ? NO(t.val) : t instanceof Sr.TextEntity ? t.text : t instanceof Sr.NumberEntity ? t.val : null
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
                    R7(this.newValues, n, u)
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
    const Yr = new L7,
        k7 = {
            install: (e, t) => {
                e.config.globalProperties.$setupEcast = r => {
                    Yr.setWSClient(r.wsClient), r.wsClient.on("artifact", n => no.add(n)), r.wsClient.on("connection", n => {
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
        Eo = {
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

    function x7() {
        return typeof __SENTRY_BROWSER_BUNDLE__ < "u" && !!__SENTRY_BROWSER_BUNDLE__
    }

    function Ip() {
        return !x7() && Object.prototype.toString.call(typeof process < "u" ? process : 0) === "[object process]"
    }

    function D7(e, t) {
        return e.require(t)
    }
    var M7 = {};

    function Yt() {
        return Ip() ? global : typeof window < "u" ? window : typeof self < "u" ? self : M7
    }

    function Ap(e, t, r) {
        var n = r || Yt(),
            s = n.__SENTRY__ = n.__SENTRY__ || {},
            o = s[e] || (s[e] = t());
        return o
    }
    var BO = Object.prototype.toString;

    function UO(e) {
        switch (BO.call(e)) {
            case "[object Error]":
            case "[object Exception]":
            case "[object DOMException]":
                return !0;
            default:
                return Ti(e, Error)
        }
    }

    function ua(e, t) {
        return BO.call(e) === `[object ${t}]`
    }

    function jO(e) {
        return ua(e, "ErrorEvent")
    }

    function rb(e) {
        return ua(e, "DOMError")
    }

    function F7(e) {
        return ua(e, "DOMException")
    }

    function Js(e) {
        return ua(e, "String")
    }

    function B7(e) {
        return e === null || typeof e != "object" && typeof e != "function"
    }

    function Yc(e) {
        return ua(e, "Object")
    }

    function Np(e) {
        return typeof Event < "u" && Ti(e, Event)
    }

    function U7(e) {
        return typeof Element < "u" && Ti(e, Element)
    }

    function j7(e) {
        return ua(e, "RegExp")
    }

    function GO(e) {
        return Boolean(e && e.then && typeof e.then == "function")
    }

    function G7(e) {
        return Yc(e) && "nativeEvent" in e && "preventDefault" in e && "stopPropagation" in e
    }

    function W7(e) {
        return typeof e == "number" && e !== e
    }

    function Ti(e, t) {
        try {
            return e instanceof t
        } catch {
            return !1
        }
    }

    function eh(e, t) {
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
            for (; u && f++ < r && (g = H7(u, t), !(g === "html" || f > 1 && h + s.length * l + g.length >= n));) s.push(g), h += g.length, u = u.parentNode;
            return s.reverse().join(o)
        } catch {
            return "<unknown>"
        }
    }

    function H7(e, t) {
        var r = e,
            n = [];
        let s, o, l, u, f;
        if (!r || !r.tagName) return "";
        n.push(r.tagName.toLowerCase());
        var h = t && t.length ? t.filter(_ => r.getAttribute(_)).map(_ => [_, r.getAttribute(_)]) : null;
        if (h && h.length) h.forEach(_ => {
            n.push(`[${_[0]}="${_[1]}"]`)
        });
        else if (r.id && n.push(`#${r.id}`), s = r.className, s && Js(s))
            for (o = s.split(/\s+/), f = 0; f < o.length; f++) n.push(`.${o[f]}`);
        var g = ["type", "name", "title", "alt"];
        for (f = 0; f < g.length; f++) l = g[f], u = r.getAttribute(l), u && n.push(`[${l}="${u}"]`);
        return n.join("")
    }

    function K7() {
        var e = Yt();
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
    var V7 = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/;

    function q7(e) {
        return e === "http" || e === "https"
    }

    function Y7(e, t = !1) {
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

    function z7(e) {
        var t = V7.exec(e);
        if (!t) throw new Da(`Invalid Sentry Dsn: ${e}`);
        const [r, n, s = "", o, l = "", u] = t.slice(1);
        let f = "",
            h = u;
        var g = h.split("/");
        if (g.length > 1 && (f = g.slice(0, -1).join("/"), h = g.pop()), h) {
            var _ = h.match(/^\d+/);
            _ && (h = _[0])
        }
        return WO({
            host: o,
            pass: s,
            path: f,
            projectId: h,
            port: l,
            protocol: r,
            publicKey: n
        })
    }

    function WO(e) {
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

    function X7(e) {
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
        if (!q7(n)) throw new Da(`Invalid Sentry Dsn: Invalid protocol ${n}`);
        if (t && isNaN(parseInt(t, 10))) throw new Da(`Invalid Sentry Dsn: Invalid port ${t}`);
        return !0
    }

    function J7(e) {
        var t = typeof e == "string" ? z7(e) : WO(e);
        return X7(t), t
    }
    var Q7 = Yt(),
        Z7 = "Sentry Logger ",
        sc = ["debug", "info", "warn", "error", "log", "assert", "trace"];

    function HO(e) {
        var t = Yt();
        if (!("console" in t)) return e();
        var r = t.console,
            n = {};
        sc.forEach(s => {
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

    function nb() {
        let e = !1;
        var t = {
            enable: () => {
                e = !0
            },
            disable: () => {
                e = !1
            }
        };
        return typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__ ? sc.forEach(r => {
            t[r] = (...n) => {
                e && HO(() => {
                    Q7.console[r](`${Z7}[${r}]:`, ...n)
                })
            }
        }) : sc.forEach(r => {
            t[r] = () => {}
        }), t
    }
    let jt;
    typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__ ? jt = Ap("logger", nb) : jt = nb();

    function ib(e, t = 0) {
        return typeof e != "string" || t === 0 || e.length <= t ? e : `${e.substr(0,t)}...`
    }

    function sb(e, t) {
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

    function Pp(e, t) {
        return Js(e) ? j7(t) ? t.test(e) : typeof t == "string" ? e.indexOf(t) !== -1 : !1 : !1
    }

    function lr(e, t, r) {
        if (t in e) {
            var n = e[t],
                s = r(n);
            if (typeof s == "function") try {
                VO(s, n)
            } catch {}
            e[t] = s
        }
    }

    function KO(e, t, r) {
        Object.defineProperty(e, t, {
            value: r,
            writable: !0,
            configurable: !0
        })
    }

    function VO(e, t) {
        var r = t.prototype || {};
        e.prototype = t.prototype = r, KO(e, "__sentry_original__", t)
    }

    function Rp(e) {
        return e.__sentry_original__
    }

    function qO(e) {
        if (UO(e)) return {
            message: e.message,
            name: e.name,
            stack: e.stack,
            ...ob(e)
        };
        if (Np(e)) {
            var t = {
                type: e.type,
                target: ab(e.target),
                currentTarget: ab(e.currentTarget),
                ...ob(e)
            };
            return typeof CustomEvent < "u" && Ti(e, CustomEvent) && (t.detail = e.detail), t
        } else return e
    }

    function ab(e) {
        try {
            return U7(e) ? eh(e) : Object.prototype.toString.call(e)
        } catch {
            return "<unknown>"
        }
    }

    function ob(e) {
        if (typeof e == "object" && e !== null) {
            var t = {};
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t
        } else return {}
    }

    function eJ(e, t = 40) {
        var r = Object.keys(qO(e));
        if (r.sort(), !r.length) return "[object has no keys]";
        if (r[0].length >= t) return ib(r[0], t);
        for (let s = r.length; s > 0; s--) {
            var n = r.slice(0, s).join(", ");
            if (!(n.length > t)) return s === r.length ? n : ib(n, t)
        }
        return ""
    }

    function tJ(e) {
        var t = new Map;
        return th(e, t)
    }

    function th(e, t) {
        if (Yc(e)) {
            var r = t.get(e);
            if (r !== void 0) return r;
            var n = {};
            t.set(e, n);
            for (var s of Object.keys(e)) typeof e[s] < "u" && (n[s] = th(e[s], t));
            return n
        }
        if (Array.isArray(e)) {
            var r = t.get(e);
            if (r !== void 0) return r;
            var n = [];
            return t.set(e, n), e.forEach(u => {
                n.push(th(u, t))
            }), n
        }
        return e
    }
    var td = "<anonymous>";

    function pi(e) {
        try {
            return !e || typeof e != "function" ? td : e.name || td
        } catch {
            return td
        }
    }

    function rJ() {
        if (!("fetch" in Yt())) return !1;
        try {
            return new Headers, new Request(""), new Response, !0
        } catch {
            return !1
        }
    }

    function lb(e) {
        return e && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())
    }

    function nJ() {
        if (!rJ()) return !1;
        var e = Yt();
        if (lb(e.fetch)) return !0;
        let t = !1;
        var r = e.document;
        if (r && typeof r.createElement == "function") try {
            var n = r.createElement("iframe");
            n.hidden = !0, r.head.appendChild(n), n.contentWindow && n.contentWindow.fetch && (t = lb(n.contentWindow.fetch)), r.head.removeChild(n)
        } catch (s) {
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && jt.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", s)
        }
        return t
    }

    function iJ() {
        var e = Yt(),
            t = e.chrome,
            r = t && t.app && t.app.runtime,
            n = "history" in e && !!e.history.pushState && !!e.history.replaceState;
        return !r && n
    }
    var Ot = Yt(),
        Ka = {},
        cb = {};

    function sJ(e) {
        if (!cb[e]) switch (cb[e] = !0, e) {
            case "console":
                aJ();
                break;
            case "dom":
                gJ();
                break;
            case "xhr":
                uJ();
                break;
            case "fetch":
                oJ();
                break;
            case "history":
                fJ();
                break;
            case "error":
                mJ();
                break;
            case "unhandledrejection":
                vJ();
                break;
            default:
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && jt.warn("unknown instrumentation type:", e);
                return
        }
    }

    function Yi(e, t) {
        Ka[e] = Ka[e] || [], Ka[e].push(t), sJ(e)
    }

    function un(e, t) {
        if (!(!e || !Ka[e]))
            for (var r of Ka[e] || []) try {
                r(t)
            } catch (n) {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && jt.error(`Error while triggering instrumentation handler.
Type: ${e}
Name: ${pi(r)}
Error:`, n)
            }
    }

    function aJ() {
        "console" in Ot && sc.forEach(function(e) {
            e in Ot.console && lr(Ot.console, e, function(t) {
                return function(...r) {
                    un("console", {
                        args: r,
                        level: e
                    }), t && t.apply(Ot.console, r)
                }
            })
        })
    }

    function oJ() {
        !nJ() || lr(Ot, "fetch", function(e) {
            return function(...t) {
                var r = {
                    args: t,
                    fetchData: {
                        method: lJ(t),
                        url: cJ(t)
                    },
                    startTimestamp: Date.now()
                };
                return un("fetch", {
                    ...r
                }), e.apply(Ot, t).then(n => (un("fetch", {
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

    function lJ(e = []) {
        return "Request" in Ot && Ti(e[0], Request) && e[0].method ? String(e[0].method).toUpperCase() : e[1] && e[1].method ? String(e[1].method).toUpperCase() : "GET"
    }

    function cJ(e = []) {
        return typeof e[0] == "string" ? e[0] : "Request" in Ot && Ti(e[0], Request) ? e[0].url : String(e[0])
    }

    function uJ() {
        if ("XMLHttpRequest" in Ot) {
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
                    return "onreadystatechange" in n && typeof n.onreadystatechange == "function" ? lr(n, "onreadystatechange", function(u) {
                        return function(...f) {
                            return l(), u.apply(n, f)
                        }
                    }) : n.addEventListener("readystatechange", l), t.apply(n, r)
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
    let Cl;

    function fJ() {
        if (!iJ()) return;
        var e = Ot.onpopstate;
        Ot.onpopstate = function(...r) {
            var n = Ot.location.href,
                s = Cl;
            if (Cl = n, un("history", {
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
                    var o = Cl,
                        l = String(s);
                    Cl = l, un("history", {
                        from: o,
                        to: l
                    })
                }
                return r.apply(this, n)
            }
        }
        lr(Ot.history, "pushState", t), lr(Ot.history, "replaceState", t)
    }
    var dJ = 1e3;
    let Il, Al;

    function hJ(e, t) {
        if (!e || e.type !== t.type) return !0;
        try {
            if (e.target !== t.target) return !0
        } catch {}
        return !1
    }

    function pJ(e) {
        if (e.type !== "keypress") return !1;
        try {
            var t = e.target;
            if (!t || !t.tagName) return !0;
            if (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable) return !1
        } catch {}
        return !0
    }

    function ub(e, t = !1) {
        return r => {
            if (!(!r || Al === r) && !pJ(r)) {
                var n = r.type === "keypress" ? "input" : r.type;
                Il === void 0 ? (e({
                    event: r,
                    name: n,
                    global: t
                }), Al = r) : hJ(Al, r) && (e({
                    event: r,
                    name: n,
                    global: t
                }), Al = r), clearTimeout(Il), Il = Ot.setTimeout(() => {
                    Il = void 0
                }, dJ)
            }
        }
    }

    function gJ() {
        if ("document" in Ot) {
            var e = un.bind(null, "dom"),
                t = ub(e, !0);
            Ot.document.addEventListener("click", t, !1), Ot.document.addEventListener("keypress", t, !1), ["EventTarget", "Node"].forEach(r => {
                var n = Ot[r] && Ot[r].prototype;
                !n || !n.hasOwnProperty || !n.hasOwnProperty("addEventListener") || (lr(n, "addEventListener", function(s) {
                    return function(o, l, u) {
                        if (o === "click" || o == "keypress") try {
                            var f = this,
                                h = f.__sentry_instrumentation_handlers__ = f.__sentry_instrumentation_handlers__ || {},
                                g = h[o] = h[o] || {
                                    refCount: 0
                                };
                            if (!g.handler) {
                                var _ = ub(e);
                                g.handler = _, s.call(this, o, _, u)
                            }
                            g.refCount += 1
                        } catch {}
                        return s.call(this, o, l, u)
                    }
                }), lr(n, "removeEventListener", function(s) {
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
    let rd = null;

    function mJ() {
        rd = Ot.onerror, Ot.onerror = function(e, t, r, n, s) {
            return un("error", {
                column: n,
                error: s,
                line: r,
                msg: e,
                url: t
            }), rd ? rd.apply(this, arguments) : !1
        }
    }
    let nd = null;

    function vJ() {
        nd = Ot.onunhandledrejection, Ot.onunhandledrejection = function(e) {
            return un("unhandledrejection", e), nd ? nd.apply(this, arguments) : !0
        }
    }

    function yJ() {
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
        var e = Yt(),
            t = e.crypto || e.msCrypto;
        if (t && t.randomUUID) return t.randomUUID().replace(/-/g, "");
        var r = t && t.getRandomValues ? () => t.getRandomValues(new Uint8Array(1))[0] : () => Math.random() * 16;
        return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, n => (n ^ (r() & 15) >> n / 4).toString(16))
    }

    function YO(e) {
        return e.exception && e.exception.values ? e.exception.values[0] : void 0
    }

    function Ls(e) {
        const {
            message: t,
            event_id: r
        } = e;
        if (t) return t;
        var n = YO(e);
        return n ? n.type && n.value ? `${n.type}: ${n.value}` : n.type || n.value || r || "<unknown>" : r || "<unknown>"
    }

    function rh(e, t, r) {
        var n = e.exception = e.exception || {},
            s = n.values = n.values || [],
            o = s[0] = s[0] || {};
        o.value || (o.value = t || ""), o.type || (o.type = r || "Error")
    }

    function ac(e, t) {
        var r = YO(e);
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

    function _J(e, t = 1 / 0, r = 1 / 0) {
        try {
            return nh("", e, t, r)
        } catch (n) {
            return {
                ERROR: `**non-serializable** (${n})`
            }
        }
    }

    function zO(e, t = 3, r = 100 * 1024) {
        var n = _J(e, t);
        return TJ(n) > r ? zO(e, t - 1, r) : n
    }

    function nh(e, t, r = 1 / 0, n = 1 / 0, s = yJ()) {
        const [o, l] = s;
        if (t === null || ["number", "boolean", "string"].includes(typeof t) && !W7(t)) return t;
        var u = bJ(e, t);
        if (!u.startsWith("[object ")) return u;
        if (t.__sentry_skip_normalization__) return t;
        if (r === 0) return u.replace("object ", "");
        if (o(t)) return "[Circular ~]";
        var f = t;
        if (f && typeof f.toJSON == "function") try {
            var h = f.toJSON();
            return nh("", h, r - 1, n, s)
        } catch {}
        var g = Array.isArray(t) ? [] : {};
        let _ = 0;
        var E = qO(t);
        for (var $ in E)
            if (!!Object.prototype.hasOwnProperty.call(E, $)) {
                if (_ >= n) {
                    g[$] = "[MaxProperties ~]";
                    break
                }
                var L = E[$];
                g[$] = nh($, L, r - 1, n, s), _ += 1
            } return l(t), g
    }

    function bJ(e, t) {
        try {
            return e === "domain" && t && typeof t == "object" && t._events ? "[Domain]" : e === "domainEmitter" ? "[DomainEmitter]" : typeof global < "u" && t === global ? "[Global]" : typeof window < "u" && t === window ? "[Window]" : typeof document < "u" && t === document ? "[Document]" : G7(t) ? "[SyntheticEvent]" : typeof t == "number" && t !== t ? "[NaN]" : t === void 0 ? "[undefined]" : typeof t == "function" ? `[Function: ${pi(t)}]` : typeof t == "symbol" ? `[${String(t)}]` : typeof t == "bigint" ? `[BigInt: ${String(t)}]` : `[object ${Object.getPrototypeOf(t).constructor.name}]`
        } catch (r) {
            return `**non-serializable** (${r})`
        }
    }

    function EJ(e) {
        return ~-encodeURI(e).split(/%..|./).length
    }

    function TJ(e) {
        return EJ(JSON.stringify(e))
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
    class En {
        __init() {
            this._state = xn.PENDING
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
                    if (GO(r)) {
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

    function id(e) {
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
    var SJ = ["fatal", "error", "warning", "log", "info", "debug"];

    function OJ(e) {
        return e === "warn" ? "warning" : SJ.includes(e) ? e : "log"
    }
    var ih = {
        nowSeconds: () => Date.now() / 1e3
    };

    function wJ() {
        const {
            performance: e
        } = Yt();
        if (!(!e || !e.now)) {
            var t = Date.now() - e.now();
            return {
                now: () => e.now(),
                timeOrigin: t
            }
        }
    }

    function $J() {
        try {
            var e = D7(Cw, "perf_hooks");
            return e.performance
        } catch {
            return
        }
    }
    var sd = Ip() ? $J() : wJ(),
        fb = sd === void 0 ? ih : {
            nowSeconds: () => (sd.timeOrigin + sd.now()) / 1e3
        },
        XO = ih.nowSeconds.bind(ih),
        JO = fb.nowSeconds.bind(fb);
    (() => {
        const {
            performance: e
        } = Yt();
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

    function CJ(e) {
        var t = JO(),
            r = {
                sid: Va(),
                init: !0,
                timestamp: t,
                started: t,
                duration: 0,
                status: "ok",
                errors: 0,
                ignoreDuration: !1,
                toJSON: () => AJ(r)
            };
        return e && zc(r, e), r
    }

    function zc(e, t = {}) {
        if (t.user && (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address), !e.did && !t.did && (e.did = t.user.id || t.user.email || t.user.username)), e.timestamp = t.timestamp || JO(), t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration), t.sid && (e.sid = t.sid.length === 32 ? t.sid : Va()), t.init !== void 0 && (e.init = t.init), !e.did && t.did && (e.did = `${t.did}`), typeof t.started == "number" && (e.started = t.started), e.ignoreDuration) e.duration = void 0;
        else if (typeof t.duration == "number") e.duration = t.duration;
        else {
            var r = e.timestamp - e.started;
            e.duration = r >= 0 ? r : 0
        }
        t.release && (e.release = t.release), t.environment && (e.environment = t.environment), !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress), !e.userAgent && t.userAgent && (e.userAgent = t.userAgent), typeof t.errors == "number" && (e.errors = t.errors), t.status && (e.status = t.status)
    }

    function IJ(e, t) {
        let r = {};
        t ? r = {
            status: t
        } : e.status === "ok" && (r = {
            status: "exited"
        }), zc(e, r)
    }

    function AJ(e) {
        return tJ({
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
    var db = 100;
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
            return this._user = t || {}, this._session && zc(this._session, {
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
            }, t._user && Object.keys(t._user).length && (this._user = t._user), t._level && (this._level = t._level), t._fingerprint && (this._fingerprint = t._fingerprint), t._requestSession && (this._requestSession = t._requestSession)) : Yc(t) && (t = t, this._tags = {
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
            var n = typeof r == "number" ? Math.min(r, db) : db;
            if (n <= 0) return this;
            var s = {
                timestamp: XO(),
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
            }, this._notifyEventProcessors([...QO(), ...this._eventProcessors], t, r)
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
                    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && u.id && f === null && jt.log(`Event processor "${u.id}" dropped event`), GO(f) ? f.then(h => this._notifyEventProcessors(t, h, n, s + 1).then(o)).then(null, l) : this._notifyEventProcessors(t, f, n, s + 1).then(o).then(null, l)
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

    function QO() {
        return Ap("globalEventProcessors", () => [])
    }

    function ZO(e) {
        QO().push(e)
    }
    var Lp = 4,
        NJ = 100;
    class To {
        __init() {
            this._stack = [{}]
        }
        constructor(t, r = new ns, n = Lp) {
            this._version = n, To.prototype.__init.call(this), this.getStackTop().scope = r, t && this.bindClient(t)
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
                maxBreadcrumbs: l = NJ
            } = s.getOptions && s.getOptions() || {};
            if (!(l <= 0)) {
                var u = XO(),
                    f = {
                        timestamp: u,
                        ...t
                    },
                    h = o ? HO(() => o(f, r)) : f;
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
            var r = hb(this);
            try {
                t(this)
            } finally {
                hb(r)
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
            n && IJ(n), this._sendSessionUpdate(), r && r.setSession()
        }
        startSession(t) {
            const {
                scope: r,
                client: n
            } = this.getStackTop(), {
                release: s,
                environment: o
            } = n && n.getOptions() || {};
            var l = Yt();
            const {
                userAgent: u
            } = l.navigator || {};
            var f = CJ({
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
                h && h.status === "ok" && zc(h, {
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
            var n = Xc(),
                s = n.__SENTRY__;
            if (s && s.extensions && typeof s.extensions[t] == "function") return s.extensions[t].apply(this, r);
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && jt.warn(`Extension method ${t} couldn't be found, doing nothing.`)
        }
    }

    function Xc() {
        var e = Yt();
        return e.__SENTRY__ = e.__SENTRY__ || {
            extensions: {},
            hub: void 0
        }, e
    }

    function hb(e) {
        var t = Xc(),
            r = ai(t);
        return kp(t, e), r
    }

    function Dr() {
        var e = Xc();
        return (!ew(e) || ai(e).isOlderThan(Lp)) && kp(e, new To), Ip() ? PJ(e) : ai(e)
    }

    function PJ(e) {
        try {
            var t = Xc().__SENTRY__,
                r = t && t.extensions && t.extensions.domain && t.extensions.domain.active;
            if (!r) return ai(e);
            if (!ew(r) || ai(r).isOlderThan(Lp)) {
                var n = ai(e).getStackTop();
                kp(r, new To(n.client, ns.clone(n.scope)))
            }
            return ai(r)
        } catch {
            return ai(e)
        }
    }

    function ew(e) {
        return !!(e && e.__SENTRY__ && e.__SENTRY__.hub)
    }

    function ai(e) {
        return Ap("hub", () => new To, e)
    }

    function kp(e, t) {
        if (!e) return !1;
        var r = e.__SENTRY__ = e.__SENTRY__ || {};
        return r.hub = t, !0
    }

    function RJ(e, t) {
        return Dr().captureException(e, {
            captureContext: t
        })
    }

    function LJ(e) {
        Dr().withScope(e)
    }

    function kJ(e) {
        var t = e.protocol ? `${e.protocol}:` : "",
            r = e.port ? `:${e.port}` : "";
        return `${t}//${e.host}${r}${e.path?`/${e.path}`:""}/api/`
    }

    function xJ(e, t) {
        var r = J7(e),
            n = `${kJ(r)}embed/error-page/`;
        let s = `dsn=${Y7(r)}`;
        for (var o in t)
            if (o !== "dsn")
                if (o === "user") {
                    var l = t.user;
                    if (!l) continue;
                    l.name && (s += `&name=${encodeURIComponent(l.name)}`), l.email && (s += `&email=${encodeURIComponent(l.email)}`)
                } else s += `&${encodeURIComponent(o)}=${encodeURIComponent(t[o])}`;
        return `${n}?${s}`
    }
    let pb;
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
            pb = Function.prototype.toString, Function.prototype.toString = function(...t) {
                var r = Rp(this) || this;
                return pb.apply(r, t)
            }
        }
    }
    so.__initStatic();
    var DJ = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/];
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
                            h = MJ(l._options, f);
                        return FJ(s, h) ? null : s
                    }
                }
                return s
            };
            n.id = this.name, t(n)
        }
    }
    Ws.__initStatic();

    function MJ(e = {}, t = {}) {
        return {
            allowUrls: [...e.allowUrls || [], ...t.allowUrls || []],
            denyUrls: [...e.denyUrls || [], ...t.denyUrls || []],
            ignoreErrors: [...e.ignoreErrors || [], ...t.ignoreErrors || [], ...DJ],
            ignoreInternal: e.ignoreInternal !== void 0 ? e.ignoreInternal : !0
        }
    }

    function FJ(e, t) {
        return t.ignoreInternal && WJ(e) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && jt.warn(`Event dropped due to being internal Sentry Error.
Event: ${Ls(e)}`), !0) : BJ(e, t.ignoreErrors) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && jt.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${Ls(e)}`), !0) : UJ(e, t.denyUrls) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && jt.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${Ls(e)}.
Url: ${oc(e)}`), !0) : jJ(e, t.allowUrls) ? !1 : ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && jt.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${Ls(e)}.
Url: ${oc(e)}`), !0)
    }

    function BJ(e, t) {
        return !t || !t.length ? !1 : GJ(e).some(r => t.some(n => Pp(r, n)))
    }

    function UJ(e, t) {
        if (!t || !t.length) return !1;
        var r = oc(e);
        return r ? t.some(n => Pp(r, n)) : !1
    }

    function jJ(e, t) {
        if (!t || !t.length) return !0;
        var r = oc(e);
        return r ? t.some(n => Pp(r, n)) : !0
    }

    function GJ(e) {
        if (e.message) return [e.message];
        if (e.exception) try {
            const {
                type: t = "",
                value: r = ""
            } = e.exception.values && e.exception.values[0] || {};
            return [`${r}`, `${t}: ${r}`]
        } catch {
            return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && jt.error(`Cannot extract message for event ${Ls(e)}`), []
        }
        return []
    }

    function WJ(e) {
        try {
            return e.exception.values[0].type === "SentryError"
        } catch {}
        return !1
    }

    function HJ(e = []) {
        for (let r = e.length - 1; r >= 0; r--) {
            var t = e[r];
            if (t && t.filename !== "<anonymous>" && t.filename !== "[native code]") return t.filename || null
        }
        return null
    }

    function oc(e) {
        try {
            let t;
            try {
                t = e.exception.values[0].stacktrace.frames
            } catch {}
            return t ? HJ(t) : null
        } catch {
            return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && jt.error(`Cannot extract url for event ${Ls(e)}`), null
        }
    }

    function tw(e, t) {
        var r = xp(e, t),
            n = {
                type: t && t.name,
                value: YJ(t)
            };
        return r.length && (n.stacktrace = {
            frames: r
        }), n.type === void 0 && n.value === "" && (n.value = "Unrecoverable error caught"), n
    }

    function KJ(e, t, r, n) {
        var s = {
            exception: {
                values: [{
                    type: Np(t) ? t.constructor.name : n ? "UnhandledRejection" : "Error",
                    value: `Non-Error ${n?"promise rejection":"exception"} captured with keys: ${eJ(t)}`
                }]
            },
            extra: {
                __serialized__: zO(t)
            }
        };
        if (r) {
            var o = xp(e, r);
            o.length && (s.exception.values[0].stacktrace = {
                frames: o
            })
        }
        return s
    }

    function ad(e, t) {
        return {
            exception: {
                values: [tw(e, t)]
            }
        }
    }

    function xp(e, t) {
        var r = t.stacktrace || t.stack || "",
            n = qJ(t);
        try {
            return e(r, n)
        } catch {}
        return []
    }
    var VJ = /Minified React error #\d+;/i;

    function qJ(e) {
        if (e) {
            if (typeof e.framesToPop == "number") return e.framesToPop;
            if (VJ.test(e.message)) return 1
        }
        return 0
    }

    function YJ(e) {
        var t = e && e.message;
        return t ? t.error && typeof t.error.message == "string" ? t.error.message : t : "No error message"
    }

    function rw(e, t, r, n, s) {
        let o;
        if (jO(t) && t.error) {
            var l = t;
            return ad(e, l.error)
        }
        if (rb(t) || F7(t)) {
            var u = t;
            if ("stack" in t) o = ad(e, t);
            else {
                var f = u.name || (rb(u) ? "DOMError" : "DOMException"),
                    h = u.message ? `${f}: ${u.message}` : f;
                o = gb(e, h, r, n), rh(o, h)
            }
            return "code" in u && (o.tags = {
                ...o.tags,
                "DOMException.code": `${u.code}`
            }), o
        }
        if (UO(t)) return ad(e, t);
        if (Yc(t) || Np(t)) {
            var g = t;
            return o = KJ(e, g, r, s), ac(o, {
                synthetic: !0
            }), o
        }
        return o = gb(e, t, r, n), rh(o, `${t}`, void 0), ac(o, {
            synthetic: !0
        }), o
    }

    function gb(e, t, r, n) {
        var s = {
            message: t
        };
        if (n && r) {
            var o = xp(e, r);
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
    var zJ = "Breadcrumbs";
    class ao {
        static __initStatic() {
            this.id = zJ
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
            this.options.console && Yi("console", JJ), this.options.dom && Yi("dom", XJ(this.options.dom)), this.options.xhr && Yi("xhr", QJ), this.options.fetch && Yi("fetch", ZJ), this.options.history && Yi("history", eQ)
        }
    }
    ao.__initStatic();

    function XJ(e) {
        function t(r) {
            let n, s = typeof e == "object" ? e.serializeAttribute : void 0;
            typeof s == "string" && (s = [s]);
            try {
                n = r.event.target ? eh(r.event.target, s) : eh(r.event, s)
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

    function JJ(e) {
        var t = {
            category: "console",
            data: {
                arguments: e.args,
                logger: "console"
            },
            level: OJ(e.level),
            message: sb(e.args, " ")
        };
        if (e.level === "assert")
            if (e.args[0] === !1) t.message = `Assertion failed: ${sb(e.args.slice(1)," ")||"console.assert"}`, t.data.arguments = e.args.slice(1);
            else return;
        Dr().addBreadcrumb(t, {
            input: e.args,
            level: e.level
        })
    }

    function QJ(e) {
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

    function ZJ(e) {
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

    function eQ(e) {
        var t = Yt();
        let r = e.from,
            n = e.to;
        var s = id(t.location.href);
        let o = id(r);
        var l = id(n);
        o.path || (o = s), s.protocol === l.protocol && s.host === l.host && (n = l.relative), s.protocol === o.protocol && s.host === o.host && (r = o.relative), Dr().addBreadcrumb({
            category: "navigation",
            data: {
                from: r,
                to: n
            }
        })
    }
    let sh = 0;

    function nw() {
        return sh > 0
    }

    function tQ() {
        sh += 1, setTimeout(() => {
            sh -= 1
        })
    }

    function Qs(e, t = {}, r) {
        if (typeof e != "function") return e;
        try {
            var n = e.__sentry_wrapped__;
            if (n) return n;
            if (Rp(e)) return e
        } catch {
            return e
        }
        var s = function() {
            var u = Array.prototype.slice.call(arguments);
            try {
                r && typeof r == "function" && r.apply(this, arguments);
                var f = u.map(h => Qs(h, t));
                return e.apply(this, f)
            } catch (h) {
                throw tQ(), LJ(g => {
                    g.addEventProcessor(_ => (t.mechanism && (rh(_, void 0, void 0), ac(_, t.mechanism)), _.extra = {
                        ..._.extra,
                        arguments: u
                    }, _)), RJ(h)
                }), h
            }
        };
        try {
            for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (s[o] = e[o])
        } catch {}
        VO(s, e), KO(e, "__sentry_wrapped__", s);
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
                onerror: rQ,
                onunhandledrejection: nQ
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
                n && t[r] && (aQ(r), n(), this._installFunc[r] = void 0)
            }
        }
    }
    ui.__initStatic();

    function rQ() {
        Yi("error", e => {
            const [t, r, n] = aw();
            if (!t.getIntegration(ui)) return;
            const {
                msg: s,
                url: o,
                line: l,
                column: u,
                error: f
            } = e;
            if (!(nw() || f && f.__sentry_own_request__)) {
                var h = f === void 0 && Js(s) ? sQ(s, o, l, u) : iw(rw(r, f || s, void 0, n, !1), o, l, u);
                h.level = "error", sw(t, f, h, "onerror")
            }
        })
    }

    function nQ() {
        Yi("unhandledrejection", e => {
            const [t, r, n] = aw();
            if (!t.getIntegration(ui)) return;
            let s = e;
            try {
                "reason" in e ? s = e.reason : "detail" in e && "reason" in e.detail && (s = e.detail.reason)
            } catch {}
            if (nw() || s && s.__sentry_own_request__) return !0;
            var o = B7(s) ? iQ(s) : rw(r, s, void 0, n, !0);
            o.level = "error", sw(t, s, o, "onunhandledrejection")
        })
    }

    function iQ(e) {
        return {
            exception: {
                values: [{
                    type: "UnhandledRejection",
                    value: `Non-Error promise rejection captured with value: ${String(e)}`
                }]
            }
        }
    }

    function sQ(e, t, r, n) {
        var s = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
        let o = jO(e) ? e.message : e,
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
        return iw(f, t, r, n)
    }

    function iw(e, t, r, n) {
        var s = e.exception = e.exception || {},
            o = s.values = s.values || [],
            l = o[0] = o[0] || {},
            u = l.stacktrace = l.stacktrace || {},
            f = u.frames = u.frames || [],
            h = isNaN(parseInt(n, 10)) ? void 0 : n,
            g = isNaN(parseInt(r, 10)) ? void 0 : r,
            _ = Js(t) && t.length > 0 ? t : K7();
        return f.length === 0 && f.push({
            colno: h,
            filename: _,
            function: "?",
            in_app: !0,
            lineno: g
        }), e
    }

    function aQ(e) {
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && jt.log(`Global Handler attached: ${e}`)
    }

    function sw(e, t, r, n) {
        ac(r, {
            handled: !1,
            type: n
        }), e.captureEvent(r, {
            originalException: t
        })
    }

    function aw() {
        var e = Dr(),
            t = e.getClient(),
            r = t && t.getOptions() || {
                stackParser: () => [],
                attachStacktrace: !1
            };
        return [e, r.stackParser, r.attachStacktrace]
    }
    var oQ = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"];
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
            var t = Yt();
            this._options.setTimeout && lr(t, "setTimeout", mb), this._options.setInterval && lr(t, "setInterval", mb), this._options.requestAnimationFrame && lr(t, "requestAnimationFrame", lQ), this._options.XMLHttpRequest && "XMLHttpRequest" in t && lr(XMLHttpRequest.prototype, "send", cQ);
            var r = this._options.eventTarget;
            if (r) {
                var n = Array.isArray(r) ? r : oQ;
                n.forEach(uQ)
            }
        }
    }
    oo.__initStatic();

    function mb(e) {
        return function(...t) {
            var r = t[0];
            return t[0] = Qs(r, {
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

    function lQ(e) {
        return function(t) {
            return e.apply(this, [Qs(t, {
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

    function cQ(e) {
        return function(...t) {
            var r = this,
                n = ["onload", "onerror", "onprogress", "onreadystatechange"];
            return n.forEach(s => {
                s in r && typeof r[s] == "function" && lr(r, s, function(o) {
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
                        u = Rp(o);
                    return u && (l.mechanism.data.handler = pi(u)), Qs(o, l)
                })
            }), e.apply(this, t)
        }
    }

    function uQ(e) {
        var t = Yt(),
            r = t[e] && t[e].prototype;
        !r || !r.hasOwnProperty || !r.hasOwnProperty("addEventListener") || (lr(r, "addEventListener", function(n) {
            return function(s, o, l) {
                try {
                    typeof o.handleEvent == "function" && (o.handleEvent = Qs(o.handleEvent, {
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
                return n.apply(this, [s, Qs(o, {
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
        }), lr(r, "removeEventListener", function(n) {
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
    var fQ = "cause",
        dQ = 5;
    class Hs {
        static __initStatic() {
            this.id = "LinkedErrors"
        }
        __init() {
            this.name = Hs.id
        }
        constructor(t = {}) {
            Hs.prototype.__init.call(this), this._key = t.key || fQ, this._limit = t.limit || dQ
        }
        setupOnce() {
            var t = Dr().getClient();
            !t || ZO((r, n) => {
                var s = Dr().getIntegration(Hs);
                return s ? hQ(t.getOptions().stackParser, s._key, s._limit, r, n) : r
            })
        }
    }
    Hs.__initStatic();

    function hQ(e, t, r, n, s) {
        if (!n.exception || !n.exception.values || !s || !Ti(s.originalException, Error)) return n;
        var o = ow(e, r, s.originalException, t);
        return n.exception.values = [...o, ...n.exception.values], n
    }

    function ow(e, t, r, n, s = []) {
        if (!Ti(r[n], Error) || s.length + 1 >= t) return s;
        var o = tw(e, r[n]);
        return ow(e, t, r[n], n, [o, ...s])
    }
    var Ui = Yt();
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
            ZO(t => {
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
                        if (pQ(s, o._previousEvent)) return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && jt.warn("Event dropped due to being a duplicate of previously captured event."), null
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

    function pQ(e, t) {
        return t ? !!(gQ(e, t) || mQ(e, t)) : !1
    }

    function gQ(e, t) {
        var r = e.message,
            n = t.message;
        return !(!r && !n || r && !n || !r && n || r !== n || !cw(e, t) || !lw(e, t))
    }

    function mQ(e, t) {
        var r = vb(t),
            n = vb(e);
        return !(!r || !n || r.type !== n.type || r.value !== n.value || !cw(e, t) || !lw(e, t))
    }

    function lw(e, t) {
        let r = yb(e),
            n = yb(t);
        if (!r && !n) return !0;
        if (r && !n || !r && n || (r = r, n = n, n.length !== r.length)) return !1;
        for (let l = 0; l < n.length; l++) {
            var s = n[l],
                o = r[l];
            if (s.filename !== o.filename || s.lineno !== o.lineno || s.colno !== o.colno || s.function !== o.function) return !1
        }
        return !0
    }

    function cw(e, t) {
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

    function vb(e) {
        return e.exception && e.exception.values && e.exception.values[0]
    }

    function yb(e) {
        var t = e.exception;
        if (t) try {
            return t.values[0].stacktrace.frames
        } catch {
            return
        }
    }
    new Ws, new so, new oo, new ao, new ui, new Hs, new Vs, new Ks;

    function vQ(e = {}, t = Dr()) {
        var r = Yt();
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
        l.async = !0, l.src = xJ(o, e), e.onLoad && (l.onload = e.onLoad);
        var u = r.document.head || r.document.body;
        u ? u.appendChild(l) : (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && jt.error("Not injecting report dialog. No injection point found in HTML")
    }
    const yQ = et({
            setup() {
                return {
                    fatalError: Ji(Eo.fatal.error)
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
                    vQ({
                        id: (r = (t = (e = this.fatalError) == null ? void 0 : e.event) == null ? void 0 : t.event_id) != null ? r : "Unknown"
                    })
                }
            }
        }),
        So = e => (co("data-v-a7272d53"), e = e(), uo(), e),
        _Q = {
            class: "jbg fatal"
        },
        bQ = {
            class: "constrain"
        },
        EQ = So(() => H("a", {
            class: "logo",
            href: "/",
            "aria-label": "Jackbox Games Logo"
        }, null, -1)),
        TQ = {
            class: "content"
        },
        SQ = So(() => H("h1", null, "You have encountered an error", -1)),
        OQ = So(() => H("p", null, "Something went wrong! But don't worry, you can try a few things to get going.", -1)),
        wQ = So(() => H("ul", null, [H("li", null, "Refresh the page"), H("li", null, "Turn off adblockers or other browser extensions."), H("li", null, "Check your connection to the Internet."), H("li", null, "Make sure you're using an up-to-date browser."), H("li", null, "If that doesn't work, let us know.")], -1)),
        $Q = So(() => H("hr", null, null, -1)),
        CQ = {
            class: "error"
        };

    function IQ(e, t, r, n, s, o) {
        return W(), z("div", _Q, [H("div", bQ, [EQ, H("div", TQ, [SQ, OQ, wQ, H("button", {
            onClick: t[0] || (t[0] = (...l) => e.onFeedbackClick && e.onFeedbackClick(...l))
        }, "Tell us what happened"), $Q, H("pre", CQ, rt(e.message), 1)])])])
    }
    const AQ = ct(yQ, [
            ["render", IQ],
            ["__scopeId", "data-v-a7272d53"]
        ]),
        Nl = Bn({
            hasCrashed: !1
        }),
        NQ = {
            install: e => {
                if (e.config.globalProperties.$handleEcastError) return;
                e.provide(Eo.fatal.error, kr(() => Nl));
                const t = (r, n) => {
                    var s, o;
                    if (r instanceof ts.EcastEntityNotFound || r instanceof ts.EcastFilterError || r instanceof ts.EcastRateLimitExceeded || r instanceof Error && ((s = r.message) == null ? void 0 : s.includes("Socket not ready to send")) || r instanceof Error && ((o = r.message) == null ? void 0 : o.includes("No connection available"))) return console.warn(r);
                    throw n ? console.error(n, r) : console.error(r), r
                };
                window.tv.onError = async (r, n) => {
                    if (r.level === "error" && (Nl.hasCrashed = !0, Nl.event = r, Nl.hint = n), e.config.globalProperties.$debugRecorder) return await e.config.globalProperties.$debugRecorder.sendToEcast()
                }, e.component("Fatal", AQ), e.config.globalProperties.$handleEcastError = t
            }
        };
    var PQ = MO,
        RQ = FO;

    function LQ(e, t) {
        t = PQ(t, e);
        for (var r = 0, n = t.length; e != null && r < n;) e = e[RQ(t[r++])];
        return r && r == n ? e : void 0
    }
    var kQ = LQ,
        xQ = kQ;

    function DQ(e, t, r) {
        var n = e == null ? void 0 : xQ(e, t);
        return n === void 0 ? r : n
    }
    var MQ = DQ,
        FQ = Math.floor,
        BQ = Math.random;

    function UQ(e, t) {
        return e + FQ(BQ() * (t - e + 1))
    }
    var jQ = UQ,
        GQ = jQ;

    function WQ(e) {
        var t = e.length;
        return t ? e[GQ(0, t - 1)] : void 0
    }
    var uw = WQ,
        HQ = xO;

    function KQ(e, t) {
        return HQ(t, function(r) {
            return e[r]
        })
    }
    var VQ = KQ,
        qQ = VQ,
        YQ = Vc;

    function zQ(e) {
        return e == null ? [] : qQ(e, YQ(e))
    }
    var XQ = zQ,
        JQ = uw,
        QQ = XQ;

    function ZQ(e) {
        return JQ(QQ(e))
    }
    var eZ = ZQ,
        tZ = uw,
        rZ = eZ,
        nZ = vi;

    function iZ(e) {
        var t = nZ(e) ? tZ : rZ;
        return t(e)
    }
    var sZ = iZ;

    function _b(e, t) {
        const r = e.global.locale,
            n = e.global.messages[r],
            s = MQ(n, t);
        return Array.isArray(s) || console.warn(`[i18nPlugin] Translation with key ${t} is not an array`), sZ(s)
    }
    const aZ = {
            install: (e, t) => {
                e.directive("ts", (r, n) => {
                    const s = _b(t.i18n, n.value);
                    r.textContent = s || ""
                }), e.config.globalProperties.$ts = function(n) {
                    return _b(t.i18n, n) || ""
                }, e.config.globalProperties.$t = t.i18n.global.t, e.config.globalProperties.$tc = t.i18n.global.tc, e.config.globalProperties.$te = t.i18n.global.te, e.config.globalProperties.$tm = t.i18n.global.tm
            }
        },
        oZ = et({
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
        lZ = "main/pp9/antique-freak/assets/928ef0da.png",
        cZ = "main/pp9/antique-freak/assets/0bb76a2d.png",
        uZ = "main/pp9/antique-freak/assets/ed4469b3.png",
        fZ = {
            key: 0,
            class: "image",
            src: lZ,
            alt: "Kicked"
        },
        dZ = {
            key: 1,
            class: "image",
            src: cZ,
            alt: "Thank You"
        },
        hZ = {
            key: 2,
            class: "image",
            src: uZ,
            alt: "Error"
        },
        pZ = {
            class: "text"
        },
        gZ = {
            key: 3,
            class: "subtext"
        },
        mZ = {
            class: "actions"
        };

    function vZ(e, t, r, n, s, o) {
        const l = Dt("bb");
        return W(), z("div", {
            class: xe(["error-model", e.classes])
        }, [e.image === "tear" ? (W(), z("img", fZ)) : e.image === "moon" ? (W(), z("img", dZ)) : (W(), z("img", hZ)), Ie(H("h3", pZ, null, 512), [
            [l, e.text]
        ]), e.subtext ? Ie((W(), z("h3", gZ, null, 512)), [
            [l, e.subtext]
        ]) : Se("", !0), H("div", mZ, [Ie(H("button", {
            onClick: t[0] || (t[0] = Zt(u => e.$emit("resolve"), ["prevent"]))
        }, null, 512), [
            [l, e.dismissText]
        ])])], 2)
    }
    const yZ = ct(oZ, [
            ["render", vZ],
            ["__scopeId", "data-v-39debcb6"]
        ]),
        _Z = et({
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
        bZ = {
            class: "text"
        },
        EZ = {
            key: 0,
            class: "subtext"
        },
        TZ = {
            class: "actions"
        },
        SZ = ["onClick"];

    function OZ(e, t, r, n, s, o) {
        const l = Dt("bb");
        return W(), z("div", {
            class: xe(["options-modal", e.classes])
        }, [Ie(H("h3", bZ, null, 512), [
            [l, e.text]
        ]), e.subtext ? Ie((W(), z("h3", EZ, null, 512)), [
            [l, e.subtext]
        ]) : Se("", !0), H("div", TZ, [(W(!0), z(ze, null, Or(e.options, (u, f) => Ie((W(), z("button", {
            key: f,
            class: xe(u.classes),
            onClick: Zt(h => e.$emit("resolve", u.value), ["prevent"])
        }, null, 10, SZ)), [
            [l, u.text]
        ])), 128))])], 2)
    }
    const wZ = ct(_Z, [
            ["render", OZ],
            ["__scopeId", "data-v-fdbdeb06"]
        ]),
        $Z = et({
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
                    return this.props = t, this.classes = r.classes || "jbg", e === "Error" ? this.content = yZ : e === "Options" ? this.content = wZ : this.content = e, new Promise(n => {
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

    function CZ(e, t, r, n, s, o) {
        return W(), fn(wc, {
            name: "modal-transition"
        }, {
            default: Ih(() => [e.props ? (W(), z("div", {
                key: 0,
                class: xe(["modal", e.classes]),
                onKeyup: t[0] || (t[0] = XE((...l) => e.onBackgroundClick && e.onBackgroundClick(...l), ["esc"])),
                onClick: t[1] || (t[1] = Zt((...l) => e.onBackgroundClick && e.onBackgroundClick(...l), ["self"]))
            }, [e.content ? (W(), fn(Ec(e.content), fo({
                key: 0,
                class: "content"
            }, e.props, {
                onResolve: e.onResolve
            }), null, 16, ["onResolve"])) : Se("", !0)], 34)) : Se("", !0)]),
            _: 1
        })
    }
    const IZ = ct($Z, [
            ["render", CZ],
            ["__scopeId", "data-v-dc92e8d3"]
        ]),
        AZ = {
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
                e.component("Modal", IZ), e.config.globalProperties.$showModal = r, e.config.globalProperties.$registerModal = n
            }
        },
        NZ = et({
            setup() {
                return {
                    announcment: Ji(Eo.textDescriptions.announcement)
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
        PZ = {
            class: "text-descriptions",
            role: "log",
            "aria-atomic": "false",
            "aria-relevant": "additions",
            "aria-live": "polite"
        };

    function RZ(e, t, r, n, s, o) {
        return W(), z("div", PZ, [(W(!0), z(ze, null, Or(e.lines, l => (W(), z("p", {
            key: l.id
        }, rt(l.text), 1))), 128))])
    }
    const LZ = ct(NZ, [
            ["render", RZ]
        ]),
        bb = on(""),
        kZ = {
            install: e => {
                if (e.config.globalProperties.$announce) return;
                e.provide(Eo.textDescriptions.announcement, kr(() => bb.value));
                const t = r => {
                    bb.value = r
                };
                e.component("TextDescriptions", LZ), e.config.globalProperties.$announce = t
            }
        },
        xZ = {
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
        DZ = {
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
    const ah = typeof window < "u",
        MZ = typeof Symbol == "function" && typeof Symbol.toStringTag == "symbol",
        Si = e => MZ ? Symbol(e) : e,
        FZ = (e, t, r) => BZ({
            l: e,
            k: t,
            s: r
        }),
        BZ = e => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"),
        Ut = e => typeof e == "number" && isFinite(e),
        UZ = e => Mp(e) === "[object Date]",
        gi = e => Mp(e) === "[object RegExp]",
        Jc = e => Ue(e) && Object.keys(e).length === 0;

    function jZ(e, t) {
        typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack))
    }
    const er = Object.assign;

    function Eb(e) {
        return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
    }
    const GZ = Object.prototype.hasOwnProperty;

    function Dp(e, t) {
        return GZ.call(e, t)
    }
    const yt = Array.isArray,
        Rt = e => typeof e == "function",
        ye = e => typeof e == "string",
        Je = e => typeof e == "boolean",
        _t = e => e !== null && typeof e == "object",
        fw = Object.prototype.toString,
        Mp = e => fw.call(e),
        Ue = e => Mp(e) === "[object Object]",
        WZ = e => e == null ? "" : yt(e) || Ue(e) && e.toString === fw ? JSON.stringify(e, null, 2) : String(e);
    /*!
     * message-compiler v9.2.2
     * (c) 2022 kazuya kawaguchi
     * Released under the MIT License.
     */
    const nt = {
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

    function Qc(e, t, r = {}) {
        const {
            domain: n,
            messages: s,
            args: o
        } = r, l = e, u = new SyntaxError(String(l));
        return u.code = e, t && (u.location = t), u.domain = n, u
    }

    function HZ(e) {
        throw e
    }

    function KZ(e, t, r) {
        return {
            line: e,
            column: t,
            offset: r
        }
    }

    function oh(e, t, r) {
        const n = {
            start: e,
            end: t
        };
        return r != null && (n.source = r), n
    }
    const kn = " ",
        VZ = "\r",
        gr = `
`,
        qZ = String.fromCharCode(8232),
        YZ = String.fromCharCode(8233);

    function zZ(e) {
        const t = e;
        let r = 0,
            n = 1,
            s = 1,
            o = 0;
        const l = oe => t[oe] === VZ && t[oe + 1] === gr,
            u = oe => t[oe] === gr,
            f = oe => t[oe] === YZ,
            h = oe => t[oe] === qZ,
            g = oe => l(oe) || u(oe) || f(oe) || h(oe),
            _ = () => r,
            E = () => n,
            $ = () => s,
            L = () => o,
            M = oe => l(oe) || f(oe) || h(oe) ? gr : t[oe],
            U = () => M(r),
            C = () => M(r + o);

        function V() {
            return o = 0, g(r) && (n++, s = 0), l(r) && r++, r++, s++, t[r]
        }

        function X() {
            return l(r + o) && o++, o++, t[r + o]
        }

        function G() {
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
            peekOffset: L,
            charAt: M,
            currentChar: U,
            currentPeek: C,
            next: V,
            peek: X,
            reset: G,
            resetPeek: j,
            skipToPeek: Q
        }
    }
    const ti = void 0,
        Tb = "'",
        XZ = "tokenizer";

    function JZ(e, t = {}) {
        const r = t.location !== !1,
            n = zZ(e),
            s = () => n.index(),
            o = () => KZ(n.line(), n.column(), n.index()),
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
                const Y = oh(B.startLoc, p),
                    ce = Qc(m, Y, {
                        domain: XZ,
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
            return r && (D.loc = oh(m.startLoc, m.endLoc)), O != null && (D.value = O), D
        }
        const $ = m => E(m, 14);

        function L(m, p) {
            return m.currentChar() === p ? (m.next(), p) : (_(nt.EXPECTED_TOKEN, o(), 0, p), "")
        }

        function M(m) {
            let p = "";
            for (; m.currentPeek() === kn || m.currentPeek() === gr;) p += m.currentPeek(), m.peek();
            return p
        }

        function U(m) {
            const p = M(m);
            return m.skipToPeek(), p
        }

        function C(m) {
            if (m === ti) return !1;
            const p = m.charCodeAt(0);
            return p >= 97 && p <= 122 || p >= 65 && p <= 90 || p === 95
        }

        function V(m) {
            if (m === ti) return !1;
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

        function G(m, p) {
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
            const D = m.currentPeek() === Tb;
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
                    const Y = m.currentPeek();
                    return Y === "{" ? C(m.peek()) : Y === "@" || Y === "%" || Y === "|" || Y === ":" || Y === "." || Y === kn || !Y ? !1 : Y === gr ? (m.peek(), D()) : C(Y)
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
            const O = (B = !1, Y = "", ce = !1) => {
                    const se = m.currentPeek();
                    return se === "{" ? Y === "%" ? !1 : B : se === "@" || !se ? Y === "%" ? !0 : B : se === "%" ? (m.peek(), O(B, "%", !0)) : se === "|" ? Y === "%" || ce ? !0 : !(Y === kn || Y === gr) : se === kn ? (m.peek(), O(!0, kn, ce)) : se === gr ? (m.peek(), O(!0, gr, ce)) : !0
                },
                D = O();
            return p && m.resetPeek(), D
        }

        function $e(m, p) {
            const O = m.currentChar();
            return O === ti ? ti : p(O) ? (m.next(), O) : null
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
            return p !== "%" && _(nt.EXPECTED_TOKEN, o(), 0, p), m.next(), "%"
        }

        function Oe(m) {
            let p = "";
            for (;;) {
                const O = m.currentChar();
                if (O === "{" || O === "}" || O === "@" || O === "|" || !O) break;
                if (O === "%")
                    if (fe(m)) p += O, m.next();
                    else break;
                else if (O === kn || O === gr)
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
            return m.currentChar() === ti && _(nt.UNTERMINATED_CLOSING_BRACE, o(), 0), O
        }

        function Ge(m) {
            U(m);
            let p = "";
            return m.currentChar() === "-" ? (m.next(), p += `-${be(m)}`) : p += be(m), m.currentChar() === ti && _(nt.UNTERMINATED_CLOSING_BRACE, o(), 0), p
        }

        function tt(m) {
            U(m), L(m, "'");
            let p = "",
                O = "";
            const D = Y => Y !== Tb && Y !== gr;
            for (; p = $e(m, D);) p === "\\" ? O += Ct(m) : O += p;
            const B = m.currentChar();
            return B === gr || B === ti ? (_(nt.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, o(), 0), B === gr && (m.next(), L(m, "'")), O) : (L(m, "'"), O)
        }

        function Ct(m) {
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
                    return _(nt.UNKNOWN_ESCAPE_SEQUENCE, o(), 0, p), ""
            }
        }

        function $r(m, p, O) {
            L(m, p);
            let D = "";
            for (let B = 0; B < O; B++) {
                const Y = de(m);
                if (!Y) {
                    _(nt.INVALID_UNICODE_ESCAPE_SEQUENCE, o(), 0, `\\${p}${D}${m.currentChar()}`);
                    break
                }
                D += Y
            }
            return `\\${p}${D}`
        }

        function rr(m) {
            U(m);
            let p = "",
                O = "";
            const D = B => B !== "{" && B !== "}" && B !== kn && B !== gr;
            for (; p = $e(m, D);) O += p;
            return O
        }

        function mr(m) {
            let p = "",
                O = "";
            for (; p = F(m);) O += p;
            return O
        }

        function at(m) {
            const p = (O = !1, D) => {
                const B = m.currentChar();
                return B === "{" || B === "%" || B === "@" || B === "|" || !B || B === kn ? D : B === gr ? (D += B, m.next(), p(O, D)) : (D += B, m.next(), p(!0, D))
            };
            return p(!1, "")
        }

        function Tt(m) {
            U(m);
            const p = L(m, "|");
            return U(m), p
        }

        function ot(m, p) {
            let O = null;
            switch (m.currentChar()) {
                case "{":
                    return p.braceNest >= 1 && _(nt.NOT_ALLOW_NEST_PLACEHOLDER, o(), 0), m.next(), O = E(p, 2, "{"), U(m), p.braceNest++, O;
                case "}":
                    return p.braceNest > 0 && p.currentType === 2 && _(nt.EMPTY_PLACEHOLDER, o(), 0), m.next(), O = E(p, 3, "}"), p.braceNest--, p.braceNest > 0 && U(m), p.inLinked && p.braceNest === 0 && (p.inLinked = !1), O;
                case "@":
                    return p.braceNest > 0 && _(nt.UNTERMINATED_CLOSING_BRACE, o(), 0), O = kt(m, p) || $(p), p.braceNest = 0, O;
                default:
                    let B = !0,
                        Y = !0,
                        ce = !0;
                    if (Ae(m)) return p.braceNest > 0 && _(nt.UNTERMINATED_CLOSING_BRACE, o(), 0), O = E(p, 1, Tt(m)), p.braceNest = 0, p.inLinked = !1, O;
                    if (p.braceNest > 0 && (p.currentType === 5 || p.currentType === 6 || p.currentType === 7)) return _(nt.UNTERMINATED_CLOSING_BRACE, o(), 0), p.braceNest = 0, Ht(m, p);
                    if (B = X(m, p)) return O = E(p, 5, Fe(m)), U(m), O;
                    if (Y = G(m, p)) return O = E(p, 6, Ge(m)), U(m), O;
                    if (ce = j(m, p)) return O = E(p, 7, tt(m)), U(m), O;
                    if (!B && !Y && !ce) return O = E(p, 13, rr(m)), _(nt.INVALID_TOKEN_IN_PLACEHOLDER, o(), 0, O.value), U(m), O;
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
            switch ((O === 8 || O === 9 || O === 12 || O === 10) && (B === gr || B === kn) && _(nt.INVALID_LINKED_FORMAT, o(), 0), B) {
                case "@":
                    return m.next(), D = E(p, 8, "@"), p.inLinked = !0, D;
                case ".":
                    return U(m), m.next(), E(p, 9, ".");
                case ":":
                    return U(m), m.next(), E(p, 10, ":");
                default:
                    return Ae(m) ? (D = E(p, 1, Tt(m)), p.braceNest = 0, p.inLinked = !1, D) : Q(m, p) || le(m, p) ? (U(m), kt(m, p)) : oe(m, p) ? (U(m), E(p, 12, mr(m))) : ue(m, p) ? (U(m), B === "{" ? ot(m, p) || D : E(p, 11, at(m))) : (O === 8 && _(nt.INVALID_LINKED_FORMAT, o(), 0), p.braceNest = 0, p.inLinked = !1, Ht(m, p))
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
                    return _(nt.UNBALANCED_CLOSING_BRACE, o(), 0), m.next(), E(p, 3, "}");
                case "@":
                    return kt(m, p) || $(p);
                default:
                    if (Ae(m)) return O = E(p, 1, Tt(m)), p.braceNest = 0, p.inLinked = !1, O;
                    const {
                        isModulo: B, hasSpace: Y
                    } = Ce(m);
                    if (B) return Y ? E(p, 0, Oe(m)) : E(p, 4, ve(m));
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
            return f.lastType = m, f.lastOffset = p, f.lastStartLoc = O, f.lastEndLoc = D, f.offset = s(), f.startLoc = o(), n.currentChar() === ti ? E(f, 14) : Ht(n, f)
        }
        return {
            nextToken: xt,
            currentOffset: s,
            currentPosition: o,
            context: h
        }
    }
    const QZ = "parser",
        ZZ = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;

    function eee(e, t, r) {
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

    function tee(e = {}) {
        const t = e.location !== !1,
            {
                onError: r
            } = e;

        function n(C, V, X, G, ...j) {
            const Q = C.currentPosition();
            if (Q.offset += G, Q.column += G, r) {
                const oe = oh(X, Q),
                    le = Qc(V, oe, {
                        domain: QZ,
                        args: j
                    });
                r(le)
            }
        }

        function s(C, V, X) {
            const G = {
                type: C,
                start: V,
                end: V
            };
            return t && (G.loc = {
                start: X,
                end: X
            }), G
        }

        function o(C, V, X, G) {
            C.end = V, G && (C.type = G), t && C.loc && (C.loc.end = X)
        }

        function l(C, V) {
            const X = C.context(),
                G = s(3, X.offset, X.startLoc);
            return G.value = V, o(G, C.currentOffset(), C.currentPosition()), G
        }

        function u(C, V) {
            const X = C.context(),
                {
                    lastOffset: G,
                    lastStartLoc: j
                } = X,
                Q = s(5, G, j);
            return Q.index = parseInt(V, 10), C.nextToken(), o(Q, C.currentOffset(), C.currentPosition()), Q
        }

        function f(C, V) {
            const X = C.context(),
                {
                    lastOffset: G,
                    lastStartLoc: j
                } = X,
                Q = s(4, G, j);
            return Q.key = V, C.nextToken(), o(Q, C.currentOffset(), C.currentPosition()), Q
        }

        function h(C, V) {
            const X = C.context(),
                {
                    lastOffset: G,
                    lastStartLoc: j
                } = X,
                Q = s(9, G, j);
            return Q.value = V.replace(ZZ, eee), C.nextToken(), o(Q, C.currentOffset(), C.currentPosition()), Q
        }

        function g(C) {
            const V = C.nextToken(),
                X = C.context(),
                {
                    lastOffset: G,
                    lastStartLoc: j
                } = X,
                Q = s(8, G, j);
            return V.type !== 12 ? (n(C, nt.UNEXPECTED_EMPTY_LINKED_MODIFIER, X.lastStartLoc, 0), Q.value = "", o(Q, G, j), {
                nextConsumeToken: V,
                node: Q
            }) : (V.value == null && n(C, nt.UNEXPECTED_LEXICAL_ANALYSIS, X.lastStartLoc, 0, _n(V)), Q.value = V.value || "", o(Q, C.currentOffset(), C.currentPosition()), {
                node: Q
            })
        }

        function _(C, V) {
            const X = C.context(),
                G = s(7, X.offset, X.startLoc);
            return G.value = V, o(G, C.currentOffset(), C.currentPosition()), G
        }

        function E(C) {
            const V = C.context(),
                X = s(6, V.offset, V.startLoc);
            let G = C.nextToken();
            if (G.type === 9) {
                const j = g(C);
                X.modifier = j.node, G = j.nextConsumeToken || C.nextToken()
            }
            switch (G.type !== 10 && n(C, nt.UNEXPECTED_LEXICAL_ANALYSIS, V.lastStartLoc, 0, _n(G)), G = C.nextToken(), G.type === 2 && (G = C.nextToken()), G.type) {
                case 11:
                    G.value == null && n(C, nt.UNEXPECTED_LEXICAL_ANALYSIS, V.lastStartLoc, 0, _n(G)), X.key = _(C, G.value || "");
                    break;
                case 5:
                    G.value == null && n(C, nt.UNEXPECTED_LEXICAL_ANALYSIS, V.lastStartLoc, 0, _n(G)), X.key = f(C, G.value || "");
                    break;
                case 6:
                    G.value == null && n(C, nt.UNEXPECTED_LEXICAL_ANALYSIS, V.lastStartLoc, 0, _n(G)), X.key = u(C, G.value || "");
                    break;
                case 7:
                    G.value == null && n(C, nt.UNEXPECTED_LEXICAL_ANALYSIS, V.lastStartLoc, 0, _n(G)), X.key = h(C, G.value || "");
                    break;
                default:
                    n(C, nt.UNEXPECTED_EMPTY_LINKED_KEY, V.lastStartLoc, 0);
                    const j = C.context(),
                        Q = s(7, j.offset, j.startLoc);
                    return Q.value = "", o(Q, j.offset, j.startLoc), X.key = Q, o(X, j.offset, j.startLoc), {
                        nextConsumeToken: G,
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
                G = V.currentType === 1 ? V.endLoc : V.startLoc,
                j = s(2, X, G);
            j.items = [];
            let Q = null;
            do {
                const ue = Q || C.nextToken();
                switch (Q = null, ue.type) {
                    case 0:
                        ue.value == null && n(C, nt.UNEXPECTED_LEXICAL_ANALYSIS, V.lastStartLoc, 0, _n(ue)), j.items.push(l(C, ue.value || ""));
                        break;
                    case 6:
                        ue.value == null && n(C, nt.UNEXPECTED_LEXICAL_ANALYSIS, V.lastStartLoc, 0, _n(ue)), j.items.push(u(C, ue.value || ""));
                        break;
                    case 5:
                        ue.value == null && n(C, nt.UNEXPECTED_LEXICAL_ANALYSIS, V.lastStartLoc, 0, _n(ue)), j.items.push(f(C, ue.value || ""));
                        break;
                    case 7:
                        ue.value == null && n(C, nt.UNEXPECTED_LEXICAL_ANALYSIS, V.lastStartLoc, 0, _n(ue)), j.items.push(h(C, ue.value || ""));
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

        function L(C, V, X, G) {
            const j = C.context();
            let Q = G.items.length === 0;
            const oe = s(1, V, X);
            oe.cases = [], oe.cases.push(G);
            do {
                const le = $(C);
                Q || (Q = le.items.length === 0), oe.cases.push(le)
            } while (j.currentType !== 14);
            return Q && n(C, nt.MUST_HAVE_MESSAGES_IN_PLURAL, X, 0), o(oe, C.currentOffset(), C.currentPosition()), oe
        }

        function M(C) {
            const V = C.context(),
                {
                    offset: X,
                    startLoc: G
                } = V,
                j = $(C);
            return V.currentType === 14 ? j : L(C, X, G, j)
        }

        function U(C) {
            const V = JZ(C, er({}, e)),
                X = V.context(),
                G = s(0, X.offset, X.startLoc);
            return t && G.loc && (G.loc.source = C), G.body = M(V), X.currentType !== 14 && n(V, nt.UNEXPECTED_LEXICAL_ANALYSIS, X.lastStartLoc, 0, C[X.offset] || ""), o(G, V.currentOffset(), V.currentPosition()), G
        }
        return {
            parse: U
        }
    }

    function _n(e) {
        if (e.type === 14) return "EOF";
        const t = (e.value || "").replace(/\r?\n/gu, "\\n");
        return t.length > 10 ? t.slice(0, 9) + "\u2026" : t
    }

    function ree(e, t = {}) {
        const r = {
            ast: e,
            helpers: new Set
        };
        return {
            context: () => r,
            helper: o => (r.helpers.add(o), o)
        }
    }

    function Sb(e, t) {
        for (let r = 0; r < e.length; r++) Fp(e[r], t)
    }

    function Fp(e, t) {
        switch (e.type) {
            case 1:
                Sb(e.cases, t), t.helper("plural");
                break;
            case 2:
                Sb(e.items, t);
                break;
            case 6:
                Fp(e.key, t), t.helper("linked"), t.helper("type");
                break;
            case 5:
                t.helper("interpolate"), t.helper("list");
                break;
            case 4:
                t.helper("interpolate"), t.helper("named");
                break
        }
    }

    function nee(e, t = {}) {
        const r = ree(e);
        r.helper("normalize"), e.body && Fp(e.body, r);
        const n = r.context();
        e.helpers = Array.from(n.helpers)
    }

    function iee(e, t) {
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

    function see(e, t) {
        const {
            helper: r
        } = e;
        e.push(`${r("linked")}(`), Zs(e, t.key), t.modifier ? (e.push(", "), Zs(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")")
    }

    function aee(e, t) {
        const {
            helper: r,
            needIndent: n
        } = e;
        e.push(`${r("normalize")}([`), e.indent(n());
        const s = t.items.length;
        for (let o = 0; o < s && (Zs(e, t.items[o]), o !== s - 1); o++) e.push(", ");
        e.deindent(n()), e.push("])")
    }

    function oee(e, t) {
        const {
            helper: r,
            needIndent: n
        } = e;
        if (t.cases.length > 1) {
            e.push(`${r("plural")}([`), e.indent(n());
            const s = t.cases.length;
            for (let o = 0; o < s && (Zs(e, t.cases[o]), o !== s - 1); o++) e.push(", ");
            e.deindent(n()), e.push("])")
        }
    }

    function lee(e, t) {
        t.body ? Zs(e, t.body) : e.push("null")
    }

    function Zs(e, t) {
        const {
            helper: r
        } = e;
        switch (t.type) {
            case 0:
                lee(e, t);
                break;
            case 1:
                oee(e, t);
                break;
            case 2:
                aee(e, t);
                break;
            case 6:
                see(e, t);
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
    const cee = (e, t = {}) => {
        const r = ye(t.mode) ? t.mode : "normal",
            n = ye(t.filename) ? t.filename : "message.intl",
            s = !!t.sourceMap,
            o = t.breakLineCode != null ? t.breakLineCode : r === "arrow" ? ";" : `
`,
            l = t.needIndent ? t.needIndent : r !== "arrow",
            u = e.helpers || [],
            f = iee(e, {
                mode: r,
                filename: n,
                sourceMap: s,
                breakLineCode: o,
                needIndent: l
            });
        f.push(r === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), f.indent(l), u.length > 0 && (f.push(`const { ${u.map(_=>`${_}: _${_}`).join(", ")} } = ctx`), f.newline()), f.push("return "), Zs(f, e), f.deindent(l), f.push("}");
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

    function uee(e, t = {}) {
        const r = er({}, t),
            s = tee(r).parse(e);
        return nee(s, r), cee(s, r)
    }
    /*!
     * devtools-if v9.2.2
     * (c) 2022 kazuya kawaguchi
     * Released under the MIT License.
     */
    const fee = {
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
    const dee = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;

    function hee(e) {
        return dee.test(e)
    }

    function pee(e) {
        const t = e.charCodeAt(0),
            r = e.charCodeAt(e.length - 1);
        return t === r && (t === 34 || t === 39) ? e.slice(1, -1) : e
    }

    function gee(e) {
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

    function mee(e) {
        const t = e.trim();
        return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : hee(t) ? pee(t) : "*" + t
    }

    function vee(e) {
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
                if (s = 0, l === void 0 || (l = mee(l), l === !1)) return !1;
                E[1]()
            }
        };

        function $() {
            const L = e[r + 1];
            if (n === 5 && L === "'" || n === 6 && L === '"') return r++, u = "\\" + L, E[0](), !0
        }
        for (; n !== null;)
            if (r++, o = e[r], !(o === "\\" && $())) {
                if (f = gee(o), _ = Oi[n], h = _[f] || _.l || 8, h === 8 || (n = h[0], h[1] !== void 0 && (g = E[h[1]], g && (u = o, g() === !1)))) return;
                if (n === 7) return t
            }
    }
    const Ob = new Map;

    function yee(e, t) {
        return _t(e) ? e[t] : null
    }

    function _ee(e, t) {
        if (!_t(e)) return null;
        let r = Ob.get(t);
        if (r || (r = vee(t), r && Ob.set(t, r)), !r) return null;
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
    const bee = e => e,
        Eee = e => "",
        Tee = "text",
        See = e => e.length === 0 ? "" : e.join(""),
        Oee = WZ;

    function wb(e, t) {
        return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0
    }

    function wee(e) {
        const t = Ut(e.pluralIndex) ? e.pluralIndex : -1;
        return e.named && (Ut(e.named.count) || Ut(e.named.n)) ? Ut(e.named.count) ? e.named.count : Ut(e.named.n) ? e.named.n : t : t
    }

    function $ee(e, t) {
        t.count || (t.count = e), t.n || (t.n = e)
    }

    function Cee(e = {}) {
        const t = e.locale,
            r = wee(e),
            n = _t(e.pluralRules) && ye(t) && Rt(e.pluralRules[t]) ? e.pluralRules[t] : wb,
            s = _t(e.pluralRules) && ye(t) && Rt(e.pluralRules[t]) ? wb : void 0,
            o = C => C[n(r, C.length, s)],
            l = e.list || [],
            u = C => l[C],
            f = e.named || {};
        Ut(e.pluralIndex) && $ee(r, f);
        const h = C => f[C];

        function g(C) {
            const V = Rt(e.messages) ? e.messages(C) : _t(e.messages) ? e.messages[C] : !1;
            return V || (e.parent ? e.parent.message(C) : Eee)
        }
        const _ = C => e.modifiers ? e.modifiers[C] : bee,
            E = Ue(e.processor) && Rt(e.processor.normalize) ? e.processor.normalize : See,
            $ = Ue(e.processor) && Rt(e.processor.interpolate) ? e.processor.interpolate : Oee,
            L = Ue(e.processor) && ye(e.processor.type) ? e.processor.type : Tee,
            U = {
                list: u,
                named: h,
                plural: o,
                linked: (C, ...V) => {
                    const [X, G] = V;
                    let j = "text",
                        Q = "";
                    V.length === 1 ? _t(X) ? (Q = X.modifier || Q, j = X.type || j) : ye(X) && (Q = X || Q) : V.length === 2 && (ye(X) && (Q = X || Q), ye(G) && (j = G || j));
                    let oe = g(C)(U);
                    return j === "vnode" && yt(oe) && Q && (oe = oe[0]), Q ? _(Q)(oe, j) : oe
                },
                message: g,
                type: L,
                interpolate: $,
                normalize: E
            };
        return U
    }
    let Iee = null;
    fee.FunctionTranslate;

    function Aee(e) {
        return t => Iee
    }
    const Nee = {
        NOT_FOUND_KEY: 1,
        FALLBACK_TO_TRANSLATE: 2,
        CANNOT_FORMAT_NUMBER: 3,
        FALLBACK_TO_NUMBER_FORMAT: 4,
        CANNOT_FORMAT_DATE: 5,
        FALLBACK_TO_DATE_FORMAT: 6,
        __EXTEND_POINT__: 7
    };

    function Pee(e, t, r) {
        return [...new Set([r, ...yt(t) ? t : _t(t) ? Object.keys(t) : ye(t) ? [t] : [r]])]
    }

    function dw(e, t, r) {
        const n = ye(r) ? r : Oo,
            s = e;
        s.__localeChainCache || (s.__localeChainCache = new Map);
        let o = s.__localeChainCache.get(n);
        if (!o) {
            o = [];
            let l = [r];
            for (; yt(l);) l = $b(o, l, t);
            const u = yt(t) || !Ue(t) ? t : t.default ? t.default : null;
            l = ye(u) ? [u] : u, yt(l) && $b(o, l, !1), s.__localeChainCache.set(n, o)
        }
        return o
    }

    function $b(e, t, r) {
        let n = !0;
        for (let s = 0; s < t.length && Je(n); s++) {
            const o = t[s];
            ye(o) && (n = Ree(e, t[s], r))
        }
        return n
    }

    function Ree(e, t, r) {
        let n;
        const s = t.split("-");
        do {
            const o = s.join("-");
            n = Lee(e, o, r), s.splice(-1, 1)
        } while (s.length && n === !0);
        return n
    }

    function Lee(e, t, r) {
        let n = !1;
        if (!e.includes(t) && (n = !0, t)) {
            n = t[t.length - 1] !== "!";
            const s = t.replace(/!/g, "");
            e.push(s), (yt(r) || Ue(r)) && r[s] && (n = r[s])
        }
        return n
    }
    const kee = "9.2.2",
        Zc = -1,
        Oo = "en-US",
        Cb = "",
        Ib = e => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;

    function xee() {
        return {
            upper: (e, t) => t === "text" && ye(e) ? e.toUpperCase() : t === "vnode" && _t(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
            lower: (e, t) => t === "text" && ye(e) ? e.toLowerCase() : t === "vnode" && _t(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
            capitalize: (e, t) => t === "text" && ye(e) ? Ib(e) : t === "vnode" && _t(e) && "__v_isVNode" in e ? Ib(e.children) : e
        }
    }
    let hw;

    function Dee(e) {
        hw = e
    }
    let pw;

    function Mee(e) {
        pw = e
    }
    let gw;

    function Fee(e) {
        gw = e
    }
    let Ab = 0;

    function Bee(e = {}) {
        const t = ye(e.version) ? e.version : kee,
            r = ye(e.locale) ? e.locale : Oo,
            n = yt(e.fallbackLocale) || Ue(e.fallbackLocale) || ye(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : r,
            s = Ue(e.messages) ? e.messages : {
                [r]: {}
            },
            o = Ue(e.datetimeFormats) ? e.datetimeFormats : {
                [r]: {}
            },
            l = Ue(e.numberFormats) ? e.numberFormats : {
                [r]: {}
            },
            u = er({}, e.modifiers || {}, xee()),
            f = e.pluralRules || {},
            h = Rt(e.missing) ? e.missing : null,
            g = Je(e.missingWarn) || gi(e.missingWarn) ? e.missingWarn : !0,
            _ = Je(e.fallbackWarn) || gi(e.fallbackWarn) ? e.fallbackWarn : !0,
            E = !!e.fallbackFormat,
            $ = !!e.unresolving,
            L = Rt(e.postTranslation) ? e.postTranslation : null,
            M = Ue(e.processor) ? e.processor : null,
            U = Je(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
            C = !!e.escapeParameter,
            V = Rt(e.messageCompiler) ? e.messageCompiler : hw,
            X = Rt(e.messageResolver) ? e.messageResolver : pw || yee,
            G = Rt(e.localeFallbacker) ? e.localeFallbacker : gw || Pee,
            j = _t(e.fallbackContext) ? e.fallbackContext : void 0,
            Q = Rt(e.onWarn) ? e.onWarn : jZ,
            oe = e,
            le = _t(oe.__datetimeFormatters) ? oe.__datetimeFormatters : new Map,
            ue = _t(oe.__numberFormatters) ? oe.__numberFormatters : new Map,
            Ae = _t(oe.__meta) ? oe.__meta : {};
        Ab++;
        const Ce = {
            version: t,
            cid: Ab,
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
            postTranslation: L,
            processor: M,
            warnHtmlMessage: U,
            escapeParameter: C,
            messageCompiler: V,
            messageResolver: X,
            localeFallbacker: G,
            fallbackContext: j,
            onWarn: Q,
            __meta: Ae
        };
        return Ce.datetimeFormats = o, Ce.numberFormats = l, Ce.__datetimeFormatters = le, Ce.__numberFormatters = ue, Ce
    }

    function Bp(e, t, r, n, s) {
        const {
            missing: o,
            onWarn: l
        } = e;
        if (o !== null) {
            const u = o(e, r, t, s);
            return ye(u) ? u : t
        } else return t
    }

    function Ra(e, t, r) {
        const n = e;
        n.__localeChainCache = new Map, e.localeFallbacker(e, r, t)
    }
    const Uee = e => e;
    let Nb = Object.create(null);

    function jee(e, t = {}) {
        {
            const n = (t.onCacheKey || Uee)(e),
                s = Nb[n];
            if (s) return s;
            let o = !1;
            const l = t.onError || HZ;
            t.onError = h => {
                o = !0, l(h)
            };
            const {
                code: u
            } = uee(e, t), f = new Function(`return ${u}`)();
            return o ? f : Nb[n] = f
        }
    }
    let mw = nt.__EXTEND_POINT__;
    const od = () => ++mw,
        ks = {
            INVALID_ARGUMENT: mw,
            INVALID_DATE_ARGUMENT: od(),
            INVALID_ISO_DATE_ARGUMENT: od(),
            __EXTEND_POINT__: od()
        };

    function xs(e) {
        return Qc(e, null, void 0)
    }
    const Pb = () => "",
        is = e => Rt(e);

    function Rb(e, ...t) {
        const {
            fallbackFormat: r,
            postTranslation: n,
            unresolving: s,
            messageCompiler: o,
            fallbackLocale: l,
            messages: u
        } = e, [f, h] = lh(...t), g = Je(h.missingWarn) ? h.missingWarn : e.missingWarn, _ = Je(h.fallbackWarn) ? h.fallbackWarn : e.fallbackWarn, E = Je(h.escapeParameter) ? h.escapeParameter : e.escapeParameter, $ = !!h.resolvedMessage, L = ye(h.default) || Je(h.default) ? Je(h.default) ? o ? f : () => f : h.default : r ? o ? f : () => f : "", M = r || L !== "", U = ye(h.locale) ? h.locale : e.locale;
        E && Gee(h);
        let [C, V, X] = $ ? [f, U, u[U] || {}] : vw(e, f, U, l, _, g), G = C, j = f;
        if (!$ && !(ye(G) || is(G)) && M && (G = L, j = G), !$ && (!(ye(G) || is(G)) || !ye(V))) return s ? Zc : f;
        let Q = !1;
        const oe = () => {
                Q = !0
            },
            le = is(G) ? G : yw(e, f, V, G, j, oe);
        if (Q) return G;
        const ue = Kee(e, V, X, h),
            Ae = Cee(ue),
            Ce = Wee(e, le, Ae);
        return n ? n(Ce, f) : Ce
    }

    function Gee(e) {
        yt(e.list) ? e.list = e.list.map(t => ye(t) ? Eb(t) : t) : _t(e.named) && Object.keys(e.named).forEach(t => {
            ye(e.named[t]) && (e.named[t] = Eb(e.named[t]))
        })
    }

    function vw(e, t, r, n, s, o) {
        const {
            messages: l,
            onWarn: u,
            messageResolver: f,
            localeFallbacker: h
        } = e, g = h(e, n, r);
        let _ = {},
            E, $ = null;
        const L = "translate";
        for (let M = 0; M < g.length && (E = g[M], _ = l[E] || {}, ($ = f(_, t)) === null && ($ = _[t]), !(ye($) || Rt($))); M++) {
            const U = Bp(e, t, E, o, L);
            U !== t && ($ = U)
        }
        return [$, E, _]
    }

    function yw(e, t, r, n, s, o) {
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
        const f = l(n, Hee(e, r, s, n, u, o));
        return f.locale = r, f.key = t, f.source = n, f
    }

    function Wee(e, t, r) {
        return t(r)
    }

    function lh(...e) {
        const [t, r, n] = e, s = {};
        if (!ye(t) && !Ut(t) && !is(t)) throw xs(ks.INVALID_ARGUMENT);
        const o = Ut(t) ? String(t) : (is(t), t);
        return Ut(r) ? s.plural = r : ye(r) ? s.default = r : Ue(r) && !Jc(r) ? s.named = r : yt(r) && (s.list = r), Ut(n) ? s.plural = n : ye(n) ? s.default = n : Ue(n) && er(s, n), [o, s]
    }

    function Hee(e, t, r, n, s, o) {
        return {
            warnHtmlMessage: s,
            onError: l => {
                throw o && o(l), l
            },
            onCacheKey: l => FZ(t, r, l)
        }
    }

    function Kee(e, t, r, n) {
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
                let L = l(r, $);
                if (L == null && g) {
                    const [, , M] = vw(g, $, t, u, f, h);
                    L = l(M, $)
                }
                if (ye(L)) {
                    let M = !1;
                    const C = yw(e, $, t, L, $, () => {
                        M = !0
                    });
                    return M ? Pb : C
                } else return is(L) ? L : Pb
            }
        };
        return e.processor && (E.processor = e.processor), n.list && (E.list = n.list), n.named && (E.named = n.named), Ut(n.plural) && (E.pluralIndex = n.plural), E
    }

    function Lb(e, ...t) {
        const {
            datetimeFormats: r,
            unresolving: n,
            fallbackLocale: s,
            onWarn: o,
            localeFallbacker: l
        } = e, {
            __datetimeFormatters: u
        } = e, [f, h, g, _] = ch(...t), E = Je(g.missingWarn) ? g.missingWarn : e.missingWarn;
        Je(g.fallbackWarn) ? g.fallbackWarn : e.fallbackWarn;
        const $ = !!g.part,
            L = ye(g.locale) ? g.locale : e.locale,
            M = l(e, s, L);
        if (!ye(f) || f === "") return new Intl.DateTimeFormat(L, _).format(h);
        let U = {},
            C, V = null;
        const X = "datetime format";
        for (let Q = 0; Q < M.length && (C = M[Q], U = r[C] || {}, V = U[f], !Ue(V)); Q++) Bp(e, f, C, E, X);
        if (!Ue(V) || !ye(C)) return n ? Zc : f;
        let G = `${C}__${f}`;
        Jc(_) || (G = `${G}__${JSON.stringify(_)}`);
        let j = u.get(G);
        return j || (j = new Intl.DateTimeFormat(C, er({}, V, _)), u.set(G, j)), $ ? j.formatToParts(h) : j.format(h)
    }
    const _w = ["localeMatcher", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "formatMatcher", "hour12", "timeZone", "dateStyle", "timeStyle", "calendar", "dayPeriod", "numberingSystem", "hourCycle", "fractionalSecondDigits"];

    function ch(...e) {
        const [t, r, n, s] = e, o = {};
        let l = {},
            u;
        if (ye(t)) {
            const f = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
            if (!f) throw xs(ks.INVALID_ISO_DATE_ARGUMENT);
            const h = f[3] ? f[3].trim().startsWith("T") ? `${f[1].trim()}${f[3].trim()}` : `${f[1].trim()}T${f[3].trim()}` : f[1].trim();
            u = new Date(h);
            try {
                u.toISOString()
            } catch {
                throw xs(ks.INVALID_ISO_DATE_ARGUMENT)
            }
        } else if (UZ(t)) {
            if (isNaN(t.getTime())) throw xs(ks.INVALID_DATE_ARGUMENT);
            u = t
        } else if (Ut(t)) u = t;
        else throw xs(ks.INVALID_ARGUMENT);
        return ye(r) ? o.key = r : Ue(r) && Object.keys(r).forEach(f => {
            _w.includes(f) ? l[f] = r[f] : o[f] = r[f]
        }), ye(n) ? o.locale = n : Ue(n) && (l = n), Ue(s) && (l = s), [o.key || "", u, o, l]
    }

    function kb(e, t, r) {
        const n = e;
        for (const s in r) {
            const o = `${t}__${s}`;
            !n.__datetimeFormatters.has(o) || n.__datetimeFormatters.delete(o)
        }
    }

    function xb(e, ...t) {
        const {
            numberFormats: r,
            unresolving: n,
            fallbackLocale: s,
            onWarn: o,
            localeFallbacker: l
        } = e, {
            __numberFormatters: u
        } = e, [f, h, g, _] = uh(...t), E = Je(g.missingWarn) ? g.missingWarn : e.missingWarn;
        Je(g.fallbackWarn) ? g.fallbackWarn : e.fallbackWarn;
        const $ = !!g.part,
            L = ye(g.locale) ? g.locale : e.locale,
            M = l(e, s, L);
        if (!ye(f) || f === "") return new Intl.NumberFormat(L, _).format(h);
        let U = {},
            C, V = null;
        const X = "number format";
        for (let Q = 0; Q < M.length && (C = M[Q], U = r[C] || {}, V = U[f], !Ue(V)); Q++) Bp(e, f, C, E, X);
        if (!Ue(V) || !ye(C)) return n ? Zc : f;
        let G = `${C}__${f}`;
        Jc(_) || (G = `${G}__${JSON.stringify(_)}`);
        let j = u.get(G);
        return j || (j = new Intl.NumberFormat(C, er({}, V, _)), u.set(G, j)), $ ? j.formatToParts(h) : j.format(h)
    }
    const bw = ["localeMatcher", "style", "currency", "currencyDisplay", "currencySign", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "notation", "signDisplay", "unit", "unitDisplay", "roundingMode", "roundingPriority", "roundingIncrement", "trailingZeroDisplay"];

    function uh(...e) {
        const [t, r, n, s] = e, o = {};
        let l = {};
        if (!Ut(t)) throw xs(ks.INVALID_ARGUMENT);
        const u = t;
        return ye(r) ? o.key = r : Ue(r) && Object.keys(r).forEach(f => {
            bw.includes(f) ? l[f] = r[f] : o[f] = r[f]
        }), ye(n) ? o.locale = n : Ue(n) && (l = n), Ue(s) && (l = s), [o.key || "", u, o, l]
    }

    function Db(e, t, r) {
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
    const Vee = "9.2.2";
    Nee.__EXTEND_POINT__;
    let Ew = nt.__EXTEND_POINT__;
    const Er = () => ++Ew,
        Mt = {
            UNEXPECTED_RETURN_TYPE: Ew,
            INVALID_ARGUMENT: Er(),
            MUST_BE_CALL_SETUP_TOP: Er(),
            NOT_INSLALLED: Er(),
            NOT_AVAILABLE_IN_LEGACY_MODE: Er(),
            REQUIRED_VALUE: Er(),
            INVALID_VALUE: Er(),
            CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: Er(),
            NOT_INSLALLED_WITH_PROVIDE: Er(),
            UNEXPECTED_ERROR: Er(),
            NOT_COMPATIBLE_LEGACY_VUE_I18N: Er(),
            BRIDGE_SUPPORT_VUE_2_ONLY: Er(),
            MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: Er(),
            NOT_AVAILABLE_COMPOSITION_IN_LEGACY: Er(),
            __EXTEND_POINT__: Er()
        };

    function Gt(e, ...t) {
        return Qc(e, null, void 0)
    }
    const fh = Si("__transrateVNode"),
        dh = Si("__datetimeParts"),
        hh = Si("__numberParts"),
        Tw = Si("__setPluralRules");
    Si("__intlifyMeta");
    const Sw = Si("__injectWithOption");

    function ph(e) {
        if (!_t(e)) return e;
        for (const t in e)
            if (!!Dp(e, t))
                if (!t.includes(".")) _t(e[t]) && ph(e[t]);
                else {
                    const r = t.split("."),
                        n = r.length - 1;
                    let s = e;
                    for (let o = 0; o < n; o++) r[o] in s || (s[r[o]] = {}), s = s[r[o]];
                    s[r[n]] = e[t], delete e[t], _t(s[r[n]]) && ph(s[r[n]])
                } return e
    }

    function eu(e, t) {
        const {
            messages: r,
            __i18n: n,
            messageResolver: s,
            flatJson: o
        } = t, l = Ue(r) ? r : yt(n) ? {} : {
            [e]: {}
        };
        if (yt(n) && n.forEach(u => {
                if ("locale" in u && "resource" in u) {
                    const {
                        locale: f,
                        resource: h
                    } = u;
                    f ? (l[f] = l[f] || {}, qa(h, l[f])) : qa(h, l)
                } else ye(u) && qa(JSON.parse(u), l)
            }), s == null && o)
            for (const u in l) Dp(l, u) && ph(l[u]);
        return l
    }
    const Pl = e => !_t(e) || yt(e);

    function qa(e, t) {
        if (Pl(e) || Pl(t)) throw Gt(Mt.INVALID_VALUE);
        for (const r in e) Dp(e, r) && (Pl(e[r]) || Pl(t[r]) ? t[r] = e[r] : qa(e[r], t[r]))
    }

    function qee(e) {
        return e.type
    }

    function Ow(e, t, r) {
        let n = _t(t.messages) ? t.messages : {};
        "__i18nGlobal" in r && (n = eu(e.locale.value, {
            messages: n,
            __i18n: r.__i18nGlobal
        }));
        const s = Object.keys(n);
        s.length && s.forEach(o => {
            e.mergeLocaleMessage(o, n[o])
        }); {
            if (_t(t.datetimeFormats)) {
                const o = Object.keys(t.datetimeFormats);
                o.length && o.forEach(l => {
                    e.mergeDateTimeFormat(l, t.datetimeFormats[l])
                })
            }
            if (_t(t.numberFormats)) {
                const o = Object.keys(t.numberFormats);
                o.length && o.forEach(l => {
                    e.mergeNumberFormat(l, t.numberFormats[l])
                })
            }
        }
    }

    function Mb(e) {
        return wt(Tc, null, e, 0)
    }
    let Fb = 0;

    function Bb(e) {
        return (t, r, n, s) => e(r, n, ss() || void 0, s)
    }

    function Up(e = {}, t) {
        const {
            __root: r
        } = e, n = r === void 0;
        let s = Je(e.inheritLocale) ? e.inheritLocale : !0;
        const o = on(r && s ? r.locale.value : ye(e.locale) ? e.locale : Oo),
            l = on(r && s ? r.fallbackLocale.value : ye(e.fallbackLocale) || yt(e.fallbackLocale) || Ue(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : o.value),
            u = on(eu(o.value, e)),
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
            L = Rt(e.missing) ? e.missing : null,
            M = Rt(e.missing) ? Bb(e.missing) : null,
            U = Rt(e.postTranslation) ? e.postTranslation : null,
            C = r ? r.warnHtmlMessage : Je(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
            V = !!e.escapeParameter;
        const X = r ? r.modifiers : Ue(e.modifiers) ? e.modifiers : {};
        let G = e.pluralRules || r && r.pluralRules,
            j;
        j = (() => {
            const A = {
                version: Vee,
                locale: o.value,
                fallbackLocale: l.value,
                messages: u.value,
                modifiers: X,
                pluralRules: G,
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
            return A.datetimeFormats = f.value, A.numberFormats = h.value, A.__datetimeFormatters = Ue(j) ? j.__datetimeFormatters : void 0, A.__numberFormatters = Ue(j) ? j.__numberFormatters : void 0, Bee(A)
        })(), Ra(j, o.value, l.value);

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
                    l.value = A, j.fallbackLocale = l.value, Ra(j, o.value, A)
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
            return L
        }

        function de(A) {
            A !== null && (M = Bb(A)), L = A, j.missing = M
        }
        const be = (A, K, he, pe, Ne, De) => {
            oe();
            let w;
            if (w = A(j), Ut(w) && w === Zc) {
                const [T, P] = K();
                return r && E ? pe(r) : Ne(T)
            } else {
                if (De(w)) return w;
                throw Gt(Mt.UNEXPECTED_RETURN_TYPE)
            }
        };

        function ve(...A) {
            return be(K => Reflect.apply(Rb, null, [K, ...A]), () => lh(...A), "translate", K => Reflect.apply(K.t, K, [...A]), K => K, K => ye(K))
        }

        function Oe(...A) {
            const [K, he, pe] = A;
            if (pe && !_t(pe)) throw Gt(Mt.INVALID_ARGUMENT);
            return ve(K, he, er({
                resolvedMessage: !0
            }, pe || {}))
        }

        function Fe(...A) {
            return be(K => Reflect.apply(Lb, null, [K, ...A]), () => ch(...A), "datetime format", K => Reflect.apply(K.d, K, [...A]), () => Cb, K => ye(K))
        }

        function Ge(...A) {
            return be(K => Reflect.apply(xb, null, [K, ...A]), () => uh(...A), "number format", K => Reflect.apply(K.n, K, [...A]), () => Cb, K => ye(K))
        }

        function tt(A) {
            return A.map(K => ye(K) || Ut(K) || Je(K) ? Mb(String(K)) : K)
        }
        const $r = {
            normalize: tt,
            interpolate: A => A,
            type: "vnode"
        };

        function rr(...A) {
            return be(K => {
                let he;
                const pe = K;
                try {
                    pe.processor = $r, he = Reflect.apply(Rb, null, [pe, ...A])
                } finally {
                    pe.processor = null
                }
                return he
            }, () => lh(...A), "translate", K => K[fh](...A), K => [Mb(K)], K => yt(K))
        }

        function mr(...A) {
            return be(K => Reflect.apply(xb, null, [K, ...A]), () => uh(...A), "number format", K => K[hh](...A), () => [], K => ye(K) || yt(K))
        }

        function at(...A) {
            return be(K => Reflect.apply(Lb, null, [K, ...A]), () => ch(...A), "datetime format", K => K[dh](...A), () => [], K => ye(K) || yt(K))
        }

        function Tt(A) {
            G = A, j.pluralRules = G
        }

        function ot(A, K) {
            const he = ye(K) ? K : o.value,
                pe = xt(he);
            return j.messageResolver(pe, A) !== null
        }

        function kt(A) {
            let K = null;
            const he = dw(j, l.value, o.value);
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
            u.value[A] = u.value[A] || {}, qa(K, u.value[A]), j.messages = u.value
        }

        function O(A) {
            return f.value[A] || {}
        }

        function D(A, K) {
            f.value[A] = K, j.datetimeFormats = f.value, kb(j, A, K)
        }

        function B(A, K) {
            f.value[A] = er(f.value[A] || {}, K), j.datetimeFormats = f.value, kb(j, A, K)
        }

        function Y(A) {
            return h.value[A] || {}
        }

        function ce(A, K) {
            h.value[A] = K, j.numberFormats = h.value, Db(j, A, K)
        }

        function se(A, K) {
            h.value[A] = er(h.value[A] || {}, K), j.numberFormats = h.value, Db(j, A, K)
        }
        Fb++, r && ah && (Qi(r.locale, A => {
            s && (o.value = A, j.locale = A, Ra(j, o.value, l.value))
        }), Qi(r.fallbackLocale, A => {
            s && (l.value = A, j.fallbackLocale = A, Ra(j, o.value, l.value))
        }));
        const re = {
            id: Fb,
            locale: le,
            fallbackLocale: ue,
            get inheritLocale() {
                return s
            },
            set inheritLocale(A) {
                s = A, A && r && (o.value = r.locale.value, l.value = r.fallbackLocale.value, Ra(j, o.value, l.value))
            },
            get availableLocales() {
                return Object.keys(u.value).sort()
            },
            messages: Ae,
            get modifiers() {
                return X
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
            [Tw]: Tt
        };
        return re.datetimeFormats = Ce, re.numberFormats = fe, re.rt = Oe, re.te = ot, re.tm = Ht, re.d = Fe, re.n = Ge, re.getDateTimeFormat = O, re.setDateTimeFormat = D, re.mergeDateTimeFormat = B, re.getNumberFormat = Y, re.setNumberFormat = ce, re.mergeNumberFormat = se, re[Sw] = e.__injectWithOption, re[fh] = rr, re[dh] = at, re[hh] = mr, re
    }

    function Yee(e) {
        const t = ye(e.locale) ? e.locale : Oo,
            r = ye(e.fallbackLocale) || yt(e.fallbackLocale) || Ue(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : t,
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
        let L = e.messages;
        if (Ue(e.sharedMessages)) {
            const j = e.sharedMessages;
            L = Object.keys(j).reduce((oe, le) => {
                const ue = oe[le] || (oe[le] = {});
                return er(ue, j[le]), oe
            }, L || {})
        }
        const {
            __i18n: M,
            __root: U,
            __injectWithOption: C
        } = e, V = e.datetimeFormats, X = e.numberFormats, G = e.flatJson;
        return {
            locale: t,
            fallbackLocale: r,
            messages: L,
            flatJson: G,
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

    function gh(e = {}, t) {
        {
            const r = Up(Yee(e)),
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
                        return ye(l) ? f.locale = l : yt(l) ? h = l : Ue(l) && (g = l), yt(u) ? h = u : Ue(u) && (g = u), Reflect.apply(r.t, r, [_, h || g || {}, f])
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
                        return ye(l) ? f.locale = l : Ut(l) ? f.plural = l : yt(l) ? h = l : Ue(l) && (g = l), ye(u) ? f.locale = u : yt(u) ? h = u : Ue(u) && (g = u), Reflect.apply(r.t, r, [_, h || g || {}, f])
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
    const jp = {
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

    function zee({
        slots: e
    }, t) {
        return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((n, s) => n = [...n, ...yt(s.children) ? s.children : [s]], []) : t.reduce((r, n) => {
            const s = e[n];
            return s && (r[n] = s()), r
        }, {})
    }

    function ww(e) {
        return ze
    }
    const Ub = {
        name: "i18n-t",
        props: er({
            keypath: {
                type: String,
                required: !0
            },
            plural: {
                type: [Number, String],
                validator: e => Ut(e) || !isNaN(e)
            }
        }, jp),
        setup(e, t) {
            const {
                slots: r,
                attrs: n
            } = t, s = e.i18n || Gp({
                useScope: e.scope,
                __useComponent: !0
            });
            return () => {
                const o = Object.keys(r).filter(_ => _ !== "_"),
                    l = {};
                e.locale && (l.locale = e.locale), e.plural !== void 0 && (l.plural = ye(e.plural) ? +e.plural : e.plural);
                const u = zee(t, o),
                    f = s[fh](e.keypath, u, l),
                    h = er({}, n),
                    g = ye(e.tag) || _t(e.tag) ? e.tag : ww();
                return xh(g, h, f)
            }
        }
    };

    function Xee(e) {
        return yt(e) && !ye(e[0])
    }

    function $w(e, t, r, n) {
        const {
            slots: s,
            attrs: o
        } = t;
        return () => {
            const l = {
                part: !0
            };
            let u = {};
            e.locale && (l.locale = e.locale), ye(e.format) ? l.key = e.format : _t(e.format) && (ye(e.format.key) && (l.key = e.format.key), u = Object.keys(e.format).reduce((E, $) => r.includes($) ? er({}, E, {
                [$]: e.format[$]
            }) : E, {}));
            const f = n(e.value, l, u);
            let h = [l.key];
            yt(f) ? h = f.map((E, $) => {
                const L = s[E.type],
                    M = L ? L({
                        [E.type]: E.value,
                        index: $,
                        parts: f
                    }) : [E.value];
                return Xee(M) && (M[0].key = `${E.type}-${$}`), M
            }) : ye(f) && (h = [f]);
            const g = er({}, o),
                _ = ye(e.tag) || _t(e.tag) ? e.tag : ww();
            return xh(_, g, h)
        }
    }
    const jb = {
            name: "i18n-n",
            props: er({
                value: {
                    type: Number,
                    required: !0
                },
                format: {
                    type: [String, Object]
                }
            }, jp),
            setup(e, t) {
                const r = e.i18n || Gp({
                    useScope: "parent",
                    __useComponent: !0
                });
                return $w(e, t, bw, (...n) => r[hh](...n))
            }
        },
        Gb = {
            name: "i18n-d",
            props: er({
                value: {
                    type: [Number, Date],
                    required: !0
                },
                format: {
                    type: [String, Object]
                }
            }, jp),
            setup(e, t) {
                const r = e.i18n || Gp({
                    useScope: "parent",
                    __useComponent: !0
                });
                return $w(e, t, _w, (...n) => r[dh](...n))
            }
        };

    function Jee(e, t) {
        const r = e;
        if (e.mode === "composition") return r.__getInstance(t) || e.global; {
            const n = r.__getInstance(t);
            return n != null ? n.__composer : e.global.__composer
        }
    }

    function Qee(e) {
        const t = l => {
            const {
                instance: u,
                modifiers: f,
                value: h
            } = l;
            if (!u || !u.$) throw Gt(Mt.UNEXPECTED_ERROR);
            const g = Jee(e, u.$),
                _ = Wb(h);
            return [Reflect.apply(g.t, g, [...Hb(_)]), g]
        };
        return {
            created: (l, u) => {
                const [f, h] = t(u);
                ah && e.global === h && (l.__i18nWatcher = Qi(h.locale, () => {
                    u.instance && u.instance.$forceUpdate()
                })), l.__composer = h, l.textContent = f
            },
            unmounted: l => {
                ah && l.__i18nWatcher && (l.__i18nWatcher(), l.__i18nWatcher = void 0, delete l.__i18nWatcher), l.__composer && (l.__composer = void 0, delete l.__composer)
            },
            beforeUpdate: (l, {
                value: u
            }) => {
                if (l.__composer) {
                    const f = l.__composer,
                        h = Wb(u);
                    l.textContent = Reflect.apply(f.t, f, [...Hb(h)])
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

    function Wb(e) {
        if (ye(e)) return {
            path: e
        };
        if (Ue(e)) {
            if (!("path" in e)) throw Gt(Mt.REQUIRED_VALUE, "path");
            return e
        } else throw Gt(Mt.INVALID_VALUE)
    }

    function Hb(e) {
        const {
            path: t,
            locale: r,
            args: n,
            choice: s,
            plural: o
        } = e, l = {}, u = n || {};
        return ye(r) && (l.locale = r), Ut(s) && (l.plural = s), Ut(o) && (l.plural = o), [t, u, l]
    }

    function Zee(e, t, ...r) {
        const n = Ue(r[0]) ? r[0] : {},
            s = !!n.useI18nComponentName;
        (Je(n.globalInstall) ? n.globalInstall : !0) && (e.component(s ? "i18n" : Ub.name, Ub), e.component(jb.name, jb), e.component(Gb.name, Gb)), e.directive("t", Qee(t))
    }

    function ete(e, t, r) {
        return {
            beforeCreate() {
                const n = ss();
                if (!n) throw Gt(Mt.UNEXPECTED_ERROR);
                const s = this.$options;
                if (s.i18n) {
                    const o = s.i18n;
                    s.__i18n && (o.__i18n = s.__i18n), o.__root = t, this === this.$root ? this.$i18n = Kb(e, o) : (o.__injectWithOption = !0, this.$i18n = gh(o))
                } else s.__i18n ? this === this.$root ? this.$i18n = Kb(e, s) : this.$i18n = gh({
                    __i18n: s.__i18n,
                    __injectWithOption: !0,
                    __root: t
                }) : this.$i18n = e;
                s.__i18nGlobal && Ow(t, s, s), e.__onComponentInstanceCreated(this.$i18n), r.__setInstance(n, this.$i18n), this.$t = (...o) => this.$i18n.t(...o), this.$rt = (...o) => this.$i18n.rt(...o), this.$tc = (...o) => this.$i18n.tc(...o), this.$te = (o, l) => this.$i18n.te(o, l), this.$d = (...o) => this.$i18n.d(...o), this.$n = (...o) => this.$i18n.n(...o), this.$tm = o => this.$i18n.tm(o)
            },
            mounted() {},
            unmounted() {
                const n = ss();
                if (!n) throw Gt(Mt.UNEXPECTED_ERROR);
                delete this.$t, delete this.$rt, delete this.$tc, delete this.$te, delete this.$d, delete this.$n, delete this.$tm, r.__deleteInstance(n), delete this.$i18n
            }
        }
    }

    function Kb(e, t) {
        e.locale = t.locale || e.locale, e.fallbackLocale = t.fallbackLocale || e.fallbackLocale, e.missing = t.missing || e.missing, e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn, e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn, e.formatFallbackMessages = t.formatFallbackMessages || e.formatFallbackMessages, e.postTranslation = t.postTranslation || e.postTranslation, e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage, e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml, e.sync = t.sync || e.sync, e.__composer[Tw](t.pluralizationRules || e.pluralizationRules);
        const r = eu(e.locale, {
            messages: t.messages,
            __i18n: t.__i18n
        });
        return Object.keys(r).forEach(n => e.mergeLocaleMessage(n, r[n])), t.datetimeFormats && Object.keys(t.datetimeFormats).forEach(n => e.mergeDateTimeFormat(n, t.datetimeFormats[n])), t.numberFormats && Object.keys(t.numberFormats).forEach(n => e.mergeNumberFormat(n, t.numberFormats[n])), e
    }
    const tte = Si("global-vue-i18n");

    function rte(e = {}, t) {
        const r = Je(e.legacy) ? e.legacy : !0,
            n = Je(e.globalInjection) ? e.globalInjection : !0,
            s = r ? !!e.allowComposition : !0,
            o = new Map,
            [l, u] = nte(e, r),
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
                async install($, ...L) {
                    $.__VUE_I18N_SYMBOL__ = f, $.provide($.__VUE_I18N_SYMBOL__, E), !r && n && dte($, E.global), Zee($, E, ...L), r && $.mixin(ete(u, u.__composer, E));
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

    function Gp(e = {}) {
        const t = ss();
        if (t == null) throw Gt(Mt.MUST_BE_CALL_SETUP_TOP);
        if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__) throw Gt(Mt.NOT_INSLALLED);
        const r = ite(t),
            n = ate(r),
            s = qee(t),
            o = ste(e, s);
        if (r.mode === "legacy" && !e.__useComponent) {
            if (!r.allowComposition) throw Gt(Mt.NOT_AVAILABLE_IN_LEGACY_MODE);
            return cte(t, o, n, e)
        }
        if (o === "global") return Ow(n, e, s), n;
        if (o === "parent") {
            let f = ote(r, t, e.__useComponent);
            return f == null && (f = n), f
        }
        const l = r;
        let u = l.__getInstance(t);
        if (u == null) {
            const f = er({}, e);
            "__i18n" in s && (f.__i18n = s.__i18n), n && (f.__root = n), u = Up(f), lte(l, t), l.__setInstance(t, u)
        }
        return u
    }

    function nte(e, t, r) {
        const n = EP(); {
            const s = t ? n.run(() => gh(e)) : n.run(() => Up(e));
            if (s == null) throw Gt(Mt.UNEXPECTED_ERROR);
            return [n, s]
        }
    }

    function ite(e) {
        {
            const t = Ji(e.isCE ? tte : e.appContext.app.__VUE_I18N_SYMBOL__);
            if (!t) throw Gt(e.isCE ? Mt.NOT_INSLALLED_WITH_PROVIDE : Mt.UNEXPECTED_ERROR);
            return t
        }
    }

    function ste(e, t) {
        return Jc(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local"
    }

    function ate(e) {
        return e.mode === "composition" ? e.global : e.global.__composer
    }

    function ote(e, t, r = !1) {
        let n = null;
        const s = t.root;
        let o = t.parent;
        for (; o != null;) {
            const l = e;
            if (e.mode === "composition") n = l.__getInstance(o);
            else {
                const u = l.__getInstance(o);
                u != null && (n = u.__composer, r && n && !n[Sw] && (n = null))
            }
            if (n != null || s === o) break;
            o = o.parent
        }
        return n
    }

    function lte(e, t, r) {
        Ah(() => {}, t), Nh(() => {
            e.__deleteInstance(t)
        }, t)
    }

    function cte(e, t, r, n = {}) {
        const s = t === "local",
            o = zP(null);
        if (s && e.proxy && !(e.proxy.$options.i18n || e.proxy.$options.__i18n)) throw Gt(Mt.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
        const l = Je(n.inheritLocale) ? n.inheritLocale : !0,
            u = on(s && l ? r.locale.value : ye(n.locale) ? n.locale : Oo),
            f = on(s && l ? r.fallbackLocale.value : ye(n.fallbackLocale) || yt(n.fallbackLocale) || Ue(n.fallbackLocale) || n.fallbackLocale === !1 ? n.fallbackLocale : u.value),
            h = on(eu(u.value, n)),
            g = on(Ue(n.datetimeFormats) ? n.datetimeFormats : {
                [u.value]: {}
            }),
            _ = on(Ue(n.numberFormats) ? n.numberFormats : {
                [u.value]: {}
            }),
            E = s ? r.missingWarn : Je(n.missingWarn) || gi(n.missingWarn) ? n.missingWarn : !0,
            $ = s ? r.fallbackWarn : Je(n.fallbackWarn) || gi(n.fallbackWarn) ? n.fallbackWarn : !0,
            L = s ? r.fallbackRoot : Je(n.fallbackRoot) ? n.fallbackRoot : !0,
            M = !!n.fallbackFormat,
            U = Rt(n.missing) ? n.missing : null,
            C = Rt(n.postTranslation) ? n.postTranslation : null,
            V = s ? r.warnHtmlMessage : Je(n.warnHtmlMessage) ? n.warnHtmlMessage : !0,
            X = !!n.escapeParameter,
            G = s ? r.modifiers : Ue(n.modifiers) ? n.modifiers : {},
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

        function Ct(p) {
            return o.value ? o.value.getLocaleMessage(p) : {}
        }

        function $r(p, O) {
            o.value && (o.value.setLocaleMessage(p, O), h.value[p] = O)
        }

        function rr(p, O) {
            o.value && o.value.mergeLocaleMessage(p, O)
        }

        function mr(p) {
            return o.value ? o.value.getDateTimeFormat(p) : {}
        }

        function at(p, O) {
            o.value && (o.value.setDateTimeFormat(p, O), g.value[p] = O)
        }

        function Tt(p, O) {
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
                return o.value ? o.value.fallbackWarn : $
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
            getLocaleMessage: Ct,
            setLocaleMessage: $r,
            mergeLocaleMessage: rr,
            getDateTimeFormat: mr,
            setDateTimeFormat: at,
            mergeDateTimeFormat: Tt,
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
            }), p.escapeParameter = X, p.fallbackFormat = M, p.fallbackRoot = L, p.fallbackWarn = $, p.missingWarn = E, p.warnHtmlMessage = V
        }
        return NE(() => {
            if (e.proxy == null || e.proxy.$i18n == null) throw Gt(Mt.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
            const p = o.value = e.proxy.$i18n.__composer;
            t === "global" ? (u.value = p.locale.value, f.value = p.fallbackLocale.value, h.value = p.messages.value, g.value = p.datetimeFormats.value, _.value = p.numberFormats.value) : s && m(p)
        }), xt
    }
    const ute = ["locale", "fallbackLocale", "availableLocales"],
        fte = ["t", "rt", "d", "n", "tm"];

    function dte(e, t) {
        const r = Object.create(null);
        ute.forEach(n => {
            const s = Object.getOwnPropertyDescriptor(t, n);
            if (!s) throw Gt(Mt.UNEXPECTED_ERROR);
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
        }), e.config.globalProperties.$i18n = r, fte.forEach(n => {
            const s = Object.getOwnPropertyDescriptor(t, n);
            if (!s || !s.value) throw Gt(Mt.UNEXPECTED_ERROR);
            Object.defineProperty(e.config.globalProperties, `$${n}`, s)
        })
    }
    Dee(jee);
    Mee(_ee);
    Fee(dw);
    const hte = et({
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
        pte = "main/pp9/antique-freak/assets/c8afd972.svg",
        gte = {
            class: "constrain"
        },
        mte = {
            class: "text"
        },
        vte = {
            class: "subtext"
        },
        yte = {
            key: 0,
            class: "warning"
        },
        _te = {
            key: 1,
            class: "spinner"
        };

    function bte(e, t, r, n, s, o) {
        return W(), fn(wc, {
            name: "toast-transition"
        }, {
            default: Ih(() => [e.isVisible && e.options ? (W(), z("div", {
                key: 0,
                class: xe([e.options.type, "jbg toast"])
            }, [H("div", gte, [H("img", {
                class: "close",
                alt: "close",
                src: pte,
                onClick: t[0] || (t[0] = (...l) => e.hide && e.hide(...l)),
                onKeydown: t[1] || (t[1] = XE((...l) => e.hide && e.hide(...l), ["esc"]))
            }, null, 32), H("p", mte, rt(e.options.text), 1), H("p", vte, rt(e.options.subtext), 1), e.options.warning ? (W(), z("p", yte, rt(e.options.warning), 1)) : Se("", !0), e.options.type === "reconnecting" ? (W(), z("div", _te)) : Se("", !0)])], 2)) : Se("", !0)]),
            _: 1
        })
    }
    const Ete = ct(hte, [
            ["render", bte],
            ["__scopeId", "data-v-0a136edf"]
        ]),
        Tte = {
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
                e.component("Toast", Ete), e.config.globalProperties.$showToast = r, e.config.globalProperties.$hideToast = n, e.config.globalProperties.$registerToast = s
            }
        },
        Ste = et({
            props: {
                options: Object,
                mainView: Object
            },
            setup() {
                return {
                    fatalError: Ji(Eo.fatal.error)
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

    function Ote(e, t, r, n, s, o) {
        const l = Xr("Fatal"),
            u = Xr("TextDescriptions"),
            f = Xr("Debug"),
            h = Xr("Modal"),
            g = Xr("Toast");
        return e.shouldShowFatal ? (W(), fn(l, {
            key: 0
        })) : (W(), z(ze, {
            key: 1
        }, [wt(u), (W(), fn(Ec(e.mainView), fo({
            id: "game",
            class: e.classes
        }, e.ecastValues), null, 16, ["class"])), wt(f), wt(h), wt(g)], 64))
    }
    const Vb = ct(Ste, [
            ["render", Ote]
        ]),
        wte = e => {
            let t;
            window.tv.register({
                connect: r => (t = new Sr.WSClient(r), t.connect()),
                mount: r => {
                    var l, u, f, h;
                    Vb.name = r.app;
                    let n = DL(Vb, {
                        options: r,
                        mainView: e.MainView
                    });
                    r.client && (t = r.client);
                    let s;
                    (l = r.room) != null && l.locale && (s = r.room.locale), (f = (u = r.match) == null ? void 0 : u.params) != null && f.locale && (s = r.match.params.locale), Bs.set(s);
                    const o = rte({
                        fallbackLocale: "en",
                        locale: Bs.locale,
                        messages: Bs.mergeMessages(MW, (h = e.messages) != null ? h : {})
                    });
                    if (n.use(BY), n.use(AZ), n.use(gX, {
                            replayer: r.replayer,
                            client: t,
                            room: r.room
                        }), n.use(k7, {
                            wsClient: t,
                            room: r.room,
                            welcome: r.welcome
                        }), n.use(NQ), n.use(o), n.use(aZ, {
                            i18n: o
                        }), n.use(kZ), n.use(xZ), n.use(Tte), n.use(DZ), e.plugins) {
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
        $te = {
            PRESENTATION_PROMPT: "How does your group want to showcase their writing?",
            PRESENTATION_CHOICE_YES: "Manually Present",
            PRESENTATION_CHOICE_NO: "Auto-Present",
            PRESENTATION_MODE: "Presentation Mode:",
            ON: "On",
            OFF: "Off",
            AVATAR_SELECT_PROMPT: "Choose your accessory!",
            CHANGE_MODE: "Toggle"
        },
        Cte = {
            CHOOSE_PROMPT: "choose a prompt",
            WRITE_SOMETHING: "You need to write something!",
            PLACEHOLDER: "write here",
            FILTER_ERROR: "that's not allowed, enter something else! (you can change the level of filtering in the game's settings menu)"
        },
        Ite = {
            UP_NEXT: "Up next"
        },
        Ate = {
            AUDIENCE_THANKS: "Thanks!"
        },
        Nte = {
            LOBBY: $te,
            FACT: Cte,
            RANKING: Ite,
            CHOOSING: Ate
        },
        Pte = {
            en: Nte
        },
        Rte = et({
            props: {
                player: {
                    type: Object,
                    required: !0
                },
                info: {
                    type: Object,
                    required: !0
                },
                audience: Boolean
            },
            data() {
                return {
                    isSubmitting: !1,
                    questionsDone: !1,
                    chosen: void 0,
                    questionIndex: 0,
                    doneChoosing: !1,
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
                    const t = e.type ? e.type : "jpg";
                    return `https://s3.amazonaws.com/static.jackboxgames.com/game-images/antique-game/${e.id}.${t}`
                },
                resetData() {
                    this.isSubmitting = !1, this.chosen = void 0, this.questionIndex = 0, this.responses = []
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
        Lte = {
            class: "ranking scrollable"
        },
        kte = {
            class: "constrain content"
        },
        xte = {
            class: "prompt"
        },
        Dte = {
            key: 0
        },
        Mte = ["disabled"],
        Fte = {
            key: 0
        },
        Bte = {
            class: "prompt"
        },
        Ute = H("div", {
            class: "hr"
        }, null, -1),
        jte = {
            class: "choices"
        },
        Gte = ["disabled", "aria-labelledby", "onClick"],
        Wte = ["alt", "src"],
        Hte = ["id"],
        Kte = {
            key: 0,
            class: "up-next"
        },
        Vte = {
            class: "up-next-header"
        },
        qte = ["alt", "src"],
        Yte = {
            key: 0,
            class: "footer"
        },
        zte = {
            class: "constrain"
        };

    function Xte(e, t, r, n, s, o) {
        const l = Dt("bb"),
            u = Dt("t");
        return W(), z("div", Lte, [H("div", kte, [Ie(H("div", xte, null, 512), [
            [l, e.player.prompt]
        ]), e.audience && e.questionsDone ? Ie((W(), z("div", Dte, null, 512)), [
            [u, "CHOOSING.AUDIENCE_THANKS"]
        ]) : Se("", !0), H("fieldset", {
            disabled: e.isSubmitting || e.questionsDone
        }, [e.currentQuestion ? (W(), z("div", Fte, [Ie(H("div", Bte, null, 512), [
            [l, e.currentQuestion.prompt]
        ]), Ute, H("div", jte, [(W(!0), z(ze, null, Or(e.currentQuestion.choices, (f, h) => (W(), z("div", {
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
        }, [f.photo ? (W(), z("img", {
            key: 0,
            class: "photo",
            alt: `${f.photo.alt}`,
            src: e.getItemImage(f.photo)
        }, null, 8, Wte)) : Se("", !0)], 10, Gte), Ie(H("span", {
            id: `title_${e.questionIndex}_${h}`,
            class: "text"
        }, null, 8, Hte), [
            [l, f.text]
        ])]))), 128))]), e.nextPhotos ? (W(), z("div", Kte, [H("div", Vte, [Ie(H("span", null, null, 512), [
            [u, "RANKING.UP_NEXT"]
        ])]), (W(!0), z(ze, null, Or(e.nextPhotos, (f, h) => (W(), z("div", {
            key: `choice_${h}`,
            class: "choice photo-banner half"
        }, [f.photo ? (W(), z("img", {
            key: 0,
            class: "photo",
            alt: `${f.photo.alt}`,
            src: e.getItemImage(f.photo)
        }, null, 8, qte)) : Se("", !0)]))), 128))])) : Se("", !0)])) : Se("", !0)], 8, Mte)]), e.player.footer ? (W(), z("div", Yte, [H("div", zte, [Ie(H("span", null, null, 512), [
            [l, e.player.footer]
        ])])])) : Se("", !0)])
    }
    const Jte = ct(Rte, [
            ["render", Xte]
        ]),
        Qte = et({
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
        Zte = {
            class: "haggleOverlay"
        },
        ere = {
            key: 0,
            class: "haggleDialog constrain"
        },
        tre = {
            class: "prompt"
        },
        rre = {
            class: "choices"
        },
        nre = ["onClick"],
        ire = {
            class: "text"
        };

    function sre(e, t, r, n, s, o) {
        const l = Dt("bb");
        return W(), z("div", Zte, [e.player.haggle ? (W(), z("div", ere, [H("button", {
            class: "haggleClose",
            onClick: t[0] || (t[0] = Zt((...u) => e.haggleClose && e.haggleClose(...u), ["prevent"]))
        }), Ie(H("div", tre, null, 512), [
            [l, e.player.haggle.prompt]
        ]), H("div", rre, [(W(!0), z(ze, null, Or(e.player.haggle.choices, (u, f) => (W(), z("button", {
            key: `haggle_${e.player.choiceId}_${f}`,
            class: "choice gold-button",
            onClick: h => e.clickHaggleChoice(h, f)
        }, [Ie(H("span", ire, null, 512), [
            [l, u.text]
        ])], 8, nre))), 128))])])) : Se("", !0)])
    }
    const are = ct(Qte, [
            ["render", sre]
        ]),
        ore = et({
            components: {
                HaggleDialog: are
            },
            props: {
                player: {
                    type: Object,
                    required: !0
                },
                info: {
                    type: Object
                },
                audience: Boolean
            },
            data() {
                return {
                    isSubmitting: !1,
                    showHaggle: !1,
                    chosen: void 0,
                    chosenIndex: -1
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
                    if (!e) return "";
                    const t = e.type ? e.type : "jpg";
                    return `https://s3.amazonaws.com/static.jackboxgames.com/game-images/antique-game/${e.id}.${t}`
                },
                resetData() {
                    this.isSubmitting = !1, this.chosen = void 0, this.showHaggle = !1, this.chosenIndex = -1
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
                        const t = `${e}`,
                            r = this.player.countGroupName;
                        await this.$ecast.incrementCountGroupCounter(r, t)
                    } catch (t) {
                        if (t instanceof ts.EcastServerError && t.message.startsWith("no entity found")) return this.isSubmitting = !1, console.warn("unhandled ecast error: ", t);
                        this.$handleEcastError(t), this.isSubmitting = !1
                    }
                }
            }
        }),
        lre = {
            class: "choosing scrollable"
        },
        cre = ["disabled"],
        ure = {
            class: "prompt-text"
        },
        fre = H("div", {
            class: "hr"
        }, null, -1),
        dre = {
            key: 0,
            class: "prompt"
        },
        hre = {
            class: "photo-banner"
        },
        pre = ["alt", "src"],
        gre = ["disabled", "onClick"],
        mre = ["alt", "src"],
        vre = {
            key: 1
        },
        yre = ["alt", "src"],
        _re = {
            key: 2
        };

    function bre(e, t, r, n, s, o) {
        const l = Xr("HaggleDialog"),
            u = Dt("bb"),
            f = Dt("t");
        return W(), z("div", lre, [H("div", {
            class: xe(["constrain content", e.isShopping ? "shopping" : ""])
        }, [H("fieldset", {
            disabled: e.isSubmitting || e.chosenIndex !== -1
        }, [Ie(H("div", ure, null, 512), [
            [u, e.player.prompt]
        ]), fre, e.player.photo ? (W(), z("div", dre, [H("div", hre, [H("img", {
            class: "photo",
            alt: `${e.player.photo.alt}`,
            src: e.getItemImage(e.player.photo)
        }, null, 8, pre)])])) : Se("", !0), e.player.price ? Ie((W(), z("div", {
            key: 1,
            class: xe(["price-tag", e.player.price.category])
        }, null, 2)), [
            [u, e.player.price.text]
        ]) : Se("", !0), Ie(H("div", {
            class: xe(["choices", e.isPrePresenting && "pre-presenting"])
        }, [(W(!0), z(ze, null, Or(e.player.choices, (h, g) => (W(), z("button", {
            key: `choice_${e.player.choiceId}_${g}`,
            class: xe(["choice", [{
                chosen: e.chosenIndex === g,
                "photo-button": h.photo,
                "gold-button": !h.photo,
                selected: h.selected,
                disabled: h.disabled,
                "collection-banner": h.photo && Array.isArray(h.photo),
                "fact-button": e.isPresenting && g !== 3
            }, h.category]]),
            disabled: h.disabled,
            onClick: _ => e.clickChoice(_, g)
        }, [h.photo && !Array.isArray(h.photo) ? (W(), z("img", {
            key: 0,
            class: "photo",
            alt: `${h.photo.alt}`,
            src: e.getItemImage(h.photo)
        }, null, 8, mre)) : Se("", !0), h.photo && Array.isArray(h.photo) ? (W(), z("span", vre, [(W(!0), z(ze, null, Or(h.photo, (_, E) => (W(), z("img", {
            key: `photo_${g}_${E}`,
            class: "photo half",
            alt: `${_.alt}`,
            src: e.getItemImage(_)
        }, null, 8, yre))), 128))])) : Se("", !0), Ie(H("span", null, null, 512), [
            [u, h.text]
        ])], 10, gre))), 128))], 2), [
            [JE, !(e.audience && e.chosenIndex !== -1)]
        ]), e.audience && e.chosenIndex !== -1 ? Ie((W(), z("div", _re, null, 512)), [
            [f, "CHOOSING.AUDIENCE_THANKS"]
        ]) : Se("", !0)], 8, cre)], 2), e.showHaggle ? (W(), fn(l, {
            key: 0,
            player: e.player,
            "haggle-close": e.haggleClose,
            "click-haggle-choice": e.clickHaggleChoice
        }, null, 8, ["player", "haggle-close", "click-haggle-choice"])) : Se("", !0)])
    }
    const Ere = ct(ore, [
            ["render", bre]
        ]),
        Tre = et({
            components: {
                GalleryLink: KH,
                PostGameActions: AS
            },
            props: {
                artifact: Object,
                player: Object
            }
        }),
        Sre = e => (co("data-v-9a3fae15"), e = e(), uo(), e),
        Ore = {
            class: "post-game scrollable"
        },
        wre = {
            class: "constrain"
        },
        $re = Sre(() => H("div", {
            class: "hr"
        }, null, -1));

    function Cre(e, t, r, n, s, o) {
        const l = Xr("PostGameActions"),
            u = Xr("GalleryLink");
        return W(), z("div", Ore, [H("div", wre, [wt(l, {
            player: e.player,
            classes: {
                message: "message",
                action: "action gold-button",
                status: "status"
            }
        }, null, 8, ["player"]), $re, e.artifact ? (W(), fn(u, {
            key: 0,
            artifact: e.artifact
        }, null, 8, ["artifact"])) : Se("", !0)])])
    }
    const Ire = ct(Tre, [
            ["render", Cre],
            ["__scopeId", "data-v-9a3fae15"]
        ]),
        Are = et({
            props: {
                player: {
                    type: Object,
                    required: !0
                },
                info: {
                    type: Object,
                    required: !0
                },
                writing: Boolean
            },
            data() {
                return {
                    answer: "",
                    chosenIndex: null,
                    isSubmitting: !1,
                    validationError: "",
                    filterError: !1,
                    autoSubmitter: void 0
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
                    return this.answer ? ar.sanitizeInput(this.answer).trim() : ""
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
                    this.chosenIndex = null, this.answer = "", this.isSubmitting = !1, Dd.update(this.$refs.textarea)
                }
            },
            beforeMount() {
                this.answer = ""
            },
            mounted() {
                this.autoSubmitter = ec.exports.throttle(this.autoSubmit.bind(this), 400), Dd(this.$refs.textarea), this.player.textKey && this.restoreText()
            },
            beforeUnmount() {
                var e;
                (e = this.autoSubmitter) == null || e.cancel()
            },
            methods: {
                getItemImage(e) {
                    if (!e) return "";
                    const t = e.type ? e.type : "jpg";
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
                        e instanceof ts.EcastFilterError || this.$handleEcastError(e), await this.$ecast.updateText(this.player.textKey, "")
                    }
                },
                onKeypress(e) {
                    e.key === "Enter" && this.onSubmit()
                },
                onInput(e) {
                    const t = e.target;
                    this.answer = ar.sanitizeInput(t.value), this.filterError = !1, this.autoSubmitter && this.autoSubmitter()
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
                                this.$refs.textarea instanceof HTMLElement && this.$refs.textarea.focus()
                            }, 0)
                        }
                    }
                }
            }
        }),
        Nre = {
            class: "fact-view choosing scrollable"
        },
        Pre = {
            class: "constrain content"
        },
        Rre = {
            for: "textinput"
        },
        Lre = {
            class: "prompt"
        },
        kre = {
            class: "input-container"
        },
        xre = ["textContent"],
        Dre = ["maxlength", "placeholder"],
        Mre = {
            key: 1,
            class: "prompt"
        },
        Fre = {
            class: "photo-banner"
        },
        Bre = ["alt", "src"],
        Ure = {
            key: 2,
            class: "prompt"
        },
        jre = {
            class: "photoBanner"
        },
        Gre = ["alt", "src"],
        Wre = {
            key: 3,
            class: "inputLine"
        },
        Hre = ["disabled"],
        Kre = {
            key: 4
        },
        Vre = {
            class: "choices"
        },
        qre = ["disabled", "onClick"],
        Yre = {
            class: "text"
        },
        zre = {
            key: 5,
            class: "fact-info"
        };

    function Xre(e, t, r, n, s, o) {
        const l = Dt("bb");
        return W(), z("div", Nre, [H("div", Pre, [H("form", {
            autocomplete: "off",
            onSubmit: t[3] || (t[3] = Zt((...u) => e.onSubmit && e.onSubmit(...u), ["prevent"]))
        }, [e.showInput ? Se("", !0) : Ie((W(), z("div", {
            key: 0,
            class: xe(["prompt", !e.writing && "item-title"])
        }, null, 2)), [
            [l, e.player.prompt]
        ]), H("label", Rre, [Ie(H("div", Lre, null, 512), [
            [l, e.inputPrompt]
        ])]), Ie(H("div", kre, [H("div", {
            class: xe(["character-count", {
                "too-long": e.player.maxLength - e.sanitizedAnswer.length < 0
            }]),
            textContent: rt(e.remainingCharacters)
        }, null, 10, xre), Ie(H("textarea", {
            id: "textinput",
            ref: "textarea",
            "onUpdate:modelValue": t[0] || (t[0] = u => e.answer = u),
            autocapitalize: "off",
            rows: "1",
            maxlength: e.player.maxLength,
            placeholder: e.$t("FACT.PLACEHOLDER"),
            onInput: t[1] || (t[1] = (...u) => e.onInput && e.onInput(...u)),
            onKeypress: t[2] || (t[2] = (...u) => e.onKeypress && e.onKeypress(...u))
        }, null, 40, Dre), [
            [Od, e.answer]
        ])], 512), [
            [JE, e.showInput]
        ]), e.hasPhoto ? (W(), z("div", Mre, [H("div", Fre, [H("img", {
            class: "photo",
            alt: `${e.player.photo.alt}`,
            src: e.getItemImage(e.player.photo)
        }, null, 8, Bre)])])) : Se("", !0), e.hasPhotos ? (W(), z("div", Ure, [H("div", jre, [(W(!0), z(ze, null, Or(e.player.photo, (u, f) => (W(), z("img", {
            key: `photo_${e.player.choiceId}_${f}`,
            class: "photo half",
            alt: `${u.alt}`,
            src: e.getItemImage(u)
        }, null, 8, Gre))), 128))])])) : Se("", !0), e.showInput ? (W(), z("div", Wre, [H("button", {
            class: "submit gold-button",
            type: "submit",
            value: "Submit",
            disabled: !e.canSubmit
        }, rt(e.$t("ACTION.SUBMIT")), 9, Hre)])) : (W(), z("div", Kre, [H("div", Vre, [(W(!0), z(ze, null, Or(e.player.choices, (u, f) => (W(), z("button", {
            key: `choice_${e.player.choiceId}_${f}`,
            class: xe(["choice gold-button", {
                chosen: e.chosenIndex === f,
                selected: u.selected,
                disabled: u.disabled
            }]),
            disabled: u.disabled,
            onClick: Zt(h => e.voteClicked(h, f), ["prevent"])
        }, [Ie(H("span", Yre, null, 512), [
            [l, u.text]
        ])], 10, qre))), 128))])])), e.writing && !!e.player.factIndex ? (W(), z("div", zre, "Fact " + rt(e.player.factIndex + 1) + "/" + rt(e.player.factCount), 1)) : Se("", !0)], 32)])])
    }
    const Jre = ct(Are, [
            ["render", Xre]
        ]),
        Qre = et({
            extends: NS,
            props: {
                player: {
                    type: Object,
                    required: !0
                },
                artifact: Object,
                audience: Boolean
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
                getPromptClass() {
                    return this.player.price ? this.player.price.category ? this.player.price.category : "empty" : ""
                },
                getItemImage(e) {
                    if (!e) return "";
                    const t = e.type ? e.type : "jpg";
                    return `https://s3.amazonaws.com/static.jackboxgames.com/game-images/antique-game/${e.id}.${t}`
                }
            }
        }),
        Zre = {
            class: "waiting scrollable"
        },
        ene = {
            class: "constrain content"
        },
        tne = {
            key: 1,
            class: "hr"
        },
        rne = {
            key: 2,
            class: "prompt"
        },
        nne = {
            class: "photo-banner"
        },
        ine = ["alt", "src"],
        sne = {
            key: 3,
            class: "prompt"
        },
        ane = {
            class: "collection-banner"
        },
        one = ["alt", "src"],
        lne = {
            key: 5,
            class: "logo"
        };

    function cne(e, t, r, n, s, o) {
        const l = Dt("bb");
        return W(), z("div", Zre, [H("div", ene, [e.player.message ? Ie((W(), z("p", {
            key: 0,
            class: xe(["prompt", e.getPromptClass()])
        }, null, 2)), [
            [l, e.player.message]
        ]) : Se("", !0), e.hasPhoto ? (W(), z("div", tne)) : Se("", !0), e.hasPhoto ? (W(), z("div", rne, [H("div", nne, [H("img", {
            class: "photo",
            alt: `${e.player.photo.alt}`,
            src: e.getItemImage(e.player.photo)
        }, null, 8, ine)])])) : Se("", !0), e.hasPhotos ? (W(), z("div", sne, [H("div", ane, [(W(!0), z(ze, null, Or(e.player.photo, (u, f) => (W(), z("img", {
            key: `photo_${e.player.choiceId}_${f}`,
            class: "photo half",
            alt: `${u.alt}`,
            src: e.getItemImage(u)
        }, null, 8, one))), 128))])])) : Se("", !0), e.player.price ? Ie((W(), z("div", {
            key: 4,
            class: xe(e.player.price.category + " price-tag")
        }, null, 2)), [
            [l, e.player.price.text]
        ]) : Se("", !0), e.player.photo ? Se("", !0) : (W(), z("div", lne))])])
    }
    const une = ct(Qre, [
            ["render", cne]
        ]),
        fne = et({
            name: "Switch",
            props: {
                checked: {
                    type: Boolean,
                    required: !0
                }
            }
        }),
        dne = e => (co("data-v-e61fc9b8"), e = e(), uo(), e),
        hne = {
            id: "toggleMode",
            class: "switchContainer"
        },
        pne = ["checked"],
        gne = dne(() => H("span", {
            class: "switch"
        }, null, -1));

    function mne(e, t, r, n, s, o) {
        return W(), z("label", hne, [H("input", fo(e.$attrs, {
            class: "input",
            type: "checkbox",
            checked: e.checked,
            onChange: t[0] || (t[0] = l => e.$emit("update:checked", l.target.checked))
        }), null, 16, pne), gne])
    }
    const vne = ct(fne, [
            ["render", mne],
            ["__scopeId", "data-v-e61fc9b8"]
        ]),
        yne = et({
            components: {
                LobbyActions: IS,
                Switch: vne
            },
            props: {
                player: Object,
                info: Object
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
                async onClick() {
                    !this.player || this.player.responseKey && await this.$ecast.updateObject(this.player.responseKey, {
                        presentationModeOn: !this.player.presentationModeOn
                    })
                },
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
        _ne = {
            class: "lobby scrollable"
        },
        bne = {
            class: "constrain content"
        },
        Ene = {
            class: "prompt"
        },
        Tne = H("div", {
            class: "hr"
        }, null, -1),
        Sne = {
            class: "mode-choice"
        },
        One = {
            class: "avatar-prompt prompt"
        },
        wne = H("div", {
            class: "hr"
        }, null, -1),
        $ne = {
            class: "avatars"
        },
        Cne = ["aria-label", "disabled", "onClick"],
        Ine = {
            key: 0,
            class: "toggle-action"
        },
        Ane = {
            class: "current-mode"
        },
        Nne = {
            for: "toggleMode"
        },
        Pne = {
            key: 0
        },
        Rne = {
            key: 1
        };

    function Lne(e, t, r, n, s, o) {
        var h, g, _, E;
        const l = Xr("Switch"),
            u = Xr("LobbyActions"),
            f = Dt("t");
        return W(), z("div", _ne, [H("div", bne, [e.player && e.player.canChooseMode && e.player.presentationModeOn === void 0 ? (W(), z(ze, {
            key: 0
        }, [H("div", Ene, rt(e.$t("LOBBY.PRESENTATION_PROMPT")), 1), Tne, H("div", Sne, [H("button", {
            class: "gold-button modeButton",
            onClick: t[0] || (t[0] = Zt($ => e.onModeClick(!1), ["prevent"]))
        }, rt(e.$t("LOBBY.PRESENTATION_CHOICE_NO")), 1), H("button", {
            class: "gold-button modeButton manual",
            onClick: t[1] || (t[1] = Zt($ => e.onModeClick(!0), ["prevent"]))
        }, rt(e.$t("LOBBY.PRESENTATION_CHOICE_YES")), 1)])], 64)) : e.info && !e.info.avatarName ? (W(), z(ze, {
            key: 1
        }, [Ie(H("div", One, null, 512), [
            [f, "LOBBY.AVATAR_SELECT_PROMPT"]
        ]), wne, H("div", $ne, [(W(!0), z(ze, null, Or(e.player.avatars, ($, L) => (W(), z("div", {
            key: $.name,
            class: "avatarContainer"
        }, [H("button", {
            "aria-label": $.alt,
            disabled: !$.available || e.info.avatarName === $.name,
            class: xe(["avatar", `avatar_${$.name}`, {
                active: parseInt(L) === e.activeIndex,
                chosen: !$.available,
                selected: e.info && $.available && e.info.avatarName === $.name
            }]),
            onClick: Zt(M => e.onAvatarClick(M, L), ["prevent"])
        }, null, 10, Cne)]))), 128))])], 64)) : (W(), z(ze, {
            key: 2
        }, [e.player.canChooseMode ? (W(), z("div", Ine, [H("div", Ane, [Ie(H("label", Nne, null, 512), [
            [f, "LOBBY.PRESENTATION_MODE"]
        ]), (h = e.player) != null && h.presentationModeOn ? (W(), z("span", Pne, rt(e.$t("LOBBY.ON")), 1)) : (W(), z("span", Rne, rt(e.$t("LOBBY.OFF")), 1))]), H("div", {
            class: xe(["modeIcon", {
                manual: (g = e.player) == null ? void 0 : g.presentationModeOn
            }])
        }, null, 2), wt(l, {
            checked: (_ = e.player) == null ? void 0 : _.presentationModeOn,
            "onUpdate:checked": e.onModeToggle
        }, null, 8, ["checked", "onUpdate:checked"])])) : Se("", !0), H("div", {
            class: xe(["hr", (E = e.player) != null && E.canChooseMode ? "" : "top"])
        }, null, 2), wt(u, {
            player: e.player,
            classes: {
                message: "message",
                action: "action gold-button",
                status: "status"
            }
        }, null, 8, ["player"])], 64))])])
    }
    const kne = ct(yne, [
            ["render", Lne]
        ]),
        xne = et({
            bb: {
                line: (e, t, r) => `<div class="${r.line?`${r.line} line`:"line"}">${t}</div>`,
                blank: (e, t, r) => '<span class="blank">___</span>',
                title: {
                    generator: (e, t) => `<span class="title">${t}</span>`,
                    options: {
                        noNesting: !0
                    }
                },
                fact: {
                    generator: (e, t) => `<span class="fact">${t}</span>`,
                    options: {
                        noNesting: !0
                    }
                },
                price: (e, t, r) => `<div class="price ${r.line?`${r.line} price`:"price"}">${t}</div>`,
                success: (e, t, r) => `<div class="${r.line?`${r.line} success`:"success"}">${t}</div>`,
                failure: (e, t, r) => `<div class="${r.line?`${r.line} failure`:"failure"}">${t}</div>`
            },
            themeColor: "#DBD182",
            components: {
                Lobby: kne,
                Choosing: Ere,
                PostGame: Ire,
                Ranking: Jte,
                Waiting: une,
                Fact: Jre,
                Fallbacks: jH
            },
            ecastKeys: {
                info: ({
                    id: e
                }) => `info:${e}`,
                player: ({
                    id: e
                }) => `player:${e}`,
                audience: "audiencePlayer",
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
                info: Object,
                player: Object,
                audience: Object,
                artifact: Object
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
                    e.classList.contains("hasTransition") && await ar.sleep(600), t()
                },
                handleResize() {
                    this.windowHeight = window.innerHeight
                }
            }
        }),
        Dne = {
            class: "antiquegame"
        };

    function Mne(e, t, r, n, s, o) {
        return W(), z("div", Dne, [e.isReady && e.screen ? (W(), fn(Ec(e.screen[0]), fo({
            key: 0,
            role: "main"
        }, e.screen[1]), null, 16)) : Se("", !0)])
    }
    const Fne = ct(xne, [
        ["render", Mne]
    ]);
    wte({
        MainView: Fne,
        messages: Pte
    })
});
export default Bne();
//# sourceMappingURL=7f80db12.js.map